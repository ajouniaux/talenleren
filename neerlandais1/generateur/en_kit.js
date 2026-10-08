// Shared helpers for the English grammar decks (Past simple, Present perfect): colours, labels,
// sentence strips with labelled boxes, timelines, rule boxes. The decks live in ../../anglais_grammaire.
const { BORDER, plain, HEX, PURPLE } = require('./lib');

// past simple framboise · present perfect bleu · NOW rouge · marqueurs de temps orange
// auxiliaires (did, have, has) bleu nuit · négation rouge · mot interrogatif vert
const C = { PS: 'accent4', PP: 'accent2', NOW: 'accent6', MK: 'accent1', AUX: 'tx2', NEG: 'accent6', QW: 'accent3', OK: 'accent3', KO: 'accent6' };
const INK = '17375E';
const hexOf = (c) => (c === 'purple' ? PURPLE : c === 'tx2' ? INK : HEX[c] || c);
const TINT = { accent1: 'FDF1E6', accent2: 'EAF2FB', accent3: 'E8F4EC', accent4: 'FBEAF2', accent5: 'F1F3F6', accent6: 'FBEDEB', tx2: 'E6EBF2', purple: 'F1ECF7' };

const L = {
  open: 'Opening', close: 'Closing', correction: '✓ CORRECTION', missionTag: 'MISSION', missionTitle: 'Today’s mission',
  exTag: 'YOUR TURN!', exTitle: 'Exercises', exSection: 'YOUR TURN! — Exercises', ticketTag: 'EXIT TICKET', ticketTitle: 'Exit ticket',
  selfEval: 'SELF-CHECK', roleTag: 'ROLE PLAY', bank: 'USEFUL PHRASES',
  coverFoot: 'English · A2–B1 · Grammar in pictures · A. Jouniaux · IRAM',
};
const metaBase = { company: 'IRAM — English', L, outDir: '../../anglais_grammaire/powerpoints' };

function kit(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const bw = (t, size) => wOf(t, size) * 1.12 + 0.08;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const rich = (s, segs, x, y, w, h, o = {}) => s.addText(segs.map(([text, so]) => ({ text, options: so })), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || 'tx1', align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true,
  });
  // phrase en couleurs : <verbe> (couleur vc) · {marqueur} orange · [auxiliaire] bleu nuit · ~négation~ rouge
  const pc = (str, size, vc = C.PS, o = {}) => str.split(/(<[^>]+>|\{[^}]+\}|\[[^\]]+\]|~[^~]+~)/).filter(Boolean).map((t) => {
    const it = o.roman ? false : true;
    if (t.startsWith('<')) return [t.slice(1, -1), { bold: true, italic: it, color: hexOf(vc), fontSize: size }];
    if (t.startsWith('{')) return [t.slice(1, -1), { bold: true, italic: it, color: hexOf(C.MK), fontSize: size }];
    if (t.startsWith('[')) return [t.slice(1, -1), { bold: true, italic: it, color: hexOf(C.AUX), fontSize: size }];
    if (t.startsWith('~')) return [t.slice(1, -1), { bold: true, italic: it, color: hexOf(C.NEG), fontSize: size }];
    return [t, { italic: it, fontSize: size }];
  });
  // bandes de mots avec étiquettes sous les cases ; -ed et n’t sont collés au mot précédent ; o.blank : cases vides en pointillés
  const ST = {
    n: { fill: 'FFFFFF', line: BORDER, lw: 1.25, color: 'tx1', bold: false, lc: 'accent5' },
    b: { fill: 'FBEDEB', line: 'accent6', lw: 1.75, color: 'accent6', bold: true, lc: 'accent6' },
    v2: { fill: C.PS, line: null, color: 'bg1', bold: true, lc: C.PS },
    v3: { fill: C.PP, line: null, color: 'bg1', bold: true, lc: C.PP },
    ed: { fill: C.MK, line: null, color: 'bg1', bold: true, lc: C.MK },
    a: { fill: C.AUX, line: null, color: 'bg1', bold: true, lc: C.AUX },
    ng: { fill: C.NEG, line: null, color: 'bg1', bold: true, lc: C.NEG },
    t: { fill: 'FDF1E6', line: C.MK, lw: 1.5, color: C.MK, bold: true, lc: C.MK },
    q: { fill: C.QW, line: null, color: 'bg1', bold: true, lc: C.QW },
    x: { fill: 'FFFFFF', line: 'accent5', lw: 1.25, dash: 'dash', color: 'accent5', bold: false, lc: 'accent5' },
    e: { fill: null, line: null, color: 'tx1', bold: true, lc: 'accent5' },
  };
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.66; const gap = o.gap ?? 0.08; const ls = o.ls || 10.5;
    let cx = x; const pos = [];
    parts.forEach(([t, ty, lab]) => {
      const st = ST[ty || 'n'];
      const tight = ty === 'ed' || (ty === 'ng' && /^n[’']t/.test(t));
      const w = ty === 'e' ? 0.16 + plain(t).length * size * 0.006 : wOf(t, size) * (st.bold ? 1.12 : 1) + (st.bold ? 0.08 : 0) - (tight ? 0.12 : 0);
      if (tight && pos.length) cx -= gap - 0.02;
      if (o.blank) {
        d.rect(s, cx, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, dash: 'dash', radius: 0.1 });
        pos.push([cx, w, ty]); cx += w + gap; return;
      }
      if (st.fill || st.line) d.rect(s, cx, y, w, h, { fill: st.fill || 'FFFFFF', line: st.line, lw: st.lw, dash: st.dash, radius: 0.1 });
      d.t(s, ty === 'x' ? `{{${t}}}` : (o.italic === false ? t : `//${t}//`), cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      if (lab) d.t(s, lab, cx - 0.35, y + h + 0.04, w + 0.7, 0.3, { size: ls, bold: true, color: st.lc, align: 'center', valign: 'top' });
      pos.push([cx, w, ty]);
      cx += w + gap;
    });
    strip.pos = pos;
    return cx - gap;
  };
  // ligne du temps : zones [[x1, x2, couleur, étiquette]], nu = x du maintenant
  const tl = (s, x1, x2, y, o = {}) => {
    (o.zones || []).forEach(([a, b, c, lab]) => {
      d.rect(s, a, y - 0.1, b - a, 0.2, { fill: c, line: null, radius: 0 });
      if (lab) d.t(s, lab, a, y + 0.16, b - a, 0.32, { size: o.ls || 12, bold: true, italic: true, color: c, align: 'center', valign: 'middle' });
    });
    d.line(s, x1, y, x2, y, { color: INK, lw: o.lw || 2.5 });
    if (o.nu) {
      d.rect(s, o.nu - 0.05, y - 0.34, 0.1, 0.68, { fill: C.NOW, line: null, radius: 0 });
      if (o.nuLab !== false) d.t(s, '**NOW**', o.nu - 0.6, y - 0.76, 1.2, 0.38, { size: 15, color: C.NOW, align: 'center', valign: 'middle' });
    }
  };
  // encadré de règle
  const rule = (s, x, y, w, h, title, lines, c = 'tx2', o = {}) => {
    d.rect(s, x, y, w, h, { fill: TINT[c] || 'FFFFFF', line: c, lw: 1.5, radius: 0.12 });
    d.t(s, `**${title}**`, x + 0.2, y + 0.08, w - 0.4, 0.42, { size: o.hs || 15, color: c, valign: 'middle' });
    d.t(s, lines, x + 0.2, y + 0.52, w - 0.4, h - 0.6, { size: o.size || 14, gap: o.gap ?? 4, valign: o.valign || 'top', align: o.align });
  };
  // pastille de couleur
  const chip = (s, t, c, x, y, o = {}) => {
    const size = o.size || 16; const h = o.h || 0.48; const w = o.w || bw(t, size);
    d.rect(s, x, y, w, h, { fill: o.fill === false ? TINT[c] || 'FFFFFF' : c, line: o.fill === false ? c : null, lw: 1.5, radius: 0.12 });
    d.t(s, o.roman ? `**${t}**` : `//**${t}**//`, x, y, w, h, { size, color: o.fill === false ? c : 'bg1', align: 'center', valign: 'middle' });
    return x + w;
  };
  // carte « base ↓ forme »
  const pcard = (s, x, y, w, h, base, res, c, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1, shadow: true });
    d.t(s, `//**${base}**// ↓`, x + 0.05, y + 0.04, w - 0.1, h * 0.4, { size: o.bs || 14, color: 'tx2', align: 'center', valign: 'middle' });
    chip(s, res, c, x + 0.1, y + h * 0.46, { size: o.rs || 15, h: h * 0.44, w: w - 0.2 });
    if (o.fr) d.t(s, o.fr, x, y + h + 0.02, w, 0.24, { size: 10.5, italic: true, color: 'accent5', align: 'center' });
  };
  // le piège pour francophones
  const trap = (s, x, y, w, h, lines, o = {}) => {
    d.rect(s, x, y, w, h, { fill: TINT[C.KO], line: C.KO, lw: 1.5, radius: 0.12 });
    d.flag(s, 'fr', x + 0.2, y + 0.16, 0.42);
    d.t(s, '≠', x + 0.66, y + 0.08, 0.3, 0.42, { size: 18, bold: true, color: C.KO, align: 'center', valign: 'middle' });
    d.flag(s, 'gb', x + 0.98, y + 0.16, 0.42);
    d.t(s, `**${o.title || 'Piège pour francophones'}**`, x + 1.55, y + 0.08, w - 1.7, 0.42, { size: 15, color: C.KO, valign: 'middle' });
    d.t(s, lines, x + 0.2, y + 0.55, w - 0.4, h - 0.62, { size: o.size || 14.5, gap: o.gap ?? 4, valign: 'top' });
  };
  return { wOf, bw, band, rich, pc, strip, tl, rule, chip, pcard, trap, ST };
}

module.exports = { C, INK, hexOf, TINT, L, metaBase, kit };
