'use client';
import { useState } from 'react';
import { track } from '@/lib/analytics';
import { Timecode } from './Timecode';
import { Rich } from './Rich';
import { site } from '@/lib/content';

/** Lightweight YouTube facade: the player only loads on click. Shows a marked slate until a real showreel id is configured. */
export function Showreel() {
  const id = site.showreelYoutubeId as string | null;
  const [playing, setPlaying] = useState(false);
  return (
    <section className="section" aria-labelledby="reel-title">
      <div className="wrap">
        <div className="reveal mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Showreel</p>
            <h2 id="reel-title" className="display t-2 mt-4">Roll the tape.</h2>
          </div>
          <p className="max-w-sm text-mute">The fastest way to judge a broadcast crew is to watch the output. Here is ours.</p>
        </div>
        <div className="reveal brackets relative aspect-video overflow-hidden border border-line bg-black">
          {playing && id ? (
            <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title="AOBS esports broadcast showreel" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          ) : (
            <div className="slate scanlines absolute inset-0 grid place-items-center">
              <div className="leader" aria-hidden="true"><i /><b /></div>
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-6" aria-hidden="true">
                <span className="mono text-fg/70">AOBS · Showreel · 16:9</span>
                <Timecode className="text-xs text-fg/70" />
              </div>
              <div className="relative z-10 flex flex-col items-center gap-5 text-center">
                <button type="button" disabled={!id} onClick={() => { setPlaying(true); track('showreel_play'); }} className="play grid h-24 w-24 place-items-center rounded-full border border-fg/40 bg-ink/60 backdrop-blur transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 md:h-28 md:w-28" aria-label={id ? 'Play the AOBS showreel' : 'Showreel not yet available'}>
                  <svg width="26" height="30" viewBox="0 0 26 30" aria-hidden="true"><path d="M0 0l26 15L0 30z" fill="currentColor" /></svg>
                </button>
                {!id ? <p className="max-w-md px-6 text-sm"><Rich text="{{TODO: 60-90 second showreel cut from AOBS broadcast footage (YouTube ID)}}" /></p> : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
