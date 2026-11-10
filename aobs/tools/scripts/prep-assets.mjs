// Usage: node scripts/prep-assets.mjs <assetsDir> <outPublicDir>
import sharp from 'sharp'; import potrace from 'potrace'; import fs from 'fs'; import path from 'path';
const [,, A, OUT] = process.argv;
fs.mkdirSync(path.join(OUT,'logos'),{recursive:true}); fs.mkdirSync(path.join(OUT,'brand'),{recursive:true});
const slug=s=>s.toLowerCase().replace(/&/g,'and').replace(/['’]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
// AOBS logo -> traced SVG (currentColor)
const png = await sharp(path.join(A,'aobs-logo-black.webp')).flatten({background:'#fff'}).trim().resize(1400).png().toBuffer();
const svg = await new Promise((res,rej)=>potrace.trace(png,{threshold:128,turdSize:8,optTolerance:0.3,color:'currentColor'},(e,s)=>e?rej(e):res(s)));
fs.writeFileSync(path.join(OUT,'brand','aobs-logo.svg'),svg);
const m=await sharp(png).metadata(); console.log('logo',m.width,m.height,svg.length);
await sharp(path.join(A,'aobs-logo-white.webp')).trim().resize(512).png().toFile(path.join(OUT,'brand','aobs-logo-white.png'));
const out=[];
for(const f of fs.readdirSync(path.join(A,'tournament-logos')).sort()){
  if(!f.endsWith('.png')||f.includes('(black)'))continue;
  const base=f.replace(/\.png$/,''); const [game,...rest]=base.split(' - '); let name=rest.join(' - ').replace(' (white)','').replace(' (LAN Event)','');
  const s=slug(name); const file=`${s}-tournament-logo.webp`;
  const img=sharp(path.join(A,'tournament-logos',f)).trim().resize({width:640,height:640,fit:'inside',withoutEnlargement:true});
  const info=await img.webp({quality:86}).toFile(path.join(OUT,'logos',file));
  out.push({slug:s,name,game,file,w:info.width,h:info.height,src:f});
}
console.log(JSON.stringify(out,null,1));
