import type { Metadata } from 'next';
import Image from 'next/image';
import { FaClock, FaUsers, FaFish, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { supabase, type Tour } from '@/lib/supabase';
import { Button } from '@/components/shared/Button';
import { getWhatsAppUrl, formatPrice } from '@/lib/utils';
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from '@/lib/schema';
import { staticTours } from '@/lib/static-tours';

export const metadata: Metadata = {
  alternates: { canonical: '/tours' },
  title: "Fishing Tours Port Elizabeth | Inshore & Offshore Charters | Captain John's",
  description:
    'Book inshore, offshore, and custom fishing charters in Port Elizabeth (Gqeberha). 15+ years guiding on Eastern Cape waters. Instant WhatsApp booking.',
  keywords:
    'fishing tours port elizabeth, fishing charters gqeberha, offshore fishing eastern cape, inshore fishing port elizabeth, deep sea fishing pe, custom fishing charter port elizabeth',
  openGraph: {
    url: `${SITE_URL}/tours`,
    title: "Fishing Tours Port Elizabeth | Captain John's Charters",
    description:
      'Inshore & offshore fishing charters in Port Elizabeth. 15+ years of Eastern Cape guiding expertise.',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/tours/#service`,
  name: 'Fishing Charter Tours — Port Elizabeth',
  serviceType: 'Fishing Charter',
  provider: { '@id': BUSINESS_ID },
  areaServed: [
    { '@type': 'City', name: 'Port Elizabeth' },
    { '@type': 'City', name: 'Gqeberha' },
  ],
  description:
    'Professional inshore and offshore fishing charters in Port Elizabeth (Gqeberha), Eastern Cape. Includes all tackle, bait, and safety equipment.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fishing Charter Tours',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Inshore Fishing Charter Port Elizabeth',
        },
        priceCurrency: 'ZAR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Offshore Fishing Charter Port Elizabeth',
        },
        priceCurrency: 'ZAR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Fishing Charter Gqeberha',
        },
        priceCurrency: 'ZAR',
      },
    ],
  },
};

async function getTours(): Promise<Tour[]> {
  try {
    const { data, error } = await supabase
      .from('tours')
      .select('*')
      .eq('available', true)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching tours:', err);
    return [];
  }
}

export default async function ToursPage() {
  const dbTours = await getTours();
  const tours = dbTours.length > 0 ? dbTours : staticTours;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: 'Fishing Tours', path: '/tours' }]),
          ),
        }}
      />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Fishing Tours in Port Elizabeth
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From the calm inshore flats to the deep offshore reefs of Gqeberha — choose
            the adventure that suits you.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  id={tour.slug}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-ocean-500 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={tour.image_url || '/images/placeholder-tour.webp'}
                      alt={`${tour.name} fishing charter in Port Elizabeth, Eastern Cape`}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {tour.featured && (
                      <div className="absolute top-4 left-4 bg-sunset-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Most Popular
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-heading font-bold text-ocean-900 mb-3">
                      {tour.name}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {tour.short_description || tour.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {tour.duration && (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <FaClock className="text-ocean-500" />
                          <span>{tour.duration}</span>
                        </div>
                      )}
                      {tour.max_people && (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <FaUsers className="text-ocean-500" />
                          <span>Up to {tour.max_people} people</span>
                        </div>
                      )}
                      {tour.target_fish && tour.target_fish.length > 0 && (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <FaFish className="text-ocean-500" />
                          <span>{tour.target_fish.slice(0, 3).join(', ')}</span>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      {tour.starting_price ? (
                        <div>
                          <span className="text-3xl font-bold text-ocean-900">
                            {formatPrice(tour.starting_price)}
                          </span>
                          <span className="text-gray-500 text-sm">/person</span>
                        </div>
                      ) : tour.price_range ? (
                        <div className="text-xl font-semibold text-ocean-900">
                          {tour.price_range}
                        </div>
                      ) : null}
                    </div>

                    <Button
                      as="a"
                      href={getWhatsAppUrl(`Hi! I'm interested in the ${tour.name} fishing charter in Port Elizabeth.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      fullWidth
                      className="gap-2"
                    >
                      <FaWhatsapp />
                      Book This Trip
                    </Button>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-ocean-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-ocean-900 mb-4">
            Not sure which tour is right for you?
          </h2>
          <p className="text-gray-600 mb-8">
            Message Captain John on WhatsApp and he&apos;ll help you pick the perfect trip
            for your group, experience level, and target species.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href={getWhatsAppUrl('Hi! I need help choosing the right fishing tour in Port Elizabeth.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
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
