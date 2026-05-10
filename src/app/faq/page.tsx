import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQAccordion } from '@/components/FAQAccordion';
import { FAQSchema, BreadcrumbSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'FAQ | Texas Hill Country Water Wells',
  description:
    'Common questions about water wells, pumps, drilling cost, and emergency service in the Texas Hill Country.',
  alternates: { canonical: '/faq' },
};

const FAQS = [
  { q: 'How deep are wells in the Texas Hill Country?', a: 'Most Hill Country wells fall between 250 and 700 feet. Fredericksburg and Mason area wells (Hickory aquifer) often run 500–800 ft. Boerne and Comfort wells (Trinity aquifer) commonly land 350–650 ft. Dripping Springs varies the most — anywhere from 300 to 900 ft.' },
  { q: 'How much does a water well cost in Texas?', a: 'A complete turnkey residential system in the Hill Country typically runs $18,000 to $32,000 — drilling, casing, pump, pressure tank, and tie-in included. Deep Hickory wells in Fredericksburg can run $22,000 to $38,000.' },
  { q: 'How long does drilling take?', a: 'On-site drilling is typically 1–3 days. The full project, from permit to pump install, usually runs 2–4 weeks.' },
  { q: 'Do you guarantee water?', a: 'No reputable driller can guarantee water at a specific depth — geology decides. What we guarantee is honest reporting at every 20 feet so you can stop, continue, or move the rig before you over-spend.' },
  { q: 'What are the signs my well pump is failing?', a: 'No water at the faucets, pressure drops fast, pump runs constantly without shutting off, breaker trips, air spitting at faucets, sudden cloudiness or sand in the water.' },
  { q: 'How long does a well pump last?', a: 'A quality submersible in clean Hill Country water lasts 12–20 years. Sandy wells, frequent power surges, or undersized tanks shorten that to 5–8 years.' },
  { q: 'How long does a pressure tank last?', a: '8–15 years for a quality bladder tank. Cheap tanks fail in 3–5.' },
  { q: 'How often should I test my well water?', a: 'Annually for bacteria and nitrates. Every 3 years for the full mineral and metals panel. After any flooding event or septic work.' },
  { q: 'Do I need a permit for a well in the Hill Country?', a: 'Yes, in every county we serve. Counties have groundwater conservation districts that require registration and a drilling permit. We handle the paperwork.' },
  { q: 'Is financing available?', a: 'Yes — we partner with lenders who finance water systems specifically. Most homeowners qualify for monthly payments.' },
  { q: 'Are you licensed and insured?', a: 'All drilling work in our network is performed by licensed Texas water well drillers, and we’re fully insured. License and insurance documentation is provided before any work begins on your property.' },
  { q: 'What is your emergency response time?', a: 'Same-day in most of the Hill Country during business hours. After-hours, typically a same-evening visit for true no-water emergencies.' },
];

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone">
        <div className="container-wide py-14 md:py-20">
          <span className="eyebrow">FAQ</span>
          <h1 className="h-display mt-3 max-w-3xl">Texas Hill Country water well questions.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            Everything we get asked, answered straight. Don’t see what you need? Send a quick request — we’ll get back to you fast.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <FAQAccordion faqs={FAQS} />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/quote" className="btn-primary">Free Estimate</Link>
            <Link href="/contact" className="btn-secondary">Talk to a Driller</Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={FAQS} />
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq' }]} />
    </>
  );
}
