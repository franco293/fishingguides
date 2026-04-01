import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: "Book a Fishing Charter Port Elizabeth | Contact Captain John",
  description:
    "Book a fishing charter in Port Elizabeth or enquire about handmade lures. WhatsApp for instant response. Serving Gqeberha & Eastern Cape.",
  keywords:
    'book fishing charter port elizabeth, contact fishing guide gqeberha, fishing booking port elizabeth, enquire fishing trip eastern cape',
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Book a Fishing Charter Port Elizabeth | Captain John's",
    description:
      'Book your Port Elizabeth fishing charter. WhatsApp for fastest response.',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact/#page`,
  name: "Contact Captain John's Fishing Charters",
  url: `${SITE_URL}/contact`,
  description: 'Book a fishing charter or enquire about handmade lures in Port Elizabeth.',
  mainEntity: { '@id': BUSINESS_ID },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: 'Contact', path: '/contact' }]),
          ),
        }}
      />
      <ContactForm />
    </>
  );
}
