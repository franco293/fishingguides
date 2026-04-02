import type { Catch } from '@/lib/supabase';

export const staticCatches: Catch[] = [
  {
    id: 'static-catch-01',
    created_at: '2026-03-24T10:00:00Z',
    image_url: '/images/catches/captain-john-kob-swartkops-river-port-elizabeth-01.webp',
    fish_species: 'Kob (Kabeljou)',
    weight: '4.2 kg',
    length: '72 cm',
    angler_name: 'Captain John',
    catch_date: '2026-03-20',
    tour_type: 'Inshore Charter',
    lure_used: 'RM Lures White Bucktail Jig',
    location: 'Swartkops River, Port Elizabeth',
    featured: true,
    published: true,
  },
  {
    id: 'static-catch-02',
    created_at: '2026-03-24T10:00:00Z',
    image_url: '/images/catches/captain-john-garrick-catch-port-elizabeth-eastern-cape-02.webp',
    fish_species: 'Garrick (Leervis)',
    weight: '3.8 kg',
    length: '68 cm',
    angler_name: 'Captain John',
    catch_date: '2026-03-18',
    tour_type: 'Inshore Charter',
    lure_used: 'RM Lures Chartreuse Bucktail Jig',
    location: 'Port Elizabeth Beachfront, Eastern Cape',
    featured: true,
    published: true,
  },
];
