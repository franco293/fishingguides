'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaClock, FaUsers, FaFish } from 'react-icons/fa';
import { supabase, type Tour } from '@/lib/supabase';
import { Button } from '@/components/shared/Button';
import { getWhatsAppUrl, formatPrice } from '@/lib/utils';

export function ToursPreview() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTours() {
      try {
        const { data, error } = await supabase
          .from('tours')
          .select('*')
          .eq('available', true)
          .order('sort_order', { ascending: true })
          .limit(3);

        if (error) throw error;
        setTours(data || []);
      } catch (error) {
        console.error('Error fetching tours:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTours();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-96"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-ocean-900 mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From inshore flats to offshore reefs, we&apos;ve got the perfect trip for you
          </p>
        </div>

        {/* Tours Grid */}
        {tours.length > 0 ? (
          <>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-ocean-500 hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={tour.image_url || '/images/placeholder-tour.webp'}
                      alt={`${tour.name} fishing charter in Port Elizabeth, Eastern Cape`}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {tour.featured && (
                      <div className="absolute top-4 left-4 bg-sunset-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Most Popular
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-ocean-900 mb-3">
                      {tour.name}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {tour.short_description}
                    </p>

                    {/* Tour Details */}
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

                    {/* Price */}
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

                    {/* CTA */}
                    <Button
                      as="a"
                      href={getWhatsAppUrl(`Hi! I'm interested in the ${tour.name} tour.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      fullWidth
                      className="gap-2"
                    >
                      Book This Trip
                      <FaArrowRight />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Button as="link" href="/tours" variant="outline" size="lg" className="gap-2">
                View All Tours
                <FaArrowRight />
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tours coming soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}