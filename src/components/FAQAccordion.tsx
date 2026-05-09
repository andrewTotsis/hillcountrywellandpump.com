'use client';

import { useState } from 'react';

export function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink/10 rounded-xl border border-ink/10 bg-white shadow-rugged">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-lg md:text-xl text-ink">{f.q}</span>
              <span className={`grid h-8 w-8 flex-none place-items-center rounded-full border border-ink/15 transition-transform ${isOpen ? 'rotate-45 bg-rust text-bone border-rust' : 'text-ink'}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-6 md:px-6">
                <p className="max-w-3xl text-base leading-relaxed text-ink/75">{f.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
