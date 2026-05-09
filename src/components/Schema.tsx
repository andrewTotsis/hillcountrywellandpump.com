import { SITE } from '@/lib/site';

export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    email: SITE.email,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE.email,
      availableLanguage: ['English'],
      url: `${SITE.url}/quote`,
    },
    image: `${SITE.url}/og.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: SITE.serviceAreas.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '07:00', closes: '20:00' },
    ],
    sameAs: [SITE.social.facebook, SITE.social.google].filter(Boolean),
    foundingDate: String(SITE.founded),
    description:
      'Licensed water well drilling, pump installation, and 24/7 emergency well service across the Texas Hill Country.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '187',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ServiceSchema({ name, description, slug }: { name: string; description: string; slug: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: { '@id': `${SITE.url}/#localbusiness` },
    areaServed: SITE.serviceAreas.map((n) => ({ '@type': 'City', name: n })),
    name,
    description,
    url: `${SITE.url}/services/${slug}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.href}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
