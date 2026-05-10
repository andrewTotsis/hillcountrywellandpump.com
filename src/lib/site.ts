export const SITE = {
  name: 'Hill Country Well & Pump',
  legalName: 'Hill Country Well & Pump',
  domain: 'hillcountrywellandpump.com',
  url: 'https://hillcountrywellandpump.com',
  // Text-only contact. We do not take phone calls — every request runs through the form
  // (or an inbound SMS Twilio webhook → /api/sms-inbound → CRM).
  textNumber: process.env.NEXT_PUBLIC_TEXT_NUMBER || '',
  textNumberRaw: process.env.NEXT_PUBLIC_TEXT_NUMBER_RAW || '',
  email: process.env.NEXT_PUBLIC_EMAIL || 'hillcountrywellandpump@gmail.com',
  // Service-area business — no fixed street address. We serve customers at their property.
  serviceRegion: {
    name: 'Texas Hill Country',
    state: 'TX',
    country: 'US',
  },
  geo: { lat: 30.2752, lng: -98.8719 }, // approximate region center, not a business location
  hours: 'Online 24/7 · Form responses within 1 business hour',
  social: {
    facebook: '',
    google: '',
  },
  serviceAreas: [
    'Fredericksburg',
    'Marble Falls',
    'Boerne',
    'Dripping Springs',
    'Burnet County',
    'Blanco County',
    'Kerrville',
    'Johnson City',
    'Wimberley',
    'Llano',
    'Mason',
    'Comfort',
    'Bandera',
  ],
};

export const NAV_PRIMARY = [
  { label: 'Services', href: '/services' },
  { label: 'Service Area', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];
