import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceGrid } from '@/components/ServiceGrid';
import { TrustBadges } from '@/components/TrustBadges';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'Well & Pump Services | Texas Hill Country',
  description:
    'Full water well services across the Texas Hill Country — drilling, install, pump repair, inspections, water testing, emergency service, and rural systems.',
  alternates: { canonical: '/services' },
};

export default function ServicesIndex() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-16 md:py-24">
          <span className="eyebrow">Services</span>
          <h1 className="h-display mt-3 max-w-3xl">Everything you need from one licensed crew.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            Drilling. Pump install. Repair. Inspections. Water testing. Emergency response. We don’t hand you off — the same team that drills your well comes back for the lifetime of the system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/quote" className="btn-primary">Free Estimate</Link>
            <Link href="/contact" className="btn-secondary">Talk to a Driller</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <ServiceGrid heading={false} />
          <div className="mt-12">
            <TrustBadges />
          </div>
        </div>
      </section>

      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />
    </>
  );
}
