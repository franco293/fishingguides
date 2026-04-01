'use client';

import { Button } from '@/components/shared/Button';
import { FaWhatsapp, FaEnvelope, FaCheck } from 'react-icons/fa';
import { getWhatsAppUrl } from '@/lib/utils';

const trustBadges = [
  { icon: FaCheck, text: '15+ Years Experience' },
  { icon: FaCheck, text: '500+ Happy Anglers' },
  { icon: FaCheck, text: '100% Safety Record' },
  { icon: FaCheck, text: 'Handmade in Port Elizabeth' },
];

export function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl("Hi! I'd like to book a fishing trip in Port Elizabeth.");

  return (
    <section className="py-24 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 leading-tight">
          Ready to Cast a Line in{' '}
          <span className="bg-gradient-to-r from-aqua-400 to-ocean-400 bg-clip-text text-transparent">
            Port Elizabeth?
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join Captain John on the waters of Gqeberha for an unforgettable Eastern Cape
          fishing experience. Spots fill up fast — book yours today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            as="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            className="gap-3"
          >
            <FaWhatsapp className="text-2xl" />
            Book via WhatsApp
          </Button>
          <Button
            as="link"
            href="/contact"
            variant="outline"
            size="lg"
            className="gap-3 border-white text-white hover:bg-white/10"
          >
            <FaEnvelope />
            Send an Enquiry
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20"
            >
              <badge.icon className="text-aqua-400 shrink-0" />
              <span className="text-xs font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
