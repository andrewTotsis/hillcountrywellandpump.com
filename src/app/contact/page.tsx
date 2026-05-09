import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { QuoteForm } from '@/components/QuoteForm';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'Contact | Hill Country Well & Pump',
  description:
    'Call, email, or send a request. 24/7 emergency line available across the Texas Hill Country.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-14 md:py-20">
          <span className="eyebrow">Contact</span>
          <h1 className="h-display mt-3">Let’s talk.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <Block title="Call" body={<a className="text-rust hover:underline" href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>} />
            <Block title="Email" body={<a className="text-rust hover:underline break-all" href={`mailto:${SITE.email}`}>{SITE.email}</a>} />
            <Block title="Hours" body={<span>{SITE.hours}</span>} />
            <Block title="Address" body={<span>{SITE.address.street}<br/>{SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}</span>} />
            <Block title="Emergency" body={<span>24/7 no-water emergency line. We answer.</span>} />
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
