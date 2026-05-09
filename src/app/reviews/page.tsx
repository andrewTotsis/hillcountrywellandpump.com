import type { Metadata } from 'next';
import Link from 'next/link';
import { Testimonials } from '@/components/Testimonials';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'Reviews | Hill Country Well & Pump',
  description:
    'Verified reviews from Texas Hill Country homeowners. 4.9-star average across drilling, pump install, and emergency service.',
  alternates: { canonical: '/reviews' },
};

const MORE = [
  { name: 'Jenna P.', where: 'Fredericksburg, TX', body: 'They drilled our new ranch well off Cherry Spring Rd and were upfront the whole way. Hit good Hickory water at 540 ft and the system has been flawless.' },
  { name: 'Russell H.', where: 'Marble Falls, TX', body: 'Replaced our 17-year-old pump. Same-day service, fair price, and they put a real Franklin in instead of the cheap one the last guy used.' },
  { name: 'Amelia C.', where: 'Wimberley, TX', body: 'Pre-purchase well inspection saved us $40k. They flagged a corroded casing the seller hadn’t disclosed and we walked. We’d call them again in a heartbeat.' },
  { name: 'Tom & Carla S.', where: 'Bandera, TX', body: 'Honest people. We had two other quotes that were $8k apart and HCWP came in the middle, explained why, and stuck to it. Five stars.' },
  { name: 'Jorge M.', where: 'Boerne, TX', body: 'Pressure tank failed on a Saturday during a family reunion. Submitted the form, they replied within ten minutes and had us back in business by 3pm. Lifesavers.' },
  { name: 'Rebecca W.', where: 'Burnet, TX', body: 'Installed a constant-pressure system on our long pipe run and finally — I have real water pressure in my upstairs shower for the first time in 12 years.' },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-14 md:py-20">
          <span className="eyebrow">Reviews</span>
          <h1 className="h-display mt-3 max-w-3xl">4.9 stars across the Hill Country.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            Verified reviews from real Texas Hill Country homeowners — pre-purchase inspections, new construction wells, pump emergencies, and everything between.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Testimonials />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {MORE.map((r, i) => (
              <figure key={i} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-rugged">
                <div className="flex items-center gap-1 text-rust">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <svg key={k} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 14.9 8.6 22 9.6l-5.2 4.9 1.3 7-6.1-3.3-6.1 3.3 1.3-7L2 9.6l7.1-1Z"/></svg>
                  ))}
                </div>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-ink/85">“{r.body}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-ink">{r.name}<span className="block text-xs font-normal text-ink/55">{r.where}</span></figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/quote" className="btn-primary">Get Your Free Estimate</Link>
          </div>
        </div>
      </section>

      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Reviews', href: '/reviews' }]} />
    </>
  );
}
