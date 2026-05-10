import Link from 'next/link';

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
          Same-Day Service · Emergency Requests Prioritized
        </span>
        <h1 className="h-display max-w-4xl !text-bone animate-fade-up">
          Texas Hill Country Water Wells, <span className="text-rust">Done Right.</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-bone/85 leading-relaxed animate-fade-up">
          Water well drilling, pump install, and emergency service across Fredericksburg, Boerne, Marble Falls, and the Hill Country. Family-run. Honest about what your property needs — and what it doesn’t.
        </p>
        <div className="flex flex-wrap items-center gap-3 animate-fade-up">
          <Link href="/quote" className="btn-primary text-base">Request a Free Estimate</Link>
          <Link href="/quote?urgency=5" className="btn-emergency text-base">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-rust">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 11-14h-7l0-6Z"/></svg>
            </span>
            <span className="font-bold">No-Water Emergency</span>
            <span className="hidden sm:inline text-bone/70 font-normal">Skip the line</span>
          </Link>
        </div>
        <p className="text-xs text-bone/65">No phone tag. Submit the form and we respond fast — typically inside one business hour.</p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-sm text-bone/80">
          <span className="flex items-center gap-2"><Dot /> Hill Country focused</span>
          <span className="flex items-center gap-2"><Dot /> Family-run &amp; insured</span>
          <span className="flex items-center gap-2"><Dot /> Same-day pump service</span>
          <span className="flex items-center gap-2"><Dot /> Financing available</span>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-rust" />;
}
