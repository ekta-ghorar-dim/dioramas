'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { monitorVert, monitorFrag, floorFrag } from './shaders';

type M = { label: string; kind: number; col: number; row: number; span: number; tally: number; tex?: string };
// 6 x 3 multiviewer wall: PGM and PVW are 2x2, ten sources around them.
const WALL: M[] = [
  { label: 'PGM', kind: 5, col: 1, row: 0, span: 2, tally: 1, tex: '/media/broadcast/pakistan-community-cup-mlbb-ingame-broadcast.webp' }, { label: 'PVW', kind: 5, col: 3, row: 0, span: 2, tally: 2, tex: '/media/broadcast/mini-mayhem-mlbb-ingame-overlay-sponsor-lower-ad.webp' },
  { label: 'OBS 1', kind: 0, col: 0, row: 0, span: 1, tally: 0 }, { label: 'OBS 2', kind: 1, col: 0, row: 1, span: 1, tally: 0 }, { label: 'OBS 3', kind: 0, col: 0, row: 2, span: 1, tally: 0 },
  { label: 'CAM 1', kind: 1, col: 5, row: 0, span: 1, tally: 0 }, { label: 'CAM 2', kind: 1, col: 5, row: 1, span: 1, tally: 0 }, { label: 'REPLAY', kind: 5, col: 5, row: 2, span: 1, tally: 0, tex: '/media/broadcast/mini-mayhem-mlbb-ingame-overlay-sponsor-squeezeback.webp' },
  { label: 'GFX', kind: 2, col: 1, row: 2, span: 1, tally: 0 }, { label: 'DATA', kind: 2, col: 2, row: 2, span: 1, tally: 0 }, { label: 'CASTER', kind: 1, col: 3, row: 2, span: 1, tally: 0 }, { label: 'AUX', kind: 5, col: 4, row: 2, span: 1, tally: 0, tex: '/media/broadcast/mini-mayhem-semi-final-stream-starting-screen.webp' },
];
const W = 1.6, H = 0.9, GAP = 0.09, R = 11;
const focus: { labels: string[] | null } = { labels: null };

function labelTexture(text: string, bg: string, fg: string) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 48; const x = c.getContext('2d')!;
  x.fillStyle = bg; x.fillRect(0, 0, 256, 48); x.fillStyle = fg; x.font = '600 26px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text.split('').join(' '), 128, 26);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function Monitor({ m, i }: { m: M; i: number }) {
  const w = m.span * W + (m.span - 1) * GAP, h = m.span * H + (m.span - 1) * GAP;
  const cx = m.col + (m.span - 1) / 2 - 2.5, cy = 1 - (m.row + (m.span - 1) / 2);
  const th = (cx * (W + GAP)) / R;
  const mat = useMemo(() => new THREE.ShaderMaterial({ ...{}, vertexShader: monitorVert, fragmentShader: monitorFrag, uniforms: { uTime: { value: 0 }, uKind: { value: m.kind }, uSeed: { value: i * 1.37 + 1 }, uOn: { value: 0 }, uTally: { value: m.tally }, uAspect: { value: w / h }, uDim: { value: 1 }, uLines: { value: 150 * m.span }, uUseTex: { value: 0 }, uTex: { value: null as THREE.Texture | null } } }), []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!m.tex) return; let alive = true;
    new THREE.TextureLoader().load(m.tex, (t) => { if (!alive) return; t.colorSpace = THREE.NoColorSpace; t.anisotropy = 4; mat.uniforms.uTex.value = t; });
    return () => { alive = false; };
  }, [m.tex, mat]);
  const label = useMemo(() => labelTexture(m.label, m.tally === 1 ? '#d81d14' : m.tally === 2 ? '#ff7a1a' : '#0d0b09', m.tally === 2 ? '#0d0b09' : '#eaf0f2'), [m]);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime; mat.uniforms.uTime.value = t;
    mat.uniforms.uOn.value = Math.min(1, Math.max(0, (t - (0.25 + ((i * 7) % 12) * 0.07)) / 0.45));
    const target = !focus.labels || focus.labels.includes(m.label) ? 1 : 0.28; mat.uniforms.uDim.value += (target - mat.uniforms.uDim.value) * 0.08;
  });
  const lw = m.span === 2 ? 0.62 : 0.5;
  return (
    <group position={[R * Math.sin(th), cy * (H + GAP) + 0.75, R - R * Math.cos(th)]} rotation={[0, -th, 0]}>
      <mesh position={[0, 0, -0.05]}><boxGeometry args={[w + 0.07, h + 0.07, 0.08]} /><meshBasicMaterial color="#0d1216" /></mesh>
      <mesh material={mat}><planeGeometry args={[w, h]} /></mesh>
      <mesh position={[0, -h / 2 + 0.075, 0.004]}><planeGeometry args={[lw, lw * 0.1875]} /><meshBasicMaterial map={label} /></mesh>
    </group>
  );
}

function OnAir() {
  const tex = useMemo(() => {
    const c = document.createElement('canvas'); c.width = 512; c.height = 128; const x = c.getContext('2d')!;
    x.fillStyle = '#1a0504'; x.fillRect(0, 0, 512, 128); x.strokeStyle = '#ff3b30'; x.lineWidth = 6; x.strokeRect(6, 6, 500, 116);
    x.fillStyle = '#ff4136'; x.shadowColor = '#ff3b30'; x.shadowBlur = 24; x.font = '800 78px "Arial Narrow", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('ON  AIR', 256, 68);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }, []);
  const glow = useMemo(() => {
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d')!; const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); return new THREE.CanvasTexture(c);
  }, []);
  const sign = useRef<THREE.MeshBasicMaterial>(null), halo = useRef<THREE.MeshBasicMaterial>(null), wash = useRef<THREE.MeshBasicMaterial>(null);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime; const on = t > 1.35 ? 1 : t > 1.2 ? (Math.floor(t * 30) % 2 ? 1 : 0.2) : 0.06;
    if (sign.current) sign.current.opacity = 0.12 + 0.88 * on;
    if (halo.current) halo.current.opacity = 0.34 * on * (0.9 + 0.1 * Math.sin(t * 2));
    if (wash.current) wash.current.opacity = Math.min(1, t / 1.6) * 0.22;
  });
  return (
    <group>
      <mesh position={[0, 0.75, -1.2]}><planeGeometry args={[22, 9]} /><meshBasicMaterial ref={wash} map={glow} color="#7fd0c8" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} /></mesh>
      <group position={[0, 2.62, 0.02]}>
        <mesh position={[0, 0, -0.1]}><planeGeometry args={[5.5, 2.2]} /><meshBasicMaterial ref={halo} map={glow} color="#ff3b30" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} /></mesh>
        <mesh><planeGeometry args={[1.5, 0.375]} /><meshBasicMaterial ref={sign} map={tex} transparent opacity={0.1} /></mesh>
      </group>
    </group>
  );
}

function Desk() {
  const ref = useRef<THREE.InstancedMesh>(null);
  const N = 46 * 4;
  const palette = useMemo(() => ['#171d22', '#171d22', '#171d22', '#171d22', '#1d252b', '#1d252b', '#232c33', '#232c33', '#4a2a10', '#4a1512', '#ff7a1a', '#ff3b30', '#ffb020', '#cfd8dc'].map((c) => new THREE.Color(c)), []);
  useEffect(() => {
    const m = ref.current!; const d = new THREE.Object3D();
    for (let i = 0; i < N; i++) {
      const cx = i % 46, cz = Math.floor(i / 46);
      d.position.set((cx - 22.5) * 0.2 + (cx > 22 ? 0.25 : -0.25), 0.02, (cz - 1.5) * 0.2); d.updateMatrix(); m.setMatrixAt(i, d.matrix);
      m.setColorAt(i, palette[Math.floor(Math.random() * palette.length)]);
    }
    m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true;
  }, [N, palette]);
  const last = useRef(0);
  useFrame(({ clock }) => {
    if (clock.elapsedTime - last.current < 0.35) return; last.current = clock.elapsedTime; const m = ref.current!;
    for (let k = 0; k < 5; k++) m.setColorAt(Math.floor(Math.random() * N), palette[Math.floor(Math.random() * palette.length)]);
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  });
  return (
    <group position={[0, -1.25, 4.6]} rotation={[0.32, 0, 0]}>
      <mesh position={[0, -0.12, 0]}><boxGeometry args={[11.5, 0.22, 1.3]} /><meshBasicMaterial color="#080b0e" /></mesh>
      <mesh position={[0, -0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[11.5, 1.3]} /><meshBasicMaterial color="#0e1317" /></mesh>
      <instancedMesh ref={ref} args={[undefined, undefined, N]}><boxGeometry args={[0.13, 0.035, 0.13]} /><meshBasicMaterial /></instancedMesh>
    </group>
  );
}

function Floor() {
  const mat = useMemo(() => new THREE.ShaderMaterial({ vertexShader: monitorVert, fragmentShader: floorFrag, transparent: true, uniforms: { uTime: { value: 0 }, uOn: { value: 0 } } }), []);
  useFrame(({ clock }) => { mat.uniforms.uOn.value = Math.min(1, clock.elapsedTime / 1.5); });
  return <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.72, 3]} material={mat}><planeGeometry args={[60, 60]} /></mesh>;
}

/** World-space centre and facing normal of a group of wall monitors (used by the Broadcast fly-through). */
function wallTarget(labels: string[]) {
  const ms = WALL.filter((m) => labels.includes(m.label)); if (!ms.length) return null;
  const c = new THREE.Vector3(); let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  ms.forEach((m) => {
    const cx = m.col + (m.span - 1) / 2 - 2.5, cy = 1 - (m.row + (m.span - 1) / 2); const th = (cx * (W + GAP)) / R;
    const p = new THREE.Vector3(R * Math.sin(th), cy * (H + GAP) + 0.75, R - R * Math.cos(th)); c.add(p);
    const hw = (m.span * W) / 2, hh = (m.span * H) / 2; minX = Math.min(minX, cx * (W + GAP) - hw); maxX = Math.max(maxX, cx * (W + GAP) + hw); minY = Math.min(minY, p.y - hh); maxY = Math.max(maxY, p.y + hh);
  });
  c.divideScalar(ms.length); const th = Math.atan2(c.x, R - c.z); const n = new THREE.Vector3(-Math.sin(th), 0, Math.cos(th));
  const size = Math.max((maxX - minX) / 1.6, (maxY - minY)); return { c, n, dist: 2.7 + size * 1.9 };
}
export const STATIONS: Record<string, string[]> = {
  control: ['PGM', 'PVW', 'OBS 1', 'CAM 1', 'GFX', 'AUX'], observer: ['OBS 1', 'OBS 2', 'OBS 3'], replay: ['REPLAY'], caster: ['CASTER'],
  stage: ['AUX'], cams: ['CAM 1', 'CAM 2'], graphics: ['GFX', 'DATA'], pgm: ['PGM'],
};

type Pose = { pos: [number, number, number]; look: [number, number, number] };
const POSES: Record<string, Pose> = {
  home: { pos: [-5.3, 0.25, 12.3], look: [-3.75, 0.72, 0] },
  broadcast: { pos: [-5.2, -0.7, 8.6], look: [-3.4, 1.0, 0] },
  graphics: { pos: [-3.3, 1.1, 7.4], look: [-2.9, 1.15, 0] },
  technology: { pos: [-7.5, 0.4, 9.5], look: [-3.6, 0.7, 0] },
  work: { pos: [-4.6, 2.6, 12.5], look: [-3.3, 0.4, 0] },
  other: { pos: [-5.5, 1.2, 13], look: [-3.6, 0.6, 0] },
};
const poseFor = (p: string) => (p === '/' ? POSES.home : p.startsWith('/broadcast') ? POSES.broadcast : p.startsWith('/graphics') ? POSES.graphics : p.startsWith('/technology') ? POSES.technology : p.startsWith('/work') ? POSES.work : POSES.other);

function Rig() {
  const path = usePathname(); const { camera } = useThree();
  const look = useRef(new THREE.Vector3(...POSES.home.look)); const mouse = useRef({ x: 0, y: 0 });
  const tp = useMemo(() => new THREE.Vector3(), []), tl = useMemo(() => new THREE.Vector3(), []);
  const station = useRef<ReturnType<typeof wallTarget>>(null);
  useEffect(() => {
    const on = (e: Event) => { const id = (e as CustomEvent<string | null>).detail; station.current = id && STATIONS[id] ? wallTarget(STATIONS[id]) : null; focus.labels = id && id !== 'control' && STATIONS[id] ? STATIONS[id] : null; };
    window.addEventListener('aobs:station', on); return () => window.removeEventListener('aobs:station', on);
  }, []);
  useEffect(() => { station.current = null; focus.labels = null; }, [path]);
  useEffect(() => {
    const mv = (e: PointerEvent) => { mouse.current.x = (e.clientX / innerWidth) * 2 - 1; mouse.current.y = (e.clientY / innerHeight) * 2 - 1; };
    window.addEventListener('pointermove', mv, { passive: true }); return () => window.removeEventListener('pointermove', mv);
  }, []);
  useFrame(({ clock }, dt) => {
    const p = poseFor(path); const t = clock.elapsedTime; const sc = Math.min(1.2, window.scrollY / window.innerHeight);
    const boot = 1 - Math.pow(1 - Math.min(1, t / 2.4), 3);
    const st = station.current;
    if (st) { const tan = new THREE.Vector3(st.n.z, 0, -st.n.x); const k = window.innerWidth >= 1024 ? -st.dist * 0.34 : 0; tp.copy(st.c).addScaledVector(st.n, st.dist).addScaledVector(tan, k); tp.x += mouse.current.x * 0.15; tp.y -= mouse.current.y * 0.1; tl.copy(st.c).addScaledVector(tan, k); }
    else {
      tp.set(p.pos[0] + mouse.current.x * 0.45 + sc * 1.6, p.pos[1] - mouse.current.y * 0.25 + sc * 0.5, p.pos[2] - (1 - boot) * 2.6 - sc * 3.2);
      tl.set(p.look[0] + sc * 1.8, p.look[1] + sc * 0.3, p.look[2]);
    }
    const k = t < 0.1 ? 1 : 1 - Math.exp(-Math.min(dt, 0.05) * (station.current ? 3.2 : 2.6));
    camera.position.lerp(tp, k); look.current.lerp(tl, k); camera.lookAt(look.current);
  });
  return null;
}

export default function StageCanvas({ onReady, active }: { onReady: () => void; active: boolean }) {
  return (
    <Canvas flat frameloop={active ? 'always' : 'never'} dpr={[1, 1.5]} camera={{ fov: 34, near: 0.1, far: 80, position: [-4.4, 0.35, 7.8] }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }} onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); requestAnimationFrame(onReady); }}>
      <Rig />
      <OnAir />
      {WALL.map((m, i) => <Monitor key={m.label} m={m} i={i} />)}
      <Desk />
      <Floor />
    </Canvas>
  );
}
