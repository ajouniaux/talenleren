// Module 26 — Hoeveel kost het? · Les montants au-delà de 1 000 €
const { BORDER } = require('../lib');

const meta = { n: 26, slug: 'Hoeveel_kost_het', title: 'Hoeveel kost het? — Les montants au-delà de 1 000 €', short: 'Hoeveel kost het?', template: 'module_26_bedragen.md' };

// tranches du découpage (S22)
const MIL = 'purple'; // millions
const THO = 'accent2'; // milliers
const HUN = 'accent1'; // centaines + dizaines-unités

function build(d) {
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const trapFrame = (s, h = 4.35) => {
    d.rect(s, 0.6, 1.7, 12.13, h, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
  };
  // price tag: label with a punched hole
  const tag = (s, txt, x, y, w, h, c = 'accent1', o = {}) => {
    d.rect(s, x, y, w, h, { fill: o.fill || 'FFFFFF', line: c, lw: o.lw || 2, radius: 0.14, shadow: o.shadow !== false });
    d.oval(s, x + 0.14, y + h / 2 - 0.09, 0.18, 0.18, { fill: 'bg1', line: c, lw: 1.25 });
    d.t(s, txt, x + 0.4, y, w - 0.5, h, { size: o.size || 24, bold: true, color: o.color || 'tx2', align: 'center', valign: 'middle', head: o.head });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Hoeveel kost het?', sub: 'Les montants au-delà de 1 000 €', line: '€ 1.250 = duizend tweehonderdvijftig euro',
    visual: (s) => {
      d.rect(s, 7.2, 0.9, 5.4, 3.0, { fill: 'FFFFFF', line: null, radius: 0.16, shadow: true });
      d.t(s, 'TE HUUR · ETTERBEEK', 7.45, 1.0, 4.9, 0.45, { size: 13, bold: true, color: 'accent6', cs: 2, valign: 'middle' });
      d.ill(s, 'house', 7.45, 1.55, 1.6, 1.6);
      d.t(s, ['//appartement · 2 slaapkamers//', '//vanaf 1 maart//'], 9.2, 1.55, 3.3, 1.0, { size: 14, gap: 2, color: 'accent5' });
      tag(s, '€ 1.250,–', 9.2, 2.6, 3.2, 0.95, 'accent1', { size: 30, head: true, color: 'accent1' });
      d.rect(s, 7.2, 4.15, 5.4, 0.85, { fill: 'FFFFFF', line: null, radius: 0.18, shadow: true });
      d.t(s, '//**duizend tweehonderdvijftig** euro//', 7.4, 4.15, 5.0, 0.85, { size: 20, valign: 'middle', align: 'center', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCalculator', h: 'Lire', t: 'Je lis les grands nombres : //15.750 · 1.200.000//.', color: THO },
      { icon: 'FaMoneyBillWave', h: 'Dire', t: 'Je dis un prix avec centimes : //€ 12,50 = twaalf euro vijftig//.', color: HUN },
      { icon: 'FaHandshake', h: 'Discuter', t: 'Je parle d’un loyer, d’une facture : //Hoeveel kost het per maand?//', color: 'accent3' },
    ],
    band: 'Les montants sont partout au travail : factures, devis, salaires, budgets.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Le juste prix' });
    const C = [['bicycle', 'een fiets', ['€ 450', '€ 4.500', '€ 45']], ['laptop', 'een laptop', ['€ 120', '€ 1.200', '€ 12.000']], ['office-building', 'een appartement in Brussel (huur per maand)', ['€ 115', '€ 1.150', '€ 11.500']], ['automobile', 'een nieuwe auto', ['€ 2.500', '€ 25.000', '€ 250.000']]];
    const w = (12.13 - 3 * 0.2) / 4;
    C.forEach(([il, nl, prices], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 1.7, w, 3.75, { fill: 'bg1', line: 'accent1', lw: 1.75, radius: 0.1, shadow: true });
      d.ill(s, il, x + w / 2 - 0.5, 1.85, 1.0, 1.0);
      d.t(s, `//**${nl}**//`, x + 0.1, 2.9, w - 0.2, 0.7, { size: 15, align: 'center', valign: 'middle' });
      prices.forEach((p, k) => {
        d.rect(s, x + 0.35, 3.7 + k * 0.55, w - 0.7, 0.45, { fill: 'FDF1E6', line: 'accent1', lw: 1, radius: 0.22 });
        d.t(s, `**${'abc'[k]}** ${p}`, x + 0.35, 3.7 + k * 0.55, w - 0.7, 0.45, { size: 15, align: 'center', valign: 'middle' });
      });
    });
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.8, 0.9, 0.9);
    d.t(s, ['Choisissez le bon prix… et essayez de le lire à voix haute !', '//Ik denk… euro.//'], 2.0, 5.65, 10.5, 1.2, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 rappel 21-99
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Rappel : de 21 à 99, à l’envers' });
    const R = [['21', 'een', 'en', 'twintig', false], ['35', 'vijf', 'en', 'dertig', false], ['99', 'negen', 'en', 'negentig', false], ['22', 'twee', 'ën', 'twintig', true], ['23', 'drie', 'ën', 'twintig', true]];
    R.forEach(([n, u, e, t, tr], i) => {
      const y = 1.75 + i * 0.82;
      d.rect(s, 0.6, y, 1.3, 0.66, { fill: 'tx2', line: null, radius: 0.1 });
      d.t(s, n, 0.6, y, 1.3, 0.66, { size: 26, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, '=', 1.95, y, 0.5, 0.66, { size: 22, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, 2.5, y, 1.5, 0.66, { fill: THO, tr: 80, line: THO, lw: 1.25, radius: 0.1 });
      d.t(s, u, 2.5, y, 1.5, 0.66, { size: 21, bold: true, align: 'center', valign: 'middle' });
      d.rect(s, 4.1, y, 0.75, 0.66, { fill: tr ? 'accent6' : 'FFFFFF', tr: tr ? 80 : 0, line: tr ? 'accent6' : BORDER, lw: 1.25, radius: 0.1 });
      d.t(s, e, 4.1, y, 0.75, 0.66, { size: 21, bold: true, color: tr ? 'accent6' : 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, 4.95, y, 1.8, 0.66, { fill: HUN, tr: 80, line: HUN, lw: 1.25, radius: 0.1 });
      d.t(s, t, 4.95, y, 1.8, 0.66, { size: 21, bold: true, align: 'center', valign: 'middle' });
      d.t(s, `→ //**${u}${e}${t}**//`, 6.95, y, 3.6, 0.66, { size: 21, valign: 'middle' });
    });
    d.rect(s, 10.4, 1.75, 2.33, 3.94, { fill: 'EAF1F8', line: THO, lw: 1.25, radius: 0.1 });
    d.t(s, ['**Dizaines**', '//twintig · dertig · veertig · vijftig · zestig · zeventig · tachtig · negentig//'], 10.55, 1.85, 2.05, 3.75, { size: 15, gap: 8 });
    band(s, '« un-et-vingt » : unités **avant** dizaines · tréma quand deux //e// se suivent : //twee**ë**ntwintig//', 6.1, 0.72, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 5 centaines
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Les centaines : honderd, tweehonderd…' });
    const C = [['100', ['##honderd##']], ['200', ['##tweehonderd##']], ['125', ['##honderd##', '^^vijfentwintig^^']], ['999', ['##negenhonderd##', '^^negenennegentig^^']]];
    const w = (12.13 - 3 * 0.25) / 4;
    C.forEach(([n, r], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.75, w, 2.9, { fill: 'bg2', line: BORDER, radius: 0.1 });
      d.t(s, n, x, 1.9, w, 1.1, { size: 44, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
      d.t(s, r.map((p) => `//**${p}**//`), x + 0.1, 3.1, w - 0.2, 1.3, { size: 18, gap: 0, align: 'center', valign: 'middle' });
      if (r.length > 1) d.t(s, '(un seul mot)', x, 4.3, w, 0.3, { size: 11, italic: true, color: 'accent5', align: 'center' });
    });
    d.rect(s, 0.6, 4.9, 12.13, 0.95, { fill: 'accent6', tr: 92, line: 'accent6', lw: 1.25, radius: 0.1 });
    d.t(s, '✗ //{{een honderd}}// → ✓ //**honderd**// · un seul mot : //driehonderdvijfenzeventig//', 0.85, 4.9, 11.7, 0.95, { size: 20, valign: 'middle' });
    band(s, 'Ordre : **##centaines##** puis **^^unités + en + dizaines^^** · sur un document officiel, on lit parfois //eenhonderd//', 6.1, 0.72, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 6 milliers S22
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'Les milliers : le découpage' });
    // schéma
    d.rect(s, 0.6, 1.75, 12.13, 2.15, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.rect(s, 1.0, 1.95, 1.8, 1.0, { fill: THO, line: null, radius: 0.1 });
    d.t(s, '15', 1.0, 1.95, 1.8, 1.0, { size: 44, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.t(s, '.', 2.8, 1.95, 0.35, 1.0, { size: 44, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
    d.rect(s, 3.15, 1.95, 2.5, 1.0, { fill: HUN, line: null, radius: 0.1 });
    d.t(s, '750', 3.15, 1.95, 2.5, 1.0, { size: 44, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.t(s, 'je coupe au point', 0.9, 3.05, 4.8, 0.4, { size: 13, italic: true, color: 'accent6', align: 'center' });
    d.line(s, 5.85, 2.45, 6.45, 2.45, { color: 'tx2', lw: 3 });
    d.rect(s, 6.6, 1.95, 3.0, 1.0, { fill: THO, tr: 80, line: THO, lw: 1.5, radius: 0.1 });
    d.t(s, '//**vijftien**duizend//', 6.6, 1.95, 3.0, 1.0, { size: 20, align: 'center', valign: 'middle' });
    d.rect(s, 9.7, 1.95, 2.85, 1.0, { fill: HUN, tr: 80, line: HUN, lw: 1.5, radius: 0.1 });
    d.t(s, '//**zevenhonderdvijftig**//', 9.7, 1.95, 2.85, 1.0, { size: 15, align: 'center', valign: 'middle' });
    d.t(s, '① tranche de gauche + //duizend// · ② tranche de droite', 6.6, 3.05, 5.95, 0.4, { size: 13, italic: true, color: 'accent5', align: 'center' });
    const E = [['1.000', 'duizend'], ['2.000', 'tweeduizend'], ['1.250', 'duizend tweehonderdvijftig'], ['300.000', 'driehonderdduizend']];
    E.forEach(([n, r], i) => {
      const x = 0.6 + (i % 2) * 6.2; const y = 4.1 + Math.floor(i / 2) * 0.82;
      d.rect(s, x, y, 1.8, 0.66, { fill: 'tx2', line: null, radius: 0.08 });
      d.t(s, n, x, y, 1.8, 0.66, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `→ //${r}//`, x + 1.95, y, 4.0, 0.66, { size: 19, valign: 'middle' });
    });
    band(s, 'Comme pour //honderd// : ✗ //{{een duizend}}// · qui sait lire 1 à 999 sait lire jusqu’à 999 999 !', 6.0, 0.8, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 7 écrire
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'Comment l’écrire ?' });
    const R = [['1', 'Un seul mot jusqu’à //duizend//', '//driehonderdvijfenzeventig · tweeduizend//', 'accent3'], ['2', 'Une espace **après** //duizend//', '//tweeduizend **!!▲!!** driehonderd//', THO], ['3', '//miljoen// et //miljard// : mots séparés', '//twee miljoen vijfhonderdduizend//', MIL]];
    R.forEach(([n, rule, ex, c], i) => {
      const y = 1.75 + i * 1.3;
      d.rect(s, 0.6, y, 12.13, 1.1, { fill: 'bg1', line: c, lw: 2, radius: 0.1, shadow: true });
      d.num(s, n, 0.8, y + 0.3, 0.5, c, 16);
      d.t(s, rule, 1.5, y, 4.6, 1.1, { size: 19, bold: true, color: c, valign: 'middle' });
      d.t(s, ex, 6.2, y, 6.4, 1.1, { size: 21, valign: 'middle' });
    });
    band(s, 'Règle officielle (Taalunie). En pratique, on écrit les montants en chiffres : les lettres servent aux contrats.', 5.85, 0.95, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 8 twaalfhonderd
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: '1 200 = twaalfhonderd ?' });
    [['UN MONTANT', 'label', 'accent1', ['//€ 1.200// =', '//**duizend tweehonderd** euro//', 'ou //**twaalfhonderd** euro//', '', 'les deux sont corrects ; //twaalfhonderd// est très courant à l’oral']], ['UNE ANNÉE', 'spiral-calendar', 'accent2', ['//1995// = //**negentienhonderd**vijfennegentig//', '//2026// = //**tweeduizend** zesentwintig//', '', 'avant 2000 : toujours en centaines, comme « dix-neuf cent »', '//in 1995// (pas besoin de //het jaar//)']]].forEach(([h, il, c, lines], i) => {
      const x = 0.6 + i * 6.21; const w = 5.92;
      d.rect(s, x, 1.75, w, 4.1, { fill: 'bg1', line: c, lw: 2, radius: 0.1, shadow: true });
      d.rect(s, x, 1.75, w, 0.58, { fill: c, line: null, radius: 0.1 });
      d.t(s, h, x + 0.2, 1.75, w - 0.4, 0.58, { size: 16, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
      d.ill(s, il, x + w - 1.05, 2.45, 0.8, 0.8);
      d.t(s, lines, x + 0.3, 2.45, w - 1.4, 3.3, { size: 18, gap: 5, valign: 'top' });
    });
    band(s, 'Au marché comme au bureau : //Het kost twaalfhonderd euro.// = //Het kost duizend tweehonderd euro.//', 6.1, 0.72, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 9 euro et cent
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'Euro et cent' });
    const T = [['€ 12,50', 'twaalf euro vijftig'], ['€ 0,99', 'negenennegentig cent'], ['€ 1.499,99', 'duizend vierhonderdnegenennegentig euro negenennegentig'], ['€ 25,–', 'vijfentwintig euro']];
    T.forEach(([p, r], i) => {
      const x = 0.6 + (i % 2) * 6.21; const y = 1.75 + Math.floor(i / 2) * 1.75;
      tag(s, p, x, y, 2.7, 0.95, 'accent1', { size: 24, color: 'accent1', head: true });
      d.t(s, `//${r}//`, x + 2.85, y - 0.2, 3.2, 1.35, { size: r.length > 40 ? 14 : 18, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.3, 6.0, 0.75, { fill: 'EAF1F8', line: THO, lw: 1.25, radius: 0.1 });
    d.t(s, '**point** = milliers · **virgule** = centimes', 0.8, 5.3, 5.7, 0.75, { size: 18, valign: 'middle' });
    d.rect(s, 6.81, 5.3, 5.92, 0.75, { fill: 'FDF1E6', line: 'accent1', lw: 1.25, radius: 0.1 });
    d.t(s, '//euro// sans //-s// · pas de //en// : //twaalf euro vijftig//', 7.0, 5.3, 5.6, 0.75, { size: 18, valign: 'middle' });
    band(s, '//euro// se prononce « eu-ro » · sans nombre : //Het kost duizenden euro’s.//', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 10 piège
  {
    const s = d.page({ g: 10, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : milliard, biljoen, euros' });
    trapFrame(s, 4.4);
    const R = [['« mille euros »', 'een duizend euros', 'duizend euro'], ['« un million »', 'miljoen', '**een** miljoen'], ['« un milliard »', 'een biljoen', 'een **miljard**'], ['« 1 250 € »', '€ 1,250', '€ **1.250**']];
    R.forEach(([fr, ko, ok], i) => {
      const y = 2.35 + i * 0.85;
      d.t(s, fr, 0.95, y, 3.6, 0.7, { size: 18, valign: 'middle' });
      d.t(s, `✗ //{{${ko}}}//`, 4.7, y, 3.3, 0.7, { size: 16, color: 'accent6', valign: 'middle' });
      d.line(s, 8.05, y + 0.35, 8.45, y + 0.35, { color: 'accent3', lw: 2 });
      d.rect(s, 8.5, y + 0.06, 4.05, 0.58, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.65, y + 0.06, 3.85, 0.58, { size: 19, valign: 'middle' });
    });
    band(s, '//een biljoen// = 1 000 milliards (le « billion » français) · l’anglais //billion// = //miljard//', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 11 arrondir
  {
    const s = d.page({ g: 11, tag: 'VOCABULAIRE', title: 'Arrondir et comparer' });
    const x0 = 1.0; const x1 = 12.3; const y = 2.7;
    d.line(s, x0, y, x1, y, { color: 'tx2', lw: 3, arrow: false });
    [[900, '900'], [950, '950'], [1000, '1.000'], [1050, '1.050'], [1100, '1.100']].forEach(([v, l]) => {
      const x = x0 + ((v - 900) / 200) * (x1 - x0);
      d.line(s, x, y - 0.15, x, y + 0.15, { color: 'tx2', lw: 2, arrow: false });
      d.t(s, `€ ${l}`, x - 0.6, y + 0.2, 1.2, 0.35, { size: 13, bold: true, color: 'accent5', align: 'center' });
    });
    [[975, 'bijna 1.000', 'presque', 'accent2', 2.7], [1000, 'ongeveer · rond de 1.000', 'environ', 'accent3', 5.55], [1030, 'ruim 1.000', 'un peu plus de', 'accent1', 8.4]].forEach(([v, nl, fr, c, bx]) => {
      const x = x0 + ((v - 900) / 200) * (x1 - x0);
      d.line(s, bx + 1.35, 2.4, x, y - 0.05, { color: c, lw: 2 });
      d.rect(s, bx, 1.65, 2.7, 0.75, { fill: c, line: null, radius: 0.1 });
      d.t(s, [`//**${nl}**//`, fr], bx, 1.65, 2.7, 0.75, { size: 13, gap: 0, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 3.85, 12.13, 1.95, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, ['//meer dan / minder dan 1.000 euro// (plus de / moins de)', '//een paar honderd euro// (quelques centaines d’euros) · //duizenden euro’s// (des milliers d’euros)', '//De stad heeft ruim een miljoen inwoners.//'], 0.85, 3.9, 11.7, 1.85, { size: 18, gap: 8, valign: 'middle' });
    band(s, '//ruim// est très fréquent dans les médias : //ruim 1.000 deelnemers//', 6.05, 0.75, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 12 facture
  {
    const s = d.page({ g: 12, tag: 'MISE EN SITUATION', title: 'Au travail : facture, loyer, salaire' });
    d.rect(s, 0.6, 1.7, 5.6, 4.35, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
    d.rect(s, 0.6, 1.7, 5.6, 0.55, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'FACTUUR · PEETERS & CO', 0.8, 1.7, 5.2, 0.55, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
    const L = [['10 laptops', '€ 12.000,00'], ['installatie', '€ 200,00'], ['subtotaal', '€ 12.200,00'], ['btw 21 %', '€ 2.562,00'], ['totaal', '€ 14.762,00']];
    L.forEach(([a, b], i) => {
      const y = 2.4 + i * 0.58; const tot = i === 4;
      if (i === 2 || i === 4) d.line(s, 0.85, y - 0.04, 5.95, y - 0.04, { color: 'accent5', lw: tot ? 2 : 0.75, arrow: false });
      d.t(s, a, 0.9, y, 2.8, 0.55, { size: 16, bold: tot, color: tot ? 'accent6' : 'tx1', valign: 'middle' });
      d.t(s, b, 3.4, y, 2.6, 0.55, { size: 16, bold: tot, color: tot ? 'accent6' : 'tx1', align: 'right', valign: 'middle' });
    });
    d.ill(s, 'receipt', 0.9, 5.45, 0.45, 0.45);
    d.t(s, '//btw// = la TVA (21 % en Belgique)', 1.45, 5.4, 4.6, 0.55, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
    [['house', 'De huur is € 1.150 per maand.', 'le loyer', 'accent3'], ['money-bag', 'Het brutoloon is € 3.200, netto ongeveer € 2.100.', 'le salaire brut / net', 'accent1']].forEach(([il, t, fr, c], i) => {
      const y = 1.7 + i * 1.3;
      d.rect(s, 6.45, y, 6.28, 1.15, { fill: c, tr: 88, line: c, lw: 1.5, radius: 0.1 });
      d.ill(s, il, 6.6, y + 0.2, 0.75, 0.75);
      d.t(s, [`//${t}//`, fr], 7.5, y, 5.1, 1.15, { size: 17, gap: 2, valign: 'middle' });
    });
    d.rect(s, 6.45, 4.4, 6.28, 1.65, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, ['**Questions utiles**', '//Hoeveel kost het? · Wat is de prijs?//', '//Is dat inclusief btw?//'], 6.65, 4.45, 5.9, 1.55, { size: 17, gap: 4, valign: 'middle' });
    band(s, 'Lisez le total : //veertienduizend zevenhonderdtweeënzestig euro//', 6.25, 0.6, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : le découpage' });
    const B = [['2', MIL, 'twee miljoen', 0.6, 2.4], ['536', THO, 'vijfhonderdzesendertigduizend', 3.3, 4.6], ['481', HUN, 'vierhonderdeenentachtig', 8.2, 4.53]];
    B.forEach(([n, c, r, x, w], i) => {
      d.rect(s, x, 1.7, w, 0.85, { fill: c, line: null, radius: 0.1 });
      d.t(s, n, x, 1.7, w, 0.85, { size: 38, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      if (i < 2) d.t(s, '.', x + w, 1.7, 0.3, 0.85, { size: 38, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
      d.rect(s, x, 2.62, w, 0.5, { fill: c, tr: 82, line: null, radius: 0.08 });
      d.t(s, `//**${r}**//`, x, 2.62, w, 0.5, { size: 15, align: 'center', valign: 'middle' });
    });
    const R = [['Pas de //een//', '//honderd · duizend// — mais //**een** miljoen//', 'accent6'], ['Un seul mot', 'jusqu’à //duizend//, puis une espace', 'accent3'], ['Montant', '//€ 12,50 = twaalf euro vijftig// · //euro// sans //-s//', 'accent1']];
    R.forEach(([h, t, c], i) => {
      const y = 3.45 + i * 0.95;
      d.rect(s, 0.6, y, 12.13, 0.78, { fill: 'bg1', line: c, lw: 1.75, radius: 0.1 });
      d.rect(s, 0.6, y, 2.6, 0.78, { fill: c, line: null, radius: 0.1 });
      d.t(s, h, 0.6, y, 2.6, 0.78, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, t, 3.4, y, 9.2, 0.78, { size: 19, valign: 'middle' });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['En lettres', '★', 'FaPenFancy'], ['La dictée des prix', '★★', 'FaHeadphones'], ['Les tranches', '★', 'FaPuzzlePiece'], ['Le détective', '★★', 'FaSearch'],
    ['Année ou montant ?', '★★', 'FaCalendarAlt'], ['Hoger, lager!', '★', 'FaArrowsAltV'], ['L’appartement', '★★★', 'FaKey'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 en lettres
  const ex1 = [['135', 'honderdvijfendertig'], ['480', 'vierhonderdtachtig'], ['1.200', 'duizend tweehonderd', 'twaalfhonderd'], ['2.023', 'tweeduizend drieëntwintig'], ['15.750', 'vijftienduizend zevenhonderdvijftig'], ['1.000.000', 'een miljoen']];
  d.ex({ g: 15, title: 'Exercice 1 — En lettres', stars: '★', instr: 'Écrivez les nombres en lettres. Attention aux espaces et au tréma !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex1.forEach(([n, a, alt], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, 1.15, y + 0.06, 2.4, rh - 0.12, { fill: 'tx2', line: null, radius: 0.08 });
      d.t(s, n, 1.15, y + 0.06, 2.4, rh - 0.12, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.line(s, 3.65, y + rh / 2, 4.2, y + rh / 2, { color: 'accent1', lw: 3 });
      d.rect(s, 4.3, y + 0.06, 8.43, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**${a}**//${alt ? `  ·  ou //${alt}//` : ''}`, 4.45, y + 0.06, 8.2, rh - 0.12, { size: 19, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 16 ex2 dictée
  const ex2 = ['€ 650', '€ 1.200', '€ 1.999', '€ 24,95', '€ 8.500', '€ 1.200.000'];
  d.ex({ g: 16, title: 'Exercice 2 — La dictée des prix', stars: '★★', instr: 'Écoutez l’enseignant·e et écrivez les montants en chiffres.' }, (s, mode, top) => {
    const w = 3.0; const h = 1.2;
    ex2.forEach((p, i) => {
      const x = 0.6 + (i % 3) * (w + 0.35); const y = top + 0.15 + Math.floor(i / 3) * (h + 0.55);
      d.num(s, i + 1, x, y + h / 2 - 0.2, 0.4, 'accent1', 13);
      tag(s, mode === 'a' ? p : '€ ……………', x + 0.5, y, w - 0.5, h, mode === 'a' ? 'accent3' : 'accent1', { size: mode === 'a' ? (p.length > 9 ? 18 : 24) : 18, color: mode === 'a' ? 'accent3' : 'accent5', head: mode === 'a' });
    });
    d.ill(s, 'loudspeaker', 10.9, top + 0.2, 1.4, 1.4);
    d.t(s, 'Deux fois, à vitesse normale.', 10.3, top + 1.75, 2.43, 0.8, { size: 14, italic: true, color: 'accent5', align: 'center' });
    if (mode === 'a') d.t(s, '2 : //twaalfhonderd// = 1 200 · 4 : //vierentwintig euro vijfennegentig// · 6 : //een miljoen tweehonderdduizend//', 0.6, 6.2, 12.13, 0.6, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
  });

  // ---------------------------------------------------------------- 17 ex3 tranches
  const ex3 = [['3.450', ['vijftig', 'drieduizend', 'vierhonderd'], 'drieduizend vierhonderdvijftig'], ['12.800', ['achthonderd', 'twaalfduizend'], 'twaalfduizend achthonderd'], ['1.375', ['driehonderdvijfenzeventig', 'duizend'], 'duizend driehonderdvijfenzeventig'], ['250.000', ['duizend', 'tweehonderdvijftig'], 'tweehonderdvijftigduizend'], ['2.500.000', ['vijfhonderdduizend', 'twee miljoen'], 'twee miljoen vijfhonderdduizend']];
  d.ex({ g: 17, title: 'Exercice 3 — Les tranches', stars: '★', instr: 'Remettez les morceaux dans l’ordre, puis lisez le nombre à voix haute.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 5;
    ex3.forEach(([n, parts, a], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.07, 1.9, rh - 0.14, { fill: 'tx2', line: null, radius: 0.08 });
      d.t(s, n, 0.6, y + 0.07, 1.9, rh - 0.14, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      if (mode === 'q') {
        let x = 2.75;
        parts.forEach((p) => {
          const w = 0.4 + p.length * 0.125;
          d.rect(s, x, y + 0.14, w, rh - 0.28, { fill: 'FFFFFF', line: 'accent1', lw: 1.25, radius: 0.1, rotate: (p.length % 3) - 1 });
          d.t(s, `//${p}//`, x, y + 0.14, w, rh - 0.28, { size: 16, align: 'center', valign: 'middle' });
          x += w + 0.2;
        });
      } else {
        d.rect(s, 2.75, y + 0.07, 9.98, rh - 0.14, { fill: 'EDF6F0', line: 'accent3', lw: 1.25 });
        d.t(s, `//**${a}**//`, 2.9, y + 0.07, 9.7, rh - 0.14, { size: 20, color: 'accent3', valign: 'middle' });
      }
    });
  });

  // ---------------------------------------------------------------- 18 ex4 détective
  d.ex({ g: 18, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Sofie envoie un devis. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Sofie Peeters · Aan: klant · Onderwerp: offerte computers', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = '//Geachte klant, de nieuwe computers kosten {{een duizend}}++ duizend++ tweehonderd {{euros}}++ euro++ per stuk. Voor tien computers is dat twaalfduizend euro. De installatie kost {{twee honderd}}++ tweehonderd++ euro en de levering {{drieentwintig}}++ drieëntwintig++ euro. Totaal: {{€ 12,223}}++ € 12.223++ (exclusief btw). Met vriendelijke groeten, Sofie Peeters//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 19, mode, ls: 1.2, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurre : //twaalfduizend euro// est correct. Total : 12 000 + 200 + 23 = 12 223 €.', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 19 ex5 année ou montant
  const ex5 = [['spiral-calendar', 'in 1985', 'negentienhonderdvijfentachtig'], ['label', '€ 1.985', 'duizend negenhonderdvijfentachtig euro', 'negentienhonderdvijfentachtig euro'], ['spiral-calendar', 'in 2010', 'tweeduizend tien'], ['label', '€ 2.010', 'tweeduizend tien euro'], ['spiral-calendar', 'in 1958', 'negentienhonderdachtenvijftig'], ['label', '€ 1.958,50', 'duizend negenhonderdachtenvijftig euro vijftig']];
  d.ex({ g: 19, title: 'Exercice 5 — Année ou montant ?', stars: '★★', instr: 'Lisez à voix haute, puis écrivez en lettres. Une année ou un prix ?' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex5.forEach(([il, n, a, alt], i) => {
      const y = top + i * rh;
      d.ill(s, il, 0.6, y + (rh - 0.5) / 2, 0.5, 0.5);
      d.rect(s, 1.25, y + 0.06, 2.3, rh - 0.12, { fill: 'bg2', line: BORDER, radius: 0.08 });
      d.t(s, n, 1.25, y + 0.06, 2.3, rh - 0.12, { size: 20, bold: true, align: 'center', valign: 'middle' });
      d.line(s, 3.65, y + rh / 2, 4.2, y + rh / 2, { color: 'accent1', lw: 3 });
      d.rect(s, 4.3, y + 0.06, 8.43, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') {
        if (alt) {
          d.t(s, `//**${a}**//`, 4.45, y + 0.08, 8.2, (rh - 0.12) * 0.55, { size: 17, color: 'accent3', valign: 'middle' });
          d.t(s, `ou //${alt}//`, 4.45, y + 0.06 + (rh - 0.12) * 0.52, 8.2, (rh - 0.12) * 0.45, { size: 13, color: 'accent5', valign: 'middle' });
        } else d.t(s, `//**${a}**//`, 4.45, y + 0.06, 8.2, rh - 0.12, { size: 18, color: 'accent3', valign: 'middle', fit: true, max: 18, min: 13 });
      }
    });
  });

  // ---------------------------------------------------------------- 20 ex6 hoger lager
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Hoger, lager!', stars: '★' });
    const O = [['automobile', 'een tweedehandsauto'], ['mobile-phone', 'een smartphone'], ['beach-with-umbrella', 'een week vakantie in Spanje'], ['bicycle', 'een elektrische fiets'], ['fork-and-knife-with-plate', 'een nieuwe keuken'], ['house', 'een studio in Gent (huur per maand)']];
    O.forEach(([il, t], i) => {
      const x = 0.6 + (i % 3) * 2.6; const y = 1.75 + Math.floor(i / 3) * 2.5;
      d.rect(s, x, y, 2.45, 2.3, { fill: 'FFFFFF', line: 'accent1', lw: 2, radius: 0.12, shadow: true });
      d.ill(s, il, x + 0.8, y + 0.15, 0.85, 0.85);
      d.t(s, `//**${t}**//`, x + 0.1, y + 1.0, 2.25, 0.75, { size: 14, align: 'center', valign: 'middle' });
      d.rect(s, x + 0.55, y + 1.78, 1.35, 0.4, { fill: 'accent1', line: null, radius: 0.2 });
      d.t(s, '€ ???', x + 0.55, y + 1.78, 1.35, 0.4, { size: 14, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.ill(s, 'up-arrow', 8.6, 1.75, 0.6, 0.6);
    d.ill(s, 'down-arrow', 9.2, 1.75, 0.6, 0.6);
    d.t(s, 'Hoger! Lager!', 9.9, 1.75, 2.83, 0.6, { size: 22, bold: true, color: 'accent1', head: true, valign: 'middle' });
    d.t(s, ['**1.** Une équipe propose un prix : //Ik denk vierduizend euro.//', '**2.** L’enseignant·e répond : //Hoger!// (plus) ou //Lager!// (moins)', '**3.** Le prix exact en moins de 5 essais = 1 point.'], 8.6, 2.6, 4.13, 3.0, { size: 15, gap: 10 });
    d.t(s, 'Montants dits en entier, sans chiffres écrits !', 8.6, 5.75, 4.13, 0.6, { size: 13, italic: true, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 21 ex7 appartement
  d.roleplay({
    g: 21, title: 'Exercice 7 — L’appartement',
    scenario: 'Karim visite un appartement à Etterbeek. Il pose des questions sur les coûts et essaie de négocier.',
    a: '**Karim** : demandez le prix, les charges et la garantie ; négociez le loyer.',
    b: '**L’agent immobilier** : présentez l’appartement et défendez votre prix (montants à voix haute !).',
    bank: '//Hoeveel kost het per maand? · Zijn de kosten inbegrepen? · Hoeveel is de waarborg? · Dat is te duur voor mij. · Kan het voor duizend euro? · Wat is uw laatste prijs?//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFBEA', line: 'accent1', lw: 1.5, radius: 0.04, shadow: true });
      d.chip(s, 'TE HUUR · ETTERBEEK', x + 0.2, y + 0.2, 'accent6', 0.36, 12);
      d.ill(s, 'office-building', x + w - 1.0, y + 0.7, 0.8, 0.8);
      d.t(s, ['//appartement · 2 slaapkamers//', '//70 m² · 2e verdieping · lift//'], x + 0.2, y + 0.75, w - 1.3, 0.8, { size: 12, gap: 2, color: 'accent5' });
      [['huur', '€ 1.150 / maand'], ['kosten', '€ 120 / maand'], ['huurwaarborg', '€ 2.300'], ['vrij vanaf', '1 maart']].forEach(([k, v], i) => {
        const yy = y + 1.75 + i * 0.75;
        d.line(s, x + 0.2, yy - 0.05, x + w - 0.2, yy - 0.05, { color: BORDER, lw: 0.75, arrow: false });
        d.t(s, k, x + 0.2, yy, 1.7, 0.6, { size: 13, color: 'accent5', valign: 'middle' });
        d.t(s, `**${v}**`, x + 1.8, yy, w - 2.0, 0.6, { size: 15, color: 'accent1', align: 'right', valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['Lisez : //4.375//.', 'Lisez : //€ 1.299,95//.', 'Corrigez : //Het kost een duizend euros.//'],
    self: ['Lire', 'Dire', 'Discuter'],
    teaser: { icon: 'FaHeart', text: '**Volgende keer : Graag of houden van?** — //Ik zwem graag · Ik hou van de zee.//' },
  });
}

module.exports = { meta, build };
