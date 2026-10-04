// Module 13 — Niet of geen? · La négation
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 13, slug: 'Niet_of_geen', title: 'Niet of geen? — La négation', short: 'Niet of geen?', template: 'module_13_niet_of_geen.md' };

const NIET = 'tx2'; // niet = bleu nuit
const GEEN = 'accent1'; // geen = orange

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        i: { fill: 'FBEDEB', line: 'accent6', lw: 2, dash: 'dash', color: 'accent6', bold: true },
        ng: { fill: NIET, line: null, color: 'bg1', bold: true },
        g: { fill: GEEN, line: null, color: 'bg1', bold: true },
      }[ty || 'n'];
      d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, dash: st.dash, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      cx += w + gap;
    });
    return cx - gap;
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2') => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size: 18, color: 'bg1', valign: 'middle' });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Niet of geen?', sub: 'La négation', line: 'Ik heb geen tijd. · Ik werk vandaag niet.',
    visual: (s) => {
      [['hourglass-not-done', 'Ik heb ##geen## tijd.', 1.4], ['laptop', 'Ik werk vandaag @@niet@@.', 3.9]].forEach(([il, t, y]) => {
        d.rect(s, 7.0, y, 5.7, 2.05, { fill: 'FFFFFF', line: null, radius: 0.25, shadow: true });
        d.ill(s, il, 7.25, y + 0.35, 1.35, 1.35);
        d.line(s, 7.25, y + 0.35, 8.6, y + 1.7, { color: 'accent6', lw: 5, arrow: false });
        d.t(s, t, 8.85, y, 3.75, 2.05, { size: 25, valign: 'middle', head: true });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaBalanceScale', h: 'Choisir', t: 'Je choisis entre //niet// et //geen//.', color: GEEN },
      { icon: 'FaArrowRight', h: 'Placer', t: 'Je place //niet// au bon endroit.', color: NIET },
      { icon: 'FaCommentDots', h: 'Répondre', t: 'Je dis //nooit, niets, niemand//… et je contredis avec //jawel!//', color: 'accent3' },
    ],
    band: 'Refuser poliment, dire qu’on n’a pas compris, signaler un problème au bureau : la négation est partout.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Nee, ik…' });
    const Q = [['Heb je een auto?', 'automobile'], ['Werk je vandaag?', 'laptop'], ['Drink je koffie?', 'hot-beverage'], ['Spreek je Japans?', 'speaking-head'], ['Ben je moe?', 'sleeping-face'], ['Woon je in Brussel?', 'house']];
    Q.forEach(([q, il], i) => {
      const x = 0.6 + (i % 3) * 4.1; const y = 1.75 + Math.floor(i / 3) * 1.85;
      d.rect(s, x, y, 3.85, 1.6, { fill: 'accent2', tr: 88, line: 'accent2', lw: 1.5, radius: 0.3 });
      d.ill(s, il, x + 0.2, y + 0.4, 0.8, 0.8);
      d.t(s, `//${q}//`, x + 1.15, y, 2.6, 1.6, { size: 20, bold: true, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.6, 12.13, 1.25, { fill: 'bg2', line: BORDER });
    d.t(s, 'MODÈLES', 0.85, 5.68, 3, 0.32, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, '//Nee, ik heb **##geen##** auto. · Nee, ik werk vandaag **@@niet@@**.//', 0.85, 6.0, 11.7, 0.75, { size: 22, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 4 piège 2 mots / 1 mot
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : 2 mots en français, 1 en néerlandais' });
    d.trap(s, 0.6, 1.7, 12.13, 2.35, '« Je **{{ne}}** travaille **{{pas}}**. »  (2 mots qui encadrent le verbe)', '//Ik werk **@@niet@@**.//  (1 seul mot, après le verbe)', { size: 22 });
    d.trap(s, 0.6, 4.25, 12.13, 2.0, '« Je n’ai **pas de** voiture. » → //{{Ik heb niet een auto.}}//', '//Ik heb **##geen##** auto.//  — **pas de** + nom = //geen//', { size: 21 });
    d.t(s, '//niet één// (pas **un seul**) existe pour insister ; pour une négation ordinaire : //geen//.', 0.6, 6.4, 12.13, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 5 geen = niet + een
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'GEEN = niet + een' });
    const eq = [['niet', NIET], ['+', null], ['een / Ø', 'accent5'], ['=', null], ['GEEN', GEEN]];
    let x = 2.6;
    eq.forEach(([t, c]) => {
      if (!c) { d.t(s, t, x, 1.7, 0.6, 0.85, { size: 32, bold: true, color: 'accent5', align: 'center', valign: 'middle' }); x += 0.6; return; }
      const w = t === 'GEEN' ? 2.4 : 1.9;
      d.rect(s, x, 1.7, w, 0.85, { fill: c, line: null, radius: 0.15 });
      d.t(s, t, x, 1.7, w, 0.85, { size: 28, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      x += w + 0.1;
    });
    const R = [['een + nom', '//Ik heb een auto.//', '//Ik heb ##geen## auto.//', 'automobile'], ['Ø + indénombrable', '//Ik drink koffie.//', '//Ik drink ##geen## koffie.//', 'hot-beverage'], ['Ø + pluriel', '//Ik heb kinderen.//', '//Ik heb ##geen## kinderen.//', 'children-crossing'], ['métier', '//Ik ben bakker.//', '//Ik ben ##geen## bakker.//', 'baguette-bread'], ['langue', '//Ik spreek Japans.//', '//Ik spreek ##geen## Japans.//', 'speaking-head']];
    R.forEach(([cat, a, b, il], i) => {
      const y = 2.85 + i * 0.8;
      d.rect(s, 0.6, y, 2.6, 0.66, { fill: 'accent5', tr: 85, line: null });
      d.t(s, cat, 0.75, y, 2.4, 0.66, { size: 15, bold: true, color: 'tx2', valign: 'middle' });
      d.ill(s, il, 3.35, y + 0.05, 0.56, 0.56);
      d.t(s, a, 4.05, y, 3.8, 0.66, { size: 20, valign: 'middle' });
      d.line(s, 7.85, y + 0.33, 8.55, y + 0.33, { color: GEEN, lw: 2.5 });
      d.t(s, b, 8.7, y, 4.0, 0.66, { size: 20, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 6 niet partout ailleurs
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'NIET — partout ailleurs' });
    const C = [['un verbe', '//Ik werk **@@niet@@**.//'], ['de / het / dit / mijn + nom', '//Ik ken __de__ klant **@@niet@@**.//'], ['un prénom', '//Ik ken __Liesbeth__ **@@niet@@**.//'], ['un adjectif', '//De film is **@@niet@@** __leuk__.//'], ['un adverbe', '//Ik werk **@@niet@@** __graag__ in het weekend.//']];
    C.forEach(([cat, ex], i) => {
      const x = i < 3 ? 0.6 + i * 4.1 : 2.65 + (i - 3) * 4.1; const y = i < 3 ? 1.75 : 4.05;
      d.rect(s, x, y, 3.85, 2.05, { fill: 'bg1', line: NIET, lw: 2, shadow: true });
      d.rect(s, x, y, 3.85, 0.6, { fill: NIET, line: null, radius: 0.08 });
      d.t(s, cat, x + 0.15, y, 3.55, 0.6, { size: 15, bold: true, color: 'bg1', valign: 'middle' });
      d.t(s, ex, x + 0.2, y + 0.7, 3.45, 1.25, { size: 20, valign: 'middle', align: 'center' });
    });
    band(s, 'Règle courte : //niet// nie tout ce qui n’est pas « un nom avec //een// ou sans article ».', 6.3, 0.55, 'tx2');
  }

  // ---------------------------------------------------------------- 7 organigramme
  {
    const s = d.page({ g: 7, tag: 'À RETENIR', title: 'L’organigramme niet / geen' });
    const diamond = (t, x, y, w, h, size = 17) => s.addText(t, { shape: d.S.DIAMOND, x, y, w, h, fill: { color: 'EEF3F8' }, line: { color: '17375E', width: 1.5 }, fontSize: size, bold: true, color: '1B2333', align: 'center', valign: 'middle', margin: 0 });
    diamond('Je nie un nom ?', 3.9, 1.7, 5.5, 1.15);
    d.line(s, 9.42, 2.27, 10.3, 2.27, { color: 'accent5', lw: 2 });
    d.t(s, 'NON', 9.5, 1.85, 0.8, 0.3, { size: 12, bold: true, color: 'accent5' });
    d.rect(s, 10.35, 1.8, 2.38, 0.95, { fill: NIET, line: null });
    d.t(s, 'niet', 10.35, 1.8, 2.38, 0.95, { size: 28, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.line(s, 6.65, 2.87, 6.65, 3.3, { color: 'accent3', lw: 2 });
    d.t(s, 'OUI', 6.75, 2.92, 0.8, 0.3, { size: 12, bold: true, color: 'accent3' });
    diamond('Le nom a een… ou pas d’article ?', 3.9, 3.3, 5.5, 1.15);
    d.line(s, 3.88, 3.87, 3.0, 3.87, { color: 'accent3', lw: 2 });
    d.t(s, 'OUI', 3.05, 3.45, 0.8, 0.3, { size: 12, bold: true, color: 'accent3' });
    d.rect(s, 0.6, 3.4, 2.38, 0.95, { fill: GEEN, line: null });
    d.t(s, 'GEEN', 0.6, 3.4, 2.38, 0.95, { size: 28, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.line(s, 9.42, 3.87, 10.3, 3.87, { color: 'accent5', lw: 2 });
    d.t(s, 'NON', 9.5, 3.45, 0.8, 0.3, { size: 12, bold: true, color: 'accent5' });
    d.rect(s, 10.35, 3.4, 2.38, 0.95, { fill: NIET, line: null });
    d.t(s, 'niet', 10.35, 3.4, 2.38, 0.95, { size: 28, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.t(s, 'de, het, dit, die, mijn…', 10.35, 4.38, 2.38, 0.35, { size: 13, italic: true, color: 'accent5', align: 'center' });
    [['//Dat is ##geen## boek. · We eten ##geen## brood.//', GEEN], ['//Ik heb de Belgische nationaliteit @@niet@@. · We vinden die film @@niet@@ leuk.//', NIET], ['//Ik werk @@niet@@.//', NIET]].forEach(([t, c], i) => {
      const y = 4.95 + i * 0.65;
      d.rect(s, 0.6, y, 0.14, 0.52, { fill: c, line: null, radius: 0 });
      d.t(s, t, 0.9, y, 11.8, 0.52, { size: 18, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 8 trois règles de place
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Où placer niet ? Trois règles' });
    const R = [
      ['①', 'À la fin de la phrase simple', [[['Ik', 'n'], ['ken', 'v'], ['Liesbeth', 'n'], ['niet.', 'ng']], [['Ik', 'n'], ['zie', 'v'], ['de klant vandaag', 'n'], ['niet.', 'ng']]]],
      ['②', 'Devant le 2e élément verbal', [[['Ik', 'n'], ['kan', 'v'], ['niet', 'ng'], ['komen.', 'i']], [['Hij', 'n'], ['eet', 'v'], ['zijn frieten', 'n'], ['niet', 'ng'], ['op.', 'i']]]],
      ['③', 'Devant préposition, adjectif, adverbe', [[['Zij', 'n'], ['gaat', 'v'], ['niet', 'ng'], ['naar school.', 'n']], [['Het', 'n'], ['is', 'v'], ['niet', 'ng'], ['duur.', 'n']]]],
    ];
    R.forEach(([n, lab, rows], i) => {
      const y = 1.72 + i * 1.62;
      d.rect(s, 0.6, y, 12.13, 1.5, { fill: i % 2 ? 'bg1' : 'bg2', line: BORDER });
      d.num(s, n === '①' ? 1 : n === '②' ? 2 : 3, 0.75, y + 0.15, 0.5, NIET, 16);
      d.t(s, lab, 1.4, y + 0.08, 9, 0.55, { size: 17, bold: true, color: NIET, valign: 'middle' });
      rows.forEach((r, k) => strip(s, 1.4 + k * 5.7, y + 0.7, r, { size: 18, h: 0.65, gap: 0.06 }));
    });
    d.t(s, 'Règle ② = la pince : //niet// juste avant la mâchoire droite (infinitif, particule, participe).', 0.6, 6.95 - 0.38, 12.13, 0.35, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 9 niet dans la pince
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'niet dans la pince' });
    const R = [[[['Ik', 'n'], ['moet', 'v'], ['vandaag', 'n'], ['niet', 'ng'], ['werken.', 'i']], 'modal + infinitif (M12)'], [[['Ik', 'n'], ['bel', 'v'], ['de klant vandaag', 'n'], ['niet', 'ng'], ['op.', 'i']], 'particule (M11)'], [[['Ik', 'n'], ['heb', 'v'], ['gisteren', 'n'], ['niet', 'ng'], ['gewerkt.', 'i']], 'participe (M15)']];
    R.forEach(([parts, lab], i) => {
      const y = 1.85 + i * 1.35;
      const e = strip(s, 0.6, y, parts, { size: 24, h: 0.85 });
      d.t(s, lab, e + 0.35, y, 12.73 - e - 0.35, 0.85, { size: 16, italic: true, color: 'accent5', valign: 'middle' });
      d.curve(s, 1.95, y, e - 0.1, y, { h: 0.25, color: 'accent6', lw: 2.25 });
    });
    band(s, 'Geste de la pince : //niet// « s’accroche » à la mâchoire droite. BE : //Ik moet vandaag niet werken// = pas obligé (M12).', 6.0, 0.85, 'tx2');
  }

  // ---------------------------------------------------------------- 10 autres négations
  {
    const s = d.page({ g: 10, tag: 'VOCABULAIRE', title: 'Les autres négations' });
    const T = [['nooit', 'ne … jamais', 'Ik rook nooit.', 'cigarette'], ['niets / niks', 'ne … rien', 'Ik zie niets.', 'see-no-evil-monkey'], ['niemand', 'ne … personne', 'Niemand weet het.', 'bust-in-silhouette'], ['nog niet', 'pas encore', 'Ik heb nog niet gegeten.', 'hourglass-not-done'], ['niet meer', 'ne … plus', 'Ik werk niet meer.', 'person-in-lotus-position'], ['geen … meer', 'ne … plus de', 'Er is geen koffie meer.', 'hot-beverage'], ['ook niet', 'non plus', 'Ik ook niet!', 'person-shrugging']];
    const w = (12.13 - 3 * 0.2) / 4;
    T.forEach(([nl, fr, ex, il], i) => {
      const x = 0.6 + (i % 4) * (w + 0.2) + (i >= 4 ? (w + 0.2) / 2 : 0); const y = 1.72 + Math.floor(i / 4) * 2.45;
      d.rect(s, x, y, w, 2.25, { fill: 'bg1', line: NIET, lw: 1.75, shadow: true });
      d.ill(s, il, x + 0.15, y + 0.15, 0.7, 0.7);
      d.t(s, `**${nl}**`, x + 0.95, y + 0.1, w - 1.05, 0.5, { size: 20, color: NIET, valign: 'middle', head: true });
      d.t(s, `{{ne}}${fr.slice(2)}`.replace('{{ne}}s encore', 'pas encore').replace('{{ne}}n plus', 'non plus'), x + 0.95, y + 0.55, w - 1.05, 0.4, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${ex}//`, x + 0.15, y + 1.05, w - 0.3, 1.05, { size: 18, align: 'center', valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 11 répondre / jawel
  {
    const s = d.page({ g: 11, tag: 'VOCABULAIRE', title: 'Répondre non… et répondre « si ! »' });
    d.t(s, 'RÉPONDRE NON, POLIMENT', 0.6, 1.7, 6, 0.35, { size: 13, bold: true, color: NIET, cs: 2 });
    [['— //Wil je een koffie?//', '— //Nee, dank je.//'], ['— //Begrijp je het?//', '— //Nee, niet helemaal.//']].forEach(([q, a], i) => {
      const y = 2.15 + i * 1.3;
      d.bubble(s, q, 0.6, y, 2.9, 1.05, 'accent2', { size: 17 });
      d.bubble(s, a, 3.6, y, 2.9, 1.05, NIET, { size: 17, tr: 85 });
    });
    d.t(s, '//Ik denk het niet. · Ik weet het niet.//', 0.6, 4.55, 5.9, 0.5, { size: 18, color: 'tx2' });
    d.t(s, 'CONTREDIRE UNE QUESTION NÉGATIVE', 6.8, 1.7, 6, 0.35, { size: 13, bold: true, color: 'accent3', cs: 2 });
    [['— //Heb je **geen** tijd?//', '— //**Jawel!** Ik heb tijd.//'], ['— //Kom je **niet**?//', '— //**Toch wel!**//']].forEach(([q, a], i) => {
      const y = 2.15 + i * 1.3;
      d.bubble(s, q, 6.8, y, 2.9, 1.05, 'accent2', { size: 17 });
      d.bubble(s, a, 9.8, y, 2.93, 1.05, 'accent3', { size: 17, tr: 80 });
    });
    d.ill(s, 'grinning-face', 11.95, 4.45, 0.7, 0.7);
    d.trap(s, 0.6, 5.15, 12.13, 1.7, '« Tu n’as pas le temps ? — **Si !** » → //{{Ja!}}// (ambigu)', '//**Jawel!** / **Toch wel!**// — « si » n’existe pas en néerlandais', { size: 18 });
  }

  // ---------------------------------------------------------------- 12 piège calques
  {
    const s = d.page({ g: 12, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : ce que le néerlandais ne dit pas' });
    d.rect(s, 0.6, 1.7, 12.13, 5.15, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const R = [['« Ce n’est pas un problème. »', 'Het is niet een probleem.', 'Dat is ##geen## probleem.'], ['« Je ne vois personne. »', 'Ik zie niet niemand.', 'Ik zie **niemand**.'], ['« Je n’ai pas faim. »', 'Ik heb niet honger.', 'Ik heb ##geen## honger.']];
    R.forEach(([fr, bad, good], i) => {
      const y = 2.35 + i * 1.2;
      d.t(s, fr, 0.9, y, 3.9, 1.0, { size: 18, valign: 'middle' });
      d.t(s, `//{{${bad}}}//`, 4.85, y, 3.6, 1.0, { size: 18, valign: 'middle' });
      d.rect(s, 8.55, y + 0.1, 3.95, 0.8, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25 });
      d.t(s, `//${good}//`, 8.7, y + 0.1, 3.7, 0.8, { size: 19, valign: 'middle' });
    });
    d.t(s, 'Pas de double négation · //honger, dorst, tijd, zin// sont des **noms** → //geen//.', 0.9, 6.0, 11.6, 0.6, { size: 17, color: 'tx2', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : la carte de la négation' });
    d.rect(s, 0.6, 1.7, 5.9, 3.1, { fill: 'bg1', line: GEEN, lw: 2.5, shadow: true });
    d.t(s, '##GEEN## = niet + een / Ø (+ nom)', 0.8, 1.85, 5.5, 0.7, { size: 22, bold: true, valign: 'middle' });
    d.t(s, '@@niet@@ = tout le reste', 0.8, 2.6, 5.5, 0.7, { size: 22, bold: true, valign: 'middle' });
    d.t(s, '//Ik heb geen auto. · Ik werk niet.//', 0.8, 3.45, 5.5, 1.1, { size: 18, color: 'accent5', valign: 'middle' });
    d.rect(s, 6.83, 1.7, 5.9, 3.1, { fill: 'bg1', line: NIET, lw: 2.5, shadow: true });
    d.t(s, 'PLACE DE NIET', 7.03, 1.8, 5.5, 0.4, { size: 14, bold: true, color: NIET, cs: 2 });
    d.t(s, ['**①** à la fin', '**②** devant le 2e verbe', '**③** devant préposition / adjectif / adverbe'], 7.03, 2.3, 5.5, 2.4, { size: 19, gap: 10, valign: 'middle' });
    const W = ['nooit', 'niets', 'niemand', 'nog niet', 'niet meer', 'jawel!'];
    W.forEach((w, i) => {
      const x = 0.6 + i * 2.06;
      d.rect(s, x, 5.1, 1.9, 0.95, { fill: i === 5 ? 'accent3' : NIET, line: null, radius: 0.15 });
      d.t(s, `//${w}//`, x, 5.1, 1.9, 0.95, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Niet of geen?', '★', 'FaBalanceScale'], ['Dites le contraire', '★★', 'FaExchangeAlt'], ['Où va niet ?', '★★', 'FaArrowRight'],
    ['Zoek iemand die…', '★', 'FaUsers'], ['Le détective', '★★', 'FaSearch'], ['Le collègue grognon', '★★★', 'FaAngry'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 niet of geen
  const ex1 = [['Mijn portefeuille is leeg. Ik heb [[geen]] geld.', 'Ø + nom'], ['Je mag [[niet]] op het gras lopen.', 'préposition'], ['Jeroen is moe. Hij wil [[niet]] studeren.', 'infinitif'], ['Jan heeft honger. Hij heeft nog [[niet]] gegeten.', 'participe'], ['Dat is [[geen]] goed idee.', 'een'], ['Ik ken de nieuwe directeur [[niet]].', 'de + nom'], ['Ik drink [[geen]] alcohol.', 'Ø'], ['De koffie is [[niet]] warm.', 'adjectif'], ['Sofie is [[geen]] Nederlandse, ze is Belgische.', 'nationalité'], ['Ik heb vandaag [[geen]] tijd.', 'Ø']];
  d.ex({ g: 15, title: 'Exercice 1 — Niet of geen?', stars: '★', instr: 'Complétez avec niet ou geen.' }, (s, mode, top) => {
    d.list(s, ex1.map(([t, r]) => `//${t}//++ (${r})++`), mode, { y: top + 0.1, w: 12.13, h: 6.88 - top - 0.1, cols: 2, size: 18, gap: 12 });
  });

  // ---------------------------------------------------------------- 16 ex2 contraire
  const ex2 = [['Ik heb een broer.', 'Ik heb ##geen## broer.'], ['Karim werkt op maandag.', 'Karim werkt @@niet@@ op maandag.'], ['Sofie kan vandaag komen.', 'Sofie kan vandaag @@niet@@ komen.'], ['We nemen de trein.', 'We nemen de trein @@niet@@.'], ['Ik spreek Duits.', 'Ik spreek ##geen## Duits.'], ['Hij belt de klant op.', 'Hij belt de klant @@niet@@ op.'], ['Het is duur.', 'Het is @@niet@@ duur.'], ['Ik drink altijd koffie.', 'Ik drink @@nooit@@ koffie.']];
  d.ex({ g: 16, title: 'Exercice 2 — Dites le contraire', stars: '★★', instr: 'Mettez chaque phrase à la forme négative.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 8;
    ex2.forEach(([a, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.36) / 2, 0.36, 'accent5', 12);
      d.rect(s, 1.05, y + 0.04, 4.9, rh - 0.1, { fill: 'EDF6F0', line: 'accent3', lw: 1 });
      d.t(s, `//${a}//`, 1.2, y + 0.04, 4.6, rh - 0.1, { size: 18, valign: 'middle' });
      d.line(s, 6.0, y + rh / 2 - 0.02, 6.7, y + rh / 2 - 0.02, { color: 'accent6', lw: 2.5 });
      d.rect(s, 6.75, y + 0.04, 5.98, rh - 0.1, { fill: mode === 'a' ? 'FBEDEB' : 'bg1', line: mode === 'a' ? 'accent6' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${b}//`, 6.9, y + 0.04, 5.75, rh - 0.1, { size: 18, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 17 ex3 où va niet
  const ex3 = [[['Ik', 'kan', 'morgen', 'komen.'], 2], [['Sofie', 'ziet', 'de klant', '.'], 2], [['We', 'gaan', 'naar', 'Gent.'], 1], [['Ik', 'neem', 'mijn laptop', 'mee.'], 2], [['De vergadering', 'is', 'lang', '.'], 1], [['Hij', 'heeft', 'gisteren', 'gewerkt.'], 2]];
  d.ex({ g: 17, title: 'Exercice 3 — Où va niet ?', stars: '★★', instr: 'Choisissez l’emplacement A, B ou C.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([w, sol], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      let x = 1.2;
      w.forEach((word, k) => {
        if (word !== '.') {
          const ww = 0.35 + word.length * 0.17;
          d.t(s, `//${word}//`, x, y, ww, rh, { size: 22, valign: 'middle' });
          x += ww;
        }
        if (k < 3) {
          const L = 'ABC'[k]; const right = k === sol;
          if (mode === 'a' && right) { d.rect(s, x + 0.05, y + (rh - 0.6) / 2, 0.8, 0.6, { fill: NIET, line: null }); d.t(s, 'niet', x + 0.05, y + (rh - 0.6) / 2, 0.8, 0.6, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle' }); x += 0.95; }
          else if (mode === 'q') { d.chip(s, `▲${L}`, x + 0.05, y + (rh - 0.38) / 2, 'accent1', 0.38, 12); x += 0.95; }
          else x += 0.12;
        }
      });
      if (w[3] === '.') d.t(s, '.', x - 0.1, y, 0.3, rh, { size: 22, valign: 'middle' });
      if (mode === 'a') d.chip(s, 'ABC'[sol], 12.1, y + (rh - 0.38) / 2, 'accent3', 0.38, 13);
    });
  });

  // ---------------------------------------------------------------- 18 ex4 zoek iemand die
  {
    const s = d.page({ g: 18, tag: 'JIJ NU !', title: 'Exercice 4 — Zoek iemand die…', stars: '★' });
    const G = [['geen koffie drinkt', 'hot-beverage'], ['niet in Brussel woont', 'cityscape'], ['geen huisdieren heeft', 'dog'], ['niet graag kookt', 'cooking'], ['nooit naar de cinema gaat', 'popcorn'], ['geen Engels spreekt', 'speaking-head'], ['niet met de auto komt', 'automobile'], ['geen broers heeft', 'people-hugging'], ['niet sport', 'person-running']];
    G.forEach(([t, il], i) => {
      const x = 0.6 + (i % 3) * 2.75; const y = 1.75 + Math.floor(i / 3) * 1.7;
      d.rect(s, x, y, 2.6, 1.55, { fill: 'bg1', line: 'accent1', lw: 1.75, shadow: true });
      d.ill(s, il, x + 0.95, y + 0.1, 0.65, 0.65);
      d.t(s, `//…${t}//`, x + 0.1, y + 0.75, 2.4, 0.5, { size: 13, align: 'center', valign: 'middle', fit: true, max: 14, min: 11 });
      d.line(s, x + 0.3, y + 1.4, x + 2.3, y + 1.4, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
    });
    d.t(s, 'Zoek iemand die…', 9.0, 1.75, 3.73, 0.6, { size: 24, bold: true, color: 'accent1', head: true });
    d.t(s, ['**1.** Posez une question : //Drink je koffie?//', '**2.** Réponse négative ? Notez le prénom.', '**3.** 3 prénoms en ligne : //Bingo!//', 'Exigez la phrase complète : //Nee, ik drink geen koffie.//'], 9.0, 2.45, 3.73, 4.4, { size: 16, gap: 10 });
  }

  // ---------------------------------------------------------------- 19 ex5 détective
  d.ex({ g: 19, title: 'Exercice 5 — Le détective', stars: '★★', instr: 'Ahmed décrit sa nouvelle job. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'Mijn nieuwe job — Ahmed', 0.85, top, 8, 0.5, { size: 14, bold: true, color: 'bg1', valign: 'middle' });
    const txt = '//Ik werk sinds maandag bij Peeters & Co. {{Ik ken niet de collega’s goed}}++ Ik ken de collega’s niet goed++. Ik heb {{niet een}}++ geen++ eigen bureau, maar dat is {{niet een}}++ geen++ probleem. {{Ik mag parkeren niet in de garage}}++ Ik mag niet in de garage parkeren++. Ik spreek nog niet goed Nederlands. Ik heb {{niet een}}++ geen++ auto, dus ik kom met de trein. Ik ben niet moe!//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 20, mode, ls: 1.2, valign: 'top' });
    d.ill(s, 'man-office-worker', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //Ik spreek nog niet goed Nederlands · Ik ben niet moe//.', 9.9, top + 3.05, 2.83, 1.6, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 20 ex6 collègue grognon
  d.roleplay({
    g: 20, title: 'Exercice 6 — Le collègue grognon',
    a: '**Le grognon** : vous voyez tout en noir. Signalez 3 problèmes.',
    b: '**Le positif** : proposez une solution à chaque fois.',
    bank: '//Geen probleem! · Dat is niet erg. · Ik bel de technicus. · Je kunt mijn laptop gebruiken. · Jawel, er is nog koffie in de keuken!//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'bg2', line: BORDER });
      d.t(s, 'LES PROBLÈMES', x, y + 0.08, w, 0.35, { size: 12, bold: true, color: 'accent5', align: 'center', cs: 2 });
      const V = [['hot-beverage', 'Er is geen koffie meer.'], ['printer', 'De printer werkt niet.'], ['antenna-bars', 'Ik heb geen wifi.'], ['key', 'Ik vind mijn sleutel niet.'], ['door', 'De vergaderzaal is niet vrij.'], ['elevator', 'De lift werkt niet.']];
      V.forEach(([il, t], i) => {
        const yy = y + 0.5 + i * ((h - 0.6) / 6);
        d.ill(s, il, x + 0.15, yy + 0.05, 0.6, 0.6);
        d.t(s, `//${t}//`, x + 0.9, yy, w - 1.0, 0.7, { size: 14, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 21 ticket
  d.ticket({
    g: 21,
    q: ['//niet// ou //geen// : //Ik heb …… zin.// / //Ik ken die man ……//', 'Forme négative : //Ik kan morgen komen.//', 'Répondez « Si ! » : //Heb je geen tijd?//'],
    self: ['Choisir', 'Placer', 'Répondre'],
    teaser: { icon: 'FaCubes', text: '**Volgende keer : Woordvorming** — //vergader + zaal = de vergaderzaal//' },
  });
}

module.exports = { meta, build };
