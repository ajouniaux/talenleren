// Module 3 — Het presens · Le présent et la place du verbe
const { BORDER, GHOST, plain } = require('../lib');

const meta = { n: 3, slug: 'Het_presens', title: 'Het presens — Le présent et la place du verbe', short: 'Het presens', template: 'module_3_presens_en_zinsbouw.md' };

const GREEN_PALE = 'EDF6F0';
const PINK_PALE = 'FBEFF4';
const RED_PALE = 'FBE9E7';
const GREY_BAND = 'DDE3EA';
const HEXC = { tx2: '17375E', accent1: 'D9700F', accent5: '4A5A70', accent6: 'B83227' };

// Width estimate (inches) — DejaVu Sans Bold advances (1/100 em, ASCII 32–126). DejaVu is the LibreOffice
// fallback for Calibri here and is wider than Calibri, so boxes sized with it are safe in PowerPoint too.
const WB = [35, 46, 52, 84, 70, 100, 87, 31, 46, 46, 52, 84, 38, 42, 38, 37, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 40, 40, 84, 84, 84, 58, 100, 77, 76, 73, 83, 68, 68, 82, 84, 37, 37, 77, 64, 100, 84, 85, 73, 85, 77, 72, 68, 81, 77, 110, 77, 72, 73, 46, 37, 46, 84, 50, 50, 67, 72, 59, 72, 68, 44, 72, 71, 34, 34, 67, 34, 104, 71, 69, 72, 72, 49, 60, 48, 71, 65, 92, 65, 65, 58, 71, 37, 71, 84];
function tw(str, pt, bold = true) {
  let u = 0;
  for (const ch of plain(str)) {
    const c = ch.charCodeAt(0);
    u += c >= 32 && c < 127 ? WB[c - 32] : /[a-zàâçéèêëîïôûùü]/i.test(ch) ? 68 : '·’'.includes(ch) ? 36 : 90;
  }
  return (u / 100) * (bold ? 1 : 0.91) * (pt / 72);
}
// largest size ≤ max at which a single line fits in w
function fs1(str, w, max, min = 11, bold = true) { for (let p = max; p > min; p--) if (tw(str, p, bold) <= w) return p; return min; }

function build(d) {
  const S = d.S;

  // ------------------------------------------------------------ local helpers
  // a sentence as a row of groups. kinds: s subject (blue box), v conjugated verb (red, circled), v2 2nd verbal part
  // (red, dashed), f element moved to ① (orange highlight), q question word (orange), r rest (plain)
  const segs = (s, parts, x, y, h, o = {}) => {
    let pt = o.size || 22;
    const gap = o.gap ?? 0.1; const pad = o.pad ?? 0.22; const maxW = o.maxW || 12;
    const wOf = (t, k, p) => (k === 'v' ? tw(t, p) * 1.08 + 0.36 : k === 'r' ? tw(t, p, !!o.boldRest) + 0.1 : tw(t, p) + pad);
    const total = (p) => parts.reduce((a, [t, k]) => a + wOf(t, k, p), 0) + gap * (parts.length - 1);
    while (pt > (o.min || 12) && total(pt) > maxW) pt--;
    let cx = o.align === 'center' ? x + (maxW - total(pt)) / 2 : x;
    const pos = [];
    for (const [t, k] of parts) {
      const w = wOf(t, k, pt);
      const st = { size: pt, bold: k !== 'r' || !!o.boldRest, align: 'center', valign: 'middle', color: o.restColor || 'tx1' };
      if (k === 'v') { d.oval(s, cx, y, w, h, { fill: null, line: 'accent6', lw: o.lw || 2.25 }); st.color = 'accent6'; }
      else if (k === 'v2') { d.rect(s, cx, y, w, h, { fill: null, line: 'accent6', lw: 1.75, dash: 'dash' }); st.color = 'accent6'; }
      else if (k === 's') { d.rect(s, cx, y, w, h, { fill: 'accent2', tr: 86, line: 'accent2', lw: 1.25 }); st.color = 'accent2'; }
      else if (k === 'f') d.rect(s, cx, y, w, h, { fill: 'accent1', tr: 76, line: 'accent1', lw: 1.25 });
      else if (k === 'q') st.color = 'accent1';
      d.t(s, t, cx, y, w, h, st);
      pos.push({ x: cx, w, c: cx + w / 2 });
      cx += w + gap;
    }
    return { pos, pt, end: cx - gap };
  };
  // numbered pastille of the 6-box grid; ② and ⑥ are red and ringed
  const badge = (s, i, x, y, dd = 0.42) => {
    const red = i === 1 || i === 5;
    if (red) d.oval(s, x - 0.06, y - 0.06, dd + 0.12, dd + 0.12, { fill: null, line: 'accent6', lw: 2 });
    d.num(s, i + 1, x, y, dd, red ? 'accent6' : 'tx2', Math.round(dd * 34));
  };
  const colsAt = (x, ws, gap) => { const r = []; let cx = x; for (const w of ws) { r.push({ x: cx, w, c: cx + w / 2 }); cx += w + gap; } return r; };
  // S5 conveyor
  const belt = (s, x1, x2, y) => {
    d.rect(s, x1, y, x2 - x1, 0.16, { fill: 'accent5', tr: 45, line: null, radius: 0.08 });
    for (let x = x1 + 0.3; x < x2 - 0.15; x += 0.6) d.oval(s, x - 0.08, y + 0.2, 0.16, 0.16, { fill: GHOST });
  };
  const station = (s, x, y, w, h, icon, label, c = 'accent1', size = 18) => {
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'tx2', lw: 2, radius: 0.12, shadow: true });
    d.iconDisc(s, icon, x + w / 2 - 0.27, y + 0.1, 0.54, c);
    d.t(s, label, x + 0.05, y + 0.66, w - 0.1, h - 0.72, { size: fs1(label, w - 0.15, size, 12), bold: true, color: c, align: 'center', valign: 'middle' });
  };
  const wcard = (s, text, x, y, w, h, kind, size = 26) => {
    const c = { in: 'tx2', bad: 'accent6', ok: 'accent3' }[kind];
    d.rect(s, x, y, w, h, { fill: kind === 'ok' ? GREEN_PALE : 'FFFFFF', line: c, lw: kind === 'in' ? 2.5 : 3, radius: 0.1, shadow: true });
    d.t(s, text, x + 0.05, y, kind === 'ok' ? w - 0.55 : w - 0.1, h, { size, bold: true, align: 'center', valign: 'middle', head: true, color: kind === 'bad' ? 'accent6' : 'tx1' });
    if (kind === 'ok') d.icon(s, 'FaCheckCircle', 'accent3', x + w - 0.5, y + h / 2 - 0.2, 0.4);
  };
  const chev = (s, x, y) => d.icon(s, 'FaChevronRight', 'accent5', x, y, 0.24);
  // word whose last letter is struck in orange (the t that falls): returns nothing
  const fallT = (s, word, cx, y, h, pt, color = 'accent6') => {
    const ww = tw(word, pt); const wt = tw('t', pt);
    const x0 = cx - (ww + wt) / 2;
    d.t(s, word, x0 - 0.6, y, ww + 0.6, h, { size: pt, bold: true, color, align: 'right', valign: 'middle' });
    d.t(s, 't', x0 + ww, y, wt + 0.3, h, { size: pt, bold: true, color: 'accent1', valign: 'middle', base: { strike: 'sngStrike' } });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Het presens', sub: 'Le présent et la place du verbe', line: 'Conjuguer — et mettre le verbe à sa place',
    visual: (s) => {
      d.rect(s, 7.2, 1.85, 5.5, 1.1, { fill: 'FFFFFF', line: null, radius: 0.14, shadow: true });
      d.t(s, 'Demain, je travaille.', 7.2, 1.85, 5.5, 1.1, { size: fs1('Demain, je travaille.', 5.1, 30, 20), bold: true, align: 'center', valign: 'middle' });
      d.t(s, '?', 9.5, 3.05, 0.9, 1.0, { size: 60, bold: true, color: 'accent1', align: 'center', valign: 'middle', head: true });
      d.rect(s, 7.2, 4.15, 5.5, 1.1, { fill: 'bg2', line: null, radius: 0.14, shadow: true });
      segs(s, [['Morgen', 'r'], ['werk', 'v'], ['ik.', 'r']], 7.3, 4.28, 0.84, { size: 32, maxW: 5.3, align: 'center', boldRest: true, lw: 3, gap: 0.12 });
      d.t(s, 'FR', 7.2, 3.0, 0.6, 0.3, { size: 12, bold: true, color: 'bg2', cs: 2 });
      d.t(s, 'NL', 7.2, 5.32, 0.6, 0.3, { size: 12, bold: true, color: 'bg2', cs: 2 });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCog', h: 'Conjuguer', t: 'Je trouve le **radical** et je conjugue n’importe quel verbe régulier.', color: 'accent1' },
      { icon: 'FaQuestion', h: 'Questionner', t: 'Je pose une question **avec ou sans** mot interrogatif.', color: 'accent2' },
      { icon: 'FaPuzzlePiece', h: 'Construire', t: 'Je mets **toujours** le verbe à la bonne place.', color: 'accent6' },
    ],
    band: 'Module 2 : on a //utilisé// la formule (//ik woon, hij woont//). Aujourd’hui, on la **comprend** et on la **généralise**.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT' });
    const verbs = [
      ['werken', [['ik', '@@werk@@'], ['hij', '@@werk@@##t##'], ['wij', '@@werk@@##en##']]],
      ['wonen', [['ik', '@@woon@@'], ['hij', '@@woon@@##t##'], ['wij', '@@won@@##en##']]],
      ['spreken', [['ik', '@@spreek@@'], ['hij', '@@spreek@@##t##'], ['wij', '@@sprek@@##en##']]],
    ];
    const w = 2.95; const gap = 0.3;
    verbs.forEach(([inf, rows], i) => {
      const x = 0.6 + i * (w + gap);
      d.rect(s, x, 1.75, w, 4.3, { fill: 'FFFFFF', line: BORDER, shadow: true });
      d.rect(s, x, 1.75, w, 0.8, { fill: 'tx2', line: null, radius: 0.08 });
      d.rect(s, x, 2.3, w, 0.25, { fill: 'tx2', line: null, radius: 0 });
      d.t(s, inf, x, 1.75, w, 0.8, { size: 26, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      rows.forEach(([p, v], k) => {
        const y = 2.75 + k * 1.08;
        if (k) d.line(s, x + 0.25, y - 0.12, x + w - 0.25, y - 0.12, { color: BORDER, lw: 1, arrow: false });
        d.t(s, p, x + 0.3, y, 0.75, 0.85, { size: 22, color: 'accent5', valign: 'middle' });
        d.t(s, v, x + 1.0, y, w - 1.1, 0.85, { size: 28, valign: 'middle', head: true });
      });
    });
    d.t(s, '@@bleu nuit@@ = partie commune  ·  ##orange## = terminaison', 0.6, 6.3, 9.45, 0.4, { size: 16, italic: true, color: 'accent5', align: 'center' });
    d.bubble(s, '**Quelle est la règle ?**', 10.25, 2.0, 2.48, 1.2, 'accent2', { size: 20, align: 'center' });
    d.avatar(s, 'prof_question', 10.3, 3.45, 2.4, 3.4);
  }

  // ---------------------------------------------------------------- 4 le radical (S5, one station)
  d.section('Comprendre — le radical');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE' });
    belt(s, 0.7, 12.6, 3.25);
    wcard(s, 'WERK##EN##', 0.95, 2.3, 2.9, 0.9, 'in', 30);
    chev(s, 4.4, 2.63);
    station(s, 5.2, 1.85, 2.4, 1.65, 'GiScissors', '− en', 'accent1', 28);
    chev(s, 8.15, 2.63);
    wcard(s, 'WERK', 8.95, 2.3, 2.9, 0.9, 'ok', 30);
    d.t(s, 'infinitif', 0.95, 3.68, 2.9, 0.34, { size: 15, italic: true, color: 'accent5', align: 'center' });
    d.t(s, 'radical', 8.95, 3.68, 2.9, 0.34, { size: 15, bold: true, italic: true, color: 'accent3', align: 'center' });
    const rows = [['drink##en##', 'drink'], ['luister##en##', 'luister'], ['kijk##en##', 'kijk'], ['fiets##en##', 'fiets']];
    rows.forEach(([a, b], i) => {
      const y = 4.2 + i * 0.67; const h = 0.55;
      d.line(s, 3.1, y + h / 2, 5.58, y + h / 2, { color: GHOST, lw: 3 });
      d.rect(s, 0.6, y, 2.5, h, { fill: 'FFFFFF', line: 'tx2', lw: 1.75 });
      d.t(s, a, 0.6, y, 2.5, h, { size: 22, bold: true, align: 'center', valign: 'middle', head: true });
      d.rect(s, 3.65, y + 0.05, 1.35, h - 0.1, { fill: 'FDF1E6', line: 'accent1', lw: 1.25 });
      d.icon(s, 'GiScissors', 'accent1', 3.75, y + 0.12, 0.31);
      d.t(s, '− en', 4.1, y + 0.05, 0.85, h - 0.1, { size: 17, bold: true, color: 'accent1', valign: 'middle' });
      d.rect(s, 5.6, y, 2.0, h, { fill: GREEN_PALE, line: 'accent3', lw: 2 });
      d.t(s, b, 5.6, y, 2.0, h, { size: 22, bold: true, align: 'center', valign: 'middle', head: true });
    });
    d.rect(s, 7.95, 4.2, 4.78, 0.95, { fill: 'tx2', line: null });
    d.t(s, 'infinitif − en = radical', 7.95, 4.2, 4.78, 0.95, { size: fs1('infinitif − en = radical', 4.5, 26, 18), bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.rect(s, 7.95, 5.35, 4.78, 1.5, { fill: 'bg2', line: BORDER });
    d.icon(s, 'FaKey', 'accent1', 8.15, 5.55, 0.45);
    d.t(s, ['Le radical = la forme de **ik** :', '//ik werk, ik drink, ik luister//'], 8.8, 5.4, 3.8, 1.4, { size: 18, valign: 'middle', gap: 6 });
  }

  // ---------------------------------------------------------------- 5–6 ajustements (S5 + S6)
  const adjust = (s, c) => {
    d.rect(s, 0.6, 1.68, 12.13, 2.42, { fill: c.bg, line: null, radius: 0.1 });
    belt(s, 0.75, 12.58, 3.25);
    const y = 2.3; const h = 0.9;
    const L = { in: [0.85, 2.45], s1: [3.65, 1.5], mid: [5.5, 2.15], s2: [8.0, 1.95], out: [10.3, 2.25] };
    wcard(s, c.inp, L.in[0], y, L.in[1], h, 'in', 26);
    station(s, L.s1[0], 2.12, L.s1[1], 1.4, 'GiScissors', '− en', 'accent1', 22);
    wcard(s, c.mid, L.mid[0], y, L.mid[1], h, 'bad', 26);
    station(s, L.s2[0], 2.12, L.s2[1], 1.4, c.s2icon, c.s2, c.s2c, 18);
    wcard(s, c.out, L.out[0], y, L.out[1], h, 'ok', 24);
    [3.355, 5.205, 7.705, 10.005].forEach((x) => chev(s, x, 2.63));
    // syllable status above the cards (S6)
    const above = (k, icon, col) => d.icon(s, icon, col, L[k][0] + L[k][1] / 2 - 0.2, 1.8, 0.4);
    above('in', c.inIcon, c.inC);
    above('mid', 'FaDoorClosed', 'accent4');
    above('out', 'FaDoorClosed', 'accent4');
    // captions under the belt
    d.t(s, c.inCap, L.in[0] - 0.15, 3.68, L.in[1] + 0.3, 0.34, { size: 14, bold: true, italic: true, color: c.inC, align: 'center' });
    const mc = L.mid[0] + L.mid[1] / 2; const mw = tw(c.midCap, 14) + 0.2;
    d.icon(s, c.midIcon, 'accent6', mc - mw / 2 - 0.36, 3.67, 0.3);
    d.t(s, c.midCap, mc - mw / 2, 3.68, mw, 0.34, { size: 14, bold: true, color: 'accent6', align: 'center' });
    d.t(s, c.outCap, L.out[0] - 0.1, 3.68, L.out[1] + 0.2, 0.34, { size: 14, bold: true, color: 'accent3', align: 'center' });
    // rule
    d.rect(s, 0.6, 4.25, 12.13, 0.8, { fill: 'bg2', line: BORDER });
    d.icon(s, 'FaLightbulb', 'accent1', 0.8, 4.45, 0.4);
    d.t(s, c.rule, 1.35, 4.25, 11.2, 0.8, { size: 17, valign: 'middle' });
    // examples
    const ew = (12.13 - 0.8) / 5;
    c.ex.forEach(([a, b], i) => {
      const x = 0.6 + i * (ew + 0.2);
      d.rect(s, x, 5.2, ew, 0.85, { fill: 'FFFFFF', line: c.exC, lw: 1.5, shadow: true });
      d.t(s, a + '  →', x + 0.1, 5.22, ew - 0.2, 0.3, { size: 14, italic: true, color: 'accent5', align: 'center' });
      d.t(s, b, x + 0.1, 5.5, ew - 0.2, 0.5, { size: 24, align: 'center', valign: 'middle', head: true });
    });
    // foot
    d.rect(s, 0.6, 6.2, 12.13, 0.66, { fill: c.footC, tr: 90, line: c.footC, lw: 1 });
    d.icon(s, c.footIcon, c.footC, 0.8, 6.33, 0.4);
    d.t(s, c.foot, 1.35, 6.2, 11.2, 0.66, { size: 18, valign: 'middle' });
  };
  adjust(d.page({ g: 5, tag: 'GRAMMAIRE' }), {
    bg: GREEN_PALE, inp: 'SPR<<E>>·KEN', inIcon: 'FaDoorOpen', inC: 'accent3', inCap: 'ouverte → long',
    mid: '{{SPREK}}', midIcon: 'FaShieldAlt', midCap: '✗ son court !',
    s2: 'je double', s2icon: 'FaRulerHorizontal', s2c: 'accent3', out: 'SPR<<EE>>K', outCap: '✓ son long',
    rule: '**Infinitif** : syllabe **ouverte** → **radical** : syllabe **fermée** → **je double la voyelle** pour garder le son long',
    ex: [['spreken', 'spr<<ee>>k'], ['wonen', 'w<<oo>>n'], ['slapen', 'sl<<aa>>p'], ['maken', 'm<<aa>>k'], ['leren', 'l<<ee>>r']], exC: 'accent3',
    foot: '**Exception** : //komen → ik **kom**// (o court)', footIcon: 'FaExclamationTriangle', footC: 'accent6',
  });
  adjust(d.page({ g: 6, tag: 'GRAMMAIRE' }), {
    bg: PINK_PALE, inp: 'B%%E%%L·LEN', inIcon: 'FaDoorClosed', inC: 'accent4', inCap: 'consonne double',
    mid: '{{BELL}}', midIcon: 'FaBan', midCap: 'pas de double consonne en fin de mot',
    s2: 'je simplifie', s2icon: 'FaCompressArrowsAlt', s2c: 'accent4', out: 'B%%E%%L', outCap: '✓ une seule consonne',
    rule: 'Consonne **double** dans l’infinitif → **une seule** dans le radical',
    ex: [['bellen', 'b%%e%%__l__'], ['zitten', 'z%%i%%__t__'], ['zeggen', 'z%%e%%__g__'], ['pakken', 'p%%a%%__k__'], ['stoppen', 'st%%o%%__p__']], exC: 'accent4',
    foot: 'Le son reste **court** : la porte est fermée par une seule consonne.', footIcon: 'FaDoorClosed', footC: 'accent4',
  });

  // ---------------------------------------------------------------- 7 récapitulatif
  {
    const s = d.page({ g: 7, tag: 'À RETENIR' });
    const cw = [1.6, 2.4, 2.4, 2.45, 3.28];
    const xs = []; let cx = 0.6; cw.forEach((w) => { xs.push(cx); cx += w; });
    d.rect(s, 0.6, 1.7, 12.13, 0.55, { fill: 'tx2', line: null, radius: 0 });
    ['Son', 'Infinitif', 'Radical', 'Sens', 'Cas'].forEach((h, i) => d.t(s, h, xs[i] + 0.15, 1.7, cw[i] - 0.3, 0.55, { size: 16, bold: true, color: 'bg1', valign: 'middle', align: i === 3 ? 'left' : 'center' }));
    const rows = [
      ['<<a long>>', 'l__<<a>>__ten', 'l__<<aa>>__t', 'laisser', 'long'],
      ['<<o long>>', 'dr__<<o>>__men', 'dr__<<oo>>__m', 'rêver', 'long'],
      ['%%i court%%', 'z%%i%%__tt__en', 'z%%i%%__t__', 'être assis', 'short'],
      ['%%e court%%', 'b%%e%%__ll__en', 'b%%e%%__l__', 'téléphoner', 'short'],
      ['@@ij@@', 'k__@@ij@@__ken', 'k__@@ij@@__k', 'regarder', 'lock'],
      ['@@oe@@', 'v__@@oe@@__len', 'v__@@oe@@__l', 'sentir', 'lock'],
    ];
    const CAS = { long: ['accent3', GREEN_PALE, 'je double'], short: ['accent4', PINK_PALE, 'je simplifie'], lock: ['accent5', 'E9EDF2', 'rien ne change'] };
    rows.forEach(([son, inf, rad, fr, cas], r) => {
      const y = 2.25 + r * 0.64; const h = 0.64;
      const [c, fill, lab] = CAS[cas];
      d.rect(s, 0.6, y, 12.13 - cw[4], h, { fill: r % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0 });
      d.rect(s, xs[4], y, cw[4], h, { fill, line: BORDER, lw: 0.75, radius: 0 });
      d.t(s, son, xs[0], y, cw[0], h, { size: 18, align: 'center', valign: 'middle' });
      d.t(s, inf, xs[1], y, cw[1], h, { size: 24, align: 'center', valign: 'middle' });
      d.t(s, rad, xs[2], y, cw[2], h, { size: 24, align: 'center', valign: 'middle' });
      d.t(s, '//' + fr + '//', xs[3] + 0.15, y, cw[3] - 0.3, h, { size: 17, color: 'accent5', valign: 'middle' });
      if (cas === 'lock') d.icon(s, 'FaLock', c, xs[4] + 0.36, y + h / 2 - 0.17, 0.34);
      else d.dot(s, xs[4] + 0.53, y + h / 2, c, 0.28);
      d.t(s, lab, xs[4] + 0.9, y, cw[4] - 1.0, h, { size: 18, bold: true, color: c, valign: 'middle' });
    });
    d.rect(s, 0.6, 6.3, 12.13, 0.56, { fill: 'tx2', line: null });
    d.icon(s, 'FaLock', 'FFFFFF', 0.82, 6.42, 0.32);
    d.t(s, 'Rappel M1 — les sons invariables ne changent jamais : //ie, oe, eu, ui, ij, ei, ou, au//', 1.3, 6.3, 11.3, 0.56, { size: 17, color: 'bg1', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 8 mini-défi (S11) — vote, then reveal
  {
    const md = [['spreken', 1, 'spr<<ee>>k', 1], ['zeggen', 2, 'z%%e%%g', 0], ['werken', 2, 'w%%e%%rk', 0], ['slapen', 1, 'sl<<aa>>p', 1], ['nemen', 1, 'n<<ee>>m', 1], ['pakken', 2, 'p%%a%%k', 0], ['koken', 1, 'k<<oo>>k', 1], ['stoppen', 2, 'st%%o%%p', 0]];
    for (const mode of ['q', 'a']) {
      const s = d.page({ g: 8, tag: 'MINI-DÉFI' }, mode === 'a');
      const cw = 1.385;
      md.forEach(([w, n, , L], i) => {
        const x = 0.6 + i * (cw + 0.15); const c = mode === 'a' ? (L ? 'accent3' : 'accent4') : 'tx2';
        d.rect(s, x, 1.72, cw, 0.92, { fill: 'FFFFFF', line: c, lw: mode === 'a' ? 2.5 : 1.5, shadow: true });
        d.t(s, w, x, 1.76, cw, 0.5, { size: fs1(w, cw - 0.12, 19, 14), bold: true, align: 'center', valign: 'middle', head: true });
        d.t(s, `(${n})`, x, 2.27, cw, 0.3, { size: 13, color: 'accent5', align: 'center', valign: 'middle' });
      });
      [['LONG', 'accent3', 0.6, 'FaDoorOpen', 1], ['COURT', 'accent4', 6.88, 'FaDoorClosed', 0]].forEach(([lab, c, x, ic, L]) => {
        d.rect(s, x, 2.85, 5.85, 3.6, { fill: c, tr: 90, line: c, lw: 2 });
        d.t(s, lab, x, 2.92, 5.85, 0.55, { size: 26, bold: true, color: c, align: 'center', valign: 'middle', head: true });
        if (mode === 'q') d.icon(s, ic, c, x + 2.45, 4.0, 0.95);
        else {
          md.filter((m) => m[3] === L).forEach(([w, n, st], k) => {
            const ix = x + (L ? 0.35 : 0.35) + (k % 2) * 2.65; const iy = 3.6 + Math.floor(k / 2) * 1.35;
            d.rect(s, ix, iy, 2.45, 1.15, { fill: 'FFFFFF', line: c, lw: 1.5 });
            d.t(s, `${w} (${n})  →`, ix, iy + 0.06, 2.45, 0.36, { size: 15, italic: true, color: 'accent5', align: 'center' });
            d.t(s, st, ix, iy + 0.42, 2.45, 0.66, { size: 30, align: 'center', valign: 'middle', head: true });
          });
        }
      });
      d.iconDisc(s, 'FaQuestion', 6.19, 4.38, 0.95, 'tx1', 'accent1');
      d.t(s, '(1) = une consonne après la voyelle → probablement long  ·  (2) = deux consonnes → court', 0.6, 6.53, 12.13, 0.32, { size: 14, italic: true, color: 'accent5', align: 'center' });
    }
  }

  // ---------------------------------------------------------------- 9 formule — singulier (S1 machine)
  d.section('Comprendre — formule et questions');
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE' });
    d.rect(s, 0.6, 1.8, 2.05, 3.05, { fill: 'tx2', line: null, radius: 0.12, shadow: true });
    d.t(s, 'radical', 0.6, 1.92, 2.05, 0.4, { size: 15, italic: true, color: 'bg2', align: 'center' });
    d.t(s, 'WERK', 0.6, 2.8, 2.05, 1.0, { size: 36, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    const R = [
      [2.15, false, '^^ik^^', 'werk', 'je'],
      [3.32, true, '^^jij / je · u^^', 'werk##t##', 'tu · vous (poli)'],
      [4.49, true, '^^hij · zij / ze · het^^', 'werk##t##', 'il · elle'],
    ];
    R.forEach(([cy, plus, pr, v, fr]) => {
      d.line(s, 2.65, cy, 6.55, cy, { color: 'accent5', lw: 3.5 });
      d.rect(s, 3.7, cy - 0.36, 1.3, 0.72, { fill: plus ? 'FDF1E6' : 'FFFFFF', line: plus ? 'accent1' : 'accent5', lw: 2.25 });
      d.t(s, plus ? '+ ##t##' : '∅', 3.7, cy - 0.36, 1.3, 0.72, { size: 26, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, 6.6, cy - 0.4, 4.4, 0.72, { fill: 'bg2', line: 'tx2', lw: 1.5, radius: 0.06 });
      d.oval(s, 6.95, cy + 0.26, 0.22, 0.22, { fill: 'tx2' });
      d.oval(s, 10.45, cy + 0.26, 0.22, 0.22, { fill: 'tx2' });
      d.t(s, pr, 6.78, cy - 0.4, 2.85, 0.72, { size: 17, valign: 'middle' });
      d.t(s, v, 9.5, cy - 0.4, 1.38, 0.72, { size: 26, bold: true, color: 'accent6', align: 'right', valign: 'middle', head: true });
      d.t(s, fr, 11.15, cy - 0.4, 1.58, 0.72, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.t(s, 'rien', 3.7, 2.53, 1.3, 0.28, { size: 12, italic: true, color: 'accent5', align: 'center' });
    d.rect(s, 0.6, 5.15, 6.0, 1.7, { fill: 'bg2', line: BORDER });
    d.t(s, ['**ik** → radical : //ik werk//', '**jij / je · u · hij · zij / ze · het** → radical **+ ##t##** :', '//jij werk##t## · u werk##t## · hij werk##t## · ze werk##t##//'], 0.8, 5.2, 5.65, 1.6, { size: 16, gap: 5, valign: 'middle' });
    d.rect(s, 6.9, 5.15, 5.83, 1.7, { fill: 'accent1', tr: 90, line: 'accent1', lw: 1 });
    d.icon(s, 'FaCog', 'accent1', 7.08, 5.32, 0.4);
    d.t(s, ['Avec un ajustement :', '//ik spreek → hij spreek##t##  ·  ik bel → hij bel##t##//', 'le **t** s’ajoute **après** l’ajustement'], 7.65, 5.2, 4.95, 1.6, { size: 16, gap: 5, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 10 pluriel + tableau complet
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE' });
    d.rect(s, 0.6, 1.8, 2.45, 1.95, { fill: 'tx2', line: null, shadow: true });
    d.t(s, 'WERKEN', 0.6, 1.95, 2.45, 1.0, { size: 30, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.t(s, '(infinitif)', 0.6, 2.95, 2.45, 0.45, { size: 15, italic: true, color: 'bg2', align: 'center' });
    d.line(s, 3.33, 1.72, 3.33, 3.85, { color: 'accent5', lw: 1.75, dash: 'dash', arrow: false });
    d.icon(s, 'FaArrowsAltH', 'accent1', 3.13, 2.57, 0.4);
    d.rect(s, 3.6, 1.8, 2.6, 1.95, { fill: GREY_BAND, line: 'tx2', lw: 1.5, shadow: true });
    d.t(s, ['^^we^^ werk##en##', '^^jullie^^ werk##en##', '^^ze^^ werk##en##'], 3.78, 1.85, 2.35, 1.85, { size: 21, valign: 'middle', gap: 4 });
    d.t(s, '**wij / we · jullie · zij / ze** → **infinitif**', 0.6, 3.92, 5.6, 0.42, { size: 16, align: 'center' });
    d.rect(s, 0.6, 4.55, 5.6, 1.4, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 4.68, 'accent6', 0.32, 12);
    d.t(s, '**jullie** = « vous » pluriel, mais verbe à l’infinitif : //jullie werk##en##//', 0.8, 5.07, 5.25, 0.82, { size: 17, valign: 'middle' });
    // S1 card
    const X = 6.5; const W = 4.25;
    d.rect(s, X, 1.75, W, 4.2, { fill: 'FFFFFF', line: 'tx2', lw: 1.5, shadow: true });
    d.t(s, 'werken', X + 0.25, 1.82, 2.6, 0.55, { size: 28, bold: true, color: 'tx2', head: true, valign: 'middle' });
    d.t(s, 'travailler', X + 0.25, 2.37, 2.6, 0.32, { size: 14, italic: true, color: 'accent5' });
    const B = [
      ['ik', 'je', 'werk', 'FFFFFF', '= radical', 'tx2'],
      ['jij/je · u · hij · zij/ze · het', 'tu · vous · il · elle', 'werk##t##', 'bg2', '= radical + t', 'accent1'],
      ['wij/we · jullie · zij/ze', 'nous · vous · ils / elles', 'werk##en##', GREY_BAND, '= infinitif', 'accent5'],
    ];
    B.forEach(([nl, fr, v, fill, rule, rc], i) => {
      const y = 2.8 + i * 1.03; const h = 0.98;
      d.rect(s, X + 0.12, y, W - 0.24, h, { fill, line: BORDER, lw: 0.75, radius: 0.04 });
      d.t(s, '^^' + nl + '^^', X + 0.25, y + 0.05, 2.35, 0.6, { size: 14, valign: 'middle' });
      d.t(s, fr, X + 0.25, y + 0.64, 2.35, 0.3, { size: 12, italic: true, color: 'accent5' });
      d.t(s, v, X + 2.55, y, 1.55, h, { size: 24, bold: true, align: 'right', valign: 'middle', head: true });
      s.addShape(S.RIGHT_BRACE, { x: X + W + 0.08, y: y + 0.08, w: 0.2, h: h - 0.16, line: { color: HEXC[rc], width: 2 }, fill: { color: 'FFFFFF', transparency: 100 } });
      d.t(s, rule, X + W + 0.36, y, 12.73 - (X + W + 0.36), h, { size: 15, bold: true, color: rc, valign: 'middle' });
    });
    d.rect(s, 0.6, 6.15, 12.13, 0.7, { fill: 'tx2', line: null });
    d.t(s, '**La formule** :  radical  ·  radical + ##t##  ·  infinitif', 0.6, 6.15, 12.13, 0.7, { size: 21, color: 'bg1', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 11 piège ze
  {
    const s = d.page({ g: 11, tag: 'PIÈGE FR ≠ NL' });
    d.rect(s, 0.6, 1.7, 12.13, 4.25, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    d.line(s, 3.08, 3.4, 4.45, 2.6, { color: 'accent5', lw: 2.5 });
    d.line(s, 3.08, 4.2, 4.45, 5.0, { color: 'accent5', lw: 2.5 });
    d.rect(s, 1.0, 3.05, 2.0, 1.5, { fill: 'FFFFFF', line: 'accent2', lw: 3, radius: 0.15, shadow: true });
    d.t(s, 'ze', 1.0, 3.05, 2.0, 1.5, { size: 54, bold: true, color: 'accent2', align: 'center', valign: 'middle', head: true });
    const sent = (y, end, fr, icon) => {
      const pt = 32; const x0 = 4.6;
      const w1 = tw('Ze werk', pt); const we = tw(end, pt);
      d.rect(s, x0 + w1 - 0.04, y + 0.06, we + 0.1, 0.58, { fill: 'accent1', tr: 78, line: 'accent1', lw: 2, radius: 0.12 });
      d.t(s, 'Ze werk', x0 - 0.3, y, w1 + 0.3, 0.7, { size: pt, bold: true, align: 'right', valign: 'middle' });
      d.t(s, end, x0 + w1, y, we + 0.3, 0.7, { size: pt, bold: true, color: 'accent1', valign: 'middle' });
      d.t(s, 'in Gent.', x0 + w1 + we + 0.22, y, 2.8, 0.7, { size: pt, bold: true, valign: 'middle' });
      d.icon(s, 'FaSearch', 'accent1', x0 + w1 + we - 0.02, y - 0.36, 0.34);
      d.t(s, fr, x0, y + 0.74, 6.2, 0.42, { size: 18, italic: true, color: 'accent5' });
      d.icon(s, icon, 'accent2', 11.2, y - 0.05, 0.95);
    };
    sent(2.2, 't', '→ **Elle** travaille à Gand.', 'FaFemale');
    sent(4.6, 'en', '→ **Ils / Elles** travaillent à Gand.', 'FaUsers');
    d.rect(s, 0.6, 6.15, 12.13, 0.7, { fill: 'tx2', line: null });
    d.icon(s, 'FaSearch', 'FFFFFF', 0.85, 6.32, 0.36);
    d.t(s, 'C’est la **terminaison** qui dit qui travaille : -##t## = une personne · -##en## = plusieurs.', 1.4, 6.15, 11.2, 0.7, { size: 19, color: 'bg1', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 12 question oui / non
  {
    const s = d.page({ g: 12, tag: 'GRAMMAIRE' });
    d.rect(s, 0.6, 1.7, 12.13, 2.75, { fill: 'bg2', line: BORDER });
    const y1 = 1.92; const y2 = 3.48; const h = 0.75;
    d.line(s, 2.15, y1 + h + 0.05, 4.6, y2 - 0.06, { color: 'accent2', lw: 2.5 });
    d.line(s, 4.6, y1 + h + 0.05, 2.15, y2 - 0.06, { color: 'accent6', lw: 2.5 });
    // line 1
    d.rect(s, 1.0, y1, 2.3, h, { fill: 'accent2', tr: 86, line: 'accent2', lw: 1.25 });
    d.t(s, 'Jij', 1.0, y1, 2.3, h, { size: 28, bold: true, color: 'accent2', align: 'center', valign: 'middle' });
    d.oval(s, 3.6, y1, 2.0, h, { fill: null, line: 'accent6', lw: 2.5 });
    d.t(s, 'werkt', 3.6, y1, 2.0, h, { size: 28, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
    d.t(s, 'in Brussel.', 5.95, y1, 3.2, h, { size: 28, valign: 'middle' });
    // line 2
    d.oval(s, 1.0, y2, 2.3, h, { fill: null, line: 'accent6', lw: 2.5 });
    fallT(s, 'Werk', 2.15, y2, h, 28);
    d.rect(s, 3.6, y2, 2.0, h, { fill: 'accent2', tr: 86, line: 'accent2', lw: 1.25 });
    d.t(s, 'jij', 3.6, y2, 2.0, h, { size: 28, bold: true, color: 'accent2', align: 'center', valign: 'middle' });
    d.t(s, 'in Brussel?', 5.95, y2, 3.2, h, { size: 28, valign: 'middle' });
    d.t(s, '//phrase affirmative//', 9.4, y1, 3.1, h, { size: 16, color: 'accent5', valign: 'middle' });
    d.rect(s, 9.4, y2 - 0.04, 3.13, h + 0.08, { fill: 'accent1', tr: 82, line: 'accent1', lw: 1.25 });
    d.t(s, 'le **t** tombe devant //je / jij//', 9.55, y2 - 0.04, 2.9, h + 0.08, { size: 16, valign: 'middle', align: 'center' });
    // two columns
    const T = [
      [0.6, 6.4, 'le t tombe — //je / jij// après le verbe', 'accent1', ['//Jij werkt in Brussel.//  →  !!Werk!! ^^jij^^ in Brussel?', '//Je neemt de trein.//  →  !!Neem!! ^^je^^ de trein?', '//Je pakt een koffie.//  →  !!Pak!! ^^je^^ een koffie?']],
      [7.2, 5.53, 'Mais le t reste — //u · hij · ze//', 'accent3', ['!!Werk##t##!! ^^u^^ in Brussel?', '!!Werk##t##!! ^^hij^^ in Brussel?', '!!Werk##t##!! ^^ze^^ in Brussel?']],
    ];
    T.forEach(([x, w, head, c, items]) => {
      d.rect(s, x, 4.65, w, 0.5, { fill: c, line: null, radius: 0.06 });
      d.t(s, head, x + 0.2, 4.65, w - 0.4, 0.5, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
      items.forEach((it, k) => {
        const y = 5.22 + k * 0.55;
        d.rect(s, x, y, w, 0.5, { fill: k % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.04 });
        d.t(s, it, x + 0.2, y, w - 0.3, 0.5, { size: 16, valign: 'middle' });
      });
    });
  }

  // ---------------------------------------------------------------- 13 questions avec mot interrogatif
  {
    const s = d.page({ g: 13, tag: 'GRAMMAIRE' });
    const boxes = [['Mot interrogatif', 'accent1', 2.6, 'Hoeveel uur'], ['verbe', 'accent6', 1.9, 'werk'], ['sujet', 'accent2', 1.9, 'je'], ['reste', 'accent5', 2.4, 'per week?']];
    let x = 1.59;
    boxes.forEach(([lab, c, w, ex], i) => {
      if (i) d.line(s, x - 0.4, 2.01, x - 0.06, 2.01, { color: 'accent5', lw: 2 });
      if (i === 1) d.oval(s, x, 1.7, w, 0.62, { fill: 'FFFFFF', line: 'accent6', lw: 3 });
      else d.rect(s, x, 1.7, w, 0.62, { fill: c, line: null });
      d.t(s, lab, x, 1.7, w, 0.62, { size: 17, bold: true, color: i === 1 ? 'accent6' : 'bg1', align: 'center', valign: 'middle' });
      d.t(s, ex, x, 2.38, w, 0.5, { size: 22, bold: true, color: c === 'accent5' ? 'tx1' : c, align: 'center', valign: 'middle' });
      x += w + 0.45;
    });
    const qw = [['Wie?', 'qui'], ['Wat?', 'quoi'], ['Waar?', 'où'], ['Wanneer?', 'quand'], ['Hoe?', 'comment'], ['Hoe laat?', 'à quelle heure'], ['Hoeveel?', 'combien'], ['Welke?', 'quel(le)'], ['Waarom?', 'pourquoi']];
    const cw = 2.5; const ch = 1.1;
    qw.forEach(([nl, fr], i) => {
      const cx = 0.6 + (i % 3) * (cw + 0.2); const cy = 3.12 + Math.floor(i / 3) * (ch + 0.17);
      d.rect(s, cx, cy, cw, ch, { fill: 'FFFFFF', line: BORDER, shadow: true });
      d.rect(s, cx, cy, 0.12, ch, { fill: 'accent1', line: null, radius: 0 });
      d.t(s, nl, cx + 0.3, cy + 0.1, cw - 0.4, 0.55, { size: 24, bold: true, color: 'accent1', head: true, valign: 'middle' });
      d.t(s, fr, cx + 0.3, cy + 0.65, cw - 0.4, 0.35, { size: 15, italic: true, color: 'accent5' });
    });
    d.rect(s, 8.85, 3.12, 3.88, 1.8, { fill: 'bg2', line: BORDER });
    d.t(s, 'EXEMPLES', 9.05, 3.2, 3, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, ['##Waar## !!werk!! ^^je^^?', '##Wanneer## !!begint!! ^^de les^^?', '##Waarom## !!leer!! ^^je^^ Nederlands?'], 9.05, 3.52, 3.6, 1.32, { size: 15, gap: 6, valign: 'middle' });
    d.trap(s, 8.85, 5.07, 3.88, 1.78, 'Tu habites {{où}} ?', '**##Waar##** woon je?', { size: 20 });
    d.t(s, '→ toujours en tête', 10.7, 5.13, 1.95, 0.32, { size: 13, italic: true, bold: true, color: 'accent6', align: 'right' });
  }

  // ---------------------------------------------------------------- 14 zinnenbouwer (S2)
  d.section('Comprendre — la phrase');
  const G6 = [['WIE?', 'qui'], ['WERKWOORD 1', 'verbe conjugué'], ['WANNEER? HOE? WAAR?', 'quand, comment, où'], ['WAT?', 'quoi'], ['AAN / VOOR WIE?', 'à qui, pour qui'], ['WERKWOORD 2', '2e partie du verbe']];
  {
    const s = d.page({ g: 14, tag: 'GRAMMAIRE' });
    const C = colsAt(0.6, [1.35, 1.95, 2.4, 1.85, 1.8, 1.9], 0.176);
    C.forEach((c, i) => { if (i < 5) d.line(s, c.x + c.w + 0.01, 3.12, C[i + 1].x - 0.01, 3.12, { color: 'accent5', lw: 1.5 }); });
    C.forEach((c, i) => {
      const red = i === 1 || i === 5;
      badge(s, i, c.c - 0.23, 1.72, 0.46);
      d.rect(s, c.x, 2.35, c.w, 1.55, { fill: red ? RED_PALE : 'bg2', line: red ? 'accent6' : 'accent5', lw: red ? 4 : 1.25 });
      d.t(s, G6[i][0], c.x + 0.06, 2.42, c.w - 0.12, 0.85, { size: 16, bold: true, color: red ? 'accent6' : 'tx2', align: 'center', valign: 'middle' });
      d.t(s, G6[i][1], c.x + 0.06, 3.28, c.w - 0.12, 0.52, { size: 14, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 4.12, 12.13, 0.85, { fill: 'FFFFFF', line: BORDER, shadow: true });
    ['^^Ik^^', '!!eet!!', '°°–°°', 'een koekje.', '°°–°°', '°°–°°'].forEach((t, i) => {
      if (i === 1) d.oval(s, C[1].c - 0.6, 4.2, 1.2, 0.69, { fill: null, line: 'accent6', lw: 2.5 });
      d.t(s, t, C[i].x, 4.12, C[i].w, 0.85, { size: 24, align: 'center', valign: 'middle', bold: i === 3 ? undefined : true });
    });
    d.rect(s, 0.6, 5.25, 5.4, 1.6, { fill: 'bg2', line: BORDER });
    d.icon(s, 'FaInfoCircle', 'accent2', 0.82, 5.45, 0.42);
    d.t(s, ['Les cases vides **restent vides** :', 'une phrase n’a pas besoin de remplir les 6 cases.'], 1.4, 5.3, 4.45, 1.5, { size: 17, valign: 'middle', gap: 4 });
    d.rect(s, 6.25, 5.25, 6.48, 1.6, { fill: 'FFFFFF', line: 'tx2', lw: 2 });
    d.t(s, '③ = **Te-Ma-Pl**', 6.45, 5.3, 4.2, 0.45, { size: 20, color: 'tx2', valign: 'middle' });
    [['Temps', 'Tijd'], ['Manière', 'Manier'], ['Lieu', 'Plaats']].forEach(([fr, nl], k) => {
      const cx = 6.45 + k * 1.62;
      if (k) d.line(s, cx - 0.3, 6.25, cx - 0.04, 6.25, { color: 'tx2', lw: 2 });
      d.rect(s, cx, 5.85, 1.3, 0.82, { fill: 'tx2', line: null });
      d.t(s, fr, cx, 5.88, 1.3, 0.45, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, nl, cx, 6.3, 1.3, 0.32, { size: 13, italic: true, color: 'bg2', align: 'center', valign: 'middle' });
    });
    d.icon(s, 'GiGreekTemple', 'accent1', 11.45, 5.4, 0.8);
    d.t(s, '« TeMPeL »', 11.0, 6.27, 1.65, 0.35, { size: 14, bold: true, color: 'accent1', align: 'center' });
  }

  // ---------------------------------------------------------------- 15 construire avec la grille
  {
    const s = d.page({ g: 15, tag: 'GRAMMAIRE' });
    const C = colsAt(0.6, [1.05, 1.4, 3.55, 1.5, 2.2, 1.45], 0.196);
    const R = [
      ['Ik', 'eet', '', 'een koekje.', '', ''],
      ['Jij', 'gaat', 'morgen', '', '', 'weg.'],
      ['Hij', 'werkt', '38 uur per week.', '', '', ''],
      ['Ik', 'ga', 'morgen met de trein naar Gent.', '', '', ''],
      ['We', 'bellen', 'vandaag', 'een klant', '', 'op.'],
      ['Jullie', 'moeten', 'in januari', '', 'voor het examen', 'slagen.'],
      ['Ze', 'nemen', 'vandaag', '', 'aan een opleiding', 'deel.'],
    ];
    const top = 2.72; const ph = (6.85 - top) / R.length; const rh = ph - 0.07;
    R.forEach((r, k) => { if (k % 2 === 0) d.rect(s, 0.6, top + k * ph, 12.13, rh, { fill: 'bg2', line: null, radius: 0.04 }); });
    [1, 5].forEach((i) => d.rect(s, C[i].x, 2.03, C[i].w, 6.85 - 2.03 + 0.02, { fill: 'accent6', tr: 90, line: 'accent6', lw: 2.5, radius: 0.06 }));
    C.forEach((c, i) => {
      const red = i === 1 || i === 5;
      badge(s, i, c.c - 0.16, 1.67, 0.32);
      d.rect(s, c.x, 2.03, c.w, 0.6, { fill: red ? 'accent6' : 'tx2', line: null, radius: 0.06 });
      d.t(s, G6[i][0], c.x + 0.05, 2.03, c.w - 0.1, 0.6, { size: fs1(G6[i][0].split(' ')[0], c.w - 0.12, 12, 9), bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    R.forEach((r, k) => {
      const y = top + k * ph;
      r.forEach((t, i) => {
        if (!t) return;
        const c = C[i];
        if (i === 1) {
          const ow = Math.min(c.w - 0.08, tw(t, 16) * 1.08 + 0.34);
          d.oval(s, c.c - ow / 2, y + 0.02, ow, rh - 0.04, { fill: 'FFFFFF', line: 'accent6', lw: 2 });
        }
        if (i === 5) {
          const ow = Math.min(c.w - 0.1, tw(t, 16) + 0.26);
          d.rect(s, c.c - ow / 2, y + 0.04, ow, rh - 0.08, { fill: 'FFFFFF', line: 'accent6', lw: 1.5, dash: 'dash' });
        }
        const red = i === 1 || i === 5;
        d.t(s, t, c.x, y, c.w, rh, { size: red ? 16 : fs1(t, c.w - 0.1, 16, 12, i === 0), bold: red || i === 0, color: red ? 'accent6' : i === 0 ? 'accent2' : 'tx1', align: 'center', valign: 'middle' });
      });
    });
  }

  // ---------------------------------------------------------------- 16 piège — V2 (S3 tourniquet)
  {
    const s = d.page({ g: 16, tag: 'PIÈGE FR ≠ NL' });
    // FR band
    d.rect(s, 0.6, 1.7, 12.13, 0.95, { fill: 'bg2', line: BORDER });
    d.chip(s, 'FR', 0.8, 2.0, 'accent5', 0.34, 13);
    const fr = segs(s, [['Demain,', 'r'], ['je', 'r'], ['pars.', 'v']], 1.7, 1.82, 0.72, { size: 26, boldRest: true, gap: 0.25 });
    fr.pos.forEach((p, k) => d.t(s, String(k + 1), p.x + p.w - 0.18, 1.72, 0.25, 0.25, { size: 11, bold: true, color: k === 2 ? 'accent6' : 'accent5' }));
    d.chip(s, '3e !', fr.end + 0.15, 2.02, 'accent6', 0.34, 14);
    d.t(s, '//verbe en 3e position//', fr.end + 1.25, 1.7, 4.0, 0.95, { size: 17, color: 'accent5', valign: 'middle' });
    // NL grid
    const C = colsAt(1.75, [1.8, 1.45, 2.6, 1.35, 1.35, 1.35], 0.2);
    const by = 3.75; const bh = 1.1;
    d.curve(s, 0.85, by, C[0].c - 0.3, by, { dir: -1, h: 0.55, color: 'accent1', lw: 3 });
    const ikx = C[2].x + 0.15; const ikw = 0.8;
    d.curve(s, C[0].c + 0.3, by, ikx + ikw / 2, by, { dir: -1, h: 0.62, color: 'accent2', lw: 3 });
    d.t(s, '//le sujet passe après le verbe//', C[1].x - 0.5, 2.78, 3.6, 0.3, { size: 13, bold: true, color: 'accent2', align: 'center' });
    d.chip(s, 'NL', 0.8, 4.4, 'accent5', 0.34, 13);
    C.forEach((c, i) => {
      if (i < 5) d.line(s, c.x + c.w + 0.01, by + bh / 2, C[i + 1].x - 0.01, by + bh / 2, { color: 'accent5', lw: 1.25 });
    });
    C.forEach((c, i) => {
      const red = i === 1 || i === 5;
      d.rect(s, c.x, by, c.w, bh, { fill: i === 0 ? 'FDF1E6' : 'FFFFFF', line: red ? 'accent6' : 'accent5', lw: red ? 3.5 : 1.25 });
      badge(s, i, c.x + 0.08, by + 0.08, 0.28);
    });
    d.icon(s, 'FaSyncAlt', 'accent1', C[0].x + C[0].w - 0.38, by + 0.08, 0.28);
    d.icon(s, 'FaLock', 'accent6', C[1].x + C[1].w - 0.36, by + 0.07, 0.28);
    d.rect(s, C[0].x + 0.15, by + 0.38, C[0].w - 0.3, 0.6, { fill: 'accent1', tr: 76, line: 'accent1', lw: 1.25 });
    d.t(s, 'Morgen', C[0].x + 0.15, by + 0.38, C[0].w - 0.3, 0.6, { size: 22, bold: true, align: 'center', valign: 'middle' });
    d.oval(s, C[1].c - 0.5, by + 0.36, 1.0, 0.64, { fill: null, line: 'accent6', lw: 2.25 });
    d.t(s, 'ga', C[1].c - 0.5, by + 0.36, 1.0, 0.64, { size: 26, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
    d.rect(s, ikx, by + 0.38, ikw, 0.6, { fill: 'accent2', tr: 86, line: 'accent2', lw: 1.25 });
    d.t(s, 'ik', ikx, by + 0.38, ikw, 0.6, { size: 22, bold: true, color: 'accent2', align: 'center', valign: 'middle' });
    [3, 4].forEach((i) => d.t(s, '°°–°°', C[i].x, by + 0.3, C[i].w, 0.7, { size: 22, align: 'center', valign: 'middle' }));
    d.rect(s, C[5].c - 0.5, by + 0.38, 1.0, 0.6, { fill: null, line: 'accent6', lw: 1.75, dash: 'dash' });
    d.t(s, 'weg.', C[5].c - 0.5, by + 0.38, 1.0, 0.6, { size: 22, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
    d.t(s, 'NL : //**Morgen ga ik** weg.// — verbe **toujours** en 2e position', 1.75, 5.0, 7.6, 0.5, { size: 18, valign: 'middle' });
    d.icon(s, 'FaTimes', 'accent6', 9.55, 5.1, 0.3);
    d.t(s, '{{Morgen ik ga weg.}}', 9.95, 5.0, 2.75, 0.5, { size: 18, valign: 'middle' });
    d.rect(s, 0.6, 5.8, 12.13, 1.05, { fill: 'accent6', line: null });
    d.icon(s, 'FaSyncAlt', 'FFFFFF', 0.88, 6.1, 0.45);
    d.t(s, 'Si la case ① n’est pas le sujet, le sujet passe juste après le verbe.', 1.55, 5.8, 11.0, 1.05, { size: 22, bold: true, color: 'bg1', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 17 tourniquet en action
  {
    const s = d.page({ g: 17, tag: 'GRAMMAIRE' });
    d.t(s, 'Phrase neutre : le sujet en ①', 0.6, 1.64, 4.0, 0.3, { size: 14, italic: true, color: 'accent5' });
    d.t(s, 'Un autre élément en ① → le sujet passe après le verbe', 5.6, 1.64, 7.1, 0.3, { size: 14, italic: true, color: 'accent5' });
    const R = [
      ['^^Ik^^ !!slaap!! op zondag lang.', [['Op zondag', 'f'], ['slaap', 'v'], ['ik', 's'], ['lang.', 'r']]],
      ['^^Ik^^ !!werk!! dit weekend niet.', [['Dit weekend', 'f'], ['werk', 'v'], ['ik', 's'], ['niet.', 'r']]],
      ['^^Ik^^ !!lees!! in mijn vrije tijd.', [['In mijn vrije tijd', 'f'], ['lees', 'v'], ['ik.', 's']]],
      ['^^We^^ !!hebben!! om 10 uur een vergadering.', [['Om 10 uur', 'f'], ['hebben', 'v'], ['we', 's'], ['een vergadering.', 'r']]],
    ];
    R.forEach(([neutral, parts], i) => {
      const y = 2.08 + i * 1.2; const h = 1.0;
      d.rect(s, 0.6, y, 4.0, h, { fill: 'bg2', line: BORDER });
      d.t(s, neutral, 0.8, y, 3.65, h, { size: 17, valign: 'middle' });
      d.iconDisc(s, 'FaRedo', 4.78, y + 0.2, 0.6, 'accent1');
      d.rect(s, 5.55, y, 7.18, h, { fill: 'FFFFFF', line: BORDER, shadow: true });
      const r = segs(s, parts, 5.75, y + 0.24, 0.6, { size: 20, maxW: 6.85, gap: 0.12 });
      r.pos.slice(0, 3).forEach((p, k) => badge(s, k, p.c - 0.14, y + 0.03, 0.22));
    });
  }

  // ---------------------------------------------------------------- 18 la pince (S4)
  {
    const s = d.page({ g: 18, tag: 'GRAMMAIRE' });
    const R = [
      ['Verbe à particule', '(opbellen)', ['Ik', 'bel', 'morgen de klant', 'op.'], 'J’__appelle__ le client demain.'],
      ['Verbe + infinitif', '', ['Ik', 'moet', 'morgen', 'werken.'], 'Je __dois travailler__ demain.'],
      ['Futur proche', '', ['Ik', 'ga', 'vanavond een film', 'kijken.'], 'Je __vais regarder__ un film ce soir.'],
    ];
    const col = { s: [2.95, 0.75], v: [3.85, 1.45], m: [5.45, 4.15], v2: [9.75, 1.6] };
    R.forEach(([lab, sub, [su, v, mid, v2], fr], i) => {
      const y0 = 1.72 + i * 1.72; const ny = y0 + 0.44; const nh = 0.6;
      d.rect(s, 0.6, y0 + 0.2, 2.15, 1.25, { fill: 'tx2', line: null });
      d.t(s, [`**${lab}**`, sub ? `//${sub}//` : ''].filter(Boolean), 0.72, y0 + 0.2, 1.95, 1.25, { size: 16, color: 'bg1', valign: 'middle', gap: 2, align: 'center' });
      // grey heart of the sentence
      d.rect(s, col.m[0] - 0.08, ny - 0.02, col.m[1] + 0.16, nh + 0.04, { fill: 'E3E8EF', line: null, radius: 0.06 });
      // pince
      const vx = col.v[0] + col.v[1] / 2; const v2x = col.v2[0] + col.v2[1] / 2; const py = y0 + 0.16;
      if (i === 0) {
        const lw = tw('le cœur de la phrase', 13, false) + 0.2; const mx = (vx + v2x) / 2;
        d.line(s, vx, py, mx - lw / 2, py, { color: 'accent6', lw: 4.5, arrow: false });
        d.line(s, mx + lw / 2, py, v2x, py, { color: 'accent6', lw: 4.5, arrow: false });
        d.t(s, '//le cœur de la phrase//', mx - lw / 2, py - 0.16, lw, 0.32, { size: 13, color: 'accent5', align: 'center', valign: 'middle' });
      } else d.line(s, vx, py, v2x, py, { color: 'accent6', lw: 4.5, arrow: false });
      d.line(s, vx, py - 0.02, vx, ny - 0.02, { color: 'accent6', lw: 4.5, arrow: false });
      d.line(s, v2x, py - 0.02, v2x, ny - 0.02, { color: 'accent6', lw: 4.5, arrow: false });
      d.t(s, su, col.s[0], ny, col.s[1], nh, { size: 24, bold: true, color: 'accent2', align: 'center', valign: 'middle' });
      d.oval(s, col.v[0], ny, col.v[1], nh, { fill: 'FFFFFF', line: 'accent6', lw: 2.25 });
      d.t(s, v, col.v[0], ny, col.v[1], nh, { size: 24, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
      d.t(s, mid, col.m[0], ny, col.m[1], nh, { size: 22, align: 'center', valign: 'middle' });
      d.rect(s, col.v2[0], ny, col.v2[1], nh, { fill: 'FFFFFF', line: 'accent6', lw: 1.75, dash: 'dash' });
      d.t(s, v2, col.v2[0], ny, col.v2[1], nh, { size: 24, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
      d.t(s, fr, col.s[0], y0 + 1.1, 5.9, 0.36, { size: 16, italic: true, color: 'accent5', valign: 'middle' });
      d.chip(s, 'FR : collés · NL : séparés', 9.25, y0 + 1.13, 'accent5', 0.3, 11);
    });
  }

  // ---------------------------------------------------------------- 19 carte du module
  d.section('Retenir');
  {
    const s = d.page({ g: 19, tag: 'À RETENIR' });
    const BW = 3.75; const gap = 0.44;
    const blocks = [['1', 'Je conjugue', 'accent1'], ['2', 'Je questionne', 'accent2'], ['3', 'Je place', 'accent6']];
    const texts = [
      ['**radical** (− en, doubler / simplifier)', '**+ t**', '**infinitif** au pluriel'],
      ['**verbe en tête** (oui/non)', 'ou **mot interrogatif + verbe**', '//je / jij// après le verbe = **pas de t**'],
      ['verbe conjugué **toujours en 2e**', 'sujet **après le verbe** si ① est pris', '2e verbe **à la fin**'],
    ];
    blocks.forEach(([n, h, c], i) => {
      const x = 0.6 + i * (BW + gap);
      d.rect(s, x, 1.72, BW, 5.13, { fill: 'FFFFFF', line: c, lw: 1.5, shadow: true });
      d.rect(s, x, 1.72, BW, 0.62, { fill: c, line: null, radius: 0.08 });
      d.rect(s, x, 2.1, BW, 0.24, { fill: c, line: null, radius: 0 });
      d.oval(s, x + 0.15, 1.8, 0.46, 0.46, { fill: 'FFFFFF' });
      d.t(s, n, x + 0.15, 1.8, 0.46, 0.46, { size: 16, bold: true, color: c, align: 'center', valign: 'middle' });
      d.t(s, h, x + 0.75, 1.72, BW - 0.9, 0.62, { size: 20, bold: true, color: 'bg1', valign: 'middle', head: true });
      if (i < 2) d.icon(s, 'FaArrowRight', 'accent5', x + BW + 0.06, 3.3, 0.32);
      d.line(s, x + 0.2, 4.45, x + BW - 0.2, 4.45, { color: BORDER, lw: 1, arrow: false });
      d.t(s, texts[i], x + 0.2, 4.55, BW - 0.4, 2.2, { size: 16, bullet: true, gap: 8, valign: 'top' });
    });
    // block 1: mini chain + bands
    {
      const x = 0.6;
      let cx = x + 0.25;
      [['− en', 'accent1', 0.8], ['ajuster', 'accent3', 1.15], ['+ t', 'accent1', 0.7]].forEach(([t, c, w], k) => {
        if (k) d.line(s, cx - 0.28, 2.77, cx - 0.04, 2.77, { color: 'accent5', lw: 1.5 });
        d.rect(s, cx, 2.55, w, 0.45, { fill: c, tr: 85, line: c, lw: 1.25 });
        d.t(s, t, cx, 2.55, w, 0.45, { size: 15, bold: true, color: c, align: 'center', valign: 'middle' });
        cx += w + 0.3;
      });
      [['^^ik^^ werk', 'FFFFFF'], ['^^hij^^ werk##t##', 'bg2'], ['^^wij^^ werk##en##', GREY_BAND]].forEach(([t, f], k) => {
        const y = 3.2 + k * 0.38;
        d.rect(s, x + 0.25, y, BW - 0.5, 0.36, { fill: f, line: BORDER, lw: 0.75, radius: 0.03 });
        d.t(s, t, x + 0.45, y, BW - 0.9, 0.36, { size: 15, valign: 'middle' });
      });
    }
    // block 2: inversion + question word
    {
      const x = 0.6 + BW + gap;
      const ww = tw('Werk', 26); const wt = tw('t', 26); const wj = tw('jij?', 26);
      const x0 = x + (BW - (ww + wt + 0.15 + wj)) / 2;
      d.t(s, 'Werk', x0 - 0.5, 2.6, ww + 0.5, 0.65, { size: 26, bold: true, color: 'accent6', align: 'right', valign: 'middle' });
      d.t(s, 't', x0 + ww, 2.6, wt + 0.2, 0.65, { size: 26, bold: true, color: 'accent1', valign: 'middle', base: { strike: 'sngStrike' } });
      d.t(s, 'jij?', x0 + ww + wt + 0.15, 2.6, wj + 0.4, 0.65, { size: 26, bold: true, color: 'accent2', valign: 'middle' });
      d.t(s, '##Waar## !!werk!! ^^je^^?', x, 3.45, BW, 0.65, { size: 26, align: 'center', valign: 'middle' });
    }
    // block 3: mini grid, lock, pince
    {
      const x = 0.6 + 2 * (BW + gap);
      const C = colsAt(x + 0.22, [0.5, 0.5, 0.5, 0.5, 0.5, 0.5], 0.07);
      C.forEach((c, i) => {
        const red = i === 1 || i === 5;
        d.rect(s, c.x, 3.0, c.w, 0.55, { fill: 'FFFFFF', line: red ? 'accent6' : 'accent5', lw: red ? 2.5 : 1 });
        d.t(s, String(i + 1), c.x, 3.0, c.w, 0.55, { size: 14, bold: true, color: red ? 'accent6' : 'accent5', align: 'center', valign: 'middle' });
      });
      d.icon(s, 'FaSyncAlt', 'accent1', C[0].c - 0.15, 2.58, 0.3);
      d.icon(s, 'FaLock', 'accent6', C[1].c - 0.15, 2.58, 0.3);
      d.line(s, C[1].c, 3.58, C[1].c, 3.88, { color: 'accent6', lw: 3.5, arrow: false });
      d.line(s, C[5].c, 3.58, C[5].c, 3.88, { color: 'accent6', lw: 3.5, arrow: false });
      d.line(s, C[1].c - 0.02, 3.88, C[5].c + 0.02, 3.88, { color: 'accent6', lw: 3.5, arrow: false });
      d.t(s, '//la pince//', C[2].x, 3.92, C[4].x + C[4].w - C[2].x, 0.3, { size: 12, color: 'accent6', align: 'center' });
    }
  }

  // ---------------------------------------------------------------- 20 divider
  d.divider({ g: 20, tiles: [
    ['Conjugue !', '★ → ★★★', 'FaCog'], ['Le tourniquet', '★★', 'FaSyncAlt'], ['Remets dans l’ordre', '★★', 'FaRandom'], ['Pose la question', '★★', 'FaQuestion'],
    ['Dobbelspel', '★', 'FaDice'], ['Le message de Karim', '★★★', 'FaMobileAlt'], ['Ma semaine', '★★★', 'FaCalendarAlt'],
  ] });

  // ---------------------------------------------------------------- 21 ex1 conjugue
  const ex1 = [
    ['★', 'forme simple', 'accent3', [['Jij', 'luisteren', 'naar muziek.', '<<luister>>##t##'], ['Dorien', 'roepen', 'jouw naam.', '<<roep>>##t##'], ['Hij', 'zingen', 'heel mooi.', '<<zing>>##t##'], ['We', 'begrijpen', 'de les niet.', '<<begrijp>>##en##']]],
    ['★★', 'avec ajustement', 'accent2', [['Hij', 'stoppen', 'voor een rood licht.', '<<sto__p__>>##t##'], ['Fatima', 'koken', 'lekker Libanees.', '<<k__oo__k>>##t##'], ['Ik', 'betalen', 'met de bankkaart.', '<<bet__aa__l>>'], ['De vergadering', 'beginnen', 'om 9 uur.', '<<begi__n__>>##t##']]],
    ['★★★', 'questions', 'accent1', [['', 'Slapen', 'jullie al?', '<<Slap>>##en##'], ['', 'Nemen', 'ik je mee?', '<<N__ee__m>>'], ['', 'Bellen', 'jij de klant?', '<<Be__l__>>'], ['', 'Drinken', 'u koffie of thee?', '<<Drink>>##t##']]],
  ];
  d.ex({ g: 21, title: 'Exercice 1 — Conjugue !', stars: '★ → ★★★', instr: 'Conjuguez le verbe entre parenthèses au présent.' }, (s, mode, top) => {
    const bh = (6.86 - top - 0.3) / 3;
    ex1.forEach(([st, lab, c, items], b) => {
      const y = top + b * (bh + 0.15);
      d.rect(s, 0.6, y, 12.13, bh, { fill: c, tr: 92, line: c, lw: 1.25 });
      d.rect(s, 0.6, y, 2.1, bh, { fill: c, line: null });
      d.t(s, st, 0.6, y + 0.12, 2.1, 0.5, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, lab, 0.7, y + 0.62, 1.9, bh - 0.7, { size: 16, bold: true, color: 'bg1', align: 'center' });
      const strs = items.map(([a, inf, rest, ans]) => `${a ? a + ' ' : ''}${mode === 'q' ? `**(${inf})**` : ans} ${rest}`);
      d.list(s, strs, mode, { x: 2.95, y: y + 0.14, w: 9.6, h: bh - 0.2, cols: 2, size: 18, gap: 10, numFmt: (k) => `${k + b * 4}  ` });
    });
  });

  // ---------------------------------------------------------------- 22 ex2 tourniquet
  const ex2 = [
    ['Ik werk thuis.', 'Vandaag', [['Vandaag', 'f'], ['werk', 'v'], ['ik', 's'], ['thuis.', 'r']]],
    ['We hebben een vergadering.', 'Om 10 uur', [['Om 10 uur', 'f'], ['hebben', 'v'], ['we', 's'], ['een vergadering.', 'r']]],
    ['Hij speelt voetbal.', 'Op zaterdag', [['Op zaterdag', 'f'], ['speelt', 'v'], ['hij', 's'], ['voetbal.', 'r']]],
    ['Ik neem de trein.', 'Elke dag', [['Elke dag', 'f'], ['neem', 'v'], ['ik', 's'], ['de trein.', 'r']]],
    ['Ze leert Nederlands.', 'In Namen', [['In Namen', 'f'], ['leert', 'v'], ['ze', 's'], ['Nederlands.', 'r']]],
    ['Jullie bellen de klant op.', 'Morgen', [['Morgen', 'f'], ['bellen', 'v'], ['jullie', 's'], ['de klant', 'r'], ['op.', 'v2']]],
  ];
  d.ex({ g: 22, title: 'Exercice 2 — Le tourniquet', stars: '★★', instr: 'Placez l’élément orange en tête de phrase. Attention au tourniquet !' }, (s, mode, top) => {
    const ph = (6.86 - top) / 6; const h = ph - 0.12;
    ex2.forEach(([src, front, parts], i) => {
      const y = top + i * ph;
      d.rect(s, 0.6, y, 3.65, h, { fill: 'bg2', line: BORDER });
      d.num(s, i + 1, 0.72, y + h / 2 - 0.18, 0.36, 'tx2', 13);
      d.t(s, src, 1.18, y, 3.0, h, { size: fs1(src, 2.95, 17, 13, false), valign: 'middle' });
      d.rect(s, 4.4, y + 0.04, 2.05, h - 0.08, { fill: 'accent1', line: null, radius: 0.25 });
      d.icon(s, 'FaRedo', 'FFFFFF', 4.52, y + h / 2 - 0.14, 0.28);
      d.t(s, front, 4.86, y + 0.04, 1.55, h - 0.08, { size: fs1(front, 1.5, 16, 12), bold: true, color: 'bg1', valign: 'middle', align: 'center' });
      d.line(s, 6.47, y + h / 2, 6.62, y + h / 2, { color: 'accent1', lw: 2.5 });
      if (mode === 'q') {
        d.rect(s, 6.65, y, 6.08, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, dash: 'dash' });
        d.t(s, '……………………………', 6.85, y, 5.7, h, { size: 16, color: 'accent5', valign: 'middle' });
      } else {
        d.rect(s, 6.65, y, 6.08, h, { fill: 'FFFFFF', line: 'accent3', lw: 1.5 });
        d.icon(s, 'FaRandom', 'accent5', 6.78, y + h / 2 - 0.14, 0.28);
        segs(s, parts, 7.2, y + 0.07, h - 0.14, { size: 16, maxW: 5.45, gap: 0.08, pad: 0.18 });
      }
    });
  });

  // ---------------------------------------------------------------- 23 ex3 remets dans l'ordre (E5 + S2)
  const ex3 = [
    { tags: [['morgen'], ['bel', 1], ['ik'], ['de klant'], ['op', 1]], ok: ['Ik bel morgen de klant op.', 'Ik bel de klant morgen op.', 'Morgen bel ik de klant op.'], grid: ['^^Ik^^', 'bel', 'morgen', 'de klant', '', 'op.'] },
    { tags: [['werkt', 1], ['in Gent'], ['mijn collega'], ['elke dag']], ok: ['Mijn collega werkt elke dag in Gent.', 'Elke dag werkt mijn collega in Gent.', 'In Gent werkt mijn collega elke dag.'], grid: ['^^Mijn collega^^', 'werkt', 'elke dag in Gent.', '', '', ''] },
    { tags: [['Nederlands'], ['we'], ['moeten', 1], ['leren', 1]], ok: ['We moeten Nederlands leren.'], grid: ['^^We^^', 'moeten', '', 'Nederlands', '', 'leren.'] },
    { tags: [['je'], ['waar'], ['woon', 1], ['?']], ok: ['Waar woon je?'], grid: ['##Waar##', 'woon', '^^je^^?', '', '', ''] },
    { tags: [['begint', 1], ['de les'], ['om 9 uur'], ['?']], ok: ['Begint de les om 9 uur?'], grid: ['', 'Begint', '^^de les^^ om 9 uur?', '', '', ''] },
  ];
  d.ex({ g: 23, title: 'Exercice 3 — Remets dans l’ordre', stars: '★★', instr: 'Remettez les étiquettes dans l’ordre, puis placez-les dans la grille.' }, (s, mode, top) => {
    const C = colsAt(6.3, [1.25, 0.9, 1.7, 1.12, 0.42, 0.78], 0.052);
    C.forEach((c, i) => badge(s, i, c.c - 0.15, top + 0.02, 0.3));
    const y0 = top + 0.45; const ph = (6.86 - y0) / 5; const rh = ph - 0.1;
    ex3.forEach((it, r) => {
      const y = y0 + r * ph;
      d.num(s, r + 1, 0.6, y + rh / 2 - 0.2, 0.4, 'tx2', 14);
      if (mode === 'q') {
        let pt = 16; const tot = (p) => it.tags.reduce((a, [t]) => a + tw(t, p) + 0.26, 0) + 0.1 * (it.tags.length - 1);
        while (pt > 12 && tot(pt) > 4.95) pt--;
        let x = 1.12;
        it.tags.forEach(([t, v]) => {
          const w = tw(t, pt) + 0.26;
          d.rect(s, x, y + rh / 2 - 0.25, w, 0.5, { fill: v ? RED_PALE : 'bg2', line: v ? 'accent6' : BORDER, lw: 1.25 });
          d.t(s, t, x, y + rh / 2 - 0.25, w, 0.5, { size: pt, bold: true, align: 'center', valign: 'middle', color: v ? 'accent6' : 'tx1' });
          x += w + 0.1;
        });
      } else {
        d.t(s, it.ok.map((o) => `<<${o}>>`), 1.12, y, 5.0, rh, { size: it.ok.length > 1 ? 13 : 16, valign: 'middle', gap: 0 });
      }
      C.forEach((c, i) => {
        const red = i === 1 || i === 5;
        d.rect(s, c.x, y, c.w, rh, { fill: 'FFFFFF', line: red ? 'accent6' : 'accent5', lw: red ? 2 : 1, radius: 0.05 });
        const t = it.grid[i];
        if (mode === 'a' && t) d.t(s, t, c.x + 0.03, y, c.w - 0.06, rh, { size: fs1(t, c.w - 0.08, 14, 10, red || i === 0), bold: red, color: red ? 'accent6' : 'tx1', align: 'center', valign: 'middle' });
      });
    });
  });

  // ---------------------------------------------------------------- 24 ex4 pose la question
  const ex4 = [
    ['Ik woon __in Gent__.', 'Waar woon je?'],
    ['Ik ben __34__ jaar.', 'Hoe oud ben je?'],
    ['__Ja__, ik spreek Engels.', 'Spreek je Engels?'],
    ['Ik werk __bij een bank__.', 'Waar werk je?'],
    ['De les begint __om 18 uur__.', 'Hoe laat / Wanneer begint de les?'],
    ['Ik drink __koffie__.', 'Wat drink je?'],
  ];
  d.ex({ g: 24, title: 'Exercice 4 — Pose la question', stars: '★★', instr: 'Voici la réponse : retrouvez la question. L’élément souligné vous guide.' }, (s, mode, top) => {
    const ph = (6.86 - top) / 6; const h = ph - 0.12;
    ex4.forEach(([ans, q], i) => {
      const y = top + i * ph;
      d.line(s, 6.95, y + h / 2, 5.68, y + h / 2, { color: 'tx2', lw: 2 });
      d.rect(s, 0.6, y, 5.0, h, { fill: 'accent2', tr: 88, line: 'accent2', lw: 1.25, radius: 0.18 });
      d.num(s, i + 1, 0.74, y + h / 2 - 0.19, 0.38, 'accent2', 14);
      d.icon(s, 'FaQuestion', 'accent2', 5.2, y + h / 2 - 0.13, 0.26);
      d.t(s, `[[${q}]]`, 1.3, y, 3.85, h, { size: fs1(q, 3.8, 18, 13), valign: 'middle', mode });
      d.rect(s, 7.0, y, 5.73, h, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25, radius: 0.18 });
      d.icon(s, 'FaCommentDots', 'accent3', 7.18, y + h / 2 - 0.17, 0.34);
      d.t(s, ans, 7.7, y, 4.9, h, { size: 18, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 25 ex5 dobbelspel (E7)
  {
    const s = d.page({ g: 25, tag: 'JIJ NU !', title: 'Exercice 5 — Dobbelspel (jeu de dés)', stars: '★' });
    d.pic(s, 'horloge', 11.6, 0.92, 0.62, 0.62);
    d.rect(s, 0.6, 1.7, 12.13, 0.6, { fill: 'accent1', tr: 88, line: 'accent1', lw: 1 });
    d.icon(s, 'FaDice', 'accent1', 0.8, 1.79, 0.42);
    d.t(s, '**Lancez les dés → conjuguez → faites une phrase !**', 1.4, 1.7, 11.1, 0.6, { size: 20, valign: 'middle' });
    const DICE = ['FaDiceOne', 'FaDiceTwo', 'FaDiceThree', 'FaDiceFour', 'FaDiceFive', 'FaDiceSix'];
    const die = (x, lab, faces, c) => {
      d.rect(s, x, 2.5, 3.5, 3.15, { fill: 'FFFFFF', line: c, lw: 3, radius: 0.25, shadow: true });
      d.t(s, lab, x, 2.55, 3.5, 0.45, { size: 16, bold: true, color: c, align: 'center', valign: 'middle' });
      faces.forEach((f, k) => {
        const fx = x + 0.17 + (k % 2) * 1.62; const fy = 3.05 + Math.floor(k / 2) * 0.84;
        d.rect(s, fx, fy, 1.52, 0.72, { fill: 'bg2', line: BORDER, radius: 0.12 });
        d.icon(s, DICE[k], 'accent5', fx + 0.1, fy + 0.2, 0.32);
        d.t(s, f, fx + 0.47, fy, 1.03, 0.72, { size: fs1(f, 1.0, 17, 12), bold: true, color: c, valign: 'middle' });
      });
    };
    die(0.6, 'Dé 1 · pronom', ['ik', 'jij', 'u', 'hij/zij', 'wij', 'jullie'], 'accent2');
    die(4.35, 'Dé 2 · verbe', ['werken', 'wonen', 'spreken', 'maken', 'bellen', 'drinken'], 'accent6');
    // optional "?" die
    d.rect(s, 8.45, 2.5, 1.6, 1.6, { fill: 'accent1', line: null, radius: 0.25, shadow: true });
    d.t(s, '?', 8.45, 2.5, 1.6, 1.6, { size: 66, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.t(s, 'Dé « ? » (option)', 8.1, 4.15, 2.3, 0.32, { size: 13, bold: true, color: 'accent1', align: 'center' });
    [[['FaDiceOne', 'FaDiceThree'], 'phrase affirmative'], [['FaDiceFour', 'FaDiceSix'], 'question']].forEach(([[a, b], lab], k) => {
      const y = 4.55 + k * 0.56;
      d.icon(s, a, 'accent5', 8.15, y, 0.28);
      d.t(s, '–', 8.45, y - 0.03, 0.2, 0.32, { size: 14, color: 'accent5', align: 'center' });
      d.icon(s, b, 'accent5', 8.67, y, 0.28);
      d.t(s, '= ' + lab, 9.02, y - 0.04, 1.45, 0.36, { size: fs1('= ' + lab, 1.4, 13, 10, false), color: 'tx1', valign: 'middle' });
    });
    d.avatar(s, 'prof_pointe', 10.6, 2.4, 2.1, 3.25);
    d.rect(s, 0.6, 5.85, 9.75, 1.0, { fill: 'bg2', line: BORDER });
    d.t(s, ['**✓** 1 point par forme juste  ·  **✓✓** 2 points si la phrase entière est correcte', 'Ex. : //jullie + bellen + ?// → //Bellen jullie de klant?//'], 0.85, 5.88, 9.35, 0.94, { size: 16, valign: 'middle', gap: 4 });
    d.rect(s, 10.6, 5.95, 2.1, 0.8, { fill: 'accent3', line: null, radius: 0.35, shadow: true });
    d.icon(s, 'FaPlay', 'FFFFFF', 10.85, 6.17, 0.36);
    d.t(s, 'Start!', 11.3, 5.95, 1.3, 0.8, { size: 24, bold: true, color: 'bg1', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 26 ex6 message de Karim (E6)
  const msg = [
    ['Hoi Sofie!', null],
    ['Morgen ik werk thuis.', 'Morgen **werk ik** thuis.'],
    ['Op dinsdag ik heb een vergadering in Gent.', 'Op dinsdag **heb ik** een vergadering in Gent.'],
    ['Ik moet nemen de trein van 8 uur.', 'Ik moet de trein van 8 uur **nemen**.'],
    ['Werkt jij ook in Gent?', '**Werk jij** ook in Gent?'],
    ['Ik bel op je morgen.', 'Ik bel je morgen **op**.'],
    ['Groetjes, Karim', null],
  ];
  d.ex({ g: 26, title: 'Exercice 6 — Le message de Karim', stars: '★★★', instr: 'Karim écrit à Sofie. Trouvez et corrigez les erreurs d’ordre des mots.' }, (s, mode, top) => {
    const px = 0.6; const pw = 7.7; const py = top; const ph = 6.86 - top;
    d.rect(s, px, py, pw, ph, { fill: 'tx1', line: null, radius: 0.22, shadow: true });
    d.rect(s, px + 0.14, py + 0.14, pw - 0.28, ph - 0.28, { fill: 'F4F6F9', line: null, radius: 0.12 });
    d.rect(s, px + 0.14, py + 0.14, pw - 0.28, 0.56, { fill: 'tx2', line: null, radius: 0.12 });
    d.rect(s, px + 0.14, py + 0.45, pw - 0.28, 0.25, { fill: 'tx2', line: null, radius: 0 });
    d.oval(s, px + 0.3, py + 0.21, 0.42, 0.42, { fill: 'accent2' });
    d.t(s, 'K', px + 0.3, py + 0.21, 0.42, 0.42, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, '**Karim**  →  Sofie', px + 0.85, py + 0.14, 5, 0.56, { size: 15, color: 'bg1', valign: 'middle' });
    const bx = px + 0.4; const by = py + 0.88; const bw = pw - 0.9; const bh = ph - 1.17;
    d.rect(s, bx, by, bw, bh, { fill: 'DCEBF7', line: null, radius: 0.15 });
    if (mode === 'q') {
      d.t(s, msg.map((m) => m[0]), bx + 0.3, by + 0.1, bw - 0.5, bh - 0.2, { size: 17, gap: 7, valign: 'middle' });
    } else {
      const L = [];
      msg.forEach(([orig, fix]) => { if (!fix) L.push([orig, 'n']); else { L.push([fix, 'ok']); L.push([orig, 'ko']); } });
      const lh = (bh - 0.2) / L.length; let yy = by + 0.1;
      L.forEach(([t, k]) => {
        if (k === 'ko') d.icon(s, 'FaLongArrowAltUp', 'accent3', bx + 0.14, yy + lh / 2 - 0.13, 0.26);
        d.t(s, k === 'ko' ? `{{${t}}}` : t, bx + 0.48, yy, bw - 0.6, lh, { size: 14, valign: 'middle', color: k === 'ok' ? 'accent3' : 'tx1' });
        yy += lh;
      });
    }
    const rx = 8.65; const rw = 12.73 - rx;
    if (mode === 'q') {
      d.iconDisc(s, 'FaSearch', rx + rw / 2 - 0.75, py + 0.05, 1.5, 'tx2');
      d.rect(s, rx, py + 1.75, rw, 1.15, { fill: 'accent6', tr: 90, line: 'accent6', lw: 1.25 });
      d.t(s, '5', rx + 0.2, py + 1.75, 1.0, 1.15, { size: 54, bold: true, color: 'accent6', align: 'center', valign: 'middle', head: true });
      d.t(s, 'erreurs cachées', rx + 1.25, py + 1.75, rw - 1.4, 1.15, { size: 20, bold: true, color: 'accent6', valign: 'middle' });
      d.avatar(s, 'prof_question', rx + 0.6, py + 3.1, rw - 1.2, ph - 3.1);
    } else {
      [['FaSyncAlt', 'Inversion', '× 2 · voir diapo 16', 'accent1'], ['GiPincers', 'La pince', '× 2 · voir diapo 18', 'accent6'], ['FaTimes', 'Le t devant jij', '× 1 · voir diapo 12', 'accent2']].forEach(([ic, h, b, c], k) => {
        const ch = (ph - 0.4) / 3;
        d.card(s, rx, py + k * (ch + 0.2), rw, ch, { icon: ic, head: h, color: c, body: b, size: 16 });
      });
    }
  });

  // ---------------------------------------------------------------- 27 ex7 ma semaine (E8)
  {
    const s = d.page({ g: 27, tag: 'MISE EN SITUATION', title: 'Exercice 7 — Ma semaine', stars: '★★★' });
    d.icon(s, 'FaHandPointRight', 'accent1', 0.6, 1.68, 0.3);
    d.t(s, 'Complétez, puis racontez votre semaine à un collègue :', 1.05, 1.64, 11.6, 0.4, { size: 17, italic: true, color: 'accent5' });
    const P = [['w_deze_week', 'Deze week …'], ['w_zondag', 'Op zondag …'], ['w_weekend', 'Dit weekend …'], ['w_vrije_tijd', 'In mijn vrije tijd …']];
    const cw = (12.13 - 3 * 0.25) / 4;
    const apt = Math.min(...P.map(([, a]) => fs1(a, cw - 0.25, 20, 13)));
    P.forEach(([img, am], i) => {
      const x = 0.6 + i * (cw + 0.25);
      d.rect(s, x, 2.12, cw, 2.2, { fill: 'FFFFFF', line: BORDER, shadow: true });
      d.pic(s, img, x + 0.12, 2.22, cw - 0.24, 1.48);
      d.t(s, `**//${am}//**`, x + 0.1, 3.74, cw - 0.2, 0.5, { size: apt, color: 'accent1', align: 'center', valign: 'middle' });
    });
    // coffee-break scene
    d.rect(s, 0.6, 4.52, 3.75, 2.33, { fill: 'purple', tr: 90, line: 'purple', lw: 1.25 });
    d.t(s, 'PAUSE-CAFÉ', 0.8, 4.58, 3.3, 0.3, { size: 12, bold: true, color: 'purple', cs: 2 });
    d.icon(s, 'FaCommentDots', 'accent2', 0.95, 4.92, 0.4);
    d.icon(s, 'FaCommentDots', 'purple', 3.55, 4.92, 0.4);
    d.ill(s, 'man-office-worker', 0.95, 5.2, 1.0, 1.0);
    d.icon(s, 'GiCoffeeCup', 'accent1', 2.13, 5.55, 0.6);
    d.ill(s, 'woman-office-worker', 2.95, 5.2, 1.0, 1.0);
    d.t(s, '**Karim**', 0.75, 6.2, 1.6, 0.3, { size: 14, color: 'accent2', align: 'center' });
    d.t(s, '**Sofie**', 2.65, 6.2, 1.6, 0.3, { size: 14, color: 'purple', align: 'center' });
    d.t(s, '✓ amorce + verbe en **2e position**', 0.7, 6.5, 3.55, 0.3, { size: 13, color: 'tx1', align: 'center' });
    // phrase bank
    d.rect(s, 4.6, 4.52, 8.13, 2.33, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE DE PHRASES', 4.8, 4.6, 4, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, 'Modèles', 4.8, 4.92, 3, 0.3, { size: 14, bold: true, color: 'tx2' });
    d.t(s, ['##Deze week## !!werk!! ^^ik^^ van maandag tot vrijdag.', '##Op zondag## !!slaap!! ^^ik^^ lang.', '##Dit weekend## !!bezoek!! ^^ik^^ mijn ouders.', '##In mijn vrije tijd## !!speel!! ^^ik^^ voetbal.'], 4.8, 5.24, 5.3, 1.55, { size: 15, gap: 3 });
    d.line(s, 10.2, 4.95, 10.2, 6.7, { color: BORDER, lw: 1, arrow: false });
    d.t(s, 'Questions', 10.35, 4.92, 2.3, 0.3, { size: 14, bold: true, color: 'tx2' });
    d.t(s, ['Wat !!doe!! ^^je^^ dit weekend?', 'En jij?', '!!Werk!! ^^je^^ ook op zaterdag?'], 10.35, 5.24, 2.3, 1.55, { size: 15, gap: 4 });
  }

  // ---------------------------------------------------------------- 28 ticket
  d.ticket({
    g: 28,
    q: ['Conjuguez : //hij (maken)//, //jij (bellen)//, //wij (spreken)//.', 'Transformez en question : //Je woont in Luik.//', 'Commencez par « Morgen » : //Ik moet thuis werken.//'],
    self: ['Conjuguer', 'Questionner', 'Placer le verbe'],
    teaser: { icon: 'FaQuestionCircle', text: '**Module 4 — Spellingregels** :  //LEZEN → ik lez ? ik lees ?//' },
  });
}

module.exports = { meta, build };
