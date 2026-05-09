'use client';

import Link from 'next/link';
import { SITE } from '@/lib/site';

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-ink/10 bg-bone/95 backdrop-blur supports-[backdrop-filter]:bg-bone/85">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex items-center justify-center gap-2 rounded-md bg-ink px-3 py-3 text-sm font-semibold text-bone"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.83a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.25-1.27a2 2 0 0 1 2.11-.45c.91.34 1.86.57 2.83.7A2 2 0 0 1 22 16.92Z"/>
          </svg>
          Call Now
        </a>
        <Link
          href="/quote"
          className="flex items-center justify-center gap-2 rounded-md bg-rust px-3 py-3 text-sm font-semibold text-bone"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
