'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE, NAV_PRIMARY } from '@/lib/site';

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
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden md:inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-3 py-2 text-sm font-semibold text-ink hover:border-rust hover:text-rust transition"
          >
            <PhoneIcon />
            <span>{SITE.phone}</span>
          </a>
          <Link href="/quote" className="hidden md:inline-flex btn-primary !py-2.5 !px-4 !text-sm">Free Estimate</Link>
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
            <a href={`tel:${SITE.phoneRaw}`} className="rounded-md px-3 py-3 text-base font-semibold text-rust">Call {SITE.phone}</a>
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-primary mt-2">Free Estimate</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.83a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.25-1.27a2 2 0 0 1 2.11-.45c.91.34 1.86.57 2.83.7A2 2 0 0 1 22 16.92Z"/>
    </svg>
  );
}
