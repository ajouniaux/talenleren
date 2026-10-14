// Die, dat, wat, waar… — Les pronoms relatifs (complément A2–B1, après M22 et M23)
// Dans le modèle illustré du cours (celui de la première édition d'Afleiding) : étiquette, titre, pastilles de couleur,
// cartes, illustrations, encadrés « ✓ La norme » et « ⚠ Attention », bandeau bleu nuit ; une flèche courbe relie toujours
// le relatif à son nom. En haut à droite, la réglette « vous êtes ici » montre le ou les relatifs de la diapo.
// Code couleur : die bleu nuit · dat orange (comme de / het) · wat vert · wie framboise · waar- violet · verbe rouge.
const { measure } = require('../vijf_kit');
const { BORDER } = require('../lib');

const meta = {
  n: 'R', slug: 'Relatief', title: 'Die, dat, wat, waar… — Les pronoms relatifs', short: 'Les pronoms relatifs',
  template: 'pronoms_relatifs.md', file: 'Relatief_Les_pronoms_relatifs.pptx',
  docTitle: 'Die, dat, wat, waar… — Les pronoms relatifs : relier une information à un nom',
  foot: 'Néerlandais · A2–B1 · Les pronoms relatifs',
};

const C = { DIE: '17375E', DAT: 'D9700F', WAT: '2E7D4F', WIE: 'B4236A', WAAR: '6E4A9E', V: 'B83227', BL: '2A6FB0', MU: '4A5A70', OK: '2E7D4F', KO: 'B83227' };
const TINT = { DIE: 'E6EBF2', DAT: 'FDF1E6', WAT: 'E8F4EC', WIE: 'FBEAF1', WAAR: 'F1ECF7', V: 'FBEDEB', BL: 'EAF2FB', MU: 'F1F3F6', OK: 'E8F4EC', KO: 'FBEDEB' };
// les mêmes couleurs, éclaircies, pour le texte sur fond bleu nuit
const LIGHT = { DIE: 'BFD3EA', DAT: 'F6B26B', WAT: '8FD3A8', WIE: 'F2A7C6', WAAR: 'C9B3E6', V: 'F4A39A', BL: 'A9CBEF', MU: 'C9D4E2', OK: '8FD3A8', KO: 'F4A39A' };
const INK = '1B2333'; const GREY = '6B7686'; const SOFT = 'EEF3F8'; const LINE = 'C9D1DC';
const KEYS = 'DIE|DAT|WAT|WIE|WAAR|V|BL|MU|OK|KO';

function build(d) {
  // ---------------------------------------------------------------- texte enrichi
  // **gras** · //italique// · ~~forme fautive~~ (barrée en rouge) · [[réponse]] (pointillés au sujet, en vert au corrigé)
  // <DIE> <DAT> <WAT> <WIE> <WAAR> <V> <BL> <MU> <OK> <KO> … </> : la couleur du relatif, du verbe…
  const runs = (str, o = {}, mode = 'a') => {
    const out = []; let b = false; let it = false; let e = false; let ans = false; let cat = null;
    String(str).split(new RegExp(`(\\*\\*|\\/\\/|~~|\\[\\[|\\]\\]|<(?:${KEYS})>|<\\/>)`)).forEach((tk) => {
      const m = /^<(\w+)>$/.exec(tk);
      if (m) cat = m[1]; else if (tk === '</>') cat = null;
      else if (tk === '**') b = !b; else if (tk === '//') it = !it;
      else if (tk === '~~') e = !e; else if (tk === '[[') ans = true; else if (tk === ']]') ans = false;
      else if (tk) {
        if (ans && mode === 'q') { out.push({ text: '…'.repeat(Math.max(4, Math.round(tk.length * 0.55))), options: { color: '9AA6B5', fontSize: o.size, italic: it || !!o.italic } }); return; }
        const pal = o.dark ? LIGHT : C;
        const color = e ? C.KO : cat ? pal[cat] : ans ? (o.ans || C.OK) : (o.color || INK);
        const bold = b || (ans && mode === 'a' && !o.ansPlain) || !!o.bold || (!!cat && !o.lightCat && cat !== 'MU');
        out.push({ text: tk, options: { bold, italic: it || !!o.italic, color, strike: e ? 'sngStrike' : undefined, fontSize: o.size } });
      }
    });
    return out;
  };
  const para = (lines, o, mode) => {
    const L = Array.isArray(lines) ? lines : [lines]; const out = [];
    L.forEach((l, i) => {
      const r = runs(l, o, mode);
      if (o.gap !== undefined && r.length) r[0].options.paraSpaceAfter = o.gap;
      if (i < L.length - 1 && r.length) r[r.length - 1].options.breakLine = true;
      out.push(...r);
    });
    return out;
  };
  const T = (s, str, x, y, w, h, o = {}) => s.addText(para(str, o, o.mode), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || INK, align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true,
    lineSpacingMultiple: o.ls, charSpacing: o.cs, rotate: o.rotate,
  });
  const wOf = (str, size) => runs(str, { size }).reduce((t, r) => t + measure(r.text, size, r.options.bold), 0);

  // ---------------------------------------------------------------- les pièces du modèle
  // la pastille : pleine (le relatif, le verbe) ou claire (le nom auquel il renvoie)
  const chip = (s, str, k, x, y, o = {}) => {
    const size = o.size || 18; const h = o.h || 0.56; const w = o.w || wOf(`**${str}**`, size) + 0.45;
    d.rect(s, x, y, w, h, { fill: o.fill ? C[k] : TINT[k], line: o.fill ? null : C[k], lw: 1.75, radius: 0.12, shadow: o.shadow });
    T(s, o.roman ? `**${str}**` : `//**${str}**//`, x, y, w, h, { size, color: o.fill ? 'FFFFFF' : C[k], align: 'center' });
    return { x, y, w, h, cx: x + w / 2, r: x + w };
  };
  // une phrase en pastilles : [texte] = mot simple · [texte, 'DIE'] = pastille pleine · [texte, 'a:DIE'] = le nom (pastille claire)
  const row = (s, parts, y, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.62; const gap = o.gap ?? 0.14;
    const ws = parts.map(([t, k]) => (k ? wOf(`**${t}**`, size) + 0.42 : wOf(t, size) + 0.06));
    const tw = ws.reduce((a, b) => a + b, 0) + gap * (parts.length - 1);
    let x = o.x ?? ((o.cx ?? 6.665) - tw / 2);
    return parts.map(([t, k], i) => {
      const r = { x, y, w: ws[i], h, cx: x + ws[i] / 2, r: x + ws[i] };
      if (!k) T(s, `//${t}//`, x - 0.05, y, ws[i] + 0.1, h, { size, align: 'center', color: o.color || INK });
      else if (k.startsWith('a:')) chip(s, t, k.slice(2), x, y, { size, h, w: ws[i] });
      else chip(s, t, k, x, y, { size, h, w: ws[i], fill: true, shadow: o.shadow });
      x += ws[i] + gap; return r;
    });
  };
  // la flèche courbe du relatif vers son nom (au-dessus)
  const link = (s, from, to, c, o = {}) => d.curve(s, from.cx, from.y + 0.02, to.cx, from.y + 0.02, { color: c, lw: o.lw || 2.25, h: o.h || 0.3, dir: -1 });
  // un arc sans flèche ; down : sous la ligne (la pince)
  const arch = (s, x1, x2, y, c, h = 0.3, lw = 2.5, down = false) => s.addShape(d.S.ARC, { x: Math.min(x1, x2), y: y - h, w: Math.abs(x2 - x1), h: 2 * h, angleRange: down ? [0, 180] : [180, 360], line: { color: c, width: lw }, fill: { color: 'FFFFFF', transparency: 100 } });
  // une accolade simple (trait et deux petites pattes vers le haut)
  const bracket = (s, x1, x2, y, c, lw = 1.75) => { d.line(s, x1, y, x2, y, { color: c, lw, arrow: false }); [x1, x2].forEach((x) => d.line(s, x, y, x, y - 0.12, { color: c, lw, arrow: false })); };
  // l'encadré de règle : ✓ la norme (vert) · ⚠ attention (rouge) · + en plus (bleu)
  const rule = (s, kind, title, lines, x, y, w, h) => {
    const k = kind === '!' ? 'KO' : kind === '+' ? 'BL' : 'OK';
    d.rect(s, x, y, w, h, { fill: TINT[k], line: C[k], lw: 1.5, radius: 0.12 });
    T(s, `**${kind === '!' ? '⚠' : kind === '+' ? '+' : '✓'} ${title}**`, x + 0.2, y + 0.06, w - 0.4, 0.42, { size: 15, color: C[k] });
    T(s, lines, x + 0.2, y + 0.48, w - 0.4, h - 0.54, { size: 14.5, valign: 'top', gap: 3 });
  };
  const rules2 = (s, a, b, y, h = 1.25) => { rule(s, ...a, 0.6, y, 5.97, h); rule(s, ...b, 6.76, y, 5.97, h); };
  // le bandeau bleu nuit en bas de diapo
  const band = (s, str, y = 6.2, h = 0.62, c = C.DIE, size = 17) => { d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null }); T(s, str, 0.9, y, 11.6, h, { size, color: 'FFFFFF', dark: true }); };
  // une bande de tableau (fond alterné)
  const strip = (s, y, h, i, x = 0.6, w = 12.13) => d.rect(s, x, y, w, h, { fill: i % 2 ? 'FFFFFF' : SOFT, line: null, radius: 0.08 });
  // la réglette « vous êtes ici » : les cinq relatifs, ceux de la diapo en couleur
  const mini = (s, act) => {
    const K = ['DIE', 'DAT', 'WAT', 'WIE', 'WAAR']; const w = 0.52; const g = 0.06; const x0 = 12.73 - (5 * w + 4 * g);
    K.forEach((k, i) => {
      const on = act.includes(k); const x = x0 + i * (w + g);
      d.rect(s, x, 0.3, w, 0.28, { fill: on ? C[k] : 'E9EDF2', line: null, radius: 0.08 });
      T(s, `**${k === 'WAAR' ? 'waar-' : k.toLowerCase()}**`, x, 0.3, w, 0.28, { size: 9, color: on ? 'FFFFFF' : '9AA6B5', align: 'center' });
    });
  };
  const page = (g, tag, title, o = {}) => {
    const s = d.page({ g, tag, title, tagColor: o.tc, notes: o.notes, stars: o.stars });
    if (o.map) mini(s, o.map);
    return s;
  };
  const exNote = (s, str, y = 6.5) => T(s, str, 0.6, y, 12.13, 0.36, { size: 13, italic: true, color: C.MU, align: 'center' });

  // ================================================================ 1 couverture
  d.cover({
    g: 1, chip: 'COMPLÉMENT · A2–B1', title: 'Die, dat,\nwat, waar…', sub: 'Les pronoms relatifs : relier une information à un nom', line: 'die · dat · wat · wie · waar + préposition',
    visual: (s) => {
      d.rect(s, 6.9, 1.2, 6.15, 4.4, { fill: 'FFFFFF', line: null, radius: 0.16 });
      [['woman-office-worker', [['de collega', 'a:DIE'], ['die', 'DIE'], ['naast me zit']], 'DIE'], ['page-facing-up', [['het rapport', 'a:DAT'], ['dat', 'DAT'], ['ik schrijf']], 'DAT'], ['pen', [['de pen', 'a:WAAR'], ['waarmee', 'WAAR'], ['ik teken']], 'WAAR']].forEach(([il, parts, k], i) => {
        const y = 1.85 + i * 1.3;
        d.ill(s, il, 7.12, y - 0.04, 0.64, 0.64);
        const G = row(s, parts, y, { x: 7.95, size: 18, h: 0.56, gap: 0.1 });
        link(s, G[1], G[0], C[k], { h: 0.28 });
      });
    },
  });

  // ================================================================ 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCodeBranch', h: 'Choisir', t: 'Je choisis le bon relatif : //die, dat, wat, wie, waar-//.', color: C.DIE },
      { icon: 'FaLink', h: 'Construire', t: 'Je construis la relative : le verbe à la fin, la bonne place, les virgules.', color: C.V },
      { icon: 'FaLanguage', h: 'Traduire', t: 'Je traduis //qui, que, dont, où, ce qui, ce que// sans calquer le français.', color: C.WAAR },
    ],
    band: 'Une relative = une information en plus sur un nom, dans la même phrase.',
  });

  // ================================================================ 3 échauffement
  {
    const s = page(3, 'ÉCHAUFFEMENT', 'Deux phrases, une phrase', { map: ['DIE', 'DAT'] });
    const EX = [
      { il: 'woman-office-worker', src: ['Ik heb een collega.', '~~De collega~~ <V>spreekt</> vijf talen.'], res: [['Ik heb'], ['een collega', 'a:DIE'], ['die', 'DIE'], ['vijf talen'], ['spreekt.', 'V']], k: 'DIE', nums: ['1'] },
      { il: 'page-facing-up', src: ['Ik lees het rapport.', 'Sofie <V>heeft</> ~~het rapport~~ <V>geschreven</>.'], res: [['Ik lees'], ['het rapport', 'a:DAT'], ['dat', 'DAT'], ['Sofie'], ['heeft geschreven.', 'V']], k: 'DAT', nums: ['1', '2'] },
    ];
    const cx = 7.0;
    EX.forEach((e, i) => {
      const y = 1.62 + i * 2.25;
      d.ill(s, e.il, 0.65, y + 0.45, 1.0, 1.0);
      const w1 = wOf(`//${e.src[0]}//`, 18) + 0.5; const w2 = wOf(`//${e.src[1]}//`, 18) + 0.5; const x0 = cx - (w1 + w2 + 0.6) / 2;
      d.rect(s, x0, y, w1, 0.52, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true }); T(s, `//${e.src[0]}//`, x0, y, w1, 0.52, { size: 18, align: 'center', color: C.MU });
      T(s, '**+**', x0 + w1, y, 0.6, 0.52, { size: 22, color: C.MU, align: 'center' });
      d.rect(s, x0 + w1 + 0.6, y, w2, 0.52, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true }); T(s, `//${e.src[1]}//`, x0 + w1 + 0.6, y, w2, 0.52, { size: 18, align: 'center', color: C.MU });
      d.line(s, cx, y + 0.6, cx, y + 0.9, { color: C.MU, lw: 2 });
      const G = row(s, e.res, y + 1.0, { size: 22, cx });
      link(s, G[2], G[1], C[e.k], { h: 0.26 });
      e.nums.forEach((n, j) => d.num(s, n, G[2].cx - 0.17 + (j - (e.nums.length - 1) / 2) * 0.4, y + 1.72, 0.34, C[e.k], 12));
      d.num(s, '3', G[4].cx - 0.17, y + 1.72, 0.34, C.V, 12);
    });
    band(s, '**①** le nom répété → //<DIE>die</> / <DAT>dat</>//      **②** le relatif en tête de la relative      **③** le verbe à la fin', 6.25, 0.6);
  }

  // ================================================================ 4 l'anatomie
  {
    const s = page(4, 'LE PRINCIPE', 'L’anatomie d’une relative', { map: ['DIE'] });
    const G = row(s, [['Ik zoek'], ['de collega', 'a:DIE'], ['die', 'DIE'], ['de sleutel'], ['heeft.', 'V']], 2.0, { size: 30, h: 0.82, gap: 0.18 });
    link(s, G[2], G[1], C.DIE, { h: 0.36, lw: 2.5 });
    [[1, 'l’antécédent (le nom)', C.DIE], [2, 'le relatif', C.DIE], [4, 'le verbe à la fin', C.V]].forEach(([i, t, c]) => T(s, `//**${t}**//`, G[i].cx - 1.4, 2.9, 2.8, 0.34, { size: 14, color: c, align: 'center' }));
    bracket(s, G[2].x, G[4].r, 3.55, C.MU);
    T(s, '//la relative : une subordonnée, le « wagon » du M9//', G[2].x - 0.6, 3.6, G[4].r - G[2].x + 1.2, 0.34, { size: 14, color: C.MU, align: 'center' });
    rules2(s, ['✓', 'La norme', 'La relative est une subordonnée : le verbe conjugué va **à la fin**.'], ['!', 'Jamais sans relatif', '~~//de collega ik zoek//~~ (anglais : //the colleague I’m looking for//) → //de collega <DIE>die</> ik zoek//'], 4.25, 1.4);
    band(s, 'nom ← relatif + … + verbe : le relatif suit son nom et ouvre la relative.', 6.2, 0.6);
  }

  // ================================================================ 5 l'aiguillage
  d.section('Die ou dat');
  {
    const s = page(5, 'DIE · DAT', 'L’aiguillage : die ou dat ?', { map: ['DIE', 'DAT'] });
    const st = { DIE: [5.05, 2.45], DAT: [5.05, 4.6] }; const r = 0.55;
    [['mot //de//', 1.7, 'DIE'], ['pluriel', 2.85, 'DIE'], ['mot //het//', 4.25, 'DAT']].forEach(([t, y, k]) => {
      d.rect(s, 0.6, y, 2.5, 0.7, { fill: TINT[k], line: C[k], lw: 1.75, radius: 0.12, shadow: true });
      T(s, `**${t}**`, 0.6, y, 2.5, 0.7, { size: 19, color: C[k], align: 'center' });
      const [sx, sy] = st[k]; const dx = sx - 3.15; const dy = sy - (y + 0.35); const L = Math.hypot(dx, dy);
      d.line(s, 3.15, y + 0.35, sx - dx / L * (r + 0.08), sy - dy / L * (r + 0.08), { color: C[k], lw: 4 });
    });
    Object.entries(st).forEach(([k, [x, y]]) => { d.oval(s, x - r, y - r, 2 * r, 2 * r, { fill: C[k], line: 'FFFFFF', lw: 2 }); T(s, `**${k.toLowerCase()}**`, x - r, y - 0.28, 2 * r, 0.56, { size: 23, color: 'FFFFFF', align: 'center' }); });
    [[[['de klant', 'a:DIE'], ['die', 'DIE'], ['belt']], 1.75, 'DIE'], [[['de rapporten', 'a:DIE'], ['die', 'DIE'], ['klaar zijn']], 2.85, 'DIE'], [[['het rapport', 'a:DAT'], ['dat', 'DAT'], ['klaar is']], 4.3, 'DAT']].forEach(([parts, y, k]) => {
      d.line(s, st[k][0] + r + 0.05, st[k][1], 6.3, y + 0.3, { color: LINE, lw: 1.25, arrow: false });
      const G = row(s, parts, y, { x: 6.45, size: 20, h: 0.6 });
      link(s, G[1], G[0], C[k], { h: 0.24 });
    });
    rules2(s, ['✓', 'La norme', 'l’article du nom décide : //de// → //<DIE>die</>// · //het// → //<DAT>dat</>// · pluriel → toujours //<DIE>die</>//'], ['!', 'Attention', '//het meisje <DAT>dat</>… · het kind <DAT>dat</>… · het kopje <DAT>dat</>…// (diminutif //-je// = //het//)'], 5.45, 1.3);
  }

  // ================================================================ 6 qui ou que ?
  {
    const s = page(6, 'PIÈGE FR ≠ NL', 'Qui ou que ? Peu importe !', { map: ['DIE', 'DAT'] });
    d.flag(s, 'fr', 1.15, 1.62, 0.5);
    [['qui', 'sujet', 2.2], ['que', 'complément', 3.45]].forEach(([t, k, y]) => {
      d.rect(s, 0.6, y, 1.65, 0.72, { fill: 'FFFFFF', line: LINE, lw: 1.25, radius: 0.12, shadow: true });
      T(s, `//**${t}**//`, 0.6, y, 1.65, 0.72, { size: 22, color: C.MU, align: 'center' });
      T(s, `//${k}//`, 0.6, y + 0.74, 1.65, 0.3, { size: 12, color: GREY, align: 'center' });
      d.line(s, 2.3, y + 0.36, 3.0, 3.18, { color: C.MU, lw: 1.75 });
    });
    d.flag(s, 'nl', 3.55, 2.3, 0.5);
    d.rect(s, 3.05, 2.8, 1.6, 0.8, { fill: TINT.DIE, line: C.DIE, lw: 1.75, radius: 0.12, shadow: true });
    T(s, '//**<DIE>die</> / <DAT>dat</>**//', 3.05, 2.8, 1.6, 0.8, { size: 20, align: 'center' });
    T(s, '//selon le nom//', 3.05, 3.62, 1.6, 0.3, { size: 12, color: C.DIE, align: 'center', bold: true });
    [['le collègue **<MU>qui</>** m’aide', 'de collega <DIE>die</> me helpt'], ['le collègue **<MU>que</>** j’aide', 'de collega <DIE>die</> ik help'], ['le rapport **<MU>qui</>** est prêt', 'het rapport <DAT>dat</> klaar is'], ['le rapport **<MU>que</>** je lis', 'het rapport <DAT>dat</> ik lees']].forEach(([fr, nl], i) => {
      const y = 1.7 + i * 0.64;
      strip(s, y, 0.56, i, 5.1, 7.63);
      T(s, `« ${fr} »`, 5.3, y, 3.3, 0.56, { size: 16, color: C.DIE, italic: true });
      T(s, '➜', 8.6, y, 0.45, 0.56, { size: 17, bold: true, color: C.MU, align: 'center' });
      T(s, `//${nl}//`, 9.1, y, 3.55, 0.56, { size: 17 });
    });
    rules2(s, ['✓', 'La norme', 'le français regarde la **fonction** (//qui / que//) ; le néerlandais regarde le **nom** (//<DIE>die</> / <DAT>dat</>//)'], ['!', 'Qui fait quoi ?', '//de collega <DIE>die</> Sofie helpt// = qui aide Sofie… ou que Sofie aide : le contexte décide'], 4.62, 1.3);
    band(s, 'Avec un pronom, l’ordre lève le doute : //<DIE>die</> **me** helpt// (il m’aide) · //<DIE>die</> **ik** help// (je l’aide).', 6.2, 0.6);
  }

  // ================================================================ 7 le verbe à la fin
  d.section('La place');
  {
    const s = page(7, 'LA PLACE', 'Le verbe va à la fin', { map: ['DIE', 'DAT'] });
    const wheels = (x, w) => [x + 0.4, x + w - 0.4].forEach((cx) => d.oval(s, cx - 0.14, 2.52, 0.28, 0.28, { fill: '9AA6B5' }));
    d.rect(s, 1.0, 1.65, 4.4, 0.85, { fill: C.DIE, line: null, radius: 0.12, shadow: true }); d.rect(s, 0.65, 1.92, 0.38, 0.42, { fill: C.DIE, line: null, radius: 0.05 });
    T(s, '//Ik zoek **de collega**//', 1.0, 1.65, 4.4, 0.85, { size: 22, color: 'FFFFFF', align: 'center' }); wheels(1.0, 4.4);
    d.line(s, 5.4, 2.08, 5.85, 2.08, { color: '9AA6B5', lw: 3, arrow: false });
    d.rect(s, 5.85, 1.65, 6.2, 0.85, { fill: 'FFFFFF', line: C.DIE, lw: 2, radius: 0.12, shadow: true });
    T(s, '//<DIE>die</> de sleutel <V>heeft</>//', 5.85, 1.65, 6.2, 0.85, { size: 22, align: 'center' }); wheels(5.85, 6.2);
    T(s, '//la principale//', 1.0, 2.82, 4.4, 0.3, { size: 12, color: GREY, align: 'center' }); T(s, '//le wagon : la relative, le verbe au bout//', 5.85, 2.82, 6.2, 0.3, { size: 12, color: GREY, align: 'center' });
    [['de collega <DIE>die</> de sleutel <V>heeft</>', 'un verbe'], ['de klant <DIE>die</> ik morgen <V>moet bellen</>', 'verbe + infinitif'], ['het dossier <DAT>dat</> ik gisteren <V>heb gelezen</>', 'auxiliaire + participe'], ['de collega <DIE>die</> altijd vroeg <V>opstaat</>', 'le verbe séparable se recolle (M11)']].forEach(([t, lab], i) => {
      const y = 3.25 + i * 0.56;
      strip(s, y, 0.5, i);
      T(s, `//${t}//`, 0.8, y, 7.0, 0.5, { size: 17 });
      T(s, `//${lab}//`, 8.0, y, 4.6, 0.5, { size: 14.5, color: C.MU });
    });
    rules2(s, ['✓', 'La norme', '**tous** les verbes au bout de la relative : //<V>moet bellen</>, <V>heb gelezen</>//'], ['+', 'Deux ordres', '//<V>heb gelezen</>// = //<V>gelezen heb</>// : les deux sont corrects'], 5.55, 1.2);
  }

  // ================================================================ 8 au milieu : verbe, verbe
  {
    const s = page(8, 'LA PLACE', 'La relative au milieu : verbe, verbe', { map: ['DIE', 'DAT'] });
    const size = 24; const A = '//De collega//'; const B = '//<DIE>die</> naast me <V>zit</>,//'; const Cc = '//<V>spreekt</> vijf talen.//';
    const wa = wOf(A, size) + 0.5; const wb = wOf(B, size) + 0.6; const wc = wOf(Cc, size) + 0.5; const gap = 0.12;
    const x0 = 6.665 - (wa + wb + wc + 2 * gap) / 2; const y = 2.15;
    d.rect(s, x0, y, wa, 0.72, { fill: 'FFFFFF', line: C.DIE, lw: 2, radius: 0.12, shadow: true }); T(s, A, x0, y, wa, 0.72, { size, align: 'center' });
    d.rect(s, x0 + wa + gap, y - 0.2, wb, 0.72, { fill: TINT.DIE, line: C.DIE, lw: 1.25, radius: 0.12, shadow: true }); T(s, B, x0 + wa + gap, y - 0.2, wb, 0.72, { size, align: 'center' });
    d.rect(s, x0 + wa + wb + 2 * gap, y, wc, 0.72, { fill: 'FFFFFF', line: C.DIE, lw: 2, radius: 0.12, shadow: true }); T(s, Cc, x0 + wa + wb + 2 * gap, y, wc, 0.72, { size, align: 'center' });
    arch(s, x0 + wa / 2, x0 + wa + wb + 2 * gap + wc / 2, y - 0.12, '9AA6B5', 0.4, 1.75);
    const xv = x0 + wa + wb + gap;
    chip(s, 'verbe, verbe', 'V', xv - 0.85, y + 0.85, { size: 13, h: 0.36, w: 1.7, fill: true, roman: true });
    ['Het rapport <DAT>dat</> Sofie <V>schrijft</>, <V>is</> bijna klaar.', 'De klanten <DIE>die</> gebeld <V>hebben</>, <V>krijgen</> een antwoord.', 'De printer <DIE>die</> op de eerste verdieping <V>staat</>, <V>werkt</> niet.'].forEach((t, i) => {
      const y2 = 3.55 + i * 0.56;
      strip(s, y2, 0.5, i, 1.6, 10.13);
      T(s, `//${t}//`, 1.6, y2, 10.13, 0.5, { size: 17, align: 'center' });
    });
    rules2(s, ['✓', 'Verbe, verbe', 'le verbe de la relative, puis celui de la principale ; une virgule entre les deux'], ['!', 'Pas trop long', 'une relative courte au milieu ; une relative longue, plutôt **à la fin** (diapo suivante)'], 5.4, 1.25);
  }

  // ================================================================ 9 le saut
  {
    const s = page(9, 'LA PLACE · B1', 'Le saut : la relative après le verbe', { map: ['DIE', 'DAT'] });
    const size = 22; const rel = 'die de sleutel heeft'; const wr = wOf(`**${rel}**`, size) + 0.42;
    const y1 = 1.75; const y2 = 3.1;
    const G1 = row(s, [['Ik heb'], ['de collega', 'a:DIE']], y1, { size, x: 1.3 });
    d.rect(s, G1[1].r + 0.14, y1, wr, 0.62, { fill: SOFT, line: LINE, lw: 1.25, dash: 'dash', radius: 0.12 });
    T(s, `//<MU>${rel}</>//`, G1[1].r + 0.14, y1, wr, 0.62, { size, align: 'center' });
    const xg = G1[1].r + 0.28 + wr; const gb = chip(s, 'gebeld.', 'V', xg, y1, { size, h: 0.62, fill: true });
    T(s, ['**lourd :**', 'le participe arrive trop tard'], gb.r + 0.25, y1 + 0.02, 2.6, 0.6, { size: 12, color: GREY, italic: true });
    const G2 = row(s, [['Ik heb'], ['de collega', 'a:DIE'], ['gebeld', 'V'], [rel, 'a:DIE']], y2, { size, x: 1.3 });
    link(s, { cx: G2[3].x + 0.35, y: y2 }, G2[1], C.DIE, { h: 0.3 });
    d.line(s, G1[1].r + 0.14 + wr / 2, y1 + 0.66, G2[3].cx, y2 - 0.04, { color: C.DIE, lw: 2, dash: 'dash' });
    T(s, ['**léger :**', 'la relative a sauté par-dessus //gebeld//'], G2[3].r + 0.25, y2 + 0.02, 3.0, 0.6, { size: 12, color: C.OK, italic: true });
    ['We hebben een klant <V>gevonden</> <DIE>die</> het project wil betalen.', 'Wil je het rapport <V>lezen</> <DAT>dat</> ik geschreven heb?', 'Ze heeft een collega <V>gebeld</> <DIE>die</> Frans spreekt.'].forEach((t, i) => {
      const y = 4.0 + i * 0.52;
      strip(s, y, 0.46, i, 1.6, 10.13);
      T(s, `//${t}//`, 1.6, y, 10.13, 0.46, { size: 16.5, align: 'center' });
    });
    rules2(s, ['✓', 'La norme', 'la relative peut suivre le participe ou l’infinitif de la fin : la phrase reste légère'], ['!', 'Attention', 'pas d’autre nom entre les deux qui crée une confusion'], 5.7, 1.1);
  }

  // ================================================================ 10 avec ou sans virgules
  {
    const s = page(10, 'LA PONCTUATION', 'Avec ou sans virgules ?', { map: ['DIE'] });
    const people = ['woman-office-worker', 'man-office-worker', 'woman-technologist', 'man-technologist', 'woman-office-worker', 'man-office-worker'];
    [['//Mijn collega’s <DIE>die</> in Gent wonen, komen met de trein.//', [0, 2, 3], 'PAS DE VIRGULE AVANT die', 'le **filtre** : la relative **choisit**', 'seulement ceux de Gand'],
      ['//Mijn collega’s<DIE>,</> <DIE>die</> in Gent wonen<DIE>,</> komen met de trein.//', [0, 1, 2, 3, 4, 5], 'ENTRE VIRGULES', 'la **parenthèse** : une information **en plus**', 'tous (et tous habitent Gand)']].forEach(([sent, sel, h, t, res], i) => {
      const y = 1.62 + i * 2.18;
      d.rect(s, 0.6, y, 12.13, 2.0, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      chip(s, h, 'DIE', 0.8, y + 0.2, { size: 12, h: 0.38, fill: true, roman: true });
      T(s, t, 0.8, y + 0.72, 3.5, 0.5, { size: 16, valign: 'top' });
      T(s, `→ //${res}//`, 0.8, y + 1.3, 3.5, 0.5, { size: 15, color: C.DIE, bold: true });
      T(s, sent, 4.4, y + 0.12, 8.2, 0.5, { size: 19, align: 'center' });
      people.forEach((p, j) => {
        const cx = 5.3 + j * 1.25; const on = sel.includes(j);
        if (on) d.oval(s, cx - 0.42, y + 0.74, 0.84, 0.84, { fill: TINT.DIE });
        d.ill(s, p, cx - 0.33, y + 0.83, 0.66, 0.66, { tr: on ? 0 : 72 });
        if (on && i === 0) d.ill(s, 'round-pushpin', cx + 0.16, y + 0.68, 0.3, 0.3);
      });
    });
    d.ill(s, 'round-pushpin', 10.6, 3.18, 0.24, 0.24); T(s, '//= habite Gand//', 10.88, 3.15, 1.7, 0.3, { size: 11, color: GREY });
    band(s, '✓ pas de virgule avant le relatif = on **choisit** · entre virgules = une information **en plus** · un nom propre : toujours entre virgules', 6.2, 0.62, C.DIE, 16);
  }

  // ================================================================ 11 wat : pas de nom
  d.section('Wat et wie');
  {
    const s = page(11, 'WAT', 'wat : quand il n’y a pas de nom', { map: ['WAT'] });
    const W = ['alles', 'iets', 'niets', 'veel', 'weinig', 'het enige', 'het eerste', 'het mooiste'];
    const ws = W.map((t) => wOf(`//**${t}**//`, 17) + 0.42); const gx = 0.13; const tw = ws.reduce((a, b) => a + b, 0) + gx * (W.length - 1);
    let x = 6.665 - tw / 2; const cy = 2.95;
    W.forEach((t, i) => {
      d.rect(s, x, 1.62, ws[i], 0.48, { fill: 'FFFFFF', line: C.MU, lw: 1.25, radius: 0.12, shadow: true }); T(s, `//**${t}**//`, x, 1.62, ws[i], 0.48, { size: 17, align: 'center' });
      const sx = x + ws[i] / 2; const dx = 6.665 - sx; const dy = cy - 2.14; const L = Math.hypot(dx, dy);
      d.line(s, sx, 2.14, 6.665 - dx / L * 0.48, cy - dy / L * 0.48, { color: C.WAT, lw: 1.75 });
      x += ws[i] + gx;
    });
    d.oval(s, 6.225, cy - 0.44, 0.88, 0.88, { fill: C.WAT, line: 'FFFFFF', lw: 2 }); T(s, '**wat**', 6.225, cy - 0.25, 0.88, 0.5, { size: 20, color: 'FFFFFF', align: 'center' });
    [['Alles <WAT>wat</> je zegt, klopt.', 'Tout ce que tu dis est juste.'], ['Is er iets <WAT>wat</> ik kan doen?', 'Y a-t-il quelque chose que je puisse faire ?'], ['Dat is het enige <WAT>wat</> ik weet.', 'C’est la seule chose que je sache.'], ['Het mooiste <WAT>wat</> ik ooit gezien heb.', 'La plus belle chose que j’aie jamais vue.']].forEach(([nl, fr], i) => {
      const y = 3.6 + i * 0.52;
      strip(s, y, 0.46, i);
      T(s, `//${nl}//`, 0.8, y, 5.7, 0.46, { size: 17 });
      T(s, `« ${fr} »`, 6.7, y, 5.9, 0.46, { size: 15, italic: true, color: C.MU });
    });
    rules2(s, ['✓', 'La norme', 'pas de nom, mais un mot « chose » → //<WAT>wat</>//'], ['!', 'À l’oral', 'on entend aussi //iets dat, niets dat// (surtout en Belgique) ; //<WAT>wat</>// est toujours juste'], 5.8, 1.05);
  }

  // ================================================================ 12 wat reprend une phrase
  {
    const s = page(12, 'WAT', 'wat reprend toute une phrase', { map: ['WAT'] });
    const G = row(s, [['Hij komt altijd te laat,'], ['wat', 'WAT'], ['ik vervelend vind.']], 1.8, { size: 28, h: 0.75 });
    const yb = 2.68;
    bracket(s, G[0].x + 0.05, G[0].r - 0.15, yb, C.WAT, 2.25);
    d.curve(s, G[1].cx, yb, (G[0].x + G[0].r) / 2, yb, { color: C.WAT, lw: 2.25, h: 0.34, dir: 1 });
    T(s, '« …, ce que je trouve agaçant. »', 0.6, 3.1, 12.13, 0.35, { size: 15, italic: true, color: C.MU, align: 'center' });
    [['Ze heeft de job gekregen, <WAT>wat</> niemand verwachtte.', '…, ce que personne n’attendait.'], ['De lift werkt niet, <WAT>wat</> erg lastig is.', '…, ce qui est très embêtant.'], ['We werken vrijdag thuis, <WAT>wat</> ik fijn vind.', '…, ce que je trouve agréable.']].forEach(([nl, fr], i) => {
      const y = 3.6 + i * 0.55;
      strip(s, y, 0.48, i);
      T(s, `//${nl}//`, 0.8, y, 6.9, 0.48, { size: 17 });
      T(s, `« ${fr} »`, 7.8, y, 4.8, 0.48, { size: 15, italic: true, color: C.MU });
    });
    rules2(s, ['✓', 'La norme', 'après une virgule, //<WAT>wat</>// reprend **toute l’idée** qui précède'], ['!', 'Attention', '~~//…, dat erg lastig is//~~ → //<WAT>wat</>// : il n’y a pas de nom'], 5.4, 1.15);
  }

  // ================================================================ 13 sans nom : wie, wat
  {
    const s = page(13, 'WIE · WAT', 'Sans nom : wie = celui qui, wat = ce que', { map: ['WIE', 'WAT'] });
    [['person-raising-hand', 'WIE', 'wie', 'celui / celle qui…', 0.6], ['package', 'WAT', 'wat', 'ce qui, ce que…', 6.76]].forEach(([il, k, w, fr, x]) => {
      d.rect(s, x, 1.62, 5.97, 1.4, { fill: 'FFFFFF', line: C[k], lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x + 0.25, 1.75, 1.1, 1.0, { fill: 'FFFFFF', line: '9AA6B5', lw: 1.25, dash: 'dash', radius: 0.1 });
      d.ill(s, il, x + 0.43, 1.83, 0.74, 0.74);
      T(s, '//sans nom//', x + 0.25, 2.76, 1.1, 0.24, { size: 10.5, color: GREY, align: 'center' });
      d.line(s, x + 1.5, 2.3, x + 2.2, 2.3, { color: C[k], lw: 2.25 });
      d.oval(s, x + 2.3, 1.85, 0.9, 0.9, { fill: C[k], line: 'FFFFFF', lw: 2 }); T(s, `**${w}**`, x + 2.3, 2.05, 0.9, 0.5, { size: 21, color: 'FFFFFF', align: 'center' });
      T(s, `= //${fr}//`, x + 3.35, 1.85, 2.5, 0.9, { size: 18, color: C[k], bold: true });
    });
    [['<WIE>Wie</> te laat <V>komt</>, <V>betaalt</> de koffie.', 'Celui qui arrive en retard paie le café.'], ['<WIE>Wie</> wil meedoen, kan zich inschrijven.', 'Ceux qui veulent participer peuvent s’inscrire.'], ['<WAT>Wat</> je zegt, is niet waar.', 'Ce que tu dis n’est pas vrai.'], ['Ik begrijp niet <WAT>wat</> hij bedoelt.', 'Je ne comprends pas ce qu’il veut dire.']].forEach(([nl, fr], i) => {
      const y = 3.25 + i * 0.52;
      strip(s, y, 0.46, i);
      T(s, `//${nl}//`, 0.8, y, 5.8, 0.46, { size: 17 });
      T(s, `« ${fr} »`, 6.75, y, 5.9, 0.46, { size: 15, italic: true, color: C.MU });
    });
    rules2(s, ['✓', 'La norme', 'pas de nom : une personne → //<WIE>wie</>// · une chose → //<WAT>wat</>//'], ['+', 'Plus formel', '//degene <DIE>die</>// (celui / celle qui) · //diegenen <DIE>die</>// (ceux qui) · //datgene <WAT>wat</>// (ce que)'], 5.5, 1.25);
  }

  // ================================================================ 14 préposition : personne ou chose ?
  d.section('Avec une préposition');
  {
    const s = page(14, 'WIE · WAAR', 'Avec une préposition : personne ou chose ?', { map: ['WIE', 'WAAR'] });
    d.rect(s, 4.5, 1.6, 4.33, 0.52, { fill: 'FFFFFF', line: C.DIE, lw: 1.75, radius: 0.26, shadow: true });
    T(s, '**préposition + relatif ?**', 4.5, 1.6, 4.33, 0.52, { size: 17, color: C.DIE, align: 'center' });
    [['woman-office-worker', 'UNE PERSONNE → préposition + wie', 'WIE', 0.6, ['de collega <WIE>met wie</> ik werk', 'de klant <WIE>op wie</> ik wacht', 'de man <WIE>aan wie</> ik denk', 'de vriendin <WIE>over wie</> ik praat']],
      ['laptop', 'UNE CHOSE → waar + préposition', 'WAAR', 6.76, ['de laptop <WAAR>waarmee</> ik werk', 'de bus <WAAR>waarop</> ik wacht', 'het project <WAAR>waaraan</> ik denk', 'het boek <WAAR>waarover</> ik praat']]].forEach(([il, h, k, x, L]) => {
      d.line(s, x < 6 ? 5.2 : 8.13, 2.12, x + 2.98, 2.42, { color: C[k], lw: 2 });
      d.rect(s, x, 2.45, 5.97, 2.85, { fill: 'FFFFFF', line: C[k], lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 2.45, 5.97, 0.6, { fill: C[k], line: null, radius: 0.12 }); d.rect(s, x, 2.85, 5.97, 0.2, { fill: C[k], line: null, radius: 0 });
      T(s, `**${h}**`, x + 0.25, 2.45, 4.9, 0.6, { size: 15, color: 'FFFFFF' });
      d.ill(s, il, x + 5.2, 2.5, 0.52, 0.52);
      L.forEach((t, j) => T(s, `//${t}//`, x + 0.2, 3.15 + j * 0.53, 5.57, 0.5, { size: 18, align: 'center' }));
    });
    rules2(s, ['✓', 'La norme', 'personne : préposition + //<WIE>wie</>// · chose : //<WAAR>waar</>// + préposition, en un mot'], ['!', 'Jamais', '~~//met wat//~~ · ~~//met die//~~ · ~~//met dat//~~ pour une chose'], 5.5, 1.25);
  }

  // ================================================================ 15 la fusion
  {
    const s = page(15, 'WAAR + PRÉPOSITION', 'La fusion : waar + préposition', { map: ['WAAR'] });
    // les briques (rappel du M14) : met + wat (barrées) → waar + mee
    const brick = (t, x, w, k) => {
      [0.28, w - 0.58].forEach((dx) => d.rect(s, x + dx, 1.62, 0.3, 0.14, { fill: k === 'X' ? 'D5DCE6' : C.WAAR, line: null, radius: 0.03 }));
      d.rect(s, x, 1.74, w, 0.66, { fill: k === 'X' ? 'FFFFFF' : C.WAAR, line: k === 'X' ? '9AA6B5' : null, lw: 1.25, radius: 0.08, shadow: true });
      T(s, k === 'X' ? `~~//**${t}**//~~` : `//**${t}**//`, x, 1.74, w, 0.66, { size: 22, color: 'FFFFFF', align: 'center' });
    };
    const B = [['met', 'X'], ['+'], ['wat', 'X'], ['→'], ['waar', 'W'], ['+'], ['mee', 'W'], ['='], ['waarmee', 'R']];
    const ws = B.map(([t, k]) => (k ? wOf(`**${t}**`, 22) + 0.55 : 0.5)); let x = 6.665 - (ws.reduce((a, b) => a + b, 0) + 0.1 * (B.length - 1)) / 2;
    B.forEach(([t, k], i) => {
      if (!k) T(s, `**${t}**`, x, 1.74, ws[i], 0.66, { size: 24, color: C.MU, align: 'center' });
      else if (k === 'R') chip(s, t, 'WAAR', x, 1.74, { size: 22, h: 0.66, w: ws[i] });
      else brick(t, x, ws[i], k);
      x += ws[i] + 0.1;
    });
    const T12 = [['met', 'mee'], ['tot', 'toe'], ['op', 'op'], ['aan', 'aan'], ['over', 'over'], ['van', 'van'], ['voor', 'voor'], ['in', 'in'], ['naar', 'naar'], ['uit', 'uit'], ['bij', 'bij'], ['om', 'om']];
    const tw2 = (12.13 - 5 * 0.15) / 6;
    T12.forEach(([p, q], i) => {
      const tx = 0.6 + (i % 6) * (tw2 + 0.15); const ty = 2.75 + Math.floor(i / 6) * 1.05; const ch = p !== q;
      d.rect(s, tx, ty, tw2, 0.88, { fill: ch ? TINT.KO : 'FFFFFF', line: ch ? C.KO : C.WAAR, lw: ch ? 2 : 1.25, radius: 0.12, shadow: true });
      T(s, `//${p}// →`, tx, ty + 0.06, tw2, 0.3, { size: 13, color: C.MU, align: 'center' });
      T(s, `//<WAAR>waar</>**${ch ? `<V>${q}</>` : `<WAAR>${q}</>`}**//`, tx, ty + 0.36, tw2, 0.46, { size: 19, align: 'center', lightCat: true });
    });
    rules2(s, ['!', 'Deux changements', '//met// → //<WAAR>waar</>**<V>mee</>**// · //tot// → //<WAAR>waar</>**<V>toe</>**//'], ['+', 'waarom', '« pourquoi », mais aussi « la raison pour laquelle » : //de reden <WAAR>waarom</> hij vertrekt//'], 4.95, 1.2);
    band(s, 'Pour une chose, jamais « préposition + //wat, dat, die// » : c’est le tableau //er, daar, waar// du M23.', 6.3, 0.55, C.DIE, 16);
  }

  // ================================================================ 16 la pince
  {
    const s = page(16, 'WAAR + PRÉPOSITION', 'La pince : waar … mee', { map: ['WAAR'] });
    const G = row(s, [['de pen', 'a:WAAR'], ['waarmee', 'WAAR'], ['ik schrijf'], ['='], ['de pen', 'a:WAAR'], ['waar', 'WAAR'], ['ik'], ['mee', 'WAAR'], ['schrijf']], 2.0, { size: 22, h: 0.64 });
    link(s, G[1], G[0], C.WAAR, { h: 0.26 }); link(s, G[5], G[4], C.WAAR, { h: 0.26 });
    arch(s, G[5].cx, G[7].cx, G[5].y + G[5].h + 0.02, C.WAAR, 0.32, 2.75, true);
    T(s, '//**en un mot**//', G[0].x, 3.05, G[2].r - G[0].x, 0.3, { size: 13, color: C.MU, align: 'center' });
    T(s, '//**la pince**//', G[4].x, 3.05, G[8].r - G[4].x, 0.3, { size: 13, color: C.WAAR, align: 'center' });
    [['het project <WAAR>waaraan</> ik werk', 'het project <WAAR>waar</> ik <WAAR>aan</> werk'], ['de bus <WAAR>waarop</> ik al een uur wacht', 'de bus <WAAR>waar</> ik al een uur <WAAR>op</> wacht'], ['het dossier <WAAR>waarnaar</> je zoekt', 'het dossier <WAAR>waar</> je <WAAR>naar</> zoekt']].forEach(([a, b], i) => {
      const y = 3.55 + i * 0.56;
      strip(s, y, 0.5, i);
      T(s, `//${a}//`, 0.8, y, 5.5, 0.5, { size: 17, align: 'center' });
      T(s, '⇄', 6.3, y, 0.7, 0.5, { size: 20, bold: true, color: C.WAAR, align: 'center' });
      T(s, `//${b}//`, 7.0, y, 5.6, 0.5, { size: 17, align: 'center' });
    });
    rules2(s, ['✓', 'Les deux sont justes', 'à l’oral, la pince est la plus fréquente'], ['!', 'Sa place', 'la préposition va juste avant les verbes de la fin : //waar ik al een uur **<WAAR>op</>** wacht//'], 5.4, 1.25);
  }

  // ================================================================ 17 les verbes à préposition fixe
  {
    const s = page(17, 'WIE · WAAR', 'Les verbes à préposition fixe', { map: ['WIE', 'WAAR'] });
    chip(s, 'une personne', 'WIE', 3.45, 1.6, { size: 13, h: 0.36, w: 4.3, fill: true, roman: true });
    chip(s, 'une chose', 'WAAR', 7.95, 1.6, { size: 13, h: 0.36, w: 4.6, fill: true, roman: true });
    [['wachten', 'op', 'de klant <WIE>op wie</> ik wacht', 'de bus <WAAR>waarop</> ik wacht'], ['denken', 'aan', 'de collega <WIE>aan wie</> ik denk', 'de deadline <WAAR>waaraan</> ik denk'], ['praten', 'over', 'de manager <WIE>over wie</> we praten', 'het plan <WAAR>waarover</> we praten'],
      ['rekenen', 'op', 'de collega’s <WIE>op wie</> ik reken', 'de hulp <WAAR>waarop</> ik reken'], ['zorgen', 'voor', 'de kinderen <WIE>voor wie</> ik zorg', 'de planten <WAAR>waarvoor</> ik zorg'], ['zoeken', 'naar', 'de kandidaat <WIE>naar wie</> we zoeken', 'het dossier <WAAR>waarnaar</> ik zoek']].forEach(([v, p, a, b], i) => {
      const y = 2.08 + i * 0.55;
      strip(s, y, 0.49, i);
      d.rect(s, 0.75, y + 0.06, 2.45, 0.37, { fill: 'FFFFFF', line: C.MU, lw: 1.25, radius: 0.1 });
      T(s, `//${v} **${p}**//`, 0.75, y + 0.06, 2.45, 0.37, { size: 15, color: C.DIE, align: 'center' });
      T(s, `//${a}//`, 3.45, y, 4.4, 0.49, { size: 16 });
      T(s, `//${b}//`, 7.95, y, 4.7, 0.49, { size: 16 });
    });
    rules2(s, ['✓', 'La norme', 'apprenez le verbe **avec** sa préposition : elle passe devant le relatif'], ['!', '≠ français', '//attendre// quelqu’un → //wachten **op**// · //chercher// → //zoeken **naar**//'], 5.5, 1.25);
  }

  // ================================================================ 18 « où »
  d.section('Traduire');
  {
    const s = page(18, 'TRADUIRE « OÙ »', '« où » : le lieu ou le temps ?', { map: ['WAAR', 'DAT'] });
    [['round-pushpin', 'LE LIEU', 'WAAR', 0.6, [['waar', 'WAAR'], ['waarin', 'WAAR'], ['waarop', 'WAAR']], ['het kantoor <WAAR>waar</> ik werk', 'de stad <WAAR>waar</> ze woont', 'de zaal <WAAR>waarin</> we vergaderen']],
      ['spiral-calendar', 'LE TEMPS', 'BL', 6.76, [['dat', 'BL'], ['waarop', 'BL'], ['waarin', 'BL']], ['de dag <BL>dat</> (<BL>waarop</>) ik begon', 'het moment <BL>dat</> (<BL>waarop</>) hij binnenkwam', 'het jaar <BL>dat</> (<BL>waarin</>) we verhuisden']]].forEach(([il, h, k, x, chips, ex]) => {
      d.rect(s, x, 1.62, 5.97, 3.6, { fill: 'FFFFFF', line: C[k], lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.62, 5.97, 0.6, { fill: C[k], line: null, radius: 0.12 }); d.rect(s, x, 2.02, 5.97, 0.2, { fill: C[k], line: null, radius: 0 });
      T(s, `**${h}**`, x + 0.25, 1.62, 3, 0.6, { size: 16, color: 'FFFFFF', cs: 1 });
      d.ill(s, il, x + 5.25, 1.66, 0.52, 0.52);
      let cx = x + 0.3; chips.forEach(([t, kk]) => { cx = chip(s, t, kk, cx, 2.42, { size: 16, h: 0.46, fill: true }).r + 0.15; });
      ex.forEach((e, j) => T(s, `//${e}//`, x + 0.3, 3.1 + j * 0.66, 5.4, 0.56, { size: 18 }));
    });
    rule(s, '!', 'Attention', '~~//de dag waar//~~ : //waar// = le lieu · //de dag <BL>dat</>// : ce //dat// ne change pas (~~//de dag die//~~) ; il veut dire « où, quand »', 0.6, 5.45, 12.13, 1.2);
  }

  // ================================================================ 19 « dont »
  {
    const s = page(19, 'TRADUIRE « DONT »', '« dont » : partir du verbe néerlandais', { map: ['DIE', 'DAT', 'WIE', 'WAAR'] });
    d.rect(s, 5.665, 1.58, 2.0, 0.5, { fill: 'FFFFFF', line: C.MU, lw: 1.5, radius: 0.25, shadow: true });
    T(s, '//**« dont »**//', 5.665, 1.58, 2.0, 0.5, { size: 20, color: C.MU, align: 'center' });
    const B = [['avoir besoin de', 'thinking-face', 'nodig hebben', 'pas de préposition', '<DAT>dat</> · <DIE>die</>', 'het dossier <DAT>dat</> ik nodig heb'],
      ['parler de', 'speech-balloon', 'praten **over**', 'personne · chose', '<WIE>over wie</> · <WAAR>waarover</>', 'de collega <WIE>over wie</> ik praat'],
      ['être fier·e de', 'trophy', 'trots zijn **op**', 'personne · chose', '<WIE>op wie</> · <WAAR>waarop</>', 'het team <WAAR>waarop</> ik trots ben'],
      ['la possession', 'key', '**van**', 'personne · chose', '<WIE>van wie</> · <WAAR>waarvan</>', 'de collega <WIE>van wie</> de auto kapot is']];
    const bw = (12.13 - 3 * 0.18) / 4;
    B.forEach(([fr, il, nl, hint, rel, ex], i) => {
      const x = 0.6 + i * (bw + 0.18); const cx = x + bw / 2;
      d.line(s, 6.665, 2.08, cx, 2.4, { color: '9AA6B5', lw: 1.5 });
      d.rect(s, x, 2.42, bw, 2.95, { fill: 'FFFFFF', line: C.MU, lw: 1.5, radius: 0.12, shadow: true });
      d.rect(s, x, 2.42, bw, 0.52, { fill: C.MU, line: null, radius: 0.12 }); d.rect(s, x, 2.74, bw, 0.2, { fill: C.MU, line: null, radius: 0 });
      T(s, `//**${fr}**//`, x, 2.42, bw, 0.52, { size: 15, color: 'FFFFFF', align: 'center' });
      d.ill(s, il, cx - 0.27, 3.02, 0.54, 0.54);
      T(s, `//${nl}//`, x, 3.58, bw, 0.4, { size: 18, color: C.DIE, align: 'center' });
      T(s, `//${hint}//`, x, 3.95, bw, 0.28, { size: 11.5, color: GREY, align: 'center' });
      T(s, `//${rel}//`, x, 4.22, bw, 0.4, { size: 17, align: 'center' });
      T(s, `//${ex}//`, x + 0.12, 4.65, bw - 0.24, 0.66, { size: 13.5, align: 'center', valign: 'top' });
    });
    rules2(s, ['✓', 'La méthode', '1. le verbe néerlandais · 2. sa préposition · 3. personne ou chose'], ['+', 'Très écrit', '//de man **wiens** auto… · de vrouw **wier** auto…// (à l’oral : //<WIE>van wie</>//)'], 5.55, 1.2);
  }

  // ================================================================ 20 la carte FR → NL
  {
    const s = page(20, 'LA CARTE', 'La carte FR → NL', { map: ['DIE', 'DAT', 'WAT', 'WIE', 'WAAR'] });
    const R = [['qui, que (nom //de//, pluriel)', 'die', 'DIE', 'de klant <DIE>die</> belt'], ['qui, que (nom //het//)', 'dat', 'DAT', 'het rapport <DAT>dat</> ik lees'], ['ce qui, ce que', 'wat', 'WAT', '<WAT>Wat</> je zegt, klopt.'],
      ['tout ce que, quelque chose que', 'alles wat · iets wat', 'WAT', 'alles <WAT>wat</> je nodig hebt'], ['celui qui', 'wie (degene die)', 'WIE', '<WIE>Wie</> wil, mag gaan.'], ['préposition + qui (personne)', 'prép. + wie', 'WIE', 'de collega <WIE>met wie</> ik werk'],
      ['préposition + lequel (chose)', 'waar + prép.', 'WAAR', 'de pen <WAAR>waarmee</> ik schrijf'], ['où (lieu)', 'waar', 'WAAR', 'het kantoor <WAAR>waar</> ik werk'], ['où (temps)', 'dat · waarop', 'BL', 'de dag <BL>dat</> ik begon'], ['dont', 'selon le verbe', 'MU', 'het dossier <DAT>dat</> ik nodig heb']];
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
    R.forEach(([fr, nl, k, ex], i) => {
      const y = 1.6 + i * 0.505;
      strip(s, y, 0.45, i);
      T(s, fr, 0.8, y, 3.9, 0.45, { size: 15.5, color: C.DIE });
      chip(s, nl, k, 4.8, y + 0.06, { size: 13.5, h: 0.33, w: 2.35, fill: true, roman: true });
      T(s, `//${ex}//`, 7.45, y, 5.2, 0.45, { size: 16 });
    });
  }

  // ================================================================ 21 sept pièges
  {
    const s = page(21, 'PIÈGES', 'Sept pièges à éviter', { tc: 'accent6' });
    const R = [['le mot //het//', 'het meisje die', 'het meisje <DAT>dat</>'], ['la place du verbe', 'die heeft de sleutel', '<DIE>die</> de sleutel <V>heeft</>'], ['une phrase entière', '…, dat ik jammer vind', '…, <WAT>wat</> ik jammer vind'], ['//alles, iets//', 'alles die je zegt', 'alles <WAT>wat</> je zegt'],
      ['préposition + chose', 'de pen met wat', 'de pen <WAAR>waarmee</>'], ['le temps', 'de dag waar ik begon', 'de dag <BL>dat</> ik begon'], ['l’oubli (anglais)', 'het boek ik lees', 'het boek <DAT>dat</> ik lees']];
    const cw = (12.13 - 3 * 0.2) / 4; const ch = 2.3;
    R.forEach(([h, bad, good], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.2); const y = 1.62 + Math.floor(i / 4) * (ch + 0.2);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      T(s, `**${i + 1}. ${h}**`, x + 0.15, y + 0.08, cw - 0.3, 0.5, { size: 14, color: C.DIE });
      T(s, `<KO>✗</>  ~~//${bad}//~~`, x + 0.15, y + 0.68, cw - 0.3, 0.7, { size: 15.5 });
      T(s, `<OK>✓</>  //${good}//`, x + 0.15, y + 1.4, cw - 0.3, 0.75, { size: 16 });
    });
    const x = 0.6 + 3 * (cw + 0.2); const y = 1.62 + ch + 0.2;
    d.rect(s, x, y, cw, ch, { fill: C.DIE, line: null, radius: 0.12, shadow: true });
    d.icon(s, 'FaCodeBranch', 'FFFFFF', x + cw / 2 - 0.25, y + 0.3, 0.5);
    T(s, ['**Le réflexe**', 'l’arbre de décision', '(diapo 22)'], x + 0.15, y + 0.9, cw - 0.3, 1.2, { size: 15, color: 'FFFFFF', align: 'center', valign: 'top' });
  }

  // ================================================================ 22 l'arbre de décision
  d.section('Synthèse');
  {
    const s = page(22, 'À RETENIR', 'L’arbre de décision', { map: ['DIE', 'DAT', 'WAT', 'WIE', 'WAAR'] });
    const Q = (str, cx, cy, w) => { d.rect(s, cx - w / 2, cy - 0.27, w, 0.54, { fill: 'FFFFFF', line: C.DIE, lw: 1.75, radius: 0.27, shadow: true }); T(s, `**${str}**`, cx - w / 2, cy - 0.27, w, 0.54, { size: 15.5, color: C.DIE, align: 'center' }); };
    const Tm = (str, cx, cy, k, ex) => { chip(s, str, k, cx - 0.78, cy - 0.25, { size: 18, h: 0.5, w: 1.56, fill: true, shadow: true }); T(s, `//${ex}//`, cx - 1.1, cy + 0.3, 2.2, 0.45, { size: 12, align: 'center', valign: 'top' }); };
    const E = (x1, y1, x2, y2, lab, lx, ly) => { d.line(s, x1, y1, x2, y2, { color: '9AA6B5', lw: 1.75 }); if (lab) T(s, `//${lab}//`, lx, ly, 1.2, 0.26, { size: 12, color: GREY, align: 'center', bold: true }); };
    Q('① Une préposition devant le relatif ?', 6.665, 1.85, 4.8);
    Q('Une personne ou une chose ?', 10.1, 3.05, 3.5);
    E(8.4, 2.12, 9.7, 2.78, 'oui', 9.15, 2.2);
    Tm('met wie', 9.05, 4.35, 'WIE', 'de collega <WIE>met wie</> ik werk'); Tm('waarmee', 11.2, 4.35, 'WAAR', 'de pen <WAAR>waarmee</> ik schrijf');
    E(9.6, 3.32, 9.15, 4.08, 'personne', 8.35, 3.55); E(10.6, 3.32, 11.1, 4.08, 'chose', 10.95, 3.55);
    Q('② Un nom juste avant ?', 3.75, 3.05, 3.3);
    E(4.9, 2.12, 3.95, 2.78, 'non', 3.75, 2.25);
    Q('③ de, het, pluriel ?', 2.05, 4.35, 2.7); Q('personne ou chose ?', 5.55, 4.35, 2.55);
    E(3.3, 3.32, 2.35, 4.08, 'oui', 1.85, 3.55); E(4.2, 3.32, 5.25, 4.08, 'non', 5.0, 3.55);
    T(s, '//aussi après alles, iets, niets, un superlatif, une phrase//', 6.95, 4.05, 1.3, 0.65, { size: 10, color: GREY });
    Tm('die', 1.2, 5.6, 'DIE', 'de klant <DIE>die</> belt'); Tm('dat', 2.9, 5.6, 'DAT', 'het rapport <DAT>dat</> ik lees');
    E(1.75, 4.62, 1.3, 5.35, 'de, pl.', 0.5, 4.82); E(2.35, 4.62, 2.8, 5.35, 'het', 2.75, 4.82);
    Tm('wie', 4.75, 5.6, 'WIE', '<WIE>Wie</> wil, mag gaan.'); Tm('wat', 6.4, 5.6, 'WAT', 'alles <WAT>wat</> je zegt');
    E(5.25, 4.62, 4.85, 5.35, 'pers.', 3.95, 4.82); E(5.85, 4.62, 6.3, 5.35, 'chose', 6.15, 4.82);
    d.rect(s, 7.9, 5.3, 4.83, 1.0, { fill: C.DIE, line: null, radius: 0.12, shadow: true });
    T(s, ['**Et toujours :**', 'tous les <V>verbes</> à la fin de la relative'], 8.1, 5.3, 4.43, 1.0, { size: 16, color: 'FFFFFF', align: 'center', dark: true });
  }

  // ================================================================ 23 à retenir
  {
    const s = page(23, 'À RETENIR', 'À retenir : cinq relatifs', { map: ['DIE', 'DAT', 'WAT', 'WIE', 'WAAR'] });
    const K = [['DIE', 'die', 'nom //de//, pluriel', 'de klant <DIE>die</> belt', 'qui, que'], ['DAT', 'dat', 'nom //het//', 'het rapport <DAT>dat</> ik lees', 'qui, que'], ['WAT', 'wat', '//alles, iets//, superlatif, une phrase, sans nom', 'alles <WAT>wat</> je zegt', 'ce qui, ce que'],
      ['WIE', 'wie', 'préposition + personne, sans nom', '<WIE>met wie</> ik werk', '(avec) qui, celui qui'], ['WAAR', 'waar-', 'préposition + chose, le lieu', '<WAAR>waarmee</> ik schrijf', 'avec lequel, où']];
    const cw = (12.13 - 4 * 0.15) / 5;
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
    K.forEach(([k, t, when, ex, fr], i) => {
      const x = 0.6 + i * (cw + 0.15);
      d.rect(s, x, 1.62, cw, 4.15, { fill: 'FFFFFF', line: C[k], lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.62, cw, 0.62, { fill: C[k], line: null, radius: 0.12 }); d.rect(s, x, 2.04, cw, 0.2, { fill: C[k], line: null, radius: 0 });
      T(s, `//**${t}**//`, x, 1.62, cw, 0.62, { size: 22, color: 'FFFFFF', align: 'center' });
      [['QUAND ?', when, 2.38, 1.05, 14], ['EXEMPLE', `//${ex}//`, 3.55, 0.9, 15], ['EN FRANÇAIS', fr, 4.6, 0.7, 14]].forEach(([lab, v, yy, hh, sz]) => {
        T(s, `**${lab}**`, x + 0.1, yy, cw - 0.2, 0.26, { size: 9.5, color: C[k], align: 'center', cs: 1.5 });
        T(s, v, x + 0.12, yy + 0.27, cw - 0.24, hh, { size: sz, align: 'center', valign: 'top' });
      });
    });
    band(s, 'Et toujours : tous les **<V>verbes</>** à la fin de la relative · une virgule avant le relatif = une information en plus.', 6.0, 0.7, C.DIE, 16);
  }

  // ================================================================ 24 JIJ NU !
  d.divider({ g: 24, wide: true, tiles: [
    ['die of dat ?', '★', 'FaCodeBranch'], ['Une seule phrase', '★★', 'FaLink'], ['Qui ou que ?', '★★', 'FaExchangeAlt'], ['Au milieu', '★★★', 'FaLayerGroup'], ['Virgules', '★★', 'FaFilter'], ['die, dat ou wat ?', '★★', 'FaBoxOpen'],
    ['wie ou waar- ?', '★★', 'FaUserFriends'], ['La pince', '★★', 'FaCompressAlt'], ['Dont et où', '★★★', 'FaLanguage'], ['Le détective', '★★', 'FaSearch'], ['Taboe !', '★', 'FaCommentDots'], ['La photo d’équipe', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- les rangées d'exercice
  // une rangée : à gauche l'énoncé (fond clair), ➜, à droite la réponse (cadre blanc)
  const pair = (s, y, h, left, right, mode, o = {}) => {
    const lw = o.lw ?? 5.6; const xr = 0.6 + lw + 0.55;
    d.rect(s, 0.6, y + 0.04, lw, h - 0.1, { fill: SOFT, line: null, radius: 0.1 });
    T(s, left, 0.75, y + 0.04, lw - 0.25, h - 0.1, { size: o.ls || 16, color: o.lc || INK, mode, ansPlain: o.ansPlain });
    T(s, o.arrow || '➜', 0.6 + lw, y + 0.04, 0.55, h - 0.1, { size: 18, bold: true, color: o.ac || C.MU, align: 'center' });
    d.rect(s, xr, y + 0.04, 12.73 - xr, h - 0.1, { fill: 'FFFFFF', line: BORDER, lw: 0.75, radius: 0.1 });
    T(s, right, xr + 0.15, y + 0.04, 12.73 - xr - 0.25, h - 0.1, { size: o.rs || 17, mode, ansPlain: o.ansPlain, ans: o.ans });
  };
  const num = (i) => `**<MU>${i + 1}</>**  `;

  // ================================================================ 25 ex1 die of dat
  const ex1 = [['de klant', 'die', 'belt'], ['het rapport', 'dat', 'klaar is'], ['de rapporten', 'die', 'klaar zijn'], ['het meisje', 'dat', 'hier werkt'], ['de printer', 'die', 'niet werkt'], ['het kantoor', 'dat', 'we huren'],
    ['de collega’s', 'die', 'thuiswerken'], ['het kopje', 'dat', 'op tafel staat'], ['de stagiair', 'die', 'morgen begint'], ['het team', 'dat', 'het project leidt'], ['de mensen', 'die', 'ik ken'], ['het bedrijf', 'dat', 'ik bel']];
  d.ex({ g: 25, title: 'Exercice 1 — die of dat ?', stars: '★', instr: 'Complétez avec //die// ou //dat//. Regardez d’abord l’article du nom.' }, (s, mode, top) => {
    const cw = (12.13 - 0.3) / 3; const rh = ((mode === 'a' ? 6.4 : 6.8) - top) / 4;
    ex1.forEach(([n, w, rest], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.15); const y = top + Math.floor(i / 3) * rh; const k = w === 'die' ? 'DIE' : 'DAT';
      d.rect(s, x, y + 0.05, cw, rh - 0.14, { fill: mode === 'a' ? TINT[k] : 'FFFFFF', line: mode === 'a' ? C[k] : BORDER, lw: mode === 'a' ? 1.5 : 1, radius: 0.12, shadow: true });
      T(s, num(i), x + 0.12, y + 0.05, 0.4, rh - 0.14, { size: 14 });
      const wn = wOf(`//**${n}**//`, 16.5) + 0.06; const yc = y + 0.05 + (rh - 0.14) / 2;
      T(s, `//**${n}**//`, x + 0.5, y + 0.05, wn, rh - 0.14, { size: 16.5, color: C.DIE });
      const sx = x + 0.55 + wn;
      if (mode === 'q') d.rect(s, sx, yc - 0.21, 0.66, 0.42, { fill: 'FFFFFF', line: C.MU, lw: 1, dash: 'dash', radius: 0.08 });
      else chip(s, w, k, sx, yc - 0.21, { size: 15, h: 0.42, w: 0.66, fill: true });
      T(s, `//${rest}//`, sx + 0.74, y + 0.05, x + cw - sx - 0.8, rh - 0.14, { size: 16.5 });
    });
    if (mode === 'a') exNote(s, '//het meisje, het kopje// (//-je//) : mots //het// → //<DAT>dat</>// · pluriel → toujours //<DIE>die</>// (//het rapport → de rapporten <DIE>die</>//).');
  });

  // ================================================================ 26 ex2 une seule phrase
  const ex2 = [['Ik heb een collega. Hij spreekt vijf talen.', 'Ik heb een collega <DIE>die</> vijf talen <V>spreekt</>.'], ['Hier is het rapport. Je hebt het rapport gevraagd.', 'Hier is het rapport <DAT>dat</> je gevraagd <V>hebt</>.'],
    ['We zoeken een stagiair. Hij spreekt goed Frans.', 'We zoeken een stagiair <DIE>die</> goed Frans <V>spreekt</>.'], ['Dat is de printer. Hij is altijd kapot.', 'Dat is de printer <DIE>die</> altijd kapot <V>is</>.'],
    ['Ken je het restaurant? Het ligt naast het station.', 'Ken je het restaurant <DAT>dat</> naast het station <V>ligt</>?'], ['Ik bel de klanten. Ze hebben een klacht gestuurd.', 'Ik bel de klanten <DIE>die</> een klacht <V>hebben gestuurd</>.']];
  d.ex({ g: 26, title: 'Exercice 2 — Une seule phrase', stars: '★★', instr: 'Reliez les deux phrases avec //die// ou //dat//. Attention au verbe !' }, (s, mode, top) => {
    const rh = (6.42 - top) / 6;
    ex2.forEach(([a, b], i) => pair(s, top + i * rh, rh, `${num(i)}//${a}//`, `//[[${b}]]//`, mode, { ansPlain: true, ls: 15.5, rs: 16 }));
    if (mode === 'a') exNote(s, 'N° 2 et 6 : //gevraagd hebt// = //hebt gevraagd// · //hebben gestuurd// = //gestuurd hebben// : les deux ordres sont corrects.');
  });

  // ================================================================ 27 ex3 qui ou que
  const ex3 = [['le client **qui** appelle', 'de klant <DIE>die</> belt'], ['le client **que** j’appelle', 'de klant <DIE>die</> ik bel'], ['le bureau **qui** est libre', 'het bureau <DAT>dat</> vrij is'],
    ['le bureau **que** je réserve', 'het bureau <DAT>dat</> ik reserveer'], ['les collègues **qui** m’aident', 'de collega’s <DIE>die</> me helpen'], ['les collègues **que** j’aide', 'de collega’s <DIE>die</> ik help']];
  d.ex({ g: 27, title: 'Exercice 3 — Qui ou que ?', stars: '★★', instr: 'Traduisez. Le français change… et le néerlandais ?' }, (s, mode, top) => {
    const rh = (6.42 - top) / 6;
    ex3.forEach(([f, n], i) => pair(s, top + i * rh, rh, `${num(i)}« ${f} »`, `//[[${n}]]//`, mode, { lc: C.DIE, ls: 17, rs: 18 }));
    if (mode === 'a') exNote(s, 'Le français change (//qui / que//), le néerlandais non : seul le nom décide.');
  });

  // ================================================================ 28 ex4 au milieu
  const ex4 = [['De collega spreekt vijf talen.', 'Ze zit naast me.', 'De collega <DIE>die</> naast me <V>zit</>, <V>spreekt</> vijf talen.'], ['Het rapport is bijna klaar.', 'Sofie schrijft het.', 'Het rapport <DAT>dat</> Sofie <V>schrijft</>, <V>is</> bijna klaar.'],
    ['De printer werkt niet.', 'Hij staat op de eerste verdieping.', 'De printer <DIE>die</> op de eerste verdieping <V>staat</>, <V>werkt</> niet.'], ['De klanten krijgen een korting.', 'Ze betalen online.', 'De klanten <DIE>die</> online <V>betalen</>, <V>krijgen</> een korting.'],
    ['Het project begint in mei.', 'We hebben het gisteren besproken.', 'Het project <DAT>dat</> we gisteren <V>hebben besproken</>, <V>begint</> in mei.']];
  d.ex({ g: 28, title: 'Exercice 4 — La relative au milieu', stars: '★★★', instr: 'Ajoutez l’information entre parenthèses au milieu de la phrase : verbe, verbe !' }, (s, mode, top) => {
    const rh = (6.42 - top) / 5;
    ex4.forEach(([a, b, c], i) => pair(s, top + i * rh, rh, [`${num(i)}//${a}//`, `<MU>//+ (${b})//</>`], `//[[${c}]]//`, mode, { lw: 4.5, ansPlain: true, ls: 15, rs: 16 }));
    if (mode === 'a') exNote(s, 'N° 4 : sans virgule avant //<DIE>die</>//, seuls les clients qui paient en ligne ont la réduction · n° 5 : //besproken hebben// est aussi correct.');
  });

  // ================================================================ 29 ex5 virgules
  const ex5 = [['De collega’s <DIE>die</> thuiswerken, krijgen een laptop.', 'seulement ceux qui travaillent à domicile'], ['De collega’s, <DIE>die</> thuiswerken, krijgen een laptop.', 'tous (et tous travaillent à domicile)'],
    ['Mijn zus <DIE>die</> in Brussel woont, komt morgen.', 'j’ai plusieurs sœurs : celle de Bruxelles'], ['Mijn zus, <DIE>die</> in Brussel woont, komt morgen.', 'j’ai une sœur ; elle habite Bruxelles'],
    ['De treinen <DIE>die</> vertraging hebben, staan op het bord.', 'seulement les trains en retard'], ['Sofie, <DIE>die</> net terug is uit Gent, geeft de presentatie.', 'une information en plus (nom propre)']];
  d.ex({ g: 29, title: 'Exercice 5 — Avec ou sans virgules ?', stars: '★★', instr: 'Qui est concerné ? Tous, ou seulement certains ?' }, (s, mode, top) => {
    const rh = (6.42 - top) / 6;
    ex5.forEach(([a, b], i) => pair(s, top + i * rh, rh, `${num(i)}//${a}//`, `[[${b}]]`, mode, { lw: 6.4, ans: C.BL, ansPlain: true, ls: 15.5, rs: 15.5 }));
    if (mode === 'a') exNote(s, 'La virgule **avant** //<DIE>die</>// fait la différence · la virgule après la relative (//thuiswerken, krijgen//) est la virgule « verbe, verbe ».');
  });

  // ================================================================ 30 ex6 die, dat ou wat
  const ex6 = [['Alles', 'wat', 'je zegt, klopt.'], ['Is er iets', 'wat', 'ik voor je kan doen?'], ['Dat is het enige', 'wat', 'ik weet.'], ['Het rapport', 'dat', 'je stuurde, is perfect.'], ['Hij komt altijd te laat,', 'wat', 'ik vervelend vind.'],
    ['De vergadering', 'die', 'om 10 uur begint, duurt lang.'], ['Er is niets', 'wat', 'hij niet kan.'], ['Het nieuwe kantoor,', 'dat', 'in het centrum ligt, is mooi.'], ['Stel niet uit tot morgen', 'wat', 'je vandaag kunt doen.'], ['Dat is het mooiste', 'wat', 'ik ooit gezien heb.']];
  d.ex({ g: 30, title: 'Exercice 6 — die, dat ou wat ?', stars: '★★', instr: 'Complétez avec //die//, //dat// ou //wat//. Utilisez l’arbre de décision !' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const rh = ((mode === 'a' ? 6.42 : 6.8) - top) / 5;
    ex6.forEach(([a, w, b], i) => {
      const x = 0.6 + Math.floor(i / 5) * (cw + 0.2); const y = top + (i % 5) * rh;
      d.rect(s, x, y + 0.04, cw, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : SOFT, line: BORDER, lw: 0.75, radius: 0.1 });
      T(s, `${num(i)}//${a} [[<${w.toUpperCase()}>${w}</>]] ${b}//`, x + 0.15, y + 0.04, cw - 0.3, rh - 0.1, { size: 16.5, mode });
    });
    if (mode === 'a') exNote(s, 'N° 2, 7 et 10 : on entend aussi //dat// ; //<WAT>wat</>// est toujours juste · n° 5 : toute la phrase · n° 9 : sans nom (« ce que »).');
  });

  // ================================================================ 31 ex7 wie ou waar-
  const ex7 = [['de collega', 'met wie', 'ik samenwerk', 'met', 'WIE'], ['de laptop', 'waarmee', 'ik werk', 'met', 'WAAR'], ['de bus', 'waarop', 'ik elke dag wacht', 'op', 'WAAR'], ['de klant', 'over wie', 'we het gisteren hadden', 'over', 'WIE'],
    ['het project', 'waaraan', 'ze denkt', 'aan', 'WAAR'], ['de manager', 'aan wie', 'je het formulier geeft', 'aan', 'WIE'], ['de reden', 'waarom', 'hij vertrekt', 'om', 'WAAR'], ['het bedrijf', 'waarvoor', 'ik werk', 'voor', 'WAAR']];
  d.ex({ g: 31, title: 'Exercice 7 — Avec une préposition : wie ou waar- ?', stars: '★★', instr: 'Complétez avec la préposition donnée : préposition + //wie// (personne) ou //waar// + préposition (chose).' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const rh = ((mode === 'a' ? 6.42 : 6.8) - top) / 4;
    ex7.forEach(([n, r, rest, p, k], i) => {
      const x = 0.6 + Math.floor(i / 4) * (cw + 0.2); const y = top + (i % 4) * rh;
      d.rect(s, x, y + 0.04, cw, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : SOFT, line: BORDER, lw: 0.75, radius: 0.1 });
      T(s, `${num(i)}//${n} [[<${k}>${r}</>]] ${rest}//`, x + 0.15, y + 0.04, cw - 1.3, rh - 0.1, { size: 16.5, mode });
      chip(s, p, 'MU', x + cw - 1.05, y + (rh - 0.42) / 2 - 0.02, { size: 14, h: 0.4, w: 0.9 });
    });
    if (mode === 'a') exNote(s, 'N° 3, 5 et 8 : la pince est aussi correcte (//<WAAR>waar</> ik elke dag <WAAR>op</> wacht//) · n° 4 : //het hebben over// = parler de.');
  });

  // ================================================================ 32 ex8 la pince
  const ex8 = [['de pen <WAAR>waarmee</> ik schrijf', 'de pen <WAAR>waar</> ik <WAAR>mee</> schrijf', 1], ['het project <WAAR>waaraan</> we werken', 'het project <WAAR>waar</> we <WAAR>aan</> werken', 1], ['de vergadering <WAAR>waarover</> hij praat', 'de vergadering <WAAR>waar</> hij <WAAR>over</> praat', 1],
    ['de bus <WAAR>waarop</> ik al een uur wacht', 'de bus <WAAR>waar</> ik al een uur <WAAR>op</> wacht', 1], ['de documenten <WAAR>waarnaar</> je zoekt', 'de documenten <WAAR>waar</> je <WAAR>naar</> zoekt', 0], ['het bedrijf <WAAR>waarvoor</> ik werk', 'het bedrijf <WAAR>waar</> ik <WAAR>voor</> werk', 0]];
  d.ex({ g: 32, title: 'Exercice 8 — La pince', stars: '★★', instr: 'Passez d’une forme à l’autre : en un mot ⇄ avec la pince.' }, (s, mode, top) => {
    const rh = (6.42 - top) / 6;
    ex8.forEach(([a, b, dir], i) => pair(s, top + i * rh, rh, dir ? `${num(i)}//${a}//` : `${num(i)}//[[${a}]]//`, dir ? `//[[${b}]]//` : `//${b}//`, mode, { arrow: '⇄', ac: C.WAAR, ansPlain: true, ls: 16.5, rs: 16.5, lw: 5.7 }));
    if (mode === 'a') exNote(s, 'N° 4 : la préposition se place juste avant le verbe, après //al een uur//.');
  });

  // ================================================================ 33 ex9 dont et où
  const ex9 = [['le bureau **où** je travaille', 'het kantoor <WAAR>waar</> ik werk'], ['le jour **où** j’ai commencé', 'de dag <BL>dat</> (<BL>waarop</>) ik begonnen ben'], ['le dossier **dont** j’ai besoin', 'het dossier <DAT>dat</> ik nodig heb'], ['le collègue **dont** je parle', 'de collega <WIE>over wie</> ik praat'],
    ['le projet **dont** je suis fier·e', 'het project <WAAR>waarop</> ik trots ben'], ['l’année **où** nous avons déménagé', 'het jaar <BL>dat</> (<BL>waarin</>) we verhuisd zijn'], ['la collègue **dont** la voiture est en panne', 'de collega <WIE>van wie</> de auto kapot is'], ['la salle **où** nous nous réunissons', 'de zaal <WAAR>waar</> (<WAAR>waarin</>) we vergaderen']];
  d.ex({ g: 33, title: 'Exercice 9 — Traduire « dont » et « où »', stars: '★★★', instr: 'Traduisez. Pour « dont », cherchez d’abord le verbe néerlandais !' }, (s, mode, top) => {
    const rh = (6.42 - top) / 8;
    ex9.forEach(([f, n], i) => pair(s, top + i * rh, rh, `${num(i)}« ${f} »`, `//[[${n}]]//`, mode, { lc: C.DIE, ansPlain: true, ls: 15.5, rs: 16, lw: 5.3 }));
    if (mode === 'a') exNote(s, 'N° 3 : //nodig hebben//, sans préposition · n° 4 : //praten over// · n° 5 : //trots zijn op// · n° 2 et 6 : aussi //ik begon, we verhuisden//.');
  });

  // ================================================================ 34 ex10 le détective
  d.ex({ g: 34, title: 'Exercice 10 — Le détective', stars: '★★', instr: 'Karim écrit à Lotte. Trouvez les 5 erreurs de relatifs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    T(s, 'Van: Karim Benali · Aan: Lotte Maes · Onderwerp: nieuws van kantoor', 0.85, top, 8.5, 0.5, { size: 13, color: C.MU });
    const fix = (bad, good) => (mode === 'q' ? bad : `~~${bad}~~ ${good}`);
    const body = ['//Beste Lotte,//',
      `//Bedankt voor het rapport ${fix('die', '<DAT>dat</>')} je gisteren hebt gestuurd. De printer ${fix('die staat op de tweede verdieping', '<DIE>die</> op de tweede verdieping <V>staat</>')}, is nog altijd kapot. De klant ${fix('met wat', '<WIE>met wie</>')} ik vorige week vergaderd heb, wil het contract tekenen. Vrijdag is de dag ${fix('waar', '<BL>dat</>')} we de nieuwe stagiair ontmoeten. O ja, de lift werkt nog altijd niet, ${fix('dat', '<WAT>wat</>')} erg lastig is.//`,
      '//Groetjes,//', '//Karim//'];
    T(s, body, 0.95, top + 0.65, 8.3, h - 0.8, { size: 17, gap: 6, ls: 1.12, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    T(s, mode === 'q' ? '**5 erreurs ?**' : '**5 erreurs ✓**', 9.9, top + 1.95, 2.83, 0.9, { size: 22, color: 'FFFFFF', align: 'center' });
    if (mode === 'a') T(s, 'Les règles : diapos 5 (//het//), 7 (le verbe), 14 (personne), 18 (le temps : aussi //<BL>waarop</>//), 12 (toute la phrase).', 9.9, top + 3.05, 2.83, 2.2, { size: 13, italic: true, color: C.MU, valign: 'top' });
  });

  // ================================================================ 35 ex11 Taboe !
  {
    const s = d.page({ g: 35, tag: 'JIJ NU !', title: 'Exercice 11 — Taboe ! Définissez sans nommer', stars: '★' });
    d.ill(s, 'speech-balloon', 0.6, 1.5, 0.8, 0.8);
    T(s, 'Par deux : A tire une carte et la définit avec une **relative** ; B devine. 1 minute par carte.', 1.55, 1.5, 11.1, 0.8, { size: 16 });
    const st = [['Het is iemand', 'die', 'DIE'], ['Het is iets', 'waarmee', 'WAAR'], ['Het is een plek', 'waar', 'WAAR'], ['Het is de dag', 'waarop', 'BL']];
    const sw = (12.13 - 3 * 0.18) / 4;
    st.forEach(([a, r, k], i) => {
      const x = 0.6 + i * (sw + 0.18);
      d.rect(s, x, 2.45, sw, 0.55, { fill: TINT[k], line: C[k], lw: 1.5, radius: 0.12 });
      T(s, `//${a} <${k}>${r}</>…//`, x, 2.45, sw, 0.55, { size: 16.5, align: 'center' });
    });
    const cards = [['woman-office-worker', 'de receptionist'], ['printer', 'de printer'], ['fork-and-knife-with-plate', 'de refter'], ['identification-card', 'de badge'], ['backpack', 'de stagiair'], ['spiral-calendar', 'de deadline'], ['key', 'het wachtwoord'], ['chair', 'de vergaderzaal']];
    const cw = (12.13 - 3 * 0.2) / 4;
    cards.forEach(([il, w], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.2); const y = 3.2 + Math.floor(i / 4) * 1.55; const rot = [-2, 1.5, -1, 2][i % 4];
      d.rect(s, x, y, cw, 1.35, { fill: 'FFFFFF', line: C.DIE, lw: 1.5, radius: 0.12, shadow: true, rotate: rot });
      d.ill(s, il, x + 0.2, y + 0.3, 0.75, 0.75);
      const [art, ...rest] = w.split(' ');
      T(s, `//**<${art === 'de' ? 'DIE' : 'DAT'}>${art}</> ${rest.join(' ')}**//`, x + 1.05, y, cw - 1.15, 1.35, { size: 16.5, color: C.DIE, rotate: rot });
    });
    d.rect(s, 0.6, 6.32, 12.13, 0.52, { fill: 'bg2', line: BORDER, radius: 0.12 });
    T(s, '**1 point** par mot deviné · **−1** si le mot de la carte est prononcé', 0.85, 6.32, 11.7, 0.52, { size: 15 });
  }

  // ================================================================ 36 ex12 la photo d'équipe
  {
    const s = d.page({ g: 36, tag: 'MISE EN SITUATION', title: 'Exercice 12 — La photo d’équipe', stars: '★★★' });
    const W = 8.0;
    d.rect(s, 0.6, 1.62, W, 0.62, { fill: 'purple', tr: 90, line: 'purple', lw: 1 });
    T(s, 'Qui est qui chez Peeters & Co ? A décrit une personne de la photo en trois relatives ; B devine.', 0.85, 1.62, W - 0.5, 0.62, { size: 16 });
    const rw = (W - 0.3) / 2;
    [['A', 'Je décris', 'Ik zoek de collega <DIE>die</>… · <WIE>met wie</>… · <WIE>naast wie</>…', C.BL], ['B', 'Je devine', 'Is het de collega <DIE>die</> een koffie drinkt? Puis on échange les rôles.', C.WAAR]].forEach(([L, h, t, c], i) => {
      const x = 0.6 + i * (rw + 0.3);
      d.rect(s, x, 2.45, rw, 2.0, { fill: 'FFFFFF', line: c, lw: 1.5, shadow: true });
      d.num(s, L, x + 0.18, 2.6, 0.5, c, 18);
      T(s, `**${h}**`, x + 0.85, 2.6, rw - 1.0, 0.5, { size: 17, color: c });
      T(s, `//${t}//`, x + 0.25, 3.2, rw - 0.45, 1.15, { size: 16, valign: 'top' });
    });
    d.rect(s, 0.6, 4.65, W, 2.2, { fill: 'bg2', line: BORDER });
    T(s, '**BANQUE DE RELATIVES**', 0.8, 4.73, 5, 0.3, { size: 12, color: C.MU, cs: 2 });
    T(s, '//<DIE>die</> een koffie drinkt · <DIE>die</> aan de telefoon is · <DIE>die</> met de fiets komt · <DIE>die</> naast de plant staat · <DIE>die</> een laptop heeft · <WIE>met wie</> ik lunch · <WIE>naast wie</> ik zit · <WAAR>waarmee</> hij werkt · <WAT>wat</> ik grappig vind//', 0.8, 5.08, W - 0.4, 1.7, { size: 16, valign: 'top', lightCat: true, gap: 3 });
    // la photo
    const px = 8.9; const pw = 3.83;
    d.rect(s, px, 1.62, pw, 5.23, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
    d.rect(s, px + 0.15, 1.77, pw - 0.3, 4.93, { fill: 'EAF2FB', line: null, radius: 0.02 });
    const team = [['woman-office-worker', 'hot-beverage'], ['man-office-worker', 'laptop'], ['woman-technologist', 'telephone-receiver'], ['man-technologist', 'potted-plant'], ['woman-cook', 'bicycle'], ['man-mechanic', 'file-folder']];
    team.forEach(([p, o], i) => {
      const x = px + 0.3 + (i % 2) * 1.75; const y = 1.95 + Math.floor(i / 2) * 1.58;
      d.ill(s, p, x + 0.1, y + 0.1, 1.1, 1.1);
      d.ill(s, o, x + 1.05, y + 0.75, 0.5, 0.5);
      d.num(s, i + 1, x, y, 0.36, 'tx2', 13);
    });
  }

  // ================================================================ 37 ticket de sortie
  d.ticket({
    g: 37,
    q: ['Complétez : //het meisje … aan de balie werkt//', 'Traduisez : //la collègue avec qui je travaille//', 'Traduisez : //tout ce que tu dis//'],
    self: ['Choisir', 'Construire', 'Traduire'],
    teaser: { icon: 'FaBook', text: '**Défi de la semaine** : définissez trois mots de votre métier avec une relative (//Het is iemand die… · iets waarmee…//).' },
  });
}

module.exports = { meta, build };
