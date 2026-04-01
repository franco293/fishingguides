'use client';

import { Button } from '@/components/shared/Button';
import { FaWhatsapp, FaArrowRight, FaCheck } from 'react-icons/fa';
import { getWhatsAppUrl } from '@/lib/utils';
import Image from 'next/image';

const trustBadges = [
  { icon: FaCheck, text: '15+ Years Experience' },
  { icon: FaCheck, text: '500+ Happy Anglers' },
  { icon: FaCheck, text: '100% Safety Record' },
  { icon: FaCheck, text: 'Handmade in Port Elizabeth' },
];

export function Hero() {
  const whatsappUrl = getWhatsAppUrl('Hi! I would like to book a fishing trip.');

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero/inshore-fishing-port-elizabeth-eastern-cape.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <div className="inline-block mb-4">
              <span className="bg-aqua-500/20 text-aqua-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                Premium Fishing Experiences in Port Elizabeth
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Unforgettable Fishing
              <span className="block bg-gradient-to-r from-aqua-400 to-ocean-400 bg-clip-text text-transparent">
                Adventures
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-heading font-semibold mb-6 text-gray-200">
              & Handcrafted Lures That Catch Fish
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Experience the thrill of the catch with Port Elizabeth&apos;s premier fishing guide.
              From inshore flats to offshore reefs, we create memories that last a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                as="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="gap-2 group"
              >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
                Book Your Trip
              </Button>
              <Button
                as="link"
                href="/lures"
                variant="outline"
                size="lg"
                className="gap-2 border-white text-white hover:bg-white/10"
              >
                View Handmade Lures
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20"
                >
                  <badge.icon className="text-aqua-400 flex-shrink-0" />
                  <span className="text-xs font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/captain-john-fishing-port-elizabeth.webp"
                alt="Captain John holding a large kob caught inshore on the Swartkops River near Port Elizabeth, Eastern Cape"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-aqua-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎣</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ocean-900">47</div>
                  <div className="text-sm text-gray-600">Catches This Week</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}