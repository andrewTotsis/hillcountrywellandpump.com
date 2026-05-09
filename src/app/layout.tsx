import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { LocalBusinessSchema } from '@/components/Schema';

export const viewport: Viewport = {
  themeColor: '#1B1612',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Well Drilling Texas Hill Country | Hill Country Well & Pump',
    template: '%s | Hill Country Well & Pump',
  },
  description:
    'Licensed water well drilling, pump install, and emergency service across the Texas Hill Country — Fredericksburg, Boerne, Marble Falls, Dripping Springs. Family-owned. Free estimates.',
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: 'Well Drilling Texas Hill Country | Hill Country Well & Pump',
    description:
      'Licensed water well drilling, pump install, and emergency service across the Texas Hill Country.',
    url: SITE.url,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bone text-ink antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-bone">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
