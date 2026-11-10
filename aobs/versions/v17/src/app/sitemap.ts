import type { MetadataRoute } from 'next';
import { SITE_URL, technology, tournaments } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ['', '/broadcast', '/graphics-data', '/technology', ...technology.map((p) => `/technology/${p.slug}`), '/work', ...tournaments.map((t) => `/work/${t.slug}`), '/about', '/contact', '/insights'];
  return pages.map((p) => ({ url: `${SITE_URL}${p || '/'}`, lastModified: now, changeFrequency: p.startsWith('/work/') ? 'yearly' : 'monthly', priority: p === '' ? 1 : p.split('/').length > 2 ? 0.6 : 0.8 }));
}
