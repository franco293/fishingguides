import Link from 'next/link';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { getWhatsAppUrl } from '@/lib/utils';

const footerLinks = {
  tours: [
    { href: '/tours', label: 'All Tours' },
    { href: '/tours#inshore', label: 'Inshore Fishing Charter' },
    { href: '/tours#offshore', label: 'Offshore Deep-Sea Charter' },
    { href: '/tours#custom', label: 'Custom Charter' },
  ],
  company: [
    { href: '/about', label: 'About the Guide' },
    { href: '/gallery', label: 'Catch Gallery' },
    { href: '/lures', label: 'Handmade Lures' },
    { href: '/contact', label: 'Contact Us' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-ocean-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎣</span>
              </div>
              <div>
                <div className="text-white font-heading font-bold text-lg">
                  Captain John&apos;s
                </div>
                <div className="text-aqua-400 text-sm">Fishing Charters</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              Experience the thrill of the catch with Port Elizabeth&apos;s premier fishing
              guide. 15+ years of local knowledge and unforgettable adventures.
            </p>
          </div>

          {/* Tours Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Fishing Tours
            </h3>
            <ul className="space-y-2">
              {footerLinks.tours.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl('Hi! I would like to book a fishing charter in Port Elizabeth.')}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-[#25D366]" />
                  WhatsApp Booking
                </a>
              </li>
              <li>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE}`}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <FaPhone />
                  {process.env.NEXT_PUBLIC_BUSINESS_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <FaEnvelope />
                  Email Us
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <FaMapMarkerAlt className="mt-1 shrink-0" />
                <span>
                  Port Elizabeth (Gqeberha)
                  <br />
                  Eastern Cape, South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ocean-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            © {currentYear} Captain John&apos;s Fishing Charters. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}