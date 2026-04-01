import type { Metadata } from 'next';
import Image from 'next/image';
import { FaFish, FaWhatsapp } from 'react-icons/fa';
import { supabase, type Catch } from '@/lib/supabase';
import { Button } from '@/components/shared/Button';
import { getWhatsAppUrl, formatDate } from '@/lib/utils';
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  alternates: { canonical: '/gallery' },
  title: "Fishing Catch Gallery Port Elizabeth | Trophy Fish | Captain John's",
  description:
    "Trophy catches from Captain John's fishing charters in Port Elizabeth (Gqeberha). See real fish, real anglers, real results on the Eastern Cape coast.",
  keywords:
    'fishing catch gallery port elizabeth, trophy fish gqeberha, eastern cape fishing catches, port elizabeth fishing results, fishing photos port elizabeth',
  openGraph: {
    url: `${SITE_URL}/gallery`,
    title: "Port Elizabeth Fishing Catch Gallery | Captain John's",
    description:
      'Trophy catches from Captain John\'s Port Elizabeth fishing charters. Real fish, real results.',
  },
};

async function getCatches(): Promise<Catch[]> {
  const { data, error } = await supabase
    .from('catches')
    .select('*')
    .eq('published', true)
    .order('catch_date', { ascending: false });

  if (error) {
    console.error('Error fetching catches:', error);
    return [];
  }
  return data || [];
}

export default async function GalleryPage() {
  const catches = await getCatches();

  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${SITE_URL}/gallery/#gallery`,
    name: 'Port Elizabeth Fishing Catch Gallery',
    description:
      "Trophy catches from Captain John's fishing charters in Port Elizabeth, Eastern Cape.",
    url: `${SITE_URL}/gallery`,
    provider: { '@id': BUSINESS_ID },
    numberOfItems: catches.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: 'Catch Gallery', path: '/gallery' }]),
          ),
        }}
      />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-aqua-500/20 text-aqua-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaFish />
            {catches.length > 0 ? `${catches.length} Catches & Counting` : 'Trophy Catches'}
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Port Elizabeth Catch Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real catches from real anglers. Your trophy photo could be next.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {catches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catches.map((catchItem) => (
                <div
                  key={catchItem.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={catchItem.image_url || '/images/placeholder-fish.webp'}
                      alt={`${catchItem.fish_species} caught by ${catchItem.angler_name} in Port Elizabeth, Eastern Cape`}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {catchItem.featured && (
                      <div className="absolute top-4 right-4 bg-sunset-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h2 className="text-xl font-heading font-bold text-ocean-900 mb-2">
                      {catchItem.fish_species}
                    </h2>
                    <div className="space-y-1 text-sm text-gray-600">
                      {catchItem.weight && (
                        <p>
                          <span className="font-semibold">Weight:</span> {catchItem.weight}
                        </p>
                      )}
                      {catchItem.length && (
                        <p>
                          <span className="font-semibold">Length:</span> {catchItem.length}
                        </p>
                      )}
                      <p>
                        <span className="font-semibold">Angler:</span> {catchItem.angler_name}
                      </p>
                      <p>
                        <span className="font-semibold">Date:</span>{' '}
                        {formatDate(catchItem.catch_date)}
                      </p>
                      {catchItem.lure_used && (
                        <p className="text-aqua-600 font-semibold">
                          🪝 Caught with: {catchItem.lure_used}
                        </p>
                      )}
                      {catchItem.tour_type && (
                        <p className="text-ocean-600 text-xs font-medium mt-1">
                          {catchItem.tour_type}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FaFish className="text-6xl text-ocean-200 mx-auto mb-4" />
              <h2 className="text-2xl font-heading font-bold text-ocean-900 mb-2">
                Gallery Coming Soon
              </h2>
              <p className="text-gray-600">
                Be the first to land a trophy in Port Elizabeth with Captain John.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-ocean-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Your Catch Could Be Here
          </h2>
          <p className="text-gray-300 mb-8">
            Book a trip with Captain John and you could be the next entry in the gallery.
          </p>
          <Button
            as="a"
            href={getWhatsAppUrl("Hi! I saw the catch gallery and I'd like to book a fishing trip in Port Elizabeth.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            className="gap-2"
          >
            <FaWhatsapp className="text-xl" />
            Book Your Trip
          </Button>
        </div>
      </section>
    </>
  );
}
