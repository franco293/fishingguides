import type { Metadata } from 'next';
import Image from 'next/image';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { supabase, type Lure } from '@/lib/supabase';
import { Button } from '@/components/shared/Button';
import { getWhatsAppUrl } from '@/lib/utils';
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from '@/lib/schema';

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
  const lures = await getLures();

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
          {lures.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lures.map((lure) => (
                <div
                  key={lure.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-64 bg-gradient-to-br from-ocean-100 to-aqua-100 overflow-hidden">
                    <Image
                      src={lure.image_url || '/images/placeholder-lure.webp'}
                      alt={`${lure.name} — handmade fishing lure crafted in Port Elizabeth, Eastern Cape`}
                      fill
                      loading="lazy"
                      className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {lure.featured && (
                      <div className="absolute top-4 right-4 bg-sunset-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Popular
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-heading font-bold text-ocean-900 mb-3">
                      {lure.name}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">{lure.description}</p>

                    <div className="space-y-1 text-sm text-gray-700 mb-4">
                      {lure.weight && (
                        <p>
                          <span className="font-semibold">Weight:</span> {lure.weight}
                        </p>
                      )}
                      {lure.length && (
                        <p>
                          <span className="font-semibold">Length:</span> {lure.length}
                        </p>
                      )}
                      {lure.hook_size && (
                        <p>
                          <span className="font-semibold">Hook Size:</span> {lure.hook_size}
                        </p>
                      )}
                      {lure.target_fish && lure.target_fish.length > 0 && (
                        <p>
                          <span className="font-semibold">Target Species:</span>{' '}
                          {lure.target_fish.join(', ')}
                        </p>
                      )}
                      {lure.colors && lure.colors.length > 0 && (
                        <p>
                          <span className="font-semibold">Available Colours:</span>{' '}
                          {lure.colors.join(', ')}
                        </p>
                      )}
                    </div>

                    <Button
                      as="a"
                      href={getWhatsAppUrl(`Hi! I'm interested in the ${lure.name} lure.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      fullWidth
                      className="gap-2"
                    >
                      <FaWhatsapp />
                      Enquire About This Lure
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-8">
                Lures coming soon. Contact us to place a custom order.
              </p>
              <Button
                as="a"
                href={getWhatsAppUrl('Hi! I would like to order a custom handmade lure.')}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="gap-2"
              >
                <FaWhatsapp />
                Order a Custom Lure
              </Button>
            </div>
          )}
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
