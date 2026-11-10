import Image from 'next/image';
import media from '@/content/media.json';
import { MobaScene } from './MobaScene';

type Capture = { file: string; alt: string; game?: string; tournament?: string };
const captures = (media.captures as Capture[]) || [];
export const hasCaptures = captures.length > 0;

/** Background "game" layer: a real AOBS capture when supplied (see content/media.json), otherwise the procedural stand-in. */
export function GameFrame({ index = 0, tournament, priority = false }: { index?: number; tournament?: string; priority?: boolean }) {
  const list = tournament ? captures.filter((c) => c.tournament === tournament) : captures;
  const cap = (list.length ? list : captures)[index % Math.max(1, (list.length ? list : captures).length)];
  if (cap) return <Image src={`/media/broadcast/${cap.file}`} alt={cap.alt} fill sizes="(max-width: 1024px) 100vw, 900px" priority={priority} className="object-cover" />;
  return <MobaScene seed={index + 1} />;
}
