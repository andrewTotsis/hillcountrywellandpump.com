import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/lib/services';
import { LOCATIONS } from '@/lib/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const top = ['', '/services', '/service-areas', '/about', '/contact', '/quote', '/faq', '/reviews', '/financing'];
  return [
    ...top.map((p) => ({ url: `${SITE.url}${p}`, lastModified: now, changeFrequency: 'weekly' as const, priority: p === '' ? 1.0 : 0.8 })),
    ...SERVICES.map((s) => ({ url: `${SITE.url}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 })),
    ...LOCATIONS.map((l) => ({ url: `${SITE.url}/locations/${l.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 })),
  ];
}
