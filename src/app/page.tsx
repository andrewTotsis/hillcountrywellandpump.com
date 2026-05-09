import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ServiceGrid } from '@/components/ServiceGrid';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import { Process } from '@/components/Process';
import { FAQAccordion } from '@/components/FAQAccordion';
import { QuoteForm } from '@/components/QuoteForm';
import { FAQSchema, BreadcrumbSchema } from '@/components/Schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Well Drilling Texas Hill Country | Hill Country Well & Pump',
  description:
    'Family-owned, licensed water well drilling and pump service across the Texas Hill Country since 1998. Fredericksburg, Boerne, Marble Falls, Dripping Springs. Free estimates. 24/7 no-water emergency.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Well Drilling Texas Hill Country | Hill Country Well & Pump',
    description: 'Licensed water well drilling, pump install, and emergency service across the Texas Hill Country.',
    url: '/',
    type: 'website',
  },
};

const HOMEPAGE_FAQS = [
  { q: 'How deep are wells in the Texas Hill Country?', a: 'Most Hill Country wells fall between 250 and 700 feet. Fredericksburg and Mason area wells (Hickory aquifer) often run 500–800 ft. Boerne and Comfort wells (Trinity aquifer) commonly land 350–650 ft. Dripping Springs varies the most — anywhere from 300 to 900 ft.' },
  { q: 'How much does a water well cost in Texas?', a: 'A complete turnkey residential system in the Hill Country typically runs $18,000 to $32,000 — drilling, casing, pump, pressure tank, and tie-in included. Deep Hickory wells in the Fredericksburg area can run $22,000 to $38,000. Financing is available.' },
  { q: 'What are the signs my well pump is failing?', a: 'No water at the faucets, pressure that drops fast, pump that runs constantly without shutting off, breaker tripping when the pump kicks on, air spitting at the faucets, and sudden cloudiness or sand in the water are the most common warning signs.' },
  { q: 'What do I do if my property has no water?', a: 'First, check the breaker for the well pump and the pressure switch — those cause maybe 30% of no-water calls. If the breaker is on and you still have nothing, call us. We carry the most common pump and pressure tank parts on the truck and can usually restore water on the first visit.' },
  { q: 'How is a residential well different from an agricultural well?', a: 'A residential well is sized for fixture count — bathrooms, washing machines, an outside hose. An ag well is sized for sustained livestock or irrigation demand and usually has a larger pump, larger pressure tank or buffer storage, and heavier electrical service.' },
  { q: 'Why does my water pressure keep dropping?', a: 'Most pressure problems trace to a waterlogged pressure tank, a failing pressure switch, scale buildup in the pipes, or a pump that’s losing performance. We diagnose pressure problems systematically — pressure switch, tank pre-charge, amp draw, drawdown — before recommending any repair.' },
  { q: 'How often should I have my well maintained?', a: 'Annual: water test (bacterial + nitrates), pressure tank pre-charge check, sanitary cap inspection. Every 3–5 years: full mineral and metals panel, amp draw and insulation test on the pump.' },
  { q: 'Are you licensed and insured?', a: 'Yes — licensed Texas Water Well Driller and fully insured. Documentation available on request and included with every install.' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-10">
          <TrustBadges />
        </div>
      </section>

      {/* Lead-in story */}
      <section className="section">
        <div className="container-narrow grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">Family-Owned · Licensed · Insured</span>
            <h2 className="h-section mt-3">Hill Country water is different. We drill it like it.</h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/75">
              Limestone, granite, fractured Trinity, deep Hickory — every county in the Texas Hill Country has its own geology. We’ve drilled across Gillespie, Kendall, Burnet, Blanco, and Hays for over two decades. That means we don’t guess at depth. We pull the regional driller reports for your specific section before we ever roll a rig.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-ink/75">
              The result: fewer dry holes, fewer surprises, and a system that just works for the next twenty years.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about" className="btn-secondary">About Us</Link>
              <Link href="/quote" className="btn-primary">Free On-Site Visit</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat n="25+" label="Years drilling the Hill Country" />
            <Stat n="3,200+" label="Wells installed across Texas" />
            <Stat n="<1 hr" label="Average emergency callback" />
            <Stat n="4.9★" label="From 187+ verified reviews" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white border-y border-ink/10">
        <div className="container-wide">
          <ServiceGrid />
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-wide">
          <Process />
        </div>
      </section>

      {/* Service area */}
      <section className="section bg-white border-y border-ink/10">
        <div className="container-wide">
          <ServiceAreaMap />
        </div>
      </section>

      {/* Topical authority */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">Hill Country Well Knowledge</span>
          <h2 className="h-section mt-3 max-w-3xl">Real answers for Hill Country well owners.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Article
              title="How deep are wells in the Texas Hill Country?"
              body="Aquifer depth varies dramatically across the region. Here’s what to expect by county and aquifer."
              href="/blog/well-depth-texas-hill-country"
            />
            <Article
              title="Signs your well pump is failing"
              body="The six warning signs that say your pump is on borrowed time — and what to do about each."
              href="/blog/signs-well-pump-failing"
            />
            <Article
              title="How much does a water well cost in Texas?"
              body="Real itemized cost ranges for drilling, casing, pump, and tank in the Hill Country in 2026."
              href="/blog/water-well-cost-texas"
            />
            <Article
              title="What to do if your property has no water"
              body="A 5-minute homeowner checklist before you call us — saves time and sometimes the service fee."
              href="/blog/no-water-checklist"
            />
            <Article
              title="Residential vs agricultural wells"
              body="When ag-sized makes sense, what it costs, and the system differences that matter."
              href="/blog/residential-vs-agricultural-wells"
            />
            <Article
              title="Water pressure troubleshooting"
              body="Why your pressure dropped — and how to tell the tank from the pump from the switch."
              href="/blog/water-pressure-troubleshooting"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section bg-ink text-bone">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="eyebrow !text-rust">Reviews</span>
              <h2 className="h-section mt-3 !text-bone">What Hill Country homeowners say.</h2>
            </div>
            <Link href="/reviews" className="text-sm font-semibold text-bone hover:text-rust underline-offset-4 hover:underline">Read more reviews →</Link>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Quote section */}
      <section id="quote" className="section">
        <div className="container-narrow grid gap-10 md:grid-cols-5 md:items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Get a quote</span>
            <h2 className="h-section mt-3">Tell us about your property.</h2>
            <p className="mt-4 text-base text-ink/70">
              Fill this out and we’ll be in touch in under a business hour. Urgent and emergency requests are prioritized — flag them and we’ll move fast.
            </p>
            <div className="mt-8 grid gap-3">
              <KV k="Average response" v="< 1 business hour" />
              <KV k="Emergency response" v="Same day, often within 2 hours" />
              <KV k="Free site visit" v="Always" />
              <KV k="Financing" v="Available — ask about monthly options" />
            </div>
          </div>
          <div className="md:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white border-t border-ink/10">
        <div className="container-narrow">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow">Frequently asked</span>
            <h2 className="h-section mt-3">Hill Country well questions, answered.</h2>
          </div>
          <FAQAccordion faqs={HOMEPAGE_FAQS} />
        </div>
      </section>

      <FAQSchema faqs={HOMEPAGE_FAQS} />
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }]} />
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white p-5 shadow-rugged">
      <div className="font-display text-4xl text-rust leading-none">{n}</div>
      <div className="mt-2 text-sm leading-snug text-ink/70">{label}</div>
    </div>
  );
}

function Article({ title, body, href }: { title: string; body: string; href: string }) {
  return (
    <Link href={href} className="group block rounded-xl border border-ink/10 bg-white p-6 shadow-rugged hover:border-rust hover:shadow-deep transition">
      <h3 className="font-display text-xl text-ink leading-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/65">{body}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-rust">Read article <span aria-hidden>→</span></span>
    </Link>
  );
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-ink/10 bg-white px-4 py-3">
      <span className="text-sm text-ink/65">{k}</span>
      <span className="text-sm font-semibold text-ink text-right">{v}</span>
    </div>
  );
}
