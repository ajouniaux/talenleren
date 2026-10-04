// Module 7 — Landen, nationaliteiten en talen · Pays, nationalités et langues
const { K, BORDER, GHOST } = require('../lib');

const meta = { n: 7, slug: 'Landen_en_talen', title: 'Landen, nationaliteiten en talen — Pays, nationalités et langues', short: 'Landen en talen', template: 'module_7_landen_en_talen.md' };

// column colours of the 5-column table (as in the archive)
const COLS = ['accent4', 'B8860B', 'accent3', '6E4A9E', '9C7CC6'];
const HEAD = ['Land', 'Adjectief', 'Taal', 'Inwoner ♂', 'Inwoonster ♀'];
const MAP = { fl: '7FA7D9', wa: 'EDA765', bx: '6E4A9E', de: '5FA77A' };

function build(d) {
  // 5-column table with a flag in front of each row
  const nat = (s, rows, o = {}) => {
    const y = o.y ?? 1.7; const rh = o.rh ?? 0.66; const hh = 0.55; const fx = 0.6; const tx = o.flags ? 1.45 : 0.6;
    const w = 12.73 - tx;
    d.table(s, [o.head || HEAD, ...rows.map((r) => r.slice(1))], {
      x: tx, y, w, colW: o.colW || [w * 0.22, w * 0.18, w * 0.18, w * 0.21, w * 0.21], size: o.size || 19, headSize: 15, headColors: COLS,
      rowH: [hh, ...rows.map(() => rh)], mode: o.mode, boldCol: 0,
    });
    if (o.flags) rows.forEach((r, i) => { if (r[0]) d.flag(s, r[0], fx, y + hh + i * rh + (rh - 0.46) / 2, 0.7, 0.46); });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Landen en talen', sub: 'Pays, nationalités et langues', line: 'Waar kom je vandaan?',
    visual: (s) => {
      d.ill(s, 'globe-showing-europe-africa', 8.6, 2.0, 2.9, 2.9);
      [['Belg', 7.3, 1.35, 'be'], ['Française', 10.1, 1.35, 'fr'], ['Marokkaan', 7.0, 5.1, 'ma'], ['Nederlandse', 10.1, 5.1, 'nl']].forEach(([t, x, y, f]) => {
        d.rect(s, x, y, 2.6, 0.75, { fill: 'FFFFFF', line: null, radius: 0.35, shadow: true });
        d.flag(s, f, x + 0.22, y + 0.2, 0.52, 0.35);
        d.t(s, t, x + 0.85, y, 1.7, 0.75, { size: 17, bold: true, color: 'tx2', valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaGlobeEurope', h: 'Dire', t: 'Je dis ma nationalité, mon origine et mes langues.', color: 'accent2' },
      { icon: 'FaPuzzlePiece', h: 'Former', t: 'Je trouve //Belg / Belgische / Belgisch//.', color: 'purple' },
      { icon: 'FaPencilAlt', h: 'Écrire', t: 'J’écris //Belgisch// et //Frans// avec une **majuscule**.', color: 'accent3' },
    ],
  });

  // ---------------------------------------------------------------- 3 Lut et Rik
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Lut et Rik se présentent' });
    d.ill(s, 'woman-red-hair', 0.6, 1.8, 1.6, 1.6);
    d.t(s, 'Lut', 0.6, 3.4, 1.6, 0.4, { size: 18, bold: true, color: 'accent2', align: 'center' });
    d.ill(s, 'man-beard', 11.13, 4.0, 1.6, 1.6);
    d.t(s, 'Rik', 11.13, 5.6, 1.6, 0.4, { size: 18, bold: true, color: 'purple', align: 'center' });
    d.bubble(s, '//Hallo, ik heet Lut. Ik ben **afkomstig uit België**. Ik heb **de Belgische nationaliteit**.//', 2.45, 1.8, 7.6, 1.45, 'accent2', { size: 21 });
    d.bubble(s, '//Dag! Ik ben Rik. Ik kom ook **uit België**. Ik ben **Belg** en mijn moedertaal is **Nederlands**.//', 3.3, 4.0, 7.6, 1.45, 'purple', { size: 21 });
    d.rect(s, 3.6, 5.95, 6.1, 0.8, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 3.75, 6.03, 0.64, 0.64);
    d.t(s, 'Combien de façons de dire « je suis belge » ?', 4.5, 5.95, 5.1, 0.8, { size: 18, bold: true, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 4 Belgique : 3 régions
  {
    const s = d.page({ g: 4, tag: 'VOCABULAIRE', title: 'La Belgique : 3 régions, 3 langues' });
    d.rect(s, 0.6, 1.7, 7.1, 5.15, { fill: 'bg2', line: BORDER });
    const P = d.belgium(s, 1.0, 1.95, 6.3, MAP);
    const lab = (t, lon, lat, c = 'tx1', size = 16) => { const [x, y] = P(lon, lat); d.t(s, t, x - 1.2, y - 0.2, 2.4, 0.4, { size, bold: true, color: c, align: 'center', valign: 'middle' }); };
    lab('Vlaanderen', 3.9, 51.08);
    lab('Wallonië', 4.9, 50.2);
    const [bx, by] = P(4.36, 50.84);
    d.line(s, bx + 0.25, by - 0.05, bx + 1.0, by - 0.55, { color: 'tx2', lw: 1.25, arrow: false });
    d.rect(s, bx + 1.0, by - 0.82, 1.15, 0.42, { fill: 'FFFFFF', line: 'purple', lw: 1, radius: 0.1 });
    d.t(s, 'Brussel', bx + 1.0, by - 0.82, 1.15, 0.42, { size: 14, bold: true, color: 'purple', align: 'center', valign: 'middle' });
    const [ex, ey] = P(6.2, 50.45);
    d.line(s, ex + 0.08, ey + 0.1, ex + 0.25, ey + 0.75, { color: 'tx2', lw: 1.25, arrow: false });
    d.t(s, 'Oost-België', ex - 0.9, ey + 0.75, 1.6, 0.35, { size: 13, bold: true, color: 'accent3', align: 'center' });
    const leg = [['Vlaanderen', 'Nederlands', MAP.fl], ['Wallonië', 'Frans', MAP.wa], ['Brussel', 'Frans + Nederlands', MAP.bx], ['Oost-België', 'Duits', MAP.de]];
    leg.forEach(([r, l, c], i) => {
      const y = 1.7 + i * 0.98;
      d.rect(s, 8.0, y, 4.73, 0.82, { fill: 'bg1', line: BORDER, shadow: true });
      d.rect(s, 8.0, y, 0.32, 0.82, { fill: c, line: null, radius: 0 });
      d.t(s, `**${r}**`, 8.5, y, 2.0, 0.82, { size: 18, valign: 'middle' });
      d.t(s, `→ //${l}//`, 10.4, y, 2.3, 0.82, { size: 17, valign: 'middle', color: 'tx2', fit: true, max: 17, min: 13 });
    });
    d.rect(s, 8.0, 5.7, 4.73, 1.15, { fill: 'tx2', line: null });
    d.t(s, 'België heeft **drie** officiële talen.', 8.2, 5.7, 4.33, 1.15, { size: 20, color: 'bg1', valign: 'middle', align: 'center' });
  }

  // ---------------------------------------------------------------- 5 tableau Belgique
  d.section('Comprendre');
  {
    const s = d.page({ g: 5, tag: 'VOCABULAIRE', title: 'Le tableau à 5 colonnes : la Belgique' });
    nat(s, [
      ['be', 'België', 'Belgisch', 'NL · FR · DE', 'de Belg', 'de Belgisch##e##'],
      [null, 'Vlaanderen', 'Vlaams', 'Nederlands', 'de Vlaming', 'de Vlaams##e##'],
      [null, 'Wallonië', 'Waals', 'Frans', 'de Waal', 'de Waals##e##'],
      [null, 'Brussel', 'Brussels', 'Frans · Nederlands', 'de Brusselaar', 'de Brussels##e##'],
    ], { flags: true, rh: 0.85, size: 21, head: ['Land / gewest', 'Adjectief', 'Taal', 'Inwoner ♂', 'Inwoonster ♀'] });
    // mini map tiles in the flag column for the three regions
    [MAP.fl, MAP.wa, MAP.bx].forEach((c, i) => d.rect(s, 0.75, 1.7 + 0.55 + (i + 1) * 0.85 + 0.18, 0.45, 0.45, { fill: c, line: null, radius: 0.08 }));
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: '9C7CC6', tr: 85, line: '6E4A9E', lw: 1 });
    d.ill(s, 'magnifying-glass-tilted-left', 0.85, 5.82, 0.85, 0.85);
    d.t(s, 'Observez la colonne **Inwoonster** : c’est presque toujours **l’adjectif + e** → //Belgisch → Belgisch##e##//', 1.9, 5.65, 10.6, 1.2, { size: 20, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 6 piège majuscule
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : la majuscule' });
    d.trap(s, 0.6, 1.7, 8.6, 3.0, 'Je suis ##b##elge et je parle ##f##rançais.', '//Ik ben <<B>>elg en ik spreek <<F>>rans.//', { size: 26 });
    d.rect(s, 9.5, 1.7, 3.23, 3.0, { fill: 'bg2', line: BORDER });
    d.t(s, 'B', 9.5, 1.85, 3.23, 2.2, { size: 120, bold: true, color: 'accent3', align: 'center', valign: 'middle', head: true });
    d.ill(s, 'magnifying-glass-tilted-left', 10.3, 3.15, 1.45, 1.45);
    d.table(s, [
      ['', 'Français', 'Nederlands'],
      ['adjectif de pays', '##b##elge · ##f##rançais', '<<B>>elgisch · <<F>>rans'],
      ['langue', 'le ##n##éerlandais', '<<N>>ederlands'],
    ], { x: 0.6, y: 4.95, w: 12.13, colW: [3.0, 4.5, 4.63], size: 18, headSize: 15, rowH: 0.48, headColors: ['accent5', 'accent6', 'accent3'] });
    d.t(s, 'Exemples : //de Belgische chocolade · een Waalse stad · Ik spreek Frans.//', 0.6, 6.45, 12.13, 0.4, { size: 16, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 7 trois routes
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'Trois façons de dire sa nationalité' });
    d.ill(s, 'man-curly-hair', 0.6, 2.75, 1.8, 1.8);
    const routes = [
      ['Route 1 · le nom', '//Ik ben **Belg**.// ♂\n//Ik ben **Belgische**.// ♀', '6E4A9E', null],
      ['Route 2 · l’adjectif', '//Ik heb de **Belgische** nationaliteit.//', 'B8860B', null],
      ['Route 3 · le pays', '//Ik kom **uit België**.//', 'accent3', '✓ route sûre'],
    ];
    routes.forEach(([h, t, c, safe], i) => {
      const y = 1.72 + i * 1.5; const cy = y + 0.65;
      d.line(s, 2.45, 3.65, 3.55, cy, { color: c, lw: 3 });
      d.rect(s, 3.6, y, 9.13, 1.3, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, 3.6, y, 3.0, 1.3, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, 3.8, y, 2.7, 1.3, { size: 19, bold: true, color: 'bg1', valign: 'middle' });
      d.t(s, t, 6.85, y, safe ? 3.05 : 5.7, 1.3, { size: 22, valign: 'middle', fit: true, max: 22, min: 16 });
      if (safe) { d.ill(s, 'motorway', 9.95, y + 0.37, 0.56, 0.56); d.chip(s, safe, 10.6, y + 0.45, 'accent3', 0.4, 12); }
    });
    d.rect(s, 0.6, 6.25, 12.13, 0.62, { fill: 'bg2', line: 'tx2', lw: 0.75 });
    d.t(s, '**Origine** : //Ik ben van **Marokkaanse** afkomst.// — je suis d’origine marocaine', 0.85, 6.25, 11.7, 0.62, { size: 18, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 8 piège je suis belge
  {
    const s = d.page({ g: 8, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : « je suis belge » = Ik ben Belg' });
    d.trap(s, 0.6, 1.7, 12.13, 3.6, 'Il est {{belge}}.   Elle est {{belge}}.   (même mot)', '//Hij is **Belg**.//   //Zij is **Belgische**.//   (deux mots)', { size: 28 });
    d.ill(s, 'man', 11.2, 2.25, 1.0, 1.0);
    d.ill(s, 'woman', 11.2, 3.95, 1.0, 1.0);
    d.rect(s, 0.6, 5.55, 12.13, 1.3, { fill: 'tx2', line: null });
    d.t(s, ['En néerlandais, on dit plutôt le **nom** d’habitant, qui change pour une femme.', '♂ //Belg · Vlaming · Waal//   ♀ //Belgische · Vlaamse · Waalse//'], 0.9, 5.55, 11.6, 1.3, { size: 19, color: 'bg1', valign: 'middle', gap: 6 });
  }

  // ---------------------------------------------------------------- 9 voisins
  {
    const s = d.page({ g: 9, tag: 'VOCABULAIRE', title: 'Nos voisins' });
    nat(s, [
      ['nl', 'Nederland', 'Nederlands', 'Nederlands', 'de Nederlander', 'de Nederlands##e##'],
      ['fr', 'Frankrijk', 'Frans', 'Frans', 'de Fransman', 'de Française / Frans##e##'],
      ['de', 'Duitsland', 'Duits', 'Duits', 'de Duitser', 'de Duits##e##'],
      ['lu', 'Luxemburg', 'Luxemburgs', 'Luxemburgs', 'de Luxemburger', 'de Luxemburgs##e##'],
      ['gb', 'Groot-Brittannië', 'Brits', 'Engels', 'de Brit', 'de Brits##e##'],
      ['es', 'Spanje', 'Spaans', 'Spaans', 'de Spanjaard', 'de Spaans##e##'],
    ], { flags: true, rh: 0.68, size: 17 });
    d.t(s, 'Masculin : souvent **irrégulier** (//Fransman, Spanjaard//) → on apprend. Féminin : **adjectif + e**.', 0.6, 6.4, 12.13, 0.45, { size: 16, italic: true, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 10 pays de la classe
  {
    const s = d.page({ g: 10, tag: 'VOCABULAIRE', title: 'Les pays de la classe' });
    const rows = [
      ['ma', 'Marokko', 'Marokkaans', 'Arabisch · Berbers', 'de Marokkaan', 'de Marokkaans##e##'],
      ['tr', 'Turkije', 'Turks', 'Turks', 'de Turk', 'de Turks##e##'],
      ['cd', 'Congo', 'Congolees', 'Frans · Lingala', 'de Congolees', 'de Congoles##e##'],
      ['pl', 'Polen', 'Pools', 'Pools', 'de Pool', 'de Pools##e##'],
      ['ro', 'Roemenië', 'Roemeens', 'Roemeens', 'de Roemeen', 'de Roemeens##e##'],
      ['it', 'Italië', 'Italiaans', 'Italiaans', 'de Italiaan', 'de Italiaans##e##'],
    ];
    const y = 1.7; const hh = 0.55; const rh = 0.7; const tx = 1.45; const w = 9.1;
    d.table(s, [HEAD, ...rows.map((r) => r.slice(1))], { x: tx, y, w, colW: [1.55, 1.65, 2.05, 1.85, 2.0], size: 15, headSize: 13, headColors: COLS, rowH: [hh, ...rows.map(() => rh)], boldCol: 0 });
    rows.forEach((r, i) => d.flag(s, r[0], 0.6, y + hh + i * rh + (rh - 0.46) / 2, 0.7, 0.46));
    d.rect(s, 10.8, 1.7, 1.93, 5.15, { fill: 'FFFFFF', line: 'accent1', lw: 2, dash: 'dash' });
    d.t(s, 'Nos pays', 10.8, 1.8, 1.93, 0.5, { size: 20, bold: true, color: 'accent1', align: 'center', head: true });
    d.ill(s, 'world-map', 11.2, 2.35, 1.15, 1.15);
    for (let k = 0; k < 5; k++) d.line(s, 10.95, 4.0 + k * 0.55, 12.58, 4.0 + k * 0.55, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
  }

  // ---------------------------------------------------------------- 11 règle +e
  {
    const s = d.page({ g: 11, tag: 'GRAMMAIRE', title: 'La règle de l’habitante : adjectif + e' });
    d.line(s, 0.9, 3.1, 12.4, 3.1, { color: GHOST, lw: 6, arrow: false });
    for (let k = 0; k < 12; k++) d.oval(s, 1.0 + k * 0.97, 3.0, 0.2, 0.2, { fill: 'accent5' });
    d.word(s, 'Belgisch', 0.9, 1.85, 3.0, 1.0, 'tx2', { size: 32, head: true, shadow: true });
    d.rect(s, 5.1, 1.75, 3.1, 1.2, { fill: 'accent1', line: null, shadow: true });
    d.icon(s, 'FaCog', 'FFFFFF', 5.3, 2.05, 0.6);
    d.t(s, '+ e', 6.0, 1.75, 2.0, 1.2, { size: 40, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.word(s, 'Belgisch##e##', 9.4, 1.85, 3.3, 1.0, 'accent3', { size: 32, head: true, shadow: true });
    d.line(s, 4.0, 2.35, 5.0, 2.35, { color: 'accent5', lw: 2.5 });
    d.line(s, 8.3, 2.35, 9.3, 2.35, { color: 'accent5', lw: 2.5 });
    const ex = [['Vlaams', 'Vlaams##e##'], ['Duits', 'Duits##e##'], ['Pools', 'Pools##e##'], ['Marokkaans', 'Marokkaans##e##'], ['Turks', 'Turks##e##'], ['Congolees', 'Congoles##e##']];
    ex.forEach(([a, b], i) => {
      const x = 0.6 + (i % 3) * 4.1; const y = 3.6 + Math.floor(i / 3) * 1.05;
      d.rect(s, x, y, 3.85, 0.85, { fill: 'bg2', line: BORDER });
      d.t(s, `//${a}// → //**${b}**//`, x, y, 3.85, 0.85, { size: 18, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.85, 12.13, 1.0, { fill: 'accent6', tr: 92, line: 'accent6', lw: 1 });
    d.chip(s, '! EXCEPTION', 0.8, 6.15, 'accent6', 0.4, 13);
    d.t(s, '//de Française// (ou //de Franse//) · //Congolees → Congolese// : //ee// → //e// (porte ouverte, M1)', 2.75, 5.85, 9.85, 1.0, { size: 18, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 12 langues
  {
    const s = d.page({ g: 12, tag: 'VOCABULAIRE', title: 'Les langues : pas d’article, une majuscule' });
    ['//Welke talen spreek je?//', '//Wat is je moedertaal?//', '//Spreek je Engels?//'].forEach((q, i) => d.bubble(s, q, 0.6, 1.75 + i * 1.05, 4.4, 0.85, 'accent2', { size: 20 }));
    const lv = [['een beetje', 'un peu', 'FCE3C4'], ['goed', 'bien', 'F6C27E'], ['vlot', 'couramment', 'E89A3C'], ['moedertaal', 'langue maternelle', 'accent3']];
    d.t(s, 'NIVEAU', 5.5, 1.72, 3, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2 });
    lv.forEach(([nl, fr, c], i) => {
      const x = 5.5 + i * 1.83; const h = 0.8 + i * 0.4; const y = 4.0 - h;
      d.rect(s, x, y, 1.7, h, { fill: c, line: null, radius: 0.06 });
      d.t(s, `**${nl}**`, x - 0.05, 4.05, 1.8, 0.4, { size: 16, align: 'center', color: 'tx2' });
      d.t(s, fr, x - 0.05, 4.42, 1.8, 0.35, { size: 13, italic: true, color: 'accent5', align: 'center' });
    });
    d.line(s, 5.5, 4.0, 12.73, 4.0, { color: 'accent5', lw: 1.5 });
    d.rect(s, 0.6, 5.0, 7.3, 1.85, { fill: 'bg2', line: BORDER });
    d.t(s, ['//Ik spreek **een beetje** Nederlands.//', '//Ik spreek **goed** Engels en **vlot** Frans.//', '//Mijn **moedertaal** is Arabisch.//'], 0.85, 5.05, 6.9, 1.75, { size: 19, valign: 'middle', gap: 5 });
    d.trap(s, 8.15, 5.0, 4.58, 1.85, '//Ik spreek {{het}} Frans.//', '//Ik spreek Ø Frans.//', { size: 19 });
  }

  // ---------------------------------------------------------------- 13 dialogue Hanne / Marc
  {
    const s = d.page({ g: 13, tag: 'VOCABULAIRE', title: 'Dialogue modèle : un couple belge' });
    d.ill(s, 'woman-curly-hair', 0.6, 1.75, 1.15, 1.15);
    d.ill(s, 'man-office-worker', 0.6, 3.45, 1.15, 1.15);
    d.ill(s, 'woman-curly-hair', 0.6, 5.15, 1.15, 1.15);
    d.bubble(s, '**Hanne** : //Ik ben **Vlaamse**. Ik woon in Antwerpen, een **Vlaamse** stad. Ik spreek **Nederlands**.//', 1.95, 1.75, 6.6, 1.3, 'accent2', { size: 19 });
    d.bubble(s, '**Marc** : //Ik ben **Waal**. Ik kom uit Bergen, een **Waalse** stad. Mijn moedertaal is **Frans**.//', 1.95, 3.45, 6.6, 1.3, 'accent1', { size: 19 });
    d.bubble(s, '**Hanne** : //Wij spreken thuis Nederlands **én** Frans!//', 1.95, 5.15, 6.6, 1.0, 'accent2', { size: 19 });
    d.rect(s, 8.85, 1.75, 3.88, 3.6, { fill: 'bg2', line: BORDER });
    const P = d.belgium(s, 9.0, 2.0, 3.58, { ...MAP, de: false, bx: 'tx2' });
    [['Antwerpen', 4.40, 51.22, 'accent2', -0.68], ['Bergen', 3.95, 50.45, 'accent1', 0.08]].forEach(([n, lon, lat, c, dy]) => {
      const [x, y] = P(lon, lat); d.pin(s, x, y, c, 0.34);
      d.t(s, n, x - 0.9, y + dy, 1.8, 0.32, { size: 13, bold: true, color: 'tx1', align: 'center', valign: 'middle' });
    });
    d.rect(s, 8.85, 5.55, 3.88, 1.3, { fill: 'tx2', line: null });
    d.t(s, ['♀ Hanne → //Vlaam**se**//', '♂ Marc → //Waal//'], 9.05, 5.55, 3.5, 1.3, { size: 18, color: 'bg1', valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 14 questions / réponses
  {
    const s = d.page({ g: 14, tag: 'À RETENIR', title: 'À retenir : les questions et les réponses' });
    const qa = [
      ['Waar kom je vandaan?', 'Ik kom uit Polen.'],
      ['Wat is je nationaliteit?', 'Ik ben Belg. / Ik heb de Belgische nationaliteit.'],
      ['Wat is je moedertaal?', 'Mijn moedertaal is Pools.'],
      ['Welke talen spreek je?', 'Ik spreek Pools, Frans en een beetje Nederlands.'],
    ];
    qa.forEach(([q, a], i) => {
      const y = 1.72 + i * 1.12;
      d.rect(s, 0.6, y, 4.3, 0.92, { fill: 'accent2', line: null });
      d.icon(s, 'FaQuestionCircle', 'FFFFFF', 0.8, y + 0.28, 0.36);
      d.t(s, `//${q}//`, 1.3, y, 3.5, 0.92, { size: 19, bold: true, color: 'bg1', valign: 'middle' });
      d.line(s, 4.95, y + 0.46, 5.5, y + 0.46, { color: 'accent5', lw: 2 });
      d.rect(s, 5.55, y, 7.18, 0.92, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25 });
      d.t(s, `//${a}//`, 5.8, y, 6.8, 0.92, { size: 19, valign: 'middle', fit: true, max: 19, min: 15 });
    });
    d.rect(s, 0.6, 6.25, 12.13, 0.62, { fill: 'bg2', line: 'tx2', lw: 0.75 });
    d.t(s, '**Poli** : //Waar komt u vandaan? · Wat is uw nationaliteit?//', 0.85, 6.25, 11.7, 0.62, { size: 18, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 15 divider
  d.divider({ g: 15, tiles: [
    ['Le tableau', '★', 'FaTable'], ['Il ou elle ?', '★', 'FaVenusMars'], ['Devinettes', '★★', 'FaQuestion'],
    ['Le détective', '★★', 'FaSearch'], ['Le tour du monde', '★', 'FaGlobeEurope'], ['Réseautage international', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 16 ex1 tableau
  d.ex({ g: 16, title: 'Exercice 1 — Complétez le tableau', stars: '★', instr: 'Complétez les cases vides.' }, (s, mode, top) => {
    const B = (v) => (mode === 'q' ? '___' : `[[${v}]]`);
    const rows = [
      ['nl', 'Nederland', B('Nederlands'), 'Nederlands', 'de Nederlander', B('de Nederlandse')],
      ['de', 'Duitsland', 'Duits', B('Duits'), B('de Duitser'), 'de Duitse'],
      [null, 'Vlaanderen', B('Vlaams'), B('Nederlands'), 'de Vlaming', B('de Vlaamse')],
      ['es', 'Spanje', 'Spaans', B('Spaans'), 'de Spanjaard', B('de Spaanse')],
    ];
    nat(s, rows, { y: top + 0.2, rh: 0.95, size: 20, mode, flags: true, colW: [2.2, 2.1, 2.3, 2.38, 2.3] });
    d.rect(s, 0.75, top + 0.2 + 0.55 + 2 * 0.95 + 0.25, 0.45, 0.45, { fill: MAP.fl, line: null, radius: 0.08 });
  });

  // ---------------------------------------------------------------- 17 ex2 il ou elle
  const ex2 = [['Belg', 'Belgische'], ['Vlaming', 'Vlaamse'], ['Nederlander', 'Nederlandse'], ['Duitser', 'Duitse'], ['Marokkaan', 'Marokkaanse'], ['Pool', 'Poolse'], ['Fransman', 'Française / Franse']];
  d.ex({ g: 17, title: 'Exercice 2 — Il ou elle ?', stars: '★', instr: 'Mettez au féminin.' }, (s, mode, top) => {
    d.ill(s, 'man', 1.35, top, 0.6, 0.6);
    d.ill(s, 'woman', 7.6, top, 0.6, 0.6);
    const rh = (6.88 - top - 0.75) / 7;
    ex2.forEach(([m, f], i) => {
      const y = top + 0.72 + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.42) / 2, 0.42, 'tx2', 14);
      d.rect(s, 1.2, y + 0.04, 4.3, rh - 0.1, { fill: 'bg2', line: BORDER });
      d.t(s, `//Hij is ${m}.//`, 1.4, y + 0.04, 4.0, rh - 0.1, { size: 21, valign: 'middle' });
      d.line(s, 5.6, y + rh / 2, 6.6, y + rh / 2, { color: 'accent1', lw: 3 });
      d.t(s, 'zij', 5.6, y, 1.0, rh / 2 - 0.02, { size: 12, bold: true, color: 'accent1', align: 'center', valign: 'bottom' });
      d.rect(s, 6.75, y + 0.04, 5.98, rh - 0.1, { fill: 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      d.t(s, `//Zij is [[${f}]].//`, 6.95, y + 0.04, 5.7, rh - 0.1, { size: 21, valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 18 ex3 devinettes
  const ex3 = [
    ['Spanje', '♀', 'Spaanse', 'Spaans', 'woman-curly-hair', 'es'],
    ['Turkije', '♂', 'Turk', 'Turks', 'man-beard', 'tr'],
    ['Nederland', '♂', 'Nederlander', 'Nederlands', 'man-red-hair', 'nl'],
    ['Wallonië', '♀', 'Waalse', 'Frans', 'woman-red-hair', null],
    ['Polen', '♀', 'Poolse', 'Pools', 'woman-office-worker', 'pl'],
  ];
  d.ex({ g: 18, title: 'Exercice 3 — Devinettes', stars: '★★', instr: 'Complétez la bulle de chaque personnage.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 5;
    ex3.forEach(([land, g, nat1, taal, il, fl], i) => {
      const y = top + i * rh;
      d.ill(s, il, 0.6, y + 0.05, rh - 0.15, rh - 0.15);
      if (fl) d.flag(s, fl, 1.65, y + (rh - 0.4) / 2, 0.6, 0.4);
      else d.rect(s, 1.65, y + (rh - 0.4) / 2, 0.6, 0.4, { fill: MAP.wa, line: null, radius: 0.04 });
      d.rect(s, 2.45, y + 0.05, 10.28, rh - 0.15, { fill: 'accent2', tr: 90, line: 'accent2', lw: 1, radius: 0.18 });
      d.t(s, `//Ik kom uit ${land}. Ik ben [[${nat1}]] (${g}). Ik spreek [[${taal}]].//`, 2.7, y + 0.05, 9.9, rh - 0.15, { size: 20, valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 19 ex4 détective
  d.ex({ g: 19, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Lina se présente. Trouvez les 6 fautes.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 8.9, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 8.9, 0.55, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'Fiche de présentation · Lina', 0.85, top, 8, 0.55, { size: 15, bold: true, color: 'bg1', valign: 'middle' });
    const txt = '//Hallo! Ik ben Lina. Ik ben {{belgische}}++ Belgische++, maar ik ben van {{marokkaanse}}++ Marokkaanse++ afkomst. Ik spreek {{frans}}++ Frans++, {{arabisch}}++ Arabisch++ en een beetje {{nederlands}}++ Nederlands++. Mijn man is Belg. Hij komt {{van}}++ uit++ Luik.//';
    d.t(s, txt, 0.95, top + 0.75, 8.2, h - 0.95, { size: 23, mode, ls: 1.25, valign: 'middle' });
    d.ill(s, 'woman-with-headscarf', 9.95, top + 0.1, 2.2, 2.2);
    d.ill(s, 'magnifying-glass-tilted-left', 10.25, top + 2.55, 1.0, 1.0);
    d.rect(s, 9.85, top + 3.75, 2.88, 0.85, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '6 fautes ?' : '5 majuscules + 1 préposition', 9.9, top + 3.75, 2.78, 0.85, { size: mode === 'q' ? 22 : 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
  });

  // ---------------------------------------------------------------- 20 ex5 tour du monde
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 5 — Le tour du monde', stars: '★' });
    d.ill(s, 'globe-showing-europe-africa', 5.37, 2.25, 2.6, 2.6);
    const cards = [['Spanje', 'es'], ['Italië', 'it'], ['Turkije', 'tr'], ['Marokko', 'ma'], ['Polen', 'pl'], ['Nederland', 'nl'], ['Duitsland', 'de'], ['Congo', 'cd']];
    const pos = [[0.6, 1.75], [2.95, 1.75], [8.23, 1.75], [10.58, 1.75], [0.6, 4.05], [2.95, 4.05], [8.23, 4.05], [10.58, 4.05]];
    cards.forEach(([n, f], i) => {
      const [x, y] = pos[i];
      d.rect(s, x, y, 2.15, 1.95, { fill: 'bg1', line: 'accent1', lw: 2, shadow: true });
      d.num(s, i + 1, x + 0.12, y + 0.12, 0.4, 'accent1', 13);
      d.flag(s, f, x + 0.62, y + 0.35, 0.9, 0.6);
      d.t(s, n, x, y + 1.1, 2.15, 0.6, { size: 20, bold: true, align: 'center', valign: 'middle', head: true });
    });
    d.rect(s, 0.6, 6.25, 12.13, 0.62, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1 });
    d.t(s, '//Ik kom uit Italië. Ik ben Italiaan / Italiaanse. Ik spreek Italiaans. — En jij, waar kom jij vandaan?//', 0.8, 6.25, 11.8, 0.62, { size: 17, valign: 'middle', fit: true, max: 17, min: 14 });
  }

  // ---------------------------------------------------------------- 21 ex6 réseautage
  {
    const s = d.page({ g: 21, tag: 'MISE EN SITUATION', title: 'Exercice 6 — Réseautage international', stars: '★★★' });
    d.rect(s, 0.6, 1.65, 12.13, 0.75, { fill: 'purple', tr: 90, line: 'purple', lw: 1 });
    d.ill(s, 'clinking-glasses', 0.75, 1.72, 0.6, 0.6);
    d.t(s, '**Situation** : réception de bienvenue chez Peeters & Co, à Bruxelles. Prenez un badge et présentez-vous à 4 personnes.', 1.5, 1.65, 11.1, 0.75, { size: 17, valign: 'middle' });
    const badges = [['Anna', 'Polen', 'Pools, Engels', 'pl'], ['Youssef', 'Marokko', 'Arabisch, Frans', 'ma'], ['Sophie', 'Frankrijk', 'Frans', 'fr'], ['Jan', 'Nederland', 'Nederlands, Duits', 'nl'], ['Elif', 'Turkije', 'Turks, Nederlands', 'tr'], ['Marc', 'Wallonië', 'Frans', null]];
    badges.forEach(([n, l, t, f], i) => {
      const x = 0.6 + (i % 3) * 4.14; const y = 2.6 + Math.floor(i / 3) * 1.35;
      d.rect(s, x, y, 3.85, 1.18, { fill: 'bg1', line: 'purple', lw: 1.5, shadow: true });
      d.rect(s, x, y, 3.85, 0.3, { fill: 'purple', line: null, radius: 0.06 });
      d.t(s, 'HALLO, IK BEN', x, y, 3.85, 0.3, { size: 10, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      if (f) d.flag(s, f, x + 0.2, y + 0.48, 0.75, 0.5); else d.rect(s, x + 0.2, y + 0.48, 0.75, 0.5, { fill: MAP.wa, line: null, radius: 0.04 });
      d.t(s, `**${n}** · ${l}`, x + 1.1, y + 0.33, 2.7, 0.45, { size: 18, valign: 'middle', fit: true, max: 18, min: 14 });
      d.t(s, `//${t}//`, x + 1.1, y + 0.75, 2.7, 0.38, { size: 15, color: 'accent5', valign: 'middle', fit: true, max: 15, min: 12 });
    });
    d.rect(s, 0.6, 5.4, 12.13, 1.45, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE DE PHRASES', 0.8, 5.48, 4, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, '//Dag, ik ben… · Waar kom je vandaan? · Wat is je moedertaal? · Welke talen spreek je? · Aangenaam!//', 0.8, 5.85, 11.7, 0.9, { size: 19, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['Traduisez : « Elle est belge et elle parle français. »', 'Le féminin de //Vlaming// ?', 'Complétez : //Ik heb de …… nationaliteit.// (Belgique)'],
    self: ['Dire', 'Former', 'Écrire'],
    teaser: { icon: 'FaHandshake', text: '**Volgende keer : Formeel of informeel?** — //je// of //u//?' },
  });
}

module.exports = { meta, build };
