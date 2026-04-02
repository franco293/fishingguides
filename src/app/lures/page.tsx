import type { Metadata } from 'next';
import Image from 'next/image';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { supabase, type Lure } from '@/lib/supabase';
import { Button } from '@/components/shared/Button';
import { getWhatsAppUrl } from '@/lib/utils';
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from '@/lib/schema';
import { staticLures } from '@/lib/static-lures';

export const metadata: Metadata = {
  alternates: { canonical: '/lures' },
  title: "Handmade Fishing Lures Port Elizabeth | Bucktail Jigs | Captain John's",
  description:
    'Hand-tied bucktail jigs and custom fishing lures crafted in Port Elizabeth (Gqeberha). Tested in Eastern Cape waters. Order via WhatsApp — made to spec.',
  keywords:
    'handmade fishing lures port elizabeth, bucktail jigs eastern cape, custom lures gqeberha, fishing lures for sale port elizabeth, hand tied jigs eastern cape',
  openGraph: {
    url: `${SITE_URL}/lures`,
    title: "Handmade Fishing Lures Port Elizabeth | Captain John's",
    description:
      'Hand-tied bucktail jigs and custom fishing lures crafted and tested in Port Elizabeth, Eastern Cape.',
  },
};

const productCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}/lures/#collection`,
  name: 'Handmade Fishing Lures — Port Elizabeth',
  description:
    'Hand-tied bucktail jigs and custom fishing lures crafted in Port Elizabeth (Gqeberha) and tested in Eastern Cape waters.',
  url: `${SITE_URL}/lures`,
  provider: { '@id': BUSINESS_ID },
};

async function getLures(): Promise<Lure[]> {
  const { data, error } = await supabase
    .from('lures')
    .select('*')
    .eq('available', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching lures:', error);
    return [];
  }
  return data || [];
}

export default async function LuresPage() {
  const dbLures = await getLures();
  const lures = dbLures.length > 0 ? dbLures : staticLures;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: 'Handmade Lures', path: '/lures' }]),
          ),
        }}
      />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Handcrafted Fishing Lures
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every lure is hand-tied with precision and tested in Port Elizabeth&apos;s waters.
            Built to catch fish, not just look good.
          </p>
        </div>
      </section>

      {/* Lures Grid */}
      <section className="py-20 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {lures.map((lure, index) => (
              <div
                key={lure.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 bg-gradient-to-br from-ocean-50 to-aqua-50 overflow-hidden shrink-0">
                  <Image
                    src={lure.image_url || '/images/placeholder-lure.webp'}
                    alt={`${lure.name} — handmade fishing lure by RM Lures, Port Elizabeth, Eastern Cape`}
                    fill
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  {lure.featured && (
                    <div className="absolute top-3 right-3 bg-sunset-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow">
                      Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-lg font-heading font-bold text-ocean-900 mb-2 leading-snug">
                    {lure.name}
                  </h2>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
                    {lure.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-1 text-xs text-gray-600 mb-4">
                    {lure.weight && (
                      <p><span className="font-semibold text-gray-800">Weight:</span> {lure.weight}</p>
                    )}
                    {lure.target_fish && lure.target_fish.length > 0 && (
                      <p><span className="font-semibold text-gray-800">Species:</span> {lure.target_fish.join(', ')}</p>
                    )}
                    {lure.colors && lure.colors.length > 0 && (
                      <p><span className="font-semibold text-gray-800">Colours:</span> {lure.colors.join(', ')}</p>
                    )}
                  </div>

                  <Button
                    as="a"
                    href={getWhatsAppUrl(`Hi! I'm interested in the ${lure.name} lure.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    fullWidth
                    className="gap-2 text-sm mt-auto"
                  >
                    <FaWhatsapp />
                    Enquire
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-ocean-900 mb-4">
            Want a Custom Colour or Size?
          </h2>
          <p className="text-gray-600 mb-8">
            All lures are hand-tied to order. Message Captain John with your spec and
            he&apos;ll craft exactly what you need for Port Elizabeth&apos;s waters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href={getWhatsAppUrl('Hi! I want to order a custom fishing lure for Port Elizabeth fishing.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Custom Order via WhatsApp
            </Button>
            <Button as="link" href="/contact" variant="outline" size="lg" className="gap-2">
              Send an Enquiry
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
