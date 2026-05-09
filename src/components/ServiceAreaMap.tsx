import Link from 'next/link';
import { LOCATIONS } from '@/lib/locations';

export function ServiceAreaMap() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-br from-sand to-bone p-8 shadow-rugged">
        <div className="absolute inset-0 bg-grain opacity-60 mix-blend-multiply pointer-events-none" />
        <svg viewBox="0 0 400 320" className="relative w-full h-auto">
          {/* Stylized Hill Country outline */}
          <path d="M50,210 C90,150 130,120 180,110 C230,100 270,90 310,110 C350,130 360,170 350,210 C340,250 300,270 250,275 C200,280 140,275 100,260 C70,250 40,240 50,210 Z" fill="#E8DDC8" stroke="#7A4A24" strokeWidth="2"/>
          <path d="M70,210 C100,170 140,150 180,150 C220,150 260,160 290,180" fill="none" stroke="#B07A4A" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 4"/>
          {/* Cities */}
          {[
            { x: 130, y: 175, label: 'Fredericksburg' },
            { x: 200, y: 155, label: 'Marble Falls' },
            { x: 230, y: 235, label: 'Boerne' },
            { x: 295, y: 195, label: 'Dripping Springs' },
            { x: 175, y: 210, label: 'Johnson City' },
            { x: 110, y: 235, label: 'Kerrville' },
          ].map((c, i) => (
            <g key={i}>
              <circle cx={c.x} cy={c.y} r="5" fill="#A8431E" />
              <circle cx={c.x} cy={c.y} r="9" fill="none" stroke="#A8431E" strokeOpacity="0.4" />
              <text x={c.x + 10} y={c.y + 4} fontSize="11" fill="#1B1612" fontFamily="ui-sans-serif">{c.label}</text>
            </g>
          ))}
          <text x="200" y="55" textAnchor="middle" fontSize="14" fill="#1B1612" fontFamily="Georgia" fontWeight="700">Texas Hill Country Service Area</text>
        </svg>
      </div>
      <div>
        <h3 className="h-section">We service most of the Hill Country.</h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75">
          From Fredericksburg west to Mason, south to Boerne, east to Dripping Springs, and across the Highland Lakes — we run trucks across the region every day. If you’re on a well in the Hill Country, you’re in our area.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-2">
          {LOCATIONS.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/locations/${l.slug}`}
                className="group flex items-center justify-between rounded-md border border-ink/10 bg-white px-4 py-3 text-sm font-semibold text-ink hover:border-rust hover:bg-rust/5 transition"
              >
                <span>{l.city}</span>
                <span className="text-ink/40 group-hover:text-rust">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
