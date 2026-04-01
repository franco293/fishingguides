'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Button } from '@/components/shared/Button';
import { cn, getWhatsAppUrl } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Fishing Tours' },
  { href: '/lures', label: 'Handmade Lures' },
  { href: '/gallery', label: 'Catch Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const whatsappUrl = getWhatsAppUrl();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ocean-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-ocean-900 shadow-lg' : 'bg-ocean-900/95 backdrop-blur-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform shrink-0">
                <Image
                  src="/images/logo/rm-lures-fishing-charters-port-elizabeth-logo.webp"
                  alt="RM Lures — handmade fishing lures and charters, Port Elizabeth"
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-heading font-bold text-xl">
                  Captain John&apos;s
                </div>
                <div className="text-aqua-400 text-sm">Fishing Charters</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg font-medium transition-colors relative',
                    pathname === link.href
                      ? 'text-white bg-ocean-700'
                      : 'text-gray-200 hover:text-white hover:bg-ocean-800'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-aqua-400" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE}`}
                className="text-white hover:text-aqua-400 transition-colors p-2 rounded-lg hover:bg-ocean-800"
                aria-label="Call us"
              >
                <FaPhone className="text-xl" />
              </a>
              <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" className="gap-2">
                <FaWhatsapp className="text-xl" />
                <span className="hidden xl:inline">Book a Trip</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-aqua-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            className="fixed top-20 left-0 right-0 bottom-0 bg-ocean-900 z-40 lg:hidden overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg font-medium transition-colors',
                    pathname === link.href
                      ? 'text-white bg-ocean-700'
                      : 'text-gray-200 hover:text-white hover:bg-ocean-800'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="px-4 py-6 border-t border-ocean-700 space-y-3">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE}`}
                className="flex items-center gap-3 px-4 py-3 text-white hover:bg-ocean-800 rounded-lg transition-colors"
              >
                <FaPhone className="text-xl" />
                <span>Call Now</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-[#25D366] text-white hover:bg-[#20BA5A] rounded-lg transition-colors font-semibold"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </nav>
        </>
      )}
    </>
  );
}