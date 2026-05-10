import Link from 'next/link';
import { SERVICES } from '@/lib/services';

const ICONS: Record<string, React.ReactNode> = {
  'well-drilling': <DrillIcon />,
  'water-well-installation': <SystemIcon />,
  'well-pump-repair': <PumpIcon />,
  'emergency-no-water-service': <BoltIcon />,
  'well-inspections': <ClipboardIcon />,
  'water-testing': <DropIcon />,
  'rural-water-systems': <RuralIcon />,
  'pressure-tank-replacement': <TankIcon />,
  'agricultural-wells': <CowIcon />,
  'residential-wells': <HouseIcon />,
};

export function ServiceGrid({ heading = true }: { heading?: boolean }) {
  return (
    <div>
      {heading && (
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">What we do</span>
          <h2 className="h-section mt-3">Full-service well &amp; pump for Hill Country properties.</h2>
          <p className="mt-4 text-base md:text-lg text-ink/70">
            One local crew. Drilling, install, repair, inspections, and emergency response — all under one roof.
          </p>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group relative overflow-hidden rounded-xl border border-ink/10 bg-white p-6 shadow-rugged hover:border-rust hover:shadow-deep transition-all"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-md bg-rust/10 text-rust group-hover:bg-rust group-hover:text-bone transition">
                {ICONS[s.slug] || <DropIcon />}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink leading-tight">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.short}</p>
              </div>
            </div>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-rust opacity-0 group-hover:opacity-100 transition">
              Learn more <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function DrillIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="M9 8h6"/><path d="M10 8l-1 14"/><path d="M14 8l1 14"/><path d="M8 22h8"/></svg>; }
function SystemIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="6" height="12" rx="1"/><path d="M14 9v6"/><path d="M10 12h4"/><circle cx="18" cy="12" r="3"/></svg>; }
function PumpIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M22 12h-4"/><path d="M6 12H2"/></svg>; }
function BoltIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 11-14h-7l0-6Z"/></svg>; }
function ClipboardIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="18" rx="2"/><path d="M9 4V2h6v2"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>; }
function DropIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13Z"/></svg>; }
function RuralIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="m4 21 2-7h4l2 7"/><path d="m13 21 2-9h4l2 9"/></svg>; }
function TankIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><path d="M6 9h12"/></svg>; }
function CowIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v10"/><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M9 18v3"/><path d="M15 18v3"/></svg>; }
function HouseIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/></svg>; }
