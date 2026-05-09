'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_PRIMARY } from '@/lib/site';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70">
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-bone font-display text-lg leading-none">HC</span>
          <span className="hidden sm:block">
            <span className="block font-display text-base leading-none text-ink">Hill Country</span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-ink/60">Well &amp; Pump</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_PRIMARY.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-semibold text-ink/80 hover:text-rust transition">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/quote" className="hidden md:inline-flex btn-primary !py-2.5 !px-4 !text-sm">Get a Free Estimate</Link>
          <button
            aria-label="Menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-ink/15 bg-white"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-bone">
          <div className="container-wide py-4 grid gap-1">
            {NAV_PRIMARY.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-semibold text-ink hover:bg-sand">
                {n.label}
              </Link>
            ))}
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-primary mt-2">Get a Free Estimate</Link>
          </div>
        </div>
      )}
    </header>
  );
}
