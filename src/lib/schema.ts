export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://captainjohnsfishing.co.za';

export const BUSINESS_ID = `${SITE_URL}/#business`;

/** Reusable LocalBusiness schema — embedded in root layout so it fires on every page. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SportsActivityLocation'],
    '@id': BUSINESS_ID,
    name: "Captain John's Fishing Charters",
    description:
      "Port Elizabeth's premier fishing guide — offshore & inshore fishing charters and handmade fishing lures in Gqeberha, Eastern Cape.",
    url: SITE_URL,
    telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? '+27629019783',
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Port Elizabeth',
      addressRegion: 'Eastern Cape',
      postalCode: '6001',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.9608,
      longitude: 25.6022,
    },
    areaServed: [
      { '@type': 'City', name: 'Port Elizabeth' },
      { '@type': 'City', name: 'Gqeberha' },
      { '@type': 'AdministrativeArea', name: 'Eastern Cape' },
    ],
    priceRange: '$$',
    currenciesAccepted: 'ZAR',
    paymentAccepted: 'Cash, EFT',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '06:00',
      closes: '18:00',
    },
  };
}

/** BreadcrumbList schema for interior pages. */
export function breadcrumbSchema(
  crumbs: Array<{ name: string; path: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.name,
        item: `${SITE_URL}${c.path}`,
      })),
    ],
  };
}
