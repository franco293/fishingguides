'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { supabase, type Lure } from '@/lib/supabase';
import { Button } from '@/components/shared/Button';
import { getWhatsAppUrl } from '@/lib/utils';
import { staticLures } from '@/lib/static-lures';

// Show the 3 most featured static lures as the preview default
const FEATURED_PREVIEW = staticLures.filter((l) => l.featured).slice(0, 3);
const DEFAULT_PREVIEW = FEATURED_PREVIEW.length >= 3
  ? FEATURED_PREVIEW
  : staticLures.slice(0, 3);

export function LuresPreview() {
  const [lures, setLures] = useState<Lure[]>(DEFAULT_PREVIEW);
  const [, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLures() {
      try {
        const { data, error } = await supabase
          .from('lures')
          .select('*')
          .eq('available', true)
          .order('sort_order', { ascending: true })
          .limit(3);

        if (error) throw error;
        if (data && data.length > 0) setLures(data);
      } catch (error) {
        console.error('Error fetching lures:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLures();
  }, []);

  return (
    <section className="py-20 bg-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-ocean-900 mb-4">
            Handcrafted Lures, Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every lure is hand-tied with precision and tested in Port Elizabeth&apos;s waters
          </p>
        </div>

        {/* Lures Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {lures.map((lure) => (
            <div
              key={lure.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-ocean-100 to-aqua-100 overflow-hidden">
                <Image
                  src={lure.image_url || '/images/placeholder-lure.webp'}
                  alt={`${lure.name} — handmade fishing lure by RM Lures, Port Elizabeth`}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-ocean-900 mb-3">
                  {lure.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{lure.description}</p>

                {/* Specs */}
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
                  {lure.target_fish && lure.target_fish.length > 0 && (
                    <p>
                      <span className="font-semibold">Target:</span>{' '}
                      {lure.target_fish.slice(0, 3).join(', ')}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Button
                  as="a"
                  href={getWhatsAppUrl(`Hi! I'm interested in the ${lure.name} lure.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  fullWidth
                  className="gap-2"
                >
                  Inquire About This Lure
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button as="link" href="/lures" variant="outline" size="lg" className="gap-2">
            View All Lures
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}