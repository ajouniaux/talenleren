// Module 5 — De of het? · Les articles
const path = require('path');
const { BORDER, GHOST, plain, parse, fitSize } = require('../lib');

const meta = { n: 5, slug: 'De_of_het', title: 'De of het? — Les articles', short: 'De of het?', template: 'module_5_de_of_het.md' };

// ---------------------------------------------------------------- local constants
const YEL = 'FFE07A'; // yellow highlight (slide 3)
const ZERO = '7F8C9E'; // Ø : dashed grey
const WOOD = '8B6B43';
const CORK = 'C9A27A';
const NOTE = 'FFF3B0';
const AC = { DE: 'tx2', HET: 'accent1', EEN: 'accent5' };
const mk = (a, w) => (a === 'HET' ? `##${w}##` : a === 'DE' ? `@@${w}@@` : `**${w}**`);
const pw = (t, pt) => 0.26 + plain(t).length * (pt / 72) * 0.56; // pill width estimate

function build(d) {
  // ---------------------------------------------------------------- local helpers
  // dashed empty box (Ø)
  const zbox = (s, x, y, w, h, o = {}) => {
    d.rect(s, x, y, w, h, { fill: o.fill === undefined ? null : o.fill, tr: o.tr, line: o.line || ZERO, lw: o.lw ?? 1.75, dash: 'dash', radius: o.radius ?? 0.06 });
    if (o.label) d.t(s, 'Ø', x, y, w, h, { size: o.size || 20, bold: true, color: o.line || ZERO, align: 'center', valign: 'middle', head: true });
  };
  // article card DE / HET / EEN / Ø
  const artCard = (s, a, x, y, w, h, o = {}) => {
    if (a === 'Ø') return zbox(s, x, y, w, h, { label: o.label !== false, size: o.size, fill: o.zfill });
    d.rect(s, x, y, w, h, { fill: AC[a], line: o.line ?? null, lw: o.lw, radius: o.radius ?? 0.08, shadow: o.shadow });
    d.t(s, o.text || a, x, y, w, h, { size: o.size || 20, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: o.head ?? true });
    return undefined;
  };
  // rounded pill with centred text
  const pill = (s, text, x, y, w, h, fill, o = {}) => {
    d.rect(s, x, y, w, h, { fill, tr: o.tr, line: o.line ?? null, lw: o.lw, radius: o.radius ?? Math.min(0.1, h / 2), dash: o.dash, shadow: o.shadow });
    d.t(s, text, x + 0.03, y, w - 0.06, h, { size: o.size || 14, bold: o.bold ?? true, color: o.color || 'bg1', align: 'center', valign: 'middle', fit: true, max: o.size || 14, min: o.min || 10, head: o.head, italic: o.italic });
  };
  // "!" exception badge
  const bang = (s, x, y, dd) => { d.oval(s, x, y, dd, dd, { fill: 'accent1' }); d.t(s, '!', x, y, dd, dd, { size: Math.round(dd * 42), bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true }); };
  // train wagon: wheels drawn first so that the body hides their upper half
  const wagon = (s, x, y, w, h, text, c, o = {}) => {
    const wd = o.wheel || Math.min(0.24, h * 0.34);
    [0.2, 0.8].forEach((f) => d.oval(s, x + w * f - wd / 2, y + h - wd / 2, wd, wd, { fill: 'accent5' }));
    d.rect(s, x, y, w, h, { fill: o.fill ?? 'bg1', line: o.line === undefined ? c : o.line, lw: o.lw ?? 2.5, radius: 0.06, dash: o.dash });
    if (text) d.t(s, text, x + 0.06, y, w - 0.12, h, { size: o.size || 20, bold: o.bold ?? true, color: o.color || 'tx1', align: o.align || 'center', valign: 'middle', head: o.head, fit: true, max: o.size || 20, min: 12, italic: o.italic });
  };
  // text with ==highlighted== segments (yellow marker)
  const hl = (s, str, x, y, w, h, o = {}) => {
    const runs = [];
    String(str).split(/==([\s\S]+?)==/).forEach((seg, i) => {
      if (!seg) return;
      const rs = parse(seg, 'a', o.base || {});
      if (i % 2) rs.forEach((r) => { r.options.highlight = YEL; });
      runs.push(...rs);
    });
    s.addText(runs, { x, y, w, h, fontSize: o.size || 20, color: o.color || 'tx1', bold: o.bold, align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true, fontFace: o.head ? '+mj-lt' : undefined });
  };
  // multi-paragraph text from runs arrays
  const paras = (list, gap) => {
    const out = [];
    list.forEach((runs, i) => runs.forEach((r, j) => {
      const opt = { ...r.options };
      if (j === 0) opt.paraSpaceAfter = gap;
      if (j === runs.length - 1 && i < list.length - 1) opt.breakLine = true;
      out.push({ text: r.text, options: opt });
    }));
    return out;
  };
  // point on a circle towards a target
  const toward = (cx, cy, r, tx, ty) => { const dx = tx - cx; const dy = ty - cy; const L = Math.hypot(dx, dy); return [cx + (r * dx) / L, cy + (r * dy) / L]; };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'De of het?', sub: 'Les articles', line: 'Choisir l’article — et savoir quoi faire dans le doute',
    visual: (s) => {
      // the house card
      d.rect(s, 8.45, 3.0, 3.5, 3.55, { fill: 'FFFFFF', line: null, radius: 0.12, shadow: true });
      d.pic(s, 'a_huis', 8.85, 3.15, 2.7, 2.45);
      d.t(s, 'huis', 8.45, 5.65, 3.5, 0.75, { size: 36, bold: true, color: 'tx1', align: 'center', valign: 'middle', head: true });
      // hesitation arrows
      d.line(s, 8.75, 2.55, 9.35, 2.95, { color: 'FFFFFF', lw: 1.75, dash: 'dash' });
      d.line(s, 11.65, 2.55, 11.05, 2.95, { color: 'FFFFFF', lw: 1.75, dash: 'dash' });
      // DE / HET cards
      [['DE', 'tx2', 7.35, -10], ['HET', 'accent1', 10.95, 10]].forEach(([w, c, x, r]) => {
        s.addText(w, { shape: d.S.ROUNDED_RECTANGLE, rectRadius: 0.1, x, y: 1.1, w: 2.1, h: 1.25, fill: { color: c }, line: { color: 'FFFFFF', width: 3 }, color: 'FFFFFF', fontSize: 44, bold: true, fontFace: '+mj-lt', align: 'center', valign: 'middle', margin: 0, rotate: r, shadow: { type: 'outer', color: '000000', blur: 8, offset: 3, angle: 60, opacity: 0.3 } });
      });
      d.t(s, '?', 9.55, 0.85, 1.3, 1.6, { size: 88, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  {
    const s = d.mission({
      g: 2,
      cards: [
        { icon: 'FaCheckCircle', h: 'Choisir', t: '//@@de@@, ##het##, een// ou rien du tout.', color: 'accent3' },
        { icon: 'FaSearch', h: 'Deviner', t: 'l’article d’un mot nouveau grâce à sa « famille ».', color: 'accent2' },
        { icon: 'GiLifeBuoy', h: 'Se débrouiller', t: 'la bonne stratégie quand on ne sait pas.', color: 'purple' },
      ],
      band: 'Prenez vos deux palettes : **@@DE@@** (bleu nuit) et **##HET##** (orange) — elles servent aux exercices 1 et 5.',
    });
    // mini cards DE / HET / EEN / Ø in the « Choisir » card
    const cw = (10.0 - 0.6) / 3; const x0 = 0.6 + (cw - 2.86) / 2;
    ['DE', 'HET', 'EEN', 'Ø'].forEach((a, i) => artCard(s, a, x0 + i * 0.74, 5.0, 0.64, 0.48, { size: 13, radius: 0.06 }));
  }

  // ---------------------------------------------------------------- 3 échauffement : the whiteboard
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT' });
    const bx = 0.6; const by = 1.62; const bw = 9.5; const bh = 5.26;
    // drawn whiteboard (wooden frame) instead of a picture
    d.rect(s, bx, by, bw, bh - 0.35, { fill: 'FFFFFF', line: WOOD, lw: 6, radius: 0.04, shadow: true });
    d.rect(s, bx + bw * 0.3, by + bh - 0.38, bw * 0.4, 0.12, { fill: WOOD, line: null, radius: 0.02 });
    // board interior ≈ x 2.7–97.5 %, y 3.2–70 % of the picture
    const ix = bx + bw * 0.04; const iw = bw * 0.92; const iy = by + bh * 0.05;
    const sep = ix + 4.55;
    d.chip(s, 'NEDERLANDS', ix + 1.6, iy + 0.05, 'tx2', 0.32, 11);
    d.chip(s, 'FRANÇAIS', sep + 1.5, iy + 0.05, 'accent5', 0.32, 11);
    d.line(s, sep, iy + 0.55, sep, iy + 3.3, { color: GHOST, lw: 1, arrow: false, dash: 'dash' });
    const rows = [['Ik eet', 'een', 'appel.', 'Je mange', 'une', 'pomme.'], ['Ze neemt', 'de', 'trein.', 'Elle prend', 'le', 'train.'], ['We leren', null, 'talen.', 'Nous apprenons', 'des', 'langues.']];
    rows.forEach(([a, art, n, fa, fart, fn], i) => {
      const y = iy + 0.6 + i * 0.95; const h = 0.75;
      d.num(s, i + 1, ix + 0.05, y + 0.14, 0.46, 'tx2', 15);
      // Dutch: subject+verb | article | noun
      d.t(s, a, ix + 0.45, y, 1.65, h, { size: 21, align: 'right', valign: 'middle' });
      if (art) { d.rect(s, ix + 2.18, y + 0.1, 0.78, h - 0.2, { fill: YEL, line: null, radius: 0.05 }); d.t(s, art, ix + 2.18, y + 0.1, 0.78, h - 0.2, { size: 24, bold: true, align: 'center', valign: 'middle' }); } else zbox(s, ix + 2.23, y + 0.1, 0.68, h - 0.2, { line: 'tx1', lw: 1.75 });
      d.t(s, n, ix + 3.04, y, 1.4, h, { size: 24, valign: 'middle' });
      // French
      d.t(s, fa, sep + 0.1, y, 2.1, h, { size: 20, align: 'right', valign: 'middle', italic: true, color: 'accent5' });
      d.rect(s, sep + 2.27, y + 0.12, 0.7, h - 0.24, { fill: YEL, line: null, radius: 0.05 });
      d.t(s, fart, sep + 2.27, y + 0.12, 0.7, h - 0.24, { size: 20, bold: true, italic: true, align: 'center', valign: 'middle' });
      d.t(s, fn, sep + 3.05, y, 1.25, h, { size: 20, valign: 'middle', italic: true, color: 'accent5' });
    });
    // teacher (flipped so that he points at the board) + question
    d.ill(s, 'man-teacher', 10.55, 3.95, 2.2, 2.2);
    d.bubble(s, 'Et « **des** » ?', 10.3, 2.2, 2.43, 0.8, 'accent2', { size: 18, align: 'center' });
    d.line(s, 11.3, 3.0, 11.45, 3.75, { color: 'accent2', lw: 1.5, arrow: false });
  }

  // ---------------------------------------------------------------- 4 l'entonnoir (S7)
  d.section('Le système');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE' });
    d.t(s, 'FRANÇAIS', 0.6, 1.66, 2.0, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    // funnel (background)
    s.addShape(d.S.CUSTOM_GEOMETRY, { x: 2.45, y: 1.98, w: 3.15, h: 4.84, fill: { color: 'E4E9F0' }, line: { color: 'C9D2DD', width: 1 }, points: [{ x: 0, y: 0 }, { x: 3.15, y: 0.94 }, { x: 3.15, y: 3.92 }, { x: 0, y: 4.84 }, { close: true }] });
    // chips grouped by output
    const groups = [[['le', 'la', "l'"], 2.05], [['les'], 3.83], [['un', 'une'], 4.53], [['des', 'du / de la'], 5.77]];
    const gcol = ['accent5', 'tx2', 'accent5', ZERO];
    const BX = 2.28;
    const mids = groups.map(([chips, y0], gi) => {
      const ys = chips.map((_, k) => y0 + k * 0.54);
      ys.forEach((y) => d.line(s, 2.1, y + 0.22, BX, y + 0.22, { color: gcol[gi], lw: 1.5, arrow: false }));
      if (ys.length > 1) d.line(s, BX, ys[0] + 0.22, BX, ys[ys.length - 1] + 0.22, { color: gcol[gi], lw: 1.5, arrow: false });
      return (ys[0] + ys[ys.length - 1]) / 2 + 0.22;
    });
    // outputs
    const OX = 5.85; const outs = [['DE', 3.0], ['HET', 3.76], ['EEN', 4.52], ['Ø', 5.28]];
    const om = outs.map(([, y]) => y + 0.31);
    // arrows (before boxes)
    const SX = 3.95; const SY = 3.3;
    d.line(s, BX, mids[0] - 0.035, SX, SY - 0.035, { color: 'tx2', lw: 2.5, arrow: false });
    d.line(s, BX, mids[0] + 0.035, SX, SY + 0.035, { color: 'accent1', lw: 2.5, arrow: false });
    d.line(s, SX, SY, OX, om[0], { color: 'tx2', lw: 2.5 });
    d.line(s, SX, SY, OX, om[1], { color: 'accent1', lw: 2.5 });
    d.line(s, BX, mids[1], OX, om[0] + 0.12, { color: 'tx2', lw: 2.5 });
    d.line(s, BX, mids[1], OX, om[3] - 0.12, { color: ZERO, lw: 1.25, dash: 'dash' });
    d.line(s, BX, mids[2], OX, om[2], { color: 'accent5', lw: 2.5 });
    d.line(s, BX, mids[3], OX, om[3] + 0.08, { color: ZERO, lw: 2.5 });
    d.oval(s, SX - 0.19, SY - 0.19, 0.38, 0.38, { fill: 'FFFFFF', line: 'accent5', lw: 1.5 });
    d.t(s, '?', SX - 0.19, SY - 0.19, 0.38, 0.38, { size: 16, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.t(s, '? dépend du mot', 3.1, 2.6, 1.9, 0.32, { size: 13, italic: true, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    // chips on top
    groups.forEach(([chips, y0]) => chips.forEach((c, k) => {
      d.rect(s, 0.6, y0 + k * 0.54, 1.5, 0.44, { fill: 'bg1', line: 'accent5', lw: 1.25, radius: 0.08 });
      d.t(s, c, 0.6, y0 + k * 0.54, 1.5, 0.44, { size: 18, bold: true, align: 'center', valign: 'middle' });
    }));
    d.t(s, 'NÉERLANDAIS', OX - 0.1, 2.6, 1.8, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2, align: 'center' });
    outs.forEach(([a, y]) => artCard(s, a, OX, y, 1.6, 0.62, { size: 22 }));
    // the four rules
    const rules = [
      ['**le, la, l\'** → //@@de@@// ou //##het##// (selon le mot)', ['tx2', 'accent1'], 0.8],
      ['**les** → //@@de@@// (jamais //het//) — ou Ø au sens général : //Katten zijn lief.// (Les chats sont gentils.)', ['tx2'], 1.45],
      ['**un, une** → //een//', ['accent5'], 0.65],
      ['**des, du, de la** → Ø : //Ik drink koffie. Ik koop appels.//', [ZERO], 1.0],
    ];
    let ry = 2.1;
    rules.forEach(([txt, cols, h]) => {
      d.rect(s, 7.85, ry, 4.88, h, { fill: 'bg2', line: BORDER });
      cols.forEach((c, k) => d.rect(s, 7.85, ry + (k * h) / cols.length, 0.12, h / cols.length, { fill: c, line: null, radius: 0 }));
      d.t(s, txt, 8.15, ry + 0.06, 4.45, h - 0.12, { size: 17, valign: 'middle', fit: true, max: 17, min: 13 });
      ry += h + 0.15;
    });
  }

  // ---------------------------------------------------------------- 5 PIÈGE : matrix
  {
    const s = d.page({ g: 5, tag: 'PIÈGE FR ≠ NL' });
    const cx = [3.25, 8.13]; const cw = 4.6;
    artCard(s, 'DE', cx[0], 1.7, cw, 0.7, { size: 30 });
    artCard(s, 'HET', cx[1], 1.7, cw, 0.7, { size: 30 });
    const cells = [
      [['a_hond', 'le chien →', 'hond', 'DE'], ['FaBook', 'le livre →', 'boek', 'HET']],
      [['GiTable', 'la table →', 'tafel', 'DE'], ['a_huis', 'la maison →', 'huis', 'HET']],
    ];
    ['masculin', 'féminin'].forEach((g, r) => {
      const y = 2.6 + r * 1.7; const h = 1.5;
      d.rect(s, 0.6, y, 2.45, h, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 50 });
      d.t(s, `{{${g}}}`, 0.6, y + 0.2, 2.45, 0.7, { size: 26, bold: true, align: 'center', valign: 'middle', head: true });
      d.t(s, 'genre en français', 0.6, y + 0.9, 2.45, 0.4, { size: 13, italic: true, color: 'accent5', align: 'center' });
      cells[r].forEach(([p, fr, nl, a], c) => {
        const x = cx[c]; const col = AC[a];
        d.rect(s, x, y, cw, h, { fill: col, tr: a === 'DE' ? 92 : 90, line: col, lw: 1.5 });
        d.rect(s, x + 0.25, y + 0.2, 1.1, 1.1, { fill: 'bg1', line: BORDER, radius: 0.1 });
        if (p.startsWith('Fa') || p.startsWith('Gi')) d.icon(s, p, 'accent3', x + 0.4, y + 0.35, 0.8);
        else d.pic(s, p, x + 0.33, y + 0.28, 0.94, 0.94);
        d.t(s, fr, x + 1.6, y + 0.22, 2.8, 0.4, { size: 16, italic: true, color: 'accent5', valign: 'middle' });
        d.t(s, `${mk(a, a === 'DE' ? 'de' : 'het')} ${nl}`, x + 1.6, y + 0.62, 2.9, 0.7, { size: 30, bold: true, valign: 'middle', head: true });
      });
    });
    d.rect(s, 0.6, 6.05, 12.13, 0.8, { fill: 'accent6', line: null });
    d.icon(s, 'FaExclamationTriangle', 'FFFFFF', 0.85, 6.24, 0.42);
    d.t(s, 'Les 4 combinaisons existent → **le genre français ne prédit rien**. J’apprends chaque mot **avec** son article.', 1.45, 6.05, 11.1, 0.8, { size: 18, color: 'bg1', valign: 'middle', fit: true, max: 18, min: 14 });
  }

  // ---------------------------------------------------------------- 6 le pluriel — toujours DE
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE' });
    d.t(s, 'SINGULIER', 0.6, 1.66, 3.5, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, 'PLURIEL', 8.4, 1.66, 4.33, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    const rows = [['a_hond', 'DE', 'hond', 'honden'], ['a_collegas', 'DE', 'collega', "collega's"], ['a_huis', 'HET', 'huis', 'huizen'], ['FaChild', 'HET', 'kind', 'kinderen']];
    const hubX = 5.85; const hubW = 0.8;
    const pic = (s2, p, x, y, sz) => (p.startsWith('Fa') ? d.icon(s2, p, 'accent3', x + 0.05, y + 0.05, sz - 0.1) : d.pic(s2, p, x, y, sz, sz));
    rows.forEach(([p, a, sg, pl], i) => {
      const y = 2.05 + i * 0.98; const h = 0.8; const mid = y + h / 2;
      const c = AC[a];
      // arrows: colour of the singular article into the hub, navy out of it
      d.line(s, 4.15, mid, hubX - 0.02, mid, { color: c, lw: 3, arrow: false });
      d.line(s, hubX + hubW, mid, 8.35, mid, { color: 'tx2', lw: 3 });
      d.rect(s, 0.6, y, 3.5, h, { fill: c, tr: 92, line: c, lw: 2.5 });
      pic(s, p, 0.75, y + 0.1, 0.6);
      d.t(s, `${mk(a, a === 'DE' ? 'de' : 'het')} ${sg}`, 1.55, y, 2.45, h, { size: 26, valign: 'middle', head: true, bold: true });
      d.rect(s, 8.4, y, 4.33, h, { fill: 'tx2', tr: 92, line: 'tx2', lw: 2.5 });
      pic(s, p, 8.5, y + 0.15, 0.5); pic(s, p, 8.85, y + 0.15, 0.5);
      d.t(s, `@@de@@ ${pl}`, 9.6, y, 3.0, h, { size: 26, valign: 'middle', head: true, bold: true });
    });
    d.rect(s, hubX, 2.0, hubW, 3.84, { fill: 'tx2', line: null, radius: 0.12 });
    s.addText('PLURIEL = DE', { x: hubX - 1.52, y: 3.52, w: 3.84, h: 0.8, rotate: 270, fontSize: 20, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', margin: 0, charSpacing: 3, fontFace: '+mj-lt' });
    // indefinite line
    d.rect(s, 0.6, 6.02, 12.13, 0.83, { fill: 'bg2', line: BORDER });
    d.chip(s, 'INDÉFINI', 0.8, 6.25, 'accent5', 0.38, 13);
    d.t(s, '//een huis//', 2.15, 6.02, 1.4, 0.83, { size: 22, bold: true, valign: 'middle', align: 'right' });
    d.line(s, 3.65, 6.435, 4.25, 6.435, { color: 'accent1', lw: 2.5 });
    zbox(s, 4.35, 6.17, 0.6, 0.53, { label: true, size: 18 });
    d.t(s, '//huizen//', 5.05, 6.02, 1.2, 0.83, { size: 22, bold: true, valign: 'middle' });
    d.t(s, '(des maisons)', 6.2, 6.02, 1.55, 0.83, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    d.line(s, 7.8, 6.15, 7.8, 6.72, { color: BORDER, lw: 1.25, arrow: false });
    d.icon(s, 'FaComment', 'accent5', 8.0, 6.27, 0.33);
    d.t(s, '//Mijn kinderen eten graag **Ø** ijsjes.//', 8.45, 6.02, 4.2, 0.83, { size: 19, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 7 stratégie : donut
  {
    const s = d.page({ g: 7, tag: 'À RETENIR' });
    const CX = 3.3; const CY = 4.25; const D = 5.1;
    s.addChart(d.pres.charts.DOUGHNUT, [{ name: 'Noms', labels: ['DE', 'HET'], values: [2, 1] }], {
      x: CX - D / 2, y: CY - D / 2, w: D, h: D, holeSize: 60, chartColors: ['17375E', 'D9700F'], showLegend: false, showValue: false, showPercent: false, showLabel: false, showTitle: false,
      firstSliceAng: 0, layout: { x: 0.02, y: 0.02, w: 0.96, h: 0.96 }, dataBorder: { pt: 3, color: 'FFFFFF' }, altText: 'Environ 2 noms sur 3 sont en DE',
    });
    const R = (D * 0.96) / 2; const rm = R * 0.8;
    [['DE', 120], ['HET', 300]].forEach(([w, ang]) => {
      const a = (ang * Math.PI) / 180; const x = CX + rm * Math.sin(a); const y = CY - rm * Math.cos(a);
      d.t(s, w, x - 0.6, y - 0.3, 1.2, 0.6, { size: 26, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    });
    d.t(s, '≈ 2/3', CX - 1.2, CY - 0.6, 2.4, 0.8, { size: 40, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
    d.t(s, 'des noms en **DE**', CX - 1.0, CY + 0.2, 2.0, 0.4, { size: 13, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.t(s, 'Environ **2 noms sur 3** sont des mots en **@@DE@@**.', 6.3, 1.7, 6.43, 0.8, { size: 24, valign: 'middle' });
    const tips = [
      ['GiLifeBuoy', 'tx2', 'Je ne sais pas → je dis **@@de@@** : j’ai plus de chances d’avoir raison.'],
      ['FaBookOpen', 'accent5', 'J’ai un doute à l’écrit → je vérifie dans le dictionnaire (//de// ou //het//, ou //m / v / o// : //o// = //het//).'],
      ['FaBullseye', 'accent1', 'Je retiens surtout les mots en **##HET##** : ils sont moins nombreux !'],
    ];
    tips.forEach(([ic, c, txt], i) => {
      const y = 2.75 + i * 1.38; const h = 1.2;
      d.rect(s, 6.3, y, 6.43, h, { fill: c, tr: 91, line: c, lw: 1.25, radius: 0.15 });
      d.iconDisc(s, ic, 6.5, y + (h - 0.78) / 2, 0.78, c);
      d.t(s, txt, 7.5, y + 0.08, 5.05, h - 0.16, { size: 19, valign: 'middle', fit: true, max: 19, min: 14 });
    });
  }

  // ---------------------------------------------------------------- 8 familles DE ① personnes
  d.section('Les familles DE');
  {
    const s = d.page({ g: 8, tag: 'VOCABULAIRE' });
    [['a_buurman', 'buurman', 0.6], ['a_juf', 'juf', 3.06], ['a_vriend', 'vriend', 5.52], ['a_collegas', 'collega', 7.98], ['man-office-worker', 'directeur', 10.43]].forEach(([p, w, x], k) => {
      d.rect(s, x, 1.7, 2.3, 2.55, { fill: 'bg1', line: 'tx2', lw: 1.5, radius: 0.05, shadow: true });
      d.t(s, `@@de@@ ${w}`, x, 1.85, 2.3, 0.55, { size: 22, bold: true, align: 'center', valign: 'middle' });
      if (p.startsWith('a_')) d.pic(s, p, x + 0.5, 2.45, 1.3, 1.3);
      else d.ill(s, p, x + 0.5, 2.45, 1.3, 1.3);
      d.chip(s, k < 3 ? 'PERSONNE' : 'MÉTIER', x + (k < 3 ? 0.5 : 0.62), 3.83, 'accent5', 0.28, 10);
    });
    d.rect(s, 0.6, 4.45, 12.13, 0.68, { fill: 'bg2', line: 'tx2', lw: 1 });
    d.icon(s, 'FaUserFriends', 'tx2', 0.8, 4.6, 0.4);
    d.t(s, 'Les **personnes** et les **métiers** → **@@DE@@** : //@@de@@ man · @@de@@ vrouw · @@de@@ buurman · @@de@@ collega · @@de@@ directeur · @@de@@ klant//', 1.35, 4.45, 11.25, 0.68, { size: 16, valign: 'middle', fit: true, max: 16, min: 11 });
    // example sentence
    d.rect(s, 0.6, 5.33, 5.85, 1.52, { fill: 'accent2', tr: 90, line: 'accent2', lw: 1.25, radius: 0.15 });
    d.iconDisc(s, 'FaComments', 0.8, 5.72, 0.72, 'accent2');
    d.t(s, '//@@De@@ buurman is echt vriendelijk.//', 1.7, 5.45, 4.6, 0.7, { size: 22, valign: 'middle', fit: true, max: 22, min: 16 });
    d.t(s, 'Le voisin est vraiment sympathique.', 1.7, 6.15, 4.6, 0.45, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    // exceptions
    d.rect(s, 6.7, 5.33, 6.03, 1.52, { fill: 'accent1', tr: 90, line: 'accent1', lw: 1.5 });
    bang(s, 6.88, 5.43, 0.48);
    d.t(s, 'exceptions → **HET**', 7.5, 5.43, 5.0, 0.48, { size: 17, bold: true, color: 'accent1', valign: 'middle' });
    [['##het## kind', 6.9, 1.55], ['##het## meisje', 8.55, 1.75], ['##het## lid', 10.4, 1.25]].forEach(([t, x, w]) => {
      d.rect(s, x, 6.05, w, 0.62, { fill: 'bg1', line: 'accent1', lw: 2 });
      d.t(s, t, x + 0.05, 6.05, w - 0.1, 0.62, { size: 19, bold: true, align: 'center', valign: 'middle', fit: true, max: 19, min: 12 });
    });
  }

  // ---------------------------------------------------------------- 9 familles DE ② les terminaisons-aimants (S8)
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE' });
    const C = [6.67, 3.85]; const Rr = 0.95;
    const LX = 2.5; const RX = 8.05; const NW = 2.8;
    const nodes = [
      ['-ing', ['vergadering', 'opleiding', 'rekening'], LX, 1.7, 1.65, true],
      ['-ie', ['informatie', 'familie'], LX, 3.6, 0.9],
      ['-heid', ['waarheid', 'gezondheid'], LX, 4.75, 0.9],
      ['-nis', ['kennis', 'gebeurtenis'], RX, 1.7, 0.9],
      ['-de / -te', ['liefde', 'hoogte'], RX, 2.85, 0.9],
      ['-ij', ['bakkerij', 'partij'], RX, 4.0, 0.9],
      ['-teit', ['universiteit', 'kwaliteit'], RX, 5.15, 0.9],
    ];
    const exc = [
      ['het ding', 0, 0.6, 2.3], ['het ministerie', 1, 0.6, 3.85],
      ['het vonnis', 3, 11.03, 1.72], ['het getuigenis', 3, 11.03, 2.18], ['het einde', 4, 11.03, 2.87], ['het gemiddelde', 4, 11.03, 3.33],
    ];
    // connectors first
    nodes.forEach(([, , x, y, h]) => {
      const tx = x === LX ? LX + NW : RX; const ty = y + h / 2;
      const [sx, sy] = toward(C[0], C[1], Rr, tx, ty);
      d.line(s, sx, sy, tx, ty, { color: 'tx2', lw: 2, arrow: false });
    });
    exc.forEach(([, ni, x, y]) => {
      const n = nodes[ni]; const left = n[2] === LX;
      d.line(s, left ? x + 1.7 : n[2] + NW, y + 0.2, left ? LX : x, y + 0.2, { color: 'accent1', lw: 1.5, arrow: false, dash: 'dash' });
    });
    // magnet
    d.oval(s, C[0] - Rr, C[1] - Rr, 2 * Rr, 2 * Rr, { fill: 'FFFFFF', line: 'tx2', lw: 3 });
    d.icon(s, 'FaMagnet', 'tx2', C[0] - 0.45, C[1] - 0.78, 0.9);
    d.t(s, 'DE', C[0] - 0.8, C[1] + 0.12, 1.6, 0.55, { size: 30, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
    // suffix nodes
    nodes.forEach(([suf, ex, x, y, h, big]) => {
      const bw = big ? 1.25 : suf.length > 5 ? 1.2 : 0.95;
      d.rect(s, x, y, NW, h, { fill: 'bg1', line: 'tx2', lw: 1.5, shadow: true });
      d.rect(s, x, y, bw, h, { fill: 'tx2', line: null, radius: 0.08 });
      if (big) {
        d.t(s, suf, x, y + 0.08, bw, 0.62, { size: 34, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
        d.icon(s, 'FaStar', 'accent1', x + bw / 2 - 0.13, y + 0.72, 0.26);
        d.t(s, 'la plus utile au travail', x + 0.06, y + 1.0, bw - 0.12, 0.6, { size: 12, color: 'bg1', align: 'center', valign: 'middle', italic: true });
      } else d.t(s, suf, x + 0.03, y, bw - 0.06, h, { size: suf.length > 5 ? 16 : 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, ex.map((w) => `@@de@@ ${w}`), x + bw + 0.12, y + 0.05, NW - bw - 0.17, h - 0.1, { size: big ? 16 : 16, valign: 'middle', gap: 2, fit: true, max: 16, min: 12 });
    });
    // exceptions (orange, periphery)
    exc.forEach(([w, , x, y]) => pill(s, `! ${w}`, x, y, 1.7, 0.4, 'accent1', { size: 12, min: 9 }));
    // example sentences
    d.rect(s, 0.6, 6.25, 12.13, 0.6, { fill: 'bg2', line: BORDER });
    d.icon(s, 'FaComments', 'tx2', 0.8, 6.37, 0.36);
    d.t(s, '//@@De@@ oefening is niet zo moeilijk.//     ·     //Ik zweer het je! Dat is @@de@@ waarheid.//', 1.35, 6.25, 11.2, 0.6, { size: 19, valign: 'middle', align: 'center' });
  }

  // ---------------------------------------------------------------- 10–11 tile grids
  const tile = (s, x, y, w, h, o) => {
    d.rect(s, x, y, w, h, { fill: 'bg1', line: BORDER, shadow: true });
    d.iconDisc(s, o.icon, x + 0.18, y + 0.15, 0.72, 'accent3');
    d.t(s, o.title, x + 1.02, y + 0.15, w - 1.15, 0.72, { size: 19, bold: true, color: 'accent3', valign: 'middle', fit: true, max: 19, min: 14, head: true });
    const sentH = o.sentence ? 0.95 : 0;
    const bottom = y + h - 0.18 - (sentH ? sentH + 0.15 : 0);
    const rows = Math.ceil(o.words.length / 2); const chipH = 0.48; const chipsH = rows * chipH + (rows - 1) * 0.1;
    const excH = o.exc ? o.excH : 0;
    const blockH = 0.5 + 0.2 + chipsH + (excH ? 0.22 + excH : 0);
    let cy = y + 1.05 + Math.max(0, (bottom - (y + 1.05) - blockH) / 2);
    // pictogram strip
    const n = o.strip.length; const sx = x + (w - (n * 0.5 + (n - 1) * 0.2)) / 2;
    o.strip.forEach((ic, k) => {
      const ix = sx + k * 0.7;
      if (ic.startsWith('#')) { d.rect(s, ix, cy, 0.5, 0.5, { fill: 'accent3', line: null, radius: 0.08 }); d.t(s, ic.slice(1), ix, cy, 0.5, 0.5, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true }); } else d.icon(s, ic, 'accent3', ix, cy, 0.5);
    });
    cy += 0.7;
    const cw = (w - 0.4 - 0.12) / 2;
    o.words.forEach((wd, k) => {
      const cx = x + 0.2 + (k % 2) * (cw + 0.12) + (o.words.length % 2 && k === o.words.length - 1 ? (cw + 0.12) / 2 : 0);
      const yy = cy + Math.floor(k / 2) * (chipH + 0.1);
      d.rect(s, cx, yy, cw, chipH, { fill: 'bg1', line: 'tx2', lw: 1.25 });
      d.t(s, `@@de@@ ${wd}`, cx + 0.05, yy, cw - 0.1, chipH, { size: 16, align: 'center', valign: 'middle', fit: true, max: 16, min: 11 });
    });
    cy += chipsH + 0.22;
    if (o.exc) {
      const bd = o.big ? 0.62 : 0.44;
      d.rect(s, x + 0.2, cy, w - 0.4, excH, { fill: 'accent1', tr: 90, line: 'accent1', lw: 1.25 });
      bang(s, x + 0.32, cy + (excH - bd) / 2, bd);
      d.t(s, o.exc.map((e) => `##het## ${e}`).join(' · '), x + 0.45 + bd, cy + 0.05, w - 0.95 - bd, excH - 0.1, { size: 17, valign: 'middle', fit: true, max: 17, min: 12 });
    }
    if (o.sentence) {
      const sy = y + h - 0.18 - sentH;
      d.rect(s, x + 0.2, sy, w - 0.4, sentH, { fill: 'bg2', line: BORDER, radius: 0.12 });
      d.icon(s, 'FaComment', 'accent5', x + 0.35, sy + 0.14, 0.3);
      d.t(s, `//${o.sentence}//`, x + 0.75, sy + 0.05, w - 1.1, sentH - 0.1, { size: 18, valign: 'middle', fit: true, max: 18, min: 13 });
    }
  };
  const TW = (12.13 - 0.6) / 3;
  {
    const s = d.page({ g: 10, tag: 'VOCABULAIRE' });
    [
      { icon: 'FaAppleAlt', title: 'Fruits, arbres, plantes', strip: ['FaAppleAlt', 'GiPear', 'FaTree', 'GiRose'], words: ['appel', 'peer', 'boom', 'roos'], exc: ['fruit', 'gras'], excH: 0.62, sentence: '@@De@@ appel is mijn lievelingsfruit.' },
      { icon: 'FaSun', title: 'Astres', strip: ['FaSun', 'FaMoon', 'FaGlobeEurope', 'FaStar'], words: ['zon', 'maan', 'aarde', 'ster'], sentence: '@@De@@ zon schijnt heerlijk vandaag!' },
      { icon: 'FaMountain', title: 'Montagnes et fleuves', strip: ['FaMountain', 'GiMountains', 'FaWater', 'GiRiver'], words: ['Mont Blanc', 'Alpen', 'Maas', 'Schelde'], sentence: 'Heb je ooit @@de@@ Mont Blanc beklommen?' },
    ].forEach((o, i) => tile(s, 0.6 + i * (TW + 0.3), 1.7, TW, 5.15, o));
  }
  {
    const s = d.page({ g: 11, tag: 'VOCABULAIRE' });
    [
      { icon: 'FaSortNumericDown', title: 'Chiffres et lettres', strip: ['#3', '#7', '#a'], words: ['drie', 'zeven', 'a'], sentence: '@@De@@ 7 is mijn geluksgetal.' },
      { icon: 'FaTrain', title: 'Transports', strip: ['FaCar', 'FaTrain', 'FaBus', 'FaBicycle'], words: ['auto', 'trein', 'bus', 'fiets'], exc: ['vliegtuig', 'schip', 'vervoer'], excH: 0.8, big: true, sentence: 'Ik neem graag @@de@@ fiets om te gaan werken.' },
      { icon: 'FaCalendarAlt', title: 'Jours, mois, saisons', strip: ['FaCalendarDay', 'FaUmbrellaBeach', 'FaCalendarWeek', 'FaCalendarAlt'], words: ['maandag', 'zomer', 'dag', 'week', 'maand'], exc: ['jaar', 'uur', 'kwartier', 'seizoen', 'weekend'], excH: 1.45, big: true },
    ].forEach((o, i) => tile(s, 0.6 + i * (TW + 0.3), 1.7, TW, 5.15, o));
  }

  // ---------------------------------------------------------------- 12 HET ① diminutifs
  d.section('Les familles HET · mots composés');
  {
    const s = d.page({ g: 12, tag: 'GRAMMAIRE' });
    d.rect(s, 0.6, 1.7, 12.13, 0.66, { fill: 'accent1', tr: 88, line: 'accent1', lw: 1.25 });
    d.t(s, '**##-je · -tje · -pje##** → **##HET##**, toujours, même si le mot de base est en **@@DE@@** !', 0.9, 1.7, 11.6, 0.66, { size: 22, valign: 'middle', align: 'center' });
    // big DE card → shrinking magnifier → small HET card
    d.rect(s, 0.9, 2.65, 3.9, 1.55, { fill: 'tx2', line: null, radius: 0.12, shadow: true });
    d.icon(s, 'GiTable', 'FFFFFF', 1.15, 3.0, 0.85);
    d.t(s, 'de tafel', 2.05, 2.65, 2.7, 1.55, { size: 40, bold: true, color: 'bg1', valign: 'middle', head: true });
    d.line(s, 4.95, 3.43, 5.85, 3.43, { color: 'tx2', lw: 3 });
    d.icon(s, 'FaSearchMinus', 'accent5', 6.0, 2.68, 1.5);
    d.line(s, 7.65, 3.43, 8.55, 3.43, { color: 'accent1', lw: 3 });
    d.rect(s, 8.7, 2.98, 2.95, 0.9, { fill: 'accent1', line: null, radius: 0.1, shadow: true });
    d.icon(s, 'GiTable', 'FFFFFF', 8.85, 3.2, 0.45);
    d.t(s, 'het tafel**__tje__**', 9.35, 2.98, 2.25, 0.9, { size: 24, color: 'bg1', valign: 'middle', head: true });
    d.t(s, 'grand', 0.9, 4.25, 3.9, 0.3, { size: 13, italic: true, color: 'accent5', align: 'center' });
    d.t(s, 'petit', 8.7, 3.95, 2.95, 0.3, { size: 13, italic: true, color: 'accent5', align: 'center' });
    // six mini cards
    const minis = [['GiTable', 'de tafel →', 'tafel', 'tje'], ['FaHome', 'het huis →', 'huis', 'je'], ['FaMugHot', 'de kop →', 'kop', 'je'], ['girl', '', 'meis', 'je'], ['FaCookie', '', 'koek', 'je'], ['GiSandwich', '', 'brood', 'je']];
    const mw = 1.85; const gap = (12.13 - 6 * mw) / 5;
    minis.forEach(([ic, src, base, end], i) => {
      const x = 0.6 + i * (mw + gap); const y = 4.7;
      d.rect(s, x, y, mw, 2.15, { fill: 'bg1', line: 'accent1', lw: 2, shadow: true });
      if (/^(Fa|Gi)/.test(ic)) d.icon(s, ic, 'accent1', x + mw / 2 - 0.36, y + 0.2, 0.72); else d.ill(s, ic, x + mw / 2 - 0.36, y + 0.2, 0.72, 0.72);
      if (src) d.t(s, `//${src}//`, x, y + 1.0, mw, 0.35, { size: 14, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `##het## ${base}##${end}##`, x + 0.05, y + 1.35, mw - 0.1, 0.65, { size: 20, bold: true, align: 'center', valign: 'middle', fit: true, max: 20, min: 14 });
    });
  }

  // ---------------------------------------------------------------- 13 HET ② the 5 drawers (S8 HET)
  {
    const s = d.page({ g: 13, tag: 'GRAMMAIRE', title: 'Les familles HET ② — infinitifs, langues, matières' });
    const C = [6.67, 3.5]; const Rr = 0.95;
    const dw = 4.65; const dh = 1.5;
    const drawers = [
      ['FaUtensils', 'Infinitif → nom', ['eten', 'leven', 'werken'], 0.6, 1.7],
      ['FaComments', 'Langues', ['Nederlands', 'Frans'], 0.6, 3.5],
      ['GiLog', 'Matières', ['hout', 'goud', 'papier', 'glas'], 12.73 - dw, 1.7, '! @@de@@ wol'],
      ['FaPalette', 'Couleurs (comme noms)', ['rood', 'blauw'], 12.73 - dw, 3.5],
      ['FaCompass', 'Points cardinaux', ['noorden', 'zuiden'], 6.67 - dw / 2, 5.35],
    ];
    drawers.forEach(([, , , x, y]) => {
      const bottomOne = y > 5;
      const tx = bottomOne ? x + dw / 2 : x < 6 ? x + dw : x; const ty = bottomOne ? y : y + dh / 2;
      const [sx, sy] = bottomOne ? [C[0], C[1] + Rr + 0.62] : toward(C[0], C[1], Rr, tx, ty);
      d.line(s, sx, sy, tx, ty, { color: 'accent1', lw: 2, arrow: false });
    });
    d.oval(s, C[0] - Rr, C[1] - Rr, 2 * Rr, 2 * Rr, { fill: 'FFFFFF', line: 'accent1', lw: 3 });
    d.icon(s, 'FaMagnet', 'accent1', C[0] - 0.45, C[1] - 0.78, 0.9);
    d.t(s, 'HET', C[0] - 0.8, C[1] + 0.12, 1.6, 0.55, { size: 28, bold: true, color: 'accent1', align: 'center', valign: 'middle', head: true });
    d.t(s, 'aimant HET', C[0] - 1.0, C[1] + Rr + 0.08, 2.0, 0.5, { size: 14, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    drawers.forEach(([ic, title, ex, x, y, ex2]) => {
      d.rect(s, x, y, dw, dh, { fill: 'bg1', line: 'accent1', lw: 1.75, shadow: true, radius: 0.12 });
      d.rect(s, x + dw / 2 - 0.45, y + dh - 0.2, 0.9, 0.1, { fill: 'accent1', tr: 40, line: null, radius: 0.05 });
      d.iconDisc(s, ic, x + 0.18, y + 0.2, 0.68, 'accent1');
      d.t(s, title, x + 1.0, y + 0.18, dw - 1.15, 0.5, { size: 17, bold: true, color: 'accent1', valign: 'middle', fit: true, max: 17, min: 13 });
      d.t(s, ex.map((w) => `##het## ${w}`).join(' · '), x + 1.0, y + 0.68, dw - 1.15, dh - 0.92, { size: 19, valign: 'middle', fit: true, max: 19, min: 13 });
      if (ex2) { d.rect(s, x + dw - 1.3, y + 0.22, 1.12, 0.42, { fill: 'bg1', line: 'tx2', lw: 1.5, radius: 0.08 }); d.t(s, ex2, x + dw - 1.3, y + 0.22, 1.12, 0.42, { size: 15, bold: true, align: 'center', valign: 'middle' }); }
    });
  }

  // ---------------------------------------------------------------- 14 HET ③ préfixes et terminaisons
  {
    const s = d.page({ g: 14, tag: 'GRAMMAIRE' });
    const panel = (x, w, head, rows, chipW) => {
      d.rect(s, x, 1.68, w, 3.58, { fill: 'accent1', tr: 94, line: 'accent1', lw: 1, ltr: 40 });
      d.t(s, head, x + 0.2, 1.75, w - 0.4, 0.42, { size: 17, color: 'tx1', valign: 'middle' });
      rows.forEach(([lab, ex, exc], i) => {
        const y = 2.27 + i * 0.75;
        pill(s, lab, x + 0.2, y, chipW, 0.6, 'accent1', { size: 22, head: true });
        d.t(s, ex, x + chipW + 0.35, y, w - chipW - (exc ? 2.0 : 0.5), 0.6, { size: 18, valign: 'middle', fit: true, max: 18, min: 13 });
        if (exc) { d.rect(s, x + w - 1.6, y + 0.1, 1.42, 0.4, { fill: 'bg1', line: 'tx2', lw: 1.25, radius: 0.08 }); d.t(s, exc, x + w - 1.6, y + 0.1, 1.42, 0.4, { size: 14, bold: true, align: 'center', valign: 'middle' }); }
      });
    };
    panel(0.6, 6.0, '**Préfixe** + radical de verbe, //sans suffixe// → **##HET##**', [
      ['ge-', '##het## **ge**sprek · ##het## **ge**bouw · ##het## **ge**zin'],
      ['be-', '##het## **be**drijf · ##het## **be**roep · ##het## **be**zoek'],
      ['ver-', '##het## **ver**haal · ##het## **ver**lof', '! @@de@@ verkoop'],
      ['ont-', '##het## **ont**bijt'],
    ], 1.05);
    panel(6.9, 5.83, '**Terminaison** → **##HET##**', [
      ['-ment', '##het## docu**ment** · ##het## mo**ment**'],
      ['-um', '##het## muse**um** · ##het## centr**um**', '! @@de@@ datum'],
      ['-isme', '##het## toer**isme**'],
    ], 1.2);
    // duel band
    d.rect(s, 0.6, 5.45, 12.13, 1.4, { fill: 'bg2', line: BORDER });
    d.t(s, 'préfixe', 0.75, 5.55, 1.1, 0.3, { size: 13, italic: true, bold: true, color: 'accent1', align: 'center' });
    d.line(s, 0.8, 6.3, 1.6, 6.3, { color: 'accent1', lw: 3 });
    d.rect(s, 1.68, 5.95, 0.85, 0.7, { fill: 'bg1', line: 'accent1', lw: 2 });
    d.t(s, 'ver', 1.68, 5.95, 0.85, 0.7, { size: 26, bold: true, color: 'accent1', align: 'center', valign: 'middle', head: true });
    d.t(s, '·', 2.53, 5.95, 0.2, 0.7, { size: 26, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.t(s, 'gader', 2.68, 5.95, 1.25, 0.7, { size: 22, bold: true, align: 'center', valign: 'middle', head: true });
    d.t(s, '·', 3.88, 5.95, 0.2, 0.7, { size: 26, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.rect(s, 4.08, 5.95, 0.85, 0.7, { fill: 'tx2', tr: 88, line: 'tx2', lw: 3 });
    d.t(s, 'ing', 4.08, 5.95, 0.85, 0.7, { size: 26, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
    d.icon(s, 'FaCrown', 'tx2', 4.3, 5.5, 0.42);
    d.line(s, 5.75, 6.3, 5.0, 6.3, { color: 'tx2', lw: 3 });
    d.t(s, 'terminaison', 4.95, 5.55, 1.3, 0.3, { size: 13, italic: true, bold: true, color: 'tx2', align: 'center' });
    d.t(s, '= **@@de@@** vergadering', 5.85, 5.95, 2.6, 0.7, { size: 22, valign: 'middle' });
    d.line(s, 8.5, 5.6, 8.5, 6.7, { color: BORDER, lw: 1.25, arrow: false });
    d.t(s, ['**La terminaison gagne** 👑', '//@@de@@ verga·der**ing** · @@de@@ bestel**ling** · @@de@@ gemeen**te**//'], 8.7, 5.5, 3.95, 1.3, { size: 17, valign: 'middle', gap: 4, fit: true, max: 17, min: 13 });
  }

  // ---------------------------------------------------------------- 15 mots composés : le train
  {
    const s = d.page({ g: 15, tag: 'GRAMMAIRE' });
    d.t(s, 'LES DEUX MOTS', 0.6, 1.62, 3.0, 0.28, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, 'LE MOT COMPOSÉ', 6.6, 1.62, 3.0, 0.28, { size: 12, bold: true, color: 'accent5', cs: 2 });
    const trains = [[['HET', 'huis'], ['DE', 'deur'], 'huis', 'deur'], [['DE', 'trein'], ['HET', 'station'], 'trein', 'station'], [['HET', 'kantoor'], ['DE', 'stoel'], 'kantoor', 'stoel'], [['DE', 'telefoon'], ['HET', 'nummer'], 'telefoon', 'nummer']];
    trains.forEach(([[a1, w1], [a2, w2], p1, p2], i) => {
      const y = 2.15 + i * 1.02; const h = 0.6; const mid = y + h / 2;
      const c2 = AC[a2];
      d.line(s, 2.85, mid, 3.15, mid, { color: 'accent5', lw: 3, arrow: false });
      wagon(s, 0.6, y, 2.3, h, `${mk(a1, a1 === 'DE' ? 'de' : 'het')} ${w1}`, AC[a1]);
      wagon(s, 3.1, y, 2.3, h, `${mk(a2, a2 === 'DE' ? 'de' : 'het')} ${w2}`, c2);
      d.icon(s, 'GiCaptainHatProfile', c2, 4.85, y - 0.36, 0.5);
      d.line(s, 5.6, mid, 6.4, mid, { color: 'accent5', lw: 2.5 });
      d.line(s, 7.5, mid, 7.75, mid, { color: 'accent5', lw: 3, arrow: false });
      wagon(s, 6.6, y, 0.95, h, a2 === 'DE' ? 'de' : 'het', c2, { fill: c2, line: null, color: 'bg1', size: 20 });
      wagon(s, 7.7, y, 4.6, h, `${p1}**${p2}**`, c2, { fill: c2, line: null, color: 'bg1', bold: false, size: 24 });
      d.icon(s, 'GiCaptainHatProfile', c2, 11.75, y - 0.36, 0.5);
    });
    d.rect(s, 0.6, 6.2, 12.13, 0.65, { fill: 'tx2', line: null });
    d.icon(s, 'GiSteamLocomotive', 'FFFFFF', 0.85, 6.3, 0.45);
    d.t(s, 'C’est toujours le **dernier mot** qui donne l’article : il porte la casquette du conducteur.', 1.5, 6.2, 11.0, 0.65, { size: 17, color: 'bg1', valign: 'middle', fit: true, max: 17, min: 13 });
  }

  // ---------------------------------------------------------------- 16 een → de / het, et le Ø
  {
    const s = d.page({ g: 16, tag: 'PIÈGE FR ≠ NL' });
    const panels = [
      [0.6, '① 1re mention → //een//', 'accent5', 'In mijn kantoor heb ik **een** computer en **een** bureau.'],
      [7.18, '② déjà connu → //de / het//', 'tx2', '**@@De@@** computer is nieuw, **##het##** bureau is oud.'],
    ];
    panels.forEach(([x, cap, c, txt], i) => {
      const w = 5.55;
      d.rect(s, x, 1.68, w, 2.45, { fill: 'bg1', line: 'tx1', lw: 2, radius: 0.04 });
      pill(s, cap, x + 0.15, 1.8, pw(cap, 14) + 0.1, 0.38, c, { size: 14 });
      d.rect(s, x + 0.25, 2.33, w - 0.5, 1.0, { fill: 'bg2', line: 'accent5', lw: 1, radius: 0.18 });
      d.t(s, txt, x + 0.45, 2.33, w - 0.9, 1.0, { size: 20, valign: 'middle', align: 'center' });
      d.icon(s, 'FaDesktop', 'accent3', x + w / 2 - 0.9, 3.42, 0.6);
      d.icon(s, 'GiDesk', 'accent3', x + w / 2 + 0.25, 3.4, 0.65);
      if (i === 1) d.t(s, '(comme en français)', x + w - 2.05, 3.62, 1.9, 0.4, { size: 14, italic: true, color: 'accent5', align: 'right', valign: 'middle' });
    });
    d.line(s, 6.25, 2.83, 7.08, 2.83, { color: 'tx2', lw: 3 });
    // S10 trap
    const tx = 0.6; const ty = 4.35; const tw = 7.45; const th = 2.5;
    d.rect(s, tx, ty, tw, th, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', tx + 0.2, ty + 0.15, 'accent6', 0.32, 12);
    d.t(s, '!!✗!! {{Ik drink van de koffie.}}  ← calque de « du »', tx + 1.65, ty + 0.1, tw - 1.8, 0.42, { size: 17, valign: 'middle' });
    [['Je bois {{du}} café', 'Ik drink', 'koffie.'], ['Tu veux {{de l’}}eau ?', 'Wil je', 'water?']].forEach(([fr, a, b], i) => {
      const y = ty + 0.7 + i * 0.85; const h = 0.68;
      d.t(s, fr, tx + 0.25, y, 2.75, h, { size: 19, valign: 'middle' });
      d.line(s, tx + 3.0, y + h / 2, tx + 3.55, y + h / 2, { color: 'accent6', lw: 2 });
      d.rect(s, tx + 3.7, y, 3.55, h, { fill: 'accent3', tr: 90, line: 'accent3', lw: 1.25 });
      d.t(s, a, tx + 3.75, y, 1.25, h, { size: 20, bold: true, align: 'right', valign: 'middle' });
      zbox(s, tx + 5.08, y + 0.11, 0.55, h - 0.22, { line: 'accent3', label: true, size: 16, lw: 2 });
      d.t(s, b, tx + 5.72, y, 1.45, h, { size: 20, bold: true, valign: 'middle' });
    });
    // general meaning box
    const bx = 8.3; const bw = 12.73 - bx;
    d.rect(s, bx, ty, bw, th, { fill: 'bg2', line: BORDER });
    d.t(s, 'À RETENIR AUSSI', bx + 0.2, ty + 0.1, bw - 0.4, 0.35, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, ['✓ //Ik koop **Ø** appels.//', '//een koffie// = **un** café (une tasse)', '« J’aime **le** café » → //Ik hou van **Ø** koffie.// (sens général)'], bx + 0.2, ty + 0.5, bw - 0.4, th - 0.6, { size: 17, gap: 8, fit: true, max: 17, min: 13 });
  }

  // ---------------------------------------------------------------- 17 + APERÇU : the tree
  {
    const s = d.page({ g: 17, tag: '+ BONUS' });
    const TX = 6.67; const TY = 3.55;
    const leaves = [[1.75, 1.0], [3.0, 1.0], [4.25, 1.0]];
    const L = { x: 0.9, w: 3.6 }; const Rt = { x: 12.43 - 3.6, w: 3.6 };
    const LF = [4.85, 3.15]; const RF = [8.49, 3.15];
    // trunk + branches + twigs (before leaves)
    d.rect(s, TX - 0.25, TY - 0.1, 0.5, 2.0, { fill: WOOD, line: null, radius: 0.05 });
    d.line(s, TX - 0.1, TY, LF[0], LF[1], { color: 'tx2', lw: 9, arrow: false });
    d.line(s, TX + 0.1, TY, RF[0], RF[1], { color: 'accent1', lw: 9, arrow: false });
    leaves.forEach(([y, h]) => {
      d.line(s, LF[0], LF[1], L.x + L.w, y + h / 2, { color: 'tx2', lw: 3.5, arrow: false });
      d.line(s, RF[0], RF[1], Rt.x, y + h / 2, { color: 'accent1', lw: 3.5, arrow: false });
    });
    d.rect(s, TX - 1.0, 5.35, 2.0, 0.6, { fill: 'bg1', line: WOOD, lw: 2, radius: 0.12 });
    d.t(s, 'le nom', TX - 1.0, 5.35, 2.0, 0.6, { size: 20, bold: true, align: 'center', valign: 'middle', head: true });
    artCard(s, 'DE', 5.1, 3.55, 0.95, 0.5, { size: 18 });
    artCard(s, 'HET', 7.3, 3.55, 0.95, 0.5, { size: 18 });
    const left = [['==deze== / ==die== stoel', '//deze stoel// = cette chaise-ci'], ['een grot==e== stoel', ''], ['==Hij== is nieuw', '']];
    const right = [['==dit== / ==dat== boek', '//dit boek// = ce livre-ci'], ['een ==groot== boek', ''], ['==Het== is nieuw', '']];
    [[left, L, 'tx2', 92], [right, Rt, 'accent1', 90]].forEach(([items, P, c, tr]) => items.forEach(([nl, fr], i) => {
      const [y, h] = leaves[i];
      d.rect(s, P.x, y, P.w, h, { fill: c, tr, line: c, lw: 2, radius: 0.45 });
      hl(s, nl, P.x + 0.2, y + (fr ? 0.08 : 0), P.w - 0.4, fr ? 0.55 : h, { size: 24, bold: true, align: 'center', head: true });
      if (fr) d.t(s, fr, P.x + 0.2, y + 0.6, P.w - 0.4, 0.32, { size: 14, color: 'accent5', align: 'center', valign: 'middle' });
    }));
    d.rect(s, 0.6, 6.15, 12.13, 0.7, { fill: 'bg2', line: BORDER });
    d.icon(s, 'FaLightbulb', 'accent1', 0.8, 6.3, 0.4);
    d.t(s, 'Bien connaître l’article aujourd’hui = réussir les **démonstratifs** et les **adjectifs** demain (Néerlandais 2).', 1.35, 6.15, 11.2, 0.7, { size: 18, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 18 À retenir : organigramme (S9)
  {
    const s = d.page({ g: 18, tag: 'À RETENIR' });
    const qs = [
      ['Pluriel ?', 'DE'],
      ['Mot composé ?', 'ACT'],
      ['Finit par //-je// (diminutif) ?', 'HET'],
      ['Une personne ?', 'DE', '(sauf //het kind, het lid//)'],
      ['Infinitif ou langue ?', 'HET'],
      ['Suffixe //-ing, -heid, -ie, -ij, -nis, -de/-te, -teit// ?', 'DE', '! //het ding, het einde, het ministerie//'],
      ['Préfixe //ge-, be-, ver-, ont-// + radical de verbe, **sans suffixe** ? Ou suffixe //-ment, -um, -isme// ?', 'HET', '! //de verkoop, de datum//'],
    ];
    const step = 0.68; const rh = 0.52; const y0 = 1.66; const DX = 1.15; const QX = 1.85; const QW = 5.45; const RX = 8.1;
    qs.forEach(([q, out, note], i) => {
      const y = y0 + i * step; const mid = y + rh / 2;
      // NON (down)
      const nextY = i < qs.length - 1 ? y + step : 6.42;
      d.line(s, DX + rh / 2, y + rh, DX + rh / 2, nextY, { color: 'accent5', lw: 1.5 });
      d.t(s, 'NON', 0.55, y + rh - 0.02, 0.85, 0.2, { size: 10, bold: true, color: 'accent5', align: 'right', valign: 'middle' });
      // OUI (right)
      d.line(s, QX + QW, mid, RX - 0.05, mid, { color: 'accent3', lw: 2 });
      d.t(s, 'OUI', QX + QW + 0.05, y - 0.04, 0.7, 0.24, { size: 11, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
      s.addShape(d.S.DIAMOND, { x: DX, y, w: rh, h: rh, fill: { color: 'tx2' }, line: { color: 'tx2', width: 0.5 } });
      d.t(s, String(i + 1), DX, y, rh, rh, { size: 14, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.rect(s, QX, y, QW, rh, { fill: 'bg2', line: BORDER });
      d.t(s, q, QX + 0.15, y, QW - 0.25, rh, { size: 16, valign: 'middle', fit: true, max: 16, min: 12 });
      if (out === 'ACT') {
        d.rect(s, RX, y, 3.35, rh, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25, radius: 0.15 });
        d.t(s, 'je regarde le **dernier mot** et je recommence avec lui', RX + 0.12, y, 3.15, rh, { size: 13, valign: 'middle', fit: true, max: 14, min: 11 });
        // loop back to question 1
        const ly = y0 + rh / 2;
        d.line(s, RX + 3.35, mid, 12.55, mid, { color: 'accent3', lw: 1.75, arrow: false });
        d.line(s, 12.55, mid, 12.55, ly, { color: 'accent3', lw: 1.75, arrow: false });
        d.line(s, 12.55, ly, 10.0, ly, { color: 'accent3', lw: 1.75 });
        d.num(s, '1', 9.55, ly - 0.2, 0.4, 'accent3', 13);
        d.t(s, 'retour à la question 1', 10.05, ly - 0.36, 2.4, 0.3, { size: 11, italic: true, color: 'accent3', align: 'center' });
      } else {
        artCard(s, out, RX, y, 1.2, rh, { size: 18 });
        if (note) d.t(s, note, RX + 1.35, y, 12.73 - RX - 1.35, rh, { size: 14, color: 'accent6', valign: 'middle', fit: true, max: 14, min: 11 });
      }
    });
    // final exit
    d.rect(s, 1.0, 6.42, 6.3, 0.45, { fill: 'accent3', line: null, radius: 0.12 });
    d.icon(s, 'GiLifeBuoy', 'FFFFFF', 1.15, 6.47, 0.35);
    d.t(s, 'Sinon → dictionnaire… ou **DE**', 1.6, 6.42, 5.6, 0.45, { size: 17, color: 'bg1', valign: 'middle' });
    d.t(s, 'Lecture de haut en bas : **OUI** → sortie · **NON** ↓ question suivante', 7.55, 6.42, 5.18, 0.45, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 19 divider
  d.divider({ g: 19, tiles: [
    ['Tri express', '★', 'FaLayerGroup'], ['Au pluriel', '★', 'FaClone'], ['de, het, een ou Ø ?', '★★', 'FaPuzzlePiece'], ['Le train des mots', '★★', 'FaTrain'],
    ['Le grand duel', '★★', 'GiCrossedSwords'], ['Le détective du bureau', '★★★', 'FaUserSecret'], ['L’inventaire du bureau', '★★★', 'FaClipboardList'],
  ] });

  // ---------------------------------------------------------------- 20 ex1 tri express (E4)
  const ex1 = [['vergadering', 'DE', '-ing'], ['meisje', 'HET', '-je'], ['document', 'HET', '-ment'], ['collega', 'DE', 'personne'], ['eten', 'HET', 'infinitif'], ['informatie', 'DE', '-ie'], ['gesprek', 'HET', 'ge-'], ['waarheid', 'DE', '-heid'],
    ['trein', 'DE', 'transport'], ['vliegtuig', 'HET', 'exception'], ['tafeltje', 'HET', '-je'], ['museum', 'HET', '-um'], ['fiets', 'DE', 'transport'], ['jaar', 'HET', 'exception'], ['Nederlands', 'HET', 'langue'], ['oefening', 'DE', '-ing']];
  d.ex({ g: 20, title: 'Exercice 1 — Tri express', stars: '★', instr: 'Classez les 16 mots : @@DE@@ ou ##HET## ? Vous avez 2 minutes.' }, (s, mode, top) => {
    d.pic(s, 'horloge', 11.95, 0.78, 0.7, 0.7);
    d.t(s, '2 min', 10.95, 0.9, 0.95, 0.45, { size: 18, bold: true, color: 'accent1', align: 'right', valign: 'middle' });
    if (mode === 'q') {
      ex1.forEach(([w], i) => {
        const x = 0.6 + (i % 8) * 1.533; const y = top + 0.05 + Math.floor(i / 8) * 0.72;
        d.rect(s, x, y, 1.4, 0.6, { fill: 'bg2', line: GHOST, lw: 1.25 });
        d.t(s, w, x + 0.02, y, 1.36, 0.6, { size: 13, bold: true, align: 'center', valign: 'middle', fit: true, max: 13, min: 10 });
      });
    }
    const cy = mode === 'q' ? top + 1.6 : top + 0.05; const ch = 6.85 - cy;
    [['DE', 0.6], ['HET', 6.83]].forEach(([a, x]) => {
      const c = AC[a];
      d.rect(s, x, cy, 5.9, ch, { fill: c, tr: a === 'DE' ? 92 : 90, line: c, lw: 2 });
      artCard(s, a, x + 2.15, cy + 0.15, 1.6, 0.55, { size: 22 });
      if (mode === 'q') d.icon(s, 'FaInbox', c, x + 2.6, cy + 1.25, 0.7);
      else {
        const ws = ex1.filter((e) => e[1] === a);
        const cw = 2.725;
        ws.forEach(([w, , fam], k) => {
          const xx = x + 0.15 + (k % 2) * (cw + 0.15); const yy = cy + 0.85 + Math.floor(k / 2) * 0.76;
          d.rect(s, xx, yy, cw, 0.62, { fill: 'bg1', line: c, lw: 1.5 });
          const fw = Math.max(0.6, pw(fam, 12));
          d.t(s, w, xx + 0.12, yy, cw - fw - 0.3, 0.62, { size: 19, bold: true, valign: 'middle', fit: true, max: 19, min: 12, head: true });
          pill(s, fam, xx + cw - fw - 0.1, yy + 0.14, fw, 0.34, c, { size: 12, tr: 15 });
        });
      }
    });
  });

  // ---------------------------------------------------------------- 21 ex2 au pluriel (E3)
  const ex2 = [['HET', 'huis', 'hui__z__en'], ['HET', 'kind', 'kinderen'], ['DE', 'collega', "collega's"], ['HET', 'boek', 'boeken'], ['DE', 'vergadering', 'vergaderingen'], ['HET', 'meisje', 'meisjes'], ['DE', 'les', 'les__s__en'], ['HET', 'raam', 'r__a__men']];
  d.ex({ g: 21, title: 'Exercice 2 — Au pluriel', stars: '★', instr: 'Mettez au pluriel, avec l’article. Attention à l’orthographe (module 1) !' }, (s, mode, top) => {
    ex2.forEach(([a, sg, pl], i) => {
      const x0 = i < 4 ? 0.6 : 6.83; const y = top + 0.1 + (i % 4) * 0.98; const h = 0.78;
      d.rect(s, x0, y, 2.4, h, { fill: 'bg2', line: AC[a], lw: 2.5 });
      d.t(s, `${mk(a, a === 'DE' ? 'de' : 'het')} ${sg}`, x0 + 0.08, y, 2.24, h, { size: 21, align: 'center', valign: 'middle', fit: true, max: 21, min: 13, head: true });
      s.addText('pl.', { shape: d.S.RIGHT_ARROW, x: x0 + 2.5, y: y + 0.12, w: 1.0, h: h - 0.24, fill: { color: 'accent1' }, line: { color: 'accent1', width: 0.5 }, color: 'FFFFFF', bold: true, fontSize: 12, align: 'center', valign: 'middle', margin: 0 });
      d.rect(s, x0 + 3.6, y, 2.3, h, { fill: 'bg1', line: 'tx2', lw: 2.5 });
      d.t(s, mode === 'q' ? '°°…………°°' : `@@de@@ ${pl}`, x0 + 3.65, y, 2.2, h, { size: 19, align: 'center', valign: 'middle', fit: true, max: 19, min: 11, head: true });
    });
    const by = 6.2;
    d.rect(s, 0.6, by, 12.13, 0.65, { fill: 'tx2', line: null });
    d.icon(s, mode === 'q' ? 'FaLightbulb' : 'FaCheck', 'FFFFFF', 0.82, by + 0.15, 0.35);
    d.t(s, mode === 'q' ? 'Rappel du module 1 : je double ? je simplifie ? s → z ?' : 'Pluriel → toujours **de** · M1 : les__s__en (je double) · r__a__men (je simplifie) · hui__z__en (s → z)', 1.35, by, 11.2, 0.65, { size: 18, color: 'bg1', valign: 'middle', fit: true, max: 18, min: 13 });
  });

  // ---------------------------------------------------------------- 22 ex3 de, het, een ou Ø (E1)
  const ex3 = [['Ik drink ', 'Ø', ' koffie.', ' ++(ou //een// : une tasse)++'], ['', 'De', ' vergadering begint om 9 uur.'], ['Ik heb ', 'een', ' vraag.'], ['', 'Het', ' meisje van mijn collega is ziek.'], ['We leren ', 'Ø', ' talen.'],
    ['', 'Het', ' kantoor is op de tweede verdieping.'], ['Ik neem ', 'de', ' trein van 8 uur.'], ['', 'De', ' informatie staat op de website.'], ['Mijn zoon wil ', 'een', ' broodje met kaas.'], ['', 'De', ' documenten liggen op tafel.']];
  d.ex({ g: 22, title: 'Exercice 3 — de, het, een ou Ø ?', stars: '★★', instr: 'Complétez avec @@de@@, ##het##, een ou Ø (pas d’article).' }, (s, mode, top) => {
    const colW = 4.25; const y = top + 0.15; const h = 6.85 - y;
    const texts = ex3.map(([a, ans, b], i) => plain(`${i + 1}  ${a}${ans}${b}`));
    const pt = Math.min(fitSize(texts.slice(0, 5), colW, h, 21, 14, 16), fitSize(texts.slice(5), colW, h, 21, 14, 16));
    [0, 1].forEach((ci) => {
      const list = ex3.slice(ci * 5, ci * 5 + 5).map(([a, ans, b, extra], k) => {
        const kind = /^het$/i.test(ans) ? 'HET' : /^de$/i.test(ans) ? 'DE' : ans === 'een' ? 'EEN' : 'Ø';
        const ansRun = mode === 'q' ? { text: '……', options: { color: 'accent5' } } : { text: ans, options: { bold: true, color: AC[kind] || ZERO, underline: { style: 'sng' } } };
        return [{ text: `${ci * 5 + k + 1}  `, options: { bold: true, color: 'tx2' } }, ...(a ? parse(a, mode) : []), ansRun, ...parse(b + (extra || ''), mode)];
      });
      s.addText(paras(list, 16), { x: 0.6 + ci * (colW + 0.4), y, w: colW, h, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    });
    // bank of 4 cards
    const bx = 10.0; const bw = 2.73;
    d.rect(s, bx, y, bw, h, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE', bx, y + 0.12, bw, 0.35, { size: 12, bold: true, color: 'accent5', align: 'center', cs: 2 });
    ['DE', 'HET', 'EEN', 'Ø'].forEach((a, i) => artCard(s, a, bx + 0.4, y + 0.6 + i * 0.95, bw - 0.8, 0.72, { size: 24, zfill: 'FFFFFF' }));
  });

  // ---------------------------------------------------------------- 23 ex4 le train des mots
  const ex4 = [['HET', 'kantoor', 'DE', 'stoel'], ['DE', 'trein', 'HET', 'station'], ['HET', 'werk', 'DE', 'dag'], ['DE', 'computer', 'HET', 'scherm'], ['DE', 'telefoon', 'HET', 'nummer'], ['DE', 'naam', 'HET', 'kaartje']];
  d.ex({ g: 23, title: 'Exercice 4 — Le train des mots', stars: '★★', instr: 'Assemblez le train : quel est le nouveau mot ? Quel article ?' }, (s, mode, top) => {
    const step = (6.85 - top - 0.12) / 6;
    ex4.forEach(([a1, w1, a2, w2], i) => {
      const y = top + 0.12 + i * step; const h = 0.5; const mid = y + h / 2; const c2 = AC[a2];
      d.num(s, i + 1, 0.6, y + 0.04, 0.42, 'tx2', 14);
      wagon(s, 1.15, y, 2.15, h, `${mk(a1, a1 === 'DE' ? 'de' : 'het')} ${w1}`, AC[a1], { size: 18, wheel: 0.17 });
      d.t(s, '+', 3.3, y, 0.3, h, { size: 20, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      wagon(s, 3.6, y, 2.15, h, `${mk(a2, a2 === 'DE' ? 'de' : 'het')} ${w2}`, c2, { size: 18, wheel: 0.17 });
      d.line(s, 5.9, mid, 6.55, mid, { color: 'accent5', lw: 2.5 });
      if (mode === 'q') {
        wagon(s, 6.7, y, 0.95, h, '', 'accent5', { lw: 1.5, dash: 'dash', wheel: 0.17 });
        wagon(s, 7.8, y, 3.7, h, '°°nouveau mot°°', 'accent5', { lw: 1.5, dash: 'dash', size: 15, bold: false, italic: true, wheel: 0.17 });
      } else {
        d.line(s, 7.6, mid, 7.85, mid, { color: 'accent5', lw: 3, arrow: false });
        wagon(s, 6.7, y, 0.95, h, a2 === 'DE' ? 'de' : 'het', c2, { fill: c2, line: null, color: 'bg1', size: 18, wheel: 0.17 });
        wagon(s, 7.8, y, 3.7, h, `${w1}**${w2}**`, c2, { fill: c2, line: null, color: 'bg1', size: 21, bold: false, wheel: 0.17 });
        if (i === 5) pill(s, 'composé + -je', 11.65, y + 0.08, 1.08, 0.34, 'accent1', { size: 11 });
      }
    });
  });

  // ---------------------------------------------------------------- 24 ex5 le grand duel (E7)
  const ex5 = [['bedrijf', 'HET', 'be-'], ['rekening', 'DE', '-ing'], ['broodje', 'HET', '-je'], ['klant', 'DE', 'personne'], ['beroep', 'HET', 'be-'], ['universiteit', 'DE', '-teit'], ['Engels', 'HET', 'langue'], ['bus', 'DE', 'transport'], ['centrum', 'HET', '-um'], ['gezondheid', 'DE', '-heid'], ['weekend', 'HET', 'exception'], ['kind', 'HET', 'exception']];
  d.ex({ g: 24, title: 'Exercice 5 — Het grote de-het-duel', stars: '★★', instr: 'Levez la bonne palette **et** donnez la famille !' }, (s, mode, top) => {
    const bot = 5.95;
    if (mode === 'q') {
      [['Équipe 1', 'accent2', 0.6], ['Équipe 2', 'accent1', 10.83]].forEach(([t, c, x]) => {
        d.rect(s, x, top, 1.9, bot - top, { fill: c, tr: 90, line: c, lw: 1.5 });
        d.rect(s, x, top, 1.9, 0.55, { fill: c, line: null, radius: 0.08 });
        d.t(s, t, x, top, 1.9, 0.55, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
        for (let k = 0; k < 6; k++) d.icon(s, 'FaRegStar', c, x + 0.3 + (k % 2) * 0.75, top + 0.8 + Math.floor(k / 2) * 0.95, 0.55);
      });
      d.pic(s, 'horloge', 3.25, top, 1.15, 1.15);
      s.addText('Start!', { shape: d.S.ROUNDED_RECTANGLE, rectRadius: 0.2, x: 4.75, y: top + 0.2, w: 1.9, h: 0.75, fill: { color: 'accent3' }, color: 'FFFFFF', bold: true, fontSize: 26, fontFace: '+mj-lt', align: 'center', valign: 'middle', margin: 0, shadow: { type: 'outer', color: '000000', blur: 6, offset: 2, angle: 60, opacity: 0.2 } });
      d.pic(s, 'prof_pointe', 7.0, top - 0.1, 1.35, 1.35);
      d.pic(s, 'bulles_questions', 8.45, top + 0.05, 1.6, 1.0);
      d.rect(s, 3.3, top + 1.35, 6.73, 1.55, { fill: 'bg1', line: 'accent5', lw: 3, shadow: true });
      d.icon(s, 'FaBuilding', 'accent3', 3.6, top + 1.62, 1.0);
      d.t(s, 'bedrijf', 4.8, top + 1.35, 4.5, 1.55, { size: 54, bold: true, align: 'center', valign: 'middle', head: true });
      d.t(s, 'ENSUITE', 2.75, top + 3.05, 1.2, 0.36, { size: 11, bold: true, color: 'accent5', cs: 2, valign: 'middle' });
      let x = 3.9; let y = top + 3.05;
      ex5.slice(1).forEach(([w]) => {
        const ww = pw(w, 14);
        if (x + ww > 10.5) { x = 3.9; y += 0.46; }
        pill(s, w, x, y, ww, 0.36, 'bg2', { size: 14, color: 'tx1', bold: false, line: GHOST, lw: 1 });
        x += ww + 0.1;
      });
    } else {
      const tw = (12.13 - 0.45) / 4; const th = (bot - top - 0.3) / 3;
      ex5.forEach(([w, a, fam], i) => {
        const x = 0.6 + (i % 4) * (tw + 0.15); const y = top + Math.floor(i / 4) * (th + 0.15); const c = AC[a];
        d.rect(s, x, y, tw, th, { fill: c, tr: a === 'DE' ? 93 : 91, line: c, lw: 2 });
        d.t(s, `${mk(a, a === 'DE' ? 'de' : 'het')} ${w}`, x + 0.1, y + 0.08, tw - 0.2, th * 0.55, { size: 24, align: 'center', valign: 'middle', fit: true, max: 24, min: 14, head: true });
        const fw = pw(fam, 13);
        pill(s, fam, x + (tw - fw) / 2, y + th * 0.62, fw, 0.36, c, { size: 13 });
      });
    }
    d.rect(s, 0.6, 6.12, 12.13, 0.73, { fill: 'bg2', line: BORDER });
    d.icon(s, 'FaTrophy', 'accent1', 0.85, 6.28, 0.42);
    d.t(s, 'BARÈME   ✓ article juste = **1 point**   ·   ✓✓ article + famille = **2 points**', 1.45, 6.12, 11.1, 0.73, { size: 19, valign: 'middle' });
  });

  // ---------------------------------------------------------------- 25 ex6 le détective (E6)
  d.ex({ g: 25, title: 'Exercice 6 — Le détective du bureau', stars: '★★★', instr: 'Trouvez les erreurs d’articles… mais ne corrigez pas ce qui est juste !' }, (s, mode, top) => {
    const cx = 0.6; const cw = 7.9; const cy = top + 0.02; const chh = 6.85 - cy;
    d.rect(s, cx, cy, cw, chh, { fill: CORK, line: WOOD, lw: 4, radius: 0.04 });
    [[0.35, 0.4], [7.3, 0.55], [0.5, chh - 0.45], [7.4, chh - 0.4], [3.9, chh - 0.25]].forEach(([dx, dy]) => d.oval(s, cx + dx, cy + dy, 0.09, 0.09, { fill: WOOD, tr: 40 }));
    const nx = cx + 0.5; const ny = cy + 0.35; const nw = cw - 1.0; const nh = chh - 0.7;
    d.rect(s, nx, ny, nw, nh, { fill: NOTE, line: 'E5D27A', lw: 0.75, radius: 0.02, shadow: true });
    d.icon(s, 'FaThumbtack', 'accent6', nx + nw / 2 - 0.2, ny - 0.22, 0.42);
    d.t(s, 'NOTE DE SERVICE', nx + 0.35, ny + 0.25, 4, 0.32, { size: 12, bold: true, color: 'accent5', cs: 2 });
    const txt = mode === 'q'
      ? 'Het vergadering begint om 10 uur. De meisje van de receptie geeft het documenten aan de directeur. Ze zegt: "Het werken in de kantoor is leuk!"'
      : '{{Het}} @@De@@ vergadering begint om 10 uur. {{De}} ##Het## meisje van __@@de@@__ receptie geeft {{het}} @@de@@ documenten aan __@@de@@__ directeur. Ze zegt: "__##Het##__ werken in {{de}} ##het## kantoor is leuk!"';
    d.t(s, txt, nx + 0.35, ny + 0.7, nw - 0.7, nh - 0.9, { size: 23, ls: 1.25, valign: 'top', fit: true, max: 23, min: 16 });
    const px = 8.8; const pwid = 12.73 - px;
    if (mode === 'q') {
      d.icon(s, 'GiMagnifyingGlass', 'accent5', px + 0.95, top + 0.25, 2.0);
      d.oval(s, px + 0.35, top + 2.6, 1.15, 1.15, { fill: 'accent6' });
      d.t(s, '4', px + 0.35, top + 2.6, 1.15, 1.15, { size: 48, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, 'erreurs\ncachées', px + 1.65, top + 2.6, 2.2, 1.15, { size: 24, bold: true, color: 'accent6', valign: 'middle', head: true });
      d.t(s, 'Justifiez chaque correction par sa **famille**.', px, top + 4.0, pwid, 0.7, { size: 16, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    } else {
      const fixes = [['{{Het}} → @@De@@ vergadering', '-ing', 'tx2'], ['{{De}} → ##Het## meisje', '-je', 'accent1'], ['{{het}} → @@de@@ documenten', 'pluriel', 'tx2'], ['{{de}} → ##het## kantoor', 'à mémoriser', 'accent1']];
      d.t(s, '4 ERREURS', px, top, pwid, 0.32, { size: 12, bold: true, color: 'accent6', cs: 2 });
      fixes.forEach(([t, fam, c], i) => {
        const y = top + 0.4 + i * 0.7;
        d.rect(s, px, y, pwid, 0.6, { fill: 'bg1', line: c, lw: 1.5 });
        d.t(s, t, px + 0.12, y, pwid - 1.45, 0.6, { size: 17, valign: 'middle', fit: true, max: 17, min: 12 });
        const fw = Math.min(1.3, pw(fam, 12));
        pill(s, fam, px + pwid - fw - 0.1, y + 0.13, fw, 0.34, c, { size: 12 });
      });
      const ky = top + 3.3;
      d.rect(s, px, ky, pwid, 6.85 - ky, { fill: 'accent3', tr: 90, line: 'accent3', lw: 1.25 });
      d.t(s, 'CORRECTS (pas d’erreur)', px + 0.15, ky + 0.08, pwid - 0.3, 0.32, { size: 12, bold: true, color: 'accent3', cs: 1 });
      d.t(s, ['//@@de@@ receptie// (-ie)', '//@@de@@ directeur// (personne)', '//##Het## werken// (infinitif)'], px + 0.15, ky + 0.42, pwid - 0.3, 6.85 - ky - 0.5, { size: 16, gap: 3, fit: true, max: 16, min: 12 });
    }
  });

  // ---------------------------------------------------------------- 26 ex7 l'inventaire du bureau (E8)
  {
    const s = d.page({ g: 26, tag: 'MISE EN SITUATION', title: 'Exercice 7 — L’inventaire du bureau', stars: '★★★' });
    d.rect(s, 0.6, 1.66, 12.13, 0.55, { fill: 'purple', tr: 90, line: 'purple', lw: 1 });
    d.t(s, '**Mission** : décrivez votre bureau à votre collègue ; il ou elle trouve les **3 différences**.', 0.85, 1.66, 11.7, 0.55, { size: 18, valign: 'middle' });
    const office = (x, y, c, L, items) => {
      const W = 5.9; const H = 2.95;
      d.rect(s, x, y, W, H, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.num(s, L, x + 0.12, y + 0.12, 0.45, c, 16);
      const lab = (t, lx, ly, lw) => d.t(s, t, x + lx, y + ly, lw, 0.28, { size: 12, align: 'center', valign: 'middle' });
      // kast
      d.icon(s, 'GiLockers', 'accent5', x + 0.2, y + 0.95, 1.0);
      lab('@@de@@ kast', 0.1, 2.0, 1.2);
      // raam
      d.rect(s, x + 2.2, y + 0.12, 1.15, 0.72, { fill: 'DCEBF7', line: 'accent5', lw: 1.5, radius: 0 });
      d.line(s, x + 2.775, y + 0.12, x + 2.775, y + 0.84, { color: 'accent5', lw: 1.25, arrow: false });
      d.line(s, x + 2.2, y + 0.48, x + 3.35, y + 0.48, { color: 'accent5', lw: 1.25, arrow: false });
      lab('##het## raam', 3.4, 0.33, 1.0);
      // bureau (desk)
      d.rect(s, x + 1.3, y + 1.95, 3.1, 0.1, { fill: WOOD, line: null, radius: 0 });
      d.rect(s, x + 1.4, y + 2.05, 0.07, 0.6, { fill: WOOD, line: null, radius: 0 });
      d.rect(s, x + 4.23, y + 2.05, 0.07, 0.6, { fill: WOOD, line: null, radius: 0 });
      lab('##het## bureau', 2.15, 2.3, 1.4);
      // three items on the desk
      items.slice(0, 3).forEach(([ic, t], k) => {
        const cxx = 1.85 + k * 1.0;
        d.icon(s, ic, 'accent3', x + cxx - 0.3, y + 1.35, 0.6);
        lab(t, cxx - 0.5, 1.03, 1.0);
      });
      // chair
      d.icon(s, 'FaChair', 'accent3', x + 4.55, y + 1.75, 0.7);
      lab('@@de@@ stoel', 4.45, 2.5, 0.95);
      // plant / book on the shelf (top right)
      d.icon(s, items[3][0], 'accent3', x + 4.95, y + 0.2, 0.6);
      lab(items[3][1], 4.65, 0.85, 1.2);
    };
    office(0.6, 2.38, 'accent2', 'A', [['FaLaptop', '@@de@@ computer'], ['GiDeskLamp', '@@de@@ lamp'], ['FaPrint', '@@de@@ printer'], ['FaSeedling', '@@de@@ plant']]);
    office(6.83, 2.38, 'purple', 'B', [['FaLaptop', '@@de@@ computer'], ['FaMugHot', '##het## kopje'], ['FaPhoneAlt', '@@de@@ telefoon'], ['FaBook', '##het## boek']]);
    d.rect(s, 0.6, 5.5, 12.13, 1.35, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE DE MOTS', 0.8, 5.55, 4, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, [
      '**Modèle** : //In mijn kantoor heb ik **een** computer, **een** plant en **een** kast. **@@De@@** computer is nieuw. **##Het##** raam is groot.//',
      '**Mots** : //de computer · het bureau · de stoel · de lamp · de plant · het raam · de kast · het scherm · de telefoon · de printer · het kopje · het boek//',
      '**Adjectifs** : //nieuw · oud · groot · klein · mooi//',
    ], 0.8, 5.85, 11.75, 0.97, { size: 15, gap: 2, fit: true, max: 15, min: 12 });
  }

  // ---------------------------------------------------------------- 27 ticket + bilan
  {
    const E = '  ';
    const s = d.ticket({
      g: 27, title: 'Ticket de sortie — et bilan du bloc 1',
      q: ['//…… gesprek · …… oefening · …… broodje// ?', 'Au pluriel : //het boek// → ?', '//het kantoor + de deur// → ?'],
      self: [E + 'Klanken', E + 'Ik stel me voor', E + 'Presens', E + 'Spellingregels', E + 'De of het'],
      teaser: { icon: 'FaFlagCheckered', text: '**Volgende stap: bloc 2** — M6 Tweeklanken : les sons doubles (//huis, tijd, keuken//)' },
    });
    const rh = Math.min(0.95, 3.6 / 5);
    ['FaVolumeUp', 'FaIdCard', 'FaCog', 'FaPencilAlt', null].forEach((ic, i) => {
      const y = 2.2 + i * rh + (rh - 0.12) / 2;
      if (ic) d.icon(s, ic, 'tx2', 7.78, y - 0.16, 0.32);
      else { d.rect(s, 7.78, y - 0.16, 0.16, 0.32, { fill: 'tx2', line: null, radius: 0 }); d.rect(s, 7.94, y - 0.16, 0.16, 0.32, { fill: 'accent1', line: null, radius: 0 }); }
    });
  }
}

module.exports = { meta, build };
