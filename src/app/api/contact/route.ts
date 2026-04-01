import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { escapeHtml } from '@/lib/sanitize';
import { checkRateLimit } from '@/lib/rate-limit';

// ─── Allowed values ────────────────────────────────────────────────────────────

const TOUR_OPTIONS = [
  'Inshore Fishing',
  'Offshore Fishing',
  'Custom Charter',
  'Handmade Lures',
  'General Enquiry',
] as const;

// ─── Validation schema ─────────────────────────────────────────────────────────

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email().max(255),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^\+?[\d\s\-().]{7,20}$/, 'Invalid phone number')
    .optional()
    .or(z.literal('').transform(() => undefined)),
  tour_interest: z
    .enum(TOUR_OPTIONS)
    .optional()
    .or(z.literal('').transform(() => undefined)),
  preferred_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date')
    .optional()
    .or(z.literal('').transform(() => undefined)),
  num_people: z.coerce.number().int().min(1).max(20).optional(),
  message: z.string().trim().min(10).max(2000),
});

// ─── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  // CSRF — require JSON content type (HTML forms cannot set this cross-origin)
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
  }

  // CSRF — reject requests whose Origin doesn't match this server's Host
  const origin = request.headers.get('origin');
  if (origin) {
    try {
      const originHost = new URL(origin).host;
      const serverHost = request.headers.get('host') ?? '';
      if (originHost !== serverHost) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  }

  // Rate limiting — 5 submissions per IP per 10 minutes
  const headersList = await headers();
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headersList.get('x-real-ip') ??
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Validate — don't expose field-level details to the client
  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 422 });
  }

  const data = parsed.data;

  // Save to Supabase
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const { error: dbError } = await supabase.from('inquiries').insert([data]);
  if (dbError) {
    console.error('Supabase insert error:', dbError.message);
    return NextResponse.json({ error: 'Failed to save enquiry' }, { status: 500 });
  }

  // Send notification email — all user values HTML-escaped before interpolation
  if (process.env.RESEND_API_KEY && process.env.NEXT_PUBLIC_BUSINESS_EMAIL) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const row = (label: string, value: string | number) =>
      `<tr>
        <td style="padding:8px;font-weight:bold;white-space:nowrap">${label}</td>
        <td style="padding:8px">${escapeHtml(String(value))}</td>
      </tr>`;

    const html = `
      <h2 style="font-family:sans-serif">
        New Enquiry — Captain John's Fishing Charters
      </h2>
      <table cellpadding="0" cellspacing="0"
             style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
        ${row('Name', data.name)}
        ${row('Email', data.email)}
        ${data.phone ? row('Phone', data.phone) : ''}
        ${data.tour_interest ? row('Tour Interest', data.tour_interest) : ''}
        ${data.preferred_date ? row('Preferred Date', data.preferred_date) : ''}
        ${data.num_people ? row('People', data.num_people) : ''}
        ${row('Message', data.message)}
      </table>
    `;

    await resend.emails
      .send({
        from: 'enquiries@captainjohnsfishing.co.za',
        to: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
        subject: `New Fishing Enquiry from ${escapeHtml(data.name)}`,
        html,
      })
      .catch((err: unknown) => {
        // DB insert succeeded — log and continue
        console.error('Resend email error:', err);
      });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
