// In vijf zinnen — la boîte à outils commune des decks de production guidée (style « Gebruik deze foto als inspiratie »)
// bandeau vertical « Niveau », cadres photo, étiquettes Zin n, et le texte d'exemple aux étiquettes vertes posées sur les bribes
const path = require('path');
const MET = require('./calibri_metrics.json');

const IMG = path.join(__dirname, 'img', 'vijfzinnen');
const FONT = 'Calibri';
const INK = '2B2F38'; const GREY = '6B7280';
const ZIN = '5FA873'; const LAB = '7AB648'; const LAB_BG = 'E6F3DA'; const OK = '2E6B44';
// les couleurs des bandeaux
const LV = {
  A1: { fill: 'E6F4EA', line: '6DBE8A', text: '3D8C5A' },
  A2: { fill: 'E4E8FB', line: 'F2A66C', text: '5B6BC8' },
  B1: { fill: 'F4E8F6', line: 'B57FCB', text: '7E4C97' },
  ALL: { fill: 'EEF1F6', line: '9AA6B8', text: '4A5568' },
  // les quatre sections du syllabus (deck A1)
  S1: { fill: 'E6F4EA', line: '6DBE8A', text: '3D8C5A' },
  S2: { fill: 'E4EEFB', line: '6FA0DC', text: '3E6FB0' },
  S3: { fill: 'FDF1E4', line: 'F0A15E', text: 'B9661F' },
  S4: { fill: 'F4E8F6', line: 'B57FCB', text: '7E4C97' },
};

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

function vijfKit(d, meta) {
  const P = d.pres;
  const foot = (text) => ({ text: { text, options: { x: 1.7, y: 7.08, w: 8, h: 0.28, fontSize: 9.5, color: '9AA3B2', margin: 0, valign: 'middle' } } });
  const num = { x: 12.3, y: 7.08, w: 0.6, h: 0.28, fontSize: 9.5, color: '9AA3B2', align: 'right' };
  P.defineSlideMaster({ title: 'VZ_PAGE', background: { color: 'FFFFFF' }, slideNumber: num, objects: [foot(meta.foot), { placeholder: { options: { name: 'title', type: 'title', x: 1.7, y: 0.42, w: 11.2, h: 0.72, fontSize: 30, bold: true, color: INK, align: 'center', valign: 'middle', margin: 0 }, text: '' } }] });
  // titre à gauche, à côté de la vignette (diapo « exemple »)
  P.defineSlideMaster({ title: 'VZ_LEFT', background: { color: 'FFFFFF' }, slideNumber: num, objects: [foot(meta.foot), { placeholder: { options: { name: 'title', type: 'title', x: 1.85, y: 0.38, w: 8.9, h: 1.0, fontSize: 24, bold: true, color: INK, align: 'left', valign: 'middle', margin: 0 }, text: '' } }] });
  P.defineSlideMaster({ title: 'VZ_COVER', background: { color: 'FFFFFF' }, objects: [foot(meta.L.coverFoot), { placeholder: { options: { name: 'title', type: 'title', x: 1.7, y: 1.35, w: 5.7, h: 1.3, fontSize: 54, bold: true, color: INK, align: 'left', valign: 'bottom', margin: 0 }, text: '' } }] });

  const k = { INK, GREY, ZIN, LAB, OK, LV, FONT, measure };
  k.page = (g, title, o = {}) => {
    const s = d.slide(o.left ? 'VZ_LEFT' : 'VZ_PAGE');
    s.addText(title, { placeholder: 'title', ...(o.size ? { fontSize: o.size } : {}) });
    s.addNotes(d.notesFor(g, false, o.notes));
    return s;
  };
  k.cover = (g, title) => { const s = d.slide('VZ_COVER'); s.addText(title, { placeholder: 'title' }); s.addNotes(d.notesFor(g)); return s; };
  k.txt = (s, t, x, y, w, h, o = {}) => s.addText(t, {
    x, y, w, h, fontSize: o.size || 16, fontFace: FONT, bold: !!o.bold, italic: !!o.italic, color: o.color || INK,
    align: o.align || 'left', valign: o.valign || 'middle', margin: 0, wrap: o.wrap ?? true, isTextBox: true, charSpacing: o.cs, rotate: o.rotate,
  });
  k.box = (s, x, y, w, h, o = {}) => s.addShape(d.S.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: o.r ?? 0.1, fill: { color: o.fill || 'FFFFFF', transparency: o.tr || 0 },
    line: o.line ? { color: o.line, width: o.lw || 1.5, dashType: o.dash } : { color: 'FFFFFF', width: 0, transparency: 100 },
    shadow: o.shadow ? { type: 'outer', color: '1B2430', opacity: o.so ?? 0.22, blur: o.blur ?? 8, offset: o.off ?? 3, angle: 90 } : undefined, rotate: o.rot,
  });
  // le bandeau vertical « Niveau … »
  k.banner = (s, lv, label, size = 38) => {
    const c = LV[lv];
    k.box(s, 0.4, 0.4, 0.95, 6.55, { fill: c.fill, line: c.line, lw: 2.25, r: 0.12 });
    k.txt(s, label, 0.875 - 3.2, 3.675 - 0.45, 6.4, 0.9, { size, bold: true, color: c.text, align: 'center', rotate: 270, cs: 2 });
  };
  // une illustration dans un cadre blanc (style photo)
  k.photo = (s, img, x, y, w, o = {}) => {
    const h = w / 1.6; const b = o.b ?? Math.max(0.05, w * 0.022);
    k.box(s, x - b, y - b, w + 2 * b, h + 2 * b, { fill: 'FFFFFF', line: 'E3E7EE', lw: 0.75, r: 0.04, shadow: true, so: 0.25, blur: o.blur ?? 10, off: o.off ?? 4, rot: o.rot });
    s.addImage({ path: path.join(IMG, `${img}${o.small ? '_s' : ''}.jpg`), x, y, w, h, rotate: o.rot });
    return h;
  };
  k.zinChip = (s, n, x, y, w = 1.0, h = 0.44) => {
    k.box(s, x, y, w, h, { fill: ZIN, r: 0.06 });
    k.txt(s, `Zin ${n}`, x, y, w, h, { size: 16, color: 'FFFFFF', align: 'center' });
  };
  k.modeTag = (s, mode, x, y) => {
    const c = mode === 'W' ? '4A7BD0' : 'D9822B';
    k.box(s, x, y, 1.75, 0.4, { fill: mode === 'W' ? 'EAF1FC' : 'FDF1E6', line: c, lw: 1, r: 0.2 });
    d.icon(s, mode === 'W' ? 'FaPenNib' : 'FaComments', c, x + 0.14, y + 0.09, 0.22);
    k.txt(s, mode === 'W' ? 'À L’ÉCRIT' : 'À L’ORAL', x + 0.42, y, 1.25, 0.4, { size: 11.5, bold: true, color: c, cs: 1 });
  };

  // ------------------------------------------------------------ l'exemple : texte suivi, étiquettes posées au-dessus des bribes
  k.flow = (s, paras, X0, Y0, xmax, size, draw) => {
    const lineH = (size / 72) * 1.3; const boxH = (size / 72) * 1.22; const pad = 0.05;
    const labS = 11; const labH = 0.27; const labGap = 0.07; const sp = measure(' ', size);
    let y = Y0;
    paras.forEach((para) => {
      const toks = []; let space = false;
      if (para.speaker) { toks.push({ t: `${para.speaker}:`, n: 0, sp: true, space: false }); space = true; }
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
        const w = measure(tk.t, size, !!tk.n || !!tk.sp) + (tk.n ? 2 * pad : 0);
        const line = lines[lines.length - 1];
        const lead = line.length && tk.space ? sp + 0.02 : 0;
        // une ponctuation collée au mot précédent ne passe jamais seule à la ligne
        const glued = !tk.space && /^[.,!?;:…”»)]+$/.test(tk.t);
        if (line.length && !glued && x + lead + w > xmax) { lines.push([]); x = X0; } else x += lead;
        lines[lines.length - 1].push({ ...tk, x, w });
        x += w;
      });
      lines.forEach((ln) => {
        if (!ln.length) return;
        const hasFrag = ln.some((tk) => tk.n);
        // la dernière phrase est centrée, comme dans le modèle
        if (para.center) { const end = ln[ln.length - 1].x + ln[ln.length - 1].w; const dx = (xmax - end) / 2; ln.forEach((tk) => { tk.x += dx; }); }
        const ty = y + (hasFrag ? labH + labGap : 0);
        if (draw) {
          let run = null;
          const flush = () => { if (run) k.txt(s, run.t, run.x, ty, run.w + 0.2, lineH, { size, wrap: false }); run = null; };
          ln.forEach((tk) => {
            if (tk.sp) { flush(); k.txt(s, tk.t, tk.x, ty, tk.w + 0.2, lineH, { size, bold: true, color: GREY, wrap: false }); return; }
            if (tk.n) {
              flush();
              k.box(s, tk.x, ty + (lineH - boxH) / 2, tk.w, boxH, { fill: LAB_BG, r: 0.05 });
              k.txt(s, tk.t, tk.x, ty, tk.w, lineH, { size, bold: true, align: 'center', wrap: false });
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
            k.box(s, lx, y, lw, labH, { fill: LAB, r: 0.04 });
            k.txt(s, label, lx, y, lw, labH, { size: labS, color: 'FFFFFF', align: 'center', wrap: false });
            last = lx + lw;
          });
        }
        y = ty + lineH + 0.16;
      });
      y += 0.22;
    });
    return y - Y0 - 0.38;
  };
  k.fitFlow = (paras, X0, Y0, xmax, maxH, start) => {
    let size = start;
    while (size > 14 && k.flow(null, paras, X0, Y0, xmax, size, false) > maxH) size -= 0.5;
    return size;
  };
  // les phrases 1 à n-1 forment un paragraphe ; la dernière (la chute) est centrée dessous
  // dialogues et SMS (c.lines) : une réplique par ligne, le nom de la personne qui parle en gris
  k.paragraphs = (c) => (c.lines
    ? c.ex.map((t) => { const m = t.match(/^((?:[A-Z][a-zé]+ ?){1,2}): (.*)$/); return m ? { text: m[2], speaker: m[1], crit: c.crit } : { text: t, crit: c.crit }; })
    : [{ text: c.ex.slice(0, -1).join(' '), crit: c.crit }, { text: c.ex[c.ex.length - 1], crit: c.crit, center: true }]);

  // ------------------------------------------------------------ les trois diapos d'un contexte
  // o : { lv, label (texte du bandeau), num (n° affiché), color (couleur du titre), start (taille de départ du texte) }
  k.context = (g, c, o) => {
    const n = c.crit.length; const said = c.mode === 'W' ? 'schrijven' : 'zeggen';
    // 1. la consigne
    {
      const s = k.page(g, 'Gebruik deze afbeelding als inspiratie');
      k.banner(s, o.lv, o.label);
      k.txt(s, [{ text: `${o.num} · ${c.t}`, options: { bold: true, color: LV[o.lv].text } }, { text: `   ${c.fr}`, options: { italic: true, color: GREY } },
        ...(c.ref ? [{ text: `   ·   syllabus ${c.ref}`, options: { color: '9AA3B2', fontSize: 12 } }] : [])], 1.7, 1.12, 11.2, 0.4, { size: 15, align: 'center' });
      k.photo(s, c.img, 1.85, 1.75, 4.75, { small: true });
      k.modeTag(s, c.mode, 1.85, 5.0);
      k.txt(s, c.sit, 3.75, 4.97, 2.9, 0.8, { size: 11.5, italic: true, color: GREY, valign: 'top' });
      const step = n <= 3 ? 0.95 : n === 4 ? 0.8 : 0.66; const y0 = 1.72 + (3.3 - step * n) / 2;
      c.crit.forEach((kk, j) => {
        const y = y0 + j * step;
        k.zinChip(s, j + 1, 6.95, y + 0.06);
        d.t(s, kk.t, 8.1, y, 4.8, 0.56, { size: n <= 3 ? 16 : 14.5, color: INK, valign: 'middle' });
      });
      k.box(s, 3.55, 5.95, 7.5, 0.9, { fill: 'EAF5EC', line: ZIN, lw: 1.25, r: 0.16 });
      d.icon(s, 'FaUserFriends', ZIN, 3.85, 6.19, 0.42);
      k.txt(s, [{ text: c.mode === 'W' ? 'Lees je tekst voor aan je partner.' : 'Vertel je verhaal aan je partner.', options: { breakLine: true } }, { text: 'Wat denkt hij/zij daarvan?' }], 4.5, 5.95, 6.4, 0.9, { size: 18, bold: true, color: OK, align: 'center' });
    }
    // 2. la grande illustration
    {
      const s = k.page(g, c.t, { size: 24, notes: 'GRANDE IMAGE — laissez les apprenant·es observer et nommer ce qu’ils et elles voient avant d’écrire : Waar zijn we? Wie zie je? Wat gebeurt er?' });
      k.banner(s, o.lv, o.label);
      const w = 8.85;
      k.photo(s, c.img, 1.7 + (11.2 - w) / 2, 1.35, w, { b: 0.12, blur: 14, off: 5 });
    }
    // 3. l'exemple
    {
      const s = k.page(g, `Hier is een voorbeeld van wat je had kunnen denken en ${said}…`, { left: true, notes: `EXEMPLE — chaque étiquette verte renvoie à une consigne (Zin 1 à Zin ${n}). Faites retrouver, pour chaque bribe, la consigne à laquelle elle répond.` });
      k.banner(s, o.lv, o.label);
      k.photo(s, c.img, 11.05, 0.32, 1.75, { small: true, b: 0.05, blur: 6, off: 2 });
      const paras = k.paragraphs(c);
      const size = k.fitFlow(paras, 1.85, 1.75, 12.8, 6.95 - 1.75, o.start || 22);
      const hgt = k.flow(null, paras, 1.85, 1.75, 12.8, size, false);
      k.flow(s, paras, 1.85, 1.75 + Math.max(0, (6.95 - 1.75 - hgt) / 2.5), 12.8, size, true);
    }
  };
  return k;
}

module.exports = { vijfKit, measure, parseEx, LV, IMG };
