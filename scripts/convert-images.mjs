/**
 * Converts all WhatsApp-exported JPEGs to optimised WebP with clean, SEO-friendly filenames.
 * Run with: node scripts/convert-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const BASE = 'public/images';

async function ensureDir(dir) {
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
}

async function toWebP(src, dest, opts = {}) {
  await sharp(src)
    .webp({ quality: 85, effort: 4, ...opts })
    .toFile(dest);
  console.log('  ✓', dest);
}

/** Solid-colour placeholder — 1×1 pixel scaled up */
async function placeholder(dest, r, g, b, w = 800, h = 533) {
  await sharp(Buffer.from([r, g, b]), { raw: { width: 1, height: 1, channels: 3 } })
    .resize(w, h)
    .webp({ quality: 40 })
    .toFile(dest);
  console.log('  ✓', dest, '(placeholder)');
}

async function run() {
  await ensureDir(`${BASE}/hero`);
  await ensureDir(`${BASE}/logo`);
  await ensureDir(`${BASE}/catches`);
  await ensureDir(`${BASE}/lures`);

  // ── Logo ──────────────────────────────────────────────────────────────────
  console.log('\n[logo]');
  await toWebP(
    `${BASE}/Logo/WhatsApp Image 2026-03-24 at 11.54.09.jpeg`,
    `${BASE}/logo/rm-lures-fishing-charters-port-elizabeth-logo.webp`,
  );

  // ── Hero images (sourced from catch photos) ───────────────────────────────
  console.log('\n[hero]');
  // catch-1: Captain John holding kob on boat → hero right column portrait
  await toWebP(
    `${BASE}/catches/WhatsApp Image 2026-03-24 at 12.44.35.jpeg`,
    `${BASE}/hero/captain-john-fishing-port-elizabeth.webp`,
  );
  // catch-2: Captain John with garrick/bream → subtle background overlay
  await toWebP(
    `${BASE}/catches/WhatsApp Image 2026-03-24 at 12.44.38.jpeg`,
    `${BASE}/hero/inshore-fishing-port-elizabeth-eastern-cape.webp`,
  );

  // ── Catch gallery images ───────────────────────────────────────────────────
  console.log('\n[catches]');
  await toWebP(
    `${BASE}/catches/WhatsApp Image 2026-03-24 at 12.44.35.jpeg`,
    `${BASE}/catches/captain-john-kob-swartkops-river-port-elizabeth-01.webp`,
  );
  await toWebP(
    `${BASE}/catches/WhatsApp Image 2026-03-24 at 12.44.38.jpeg`,
    `${BASE}/catches/captain-john-garrick-catch-port-elizabeth-eastern-cape-02.webp`,
  );

  // ── Lures ─────────────────────────────────────────────────────────────────
  console.log('\n[lures]');
  const lureFiles = (await readdir(`${BASE}/lures`))
    .filter((f) => /\.(jpe?g)$/i.test(f))
    .sort();

  for (let i = 0; i < lureFiles.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    await toWebP(
      `${BASE}/lures/${lureFiles[i]}`,
      `${BASE}/lures/handmade-fishing-lure-port-elizabeth-${n}.webp`,
    );
  }

  // ── Placeholders ──────────────────────────────────────────────────────────
  console.log('\n[placeholders]');
  // ocean-900 blue for tours
  await placeholder(`${BASE}/placeholder-tour.webp`, 15, 76, 117);
  // aqua-700 teal for lures
  await placeholder(`${BASE}/placeholder-lure.webp`, 6, 118, 156);
  // ocean-800 blue for fish/catches
  await placeholder(`${BASE}/placeholder-fish.webp`, 10, 56, 100);

  console.log('\nDone.\n');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
