import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'Financing | Texas Hill Country Water Wells',
  description:
    'Monthly payment options for water well drilling, pump install, and major repairs in the Texas Hill Country.',
  alternates: { canonical: '/financing' },
};

export default function FinancingPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-14 md:py-20">
          <span className="eyebrow">Financing</span>
          <h1 className="h-display mt-3 max-w-3xl">A new well shouldn’t mean a lump sum.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            Most homeowners qualify for monthly payments instead of paying cash. We work with water-system specialty lenders who underwrite based on the value the well adds to your property — not just your credit score.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/quote" className="btn-primary">Apply With Your Estimate</Link>
            <Link href="/contact" className="btn-secondary">Ask Us a Question</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid gap-6 md:grid-cols-3">
          {[
            { t: 'No prepayment penalty', b: 'Pay it off whenever you want — when the insurance check arrives, when the cattle sell, when you refinance.' },
            { t: 'Soft credit pull to start', b: 'Initial pre-qualification doesn’t affect your credit score. Hard pull only if you choose to move forward.' },
            { t: 'Same-day decisions', b: 'Most applications get a decision the same day so we can schedule the work without waiting.' },
          ].map((c, i) => (
            <div key={i} className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl text-ink">{c.t}</h3>
              <p className="mt-3 text-base text-ink/65">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Financing', href: '/financing' }]} />
    </>
  );
}
