// Werken, de werking, werkbaar — La dérivation : passer d'une catégorie de mot à l'autre (complément A2–B1)
// Édition épurée : une idée par diapo, la formule au centre, les exemples dans des tableaux sobres,
// deux couleurs seulement (bleu nuit pour la structure, bleu-vert pour les affixes), les détails dans les notes.
const { measure } = require('../vijf_kit');

const meta = {
  n: 'D', slug: 'Afleiding', title: 'Werken, de werking, werkbaar — La dérivation', short: 'La dérivation',
  template: 'derivation_afleiding.md', file: 'Afleiding_La_derivation.pptx',
  docTitle: 'Werken, de werking, werkbaar — La dérivation : passer d’une catégorie de mot à l’autre',
  foot: 'Néerlandais · A2–B1 · La dérivation',
};

// ------------------------------------------------------------------ la palette (deux couleurs, des gris)
const NAVY = '17375E';   // la structure : titres, en-têtes, la racine
const INK = '1B2333';    // le texte
const MUTED = '6B7686';  // les commentaires
// le code couleur du M14, comme dans la version précédente : nom bleu · verbe rouge · adjectif orange · adverbe vert ;
// les affixes (suffixes, préfixes) en violet ; de bleu nuit · het orange (M5) ; la règle en vert, l'attention en rouge
const ACC = '6E4A9E';    // l'affixe
const ACC_SOFT = 'F1ECF7';
const CAT = { N: '2A6FB0', V: 'B83227', A: 'D9700F', D: '2E7D4F', DE: '17375E', HET: 'D9700F', OK: '2E7D4F' };
const TINT = { N: 'EAF2FB', V: 'FBEDEB', A: 'FDF1E6', D: 'E8F4EC' };
const OK = '2E7D4F'; const OK_SOFT = 'E8F4EC'; const KO = 'B83227'; const KO_SOFT = 'FBEDEB';
const SOFT = 'F4F6F9';   // les fonds discrets
const LINE = 'DDE3EA';   // les filets
const ERR = 'B5473C';    // seulement pour barrer une forme fautive
const FONT = 'Calibri';

function build(d) {
  const P = d.pres;
  const footer = (c) => ({ text: { text: meta.foot, options: { x: 0.6, y: 7.05, w: 9, h: 0.3, fontSize: 10, color: c, margin: 0, valign: 'middle' } } });
  const num = (c) => ({ x: 12.13, y: 7.05, w: 0.6, h: 0.3, fontSize: 10, color: c, align: 'right' });
  P.defineSlideMaster({ title: 'AF_PAGE', background: { color: 'FFFFFF' }, slideNumber: num(MUTED), objects: [footer(MUTED), { placeholder: { options: { name: 'title', type: 'title', x: 1.5, y: 0.6, w: 10.33, h: 0.8, fontSize: 30, bold: true, color: NAVY, align: 'center', valign: 'middle', margin: 0 }, text: '' } }] });
  P.defineSlideMaster({ title: 'AF_DARK', background: { color: NAVY }, slideNumber: num('C9D4E2'), objects: [footer('C9D4E2'), { placeholder: { options: { name: 'title', type: 'title', x: 1.5, y: 0.6, w: 10.33, h: 0.8, fontSize: 30, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', margin: 0 }, text: '' } }] });

  // ---------------------------------------------------------------- texte enrichi
  // **gras** · //italique// · {affixe} (bleu-vert) · ~~forme fautive~~ (barrée) · [[réponse]] (pointillés / bleu-vert)
  const runs = (str, o = {}, mode = 'a') => {
    const out = []; let b = false; let it = false; let a = false; let e = false; let ans = false; let cat = null;
    String(str).split(/(\*\*|\/\/|\{|\}|~~|\[\[|\]\]|<(?:N|V|A|D|DE|HET|OK)>|<\/>)/).forEach((tk) => {
      const m = /^<(N|V|A|D|DE|HET|OK)>$/.exec(tk);
      if (m) cat = m[1]; else if (tk === '</>') cat = null;
      else if (tk === '**') b = !b; else if (tk === '//') it = !it; else if (tk === '{') a = true; else if (tk === '}') a = false;
      else if (tk === '~~') e = !e; else if (tk === '[[') ans = true; else if (tk === ']]') ans = false;
      else if (tk) {
        if (ans && mode === 'q') { out.push({ text: '·'.repeat(Math.max(8, Math.round(tk.length * 1.6))), options: { color: 'B8C2CF', fontSize: o.size } }); return; }
        const color = e ? ERR : a ? ACC : cat ? CAT[cat] : ans ? (o.ans || o.catColor || OK) : (o.color || INK);
        out.push({ text: tk, options: { bold: b || a || (ans && mode === 'a') || !!o.bold || (!!cat && !o.lightCat), italic: it || !!o.italic, color, strike: e ? 'sngStrike' : undefined, fontSize: o.size } });
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
  const plainOf = (str) => String(str).replace(/\*\*|\/\/|\{|\}|~~|\[\[|\]\]|<(?:N|V|A|D|DE|HET|OK)>|<\/>/g, '');
  const box = (s, x, y, w, h, o = {}) => s.addShape(d.S.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: o.r ?? 0.1, fill: { color: o.fill || 'FFFFFF' },
    line: o.line ? { color: o.line, width: o.lw || 1, dashType: o.dash } : { color: 'FFFFFF', width: 0, transparency: 100 },
    shadow: o.shadow ? { type: 'outer', color: '1B2430', opacity: 0.1, blur: 6, offset: 2, angle: 90 } : undefined,
  });
  const circle = (s, cx, cy, r, fill, line) => s.addShape(d.S.OVAL, { x: cx - r, y: cy - r, w: 2 * r, h: 2 * r, fill: { color: fill }, line: line ? { color: line, width: 1.25 } : { color: 'FFFFFF', width: 0, transparency: 100 } });
  const line = (s, x1, y1, x2, y2, c = LINE, lw = 1.25, arrow = false) => d.line(s, x1, y1, x2, y2, { color: c, lw, arrow: arrow ? 'triangle' : false });

  // ---------------------------------------------------------------- le cadre d'une diapo
  // kicker : la petite ligne en capitales au-dessus du titre · map : le carrefour miniature (« vous êtes ici »)
  const page = (g, kicker, title, o = {}) => {
    const s = d.slide(o.dark ? 'AF_DARK' : 'AF_PAGE');
    s.addText(title, { placeholder: 'title', ...(plainOf(title).length > 44 ? { fontSize: 26 } : {}) });
    if (kicker) txt(s, o.dark ? kicker : kicker.replace(/\b(VERBE|NOM|ADJECTIF|ADVERBE)\b/g, (w) => `<${{ VERBE: 'V', NOM: 'N', ADJECTIF: 'A', ADVERBE: 'D' }[w]}>${w}</>`), 1.5, 0.28, 10.33, 0.3, { size: 11, bold: true, color: o.dark ? 'F2B36B' : (o.kc || NAVY), align: 'center', cs: 3 });
    if (o.stars) txt(s, o.stars, 11.4, 0.28, 1.33, 0.3, { size: 13, color: o.dark ? 'C9D4E2' : CAT.A, align: 'right' });
    if (o.map) mini(s, o.map);
    s.addNotes(d.notesFor(g, !!o.correction, o.notes));
    return s;
  };
  // la formule, centrée dans une pastille claire
  const formula = (s, str, y = 1.58, size = 21) => {
    const w = measure(plainOf(str), size, true) + 0.9;
    box(s, 6.665 - w / 2, y, w, 0.62, { fill: ACC_SOFT, r: 0.31 });
    txt(s, str, 6.665 - w / 2, y, w, 0.62, { size, bold: true, color: NAVY, align: 'center' });
  };
  // un encadré discret : ✓ la règle · ! attention · + en plus
  const note = (s, kind, title, lines, x, y, w, h = 1.0) => {
    const c = kind === '!' ? KO : kind === '+' ? ACC : OK;
    box(s, x, y, w, h, { fill: kind === '!' ? KO_SOFT : kind === '+' ? ACC_SOFT : OK_SOFT, r: 0.1 });
    circle(s, x + 0.36, y + 0.36, 0.17, c);
    txt(s, kind === '!' ? '!' : kind === '+' ? '+' : '✓', x + 0.19, y + 0.19, 0.34, 0.34, { size: 12, bold: true, color: 'FFFFFF', align: 'center' });
    txt(s, `**${title}**`, x + 0.68, y + 0.12, w - 0.85, 0.32, { size: 13, color: c });
    txt(s, lines, x + 0.68, y + 0.44, w - 0.85, h - 0.52, { size: 14, valign: 'top', gap: 2 });
  };
  const notes2 = (s, a, b, y = 5.72, h = 1.0) => { note(s, ...a, 0.9, y, 5.62, h); note(s, ...b, 6.82, y, 5.62, h); };
  const note1 = (s, a, y = 5.72, h = 1.0, w = 9.2) => note(s, ...a, 6.665 - w / 2, y, w, h);
  // une phrase de conclusion, centrée, sans bandeau
  const takeaway = (s, str, y = 6.35) => txt(s, str, 0.9, y, 11.53, 0.45, { size: 16, italic: true, color: NAVY, align: 'center' });

  // ---------------------------------------------------------------- le tableau sobre
  // rows[0] = en-têtes (petites capitales) ; o : { x, y, w, colW, align, size, rowH, mode, first (1re colonne en gras bleu nuit) }
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
      const cc = o.cats && o.cats[ci] ? CAT[o.cats[ci]] : null;
      return {
        text: head ? runs(String(c).toUpperCase(), { size: 11.5, bold: true, color: cc || NAVY }) : runs(c, { size, color: cc || INK, catColor: cc, ans: o.ans, bold: (o.first && ci === 0) || (cc && o.boldCats !== false) ? true : undefined }, o.mode),
        options: { fill: { color: head ? 'FFFFFF' : (o.zebra && ri % 2 === 0 ? SOFT : 'FFFFFF') }, align: span > 1 ? (o.headAlign || 'center') : al(ci), valign: 'middle', border: [none, none, bottom, none], charSpacing: head ? 2 : undefined, ...(span > 1 ? { colspan: span } : {}) },
      };
    }).filter(Boolean));
    s.addTable(data, { x, y, w, colW, rowH: o.rowH || 0.5, fontFace: FONT, fontSize: size, margin: [0.03, 0.1, 0.03, 0.1], autoPage: false });
  };

  // ---------------------------------------------------------------- le carrefour miniature (monochrome)
  function mini(s, act) {
    const Pn = { N: [12.2, 0.42], V: [11.72, 1.12], A: [12.68, 1.12] }; const r = 0.16;
    [['N', 'V'], ['N', 'A'], ['V', 'A']].forEach(([a, b]) => line(s, Pn[a][0], Pn[a][1], Pn[b][0], Pn[b][1], LINE, 1.25));
    if (act && Pn[act[0]] && Pn[act[1]]) {
      const [a, b] = [Pn[act[0]], Pn[act[1]]]; const dx = b[0] - a[0]; const dy = b[1] - a[1]; const L = Math.hypot(dx, dy);
      d.line(s, a[0] + dx / L * r, a[1] + dy / L * r, b[0] - dx / L * (r + 0.02), b[1] - dy / L * (r + 0.02), { color: ACC, lw: 2.75 });
    }
    Object.entries(Pn).forEach(([k, [x, y]]) => {
      circle(s, x, y, r, CAT[k]);
      txt(s, `**${k}**`, x - r, y - r, 2 * r, 2 * r, { size: 9, color: 'FFFFFF', align: 'center' });
    });
    if (act === 'AD') txt(s, '**= D**', 12.88, 0.98, 0.45, 0.3, { size: 9, color: CAT.D });
  }

  // ================================================================ 1 couverture
  d.section(d.L.open);
  {
    const s = d.slide('N1_COVER');
    s.addText('Werken,\nde werking,\nwerkbaar', { placeholder: 'title' });
    s.addText([{ text: 'La dérivation : passer d’une catégorie de mot à l’autre', options: { italic: true, breakLine: true } }, { text: ' ', options: { breakLine: true, fontSize: 10 } }, { text: 'nom · verbe · adjectif · adverbe', options: { bold: true, color: 'FFFFFF' } }], { placeholder: 'body' });
    box(s, 0.6, 0.7, 2.75, 0.42, { fill: CAT.A, r: 0.06 });
    txt(s, '**COMPLÉMENT · A2–B1**', 0.6, 0.7, 2.75, 0.42, { size: 13, color: 'FFFFFF', align: 'center', cs: 1 });
    s.addNotes(d.notesFor(1));
    box(s, 7.2, 1.35, 5.5, 4.35, { fill: 'FFFFFF', r: 0.14 });
    circle(s, 8.35, 3.52, 0.62, NAVY);
    txt(s, '**werk-**', 7.73, 3.2, 1.24, 0.64, { size: 18, color: 'FFFFFF', align: 'center' });
    [['VERBE', 'V', 'werk{en}', 2.05], ['NOM', 'N', 'de werk{ing}', 2.95], ['ADJECTIF', 'A', 'werk{baar}', 3.85], ['NOM', 'N', 'de werk{loosheid}', 4.75]].forEach(([k, kk, w, y]) => {
      line(s, 8.97, 3.52, 9.55, y + 0.25, CAT[kk], 1.25);
      txt(s, k, 9.65, y - 0.1, 2.9, 0.26, { size: 9.5, bold: true, color: CAT[kk], cs: 2 });
      txt(s, `//<${kk}>${w}</>//`, 9.65, y + 0.12, 2.9, 0.42, { size: 19, color: NAVY });
    });
  }

  // ================================================================ 2 mission
  d.section('Découvrir');
  {
    const s = page(2, 'MISSIE', 'Missie van vandaag');
    [['FaSearch', 'Reconnaître', 'la catégorie d’un mot grâce à son suffixe', CAT.N, TINT.N], ['FaCogs', 'Transformer', 'verbe → nom, nom → adjectif… avec la bonne règle', ACC, ACC_SOFT], ['FaPenFancy', 'Écrire', 'en style verbal (oral) ou nominal (écrit)', CAT.A, TINT.A]].forEach(([ic, h, t, c, tint], i) => {
      const x = 1.45 + i * 3.65; const cx = x + 1.6;
      circle(s, cx, 2.85, 0.56, tint);
      d.icon(s, ic, c, cx - 0.26, 2.59, 0.52);
      txt(s, `**${h}**`, x, 3.65, 3.2, 0.5, { size: 22, color: c, align: 'center' });
      txt(s, t, x + 0.2, 4.15, 2.8, 0.9, { size: 16, color: MUTED, align: 'center', valign: 'top' });
    });
    takeaway(s, 'Un mot connu = toute une famille de mots en plus.', 5.75);
  }

  // ================================================================ 3 échauffement
  {
    const s = page(3, 'ÉCHAUFFEMENT', 'Une racine, toute une famille');
    const cx = 6.665; const cy = 3.75;
    circle(s, cx, cy, 0.62, NAVY);
    txt(s, '**werk-**', cx - 0.62, cy - 0.32, 1.24, 0.64, { size: 22, color: 'FFFFFF', align: 'center' });
    ['het werk', 'werk{en}', 'de werk{er}', 'de werk{ing}', 'werk{loos}', 'de werk{loosheid}', 'werk{baar}', '{be}werk{en}'].forEach((t, i) => {
      const a = (-90 + i * 45) * Math.PI / 180; const x = cx + Math.cos(a) * 3.9; const y = cy + Math.sin(a) * 1.75;
      const w = measure(plainOf(t), 19, true) + 0.5;
      line(s, cx + Math.cos(a) * 0.66, cy + Math.sin(a) * 0.66, x - Math.cos(a) * w / 2, y - Math.sin(a) * 0.28, LINE, 1.25);
      box(s, x - w / 2, y - 0.28, w, 0.56, { fill: 'FFFFFF', line: LINE, r: 0.28 });
      txt(s, `//${t}//`, x - w / 2, y - 0.28, w, 0.56, { size: 19, color: NAVY, align: 'center' });
    });
    takeaway(s, 'Nom, verbe ou adjectif ? Quel petit morceau change la catégorie ?', 6.2);
  }

  // ================================================================ 4 les catégories
  {
    const s = page(4, 'RAPPEL', 'Quatre catégories, quatre rôles');
    const P4 = [['De', ''], ['nieuwe', 'ADJ.'], ['collega', 'NOM'], ['werkt', 'VERBE'], ['snel', 'ADV.'], ['aan', ''], ['het rapport.', 'NOM']];
    const K4 = { 'ADJ.': CAT.A, NOM: CAT.N, VERBE: CAT.V, 'ADV.': CAT.D };
    const tw = P4.reduce((t, [w]) => t + measure(w, 26, true) + 0.28, 0); let x = 6.665 - tw / 2;
    P4.forEach(([w, k]) => {
      const ww = measure(w, 26, true) + 0.28;
      txt(s, `//${k ? `**${w}**` : w}//`, x, 1.55, ww, 0.6, { size: 26, color: k ? K4[k] : MUTED, align: 'center' });
      if (k) { line(s, x + 0.08, 2.17, x + ww - 0.08, 2.17, K4[k], 1.5); txt(s, k, x - 0.2, 2.22, ww + 0.4, 0.28, { size: 10, bold: true, color: K4[k], align: 'center', cs: 2 }); }
      x += ww;
    });
    table(s, [['Catégorie', 'On la reconnaît…', 'Exemple', 'Son rôle'],
      ['<N>nom</>', '//de / het// devant · un pluriel', '//<N>de collega · het rapport</>//', 'sujet ou complément'],
      ['<V>verbe</>', 'il se conjugue', '//<V>ik werk · hij werkte</>//', 'le cœur de la phrase'],
      ['<A>adjectif</>', 'avant le nom (+ //-e//) ou après //zijn//', '//de <A>nieuwe</> collega//', 'décrit un nom'],
      ['<D>adverbe</>', 'il dit comment, quand, où', '//Ze werkt <D>snel</>.//', 'décrit un verbe']], { y: 2.85, colW: [1.9, 3.7, 3.33, 2.6], rowH: 0.55, first: true, align: ['left', 'left', 'left', 'left'] });
    takeaway(s, 'Dériver = changer la **catégorie** d’un mot… donc son **rôle** dans la phrase.', 6.15);
  }

  // ================================================================ 5 le carrefour
  {
    const s = page(5, 'LA CARTE', 'Le carrefour des catégories');
    const N = [6.665, 2.2]; const V = [3.55, 5.15]; const A = [9.78, 5.15]; const r = 0.6;
    const arrow = (Pp, Q, off) => {
      const dx = Q[0] - Pp[0]; const dy = Q[1] - Pp[1]; const L = Math.hypot(dx, dy); const ux = dx / L; const uy = dy / L; const nx = -uy * off; const ny = ux * off;
      d.line(s, Pp[0] + ux * (r + 0.05) + nx, Pp[1] + uy * (r + 0.05) + ny, Q[0] - ux * (r + 0.1) + nx, Q[1] - uy * (r + 0.1) + ny, { color: Q === N ? CAT.N : Q === V ? CAT.V : CAT.A, lw: 1.75 });
    };
    [[V, N], [N, V], [N, A], [A, N], [V, A], [A, V]].forEach(([a, b]) => arrow(a, b, 0.12));
    [['NOM', N, CAT.N], ['VERBE', V, CAT.V], ['ADJECTIF', A, CAT.A]].forEach(([k, [x, y], c]) => { circle(s, x, y, r, c); txt(s, `**${k}**`, x - r - 0.2, y - 0.2, 2 * r + 0.4, 0.4, { size: 12.5, color: 'FFFFFF', align: 'center', cs: 1 }); });
    circle(s, 11.85, 5.15, 0.42, CAT.D); txt(s, '**ADVERBE**', 11.33, 4.99, 1.04, 0.32, { size: 9, color: 'FFFFFF', align: 'center' });
    txt(s, '**=**', 10.55, 4.9, 0.62, 0.5, { size: 22, color: CAT.D, align: 'center' });
    txt(s, '//le suffixe décide//', 5.4, 3.75, 2.53, 0.4, { size: 14, color: ACC, align: 'center' });
    const lab = (x, y, w, h, t, sfx, al = 'left') => { txt(s, `**${t.replace(/\b(VERBE|NOM|ADJECTIF|ADVERBE)\b/g, (m) => `<${{ VERBE: 'V', NOM: 'N', ADJECTIF: 'A', ADVERBE: 'D' }[m]}>${m}</>`)}**`, x, y, w, 0.28, { size: 10.5, color: MUTED, align: al, cs: 1 }); txt(s, `{${sfx}}`, x, y + 0.28, w, h, { size: 14.5, align: al, valign: 'top' }); };
    lab(0.7, 2.25, 4.6, 0.6, 'VERBE → NOM', 'het + inf. · radical · -ing · -er · -atie', 'right');
    lab(0.7, 3.2, 3.95, 0.6, 'NOM → VERBE', '+ -en · -eren · be-', 'right');
    lab(8.05, 2.25, 4.6, 0.6, 'ADJECTIF → NOM', '-heid · -te · -iteit');
    lab(8.7, 3.2, 3.95, 0.6, 'NOM → ADJECTIF', '-ig · -lijk · -isch · -loos · -en');
    lab(4.4, 5.9, 2.4, 0.6, 'VERBE → ADJECTIF', '-baar · -end · participe', 'center');
    lab(6.6, 5.9, 2.4, 0.6, 'ADJECTIF → VERBE', 'ver- … -en', 'center');
    lab(10.35, 5.85, 2.6, 0.6, 'ADJECTIF = ADVERBE', 'rien ne change !', 'center');
  }

  // ================================================================ 6 les briques
  {
    const s = page(6, 'LE PRINCIPE', 'Préfixe + racine + suffixe');
    const R = [[['on-', 'be-'], 'reik', 'V', ['-baar'], 'onbereikbaar', 'A', 'adjectif', 'injoignable'], [['ver-'], 'groot', 'A', ['-en'], 'vergroten', 'V', 'verbe', 'agrandir'], [[], 'werk', 'N', ['-loos', '-heid'], 'de werkloosheid', 'N', 'nom', 'le chômage']];
    R.forEach(([pre, root, rk, suf, res, k, cat, fr], i) => {
      const y = 1.75 + i * 1.05; let x = 1.3;
      const brick = (t, c) => { const w = measure(t, 20, true) + 0.4; box(s, x, y, w, 0.62, { fill: c, r: 0.08 }); txt(s, `**${t}**`, x, y, w, 0.62, { size: 20, color: 'FFFFFF', align: 'center' }); x += w + 0.08; };
      pre.forEach((t) => brick(t, ACC)); brick(root, CAT[rk]); suf.forEach((t) => brick(t, ACC));
      txt(s, '→', 6.0, y, 0.6, 0.62, { size: 22, color: MUTED, align: 'center' });
      txt(s, `//**${res}**//`, 6.7, y, 3.2, 0.62, { size: 21, color: CAT[k] });
      txt(s, [`**${cat}**`, `« ${fr} »`], 9.9, y - 0.02, 2.6, 0.66, { size: 13, color: CAT[k] });
    });
    table(s, [['{Préfixe}', 'Racine', '{Suffixe}'], ['change le **sens**', 'porte l’**idée**', 'décide la **catégorie** et l’**article**'], ['//{on}bereikbaar// = le contraire', '//reik, groot, werk//', '//-{baar}// → adjectif · //-{heid}// → //de//']], { y: 5.05, colW: [3.6, 3.0, 4.93], rowH: 0.48, size: 14.5 });
  }

  // ================================================================ 7 het + infinitif
  d.section('Verbe → nom');
  {
    const s = page(7, 'VERBE → NOM', 'L’action : het + infinitif', { map: 'VN', notes: 'Sur les panneaux et dans les règlements : Het parkeren is verboden. Het betreden van het gras is verboden.' });
    formula(s, '{het} + infinitif = le fait de…');
    table(s, [['Verbe', 'Nom', 'Exemple'], ['//roken//', '//{het} roken//', '//Het roken is hier verboden.//'], ['//betalen//', '//{het} betalen//', '//Het betalen kan met de kaart.//'], ['//leren//', '//{het} leren//', '//Het leren van een taal kost tijd.//']], { y: 2.5, colW: [2.2, 2.4, 6.93], rowH: 0.56, align: ['center', 'center', 'left'], cats: ['V', 'N', null] });
    notes2(s, ['✓', 'La règle', 'toujours possible · toujours //het// · pas de pluriel'], ['+', 'het ge- + radical', 'l’action qui se répète : //praten → het {ge}praat//'], 5.0, 1.0);
  }

  // ================================================================ 8 -ing
  {
    const s = page(8, 'VERBE → NOM', 'radical + -ing = de …ing', { map: 'VN', notes: 'Le sens glisse parfois vers le résultat : de lezing = la conférence (la lecture = het lezen) ; de woning = le logement ; de regering = le gouvernement ; de opleiding = la formation. -ing est très fréquent avec un préfixe ou une particule : be-, ver-, uit-, op-… Pluriel en -en : de vergaderingen.' });
    formula(s, 'radical + {-ing} → de …');
    table(s, [['Verbe', 'Nom', 'Sens'], ['//vergaderen//', '//de vergader{ing}//', 'la réunion'], ['//betalen//', '//de betal{ing}//', 'le paiement'], ['//verwarmen//', '//de verwarm{ing}//', 'le chauffage'], ['//uitnodigen//', '//de uitnodig{ing}//', 'l’invitation']], { y: 2.5, w: 9.0, rowH: 0.5, cats: ['V', 'N', null] });
    notes2(s, ['✓', 'La règle', 'toujours //de// · pluriel //-en//'], ['!', 'Pas avec tous les verbes', '~~//de eting//~~ → //het eten// · en cas de doute : //het// + infinitif'], 5.35, 1.0);
  }

  // ================================================================ 9 le radical seul
  {
    const s = page(9, 'VERBE → NOM', 'Le radical seul : de start, het begin', { map: 'VN', notes: 'Le radical seul désigne l’acte ou le résultat : de start, het vertrek, de vraag. Autres exceptions : de verhuis (BE, verhuizen) ; het spel. Vérifiez l’article au dictionnaire.' });
    formula(s, 'le radical seul = l’acte ou le résultat');
    const vn = (v, n) => `//<V>${v}</> → <N>${n}</>//`;
    table(s, [['<DE>de</> + radical', '<HET>het</> + radical (be-, ge-, ver-)', '{la voyelle change}'],
      [vn('starten', 'de start'), vn('beginnen', 'het begin'), vn('springen', 'de sprong')], [vn('wensen', 'de wens'), vn('gebruiken', 'het gebruik'), vn('grijpen', 'de greep')],
      [vn('vragen', 'de vraag'), vn('vertrekken', 'het vertrek'), vn('spreken', 'het gesprek')], [vn('groeien', 'de groei'), vn('bezoeken', 'het bezoek'), vn('verbieden', 'het verbod')]], { y: 2.5, rowH: 0.5 });
    note1(s, ['!', 'À retenir', '//**de** verkoop// (verkopen) · //**het** slot// (sluiten) · //**het** werk// : vérifiez l’article'], 5.35, 1.0);
  }

  // ================================================================ 10 -er, -aar, -der
  {
    const s = page(10, 'VERBE → NOM', 'Qui fait l’action ? -er, -aar, -der', { map: 'VN', notes: 'Au féminin, si on le précise : -ster (de verkoopster, de schrijfster), -es (de lerares), -in (de vriendin). Souvent la même forme pour tous : de manager, de collega, de dokter. Attention : leren → de leraar (-aar malgré l’accent).' });
    table(s, [['Suffixe', 'Quand ?', 'Exemples'],
      ['{-er}', 'le cas normal', '//de werk{er} · de bakk{er} · de schrijv{er}//'],
      ['{-aar}', 'après //-el, -er, -en// non accentué', '//de wandel{aar} · de luister{aar} · de tekn{aar}//'],
      ['{-der}', 'radical en //-r//', '//de bestuur{der} · de huur{der} · de bewaar{der}//'],
      ['{-er}', 'l’appareil', '//de print{er} · de wekk{er} · de aanstek{er}//']], { y: 1.75, colW: [1.5, 3.8, 6.23], rowH: 0.62, align: ['center', 'left', 'left'], size: 17, cats: [null, null, 'N'] });
    notes2(s, ['+', 'Au féminin', '//-ster, -es, -in// : //de verkoopster, de lerares, de vriendin//'], ['!', 'À retenir', '//leren → de leraar// · souvent une seule forme : //de collega//'], 5.2, 1.0);
  }

  // ================================================================ 11 -eren → -atie
  {
    const s = page(11, 'VERBE → NOM', 'Le pont des francophones : -eren → -atie', { map: 'VN', notes: 'Les verbes en -eren viennent souvent du français : le nom ressemble au mot français en -tion. L’accent tombe avant -tie : informatie. Dans l’autre sens (diapo 18) : de organisatie → organiseren. Aux Pays-Bas : de reservering.' });
    formula(s, '-{eren} → -{atie} · le français -tion');
    table(s, [['Verbe', 'Nom', 'Français'], ['//organis{eren}//', '//de organis{atie}//', 'l’organisation'], ['//inform{eren}//', '//de inform{atie}//', 'l’information'], ['//present{eren}//', '//de present{atie}//', 'la présentation'], ['//communic{eren}//', '//de communic{atie}//', 'la communication'], ['//reserv{eren}//', '//de reserv{atie}//', 'la réservation (BE)']], { y: 2.45, w: 9.5, rowH: 0.46, cats: ['V', 'N', null] });
    notes2(s, ['✓', 'La règle', 'toujours //de// · l’accent avant //-tie// : //infor**ma**tie//'], ['!', 'Exceptions', '//de controle · de discussie · de reservering// (NL)'], 5.45, 0.95);
  }

  // ================================================================ 12 -heid ou -te
  d.section('Adjectif → nom');
  {
    const s = page(12, 'ADJECTIF → NOM', 'La qualité : -heid ou -te ?', { map: 'AN', notes: 'Pluriel : -heden, -tes (de mogelijkheden). En cas de doute, -heid est le plus fréquent et le plus productif. Autres exceptions : lang → de lengte (la voyelle change), koud → de kou(de).' });
    table(s, [['{-heid} · la qualité', ''], ['//vrij//', '//de vrij{heid}//'], ['//gezond//', '//de gezond{heid}//'], ['//snel//', '//de snel{heid}//'], ['//mogelijk//', '//de mogelijk{heid}//']], { x: 0.9, w: 5.5, colW: [2.2, 3.3], y: 1.75, rowH: 0.56, size: 17, cats: ['A', 'N'] });
    table(s, [['{-te} · la mesure, la sensation', ''], ['//lang//', '//de leng{te}//'], ['//warm//', '//de warm{te}//'], ['//hoog//', '//de hoog{te}//'], ['//breed//', '//de breed{te}//']], { x: 6.93, w: 5.5, colW: [2.2, 3.3], y: 1.75, rowH: 0.56, size: 17, cats: ['A', 'N'] });
    notes2(s, ['✓', 'La règle', 'toujours //de// · en cas de doute : //-heid//'], ['!', 'Exceptions', '//ziek → de ziek{te}// · //lief → de lief{de}// · //koud → de kou(de)//'], 5.05, 1.0);
  }

  // ================================================================ 13 -iteit, l'adjectif devenu nom
  {
    const s = page(13, 'ADJECTIF → NOM', '-iteit, et l’adjectif devenu nom', { map: 'AN', notes: 'Le français fait pareil : « le difficile, c’est… », « les malades ». De nieuwe begint maandag : la nouvelle / le nouveau.' });
    table(s, [['{-iteit} = le français -ité', ''], ['//actief//', '//de activ{iteit}//'], ['//creatief//', '//de creativ{iteit}//'], ['//flexibel//', '//de flexibil{iteit}//'], ['//populair//', '//de popular{iteit}//']], { x: 0.9, w: 5.5, colW: [2.2, 3.3], y: 1.75, rowH: 0.56, size: 17, cats: ['A', 'N'] });
    txt(s, '**L’ADJECTIF DEVIENT NOM**', 6.93, 1.78, 5.5, 0.4, { size: 11.5, color: NAVY, align: 'center', cs: 2 });
    line(s, 6.93, 2.24, 12.43, 2.24, NAVY, 1.25);
    [['{het} + <A>adjectif</> + {-e} = « ce qui est… »', '//<N>Het leuke</> is dat we thuis werken.//'], ['{de} + <A>adjectif</> + {-e(n)} = les personnes', '//<N>de zieken · de ouderen · de werklozen</>//']].forEach(([f, ex], i) => {
      const y = 2.45 + i * 1.12;
      txt(s, f, 6.93, y, 5.5, 0.42, { size: 16, bold: true, color: NAVY, align: 'center' });
      txt(s, ex, 6.93, y + 0.42, 5.5, 0.45, { size: 16, align: 'center' });
    });
    note1(s, ['✓', 'La règle', '//-iteit// : toujours //de// · l’adjectif devenu nom prend l’article et //-e//'], 5.15, 0.95);
  }

  // ================================================================ 14 -ig, -lijk, -isch
  d.section('Nom → adjectif');
  {
    const s = page(14, 'NOM → ADJECTIF', 'Trois suffixes : -ig, -lijk, -isch', { map: 'NA', notes: '-ig = qui a… ; -lijk = qui est comme… ; -isch = le français -ique. Orthographe : voyelle courte → consonne double (de zon → zonnig, diapo 23). Prononciation : -lijk se dit [lək]. Avec -e de liaison : vriendelijk, vrouwelijk ; avec -s : dagelijks.' });
    table(s, [['{-ig} · qui a…', '{-lijk} · qui est comme…', '{-isch} · = -ique'],
      ...[[['de zon', 'zonn{ig}'], ['de vriend', 'vriende{lijk}'], ['de techniek', 'techn{isch}']], [['het geluk', 'geluk{kig}'], ['het gevaar', 'gevaar{lijk}'], ['de logica', 'log{isch}']],
        [['de moed', 'moed{ig}'], ['de natuur', 'natuur{lijk}'], ['de praktijk', 'prakt{isch}']], [['de honger', 'honger{ig}'], ['de vrouw', 'vrouwe{lijk}'], ['de economie', 'econom{isch}']]].map((r) => r.map(([n, a]) => `//<N>${n}</> → <A>${a}</>//`))], { y: 1.75, rowH: 0.56, size: 16 });
    note1(s, ['!', 'À retenir', '//de wind → winderig · de nood → nodig · dagelijks · de politiek → politiek// (même mot)'], 5.0, 1.0, 10.4);
  }

  // ================================================================ 15 -loos, -vol, -rijk, -en
  {
    const s = page(15, 'NOM → ADJECTIF', 'Sans ou plein de : -loos, -vol, -rijk', { map: 'NA', notes: 'werkloos = sans emploi · draadloos = sans fil. -e- de liaison : hopeloos, nutteloos. Les adjectifs de matière en -en sont invariables (M21) : een houten tafel ; plastic ne change pas.' });
    table(s, [['Nom', '{-loos} · sans', '{-vol · -rijk} · plein de'], ['//de hoop//', '//hope{loos}//', '//hoop{vol}//'], ['//de zin//', '//zin{loos}//', '//zin{vol}//'], ['//de waarde//', '//waarde{loos}//', '//waarde{vol}//'], ['//de kleur//', '//kleur{loos}//', '//kleur{rijk}//']], { x: 0.9, w: 7.0, y: 1.75, rowH: 0.56, size: 17, cats: ['N', 'A', 'A'] });
    table(s, [['{-en} · la matière', ''], ['//het hout//', '//hout{en}//'], ['//het goud//', '//goud{en}//'], ['//het glas//', '//glaz{en}//'], ['//de wol//', '//woll{en}//']], { x: 8.33, w: 4.1, colW: [2.0, 2.1], y: 1.75, rowH: 0.56, size: 17, cats: ['N', 'A'] });
    notes2(s, ['✓', 'Des paires de contraires', '//hopeloos ↔ hoopvol · zinloos ↔ zinvol//'], ['!', 'Invariables', '//-en// de matière ne prend pas de //-e// : //een houten tafel//'], 5.05, 1.0);
  }

  // ================================================================ 16 -baar
  d.section('Verbe → adjectif');
  {
    const s = page(16, 'VERBE → ADJECTIF', 'radical + -baar = « qu’on peut… »', { map: 'VA', notes: 'Le radical est la forme de ik : lezen → ik lees → leesbaar ; eten → ik eet → eetbaar. Mots d’origine française : acceptabel, flexibel, rendabel.' });
    formula(s, 'radical + {-baar} = -able');
    table(s, [['Verbe', 'Adjectif', 'Sens'], ['//drinken//', '//drink{baar}//', 'potable'], ['//eten//', '//eet{baar}//', 'comestible'], ['//betalen//', '//betaal{baar}//', 'abordable'], ['//bereiken//', '//bereik{baar}//', 'accessible, joignable'], ['//lezen//', '//lees{baar}//', 'lisible']], { y: 2.45, w: 9.0, rowH: 0.46, cats: ['V', 'A', null] });
    notes2(s, ['✓', 'Le contraire : on-', '//{on}betaalbaar · {on}leesbaar//'], ['!', 'Exceptions', '//zien → zicht{baar}// · //gebruiken → bruik{baar}//'], 5.45, 0.95);
  }

  // ================================================================ 17 les participes
  {
    const s = page(17, 'VERBE → ADJECTIF', 'Les participes deviennent adjectifs', { map: 'VA', notes: 'Participe présent : infinitif + -d = « -ant » (een spannende film). Participe passé : pas de ge- après be-, ver- (vermoeid). Attention : interessant = intéressant ; geïnteresseerd = intéressé.' });
    table(s, [['Participe présent · « -ant »', ''], ['//boeien//', '//<A>boeien{d}</>// · passionnant'], ['//spannen//', '//<A>spannen{d}</>// · palpitant'], ['//opvallen//', '//<A>opvallen{d}</>// · frappant'], ['//dringen//', '//<A>dringen{d}</>// · urgent']], { x: 0.9, w: 5.5, colW: [1.9, 3.6], y: 1.75, rowH: 0.56, size: 16, align: ['center', 'left'], cats: ['V', null] });
    table(s, [['Participe passé · « -é »', ''], ['//sluiten//', '//<A>{ge}slot{en}</>// · fermé'], ['//trouwen//', '//<A>{ge}trouw{d}</>// · marié'], ['//vermoeien//', '//<A>vermoei{d}</>// · fatigué'], ['//interesseren//', '//<A>{ge}ïnteresseer{d}</>// · intéressé']], { x: 6.93, w: 5.5, colW: [1.9, 3.6], y: 1.75, rowH: 0.56, size: 16, align: ['center', 'left'], cats: ['V', null] });
    note1(s, ['!', 'Le -e de l’adjectif (M21)', 'participe en //-en// : pas de //-e// en plus → //de gesloten deur// · //een spannende film//'], 5.05, 1.0, 10.4);
  }

  // ================================================================ 18 nom → verbe
  d.section('Vers le verbe');
  {
    const s = page(18, '→ VERBE', 'Du nom au verbe : + -en', { map: 'NV', notes: 'Très productif avec les mots anglais : appen, googelen, sms’en, filmen. Et -eren pour les mots français : de organisatie → organiseren ; de controle → controleren. be- + nom donne un verbe avec un complément direct : het antwoord → beantwoorden (een vraag beantwoorden).' });
    formula(s, 'nom + {-en} = verbe');
    table(s, [['Nom', 'Verbe'], ['//de fiets//', '//fiets{en}//'], ['//de mail//', '//mail{en}//'], ['//de hamer//', '//hamer{en}//'], ['//het tennis//', '//tenniss{en}//'], ['//de ski//', '//skiën//']], { y: 2.45, w: 6.0, rowH: 0.46, cats: ['N', 'V'] });
    notes2(s, ['!', 'Orthographe', '//tenni**ss**en, cha**tt**en// · tréma : //skiën// · //sms’en//'], ['+', 'be- + nom', '//het antwoord → {be}antwoorden// (+ complément direct)'], 5.45, 0.95);
  }

  // ================================================================ 19 ver- … -en
  {
    const s = page(19, '→ VERBE', 'Rendre plus… : ver- + adjectif + -en', { map: 'AV', notes: 'Avec le comparatif : verbeteren, verergeren, verminderen. Le contraire se forme avec un autre adjectif : vergroten ↔ verkleinen, verlengen ↔ verkorten. (ge)makkelijk → vergemakkelijken.' });
    formula(s, '{ver-} + adjectif + {-en} = rendre plus…');
    table(s, [['Adjectif', 'Verbe', 'Sens', 'Adjectif', 'Verbe', 'Sens'], ['//groot//', '//{ver}grot{en}//', 'agrandir', '//klein//', '//{ver}klein{en}//', 'réduire'], ['//beter//', '//{ver}beter{en}//', 'améliorer', '//warm//', '//{ver}warm{en}//', 'chauffer'], ['//nieuw//', '//{ver}nieuw{en}//', 'renouveler', '//lang//', '//{ver}leng{en}//', 'prolonger']], { y: 2.45, colW: [1.5, 2.2, 1.95, 1.5, 2.2, 2.18], rowH: 0.52, cats: ['A', 'V', null, 'A', 'V', null] });
    note1(s, ['!', 'Exceptions', 'la voyelle change : //lang → verl**e**ngen// · sans //ver-// : //open → openen · leeg → legen//'], 5.0, 1.0, 10.4);
  }

  // ================================================================ 20 adjectif = adverbe
  d.section('Adjectif et adverbe');
  {
    const s = page(20, 'ADJECTIF = ADVERBE', 'L’adverbe : pas de -ment !', { map: 'AD', notes: 'Adverbes sans adjectif : helaas (malheureusement), misschien, graag. gelukkig = heureux et heureusement. -erwijs / -gewijs : gelukkigerwijs, stapsgewijs. L’adverbe ne prend jamais de -e.' });
    formula(s, '//een <A>snelle</> auto// = //Hij rijdt <D>snel</>.//');
    table(s, [['Néerlandais', 'Adjectif FR', 'Adverbe FR'], ['//duidelijk//', 'clair', 'clair{ement}'], ['//voorzichtig//', 'prudent', 'prud{emment}'], ['//langzaam//', 'lent', 'lent{ement}'], ['//echt//', 'vrai', 'vrai{ment}'], ['//goed//', 'bon', 'bien']], { y: 2.45, w: 8.0, rowH: 0.46, cats: ['D', 'A', null] });
    notes2(s, ['!', 'Pas de -lijk, pas de -e', '~~//Hij werkt snellijk.//~~ → //Hij werkt <D>snel</>.//'], ['+', 'Adverbes sans adjectif', '//helaas · misschien · graag// · //gelukkig// = heureusement'], 5.45, 0.95);
  }

  // ================================================================ 21 les préfixes
  {
    const s = page(21, 'LES PRÉFIXES', 'Les préfixes changent le sens', { notes: 'Le préfixe garde la catégorie (sauf be- et ver-, qui font des verbes). on- ne marche pas avec tous les adjectifs : ✗ onslecht → goed. Certains sens sont figés : herhalen = répéter.' });
    table(s, [['Préfixe', 'Sens', 'Exemples'],
      ['{on-}', 'le contraire', '//<A>mogelijk → {on}mogelijk · bekend → {on}bekend</>//'], ['{her-}', 'à nouveau (re-)', '//<V>openen → {her}openen · gebruiken → {her}gebruiken</>//'],
      ['{mis-}', 'mal, de travers', '//<V>lukken → {mis}lukken · bruiken → {mis}bruiken</>//'], ['{ont-}', 'enlever, défaire', '//<V>dekken → {ont}dekken · dooien → {ont}dooien</>//']], { y: 1.75, colW: [1.6, 2.6, 7.33], rowH: 0.64, align: ['center', 'left', 'left'], size: 17 });
    note1(s, ['✓', 'La règle', 'le préfixe change le **sens** et garde la **catégorie** (sauf //be-//, //ver-//)'], 5.2, 1.0);
  }

  // ================================================================ 22 la boussole
  d.section('Combiner');
  {
    const s = page(22, 'COMBINER', 'La boussole : le suffixe donne l’article', { notes: 'Comme au M14 : le dernier élément commande. Exceptions à apprendre : het schilderij, de datum, het gebergte, de verkoop.' });
    table(s, [['<DE>de</>', '', '<HET>het</>', ''],
      ['{-ing}', '//<DE>de</> vergadering//', '<HET>het</> + infinitif', '//<HET>het</> roken//'], ['{-heid · -te}', '//<DE>de</> vrijheid · <DE>de</> lengte//', '{ge-} + radical', '//<HET>het</> gepraat//'],
      ['{-iteit · -(a)tie}', '//<DE>de</> kwaliteit · <DE>de</> informatie//', '{-je}', '//<HET>het</> huisje//'], ['{-er · -ster}', '//<DE>de</> leraar//', '{-isme · -ment · -um}', '//<HET>het</> toerisme · <HET>het</> document//'],
      ['{-ij · -erij}', '//<DE>de</> bakkerij//', '{-sel}', '//<HET>het</> mengsel//'], ['{-schap} (relation)', '//<DE>de</> vriendschap//', '{-schap} (statut)', '//<HET>het</> lidmaatschap//']], { y: 1.75, colW: [2.1, 3.65, 2.35, 3.43], rowH: 0.5, align: ['left', 'left', 'left', 'left'], size: 15.5 });
    takeaway(s, 'Le **dernier** élément commande : //{-ing, -heid, -te, -tie}// sont **toujours <DE>de</>**.', 5.55);
  }

  // ================================================================ 23 l'orthographe
  {
    const s = page(23, 'RAPPEL M4', 'L’orthographe suit les règles du M4', { notes: 'Syllabe fermée : deux lettres (lezen → leesbaar). Voyelle courte : bakken → de bakker ; de pot → potten. f / v, s / z : lief → de liefde (f reste devant consonne). Avant d’écrire le mot dérivé : coupez en syllabes et appliquez la règle (M1, M4).' });
    table(s, [['① Voyelle longue', '② Voyelle courte', '③ f / v · s / z'], ['syllabe ouverte : une seule lettre', 'la consonne se double', 'entre deux voyelles : //v, z//'],
      ['//<A>groot</> → <V>ver{gro}ten</>//', '//<N>de zon</> → <A>zo{nn}ig</>//', '//<N>het glas</> → <A>gla{z}en</>//'], ['//<A>droog</> → <V>{dro}gen</>//', '//<A>wit</> → <V>wi{tt}en</>//', '//<N>de reis</> → <V>rei{z}en</>//'], ['//<N>de droom</> → <V>{dro}men</>//', '//<N>het tennis</> → <V>tenni{ss}en</>//', '//<N>het geloof</> → <V>gelo{v}en</>//']], { y: 1.75, rowH: 0.56, size: 16 });
    takeaway(s, 'Avant d’écrire le mot dérivé : **coupez en syllabes**, puis appliquez la règle.', 5.2);
  }

  // ================================================================ 24 la famille werk
  {
    const s = page(24, 'COMBINER', 'La famille werk', { notes: 'Les suffixes s’empilent : nom → adjectif → nom. Chaque suffixe change la catégorie ; le dernier décide (de werkloosheid). Apprenez les mots en familles : un mot connu en donne cinq ou six.' });
    const cx = 4.1; const cy = 3.85;
    circle(s, cx, cy, 0.55, NAVY); txt(s, '**werk-**', cx - 0.55, cy - 0.3, 1.1, 0.6, { size: 19, color: 'FFFFFF', align: 'center' });
    const KK = { radical: 'N', verbe: 'V', nom: 'N', adjectif: 'A' };
    [['het werk', 'radical'], ['werk{en}', 'verbe'], ['de werk{er}', 'nom'], ['de werk{ing}', 'nom'], ['werk{loos}', 'adjectif'], ['de werk{loosheid}', 'nom'], ['werk{baar}', 'adjectif'], ['{be}werk{en}', 'verbe']].forEach(([t, k], i) => {
      const a = (-90 + i * 45) * Math.PI / 180; const x = cx + Math.cos(a) * 2.75; const y = cy + Math.sin(a) * 1.75;
      line(s, cx + Math.cos(a) * 0.6, cy + Math.sin(a) * 0.6, x - Math.cos(a) * 0.9, y - Math.sin(a) * 0.3, CAT[KK[k]], 1.25);
      txt(s, `//<${KK[k]}>${t}</>//`, x - 1.2, y - 0.3, 2.4, 0.42, { size: 17, color: NAVY, align: 'center' });
      txt(s, k, x - 1.2, y + 0.1, 2.4, 0.26, { size: 10.5, color: CAT[KK[k]], align: 'center' });
    });
    txt(s, '**{LES SUFFIXES S’EMPILENT}**', 8.2, 1.85, 4.2, 0.4, { size: 11.5, color: NAVY, align: 'center', cs: 2 });
    line(s, 8.2, 2.3, 12.4, 2.3, ACC, 1.25);
    [['het werk', 'nom', 'N'], ['werk{loos}', 'adjectif', 'A'], ['de werkloos{heid}', 'nom', 'N']].forEach(([t, k, kk], i) => {
      const y = 2.55 + i * 1.08;
      txt(s, `//<${kk}>${t}</>//`, 8.2, y, 4.2, 0.48, { size: 21, bold: true, color: NAVY, align: 'center' });
      txt(s, k, 8.2, y + 0.45, 4.2, 0.26, { size: 11, color: CAT[kk], align: 'center' });
      if (i < 2) txt(s, `↓  {${['-loos', '-heid'][i]}}`, 8.2, y + 0.7, 4.2, 0.34, { size: 14, align: 'center' });
    });
    takeaway(s, 'Le **dernier** suffixe décide la catégorie et l’article.', 6.25);
  }

  // ================================================================ 25 style verbal / style nominal
  {
    const s = page(25, 'COMBINER', 'Style verbal (oral) ↔ style nominal (écrit)', { notes: 'Le style nominal sert à l’écrit : titres, notes de service, e-mails formels. Le verbe devient un nom (-ing, radical…) ; le sujet et le complément passent derrière van ; l’adverbe devient un adjectif (+ -e).' });
    table(s, [['À l’oral : des <V>verbes</>', 'À l’écrit : des <N>noms</>'],
      ['//De prijzen <V>stijgen</>.//', '//<N>De stijging</> van de prijzen//'], ['//We <V>openen</> het nieuwe kantoor.//', '//<N>De opening</> van het nieuwe kantoor//'],
      ['//De trein <V>vertrekt</> om 8 uur.//', '//<N>Het vertrek</> van de trein: 8 uur//'], ['//Je moet <D>snel</> <V>betalen</>.//', '//<A>Snelle</> <N>betaling</> gevraagd//']], { y: 1.75, rowH: 0.56, size: 17 });
    table(s, [['Ce qui change', ''], ['<V>le verbe</>', 'devient un <N>nom</> (//-{ing}//, radical…)'], ['le sujet, le complément', 'passent derrière //{van}//'], ['<D>l’adverbe</>', 'devient un <A>adjectif</> (+ //{-e}//)']], { y: 4.85, w: 8.4, colW: [3.2, 5.2], rowH: 0.42, size: 14.5, align: ['left', 'left'], first: true });
  }

  // ================================================================ 26 les suffixes jumeaux
  {
    const s = page(26, 'FR ↔ NL', 'Les suffixes jumeaux', { notes: 'Le pont aide, le dictionnaire confirme. Faux ami : de lezing = la conférence (la lecture = het lezen).' });
    table(s, [['Français', '', 'Néerlandais', ''],
      ['{-tion}', 'l’information', '{-tie}', '//de informatie//'], ['{-ité}', 'la qualité', '{-iteit}', '//de kwaliteit//'], ['{-ique}', 'technique', '{-isch · -iek}', '//technisch · de techniek//'],
      ['{-able}', 'payable · acceptable', '{-baar · -abel}', '//betaalbaar · acceptabel//'], ['{-er} (verbe)', 'informer', '{-eren}', '//informeren//'], ['{-isme}', 'le tourisme', '{-isme} (het)', '//het toerisme//'], ['{-iste}', 'le journaliste', '{-ist}', '//de journalist//']],
    { y: 1.65, colW: [1.7, 3.35, 2.15, 4.33], rowH: 0.47, align: ['left', 'left', 'left', 'left'], size: 15.5 });
    note1(s, ['!', 'Faux ami', '//de lezing// = la **conférence** (la lecture = //het lezen//)'], 5.6, 0.95, 7.6);
  }

  // ================================================================ 27 six pièges
  {
    const s = page(27, 'PIÈGES', 'Six pièges à éviter');
    table(s, [['Le piège', '~~Faux~~', 'Juste'],
      ['l’adverbe en //-lijk//', '~~//Hij werkt snellijk.//~~', '//Hij werkt {snel}.//'], ['//-ing// partout', '~~//de eting//~~', '//{het} eten//'], ['//-heid// au lieu de //-te//', '~~//de warmheid//~~', '//de warm{te}//'],
      ['l’article', '~~//het vergadering//~~', '//{de} vergadering//'], ['l’orthographe de //-baar//', '~~//betalbaar//~~', '//bet{aa}lbaar//'], ['le faux ami', '~~//de lezing// (= la lecture)~~', '//{het} lezen//']],
    { y: 1.75, colW: [3.6, 4.0, 3.93], rowH: 0.6, align: ['left', 'center', 'center'], size: 17, cats: [null, null, 'OK'] });
  }

  // ================================================================ 28 à retenir
  {
    const s = page(28, 'À RETENIR', 'La boîte à suffixes');
    table(s, [['Passage', 'Suffixes et préfixes'],
      ['<V>verbe</> → <N>nom</>', '{het} + infinitif · radical · {-ing} · {-er / -aar / -der} · {-eren → -atie}'], ['<A>adjectif</> → <N>nom</>', '{-heid} (qualité) · {-te} (mesure) · {-iteit} · {het} + adj. + {-e}'],
      ['<N>nom</> → <A>adjectif</>', '{-ig} · {-lijk} · {-isch} · {-loos} ↔ {-vol} · {-en} (matière)'], ['<V>verbe</> → <A>adjectif</>', '{-baar} ({on-} = contraire) · {-end} · participe passé'],
      ['<N>nom</> → <V>verbe</>', '+ {-en} · {-eren} · {be-}'], ['<A>adjectif</> → <V>verbe</>', '{ver-} … {-en} (rendre plus)'], ['<A>adjectif</> = <D>adverbe</>', 'rien ne change : //<D>snel</>// = rapide / rapidement']],
    { y: 1.65, colW: [2.9, 8.63], rowH: 0.5, align: ['left', 'left'], first: true, size: 16 });
    takeaway(s, 'Le **suffixe** décide la catégorie et l’article · le **préfixe** change le sens.', 5.85);
    d.icon(s, 'FaCamera', MUTED, 12.3, 0.3, 0.32);
  }

  // ================================================================ 29 JIJ NU !
  const EXS = [['Le tri', '★'], ['Verbe → nom', '★★'], ['-heid ou -te ?', '★★'], ['Nom → adjectif', '★★'], ['C’est …baar !', '★'], ['Rendre plus', '★★'], ['Pas de -ment', '★★'], ['Les familles', '★★★'], ['Le style écrit', '★★★'], ['De of het ?', '★★'], ['Le détective', '★★'], ['La fabrique', '★★'], ['Les travaux', '★★★']];
  d.section('Oefeningen');
  {
    const s = page(29, 'JIJ NU !', 'Oefeningen', { dark: true });
    const tw = 1.55; const gx = 0.18;
    EXS.forEach(([t, st], i) => {
      const r = i < 7 ? 0 : 1; const c = r ? i - 7 : i; const n = r ? 6 : 7;
      const x = 6.665 - (n * tw + (n - 1) * gx) / 2 + c * (tw + gx); const y = 2.1 + r * 1.85;
      box(s, x, y, tw, 1.55, { fill: '23466F', r: 0.1 });
      txt(s, `**${i + 1}**`, x + 0.15, y + 0.12, 0.6, 0.45, { size: 20, color: 'F0A04B' });
      txt(s, t, x + 0.15, y + 0.6, tw - 0.3, 0.55, { size: 13.5, bold: true, color: 'FFFFFF', valign: 'top' });
      txt(s, st, x + 0.15, y + 1.18, tw - 0.3, 0.28, { size: 11, color: 'F0A04B' });
    });
  }

  // ---------------------------------------------------------------- l'exercice : question puis correction
  const exercise = (g, n, title, stars, instr, draw, notes) => {
    ['q', 'a'].forEach((mode) => {
      const s = page(g, mode === 'q' ? `JIJ NU ! · EXERCICE ${n}` : `✓ CORRECTIE · EXERCICE ${n}`, title, { stars, correction: mode === 'a', notes, kc: mode === 'q' ? CAT.A : OK });
      txt(s, instr, 1.2, 1.45, 10.93, 0.42, { size: 15.5, italic: true, color: MUTED, align: 'center' });
      draw(s, mode);
    });
  };
  const exNote = (s, str) => txt(s, str, 0.9, 6.5, 11.53, 0.35, { size: 13, italic: true, color: MUTED, align: 'center' });

  // ================================================================ 30 ex1 le tri
  const ex1 = [['de vergader{ing}', 'N'], ['betaal{baar}', 'A'], ['de gezond{heid}', 'N'], ['zonn{ig}', 'A'], ['organis{eren}', 'V'], ['de ler{aar}', 'N'], ['{ver}beter{en}', 'V'], ['gevaar{lijk}', 'A'], ['{het} lezen', 'N'], ['werk{loos}', 'A'], ['de leng{te}', 'N'], ['{ver}grot{en}', 'V'], ['techn{isch}', 'A'], ['het vertrek', 'N'], ['fiets{en}', 'V']];
  exercise(30, 1, 'Quelle catégorie ?', '★', 'Nom, verbe ou adjectif ? Classez les mots et entourez le suffixe qui vous aide.', (s, mode) => {
    if (mode === 'q') {
      const cw = 2.15;
      ex1.forEach(([w], i) => {
        const x = 6.665 - (5 * cw + 4 * 0.15) / 2 + (i % 5) * (cw + 0.15); const y = 2.05 + Math.floor(i / 5) * 0.6;
        box(s, x, y, cw, 0.48, { fill: SOFT, r: 0.24 });
        txt(s, `//${plainOf(w)}//`, x, y, cw, 0.48, { size: 16, color: NAVY, align: 'center' });
      });
      [['Nom', 'N'], ['Verbe', 'V'], ['Adjectif', 'A']].forEach(([h, k], j) => {
        const x = 0.9 + j * 3.92;
        box(s, x, 4.0, 3.69, 2.75, { fill: TINT[k], line: CAT[k], dash: 'dash', r: 0.08 });
        txt(s, `**${h.toUpperCase()}**`, x, 4.1, 3.69, 0.35, { size: 11.5, color: CAT[k], align: 'center', cs: 2 });
      });
    } else {
      const col = (k) => ex1.filter(([, kk]) => kk === k).map(([w]) => w);
      const Ls = [col('N'), col('V'), col('A')]; const n = Math.max(...Ls.map((l) => l.length));
      table(s, [['Nom', 'Verbe', 'Adjectif'], ...Array.from({ length: n }, (_, i) => Ls.map((l) => (l[i] ? `//${l[i]}//` : '')))], { y: 2.0, rowH: 0.52, size: 17, cats: ['N', 'V', 'A'] });
    }
  });

  // ================================================================ 31 ex2 verbe → nom
  const ex2 = [['vergaderen', 'l’action', 'de vergadering'], ['roken', 'l’action', 'het roken'], ['besturen', 'la personne', 'de bestuurder'], ['organiseren', 'l’action', 'de organisatie'], ['beginnen', 'le moment', 'het begin'],
    ['verkopen', 'la personne (f.)', 'de verkoopster'], ['betalen', 'l’action', 'de betaling'], ['vertrekken', 'l’acte', 'het vertrek'], ['wandelen', 'la personne', 'de wandelaar'], ['printen', 'l’appareil', 'de printer']];
  exercise(31, 2, 'Verbe → nom', '★★', 'Trouvez le nom demandé, avec son article.', (s, mode) => {
    [0, 1].forEach((j) => table(s, [['Verbe', 'On cherche', 'Nom'], ...ex2.slice(j * 5, j * 5 + 5).map(([v, w, a]) => [`//${v}//`, w, `//[[${a}]]//`])], { mode, cats: ['V', null, 'N'], x: 0.9 + j * 5.88, w: 5.65, colW: [1.75, 1.7, 2.2], y: 2.0, rowH: 0.62, size: 15.5 }));
    if (mode === 'a') exNote(s, 'Pour l’action, //het// + infinitif marche toujours : //het vergaderen, het organiseren, het betalen//.');
  });

  // ================================================================ 32 ex3 -heid ou -te
  const ex3 = [['ziek', 'de ziekte'], ['vrij', 'de vrijheid'], ['lang', 'de lengte'], ['mogelijk', 'de mogelijkheid'], ['warm', 'de warmte'], ['snel', 'de snelheid'], ['zeker', 'de zekerheid'], ['breed', 'de breedte'], ['gezond', 'de gezondheid'], ['hoog', 'de hoogte']];
  exercise(32, 3, '-heid ou -te ?', '★★', 'Formez le nom : la qualité (-heid) ou la mesure, la sensation (-te) ?', (s, mode) => {
    [0, 1].forEach((j) => table(s, [['Adjectif', 'Nom'], ...ex3.slice(j * 5, j * 5 + 5).map(([a, n]) => [`//${a}//`, `//[[${n}]]//`])], { mode, cats: ['A', 'N'], x: 1.4 + j * 5.53, w: 4.8, y: 2.0, rowH: 0.62, size: 17 }));
    if (mode === 'a') exNote(s, '//-te// : //lengte, warmte, breedte, hoogte// (mesures, sensations) · //ziekte// : exception.');
  });

  // ================================================================ 33 ex4 nom → adjectif
  const ex4 = [['de zon', 'Het is vandaag [[zonnig]] weer.'], ['het gevaar', 'Die straat is [[gevaarlijk]].'], ['de techniek', 'We hebben een [[technisch]] probleem.'], ['het hout', 'Ik koop een [[houten]] tafel.'], ['het werk', 'Hij is al een jaar [[werkloos]].'], ['de vriend', 'De receptionist is heel [[vriendelijk]].'], ['de dag', 'De [[dagelijkse]] vergadering begint om 9 uur.'], ['de waarde', 'Bedankt! Dat is een [[waardevol]] advies.']];
  exercise(33, 4, 'Nom → adjectif', '★★', 'Complétez avec l’adjectif formé sur le nom. Attention au -e devant le nom !', (s, mode) => {
    table(s, [['Nom', 'Phrase'], ...ex4.map(([n, t]) => [`//${n}//`, `//${t}//`])], { mode, cats: ['N', null], ans: CAT.A, y: 1.95, colW: [2.4, 9.13], rowH: 0.48, align: ['center', 'left'], size: 16.5 });
    if (mode === 'a') exNote(s, 'N° 7 : //dagelijks// + //-e// devant le nom · n° 8 : //het advies// → pas de //-e// après //een//.');
  });

  // ================================================================ 34 ex5 c'est …baar
  const ex5 = [['Kun je dit water drinken?', 'Ja, het is [[drinkbaar]].'], ['Kun je zijn handschrift lezen?', 'Nee, het is [[onleesbaar]].'], ['Kunnen we die prijs betalen?', 'Ja, hij is [[betaalbaar]].'], ['Kun je het kantoor met de bus bereiken?', 'Ja, het is goed [[bereikbaar]].'], ['Kun je die paddenstoelen eten?', 'Nee, ze zijn niet [[eetbaar]].'], ['Kun je het verschil zien?', 'Nee, het is niet [[zichtbaar]].']];
  exercise(34, 5, 'C’est …baar !', '★', 'Répondez avec un adjectif en -baar (ou on-…-baar).', (s, mode) => {
    table(s, [['Question', 'Réponse'], ...ex5.map(([q, a]) => [`//${q}//`, `//${a}//`])], { mode, ans: CAT.A, y: 1.95, colW: [6.2, 5.33], rowH: 0.62, align: ['left', 'left'], size: 17 });
    if (mode === 'a') exNote(s, 'N° 2 : aussi //niet leesbaar// · n° 5 : aussi //oneetbaar// · n° 6 : aussi //onzichtbaar//.');
  });

  // ================================================================ 35 ex6 rendre plus
  const ex6 = [['groot', 'Het kantoor is te klein.', 'We moeten het [[vergroten]].'], ['kort', 'De tekst is te lang.', 'Kun je hem [[verkorten]]?'], ['beter', 'De service is niet goed.', 'We willen hem [[verbeteren]].'], ['lang', 'Het contract eindigt in juni.', 'We [[verlengen]] het tot december.'], ['warm', 'Het is koud in de refter.', 'We [[verwarmen]] de refter.'], ['nieuw', 'De website is oud.', 'We [[vernieuwen]] de website.']];
  exercise(35, 6, 'Rendre plus : ver- … -en', '★★', 'Complétez avec un verbe en ver- … -en formé sur l’adjectif.', (s, mode) => {
    table(s, [['Adjectif', 'Situation', 'Phrase'], ...ex6.map(([a, t1, t2]) => [`//${a}//`, `//${t1}//`, `//${t2}//`])], { mode, cats: ['A', null, null], ans: CAT.V, y: 1.95, colW: [1.6, 4.6, 5.33], rowH: 0.62, align: ['center', 'left', 'left'], size: 16.5 });
    if (mode === 'a') exNote(s, 'N° 2 : aussi //inkorten// · n° 4 : la voyelle change (//lang → verlengen//).');
  });

  // ================================================================ 36 ex7 pas de -ment
  const ex7 = [['Il travaille rapidement.', 'Hij werkt [[snel]].'], ['Elle parle clairement.', 'Ze spreekt [[duidelijk]].'], ['Conduis prudemment !', 'Rijd [[voorzichtig]]!'], ['Tu parles bien néerlandais.', 'Je spreekt [[goed]] Nederlands.'], ['Heureusement, il est là.', '[[Gelukkig]] is hij er.'], ['Malheureusement, je ne peux pas venir.', '[[Helaas]] kan ik niet komen.']];
  exercise(36, 7, 'Pas de -ment !', '★★', 'Traduisez. Rappel : en néerlandais, l’adverbe = l’adjectif.', (s, mode) => {
    table(s, [['Français', 'Néerlandais'], ...ex7.map(([f, n]) => [f, `//${n}//`])], { mode, ans: CAT.D, y: 1.95, colW: [5.6, 5.93], rowH: 0.62, align: ['left', 'left'], size: 17 });
    if (mode === 'a') exNote(s, 'N° 6 : aussi //Jammer genoeg · Spijtig genoeg// (BE) · n° 5 et 6 : inversion après l’adverbe en tête.');
  });

  // ================================================================ 37 ex8 les familles
  const ex8 = [['betalen', 'de betaling', 'de betaler', 'betaalbaar', 'onbetaalbaar'], ['lezen', 'het lezen', 'de lezer', 'leesbaar', 'onleesbaar'], ['gebruiken', 'het gebruik', 'de gebruiker', 'bruikbaar', 'onbruikbaar']];
  exercise(37, 8, 'Les familles de mots', '★★★', 'Complétez chaque famille : l’action, la personne, l’adjectif « qu’on peut… » et son contraire.', (s, mode) => {
    table(s, [['Verbe', 'Action', 'Personne', '« Qu’on peut… »', 'Contraire'], ...ex8.map((r) => r.map((t, j) => (j ? `//[[${t}]]//` : `//**${t}**//`)))], { mode, cats: ['V', 'N', 'N', 'A', 'A'], y: 2.1, rowH: [0.5, 0.95, 0.95, 0.95], size: 18 });
  });

  // ================================================================ 38 ex9 le style écrit
  const ex9 = [['De prijzen stijgen.', 'De stijging van de prijzen'], ['Het kantoor opent maandag.', 'De opening van het kantoor: maandag'], ['We vergaderen om 10 uur.', 'Vergadering om 10 uur'], ['De trein vertrekt om 8 uur.', 'Het vertrek van de trein: 8 uur'], ['De klanten zijn tevreden.', 'De tevredenheid van de klanten'], ['Je moet snel betalen.', 'Snelle betaling gevraagd']];
  exercise(38, 9, 'Le style écrit', '★★★', 'Transformez en style nominal (titre, note de service).', (s, mode) => {
    table(s, [['Style verbal', 'Style nominal'], ...ex9.map(([a, b]) => [`//${a}//`, `//[[${b}]]//`])], { mode, ans: CAT.N, y: 1.95, colW: [5.3, 6.23], rowH: 0.62, align: ['left', 'left'], size: 17 });
    if (mode === 'a') exNote(s, 'Titres aussi sans article : //Prijsstijging// · n° 5 : aussi //de klanttevredenheid// · n° 6 : //snel → snelle// (+ //-e//).');
  });

  // ================================================================ 39 ex10 de of het
  const ex10 = [['betaling', 'de'], ['lezen', 'het'], ['vertrek', 'het'], ['begin', 'het'], ['gezondheid', 'de'], ['toerisme', 'het'], ['document', 'het'], ['organisatie', 'de'], ['mengsel', 'het'], ['vriendschap', 'de'], ['lidmaatschap', 'het'], ['bakkerij', 'de']];
  exercise(39, 10, 'De of het ?', '★★', 'Regardez le suffixe : de ou het ? (la boussole, diapo 22)', (s, mode) => {
    const rows = [0, 1, 2].map((r) => ex10.slice(r * 4, r * 4 + 4).map(([w, a]) => `//[[<${a === 'de' ? 'DE' : 'HET'}>${a}</>]]  ${w}//`));
    table(s, rows, { mode, head: false, y: 2.3, rowH: 1.0, size: 19 });
    if (mode === 'a') exNote(s, '//het lidmaatschap// : //-schap// de statut · //het vertrek, het begin// : radical à préfixe.');
  });

  // ================================================================ 40 ex11 le détective
  exercise(40, 11, 'Le détective', '★★', 'Lotte écrit une note de service. Trouvez les 5 erreurs de dérivation.', (s, mode) => {
    box(s, 1.6, 2.05, 10.13, 4.35, { fill: 'FFFFFF', line: LINE, r: 0.06, shadow: true });
    txt(s, 'NOTA · Peeters & Co · Van: Lotte Maes, facility manager', 1.95, 2.15, 9.5, 0.4, { size: 12, color: MUTED, cs: 1 });
    line(s, 1.95, 2.6, 11.38, 2.6, LINE, 1);
    const fix = (bad, good) => (mode === 'q' ? bad : `~~${bad}~~ <OK>${good}</>`);
    const body = [`//Beste collega’s,//`, `//Volgende week is er een belangrijke ${fix('vergaderen', 'vergadering')} over de ${fix('organisering', 'organisatie')} van het nieuwe kantoor. Door de ${fix('warmheid', 'warmte')} in de zomer zoeken we een ${fix('betalbare', 'betaalbare')} airco. De beschikbaarheid van de zalen staat in de agenda. Antwoord ${fix('snellijk', 'snel')}, a.u.b.//`, '//Met vriendelijke groeten,//', '//Lotte//'];
    txt(s, body, 1.95, 2.75, 9.45, 3.5, { size: 17, valign: 'top', gap: 6, ls: 1.1 });
    if (mode === 'a') exNote(s, 'Corrects : //de beschikbaarheid// (//beschikbaar// + //-heid//) · //vriendelijke// (//-lijk// + //-e//).');
  });

  // ================================================================ 41 ex12 la fabrique de mots
  {
    const s = page(41, 'JIJ NU ! · EXERCICE 12', 'La fabrique de mots', { stars: '★★', kc: CAT.A });
    txt(s, 'Par équipes : tirez une racine, puis fabriquez un maximum de mots avec les cartes-suffixes en 2 minutes.', 1.2, 1.45, 10.93, 0.42, { size: 15.5, italic: true, color: MUTED, align: 'center' });
    const row = (L, y, w, root) => L.forEach((t, i) => {
      const x = 6.665 - (L.length * w + (L.length - 1) * 0.15) / 2 + i * (w + 0.15);
      box(s, x, y, w, 0.6, { fill: root ? NAVY : ACC, r: 0.1 });
      txt(s, root ? `//**${t}-**//` : `**${t}**`, x, y, w, 0.6, { size: 17, color: 'FFFFFF', align: 'center' });
    });
    txt(s, '**RACINES**', 1.2, 2.1, 10.93, 0.3, { size: 11, color: NAVY, align: 'center', cs: 3 });
    row(['werk', 'speel', 'vrij', 'zon', 'betaal', 'lees', 'gezond', 'groot'], 2.45, 1.3, true);
    txt(s, '**CARTES-SUFFIXES**', 1.2, 3.3, 10.93, 0.3, { size: 11, color: ACC, align: 'center', cs: 3 });
    row(['-ing', '-er', '-heid', '-te', '-ig', '-lijk'], 3.65, 1.55);
    row(['-baar', '-loos', 'on-', 'ver- … -en', 'be-', 'het + inf.'], 4.35, 1.55);
    table(s, [['Barème', ''], ['1 point', 'par mot correct'], ['+ 1', 'si l’article est juste'], ['+ 1', 'si l’équipe fait une phrase avec le mot']], { y: 5.15, w: 6.5, colW: [1.5, 5.0], rowH: 0.36, size: 14, align: ['center', 'left'] });
  }

  // ================================================================ 42 ex13 les travaux
  {
    const s = page(42, 'MISE EN SITUATION · EXERCICE 13', 'Les travaux chez Peeters & Co', { stars: '★★★', kc: ACC });
    txt(s, 'Peeters & Co rénove ses bureaux. A explique les travaux à l’oral ; B écrit l’avis en style nominal.', 1.2, 1.45, 10.93, 0.42, { size: 15.5, italic: true, color: MUTED, align: 'center' });
    [['A', 'Facility manager', 'Expliquez les travaux avec des **<V>verbes</>** : //We <V>vergroten</> de refter…//', CAT.N, TINT.N], ['B', 'Assistant·e', 'Écrivez l’avis avec des **<N>noms</>** : //<N>Vergroting</> van de refter…// Puis A vérifie.', ACC, ACC_SOFT]].forEach(([L, h, t, c, tint], i) => {
      const y = 2.1 + i * 1.45;
      box(s, 0.9, y, 6.6, 1.25, { fill: tint, r: 0.1 });
      circle(s, 1.4, y + 0.62, 0.3, c); txt(s, `**${L}**`, 1.1, y + 0.32, 0.6, 0.6, { size: 18, color: 'FFFFFF', align: 'center' });
      txt(s, `**${h}**`, 1.95, y + 0.12, 5.4, 0.36, { size: 15, color: c });
      txt(s, t, 1.95, y + 0.48, 5.4, 0.7, { size: 14.5, valign: 'top' });
    });
    txt(s, '**BANQUE DE MOTS**', 0.9, 5.08, 6.6, 0.3, { size: 11, color: NAVY, cs: 2 });
    txt(s, '//<N>de vergroting · de vernieuwing · de verbetering · de sluiting · de heropening</> · <A>tijdelijk · niet beschikbaar</> · buiten gebruik · Wegens werken… · Gelieve … te … · Dank voor uw begrip!//', 0.9, 5.4, 6.6, 1.3, { size: 14, valign: 'top', color: INK, lightCat: true });
    table(s, [['De werken', ''], ...['we <V>vergroten</> de refter', 'we <V>vernieuwen</> de computers', 'we <V>verbeteren</> de verwarming', 'de lift <V>werkt</> niet tot 15 mei', 'de parking <V>sluit</> op 3 mei', 'we <V>openen</> opnieuw op 1 juni'].map((t, i) => [`${i + 1}`, `//${t}//`])], { x: 7.85, w: 4.58, colW: [0.5, 4.08], y: 2.1, rowH: 0.6, size: 14.5, align: ['center', 'left'] });
  }

  // ================================================================ 43 ticket de sortie
  d.section('Clôture');
  {
    const s = page(43, 'TICKET DE SORTIE', 'Ticket de sortie');
    ['Le nom de //vergaderen//, avec son article ?', 'L’adjectif formé sur //het gevaar// ?', 'Traduisez : //Il travaille rapidement.//'].forEach((q, i) => {
      const y = 1.75 + i * 1.1;
      circle(s, 1.35, y + 0.42, 0.28, CAT.A); txt(s, `**${i + 1}**`, 1.07, y + 0.14, 0.56, 0.56, { size: 17, color: 'FFFFFF', align: 'center' });
      txt(s, q, 1.85, y, 5.3, 0.84, { size: 18, color: INK });
    });
    table(s, [['Je sais…', '', '', ''], ...['reconnaître', 'transformer', 'écrire'].map((t) => [t, '', '', ''])], { x: 7.6, w: 4.83, colW: [2.1, 0.91, 0.91, 0.91], y: 1.75, rowH: [0.45, 0.78, 0.78, 0.78], size: 17, align: ['left', 'center', 'center', 'center'] });
    [0, 1, 2].forEach((r) => ['FaRegFrown', 'FaRegMeh', 'FaRegSmile'].forEach((ic, c) => d.icon(s, ic, [KO, CAT.A, OK][c], 9.7 + c * 0.91 + 0.24, 2.2 + r * 0.78 + 0.18, 0.42)));
    note1(s, ['+', 'Défi de la semaine', 'choisissez trois mots de votre métier et construisez leur famille (cinq mots chacun)'], 5.45, 1.0, 11.53);
  }
}

module.exports = { meta, build };
