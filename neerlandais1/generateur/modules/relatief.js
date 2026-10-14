// Die, dat, wat, waar… — Les pronoms relatifs (complément A2–B1, après M22 et M23)
// La mise en page épurée du complément Afleiding (sur-titre, titre centré, formule, tableau sobre, deux encadrés),
// avec un schéma par diapo : une flèche courbe relie toujours le relatif à son nom.
// Code couleur du cours : die bleu nuit · dat orange (comme de / het) · wat vert · wie framboise · waar- violet · verbe rouge.
const { measure } = require('../vijf_kit');

const meta = {
  n: 'R', slug: 'Relatief', title: 'Die, dat, wat, waar… — Les pronoms relatifs', short: 'Les pronoms relatifs',
  template: 'pronoms_relatifs.md', file: 'Relatief_Les_pronoms_relatifs.pptx',
  docTitle: 'Die, dat, wat, waar… — Les pronoms relatifs : relier une information à un nom',
  foot: 'Néerlandais · A2–B1 · Les pronoms relatifs',
};

// ------------------------------------------------------------------ la palette
const NAVY = '17375E';   // la structure : titres, filets
const INK = '1B2333';    // le texte
const MUTED = '6B7686';  // les commentaires
const C = { DIE: '17375E', DAT: 'D9700F', WAT: '2E7D4F', WIE: 'B4236A', WAAR: '6E4A9E', V: 'B83227', OK: '2E7D4F', MU: '8A94A3', BL: '2A6FB0' };
const TINT = { DIE: 'E6ECF3', DAT: 'FDF1E6', WAT: 'E8F4EC', WIE: 'FBEAF1', WAAR: 'F1ECF7', V: 'FBEDEB', BL: 'EAF2FB' };
const OK = '2E7D4F'; const OK_SOFT = 'E8F4EC'; const KO = 'B83227'; const KO_SOFT = 'FBEDEB';
const PILL = 'EEF2F7';   // la pastille de la formule
const SOFT = 'F4F6F9';   // les fonds discrets
const LINE = 'DDE3EA';   // les filets
const ERR = 'B5473C';    // seulement pour barrer une forme fautive
const FONT = 'Calibri';
const TAGS = /<(?:DIE|DAT|WAT|WIE|WAAR|V|OK|MU|BL)>|<\/>/;

function build(d) {
  const P = d.pres;
  const footer = (c) => ({ text: { text: meta.foot, options: { x: 0.6, y: 7.05, w: 9, h: 0.3, fontSize: 10, color: c, margin: 0, valign: 'middle' } } });
  const num = (c) => ({ x: 12.13, y: 7.05, w: 0.6, h: 0.3, fontSize: 10, color: c, align: 'right' });
  P.defineSlideMaster({ title: 'RL_PAGE', background: { color: 'FFFFFF' }, slideNumber: num(MUTED), objects: [footer(MUTED), { placeholder: { options: { name: 'title', type: 'title', x: 1.5, y: 0.6, w: 10.33, h: 0.8, fontSize: 30, bold: true, color: NAVY, align: 'center', valign: 'middle', margin: 0 }, text: '' } }] });
  P.defineSlideMaster({ title: 'RL_DARK', background: { color: NAVY }, slideNumber: num('C9D4E2'), objects: [footer('C9D4E2'), { placeholder: { options: { name: 'title', type: 'title', x: 1.5, y: 0.6, w: 10.33, h: 0.8, fontSize: 30, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', margin: 0 }, text: '' } }] });

  // ---------------------------------------------------------------- texte enrichi
  // **gras** · //italique// · __souligné__ · ~~forme fautive~~ (barrée) · [[réponse]] (pointillés au sujet)
  // <DIE> <DAT> <WAT> <WIE> <WAAR> <V> <OK> <MU> <BL> … </> : la couleur du relatif, du verbe…
  const runs = (str, o = {}, mode = 'a') => {
    const out = []; let b = false; let it = false; let u = false; let e = false; let ans = false; let cat = null;
    String(str).split(/(\*\*|\/\/|__|~~|\[\[|\]\]|<(?:DIE|DAT|WAT|WIE|WAAR|V|OK|MU|BL)>|<\/>)/).forEach((tk) => {
      const m = /^<(\w+)>$/.exec(tk);
      if (m) cat = m[1]; else if (tk === '</>') cat = null;
      else if (tk === '**') b = !b; else if (tk === '//') it = !it; else if (tk === '__') u = !u;
      else if (tk === '~~') e = !e; else if (tk === '[[') ans = true; else if (tk === ']]') ans = false;
      else if (tk) {
        if (ans && mode === 'q') { out.push({ text: '·'.repeat(Math.max(8, Math.round(tk.length * 1.4))), options: { color: 'B8C2CF', fontSize: o.size } }); return; }
        const color = e ? ERR : cat ? C[cat] : ans ? (o.ans || INK) : (o.color || INK);
        const bold = b || (ans && mode === 'a' && !o.ansPlain) || !!o.bold || (!!cat && !o.lightCat && cat !== 'MU');
        out.push({ text: tk, options: { bold, italic: it || !!o.italic, color, strike: e ? 'sngStrike' : undefined, underline: u ? { style: 'sng', color } : undefined, fontSize: o.size } });
      }
    });
    return out;
  };
  const para = (lines, o, mode) => {
    const L = Array.isArray(lines) ? lines : [lines]; const out = [];
    L.forEach((l, i) => { const r = runs(l, o, mode); if (i < L.length - 1 && r.length) r[r.length - 1].options.breakLine = true; out.push(...r); });
    return out;
  };
  const txt = (s, str, x, y, w, h, o = {}) => s.addText(para(str, o, o.mode), {
    x, y, w, h, fontSize: o.size || 16, fontFace: FONT, color: o.color || INK, align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true,
    charSpacing: o.cs, paraSpaceAfter: o.gap, lineSpacingMultiple: o.ls,
  });
  const plainOf = (str) => String(str).replace(/\*\*|\/\/|__|~~|\[\[|\]\]/g, '').replace(new RegExp(TAGS.source, 'g'), '');
  // largeur réelle d'un texte enrichi (gras compris)
  const wOf = (str, size) => runs(str, { size }).reduce((t, r) => t + measure(r.text, size, r.options.bold), 0);
  const box = (s, x, y, w, h, o = {}) => s.addShape(d.S.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: o.r ?? 0.1, fill: o.fill === null ? { color: 'FFFFFF', transparency: 100 } : { color: o.fill || 'FFFFFF' },
    line: o.line ? { color: o.line, width: o.lw || 1, dashType: o.dash } : { color: 'FFFFFF', width: 0, transparency: 100 },
    shadow: o.shadow ? { type: 'outer', color: '1B2430', opacity: 0.1, blur: 6, offset: 2, angle: 90 } : undefined,
  });
  const circle = (s, cx, cy, r, fill, line) => s.addShape(d.S.OVAL, { x: cx - r, y: cy - r, w: 2 * r, h: 2 * r, fill: { color: fill }, line: line ? { color: line, width: 1.25 } : { color: 'FFFFFF', width: 0, transparency: 100 } });
  const line = (s, x1, y1, x2, y2, c = LINE, lw = 1.25, arrow = false, dash) => d.line(s, x1, y1, x2, y2, { color: c, lw, arrow: arrow ? 'triangle' : false, dash });
  const badge = (s, cx, cy, n, c, r = 0.17) => { circle(s, cx, cy, r, c); txt(s, `**${n}**`, cx - r, cy - r, 2 * r, 2 * r, { size: r > 0.2 ? 15 : 11, color: 'FFFFFF', align: 'center' }); };
  const pill = (s, str, cx, cy, c, o = {}) => {
    const size = o.size || 18; const w = o.w || wOf(str, size) + 0.5; const h = o.h || 0.5;
    box(s, cx - w / 2, cy - h / 2, w, h, { fill: o.fill || c, line: o.line, lw: o.lw, r: h / 2 });
    txt(s, str, cx - w / 2, cy - h / 2, w, h, { size, bold: true, color: o.color || 'FFFFFF', align: 'center' });
    return w;
  };

  // ---------------------------------------------------------------- les schémas : phrase, flèche courbe, accolade, pince
  // une phrase posée groupe par groupe ; renvoie la position de chaque groupe { x, w, cx, y, h }
  // un nombre = une place vide de cette largeur · o.dry : calculer sans dessiner
  const phrase = (s, parts, y, o = {}) => {
    const size = o.size || 24; const h = o.h || 0.6; const sp = measure(' ', size) * (o.sp ?? 1.5);
    const ws = parts.map((p) => (typeof p === 'number' ? p : wOf(p, size)));
    const tw = ws.reduce((a, b) => a + b, 0) + sp * (parts.length - 1);
    let x = o.x ?? ((o.cx ?? 6.665) - tw / 2);
    return parts.map((p, i) => {
      const r = { x, w: ws[i], cx: x + ws[i] / 2, y, h, r: x + ws[i] };
      if (typeof p === 'string' && p && !o.dry) txt(s, o.italic === false ? p : `//${p}//`, x - 0.08, y, ws[i] + 0.16, h, { size, align: 'center', color: o.color || INK });
      x += ws[i] + sp; return r;
    });
  };
  // le nom (l'antécédent) souligné dans la couleur de son relatif
  const under = (s, g, c, lw = 2.25) => line(s, g.x, g.y + g.h - 0.04, g.r, g.y + g.h - 0.04, c, lw);
  // la flèche courbe du relatif vers son nom (au-dessus de la phrase)
  const link = (s, from, to, c, o = {}) => d.curve(s, from.cx, from.y + (o.dy ?? 0.1), to.cx + (o.dx ?? 0), from.y + (o.dy ?? 0.1), { color: c, lw: o.lw || 2, h: o.h || 0.32, dir: -1 });
  // un arc sans flèche (la pince)
  const arch = (s, x1, x2, y, c, h = 0.3, lw = 2.5) => s.addShape(d.S.ARC, { x: Math.min(x1, x2), y: y - h, w: Math.abs(x2 - x1), h: 2 * h, angleRange: [180, 360], line: { color: c, width: lw }, fill: { color: 'FFFFFF', transparency: 100 } });
  // une accolade simple (trait et deux petites pattes) ; up : les pattes montent
  const bracket = (s, x1, x2, y, c, up = true, lw = 1.75) => { line(s, x1, y, x2, y, c, lw); line(s, x1, y, x1, y + (up ? -0.12 : 0.12), c, lw); line(s, x2, y, x2, y + (up ? -0.12 : 0.12), c, lw); };

  // ---------------------------------------------------------------- le cadre d'une diapo
  const KICK = (k) => k.replace(/\b(DIE|DAT|WAT|WIE|WAAR)\b/g, (w) => `<${w}>${w}</>`);
  const page = (g, kicker, title, o = {}) => {
    const s = d.slide(o.dark ? 'RL_DARK' : 'RL_PAGE');
    s.addText(title, { placeholder: 'title', ...(plainOf(title).length > 44 ? { fontSize: 26 } : {}) });
    if (kicker) txt(s, o.dark ? kicker : KICK(kicker), 1.5, 0.28, 10.33, 0.3, { size: 11, bold: true, color: o.dark ? 'F2B36B' : (o.kc || NAVY), align: 'center', cs: 3 });
    if (o.stars) txt(s, o.stars, 11.4, 0.28, 1.33, 0.3, { size: 13, color: o.dark ? 'C9D4E2' : C.DAT, align: 'right' });
    s.addNotes(d.notesFor(g, !!o.correction, o.notes));
    return s;
  };
  // la formule, centrée dans une pastille claire
  const formula = (s, str, y = 1.58, size = 21) => {
    const w = wOf(str, size) + 0.9;
    box(s, 6.665 - w / 2, y, w, 0.62, { fill: PILL, r: 0.31 });
    txt(s, str, 6.665 - w / 2, y, w, 0.62, { size, bold: true, color: NAVY, align: 'center' });
  };
  // un encadré discret : ✓ la règle · ! attention · + en plus
  const note = (s, kind, title, lines, x, y, w, h = 1.0) => {
    const c = kind === '!' ? KO : kind === '+' ? C.BL : OK;
    box(s, x, y, w, h, { fill: kind === '!' ? KO_SOFT : kind === '+' ? TINT.BL : OK_SOFT, r: 0.1 });
    circle(s, x + 0.36, y + 0.36, 0.17, c);
    txt(s, kind === '!' ? '!' : kind === '+' ? '+' : '✓', x + 0.19, y + 0.19, 0.34, 0.34, { size: 12, bold: true, color: 'FFFFFF', align: 'center' });
    txt(s, `**${title}**`, x + 0.68, y + 0.12, w - 0.85, 0.32, { size: 13, color: c });
    txt(s, lines, x + 0.68, y + 0.44, w - 0.85, h - 0.52, { size: 14, valign: 'top', gap: 2 });
  };
  const notes2 = (s, a, b, y = 5.72, h = 1.0) => { note(s, ...a, 0.9, y, 5.62, h); note(s, ...b, 6.82, y, 5.62, h); };
  const note1 = (s, a, y = 5.72, h = 1.0, w = 9.2) => note(s, ...a, 6.665 - w / 2, y, w, h);
  const takeaway = (s, str, y = 6.35) => txt(s, str, 0.9, y, 11.53, 0.45, { size: 16, italic: true, color: NAVY, align: 'center' });
  const label = (s, str, x, y, w, c = NAVY, al = 'center', size = 10.5) => txt(s, `**${str}**`, x, y, w, 0.28, { size, color: c, align: al, cs: 1.5 });

  // ---------------------------------------------------------------- le tableau sobre
  // rows[0] = en-têtes (petites capitales) ; o : { x, y, w, colW, align, size, rowH, mode, hc (couleurs des en-têtes), cats (couleurs des colonnes), ans, ansPlain }
  const table = (s, rows, o = {}) => {
    const w = o.w ?? 11.53; const x = o.x ?? (6.665 - w / 2); const y = o.y ?? 2.45; const size = o.size || 16;
    const colW = o.colW || rows[0].map(() => w / rows[0].length);
    const al = (ci) => (o.align ? o.align[ci] : 'center');
    const none = { type: 'none' };
    const data = rows.map((r, ri) => r.map((c, ci) => {
      const head = ri === 0 && o.head !== false;
      if (head && c === '' && ci > 0) return null;
      let span = 1; if (head) while (r[ci + span] === '') span += 1;
      const bottom = head ? { type: 'solid', pt: 1.25, color: NAVY } : ri === rows.length - 1 ? none : { type: 'solid', pt: 0.75, color: LINE };
      const cc = o.cats && o.cats[ci] ? C[o.cats[ci]] : null;
      const hc = (o.hc && o.hc[ci] && C[o.hc[ci]]) || cc;
      return {
        text: head ? runs(String(c).toUpperCase(), { size: 11.5, bold: true, color: hc || NAVY }) : para(c, { size, color: cc || INK, ans: o.ans, ansPlain: o.ansPlain, bold: (o.first && ci === 0) || (cc && o.boldCats !== false) ? true : undefined }, o.mode),
        options: { fill: { color: 'FFFFFF' }, align: span > 1 ? 'center' : al(ci), valign: 'middle', border: [none, none, bottom, none], charSpacing: head ? 2 : undefined, ...(span > 1 ? { colspan: span } : {}) },
      };
    }).filter(Boolean));
    s.addTable(data, { x, y, w, colW, rowH: o.rowH || 0.5, fontFace: FONT, fontSize: size, margin: [0.03, 0.1, 0.03, 0.1], autoPage: false });
  };

  // ================================================================ 1 couverture
  d.section(d.L.open);
  {
    const s = d.slide('N1_COVER');
    s.addText('Die, dat,\nwat, waar…', { placeholder: 'title' });
    s.addText([{ text: 'Les pronoms relatifs : relier une information à un nom', options: { italic: true, breakLine: true } }, { text: ' ', options: { breakLine: true, fontSize: 10 } }, { text: 'die · dat · wat · wie · waar + préposition', options: { bold: true, color: 'FFFFFF' } }], { placeholder: 'body' });
    box(s, 0.6, 0.7, 2.75, 0.42, { fill: C.DAT, r: 0.06 });
    txt(s, '**COMPLÉMENT · A2–B1**', 0.6, 0.7, 2.75, 0.42, { size: 13, color: 'FFFFFF', align: 'center', cs: 1 });
    s.addNotes(d.notesFor(1));
    box(s, 7.1, 1.3, 5.6, 4.5, { fill: 'FFFFFF', r: 0.14 });
    [['de collega', 'die', 'naast me zit', 'DIE', 'MOT DE → DIE'], ['het rapport', 'dat', 'ik schrijf', 'DAT', 'MOT HET → DAT'], ['de pen', 'waarmee', 'ik teken', 'WAAR', 'UNE CHOSE + MET → WAARMEE']].forEach(([n, r, rest, k, lab], i) => {
      const y = 1.95 + i * 1.3;
      const [a, b] = phrase(s, [`<${k}>${n}</>`, `<${k}>${r}</>`, rest], y, { size: 23, x: 7.55 });
      under(s, a, C[k]); link(s, b, a, C[k], { h: 0.3 });
      label(s, lab, 7.55, y + 0.62, 4.9, C[k], 'left', 10);
    });
  }

  // ================================================================ 2 mission
  d.section('Découvrir');
  {
    const s = page(2, 'MISSIE', 'Missie van vandaag');
    [['FaCodeBranch', 'Choisir', 'le bon relatif : //die, dat, wat, wie, waar-//', C.DIE, TINT.DIE], ['FaLink', 'Construire', 'la relative : le verbe à la fin, la bonne place, les virgules', C.V, TINT.V], ['FaLanguage', 'Traduire', '//qui, que, dont, où, ce qui, ce que//… sans calquer le français', C.WAAR, TINT.WAAR]].forEach(([ic, h, t, c, tint], i) => {
      const x = 1.45 + i * 3.65; const cx = x + 1.6;
      circle(s, cx, 2.85, 0.56, tint);
      d.icon(s, ic, c, cx - 0.26, 2.59, 0.52);
      txt(s, `**${h}**`, x, 3.65, 3.2, 0.5, { size: 22, color: c, align: 'center' });
      txt(s, t, x + 0.2, 4.15, 2.8, 0.9, { size: 16, color: MUTED, align: 'center', valign: 'top' });
    });
    takeaway(s, 'Une relative = une information en plus sur un nom, dans la même phrase.', 5.75);
  }

  // ================================================================ 3 échauffement
  {
    const s = page(3, 'ÉCHAUFFEMENT', 'Deux phrases, une phrase');
    const EX = [
      { src: ['Ik heb een collega.', '~~De collega~~ <V>spreekt</> vijf talen.'], res: ['Ik heb', '<DIE>een collega</>', '<DIE>die</>', 'vijf talen', '<V>spreekt.</>'], k: 'DIE', nums: ['1'] },
      { src: ['Ik lees het rapport.', 'Sofie <V>heeft</> ~~het rapport~~ <V>geschreven</>.'], res: ['Ik lees', '<DAT>het rapport</>', '<DAT>dat</>', 'Sofie', '<V>heeft geschreven.</>'], k: 'DAT', nums: ['1', '2'] },
    ];
    EX.forEach((e, i) => {
      const y = 1.65 + i * 2.2;
      // les deux phrases de départ, dans deux étiquettes grises reliées par « + »
      const w1 = wOf(`//${e.src[0]}//`, 19) + 0.5; const w2 = wOf(`//${e.src[1]}//`, 19) + 0.5; const tw = w1 + w2 + 0.7; const x0 = 6.665 - tw / 2;
      box(s, x0, y, w1, 0.52, { fill: SOFT, r: 0.26 }); txt(s, `//${e.src[0]}//`, x0, y, w1, 0.52, { size: 19, align: 'center', color: MUTED });
      txt(s, '**+**', x0 + w1, y, 0.7, 0.52, { size: 20, color: MUTED, align: 'center' });
      box(s, x0 + w1 + 0.7, y, w2, 0.52, { fill: SOFT, r: 0.26 }); txt(s, `//${e.src[1]}//`, x0 + w1 + 0.7, y, w2, 0.52, { size: 19, align: 'center', color: MUTED });
      line(s, 6.665, y + 0.6, 6.665, y + 0.88, MUTED, 1.5, true);
      // la phrase fusionnée
      const G = phrase(s, e.res, y + 1.02, { size: 25 });
      under(s, G[1], C[e.k]); link(s, G[2], G[1], C[e.k], { h: 0.26 });
      badge(s, G[2].cx - (e.nums.length - 1) * 0.2, G[2].y + 0.85, e.nums[0], C[e.k]);
      if (e.nums[1]) badge(s, G[2].cx + 0.2, G[2].y + 0.85, e.nums[1], C[e.k]);
      badge(s, G[4].cx, G[4].y + 0.85, '3', C.V);
    });
    [['1', 'le nom répété → //die / dat//', NAVY], ['2', 'le relatif en tête de la relative', NAVY], ['3', 'le verbe à la fin', C.V]].forEach(([n, t, c], i) => {
      const x = 1.4 + i * 3.75;
      badge(s, x, 6.4, n, c, 0.2); txt(s, t, x + 0.32, 6.2, 3.3, 0.4, { size: 15, color: INK });
    });
  }

  // ================================================================ 4 l'anatomie
  {
    const s = page(4, 'LE PRINCIPE', 'L’anatomie d’une relative');
    const G = phrase(s, ['Ik zoek', '<DIE>de collega</>', '<DIE>die</>', 'de sleutel', '<V>heeft.</>'], 2.05, { size: 32, h: 0.7 });
    under(s, G[1], C.DIE, 2.5); link(s, G[2], G[1], C.DIE, { h: 0.34, lw: 2.25 });
    txt(s, '//renvoie à//', G[1].cx, 1.55, G[2].cx - G[1].cx, 0.3, { size: 12, color: MUTED, align: 'center' });
    label(s, 'L’ANTÉCÉDENT', G[1].cx - 1.3, 2.85, 2.6, C.DIE);
    label(s, 'LE RELATIF', G[2].cx - 1.0, 2.85, 2.0, C.DIE);
    label(s, 'LE VERBE À LA FIN', G[4].cx - 1.3, 2.85, 2.6, C.V);
    bracket(s, G[2].x, G[4].r, 3.32, MUTED, true, 1.5);
    txt(s, '//la relative : une subordonnée, le « wagon » du M9//', G[2].x - 0.5, 3.36, G[4].r - G[2].x + 1.0, 0.32, { size: 13, color: MUTED, align: 'center' });
    formula(s, 'nom ← <DIE>relatif</> + … + <V>verbe</>', 3.95);
    notes2(s, ['✓', 'La règle', 'la relative est une subordonnée : le verbe conjugué va **à la fin**'], ['!', 'Jamais sans relatif', '~~//de collega ik zoek//~~ (anglais) → //de collega <DIE>die</> ik zoek//'], 5.05, 1.0);
  }

  // ================================================================ 5 l'aiguillage
  d.section('Die ou dat');
  {
    const s = page(5, 'DIE · DAT', 'L’aiguillage : die ou dat ?');
    const rails = [['mot //de//', 1.75, 'DIE'], ['pluriel', 2.75, 'DIE'], ['mot //het//', 4.05, 'DAT']];
    const st = { DIE: [5.15, 2.4], DAT: [5.15, 4.35] }; const r = 0.5;
    rails.forEach(([t, y, k]) => {
      box(s, 0.95, y, 2.3, 0.6, { fill: TINT[k], r: 0.3 });
      txt(s, `**${t}**`, 0.95, y, 2.3, 0.6, { size: 18, color: C[k], align: 'center' });
      const [sx, sy] = st[k]; const dx = sx - 3.3; const dy = sy - (y + 0.3); const L = Math.hypot(dx, dy);
      line(s, 3.3, y + 0.3, sx - dx / L * (r + 0.06), sy - dy / L * (r + 0.06), C[k], 3.5, true);
    });
    Object.entries(st).forEach(([k, [x, y]]) => { circle(s, x, y, r, C[k]); txt(s, `**${k.toLowerCase()}**`, x - r, y - 0.25, 2 * r, 0.5, { size: 20, color: 'FFFFFF', align: 'center' }); });
    [['de klant', 'die', 'belt', 'DIE', 1.75], ['de rapporten', 'die', 'klaar zijn', 'DIE', 2.75], ['het rapport', 'dat', 'klaar is', 'DAT', 4.05]].forEach(([n, rel, rest, k, y]) => {
      line(s, 5.75, y + 0.3, 6.35, y + 0.3, LINE, 1.25);
      const [a, b] = phrase(s, [`<${k}>${n}</>`, `<${k}>${rel}</>`, rest], y, { size: 22, x: 6.55 });
      under(s, a, C[k]); link(s, b, a, C[k], { h: 0.22, lw: 1.75 });
    });
    notes2(s, ['✓', 'La règle', 'l’article du nom décide : //de// → //<DIE>die</>// · //het// → //<DAT>dat</>// · pluriel → toujours //<DIE>die</>//'], ['!', 'Attention', '//het meisje <DAT>dat</>… · het kind <DAT>dat</>… · het kopje <DAT>dat</>…// (//-je// = //het//)'], 5.3, 1.0);
  }

  // ================================================================ 6 qui ou que ?
  {
    const s = page(6, 'PIÈGE FR ≠ NL', 'Qui ou que ? Peu importe !', { kc: KO });
    // deux portes françaises → une seule porte néerlandaise
    [['qui', 'SUJET', 1.95], ['que', 'COMPLÉMENT', 3.45]].forEach(([t, k, y]) => {
      box(s, 0.95, y, 1.7, 0.6, { fill: SOFT, line: 'C3CBD6', r: 0.08 });
      txt(s, `//**${t}**//`, 0.95, y, 1.7, 0.6, { size: 22, color: MUTED, align: 'center' });
      label(s, k, 0.75, y + 0.64, 2.1, MUTED, 'center', 9.5);
      line(s, 2.7, y + 0.3, 3.5, 2.98, MUTED, 1.5, true);
    });
    box(s, 3.55, 2.6, 1.75, 0.76, { fill: TINT.DIE, r: 0.08 });
    txt(s, '//**<DIE>die</> / <DAT>dat</>**//', 3.55, 2.6, 1.75, 0.76, { size: 21, align: 'center' });
    label(s, 'SELON LE NOM', 3.25, 3.4, 2.35, NAVY, 'center', 9.5);
    table(s, [['Français', 'Néerlandais'],
      ['le collègue **<MU>qui</>** m’aide', '//de collega <DIE>die</> me helpt//'], ['le collègue **<MU>que</>** j’aide', '//de collega <DIE>die</> ik help//'],
      ['le rapport **<MU>qui</>** est prêt', '//het rapport <DAT>dat</> klaar is//'], ['le rapport **<MU>que</>** je lis', '//het rapport <DAT>dat</> ik lees//']], { x: 5.9, w: 6.53, colW: [3.0, 3.53], y: 1.75, rowH: 0.56, size: 16.5, align: ['left', 'left'] });
    notes2(s, ['✓', 'La règle', 'le français regarde la **fonction** (//qui / que//) ; le néerlandais regarde le **nom** (//<DIE>die</> / <DAT>dat</>//)'], ['!', 'Qui fait quoi ?', '//de collega <DIE>die</> Sofie helpt// = qui aide Sofie… ou que Sofie aide : le contexte décide'], 4.9, 1.05);
  }

  // ================================================================ 7 le verbe à la fin
  d.section('La place');
  {
    const s = page(7, 'LA PLACE', 'Le verbe va à la fin');
    // le train du M9 : la locomotive (la principale) et le wagon (la relative)
    const wheels = (x, w) => [x + 0.35, x + w - 0.35].forEach((cx) => circle(s, cx, 2.62, 0.13, '9AA6B5'));
    box(s, 1.55, 1.7, 4.3, 0.82, { fill: NAVY, r: 0.12 }); box(s, 1.25, 1.95, 0.35, 0.4, { fill: NAVY, r: 0.05 });
    txt(s, '//Ik zoek **de collega**//', 1.55, 1.7, 4.3, 0.82, { size: 22, color: 'FFFFFF', align: 'center' }); wheels(1.55, 4.3);
    line(s, 5.85, 2.11, 6.25, 2.11, '9AA6B5', 3);
    box(s, 6.25, 1.7, 5.5, 0.82, { fill: TINT.DIE, line: C.DIE, lw: 1.25, r: 0.12 });
    txt(s, '//<DIE>die</> de sleutel <V>heeft</>//', 6.25, 1.7, 5.5, 0.82, { size: 22, align: 'center' }); wheels(6.25, 5.5);
    label(s, 'LA PRINCIPALE', 1.55, 1.38, 4.3, MUTED, 'center', 9.5); label(s, 'LE WAGON : LA RELATIVE', 6.25, 1.38, 5.5, MUTED, 'center', 9.5);
    table(s, [['La relative', 'À la fin'],
      ['//de collega <DIE>die</> de sleutel <V>heeft</>//', 'un verbe'], ['//de klant <DIE>die</> ik morgen <V>moet bellen</>//', 'verbe + infinitif'],
      ['//het dossier <DAT>dat</> ik gisteren <V>heb gelezen</>//', 'auxiliaire + participe'], ['//de collega <DIE>die</> altijd vroeg <V>opstaat</>//', 'le verbe séparable se recolle (M11)']], { y: 3.0, w: 10.5, colW: [6.0, 4.5], rowH: 0.48, size: 16.5, align: ['left', 'left'] });
    notes2(s, ['✓', 'La règle', '**tous** les verbes au bout de la relative : //<V>moet bellen</>, <V>heb gelezen</>//'], ['+', 'Deux ordres', '//<V>heb gelezen</>// = //<V>gelezen heb</>// : les deux sont corrects'], 5.6, 0.95);
  }

  // ================================================================ 8 au milieu : verbe, verbe
  {
    const s = page(8, 'LA PLACE', 'La relative au milieu : verbe, verbe');
    // le sandwich : la principale s'ouvre, la relative s'y glisse
    const size = 25; const A = '//De collega//'; const B = '//<DIE>die</> naast me <V>zit</>,//'; const Cc = '//<V>spreekt</> vijf talen.//';
    const wa = wOf(A, size) + 0.5; const wb = wOf(B, size) + 0.6; const wc = wOf(Cc, size) + 0.5; const gap = 0.12;
    const x0 = 6.665 - (wa + wb + wc + 2 * gap) / 2; const y = 2.2;
    box(s, x0, y, wa, 0.7, { fill: 'FFFFFF', line: NAVY, lw: 1.5, r: 0.1 }); txt(s, A, x0, y, wa, 0.7, { size, align: 'center' });
    box(s, x0 + wa + gap, y - 0.18, wb, 0.7, { fill: TINT.DIE, r: 0.1, shadow: true }); txt(s, B, x0 + wa + gap, y - 0.18, wb, 0.7, { size, align: 'center' });
    box(s, x0 + wa + wb + 2 * gap, y, wc, 0.7, { fill: 'FFFFFF', line: NAVY, lw: 1.5, r: 0.1 }); txt(s, Cc, x0 + wa + wb + 2 * gap, y, wc, 0.7, { size, align: 'center' });
    // la principale continue par-dessus la relative
    arch(s, x0 + wa / 2, x0 + wa + wb + 2 * gap + wc / 2, y - 0.1, '9AA6B5', 0.42, 1.5);
    label(s, 'LA PRINCIPALE CONTINUE', 6.665 - 2, y - 0.82, 4, MUTED, 'center', 9.5);
    const xv = x0 + wa + wb + gap; // la jonction des deux verbes
    txt(s, '**VERBE, VERBE**', xv - 1.2, y + 0.78, 2.4, 0.3, { size: 11, color: C.V, align: 'center', cs: 1.5 });
    table(s, [['Exemples'],
      ['//Het rapport <DAT>dat</> Sofie <V>schrijft</>, <V>is</> bijna klaar.//'], ['//De klanten <DIE>die</> gebeld <V>hebben</>, <V>krijgen</> een antwoord.//'], ['//De printer <DIE>die</> op de eerste verdieping <V>staat</>, <V>werkt</> niet.//']], { y: 3.45, w: 9.5, rowH: 0.46, size: 17 });
    notes2(s, ['✓', 'Verbe, verbe', 'le verbe de la relative, puis celui de la principale ; une virgule entre les deux'], ['!', 'Pas trop long', 'une relative courte au milieu ; une relative longue, plutôt **à la fin** (diapo suivante)'], 5.55, 1.0);
  }

  // ================================================================ 9 le saut
  {
    const s = page(9, 'LA PLACE · B1', 'Le saut : la relative après le verbe');
    const size = 23; const rel = '//<DIE>die</> de sleutel heeft//';
    const wr = wOf(rel, size) + 0.4;
    // avant : la relative coincée, le participe arrive trop tard
    const y1 = 1.75; const y2 = 3.2;
    const G1 = phrase(s, ['Ik heb', '<DIE>de collega</>', wr, '<V>gebeld</>.'], y1, { size });
    box(s, G1[2].x, y1, wr, 0.6, { fill: SOFT, line: 'C3CBD6', r: 0.1, dash: 'dash' }); txt(s, rel, G1[2].x, y1, wr, 0.6, { size, align: 'center', color: MUTED });
    under(s, G1[1], C.DIE);
    txt(s, ['**LOURD :**', '**LE PARTICIPE ARRIVE TROP TARD**'], G1[3].r + 0.25, y1 + 0.02, 3.0, 0.56, { size: 9.5, color: MUTED, cs: 1.5 });
    // après : la relative a sauté par-dessus le participe
    const P2 = ['Ik heb', '<DIE>de collega</>', '<V>gebeld</>', rel.replace(/\/\//g, '')];
    const G2 = phrase(s, P2, y2, { size, dry: true });
    box(s, G2[3].x - 0.15, y2, G2[3].w + 0.3, 0.6, { fill: TINT.DIE, r: 0.1 }); phrase(s, P2, y2, { size });
    under(s, G2[1], C.DIE); link(s, { cx: G2[3].x + 0.3, y: y2 }, G2[1], C.DIE, { h: 0.3, lw: 1.75 });
    line(s, G1[2].x + wr / 2, y1 + 0.64, G2[3].cx + 0.6, y2 - 0.04, C.DIE, 2, true, 'dash');
    table(s, [['Exemples'], ['//We hebben een klant <V>gevonden</> <DIE>die</> het project wil betalen.//'], ['//Wil je het rapport <V>lezen</> <DAT>dat</> ik geschreven heb?//'], ['//Ze heeft een collega <V>gebeld</> <DIE>die</> Frans spreekt.//']], { y: 4.0, w: 9.5, rowH: 0.42, size: 16.5 });
    notes2(s, ['✓', 'La règle', 'la relative peut suivre le participe ou l’infinitif de la fin : la phrase reste légère'], ['!', 'Attention', 'pas d’autre nom entre les deux qui crée une confusion'], 5.85, 0.9);
  }

  // ================================================================ 10 avec ou sans virgules
  {
    const s = page(10, 'LA PONCTUATION', 'Avec ou sans virgules ?');
    const people = ['woman-office-worker', 'man-office-worker', 'woman-technologist', 'man-technologist', 'woman-office-worker', 'man-office-worker'];
    [['//Mijn collega’s <DIE>die</> in Gent wonen, komen met de trein.//', [0, 2, 3], 'PAS DE VIRGULE AVANT //die//', 'le filtre : la relative **choisit**', 'seulement ceux de Gand'],
      ['//Mijn collega’s<DIE>,</> <DIE>die</> in Gent wonen<DIE>,</> komen met de trein.//', [0, 1, 2, 3, 4, 5], 'ENTRE VIRGULES', 'la parenthèse : une information **en plus**', 'tous (et tous habitent Gand)']].forEach(([sent, sel, h, t, res], i) => {
      const y = 1.65 + i * 1.8;
      label(s, h, 0.9, y + 0.05, 3.3, C.DIE, 'left', 10.5);
      txt(s, t, 0.9, y + 0.4, 3.3, 0.6, { size: 15, valign: 'top' });
      txt(s, `→ //${res}//`, 0.9, y + 1.0, 3.3, 0.35, { size: 14, color: MUTED });
      txt(s, sent, 4.4, y, 8.03, 0.5, { size: 19, align: 'center' });
      people.forEach((p, j) => {
        const cx = 5.35 + j * 1.2; const on = sel.includes(j);
        if (on) circle(s, cx, y + 1.08, 0.42, TINT.DIE);
        d.ill(s, p, cx - 0.34, y + 0.74, 0.68, 0.68, { tr: on ? 0 : 72 });
        if (on && i === 0) d.ill(s, 'round-pushpin', cx + 0.18, y + 0.62, 0.3, 0.3);
      });
    });
    d.ill(s, 'round-pushpin', 10.55, 3.07, 0.26, 0.26); txt(s, '//= habite Gand//', 10.85, 3.05, 1.6, 0.3, { size: 11, color: MUTED });
    notes2(s, ['✓', 'La règle', 'pas de virgule avant le relatif = on **choisit** · entre virgules = une information **en plus**'], ['+', 'Un nom propre', 'toujours entre virgules : //Sofie, <DIE>die</> in Gent woont, komt met de trein.//'], 5.45, 1.0);
  }

  // ================================================================ 11 wat : pas de nom
  d.section('Wat et wie');
  {
    const s = page(11, 'WAT', 'wat : quand il n’y a pas de nom');
    const W = ['alles', 'iets', 'niets', 'veel', 'weinig', 'het enige', 'het eerste', 'het mooiste'];
    const ws = W.map((t) => wOf(`//${t}//`, 17) + 0.4); const gx = 0.14; const tw = ws.reduce((a, b) => a + b, 0) + gx * (W.length - 1);
    let x = 6.665 - tw / 2; const cy = 2.95;
    W.forEach((t, i) => {
      box(s, x, 1.6, ws[i], 0.46, { fill: SOFT, r: 0.23 }); txt(s, `//${t}//`, x, 1.6, ws[i], 0.46, { size: 17, align: 'center', color: INK });
      const sx = x + ws[i] / 2; const dx = 6.665 - sx; const dy = cy - 2.1; const L = Math.hypot(dx, dy);
      line(s, sx, 2.1, 6.665 - dx / L * 0.45, cy - dy / L * 0.45, C.WAT, 1.5, true);
      x += ws[i] + gx;
    });
    circle(s, 6.665, cy, 0.4, C.WAT); txt(s, '**wat**', 6.265, cy - 0.25, 0.8, 0.5, { size: 19, color: 'FFFFFF', align: 'center' });
    table(s, [['Exemple', 'Français'],
      ['//Alles <WAT>wat</> je zegt, klopt.//', 'Tout ce que tu dis est juste.'], ['//Is er iets <WAT>wat</> ik kan doen?//', 'Y a-t-il quelque chose que je puisse faire ?'],
      ['//Dat is het enige <WAT>wat</> ik weet.//', 'C’est la seule chose que je sache.'], ['//Het mooiste <WAT>wat</> ik ooit gezien heb.//', 'La plus belle chose que j’aie jamais vue.']], { y: 3.55, colW: [5.5, 6.03], rowH: 0.43, size: 16, align: ['left', 'left'] });
    notes2(s, ['✓', 'La règle', 'pas de nom, mais un mot « chose » → //<WAT>wat</>//'], ['!', 'À l’oral', 'on entend aussi //iets dat, niets dat// (surtout en Belgique) ; //<WAT>wat</>// est toujours juste'], 5.85, 0.92);
  }

  // ================================================================ 12 wat reprend une phrase
  {
    const s = page(12, 'WAT', 'wat reprend toute une phrase');
    const G = phrase(s, ['Hij komt altijd te laat,', '<WAT>wat</>', 'ik vervelend vind.'], 1.85, { size: 28, h: 0.68 });
    const yb = 2.6;
    bracket(s, G[0].x, G[0].r - 0.1, yb, C.WAT, true, 2);
    d.curve(s, G[1].cx, yb, G[0].cx, yb, { color: C.WAT, lw: 2, h: 0.32, dir: 1 });
    txt(s, '//…, ce que je trouve agaçant.//', 0.9, 3.05, 11.53, 0.35, { size: 15, color: MUTED, align: 'center' });
    table(s, [['Exemple', 'Français'],
      ['//Ze heeft de job gekregen, <WAT>wat</> niemand verwachtte.//', '…, ce que personne n’attendait.'], ['//De lift werkt niet, <WAT>wat</> erg lastig is.//', '…, ce qui est très embêtant.'],
      ['//We werken vrijdag thuis, <WAT>wat</> ik fijn vind.//', '…, ce que je trouve agréable.']], { y: 3.6, colW: [6.6, 4.93], rowH: 0.46, size: 16.5, align: ['left', 'left'] });
    notes2(s, ['✓', 'La règle', 'après une virgule, //<WAT>wat</>// reprend **toute l’idée** qui précède'], ['!', 'Attention', '~~//…, dat erg lastig is//~~ → //<WAT>wat</>// : il n’y a pas de nom'], 5.6, 0.95);
  }

  // ================================================================ 13 sans nom : wie, wat
  {
    const s = page(13, 'WIE · WAT', 'Sans nom : wie = celui qui, wat = ce que');
    [['person-raising-hand', 'WIE', 'wie', 'une personne', 'celui / celle qui…', 3.35], ['package', 'WAT', 'wat', 'une chose', 'ce qui, ce que…', 9.95]].forEach(([il, k, w, who, fr, cx]) => {
      box(s, cx - 2.6, 1.68, 1.15, 1.15, { fill: 'FFFFFF', line: 'B8C2CF', dash: 'dash', r: 0.1 });
      d.ill(s, il, cx - 2.42, 1.86, 0.8, 0.8);
      label(s, `PAS DE NOM · ${who.toUpperCase()}`, cx - 3.2, 2.88, 2.35, MUTED, 'center', 9);
      line(s, cx - 1.35, 2.25, cx - 0.65, 2.25, C[k], 2, true);
      circle(s, cx - 0.15, 2.25, 0.45, C[k]); txt(s, `**${w}**`, cx - 0.6, 2.0, 0.9, 0.5, { size: 20, color: 'FFFFFF', align: 'center' });
      txt(s, `= //${fr}//`, cx + 0.42, 2.0, 2.4, 0.5, { size: 17, color: C[k] });
    });
    table(s, [['Exemple', 'Français'],
      ['//<WIE>Wie</> te laat <V>komt</>, <V>betaalt</> de koffie.//', 'Celui qui arrive en retard paie le café.'], ['//<WIE>Wie</> wil meedoen, kan zich inschrijven.//', 'Ceux qui veulent participer peuvent s’inscrire.'],
      ['//<WAT>Wat</> je zegt, is niet waar.//', 'Ce que tu dis n’est pas vrai.'], ['//Ik begrijp niet <WAT>wat</> hij bedoelt.//', 'Je ne comprends pas ce qu’il veut dire.']], { y: 3.3, colW: [5.6, 5.93], rowH: 0.44, size: 16, align: ['left', 'left'] });
    notes2(s, ['✓', 'La règle', 'pas de nom : une personne → //<WIE>wie</>// · une chose → //<WAT>wat</>//'], ['+', 'Plus formel', '//degene <DIE>die</>// (celui / celle qui) · //diegenen <DIE>die</>// (ceux qui) · //datgene <WAT>wat</>// (ce que)'], 5.65, 0.95);
  }

  // ================================================================ 14 préposition : personne ou chose ?
  d.section('Avec une préposition');
  {
    const s = page(14, 'WIE · WAAR', 'Avec une préposition : personne ou chose ?');
    box(s, 4.5, 1.6, 4.33, 0.52, { fill: 'FFFFFF', line: NAVY, lw: 1.25, r: 0.26 });
    txt(s, '**préposition + relatif ?**', 4.5, 1.6, 4.33, 0.52, { size: 17, color: NAVY, align: 'center' });
    [['woman-office-worker', 'UNE PERSONNE', 'préposition + wie', 'WIE', 3.3, '//de collega **<WIE>met wie</>** ik werk//'], ['laptop', 'UNE CHOSE', 'waar + préposition', 'WAAR', 10.03, '//de laptop **<WAAR>waarmee</>** ik werk//']].forEach(([il, who, f, k, cx, ex]) => {
      line(s, 6.665 + (cx < 6.665 ? -1.2 : 1.2), 2.12, cx, 2.52, C[k], 1.75, true);
      d.ill(s, il, cx - 1.75, 2.55, 0.62, 0.62);
      label(s, who, cx - 1.05, 2.6, 2.4, C[k], 'left', 10);
      txt(s, `**${f}**`, cx - 1.05, 2.86, 3.0, 0.34, { size: 16, color: C[k] });
      txt(s, ex, cx - 2.6, 3.28, 5.2, 0.4, { size: 17, align: 'center' });
    });
    table(s, [['Une personne', 'Une chose'],
      ['//de klant <WIE>op wie</> ik wacht//', '//de bus <WAAR>waarop</> ik wacht//'], ['//de man <WIE>aan wie</> ik denk//', '//het project <WAAR>waaraan</> ik denk//'], ['//de vriendin <WIE>over wie</> ik praat//', '//het boek <WAAR>waarover</> ik praat//']], { y: 3.85, w: 10.5, rowH: 0.43, size: 17, hc: ['WIE', 'WAAR'] });
    notes2(s, ['✓', 'La règle', 'personne : préposition + //<WIE>wie</>// · chose : //<WAAR>waar</>// + préposition, en un mot'], ['!', 'Jamais', '~~//met wat//~~ · ~~//met die//~~ · ~~//met dat//~~ pour une chose'], 5.75, 0.92);
  }

  // ================================================================ 15 la fusion
  {
    const s = page(15, 'WAAR + PRÉPOSITION', 'La fusion : waar + préposition');
    // les briques : met + wat (barrées) → waar + mee
    const bricks = [['met', 'X'], ['+', null], ['wat', 'X'], ['→', null], ['waar', 'WAAR'], ['+', null], ['mee', 'WAAR'], ['=', null], ['waarmee', 'W2']];
    const ws = bricks.map(([t, k]) => (k ? wOf(`**${t}**`, 22) + 0.5 : 0.55)); const tw = ws.reduce((a, b) => a + b, 0) + 0.1 * (bricks.length - 1);
    let x = 6.665 - tw / 2; const y = 1.62;
    bricks.forEach(([t, k], i) => {
      if (!k) txt(s, `**${t}**`, x, y, ws[i], 0.62, { size: 22, color: MUTED, align: 'center' });
      else if (k === 'X') { box(s, x, y, ws[i], 0.62, { fill: SOFT, line: 'C3CBD6', r: 0.08 }); txt(s, `~~//${t}//~~`, x, y, ws[i], 0.62, { size: 22, align: 'center' }); }
      else if (k === 'W2') { box(s, x, y, ws[i], 0.62, { fill: TINT.WAAR, line: C.WAAR, lw: 1.5, r: 0.08 }); txt(s, `**//<WAAR>${t}</>//**`, x, y, ws[i], 0.62, { size: 22, align: 'center' }); }
      else { box(s, x, y, ws[i], 0.62, { fill: C.WAAR, r: 0.08 }); txt(s, `**//${t}//**`, x, y, ws[i], 0.62, { size: 22, color: 'FFFFFF', align: 'center' }); }
      x += ws[i] + 0.1;
    });
    const T = [['met', 'mee'], ['tot', 'toe'], ['op', 'op'], ['aan', 'aan'], ['over', 'over'], ['van', 'van'], ['voor', 'voor'], ['in', 'in'], ['naar', 'naar'], ['uit', 'uit'], ['bij', 'bij'], ['om', 'om']];
    const tw2 = 1.72; const g2 = 0.16;
    T.forEach(([p, q], i) => {
      const r = Math.floor(i / 6); const c = i % 6; const tx = 6.665 - (6 * tw2 + 5 * g2) / 2 + c * (tw2 + g2); const ty = 2.7 + r * 1.1;
      const ch = p !== q;
      box(s, tx, ty, tw2, 0.9, { fill: ch ? KO_SOFT : TINT.WAAR, line: ch ? KO : undefined, lw: 1.25, r: 0.1 });
      txt(s, `//${p}// →`, tx, ty + 0.07, tw2, 0.3, { size: 13, color: MUTED, align: 'center' });
      txt(s, `//<WAAR>waar</>**${ch ? `<V>${q}</>` : `<WAAR>${q}</>`}**//`, tx, ty + 0.36, tw2, 0.45, { size: 19, align: 'center', lightCat: true });
    });
    notes2(s, ['!', 'Deux changements', '//met// → //<WAAR>waar</>**<V>mee</>**// · //tot// → //<WAAR>waar</>**<V>toe</>**//'], ['+', 'waarom', '« pourquoi », mais aussi « la raison pour laquelle » : //de reden <WAAR>waarom</> hij vertrekt//'], 5.15, 1.0);
  }

  // ================================================================ 16 la pince
  {
    const s = page(16, 'WAAR + PRÉPOSITION', 'La pince : waar … mee');
    const G = phrase(s, ['<WAAR>de pen</>', '<WAAR>waarmee</>', 'ik schrijf', '=', '<WAAR>de pen</>', '<WAAR>waar</>', 'ik', '<WAAR>mee</>', 'schrijf'], 2.05, { size: 27, h: 0.66 });
    under(s, G[0], C.WAAR); under(s, G[4], C.WAAR);
    link(s, G[1], G[0], C.WAAR, { h: 0.28, lw: 1.75 }); link(s, G[5], G[4], C.WAAR, { h: 0.28, lw: 1.75 });
    s.addShape(d.S.ARC, { x: G[5].cx, y: G[5].y + G[5].h - 0.3, w: G[7].cx - G[5].cx, h: 0.62, angleRange: [0, 180], line: { color: C.WAAR, width: 2.5 }, fill: { color: 'FFFFFF', transparency: 100 } });
    label(s, 'EN UN MOT', G[0].x, 3.12, G[2].r - G[0].x, MUTED, 'center', 10);
    label(s, 'LA PINCE', G[4].x, 3.12, G[8].r - G[4].x, C.WAAR, 'center', 10);
    table(s, [['En un mot', 'La pince'],
      ['//het project <WAAR>waaraan</> ik werk//', '//het project <WAAR>waar</> ik <WAAR>aan</> werk//'], ['//de bus <WAAR>waarop</> ik al een uur wacht//', '//de bus <WAAR>waar</> ik al een uur <WAAR>op</> wacht//'], ['//het dossier <WAAR>waarnaar</> je zoekt//', '//het dossier <WAAR>waar</> je <WAAR>naar</> zoekt//']], { y: 3.6, w: 10.5, rowH: 0.46, size: 17 });
    notes2(s, ['✓', 'Les deux sont justes', 'à l’oral, la pince est la plus fréquente'], ['!', 'Sa place', 'la préposition va juste avant les verbes de la fin : //waar ik al een uur **<WAAR>op</>** wacht//'], 5.6, 0.95);
  }

  // ================================================================ 17 les verbes à préposition fixe
  {
    const s = page(17, 'WIE · WAAR', 'Les verbes à préposition fixe');
    table(s, [['Verbe + préposition', 'Une personne', 'Une chose'],
      ['//wachten **op**//', '//de klant <WIE>op wie</> ik wacht//', '//de bus <WAAR>waarop</> ik wacht//'], ['//denken **aan**//', '//de collega <WIE>aan wie</> ik denk//', '//de deadline <WAAR>waaraan</> ik denk//'],
      ['//praten **over**//', '//de manager <WIE>over wie</> we praten//', '//het plan <WAAR>waarover</> we praten//'], ['//rekenen **op**//', '//de collega’s <WIE>op wie</> ik reken//', '//de hulp <WAAR>waarop</> ik reken//'],
      ['//zorgen **voor**//', '//de kinderen <WIE>voor wie</> ik zorg//', '//de planten <WAAR>waarvoor</> ik zorg//'], ['//zoeken **naar**//', '//de kandidaat <WIE>naar wie</> we zoeken//', '//het dossier <WAAR>waarnaar</> ik zoek//']],
    { y: 1.6, colW: [2.9, 4.4, 4.23], rowH: 0.47, size: 16.5, align: ['left', 'left', 'left'], hc: [null, 'WIE', 'WAAR'] });
    notes2(s, ['✓', 'La règle', 'apprenez le verbe **avec** sa préposition : elle passe devant le relatif'], ['!', '≠ français', '//attendre// quelqu’un → //wachten **op**// · //chercher// → //zoeken **naar**//'], 5.2, 1.0);
  }

  // ================================================================ 18 « où »
  d.section('Traduire');
  {
    const s = page(18, 'TRADUIRE « OÙ »', '« où » : le lieu ou le temps ?');
    [['round-pushpin', 'LE LIEU', '<WAAR>waar</> · <WAAR>waarin</> · <WAAR>waarop</>', 'WAAR', 0.9, ['//het kantoor <WAAR>waar</> ik werk//', '//de stad <WAAR>waar</> ze woont//', '//de zaal <WAAR>waarin</> we vergaderen//']],
      ['spiral-calendar', 'LE TEMPS', '<BL>dat</> · <BL>waarop</> · <BL>waarin</>', 'BL', 6.83, ['//de dag <BL>dat</> (<BL>waarop</>) ik begon//', '//het moment <BL>dat</> (<BL>waarop</>) hij binnenkwam//', '//het jaar <BL>dat</> (<BL>waarin</>) we verhuisden//']]].forEach(([il, h, f, k, x, ex]) => {
      box(s, x, 1.6, 5.6, 3.45, { fill: TINT[k], r: 0.12 });
      d.ill(s, il, x + 0.3, 1.78, 0.62, 0.62);
      label(s, h, x + 1.05, 1.8, 2.5, C[k], 'left', 11);
      txt(s, f, x + 1.05, 2.06, 4.4, 0.36, { size: 17 });
      line(s, x + 0.3, 2.62, x + 5.3, 2.62, 'FFFFFF', 1.5);
      ex.forEach((e, j) => txt(s, e, x + 0.3, 2.78 + j * 0.7, 5.0, 0.55, { size: 18 }));
    });
    note1(s, ['!', 'Attention', '~~//de dag waar//~~ : //waar// = le lieu · //de dag <BL>dat</>// : ce //dat// ne change pas (~~//de dag die//~~)'], 5.35, 1.0, 10.5);
  }

  // ================================================================ 19 « dont »
  {
    const s = page(19, 'TRADUIRE « DONT »', '« dont » : partir du verbe néerlandais');
    pill(s, '//« dont »//', 6.665, 1.85, 'FFFFFF', { color: MUTED, line: 'B8C2CF', lw: 1.25, size: 20, w: 2.0 });
    const B = [['avoir besoin de', 'nodig hebben', 'pas de préposition', '<DAT>dat</> · <DIE>die</>', '//het dossier <DAT>dat</> ik nodig heb//', 'DAT'],
      ['parler de', 'praten **over**', 'personne · chose', '<WIE>over wie</> · <WAAR>waarover</>', '//de collega <WIE>over wie</> ik praat//', 'WIE'],
      ['être fier·e de', 'trots zijn **op**', 'personne · chose', '<WIE>op wie</> · <WAAR>waarop</>', '//het team <WAAR>waarop</> ik trots ben//', 'WAAR'],
      ['la possession', '**van**', 'personne · chose', '<WIE>van wie</> · <WAAR>waarvan</>', '//de collega <WIE>van wie</> de auto kapot is//', 'WIE']];
    const bw = 2.75; const gx = 0.18;
    B.forEach(([fr, nl, hint, rel, ex, k], i) => {
      const x = 6.665 - (4 * bw + 3 * gx) / 2 + i * (bw + gx); const cx = x + bw / 2;
      line(s, 6.665, 2.1, cx, 2.5, 'B8C2CF', 1.25, true);
      box(s, x, 2.55, bw, 2.75, { fill: SOFT, r: 0.1 });
      txt(s, `//${fr}//`, x, 2.62, bw, 0.4, { size: 15, color: MUTED, align: 'center' });
      txt(s, '↓', x, 2.98, bw, 0.3, { size: 14, color: MUTED, align: 'center' });
      txt(s, `//${nl}//`, x, 3.25, bw, 0.4, { size: 18, color: NAVY, align: 'center' });
      label(s, hint.toUpperCase(), x, 3.7, bw, MUTED, 'center', 9);
      txt(s, `//${rel}//`, x, 3.98, bw, 0.4, { size: 17, align: 'center' });
      txt(s, ex, x + 0.12, 4.42, bw - 0.24, 0.8, { size: 14, align: 'center', valign: 'top' });
    });
    notes2(s, ['✓', 'La méthode', '1. le verbe néerlandais · 2. sa préposition · 3. personne ou chose'], ['+', 'Très écrit', '//de man **wiens** auto… · de vrouw **wier** auto…// (à l’oral : //<WIE>van wie</>//)'], 5.55, 1.0);
  }

  // ================================================================ 20 la carte FR → NL
  {
    const s = page(20, 'LA CARTE', 'La carte FR → NL');
    table(s, [['Français', 'Néerlandais', 'Exemple'],
      ['qui, que (nom //de//, pluriel)', '<DIE>die</>', '//de klant <DIE>die</> belt//'], ['qui, que (nom //het//)', '<DAT>dat</>', '//het rapport <DAT>dat</> ik lees//'],
      ['ce qui, ce que', '<WAT>wat</>', '//<WAT>Wat</> je zegt, klopt.//'], ['tout ce que, quelque chose que', '//alles// <WAT>wat</>, //iets// <WAT>wat</>', '//alles <WAT>wat</> je nodig hebt//'],
      ['celui qui', '<WIE>wie</> (//degene// <DIE>die</>)', '//<WIE>Wie</> wil, mag gaan.//'], ['préposition + qui (personne)', 'préposition + <WIE>wie</>', '//de collega <WIE>met wie</> ik werk//'],
      ['préposition + lequel (chose)', '<WAAR>waar</> + préposition', '//de pen <WAAR>waarmee</> ik schrijf//'], ['où (lieu)', '<WAAR>waar</>', '//het kantoor <WAAR>waar</> ik werk//'],
      ['où (temps)', '<BL>dat</>, <BL>waarop</>', '//de dag <BL>dat</> ik begon//'], ['dont', 'selon le verbe', '//het dossier <DAT>dat</> ik nodig heb//']],
    { y: 1.6, colW: [3.75, 3.3, 4.48], rowH: 0.45, size: 16, align: ['left', 'left', 'left'] });
    d.icon(s, 'FaCamera', MUTED, 12.3, 0.3, 0.32);
  }

  // ================================================================ 21 sept pièges
  {
    const s = page(21, 'PIÈGES', 'Sept pièges à éviter', { kc: KO });
    table(s, [['Le piège', '~~Faux~~', 'Juste'],
      ['le mot //het//', '~~//het meisje die//~~', '//het meisje <DAT>dat</>//'], ['la place du verbe', '~~//die heeft de sleutel//~~', '//<DIE>die</> de sleutel <V>heeft</>//'],
      ['une phrase entière', '~~//…, dat ik jammer vind//~~', '//…, <WAT>wat</> ik jammer vind//'], ['//alles, iets//', '~~//alles die je zegt//~~', '//alles <WAT>wat</> je zegt//'],
      ['préposition + chose', '~~//de pen met wat//~~', '//de pen <WAAR>waarmee</>//'], ['le temps', '~~//de dag waar ik begon//~~', '//de dag <BL>dat</> ik begon//'],
      ['l’oubli (anglais)', '~~//het boek ik lees//~~', '//het boek <DAT>dat</> ik lees//']],
    { y: 1.7, colW: [3.3, 4.1, 4.13], rowH: 0.56, size: 17, align: ['left', 'center', 'center'] });
  }

  // ================================================================ 22 l'arbre de décision
  d.section('Synthèse');
  {
    const s = page(22, 'LA SYNTHÈSE', 'L’arbre de décision');
    const Q = (str, cx, cy, w) => { box(s, cx - w / 2, cy - 0.26, w, 0.52, { fill: 'FFFFFF', line: NAVY, lw: 1.25, r: 0.26 }); txt(s, str, cx - w / 2, cy - 0.26, w, 0.52, { size: 15.5, bold: true, color: NAVY, align: 'center' }); };
    const T = (str, cx, cy, k, ex) => { pill(s, `//${str}//`, cx, cy, C[k], { size: 17, w: 1.55, h: 0.48 }); txt(s, ex, cx - 1.05, cy + 0.3, 2.1, 0.5, { size: 12, align: 'center', valign: 'top', color: INK }); };
    const E = (x1, y1, x2, y2, lab, lx, ly) => { line(s, x1, y1, x2, y2, '9AA6B5', 1.5, true); if (lab) txt(s, `//${lab}//`, lx, ly, 1.2, 0.26, { size: 11.5, color: MUTED, align: 'center' }); };
    Q('① Une préposition devant le relatif ?', 6.665, 1.85, 4.7);
    // oui → personne ou chose ?
    Q('Une personne ou une chose ?', 10.1, 3.05, 3.5);
    E(8.4, 2.11, 9.7, 2.79, 'oui', 9.25, 2.25);
    T('met wie', 9.05, 4.35, 'WIE', '//de collega <WIE>met wie</> ik werk//'); T('waarmee', 11.2, 4.35, 'WAAR', '//de pen <WAAR>waarmee</> ik schrijf//');
    E(9.6, 3.31, 9.15, 4.09, 'personne', 8.4, 3.55); E(10.6, 3.31, 11.1, 4.09, 'chose', 10.95, 3.55);
    // non → un nom juste avant ?
    Q('② Un nom juste avant ?', 3.75, 3.05, 3.3);
    E(4.9, 2.11, 3.95, 2.79, 'non', 3.8, 2.25);
    Q('③ de, het, pluriel ?', 2.05, 4.35, 2.7); Q('personne ou chose ?', 5.55, 4.35, 2.55);
    E(3.3, 3.31, 2.35, 4.09, 'oui', 1.85, 3.55); E(4.2, 3.31, 5.25, 4.09, 'non', 5.0, 3.55);
    txt(s, '//aussi après alles, iets, niets, un superlatif, une phrase//', 6.95, 4.05, 1.25, 0.65, { size: 10, color: MUTED });
    T('die', 1.2, 5.6, 'DIE', '//de klant <DIE>die</> belt//'); T('dat', 2.9, 5.6, 'DAT', '//het rapport <DAT>dat</> ik lees//');
    E(1.75, 4.61, 1.3, 5.34, 'de, pl.', 0.55, 4.82); E(2.35, 4.61, 2.8, 5.34, 'het', 2.75, 4.82);
    T('wie', 4.75, 5.6, 'WIE', '//<WIE>Wie</> wil, mag gaan.//'); T('wat', 6.4, 5.6, 'WAT', '//alles <WAT>wat</> je zegt//');
    E(5.25, 4.61, 4.85, 5.34, 'pers.', 3.95, 4.82); E(5.85, 4.61, 6.3, 5.34, 'chose', 6.15, 4.82);
    box(s, 8.0, 5.35, 4.4, 0.95, { fill: TINT.V, r: 0.1 });
    txt(s, ['**Et toujours :**', 'tous les <V>verbes</> à la fin de la relative'], 8.2, 5.4, 4.0, 0.85, { size: 15, color: INK, align: 'center' });
  }

  // ================================================================ 23 à retenir
  {
    const s = page(23, 'À RETENIR', 'Cinq relatifs');
    const K = [['die', 'DIE'], ['dat', 'DAT'], ['wat', 'WAT'], ['wie', 'WIE'], ['waar-', 'WAAR']];
    const lw = 1.65; const cw = (11.53 - lw) / 5; const x0 = 0.9;
    K.forEach(([t, k], i) => pill(s, `//${t}//`, x0 + lw + cw * i + cw / 2, 1.85, C[k], { size: 20, w: 1.4, h: 0.5 }));
    table(s, [
      ['**Quand ?**', 'nom //de//, pluriel', 'nom //het//', '//alles, iets//, superlatif, une phrase, sans nom', 'préposition + personne, sans nom', 'préposition + chose, le lieu'],
      ['**Exemple**', '//de klant <DIE>die</> belt//', '//het rapport <DAT>dat</> ik lees//', '//alles <WAT>wat</> je zegt//', '//<WIE>met wie</> ik werk//', '//<WAAR>waarmee</> ik schrijf//'],
      ['**Français**', 'qui, que', 'qui, que', 'ce qui, ce que', '(avec) qui, celui qui', 'avec lequel, où']],
    { head: false, y: 2.35, colW: [lw, cw, cw, cw, cw, cw], rowH: [1.15, 0.85, 0.7], size: 15, align: ['left', 'center', 'center', 'center', 'center', 'center'] });
    takeaway(s, 'Et toujours : tous les **<V>verbes</>** à la fin de la relative.', 5.6);
    d.icon(s, 'FaCamera', MUTED, 12.3, 0.3, 0.32);
  }

  // ================================================================ 24 JIJ NU !
  const EXS = [['Die of dat ?', '★'], ['Une seule phrase', '★★'], ['Qui ou que ?', '★★'], ['Au milieu', '★★★'], ['Virgules', '★★'], ['die, dat ou wat ?', '★★'], ['wie ou waar- ?', '★★'], ['La pince', '★★'], ['Dont et où', '★★★'], ['Le détective', '★★'], ['Taboe !', '★'], ['La photo d’équipe', '★★★']];
  d.section('Oefeningen');
  {
    const s = page(24, 'JIJ NU !', 'Oefeningen', { dark: true });
    const tw = 1.62; const gx = 0.2;
    EXS.forEach(([t, st], i) => {
      const r = Math.floor(i / 6); const c = i % 6;
      const x = 6.665 - (6 * tw + 5 * gx) / 2 + c * (tw + gx); const y = 2.1 + r * 1.85;
      box(s, x, y, tw, 1.55, { fill: '23466F', r: 0.1 });
      txt(s, `**${i + 1}**`, x + 0.15, y + 0.12, 0.6, 0.45, { size: 20, color: 'F0A04B' });
      txt(s, t, x + 0.15, y + 0.6, tw - 0.3, 0.55, { size: 13.5, bold: true, color: 'FFFFFF', valign: 'top' });
      txt(s, st, x + 0.15, y + 1.18, tw - 0.3, 0.28, { size: 11, color: 'F0A04B' });
    });
  }

  // ---------------------------------------------------------------- l'exercice : question puis correction
  const exercise = (g, n, title, stars, instr, draw, notes) => {
    ['q', 'a'].forEach((mode) => {
      const s = page(g, mode === 'q' ? `JIJ NU ! · EXERCICE ${n}` : `✓ CORRECTIE · EXERCICE ${n}`, title, { stars, correction: mode === 'a', notes, kc: mode === 'q' ? C.DAT : OK });
      txt(s, instr, 1.2, 1.45, 10.93, 0.42, { size: 15.5, italic: true, color: MUTED, align: 'center' });
      draw(s, mode);
    });
  };
  const exNote = (s, str, y = 6.5) => txt(s, str, 0.9, y, 11.53, 0.35, { size: 13, italic: true, color: MUTED, align: 'center' });
  const R = (w) => `[[<${w === 'die' ? 'DIE' : 'DAT'}>${w}</>]]`;

  // ================================================================ 25 ex1 die of dat
  const ex1 = [['de klant', 'die', 'belt'], ['het rapport', 'dat', 'klaar is'], ['de rapporten', 'die', 'klaar zijn'], ['het meisje', 'dat', 'aan de balie werkt'], ['de printer', 'die', 'niet werkt'], ['het kantoor', 'dat', 'we huren'],
    ['de collega’s', 'die', 'thuiswerken'], ['het kopje', 'dat', 'op tafel staat'], ['de stagiair', 'die', 'morgen begint'], ['het team', 'dat', 'het project leidt'], ['de mensen', 'die', 'ik ken'], ['het bedrijf', 'dat', 'ik bel']];
  exercise(25, 1, 'die of dat ?', '★', 'Complétez avec die ou dat. Regardez d’abord l’article du nom.', (s, mode) => {
    const rows = [0, 1, 2, 3].map((r) => ex1.slice(r * 3, r * 3 + 3).map(([n, w, rest], j) => `**${r * 3 + j + 1}**  //${n} ${R(w)} ${rest}//`));
    table(s, rows, { mode, head: false, y: 2.05, colW: [4.15, 3.6, 3.78], rowH: 0.95, size: 17.5, align: ['left', 'left', 'left'] });
    if (mode === 'a') exNote(s, '//het meisje, het kopje// (//-je//) : mots //het// → //<DAT>dat</>// · pluriel → toujours //<DIE>die</>// (//het rapport → de rapporten <DIE>die</>//).');
  });

  // ================================================================ 26 ex2 une seule phrase
  const ex2 = [['Ik heb een collega. Hij spreekt vijf talen.', 'Ik heb een collega <DIE>die</> vijf talen <V>spreekt</>.'], ['Hier is het rapport. Je hebt het rapport gevraagd.', 'Hier is het rapport <DAT>dat</> je gevraagd <V>hebt</>.'],
    ['We zoeken een stagiair. Hij spreekt goed Frans.', 'We zoeken een stagiair <DIE>die</> goed Frans <V>spreekt</>.'], ['Dat is de printer. Hij is altijd kapot.', 'Dat is de printer <DIE>die</> altijd kapot <V>is</>.'],
    ['Ken je het restaurant? Het ligt naast het station.', 'Ken je het restaurant <DAT>dat</> naast het station <V>ligt</>?'], ['Ik bel de klanten. Ze hebben een klacht gestuurd.', 'Ik bel de klanten <DIE>die</> een klacht <V>hebben gestuurd</>.']];
  exercise(26, 2, 'Une seule phrase', '★★', 'Reliez les deux phrases avec die ou dat. Attention au verbe !', (s, mode) => {
    table(s, [['Deux phrases', 'Une seule phrase'], ...ex2.map(([a, b], i) => [`**${i + 1}**  //${a}//`, `//[[${b}]]//`])], { mode, ansPlain: true, y: 1.95, colW: [5.45, 6.08], rowH: 0.6, size: 15.5, align: ['left', 'left'] });
    if (mode === 'a') exNote(s, 'N° 2 et 6 : //gevraagd hebt// = //hebt gevraagd// · //hebben gestuurd// = //gestuurd hebben// : les deux ordres sont corrects.');
  });

  // ================================================================ 27 ex3 qui ou que
  const ex3 = [['le client **qui** appelle', 'de klant <DIE>die</> belt'], ['le client **que** j’appelle', 'de klant <DIE>die</> ik bel'], ['le bureau **qui** est libre', 'het bureau <DAT>dat</> vrij is'],
    ['le bureau **que** je réserve', 'het bureau <DAT>dat</> ik reserveer'], ['les collègues **qui** m’aident', 'de collega’s <DIE>die</> me helpen'], ['les collègues **que** j’aide', 'de collega’s <DIE>die</> ik help']];
  exercise(27, 3, 'Qui ou que ?', '★★', 'Traduisez. Le français change… et le néerlandais ?', (s, mode) => {
    table(s, [['Français', 'Néerlandais'], ...ex3.map(([f, n], i) => [`**${i + 1}**  ${f}`, `//[[${n}]]//`])], { mode, ansPlain: true, y: 1.95, w: 10.0, rowH: 0.62, size: 17.5, align: ['left', 'left'] });
    if (mode === 'a') exNote(s, 'Le français change (//qui / que//), le néerlandais non : seul le nom décide.');
  });

  // ================================================================ 28 ex4 au milieu
  const ex4 = [['De collega spreekt vijf talen.', 'Ze zit naast me.', 'De collega <DIE>die</> naast me <V>zit</>, <V>spreekt</> vijf talen.'], ['Het rapport is bijna klaar.', 'Sofie schrijft het.', 'Het rapport <DAT>dat</> Sofie <V>schrijft</>, <V>is</> bijna klaar.'],
    ['De printer werkt niet.', 'Hij staat op de eerste verdieping.', 'De printer <DIE>die</> op de eerste verdieping <V>staat</>, <V>werkt</> niet.'], ['De klanten krijgen een korting.', 'Ze betalen online.', 'De klanten <DIE>die</> online <V>betalen</>, <V>krijgen</> een korting.'],
    ['Het project begint in mei.', 'We hebben het gisteren besproken.', 'Het project <DAT>dat</> we gisteren <V>hebben besproken</>, <V>begint</> in mei.']];
  exercise(28, 4, 'La relative au milieu', '★★★', 'Ajoutez l’information entre parenthèses au milieu de la phrase : verbe, verbe !', (s, mode) => {
    table(s, [['La phrase + l’information', 'Une seule phrase'], ...ex4.map(([a, b, c], i) => [[`**${i + 1}**  //${a}//`, `<MU>//(${b})//</>`], `//[[${c}]]//`])], { mode, ansPlain: true, y: 1.95, colW: [4.6, 6.93], rowH: [0.45, 0.8, 0.8, 0.8, 0.8, 0.8], size: 15.5, align: ['left', 'left'] });
    if (mode === 'a') exNote(s, 'N° 4 : sans virgule avant //<DIE>die</>//, seuls les clients qui paient en ligne ont la réduction · n° 5 : //besproken hebben// est aussi correct.');
  });

  // ================================================================ 29 ex5 virgules
  const ex5 = [['De collega’s <DIE>die</> thuiswerken, krijgen een laptop.', 'seulement ceux qui travaillent à domicile'], ['De collega’s, <DIE>die</> thuiswerken, krijgen een laptop.', 'tous (et tous travaillent à domicile)'],
    ['Mijn zus <DIE>die</> in Brussel woont, komt morgen.', 'j’ai plusieurs sœurs : celle de Bruxelles'], ['Mijn zus, <DIE>die</> in Brussel woont, komt morgen.', 'j’ai une sœur ; elle habite Bruxelles'],
    ['De treinen <DIE>die</> vertraging hebben, staan op het bord.', 'seulement les trains en retard'], ['Sofie, <DIE>die</> net terug is uit Gent, geeft de presentatie.', 'une information en plus (nom propre)']];
  exercise(29, 5, 'Avec ou sans virgules ?', '★★', 'Qui est concerné ? Tous, ou seulement certains ?', (s, mode) => {
    table(s, [['La phrase', 'Le sens'], ...ex5.map(([a, b], i) => [`**${i + 1}**  //${a}//`, `[[${b}]]`])], { mode, ans: C.BL, ansPlain: true, y: 1.95, colW: [6.6, 4.93], rowH: 0.6, size: 16, align: ['left', 'left'] });
    if (mode === 'a') exNote(s, 'La virgule **avant** //<DIE>die</>// fait la différence · la virgule après la relative (//thuiswerken, krijgen//) est la virgule « verbe, verbe ».');
  });

  // ================================================================ 30 ex6 die, dat ou wat
  const ex6 = [['Alles', 'wat', 'je zegt, klopt.'], ['Is er iets', 'wat', 'ik voor je kan doen?'], ['Dat is het enige', 'wat', 'ik weet.'], ['Het rapport', 'dat', 'je stuurde, is perfect.'], ['Hij komt altijd te laat,', 'wat', 'ik vervelend vind.'],
    ['De vergadering', 'die', 'om 10 uur begint, duurt lang.'], ['Er is niets', 'wat', 'hij niet kan.'], ['Het nieuwe kantoor,', 'dat', 'in het centrum ligt, is mooi.'], ['Stel niet uit tot morgen', 'wat', 'je vandaag kunt doen.'], ['Dat is het mooiste', 'wat', 'ik ooit gezien heb.']];
  exercise(30, 6, 'die, dat ou wat ?', '★★', 'Complétez avec die, dat ou wat. Utilisez l’arbre de décision !', (s, mode) => {
    [0, 1].forEach((j) => table(s, ex6.slice(j * 5, j * 5 + 5).map(([a, w, b], i) => [`**${j * 5 + i + 1}**`, `//${a} [[<${w.toUpperCase()}>${w}</>]] ${b}//`]), { mode, head: false, x: 0.9 + j * 5.88, w: 5.65, colW: [0.45, 5.2], y: 2.05, rowH: 0.8, size: 16, align: ['center', 'left'] }));
    if (mode === 'a') exNote(s, 'N° 2, 7 et 10 : on entend aussi //dat// ; //<WAT>wat</>// est toujours juste · n° 5 : toute la phrase · n° 9 : sans nom (« ce que »).');
  });

  // ================================================================ 31 ex7 wie ou waar-
  const ex7 = [['de collega', 'met wie', 'ik samenwerk', 'met', 'WIE'], ['de laptop', 'waarmee', 'ik werk', 'met', 'WAAR'], ['de bus', 'waarop', 'ik elke dag wacht', 'op', 'WAAR'], ['de klant', 'over wie', 'we het gisteren hadden', 'over', 'WIE'],
    ['het project', 'waaraan', 'ze denkt', 'aan', 'WAAR'], ['de manager', 'aan wie', 'je het formulier geeft', 'aan', 'WIE'], ['de reden', 'waarom', 'hij vertrekt', 'om', 'WAAR'], ['het bedrijf', 'waarvoor', 'ik werk', 'voor', 'WAAR']];
  exercise(31, 7, 'Avec une préposition : wie ou waar- ?', '★★', 'Complétez avec la préposition donnée : préposition + wie (personne) ou waar + préposition (chose).', (s, mode) => {
    [0, 1].forEach((j) => table(s, [['', 'Phrase', 'Prép.'], ...ex7.slice(j * 4, j * 4 + 4).map(([n, r, rest, p, k], i) => [`**${j * 4 + i + 1}**`, `//${n} [[<${k}>${r}</>]] ${rest}//`, `<MU>//${p}//</>`])], { mode, x: 0.9 + j * 5.88, w: 5.65, colW: [0.45, 4.3, 0.9], y: 2.05, rowH: [0.42, 0.85, 0.85, 0.85, 0.85], size: 16, align: ['center', 'left', 'center'] }));
    if (mode === 'a') exNote(s, 'N° 3, 5 et 8 : la pince est aussi correcte (//<WAAR>waar</> ik elke dag <WAAR>op</> wacht//) · n° 4 : //het hebben over// = parler de.');
  });

  // ================================================================ 32 ex8 la pince
  const ex8 = [['de pen <WAAR>waarmee</> ik schrijf', 'de pen <WAAR>waar</> ik <WAAR>mee</> schrijf', 1], ['het project <WAAR>waaraan</> we werken', 'het project <WAAR>waar</> we <WAAR>aan</> werken', 1], ['de vergadering <WAAR>waarover</> hij praat', 'de vergadering <WAAR>waar</> hij <WAAR>over</> praat', 1],
    ['de bus <WAAR>waarop</> ik al een uur wacht', 'de bus <WAAR>waar</> ik al een uur <WAAR>op</> wacht', 1], ['de documenten <WAAR>waarnaar</> je zoekt', 'de documenten <WAAR>waar</> je <WAAR>naar</> zoekt', 0], ['het bedrijf <WAAR>waarvoor</> ik werk', 'het bedrijf <WAAR>waar</> ik <WAAR>voor</> werk', 0]];
  exercise(32, 8, 'La pince', '★★', 'Passez d’une forme à l’autre : en un mot ⇄ avec la pince.', (s, mode) => {
    table(s, [['En un mot', 'Avec la pince'], ...ex8.map(([a, b, dir], i) => (dir ? [`**${i + 1}**  //${a}//`, `//[[${b}]]//`] : [`**${i + 1}**  //[[${a}]]//`, `//${b}//`]))], { mode, ansPlain: true, y: 1.95, colW: [5.5, 6.03], rowH: 0.6, size: 17, align: ['left', 'left'] });
    if (mode === 'a') exNote(s, 'N° 4 : la préposition se place juste avant le verbe, après //al een uur//.');
  });

  // ================================================================ 33 ex9 dont et où
  const ex9 = [['le bureau **où** je travaille', 'het kantoor <WAAR>waar</> ik werk'], ['le jour **où** j’ai commencé', 'de dag <BL>dat</> (<BL>waarop</>) ik begonnen ben'], ['le dossier **dont** j’ai besoin', 'het dossier <DAT>dat</> ik nodig heb'], ['le collègue **dont** je parle', 'de collega <WIE>over wie</> ik praat'],
    ['le projet **dont** je suis fier·e', 'het project <WAAR>waarop</> ik trots ben'], ['l’année **où** nous avons déménagé', 'het jaar <BL>dat</> (<BL>waarin</>) we verhuisd zijn'], ['la collègue **dont** la voiture est en panne', 'de collega <WIE>van wie</> de auto kapot is'], ['la salle **où** nous nous réunissons', 'de zaal <WAAR>waar</> (<WAAR>waarin</>) we vergaderen']];
  exercise(33, 9, 'Traduire « dont » et « où »', '★★★', 'Traduisez. Pour « dont », cherchez d’abord le verbe néerlandais !', (s, mode) => {
    table(s, [['Français', 'Néerlandais'], ...ex9.map(([f, n], i) => [`**${i + 1}**  ${f}`, `//[[${n}]]//`])], { mode, ansPlain: true, y: 1.95, colW: [5.3, 6.23], rowH: 0.48, size: 16.5, align: ['left', 'left'] });
    if (mode === 'a') exNote(s, 'N° 3 : //nodig hebben//, sans préposition · n° 4 : //praten over// · n° 5 : //trots zijn op// · n° 2 et 6 : aussi //ik begon, we verhuisden//.');
  });

  // ================================================================ 34 ex10 le détective
  exercise(34, 10, 'Le détective', '★★', 'Karim écrit à Lotte. Trouvez les 5 erreurs de relatifs.', (s, mode) => {
    box(s, 1.6, 2.05, 10.13, 4.3, { fill: 'FFFFFF', line: LINE, r: 0.06, shadow: true });
    txt(s, 'Van: Karim Benali · Aan: Lotte Maes · Onderwerp: nieuws van kantoor', 1.95, 2.15, 9.5, 0.4, { size: 12, color: MUTED, cs: 1 });
    line(s, 1.95, 2.6, 11.38, 2.6, LINE, 1);
    const fix = (bad, good) => (mode === 'q' ? bad : `~~${bad}~~ ${good}`);
    const body = ['//Beste Lotte,//',
      `//Bedankt voor het rapport ${fix('die', '<DAT>dat</>')} je gisteren hebt gestuurd. De printer ${fix('die staat op de tweede verdieping', '<DIE>die</> op de tweede verdieping <V>staat</>')}, is nog altijd kapot. De klant ${fix('met wat', '<WIE>met wie</>')} ik vorige week vergaderd heb, wil het contract tekenen. Vrijdag is de dag ${fix('waar', '<BL>dat</>')} we de nieuwe stagiair ontmoeten. O ja, de lift werkt nog altijd niet, ${fix('dat', '<WAT>wat</>')} erg lastig is.//`,
      '//Groetjes,//', '//Karim//'];
    txt(s, body, 1.95, 2.75, 9.45, 3.5, { size: 17, valign: 'top', gap: 6, ls: 1.1 });
    if (mode === 'a') exNote(s, 'Les règles : diapos 5 (//het//), 7 (le verbe), 14 (personne), 18 (le temps : aussi //<BL>waarop</>//), 12 (toute la phrase).');
  });

  // ================================================================ 35 ex11 Taboe !
  {
    const s = page(35, 'JIJ NU ! · EXERCICE 11', 'Taboe ! Définissez sans nommer', { stars: '★', kc: C.DAT });
    txt(s, 'Par deux : A tire une carte et la définit avec une relative ; B devine. 1 minute par carte.', 1.2, 1.45, 10.93, 0.42, { size: 15.5, italic: true, color: MUTED, align: 'center' });
    const st = [['Het is iemand <DIE>die</>…', 'DIE'], ['Het is iets <WAAR>waarmee</>…', 'WAAR'], ['Het is een plek <WAAR>waar</>…', 'WAAR'], ['Het is de dag <BL>waarop</>…', 'BL']];
    const sw = 2.7; const sg = 0.18;
    st.forEach(([t, k], i) => { const x = 6.665 - (4 * sw + 3 * sg) / 2 + i * (sw + sg); box(s, x, 2.0, sw, 0.5, { fill: TINT[k], r: 0.25 }); txt(s, `//${t}//`, x, 2.0, sw, 0.5, { size: 16, align: 'center' }); });
    const cards = [['woman-office-worker', 'de receptionist'], ['printer', 'de printer'], ['fork-and-knife-with-plate', 'de refter'], ['identification-card', 'de badge'], ['backpack', 'de stagiair'], ['spiral-calendar', 'de deadline'], ['key', 'het wachtwoord'], ['chair', 'de vergaderzaal']];
    const cw = 2.75; const cg = 0.18;
    cards.forEach(([il, w], i) => {
      const r = Math.floor(i / 4); const c = i % 4; const x = 6.665 - (4 * cw + 3 * cg) / 2 + c * (cw + cg); const y = 2.85 + r * 1.75;
      box(s, x, y, cw, 1.5, { fill: 'FFFFFF', line: LINE, r: 0.12, shadow: true });
      d.ill(s, il, x + 0.15, y + 0.4, 0.7, 0.7);
      txt(s, `//**${w.replace(/^(de|het) /, (a) => `<${a.trim() === 'de' ? 'DIE' : 'DAT'}>${a.trim()}</> `)}**//`, x + 0.95, y, cw - 1.0, 1.5, { size: 15, color: NAVY });
    });
    txt(s, '**1 point** par mot deviné · **−1** si le mot de la carte est prononcé', 0.9, 6.4, 11.53, 0.35, { size: 14, color: MUTED, align: 'center' });
  }

  // ================================================================ 36 ex12 la photo d'équipe
  {
    const s = page(36, 'MISE EN SITUATION · EXERCICE 12', 'La photo d’équipe', { stars: '★★★', kc: C.WAAR });
    txt(s, 'Qui est qui chez Peeters & Co ? A décrit une personne en trois relatives ; B devine.', 1.2, 1.45, 10.93, 0.42, { size: 15.5, italic: true, color: MUTED, align: 'center' });
    // la photo : six collègues, chacun avec un objet
    box(s, 0.9, 2.0, 6.5, 4.55, { fill: 'FFFFFF', line: 'C3CBD6', lw: 1, r: 0.06, shadow: true });
    box(s, 1.08, 2.18, 6.14, 4.19, { fill: 'EEF3F8', r: 0.02 });
    const team = [['woman-office-worker', 'hot-beverage'], ['man-office-worker', 'laptop'], ['woman-technologist', 'telephone-receiver'], ['man-technologist', 'potted-plant'], ['woman-cook', 'bicycle'], ['man-mechanic', 'file-folder']];
    team.forEach(([p, o], i) => {
      const r = Math.floor(i / 3); const c = i % 3; const x = 1.4 + c * 1.95; const y = 2.4 + r * 2.0;
      d.ill(s, p, x, y + 0.1, 1.15, 1.15);
      d.ill(s, o, x + 1.05, y + 0.75, 0.55, 0.55);
      badge(s, x + 0.12, y + 0.12, i + 1, NAVY, 0.19);
    });
    [['A', 'Je décris', '//Ik zoek de collega <DIE>die</>… · <WIE>met wie</>… · <WIE>naast wie</>…//', C.WAAR, TINT.WAAR], ['B', 'Je devine', '//Is het de collega <DIE>die</> een koffie drinkt?// Puis on échange.', C.BL, TINT.BL]].forEach(([L, h, t, c, tint], i) => {
      const y = 2.0 + i * 1.3;
      box(s, 7.7, y, 4.73, 1.12, { fill: tint, r: 0.1 });
      circle(s, 8.15, y + 0.56, 0.28, c); txt(s, `**${L}**`, 7.87, y + 0.28, 0.56, 0.56, { size: 17, color: 'FFFFFF', align: 'center' });
      txt(s, `**${h}**`, 8.6, y + 0.1, 3.7, 0.34, { size: 15, color: c });
      txt(s, t, 8.6, y + 0.44, 3.75, 0.64, { size: 14, valign: 'top' });
    });
    txt(s, '**BANQUE DE RELATIVES**', 7.7, 4.72, 4.73, 0.3, { size: 11, color: NAVY, cs: 2 });
    txt(s, '//<DIE>die</> een koffie drinkt · <DIE>die</> aan de telefoon is · <DIE>die</> met de fiets komt · <DIE>die</> naast de plant staat · <WIE>met wie</> ik lunch · <WIE>naast wie</> ik zit · <WAAR>waarmee</> hij werkt · <WAT>wat</> ik grappig vind//', 7.7, 5.05, 4.73, 1.5, { size: 14, valign: 'top', lightCat: true });
  }

  // ================================================================ 37 ticket de sortie
  d.section('Clôture');
  {
    const s = page(37, 'TICKET DE SORTIE', 'Ticket de sortie');
    ['Complétez : //het meisje … aan de balie werkt//', 'Traduisez : //la collègue avec qui je travaille//', 'Traduisez : //tout ce que tu dis//'].forEach((q, i) => {
      const y = 1.75 + i * 1.1;
      circle(s, 1.35, y + 0.42, 0.28, C.DAT); txt(s, `**${i + 1}**`, 1.07, y + 0.14, 0.56, 0.56, { size: 17, color: 'FFFFFF', align: 'center' });
      txt(s, q, 1.85, y, 5.4, 0.84, { size: 18, color: INK });
    });
    table(s, [['Je sais…', '', '', ''], ...['choisir', 'construire', 'traduire'].map((t) => [t, '', '', ''])], { x: 7.6, w: 4.83, colW: [2.1, 0.91, 0.91, 0.91], y: 1.75, rowH: [0.45, 0.78, 0.78, 0.78], size: 17, align: ['left', 'center', 'center', 'center'] });
    [0, 1, 2].forEach((r) => ['FaRegFrown', 'FaRegMeh', 'FaRegSmile'].forEach((ic, c) => d.icon(s, ic, [KO, C.DAT, OK][c], 9.7 + c * 0.91 + 0.24, 2.2 + r * 0.78 + 0.18, 0.42)));
    note1(s, ['+', 'Défi de la semaine', 'définissez trois mots de votre métier avec une relative : //Het is iemand <DIE>die</>… · iets <WAAR>waarmee</>…//'], 5.45, 1.0, 11.53);
  }
}

module.exports = { meta, build };
