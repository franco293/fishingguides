import type { Tour } from '@/lib/supabase';

export const staticTours: Tour[] = [
  {
    id: 'static-inshore',
    name: 'Inshore Fishing Charter',
    slug: 'inshore',
    short_description:
      'Wade the flats or drift the estuaries of the Swartkops River targeting kob, spotted grunter, and shad in the calm inshore waters of Port Elizabeth.',
    description:
      'Experience the best of Port Elizabeth inshore fishing. Captain John guides you through the Swartkops River estuary and nearby tidal flats targeting kob, spotted grunter, and shad. Perfect for families, beginners, and anyone who wants a productive half- or full-day session without venturing offshore.',
    duration: '4–8 hours',
    price_range: 'From R850 per person',
    starting_price: 850,
    max_people: 4,
    included_items: [
      'All rods, reels & tackle',
      'Live & artificial bait',
      'Soft drinks & snacks',
      'Safety equipment',
      'Fish cleaning',
    ],
    target_fish: ['Kob (Kabeljou)', 'Spotted Grunter', 'Shad (Elf)', 'Leervis (Garrick)'],
    image_url: '/images/hero/inshore-fishing-port-elizabeth-eastern-cape.webp',
    featured: true,
    available: true,
    sort_order: 1,
  },
  {
    id: 'static-offshore',
    name: 'Offshore Deep-Sea Charter',
    slug: 'offshore',
    short_description:
      'Head out to the offshore reefs and blue water beyond Port Elizabeth harbour for yellowfin tuna, dorado, and big-game gamefish.',
    description:
      'Take on the open ocean beyond Port Elizabeth (Gqeberha). Captain John runs the boat to the offshore reefs and FADs where yellowfin tuna, dorado (mahi-mahi), and other big-game species roam. Full-day adventure with all tackle, ice, and refreshments included.',
    duration: '8–10 hours',
    price_range: 'From R1 500 per person',
    starting_price: 1500,
    max_people: 6,
    included_items: [
      'Full deep-sea tackle & lures',
      'Bait (squid & pilchards)',
      'Cold drinks, snacks & lunch',
      'Safety & SAMSA-compliant equipment',
      'Fish filleting & icing',
    ],
    target_fish: ['Yellowfin Tuna', 'Dorado (Mahi-Mahi)', 'Wahoo', 'Barracuda', 'Couta'],
    image_url: '/images/hero/captain-john-fishing-port-elizabeth.webp',
    featured: false,
    available: true,
    sort_order: 2,
  },
  {
    id: 'static-custom',
    name: 'Custom Charter — Your Rules',
    slug: 'custom',
    short_description:
      'Tailor every detail of your trip: target species, duration, group size, and technique. Ideal for corporate groups, special occasions, and serious anglers.',
    description:
      'A fully customised fishing experience built around your group. Choose inshore or offshore, pick your target species, set the duration, and Captain John will plan the perfect day. Corporate team-building, bachelor trips, or a serious targeting session — this charter is designed around you.',
    duration: 'Flexible (2–12 hours)',
    price_range: 'From R750 per person (group rates)',
    max_people: 8,
    included_items: [
      'Tailored tackle & bait selection',
      'Route & species planning consultation',
      'Refreshments included',
      'Photo & video assistance',
      'Safety equipment',
    ],
    target_fish: ['Kob', 'Garrick', 'Tuna', 'Dorado', 'Shad', 'Grunter'],
    image_url: '/images/catches/captain-john-kob-swartkops-river-port-elizabeth-01.webp',
    featured: false,
    available: true,
    sort_order: 3,
  },
];
