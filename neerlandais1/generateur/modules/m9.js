// Module 9 — Zinnen verbinden · Relier deux phrases
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 9, slug: 'Zinnen_verbinden', title: 'Zinnen verbinden — Relier deux phrases', short: 'Zinnen verbinden', template: 'module_9_zinnen_verbinden.md' };

const PONT = 'accent2'; // coordination (le pont) = bleu
const HOOK = 'accent1'; // subordination (le wagon) = orange

function build(d) {
  // sentence strip: parts = [text, type] · n normal · v verb · v2 2nd verb · p mot-pont · c mot-crochet · z case 0
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wForce]) => {
      const w = wForce || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        v2: { fill: 'FBEDEB', line: 'accent6', lw: 2, dash: 'dash', color: 'accent6', bold: true },
        p: { fill: PONT, line: null, color: 'bg1', bold: true },
        c: { fill: HOOK, line: null, color: 'bg1', bold: true },
        z: { fill: 'bg2', line: 'accent5', lw: 1.25, dash: 'sysDash', color: 'accent2', bold: true },
        f: { fill: 'F4F5F7', line: 'D5DCE6', lw: 1, color: 'accent5', bold: false },
      }[ty || 'n'];
      d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, dash: st.dash, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle', italic: ty === 'f' });
      cx += w + gap;
    });
    return cx - gap;
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2') => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size: 19, color: 'bg1', valign: 'middle' });
  };
  const wheels = (s, x, w, y) => { [x + 0.35, x + w - 0.75].forEach((wx) => d.oval(s, wx, y, 0.4, 0.4, { fill: '4A5A70', line: 'FFFFFF', lw: 1.5 })); };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Zinnen verbinden', sub: 'Relier deux phrases', line: 'Ik blijf thuis omdat ik ziek ben.',
    visual: (s) => {
      d.ill(s, 'locomotive', 10.9, 1.25, 1.8, 1.8);
      d.line(s, 6.9, 4.85, 12.8, 4.85, { color: 'B8C2CF', lw: 3, arrow: false });
      d.rect(s, 6.95, 3.25, 2.55, 1.35, { fill: 'FFFFFF', line: 'accent2', lw: 3, radius: 0.1 });
      d.t(s, 'Ik blijf thuis', 6.95, 3.25, 2.55, 1.35, { size: 20, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
      wheels(s, 6.95, 2.55, 4.45);
      d.line(s, 9.5, 3.95, 9.95, 3.95, { color: 'FFFFFF', lw: 3, arrow: false });
      d.chip(s, 'omdat', 9.2, 2.65, HOOK, 0.4, 15);
      d.rect(s, 9.95, 3.25, 2.8, 1.35, { fill: 'FFFFFF', line: HOOK, lw: 3, radius: 0.1 });
      d.t(s, 'ik ziek', 9.95, 3.25, 1.75, 1.35, { size: 20, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
      d.rect(s, 11.7, 3.45, 0.92, 0.95, { fill: 'FBEDEB', line: 'accent6', lw: 2.5, radius: 0.08 });
      d.t(s, 'ben', 11.7, 3.45, 0.92, 0.95, { size: 20, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
      wheels(s, 9.95, 2.8, 4.45);
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'GiStoneBridge', h: 'Relier', t: 'Je relie deux phrases avec //en, maar, want, of, dus//.', color: PONT },
      { icon: 'FaTrain', h: 'Accrocher', t: 'Je construis une phrase avec //omdat, dat, als//… et je mets le **verbe à la fin**.', color: HOOK },
      { icon: 'FaQuestion', h: 'Expliquer', t: 'Je donne une raison : //want… / omdat…//', color: 'accent3' },
    ],
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — où est le verbe ?' });
    const cols = [['①', 2.0, 'tx2'], ['②', 1.8, 'accent6'], ['③', 4.6, 'tx2'], ['④', 1.8, 'accent6']];
    let x = 1.6;
    const X = cols.map(([n, w, c]) => { const r = [x, w]; d.num(s, n.replace(/[①②③④]/, (m) => '①②③④'.indexOf(m) + 1), x + w / 2 - 0.25, 1.7, 0.5, c, 16); x += w + 0.12; return r; });
    const rows = [
      [['Karim', 'n'], ['werkt', 'v'], ['vandaag in Brussel.', 'n'], null],
      [['Vandaag', 'n'], ['werkt', 'v'], ['Karim in Brussel.', 'n'], null],
      [['Karim', 'n'], ['moet', 'v'], ['vandaag in Brussel', 'n'], ['werken.', 'v2']],
    ];
    rows.forEach((r, i) => {
      const y = 2.4 + i * 1.0;
      d.ill(s, ['man-office-worker', 'spiral-calendar', 'man-office-worker'][i], 0.65, y + 0.05, 0.7, 0.7);
      r.forEach((p, k) => { if (p) strip(s, X[k][0], y, [[p[0], p[1], X[k][1]]], { size: 22, h: 0.8 }); });
    });
    d.rect(s, 0.6, 5.5, 12.13, 0.55, { fill: 'accent6', tr: 90, line: 'accent6', lw: 1 });
    d.t(s, 'Rappel (M3) : le verbe conjugué est **toujours en case ②**.', 0.85, 5.5, 11.7, 0.55, { size: 19, valign: 'middle' });
    band(s, 'Aujourd’hui : la **seule** situation, dans une phrase affirmative, où le verbe quitte la case ② → la subordonnée.', 6.2, 0.65, HOOK);
  }

  // ---------------------------------------------------------------- 4 deux façons de relier
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Deux façons de relier deux phrases' });
    // pont
    d.rect(s, 0.6, 1.7, 5.95, 3.9, { fill: PONT, tr: 92, line: PONT, lw: 2 });
    d.t(s, 'Le pont', 0.85, 1.75, 5.5, 0.55, { size: 22, bold: true, color: PONT, head: true, valign: 'middle' });
    d.curve(s, 2.25, 3.55, 4.95, 3.55, { h: 0.7, color: PONT, lw: 4 });
    d.chip(s, 'want', 3.15, 2.62, PONT, 0.42, 16);
    strip(s, 0.85, 3.55, [['Ik blijf thuis,', 'n']], { size: 19, h: 0.75 });
    strip(s, 3.95, 3.55, [['ik', 'n'], ['ben', 'v'], ['ziek.', 'n']], { size: 19, h: 0.75, gap: 0.06 });
    d.t(s, 'deux phrases complètes : **rien ne bouge**', 0.85, 4.55, 5.5, 0.45, { size: 17, color: 'tx2', align: 'center' });
    // wagon
    d.rect(s, 6.78, 1.7, 5.95, 3.9, { fill: HOOK, tr: 92, line: HOOK, lw: 2 });
    d.t(s, 'Le wagon accroché', 7.0, 1.75, 5.5, 0.55, { size: 22, bold: true, color: HOOK, head: true, valign: 'middle' });
    strip(s, 7.0, 3.55, [['Ik blijf thuis', 'n']], { size: 19, h: 0.75 });
    d.chip(s, 'omdat', 9.05, 2.75, HOOK, 0.42, 16);
    d.line(s, 9.62, 3.17, 9.62, 3.5, { color: HOOK, lw: 2.5 });
    const end = strip(s, 9.5, 3.55, [['ik', 'n'], ['ziek', 'n'], ['ben', 'v']], { size: 19, h: 0.75, gap: 0.06 });
    d.curve(s, 10.25, 3.55, end - 0.35, 3.55, { h: 0.35, color: 'accent6', lw: 2.5 });
    d.t(s, 'principale + subordonnée : **verbe à la fin**', 7.0, 4.55, 5.5, 0.45, { size: 17, color: 'tx2', align: 'center' });
    band(s, 'Même sens : « Je reste à la maison **parce que** je suis malade. »', 5.85, 0.7, 'tx2');
    d.t(s, '//hoofdzin// = proposition principale · //bijzin// = subordonnée', 0.6, 6.6, 12.13, 0.3, { size: 14, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 5 mots-ponts
  d.section('Comprendre');
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Les 5 mots-ponts : rien ne bouge' });
    const P = [
      ['en', 'et', '//Karim **!!werkt!!** in Brussel **en** Sofie **!!woont!!** in Gent.//'],
      ['maar', 'mais', '//Ik **!!spreek!!** Frans, **maar** ik **!!leer!!** Nederlands.//'],
      ['want', 'car', '//Ik **!!neem!!** de trein, **want** ik **!!heb!!** geen auto.//'],
      ['of', 'ou', '//Sofie **!!werkt!!** thuis **of** ze **!!is!!** ziek.//'],
      ['dus', 'donc', '//Het **!!regent!!**, **dus** ik **!!neem!!** de bus.//\n//Het **!!regent!!**, **dus** **!!neem!!** ik de bus.//'],
    ];
    const w = (12.13 - 4 * 0.2) / 5;
    P.forEach(([m, fr, ex], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 1.7, w, 4.3, { fill: 'bg1', line: PONT, lw: 2, shadow: true });
      d.rect(s, x, 1.7, w, 1.35, { fill: PONT, line: null, radius: 0.08 });
      d.t(s, m, x, 1.72, w, 0.85, { size: 38, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, fr, x, 2.5, w, 0.45, { size: 17, italic: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, ex, x + 0.15, 3.2, w - 0.3, 2.65, { size: 17, valign: 'top', fit: true, max: 17, min: 13 });
      if (m === 'dus') d.chip(s, '+ inversion', x + 0.25, 5.45, 'accent1', 0.38, 12);
    });
    band(s, 'Moyen mnémotechnique : **EMWOD** — //en · maar · want · of · dus//. Le verbe reste en case ② des deux côtés.', 6.2, 0.65, PONT);
  }

  // ---------------------------------------------------------------- 6 pont dans la grille
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'Le pont dans la grille : la case 0' });
    const X = [[2.3, 1.7], [4.1, 2.0], [6.2, 4.0]];
    [['0', 'accent2'], ['①', 'tx2'], ['②', 'accent6'], ['③', 'tx2']].forEach(([n, c], i) => {
      const x = i === 0 ? 0.6 : X[i - 1][0]; const w = i === 0 ? 1.55 : X[i - 1][1];
      d.num(s, i === 0 ? '0' : i, x + w / 2 - 0.25, 1.72, 0.5, c, 16);
    });
    const r1 = [['Sofie', 'n'], ['werkt', 'v'], ['bij Peeters & Co', 'n']];
    const r2 = [['ze', 'n'], ['woont', 'v'], ['in Gent.', 'n']];
    [[r1, 2.4], [r2, 4.25]].forEach(([r, y]) => r.forEach(([t, ty], k) => strip(s, X[k][0], y, [[t, ty, X[k][1]]], { size: 24, h: 0.85 })));
    strip(s, 0.6, 3.33, [['maar', 'z', 1.55]], { size: 24, h: 0.8 });
    d.line(s, 2.15, 3.73, 10.2, 3.73, { color: 'accent2', lw: 1.5, dash: 'dash', arrow: false });
    d.t(s, 'le mot-pont reste « sur le pont »', 4.1, 3.38, 6.1, 0.32, { size: 14, italic: true, color: 'accent2' });
    d.card(s, 10.45, 2.4, 2.28, 2.7, { icon: 'FaExclamation', head: 'dus', color: 'accent1', body: ['peut aussi entrer en case ① → inversion'], size: 16 });
    band(s, 'Chaque phrase garde la structure du M3 : **verbe en case ②**.', 6.15, 0.7, 'tx2');
  }

  // ---------------------------------------------------------------- 7 piège want / omdat
  {
    const s = d.page({ g: 7, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : want ≠ omdat' });
    d.rect(s, 0.6, 1.7, 12.13, 5.15, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    d.t(s, '« Je reste à la maison **car / parce que** je suis malade. »', 0.6, 2.2, 12.13, 0.6, { size: 22, align: 'center', valign: 'middle' });
    d.line(s, 6.66, 2.85, 3.7, 3.35, { color: 'accent5', lw: 2 });
    d.line(s, 6.66, 2.85, 9.6, 3.35, { color: 'accent5', lw: 2 });
    [[0.85, PONT, 'want', [['Ik blijf thuis,', 'n'], ['want', 'p'], ['ik', 'n'], ['ben', 'v'], ['ziek.', 'n']], 'verbe en ②'], [6.8, HOOK, 'omdat', [['Ik blijf thuis', 'n'], ['omdat', 'c'], ['ik', 'n'], ['ziek', 'n'], ['ben', 'v']], 'verbe à la fin']].forEach(([x, c, , parts, lab]) => {
      d.rect(s, x, 3.45, 5.7, 1.65, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25 });
      d.icon(s, 'FaCheckCircle', 'accent3', x + 0.12, 3.55, 0.34);
      strip(s, x + 0.2, 3.98, parts, { size: 17, h: 0.62, gap: 0.05 });
      d.t(s, lab, x, 4.68, 5.7, 0.35, { size: 15, bold: true, color: c, align: 'center' });
    });
    d.icon(s, 'FaTimesCircle', 'accent6', 0.95, 5.5, 0.38);
    d.t(s, '//{{Ik blijf thuis omdat ik ben ziek.}}//', 1.45, 5.35, 5.2, 0.7, { size: 19, valign: 'middle' });
    d.icon(s, 'FaTimesCircle', 'accent6', 6.9, 5.5, 0.38);
    d.t(s, '//{{Ik blijf thuis want ik ziek ben.}}//', 7.4, 5.35, 5.2, 0.7, { size: 19, valign: 'middle' });
    d.t(s, 'Même sens, grammaire différente. Seul //omdat// répond à //Waarom?// : //Omdat ik ziek ben.//', 0.6, 6.15, 12.13, 0.55, { size: 16, italic: true, color: 'tx2', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 8 S12 verbe à la fin
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'La subordonnée : le verbe va au bout' });
    d.rect(s, 0.6, 1.95, 3.6, 1.55, { fill: PONT, tr: 90, line: PONT, lw: 2 });
    d.t(s, 'HOOFDZIN · principale', 0.6, 1.6, 3.6, 0.32, { size: 13, bold: true, color: PONT, align: 'center', cs: 1 });
    strip(s, 0.85, 2.35, [['Ik', 'n', 1.2], ['denk', 'v', 1.75]], { size: 26, h: 0.8 });
    d.rect(s, 4.45, 2.35, 1.6, 0.8, { fill: HOOK, line: null });
    d.t(s, 'dat', 4.45, 2.35, 1.6, 0.8, { size: 26, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, 'mot-crochet', 4.25, 1.6, 2.0, 0.32, { size: 13, bold: true, color: HOOK, align: 'center' });
    d.rect(s, 6.3, 1.95, 6.43, 1.55, { fill: HOOK, tr: 90, line: HOOK, lw: 2 });
    d.t(s, 'BIJZIN · subordonnée', 6.3, 1.6, 6.43, 0.32, { size: 13, bold: true, color: HOOK, align: 'center', cs: 1 });
    strip(s, 6.55, 2.35, [['ik', 'n', 1.2], ['', 'z', 1.55], ['ziek', 'n', 1.6], ['ben', 'v', 1.5]], { size: 26, h: 0.8 });
    d.curve(s, 8.55, 2.35, 11.85, 2.35, { h: 0.33, color: 'accent6', lw: 3 });
    d.t(s, 'le verbe saute au bout', 8.6, 3.2, 3.3, 0.3, { size: 13, italic: true, color: 'accent6', align: 'center' });
    // french
    d.t(s, 'FRANÇAIS', 0.6, 3.85, 3, 0.32, { size: 13, bold: true, color: 'accent5', cs: 2 });
    strip(s, 0.85, 4.2, [['Je', 'f', 1.2], ['pense', 'f', 1.75]], { size: 22, h: 0.7 });
    strip(s, 4.45, 4.2, [['que', 'f', 1.6]], { size: 22, h: 0.7 });
    strip(s, 6.55, 4.2, [['je', 'f', 1.2], ['suis', 'f', 1.55], ['malade.', 'f', 1.6]], { size: 22, h: 0.7 });
    d.t(s, '→ en français, le verbe reste à sa place', 0.6, 4.92, 12.13, 0.3, { size: 14, italic: true, color: 'accent5', align: 'center' });
    band(s, 'Règle : après un mot-crochet, le verbe conjugué va **à la fin de la subordonnée**. Le sujet suit **en général** directement le mot-crochet.', 5.35, 0.95, 'tx2');
    d.t(s, 'Astuce : lisez la phrase et tapez sur la table au moment du verbe !', 0.6, 6.45, 12.13, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 9 omdat
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'omdat : donner une raison' });
    d.ill(s, 'thinking-face', 0.8, 2.0, 1.8, 1.8);
    d.rect(s, 0.6, 4.0, 2.4, 1.0, { fill: 'accent2', line: null, radius: 0.3 });
    d.t(s, '//Waarom?//', 0.6, 4.0, 2.4, 1.0, { size: 30, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    const ex = [['//Ik kom te laat **omdat** de trein vertraging **!!heeft!!**.//', 'train'], ['//Sofie is blij **omdat** ze een nieuwe collega **!!heeft!!**.//', 'woman-office-worker'], ['//Karim leert Nederlands **omdat** hij in Brussel **!!werkt!!**.//', 'office-building']];
    ex.forEach(([t, il], i) => {
      const y = 1.75 + i * 1.18;
      d.line(s, 3.05, 4.5, 3.6, y + 0.5, { color: GHOST, lw: 1.5, arrow: false });
      d.rect(s, 3.6, y, 9.13, 1.0, { fill: 'bg1', line: HOOK, lw: 2, shadow: true });
      d.ill(s, il, 3.75, y + 0.18, 0.64, 0.64);
      d.t(s, t, 4.6, y, 8.0, 1.0, { size: 21, valign: 'middle' });
    });
    d.rect(s, 3.6, 5.4, 9.13, 1.45, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25 });
    d.t(s, ['— //Waarom bel je?//', '— //**Omdat** ik een vraag **!!heb!!**.//  (la subordonnée répond seule)'], 3.85, 5.4, 8.7, 1.45, { size: 20, valign: 'middle', gap: 6 });
    d.t(s, '//vertraging hebben// = avoir du retard', 0.6, 5.3, 2.8, 0.8, { size: 13, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 10 dat
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'dat : rapporter une pensée' });
    const h4 = [
      ['thinking-face', '//Ik **denk**…//', 'je pense que', '//… **dat** de vergadering om 10 uur **!!begint!!**.//'],
      ['nerd-face', '//Ik **weet**…//', 'je sais que', '//… **dat** je het druk **!!hebt!!**.//'],
      ['crossed-fingers', '//Ik **hoop**…//', 'j’espère que', '//… **dat** het morgen mooi weer **!!is!!**.//'],
      ['speaking-head', '//Sofie **zegt**…//', 'Sofie dit que', '//… **dat** ze vandaag thuis **!!werkt!!**.//'],
    ];
    const w = (12.13 - 3 * 0.25) / 4;
    h4.forEach(([il, a, fr, b], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x + 0.1, 1.7, w - 0.2, 2.15, { fill: 'FFFFFF', line: HOOK, lw: 2, radius: 0.35, shadow: true });
      d.t(s, b, x + 0.3, 1.75, w - 0.6, 2.05, { size: 18, valign: 'middle', align: 'center' });
      [[0.95, 0.22], [0.75, 0.15]].forEach(([dy, dd], k) => d.oval(s, x + w / 2 - dd / 2 - k * 0.12, 3.85 + k * 0.28 + 0.05, dd, dd, { fill: 'FFFFFF', line: HOOK, lw: 1.5 }));
      d.ill(s, il, x + w / 2 - 0.6, 4.35, 1.2, 1.2);
      d.t(s, a, x, 5.6, w, 0.45, { size: 20, align: 'center', valign: 'middle' });
      d.t(s, fr, x, 6.02, w, 0.35, { size: 14, italic: true, color: 'accent5', align: 'center' });
    });
    d.t(s, '⚠ //dat// ne s’omet **jamais** (≠ anglais //I think he’s right//) : //Ik denk **dat** hij gelijk heeft.//', 0.6, 6.45, 12.13, 0.4, { size: 15, color: 'accent6', align: 'center' });
  }

  // ---------------------------------------------------------------- 11 als + choc des verbes
  {
    const s = d.page({ g: 11, tag: 'GRAMMAIRE', title: 'als : la condition… et le choc des verbes' });
    d.t(s, '① ORDRE DE BASE', 0.6, 1.7, 5, 0.35, { size: 14, bold: true, color: 'accent5', cs: 2 });
    strip(s, 0.6, 2.1, [['Je', 'n'], ['mag', 'v'], ['me altijd bellen', 'n'], ['als', 'c'], ['je vragen', 'n'], ['hebt.', 'v']], { size: 22, h: 0.8, gap: 0.08 });
    d.t(s, '② LA SUBORDONNÉE EN TÊTE = CASE ①', 0.6, 3.25, 8, 0.35, { size: 14, bold: true, color: 'accent5', cs: 2 });
    d.rect(s, 0.5, 3.6, 4.65, 1.05, { fill: HOOK, tr: 90, line: HOOK, lw: 1.5, dash: 'dash' });
    const e = strip(s, 0.6, 3.72, [['Als', 'c'], ['je vragen', 'n'], ['hebt,', 'v']], { size: 22, h: 0.8, gap: 0.08 });
    const e2 = strip(s, e + 0.12, 3.72, [['mag', 'v'], ['je me altijd bellen.', 'n']], { size: 22, h: 0.8, gap: 0.08 });
    void e2;
    d.ill(s, 'collision', e - 0.42, 4.55, 0.75, 0.75);
    d.t(s, '**verbe, verbe** !', e - 1.2, 5.25, 2.6, 0.4, { size: 17, color: 'accent6', align: 'center' });
    d.t(s, 'case ①', 0.6, 4.7, 4.5, 0.32, { size: 13, italic: true, color: HOOK, align: 'center' });
    d.card(s, 9.75, 1.65, 2.98, 1.95, { icon: 'FaSync', head: 'Comme au M3', color: 'tx2', body: ['//Morgen **!!werk!!** ik.//', 'Un **seul bloc** en ① → **inversion**.'], size: 15, headSize: 16 });
    band(s, 'Autre exemple : //**Als** het **!!regent!!**, **!!neem!!** ik de bus.//  ·  Formel : //Als er vragen zijn, mag u me altijd contacteren.//', 6.0, 0.85, 'tx2');
  }

  // ---------------------------------------------------------------- 12 bonus als / of
  {
    const s = d.page({ g: 12, tag: '+ BONUS', title: '+ BONUS : « si » = als ou of ?' });
    [['als', 'si = condition', 'cloud-with-rain', HOOK, ['//**Als** het **!!regent!!**, neem ik de bus.//'], 'Peut-on dire « **à condition que** » ? → //als//'], ['of', 'si = question indirecte', 'red-question-mark', 'purple', ['//Ik weet niet **of** hij morgen **!!komt!!**.//', '//Ik vraag me af **of** ik kans **!!maak!!**.//'], 'Peut-on dire « **est-ce que** » ? → //of//']].forEach(([w, sub, il, c, ex, test], i) => {
      const x = 0.6 + i * 6.2;
      d.rect(s, x, 1.7, 5.93, 3.45, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, x, 1.7, 5.93, 1.0, { fill: c, line: null, radius: 0.08 });
      d.t(s, w, x + 0.25, 1.7, 1.4, 1.0, { size: 38, bold: true, color: 'bg1', valign: 'middle', head: true });
      d.t(s, sub, x + 1.6, 1.7, 3.4, 1.0, { size: 18, bold: true, color: 'bg1', valign: 'middle' });
      d.ill(s, il, x + 5.0, 1.82, 0.76, 0.76);
      d.t(s, ex, x + 0.3, 2.8, 5.4, 1.2, { size: 20, valign: 'middle', gap: 8 });
      d.rect(s, x + 0.25, 4.1, 5.43, 0.85, { fill: 'bg2', line: null });
      d.t(s, test, x + 0.4, 4.1, 5.2, 0.85, { size: 16, valign: 'middle' });
    });
    d.trap(s, 0.6, 5.32, 12.13, 1.55, '//{{Ik vraag me af als ik kans maak.}}//', '//Ik vraag me af **of** ik kans maak.//', { size: 18 });
  }

  // ---------------------------------------------------------------- 13 deux verbes
  {
    const s = d.page({ g: 13, tag: 'GRAMMAIRE', title: 'Deux verbes dans le wagon' });
    const rows = [
      [[['Ik', 'n'], ['moet', 'v'], ['morgen', 'n'], ['werken.', 'v2']], [['Ik kom niet', 'n'], ['omdat', 'c'], ['ik morgen', 'n'], ['moet', 'v'], ['werken.', 'v2']]],
      [[['Ik', 'n'], ['kan', 'v'], ['niet', 'n'], ['komen.', 'v2']], [['Ik denk', 'n'], ['dat', 'c'], ['ik niet', 'n'], ['kan', 'v'], ['komen.', 'v2']]],
    ];
    rows.forEach(([a, b], i) => {
      const y = 1.75 + i * 2.05;
      d.t(s, 'PINCE (M3)', 0.6, y, 3, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
      strip(s, 0.6, y + 0.35, a, { size: 17, h: 0.7, gap: 0.06 });
      d.line(s, 4.85, y + 0.7, 5.65, y + 0.7, { color: 'accent5', lw: 2.5 });
      d.t(s, 'SUBORDONNÉE : LA PINCE SE REFERME', 5.85, y, 6.6, 0.3, { size: 12, bold: true, color: HOOK, cs: 2 });
      const e = strip(s, 5.85, y + 0.35, b, { size: 17, h: 0.7, gap: 0.06 });
      d.rect(s, e - 2.35, y + 1.15, 2.35, 0.32, { fill: 'accent6', line: null, radius: 0.05 });
      d.t(s, 'verbe conjugué + infinitif', e - 2.35, y + 1.15, 2.35, 0.32, { size: 11, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    band(s, 'En subordonnée, les deux verbes se retrouvent **ensemble à la fin**. Verbe séparable : //omdat ik je morgen **!!opbel!!**// (recollé).', 5.95, 0.9, 'tx2');
  }

  // ---------------------------------------------------------------- 14 synthèse
  {
    const s = d.page({ g: 14, tag: 'À RETENIR', title: 'À retenir : pont ou wagon ?' });
    s.addText('Quel mot relie ?', { shape: d.S.DIAMOND, x: 4.67, y: 1.65, w: 4.0, h: 1.1, fill: { color: 'EEF3F8' }, line: { color: '17375E', width: 1.5 }, fontSize: 18, bold: true, color: '1B2333', align: 'center', valign: 'middle', margin: 0 });
    d.line(s, 4.67, 2.2, 3.4, 2.95, { color: PONT, lw: 2.5 });
    d.line(s, 8.67, 2.2, 9.9, 2.95, { color: HOOK, lw: 2.5 });
    d.rect(s, 0.6, 3.0, 5.6, 2.1, { fill: 'bg1', line: PONT, lw: 2.5, shadow: true });
    d.rect(s, 0.6, 3.0, 5.6, 0.6, { fill: PONT, line: null, radius: 0.08 });
    d.t(s, 'PONT : //en · maar · want · of// (ou) · //dus//', 0.8, 3.0, 5.3, 0.6, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
    d.t(s, ['**rien ne bouge**', '//Ik **!!ben!!** moe, maar ik **!!werk!!** nog.//'], 0.85, 3.7, 5.1, 1.3, { size: 19, valign: 'middle', gap: 6 });
    d.rect(s, 7.13, 3.0, 5.6, 2.1, { fill: 'bg1', line: HOOK, lw: 2.5, shadow: true });
    d.rect(s, 7.13, 3.0, 5.6, 0.6, { fill: HOOK, line: null, radius: 0.08 });
    d.t(s, 'WAGON : //omdat · dat · als · of// (si)', 7.33, 3.0, 5.3, 0.6, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
    d.t(s, ['**verbe à la fin**', '//… omdat ik moe **!!ben!!**.//'], 7.38, 3.7, 5.1, 1.3, { size: 19, valign: 'middle', gap: 6 });
    d.line(s, 9.93, 5.1, 9.93, 5.4, { color: 'accent5', lw: 2 });
    s.addText('Le wagon est en tête ?', { shape: d.S.DIAMOND, x: 7.13, y: 5.4, w: 3.3, h: 1.0, fill: { color: 'EEF3F8' }, line: { color: '17375E', width: 1.25 }, fontSize: 13, bold: true, color: '1B2333', align: 'center', valign: 'middle', margin: 0 });
    d.line(s, 10.45, 5.9, 10.75, 5.9, { color: 'accent3', lw: 2 });
    d.t(s, 'OUI', 10.4, 5.5, 0.5, 0.3, { size: 11, bold: true, color: 'accent3' });
    d.rect(s, 10.8, 5.4, 1.93, 1.0, { fill: 'accent6', line: null });
    d.t(s, 'verbe, verbe !', 10.8, 5.4, 1.93, 1.0, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, '**Wagon en tête** : //**Als** ik moe **!!ben!!**, **!!drink!!** ik koffie.//', 0.6, 5.5, 6.3, 0.85, { size: 19, valign: 'middle' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 15 divider
  d.divider({ g: 15, tiles: [
    ['Inversion, rejet ou rien ?', '★', 'FaRandom'], ['Du pont au wagon', '★', 'FaTrain'], ['Le bon mot', '★★', 'FaPuzzlePiece'],
    ['Juist of fout?', '★★', 'FaCheck'], ['Waarom? en 1 minute', '★★', 'FaStopwatch'], ['Désolé, je suis en retard !', '★★★', 'FaUserClock'],
  ] });

  // ---------------------------------------------------------------- 16 ex1 inversion / rejet / niets
  const ex1 = [['gisteren', 0], ['omdat', 1], ['dikwijls', 0], ['als', 1], ['want', 2], ['en', 2], ['maar', 2], ['dat', 1], ['soms', 0], ['morgen', 0]];
  d.ex({ g: 16, title: 'Exercice 1 — Inversion, rejet ou rien ?', stars: '★', instr: 'Que se passe-t-il après chaque mot ? Classez-les.' }, (s, mode, top) => {
    if (mode === 'q') ex1.forEach(([w], i) => {
      const x = 0.6 + (i % 5) * 2.48; const y = top + Math.floor(i / 5) * 0.8;
      d.word(s, w, x, y, 2.25, 0.65, 'accent5', { size: 22, lw: 1.25, head: true, shadow: true });
    });
    const cy = mode === 'q' ? top + 1.75 : top + 0.1; const h = 6.88 - cy;
    [['INVERSIE', 'le verbe vient juste après', PONT, 0], ['REJET', 'verbe à la fin', HOOK, 1], ['NIETS', 'rien ne bouge', 'accent5', 2]].forEach(([lab, sub, c, k]) => {
      const x = 0.6 + k * 4.14;
      d.rect(s, x, cy, 3.85, h, { fill: c, tr: 90, line: c, lw: 2 });
      d.rect(s, x, cy, 3.85, 0.85, { fill: c, line: null, radius: 0.08 });
      d.t(s, lab, x, cy + 0.02, 3.85, 0.5, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      d.t(s, sub, x, cy + 0.48, 3.85, 0.33, { size: 14, italic: true, color: 'bg1', align: 'center', valign: 'middle' });
      if (mode === 'a') ex1.filter((e) => e[1] === k).forEach(([w], j) => d.t(s, `//${w}//`, x, cy + 1.0 + j * 0.62, 3.85, 0.55, { size: 26, bold: true, align: 'center', valign: 'middle' }));
    });
  });

  // ---------------------------------------------------------------- 17 ex2 want → omdat
  const ex2 = [['Ik neem de trein, want ik heb geen auto.', '… omdat ik geen auto **!!heb!!**.'], ['Sofie is blij, want het is vrijdag.', '… omdat het vrijdag **!!is!!**.'], ['Karim belt de klant, want hij heeft een vraag.', '… omdat hij een vraag **!!heeft!!**.'], ['We eten in de kantine, want het is goedkoop.', '… omdat het goedkoop **!!is!!**.'], ['Ik leer Nederlands, want ik werk in Brussel.', '… omdat ik in Brussel **!!werk!!**.'], ['Ik kom niet, want ik moet werken.', '… omdat ik **!!moet werken!!**.']];
  d.ex({ g: 17, title: 'Exercice 2 — Du pont au wagon', stars: '★', instr: 'Remplacez want par omdat : attention au verbe !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex2.forEach(([a, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, PONT, 13);
      d.rect(s, 1.1, y + 0.05, 5.95, rh - 0.12, { fill: PONT, tr: 88, line: PONT, lw: 1 });
      d.t(s, `//${a}//`, 1.25, y + 0.05, 5.7, rh - 0.12, { size: 18, valign: 'middle' });
      d.line(s, 7.1, y + rh / 2 - 0.03, 7.75, y + rh / 2 - 0.03, { color: HOOK, lw: 3 });
      d.t(s, 'omdat', 7.0, y, 0.85, rh / 2 - 0.05, { size: 11, bold: true, color: HOOK, align: 'center', valign: 'bottom' });
      d.rect(s, 7.8, y + 0.05, 4.93, rh - 0.12, { fill: mode === 'a' ? 'FDF1E6' : 'bg1', line: HOOK, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${b}//`, 7.95, y + 0.05, 4.7, rh - 0.12, { size: 19, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex3 le bon mot
  const ex3 = [['Ik drink koffie [[en]] Sofie drinkt thee.'], ['Ik weet [[dat]] je het druk hebt.'], ['[[Als]] het regent, neem ik de bus.'], ['Karim is moe, [[maar]] hij werkt nog.'], ['Ik bel je, [[want]] ik heb een vraag.'], ['Ik weet niet [[of]] de vergadering om 10 uur begint.'], ['Het is laat, [[dus]] ik ga naar huis.'], ['Sofie is blij [[omdat]] ze een nieuwe job heeft.']];
  d.ex({ g: 18, title: 'Exercice 3 — Le bon mot', stars: '★★', instr: 'Complétez avec un mot de la banque. Regardez la place du verbe !' }, (s, mode, top) => {
    d.list(s, ex3.map((e) => `//${e[0]}//`), mode, { y: top + 0.1, w: 9.0, h: 6.88 - top - 0.1, size: 20, gap: 9 });
    d.rect(s, 9.9, top + 0.1, 2.83, 6.78 - top, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE', 10.0, top + 0.2, 2.6, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2, align: 'center' });
    [['en', PONT], ['maar', PONT], ['want', PONT], ['dus', PONT], ['omdat', HOOK], ['als', HOOK], ['dat', HOOK], ['of', 'purple']].forEach(([w, c], i) => {
      const x = 10.1 + (i % 2) * 1.3; const y = top + 0.7 + Math.floor(i / 2) * 0.8;
      d.rect(s, x, y, 1.15, 0.6, { fill: c, line: null, radius: 0.3 });
      d.t(s, w, x, y, 1.15, 0.6, { size: 18, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.t(s, '^^bleu^^ = pont · ##orange## = crochet', 9.95, top + 4.0, 2.75, 0.4, { size: 13, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 19 ex4 juist of fout
  const ex4 = [['Ik blijf thuis omdat ik ben ziek.', 0, 'omdat ik ziek **ben**'], ['Ik denk dat Sofie vandaag thuis werkt.', 1], ['Als het regent, ik neem de bus.', 0, 'Als het regent, **neem ik** de bus.'], ['Ik neem de bus, want het regent.', 1], ['Ik weet dat je het druk hebt.', 1], ['Ik vraag me af als hij komt.', 0, 'Ik vraag me af **of** hij komt.'], ['Karim is moe, maar hij werkt nog.', 1], ['Ik kom niet omdat ik moet werken.', 1]];
  d.ex({ g: 19, title: 'Exercice 4 — Juist of fout?', stars: '★★', instr: 'La place du verbe est-elle correcte ? Votez !' }, (s, mode, top) => {
    const ch = (6.88 - top - 3 * 0.15) / 4;
    ex4.forEach(([t, ok, fix], i) => {
      const x = 0.6 + (i % 2) * 6.18; const y = top + Math.floor(i / 2) * (ch + 0.15);
      const c = mode === 'a' ? (ok ? 'accent3' : 'accent6') : BORDER;
      d.rect(s, x, y, 5.95, ch, { fill: mode === 'a' ? (ok ? 'EDF6F0' : 'FBEDEB') : 'bg1', line: c, lw: mode === 'a' ? 2 : 1.25 });
      d.num(s, i + 1, x + 0.12, y + 0.12, 0.38, 'tx2', 12);
      d.t(s, `//${t}//`, x + 0.6, y + 0.05, 4.4, mode === 'a' && !ok ? ch * 0.55 : ch - 0.1, { size: 17, valign: 'middle' });
      if (mode === 'q') { d.icon(s, 'FaCheck', 'accent3', x + 5.05, y + ch / 2 - 0.15, 0.3); d.icon(s, 'FaTimes', 'accent6', x + 5.45, y + ch / 2 - 0.15, 0.3); }
      else {
        d.icon(s, ok ? 'FaCheckCircle' : 'FaTimesCircle', c, x + 5.35, y + 0.15, 0.42);
        if (!ok) d.t(s, `→ //${fix}//`, x + 0.6, y + ch * 0.5, 5.2, ch * 0.45, { size: 16, bold: true, color: 'accent3', valign: 'middle', base: {} });
      }
    });
  });

  // ---------------------------------------------------------------- 20 ex5 waarom
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 5 — Waarom? en 1 minute', stars: '★★' });
    d.t(s, '//Waarom is … belangrijk?//', 0.6, 1.65, 7.6, 0.7, { size: 28, bold: true, color: 'tx2', valign: 'middle', head: true });
    const tiles = [['Nederlands', 'speaking-head'], ['sport', 'person-running'], ['teamwerk', 'handshake'], ['een goede leraar', 'woman-teacher'], ['vakantie', 'beach-with-umbrella'], ['koffie', 'hot-beverage']];
    tiles.forEach(([t, il], i) => {
      const x = 0.6 + (i % 3) * 2.6; const y = 2.5 + Math.floor(i / 3) * 1.95;
      d.rect(s, x, y, 2.4, 1.75, { fill: 'bg1', line: 'accent1', lw: 2, shadow: true });
      d.ill(s, il, x + 0.75, y + 0.15, 0.9, 0.9);
      d.t(s, `//${t}//`, x, y + 1.1, 2.4, 0.55, { size: t.length > 10 ? 15 : 19, bold: true, align: 'center', valign: 'middle' });
    });
    d.ill(s, 'stopwatch', 8.55, 1.7, 1.1, 1.1);
    d.rect(s, 9.85, 1.85, 2.88, 0.8, { fill: 'accent3', line: null, radius: 0.4 });
    d.t(s, 'Start!', 9.85, 1.85, 2.88, 0.8, { size: 26, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, ['**1.** Par deux, tirez une tuile.', '**2.** 1 minute : un maximum de raisons.', '**3.** 1 point par phrase correcte (//want// : verbe en ②, //omdat// : verbe à la fin).'], 8.55, 2.95, 4.18, 2.4, { size: 17, gap: 8 });
    d.rect(s, 8.55, 5.45, 4.18, 1.4, { fill: 'bg2', line: BORDER });
    d.t(s, ['//… is belangrijk, **want** het is …//', '//… is belangrijk **omdat** je … kunt …//'], 8.7, 5.45, 3.95, 1.4, { size: 16, valign: 'middle', gap: 6 });
  }

  // ---------------------------------------------------------------- 21 ex6 excuses
  d.roleplay({
    g: 21, title: 'Exercice 6 — Désolé, je suis en retard !',
    a: '**Employé·e** : vous arrivez en retard à une réunion. Excusez-vous et donnez la raison (//omdat//).',
    b: '**Cheffe d’équipe** : demandez //Waarom?//, puis réagissez.',
    bank: '//Sorry dat ik te laat ben. · Excuseer, mevrouw. · Ik ben te laat omdat… · Geen probleem. · Ga zitten. · Gelukkig ben je er nu!//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'bg2', line: BORDER });
      d.t(s, 'LES EXCUSES', x, y + 0.08, w, 0.35, { size: 12, bold: true, color: 'accent5', align: 'center', cs: 2 });
      const v = [['train', 'de trein heeft vertraging'], ['automobile', 'ik sta in de file'], ['alarm-clock', 'mijn wekker is kapot'], ['baby', 'mijn kind is ziek'], ['cloud-with-rain', 'het regent heel hard'], ['bicycle', 'mijn fiets heeft een lekke band']];
      v.forEach(([il, t], i) => {
        const yy = y + 0.5 + i * ((h - 0.6) / 6);
        d.ill(s, il, x + 0.15, yy + 0.05, 0.62, 0.62);
        d.t(s, `//${t}//`, x + 0.9, yy, w - 1.0, 0.72, { size: 14, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['Reliez avec //maar// : //Ik ben moe. Ik werk nog.//', 'Reliez avec //omdat// : //Ik blijf thuis. Ik ben ziek.//', 'Complétez : //Als het regent, …… (ik / nemen / de bus).//'],
    self: ['Relier', 'Accrocher', 'Expliquer'],
    teaser: { icon: 'FaEnvelopeOpenText', text: '**Volgende keer : Een mail opstellen** — écrire un e-mail en néerlandais' },
  });
}

module.exports = { meta, build };
