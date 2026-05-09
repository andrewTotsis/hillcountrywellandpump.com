import Link from 'next/link';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/lib/services';
import { LOCATIONS } from '@/lib/locations';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-ink text-bone">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-rust text-bone font-display text-lg">HC</span>
            <span>
              <span className="block font-display text-base leading-none text-bone">Hill Country</span>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-bone/60">Well &amp; Pump</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-bone/70">
            Family-owned water well drilling, pump install, and emergency service across the Texas Hill Country since {SITE.founded}. Licensed, insured, and answerable.
          </p>
          <div className="mt-6 space-y-2 text-sm text-bone/80">
            <Link href="/quote" className="block hover:text-rust">→ Request a Free Estimate</Link>
            <a href={`mailto:${SITE.email}`} className="block hover:text-rust">✉ {SITE.email}</a>
            <p className="text-bone/60">{SITE.hours}</p>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-bone/60">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-bone/85 hover:text-rust">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-bone/60">Service Area</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="text-bone/85 hover:text-rust">Well Drilling {l.city} TX</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-bone/60">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-bone/85 hover:text-rust">About</Link></li>
            <li><Link href="/reviews" className="text-bone/85 hover:text-rust">Reviews</Link></li>
            <li><Link href="/faq" className="text-bone/85 hover:text-rust">FAQ</Link></li>
            <li><Link href="/contact" className="text-bone/85 hover:text-rust">Contact</Link></li>
            <li><Link href="/quote" className="text-bone/85 hover:text-rust">Free Estimate</Link></li>
            <li><Link href="/financing" className="text-bone/85 hover:text-rust">Financing</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="container-wide flex flex-col gap-3 py-6 text-xs text-bone/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}. Licensed Texas Water Well Driller. Insured.</p>
          <p>Serving Fredericksburg · Boerne · Marble Falls · Dripping Springs · Burnet &amp; Blanco Counties</p>
        </div>
      </div>
    </footer>
  );
}
