// Shared builders for the Néerlandais 1 (UE1 · A1) module decks.
// Slide content is written in modules/mN.js; objectives and teacher notes are read from the
// slide-by-slide templates (../module_N_*.md) so that the deck and its template never diverge.
const path = require('path');
const fs = require('fs');
const pptxgen = require('pptxgenjs');
const React = require('react');
const RDS = require('react-dom/server');
const sharp = require('sharp');
const FA = require('react-icons/fa');
const GI = require('react-icons/gi');
const JSZip = require(require.resolve('jszip', { paths: [require.resolve('pptxgenjs')] }));
const { getIconData, iconToSVG, iconToHTML, replaceIDs } = require('@iconify/utils');
const FLUENT = require('@iconify-json/fluent-emoji-flat/icons.json');

// Illustrations: Microsoft Fluent Emoji (flat), MIT licence — rendered to PNG at build time.
const IMG_DIR = path.join(__dirname, 'img');
const IMGS = fs.existsSync(path.join(IMG_DIR, 'manifest.json')) ? JSON.parse(fs.readFileSync(path.join(IMG_DIR, 'manifest.json'), 'utf8')) : {};

// Same palette as Néerlandais 2 and 3 (charte § 5.2).
const THEME = {
  name: 'Nederlands 1',
  headFontFace: 'Cambria',
  bodyFontFace: 'Calibri',
  colors: {
    dk1: '1B2333', lt1: 'FFFFFF', dk2: '17375E', lt2: 'EEF3F8',
    accent1: 'D9700F', accent2: '2A6FB0', accent3: '2E7D4F', accent4: 'B4236A', accent5: '4A5A70', accent6: 'B83227',
    hlink: '2A6FB0', folHlink: 'B4236A',
  },
};
const HEX = THEME.colors;
const PURPLE = '6E4A9E';
const SCHEME2HEX = { tx1: HEX.dk1, bg1: HEX.lt1, tx2: HEX.dk2, bg2: HEX.lt2, accent1: HEX.accent1, accent2: HEX.accent2, accent3: HEX.accent3, accent4: HEX.accent4, accent5: HEX.accent5, accent6: HEX.accent6, purple: PURPLE };
const hx = (c) => SCHEME2HEX[c] || c;
const col = (c) => (c === 'purple' ? PURPLE : c);
const HEAD = '+mj-lt';
const BORDER = 'D5DCE6';
const GHOST = 'B8C2CF';

// Grammatical colour code (charte § 5.3)
const K = { long: 'accent3', short: 'accent4', verb: 'accent6', end: 'accent1', subj: 'accent2', comp: 'accent5', de: 'tx2', het: 'accent1', ok: 'accent3', ko: 'accent6', role: PURPLE };

const TAGS = {
  MISSIE: 'tx2', 'ÉCHAUFFEMENT': 'accent2', GRAMMAIRE: 'tx2', PRONONCIATION: 'accent4', VOCABULAIRE: 'accent3',
  'PIÈGE FR ≠ NL': 'accent6', 'À RETENIR': 'tx2', 'JIJ NU !': 'accent1', 'MISE EN SITUATION': PURPLE, '+ BONUS': 'accent5',
  'TICKET DE SORTIE': 'accent5', 'MINI-DÉFI': 'accent1', '+ APERÇU': 'accent5',
};

// Former archive image keys → Fluent Emoji illustrations (the archive pictures are no longer used).
const PIC2ILL = {
  prof_pointe: 'man-teacher', prof_question: 'thinking-face', horloge: 'stopwatch', bulles_questions: 'red-question-mark',
  p_man: 'man', p_slaan: 'oncoming-fist', p_fles: 'bottle-with-popping-cork', p_lezen: 'open-book', p_koppel: 'two-hearts', p_lopen: 'person-walking', p_kus: 'kiss-mark', p_vuur: 'fire',
  v_slaan: 'oncoming-fist', v_lezen: 'open-book', v_praten: 'speaking-head', v_zien: 'eyes',
  a_hond: 'dog', a_huis: 'house-with-garden', a_collegas: 'busts-in-silhouette', a_buurman: 'man', a_juf: 'woman-teacher', a_vriend: 'people-hugging', a_tableau: 'memo',
  w_deze_week: 'spiral-calendar', w_zondag: 'couch-and-lamp', w_weekend: 'popcorn', w_vrije_tijd: 'beach-with-umbrella',
};

// Object/people glyphs → colour illustrations (applied when drawn in colour and ≥ 0.45 in)
const FA2ILL = {
  FaCalendarAlt: 'spiral-calendar', FaCalendarWeek: 'spiral-calendar', FaCalendarDay: 'tear-off-calendar', FaPencilAlt: 'pencil', FaPen: 'writing-hand', FaHome: 'house', FaHeart: 'red-heart',
  FaGlobeEurope: 'globe-showing-europe-africa', FaFemale: 'woman', FaMale: 'man', FaUtensils: 'fork-and-knife', FaUsers: 'busts-in-silhouette', FaUserFriends: 'people-hugging',
  FaTrophy: 'trophy', FaSun: 'sun', FaStopwatch: 'stopwatch', FaMugHot: 'hot-beverage', FaCoffee: 'hot-beverage', FaMountain: 'snow-capped-mountain', FaMoon: 'crescent-moon',
  FaLaptop: 'laptop', FaDesktop: 'desktop-computer', FaPrint: 'printer', FaChair: 'chair', FaCar: 'automobile', FaBus: 'bus', FaTrain: 'train', FaSubway: 'metro', FaBicycle: 'bicycle',
  FaBuilding: 'office-building', FaBook: 'green-book', FaBookOpen: 'open-book', FaBirthdayCake: 'birthday-cake', FaAppleAlt: 'red-apple', FaWalking: 'person-walking', FaRunning: 'person-running',
  FaUmbrellaBeach: 'beach-with-umbrella', FaTree: 'deciduous-tree', FaSeedling: 'seedling', FaPalette: 'artist-palette', FaMusic: 'musical-notes', FaMobileAlt: 'mobile-phone',
  FaHourglassHalf: 'hourglass-not-done', FaHeartbeat: 'beating-heart', FaGift: 'wrapped-gift', FaEye: 'eyes', FaEnvelope: 'envelope', FaCrown: 'crown', FaCookie: 'cookie',
  FaCompass: 'compass', FaCloud: 'cloud', FaChild: 'child', FaBriefcase: 'briefcase', FaBell: 'bell', FaBed: 'bed', FaPhoneAlt: 'telephone-receiver', FaIdCard: 'identification-card',
  FaKey: 'key', FaShoppingBasket: 'basket', FaInbox: 'basket', FaConciergeBell: 'bellhop-bell', FaMagnet: 'magnet', FaThumbtack: 'pushpin', FaTheaterMasks: 'performing-arts',
  FaDumbbell: 'person-lifting-weights', FaWater: 'water-wave', FaDice: 'game-die', FaUserTie: 'man-office-worker', FaUserSecret: 'detective', FaGraduationCap: 'graduation-cap',
  GiPlasticDuck: 'duck', GiLinkedRings: 'ring', GiDiamondRing: 'ring', GiSteamLocomotive: 'locomotive', GiSandwich: 'sandwich', GiRose: 'rose', GiRiver: 'water-wave', GiPear: 'pear',
  GiMountains: 'snow-capped-mountain', GiLog: 'wood', GiLockers: 'file-cabinet', GiKnifeFork: 'fork-and-knife', GiGreekTemple: 'classical-building', GiCoffeeCup: 'hot-beverage',
  GiBrokenHeart: 'broken-heart', GiHumanEar: 'ear', GiMuscleUp: 'flexed-biceps', GiDeskLamp: 'light-bulb', GiFactory: 'factory', GiScissors: 'scissors',
};

// ---------------------------------------------------------------- icons (two-pass: record, render, rebuild)
const ICONS = {};
const WANTED = new Set();
const ICON_SETS = { Fa: FA, Gi: GI };
function iconComp(name) { const set = ICON_SETS[name.slice(0, 2)]; const c = set && set[name]; if (!c) throw new Error('unknown icon ' + name); return c; }
const BLANK = 'image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
function ico(name, color) {
  const h = hx(color).toUpperCase();
  const k = name + '_' + h;
  if (ICONS[k]) return ICONS[k];
  iconComp(name);
  WANTED.add(k);
  return BLANK;
}
const ILL = {};
const WANTED_ILL = new Set();
function illData(name) {
  if (ILL[name]) return ILL[name];
  if (!getIconData(FLUENT, name)) throw new Error('unknown illustration ' + name);
  WANTED_ILL.add(name);
  return BLANK;
}
async function renderIcons() {
  for (const name of WANTED_ILL) {
    const data = getIconData(FLUENT, name);
    const r = iconToSVG(data, { height: 512 });
    const svg = iconToHTML(replaceIDs(r.body), r.attributes);
    const buf = await sharp(Buffer.from(svg)).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    ILL[name] = 'image/png;base64,' + buf.toString('base64');
  }
  WANTED_ILL.clear();
  for (const k of WANTED) {
    if (ICONS[k]) continue;
    const [name, c] = k.split('_');
    const svg = RDS.renderToStaticMarkup(React.createElement(iconComp(name), { color: '#' + c, size: 256 }));
    const buf = await sharp(Buffer.from(svg)).resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    ICONS[k] = 'image/png;base64,' + buf.toString('base64');
  }
  const n = WANTED.size; WANTED.clear(); return n;
}

// ---------------------------------------------------------------- markup → runs
// **bold** //italic// __underline__ [[answer]] {{wrong: red struck in 'a'}} <<right: green in 'a'>>
// ++only in answer++  ^^blue^^ ##orange## %%framboise%% !!red!! @@navy@@ °°ghost°° ___ (blank)
const MK = /(\+\+[\s\S]+?\+\+|\*\*[\s\S]+?\*\*|\[\[[\s\S]+?\]\]|\{\{[\s\S]+?\}\}|<<[\s\S]+?>>|\/\/[\s\S]+?\/\/|__[\s\S]+?__|\^\^[\s\S]+?\^\^|##[\s\S]+?##|%%[\s\S]+?%%|!![\s\S]+?!!|@@[\s\S]+?@@|°°[\s\S]+?°°|_{3,})/g;
function blankFor(v) { return '…'.repeat(Math.min(12, Math.max(4, Math.round(v.length * 0.6)))); }
function parse(str, mode = 'a', base = {}) {
  const out = [];
  let last = 0;
  str = String(str);
  for (const m of [...str.matchAll(MK)]) {
    if (m.index > last) out.push({ text: str.slice(last, m.index), options: { ...base } });
    const t = m[0];
    const v = t.length > 4 ? t.slice(2, -2) : t;
    if (t.startsWith('++')) { if (mode !== 'q') out.push(...parse(v, mode, { ...base, bold: true, color: 'accent3' })); }
    else if (t.startsWith('**')) out.push(...parse(v, mode, { ...base, bold: true }));
    else if (t.startsWith('[[')) out.push(mode === 'q' ? { text: blankFor(v), options: { ...base, color: 'accent5', bold: false } } : { text: v, options: { ...base, bold: true, color: 'accent3' } });
    else if (t.startsWith('{{')) out.push(mode === 'q' ? { text: v, options: { ...base } } : { text: v, options: { ...base, color: 'accent6', strike: 'sngStrike' } });
    else if (t.startsWith('<<')) out.push(...parse(v, mode, mode === 'q' ? { ...base } : { ...base, bold: true, color: 'accent3' }));
    else if (t.startsWith('//')) out.push(...parse(v, mode, { ...base, italic: true }));
    else if (t.startsWith('__') && t.length > 4 && !/^_+$/.test(t)) out.push(...parse(v, mode, { ...base, underline: { style: 'sng' } }));
    else if (t.startsWith('^^')) out.push(...parse(v, mode, { ...base, bold: true, color: 'accent2' }));
    else if (t.startsWith('##')) out.push(...parse(v, mode, { ...base, bold: true, color: 'accent1' }));
    else if (t.startsWith('%%')) out.push(...parse(v, mode, { ...base, bold: true, color: 'accent4' }));
    else if (t.startsWith('!!')) out.push(...parse(v, mode, { ...base, bold: true, color: 'accent6' }));
    else if (t.startsWith('@@')) out.push(...parse(v, mode, { ...base, bold: true, color: 'tx2' }));
    else if (t.startsWith('°°')) out.push(...parse(v, mode, { ...base, color: GHOST }));
    else out.push({ text: '…………', options: { ...base, color: 'accent5' } });
    last = m.index + t.length;
  }
  if (last < str.length) out.push({ text: str.slice(last), options: { ...base } });
  if (!out.length) out.push({ text: '', options: { ...base } });
  return out;
}
function plain(str) { return String(str).replace(/\+\+|\*\*|\[\[|\]\]|\{\{|\}\}|<<|>>|\/\/|__|\^\^|##|%%|!!|@@|°°/g, ''); }
function flow(paras) {
  const out = [];
  paras.forEach((p, i) => {
    p.runs.forEach((r, j) => {
      const o = j === 0 ? { ...(p.opts || {}), ...r.options } : { ...r.options };
      // pptxgenjs starts a new paragraph whenever align changes between runs: repeat it on every run
      if (j > 0 && p.opts && p.opts.align) o.align = p.opts.align;
      if (j === p.runs.length - 1 && i < paras.length - 1) o.breakLine = true;
      out.push({ text: r.text, options: o });
    });
  });
  return out;
}

// ---------------------------------------------------------------- text fitting (estimate, calibrated on Carlito)
function linesFor(text, wIn, pt, cw = 0.5) {
  cw *= 0.86;
  const cpl = Math.max(4, Math.floor(wIn / ((pt / 72) * cw)));
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
  if (label) console.warn(`  ! tight fit (${label}): ${String(paras[0]).slice(0, 50)}`);
  return min;
}
const shadow = () => ({ type: 'outer', color: '000000', blur: 8, offset: 2, angle: 60, opacity: 0.16 });

// ---------------------------------------------------------------- template (markdown) reader
function mdPlain(s) {
  return s.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1').replace(/`([^`]+)`/g, '$1')
    .replace(/^\s*- /gm, '• ').replace(/^\s*(\d+)\. /gm, '$1. ').replace(/\n{3,}/g, '\n\n').trim();
}
function readTemplate(file) {
  const md = fs.readFileSync(file, 'utf8');
  const out = {};
  for (const part of md.split(/\n### \[DIAPOSITIVE /).slice(1)) {
    const m = part.match(/^(\d+) : ([^\]]+)\]/);
    const n = Number(m[1]);
    const body = part.split(/\n---\n/)[0];
    const obj = (body.match(/\*\*Objectif pédagogique\*\* — ([\s\S]*?)\n\n\*\*/) || [])[1] || '';
    const notes = (body.match(/\*\*Notes pour l'animateur\*\*\s*—?\s*([\s\S]*)$/) || [])[1] || '';
    out[n] = { title: m[2].trim(), obj: mdPlain(obj), notes: mdPlain(notes) };
  }
  return out;
}

// ---------------------------------------------------------------- Deck
class Deck {
  constructor(meta) {
    this.m = meta;
    const p = (this.pres = new pptxgen());
    p.layout = 'LAYOUT_WIDE';
    p.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
    p.author = 'A. Jouniaux';
    p.company = 'IRAM — Néerlandais 1 (UE1)';
    p.subject = 'Néerlandais 1 — Langue en situation, en milieu professionnel';
    p.title = `Module ${meta.n} — ${meta.title}`;
    this.S = p.shapes;
    this.G = readTemplate(path.join(__dirname, '..', meta.template));
    this.used = new Set();
    this.layouts();
  }

  layouts() {
    const p = this.pres;
    const foot = `Néerlandais 1 · UE1 · Module ${this.m.n} · ${this.m.short}`;
    p.defineSlideMaster({
      title: 'N1_CONTENT', background: { color: HEX.lt1 },
      objects: [
        { text: { text: foot, options: { x: 0.6, y: 7.05, w: 9, h: 0.3, fontSize: 10, color: 'accent5', margin: 0, valign: 'middle' } } },
        { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 0.68, w: 12.13, h: 0.78, fontSize: 30, bold: true, color: 'tx2', valign: 'middle', align: 'left', margin: 0 }, text: '' } },
      ],
      slideNumber: { x: 12.13, y: 7.05, w: 0.6, h: 0.3, fontSize: 10, color: HEX.accent5, align: 'right' },
    });
    p.defineSlideMaster({
      title: 'N1_DARK', background: { color: HEX.dk2 },
      objects: [
        { text: { text: foot, options: { x: 0.6, y: 7.05, w: 9, h: 0.3, fontSize: 10, color: 'bg2', margin: 0, valign: 'middle' } } },
        { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 0.68, w: 12.13, h: 0.78, fontSize: 30, bold: true, color: 'bg1', valign: 'middle', align: 'left', margin: 0 }, text: '' } },
      ],
      slideNumber: { x: 12.13, y: 7.05, w: 0.6, h: 0.3, fontSize: 10, color: HEX.lt2, align: 'right' },
    });
    p.defineSlideMaster({
      title: 'N1_COVER', background: { color: HEX.dk2 },
      objects: [
        { text: { text: 'Néerlandais 1 · UE1 · Langue en situation, en milieu professionnel · A. Jouniaux · IRAM', options: { x: 0.6, y: 6.85, w: 9, h: 0.35, fontSize: 12, color: 'bg2', margin: 0 } } },
        { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 1.9, w: 6.2, h: 2.0, fontSize: 42, bold: true, color: 'bg1', valign: 'bottom', align: 'left', margin: 0 }, text: '' } },
        { placeholder: { options: { name: 'body', type: 'body', x: 0.6, y: 4.1, w: 6.2, h: 1.6, fontSize: 20, color: 'bg2', valign: 'top', align: 'left', margin: 0 }, text: '' } },
      ],
    });
  }

  section(title) { this.pres.addSection({ title }); this.sec = title; }
  slide(master = 'N1_CONTENT') { return this.pres.addSlide({ masterName: master, sectionTitle: this.sec }); }

  notesFor(g, correction, extra) {
    const t = this.G[g];
    if (!t) throw new Error(`no template slide ${g}`);
    this.used.add(g);
    const parts = [];
    if (correction) parts.push('CORRIGÉ — révélez les réponses une à une, en faisant justifier chaque choix.');
    parts.push('Objectif : ' + t.obj);
    if (t.notes) parts.push(t.notes);
    if (extra) parts.push(extra);
    return parts.join('\n\n');
  }

  // content slide: {g, title?, tag?, notes?}  → slide
  page(spec, correction = false, master = 'N1_CONTENT') {
    const s = this.slide(master);
    const title = spec.title || this.G[spec.g].title;
    const L = plain(title).length;
    s.addText(title, L > 60 ? { placeholder: 'title', fontSize: 22 } : L > 50 ? { placeholder: 'title', fontSize: 26 } : { placeholder: 'title' });
    let x = 0.6;
    if (spec.tag) x += this.chip(s, spec.tag, x, 0.26, TAGS[spec.tag] || 'tx2') + 0.12;
    if (correction) x += this.chip(s, '✓ CORRECTIE', x, 0.26, 'accent3') + 0.12;
    if (spec.stars) this.t(s, spec.stars, 11.13, 0.24, 1.6, 0.38, { size: 16, color: 'accent1', align: 'right', valign: 'middle', bold: true });
    s.addNotes(this.notesFor(spec.g, correction, spec.notes));
    return s;
  }

  // ------------------------------------------------------------ primitives
  t(s, str, x, y, w, h, o = {}) {
    const mode = o.mode || 'a';
    const base = { ...(o.base || {}) };
    let runs;
    let size = o.size || 18;
    if (Array.isArray(str)) {
      if (o.fit) size = fitSize(str.map(plain), w, h, o.max || size, o.min || 12, o.gap ?? 6, 0.5, o.fitLabel || '');
      runs = flow(str.map((l) => ({ runs: parse(l, mode, base), opts: { paraSpaceAfter: o.gap ?? 6, ...(o.bullet ? { bullet: { indent: 14 } } : {}), ...(o.align ? { align: o.align } : {}) } })));
    } else {
      if (o.fit) size = fitSize([plain(str)], w, h, o.max || size, o.min || 12, 0, 0.5, o.fitLabel || '');
      runs = parse(str, mode, base);
    }
    s.addText(runs, {
      x, y, w, h, fontSize: size, color: col(o.color || 'tx1'), bold: o.bold, italic: o.italic, align: o.align || 'left', valign: o.valign || 'top',
      margin: o.margin ?? 0, fontFace: o.head ? HEAD : undefined, isTextBox: true, charSpacing: o.cs, rotate: o.rotate, objectName: o.name, lineSpacingMultiple: o.ls,
    });
    return size;
  }
  rect(s, x, y, w, h, o = {}) {
    const fill = o.fill === null ? undefined : { color: col(o.fill || 'bg2'), transparency: o.tr || 0 };
    const line = o.line === null ? { color: 'FFFFFF', width: 0, transparency: 100 } : { color: hx(o.line || BORDER), width: o.lw ?? 1, dashType: o.dash, transparency: o.ltr };
    s.addShape(o.radius === 0 ? this.S.RECTANGLE : this.S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: o.radius ?? 0.08, fill, line, shadow: o.shadow ? shadow() : undefined, rotate: o.rotate, objectName: o.name });
  }
  oval(s, x, y, w, h, o = {}) {
    s.addShape(this.S.OVAL, { x, y, w, h, fill: o.fill === null ? undefined : { color: col(o.fill || 'tx2'), transparency: o.tr || 0 }, line: o.line ? { color: hx(o.line), width: o.lw || 1.5, dashType: o.dash } : { color: 'FFFFFF', width: 0, transparency: 100 } });
  }
  line(s, x1, y1, x2, y2, o = {}) {
    s.addShape(this.S.LINE, {
      x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.max(0.001, Math.abs(x2 - x1)), h: Math.max(0.001, Math.abs(y2 - y1)),
      flipH: x2 < x1, flipV: y2 < y1,
      line: { color: hx(o.color || 'accent5'), width: o.lw || 1.5, dashType: o.dash, endArrowType: o.arrow === false ? undefined : (o.arrow || 'triangle'), beginArrowType: o.begin },
    });
  }
  // curved connector (arc) from (x1,y1) to (x2,y2); bulge up (dir=-1) or down (dir=1)
  curve(s, x1, y1, x2, y2, o = {}) {
    const w = Math.abs(x2 - x1); const h = Math.max(0.35, o.h || 0.6);
    const x = Math.min(x1, x2);
    const dir = o.dir || -1;
    s.addShape(this.S.ARC, {
      x, y: dir < 0 ? y1 - h : y1 - h, w, h: h * 2, angleRange: dir < 0 ? [180, 360] : [0, 180],
      line: { color: hx(o.color || 'accent1'), width: o.lw || 2.25, endArrowType: x2 > x1 ? 'triangle' : undefined, beginArrowType: x2 > x1 ? undefined : 'triangle', dashType: o.dash },
      fill: { color: 'FFFFFF', transparency: 100 },
    });
  }
  // colour illustration (Fluent Emoji flat), square, centred in the box
  ill(s, name, x, y, w, h = w, o = {}) {
    const d = Math.min(w, h);
    s.addImage({ data: illData(name), x: x + (w - d) / 2, y: o.valign === 'top' ? y : y + (h - d) / 2, w: d, h: d, altText: o.alt || name.replace(/-/g, ' '), transparency: o.tr, shadow: o.shadow ? shadow() : undefined });
  }
  icon(s, name, color, x, y, size = 0.4) {
    // pictures of objects/people (coloured, not tiny) are drawn as colour illustrations; small or white glyphs stay icons
    if (FA2ILL[name] && hx(color).toUpperCase() !== 'FFFFFF' && size >= 0.45) return this.ill(s, FA2ILL[name], x, y, size, size, { valign: 'top' });
    s.addImage({ data: ico(name, color), x, y, w: size, h: size, altText: name.replace(/^(Fa|Gi)/, '') });
  }
  iconDisc(s, name, x, y, d, fill, iconColor = 'FFFFFF') { this.oval(s, x, y, d, d, { fill }); this.icon(s, name, iconColor, x + d * 0.24, y + d * 0.24, d * 0.52); }
  pic(s, key, x, y, w, h, o = {}) {
    if (PIC2ILL[key]) {
      const dd = Math.min(w, h);
      const X = o.align === 'left' ? x : o.align === 'right' ? x + w - dd : x + (w - dd) / 2;
      const Y = o.valign === 'top' ? y : o.valign === 'bottom' ? y + h - dd : y + (h - dd) / 2;
      this.ill(s, PIC2ILL[key], X, Y, dd, dd, { valign: 'top', alt: o.alt });
      return { x: X, y: Y, w: dd, h: dd };
    }
    const im = IMGS[key];
    if (!im) throw new Error('unknown image ' + key);
    const [iw, ih, file] = im;
    let W = w; let Hh = (w * ih) / iw;
    if (Hh > h) { Hh = h; W = (h * iw) / ih; }
    const X = o.align === 'left' ? x : o.align === 'right' ? x + w - W : x + (w - W) / 2;
    const Y = o.valign === 'top' ? y : o.valign === 'bottom' ? y + h - Hh : y + (h - Hh) / 2;
    s.addImage({ path: path.join(IMG_DIR, file), x: X, y: Y, w: W, h: Hh, transparency: o.tr, altText: o.alt || key, shadow: o.shadow ? shadow() : undefined });
    return { x: X, y: Y, w: W, h: Hh };
  }
  chip(s, text, x, y, color, h = 0.34, size = 12) {
    const w = 0.4 + plain(text).length * (size / 12) * 0.118 + (/[^\x00-\x7F]/.test(text) ? 0.12 : 0);
    s.addText(text, { shape: this.S.ROUNDED_RECTANGLE, rectRadius: 0.05, x, y, w, h, fill: { color: col(color) }, color: 'FFFFFF', bold: true, fontSize: size, align: 'center', valign: 'middle', margin: 0, charSpacing: 1, objectName: 'tag' });
    return w;
  }
  num(s, n, x, y, d = 0.42, fill = 'tx2', size) {
    this.oval(s, x, y, d, d, { fill });
    this.t(s, String(n), x, y, d, d, { size: size || Math.round(d * 30), bold: true, color: 'bg1', align: 'center', valign: 'middle' });
  }
  dot(s, cx, cy, color, d = 0.17) { this.oval(s, cx - d / 2, cy - d / 2, d, d, { fill: color }); }
  // word card: big word inside a coloured frame
  word(s, text, x, y, w, h, color = 'tx2', o = {}) {
    this.rect(s, x, y, w, h, { fill: o.fill || 'bg1', line: color, lw: o.lw ?? 2.5, radius: o.radius ?? 0.1, shadow: o.shadow, dash: o.dash, tr: o.tr });
    this.t(s, text, x + 0.05, y, w - 0.1, h, { size: o.size || 24, bold: o.bold ?? true, color: o.color || 'tx1', align: 'center', valign: 'middle', head: o.head, mode: o.mode, fit: o.fit, max: o.max, min: o.min });
  }
  // card with optional coloured header band or icon disc
  card(s, x, y, w, h, o = {}) {
    const c = o.color || 'tx2';
    this.rect(s, x, y, w, h, { fill: o.fill || 'bg1', line: o.line || BORDER, lw: o.lw ?? 1, radius: 0.1, shadow: o.shadow !== false });
    let top = y + 0.15;
    if (o.band) {
      this.rect(s, x, y, w, 0.55, { fill: c, line: null, radius: 0.1 });
      this.rect(s, x, y + 0.35, w, 0.2, { fill: c, line: null, radius: 0 });
      this.t(s, o.band, x + 0.2, y, w - 0.4, 0.55, { size: o.bandSize || 15, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      top = y + 0.68;
    } else if (o.icon || o.head) {
      let hx0 = x + 0.2;
      if (o.icon) { this.iconDisc(s, o.icon, x + 0.2, y + 0.18, 0.62, c); hx0 = x + 0.98; }
      if (o.head) this.t(s, o.head, hx0, y + 0.16, x + w - hx0 - 0.15, 0.66, { size: o.headSize || 19, bold: true, color: c, valign: 'middle', head: o.headFont });
      top = y + 0.95;
    }
    if (o.body) {
      const lines = Array.isArray(o.body) ? o.body : [o.body];
      this.t(s, lines, x + 0.22, top, w - 0.44, y + h - top - 0.12, { size: o.size || 17, fit: true, max: o.size || 18, min: 12, gap: o.gap ?? 6, align: o.align, valign: o.valign || 'top', bullet: o.bullet, mode: o.mode, fitLabel: 'card' });
    }
  }
  // free polygon from absolute points [[x, y], …] (inches)
  poly(s, pts, o = {}) {
    const xs = pts.map((p) => p[0]); const ys = pts.map((p) => p[1]);
    const x = Math.min(...xs); const y = Math.min(...ys);
    const points = pts.map(([px, py]) => ({ x: px - x, y: py - y }));
    points.push({ close: true });
    s.addShape(this.S.CUSTOM_GEOMETRY, {
      x, y, w: Math.max(0.01, Math.max(...xs) - x), h: Math.max(0.01, Math.max(...ys) - y), points,
      fill: o.fill === null ? undefined : { color: col(o.fill || 'bg2'), transparency: o.tr || 0 },
      line: o.line === null ? { color: 'FFFFFF', width: 0, transparency: 100 } : { color: hx(o.line || 'FFFFFF'), width: o.lw ?? 1.5 },
    });
  }
  // schematic map of Belgium (regions); returns P(lon, lat) → [x, y] to place pins
  belgium(s, x, y, w, o = {}) {
    const k = w / 2.51;
    const P = (lon, lat) => [x + (lon - 2.5) * 0.635 * k, y + (51.52 - lat) * k];
    const north = [[2.54, 51.09], [2.8, 51.17], [3.1, 51.31], [3.37, 51.37], [3.52, 51.29], [3.8, 51.21], [4.05, 51.25], [4.24, 51.37], [4.42, 51.36], [4.55, 51.48], [4.75, 51.42], [4.92, 51.46], [5.1, 51.43], [5.24, 51.31], [5.5, 51.29], [5.85, 51.15], [5.75, 50.95], [5.7, 50.76]];
    const lang = [[5.7, 50.76], [5.45, 50.73], [5.1, 50.72], [4.85, 50.74], [4.6, 50.72], [4.4, 50.74], [4.15, 50.72], [3.9, 50.73], [3.55, 50.73], [3.25, 50.75], [2.9, 50.78]];
    const westFl = [[2.75, 50.82], [2.6, 50.95]];
    const south = [[6.02, 50.75], [6.27, 50.62], [6.4, 50.33], [6.14, 50.13], [5.98, 50.17], [5.75, 49.95], [5.82, 49.55], [5.47, 49.5], [5.2, 49.69], [4.85, 49.8], [4.86, 49.95], [4.88, 50.15], [4.82, 50.16], [4.7, 49.98], [4.45, 49.94], [4.2, 49.96], [4.14, 50.05], [4.2, 50.27], [3.95, 50.34], [3.7, 50.32], [3.6, 50.5], [3.28, 50.53], [3.0, 50.7]];
    const ger = [[6.02, 50.75], [6.27, 50.62], [6.4, 50.33], [6.14, 50.2], [6.05, 50.32], [6.1, 50.5], [5.98, 50.62]];
    const lw = o.lw ?? 1.5;
    this.poly(s, [...north, ...lang.slice(1), ...westFl].map((p) => P(...p)), { fill: o.fl || 'F6D44C', line: o.line || 'FFFFFF', lw });
    this.poly(s, [...lang.slice().reverse(), ...south].map((p) => P(...p)), { fill: o.wa || 'E2725B', line: o.line || 'FFFFFF', lw });
    if (o.de !== false) this.poly(s, ger.map((p) => P(...p)), { fill: o.de || '7A9CC6', line: o.line || 'FFFFFF', lw });
    const [bx, by] = P(4.36, 50.84); const r = (o.bxr || 0.11) * k;
    if (o.bx !== false) this.oval(s, bx - r * 0.64, by - r * 0.5, r * 1.28, r, { fill: o.bx || 'tx2', line: o.line || 'FFFFFF', lw: 1.25 });
    return P;
  }
  // simplified national flags (drawn, not pictures)
  flag(s, code, x, y, w, h = w * 0.66) {
    const V = (cs) => cs.forEach((c, i) => this.rect(s, x + (i * w) / cs.length, y, w / cs.length, h, { fill: c, line: null, radius: 0 }));
    const Hh = (cs, r) => { const tot = (r || cs.map(() => 1)).reduce((a, b) => a + b, 0); let yy = y; cs.forEach((c, i) => { const hh = (h * (r ? r[i] : 1)) / tot; this.rect(s, x, yy, w, hh, { fill: c, line: null, radius: 0 }); yy += hh; }); };
    const sym = (t, c, size, dx = 0) => this.t(s, t, x + dx, y, w, h, { size, color: c, align: 'center', valign: 'middle', bold: true });
    switch (code) {
      case 'be': V(['1B1B1B', 'F7D117', 'E2232A']); break;
      case 'fr': V(['1F4FA3', 'FFFFFF', 'E2232A']); break;
      case 'it': V(['1E8C45', 'FFFFFF', 'D7262D']); break;
      case 'ro': V(['1F4FA3', 'F7D117', 'D7262D']); break;
      case 'nl': Hh(['B32033', 'FFFFFF', '22408C']); break;
      case 'de': Hh(['1B1B1B', 'DD1F26', 'F7C600']); break;
      case 'lu': Hh(['E2343F', 'FFFFFF', '24A3DD']); break;
      case 'pl': Hh(['FFFFFF', 'DC143C']); break;
      case 'es': Hh(['C60B1E', 'F7C600', 'C60B1E'], [1, 2, 1]); break;
      case 'ma': this.rect(s, x, y, w, h, { fill: 'C1272D', line: null, radius: 0 }); sym('☆', '1E7B3A', Math.round(h * 46)); break;
      case 'tr': this.rect(s, x, y, w, h, { fill: 'E30A17', line: null, radius: 0 }); sym('☾★', 'FFFFFF', Math.round(h * 30)); break;
      case 'cd': {
        this.rect(s, x, y, w, h, { fill: '3D8FD1', line: null, radius: 0 });
        const b = h * 0.2;
        this.poly(s, [[x, y + h - b * 1.4], [x + w - b * 1.6, y], [x + w, y], [x + w, y + b * 1.4], [x + b * 1.6, y + h], [x, y + h]], { fill: 'F7D117', line: null });
        this.poly(s, [[x, y + h - b * 0.8], [x + w - b * 2.4, y], [x + w, y], [x + w, y + b * 0.8], [x + b * 2.4, y + h], [x, y + h]], { fill: 'CE1021', line: null });
        this.t(s, '★', x + 0.02, y, w * 0.4, h * 0.45, { size: Math.round(h * 26), color: 'F7D117', align: 'center', valign: 'middle' });
        break;
      }
      case 'gb': {
        this.rect(s, x, y, w, h, { fill: '1F3B87', line: null, radius: 0 });
        const t = h * 0.12;
        this.poly(s, [[x, y], [x + t * 1.4, y], [x + w, y + h - t], [x + w, y + h], [x + w - t * 1.4, y + h], [x, y + t]], { fill: 'FFFFFF', line: null });
        this.poly(s, [[x + w, y], [x + w, y + t], [x + t * 1.4, y + h], [x, y + h], [x, y + h - t], [x + w - t * 1.4, y]], { fill: 'FFFFFF', line: null });
        this.rect(s, x + w / 2 - t * 1.4, y, t * 2.8, h, { fill: 'FFFFFF', line: null, radius: 0 });
        this.rect(s, x, y + h / 2 - t * 1.4, w, t * 2.8, { fill: 'FFFFFF', line: null, radius: 0 });
        this.rect(s, x + w / 2 - t * 0.8, y, t * 1.6, h, { fill: 'C8102E', line: null, radius: 0 });
        this.rect(s, x, y + h / 2 - t * 0.8, w, t * 1.6, { fill: 'C8102E', line: null, radius: 0 });
        break;
      }
      default: throw new Error('unknown flag ' + code);
    }
    this.rect(s, x, y, w, h, { fill: null, line: 'B8C2CF', lw: 0.75, radius: 0 });
  }
  pin(s, x, y, color = 'accent6', size = 0.32) { this.icon(s, 'FaMapMarkerAlt', color, x - size / 2, y - size, size); }

  // S10 trap panel
  trap(s, x, y, w, h, fr, nl, o = {}) {
    this.rect(s, x, y, w, h, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1, ltr: 40 });
    this.chip(s, '⚠ PIÈGE', x + 0.2, y + 0.18, 'accent6', 0.32, 12);
    const rowH = (h - 0.65) / 2;
    this.t(s, fr, x + 0.3, y + 0.55, w - 0.6, rowH - 0.1, { size: o.size || 22, valign: 'middle', fit: true, max: o.size || 22, min: 13 });
    this.icon(s, 'FaArrowDown', 'accent6', x + 0.3, y + 0.55 + rowH - 0.12, 0.26);
    this.rect(s, x + 0.25, y + 0.6 + rowH + 0.08, w - 0.5, rowH - 0.14, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25 });
    this.t(s, nl, x + 0.4, y + 0.6 + rowH + 0.08, w - 0.8, rowH - 0.14, { size: o.size || 22, valign: 'middle', fit: true, max: o.size || 22, min: 13 });
  }
  // styled table from rows of markup strings
  table(s, rows, o = {}) {
    const x = o.x ?? 0.6; const y = o.y ?? 1.65; const w = o.w ?? 12.13;
    const colW = o.colW || rows[0].map(() => w / rows[0].length);
    const pt = o.size || 18;
    const data = rows.map((r, ri) => r.map((c, ci) => {
      const head = o.header !== false && ri === 0;
      const fillC = head ? ((o.headColors && o.headColors[ci]) || o.headColor || 'tx2') : (o.cellFill ? o.cellFill(ri, ci) : (ri % 2 ? 'bg1' : 'bg2'));
      return { text: parse(c, o.mode || 'a', head ? { bold: true } : {}), options: { fill: { color: col(fillC) }, color: head ? 'FFFFFF' : 'tx1', valign: 'middle', align: (o.align && o.align[ci]) || 'left', fontSize: head ? (o.headSize || pt - 2) : pt, bold: o.boldCol === ci ? true : undefined } };
    }));
    s.addTable(data, { x, y, w, colW, rowH: o.rowH, fontSize: pt, border: { type: 'solid', pt: 0.75, color: BORDER }, margin: [0.05, 0.12, 0.05, 0.12], autoPage: false });
  }
  // bubble (rounded, tinted)
  bubble(s, text, x, y, w, h, c = 'accent2', o = {}) {
    this.rect(s, x, y, w, h, { fill: c, tr: o.tr ?? 88, line: c, lw: 1.25, radius: 0.18 });
    this.t(s, text, x + 0.18, y, w - 0.36, h, { size: o.size || 18, valign: 'middle', fit: true, max: o.size || 18, min: 12, mode: o.mode, align: o.align });
  }
  avatar(s, which = 'man-teacher', x = 10.9, y = 3.6, w = 2.0, h = 3.3) { this.pic(s, PIC2ILL[which] ? which : 'prof_pointe', x, y, w, h, { valign: 'bottom', alt: 'L’enseignant' }); }

  // ------------------------------------------------------------ slide types
  cover(o) {
    this.section('Ouverture');
    const s = this.slide('N1_COVER');
    this.chip(s, `MODULE ${this.m.n} / 10`, 0.6, 0.7, 'accent1', 0.42, 14);
    s.addText(o.title, { placeholder: 'title' });
    s.addText(flow([
      { runs: parse(o.sub || '', 'a', { italic: true }), opts: { paraSpaceAfter: 12 } },
      { runs: parse(o.line || '', 'a', { bold: true, color: 'FFFFFF' }), opts: {} },
    ]), { placeholder: 'body' });
    if (o.visual) o.visual(s);
    s.addNotes(this.notesFor(o.g));
    return s;
  }

  mission(o) {
    const s = this.page({ g: o.g, tag: 'MISSIE', title: o.title || 'Missie van vandaag' });
    const n = o.cards.length; const top = 1.7; const h = o.band ? 4.3 : 5.0; const gap = 0.3;
    const w = o.vertical ? 9.6 : (10.0 - gap * (n - 1)) / n;
    o.cards.forEach((c, i) => {
      if (o.vertical) {
        const ch = (h - gap * (n - 1)) / n; const y = top + i * (ch + gap);
        this.rect(s, 0.6, y, w, ch, { fill: 'bg2', line: BORDER });
        this.iconDisc(s, c.icon, 0.85, y + (ch - 0.8) / 2, 0.8, c.color || 'tx2');
        this.t(s, c.h, 1.9, y + 0.12, 2.3, ch - 0.24, { size: 22, bold: true, color: c.color || 'tx2', valign: 'middle', head: true });
        this.t(s, c.t, 4.2, y + 0.1, w - 3.75, ch - 0.2, { size: 20, valign: 'middle', fit: true, max: 20, min: 14 });
      } else {
        const x = 0.6 + i * (w + gap);
        this.rect(s, x, top, w, h, { fill: 'bg2', line: BORDER });
        this.iconDisc(s, c.icon, x + w / 2 - 0.5, top + 0.35, 1.0, c.color || 'tx2');
        this.t(s, c.h, x + 0.2, top + 1.5, w - 0.4, 0.6, { size: 24, bold: true, color: c.color || 'tx2', align: 'center', head: true, valign: 'middle' });
        this.t(s, c.t, x + 0.25, top + 2.2, w - 0.5, h - 2.4, { size: 19, align: 'center', fit: true, max: 20, min: 14 });
      }
    });
    this.ill(s, 'man-teacher', 10.85, 1.9, 1.9, 1.9);
    this.ill(s, 'speech-balloon', 11.9, 1.6, 0.8, 0.8);
    if (o.band) {
      this.rect(s, 0.6, 6.2, 12.13, 0.62, { fill: 'bg2', line: 'tx2', lw: 0.75 });
      this.icon(s, 'FaLightbulb', 'accent1', 0.8, 6.33, 0.36);
      this.t(s, o.band, 1.3, 6.2, 11.2, 0.62, { size: 17, valign: 'middle' });
    }
    return s;
  }

  divider(o) {
    this.section('JIJ NU ! — Oefeningen');
    const s = this.slide('N1_DARK');
    s.addText('Oefeningen', { placeholder: 'title' });
    this.chip(s, 'JIJ NU !', 0.6, 0.26, 'accent1');
    s.addNotes(this.notesFor(o.g));
    this.t(s, 'JIJ NU !', 0.6, 1.55, 8, 1.0, { size: 54, bold: true, color: 'accent1', head: true, valign: 'middle' });
    const n = o.tiles.length; const per = Math.ceil(n / 2); const gap = 0.25;
    const w = (10.3 - gap * (per - 1)) / per; const h = 1.75;
    o.tiles.forEach(([title, stars, icon], i) => {
      const r = Math.floor(i / per); const c = i % per;
      const x = 0.6 + c * (w + gap); const y = 2.85 + r * (h + gap);
      this.rect(s, x, y, w, h, { fill: 'FFFFFF', tr: 88, line: 'FFFFFF', ltr: 50, lw: 1 });
      this.num(s, i + 1, x + 0.15, y + 0.15, 0.48, 'accent1', 16);
      this.icon(s, icon, 'FFFFFF', x + w - 0.6, y + 0.18, 0.42);
      this.t(s, title, x + 0.15, y + 0.72, w - 0.3, 0.68, { size: 15, bold: true, color: 'bg1', fit: true, max: 16, min: 11, valign: 'top' });
      this.t(s, stars, x + 0.15, y + 1.35, w - 0.3, 0.32, { size: 14, color: 'accent1', bold: true });
    });
    this.ill(s, 'man-teacher', 11.0, 4.0, 1.8, 1.8);
    return s;
  }

  // question + correction pair. draw(s, mode) draws the body; mode 'q' | 'a'
  ex(o, draw) {
    const modes = o.only || ['q', 'a'];
    for (const mode of modes) {
      const s = this.page({ ...o, tag: o.tag || 'JIJ NU !' }, mode === 'a' && modes.length > 1);
      let top = 1.62;
      if (o.instr) {
        this.icon(s, 'FaHandPointRight', 'accent1', 0.6, top + 0.04, 0.3);
        const ih = textH([plain(o.instr)], 11.6, 17, 0, 1.2, 0.5);
        this.t(s, o.instr, 1.05, top, 11.68, ih, { size: 17, italic: true, color: 'accent5' });
        top += ih + 0.15;
      }
      draw(s, mode, top);
    }
  }

  // numbered list exercise body (E1/E3): items with markup, in 1 or 2 columns
  list(s, items, mode, o = {}) {
    const x = o.x ?? 0.6; const y = o.y ?? 2.2; const w = o.w ?? 12.13; const h = o.h ?? (6.88 - y);
    const cols = o.cols || 1; const gap = 0.45; const cw = (w - gap * (cols - 1)) / cols;
    const per = Math.ceil(items.length / cols);
    const groups = []; for (let i = 0; i < cols; i++) groups.push(items.slice(i * per, (i + 1) * per));
    const numFmt = o.numFmt || ((k) => `${k}  `);
    const texts = groups.map((g, gi) => g.map((it, k) => plain((o.number === false ? '' : numFmt(gi * per + k + 1)) + it)));
    const pt = o.size || Math.min(...texts.map((t) => fitSize(t, cw, h, o.max || 22, o.min || 13, o.gap ?? 10, 0.5, 'list')));
    groups.forEach((g, gi) => {
      const paras = g.map((it, k) => ({ runs: [...(o.number === false ? [] : [{ text: numFmt(gi * per + k + 1), options: { bold: true, color: 'tx2' } }]), ...parse(it, mode)], opts: { paraSpaceAfter: o.gap ?? 10 } }));
      s.addText(flow(paras), { x: x + gi * (cw + gap), y, w: cw, h, fontSize: pt, color: 'tx1', valign: 'top', margin: 0, isTextBox: true });
    });
    return pt;
  }

  // E9 ticket de sortie
  ticket(o) {
    this.section('Clôture');
    const s = this.page({ g: o.g, tag: 'TICKET DE SORTIE', title: o.title || 'Ticket de sortie' });
    const qh = (4.1 - 0.2 * (o.q.length - 1)) / o.q.length;
    o.q.forEach((q, i) => {
      const y = 1.7 + i * (qh + 0.2);
      this.rect(s, 0.6, y, 6.6, qh, { fill: 'bg2', line: BORDER });
      this.num(s, i + 1, 0.8, y + qh / 2 - 0.25, 0.5, 'accent1', 18);
      this.t(s, q, 1.5, y + 0.08, 5.55, qh - 0.16, { size: 19, valign: 'middle', fit: true, max: 20, min: 13 });
    });
    this.t(s, 'AUTO-ÉVALUATION', 7.6, 1.7, 5.1, 0.4, { size: 14, bold: true, color: 'accent5', cs: 2 });
    const rh = Math.min(0.95, 3.6 / o.self.length);
    o.self.forEach((label, i) => {
      const y = 2.2 + i * rh;
      this.rect(s, 7.6, y, 5.13, rh - 0.12, { fill: i % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.5 });
      this.t(s, label, 7.8, y, 2.55, rh - 0.12, { size: 16, bold: true, color: 'tx2', valign: 'middle', fit: true, max: 16, min: 11 });
      ['FaRegFrown', 'FaRegMeh', 'FaRegSmile'].forEach((ic, k) => this.icon(s, ic, ['accent6', 'accent1', 'accent3'][k], 10.45 + k * 0.75, y + (rh - 0.12) / 2 - 0.25, 0.5));
    });
    if (o.teaser) {
      this.rect(s, 0.6, 6.05, 12.13, 0.8, { fill: 'tx2', line: null });
      this.icon(s, o.teaser.icon || 'FaArrowRight', 'FFFFFF', 0.85, 6.25, 0.4);
      this.t(s, o.teaser.text, 1.45, 6.05, 11.1, 0.8, { size: 18, color: 'bg1', valign: 'middle' });
    }
    return s;
  }

  // E8 role play: role cards + document + phrase bank
  roleplay(o) {
    const s = this.page({ g: o.g, tag: 'MISE EN SITUATION', title: o.title, stars: o.stars || '★★★' });
    const docW = o.doc ? 3.9 : 0; const W = 12.13 - (docW ? docW + 0.3 : 0);
    let y = 1.62;
    if (o.scenario) {
      const sh = Math.max(0.7, textH([plain(o.scenario)], W - 0.5, 17, 0, 1.2, 0.5) + 0.2);
      this.rect(s, 0.6, y, W, sh, { fill: 'purple', tr: 90, line: 'purple', lw: 1 });
      this.t(s, o.scenario, 0.85, y, W - 0.5, sh, { size: 17, valign: 'middle' });
      y += sh + 0.2;
    }
    const bankH = o.bank ? 1.75 : 0;
    const rh = 6.88 - y - (bankH ? bankH + 0.2 : 0);
    const rw = (W - 0.3) / 2;
    [[o.a, 'accent2', 'A'], [o.b, 'purple', 'B']].forEach(([txt, c, L], i) => {
      const x = 0.6 + i * (rw + 0.3);
      this.rect(s, x, y, rw, rh, { fill: 'bg1', line: c, lw: 1.5, shadow: true });
      this.num(s, L, x + 0.18, y + 0.15, 0.5, c, 18);
      this.t(s, txt, x + 0.85, y + 0.1, rw - 1.0, rh - 0.2, { size: 17, valign: 'middle', fit: true, max: 17, min: 12 });
    });
    if (o.bank) {
      const by = 6.88 - bankH;
      this.rect(s, 0.6, by, W, bankH, { fill: 'bg2', line: BORDER });
      this.t(s, 'BANQUE DE PHRASES', 0.8, by + 0.08, 4, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
      this.t(s, o.bank, 0.8, by + 0.4, W - 0.4, bankH - 0.48, { size: 16, fit: true, max: 16, min: 11, gap: 3 });
    }
    if (o.doc) o.doc(s, 12.73 - docW, 1.62, docW, 5.26);
    return s;
  }

  // a stylised form (document) for role plays
  form(s, x, y, w, h, title, fields, o = {}) {
    this.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
    this.rect(s, x, y, w, 0.55, { fill: o.color || 'tx2', line: null, radius: 0.04 });
    this.t(s, title, x + 0.15, y, w - 0.3, 0.55, { size: 13, bold: true, color: 'bg1', valign: 'middle', fit: true, max: 13, min: 9 });
    const fh = Math.min(0.5, (h - 0.75) / fields.length);
    fields.forEach((f, i) => {
      const fy = y + 0.7 + i * fh;
      this.t(s, f, x + 0.15, fy, w * 0.48, fh, { size: 11, color: 'accent5', valign: 'middle', fit: true, max: 12, min: 8 });
      this.line(s, x + w * 0.5, fy + fh - 0.1, x + w - 0.15, fy + fh - 0.1, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
    });
  }

  async save(file) {
    await this.pres.writeFile({ fileName: file });
    await postProcess(file);
  }
}

// After pptxgenjs: (1) keep only the first <a:pPr> of each paragraph; (2) write the course colours into the theme.
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

module.exports = { Deck, renderIcons, K, HEX, PURPLE, BORDER, GHOST, plain, parse, textH, fitSize };
