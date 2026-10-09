// In vijf zinnen — production écrite et orale guidée (A1 · A2 · B1) : 24 contextes du quotidien
// dans le style « Gebruik deze foto als inspiratie » : bandeau « Niveau », puis trois diapos par contexte
// (la consigne Zin 1 – 5 · la grande illustration · l'exemple, étiquettes vertes posées sur les bribes de texte)
const path = require('path');
const { HEX, PURPLE } = require('../lib');
const { LEVELS } = require('../vijfzinnen_data');
const MET = require('../calibri_metrics.json');

const meta = {
  n: 'V', slug: 'In_vijf_zinnen', title: 'In vijf zinnen', short: 'In vijf zinnen',
  template: 'in_vijf_zinnen.md', file: 'In_vijf_zinnen_A1_A2_B1.pptx',
  docTitle: 'In vijf zinnen — Production écrite et orale guidée (A1 · A2 · B1)',
  subject: 'Néerlandais — production guidée A1 · A2 · B1',
  foot: 'Néerlandais · A1 · A2 · B1 · In vijf zinnen',
  company: 'IRAM — Néerlandais',
  L: { coverFoot: 'Néerlandais · A1 · A2 · B1 · Production guidée · A. Jouniaux · IRAM' },
};

const IMG = path.join(__dirname, '..', 'img', 'vijfzinnen');
const FONT = 'Calibri';
const INK = '2B2F38'; const GREY = '6B7280';
const ZIN = '5FA873';
const LBLFOOT = 'Néerlandais · A1 · A2 · B1 · Production guidée · A. Jouniaux · IRAM'; const LAB = '7AB648'; const LAB_BG = 'E6F3DA'; const OK = '2E6B44';
// le bandeau de chaque niveau
const LV = {
  A1: { fill: 'E6F4EA', line: '6DBE8A', text: '3D8C5A' },
  A2: { fill: 'E4E8FB', line: 'F2A66C', text: '5B6BC8' },
  B1: { fill: 'F4E8F6', line: 'B57FCB', text: '7E4C97' },
  ALL: { fill: 'EEF1F6', line: '9AA6B8', text: '4A5568' },
};
const hexOf = (c) => (c === 'purple' ? PURPLE : HEX[c] || c);

// largeur d'un texte en pouces (métriques de Calibri / Carlito)
const measure = (t, size, bold) => {
  const tab = MET[bold ? 'b' : 'r'];
  let u = 0;
  for (const ch of t) u += tab[ch] ?? 520;
  return (u / 1000) * (size / 72);
};
// « {n:texte|étiquette} » → segments
const parseEx = (str) => {
  const segs = [];
  str.split(/(\{\d:[^}]+\})/).filter(Boolean).forEach((p) => {
    const m = p.match(/^\{(\d):([^|}]+)(?:\|([^}]+))?\}$/);
    if (m) segs.push({ t: m[2], n: Number(m[1]), tag: m[3] });
    else segs.push({ t: p, n: 0 });
  });
  return segs;
};

function build(d) {
  const P = d.pres;
  P.defineSlideMaster({
    title: 'VZ_PAGE', background: { color: 'FFFFFF' },
    objects: [
      { text: { text: meta.foot, options: { x: 1.7, y: 7.08, w: 8, h: 0.28, fontSize: 9.5, color: '9AA3B2', margin: 0, valign: 'middle' } } },
      { placeholder: { options: { name: 'title', type: 'title', x: 1.7, y: 0.42, w: 11.2, h: 0.72, fontSize: 30, bold: true, color: INK, align: 'center', valign: 'middle', margin: 0 }, text: '' } },
    ],
    slideNumber: { x: 12.3, y: 7.08, w: 0.6, h: 0.28, fontSize: 9.5, color: '9AA3B2', align: 'right' },
  });
  // titre à gauche, à côté de la vignette (diapo « exemple »)
  P.defineSlideMaster({
    title: 'VZ_LEFT', background: { color: 'FFFFFF' },
    objects: [
      { text: { text: meta.foot, options: { x: 1.7, y: 7.08, w: 8, h: 0.28, fontSize: 9.5, color: '9AA3B2', margin: 0, valign: 'middle' } } },
      { placeholder: { options: { name: 'title', type: 'title', x: 1.85, y: 0.38, w: 8.9, h: 1.0, fontSize: 24, bold: true, color: INK, align: 'left', valign: 'middle', margin: 0 }, text: '' } },
    ],
    slideNumber: { x: 12.3, y: 7.08, w: 0.6, h: 0.28, fontSize: 9.5, color: '9AA3B2', align: 'right' },
  });
  P.defineSlideMaster({
    title: 'VZ_COVER', background: { color: 'FFFFFF' },
    objects: [
      { text: { text: LBLFOOT, options: { x: 1.7, y: 7.08, w: 8, h: 0.28, fontSize: 9.5, color: '9AA3B2', margin: 0, valign: 'middle' } } },
      { placeholder: { options: { name: 'title', type: 'title', x: 1.7, y: 1.35, w: 5.7, h: 1.3, fontSize: 54, bold: true, color: INK, align: 'left', valign: 'bottom', margin: 0 }, text: '' } },
    ],
  });
  const page = (g, title, o = {}) => {
    const s = d.slide(o.left ? 'VZ_LEFT' : 'VZ_PAGE');
    s.addText(title, { placeholder: 'title', ...(o.size ? { fontSize: o.size } : {}) });
    s.addNotes(d.notesFor(g, false, o.notes));
    return s;
  };
  const txt = (s, t, x, y, w, h, o = {}) => s.addText(t, {
    x, y, w, h, fontSize: o.size || 16, fontFace: FONT, bold: !!o.bold, italic: !!o.italic, color: o.color || INK,
    align: o.align || 'left', valign: o.valign || 'middle', margin: 0, wrap: o.wrap ?? true, isTextBox: true, charSpacing: o.cs, rotate: o.rotate,
  });
  const box = (s, x, y, w, h, o = {}) => s.addShape(d.S.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: o.r ?? 0.1, fill: { color: o.fill || 'FFFFFF', transparency: o.tr || 0 },
    line: o.line ? { color: o.line, width: o.lw || 1.5, dashType: o.dash } : { color: 'FFFFFF', width: 0, transparency: 100 },
    shadow: o.shadow ? { type: 'outer', color: '1B2430', opacity: o.so ?? 0.22, blur: o.blur ?? 8, offset: o.off ?? 3, angle: 90 } : undefined, rotate: o.rot,
  });
  // le bandeau vertical « Niveau … »
  const banner = (s, lv, label) => {
    const c = LV[lv];
    box(s, 0.4, 0.4, 0.95, 6.55, { fill: c.fill, line: c.line, lw: 2.25, r: 0.12 });
    txt(s, label, 0.875 - 3.2, 3.675 - 0.45, 6.4, 0.9, { size: 38, bold: true, color: c.text, align: 'center', rotate: 270, cs: 2 });
  };
  // une illustration dans un cadre blanc (style photo)
  const photo = (s, img, x, y, w, o = {}) => {
    const h = w / 1.6; const b = o.b ?? Math.max(0.05, w * 0.022);
    box(s, x - b, y - b, w + 2 * b, h + 2 * b, { fill: 'FFFFFF', line: 'E3E7EE', lw: 0.75, r: 0.04, shadow: true, so: 0.25, blur: o.blur ?? 10, off: o.off ?? 4, rot: o.rot });
    s.addImage({ path: path.join(IMG, `${img}${o.small ? '_s' : ''}.jpg`), x, y, w, h, rotate: o.rot });
    return h;
  };
  const zinChip = (s, n, x, y, w = 1.0, h = 0.44) => {
    box(s, x, y, w, h, { fill: ZIN, r: 0.06 });
    txt(s, `Zin ${n}`, x, y, w, h, { size: 16, color: 'FFFFFF', align: 'center' });
  };
  const modeTag = (s, mode, x, y) => {
    const c = mode === 'W' ? '4A7BD0' : 'D9822B';
    box(s, x, y, 1.75, 0.4, { fill: mode === 'W' ? 'EAF1FC' : 'FDF1E6', line: c, lw: 1, r: 0.2 });
    d.icon(s, mode === 'W' ? 'FaPenNib' : 'FaComments', c, x + 0.14, y + 0.09, 0.22);
    txt(s, mode === 'W' ? 'À L’ÉCRIT' : 'À L’ORAL', x + 0.42, y, 1.25, 0.4, { size: 11.5, bold: true, color: c, cs: 1 });
  };

  // ------------------------------------------------------------ l'exemple : texte suivi, étiquettes posées au-dessus des bribes
  const flow = (s, paras, X0, Y0, xmax, size, draw) => {
    const lineH = (size / 72) * 1.3; const boxH = (size / 72) * 1.22; const pad = 0.05;
    const labS = 11; const labH = 0.27; const labGap = 0.07; const sp = measure(' ', size);
    let y = Y0;
    paras.forEach((para) => {
      const toks = []; let space = false;
      parseEx(para.text).forEach((sg) => {
        if (sg.n) { toks.push({ t: sg.t, n: sg.n, tag: sg.tag, space }); space = false; return; }
        sg.t.split('\n').forEach((part, pi) => {
          if (pi) { toks.push({ br: true }); space = false; }
          part.split(/(\s+)/).forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) { space = true; return; }
            toks.push({ t: p, n: 0, space }); space = false;
          });
        });
      });
      const lines = [[]]; let x = X0;
      toks.forEach((tk) => {
        if (tk.br) { lines.push([]); x = X0; return; }
        const w = measure(tk.t, size, !!tk.n) + (tk.n ? 2 * pad : 0);
        const line = lines[lines.length - 1];
        const lead = line.length && tk.space ? sp + 0.02 : 0;
        if (line.length && x + lead + w > xmax) { lines.push([]); x = X0; } else x += lead;
        lines[lines.length - 1].push({ ...tk, x, w });
        x += w;
      });
      lines.forEach((ln) => {
        if (!ln.length) return;
        const hasFrag = ln.some((tk) => tk.n);
        // dernière phrase centrée, comme dans le modèle
        if (para.center) { const end = ln[ln.length - 1].x + ln[ln.length - 1].w; const dx = (xmax - end) / 2; ln.forEach((tk) => { tk.x += dx; }); }
        const ty = y + (hasFrag ? labH + labGap : 0);
        if (draw) {
          let run = null;
          const flush = () => { if (run) txt(s, run.t, run.x, ty, run.w + 0.2, lineH, { size, wrap: false }); run = null; };
          ln.forEach((tk) => {
            if (tk.n) {
              flush();
              box(s, tk.x, ty + (lineH - boxH) / 2, tk.w, boxH, { fill: LAB_BG, r: 0.05 });
              txt(s, tk.t, tk.x, ty, tk.w, lineH, { size, bold: true, align: 'center', wrap: false });
            } else if (run) { run.t += (tk.space ? ' ' : '') + tk.t; run.w = tk.x + tk.w - run.x; } else run = { t: tk.t, x: tk.x, w: tk.w };
          });
          flush();
          let last = -9;
          ln.filter((tk) => tk.n).forEach((tk) => {
            const label = tk.tag || para.crit[tk.n - 1].k;
            const lw = measure(label, labS, true) + 0.24;
            let lx = Math.max(tk.x + tk.w / 2 - lw / 2, last + 0.06, X0 - 0.15);
            lx = Math.min(lx, 12.95 - lw);
            s.addShape(d.S.LINE, { x: Math.min(lx + lw / 2, tk.x + tk.w / 2), y: y + labH, w: Math.max(0.001, Math.abs(lx + lw / 2 - (tk.x + tk.w / 2))), h: labGap + (lineH - boxH) / 2, flipH: tk.x + tk.w / 2 < lx + lw / 2, line: { color: LAB, width: 1.25 } });
            box(s, lx, y, lw, labH, { fill: LAB, r: 0.04 });
            txt(s, label, lx, y, lw, labH, { size: labS, color: 'FFFFFF', align: 'center', wrap: false });
            last = lx + lw;
          });
        }
        y = ty + lineH + 0.16;
      });
      y += 0.22;
    });
    return y - Y0 - 0.38;
  };
  const fitFlow = (paras, X0, Y0, xmax, maxH, start) => {
    let size = start;
    while (size > 14 && flow(null, paras, X0, Y0, xmax, size, false) > maxH) size -= 0.5;
    return size;
  };
  const paragraphs = (c) => [{ text: c.ex.slice(0, 4).join(' '), crit: c.crit }, { text: c.ex[4], crit: c.crit, center: true }];

  // ------------------------------------------------------------ 1 couverture
  {
    const s = d.slide('VZ_COVER');
    s.addText('In vijf zinnen', { placeholder: 'title' });
    s.addNotes(d.notesFor(1));
    banner(s, 'ALL', 'A1 · A2 · B1');
    txt(s, 'Production écrite et orale guidée', 1.72, 2.8, 5.6, 0.5, { size: 22, color: GREY });
    txt(s, '24 contextes du quotidien · 1 image · 5 phrases · 1 modèle', 1.72, 3.3, 5.6, 0.45, { size: 16, italic: true, color: GREY });
    [['A1', 'Découverte'], ['A2', 'Survie'], ['B1', 'Seuil']].forEach(([lv, n], i) => {
      const c = LV[lv]; const x = 1.72 + i * 1.82;
      box(s, x, 4.15, 1.68, 0.62, { fill: c.fill, line: c.line, lw: 1.5, r: 0.14 });
      txt(s, [{ text: `${lv} `, options: { bold: true, color: c.text } }, { text: n, options: { color: c.text } }], x, 4.15, 1.68, 0.62, { size: 16, align: 'center' });
    });
    box(s, 1.72, 5.15, 5.3, 0.8, { fill: 'EAF5EC', line: ZIN, lw: 1.25, r: 0.14 });
    d.icon(s, 'FaComments', ZIN, 1.92, 5.38, 0.34);
    txt(s, 'Lees je tekst voor aan je partner. Wat denkt hij/zij daarvan?', 2.4, 5.15, 4.5, 0.8, { size: 14.5, bold: true, color: OK });
    photo(s, 'terras', 7.75, 0.85, 3.5, { small: true, rot: -4 });
    photo(s, 'zee', 9.55, 2.45, 3.4, { small: true, rot: 5 });
    photo(s, 'buren', 7.6, 4.3, 3.3, { small: true, rot: -2 });
  }

  // ------------------------------------------------------------ 2 mode d'emploi
  d.section('Mode d’emploi');
  {
    const s = page(2, 'Hoe werkt het? Comment ça marche ?');
    banner(s, 'ALL', 'Mode d’emploi');
    const S = [['FaImage', 'Kijk', 'Observez l’image : où ? qui ? quoi ?'], ['FaListOl', 'Lees', 'Lisez les 5 consignes : Zin 1 à Zin 5, une phrase chacune.'], ['FaPenNib', 'Schrijf of vertel', 'Écrivez ou dites vos 5 phrases (5 à 10 min).'], ['FaUserFriends', 'Deel', 'Lisez votre texte à votre partner, puis comparez avec l’exemple.']];
    const cw = (11.2 - 3 * 0.25) / 4;
    S.forEach(([ic, h, t], i) => {
      const x = 1.7 + i * (cw + 0.25);
      box(s, x, 1.55, cw, 2.3, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.1, shadow: true, so: 0.12 });
      s.addShape(d.S.OVAL, { x: x + 0.25, y: 1.8, w: 0.72, h: 0.72, fill: { color: 'EAF5EC' }, line: { color: ZIN, width: 1.5 } });
      d.icon(s, ic, ZIN, x + 0.43, 1.98, 0.36);
      txt(s, `${i + 1}`, x + cw - 0.65, 1.8, 0.4, 0.72, { size: 30, bold: true, color: 'D5DCE6', align: 'right' });
      txt(s, h, x + 0.25, 2.65, cw - 0.5, 0.42, { size: 18, bold: true });
      txt(s, t, x + 0.25, 3.05, cw - 0.5, 0.75, { size: 13.5, color: GREY, valign: 'top' });
    });
    txt(s, 'Dans l’exemple, chaque étiquette verte se pose sur la bribe de texte qui répond à la consigne :', 1.7, 4.15, 11.2, 0.4, { size: 14, italic: true, color: GREY });
    const c2 = LEVELS[1].ctx[1];
    flow(s, [{ text: c2.ex[1], crit: c2.crit }], 1.9, 4.7, 12.8, 21, true);
    box(s, 4.2, 6.2, 6.2, 0.7, { fill: 'EAF5EC', line: ZIN, lw: 1.25, r: 0.14 });
    txt(s, 'Le but : le lexique et la grammaire du niveau… et la créativité !', 4.2, 6.2, 6.2, 0.7, { size: 15, bold: true, color: OK, align: 'center' });
  }

  // ------------------------------------------------------------ 3 la grille
  {
    const s = page(3, 'Évaluer une production : la grille sur 10');
    banner(s, 'ALL', 'Évaluation');
    const R = [['Consignes respectées', '5', 'un point par phrase : la consigne est présente et correcte', ZIN], ['Correction', '2', 'conjugaison, ordre des mots, accords, orthographe ou prononciation', '4A7BD0'],
      ['Vocabulaire', '1', 'des mots précis et variés, adaptés à la situation', 'D9822B'], ['Cohérence', '1', 'les 5 phrases racontent une même scène', '8E6CC8'], ['Créativité', '1', 'une chute originale, de l’humour, une surprise', 'C2185B']];
    R.forEach(([h, pts, t, c], i) => {
      const y = 1.55 + i * 0.92;
      box(s, 1.7, y, 8.7, 0.78, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.12, shadow: true, so: 0.1 });
      box(s, 1.85, y + 0.15, 0.48, 0.48, { fill: c, r: 0.24 });
      txt(s, h, 2.5, y, 2.6, 0.78, { size: 17, bold: true, color: c });
      txt(s, t, 5.1, y, 4.2, 0.78, { size: 13.5, color: GREY });
      txt(s, `${pts} pt${pts === '1' ? '' : 's'}`, 9.35, y, 0.9, 0.78, { size: 17, bold: true, color: c, align: 'right' });
    });
    let k = 0;
    R.forEach(([, pts, , c]) => { for (let j = 0; j < Number(pts); j += 1) { box(s, 10.85, 1.55 + (9 - k) * 0.45, 0.8, 0.38, { fill: c, r: 0.08 }); k += 1; } });
    txt(s, '/ 10', 11.8, 5.35, 1.1, 0.6, { size: 28, bold: true, color: INK });
    txt(s, 'À l’oral : la prononciation et la fluidité remplacent l’orthographe.', 1.7, 6.3, 8.7, 0.45, { size: 13.5, italic: true, color: GREY });
  }

  // ------------------------------------------------------------ les niveaux
  let g = 4;
  LEVELS.forEach((lvl) => {
    d.section(lvl.name);
    // intercalaire
    {
      const s = page(g, `Niveau ${lvl.id} — ${lvl.name.split('· ')[1]}`);
      banner(s, lvl.id, `Niveau ${lvl.id}`);
      const c = LV[lvl.id];
      box(s, 1.7, 1.5, 3.3, 5.35, { fill: c.fill, line: c.line, lw: 1.25, r: 0.12 });
      txt(s, 'Ce qu’on évalue', 1.9, 1.62, 3.0, 0.45, { size: 16, bold: true, color: c.text });
      s.addText(lvl.spec.map((t, i) => ({ text: t.replace(/\*\*/g, ''), options: { bullet: { indent: 12 }, breakLine: i < lvl.spec.length - 1, paraSpaceAfter: 5 } })), {
        x: 1.9, y: 2.1, w: 3.0, h: 4.6, fontSize: 13, fontFace: FONT, color: INK, valign: 'top', margin: 0, isTextBox: true,
      });
      const cw = 1.78; const gx = 0.17;
      lvl.ctx.forEach((cx, i) => {
        const x = 5.3 + (i % 4) * (cw + gx); const y = 1.6 + Math.floor(i / 4) * 2.65;
        photo(s, cx.img, x, y, cw, { small: true, b: 0.05, blur: 6, off: 2 });
        txt(s, `${i + 1} · ${cx.t}`, x - 0.05, y + cw / 1.6 + 0.1, cw + 0.1, 0.5, { size: 12, bold: true, valign: 'top' });
        txt(s, cx.fr, x - 0.05, y + cw / 1.6 + 0.58, cw + 0.1, 0.3, { size: 10.5, italic: true, color: GREY, valign: 'top' });
        d.icon(s, cx.mode === 'W' ? 'FaPenNib' : 'FaComments', cx.mode === 'W' ? '4A7BD0' : 'D9822B', x + cw - 0.27, y + 0.07, 0.2);
      });
      g += 1;
    }
    lvl.ctx.forEach((c, i) => {
      const said = c.mode === 'W' ? 'schrijven' : 'zeggen';
      // 1. la consigne
      {
        const s = page(g, 'Gebruik deze afbeelding als inspiratie');
        banner(s, lvl.id, `Niveau ${lvl.id}`);
        txt(s, [{ text: `${i + 1} · ${c.t}`, options: { bold: true, color: LV[lvl.id].text } }, { text: `   ${c.fr}`, options: { italic: true, color: GREY } }], 1.7, 1.12, 11.2, 0.4, { size: 15, align: 'center' });
        photo(s, c.img, 1.85, 1.75, 4.75, { small: true });
        modeTag(s, c.mode, 1.85, 5.0);
        txt(s, c.sit, 3.75, 4.97, 2.9, 0.8, { size: 11.5, italic: true, color: GREY, valign: 'top' });
        c.crit.forEach((k, j) => {
          const y = 1.72 + j * 0.66;
          zinChip(s, j + 1, 6.95, y + 0.06);
          d.t(s, k.t, 8.1, y, 4.8, 0.56, { size: 14.5, color: INK, valign: 'middle' });
        });
        box(s, 3.55, 5.95, 7.5, 0.9, { fill: 'EAF5EC', line: ZIN, lw: 1.25, r: 0.16 });
        d.icon(s, 'FaUserFriends', ZIN, 3.85, 6.19, 0.42);
        txt(s, [{ text: c.mode === 'W' ? 'Lees je tekst voor aan je partner.' : 'Vertel je verhaal aan je partner.', options: { breakLine: true } }, { text: 'Wat denkt hij/zij daarvan?' }], 4.5, 5.95, 6.4, 0.9, { size: 18, bold: true, color: OK, align: 'center' });
      }
      // 2. la grande illustration
      {
        const s = page(g, c.t, { size: 24, notes: 'GRANDE IMAGE — laissez les apprenant·es observer et nommer ce qu’ils et elles voient avant d’écrire : Waar zijn we? Wie zie je? Wat gebeurt er?' });
        banner(s, lvl.id, `Niveau ${lvl.id}`);
        const w = 8.85;
        photo(s, c.img, 1.7 + (11.2 - w) / 2, 1.35, w, { b: 0.12, blur: 14, off: 5 });
      }
      // 3. l'exemple
      {
        const s = page(g, `Hier is een voorbeeld van wat je had kunnen denken en ${said}…`, { left: true, notes: `EXEMPLE — chaque étiquette verte renvoie à une consigne (Zin 1 à Zin 5). Faites retrouver, pour chaque bribe, la consigne à laquelle elle répond.` });
        banner(s, lvl.id, `Niveau ${lvl.id}`);
        photo(s, c.img, 11.05, 0.32, 1.75, { small: true, b: 0.05, blur: 6, off: 2 });
        const paras = paragraphs(c);
        const start = lvl.id === 'A1' ? 24 : lvl.id === 'A2' ? 22 : 20;
        const size = fitFlow(paras, 1.85, 1.75, 12.8, 6.95 - 1.75, start);
        const hgt = flow(null, paras, 1.85, 1.75, 12.8, size, false);
        flow(s, paras, 1.85, 1.75 + Math.max(0, (6.95 - 1.75 - hgt) / 2.5), 12.8, size, true);
      }
      g += 1;
    });
  });

  // ------------------------------------------------------------ variantes
  d.section('Variantes');
  {
    const s = page(g, 'Six variantes ludiques');
    banner(s, 'ALL', 'Variantes');
    const V = [['stopwatch', 'Contre la montre', 'Cinq phrases en cinq minutes : le sablier tourne !'], ['link', 'La chaîne', 'Cinq apprenant·es, cinq phrases : chacun·e ajoute la sienne à l’oral.'], ['detective', 'Devinez la consigne', 'On lit sa production ; la classe retrouve les cinq consignes.'],
      ['game-die', 'Le dé', 'On lance le dé : la phrase indiquée doit être dite en premier.'], ['up-arrow', 'Niveau supérieur', 'Même image, consignes du niveau suivant : A1 → A2 → B1.'], ['trophy', 'La meilleure chute', 'Toutes les chutes au tableau ; la classe vote.']];
    const cw = (11.2 - 2 * 0.25) / 3; const ch = 2.4;
    V.forEach(([ic, h, t], i) => {
      const x = 1.7 + (i % 3) * (cw + 0.25); const y = 1.5 + Math.floor(i / 3) * (ch + 0.25);
      box(s, x, y, cw, ch, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.12, shadow: true, so: 0.12 });
      d.ill(s, ic, x + 0.25, y + 0.25, 0.85, 0.85);
      txt(s, h, x + 1.25, y + 0.25, cw - 1.4, 0.85, { size: 18, bold: true, color: ZIN });
      txt(s, t, x + 0.25, y + 1.25, cw - 0.5, 1.0, { size: 14, color: GREY, valign: 'top' });
    });
  }
}

module.exports = { meta, build };
