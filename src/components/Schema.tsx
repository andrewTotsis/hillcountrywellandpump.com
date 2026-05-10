import { SITE } from '@/lib/site';

// Service-area business — no fixed postal address, no telephone, no fabricated review counts.
// This is the schema pattern Google uses for trades that travel to the customer.
export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    email: SITE.email,
    image: `${SITE.url}/og.jpg`,
    priceRange: '$$',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: SITE.serviceRegion.name,
    },
    serviceArea: SITE.serviceAreas.map((name) => ({ '@type': 'City', name })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE.email,
      availableLanguage: ['English'],
      url: `${SITE.url}/quote`,
    },
    description:
      'Connecting Texas Hill Country homeowners with water well drilling, pump install, and emergency well services.',
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
