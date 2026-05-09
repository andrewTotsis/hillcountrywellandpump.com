export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  symptoms?: string[];
  process?: { title: string; body: string }[];
  trust?: string[];
  faqs: { q: string; a: string }[];
  meta: { title: string; description: string };
};

export const SERVICES: Service[] = [
  {
    slug: 'well-drilling',
    name: 'Well Drilling',
    short: 'New residential and ranch well drilling across the Texas Hill Country.',
    hero:
      'From limestone-heavy Boerne ridgelines to Fredericksburg granite, we drill wells engineered for the Hill Country aquifer — the right depth, the right casing, the right yield.',
    symptoms: [
      'Building a new home on raw acreage',
      'Existing well went dry or never produced enough',
      'Need a dedicated agricultural or livestock well',
      'Splitting a property and need a second well',
    ],
    process: [
      { title: 'Site evaluation', body: 'On-site visit to evaluate geology, easements, and proximity to septic. We pull regional aquifer data for the Trinity, Edwards, and Hickory.' },
      { title: 'Permits & state filings', body: 'We handle TDLR Driller Reports and county groundwater conservation district permits start to finish.' },
      { title: 'Drilling', body: 'Air rotary or mud rotary depending on formation. Steel surface casing, sealed annulus, and PVC liner sized for your demand.' },
      { title: 'Yield test & water sample', body: 'We bail and test gallons-per-minute, then pull a water sample for bacterial and mineral analysis before you commit to a pump.' },
    ],
    trust: [
      'Licensed Texas Water Well Driller',
      'TDLR-compliant casing and grouting',
      'Honest go/no-go before you spend on a pump',
      'Written yield test results',
    ],
    faqs: [
      { q: 'How deep are wells in the Texas Hill Country?', a: 'Most Hill Country wells fall between 250 and 700 feet. Fredericksburg and Mason area wells (Hickory aquifer) often run 500–800 ft. Boerne and Comfort wells (Trinity aquifer) commonly land 350–650 ft. Dripping Springs varies the most — anywhere from 300 to 900 ft.' },
      { q: 'How long does drilling take?', a: 'On-site drilling is typically 1–3 days. The full project, from permit to pump install, usually runs 2–4 weeks.' },
      { q: 'Do you guarantee water?', a: 'No reputable driller can guarantee water at a specific depth — geology decides. What we guarantee is honest reporting at every 20 feet so you can stop, continue, or move the rig before you over-spend.' },
    ],
    meta: {
      title: 'Well Drilling Texas Hill Country | Licensed Driller | Hill Country Well & Pump',
      description: 'Licensed water well drilling across the Texas Hill Country — Fredericksburg, Boerne, Marble Falls, Dripping Springs. Trinity, Edwards & Hickory aquifer experience. Free site visit.',
    },
  },
  {
    slug: 'water-well-installation',
    name: 'Water Well Installation',
    short: 'Complete turnkey well systems — drill, pump, tank, plumbing, controls.',
    hero:
      'A water well is more than a hole in the ground. We install the full system — submersible pump, pressure tank, controls, and tie-in — so you turn on a faucet and forget the rest exists.',
    symptoms: [
      'New construction needing a complete system',
      'Replacing a 20+ year old system that keeps breaking',
      'Adding livestock or irrigation demand to an existing well',
    ],
    process: [
      { title: 'System sizing', body: 'We size the pump, tank, and pipe to your real fixture count and irrigation demand — not a guess.' },
      { title: 'Pump install', body: 'Stainless submersible (Franklin / Grundfos / Goulds), torque-arrestor, safety rope, splice kit, and 600V wire on a stainless pitless adapter.' },
      { title: 'Pressure tank & controls', body: 'Properly pre-charged bladder tank, quality pressure switch, and a constant-pressure VFD option for homes with multiple bathrooms.' },
      { title: 'Disinfection & startup', body: 'Chlorination, flush, pressure test, and a walkthrough so you know how to read your system.' },
    ],
    trust: [
      'Top-tier Franklin / Grundfos / Goulds equipment only',
      '5-year workmanship warranty',
      'Written system specs you keep',
    ],
    faqs: [
      { q: 'How much does a complete water well system cost in Texas?', a: 'A turnkey residential system in the Hill Country typically runs $18,000–$32,000 depending on depth, casing, pump size, and tank. Deep Hickory wells can run higher.' },
      { q: 'Can I finance a well?', a: 'Yes — we partner with lenders who finance water systems specifically. Most homeowners qualify for monthly payments rather than a lump sum.' },
    ],
    meta: {
      title: 'Water Well Installation Texas Hill Country | Hill Country Well & Pump',
      description: 'Complete turnkey water well systems — drilling, pump, pressure tank, controls, and startup. Serving Fredericksburg, Boerne, Marble Falls and the Texas Hill Country.',
    },
  },
  {
    slug: 'well-pump-repair',
    name: 'Well Pump Repair',
    short: 'Fast pump diagnosis and repair — submersible, jet, and booster.',
    hero:
      'When the pump quits, the house quits. We diagnose pump failures in hours, not days, and carry the most common Franklin and Grundfos parts on the truck so we can fix it on the first visit when possible.',
    symptoms: [
      'No water at the faucets',
      'Pump runs constantly and won’t shut off',
      'Pressure drops after a few minutes of use',
      'Breaker trips when the pump kicks on',
      'Air spitting at the faucets',
      'Water is suddenly cloudy or sandy',
    ],
    process: [
      { title: 'Diagnosis', body: 'We test pressure switch, capacitor, control box, amperage draw, and insulation resistance before pulling anything. Most calls don’t need a pull.' },
      { title: 'Pull & inspect', body: 'When the pump must come out, we pull the column, inspect wire, splice, torque arrestor, and pitless adapter — not just the pump.' },
      { title: 'Replace or rebuild', body: 'Stainless replacement when the motor is gone. Often the wire, switch, or tank is the real issue and the pump is fine.' },
      { title: 'Verify', body: 'Pressure test, amp draw on each leg, drawdown, and a written report.' },
    ],
    faqs: [
      { q: 'How long does a well pump last?', a: 'A quality submersible in clean Hill Country water lasts 12–20 years. Sandy wells, frequent power surges, or undersized tanks shorten that to 5–8.' },
      { q: 'Can I repair a pump myself?', a: 'You can swap a pressure switch with the breaker off. Anything below ground — pulling the pump, splicing the down-hole wire — is dangerous and almost always voids the equipment warranty.' },
      { q: 'Do you do emergency pump service?', a: 'Yes. Same-day and after-hours calls — we prioritize total no-water households, livestock, and elderly customers.' },
    ],
    meta: {
      title: 'Well Pump Repair Texas Hill Country | Same-Day Service | Hill Country Well & Pump',
      description: 'Same-day well pump repair across Fredericksburg, Boerne, Marble Falls and the Texas Hill Country. Licensed, insured, no-water emergency service available.',
    },
  },
  {
    slug: 'emergency-no-water-service',
    name: 'Emergency No-Water Service',
    short: '24/7 no-water emergency response. Submit and we move fast.',
    hero:
      'A house with no water is an emergency. Submit an Urgency 5 request and you skip the queue — we dispatch the same day in most cases, and prioritize households with no other water source, livestock at risk, and elderly residents.',
    symptoms: [
      'House is completely dry',
      'Lost water during a storm or after a power surge',
      'Cattle or livestock have no water',
      'Pump runs but nothing comes out',
    ],
    trust: [
      'Real human reviews every after-hours request',
      'Same-day dispatch in most of the Hill Country',
      'Full truck stock — most repairs done on the first visit',
    ],
    faqs: [
      { q: 'What’s the after-hours emergency rate?', a: 'We charge a single, transparent emergency dispatch fee — never per-hour gouging. You’ll have a confirmed number before we roll a truck.' },
      { q: 'How fast can you be here?', a: 'In most of the Hill Country, 1–4 hours during business hours and same-evening for after-hours emergencies.' },
    ],
    meta: {
      title: 'Emergency No-Water Service Texas Hill Country | 24/7 | Hill Country Well & Pump',
      description: '24/7 emergency no-water service across the Texas Hill Country. Same-day dispatch. Submit an emergency request and skip the queue. Licensed, insured.',
    },
  },
  {
    slug: 'well-inspections',
    name: 'Well Inspections',
    short: 'Pre-purchase and pre-listing well inspections with written reports.',
    hero:
      'Buying a Hill Country property with a well? Don’t close without an inspection. We test yield, pressure, sanitary seal, and water quality — and you get a written report your lender will accept.',
    process: [
      { title: 'Visual & sanitary', body: 'Cap, casing height above grade, septic separation, and surface drainage.' },
      { title: 'Yield & drawdown', body: 'Timed flow test to verify the well actually produces what the seller claims.' },
      { title: 'Water quality', body: 'Lab-analyzed bacterial and mineral panel — coliform, nitrates, hardness, iron, manganese.' },
      { title: 'Written report', body: 'Lender-ready PDF, often turned around in 48 hours.' },
    ],
    faqs: [
      { q: 'How much does a well inspection cost?', a: 'Most residential well inspections run $375–$650 depending on yield test length and water panel scope.' },
      { q: 'Do USDA / VA / FHA loans require a well inspection?', a: 'Yes — and they have specific water quality and separation distance requirements. We provide the exact documentation those programs require.' },
    ],
    meta: {
      title: 'Well Inspections Texas Hill Country | Pre-Purchase Reports | Hill Country Well & Pump',
      description: 'Pre-purchase and pre-listing well inspections across the Texas Hill Country. Yield, pressure, sanitary seal, and lab water testing. Lender-ready PDF reports.',
    },
  },
  {
    slug: 'water-testing',
    name: 'Water Testing',
    short: 'Full bacterial, mineral, and metals water analysis.',
    hero:
      'Hill Country water varies hard from one valley to the next. We pull samples and ship them to a state-certified lab so you know exactly what’s in your water — coliform, nitrates, hardness, iron, manganese, arsenic, and more.',
    faqs: [
      { q: 'How often should I test my well water?', a: 'Annually for bacteria and nitrates. Every 3 years for the full mineral and metals panel. After any flooding event or septic work.' },
      { q: 'My water tastes fine — do I still need testing?', a: 'Yes. Coliform bacteria, nitrates, and arsenic are tasteless and odorless. Taste tells you nothing about what’s actually safe.' },
    ],
    meta: {
      title: 'Well Water Testing Texas Hill Country | Lab-Certified | Hill Country Well & Pump',
      description: 'State-certified water testing for Hill Country wells. Bacterial, mineral, and metals panels. Annual maintenance and post-flood testing.',
    },
  },
  {
    slug: 'rural-water-systems',
    name: 'Rural Water Systems',
    short: 'Multi-tank, off-grid, and large-property water systems.',
    hero:
      'Acreage homes have different water than city homes — long pipe runs, multiple draw points, livestock, and irrigation. We design rural water systems that handle the real load without short-cycling the pump.',
    faqs: [
      { q: 'I have a 1,500-ft pipe run from the well to the house. Can it work?', a: 'Yes — but it needs the right pipe size, a constant-pressure controller or booster, and sometimes a buffer tank. We’ve done many runs over 2,000 ft.' },
    ],
    meta: {
      title: 'Rural Water Systems Texas Hill Country | Acreage Homes | Hill Country Well & Pump',
      description: 'Rural and off-grid water systems for Texas Hill Country acreage. Long pipe runs, storage tanks, booster pumps, livestock and irrigation tie-ins.',
    },
  },
  {
    slug: 'pressure-tank-replacement',
    name: 'Pressure Tank Replacement',
    short: 'Fast pressure tank diagnosis and same-day replacement.',
    hero:
      'A waterlogged pressure tank is the #1 reason a healthy pump burns out early. We diagnose and replace pressure tanks same-day in most of the Hill Country.',
    symptoms: [
      'Pump cycles on and off every few seconds',
      'Pressure drops fast when you open a faucet',
      'You hear water sloshing inside the tank',
    ],
    faqs: [
      { q: 'How long does a pressure tank last?', a: '8–15 years for a quality bladder tank. Cheap tanks fail in 3–5.' },
      { q: 'Can I just re-pressurize it?', a: 'If the bladder is intact, yes. If the bladder is ruptured (most failures), no — it has to be replaced.' },
    ],
    meta: {
      title: 'Pressure Tank Replacement Texas Hill Country | Same-Day | Hill Country Well & Pump',
      description: 'Same-day pressure tank replacement across the Texas Hill Country. Quality bladder tanks, proper pre-charge, and pump-life-saving install.',
    },
  },
  {
    slug: 'agricultural-wells',
    name: 'Agricultural Wells',
    short: 'High-yield wells for ranches, livestock, and irrigation.',
    hero:
      'Ag wells are sized different. We drill and equip wells for cattle, vineyards, hay irrigation, and large-acreage ranches — bigger pumps, bigger tanks, and proper electrical for sustained loads.',
    faqs: [
      { q: 'What yield do I need for cattle?', a: 'A working cow needs about 15 gal/day. We size for peak summer demand plus 30%, with storage to ride through pump cycles.' },
    ],
    meta: {
      title: 'Agricultural Wells Texas Hill Country | Ranches & Irrigation | Hill Country Well & Pump',
      description: 'High-yield agricultural water wells across the Texas Hill Country. Cattle, vineyards, hay irrigation. Sized for real demand, not guesses.',
    },
  },
  {
    slug: 'residential-wells',
    name: 'Residential Wells',
    short: 'Family home wells designed around real fixture count.',
    hero:
      'Residential wells are about reliability — water that just works for a family of 2 to 8 across morning showers, dishwashers, and irrigation. We size for your real life, not a brochure.',
    faqs: [
      { q: 'What size pump do I need?', a: 'Most Hill Country homes need a 7–15 GPM pump. Houses with 3+ baths or large irrigation often go to 20+ GPM with constant-pressure controls.' },
    ],
    meta: {
      title: 'Residential Wells Texas Hill Country | Family Home Water | Hill Country Well & Pump',
      description: 'Residential water well drilling, install, and repair across the Texas Hill Country. Sized for your real family demand. Licensed, insured, family-owned.',
    },
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
