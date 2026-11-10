import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCta } from '@/components/StickyCta';
import { SmoothScroll } from '@/components/SmoothScroll';
import { RevealObserver } from '@/components/Reveal';
import { Analytics } from '@/components/Analytics';
import { JsonLd } from '@/components/JsonLd';
import { orgLd } from '@/lib/seo';
import { site, SITE_URL } from '@/lib/content';

const display = localFont({
  variable: '--f-display', display: 'swap', preload: true,
  src: '../fonts/archivo-latin-wdth-normal.woff2', weight: '100 900', declarations: [{ prop: 'font-stretch', value: '62% 125%' }],
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'], adjustFontFallback: 'Arial',
});
const displayAlt = localFont({
  variable: '--f-display-alt', display: 'swap', preload: false,
  src: [{ path: '../fonts/barlow-condensed-latin-600-normal.woff2', weight: '600', style: 'normal' }],
});
const body = localFont({ variable: '--f-body', display: 'swap', preload: false, src: '../fonts/geist-latin-wght-normal.woff2', weight: '100 900' });
const mono = localFont({ variable: '--f-mono', display: 'swap', preload: false, src: '../fonts/geist-mono-latin-wght-normal.woff2', weight: '100 900' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'AOBS | Esports Broadcast Production Company', template: '%s | AOBS' },
  description: site.description,
  applicationName: 'AOBS',
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = { themeColor: '#f2f3f5', colorScheme: 'light' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${displayAlt.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header />
        <main id="main" className="relative z-[1]">{children}</main>
        <Footer />
        <StickyCta />
        <SmoothScroll />
        <RevealObserver />
        <Analytics />
        <JsonLd data={orgLd()} />
      </body>
    </html>
  );
}
