'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { supabase, type Testimonial } from '@/lib/supabase';

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('featured', true)
          .limit(3);

        if (error) throw error;
        setTestimonials(data || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  if (loading || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-ocean-900 mb-4">
            What Our Anglers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from real fishing enthusiasts
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-ocean-50 to-aqua-50 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-ocean-200 opacity-50">
                <FaQuoteLeft className="text-4xl" />
              </div>

              {/* Rating */}
              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              )}

              {/* Quote */}
              <p className="text-gray-700 mb-6 relative z-10 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.image_url && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image_url}
                      alt={testimonial.client_name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                )}
                <div>
                  <div className="font-semibold text-ocean-900">
                    {testimonial.client_name}
                  </div>
                  {testimonial.tour_type && (
                    <div className="text-sm text-gray-600">{testimonial.tour_type}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}