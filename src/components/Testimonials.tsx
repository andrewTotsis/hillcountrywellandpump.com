const REVIEWS = [
  {
    name: 'Marcus & Lainey R.',
    where: 'Stonewall, TX',
    body:
      'We built on raw acreage outside Stonewall and the first driller we called gave us a quote that didn’t include casing. Hill Country Well & Pump showed up, walked the property, pulled regional reports, and gave us a real number. Hit water at 612 ft, exactly where they said we would.',
    rating: 5,
  },
  {
    name: 'Theresa M.',
    where: 'Boerne, TX',
    body:
      'Pump quit on a Friday afternoon — house full of weekend guests. They took the call, were on site Saturday morning, and had us back up by lunch. Honest, no upsell, the pressure tank was the real problem and they said so.',
    rating: 5,
  },
  {
    name: 'Don K.',
    where: 'Dripping Springs, TX',
    body:
      'I run 22 head of cattle and lost the well in the August drought. They drilled a deeper Trinity replacement, sized the system for the herd, and threw in a buffer tank I didn’t know I needed. Two summers later, no issues.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {REVIEWS.map((r, i) => (
        <figure key={i} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-rugged">
          <div className="flex items-center gap-1 text-rust" aria-label={`${r.rating} out of 5 stars`}>
            {Array.from({ length: r.rating }).map((_, k) => (
              <svg key={k} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 14.9 8.6 22 9.6l-5.2 4.9 1.3 7-6.1-3.3-6.1 3.3 1.3-7L2 9.6l7.1-1Z"/></svg>
            ))}
          </div>
          <blockquote className="mt-4 text-[15px] leading-relaxed text-ink/85">“{r.body}”</blockquote>
          <figcaption className="mt-5 text-sm font-semibold text-ink">{r.name}<span className="block text-xs font-normal text-ink/55">{r.where}</span></figcaption>
        </figure>
      ))}
    </div>
  );
}
