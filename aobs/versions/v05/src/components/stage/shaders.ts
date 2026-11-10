export const monitorVert = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

/** One fragment shader draws every monitor "feed" procedurally (no textures, no video). uKind: 0 map, 1 grid, 2 wave, 3 bars, 4 programme (map + scorebug + lower third). */
export const monitorFrag = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime, uKind, uSeed, uOn, uTally, uAspect, uDim, uLines, uUseTex;
uniform sampler2D uTex;
const vec3 BLUE = vec3(0.35, 0.78, 1.0), RED = vec3(1.0, 0.35, 0.31), LIME = vec3(0.22, 0.88, 1.0);
float rs(float hi, float lo, float x) { return 1.0 - smoothstep(lo, hi, x); }
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float box(vec2 uv, vec2 a, vec2 b) { vec2 s = step(a, uv) * step(uv, b); return s.x * s.y; }

vec3 feedMap(vec2 uv, float t) {
  vec2 p = (uv - 0.5) * vec2(uAspect, 1.0);
  vec3 col = vec3(0.025, 0.04, 0.055) + 0.03 * (1.0 - length(p));
  float S = 0.36, sq = max(abs(p.x), abs(p.y));
  float lanes = rs(0.022, 0.006, abs(sq - S)) + rs(0.022, 0.006, abs(p.x - p.y) * 0.707) * step(sq, S);
  col += vec3(0.13, 0.16, 0.19) * min(lanes, 1.0);
  col += BLUE * box(p, vec2(-S - 0.03), vec2(-S + 0.03)) + RED * box(p, vec2(S - 0.03), vec2(S + 0.03));
  for (int i = 0; i < 10; i++) {
    float fi = float(i), team = step(4.5, fi);
    float ph = t * (0.25 + hash(vec2(fi, uSeed)) * 0.3) + hash(vec2(fi + 20.0, uSeed)) * 6.28;
    float s = clamp(0.5 + 0.34 * sin(ph) + (team > 0.5 ? 0.1 : -0.1), 0.0, 1.0);
    float lane = mod(fi, 3.0); vec2 q;
    if (lane < 0.5) q = mix(vec2(-S), vec2(S), s);
    else if (lane < 1.5) q = s < 0.5 ? mix(vec2(-S, -S), vec2(-S, S), s * 2.0) : mix(vec2(-S, S), vec2(S, S), (s - 0.5) * 2.0);
    else q = s < 0.5 ? mix(vec2(-S, -S), vec2(S, -S), s * 2.0) : mix(vec2(S, -S), vec2(S, S), (s - 0.5) * 2.0);
    q += 0.012 * vec2(sin(t * 2.0 + fi), cos(t * 1.7 + fi * 2.0));
    float d = length(p - q); vec3 c = team > 0.5 ? RED : BLUE;
    col += c * rs(0.03, 0.014, d) + c * 0.3 * rs(0.11, 0.0, d);
  }
  float f = fract(t * 0.3 + uSeed); vec2 fc = 0.22 * vec2(sin(floor(t * 0.3 + uSeed) * 2.1 + uSeed), cos(floor(t * 0.3 + uSeed) * 1.3));
  col += LIME * rs(0.012, 0.0, abs(length(p - fc) - f * 0.16)) * (1.0 - f);
  return col;
}
vec3 feedGrid(vec2 uv, float t) {
  vec3 col = vec3(0.015, 0.025, 0.045); float hz = 0.56;
  if (uv.y < hz) {
    float z = 1.0 / (hz - uv.y + 0.03), x = (uv.x - 0.5 + 0.08 * sin(t * 0.3 + uSeed)) * z;
    float gx = abs(fract(x * 1.1) - 0.5), gz = abs(fract(z * 0.5 + t * 0.9) - 0.5);
    float line = rs(0.07, 0.0, gx) + rs(0.09, 0.0, gz);
    col += vec3(0.16, 0.5, 0.8) * min(line, 1.0) * clamp((hz - uv.y) * 2.6, 0.0, 1.0);
    for (int i = 0; i < 4; i++) { float fi = float(i); vec2 c = vec2(0.2 + 0.2 * fi + 0.06 * sin(t * (0.6 + hash(vec2(fi, uSeed))) + fi), 0.16 + 0.26 * hash(vec2(fi + 3.0, uSeed)));
      col = mix(col, mod(fi, 2.0) < 0.5 ? LIME : RED, box(uv, c - vec2(0.018, 0.0), c + vec2(0.018, 0.1))); }
  } else col += vec3(0.04, 0.09, 0.16) * (1.0 - (uv.y - hz) * 2.2) + 0.12 * vec3(0.3, 0.6, 1.0) * rs(0.02, 0.0, uv.y - hz);
  return col;
}
vec3 feedWave(vec2 uv, float t) {
  vec3 col = vec3(0.02, 0.03, 0.04) + 0.05 * step(0.97, fract(uv.y * 6.0));
  float a = 0.5 + 0.2 * sin(uv.x * 14.0 + t * 2.0 + uSeed) * sin(uv.x * 3.0 + t * 0.7) * (0.6 + 0.4 * sin(t * 0.9));
  float b = 0.5 + 0.16 * sin(uv.x * 9.0 - t * 1.4 + uSeed * 2.0) * sin(uv.x * 2.0 + t * 0.5);
  col += LIME * rs(0.014, 0.0, abs(uv.y - a)) + BLUE * 0.7 * rs(0.012, 0.0, abs(uv.y - b));
  return col;
}
vec3 feedBars(vec2 uv) {
  if (uv.y < 0.26) return mix(vec3(0.03), vec3(0.85), box(uv, vec2(0.16, 0.05), vec2(0.3, 0.2)));
  float i = floor(uv.x * 7.0);
  vec3 c = i < 1.0 ? vec3(0.75) : i < 2.0 ? vec3(0.75, 0.75, 0.0) : i < 3.0 ? vec3(0.0, 0.75, 0.75) : i < 4.0 ? vec3(0.0, 0.75, 0.0) : i < 5.0 ? vec3(0.75, 0.0, 0.75) : i < 6.0 ? vec3(0.75, 0.0, 0.0) : vec3(0.0, 0.0, 0.75);
  return c * 0.6;
}
void main() {
  vec2 uv = vUv; float t = uTime; vec3 col;
  if (uKind < 0.5) col = feedMap(uv, t); else if (uKind < 1.5) col = feedGrid(uv, t); else if (uKind < 2.5) col = feedWave(uv, t); else if (uKind < 3.5) col = feedBars(uv);
  else if (uKind > 4.5) { col = pow(texture2D(uTex, uv).rgb, vec3(0.92)) * 0.95; }
  else {
    col = feedMap(uv, t);
    col = mix(col, BLUE, box(uv, vec2(0.33, 0.86), vec2(0.41, 0.94)));
    col = mix(col, vec3(0.05, 0.07, 0.09), box(uv, vec2(0.41, 0.86), vec2(0.59, 0.94)));
    col = mix(col, RED, box(uv, vec2(0.59, 0.86), vec2(0.67, 0.94)));
    col = mix(col, LIME, box(uv, vec2(0.455, 0.885), vec2(0.545, 0.915)) * step(0.5, fract(uv.x * 40.0 + 0.2)));
    float lt = smoothstep(0.0, 1.0, clamp(sin(t * 0.35) * 3.0 + 1.5, 0.0, 1.0));
    col = mix(col, LIME, box(uv, vec2(0.05, 0.1), vec2(0.05 + 0.012, 0.2)) * lt);
    col = mix(col, vec3(0.92), box(uv, vec2(0.066, 0.145), vec2(0.066 + 0.3 * lt, 0.2)));
    col = mix(col, vec3(0.06, 0.08, 0.1), box(uv, vec2(0.066, 0.1), vec2(0.066 + 0.22 * lt, 0.14)));
  }
  col *= 1.3; col *= 0.9 + 0.1 * sin(uv.y * uLines);
  col += (hash(uv * 400.0 + t) - 0.5) * 0.05;
  vec2 v = uv - 0.5; col *= 1.0 - dot(v, v) * 0.9;
  float roll = rs(0.12, 0.0, abs(fract(uv.y - t * 0.12 + uSeed * 0.37) - 0.5) - 0.38); col += 0.03 * roll;
  // boot flicker, then steady
  float on = uOn * (1.0 + (1.0 - uOn) * 2.5 * step(0.5, hash(vec2(floor(t * 40.0), uSeed))));
  float lineOn = 1.0 - smoothstep(0.5 * uOn, 0.5 * uOn + 0.004, abs(uv.y - 0.5));
  col = mix(vec3(0.012, 0.016, 0.02) + 0.02 * uv.y, col * on, lineOn * step(0.001, uOn));
  float bw = 0.014, bx = bw / uAspect;
  float edge = 1.0 - box(uv, vec2(bx, bw), vec2(1.0 - bx, 1.0 - bw));
  if (uTally > 0.5) col = mix(col, uTally < 1.5 ? vec3(1.0, 0.16, 0.12) : LIME, edge * uOn);
  gl_FragColor = vec4(col * uDim, 1.0);
}`;

export const floorFrag = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime, uOn;
float rs(float hi, float lo, float x) { return 1.0 - smoothstep(lo, hi, x); }
void main() {
  vec2 p = (vUv - 0.5) * 60.0;
  vec2 g = abs(fract(p * 0.5) - 0.5);
  float line = rs(0.03, 0.0, min(g.x, g.y));
  float d = length(p - vec2(0.0, -2.0));
  float fade = rs(26.0, 2.0, d);
  vec3 glow = mix(vec3(0.22, 0.88, 1.0), vec3(0.35, 0.78, 1.0), 0.6) * rs(12.0, 0.0, length((p - vec2(0.0, -1.0)) * vec2(0.45, 1.0))) * 0.16 * uOn;
  vec3 col = vec3(0.02, 0.028, 0.036) + line * vec3(0.1, 0.13, 0.16) * fade + glow;
  gl_FragColor = vec4(col, fade);
}`;
