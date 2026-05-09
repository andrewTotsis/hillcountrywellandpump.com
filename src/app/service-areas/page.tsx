import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCATIONS } from '@/lib/locations';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import { TrustBadges } from '@/components/TrustBadges';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'Service Area | Texas Hill Country Well & Pump',
  description:
    'We serve Fredericksburg, Boerne, Marble Falls, Dripping Springs, Burnet County, Blanco County, and the surrounding Texas Hill Country.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-16 md:py-24">
          <span className="eyebrow">Service Area</span>
          <h1 className="h-display mt-3 max-w-3xl">Trucks across the Hill Country, every day.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            We work the entire Texas Hill Country — from Fredericksburg west to Mason, south through Boerne and Comfort, east to Dripping Springs, and across the Highland Lakes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <ServiceAreaMap />
        </div>
      </section>

      <section className="section bg-white border-y border-ink/10">
        <div className="container-wide">
          <h2 className="h-section max-w-3xl">Locations we serve.</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="group block rounded-xl border border-ink/10 bg-bone p-6 hover:border-rust hover:bg-rust/5 transition">
                  <h3 className="font-display text-xl text-ink">{l.city}, TX</h3>
                  <p className="mt-1 text-sm text-ink/60">{l.county}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{l.aquifer}. Typical depth {l.typicalDepth}.</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-rust">View location page <span aria-hidden>→</span></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <TrustBadges />
          </div>
        </div>
      </section>

      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Service Area', href: '/service-areas' }]} />
    </>
  );
}
