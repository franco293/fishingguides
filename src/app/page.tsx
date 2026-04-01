import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ToursPreview } from '@/components/home/ToursPreview';
import { LatestCatches } from '@/components/home/LatestCatches';
import { LuresPreview } from '@/components/home/LuresPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { FinalCTA } from '@/components/home/FinalCTA';
import { SITE_URL, BUSINESS_ID } from '@/lib/schema';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title:
    "Captain John's Fishing Charters | #1 Fishing Guide Port Elizabeth & Gqeberha",
  description:
    'Book Port Elizabeth fishing charters with 15+ years of expertise. Inshore & offshore tours, deep sea fishing in Gqeberha, and handmade bucktail lures. Fast WhatsApp response.',
  openGraph: {
    url: SITE_URL,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: "Captain John's Fishing Charters",
  url: SITE_URL,
  description:
    "Port Elizabeth's premier fishing charter guide — inshore & offshore fishing tours and handmade lures.",
  publisher: { '@id': BUSINESS_ID },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <ToursPreview />
      <LatestCatches />
      <LuresPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
