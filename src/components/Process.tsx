export function Process() {
  const steps = [
    { n: '01', title: 'Free On-Site Visit', body: 'We come walk the property. No pressure, no upsell. We pull regional driller reports so you know what to expect at depth.' },
    { n: '02', title: 'Honest Quote', body: 'A real number, in writing, with the casing, pump, tank, and labor itemized — not a guess.' },
    { n: '03', title: 'Permits & Drilling', body: 'We handle TDLR and groundwater district permits. Drilling is typically 1–3 days on site.' },
    { n: '04', title: 'Pump, Tank, & Tie-In', body: 'Stainless submersible, sized pressure tank, and clean electrical. We disinfect, pressure test, and walk you through your system.' },
    { n: '05', title: 'Lifetime Support', body: 'You have our number. Annual checkups, water testing, and pump diagnostics for as long as you own the property.' },
  ];
  return (
    <div>
      <div className="mb-10 max-w-3xl">
        <span className="eyebrow">How it works</span>
        <h2 className="h-section mt-3">Five steps. No surprises.</h2>
      </div>
      <ol className="grid gap-5 md:grid-cols-5">
        {steps.map((s) => (
          <li key={s.n} className="rounded-xl border border-ink/10 bg-white p-5 shadow-rugged">
            <span className="font-display text-3xl text-rust">{s.n}</span>
            <h3 className="mt-3 font-display text-lg text-ink leading-tight">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
