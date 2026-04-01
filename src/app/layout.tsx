import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingContact } from '@/components/layout/FloatingContact';
import { localBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Captain John's Fishing Charters | Port Elizabeth Fishing Tours & Handmade Lures",
  description:
    'Experience unforgettable fishing adventures in Port Elizabeth with 15+ years of expertise. Professional fishing charters, inshore & offshore tours, and handcrafted bucktail lures.',
  keywords:
    'fishing charters port elizabeth, fishing tours port elizabeth, fishing guide port elizabeth, deep sea fishing gqeberha, offshore fishing eastern cape, inshore fishing port elizabeth, handmade fishing lures eastern cape, bucktail jigs port elizabeth',
  authors: [{ name: "Captain John's Fishing Charters", url: SITE_URL }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Captain John's Fishing Charters | Port Elizabeth",
    description:
      "Port Elizabeth's premier fishing guide — offshore & inshore charters and handmade lures.",
    type: 'website',
    locale: 'en_ZA',
    siteName: "Captain John's Fishing Charters",
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Captain John's Fishing Charters | Port Elizabeth",
    description:
      "Port Elizabeth's premier fishing guide — offshore & inshore charters and handmade lures.",
  },
  other: {
    'geo.region': 'ZA-EC',
    'geo.placename': 'Port Elizabeth, Eastern Cape, South Africa',
    'geo.position': '-33.9608;25.6022',
    ICBM: '-33.9608, 25.6022',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Navbar />
        <main id="main-content" className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
