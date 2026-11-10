'use client';
import dynamic from 'next/dynamic';
import { LazyMount } from './LazyMount';

const FailoverDemoD = dynamic(() => import('./FailoverDemo').then((m) => m.FailoverDemo), { ssr: false });
const LiveDataD = dynamic(() => import('./LiveData').then((m) => m.LiveData), { ssr: false });
const ProgramMonitorD = dynamic(() => import('./broadcast/ProgramMonitor').then((m) => m.ProgramMonitor), { ssr: false });

/** Code-split, viewport-mounted versions of the interactive demos. */
export const LazyFailover = () => <LazyMount minHeight={560} label="Failover simulation loading"><FailoverDemoD /></LazyMount>;
export const LazyLiveData = () => <LazyMount minHeight={260} label="Live data demo loading"><LiveDataD /></LazyMount>;
export const LazyProgramMonitor = () => <LazyMount minHeight="calc(min(100vw, 1360px) * 0.5625)" label="Overlay demo loading"><ProgramMonitorD /></LazyMount>;
