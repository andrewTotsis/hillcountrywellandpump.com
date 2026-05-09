'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function StickyMobileCTA() {
  const pathname = usePathname() || '/';
  if (pathname.startsWith('/admin')) return null;
  if (pathname === '/quote') return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-ink/10 bg-bone/95 backdrop-blur supports-[backdrop-filter]:bg-bone/85">
      <div className="p-2">
        <Link
          href="/quote"
          className="flex items-center justify-center gap-2 rounded-md bg-rust px-3 py-3.5 text-sm font-bold text-bone shadow-rugged"
        >
          Get a Free Estimate
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-1 text-center text-[11px] text-ink/55">Answered in under 1 business hour</p>
      </div>
    </div>
  );
}
