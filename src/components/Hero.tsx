import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=2000&q=70)' }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 hero-grad" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grain opacity-50 mix-blend-overlay" />

      <div className="container-wide flex flex-col items-start gap-10 py-24 md:py-36 lg:py-44">
        <span className="inline-flex items-center gap-2 rounded-full border border-bone/30 bg-bone/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-bone backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-rust animate-pulse" />
          24/7 Emergency No-Water Service
        </span>
        <h1 className="h-display max-w-4xl !text-bone animate-fade-up">
          Texas Hill Country Water Wells, <span className="text-rust">Done Right.</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-bone/85 leading-relaxed animate-fade-up">
          Licensed water well drilling, pump install, and emergency service across Fredericksburg, Boerne, Marble Falls, and the Hill Country since {SITE.founded}. Family-owned. Honest about what your property needs — and what it doesn’t.
        </p>
        <div className="flex flex-wrap items-center gap-3 animate-fade-up">
          <Link href="/quote" className="btn-primary text-base">Request a Free Estimate</Link>
          <a href={`tel:${SITE.phoneRaw}`} className="btn-emergency text-base">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-rust">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.83a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.25-1.27a2 2 0 0 1 2.11-.45c.91.34 1.86.57 2.83.7A2 2 0 0 1 22 16.92Z"/></svg>
            </span>
            <span className="font-bold">No-Water Emergency</span>
            <span className="text-bone/70 font-normal hidden sm:inline">{SITE.phone}</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-sm text-bone/80">
          <span className="flex items-center gap-2"><Dot /> Licensed Texas Water Well Driller</span>
          <span className="flex items-center gap-2"><Dot /> Family-Owned Since {SITE.founded}</span>
          <span className="flex items-center gap-2"><Dot /> Same-Day Pump Service</span>
          <span className="flex items-center gap-2"><Dot /> Financing Available</span>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-rust" />;
}
