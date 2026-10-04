// Module 4 — Spellingregels · Les verbes qui s'adaptent
const { HEX, BORDER, GHOST, parse, plain, fitSize } = require('../lib');

const meta = { n: 4, slug: 'Spellingregels', title: 'Spellingregels — Les verbes qui s’adaptent', short: 'Spellingregels', template: 'module_4_spellingregels_werkwoorden.md' };

const BAND3 = 'E3E7ED'; // S1 band 3 (light grey)
const POSTIT = 'FFE27A';
const PALE_RED = 'FBEDEC';
const PALE_GREEN = 'EDF6F0';

// ---------------------------------------------------------------- local helpers
// Calibri/Carlito advance widths (em) to lay out sentences word by word (for the « pince »)
const CW = {
  a: 0.479, b: 0.525, c: 0.423, d: 0.525, e: 0.498, f: 0.305, g: 0.471, h: 0.525, i: 0.229, j: 0.239, k: 0.455, l: 0.229, m: 0.799, n: 0.525, o: 0.527, p: 0.525, q: 0.525, r: 0.349, s: 0.391, t: 0.335, u: 0.525, v: 0.452, w: 0.715, x: 0.433, y: 0.453, z: 0.395,
  A: 0.579, B: 0.544, C: 0.533, D: 0.615, E: 0.488, F: 0.459, G: 0.631, H: 0.623, I: 0.252, J: 0.319, K: 0.52, L: 0.42, M: 0.855, N: 0.646, O: 0.662, P: 0.517, Q: 0.673, R: 0.543, S: 0.459, T: 0.487, U: 0.642, V: 0.567, W: 0.89, X: 0.519, Y: 0.487, Z: 0.468,
  ' ': 0.226, '.': 0.252, ',': 0.25, '?': 0.463, '!': 0.326, '/': 0.386, ':': 0.268, '-': 0.306,
};
const tw = (str, pt, bold) => [...str].reduce((w, ch) => w + (CW[ch] ?? 0.5), 0) * (pt / 72) * (bold ? 1.05 : 1);

// lib markup + two local tokens: ~~x~~ = letter struck in orange · ??x?? = coloured hole (q) / answer (a)
function P(str, mode = 'a', base = {}) {
  const out = [];
  String(str).split(/(~~[^~]+~~|\?\?[^?]+\?\?)/).forEach((p) => {
    if (!p) return;
    if (p.startsWith('~~')) out.push({ text: p.slice(2, -2), options: { ...base, bold: true, color: 'accent1', strike: 'sngStrike' } });
    else if (p.startsWith('??')) {
      out.push(mode === 'q'
        ? { text: ' ? ', options: { ...base, bold: true, color: 'accent1', highlight: 'FBE1C6' } }
        : { text: p.slice(2, -2), options: { ...base, bold: true, color: 'accent3', highlight: 'DCEFE2' } });
    } else out.push(...parse(p, mode, base));
  });
  return out;
}
function txt(s, str, x, y, w, h, o = {}) {
  s.addText(P(str, o.mode || 'a', o.base || {}), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || 'tx1', bold: o.bold, italic: o.italic, align: o.align || 'left', valign: o.valign || 'middle',
    margin: 0, isTextBox: true, fontFace: o.head ? '+mj-lt' : undefined,
  });
}
// table whose cells understand the local tokens
function table2(s, rows, o) {
  const pt = o.size || 18;
  const data = rows.map((r, ri) => r.map((c, ci) => {
    const head = o.header !== false && ri === 0;
    const fill = head ? ((o.headColors && o.headColors[ci]) || 'tx2') : (o.cellFill ? o.cellFill(ri, ci) : (ri % 2 ? 'FFFFFF' : 'bg2'));
    return { text: P(c, 'a', head ? { bold: true } : {}), options: { fill: { color: fill }, color: head ? 'FFFFFF' : 'tx1', valign: 'middle', align: (o.align && o.align[ci]) || 'left', fontSize: head ? (o.headSize || pt - 2) : pt } };
  }));
  s.addTable(data, { x: o.x, y: o.y, w: o.w, colW: o.colW, rowH: o.rowH, fontSize: pt, border: { type: 'solid', pt: 0.75, color: BORDER }, margin: [0.05, 0.12, 0.05, 0.12], autoPage: false });
}
// fixed-width chip
function cchip(d, s, text, x, y, w, h, color, size = 12) {
  s.addText(parse(text), { shape: d.S.ROUNDED_RECTANGLE, rectRadius: 0.05, x, y, w, h, fill: { color }, color: 'FFFFFF', bold: true, fontSize: size, align: 'center', valign: 'middle', margin: 0 });
}
// several paragraphs with the same alignment (lib's d.t splits multi-run paragraphs when an alignment is given)
function lines(s, arr, x, y, w, h, o = {}) {
  const size = o.fit ? fitSize(arr.map(plain), w, h, o.max || o.size || 18, o.min || 12, o.gap ?? 4) : (o.size || 18);
  const runs = [];
  arr.forEach((l, i) => {
    const r = P(l, o.mode || 'a', o.base || {});
    r.forEach((t, j) => {
      t.options = { ...t.options, align: o.align || 'left', paraSpaceAfter: o.gap ?? 4 };
      if (j === r.length - 1 && i < arr.length - 1) t.options.breakLine = true;
    });
    runs.push(...r);
  });
  s.addText(runs, { x, y, w, h, fontSize: size, color: o.color || 'tx1', bold: o.bold, align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true, fontFace: o.head ? '+mj-lt' : undefined });
}
// sentence laid out as word-group blocks (robust to font substitution): parts [text, kind]
// kind '' | 'v' (verb ②, red frame) | 'v2' (verb ⑥, dashed red frame) | 'p' (particle, orange) | '.' (punctuation glued to the previous block)
const FW = 1.22; // the PDF renderer's fallback font is ~20 % wider than Calibri
function layout(parts, x, pt, o = {}) {
  const gap = o.gap ?? 0.07; const pad = o.pad ?? 0.08;
  let cx = x;
  const pos = parts.map(([t, k = '']) => {
    const verb = k === 'v' || k === 'v2';
    if (k === '.') {
      const w = tw(t, pt) * FW + 0.04; const p = { t, k, x: cx - gap + 0.02, w, cx: cx - gap + 0.02 + w / 2 };
      cx = p.x + w + gap; return p;
    }
    const w = tw(plain(t), pt, verb || k === 'p') * FW + 2 * pad;
    const p = { t, k, x: cx, w, cx: cx + w / 2 };
    cx += w + gap;
    return p;
  });
  return { pos, end: cx - gap };
}
function drawSentence(d, s, lay, y, h, pt, o = {}) {
  lay.pos.forEach((p) => {
    const m = p.k === 'v' || p.k === 'v2' ? (/!!|##/.test(p.t) ? `**${p.t}**` : `!!${p.t}!!`) : p.k === 'p' ? `##${p.t}##` : p.t;
    d.t(s, m, p.x, y, p.w, h, { size: pt, valign: 'middle', align: p.k === '.' ? 'left' : 'center', head: o.head });
  });
}
// the « pince » (S4): red frames on ② and ⑥, shaded middle, bracket joining the jaws (above or below)
function pince(d, s, lay, y, h, o = {}) {
  const v = lay.pos.find((p) => p.k === 'v'); const v2 = lay.pos.find((p) => p.k === 'v2');
  if (!v || !v2) return;
  const g = 0.03;
  d.rect(s, v.x + v.w + g, y + 0.03, v2.x - v.x - v.w - 2 * g, h - 0.06, { fill: 'D8DEE6', line: null, radius: 0.04 });
  d.rect(s, v.x, y, v.w, h, { fill: 'FFFFFF', line: 'accent6', lw: o.flw || 2, radius: 0.08 });
  d.rect(s, v2.x, y, v2.w, h, { fill: 'FFFFFF', line: 'accent6', lw: o.flw || 2, radius: 0.08, dash: 'dash' });
  const lw = o.lw || 2.5; const off = o.off || 0.14;
  const yb = o.above ? y - off : y + h + off; const ye = o.above ? y : y + h;
  d.line(s, v.cx, ye, v.cx, yb, { color: 'accent6', lw, arrow: false });
  d.line(s, v.cx, yb, v2.cx, yb, { color: 'accent6', lw, arrow: false });
  d.line(s, v2.cx, yb, v2.cx, ye, { color: 'accent6', lw, arrow: false });
}
// S5 conveyor: input card → stations → output card on a belt; intermediate state under each station
function chain(d, s, o) {
  const { x, w, y } = o; const n = o.stations.length;
  const cw = o.cw || 1.8; const g = o.gap || 0.35; const sh = o.sh || 1.45; const ch = o.ch || 1.0;
  const sw = (w - 2 * cw - (n + 1) * g) / n;
  const by = y + sh + 0.12;
  for (let rx = x + 0.15; rx < x + w - 0.2; rx += 0.6) d.oval(s, rx, by + 0.05, 0.2, 0.2, { fill: 'bg2', line: 'accent5', lw: 1 });
  d.rect(s, x, by, w, 0.13, { fill: 'accent5', line: null, radius: 0.06 });
  const cy = by - ch - 0.03;
  d.rect(s, x, cy, cw, ch, { fill: 'tx2', line: null, radius: 0.1, shadow: true });
  d.t(s, o.input, x, cy, cw, ch, { size: o.inSize || 28, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
  const ends = [x + cw];
  o.stations.forEach((st, i) => {
    const sx = x + cw + g + i * (sw + g); const c = st.color || 'tx2';
    ends.push(sx + sw);
    d.rect(s, sx, y, sw, sh, { fill: 'bg1', line: c, lw: 2, radius: 0.12, shadow: true });
    d.iconDisc(s, st.icon, sx + sw / 2 - 0.3, y + 0.12, 0.6, c);
    lines(s, Array.isArray(st.label) ? st.label : [st.label], sx + 0.08, y + 0.76, sw - 0.16, sh - 0.82, { bold: true, color: c, align: 'center', fit: true, max: st.size || 24, min: 13, gap: 0 });
    if (st.ban) {
      d.t(s, st.ban, sx + sw - 0.62, y + 0.14, 0.5, 0.5, { size: 22, bold: true, align: 'center', valign: 'middle', head: true });
      d.icon(s, 'FaBan', 'accent6', sx + sw - 0.62, y + 0.14, 0.5);
    }
    if (st.state) d.t(s, st.state, sx, by + 0.32, sw, 0.55, { size: 28, bold: true, color: 'accent5', align: 'center', valign: 'middle', head: true });
  });
  ends.forEach((ax) => d.line(s, ax + 0.06, cy + ch / 2, ax + g - 0.06, cy + ch / 2, { color: 'accent1', lw: 2.5 }));
  const ox = x + w - cw;
  d.rect(s, ox, cy, cw, ch, { fill: 'accent3', line: null, radius: 0.1, shadow: true });
  d.t(s, o.output, ox, cy, cw, ch, { size: o.outSize || 30, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
  d.oval(s, ox + cw - 0.3, cy - 0.2, 0.42, 0.42, { fill: 'FFFFFF', line: 'accent3', lw: 1.5 });
  d.icon(s, 'FaCheck', 'accent3', ox + cw - 0.21, cy - 0.11, 0.24);
  return { by, ox, cw };
}
// rule banner (navy) at the top of a grammar slide
function banner(d, s, text, icon, y = 1.68, h = 0.55) {
  d.rect(s, 0.6, y, 12.13, h, { fill: 'tx2', line: null });
  if (icon) d.icon(s, icon, 'FFFFFF', 0.8, y + (h - 0.34) / 2, 0.34);
  d.t(s, text, icon ? 1.3 : 0.85, y, 11.2, h, { size: 21, bold: true, color: 'bg1', valign: 'middle' });
}

function build(d) {
  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Spellingregels', sub: 'Les verbes qui s’adaptent', line: '//lezen → ik lez? ik lees?//',
    visual: (s) => {
      d.rect(s, 8.25, 1.15, 3.7, 2.05, { fill: 'FFFFFF', line: 'accent1', lw: 4, radius: 0.12, shadow: true });
      d.pic(s, 'v_lezen', 8.35, 1.25, 3.5, 1.85, { tr: 68 });
      d.t(s, 'LEZEN', 8.25, 1.15, 3.7, 2.05, { size: 46, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
      d.line(s, 9.55, 3.3, 8.75, 4.15, { color: 'FFFFFF', lw: 2.5 });
      d.line(s, 10.65, 3.3, 11.45, 4.15, { color: 'FFFFFF', lw: 2.5 });
      [['ik !!lez!! ?', 'accent6', 7.4], ['ik <<lees>> ?', 'accent3', 10.35]].forEach(([w, c, x]) => {
        d.rect(s, x, 4.3, 2.45, 1.45, { fill: 'FFFFFF', line: c, lw: 4, radius: 0.12, shadow: true });
        d.t(s, w, x, 4.3, 2.45, 1.45, { size: 32, align: 'center', valign: 'middle', head: true });
        d.oval(s, x + 2.05, 4.0, 0.6, 0.6, { fill: c });
        d.t(s, '?', x + 2.05, 4.0, 0.6, 0.6, { size: 24, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  {
    const s = d.mission({
      g: 2, vertical: true,
      cards: [
        { icon: 'FaPencilAlt', h: 'Écrire juste', t: 'J’écris correctement //ik lees, hij praat, hij wordt//.', color: 'accent2' },
        { icon: 'FaWalking', h: 'Les verbes courts', t: 'Je conjugue //gaan, staan, zien, doen//.', color: 'accent3' },
        { icon: 'FaKey', h: 'Pouvoir, vouloir, devoir', t: 'Je dis ce que je **peux**, **veux**, **dois** faire : //Ik kan…, ik wil…, ik moet…//', color: 'accent1' },
      ],
    });
    s.addText(parse('Pas des exceptions : des **réflexes** !'), {
      shape: d.S.ROUNDED_RECTANGULAR_CALLOUT, x: 10.5, y: 4.35, w: 2.23, h: 1.3, fill: { color: 'FFFFFF' }, line: { color: HEX.accent1, width: 2 },
      fontSize: 18, color: 'tx1', align: 'center', valign: 'middle', margin: 5,
    });
  }

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — La formule en 60 secondes' });
    d.iconDisc(s, 'FaStopwatch', 0.6, 1.72, 0.8, 'accent2');
    d.t(s, '60 s', 1.55, 1.72, 1.5, 0.8, { size: 32, bold: true, color: 'accent2', valign: 'middle', head: true });
    d.t(s, 'Conjuguez au présent — le plus vite possible !', 3.0, 1.72, 7.6, 0.8, { size: 19, italic: true, color: 'accent5', valign: 'middle' });
    d.pic(s, 'prof_question', 11.55, 1.62, 1.18, 1.0, { align: 'right' });
    const qs = [['//ik// (werken)', '!!werk!!'], ['//hij// (spreken)', '!!spreek!!##t##'], ['//Bel// (jij)…?', '!!Bel!! jij'], ['//hij// (lezen)', '!!lees!!##t##']];
    const w = 2.845;
    qs.forEach(([q, a], i) => {
      const x = 0.6 + i * (w + 0.25); const last = i === 3;
      d.rect(s, x, 2.8, w, 1.95, { fill: last ? 'FDF3EA' : 'bg2', line: last ? 'accent1' : BORDER, lw: last ? 3 : 1, shadow: true });
      d.num(s, i + 1, x + 0.15, 2.95, 0.5, last ? 'accent1' : 'tx2', 16);
      if (last) d.icon(s, 'FaQuestion', 'accent1', x + w - 0.6, 2.95, 0.42);
      d.t(s, q, x + 0.1, 3.45, w - 0.2, 0.9, { size: 26, align: 'center', valign: 'middle', head: true });
      if (last) d.t(s, '→ ???', x + 0.1, 4.25, w - 0.2, 0.4, { size: 18, bold: true, color: 'accent1', align: 'center', valign: 'middle' });
      d.rect(s, x, 4.95, w, 0.8, { fill: PALE_GREEN, line: 'accent3', lw: 1.5 });
      d.icon(s, 'FaCheck', 'accent3', x + 0.18, 5.19, 0.32);
      d.t(s, a, x + 0.5, 4.95, w - 0.6, 0.8, { size: 26, align: 'center', valign: 'middle', head: true });
    });
    d.rect(s, 0.6, 6.05, 12.13, 0.8, { fill: 'tx2', line: null });
    d.icon(s, 'FaQuestion', 'accent1', 0.85, 6.25, 0.4);
    d.t(s, '//hij leest// — comment le savoir ? → **aujourd’hui !**', 1.45, 6.05, 11.0, 0.8, { size: 20, color: 'bg1', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 4 dashboard
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Vue d’ensemble — 4 réflexes + 2 familles' });
    const tiles = [
      ['FaSyncAlt', '<<z>> → ##s##', '//lezen → ik lees//'],
      ['FaSyncAlt', '<<v>> → ##f##', '//leven → ik leef//'],
      ['FaMagnet', '##t## + ##t## = ##t##', '//praten → hij praat//'],
      ['FaPlus', '^^d^^ + ##t## = ^^d^^##t##', '//worden → hij wordt//'],
    ];
    const w = 2.845;
    tiles.forEach(([ic, rule, ex], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 2.3, { fill: 'bg2', line: BORDER, shadow: true });
      d.num(s, i + 1, x + 0.18, 1.86, 0.55, 'tx2', 18);
      d.icon(s, ic, i < 2 ? 'accent1' : 'accent6', x + w - 0.68, 1.88, 0.48);
      d.t(s, rule, x + 0.1, 2.5, w - 0.2, 0.8, { size: 32, bold: true, align: 'center', valign: 'middle', head: true });
      d.t(s, ex, x + 0.1, 3.35, w - 0.2, 0.5, { size: 19, align: 'center', valign: 'middle' });
    });
    [[0.6, 6.29, 'LE RADICAL'], [6.79, 12.73, 'LA TERMINAISON -t']].forEach(([x1, x2, lab]) => {
      d.line(s, x1 + 0.1, 4.14, x2 - 0.1, 4.14, { color: 'accent5', lw: 1.5, arrow: false });
      d.line(s, x1 + 0.1, 4.08, x1 + 0.1, 4.14, { color: 'accent5', lw: 1.5, arrow: false });
      d.line(s, x2 - 0.1, 4.08, x2 - 0.1, 4.14, { color: 'accent5', lw: 1.5, arrow: false });
      d.t(s, lab, x1, 4.2, x2 - x1, 0.35, { size: 14, bold: true, color: 'accent5', align: 'center', cs: 2 });
    });
    const W = 5.915;
    [['FaRunning', 'Verbes courts', '//gaan → ik ga//', 'accent3', null], ['FaStar', 'Les vrais irréguliers', '//zijn, hebben, kunnen, willen, mogen//', 'accent1', 'à apprendre par cœur']].forEach(([ic, h, ex, c, chip], i) => {
      const x = 0.6 + i * (W + 0.3);
      d.rect(s, x, 4.75, W, 2.1, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.iconDisc(s, ic, x + 0.3, 5.15, 1.2, c);
      d.t(s, h, x + 1.75, 4.9, W - 1.9, 0.6, { size: 24, bold: true, color: c, valign: 'middle', head: true });
      d.t(s, ex, x + 1.75, 5.5, W - 1.9, 0.75, { size: 21, valign: 'middle', fit: true, max: 22, min: 16 });
      if (chip) cchip(d, s, chip, x + 1.75, 6.3, 2.6, 0.38, HEX.accent6, 13);
    });
  }

  // ---------------------------------------------------------------- 5 réflexe 1 (S5)
  d.section('Les 4 réflexes');
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Réflexe ① — z devient s' });
    banner(d, s, 'Pas de z à la fin d’un mot → s', 'FaBan');
    const c = chain(d, s, {
      x: 0.6, w: 12.13, y: 2.45, input: 'LEZEN', output: 'LEES',
      stations: [
        { icon: 'GiScissors', label: '− en', state: 'lez' },
        { icon: 'FaSyncAlt', label: 'z → s', state: 'le##s##', ban: 'Z', color: 'accent1' },
        { icon: 'FaRulerHorizontal', label: ['voyelle longue ?', 'je double'], state: 'l<<ee>>s', color: 'accent3' },
      ],
    });
    lines(s, ['ik lees', 'hij lees##t##', '//(lire)//'], c.ox - 0.1, c.by + 0.27, c.cw + 0.2, 0.95, { size: 17, bold: true, align: 'center', gap: 0, valign: 'top' });
    const w = 3.84;
    [['reizen', 'ik reis · hij reis##t##', 'voyager', null], ['kiezen', 'ik kies', 'choisir', '//ie// invariable : rien à doubler'], ['verhuizen', 'ik verhuis', 'déménager', '//ui// invariable : rien à doubler']].forEach(([inf, forms, fr, note], i) => {
      const x = 0.6 + i * (w + 0.305); const y = 5.4;
      d.rect(s, x, y, w, 1.45, { fill: 'bg2', line: BORDER, shadow: true });
      d.iconDisc(s, 'FaSyncAlt', x + 0.15, y + 0.15, 0.48, 'accent1');
      d.t(s, `**${inf}**  //(${fr})//`, x + 0.75, y + 0.1, w - 0.9, 0.55, { size: 18, valign: 'middle' });
      d.t(s, forms, x + 0.75, y + 0.62, w - 0.9, 0.42, { size: 20, valign: 'middle', head: true });
      if (note) d.t(s, note, x + 0.75, y + 1.05, w - 0.9, 0.32, { size: 13, color: 'accent3', bold: true, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 6 réflexe 2 (S5 + gallery)
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'Réflexe ② — v devient f' });
    banner(d, s, 'Pas de v à la fin d’un mot → f', 'FaBan');
    const c = chain(d, s, {
      x: 0.6, w: 12.13, y: 2.45, input: 'LEVEN', output: 'LEEF',
      stations: [
        { icon: 'GiScissors', label: '− en', state: 'lev' },
        { icon: 'FaSyncAlt', label: 'v → f', state: 'le##f##', ban: 'V', color: 'accent1' },
        { icon: 'FaRulerHorizontal', label: ['voyelle longue ?', 'je double'], state: 'l<<ee>>f', color: 'accent3' },
      ],
    });
    lines(s, ['ik leef', '//(vivre)//'], c.ox - 0.1, c.by + 0.27, c.cw + 0.2, 0.7, { size: 17, bold: true, align: 'center', gap: 0, valign: 'top' });
    const w = 2.845;
    [['FaGift', 'geven', 'ik gee##f##', 'donner'], ['FaPen', 'schrijven', 'ik schrij##f##', 'écrire'], ['FaHome', 'blijven', 'ik blij##f##', 'rester'], ['duck', 'drijven', 'ik drij##f##', 'flotter']].forEach(([ic, inf, form, fr], i) => {
      const x = 0.6 + i * (w + 0.25); const y = 5.4;
      d.rect(s, x, y, w, 1.45, { fill: 'bg2', line: BORDER, shadow: true });
      d.rect(s, x + 0.15, y + 0.2, 1.05, 1.05, { fill: 'FFFFFF', line: 'accent3', lw: 1.25, radius: 0.12 });
      if (ic === 'duck') {
        d.icon(s, 'GiPlasticDuck', 'accent3', x + 0.31, y + 0.24, 0.72);
        d.icon(s, 'FaWater', 'accent2', x + 0.44, y + 0.86, 0.38);
      } else d.icon(s, ic, 'accent3', x + 0.35, y + 0.4, 0.65);
      d.t(s, `**${inf}**`, x + 1.35, y + 0.12, w - 1.45, 0.42, { size: 19, valign: 'middle' });
      d.t(s, form, x + 1.35, y + 0.52, w - 1.45, 0.42, { size: 19, valign: 'middle' });
      d.t(s, '//' + fr + '//', x + 1.35, y + 0.95, w - 1.45, 0.35, { size: 14, color: 'accent5', valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 7 miroir
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'Au pluriel, le z et le v reviennent' });
    const LW = 5.4; const RX = 7.33;
    d.line(s, 6.665, 1.7, 6.665, 5.8, { color: 'accent5', lw: 1.5, dash: 'dash', arrow: false });
    d.rect(s, 0.6, 1.7, LW, 0.5, { fill: 'accent1', line: null });
    d.t(s, 'SINGULIER  ·  s / f', 0.6, 1.7, LW, 0.5, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 1 });
    d.rect(s, RX, 1.7, LW, 0.5, { fill: 'accent3', line: null });
    d.t(s, 'PLURIEL  ·  z / v', RX, 1.7, LW, 0.5, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 1 });
    const rows = [
      ['v_lezen', ['ik lee##s##', 'jij lee##s##t', 'hij lee##s##t'], ['wij **le<<z>>en**', 'jullie **le<<z>>en**', 'zij **le<<z>>en**']],
      ['FaHeartbeat', ['ik lee##f##', 'jij lee##f##t', 'hij lee##f##t'], ['wij **le<<v>>en**', 'jullie **le<<v>>en**', 'zij **le<<v>>en**']],
    ];
    rows.forEach(([pic, sg, pl], i) => {
      const y = 2.38 + i * 1.8; const h = 1.6;
      [[0.6, 'FDF3EA', 'accent1', sg], [RX, PALE_GREEN, 'accent3', pl]].forEach(([x, fill, c, lines]) => {
        d.rect(s, x, y, LW, h, { fill, line: c, lw: 1.5 });
        if (pic.startsWith('Fa')) d.icon(s, pic, 'accent3', x + 0.3, y + 0.42, 0.75);
        else d.pic(s, pic, x + 0.2, y + 0.3, 1.0, 1.0);
        d.t(s, lines, x + 1.55, y + 0.1, LW - 1.7, h - 0.2, { size: 24, valign: 'middle', gap: 2, head: true });
      });
      d.oval(s, 6.365, y + h / 2 - 0.3, 0.6, 0.6, { fill: 'tx2' });
      d.icon(s, 'FaArrowsAltH', 'FFFFFF', 6.475, y + h / 2 - 0.19, 0.38);
    });
    d.rect(s, 0.6, 6.0, 9.0, 0.85, { fill: 'tx2', line: null });
    d.t(s, ['**Le pluriel = l’infinitif, tel quel !**', 'Au pluriel, on ne touche à rien : on recopie l’infinitif.'], 0.85, 6.0, 8.6, 0.85, { size: 17, color: 'bg1', valign: 'middle', gap: 0 });
    d.rect(s, 9.85, 6.0, 2.88, 0.85, { fill: PALE_RED, line: 'accent6', lw: 1.25 });
    d.icon(s, 'FaTimes', 'accent6', 10.05, 6.25, 0.36);
    d.t(s, 'wij {{lesen}}', 10.5, 6.0, 2.15, 0.85, { size: 22, valign: 'middle', head: true });
  }

  // ---------------------------------------------------------------- 8 réflexe 3 (magnet)
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Réflexe ③ — radical en -t : pas de 2e t' });
    banner(d, s, 'Radical en ##t## + terminaison ##t## = un seul ##t##', 'FaMagnet');
    const y = 2.5; const h = 1.2;
    d.rect(s, 0.6, y, 2.5, h, { fill: 'tx2', line: null, radius: 0.1, shadow: true });
    d.t(s, 'PRAAT', 0.6, y, 2.5, h, { size: 34, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.t(s, '//praten// (parler, bavarder)', 0.6, y + h + 0.05, 3.2, 0.32, { size: 14, color: 'accent5' });
    d.line(s, 3.2, y + h / 2, 3.55, y + h / 2, { color: 'accent6', lw: 2.5 });
    d.icon(s, 'FaMagnet', 'accent6', 3.65, y + 0.15, 0.9);
    d.line(s, 4.95, y + h / 2, 4.6, y + h / 2, { color: 'accent6', lw: 2.5 });
    d.rect(s, 5.05, y + 0.1, 1.0, h - 0.2, { fill: 'accent1', line: null, radius: 0.1, shadow: true });
    d.t(s, 't', 5.05, y + 0.1, 1.0, h - 0.2, { size: 40, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.t(s, '=', 6.15, y, 0.6, h, { size: 40, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.rect(s, 6.85, y, 2.7, h, { fill: PALE_GREEN, line: 'accent3', lw: 3, radius: 0.1, shadow: true });
    d.t(s, 'PRAA##T##', 6.85, y, 2.7, h, { size: 36, bold: true, align: 'center', valign: 'middle', head: true });
    d.icon(s, 'FaCheckCircle', 'accent3', 9.2, y + 0.08, 0.3);
    d.rect(s, 9.95, y, 2.78, h, { fill: PALE_RED, line: 'accent6', lw: 2, radius: 0.1 });
    d.icon(s, 'FaTimes', 'accent6', 10.1, y + 0.4, 0.4);
    d.t(s, '{{praatt}}', 10.55, y, 2.1, h, { size: 30, bold: true, align: 'center', valign: 'middle', head: true });
    const rowsL = [['infinitif', 'ik', 'hij'], ['**praten**', 'ik praat', 'hij praat'], ['**zitten**', 'ik zit', 'hij zit'], ['**eten**', 'ik eet', 'hij eet']];
    const rowsR = [['infinitif', 'ik', 'hij'], ['**wachten**', 'ik wacht', 'hij wacht'], ['**heten**', 'ik heet', 'hij heet'], ['**moeten**', 'ik moet', 'hij moet']];
    [[rowsL, 0.6], [rowsR, 6.83]].forEach(([rows, x]) => table2(s, rows, { x, y: 4.15, w: 5.9, colW: [2.0, 1.95, 1.95], size: 20, headSize: 16, rowH: [0.45, 0.6, 0.6, 0.6], align: ['left', 'center', 'center'], headColors: ['tx2', 'tx2', 'tx2'] }));
    d.t(s, 'Mêmes formes pour //ik// et //hij// : seul le pronom fait la différence.', 0.6, 6.5, 12.13, 0.36, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 9 PIÈGE d + t = dt (S10)
  {
    const s = d.page({ g: 9, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE — Réflexe ④ : radical en -d, + t quand même' });
    d.rect(s, 0.6, 1.68, 12.13, 3.3, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.83, 'accent6', 0.34, 12);
    d.t(s, '^^d^^ + ##t## = ^^d^^##t## — on entend « t », on écrit les deux !', 2.25, 1.78, 10.3, 0.45, { size: 21, bold: true, valign: 'middle' });
    const y = 2.4; const h = 1.05;
    d.rect(s, 1.0, y, 2.7, h, { fill: 'FFFFFF', line: 'tx2', lw: 2.5, radius: 0.1, shadow: true });
    d.t(s, 'WOR^^D^^', 1.0, y, 2.7, h, { size: 38, bold: true, align: 'center', valign: 'middle', head: true });
    d.t(s, '+', 3.75, y, 0.55, h, { size: 38, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.rect(s, 4.35, y + 0.05, 1.0, h - 0.1, { fill: 'accent1', line: null, radius: 0.1, shadow: true });
    d.t(s, 't', 4.35, y + 0.05, 1.0, h - 0.1, { size: 38, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.t(s, '=', 5.4, y, 0.55, h, { size: 38, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.rect(s, 6.0, y, 3.3, h, { fill: PALE_GREEN, line: 'accent3', lw: 3, radius: 0.1, shadow: true });
    d.t(s, 'WOR^^D^^##T##', 6.0, y, 3.3, h, { size: 38, bold: true, align: 'center', valign: 'middle', head: true });
    const y2 = 3.7;
    d.rect(s, 1.0, y2, 5.0, 1.05, { fill: 'FFFFFF', line: BORDER, lw: 1 });
    d.icon(s, 'GiHumanEar', 'accent5', 1.15, y2 + 0.15, 0.75);
    d.t(s, 'on entend : **« wort »**', 2.05, y2, 3.85, 1.05, { size: 22, valign: 'middle' });
    d.t(s, '=', 6.05, y2, 0.55, 1.05, { size: 34, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.rect(s, 6.65, y2, 5.85, 1.05, { fill: PALE_GREEN, line: 'accent3', lw: 1.5 });
    d.icon(s, 'FaEye', 'accent3', 6.8, y2 + 0.18, 0.7);
    d.t(s, 'on écrit : //ik word / hij wor^^d^^##t##//', 7.65, y2, 4.75, 1.05, { size: 22, valign: 'middle' });
    const cards = [
      ['worden', 'devenir', ['ik word', 'jij wor^^d^^##t##', 'hij wor^^d^^##t##']],
      ['rijden', 'rouler', ['ik rijd', 'hij rij^^d^^##t##']],
      ['vinden', 'trouver', ['ik vind', 'hij vin^^d^^##t##']],
      ['antwoorden', 'répondre', ['ik antwoord', 'hij antwoor^^d^^##t##']],
    ];
    const w = 2.845;
    cards.forEach(([inf, fr, forms], i) => {
      const x = 0.6 + i * (w + 0.25); const yy = 5.18;
      d.rect(s, x, yy, w, 1.67, { fill: 'bg2', line: BORDER, shadow: true });
      d.t(s, `**${inf}**`, x + 0.15, yy + 0.08, 1.75, 0.42, { size: 18, color: 'tx2', valign: 'middle', fit: true, max: 18, min: 14 });
      d.t(s, `//${fr}//`, x + 1.85, yy + 0.08, w - 2.0, 0.42, { size: 13, color: 'accent5', valign: 'middle', align: 'right' });
      d.line(s, x + 0.15, yy + 0.55, x + w - 0.15, yy + 0.55, { color: BORDER, lw: 1, arrow: false });
      d.t(s, forms, x + 0.15, yy + 0.62, w - 0.3, 1.0, { size: 18, gap: 0, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 10 inversion
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'Avec l’inversion, la règle de M3 s’applique' });
    table2(s, [
      ['', 'affirmation', 'question avec je / jij', 'question avec u / hij'],
      ['**worden**', 'Jij wor^^d^^##t## moe.', '!!Word!!~~t~~ **je** moe?', '!!Word!!##t## **u** moe?'],
      ['**rijden**', 'Jij rij^^d^^##t##.', '!!Rijd!!~~t~~ **jij** met de auto?', '!!Rijd!!##t## **hij** met de auto?'],
      ['**vinden**', 'Jij vin^^d^^##t## het leuk.', '!!Vind!!~~t~~ **je** het leuk?', '!!Vind!!##t## **u** het leuk?'],
      ['**lezen**', 'Jij lees##t##.', '!!Lees!!~~t~~ **je** veel?', '!!Lees!!##t## **u** veel?'],
    ], { x: 0.6, y: 1.7, w: 12.13, colW: [1.55, 2.95, 3.8, 3.83], size: 21, headSize: 17, rowH: [0.6, 0.78, 0.78, 0.78, 0.78], headColors: ['tx2', 'tx2', 'accent1', 'accent3'],
      cellFill: (r, c) => (c === 2 ? 'FDF3EA' : c === 3 ? PALE_GREEN : r % 2 ? 'FFFFFF' : 'bg2') });
    d.icon(s, 'FaRandom', 'FFFFFF', 8.42, 1.83, 0.34);
    d.icon(s, 'FaRandom', 'FFFFFF', 12.25, 1.83, 0.34);
    d.bubble(s, '//je / jij// **après** le verbe → **pas de t** (règle de M3) · //u / hij// → le **t** reste', 0.6, 5.65, 7.0, 1.2, 'accent1', { size: 18 });
    d.rect(s, 7.85, 5.65, 4.88, 1.2, { fill: 'bg2', line: 'tx2', lw: 1.25 });
    d.iconDisc(s, 'FaComments', 8.05, 5.9, 0.7, 'tx2');
    d.t(s, ['À mémoriser en bloc :', '**//Wat vind je ervan?//**', '//(qu’en penses-tu ?)//'], 8.95, 5.7, 3.7, 1.1, { size: 16, valign: 'middle', gap: 0 });
  }

  // ---------------------------------------------------------------- 11 verbes courts
  d.section('Verbes courts et irréguliers');
  {
    const s = d.page({ g: 11, tag: 'GRAMMAIRE', title: 'Les verbes courts — gaan, staan, slaan, zien, doen' });
    d.rect(s, 0.6, 1.7, 5.05, 1.0, { fill: 'tx2', line: null });
    d.t(s, ['**Verbes d’une syllabe :**', '**infinitif − n = radical**'], 0.8, 1.7, 4.7, 1.0, { size: 19, color: 'bg1', valign: 'middle', gap: 0 });
    const c = chain(d, s, {
      x: 0.6, w: 5.05, y: 2.9, cw: 1.4, gap: 0.3, sh: 1.4, ch: 0.9, input: 'GAAN', output: 'GA', inSize: 26, outSize: 30, labelSize: 18,
      stations: [{ icon: 'GiScissors', label: ['− n', '{{− en}}'], color: 'accent1' }],
    });
    // S6 open door
    const y = c.by + 0.55; const x = 1.55;
    d.icon(s, 'FaDoorOpen', 'accent3', 0.65, y + 0.2, 0.65);
    d.line(s, x, y, x + 1.6, y, { color: 'tx2', lw: 2, arrow: false });
    d.line(s, x, y + 1.0, x + 1.6, y + 1.0, { color: 'tx2', lw: 2, arrow: false });
    d.line(s, x, y, x, y + 1.0, { color: 'tx2', lw: 2, arrow: false });
    d.t(s, 'G<<A>>', x, y, 1.6, 1.0, { size: 40, bold: true, align: 'center', valign: 'middle', head: true });
    d.line(s, x + 1.0, y + 1.2, x + 2.0, y + 1.2, { color: 'accent3', lw: 2.5 });
    d.t(s, ['porte **ouverte**', '→ son **long** avec un seul //a//'], 3.35, y - 0.05, 2.3, 1.1, { size: 16, color: 'accent3', valign: 'middle', gap: 2 });
    d.t(s, 'la voyelle est en fin de mot', 0.6, y + 1.35, 5.05, 0.32, { size: 14, italic: true, color: 'accent5', align: 'center' });
    const verbs = [['gaan', 'aller', 'ga'], ['staan', 'être debout', 'sta'], ['slaan', 'frapper', 'sla'], ['zien', 'voir', 'zie'], ['doen', 'faire', 'doe']];
    table2(s, [['', 'ik', 'jij · u · hij', 'wij · jullie · zij'], ...verbs.map(([v, fr, r]) => [`**${v}** //(${fr})//`, `**${r}**`, `**${r}##t##**`, `**${v}**`])],
      { x: 5.95, y: 1.7, w: 6.78, colW: [2.5, 1.15, 1.55, 1.58], size: 20, headSize: 15, rowH: [0.55, 0.8, 0.8, 0.8, 0.8, 0.8], align: ['left', 'center', 'center', 'center'],
        cellFill: (r, cc) => (cc === 0 ? 'FFFFFF' : cc === 1 ? 'FFFFFF' : cc === 2 ? 'bg2' : BAND3) });
    d.t(s, 'Les 3 bandes de la carte : //ik// = radical · //jij, u, hij// = radical + ##t## · pluriel = infinitif', 5.95, 6.35, 6.78, 0.5, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 12 galerie
  {
    const s = d.page({ g: 12, tag: 'GRAMMAIRE', title: 'La galerie des 5 verbes (archive corrigée)' });
    const cols = [
      ['slaan', 'v_slaan', 'verbe court', 'accent5', ['ik sla', 'jij slaa##t##', '!!Sla je?!!', 'hij slaa##t##', '!!Slaat u?!!', 'wij slaan']],
      ['lezen', 'v_lezen', '① z → s', 'tx2', ['ik lees', 'jij lees##t##', '!!Lees je?!!', 'hij lees##t##', '!!Leest u?!!', 'wij lezen']],
      ['drijven', 'duck', '② v → f', 'tx2', ['ik drijf', 'jij drijf##t##', '!!Drijf je?!!', 'hij drijf##t##', '!!Drijft u?!!', 'wij drijven']],
      ['praten', 'v_praten', '③ -t', 'tx2', ['ik praat', 'jij praat', '!!Praat je?!!', 'hij praat', '!!Praat u?!!', 'wij praten']],
      ['zien', 'v_zien', 'verbe court', 'accent5', ['ik zie', 'jij zie##t##', '!!Zie je?!!', 'hij zie##t##', '!!Ziet u?!!', 'wij zien']],
    ];
    const w = 2.266;
    cols.forEach(([inf, pic, chip, cc, lines], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 1.95, w, 4.9, { fill: 'FFFFFF', line: BORDER, lw: 1 });
      d.rect(s, x + 0.25, 1.68, w - 0.5, 0.55, { fill: POSTIT, line: 'E3C65A', lw: 0.75, radius: 0.03, shadow: true });
      d.t(s, inf, x + 0.25, 1.68, w - 0.5, 0.55, { size: 21, bold: true, align: 'center', valign: 'middle', head: true });
      if (pic === 'duck') {
        d.icon(s, 'GiPlasticDuck', 'accent3', x + w / 2 - 0.36, 2.3, 0.72);
        d.icon(s, 'FaWater', 'accent2', x + w / 2 - 0.2, 2.85, 0.4);
      } else d.pic(s, pic, x + 0.2, 2.26, w - 0.4, 1.02);
      cchip(d, s, chip, x + w / 2 - 0.7, 3.32, 1.4, 0.32, cc === 'tx2' ? HEX.dk2 : HEX.accent5, 12);
      lines.forEach((l, k) => {
        const y = 3.78 + k * 0.51;
        if (k === 2 || k === 4) d.rect(s, x + 0.06, y + 0.03, w - 0.12, 0.45, { fill: PALE_RED, line: null, radius: 0.04 });
        if (k) d.line(s, x + 0.12, y, x + w - 0.12, y, { color: BORDER, lw: 0.75, arrow: false });
        d.t(s, l, x + 0.05, y, w - 0.1, 0.51, { size: 19, align: 'center', valign: 'middle' });
      });
    });
  }

  // ---------------------------------------------------------------- 13 vrais irréguliers
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'Les vrais irréguliers — à apprendre par cœur' });
    d.rect(s, 0.6, 1.7, 2.15, 5.15, { fill: 'bg2', line: BORDER });
    d.iconDisc(s, 'FaStar', 1.3, 1.85, 0.75, 'accent1');
    d.t(s, 'Rappel (M2)', 0.7, 2.68, 1.95, 0.4, { size: 16, bold: true, color: 'accent5', align: 'center' });
    lines(s, ['**zijn**', 'ben, bent, is, zijn', '', '**hebben**', 'heb, hebt, heeft, hebben'], 0.75, 3.15, 1.85, 3.5, { size: 18, align: 'center', valign: 'middle', gap: 4, base: { italic: true } });
    const cards = [
      ['kunnen', 'pouvoir, savoir', 'GiMuscleUp', 'accent2', ['kan', 'kun##t## / kan', 'kan', 'kunnen'], true],
      ['willen', 'vouloir', 'FaHeart', 'accent6', ['wil', 'wil##t## / wil', 'wil', 'willen'], true],
      ['mogen', 'avoir le droit', 'FaCheckCircle', 'accent3', ['mag', 'mag', 'mag', 'mogen'], true],
      ['moeten', 'devoir', 'FaExclamationTriangle', 'accent1', ['moet', 'moet', 'moet', 'moeten'], false],
    ];
    const pron = ['ik', 'jij / u', 'hij / zij', 'wij · jullie · zij'];
    const fills = ['FFFFFF', 'EEF3F8', 'EEF3F8', BAND3];
    const w = 2.28; const y0 = 1.7; const hh = 1.05; const rh = 1.025;
    cards.forEach(([inf, fr, ic, c, forms, noT], i) => {
      const x = 3.0 + i * (w + 0.203);
      d.rect(s, x, y0, w, 5.15, { fill: 'FFFFFF', line: BORDER, lw: 1, shadow: true });
      d.iconDisc(s, ic, x + 0.12, y0 + 0.1, 0.5, c);
      d.t(s, inf, x + 0.7, y0 + 0.08, w - 0.75, 0.52, { size: 21, bold: true, color: 'tx2', valign: 'middle', head: true });
      d.t(s, '//' + fr + '//', x + 0.12, y0 + 0.63, w - 0.24, 0.36, { size: 14, color: 'accent5', valign: 'middle' });
      pron.forEach((p, k) => {
        const y = y0 + hh + k * rh;
        d.rect(s, x + 0.04, y, w - 0.08, rh - 0.02, { fill: fills[k], line: null, radius: 0 });
        d.t(s, p, x + 0.15, y + 0.06, w - 0.3, 0.3, { size: 13, color: 'accent5' });
        const f = forms[k];
        if (k === 2 && noT) {
          d.oval(s, x + 0.1, y + 0.36, 0.95, 0.58, { fill: null, line: 'accent1', lw: 2.25 });
          d.t(s, `**${f}**`, x + 0.1, y + 0.36, 0.95, 0.58, { size: 24, align: 'center', valign: 'middle' });
          cchip(d, s, 'pas de t !', x + 1.12, y + 0.47, 1.02, 0.36, HEX.accent1, 12);
        } else d.t(s, f, x + 0.15, y + 0.36, w - 0.3, 0.58, { size: 24, bold: k !== 3, valign: 'middle' });
      });
    });
  }

  // ---------------------------------------------------------------- 14 PIÈGE modalité (S4 + S10)
  {
    const s = d.page({ g: 14, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE — verbe de modalité : l’infinitif part au bout' });
    d.rect(s, 0.6, 1.68, 12.13, 2.95, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.83, 'accent6', 0.34, 12);
    // FR line
    d.num(s, 'FR', 0.85, 2.32, 0.5, 'accent5', 13);
    d.t(s, 'Je __**dois travailler**__ demain.', 1.55, 2.27, 5.3, 0.6, { size: 24, valign: 'middle' });
    d.icon(s, 'FaTimes', 'accent6', 7.2, 2.42, 0.3);
    d.t(s, '{{Ik moet werken morgen.}}', 7.65, 2.27, 4.9, 0.6, { size: 22, valign: 'middle' });
    d.icon(s, 'FaArrowDown', 'accent6', 0.95, 2.95, 0.3);
    // NL line with the pince
    d.rect(s, 0.8, 3.33, 7.9, 1.15, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25 });
    d.num(s, 'NL', 0.95, 3.66, 0.5, 'accent3', 13);
    const lay = layout([['Ik'], ['moet', 'v'], ['morgen'], ['werken', 'v2'], ['.', '.']], 1.65, 30, { pad: 0.1, gap: 0.08 });
    pince(d, s, lay, 3.58, 0.56, { above: true, off: 0.17, lw: 3, flw: 2.5 });
    drawSentence(d, s, lay, 3.58, 0.56, 30);
    const mid = lay.pos[2];
    d.t(s, 'le cœur de la phrase', mid.x - 0.4, 4.15, mid.w + 0.8, 0.28, { size: 12, italic: true, color: 'accent5', align: 'center' });
    d.icon(s, 'FaCheck', 'accent3', lay.end + 0.25, 3.68, 0.36);
    // legend of the pince
    d.rect(s, 8.95, 3.33, 3.6, 0.5, { fill: 'FFFFFF', line: 'accent6', lw: 2, radius: 0.1 });
    d.t(s, '② verbe conjugué', 8.95, 3.33, 3.6, 0.5, { size: 15, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
    d.rect(s, 8.95, 3.98, 3.6, 0.5, { fill: 'FFFFFF', line: 'accent6', lw: 2, radius: 0.1, dash: 'dash' });
    d.t(s, '⑥ infinitif, au bout', 8.95, 3.98, 3.6, 0.5, { size: 15, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
    // examples
    const ex = ['Ik !!kan!! goed Nederlands !!spreken!!.', '!!Wil!! je een koffie !!drinken!!?', 'Je !!mag!! hier niet !!roken!!.'];
    const w = 3.88;
    ex.forEach((e, i) => {
      const x = 0.6 + i * (w + 0.245);
      d.rect(s, x, 4.82, w, 0.75, { fill: 'bg2', line: BORDER });
      d.t(s, e, x + 0.15, 4.82, w - 0.3, 0.75, { size: 18, align: 'center', valign: 'middle', fit: true, max: 18, min: 14 });
    });
    // bonus: the particle sticks back to the infinitive
    d.rect(s, 0.6, 5.77, 12.13, 1.08, { fill: 'FFFFFF', line: 'accent5', lw: 1, dash: 'dash' });
    d.chip(s, '+ BONUS : particule', 0.8, 6.18, 'accent5', 0.34, 12);
    const l1 = layout([['Ik'], ['bel', 'v'], ['de klant'], ['op', 'p'], ['.', '.']], 3.65, 18, { pad: 0.05, gap: 0.05 });
    const l2 = layout([['Ik'], ['moet', 'v'], ['de klant'], ['##op##!!bellen!!', 'v2'], ['.', '.']], l1.end + 0.6, 18, { pad: 0.05, gap: 0.05 });
    const ty = 6.3; const th = 0.42;
    const op2 = l2.pos[3]; const opX = op2.cx - (tw('opbellen', 18, true) * 1.1) / 2 + tw('op', 18, true) * 0.55;
    d.curve(s, l1.pos[3].cx, ty + 0.03, opX, ty + 0.03, { h: 0.28, color: 'accent1', lw: 2 });
    drawSentence(d, s, l1, ty, th, 18);
    d.t(s, '→', l1.end + 0.05, ty, 0.5, th, { size: 20, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    drawSentence(d, s, l2, ty, th, 18);
    d.t(s, '(on recolle, en un seul mot)', l2.end + 0.2, 5.85, 12.6 - l2.end - 0.2, 0.9, { size: 14, italic: true, color: 'accent5', valign: 'middle', fit: true, max: 15, min: 12 });
  }

  // ---------------------------------------------------------------- 15 organigramme (S9)
  {
    const s = d.page({ g: 15, tag: 'À RETENIR', title: 'Comment conjuguer n’importe quel verbe ?' });
    const cx = 3.1; const dw = 5.0;
    const diamond = (y, h, text) => {
      s.addShape(d.S.DIAMOND, { x: cx - dw / 2, y, w: dw, h, fill: { color: HEX.lt2 }, line: { color: HEX.dk2, width: 1.75 } });
      lines(s, text, cx - 1.5, y + 0.12, 3.0, h - 0.24, { align: 'center', gap: 0, fit: true, max: 14, min: 12 });
    };
    const box = (x, y, w, h, text, o = {}) => {
      d.rect(s, x, y, w, h, { fill: o.fill || 'FFFFFF', line: o.line || 'tx2', lw: 1.5, radius: 0.1 });
      lines(s, Array.isArray(text) ? text : [text], x + 0.1, y, w - 0.2, h, { align: 'center', bold: o.bold, gap: 0, fit: true, max: o.size || 15, min: 12 });
    };
    const yes = (x1, y, x2) => { d.line(s, x1, y, x2, y, { color: 'accent3', lw: 2 }); d.t(s, 'OUI', x1, y - 0.3, x2 - x1, 0.26, { size: 12, bold: true, color: 'accent3', align: 'center' }); };
    const no = (y1, y2) => { d.line(s, cx, y1, cx, y2, { color: 'accent5', lw: 2 }); d.t(s, 'NON', cx + 0.12, y1, 0.6, y2 - y1, { size: 12, bold: true, color: 'accent5', valign: 'middle' }); };
    // connectors first
    yes(cx + dw / 2, 2.23, 6.15);
    no(2.78, 3.0);
    yes(cx + dw / 2, 3.6, 6.15);
    no(4.2, 4.42);
    d.line(s, cx, 4.87, cx, 5.07, { color: 'accent5', lw: 2 });
    d.line(s, cx, 5.52, cx, 5.72, { color: 'accent5', lw: 2 });
    d.line(s, 7.95, 3.6, 8.25, 3.6, { color: 'accent3', lw: 2 });
    d.line(s, cx + dw / 2, 6.11, 8.25, 6.11, { color: 'accent3', lw: 2.25 });
    diamond(1.68, 1.1, ['**①** //zijn, hebben, kunnen,//', '//willen, mogen// ?']);
    d.rect(s, 6.15, 1.85, 1.8, 0.76, { fill: 'FDF3EA', line: 'accent1', lw: 1.5, radius: 0.1 });
    d.icon(s, 'FaStar', 'accent1', 6.25, 2.06, 0.32);
    d.t(s, ['**par cœur**', '//(diapo 13)//'], 6.62, 1.85, 1.3, 0.76, { size: 14, valign: 'middle', gap: 0 });
    diamond(3.0, 1.2, ['**②** Infinitif d’une seule syllabe ?', '//(gaan, staan, slaan, zien, doen)//']);
    box(6.15, 3.3, 1.8, 0.6, 'radical = **− n**', { line: 'accent3' });
    box(cx - 1.5, 4.42, 3.0, 0.45, 'radical = **− en**');
    box(cx - 1.5, 5.07, 3.0, 0.45, '**③** z → s · v → f');
    box(cx - dw / 2, 5.72, dw, 0.78, ['**④** voyelle longue → je double', 'consonne double → je simplifie']);
    // exit: S1 card
    const X = 8.25; const W = 4.48;
    d.rect(s, X, 1.68, W, 5.17, { fill: 'FFFFFF', line: 'accent3', lw: 2.5, radius: 0.1, shadow: true });
    d.t(s, '**⑤** La carte de conjugaison', X + 0.2, 1.75, W - 0.4, 0.55, { size: 19, bold: true, color: 'tx2', valign: 'middle', head: true });
    const bands = [['ik', '**radical**', 'FFFFFF', 0.62], ['jij / u / hij', ['radical + ##t##', '//t + t = t · d + t = dt//'], 'EEF3F8', 0.95], ['wij · jullie · zij', '**infinitif**', BAND3, 0.7]];
    let by = 2.35;
    bands.forEach(([p, v, f, h]) => {
      d.rect(s, X + 0.08, by, W - 0.16, h, { fill: f, line: BORDER, lw: 0.5, radius: 0 });
      d.t(s, p, X + 0.2, by, 1.55, h, { size: 16, bold: true, color: 'accent2', valign: 'middle' });
      d.t(s, Array.isArray(v) ? v : [v], X + 1.8, by, W - 1.95, h, { size: 18, valign: 'middle', gap: 0 });
      by += h;
    });
    const notes = [['FaMagnet', 'accent1', 'radical en -t : pas de 2e t'], ['FaExclamationTriangle', 'accent6', '//je / jij// après le verbe → pas de t'], ['FaStar', 'accent5', 'exception : //komen → ik kom//']];
    notes.forEach(([ic, c, t], i) => {
      const y = 4.85 + i * 0.63;
      d.icon(s, ic, c, X + 0.25, y + 0.14, 0.32);
      d.t(s, t, X + 0.7, y, W - 0.85, 0.6, { size: 16, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 16 divider
  d.divider({ g: 16, tiles: [
    ['La chaîne de montage', '★', 'GiScissors'], ['Conjugue !', '★★', 'FaPencilAlt'], ['d, t ou dt ?', '★★', 'FaBell'], ['Le correcteur', '★★★', 'FaSearch'],
    ['Avec un verbe de modalité', '★★', 'FaKey'], ['Mime et conjugue', '★', 'FaTheaterMasks'], ['Le planning de l’équipe', '★★★', 'FaCalendarAlt'],
  ] });

  // ---------------------------------------------------------------- 17 ex1 chaîne
  const ex1 = [['lezen', 'lees', '① + doubler'], ['geven', 'geef', '② + doubler'], ['reizen', 'reis', '①'], ['schrijven', 'schrijf', '②'], ['praten', 'praat', 'doubler'], ['worden', 'word', ''],
    ['rijden', 'rijd', ''], ['gaan', 'ga', 'court'], ['zien', 'zie', 'court'], ['blijven', 'blijf', '②'], ['verhuizen', 'verhuis', '①'], ['eten', 'eet', 'doubler']];
  d.ex({ g: 17, title: 'Exercice 1 — La chaîne de montage', stars: '★', instr: 'Trouvez le radical (= la forme de //ik//) : faites passer chaque verbe dans la chaîne.' }, (s, mode, top) => {
    const steps = [['GiScissors', '− en  (ou − n)', 'tx2'], ['FaSyncAlt', 'z → s  ·  v → f', 'accent1'], ['FaRulerHorizontal', 'doubler / simplifier', 'accent3']];
    steps.forEach(([ic, lab, c], i) => {
      const x = 0.6 + i * 4.15;
      d.rect(s, x, top, 3.65, 0.42, { fill: 'bg2', line: c, lw: 1.25, radius: 0.2 });
      d.icon(s, ic, c, x + 0.15, top + 0.07, 0.28);
      d.t(s, lab, x + 0.55, top, 3.0, 0.42, { size: 16, bold: true, color: c, valign: 'middle' });
      if (i < 2) d.line(s, x + 3.72, top + 0.21, x + 4.08, top + 0.21, { color: 'accent5', lw: 2 });
    });
    const y0 = top + 0.62; const pitch = (6.86 - y0) / 6; const h = pitch - 0.14;
    ex1.forEach(([inf, rad, chip], i) => {
      const col = Math.floor(i / 6); const x = 0.6 + col * 6.23; const y = y0 + (i % 6) * pitch;
      d.rect(s, x, y, 1.95, h, { fill: 'tx2', line: null, radius: 0.08 });
      d.t(s, inf, x, y, 1.95, h, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.oval(s, x + 2.17, y + h - 0.04, 0.12, 0.12, { fill: GHOST });
      d.oval(s, x + 2.5, y + h - 0.04, 0.12, 0.12, { fill: GHOST });
      d.line(s, x + 2.05, y + h / 2, x + 2.75, y + h / 2, { color: 'accent1', lw: 3 });
      if (mode === 'q') d.rect(s, x + 2.85, y, 1.65, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, dash: 'dash', radius: 0.08 });
      else {
        d.rect(s, x + 2.85, y, 1.65, h, { fill: PALE_GREEN, line: 'accent3', lw: 2, radius: 0.08 });
        d.t(s, rad, x + 2.85, y, 1.65, h, { size: 22, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
        if (chip) cchip(d, s, chip, x + 4.6, y + (h - 0.36) / 2, 1.3, 0.36, chip === 'court' ? HEX.accent5 : chip === 'doubler' ? HEX.accent3 : HEX.dk2, 12);
      }
    });
  });

  // ---------------------------------------------------------------- 18 ex2 conjugue
  const ex2 = [
    ['Jan en Sofie ', 'geven', ' een cadeau.', 'geven'], ['Ik ', 'reizen', ' elke zomer.', 'rei##s##'], ['Jij ', 'lezen', ' veel boeken.', 'lee##s##t'],
    ['', 'Leven', ' jij gezond?', 'Lee##f##'], ['U ', 'rijden', ' voorzichtig.', 'rij##dt##'], ['Mijn collega ', 'praten', ' te veel.', 'praat'],
    ['Hij ', 'worden', ' volgende maand 40.', 'wor##dt##'], ['', 'Vinden', ' je de les leuk?', 'Vind'], ['Ik ', 'gaan', ' met de trein naar Luik.', 'ga'],
    ['', 'Zien', ' u de bus?', 'Zie##t##'], ['Sofie ', 'schrijven', ' een mail naar de klant.', 'schrij##f##t'], ['We ', 'blijven', ' vandaag thuis.', 'blijven'],
  ];
  d.ex({ g: 18, title: 'Exercice 2 — Conjugue !', stars: '★★', instr: 'Conjuguez le verbe entre parenthèses. Attention aux réflexes et à l’inversion !' }, (s, mode, top) => {
    const pitch = (6.86 - top) / 6; const h = pitch - 0.12;
    ex2.forEach(([pre, inf, post, ans], i) => {
      const col = Math.floor(i / 6); const x = 0.6 + col * 6.18; const y = top + (i % 6) * pitch;
      d.rect(s, x, y, 5.95, h, { fill: 'bg2', line: BORDER });
      d.num(s, i + 1, x + 0.12, y + (h - 0.44) / 2, 0.44, 'tx2', 14);
      const str = mode === 'q' ? `${pre}°°……°° (${inf})${post}` : `${pre}<<${ans}>>${post}`;
      d.t(s, str, x + 0.7, y, 5.1, h, { size: 20, valign: 'middle', fit: true, max: 20, min: 15 });
    });
  });

  // ---------------------------------------------------------------- 19 ex3 buzzer
  const ex3 = [['Hij wor??dt?? moe.', 'dt'], ['Wor??d?? je moe?', 'd'], ['Ik wor??d?? moe.', 'd'], ['Wor??dt?? u ook moe?', 'dt'],
    ['Mijn baas rij??dt?? met de auto.', 'dt'], ['Rij??d?? jij met de fiets?', 'd'], ['Wat vin??d?? je van de les?', 'd'], ['Ze vin??dt?? de les leuk.', 'dt']];
  const btn = { d: 'accent2', t: 'accent5', dt: 'accent1' };
  d.ex({ g: 19, title: 'Exercice 3 — d, t ou dt ? (buzzer)', stars: '★★', instr: 'Deux équipes, trois buzzers : d, t ou dt ? Justifiez avec //werken//.' }, (s, mode, top) => {
    ['d', 't', 'dt'].forEach((b, i) => {
      const x = 0.9 + i * 1.85;
      d.oval(s, x - 0.08, top + 0.02, 1.41, 1.41, { fill: btn[b], tr: 65 });
      d.oval(s, x + 0.05, top + 0.15, 1.15, 1.15, { fill: btn[b] });
      d.t(s, b, x + 0.05, top + 0.15, 1.15, 1.15, { size: 36, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    });
    d.pic(s, 'horloge', 6.55, top + 0.05, 1.35, 1.35);
    d.rect(s, 8.6, top, 4.13, 1.45, { fill: 'bg2', line: BORDER });
    d.t(s, 'POINTS', 8.8, top + 0.05, 2, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2 });
    d.icon(s, 'FaTrophy', 'accent1', 12.25, top + 0.08, 0.32);
    [['A', 'accent2'], ['B', 'purple']].forEach(([L, c], k) => {
      const x = 8.8 + k * 1.95;
      d.num(s, L, x, top + 0.6, 0.55, c, 18);
      d.rect(s, x + 0.7, top + 0.55, 1.0, 0.65, { fill: 'FFFFFF', line: c, lw: 1.5 });
    });
    const y1 = top + 1.65;
    d.rect(s, 0.6, y1, 12.13, 1.05, { fill: 'FFFFFF', line: 'accent1', lw: 2.5, shadow: true });
    d.num(s, 1, 0.85, y1 + 0.25, 0.55, 'accent1', 18);
    txt(s, ex3[0][0], 1.7, y1, 10.8, 1.05, { size: 38, mode, head: true, align: 'center' });
    const gy = y1 + 1.25; const ph = (6.86 - gy - 0.15) / 2; const w = 2.845;
    ex3.forEach(([str, a], i) => {
      const x = 0.6 + (i % 4) * (w + 0.25); const y = gy + Math.floor(i / 4) * (ph + 0.15);
      d.rect(s, x, y, w, ph, { fill: i ? 'bg2' : 'FDF3EA', line: i ? BORDER : 'accent1', lw: i ? 1 : 1.5 });
      d.num(s, i + 1, x + 0.1, y + (ph - 0.4) / 2, 0.4, 'tx2', 13);
      txt(s, str, x + 0.6, y, w - (mode === 'a' ? 1.15 : 0.7), ph, { size: 16, mode });
      if (mode === 'a') {
        d.oval(s, x + w - 0.52, y + (ph - 0.42) / 2, 0.42, 0.42, { fill: btn[a] });
        d.t(s, a, x + w - 0.52, y + (ph - 0.42) / 2, 0.42, 0.42, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      }
    });
  });

  // ---------------------------------------------------------------- 20 ex4 e-mail
  d.ex({ g: 20, title: 'Exercice 4 — Le correcteur (détective)', stars: '★★★', instr: 'Sofie a écrit trop vite. Trouvez et corrigez les 5 fautes.' }, (s, mode, top) => {
    const X = 0.6; const W = 8.1; const Y = top; const H = 6.86 - top;
    d.rect(s, X, Y, W, H, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
    d.rect(s, X, Y, W, 0.45, { fill: 'tx2', line: null, radius: 0.04 });
    ['accent6', 'accent1', 'accent3'].forEach((c, i) => d.oval(s, X + 0.18 + i * 0.27, Y + 0.15, 0.15, 0.15, { fill: c }));
    d.icon(s, 'FaEnvelope', 'FFFFFF', X + 1.1, Y + 0.09, 0.27);
    d.t(s, 'Feestje!', X + 1.5, Y, 4, 0.45, { size: 14, bold: true, color: 'bg1', valign: 'middle' });
    [['Van :', 'Sofie Peeters'], ['Aan :', 'Tom'], ['Onderwerp :', 'Feestje!']].forEach(([k, v], i) => {
      const y = Y + 0.55 + i * 0.36;
      d.t(s, k, X + 0.25, y, 1.4, 0.34, { size: 15, color: 'accent5', valign: 'middle' });
      d.t(s, v, X + 1.65, y, 5, 0.34, { size: 15, bold: true, valign: 'middle' });
    });
    d.line(s, X + 0.2, Y + 1.7, X + W - 0.2, Y + 1.7, { color: BORDER, lw: 1, arrow: false });
    d.t(s, ['Hallo Tom,',
      'Ik {{lez}}++ lees++ je mail nu. Onze collega Karim {{wort}}++ wordt++ morgen 33 jaar. We {{geefen}}++ geven++ een klein feest op kantoor. Hij {{reizt}}++ reist++ veel en hij {{praatt}}++ praat++ graag over zijn reizen. Kom jij ook? Kan je een taart meebrengen?',
      'Groetjes, Sofie'], X + 0.3, Y + 1.85, W - 0.6, H - 2.0, { size: 20, mode, gap: 10, base: { italic: true }, fit: true, max: 20, min: 15 });
    const RX = 8.95; const RW = 3.78;
    if (mode === 'q') {
      d.rect(s, RX, Y, RW, H, { fill: 'bg2', line: BORDER });
      d.iconDisc(s, 'FaSearch', RX + RW / 2 - 0.85, Y + 0.45, 1.7, 'tx2');
      d.t(s, '5 fautes', RX, Y + 2.4, RW, 0.8, { size: 40, bold: true, color: 'accent1', align: 'center', valign: 'middle', head: true });
      d.t(s, 'cachées dans l’e-mail', RX, Y + 3.15, RW, 0.4, { size: 17, italic: true, color: 'accent5', align: 'center' });
    } else {
      d.t(s, 'LES 5 CORRECTIONS', RX, Y, RW, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2 });
      const fixes = [['①', '{{lez}} → <<lees>>'], ['④', '{{wort}} → <<wordt>>'], ['pluriel', '{{geefen}} → <<geven>>'], ['①', '{{reizt}} → <<reist>>'], ['③', '{{praatt}} → <<praat>>']];
      fixes.forEach(([n, f], i) => {
        const y = Y + 0.42 + i * 0.6;
        d.rect(s, RX, y, RW, 0.52, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.5 });
        cchip(d, s, n, RX + 0.1, y + 0.09, 0.8, 0.34, n === 'pluriel' ? HEX.accent5 : HEX.dk2, n === 'pluriel' ? 12 : 17);
        d.t(s, f, RX + 1.05, y, RW - 1.15, 0.52, { size: 17, valign: 'middle' });
      });
      const ly = Y + 0.42 + 5 * 0.6 + 0.1;
      d.rect(s, RX, ly, RW, 6.86 - ly, { fill: PALE_GREEN, line: 'accent3', lw: 1.25 });
      d.icon(s, 'FaCheck', 'accent3', RX + 0.15, ly + 0.15, 0.3);
      d.t(s, ['**Leurres** (corrects) :', '//Kom jij ook?// · //Kan je… meebrengen?//'], RX + 0.55, ly + 0.05, RW - 0.65, 6.86 - ly - 0.1, { size: 14, valign: 'middle', gap: 2, fit: true, max: 15, min: 12 });
    }
  });

  // ---------------------------------------------------------------- 21 ex5 modalité
  const ex5 = [
    ['Ik werk thuis.', 'willen', 'FaHeart', 'accent6', [['Ik'], ['wil', 'v'], ['thuis'], ['werken', 'v2'], ['.', '.']]],
    ['Hij spreekt Nederlands.', 'kunnen', 'GiMuscleUp', 'accent2', [['Hij'], ['kan', 'v'], ['Nederlands'], ['spreken', 'v2'], ['.', '.']]],
    ['We betalen met de bankkaart.', 'mogen', 'FaCheckCircle', 'accent3', [['We'], ['mogen', 'v'], ['met de bankkaart'], ['betalen', 'v2'], ['.', '.']]],
    ['Jullie vullen het formulier in.', 'moeten', 'FaExclamationTriangle', 'accent1', [['Jullie'], ['moeten', 'v'], ['het formulier'], ['invullen', 'v2'], ['.', '.']]],
    ['Rijd jij morgen?', 'kunnen', 'GiMuscleUp', 'accent2', [['Kun / Kan', 'v'], ['jij morgen'], ['rijden', 'v2'], ['?', '.']]],
    ['Ze gaat naar de vergadering.', 'willen', 'FaHeart', 'accent6', [['Ze'], ['wil', 'v'], ['naar de vergadering'], ['gaan', 'v2'], ['.', '.']]],
  ];
  d.ex({ g: 21, title: 'Exercice 5 — Avec un verbe de modalité', stars: '★★', instr: 'Ajoutez le verbe de modalité : l’infinitif part au bout de la phrase.' }, (s, mode, top) => {
    const pitch = (6.86 - top) / 6; const h = pitch - 0.13;
    ex5.forEach(([src, modal, ic, c, parts], i) => {
      const y = top + i * pitch;
      d.rect(s, 0.6, y, 4.1, h, { fill: 'bg2', line: BORDER });
      d.num(s, i + 1, 0.7, y + (h - 0.42) / 2, 0.42, 'tx2', 13);
      d.t(s, src, 1.25, y, 3.4, h, { size: 17, valign: 'middle', fit: true, max: 17, min: 13 });
      s.addShape(d.S.PENTAGON, { x: 4.85, y: y + 0.06, w: 2.05, h: h - 0.12, fill: { color: HEX.accent1 }, line: { color: HEX.accent1, width: 0.5 } });
      d.oval(s, 4.95, y + (h - 0.4) / 2, 0.4, 0.4, { fill: 'FFFFFF' });
      d.icon(s, ic, c, 5.02, y + (h - 0.26) / 2, 0.26);
      d.t(s, modal, 5.42, y, 1.3, h, { size: 15, bold: true, color: 'bg1', valign: 'middle' });
      if (mode === 'q') d.rect(s, 7.05, y, 5.68, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, dash: 'dash' });
      else {
        d.rect(s, 7.05, y, 5.68, h, { fill: 'FFFFFF', line: 'accent3', lw: 1.75 });
        let pt = 18; let lay = layout(parts, 7.2, pt, { pad: 0.06, gap: 0.06 });
        while (lay.end > 12.6 && pt > 14) { pt -= 1; lay = layout(parts, 7.2, pt, { pad: 0.06, gap: 0.06 }); }
        const ty = y + 0.06; const th = h - 0.24;
        pince(d, s, lay, ty, th, { off: 0.09, lw: 1.75, flw: 1.75 });
        drawSentence(d, s, lay, ty, th, pt);
      }
    });
  });

  // ---------------------------------------------------------------- 22 ex6 mime
  const ex6 = [['slapen', 'FaBed', 'slaap##t##'], ['lezen', 'v_lezen', 'lees##t##'], ['schrijven', 'FaPen', 'schrijf##t##'], ['rijden', 'FaCar', 'rijd##t##'],
    ['eten', 'FaUtensils', 'eet'], ['drinken', 'FaCoffee', 'drink##t##'], ['praten', 'v_praten', 'praat'], ['lopen', 'p_lopen', 'loop##t##'],
    ['zingen', 'FaMusic', 'zing##t##'], ['bellen', 'FaPhoneAlt', 'bel##t##'], ['wachten', 'FaHourglassHalf', 'wacht'], ['zitten', 'FaChair', 'zit']];
  d.ex({ g: 22, title: 'Exercice 6 — Mime et conjugue', stars: '★' }, (s, mode, top) => {
    const w = 2.845; const h = 1.3;
    ex6.forEach(([inf, ic, ans], i) => {
      const x = 0.6 + (i % 4) * (w + 0.25); const y = 1.7 + Math.floor(i / 4) * (h + 0.17);
      if (mode === 'q') {
        d.rect(s, x, y, w, h, { fill: 'tx2', line: null, radius: 0.12, shadow: true });
        d.rect(s, x + 0.1, y + 0.1, w - 0.2, h - 0.2, { fill: null, line: 'FFFFFF', lw: 0.75, ltr: 60, radius: 0.1 });
        d.num(s, i + 1, x + 0.2, y + 0.2, 0.42, 'accent1', 13);
        d.t(s, '?', x, y, w, h, { size: 48, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      } else {
        d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent3', lw: 2, radius: 0.12, shadow: true });
        d.rect(s, x + 0.15, y + 0.15, 1.0, 1.0, { fill: PALE_GREEN, line: null, radius: 0.1 });
        if (ic.startsWith('Fa')) d.icon(s, ic, 'accent3', x + 0.3, y + 0.3, 0.7);
        else d.pic(s, ic, x + 0.2, y + 0.2, 0.9, 0.9);
        d.t(s, '//' + inf + '//', x + 1.3, y + 0.12, w - 1.4, 0.4, { size: 15, color: 'accent5', valign: 'middle' });
        d.t(s, `<<${ans}>>`, x + 1.3, y + 0.5, w - 1.4, 0.65, { size: ans.length > 10 ? 21 : 25, valign: 'middle', head: true });
      }
    });
    d.rect(s, 0.6, 6.08, 12.13, 0.77, { fill: 'bg2', line: BORDER });
    d.icon(s, 'FaTheaterMasks', 'accent1', 0.8, 6.27, 0.4);
    d.t(s, ['Un joueur **mime** le verbe · l’équipe répond avec une phrase complète :', '« //**Hij leest!**// »  /  « //**Ze rijdt!**// »'], 1.4, 6.08, 11.2, 0.77, { size: 16, valign: 'middle', gap: 0 });
  });

  // ---------------------------------------------------------------- 23 ex7 planning (E8)
  {
    const s = d.page({ g: 23, tag: 'MISE EN SITUATION', title: 'Exercice 7 — Le planning de l’équipe', stars: '★★★' });
    d.rect(s, 0.6, 1.66, 12.13, 0.46, { fill: 'purple', tr: 90, line: 'purple', lw: 1 });
    d.t(s, 'En binôme : placez les 4 tâches dans la semaine, **sans montrer votre carte** !', 0.85, 1.66, 11.7, 0.46, { size: 17, valign: 'middle' });
    const y = 2.27; const H = 2.33;
    [['A', 'accent2', ['**lundi** à Gand', '**mercredi** : libre'], 0.6], ['B', 'purple', ['**mardi** : formation', '**jeudi** : télétravail'], 10.33]].forEach(([L, c, lines, x]) => {
      d.rect(s, x, y, 2.4, H, { fill: 'bg1', line: c, lw: 1.75, shadow: true });
      d.num(s, L, x + 0.15, y + 0.15, 0.55, c, 18);
      d.t(s, 'Rôle ' + L, x + 0.8, y + 0.15, 1.1, 0.55, { size: 19, bold: true, color: c, valign: 'middle', head: true });
      d.icon(s, 'FaUserSecret', c, x + 1.9, y + 0.24, 0.36);
      d.t(s, 'Mon agenda (secret) :', x + 0.15, y + 0.82, 2.15, 0.32, { size: 13, italic: true, color: 'accent5' });
      d.t(s, lines, x + 0.12, y + 1.18, 2.2, 1.1, { size: 15, gap: 6, valign: 'top', bullet: true });
    });
    const BX = 3.25; const BW = 6.83; const cw = BW / 5;
    d.rect(s, BX, y, BW, H, { fill: 'FFFFFF', line: 'tx2', lw: 1.5, radius: 0.04 });
    d.icon(s, 'FaCalendarAlt', 'bg2', BX + BW / 2 - 0.55, y + 0.9, 1.1);
    ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'].forEach((day, i) => {
      const x = BX + i * cw;
      d.rect(s, x + 0.04, y + 0.04, cw - 0.08, 0.42, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, day, x, y + 0.04, cw, 0.42, { size: 14, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      if (i) d.line(s, x, y + 0.55, x, y + H - 0.1, { color: BORDER, lw: 1, arrow: false, dash: 'dash' });
    });
    const tasks = [['de klant opbellen', 'FFE27A'], ['een mail schrijven', 'CFE3F6'], ['de documenten lezen', 'D4EDDC'], ['naar de bank gaan', 'F6D3E3']];
    const pw = (BW - 0.25 * 3) / 4; const ty = 4.73;
    tasks.forEach(([t, f], i) => {
      const x = BX + i * (pw + 0.25);
      d.rect(s, x, ty, pw, 0.6, { fill: f, line: null, radius: 0.03, shadow: true });
      d.t(s, '//' + t + '//', x + 0.05, ty, pw - 0.1, 0.6, { size: 13, bold: true, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, ty, 2.4, 0.6, { fill: 'bg2', line: BORDER });
    d.icon(s, 'FaStopwatch', 'accent1', 0.75, ty + 0.13, 0.34);
    d.t(s, '6 minutes', 1.2, ty, 1.7, 0.6, { size: 17, bold: true, color: 'accent1', valign: 'middle' });
    d.rect(s, 10.33, ty, 2.4, 0.6, { fill: 'bg2', line: BORDER });
    d.t(s, 'Puis : présentez à la classe (//hij / zij//)', 10.42, ty, 2.25, 0.6, { size: 13, italic: true, color: 'accent5', valign: 'middle', fit: true, max: 13, min: 11 });
    const by = 5.5;
    d.rect(s, 0.6, by, 12.13, 6.86 - by, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE DE PHRASES', 0.8, by + 0.06, 4, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, ['– //!!Kun!! **jij** op maandag de klant !!opbellen!!?//', '– //Nee, op maandag !!kan!! ik niet: ik !!moet!! naar Gent !!gaan!!. Maar op woensdag !!kan!! ik wel.//'], 0.8, by + 0.4, 6.0, 6.8 - by - 0.4, { size: 15, gap: 4, fit: true, max: 15, min: 12 });
    d.t(s, ['– //!!Wil!! **jij** de documenten !!lezen!!?// — //Ja, dat !!wil!! ik wel.//', '– //**Wie** !!kan!! naar de bank !!gaan!!?//'], 7.05, by + 0.4, 5.55, 6.8 - by - 0.4, { size: 15, gap: 4, fit: true, max: 15, min: 12 });
  }

  // ---------------------------------------------------------------- 24 ticket
  {
    const s = d.ticket({
      g: 24,
      q: ['Conjuguez : //hij (lezen)//, //hij (worden)//, //jij (praten)//.', 'Question avec //je// : //Jij rijdt naar Gent.//', 'Traduisez : « Je dois écrire un mail. »'],
      self: ['Écrire juste', 'Verbes courts', 'Verbes de modalité'],
    });
    d.rect(s, 0.6, 6.03, 6.6, 0.82, { fill: 'FFFFFF', line: 'accent5', lw: 1, dash: 'dash' });
    d.icon(s, 'FaRedoAlt', 'accent5', 0.8, 6.27, 0.34);
    d.t(s, 'Erreur à la question 1 ? → organigramme (diapo 15) + exercice 1 à la maison.', 1.3, 6.03, 5.8, 0.82, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    const X = 7.6; const Y = 5.12; const W = 5.13; const H = 1.73;
    d.rect(s, X, Y, W, H, { fill: 'tx2', line: null });
    d.t(s, 'MODULE 5', X + 0.2, Y + 0.08, 2.2, 0.34, { size: 14, bold: true, color: 'bg1', valign: 'middle' });
    d.t(s, '//De of het?//', X + 0.2, Y + 0.42, 2.2, 0.3, { size: 13, color: 'bg2', valign: 'middle' });
    [['DE ?', 'accent2', X + 2.6], ['HET ?', 'accent1', X + 3.8]].forEach(([t, c, x]) => {
      d.rect(s, x, Y + 0.12, 1.1, 0.55, { fill: c, line: 'FFFFFF', lw: 1.5, radius: 0.08 });
      d.t(s, t, x, Y + 0.12, 1.1, 0.55, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    });
    d.line(s, X + 3.15, Y + 0.72, X + 3.55, Y + 0.95, { color: 'FFFFFF', lw: 1.5 });
    d.line(s, X + 4.35, Y + 0.72, X + 3.95, Y + 0.95, { color: 'FFFFFF', lw: 1.5 });
    d.rect(s, X + 2.6, Y + 1.0, 2.3, 0.6, { fill: 'FFFFFF', line: null, radius: 0.08 });
    d.pic(s, 'a_huis', X + 2.75, Y + 1.05, 0.5, 0.5);
    d.t(s, 'huis', X + 3.35, Y + 1.0, 1.4, 0.6, { size: 24, bold: true, color: 'tx1', valign: 'middle', head: true });
    d.icon(s, 'FaQuestion', 'accent1', X + 0.5, Y + 0.85, 0.7);
  }
}

module.exports = { meta, build };
