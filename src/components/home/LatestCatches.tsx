'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaFish } from 'react-icons/fa';
import { supabase, type Catch } from '@/lib/supabase';
import { formatDate } from '@/lib/utils';
import { Button } from '@/components/shared/Button';

export function LatestCatches() {
  const [catches, setCatches] = useState<Catch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCatches() {
      try {
        const { data, error } = await supabase
          .from('catches')
          .select('*')
          .eq('published', true)
          .order('catch_date', { ascending: false })
          .limit(6);

        if (error) throw error;
        setCatches(data || []);
      } catch (error) {
        console.error('Error fetching catches:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCatches();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-ocean-900">
              Loading Recent Catches...
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-80"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-ocean-100 text-ocean-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaFish />
            Recent Catches
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-ocean-900 mb-4">
            Trophy Catches & Happy Anglers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients are catching. Your next big catch could be here!
          </p>
        </div>

        {/* Catches Grid */}
        {catches.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {catches.map((catchItem) => (
                <div
                  key={catchItem.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={catchItem.image_url || '/images/placeholder-fish.webp'}
                      alt={`${catchItem.fish_species} caught by ${catchItem.angler_name} in Port Elizabeth, Eastern Cape`}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Featured Badge */}
                    {catchItem.featured && (
                      <div className="absolute top-4 right-4 bg-sunset-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-ocean-900 mb-2">
                      {catchItem.fish_species}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
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
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Button as="link" href="/gallery" size="lg" className="gap-2">
                View Full Gallery
                <FaArrowRight />
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No catches to display yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}