import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES, getService } from '@/lib/services';
import { LOCATIONS } from '@/lib/locations';
import { FAQAccordion } from '@/components/FAQAccordion';
import { QuoteForm } from '@/components/QuoteForm';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from '@/components/Schema';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.meta.title,
    description: s.meta.description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.meta.title, description: s.meta.description, url: `/services/${s.slug}`, type: 'website' },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const isEmergency = s.slug === 'emergency-no-water-service';

  return (
    <>
      <section className={`relative isolate overflow-hidden ${isEmergency ? 'bg-ink' : 'bg-bone'} border-b border-ink/10`}>
        <div className="container-wide py-16 md:py-24">
          <nav className="mb-5 text-xs text-ink/55">
            <Link href="/" className="hover:text-rust">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-rust">Services</Link>
            <span className="mx-2">/</span>
            <span className={isEmergency ? 'text-bone/70' : 'text-ink/80'}>{s.name}</span>
          </nav>
          <span className={`eyebrow ${isEmergency ? '!text-rust' : ''}`}>Service</span>
          <h1 className={`h-display mt-3 max-w-4xl ${isEmergency ? '!text-bone' : ''}`}>{s.name} <span className="text-rust">in the Texas Hill Country.</span></h1>
          <p className={`mt-5 max-w-3xl text-lg leading-relaxed ${isEmergency ? 'text-bone/85' : 'text-ink/70'}`}>{s.hero}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/quote?service=${s.slug}`} className="btn-primary">Request a Free Estimate</Link>
            {isEmergency ? (
              <Link href={`/quote?service=${s.slug}&urgency=5`} className="btn-primary !bg-bone !text-ink">Submit Emergency Request</Link>
            ) : (
              <Link href="/services" className="btn-secondary">All Services</Link>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white">
        <div className="container-wide py-10">
          <TrustBadges />
        </div>
      </section>

      {/* Symptoms */}
      {s.symptoms && (
        <section className="section">
          <div className="container-narrow">
            <span className="eyebrow">Common reasons people reach out</span>
            <h2 className="h-section mt-3">Sound familiar?</h2>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {s.symptoms.map((sym, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white p-5 shadow-sm">
                  <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-rust/15 text-rust">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4"/><circle cx="12" cy="12" r="10"/><path d="M12 17h.01"/></svg>
                  </span>
                  <span className="text-base text-ink/80">{sym}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/quote" className="btn-primary">Tell us what you’re seeing</Link>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {s.process && (
        <section className="section bg-white border-y border-ink/10">
          <div className="container-narrow">
            <span className="eyebrow">How we do it</span>
            <h2 className="h-section mt-3">Our {s.name.toLowerCase()} process.</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-2">
              {s.process.map((p, i) => (
                <li key={i} className="rounded-xl border border-ink/10 bg-bone p-6">
                  <span className="font-display text-3xl text-rust">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-display text-xl text-ink">{p.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/70">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Trust */}
      {s.trust && (
        <section className="section">
          <div className="container-narrow grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <span className="eyebrow">Why this matters</span>
              <h2 className="h-section mt-3">What sets our {s.name.toLowerCase()} apart.</h2>
              <p className="mt-4 text-base text-ink/70">
                The Hill Country is full of crews who can pull a pump or drill a hole. The difference is in the diagnosis, the documentation, and the materials. We do all three to a different standard.
              </p>
              <Link href="/quote" className="btn-primary mt-6 inline-flex">Request a Free Estimate</Link>
            </div>
            <ul className="grid gap-3">
              {s.trust.map((t, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white p-5 shadow-sm">
                  <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-sage/20 text-sage">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                  </span>
                  <span className="text-base text-ink/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="section bg-ink text-bone">
        <div className="container-wide">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow !text-rust">Reviews</span>
            <h2 className="h-section mt-3 !text-bone">Hill Country homeowners on the work.</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="section">
        <div className="container-narrow grid gap-10 md:grid-cols-5 md:items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Get a quote</span>
            <h2 className="h-section mt-3">Let’s talk about your {s.name.toLowerCase()}.</h2>
            <p className="mt-4 text-base text-ink/70">
              Tell us what’s going on. We’ll respond in under a business hour. Emergencies are flagged and routed first.
            </p>
            <div className="mt-6 rounded-xl border border-ink/10 bg-white p-5">
              <p className="text-sm font-semibold text-ink">Financing available</p>
              <p className="mt-2 text-sm text-ink/65">Most homeowners qualify for monthly payments instead of a lump sum. Ask in the form notes.</p>
            </div>
          </div>
          <div className="md:col-span-3">
            <QuoteForm defaultService={s.slug} />
          </div>
        </div>
      </section>

      {/* Service area cross-link */}
      <section className="section bg-white border-y border-ink/10">
        <div className="container-wide">
          <span className="eyebrow">Where we work</span>
          <h2 className="h-section mt-3 max-w-2xl">{s.name} across the Texas Hill Country.</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="group flex items-center justify-between rounded-md border border-ink/10 bg-bone px-4 py-3 text-sm font-semibold text-ink hover:border-rust hover:bg-rust/5 transition">
                  <span>{s.name} in {l.city}</span>
                  <span className="text-ink/40 group-hover:text-rust">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">FAQ</span>
          <h2 className="h-section mt-3">{s.name} questions, answered.</h2>
          <div className="mt-10">
            <FAQAccordion faqs={s.faqs} />
          </div>
        </div>
      </section>

      <ServiceSchema name={s.name} description={s.meta.description} slug={s.slug} />
      <FAQSchema faqs={s.faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: s.name, href: `/services/${s.slug}` },
      ]} />
    </>
  );
}
