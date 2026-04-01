import type { Metadata } from 'next';
import { FaCheck, FaWhatsapp, FaArrowRight, FaFish, FaShip, FaStar } from 'react-icons/fa';
import { Button } from '@/components/shared/Button';
import { getWhatsAppUrl } from '@/lib/utils';
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: "About Captain John | Port Elizabeth Fishing Guide | 15+ Years Experience",
  description:
    "Meet Captain John — Port Elizabeth's most experienced fishing guide with 15+ years on Eastern Cape waters. Inshore, offshore, and custom charters in Gqeberha.",
  keywords:
    'captain john fishing guide port elizabeth, about fishing guide gqeberha, eastern cape fishing expert, port elizabeth charter captain, experienced fishing guide pe',
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About Captain John | Port Elizabeth Fishing Guide",
    description:
      "15+ years guiding on Port Elizabeth's Eastern Cape waters. Meet the captain behind the charters.",
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/about/#captain`,
  name: 'Captain John',
  jobTitle: 'Fishing Guide & Charter Captain',
  description:
    "Port Elizabeth's most experienced fishing guide with 15+ years on Eastern Cape waters. Specialist in inshore and offshore fishing charters in Gqeberha.",
  worksFor: { '@id': BUSINESS_ID },
  knowsAbout: [
    'Inshore Fishing Port Elizabeth',
    'Offshore Fishing Eastern Cape',
    'Deep Sea Fishing Gqeberha',
    'Handmade Fishing Lures',
    'Bucktail Jigs',
    'Eastern Cape Marine Life',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Fishing Charter Guide',
    occupationLocation: {
      '@type': 'City',
      name: 'Port Elizabeth',
    },
  },
};

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Anglers' },
  { value: '100%', label: 'Safety Record' },
  { value: '1000+', label: 'Successful Trips' },
];

const expertise = [
  { icon: FaFish, title: 'Inshore Expertise', description: "Knows every flat, reef, and rock structure along Port Elizabeth's coastline." },
  { icon: FaShip, title: 'Offshore Knowledge', description: "Expert navigator for deep-sea trips targeting billfish, tuna, and game fish in Eastern Cape waters." },
  { icon: FaStar, title: 'Lure Craftsman', description: 'Designs and hand-ties his own bucktail jigs and lures, proven on PE waters over 15 years.' },
];

const included = [
  'All fishing tackle and equipment',
  'Bait (lures and live bait)',
  'Safety gear and life jackets',
  'Fish cleaning and filleting',
  'Local knowledge and guidance',
  'Refreshments on longer trips',
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: 'About', path: '/about' }]),
          ),
        }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-aqua-500/20 text-aqua-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Port Elizabeth&apos;s Trusted Fishing Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 leading-tight">
              Meet Captain John
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Born and raised on the Eastern Cape coast, Captain John has spent over 15 years
              mastering the waters of Port Elizabeth and Gqeberha. What started as a childhood
              passion became a career built on expertise, safety, and creating unforgettable
              experiences for anglers of all skill levels.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ocean-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-heading font-bold text-aqua-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-ocean-900 mb-6">
              A Lifetime on the Water
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Captain John grew up fishing the rocky shorelines and estuaries around Port
                Elizabeth, learning the rhythms of the Eastern Cape ocean from an early age.
                Over 15 years of professional guiding, he has developed an unmatched
                understanding of local tides, seasonal fish movements, and the best spots
                along the Gqeberha coastline.
              </p>
              <p>
                His approach is simple: every client — whether a first-timer or a seasoned
                angler — deserves a personalised, safe, and memorable experience. He takes
                the time to match each trip to your goals, ensuring you&apos;re targeting the
                right species in the right conditions.
              </p>
              <p>
                Beyond guiding, Captain John hand-crafts his own fishing lures — bucktail
                jigs and specialty rigs designed specifically for the species and conditions
                found in Port Elizabeth&apos;s inshore and offshore waters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-ocean-900 text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-14 h-14 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="text-2xl text-ocean-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-ocean-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-ocean-900 mb-4">
              Everything is Taken Care Of
            </h2>
            <p className="text-gray-600 mb-10">
              All you need to bring is yourself and your excitement. Captain John handles
              the rest.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-12">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <FaCheck className="text-aqua-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href={getWhatsAppUrl('Hi Captain John! I\'d like to book a fishing trip in Port Elizabeth.')}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Book a Trip
              </Button>
              <Button as="link" href="/contact" variant="outline" size="lg" className="gap-2">
                Send an Enquiry
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
