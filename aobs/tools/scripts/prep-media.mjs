// Usage: node scripts/prep-media.mjs <srcDir> <publicDir>  — optimise AOBS portfolio media (crops remove any faces).
import sharp from 'sharp'; import fs from 'fs'; import path from 'path'; import { execFileSync } from 'child_process';
const [,, SRC, PUB] = process.argv; const B = path.join(PUB, 'media/broadcast'), K = path.join(PUB, 'media/key-visuals'), V = path.join(PUB, 'media/video');
[B, K, V].forEach((d) => fs.mkdirSync(d, { recursive: true }));
const src = (f) => path.join(SRC, f);
const frames = [
  ['ingame (Sponsor 2).png', 'mini-mayhem-mlbb-ingame-overlay-sponsor-squeezeback.webp'],
  ['ingame with Ad.png', 'mini-mayhem-mlbb-ingame-overlay-sponsor-lower-ad.webp'],
  ['Sponsor Template.png', 'mini-mayhem-semi-final-stream-starting-screen.webp'],
  ['Screenshot_2025-02-07-02-59-10-81_f9ee0578fe1cc94de7482bd41accb329.jpg', 'pakistan-community-cup-mlbb-ingame-broadcast.webp', { left: 160, top: 0, width: 1280, height: 720 }],
  ['Screenshot_2025-02-07-02-57-19-20_f9ee0578fe1cc94de7482bd41accb329.jpg', 'pakistan-community-cup-grand-final-stream-starting.webp', { left: 160, top: 0, width: 1280, height: 720 }],
  // Draft screen: crop to the pick/ban board only; the caster photo panel above it is removed (no faces rule).
  ['IMG_20250207_030049.jpg', 'pakistan-community-cup-grand-final-mlbb-draft-ban-phase.webp', { left: 0, top: 378, width: 1294, height: 325 }],
];
for (const [f, out, crop] of frames) {
  let img = sharp(src(f)); if (crop) img = img.extract(crop);
  const i = await img.resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(B, out)); console.log(out, i.width, i.height, i.size);
}
const kv = [
  ['PCC_KV.jpg', 'pakistan-community-cup-key-visual.webp'], ['Prizepool_pcc.png', 'pakistan-community-cup-prize-pool-poster.webp'],
  ['Opening_soon.jpg', 'pakistan-community-cup-registration-opening-soon.webp'], ['reg now banner.jpg', 'pakistan-community-cup-registration-now.webp'],
  ['08 slots.jpg', 'pakistan-community-cup-slots-left-poster.webp'], ['IMG-20241229-WA0009.jpg', 'pakistan-community-cup-we-are-coming-teaser.webp'],
  ['IMG-20250113-WA0000.jpg', 'mlbb-womens-war-coming-soon-key-visual.webp'], ['FB_IMG_1738874261819.jpg', 'aobs-halloween-fest-registration-poster.webp'],
  ['Cup raw.png', 'pakistan-community-cup-trophy-render.webp'],
];
for (const [f, out] of kv) { const i = await sharp(src(f)).resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(K, out)); console.log(out, i.width, i.height, i.size); }
const vids = [['VID-20241229-WA0011.mp4', 'mlbb-nepal-tournament-teaser'], ['VID-20241229-WA0012.mp4', 'diu-winter-fest-mlbb-teaser']];
for (const [f, out] of vids) {
  const o = path.join(V, out);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', src(f), '-an', '-vf', 'scale=1280:-2', '-c:v', 'libx264', '-preset', 'slow', '-crf', '27', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', o + '.mp4']);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', src(f), '-an', '-vf', 'scale=1280:-2', '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '38', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '4', o + '.webm']);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', out.startsWith('mlbb-nepal') ? '6' : '20', '-i', src(f), '-frames:v', '1', '-vf', 'scale=1280:-2', o + '-poster.jpg']);
  await sharp(o + '-poster.jpg').webp({ quality: 78 }).toFile(o + '-poster.webp'); fs.unlinkSync(o + '-poster.jpg');
  console.log(out, ['.mp4', '.webm', '-poster.webp'].map((e) => (fs.statSync(o + e).size / 1024).toFixed(0) + 'KB').join(' '));
}
