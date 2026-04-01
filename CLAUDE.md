# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

No test suite is configured.

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase client
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — used by `getWhatsAppUrl()` in `src/lib/utils.ts`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` — image hosting
- `RESEND_API_KEY` — transactional email via Resend
- `NEXT_PUBLIC_BUSINESS_EMAIL` / `NEXT_PUBLIC_BUSINESS_PHONE`

## Architecture

**Stack:** Next.js 16.2.2 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Supabase · Resend · Framer Motion

**Site:** Captain John's Fishing Charters, Port Elizabeth (Gqeberha), Eastern Cape, South Africa. Currency is ZAR, locale is `en-ZA`.

### Key directories

- `src/app/` — App Router pages and root layout. Layout wraps every page with `<Navbar>`, `<Footer>`, and `<FloatingContact>`.
- `src/components/layout/` — `Navbar`, `Footer`, `FloatingContact` (persistent across all pages).
- `src/components/home/` — homepage sections: `Hero`, `LatestCatches`, `ToursPreview`, `LuresPreview`, `Testimonials`, `FinalCTA`.
- `src/components/shared/` — reusable primitives. `Button` is a polymorphic component (`as="button"|"a"|"link"`).
- `src/lib/supabase.ts` — Supabase client singleton + TypeScript types for all DB entities: `Catch`, `Tour`, `Lure`, `Testimonial`, `Inquiry`.
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge), `formatDate()`, `formatPrice()` (ZAR), `getWhatsAppUrl()`.

### Styling conventions

- Tailwind CSS v4 with custom palette: `ocean-*` (primary blues), `sunset-*` (accent orange), `aqua-*` (highlight teal) — defined in `tailwind.config.ts`.
- Fonts: `font-sans` → Inter (`--font-inter`), `font-heading` → Montserrat (`--font-montserrat`), both set as CSS variables in the root layout.
- Use `cn()` from `src/lib/utils.ts` for all conditional class merging.

### Data layer

All data fetching goes through the Supabase client in `src/lib/supabase.ts`. The five core tables are `catches`, `tours`, `lures`, `testimonials`, and `inquiries` (contact form submissions). Types are co-located in that file.

## SEO Standards

Every `page.tsx` must export a `Metadata` object with:
- `title` — include "Port Elizabeth" or "Gqeberha" and the page purpose
- `description` — 150–160 characters, mention Port Elizabeth / Eastern Cape
- `keywords` — include Port Elizabeth / Gqeberha / Eastern Cape variants

Use Server Components (`async function Page()`) for all data-fetching pages — do not use `useEffect` to fetch on pages that can be server-rendered.

In Next.js 16, `params` and `searchParams` are **Promises** and must be `await`ed:
```tsx
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
}
```

All `<Image>` components require descriptive `alt` text that includes the location where relevant (e.g. `"Kob caught by John in Port Elizabeth"`).

## Security Standards

- **Contact form**: validated with `zod` on both client (`ContactForm.tsx`) and server (`src/app/api/contact/route.ts`). Never trust client-side validation alone.
- **API routes**: always call `schema.safeParse(body)` before using any user input. Return 422 on validation failure.
- **Supabase**: only the anon key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`) is used on the client. Never expose the service role key in client code.
- **No raw SQL**: all DB access goes through the Supabase client methods (`.from().select()`, `.insert()`, etc.).
- **External links**: all `target="_blank"` links must include `rel="noopener noreferrer"`.
