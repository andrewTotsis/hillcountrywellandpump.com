import type { Metadata } from 'next';
import Link from 'next/link';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'About | Texas Hill Country Water Well Services',
  description:
    'Family-run Texas Hill Country water well services. Insured, focused on this region, and answerable. Meet the team behind the work.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-16 md:py-24">
          <span className="eyebrow">About</span>
          <h1 className="h-display mt-3 max-w-3xl">Texas Hill Country water wells. Done with care.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            We’re a family-run Texas water well service. We drill, install, and repair — and we follow up fast on every request, day or night.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="h-section">Why we exist.</h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/75">
              The Hill Country is full of out-of-town drillers who go silent the day after they leave the job site. We started this company because the homeowners we knew kept getting burned — over-priced installs, undersized pumps, and crews that disappeared when something failed in year three.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-ink/75">
              We do this differently. Our family lives here. Our trucks are here. The same crew that drills your well comes back every time you reach out.
            </p>
          </div>
          <div>
            <h2 className="h-section">What we believe.</h2>
            <ul className="mt-5 grid gap-3">
              {[
                'Honest reporting at every depth — even when it costs us a sale.',
                'Right-sized equipment. Not the biggest, the right one.',
                'Stainless and Franklin / Grundfos / Goulds. No off-brand pumps.',
                'You get our cell number when the install is done.',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white p-4">
                  <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-sage/20 text-sage">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                  </span>
                  <span className="text-base text-ink/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-ink/10">
        <div className="container-wide">
          <TrustBadges />
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Testimonials />
        </div>
      </section>

      <section className="section bg-ink text-bone">
        <div className="container-wide text-center">
          <h2 className="h-section !text-bone max-w-3xl mx-auto">Ready to talk about your property?</h2>
          <p className="mt-4 max-w-xl mx-auto text-bone/75">No-pressure on-site visit. Real numbers. Real timelines.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="btn-primary">Free Estimate</Link>
            <Link href="/quote?urgency=5" className="btn-emergency !bg-bone !text-ink">No-Water Emergency</Link>
          </div>
        </div>
      </section>

      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
    </>
  );
}
