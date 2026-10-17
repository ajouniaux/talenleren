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
  ENERGIZER: 'E8590C', BRIDGE: '0F766E', 'TEAM CALL': 'accent4', WRITING: 'accent1', EXHIBIT: 'accent5', 'YOUR EXPERT': 'tx2',
};

// ---------------------------------------------------------------- markup → runs
// **bold**  //italic//  [[answer]] (blank in question, green in correction)  {{wrong}} (red struck in correction)
// <<right>> (green in correction)  ^^blue^^ (past continuous)  ==magenta== (past simple)  ##orange##  %%purple%%
// !!red!!  ++green++  ~~navy~~  ___ (always a blank)
const MK = /(\$\$[\s\S]+?\$\$|&&[\s\S]+?&&|@@[\s\S]+?@@|\*\*[\s\S]+?\*\*|\[\[[\s\S]+?\]\]|\{\{[\s\S]+?\}\}|<<[\s\S]+?>>|\/\/[\s\S]+?\/\/|\^\^[\s\S]+?\^\^|==[\s\S]+?==|##[\s\S]+?##|%%[\s\S]+?%%|!![\s\S]+?!!|\+\+[\s\S]+?\+\+|~~[\s\S]+?~~|_{3,})/g;
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
    if (two === '$$') out.push(...parse(v, mode, mode === 'q' ? base : { ...base, bold: true, color: 'accent3', highlight: 'D9EDD5' }));
    else if (two === '&&') out.push(...parse(v, mode, mode === 'q' ? base : { ...base, bold: true, color: MAGENTA, highlight: 'F6DDE9' }));
    else if (two === '@@') { if (mode !== 'q') out.push(...parse(v, mode, { ...base, bold: true, color: 'accent3' })); }
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
function plain(str) { return String(str).replace(/\$\$|&&|@@|\*\*|\[\[|\]\]|\{\{|\}\}|<<|>>|\/\/|\^\^|==|##|%%|!!|\+\+|~~/g, ''); }
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
  'FaBan', 'FaCheckDouble', 'FaThLarge', 'FaDice', 'FaPrint', 'FaLink', 'FaPuzzlePiece', 'FaKey', 'FaUserCheck', 'FaLockOpen',
  'FaThumbsUp', 'FaThumbsDown', 'FaChair', 'FaChild', 'FaTrain', 'FaMobileAlt', 'FaDiceSix', 'FaStickyNote', 'FaCoins', 'FaDoorClosed',
  'FaWalking', 'FaTrafficLight', 'FaEnvelope', 'FaPaperclip', 'FaReply', 'FaMapMarkedAlt', 'FaMedal', 'FaHandshake', 'FaBell',
  'FaInbox', 'FaArrowsAltH', 'FaHourglassEnd', 'FaMapSigns', 'FaFire', 'FaMapMarkerAlt', 'FaSyncAlt', 'FaMapPin', 'FaRulerHorizontal',
  'FaPlay', 'FaVoicemail', 'FaThumbtack', 'FaHandPointUp', 'FaHeart', 'FaPhoneVolume', 'FaQuestionCircle', 'FaPeopleArrows', 'FaUserCircle'];
const ENERGY = 'E8590C'; const TEAL = '0F766E'; const AMBER = 'D99A06';
const ICON_COLORS = ['FFFFFF', HEX.dk2, HEX.dk1, HEX.accent1, HEX.accent2, HEX.accent3, HEX.accent4, HEX.accent5, HEX.accent6, MAGENTA, YELLOW, ENERGY, TEAL, AMBER];
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
      let y = s.y0;
      if (spec.bank) y = this.bank(s, spec.bank, y, mode) + 0.3;
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
      const topY = axisY - 0.3 - rowsBars * (barH + barGap) - 0.38;
      this.ln(s, nx, topY + 0.3, nx, axisY - 0.2, { color: 'accent6', width: 1.5, dash: 'dash' });
      s.addShape(this.S.RECTANGLE, { x: nx - 0.05, y: axisY - 0.2, w: 0.1, h: 0.4, fill: { color: hx('accent6') }, line: { type: 'none' } });
      s.addText(spec.now.label || 'NOW', { x: Math.min(nx - 0.7, R - 1.4), y: topY, w: 1.4, h: 0.3, fontSize: 13, bold: true, color: 'accent6', align: 'center', margin: 0, isTextBox: true });
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
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: L + 0.2, y: ly + 0.1, w: 0.6, h: 0.3, rectRadius: 0.06, fill: { color: hx(spec.legendBar || 'accent2'), transparency: 8 }, line: { type: 'none' } });
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
      if (!(spec.hunt && mode === 'q')) spec.marks.forEach((m) => this.num(s, m.n, r.x + (m.x / iw) * r.w - 0.18, r.y + (m.y / ih) * r.h - 0.18, 0.36, mode === 'a' ? 'accent1' : 'tx2', 13));
      const x = r.x + r.w + 0.4; const w = R - x;
      const items = mode === 'q' ? spec.bank.map((n) => spec.marks.find((m) => m.n === n)) : spec.marks;
      const rh = Math.min(0.55, h / items.length);
      const pt = mode === 'q' ? 17 : Math.min(16, ...items.map((m) => fitSize([m.en + ' — ' + m.fr], w - 0.55, rh, 16, 11, 0, 0.5, 'dict')));
      items.forEach((m, i) => {
        const yy = y + i * rh;
        if (mode === 'q') {
          if (spec.hunt) this.icon(s, 'FaSearch', 'accent1', x + 0.06, yy + rh / 2 - 0.15, 0.3);
          else s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: yy + rh / 2 - 0.16, w: 0.42, h: 0.32, rectRadius: 0.05, fill: { color: 'FFFFFF' }, line: { color: hx('tx2'), width: 1 } });
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

  // ------------------------------------------------------------ WORD BANK (chips in a tinted strip); returns the bottom y
  bank(s, words, y, mode = 'q', o = {}) {
    const pt = o.size || 16; const ch = 0.42; const gap = 0.14; const pad = 0.2;
    const ws = words.map((t) => Math.max(0.7, plain(t).length * (pt / 72) * 0.52 + 0.4));
    const rows = []; let row = []; let acc = 0; const maxW = W - 0.5 - 1.2;
    ws.forEach((w, i) => { if (acc + w > maxW && row.length) { rows.push(row); row = []; acc = 0; } row.push(i); acc += w + gap; });
    if (row.length) rows.push(row);
    const h = pad * 2 + rows.length * ch + (rows.length - 1) * 0.1;
    this.box(s, L, y, W, h, 'accent1', { t: 92, line: 1, dash: 'dash' });
    s.addText(o.label || 'WORD BANK', { x: L + 0.2, y, w: 1.1, h, fontSize: 11, bold: true, color: 'accent1', charSpacing: 1, valign: 'middle', margin: 0, isTextBox: true });
    rows.forEach((r, k) => {
      let x = L + 1.3;
      r.forEach((i) => {
        s.addText(parse(words[i], 'a', { bold: true }), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.2, x, y: y + pad + k * (ch + 0.1), w: ws[i], h: ch, fill: { color: 'FFFFFF' }, line: { color: hx('accent1'), width: 1 }, color: mode === 'a' ? 'accent5' : 'tx2', fontSize: pt, align: 'center', valign: 'middle', margin: 0 });
        x += ws[i] + gap;
      });
    });
    return y + h;
  }

  // ------------------------------------------------------------ MATCHING (1–n ↔ A–F; the correction draws the links)
  // pairs [[left, right, fr?]], order = indices of the pairs in the right-hand column
  match(spec) {
    const n = spec.pairs.length; const order = spec.order || spec.pairs.map((_, i) => i);
    const letters = 'ABCDEFGHIJ';
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const note = mode === 'a' ? spec.note : spec.noteQ; const nh = Math.max(this.noteH(spec.note), this.noteH(spec.noteQ));
      const y0 = s.y0; const mid = 1.5;
      const lw = (W - mid) * (spec.split || 0.42); const rw = W - mid - lw; const rx = L + lw + mid;
      const avail = BOTTOM - y0 - (nh ? nh + 0.25 : 0); const gap = n >= 7 ? 0.08 : 0.12;
      const rh = Math.min(0.78, (avail - gap * (n - 1)) / n);
      const pt = Math.min(...spec.pairs.flatMap(([l, r, fr]) => [
        fitSize([plain(l)], lw - 0.75, rh - 0.06, 18, 12, 0, 0.5, 'match-l'),
        fitSize([plain(r)], rw - 0.75, rh - 0.06, 18, 12, 0, 0.5, 'match-r')]));
      const yAt = (i) => y0 + i * (rh + gap);
      spec.pairs.forEach(([l, , fr], i) => {
        const y = yAt(i);
        this.box(s, L, y, lw, rh, 'tx2', { fill: 'bg2', lineColor: BORDER, line: 0.75 });
        this.num(s, i + 1, L + 0.12, y + rh / 2 - 0.19, 0.38, 'tx2', 13);
        s.addText(parse(l, 'a', { bold: true, color: 'tx2' }), { x: L + 0.62, y, w: lw - 0.72, h: rh, fontSize: pt, valign: 'middle', margin: 0, isTextBox: true });
        if (mode === 'a' && fr) {
          const used = 0.62 + plain(l).length * (pt / 72) * 0.52 + 0.25;
          const fw = Math.max(1.0, lw - used - 0.12);
          this.text(s, fr, L + lw - fw - 0.12, y, fw, rh, { fontSize: fw < 1.5 ? 11 : 13, italic: true, color: 'accent5', align: 'right', valign: 'middle' });
        }
      });
      order.forEach((pi, k) => {
        const y = yAt(k);
        this.box(s, rx, y, rw, rh, 'tx2', { fill: 'FFFFFF', lineColor: BORDER, line: 0.75 });
        this.num(s, letters[k], rx + 0.12, y + rh / 2 - 0.19, 0.38, 'accent1', 13);
        this.text(s, spec.pairs[pi][1], rx + 0.62, y, rw - 0.72, rh, { fontSize: pt, valign: 'middle' });
      });
      if (mode === 'a') {
        spec.pairs.forEach((_, i) => {
          const k = order.indexOf(i);
          this.ln(s, L + lw + 0.04, yAt(i) + rh / 2, rx - 0.04, yAt(k) + rh / 2, { color: 'accent3', width: 2.25 });
          s.addShape(this.S.OVAL, { x: L + lw - 0.04, y: yAt(i) + rh / 2 - 0.07, w: 0.14, h: 0.14, fill: { color: hx('accent3') }, line: { type: 'none' } });
          s.addShape(this.S.OVAL, { x: rx - 0.1, y: yAt(k) + rh / 2 - 0.07, w: 0.14, h: 0.14, fill: { color: hx('accent3') }, line: { type: 'none' } });
        });
      } else {
        spec.pairs.forEach((_, i) => s.addShape(this.S.OVAL, { x: L + lw - 0.04, y: yAt(i) + rh / 2 - 0.07, w: 0.14, h: 0.14, fill: { color: 'FFFFFF' }, line: { color: hx('tx2'), width: 1 } }));
        order.forEach((_, k) => s.addShape(this.S.OVAL, { x: rx - 0.1, y: yAt(k) + rh / 2 - 0.07, w: 0.14, h: 0.14, fill: { color: 'FFFFFF' }, line: { color: hx('accent1'), width: 1 } }));
      }
      if (note) this.noteBox(s, note, BOTTOM - nh, nh);
    }
  }

  // ------------------------------------------------------------ ODD ONE OUT (rows of word chips; the correction marks the intruder and says why)
  oddOneOut(spec) {
    const rows = spec.rows; const n = rows.length;
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const avail = BOTTOM - y0; const gap = 0.16;
      const rh = Math.min(0.82, (avail - gap * (n - 1)) / n);
      const labW = rows.some((r) => r.label) ? 1.35 : 0;
      const whyW = 3.7; const cx0 = L + 0.62 + labW; const cw = W - 0.62 - labW - whyW - 0.3;
      const k = Math.max(...rows.map((r) => r.words.length)); const cg = 0.14; const chipW = (cw - cg * (k - 1)) / k;
      const pt = Math.min(18, ...rows.flatMap((r) => r.words.map((w) => fitSize([plain(w)], chipW - 0.2, rh - 0.2, 18, 12, 0, 0.5, 'odd'))));
      rows.forEach((r, i) => {
        const y = y0 + i * (rh + gap);
        this.num(s, i + 1, L, y + rh / 2 - 0.19, 0.38, 'tx2', 13);
        if (r.label) s.addText(parse(r.label, 'a', { bold: true, color: 'tx2' }), { x: L + 0.55, y, w: labW, h: rh, fontSize: 17, fontFace: HEAD, valign: 'middle', margin: 0, isTextBox: true });
        r.words.forEach((w, j) => {
          const x = cx0 + j * (chipW + cg);
          const odd = mode === 'a' && j === r.odd; const ok = mode === 'a' && j !== r.odd;
          s.addText(parse(w, 'a', odd ? { strike: 'sngStrike' } : {}), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.12, x, y: y + 0.08, w: chipW, h: rh - 0.16,
            fill: { color: odd ? 'F6DCD8' : ok ? 'E6F0E4' : hx('bg2') }, line: { color: odd ? hx('accent6') : ok ? 'B9D3B4' : BORDER, width: odd ? 2 : 1 },
            color: odd ? 'accent6' : 'tx1', bold: odd, fontSize: pt, align: 'center', valign: 'middle', margin: 0 });
        });
        if (mode === 'a' && r.why) this.text(s, '→ ' + r.why, R - whyW, y, whyW, rh, { fontSize: Math.min(16, pt), valign: 'middle', base: { color: 'tx2' }, color: 'tx2' });
      });
    }
  }

  // ------------------------------------------------------------ SORT (word bank → columns; the correction puts every item in its column)
  // categories [{h, sub, color}], items [{t, a, cat}] in the order of the bank
  sort(spec) {
    const cats = spec.categories; const nc = cats.length;
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      let y = s.y0;
      if (mode === 'q') y = this.bank(s, spec.items.map((it) => it.t), y, 'q', { label: spec.bankLabel || 'SORT THEM', size: spec.bankSize || 15 }) + 0.3;
      const gap = 0.22; const cw = (W - gap * (nc - 1)) / nc; const hh = spec.sub === false || mode === 'a' ? 0.48 : 0.72;
      const bodyH = BOTTOM - y - hh;
      const per = cats.map((_, c) => spec.items.filter((it) => it.cat === c));
      const maxN = Math.max(...per.map((p) => p.length));
      const ih = Math.min(0.72, (bodyH - 0.3 - 0.06 * (maxN - 1)) / Math.max(1, maxN));
      const pt = Math.min(16, ...spec.items.map((it) => fitSize([plain(it.a || it.t)], cw - 0.35, ih + 0.02, 16, 11, 0, 0.5, 'sort')));
      cats.forEach((c, i) => {
        const x = L + i * (cw + gap); const col = c.color || 'tx2';
        s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: cw, h: hh, rectRadius: 0.08, fill: { color: hx(col) }, line: { type: 'none' } });
        const one = mode === 'a' && c.sub;
        s.addText([{ text: c.h + (one ? '  ' : ''), options: { bold: true, fontSize: 15, charSpacing: 1, breakLine: !!c.sub && !one } }, ...(c.sub ? parse(c.sub, 'a', { fontSize: 12, italic: true }) : [])], { x: x + 0.1, y, w: cw - 0.2, h: hh, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        this.box(s, x, y + hh + 0.06, cw, bodyH - 0.06, col, { t: 94, line: 1, dash: mode === 'q' ? 'dash' : undefined });
        if (mode === 'a') per[i].forEach((it, k) => {
          s.addText(parse(it.a || it.t, 'a'), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.1, x: x + 0.12, y: y + hh + 0.16 + k * (ih + 0.06), w: cw - 0.24, h: ih, fill: { color: 'FFFFFF' }, line: { color: hx(col), width: 1 }, color: 'tx1', fontSize: pt, align: 'center', valign: 'middle', margin: 0 });
        });
      });
    }
  }

  // ------------------------------------------------------------ REORDER (shuffled cards A–F → numbered sequence)
  // items in the right order [{t, tag}], shuffle = display order on the question slide
  reorder(spec) {
    const n = spec.items.length; const letters = 'ABCDEFGHIJ';
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const note = mode === 'a' ? spec.note : undefined; const nh = this.noteH(note);
      const y0 = s.y0; const avail = BOTTOM - y0 - (nh ? nh + 0.2 : 0); const gap = 0.1;
      const rh = Math.min(0.7, (avail - gap * (n - 1)) / n);
      const seq = mode === 'q' ? spec.shuffle : spec.items.map((_, i) => i);
      const tagPt = 15; const tagW = mode === 'a' && spec.items.some((it) => it.tag) ? Math.max(1.2, Math.max(...spec.items.map((it) => (it.tag || '').length)) * 0.6 * tagPt / 72 + 0.3) : 0;
      const tx = L + 1.05 + tagW; const tw = W - 1.05 - tagW - 0.2;
      const pt = Math.min(19, ...spec.items.map((it) => fitSize([plain(it.t)], tw, rh - 0.06, 19, 12, 0, 0.5, 'reorder')));
      if (mode === 'a') this.ln(s, L + 0.27, y0 + rh / 2, L + 0.27, y0 + (n - 1) * (rh + gap) + rh / 2, { color: 'accent3', width: 2.5 });
      seq.forEach((idx, k) => {
        const it = spec.items[idx]; const y = y0 + k * (rh + gap);
        if (mode === 'q') {
          this.num(s, letters[k], L, y + rh / 2 - 0.2, 0.4, 'accent1', 14);
          s.addShape(this.S.ROUNDED_RECTANGLE, { x: L + 0.52, y: y + rh / 2 - 0.19, w: 0.42, h: 0.38, rectRadius: 0.05, fill: { color: 'FFFFFF' }, line: { color: hx('tx2'), width: 1.25 } });
        } else {
          this.num(s, k + 1, L + 0.05, y + rh / 2 - 0.22, 0.44, 'accent3', 15);
          s.addText(letters[spec.shuffle.indexOf(idx)], { x: L + 0.52, y, w: 0.42, h: rh, fontSize: 13, bold: true, color: 'accent1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        }
        this.box(s, L + 1.0, y, W - 1.0, rh, 'tx2', mode === 'a' ? { fill: 'bg2', lineColor: 'B9D3B4', line: 1 } : { fill: 'bg2', lineColor: BORDER, line: 0.75 });
        if (tagW && it.tag) s.addText(it.tag, { x: L + 1.15, y, w: tagW - 0.1, h: rh, fontSize: tagPt, bold: true, color: 'tx2', fontFace: 'Courier New', valign: 'middle', margin: 0, isTextBox: true });
        this.text(s, it.t, tx, y, tw, rh, { fontSize: pt, valign: 'middle' });
      });
      if (note) this.noteBox(s, note, BOTTOM - nh, nh);
    }
  }

  // ------------------------------------------------------------ SCRAMBLE (words in the wrong order → the sentence)
  scramble(spec) {
    const n = spec.rows.length;
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const gap = 0.18; const rh = Math.min(1.0, (BOTTOM - y0 - gap * (n - 1)) / n);
      const chipH = Math.min(0.44, rh * 0.48);
      spec.rows.forEach((r, i) => {
        const y = y0 + i * (rh + gap);
        this.num(s, i + 1, L, y + 0.02, 0.38, 'tx2', 13);
        let x = L + 0.6;
        r.words.forEach((w) => {
          const cw = Math.max(0.55, plain(w).length * 0.13 + 0.35);
          s.addText(parse(w, 'a'), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.18, x, y, w: cw, h: chipH, fill: { color: mode === 'a' ? 'F1F3F7' : hx('bg2') }, line: { color: BORDER, width: 1 }, color: mode === 'a' ? 'accent5' : 'tx2', bold: true, fontSize: 16, align: 'center', valign: 'middle', margin: 0 });
          x += cw + 0.12;
        });
        if (mode === 'a') this.text(s, '→ ' + r.a, L + 0.6, y + chipH + 0.04, W - 0.6, rh - chipH - 0.04, { fontSize: 19, bold: true, color: 'accent3', valign: 'middle' });
        else s.addShape(this.S.LINE, { x: L + 0.6, y: y + rh - 0.12, w: 7.5, h: 0, line: { color: hx('accent5'), width: 1, dashType: 'sysDot' } });
      });
    }
  }

  // ------------------------------------------------------------ TEXT TO CORRECT (a document with n mistakes: {{wrong}}@@right@@)
  fixText(spec) {
    for (const mode of spec.mode ? [spec.mode] : ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const note = mode === 'a' ? spec.note : spec.noteQ; const nh = this.noteH(note);
      const y = s.y0; const h = BOTTOM - y - (nh ? nh + 0.25 : 0);
      const top = spec.mail ? this.mailChrome(s, L, y, W, h, spec.mail) : this.docChrome(s, L, y, W, spec, h);
      if (spec.count && mode !== 'show') {
        const by = spec.mail ? y + 0.06 : y + 0.17;
        s.addShape(this.S.ROUNDED_RECTANGLE, { x: R - 2.05, y: by, w: 1.8, h: spec.mail ? 0.34 : 0.42, rectRadius: 0.2, fill: { color: mode === 'a' ? hx('accent3') : MAGENTA }, line: { type: 'none' } });
        const [cq, ca] = spec.countLabels || [`${spec.count} mistakes`, `✓ ${spec.count} corrections`];
        s.addText(mode === 'a' ? ca : cq, { x: R - 2.05, y: by, w: 1.8, h: spec.mail ? 0.34 : 0.42, fontSize: 14, bold: true, color: 'bg1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      }
      const ph = y + h - top - 0.15;
      const pm = mode === 'show' ? 'q' : mode;
      const pt = spec.size || fitSize(spec.paras.map((p) => plain(p.replace(/@@[\s\S]+?@@/g, (m) => ' ' + m))), W - 0.8, ph, 21, 14, 10, 0.5, 'fixtext');
      const ps = spec.paras.map((p) => ({ runs: parse(p, pm), opts: { paraSpaceAfter: 10, lineSpacingMultiple: 1.15 } }));
      s.addText(flow(ps), { x: L + 0.4, y: top, w: W - 0.8, h: ph, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
      if (note) this.noteBox(s, note, BOTTOM - nh, nh);
    }
  }
  // a sheet with a label chip and a title; returns the y where the text starts
  docChrome(s, x, y, w, spec, h) {
    s.addShape(this.S.RECTANGLE, { x, y, w, h: h || BOTTOM - y - (spec.noteH || 0), fill: { color: 'FFFFFF' }, line: { color: BORDER, width: 1 }, shadow: shadow() });
    const cw = this.chip(s, spec.docLabel, x + 0.3, y + 0.2, spec.docColor || 'accent5');
    s.addText(spec.docTitle, { x: x + 0.3 + cw + 0.25, y: y + 0.16, w: w - cw - 2.6, h: 0.42, fontSize: 17, bold: true, color: 'accent5', fontFace: HEAD, margin: 0, valign: 'middle', isTextBox: true });
    s.addShape(this.S.LINE, { x: x + 0.3, y: y + 0.75, w: w - 0.6, h: 0, line: { color: hx('accent5'), width: 1, dashType: 'dash' } });
    return y + 0.9;
  }
  // an e-mail window: title bar with three dots, From / To / Subject; returns the y where the body starts
  mailChrome(s, x, y, w, h, mail) {
    s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color: 'FFFFFF' }, line: { color: 'B8C1CE', width: 1 }, shadow: shadow() });
    s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w, h: 0.46, rectRadius: 0.08, fill: { color: 'E9EDF3' }, line: { type: 'none' } });
    s.addShape(this.S.RECTANGLE, { x, y: y + 0.3, w, h: 0.16, fill: { color: 'E9EDF3' }, line: { type: 'none' } });
    ['E5534B', 'E8B43A', '58B05A'].forEach((c, i) => s.addShape(this.S.OVAL, { x: x + 0.2 + i * 0.24, y: y + 0.15, w: 0.16, h: 0.16, fill: { color: c }, line: { type: 'none' } }));
    this.icon(s, 'FaEnvelope', 'accent5', x + 1.0, y + 0.11, 0.24);
    s.addText(mail.app || 'Inbox — Atlas House', { x: x + 1.32, y, w: 4, h: 0.46, fontSize: 12, color: 'accent5', bold: true, valign: 'middle', margin: 0, isTextBox: true });
    let yy = y + 0.56;
    const head = [];
    if (mail.from) head.push({ text: 'From:  ', options: { bold: true, color: 'accent5' } }, { text: mail.from, options: { color: 'tx1' } });
    if (mail.to) head.push({ text: (mail.from ? '      ' : '') + 'To:  ', options: { bold: true, color: 'accent5' } }, { text: mail.to, options: { color: 'tx1' } });
    if (head.length) { s.addText(head, { x: x + 0.35, y: yy, w: w - 0.7, h: 0.3, fontSize: 13, valign: 'middle', margin: 0, isTextBox: true }); yy += 0.3; }
    if (mail.subject) { s.addText([{ text: 'Subject:  ', options: { bold: true, color: 'accent5' } }, ...parse(mail.subject, 'a', { color: 'tx1', bold: true })], { x: x + 0.35, y: yy, w: w - 0.7, h: 0.3, fontSize: 13, valign: 'middle', margin: 0, isTextBox: true }); yy += 0.3; }
    if (mail.attach) { this.icon(s, 'FaPaperclip', 'accent5', R - 0.5, y + 0.6, 0.22); }
    s.addShape(this.S.LINE, { x: x + 0.3, y: yy + 0.08, w: w - 0.6, h: 0, line: { color: BORDER, width: 1 } });
    return yy + 0.2;
  }

  // ------------------------------------------------------------ TRUE OR FALSE (the correction fills T or F and adds the reason)
  trueFalse(spec) {
    const n = spec.items.length;
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const gap = 0.12; const rh = Math.min(0.95, (BOTTOM - y0 - gap * (n - 1)) / n);
      const tw = W - 2.1; const sw = (tw - 0.7) * 0.5; const ww = (tw - 0.7) - sw - 0.25;
      const pt = Math.min(19, ...spec.items.map((it) => fitSize([plain(it.s)], sw, rh - 0.08, 19, 12, 0, 0.5, 'tf')));
      const wpt = Math.min(pt - 1, ...spec.items.map((it) => fitSize(['→ ' + plain(it.why || '')], ww, rh - 0.06, 18, 12, 0, 0.5, 'tf-why')));
      spec.items.forEach((it, i) => {
        const y = y0 + i * (rh + gap);
        this.box(s, L, y, W, rh, 'tx2', { fill: i % 2 ? 'FFFFFF' : 'bg2', lineColor: BORDER, line: 0.5 });
        s.addText(`${i + 1}.`, { x: L + 0.15, y, w: 0.5, h: rh, fontSize: pt, bold: true, color: 'tx2', valign: 'middle', margin: 0, isTextBox: true });
        this.text(s, it.s, L + 0.65, y, mode === 'a' ? sw : tw - 0.7, rh, { fontSize: pt, valign: 'middle' });
        if (mode === 'a' && it.why) this.text(s, '→ ' + it.why, L + 0.65 + sw + 0.25, y, ww, rh, { fontSize: wpt, bold: true, color: it.a ? 'accent3' : 'accent6', valign: 'middle' });
        ['T', 'F'].forEach((t, k) => {
          const on = mode === 'a' && ((t === 'T') === !!it.a); const d = Math.min(0.5, rh - 0.16);
          const col = t === 'T' ? 'accent3' : 'accent6';
          s.addText(t, { shape: this.S.OVAL, x: R - 1.35 + k * 0.65, y: y + rh / 2 - d / 2, w: d, h: d, fill: { color: on ? hx(col) : 'FFFFFF' }, line: { color: mode === 'a' && !on ? 'D5DCE6' : hx(col), width: 1.5 }, color: on ? 'bg1' : mode === 'a' ? 'C3CAD5' : col, bold: true, fontSize: 15, align: 'center', valign: 'middle', margin: 0 });
        });
      });
    }
  }

  // ------------------------------------------------------------ WORD SEARCH (letter grid; the correction highlights each word)
  // words [{w, r, c, d: 'h'|'v'}]; the other cells are filled from a fixed seed
  wordSearch(spec) {
    const R0 = spec.rows; const C0 = spec.cols;
    const grid = Array.from({ length: R0 }, () => Array(C0).fill(null));
    spec.words.forEach(({ w, r, c, d }) => [...w].forEach((ch, k) => {
      const rr = d === 'v' ? r + k : r; const cc = d === 'v' ? c : c + k;
      if (grid[rr][cc] && grid[rr][cc] !== ch) throw new Error(`word search clash at ${rr},${cc}`);
      grid[rr][cc] = ch;
    }));
    let seed = spec.seed || 7; const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    const AB = 'ABCDEFGHIKLMNOPRSTUVWY';
    for (const row of grid) for (let k = 0; k < C0; k++) if (!row[k]) row[k] = AB[Math.floor(rnd() * AB.length)];
    const cols = ['D9EDD5', 'DCE8F5', 'FBE3CC', 'E8DFF2', 'F6DDE9', 'FFF0BF'];
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const cell = Math.min((BOTTOM - y0) / R0, 7.4 / C0);
      const gx = L; const gw = cell * C0; const gh = cell * R0;
      s.addShape(this.S.RECTANGLE, { x: gx, y: y0, w: gw, h: gh, fill: { color: 'FFFFFF' }, line: { color: BORDER, width: 1 }, shadow: shadow() });
      if (mode === 'a') spec.words.forEach(({ w, r, c, d }, i) => {
        const x = gx + c * cell + 0.04; const y = y0 + r * cell + 0.04;
        s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: d === 'v' ? cell - 0.08 : w.length * cell - 0.08, h: d === 'v' ? w.length * cell - 0.08 : cell - 0.08, rectRadius: cell * 0.4, fill: { color: cols[i % cols.length] }, line: { color: 'B9C3CF', width: 0.75 } });
      });
      grid.forEach((row, r) => row.forEach((ch, c) => {
        s.addText(ch, { x: gx + c * cell, y: y0 + r * cell, w: cell, h: cell, fontSize: Math.round(cell * 34), bold: true, color: 'tx2', fontFace: 'Courier New', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      }));
      const lx = gx + gw + 0.5; const lw = R - lx;
      s.addText(spec.listLabel || `FIND ${spec.words.length} WORDS`, { x: lx, y: y0, w: lw, h: 0.36, fontSize: 13, bold: true, color: MAGENTA, charSpacing: 1.5, margin: 0, valign: 'middle', isTextBox: true });
      const n = spec.words.length; const per = Math.ceil(n / 2); const colW = lw / 2; const rh = Math.min(0.5, (BOTTOM - y0 - 0.5) / per);
      spec.words.forEach(({ w, fr }, i) => {
        const x = lx + Math.floor(i / per) * colW; const y = y0 + 0.5 + (i % per) * rh;
        this.icon(s, mode === 'a' ? 'FaRegCheckSquare' : 'FaRegSquare', mode === 'a' ? 'accent3' : 'tx2', x, y + rh / 2 - 0.13, 0.26);
        s.addText([{ text: w.toLowerCase(), options: { bold: true, color: 'tx2' } }, ...(mode === 'a' && fr ? [{ text: '  ' + fr, options: { italic: true, color: 'accent5', fontSize: 11 } }] : [])], { x: x + 0.36, y, w: colW - 0.4, h: rh, fontSize: 15, valign: 'middle', margin: 0, isTextBox: true });
      });
    }
  }

  // ------------------------------------------------------------ FLASHCARDS (front: a clue · back: the word)
  flashcards(spec) {
    const n = spec.cards.length; const per = spec.perRow || 4; const rowsN = Math.ceil(n / per);
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const gap = 0.22; const cw = (W - gap * (per - 1)) / per; const y0 = s.y0; const ch = (BOTTOM - y0 - gap * (rowsN - 1)) / rowsN;
      const qpt = Math.min(...spec.cards.map((c) => fitSize([plain(c.q)], cw - 0.4, ch * (mode === 'a' ? 0.4 : 0.62), 18, 12, 0, 0.5, 'flash')));
      spec.cards.forEach((c, i) => {
        const x = L + (i % per) * (cw + gap); const y = y0 + Math.floor(i / per) * (ch + gap);
        this.box(s, x, y, cw, ch, 'tx2', mode === 'a' ? { fill: 'FFFFFF', lineColor: 'B9D3B4', line: 1.25, shadow: true } : { fill: 'bg2', lineColor: BORDER, line: 0.75 });
        this.num(s, i + 1, x + 0.12, y + 0.12, 0.34, mode === 'a' ? 'accent3' : 'tx2', 12);
        if (mode === 'q') {
          this.text(s, c.q, x + 0.2, y + 0.5, cw - 0.4, ch * 0.62, { fontSize: qpt, align: 'center', valign: 'middle' });
          if (c.hint) this.text(s, c.hint, x + 0.2, y + ch - 0.5, cw - 0.4, 0.36, { fontSize: 13, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
        } else {
          s.addText(parse(c.a, 'a', { bold: true, color: 'accent3' }), { x: x + 0.2, y: y + 0.45, w: cw - 0.4, h: ch * 0.3, fontSize: 22, fontFace: HEAD, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
          if (c.fr) this.text(s, c.fr, x + 0.2, y + 0.45 + ch * 0.3, cw - 0.4, 0.32, { fontSize: 13, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
          this.text(s, c.q, x + 0.2, y + ch * 0.55 + 0.2, cw - 0.4, ch * 0.45 - 0.3, { fontSize: Math.min(qpt, 14), color: 'accent5', align: 'center', valign: 'top' });
        }
      });
    }
  }

  // ============================================================ SÉANCES 9–11: new formats
  // ------------------------------------------------------------ STICKY-NOTE BOARD (pile of post-its → columns of a whiteboard)
  // cols [{h, color}], items [{t (prompt), a (sentence), col, tag, color}]; mode 'show' = board only
  stickyBoard(spec) {
    const PAL = ['FFF1A6', 'FDD8E1', 'D9EFCB', 'D5E8F8'];
    const ROT = [-3, 2, -1.5, 2.5, -2, 1.5, -1, 3, -2.5, 1];
    for (const mode of spec.mode ? [spec.mode] : ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const H = BOTTOM - y0; const all = mode !== 'q';
      const pileW = 4.35; const bx = all ? L : L + pileW + 0.3; const bw = all ? W : W - pileW - 0.3;
      s.addShape(this.S.RECTANGLE, { x: bx, y: y0, w: bw, h: H, fill: { color: 'FFFFFF' }, line: { color: 'B8C1CE', width: 5 }, shadow: shadow() });
      const nc = spec.cols.length; const cw = bw / nc;
      spec.cols.forEach((c, i) => {
        s.addText(c.h, { x: bx + i * cw, y: y0 + 0.1, w: cw, h: 0.6, fontSize: 24, bold: true, fontFace: HEAD, color: c.color || 'tx2', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        if (i) this.ln(s, bx + i * cw, y0 + 0.18, bx + i * cw, y0 + H - (!all && spec.hint ? 0.85 : 0.18), { color: 'tx2', width: 2.25 });
      });
      const draw = (n, i, x, y, w, h, txt, pt) => {
        const runs = [];
        if (n.tag) runs.push({ text: n.tag + '\n', options: { bold: true, fontSize: 11, color: EXP[n.tag] ? EXP[n.tag].c : hx('accent5'), charSpacing: 1 } });
        runs.push(...parse(txt, 'a'));
        s.addText(runs, { shape: this.S.RECTANGLE, x, y, w, h, rotate: ROT[i % ROT.length], fill: { color: n.color || PAL[i % PAL.length] }, line: { type: 'none' }, shadow: shadow(), color: 'tx1', fontSize: pt, align: 'center', valign: 'middle', margin: [0.04, 0.08, 0.04, 0.08] });
      };
      if (all) {
        spec.cols.forEach((c, ci) => {
          const ns = spec.items.map((n, i) => [n, i]).filter(([n]) => n.col === ci);
          const per = spec.perCol || 2; const rows = Math.ceil(ns.length / per);
          const nw = (cw - 0.3 - 0.2 * (per - 1)) / per; const nh2 = Math.min(1.25, (H - 0.95 - 0.18 * (rows - 1)) / Math.max(1, rows));
          const pt = Math.min(15, ...spec.items.map((n) => fitSize([plain(n.a || n.t)], nw - 0.2, nh2 - (n.tag ? 0.3 : 0.1), 15, 11, 0, 0.5, 'sticky')));
          ns.forEach(([n, i], k) => draw(n, i, bx + ci * cw + 0.15 + (k % per) * (nw + 0.2), y0 + 0.85 + Math.floor(k / per) * (nh2 + 0.18), nw, nh2, n.a || n.t, pt));
        });
      } else {
        const N = spec.items.length; const rows = Math.ceil(N / 2); const nw = (pileW - 0.2) / 2; const nh2 = Math.min(1.0, (H - 0.15 * (rows - 1)) / rows);
        const pt = Math.min(15, ...spec.items.map((n) => fitSize([plain(n.t)], nw - 0.2, nh2 - 0.1, 15, 11, 0, 0.5, 'sticky-q')));
        spec.items.forEach((n, i) => draw(n, i, L + (i % 2) * (nw + 0.2), y0 + Math.floor(i / 2) * (nh2 + 0.15), nw, nh2, n.t, pt));
        if (spec.hint) this.text(s, spec.hint, bx + 0.3, y0 + H - 0.75, bw - 0.6, 0.6, { fontSize: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      }
    }
  }

  // ------------------------------------------------------------ SENTENCE TRAIN (word order as wagons)
  // slots [{h, color}], rows [[cell…]] ('' = empty wagon), rowLabels ['+', '–', …]
  train(spec) {
    const s = this.content(spec);
    const slots = spec.slots; const n = slots.length; const nh = this.noteH(spec.note);
    const y0 = s.y0; const gap = 0.12; const lw = 0.85;
    const lens = slots.map((sl, i) => Math.max(plain(sl.h).length * 0.8, ...spec.rows.map((r) => plain(r[i] || '').length), 4));
    const free = W - lw - gap * n; const tot = lens.reduce((a, b) => a + b, 0);
    const ws = lens.map((l) => (l / tot) * free);
    const xs = []; let x = L + lw + gap; ws.forEach((w) => { xs.push(x); x += w + gap; });
    // locomotive + wagons
    this.circleIcon(s, 'FaTrain', 'tx2', L + 0.05, y0 + 0.02, 0.62);
    slots.forEach((sl, i) => {
      const col = sl.color || 'tx2';
      s.addText(sl.h, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.08, x: xs[i], y: y0, w: ws[i], h: 0.6, fill: { color: hx(col) }, line: { type: 'none' }, color: 'bg1', bold: true, fontSize: 12, charSpacing: 1, align: 'center', valign: 'middle', margin: 0 });
      [0.22, 0.78].forEach((f) => s.addShape(this.S.OVAL, { x: xs[i] + ws[i] * f - 0.09, y: y0 + 0.54, w: 0.18, h: 0.18, fill: { color: hx('tx1') }, line: { color: 'FFFFFF', width: 1 } }));
      this.ln(s, (i ? xs[i - 1] + ws[i - 1] : L + 0.67), y0 + 0.3, xs[i], y0 + 0.3, { color: 'tx1', width: 2 });
    });
    const top = y0 + 0.95; const avail = BOTTOM - top - (nh ? nh + 0.25 : 0); const rg = 0.14;
    const rh = Math.min(0.7, (avail - rg * (spec.rows.length - 1)) / spec.rows.length);
    const pt = Math.min(20, ...spec.rows.flatMap((r) => r.map((c, i) => (c ? fitSize([plain(c)], ws[i] - 0.12, rh - 0.06, 20, 12, 0, 0.5, 'train') : 20))));
    spec.rows.forEach((r, k) => {
      const y = top + k * (rh + rg);
      if (spec.rowLabels) s.addText(spec.rowLabels[k], { shape: this.S.OVAL, x: L + 0.17, y: y + rh / 2 - 0.2, w: 0.4, h: 0.4, fill: { color: hx('bg2') }, line: { color: BORDER, width: 1 }, color: 'tx2', bold: true, fontSize: 16, align: 'center', valign: 'middle', margin: 0 });
      r.forEach((c, i) => {
        const col = hx(slots[i].color || 'tx2');
        if (c) s.addText(parse(c, 'a', { bold: true }), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.08, x: xs[i], y, w: ws[i], h: rh, fill: { color: col, transparency: 86 }, line: { color: col, width: 1.25 }, color: 'tx1', fontSize: pt, align: 'center', valign: 'middle', margin: 0 });
        else s.addShape(this.S.ROUNDED_RECTANGLE, { x: xs[i], y, w: ws[i], h: rh, rectRadius: 0.08, fill: { color: 'FFFFFF' }, line: { color: 'D5DCE6', width: 1, dashType: 'dash' } });
      });
    });
    if (spec.note) this.noteBox(s, spec.note, BOTTOM - nh, nh);
  }

  // ------------------------------------------------------------ WHERE DOES IT GO? (numbered gaps between words → the adverb in place)
  // rows [{adv, words, gaps:[k…] (k = before words[k]; words.length = the end), ans}]
  insert(spec) {
    const n = spec.rows.length;
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const rg = 0.2; const rh = Math.min(0.85, (BOTTOM - y0 - rg * (n - 1)) / n);
      const pt = 18; const cw = (t) => Math.max(0.42, plain(t).length * (pt / 72) * 0.5 + 0.34);
      spec.rows.forEach((r, i) => {
        const y = y0 + i * (rh + rg); const ch = Math.min(0.5, rh - 0.12); const cy = y + (rh - ch) / 2;
        this.num(s, i + 1, L, y + rh / 2 - 0.19, 0.38, 'tx2', 13);
        const acol = r.color || 'accent1';
        s.addText(r.adv, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.25, x: L + 0.55, y: cy, w: 1.45, h: ch, fill: { color: hx(acol) }, line: { type: 'none' }, color: 'bg1', bold: true, italic: true, fontSize: 17, align: 'center', valign: 'middle', margin: 0 });
        if (mode === 'q') this.icon(s, 'FaArrowRight', 'accent5', L + 2.1, y + rh / 2 - 0.12, 0.24);
        let x = L + 2.5; let g = 0;
        for (let k = 0; k <= r.words.length; k++) {
          if (r.gaps.includes(k)) {
            g++;
            if (mode === 'q') { this.num(s, g, x, y + rh / 2 - 0.16, 0.32, 'accent1', 11); x += 0.42; }
            else if (k === r.ans) {
              const w = cw(r.adv);
              s.addText(r.adv, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.25, x, y: cy, w, h: ch, fill: { color: hx('accent3') }, line: { type: 'none' }, color: 'bg1', bold: true, italic: true, fontSize: pt, align: 'center', valign: 'middle', margin: 0 });
              x += w + 0.1;
            }
          }
          if (k < r.words.length) {
            const w = cw(r.words[k]);
            s.addText(parse(r.words[k], 'a'), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.08, x, y: cy, w, h: ch, fill: { color: hx('bg2') }, line: { color: BORDER, width: 0.75 }, color: 'tx1', fontSize: pt, align: 'center', valign: 'middle', margin: 0 });
            x += w + 0.1;
          }
        }
      });
    }
  }

  // ------------------------------------------------------------ ERROR AUCTION (bid on the sentences you think are right)
  auction(spec) {
    const n = spec.rows.length;
    for (const mode of ['q', 'a']) {
      const s = this.content({ ...spec, tag: spec.tag || 'GAME' }, mode === 'a');
      let y0 = s.y0;
      if (mode === 'q') {
        this.box(s, L, y0, W, 0.72, MAGENTA, { t: 92 });
        this.circleIcon(s, 'FaGavel', MAGENTA, L + 0.18, y0 + 0.1, 0.52);
        this.text(s, spec.rules, L + 0.85, y0, W - 1.0, 0.72, { fontSize: 16, valign: 'middle' });
        y0 += 0.92;
      }
      const rg = 0.08; const rh = Math.min(0.75, (BOTTOM - y0 - rg * (n - 1)) / n);
      const tw = W - 3.0;
      const pt = Math.min(18, ...spec.rows.map((r) => fitSize([plain(r.s + (mode === 'a' && r.fix ? '  → ' + r.fix : ''))], tw - 0.7, rh, 18, 12, 0, 0.5, 'auction')));
      spec.rows.forEach((r, i) => {
        const y = y0 + i * (rh + rg);
        this.box(s, L, y, W, rh, 'tx2', { fill: i % 2 ? 'FFFFFF' : 'bg2', lineColor: BORDER, line: 0.5 });
        s.addText(`${i + 1}.`, { x: L + 0.15, y, w: 0.45, h: rh, fontSize: pt, bold: true, color: 'tx2', valign: 'middle', margin: 0, isTextBox: true });
        const runs = parse(r.s, 'a', mode === 'a' && !r.ok ? { color: 'accent6', strike: 'sngStrike' } : {});
        if (mode === 'a' && !r.ok && r.fix) runs.push({ text: '   → ', options: { bold: true, color: 'accent3' } }, ...parse(r.fix, 'a', { bold: true, color: 'accent3' }));
        s.addText(runs, { x: L + 0.6, y, w: tw - 0.7, h: rh, fontSize: pt, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
        const bx = R - 2.25; const bh = Math.min(0.48, rh - 0.08);
        if (mode === 'q') {
          s.addShape(this.S.ROUNDED_RECTANGLE, { x: bx, y: y + (rh - bh) / 2, w: 2.0, h: bh, rectRadius: 0.06, fill: { color: 'FFFFFF' }, line: { color: hx(MAGENTA), width: 1.25, dashType: 'dash' } });
          this.icon(s, 'FaCoins', MAGENTA, bx + 0.12, y + rh / 2 - 0.13, 0.26);
          s.addText('€ ……', { x: bx + 0.45, y, w: 1.5, h: rh, fontSize: 15, bold: true, color: MAGENTA, valign: 'middle', margin: 0, isTextBox: true });
        } else {
          const col = r.ok ? 'accent3' : 'accent6';
          s.addText(r.ok ? '✓ CORRECT' : '✗ WRONG', { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.06, x: bx, y: y + (rh - bh) / 2, w: 2.0, h: bh, rotate: r.ok ? -3 : 3, fill: { color: 'FFFFFF' }, line: { color: hx(col), width: 2.25 }, color: col, bold: true, fontSize: 15, charSpacing: 2, align: 'center', valign: 'middle', margin: 0 });
        }
      });
    }
  }

  // ------------------------------------------------------------ ENERGIZER (whole class moves: stand up / sit down, thumbs, cards)
  // actions [{h, t, icon, color}], rules [..], items [{s, a (index of the action)}]
  energizer(spec) {
    // question slide: the rules and the actions
    let s = this.content({ ...spec, tag: 'ENERGIZER', notes: spec.notes });
    let y = s.y0;
    this.box(s, L, y, W, 0.95, ENERGY, { t: 90, line: 1.25 });
    this.circleIcon(s, spec.icon || 'FaBolt', ENERGY, L + 0.22, y + 0.12, 0.72);
    s.addText([...parse(spec.tagline, 'a', { bold: true, fontSize: 21, color: ENERGY, fontFace: HEAD }), { text: '', options: { breakLine: true } }, ...parse(spec.meta, 'a', { fontSize: 15, italic: true, color: 'accent5' })], { x: L + 1.15, y: y + 0.04, w: W - 1.3, h: 0.88, valign: 'middle', margin: 0, isTextBox: true });
    y += 1.2;
    const rulesH = spec.rules ? 0.25 + spec.rules.length * 0.36 : 0;
    const na = spec.actions.length; const gap = 0.3; const aw = (W - gap * (na - 1)) / na; const ah = BOTTOM - y - (rulesH ? rulesH + 0.2 : 0);
    spec.actions.forEach((a, i) => {
      const x = L + i * (aw + gap); const col = a.color || 'tx2';
      this.box(s, x, y, aw, ah, col, { t: 90, line: 1.5 });
      const d = Math.min(1.0, ah * 0.36);
      this.circleIcon(s, a.icon, col, x + aw / 2 - d / 2, y + 0.2, d);
      s.addText(a.h, { x: x + 0.15, y: y + 0.3 + d, w: aw - 0.3, h: 0.55, fontSize: 26, bold: true, fontFace: HEAD, color: col, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      this.text(s, a.t, x + 0.2, y + 0.85 + d, aw - 0.4, ah - 0.95 - d, { fontSize: 17, align: 'center', valign: 'top' });
    });
    if (spec.rules) {
      const ps = spec.rules.map((r, i) => ({ runs: [{ text: `${i + 1}.  `, options: { bold: true, color: ENERGY } }, ...parse(r)], opts: { paraSpaceAfter: 2 } }));
      s.addText(flow(ps), { x: L + 0.1, y: BOTTOM - rulesH, w: W - 0.2, h: rulesH, fontSize: 16, color: 'tx1', valign: 'bottom', margin: 0, isTextBox: true });
    }
    // correction slide: every item with the right action
    s = this.content({ ...spec, tag: 'ENERGIZER', instr: spec.instrA, notes: spec.notesA }, true);
    const n = spec.items.length; const cols = n > 6 ? 2 : 1; const per = Math.ceil(n / cols); const cg = 0.3; const cw = (W - cg * (cols - 1)) / cols;
    const rg = 0.1; const rh = Math.min(0.75, (BOTTOM - s.y0 - rg * (per - 1)) / per);
    const pt = Math.min(18, ...spec.items.map((it) => fitSize([plain(it.s)], cw - 2.4, rh - 0.06, 18, 12, 0, 0.5, 'energizer')));
    spec.items.forEach((it, i) => {
      const x = L + Math.floor(i / per) * (cw + cg); const yy = s.y0 + (i % per) * (rh + rg);
      const a = spec.actions[it.a]; const col = a.color || 'tx2';
      this.box(s, x, yy, cw, rh, col, { t: 93, line: 0.75 });
      this.circleIcon(s, a.icon, col, x + 0.12, yy + rh / 2 - 0.22, 0.44);
      this.text(s, it.s, x + 0.7, yy, cw - 2.35, rh, { fontSize: pt, valign: 'middle' });
      s.addText(a.h, { x: x + cw - 1.65, y: yy, w: 1.55, h: rh, fontSize: 13, bold: true, color: col, align: 'right', valign: 'middle', margin: 0, isTextBox: true });
    });
  }

  // ------------------------------------------------------------ BEAT THE CLOCK (a ring timer + prompts → answers)
  countdown(spec) {
    const n = spec.prompts.length;
    for (const mode of ['q', 'a']) {
      const s = this.content({ ...spec, tag: spec.tag || 'GAME' }, mode === 'a');
      const y0 = s.y0; const lw = 3.4; const d = 2.6; const cx = L + lw / 2 - d / 2;
      s.addShape(this.S.OVAL, { x: cx, y: y0 + 0.05, w: d, h: d, fill: { color: 'FFFFFF' }, line: { color: 'E3E8EF', width: 10 } });
      s.addShape(this.S.BLOCK_ARC, { x: cx, y: y0 + 0.05, w: d, h: d, angleRange: mode === 'q' ? [270, 180] : [270, 269.9], arcThicknessRatio: 0.09, fill: { color: mode === 'q' ? MAGENTA : hx('accent3') }, line: { type: 'none' } });
      s.addText([{ text: mode === 'q' ? String(spec.seconds || 60) : '✓', options: { fontSize: 54, bold: true, fontFace: HEAD, color: mode === 'q' ? MAGENTA : hx('accent3'), breakLine: true } }, { text: mode === 'q' ? 'SECONDS' : 'TIME!', options: { fontSize: 12, bold: true, charSpacing: 3, color: 'accent5' } }], { x: cx, y: y0 + 0.05, w: d, h: d, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      this.text(s, spec.challenge, L, y0 + d + 0.3, lw, 1.0, { fontSize: 17, bold: true, color: 'tx2', align: 'center', valign: 'top' });
      if (spec.scoring) this.text(s, spec.scoring, L, y0 + d + 1.3, lw, BOTTOM - y0 - d - 1.3, { fontSize: 14, italic: true, color: 'accent5', align: 'center', valign: 'top' });
      const gx = L + lw + 0.45; const gw = R - gx; const cols = 2; const per = Math.ceil(n / cols); const cg = 0.2; const tw = (gw - cg) / cols;
      const rg = 0.14; const th = (BOTTOM - y0 - rg * (per - 1)) / per;
      const qpt = Math.min(18, ...spec.prompts.map((p) => fitSize([plain(p.q)], tw - 0.75, mode === 'a' ? th * 0.45 : th - 0.1, 18, 12, 0, 0.5, 'count-q')));
      spec.prompts.forEach((p, i) => {
        const x = gx + Math.floor(i / per) * (tw + cg); const y = y0 + (i % per) * (th + rg);
        this.box(s, x, y, tw, th, 'tx2', mode === 'a' ? { fill: 'FFFFFF', lineColor: 'B9D3B4', line: 1 } : { fill: 'bg2', lineColor: BORDER, line: 0.75 });
        this.num(s, i + 1, x + 0.12, y + th / 2 - 0.18, 0.36, mode === 'a' ? 'accent3' : 'tx2', 12);
        if (mode === 'q') this.text(s, p.q, x + 0.62, y, tw - 0.75, th, { fontSize: qpt, valign: 'middle' });
        else {
          this.text(s, p.q, x + 0.62, y + 0.04, tw - 0.75, th * 0.46, { fontSize: Math.min(13, qpt), color: 'accent5', valign: 'bottom' });
          this.text(s, p.a, x + 0.62, y + th * 0.5, tw - 0.75, th * 0.46, { fontSize: 17, bold: true, color: 'accent3', valign: 'top' });
        }
      });
    }
  }

  // ------------------------------------------------------------ TRAFFIC LIGHT (progress language by status)
  // rows [{color, h, items:[[en, fr]…], ex, icon?}] — the first three sit in the traffic light
  trafficLight(spec) {
    const s = this.content(spec);
    const y0 = s.y0; const n = spec.rows.length; const rg = 0.18; const rh = (BOTTOM - y0 - rg * (n - 1)) / n;
    const hw = 1.25; const inLight = spec.rows.filter((r) => !r.icon).length;
    s.addShape(this.S.ROUNDED_RECTANGLE, { x: L + 0.05, y: y0 - 0.05, w: hw, h: inLight * rh + (inLight - 1) * rg + 0.1, rectRadius: 0.15, fill: { color: '2B3442' }, line: { type: 'none' }, shadow: shadow() });
    const ex0 = L + hw + 0.4; const exw = R - ex0;
    spec.rows.forEach((r, i) => {
      const y = y0 + i * (rh + rg); const col = r.color; const dd = Math.min(0.95, rh - 0.2);
      if (r.icon) this.circleIcon(s, r.icon, col, L + 0.05 + hw / 2 - dd / 2, y + rh / 2 - dd / 2, dd);
      else {
        s.addShape(this.S.OVAL, { x: L + 0.05 + hw / 2 - dd / 2 - 0.05, y: y + rh / 2 - dd / 2 - 0.05, w: dd + 0.1, h: dd + 0.1, fill: { color: '1B2333' }, line: { type: 'none' } });
        s.addShape(this.S.OVAL, { x: L + 0.05 + hw / 2 - dd / 2, y: y + rh / 2 - dd / 2, w: dd, h: dd, fill: { color: hx(col) }, line: { color: 'FFFFFF', width: 1.5, transparency: 50 } });
      }
      this.box(s, ex0, y, exw, rh, col, { t: 92, line: 1 });
      s.addText(r.h, { x: ex0 + 0.2, y: y + 0.08, w: exw - 0.4, h: 0.32, fontSize: 13, bold: true, color: col, charSpacing: 1.5, margin: 0, valign: 'middle', isTextBox: true });
      const iw = exw * 0.5;
      const ps = r.items.map(([en, fr]) => ({ runs: [...parse(en, 'a', { bold: true, color: 'tx1' }), { text: '   ' + fr, options: { italic: true, color: 'accent5', fontSize: 13 } }], opts: { paraSpaceAfter: 2 } }));
      const ipt = fitSize(r.items.map(([en, fr]) => plain(en) + '   ' + fr), iw, rh - 0.5, 17, 12, 2, 0.5, 'traffic');
      s.addText(flow(ps), { x: ex0 + 0.2, y: y + 0.42, w: iw, h: rh - 0.5, fontSize: ipt, valign: 'top', margin: 0, isTextBox: true });
      if (r.ex) this.text(s, r.ex, ex0 + iw + 0.35, y + 0.42, exw - iw - 0.55, rh - 0.5, { fontSize: Math.min(15, fitSize([plain(r.ex)], exw - iw - 0.55, rh - 0.5, 15, 12, 0, 0.5, 'traffic-ex')), italic: true, valign: 'top' });
    });
  }

  // ------------------------------------------------------------ STATUS DASHBOARD (tiles with a red / amber / green status)
  dashboard(spec) {
    const ST = { G: ['accent3', 'ON TRACK'], A: [AMBER, 'AT RISK'], R: ['accent6', 'BLOCKED'] };
    const n = spec.items.length; const per = spec.perRow || 3; const rows = Math.ceil(n / per);
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const gap = 0.25; const cw = (W - gap * (per - 1)) / per; const ch = (BOTTOM - y0 - gap * (rows - 1)) / rows;
      const pt = Math.min(17, ...spec.items.map((it) => fitSize([plain(it.a)], cw - 0.4, ch - 1.0, 17, 12, 0, 0.5, 'dash')));
      spec.items.forEach((it, i) => {
        const x = L + (i % per) * (cw + gap); const y = y0 + Math.floor(i / per) * (ch + gap); const [col, lab] = ST[it.status];
        s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: cw, h: ch, rectRadius: 0.08, fill: { color: 'FFFFFF' }, line: { color: BORDER, width: 1 }, shadow: shadow() });
        s.addText(it.name, { x: x + 0.2, y: y + 0.12, w: cw - 1.9, h: 0.45, fontSize: 18, bold: true, fontFace: HEAD, color: 'tx2', valign: 'middle', margin: 0, isTextBox: true });
        s.addShape(this.S.OVAL, { x: x + cw - 1.62, y: y + 0.22, w: 0.24, h: 0.24, fill: { color: hx(col) }, line: { type: 'none' } });
        s.addText(lab, { x: x + cw - 1.32, y: y + 0.12, w: 1.2, h: 0.45, fontSize: 11, bold: true, color: col, charSpacing: 1, valign: 'middle', margin: 0, isTextBox: true });
        s.addShape(this.S.LINE, { x: x + 0.2, y: y + 0.65, w: cw - 0.4, h: 0, line: { color: 'E3E8EF', width: 1 } });
        if (mode === 'q') {
          this.text(s, it.cue, x + 0.2, y + 0.75, cw - 0.4, ch - 1.2, { fontSize: 16, italic: true, color: 'accent5', valign: 'top' });
          s.addShape(this.S.LINE, { x: x + 0.2, y: y + ch - 0.3, w: cw - 0.4, h: 0, line: { color: hx('accent5'), width: 1, dashType: 'sysDot' } });
        } else this.text(s, it.a, x + 0.2, y + 0.75, cw - 0.4, ch - 0.85, { fontSize: pt, valign: 'top' });
      });
    }
  }

  // ------------------------------------------------------------ PHONE CHAT (a group chat; your replies appear on the correction)
  // msgs [{who, t, me, a, color}], side {label, lines}; mode 'show' = one slide with the answers
  phoneFrame(s, x, y, w, h, group, meta) {
    s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.32, fill: { color: '1B2333' }, line: { type: 'none' }, shadow: shadow() });
    const sx = x + 0.12; const sy = y + 0.14; const sw = w - 0.24; const sh = h - 0.28;
    s.addShape(this.S.ROUNDED_RECTANGLE, { x: sx, y: sy, w: sw, h: sh, rectRadius: 0.24, fill: { color: 'ECE5DD' }, line: { type: 'none' } });
    s.addShape(this.S.ROUNDED_RECTANGLE, { x: sx, y: sy, w: sw, h: 0.62, rectRadius: 0.24, fill: { color: hx('tx2') }, line: { type: 'none' } });
    s.addShape(this.S.RECTANGLE, { x: sx, y: sy + 0.4, w: sw, h: 0.22, fill: { color: hx('tx2') }, line: { type: 'none' } });
    s.addShape(this.S.ROUNDED_RECTANGLE, { x: x + w / 2 - 0.45, y: y + 0.14, w: 0.9, h: 0.1, rectRadius: 0.05, fill: { color: '1B2333' }, line: { type: 'none' } });
    this.circleIcon(s, 'FaUsers', 'accent2', sx + 0.12, sy + 0.12, 0.42);
    s.addText([{ text: group, options: { bold: true, fontSize: 13, color: 'FFFFFF', breakLine: true } }, { text: meta || '', options: { fontSize: 10, color: 'D5DCE6' } }], { x: sx + 0.62, y: sy + 0.06, w: sw - 0.7, h: 0.52, valign: 'middle', margin: 0, isTextBox: true });
    return { x: sx + 0.15, y: sy + 0.75, w: sw - 0.3, h: sh - 0.85 };
  }
  phone(spec) {
    for (const mode of spec.mode ? [spec.mode] : ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const pw = spec.phoneW || 4.6; const ph = BOTTOM - y0;
      const scr = this.phoneFrame(s, L + 0.1, y0, pw, ph, spec.group, spec.meta);
      const bw = scr.w * 0.8; const gapM = 0.08;
      const txt = (m) => (m.me && mode !== 'q' ? m.a || m.t : m.t);
      const hOfP = (m, p) => linesFor((m.me ? '' : m.who + ': ') + plain(txt(m) || '…'), bw - 0.24, p, 0.5) * (p / 72) * 1.2 + 0.14;
      let pt = spec.size || 16;
      const total = (p) => spec.msgs.reduce((a, m) => a + (m.minH ? 0.6 : hOfP(m, p)), 0) + gapM * (spec.msgs.length - 1);
      while (pt > 10 && total(pt) > scr.h) pt--;
      const hOf = (m) => hOfP(m, pt);
      const rest = scr.h - total(pt) + 0.6;
      let yy = scr.y;
      spec.msgs.forEach((m) => {
        const h = m.minH ? Math.max(0.6, Math.min(m.minH, rest)) : hOf(m); const x = m.me ? scr.x + scr.w - bw : scr.x;
        if (m.me && mode === 'q' && !m.t) {
          s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: yy, w: bw, h, rectRadius: 0.1, fill: { color: 'FFFFFF', transparency: 30 }, line: { color: '6FAE5A', width: 1.25, dashType: 'dash' } });
          s.addText('Your reply…', { x: x + 0.12, y: yy, w: bw - 0.24, h, fontSize: pt, italic: true, color: '6FAE5A', valign: 'middle', margin: 0, isTextBox: true });
        } else {
          s.addShape(this.S.ROUNDED_RECTANGLE, { x, y: yy, w: bw, h, rectRadius: 0.1, fill: { color: m.me ? 'DCF8C6' : 'FFFFFF' }, line: { type: 'none' }, shadow: { type: 'outer', color: '000000', blur: 2, offset: 1, angle: 90, opacity: 0.12 } });
          const runs = [];
          if (!m.me) runs.push({ text: m.who + ':  ', options: { bold: true, color: hx(m.color || 'accent2') } });
          runs.push(...parse(txt(m), 'a'));
          s.addText(runs, { x: x + 0.12, y: yy + 0.06, w: bw - 0.24, h: h - 0.12, fontSize: pt, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
        }
        yy += h + gapM;
      });
      if (spec.side) {
        const sx = L + pw + 0.55; const sw = R - sx;
        this.box(s, sx, y0, sw, ph, spec.side.color || 'accent4', { t: 92, line: 0.75 });
        this.icon(s, spec.side.icon || 'FaCommentDots', spec.side.color || 'accent4', sx + 0.22, y0 + 0.2, 0.34);
        s.addText(mode === 'a' && spec.side.labelA ? spec.side.labelA : spec.side.label, { x: sx + 0.68, y: y0 + 0.16, w: sw - 0.85, h: 0.42, fontSize: 13, bold: true, color: spec.side.color || 'accent4', charSpacing: 1.5, valign: 'middle', margin: 0, isTextBox: true });
        const lines = mode === 'a' && spec.side.linesA ? spec.side.linesA : spec.side.lines;
        this.paras(s, lines, sx + 0.25, y0 + 0.75, sw - 0.45, ph - 0.9, { bullet: true, after: 8, fit: [18, 13] });
      }
    }
  }

  // ------------------------------------------------------------ ESCAPE ROOM (four answers = four digits = the code)
  // questions [{q, opts:[{d, t}], ans}], code, reveal
  escape(spec) {
    for (const mode of ['q', 'a']) {
      const s = this.content({ ...spec, tag: spec.tag || 'GAME', instr: mode === 'a' && spec.reveal ? spec.reveal : spec.instr }, mode === 'a');
      const y = s.y0;
      const codeH = 0.72; const nq = spec.questions.length; const per = 2; const rows = Math.ceil(nq / per); const gap = 0.22;
      const cw = (W - gap) / per; const ch = (BOTTOM - y - codeH - 0.22 - gap * (rows - 1)) / rows;
      spec.questions.forEach((qq, i) => {
        const x = L + (i % per) * (cw + gap); const yy = y + Math.floor(i / per) * (ch + gap);
        this.box(s, x, yy, cw, ch, 'tx2', { fill: 'bg2', lineColor: BORDER, line: 0.75 });
        this.icon(s, mode === 'a' ? 'FaLockOpen' : 'FaLock', mode === 'a' ? 'accent3' : 'tx2', x + 0.2, yy + 0.13, 0.26);
        s.addText(`DIGIT ${i + 1}`, { x: x + 0.55, y: yy + 0.1, w: 1.5, h: 0.32, fontSize: 11, bold: true, color: 'accent5', charSpacing: 1.5, valign: 'middle', margin: 0, isTextBox: true });
        s.addText(mode === 'a' ? qq.opts[qq.ans].d : '?', { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.06, x: x + cw - 0.72, y: yy + 0.12, w: 0.52, h: 0.52, fill: { color: mode === 'a' ? hx('accent3') : 'FFFFFF' }, line: { color: hx(mode === 'a' ? 'accent3' : 'tx2'), width: 1.5 }, color: mode === 'a' ? 'bg1' : 'tx2', bold: true, fontSize: 22, fontFace: HEAD, align: 'center', valign: 'middle', margin: 0 });
        this.text(s, qq.q, x + 0.2, yy + 0.42, cw - 1.05, 0.5, { fontSize: 15, bold: true, color: 'tx2', valign: 'middle' });
        // options side by side: digit + answer
        const no = qq.opts.length; const og = 0.12; const ow = (cw - 0.3 - og * (no - 1)) / no; const oy = yy + 0.98; const oh = Math.min(0.7, ch - 1.08);
        const opt = Math.min(15, ...qq.opts.map((o) => fitSize([plain(o.t)], ow - 0.6, oh - 0.06, 15, 11, 0, 0.5, 'escape')));
        qq.opts.forEach((o, k) => {
          const ok = mode === 'a' && k === qq.ans; const dim = mode === 'a' && !ok; const ox = x + 0.15 + k * (ow + og);
          this.box(s, ox, oy, ow, oh, ok ? 'accent3' : 'tx2', ok ? { t: 85, line: 1.5 } : { fill: 'FFFFFF', lineColor: BORDER, line: 0.75 });
          this.num(s, o.d, ox + 0.1, oy + oh / 2 - 0.17, 0.34, ok ? 'accent3' : dim ? 'B8C1CE' : 'tx2', 13);
          this.text(s, o.t, ox + 0.52, oy, ow - 0.6, oh, { fontSize: opt, valign: 'middle', color: dim ? 'accent5' : 'tx1' });
        });
      });
      const cy = BOTTOM - codeH;
      this.box(s, L, cy, W, codeH, mode === 'a' ? 'accent3' : 'tx2', { t: 90, line: 1.25 });
      this.icon(s, mode === 'a' ? 'FaLockOpen' : 'FaKey', mode === 'a' ? 'accent3' : 'tx2', L + 0.3, cy + codeH / 2 - 0.2, 0.4);
      s.addText('THE CODE', { x: L + 0.85, y: cy, w: 1.6, h: codeH, fontSize: 14, bold: true, charSpacing: 2, color: mode === 'a' ? 'accent3' : 'tx2', valign: 'middle', margin: 0, isTextBox: true });
      [...spec.code].forEach((dg, k) => s.addText(mode === 'a' ? dg : '', { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.06, x: L + 2.55 + k * 0.72, y: cy + 0.1, w: 0.58, h: codeH - 0.2, fill: { color: 'FFFFFF' }, line: { color: hx(mode === 'a' ? 'accent3' : 'tx2'), width: 1.5 }, color: 'accent3', bold: true, fontSize: 24, fontFace: HEAD, align: 'center', valign: 'middle', margin: 0 }));
      const nx = L + 2.55 + spec.code.length * 0.72 + 0.25;
      if (spec.codeNote) this.text(s, mode === 'a' ? (spec.codeNoteA || spec.codeNote) : spec.codeNote, nx, cy, R - nx - 0.2, codeH, { fontSize: 15, italic: true, color: 'accent5', valign: 'middle' });
    }
  }

  // ------------------------------------------------------------ ROLL THE DICE (six faces, six prompts)
  dice(spec) {
    const s = this.content({ ...spec, tag: spec.tag || 'GAME' });
    const nh = this.noteH(spec.note);
    const per = spec.perRow || 3; const rowsN = Math.ceil(spec.faces.length / per);
    const y0 = s.y0; const gap = 0.25; const cw = (W - gap * (per - 1)) / per; const ch = (BOTTOM - y0 - (nh ? nh + 0.25 : 0) - gap * (rowsN - 1)) / rowsN;
    const PIPS = { 1: [[1, 1]], 2: [[0, 0], [2, 2]], 3: [[0, 0], [1, 1], [2, 2]], 4: [[0, 0], [0, 2], [2, 0], [2, 2]], 5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]], 6: [[0, 0], [1, 0], [2, 0], [0, 2], [1, 2], [2, 2]] };
    const dd0 = Math.min(1.15, ch - 0.3);
    const pt = Math.min(18, ...spec.faces.map((f) => fitSize([plain(f.t)], cw - dd0 - 0.55, ch - 0.16 - 0.36, 18, 12, 0, 0.5, 'dice')));
    spec.faces.forEach((f, i) => {
      const x = L + (i % per) * (cw + gap); const y = y0 + Math.floor(i / per) * (ch + gap); const col = f.color || 'tx2';
      this.box(s, x, y, cw, ch, col, { t: 92, line: 1 });
      const dd = dd0; const dx = x + 0.2; const dy = y + (ch - dd) / 2;
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: dx, y: dy, w: dd, h: dd, rectRadius: 0.15, fill: { color: 'FFFFFF' }, line: { color: hx(col), width: 2 }, shadow: shadow() });
      const pd = dd * 0.17;
      PIPS[i + 1].forEach(([r, c]) => s.addShape(this.S.OVAL, { x: dx + dd * (0.22 + c * 0.28) - pd / 2, y: dy + dd * (0.22 + r * 0.28) - pd / 2, w: pd, h: pd, fill: { color: hx(col) }, line: { type: 'none' } }));
      s.addText([{ text: f.h, options: { fontSize: 18, bold: true, fontFace: HEAD, color: hx(col), breakLine: true } }, ...parse(f.t, 'a', { fontSize: pt })], { x: dx + dd + 0.25, y: y + 0.08, w: cw - dd - 0.45, h: ch - 0.16, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
    });
    if (spec.note) this.noteBox(s, spec.note, BOTTOM - nh, nh);
  }

  // ------------------------------------------------------------ DOMINOES (tiles to chain: each right half matches the next left half)
  // tiles in the right order [{l, r}], shuffle = order on the question slide
  dominoes(spec) {
    const n = spec.tiles.length; const per = spec.perRow || 3; const rows = Math.ceil(n / per);
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const gx = mode === 'a' ? 0.45 : 0.35; const gy = 0.3;
      const tw = (W - gx * (per - 1)) / per; const th = Math.min(1.05, (BOTTOM - y0 - gy * (rows - 1)) / rows);
      const order = mode === 'q' ? spec.shuffle : spec.tiles.map((_, i) => i);
      const pt = Math.min(20, ...spec.tiles.flatMap((t) => [t.l, t.r].map((v) => fitSize([plain(v)], tw / 2 - 0.25, th - 0.15, 20, 12, 0, 0.5, 'domino'))));
      order.forEach((ti, k) => {
        const t = spec.tiles[ti]; const x = L + (k % per) * (tw + gx); const y = y0 + Math.floor(k / per) * (th + gy);
        s.addShape(this.S.ROUNDED_RECTANGLE, { x, y, w: tw, h: th, rectRadius: 0.12, fill: { color: 'FFFFFF' }, line: { color: hx('tx2'), width: 2.25 }, shadow: shadow() });
        this.ln(s, x + tw / 2, y + 0.12, x + tw / 2, y + th - 0.12, { color: 'tx2', width: 1.5 });
        s.addShape(this.S.OVAL, { x: x + tw / 2 - 0.07, y: y + th / 2 - 0.07, w: 0.14, h: 0.14, fill: { color: hx('tx2') }, line: { type: 'none' } });
        [[t.l, x + 0.1], [t.r, x + tw / 2 + 0.1]].forEach(([v, xx], side) => {
          const special = /^(START|FINISH)$/.test(v);
          s.addText(parse(v, 'a', special ? { bold: true, color: MAGENTA, charSpacing: 2 } : side ? { bold: true, color: 'tx2' } : { color: 'accent3', bold: true }), { x: xx, y, w: tw / 2 - 0.2, h: th, fontSize: special ? 14 : pt, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        });
        if (mode === 'a') {
          this.num(s, k + 1, x - 0.12, y - 0.12, 0.32, 'accent3', 11);
          if (k % per < per - 1 && k < n - 1) this.icon(s, 'FaArrowRight', 'accent3', x + tw + 0.1, y + th / 2 - 0.12, 0.24);
        }
      });
    }
  }

  // ------------------------------------------------------------ CROSSWORD (numbered grid + clues; the correction fills the letters)
  // words [{w, r, c, d:'h'|'v', n, clue}]
  crossword(spec) {
    const cells = {}; let R0 = 0; let C0 = 0;
    spec.words.forEach(({ w, r, c, d }) => [...w].forEach((ch, k) => {
      const rr = d === 'v' ? r + k : r; const cc = d === 'v' ? c : c + k;
      if (cells[`${rr},${cc}`] && cells[`${rr},${cc}`] !== ch) throw new Error(`crossword clash at ${rr},${cc}`);
      cells[`${rr},${cc}`] = ch; R0 = Math.max(R0, rr + 1); C0 = Math.max(C0, cc + 1);
    }));
    const nums = {}; spec.words.forEach((wd) => { nums[`${wd.r},${wd.c}`] = wd.n; });
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const cell = Math.min((BOTTOM - y0) / R0, 6.4 / C0); const gx = L;
      Object.entries(cells).forEach(([k, ch]) => {
        const [r, c] = k.split(',').map(Number); const x = gx + c * cell; const y = y0 + r * cell;
        s.addShape(this.S.RECTANGLE, { x, y, w: cell, h: cell, fill: { color: mode === 'a' ? 'EEF6EC' : 'FFFFFF' }, line: { color: hx('tx2'), width: 1.25 } });
        if (nums[k]) s.addText(String(nums[k]), { x: x + 0.03, y: y + 0.01, w: cell * 0.5, h: cell * 0.35, fontSize: 9, bold: true, color: 'tx2', margin: 0, isTextBox: true });
        if (mode === 'a') s.addText(ch, { x, y: y + cell * 0.05, w: cell, h: cell, fontSize: Math.round(cell * 34), bold: true, color: 'accent3', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      });
      const cx = gx + C0 * cell + 0.45; const cw = R - cx;
      const ps = [];
      [['ACROSS', 'h'], ['DOWN', 'v']].forEach(([lab, d]) => {
        ps.push({ runs: [{ text: lab, options: { bold: true, color: MAGENTA, charSpacing: 2, fontSize: 13 } }], opts: { paraSpaceAfter: 4, paraSpaceBefore: ps.length ? 10 : 0 } });
        spec.words.filter((wd) => wd.d === d).sort((a, b) => a.n - b.n).forEach((wd) => {
          const runs = [{ text: `${wd.n}  `, options: { bold: true, color: 'tx2' } }, ...parse(wd.clue, 'a')];
          if (mode === 'a') runs.push({ text: '  → ' + wd.w.toLowerCase(), options: { bold: true, color: 'accent3' } });
          else runs.push({ text: `  (${wd.w.length})`, options: { color: 'accent5' } });
          ps.push({ runs, opts: { paraSpaceAfter: 5 } });
        });
      });
      const texts = spec.words.map((wd) => `${wd.n}  ${plain(wd.clue)}  → ${wd.w}`);
      const pt = fitSize(texts, cw, BOTTOM - y0 - 0.8, 16, 11, 5, 0.5, 'cross');
      s.addText(flow(ps), { x: cx, y: y0, w: cw, h: BOTTOM - y0, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    }
  }

  // ------------------------------------------------------------ FORMALITY SLIDER (chips → their place on an informal–formal line)
  // items [{t, v (0–100)}], ends [left, right]
  slider(spec) {
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      let y0 = s.y0;
      if (mode === 'q') y0 = this.bank(s, spec.items.map((it) => it.t), y0, 'q', { label: 'PLACE THEM', size: 15 }) + 0.35;
      const H = BOTTOM - y0; const barY = mode === 'q' ? y0 + H / 2 - 0.1 : y0 + H / 2 - 0.1;
      const X0 = L + 1.3; const X1 = R - 1.3;
      const segs = ['A9C8E8', '7FAAD6', '4F86C0', '2E5C8A', '1F3864'];
      segs.forEach((c, i) => s.addShape(this.S.RECTANGLE, { x: X0 + (i * (X1 - X0)) / 5, y: barY, w: (X1 - X0) / 5, h: 0.22, fill: { color: c }, line: { type: 'none' } }));
      this.icon(s, 'FaCoffee', 'accent2', L + 0.25, barY - 0.32, 0.5);
      s.addText(spec.ends[0], { x: L, y: barY + 0.25, w: 1.25, h: 0.35, fontSize: 12, bold: true, color: 'accent2', align: 'center', charSpacing: 1, margin: 0, isTextBox: true });
      this.icon(s, 'FaUserTie', 'tx2', R - 0.75, barY - 0.32, 0.5);
      s.addText(spec.ends[1], { x: R - 1.25, y: barY + 0.25, w: 1.25, h: 0.35, fontSize: 12, bold: true, color: 'tx2', align: 'center', charSpacing: 1, margin: 0, isTextBox: true });
      if (mode === 'a') {
        const sorted = spec.items.map((it, i) => ({ ...it, i })).sort((a, b) => a.v - b.v);
        const lanes = [-1.55, 0.75, -0.85, 1.45];
        sorted.forEach((it, k) => {
          const cx = X0 + (it.v / 100) * (X1 - X0); const lane = lanes[k % 4]; const w = Math.max(1.0, plain(it.t).length * 0.105 + 0.35);
          const x = Math.min(Math.max(cx - w / 2, L), R - w); const y = barY + 0.11 + lane - 0.21;
          this.ln(s, cx, lane < 0 ? y + 0.42 : barY + 0.22, cx, lane < 0 ? barY : y, { color: 'accent5', width: 1, dash: 'sysDot' });
          s.addShape(this.S.OVAL, { x: cx - 0.08, y: barY + 0.03, w: 0.16, h: 0.16, fill: { color: 'FFFFFF' }, line: { color: hx('tx2'), width: 1.25 } });
          s.addText(parse(it.t, 'a'), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.2, x, y, w, h: 0.42, fill: { color: 'FFFFFF' }, line: { color: hx('tx2'), width: 1 }, color: 'tx1', bold: true, fontSize: 14, align: 'center', valign: 'middle', margin: 0 });
        });
      } else {
        this.text(s, spec.hint || 'Where does each expression go? Discuss in pairs, then place it on the line.', L + 1.3, barY + 0.55, W - 2.6, 0.5, { fontSize: 16, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      }
    }
  }

  // ------------------------------------------------------------ ANNOTATED DOCUMENT (a text with numbered marks + callouts that link back to earlier sessions)
  // paras with ⟨n⟩ marks and $$highlights$$; callouts [{n, h, t, s (session tag)}]
  annotated(spec) {
    const s = this.content(spec);
    const y0 = s.y0; const dw = spec.docW || 7.2; const h = BOTTOM - y0;
    const top = spec.mail ? this.mailChrome(s, L, y0, dw, h, spec.mail) : this.docChrome(s, L, y0, dw, spec, h);
    const mk = (str) => {
      const out = [];
      String(str).split(/⟨(\d)⟩/).forEach((part, i) => {
        if (i % 2) out.push({ text: ` ${part} `, options: { bold: true, color: 'FFFFFF', highlight: hx('accent1') } });
        else if (part) out.push(...parse(part, 'a'));
      });
      return out;
    };
    const ph = y0 + h - top - 0.15;
    const pt = spec.size || fitSize(spec.paras.map(plain), dw - 0.7, ph, 18, 12, 9, 0.5, 'annot');
    s.addText(flow(spec.paras.map((p) => ({ runs: mk(p), opts: { paraSpaceAfter: 9, lineSpacingMultiple: 1.15 } }))), { x: L + 0.35, y: top, w: dw - 0.7, h: ph, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    const cx = L + dw + 0.35; const cw = R - cx; const n = spec.callouts.length; const gap = 0.12; const ch = (h - gap * (n - 1)) / n;
    const npt = Math.min(15, ...spec.callouts.map((c) => fitSize([plain(c.t)], cw - 0.75, ch - 0.42, 15, 11, 0, 0.5, 'annot-n')));
    spec.callouts.forEach((c, i) => {
      const y = y0 + i * (ch + gap);
      this.box(s, cx, y, cw, ch, TEAL, { t: 93, line: 0.75 });
      this.num(s, c.n, cx + 0.12, y + 0.1, 0.36, 'accent1', 12);
      s.addText([{ text: c.h, options: { bold: true, color: TEAL } }, ...(c.s ? [{ text: '   ' + c.s, options: { italic: true, color: 'accent5', fontSize: 11 } }] : [])], { x: cx + 0.6, y: y + 0.06, w: cw - 0.7, h: 0.38, fontSize: 14, valign: 'middle', margin: 0, isTextBox: true });
      this.text(s, c.t, cx + 0.6, y + 0.42, cw - 0.72, ch - 0.46, { fontSize: npt, valign: 'top' });
    });
  }

  // ------------------------------------------------------------ METRO MAP (the grammar line: past stations, you are here, next stops)
  // stations [{s, h, ex, state: 'done'|'here'|'next'}]
  metro(spec) {
    const s = this.content(spec);
    const nh = this.noteH(spec.note);
    const y0 = s.y0; const H = BOTTOM - y0 - (nh ? nh + 0.25 : 0); const lineY = y0 + H / 2;
    const n = spec.stations.length; const step = W / n; const X = (i) => L + step * (i + 0.5);
    const hereI = spec.stations.findIndex((st) => st.state === 'here');
    s.addShape(this.S.RECTANGLE, { x: X(0), y: lineY - 0.07, w: X(hereI) - X(0), h: 0.14, fill: { color: TEAL }, line: { type: 'none' } });
    this.ln(s, X(hereI), lineY, X(n - 1) + 0.4, lineY, { color: 'B8C1CE', width: 6, dash: 'dash' });
    const cardH = H / 2 - 0.45;
    spec.stations.forEach((st, i) => {
      const x = X(i); const here = st.state === 'here'; const next = st.state === 'next';
      if (here) s.addShape(this.S.OVAL, { x: x - 0.42, y: lineY - 0.42, w: 0.84, h: 0.84, fill: { color: hx(MAGENTA), transparency: 75 }, line: { type: 'none' } });
      const d = here ? 0.52 : 0.36;
      s.addShape(this.S.OVAL, { x: x - d / 2, y: lineY - d / 2, w: d, h: d, fill: { color: here ? hx(MAGENTA) : 'FFFFFF' }, line: { color: next ? 'B8C1CE' : here ? 'FFFFFF' : TEAL, width: 3.5 } });
      const above = i % 2 === 0; const cw = step - 0.12; const cy = above ? lineY - 0.45 - cardH : lineY + 0.45;
      this.ln(s, x, above ? cy + cardH : lineY + d / 2, x, above ? lineY - d / 2 : cy, { color: next ? 'B8C1CE' : TEAL, width: 1 });
      const col = here ? MAGENTA : next ? 'accent5' : TEAL;
      this.box(s, x - cw / 2, cy, cw, cardH, col, here ? { t: 88, line: 2 } : { t: 94, line: 0.75, dash: next ? 'dash' : undefined });
      s.addText(st.s, { x: x - cw / 2 + 0.1, y: cy + 0.06, w: cw - 0.2, h: 0.28, fontSize: 11, bold: true, color: col, charSpacing: 1.5, align: 'center', margin: 0, isTextBox: true });
      s.addText(parse(st.h, 'a', { bold: true }), { x: x - cw / 2 + 0.1, y: cy + 0.32, w: cw - 0.2, h: 0.5, fontSize: 14, fontFace: HEAD, color: here ? MAGENTA : 'tx2', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      this.text(s, st.ex, x - cw / 2 + 0.1, cy + 0.85, cw - 0.2, cardH - 0.9, { fontSize: 12, italic: true, align: 'center', valign: 'top', color: next ? 'accent5' : 'tx1' });
      if (here) s.addText('YOU ARE HERE', { x: x - 0.9, y: above ? lineY + 0.45 : lineY - 0.78, w: 1.8, h: 0.3, fontSize: 11, bold: true, color: MAGENTA, charSpacing: 1.5, align: 'center', margin: 0, isTextBox: true });
    });
    if (spec.note) this.noteBox(s, spec.note, BOTTOM - nh, nh);
  }

  // ------------------------------------------------------------ FIND SOMEONE WHO… (mingle grid)
  mingle(spec) {
    const s = this.content({ ...spec, tag: spec.tag || 'SPEAKING' });
    const nh = this.noteH(spec.note);
    const n = spec.cells.length; const per = spec.perRow || 3; const rows = Math.ceil(n / per);
    const y0 = s.y0; const gap = 0.2; const cw = (W - gap * (per - 1)) / per; const ch = (BOTTOM - y0 - (nh ? nh + 0.25 : 0) - gap * (rows - 1)) / rows;
    const pt = Math.min(17, ...spec.cells.map((c) => fitSize(['… ' + plain(c)], cw - 0.8, ch - 0.42, 17, 12, 0, 0.5, 'mingle')));
    spec.cells.forEach((c, i) => {
      const x = L + (i % per) * (cw + gap); const y = y0 + Math.floor(i / per) * (ch + gap);
      this.box(s, x, y, cw, ch, 'accent4', { fill: i % 2 ? 'FFFFFF' : 'bg2', lineColor: BORDER, line: 0.75 });
      this.icon(s, 'FaUserFriends', 'accent4', x + 0.18, y + 0.16, 0.34);
      this.text(s, '… ' + c, x + 0.65, y + 0.1, cw - 0.8, ch - 0.45, { fontSize: pt, valign: 'top' });
      s.addText('Name:', { x: x + 0.65, y: y + ch - 0.4, w: 0.7, h: 0.3, fontSize: 12, bold: true, color: 'accent5', margin: 0, isTextBox: true });
      this.ln(s, x + 1.3, y + ch - 0.14, x + cw - 0.2, y + ch - 0.14, { color: 'accent5', width: 0.75, dash: 'sysDot' });
    });
    if (spec.note) this.noteBox(s, spec.note, BOTTOM - nh, nh);
  }

  // ============================================================ SÉANCES 12–14: new formats
  // ------------------------------------------------------------ EITHER / OR (two pills per line; the correction picks one)
  // rows [{s: 'sentence with ___', opts: [a, b], ans}]
  either(spec) {
    const n = spec.rows.length;
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const note = mode === 'a' ? spec.note : undefined; const nh = this.noteH(note);
      const y0 = s.y0; const rg = 0.1; const rh = Math.min(0.82, (BOTTOM - y0 - (nh ? nh + 0.25 : 0) - rg * (n - 1)) / n);
      const longest = Math.max(...spec.rows.flatMap((r) => r.opts.map((o) => plain(o).length)));
      const pw = Math.min(2.6, Math.max(1.3, longest * 0.12 + 0.55)); const pg = 0.16;
      const tw = W - 0.65 - 2 * pw - pg - 0.35;
      const txt = (r) => (mode === 'a' ? r.s.replace('___', '@@' + r.opts[r.ans] + '@@') : r.s);
      const pt = Math.min(20, ...spec.rows.map((r) => fitSize([plain(txt(r)).replace('___', '………')], tw, rh - 0.06, 20, 13, 0, 0.5, 'either')));
      spec.rows.forEach((r, i) => {
        const y = y0 + i * (rh + rg);
        this.box(s, L, y, W, rh, 'tx2', { fill: i % 2 ? 'FFFFFF' : 'bg2', lineColor: BORDER, line: 0.5 });
        s.addText(`${i + 1}.`, { x: L + 0.15, y, w: 0.45, h: rh, fontSize: pt, bold: true, color: 'tx2', valign: 'middle', margin: 0, isTextBox: true });
        this.text(s, txt(r), L + 0.65, y, tw, rh, { fontSize: pt, valign: 'middle' });
        r.opts.forEach((o, k) => {
          const x = R - 0.15 - (2 - k) * pw - (1 - k) * pg; const ph = Math.min(0.5, rh - 0.14); const py = y + (rh - ph) / 2;
          const ok = mode === 'a' && k === r.ans; const no = mode === 'a' && k !== r.ans;
          s.addText(parse((ok ? '✓ ' : '') + o, 'a', no ? { strike: 'sngStrike' } : {}), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.25, x, y: py, w: pw, h: ph, fill: { color: ok ? hx('accent3') : no ? 'F1F3F7' : 'FFFFFF' }, line: { color: ok ? hx('accent3') : no ? 'D5DCE6' : hx('tx2'), width: 1.25 }, color: ok ? 'bg1' : no ? 'accent5' : 'tx2', bold: true, fontSize: Math.min(17, pt), align: 'center', valign: 'middle', margin: 0 });
        });
      });
      if (note) this.noteBox(s, note, BOTTOM - nh, nh);
    }
  }

  // ------------------------------------------------------------ VENN DIAGRAM (two sources; the overlap = what both say)
  // sets {L: {h, color}, R: {h, color}, B: {h}}, items [{t, z: 'L'|'R'|'B'}]
  // question: the labels in a column on the left, an empty diagram on the right · correction: the labels in their zones
  venn(spec) {
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const top = s.y0; const H = BOTTOM - top;
      let x0 = L + 0.3; let VW = W - 0.6;
      if (mode === 'q') {
        const lw = 3.7; const n = spec.items.length; const g = 0.07;
        const ih = Math.min(0.46, (H - 0.24 - g * (n - 1)) / n);
        this.box(s, L, top, lw, H, 'accent1', { t: 92, line: 1, dash: 'dash' });
        const pt = Math.min(15, ...spec.items.map((it) => fitSize([plain(it.t)], lw - 0.5, ih - 0.04, 15, 11, 0, 0.5, 'venn-q')));
        const y1 = top + (H - n * ih - g * (n - 1)) / 2;
        spec.items.forEach((it, k) => s.addText(parse(it.t, 'a'), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.2, x: L + 0.18, y: y1 + k * (ih + g), w: lw - 0.36, h: ih, fill: { color: 'FFFFFF' }, line: { color: hx('accent1'), width: 1 }, color: 'tx2', fontSize: pt, align: 'center', valign: 'middle', margin: 0 }));
        x0 = L + lw + 0.35; VW = R - x0;
      }
      const cw = VW / 1.64; const a = cw / 2; const b = H / 2; const cy = top + b;
      const lx = x0; const rx = x0 + VW - cw; const cxL = lx + a; const cxR = rx + a;
      const chord = (dy) => a * Math.sqrt(Math.max(0, 1 - (dy / b) ** 2));
      const cl = spec.sets.L.color || 'accent2'; const cr = spec.sets.R.color || 'accent1';
      s.addShape(this.S.OVAL, { x: lx, y: top, w: cw, h: H, fill: { color: hx(cl), transparency: 84 }, line: { color: hx(cl), width: 2 } });
      s.addShape(this.S.OVAL, { x: rx, y: top, w: cw, h: H, fill: { color: hx(cr), transparency: 84 }, line: { color: hx(cr), width: 2 } });
      // usable x-range of a zone for a band [y1, y2]
      const range = (z, y1, y2) => {
        const dy = Math.max(Math.abs(y1 - cy), Math.abs(y2 - cy));
        if (z === 'L') return [cxL - chord(dy) + 0.12, rx - 0.12];
        if (z === 'R') return [lx + cw + 0.12, cxR + chord(dy) - 0.12];
        return [cxR - chord(dy) + 0.08, cxL + chord(dy) - 0.08];
      };
      const labs = { L: [spec.sets.L.h, cl], R: [spec.sets.R.h, cr], B: [spec.sets.B.h, 'tx2'] };
      const ly = top + 0.42;
      ['L', 'R'].forEach((z) => {
        const [x1, x2] = range(z, ly, ly + 0.42);
        s.addText(labs[z][0], { x: x1, y: ly, w: x2 - x1, h: 0.42, fontSize: mode === 'q' ? 14 : 15, bold: true, color: labs[z][1], charSpacing: 1, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      });
      const bItems = spec.items.filter((it) => it.z === 'B').length;
      const by0 = cy - (bItems ? (bItems * 0.62 + 0.1 * (bItems - 1)) / 2 : 0) - 0.5;
      const [bx1, bx2] = range('B', by0, by0 + 0.4);
      s.addText(labs.B[0], { x: bx1, y: by0, w: bx2 - bx1, h: 0.4, fontSize: 13, bold: true, color: 'tx2', charSpacing: 1, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      if (mode === 'a') {
        ['L', 'B', 'R'].forEach((z) => {
          const its = spec.items.filter((it) => it.z === z); if (!its.length) return;
          const g = 0.1; const ih = Math.min(0.55, (H - 1.2 - g * (its.length - 1)) / its.length); const T = its.length * ih + g * (its.length - 1);
          const y1 = z === 'B' ? by0 + 0.5 : cy + 0.2 - T / 2;
          const [x1, x2] = range(z, y1, y1 + T);
          const pt = Math.min(15, ...its.map((it) => fitSize([plain(it.t)], x2 - x1 - 0.2, ih - 0.04, 15, 11, 0, 0.5, 'venn')));
          its.forEach((it, k) => s.addText(parse(it.t, 'a'), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.1, x: x1, y: y1 + k * (ih + g), w: x2 - x1, h: ih, fill: { color: 'FFFFFF' }, line: { color: hx(z === 'B' ? 'tx2' : labs[z][1]), width: 1 }, color: 'tx1', fontSize: pt, align: 'center', valign: 'middle', margin: [0, 0.06, 0, 0.06] }));
        });
      }
    }
  }

  // ------------------------------------------------------------ BALANCE (sentences on two pans; the heavier pan goes down)
  // pans [{h, color}, {h, color}], items [{t, p: 0|1}]
  balance(spec) {
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      let top = s.y0;
      if (mode === 'q') top = this.bank(s, spec.items.map((it) => it.t), top, 'q', { label: 'WEIGH IT', size: 14 }) + 0.2;
      const cx = (L + R) / 2; const half = 3.2; const beamY = top + 0.35;
      const c0 = spec.items.filter((it) => it.p === 0).length; const c1 = spec.items.length - c0;
      const tilt = mode === 'q' ? 0 : Math.sign(c0 - c1) * 0.32;
      const ends = [[cx - half, beamY + tilt], [cx + half, beamY - tilt]];
      // post and base
      s.addShape(this.S.RECTANGLE, { x: cx - 0.07, y: beamY, w: 0.14, h: BOTTOM - beamY - 0.12, fill: { color: hx('tx2') }, line: { type: 'none' } });
      s.addShape(this.S.TRAPEZOID, { x: cx - 0.45, y: BOTTOM - 0.2, w: 0.9, h: 0.2, fill: { color: hx('tx2') }, line: { type: 'none' } });
      this.ln(s, ends[0][0], ends[0][1], ends[1][0], ends[1][1], { color: 'tx2', width: 6 });
      s.addShape(this.S.OVAL, { x: cx - 0.17, y: beamY - 0.17, w: 0.34, h: 0.34, fill: { color: AMBER }, line: { color: 'FFFFFF', width: 2 } });
      const tw = 5.1; const tops = ends.map(([, ey]) => ey + 0.6); const th = BOTTOM - 0.05 - Math.max(...tops);
      spec.pans.forEach((pan, k) => {
        const [ex, ey] = ends[k]; const tx = ex - tw / 2; const ty = tops[k]; const col = pan.color || (k ? 'accent1' : 'accent3');
        this.ln(s, ex, ey, tx + 0.35, ty, { color: 'accent5', width: 1.25 });
        this.ln(s, ex, ey, tx + tw - 0.35, ty, { color: 'accent5', width: 1.25 });
        s.addShape(this.S.OVAL, { x: ex - 0.08, y: ey - 0.08, w: 0.16, h: 0.16, fill: { color: hx('tx2') }, line: { type: 'none' } });
        this.box(s, tx, ty, tw, th, col, { t: 90, line: 1.5 });
        s.addText(pan.h, { x: tx + 0.15, y: ty + 0.06, w: tw - 0.3, h: 0.4, fontSize: 15, bold: true, color: col, charSpacing: 1, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        if (mode === 'a') {
          const its = spec.items.filter((it) => it.p === k); const g = 0.08;
          const ih = Math.min(0.55, (th - 0.6 - g * (its.length - 1)) / Math.max(1, its.length));
          const pt = Math.min(15, ...its.map((it) => fitSize([plain(it.t)], tw - 0.5, ih - 0.04, 15, 11, 0, 0.5, 'balance')));
          its.forEach((it, j) => s.addText(parse(it.t, 'a'), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.08, x: tx + 0.2, y: ty + 0.5 + j * (ih + g), w: tw - 0.4, h: ih, fill: { color: 'FFFFFF' }, line: { color: hx(col), width: 1 }, color: 'tx1', fontSize: pt, align: 'center', valign: 'middle', margin: [0, 0.06, 0, 0.06] }));
        }
      });
    }
  }

  // ------------------------------------------------------------ RULER (since = a pin, for = a measuring tape)
  ruler(spec) {
    const s = this.content(spec);
    const y0 = s.y0; const X0 = L + 0.4; const X1 = R - 0.5; const ax = y0 + 1.25;
    const n = spec.ticks.length; const px = (i) => X0 + (i / (n - 1)) * (X1 - X0);
    this.ln(s, X0 - 0.2, ax, X1 + 0.3, ax, { arrow: true, color: 'tx2', width: 2.5 });
    spec.ticks.forEach((t, i) => {
      this.ln(s, px(i), ax - 0.07, px(i), ax + 0.07, { color: 'tx2', width: 1.25 });
      s.addText(t, { x: px(i) - 0.6, y: ax + 0.12, w: 1.2, h: 0.28, fontSize: 12, color: 'accent5', align: 'center', margin: 0, isTextBox: true });
    });
    const sx = X0 + spec.from * (X1 - X0); const nx = X0 + spec.to * (X1 - X0);
    // tape
    const ty = ax + 0.5; const th = 0.42;
    s.addShape(this.S.ROUNDED_RECTANGLE, { x: sx, y: ty, w: nx - sx, h: th, rectRadius: 0.06, fill: { color: 'F4C542' }, line: { color: 'B8860B', width: 1 } });
    for (let x = sx + 0.12; x < nx - 0.05; x += 0.12) s.addShape(this.S.LINE, { x, y: ty, w: 0, h: Math.round((x - sx) / 0.12) % 5 === 0 ? 0.16 : 0.09, line: { color: '8A6A10', width: 0.75 } });
    s.addText(parse(spec.len, 'a', { bold: true }), { x: sx, y: ty + 0.15, w: nx - sx, h: th - 0.15, fontSize: 16, color: 'tx1', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
    this.icon(s, 'FaRulerHorizontal', 'accent2', nx + 0.12, ty + 0.03, 0.36);
    // pin
    this.icon(s, 'FaMapMarkerAlt', MAGENTA, sx - 0.28, ax - 0.62, 0.56);
    s.addText(parse(spec.start, 'a', { bold: true }), { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.2, x: Math.max(L, sx - 1.2), y: y0 + 0.05, w: 2.4, h: 0.42, fill: { color: MAGENTA }, line: { type: 'none' }, color: 'bg1', fontSize: 15, align: 'center', valign: 'middle', margin: 0 });
    // now
    this.ln(s, nx, y0 + 0.5, nx, ty + th, { color: 'accent6', width: 2, dash: 'dash' });
    s.addText(spec.now || 'NOW', { x: nx - 1.0, y: y0 + 0.1, w: 2.0, h: 0.35, fontSize: 13, bold: true, color: 'accent6', align: 'center', margin: 0, isTextBox: true });
    // two cards
    const nh = this.noteH(spec.note);
    const cy = ty + th + 0.35; const ch = BOTTOM - cy - (nh ? nh + 0.2 : 0); const gap = 0.3; const cw = (W - gap) / 2;
    [[spec.sinceCard, MAGENTA, 'FaMapMarkerAlt'], [spec.forCard, 'accent2', 'FaRulerHorizontal']].forEach(([c, col, icon], i) => {
      const x = L + i * (cw + gap);
      this.box(s, x, cy, cw, ch, col, { t: 92, line: 1 });
      this.icon(s, icon, col, x + 0.22, cy + 0.18, 0.34);
      s.addText(parse(c.h, 'a', { bold: true, color: hx(col) }), { x: x + 0.7, y: cy + 0.12, w: cw - 0.9, h: 0.45, fontSize: 18, fontFace: HEAD, valign: 'middle', margin: 0, isTextBox: true });
      this.text(s, c.t, x + 0.25, cy + 0.62, cw - 0.45, ch - 0.7, { fontSize: Math.min(17, fitSize([plain(c.t)], cw - 0.45, ch - 0.7, 17, 12, 0, 0.5, 'ruler')), valign: 'top' });
    });
    if (spec.note) this.noteBox(s, spec.note, BOTTOM - nh, nh);
  }

  // ------------------------------------------------------------ SPIN THE WHEEL (a pie of numbered prompts)
  wheel(spec) {
    const s = this.content({ ...spec, tag: spec.tag || 'GAME' });
    const y0 = s.y0; const H = BOTTOM - y0; const d = Math.min(H - 0.35, 4.7); const r = d / 2;
    const cx = L + 0.2 + r; const cy = y0 + 0.35 + r;
    const PAL = [hx('accent2'), hx('accent1'), hx('accent3'), hx('accent4'), hx('accent6'), TEAL, AMBER, hx('tx2')];
    const n = spec.prompts.length; const step = 360 / n;
    spec.prompts.forEach((_, k) => {
      const a = (270 + k * step) % 360; const b = (a + step) % 360;
      s.addShape(this.S.PIE, { x: cx - r, y: cy - r, w: d, h: d, angleRange: [a, b], fill: { color: PAL[k % PAL.length] }, line: { color: 'FFFFFF', width: 2.5 } });
      const mid = ((a + step / 2) * Math.PI) / 180;
      s.addText(String(k + 1), { x: cx + 0.66 * r * Math.cos(mid) - 0.3, y: cy + 0.66 * r * Math.sin(mid) - 0.3, w: 0.6, h: 0.6, fontSize: 24, bold: true, fontFace: HEAD, color: 'FFFFFF', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
    });
    s.addShape(this.S.OVAL, { x: cx - r - 0.06, y: cy - r - 0.06, w: d + 0.12, h: d + 0.12, fill: { type: 'none' }, line: { color: hx('tx2'), width: 3 } });
    s.addText('SPIN', { shape: this.S.OVAL, x: cx - 0.45, y: cy - 0.45, w: 0.9, h: 0.9, fill: { color: 'FFFFFF' }, line: { color: hx('tx2'), width: 2 }, color: 'tx2', bold: true, fontSize: 14, charSpacing: 1, align: 'center', valign: 'middle', margin: 0 });
    s.addShape(this.S.ISOSCELES_TRIANGLE, { x: cx - 0.22, y: cy - r - 0.42, w: 0.44, h: 0.4, rotate: 180, fill: { color: hx('accent6') }, line: { color: 'FFFFFF', width: 1.5 } });
    const lx = L + d + 0.75; const lw = R - lx; const rulesH = spec.rules ? 0.95 : 0;
    const rh = (H - (rulesH ? rulesH + 0.2 : 0)) / n;
    const pt = Math.min(18, ...spec.prompts.map((p) => fitSize([plain(p)], lw - 0.6, rh - 0.04, 18, 12, 0, 0.5, 'wheel')));
    spec.prompts.forEach((p, k) => {
      const y = y0 + k * rh;
      s.addText(String(k + 1), { shape: this.S.OVAL, x: lx, y: y + rh / 2 - 0.18, w: 0.36, h: 0.36, fill: { color: PAL[k % PAL.length] }, line: { type: 'none' }, color: 'FFFFFF', bold: true, fontSize: 13, align: 'center', valign: 'middle', margin: 0 });
      this.text(s, p, lx + 0.5, y, lw - 0.5, rh, { fontSize: pt, valign: 'middle' });
    });
    if (spec.rules) {
      this.box(s, lx, BOTTOM - rulesH, lw, rulesH, MAGENTA, { t: 92 });
      this.icon(s, 'FaSyncAlt', MAGENTA, lx + 0.2, BOTTOM - rulesH / 2 - 0.17, 0.34);
      this.text(s, spec.rules, lx + 0.7, BOTTOM - rulesH, lw - 0.85, rulesH, { fontSize: 15, valign: 'middle' });
    }
  }

  // ------------------------------------------------------------ VOICEMAIL + NOTEPAD (listen, then fill the notes)
  // vm {who, role, time, dur}, fields [{h, a}], steps [..]
  audioNotes(spec) {
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const H = BOTTOM - y0; const pw = 5.1;
      // player card
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: L, y: y0, w: pw, h: H, rectRadius: 0.12, fill: { color: hx('tx2') }, line: { type: 'none' }, shadow: shadow() });
      this.icon(s, 'FaVoicemail', 'FFFFFF', L + 0.3, y0 + 0.25, 0.34);
      s.addText('VOICEMAIL', { x: L + 0.75, y: y0 + 0.22, w: 3, h: 0.4, fontSize: 13, bold: true, color: 'FFFFFF', charSpacing: 2, valign: 'middle', margin: 0, isTextBox: true });
      this.circleIcon(s, 'FaUserTie', 'accent2', L + 0.3, y0 + 0.85, 0.95);
      s.addText([{ text: spec.vm.who, options: { bold: true, fontSize: 19, color: 'FFFFFF', fontFace: HEAD, breakLine: true } }, { text: spec.vm.role, options: { fontSize: 13, color: 'D5DCE6', breakLine: true } }, { text: spec.vm.time, options: { fontSize: 13, color: YELLOW, bold: true } }], { x: L + 1.45, y: y0 + 0.8, w: pw - 1.6, h: 1.05, valign: 'middle', margin: 0, isTextBox: true });
      // waveform
      let seed = 5; const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
      const wx = L + 0.35; const ww = pw - 0.7; const wy = y0 + 2.3; const nb = 42; const bw = ww / nb;
      for (let k = 0; k < nb; k++) {
        const hh = 0.12 + 0.75 * Math.abs(Math.sin(k * 0.45)) * (0.4 + 0.6 * rnd());
        s.addShape(this.S.ROUNDED_RECTANGLE, { x: wx + k * bw + bw * 0.2, y: wy - hh / 2, w: bw * 0.6, h: hh, rectRadius: 0.02, fill: { color: k < nb * 0.35 ? YELLOW : '8FA3C2' }, line: { type: 'none' } });
      }
      s.addShape(this.S.OVAL, { x: L + pw / 2 - 0.36, y: y0 + 2.88, w: 0.72, h: 0.72, fill: { color: YELLOW }, line: { type: 'none' } });
      this.icon(s, 'FaPlay', 'tx2', L + pw / 2 - 0.12, y0 + 3.06, 0.36);
      s.addText(spec.vm.dur, { x: L + 0.35, y: y0 + 3.04, w: 1.5, h: 0.4, fontSize: 13, color: 'D5DCE6', valign: 'middle', margin: 0, isTextBox: true });
      const sy = y0 + 3.8; const sh = H - 3.9;
      if (spec.steps && sh > 0.4) this.paras(s, spec.steps, L + 0.35, sy, pw - 0.7, sh, { after: 5, fit: [16, 11], color: 'FFFFFF', bullet: true });
      // notepad
      const nx = L + pw + 0.4; const nw = R - nx;
      s.addShape(this.S.RECTANGLE, { x: nx, y: y0, w: nw, h: H, fill: { color: 'FFFDF5' }, line: { color: BORDER, width: 1 }, shadow: shadow() });
      s.addShape(this.S.LINE, { x: nx + 0.55, y: y0, w: 0, h: H, line: { color: 'E8A0A0', width: 1.5 } });
      s.addText(spec.padTitle || 'NOTES', { x: nx + 0.75, y: y0 + 0.12, w: nw - 1, h: 0.4, fontSize: 14, bold: true, color: 'accent6', charSpacing: 2, valign: 'middle', margin: 0, isTextBox: true });
      const n = spec.fields.length; const fh = (H - 0.65) / n;
      const pt = Math.min(17, ...spec.fields.map((f) => fitSize([plain(f.a)], nw - 1.0, fh - 0.42, 17, 12, 0, 0.5, 'notes')));
      spec.fields.forEach((f, i) => {
        const y = y0 + 0.6 + i * fh;
        s.addText(f.h, { x: nx + 0.75, y, w: nw - 1, h: 0.32, fontSize: 12, bold: true, color: 'tx2', charSpacing: 1.5, valign: 'middle', margin: 0, isTextBox: true });
        if (mode === 'a') this.text(s, f.a, nx + 0.75, y + 0.32, nw - 1.0, fh - 0.38, { fontSize: pt, bold: true, color: 'accent2', valign: 'top', fontFace: 'Courier New' });
        this.ln(s, nx + 0.7, y + fh - 0.05, nx + nw - 0.2, y + fh - 0.05, { color: 'C9D6E8', width: 0.75 });
      });
    }
  }

  // ------------------------------------------------------------ CERTAINTY GAUGE (a semicircle meter, four modals)
  // zones [{w, pct, color, ex, fr}], needle (0–100), side extra {h, t}
  drawGauge(s, cx, cy, r, zones, needle, o = {}) {
    const n = zones.length; const step = 180 / n;
    zones.forEach((z, k) => {
      s.addShape(this.S.BLOCK_ARC, { x: cx - r, y: cy - r, w: 2 * r, h: 2 * r, angleRange: [180 + k * step, 180 + (k + 1) * step], arcThicknessRatio: o.thick || 0.34, fill: { color: hx(z.color) }, line: { color: 'FFFFFF', width: o.small ? 1 : 2.5 } });
      if (o.labels) {
        const mid = ((180 + (k + 0.5) * step) * Math.PI) / 180; const lr = r * (1 - (o.thick || 0.34) / 2);
        s.addText(z.w, { x: cx + lr * Math.cos(mid) - 0.65, y: cy + lr * Math.sin(mid) - 0.22, w: 1.3, h: 0.44, fontSize: o.labelSize || 17, bold: true, color: 'FFFFFF', fontFace: HEAD, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
      }
    });
    if (needle !== undefined && needle !== null) {
      const th = ((180 + needle * 1.8) * Math.PI) / 180; const nl = o.labels ? r * (1 - (o.thick || 0.34)) - 0.06 : r * 0.92;
      this.ln(s, cx, cy, cx + nl * Math.cos(th), cy + nl * Math.sin(th), { color: 'tx1', width: o.small ? 2 : 4 });
    }
    const hd = o.small ? 0.14 : 0.3;
    s.addShape(this.S.OVAL, { x: cx - hd / 2, y: cy - hd / 2, w: hd, h: hd, fill: { color: hx('tx1') }, line: { color: 'FFFFFF', width: 1 } });
  }
  gauge(spec) {
    const s = this.content(spec);
    const y0 = s.y0; const r = 2.55; const cx = L + r + 0.15; const cy = y0 + r + 0.25;
    this.drawGauge(s, cx, cy, r, spec.zones, spec.needle, { labels: true });
    ['0 %', '100 %'].forEach((t, i) => s.addText(t, { x: (i ? cx + r - 0.6 : cx - r - 0.1), y: cy + 0.08, w: 0.8, h: 0.3, fontSize: 12, color: 'accent5', align: i ? 'right' : 'left', margin: 0, isTextBox: true }));
    s.addText(spec.center || 'How sure are you?', { x: cx - 1.6, y: cy + 0.35, w: 3.2, h: 0.4, fontSize: 18, italic: true, color: 'accent5', fontFace: HEAD, align: 'center', margin: 0, isTextBox: true });
    if (spec.bridge) {
      const by = cy + 0.95;
      this.box(s, L, by, 2 * r + 0.3, BOTTOM - by, TEAL, { t: 92, line: 0.75 });
      this.icon(s, 'FaLink', TEAL, L + 0.2, by + 0.18, 0.3);
      this.text(s, spec.bridge, L + 0.65, by + 0.08, 2 * r - 0.5, BOTTOM - by - 0.16, { fontSize: 14, valign: 'middle' });
    }
    const x = L + 2 * r + 0.75; const w = R - x; const rows = [...spec.zones].reverse().concat(spec.extra ? [spec.extra] : []);
    const gap = 0.12; const rh = (BOTTOM - y0 - gap * (rows.length - 1)) / rows.length;
    rows.forEach((z, i) => {
      const y = y0 + i * (rh + gap); const col = z.color || 'tx2';
      this.box(s, x, y, w, rh, col, { t: 92, line: 1 });
      s.addText([{ text: z.w, options: { bold: true, fontSize: 21, fontFace: HEAD, color: hx(col), breakLine: true } }, { text: z.pct, options: { fontSize: 12, bold: true, color: hx('accent5') } }], { x: x + 0.2, y, w: 1.55, h: rh, valign: 'middle', margin: 0, isTextBox: true });
      this.text(s, z.ex + (z.fr ? `  //(${z.fr})//` : ''), x + 1.8, y, w - 1.95, rh, { fontSize: Math.min(16, fitSize([plain(z.ex + ' ' + (z.fr || ''))], w - 1.95, rh - 0.06, 16, 12, 0, 0.5, 'gauge')), valign: 'middle' });
    });
  }
  // rows [{v, s, a}] — the needle is the clue, the modal is the answer
  gaugeRows(spec) {
    const n = spec.rows.length;
    for (const mode of ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const rg = 0.14; const rh = Math.min(0.95, (BOTTOM - y0 - rg * (n - 1)) / n);
      const gr = Math.min(0.62, rh - 0.18); const tx = L + 2 * gr + 1.35; const tw = R - tx - 0.1;
      const pt = Math.min(18, ...spec.rows.map((r) => fitSize([plain(r.s + '  → ' + r.a)], tw, rh - 0.06, 18, 12, 0, 0.5, 'grow')));
      spec.rows.forEach((r, i) => {
        const y = y0 + i * (rh + rg);
        this.box(s, L, y, W, rh, 'tx2', { fill: i % 2 ? 'FFFFFF' : 'bg2', lineColor: BORDER, line: 0.5 });
        this.drawGauge(s, L + 0.2 + gr, y + rh / 2 + gr * 0.45, gr, spec.zones, r.v, { small: true, thick: 0.42 });
        s.addText(r.lab || `${r.v} %`, { x: L + 2 * gr + 0.3, y, w: 0.95, h: rh, fontSize: 15, bold: true, color: 'tx2', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
        const runs = parse(r.s, 'a', mode === 'a' ? { color: 'accent5' } : {});
        runs.push({ text: '   → ', options: { bold: true, color: 'tx2' } });
        if (mode === 'a') runs.push(...parse(r.a, 'a', { bold: true, color: 'accent3' }));
        else runs.push({ text: '………………………………', options: { color: 'accent5' } });
        s.addText(runs, { x: tx, y, w: tw, h: rh, fontSize: pt, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
      });
    }
  }

  // ------------------------------------------------------------ DETECTIVE BOARD (cork board, pinned cards, red strings)
  // cards [{id, x, y, w, h (0–1 of the board), label, t, tq, color, rot, clue}], links [[id, id]]
  detectiveBoard(spec) {
    for (const mode of spec.mode ? [spec.mode] : ['q', 'a']) {
      const s = this.content(spec, mode === 'a');
      const y0 = s.y0; const H = BOTTOM - y0;
      s.addShape(this.S.ROUNDED_RECTANGLE, { x: L, y: y0, w: W, h: H, rectRadius: 0.06, fill: { color: 'C9A473' }, line: { color: '7A5230', width: 7 }, shadow: shadow() });
      let seed = 3; const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
      for (let k = 0; k < 70; k++) s.addShape(this.S.OVAL, { x: L + 0.15 + rnd() * (W - 0.3), y: y0 + 0.15 + rnd() * (H - 0.3), w: 0.05, h: 0.05, fill: { color: 'A9814F' }, line: { type: 'none' } });
      const P = (c) => ({ x: L + 0.25 + c.x * (W - 0.5), y: y0 + 0.25 + c.y * (H - 0.5), w: c.w * (W - 0.5), h: c.h * (H - 0.5) });
      const fit = (c) => { const b = P(c); return fitSize([plain(c.t)], b.w - 0.3, b.h - 0.45, 17, 10, 0, 0.5, 'board'); };
      const ptClue = Math.min(17, ...spec.cards.filter((c) => c.clue).map(fit));
      const ptCard = Math.min(17, ...spec.cards.filter((c) => !c.clue).map(fit));
      spec.cards.forEach((c) => {
        const b = P(c); const show = mode !== 'q' || c.clue; const col = c.color || 'tx2';
        const runs = [{ text: c.label + (show || c.tq ? '\n' : ''), options: { bold: true, fontSize: 12, color: hx(col), charSpacing: 1 } }];
        if (show) runs.push(...parse(c.t, 'a'));
        else if (c.tq) runs.push(...parse(c.tq, 'a', { color: 'accent5', italic: true }));
        const pt = show ? (c.clue ? ptClue : ptCard) : 14;
        s.addText(runs, { shape: this.S.RECTANGLE, x: b.x, y: b.y, w: b.w, h: b.h, rotate: c.rot || 0, fill: { color: c.fill || 'FFFFFF' }, line: { type: 'none' }, shadow: shadow(), color: 'tx1', fontSize: pt, align: 'left', valign: 'top', margin: [0.12, 0.12, 0.08, 0.12] });
      });
      // red strings from the bottom of the upper card to the pin of the lower one
      if (mode !== 'q') (spec.links || []).forEach(([a, b]) => {
        let A = P(spec.cards.find((c) => c.id === a)); let B = P(spec.cards.find((c) => c.id === b));
        if (A.y > B.y) [A, B] = [B, A];
        this.ln(s, A.x + A.w / 2, A.y + A.h - 0.04, B.x + B.w - 0.3, B.y + 0.06, { color: 'C0392B', width: 2.25 });
        s.addShape(this.S.OVAL, { x: A.x + A.w / 2 - 0.06, y: A.y + A.h - 0.1, w: 0.12, h: 0.12, fill: { color: 'C0392B' }, line: { type: 'none' } });
      });
      spec.cards.forEach((c) => {
        const b = P(c);
        s.addShape(this.S.OVAL, { x: b.x + b.w - 0.4, y: b.y - 0.04, w: 0.2, h: 0.2, fill: { color: c.pin || 'C0392B' }, line: { color: 'FFFFFF', width: 1 }, shadow: { type: 'outer', color: '000000', blur: 2, offset: 1, angle: 90, opacity: 0.3 } });
      });
    }
  }

  // ------------------------------------------------------------ CAROUSEL (two rings of chairs: the outer ring moves on)
  carousel(spec) {
    const s = this.content({ ...spec, tag: spec.tag || 'SPEAKING' });
    const y0 = s.y0; const H = BOTTOM - y0; const d = Math.min(H, 4.8); const cx = L + d / 2 + 0.1; const cy = y0 + H / 2;
    const ro = d / 2 - 0.6; const ri = ro - 0.95; const n = spec.seats || 8;
    s.addShape(this.S.OVAL, { x: cx - ro, y: cy - ro, w: 2 * ro, h: 2 * ro, fill: { type: 'none' }, line: { color: hx('accent4'), width: 1.5, dashType: 'dash' } });
    s.addShape(this.S.OVAL, { x: cx - ri, y: cy - ri, w: 2 * ri, h: 2 * ri, fill: { color: hx('accent1'), transparency: 92 }, line: { color: hx('accent1'), width: 1.5 } });
    for (let k = 0; k < n; k++) {
      const a = (k / n) * 2 * Math.PI - Math.PI / 2;
      s.addText('B', { shape: this.S.OVAL, x: cx + ro * Math.cos(a) - 0.25, y: cy + ro * Math.sin(a) - 0.25, w: 0.5, h: 0.5, fill: { color: hx('accent4') }, line: { color: 'FFFFFF', width: 1.5 }, color: 'FFFFFF', bold: true, fontSize: 14, align: 'center', valign: 'middle', margin: 0 });
      s.addText('A', { shape: this.S.OVAL, x: cx + ri * Math.cos(a) - 0.22, y: cy + ri * Math.sin(a) - 0.22, w: 0.44, h: 0.44, fill: { color: hx('accent1') }, line: { color: 'FFFFFF', width: 1.5 }, color: 'FFFFFF', bold: true, fontSize: 13, align: 'center', valign: 'middle', margin: 0 });
    }
    const ra = ro + 0.42;
    s.addShape(this.S.ARC, { x: cx - ra, y: cy - ra, w: 2 * ra, h: 2 * ra, angleRange: [292, 338], line: { color: hx('accent4'), width: 3, endArrowType: 'triangle' } });
    s.addShape(this.S.ARC, { x: cx - ra, y: cy - ra, w: 2 * ra, h: 2 * ra, angleRange: [112, 158], line: { color: hx('accent4'), width: 3, endArrowType: 'triangle' } });
    this.icon(s, 'FaPhoneVolume', 'accent1', cx - 0.3, cy - 0.3, 0.6);
    const x = L + d + 0.55; const w = R - x;
    const keyH = 0.95;
    this.box(s, x, y0, w, keyH, 'tx2', { fill: 'bg2', lineColor: BORDER, line: 0.75 });
    s.addText([{ text: 'A', options: { bold: true, color: hx('accent1') } }, { text: '  ' + spec.a + '\n', options: {} }, { text: 'B', options: { bold: true, color: hx('accent4') } }, { text: '  ' + spec.b, options: {} }], { x: x + 0.2, y: y0, w: w - 0.4, h: keyH, fontSize: 16, color: 'tx1', valign: 'middle', margin: 0, isTextBox: true });
    const sy = y0 + keyH + 0.25; const sh = BOTTOM - sy; const ns = spec.steps.length; const rh = sh / ns;
    const pt = Math.min(18, ...spec.steps.map((t) => fitSize([plain(t)], w - 0.65, rh - 0.06, 18, 12, 0, 0.5, 'carousel')));
    spec.steps.forEach((t, i) => {
      const yy = sy + i * rh;
      this.num(s, i + 1, x, yy + 0.04, 0.4, 'accent4', 14);
      this.text(s, t, x + 0.6, yy, w - 0.65, rh, { fontSize: pt, valign: 'top' });
    });
  }

  async save(file) {
    await this.pres.writeFile({ fileName: file });
    await postProcess(file);
  }
}

module.exports = { LightDeck, prepLight, MAGENTA, ENERGY, TEAL, AMBER };
