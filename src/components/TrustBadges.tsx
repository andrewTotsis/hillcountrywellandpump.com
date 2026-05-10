export function TrustBadges() {
  const items = [
    { label: 'Texas Hill Country\nfocused', icon: <ShieldIcon /> },
    { label: 'Family-Run\n& Insured', icon: <HouseIcon /> },
    { label: '24/7 Emergency\nNo-Water Service', icon: <BoltIcon /> },
    { label: 'Financing\nAvailable', icon: <CardIcon /> },
    { label: 'Workmanship\nGuaranteed', icon: <CheckIcon /> },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
          <span className="grid h-10 w-10 flex-none place-items-center rounded-md bg-rust/10 text-rust">{it.icon}</span>
          <span className="whitespace-pre-line text-sm font-semibold leading-tight text-ink">{it.label}</span>
        </div>
      ))}
    </div>
  );
}

function ShieldIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>; }
function HouseIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/></svg>; }
function BoltIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 11-14h-7l0-6Z"/></svg>; }
function CardIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>; }
function CheckIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>; }
