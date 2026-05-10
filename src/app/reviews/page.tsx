import type { Metadata } from 'next';
import Link from 'next/link';
import { Testimonials } from '@/components/Testimonials';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'Reviews | Hill Country Well & Pump',
  description:
    'What Texas Hill Country homeowners say about working with Hill Country Well & Pump — drilling, pump install, and emergency service.',
  alternates: { canonical: '/reviews' },
};

const MORE = [
  { name: 'Jenna P.', where: 'Fredericksburg, TX', body: 'They drilled our new ranch well and were upfront the whole way. The system has been working great.' },
  { name: 'Russell H.', where: 'Marble Falls, TX', body: 'Replaced our old pump. Same-day service, fair price, and they put a quality Franklin in instead of the cheap unit our previous crew had used.' },
  { name: 'Amelia C.', where: 'Wimberley, TX', body: 'Pre-purchase well inspection saved us a huge headache. They flagged an issue with the casing the seller hadn’t disclosed and we walked. We’d work with them again in a heartbeat.' },
  { name: 'Tom & Carla S.', where: 'Bandera, TX', body: 'Honest people. We had two other quotes that were thousands apart and Hill Country Well & Pump came in the middle, explained why, and stuck to it.' },
  { name: 'Jorge M.', where: 'Boerne, TX', body: 'Pressure tank failed on a Saturday during a family reunion. Submitted the form, they replied within minutes and had us back in business by the afternoon. Lifesavers.' },
  { name: 'Rebecca W.', where: 'Burnet, TX', body: 'Installed a constant-pressure system on our long pipe run and finally — I have real water pressure in my upstairs shower.' },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-14 md:py-20">
          <span className="eyebrow">Reviews</span>
          <h1 className="h-display mt-3 max-w-3xl">What Hill Country homeowners say.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            Feedback from Texas Hill Country homeowners — pre-purchase inspections, new construction wells, pump emergencies, and everything in between.
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
