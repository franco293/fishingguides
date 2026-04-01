'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { Button } from '@/components/shared/Button';
import { getWhatsAppUrl } from '@/lib/utils';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  tour_interest: z.string().optional(),
  preferred_date: z.string().optional(),
  num_people: z.number().min(1).max(20).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const tourOptions = [
  'Inshore Fishing',
  'Offshore Fishing',
  'Custom Charter',
  'Handmade Lures',
  'General Enquiry',
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  async function onSubmit(data: InquiryFormData) {
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  const whatsappUrl = getWhatsAppUrl(
    'Hi Captain John! I would like to book a fishing trip in Port Elizabeth.',
  );

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Book a Fishing Trip
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with Captain John to arrange your Port Elizabeth fishing adventure.
            WhatsApp is the fastest way to reach him.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-ocean-900 mb-8">
                Get in Touch
              </h2>

              {/* WhatsApp — Primary CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#25D366] text-white rounded-2xl shadow-lg hover:bg-[#20BA5A] transition-colors mb-6"
              >
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <FaWhatsapp className="text-3xl" />
                </div>
                <div>
                  <div className="font-bold text-lg">WhatsApp (Fastest)</div>
                  <div className="text-sm opacity-90">
                    {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                  </div>
                  <div className="text-xs opacity-75 mt-1">Usually responds within minutes</div>
                </div>
              </a>

              <div className="space-y-4 mb-10">
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center shrink-0">
                    <FaPhone className="text-ocean-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call</div>
                    <div className="text-gray-600 text-sm">
                      {process.env.NEXT_PUBLIC_BUSINESS_PHONE}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-ocean-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600 text-sm">
                      {process.env.NEXT_PUBLIC_BUSINESS_EMAIL}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-ocean-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600 text-sm">
                      Port Elizabeth (Gqeberha), Eastern Cape, South Africa
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden shadow-sm mb-10" style={{ height: '280px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106504.79!2d25.5707!3d-33.9608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ab3fc9bc96a2d%3A0x5e6cf8b6a8a24d9!2sGqeberha%20(Port%20Elizabeth)!5e0!3m2!1sen!2sza!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Captain John's Fishing Charters location — Port Elizabeth, Eastern Cape"
                />
              </div>

              <div className="bg-ocean-50 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-ocean-900 mb-3">
                  What to include in your message
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    'Your preferred date(s)',
                    'Number of people in your group',
                    'Type of fishing (inshore / offshore / custom)',
                    'Target species if you have one in mind',
                    'Your experience level',
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <FaCheck className="text-aqua-500 mt-0.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheck className="text-4xl text-green-600" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-ocean-900 mb-3">
                    Enquiry Received!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Captain John will be in touch shortly. For a faster response, message him
                    directly on WhatsApp.
                  </p>
                  <Button
                    as="a"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="gap-2"
                  >
                    <FaWhatsapp />
                    Follow Up on WhatsApp
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold text-ocean-900 mb-6">
                    Send an Enquiry
                  </h2>

                  {error && (
                    <div
                      role="alert"
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm"
                    >
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                          Full Name <span className="text-red-500" aria-hidden>*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          aria-required="true"
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          {...register('name')}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p id="name-error" role="alert" className="text-red-500 text-xs mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                          Email Address <span className="text-red-500" aria-hidden>*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          aria-required="true"
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          {...register('email')}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p id="email-error" role="alert" className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          {...register('phone')}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                          placeholder="+27 ..."
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="num_people"
                          className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                          Number of People
                        </label>
                        <input
                          id="num_people"
                          type="number"
                          min={1}
                          max={20}
                          {...register('num_people', { valueAsNumber: true })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                          placeholder="e.g. 2"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="tour_interest"
                          className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                          Tour Interest
                        </label>
                        <select
                          id="tour_interest"
                          {...register('tour_interest')}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        >
                          <option value="">Select a tour type</option>
                          {tourOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="preferred_date"
                          className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                          Preferred Date
                        </label>
                        <input
                          id="preferred_date"
                          type="date"
                          {...register('preferred_date')}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Message <span className="text-red-500" aria-hidden>*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        aria-required="true"
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        {...register('message')}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent resize-none"
                        placeholder="Tell Captain John about your ideal fishing trip..."
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="text-red-500 text-xs mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      size="lg"
                      isLoading={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
