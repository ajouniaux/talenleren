// Light builders, modelled on the Séance 1 deck (2026_10_08 syllabus, lesson 1): white slides throughout,
// one idea per slide, large type, no footer, diagrams and illustrations instead of side boxes.
// Same palette, fonts and text-fitting helpers as lib.js.
const path = require('path');
const pptxgen = require('pptxgenjs');
const React = require('react');
const RDS = require('react-dom/server');
const sharp = require('sharp');
const FA = require('react-icons/fa');
const { THEME, IMGS, IMG_DIR, EXP, fitSize, textH, linesFor, flow, postProcess, shadow } = require('./lib');

const HEX = THEME.colors;
const MAGENTA = 'B4236A'; // past simple (as in the Séance 1 comparison slide)
const YELLOW = 'F7C03B';
const BORDER = 'D5DCE6';
const HEAD = '+mj-lt';
const SCHEME = { tx1: HEX.dk1, tx2: HEX.dk2, bg1: HEX.lt1, bg2: HEX.lt2, accent1: HEX.accent1, accent2: HEX.accent2, accent3: HEX.accent3, accent4: HEX.accent4, accent5: HEX.accent5, accent6: HEX.accent6 };
const hx = (c) => SCHEME[c] || c;

const L = 0.6; const R = 12.73; const W = 12.13; const BOTTOM = 6.9; const TOP = 1.95;

const TAGS = {
  SCENE: 'accent3', 'WARM-UP': 'accent2', VOCABULARY: 'accent3', 'WORD FILE': 'accent3', MINDMAP: 'accent2',
  GRAMMAR: 'tx2', 'YOUR MOVE': 'accent1', 'DRY RUN': 'accent2', 'FIELD NOTE': 'accent5', METHOD: 'accent5',
  LISTENING: 'accent2', READING: 'accent3', SPEAKING: 'accent4', PRONUNCIATION: 'accent4', GAME: MAGENTA,
  '+ EXTRA': 'tx2', PITFALL: 'accent6', 'END OF SESSION': 'accent1',
};

// ---------------------------------------------------------------- markup → runs
// **bold**  //italic//  [[answer]] (blank in question, green in correction)  {{wrong}} (red struck in correction)
// <<right>> (green in correction)  ^^blue^^ (past continuous)  ==magenta== (past simple)  ##orange##  %%purple%%
// !!red!!  ++green++  ~~navy~~  ___ (always a blank)
const MK = /(@@[\s\S]+?@@|\*\*[\s\S]+?\*\*|\[\[[\s\S]+?\]\]|\{\{[\s\S]+?\}\}|<<[\s\S]+?>>|\/\/[\s\S]+?\/\/|\^\^[\s\S]+?\^\^|==[\s\S]+?==|##[\s\S]+?##|%%[\s\S]+?%%|!![\s\S]+?!!|\+\+[\s\S]+?\+\+|~~[\s\S]+?~~|_{3,})/g;
const STYLE = { '^^': 'accent2', '==': MAGENTA, '##': 'accent1', '%%': 'accent4', '!!': 'accent6', '++': 'accent3', '~~': 'tx2' };
function blank(v) { return '…'.repeat(Math.min(16, Math.max(6, Math.round(plain(v).length * 0.6)))); }
function parse(str, mode = 'a', base = {}) {
  str = String(str);
  const out = [];
  let last = 0;
  for (const m of str.matchAll(MK)) {
    if (m.index > last) out.push({ text: str.slice(last, m.index), options: { ...base } });
    const t = m[0];
    const two = t.slice(0, 2);
    const v = t.length > 4 ? t.slice(2, -2) : t;
    if (two === '@@') { if (mode !== 'q') out.push(...parse(v, mode, { ...base, bold: true, color: 'accent3' })); }
    else if (two === '**') out.push(...parse(v, mode, { ...base, bold: true }));
    else if (two === '[[') {
      if (mode === 'q') out.push({ text: blank(v), options: { ...base, bold: false, italic: false, color: 'accent5' } });
      else out.push(...parse(v, mode, { ...base, bold: true, color: 'accent3' }));
    } else if (two === '{{') out.push(...parse(v, mode, mode === 'q' ? base : { ...base, color: 'accent6', strike: 'sngStrike' }));
    else if (two === '<<') out.push(...parse(v, mode, mode === 'q' ? base : { ...base, bold: true, color: 'accent3' }));
    else if (two === '//') out.push(...parse(v, mode, { ...base, italic: true }));
    else if (STYLE[two]) out.push(...parse(v, mode, { ...base, bold: true, color: STYLE[two] }));
    else out.push({ text: '……………', options: { ...base, color: 'accent5' } });
    last = m.index + t.length;
  }
  if (last < str.length) out.push({ text: str.slice(last), options: { ...base } });
  if (!out.length) out.push({ text: '', options: { ...base } });
  return out;
}
function plain(str) { return String(str).replace(/@@|\*\*|\[\[|\]\]|\{\{|\}\}|<<|>>|\/\/|\^\^|==|##|%%|!!|\+\+|~~/g, ''); }
function hasAnswers(items) { return items.some((it) => (typeof it === 'string' ? /\[\[|\{\{|<<|@@/.test(it) : !!(it && (it.a || /\[\[|\{\{|<<|@@/.test(it.t || ''))))); }

// ---------------------------------------------------------------- icons and portraits
const ICON_NAMES = ['FaHeadphones', 'FaPenNib', 'FaUsers', 'FaEye', 'FaEyeSlash', 'FaStopwatch', 'FaTheaterMasks', 'FaGavel',
  'FaTableTennis', 'FaSpellCheck', 'FaBullhorn', 'FaVolumeUp', 'FaVolumeMute', 'FaPencilAlt', 'FaCamera', 'FaLock', 'FaUserSecret',
  'FaHandPaper', 'FaTint', 'FaSearch', 'FaCheck', 'FaTimes', 'FaExclamationTriangle', 'FaLightbulb', 'FaArrowRight', 'FaArrowDown',
  'FaBookOpen', 'FaClipboardList', 'FaRegSquare', 'FaTrophy', 'FaComments', 'FaCommentDots', 'FaMicrophone', 'FaRandom', 'FaQuestion',
  'FaChalkboardTeacher', 'FaClock', 'FaFileAlt', 'FaIdBadge', 'FaRegAngry', 'FaRegSurprise', 'FaBed', 'FaUserTie', 'FaBroom',
  'FaServer', 'FaSitemap', 'FaBolt', 'FaHourglassHalf', 'FaBrain', 'FaUserFriends', 'FaPhoneAlt', 'FaRegCheckSquare', 'FaHandPointRight',
  'FaBullseye', 'FaLanguage', 'FaRegEye', 'FaFingerprint', 'FaPen', 'FaTv', 'FaMoon', 'FaCoffee', 'FaCar', 'FaShower', 'FaUtensils',
  'FaPlug', 'FaRegLightbulb', 'FaListOl', 'FaRunning', 'FaRegClock', 'FaWater', 'FaDoorOpen', 'FaCalculator', 'FaBalanceScale',
  'FaBuilding', 'FaFlag', 'FaFutbol', 'FaNewspaper', 'FaBoxOpen', 'FaTruck', 'FaEnvelopeOpen', 'FaPaperPlane', 'FaFileSignature',
  'FaBan', 'FaCheckDouble', 'FaThLarge', 'FaDice', 'FaPrint', 'FaLink', 'FaPuzzlePiece', 'FaKey', 'FaUserCheck'];
const ICON_COLORS = ['FFFFFF', HEX.dk2, HEX.dk1, HEX.accent1, HEX.accent2, HEX.accent3, HEX.accent4, HEX.accent5, HEX.accent6, MAGENTA, YELLOW];
const ICONS = {};
const PORTRAITS = {};
// circular crops of the characters, taken from the Scene 2 illustration: [image, left, top, size] in image pixels
const PORTRAIT_SRC = {
  MARK: ['s2_room', 262, 52, 100], IRIS: ['s2_room', 84, 226, 84], SAMUEL: ['s2_room', 566, 198, 80],
};
async function prepLight() {
  for (const n of ICON_NAMES) {
    if (!FA[n]) throw new Error('missing icon ' + n);
    for (const c of ICON_COLORS) {
      const svg = RDS.renderToStaticMarkup(React.createElement(FA[n], { color: '#' + c, size: 256 }));
      const buf = await sharp(Buffer.from(svg)).resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
      ICONS[n + '_' + c] = 'image/png;base64,' + buf.toString('base64');
    }
  }
  const size = 320;
  const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`);
  for (const [who, [img, left, top, side]] of Object.entries(PORTRAIT_SRC)) {
    const sq = await sharp(path.join(IMG_DIR, img + '.jpg')).extract({ left, top, width: side, height: side }).resize(size, size).png().toBuffer();
    const buf = await sharp(sq).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
    PORTRAITS[who] = 'image/png;base64,' + buf.toString('base64');
  }
}
function ico(name, color) {
  const k = name + '_' + hx(color);
  if (!ICONS[k]) throw new Error('icon not prepared: ' + k);
  return ICONS[k];
}

// ---------------------------------------------------------------- Deck
class LightDeck {
  constructor(meta) {
    this.m = meta;
    const p = (this.pres = new pptxgen());
    p.layout = 'LAYOUT_WIDE';
    p.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
    this.nn = String(meta.n).padStart(2, '0');
    p.author = 'A. Jouniaux';
    p.company = 'English UE 3';
    p.subject = 'Case File 01 — The night nobody heard';
    p.title = `Séance ${this.nn} — ${meta.title}`;
    this.S = p.shapes;
    p.defineSlideMaster({
      title: 'LIGHT', background: { color: HEX.lt1 },
      objects: [{ placeholder: { options: { name: 'title', type: 'title', x: L, y: 0.9, w: W, h: 0.75, fontSize: 32, bold: true, color: 'tx2', valign: 'middle', align: 'left', margin: 0 }, text: '' } }],
      slideNumber: { x: 12.13, y: 7.0, w: 0.6, h: 0.3, fontSize: 10, color: HEX.accent5, align: 'right' },
    });
    p.defineSlideMaster({
      title: 'LIGHT_COVER', background: { color: HEX.lt1 },
      objects: [{ placeholder: { options: { name: 'title', type: 'title', x: L, y: 2.75, w: 6.2, h: 1.75, fontSize: 40, bold: true, color: 'tx2', valign: 'top', align: 'left', margin: 0 }, text: '' } }],
    });
  }

  section(title) { this.pres.addSection({ title }); this.sec = title; }
  slide(master = 'LIGHT') { return this.pres.addSlide({ masterName: master, sectionTitle: this.sec }); }

  // ------------------------------------------------------------ primitives
  chip(s, text, x, y, color, h = 0.34, size = 12) {
    const w = 0.4 + text.length * (size / 12) * 0.125 + (/[^\x00-\x7F]/.test(text) ? 0.15 : 0);
    s.addText(text, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.05, x, y, w, h, fill: { color: hx(color) }, color: 'bg1', bold: true, fontSize: size, align: 'center', valign: 'middle', margin: 0, charSpacing: 1, objectName: 'tag' });
    return w;
  }
  box(s, x, y, w, h, color, o = {}) {
    s.addShape(this.S.ROUNDED_RECTANGLE, {
      x, y, w, h, rectRadius: o.r ?? 0.08,
      fill: o.fill ? { color: hx(o.fill) } : { color: hx(color), transparency: o.t ?? 90 },
      line: o.noLine ? { type: 'none' } : { color: hx(o.lineColor || color), width: o.line ?? 1, dashType: o.dash },
      shadow: o.shadow ? shadow() : undefined, objectName: o.name,
    });
  }
  ln(s, x1, y1, x2, y2, o = {}) {
    s.addShape(this.S.LINE, {
      x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1), h: Math.abs(y2 - y1), flipH: x2 < x1, flipV: y2 < y1,
      line: { color: hx(o.color || 'tx2'), width: o.width || 1.5, dashType: o.dash, endArrowType: o.arrow ? 'triangle' : undefined },
    });
  }
  icon(s, name, color, x, y, size) { s.addImage({ data: ico(name, color), x, y, w: size, h: size }); }
  circleIcon(s, name, color, x, y, d, iconColor = 'FFFFFF') {
    s.addShape(this.S.OVAL, { x, y, w: d, h: d, fill: { color: hx(color) }, line: { type: 'none' } });
    this.icon(s, name, iconColor, x + d * 0.25, y + d * 0.25, d * 0.5);
  }
  num(s, n, x, y, d, color = 'tx2', size = 14) {
    s.addText(String(n), { shape: this.S.OVAL, x, y, w: d, h: d, fill: { color: hx(color) }, line: { color: 'FFFFFF', width: 1.25 }, color: 'bg1', bold: true, fontSize: size, align: 'center', valign: 'middle', margin: 0 });
  }
  portrait(s, who, x, y, d, ring = 'tx2') {
    s.addShape(this.S.OVAL, { x: x - 0.03, y: y - 0.03, w: d + 0.06, h: d + 0.06, fill: { color: hx(ring) }, line: { type: 'none' } });
    s.addImage({ data: PORTRAITS[who], x, y, w: d, h: d, altText: `Portrait of ${who.toLowerCase()}` });
  }
  text(s, str, x, y, w, h, o = {}) {
    const { mode = 'a', base = {}, ...rest } = o;
    s.addText(parse(str, mode, base), { x, y, w, h, margin: 0, valign: 'top', color: 'tx1', isTextBox: true, ...rest });
  }
  paras(s, lines, x, y, w, h, o = {}) {
    const { mode = 'a', bullet = false, after = 8, fit = [20, 13], ...rest } = o;
    const pt = o.fontSize || fitSize(lines.map(plain), w - (bullet ? 0.25 : 0), h, fit[0], fit[1], after, 0.5, 'paras');
    const ps = lines.map((l) => ({ runs: parse(l, mode), opts: { paraSpaceAfter: after, bullet: bullet ? { indent: 15 } : undefined } }));
    s.addText(flow(ps), { x, y, w, h, margin: 0, valign: 'top', color: 'tx1', isTextBox: true, fontSize: pt, ...rest });
    return pt;
  }
  img(s, key, x, y, w, h, o = {}) {
    const [iw, ih] = IMGS[key];
    let Wd = w; let Hd = (w * ih) / iw;
    if (Hd > h) { Hd = h; Wd = (h * iw) / ih; }
    const X = o.align === 'left' ? x : o.align === 'right' ? x + w - Wd : x + (w - Wd) / 2;
    const Y = o.valign === 'top' ? y : y + (h - Hd) / 2;
    s.addImage({ path: path.join(IMG_DIR, key + '.jpg'), x: X, y: Y, w: Wd, h: Hd, shadow: o.noShadow ? undefined : shadow(), altText: o.alt || 'Illustration from the case file', objectName: 'illustration' });
    return { x: X, y: Y, w: Wd, h: Hd };
  }
  // content slide: tag chip(s), page reference, title, notes, optional instruction line; returns slide (s.y0 = first free y)
  content(spec, correction = false) {
    const s = this.slide();
    s.addText(spec.title, { placeholder: 'title' });
    let x = L;
    for (const t of [].concat(spec.tag || [])) x += this.chip(s, t, x, 0.42, TAGS[t] || 'tx2') + 0.12;
    if (correction) this.chip(s, '✓ CORRECTION', x, 0.42, 'accent3');
    if (spec.page) s.addText(spec.page, { x: 9.73, y: 0.4, w: 3.0, h: 0.38, fontSize: 12, italic: true, color: 'accent5', align: 'right', valign: 'middle', margin: 0, isTextBox: true });
    const notes = correction ? (spec.notesA || spec.notes) : spec.notes;
    if (notes) s.addNotes(notes);
    s.y0 = TOP;
    const instr = correction && spec.instrA !== undefined ? spec.instrA : spec.instr;
    if (instr) {
      const iw = spec.instrW || W;
      const ih = textH([plain(instr)], iw, 16, 0, 1.2, 0.5) + 0.04;
      this.text(s, instr, L, 1.78, iw, ih, { fontSize: 16, italic: true, color: 'accent5' });
      s.y0 = 1.78 + ih + 0.3;
    }
    return s;
  }
  // tinted strip at the bottom: kind keep (green, À retenir) | trap (red, Piège) | tip (blue, Astuce) | watch (orange)
  noteBox(s, note, y, h) {
    const kinds = { keep: ['accent3', 'FaCheck', 'À retenir'], trap: ['accent6', 'FaExclamationTriangle', 'Piège pour francophones'], tip: ['accent2', 'FaLightbulb', 'Astuce'], watch: ['accent1', 'FaExclamationTriangle', 'Watch out'] };
    const [col, icon, label] = kinds[note.kind || 'keep'];
    this.box(s, L, y, W, h, col, { t: 92, line: 1 });
    this.icon(s, note.icon || icon, col, L + 0.25, y + h / 2 - 0.2, 0.4);
    const lab = (note.label || label) + ' — ';
    const pt = fitSize([lab + plain(note.text)], W - 1.2, h - 0.16, 18, 13, 0, 0.5, 'note');
    s.addText([{ text: lab, options: { bold: true, color: col } }, ...parse(note.text)], { x: L + 0.85, y: y + 0.06, w: W - 1.1, h: h - 0.12, fontSize: pt, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
  }
  noteH(note) { return note ? Math.max(0.72, textH([plain(note.text) + ' xxxxxxxxxxxxxx'], W - 1.2, 17, 0, 1.2, 0.5) + 0.22) : 0; }

  // ------------------------------------------------------------ COVER (white)
  cover() {
    const m = this.m;
    this.section('Ouverture');
    const s = this.slide('LIGHT_COVER');
    this.chip(s, `SÉANCE ${this.nn} / 19`, L, 0.75, 'accent1', 0.4, 13);
    s.addShape(this.S.ROUNDED_RECTANGLE, { x: L, y: 1.42, w: 1.9, h: 1.0, rectRadius: 0.08, fill: { color: hx('tx2') }, line: { type: 'none' } });
    s.addText([{ text: m.sceneLabel, options: { fontSize: 11, bold: true, color: 'bg2', charSpacing: 3, breakLine: true } }, { text: m.time, options: { fontSize: 28, bold: true, color: 'bg1', fontFace: HEAD } }],
      { x: L, y: 1.47, w: 1.9, h: 0.9, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
    s.addText(m.coverTitle || m.title, m.coverSize ? { placeholder: 'title', fontSize: m.coverSize } : { placeholder: 'title' });
    this.text(s, m.subtitle, L, 4.6, 6.2, 0.9, { fontSize: 20, italic: true, color: 'accent5' });
    s.addText([{ text: 'Case File 01 — The night nobody heard', options: { bold: true, color: 'tx2', fontSize: 16, breakLine: true } }, { text: m.pages, options: { italic: true, color: 'accent5', fontSize: 14 } }],
      { x: L, y: 5.75, w: 6.2, h: 0.75, margin: 0, valign: 'top', isTextBox: true });
    this.img(s, m.img, 7.25, 1.2, 5.48, 5.3, { alt: 'Scene illustration from the case file' });
    if (m.coverNotes) s.addNotes(m.coverNotes);
  }

  // ------------------------------------------------------------ SCENE (image + narrative + ask the class)
  scene(spec) {
    const s = this.content(spec);
    const r = this.img(s, spec.img, L, TOP, 6.6, 4.95, { valign: 'top', align: 'left', alt: spec.alt });
    const x = r.x + r.w + 0.45; const w = R - x;
    let y = TOP;
    if (spec.time) {
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: 1.75, h: 0.95, rectRadius: 0.08, fill: { color: hx('tx2') }, line: { type: 'none' } });
      s.addText([{ text: spec.sceneLabel || 'SCENE', options: { fontSize: 11, bold: true, color: 'bg2', charSpacing: 2, breakLine: true } }, { text: spec.time, options: { fontSize: 24, bold: true, color: 'bg1', fontFace: HEAD } }], { x, y: y + 0.05, w: 1.75, h: 0.85, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      y += 1.2;
    }
    const qH = spec.ask ? textH([plain(spec.ask)], w - 0.45, 17, 0, 1.2, 0.56) + 0.62 : 0;
    const avail = BOTTOM - y - (qH ? qH + 0.2 : 0);
    this.paras(s, spec.text, x, y, w, avail, { after: 10, fit: [20, 14] });
    if (spec.ask) {
      const qy = BOTTOM - qH;
      this.box(s, x, qy, w, qH, 'accent1', { t: 90 });
      s.addText(spec.askLabel || 'ASK THE CLASS', { x: x + 0.22, y: qy + 0.12, w: w - 0.4, h: 0.3, fontSize: 12, bold: true, color: 'accent1', charSpacing: 1, margin: 0, isTextBox: true });
      this.text(s, spec.ask, x + 0.22, qy + 0.44, w - 0.44, qH - 0.5, { fontSize: 17 });
    }
  }

  // ------------------------------------------------------------ LIST exercise (question slide, then correction)
  // items: '... [[answer]] ...' | {q, a} open question | {h} sub-heading | {t} plain line
  list(spec) {
    const modes = spec.mode ? [spec.mode] : hasAnswers(spec.items) ? ['q', 'a'] : ['show'];
    const numFmt = spec.numFmt || ((k) => `${k}.  `);
    const build = (items, mode, start) => {
      const ps = []; const texts = []; let n = start;
      for (const it of items) {
        if (typeof it === 'string') {
          n++;
          const pre = spec.number === false ? [] : [{ text: numFmt(n), options: { bold: true, color: 'tx2' } }];
          ps.push({ runs: [...pre, ...parse(it, mode === 'show' ? 'a' : mode)], opts: { paraSpaceAfter: mode === 'q' ? (spec.qGap ?? 14) : (spec.gap ?? 10) } });
          texts.push(plain((spec.number === false ? '' : numFmt(n)) + it));
        } else if (it.h) {
          ps.push({ runs: parse(it.h, 'a', { bold: true, color: it.color || 'tx2' }), opts: { paraSpaceAfter: 6, paraSpaceBefore: ps.length ? 10 : 0 } });
          texts.push(plain(it.h));
          if (it.reset !== false) n = 0;
        } else if (it.t !== undefined) {
          ps.push({ runs: parse(it.t, mode === 'show' ? 'a' : mode, it.style || {}), opts: { paraSpaceAfter: spec.gap ?? 10 } });
          texts.push(plain(it.t));
        } else if (it.q) {
          n++;
          const pre = spec.number === false ? [] : [{ text: numFmt(n), options: { bold: true, color: 'tx2' } }];
          ps.push({ runs: [...pre, ...parse(it.q, 'a')], opts: { paraSpaceAfter: mode === 'a' ? 3 : (spec.qGap ?? 14) } });
          texts.push(plain(numFmt(n) + it.q));
          if (mode === 'a') {
            ps.push({ runs: [{ text: '→ ', options: { bold: true, color: 'tx2' } }, ...parse(it.a, 'a', { bold: true, color: 'tx2' })], opts: { paraSpaceAfter: spec.gap ?? 11 } });
            texts.push('→ ' + plain(it.a));
          }
        }
      }
      return { ps, texts };
    };
    const cols = spec.cols || 1; const colGap = 0.5;
    const sideW = spec.img ? (spec.sideW || 4.2) : 0;
    const Wt = W - (sideW ? sideW + 0.45 : 0);
    const colW = (Wt - colGap * (cols - 1)) / cols;
    const per = Math.ceil(spec.items.length / cols);
    const groups = cols === 1 ? [spec.items] : Array.from({ length: cols }, (_, i) => spec.items.slice(i * per, (i + 1) * per));
    for (const mode of modes) {
      const s = this.content(spec, mode === 'a');
      const note = mode !== 'q' ? spec.note : spec.noteQ;
      const nh = this.noteH(note);
      const y = s.y0;
      const h = BOTTOM - y - (nh ? nh + 0.25 : 0);
      const max = mode === 'q' ? (spec.max || 26) : (spec.maxA || spec.max || 22);
      let pt = (mode === 'a' && spec.sizeA) || spec.size || max;
      const qa = groups.some((g) => g.some((it) => it && it.q));
      const sp = mode === 'q' ? (spec.qGap ?? 14) + 2 : qa ? 9 : (spec.gap ?? 10) + 2;
      if (!spec.size && !(mode === 'a' && spec.sizeA)) for (const g of groups) pt = Math.min(pt, fitSize(build(g, mode, 0).texts, colW, h, max, 14, sp, 0.5, spec.title));
      let start = 0;
      groups.forEach((g, i) => {
        const { ps } = build(g, mode, spec.restart ? 0 : start);
        start += g.filter((it) => typeof it === 'string' || it.q).length;
        s.addText(flow(ps), { x: L + i * (colW + colGap), y, w: colW, h, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true, objectName: 'exercise' });
      });
      if (sideW) this.img(s, spec.img, R - sideW, y, sideW, h, { valign: 'top' });
      if (note) this.noteBox(s, note, BOTTOM - nh, nh);
    }
  }

  // ------------------------------------------------------------ TABLE (question + correction, or show)
  table(spec) {
    const ans = spec.rows.some((r) => r.some((c) => /\[\[|\{\{|<</.test(c)));
    const modes = spec.mode ? [spec.mode] : ans ? ['q', 'a'] : ['show'];
    const colW = spec.colW || spec.headers.map(() => W / spec.headers.length);
    const est = (p) => {
      let h = 0.16 + (p / 72) * 1.25 + 0.12;
      for (const r of spec.rows) {
        let mx = 1;
        r.forEach((c, i) => { mx = Math.max(mx, linesFor(plain(c), colW[i] - 0.24, p, 0.52)); });
        h += mx * (p / 72) * 1.22 + 0.16;
      }
      return h;
    };
    for (const mode of modes) {
      const s = this.content(spec, mode === 'a');
      const note = mode !== 'q' ? spec.note : spec.noteQ;
      const nh = this.noteH(note);
      const y = s.y0; const avail = BOTTOM - y - (nh ? nh + 0.25 : 0);
      let pt = spec.size || (spec.max || 20);
      if (!spec.size) { while (pt > 13 && est(pt) > avail) pt--; }
      const rows = [spec.headers.map((h, i) => ({ text: h, options: { bold: true, color: 'bg1', fill: { color: hx((spec.headColors && spec.headColors[i]) || 'tx2') }, align: (spec.align && spec.align[i]) || 'center', valign: 'middle', fontSize: Math.max(13, pt - 2) } }))];
      spec.rows.forEach((r, ri) => rows.push(r.map((c, ci) => ({
        text: parse(mode === 'q' ? c.replace(/\[\[[\s\S]+?\]\]/g, '___') : c, mode === 'show' ? 'a' : mode, spec.boldCol === ci ? { bold: true } : {}),
        options: { fill: { color: ri % 2 ? hx('bg2') : 'FFFFFF' }, color: 'tx1', valign: 'middle', align: (spec.align && spec.align[ci]) || 'center' },
      }))));
      const hs = [0.16 + (pt / 72) * 1.25 + 0.12];
      for (const r of spec.rows) {
        let mx = 1;
        r.forEach((c, i) => { mx = Math.max(mx, linesFor(plain(c), colW[i] - 0.24, pt, 0.52)); });
        hs.push(mx * (pt / 72) * 1.22 + 0.16);
      }
      const extra = Math.max(0, Math.min(0.3, (avail - hs.reduce((a, b) => a + b, 0)) / hs.length));
      s.addTable(rows, { x: L, y, w: W, colW, rowH: hs.map((h) => +(h + extra).toFixed(3)), fontSize: pt, border: { type: 'solid', pt: 0.75, color: BORDER }, margin: [0.06, 0.12, 0.06, 0.12], autoPage: false });
      if (note) this.noteBox(s, note, BOTTOM - nh, nh);
    }
  }

  // ------------------------------------------------------------ CARD GRID (label · big word · gloss · example)
  cardGrid(spec) {
    const s = this.content(spec, !!spec.correction);
    const note = spec.note; const nh = this.noteH(note);
    const n = spec.cards.length; const per = spec.perRow || Math.min(4, n); const rowsN = Math.ceil(n / per);
    const gap = 0.22; const cw = (W - gap * (per - 1)) / per;
    const y0 = s.y0; const ch = (BOTTOM - y0 - (nh ? nh + 0.25 : 0) - gap * (rowsN - 1)) / rowsN;
    const bigPt = spec.bigSize || Math.min(30, ...spec.cards.map((c) => fitSize([plain(c.big)], cw - 0.45, 0.56, 30, 16, 0, 0.62, 'card-big')));
    const exH = ch - 1.66;
    const exPt = spec.exSize || Math.min(...spec.cards.map((c) => fitSize([].concat(c.ex || '').map(plain), cw - 0.45, exH, 18, 13, 4, 0.5, 'card-ex')));
    spec.cards.forEach((c, i) => {
      const x = L + (i % per) * (cw + gap); const y = y0 + Math.floor(i / per) * (ch + gap);
      const col = c.color || 'tx2';
      const att = c.kind === 'attention';
      this.box(s, x, y, cw, ch, att ? 'accent1' : 'tx2', att ? { t: 88, line: 1.25 } : { fill: 'bg2', lineColor: BORDER, line: 0.75 });
      const lab = [];
      if (att) lab.push({ text: '⚠ ', options: { color: 'accent1' } });
      lab.push({ text: c.label, options: { color: att ? 'accent1' : 'accent5' } });
      s.addText(lab, { x: x + 0.22, y: y + 0.16, w: cw - 0.44, h: 0.3, fontSize: 12, bold: true, charSpacing: 1.5, margin: 0, valign: 'middle', isTextBox: true });
      s.addText(parse(c.big, 'a', { bold: true, color: col }), { x: x + 0.22, y: y + 0.48, w: cw - 0.44, h: 0.56, fontSize: bigPt, fontFace: HEAD, margin: 0, valign: 'middle', isTextBox: true });
      if (c.fr) this.text(s, c.fr, x + 0.22, y + 1.06, cw - 0.44, 0.34, { fontSize: 15, color: 'accent5', valign: 'middle' });
      s.addShape(this.S.LINE, { x: x + 0.22, y: y + 1.46, w: cw - 0.44, h: 0, line: { color: att ? hx('accent1') : 'C9D1DE', width: 0.75 } });
      if (c.ex) this.paras(s, [].concat(c.ex), x + 0.22, y + 1.56, cw - 0.44, exH, { fontSize: exPt, after: 4 });
    });
    if (note) this.noteBox(s, note, BOTTOM - nh, nh);
    return s;
  }

  // ------------------------------------------------------------ HEADER CARDS (coloured band · big line · bullets)
  headerCards(spec) {
    const s = this.content(spec, !!spec.correction);
    const note = spec.note; const nh = this.noteH(note);
    const n = spec.cards.length; const per = spec.perRow || n; const rowsN = Math.ceil(n / per);
    const gap = 0.3; const cw = (W - gap * (per - 1)) / per;
    const y0 = s.y0; const ch = (BOTTOM - y0 - (nh ? nh + 0.3 : 0) - gap * (rowsN - 1)) / rowsN;
    const bigPt = Math.min(26, ...spec.cards.map((c) => (c.big ? fitSize([plain(c.big)], cw - 0.4, 0.5, 26, 16, 0, 0.56, 'hc-big') : 26)));
    const bodyTop = spec.cards.some((c) => c.big) ? 1.25 : 0.72;
    const after = spec.after ?? 7;
    const bPt = spec.bSize || Math.min(...spec.cards.map((c) => fitSize((c.lines || ['']).map(plain), cw - 0.6, ch - bodyTop - 0.15, 20, 12, after, 0.5, 'hc-body')));
    spec.cards.forEach((c, i) => {
      const x = L + (i % per) * (cw + gap); const y = y0 + Math.floor(i / per) * (ch + gap);
      const col = c.color || 'tx2';
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: cw, h: ch, rectRadius: 0.1, fill: { color: 'FFFFFF' }, line: { color: BORDER, width: 1 }, shadow: shadow() });
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: cw, h: 0.55, rectRadius: 0.1, fill: { color: hx(col) }, line: { type: 'none' } });
      s.addShape(this.S.RECTANGLE, { x, y: y + 0.3, w: cw, h: 0.25, fill: { color: hx(col) }, line: { type: 'none' } });
      if (c.icon) this.icon(s, c.icon, 'FFFFFF', x + 0.2, y + 0.12, 0.31);
      s.addText(c.h, { x: x + (c.icon ? 0.62 : 0.2), y, w: cw - 0.8, h: 0.55, fontSize: 14, bold: true, color: 'bg1', charSpacing: 1, valign: 'middle', margin: 0, isTextBox: true });
      if (c.big) s.addText(parse(c.big, 'a', { bold: true, color: col }), { x: x + 0.2, y: y + 0.68, w: cw - 0.4, h: 0.5, fontSize: bigPt, fontFace: HEAD, valign: 'middle', margin: 0, isTextBox: true });
      if (c.lines) this.paras(s, c.lines, x + 0.2, y + bodyTop, cw - 0.4, ch - bodyTop - 0.12, { fontSize: bPt, bullet: c.bullets !== false, after });
    });
    if (note) this.noteBox(s, note, BOTTOM - nh, nh);
    return s;
  }

  // ------------------------------------------------------------ BANNER + CARDS (the Séance 1 voicemail layout)
  banner(spec) {
    const s = this.content(spec, !!spec.correction);
    const b = spec.banner; const col = b.color || 'accent2';
    const y = s.y0; const bh = 1.45;
    this.box(s, L, y, W, bh, col, { t: 91, line: 1.25 });
    this.circleIcon(s, b.icon || 'FaHeadphones', col, L + 0.32, y + 0.22, 1.0);
    s.addText([{ text: b.h, options: { bold: true, fontSize: 26, color: col, fontFace: HEAD, breakLine: true } }, ...parse(b.sub, 'a', { fontSize: 17 })], { x: L + 1.62, y: y + 0.1, w: W - 1.85, h: bh - 0.2, valign: 'middle', margin: 0, color: 'tx1', isTextBox: true });
    const n = spec.cards.length; const gap = 0.3; const cw = (W - gap * (n - 1)) / n;
    const cy = y + bh + 0.35; const ch = Math.min(spec.cardH || 2.75, BOTTOM - cy);
    const pt = Math.min(...spec.cards.map((c) => fitSize([plain(c.t)], cw - 0.6, ch - 1.05, 20, 13, 0, 0.5, 'banner-card')));
    spec.cards.forEach((c, i) => {
      const x = L + i * (cw + gap);
      this.box(s, x, cy, cw, ch, 'tx2', { fill: 'bg2', lineColor: BORDER, line: 0.75 });
      this.icon(s, c.icon, c.color || 'tx2', x + 0.3, cy + 0.28, 0.48);
      s.addText(c.h, { x: x + 0.95, y: cy + 0.22, w: cw - 1.1, h: 0.6, fontSize: 19, bold: true, color: c.color || 'tx2', valign: 'middle', margin: 0, isTextBox: true });
      this.text(s, c.t, x + 0.3, cy + 0.98, cw - 0.6, ch - 1.1, { fontSize: pt });
    });
  }

  // ------------------------------------------------------------ COMPARE (✗ box → ✓ box, + À retenir)
  compare(spec) {
    const s = this.content(spec, !!spec.correction);
    let y = s.y0;
    if (spec.intro) {
      const ih = textH([plain(spec.intro)], W, 20, 0, 1.2, 0.5);
      this.text(s, spec.intro, L, y - 0.05, W, ih, { fontSize: 20 });
      y += ih + 0.25;
    }
    const note = spec.note; const nh = this.noteH(note);
    const h = BOTTOM - y - (nh ? nh + 0.35 : 0);
    const mid = 0.7; const cw = (W - mid) / 2;
    const sides = [spec.left, spec.right];
    const pt = Math.min(...sides.map((c) => fitSize(c.items.map(plain), cw - 0.6, h - 1.05, spec.max || 20, 13, 8, 0.5, 'compare')));
    sides.forEach((c, i) => {
      const x = L + i * (cw + mid);
      const col = c.color || (i ? 'accent3' : 'accent6');
      this.box(s, x, y, cw, h, col, { t: 92, line: 1.25 });
      this.icon(s, c.icon || (i ? 'FaCheck' : 'FaTimes'), col, x + 0.28, y + 0.24, 0.42);
      s.addText(parse(c.h, 'a', { bold: true, color: col }), { x: x + 0.85, y: y + 0.18, w: cw - 1.05, h: 0.55, fontSize: 20, fontFace: HEAD, valign: 'middle', margin: 0, isTextBox: true });
      this.paras(s, c.items, x + 0.3, y + 0.92, cw - 0.55, h - 1.05, { fontSize: pt, bullet: c.bullets !== false, after: 8 });
    });
    const cx = L + cw + (mid - 0.56) / 2;
    s.addShape(this.S.OVAL, { x: cx, y: y + h / 2 - 0.28, w: 0.56, h: 0.56, fill: { color: hx('tx2') }, line: { type: 'none' } });
    if (spec.mid) s.addText(spec.mid, { x: cx, y: y + h / 2 - 0.28, w: 0.56, h: 0.56, fontSize: 13, bold: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
    else this.icon(s, 'FaArrowRight', 'FFFFFF', cx + 0.16, y + h / 2 - 0.12, 0.24);
    if (note) this.noteBox(s, note, BOTTOM - nh, nh);
  }

  // ------------------------------------------------------------ DECISION TREE (ladder: YES → result, NO ↓ next question)
  // spec.start, spec.steps [{q, hint, yes:{h, t, t2, color}}], spec.last {h, t, t2, color}, spec.leafCols ['-ING', '-ED']
  tree(spec) {
    const s = this.content(spec);
    const qx = L; const qw = 5.15; const lx = 6.75; const lw = R - lx;
    let y = s.y0 - 0.05;
    // start pill
    const sw = Math.min(qw, 0.6 + plain(spec.start).length * 0.115);
    s.addText(parse(spec.start, 'a', { bold: true }), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.2, x: qx + (qw - sw) / 2, y, w: sw, h: 0.42, fill: { color: hx('tx2') }, color: 'bg1', fontSize: 15, align: 'center', valign: 'middle', margin: 0 });
    let top = y + 0.42;
    if (spec.leafCols) {
      const cw2 = (lw - 0.2) / 2;
      spec.leafCols.forEach((c, i) => s.addText(c, { x: lx + 0.1 + i * cw2, y, w: cw2, h: 0.42, fontSize: 15, bold: true, color: 'tx2', align: 'center', valign: 'middle', margin: 0, isTextBox: true, charSpacing: 1 }));
    }
    const n = spec.steps.length; const arrowGap = n >= 3 ? 0.26 : 0.38;
    const nh = this.noteH(spec.note);
    const rowH = (BOTTOM - (nh ? nh + 0.25 : 0) - top - arrowGap) / (n + 1);
    const boxH = Math.min(1.12, rowH - arrowGap);
    const leaf = (L0, x, yy, w, h) => {
      const col = L0.color || 'accent3';
      this.box(s, x, yy, w, h, col, { t: 88, line: 1.5 });
      const hdr = [{ text: L0.h, options: { bold: true, color: col, fontSize: 15, charSpacing: 0.5 } }];
      if (spec.leafCols && L0.t2 !== undefined) {
        s.addText(hdr.map((r) => ({ text: r.text, options: { ...r.options, fontSize: 12, charSpacing: 1 } })), { x: x + 0.18, y: yy + 0.04, w: w - 0.36, h: 0.26, margin: 0, valign: 'middle', isTextBox: true });
        const cw2 = (w - 0.36) / 2;
        [L0.t, L0.t2].forEach((t, i) => this.text(s, t, x + 0.18 + i * cw2, yy + 0.3, cw2 - 0.1, h - 0.34, { fontSize: 16, valign: 'middle', align: 'center' }));
        s.addShape(this.S.LINE, { x: x + 0.18 + cw2, y: yy + 0.34, w: 0, h: h - 0.42, line: { color: hx(col), width: 0.75, dashType: 'dash' } });
      } else {
        const body = parse(L0.t, 'a');
        const pt = fitSize([L0.h + ' ' + plain(L0.t)], w - 0.36, h - 0.12, 16, 12, 2, 0.5, 'leaf');
        s.addText([...hdr.map((r) => ({ text: r.text, options: { ...r.options, fontSize: pt, breakLine: true } })), ...body], { x: x + 0.18, y: yy + 0.04, w: w - 0.36, h: h - 0.08, fontSize: pt, color: 'tx1', margin: 0, valign: 'middle', isTextBox: true });
      }
    };
    spec.steps.forEach((st, i) => {
      const by = top + arrowGap + i * rowH;
      this.ln(s, qx + qw / 2, by - arrowGap + 0.02, qx + qw / 2, by - 0.02, { arrow: true, color: 'accent5', width: 1.75 });
      if (i > 0) s.addText('NO', { x: qx + qw / 2 + 0.1, y: by - arrowGap, w: 0.6, h: arrowGap, fontSize: 12, bold: true, color: 'accent6', valign: 'middle', margin: 0, isTextBox: true });
      this.box(s, qx, by, qw, boxH, 'tx2', { fill: 'FFFFFF', line: 1.5, shadow: true });
      this.circleIcon(s, 'FaQuestion', 'tx2', qx + 0.16, by + boxH / 2 - 0.24, 0.48);
      const qt = [...parse(st.q, 'a', { bold: true, color: 'tx2' })];
      if (st.hint) qt.push({ text: '', options: { breakLine: true } }, ...parse(st.hint, 'a', { italic: true, color: 'accent5', fontSize: 13 }));
      const qpt = fitSize([plain(st.q)], qw - 0.9, boxH - (st.hint ? 0.3 : 0.08), 17, 13, 0, 0.5, 'tree-q');
      s.addText(qt, { x: qx + 0.78, y: by + 0.04, w: qw - 0.92, h: boxH - 0.08, fontSize: qpt, valign: 'middle', margin: 0, isTextBox: true });
      // YES →
      this.ln(s, qx + qw + 0.02, by + boxH / 2, lx - 0.04, by + boxH / 2, { arrow: true, color: 'accent3', width: 1.75 });
      s.addText('YES', { x: qx + qw, y: by + boxH / 2 - 0.34, w: lx - qx - qw, h: 0.3, fontSize: 12, bold: true, color: 'accent3', align: 'center', margin: 0, isTextBox: true });
      leaf(st.yes, lx, by, lw, boxH);
    });
    // last NO
    const by = top + arrowGap + n * rowH;
    this.ln(s, qx + qw / 2, by - arrowGap + 0.02, qx + qw / 2, by - 0.02, { arrow: true, color: 'accent5', width: 1.75 });
    s.addText('NO', { x: qx + qw / 2 + 0.1, y: by - arrowGap, w: 0.6, h: arrowGap, fontSize: 12, bold: true, color: 'accent6', valign: 'middle', margin: 0, isTextBox: true });
    leaf(spec.last, qx, by, spec.leafCols ? R - qx : qw, boxH);
    if (spec.note) this.noteBox(s, spec.note, BOTTOM - nh, nh);
    return s;
  }

  // ------------------------------------------------------------ MINDMAP (as in the Séance 1 deck)
  // branches: [{label, color, inner:[...], outer:[...]}] — first half on the left, rest on the right
  mindmap(spec) {
    const s = this.content(spec);
    const cx = 6.665; const top = s.y0 + 0.1; const bot = BOTTOM - 0.15; const cy = (top + bot) / 2;
    const nL = Math.ceil(spec.branches.length / 2); const nR = spec.branches.length - nL;
    const ys = (k) => (k === 1 ? [cy] : Array.from({ length: k }, (_, i) => top + 0.55 + i * ((bot - top - 1.1) / (k - 1))));
    const yL = ys(nL); const yR = ys(nR);
    const rr = 0.85; const pillW = 1.75; const pillH = 0.44; const leafW = 1.45; const leafH = 0.34; const lgap = 0.41;
    spec.branches.forEach((b, i) => {
      const left = i < nL; const by = left ? yL[i] : yR[i - nL];
      const col = b.color || 'tx2';
      const px = left ? cx - rr - 0.15 - pillW : cx + rr + 0.15;
      const ex = left ? px + pillW : px; // pill end facing the centre
      const ang = Math.atan2(by - cy, ex - cx);
      this.ln(s, cx + rr * Math.cos(ang), cy + rr * Math.sin(ang), ex, by, { color: col, width: 2.25 });
      s.addText(b.label, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.22, x: px, y: by - pillH / 2, w: pillW, h: pillH, fill: { color: hx(col) }, color: 'bg1', bold: true, fontSize: 12, align: 'center', valign: 'middle', margin: 0 });
      const ix = left ? px - 0.25 - leafW : px + pillW + 0.25;
      const ox = left ? ix - 0.18 - leafW : ix + leafW + 0.18;
      const k = Math.max((b.inner || []).length, (b.outer || []).length);
      (b.inner || []).forEach((t, j) => {
        const ly = by + (j - (k - 1) / 2) * lgap;
        this.ln(s, left ? px : px + pillW, by, left ? ix + leafW : ix, ly, { color: col, width: 1 });
        s.addText(parse(t, 'a'), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.17, x: ix, y: ly - leafH / 2, w: leafW, h: leafH, fill: { color: 'FFFFFF' }, line: { color: hx(col), width: 1.25 }, color: 'tx1', fontSize: plain(t).length > 17 ? 10 : 11, align: 'center', valign: 'middle', margin: 0 });
        if (b.outer && b.outer[j]) {
          this.ln(s, left ? ix : ix + leafW, ly, left ? ox + leafW : ox, ly, { color: col, width: 1 });
          s.addText(parse(b.outer[j], 'a'), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.17, x: ox, y: ly - leafH / 2, w: leafW, h: leafH, fill: { color: hx('bg2') }, line: { color: hx(col), width: 1.25, dashType: 'dash' }, color: 'tx1', fontSize: plain(b.outer[j]).length > 17 ? 10 : 11, align: 'center', valign: 'middle', margin: 0 });
        }
      });
    });
    s.addShape(this.S.OVAL, { x: cx - rr, y: cy - rr, w: 2 * rr, h: 2 * rr, fill: { color: hx('bg2') }, line: { type: 'none' } });
    s.addShape(this.S.OVAL, { x: cx - 0.7, y: cy - 0.7, w: 1.4, h: 1.4, fill: { color: hx('tx2') }, line: { type: 'none' } });
    s.addText(spec.center, { x: cx - 0.68, y: cy - 0.5, w: 1.36, h: 1.0, fontSize: 14, bold: true, color: 'bg1', fontFace: HEAD, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
  }

  // ------------------------------------------------------------ TIMELINE (bars = background, dots = events)
  // axis {from, to, ticks:[[v,label]]}, bars [{from,to,label,row,color,open}], points [{at,label,row,w}], now {at,label}
  timeline(spec) {
    const s = this.content(spec, !!spec.correction);
    let y = s.y0;
    if (spec.intro) {
      const ih = textH([plain(spec.intro)], W, 18, 0, 1.2, 0.5);
      this.text(s, spec.intro, L, y - 0.05, W, ih, { fontSize: 18 });
      y += ih + 0.2;
    }
    const note = spec.note; const nh = this.noteH(note);
    const legendH = spec.legend ? 0.5 : 0;
    const bottom = BOTTOM - (nh ? nh + 0.25 : 0) - (legendH ? legendH + 0.15 : 0);
    const X0 = 1.0; const X1 = 12.25;
    const { from, to } = spec.axis;
    const px = (v) => X0 + ((v - from) / (to - from)) * (X1 - X0);
    const rowsBars = Math.max(1, ...(spec.bars || []).map((b) => (b.row || 0) + 1));
    const rowsPts = Math.max(1, ...(spec.points || []).map((p) => (p.row || 0) + 1));
    const barH = 0.46; const barGap = 0.14; const pillH = 0.42; const pillGap = 0.62;
    const need = 0.3 + rowsBars * (barH + barGap) + 0.55 + rowsPts * pillGap;
    const slack = Math.max(0, (bottom - y) - need);
    const axisY = y + slack * 0.5 + 0.3 + rowsBars * (barH + barGap);
    (spec.bars || []).forEach((b) => {
      const by = axisY - 0.3 - ((b.row || 0) + 1) * (barH + barGap) + barGap;
      const col = b.color || 'accent2';
      const x1 = px(b.from); const x2 = px(b.to);
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: x1, y: by, w: Math.max(0.3, x2 - x1), h: barH, rectRadius: 0.1, fill: { color: hx(col), transparency: b.open ? 60 : 8 }, line: { color: hx(col), width: 1.25, dashType: b.open ? 'dash' : 'solid' } });
      const need = plain(b.label).length * ((b.size || 14) / 72) * 0.42 + 0.2;
      if (x2 - x1 >= need) this.text(s, b.label, x1 + 0.08, by, x2 - x1 - 0.16, barH, { fontSize: b.size || 14, bold: true, italic: true, color: b.open ? 'tx1' : 'bg1', valign: 'middle', align: 'center' });
      else if (x2 + need + 0.15 <= R && !b.labelLeft) this.text(s, b.label, x2 + 0.1, by, need + 0.1, barH, { fontSize: b.size || 14, bold: true, italic: true, color: col, valign: 'middle' });
      else this.text(s, b.label, x1 - need - 0.15, by, need + 0.05, barH, { fontSize: b.size || 14, bold: true, italic: true, color: col, valign: 'middle', align: 'right' });
    });
    this.ln(s, X0 - 0.35, axisY, X1 + 0.3, axisY, { arrow: true, color: 'tx2', width: 2.5 });
    (spec.axis.ticks || []).forEach(([v, label]) => {
      this.ln(s, px(v), axisY - 0.07, px(v), axisY + 0.07, { color: 'tx2', width: 1.25 });
      s.addText(label, { x: px(v) - 0.5, y: axisY + 0.1, w: 1.0, h: 0.24, fontSize: 11, color: 'accent5', align: 'center', margin: 0, isTextBox: true });
    });
    if (spec.now) {
      const nx = px(spec.now.at);
      s.addShape(this.S.RECTANGLE, { x: nx - 0.05, y: axisY - 0.34, w: 0.1, h: 0.68, fill: { color: hx('accent6') }, line: { type: 'none' } });
      s.addText(spec.now.label || 'NOW', { x: nx - 0.7, y: axisY - 0.68, w: 1.4, h: 0.3, fontSize: 13, bold: true, color: 'accent6', align: 'center', margin: 0, isTextBox: true });
    }
    (spec.points || []).forEach((p) => {
      const cx = px(p.at);
      const ly = axisY + 0.5 + (p.row || 0) * pillGap;
      this.ln(s, cx, axisY + 0.1, cx, ly, { color: 'accent1', width: 1 });
      const lw = p.w || Math.max(1.4, plain(p.label).length * 0.098 + 0.35);
      const lx = Math.min(Math.max(cx - lw / 2, L), R - lw);
      s.addText(parse(p.label, 'a', { bold: true, italic: true }), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.1, x: lx, y: ly, w: lw, h: pillH, fill: { color: hx(p.color || 'accent1') }, color: 'bg1', fontSize: p.size || 13, align: 'center', valign: 'middle', margin: 0 });
      s.addShape(this.S.OVAL, { x: cx - 0.13, y: axisY - 0.13, w: 0.26, h: 0.26, fill: { color: hx('accent4') }, line: { color: 'FFFFFF', width: 1.5 } });
    });
    if (spec.legend) {
      const ly = bottom + 0.15;
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: L + 0.2, y: ly + 0.1, w: 0.6, h: 0.3, rectRadius: 0.06, fill: { color: hx('accent2'), transparency: 8 }, line: { type: 'none' } });
      this.text(s, spec.legend[0], L + 0.95, ly, 5.0, 0.5, { fontSize: 16, valign: 'middle' });
      s.addShape(this.S.OVAL, { x: 6.95, y: ly + 0.12, w: 0.26, h: 0.26, fill: { color: hx('accent4') }, line: { type: 'none' } });
      this.text(s, spec.legend[1], 7.4, ly, 5.3, 0.5, { fontSize: 16, valign: 'middle' });
    }
    if (note) this.noteBox(s, note, BOTTOM - nh, nh);
  }

  // ------------------------------------------------------------ PATTERNS (pictures of the past: mini-diagrams in cards)
  // cards [{h, kind: progress|interrupt|parallel|sequence, f, ex}]
  patterns(spec) {
    const s = this.content(spec);
    const n = spec.cards.length; const gap = 0.25; const cw = (W - gap * (n - 1)) / n;
    const y = s.y0; const ch = BOTTOM - y;
    const exPt = Math.min(...spec.cards.map((c) => fitSize([plain(c.ex)], cw - 0.4, ch - 3.05, 18, 13, 0, 0.5, 'pat')));
    spec.cards.forEach((c, i) => {
      const x = L + i * (cw + gap);
      this.box(s, x, y, cw, ch, 'tx2', { fill: 'bg2', lineColor: BORDER, line: 0.75 });
      s.addText(c.h, { x: x + 0.2, y: y + 0.15, w: cw - 0.4, h: 0.38, fontSize: 13, bold: true, color: 'accent5', charSpacing: 1.5, margin: 0, valign: 'middle', isTextBox: true });
      // diagram area
      const dx = x + 0.3; const dw = cw - 0.6; const dy = y + 0.65; const dh = 1.35;
      const ay = dy + dh - 0.25;
      this.ln(s, dx, ay, dx + dw, ay, { arrow: true, color: 'tx2', width: 1.75 });
      const bar = (x1, x2, yy, label) => {
        s.addShape(this.S.ROUNDED_RECTANGLE, { x: x1, y: yy, w: x2 - x1, h: 0.3, rectRadius: 0.08, fill: { color: hx('accent2') }, line: { type: 'none' } });
        if (label) s.addText(label, { x: x1, y: yy, w: x2 - x1, h: 0.3, fontSize: 10, bold: true, italic: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      };
      const dot = (xx, label, yLab) => {
        this.ln(s, xx, yLab + 0.26, xx, ay - 0.1, { color: MAGENTA, width: 1 });
        s.addShape(this.S.OVAL, { x: xx - 0.12, y: ay - 0.12, w: 0.24, h: 0.24, fill: { color: MAGENTA }, line: { color: 'FFFFFF', width: 1.25 } });
        if (label) s.addText(label, { x: xx - 0.6, y: yLab, w: 1.2, h: 0.26, fontSize: 10, bold: true, italic: true, color: MAGENTA, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      };
      const lab = c.labels || [];
      if (c.kind === 'progress') {
        s.addShape(this.S.ROUNDED_RECTANGLE, { x: dx + 0.1, y: ay - 0.62, w: dw - 0.35, h: 0.3, rectRadius: 0.08, fill: { color: hx('accent2') }, line: { type: 'none' } });
        s.addText(lab[0], { x: dx + 0.1, y: ay - 0.62, w: dw * 0.66, h: 0.3, fontSize: 10, bold: true, italic: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        const mx = dx + dw * 0.78;
        s.addShape(this.S.RECTANGLE, { x: mx - 0.03, y: dy - 0.05, w: 0.06, h: ay - dy + 0.2, fill: { color: hx('accent6') }, line: { type: 'none' } });
        s.addText(lab[1] || '', { x: mx - 0.6, y: dy - 0.12, w: 1.2, h: 0.24, fontSize: 10, bold: true, color: 'accent6', align: 'center', margin: 0, isTextBox: true, fill: { color: hx('bg2') } });
      } else if (c.kind === 'interrupt') {
        bar(dx + 0.1, dx + dw - 0.25, ay - 0.62, lab[0]);
        dot(dx + dw * 0.6, lab[1], dy - 0.1);
        this.icon(s, 'FaBolt', 'accent1', dx + dw * 0.6 + 0.12, dy + 0.14, 0.26);
      } else if (c.kind === 'parallel') {
        bar(dx + 0.1, dx + dw - 0.4, ay - 0.62, lab[0]);
        bar(dx + 0.3, dx + dw - 0.2, ay - 1.02, lab[1]);
      } else if (c.kind === 'sequence') {
        const xs = [0.25, 0.55, 0.85].map((f) => dx + dw * f);
        xs.forEach((xx, k) => dot(xx, lab[k] || String(k + 1), k % 2 ? dy + 0.3 : dy - 0.1));
      }
      s.addText(parse(c.f, 'a', { bold: true, color: 'tx2' }), { x: x + 0.2, y: y + 2.1, w: cw - 0.4, h: 0.75, fontSize: 16, margin: 0, valign: 'middle', isTextBox: true });
      s.addShape(this.S.LINE, { x: x + 0.2, y: y + 2.92, w: cw - 0.4, h: 0, line: { color: 'C9D1DE', width: 0.75 } });
      this.text(s, c.ex, x + 0.2, y + 3.02, cw - 0.4, ch - 3.12, { fontSize: exPt });
    });
  }

  // ------------------------------------------------------------ CERTAINTY LADDER
  // rows [{pct, h, words, ex, color}] from most to least certain
  ladder(spec) {
    const s = this.content(spec);
    const y0 = s.y0; const n = spec.rows.length; const rh = (BOTTOM - y0) / n;
    const barX = L + 1.05; const barW = 0.42;
    spec.rows.forEach((r, i) => {
      const y = y0 + i * rh;
      const col = r.color;
      s.addShape(this.S.RECTANGLE, { x: barX, y, w: barW, h: rh, fill: { color: hx(col), transparency: 10 }, line: { color: 'FFFFFF', width: 1.5 } });
      s.addText(r.pct, { x: L, y, w: 0.95, h: rh, fontSize: 15, bold: true, color: col, align: 'right', valign: 'middle', margin: 0, isTextBox: true });
      this.box(s, barX + barW + 0.3, y + 0.05, R - barX - barW - 0.3, rh - 0.1, col, { t: 93, line: 0.75 });
      s.addText(r.h, { x: barX + barW + 0.5, y: y + 0.05, w: 1.75, h: rh - 0.1, fontSize: 14, bold: true, color: col, charSpacing: 1, valign: 'middle', margin: 0, isTextBox: true });
      this.text(s, r.words, barX + barW + 2.3, y + 0.05, 3.9, rh - 0.1, { fontSize: 17, bold: true, valign: 'middle' });
      this.text(s, r.ex, barX + barW + 6.35, y + 0.05, R - (barX + barW + 6.35) - 0.15, rh - 0.1, { fontSize: 14, italic: true, color: 'tx1', valign: 'middle' });
    });
  }

  // ------------------------------------------------------------ PICTURE DICTIONARY (numbered markers on the illustration)
  // marks [{n, x, y, en, fr}] in image pixels; bank = order of the word list on the question slide
  pictureDict(spec) {
    const [iw, ih] = IMGS[spec.img];
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y = s.y0; const h = BOTTOM - y;
      const r = this.img(s, spec.img, L, y, spec.imgW || 6.9, h, { valign: 'top', align: 'left', alt: spec.alt });
      spec.marks.forEach((m) => this.num(s, m.n, r.x + (m.x / iw) * r.w - 0.18, r.y + (m.y / ih) * r.h - 0.18, 0.36, mode === 'a' ? 'accent1' : 'tx2', 13));
      const x = r.x + r.w + 0.4; const w = R - x;
      const items = mode === 'q' ? spec.bank.map((n) => spec.marks.find((m) => m.n === n)) : spec.marks;
      const rh = Math.min(0.55, h / items.length);
      const pt = mode === 'q' ? 17 : Math.min(16, ...items.map((m) => fitSize([m.en + ' — ' + m.fr], w - 0.55, rh, 16, 11, 0, 0.5, 'dict')));
      items.forEach((m, i) => {
        const yy = y + i * rh;
        if (mode === 'q') {
          s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: yy + rh / 2 - 0.16, w: 0.42, h: 0.32, rectRadius: 0.05, fill: { color: 'FFFFFF' }, line: { color: hx('tx2'), width: 1 } });
          this.text(s, m.en, x + 0.6, yy, w - 0.6, rh, { fontSize: pt, valign: 'middle' });
        } else {
          this.num(s, m.n, x, yy + rh / 2 - 0.16, 0.32, 'accent1', 11);
          s.addText([{ text: m.en, options: { bold: true, color: 'tx2' } }, { text: '  ' + m.fr, options: { italic: true, color: 'accent5', fontSize: pt - 2 } }], { x: x + 0.45, y: yy, w: w - 0.45, h: rh, fontSize: pt, valign: 'middle', margin: 0, isTextBox: true });
        }
      });
    }
  }

  // ------------------------------------------------------------ POSITION MAP (3 × 3 grid over the picture + phrases)
  positionMap(spec) {
    const s = this.content(spec);
    const y = s.y0 + 0.45;
    const r = this.img(s, spec.img, L, y, 6.3, BOTTOM - y, { valign: 'top', align: 'left' });
    for (const k of [1, 2]) {
      s.addShape(this.S.LINE, { x: r.x + (k * r.w) / 3, y: r.y, w: 0, h: r.h, line: { color: 'FFFFFF', width: 2, dashType: 'dash' } });
      s.addShape(this.S.LINE, { x: r.x, y: r.y + (k * r.h) / 3, w: r.w, h: 0, line: { color: 'FFFFFF', width: 2, dashType: 'dash' } });
    }
    ['on the left', 'in the middle', 'on the right'].forEach((t, k) => {
      s.addText(t, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.12, x: r.x + (k + 0.5) * (r.w / 3) - 0.85, y: y - 0.42, w: 1.7, h: 0.32, fill: { color: hx('accent1') }, color: 'bg1', bold: true, italic: true, fontSize: 13, align: 'center', valign: 'middle', margin: 0 });
    });
    [['in the background', 0], ['in the foreground', 2]].forEach(([t, k]) => {
      s.addText(t, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.12, x: r.x + 0.12, y: r.y + ((k + 1) * r.h) / 3 - 0.42, w: 2.0, h: 0.32, fill: { color: hx('tx2') }, color: 'bg1', bold: true, italic: true, fontSize: 13, align: 'center', valign: 'middle', margin: 0 });
    });
    const x = r.x + r.w + 0.45; const w = R - x;
    s.addText(spec.sayLabel || 'SAY IT', { x, y: s.y0, w, h: 0.32, fontSize: 13, bold: true, color: 'accent4', charSpacing: 1.5, margin: 0, isTextBox: true });
    const th = spec.task ? textH([plain(spec.task)], w - 0.5, 16, 0, 1.2, 0.5) + 0.55 : 0;
    this.paras(s, spec.say, x, s.y0 + 0.45, w, BOTTOM - s.y0 - 0.45 - (th ? th + 0.2 : 0), { after: 10, fit: [19, 14], bullet: true });
    if (spec.task) {
      this.box(s, x, BOTTOM - th, w, th, 'accent4', { t: 90 });
      this.icon(s, 'FaUserFriends', 'accent4', x + 0.2, BOTTOM - th + 0.16, 0.32);
      this.text(s, spec.task, x + 0.65, BOTTOM - th + 0.12, w - 0.8, th - 0.2, { fontSize: 16, valign: 'middle' });
    }
  }

  // ------------------------------------------------------------ MEMORY GAME (look 30 s → picture gone → answers)
  memory(spec) {
    let s = this.content({ title: spec.title, tag: 'GAME', page: spec.page, instr: spec.instr, notes: spec.notes });
    const r = this.img(s, spec.img, L + 0.5, s.y0, W - 1.0, BOTTOM - s.y0, { valign: 'top' });
    const bx = r.x + r.w + 0.25;
    this.circleIcon(s, 'FaStopwatch', MAGENTA, bx, r.y, 1.0);
    s.addText(spec.seconds || '30 s', { x: bx - 0.2, y: r.y + 1.05, w: 1.4, h: 0.45, fontSize: 22, bold: true, color: MAGENTA, align: 'center', margin: 0, isTextBox: true, fontFace: HEAD });
    for (const mode of ['q', 'a']) {
      s = this.content({ title: spec.title2, tag: 'GAME', page: spec.page, instr: mode === 'q' ? spec.instr2 : undefined, notes: mode === 'q' ? spec.notes2 : spec.notesA }, mode === 'a');
      const y = s.y0; const lw = 4.3;
      if (mode === 'q') {
        this.box(s, L, y, lw, 3.0, 'accent5', { t: 88, line: 1, dash: 'dash' });
        this.icon(s, 'FaEyeSlash', 'accent5', L + lw / 2 - 0.5, y + 0.55, 1.0);
        s.addText('The picture has gone!', { x: L, y: y + 1.75, w: lw, h: 0.5, fontSize: 20, bold: true, color: 'accent5', align: 'center', margin: 0, isTextBox: true, fontFace: HEAD });
        this.box(s, L, y + 3.3, lw, BOTTOM - y - 3.3, MAGENTA, { t: 92 });
        this.icon(s, 'FaTrophy', MAGENTA, L + 0.22, y + 3.5, 0.4);
        this.text(s, spec.scoring, L + 0.8, y + 3.42, lw - 0.95, BOTTOM - y - 3.55, { fontSize: 16, valign: 'middle' });
      }
      // question slide: list beside the hidden picture · correction: two columns, full width
      const cols = mode === 'q' ? [[L + lw + 0.5, R - L - lw - 0.5, spec.items, 0]]
        : [0, 1].map((k) => { const half = Math.ceil(spec.items.length / 2); const cw = (W - 0.5) / 2; return [L + k * (cw + 0.5), cw, spec.items.slice(k * half, (k + 1) * half), k * half]; });
      const sizes = cols.map(([, w, items, start]) => {
        const texts = items.flatMap((it, i) => (mode === 'a' ? [`${start + i + 1}.  ${plain(it.q)}`, '→ ' + plain(it.a)] : [`${start + i + 1}.  ${plain(it.q)}`]));
        return fitSize(texts, w, BOTTOM - y, mode === 'q' ? 22 : 20, 12, mode === 'q' ? 14 : 8, 0.5, 'memory');
      });
      const pt = Math.min(...sizes);
      cols.forEach(([x, w, items, start]) => {
        const ps = [];
        items.forEach((it, i) => {
          ps.push({ runs: [{ text: `${start + i + 1}.  `, options: { bold: true, color: 'tx2' } }, ...parse(it.q, 'a')], opts: { paraSpaceAfter: mode === 'q' ? 12 : 3 } });
          if (mode === 'a') ps.push({ runs: [{ text: '→ ', options: { bold: true, color: 'tx2' } }, ...parse(it.a, 'a', { bold: true, color: 'tx2' })], opts: { paraSpaceAfter: 14 } });
        });
        s.addText(flow(ps), { x, y, w, h: BOTTOM - y, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
      });
    }
  }

  // ------------------------------------------------------------ DIALOGUE (portrait + name + line)
  dialogue(spec) {
    const s = this.content(spec);
    const colors = { MARK: 'tx2', YOU: 'accent1', IRIS: 'accent3', SAMUEL: 'accent2' };
    const side = spec.side; const w = side ? 7.7 : W;
    const y0 = s.y0; const avail = BOTTOM - y0;
    const nameW = 1.15; const tx = L + 0.62 + nameW;
    const tw = w - (tx - L);
    let pt = 20;
    const rowH = (t, p) => Math.max(0.44, linesFor(plain(t), tw, p, 0.5) * (p / 72) * 1.15 + 0.12);
    const hFor = (p) => spec.lines.reduce((a, l) => a + rowH(l[1], p), 0);
    while (pt > 14 && hFor(pt) > avail) pt--;
    const scale = Math.min(1.25, avail / hFor(pt));
    let y = y0;
    spec.lines.forEach(([who, line, num]) => {
      const lh = rowH(line, pt) * scale;
      const col = colors[who] || 'tx2';
      if (PORTRAITS[who]) this.portrait(s, who, L, y + 0.02, 0.4, col);
      else this.circleIcon(s, who === 'YOU' ? 'FaPen' : 'FaBroom', col, L, y + 0.02, 0.4);
      s.addText([{ text: num ? num + '  ' : '', options: { color: 'accent5', fontSize: 11, bold: false } }, { text: who, options: { bold: true, color: col } }], { x: L + 0.55, y, w: nameW + 0.2, h: 0.44, fontSize: pt - 2, valign: 'middle', margin: 0, isTextBox: true });
      this.text(s, line, tx, y + 0.07, tw, lh, { fontSize: pt, valign: 'top' });
      y += lh;
    });
    if (side) {
      const sx = L + w + 0.4; const sw = R - sx;
      let sy = y0;
      if (side.img) { const r = this.img(s, side.img, sx, sy, sw, 2.5, { valign: 'top' }); sy = r.y + r.h + 0.3; }
      if (side.ask) {
        const ah = textH([plain(side.ask)], sw - 0.4, 16, 0, 1.2, 0.5) + 0.62;
        this.box(s, sx, BOTTOM - ah, sw, ah, 'accent1', { t: 90 });
        s.addText(side.askLabel || 'ASK THE CLASS', { x: sx + 0.2, y: BOTTOM - ah + 0.12, w: sw - 0.4, h: 0.3, fontSize: 12, bold: true, color: 'accent1', charSpacing: 1, margin: 0, isTextBox: true });
        this.text(s, side.ask, sx + 0.2, BOTTOM - ah + 0.44, sw - 0.4, ah - 0.5, { fontSize: 16 });
        side.bottom = BOTTOM - ah - 0.25;
      }
      if (side.lines) {
        const bh = (side.bottom || BOTTOM) - sy;
        this.box(s, sx, sy, sw, bh, 'accent2', { t: 92, line: 0.75 });
        this.icon(s, 'FaSearch', 'accent2', sx + 0.2, sy + 0.2, 0.3);
        s.addText(side.label || 'LISTEN FOR', { x: sx + 0.62, y: sy + 0.17, w: sw - 0.8, h: 0.36, fontSize: 13, bold: true, color: 'accent2', charSpacing: 1, margin: 0, valign: 'middle', isTextBox: true });
        this.paras(s, side.lines, sx + 0.2, sy + 0.65, sw - 0.4, bh - 0.75, { bullet: true, after: 6, fit: [17, 12] });
      }
    }
  }

  // ------------------------------------------------------------ ROLE CARDS (hot seat): portrait, name, what you know / don't know
  roleCards(spec) {
    const s = this.content(spec);
    const n = spec.cards.length; const per = 2; const rowsN = Math.ceil(n / per);
    const gap = 0.25; const cw = (W - gap) / per;
    const ah = spec.ask ? 0.85 : 0;
    const y0 = s.y0; const ch = (BOTTOM - y0 - (ah ? ah + 0.25 : 0) - gap * (rowsN - 1)) / rowsN;
    const pd = Math.min(1.05, ch - 0.3);
    const bw = cw - pd - 0.65;
    const pt = Math.min(...spec.cards.map((c) => fitSize(c.lines.map(plain), bw, ch - 0.62, 17, 12, 4, 0.5, 'role')));
    spec.cards.forEach((c, i) => {
      const x = L + (i % per) * (cw + gap); const y = y0 + Math.floor(i / per) * (ch + gap); const col = c.color || 'tx2';
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: cw, h: ch, rectRadius: 0.1, fill: { color: 'FFFFFF' }, line: { color: BORDER, width: 1 }, shadow: shadow() });
      if (PORTRAITS[c.who]) this.portrait(s, c.who, x + 0.22, y + (ch - pd) / 2, pd, col);
      else this.circleIcon(s, c.icon || 'FaBroom', col, x + 0.19, y + (ch - pd) / 2 - 0.03, pd + 0.06);
      const tx = x + pd + 0.45;
      s.addText([{ text: c.name, options: { bold: true, fontSize: 18, color: col, fontFace: HEAD } }, { text: c.role ? '   ' + c.role : '', options: { italic: true, fontSize: 13, color: 'accent5' } }], { x: tx, y: y + 0.1, w: bw, h: 0.42, valign: 'middle', margin: 0, isTextBox: true });
      this.paras(s, c.lines, tx, y + 0.55, bw, ch - 0.62, { fontSize: pt, after: 4 });
    });
    if (spec.ask) {
      const by = BOTTOM - ah;
      this.box(s, L, by, W, ah, 'accent4', { t: 91 });
      this.icon(s, 'FaCommentDots', 'accent4', L + 0.25, by + ah / 2 - 0.2, 0.4);
      this.text(s, spec.ask, L + 0.85, by + 0.08, W - 1.1, ah - 0.16, { fontSize: 17, valign: 'middle' });
    }
  }

  // ------------------------------------------------------------ GAME (banner, numbered steps, language box, win line)
  game(spec) {
    const s = this.content({ ...spec, tag: spec.tag || 'GAME' });
    const col = spec.color || MAGENTA;
    let y = s.y0;
    this.box(s, L, y, W, 1.05, col, { t: 92, line: 1 });
    this.circleIcon(s, spec.icon || 'FaTrophy', col, L + 0.25, y + 0.14, 0.78);
    s.addText([...parse(spec.tagline, 'a', { bold: true, fontSize: 21, color: col, fontFace: HEAD }), { text: '', options: { breakLine: true } }, ...parse(spec.meta, 'a', { fontSize: 15, color: 'accent5', italic: true })], { x: L + 1.25, y: y + 0.06, w: W - 1.45, h: 0.93, valign: 'middle', margin: 0, isTextBox: true });
    y += 1.35;
    const hasSay = !!spec.say || !!spec.tiles;
    const lw = hasSay ? 7.1 : W;
    const winH = spec.win ? 0.62 : 0;
    const stepsH = BOTTOM - y - (winH ? winH + 0.2 : 0);
    const n = spec.steps.length; const rh = stepsH / n;
    const pt = Math.min(...spec.steps.map((t) => fitSize([plain(t)], lw - 0.75, rh - 0.06, 19, 13, 0, 0.5, 'game-step')));
    spec.steps.forEach((t, i) => {
      const yy = y + i * rh;
      this.num(s, i + 1, L, yy + Math.min(0.06, rh / 2 - 0.2), 0.4, col, 14);
      this.text(s, t, L + 0.6, yy, lw - 0.65, rh, { fontSize: pt, valign: 'top' });
    });
    if (spec.tiles) {
      const sx = L + lw + 0.35; const sw = R - sx; const sh = BOTTOM - y - (winH ? winH + 0.2 : 0);
      s.addText(spec.tilesLabel || 'THE BOARD', { x: sx, y, w: sw, h: 0.34, fontSize: 13, bold: true, color: col, charSpacing: 1.5, margin: 0, valign: 'middle', isTextBox: true });
      const per = spec.tilesPerRow || 4; const rowsN = Math.ceil(spec.tiles.length / per); const g = 0.1;
      const tw = (sw - g * (per - 1)) / per; const tH = Math.min(0.62, (sh - 0.45 - g * (rowsN - 1)) / rowsN);
      const longest = Math.max(...spec.tiles.map((t) => plain(t).length));
      const tpt = Math.max(11, Math.min(20, Math.floor((tw - 0.14) / (longest * 0.58 / 72)), Math.floor((tH - 0.06) / (1.25 / 72))));
      spec.tiles.forEach((t, i) => {
        const tx = sx + (i % per) * (tw + g); const ty = y + 0.45 + Math.floor(i / per) * (tH + g);
        s.addText(parse(t, 'a', { bold: true }), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.06, x: tx, y: ty, w: tw, h: tH, fill: { color: hx('bg2') }, line: { color: BORDER, width: 0.75 }, color: 'tx2', fontSize: tpt, fontFace: HEAD, align: 'center', valign: 'middle', margin: 0 });
      });
    } else if (hasSay) {
      const sx = L + lw + 0.35; const sw = R - sx; const sh = BOTTOM - y - (winH ? winH + 0.2 : 0);
      this.box(s, sx, y, sw, sh, 'accent4', { t: 92, line: 0.75 });
      this.icon(s, 'FaCommentDots', 'accent4', sx + 0.2, y + 0.18, 0.32);
      s.addText(spec.sayLabel || 'SAY IT', { x: sx + 0.62, y: y + 0.15, w: sw - 0.8, h: 0.38, fontSize: 13, bold: true, color: 'accent4', charSpacing: 1.5, margin: 0, valign: 'middle', isTextBox: true });
      this.paras(s, spec.say, sx + 0.22, y + 0.65, sw - 0.42, sh - 0.75, { after: 7, fit: [17, 12], bullet: true });
    }
    if (spec.win) {
      const wy = BOTTOM - winH;
      this.box(s, L, wy, W, winH, 'accent1', { t: 90 });
      this.icon(s, 'FaTrophy', 'accent1', L + 0.22, wy + winH / 2 - 0.17, 0.34);
      this.text(s, '**To win —** ' + spec.win, L + 0.75, wy, W - 0.95, winH, { fontSize: 17, valign: 'middle' });
    }
    return s;
  }

  // ------------------------------------------------------------ ICON GRID (mood cards, situations…)
  iconGrid(spec) {
    const s = this.content(spec);
    const n = spec.items.length; const per = spec.perRow || 3; const rowsN = Math.ceil(n / per);
    const nh = this.noteH(spec.note);
    const gap = 0.3; const cw = (W - gap * (per - 1)) / per; const y0 = s.y0;
    const ch = (BOTTOM - y0 - (nh ? nh + 0.25 : 0) - gap * (rowsN - 1)) / rowsN;
    spec.items.forEach((it, i) => {
      const x = L + (i % per) * (cw + gap); const y = y0 + Math.floor(i / per) * (ch + gap);
      const col = it.color || 'tx2';
      this.box(s, x, y, cw, ch, col, { t: 92, line: 1 });
      const d = Math.min(1.0, ch - 0.4);
      this.circleIcon(s, it.icon, col, x + 0.25, y + (ch - d) / 2, d);
      s.addText([{ text: it.h, options: { bold: true, fontSize: 20, color: col, fontFace: HEAD, breakLine: true } }, ...parse(it.t || '', 'a', { fontSize: 15, color: 'tx1' })], { x: x + d + 0.45, y: y + 0.1, w: cw - d - 0.6, h: ch - 0.2, valign: 'middle', margin: 0, isTextBox: true });
    });
    if (spec.note) this.noteBox(s, spec.note, BOTTOM - nh, nh);
  }

  // ------------------------------------------------------------ CHEVRONS (story order)
  chevrons(spec) {
    const s = this.content(spec);
    const n = spec.steps.length; const y = s.y0; const ch = 0.95; const cw = (W + 0.25 * (n - 1)) / n;
    spec.steps.forEach((st, i) => {
      const x = L + i * (cw - 0.25);
      s.addText(st.h, { shape: i === 0 ? this.S.PENTAGON : this.S.CHEVRON, x, y, w: cw, h: ch, fill: { color: hx(st.color || 'tx2') }, line: { color: 'FFFFFF', width: 2 }, color: 'bg1', bold: true, fontSize: 17, align: 'center', valign: 'middle', margin: [0, 0.25, 0, 0.35], fontFace: HEAD });
      this.text(s, st.ex, x + 0.12, y + ch + 0.18, cw - 0.45, 1.5, { fontSize: 15 });
    });
    const by = y + ch + 1.85;
    const rows = spec.rows || [];
    const nr = rows.length; const gap = 0.25; const rw = (W - gap * (nr - 1)) / Math.max(1, nr); const rh = BOTTOM - by;
    rows.forEach((r, i) => {
      const x = L + i * (rw + gap); const col = r.color || 'accent1';
      this.box(s, x, by, rw, rh, col, { t: 92, line: 1 });
      this.icon(s, r.icon || 'FaClock', col, x + 0.22, by + 0.2, 0.34);
      s.addText(r.h, { x: x + 0.7, y: by + 0.16, w: rw - 0.85, h: 0.42, fontSize: 14, bold: true, color: col, charSpacing: 1, valign: 'middle', margin: 0, isTextBox: true });
      this.paras(s, r.lines, x + 0.25, by + 0.7, rw - 0.45, rh - 0.8, { after: 6, fit: [17, 12] });
    });
  }

  // ------------------------------------------------------------ CLOSING (white)
  closing(spec) {
    this.section('Clôture');
    const s = this.content({ title: spec.title || 'Before you close the file', tag: 'END OF SESSION', notes: spec.notes });
    const y = s.y0; const lw = 6.6;
    // next in the file
    this.box(s, L, y, lw, 2.95, 'tx2', { fill: 'tx2', noLine: true });
    s.addText('NEXT IN THE FILE', { x: L + 0.3, y: y + 0.2, w: 5, h: 0.32, fontSize: 13, bold: true, color: 'accent1', charSpacing: 2, margin: 0, isTextBox: true });
    const cpt = fitSize([plain(spec.cliff)], lw - 0.6, 2.2, 22, 15, 0, 0.55, 'cliff');
    this.text(s, spec.cliff, L + 0.3, y + 0.62, lw - 0.6, 2.2, { fontSize: cpt, base: { italic: true }, color: 'bg1', fontFace: HEAD });
    // exit ticket
    const ey = y + 3.25;
    this.box(s, L, ey, lw, BOTTOM - ey, 'accent1', { t: 88, line: 1.25 });
    this.icon(s, 'FaPen', 'accent1', L + 0.3, ey + 0.25, 0.36);
    s.addText('EXIT TICKET', { x: L + 0.82, y: ey + 0.22, w: 4, h: 0.42, fontSize: 13, bold: true, color: 'accent1', charSpacing: 2, margin: 0, valign: 'middle', isTextBox: true });
    this.text(s, spec.exit, L + 0.3, ey + 0.75, lw - 0.6, BOTTOM - ey - 0.85, { fontSize: 18 });
    // homework
    const hx0 = L + lw + 0.35; const hw = R - hx0;
    this.box(s, hx0, y, hw, BOTTOM - y, 'tx2', { fill: 'bg2', lineColor: BORDER, line: 0.75 });
    this.icon(s, 'FaClipboardList', 'accent1', hx0 + 0.28, y + 0.24, 0.4);
    s.addText('BEFORE NEXT SESSION', { x: hx0 + 0.82, y: y + 0.22, w: hw - 1, h: 0.42, fontSize: 14, bold: true, color: 'tx2', charSpacing: 1, valign: 'middle', margin: 0, isTextBox: true });
    const hh = BOTTOM - y - 0.95; const rh = Math.min(1.1, hh / spec.homework.length);
    const pt = Math.min(...spec.homework.map((t) => fitSize([plain(t)], hw - 0.95, rh - 0.1, 17, 13, 0, 0.5, 'hw')));
    spec.homework.forEach((t, i) => {
      const yy = y + 0.85 + i * rh;
      this.icon(s, 'FaRegSquare', 'tx2', hx0 + 0.3, yy + 0.05, 0.28);
      this.text(s, t, hx0 + 0.75, yy, hw - 0.95, rh, { fontSize: pt });
    });
  }

  // ------------------------------------------------------------ MCQ (question, then correction with the reason)
  mcq(spec) {
    const letters = ['A', 'B', 'C', 'D'];
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      let y = s.y0;
      const qpt = fitSize([plain(spec.q)], W, 1.0, 22, 17, 0, 0.5, 'mcq-q');
      const qh = textH([plain(spec.q)], W, qpt, 0, 1.2, 0.5) + 0.05;
      this.text(s, spec.q, L, y, W, qh, { fontSize: qpt });
      y += qh + 0.3;
      const whyH = mode === 'a' && spec.why ? Math.max(0.85, textH([plain(spec.why)], W - 1.2, 17, 0, 1.2, 0.5) + 0.25) : 0;
      const bottom = BOTTOM - (whyH ? whyH + 0.25 : 0);
      const n = spec.opts.length; const rows = Math.ceil(n / 2); const gap = 0.25; const cw = (W - gap) / 2;
      const ch = Math.min(1.3, (bottom - y - gap * (rows - 1)) / rows);
      const opt = Math.min(...spec.opts.map((o) => fitSize([plain(o)], cw - 1.5, ch - 0.16, 19, 13, 0, 0.5, 'mcq-opt')));
      spec.opts.forEach((o, i) => {
        const x = L + (i % 2) * (cw + gap); const yy = y + Math.floor(i / 2) * (ch + gap);
        const ok = mode === 'a' && i === spec.ans; const dim = mode === 'a' && !ok;
        this.box(s, x, yy, cw, ch, ok ? 'accent3' : 'tx2', ok ? { t: 86, line: 2 } : { fill: 'bg2', lineColor: BORDER, line: 0.75 });
        this.num(s, letters[i], x + 0.22, yy + ch / 2 - 0.27, 0.54, ok ? 'accent3' : dim ? 'B8C1CE' : 'tx2', 16);
        this.text(s, o, x + 0.95, yy + 0.06, cw - 1.45, ch - 0.12, { fontSize: opt, valign: 'middle', color: dim ? 'accent5' : 'tx1' });
        if (ok) this.icon(s, 'FaCheck', 'accent3', x + cw - 0.48, yy + 0.14, 0.32);
      });
      if (whyH) {
        const wy = BOTTOM - whyH;
        this.box(s, L, wy, W, whyH, 'accent3', { t: 92 });
        this.icon(s, 'FaLightbulb', 'accent3', L + 0.25, wy + whyH / 2 - 0.2, 0.4);
        const wpt = fitSize(['Why? ' + plain(spec.why)], W - 1.2, whyH - 0.15, 17, 13, 0, 0.5, 'mcq-why');
        s.addText([{ text: 'Why?  ', options: { bold: true, color: 'accent3' } }, ...parse(spec.why)], { x: L + 0.85, y: wy + 0.06, w: W - 1.1, h: whyH - 0.12, fontSize: wpt, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
      }
    }
  }

  // ------------------------------------------------------------ EXHIBIT (a printed document: time · line)
  drawExhibit(s, x, y, w, h, spec, marks = {}) {
    s.addShape(this.S.RECTANGLE, { x, y, w, h, fill: { color: 'FFFFFF' }, line: { color: BORDER, width: 1 }, shadow: shadow() });
    const cw = this.chip(s, spec.label, x + 0.3, y + 0.2, 'accent5');
    s.addText(spec.docTitle, { x: x + 0.3 + cw + 0.25, y: y + 0.16, w: w - cw - 0.9, h: 0.42, fontSize: w > 10 ? 18 : 16, bold: true, color: 'accent5', fontFace: HEAD, margin: 0, valign: 'middle', isTextBox: true });
    s.addShape(this.S.LINE, { x: x + 0.3, y: y + 0.72, w: w - 0.6, h: 0, line: { color: hx('accent5'), width: 1, dashType: 'dash' } });
    const n = spec.lines.length; const rh = (h - 0.9) / n;
    const tx = x + 1.75; const tw = w - 1.75 - 0.25;
    const pt = Math.min(20, ...spec.lines.map((l) => fitSize([plain(l[1])], tw, rh - 0.04, 20, 12, 0, 0.5, 'exhibit')));
    spec.lines.forEach(([t, line], i) => {
      const ry = y + 0.82 + i * rh;
      if (marks[i] !== undefined) s.addShape(this.S.RECTANGLE, { x: x + 0.15, y: ry, w: w - 0.3, h: rh, fill: { color: YELLOW, transparency: 55 }, line: { type: 'none' } });
      else if (i % 2) s.addShape(this.S.RECTANGLE, { x: x + 0.15, y: ry, w: w - 0.3, h: rh, fill: { color: hx('bg2') }, line: { type: 'none' } });
      s.addText(t, { x: x + 0.35, y: ry, w: 1.3, h: rh, fontSize: pt, bold: true, color: 'tx2', fontFace: 'Courier New', valign: 'middle', margin: 0, isTextBox: true });
      this.text(s, line, tx, ry, tw, rh, { fontSize: pt, valign: 'middle' });
      if (marks[i] !== undefined) this.num(s, marks[i], x + w - 0.48, ry + rh / 2 - 0.16, 0.32, 'accent1', 12);
    });
  }
  exhibit(spec) {
    const s = this.content(spec);
    this.drawExhibit(s, L, s.y0, W, BOTTOM - s.y0, spec);
  }
  // questions on the right; the correction highlights the line(s) that answer each question
  exhibitQuiz(spec) {
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const pw = 3.7; const ew = W - pw - 0.35; const y = s.y0;
      const marks = {};
      if (mode === 'a') spec.questions.forEach((q, k) => (q.rows || []).forEach((r) => { marks[r] = k + 1; }));
      this.drawExhibit(s, L, y, ew, BOTTOM - y, spec, marks);
      const px = L + ew + 0.35;
      this.box(s, px, y, pw, BOTTOM - y, 'accent1', { t: 91 });
      this.icon(s, 'FaSearch', 'accent1', px + 0.22, y + 0.2, 0.3);
      s.addText(spec.askLabel || 'READ IT LIKE AN ASSESSOR', { x: px + 0.62, y: y + 0.15, w: pw - 0.75, h: 0.4, fontSize: 12, bold: true, color: 'accent1', charSpacing: 1, margin: 0, valign: 'middle', isTextBox: true });
      const ps = [];
      spec.questions.forEach((q, k) => {
        ps.push({ runs: [{ text: `${k + 1}.  `, options: { bold: true, color: 'accent1' } }, ...parse(q.q)], opts: { paraSpaceAfter: mode === 'a' ? 3 : 16 } });
        if (mode === 'a') ps.push({ runs: [{ text: '→ ', options: { bold: true, color: 'tx2' } }, ...parse(q.a, 'a', { bold: true, color: 'tx2' })], opts: { paraSpaceAfter: 14 } });
      });
      const texts = spec.questions.flatMap((q, k) => (mode === 'a' ? [`${k + 1}. ${plain(q.q)}`, '→ ' + plain(q.a)] : [`${k + 1}. ${plain(q.q)}`]));
      const pt = fitSize(texts, pw - 0.45, BOTTOM - y - 0.75, mode === 'a' ? 17 : 19, 12, mode === 'a' ? 9 : 16, 0.5, 'exhibit-q');
      s.addText(flow(ps), { x: px + 0.22, y: y + 0.68, w: pw - 0.42, h: BOTTOM - y - 0.78, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    }
  }

  // ------------------------------------------------------------ EXPERTS (one card per firm, question then answer)
  experts(spec) {
    const modes = spec.cards.some((c) => c.a) ? ['q', 'a'] : ['show'];
    for (const mode of modes) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const gap = 0.25; const cw = (W - gap) / 2; const ch = (BOTTOM - y0 - gap) / 2;
      const texts = spec.cards.map((c) => [plain(c.q), ...(mode === 'a' && c.a ? ['→ ' + plain(c.a)] : [])]);
      const pt = Math.min(...texts.map((t) => fitSize(t, cw - 1.65, ch - 0.25, mode === 'a' ? 16 : 19, 12, 6, 0.5, 'expert')));
      spec.cards.forEach((c, i) => {
        const x = L + (i % 2) * (cw + gap); const y = y0 + Math.floor(i / 2) * (ch + gap); const e = EXP[c.who];
        this.box(s, x, y, cw, ch, 'tx2', { fill: 'bg2', lineColor: BORDER, line: 0.75 });
        s.addShape(this.S.ROUNDED_RECTANGLE, { x: x + 0.18, y: y + 0.18, w: 1.1, h: 1.1, rectRadius: 0.08, fill: { color: e.c }, line: { type: 'none' } });
        this.icon(s, e.icon, 'FFFFFF', x + 0.51, y + 0.3, 0.44);
        s.addText(c.who, { x: x + 0.18, y: y + 0.8, w: 1.1, h: 0.4, fontSize: 14, bold: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        s.addText(e.field, { x: x + 0.1, y: y + 1.32, w: 1.26, h: 0.3, fontSize: 11, italic: true, color: e.c, align: 'center', margin: 0, isTextBox: true });
        const ps = [{ runs: parse(c.q, 'a'), opts: { paraSpaceAfter: 6 } }];
        if (mode === 'a' && c.a) ps.push({ runs: [{ text: '→ ', options: { bold: true, color: 'tx2' } }, ...parse(c.a, 'a', { bold: true, color: 'tx2' })], opts: {} });
        s.addText(flow(ps), { x: x + 1.48, y: y + 0.14, w: cw - 1.65, h: ch - 0.26, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
      });
    }
  }

  // ------------------------------------------------------------ ROLE PLAY (A / B columns of numbered prompts, as in Séance 1)
  roleplay(spec) {
    const s = this.content(spec);
    const y0 = s.y0; const gap = 0.3; const cw = (W - gap) / 2; const hh = 0.5;
    const MARKS = { '?': 'accent2', '–': 'accent6', '+': 'tx2' };
    const runs = (t, k) => {
      const m = String(t).match(/^\((\?|–|\+)\)\s*/);
      const head = [{ text: `${k}.  `, options: { bold: true, color: 'tx2' } }];
      if (!m) return [...head, ...parse(t)];
      return [...head, { text: `(${m[1]})  `, options: { bold: true, color: MARKS[m[1]] } }, ...parse(t.slice(m[0].length))];
    };
    const sides = [spec.a, spec.b];
    const pt = spec.size || Math.min(...sides.map((sd) => fitSize(sd.items.map((t, k) => `${k + 1}.  ${plain(t)}`), cw - 0.5, BOTTOM - y0 - hh - 0.3, 18, 12, 8, 0.45, 'roleplay')));
    sides.forEach((sd, i) => {
      const x = L + i * (cw + gap); const col = sd.color || (i ? 'accent2' : 'tx2');
      this.box(s, x, y0, cw, BOTTOM - y0, 'tx2', { fill: 'bg2', lineColor: BORDER, line: 0.75, r: 0.1 });
      s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: y0, w: cw, h: hh, rectRadius: 0.1, fill: { color: hx(col) }, line: { type: 'none' } });
      s.addShape(this.S.RECTANGLE, { x, y: y0 + hh - 0.15, w: cw, h: 0.15, fill: { color: hx(col) }, line: { type: 'none' } });
      s.addText(sd.h, { x: x + 0.25, y: y0, w: cw - 0.5, h: hh, fontSize: 14, bold: true, color: 'bg1', charSpacing: 1, valign: 'middle', margin: 0, isTextBox: true });
      const ps = sd.items.map((t, k) => ({ runs: runs(t, k + 1), opts: { paraSpaceAfter: 6 } }));
      s.addText(flow(ps), { x: x + 0.25, y: y0 + hh + 0.2, w: cw - 0.5, h: BOTTOM - y0 - hh - 0.3, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    });
  }

  // ------------------------------------------------------------ PICTURE + CARDS (an illustration explained)
  picture(spec) {
    const s = this.content(spec);
    const r = this.img(s, spec.img, L, s.y0, spec.imgW || 7.3, BOTTOM - s.y0, { valign: 'top', align: 'left', alt: spec.alt });
    const x = r.x + r.w + 0.4; const w = R - x;
    const n = spec.cards.length; const gap = 0.2; const ch = (BOTTOM - s.y0 - gap * (n - 1)) / n;
    const pt = Math.min(...spec.cards.map((c) => fitSize([plain(c.t)], w - 0.45, ch - 0.56, 17, 13, 0, 0.5, 'pic')));
    spec.cards.forEach((c, i) => {
      const y = s.y0 + i * (ch + gap); const col = c.color || 'tx2';
      this.box(s, x, y, w, ch, col, { t: 91, line: 1 });
      if (c.icon) this.icon(s, c.icon, col, x + 0.2, y + 0.16, 0.32);
      this.text(s, c.h, x + (c.icon ? 0.62 : 0.22), y + 0.12, w - 0.8, 0.4, { fontSize: 17, bold: true, color: col, valign: 'middle', fontFace: HEAD });
      this.text(s, c.t, x + 0.22, y + 0.52, w - 0.44, ch - 0.58, { fontSize: pt });
    });
  }

  // ------------------------------------------------------------ BOARD (quiz board: categories × point values)
  board(spec) {
    const s = this.content({ ...spec, tag: spec.tag || 'GAME' });
    const nh = this.noteH(spec.note);
    const cats = spec.cats; const n = cats.length; const gap = 0.22; const cw = (W - gap * (n - 1)) / n;
    const y0 = s.y0; const hh = 0.62; const vals = spec.values;
    const th = (BOTTOM - y0 - (nh ? nh + 0.25 : 0) - hh - 0.18 - gap * (vals.length - 1)) / vals.length;
    cats.forEach((c, i) => {
      const x = L + i * (cw + gap); const col = c.color || 'tx2';
      s.addText(c.h, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.08, x, y: y0, w: cw, h: hh, fill: { color: hx(col) }, color: 'bg1', bold: true, fontSize: 20, fontFace: HEAD, align: 'center', valign: 'middle', margin: 0 });
      vals.forEach((v, k) => {
        s.addText(String(v), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.08, x, y: y0 + hh + 0.18 + k * (th + gap), w: cw, h: th, fill: { color: hx(col), transparency: 88 }, line: { color: hx(col), width: 1.25 }, color: hx(col), bold: true, fontSize: 30, fontFace: HEAD, align: 'center', valign: 'middle', margin: 0 });
      });
    });
    if (spec.note) this.noteBox(s, spec.note, BOTTOM - nh, nh);
  }

  async save(file) {
    await this.pres.writeFile({ fileName: file });
    await postProcess(file);
  }
}

module.exports = { LightDeck, prepLight, MAGENTA };
