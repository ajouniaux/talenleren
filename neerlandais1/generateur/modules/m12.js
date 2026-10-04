// Module 12 — Modale werkwoorden · Pouvoir, vouloir, devoir
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 12, slug: 'Modale_werkwoorden', title: 'Modale werkwoorden — Pouvoir, vouloir, devoir', short: 'Modale werkwoorden', template: 'module_12_modale_werkwoorden.md' };

// the 4 meanings: colour, illustration, label
const M = {
  kunnen: ['accent2', 'flexed-biceps', 'capacité, possibilité'],
  mogen: ['accent3', 'check-mark-button', 'permission'],
  willen: ['accent4', 'red-heart', 'volonté'],
  moeten: ['accent6', 'stop-sign', 'obligation'],
};

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
        ng: { fill: 'tx2', line: null, color: 'bg1', bold: true },
        p: { fill: 'FDF1E6', line: 'accent1', lw: 2, dash: 'dash', color: 'accent6', bold: true },
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
  const sign = (s, verb, x, y, dd, label) => {
    const [c, il] = M[verb];
    d.oval(s, x, y, dd, dd, { fill: 'FFFFFF', line: c, lw: 5 });
    d.ill(s, il, x + dd * 0.25, y + dd * 0.12, dd * 0.5, dd * 0.5);
    d.t(s, label, x, y + dd * 0.6, dd, dd * 0.28, { size: Math.round(dd * 16), bold: true, color: c, align: 'center', valign: 'middle', head: true });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Modale werkwoorden', sub: 'Pouvoir, vouloir, devoir', line: 'kunnen · mogen · willen · moeten',
    visual: (s) => {
      [['kunnen', 'kan', 7.6, 1.3], ['mogen', 'mag', 10.2, 1.3], ['willen', 'wil', 7.6, 3.9], ['moeten', 'moet', 10.2, 3.9]].forEach(([v, l, x, y]) => sign(s, v, x, y, 2.3, l));
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCompass', h: 'Choisir', t: 'Je choisis entre //kunnen, mogen, willen, moeten// selon le **sens**.', color: 'accent2' },
      { icon: 'FaWrench', h: 'Construire', t: 'Je mets l’**infinitif au bout** de la phrase.', color: 'accent6' },
      { icon: 'FaHandshake', h: 'Demander', t: 'Je demande, propose, permets et interdis poliment.', color: 'accent3' },
    ],
    band: 'La conjugaison a été vue au M4. Aujourd’hui : **le bon verbe au bon moment**.',
  });

  // ---------------------------------------------------------------- 3 panneaux
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — que disent ces panneaux ?' });
    const P = [['p-button', true, 'Je **°°mag°°** hier niet parkeren.'], ['stop-sign', false, 'Je **°°moet°°** hier stoppen.'], ['antenna-bars', false, 'Je **°°kan°°** hier gratis internetten.'], ['elevator', false, 'Alleen het personeel **°°mag°°** de lift nemen.']];
    P.forEach(([il, ban, t], i) => {
      const x = 0.6 + (i % 2) * 6.18; const y = 1.75 + Math.floor(i / 2) * 2.55;
      d.rect(s, x, y, 5.95, 2.3, { fill: 'bg1', line: BORDER, shadow: true });
      d.oval(s, x + 0.25, y + 0.35, 1.6, 1.6, { fill: 'FFFFFF', line: ban ? 'accent6' : 'accent5', lw: 4 });
      d.ill(s, il, x + 0.5, y + 0.6, 1.1, 1.1);
      if (ban) d.line(s, x + 0.5, y + 0.6, x + 1.6, y + 1.7, { color: 'accent6', lw: 5, arrow: false });
      d.t(s, `//${t}//`, x + 2.1, y + 0.15, 3.7, 2.0, { size: 21, valign: 'middle' });
    });
    d.t(s, 'Quel verbe ? Les réponses apparaissent en **gris clair**.', 0.6, 6.55, 12.13, 0.35, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 4 rappel
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: '+ APERÇU', title: 'Rappel — la conjugaison en un coup d’œil' });
    d.table(s, [
      ['', 'ik', 'jij / u', 'hij / zij', 'pluriel'],
      ['**kunnen**', 'kan', 'kunt / kan', '##kan##', 'kunnen'],
      ['**mogen**', 'mag', 'mag', '##mag##', 'mogen'],
      ['**willen**', 'wil', 'wilt / wil', '##wil##', 'willen'],
      ['**moeten**', 'moet', 'moet', 'moet', 'moeten'],
    ], { x: 0.6, y: 1.7, w: 8.6, colW: [1.9, 1.4, 1.9, 1.6, 1.8], size: 22, headSize: 16, rowH: 0.75, align: ['left', 'center', 'center', 'center', 'center'],
      cellFill: (r, c) => (c === 3 && r < 4 ? 'FDF1E6' : r % 2 ? 'bg1' : 'bg2') });
    d.card(s, 9.5, 1.7, 3.23, 3.0, { icon: 'FaExclamation', head: 'Pas de t !', color: 'accent1', body: ['//hij kan · hij mag · hij wil//', 'comme en anglais : //he can//'], size: 16 });
    d.card(s, 9.5, 4.9, 3.23, 1.95, { icon: 'FaUndo', head: 'Inversion', color: 'accent2', body: ['//Kun je…? · Wil je…?//'], size: 17 });
    d.t(s, 'Deux minutes : c’est un rappel du M4.', 0.6, 5.65, 8.6, 0.4, { size: 15, italic: true, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 5 les 4 sens
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'La carte des 4 sens' });
    const C = [['kunnen', 'être capable, c’est possible', '//Ik **kan** goed voetbal **!!spelen!!**.//'], ['mogen', 'avoir le droit, la permission', '//U **mag** hier niet **!!parkeren!!**.//'], ['willen', 'vouloir', '//Dit kindje **wil** een ijsje **!!eten!!**.//'], ['moeten', 'devoir, être obligé', '//Hier **moet** iedereen **!!stoppen!!**.//']];
    C.forEach(([v, fr, ex], i) => {
      const [c, il] = M[v];
      const x = 0.6 + (i % 2) * 6.18; const y = 1.72 + Math.floor(i / 2) * 2.6;
      d.rect(s, x, y, 5.95, 2.4, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, x, y, 1.9, 2.4, { fill: c, tr: 85, line: null, radius: 0.08 });
      d.ill(s, il, x + 0.4, y + 0.3, 1.1, 1.1);
      d.t(s, v, x, y + 1.5, 1.9, 0.6, { size: 22, bold: true, color: c, align: 'center', valign: 'middle', head: true });
      d.t(s, fr, x + 2.1, y + 0.2, 3.7, 0.8, { size: 18, bold: true, color: c, valign: 'middle' });
      d.t(s, ex, x + 2.1, y + 1.05, 3.7, 1.2, { size: 20, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 6 piège pouvoir
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : « pouvoir » = kunnen ou mogen ?' });
    d.rect(s, 0.6, 1.7, 12.13, 5.15, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    d.t(s, '« pouvoir »', 0.6, 2.2, 12.13, 0.6, { size: 26, bold: true, align: 'center', valign: 'middle', head: true });
    d.line(s, 6.66, 2.85, 3.6, 3.35, { color: 'accent5', lw: 2.5 });
    d.line(s, 6.66, 2.85, 9.7, 3.35, { color: 'accent5', lw: 2.5 });
    [['kunnen', 0.9, '« Je **peux** venir demain. »', '//Ik **kan** morgen komen.//', 'c’est **possible**'], ['mogen', 6.85, '« **Puis**-je entrer ? »', '//**Mag** ik binnenkomen?//', 'ai-je **le droit** ?']].forEach(([v, x, fr, nl, lab]) => {
      const [c, il] = M[v];
      d.rect(s, x, 3.4, 5.6, 2.2, { fill: 'bg1', line: c, lw: 2.5 });
      d.ill(s, il, x + 0.2, 3.55, 0.8, 0.8);
      d.t(s, fr, x + 1.15, 3.5, 4.3, 0.7, { size: 19, valign: 'middle' });
      d.t(s, nl, x + 1.15, 4.2, 4.3, 0.7, { size: 23, valign: 'middle', color: c });
      d.t(s, lab, x + 1.15, 4.9, 4.3, 0.5, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.t(s, 'Test : remplacez « pouvoir » par « avoir le droit ». Si ça marche → **mogen**. · //{{Kan ik binnenkomen?}}// = est-ce physiquement possible ?', 0.9, 5.8, 11.6, 0.9, { size: 17, valign: 'middle', align: 'center' });
  }

  // ---------------------------------------------------------------- 7 piège savoir
  {
    const s = d.page({ g: 7, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : « savoir » + verbe = kunnen' });
    d.trap(s, 0.6, 1.7, 12.13, 2.4, '« Je **sais** nager. » → //{{Ik weet zwemmen.}}//', '//Ik **kan** zwemmen.//  — savoir **faire** quelque chose = //kunnen//', { size: 22 });
    d.ill(s, 'person-swimming', 11.4, 1.85, 1.0, 1.0);
    d.rect(s, 0.6, 4.3, 5.95, 2.55, { fill: 'accent2', tr: 90, line: 'accent2', lw: 1.5 });
    d.t(s, 'SAVOIR FAIRE → KUNNEN', 0.85, 4.4, 5.5, 0.4, { size: 14, bold: true, color: 'accent2', cs: 2 });
    d.t(s, ['//Ik **kan** zwemmen / koken.//', '//Ik **kan** Nederlands spreken.//', '//Ik **kan** Nederlands.// (oral)'], 0.85, 4.85, 5.5, 1.9, { size: 19, gap: 6, valign: 'middle' });
    d.rect(s, 6.78, 4.3, 5.95, 2.55, { fill: 'accent5', tr: 90, line: 'accent5', lw: 1.5 });
    d.t(s, 'SAVOIR UNE INFORMATION → WETEN', 7.03, 4.4, 5.5, 0.4, { size: 14, bold: true, color: 'accent5', cs: 2 });
    d.t(s, ['//Ik **weet** het. · Ik **weet** het niet.//', '//Ik **weet** dat de vergadering om 10 uur begint.// (M9)'], 7.03, 4.85, 5.5, 1.9, { size: 19, gap: 6, valign: 'middle' });
    d.ill(s, 'light-bulb', 12.0, 4.4, 0.6, 0.6);
  }

  // ---------------------------------------------------------------- 8 piège il ne faut pas
  {
    const s = d.page({ g: 8, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : « il ne faut pas » = niet mogen' });
    d.trap(s, 0.6, 1.7, 9.6, 2.9, '« Il ne faut pas fumer ici. » → //{{Je moet hier niet roken.}}//', '//Je **mag** hier niet roken.//  (tu n’as pas le droit)', { size: 22 });
    d.oval(s, 10.55, 1.95, 2.1, 2.1, { fill: 'FFFFFF', line: 'accent6', lw: 5 });
    d.ill(s, 'cigarette', 10.95, 2.35, 1.3, 1.3);
    d.line(s, 10.9, 2.3, 12.3, 3.7, { color: 'accent6', lw: 6, arrow: false });
    d.rect(s, 0.6, 4.85, 12.13, 2.0, { fill: 'accent5', tr: 90, line: 'accent5', lw: 1.25 });
    d.chip(s, '+ BONUS', 0.8, 5.0, 'accent5', 0.34, 12);
    d.t(s, ['« Tu n’es pas obligé de venir. » → //Je **hoeft** niet **te** komen.//', 'En Belgique aussi : //Je **moet** niet komen.// (= pas obligé, **pas** une interdiction)'], 0.85, 5.4, 11.7, 1.35, { size: 18, gap: 6, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 9 la pince
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'La pince avec un verbe de modalité' });
    const rows = [
      [['Ik', 'n'], ['mag', 'v'], ['een koekje', 'n'], ['eten.', 'i']],
      [['Jij', 'n'], ['moet', 'v'], ['morgen vroeg', 'n'], ['vertrekken.', 'i']],
      [['We', 'n'], ['willen', 'v'], ['deze zomer naar Spanje', 'n'], ['gaan.', 'i']],
      [['Ik', 'n'], ['kan', 'v'], ['morgen', 'n'], ['niet', 'ng'], ['komen.', 'i']],
      [['Sofie', 'n'], ['moet', 'v'], ['de klant', 'n'], ['opbellen.', 'p']],
    ];
    rows.forEach((r, i) => strip(s, 0.6, 1.75 + i * 0.85, r, { size: 21, h: 0.7 }));
    d.card(s, 9.4, 1.75, 3.33, 4.15, { icon: 'FaLightbulb', head: 'Repères', color: 'accent1', body: ['**②** modal · **⑥** infinitif', '@@niet@@ juste avant l’infinitif (M13)', '##opbellen## : la particule se **recolle** (M11)'], size: 16, gap: 10 });
    band(s, 'FR : « Je **dois partir** demain. » (collés) → NL : //Ik **moet** morgen **vertrekken**.// (séparés)', 6.15, 0.7, 'tx2');
  }

  // ---------------------------------------------------------------- 10 demander poliment
  {
    const s = d.page({ g: 10, tag: 'MISE EN SITUATION', title: 'Demander poliment' });
    const B = [['Demander de l’aide', '//**Kunt** u me **helpen**?//', 'kunnen'], ['Demander la permission', '//**Mag** ik het raam **opendoen**?//', 'mogen'], ['Offrir', '//**Wilt** u een koffie?//', 'willen'], ['Commander', '//Ik **wil** **graag** een broodje kaas.//', 'willen']];
    B.forEach(([lab, t, v], i) => {
      const [c, il] = M[v];
      const x = 0.6 + (i % 2) * 6.18; const y = 1.75 + Math.floor(i / 2) * 2.35;
      d.chip(s, lab, x, y, c, 0.36, 13);
      d.rect(s, x, y + 0.5, 5.95, 1.55, { fill: c, tr: 88, line: c, lw: 1.5, radius: 0.25 });
      d.ill(s, il, x + 0.2, y + 0.82, 0.9, 0.9);
      d.t(s, t, x + 1.3, y + 0.5, 4.5, 1.55, { size: 23, valign: 'middle' });
    });
    band(s, '//graag// adoucit //willen// (M8) · //opendoen// se recolle après //mogen// (M11)', 6.3, 0.55, 'tx2');
  }

  // ---------------------------------------------------------------- 11 bonus zullen
  {
    const s = d.page({ g: 11, tag: '+ BONUS', title: '+ BONUS : zullen — proposer et promettre' });
    [['PROPOSER', 'hot-beverage', '//**Zullen** we om 12 uur **gaan eten**?//', 'On va manger à midi ?', 'accent2', 0.6], ['PROMETTRE', 'handshake', '//Ik **zal** je morgen **bellen**.//', 'Je t’appellerai demain.', 'accent3', 6.81]].forEach(([h, il, nl, fr, c, x]) => {
      d.rect(s, x, 1.7, 5.92, 3.0, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, x, 1.7, 5.92, 0.6, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x + 0.25, 1.7, 5, 0.6, { size: 17, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
      d.ill(s, il, x + 0.3, 2.55, 1.2, 1.2);
      d.t(s, nl, x + 1.7, 2.45, 4.0, 1.1, { size: 22, valign: 'middle' });
      d.t(s, fr, x + 1.7, 3.55, 4.0, 0.6, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.table(s, [['ik', 'jij / u', 'hij / zij', 'wij · jullie · zij'], ['zal', 'zult / zal', 'zal', 'zullen']], { x: 0.6, y: 4.95, w: 12.13, size: 20, headSize: 15, rowH: 0.5, align: ['center', 'center', 'center', 'center'], headColor: 'accent5' });
    d.t(s, 'Pour le futur, le néerlandais préfère souvent le **présent** : //Morgen bel ik je.//', 0.6, 6.4, 12.13, 0.45, { size: 16, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 12 sans infinitif
  {
    const s = d.page({ g: 12, tag: 'VOCABULAIRE', title: 'Sans infinitif : les petites phrases de tous les jours' });
    const B = [['Ik moet naar huis.', 'je dois rentrer', 'moeten'], ['Ik wil een koffie.', 'je veux un café', 'willen'], ['Mag dat?', 'c’est permis ?', 'mogen'], ['Ik kan het niet.', 'je n’y arrive pas', 'kunnen'], ['Dat mag niet!', 'c’est interdit !', 'mogen'], ['Dat moet!', 'il le faut !', 'moeten']];
    B.forEach(([nl, fr, v], i) => {
      const [c] = M[v];
      const x = 0.6 + (i % 3) * 4.1; const y = 1.75 + Math.floor(i / 3) * 2.2;
      d.rect(s, x, y, 3.85, 1.35, { fill: c, tr: 86, line: c, lw: 1.5, radius: 0.3 });
      d.t(s, `//**${nl}**//`, x, y, 3.85, 1.35, { size: 23, align: 'center', valign: 'middle' });
      d.t(s, fr, x, y + 1.42, 3.85, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center' });
    });
    d.t(s, 'Le verbe de mouvement est sous-entendu : //Ik moet naar huis (gaan).//', 0.6, 6.4, 12.13, 0.45, { size: 16, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 13 tableau
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : le tableau des modaux' });
    d.table(s, [
      ['', 'Sens', 'Exemple', 'Question polie'],
      ['**kunnen**', 'capacité, possibilité, //savoir faire//', '//Ik kan zwemmen.//', '//Kunt u me helpen?//'],
      ['**mogen**', 'permission · //niet mogen// = interdiction', '//Je mag hier niet roken.//', '//Mag ik binnenkomen?//'],
      ['**willen**', 'volonté (+ //graag// = poli)', '//Ik wil graag een koffie.//', '//Wilt u een koffie?//'],
      ['**moeten**', 'obligation', '//Ik moet om 8 uur beginnen.//', '//Moet ik dit formulier invullen?//'],
    ], { x: 1.45, y: 1.7, w: 11.28, colW: [1.7, 3.4, 3.1, 3.08], size: 17, headSize: 15, rowH: [0.55, 1.0, 1.0, 1.0, 1.0], cellFill: (r, c) => (c === 0 ? ['', 'DCE8F5', 'DDEEE2', 'F5DDE8', 'F6DEDB'][r] : r % 2 ? 'bg1' : 'bg2') });
    ['kunnen', 'mogen', 'willen', 'moeten'].forEach((v, i) => d.ill(s, M[v][1], 0.65, 1.7 + 0.55 + i * 1.0 + 0.17, 0.66, 0.66));
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Le bon verbe', '★', 'FaCompass'], ['Les panneaux', '★', 'FaTrafficLight'], ['Remettez en ordre', '★★', 'FaListUl'], ['Traduction piège', '★★', 'FaLanguage'],
    ['Wie wordt de winnaar?', '★★', 'FaTrophy'], ['Wie weet het meest?', '★', 'FaUsers'], ['Le premier jour', '★★★', 'FaUserTie'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 le bon verbe
  const ex1 = [['Ik [[kan]] goed koken.', 'cooking'], ['[[Mag]] ik het raam opendoen?', 'window'], ['Je [[mag]] hier niet roken.', 'cigarette'], ['Ik ben moe, ik [[wil]] slapen.', 'bed'], ['We [[moeten]] om 8 uur beginnen: de klant komt om 8.15 uur.', 'alarm-clock'], ['Sofie [[kan]] drie talen spreken.', 'woman-office-worker'], ['[[Wilt]] u een koffie?', 'hot-beverage'], ['Kinderen [[mogen]] hier niet zwemmen.', 'person-swimming']];
  d.ex({ g: 15, title: 'Exercice 1 — Le bon verbe', stars: '★', instr: 'Complétez avec kunnen, mogen, willen ou moeten (conjugué).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 4;
    ex1.forEach(([t, il], i) => {
      const x = 0.6 + (i % 2) * 5.0; const y = top + Math.floor(i / 2) * rh;
      d.ill(s, il, x, y + 0.12, 0.6, 0.6);
      d.t(s, `**${i + 1}**  //${t}//`, x + 0.7, y, 4.15, rh - 0.05, { size: 17, valign: 'middle', mode });
    });
    ['kunnen', 'mogen', 'willen', 'moeten'].forEach((v, i) => {
      const y = top + i * ((6.88 - top) / 4);
      d.rect(s, 10.75, y + 0.08, 1.98, (6.88 - top) / 4 - 0.16, { fill: M[v][0], tr: 85, line: M[v][0], lw: 1.25 });
      d.ill(s, M[v][1], 10.85, y + 0.25, 0.55, 0.55);
      d.t(s, v, 11.45, y + 0.08, 1.25, (6.88 - top) / 4 - 0.16, { size: 14, bold: true, color: M[v][0], valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 16 ex2 panneaux
  const ex2 = [['no-smoking', 'Je mag hier niet roken.'], ['soap', 'Je moet je handen wassen.'], ['credit-card', 'Je kunt hier met de kaart betalen.'], ['dog', 'Honden mogen hier niet binnen.', true], ['shushing-face', 'Je moet hier stil zijn.'], ['p-button', 'Je mag hier parkeren.']];
  d.ex({ g: 16, title: 'Exercice 2 — Les panneaux', stars: '★', instr: 'Que dit chaque panneau ? Formulez la règle avec un verbe de modalité.' }, (s, mode, top) => {
    const ch = (6.88 - top - 0.2) / 2;
    ex2.forEach(([il, t, ban], i) => {
      const x = 0.6 + (i % 3) * 4.1; const y = top + Math.floor(i / 3) * (ch + 0.2);
      d.rect(s, x, y, 3.85, ch, { fill: 'bg1', line: BORDER, shadow: true });
      d.oval(s, x + 1.25, y + 0.12, 1.35, 1.35, { fill: 'FFFFFF', line: ban ? 'accent6' : 'accent2', lw: 4 });
      d.ill(s, il, x + 1.47, y + 0.34, 0.9, 0.9);
      if (ban) d.line(s, x + 1.45, y + 0.32, x + 2.4, y + 1.27, { color: 'accent6', lw: 4, arrow: false });
      if (mode === 'a') d.t(s, `//**${t}**//`, x + 0.15, y + 1.55, 3.55, ch - 1.65, { size: 17, color: 'accent3', align: 'center', valign: 'middle' });
      else d.line(s, x + 0.3, y + ch - 0.35, x + 3.55, y + ch - 0.35, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
    });
  });

  // ---------------------------------------------------------------- 17 ex3 remettez en ordre
  const ex3 = [[['morgen', 'ik', 'werken', 'moet'], 'Ik moet morgen werken.'], [['niet', 'komen', 'kan', 'ik', 'vandaag'], 'Ik kan vandaag niet komen.'], [['je', 'mag', 'binnenkomen', '?'], 'Mag je binnenkomen?'], [['opbellen', 'de klant', 'wil', 'Sofie'], 'Sofie wil de klant opbellen.'], [['we', 'samen', 'zullen', 'lunchen', '?'], 'Zullen we samen lunchen?'], [['mijn badge', 'ik', 'vergeten', 'niet', 'mag'], 'Ik mag mijn badge niet vergeten.']];
  d.ex({ g: 17, title: 'Exercice 3 — Remettez en ordre', stars: '★★', instr: 'Remettez les étiquettes dans l’ordre : modal en ②, infinitif au bout.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([labels, sol], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.38) / 2, 0.38, 'tx2', 12);
      let x = 1.1;
      labels.forEach((l) => { const w = 0.3 + l.length * 0.12; d.rect(s, x, y + 0.08, w, rh - 0.2, { fill: 'FFFDF5', line: 'C9B98A', lw: 1 }); d.t(s, `//${l}//`, x, y + 0.08, w, rh - 0.2, { size: 15, align: 'center', valign: 'middle' }); x += w + 0.1; });
      d.rect(s, 6.9, y + 0.06, 5.83, rh - 0.14, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**${sol}**//`, 7.05, y + 0.06, 5.6, rh - 0.14, { size: 18, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex4 traduction piège
  const ex4 = [['Je sais nager.', 'Ik kan zwemmen.', 1], ['Puis-je ouvrir la fenêtre ?', 'Mag ik het raam opendoen?', 1], ['Il ne faut pas fumer ici.', 'Je mag hier niet roken.', 1], ['Je dois partir.', 'Ik moet weggaan.', 0], ['Tu veux un café ?', 'Wil je een koffie?', 0], ['Je peux venir demain.', 'Ik kan morgen komen.', 0], ['On peut payer par carte ?', 'Kan ik met de kaart betalen?', 0], ['Je ne sais pas.', 'Ik weet het niet.', 0]];
  d.ex({ g: 18, title: 'Exercice 4 — Traduction piège', stars: '★★', instr: 'Traduisez. Attention aux phrases marquées ⚠ !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 8;
    ex4.forEach(([fr, nl, trap], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.36) / 2, 0.36, 'accent5', 12);
      d.rect(s, 1.05, y + 0.04, 4.6, rh - 0.1, { fill: 'bg2', line: BORDER });
      d.t(s, fr, 1.2, y + 0.04, 4.0, rh - 0.1, { size: 17, valign: 'middle' });
      if (trap) d.t(s, '⚠', 5.2, y + 0.04, 0.4, rh - 0.1, { size: 16, bold: true, color: 'accent6', valign: 'middle' });
      d.line(s, 5.7, y + rh / 2 - 0.02, 6.35, y + rh / 2 - 0.02, { color: 'accent1', lw: 2.5 });
      d.rect(s, 6.4, y + 0.04, 6.33, rh - 0.1, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**${nl}**//`, 6.55, y + 0.04, 6.1, rh - 0.1, { size: 17, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 19 ex5 wie wordt de winnaar
  const board = [
    [150, 'Wat kun je goed?'], [150, 'Wat moet je vandaag nog doen?'], [150, 'Wat mag je niet doen op het werk?'], [150, 'Wat wil je dit weekend doen?'],
    [200, 'Vraag beleefd een koffie.'], [200, 'Vraag of je vroeger mag vertrekken.'], [200, 'Geef een advies aan een nieuwe collega.'], [200, 'Stel een lunch voor.'],
    [300, 'Spreek drie onmogelijke wensen uit.'], [300, 'Welke regels zijn er in jouw bedrijf?'], [300, 'Welke taal wil je nog leren, en waarom?'], [300, 'Wat kun je doen voor een gezond leven?'],
  ];
  const PC = { 150: 'accent3', 200: 'accent2', 300: 'accent4' };
  d.ex({ g: 19, title: 'Exercice 5 — Wie wordt de winnaar?', stars: '★★', instr: 'Choisissez une case : réussissez la tâche avec un verbe de modalité.' }, (s, mode, top) => {
    const cw = (12.13 - 3 * 0.2) / 4; const ch = (6.88 - top - 2 * 0.2) / 3;
    board.forEach(([p, t], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.2); const y = top + Math.floor(i / 4) * (ch + 0.2);
      d.rect(s, x, y, cw, ch, { fill: mode === 'q' ? PC[p] : 'bg1', line: PC[p], lw: 2.5, shadow: true });
      if (mode === 'q') d.t(s, `${p}\npunten`, x, y, cw, ch, { size: 24, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      else {
        d.chip(s, `${p}`, x + 0.12, y + 0.1, PC[p], 0.3, 11);
        d.t(s, `//${t}//`, x + 0.15, y + 0.4, cw - 0.3, ch - 0.45, { size: 16, align: 'center', valign: 'middle' });
      }
    });
  });

  // ---------------------------------------------------------------- 20 ex6 wie weet het meest
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Wie weet het meest?', stars: '★' });
    const Q = ['Wat mag je niet doen in de klas?', 'Wat moet je altijd meenemen naar het werk?', 'Wat kun je in het weekend in Brussel doen?', 'Hoe kun je thuis energie besparen?', 'Welke documenten moet je in de auto hebben?', 'Wat wil je dit jaar nog leren?'];
    Q.forEach((q, i) => {
      const x = 0.6 + (i % 2) * 4.6; const y = 1.75 + Math.floor(i / 2) * 1.55;
      d.rect(s, x, y, 4.4, 1.35, { fill: 'bg1', line: 'accent1', lw: 2, shadow: true });
      d.num(s, i + 1, x + 0.15, y + 0.15, 0.45, 'accent1', 14);
      d.t(s, `//${q}//`, x + 0.75, y + 0.05, 3.55, 1.25, { size: 17, valign: 'middle' });
    });
    d.ill(s, 'stopwatch', 10.0, 1.8, 1.4, 1.4);
    d.t(s, '90 s', 11.6, 2.1, 1.1, 0.8, { size: 26, bold: true, color: 'accent1', valign: 'middle' });
    d.t(s, ['**Par équipes** : un maximum de réponses en 90 secondes.', '**1 point** par phrase correcte.', 'Ex. : //Je moet je badge meenemen.//'], 9.85, 3.45, 2.88, 3.4, { size: 16, gap: 10 });
  }

  // ---------------------------------------------------------------- 21 ex7 premier jour
  d.roleplay({
    g: 21, title: 'Exercice 7 — Le premier jour chez Peeters & Co',
    a: '**Nouvel·le employé·e** : posez 5 questions sur les règles (télétravail, badge, parking, horaires, repas).',
    b: '**Sofie (RH)** : répondez à l’aide du document.',
    bank: '//Mag ik…? · Moet ik…? · Kan ik…? · Ja, dat mag. · Nee, dat mag niet. · Ja, dat moet.//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true, radius: 0.04 });
      d.rect(s, x, y, w, 0.6, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'Huisregels Peeters & Co', x + 0.15, y, w - 0.3, 0.6, { size: 14, bold: true, color: 'bg1', valign: 'middle' });
      const R = [['identification-card', 'Je moet je badge altijd dragen.'], ['house', 'Je mag twee dagen per week thuiswerken.'], ['automobile', 'Je kunt in de garage parkeren.'], ['alarm-clock', 'Je moet om 9 uur beginnen.'], ['fork-and-knife', 'Je mag niet aan je bureau eten.']];
      R.forEach(([il, t], i) => {
        const yy = y + 0.75 + i * ((h - 0.85) / 5);
        d.ill(s, il, x + 0.15, yy + 0.1, 0.5, 0.5);
        d.t(s, `//${t}//`, x + 0.8, yy, w - 0.95, (h - 0.85) / 5, { size: 14, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['« Puis-je ouvrir la porte ? » en néerlandais ?', '« Je sais cuisiner. » en néerlandais ?', 'Remettez en ordre : //niet · ik · morgen · komen · kan//'],
    self: ['Choisir', 'Construire', 'Demander'],
    teaser: { icon: 'FaBan', text: '**Volgende keer : Niet of geen?** — la négation' },
  });
}

module.exports = { meta, build };
