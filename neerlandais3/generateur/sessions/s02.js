// Séance 2 — Palier 5 : séquence 5.2 (De woning beschrijven — die et dat) — Livret p. 7–10a
// Version retravaillée avec l'enseignant : sa couverture « UE 3 Les 2 », sa règle illustrée et son image finale sont
// gardées (img/ue3, img/u02_*) ; progression découvrir → règle → s'entraîner → lire → écrire → transférer → bilan.
// Code couleur : mot de / die en bleu (^^…^^), mot het / dat en framboise (%%…%%), verbe en rouge (!!…!!).
const { parse, plain, flow, fitSize, ico, HEX, HEAD, BORDER, shadow } = require('../lib');

exports.meta = {
  n: 2, slug: 'De_woning_beschrijven', title: 'De woning beschrijven',
  subtitle: 'Les pronoms relatifs die et dat — le moteur de l’annonce immobilière',
  pages: 'Livret p. 7–10a', img: 'p5_09_4', time: '5.2', sceneLabel: 'SÉQUENCE',
  block: 'Palier 5 · Van opdracht tot verkoop',
};

exports.build = (d) => {
  const S = d.S;
  const hx = (c) => HEX[c] || { tx1: HEX.dk1, tx2: HEX.dk2, bg1: HEX.lt1, bg2: HEX.lt2 }[c] || c;
  // ---------------------------------------------------------------- petites pièces de mise en page
  const T = (s, str, x, y, w, h, o = {}) => s.addText(Array.isArray(str)
    ? flow(str.map((l) => ({ runs: parse(l, o.mode || 'a', o.base || {}), opts: { paraSpaceAfter: o.gap ?? 6, ...(o.bullet ? { bullet: { indent: 14 } } : {}) } })))
    : parse(str, o.mode || 'a', o.base || {}), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || 'tx1', bold: o.bold, italic: o.italic, align: o.align || 'left', valign: o.valign || 'middle',
    margin: 0, isTextBox: true, fontFace: o.head ? HEAD : undefined, charSpacing: o.cs,
  });
  const box = (s, x, y, w, h, o = {}) => s.addShape(o.square ? S.RECTANGLE : S.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: o.r ?? 0.1, fill: { color: o.fill || 'bg1', transparency: o.tr || 0 },
    line: o.line ? { color: hx(o.line), width: o.lw || 1, dashType: o.dash } : { color: 'FFFFFF', width: 0, transparency: 100 }, shadow: o.shadow ? shadow() : undefined,
  });
  const disc = (s, icon, color, x, y, dd = 0.62) => { s.addShape(S.OVAL, { x, y, w: dd, h: dd, fill: { color } }); s.addImage({ data: ico(icon, 'FFFFFF'), x: x + dd * 0.25, y: y + dd * 0.25, w: dd * 0.5, h: dd * 0.5 }); };
  const label = (s, str, x, y, w, color = 'accent5', align = 'left') => T(s, str, x, y, w, 0.3, { size: 12, bold: true, color, cs: 1.5, align });
  const arrow = (s, x1, y1, x2, y2, c = 'accent5') => s.addShape(S.LINE, { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.max(0.001, Math.abs(x2 - x1)), h: Math.max(0.001, Math.abs(y2 - y1)), flipH: x2 < x1, flipV: y2 < y1, line: { color: hx(c), width: 2, endArrowType: 'triangle' } });
  // une carte à bandeau de couleur (annonce, fiche)
  const card = (s, x, y, w, h, head, color, o = {}) => {
    box(s, x, y, w, h, { line: BORDER, shadow: true });
    s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h: 0.58, rectRadius: 0.1, fill: { color } });
    s.addShape(S.RECTANGLE, { x, y: y + 0.38, w, h: 0.2, fill: { color }, line: { color: hx(color), width: 0 } });
    if (o.icon) s.addImage({ data: ico(o.icon, 'FFFFFF'), x: x + 0.18, y: y + 0.14, w: 0.3, h: 0.3 });
    T(s, head, x + (o.icon ? 0.58 : 0.2), y, w - (o.icon ? 0.78 : 0.4) - (o.right ? 1.6 : 0), 0.58, { size: o.hs || 15, bold: true, color: 'bg1', cs: 1 });
    if (o.right) T(s, o.right, x + w - 1.85, y, 1.65, 0.58, { size: 13, italic: true, color: 'bg1', align: 'right' });
  };
  const priceTag = (s, x, y, w, str, color = 'tx2') => { box(s, x, y, w, 0.5, { fill: color, r: 0.08 }); T(s, str, x, y, w, 0.5, { size: 16, bold: true, color: 'bg1', align: 'center' }); };
  const page = (spec) => d.content(spec, false);

  // ================================================================ 1 couverture de l'enseignant
  d.section('Ouverture');
  d.keep('cover').addNotes('Séance centrée sur les relatives die / dat. Objectifs : choisir die ou dat d’après l’article (de / pluriel → die ; het singulier → dat), placer le verbe à la fin, lire trois zoekertjes comme un professionnel, fusionner deux phrases, rédiger une annonce (TAAK 2), puis transférer la technique aux annonces 2dehands (D2).');

  // ================================================================ 2 vandaag : pourquoi, objectifs, parcours
  {
    const s = page({ title: 'Vandaag : décrire un bien qui se vend', tag: 'PLAN', page: 'Livret p. 7–10a',
      notes: "Durées indicatives (90 min) : découvrir 10 · règle et réflexe 15 · entraînement 5 · lire les annonces 20 · combiner 8 · TAAK 2 15 · Dagelijks leven 12 · bilan 5. Lancer la séance par la comparaison de gauche : « Lequel de ces deux textes donne envie d’acheter ? » La réponse justifie toute la grammaire du jour. La TAAK 2 et la question 4 de D2 peuvent être terminées à la maison." });
    label(s, 'POURQUOI ?', 0.6, 1.62, 6.3);
    [['FaTimes', 'accent6', 'On énumère (palier 1)', '//Rijhuis. Het heeft een tuin. De tuin ligt op het zuiden.//'], ['FaCheck', 'accent3', 'On vend (palier 5)', '//Rijhuis met een tuin ^^die^^ op het zuiden !!ligt!!.//']].forEach(([ic, c, h, t], i) => {
      const y = 2.0 + i * 1.4;
      box(s, 0.6, y, 6.3, 1.22, { fill: c, tr: 91, line: c, lw: 1.25 });
      s.addImage({ data: ico(ic, c), x: 0.85, y: y + 0.18, w: 0.36, h: 0.36 });
      T(s, h, 1.38, y + 0.1, 5.3, 0.45, { size: 16, bold: true, color: c });
      T(s, t, 1.38, y + 0.55, 5.35, 0.55, { size: 19 });
    });
    T(s, 'Le pronom relatif relie les informations : c’est l’**outil n° 1** de l’annonce.', 0.6, 4.85, 6.3, 0.5, { size: 15, italic: true, color: 'accent5' });
    label(s, 'À LA FIN DE LA SÉANCE, JE SAIS…', 7.35, 1.62, 5.4);
    [['FaSearch', 'accent3', 'lire une annonce comme un pro', 'à vendre ou à louer · prix · slpk. · EPC'], ['FaPuzzlePiece', 'accent2', 'choisir ^^die^^ ou %%dat%%', 'et placer le verbe à la fin'], ['FaPenNib', 'accent1', 'rédiger un zoekertje', 'TAAK 2 · 60 à 80 mots']].forEach(([ic, c, h, sub], i) => {
      const y = 2.0 + i * 1.0;
      disc(s, ic, c, 7.35, y + 0.08, 0.66);
      T(s, h, 8.2, y, 4.5, 0.48, { size: 19, bold: true, color: 'tx2' });
      T(s, sub, 8.2, y + 0.46, 4.5, 0.36, { size: 14, italic: true, color: 'accent5' });
    });
    // le parcours de la séance
    const steps = [['Découvrir', 'p. 7'], ['La règle', 'p. 8'], ['Lire', 'p. 8–10'], ['Écrire', 'TAAK 2 · p. 10'], ['Transférer', 'D2 · p. 10a']];
    const sw = (12.13 - 4 * 0.32) / 5;
    steps.forEach(([t, p], i) => {
      const x = 0.6 + i * (sw + 0.32);
      box(s, x, 5.65, sw, 1.0, { fill: 'bg2', line: BORDER });
      s.addShape(S.OVAL, { x: x + 0.15, y: 5.85, w: 0.6, h: 0.6, fill: { color: 'tx2' } });
      T(s, String(i + 1), x + 0.15, 5.85, 0.6, 0.6, { size: 18, bold: true, color: 'bg1', align: 'center' });
      T(s, [`**${t}**`, `//${p}//`], x + 0.85, 5.68, sw - 0.95, 0.94, { size: 15, color: 'tx2', gap: 0 });
      if (i < 4) arrow(s, x + sw + 0.04, 6.15, x + sw + 0.28, 6.15, 'accent5');
    });
  }

  // ================================================================ 3 découvrir : le focus du livret
  d.section('Découvrir');
  d.scene({
    title: 'Séquence 5.2 : décrire le bien', tag: 'FOCUS', page: 'Livret p. 7', img: 'p5_09_4', time: '5.2', sceneLabel: 'SÉQUENCE',
    text: ['**Focus : lignes 1, 3 et 5**', '«Jij bent toch de stagiair **die** vorig jaar de opleiding vastgoed heeft gevolgd?»', '«Het is een woning **die** net gerenoveerd is.»', '«Dat is de man **die** ons vorige maand heeft gebeld.»'],
    ask: '**①** Quel petit mot relie la 2e partie de la phrase au nom ?  **②** Où se trouve le verbe conjugué ?',
    notes: "Découverte avant la règle. Laisser chercher par deux (2 min). Réponses : ① « die » dans les trois cas ; les trois noms (de stagiair, een woning, de man) sont des mots en de : on verra que « die » suit la logique de l’article. ② Le verbe est à la fin : heeft gevolgd, gerenoveerd is, heeft gebeld — comme après omdat (palier 4).",
  });

  // ================================================================ 4 la règle (illustration de l'enseignant)
  {
    const s = page({ title: 'Die ou dat ? La règle des articles', tag: 'GRAMMATICA', page: 'Livret p. 8',
      notes: "Règle de base : de-woord ou pluriel → die ; het-woord au singulier → dat. Le pluriel est toujours « die », même pour un het-woord (het appartement → de appartementen die). Piège pour francophones : le français distingue sujet (qui) et objet (que) ; le néerlandais ne regarde que l’article du mot. Faire dire l’article de chaque nom avant de choisir : c’est pourquoi on l’a appris avec le vocabulaire." });
    d.img(s, 'u02_die_dat', 0.6, 1.62, 12.13, 5.26, { alt: 'Die : mots de et pluriels ; dat : mots het au singulier' });
  }

  // ================================================================ 5 le réflexe : de ou het ?
  {
    const s = page({ title: 'Le réflexe : de ou het ?', tag: 'MÉTHODE', page: 'Hors syllabus',
      notes: "Méthode en deux temps : 1. trouver le nom auquel la relative se rapporte ; 2. dire son article (et voir s’il est au pluriel). Faire verbaliser à voix haute : « het huis → dat ». Attention aux pluriels des mots het : het huis → de huizen die ; het appartement → de appartementen die. Les diminutifs (-je) sont toujours het : het studiootje dat…" });
    ['LE NOM', 'SON ARTICLE', 'LE RELATIF', 'DANS L’ANNONCE'].forEach((h, i) => label(s, h, [0.6, 3.55, 6.45, 8.2][i], 1.62, [2.6, 2.6, 1.4, 4.5][i], 'accent5', i === 2 ? 'center' : 'left'));
    [['de woning', 'mot //de//', 'die', 'accent2', 'de woning ^^die^^ net gerenoveerd !!is!!'], ['het huis', 'mot //het//, singulier', 'dat', 'accent4', 'het huis %%dat%% te koop !!staat!!'], ['de huizen', 'pluriel (même d’un mot //het//)', 'die', 'accent2', 'de huizen ^^die^^ te koop !!staan!!']].forEach(([n, art, rel, c, ex], i) => {
      const y = 2.05 + i * 1.12; const cy = y + 0.42;
      box(s, 0.6, y, 2.6, 0.84, { fill: c, tr: 88, line: c, lw: 1.5 });
      T(s, `//**${n}**//`, 0.6, y, 2.6, 0.84, { size: 21, color: c, align: 'center' });
      arrow(s, 3.25, cy, 3.5, cy);
      T(s, art, 3.55, y, 2.55, 0.84, { size: 17, color: 'tx2', bold: true });
      arrow(s, 6.1, cy, 6.6, cy, c);
      s.addShape(S.OVAL, { x: 6.68, y: cy - 0.45, w: 0.9, h: 0.9, fill: { color: c }, shadow: shadow() });
      T(s, `**${rel}**`, 6.68, cy - 0.45, 0.9, 0.9, { size: 21, color: 'bg1', align: 'center' });
      T(s, `//${ex}//`, 8.2, y, 4.55, 0.84, { size: 19 });
    });
    d.footBox(s, { kind: 'trap', text: '//qui// ou //que// ? Peu importe ! Le néerlandais regarde l’**article** : //de woning ^^die^^ u zoekt// (que vous cherchez) · //het huis %%dat%% u koopt// (que vous achetez).' }, 5.6, 1.0);
  }

  // ================================================================ 6 le verbe part à la fin
  {
    const s = page({ title: 'Le verbe de la relative part à la fin', tag: 'GRAMMATICA', page: 'Livret p. 8',
      notes: "Une relative est une subordonnée comme celles du palier 4 (omdat, als…) : tout ce qui suit le relatif se place avant le verbe conjugué. Au perfectum, « heeft gebeld » ou « gebeld heeft » sont corrects tous les deux dans la subordonnée (le livret utilise « heeft gebeld »). Faire lire les phrases à voix haute en tapant sur la table au moment du verbe." });
    T(s, 'Une relative est une **subordonnée** (palier 4) : le verbe conjugué part à la **fin**, comme après //omdat//.', 0.6, 1.62, 12.13, 0.45, { size: 18 });
    const R = [['✓', [['Rijhuis', 'bg2', 'tx1', 'le nom'], ['dat', 'accent4', 'bg1', 'relatif'], ['volledig gerenoveerd', 'bg2', 'tx1', ''], ['is', 'accent6', 'bg1', 'verbe → FIN']], 'Une maison qui est entièrement rénovée.'],
      ['✓', [['De man', 'bg2', 'tx1', 'le nom'], ['die', 'accent2', 'bg1', 'relatif'], ['ons vorige maand', 'bg2', 'tx1', ''], ['heeft gebeld', 'accent6', 'bg1', 'verbe → FIN']], 'L’homme qui nous a appelés le mois dernier.'],
      ['✗', [['Rijhuis', 'bg2', 'tx1', ''], ['dat', 'accent4', 'bg1', ''], ['is', 'accent6', 'bg1', '✗ trop tôt'], ['volledig gerenoveerd', 'bg2', 'tx1', '']], 'Impossible : c’est l’ordre de la phrase principale.']];
    R.forEach(([mark, cells, fr], i) => {
      const y = 2.45 + i * 1.12; let x = 1.35;
      T(s, `**${mark}**`, 0.6, y + 0.24, 0.6, 0.6, { size: 26, color: mark === '✓' ? 'accent3' : 'accent6', align: 'center' });
      cells.forEach(([t, fill, col, lab]) => {
        const w = Math.max(0.9, plain(t).length * 0.15 + 0.5);
        if (lab) T(s, lab, x, y, w, 0.24, { size: 11, bold: true, color: fill === 'bg2' ? 'accent5' : fill, align: 'center' });
        box(s, x, y + 0.26, w, 0.62, { fill, line: fill === 'bg2' ? BORDER : undefined, r: 0.08 });
        T(s, `//${t}//`, x, y + 0.26, w, 0.62, { size: 21, bold: true, color: col, align: 'center', base: mark === '✗' && fill === 'accent6' ? { strike: 'sngStrike' } : {} });
        x += w + 0.12;
      });
      T(s, `//${fr}//`, x + 0.25, y + 0.26, 12.73 - x - 0.25, 0.62, { size: 14, color: 'accent5' });
    });
    d.footBox(s, { kind: 'trap', text: 'Le français place le verbe juste après //qui// : //la maison qui **est** rénovée//. Le néerlandais le repousse à la **fin** : //het huis %%dat%% gerenoveerd !!is!!//.' }, 5.95, 0.9);
  }

  // ================================================================ 7-8 s'entraîner tout de suite
  d.exercise({
    title: 'Die of dat ? Kies de juiste vorm', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul·e · 4 min. Choisissez le bon pronom. Dites d’abord **de ou het** pour le nom (et regardez s’il est au pluriel).',
    gap: 12,
    items: [
      'De makelaar {{dat}} / <<die>> de woning verkoopt, heet Janssens.',
      'Het huis {{die}} / <<dat>> naast de bakker staat, is te koop.',
      'De klanten {{dat}} / <<die>> morgen komen, zoeken een appartement.',
      'Dat is het contract {{die}} / <<dat>> de eigenaar moet tekenen.',
      'De sleutels {{dat}} / <<die>> u krijgt, zijn voor de kelder.',
      'Het bod {{die}} / <<dat>> de koper uitbrengt, is te laag.',
    ],
    traps: ['**het contract**, **het huis**, **het bod** → **dat**.', '**de makelaar** → **die** ; **de klanten**, **de sleutels** (pluriels) → **die**.', 'Sujet ou objet : le **même** pronom (//het contract dat de eigenaar tekent//).'],
    notes: "Entraînement immédiat, avant la lecture des annonces. Phrases 1 à 3 : le relatif est sujet (qui) ; 4 à 6 : il est objet (que) — le français change de mot, le néerlandais non. Phrase 4 : « moet tekenen » (modal + infinitif) : le verbe conjugué « moet » précède l’infinitif en fin de subordonnée.",
  });

  // ================================================================ 9 lire : les trois zoekertjes
  d.section('Lire');
  {
    const s = page({ title: '4 Lezen — Drie zoekertjes onder de loep', tag: 'COUCHE 1', page: 'Livret p. 8–9',
      notes: "Lecture silencieuse (5 min), puis questions 1, 3 et 4 (diapo suivante), puis la question 2 (les relatives). Le vocabulaire est celui de la séance 1 (huren / kopen, slpk., verdieping). « Te koop » = à vendre ; « te huur » = à louer ; « vrij vanaf » = libre à partir de ; « geen lift » = sans ascenseur ; « Vraagprijs » = prix demandé ; « instapklaar » = prêt à emménager ; « op te frissen » = à rafraîchir." });
    T(s, 'Seul·e · 5 min. Pour chaque annonce : **à vendre ou à louer ?** · **le prix ?** · **combien de chambres ?**', 0.6, 1.62, 12.13, 0.4, { size: 16, italic: true, color: 'accent5' });
    const A = [['A · TE KOOP', 'Sint-Gillis', 'accent1', 'Rijhuis (150 m²) dat volledig gerenoveerd is. 3 slpk., woonkamer met open keuken, stadstuin die op het zuiden ligt. EPC: B. Instapklaar.', 'Vraagprijs € 425.000'],
      ['B · TE HUUR', 'Elsene', 'accent3', 'Licht appartement op de derde verdieping (geen lift). 2 slpk., badkamer die vernieuwd werd in 2024, kelder. Vrij vanaf 1 september.', '€ 1.250/maand + € 150'],
      ['C · TE KOOP', 'Vorst', 'accent1', 'Op te frissen appartement dat veel potentieel heeft. 1 slpk., terras van 8 m². Ideaal voor een investeerder die aan verhuren denkt.', 'Vraagprijs € 189.000']];
    const cw = (12.13 - 2 * 0.3) / 3;
    A.forEach(([h, where, c, txt, price], i) => {
      const x = 0.6 + i * (cw + 0.3);
      card(s, x, 2.2, cw, 4.65, h, c, { icon: 'FaHome', right: where });
      T(s, txt, x + 0.25, 2.95, cw - 0.5, 3.05, { size: 21, valign: 'top' });
      priceTag(s, x + 0.25, 6.15, cw - 0.5, price, 'tx2');
    });
  }

  // ================================================================ 10-11 comprendre
  d.exercise({
    title: '4 Questions 1, 3 et 4 — comprendre les annonces', tag: 'COUCHE 1', page: 'Livret p. 9–10',
    instr: 'Par deux · 6 min. Répondez en vous appuyant sur les annonces A, B et C.',
    gap: 8, qGap: 18, number: false, sideW: 3.9,
    aside: { label: 'LES TROIS ANNONCES', color: 'accent5', icon: 'FaHome', lines: ['**A** · à vendre · € 425.000 · 3 slpk. · Sint-Gillis', '**B** · à louer · € 1.250/maand · 2 slpk. · Elsene', '**C** · à vendre · € 189.000 · 1 slpk. · Vorst'] },
    items: [
      { q: '**1.** Welk zoekertje past bij mevrouw Claes ? Waarom ?', a: 'Comparez avec sa **fiche d’appel** (séance 1, ex. 3) : huren ou kopen ? budget ? nombre de slpk. ?' },
      { q: '**3.** Décodez : **slpk.** · **EPC** · **instapklaar**', a: '**slaapkamers** (chambres) · **energieprestatiecertificaat** (certificat PEB) · **prêt à emménager**' },
      { q: '**4.** Quel bien est « à rafraîchir » ? Quel mot l’indique ?', a: 'Zoekertje **C** : **op te frissen**.' },
    ],
    notes: "Question 1 : la réponse dépend du message de mevrouw Claes (transcription n° 1 de l’annexe, non reproduite dans le livret) : comparer sa fiche d’appel avec les trois annonces (huren ou kopen, budget, nombre de slaapkamers). Faire justifier avec les chiffres. Question 3 : « EPC » = Energieprestatiecertificaat (en Région bruxelloise on dit aussi PEB).",
  });

  // ================================================================ 12-13 repérer les relatives
  d.table({
    title: '4 Question 2 — Les cinq relatives des annonces', tag: 'COUCHE 2', page: 'Livret p. 9',
    intro: 'Par deux · 5 min. Retrouvez les **cinq relatives** : **die** ou **dat** — et **pourquoi** ?',
    headers: ['', 'EXTRAIT DE L’ANNONCE', 'POURQUOI ?'],
    colW: [0.7, 6.4, 5.03], align: ['center', 'left', 'left'], boldCol: 0,
    rows: [
      ['A', 'Rijhuis (150 m²) [[dat]] volledig gerenoveerd is.', '[[het rijhuis : het, singulier]]'],
      ['A', 'Stadstuin [[die]] op het zuiden ligt.', '[[de stadstuin : de]]'],
      ['B', 'Badkamer [[die]] vernieuwd werd in 2024.', '[[de badkamer : de]]'],
      ['C', 'Op te frissen appartement [[dat]] veel potentieel heeft.', '[[het appartement : het, singulier]]'],
      ['C', 'Ideaal voor een investeerder [[die]] aan verhuren denkt.', '[[de investeerder : de]]'],
    ],
    foot: 'Dans chaque relative, entourez le **verbe** : il est **à la fin** (is · ligt · werd · heeft · denkt).',
    notes: "Corrigé des cinq relatives : A (2), B (1), C (2). « Rijhuis … dat volledig gerenoveerd is » et « Op te frissen appartement dat veel potentieel heeft » : mots het au singulier → dat. Les trois autres sont des mots de → die. « werd » (imparfait de worden) est le verbe conjugué final après le participe « vernieuwd » ; le groupe « in 2024 » peut suivre le verbe.",
  });

  // ================================================================ 14-15 combiner
  d.exercise({
    title: '5 Combineer — Van fiche naar zin', tag: 'COUCHE 2', page: 'Livret p. 10',
    instr: 'Seul·e · 8 min. Fusionnez les deux phrases avec une **relative** : le verbe part à la **fin** !',
    gap: 6, qGap: 16,
    items: [
      { q: 'Wij verkopen een rijhuis. + Het rijhuis heeft drie slaapkamers.', a: 'Wij verkopen een rijhuis **dat** drie slaapkamers heeft.' },
      { q: 'Het appartement heeft een terras. + Het terras ligt op het zuiden.', a: 'Het appartement heeft een terras **dat** op het zuiden ligt.' },
      { q: 'Dat is de eigenaar. + De eigenaar heeft ons gisteren gebeld.', a: 'Dat is de eigenaar **die** ons gisteren heeft gebeld.' },
      { q: 'Ik zoek klanten. + De klanten willen investeren.', a: 'Ik zoek klanten **die** willen investeren.' },
    ],
    sideW: 3.9,
    expect: ['Le pronom **remplace** le nom répété.', '**het** rijhuis, **het** terras → **dat**', '**de** eigenaar, klanten (pluriel) → **die**', 'Le verbe conjugué en **dernière** position.'],
    traps: ['Le pronom remplace le **2e nom** : het rijhuis → **dat** ; de eigenaar → **die** ; klanten (pluriel) → **die**.', 'Le verbe conjugué est en **dernière** position.', '3 : //die ons gisteren gebeld heeft// est aussi correct.'],
    notes: "Corrigé. Phrase 3 : deux ordres possibles dans la subordonnée : « heeft gebeld » ou « gebeld heeft ». Phrase 4 : « klanten » est un pluriel → die. Faire justifier chaque choix avec l’article du mot (het rijhuis, het terras, de eigenaar, de klanten).",
  });

  // ================================================================ 16 écrire : la TAAK 2
  d.section('Écrire');
  {
    const s = page({ title: 'TAAK 2 — Schrijf het zoekertje', tag: 'ÉCRIT', page: 'Livret p. 10',
      notes: "Taak 2 (production écrite, 15 min). Les étudiants reçoivent la fiche technique. Critères de réussite : 60 à 80 mots, trois relatives correctes (die / dat + verbe à la fin), deux abréviations (slpk., EPC, enz.), titre et prix. Relecture croisée en binôme avec les quatre critères (chacun souligne les relatives de l’autre et vérifie la place du verbe). Le modèle (diapo suivante) n’est montré qu’après la relecture." });
    T(s, 'Seul·e · 15 min · **60 à 80 mots**, dans le style des zoekertjes A à C.', 0.6, 1.62, 12.13, 0.4, { size: 16, italic: true, color: 'accent5' });
    card(s, 0.6, 2.2, 4.1, 4.65, 'FICHE TECHNIQUE', 'accent1', { icon: 'FaClipboardList' });
    T(s, ['//rijhuis · Sint-Gillis//', '//150 m² · 3 slpk.//', '//gerenoveerd in 2025//', '//stadstuin (zuiden)//', '//open keuken//', '//EPC B//', '//€ 425.000 · vrij bij akte//'], 0.85, 2.95, 3.65, 3.8, { size: 17, valign: 'top', bullet: true, gap: 4 });
    card(s, 4.95, 2.2, 4.55, 4.65, 'VOTRE ANNONCE', 'tx2', { icon: 'FaPenNib' });
    [['1', '**Titre** : //TE KOOP — Sint-Gillis · rijhuis…//'], ['2', 'au moins **3 relatives** (^^die^^ / %%dat%%)'], ['3', '**2 abréviations** du métier (slpk., EPC…)'], ['4', '**prix** et disponibilité']].forEach(([n, t], i) => {
      const y = 2.95 + i * 0.78;
      s.addShape(S.OVAL, { x: 5.2, y: y + 0.08, w: 0.46, h: 0.46, fill: { color: 'tx2' } });
      T(s, n, 5.2, y + 0.08, 0.46, 0.46, { size: 15, bold: true, color: 'bg1', align: 'center' });
      T(s, t, 5.8, y, 3.55, 0.62, { size: 16 });
    });
    T(s, '!!Interdit!! : les phrases courtes juxtaposées du palier 1. **Reliez !**', 5.2, 6.12, 4.15, 0.6, { size: 14.5 });
    d.img(s, 'p5_10_5', 9.75, 2.2, 2.98, 4.65, { valign: 'top', alt: 'Le rijhuis de Sint-Gillis' });
  }

  // ================================================================ 17 le modèle annoté
  {
    const s = page({ title: 'TAAK 2 — Un zoekertje réussi (modèle)', tag: 'ÉCRIT', page: 'Livret p. 10',
      notes: "Montrer le modèle après la relecture croisée (critères de la diapo précédente). Modèle de ≈ 65 mots (titre compris) avec cinq relatives : het rijhuis dat… (mot het), de keuken die…, de stadstuin die…, de woning die…, het gezin dat… (mot het). « die aansluit op de woonkamer » : le groupe « op de woonkamer » peut suivre le verbe. Les productions des étudiants peuvent être plus courtes (3 relatives suffisent)." });
    box(s, 0.6, 1.62, 7.55, 5.26, { line: BORDER, shadow: true });
    s.addShape(S.ROUNDED_RECTANGLE, { x: 0.6, y: 1.62, w: 7.55, h: 0.62, rectRadius: 0.1, fill: { color: 'accent1' } });
    s.addShape(S.RECTANGLE, { x: 0.6, y: 2.04, w: 7.55, h: 0.2, fill: { color: 'accent1' }, line: { color: HEX.accent1, width: 0 } });
    T(s, '**TE KOOP — Sint-Gillis · Rijhuis 150 m² · 3 slpk. · EPC B**', 0.85, 1.62, 7.1, 0.62, { size: 16, color: 'bg1' });
    T(s, ['Rijhuis %%dat%% in 2025 volledig gerenoveerd !!werd!!. Het heeft drie slaapkamers, een open keuken ^^die^^ !!aansluit!! op de woonkamer en een stadstuin ^^die^^ op het zuiden !!ligt!!. Een instapklare woning ^^die^^ energiezuinig !!is!!, ideaal voor een gezin %%dat%% rust en ruimte !!zoekt!!.', '**Vraagprijs: € 425.000.** Vrij bij akte. Bezichtigen kan op afspraak.'], 0.9, 2.45, 7.0, 3.7, { size: 21, valign: 'top', gap: 14 });
    T(s, '^^die^^ = mot //de// · %%dat%% = mot //het// · !!verbe!! à la fin', 0.9, 6.25, 7.0, 0.45, { size: 14, color: 'accent5' });
    card(s, 8.45, 1.62, 4.28, 5.26, 'LES 5 RELATIVES', 'accent3', { icon: 'FaSearch', hs: 14 });
    T(s, 'Le nom décide du relatif :', 8.7, 2.32, 3.9, 0.4, { size: 14, italic: true, color: 'accent5' });
    [['%%het%% rijhuis', '%%dat%%', 'werd'], ['^^de^^ keuken', '^^die^^', 'aansluit'], ['^^de^^ stadstuin', '^^die^^', 'ligt'], ['^^de^^ woning', '^^die^^', 'is'], ['%%het%% gezin', '%%dat%%', 'zoekt']].forEach(([n, r, v], i) => {
      const y = 2.85 + i * 0.66;
      box(s, 8.7, y, 3.78, 0.54, { fill: i % 2 ? 'bg1' : 'bg2', r: 0.06 });
      T(s, `//${n}//`, 8.85, y, 1.85, 0.54, { size: 17 });
      T(s, `→ //${r}// … !!${v}!!`, 10.65, y, 1.8, 0.54, { size: 17 });
    });
  }

  // ================================================================ 18 transférer : un vélo pour Stef
  d.section('Dagelijks leven');
  {
    const s = page({ title: 'D2 Dagelijks leven — Drie advertenties op 2dehands', tag: 'COUCHE 1', page: 'Livret p. 10a',
      notes: "Même technique que les zoekertjes, autre marché : l’occasion. « Z.g.a.n. » = zo goed als nieuw. « Vorst » = Forest (Stef habite à Forest). Lecture silencieuse (4 min), puis les questions 1 à 3." });
    d.img(s, 'u02_fietsen', 0.6, 1.62, 3.3, 2.75, { valign: 'top', alt: 'Trois vélos d’occasion' });
    box(s, 0.6, 4.6, 3.3, 2.28, { fill: 'accent2', tr: 90, line: 'accent2', lw: 1.25 });
    disc(s, 'FaUserGraduate', 'accent2', 0.8, 4.78, 0.56);
    T(s, '**Stef cherche un vélo**', 1.5, 4.78, 2.3, 0.56, { size: 16, color: 'accent2' });
    T(s, ['budget : **€ 200** maximum', 'habite à **Vorst** (Forest)', 'va au bureau à vélo'], 0.85, 5.45, 2.95, 1.35, { size: 15, valign: 'top', bullet: true, gap: 3 });
    const A = [['A · TE KOOP', 'accent1', 'Stadsfiets, z.g.a.n. Herenfiets met 7 versnellingen en een slot dat erbij hoort. Ideaal voor iemand die dagelijks naar het werk fietst. Ophalen in Vorst.', '€ 180 · bespreekbaar'],
      ['B · TE KOOP', 'accent1', 'Racefiets in carbon, twee jaar oud. Voor sportievelingen die snelheid zoeken. Verzending mogelijk.', '€ 650 · vaste prijs'],
      ['C · GRATIS', 'accent3', 'Oude kinderfiets die een nieuwe band nodig heeft. Ideaal voor ouders die graag knutselen. Ophalen in Anderlecht, enkel dit weekend.', 'gratis']];
    const cw = (12.73 - 4.2 - 2 * 0.25) / 3;
    A.forEach(([h, c, txt, price], i) => {
      const x = 4.2 + i * (cw + 0.25);
      card(s, x, 1.62, cw, 5.26, h, c, { hs: 14 });
      T(s, txt, x + 0.2, 2.4, cw - 0.4, 3.7, { size: 17.5, valign: 'top' });
      priceTag(s, x + 0.2, 6.2, cw - 0.4, price, 'tx2');
    });
  }

  // ================================================================ 19-20 lire les petites annonces
  d.exercise({
    title: 'D2 Questions 1 à 3 — lire les petites annonces', tag: 'COUCHE 2', page: 'Livret p. 10a',
    instr: 'Par deux · 8 min. Répondez, puis soulignez les relatives.',
    gap: 8, qGap: 18, number: false, sideW: 3.9,
    aside: { label: 'STEF', color: 'accent2', icon: 'FaUserGraduate', lines: ['budget : **€ 200** max', 'habite à **Vorst**', 'va au bureau à vélo'] },
    items: [
      { q: '**1.** Welke advertentie past bij Stef ? Waarom ?', a: '**A** : stadsfiets à € 180 (≤ € 200), ophalen in Vorst. B coûte € 650 ; C est un vélo d’enfant.' },
      { q: '**2.** Soulignez les **cinq relatives** : die ou dat ?', a: '**dat** erbij hoort (het slot) · **die** dagelijks… fietst (iemand) · **die** snelheid zoeken (pluriel) · **die** een nieuwe band… (de kinderfiets) · **die** graag knutselen (pluriel)' },
      { q: '**3.** Décodez : **z.g.a.n.** · **ophalen** · **prijs bespreekbaar ≠ vaste prijs**', a: '**zo goed als nieuw** (comme neuf) · **venir chercher sur place** · **négociable ≠ fixe**' },
    ],
    notes: "Corrigé. Question 1 : budget € 200 maximum, habite à Forest : l’annonce A (€ 180, prijs bespreekbaar, Vorst). Question 2 : un seul « dat » (het slot) ; « iemand » est suivi de « die » ; sportievelingen et ouders sont des pluriels. Question 3 : « ophalen » = venir chercher (l’objet est sur place) ; « prijs bespreekbaar » = on peut négocier (voir D5 Afdingen).",
  });

  // ================================================================ 21 à vous : votre petite annonce
  d.exercise({
    title: 'D2 Question 4 — À vous : votre annonce', tag: 'ÉCRIT', page: 'Livret p. 10a', mode: 'show',
    instr: 'Seul·e · 7 min. Vous vendez un objet (meubel, toestel, kleren…) : une annonce en **3 phrases**, avec **2 relatives** et **une abréviation**.',
    number: false, gap: 8, img: 'u02_lamp', imgH: 3.1, sideW: 3.9,
    items: [
      { h: 'Modèle (à adapter)' },
      { t: '**TE KOOP** — Bureaulamp, z.g.a.n., ^^die^^ nog perfect werkt. Ideaal voor iemand ^^die^^ thuis werkt. Ophalen in Elsene: € 15, prijs bespreekbaar.' },
      { h: 'Autre exemple' },
      { t: '**GRATIS** — Oude fauteuil ^^die^^ nog stevig is. Ideaal voor een student ^^die^^ een goedkope stoel zoekt. Ophalen in Vorst, enkel dit weekend.' },
    ],
    expect: ['**3 phrases** (le titre compte)', '**2 relatives** : die / dat + verbe à la fin', '**1 abréviation** : z.g.a.n.…'],
    notes: "Production libre : pas de correction unique. Vérifier die / dat d’après l’article du nom (de bureaulamp → die ; de student → die ; het bureau → dat) et le verbe final. Les annonces peuvent être échangées en binôme : l’autre souligne les relatives et vérifie les critères de la TAAK 2.",
  });

  // ================================================================ 22 bilan
  d.closing({
    title: 'Bilan de la séance',
    cliff: 'Séance 3 : **met wie**, **waarover**, **eraan** — les relatives avec préposition et la visite guidée (TAAK 3).',
    homework: ['Terminer la **TAAK 2** (60 à 80 mots) et la relire avec les **4 critères**.', 'Terminer **D2 question 4** : votre petite annonce.', 'Apprendre : **de / pluriel → die · het singulier → dat**.', 'Relire le **dialogue** p. 2 : repérer trois relatives.'],
    exit: 'Complétez : //Het appartement ___ te huur staat…// · //De klanten ___ morgen komen…// (die ou dat ?)',
    notes: "Ticket de sortie : « dat » puis « die » ; faire justifier par l’article. Annoncer la séance 3 : les relatives avec préposition (de klant met wie…), waar + préposition (waaraan, waarover) et les adverbes pronominaux (erop, eraan).",
  });

  // ================================================================ 23 l'image finale de l'enseignant
  d.keep('vragen').addNotes('Questions, retour sur la séance.');
};
