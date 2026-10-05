// Chunks! — Apprendre par blocs de mots (complément A1, vrais débutants)
const { BORDER, plain } = require('../lib');

const meta = {
  n: 'C', slug: 'Chunks', title: 'Chunks! — Apprendre par blocs de mots', short: 'Chunks!',
  template: 'chunks_blokjes.md', file: 'Chunks_Apprendre_par_blocs.pptx',
  docTitle: 'Chunks! — Apprendre par blocs de mots',
  foot: 'Néerlandais 1 · UE1 · Chunks! · Apprendre par blocs de mots',
};

const BL = 'accent1'; // bloc = orange (brique)
const SL = 'accent2'; // case à compléter = bleu
const BO = 'accent3'; // bloc bouée = vert
const MW = 'accent5'; // mot à mot = gris

function build(d) {
  const wOf = (t, size) => 0.3 + plain(t).length * size * 0.0082;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  // une brique de jeu de construction : corps + plots sur le dessus
  const brick = (s, x, y, w, h, txt, c = BL, o = {}) => {
    const sh = Math.min(0.11, h * 0.16); const sw = Math.min(0.32, w * 0.16);
    const n = Math.max(2, Math.min(6, Math.floor(w / 0.75)));
    for (let i = 0; i < n; i++) {
      const sx = x + (w / n) * (i + 0.5) - sw / 2;
      d.rect(s, sx, y - sh + 0.02, sw, sh, { fill: c, line: null, radius: 0.03, rotate: o.rotate });
    }
    d.rect(s, x, y, w, h, { fill: c, line: null, radius: 0.08, rotate: o.rotate, shadow: o.shadow });
    if (txt) d.t(s, txt, x + 0.08, y, w - 0.16, h, { size: o.size || 18, bold: o.bold ?? true, color: o.color || 'bg1', align: o.align || 'center', valign: 'middle', rotate: o.rotate });
  };
  // le bloc à trou (CH2) : brique + case bleue en pointillés ; fill = contenu de la case (ou vide)
  const slotBrick = (s, x, y, before, after, o = {}) => {
    const size = o.size || 19; const h = o.h || 0.62; const sw = o.slotW || 1.7;
    const bw = wOf(before, size); const aw = after ? wOf(after, size) : 0;
    const w = bw + sw + aw + 0.2;
    brick(s, x, y, w, h, null, o.c || BL);
    d.t(s, `//${before}//`, x + 0.06, y, bw, h, { size, bold: true, color: 'bg1', valign: 'middle', align: 'center' });
    d.rect(s, x + bw + 0.08, y + 0.09, sw, h - 0.18, { fill: 'FFFFFF', line: SL, lw: 2, dash: 'dash', radius: 0.06 });
    if (o.fill) d.t(s, `//**${o.fill}**//`, x + bw + 0.08, y + 0.09, sw, h - 0.18, { size: size - 2, color: SL, align: 'center', valign: 'middle', fit: true, max: size - 2, min: 10 });
    if (after) d.t(s, `//${after}//`, x + bw + sw + 0.12, y, aw, h, { size, bold: true, color: 'bg1', valign: 'middle', align: 'center' });
    return w;
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'COMPLÉMENT · A1 · VRAIS DÉBUTANTS', title: 'Chunks!', sub: 'Apprendre par blocs de mots', line: 'Leer in blokjes!',
    visual: (s) => {
      brick(s, 7.6, 1.35, 4.6, 0.95, '//Hoe gaat het?//', BL, { size: 26, shadow: true });
      brick(s, 7.0, 2.65, 5.2, 0.95, '//Ik woon in Brussel.//', SL, { size: 26, shadow: true });
      brick(s, 7.3, 3.95, 5.4, 0.95, '//Kan je even herhalen?//', BO, { size: 26, shadow: true });
      d.ill(s, 'puzzle-piece', 11.95, 0.75, 0.8, 0.8);
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaPuzzlePiece', h: 'Comprendre', t: 'Je sais ce qu’est un bloc de mots et pourquoi l’apprendre en entier.', color: BL },
      { icon: 'FaIdCard', h: 'Me présenter', t: 'Je salue et je me présente avec des blocs : //Hoe gaat het? · Ik woon in Namen.//', color: SL },
      { icon: 'FaLifeRing', h: 'Me dépanner', t: 'Je demande de répéter ou d’épeler : //Kan je even herhalen?//', color: BO },
    ],
    band: 'À la fin de la séance : une vingtaine de blocs prêts à l’emploi et un carnet de blocs.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Vous parlez déjà en blocs !' });
    const F = ['« Ça va ? »', '« S’il vous plaît »', '« Il y a »', '« À plus ! »', '« Enchanté·e »', '« Je ne sais pas »'];
    const bw = 3.7;
    F.forEach((t, i) => {
      const x = 0.9 + (i % 3) * (bw + 0.45); const y = 2.0 + Math.floor(i / 3) * 1.35;
      brick(s, x, y, bw, 0.85, t, BL, { size: 22, rotate: [-2, 1, 2, 1, -1, -2][i] });
    });
    d.rect(s, 0.6, 4.95, 12.13, 1.6, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.25, 1.0, 1.0);
    d.t(s, ['Vous analysez « s’il vous plaît » mot par mot ? « si… il… vous… plaît » ? **Non !**', 'Vous l’utilisez **en bloc**. En néerlandais, c’est pareil.'], 2.1, 4.95, 10.4, 1.6, { size: 19, valign: 'middle', gap: 6 });
  }

  // ---------------------------------------------------------------- 4 CH1 la brique et le bloc
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'MÉTHODE', title: 'Un chunk, c’est quoi ?' });
    d.t(s, 'MOT PAR MOT', 0.7, 1.65, 4.6, 0.4, { size: 13, bold: true, color: MW, cs: 2 });
    [['hoe', 'comment', 1.0, 2.35, -8], ['gaat', 'va', 2.75, 2.15, 6], ['het', 'ça', 1.75, 3.55, 4]].forEach(([w, fr, x, y, r]) => {
      brick(s, x, y, 1.45, 0.75, `//${w}//`, 'D98A4A', { size: 22, rotate: r });
      d.t(s, fr, x, y + 0.82, 1.45, 0.35, { size: 13, italic: true, color: MW, align: 'center' });
    });
    d.line(s, 4.75, 3.2, 6.15, 3.2, { color: BL, lw: 5 });
    d.t(s, 'EN BLOC', 6.5, 1.65, 6, 0.4, { size: 13, bold: true, color: BL, cs: 2 });
    brick(s, 6.5, 2.65, 5.9, 1.2, '//Hoe gaat het?//', BL, { size: 36, shadow: true });
    d.t(s, '= « Ça va ? »', 6.5, 3.95, 5.9, 0.6, { size: 24, bold: true, color: BO, align: 'center', valign: 'middle' });
    d.rect(s, 0.6, 4.95, 12.13, 0.85, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, '**Un chunk** = un groupe de mots qu’on apprend, qu’on retient et qu’on dit **d’un seul bloc**.', 0.85, 4.95, 11.7, 0.85, { size: 20, valign: 'middle', align: 'center' });
    ['1 bloc', '1 sens', '1 souffle'].forEach((t, i) => {
      d.rect(s, 2.6 + i * 2.85, 6.05, 2.45, 0.65, { fill: [BL, BO, SL][i], line: null, radius: 0.3 });
      d.t(s, t, 2.6 + i * 2.85, 6.05, 2.45, 0.65, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 5 mot à mot
  {
    const s = d.page({ g: 5, tag: 'PIÈGE FR ≠ NL', title: 'Mot à mot, c’est bizarre !' });
    d.t(s, 'LE BLOC', 0.7, 1.6, 3.6, 0.38, { size: 13, bold: true, color: BL, cs: 2 });
    d.t(s, 'LE MOT À MOT', 4.75, 1.6, 4.0, 0.38, { size: 13, bold: true, color: MW, cs: 2 });
    d.ill(s, 'confused-face', 6.85, 1.52, 0.48, 0.48);
    d.t(s, 'LE VRAI SENS', 8.95, 1.6, 3.8, 0.38, { size: 13, bold: true, color: BO, cs: 2 });
    const R = [['Hoe gaat het?', 'Comment va ça ?', 'Ça va ?'], ['Hoe oud ben je?', 'Comment vieux es-tu ?', 'Quel âge as-tu ?'], ['Tot ziens!', 'Jusqu’au revoir !', 'Au revoir !'], ['Dank je wel!', 'Te remercie bien !', 'Merci beaucoup !'], ['Graag gedaan!', 'Volontiers fait !', 'De rien !'], ['Ik ben 25 jaar.', 'Je suis 25 ans.', 'J’ai 25 ans.']];
    R.forEach(([nl, lit, fr], i) => {
      const y = 2.15 + i * 0.66;
      brick(s, 0.7, y + 0.06, 3.7, 0.5, `//${nl}//`, BL, { size: 18 });
      d.t(s, `« //${lit}// »`, 4.75, y, 4.0, 0.62, { size: 17, color: MW, valign: 'middle' });
      d.line(s, 8.45, y + 0.31, 8.85, y + 0.31, { color: BO, lw: 2 });
      d.t(s, `**${fr}**`, 8.95, y, 3.8, 0.62, { size: 18, color: '1F6B3F', valign: 'middle' });
    });
    band(s, 'Mot à mot : **bizarre**. En bloc : **simple**. On apprend le **sens** du bloc, pas la traduction des mots.', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 6 pourquoi
  {
    const s = d.page({ g: 6, tag: 'MÉTHODE', title: 'Pourquoi apprendre en blocs ?' });
    const C = [['high-voltage', 'Plus vite', BL, ['Un bloc = **un seul** effort de mémoire.', 'Pas 3 mots + 2 règles !']], ['puzzle-piece', 'La grammaire est dans le bloc', SL, ['//Ik woon **in** Brussel.// · //Ik **ben** 25 jaar.//', '//Waar kom je **vandaan**?//']], ['musical-note', 'L’accent est dans le bloc', 'purple', ['On le dit **d’un souffle** :', '//Tot **ziens**! · Hoe **gaat** het?//']], ['no-entry', 'Moins d’erreurs', 'accent6', ['On ne traduit pas, on utilise :', '✗ //{{Ik heb 25 jaar}}// → ✓ //Ik **ben** 25 jaar//']]];
    const cw = (12.13 - 0.25) / 2; const ch = 2.05;
    C.forEach(([il, h, c, L], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.25); const y = 1.7 + Math.floor(i / 2) * (ch + 0.2);
      d.rect(s, x, y, cw, ch, { fill: 'bg1', line: c, lw: 2, radius: 0.12, shadow: true });
      d.ill(s, il, x + 0.25, y + 0.3, 0.95, 0.95);
      d.t(s, `**${h}**`, x + 1.4, y + 0.15, cw - 1.55, 0.6, { size: 20, color: c, valign: 'middle' });
      d.t(s, L, x + 1.4, y + 0.8, cw - 1.55, ch - 0.95, { size: 17, gap: 4, valign: 'middle' });
    });
    band(s, 'Le bonus pour débutants : on peut **parler avant** de connaître la grammaire.', 6.25, 0.6, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 7 saluer
  {
    const s = d.page({ g: 7, tag: 'BLOCS', title: 'Mes premiers blocs : bonjour, au revoir' });
    [['sunrise', 'Goedemorgen!', 'le matin'], ['sun', 'Goedemiddag!', 'l’après-midi'], ['sunset', 'Goedenavond!', 'le soir']].forEach(([il, t, fr], i) => {
      const x = 0.6 + i * 4.1;
      d.rect(s, x, 1.65, 3.93, 1.55, { fill: 'FDF1E6', line: null, radius: 0.12 });
      d.ill(s, il, x + 0.15, 1.8, 0.8, 0.8);
      d.t(s, fr, x + 1.05, 1.8, 2.7, 0.8, { size: 15, italic: true, color: MW, valign: 'middle' });
      brick(s, x + 0.3, 2.68, 3.33, 0.42, `//${t}//`, BL, { size: 17 });
    });
    d.line(s, 0.7, 3.38, 12.6, 3.38, { color: BL, lw: 2, dash: 'dash' });
    [['J’ARRIVE', [['Hallo!', 'neutre'], ['Hoi!', 'familier'], ['Dag!', 'bonjour (BE)']]], ['JE PARS', [['Dag!', 'au revoir (BE)'], ['Tot straks!', 'à tout à l’heure'], ['Tot morgen!', 'à demain'], ['Tot ziens!', 'au revoir'], ['Nog een fijne dag!', 'bonne journée']]]].forEach(([h, L], i) => {
      const x = i === 0 ? 0.6 : 4.7; const w = i === 0 ? 3.93 : 8.03;
      d.t(s, h, x, 3.55, w, 0.38, { size: 13, bold: true, color: 'accent5', cs: 2 });
      L.forEach(([t, fr], k) => {
        const cx = i === 0 ? x : x + (k % 2) * 4.05; const cy = 4.05 + (i === 0 ? k : Math.floor(k / 2)) * 0.78;
        const bw = i === 0 ? 1.95 : 2.45;
        brick(s, cx, cy, bw, 0.5, `//${t}//`, BL, { size: 15 });
        d.t(s, fr, cx + bw + 0.1, cy, 3.9 - bw, 0.5, { size: 13, italic: true, color: MW, valign: 'middle' });
      });
    });
    band(s, 'En Belgique, //**Dag!**// sert à dire bonjour **et** au revoir.', 6.3, 0.55, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 8 ça va
  {
    const s = d.page({ g: 8, tag: 'BLOCS', title: 'Les blocs de « ça va ? »' });
    brick(s, 0.7, 2.2, 4.3, 1.1, '//Hoe gaat het?//', BL, { size: 30, shadow: true });
    d.t(s, 'ou : //**Alles goed?**// (familier)', 0.7, 3.4, 4.3, 0.45, { size: 16, color: MW, align: 'center' });
    const R = [['grinning-face', 'Prima!', 'super !'], ['slightly-smiling-face', 'Goed, dank je.', 'bien, merci'], ['neutral-face', 'Het gaat.', 'ça peut aller'], ['slightly-frowning-face', 'Niet zo goed.', 'pas très bien']];
    R.forEach(([il, t, fr], i) => {
      const y = 1.7 + i * 0.85;
      d.ill(s, il, 5.8, y + 0.05, 0.62, 0.62);
      brick(s, 6.6, y + 0.12, 3.0, 0.52, `//${t}//`, BL, { size: 18 });
      d.t(s, fr, 9.75, y + 0.05, 2.9, 0.62, { size: 15, italic: true, color: MW, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.3, 12.13, 0.95, { fill: 'EAF2FB', line: SL, lw: 1.5, radius: 0.12 });
    d.t(s, 'On renvoie la balle :', 0.85, 5.3, 3.2, 0.95, { size: 18, valign: 'middle' });
    brick(s, 4.1, 5.5, 2.9, 0.55, '//En met jou?//', SL, { size: 20 });
    d.t(s, 'avec //u// :', 7.25, 5.3, 1.2, 0.95, { size: 16, color: MW, valign: 'middle' });
    brick(s, 8.4, 5.5, 2.6, 0.55, '//En met u?//', SL, { size: 20 });
    d.ill(s, 'ping-pong', 11.65, 5.4, 0.75, 0.75);
    d.t(s, '//Hoe gaat het? — Goed, dank je. **En met jou?** — Prima!//', 0.6, 6.4, 12.13, 0.45, { size: 17, color: 'tx2', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 9 CH2 le bloc à trou
  {
    const s = d.page({ g: 9, tag: 'BLOCS', title: 'Me présenter : le bloc à trou' });
    const R = [['Ik heet', '', 'Karim'], ['Ik kom uit', '', 'België'], ['Ik woon in', '', 'Namen'], ['Ik ben', 'jaar.', '32'], ['Ik spreek', '', 'Frans en een beetje Nederlands'], ['Ik ben', '', 'boekhouder']];
    R.forEach(([b, a, ex], i) => {
      const y = 1.8 + i * 0.72;
      slotBrick(s, 0.7, y, b, a, { size: 19, h: 0.58, slotW: 1.5 });
      d.line(s, 5.15, y + 0.29, 5.65, y + 0.29, { color: BL, lw: 2 });
      d.t(s, `//${b} **^^${ex}^^**${a ? ' ' + a : '.'}//`, 5.8, y, 6.9, 0.58, { size: 19, valign: 'middle' });
    });
    band(s, 'Le **bloc** reste, seule la **case** change. Enchaînez les 6 blocs : c’est déjà une présentation complète !', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 10 questions
  {
    const s = d.page({ g: 10, tag: 'BLOCS', title: 'Les blocs-questions' });
    const R = [['Hoe heet je?', 'Ik heet', ''], ['Waar kom je vandaan?', 'Ik kom uit', ''], ['Waar woon je?', 'Ik woon in', ''], ['Hoe oud ben je?', 'Ik ben', 'jaar.'], ['Welke talen spreek je?', 'Ik spreek', ''], ['Wat doe je van beroep?', 'Ik ben', '']];
    R.forEach(([q, b, a], i) => {
      const y = 1.72 + i * 0.73;
      d.bubble(s, `//**${q}**//`, 0.6, y, 4.9, 0.6, SL, { size: 18 });
      d.line(s, 5.65, y + 0.3, 6.25, y + 0.3, { color: BL, lw: 2.5 });
      slotBrick(s, 6.45, y + 0.02, b, a, { size: 17, h: 0.54, slotW: 1.3 });
    });
    band(s, 'Une question = une réponse-bloc. Avec //u// : //Hoe heet u? · Waar woont u?// (M8)', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 11 politesse
  {
    const s = d.page({ g: 11, tag: 'BLOCS', title: 'Les blocs de politesse' });
    d.chip(s, 'je · entre apprenants, amis', 0.7, 1.7, BL, 0.38, 13);
    d.chip(s, 'u · inconnus, accueil', 6.95, 1.7, 'tx2', 0.38, 13);
    [['Alsjeblieft!', 'Alstublieft!', 's’il te / vous plaît · voilà'], ['Dank je wel!', 'Dank u wel!', 'merci (beaucoup)']].forEach(([a, b, fr], i) => {
      const y = 2.3 + i * 0.95;
      brick(s, 0.7, y, 3.6, 0.6, `//${a}//`, BL, { size: 20 });
      brick(s, 6.95, y, 3.6, 0.6, `//${b}//`, 'tx2', { size: 20 });
      d.t(s, fr, 4.45, y, 2.4, 0.6, { size: 14, italic: true, color: MW, valign: 'middle', align: 'center' });
    });
    d.t(s, 'POUR TOUT LE MONDE', 0.7, 4.2, 6, 0.38, { size: 13, bold: true, color: 'accent5', cs: 2 });
    [['Graag gedaan!', 'de rien'], ['Sorry!', 'désolé·e'], ['Pardon?', 'pardon ?'], ['Geen probleem!', 'pas de problème'], ['Aangenaam!', 'enchanté·e'], ['Welkom!', 'bienvenue']].forEach(([t, fr], i) => {
      const x = 0.7 + (i % 3) * 4.05; const y = 4.75 + Math.floor(i / 3) * 0.78;
      brick(s, x, y, 2.35, 0.5, `//${t}//`, BL, { size: 16 });
      d.t(s, fr, x + 2.45, y, 1.55, 0.5, { size: 13, italic: true, color: MW, valign: 'middle' });
    });
    d.t(s, '//Alsjeblieft// sert pour demander **et** pour donner (« voilà ») · //Aangenaam// : en se serrant la main', 0.6, 6.4, 12.13, 0.45, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 12 bouées
  {
    const s = d.page({ g: 12, tag: 'BLOCS BOUÉES', tagColor: BO, title: 'Les blocs bouées : se dépanner' });
    d.ill(s, 'ring-buoy', 0.7, 2.3, 2.0, 2.0);
    d.t(s, 'Pas compris ?\nPas de panique !', 0.6, 4.4, 2.2, 0.9, { size: 15, bold: true, color: BO, align: 'center' });
    const R = [['repeat-button', 'Kan je even herhalen?', 'Tu peux répéter ?'], ['turtle', 'Kan je wat trager spreken?', 'plus lentement ?'], ['input-latin-letters', 'Kan je het laatste woord spellen?', 'épeler le dernier mot ?'], ['pencil', 'Hoe schrijf je dat?', 'ça s’écrit comment ?'], ['red-question-mark', 'Wat betekent …?', 'que veut dire… ?'], ['speaking-head', 'Hoe zeg je … in het Nederlands?', 'comment on dit… ?'], ['person-raising-hand', 'Sorry, ik begrijp het niet.', 'je ne comprends pas'], ['person-raising-hand', 'Ik spreek nog maar een beetje Nederlands.', 'je parle encore peu néerlandais']];
    R.forEach(([il, t, fr], i) => {
      const y = 1.65 + i * 0.56;
      d.ill(s, il, 3.1, y + 0.03, 0.44, 0.44);
      brick(s, 3.7, y + 0.06, 5.6, 0.42, `//${t}//`, BO, { size: 16, align: 'left' });
      d.t(s, fr, 9.45, y, 3.3, 0.52, { size: 14, italic: true, color: MW, valign: 'middle' });
    });
    band(s, 'Avec //u// : //**Kunt u** even herhalen? · **Kunt u** wat trager spreken?// · //trager// (BE) = //langzamer// (NL)', 6.25, 0.6, BO, 17);
  }

  // ---------------------------------------------------------------- 13 épeler
  {
    const s = d.page({ g: 13, tag: 'BLOCS BOUÉES', tagColor: BO, title: 'Épeler : les lettres pièges' });
    const L = [['a', '« â »'], ['e', '« é »'], ['i', '« i »'], ['u', '« u »'], ['g', '« ghé »'], ['h', '« hâ »'], ['j', '« yé »'], ['w', '« wé »'], ['y', '« i-grec »'], ['ij', 'lange ij']];
    const tw = (12.13 - 9 * 0.15) / 10;
    L.forEach(([l, p], i) => {
      const x = 0.6 + i * (tw + 0.15);
      d.rect(s, x, 1.75, tw, 1.7, { fill: 'FFF6E0', line: 'C9A86A', lw: 1.5, radius: 0.1, shadow: true });
      d.t(s, l, x, 1.8, tw, 1.0, { size: 44, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
      d.t(s, p, x, 2.8, tw, 0.5, { size: 13, bold: true, color: BL, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 3.7, 12.13, 0.75, { fill: 'FBEDEB', line: 'accent6', lw: 1.25, radius: 0.1 });
    d.t(s, 'Pièges : //e// « **é** » (pas « eu ») · //g// « **ghé** » raclé (pas « jé ») · //j// « **yé** » (pas « ji ») · //u// comme en français', 0.85, 3.7, 11.7, 0.75, { size: 18, valign: 'middle' });
    d.t(s, 'BLOC UTILE', 0.6, 4.65, 6, 0.38, { size: 13, bold: true, color: 'accent5', cs: 2 });
    brick(s, 0.7, 5.2, 3.6, 0.6, '//met dubbele e//', BO, { size: 20 });
    d.t(s, '//Peeters, **met dubbele e**. · Hassan, **met dubbele s**.//', 4.5, 5.1, 8.2, 0.8, { size: 19, valign: 'middle' });
    band(s, 'Entraînez-vous : épelez votre prénom à votre voisin·e, qui l’écrit. L’alphabet complet : M2.', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 14 dialogue
  {
    const s = d.page({ g: 14, tag: 'MISE EN SITUATION', title: 'Un dialogue avec des bouées' });
    const D = [['S', 'Hoi! Hoe heet jij?'], ['K', 'Sorry, **kan je even herhalen?**', 1], ['S', 'Hoe heet jij?'], ['K', 'Ik heet Karim. En jij?'], ['S', 'Ik ben Sofie Peeters.'], ['K', '**Kan je het laatste woord spellen?**', 1], ['S', 'P-E-E-T-E-R-S. **Met dubbele e.**'], ['K', 'Dank je wel! Aangenaam!']];
    D.forEach(([who, t, buoy], i) => {
      const y = 1.62 + i * 0.6;
      if (who === 'S') {
        d.ill(s, 'woman', 0.6, y, 0.52, 0.52);
        d.bubble(s, `**Sofie** · //${t}//`, 1.25, y, 6.0, 0.52, 'accent4', { size: 16 });
      } else {
        d.ill(s, 'man-office-worker', 11.3, y, 0.52, 0.52);
        d.bubble(s, `**Karim** · //${t}//`, 5.15, y, 6.0, 0.52, buoy ? BO : SL, { size: 16 });
        if (buoy) d.ill(s, 'ring-buoy', 11.95, y + 0.02, 0.48, 0.48);
      }
    });
    band(s, 'Lisez à deux, deux fois, en changeant de rôle. Puis remplacez par vos vrais prénoms !', 6.5, 0.45, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 15 comment apprendre
  {
    const s = d.page({ g: 15, tag: 'MÉTHODE', title: 'Comment apprendre un bloc ?' });
    const S = [['ear', 'J’écoute', 'le bloc en entier'], ['parrot', 'Je répète', 'd’un souffle, 3 fois, à voix haute'], ['notebook', 'Je note', 'le bloc entier dans mon carnet'], ['bullseye', 'Je réutilise', 'le bloc aujourd’hui']];
    S.forEach(([il, h, t], i) => {
      const y = 1.7 + i * 1.08;
      d.num(s, i + 1, 0.6, y + 0.25, 0.5, BL, 16);
      d.ill(s, il, 1.25, y + 0.1, 0.8, 0.8);
      d.t(s, [`**${h}**`, t], 2.2, y, 3.9, 1.0, { size: 17, gap: 0, valign: 'middle' });
    });
    const x = 6.4; const y = 1.7; const w = 6.33; const h = 4.3;
    d.rect(s, x, y, w, h, { fill: 'FFFDF5', line: 'C9A86A', lw: 1.5, radius: 0.06, shadow: true });
    d.rect(s, x, y, 0.25, h, { fill: 'accent6', tr: 30, line: null, radius: 0 });
    d.t(s, '**MON CARNET DE BLOCS**', x + 0.4, y + 0.1, w - 0.5, 0.45, { size: 15, color: 'tx2', cs: 2 });
    const cols = [['le bloc', 0.4, 2.0], ['le sens', 2.45, 1.75], ['ma phrase', 4.25, 1.95]];
    cols.forEach(([c, cx, cw]) => d.t(s, `**${c}**`, x + cx, y + 0.6, cw, 0.4, { size: 14, color: BL }));
    d.line(s, x + 0.35, y + 1.02, x + w - 0.15, y + 1.02, { color: BL, lw: 1.5, arrow: false });
    const rows = [['Hoe gaat het?', 'Ça va ?', 'Hoe gaat het, Sofie?'], ['Ik woon in …', 'J’habite à…', 'Ik woon in Luik.'], ['Kan je even herhalen?', 'Tu peux répéter ?', 'Sorry, kan je even herhalen?']];
    for (let k = 0; k < 6; k++) {
      const ry = y + 1.1 + k * 0.52;
      d.line(s, x + 0.35, ry + 0.5, x + w - 0.15, ry + 0.5, { color: 'D9D2BF', lw: 0.75, arrow: false });
      if (rows[k]) rows[k].forEach((t, j) => d.t(s, j === 1 ? t : `//${t}//`, x + cols[j][1], ry, cols[j][2], 0.5, { size: 13, valign: 'middle', color: j === 0 ? BL : 'tx1', bold: j === 0 }));
    }
    band(s, 'Le carnet note le **sens** du bloc, jamais le mot à mot. Objectif : **3 nouveaux blocs par jour**, à voix haute.', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 16 à retenir
  {
    const s = d.page({ g: 16, tag: 'À RETENIR', title: 'À retenir : apprendre en blocs' });
    d.rect(s, 0.6, 1.7, 12.13, 1.35, { fill: 'FDF1E6', line: BL, lw: 1.5, radius: 0.1 });
    ['hoe', 'gaat', 'het'].forEach((w, i) => brick(s, 0.9 + i * 0.95, 2.15, 0.85, 0.5, `//${w}//`, 'D98A4A', { size: 15 }));
    d.line(s, 3.85, 2.4, 4.4, 2.4, { color: BL, lw: 3 });
    brick(s, 4.55, 2.08, 2.6, 0.62, '//Hoe gaat het?//', BL, { size: 18 });
    d.t(s, '1 bloc = 1 sens = 1 souffle · on apprend le **sens**, pas le mot à mot', 7.35, 1.7, 5.25, 1.35, { size: 17, valign: 'middle' });
    d.rect(s, 0.6, 3.25, 12.13, 1.3, { fill: 'EAF2FB', line: SL, lw: 1.5, radius: 0.1 });
    slotBrick(s, 0.9, 3.62, 'Ik woon in', '', { size: 17, h: 0.55, slotW: 1.3 });
    d.t(s, 'le **bloc** reste, la **case** change : //Ik woon in **Namen** · in **Luik** · in **Gent**//', 5.0, 3.25, 7.6, 1.3, { size: 17, valign: 'middle' });
    d.rect(s, 0.6, 4.75, 12.13, 1.6, { fill: 'EDF6F0', line: BO, lw: 1.5, radius: 0.1 });
    d.ill(s, 'ring-buoy', 0.8, 5.05, 1.0, 1.0);
    ['Kan je even herhalen?', 'Kan je wat trager spreken?', 'Kan je het laatste woord spellen?'].forEach((t, i) => {
      brick(s, 2.05 + (i === 2 ? 0 : i * 5.3), 5.0 + (i === 2 ? 0.75 : 0), i === 2 ? 5.6 : 5.0, 0.5, `//${t}//`, BO, { size: 17 });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 17 divider
  d.divider({ g: 17, tiles: [
    ['Le puzzle des blocs', '★', 'FaPuzzlePiece'], ['Le bon bloc au bon moment', '★', 'FaClock'], ['Mot à mot ou en bloc ?', '★★', 'FaLanguage'], ['Mon portrait en blocs', '★', 'FaIdCard'],
    ['Le bingo des blocs', '★', 'FaTh'], ['Le réflexe bouée', '★★', 'FaLifeRing'], ['Le premier cours', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 18 ex1 puzzle
  const P1 = [['Hoe gaat', 'e'], ['Tot', 'h'], ['Dank je', 'b'], ['Graag', 'g'], ['Kan je even', 'd'], ['Waar kom je', 'a'], ['Ik woon', 'f'], ['Ik ben 25', 'c']];
  const E1 = [['a', 'vandaan?'], ['b', 'wel!'], ['c', 'jaar.'], ['d', 'herhalen?'], ['e', 'het?'], ['f', 'in Brussel.'], ['g', 'gedaan!'], ['h', 'ziens!']];
  d.ex({ g: 18, title: 'Exercice 1 — Le puzzle des blocs', stars: '★', instr: 'Reconstituez les 8 blocs, puis dites chaque bloc entier, d’un souffle.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 8;
    P1.forEach(([t, k], i) => {
      const y = top + i * rh;
      d.t(s, `**${i + 1}**`, 0.6, y, 0.4, rh, { size: 16, color: 'accent5', valign: 'middle' });
      brick(s, 1.05, y + 0.12, 3.3, rh - 0.2, `//${t}…//`, BL, { size: 17 });
      if (mode === 'a') {
        const j = E1.findIndex(([l]) => l === k);
        d.line(s, 4.4, y + rh / 2, 8.0, top + j * rh + rh / 2, { color: 'tx2', lw: 1.75 });
      }
    });
    E1.forEach(([l, t], j) => {
      const y = top + j * rh;
      d.rect(s, 8.05, y + 0.08, 4.68, rh - 0.16, { fill: 'FFFFFF', line: BL, lw: 1.5, radius: 0.1 });
      d.t(s, `**${l}**   //…${t}//`, 8.2, y + 0.08, 4.45, rh - 0.16, { size: 17, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 19 ex2 le bon bloc
  const S2 = [['alarm-clock', 'Vous arrivez au cours à 9 h.', 'Goedemorgen!'], ['waving-hand', 'Vous partez, vous revoyez la personne cet après-midi.', 'Tot straks!'], ['folded-hands', 'On vous dit //Dank je wel!//', 'Graag gedaan!'], ['confused-face', 'Vous n’avez pas compris la phrase.', 'Kan je even herhalen?'], ['pencil', 'Vous ne savez pas écrire le dernier mot (un nom de famille).', 'Kan je het laatste woord spellen?'], ['handshake', 'On vous présente quelqu’un.', 'Aangenaam!'], ['slightly-smiling-face', 'On vous demande //Hoe gaat het?//', 'Goed, en met jou?'], ['turtle', 'La personne parle trop vite.', 'Kan je wat trager spreken?']];
  d.ex({ g: 19, title: 'Exercice 2 — Le bon bloc au bon moment', stars: '★', instr: 'Quel bloc dites-vous ? Choisissez dans la banque.' }, (s, mode, top) => {
    let y0 = top;
    if (mode === 'q') {
      const bank = S2.map((r) => r[2]);
      let x = 0.6; let y = top;
      bank.forEach((b) => {
        const w = wOf(b, 14) + 0.1;
        if (x + w > 12.73) { x = 0.6; y += 0.5; }
        d.rect(s, x, y, w, 0.4, { fill: /Kan je/.test(b) ? BO : BL, tr: 80, line: /Kan je/.test(b) ? BO : BL, lw: 1, radius: 0.2 });
        d.t(s, `//${b}//`, x, y, w, 0.4, { size: 14, align: 'center', valign: 'middle' });
        x += w + 0.12;
      });
      y0 = y + 0.6;
    }
    const rh = (6.88 - y0) / 4; const cw = (12.13 - 0.25) / 2;
    S2.forEach(([il, sit, a], i) => {
      const c = Math.floor(i / 4); const r = i % 4;
      const x = 0.6 + c * (cw + 0.25); const y = y0 + r * rh;
      d.rect(s, x, y + 0.05, cw, rh - 0.1, { fill: r % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.75, radius: 0.08 });
      d.t(s, `**${i + 1}**`, x + 0.1, y + 0.05, 0.35, rh - 0.1, { size: 15, color: 'accent5', valign: 'middle' });
      d.ill(s, il, x + 0.45, y + (rh - 0.5) / 2, 0.5, 0.5);
      d.t(s, sit, x + 1.05, y + 0.05, cw - 3.55, rh - 0.1, { size: 14, valign: 'middle' });
      d.rect(s, x + cw - 2.45, y + 0.15, 2.35, rh - 0.3, { fill: mode === 'a' ? (/Kan je/.test(a) ? BO : BL) : 'FFFFFF', line: mode === 'a' ? null : BORDER, lw: 1, radius: 0.08 });
      if (mode === 'a') d.t(s, `//**${a}**//`, x + cw - 2.4, y + 0.15, 2.25, rh - 0.3, { size: 13, color: 'bg1', align: 'center', valign: 'middle', fit: true, max: 14, min: 9 });
    });
  });

  // ---------------------------------------------------------------- 20 ex3 mot à mot ou en bloc
  const C3 = [['Ik heb 25 jaar.', 'Ik ben 25 jaar.', '« j’ai 25 ans »'], ['Hoe gaat jij?', 'Hoe gaat het (met jou)?', '« comment vas-tu ? »'], ['Ik roep me Karim.', 'Ik heet Karim.', '« je m’appelle »'], ['Tot zien!', 'Tot ziens!', '« au revoir »'], ['Dank jou veel.', 'Dank je wel.', '« merci beaucoup »'], ['Kan jij herhalen nog een keer?', 'Kan je even herhalen?', '« peux-tu répéter encore une fois ? »']];
  d.ex({ g: 20, title: 'Exercice 3 — Mot à mot ou en bloc ?', stars: '★★', instr: 'Ces phrases sont traduites mot à mot. Remplacez-les par le bon bloc.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    C3.forEach(([ko, ok, src], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'accent5', 13);
      d.rect(s, 1.1, y + 0.05, 5.4, rh - 0.12, { fill: 'F2F2F2', line: BORDER });
      d.t(s, `✗ //{{${ko}}}//`, 1.25, y + 0.05, 5.2, rh - 0.12, { size: 17, color: MW, valign: 'middle' });
      d.line(s, 6.6, y + rh / 2, 7.1, y + rh / 2, { color: BL, lw: 2.5 });
      if (mode === 'a') {
        brick(s, 7.15, y + 0.14, 3.6, rh - 0.24, `//${ok}//`, BL, { size: 16 });
        d.t(s, src, 10.85, y + 0.05, 1.9, rh - 0.12, { size: 12, italic: true, color: MW, valign: 'middle' });
      } else {
        d.rect(s, 7.15, y + 0.08, 5.58, rh - 0.16, { fill: 'FFFFFF', line: BORDER, lw: 1.25, dash: 'dash', radius: 0.08 });
      }
    });
  });

  // ---------------------------------------------------------------- 21 ex4 mon portrait
  const P4 = [['Ik heet', '', 'Karim'], ['Ik kom uit', '', 'België'], ['Ik woon in', '', 'Namen'], ['Ik ben', 'jaar.', '32'], ['Ik spreek', '', 'Frans en een beetje Nederlands'], ['Ik ben', '', 'boekhouder']];
  d.ex({ g: 21, title: 'Exercice 4 — Mon portrait en blocs', stars: '★', instr: 'Complétez les blocs avec vos informations, puis dites votre portrait sans regarder.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    P4.forEach(([b, a, ex], i) => {
      slotBrick(s, 0.8, top + i * rh + (rh - 0.6) / 2, b, a, { size: 20, h: 0.6, slotW: a ? 3.8 : 5.2, fill: mode === 'a' ? ex : null });
    });
    d.rect(s, 9.4, top + 0.1, 3.33, 4.3, { fill: 'FFFFFF', line: 'tx2', lw: 2, radius: 0.08, shadow: true });
    d.rect(s, 9.4, top + 0.1, 3.33, 0.55, { fill: 'tx2', line: null, radius: 0.08 });
    d.t(s, 'IK STEL ME VOOR', 9.4, top + 0.1, 3.33, 0.55, { size: 13, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
    d.rect(s, 10.2, top + 0.9, 1.75, 2.1, { fill: 'EAF2FB', line: SL, lw: 1.25, dash: mode === 'a' ? undefined : 'dash', radius: 0.06 });
    d.ill(s, mode === 'a' ? 'man-office-worker' : 'bust-in-silhouette', 10.4, top + 1.15, 1.35, 1.35);
    d.t(s, mode === 'a' ? '**Karim Benali**' : '…………………', 9.5, top + 3.15, 3.13, 0.5, { size: 16, align: 'center', valign: 'middle', color: 'tx2' });
    if (mode === 'a') d.t(s, 'Modèle : le portrait de Karim', 9.4, top + 4.5, 3.33, 0.4, { size: 13, italic: true, color: MW, align: 'center' });
  });

  // ---------------------------------------------------------------- 22 ex5 bingo
  {
    const s = d.page({ g: 22, tag: 'JIJ NU !', title: 'Exercice 5 — Le bingo des blocs', stars: '★' });
    const B = ['Goedemorgen!', 'Tot straks!', 'Hoe gaat het?', 'Dank je wel!', 'Graag gedaan!', 'Aangenaam!', 'Tot ziens!', 'Alsjeblieft!', 'Waar woon je?'];
    const cw = 2.55; const ch = 1.42;
    B.forEach((t, i) => {
      const x = 0.7 + (i % 3) * (cw + 0.1); const y = 1.75 + Math.floor(i / 3) * (ch + 0.1);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: BL, lw: 2, radius: 0.1 });
      d.t(s, `//**${t}**//`, x + 0.08, y, cw - 0.16, ch, { size: 18, color: 'tx2', align: 'center', valign: 'middle' });
    });
    d.ill(s, 'game-die', 9.05, 1.7, 0.8, 0.8);
    d.t(s, 'Bingo!', 9.95, 1.7, 2.8, 0.8, { size: 30, bold: true, color: BL, head: true, valign: 'middle' });
    d.t(s, ['**1.** L’enseignant·e lit les blocs dans le désordre… **vite** !', '**2.** Pas compris ? Interdit de dire « quoi ? » :', '**3.** Une ligne complète : //**Bingo!**// — relisez la ligne à voix haute.'], 9.05, 2.65, 3.68, 3.1, { size: 15, gap: 10 });
    brick(s, 9.05, 4.55, 3.68, 0.5, '//Kan je even herhalen?//', BO, { size: 16 });
    d.t(s, '1 point par bouée bien dite !', 9.05, 5.15, 3.68, 0.4, { size: 14, italic: true, color: BO, align: 'center' });
  }

  // ---------------------------------------------------------------- 23 ex6 le réflexe bouée
  {
    const s = d.page({ g: 23, tag: 'JIJ NU !', title: 'Exercice 6 — Le réflexe bouée', stars: '★★' });
    const C = [['repeat-button', 'Kan je even herhalen?'], ['turtle', 'Kan je wat trager spreken?'], ['input-latin-letters', 'Kan je het laatste woord spellen?'], ['pencil', 'Hoe schrijf je dat?'], ['red-question-mark', 'Wat betekent …?']];
    const cw = (12.13 - 4 * 0.15) / 5;
    C.forEach(([il, t], i) => {
      const x = 0.6 + i * (cw + 0.15);
      d.rect(s, x, 1.7, cw, 2.15, { fill: 'FFFFFF', line: BO, lw: 2, radius: 0.12, shadow: true });
      d.ill(s, il, x + cw / 2 - 0.45, 1.85, 0.9, 0.9);
      d.t(s, '↓', x, 2.75, cw, 0.3, { size: 16, bold: true, color: BO, align: 'center', valign: 'middle' });
      brick(s, x + 0.1, 3.15, cw - 0.2, 0.58, `//${t}//`, BO, { size: 13 });
    });
    const R = [['TOUR 1', 'en chœur', 'L’enseignant·e dit une phrase (trop vite, à voix basse, avec un mot inconnu) et montre un signal → **toute la classe** répond.'], ['TOUR 2', 'seul·e', 'Même jeu : **un·e apprenant·e** répond seul·e.'], ['TOUR 3', 'sans signal', 'Plus de signal : **chacun choisit** la bonne bouée. Objectif : 2 à 3 secondes !']];
    R.forEach(([h, sub, t], i) => {
      const y = 4.1 + i * 0.88;
      d.rect(s, 0.6, y, 2.3, 0.76, { fill: BO, tr: i * 25, line: null, radius: 0.1 });
      d.t(s, [`**${h}**`, sub], 0.6, y, 2.3, 0.76, { size: 14, gap: 0, color: 'bg1', align: 'center', valign: 'middle' });
      d.rect(s, 3.0, y, 9.73, 0.76, { fill: 'EDF6F0', line: null, radius: 0.1 });
      d.t(s, t, 3.2, y, 9.4, 0.76, { size: 16, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 24 ex7 le premier cours
  d.roleplay({
    g: 24, title: 'Exercice 7 — Le premier cours',
    scenario: 'Premier cours de néerlandais : faites connaissance avec votre voisin·e. Règle d’or : **pas sûr·e à 100 % ? → une bouée !**',
    a: '**A** : présentez-vous avec vos blocs (ou avec une carte-identité), à vitesse normale.',
    b: '**B** : remplissez la fiche ; utilisez **au moins 3 bouées différentes** ; vérifiez l’orthographe.',
    bank: '//Hoe heet je? · Waar woon je? · Hoe oud ben je? · Welke talen spreek je? · **Kan je even herhalen? · Kan je wat trager spreken? · Kan je het laatste woord spellen?** · Hoe schrijf je dat? · Met dubbele…? · Dank je wel! · Aangenaam!//',
    doc: (s, x, y, w, h) => {
      d.form(s, x, y, w, 2.35, 'FICHE · KENNISMAKING', ['Voornaam', 'Familienaam', 'Woonplaats', 'Leeftijd', 'Talen'], { color: BO });
      d.t(s, 'CARTES-IDENTITÉS (A)', x, y + 2.5, w, 0.3, { size: 11, bold: true, color: 'accent5', cs: 1 });
      [['Jeroen Wuyts', 'Ieper · 28 jaar', 'Nederlands en Engels'], ['Lieve Huysmans', 'Kortrijk · 35 jaar', 'Nederlands en Frans'], ['Bram Uyttendaele', 'Gent · 41 jaar', 'Nederlands en Duits']].forEach(([n, l, t], i) => {
        const cy = y + 2.85 + i * 0.8;
        d.rect(s, x, cy, w, 0.7, { fill: 'FFFFFF', line: BL, lw: 1.25, radius: 0.08 });
        d.ill(s, ['man', 'woman', 'man-office-worker'][i], x + 0.1, cy + 0.1, 0.5, 0.5);
        d.t(s, [`**${n}**`, `${l} · ${t}`], x + 0.7, cy, w - 0.8, 0.7, { size: 11, gap: 0, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 25 ticket
  d.ticket({
    g: 25,
    q: ['Demandez « Ça va ? » et répondez en renvoyant la balle.', 'Vous n’avez pas compris le nom de votre voisin·e. Que dites-vous ?', 'Écrivez 3 blocs pour vous présenter.'],
    self: ['Comprendre', 'Me présenter', 'Me dépanner'],
    teaser: { icon: 'FaBook', text: '**Devoir : mon carnet de blocs** — notez les blocs du jour + 3 nouveaux blocs cette semaine.' },
  });
}

module.exports = { meta, build };
