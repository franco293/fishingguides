import type { NextConfig } from 'next';

// ─── Content Security Policy ───────────────────────────────────────────────────
//
// script-src includes 'unsafe-inline' because:
//   1. Next.js static generation embeds inline hydration scripts.
//   2. JSON-LD schema blocks are rendered as inline <script> tags.
//
// For a stricter policy, convert static pages to dynamic (SSR) and implement
// nonce-based CSP via middleware (see Next.js docs on CSP with nonces).
//
// All other directives are intentionally tight.

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  // Next.js Image serves all images via /_next/image (same origin).
  // data: and blob: are needed for image placeholders and canvas operations.
  "img-src 'self' data: blob:",
  // next/font/google downloads font files at build time — served from 'self'.
  "font-src 'self'",
  // Client components call Supabase directly (ToursPreview, LuresPreview, etc.)
  `connect-src 'self' ${process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://*.supabase.co'}`,
  // Google Maps embed on /contact — sub-frames load from root google.com
  "frame-src https://www.google.com https://maps.google.com",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
]
  .join('; ')
  .trim();

// ─── Security headers ──────────────────────────────────────────────────────────

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: csp,
  },
  {
    // 2-year HSTS. Remove if this domain uses HTTP for anything (rare).
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // Deprecated by CSP frame-ancestors, kept for legacy browser compatibility.
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=()',
  },
];

// ─── Config ────────────────────────────────────────────────────────────────────

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  images: {
    remotePatterns: [
      // Supabase Storage — tour/lure/catch images
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      // Cloudinary — NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
