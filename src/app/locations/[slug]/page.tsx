import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCATIONS, getLocation } from '@/lib/locations';
import { SERVICES } from '@/lib/services';
import { FAQAccordion } from '@/components/FAQAccordion';
import { QuoteForm } from '@/components/QuoteForm';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQSchema, BreadcrumbSchema } from '@/components/Schema';

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return {
    title: l.meta.title,
    description: l.meta.description,
    alternates: { canonical: `/locations/${l.slug}` },
    openGraph: { title: l.meta.title, description: l.meta.description, url: `/locations/${l.slug}`, type: 'website' },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink/10 bg-bone">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grain opacity-40" />
        <div className="container-wide py-16 md:py-24">
          <nav className="mb-5 text-xs text-ink/55">
            <Link href="/" className="hover:text-rust">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-rust">Service Area</Link>
            <span className="mx-2">/</span>
            <span className="text-ink/80">{l.city}, {l.state}</span>
          </nav>
          <span className="eyebrow">Location · {l.county}</span>
          <h1 className="h-display mt-3 max-w-4xl">Well Drilling <span className="text-rust">{l.city}, TX.</span></h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70">
            Water well drilling, pump install, and emergency service in {l.city} and across {l.county}, performed by licensed local drillers. We know the local geology, the local aquifers, and the local groundwater district.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/quote?location=${encodeURIComponent(l.city)}`} className="btn-primary">Free On-Site Visit in {l.city}</Link>
            <Link href="/contact" className="btn-secondary">Talk to a Driller</Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <Card title="Aquifer" body={l.aquifer} />
            <Card title="Typical Depth" body={l.typicalDepth} />
            <Card title="ZIP Codes Served" body={l.zip.join(' · ')} />
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white">
        <div className="container-wide py-10">
          <TrustBadges />
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid gap-10 md:grid-cols-2">
          <div>
            <span className="eyebrow">The geology here</span>
            <h2 className="h-section mt-3">{l.city} sits on its own kind of ground.</h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/75">{l.geography}</p>
          </div>
          <div>
            <span className="eyebrow">Rural &amp; acreage</span>
            <h2 className="h-section mt-3">Where we work in {l.county}.</h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/75">{l.rural}</p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-ink/10">
        <div className="container-narrow grid gap-10 md:grid-cols-2">
          <div>
            <span className="eyebrow">Local water conditions</span>
            <h2 className="h-section mt-3">What {l.city} water is actually like.</h2>
            <ul className="mt-6 grid gap-3">
              {l.waterIssues.map((w, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-bone p-4">
                  <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-clay/30 text-earth">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13Z"/></svg>
                  </span>
                  <span className="text-base text-ink/80">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Common homeowner requests</span>
            <h2 className="h-section mt-3">What {l.city} owners reach out about.</h2>
            <ul className="mt-6 grid gap-3">
              {l.homeownerProblems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-bone p-4">
                  <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-rust/15 text-rust">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4"/><circle cx="12" cy="12" r="10"/><path d="M12 17h.01"/></svg>
                  </span>
                  <span className="text-base text-ink/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services in this location */}
      <section className="section">
        <div className="container-wide">
          <span className="eyebrow">Services in {l.city}</span>
          <h2 className="h-section mt-3 max-w-3xl">Full well &amp; pump service for {l.city} properties.</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 9).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block rounded-xl border border-ink/10 bg-white p-6 shadow-sm hover:border-rust hover:shadow-rugged transition">
                  <h3 className="font-display text-lg text-ink">{s.name} in {l.city}</h3>
                  <p className="mt-2 text-sm text-ink/65">{s.short}</p>
                  <span className="mt-3 inline-flex text-sm font-semibold text-rust">Learn more →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-ink text-bone">
        <div className="container-wide">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow !text-rust">Reviews</span>
            <h2 className="h-section mt-3 !text-bone">{l.city} owners on the work.</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="section">
        <div className="container-narrow grid gap-10 md:grid-cols-5 md:items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Get a quote</span>
            <h2 className="h-section mt-3">Free site visit in {l.city}.</h2>
            <p className="mt-4 text-base text-ink/70">
              We come to your property, walk it, and give you a real number. Same-day pump emergencies get prioritized.
            </p>
          </div>
          <div className="md:col-span-3">
            <QuoteForm defaultLocation={`${l.city}, ${l.state}`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white border-t border-ink/10">
        <div className="container-narrow">
          <span className="eyebrow">FAQ</span>
          <h2 className="h-section mt-3">{l.city} water well questions.</h2>
          <div className="mt-10">
            <FAQAccordion faqs={l.faqs} />
          </div>
        </div>
      </section>

      <FAQSchema faqs={l.faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Service Area', href: '/service-areas' },
        { name: `${l.city}, ${l.state}`, href: `/locations/${l.slug}` },
      ]} />
    </>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">{title}</p>
      <p className="mt-2 text-base font-semibold text-ink leading-snug">{body}</p>
    </div>
  );
}
