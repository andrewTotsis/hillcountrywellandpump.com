export type Location = {
  slug: string;
  city: string;
  county: string;
  state: 'TX';
  aquifer: string;
  typicalDepth: string;
  geography: string;
  rural: string;
  waterIssues: string[];
  homeownerProblems: string[];
  faqs: { q: string; a: string }[];
  zip: string[];
  meta: { title: string; description: string };
};

export const LOCATIONS: Location[] = [
  {
    slug: 'fredericksburg-tx',
    city: 'Fredericksburg',
    county: 'Gillespie County',
    state: 'TX',
    aquifer: 'Hickory Aquifer (primary), Ellenburger-San Saba (secondary)',
    typicalDepth: '500–800 ft',
    geography:
      'Fredericksburg sits on the western edge of the Hill Country where granite outcrops give way to the Llano Uplift. Wells here punch through limestone caps into the deeper Hickory sandstone — which means longer drills but very dependable yield once you’re in the formation.',
    rural:
      'Most of our Fredericksburg work is on 5–50 acre tracts off Ranch Road 1376, around Stonewall, Cherry Spring, Crabapple, and the wineries along U.S. 290. New construction on raw acreage is the most common request.',
    waterIssues: [
      'High iron and manganese in shallow Hickory wells — staining fixtures',
      'Hard water (often 25+ grains) requiring a softener',
      'Sulfur (rotten-egg) odor in some areas, easily filtered',
    ],
    homeownerProblems: [
      'New build needing a deep-aquifer well',
      'Old hand-dug or shallow well that went dry in drought',
      'Iron-stained sinks and laundry from untreated Hickory water',
      'Vineyard or orchard irrigation demand',
    ],
    faqs: [
      { q: 'How deep are wells in Fredericksburg, TX?', a: 'Most Fredericksburg residential wells run 500–800 ft into the Hickory aquifer. Some properties closer to Stonewall hit good water at 350–500 ft. We pull regional driller reports for your section before quoting.' },
      { q: 'Do I need a permit for a well in Gillespie County?', a: 'Gillespie County is part of the Hill Country Underground Water Conservation District. Yes — registration and a drilling permit are required, and we handle all of it.' },
      { q: 'How much is a well in Fredericksburg?', a: 'Because Hickory wells run deeper, complete systems in Fredericksburg typically range $22,000–$35,000.' },
    ],
    zip: ['78624', '78671', '78675'],
    meta: {
      title: 'Well Drilling Fredericksburg TX | Hill Country Well & Pump',
      description: 'Water well drilling, pump install, and emergency service in Fredericksburg, TX. Hickory aquifer specialists. Family-run, insured. Free site visits.',
    },
  },
  {
    slug: 'marble-falls-tx',
    city: 'Marble Falls',
    county: 'Burnet County',
    state: 'TX',
    aquifer: 'Trinity Aquifer (primary), Ellenburger-San Saba (deep)',
    typicalDepth: '300–650 ft',
    geography:
      'Marble Falls sits on the Highland Lakes between the Llano Uplift and the Edwards Plateau. Geology shifts fast here — you can drill through pink granite on one side of FM 1431 and limestone on the other. Local experience matters.',
    rural:
      'We work the lakefront communities, the high country off Ranch Road 1431 toward Lago Vista, and the rural acreage stretching toward Burnet and Bertram.',
    waterIssues: [
      'Variable depth depending on which side of the Llano Uplift you sit on',
      'Hard water with elevated calcium',
      'Lakefront properties with elevation changes that demand booster pumps',
    ],
    homeownerProblems: [
      'Lake-area homes with city water cutoff considering a private well',
      'Pump replacements on aging 1990s-era systems',
      'Pressure issues on long pipe runs from well to house',
    ],
    faqs: [
      { q: 'Are wells common in Marble Falls?', a: 'Very. Most homes outside city limits — and many inside — are on private wells. The Trinity aquifer is reliable here at 300–650 ft.' },
      { q: 'Can I get same-day pump service in Marble Falls?', a: 'Yes — Marble Falls and Burnet County are in our same-day dispatch zone for pump emergencies.' },
    ],
    zip: ['78654', '78657'],
    meta: {
      title: 'Well Drilling Marble Falls TX | Pump Repair | Hill Country Well & Pump',
      description: 'Well drilling, pump repair, and emergency service in Marble Falls, TX. Trinity aquifer experience. Same-day dispatch. Family-run, insured.',
    },
  },
  {
    slug: 'boerne-tx',
    city: 'Boerne',
    county: 'Kendall County',
    state: 'TX',
    aquifer: 'Trinity Aquifer (Lower & Middle)',
    typicalDepth: '350–650 ft',
    geography:
      'Boerne sits on the Edwards Plateau just north of San Antonio. Wells here punch through Edwards limestone into the Trinity. Karst features mean you can hit fractured bearing zones at very different depths within a quarter mile.',
    rural:
      'Most of our Boerne work is on the rapidly developing acreage along I-10 north, Ranger Creek, Cordillera Ranch, and toward Comfort.',
    waterIssues: [
      'Calcium hardness — almost universal',
      'Occasional hydrogen sulfide in some pockets',
      'Drought-sensitive shallow wells in subdivisions where everyone draws from the same fracture',
    ],
    homeownerProblems: [
      'Subdivision well that drops in summer when neighbors irrigate',
      'New ranch home needing a high-yield ag-capable well',
      'Hard water destroying water heaters and fixtures',
    ],
    faqs: [
      { q: 'How deep are wells in Boerne, TX?', a: 'Most Boerne residential wells fall between 350 and 650 ft into the Trinity. Karst formations mean local experience is critical — we pull TWDB data for your section before drilling.' },
      { q: 'Is the water in Boerne safe to drink?', a: 'Trinity water is generally excellent but extremely hard. Bacterial contamination is rare in deep wells but absolutely possible in old shallow wells — annual testing is recommended.' },
    ],
    zip: ['78006', '78015'],
    meta: {
      title: 'Well Drilling Boerne TX | Trinity Aquifer | Hill Country Well & Pump',
      description: 'Water well drilling, pump install, and emergency service in Boerne, TX. Trinity aquifer specialists. Family-run, insured. Free site visits.',
    },
  },
  {
    slug: 'dripping-springs-tx',
    city: 'Dripping Springs',
    county: 'Hays County',
    state: 'TX',
    aquifer: 'Trinity Aquifer (primary), Edwards (some areas)',
    typicalDepth: '300–900 ft',
    geography:
      'Dripping Springs sits on the eastern edge of the Hill Country where the Edwards Plateau drops to the Blackland Prairie. The contact zone makes drilling depths wildly variable — we’ve drilled 320 ft and 870 ft on adjacent properties.',
    rural:
      'We work the explosive growth corridor along U.S. 290 — Caliterra, Belterra, Headwaters, the wineries, and the older acreage tracts off Bell Springs and Fitzhugh Road.',
    waterIssues: [
      'Wide depth variability — driller experience matters more here than almost anywhere',
      'Hard water with calcium and occasional iron',
      'Drought-sensitivity in shallow Trinity wells',
    ],
    homeownerProblems: [
      'New construction on a lot where the seller said “water is shallow”',
      'Existing well dropping with the drought and neighborhood growth',
      'Subdivision home where the HOA well is unreliable',
    ],
    faqs: [
      { q: 'How deep are wells in Dripping Springs, TX?', a: 'Anywhere from 300 to 900 ft. The Trinity contact zone creates dramatic differences over short distances. We pull driller reports for your specific section before quoting.' },
      { q: 'Is Dripping Springs running out of water?', a: 'The shallow Trinity is under heavy demand, and yields drop in drought. Properly cased, deeper wells remain reliable — we go to the formation that produces.' },
    ],
    zip: ['78620'],
    meta: {
      title: 'Well Drilling Dripping Springs TX | Hill Country Well & Pump',
      description: 'Water well drilling, pump install, and emergency service in Dripping Springs, TX. Trinity aquifer experience across the U.S. 290 growth corridor. Family-run, insured.',
    },
  },
  {
    slug: 'burnet-county-tx',
    city: 'Burnet County',
    county: 'Burnet County',
    state: 'TX',
    aquifer: 'Trinity, Ellenburger-San Saba, Hickory (varies by location)',
    typicalDepth: '300–800 ft',
    geography:
      'Burnet County stretches from the Highland Lakes across to the Llano Uplift. Granite, limestone, and sandstone all play here — well design depends heavily on which side of the county you’re on.',
    rural:
      'We service Burnet, Bertram, Marble Falls, Spicewood, and the lakefront communities along Lake LBJ and Lake Buchanan.',
    waterIssues: [
      'Geology shifts dramatically across the county',
      'Hard water nearly universal',
      'Lakefront elevation changes requiring booster systems',
    ],
    homeownerProblems: [
      'Ranch wells for cattle and hay',
      'Lakefront homes with seasonal pressure issues',
      'Older systems with original 1980s-era pumps still in the ground',
    ],
    faqs: [
      { q: 'What aquifer serves Burnet County?', a: 'It depends on where you sit. Eastern Burnet County is mostly Trinity. Western and southern areas tap Ellenburger-San Saba and Hickory. We confirm with TWDB section data.' },
      { q: 'Do I need a permit in Burnet County?', a: 'Yes — Burnet County is in the Central Texas Groundwater Conservation District. We handle the registration and permitting.' },
    ],
    zip: ['78611', '78605', '78654', '78657', '78639'],
    meta: {
      title: 'Well Drilling Burnet County TX | Hill Country Well & Pump',
      description: 'Water well drilling, pump install, and 24/7 service across Burnet County, TX. Trinity, Ellenburger, and Hickory experience. Family-run, insured.',
    },
  },
  {
    slug: 'blanco-county-tx',
    city: 'Blanco County',
    county: 'Blanco County',
    state: 'TX',
    aquifer: 'Trinity Aquifer (primary)',
    typicalDepth: '350–700 ft',
    geography:
      'Blanco County is classic Hill Country — Johnson City, Blanco, Round Mountain, and the rolling ranches between. Limestone-dominant geology, with the Pedernales River cutting across.',
    rural:
      'Most of our Blanco County work is on ranch tracts of 25 to 250 acres, with frequent agricultural and livestock demand on top of household use.',
    waterIssues: [
      'Hard water with calcium',
      'Drought-sensitive shallow wells',
      'Occasional iron staining',
    ],
    homeownerProblems: [
      'New ranch home builds',
      'Wells under siege from drought-driven demand',
      'Agricultural water needs for cattle and hay',
    ],
    faqs: [
      { q: 'How deep are wells in Blanco County?', a: 'Most run 350–700 ft into the Trinity. We confirm with neighborhood driller reports before quoting.' },
      { q: 'Are ag wells common in Blanco County?', a: 'Very. Most ranch wells we drill in Blanco County are sized for cattle plus household, with storage and backup.' },
    ],
    zip: ['78606', '78636', '78663'],
    meta: {
      title: 'Well Drilling Blanco County TX | Ranch & Residential | Hill Country Well & Pump',
      description: 'Water well drilling, pump install, and emergency service in Blanco County, TX. Ranch and residential. Trinity aquifer experience. Family-run, insured.',
    },
  },
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
