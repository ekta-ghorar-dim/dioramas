import type { Metadata } from 'next';
import { site, SITE_URL, clean } from './content';

export function meta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = path === '/' ? '/' : path;
  return {
    title: { absolute: title },
    description: clean(description),
    alternates: { canonical: url },
    openGraph: { title, description: clean(description), url, siteName: site.name, type: 'website', locale: 'en' },
    twitter: { card: 'summary_large_image', title, description: clean(description) },
  };
}

const abs = (p: string) => `${SITE_URL}${p}`;

export const orgLd = () => ({
  '@context': 'https://schema.org', '@type': 'Organization', '@id': abs('/#org'), name: site.name, url: SITE_URL,
  logo: abs('/brand/aobs-logo-white.png'), description: clean(site.description),
  knowsAbout: ['Esports broadcast production', 'Remote production', 'Live data graphics', 'Stream failover'],
});

export const breadcrumbLd = (items: [string, string][]) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
});

export const serviceLd = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org', '@type': 'Service', name, description: clean(description), url: abs(path),
  serviceType: name, provider: { '@id': abs('/#org') }, areaServed: site.region || 'Worldwide',
});

export const faqLd = (faq: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: clean(f.a) } })),
});

export const caseLd = (name: string, description: string, path: string, image: string) => ({
  '@context': 'https://schema.org', '@type': 'CreativeWork', name, headline: name, description: clean(description), url: abs(path),
  image: abs(image), creator: { '@id': abs('/#org') }, about: { '@type': 'Event', name },
});

/** VideoObject for self-hosted portfolio videos. */
export const videoLd = (v: { id: string; title: string; description: string; duration: string; transcript: string }) => ({
  '@context': 'https://schema.org', '@type': 'VideoObject', name: v.title, description: v.description, duration: v.duration, transcript: v.transcript,
  thumbnailUrl: abs(`/media/video/${v.id}-poster.webp`), contentUrl: abs(`/media/video/${v.id}.mp4`), uploadDate: '2024-12-29', creator: { '@id': abs('/#org') },
});
