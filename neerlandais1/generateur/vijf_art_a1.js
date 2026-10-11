// Stap voor stap (A1) — les 45 illustrations, avec la boîte à outils de vijf_art.js
// (décors SVG + emoji 3D Fluent, Microsoft, licence MIT). Rendu en JPEG dans img/vijfzinnen/a1_*.jpg
// usage : node vijf_art_a1.js [id…]   (sans argument : toutes les illustrations A1)
const { render, city } = require('./vijf_art');

const W = 1600; const H = 1000;

// ------------------------------------------------------------------ petits éléments propres au deck A1
const X = {
  // bulle de dialogue garnie d'emoji
  say: (k, x, y, w, h, items, tail = 'left') => k.bubble(x, y, w, h, items.map(([e, dx, dy, s]) => k.E(e, x + dx, y + dy, s, { shadow: false })).join(''), tail),
  // bulle de pensée (petits ronds)
  think: (k, x, y, w, h, inner, tx, ty) => k.R(x + 6, y + 10, w, h, '#000000', { op: 0.14, f: k.blur(8), rx: h * 0.45 }) + k.C(tx, ty, 14, '#FFFFFF') + k.C(tx + (x + w / 2 - tx) * 0.35, ty + (y + h - ty) * 0.45, 22, '#FFFFFF') + k.R(x, y, w, h, '#FFFFFF', { rx: h * 0.45 }) + inner,
  // une croix rouge « non »
  no: (k, cx, cy, r) => k.L(cx - r, cy - r, cx + r, cy + r, '#E5484D', r * 0.28) + k.L(cx + r, cy - r, cx - r, cy + r, '#E5484D', r * 0.28),
  // afficheur numérique
  digital: (k, x, y, w, h, t, c = '5BE3A0') => k.R(x + 5, y + 8, w, h, '#000000', { op: 0.2, f: k.blur(6), rx: 12 }) + k.R(x, y, w, h, '#1A1F2B', { rx: 12 }) + k.R(x + 8, y + 8, w - 16, h - 16, '#0E1219', { rx: 8 }) + k.T(x + w / 2, y + h * 0.7, t, h * 0.56, `#${c}`, { ls: 3 }),
  // porte
  door: (k, x, y, w, h, c = '8A6440', label, o = {}) => k.R(x - 12, y - 12, w + 24, h + 12, `#${o.frame || 'FFFFFF'}`, { rx: 4 }) + k.R(x, y, w, h, k.lin([[0, c], [1, c]]), { rx: 3 }) + k.R(x + w * 0.1, y + h * 0.08, w * 0.8, h * 0.36, '#FFFFFF', { op: 0.1, rx: 3 }) + k.R(x + w * 0.1, y + h * 0.52, w * 0.8, h * 0.4, '#000000', { op: 0.07, rx: 3 })
    + k.C(x + w * 0.85, y + h * 0.55, w * 0.05, '#E8C27A') + (label ? k.sign(x + w * 0.15, y + h * 0.16, w * 0.7, h * 0.12, label, o.lc || 'FFFFFF', o.lt || '2B3A55', h * 0.075, { ls: 1 }) : ''),
  // table vue de côté (plateau + pieds)
  table: (k, x, y, w, c1 = 'C99A6B', c2 = '9C7553', legs = 120) => k.El(x + w / 2, y + legs + 26, w * 0.5, 18, '#1B2430', { op: 0.16, f: k.blur(10) }) + k.R(x + 30, y + 20, 18, legs, `#${c2}`, { rx: 4 }) + k.R(x + w - 48, y + 20, 18, legs, `#${c2}`, { rx: 4 })
    + k.R(x - 6, y, w + 12, 32, k.lin([[0, c1], [1, c2]]), { rx: 8 }),
  // nappe à carreaux
  cloth: (k, x, y, w, h, c = 'E05A4E') => {
    let s = k.R(x, y, w, h, '#FFFFFF', { rx: 6 });
    for (let i = 0; i * 40 < w; i += 2) s += k.R(x + i * 40, y, 40, h, `#${c}`, { op: 0.35 });
    for (let j = 0; j * 20 < h; j += 2) s += k.R(x, y + j * 20, w, 20, `#${c}`, { op: 0.35 });
    return s;
  },
  // feuille de papier (formulaire, cv) : lignes grises, rubriques facultatives
  paper: (k, x, y, w, h, o = {}) => {
    let s = k.R(x + 8, y + 12, w, h, '#000000', { op: 0.16, f: k.blur(10), rx: 6 }) + k.R(x, y, w, h, '#FFFFFF', { rx: 6 });
    if (o.title) s += k.T(x + w / 2, y + 70, o.title, o.ts || 44, `#${o.tc || '2B3A55'}`, { ls: 3 });
    const top = y + (o.title ? 110 : 50); const n = o.n || 7;
    for (let i = 0; i < n; i += 1) { const yy = top + i * ((h - (top - y) - 40) / n); if (o.fields) s += k.R(x + 40, yy, w * 0.28, 16, '#C7D0DC', { rx: 4 }) + k.R(x + 50 + w * 0.3, yy - 6, w * 0.62 - 50, 30, '#EEF2F7', { rx: 6, stroke: '#C7D0DC', sw: 2 }); else s += k.R(x + 40, yy, (w - 80) * (0.55 + ((i * 37) % 45) / 100), 14, '#D5DCE6', { rx: 7 }); }
    return s;
  },
  // un téléphone
  phone: (k, x, y, w, h, inner = '') => k.R(x + 10, y + 16, w, h, '#000000', { op: 0.22, f: k.blur(14), rx: w * 0.14 }) + k.R(x, y, w, h, '#20242E', { rx: w * 0.14 }) + k.R(x + w * 0.05, y + w * 0.08, w * 0.9, h - w * 0.16, k.lin([[0, 'F4F7FB'], [1, 'E3EAF3']]), { rx: w * 0.08 }) + k.R(x + w * 0.38, y + w * 0.035, w * 0.24, w * 0.03, '#3A404C', { rx: 4 }) + inner,
  // machine à café
  coffeeMachine: (k, x, y, w, h, broken) => k.R(x + 8, y + 12, w, h, '#000000', { op: 0.2, f: k.blur(10), rx: 14 }) + k.R(x, y, w, h, k.lin([[0, '4A5262'], [1, '2F3542']]), { rx: 14 }) + k.R(x + w * 0.12, y + h * 0.08, w * 0.76, h * 0.22, '#121620', { rx: 8 })
    + k.T(x + w / 2, y + h * 0.23, broken ? 'KAPOT' : 'KOFFIE', h * 0.1, broken ? '#FF5A4E' : '#5BE3A0', { ls: 3 }) + k.R(x + w * 0.3, y + h * 0.42, w * 0.4, h * 0.3, '#1B1F27', { rx: 6 }) + k.R(x + w * 0.44, y + h * 0.42, w * 0.12, h * 0.07, '#8A96A8') + k.R(x + w * 0.1, y + h * 0.82, w * 0.8, h * 0.06, '#8A96A8', { rx: 4 }),
  // maison vue de face
  house: (k, x, y, w, h, c, roof, o = {}) => k.R(x + 10, y + 14, w, h, '#000000', { op: 0.14, f: k.blur(10) }) + k.R(x, y, w, h, k.lin([[0, o.c2 || c], [1, c]])) + k.P(`M${x - 40} ${y + 6} L${x + w / 2} ${y - h * 0.55} L${x + w + 40} ${y + 6}Z`, k.lin([[0, roof], [1, o.roof2 || roof]])),
  // étagère garnie d'objets (emoji)
  shelfRow: (k, x, y, w, items, s = 110) => k.shelf(x, y, w) + items.map((e, i) => k.E(e, x + 10 + i * (w - s) / Math.max(1, items.length - 1), y - s + 8, s, { shadow: false })).join(''),
  // personnes en file (bustes)
  queue: (k, x, y, n, s, list) => Array.from({ length: n }, (_, i) => k.E(list[i % list.length], x + i * s * 0.62, y - (i % 2) * 10, s)).join(''),
  // petit panneau numéroté rond
  dot: (k, cx, cy, r, t, c = 'E8833A') => k.C(cx + 3, cy + 5, r, '#000000', { op: 0.2, f: k.blur(4) }) + k.C(cx, cy, r, `#${c}`) + k.T(cx, cy + r * 0.38, t, r * 1.05, '#FFFFFF', { ls: 0 }),
  // flèche épaisse
  arrow: (k, x1, y1, x2, y2, c = 'E8833A', sw = 10, op = 0.9) => {
    const a = Math.atan2(y2 - y1, x2 - x1); const hx = (d, t) => x2 - Math.cos(a + t) * d; const hy = (d, t) => y2 - Math.sin(a + t) * d;
    return k.L(x1, y1, x2 - Math.cos(a) * 18, y2 - Math.sin(a) * 18, `#${c}`, sw, { op, dash: '22 16' }) + k.P(`M${x2} ${y2} L${hx(40, 0.45)} ${hy(40, 0.45)} L${hx(40, -0.45)} ${hy(40, -0.45)}Z`, `#${c}`, { op });
  },
};

// ------------------------------------------------------------------ les décors
const S = {};

// ================================================================== Section 1 · Premiers pas
S.a1_goedemorgen = (k) => [
  k.sky('F9C89B', 'CFE6F7', 640, '8EC5F0'), k.glow(150, 190, 300, 'FFD38A', 0.8), k.E('sun', 70, 110, 150, { shadow: false }), k.cloud(1250, 140, 90), k.cloud(760, 90, 60, { a: 0.8 }),
  // l'école
  k.R(330, 150, 940, 500, k.lin([[0, 'F2E6D6'], [1, 'E2D2BC']])), k.R(310, 130, 980, 34, '#B5543C', { rx: 6 }), k.bricks(330, 164, 940, 36),
  k.sign(560, 205, 480, 86, 'SCHOOL', '2B3A55', 'FFE6A8', 54, { ls: 12 }),
  k.win(380, 380, 170, 160, { view: 'sky', t: 10 }), k.win(1050, 380, 170, 160, { view: 'sky', t: 10 }),
  X.door(k, 700, 390, 200, 260, '2F6FB5', null, { frame: 'D9C8B0' }), k.clock(800, 330, 46, 8, 0),
  k.tree(150, 470, 260, '79B866'), k.tree(1450, 460, 280, '6DAE5C'),
  k.ground(640, 'D9CDBD', 'B8A994'), k.cobbles(640, '8E7E6A', 0.18),
  k.E('woman-raising-hand', 140, 470, 400), k.E('man-raising-hand', 1080, 480, 400),
  k.E('hot-beverage', 470, 760, 130), k.E('backpack', 1420, 770, 150),
  X.say(k, 470, 330, 250, 130, [['waving-hand', 30, 20, 90], ['sun-with-face', 130, 20, 90]], 'left'),
  X.say(k, 890, 340, 250, 130, [['waving-hand', 30, 20, 90], ['grinning-face', 130, 20, 90]], 'right'),
  k.warm('FFB86B', 0.12), k.vignette(0.18),
].join('');

S.a1_mijndag = (k) => {
  const panel = (x, s1, s2, sky, items) => k.R(x + 8, 70 + 14, 470, 860, '#000000', { op: 0.22, f: k.blur(14), rx: 22 })
    + `<g clip-path="${k.clip(`<rect x="${x}" y="70" width="470" height="860" rx="22"/>`)}">${k.R(x, 70, 470, 860, k.lin([[0, s1], [1, s2]]))}${sky}${items}</g>`;
  return [
    k.R(0, 0, W, H, k.lin([[0, 'EEF2F8'], [1, 'DCE3EE']])),
    panel(45, 'FFD9A8', 'BFE0F5', k.glow(380, 260, 240, 'FFC07A', 0.85) + k.E('sun', 320, 200, 120, { shadow: false }),
      k.R(45, 640, 470, 290, k.lin([[0, 'D8C2A6'], [1, 'BFA382']])) + k.desk(110, 600, 340) + k.E('laptop', 170, 450, 170) + k.E('hot-beverage', 340, 500, 110) + k.E('woman-teacher', 60, 600, 260)),
    panel(565, '7CC0EE', 'E4F3FB', k.glow(800, 150, 240, 'FFF2B0', 0.8) + k.E('sun', 730, 90, 140, { shadow: false }) + k.cloud(650, 230, 50),
      k.R(565, 640, 470, 290, k.lin([[0, '9FC57E'], [1, '6E9E58']])) + k.bench(620, 640, 360) + k.E('sandwich', 690, 470, 190) + k.E('cup-with-straw', 860, 520, 120) + k.E('man-raising-hand', 600, 660, 250)),
    panel(1085, '2A3170', '5A6FB8', k.glow(1400, 170, 200, 'CFD8FF', 0.6) + k.E('crescent-moon', 1340, 100, 130, { shadow: false }) + [[1150, 120], [1230, 220], [1480, 300], [1300, 330]].map(([a, b]) => k.C(a, b, 4, '#FFFFFF', { op: 0.9 })).join(''),
      k.R(1085, 640, 470, 290, k.lin([[0, '7A5636'], [1, '5A3E2B']])) + k.E('television', 1180, 400, 270) + k.E('couch-and-lamp', 1100, 620, 300) + k.E('popcorn', 1420, 700, 120)),
    X.digital(k, 180, 820, 200, 80, '08:00'), X.digital(k, 700, 820, 200, 80, '12:30'), X.digital(k, 1220, 820, 200, 80, '20:00', 'FFB547'),
    k.vignette(0.14),
  ].join('');
};

S.a1_vanavond = (k) => [
  k.wall('3E3A5C', '2C2944', 760), k.glow(420, 380, 520, 'FFC78A', 0.35),
  k.win(980, 110, 460, 380, { view: 'night', frame: '5A5478' }), k.curtain(900, 90, 110, 480, '7E4C97'), k.curtain(1400, 90, 110, 480, '7E4C97'), k.R(890, 82, 640, 16, '#2A2640', { rx: 6 }),
  k.planks(760, '7A5636', '5A3E2B', '3E2A1E'), k.rug(800, 900, 520, 70, '8E6CC8', '6B4A9C'),
  k.E('couch-and-lamp', 80, 360, 560, { flip: true }), k.E('man-raising-hand', 330, 430, 330, { shadow: false }), k.E('popcorn', 560, 640, 150), k.E('mobile-phone', 640, 560, 100, { shadow: false, rot: -14 }),
  k.R(820, 560, 600, 50, '#2A2640', { rx: 8 }), k.R(860, 610, 30, 150, '#2A2640'), k.R(1350, 610, 30, 150, '#2A2640'),
  k.R(880, 270, 520, 300, '#000000', { op: 0.3, f: k.blur(12), rx: 14 }), k.R(860, 250, 520, 300, '#14161E', { rx: 14 }), k.R(878, 268, 484, 264, k.lin([[0, '2E5E8E'], [1, '5BA3D6']]), { rx: 6 }), k.E('film-projector', 1010, 300, 220, { shadow: false }),
  X.digital(k, 1440, 560, 140, 64, '22:00', 'FFB547'),
  X.say(k, 420, 200, 270, 130, [['waving-hand', 30, 20, 90], ['crescent-moon', 140, 20, 90]]),
  k.vignette(0.3),
].join('');

S.a1_vandaag = (k) => [
  k.sky('4FA6E0', 'D6EDFA', 520), k.glow(1380, 120, 320, 'FFE7A6', 0.75), k.E('sun', 1290, 40, 180, { shadow: false }), k.cloud(500, 130, 80, { a: 0.92 }),
  k.sea(500, 170), k.E('sailboat', 300, 400, 130, { shadow: false }),
  k.R(0, 660, W, H - 660, k.lin([[0, 'F6E2B6'], [1, 'E8C98E']])), ...Array.from({ length: 30 }, (_, i) => k.C((i * 151) % W, 690 + ((i * 89) % 300), 3, '#C9A46A', { op: 0.5 })),
  k.E('umbrella-on-ground', 900, 480, 380), k.E('woman-in-lotus-position', 960, 610, 300), k.E('smiling-face-with-sunglasses', 1290, 560, 150, { shadow: false }), k.E('luggage', 1350, 740, 180), k.E('tropical-drink', 820, 800, 120),
  // la pensée : d'habitude, le bureau
  X.think(k, 90, 90, 560, 330, k.R(130, 120, 480, 270, k.lin([[0, 'E9EDF2'], [1, 'D3DAE3']]), { rx: 90 }) + k.E('office-building', 150, 150, 200, { shadow: false }) + k.E('laptop', 340, 190, 140, { shadow: false }) + k.E('briefcase', 470, 210, 120, { shadow: false }) + X.no(k, 370, 255, 120), 760, 580),
  k.sign(100, 470, 330, 90, 'VAKANTIE!', 'E8833A', 'FFFFFF', 50, { ls: 4 }),
  k.warm('FFC48A', 0.1), k.vignette(0.18),
].join('');

S.a1_hoegaathet = (k) => [
  k.wall('EAF1F8', 'D7E2EE', 760), k.win(80, 110, 480, 380, { view: 'city' }),
  k.R(620, 130, 920, 22, '#C9D3DF', { rx: 6 }), k.shelf(700, 300, 360), k.E('teacup-without-handle', 720, 210, 90, { shadow: false }), k.E('hot-beverage', 830, 200, 100, { shadow: false }), k.E('potted-plant', 940, 160, 140, { shadow: false }),
  k.ground(760, 'D8DEE6', 'BCC5D0'),
  k.counter(640, 590, 900, 190, 'B9C4D2', '8E9BAD'), X.coffeeMachine(k, 1180, 330, 230, 270),
  k.E('woman-tipping-hand', 140, 420, 420), k.E('man-raising-hand', 840, 400, 420),
  k.E('hot-beverage', 520, 500, 110, { shadow: false }), k.E('hot-beverage', 1240, 500, 100, { shadow: false }),
  X.say(k, 420, 150, 300, 150, [['grinning-face', 30, 25, 100], ['thumbs-up', 160, 25, 100]], 'left'),
  X.say(k, 930, 170, 220, 140, [['red-question-mark', 60, 20, 100]], 'right'),
  k.vignette(0.18),
].join('');

S.a1_moe = (k) => [
  k.wall('DCE6F2', 'C3D1E3', 740), k.win(1060, 120, 420, 340, { view: 'city', s1: 'B9C7D8', s2: 'E4EAF1' }), k.rain(1060, 120, 420, 340, 40, 0.5),
  k.sign(120, 110, 400, 100, 'MAANDAG', 'E05A4E', 'FFFFFF', 58, { ls: 6 }), k.clock(700, 190, 90, 7, 0),
  k.planks(740, 'C9B79F', 'A99579', '8A7458'),
  k.desk(250, 640, 980), k.E('yawning-face', 560, 260, 380),
  ...[[300, 0], [330, 30], [290, 60], [320, 90]].map(([x, i]) => k.R(x, 560 - i, 210, 34, `#${['FFFFFF', 'F4F1E6', 'E9EEF4', 'FFFFFF'][i / 30]}`, { rx: 4, stroke: '#C7D0DC', sw: 2 })),
  k.E('file-folder', 290, 400, 140, { shadow: false }), k.E('hot-beverage', 950, 520, 120), k.E('hot-beverage', 1060, 530, 110), k.E('hot-beverage', 1150, 540, 100), k.E('zzz', 900, 230, 150, { shadow: false }),
  k.E('alarm-clock', 1300, 760, 170), k.vignette(0.22),
].join('');

S.a1_janssens = (k) => [
  k.wall('F3EDE4', 'E3D8C8', 760), k.R(0, 440, W, 320, k.lin([[0, 'B9CBDD'], [1, 'A3B8CD']])), k.R(0, 430, W, 14, '#8A96A8'),
  X.door(k, 640, 230, 280, 530, '6B4A33'), k.sign(560, 120, 440, 74, 'PRESENTATIE · 14:00', 'E8833A', 'FFFFFF', 36, { ls: 2 }),
  k.board(1100, 50, 420, 220, [['Les 3', 'FFFFFF', 48], ['Hoe gaat het?', 'FFE6A8', 40]]),
  k.ground(760, 'D9D2C6', 'BCB3A5'), ...Array.from({ length: 9 }, (_, i) => k.L(i * 200, 760, i * 260 - 300, H, '#A69C8C', 2, { op: 0.35 })),
  k.E('man-student', 110, 380, 440), k.E('laptop', 420, 640, 150), k.E('anxious-face-with-sweat', 440, 330, 120, { shadow: false }),
  k.E('man-teacher', 1000, 420, 440), k.E('books', 1380, 770, 150),
  X.say(k, 1250, 300, 230, 110, [['waving-hand', 30, 10, 90], ['grinning-face', 125, 10, 90]], 'left'),
  k.vignette(0.2),
].join('');

S.a1_ditbenik = (k) => [
  k.wall('EAF4EC', 'D4E8D9', 750), k.board(80, 90, 600, 320, [['Ik ben …', 'FFFFFF', 60], ['Ik kom uit …', 'FFE6A8', 52]]),
  k.R(780, 100, 400, 290, '#FFFFFF', { rx: 10, stroke: '#C7D0DC', sw: 3 }), k.E('world-map', 840, 110, 280, { shadow: false }), k.E('round-pushpin', 940, 120, 90, { shadow: false }),
  k.win(1260, 110, 280, 300, { view: 'trees' }), k.E('bicycle', 1280, 300, 90, { shadow: false }), k.E('bicycle', 1360, 310, 90, { shadow: false }), k.E('bicycle', 1440, 300, 90, { shadow: false }),
  k.planks(750, 'D8C2A6', 'BFA382'),
  k.E('woman-raising-hand', 520, 360, 460), k.E('cat', 920, 720, 200),
  X.say(k, 120, 470, 330, 140, [['waving-hand', 30, 20, 100], ['woman-student', 170, 20, 100]], 'right'),
  k.desk(1050, 760, 480), k.E('books', 1120, 640, 130), k.E('pencil', 1300, 660, 100, { shadow: false, rot: -30 }),
  k.vignette(0.18),
].join('');

S.a1_emma = (k) => [
  k.wall('FBEAF0', 'F1D2DD', 760), k.bunting(0, 50, 1600, 50, 45, ['E8833A', 'C8102E', '4A90D9', 'F2C14E', '8E6CC8']),
  k.E('balloon', 60, 120, 220, { shadow: false }), k.E('balloon', 1340, 120, 230, { shadow: false, rot: 10 }),
  k.frame(1060, 170, 260, 200, k.R(1082, 192, 216, 156, k.lin([[0, 'BFE0F5'], [1, 'E6F4FC']])) + k.E('man', 1120, 200, 140, { shadow: false })),
  k.planks(760, 'D9B48A', 'B98B62'),
  k.E('woman-teacher', 520, 230, 500), k.E('partying-face', 760, 150, 140, { shadow: false }),
  X.table(k, 140, 640, 380, 'FFFFFF', 'DDD3E2'), k.E('birthday-cake', 200, 420, 240), k.E('wrapped-gift', 1000, 600, 180),
  k.E('dog', 1180, 640, 260), k.confetti(80, 240, 1440, 600, 50, ['E8833A', 'C8102E', '4A90D9', 'F2C14E', '8E6CC8']),
  k.vignette(0.18),
].join('');

S.a1_honger = (k) => [
  k.sky('6FB6EC', 'DCEFFA', 640), k.glow(800, 70, 300, 'FFF2B0', 0.8), k.E('sun', 730, 0, 140, { shadow: false }), k.cloud(260, 150, 80), k.cloud(1300, 120, 90),
  k.gable(0, 160, 300, 480, 'C8A27A', { c2: 'D9B892' }), k.gable(1300, 140, 300, 500, '9EB98E', { c2: 'B7CDA8' }),
  // le frietkot
  k.R(470, 290, 660, 360, k.lin([[0, 'FFF3D6'], [1, 'F6DFAE']]), { rx: 10 }), k.awning(440, 250, 720, 60, 'F2C14E', 'C8102E', 9), k.sign(560, 170, 480, 86, 'FRIETKOT', 'C8102E', 'FFE6A8', 54, { ls: 8 }),
  k.R(520, 360, 560, 160, k.lin([[0, 'BEE3F8'], [1, 'E6F4FC']]), { rx: 8 }), k.E('man-cook', 690, 330, 220, { shadow: false }),
  k.R(450, 520, 700, 40, '#B98A5E', { rx: 8 }), k.E('french-fries', 520, 400, 150), k.E('french-fries', 950, 400, 150),
  k.ground(640, 'CDB295', 'A8896A'), k.cobbles(640, '7E6248', 0.22),
  k.E('man-raising-hand', 80, 520, 400), k.E('woman-shrugging', 1140, 520, 400),
  X.say(k, 260, 330, 230, 140, [['sandwich', 20, 15, 110], ['red-question-mark', 120, 20, 100]], 'left'),
  k.vignette(0.18),
].join('');

S.a1_klas = (k) => [
  k.wall('F4EEE2', 'E5DAC7', 720), k.board(330, 80, 940, 330, [['Er is … · Er zijn …', 'FFFFFF', 62], ['1 2 3 4 5 6 7 8 9 10 11 12', 'FFE6A8', 40]]),
  k.clock(1440, 110, 60, 10, 10), k.win(40, 120, 220, 300, { view: 'trees' }),
  k.planks(720, 'D8C2A6', 'BFA382'),
  k.E('man-teacher', 1250, 360, 360), k.shelf(1300, 330, 200), k.E('teacup-without-handle', 1355, 240, 90, { shadow: false }), X.no(k, 1400, 285, 50),
  ...[[60, 520, 'woman-student'], [330, 500, 'man-student'], [600, 520, 'woman-student'], [870, 500, 'man-student'], [200, 680, 'man-student'], [470, 690, 'woman-student'], [740, 680, 'man-student'], [1010, 690, 'woman-student']].map(([x, y, e]) => k.E(e, x, y - 60, 220)),
  ...[[60, 650], [330, 630], [600, 650], [870, 630]].map(([x, y]) => k.R(x - 10, y, 250, 26, '#A5784C', { rx: 5 })),
  k.vignette(0.2),
].join('');

S.a1_totstraks = (k) => [
  k.wall('EEF3F1', 'D6E3DF', 760), k.sign(560, 70, 480, 90, 'CAFETARIA', '3E8C6A', 'FFFFFF', 52, { ls: 8 }), k.clock(260, 200, 92, 1, 58),
  X.door(k, 1220, 230, 280, 530, '4A7BD0', 'LES 14:00', { lc: 'FFFFFF', lt: '2B3A55' }),
  k.ground(760, 'D9D2C6', 'BCB3A5'),
  k.table(500, 610, 420), k.E('hot-beverage', 520, 510, 120), k.E('croissant', 640, 520, 110),
  k.E('man-raising-hand', 120, 420, 420), k.E('woman-running', 860, 360, 420),
  X.arrow(k, 1080, 560, 1200, 560, 'E8833A', 12),
  X.say(k, 300, 250, 230, 120, [['waving-hand', 30, 15, 90], ['hourglass-not-done', 120, 15, 90]], 'left'),
  k.vignette(0.18),
].join('');

S.a1_fijneavond = (k) => [
  k.wall('F3E6D8', 'E3CFB8', 760), k.win(100, 100, 560, 400, { view: 'city', s1: 'F59E6B', s2: 'FCD9A8' }), k.glow(380, 420, 300, 'FFB86B', 0.35),
  k.clock(840, 190, 90, 6, 0), k.R(1040, 200, 14, 380, '#6E5038'), k.R(980, 200, 140, 14, '#6E5038'), k.E('coat', 940, 230, 150, { shadow: false }), k.E('scarf', 1060, 250, 120, { shadow: false }),
  k.planks(760, 'C99A6B', 'A5784C'),
  k.desk(1150, 640, 400), k.E('desktop-computer', 1230, 470, 180), k.E('potted-plant', 1440, 470, 150),
  k.E('woman-walking', 600, 380, 420, { flip: true }), k.E('handbag', 560, 640, 110), k.E('man-raising-hand', 120, 430, 400),
  X.say(k, 330, 240, 260, 130, [['waving-hand', 30, 20, 90], ['sunset', 140, 20, 90]], 'left'),
  k.warm('FF9E5B', 0.14), k.vignette(0.22),
].join('');

S.a1_steljezelfvoor = (k) => [
  k.wall('EFE9F7', 'DED3EE', 760), k.pendant(800, 0, 70),
  k.planks(760, 'D8C2A6', 'BFA382'),
  k.E('man-raising-hand', 600, 330, 440),
  // ce que Lucas raconte, en cinq bulles
  ...[['waving-hand', 120, 120], ['house', 330, 70], ['cat', 1080, 70], ['bicycle', 1290, 120], ['hourglass-not-done', 1290, 380]].map(([e, x, y], i) => X.say(k, x, y, 190, 150, [[e, 45, 22, 100]], i < 2 ? 'right' : 'left') + X.dot(k, x + 175, y + 10, 26, `${i + 1}`, '5FA873')),
  k.sign(130, 380, 280, 80, 'NAMEN', '2B3A55', 'FFFFFF', 44, { ls: 6 }),
  k.E('woman-student', 60, 620, 300), k.E('man-student', 1240, 620, 300), k.E('woman-raising-hand', 300, 660, 260), k.E('man-office-worker', 1030, 660, 260),
  k.vignette(0.2),
].join('');

// ================================================================== Section 2 · Grammaire
S.a1_ontbijttafel = (k) => [
  k.wall('FFF4E3', 'F6E2C6', 700), k.win(980, 90, 480, 380, { view: 'trees', s1: 'FFD9A8', s2: 'E6F3FC' }), k.glow(1220, 260, 360, 'FFE39A', 0.45),
  k.shelf(140, 300, 420), k.E('teapot', 170, 200, 110, { shadow: false }), k.E('potted-plant', 300, 170, 140, { shadow: false }), k.E('jar', 450, 210, 100, { shadow: false }),
  k.planks(700, 'D8C2A6', 'BFA382'),
  X.cloth(k, 360, 600, 1160, 70, 'E05A4E'), k.R(360, 670, 1160, 30, '#C9A989'), k.R(410, 700, 30, 200, '#9C7553'), k.R(1440, 700, 30, 200, '#9C7553'), k.El(940, 910, 600, 22, '#1B2430', { op: 0.15, f: k.blur(10) }),
  k.E('hot-beverage', 400, 470, 150), k.E('bread', 570, 470, 170), k.E('banana', 760, 500, 130), k.E('cheese-wedge', 1010, 500, 130),
  k.E('cat', 1060, 380, 230), k.E('cat', 1270, 420, 200, { flip: true }),
  k.E('woman-gesturing-no', 20, 500, 380), k.E('red-exclamation-mark', 1120, 260, 110, { shadow: false }),
  k.vignette(0.18),
].join('');

S.a1_bakker = (k) => [
  k.wall('FBEEDC', 'F1DCC0', 760), k.sign(560, 60, 480, 96, 'BAKKER', '8A5A2B', 'FFE6A8', 62, { ls: 14 }),
  X.shelfRow(k, 120, 330, 560, ['bread', 'baguette-bread', 'bread', 'baguette-bread'], 130), X.shelfRow(k, 920, 330, 560, ['croissant', 'pie', 'croissant', 'pretzel'], 120),
  k.E('woman-cook', 640, 160, 330, { shadow: false }),
  k.planks(760, 'D9B48A', 'B98B62'),
  k.counter(380, 470, 840, 260, 'C7955F', 'A3733F'), k.R(420, 490, 760, 120, k.lin([[0, 'E6F4FC', 0.85], [1, 'FFFFFF', 0.6]]), { rx: 8 }),
  k.E('cupcake', 450, 490, 110, { shadow: false }), k.E('shortcake', 600, 490, 110, { shadow: false }), k.E('cookie', 760, 500, 100, { shadow: false }), k.E('doughnut', 900, 500, 100, { shadow: false }), k.E('birthday-cake', 1040, 470, 130, { shadow: false }),
  k.sign(470, 640, 110, 50, '€ 2', 'FFFFFF', '2B3A55', 30, { ls: 0 }), k.sign(760, 640, 110, 50, '€ 1', 'FFFFFF', '2B3A55', 30, { ls: 0 }), k.sign(1040, 640, 120, 50, '€ 15', 'FFFFFF', '2B3A55', 30, { ls: 0 }),
  k.E('woman-raising-hand', 0, 480, 400), k.E('girl', 330, 760, 200), k.E('boy', 560, 780, 190), k.E('girl', 1100, 770, 200), k.E('boy', 1330, 760, 210),
  k.warm('FFB86B', 0.1), k.vignette(0.2),
].join('');

S.a1_spullen = (k) => [
  k.wall('EEF1F7', 'DCE2EE', 640), k.board(420, 60, 760, 260, [['Les 5 · Deze · dit · mijn', 'FFFFFF', 46], ['Tot morgen!', 'FFE6A8', 44]]),
  k.planks(640, 'D8C2A6', 'BFA382'),
  X.table(k, 120, 600, 1360, 'D9B48A', 'A5784C', 200),
  k.E('pen', 200, 520, 110, { shadow: false, rot: -20 }), k.sign(170, 640, 150, 46, 'PIETER', '4A7BD0', 'FFFFFF', 26, { ls: 2 }),
  k.E('green-book', 420, 470, 150), k.sign(420, 640, 150, 46, 'EMMA', 'D9488A', 'FFFFFF', 26, { ls: 2 }),
  k.E('handbag', 680, 440, 180), k.E('backpack', 940, 420, 200), k.E('laptop', 1180, 470, 160),
  k.E('woman-shrugging', 560, 660, 330), X.think(k, 940, 700, 330, 200, k.E('mobile-phone', 990, 715, 160, { shadow: false }) + k.E('red-question-mark', 1110, 720, 140, { shadow: false }), 860, 860),
  k.vignette(0.2),
].join('');

S.a1_huisvansarah = (k) => [
  k.sky('6FB6EC', 'DCEFFA', 690), k.glow(1420, 120, 300, 'FFE7A6', 0.7), k.E('sun', 1340, 40, 160, { shadow: false }), k.cloud(330, 130, 90), k.cloud(980, 90, 70, { a: 0.85 }),
  k.R(0, 520, W, 170, k.lin([[0, 'A8D58A'], [1, '86C06A']])), k.tree(140, 470, 300, '6DAE5C'), k.tree(1480, 480, 260, '79B866'),
  X.house(k, 460, 300, 680, 400, 'F6E6CF', 'B5543C', { c2: 'FFF4E2', roof2: '8C3E2C' }),
  X.door(k, 740, 460, 120, 240, 'D93A3A', null, { frame: 'FFFFFF' }), k.win(530, 400, 150, 130, { view: 'sky', t: 10 }), k.win(920, 400, 150, 130, { view: 'sky', t: 10 }),
  k.R(890, 552, 210, 14, '#6E5038'), ...Array.from({ length: 7 }, (_, i) => k.R(895 + i * 33, 506, 8, 50, '#6E5038')), k.R(890, 500, 210, 8, '#6E5038'), k.win(720, 170, 160, 100, { view: 'sky', t: 8 }),
  k.ground(690, '8CC56E', '5E9E4A'), ...Array.from({ length: 20 }, (_, i) => k.R(i * 82, 650, 14, 90, '#FFFFFF', { rx: 4 })), k.R(0, 670, W, 12, '#FFFFFF'), k.R(0, 710, W, 12, '#FFFFFF'),
  k.E('tulip', 380, 640, 110), k.E('tulip', 1150, 640, 110), k.E('woman-raising-hand', 40, 600, 360),
  k.E('dog', 600, 640, 320), k.E('dog', 900, 650, 300, { flip: true }),
  k.vignette(0.16),
].join('');

S.a1_vragen = (k) => [
  k.wall('F2F0FA', 'E0DCF0', 720), k.win(640, 90, 320, 300, { view: 'trees' }), k.clock(1350, 160, 74, 9, 15),
  k.planks(720, 'D8C2A6', 'BFA382'),
  k.E('woman-raising-hand', 120, 380, 420), k.E('man-student', 1060, 380, 420, { flip: true }),
  X.table(k, 380, 700, 840, 'D9B48A', 'A5784C', 160), k.E('teacup-without-handle', 560, 600, 110), k.E('notebook', 860, 610, 110),
  ...[['identification-card', 160, 80], ['house', 470, 150], ['speaking-head', 1000, 150], ['teacup-without-handle', 1290, 300]].map(([e, x, y], i) => X.say(k, x, y, 190, 140, [[e, 22, 22, 96], ['red-question-mark', 110, 30, 70]], i < 2 ? 'left' : 'right')),
  k.vignette(0.18),
].join('');

S.a1_slechtedag = (k) => [
  k.sky('7D8796', 'C2CAD4', 640), city(k, 640, 12, ['9AA6B6', '8794A6', 'A7B2C1'], 0.9), k.E('cloud-with-rain', 120, 20, 260, { shadow: false }), k.E('cloud-with-lightning-and-rain', 1100, 10, 260, { shadow: false }),
  k.road(640, 140), k.E('bus', 1300, 470, 260, { shadow: false }),
  k.ground(780, '8D98A6', '6D7786'), k.puddle(400, 900, 200, 28), k.puddle(1200, 930, 160, 22),
  k.R(240, 380, 16, 420, '#4A5262'), k.sign(170, 320, 160, 90, 'BUS', '2F6FB5', 'FFFFFF', 50, { ls: 4 }),
  k.E('woman-facepalming', 380, 450, 380), k.E('closed-umbrella', 330, 640, 140),
  k.E('hot-beverage', 820, 720, 120), X.no(k, 880, 780, 60),
  X.think(k, 1000, 320, 300, 190, k.E('pizza', 1040, 335, 150, { shadow: false }) + k.E('crescent-moon', 1180, 350, 90, { shadow: false }), 820, 560),
  k.rain(0, 0, W, 980, 150, 0.45), k.vignette(0.25),
].join('');

S.a1_hoelaat = (k) => [
  k.wall('FCE9D6', 'F2D3B5', 760), k.win(1040, 110, 460, 380, { view: 'city' }), k.E('bus', 1170, 330, 170, { shadow: false, flip: true }),
  k.clock(560, 260, 170, 8, 30), k.sign(120, 110, 300, 80, 'MAANDAG', 'E05A4E', 'FFFFFF', 46, { ls: 4 }), X.digital(k, 120, 230, 240, 90, '08:30', 'FF5A4E'),
  k.planks(760, 'C99A6B', 'A5784C'),
  k.E('bed', 30, 560, 420), k.E('woman-running', 700, 420, 420), k.E('croissant', 980, 480, 110, { shadow: false }), k.E('backpack', 1300, 760, 170),
  X.arrow(k, 1000, 640, 1220, 640, 'E8833A', 12),
  k.vignette(0.2),
].join('');

S.a1_kat = (k) => [
  k.wall('EAF2F6', 'D2E2EA', 720), k.win(160, 110, 380, 320, { view: 'trees' }), k.R(130, 440, 440, 26, '#FFFFFF', { rx: 4 }),
  X.door(k, 1250, 200, 260, 520, 'F2F4F7', null, { frame: 'D9DEE6' }), k.sign(1270, 140, 220, 60, 'KEUKEN', '3E8C6A', 'FFFFFF', 32, { ls: 3 }), k.E('fish', 1300, 400, 160, { shadow: false }),
  k.planks(720, 'C99A6B', 'A5784C'),
  X.table(k, 600, 520, 380, 'D9B48A', 'A5784C', 200), k.E('cat', 690, 350, 190),
  k.R(266, 776, 260, 170, '#000000', { op: 0.2, f: k.blur(8), rx: 6 }), k.R(260, 760, 260, 170, k.lin([[0, 'C08A4E'], [1, '9A6A36']]), { rx: 6 }), k.R(240, 740, 300, 40, '#AD7A42', { rx: 6 }), k.L(390, 760, 390, 930, '#8A5A2B', 3, { op: 0.5 }), k.E('cat-face', 320, 640, 150, { shadow: false }),
  k.E('cat', 300, 330, 140, { shadow: false }), k.E('zzz', 420, 260, 90, { shadow: false }),
  k.E('cat', 1060, 760, 160, { flip: true }),
  X.dot(k, 680, 340, 30, '1'), X.dot(k, 250, 640, 30, '2'), X.dot(k, 290, 320, 30, '3'), X.dot(k, 1060, 740, 30, '4'),
  X.arrow(k, 1180, 840, 1290, 720, 'E8833A', 10),
  k.vignette(0.2),
].join('');

S.a1_kopje = (k) => [
  k.sky('8EC9EE', 'E6F4FC', 700), k.cloud(1300, 110, 80),
  k.R(120, 140, 1360, 560, k.lin([[0, 'DCEFE3'], [1, 'C2E2CD']])), k.awning(90, 230, 1420, 64, '2E8B57', 'FFFFFF', 18), k.sign(560, 120, 480, 90, 'HET HOEKJE', '2E8B57', 'FFFFFF', 52, { ls: 8 }),
  k.win(200, 360, 360, 260, { view: 'city', frame: '2E5E46', t: 12 }), k.win(1040, 360, 360, 260, { view: 'city', frame: '2E5E46', t: 12 }), k.sign(1080, 420, 280, 70, 'IJSJES', 'FFFFFF', 'D9488A', 40, { ls: 6 }),
  k.E('potted-plant', 30, 520, 190), k.E('potted-plant', 1380, 520, 190),
  k.ground(700, 'E2D3C0', 'C4B096'), k.cobbles(700, '8E7E6A', 0.18),
  k.E('woman-tipping-hand', 230, 440, 360), k.E('man-raising-hand', 1000, 440, 360),
  k.table(800, 700, 400), k.E('hot-beverage', 650, 610, 100, { so: 0.15 }), k.E('sandwich', 760, 600, 120, { so: 0.15 }), k.E('soft-ice-cream', 870, 570, 110, { so: 0.15 }), k.E('soft-ice-cream', 950, 590, 100, { so: 0.15 }),
  k.warm('FFC77D', 0.08), k.vignette(0.18),
].join('');

S.a1_kommaarbinnen = (k) => [
  k.R(0, 0, W, H, k.lin([[0, 'E9EEF4'], [1, 'D3DAE3']])), k.R(0, 440, W, 320, k.lin([[0, 'C9D7E6'], [1, 'B4C5D8']])),
  X.door(k, 160, 200, 300, 560, 'D9A86C', 'LOKAAL 12', { frame: 'FFFFFF', lc: '2F6FB5', lt: 'FFFFFF' }),
  k.board(620, 80, 880, 300, [['Les 1', 'FFFFFF', 56], ['Luister · Kijk · Lees', 'FFE6A8', 46]]),
  k.ground(760, 'D9D2C6', 'BCB3A5'),
  k.E('woman-tipping-hand', 520, 380, 420), k.E('man-student', 200, 470, 330), k.E('woman-student', 1000, 470, 330), k.E('man-student', 1250, 500, 300, { flip: true }),
  k.E('handbag', 1180, 820, 130), k.E('mobile-phone', 1210, 760, 80, { shadow: false, rot: -10 }), X.no(k, 1250, 800, 46),
  k.vignette(0.18),
].join('');

// ================================================================== Section 3 · Vocabulaire
S.a1_aangenaam = (k) => [
  k.wall('2E3A5C', '1F2842', 760), k.pendant(380, 0, 60, 'F2C14E'), k.pendant(1220, 0, 60, 'F2C14E'),
  k.sign(560, 90, 480, 90, 'NETWERKDAG', 'F2C14E', '2B2F38', 50, { ls: 8 }),
  k.planks(760, '8A6A55', '6B4F3E', '4E3A2D'),
  k.E('man-office-worker', 80, 380, 450), k.E('woman-office-worker', 1070, 380, 450),
  k.E('handshake', 620, 330, 340), k.E('identification-card', 470, 640, 150, { rot: -12 }), k.E('identification-card', 990, 650, 140, { rot: 10 }),
  k.table(800, 760, 260, 'FFFFFF'), k.E('wine-glass', 690, 650, 110), k.E('cup-with-straw', 820, 660, 100),
  k.warm('FFC77D', 0.08), k.vignette(0.3),
].join('');

S.a1_oma = (k) => [
  k.wall('FBEFE0', 'F1DCC2', 760), ...Array.from({ length: 60 }, (_, i) => k.C(40 + (i % 12) * 135 + (Math.floor(i / 12) % 2) * 66, 60 + Math.floor(i / 12) * 130, 9, '#E8A07A', { op: 0.35 })), k.pendant(800, 0, 40, 'E8833A'),
  k.frame(1150, 120, 300, 230, k.R(1172, 142, 256, 186, k.lin([[0, '8EC5F0'], [1, 'E6F4FC']])) + k.E('old-man', 1230, 160, 150, { shadow: false })),
  k.planks(760, 'C99A6B', 'A5784C'),
  k.E('man', 140, 360, 290), k.E('woman', 400, 350, 300), k.E('old-woman', 660, 300, 340), k.E('girl', 1010, 380, 270), k.E('boy', 1240, 390, 260),
  X.cloth(k, 120, 620, 1360, 60, 'E8833A'), k.R(120, 680, 1360, 28, '#C9A989'), k.R(170, 708, 30, 190, '#9C7553'), k.R(1400, 708, 30, 190, '#9C7553'),
  k.E('pot-of-food', 760, 560, 120), k.E('green-salad', 300, 570, 100), k.E('bread', 560, 570, 100),
  k.E('baby', 1040, 560, 130), k.E('french-fries', 1170, 560, 110),
  k.warm('FFB86B', 0.1), k.vignette(0.2),
].join('');

S.a1_stad = (k) => [
  k.sky('7CC0EE', 'E4F3FB', 560), k.cloud(260, 110, 90), k.cloud(1180, 80, 70, { a: 0.85 }),
  // la gare et son horloge
  k.R(1050, 150, 120, 260, k.lin([[0, 'D8B48A'], [1, 'B98A5E']])), k.clock(1110, 210, 44, 8, 40), k.R(900, 290, 640, 270, k.lin([[0, 'E2C49E'], [1, 'C8A27A']])), k.P('M880 300 Q1220 170 1560 300Z', '#8A5A3A'),
  ...[960, 1110, 1260, 1410].map((x) => k.R(x, 380, 90, 150, k.lin([[0, '9CC7EA'], [1, 'E6F3FC']]), { rx: 45 })), k.sign(1070, 300, 300, 56, 'STATION', '2B3A55', 'FFFFFF', 32, { ls: 6 }),
  k.gable(20, 180, 260, 380, 'C97B6E', { c2: 'D99A8E' }), k.gable(290, 150, 280, 410, 'E2C45E', { c2: 'EDD587', cols: 3 }), k.gable(580, 200, 260, 360, '8FA9B8', { c2: 'A9C1CE' }),
  // le pont et l'eau
  k.R(0, 560, W, 70, k.lin([[0, '5DA9D6'], [1, '3E86B8']])), k.P('M560 560 Q760 470 960 560Z', '#A9B2BE'), k.R(540, 540, 440, 22, '#8A96A8'),
  k.road(630, 150), k.E('tram', 980, 470, 300),
  k.ground(780, 'D9D2C6', 'BCB3A5'),
  k.R(1420, 420, 18, 400, '#3A404C'), k.E('vertical-traffic-light', 1360, 300, 160, { shadow: false }),
  k.E('woman-biking', 260, 580, 400), X.arrow(k, 680, 900, 1000, 900, 'E8833A', 10),
  k.vignette(0.18),
].join('');

S.a1_avondeten = (k) => [
  k.wall('F4E6D6', 'E6CFB4', 700), k.win(1100, 90, 380, 300, { view: 'night' }),
  ...Array.from({ length: 12 }, (_, i) => k.R(80 + (i % 6) * 110, 120 + Math.floor(i / 6) * 70, 104, 64, '#FFFFFF', { op: 0.55, rx: 4 })),
  k.planks(700, 'B9A38A', '9C8670', '7A6650'),
  // la cuisinière et la poêle qui fume
  k.R(380, 520, 520, 330, k.lin([[0, 'E9EEF4'], [1, 'C9D2DD']]), { rx: 10 }), k.R(380, 500, 520, 40, '#3A404C', { rx: 8 }), k.R(440, 640, 400, 160, '#2B3140', { rx: 10 }), k.R(460, 660, 360, 120, '#FF8A3D', { op: 0.25, rx: 8 }),
  k.El(640, 470, 170, 40, '#2B2F38'), k.R(800, 460, 180, 18, '#2B2F38', { rx: 8 }), k.El(640, 450, 120, 36, '#000000', { op: 0.7 }), k.E('fish', 560, 360, 160, { shadow: false, op: 0.45 }),
  ...[[600, 300, 50], [660, 230, 64], [580, 170, 78], [680, 100, 90]].map(([x, y, r]) => k.C(x, y, r, '#6B7280', { op: 0.35, f: k.blur(10) })),
  k.E('man-cook', 920, 380, 400), k.E('grimacing-face', 1240, 330, 130, { shadow: false }),
  k.R(60, 620, 300, 30, '#B98A5E', { rx: 6 }), k.E('carrot', 70, 520, 110), k.E('broccoli', 180, 520, 110), k.E('french-fries', 120, 720, 150), k.E('wine-glass', 1380, 760, 120),
  k.vignette(0.22),
].join('');

S.a1_supermarkt = (k) => [
  k.wall('EEF4F8', 'DCE7EF', 640), k.sign(560, 40, 480, 80, 'SUPERMARKT', 'E05A4E', 'FFFFFF', 46, { ls: 8 }),
  X.shelfRow(k, 60, 260, 640, ['canned-food', 'canned-food', 'canned-food', 'glass-of-milk', 'glass-of-milk'], 100), X.shelfRow(k, 60, 420, 640, ['red-apple', 'banana', 'carrot', 'bread', 'cheese-wedge'], 100),
  X.shelfRow(k, 60, 580, 640, ['bottle-with-popping-cork', 'cup-with-straw', 'teacup-without-handle', 'chocolate-bar', 'cookie'], 100),
  k.ground(640, 'E3E7EC', 'C6CDD6'),
  // la caisse
  k.counter(820, 560, 700, 200, '8E9BAD', '6B7891'), k.R(840, 540, 420, 24, '#2B3140', { rx: 8 }), k.sign(1300, 160, 220, 70, 'KASSA 3', '2E8B57', 'FFFFFF', 38, { ls: 4 }), k.E('woman-office-worker', 1240, 300, 260, { shadow: false }), X.digital(k, 990, 430, 220, 76, '€ 42,00', 'FFB547'),
  k.P('M1050 560 C 1040 700, 1120 760, 1080 900 S 1010 990, 1060 1000', 'none', { stroke: '#FFFFFF', sw: 46 }), ...Array.from({ length: 9 }, (_, i) => k.L(1040 + (i % 2) * 10, 600 + i * 42, 1080 + (i % 2) * 10, 600 + i * 42, '#B8C2CF', 4)),
  k.E('shopping-cart', 300, 640, 340), k.E('woman-raising-hand', 560, 600, 340), k.E('face-with-open-mouth', 840, 640, 120, { shadow: false }),
  k.vignette(0.18),
].join('');

S.a1_ziek = (k) => [
  k.wall('E4EEF6', 'CDDCEA', 740), k.win(1120, 100, 360, 300, { view: 'sky', s1: 'B9C7D8', s2: 'E4EAF1' }), k.curtain(1060, 80, 100, 400, '9AA6C8'), k.curtain(1440, 80, 100, 400, '9AA6C8'),
  k.planks(740, 'C9B79F', 'A99579', '8A7458'),
  k.E('bed', 100, 380, 620), k.E('face-with-thermometer', 170, 480, 220, { shadow: false }),
  k.R(780, 600, 300, 26, '#B98A5E', { rx: 6 }), k.R(800, 626, 260, 180, k.lin([[0, 'C99A6B'], [1, 'A5784C']]), { rx: 6 }), k.E('mobile-phone', 800, 500, 110), k.E('pill', 920, 520, 90), k.E('roll-of-paper', 990, 500, 100),
  k.sign(840, 130, 220, 90, '39 °C', 'E05A4E', 'FFFFFF', 52, { ls: 0 }), k.E('thermometer', 780, 110, 110, { shadow: false }),
  X.think(k, 1150, 500, 360, 210, k.E('old-woman', 1180, 520, 160, { shadow: false }) + k.E('pot-of-food', 1330, 540, 140, { shadow: false }), 1000, 420),
  k.vignette(0.22),
].join('');

S.a1_kantoor = (k) => [
  k.wall('EEF2F7', 'DCE3EE', 740), k.blinds(80, 90, 620, 380), k.E('potted-plant', 720, 330, 170, { shadow: false }),
  k.planks(740, 'C8CDD4', 'AEB5BF', '8A929E'),
  k.desk(120, 610, 760), k.E('desktop-computer', 220, 410, 220), k.E('printer', 560, 450, 180), k.E('man-office-worker', 300, 600, 300),
  k.E('woman-office-worker', 900, 380, 360), X.say(k, 900, 180, 220, 130, [['grinning-face', 25, 20, 90], ['thumbs-up', 120, 20, 90]], 'left'),
  X.coffeeMachine(k, 1290, 300, 240, 300, true), k.R(1270, 600, 280, 160, k.lin([[0, 'B9C4D2'], [1, '8E9BAD']]), { rx: 8 }),
  ...[[1380, 250, 30], [1430, 190, 42], [1370, 130, 50]].map(([x, y, r]) => k.C(x, y, r, '#6B7280', { op: 0.35, f: k.blur(8) })), k.E('collision', 1440, 260, 100, { shadow: false }),
  k.vignette(0.18),
].join('');

S.a1_berichtje = (k) => [
  k.R(0, 0, W, H, k.lin([[0, 'A8C4DD'], [1, 'D7E3EE']])), `<g filter="${k.blur(5)}">${city(k, 640, 12, ['B8CBE0', 'A6BCD6', 'C7D6E7'])}${k.road(640, 140)}</g>`, k.ground(780, 'C6CDD6', 'A9B2BE'),
  k.E('woman-running', 880, 400, 430), k.E('bus', 1390, 520, 180, { shadow: false, op: 0.9 }),
  X.phone(k, 280, 70, 460, 880,
    k.R(310, 140, 400, 60, '#5FA873', { rx: 10 }) + k.T(510, 182, 'Pieter', 34, '#FFFFFF', { ls: 1 })
    + k.R(330, 240, 300, 80, '#FFFFFF', { rx: 26 }) + k.R(360, 270, 200, 18, '#C7D0DC', { rx: 9 })
    + k.R(390, 360, 300, 150, '#DCF8C6', { rx: 26 }) + k.R(420, 390, 230, 18, '#9CC89A', { rx: 9 }) + k.R(420, 425, 190, 18, '#9CC89A', { rx: 9 }) + k.R(420, 460, 210, 18, '#9CC89A', { rx: 9 })
    + k.R(390, 540, 300, 80, '#DCF8C6', { rx: 26 }) + k.R(420, 570, 150, 18, '#9CC89A', { rx: 9 })
    + k.R(310, 840, 400, 60, '#FFFFFF', { rx: 30, stroke: '#C7D0DC', sw: 3 })),
  k.E('low-battery', 600, 620, 150, { shadow: false }), k.E('electric-plug', 360, 650, 120, { shadow: false }), X.no(k, 420, 710, 60),
  k.vignette(0.2),
].join('');

S.a1_gemeentehuis = (k) => [
  k.wall('F3EFE6', 'E3DCCB', 720), k.E('classical-building', 80, 60, 150, { shadow: false }), k.sign(250, 90, 440, 90, 'GEMEENTEHUIS', '2B3A55', 'FFFFFF', 46, { ls: 6 }),
  X.digital(k, 1200, 80, 300, 100, 'Nr. 57', 'FF5A4E'),
  ...[0, 1, 2].map((i) => k.R(760 + i * 280, 240, 250, 300, k.lin([[0, 'DCE9F5'], [1, 'C2D6EA']]), { rx: 8 }) + k.sign(790 + i * 280, 260, 190, 56, `LOKET ${i + 1}`, '4A7BD0', 'FFFFFF', 30, { ls: 2 })),
  k.E('woman-office-worker', 800, 340, 200, { shadow: false }), k.E('man-office-worker', 1360, 340, 200, { shadow: false }),
  k.counter(740, 520, 840, 200, 'B5A48E', '8F7D66'),
  k.planks(720, 'D9D2C6', 'BCB3A5', 'A69C8C'),
  ...[['man-standing', 40], ['woman-standing', 170], ['person-standing', 300], ['man-standing', 430], ['woman-standing', 560], ['person-standing', 690]].map(([e, x], i) => k.E(e, x, 470 + (i % 2) * 14, 300)),
  k.E('woman-tipping-hand', 1000, 620, 330), k.E('clipboard', 1300, 760, 150), k.E('blue-book', 1420, 770, 130),
  k.vignette(0.18),
].join('');

S.a1_winter = (k) => [
  k.sky('8FA6C2', 'DCE5EF', 640), ...Array.from({ length: 70 }, (_, i) => k.C((i * 131) % W, (i * 67) % 980, 4 + (i % 3) * 2, '#FFFFFF', { op: 0.85 })),
  X.house(k, 100, 330, 420, 320, 'C97B6E', 'FFFFFF', { roof2: 'E3EAF3' }), k.win(170, 420, 110, 110, { view: 'night', t: 8 }), k.win(340, 420, 110, 110, { view: 'night', t: 8 }), k.R(170, 420, 110, 110, '#FFD98A', { op: 0.6 }), k.R(340, 420, 110, 110, '#FFD98A', { op: 0.6 }),
  k.tree(1450, 470, 260, '4E8A6A'), k.P('M1340 380 Q1450 300 1560 380 Q1450 350 1340 380Z', '#FFFFFF'),
  k.ground(640, 'FFFFFF', 'E3EAF3'), ...Array.from({ length: 8 }, (_, i) => k.El((i * 233) % W, 700 + ((i * 71) % 250), 120, 14, '#C9D6E6', { op: 0.5 })),
  k.E('snowman', 600, 380, 380), k.E('woman-walking', 1000, 420, 380),
  k.R(1420, 560, 16, 300, '#4A5262'), k.sign(1340, 470, 180, 100, '−5 °C', '4A90D9', 'FFFFFF', 52, { ls: 0 }), k.E('cold-face', 1180, 300, 130, { shadow: false }),
  X.think(k, 80, 80, 330, 200, k.E('hot-beverage', 120, 95, 150, { shadow: false }) + k.E('house', 260, 100, 130, { shadow: false }), 500, 380),
  k.vignette(0.18),
].join('');

S.a1_karaoke = (k) => [
  k.R(0, 0, W, H, k.lin([[0, '24164A'], [1, '3B2470']])), ...[['FF5AA8', 300], ['5AC8FF', 800], ['FFD25A', 1300]].map(([c, x]) => k.P(`M${x} 0 L${x - 260} 760 L${x + 260} 760Z`, `#${c}`, { op: 0.16 })),
  k.E('mirror-ball', 720, 20, 160, { shadow: false }),
  k.R(980, 170, 520, 300, '#000000', { op: 0.3, f: k.blur(12), rx: 12 }), k.R(960, 150, 520, 300, '#0E1219', { rx: 12 }), ...[0, 1, 2].map((i) => k.R(1010, 220 + i * 70, [380, 300, 340][i], 26, i === 1 ? '#FFD25A' : '#FFFFFF', { rx: 13, op: 0.85 })),
  k.R(0, 760, W, 240, k.lin([[0, '5A3E8E'], [1, '3E2766']])), k.R(0, 760, W, 14, '#8E6CC8'),
  k.E('man-singer', 520, 360, 430), k.E('musical-notes', 480, 220, 140, { shadow: false, rot: -25 }), k.E('musical-note', 900, 250, 110, { shadow: false, rot: 30 }),
  k.E('anxious-face-with-sweat', 120, 300, 140, { shadow: false }), k.E('woman-raising-hand', 40, 460, 340), k.E('face-with-tears-of-joy', 1200, 520, 160, { shadow: false }), k.E('man-dancing', 1290, 480, 300),
  k.vignette(0.25),
].join('');

// ================================================================== Section 4 · Mises en situation
S.a1_uitzendbureau = (k) => [
  k.wall('EAF4F4', 'D2E7E8', 740), k.sign(120, 70, 520, 96, 'INTERIM · WERK', '1F8A8A', 'FFFFFF', 50, { ls: 6 }),
  k.R(840, 70, 640, 400, '#C9A27A', { rx: 10 }), k.R(860, 90, 600, 360, '#E6CCAA', { rx: 6 }),
  ...[[880, 110], [1080, 120], [1280, 105], [900, 280], [1100, 290], [1290, 280]].map(([x, y], i) => X.paper(k, x, y, 160, 150, { n: 3 }) + k.E('pushpin', x + 60, y - 20, 50, { shadow: false }) + (i === 1 ? k.E('man-cook', x + 50, y + 40, 70, { shadow: false }) : i === 4 ? k.E('man-construction-worker', x + 50, y + 40, 70, { shadow: false }) : '')),
  k.planks(740, 'D8C2A6', 'BFA382'),
  k.desk(420, 640, 760), k.E('woman-office-worker', 680, 330, 330, { shadow: false }), k.E('desktop-computer', 480, 470, 180), k.E('clipboard', 960, 520, 130),
  k.E('man-raising-hand', 40, 420, 420), k.E('identification-card', 1200, 760, 150), k.E('red-question-mark', 1340, 720, 110, { shadow: false }),
  k.vignette(0.18),
].join('');

S.a1_cv = (k) => [
  k.wall('F1EEF7', 'DFD9EC', 740), k.win(1180, 80, 340, 280, { view: 'city' }),
  k.planks(740, 'D8C2A6', 'BFA382'),
  k.E('woman-office-worker', 60, 330, 400), k.E('man-cook', 1110, 340, 400), k.E('cat', 1380, 620, 170),
  k.desk(250, 660, 1100),
  X.paper(k, 560, 110, 480, 560, { title: 'CV', ts: 64, n: 6 }), k.R(600, 140, 110, 130, '#E6EEF8', { rx: 8 }), k.E('man-cook', 605, 150, 100, { shadow: false }),
  k.E('writing-hand', 980, 520, 120, { shadow: false }),
  k.vignette(0.18),
].join('');

S.a1_agenda = (k) => {
  const days = ['MA', 'DI', 'WO', 'DO', 'VR']; const bx = 300; const cw = 200;
  const busy = [[0, 0], [0, 2], [1, 1], [1, 2], [3, 0], [3, 1], [3, 2], [4, 1]];
  return [
    k.wall('EEF3EE', 'D8E4D8', 760),
    k.R(bx - 30 + 10, 50 + 14, cw * 5 + 60, 520, '#000000', { op: 0.16, f: k.blur(12), rx: 18 }), k.R(bx - 30, 50, cw * 5 + 60, 520, '#FFFFFF', { rx: 18 }),
    ...days.map((dd, i) => k.R(bx + i * cw + 6, 80, cw - 12, 70, i === 2 ? '#2E8B57' : '#4A5568', { rx: 10 }) + k.T(bx + i * cw + cw / 2, 130, dd, 40, '#FFFFFF', { ls: 4 })),
    ...['09:00', '10:00', '14:00'].map((t, j) => k.T(bx - 90, 230 + j * 130, t, 28, '#6B7280', { ls: 0 })),
    ...busy.map(([i, j]) => k.R(bx + i * cw + 12, 180 + j * 130, cw - 24, 100, '#E5E9F0', { rx: 10 }) + k.R(bx + i * cw + 30, 220 + j * 130, cw - 60, 18, '#C7D0DC', { rx: 9 })),
    k.R(bx + 2 * cw + 12, 310, cw - 24, 100, '#DCF3E3', { rx: 10, stroke: '#2E8B57', sw: 5 }), k.E('check-mark-button', bx + 2 * cw + 60, 320, 80, { shadow: false }),
    k.planks(760, 'D8C2A6', 'BFA382'),
    k.E('woman-office-worker', 40, 520, 380), k.E('man-raising-hand', 1180, 520, 380), k.E('spiral-calendar', 1380, 260, 160, { shadow: false }),
    k.vignette(0.16),
  ].join('');
};

S.a1_cursus = (k) => [
  k.wall('FDF3E4', 'F3E1C6', 740), k.sign(120, 70, 560, 96, 'TAALCENTRUM', 'B9661F', 'FFFFFF', 54, { ls: 8 }),
  k.R(878, 52, 300, 280, '#000000', { op: 0.16, f: k.blur(8), rx: 8 }), k.R(870, 40, 300, 280, '#FFFFFF', { rx: 8 }), k.R(870, 40, 300, 90, '#E05A4E', { rx: 8 }), k.R(870, 110, 300, 20, '#E05A4E'), k.R(870, 230, 300, 90, '#2F6FB5', { rx: 8 }), k.R(870, 230, 300, 20, '#2F6FB5'),
  k.T(1020, 194, 'NEDERLANDS', 38, '#2B3A55', { ls: 2 }), k.T(1020, 296, '€ 120', 50, '#FFFFFF', { ls: 1 }),
  k.clock(1380, 140, 74, 9, 0), k.sign(1300, 270, 200, 70, 'PAUZE', 'F2C14E', '2B2F38', 38, { ls: 4 }), k.E('hot-beverage', 1440, 350, 110, { shadow: false }),
  k.planks(740, 'D9B48A', 'B98B62'),
  k.counter(560, 600, 980, 220, 'C7955F', 'A3733F'), k.E('woman-tipping-hand', 990, 340, 320, { shadow: false }), k.E('open-book', 640, 500, 140), k.E('spiral-calendar', 800, 500, 120),
  k.E('man-raising-hand', 60, 420, 440), X.say(k, 380, 230, 260, 130, [['red-question-mark', 30, 18, 90], ['hourglass-not-done', 140, 20, 90]], 'left'),
  k.vignette(0.2),
].join('');

S.a1_formulier = (k) => [
  k.wall('EEE9E1', 'DCD3C5', 720),
  ...[0, 1, 2].map((r) => k.shelf(60, 220 + r * 170, 1480) + Array.from({ length: 34 }, (_, i) => k.R(80 + i * 43, 220 + r * 170 - 110 - ((i * 7) % 3) * 12, 36, 110 + ((i * 7) % 3) * 12, `#${['C8553D', '2F6FB5', 'E2C45E', '3E8C6A', '8E6CC8', 'D98C6A'][(i + r) % 6]}`, { rx: 4, op: 0.85 })).join('')),
  k.sign(560, 30, 480, 76, 'BIBLIOTHEEK', '2B3A55', 'FFFFFF', 42, { ls: 8 }),
  k.planks(720, 'C99A6B', 'A5784C'),
  k.desk(140, 760, 1320),
  X.paper(k, 520, 440, 520, 340, { title: 'INSCHRIJVING', ts: 38, fields: true, n: 4 }), k.E('pen', 990, 640, 110, { shadow: false, rot: -30 }),
  k.R(1140, 560, 300, 190, '#2F6FB5', { rx: 16 }), k.R(1160, 580, 110, 130, '#FFFFFF', { rx: 8 }), k.E('cat-face', 1165, 590, 100, { shadow: false }), k.R(1290, 600, 130, 16, '#FFFFFF', { op: 0.8, rx: 8 }), k.R(1290, 640, 100, 16, '#FFFFFF', { op: 0.8, rx: 8 }),
  k.E('woman-raising-hand', 80, 440, 400),
  k.vignette(0.2),
].join('');

S.a1_sollicitatie = (k) => [
  k.wall('E9EEF7', 'D3DCEB', 740), k.blinds(1080, 90, 420, 320), k.frame(160, 110, 300, 220, k.R(182, 132, 256, 176, k.lin([[0, '8EC5F0'], [1, 'E6F4FC']])) + k.E('office-building', 240, 150, 140, { shadow: false })),
  k.planks(740, 'C8CDD4', 'AEB5BF', '8A929E'),
  k.E('man-office-worker', 120, 380, 400), k.E('woman-tipping-hand', 1040, 380, 420),
  k.desk(280, 680, 1040), k.E('clipboard', 400, 560, 130), k.E('hot-beverage', 620, 580, 110),
  X.think(k, 560, 70, 460, 230, k.E('cooking', 600, 90, 130, { shadow: false }) + k.E('spiral-calendar', 740, 90, 130, { shadow: false }) + k.E('alarm-clock', 880, 100, 110, { shadow: false }) + X.no(k, 935, 155, 55), 900, 380),
  k.vignette(0.18),
].join('');

S.a1_nieuw = (k) => [
  k.wall('F2F6FA', 'DEE6EF', 740), k.win(60, 90, 420, 330, { view: 'city' }),
  ...[['MARKETING', 'E8833A', 70], ['ADMINISTRATIE', '4A7BD0', 170], ['VERKOOP', '2E8B57', 270]].map(([t, c, y]) => k.sign(640, y, 440, 80, t, c, 'FFFFFF', 38, { ls: 3 }) + k.P(`M1090 ${y + 10} L1140 ${y + 40} L1090 ${y + 70}Z`, `#${c}`)),
  k.E('potted-plant', 1400, 90, 170, { shadow: false }),
  k.planks(740, 'C8CDD4', 'AEB5BF', '8A929E'),
  k.E('woman-raising-hand', 120, 420, 420), k.sign(300, 720, 140, 56, 'NIEUW', 'E05A4E', 'FFFFFF', 30, { ls: 3 }),
  k.desk(780, 660, 700), k.E('man-office-worker', 1060, 380, 360), k.E('laptop', 830, 520, 150), k.E('crown', 1190, 330, 100, { shadow: false, rot: 8 }),
  k.R(1120, 610, 240, 60, '#2B3A55', { rx: 8 }), k.T(1240, 652, 'MANAGER', 32, '#FFE6A8', { ls: 3 }),
  k.vignette(0.18),
].join('');

S.a1_gevoel = (k) => [
  k.wall('EEF1F6', 'DCE2EA', 740), k.win(1140, 90, 360, 300, { view: 'sky' }), k.clock(840, 170, 70, 10, 15),
  k.planks(740, 'D8C2A6', 'BFA382'),
  k.E('man-raising-hand', 60, 400, 400), X.say(k, 300, 200, 220, 130, [['red-question-mark', 20, 18, 90], ['tired-face', 110, 18, 90]], 'left'),
  k.desk(600, 660, 860), k.E('sleepy-face', 820, 330, 330, { shadow: false }), k.E('zzz', 1120, 300, 140, { shadow: false }),
  k.frame(1150, 470, 200, 190, k.R(1172, 492, 156, 146, '#FDE9E6') + k.E('baby', 1185, 500, 130, { shadow: false })),
  k.E('hot-beverage', 660, 560, 110), k.E('hot-beverage', 760, 570, 100), k.E('baby-bottle', 1380, 540, 120),
  k.vignette(0.2),
].join('');

S.a1_weg = (k) => {
  const door = (x, n, w, h, y) => X.door(k, x, y, w, h, '9C7553') + k.sign(x + w * 0.15, y - 70, w * 0.7, 54, n, '2B3A55', 'FFFFFF', 32, { ls: 2 });
  return [
    k.R(0, 0, W, H, k.lin([[0, 'EDE7DC'], [1, 'DCD2C2']])), k.P('M0 0 L560 300 L1040 300 L1600 0Z', '#F7F3EC'), k.P('M0 1000 L560 640 L1040 640 L1600 1000Z', k.lin([[0, 'C9BCA7'], [1, 'A99A82']])),
    k.P('M0 0 L560 300 L560 640 L0 1000Z', k.lin([[0, 'E3D8C6'], [1, 'D3C6B0']], 0, 0, 1, 0)), k.P('M1600 0 L1040 300 L1040 640 L1600 1000Z', k.lin([[0, 'D3C6B0'], [1, 'E3D8C6']], 0, 0, 1, 0)),
    k.R(560, 300, 480, 340, k.lin([[0, 'BFD9EE'], [1, 'E6F3FC']])),
    door(150, '202', 170, 380, 380), door(1300, '204', 200, 440, 360),
    k.sign(640, 330, 320, 70, '← 201 · 203', '4A5568', 'FFFFFF', 32, { ls: 1 }),
    k.E('woman-student', 380, 440, 400), k.E('red-question-mark', 640, 380, 110, { shadow: false }),
    k.E('man-tipping-hand', 980, 430, 380), X.arrow(k, 1230, 500, 1300, 560, '2E8B57', 10),
    k.vignette(0.2),
  ].join('');
};

S.a1_examen = (k) => [
  k.wall('F3F0FA', 'E0DBEF', 740), k.sign(400, 60, 800, 96, 'EXAMEN NEDERLANDS', '7E4C97', 'FFFFFF', 50, { ls: 6 }), k.clock(1400, 170, 80, 11, 0),
  k.planks(740, 'D8C2A6', 'BFA382'),
  k.desk(330, 650, 940),
  X.paper(k, 470, 230, 420, 470, { n: 7 }), k.C(780, 330, 90, '#FFFFFF'), k.C(780, 330, 82, 'none', { stroke: '#E5484D', sw: 8 }), k.T(780, 352, '18/20', 54, '#E5484D', { ls: 0 }),
  k.E('pencil', 900, 520, 120, { shadow: false, rot: -30 }),
  k.E('woman-student', 40, 400, 420), k.E('star-struck', 1030, 330, 210, { shadow: false }), k.E('trophy', 1100, 560, 170), k.confetti(900, 200, 600, 400, 30, ['E8833A', 'C8102E', '4A90D9', 'F2C14E', '8E6CC8']),
  k.vignette(0.18),
].join('');

module.exports = { S, X };

if (require.main === module) {
  (async () => {
    const names = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(S);
    for (const nme of names) { await render(nme, S[nme]); console.log('ok', nme); }
  })().catch((e) => { console.error(e); process.exit(1); });
}
