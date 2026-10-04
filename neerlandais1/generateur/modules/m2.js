// Module 2 — Ik stel me voor · Se présenter
const { BORDER, GHOST, parse, plain, fitSize } = require('../lib');

const meta = { n: 2, slug: 'Ik_stel_me_voor', title: 'Ik stel me voor — Se présenter', short: 'Ik stel me voor', template: 'module_2_ik_stel_me_voor.md' };

// the six identity icons (charte § 5.5), one colour each, used consistently in the whole module
const ID = {
  naam: ['FaIdCard', 'accent2'], leeftijd: ['FaBirthdayCake', 'accent1'], woon: ['FaHome', 'accent3'],
  afkomst: ['FaGlobeEurope', 'tx2'], beroep: ['FaBriefcase', 'accent5'], talen: ['FaComments', 'accent4'],
};
const LIGHT = 'DCE9F6'; // light blue (S1 band 2 / informal)
const GREY = 'E3E7ED'; // light grey (S1 band 3)
const NAVY = '17375E';

const mix = (a, b, t) => {
  const p = (h, i) => parseInt(h.slice(i, i + 2), 16);
  return [0, 2, 4].map((i) => Math.round(p(a, i) + (p(b, i) - p(a, i)) * t).toString(16).padStart(2, '0')).join('').toUpperCase();
};

// Belgium outline (lon, lat), simplified
const BE_OUTLINE = [[2.55, 51.09], [3.0, 51.25], [3.37, 51.37], [3.8, 51.22], [4.24, 51.37], [4.45, 51.48], [4.85, 51.48], [5.1, 51.43], [5.5, 51.3],
  [5.85, 51.15], [5.65, 50.85], [6.03, 50.75], [6.35, 50.45], [6.15, 50.18], [5.95, 50.15], [5.75, 49.82], [5.85, 49.56], [5.45, 49.5], [5.25, 49.7],
  [4.85, 49.8], [4.85, 50.13], [4.5, 50.0], [4.15, 49.98], [4.15, 50.27], [3.7, 50.35], [3.25, 50.5], [3.2, 50.73], [2.85, 50.72]];

const FLAGS = {
  BE: ['v', ['1B1B1B', 'FDDA24', 'EF3340']], FR: ['v', ['0055A4', 'FFFFFF', 'EF4135']], NL: ['h', ['AE1C28', 'FFFFFF', '21468B']],
  DE: ['h', ['1B1B1B', 'DD0000', 'FFCE00']], ES: ['h', ['AA151B', 'F1BF00', 'F1BF00', 'AA151B']], IT: ['v', ['009246', 'FFFFFF', 'CE2B37']],
  EN: ['cross'], MA: ['star'], TR: ['moon'],
};

function build(d) {
  const idDisc = (s, k, x, y, dd = 0.6) => d.iconDisc(s, ID[k][0], x, y, dd, ID[k][1]);
  const arrow = (s, x1, y1, x2, y2, c = 'accent5', lw = 1.75) => d.line(s, x1, y1, x2, y2, { color: c, lw });

  // text whose °°ghost°° runs are rendered mid-grey italic (infinitives between brackets)
  const greyText = (s, str, x, y, w, h, mode, o = {}) => {
    const runs = parse(str, mode).map((r) => (r.options.color === GHOST ? { text: r.text, options: { ...r.options, color: '7D8898', italic: true } } : r));
    const size = o.size || fitSize([plain(str)], w, h, o.max || 22, o.min || 14, 0, 0.5, 'greyText');
    s.addText(runs, { x, y, w, h, fontSize: size, color: '1B2333', valign: o.valign || 'middle', margin: 0, isTextBox: true, lineSpacingMultiple: o.ls || 1.15 });
  };

  // S1 conjugation card: bands = [{ fill, rows: [[ [[nl, fr], ...], form, rowH?, chip? ], ...] }]
  const conj = (s, x, y, w, h, inf, fr, bands, foot) => {
    d.rect(s, x, y, w, h, { fill: 'bg1', line: 'tx2', lw: 1.5, radius: 0.08, shadow: true });
    d.t(s, inf, x + 0.25, y + 0.1, w - 0.5, 0.52, { size: 28, bold: true, color: 'tx2', head: true, valign: 'middle' });
    d.t(s, fr, x + 0.25, y + 0.6, w - 0.5, 0.3, { size: 15, italic: true, color: 'accent5' });
    let by = y + 0.98;
    const formX = x + 2.98;
    bands.forEach((b) => {
      const bh = b.rows.reduce((a, r) => a + (r[2] || 0.62), 0) + 0.1;
      d.rect(s, x + 0.12, by, w - 0.24, bh, { fill: b.fill, line: b.fill === 'FFFFFF' ? BORDER : null, radius: 0.06 });
      let ry = by + 0.05;
      b.rows.forEach(([prons, form, rh = 0.62, chip]) => {
        prons.forEach(([nl, f], k) => {
          const px = x + 0.3 + k * 0.88;
          d.t(s, '^^' + nl + '^^', px, ry + 0.02, 0.88, 0.34, { size: 20, valign: 'middle' });
          d.t(s, f, px, ry + 0.36, 0.88, 0.24, { size: 13, italic: true, color: 'accent5' });
        });
        const fw = x + w - 0.2 - formX;
        d.t(s, form, formX, ry, fw, 0.62, { size: Math.min(26, Math.floor((fw * 72) / (plain(form).length * 0.62))), valign: 'middle' });
        if (chip) d.chip(s, chip, formX, ry + 0.6, 'accent1', 0.24, 10);
        ry += rh;
      });
      by += bh + 0.08;
    });
    if (foot) {
      d.rect(s, x + 0.12, by + 0.04, w - 0.24, 0.48, { fill: 'tx2', line: null, radius: 0.06 });
      d.t(s, foot, x + 0.3, by + 0.04, w - 0.6, 0.48, { size: 17, color: 'bg1', valign: 'middle' });
    }
  };

  // question → answer row (bubbles)
  const qa = (s, x, y, h, qw, aw, q, a, o = {}) => {
    d.bubble(s, q, x, y, qw, h, 'accent2', { size: o.size || 18 });
    arrow(s, x + qw + 0.06, y + h / 2, x + qw + 0.36, y + h / 2, 'accent5', 1.75);
    d.bubble(s, a, x + qw + 0.42, y, aw, h, 'accent3', { size: o.size || 18 });
  };

  const flag = (s, code, x, y, w = 0.5, h = 0.34) => {
    const [t, c] = FLAGS[code];
    const R = (xx, yy, ww, hh, fill) => d.rect(s, xx, yy, ww, hh, { fill, line: null, radius: 0 });
    if (t === 'v') c.forEach((cc, i) => R(x + (i * w) / c.length, y, w / c.length, h, cc));
    else if (t === 'h') c.forEach((cc, i) => R(x, y + (i * h) / c.length, w, h / c.length, cc));
    else if (t === 'cross') { R(x, y, w, h, 'FFFFFF'); R(x + w * 0.42, y, w * 0.16, h, 'CE1124'); R(x, y + h * 0.38, w, h * 0.24, 'CE1124'); }
    else if (t === 'star') { R(x, y, w, h, 'C1272D'); d.icon(s, 'FaStar', '006233', x + w / 2 - 0.1, y + h / 2 - 0.1, 0.2); }
    else { R(x, y, w, h, 'E30A17'); d.icon(s, 'FaMoon', 'FFFFFF', x + 0.08, y + 0.07, 0.2); d.icon(s, 'FaStar', 'FFFFFF', x + 0.28, y + 0.12, 0.1); }
    d.rect(s, x, y, w, h, { fill: null, line: 'A0AAB8', lw: 0.75, radius: 0 });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Ik stel me voor', sub: 'Se présenter — à l’oral, à l’accueil, sur un formulaire', line: 'Module 2 · Ik stel me voor',
    visual: (s) => {
      const x = 7.2; const y = 1.5; const w = 5.5; const h = 4.0;
      d.rect(s, x, y, w, h, { fill: 'bg2', line: 'FFFFFF', lw: 1, radius: 0.12, shadow: true });
      d.rect(s, x, y, w, 0.62, { fill: 'accent2', line: null, radius: 0.12 });
      d.rect(s, x, y + 0.4, w, 0.22, { fill: 'accent2', line: null, radius: 0 });
      d.icon(s, 'FaIdCard', 'FFFFFF', x + 0.25, y + 0.11, 0.4);
      d.rect(s, x + 0.35, y + 0.95, 1.6, 2.05, { fill: 'FFFFFF', line: BORDER, radius: 0.06 });
      d.ill(s, 'man-office-worker', x + 0.45, y + 1.15, 1.4, 1.4);
      d.line(s, x + 0.35, y + 3.5, x + 1.95, y + 3.5, { color: 'accent5', lw: 1.25, arrow: false, dash: 'sysDot' });
      ['naam', 'leeftijd', 'woon', 'afkomst', 'beroep', 'talen'].forEach((k, i) => {
        const fy = y + 0.92 + i * 0.5;
        d.icon(s, ID[k][0], ID[k][1], x + 2.25, fy, 0.34);
        d.line(s, x + 2.8, fy + 0.3, x + w - 0.3, fy + 0.3, { color: 'accent5', lw: 1.25, arrow: false, dash: 'sysDot' });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCommentDots', h: 'Dire', t: 'Je me présente en **6 phrases**.', color: 'accent2' },
      { icon: 'FaQuestion', h: 'Demander', t: 'Je pose les mêmes questions, en //je// (familier) ou en //u// (poli).', color: 'accent1' },
      { icon: 'FaPencilAlt', h: 'Remplir', t: 'Je donne mes informations pour un formulaire : j’épelle mon nom, je dis mon numéro.', color: 'purple' },
    ],
  });

  // ---------------------------------------------------------------- 3 Sofie (portrait + 6 bubbles)
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Sofie se présente' });
    const items = [
      ['naam', 'Ik !!ben!! Sofie Peeters.'], ['leeftijd', 'Ik !!ben!! 34 jaar.'], ['woon', 'Ik !!woon!! in Gent.'],
      ['afkomst', 'Ik !!kom!! uit België.'], ['beroep', 'Ik !!werk!! in Brussel, op de personeelsdienst.'], ['talen', 'Ik !!spreek!! Nederlands, Frans en Engels.'],
    ];
    const bw = 4.3; const bh = 1.3; const cx = 6.665; const cy = 4.15; const r = 1.0;
    const pos = items.map((_, i) => ({ x: i < 3 ? 0.6 : 12.73 - bw, y: 1.75 + (i % 3) * 1.75, left: i < 3 }));
    pos.forEach((p) => {
      const ex = p.left ? p.x + bw : p.x; const ey = p.y + bh / 2;
      const dx = ex - cx; const dy = ey - cy; const L = Math.hypot(dx, dy);
      d.line(s, cx + (dx / L) * r, cy + (dy / L) * r, ex, ey, { color: 'accent5', lw: 1.25, arrow: false });
    });
    d.oval(s, cx - r, cy - r, 2 * r, 2 * r, { fill: 'bg2', line: 'tx2', lw: 2.5 });
    d.ill(s, 'woman-office-worker', cx - 0.72, cy - 0.78, 1.44, 1.44);
    d.t(s, 'Sofie', cx - 1.0, cy + r + 0.06, 2.0, 0.45, { size: 20, bold: true, color: 'tx2', align: 'center', head: true });
    d.bubble(s, 'Qu’avez-vous compris ?', cx - 1.2, 1.75, 2.4, 0.7, 'accent1', { size: 16, align: 'center' });
    items.forEach(([k, txt], i) => {
      const { x, y } = pos[i];
      d.rect(s, x, y, bw, bh, { fill: 'bg1', line: ID[k][1], lw: 2, radius: 0.18, shadow: true });
      idDisc(s, k, x + 0.2, y + (bh - 0.66) / 2, 0.66);
      d.t(s, txt, x + 1.05, y + 0.08, bw - 1.2, bh - 0.16, { size: 20, valign: 'middle', fit: true, max: 20, min: 15 });
    });
  }

  // ---------------------------------------------------------------- 4 Dag! (register gauge)
  {
    const s = d.page({ g: 4, tag: 'VOCABULAIRE', title: 'Dag! — Saluer et prendre congé' });
    const lx = 0.6; const lw = 4.75; const rx = 12.73 - lw; const cxl = 5.5; const cw = 2.33;
    const row = (y, h, fr, inf, form) => {
      d.rect(s, lx, y, lw, h, { fill: LIGHT, line: 'accent2', lw: 1.25, radius: 0.15 });
      d.t(s, inf, lx + 0.2, y, lw - 0.4, h, { size: 18, valign: 'middle', fit: true, max: 18, min: 12 });
      d.rect(s, cxl, y + (h - 0.48) / 2, cw, 0.48, { fill: 'F4F6F9', line: BORDER, radius: 0.24 });
      d.t(s, fr, cxl, y + (h - 0.48) / 2, cw, 0.48, { size: 17, bold: true, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, rx, y, lw, h, { fill: 'tx2', line: null, radius: 0.15 });
      d.t(s, form, rx + 0.2, y, lw - 0.4, h, { size: 18, color: 'bg1', valign: 'middle', fit: true, max: 18, min: 12 });
    };
    d.icon(s, 'FaSignInAlt', 'accent5', 0.6, 1.63, 0.26);
    d.t(s, 'ARRIVER', 0.95, 1.62, 3, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2, valign: 'middle' });
    row(1.95, 0.95, 'Bonjour', 'Hallo! · Hoi!', 'Goedemorgen / Goedemiddag / Goedenavond //(meneer, mevrouw)//');
    row(3.0, 0.7, 'Ça va ?', 'Alles goed? · Hoe gaat het (met jou)?', 'Hoe gaat het met u?');
    d.rect(s, 4.2, 3.75, 4.93, 0.5, { fill: 'accent2', tr: 80, line: 'accent2', lw: 1, radius: 0.25 });
    d.t(s, '//Enchanté(e)// — **Aangenaam!**', 4.2, 3.75, 4.93, 0.5, { size: 18, align: 'center', valign: 'middle' });
    // gauge
    const gy = 4.55; const n = 12; const gw = 12.13 / n;
    for (let i = 0; i < n; i++) d.rect(s, 0.6 + i * gw, gy, gw + 0.01, 0.3, { fill: mix('BFD7EE', NAVY, i / (n - 1)), line: null, radius: 0 });
    d.t(s, '◀  informeel · //je//', 0.6, gy + 0.36, 4, 0.35, { size: 15, bold: true, color: 'accent2' });
    d.t(s, 'formeel · //u//  ▶', 8.73, gy + 0.36, 4, 0.35, { size: 15, bold: true, color: 'tx2', align: 'right' });
    d.rect(s, 4.27, gy - 0.2, 4.8, 0.7, { fill: 'FFFFFF', line: 'accent1', lw: 2.5, radius: 0.35, shadow: true });
    d.t(s, '**Dag!** = passe-partout en Belgique', 4.27, gy - 0.2, 4.8, 0.7, { size: 18, align: 'center', valign: 'middle', color: 'tx1' });
    d.icon(s, 'FaSignOutAlt', 'accent5', 0.6, 5.33, 0.26);
    d.t(s, 'PARTIR', 0.95, 5.32, 3, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2, valign: 'middle' });
    row(5.68, 0.7, 'Au revoir', 'Daag! · Tot straks! · Tot morgen!', 'Tot ziens! · Nog een fijne dag!');
  }

  // ---------------------------------------------------------------- 5 pronouns grid
  d.section('Les outils : pronoms, zijn, hebben, nombres');
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Qui fait l’action ? Les pronoms personnels' });
    const sx = 1.8; const sw = 6.5; const px = 8.5; const pw = 4.23; const rh = 1.25;
    const ys = [2.3, 3.7, 5.1];
    d.icon(s, 'FaUser', 'tx2', sx + sw / 2 - 1.0, 1.72, 0.42);
    d.t(s, 'un seul', sx + sw / 2 - 0.5, 1.68, 2.0, 0.5, { size: 18, bold: true, color: 'tx2', valign: 'middle' });
    d.icon(s, 'FaUsers', 'tx2', px + pw / 2 - 1.05, 1.72, 0.42);
    d.t(s, 'plusieurs', px + pw / 2 - 0.5, 1.68, 2.0, 0.5, { size: 18, bold: true, color: 'tx2', valign: 'middle' });
    // zij / ze link (drawn first, under the chip)
    const zx1 = sx + 2.2 + 1.05; const zx2 = px + pw / 2; const zy = ys[2] + rh;
    d.line(s, zx1, zy, zx1, zy + 0.28, { color: 'accent6', lw: 2, dash: 'dash', arrow: false });
    d.line(s, zx1, zy + 0.28, zx2, zy + 0.28, { color: 'accent6', lw: 2, dash: 'dash', arrow: false });
    d.line(s, zx2, zy + 0.28, zx2, zy, { color: 'accent6', lw: 2, dash: 'dash', arrow: false });
    d.chip(s, 'même mot !', (zx1 + zx2) / 2 - 0.75, zy + 0.13, 'accent6', 0.3, 13);
    const cell = (x, y, w, nl, fr, o = {}) => {
      d.rect(s, x, y, w, rh, { fill: o.fill || 'bg2', line: o.line || BORDER, lw: o.lw || 1, dash: o.dash, radius: 0.08 });
      d.t(s, nl, x + 0.1, y + 0.18, w - 0.2, 0.6, { size: 28, bold: true, color: o.color || 'tx2', align: 'center', valign: 'middle', head: true });
      d.t(s, fr, x + 0.1, y + 0.8, w - 0.2, 0.32, { size: 14, italic: true, color: o.frColor || 'accent5', align: 'center' });
    };
    ['1re', '2e', '3e'].forEach((l, i) => d.num(s, l, 0.65, ys[i] + rh / 2 - 0.42, 0.84, 'tx2', 18));
    cell(sx, ys[0], sw, 'ik', 'je');
    cell(px, ys[0], pw, 'wij / we', 'nous');
    cell(sx, ys[1], 3.15, 'jij / je', 'tu', { fill: LIGHT });
    cell(sx + 3.3, ys[1], 3.2, 'u', 'vous (poli)', { fill: 'tx2', line: 'tx2', color: 'bg1', frColor: 'bg2' });
    d.icon(s, 'GiBowTie', 'FFFFFF', sx + 3.3 + 3.2 - 0.7, ys[1] + 0.12, 0.5);
    cell(px, ys[1], pw, 'jullie', 'vous');
    [['hij', 'il'], ['zij / ze', 'elle'], ['het', 'il/elle (neutre)']].forEach(([nl, fr], k) => {
      const z = k === 1;
      cell(sx + k * 2.2, ys[2], 2.1, nl, fr, z ? { line: 'accent6', lw: 2, dash: 'dash' } : {});
    });
    cell(px, ys[2], pw, 'zij / ze', 'ils, elles', { line: 'accent6', lw: 2, dash: 'dash' });
  }

  // ---------------------------------------------------------------- 6 vous = u / jullie (S9)
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE — « vous » = u ou jullie ?' });
    const cx = 2.75;
    const diamond = (y, txt) => {
      s.addShape(d.S.DIAMOND, { x: cx - 1.65, y, w: 3.3, h: 1.2, fill: { color: 'FFFFFF' }, line: { color: NAVY, width: 2 } });
      d.t(s, txt, cx - 1.15, y + 0.2, 2.3, 0.8, { size: 15, align: 'center', valign: 'middle', bold: false });
    };
    const lab = (x, y, t, c) => d.t(s, t, x, y, 0.7, 0.3, { size: 13, bold: true, color: c, align: 'center', valign: 'middle' });
    // arrows first
    arrow(s, cx, 2.22, cx, 2.48, 'accent5', 2);
    arrow(s, cx + 1.65, 3.08, 5.15, 3.08, 'accent3', 2.25); lab(4.45, 2.72, 'OUI', 'accent3');
    arrow(s, cx, 3.68, cx, 4.08, 'accent5', 2.25); lab(cx + 0.05, 3.72, 'NON', 'accent5');
    arrow(s, cx + 1.65, 4.68, 5.15, 4.68, 'accent3', 2.25); lab(4.45, 4.32, 'OUI', 'accent3');
    arrow(s, cx, 5.28, cx, 5.68, 'accent5', 2.25); lab(cx + 0.05, 5.32, 'NON', 'accent5');
    d.rect(s, cx - 1.6, 1.65, 3.2, 0.57, { fill: GREY, line: null, radius: 0.12 });
    d.t(s, 'Je dis //vous// en français', cx - 1.6, 1.65, 3.2, 0.57, { size: 17, align: 'center', valign: 'middle' });
    diamond(2.48, 'Je parle à **une** personne ?');
    diamond(4.08, 'Situation **formelle** ?');
    [[2.68, 'poli singulier'], [4.28, 'poli pluriel']].forEach(([y, fr]) => {
      d.rect(s, 5.2, y, 2.2, 0.8, { fill: 'tx2', line: null, radius: 0.12, shadow: true });
      d.t(s, 'u', 5.3, y, 0.6, 0.8, { size: 30, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, fr, 5.9, y, 1.45, 0.8, { size: 14, italic: true, color: 'bg2', valign: 'middle' });
    });
    d.rect(s, cx - 1.6, 5.7, 3.2, 1.0, { fill: LIGHT, line: 'accent2', lw: 1.5, radius: 0.12, shadow: true });
    d.t(s, 'jullie', cx - 1.6, 5.72, 3.2, 0.5, { size: 28, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
    d.t(s, 'collègues, amis, la classe', cx - 1.6, 6.2, 3.2, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
    // right: mini scenes
    const rx = 7.9; const rw = 12.73 - rx;
    d.t(s, '« Vous habitez où ? »', rx, 1.62, rw, 0.55, { size: 24, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
    [[2.35, 'à un client', 'Waar woont @@u@@?', 'FaConciergeBell'], [4.6, 'à des collègues', 'Waar wonen ^^jullie^^?', 'a_collegas']].forEach(([y, fr, nl, img]) => {
      d.rect(s, rx, y, rw, 2.05, { fill: 'bg2', line: BORDER, radius: 0.1 });
      if (img.startsWith('Fa')) d.iconDisc(s, img, rx + 0.3, y + 0.42, 1.2, 'tx2');
      else { d.oval(s, rx + 0.3, y + 0.42, 1.2, 1.2, { fill: 'FFFFFF', line: 'accent2', lw: 2 }); d.pic(s, img, rx + 0.42, y + 0.55, 0.96, 0.94); }
      d.t(s, '→ ' + fr, rx + 1.75, y + 0.2, rw - 1.95, 0.45, { size: 16, italic: true, color: 'accent5' });
      d.bubble(s, nl, rx + 1.75, y + 0.75, rw - 1.95, 0.95, img.startsWith('Fa') ? 'tx2' : 'accent2', { size: 22, tr: 85 });
    });
  }

  // ---------------------------------------------------------------- 7 ZIJN (S1)
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'ZIJN — être' });
    conj(s, 0.6, 1.65, 4.9, 5.2, 'ZIJN', 'être', [
      { fill: 'FFFFFF', rows: [[[['ik', 'je']], '!!ben!!']] },
      { fill: 'bg2', rows: [[[['jij', 'tu']], '!!ben##t##!!'], [[['u', 'vous']], '!!ben##t##!!'], [[['hij', 'il'], ['zij', 'elle'], ['het', 'il/elle']], '!!is!!']] },
      { fill: GREY, rows: [[[['wij', 'nous'], ['jullie', 'vous'], ['zij', 'ils, elles']], '!!zijn!!']] },
    ], '↩ //Ben jij…?// (sans t)');
    const rows = [
      ['naam', ['Wie !!ben!! jij?', '//(Qui es-tu ?)//'], 'Ik !!ben!! Karim.'],
      ['leeftijd', 'Hoe oud !!ben!! je?', 'Ik !!ben!! 32 (jaar).'],
      [null, '!!Ben!! je getrouwd?', 'Ja, ik !!ben!! getrouwd.'],
      ['beroep', 'Wat !!is!! je beroep?', 'Ik !!ben!! boekhouder.'],
    ];
    rows.forEach(([k, q, a], i) => {
      const y = 1.75 + i * 1.3;
      if (k) idDisc(s, k, 5.8, y + 0.23, 0.64);
      else d.iconDisc(s, 'GiLinkedRings', 5.8, y + 0.23, 0.64, 'accent4');
      qa(s, 6.6, y, 1.1, 3.0, 2.71, q, a, { size: 19 });
    });
  }

  // ---------------------------------------------------------------- 8 PIÈGE j'ai 32 ans (S10)
  {
    const s = d.page({ g: 8, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE — J’ai 32 ans' });
    d.rect(s, 0.6, 1.65, 12.13, 3.5, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.82, 'accent6', 0.32, 12);
    d.t(s, 'J’{{ai}} 32 ans.', 0.9, 2.25, 4.2, 0.75, { size: 32, bold: true, valign: 'middle' });
    d.t(s, '!!✗!!  {{Ik heb 32 jaar.}}', 5.0, 2.25, 4.4, 0.75, { size: 26, valign: 'middle' });
    d.line(s, 1.5, 3.05, 1.5, 3.55, { color: 'accent6', lw: 4.5 });
    d.t(s, '<<✓>>  Ik', 0.9, 3.6, 1.5, 0.8, { size: 32, bold: true, valign: 'middle', align: 'right' });
    d.rect(s, 2.5, 3.6, 1.2, 0.8, { fill: 'accent3', tr: 85, line: 'accent3', lw: 2.5, radius: 0.1 });
    d.t(s, 'ben', 2.5, 3.6, 1.2, 0.8, { size: 32, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
    d.t(s, '32 jaar (oud).', 3.85, 3.6, 5.0, 0.8, { size: 32, bold: true, valign: 'middle' });
    d.t(s, '//Hoe oud ben je?// = littéralement « Combien vieux es-tu ? »', 0.9, 4.5, 8.6, 0.45, { size: 18, color: 'accent5' });
    d.iconDisc(s, 'FaBirthdayCake', 10.15, 1.95, 1.9, 'accent1');
    d.t(s, '32', 10.15, 3.95, 1.9, 0.75, { size: 40, bold: true, color: 'accent1', align: 'center', valign: 'middle', head: true });
    // mini S10
    d.rect(s, 0.6, 5.4, 12.13, 1.45, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 5.55, 'accent6', 0.3, 11);
    d.t(s, 'Je travaille comme {{un}} ingénieur', 0.85, 5.9, 5.0, 0.75, { size: 22, valign: 'middle' });
    d.line(s, 5.9, 6.27, 6.5, 6.27, { color: 'accent6', lw: 3 });
    d.rect(s, 6.65, 5.75, 5.9, 0.95, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
    d.t(s, '<<✓>> Ik werk <<als>> ingenieur  //(sans een)//', 6.85, 5.75, 5.6, 0.95, { size: 22, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 9 numbers
  {
    const s = d.page({ g: 9, tag: 'VOCABULAIRE', title: 'Les nombres de 0 à 100' });
    const words = ['nul', 'een', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'elf', 'twaalf', 'dertien', 'veertien', 'vijftien', 'zestien', 'zeventien', 'achttien', 'negentien', 'twintig'];
    const cw = (12.13 - 10 * 0.1) / 11;
    words.forEach((w, i) => {
      const r = i < 11 ? 0 : 1; const c = r ? i - 11 : i;
      const x = 0.6 + c * (cw + 0.1) + (r ? (cw + 0.1) / 2 : 0); const y = 1.65 + r * 0.95;
      d.rect(s, x, y, cw, 0.85, { fill: 'bg1', line: BORDER, lw: 1.25, radius: 0.08 });
      d.t(s, String(i), x, y + 0.04, cw, 0.42, { size: 22, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
      d.t(s, w, x, y + 0.47, cw, 0.32, { size: 14, align: 'center', valign: 'middle' });
    });
    const tens = [[30, 'dertig'], [40, 'veertig'], [50, 'vijftig'], [60, 'zestig'], [70, 'zeventig'], [80, 'tachtig'], [90, 'negentig'], [100, 'honderd']];
    const tw = (12.13 - 7 * 0.12) / 8;
    tens.forEach(([n, w], i) => {
      const x = 0.6 + i * (tw + 0.12); const hl = n === 70 || n === 90;
      d.rect(s, x, 3.65, tw, 0.9, { fill: 'bg2', line: hl ? 'accent1' : 'accent2', lw: hl ? 2.5 : 1, radius: 0.08 });
      d.t(s, String(n), x, 3.68, tw, 0.45, { size: 24, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
      d.t(s, hl ? `**${w}**` : w, x, 4.13, tw, 0.36, { size: 16, align: 'center', valign: 'middle', color: hl ? 'accent1' : 'tx1' });
    });
    // S10 "l'horloge à l'envers"
    const py = 4.75;
    d.rect(s, 0.6, py, 8.4, 2.1, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ L’HORLOGE À L’ENVERS', 0.8, py + 0.13, 'accent6', 0.32, 12);
    d.t(s, '**21 = « un-et-vingt »**', 4.1, py + 0.08, 4.7, 0.42, { size: 18, valign: 'middle' });
    const cy = py + 0.88; const ch = 0.68;
    // arcs (drawn before the boxes)
    d.curve(s, 2.0, cy, 3.4, cy, { h: 0.32, dir: -1, color: 'accent1', lw: 2.25 });
    s.addShape(d.S.ARC, { x: 1.28, y: cy + ch - 0.36, w: 4.57 - 1.28 + 0.2, h: 0.72, angleRange: [0, 180], line: { color: NAVY, width: 2.25, beginArrowType: 'triangle' }, fill: { color: 'FFFFFF', transparency: 100 } });
    [['2', 0.95, 'tx2'], ['1', 1.68, 'accent1']].forEach(([n, x, c]) => {
      d.rect(s, x, cy, 0.66, ch, { fill: 'FFFFFF', line: c, lw: 2.5, radius: 0.06, shadow: true });
      d.t(s, n, x, cy, 0.66, ch, { size: 30, bold: true, color: c, align: 'center', valign: 'middle', head: true });
    });
    d.rect(s, 2.95, cy, 1.0, ch, { fill: 'FFFFFF', line: 'accent1', lw: 2.5, radius: 0.06 });
    d.t(s, 'een', 2.95, cy, 1.0, ch, { size: 24, bold: true, color: 'accent1', align: 'center', valign: 'middle' });
    d.t(s, 'en', 3.97, cy, 0.5, ch, { size: 20, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.rect(s, 4.5, cy, 1.55, ch, { fill: 'FFFFFF', line: 'tx2', lw: 2.5, radius: 0.06 });
    d.t(s, 'twintig', 4.5, cy, 1.55, ch, { size: 24, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
    d.t(s, '→ **eenentwintig**', 6.2, cy, 2.7, ch, { size: 22, valign: 'middle', color: 'tx1' });
    // examples
    d.rect(s, 9.25, py, 3.48, 2.1, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, ['**32** → //tweeëndertig//', '**47** → //zevenenveertig//'], 9.45, py + 0.15, 3.1, 1.8, { size: 20, valign: 'middle', gap: 14 });
  }

  // ---------------------------------------------------------------- 10 HEBBEN (S1)
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'HEBBEN — avoir' });
    conj(s, 0.6, 1.65, 5.1, 5.2, 'HEBBEN', 'avoir', [
      { fill: 'FFFFFF', rows: [[[['ik', 'je']], '!!heb!!']] },
      { fill: 'bg2', rows: [[[['jij', 'tu']], '!!heb##t##!!'], [[['u', 'vous']], '!!heb##t##!! / ##heeft##'], [[['hij', 'il'], ['zij', 'elle'], ['het', 'il/elle']], '##heeft##', 0.92, 'attention !']] },
      { fill: GREY, rows: [[[['wij', 'nous'], ['jullie', 'vous'], ['zij', 'ils, elles']], '!!hebben!!']] },
    ]);
    // family pictogram linked to the two questions
    d.pic(s, 'a_huis', 5.92, 3.0, 1.25, 1.25);
    const qx = 7.35; const qw = 2.0; const ax = qx + qw + 0.42; const aw = 12.73 - ax;
    const groups = [
      ['Heb je broers of zussen?', ['Ik !!heb!! een broer en een zus.', ['Ik !!ben!! enig kind.', '//(Je suis enfant unique.)//']]],
      ['Heb je kinderen?', ['Ja, ik !!heb!! twee kinderen: een zoon en een dochter.', 'Nee, ik !!heb!! geen kinderen.']],
    ];
    const ah = 0.9; const gap = 0.12;
    groups.forEach(([q, as], gi) => {
      const gy = 1.68 + gi * (2 * ah + gap + 0.25); const gh = 2 * ah + gap;
      d.line(s, 7.17, 3.62, qx, gy + gh / 2, { color: 'accent5', lw: 1.25, arrow: false });
      d.bubble(s, q, qx, gy, qw, gh, 'accent2', { size: 18 });
      as.forEach((a, k) => {
        const ay = gy + k * (ah + gap);
        arrow(s, qx + qw + 0.06, ay + ah / 2, ax - 0.06, ay + ah / 2, 'accent5', 1.5);
        d.bubble(s, a, ax, ay, aw, ah, 'accent3', { size: 17 });
      });
    });
    // mini S10: geen
    const by = 6.05;
    d.rect(s, 5.92, by, 6.81, 0.8, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠', 6.05, by + 0.22, 'accent6', 0.36, 13);
    d.t(s, '« pas de frère »', 6.8, by, 2.0, 0.8, { size: 19, valign: 'middle' });
    d.line(s, 8.75, by + 0.4, 9.35, by + 0.4, { color: 'accent6', lw: 2.5 });
    d.rect(s, 9.5, by + 0.12, 3.05, 0.56, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.08 });
    d.t(s, '<<geen>> broer', 9.5, by + 0.12, 3.05, 0.56, { size: 22, align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 11 état civil
  {
    const s = d.page({ g: 11, tag: 'VOCABULAIRE', title: 'Mon état civil — de burgerlijke staat' });
    d.t(s, '//Ik ben…//', 0.6, 1.62, 6, 0.45, { size: 22, bold: true, color: 'tx2', valign: 'middle' });
    const tiles = [
      ['person-standing', 'alleenstaand / vrijgezel', 'célibataire'], ['house-with-garden', 'samenwonend', 'cohabitant'], ['wedding', 'getrouwd / gehuwd', 'marié·e'],
      ['broken-heart', 'gescheiden', 'divorcé·e'], ['ring', 'verloofd', 'fiancé·e'], ['wilted-flower', 'weduwe / weduwnaar', 'veuve / veuf'],
    ];
    const w = (12.13 - 2 * 0.3) / 3; const h = 1.85;
    tiles.forEach(([ic, nl, fr], i) => {
      const x = 0.6 + (i % 3) * (w + 0.3); const y = 2.15 + Math.floor(i / 3) * (h + 0.2);
      d.rect(s, x, y, w, h, { fill: 'bg2', line: BORDER, shadow: true });
      const ix = x + w / 2 - 0.45;
      d.ill(s, ic, ix + 0.05, y + 0.12, 0.8, 0.8);
      d.t(s, nl, x + 0.1, y + 0.98, w - 0.2, 0.45, { size: nl.length > 18 ? 16 : 20, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
      d.t(s, fr, x + 0.15, y + 1.43, w - 0.3, 0.32, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 6.15, 12.13, 0.7, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 6.33, 'accent6', 0.34, 12);
    d.t(s, 'marié {{à}}  →  //Ik ben getrouwd// <<met>> //Karim.//   (marié **à** Karim)', 2.45, 6.15, 10.1, 0.7, { size: 20, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 12 five verbs
  d.section('Les 5 verbes, questions, prépositions');
  {
    const s = d.page({ g: 12, tag: 'GRAMMAIRE', title: 'Les 5 verbes de la présentation : la formule' });
    d.rect(s, 0.6, 1.65, 12.13, 0.6, { fill: 'tx2', line: null });
    d.icon(s, 'FaMagic', 'accent1', 0.8, 1.78, 0.34);
    d.t(s, '**La formule magique** : ik = radical · jij/hij = radical + ##t## · pluriel = infinitif', 1.3, 1.65, 11.3, 0.6, { size: 18, color: 'bg1', valign: 'middle' });
    const C = [[0.6, 3.55], [4.3, 2.5], [6.95, 3.0], [10.1, 2.63]];
    const fills = ['FFFFFF', 'FFFFFF', LIGHT, GREY];
    const head = ['', 'ik', 'jij · u · hij · zij', 'wij · jullie · zij'];
    head.forEach((t, c) => {
      if (!t) return;
      d.rect(s, C[c][0], 2.42, C[c][1], 0.5, { fill: fills[c], line: c === 1 ? BORDER : null, radius: 0.06 });
      d.t(s, '^^' + t + '^^', C[c][0], 2.42, C[c][1], 0.5, { size: 18, align: 'center', valign: 'middle' });
    });
    const rows = [
      ['naam', 'heten', 's’appeler', 'heet', 'heet', 'heten'],
      ['woon', 'wonen', 'habiter', 'woon', 'woon##t##', 'wonen'],
      ['afkomst', 'komen', 'venir', 'kom', 'kom##t##', 'komen'],
      ['beroep', 'werken', 'travailler', 'werk', 'werk##t##', 'werken'],
      ['talen', 'spreken', 'parler', 'spreek', 'spreek##t##', 'spreken'],
    ];
    rows.forEach(([k, inf, fr, a, b, c], i) => {
      const y = 3.0 + i * 0.64; const h = 0.58;
      d.rect(s, C[0][0], y, C[0][1], h, { fill: 'bg2', line: null, radius: 0.06 });
      idDisc(s, k, C[0][0] + 0.1, y + 0.065, 0.45);
      d.t(s, `**${inf}**`, C[0][0] + 0.66, y, 1.5, h, { size: 21, valign: 'middle', color: 'tx2' });
      d.t(s, `(${fr})`, C[0][0] + 2.15, y, 1.4, h, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      [a, b, c].forEach((f, j) => {
        const [x, w] = C[j + 1];
        d.rect(s, x, y, w, h, { fill: fills[j + 1], line: j === 0 ? BORDER : null, radius: 0.06 });
        d.t(s, `**${f}**`, x, y, w, h, { size: 24, align: 'center', valign: 'middle' });
      });
      if (inf === 'komen') d.num(s, '!', C[1][0] + C[1][1] - 0.5, y + 0.11, 0.36, 'accent6', 16);
    });
    d.num(s, '!', 0.6, 6.32, 0.4, 'accent6', 16);
    d.t(s, '//komen// → //ik kom// (o court, exception) · //heten// → //hij heet// (pas de 2e t)', 1.15, 6.25, 11.5, 0.55, { size: 18, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 13 five questions
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'Les 5 questions clés et leurs réponses' });
    const rows = [
      ['naam', 'Hoe heet je?', 'Ik heet ##……##', 'Hoe heet u?'],
      ['woon', 'Waar woon je?', 'Ik woon in ##……##', 'Waar woont u?'],
      ['afkomst', 'Waar kom je vandaan?', 'Ik kom uit ##……##', 'Waar komt u vandaan?'],
      ['beroep', 'Wat doe je (van beroep)?', 'Ik werk als ##……## / Ik ben ##……## / Ik werk bij ##……##', 'Wat doet u?'],
      ['talen', 'Welke talen spreek je?', 'Ik spreek ##……## en een beetje Nederlands.', 'Welke talen spreekt u?'],
    ];
    [['QUESTION', 1.35], ['RÉPONSE', 5.12], ['VERSION POLIE (u)', 9.82]].forEach(([t, x]) => d.t(s, t, x, 1.65, 3, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 }));
    rows.forEach(([k, q, a, u], i) => {
      const y = 2.02 + i * 0.97; const h = 0.82;
      idDisc(s, k, 0.6, y + 0.1, 0.62);
      d.bubble(s, q, 1.35, y, 3.25, h, 'accent2', { size: 19 });
      arrow(s, 4.66, y + h / 2, 5.06, y + h / 2, 'accent5', 2);
      d.bubble(s, a, 5.12, y, 4.5, h, 'accent3', { size: 19 });
      d.rect(s, 9.82, y + 0.08, 2.91, h - 0.16, { fill: GREY, line: null, radius: 0.15 });
      d.t(s, u, 9.97, y + 0.08, 2.65, h - 0.16, { size: 17, italic: true, color: 'accent5', valign: 'middle', fit: true, max: 17, min: 13 });
    });
  }

  // ---------------------------------------------------------------- 14 prepositions (S10 rows)
  {
    const s = d.page({ g: 14, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE — les petits mots : in, uit, bij, als' });
    const rows = [
      ['FaMapMarkerAlt', 'J’habite {{à}} Namur', 'Ik woon <<in>> Namen.'],
      ['FaGlobeEurope', 'Je viens {{de}} Belgique', 'Ik kom <<uit>> België.'],
      ['FaBuilding', 'Je travaille {{chez}} Peeters & Co / {{dans}} une banque', 'Ik werk <<bij>> Peeters & Co / <<bij>> een bank.'],
      ['FaIdBadge', 'Je travaille {{comme}} comptable', 'Ik werk <<als>> boekhouder.'],
    ];
    rows.forEach(([ic, fr, nl], i) => {
      const y = 1.7 + i * 1.3; const h = 1.12;
      d.rect(s, 0.6, y, 12.13, h, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
      d.iconDisc(s, ic, 0.8, y + (h - 0.66) / 2, 0.66, 'accent6');
      d.t(s, fr, 1.65, y, 4.6, h, { size: 20, valign: 'middle', fit: true, max: 21, min: 15 });
      d.line(s, 6.3, y + h / 2, 6.95, y + h / 2, { color: 'accent6', lw: 2.75 });
      d.rect(s, 7.1, y + 0.14, 5.45, h - 0.28, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, nl, 7.3, y + 0.14, 5.1, h - 0.28, { size: 22, valign: 'middle', fit: true, max: 22, min: 15 });
    });
  }

  // ---------------------------------------------------------------- 15 Belgium map + languages
  {
    const s = d.page({ g: 15, tag: 'VOCABULAIRE', title: 'Villes et langues — la Belgique a deux noms' });
    const mx = (lon) => 0.6 + (lon - 2.5) * 1.49; const my = (lat) => 1.75 + (51.55 - lat) * 2.343;
    const P = BE_OUTLINE.map(([lo, la]) => [mx(lo), my(la)]);
    const minX = Math.min(...P.map((p) => p[0])); const minY = Math.min(...P.map((p) => p[1]));
    const maxX = Math.max(...P.map((p) => p[0])); const maxY = Math.max(...P.map((p) => p[1]));
    const R = P.map(([x, y]) => [x - minX, y - minY]);
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const n = R.length; const m0 = mid(R[n - 1], R[0]);
    const pts = [{ x: m0[0], y: m0[1], moveTo: true }];
    for (let i = 0; i < n; i++) { const m = mid(R[i], R[(i + 1) % n]); pts.push({ x: m[0], y: m[1], curve: { type: 'quadratic', x1: R[i][0], y1: R[i][1] } }); }
    pts.push({ close: true });
    s.addShape(d.S.CUSTOM_GEOMETRY, { x: minX, y: minY, w: maxX - minX, h: maxY - minY, points: pts, fill: { color: LIGHT }, line: { color: NAVY, width: 1.75 } });
    const cities = [
      ['Anvers', 'Antwerpen', 3.45, 2.42, 'r'], ['Malines', 'Mechelen', 3.62, 2.98, 'r'], ['Gand', 'Gent', 2.35, 2.85, 'l'],
      ['Courtrai', 'Kortrijk', 1.75, 3.45, 'b'], ['Bruxelles', 'Brussel', 3.3, 3.5, 'b'], ['Louvain', 'Leuven', 4.35, 3.5, 'r'],
      ['Mons', 'Bergen', 2.6, 4.45, 'b'], ['Namur', 'Namen', 4.05, 4.45, 'b'], ['Liège', 'Luik', 5.25, 4.0, 'r'],
    ];
    cities.forEach(([fr, nl, x, y, side]) => {
      d.icon(s, 'FaMapMarkerAlt', 'accent6', x - 0.15, y - 0.34, 0.34);
      const w = 1.6; const lx = side === 'r' ? x + 0.24 : side === 'l' ? x - 0.24 - w : x - w / 2 + (nl === 'Kortrijk' ? 0.15 : 0);
      const ly = side === 'b' ? y + 0.07 : y - 0.34;
      const al = side === 'r' ? 'left' : side === 'l' ? 'right' : 'center';
      d.t(s, fr, lx, ly, w, 0.22, { size: 12, color: '7D8898', align: al, valign: 'middle' });
      d.t(s, nl, lx, ly + 0.2, w, 0.3, { size: 16, bold: true, color: 'tx2', align: al, valign: 'middle' });
    });
    // country → language
    const tx = 7.0; const tw = 12.73 - tx;
    d.rect(s, tx, 1.65, tw, 0.45, { fill: 'tx2', line: null, radius: 0.06 });
    d.t(s, 'pays', tx + 1.15, 1.65, 2.2, 0.45, { size: 15, bold: true, color: 'bg1', valign: 'middle' });
    d.t(s, 'langue', tx + 3.95, 1.65, 1.8, 0.45, { size: 15, bold: true, color: 'bg1', valign: 'middle' });
    const rows = [[['BE', 'FR'], 'België · Frankrijk', 'Frans'], [['NL'], 'Nederland', 'Nederlands'], [['EN'], 'Engeland', 'Engels'], [['DE'], 'Duitsland', 'Duits'],
      [['ES'], 'Spanje', 'Spaans'], [['IT'], 'Italië', 'Italiaans'], [['MA'], 'Marokko', 'Arabisch'], [['TR'], 'Turkije', 'Turks']];
    rows.forEach(([fl, land, taal], i) => {
      const y = 2.17 + i * 0.5;
      d.rect(s, tx, y, tw, 0.46, { fill: i % 2 ? 'bg1' : 'bg2', line: null, radius: 0.04 });
      fl.forEach((f, k) => flag(s, f, tx + 0.1 + k * 0.52, y + 0.07, 0.46, 0.32));
      d.t(s, land, tx + 1.15, y, 2.4, 0.46, { size: 17, valign: 'middle', fit: true, max: 17, min: 14 });
      d.line(s, tx + 3.4, y + 0.23, tx + 3.8, y + 0.23, { color: 'accent5', lw: 1.5 });
      d.t(s, `**${taal}**`, tx + 3.95, y, 1.75, 0.46, { size: 18, color: 'tx2', valign: 'middle' });
    });
    d.rect(s, tx, 6.25, tw, 0.6, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.t(s, '⚠ //Ik spreek Frans// (sans article : {{het Frans}})', tx + 0.2, 6.25, tw - 0.3, 0.6, { size: 17, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 16 je ↔ u mirror
  {
    const s = d.page({ g: 16, tag: 'GRAMMAIRE', title: 'Je ou u ? Deux versions d’une même question' });
    const lx = 0.6; const w = 5.2; const rx = 12.73 - w;
    d.rect(s, lx, 1.65, w, 4.25, { fill: LIGHT, line: null, radius: 0.1 });
    d.rect(s, rx, 1.65, w, 4.25, { fill: 'tx2', line: null, radius: 0.1 });
    d.icon(s, 'FaUserFriends', 'accent2', lx + 0.3, 1.8, 0.55);
    d.t(s, 'informeel', lx + 1.05, 1.78, 3, 0.6, { size: 22, bold: true, color: 'accent2', valign: 'middle', head: true });
    d.icon(s, 'FaConciergeBell', 'FFFFFF', rx + 0.3, 1.8, 0.55);
    d.t(s, 'formeel', rx + 1.05, 1.78, 3, 0.6, { size: 22, bold: true, color: 'bg1', valign: 'middle', head: true });
    const rows = [
      ['Hoe heet **je**?', 'Hoe heet ##u##?'],
      ['Waar woon **je**?', 'Waar woon##t## ##u##?'],
      ['Spreek **je** Nederlands?', 'Spreek##t## ##u## Nederlands?'],
      ['Wat is **je** naam?', 'Wat is ##uw## naam?'],
    ];
    rows.forEach(([a, b], i) => {
      const y = 2.6 + i * 0.82;
      d.rect(s, lx + 0.25, y, w - 0.5, 0.66, { fill: 'FFFFFF', line: null, radius: 0.12 });
      d.t(s, a, lx + 0.45, y, w - 0.9, 0.66, { size: 23, valign: 'middle' });
      d.line(s, lx + w + 0.12, y + 0.33, rx - 0.12, y + 0.33, { color: 'accent1', lw: 2.5 });
      d.rect(s, rx + 0.25, y, w - 0.5, 0.66, { fill: 'FFFFFF', tr: 88, line: 'FFFFFF', ltr: 60, radius: 0.12 });
      d.t(s, b, rx + 0.45, y, w - 0.9, 0.66, { size: 23, color: 'bg1', valign: 'middle' });
    });
    d.rect(s, 0.6, 6.1, 12.13, 0.75, { fill: 'accent1', tr: 88, line: 'accent1', lw: 1 });
    d.icon(s, 'FaLightbulb', 'accent1', 0.8, 6.3, 0.36);
    d.t(s, 'Avec //u//, le verbe garde son ##t## · le possessif poli est ##uw## (votre)', 1.3, 6.1, 11.3, 0.75, { size: 19, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 17 annotated form
  d.section('Le formulaire et l’accueil');
  {
    const s = d.page({ g: 17, tag: 'VOCABULAIRE', title: 'Le formulaire — les mots à reconnaître' });
    const fx = 3.75; const fw = 5.85; const fy = 1.65;
    const rowY = (r) => 2.32 + r * 0.405;
    // arrows first
    const tags = [[0, 'l', 'prénom'], [3, 'l', 'date de naissance'], [7, 'l', 'portable'], [1, 'r', 'nom'], [2, 'r', 'sexe'], [10, 'r', 'signature']];
    tags.forEach(([r, side, fr]) => {
      const y = rowY(r) + 0.2;
      if (side === 'l') { arrow(s, 3.25, y, fx - 0.04, y, 'accent5', 1.25); } else arrow(s, 10.08, y, fx + fw + 0.04, y, 'accent5', 1.25);
      const x = side === 'l' ? 0.6 : 10.08;
      d.rect(s, x, y - 0.21, 2.6, 0.42, { fill: 'bg1', line: 'accent5', lw: 1, radius: 0.2 });
      d.t(s, fr, x, y - 0.21, 2.6, 0.42, { size: 16, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.rect(s, fx, fy, fw, 5.2, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
    d.rect(s, fx, fy, fw, 0.52, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'INSCHRIJVINGSFORMULIER', fx, fy, fw, 0.52, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 1 });
    const field = (r, label, x0, x1, ok) => {
      const y = rowY(r);
      let x = x0;
      if (ok) d.icon(s, 'FaCheckCircle', 'accent3', x, y + 0.1, 0.22);
      x += 0.28;
      const lw = plain(label).length * 0.112 + 0.06;
      d.t(s, label, x, y, lw + 0.4, 0.4, { size: 14, bold: true, color: 'tx2', valign: 'middle' });
      d.line(s, x + lw + 0.08, y + 0.3, x1, y + 0.3, { color: '9AA6B6', lw: 1, arrow: false, dash: 'sysDot' });
    };
    const L = fx + 0.12; const M = fx + fw / 2 + 0.05; const E = fx + fw - 0.15;
    field(0, 'Voornaam', L, E, true);
    field(1, 'Achternaam / Familienaam', L, E, true);
    { const y = rowY(2); d.t(s, 'Geslacht :', L + 0.28, y, 1.1, 0.4, { size: 14, bold: true, color: 'tx2', valign: 'middle' });
      ['M', 'V', 'X'].forEach((g, k) => { const x = L + 1.5 + k * 0.85; d.rect(s, x, y + 0.1, 0.2, 0.2, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0 }); d.t(s, g, x + 0.27, y, 0.4, 0.4, { size: 14, bold: true, color: 'tx2', valign: 'middle' }); }); }
    field(3, 'Geboortedatum', L, M - 0.15); field(3, 'Geboorteplaats', M, E);
    field(4, 'Nationaliteit', L, E);
    field(5, 'Adres : straat', L, M + 0.3); field(5, 'huisnummer', M + 0.3, E);
    field(6, 'postcode', L, M - 0.15); field(6, 'gemeente', M, E);
    field(7, 'Gsm-nummer', L, M - 0.15); field(7, 'E-mailadres', M, E);
    field(8, 'Burgerlijke staat', L, E, true);
    field(9, 'Beroep', L, M - 0.15, true); field(9, 'Moedertaal', M, E);
    field(10, 'Datum', L, M - 0.15); field(10, 'Handtekening', M, E);
    d.icon(s, 'FaCheckCircle', 'accent3', 0.6, 6.5, 0.26);
    d.t(s, '= déjà vu en classe', 0.95, 6.45, 2.8, 0.36, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 18 spell + phone
  {
    const s = d.page({ g: 18, tag: 'PRONONCIATION', title: 'Kunt u dat spellen? — épeler et dicter un numéro' });
    d.bubble(s, ['**Kunt u dat spellen?**', '//(Pouvez-vous l’épeler ?)//'], 0.6, 1.7, 5.7, 0.95, 'accent2', { size: 19 });
    arrow(s, 1.3, 2.7, 1.3, 2.95, 'accent5', 2);
    d.bubble(s, '**B – E – N – A – L – I.**', 0.6, 3.0, 5.7, 0.7, 'accent3', { size: 22 });
    'BENALI'.split('').forEach((L, i) => {
      const x = 0.68 + i * 0.95;
      d.rect(s, x, 3.95, 0.75, 0.75, { fill: 'FFFFFF', line: 'tx2', lw: 2, radius: 0.06, shadow: true });
      d.t(s, L, x, 3.95, 0.75, 0.75, { size: 30, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
    });
    d.t(s, 'aussi :', 0.6, 5.0, 1.0, 0.6, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    d.bubble(s, 'Hoe schrijf je dat?', 1.55, 5.0, 3.6, 0.6, 'accent5', { size: 18 });
    // phone
    const px = 6.6; const pw = 3.2;
    d.rect(s, px, 1.68, pw, 4.15, { fill: '1B2333', line: null, radius: 0.18, shadow: true });
    d.rect(s, px + 0.15, 1.98, pw - 0.3, 3.5, { fill: 'bg2', line: null, radius: 0.06 });
    d.oval(s, px + pw / 2 - 0.12, 5.55, 0.24, 0.2, { fill: '4A5A70' });
    d.icon(s, 'FaPhoneAlt', 'accent3', px + 0.3, 2.12, 0.3);
    d.t(s, '0470 12 34 56', px + 0.15, 2.45, pw - 0.3, 0.55, { size: 24, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
    [['0470', 'nul vier zeven nul'], ['12', 'twaalf'], ['34', 'vierendertig'], ['56', 'zesenvijftig']].forEach(([n, w], i) => {
      const y = 3.12 + i * 0.57;
      d.rect(s, px + 0.28, y, pw - 0.56, 0.48, { fill: 'FFFFFF', line: BORDER, radius: 0.08 });
      d.t(s, n, px + 0.36, y, 0.6, 0.48, { size: 15, bold: true, color: 'accent1', valign: 'middle' });
      d.t(s, w, px + 0.95, y, pw - 1.25, 0.48, { size: 15, valign: 'middle', fit: true, max: 15, min: 12 });
    });
    const bx = 10.05; const bw = 12.73 - bx;
    d.bubble(s, 'Wat is uw gsm-nummer?', bx, 1.7, bw, 0.95, 'accent2', { size: 18 });
    d.icon(s, 'FaRedo', 'accent5', bx + bw / 2 - 0.15, 3.05, 0.3);
    d.bubble(s, ['Kunt u dat herhalen, alstublieft?', '//(Pouvez-vous répéter ?)//'], bx, 3.55, bw, 1.55, 'accent2', { size: 17 });
    // traps band
    d.rect(s, 0.6, 6.05, 12.13, 0.8, { fill: 'bg2', line: BORDER });
    d.t(s, 'LETTRES-PIÈGES (M1)', 0.8, 6.05, 2.4, 0.8, { size: 12, bold: true, color: 'accent5', cs: 1, valign: 'middle' });
    [['E', 'é'], ['G', 'ghé'], ['H', 'ha'], ['J', 'yé'], ['U', 'u'], ['W', 'wé'], ['IJ', 'è-i']].forEach(([L, p], i) => {
      const x = 3.25 + i * 1.33;
      d.t(s, L, x, 6.12, 0.5, 0.66, { size: 24, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
      d.t(s, `« ${p} »`, x + 0.48, 6.12, 0.85, 0.66, { size: 14, bold: true, color: 'accent1', valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 19 model dialogue
  {
    const s = d.page({ g: 19, tag: 'MISE EN SITUATION', title: 'Dialogue modèle — à l’accueil' });
    const rows = [
      ['Goedemorgen. Kan ik u helpen?', 'Goedemorgen. Ik wil me inschrijven voor de cursus Nederlands.'],
      ['Prima. Wat is uw naam?', 'Karim Benali.'],
      ['Kunt u dat spellen?', 'B-E-N-A-L-I.'],
      ['Waar woont u?', 'In Namen.'],
      ['Wat is uw gsm-nummer?', '0470 12 34 56.'],
      ['Wat doet u van beroep?', 'Ik ben boekhouder.'],
      ['Welke talen spreekt u?', 'Frans, Arabisch en een beetje Nederlands.'],
      ['Dank u wel. Tot ziens!', 'Tot ziens!'],
    ];
    const rh = 0.58; const st = 0.655;
    rows.forEach(([e, k], i) => {
      const y = 1.68 + i * st;
      d.iconDisc(s, 'FaHeadset', 0.6, y + (rh - 0.42) / 2, 0.42, 'purple');
      d.bubble(s, e, 1.12, y, 3.3, rh, 'purple', { size: 15 });
      d.bubble(s, k, 4.55, y, 4.2, rh, 'accent2', { size: 15 });
      d.iconDisc(s, 'FaUserTie', 8.83, y + (rh - 0.42) / 2, 0.42, 'accent2');
    });
    // filled registration form
    const fx = 9.45; const fw = 12.73 - fx;
    d.rect(s, fx, 1.68, fw, 5.17, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
    d.rect(s, fx, 1.68, fw, 0.5, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'INSCHRIJVINGSFORMULIER', fx, 1.68, fw, 0.5, { size: 13, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    [['Voornaam', 'Karim'], ['Achternaam', 'Benali'], ['Gemeente', 'Namen'], ['Gsm-nummer', '0470 12 34 56'], ['Beroep', 'boekhouder'], ['Talenkennis', 'Frans, Arabisch en een beetje Nederlands']].forEach(([l, v], i) => {
      const y = 2.3 + i * 0.75;
      d.t(s, l, fx + 0.2, y, fw - 0.4, 0.26, { size: 12, color: 'accent5' });
      d.t(s, v, fx + 0.2, y + 0.24, fw - 0.4, 0.42, { size: 16, bold: true, italic: true, color: 'accent2', valign: 'middle', fit: true, max: 16, min: 12 });
      d.line(s, fx + 0.2, y + 0.68, fx + fw - 0.2, y + 0.68, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
    });
  }

  // ---------------------------------------------------------------- 20 divider
  d.divider({ g: 20, tiles: [
    ['Associer', '★', 'FaLink'], ['Thème et question', '★', 'FaQuestionCircle'], ['Karim se présente', '★', 'FaPencilAlt'], ['Geslaagd of gezakt?', '★★', 'FaSearch'],
    ['Je → u', '★★', 'FaExchangeAlt'], ['Interview croisée', '★★', 'FaMicrophone'], ['Mises en situation', '★★★', 'FaTheaterMasks'], ['Woordwolk', '★', 'FaCloud'],
  ] });

  // ---------------------------------------------------------------- 21–22 E2 matching
  const match = (s, mode, top, Lh, Rh, L, R, sol, o = {}) => {
    d.t(s, Lh, 0.6, top, 4, 0.3, { size: 12, bold: true, color: 'accent3', cs: 2 });
    const lw = o.lw || 4.0; const rx = o.rx || 7.7; const rw = 12.73 - rx;
    d.t(s, Rh, rx, top, 4, 0.3, { size: 12, bold: true, color: 'accent4', cs: 2 });
    const y0 = top + 0.38; const n = Math.max(L.length, R.length); const gap = 0.1;
    const rh = Math.min(0.62, (6.85 - y0 - gap * (n - 1)) / n);
    const yc = (i) => y0 + i * (rh + gap) + rh / 2;
    if (mode === 'a') sol.forEach(([i, j]) => d.line(s, 0.6 + lw + 0.1, yc(i), rx - 0.12, yc(j), { color: 'tx2', lw: 2.25 }));
    L.forEach((t, i) => {
      const y = yc(i) - rh / 2;
      d.rect(s, 0.6, y, lw, rh, { fill: 'accent3', line: null, radius: 0.3 });
      d.oval(s, 0.68, y + (rh - 0.4) / 2, 0.4, 0.4, { fill: 'FFFFFF' });
      d.t(s, String(i + 1), 0.68, y + (rh - 0.4) / 2, 0.4, 0.4, { size: 15, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
      d.t(s, t, 1.2, y, lw - 0.7, rh, { size: 19, bold: true, color: 'bg1', valign: 'middle', fit: true, max: 19, min: 14 });
      d.dot(s, 0.6 + lw + 0.1, yc(i), 'tx2', 0.14);
    });
    R.forEach((t, j) => {
      const y = yc(j) - rh / 2;
      d.rect(s, rx, y, rw, rh, { fill: 'bg1', line: 'accent4', lw: 1.75, radius: 0.1 });
      d.oval(s, rx + 0.1, y + (rh - 0.4) / 2, 0.4, 0.4, { fill: 'accent4' });
      d.t(s, 'abcdefgh'[j], rx + 0.1, y + (rh - 0.4) / 2, 0.4, 0.4, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, t, rx + 0.65, y, rw - 0.8, rh, { size: 19, valign: 'middle', italic: o.italic, fit: true, max: 19, min: 14 });
      d.dot(s, rx - 0.1, yc(j), 'tx2', 0.14);
    });
  };
  d.ex({ g: 21, title: 'Exercice 1 — Associer : la fiche de Karim', stars: '★', instr: 'Reliez chaque rubrique de la fiche de Karim à la bonne réponse.' }, (s, mode, top) => {
    match(s, mode, top, 'RUBRIQUES', 'RÉPONSES',
      ['leeftijd', 'woonplaats', 'nationaliteit', 'burgerlijke staat', 'beroep', 'talenkennis', 'gezin', 'gsm-nummer'],
      ['0470 12 34 56', 'getrouwd', 'Frans, Arabisch', '32 jaar', 'boekhouder', 'Namen', 'Belgisch', 'een vrouw en een dochter'],
      [[0, 3], [1, 5], [2, 6], [3, 1], [4, 4], [5, 2], [6, 7], [7, 0]]);
  });
  d.ex({ g: 22, title: 'Exercice 2 — Quel thème pour quelle question ?', stars: '★', instr: 'Quelle question permet d’obtenir l’information ? Reliez chaque thème à sa question.' }, (s, mode, top) => {
    match(s, mode, top, 'THÈMES', 'QUESTIONS',
      ['Moedertaal', 'Hobby\'s', 'Familie', 'Vervoer', 'Talen', 'Leeftijd', 'Land van herkomst'],
      ['Hoe oud ben je?', 'Waar kom je vandaan?', 'Wat is je moedertaal?', 'Heb je broers of zussen?', 'Hoe kom je naar het werk?', 'Spreek je Engels?', 'Wat doe je graag?'],
      [[0, 2], [1, 6], [2, 3], [3, 4], [4, 5], [5, 0], [6, 1]]);
  });

  // ---------------------------------------------------------------- 23 E1 Karim (business card)
  d.ex({ g: 23, title: 'Exercice 3 — Karim se présente', stars: '★', instr: 'Complétez le texte avec la bonne forme du verbe entre parenthèses.' }, (s, mode, top) => {
    const h = 6.85 - top;
    d.rect(s, 0.6, top, 12.13, h, { fill: 'bg1', line: 'tx2', lw: 1.5, radius: 0.08, shadow: true });
    d.rect(s, 0.75, top + 0.15, 2.9, h - 0.3, { fill: 'bg2', line: null, radius: 0.08 });
    d.oval(s, 1.15, top + 0.4, 2.1, 2.1, { fill: 'FFFFFF', line: 'tx2', lw: 2 });
    d.ill(s, 'man-office-worker', 1.45, top + 0.6, 1.5, 1.5);
    d.t(s, 'Karim Benali', 0.8, top + 2.65, 2.8, 0.45, { size: 19, bold: true, color: 'tx2', align: 'center', head: true });
    ['naam', 'leeftijd', 'woon', 'afkomst', 'talen', 'beroep'].forEach((k, i) => d.icon(s, ID[k][0], ID[k][1], 1.0 + (i % 3) * 0.85, top + 3.25 + Math.floor(i / 3) * 0.55, 0.36));
    const txt = 'Hallo! Ik [[heet]] °°(heten)°° Karim Benali. Ik [[ben]] °°(zijn)°° 32 jaar. Ik [[woon]] °°(wonen)°° in Namen, maar ik [[werk]] °°(werken)°° in Brussel. Ik [[kom]] °°(komen)°° uit België; mijn ouders [[komen]] °°(komen)°° uit Marokko. Ik [[spreek]] °°(spreken)°° Frans, Arabisch en een beetje Nederlands. Ik [[ben]] °°(zijn)°° getrouwd en ik [[heb]] °°(hebben)°° een dochter. Ze [[heet]] °°(heten)°° Lina en ze [[is]] °°(zijn)°° vijf jaar.';
    greyText(s, txt, 3.95, top + 0.2, 8.55, h - 0.4, mode, { max: 22, min: 16, ls: 1.3 });
  });

  // ---------------------------------------------------------------- 24 E6 detective
  d.ex({ g: 24, title: 'Exercice 4 — Geslaagd of gezakt?', stars: '★★', instr: 'Julie se présente. Geslaagd of gezakt ? Votez, puis trouvez les 7 erreurs.' }, (s, mode, top) => {
    d.oval(s, 0.85, top + 0.1, 2.1, 2.1, { fill: 'bg2', line: 'accent3', lw: 2.5 });
    d.ill(s, 'woman-health-worker', 1.15, top + 0.35, 1.5, 1.5);
    d.t(s, 'Julie uit Namen', 0.6, top + 2.3, 2.6, 0.45, { size: 18, bold: true, color: 'tx2', align: 'center', head: true });
    [['Geslaagd', 'accent3', 'FaThumbsUp'], ['Gezakt', 'accent6', 'FaThumbsDown']].forEach(([t, c, ic], i) => {
      const y = top + 3.0 + i * 0.95; const on = mode === 'q' || i === 1;
      d.rect(s, 0.75, y, 2.3, 0.75, { fill: c, tr: on ? 0 : 75, line: null, radius: 0.35, shadow: on });
      d.icon(s, ic, 'FFFFFF', 0.98, y + 0.2, 0.36);
      d.t(s, t, 1.48, y, 1.55, 0.75, { size: 20, bold: true, color: 'bg1', valign: 'middle' });
      if (mode === 'a' && i === 1) d.icon(s, 'FaCheckCircle', 'accent3', 2.9, y - 0.12, 0.34);
    });
    const fx = 3.5; const fw = 12.73 - fx; const fh = mode === 'q' ? 6.85 - top : 2.95;
    d.rect(s, fx, top, fw, fh, { fill: 'FFFFFF', line: 'accent3', lw: 2.5, radius: 0.08, shadow: true });
    d.icon(s, 'FaSearch', 'accent3', fx + fw - 0.7, top + 0.18, 0.45);
    const ct = mode === 'q' ? '7 erreurs cachées' : '7 / 7'; const cw0 = 0.4 + ct.length * (13 / 12) * 0.118 + (/[^\x00-\x7F]/.test(ct) ? 0.12 : 0);
    d.chip(s, ct, fx + fw - 0.85 - cw0, top + 0.22, 'accent1', 0.36, 13);
    const txt = '« Goeiedag! Ik ben Julie en ik {{heb}}++ ben++ 25 jaar. Ik {{woone}}++ woon++ {{à}}++ in++ Namen, maar ik werk in Brussel {{als een}}++ als++ verpleegkundige. Ik kom {{van}}++ uit++ België. Ik {{sprek}}++ spreek++ Frans en een beetje {{Neederlands}}++ Nederlands++. Hoe heet u?++ ✓++ »';
    d.t(s, txt, fx + 0.35, top + 0.65, fw - 0.7, fh - 0.8, { size: mode === 'q' ? 26 : 21, mode, valign: 'middle', ls: 1.15 });
    if (mode === 'a') {
      const fixes = [['heb → ben', 'd. 8'], ['woone → woon', 'd. 12'], ['à → in', 'd. 14'], ['als een → als', 'd. 8'], ['van → uit', 'd. 14'], ['sprek → spreek', 'M1'], ['Neederlands → Nederlands', 'M1']];
      const cw = (fw - 0.2) / 3; const rh = 0.46;
      fixes.forEach(([f, ref], i) => {
        const x = fx + (i % 3) * (cw + 0.1); const y = top + 3.12 + Math.floor(i / 3) * (rh + 0.08);
        d.rect(s, x, y, cw, rh, { fill: 'bg2', line: BORDER, radius: 0.08 });
        d.num(s, i + 1, x + 0.07, y + 0.06, 0.34, 'accent6', 12);
        d.t(s, f, x + 0.5, y, cw - 1.15, rh, { size: 15, bold: true, valign: 'middle', fit: true, max: 15, min: 12 });
        d.t(s, ref, x + cw - 0.68, y, 0.6, rh, { size: 13, italic: true, color: 'accent5', valign: 'middle', align: 'right' });
      });
    }
  });

  // ---------------------------------------------------------------- 25 E3 je → u
  d.ex({ g: 25, title: 'Exercice 5 — Familier → poli', stars: '★★', instr: 'Posez la même question poliment : je → u.' }, (s, mode, top) => {
    const je = ['Hoe heet je?', 'Waar woon je?', 'Spreek je Nederlands?', 'Ben je getrouwd?', 'Heb je kinderen?', 'Waar kom je vandaan?', 'Wat is je beroep?', 'Hoe gaat het met jou?'];
    const u = ['Hoe heet **u**?', 'Waar woon##t## **u**?', 'Spreek##t## **u** Nederlands?', 'Ben##t## **u** getrouwd?', 'Heb##t## **u** / ##Heeft## **u** kinderen?', 'Waar kom##t## **u** vandaan?', 'Wat is ##uw## beroep?', 'Hoe gaat het met **u**?'];
    d.icon(s, 'FaUserFriends', 'accent5', 1.15, top + 0.02, 0.36);
    d.t(s, 'informeel · je', 1.6, top, 3, 0.4, { size: 15, bold: true, color: 'accent5', valign: 'middle' });
    d.icon(s, 'FaConciergeBell', 'tx2', 7.6, top + 0.02, 0.36);
    d.t(s, 'formeel · u', 8.05, top, 3, 0.4, { size: 15, bold: true, color: 'tx2', valign: 'middle' });
    const y0 = top + 0.48; const st = (6.85 - y0) / 8; const h = st - 0.07;
    je.forEach((q, i) => {
      const y = y0 + i * st;
      d.num(s, i + 1, 0.6, y + (h - 0.38) / 2, 0.38, 'accent5', 13);
      d.rect(s, 1.1, y, 4.65, h, { fill: GREY, line: null, radius: 0.1 });
      d.t(s, q, 1.3, y, 4.3, h, { size: 19, valign: 'middle' });
      s.addText('je → u', { shape: d.S.RIGHT_ARROW, x: 5.9, y: y + (h - 0.4) / 2, w: 1.5, h: 0.4, fill: { color: 'D9700F' }, line: { color: 'D9700F', width: 0 }, color: 'FFFFFF', bold: true, fontSize: 12, align: 'center', valign: 'middle', margin: 0 });
      d.rect(s, 7.55, y, 5.18, h, { fill: 'tx2', line: null, radius: 0.1 });
      if (mode === 'a') d.t(s, u[i], 7.75, y, 4.85, h, { size: 19, color: 'bg1', valign: 'middle' });
      else d.line(s, 7.8, y + h - 0.12, 12.45, y + h - 0.12, { color: '8FA3BF', lw: 1, arrow: false, dash: 'sysDot' });
    });
  });

  // ---------------------------------------------------------------- 26 interview croisée
  {
    const s = d.page({ g: 26, tag: 'JIJ NU !', title: 'Exercice 6 — Interview croisée', stars: '★★' });
    const qs = [['naam', 'Hoe heet je?'], ['leeftijd', 'Hoe oud ben je?'], ['woon', 'Waar woon je?'], ['afkomst', 'Waar kom je vandaan?'], ['beroep', 'Wat doe je van beroep?'], ['talen', 'Welke talen spreek je?']];
    d.rect(s, 1.3, 1.68, 3.35, 0.45, { fill: 'tx2', line: null, radius: 0.06 });
    d.t(s, 'Ma question', 1.3, 1.68, 3.35, 0.45, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.rect(s, 4.75, 1.68, 2.55, 0.45, { fill: 'accent3', line: null, radius: 0.06 });
    d.t(s, 'Sa réponse', 4.75, 1.68, 2.55, 0.45, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    qs.forEach(([k, q], i) => {
      const y = 2.25 + i * 0.77; const h = 0.67;
      idDisc(s, k, 0.65, y + 0.06, 0.55);
      d.rect(s, 1.3, y, 3.35, h, { fill: 'bg2', line: null, radius: 0.08 });
      d.t(s, q, 1.45, y, 3.1, h, { size: 18, valign: 'middle', fit: true, max: 18, min: 14 });
      d.rect(s, 4.75, y, 2.55, h, { fill: 'FFFFFF', line: BORDER, radius: 0.08 });
      d.line(s, 4.9, y + h - 0.15, 7.15, y + h - 0.15, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
    });
    const cx = 7.65; const cw = 12.73 - cx;
    d.card(s, cx, 1.68, cw, 5.17, { band: 'PRÉSENTEZ VOTRE VOISIN', color: 'purple' });
    d.word(s, '^^ik^^', cx + 0.5, 2.5, 1.2, 0.7, 'accent2', { size: 26 });
    s.addShape(d.S.RIGHT_ARROW, { x: cx + 1.9, y: 2.63, w: 1.1, h: 0.44, fill: { color: 'D9700F' }, line: { color: 'D9700F', width: 0 } });
    d.word(s, '^^hij / zij^^', cx + 3.2, 2.5, 1.7, 0.7, 'accent2', { size: 24 });
    d.t(s, ['« Dit is Karim.', '**Hij** is 32 jaar.', '**Hij** woon##t## in Namen.', '**Hij** kom##t## uit België.', '**Hij** werk##t## als boekhouder.', '**Hij** spreek##t## Frans en Arabisch. »'],
      cx + 0.4, 3.5, cw - 0.7, 3.25, { size: 20, fit: true, max: 20, min: 14, gap: 8 });
  }

  // ---------------------------------------------------------------- 27–29 role plays
  const idCard = (s, x, y, w, h) => {
    d.rect(s, x, y, w, h, { fill: 'F6EEF2', line: 'accent4', lw: 1.25, radius: 0.1, shadow: true });
    d.rect(s, x, y, w, 0.4, { fill: 'accent4', line: null, radius: 0.1 });
    d.rect(s, x, y + 0.25, w, 0.15, { fill: 'accent4', line: null, radius: 0 });
    d.t(s, 'IDENTITEITSKAART', x + 0.15, y, w - 0.3, 0.4, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
    d.rect(s, x + 0.2, y + 0.55, 0.95, 1.15, { fill: 'FFFFFF', line: BORDER, radius: 0.04 });
    d.ill(s, 'man-office-worker', x + 0.28, y + 0.68, 0.8, 0.8);
    [['Naam', 'Benali'], ['Voornaam', 'Karim'], ['Nationaliteit', 'Belgisch']].forEach(([l, v], i) => {
      const yy = y + 0.52 + i * 0.4;
      d.t(s, l, x + 1.35, yy, 1.2, 0.36, { size: 11, color: 'accent5', valign: 'middle' });
      d.t(s, v, x + 2.5, yy, w - 2.6, 0.36, { size: 14, bold: true, valign: 'middle' });
    });
  };
  d.roleplay({
    g: 27, title: 'Exercice 7a — Inscription au cours de néerlandais',
    scenario: '**Scénario** : vous voulez vous inscrire à un cours de néerlandais (CVO). Vous présentez votre carte d’identité.',
    a: ['**cursist**', 'Vous répondez aux questions et vous épelez votre nom.'],
    b: ['**medewerker onthaal**', 'Vous posez les questions, vous vérifiez la carte d’identité et vous remplissez la fiche.'],
    bank: 'Mag ik uw identiteitskaart, alstublieft? · Wat is uw naam? · Kunt u dat spellen? · Waar woont u? · Wat is uw gsm-nummer? · Wat is uw moedertaal? · Welke andere talen spreekt u? · Dank u wel.',
    doc: (s, x, y, w, h) => {
      d.form(s, x, y, w, 3.2, 'INSCHRIJVINGSFORMULIER', ['Voornaam', 'Achternaam', 'Adres', 'Gsm-nummer', 'Moedertaal', 'Talenkennis']);
      idCard(s, x, y + 3.4, w, h - 3.4);
    },
  });
  d.roleplay({
    g: 28, title: 'Exercice 7b — La salle de sport à Kortrijk',
    scenario: '**Scénario** : vous voulez devenir membre d’une salle de sport à Kortrijk.',
    a: 'Vous donnez toutes les informations nécessaires.',
    b: 'Vous êtes employé(e) de la salle : vous posez les questions et vous vérifiez que le formulaire est complet.',
    bank: '//(en plus de l’exercice 7a)// · Welke dagen wilt u sporten? · Op maandag en woensdag. · Hoe komt u naar de club? · Met de fiets.',
    doc: (s, x, y, w, h) => {
      d.form(s, x, y, w, h, 'Sportclub Vitaal Kortrijk', ['naam', 'adres', 'geboortedatum', 'gsm', 'e-mail', 'beroep', 'gewenste dagen'], { color: 'accent3' });
      d.icon(s, 'FaDumbbell', 'accent3', x + w - 0.6, y + 0.1, 0.36);
      d.icon(s, 'FaDumbbell', 'E3E7ED', x + w / 2 - 0.45, y + h - 1.0, 0.9);
    },
  });
  d.roleplay({
    g: 29, title: 'Exercice 7c — Un job de week-end',
    scenario: '**Scénario** : un emploi à temps partiel dans une brasserie. Encore à l’école, vous ne pouvez travailler que le week-end.',
    a: ['**étudiant·e**', 'Vous vous présentez et vous dites quand vous êtes disponible.'],
    b: ['**gérant·e**', 'Vous posez les questions de la fiche de candidature.'],
    bank: 'Hoe heet je? · Hoe oud ben je? · Welke talen spreek je? · Ik kan alleen in het weekend werken. · Heb je ervaring? //(de l’expérience ?)// — Nee, nog niet. / Ja, een beetje.',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y + 0.25, w, h - 0.25, { fill: 'FFF6EC', line: 'accent1', lw: 2, radius: 0.08, shadow: true });
      d.iconDisc(s, 'GiKnifeFork', x + w / 2 - 0.55, y + 0.65, 1.1, 'accent1');
      d.t(s, 'Brasserie De Lepel', x + 0.2, y + 1.95, w - 0.4, 0.6, { size: 24, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
      d.t(s, 'zoekt', x + 0.2, y + 2.6, w - 0.4, 0.4, { size: 18, italic: true, align: 'center', valign: 'middle' });
      d.t(s, 'jobstudenten', x + 0.2, y + 3.0, w - 0.4, 0.65, { size: 30, bold: true, color: 'accent1', align: 'center', valign: 'middle', head: true });
      d.line(s, x + 0.5, y + 3.95, x + w - 0.5, y + 3.95, { color: 'accent1', lw: 1, arrow: false, dash: 'dash' });
      d.icon(s, 'FaCalendarAlt', 'tx2', x + w / 2 - 0.95, y + 4.3, 0.42);
      d.t(s, 'weekend', x + w / 2 - 0.4, y + 4.2, 2.0, 0.6, { size: 24, bold: true, color: 'tx2', valign: 'middle' });
      d.chip(s, 'registre : je !', x + w - (0.4 + 15 * (14 / 12) * 0.118), y - 0.02, 'accent1', 0.42, 14);
    },
  });

  // ---------------------------------------------------------------- 30 E7 woordwolk
  const cats = [
    ['WERK', 'accent1', 'FaShoppingBasket', ['baan', 'job', 'beroep', 'functie', 'collega']],
    ['SPREKEN', 'accent2', 'FaShoppingBasket', ['praten', 'zeggen', 'vertellen', 'babbelen']],
    ['LEREN', 'accent3', 'FaShoppingBasket', ['studeren', 'oefenen', 'herhalen', 'cursus']],
    ['intrus', 'accent5', 'FaTrashAlt', ['wonen', 'heten']],
  ];
  d.ex({ g: 30, title: 'Exercice 8 — Woordwolk', stars: '★', instr: 'En 1 minute, rangez chaque mot dans le bon panier !' }, (s, mode, top) => {
    if (mode === 'q') {
      d.pic(s, 'horloge', 0.6, top + 0.05, 1.9, 1.9);
      d.pic(s, 'prof_pointe', 0.55, top + 2.05, 2.0, 2.25, { valign: 'bottom' });
      d.rect(s, 0.7, 6.2, 1.8, 0.6, { fill: 'accent3', line: null, radius: 0.3, shadow: true });
      d.t(s, 'Start!', 0.7, 6.2, 1.8, 0.6, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      s.addShape(d.S.CLOUD, { x: 2.85, y: top + 0.05, w: 5.75, h: 6.85 - top - 0.1, fill: { color: 'EEF3F8' }, line: { color: 'D5DCE6', width: 1 } });
      const cloud = [
        ['praten', 3.95, 0.62, 24, -8], ['cursus', 5.4, 0.55, 20, 0], ['baan', 6.6, 0.75, 28, 7],
        ['herhalen', 3.35, 1.32, 20, 0], ['collega', 4.85, 1.28, 30, -4], ['heten', 6.85, 1.45, 20, 10],
        ['job', 3.55, 2.05, 28, 6], ['vertellen', 4.55, 2.05, 24, 0], ['oefenen', 6.55, 2.15, 20, -6],
        ['wonen', 3.45, 2.8, 20, -6], ['functie', 4.85, 2.75, 26, 0], ['zeggen', 6.6, 2.9, 22, 8],
        ['studeren', 3.25, 3.7, 24, 4], ['babbelen', 5.35, 3.8, 20, -5], ['beroep', 7.05, 3.6, 22, 0],
      ];
      cloud.forEach(([w, x, dy, sz, rot], i) => {
        const ww = w.length * sz * 0.0085 + 0.3; const hh = sz / 72 * 1.5;
        d.t(s, w, x, top + dy, ww, hh, { size: sz, bold: true, color: ['tx2', 'accent5', 'tx1'][i % 3], align: 'center', valign: 'middle', rotate: rot });
      });
      const bx = 8.85; const bw = 12.73 - bx; const bh = (6.85 - top - 3 * 0.15) / 4;
      cats.forEach(([lab, c, ic], i) => {
        const y = top + i * (bh + 0.15);
        d.rect(s, bx, y, bw, bh, { fill: c, tr: 88, line: c, lw: 2, dash: i === 3 ? 'dash' : undefined });
        d.icon(s, ic, c, bx + 0.25, y + bh / 2 - 0.3, 0.6);
        d.t(s, lab, bx + 1.05, y, bw - 1.2, bh, { size: 24, bold: true, color: c, valign: 'middle', head: true });
      });
    } else {
      const w = (12.13 - 3 * 0.25) / 4; const h = 6.85 - top;
      cats.forEach(([lab, c, ic, ws], i) => {
        const x = 0.6 + i * (w + 0.25);
        d.rect(s, x, top, w, h, { fill: c, tr: 90, line: c, lw: 2, dash: i === 3 ? 'dash' : undefined });
        d.icon(s, ic, c, x + w / 2 - 0.35, top + 0.2, 0.7);
        d.t(s, lab, x, top + 0.95, w, 0.55, { size: 24, bold: true, color: c, align: 'center', valign: 'middle', head: true });
        ws.forEach((wd, k) => d.t(s, `[[${wd}]]`, x, top + 1.6 + k * 0.6, w, 0.55, { size: 24, mode, align: 'center', valign: 'middle' }));
      });
    }
  });

  // ---------------------------------------------------------------- 31 ticket
  {
    const s = d.ticket({
      g: 31,
      q: ['Traduisez : « J’ai 40 ans et j’habite à Liège. »', 'Posez la question poliment : //Waar woon je?//', 'Complétez : //Ik kom …… Frankrijk.//'],
      self: ['Je me présente', 'Je pose les questions', 'Je remplis un formulaire'],
      teaser: { icon: 'FaArrowRight', text: '**Volgende keer : Het presens** — Où va le verbe ?' },
    });
    for (let i = 0; i < 6; i++) {
      const x = 8.25 + i * 0.73; const red = i === 1 || i === 5;
      d.rect(s, x, 6.17, 0.62, 0.56, { fill: 'FFFFFF', tr: 85, line: red ? 'E8796F' : 'FFFFFF', lw: red ? 2.25 : 1, radius: 0.08 });
      d.t(s, String(i + 1), x, 6.17, 0.62, 0.56, { size: 14, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    }
  }
}

module.exports = { meta, build };
