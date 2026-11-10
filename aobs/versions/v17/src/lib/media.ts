import media from '@/content/media.json';

export type Capture = { file: string; w: number; h: number; tournament: string; kind: string; title: string; alt: string };
export type KeyVisual = { file: string; w: number; h: number; tournament: string; alt: string };
export type Video = { id: string; title: string; duration: string; seconds: number; description: string; transcript: string };
export const captures = media.captures as Capture[];
export const draft = media.draft;
export const keyVisuals = media.keyVisuals as KeyVisual[];
export const videos = media.videos as Video[];
export const capturesFor = (slug: string) => captures.filter((c) => c.tournament === slug);
export const visualsFor = (slug: string) => keyVisuals.filter((c) => c.tournament === slug);
