import site from '@/content/site.json';
import stats from '@/content/stats.json';
import tournamentsRaw from '@/content/tournaments.json';
import games from '@/content/games.json';
import capabilities from '@/content/capabilities.json';
import workflow from '@/content/workflow.json';
import broadcast from '@/content/broadcast.json';
import graphics from '@/content/graphics.json';
import technology from '@/content/technology.json';
import about from '@/content/about.json';
import insights from '@/content/insights.json';

export type Tournament = {
  slug: string; name: string; subtitle?: string; games: string[]; year: number | null; format: string | null;
  logo: string; w: number; h: number; mono: 'gray' | 'silhouette' | 'invert'; hoverBg: 'dark' | 'light'; featured?: boolean;
  country?: string; facts?: [string, string][]; summary?: string; setup?: string; campaign?: string; tech?: string[];
};
export const tournaments = tournamentsRaw as Tournament[];
export const featured = tournaments.filter((t) => t.featured);
export const gameNames = games as Record<string, string>;
export const tournament = (slug: string) => tournaments.find((t) => t.slug === slug);
export const product = (slug: string) => technology.find((p) => p.slug === slug);
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com').replace(/\/$/, '');
export { site, stats, capabilities, workflow, broadcast, graphics, technology, about, insights };

/** Remove {{TODO: ...}} markers for places where they must never leak (meta tags, JSON-LD, alt text). */
export const clean = (s: string) => s.replace(/\{\{TODO:[^}]*\}\}/g, '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
