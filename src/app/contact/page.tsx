import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { QuoteForm } from '@/components/QuoteForm';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'Contact | Hill Country Well & Pump',
  description:
    'Send us a quote request or message — we respond fast across the Texas Hill Country. Emergency requests prioritized.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-14 md:py-20">
          <span className="eyebrow">Contact</span>
          <h1 className="h-display mt-3">Send us your request.</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink/70">
            Fill in the form and we’ll have an estimator follow up. Emergencies are flagged and routed first — no phone tag.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <Block title="Email" body={<a className="text-rust hover:underline break-all" href={`mailto:${SITE.email}`}>{SITE.email}</a>} />
            <Block title="Hours" body={<span>{SITE.hours}</span>} />
            <Block title="Service Area" body={<span>Across the Texas Hill Country — Fredericksburg, Boerne, Marble Falls, Dripping Springs, Burnet & Blanco Counties.</span>} />
            <Block title="Emergency" body={<span>Flag your request as <span className="font-bold text-rust">Urgency&nbsp;5 · No-Water Emergency</span> and you’ll skip the queue.</span>} />
          </div>
          <div className="md:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>

      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
    </>
  );
}

function Block({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">{title}</p>
      <div className="mt-2 text-base font-semibold text-ink leading-snug">{body}</div>
    </div>
  );
}
