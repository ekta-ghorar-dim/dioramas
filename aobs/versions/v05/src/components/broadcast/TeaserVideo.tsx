'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { track } from '@/lib/analytics';
import type { Video } from '@/lib/media';

/** Click-to-play facade: only the poster loads up front; the video file is requested on demand. */
export function TeaserVideo({ v }: { v: Video }) {
  const [play, setPlay] = useState(false); const ref = useRef<HTMLVideoElement>(null);
  return (
    <figure>
      <div className="brackets relative aspect-video overflow-hidden border border-line bg-black">
        {play ? (
          <video ref={ref} className="absolute inset-0 h-full w-full" controls autoPlay muted playsInline loop poster={`/media/video/${v.id}-poster.webp`} aria-label={v.title}>
            <source src={`/media/video/${v.id}.webm`} type="video/webm" />
            <source src={`/media/video/${v.id}.mp4`} type="video/mp4" />
          </video>
        ) : (
          <button type="button" className="group absolute inset-0" onClick={() => { setPlay(true); track('showreel_play', { video: v.id }); }} aria-label={`Play: ${v.title} (${v.seconds} seconds, no sound)`}>
            <Image src={`/media/video/${v.id}-poster.webp`} alt="" fill sizes="(max-width: 1024px) 100vw, 640px" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-black/50 backdrop-blur transition-transform group-hover:scale-110 md:h-20 md:w-20">
              <svg width="20" height="24" viewBox="0 0 26 30" aria-hidden="true"><path d="M0 0l26 15L0 30z" fill="currentColor" /></svg>
            </span>
            <span className="mono absolute bottom-3 left-3 bg-black/70 px-2 py-1 text-[10px] text-fg">0:{String(v.seconds).padStart(2, '0')} · Motion</span>
          </button>
        )}
      </div>
      <figcaption className="mt-3">
        <span className="block font-medium">{v.title}</span>
        <span className="mt-1 block text-sm text-mute">{v.description}</span>
        <details className="mt-2 text-sm text-mute"><summary className="mono cursor-pointer text-[10px] text-fg/70">Transcript</summary><p className="mt-2">{v.transcript}</p></details>
      </figcaption>
    </figure>
  );
}
