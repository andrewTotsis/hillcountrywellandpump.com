import type { Metadata } from 'next';
import { Suspense } from 'react';
import { QuoteForm } from '@/components/QuoteForm';
import { TrustBadges } from '@/components/TrustBadges';
import { BreadcrumbSchema } from '@/components/Schema';
import { QuoteFormWrapper } from './QuoteFormWrapper';

export const metadata: Metadata = {
  title: 'Free Estimate | Texas Hill Country Well & Pump',
  description:
    'Request a free water well or pump estimate from a Texas Hill Country driller. Same-day response. Emergency requests prioritized.',
  alternates: { canonical: '/quote' },
};

export default function QuotePage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-14 md:py-20">
          <span className="eyebrow">Free Estimate</span>
          <h1 className="h-display mt-3 max-w-3xl">Tell us what your property needs.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            Fill out the form below. We respond in under a business hour. Urgent and no-water emergency requests are routed first.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2 space-y-6">
            <Block title="How we follow up" body="Text or email — never voicemail tag." />
            <Block title="Average response" body="Under one business hour." />
            <Block title="Emergency response" body="Same day, often within 2 hours." />
            <Block title="Free site visit" body="Always — no obligation." />
            <Block title="Financing" body="Available — most homeowners qualify." />
            <Block title="Licensed & insured" body="Work performed by licensed Texas drillers. Documentation provided." />
          </div>
          <div className="lg:col-span-3">
            <Suspense fallback={<QuoteForm />}>
              <QuoteFormWrapper />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="section bg-white border-t border-ink/10">
        <div className="container-wide">
          <TrustBadges />
        </div>
      </section>

      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Free Estimate', href: '/quote' }]} />
    </>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">{title}</p>
      <p className="mt-2 text-base font-semibold text-ink leading-snug">{body}</p>
    </div>
  );
}
