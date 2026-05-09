export const SITE = {
  name: 'Hill Country Well & Pump',
  legalName: 'Hill Country Well & Pump Co.',
  domain: 'hillcountrywellandpump.com',
  url: 'https://hillcountrywellandpump.com',
  // Text-only contact. We do not take phone calls — every request runs through the form
  // (or an inbound SMS Twilio webhook → /api/sms-inbound → CRM).
  textNumber: process.env.NEXT_PUBLIC_TEXT_NUMBER || '',
  textNumberRaw: process.env.NEXT_PUBLIC_TEXT_NUMBER_RAW || '',
  email: process.env.NEXT_PUBLIC_EMAIL || 'hillcountrywellandpump@gmail.com',
  address: {
    street: '1402 Ranch Road 1376',
    city: 'Fredericksburg',
    region: 'TX',
    postalCode: '78624',
    country: 'US',
  },
  geo: { lat: 30.2752, lng: -98.8719 },
  hours: 'Online 24/7 · Form responses within 1 business hour',
  founded: 1998,
  yearsInBusiness: new Date().getFullYear() - 1998,
  social: {
    facebook: 'https://www.facebook.com/hillcountrywellandpump',
    google: 'https://g.page/hillcountrywellandpump',
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
