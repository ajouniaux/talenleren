// In vijf zinnen — les illustrations : des décors en SVG (dégradés, lumière, perspective) peuplés d'emoji 3D Fluent
// (Microsoft, licence MIT, paquet @lobehub/fluent-emoji-3d). Rendu en JPEG dans img/vijfzinnen/.
// usage : node vijf_art.js [id…]   (sans argument : les 24 décors)
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const DATA = require('unicode-emoji-json/data-by-emoji.json');

const W = 1600; const H = 1000;
const OUT = path.join(__dirname, 'img', 'vijfzinnen');
const DIR = path.join(path.dirname(require.resolve('@lobehub/fluent-emoji-3d/package.json')), 'assets');
const SLUG = {};
for (const [e, v] of Object.entries(DATA)) SLUG[v.slug.replace(/_/g, '-')] = [...e].map((c) => c.codePointAt(0).toString(16));
const emojiFile = (name) => {
  const cps = SLUG[name];
  if (!cps) throw new Error(`emoji inconnu : ${name}`);
  for (const c of [cps.join('-'), cps.filter((x) => x !== 'fe0f').join('-'), `${cps.join('-')}-fe0f`]) {
    const f = path.join(DIR, `${c}.webp`);
    if (fs.existsSync(f)) return f;
  }
  throw new Error(`pas d'emoji 3D pour ${name}`);
};

// ------------------------------------------------------------------ la boîte à outils
function kit() {
  const defs = []; const used = new Set(); let n = 0;
  const id = (p) => `${p}${(n += 1)}`;
  const stops = (s) => s.map(([o, c, a = 1]) => `<stop offset="${o}" stop-color="#${c}" stop-opacity="${a}"/>`).join('');
  const lin = (s, x1 = 0, y1 = 0, x2 = 0, y2 = 1) => { const i = id('l'); defs.push(`<linearGradient id="${i}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops(s)}</linearGradient>`); return `url(#${i})`; };
  const rad = (s, cx = 0.5, cy = 0.5, r = 0.5) => { const i = id('r'); defs.push(`<radialGradient id="${i}" cx="${cx}" cy="${cy}" r="${r}">${stops(s)}</radialGradient>`); return `url(#${i})`; };
  const blurs = {};
  const blur = (sd) => { if (!blurs[sd]) { const i = id('b'); defs.push(`<filter id="${i}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${sd}"/></filter>`); blurs[sd] = i; } return `url(#${blurs[sd]})`; };
  const clip = (inner) => { const i = id('c'); defs.push(`<clipPath id="${i}">${inner}</clipPath>`); return `url(#${i})`; };
  const k = {
    W, H, lin, rad, blur, clip,
    R: (x, y, w, h, fill, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx || 0}" fill="${fill}"${o.op != null ? ` opacity="${o.op}"` : ''}${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw || 2}"` : ''}${o.f ? ` filter="${o.f}"` : ''}${o.tr ? ` transform="${o.tr}"` : ''}/>`,
    C: (cx, cy, r, fill, o = {}) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"${o.op != null ? ` opacity="${o.op}"` : ''}${o.f ? ` filter="${o.f}"` : ''}${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw || 2}"` : ''}/>`,
    El: (cx, cy, rx, ry, fill, o = {}) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}"${o.op != null ? ` opacity="${o.op}"` : ''}${o.f ? ` filter="${o.f}"` : ''}/>`,
    P: (d, fill, o = {}) => `<path d="${d}" fill="${fill}"${o.op != null ? ` opacity="${o.op}"` : ''}${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw || 2}" stroke-linecap="round" stroke-linejoin="round"` : ''}${o.f ? ` filter="${o.f}"` : ''}/>`,
    L: (x1, y1, x2, y2, c, sw = 2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${sw}" stroke-linecap="round"${o.op != null ? ` opacity="${o.op}"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`,
    T: (x, y, s, size, fill, o = {}) => `<text x="${x}" y="${y}" font-family="Carlito, Calibri, sans-serif" font-weight="${o.w || 700}" font-size="${size}" fill="${fill}" text-anchor="${o.a || 'middle'}"${o.ls ? ` letter-spacing="${o.ls}"` : ''}${o.op != null ? ` opacity="${o.op}"` : ''}>${s}</text>`,
    G: (inner, tr) => `<g${tr ? ` transform="${tr}"` : ''}>${inner}</g>`,
    // un emoji 3D posé, avec son ombre douce
    E: (name, x, y, s, o = {}) => {
      used.add(name);
      const sh = o.shadow === false ? '' : `<ellipse cx="${x + s / 2 + (o.sx || 0)}" cy="${y + s * (o.sy || 0.93)}" rx="${s * (o.sw || 0.36)}" ry="${s * 0.075}" fill="#1B2430" opacity="${o.so ?? 0.28}" filter="${blur(Math.max(4, s / 28))}"/>`;
      const tr = o.flip ? ` transform="translate(${2 * x + s} 0) scale(-1 1)"` : (o.rot ? ` transform="rotate(${o.rot} ${x + s / 2} ${y + s / 2})"` : '');
      return `${sh}<image href="@@${name}@@" x="${x}" y="${y}" width="${s}" height="${s}"${o.op != null ? ` opacity="${o.op}"` : ''}${tr}/>`;
    },
    used, defs,
  };
  // ------------------------------------------------ éléments composés
  k.sky = (c1, c2, h = H, c3) => k.R(0, 0, W, h, lin(c3 ? [[0, c1], [0.6, c2], [1, c3]] : [[0, c1], [1, c2]]));
  k.glow = (cx, cy, r, c, a = 0.55) => k.C(cx, cy, r, rad([[0, c, a], [0.45, c, a * 0.35], [1, c, 0]]));
  k.cloud = (cx, cy, s, o = {}) => {
    const g = lin([[0, 'FFFFFF', o.a ?? 0.96], [1, o.under || 'E3ECF6', o.a ?? 0.96]]);
    const p = [[0, 0, 0.62], [-0.55, 0.12, 0.42], [0.55, 0.14, 0.45], [-0.25, -0.22, 0.48], [0.25, -0.18, 0.5]];
    return `<g${o.blur ? ` filter="${blur(o.blur)}"` : ''}>${k.El(cx + s * 0.05, cy + s * 0.42, s * 0.95, s * 0.12, '#7A8CA6', { op: 0.12, f: blur(10) })}${p.map(([dx, dy, r]) => k.C(cx + dx * s, cy + dy * s, r * s, g)).join('')}${k.R(cx - s * 0.95, cy + s * 0.1, s * 1.9, s * 0.42, g, { rx: s * 0.21 })}</g>`;
  };
  k.ground = (y, c1, c2) => k.R(0, y, W, H - y, lin([[0, c1], [1, c2]]));
  // pavés en perspective
  k.cobbles = (y0, c, a = 0.22) => {
    let out = ''; let y = y0; let r = 0;
    while (y < H) {
      const h = 9 + r * 5; const w = h * 2.4; const off = (r % 2) * w * 0.5;
      for (let x = -w + off; x < W; x += w + h * 0.35) out += k.R(x, y, w, h, `#${c}`, { rx: h * 0.4, op: a * (0.6 + 0.4 * ((x * 7 + r * 13) % 5) / 5) });
      y += h + 3 + r * 0.6; r += 1;
    }
    return `<g clip-path="${clip(`<rect x="0" y="${y0}" width="${W}" height="${H - y0}"/>`)}">${out}</g>`;
  };
  // parquet en perspective
  k.planks = (y0, c1, c2, line = '9C7553') => {
    let out = k.R(0, y0, W, H - y0, lin([[0, c1], [1, c2]]));
    const vx = W / 2; const vy = y0 - 520;
    for (let i = -24; i <= 24; i += 1) { const bx = W / 2 + i * 120; out += `<line x1="${vx + (bx - vx) * ((y0 - vy) / (H - vy))}" y1="${y0}" x2="${bx}" y2="${H}" stroke="#${line}" stroke-width="2" opacity="0.28"/>`; }
    for (let j = 1; j < 7; j += 1) { const yy = y0 + (H - y0) * (j * j) / 49; out += `<line x1="0" y1="${yy}" x2="${W}" y2="${yy}" stroke="#${line}" stroke-width="1.5" opacity="0.16"/>`; }
    return out + k.R(0, y0, W, 26, lin([[0, '000000', 0.16], [1, '000000', 0]]));
  };
  k.wall = (c1, c2, y = H) => k.R(0, 0, W, y, lin([[0, c1], [1, c2]]));
  k.baseboard = (y, c = 'FFFFFF') => k.R(0, y - 18, W, 18, `#${c}`) + k.R(0, y - 18, W, 4, '#000000', { op: 0.06 });
  // fenêtre : vue 'sky' | 'city' | 'trees' | 'night'
  k.win = (x, y, w, h, o = {}) => {
    const view = o.view || 'sky';
    const sky = view === 'night' ? lin([[0, '1B2A4E'], [1, '3E4F86']]) : lin([[0, o.s1 || '8EC5F0'], [1, o.s2 || 'DCEFFC']]);
    let v = k.R(x, y, w, h, sky);
    if (view === 'city' || view === 'night') {
      const cs = view === 'night' ? ['2A3A63', '33456F', '24345A'] : ['B8CBE0', 'A6BCD6', 'C7D6E7'];
      let bx = x - 10; let i = 0;
      while (bx < x + w) { const bw = 40 + ((i * 37) % 50); const bh = h * (0.25 + ((i * 53) % 40) / 100); v += k.R(bx, y + h - bh, bw, bh, `#${cs[i % 3]}`); if (view === 'night') for (let yy = y + h - bh + 12; yy < y + h - 10; yy += 22) for (let xx = bx + 8; xx < bx + bw - 8; xx += 16) if ((xx + yy + i) % 3 === 0) v += k.R(xx, yy, 7, 9, '#FFD98A', { op: 0.85 }); bx += bw + 4; i += 1; }
    }
    if (view === 'night') { v += k.C(x + w * 0.75, y + h * 0.22, Math.min(w, h) * 0.08, '#FFF4C8'); for (let i = 0; i < 9; i += 1) v += k.C(x + ((i * 97) % w), y + ((i * 61) % (h * 0.5)), 2, '#FFFFFF', { op: 0.8 }); }
    if (view === 'trees') for (let i = 0; i < 4; i += 1) v += k.C(x + w * (0.15 + i * 0.25), y + h * 0.95, h * 0.32, `#${['7DBE6A', '6AAE5A', '86C474', '5FA352'][i]}`);
    const inner = `<g clip-path="${clip(`<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`)}">${v}${k.P(`M${x + w * 0.1} ${y + h} L${x + w * 0.55} ${y} L${x + w * 0.75} ${y} L${x + w * 0.3} ${y + h}Z`, '#FFFFFF', { op: 0.18 })}</g>`;
    const fr = `#${o.frame || 'FFFFFF'}`; const t = o.t || 14;
    return k.R(x - t + 8, y - t + 12, w + 2 * t, h + 2 * t, '#000000', { op: 0.12, f: blur(10) }) + k.R(x - t, y - t, w + 2 * t, h + 2 * t, fr, { rx: 4 }) + inner
      + k.R(x + w / 2 - t / 3, y, (2 * t) / 3, h, fr) + k.R(x, y + h * (o.split || 0.45) - t / 3, w, (2 * t) / 3, fr) + k.R(x - t - 6, y + h + t - 4, w + 2 * t + 12, 12, fr, { rx: 3 });
  };
  // auvent rayé à festons
  k.awning = (x, y, w, h, c1, c2, n = 10) => {
    const sw = w / n; let s = '';
    for (let i = 0; i < n; i += 1) {
      const c = i % 2 ? c2 : c1;
      s += k.P(`M${x + i * sw} ${y} L${x + (i + 1) * sw} ${y} L${x + (i + 1) * sw} ${y + h} Q${x + (i + 0.5) * sw} ${y + h + sw * 0.55} ${x + i * sw} ${y + h} Z`, `#${c}`);
    }
    return k.P(`M${x} ${y + h} L${x + w} ${y + h} L${x + w} ${y + h + sw * 0.8} L${x} ${y + h + sw * 0.8}Z`, '#000000', { op: 0.12, f: blur(12) }) + s + k.R(x, y, w, h, lin([[0, '000000', 0.12], [0.5, 'FFFFFF', 0.08], [1, '000000', 0.1]]));
  };
  // enseigne
  k.sign = (x, y, w, h, text, bg, fg = 'FFFFFF', size, o = {}) => k.R(x + 4, y + 8, w, h, '#000000', { rx: o.rx ?? h * 0.22, op: 0.18, f: blur(6) }) + k.R(x, y, w, h, o.grad ? lin([[0, o.grad], [1, bg]]) : `#${bg}`, { rx: o.rx ?? h * 0.22, stroke: o.stroke ? `#${o.stroke}` : undefined, sw: o.sw || 4 })
    + k.T(x + w / 2, y + h / 2 + (size || h * 0.5) * 0.35, text, size || h * 0.5, `#${fg}`, { ls: o.ls ?? 2 });
  // table de bistrot ronde
  k.table = (cx, y, w, c = 'FFFFFF') => k.El(cx, y + w * 0.82, w * 0.36, w * 0.05, '#1B2430', { op: 0.22, f: blur(8) }) + k.R(cx - 7, y + 10, 14, w * 0.78, lin([[0, '7A8494'], [1, '4A5262']], 0, 0, 1, 0)) + k.El(cx, y + w * 0.79, w * 0.2, w * 0.035, '#4A5262')
    + k.El(cx, y + 6, w / 2, w * 0.075, '#C9D1DC') + k.El(cx, y, w / 2, w * 0.075, lin([[0, c], [1, 'E4E9F0']]));
  // façade
  k.facade = (x, y, w, h, c, o = {}) => {
    let s = k.R(x, y, w, h, lin([[0, o.c2 || c], [1, c]]));
    const rows = o.rows || 3; const cols = o.cols || 3; const ww = w / (cols * 1.9); const wh = h / (rows * 2.2);
    for (let r = 0; r < rows; r += 1) for (let i = 0; i < cols; i += 1) {
      const wx = x + w * (i + 0.5) / cols - ww / 2; const wy = y + h * 0.12 + r * (h * 0.8 / rows);
      s += k.R(wx - 5, wy - 5, ww + 10, wh + 10, `#${o.trim || 'FFFFFF'}`, { op: 0.9 }) + k.R(wx, wy, ww, wh, lin([[0, o.glass || '9CC7EA'], [1, 'E6F3FC']]));
      if (o.lit && (r + i) % 2 === 0) s += k.R(wx, wy, ww, wh, '#FFD98A', { op: 0.7 });
    }
    return s;
  };
  // pignon à gradins (Flandre)
  k.gable = (x, y, w, h, c, o = {}) => {
    const st = o.steps || 3; const sh = h * 0.4 / st; const sw = w * 0.11; const base = y + h * 0.56;
    let d = `M${x} ${y + h} L${x} ${base}`;
    for (let i = 0; i < st; i += 1) d += ` L${x + i * sw} ${base - (i + 1) * sh} L${x + (i + 1) * sw} ${base - (i + 1) * sh}`;
    d += ` L${x + st * sw} ${y} L${x + w - st * sw} ${y}`;
    for (let i = st - 1; i >= 0; i -= 1) d += ` L${x + w - (i + 1) * sw} ${base - (i + 1) * sh} L${x + w - i * sw} ${base - (i + 1) * sh}`;
    d += ` L${x + w} ${base} L${x + w} ${y + h} Z`;
    let s = k.P(d, lin([[0, o.c2 || c], [1, c]]));
    const cols = o.cols || 2;
    for (let r = 0; r < 3; r += 1) for (let i = 0; i < cols; i += 1) {
      const ww = w / (cols * 2.3); const wx = x + w * (i + 0.5) / cols - ww / 2; const wy = y + h * 0.32 + r * h * 0.21; if (r === 0 && cols > 1) continue;
      s += k.R(wx - 4, wy - 4, ww + 8, h * 0.13 + 8, '#FFFFFF', { op: 0.85, rx: 3 }) + k.R(wx, wy, ww, h * 0.13, lin([[0, '7FA9CC'], [1, 'D5E8F6']]), { rx: 2 });
    }
    return s;
  };
  // arbre stylisé
  k.tree = (x, y, s, c = '6DB35A') => k.R(x - s * 0.05, y, s * 0.1, s * 0.7, '#8B6A4E', { rx: s * 0.04 }) + k.C(x, y - s * 0.05, s * 0.42, `#${c}`) + k.C(x - s * 0.25, y + s * 0.08, s * 0.3, `#${c}`) + k.C(x + s * 0.26, y + s * 0.06, s * 0.32, `#${c}`) + k.C(x - s * 0.08, y - s * 0.22, s * 0.28, '#FFFFFF', { op: 0.12 });
  // guirlande de fanions
  k.bunting = (x1, y1, x2, y2, sag, cols) => {
    const n = Math.round((x2 - x1) / 70); let s = k.P(`M${x1} ${y1} Q${(x1 + x2) / 2} ${y1 + sag * 2} ${x2} ${y2}`, 'none', { stroke: '#7A6A5A', sw: 3 });
    for (let i = 0; i < n; i += 1) { const t = (i + 0.5) / n; const px = x1 + (x2 - x1) * t; const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * (y1 + sag * 2) + t * t * y2; s += k.P(`M${px - 24} ${py} L${px + 24} ${py} L${px} ${py + 46}Z`, `#${cols[i % cols.length]}`); }
    return s;
  };
  // guirlande lumineuse
  k.lights = (x1, y1, x2, y2, sag) => {
    let s = k.P(`M${x1} ${y1} Q${(x1 + x2) / 2} ${y1 + sag * 2} ${x2} ${y2}`, 'none', { stroke: '#4A4A4A', sw: 2 }); const n = Math.round((x2 - x1) / 60);
    for (let i = 0; i <= n; i += 1) { const t = i / n; const px = x1 + (x2 - x1) * t; const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * (y1 + sag * 2) + t * t * y2; s += k.glow(px, py + 10, 26, 'FFE7A0', 0.7) + k.C(px, py + 10, 7, '#FFF3C4'); }
    return s;
  };
  // ------------------------------------------------ éléments supplémentaires
  k.sea = (y, h, c1 = '2F86B8', c2 = '86CBE6') => {
    let s = k.R(0, y, W, h, lin([[0, c2], [1, c1]]));
    for (let i = 0; i < 7; i += 1) { const yy = y + h * (0.2 + i * 0.11); s += k.P(`M0 ${yy} Q 200 ${yy - 6} 400 ${yy} T 800 ${yy} T 1200 ${yy} T 1600 ${yy}`, 'none', { stroke: '#FFFFFF', sw: 2, op: 0.35 - i * 0.03 }); }
    for (let i = 0; i < 14; i += 1) s += k.El((i * 131) % W, y + 10 + ((i * 37) % (h - 20)), 18, 2.5, '#FFFFFF', { op: 0.7 });
    return s;
  };
  k.hut = (x, y, w, h, c) => k.R(x + 6, y + 10, w, h, '#000000', { op: 0.12, f: blur(6) }) + k.R(x, y, w, h, `#${c}`, { rx: 4 })
    + Array.from({ length: 4 }, (_, i) => k.R(x + (i * 2 + 1) * w / 8, y, w / 8, h, '#FFFFFF', { op: 0.55 })).join('')
    + k.P(`M${x - 10} ${y} L${x + w / 2} ${y - h * 0.42} L${x + w + 10} ${y}Z`, `#${c}`) + k.R(x + w * 0.35, y + h * 0.45, w * 0.3, h * 0.55, '#5A4636', { rx: 3 });
  k.shelf = (x, y, w, c = 'B98A5E') => k.R(x + 6, y + 14, w, 14, '#000000', { op: 0.14, f: blur(6) }) + k.R(x, y, w, 16, lin([[0, 'D2A577'], [1, c]]), { rx: 3 });
  k.counter = (x, y, w, h, c1, c2) => k.R(x + 10, y + 16, w, h, '#000000', { op: 0.16, f: blur(10) }) + k.R(x, y, w, h, lin([[0, c1], [1, c2]]), { rx: 10 }) + k.R(x - 10, y - 10, w + 20, 24, lin([[0, 'FFFFFF', 0.9], [1, 'DDE3EA']]), { rx: 8 });
  k.desk = (x, y, w, c1 = 'C99A6B', c2 = 'A5784C') => k.R(x + 30, y + 24, 18, 170, `#${c2}`, { rx: 4 }) + k.R(x + w - 48, y + 24, 18, 170, `#${c2}`, { rx: 4 }) + k.El(x + w / 2, y + 200, w * 0.48, 16, '#1B2430', { op: 0.16, f: blur(8) }) + k.R(x, y, w, 30, lin([[0, c1], [1, c2]]), { rx: 6 });
  k.frame = (x, y, w, h, inner, c = 'B98A5E') => k.R(x + 10, y + 16, w, h, '#000000', { op: 0.18, f: blur(12) }) + k.R(x, y, w, h, lin([[0, 'D9AE7C'], [1, c]]), { rx: 6 })
    + `<g clip-path="${clip(`<rect x="${x + 22}" y="${y + 22}" width="${w - 44}" height="${h - 44}"/>`)}">${inner}</g>` + k.R(x + 22, y + 22, w - 44, h - 44, 'none', { stroke: '#8A6440', sw: 3 });
  k.board = (x, y, w, h, lines) => k.R(x + 8, y + 12, w, h, '#000000', { op: 0.25, f: blur(10) }) + k.R(x, y, w, h, '#1E2433', { rx: 12 }) + k.R(x + 10, y + 10, w - 20, h - 20, '#121620', { rx: 8 })
    + lines.map(([t, c, size], i) => k.T(x + 30, y + 30 + (i + 1) * (h - 40) / (lines.length + 0.35), t, size || 44, `#${c}`, { a: 'start', ls: 3 })).join('');
  k.clock = (cx, cy, r, hh = 9, mm = 12) => {
    const ha = ((hh % 12) + mm / 60) * 30 - 90; const ma = mm * 6 - 90; const rr = (a) => (a * Math.PI) / 180;
    return k.C(cx + 4, cy + 8, r, '#000000', { op: 0.18, f: blur(6) }) + k.C(cx, cy, r, '#2B3A55') + k.C(cx, cy, r * 0.86, lin([[0, 'FFFFFF'], [1, 'E8EDF3']]))
      + Array.from({ length: 12 }, (_, i) => k.L(cx + Math.cos(rr(i * 30)) * r * 0.72, cy + Math.sin(rr(i * 30)) * r * 0.72, cx + Math.cos(rr(i * 30)) * r * 0.8, cy + Math.sin(rr(i * 30)) * r * 0.8, '#2B3A55', 4)).join('')
      + k.L(cx, cy, cx + Math.cos(rr(ha)) * r * 0.45, cy + Math.sin(rr(ha)) * r * 0.45, '#2B3A55', 8) + k.L(cx, cy, cx + Math.cos(rr(ma)) * r * 0.66, cy + Math.sin(rr(ma)) * r * 0.66, '#2B3A55', 5) + k.C(cx, cy, 7, '#E8833A');
  };
  k.rain = (x0, y0, w, h, n = 90, a = 0.45) => Array.from({ length: n }, (_, i) => { const x = x0 + ((i * 97) % w); const y = y0 + ((i * 53) % h); return k.L(x, y, x - 10, y + 34, '#FFFFFF', 2, { op: a }); }).join('');
  k.puddle = (cx, cy, rx, ry) => k.El(cx, cy, rx, ry, lin([[0, 'C8D6E6'], [1, '9FB3C9']]), { op: 0.75 }) + k.El(cx - rx * 0.2, cy - ry * 0.2, rx * 0.5, ry * 0.25, '#FFFFFF', { op: 0.35 });
  k.road = (y, h) => k.R(0, y, W, h, lin([[0, '6C727C'], [1, '4E535C']])) + Array.from({ length: 9 }, (_, i) => k.R(i * 190 + 30, y + h / 2 - 6, 110, 12, '#FFFFFF', { op: 0.85, rx: 3 })).join('');
  k.crosswalk = (x, y, w, h, n = 6) => Array.from({ length: n }, (_, i) => k.R(x + i * 12, y + i * h / n + 8, w - i * 24, h / n * 0.5, '#FFFFFF', { op: 0.9, rx: 3 })).join('');
  k.cross = (cx, cy, s, c = '2EA44F') => k.glow(cx, cy, s * 1.6, c, 0.35) + k.R(cx - s * 0.18, cy - s * 0.5, s * 0.36, s, `#${c}`, { rx: s * 0.05 }) + k.R(cx - s * 0.5, cy - s * 0.18, s, s * 0.36, `#${c}`, { rx: s * 0.05 });
  k.medBoxes = (x, y, w, rows = 3) => {
    const cs = ['E9F2FB', 'FDE9E6', 'EAF6EF', 'FFF4D6', 'F1ECF7']; const bd = ['4A90D9', 'E06A5A', '3E9A62', 'E0A43A', '8E6CC8']; let s = '';
    for (let r = 0; r < rows; r += 1) {
      let cx = x; let i = r * 3;
      while (cx < x + w - 50) { const bw = 46 + ((i * 17) % 30); const bh = 58 + ((i * 23) % 26); s += k.R(cx, y + r * 110 - bh, bw, bh, `#${cs[i % 5]}`, { rx: 4, stroke: `#${bd[i % 5]}`, sw: 3 }) + k.R(cx, y + r * 110 - bh + bh * 0.3, bw, 10, `#${bd[i % 5]}`); cx += bw + 8; i += 1; }
      s += k.shelf(x - 10, y + r * 110, w + 20);
    }
    return s;
  };
  k.whiteHouse = (x, y, w, h, dome) => k.R(x + 6, y + 8, w, h, '#000000', { op: 0.08, f: blur(6) }) + k.R(x, y, w, h, lin([[0, 'FFFFFF'], [1, 'E9EEF4']]), { rx: 6 }) + k.R(x + w * 0.38, y + h * 0.5, w * 0.24, h * 0.5, '#2F6FB5', { rx: w * 0.12 })
    + k.R(x + w * 0.12, y + h * 0.2, w * 0.18, h * 0.2, '#2F6FB5', { rx: 3 }) + (dome ? k.P(`M${x + w * 0.15} ${y} A ${w * 0.35} ${w * 0.35} 0 0 1 ${x + w * 0.85} ${y}Z`, lin([[0, '3D8BE0'], [1, '1F5FA8']])) + k.C(x + w / 2, y - w * 0.37, 5, '#F2C14E') : '');
  k.turbine = (x, y, s) => k.P(`M${x - s * 0.03} ${y + s} L${x - s * 0.012} ${y} L${x + s * 0.012} ${y} L${x + s * 0.03} ${y + s}Z`, '#F4F7FA') + [0, 120, 240].map((a) => `<path d="M${x} ${y} L${x - s * 0.03} ${y - s * 0.55} Q${x} ${y - s * 0.62} ${x + s * 0.03} ${y - s * 0.55}Z" fill="#FFFFFF" transform="rotate(${a + 15} ${x} ${y})"/>`).join('') + k.C(x, y, s * 0.035, '#DCE3EA');
  k.bin = (x, y, w, h, c, label) => k.R(x + 6, y + 10, w, h, '#000000', { op: 0.15, f: blur(6) }) + k.R(x, y, w, h, lin([[0, c], [1, c]]), { rx: 10 }) + k.R(x - 8, y - 16, w + 16, 26, `#${c}`, { rx: 8 }) + k.R(x - 8, y - 16, w + 16, 10, '#FFFFFF', { op: 0.25, rx: 6 })
    + k.T(x + w / 2, y + h * 0.55, label, w * 0.2, '#FFFFFF', { ls: 1 });
  k.calendar = (x, y, w, h, day, month) => k.R(x + 6, y + 10, w, h, '#000000', { op: 0.15, f: blur(6) }) + k.R(x, y, w, h, '#FFFFFF', { rx: 10 }) + k.R(x, y, w, h * 0.3, '#E05A4E', { rx: 10 }) + k.R(x, y + h * 0.2, w, h * 0.1, '#E05A4E')
    + k.T(x + w / 2, y + h * 0.22, month, h * 0.16, '#FFFFFF', { ls: 2 }) + k.T(x + w / 2, y + h * 0.82, day, h * 0.45, '#2B3A55');
  k.bubble = (x, y, w, h, inner, tail = 'left') => {
    const tx = tail === 'left' ? x + w * 0.2 : x + w * 0.8;
    return k.R(x + 6, y + 10, w, h, '#000000', { op: 0.15, f: blur(8) }) + k.P(`M${tx - 26} ${y + h - 2} L${tx + (tail === 'left' ? -40 : 40)} ${y + h + 60} L${tx + 26} ${y + h - 2}Z`, '#FFFFFF') + k.R(x, y, w, h, '#FFFFFF', { rx: h * 0.28 }) + inner;
  };
  k.confetti = (x0, y0, w, h, n, cols) => Array.from({ length: n }, (_, i) => { const x = x0 + ((i * 113) % w); const y = y0 + ((i * 71) % h); return k.R(x, y, 14, 7, `#${cols[i % cols.length]}`, { rx: 2, tr: `rotate(${(i * 47) % 180} ${x} ${y})` }); }).join('');
  k.pendant = (x, y, len, c = 'F2C14E') => k.L(x, 0, x, y + len, '#3A3A3A', 3) + k.glow(x, y + len + 40, 170, 'FFE3A0', 0.55) + k.P(`M${x - 50} ${y + len + 40} Q${x} ${y + len - 30} ${x + 50} ${y + len + 40}Z`, `#${c}`) + k.El(x, y + len + 42, 30, 8, '#FFF6D8');
  k.bricks = (x, y, w, h, c1 = 'B5543C', c2 = '9E4632') => {
    let s = k.R(x, y, w, h, '#8C3E2C'); let r = 0;
    for (let yy = y; yy < y + h; yy += 38) { const off = (r % 2) * 60; for (let xx = x - off; xx < x + w; xx += 122) s += k.R(xx + 3, yy + 3, 116, 32, `#${(xx + r) % 3 ? c1 : c2}`, { rx: 3 }); r += 1; }
    return `<g clip-path="${clip(`<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`)}">${s}</g>`;
  };
  k.curtain = (x, y, w, h, c) => k.P(`M${x} ${y} L${x + w} ${y} Q${x + w * 0.55} ${y + h * 0.5} ${x + w * 0.85} ${y + h} L${x} ${y + h}Z`, lin([[0, c], [1, c]], 0, 0, 1, 0)) + Array.from({ length: 3 }, (_, i) => k.L(x + w * (0.2 + i * 0.22), y + 10, x + w * (0.15 + i * 0.2), y + h - 10, '#000000', 3, { op: 0.08 })).join('');
  k.rug = (cx, cy, rx, ry, c1, c2) => k.El(cx, cy, rx, ry, `#${c1}`, { op: 0.9 }) + k.El(cx, cy, rx * 0.78, ry * 0.7, 'none').replace('fill="none"', `fill="none" stroke="#${c2}" stroke-width="6"`) + k.El(cx, cy, rx * 0.5, ry * 0.45, `#${c2}`, { op: 0.5 });
  k.blinds = (x, y, w, h) => k.win(x, y, w, h, { view: 'city' }) + Array.from({ length: Math.floor(h / 26) }, (_, i) => k.R(x, y + i * 26, w, 12, '#F4F6F8', { op: 0.85 })).join('');
  k.bench = (x, y, w) => k.R(x, y, w, 18, '#A5784C', { rx: 4 }) + k.R(x, y + 28, w, 18, '#A5784C', { rx: 4 }) + k.R(x + 20, y + 46, 14, 70, '#4A5262') + k.R(x + w - 34, y + 46, 14, 70, '#4A5262');
  k.stars = (x, y, s, n, total = 5) => Array.from({ length: total }, (_, i) => (i < n ? k.E('star', x + i * s * 1.05, y, s, { shadow: false }) : k.E('star', x + i * s * 1.05, y, s, { shadow: false, op: 0.25 }))).join('');
  k.vignette = (a = 0.28) => k.R(0, 0, W, H, rad([[0, '000000', 0], [0.7, '000000', 0], [1, '000000', a]], 0.5, 0.45, 0.75));
  k.warm = (c = 'FFB86B', a = 0.12) => k.R(0, 0, W, H, lin([[0, c, a], [1, c, 0]], 0, 0, 1, 1));
  return k;
}

// ------------------------------------------------------------------ les décors
const S = {};
const city = (k, y, n, cols, a = 1) => Array.from({ length: n }, (_, i) => k.R(i * (1700 / n) - 40, y - ((i * 47) % 170), 1700 / n - 6, 400, `#${cols[i % cols.length]}`, { op: a })).join('');

// ================================================================== A1
S.terras = (k) => [
  k.sky('6FB6EC', 'CFE8F7', 710, 'FCE7C8'), k.glow(1380, 130, 380, 'FFE39A', 0.75), k.E('sun', 1290, 40, 190, { shadow: false }),
  k.cloud(300, 140, 120), k.cloud(780, 90, 80, { a: 0.85 }),
  k.R(150, 230, 1300, 480, k.lin([[0, 'F6E3C8'], [1, 'EBCFA9']])), k.R(150, 230, 1300, 22, '#D9B98E'),
  k.win(250, 410, 360, 260, { view: 'city', frame: '5A3E2B', t: 12 }), k.win(990, 410, 360, 260, { view: 'city', frame: '5A3E2B', t: 12 }),
  k.R(690, 430, 220, 280, k.lin([[0, '6B4A33'], [1, '4A3324']]), { rx: 6 }), k.R(710, 450, 180, 150, k.lin([[0, 'A9D2EE'], [1, 'E6F3FC']])), k.C(870, 600, 7, '#E8C27A'),
  k.awning(120, 300, 1360, 70, 'C8102E', 'FFFFFF', 17), k.sign(560, 236, 480, 74, 'CAFÉ DE ZON', '2B3A55', 'FFE6A8', 44, { ls: 6 }), k.lights(120, 300, 1480, 300, 30),
  k.E('potted-plant', 50, 520, 200), k.E('potted-plant', 1350, 520, 200),
  k.ground(705, 'DDBA92', 'B98B62'), k.cobbles(705, '8E6646', 0.2), k.R(0, 700, W, 10, '#C49A6C'),
  k.E('woman-tipping-hand', 250, 440, 360), k.E('man-raising-hand', 990, 440, 360),
  k.table(800, 700, 440), k.E('hot-beverage', 650, 598, 130, { so: 0.18 }), k.E('waffle', 810, 606, 125, { so: 0.18 }),
  k.E('bicycle', 1280, 730, 240), k.warm('FFB86B', 0.1), k.vignette(0.2),
].join('');

S.markt = (k) => [
  k.sky('7CC0EE', 'E4F3FB', 600), k.cloud(1260, 110, 100), k.cloud(250, 80, 70, { a: 0.8 }),
  k.gable(30, 140, 260, 460, 'C8A27A', { c2: 'D9B892' }), k.gable(300, 110, 300, 490, '8FA9B8', { c2: 'A9C1CE', cols: 3 }), k.gable(610, 160, 250, 440, 'D98C6A', { c2: 'E6A486' }),
  k.gable(870, 120, 300, 480, 'E2C45E', { c2: 'EDD587', cols: 3 }), k.gable(1180, 150, 260, 450, '9EB98E', { c2: 'B7CDA8' }), k.gable(1450, 120, 220, 480, 'C97B6E', { c2: 'D99A8E' }),
  k.ground(595, 'CDB295', 'A8896A'), k.cobbles(595, '7E6248', 0.22),
  k.R(130, 360, 14, 300, '#6E5038'), k.R(1456, 360, 14, 300, '#6E5038'),
  k.awning(100, 330, 1400, 66, '2E8B57', 'F4F1E6', 16), k.sign(620, 262, 360, 80, 'MARKT', 'FFFFFF', '2E8B57', 52, { ls: 10, stroke: '2E8B57' }),
  k.E('man-farmer', 650, 410, 290),
  k.R(110, 620, 1380, 190, k.lin([[0, 'B9864F'], [1, '8C6036']]), { rx: 10 }), k.R(110, 620, 1380, 16, '#D9A86C', { rx: 6 }),
  ...[['red-apple', 150], ['tomato', 370], ['banana', 590], ['strawberry', 970], ['carrot', 1190]].map(([e, x]) => k.R(x - 10, 570, 220, 70, k.lin([[0, 'E8C08A'], [1, 'C8945A']]), { rx: 8 }) + k.E(e, x + 10, 482, 150, { so: 0.2 }) + k.E(e, x + 80, 500, 120, { so: 0.15 })),
  ...[['€ 2', 205], ['€ 3', 425], ['€ 1', 645], ['€ 4', 1025], ['€ 1', 1245]].map(([t, x]) => k.sign(x, 662, 110, 60, t, 'FFFFFF', '2B3A55', 34, { ls: 0 })),
  k.E('basket', 1290, 770, 210), k.E('euro-banknote', 80, 810, 160, { rot: -12 }),
  k.warm('FFC77D', 0.08), k.vignette(0.2),
].join('');

S.collega = (k) => [
  k.wall('F1F6FC', 'DCE7F3', 720), k.win(930, 120, 520, 420, { view: 'city' }),
  k.bunting(80, 110, 820, 110, 40, ['E8833A', '2E8B57', '4A90D9', 'C8102E', 'F2C14E']), k.sign(240, 200, 420, 100, 'WELKOM!', '2E8B57', 'FFFFFF', 62, { ls: 6 }),
  k.planks(720, 'D8C2A6', 'BFA382', '9C7553'),
  k.E('woman-raising-hand', 150, 360, 380), k.E('man-office-worker', 560, 380, 370),
  k.desk(980, 640, 520), k.E('laptop', 1050, 500, 170, { so: 0.15 }), k.E('hot-beverage', 1270, 545, 110, { so: 0.15 }), k.E('potted-plant', 1380, 450, 200),
  k.vignette(0.18),
].join('');

S.huis = (k) => [
  k.wall('FBEBDD', 'F1D6BF', 730), k.win(1000, 150, 400, 360, { view: 'trees' }), k.curtain(930, 120, 110, 470, 'E8A07A'), k.curtain(1360, 120, 110, 470, 'E8A07A'),
  k.R(920, 112, 560, 16, '#8A6440', { rx: 6 }),
  k.frame(220, 150, 300, 230, k.R(242, 172, 256, 186, k.lin([[0, '8EC5F0'], [1, 'E3F2FB']])) + k.P('M242 358 L330 250 L400 320 L450 270 L498 358Z', '#6E9E58') + k.C(450, 210, 22, '#FFE08A')),
  k.planks(730, 'C99A6B', 'A5784C'), k.rug(560, 880, 420, 70, 'E8B4A0', 'D98C6A'),
  k.E('couch-and-lamp', 230, 360, 500), k.R(860, 700, 230, 18, '#8A6440', { rx: 6 }), k.R(880, 718, 14, 120, '#8A6440'), k.R(1056, 718, 14, 120, '#8A6440'), k.E('books', 900, 590, 130, { so: 0.15 }),
  k.E('potted-plant', 1330, 560, 230), k.E('key', 700, 860, 110), k.warm('FFC48A', 0.12), k.vignette(0.2),
].join('');

S.familie = (k) => [
  k.wall('F6E9F1', 'EBD5E3', 845),
  k.frame(330, 70, 940, 600, k.R(352, 92, 896, 556, k.lin([[0, '8EC5F0'], [1, 'E6F4FC']])) + k.R(352, 400, 896, 90, k.lin([[0, '4FA3D1'], [1, '8ACDE8']])) + k.R(352, 480, 896, 170, k.lin([[0, 'F4DDAE'], [1, 'E8C98E']]))
    + k.E('sun', 1080, 110, 110, { shadow: false }) + k.E('family-man-woman-girl-boy', 520, 170, 420) + k.E('dog-face', 930, 420, 160)),
  k.R(150, 720, 1300, 50, k.lin([[0, 'B98A5E'], [1, '8A6440']]), { rx: 8 }), k.R(180, 770, 1240, 70, '#7A5636', { rx: 4 }),
  k.E('camera-with-flash', 190, 530, 210), k.E('tulip', 1170, 520, 210), k.E('framed-picture', 960, 600, 130, { so: 0.15 }),
  k.planks(840, 'C99A6B', 'A5784C'), k.vignette(0.2),
].join('');

S.dag = (k) => [
  k.R(0, 0, W, H, k.lin([[0, 'FFC48A'], [0.28, 'FCE3B0'], [0.55, 'A9D4F2'], [0.8, '5A6FB8'], [1, '2A3170']], 0, 0, 1, 0)),
  k.glow(170, 170, 260, 'FFE39A', 0.8), k.E('sun', 90, 90, 170, { shadow: false }), k.glow(1440, 160, 220, 'CFD8FF', 0.5), k.E('crescent-moon', 1360, 80, 150, { shadow: false }),
  ...[[1180, 60], [1260, 210], [1510, 260], [1120, 170], [1560, 90]].map(([x, y]) => k.C(x, y, 4, '#FFFFFF', { op: 0.9 })),
  k.cloud(560, 160, 90, { a: 0.9 }), k.cloud(900, 120, 70, { a: 0.8 }),
  ...Array.from({ length: 22 }, (_, i) => k.R(i * 76 - 20, 560 - ((i * 47) % 160), 70, 300, k.lin([[0, i < 11 ? 'D3B9A0' : '5B6799'], [1, i < 11 ? 'B99C82' : '414A7A']]))),
  k.R(0, 700, W, H - 700, k.lin([[0, '9FC57E'], [1, '6E9E58']], 0, 0, 1, 0)),
  k.P('M60 870 C 400 760, 700 900, 1000 800 S 1450 780, 1560 840', 'none', { stroke: '#F6EEDC', sw: 34 }),
  ...[['alarm-clock', 70, '7:00'], ['hot-beverage', 370, '7:15'], ['train', 670, '8:00'], ['laptop', 970, '9:00'], ['cooking', 1270, '19:00']].map(([e, x, t], i) => {
    const y = [790, 760, 815, 770, 790][i];
    return k.El(x + 130, y + 50, 120, 28, '#FFFFFF', { op: 0.85 }) + k.E(e, x + 50, y - 150, 170) + k.sign(x + 70, y + 90, 120, 56, t, 'E8833A', 'FFFFFF', 32, { ls: 0 });
  }),
  k.vignette(0.18),
].join('');

S.weer = (k) => [
  k.sky('8E9BAD', 'D3DAE3', 700), city(k, 700, 12, ['9AA6B6', '8794A6', 'A7B2C1'], 0.9),
  k.E('cloud-with-rain', 80, 30, 280, { shadow: false }), k.E('cloud-with-rain', 1060, 10, 250, { shadow: false }), k.E('wind-face', 1360, 210, 180, { shadow: false }),
  // la vitrine du magasin de vêtements
  k.R(60, 300, 560, 400, k.lin([[0, 'F4EFE8'], [1, 'E2D9CC']])), k.awning(40, 300, 600, 50, '2B3A55', 'E8EDF3', 8), k.sign(180, 250, 320, 66, 'MODE', 'FFFFFF', '2B3A55', 40, { ls: 8 }),
  k.R(110, 400, 460, 280, k.lin([[0, 'DCEAF6'], [1, 'F5FAFE']])), k.E('coat', 130, 440, 200), k.E('scarf', 330, 470, 150), k.E('gloves', 440, 560, 110),
  k.ground(700, '8D98A6', '6D7786'), ...[[300, 860, 180, 26], [1150, 930, 220, 30], [760, 780, 120, 16]].map(([a, b, c, d]) => k.puddle(a, b, c, d)),
  k.E('woman-walking', 830, 420, 360), k.E('umbrella-with-rain-drops', 820, 250, 330, { shadow: false }),
  k.R(1330, 420, 16, 360, '#4A5262'), k.sign(1260, 360, 160, 110, '8 °C', '4A90D9', 'FFFFFF', 54, { ls: 0 }),
  k.rain(0, 0, W, 980, 140, 0.4), k.vignette(0.22),
].join('');

S.dokter = (k) => [
  k.wall('EAF6F0', 'D3EADF', 740), k.blinds(1100, 130, 360, 300), k.cross(300, 180, 140, '2EA44F'), k.sign(170, 290, 260, 70, 'DOKTER', '2EA44F', 'FFFFFF', 40, { ls: 6 }),
  k.ground(740, 'E9EEF2', 'CFD7DF'), ...Array.from({ length: 9 }, (_, i) => k.L(i * 200, 740, i * 260 - 300, H, '#B8C2CF', 2, { op: 0.4 })),
  // la table d'examen
  k.R(90, 690, 640, 60, k.lin([[0, 'A9D5EE'], [1, '7FBAD9']]), { rx: 18 }), k.R(120, 750, 20, 140, '#8A96A8'), k.R(680, 750, 20, 140, '#8A96A8'), k.R(90, 670, 200, 40, '#FFFFFF', { rx: 16 }),
  k.E('face-with-thermometer', 300, 430, 270), k.E('man-health-worker', 860, 330, 430),
  k.desk(1230, 700, 320), k.E('stethoscope', 1270, 590, 120, { so: 0.15 }), k.E('pill', 1400, 610, 100, { so: 0.15 }),
  k.vignette(0.18),
].join('');

// ================================================================== A2
S.zee = (k) => [
  k.sky('5DACE3', 'D6EDFA', 480), k.glow(1380, 120, 300, 'FFE7A6', 0.7), k.E('sun', 1300, 50, 170, { shadow: false }), k.cloud(520, 120, 80, { a: 0.9 }),
  k.sea(470, 150), k.E('sailboat', 760, 360, 140, { shadow: false }),
  k.R(0, 610, W, H - 610, k.lin([[0, 'F6E2B6'], [1, 'E8C98E']])), ...Array.from({ length: 30 }, (_, i) => k.C((i * 151) % W, 640 + ((i * 89) % 340), 3, '#C9A46A', { op: 0.5 })),
  ...[['E05A4E', 30], ['4A90D9', 190], ['F2C14E', 350], ['2E8B57', 510]].map(([c, x]) => k.hut(x, 520, 130, 130, c)),
  k.E('kite', 1080, 30, 210, { shadow: false }), k.P('M1180 230 Q 1120 500 1050 700', 'none', { stroke: '#FFFFFF', sw: 2 }),
  k.E('umbrella-on-ground', 140, 600, 330), k.E('shrimp', 560, 800, 140), k.E('woman-and-man-holding-hands', 840, 520, 330),
  k.R(1070, 860, 530, 140, k.lin([[0, '6C727C'], [1, '4E535C']])), k.E('automobile', 1080, 780, 160), k.E('automobile', 1240, 790, 160), k.E('automobile', 1400, 800, 160),
  k.warm('FFC48A', 0.1), k.vignette(0.18),
].join('');

S.appartement = (k) => [
  k.wall('F6E3CF', 'E8C9AA', 730), k.glow(1150, 420, 520, 'FFD48A', 0.4),
  k.win(90, 130, 260, 380, { view: 'night' }), k.win(560, 130, 260, 380, { view: 'night' }),
  k.desk(330, 560, 260), k.E('desktop-computer', 370, 400, 180, { so: 0.12 }),
  k.planks(730, 'C99A6B', 'A5784C'), k.rug(1150, 900, 380, 60, 'D98C6A', 'B85F3E'),
  k.E('mirror', 1060, 90, 250, { shadow: false }), k.E('couch-and-lamp', 930, 380, 480),
  k.E('package', 60, 760, 170), k.E('package', 200, 800, 140), k.E('potted-plant', 640, 620, 170),
  k.E('trumpet', 1430, 20, 130, { shadow: false, rot: -20 }), k.E('musical-notes', 1300, 40, 110, { shadow: false }),
  k.warm('FFB86B', 0.14), k.vignette(0.26),
].join('');

S.feestje = (k) => [
  k.wall('F6E6F7', 'E7C9EE', 760), k.bunting(0, 60, 1600, 60, 50, ['E8833A', 'C8102E', '4A90D9', 'F2C14E', '8E6CC8', '2E8B57']),
  k.sign(620, 160, 360, 170, '30!', 'B4236A', 'FFE6A8', 120, { ls: 4, grad: 'D9488A' }),
  k.E('balloon', 70, 120, 260, { shadow: false }), k.E('balloon', 220, 200, 220, { shadow: false, rot: -10 }), k.E('balloon', 1260, 110, 260, { shadow: false }), k.E('balloon', 1150, 220, 200, { shadow: false, rot: 12 }),
  k.planks(760, 'D9B48A', 'B98B62'),
  k.R(380, 640, 840, 60, k.lin([[0, 'FFFFFF'], [1, 'EEE8F2']]), { rx: 12 }), k.R(400, 700, 800, 150, k.lin([[0, 'F8F3FA'], [1, 'E4D9EA']])), k.El(800, 860, 420, 20, '#1B2430', { op: 0.15, f: k.blur(10) }),
  k.E('birthday-cake', 640, 380, 320), k.E('wrapped-gift', 990, 480, 190), k.E('top-hat', 1010, 360, 140, { shadow: false, rot: 10 }), k.E('party-popper', 420, 480, 190),
  k.confetti(100, 300, 1400, 640, 80, ['E8833A', 'C8102E', '4A90D9', 'F2C14E', '8E6CC8', '2E8B57']), k.vignette(0.18),
].join('');

S.trein = (k) => [
  k.sky('8DC4EC', 'E1F1FB', 600), city(k, 600, 10, ['C9D5E2', 'B8C7D7', 'D5DEE8'], 0.9),
  k.P('M0 0 L1600 0 L1600 110 L0 170Z', '#3A4256'), ...Array.from({ length: 7 }, (_, i) => k.L(i * 260 + 60, 140 - i * 8, i * 260 + 60, 600, '#4E566A', 14)),
  k.board(780, 190, 720, 230, [['09:12  NAMEN → BRUSSEL', 'FFB547', 46], ['+ 40 MIN', 'FF5A4E', 58]]),
  k.R(300, 150, 14, 300, '#4E566A'), k.clock(307, 160, 74, 9, 52),
  k.ground(600, 'B9C1CC', '9AA3B0'), k.R(0, 600, W, 26, '#F2C14E'), k.R(0, 626, W, 10, '#E0A43A'),
  k.R(860, 760, 740, 240, k.lin([[0, '6C727C'], [1, '4E535C']])), ...Array.from({ length: 9 }, (_, i) => k.R(860 + i * 90, 820, 60, 16, '#8A6440', { op: 0.7 })),
  k.R(860, 790, 740, 8, '#C9CED6'), k.R(860, 880, 740, 8, '#C9CED6'), k.E('high-speed-train', 1010, 330, 520, { shadow: false }),
  k.E('man-office-worker', 220, 440, 420), k.E('mobile-phone', 560, 530, 130, { shadow: false, rot: 12 }), k.bench(120, 800, 560), k.E('briefcase', 600, 740, 150),
  k.vignette(0.2),
].join('');

S.cadeau = (k) => [
  k.wall('F3EEF8', 'E2D6EE', 760), k.pendant(400, 0, 90), k.pendant(1100, 0, 90), k.sign(560, 70, 480, 90, 'BOETIEK', '6D4C8E', 'FFFFFF', 54, { ls: 10 }),
  k.shelf(80, 420, 560), k.shelf(80, 640, 560), k.E('scarf', 110, 270, 160), k.E('blue-book', 300, 290, 130), k.E('green-book', 410, 300, 120), k.E('lipstick', 530, 300, 110),
  k.E('shopping-bags', 120, 490, 160), k.E('wrapped-gift', 330, 500, 140), k.sign(110, 440, 110, 50, '€ 80', 'E05A4E', 'FFFFFF', 30, { ls: 0 }), k.sign(300, 440, 110, 50, '€ 20', '2E8B57', 'FFFFFF', 30, { ls: 0 }),
  k.planks(760, 'D8C2A6', 'BFA382'),
  k.E('woman-tipping-hand', 950, 300, 400), k.counter(820, 620, 700, 230, 'B7A3CF', '8E76AE'), k.E('wrapped-gift', 830, 470, 160), k.E('shopping-bags', 1320, 460, 170),
  k.vignette(0.2),
].join('');

S.apotheek = (k) => [
  k.wall('EEF8F2', 'D6ECDF', 760), k.cross(220, 200, 170, '2EA44F'), k.sign(380, 150, 420, 100, 'APOTHEEK', '2EA44F', 'FFFFFF', 54, { ls: 8 }),
  k.medBoxes(880, 220, 640, 3),
  k.ground(760, 'E9EEF2', 'CFD7DF'),
  k.E('woman-health-worker', 980, 350, 380), k.counter(820, 640, 760, 220, '43A866', '2E8B57'), k.R(820, 700, 760, 10, '#FFFFFF', { op: 0.3 }),
  k.E('pill', 870, 520, 120, { so: 0.15 }), k.E('honey-pot', 1350, 500, 140, { so: 0.15 }), k.E('thermometer', 1480, 520, 110, { so: 0.15 }),
  k.E('sneezing-face', 140, 420, 380), k.vignette(0.18),
].join('');

S.kaartje = (k) => [
  k.sky('2F7FD1', 'BFE3F8', 560), k.glow(1380, 120, 320, 'FFE7A6', 0.7), k.E('sun', 1300, 50, 170, { shadow: false }),
  k.P('M0 560 L0 380 Q 220 300 420 360 Q 520 390 600 560Z', '#C9B48E'), k.E('classical-building', 160, 230, 220, { shadow: false }),
  k.sea(540, 200, '1D63A8', '4FA3D9'), k.E('sailboat', 560, 450, 150, { shadow: false }),
  k.P('M760 740 L760 470 Q 1100 330 1600 380 L1600 740Z', '#E8DCC8'),
  ...[[820, 520, 150, 120, true], [990, 470, 170, 150, false], [1180, 430, 140, 120, true], [1340, 460, 170, 140, false], [900, 640, 160, 110, false], [1100, 600, 180, 140, true], [1310, 620, 170, 120, false]].map(([x, y, w, h, d]) => k.whiteHouse(x, y, w, h, d)),
  ...[[800, 610], [975, 600], [1165, 560], [1330, 580], [1500, 600], [890, 735], [1090, 735], [1295, 735]].map(([x, y]) => k.C(x, y, 22, '#E0489A', { op: 0.9 }) + k.C(x + 18, y - 12, 15, '#F06AB0') + k.C(x - 16, y - 8, 13, '#C93C88') + k.C(x + 4, y + 12, 12, '#3E9A62')),
  k.R(0, 740, W, 260, k.lin([[0, 'F2E3C6'], [1, 'E2CCA4']])),
  `<g transform="rotate(-6 420 850)">${k.R(170, 720, 500, 300, '#FFFFFF', { rx: 8 })}${k.R(190, 740, 220, 260, k.lin([[0, '4FA3D9'], [1, 'BFE3F8']]))}${k.R(570, 740, 80, 96, '#E05A4E', { rx: 4 })}${[800, 840, 880, 920].map((y) => k.L(440, y, 650, y, '#B8C2CF', 3)).join('')}</g>`,
  k.E('postbox', 1180, 640, 330), k.E('sunglasses', 740, 860, 130), k.vignette(0.18),
].join('');

S.werkdag = (k) => [
  k.wall('EEF3F9', 'D9E4F0', 740), k.win(120, 120, 480, 380, { view: 'city' }), k.sign(760, 130, 360, 90, 'BANK', '2B3A55', 'FFE6A8', 50, { ls: 14 }),
  k.planks(740, 'D8C2A6', 'BFA382'),
  k.E('woman-office-worker', 300, 400, 380), k.desk(180, 700, 760),
  k.E('clipboard', 640, 560, 150, { so: 0.15 }), k.E('card-index-dividers', 760, 590, 130, { so: 0.15 }), k.E('page-facing-up', 590, 610, 110, { so: 0.15, rot: -8 }),
  // la machine à café… introuvable
  k.R(1180, 380, 260, 380, k.lin([[0, '5A6272'], [1, '3A4152']]), { rx: 18 }), k.R(1210, 420, 200, 90, '#1E2433', { rx: 8 }), k.T(1310, 478, 'KOFFIE ?', 40, '#FFB547', { ls: 2 }), k.R(1250, 560, 120, 120, '#2A303D', { rx: 6 }),
  k.E('hot-beverage', 1255, 590, 110, { so: 0.1 }), k.E('red-question-mark', 1330, 200, 160, { shadow: false }),
  k.vignette(0.18),
].join('');

// ================================================================== B1
S.klacht = (k) => [
  k.wall('EEF1F5', 'DCE2EA', 740), k.win(1080, 120, 420, 330, { view: 'city' }), k.E('delivery-truck', 1180, 300, 160, { shadow: false }),
  k.calendar(130, 120, 220, 230, '3', 'MAART'), k.E('warning', 450, 140, 170, { shadow: false }),
  k.planks(740, 'C99A6B', 'A5784C'), k.desk(560, 650, 900),
  k.E('laptop', 860, 420, 260, { so: 0.15 }), k.E('e-mail', 900, 250, 160, { shadow: false }), k.E('face-with-steam-from-nose', 1220, 420, 220, { so: 0.12 }),
  k.E('package', 120, 560, 330), k.E('collision', 360, 520, 180, { shadow: false }), k.vignette(0.2),
].join('');

S.sollicitatie = (k) => [
  k.wall('EEF3F9', 'D9E4F0', 740), k.win(470, 110, 660, 380, { view: 'city' }), k.sign(1220, 140, 280, 90, 'JOBS', '2E8B57', 'FFFFFF', 54, { ls: 12 }), k.E('potted-plant', 80, 420, 230),
  k.planks(740, 'D8C2A6', 'BFA382'),
  k.E('man-office-worker', 200, 380, 380), k.E('woman-office-worker', 1000, 380, 380),
  k.R(120, 690, 1360, 40, k.lin([[0, 'C99A6B'], [1, 'A5784C']]), { rx: 10 }), k.R(200, 730, 22, 200, '#8A6440'), k.R(1380, 730, 22, 200, '#8A6440'), k.El(800, 940, 640, 18, '#1B2430', { op: 0.15, f: k.blur(10) }),
  k.E('page-facing-up', 640, 590, 140, { so: 0.12, rot: -6 }), k.E('page-facing-up', 760, 600, 130, { so: 0.12, rot: 8 }), k.E('handshake', 700, 300, 180, { shadow: false }), k.E('hot-beverage', 1300, 610, 100, { so: 0.12 }),
  k.vignette(0.18),
].join('');

S.verhuisd = (k) => [
  k.sky('8E9BAD', 'D3DAE3', 640),
  k.R(0, 160, 520, 480, k.lin([[0, 'B5543C'], [1, '9E4632']])), k.bricks(0, 160, 520, 480), k.win(80, 240, 150, 170, { frame: 'F4EFE8', t: 10 }), k.win(300, 240, 150, 170, { frame: 'F4EFE8', t: 10 }),
  k.R(200, 460, 130, 180, '#3E5A7A', { rx: 6 }), k.sign(180, 420, 170, 34, 'NR 12', '2B3A55', 'FFFFFF', 22, { ls: 2 }),
  k.R(540, 220, 380, 420, k.lin([[0, 'E0D3BE'], [1, 'CDBFA5']])), k.win(600, 290, 110, 140, { frame: 'FFFFFF', t: 8 }), k.win(760, 290, 110, 140, { frame: 'FFFFFF', t: 8 }),
  k.E('cloud-with-rain', 560, 10, 280, { shadow: false }), k.cloud(1250, 110, 110, { under: 'C5CFDB' }),
  k.ground(640, '8D98A6', '6D7786'), k.puddle(380, 900, 200, 28), k.puddle(1200, 930, 160, 22),
  k.E('delivery-truck', 960, 330, 520), k.E('package', 330, 640, 170), k.E('package', 400, 540, 140), k.E('package', 480, 660, 150), k.E('couch-and-lamp', 610, 560, 300), k.E('hot-beverage', 425, 470, 90, { shadow: false }),
  k.rain(0, 0, W, 980, 130, 0.38), k.vignette(0.22),
].join('');

S.fiets = (k) => [
  k.sky('7CC0EE', 'E4F3FB', 520), k.cloud(1300, 100, 90), city(k, 520, 9, ['E3D2BC', 'D5C1A8', 'EADCC8']),
  k.tree(110, 330, 220, '6DB35A'), k.tree(1480, 340, 200, '7DBE6A'),
  k.R(0, 520, W, 70, '#C9CED6'), k.R(0, 590, W, 110, k.lin([[0, 'C2584A'], [1, 'A84A3E']])), k.L(0, 590, W, 590, '#FFFFFF', 4, { op: 0.8 }), k.road(700, 300),
  k.crosswalk(620, 700, 360, 300, 7),
  // l'abribus
  k.R(1180, 300, 300, 230, '#DCE7F2', { op: 0.6 }), k.R(1180, 290, 320, 20, '#3A4256'), k.R(1180, 300, 10, 260, '#3A4256'), k.R(1480, 300, 10, 260, '#3A4256'), k.sign(1230, 230, 120, 56, 'BUS', '4A90D9', 'FFFFFF', 34, { ls: 4 }),
  k.E('person-standing', 1290, 310, 230, { so: 0.2 }),
  k.E('woman-biking', 260, 400, 330), k.E('collision', 610, 430, 180, { shadow: false }), k.E('delivery-truck', 720, 360, 360),
  k.E('ambulance', 1160, 760, 230), k.vignette(0.18),
].join('');

S.thuiswerk = (k) => [
  // la maison (gauche) et le bureau (droite)
  k.R(0, 0, 800, H, k.lin([[0, 'FDF0E1'], [1, 'F1D9BD']])), k.R(800, 0, 800, H, k.lin([[0, 'EAF0F7'], [1, 'D3DEEA']])),
  k.win(120, 170, 280, 260, { view: 'trees' }), k.win(1100, 170, 360, 260, { view: 'city' }), k.E('potted-plant', 470, 420, 190),
  k.R(0, 740, 800, 260, k.lin([[0, 'C99A6B'], [1, 'A5784C']])), k.R(800, 740, 800, 260, k.lin([[0, 'C3CBD6'], [1, 'A9B3C0']])),
  k.L(800, 0, 800, H, '#FFFFFF', 8),
  k.E('balance-scale', 660, 10, 280, { shadow: false }), k.E('house', 668, 90, 100, { shadow: false }), k.E('office-building', 832, 90, 100, { shadow: false }),
  k.desk(140, 640, 560), k.E('laptop', 300, 480, 200, { so: 0.12 }), k.E('hot-beverage', 520, 540, 110, { so: 0.12 }), k.E('cat', 470, 760, 200),
  k.desk(900, 640, 560, 'B8C2CF', '8A96A8'), k.E('desktop-computer', 1060, 460, 210, { so: 0.12 }), k.E('man-office-worker', 1330, 420, 260),
  k.vignette(0.2),
].join('');

S.recensie = (k) => [
  k.bricks(0, 0, W, 560), k.R(0, 0, W, 560, '#000000', { op: 0.18 }), k.sign(560, 70, 480, 110, 'DE LEPEL', '2B3A55', 'FFD98A', 66, { ls: 12, stroke: 'FFD98A', sw: 4 }),
  k.pendant(300, 0, 140), k.pendant(1300, 0, 140),
  k.R(0, 560, W, 440, k.lin([[0, '6B4A33'], [1, '4A3324']])),
  k.R(260, 600, 1080, 60, k.lin([[0, 'FFFFFF'], [1, 'EEF1F5']]), { rx: 14 }), k.P('M270 650 L1330 650 L1300 790 Q 800 820 300 790Z', k.lin([[0, 'F6F8FA'], [1, 'D5DCE6']])), k.R(560, 800, 24, 160, '#3A2A1E'), k.R(1016, 800, 24, 160, '#3A2A1E'), k.El(800, 965, 420, 18, '#000000', { op: 0.25, f: k.blur(10) }),
  k.E('fork-and-knife-with-plate', 620, 420, 260), k.E('fish', 690, 470, 120, { shadow: false }), k.E('french-fries', 380, 450, 200), k.E('wine-glass', 960, 420, 200),
  k.E('person-in-tuxedo', 1240, 300, 330), k.E('hourglass-not-done', 1180, 260, 120, { shadow: false }),
  k.bubble(80, 230, 430, 150, k.stars(110, 270, 70, 4)), k.warm('FFB86B', 0.14), k.vignette(0.3),
].join('');

S.duurzaam = (k) => [
  k.sky('7CC0EE', 'E8F6FB', 600), k.E('globe-showing-europe-africa', 1330, 40, 190, { shadow: false }), k.cloud(500, 110, 90),
  k.P('M0 600 Q 300 420 700 520 Q 1100 610 1600 470 L1600 620 L0 620Z', '#9FCB7E'), k.turbine(260, 330, 300), k.turbine(520, 380, 240), k.turbine(1180, 330, 280),
  k.P('M760 520 L900 420 L1040 520Z', '#C8584A'), k.R(780, 520, 240, 120, '#F4EFE8'), k.P('M810 470 L900 410 L990 470 L960 490 L840 490Z', '#2B3A55', { op: 0.85 }), k.R(880, 570, 50, 70, '#8A6440'),
  k.R(0, 620, W, 380, k.lin([[0, '8CC26E'], [1, '6AA352']])), k.P('M640 1000 Q 760 760 900 640 L1000 640 Q 900 780 860 1000Z', '#E6D8BC'),
  k.E('bicycle', 120, 640, 300), k.bin(470, 700, 110, 160, '4A90D9', 'PMD'), k.bin(610, 700, 110, 160, 'F2C14E', 'GLAS'), k.bin(750, 700, 110, 160, '2E8B57', 'GFT'),
  k.E('seedling', 1000, 760, 150), k.E('cup-with-straw', 1160, 700, 160), k.E('leafy-green', 1300, 740, 150), k.E('toothbrush', 1440, 760, 120, { rot: 20 }),
  k.E('recycling-symbol', 60, 60, 170, { shadow: false }), k.vignette(0.16),
].join('');

S.buren = (k) => [
  k.R(0, 0, W, H, k.lin([[0, '1B2550'], [1, '2E3B70']])), ...Array.from({ length: 20 }, (_, i) => k.C((i * 173) % W, (i * 89) % 260, 2.5, '#FFFFFF', { op: 0.8 })),
  k.R(100, 60, 1400, 900, '#000000', { op: 0.3, f: k.blur(16) }),
  // en haut : la fête
  k.R(100, 60, 1400, 430, k.lin([[0, '5B3A8E'], [1, '3E2766']])), ...[['FF5AA8', 350], ['5AC8FF', 800], ['FFD25A', 1250]].map(([c, x]) => k.P(`M${x} 100 L${x - 220} 490 L${x + 220} 490Z`, `#${c}`, { op: 0.18 })),
  k.E('mirror-ball', 720, 70, 160, { shadow: false }), k.E('speaker-high-volume', 160, 270, 200), k.E('woman-dancing', 520, 170, 300), k.E('man-dancing', 880, 170, 300), k.E('musical-notes', 1150, 150, 150, { shadow: false }), k.E('party-popper', 1300, 300, 170),
  k.R(100, 490, 1400, 40, '#8A96A8'), k.R(100, 490, 1400, 10, '#B8C2CF'),
  // en bas : le sommeil impossible
  k.R(100, 530, 1400, 430, k.lin([[0, '2A3A63'], [1, '1E2A4E']])), k.win(1180, 600, 220, 200, { view: 'night', frame: '3E4F86', t: 10 }),
  k.E('bed', 180, 640, 360), k.E('sleepy-face', 470, 600, 220), k.R(720, 720, 230, 110, '#121620', { rx: 14 }), k.T(835, 798, '02:00', 66, '#FF5A4E', { ls: 4 }), k.E('alarm-clock', 960, 700, 150),
  k.vignette(0.2),
].join('');

// ------------------------------------------------------------------ rendu
async function render(name) {
  const k = kit();
  const body = S[name](k);
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${k.defs.join('')}</defs>${body}</svg>`;
  for (const e of k.used) {
    const png = await sharp(emojiFile(e)).png().toBuffer();
    svg = svg.split(`@@${e}@@`).join(`data:image/png;base64,${png.toString('base64')}`);
  }
  fs.mkdirSync(OUT, { recursive: true });
  const img = sharp(Buffer.from(svg), { density: 72 });
  await img.clone().jpeg({ quality: 88, mozjpeg: true }).toFile(path.join(OUT, `${name}.jpg`));
  await sharp(Buffer.from(svg), { density: 72 }).resize(800).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(OUT, `${name}_s.jpg`));
}

if (require.main === module) {
  (async () => {
    const names = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(S);
    for (const nme of names) { await render(nme); console.log('ok', nme); }
  })().catch((e) => { console.error(e); process.exit(1); });
}

module.exports = { S, render, OUT };
