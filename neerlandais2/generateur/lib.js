// Shared builders for the Néerlandais 2 (UE2) session decks — « Néerlandais en situation ».
const path = require('path');
const pptxgen = require('pptxgenjs');
const React = require('react');
const RDS = require('react-dom/server');
const sharp = require('sharp');
const FA = require('react-icons/fa');
const fs = require('fs');
const JSZip = require(require.resolve('jszip', { paths: [require.resolve('pptxgenjs')] }));

const IMG_DIR = path.join(__dirname, 'img');
const IMGS = JSON.parse(require('fs').readFileSync(path.join(IMG_DIR, 'manifest.json'), 'utf8'));

const THEME = {
  name: 'Nederlands in situatie',
  headFontFace: 'Cambria',
  bodyFontFace: 'Calibri',
  colors: {
    dk1: '1B2333', lt1: 'FFFFFF', dk2: '17375E', lt2: 'EEF3F8',
    accent1: 'D9700F', accent2: '2A6FB0', accent3: '2E7D4F', accent4: 'B4236A', accent5: '4A5A70', accent6: 'B83227',
    hlink: '2A6FB0', folHlink: 'B4236A',
  },
};
const HEX = THEME.colors;
const SCHEME2HEX = { tx1: HEX.dk1, bg1: HEX.lt1, tx2: HEX.dk2, bg2: HEX.lt2, accent1: HEX.accent1, accent2: HEX.accent2, accent3: HEX.accent3, accent4: HEX.accent4, accent5: HEX.accent5, accent6: HEX.accent6 };
const HEAD = '+mj-lt'; // theme heading font (Cambria)
const BORDER = 'D5DCE6';

// Characters of the syllabus and generic roles (used by experts() and dialogue()).
const PURPLE = '6E4A9E';
const PEOPLE = {
  EMMA: { c: 'D9700F', icon: 'FaUserGraduate' }, PIETER: { c: '2A6FB0', icon: 'FaUserGraduate' },
  SARAH: { c: '2E7D4F', icon: 'FaUser' }, JANSSENS: { c: '17375E', icon: 'FaUserTie' },
  A: { c: '2A6FB0', icon: 'FaUser' }, B: { c: 'D9700F', icon: 'FaUser' }, C: { c: '2E7D4F', icon: 'FaUser' }, D: { c: PURPLE, icon: 'FaUser' },
  DOCENT: { c: '17375E', icon: 'FaChalkboardTeacher' }, KLAS: { c: PURPLE, icon: 'FaUsers' },
};

const TAGS = {
  'COUCHE 1': 'accent3', 'COUCHE 2': 'accent2', 'COUCHE 3': 'accent1', EXTRA: 'accent6', '+ BONUS': 'tx2',
  ZINNENBOUWER: 'tx2', GRAMMATICA: 'tx2', GRAMMAIRE: 'tx2', WOORDENSCHAT: 'accent3', VOCABULAIRE: 'accent3',
  'MISE EN SITUATION': PURPLE, 'JALON 1': PURPLE, 'JALON 2': PURPLE, KLANKMOMENT: 'accent4', PRONONCIATION: 'accent4',
  DIALOOG: 'accent2', DIALOGUE: 'accent2', BD: 'accent2', 'ÉCHAUFFEMENT': 'accent2', FOCUS: 'accent2',
  PLAN: 'accent5', 'MÉTHODE': 'accent5', 'PIÈGE': 'accent6', 'À RETENIR': 'tx2', 'AUTO-ÉVALUATION': 'accent5',
  ORAL: PURPLE, 'ÉCRIT': 'accent1', 'FAUX-AMIS': 'accent6', 'SYNTHÈSE': 'tx2', 'JIJ NU!': 'accent1',
};

// ---------------------------------------------------------------- icons
const ICON_NAMES = ['FaUserGraduate', 'FaUser', 'FaUserTie', 'FaStopwatch', 'FaSun', 'FaMoon', 'FaSmile', 'FaHandPaper', 'FaBriefcase', 'FaMapMarkerAlt', 'FaUtensils', 'FaShoppingBasket', 'FaHeartbeat', 'FaCloudSun', 'FaIdCard', 'FaPhoneAlt', 'FaClock', 'FaTint', 'FaClipboardList', 'FaBook', 'FaPenNib', 'FaUsers', 'FaSearch',
  'FaBalanceScale', 'FaServer', 'FaCalculator', 'FaBuilding', 'FaCheck', 'FaTimes', 'FaExclamationTriangle', 'FaLightbulb',
  'FaHeadphones', 'FaComments', 'FaBullseye', 'FaLanguage', 'FaFileAlt', 'FaEnvelope', 'FaHome', 'FaRoute', 'FaFlag',
  'FaQuestion', 'FaArrowRight', 'FaStickyNote', 'FaMicrophone', 'FaListOl', 'FaEye', 'FaChalkboardTeacher', 'FaRegSquare',
  'FaUserSecret', 'FaHourglassHalf', 'FaGraduationCap', 'FaPuzzlePiece', 'FaDoorOpen', 'FaCalendarAlt', 'FaThermometerHalf'];
const ICON_COLORS = ['FFFFFF', HEX.dk2, HEX.dk1, HEX.accent1, HEX.accent2, HEX.accent3, HEX.accent4, HEX.accent5, HEX.accent6, PURPLE];
const ICONS = {};
async function prepIcons() {
  for (const n of ICON_NAMES) {
    if (!FA[n]) throw new Error('missing icon ' + n);
    for (const c of ICON_COLORS) {
      const svg = RDS.renderToStaticMarkup(React.createElement(FA[n], { color: '#' + c, size: 256 }));
      const buf = await sharp(Buffer.from(svg)).resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
      ICONS[n + '_' + c] = 'image/png;base64,' + buf.toString('base64');
    }
  }
}
function ico(name, color) {
  const hex = SCHEME2HEX[color] || color;
  const k = name + '_' + hex;
  if (!ICONS[k]) throw new Error('icon not prepared: ' + k);
  return ICONS[k];
}

// ---------------------------------------------------------------- markup → runs
// **bold**  //italic//  [[answer]] (blank in question, green in correction)
// {{wrong}} (plain in question, red struck in correction)   <<right>> (plain in question, green in correction)
// ^^blue^^  ##orange##  %%purple%%  !!red!!  ___ (always a blank)
const MK = /(\+\+[\s\S]+?\+\+|\*\*[\s\S]+?\*\*|\[\[[\s\S]+?\]\]|\{\{[\s\S]+?\}\}|<<[\s\S]+?>>|\/\/[\s\S]+?\/\/|\^\^[\s\S]+?\^\^|##[\s\S]+?##|%%[\s\S]+?%%|!![\s\S]+?!!|_{3,})/g;
function blankFor(v) { return '…'.repeat(Math.min(14, Math.max(5, Math.round(v.length * 0.55)))); }
function parse(str, mode = 'a', base = {}) {
  const out = [];
  let last = 0;
  for (const m of [...String(str).matchAll(MK)]) {
    if (m.index > last) out.push({ text: str.slice(last, m.index), options: { ...base } });
    const t = m[0];
    const v = t.length > 4 ? t.slice(2, -2) : t;
    if (t.startsWith('++')) { if (mode !== 'q') out.push(...parse(v, mode, { ...base, bold: true, color: 'accent3' })); }
    else if (t.startsWith('**')) out.push(...parse(v, mode, { ...base, bold: true }));
    else if (t.startsWith('[[')) out.push(mode === 'q' ? { text: blankFor(v), options: { ...base, color: 'accent5', bold: false } } : { text: v, options: { ...base, bold: true, color: 'accent3' } });
    else if (t.startsWith('{{')) out.push(mode === 'q' ? { text: v, options: { ...base } } : { text: v, options: { ...base, color: 'accent6', strike: 'sngStrike' } });
    else if (t.startsWith('<<')) out.push(mode === 'q' ? { text: v, options: { ...base } } : { text: v, options: { ...base, bold: true, color: 'accent3' } });
    else if (t.startsWith('//')) out.push(...parse(v, mode, { ...base, italic: true }));
    else if (t.startsWith('^^')) out.push(...parse(v, mode, { ...base, bold: true, color: 'accent2' }));
    else if (t.startsWith('##')) out.push(...parse(v, mode, { ...base, bold: true, color: 'accent1' }));
    else if (t.startsWith('%%')) out.push(...parse(v, mode, { ...base, bold: true, color: 'accent4' }));
    else if (t.startsWith('!!')) out.push(...parse(v, mode, { ...base, bold: true, color: 'accent6' }));
    else out.push({ text: '……………', options: { ...base, color: 'accent5' } });
    last = m.index + t.length;
  }
  if (last < str.length) out.push({ text: str.slice(last), options: { ...base } });
  if (!out.length) out.push({ text: '', options: { ...base } });
  return out;
}
function plain(str) { return String(str).replace(/\+\+|\*\*|\[\[|\]\]|\{\{|\}\}|<<|>>|\/\/|\^\^|##|%%|!!/g, ''); }
// paragraphs: array of {runs, opts}; returns flat run list with breakLine
function flow(paras) {
  const out = [];
  paras.forEach((p, i) => {
    p.runs.forEach((r, j) => {
      const o = j === 0 ? { ...(p.opts || {}), ...r.options } : { ...r.options };
      if (j === p.runs.length - 1 && i < paras.length - 1) o.breakLine = true;
      out.push({ text: r.text, options: o });
    });
  });
  return out;
}

// ---------------------------------------------------------------- text fitting (estimate)
function linesFor(text, wIn, pt, cw = 0.5) {
  cw *= 0.86; // calibrated on Carlito (Calibri metrics)
  const cpl = Math.max(6, Math.floor(wIn / ((pt / 72) * cw)));
  let lines = 0;
  for (const para of String(text).split('\n')) {
    const words = para.split(/\s+/).filter(Boolean);
    let cur = 0; let l = 1;
    for (const w of words) {
      const len = w.length + (cur ? 1 : 0);
      if (cur + len > cpl) { l++; cur = w.length; } else cur += len;
    }
    lines += l;
  }
  return lines;
}
function textH(paras, wIn, pt, spaceAfter = 6, lineSp = 1.2, cw = 0.5) {
  let h = 0.06;
  for (const p of paras) h += linesFor(p, wIn - 0.12, pt, cw) * (pt / 72) * lineSp + spaceAfter / 72;
  return h;
}
function fitSize(paras, wIn, hIn, max = 22, min = 14, spaceAfter = 6, cw = 0.5, label = '') {
  for (let pt = max; pt >= min; pt--) if (textH(paras, wIn, pt, spaceAfter, 1.2, cw) <= hIn) return pt;
  console.warn(`  ! tight fit (${label}): ${String(paras[0]).slice(0, 50)}`);
  return min;
}

const shadow = () => ({ type: 'outer', color: '000000', blur: 8, offset: 2, angle: 60, opacity: 0.18 });

// ---------------------------------------------------------------- Deck
class Deck {
  constructor(meta) {
    this.m = meta;
    const p = (this.pres = new pptxgen());
    p.layout = 'LAYOUT_WIDE';
    p.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
    this.nn = String(meta.n).padStart(2, '0');
    p.author = 'A. Jouniaux';
    p.company = 'IRAM — Néerlandais 2 (UE2)';
    p.subject = 'Néerlandais en situation appliqué à l’enseignement supérieur';
    p.title = `Séance ${this.nn} — ${meta.title}`;
    this.S = p.shapes;
    this.layouts();
  }

  layouts() {
    const p = this.pres;
    const foot = `Néerlandais 2 · UE2 · Néerlandais en situation · Séance ${this.nn}`;
    p.defineSlideMaster({
      title: 'ATLAS_CONTENT', background: { color: HEX.lt1 },
      objects: [
        { text: { text: foot, options: { x: 0.6, y: 7.05, w: 9, h: 0.3, fontSize: 10, color: 'accent5', margin: 0, valign: 'middle' } } },
        { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 0.68, w: 12.13, h: 0.78, fontSize: 32, bold: true, color: 'tx2', valign: 'middle', align: 'left', margin: 0 }, text: '' } },
      ],
      slideNumber: { x: 12.13, y: 7.05, w: 0.6, h: 0.3, fontSize: 10, color: HEX.accent5, align: 'right' },
    });
    p.defineSlideMaster({
      title: 'ATLAS_DARK', background: { color: HEX.dk2 },
      objects: [
        { text: { text: foot, options: { x: 0.6, y: 7.05, w: 9, h: 0.3, fontSize: 10, color: 'bg2', margin: 0, valign: 'middle' } } },
        { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 0.68, w: 12.13, h: 0.78, fontSize: 32, bold: true, color: 'bg1', valign: 'middle', align: 'left', margin: 0 }, text: '' } },
      ],
      slideNumber: { x: 12.13, y: 7.05, w: 0.6, h: 0.3, fontSize: 10, color: HEX.lt2, align: 'right' },
    });
    p.defineSlideMaster({
      title: 'ATLAS_COVER', background: { color: HEX.dk2 },
      objects: [
        { text: { text: 'Néerlandais 2 · UE2 · A. Jouniaux · IRAM — Enseignement pour adultes', options: { x: 0.6, y: 6.85, w: 8, h: 0.35, fontSize: 12, color: 'bg2', margin: 0 } } },
        { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 2.05, w: 6.3, h: 1.9, fontSize: 40, bold: true, color: 'bg1', valign: 'bottom', align: 'left', margin: 0 }, text: '' } },
        { placeholder: { options: { name: 'body', type: 'body', x: 0.6, y: 4.15, w: 6.3, h: 1.5, fontSize: 18, color: 'bg2', valign: 'top', align: 'left', margin: 0 }, text: '' } },
      ],
    });
  }

  section(title) { this.pres.addSection({ title }); this.sec = title; }
  slide(master = 'ATLAS_CONTENT') { return this.pres.addSlide({ masterName: master, sectionTitle: this.sec }); }

  chip(s, text, x, y, color, h = 0.34, size = 12) {
    const w = 0.4 + text.length * (size / 12) * 0.125 + (/[^\x00-\x7F]/.test(text) ? 0.15 : 0);
    s.addText(text, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.05, x, y, w, h, fill: { color }, color: 'bg1', bold: true, fontSize: size, align: 'center', valign: 'middle', margin: 0, charSpacing: 1, objectName: 'tag' });
    return w;
  }

  // content slide with title, tag chip(s), page reference and notes
  content(spec, correction = false, master = 'ATLAS_CONTENT') {
    const s = this.slide(master);
    if (plain(spec.title).length > 58) console.warn(`  ! long title (${plain(spec.title).length}): ${spec.title}`);
    s.addText(spec.title, { placeholder: 'title' });
    let x = 0.6;
    if (spec.tag) x += this.chip(s, spec.tag, x, 0.26, TAGS[spec.tag] || 'tx2') + 0.12;
    if (correction) this.chip(s, '✓ CORRECTIE', x, 0.26, 'accent3');
    if (spec.page) s.addText(spec.page, { x: 9.73, y: 0.24, w: 3.0, h: 0.38, fontSize: 12, italic: true, color: master === 'ATLAS_DARK' ? 'bg2' : 'accent5', align: 'right', valign: 'middle', margin: 0, isTextBox: true });
    const notes = correction ? (spec.notesA || spec.notes) : spec.notes;
    if (notes) s.addNotes(notes);
    return s;
  }

  img(s, key, x, y, w, h, opts = {}) {
    if (!IMGS[key]) throw new Error('unknown image key: ' + key);
    const [iw, ih] = IMGS[key];
    // fit inside box, keep ratio
    let W = w; let Hh = (w * ih) / iw;
    if (Hh > h) { Hh = h; W = (h * iw) / ih; }
    const X = opts.align === 'left' ? x : x + (w - W) / 2;
    const Y = opts.valign === 'top' ? y : y + (h - Hh) / 2;
    s.addImage({ path: path.join(IMG_DIR, key + '.jpg'), x: X, y: Y, w: W, h: Hh, shadow: opts.noShadow ? undefined : shadow(), altText: opts.alt || 'Illustration du syllabus', objectName: 'illustration' });
    return { x: X, y: Y, w: W, h: Hh };
  }

  // tinted side card with a header and bullet lines
  aside(s, label, lines, color, x, y, w, h, icon = 'FaBullseye', mode = 'a') {
    s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color, transparency: 90 }, line: { color, width: 1, transparency: 40 }, objectName: 'aside' });
    s.addImage({ data: ico(icon, color), x: x + 0.2, y: y + 0.2, w: 0.32, h: 0.32 });
    s.addText(label, { x: x + 0.62, y: y + 0.17, w: w - 0.8, h: 0.38, fontSize: 14, bold: true, color, charSpacing: 1, margin: 0, valign: 'middle', isTextBox: true });
    const pt = fitSize(lines.map(plain), w - 0.4, h - 0.8, 18, 12, 6, 0.5, 'aside');
    const paras = lines.map((l) => ({ runs: parse(l, mode), opts: { bullet: { indent: 14 }, paraSpaceAfter: 6 } }));
    s.addText(flow(paras), { x: x + 0.18, y: y + 0.65, w: w - 0.36, h: h - 0.8, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
  }

  // ------------------------------------------------------------ COVER
  cover() {
    const m = this.m;
    this.section('Ouverture');
    const s = this.slide('ATLAS_COVER');
    this.chip(s, `SÉANCE ${this.nn} / 19`, 0.6, 0.7, 'accent1', 0.42, 14);
    if (m.time) {
      s.addText([{ text: m.sceneLabel || 'SÉQUENCE', options: { fontSize: 13, bold: true, color: 'bg2', charSpacing: 2, breakLine: true } }, { text: m.time, options: { fontSize: 30, bold: true, color: 'bg1', fontFace: HEAD } }],
        { x: 0.6, y: 1.3, w: 2.6, h: 0.85, margin: 0, valign: 'top', isTextBox: true });
    }
    const tl = plain(m.title).length;
    s.addText(m.title, tl > 34 ? { placeholder: 'title', fontSize: tl > 48 ? 30 : 34 } : { placeholder: 'title' });
    s.addText(flow([
      { runs: [{ text: m.subtitle || '', options: { italic: true } }], opts: { paraSpaceAfter: 10 } },
      { runs: [{ text: m.block || 'Néerlandais en situation', options: { bold: true } }], opts: {} },
      { runs: [{ text: m.pages, options: {} }], opts: {} },
    ]), { placeholder: 'body' });
    if (m.img) {
      const [iw, ih] = IMGS[m.img];
      const w = 5.6; const h = Math.min(4.6, (w * ih) / iw);
      this.img(s, m.img, 7.2, 3.75 - h / 2, w, h, { alt: 'Illustration du syllabus' });
    }
    if (m.coverNotes) s.addNotes(m.coverNotes);
  }

  // ------------------------------------------------------------ MISSION + AGENDA
  mission(spec) {
    const s = this.content({ title: 'Mission du jour', tag: 'PLAN', page: this.m.pages, notes: spec.notes });
    const cards = [
      ['EN FIN DE SÉANCE, JE SAIS…', spec.produce, 'FaBullseye', 'accent1'],
      ['LANGUE CIBLE', spec.language, 'FaLanguage', 'accent2'],
      ['COMPÉTENCES', spec.skills, 'FaComments', 'accent3'],
    ];
    const cy = [1.65, 3.43, 5.21];
    cards.forEach(([h, t, icon, c], i) => {
      const y = cy[i];
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: 0.6, y, w: 5.75, h: 1.6, rectRadius: 0.08, fill: { color: 'bg2' }, line: { color: BORDER, width: 0.75 } });
      s.addShape(this.S.OVAL, { x: 0.82, y: y + 0.22, w: 0.62, h: 0.62, fill: { color: c } });
      s.addImage({ data: ico(icon, 'FFFFFF'), x: 0.97, y: y + 0.37, w: 0.32, h: 0.32 });
      s.addText(h, { x: 1.62, y: y + 0.16, w: 4.55, h: 0.32, fontSize: 12, bold: true, color: c, charSpacing: 1, margin: 0, isTextBox: true });
      const pt = fitSize([plain(t)], 4.55, 1.05, 18, 13, 0, 0.5, 'mission');
      s.addText(parse(t), { x: 1.62, y: y + 0.48, w: 4.55, h: 1.02, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    });
    // agenda
    s.addText('DÉROULÉ', { x: 6.85, y: 1.6, w: 4, h: 0.35, fontSize: 13, bold: true, color: 'accent5', charSpacing: 2, margin: 0, isTextBox: true });
    const steps = spec.agenda;
    const total = steps.reduce((a, b) => a + (b[1] || 0), 0);
    s.addText(`≈ ${total} min (indicatif)`, { x: 9.73, y: 1.6, w: 3.0, h: 0.35, fontSize: 12, italic: true, color: 'accent5', align: 'right', margin: 0, isTextBox: true });
    const top = 2.05; const avail = 4.85; const rh = Math.min(0.62, avail / steps.length);
    steps.forEach(([label, min], i) => {
      const y = top + i * rh;
      s.addShape(this.S.OVAL, { x: 6.85, y: y + (rh - 0.42) / 2, w: 0.42, h: 0.42, fill: { color: 'tx2' } });
      s.addText(String(i + 1), { x: 6.85, y: y + (rh - 0.42) / 2, w: 0.42, h: 0.42, fontSize: 13, bold: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      s.addText(parse(label), { x: 7.42, y, w: 4.5, h: rh, fontSize: rh < 0.55 ? 15 : 16, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
      if (min) s.addText(`${min}'`, { x: 12.0, y, w: 0.73, h: rh, fontSize: 15, bold: true, color: 'accent1', align: 'right', valign: 'middle', margin: 0, isTextBox: true });
    });
  }

  // ------------------------------------------------------------ EXERCISE (question + correction)
  // items: string (auto-numbered) | {h} header | {t} plain line | {q, a} open question | {n:false, s} unnumbered
  exercise(spec) {
    const modes = spec.mode === 'q' ? ['q'] : spec.mode === 'a' ? ['a'] : spec.mode === 'show' ? ['show'] : ['q', 'a'];
    const side = spec.img || spec.expect || spec.traps || spec.aside;
    const W = side ? (spec.sideW ? 12.13 - spec.sideW - 0.35 : 7.85) : 12.13;
    let y = 1.62;
    let instrH = 0;
    if (spec.instr) {
      instrH = textH([plain(spec.instr)], W, 16, 0, 1.2, 0.5) + 0.08;
      y += instrH + 0.08;
    }
    const bodyH = 6.88 - y;
    const cols = spec.columns ? spec.columns.length : (spec.cols || 1);
    const colGap = 0.4;
    const colW = (W - colGap * (cols - 1)) / cols;
    const groups = spec.columns || (cols === 1 ? [spec.items] : split(spec.items, cols));
    const build = (items, mode, start = 0) => {
      const paras = []; const texts = [];
      let n = start;
      const numFmt = spec.numFmt || ((k) => `${k}.  `);
      for (const it of items) {
        if (typeof it === 'string') {
          n++;
          const pre = spec.number === false ? [] : [{ text: numFmt(n), options: { bold: true, color: 'tx2' } }];
          paras.push({ runs: [...pre, ...parse(it, mode === 'show' ? 'a' : mode)], opts: { paraSpaceAfter: spec.gap ?? 10 } });
          texts.push(plain(numFmt(n) + it));
        } else if (it.h) {
          paras.push({ runs: parse(it.h, 'a', { bold: true, color: it.color || 'tx2' }), opts: { paraSpaceAfter: 6, paraSpaceBefore: paras.length ? 8 : 0 } });
          texts.push(plain(it.h));
          if (it.reset !== false) n = 0;
        } else if (it.t !== undefined) {
          paras.push({ runs: parse(it.t, mode === 'show' ? 'a' : mode, it.style || {}), opts: { paraSpaceAfter: spec.gap ?? 10 } });
          texts.push(plain(it.t));
        } else if (it.q) {
          n++;
          const pre = spec.number === false ? [] : [{ text: numFmt(n), options: { bold: true, color: 'tx2' } }];
          paras.push({ runs: [...pre, ...parse(it.q, 'a')], opts: { paraSpaceAfter: mode === 'q' ? (spec.qGap ?? 14) : 4 } });
          texts.push(plain((spec.number === false ? '' : numFmt(n)) + it.q));
          if (mode !== 'q') {
            paras.push({ runs: [{ text: '→ ', options: { bold: true, color: 'accent3' } }, ...parse(it.a, 'a', { color: 'accent3' })], opts: { paraSpaceAfter: spec.gap ?? 12, indentLevel: 0 } });
            texts.push('→ ' + plain(it.a));
          } else if (spec.qSpace) {
            texts.push(''); paras.push({ runs: [{ text: ' ', options: {} }], opts: { paraSpaceAfter: 4 } });
          }
        }
      }
      return { paras, texts };
    };
    // size from the correction version (longest)
    let pt = spec.size;
    if (!pt) {
      pt = 24;
      for (const g of groups) {
        const { texts } = build(g, 'a');
        pt = Math.min(pt, fitSize(texts, colW, bodyH, spec.max || 26, spec.min || 14, (spec.gap ?? 10) + 2, 0.5, spec.title));
      }
    }
    // open questions: the question slide can use a bigger font than the correction
    let ptQ = pt;
    const hasQA = groups.some((g) => g.some((it) => it && it.q));
    if (hasQA && !spec.size) {
      ptQ = 26;
      for (const g of groups) {
        const { texts } = build(g, 'q');
        ptQ = Math.min(ptQ, fitSize(texts, colW, bodyH, Math.min(26, (spec.max || 24) + 2), 14, (spec.qGap ?? 14) + 2, 0.5, spec.title));
      }
      ptQ = Math.max(pt, ptQ);
    }
    for (const mode of modes) {
      const s = this.content(spec, mode === 'a' && (modes.length > 1 || !!spec.correction));
      const fpt = mode === 'q' ? ptQ : pt;
      if (spec.instr) s.addText(parse(spec.instr), { x: 0.6, y: 1.62, w: W, h: instrH, fontSize: 16, italic: true, color: 'accent5', margin: 0, valign: 'top', isTextBox: true });
      let start = 0;
      groups.forEach((g, i) => {
        const { paras } = build(g, mode, spec.restart ? 0 : start);
        start += g.filter((it) => typeof it === 'string' || it.q).length;
        s.addText(flow(paras), { x: 0.6 + i * (colW + colGap), y, w: colW, h: bodyH, fontSize: fpt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true, objectName: 'exercise' });
      });
      if (side) {
        const sw = spec.sideW || 3.93; const sx = 12.73 - sw;
        if (spec.img) this.img(s, spec.img, sx, 1.62, sw, spec.imgH || 3.0, { valign: 'top' });
        const top = spec.img ? 1.62 + (spec.imgH || 3.0) + 0.25 : 1.62;
        const box = mode === 'a' && spec.traps ? ['ATTENTION', spec.traps, 'accent6', 'FaExclamationTriangle']
          : spec.expect ? ['ATTENDU', spec.expect, 'accent5', 'FaBullseye']
            : spec.aside ? [spec.aside.label, spec.aside.lines, spec.aside.color || 'accent5', spec.aside.icon || 'FaLightbulb']
              : spec.traps && mode !== 'q' ? ['ATTENTION', spec.traps, 'accent6', 'FaExclamationTriangle'] : null;
        if (box && 6.88 - top > 1.2) this.aside(s, box[0], box[1], box[2], sx, top, sw, 6.88 - top, box[3]);
      }
    }
  }

  // ------------------------------------------------------------ MCQ (question + correction)
  mcq(spec) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    for (const mode of spec.mode === 'q' ? ['q'] : ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const qpt = fitSize([plain(spec.q)], 12.13, 1.0, 22, 16, 0, 0.5, 'mcq-q');
      s.addText(parse(spec.q), { x: 0.6, y: 1.62, w: 12.13, h: 1.0, fontSize: qpt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
      const n = spec.opts.length; const rows = Math.ceil(n / 2);
      const cw = 5.9; const gx = 0.33; const top = 2.75; const ch = spec.why && mode === 'a' ? 1.08 : 1.35; const gy = 0.18;
      const optPt = Math.min(...spec.opts.map((o) => fitSize([plain(o)], cw - 1.15, ch - 0.15, 18, 14, 0, 0.5, 'mcq-opt')));
      spec.opts.forEach((o, i) => {
        const r = Math.floor(i / 2); const c = i % 2;
        const x = 0.6 + c * (cw + gx); const y = top + r * (ch + gy);
        const ok = mode === 'a' && i === spec.ans;
        const dim = mode === 'a' && i !== spec.ans;
        s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: cw, h: ch, rectRadius: 0.08, fill: { color: ok ? 'accent3' : 'bg2', transparency: ok ? 85 : 0 }, line: { color: ok ? HEX.accent3 : BORDER, width: ok ? 2 : 0.75 } });
        s.addShape(this.S.OVAL, { x: x + 0.2, y: y + (ch - 0.55) / 2, w: 0.55, h: 0.55, fill: { color: ok ? 'accent3' : dim ? 'accent5' : 'tx2', transparency: dim ? 50 : 0 } });
        s.addText(letters[i], { x: x + 0.2, y: y + (ch - 0.55) / 2, w: 0.55, h: 0.55, fontSize: 16, bold: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        s.addText(parse(o), { x: x + 0.95, y: y + 0.06, w: cw - 1.15, h: ch - 0.12, fontSize: optPt, color: dim ? 'accent5' : 'tx1', valign: 'middle', margin: 0, isTextBox: true });
        if (ok) s.addImage({ data: ico('FaCheck', 'accent3'), x: x + cw - 0.5, y: y + 0.12, w: 0.32, h: 0.32 });
      });
      if (mode === 'a' && spec.why) {
        const y = top + rows * (ch + gy) + 0.05;
        const h = 6.88 - y;
        s.addShape(this.S.ROUNDED_RECTANGLE, { x: 0.6, y, w: 12.13, h, rectRadius: 0.08, fill: { color: 'accent3', transparency: 92 }, line: { color: HEX.accent3, width: 0.75 } });
        const wpt = fitSize([plain(spec.why)], 11.3, h - 0.2, 18, 13, 0, 0.5, 'mcq-why');
        s.addText([{ text: 'Pourquoi ?  ', options: { bold: true, color: 'accent3' } }, ...parse(spec.why)], { x: 0.85, y: y + 0.08, w: 11.7, h: h - 0.16, fontSize: wpt, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
      }
    }
  }

  // ------------------------------------------------------------ TABLE (question + correction or show)
  table(spec) {
    const modes = spec.mode === 'show' || !hasAnswers(spec) ? ['show'] : spec.mode === 'a' ? ['a'] : ['q', 'a'];
    const x = spec.x || 0.6; const w = spec.w || 12.13;
    let y = 1.62;
    let introH = 0;
    if (spec.intro) { introH = textH([plain(spec.intro)], w, 16, 0, 1.2, 0.5) + 0.05; y += introH + 0.1; }
    const footH = spec.foot ? textH([plain(spec.foot)], w, 15, 0, 1.2, 0.5) + 0.12 : 0;
    const avail = (spec.maxH || 6.88 - y) - (footH ? footH + 0.15 : 0);
    const colW = spec.colW || spec.headers.map(() => w / spec.headers.length);
    // fit font: estimate row heights
    let pt = spec.size;
    const est = (p) => {
      let h = spec.headers ? 0.12 + (p / 72) * 1.25 + 0.12 : 0;
      for (const r of spec.rows) {
        let mx = 1;
        r.forEach((c, i) => { mx = Math.max(mx, linesFor(plain(c), colW[i] - 0.22, p, 0.52)); });
        h += mx * (p / 72) * 1.22 + 0.14;
      }
      return h;
    };
    if (!pt) { pt = 20; while (pt > (spec.min || 13) && est(pt) > avail) pt--; if (est(pt) > avail) console.warn(`  ! table tight: ${spec.title}`); }
    for (const mode of modes) {
      const s = this.content(spec, mode === 'a' && (modes.length > 1 || !!spec.correction));
      if (spec.intro) s.addText(parse(spec.intro), { x, y: 1.62, w, h: introH, fontSize: 16, italic: true, color: 'accent5', margin: 0, valign: 'top', isTextBox: true });
      const rows = [];
      if (spec.headers) rows.push(spec.headers.map((h, hi) => ({ text: h, options: { bold: true, color: 'bg1', fill: { color: (spec.headColors && spec.headColors[hi]) || spec.headColor || 'tx2' }, fontSize: Math.max(12, pt - 2), align: 'left', valign: 'middle' } })));
      spec.rows.forEach((r, ri) => {
        rows.push(r.map((c, ci) => {
          const bold = spec.boldCol === ci;
          return { text: parse(c, mode === 'show' ? 'a' : mode, bold ? { bold: true } : {}), options: { fill: { color: ri % 2 ? 'bg2' : 'bg1' }, color: (spec.colColor && spec.colColor[ci]) || 'tx1', valign: 'middle', align: (spec.align && spec.align[ci]) || 'left' } };
        }));
      });
      const rh = rowHeights(spec, colW, pt, avail);
      s.addTable(rows, { x, y, w, colW, rowH: rh, fontSize: pt, border: { type: 'solid', pt: 0.75, color: BORDER }, margin: [0.06, 0.1, 0.06, 0.1], autoPage: false });
      if (spec.foot) {
        const fy = 6.88 - footH;
        s.addText(parse(spec.foot), { x, y: fy, w, h: footH, fontSize: 15, color: 'accent5', italic: true, margin: 0, valign: 'bottom', isTextBox: true });
      }
    }
  }

  // ------------------------------------------------------------ CARDS (grammar formulas, etc.)
  cards(spec) {
    const s = this.content(spec, !!spec.correction);
    const n = spec.cards.length;
    let y = 1.62;
    if (spec.intro) {
      const ih = textH([plain(spec.intro)], 12.13, 18, 0, 1.2, 0.5);
      s.addText(parse(spec.intro), { x: 0.6, y, w: 12.13, h: ih, fontSize: 18, color: 'tx1', margin: 0, valign: 'top', isTextBox: true });
      y += ih + 0.15;
    }
    const footH = spec.foot ? Math.max(0.75, textH([plain(spec.foot.text)], 11.2, 16, 0, 1.2, 0.5) + 0.2) : 0;
    const bottom = 6.88 - (footH ? footH + 0.22 : 0);
    const perRow = spec.perRow || n;
    const rowsN = Math.ceil(n / perRow);
    const gap = 0.3; const cw = (12.13 - gap * (perRow - 1)) / perRow;
    const ch = (bottom - y - gap * (rowsN - 1)) / rowsN;
    // shared font size
    const fPt = spec.fSize || Math.min(...spec.cards.map((c) => (c.f ? fitSize([plain(c.f)], cw - 0.4, spec.fLines === 2 ? 0.95 : 0.56, 24, 15, 0, 0.55, 'card-f') : 24)));
    const bodyTexts = spec.cards.map((c) => (c.lines || []).map(plain));
    const bodyTop = (c) => 0.66 + (c.f ? 0.15 + textH([plain(c.f)], cw - 0.4, fPt, 0, 1.15, 0.55) : 0.05);
    const bPt = spec.bSize || Math.min(...spec.cards.map((c, i) => fitSize(bodyTexts[i].length ? bodyTexts[i] : [''], cw - 0.55, ch - bodyTop(c) - 0.1, 20, 13, 6, 0.48, 'card-b')));
    spec.cards.forEach((c, i) => {
      const r = Math.floor(i / perRow); const k = i % perRow;
      const x = 0.6 + k * (cw + gap); const cy = y + r * (ch + gap);
      const col = c.color || 'tx2';
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: cy, w: cw, h: ch, rectRadius: 0.1, fill: { color: 'bg1' }, line: { color: BORDER, width: 1 }, shadow: shadow() });
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: cy, w: cw, h: 0.55, rectRadius: 0.1, fill: { color: col } });
      s.addShape(this.S.RECTANGLE, { x, y: cy + 0.35, w: cw, h: 0.2, fill: { color: col }, line: { color: col, width: 0 } });
      s.addText(c.h, { x: x + 0.2, y: cy, w: cw - 0.4, h: 0.55, fontSize: 15, bold: true, color: 'bg1', valign: 'middle', margin: 0, charSpacing: 1, isTextBox: true });
      let by = cy + 0.66;
      if (c.f) {
        const fh = textH([plain(c.f)], cw - 0.4, fPt, 0, 1.15, 0.55);
        s.addText(parse(c.f, 'a', { color: col === 'tx2' ? 'tx2' : col }), { x: x + 0.2, y: by, w: cw - 0.4, h: fh, fontSize: fPt, bold: true, fontFace: HEAD, color: col, valign: 'top', margin: 0, isTextBox: true });
        by += fh + 0.15;
      }
      if (c.lines && c.lines.length) {
        const paras = c.lines.map((l) => ({ runs: parse(l, 'a'), opts: { paraSpaceAfter: 6, bullet: c.bullets === false ? false : { indent: 14 } } }));
        s.addText(flow(paras), { x: x + 0.2, y: by, w: cw - 0.4, h: cy + ch - by - 0.12, fontSize: bPt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
      }
    });
    if (spec.foot) this.footBox(s, spec.foot, 6.88 - footH, footH);
    return s;
  }

  footBox(s, foot, y, h) {
    const kind = foot.kind || 'trap';
    const col = kind === 'trap' ? 'accent6' : kind === 'tip' ? 'accent2' : 'accent3';
    const icon = kind === 'trap' ? 'FaExclamationTriangle' : kind === 'tip' ? 'FaLightbulb' : 'FaCheck';
    const label = foot.label || (kind === 'trap' ? 'Piège pour francophones' : kind === 'tip' ? 'Astuce' : 'À retenir');
    s.addShape(this.S.ROUNDED_RECTANGLE, { x: 0.6, y, w: 12.13, h, rectRadius: 0.08, fill: { color: col, transparency: 90 }, line: { color: col, width: 0.75, transparency: 30 } });
    s.addImage({ data: ico(icon, col), x: 0.82, y: y + (h - 0.36) / 2, w: 0.36, h: 0.36 });
    const pt = fitSize([label + ' — ' + plain(foot.text)], 11.2, h - 0.12, 17, 13, 0, 0.5, 'foot');
    s.addText([{ text: label + ' — ', options: { bold: true, color: col } }, ...parse(foot.text)], { x: 1.35, y: y + 0.04, w: 11.25, h: h - 0.08, fontSize: pt, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
  }

  // ------------------------------------------------------------ COMPARE (two columns)
  compare(spec) {
    const s = this.content(spec, !!spec.correction);
    let y = 1.62;
    if (spec.intro) {
      const ih = textH([plain(spec.intro)], 12.13, 18, 0, 1.2, 0.5);
      s.addText(parse(spec.intro), { x: 0.6, y, w: 12.13, h: ih, fontSize: 18, color: 'tx1', margin: 0, valign: 'top', isTextBox: true });
      y += ih + 0.15;
    }
    const footH = spec.foot ? Math.max(0.75, textH([plain(spec.foot.text)], 11.2, 16, 0, 1.2, 0.5) + 0.2) : 0;
    const bottom = 6.88 - (footH ? footH + 0.22 : 0);
    const mid = 0.7; const cw = (12.13 - mid) / 2; const h = bottom - y;
    const sides = [spec.left, spec.right];
    const pt = Math.min(...sides.map((c) => fitSize(c.items.map(plain), cw - 0.5, h - 1.0, spec.max || 20, 13, 8, 0.5, 'compare')));
    sides.forEach((c, i) => {
      const x = 0.6 + i * (cw + mid);
      const col = c.color || (i ? 'accent3' : 'accent6');
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: cw, h, rectRadius: 0.1, fill: { color: col, transparency: 92 }, line: { color: col, width: 1.25 } });
      if (c.icon) s.addImage({ data: ico(c.icon, col), x: x + 0.25, y: y + 0.22, w: 0.42, h: 0.42 });
      s.addText(parse(c.h), { x: x + (c.icon ? 0.8 : 0.25), y: y + 0.15, w: cw - 1.0, h: 0.6, fontSize: 20, bold: true, color: col, valign: 'middle', margin: 0, fontFace: HEAD, isTextBox: true });
      const paras = c.items.map((l) => ({ runs: parse(l, 'a'), opts: { paraSpaceAfter: 8, bullet: c.bullets === false ? false : { indent: 16 } } }));
      s.addText(flow(paras), { x: x + 0.25, y: y + 0.9, w: cw - 0.5, h: h - 1.05, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    });
    s.addShape(this.S.OVAL, { x: 0.6 + cw + (mid - 0.56) / 2, y: y + h / 2 - 0.28, w: 0.56, h: 0.56, fill: { color: 'tx2' } });
    s.addText(spec.mid || 'vs', { x: 0.6 + cw + (mid - 0.56) / 2, y: y + h / 2 - 0.28, w: 0.56, h: 0.56, fontSize: spec.mid && spec.mid.length > 2 ? 16 : 14, bold: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
    if (spec.foot) this.footBox(s, spec.foot, 6.88 - footH, footH);
    return s;
  }

  // ------------------------------------------------------------ TRAPS (wrong → right)
  traps(spec) {
    const s = this.content(spec, false);
    const rows = spec.rows; const n = rows.length;
    let y = 1.65;
    if (spec.intro) {
      const ih = textH([plain(spec.intro)], 12.13, 17, 0, 1.2, 0.5);
      s.addText(parse(spec.intro), { x: 0.6, y, w: 12.13, h: ih, fontSize: 17, color: 'accent5', italic: true, margin: 0, valign: 'top', isTextBox: true });
      y += ih + 0.12;
    }
    const hasWhy = rows.some((r) => r[2]);
    const cw = hasWhy ? [4.25, 4.25, 3.63] : [6.065, 6.065];
    const avail = 6.88 - y; const gap = 0.12;
    let pt = 20;
    const rowH = (p) => rows.map((r) => Math.max(...r.map((c, i) => (c ? linesFor(plain(c), cw[i] - 0.75, p, 0.5) : 1))) * (p / 72) * 1.2 + 0.24);
    while (pt > 13 && rowH(pt).reduce((a, b) => a + b, 0) + gap * (n - 1) > avail) pt--;
    const hs = rowH(pt);
    const scale = Math.min(1.35, (avail - gap * (n - 1)) / hs.reduce((a, b) => a + b, 0));
    rows.forEach((r, i) => {
      const h = hs[i] * scale;
      let x = 0.6;
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: 0.6, y, w: 12.13, h, rectRadius: 0.06, fill: { color: i % 2 ? 'bg1' : 'bg2' }, line: { color: BORDER, width: 0.5 } });
      [[r[0], 'accent6', 'FaTimes', true], [r[1], 'accent3', 'FaCheck', false], [r[2], 'accent5', null, false]].forEach(([t, col, icon, strike], k) => {
        if (k >= cw.length) return;
        if (t) {
          if (icon) s.addImage({ data: ico(icon, col), x: x + 0.15, y: y + h / 2 - 0.15, w: 0.3, h: 0.3 });
          const base = k === 0 ? { color: 'accent6', strike: 'sngStrike' } : k === 1 ? { color: 'tx1' } : { color: 'accent5', italic: true };
          s.addText(parse(t, 'a', base), { x: x + (icon ? 0.55 : 0.15), y, w: cw[k] - (icon ? 0.65 : 0.25), h, fontSize: k === 2 ? Math.max(13, pt - 2) : pt, valign: 'middle', margin: 0, isTextBox: true });
        }
        x += cw[k];
      });
      y += h + gap;
    });
  }

  // ------------------------------------------------------------ KEY IDEA (big statement)
  keyIdea(spec) {
    const s = this.slide('ATLAS_DARK');
    s.addText(spec.title || ' ', { placeholder: 'title' });
    if (spec.tag) this.chip(s, spec.tag, 0.6, 0.26, TAGS[spec.tag] || 'accent1');
    if (spec.page) s.addText(spec.page, { x: 9.73, y: 0.24, w: 3.0, h: 0.38, fontSize: 12, italic: true, color: 'bg2', align: 'right', valign: 'middle', margin: 0, isTextBox: true });
    s.addImage({ data: ico(spec.icon || 'FaLightbulb', 'accent1'), x: 0.6, y: 2.0, w: 0.75, h: 0.75 });
    const pt = fitSize([plain(spec.text)], 10.9, 2.6, 36, 24, 0, 0.55, 'key');
    const th = Math.min(2.7, textH([plain(spec.text)], 10.9, pt, 0, 1.2, 0.55) + 0.1);
    s.addText(parse(spec.text, 'a'), { x: 1.75, y: 1.85, w: 10.98, h: th, fontSize: pt, fontFace: HEAD, bold: true, color: 'bg1', valign: 'top', margin: 0, isTextBox: true });
    if (spec.sub) {
      const paras = (Array.isArray(spec.sub) ? spec.sub : [spec.sub]).map((l) => ({ runs: parse(l, 'a'), opts: { paraSpaceAfter: 8 } }));
      const spt = fitSize((Array.isArray(spec.sub) ? spec.sub : [spec.sub]).map(plain), 10.9, 2.0, 20, 14, 8, 0.5, 'key-sub');
      const sy = Math.max(1.85 + th + 0.45, 3.3);
      s.addText(flow(paras), { x: 1.75, y: sy, w: 10.98, h: 6.75 - sy, fontSize: spt, color: 'bg2', valign: 'top', margin: 0, isTextBox: true });
    }
    if (spec.notes) s.addNotes(spec.notes);
  }

  // ------------------------------------------------------------ SCENE (image + narrative)
  scene(spec) {
    const s = this.content(spec, false);
    const r = this.img(s, spec.img, 0.6, 1.65, 6.6, 5.1, { valign: 'top', align: 'left', alt: spec.alt });
    const x = r.x + r.w + 0.45; const w = 12.73 - x;
    let y = 1.65;
    if (spec.time) {
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: 1.75, h: 0.95, rectRadius: 0.08, fill: { color: 'tx2' } });
      s.addText([{ text: spec.sceneLabel || 'SCENE', options: { fontSize: 11, bold: true, color: 'bg2', charSpacing: 2, breakLine: true } }, { text: spec.time, options: { fontSize: 24, bold: true, color: 'bg1', fontFace: HEAD } }], { x, y: y + 0.05, w: 1.75, h: 0.85, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      y += 1.15;
    }
    const paras = spec.text.map((t) => ({ runs: parse(t, 'a'), opts: { paraSpaceAfter: 10 } }));
    const qH = spec.ask ? textH([plain(spec.ask)], w - 0.4, 17, 0, 1.2, 0.5) + 0.65 : 0;
    const avail = 6.88 - y - (qH ? qH + 0.2 : 0);
    const pt = fitSize(spec.text.map(plain), w, avail, 20, 14, 10, 0.5, 'scene');
    s.addText(flow(paras), { x, y, w, h: avail, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    if (spec.ask) {
      const qy = 6.88 - qH;
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: qy, w, h: qH, rectRadius: 0.08, fill: { color: 'accent1', transparency: 88 }, line: { color: HEX.accent1, width: 1 } });
      s.addText('QUESTION À LA CLASSE', { x: x + 0.2, y: qy + 0.1, w: w - 0.4, h: 0.32, fontSize: 12, bold: true, color: 'accent1', charSpacing: 1, margin: 0, isTextBox: true });
      s.addText(parse(spec.ask), { x: x + 0.2, y: qy + 0.42, w: w - 0.4, h: qH - 0.5, fontSize: 17, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    }
  }

  // ------------------------------------------------------------ DIALOGUE
  dialogue(spec) {
    const s = this.content(spec, false);
    const colors = { EMMA: 'D9700F', PIETER: 'accent2', SARAH: 'accent3', JANSSENS: 'tx2', 'MENEER JANSSENS': 'tx2', A: 'accent2', B: 'accent1', ...(spec.colors || {}) };
    const nice = (w) => w.split(' ').map((x) => x.charAt(0) + x.slice(1).toLowerCase()).join(' ');
    const paras = spec.lines.map(([who, line, num]) => ({ runs: [
      { text: (num ? num + '  ' : ''), options: { color: 'accent5', fontSize: 12 } },
      { text: nice(who) + ' :  ', options: { bold: true, color: colors[who] || 'tx2' } },
      ...parse(line, 'a'),
    ], opts: { paraSpaceAfter: 8 } }));
    const w = spec.img || spec.legend ? 8.0 : 12.13;
    const pt = fitSize(spec.lines.map((l) => (l[2] || '') + '  ' + l[0] + ': ' + plain(l[1])), w, 5.2, spec.max || 22, 14, 8, 0.5, 'dialogue');
    s.addText(flow(paras), { x: 0.6, y: 1.65, w, h: 5.2, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    if (spec.img) this.img(s, spec.img, 8.95, 1.65, 3.78, 2.6, { valign: 'top' });
    if (spec.legend) {
      const ly = spec.img ? 4.55 : 1.65;
      this.aside(s, spec.legend.label || 'À REPÉRER', spec.legend.lines, spec.legend.color || 'accent5', 8.95, ly, 3.78, 6.88 - ly, spec.legend.icon || 'FaSearch');
    }
  }

  // ------------------------------------------------------------ EXHIBIT (document)
  exhibit(spec) {
    const s = this.content(spec, false);
    const w = spec.side ? 8.1 : 12.13;
    s.addShape(this.S.RECTANGLE, { x: 0.6, y: 1.62, w, h: 5.26, fill: { color: 'bg1' }, line: { color: HEX.accent5, width: 1, dashType: 'dash' } });
    const cwid = this.chip(s, spec.label, 0.85, 1.8, 'accent5');
    s.addText(spec.docTitle, { x: 0.85 + cwid + 0.25, y: 1.76, w: w - cwid - 0.6, h: 0.42, fontSize: 18, bold: true, color: 'accent5', fontFace: HEAD, margin: 0, valign: 'middle', isTextBox: true });
    const lines = spec.lines;
    const paras = lines.map((l) => (Array.isArray(l)
      ? { runs: [{ text: l[0] + '   ', options: { bold: true, color: 'tx2' } }, ...parse(l[1], 'a')], opts: { paraSpaceAfter: spec.gap ?? 8 } }
      : { runs: parse(l, 'a'), opts: { paraSpaceAfter: spec.gap ?? 8 } }));
    const pt = spec.size || fitSize(lines.map((l) => (Array.isArray(l) ? l[0] + '   ' + plain(l[1]) : plain(l))), w - 0.5, 4.45, 21, 14, (spec.gap ?? 8) + 1, 0.5, 'exhibit');
    s.addText(flow(paras), { x: 0.85, y: 2.35, w: w - 0.5, h: 4.4, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    if (spec.side) {
      if (spec.side.img) this.img(s, spec.side.img, 9.05, 1.62, 3.68, 2.5, { valign: 'top' });
      if (spec.side.lines) {
        const top = spec.side.img ? 4.35 : 1.62;
        this.aside(s, spec.side.label || 'À REPÉRER', spec.side.lines, spec.side.color || 'accent1', 9.05, top, 3.68, 6.88 - top, spec.side.icon || 'FaSearch');
      }
    }
  }

  // ------------------------------------------------------------ EXPERT GRID (2x2), question + correction
  experts(spec) {
    const modes = spec.cards.some((c) => c.a) ? ['q', 'a'] : ['show'];
    for (const mode of modes) {
      const s = this.content(spec, mode === 'a');
      let top = 1.62;
      if (spec.intro) {
        const ih = textH([plain(spec.intro)], 12.13, 16, 0, 1.2, 0.5);
        s.addText(parse(spec.intro), { x: 0.6, y: top, w: 12.13, h: ih, fontSize: 16, italic: true, color: 'accent5', margin: 0, valign: 'top', isTextBox: true });
        top += ih + 0.12;
      }
      const n = spec.cards.length; const per = n > 2 ? 2 : n; const rowsN = Math.ceil(n / per);
      const gap = 0.25; const cw = (12.13 - gap * (per - 1)) / per; const ch = (6.88 - top - gap * (rowsN - 1)) / rowsN;
      const texts = spec.cards.map((c) => [plain(c.q), ...(mode === 'a' && c.a ? ['→ ' + plain(c.a)] : [])]);
      const pt = Math.min(...texts.map((t) => fitSize(t, cw - 1.35, ch - 0.25, mode === 'a' ? 18 : 22, 12, 6, 0.5, 'expert')));
      spec.cards.forEach((c, i) => {
        const r = Math.floor(i / per); const k = i % per;
        const x = 0.6 + k * (cw + gap); const y = top + r * (ch + gap);
        const e = { ...(PEOPLE[c.who] || { c: HEX.dk2, icon: 'FaUser' }), ...(c.color ? { c: SCHEME2HEX[c.color] || c.color } : {}), ...(c.icon ? { icon: c.icon } : {}) };
        const lab = c.label || c.who;
        s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: cw, h: ch, rectRadius: 0.08, fill: { color: 'bg2' }, line: { color: BORDER, width: 0.75 } });
        s.addShape(this.S.ROUNDED_RECTANGLE, { x: x + 0.15, y: y + 0.15, w: 0.95, h: 0.95, rectRadius: 0.08, fill: { color: e.c } });
        s.addImage({ data: ico(e.icon, 'FFFFFF'), x: x + 0.44, y: y + 0.23, w: 0.38, h: 0.38 });
        s.addText(lab, { x: x + 0.15, y: y + 0.66, w: 0.95, h: 0.36, fontSize: lab.length > 6 ? 10 : 13, bold: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        const paras = [{ runs: parse(c.q, 'a'), opts: { paraSpaceAfter: 6 } }];
        if (mode === 'a' && c.a) paras.push({ runs: [{ text: '→ ', options: { bold: true, color: 'accent3' } }, ...parse(c.a, 'a', { color: 'accent3' })], opts: { paraSpaceAfter: 0 } });
        s.addText(flow(paras), { x: x + 1.25, y: y + 0.12, w: cw - 1.4, h: ch - 0.24, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
      });
    }
  }

  // ------------------------------------------------------------ LEGEND (tag chip + explanation rows)
  legend(spec) {
    const s = this.content(spec, false);
    const items = spec.items; const cols = 2; const per = Math.ceil(items.length / cols);
    const gap = 0.35; const cw = (12.13 - gap) / cols; const top = 1.65; const rh = (6.88 - top) / per;
    const pt = Math.min(...items.map((it) => fitSize([plain(it[2])], cw - 2.45, rh - 0.12, 18, 12, 0, 0.5, 'legend')));
    items.forEach(([tag, color, text], i) => {
      const c = Math.floor(i / per); const r = i % per;
      const x = 0.6 + c * (cw + gap); const y = top + r * rh;
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: y + 0.05, w: cw, h: rh - 0.1, rectRadius: 0.06, fill: { color: r % 2 ? 'bg1' : 'bg2' }, line: { color: BORDER, width: 0.5 } });
      const col = color || TAGS[tag] || 'tx2';
      s.addText(tag, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.05, x: x + 0.15, y: y + rh / 2 - 0.19, w: 2.05, h: 0.38, fill: { color: col }, color: 'bg1', bold: true, fontSize: 11, align: 'center', valign: 'middle', margin: 0, charSpacing: 1 });
      s.addText(parse(text), { x: x + 2.38, y: y + 0.07, w: cw - 2.5, h: rh - 0.14, fontSize: pt, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
    });
  }

  // ------------------------------------------------------------ CHECKLIST
  checklist(spec) {
    const s = this.content(spec, false);
    let y = 1.62;
    if (spec.intro) {
      const ih = textH([plain(spec.intro)], 12.13, 17, 0, 1.2, 0.5);
      s.addText(parse(spec.intro), { x: 0.6, y, w: 12.13, h: ih, fontSize: 17, italic: true, color: 'accent5', margin: 0, valign: 'top', isTextBox: true });
      y += ih + 0.12;
    }
    const items = spec.items; const n = items.length;
    const cols = spec.cols || (n > 6 ? 2 : 1);
    const per = Math.ceil(n / cols); const gap = 0.3; const cw = (12.13 - gap * (cols - 1)) / cols;
    const rh = Math.min(0.85, (6.88 - y) / per);
    const pt = Math.min(...items.map((t) => fitSize([plain(t)], cw - 0.95, rh - 0.08, 19, 13, 0, 0.5, 'check')));
    items.forEach((t, i) => {
      const c = Math.floor(i / per); const r = i % per;
      const x = 0.6 + c * (cw + gap); const yy = y + r * rh;
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: yy + 0.04, w: cw, h: rh - 0.08, rectRadius: 0.06, fill: { color: r % 2 ? 'bg1' : 'bg2' }, line: { color: BORDER, width: 0.5 } });
      s.addImage({ data: ico('FaRegSquare', spec.boxColor || 'tx2'), x: x + 0.2, y: yy + rh / 2 - 0.17, w: 0.34, h: 0.34 });
      s.addText(parse(t, 'a'), { x: x + 0.72, y: yy + 0.04, w: cw - 0.85, h: rh - 0.08, fontSize: pt, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
    });
  }

  // ------------------------------------------------------------ PROCESS / STEPS (horizontal)
  steps(spec) {
    const s = this.content(spec, false);
    let y = 1.62;
    if (spec.intro) {
      const ih = textH([plain(spec.intro)], 12.13, 18, 0, 1.2, 0.5);
      s.addText(parse(spec.intro), { x: 0.6, y, w: 12.13, h: ih, fontSize: 18, color: 'tx1', margin: 0, valign: 'top', isTextBox: true });
      y += ih + 0.2;
    }
    const n = spec.steps.length; const gap = 0.32; const cw = (12.13 - gap * (n - 1)) / n;
    const footH = spec.foot ? Math.max(0.75, textH([plain(spec.foot.text)], 11.2, 16, 0, 1.2, 0.5) + 0.2) : 0;
    const h = 6.88 - y - (footH ? footH + 0.25 : 0);
    const pt = Math.min(...spec.steps.map((st) => fitSize((st.lines || []).map(plain), cw - 0.3, h - 1.95, 17, 12, 6, 0.5, 'steps')));
    spec.steps.forEach((st, i) => {
      const x = 0.6 + i * (cw + gap);
      const col = st.color || 'tx2';
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: cw, h, rectRadius: 0.1, fill: { color: 'bg2' }, line: { color: BORDER, width: 0.75 } });
      s.addShape(this.S.OVAL, { x: x + cw / 2 - 0.36, y: y + 0.2, w: 0.72, h: 0.72, fill: { color: col } });
      s.addText(st.n || String(i + 1), { x: x + cw / 2 - 0.36, y: y + 0.2, w: 0.72, h: 0.72, fontSize: st.n && st.n.length > 2 ? 12 : 20, bold: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      s.addText(parse(st.h), { x: x + 0.12, y: y + 1.0, w: cw - 0.24, h: 0.75, fontSize: 17, bold: true, color: col, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      if (st.lines) {
        const paras = st.lines.map((l) => ({ runs: parse(l, 'a'), opts: { paraSpaceAfter: 6 } }));
        s.addText(flow(paras), { x: x + 0.15, y: y + 1.85, w: cw - 0.3, h: h - 1.95, fontSize: pt, color: 'tx1', valign: 'top', align: 'center', margin: 0, isTextBox: true });
      }
      if (i < n - 1) s.addImage({ data: ico('FaArrowRight', 'accent5'), x: x + cw + gap / 2 - 0.12, y: y + 0.44, w: 0.24, h: 0.24 });
    });
    if (spec.foot) this.footBox(s, spec.foot, 6.88 - footH, footH);
  }

  // ------------------------------------------------------------ TIMELINE (bars = background, dots = events)
  // axis: {from, to, ticks:[[value,label]]}; bars:[{from,to,label,color,row}], points:[{at,label,color,row}], now: value|null
  timeline(spec) {
    const s = this.content(spec, !!spec.correction);
    let y = 1.62;
    if (spec.intro) {
      const ih = textH([plain(spec.intro)], 12.13, 18, 0, 1.2, 0.5);
      s.addText(parse(spec.intro), { x: 0.6, y, w: 12.13, h: ih, fontSize: 18, color: 'tx1', margin: 0, valign: 'top', isTextBox: true });
      y += ih + 0.15;
    }
    const footH = spec.foot ? Math.max(0.75, textH([plain(spec.foot.text)], 11.2, 16, 0, 1.2, 0.5) + 0.2) : 0;
    const bottom = 6.88 - (footH ? footH + 0.22 : 0);
    const X0 = 1.0; const X1 = 12.4;
    const { from, to } = spec.axis;
    const px = (v) => X0 + ((v - from) / (to - from)) * (X1 - X0);
    const rowsAbove = Math.max(1, ...(spec.bars || []).map((b) => (b.row || 0) + 1));
    const ptRows = Math.max(1, ...(spec.points || []).map((p) => (p.row || 0) + 1));
    // layout: bars area on top, axis, points labels below
    const barH = 0.5; const barGap = 0.16;
    const axisY = Math.min(bottom - 0.6 - ptRows * 0.72, y + 0.3 + rowsAbove * (barH + barGap) + 0.25);
    (spec.bars || []).forEach((b) => {
      const by = axisY - 0.25 - ((b.row || 0) + 1) * (barH + barGap) + barGap;
      const col = b.color || 'accent2';
      const x1 = px(b.from); const x2 = px(b.to);
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: x1, y: by, w: Math.max(0.3, x2 - x1), h: barH, rectRadius: 0.08, fill: { color: col, transparency: b.open ? 55 : 15 }, line: { color: col, width: 1, dashType: b.open ? 'dash' : 'solid' } });
      const need = plain(b.label).length * ((b.size || 15) / 72) * 0.45 + 0.25;
      if (x2 - x1 >= need) {
        s.addText(parse(b.label, 'a'), { x: x1 + 0.08, y: by, w: x2 - x1 - 0.16, h: barH, fontSize: b.size || 15, bold: true, color: b.open ? 'tx1' : 'bg1', valign: 'middle', align: 'center', margin: 0, isTextBox: true });
      } else if (x2 + need + 0.2 <= 12.73 && !b.labelLeft) {
        s.addText(parse(b.label, 'a'), { x: x2 + 0.1, y: by, w: need + 0.1, h: barH, fontSize: b.size || 15, bold: true, color: 'tx1', valign: 'middle', align: 'left', margin: 0, isTextBox: true });
      } else {
        const lw = Math.min(need + 0.1, x1 - 0.7);
        s.addText(parse(b.label, 'a'), { x: x1 - lw - 0.1, y: by, w: lw, h: barH, fontSize: b.size || 15, bold: true, color: 'tx1', valign: 'middle', align: 'right', margin: 0, isTextBox: true });
      }
    });
    // axis
    s.addShape(this.S.LINE, { x: X0 - 0.3, y: axisY, w: X1 - X0 + 0.55, h: 0, line: { color: HEX.dk2, width: 2.5, endArrowType: 'triangle' } });
    (spec.axis.ticks || []).forEach(([v, label]) => {
      s.addShape(this.S.LINE, { x: px(v), y: axisY - 0.08, w: 0, h: 0.16, line: { color: HEX.dk2, width: 1.5 } });
      s.addText(label, { x: px(v) - 0.6, y: axisY + 0.1, w: 1.2, h: 0.3, fontSize: 12, color: 'accent5', align: 'center', margin: 0, isTextBox: true });
    });
    if (spec.now !== undefined && spec.now !== null) {
      const nx = px(spec.now);
      s.addShape(this.S.LINE, { x: nx, y: y + 0.1, w: 0, h: axisY - y - 0.1 + 0.2, line: { color: HEX.accent6, width: 2, dashType: 'dash' } });
      s.addText('NOW', { x: nx - 0.5, y: axisY + 0.1, w: 1.0, h: 0.3, fontSize: 13, bold: true, color: 'accent6', align: 'center', margin: 0, isTextBox: true });
    }
    (spec.points || []).forEach((p) => {
      const col = p.color || 'accent1';
      const cx = px(p.at);
      s.addShape(this.S.OVAL, { x: cx - 0.13, y: axisY - 0.13, w: 0.26, h: 0.26, fill: { color: col }, line: { color: 'FFFFFF', width: 1.5 } });
      const ly = axisY + 0.45 + (p.row || 0) * 0.72;
      s.addShape(this.S.LINE, { x: cx, y: axisY + 0.13, w: 0, h: ly - axisY - 0.13, line: { color: SCHEME2HEX[col] || col, width: 1, dashType: 'sysDot' } });
      const lw = p.w || 2.3;
      const lx = Math.min(Math.max(cx - lw / 2, 0.6), 12.73 - lw);
      s.addText(parse(p.label, 'a'), { x: lx, y: ly, w: lw, h: 0.66, fontSize: p.size || 14, color: 'tx1', align: 'center', valign: 'top', margin: 0, isTextBox: true });
    });
    if (spec.legend) {
      const ly = bottom - 0.42;
      let lx = 0.6;
      spec.legend.forEach(([kind, col, label]) => {
        if (kind === 'bar') s.addShape(this.S.ROUNDED_RECTANGLE, { x: lx, y: ly + 0.08, w: 0.5, h: 0.26, rectRadius: 0.05, fill: { color: col, transparency: 15 } });
        else s.addShape(this.S.OVAL, { x: lx + 0.12, y: ly + 0.08, w: 0.26, h: 0.26, fill: { color: col } });
        s.addText(parse(label), { x: lx + 0.6, y: ly, w: 5.2, h: 0.42, fontSize: 15, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
        lx += 6.05;
      });
    }
    if (spec.foot) this.footBox(s, spec.foot, 6.88 - footH, footH);
  }

  // ------------------------------------------------------------ CERTAINTY SCALE (modals)
  scale(spec) {
    const s = this.content(spec, false);
    const y = 2.72; const X0 = 0.9; const X1 = 12.4;
    const px = (v) => X0 + (v / 100) * (X1 - X0);
    const segs = [[0, 20, 'accent6'], [20, 40, 'accent1'], [40, 60, 'accent2'], [60, 80, 'accent4'], [80, 100, 'accent3']];
    segs.forEach(([a, b, c]) => s.addShape(this.S.RECTANGLE, { x: px(a), y, w: px(b) - px(a), h: 0.32, fill: { color: c, transparency: 35 }, line: { color: 'FFFFFF', width: 0 } }));
    s.addText(spec.left || '0 %', { x: X0, y: y + 0.38, w: 3, h: 0.3, fontSize: 12, color: 'accent5', margin: 0, isTextBox: true });
    s.addText(spec.right || '100 %', { x: X1 - 3, y: y + 0.38, w: 3, h: 0.3, fontSize: 12, color: 'accent5', align: 'right', margin: 0, isTextBox: true });
    s.addText(spec.scaleLabel || 'À quelle fréquence ?', { x: 0.6, y: 1.55, w: 6, h: 0.4, fontSize: 20, italic: true, color: 'accent5', margin: 0, isTextBox: true, fontFace: HEAD });
    const n = spec.marks.length; const cw = (12.13 - 0.2 * (n - 1)) / n;
    spec.marks.forEach((m, i) => {
      if (m.v !== null && m.v !== undefined) {
        const cx = px(m.v);
        s.addShape(this.S.ISOSCELES_TRIANGLE, { x: cx - 0.14, y: y - 0.3, w: 0.28, h: 0.24, fill: { color: 'tx2' }, rotate: 180 });
        s.addText(m.word, { x: cx - 0.8, y: y - 0.75, w: 1.6, h: 0.42, fontSize: 18, bold: true, color: 'tx2', align: 'center', valign: 'bottom', margin: 0, isTextBox: true, fontFace: HEAD });
      }
      const x = 0.6 + i * (cw + 0.2);
      const cy = 3.5;
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: cy, w: cw, h: 3.35, rectRadius: 0.08, fill: { color: 'bg2' }, line: { color: BORDER, width: 0.75 } });
      s.addText([{ text: m.word, options: { bold: true, fontSize: 22, color: 'tx2', fontFace: HEAD, breakLine: true } }, { text: m.pct, options: { fontSize: 15, color: 'accent1', bold: true } }], { x: x + 0.15, y: cy + 0.12, w: cw - 0.3, h: 0.85, margin: 0, valign: 'top', isTextBox: true });
      const lines = [m.ex, ...(m.fr ? ['//' + m.fr + '//'] : [])];
      const pt = fitSize(lines.map(plain), cw - 0.3, 2.2, 18, 12, 6, 0.5, 'scale');
      s.addText(flow(lines.map((l) => ({ runs: parse(l, 'a'), opts: { paraSpaceAfter: 6 } }))), { x: x + 0.15, y: cy + 1.0, w: cw - 0.3, h: 2.2, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    });
    if (spec.notes) s.addNotes(spec.notes);
  }

  // ------------------------------------------------------------ IMAGE slide
  picture(spec) {
    const s = this.content(spec, false);
    const capW = spec.caption ? 3.9 : 0;
    const r = this.img(s, spec.img, 0.6, 1.62, 12.13 - (capW ? capW + 0.35 : 0), 5.26, { valign: 'top', align: 'left' });
    if (spec.caption) {
      const x = r.x + r.w + 0.35; const w = 12.73 - x;
      this.aside(s, spec.capLabel || 'AU TABLEAU', spec.caption, spec.capColor || 'accent2', x, 1.62, w, 5.26, spec.capIcon || 'FaChalkboardTeacher');
    }
  }

  // ------------------------------------------------------------ VOICEMAIL
  voicemail(spec) {
    const s = this.content(spec, false);
    s.addShape(this.S.ROUNDED_RECTANGLE, { x: 0.6, y: 1.7, w: 12.13, h: 1.5, rectRadius: 0.1, fill: { color: 'accent2', transparency: 90 }, line: { color: HEX.accent2, width: 1.25 } });
    s.addShape(this.S.OVAL, { x: 0.9, y: 1.95, w: 1.0, h: 1.0, fill: { color: 'accent2' } });
    s.addImage({ data: ico('FaHeadphones', 'FFFFFF'), x: 1.15, y: 2.2, w: 0.5, h: 0.5 });
    s.addText([{ text: spec.who, options: { bold: true, fontSize: 26, color: 'accent2', fontFace: HEAD, breakLine: true } }, { text: spec.meta, options: { fontSize: 18, color: 'tx1' } }], { x: 2.2, y: 1.8, w: 10.3, h: 1.3, valign: 'middle', margin: 0, isTextBox: true });
    const n = spec.steps.length; const cw = (12.13 - 0.3 * (n - 1)) / n;
    spec.steps.forEach((st, i) => {
      const x = 0.6 + i * (cw + 0.3);
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: 3.55, w: cw, h: 3.3, rectRadius: 0.1, fill: { color: 'bg2' }, line: { color: BORDER, width: 0.75 } });
      s.addImage({ data: ico(st.icon, st.color || 'tx2'), x: x + 0.3, y: 3.8, w: 0.5, h: 0.5 });
      s.addText(st.h, { x: x + 0.95, y: 3.75, w: cw - 1.1, h: 0.6, fontSize: 19, bold: true, color: st.color || 'tx2', valign: 'middle', margin: 0, isTextBox: true });
      const pt = fitSize([plain(st.t)], cw - 0.6, 2.2, 18, 13, 0, 0.5, 'vm');
      s.addText(parse(st.t), { x: x + 0.3, y: 4.5, w: cw - 0.6, h: 2.2, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    });
  }

  // ------------------------------------------------------------ CLOSING
  closing(spec) {
    this.section('Clôture');
    const s = this.slide('ATLAS_DARK');
    s.addText(spec.title || 'Tot de volgende keer!', { placeholder: 'title' });
    this.chip(s, 'FIN DE SÉANCE', 0.6, 0.26, 'accent1');
    // cliffhanger box (navy-on-navy in booklet → light card here)
    if (spec.cliff) {
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: 0.6, y: 1.7, w: 6.6, h: 3.4, rectRadius: 0.1, fill: { color: 'bg1', transparency: 90 }, line: { color: HEX.lt2, width: 1 } });
      s.addText(spec.cliffLabel || 'LA PROCHAINE FOIS', { x: 0.9, y: 1.9, w: 6, h: 0.35, fontSize: 13, bold: true, color: 'accent1', charSpacing: 2, margin: 0, isTextBox: true });
      const pt = fitSize([plain(spec.cliff)], 6.0, 2.5, 24, 16, 0, 0.55, 'cliff');
      s.addText(parse(spec.cliff, 'a', { italic: true }), { x: 0.9, y: 2.35, w: 6.0, h: 2.6, fontSize: pt, color: 'bg1', fontFace: HEAD, valign: 'top', margin: 0, isTextBox: true });
    }
    // homework
    s.addShape(this.S.ROUNDED_RECTANGLE, { x: 7.55, y: 1.7, w: 5.18, h: 5.15, rectRadius: 0.1, fill: { color: 'bg1' } });
    s.addImage({ data: ico('FaClipboardList', 'accent1'), x: 7.8, y: 1.92, w: 0.4, h: 0.4 });
    s.addText(spec.homeworkLabel || 'POUR LA PROCHAINE SÉANCE', { x: 8.35, y: 1.9, w: 4.2, h: 0.42, fontSize: 14, bold: true, color: 'tx2', charSpacing: 1, valign: 'middle', margin: 0, isTextBox: true });
    const pt = fitSize(spec.homework.map(plain), 4.65, 4.1, 17, 13, 8, 0.5, 'homework');
    s.addText(flow(spec.homework.map((h) => ({ runs: parse(h, 'a'), opts: { bullet: { indent: 15 }, paraSpaceAfter: 8 } }))), { x: 7.8, y: 2.5, w: 4.7, h: 4.2, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    // exit ticket / next
    if (spec.exit) {
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: 0.6, y: 5.35, w: 6.6, h: 1.5, rectRadius: 0.1, fill: { color: 'accent1' } });
      s.addText([{ text: 'TICKET DE SORTIE  ', options: { bold: true, charSpacing: 1, fontSize: 13, breakLine: true } }, ...parse(spec.exit, 'a', { fontSize: 16 })], { x: 0.85, y: 5.45, w: 6.15, h: 1.3, color: 'bg1', valign: 'middle', margin: 0, isTextBox: true });
    }
    if (spec.notes) s.addNotes(spec.notes);
  }

  // ------------------------------------------------------------ LISTENING (teacher reads a text twice)
  listening(spec) { return this.voicemail(spec); }

  // ------------------------------------------------------------ IMAGIER (vocabulary pictures)
  // words: [{img, nl, fr, art: 'de'|'het'|null}]; perSlide (default 8, max 15); quiz: true → numbered pictures first, then words
  imagier(spec) {
    const words = spec.words; const per = Math.min(15, spec.perSlide || 8);
    const chunks = []; for (let i = 0; i < words.length; i += per) chunks.push(words.slice(i, i + per));
    const modes = spec.quiz ? ['q', 'a'] : ['a'];
    const cols = per <= 8 ? 4 : 5; const rows = Math.ceil(per / cols);
    const gx = 0.22; const gy = 0.18; const top = spec.intro ? 2.05 : 1.65; const bottom = 6.88;
    const tw = (12.13 - gx * (cols - 1)) / cols; const th = (bottom - top - gy * (rows - 1)) / rows;
    const labH = per <= 8 ? 0.78 : 0.62; const nlPt = per <= 8 ? 20 : 16; const frPt = per <= 8 ? 13 : 11;
    chunks.forEach((chunk, ci) => {
      for (const mode of modes) {
        const title = spec.title + (chunks.length > 1 ? ` (${ci + 1}/${chunks.length})` : '');
        const s = this.content({ ...spec, title, notes: mode === 'a' ? (spec.notesA || spec.notes) : spec.notes }, mode === 'a' && spec.quiz);
        if (spec.intro) s.addText(parse(spec.intro), { x: 0.6, y: 1.6, w: 12.13, h: 0.36, fontSize: 15, italic: true, color: 'accent5', margin: 0, valign: 'middle', isTextBox: true });
        chunk.forEach((w, i) => {
          const r = Math.floor(i / cols); const c = i % cols;
          const x = 0.6 + c * (tw + gx); const y = top + r * (th + gy);
          const artCol = w.art === 'het' ? 'accent4' : w.art === 'de' ? 'accent2' : 'tx2';
          s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: tw, h: th, rectRadius: 0.08, fill: { color: 'bg1' }, line: { color: mode === 'a' && w.art ? SCHEME2HEX[artCol] : BORDER, width: mode === 'a' && w.art ? 1.5 : 0.75 } });
          this.img(s, w.img, x + 0.08, y + 0.08, tw - 0.16, th - labH - 0.14, { noShadow: true, alt: w.fr || w.nl });
          const n = ci * per + i + 1;
          s.addShape(this.S.OVAL, { x: x + 0.1, y: y + 0.1, w: 0.4, h: 0.4, fill: { color: 'tx2' } });
          s.addText(String(n), { x: x + 0.1, y: y + 0.1, w: 0.4, h: 0.4, fontSize: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
          const runs = [];
          if (mode === 'a') {
            if (w.art) runs.push({ text: w.art + ' ', options: { bold: true, color: artCol, fontSize: nlPt } });
            runs.push({ text: w.nl, options: { bold: true, color: 'tx1', fontSize: nlPt, breakLine: !!w.fr } });
            if (w.fr) runs.push({ text: w.fr, options: { italic: true, color: 'accent5', fontSize: frPt } });
          } else if (spec.showFr && w.fr) {
            runs.push({ text: w.fr, options: { italic: true, color: 'accent5', fontSize: frPt + 2 } });
          } else {
            runs.push({ text: '…………', options: { color: 'accent5', fontSize: nlPt } });
          }
          s.addText(runs, { x: x + 0.06, y: y + th - labH - 0.04, w: tw - 0.12, h: labH, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        });
      }
    });
  }

  // ------------------------------------------------------------ PAIRS (faux-amis: A ≠ B)
  // pairs: [{a:{img, nl, fr, note}, b:{img, nl, fr, note}}], perSlide default 3
  pairs(spec) {
    const per = spec.perSlide || 3; const list = spec.pairs;
    const chunks = []; for (let i = 0; i < list.length; i += per) chunks.push(list.slice(i, i + per));
    chunks.forEach((chunk, ci) => {
      const s = this.content({ ...spec, title: spec.title + (chunks.length > 1 ? ` (${ci + 1}/${chunks.length})` : '') }, false);
      const top = 1.65; const gap = 0.2; const rh = (6.88 - top - gap * (per - 1)) / per;
      chunk.forEach((p, i) => {
        const y = top + i * (rh + gap);
        s.addShape(this.S.ROUNDED_RECTANGLE, { x: 0.6, y, w: 12.13, h: rh, rectRadius: 0.08, fill: { color: i % 2 ? 'bg1' : 'bg2' }, line: { color: BORDER, width: 0.5 } });
        [[p.a, 0.6], [p.b, 6.95]].forEach(([it, x0], k) => {
          const iw = Math.min(1.9, rh * 1.35);
          this.img(s, it.img, x0 + 0.12, y + 0.1, iw, rh - 0.2, { noShadow: true, alt: it.fr });
          const tx = x0 + 0.12 + iw + 0.2; const tw = 5.78 - iw - 0.4;
          const runs = [{ text: it.nl, options: { bold: true, fontSize: 20, color: k ? 'accent3' : 'tx2', fontFace: HEAD, breakLine: true } },
            { text: it.fr, options: { bold: true, fontSize: 16, color: 'tx1', breakLine: !!it.note } }];
          if (it.note) runs.push({ text: it.note, options: { italic: true, fontSize: 13, color: 'accent5' } });
          s.addText(runs, { x: tx, y: y + 0.05, w: tw, h: rh - 0.1, valign: 'middle', margin: 0, isTextBox: true });
        });
        s.addShape(this.S.OVAL, { x: 6.67 - 0.25, y: y + rh / 2 - 0.25, w: 0.5, h: 0.5, fill: { color: 'accent6' } });
        s.addText('≠', { x: 6.67 - 0.25, y: y + rh / 2 - 0.25, w: 0.5, h: 0.5, fontSize: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      });
    });
  }

  // ------------------------------------------------------------ BLOCKS (word order in coloured blocks)
  // rows: [{cells:[{t, role}], fr, label}]; roles: S V T M P F (fin) X (autre) N (négation) Q (mot interrogatif) C (conjonction)
  blocks(spec) {
    const ROLE = {
      S: ['tx2', 'sujet'], V: ['accent6', 'verbe'], T: ['accent2', 'tijd · quand'], M: ['accent3', 'manier · comment'],
      P: ['accent4', 'plaats · où'], F: ['accent1', 'fin'], X: ['accent5', ''], N: ['accent6', 'négation'], Q: [PURPLE, 'mot W'], C: [PURPLE, 'liaison'],
      O: ['accent5', 'objet'],
    };
    const s = this.content(spec, !!spec.correction);
    let y = 1.62;
    if (spec.intro) {
      const ih = textH([plain(spec.intro)], 12.13, 18, 0, 1.2, 0.5);
      s.addText(parse(spec.intro), { x: 0.6, y, w: 12.13, h: ih, fontSize: 18, color: 'tx1', margin: 0, valign: 'top', isTextBox: true });
      y += ih + 0.15;
    }
    const footH = spec.foot ? Math.max(0.75, textH([plain(spec.foot.text)], 11.2, 16, 0, 1.2, 0.5) + 0.2) : 0;
    const bottom = 6.88 - (footH ? footH + 0.22 : 0);
    const n = spec.rows.length; const hasFr = spec.rows.some((r) => r.fr);
    const rowH = Math.min(1.6, (bottom - y) / n);
    const cellH = Math.max(0.36, Math.min(0.72, rowH - (hasFr ? 0.6 : 0.3)));
    const fs = cellH >= 0.66 ? 22 : cellH >= 0.5 ? 19 : 16;
    spec.rows.forEach((r, i) => {
      const ry = y + i * rowH;
      const labW = r.label ? 1.7 : 0;
      if (r.label) s.addText(parse(r.label), { x: 0.6, y: ry + 0.26, w: labW - 0.1, h: cellH, fontSize: 14, bold: true, color: 'accent5', valign: 'middle', margin: 0, isTextBox: true });
      const widths = r.cells.map((c) => Math.max(0.75, plain(c.t).length * (fs / 72) * 0.52 + 0.36));
      const total = widths.reduce((a, b) => a + b, 0) + 0.12 * (widths.length - 1);
      const avail = 12.13 - labW; const k = total > avail ? avail / total : 1;
      let x = 0.6 + labW;
      r.cells.forEach((c, j) => {
        const [col, lab] = ROLE[c.role] || ROLE.X;
        const w = widths[j] * k;
        s.addText(c.lab !== undefined ? c.lab : lab, { x, y: ry, w, h: 0.24, fontSize: 10, color: col, bold: true, align: 'center', valign: 'bottom', margin: 0, isTextBox: true });
        s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: ry + 0.26, w, h: cellH, rectRadius: 0.06, fill: { color: col, transparency: c.role === 'X' || c.role === 'O' ? 75 : 12 }, line: { color: SCHEME2HEX[col] || col, width: 1 } });
        s.addText(parse(c.t), { x: x + 0.04, y: ry + 0.26, w: w - 0.08, h: cellH, fontSize: fs * Math.min(1, k + 0.1), bold: true, color: c.role === 'X' || c.role === 'O' ? 'tx1' : 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        x += w + 0.12 * k;
      });
      if (r.fr) s.addText(parse(r.fr, 'a', { italic: true }), { x: 0.6 + labW, y: ry + 0.29 + cellH, w: 12.13 - labW, h: 0.3, fontSize: 14, color: 'accent5', margin: 0, valign: 'middle', isTextBox: true });
    });
    if (spec.foot) this.footBox(s, spec.foot, 6.88 - footH, footH);
    return s;
  }

  // ------------------------------------------------------------ CHRONO (fluency round: fold, time, twice)
  chrono(spec) {
    const s = this.content(spec, false);
    const steps = spec.steps || ['**Pliez** la page sur la colonne de droite (néerlandais).', 'Votre voisin **chronomètre** : répondez à voix haute, **sans vous arrêter**.', '**Dépliez, corrigez**, puis faites un **second passage**.', 'Notez vos **deux temps** et votre **gain**.'];
    const pt = fitSize(steps.map(plain), 6.6, 4.9, 20, 14, 10, 0.5, 'chrono');
    s.addText(flow(steps.map((l, i) => ({ runs: [{ text: `${i + 1}  `, options: { bold: true, color: 'accent1' } }, ...parse(l)], opts: { paraSpaceAfter: 12 } }))), { x: 0.6, y: 1.75, w: 6.6, h: 4.95, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    const labels = spec.boxes || ['1e keer', '2e keer', 'Winst / gain'];
    s.addImage({ data: ico('FaStopwatch', 'accent1'), x: 9.35, y: 1.7, w: 1.1, h: 1.1 });
    labels.forEach((l, i) => {
      const y = 3.05 + i * 1.25;
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: 7.9, y, w: 4.83, h: 1.05, rectRadius: 0.08, fill: { color: i === 2 ? 'accent1' : 'bg2' }, line: { color: i === 2 ? HEX.accent1 : BORDER, width: 1 } });
      s.addText(l, { x: 8.1, y, w: 2.4, h: 1.05, fontSize: 20, bold: true, color: i === 2 ? 'bg1' : 'tx2', valign: 'middle', margin: 0, isTextBox: true });
      s.addText(i === 2 ? '…… s' : '…… min …… s', { x: 10.4, y, w: 2.2, h: 1.05, fontSize: 18, color: i === 2 ? 'bg1' : 'accent5', align: 'right', valign: 'middle', margin: 0, isTextBox: true });
    });
    if (spec.notes) s.addNotes(spec.notes);
  }

  async save(file) {
    await this.pres.writeFile({ fileName: file });
    await postProcess(file);
  }
}

// After pptxgenjs: (1) keep only the first <a:pPr> of each paragraph (pptxgenjs writes one per run);
// (2) write the course colours into the theme, so scheme colours resolve to them.
const SLOTS = ['dk1', 'lt1', 'dk2', 'lt2', 'accent1', 'accent2', 'accent3', 'accent4', 'accent5', 'accent6', 'hlink', 'folHlink'];
async function postProcess(file) {
  const zip = await JSZip.loadAsync(fs.readFileSync(file));
  const themePart = 'ppt/theme/theme1.xml';
  const scheme = `<a:clrScheme name="${THEME.name}">` + SLOTS.map((k) => `<a:${k}><a:srgbClr val="${THEME.colors[k]}"/></a:${k}>`).join('') + '</a:clrScheme>';
  const themeXml = (await zip.file(themePart).async('string'))
    .replace(/<a:clrScheme\b[\s\S]*?<\/a:clrScheme>/, () => scheme)
    .replace(/(<a:(?:theme|fontScheme)\b[^>]*?\bname=")[^"]*"/g, (_, head) => `${head}${THEME.name}"`);
  zip.file(themePart, themeXml);
  const PPR = /<a:pPr\b[^>]*?(?:\/>|>[\s\S]*?<\/a:pPr>)/g;
  for (const name of Object.keys(zip.files)) {
    if (!/^ppt\/slides\/slide\d+\.xml$/.test(name)) continue;
    let xml = await zip.file(name).async('string');
    xml = xml.replace(/<a:p>([\s\S]*?)<\/a:p>/g, (m, inner) => {
      let lead = '';
      const mm = inner.match(/^<a:pPr\b[^>]*?(?:\/>|>[\s\S]*?<\/a:pPr>)/);
      if (mm) { lead = mm[0]; inner = inner.slice(lead.length); }
      return '<a:p>' + lead + inner.replace(PPR, '') + '</a:p>';
    });
    zip.file(name, xml);
  }
  fs.writeFileSync(file, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
}

function split(items, n) {
  const per = Math.ceil(items.length / n); const out = [];
  for (let i = 0; i < n; i++) out.push(items.slice(i * per, (i + 1) * per));
  return out;
}
function rowHeights(spec, colW, p, avail) {
  const hs = [];
  if (spec.headers) hs.push(0.12 + (p / 72) * 1.25 + 0.12);
  for (const r of spec.rows) {
    let mx = 1;
    r.forEach((c, i) => { mx = Math.max(mx, linesFor(plain(c), colW[i] - 0.22, p, 0.52)); });
    hs.push(mx * (p / 72) * 1.22 + 0.14);
  }
  const sum = hs.reduce((a, b) => a + b, 0);
  const extra = Math.max(0, Math.min(spec.stretch ? 2 : 0.3, (avail - sum) / hs.length));
  return hs.map((h, i) => +(h + (i === 0 && spec.headers ? Math.min(extra, 0.1) : extra)).toFixed(3));
}
function hasAnswers(spec) {
  return spec.rows.some((r) => r.some((c) => /\[\[|\{\{|<</.test(c)));
}

module.exports = { Deck, prepIcons, PEOPLE, THEME };
