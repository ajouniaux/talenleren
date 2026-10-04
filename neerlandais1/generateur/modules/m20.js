// Module 20 — Van wie is dit? · Possessifs et démonstratifs
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 20, slug: 'Van_wie_is_dit', title: 'Van wie is dit? — Possessifs et démonstratifs', short: 'Van wie is dit?', template: 'module_20_bezit_en_aanwijzen.md' };

const MASC = 'accent2'; // à lui = bleu
const FEM = 'accent4'; // à elle = framboise
const DE = 'tx2'; // mot de = bleu nuit (M5)
const HET = 'accent1'; // mot het = orange (M5)

function build(d) {
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const trapRows = (s, R, o = {}) => {
    d.rect(s, 0.6, 1.7, 12.13, o.h || 4.35, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    R.forEach(([il, fr, ko, ok], i) => {
      const y = 2.35 + i * (o.step || 1.2);
      if (il) d.ill(s, il, 0.85, y + 0.1, 0.75, 0.75);
      d.t(s, fr, 1.75, y, 3.55, 0.95, { size: 17, valign: 'middle' });
      if (ko) d.t(s, `✗ //{{${ko}}}//`, 5.3, y, 2.9, 0.95, { size: 15, color: 'accent6', valign: 'middle' });
      d.line(s, 8.25, y + 0.47, 8.6, y + 0.47, { color: 'accent3', lw: 2 });
      d.rect(s, 8.65, y + 0.08, 3.9, 0.8, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.8, y + 0.08, 3.7, 0.8, { size: 18, valign: 'middle', fit: true, max: 18, min: 13 });
    });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Van wie is dit?', sub: 'Possessifs et démonstratifs', line: 'Is dit jouw pen? — Nee, die is van Sofie.',
    visual: (s) => {
      d.ill(s, 'package', 7.4, 1.2, 2.6, 2.6);
      d.ill(s, 'closed-umbrella', 7.2, 0.85, 1.0, 1.0);
      d.ill(s, 'key', 8.8, 0.8, 0.8, 0.8);
      d.ill(s, 'glasses', 9.6, 1.25, 0.8, 0.8);
      d.rect(s, 10.5, 2.0, 2.2, 0.85, { fill: 'FFFFFF', line: 'accent1', lw: 3, radius: 0.1, shadow: true });
      d.t(s, '**Van wie?**', 10.5, 2.0, 2.2, 0.85, { size: 24, color: 'accent1', align: 'center', valign: 'middle', head: true });
      d.rect(s, 6.95, 4.15, 5.8, 1.1, { fill: 'FFFFFF', line: null, radius: 0.15, shadow: true });
      d.t(s, 'Is **##dit##** **^^jouw^^** pen?', 6.95, 4.15, 5.8, 1.1, { size: 30, align: 'center', valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaKey', h: 'Posséder', t: 'Je dis à qui est une chose : //mijn laptop, haar jas, ons kantoor//.', color: MASC },
      { icon: 'FaHandPointRight', h: 'Montrer', t: 'Je montre : //deze stoel, dit bureau, die collega’s//.', color: HET },
      { icon: 'FaQuestion', h: 'Demander', t: 'Je demande : //Van wie is dit? — Van mij!//', color: 'purple' },
    ],
    band: 'Au bureau, on parle sans cesse de « mon dossier, votre rendez-vous, cette salle » : de tout petits mots, très fréquents.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — les objets trouvés' });
    d.rect(s, 0.6, 1.7, 3.9, 5.15, { fill: 'FFFDF5', line: 'C9B98A', lw: 1.25, shadow: true });
    d.t(s, 'GEVONDEN VOORWERPEN', 0.6, 1.8, 3.9, 0.35, { size: 13, bold: true, color: 'accent5', align: 'center', cs: 1 });
    d.ill(s, 'package', 1.15, 3.2, 2.8, 2.8);
    [['closed-umbrella', 0.9, 2.3], ['key', 2.2, 2.35], ['glasses', 3.25, 2.4], ['scarf', 1.6, 2.9]].forEach(([il, x, y]) => d.ill(s, il, x, y, 0.85, 0.85));
    const L = [['Sofie', 'Van wie is **##deze##** paraplu?', 'accent4'], ['Karim', '**##Die##** is van An.', 'accent2'], ['Sofie', 'En zijn **##dit##** **^^jouw^^** sleutels?', 'accent4'], ['Karim', 'Ja! Dat zijn **^^mijn^^** sleutels. Dank je!', 'accent2'], ['Sofie', 'En **##die##** bril? Is dat **^^jouw^^** bril?', 'accent4'], ['Karim', 'Nee, dat is de bril van meneer Maes.', 'accent2']];
    L.forEach(([who, t, c], i) => {
      const y = 1.7 + i * 0.86; const x = who === 'Sofie' ? 4.8 : 5.6;
      d.bubble(s, `**${who}** : //${t}//`, x, y, 7.1, 0.74, c, { size: 17 });
    });
  }

  // ---------------------------------------------------------------- 4 les possessifs
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Les possessifs' });
    const R = [['ik', 'mijn', 'm’n', 'mon, ma, mes', 'tx2'], ['jij / je', 'jouw', 'je', 'ton, ta, tes', 'tx2'], ['u', 'uw', '', 'votre (politesse)', 'purple'], ['hij', 'zijn', 'z’n', 'son, sa, ses (à lui)', MASC], ['zij / ze', 'haar', 'd’r', 'son, sa, ses (à elle)', FEM], ['wij / we', 'ons / onze', '', 'notre, nos', 'tx2'], ['jullie', 'jullie', 'je', 'votre, vos (plusieurs)', 'tx2'], ['zij / ze', 'hun', '', 'leur, leurs', 'tx2']];
    const rh = 0.6;
    d.rect(s, 0.6, 1.7, 8.0, 0.4, { fill: 'tx2', line: null, radius: 0.04 });
    [['pronom', 0.75, 1.6], ['possessif', 2.4, 2.4], ['oral', 4.75, 1.0], ['français', 5.85, 2.7]].forEach(([h, x, w]) => d.t(s, h, x, 1.7, w, 0.4, { size: 13, bold: true, color: 'bg1', valign: 'middle' }));
    R.forEach(([p, pos, sh, fr, c], i) => {
      const y = 2.15 + i * rh;
      d.rect(s, 0.6, y, 8.0, rh - 0.05, { fill: i % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.5, radius: 0.02 });
      d.t(s, `//${p}//`, 0.75, y, 1.6, rh - 0.05, { size: 17, color: 'accent5', valign: 'middle' });
      d.t(s, `**${pos}**`, 2.4, y, 2.4, rh - 0.05, { size: 22, color: c, valign: 'middle' });
      d.t(s, sh ? `//${sh}//` : '', 4.75, y, 1.0, rh - 0.05, { size: 15, color: GHOST, valign: 'middle' });
      d.t(s, fr, 5.85, y, 2.7, rh - 0.05, { size: 15, valign: 'middle' });
    });
    d.card(s, 8.9, 1.7, 3.83, 4.8, { icon: 'FaLightbulb', head: 'Une seule forme', color: 'accent1', body: ['//**mijn** laptop · **mijn** tas · **mijn** boeken//', 'FR : mon / ma / mes', 'Seul //ons / onze// change (diapo 6).', 'Formes courtes : l’oral (diapo 8).'], size: 16, gap: 10 });
  }

  // ---------------------------------------------------------------- 5 piège zijn / haar
  {
    const s = d.page({ g: 5, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : son / sa — c’est le possesseur qui décide' });
    trapRows(s, [['woman-office-worker', '« Sofie et **son** frère »', 'Sofie en zijn broer', 'Sofie en **%%haar%%** broer'], ['man-office-worker', '« Karim et **sa** femme »', 'Karim en haar vrouw', 'Karim en **^^zijn^^** vrouw'], ['woman-office-worker', '« Sofie et **ses** collègues »', null, 'Sofie en **%%haar%%** collega’s']], { h: 4.35, step: 1.25 });
    band(s, 'Question-réflexe : **à lui** → //**zijn**// · **à elle** → //**haar**// — l’objet (frère, femme) ne compte pas !', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 6 ons / onze
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'ons ou onze ?' });
    [['ons', HET, 'HET', '+ mot //het// au singulier', ['ons kantoor', 'ons team', 'ons bedrijf'], 0.6], ['onze', DE, 'DE + pluriel', '+ mot //de// ou pluriel', ['onze klant', 'onze directeur', 'onze collega’s', 'onze kantoren'], 6.81]].forEach(([w, c, card, rule, ex, x]) => {
      d.rect(s, x, 1.7, 5.92, 4.2, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, x + 0.25, 1.95, 1.6, 1.05, { fill: c, line: null, radius: 0.12 });
      d.t(s, card, x + 0.25, 1.95, 1.6, 1.05, { size: card.length > 4 ? 15 : 24, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, '→', x + 1.9, 1.95, 0.6, 1.05, { size: 30, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `**${w}**`, x + 2.5, 1.95, 3.2, 1.05, { size: 40, color: c, valign: 'middle', head: true });
      d.t(s, rule, x + 0.3, 3.15, 5.4, 0.45, { size: 16, italic: true, color: 'accent5' });
      d.t(s, ex.map((e) => `//${e}//`), x + 0.3, 3.65, 5.4, 2.15, { size: 21, gap: 6, valign: 'top' });
    });
    band(s, 'Le seul possessif qui change. Même logique que l’adjectif (M21) : //ons// + //het// au singulier.', 6.15, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 7 piège votre / leur
  {
    const s = d.page({ g: 7, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : votre, leur' });
    trapRows(s, [['man-office-worker', '« Monsieur, **votre** café ! » (une personne, politesse)', null, 'Meneer, **@@uw@@** koffie!'], ['busts-in-silhouette', '« Les amis, **votre** café ! » (plusieurs personnes)', null, 'Jongens, **@@jullie@@** koffie!'], ['automobile', '« Ils cherchent **leur** voiture. »', 'Ze zoeken zijn auto.', 'Ze zoeken **@@hun@@** auto.']], { h: 4.35, step: 1.25 });
    band(s, '//uw// = vous (une personne, M8) · //jullie// = vous (plusieurs) · //hun// = leur, jamais sujet', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 8 formes courtes
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Les formes courtes de l’oral' });
    d.rect(s, 0.6, 1.7, 6.6, 5.15, { fill: 'EEF3F8', line: BORDER, radius: 0.2 });
    d.ill(s, 'mobile-phone', 0.8, 1.85, 0.6, 0.6);
    d.t(s, 'Berichten', 1.5, 1.85, 4, 0.6, { size: 16, bold: true, color: 'tx2', valign: 'middle' });
    ['Ik bel **^^m’n^^** moeder.', 'Waar is **^^je^^** jas?', 'Hij zoekt **^^z’n^^** sleutels.', 'Ze komt met **^^d’r^^** man.'].forEach((t, i) => {
      const x = i % 2 ? 2.3 : 0.85;
      d.rect(s, x, 2.65 + i * 1.02, 4.6, 0.82, { fill: i % 2 ? 'DCF2E3' : 'FFFFFF', line: BORDER, radius: 0.25 });
      d.t(s, `//${t}//`, x + 0.2, 2.65 + i * 1.02, 4.3, 0.82, { size: 19, valign: 'middle' });
    });
    d.card(s, 7.5, 1.7, 5.23, 2.4, { icon: 'FaVolumeUp', head: 'Pour insister', color: 'accent1', body: ['la forme pleine, accentuée :', '//Is dat **jóuw** pen of **míjn** pen?//'], size: 17, gap: 6 });
    d.card(s, 7.5, 4.35, 5.23, 2.5, { icon: 'FaEnvelope', head: 'À l’écrit formel', color: 'tx2', body: ['Toujours la forme pleine (M10) :', '//mijn, zijn, haar//', 'Formes courtes : à reconnaître.'], size: 17, gap: 6 });
  }

  // ---------------------------------------------------------------- 9 démonstratifs
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'Les démonstratifs : deze, dit, die, dat' });
    d.t(s, 'proche', 3.0, 1.65, 4.6, 0.45, { size: 16, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
    d.t(s, 'loin', 7.8, 1.65, 4.6, 0.45, { size: 16, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
    d.icon(s, 'FaHandPaper', 'accent3', 3.6, 1.7, 0.36);
    d.icon(s, 'FaHandPointRight', 'accent6', 8.6, 1.7, 0.36);
    const R = [['mot DE + pluriel', DE, [['deze', 'deze stoel · deze mappen', 'chair'], ['die', 'die stoel · die mappen', 'chair']]], ['mot HET', HET, [['dit', 'dit bureau', 'desktop-computer'], ['dat', 'dat bureau', 'desktop-computer']]]];
    R.forEach(([lab, c, cells], i) => {
      const y = 2.2 + i * 1.95;
      d.rect(s, 0.6, y, 2.25, 1.8, { fill: c, line: null, radius: 0.08 });
      d.t(s, lab, 0.65, y, 2.15, 1.8, { size: 16, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      cells.forEach(([w, ex, il], j) => {
        const x = 3.0 + j * 4.8;
        d.rect(s, x, y, 4.6, 1.8, { fill: 'bg1', line: c, lw: 2, shadow: true });
        d.ill(s, il, x + (j ? 3.6 : 0.2), y + 0.45, j ? 0.6 : 0.95, j ? 0.6 : 0.95);
        d.t(s, `**${w}**`, x + (j ? 0.3 : 1.3), y + 0.1, 2.8, 0.9, { size: 34, color: c, valign: 'middle', head: true });
        d.t(s, `//${ex}//`, x + (j ? 0.3 : 1.3), y + 1.0, 3.2, 0.65, { size: 17, valign: 'middle' });
      });
    });
    band(s, 'La distance est **dans le mot** (FR : « -ci / -là ») · pluriel : toujours //deze / die//', 6.15, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 10 piège ce / cette / ces
  {
    const s = d.page({ g: 10, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : ce, cette, ces' });
    trapRows(s, [['house', '« **cette** maison »', 'deze huis', '**##dit##** huis (//het// huis)'], ['office-building', '« **ce** bâtiment »', null, '**##dit##** gebouw (//het//)'], ['pen', '« **ce** stylo »', null, '**@@deze@@** pen (//de//)'], ['desktop-computer', '« **ces** bureaux »', null, '**@@deze@@** bureaus (pluriel)']], { h: 4.4, step: 0.98 });
    band(s, 'Masculin ou féminin en français ne dit rien : //de// → //deze//, //het// → //dit//, pluriel → //deze//.', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 11 dit is / dat zijn
  {
    const s = d.page({ g: 11, tag: 'GRAMMAIRE', title: 'Dit is… · Dat zijn… : présenter' });
    d.rect(s, 0.6, 1.7, 6.5, 3.6, { fill: 'FFFFFF', line: 'tx2', lw: 3, radius: 0.04, shadow: true });
    d.rect(s, 0.8, 1.9, 6.1, 3.2, { fill: 'EAF1F8', line: null, radius: 0 });
    [['woman-office-worker', 1.0], ['man-office-worker', 2.5], ['girl', 4.0], ['boy', 5.4]].forEach(([il, x]) => d.ill(s, il, x, 2.6, 1.35, 1.35));
    d.t(s, ['//**Dit is** mijn collega Sofie.//', '//**Dat is** onze directeur.//'], 7.4, 1.7, 5.33, 1.3, { size: 21, gap: 6, valign: 'middle' });
    d.t(s, ['//**Dit zijn** mijn kinderen.//', '//**Dat zijn** onze klanten.//'], 7.4, 3.1, 5.33, 1.3, { size: 21, gap: 6, valign: 'middle' });
    d.chip(s, 'verbe au pluriel !', 7.4, 4.45, 'accent6', 0.36, 13);
    d.rect(s, 0.6, 5.5, 12.13, 1.35, { fill: 'bg2', line: BORDER });
    d.t(s, ['//dit / dat// ne changent pas, même pour une personne ou un pluriel : c’est le **verbe** qui s’accorde.', 'Aperçu : //Ken je Sofie? — Ja, **die** ken ik.// (= celle-là)'], 0.85, 5.5, 11.7, 1.35, { size: 17, gap: 6, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 12 van wie is dit
  {
    const s = d.page({ g: 12, tag: 'GRAMMAIRE', title: 'Van wie is dit? — van mij, van jou…' });
    d.rect(s, 0.6, 3.95, 6.4, 0.18, { fill: 'C9A27A', line: null, radius: 0 });
    [['key', 'van mij'], ['closed-umbrella', 'van haar'], ['glasses', 'van hem'], ['laptop', 'van ons']].forEach(([il, lab], i) => {
      const x = 0.75 + i * 1.6;
      d.ill(s, il, x, 2.7, 1.2, 1.2);
      d.chip(s, lab, x + 0.6 - (0.4 + lab.length * 0.118) / 2, 4.3, i === 1 ? FEM : i === 2 ? MASC : 'tx2', 0.36, 13);
    });
    d.bubble(s, '//Van wie is deze sleutel? — Die is **van mij**.//', 0.6, 1.7, 6.4, 0.85, 'accent2', { size: 19 });
    d.rect(s, 7.3, 1.7, 5.43, 3.1, { fill: 'bg2', line: BORDER });
    d.t(s, 'VAN + PRONOM', 7.5, 1.8, 4, 0.32, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, ['//van **mij** · van **jou** · van **u**//', '//van **hem** · van **haar**//', '//van **ons** · van **jullie** · van **hen**//'], 7.5, 2.2, 5.1, 2.5, { size: 21, gap: 10, valign: 'middle' });
    d.rect(s, 0.6, 5.1, 12.13, 1.75, { fill: 'accent5', tr: 90, line: 'accent5', lw: 1, dash: 'dash' });
    d.chip(s, '+ APERÇU', 0.85, 5.22, 'accent5', 0.34, 12);
    d.t(s, ['//Is dit jouw jas? — Ja, het is **de mijne**.// (le mien)', 'À l’oral, on entend aussi //van hun// (à la place de //van hen//).'], 0.85, 5.6, 11.7, 1.15, { size: 17, gap: 6, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : posséder, montrer, demander' });
    const C3 = [
      ['Posséder', 'FaKey', MASC, ['//mijn, jouw, uw, zijn, haar, ons / onze, jullie, hun//', 'à lui → //**zijn**// · à elle → //**haar**//', '//**ons**// + //het// ; sinon //**onze**//']],
      ['Montrer', 'FaHandPointRight', HET, ['//de// + pluriel → //**deze / die**//', '//het// → //**dit / dat**//', 'présenter : //Dit is… · Dat zijn…//']],
      ['Demander', 'FaQuestion', 'purple', ['//Van wie is dit?//', '//Van mij · van haar · van hen.//', '//Is dit jouw pen?//']],
    ];
    const w = (12.13 - 2 * 0.25) / 3;
    C3.forEach(([h, ic, c, body], i) => d.card(s, 0.6 + i * (w + 0.25), 1.7, w, 4.4, { icon: ic, head: h, color: c, body, size: 18, gap: 12 }));
    d.t(s, 'Ce schéma est la référence pour tous les exercices.', 0.6, 6.35, 12.13, 0.45, { size: 14, italic: true, color: 'accent5', align: 'center' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Le bon possessif', '★', 'FaKey'], ['ons ou onze ?', '★', 'FaBalanceScale'], ['deze, dit, die ou dat ?', '★★', 'FaHandPointRight'], ['Traduction piège', '★★', 'FaLanguage'],
    ['Le détective', '★★', 'FaSearch'], ['Les objets trouvés', '★', 'FaBoxOpen'], ['L’album photo', '★★★', 'FaImages'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 bon possessif
  const ex1 = ['Karim zoekt [[zijn]] sleutels.', 'Sofie belt [[haar]] moeder.', 'We vergaderen in [[onze]] vergaderzaal.', 'Meneer Maes, is dit [[uw]] jas?', 'Jongens, waar zijn [[jullie]] laptops?', 'De klanten wachten op [[hun]] facturen.', 'Ik neem [[mijn]] lunch mee.', 'Heb jij [[jouw]] badge?'];
  d.ex({ g: 15, title: 'Exercice 1 — Le bon possessif', stars: '★', instr: 'Complétez avec le bon possessif. À qui est-ce ?' }, (s, mode, top) => {
    d.list(s, ex1, mode, { y: top + 0.2, w: 12.13, h: 4.6, cols: 2, size: 21, gap: 24 });
    if (mode === 'a') d.t(s, 'n° 3 : //de// vergaderzaal → //onze// · n° 8 : aussi //je// (forme courte)', 0.6, 6.2, 12.13, 0.6, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  });

  // ---------------------------------------------------------------- 16 ex2 ons / onze
  const ex2 = [['kantoor', 'het', 0], ['team', 'het', 0], ['klant', 'de', 1], ['collega’s', 'mv.', 1], ['huis', 'het', 0], ['auto', 'de', 1], ['bedrijf', 'het', 0], ['directeur', 'de', 1], ['kinderen', 'mv.', 1], ['adres', 'het', 0]];
  d.ex({ g: 16, title: 'Exercice 2 — ons ou onze ?', stars: '★', instr: 'Classez les mots : ons ou onze ? Regardez l’article.' }, (s, mode, top) => {
    if (mode === 'q') ex2.forEach(([w, a], i) => {
      const x = 0.6 + (i % 5) * 2.47; const y = top + Math.floor(i / 5) * 0.75;
      d.word(s, `${w} °°(${a})°°`, x, y, 2.3, 0.62, 'accent5', { size: 17, lw: 1.25, shadow: true, bold: false });
    });
    const cy = mode === 'q' ? top + 1.75 : top + 0.1; const h = 6.88 - cy;
    [['ONS', HET, 0, 0.6], ['ONZE', DE, 1, 6.75]].forEach(([lab, c, k, x]) => {
      d.rect(s, x, cy, 5.98, h, { fill: c, tr: 90, line: c, lw: 2 });
      d.rect(s, x, cy, 5.98, 0.6, { fill: c, line: null, radius: 0.08 });
      d.t(s, lab, x, cy, 5.98, 0.6, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      if (mode === 'a') ex2.filter((e) => e[2] === k).forEach(([w], j) => {
        d.t(s, `//**${lab.toLowerCase()}** ${w}//`, x + 0.3 + (j % 2) * 2.8, cy + 0.85 + Math.floor(j / 2) * 0.85, 2.7, 0.7, { size: 22, align: 'center', valign: 'middle' });
      });
    });
  });

  // ---------------------------------------------------------------- 17 ex3 deze / dit / die / dat
  const ex3 = [[1, 'stoel', 'de', 'deze', 'chair'], [0, 'raam', 'het', 'dat', 'window'], [1, 'bureau', 'het', 'dit', 'desktop-computer'], [0, 'printer', 'de', 'die', 'printer'], [1, 'mappen', 'mv.', 'deze', 'file-folder'], [0, 'collega’s', 'mv.', 'die', 'busts-in-silhouette'], [1, 'boek', 'het', 'dit', 'green-book'], [0, 'gebouw', 'het', 'dat', 'office-building']];
  d.ex({ g: 17, title: 'Exercice 3 — deze, dit, die ou dat ?', stars: '★★', instr: 'La main = proche, le doigt = loin. Regardez aussi l’article.' }, (s, mode, top) => {
    const w = (12.13 - 3 * 0.2) / 4; const h = (6.88 - top - 0.2) / 2;
    ex3.forEach(([near, n, a, ans, il], i) => {
      const x = 0.6 + (i % 4) * (w + 0.2); const y = top + Math.floor(i / 4) * (h + 0.2);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: BORDER, shadow: true });
      d.num(s, i + 1, x + 0.12, y + 0.12, 0.4, 'tx2', 13);
      d.icon(s, near ? 'FaHandPaper' : 'FaHandPointRight', near ? 'accent3' : 'accent6', x + w - 0.55, y + 0.15, 0.38);
      d.ill(s, il, x + w / 2 - 0.55, y + 0.35, 1.1, 1.1);
      d.t(s, `//**[[${ans}]]** ${n}//`, x + 0.1, y + 1.55, w - 0.2, 0.6, { size: 20, align: 'center', valign: 'middle', mode });
      d.t(s, `(${a})`, x + 0.6, y + 0.12, 1.2, 0.4, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex4 traduction piège
  const ex4 = [[1, 'Sofie et son mari', 'Sofie en haar man'], [1, 'Karim et sa sœur', 'Karim en zijn zus'], [1, 'Cette maison est grande.', 'Dit huis is groot.'], [0, 'Ce sont mes collègues.', 'Dit zijn mijn collega’s.'], [1, 'Monsieur, votre café !', 'Meneer, uw koffie!'], [0, 'Ils cherchent leur voiture.', 'Ze zoeken hun auto.'], [0, 'Ce stylo est à moi.', 'Deze pen is van mij.'], [0, 'C’est notre entreprise.', 'Dit is ons bedrijf.']];
  d.ex({ g: 18, title: 'Exercice 4 — Traduction piège', stars: '★★', instr: 'Traduisez. Attention aux phrases marquées ⚠ !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 8;
    ex4.forEach(([warn, fr, nl], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.36) / 2, 0.36, 'accent5', 12);
      d.rect(s, 1.05, y + 0.04, 4.6, rh - 0.1, { fill: 'bg2', line: BORDER });
      d.t(s, fr, 1.2, y + 0.04, 4.0, rh - 0.1, { size: 17, valign: 'middle' });
      if (warn) d.t(s, '⚠', 5.2, y + 0.04, 0.4, rh - 0.1, { size: 15, color: 'accent6', valign: 'middle', align: 'center' });
      d.line(s, 5.75, y + rh / 2 - 0.02, 6.3, y + rh / 2 - 0.02, { color: 'accent1', lw: 2.5 });
      d.rect(s, 6.35, y + 0.04, 6.38, rh - 0.1, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**${nl}**//`, 6.5, y + 0.04, 6.1, rh - 0.1, { size: 18, color: 'accent3', valign: 'middle' });
      const alt = { 2: 'Dat', 3: 'Dat', 6: 'Die', 7: 'Dat' }[i];
      if (mode === 'a' && alt) d.t(s, `ou //${alt}…// (plus loin)`, 10.2, y + 0.04, 2.4, rh - 0.1, { size: 13, color: 'accent5', valign: 'middle', align: 'right' });
    });
  });

  // ---------------------------------------------------------------- 19 ex5 détective
  d.ex({ g: 19, title: 'Exercice 5 — Le détective', stars: '★★', instr: 'Sofie écrit à l’équipe. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Sofie Peeters · Aan: team · Onderwerp: teamdag', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = '//Hoi allemaal! Vrijdag is onze teamdag. An komt met {{zijn}}++ haar++ man en Karim komt met {{haar}}++ zijn++ vrouw. We vertrekken om 9 uur bij {{onze}}++ ons++ kantoor. {{Deze}}++ Dit++ programma zit in de bijlage. De collega’s van marketing komen ook, maar {{hun}}++ zij++ nemen de trein. Neem jullie badge mee! Groetjes, Sofie//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 21, mode, ls: 1.25, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //onze teamdag// (//de//) · //Neem jullie badge mee//.', 9.9, top + 3.05, 2.83, 1.8, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 20 ex6 objets trouvés
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Les objets trouvés', stars: '★' });
    d.ill(s, 'package', 0.7, 2.2, 3.4, 3.4);
    [['key', 0.8, 1.75], ['pen', 2.0, 1.7], ['glasses', 3.1, 1.8], ['mobile-phone', 3.3, 3.0], ['scarf', 0.6, 3.1]].forEach(([il, x, y]) => d.ill(s, il, x, y, 0.8, 0.8));
    d.t(s, ['**1.** Chacun dépose un objet dans la boîte, en secret.', '**2.** On tire un objet et on demande à qui il est.', '**3.** On répond avec un possessif et //van// + pronom.'], 4.6, 1.75, 8.13, 1.9, { size: 18, gap: 10, valign: 'middle' });
    d.bubble(s, '//Van wie is **deze** sleutel? · Is **dit** jouw pen?//', 4.6, 3.85, 8.13, 0.85, 'accent2', { size: 19 });
    d.bubble(s, '//Ja, **die** is **van mij**! · Nee, dat is niet **mijn** pen. **Die** is van Karim, denk ik.//', 4.6, 4.85, 8.13, 1.1, 'accent3', { size: 19 });
    d.t(s, 'Variante : devinez le propriétaire — //Ik denk dat dit de bril van Sofie is.//', 4.6, 6.15, 8.13, 0.6, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 21 ex7 album photo
  d.roleplay({
    g: 21, title: 'Exercice 7 — L’album photo',
    scenario: 'À la pause, Karim montre des photos de famille à Sofie sur son téléphone.',
    a: '**Karim** : présentez votre famille : //Dit is mijn vrouw. Dat zijn onze kinderen.//',
    b: '**Sofie** : posez des questions : //Wie is dat? Is dat jouw zus? Hoe heten hun kinderen?//',
    bank: '//Dit is mijn vrouw, Leila. · Dat zijn onze kinderen. · Die man links is mijn broer. · Zijn vrouw heet Nora. · Wie is dat? · Is dat jouw zus? · Hoe heten hun kinderen?//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.55, { fill: 'purple', line: null, radius: 0.04 });
      d.t(s, 'DE FAMILIE VAN KARIM', x + 0.15, y, w - 0.3, 0.55, { size: 12, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const node = (il, lab, nx, ny) => { d.ill(s, il, nx, ny, 0.6, 0.6); d.t(s, lab, nx - 0.3, ny + 0.6, 1.2, 0.3, { size: 10, bold: true, color: 'tx2', align: 'center' }); };
      const cx = x + w / 2;
      node('man-white-hair', 'vader', cx - 0.95, y + 0.75); node('woman-white-hair', 'moeder', cx + 0.35, y + 0.75);
      d.line(s, cx - 0.35, y + 1.05, cx + 0.35, y + 1.05, { color: 'accent5', lw: 1.5, arrow: false });
      d.line(s, cx, y + 1.05, cx, y + 1.85, { color: 'accent5', lw: 1.5, arrow: false });
      d.line(s, x + 0.55, y + 1.85, x + w - 0.55, y + 1.85, { color: 'accent5', lw: 1.5, arrow: false });
      node('man-beard', 'broer', x + 0.25, y + 2.0); node('man-office-worker', 'Karim', cx - 0.3, y + 2.0); node('woman-red-hair', 'zus', x + w - 0.85, y + 2.0);
      node('woman-with-headscarf', 'Leila', cx - 0.3, y + 3.15);
      d.line(s, cx, y + 2.9, cx, y + 3.15, { color: 'accent5', lw: 1.5, arrow: false });
      d.line(s, cx, y + 4.05, cx, y + 4.3, { color: 'accent5', lw: 1.5, arrow: false });
      node('boy', 'Adam', cx - 0.95, y + 4.3); node('girl', 'Lina', cx + 0.35, y + 4.3);
      d.line(s, cx - 0.65, y + 4.3, cx + 0.65, y + 4.3, { color: 'accent5', lw: 1.5, arrow: false });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['Traduisez : « Sofie et son frère ».', '//ons// ou //onze// : …… //kantoor// · …… //klanten// ?', '//deze// ou //dit// (proche) : …… //huis// · …… //stoel// ?'],
    self: ['Posséder', 'Montrer', 'Demander'],
    teaser: { icon: 'FaHome', text: '**Volgende keer : Groot of grote?** — //een groot huis, de grote auto//' },
  });
}

module.exports = { meta, build };
