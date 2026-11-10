'use client';
import { useEffect, useRef, useState } from 'react';
import { Feed } from './Feed';
import { track } from '@/lib/analytics';

type State = 'live' | 'failing' | 'failover';
const stamp = () => new Date().toLocaleTimeString('en-GB', { hour12: false }) + '.' + String(new Date().getMilliseconds()).padStart(3, '0');

function Meter({ dead }: { dead: boolean }) {
  return (
    <span className="flex h-6 items-end gap-[3px]" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => <i key={i} className={`meter-bar ${dead ? 'dead' : ''}`} style={{ animationDelay: `${(i * 137) % 900}ms` }} />)}
    </span>
  );
}

/** Backup Streamer simulation: kill the primary, watch the backup take programme, the viewer output never goes dark. */
export function FailoverDemo() {
  const [state, setState] = useState<State>('live');
  const [log, setLog] = useState<string[]>(['--:--:--.---  PRIMARY on air · BACKUP standing by']);
  const timers = useRef<number[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const add = (l: string) => setLog((p) => [...p, `${stamp()}  ${l}`].slice(-5));

  const fail = () => {
    if (state !== 'live') return;
    track('failover_sim'); setState('failing'); add('PRIMARY signal lost');
    timers.current.push(window.setTimeout(() => { setState('failover'); add('BACKUP took programme · stream stayed live'); }, 420));
  };
  const restore = () => { setState('live'); add('PRIMARY restored · BACKUP standing by'); };
  const down = state !== 'live';

  return (
    <div className="failover grid gap-4 lg:grid-cols-12" data-state={state}>
      <div className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
        <div className={`panel p-5 transition-colors ${down ? '!border-air/70' : ''}`}>
          <div className="flex items-center justify-between">
            <span className="mono text-fg">Primary encoder</span>
            <span className={`tally ${down ? '' : 'live'}`}><span className="dot" />{down ? 'Signal lost' : 'On air'}</span>
          </div>
          <div className="mt-5 flex items-end justify-between"><Meter dead={down} /><span className={`font-mono text-sm tabular-nums ${down ? 'text-air-text' : 'text-fg'}`}>{down ? 'NO SIGNAL' : 'SIGNAL OK'}</span></div>
        </div>
        <div className={`panel p-5 transition-colors ${state === 'failover' ? '!border-accent' : ''}`}>
          <div className="flex items-center justify-between">
            <span className="mono text-fg">Backup Streamer</span>
            <span className={`tally ${state === 'failover' ? 'live' : 'ok'}`}><span className="dot" />{state === 'failover' ? 'On air' : 'Standby'}</span>
          </div>
          <div className="mt-5 flex items-end justify-between"><Meter dead={false} /><span className="font-mono text-sm tabular-nums text-fg">SIGNAL OK</span></div>
        </div>
        <div className="flex flex-wrap items-start gap-3 sm:col-span-2 lg:col-span-1">
          <button type="button" onClick={fail} disabled={down} className="btn !border-air !text-white bg-[#c8140c] hover:!bg-air disabled:cursor-not-allowed disabled:opacity-40">Simulate failure</button>
          <button type="button" onClick={restore} disabled={!down} className="btn disabled:cursor-not-allowed disabled:opacity-40">Restore primary</button>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="brackets relative overflow-hidden border border-line bg-black">
          <div className="out relative aspect-video scanlines"><Feed kind="map" seed={5} /></div>
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
            <span className="tally live"><span className="dot" />Live</span>
            <span className="mono bg-black/70 px-2 py-1 text-fg">Viewer output · {state === 'failover' ? 'via backup' : 'via primary'}</span>
          </div>
          <div className={`absolute bottom-3 left-3 right-3 flex items-center gap-3 bg-accent px-4 py-3 text-ink transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${state === 'failover' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10.5l4.5 4.5L17 5.5" fill="none" stroke="currentColor" strokeWidth="2.5" /></svg>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.12em]">Stream stayed live · viewers never saw an offline screen</span>
          </div>
        </div>
        <div className="mt-4 border border-line bg-panel p-4" role="log" aria-live="polite" aria-label="Failover event log">
          {log.map((l, i) => <p key={i} className={`font-mono text-[11px] leading-6 ${i === log.length - 1 ? 'text-fg' : 'text-mute'}`}>{l}</p>)}
        </div>
        <p className="mono mt-3 text-[10px] text-mute">Interactive simulation of the failover behaviour, not a recording of a live incident.</p>
      </div>
    </div>
  );
}
