import Link from 'next/link';
import { OnAir } from './broadcast/OnAir';
import { TeaserVideo } from './broadcast/TeaserVideo';
import { Rich } from './Rich';
import { videos } from '@/lib/media';
import { site } from '@/lib/content';

/** Home: the proof section. Real AOBS programme frames on a switcher-style monitor, plus motion teasers. */
export function RealOutput() {
  return (
    <section className="section" aria-labelledby="out-title">
      <div className="wrap">
        <div className="reveal grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7"><p className="eyebrow">Programme output</p><h2 id="out-title" data-decode className="display t-2 mt-4">This is what goes to air.</h2></div>
          <p className="lede md:col-span-5 md:pt-10">Real frames from AOBS MLBB broadcasts: in-game HUDs, sponsor squeeze-backs, draft boards and holding screens. Pick a source or let the director cut.</p>
        </div>
        <div className="reveal mt-12"><OnAir /></div>
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {videos.map((v) => <div key={v.id} className="reveal"><TeaserVideo v={v} /></div>)}
        </div>
        <div className="reveal mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <Link href="/graphics-data" className="link-u mono text-fg">Explore graphics &amp; data →</Link>
          {!site.showreelYoutubeId ? <span className="text-sm"><Rich text="{{TODO: full 60-90 second showreel (YouTube ID)}}" /></span> : null}
        </div>
      </div>
    </section>
  );
}
