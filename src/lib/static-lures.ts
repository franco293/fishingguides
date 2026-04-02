/**
 * Static lure catalogue sourced from local WebP assets in /public/images/lures/.
 * Used as the display source when the Supabase `lures` table is empty.
 * Shape is compatible with the `Lure` type from @/lib/supabase.
 */

import type { Lure } from '@/lib/supabase';

const PE_SPECIES = ['Kob', 'Garrick', 'Spotted Grunter', 'Shad'];
const KOB_GARRICK = ['Kob', 'Garrick'];

export const staticLures: Lure[] = [
  // ── Bucktail Jigs ────────────────────────────────────────────────────────

  {
    id: 'static-01',
    name: 'Black & White Bucktail Jig',
    slug: 'black-white-bucktail-jig',
    description:
      'The all-time classic inshore colour combination. Hand-tied with white bucktail and a black head — deadly on kob and garrick in the Swartkops and Sundays River estuaries.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-01.webp',
    available: true,
    featured: true,
    weight: '14g',
    target_fish: KOB_GARRICK,
    colors: ['Black', 'White'],
    sort_order: 1,
  },
  {
    id: 'static-02',
    name: 'Pink & White Bucktail Jig',
    slug: 'pink-white-bucktail-jig',
    description:
      'High-visibility pink and white combination with a minnow-profile head. Excels in murky or discoloured estuary water where kob hunt by lateral line.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-02.webp',
    available: true,
    featured: true,
    weight: '14g',
    target_fish: KOB_GARRICK,
    colors: ['Pink', 'White'],
    sort_order: 2,
  },
  {
    id: 'static-03',
    name: 'Blue & White Bucktail Jig',
    slug: 'blue-white-bucktail-jig',
    description:
      'Blue and white minnow imitation with a red thread collar. One of the top-producing colours in Port Elizabeth\'s clear inshore waters on calm days.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-03.webp',
    available: true,
    featured: true,
    weight: '14g',
    target_fish: PE_SPECIES,
    colors: ['Blue', 'White'],
    sort_order: 3,
  },
  {
    id: 'static-04',
    name: 'Black Head Bucktail Jig',
    slug: 'black-head-bucktail-jig',
    description:
      'Stealth pattern with a gloss black head and mixed black/white bucktail. Ideal for night fishing sessions or overcast days when fish key on silhouette.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-04.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: KOB_GARRICK,
    colors: ['Black', 'White'],
    sort_order: 4,
  },
  {
    id: 'static-05',
    name: 'Bucktail Jig Colour Range',
    slug: 'bucktail-jig-colour-range',
    description:
      'Showing the available colour spectrum — blue, pink, and black/white. Order your preferred combination or ask for a custom colour to match local baitfish.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-05.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: PE_SPECIES,
    colors: ['Blue', 'Pink', 'Black', 'White'],
    sort_order: 5,
  },
  {
    id: 'static-06',
    name: 'Full Colour Display',
    slug: 'full-colour-display',
    description:
      'The complete RM Lures range laid out — pink, blue, black, and natural variants. Every colour is hand-tied to order and field-tested in Port Elizabeth waters.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-06.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: PE_SPECIES,
    colors: ['Pink', 'Blue', 'Black', 'White', 'Natural'],
    sort_order: 6,
  },
  {
    id: 'static-07',
    name: '6-Colour Assortment Pack',
    slug: '6-colour-assortment-pack',
    description:
      'Six jigs covering the full inshore spectrum: blue, orange, chartreuse, grey, and pink. The ideal starter pack for covering all light and water-clarity conditions.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-07.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: PE_SPECIES,
    colors: ['Blue', 'Orange', 'Chartreuse', 'Grey', 'Pink'],
    sort_order: 7,
  },

  // ── Fly-Style Jigs ────────────────────────────────────────────────────────

  {
    id: 'static-08',
    name: 'Chartreuse Fly Jig',
    slug: 'chartreuse-fly-jig',
    description:
      'Lightweight single-hook fly jig in lime-green and orange. Tied on a light jig head for a slow sink rate — perfect for shallow flat presentations over sand.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-08.webp',
    available: true,
    featured: false,
    weight: '7g',
    target_fish: ['Spotted Grunter', 'Kob', 'Shad'],
    colors: ['Chartreuse', 'Orange'],
    sort_order: 8,
  },
  {
    id: 'static-09',
    name: 'Orange Glow Fly Jig',
    slug: 'orange-glow-fly-jig',
    description:
      'Copper-headed fly jig with warm tan and orange bucktail. Mimics shrimp and small baitfish — a reliable producer on spotted grunter in the surf.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-09.webp',
    available: true,
    featured: false,
    weight: '7g',
    target_fish: ['Spotted Grunter', 'Kob'],
    colors: ['Orange', 'Tan', 'Copper'],
    sort_order: 9,
  },
  {
    id: 'static-10',
    name: 'Natural & Olive Fly Pair',
    slug: 'natural-olive-fly-pair',
    description:
      'Two fly-style jigs in natural olive and orange-green. These subtle earth tones are especially effective in clear, low-light conditions at dawn and dusk.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-10.webp',
    available: true,
    featured: false,
    weight: '7g',
    target_fish: ['Kob', 'Spotted Grunter'],
    colors: ['Olive', 'Natural', 'Orange'],
    sort_order: 10,
  },

  // ── Spinner / Blade Jigs ──────────────────────────────────────────────────

  {
    id: 'static-11',
    name: 'White/Lime Spinner Jig',
    slug: 'white-lime-spinner-jig',
    description:
      'Bucktail jig with an added willow-leaf spinner blade. The flash and vibration make this an aggressive trigger for garrick and bluefish in open water.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-11.webp',
    available: true,
    featured: true,
    weight: '21g',
    target_fish: ['Garrick', 'Shad', 'Kob'],
    colors: ['White', 'Lime', 'Silver'],
    sort_order: 11,
  },
  {
    id: 'static-12',
    name: 'Black Rainbow Spinner Jig',
    slug: 'black-rainbow-spinner-jig',
    description:
      'Black jig head with teal, purple, and rainbow flash bucktail plus a spinner blade. Unmatched in low-light or overcast conditions — garrick can\'t resist it.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-12.webp',
    available: true,
    featured: false,
    weight: '21g',
    target_fish: ['Garrick', 'Kob'],
    colors: ['Black', 'Teal', 'Purple', 'Rainbow'],
    sort_order: 12,
  },
  {
    id: 'static-13',
    name: 'Olive & Orange Spinner Jig',
    slug: 'olive-orange-spinner-jig',
    description:
      'Gold jig head with olive and orange bucktail and a willow blade. The warm earthtone palette imitates mullet and glassies — a kob favourite in the Swartkops.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-13.webp',
    available: true,
    featured: false,
    weight: '21g',
    target_fish: KOB_GARRICK,
    colors: ['Olive', 'Orange', 'Gold'],
    sort_order: 13,
  },
  {
    id: 'static-14',
    name: 'Spinner Jig 3-Pack (Mixed)',
    slug: 'spinner-jig-3-pack',
    description:
      'Three spinner jigs in brown/lime, white, and black/teal — one pack to cover every situation. Each fitted with a willow-leaf blade for maximum flash and vibration.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-14.webp',
    available: true,
    featured: false,
    weight: '21g',
    target_fish: PE_SPECIES,
    colors: ['Brown', 'Lime', 'White', 'Black', 'Teal'],
    sort_order: 14,
  },

  // ── Single-Colour Statement Jigs ──────────────────────────────────────────

  {
    id: 'static-15',
    name: 'Black & Red Bucktail Jig',
    slug: 'black-red-bucktail-jig',
    description:
      'Aggressive black with red flash — a proven night-time and deep-water pattern. Hand-tied on a quality wide-gap hook for solid hooksets.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-15.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: KOB_GARRICK,
    colors: ['Black', 'Red'],
    sort_order: 15,
  },
  {
    id: 'static-16',
    name: 'Blue & Orange Baitfish Jig',
    slug: 'blue-orange-baitfish-jig',
    description:
      'Teal-blue and orange bucktail on a white head — a near-perfect imitation of the glassies and anchovies kob and garrick hunt along the PE coastline.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-16.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: KOB_GARRICK,
    colors: ['Blue', 'Teal', 'Orange', 'White'],
    sort_order: 16,
  },
  {
    id: 'static-17',
    name: 'White & Olive Bucktail Jig',
    slug: 'white-olive-bucktail-jig',
    description:
      'Natural white and olive-green bucktail on a gold head. Subtle and realistic — ideal when fish are wary in clear water on sunny days.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-17.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: PE_SPECIES,
    colors: ['White', 'Olive', 'Gold'],
    sort_order: 17,
  },

  // ── Slim Minnow Jigs ──────────────────────────────────────────────────────

  {
    id: 'static-18',
    name: 'Slim Minnow Jig 4-Pack',
    slug: 'slim-minnow-jig-4-pack',
    description:
      'Four slim-profile minnow jigs: pink/white, grey/white, lime/orange, and chartreuse/orange. The narrow profile cuts through current and sinks fast in deeper runs.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-18.webp',
    available: true,
    featured: true,
    weight: '14g',
    target_fish: PE_SPECIES,
    colors: ['Pink', 'Grey', 'Lime', 'Chartreuse', 'Orange', 'White'],
    sort_order: 18,
  },
  {
    id: 'static-19',
    name: 'Slim Minnow Jig 4-Pack (Alt)',
    slug: 'slim-minnow-jig-4-pack-alt',
    description:
      'Same four-pack of slim minnow jigs photographed from a different angle, showing the profile and action tail clearly. Pink, grey, lime, and chartreuse variants.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-19.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: PE_SPECIES,
    colors: ['Pink', 'Grey', 'Lime', 'Chartreuse'],
    sort_order: 19,
  },
  {
    id: 'static-20',
    name: 'Chartreuse 3-Pack',
    slug: 'chartreuse-3-pack',
    description:
      'Three identical chartreuse and orange jigs — the most consistently productive colour in PE inshore waters. Stock up so you never run short on a hot day.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-20.webp',
    available: true,
    featured: true,
    weight: '14g',
    target_fish: PE_SPECIES,
    colors: ['Chartreuse', 'Orange'],
    sort_order: 20,
  },
  {
    id: 'static-21',
    name: 'Pink Bucktail Jig',
    slug: 'pink-bucktail-jig',
    description:
      'Clean solo pink jig with a white minnow head. Simple, bright, and deadly — especially when kob are feeding on pink-hued prawns in shallow estuaries.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-21.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: ['Kob', 'Spotted Grunter'],
    colors: ['Pink', 'White'],
    sort_order: 21,
  },
  {
    id: 'static-22',
    name: 'Natural Deer Hair Jig',
    slug: 'natural-deer-hair-jig',
    description:
      'Tied with natural-coloured deer hair in a neutral sand/tan palette — a superb imitation of mullet fry and sand shrimp. Outstanding on grunter over sand flats.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-22.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: ['Spotted Grunter', 'Kob'],
    colors: ['Natural', 'Tan', 'White'],
    sort_order: 22,
  },
  {
    id: 'static-23',
    name: 'Chartreuse & White Jig',
    slug: 'chartreuse-white-jig',
    description:
      'Bright chartreuse over white with a white minnow head. A high-visibility go-to for overcast mornings and afternoon tidal pushes in the estuaries.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-23.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: KOB_GARRICK,
    colors: ['Chartreuse', 'White'],
    sort_order: 23,
  },
  {
    id: 'static-24',
    name: 'Olive & Chartreuse Jig',
    slug: 'olive-chartreuse-jig',
    description:
      'Darker olive-green bucktail on a chartreuse head — the natural blend works brilliantly in weedy, tannin-stained estuary water where fish spook on bright colours.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-24.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: ['Kob', 'Spotted Grunter'],
    colors: ['Olive', 'Chartreuse'],
    sort_order: 24,
  },
  {
    id: 'static-25',
    name: 'White & Lime Jig',
    slug: 'white-lime-jig',
    description:
      'Classic white hair with a lime-green chartreuse head. The contrasting head colour draws attention while the white tail imitates small baitfish on the drop.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-25.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: PE_SPECIES,
    colors: ['White', 'Lime', 'Chartreuse'],
    sort_order: 25,
  },

  // ── Jig Heads & Components ────────────────────────────────────────────────

  {
    id: 'static-26',
    name: 'Firetiger Jig Heads (4-Pack)',
    slug: 'firetiger-jig-heads-4-pack',
    description:
      'Four graduated firetiger-painted jig heads in lime-green and orange. Available bare for tying your own or dressed to spec on request. Multiple hook sizes available.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-26.webp',
    available: true,
    featured: false,
    weight: '7g–28g',
    target_fish: PE_SPECIES,
    colors: ['Lime', 'Orange', 'Firetiger'],
    sort_order: 26,
  },

  // ── Dark/Night Pattern Jigs ───────────────────────────────────────────────

  {
    id: 'static-27',
    name: 'Black & Olive Bucktail Jig',
    slug: 'black-olive-bucktail-jig',
    description:
      'Black bucktail with olive flash on a gloss black head — a favourite night-fishing and deep-channel pattern. The dark profile stands out against a lit surface.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-27.webp',
    available: true,
    featured: false,
    weight: '21g',
    target_fish: KOB_GARRICK,
    colors: ['Black', 'Olive'],
    sort_order: 27,
  },
  {
    id: 'static-28',
    name: 'Black & Olive Jig (Brown Head)',
    slug: 'black-olive-jig-brown-head',
    description:
      'Subtle variant with a maroon/brown head and black-olive bucktail. The warmer head colour adds a natural touch — effective when fish have seen too many all-black patterns.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-28.webp',
    available: true,
    featured: false,
    weight: '21g',
    target_fish: KOB_GARRICK,
    colors: ['Black', 'Olive', 'Brown'],
    sort_order: 28,
  },
  {
    id: 'static-29',
    name: 'Tri-Colour Black/White/Olive Jig',
    slug: 'tri-colour-black-white-olive-jig',
    description:
      'Three-tone design: black outer hair, white inner body, and olive tips on a black head with a vivid red eye. A complex, fish-attracting profile for pressured kob.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-29.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: KOB_GARRICK,
    colors: ['Black', 'White', 'Olive'],
    sort_order: 29,
  },

  // ── Size Reference & Micro Jigs ───────────────────────────────────────────

  {
    id: 'static-30',
    name: 'Micro Bucktail Jig',
    slug: 'micro-bucktail-jig',
    description:
      'Compact black and white bucktail jig sized for light tackle estuary fishing. Shown here against a ruler to indicate scale — the small profile triggers bites when bigger jigs don\'t.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-30.webp',
    available: true,
    featured: false,
    weight: '7g',
    target_fish: ['Spotted Grunter', 'Shad', 'Kob'],
    colors: ['Black', 'White'],
    sort_order: 30,
  },

  // ── Premium Single Jigs ───────────────────────────────────────────────────

  {
    id: 'static-31',
    name: 'Chartreuse & Gold Jig',
    slug: 'chartreuse-gold-jig',
    description:
      'Lime-green bucktail on a warm gold/amber head. The gold head catches sunlight during retrieval and adds a flash the chartreuse alone can\'t provide.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-31.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: PE_SPECIES,
    colors: ['Chartreuse', 'Gold', 'Amber'],
    sort_order: 31,
  },
  {
    id: 'static-32',
    name: 'Natural Deer Hair Jig (Copper Head)',
    slug: 'natural-deer-hair-jig-copper-head',
    description:
      'Premium natural deer hair over a copper/bronze head with an orange eye. Refined and understated — ideal for clear-water, sight-fishing scenarios on the flats.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-32.webp',
    available: true,
    featured: false,
    weight: '14g',
    target_fish: ['Spotted Grunter', 'Kob'],
    colors: ['Natural', 'Tan', 'Copper'],
    sort_order: 32,
  },
  {
    id: 'static-33',
    name: 'Mini 4-Pack Assortment',
    slug: 'mini-4-pack-assortment',
    description:
      'Four compact jigs in black/white, natural, lime-green, and sand/natural — all with vivid orange heads and red eye detail. A versatile light-tackle pack for all conditions.',
    image_url: '/images/lures/handmade-fishing-lure-port-elizabeth-33.webp',
    available: true,
    featured: false,
    weight: '7g',
    target_fish: PE_SPECIES,
    colors: ['Black', 'White', 'Natural', 'Lime', 'Sand'],
    sort_order: 33,
  },
];
