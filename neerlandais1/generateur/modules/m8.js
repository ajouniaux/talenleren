// Module 8 — Formeel of informeel? · Choisir le bon registre
const { K, BORDER, GHOST } = require('../lib');

const meta = { n: 8, slug: 'Formeel_of_informeel', title: 'Formeel of informeel? — Choisir le bon registre', short: 'Formeel of informeel?', template: 'module_8_formeel_informeel.md' };

const INF = '5B9BD5'; // informeel = bleu clair
const FOR = 'tx2'; // formeel = bleu nuit

function build(d) {
  // F / I badge
  const fi = (s, f, x, y, dd = 0.38) => { d.oval(s, x, y, dd, dd, { fill: f ? FOR : INF }); d.t(s, f ? 'F' : 'I', x, y, dd, dd, { size: Math.round(dd * 34), bold: true, color: 'bg1', align: 'center', valign: 'middle' }); };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Formeel of informeel?', sub: 'Choisir le bon registre', line: 'je of u?',
    visual: (s) => {
      [['handshake', '//Goedemorgen, meneer De Vos.//', 'formeel', 7.1, 'accent2'], ['people-hugging', '//Hoi Lia, ’t is al even geleden!//', 'informeel', 10.0, 'accent1']].forEach(([il, b, lab, x, c]) => {
        d.rect(s, x, 1.3, 2.7, 4.9, { fill: 'FFFFFF', line: null, radius: 0.12, shadow: true });
        d.chip(s, lab.toUpperCase(), x + 0.2, 1.45, c, 0.34, 12);
        d.ill(s, il, x + 0.45, 2.0, 1.8, 1.8);
        d.rect(s, x + 0.2, 4.05, 2.3, 1.9, { fill: c, tr: 85, line: c, lw: 1.25, radius: 0.2 });
        d.t(s, b, x + 0.3, 4.05, 2.1, 1.9, { size: 17, align: 'center', valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaSlidersH', h: 'Choisir', t: 'Je choisis //je// ou //u//… et je reste **cohérent**.', color: 'accent2' },
      { icon: 'FaCommentDots', h: 'Réagir', t: 'Je salue, je remercie, je m’excuse et je prends congé dans le bon registre.', color: 'accent1' },
      { icon: 'FaPhoneAlt', h: 'Demander', t: 'Je fais une demande polie, en face à face et au téléphone.', color: 'accent3' },
    ],
  });

  // ---------------------------------------------------------------- 3 deux scènes
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — deux scènes, deux registres' });
    const scenes = [
      ['FORMEEL · en réunion', FOR, 'office-building', ['//Goedemorgen, ##mevrouw Claes##.//', '//Hoe gaat het met ##u##?//', '//Goed, ##dank u##. En met ##u##?//'], 0.6],
      ['INFORMEEL · à la machine à café', INF, 'hot-beverage', ['//##Hoi Tom##!//', '//##Alles goed##?//', '//##Prima##, en met ##jou##?//'], 6.81],
    ];
    scenes.forEach(([h, c, il, lines, x]) => {
      d.rect(s, x, 1.7, 5.92, 5.15, { fill: c, tr: c === FOR ? 92 : 85, line: c, lw: 2 });
      d.rect(s, x, 1.7, 5.92, 0.6, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x + 0.25, 1.7, 5.0, 0.6, { size: 17, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      d.ill(s, il, x + 5.25, 1.75, 0.5, 0.5);
      lines.forEach((l, i) => {
        const left = i % 2 === 0; const bx = left ? x + 0.3 : x + 1.6; const y = 2.6 + i * 1.35;
        d.ill(s, left ? 'man-office-worker' : 'woman-office-worker', left ? x + 0.3 : x + 5.0, y + 0.1, 0.7, 0.7);
        d.rect(s, left ? x + 1.15 : x + 0.6, y, 4.25, 1.0, { fill: 'FFFFFF', line: c, lw: 1.25, radius: 0.2 });
        d.t(s, l, left ? x + 1.35 : x + 0.8, y, 3.9, 1.0, { size: 20, valign: 'middle' });
        void bx;
      });
    });
  }

  // ---------------------------------------------------------------- 4 table de mixage
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Les 6 curseurs du registre' });
    const rows = [
      ['Pronom', '//je / jij//', '//u//'], ['Verbe', '//werk je?//', '//werkt u?//'], ['Possessif', '//je / jouw//', '//uw//'],
      ['Salutation', '//Hoi! / Hallo!//', '//Goedemorgen, mevrouw…//'], ['Mots', '//job, vragen//', '//beroep, verzoeken//'], ['Clôture', '//Daag! / Groetjes//', '//Tot ziens / Met vriendelijke groet//'],
    ];
    d.rect(s, 0.6, 1.65, 12.13, 4.55, { fill: '2B3445', line: null });
    d.t(s, 'INFORMEEL', 3.0, 1.72, 3.0, 0.35, { size: 13, bold: true, color: INF, cs: 2 });
    d.t(s, 'FORMEEL', 9.0, 1.72, 3.5, 0.35, { size: 13, bold: true, color: 'F2C14E', cs: 2, align: 'right' });
    rows.forEach(([lab, a, b], i) => {
      const y = 2.15 + i * 0.66;
      d.t(s, lab, 0.8, y, 2.0, 0.55, { size: 16, bold: true, color: 'bg1', valign: 'middle' });
      d.t(s, a, 2.95, y, 2.7, 0.55, { size: 16, color: 'BFD7F0', valign: 'middle' });
      d.rect(s, 5.6, y + 0.22, 3.2, 0.11, { fill: '6B7A90', line: null, radius: 0.05 });
      d.rect(s, 8.35, y + 0.08, 0.42, 0.4, { fill: 'F2C14E', line: 'FFFFFF', lw: 1, radius: 0.06 });
      d.t(s, b, 8.95, y, 3.65, 0.55, { size: 16, bold: true, color: 'FFFFFF', valign: 'middle', fit: true, max: 16, min: 12 });
    });
    d.rect(s, 0.6, 6.35, 12.13, 0.52, { fill: 'accent1', line: null });
    d.t(s, 'Règle d’or : **tous les curseurs du même côté.** L’erreur typique, c’est de **mélanger**.', 0.85, 6.35, 11.7, 0.52, { size: 18, color: 'bg1', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 5 à qui dit-on u
  d.section('Comprendre');
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'À qui dit-on u ?' });
    const qs = ['Premier contact, client, administration ?', 'Supérieur ou personne plus âgée ?', 'Collègue, ami, enfant, famille ?'];
    const outs = [['**u**', FOR], ['**u** (au début)', FOR], ['**je**', INF]];
    qs.forEach((q, i) => {
      const y = 1.75 + i * 1.3;
      if (i < 2) d.line(s, 3.6, y + 1.0, 3.6, y + 1.28, { color: 'accent5', lw: 1.75 });
      if (i < 2) d.t(s, 'NON', 3.7, y + 0.98, 0.8, 0.3, { size: 12, bold: true, color: 'accent5' });
      s.addText(q, { shape: d.S.DIAMOND, x: 0.6, y, w: 6.0, h: 1.0, fill: { color: 'EEF3F8' }, line: { color: '17375E', width: 1.5 }, fontSize: 16, bold: true, color: '1B2333', align: 'center', valign: 'middle', margin: 0 });
      d.line(s, 6.62, y + 0.5, 7.6, y + 0.5, { color: 'accent3', lw: 2 });
      d.t(s, 'OUI', 6.7, y + 0.12, 0.8, 0.3, { size: 12, bold: true, color: 'accent3' });
      d.rect(s, 7.65, y + 0.12, 2.3, 0.76, { fill: outs[i][1], line: null });
      d.t(s, outs[i][0], 7.65, y + 0.12, 2.3, 0.76, { size: 22, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.card(s, 10.2, 1.75, 2.53, 3.4, { icon: 'FaLightbulb', head: 'Dans le doute', color: 'accent1', body: ['Commencez par //u//.', 'L’autre propose le //je//.'] });
    d.rect(s, 0.6, 5.75, 12.13, 1.1, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25 });
    d.ill(s, 'handshake', 0.85, 5.88, 0.85, 0.85);
    d.t(s, 'On passe au //je// quand l’autre le propose : **//Zeg maar je!//** = Tu peux me tutoyer !', 1.95, 5.75, 10.6, 1.1, { size: 21, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 6 saluer selon l'heure
  {
    const s = d.page({ g: 6, tag: 'VOCABULAIRE', title: 'Saluer selon le moment de la journée' });
    d.rect(s, 0.6, 1.72, 12.13, 0.95, { fill: 'bg2', line: BORDER });
    d.t(s, 'Passe-partout :', 0.85, 1.72, 2.4, 0.95, { size: 18, bold: true, color: 'tx2', valign: 'middle' });
    d.t(s, '**//Dag!//**', 3.2, 1.72, 1.3, 0.95, { size: 24, valign: 'middle' });
    fi(s, true, 4.45, 2.0); fi(s, false, 4.88, 2.0);
    d.t(s, '//Hallo! · Hoi!//', 6.1, 1.72, 2.6, 0.95, { size: 24, valign: 'middle' });
    fi(s, false, 8.55, 2.0);
    const segs = [['Goedemorgen', '→ 12 u', 'sunrise', 'F6C27E', '6 u'], ['Goedemiddag', '12 → 18 u', 'sun', 'F2D25A', '12 u'], ['Goedenavond', 'après 18 u', 'sunset', 'E3864E', '18 u'], ['Goedenacht', 'au coucher', 'night-with-stars', '3E4E7A', '22 u']];
    const tw = 12.13 / 4;
    segs.forEach(([g, t, il, c, h], i) => {
      const x = 0.6 + i * tw;
      d.rect(s, x, 3.6, tw, 0.42, { fill: c, line: null, radius: 0 });
      d.t(s, h, x, 4.05, 1.0, 0.3, { size: 12, color: 'accent5' });
      d.ill(s, il, x + tw / 2 - 0.42, 2.85, 0.84, 0.7);
      d.rect(s, x + 0.12, 4.5, tw - 0.24, 1.55, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.t(s, `//${g}//`, x + 0.12, 4.6, tw - 0.24, 0.75, { size: 24, bold: true, align: 'center', valign: 'middle', head: true });
      d.t(s, t, x + 0.12, 5.3, tw - 0.24, 0.5, { size: 16, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.t(s, '24 u', 12.13, 4.05, 0.6, 0.3, { size: 12, color: 'accent5', align: 'right' });
    d.t(s, '⚠ //Goedenacht// ne sert pas à saluer en arrivant : on le dit en partant le soir ou en allant dormir.', 0.6, 6.3, 12.13, 0.5, { size: 16, italic: true, color: 'accent6', align: 'center' });
  }

  // ---------------------------------------------------------------- 7 thermomètre
  {
    const s = d.page({ g: 7, tag: 'VOCABULAIRE', title: 'Hoe gaat het? — l’échelle des réponses' });
    const lv = [['Uitstekend!', 'star-struck', '2E7D4F'], ['Heel goed / Zeer goed', 'grinning-face-with-big-eyes', '5A9A4A'], ['Goed', 'slightly-smiling-face', '8DB04A'], ['Best goed / Vrij goed', 'smiling-face-with-smiling-eyes', 'C9B83C'], ['Het gaat.', 'neutral-face', 'E3A13B'], ['Niet zo goed.', 'confused-face', 'DD7A35'], ['Slecht.', 'face-with-thermometer', 'B83227']];
    const top = 1.72; const rh = 0.72;
    d.rect(s, 0.9, top, 0.5, rh * 7, { fill: 'bg2', line: BORDER, radius: 0.25 });
    lv.forEach(([t, il, c], i) => {
      const y = top + i * rh;
      d.rect(s, 0.98, y + 0.08, 0.34, rh - 0.16, { fill: c, line: null, radius: 0.1 });
      d.line(s, 1.45, y + rh / 2, 1.85, y + rh / 2, { color: c, lw: 2, arrow: false });
      d.ill(s, il, 1.95, y + 0.08, rh - 0.16, rh - 0.16);
      d.t(s, `//${t}//`, 2.65, y, 4.2, rh, { size: 20, bold: i === 0, valign: 'middle' });
    });
    d.bubble(s, '**Formeel** : //Goed, dank u. En met u?//', 7.3, 1.9, 5.43, 1.2, FOR, { size: 21 });
    d.bubble(s, '**Informeel** : //Prima! En met jou?//', 7.3, 3.35, 5.43, 1.2, INF, { size: 21, tr: 80 });
    d.rect(s, 7.3, 4.85, 5.43, 1.9, { fill: 'accent1', tr: 88, line: 'accent1', lw: 1.25 });
    d.t(s, ['**best goed** = plutôt bien (≠ « le meilleur »)', '//Het kan beter.// = Ça pourrait aller mieux.'], 7.55, 4.85, 5.0, 1.9, { size: 17, valign: 'middle', gap: 8 });
  }

  // ---------------------------------------------------------------- 8 prendre congé
  {
    const s = d.page({ g: 8, tag: 'VOCABULAIRE', title: 'Prendre congé' });
    [['INFORMEEL', INF, 'waving-hand', ['Daag!', 'Tot straks!', 'Tot morgen!', 'Tot de volgende!'], ['Salut !', 'À tout à l’heure !', 'À demain !', 'À la prochaine !'], 0.6],
      ['FORMEEL', FOR, 'handshake', ['Tot ziens!', 'Nog een prettige dag!', 'Tot binnenkort!', 'Een fijne avond nog!'], ['Au revoir !', 'Bonne journée !', 'À bientôt !', 'Bonne soirée !'], 6.81]].forEach(([h, c, il, nl, fr, x]) => {
      d.rect(s, x, 1.7, 5.92, 5.15, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, x, 1.7, 5.92, 1.1, { fill: c, line: null, radius: 0.08 });
      d.ill(s, il, x + 0.25, 1.8, 0.9, 0.9);
      d.t(s, h, x + 1.35, 1.7, 4.3, 1.1, { size: 26, bold: true, color: 'bg1', valign: 'middle', head: true, cs: 2 });
      nl.forEach((t, i) => {
        const y = 3.0 + i * 0.95;
        d.t(s, `//${t}//`, x + 0.35, y, 5.3, 0.55, { size: 24, bold: true, valign: 'middle' });
        d.t(s, fr[i], x + 0.35, y + 0.5, 5.3, 0.35, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      });
    });
  }

  // ---------------------------------------------------------------- 9 remercier / s'excuser
  {
    const s = d.page({ g: 9, tag: 'VOCABULAIRE', title: 'Remercier et s’excuser' });
    d.t(s, 'MERCI', 0.6, 1.7, 3, 0.4, { size: 15, bold: true, color: 'accent3', cs: 2 });
    d.ill(s, 'folded-hands', 0.6, 2.15, 1.1, 1.1);
    [['Merci!', '(BE, inf.)', 0], ['Bedankt! · Dank je wel!', '(inf.)', 1], ['Dank u wel!', '(formel)', 2]].forEach(([t, n, i]) => {
      const x = 1.95 + i * 2.75; const y = 2.65 - i * 0.28;
      d.rect(s, x, y, 2.6, 0.95 + i * 0.28, { fill: i === 2 ? FOR : i === 1 ? INF : 'BFD7F0', line: null });
      d.t(s, `**//${t}//**`, x + 0.1, y + 0.05, 2.4, 0.6 + i * 0.28, { size: 18, color: i === 0 ? 'tx2' : 'bg1', align: 'center', valign: 'middle', fit: true, max: 18, min: 13 });
      d.t(s, n, x + 0.1, y + 0.6 + i * 0.28, 2.4, 0.32, { size: 12, italic: true, color: i === 0 ? 'tx2' : 'bg1', align: 'center' });
    });
    d.rect(s, 10.3, 2.37, 2.43, 1.23, { fill: 'accent3', tr: 85, line: 'accent3', lw: 1.5 });
    d.t(s, ['↩ //Graag gedaan!//', '//Geen probleem!//'], 10.4, 2.37, 2.25, 1.23, { size: 16, valign: 'middle', gap: 2, align: 'center' });
    d.line(s, 0.6, 4.0, 12.73, 4.0, { color: BORDER, lw: 1, arrow: false });
    d.t(s, 'PARDON', 0.6, 4.15, 3, 0.4, { size: 15, bold: true, color: 'accent6', cs: 2 });
    d.ill(s, 'flushed-face', 0.6, 4.6, 1.1, 1.1);
    [['Sorry! · Excuseer! (BE)', 'pardon, désolé'], ['Pardon!', 'pour passer, interpeller'], ['Het spijt me.', 'je suis désolé·e']].forEach(([t, fr], i) => {
      const x = 1.95 + i * 3.6;
      d.rect(s, x, 4.65, 3.4, 1.15, { fill: 'bg2', line: BORDER, shadow: true });
      d.t(s, `**//${t}//**`, x + 0.1, 4.68, 3.2, 0.65, { size: 19, align: 'center', valign: 'middle', fit: true, max: 19, min: 14 });
      d.t(s, fr, x + 0.1, 5.3, 3.2, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
    });
    d.rect(s, 0.6, 6.1, 12.13, 0.75, { fill: 'accent1', tr: 88, line: 'accent1', lw: 1 });
    d.t(s, '//Dank u wel, ik wens u een fijne dag!// = Merci, je vous souhaite une bonne journée ! (formel)', 0.85, 6.1, 11.7, 0.75, { size: 17, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 10 demander poliment
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'Demander poliment' });
    const f = [['Mag ik iets vragen?', 'Puis-je poser une question ?', 'FaQuestion', FOR], ['Kunt u me helpen, alstublieft?', 'Pouvez-vous m’aider, s’il vous plaît ?', 'FaHandsHelping', FOR], ['Kun je me helpen?', 'Tu peux m’aider ?', 'FaHandsHelping', INF], ['Ik wil **graag** een afspraak maken.', 'Je voudrais prendre rendez-vous.', 'FaCalendarAlt', 'accent1']];
    f.forEach(([nl, fr, ic, c], i) => {
      const y = 1.72 + i * 1.29;
      d.rect(s, 0.6, y, 6.6, 1.12, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.iconDisc(s, ic, 0.78, y + 0.2, 0.72, c);
      d.t(s, `//${nl}//`, 1.7, y + 0.05, 5.4, 0.62, { size: 20, bold: true, valign: 'middle' });
      d.t(s, fr, 1.7, y + 0.62, 5.4, 0.4, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.trap(s, 7.5, 1.72, 5.23, 3.6, '« Je veux un café » → //Ik wil een koffie.// {{(brusque)}}', '//Ik wil **graag** een koffie.//\n//Een koffie, alstublieft.//', { size: 19 });
    d.rect(s, 7.5, 5.55, 5.23, 1.3, { fill: 'bg2', line: BORDER });
    d.t(s, ['//alstublieft// = s’il vous plaît (poli)', '//alsjeblieft// = s’il te plaît (familier)'], 7.7, 5.55, 4.9, 1.3, { size: 17, valign: 'middle', gap: 6 });
  }

  // ---------------------------------------------------------------- 11 paires
  {
    const s = d.page({ g: 11, tag: 'VOCABULAIRE', title: 'Les mots qui changent de registre' });
    const pairs = [['meedoen', 'deelnemen', 'participer'], ['vragen', 'verzoeken', 'demander'], ['vertellen', 'meedelen', 'communiquer'], ['helaas', 'tot onze spijt', 'malheureusement'], ['job', 'beroep / functie', 'métier'], ['Groetjes', 'Met vriendelijke groet', 'salutations']];
    d.t(s, 'INFORMEEL', 0.6, 1.65, 3.6, 0.35, { size: 13, bold: true, color: INF, cs: 2, align: 'center' });
    d.t(s, 'FORMEEL', 8.63, 1.65, 4.1, 0.35, { size: 13, bold: true, color: 'tx2', cs: 2, align: 'center' });
    pairs.forEach(([a, b, fr], i) => {
      const y = 2.0 + i * 0.74;
      d.line(s, 4.2, y + 0.32, 8.63, y + 0.32, { color: GHOST, lw: 1.5, arrow: false });
      d.rect(s, 0.6, y, 3.6, 0.64, { fill: INF, line: null, radius: 0.32 });
      d.t(s, `//${a}//`, 0.6, y, 3.6, 0.64, { size: 21, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.rect(s, 8.63, y, 4.1, 0.64, { fill: FOR, line: null, radius: 0.32 });
      d.t(s, `//${b}//`, 8.63, y, 4.1, 0.64, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle', fit: true, max: 20, min: 15 });
      d.rect(s, 5.0, y + 0.08, 2.83, 0.48, { fill: 'FFFFFF', line: BORDER, radius: 0.24 });
      d.t(s, fr, 5.0, y + 0.08, 2.83, 0.48, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.t(s, 'Les mots formels servent surtout à l’**écrit** (mails, lettres : M10). //Ik neem deel// : verbe à particule (M3).', 0.6, 6.95 - 0.5, 12.13, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 12 piège mélange
  {
    const s = d.page({ g: 12, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : ne pas mélanger' });
    d.rect(s, 0.6, 1.7, 12.13, 5.15, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    d.icon(s, 'FaTimesCircle', 'accent6', 0.95, 2.48, 0.45);
    d.t(s, '//Goedemorgen mevrouw Claes, hoe gaat het met {{je}}? Kunt u {{je}} adres geven?//', 1.6, 2.3, 10.9, 0.85, { size: 22, valign: 'middle' });
    d.icon(s, 'FaArrowDown', 'accent6', 6.45, 3.25, 0.4);
    [['FORMEEL', FOR, '//Goedemorgen mevrouw Claes, hoe gaat het met <<u>>? Kunt u <<uw>> adres geven?//'], ['INFORMEEL', INF, '//Hoi Lies, hoe gaat het met <<je>>? Kun <<je>> <<je>> adres geven?//']].forEach(([h, c, t], i) => {
      const y = 3.8 + i * 1.45;
      d.rect(s, 0.9, y, 11.53, 1.25, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25 });
      d.chip(s, h, 1.1, y + 0.42, c, 0.4, 13);
      d.icon(s, 'FaCheckCircle', 'accent3', 2.55, y + 0.42, 0.4);
      d.t(s, t, 3.15, y, 9.1, 1.25, { size: 21, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 13 téléphone
  {
    const s = d.page({ g: 13, tag: 'MISE EN SITUATION', title: 'Au téléphone' });
    d.rect(s, 0.9, 1.65, 6.9, 5.2, { fill: '1B2333', line: null, radius: 0.25 });
    d.rect(s, 1.05, 1.95, 6.6, 4.6, { fill: 'F4F7FB', line: null, radius: 0.08 });
    d.rect(s, 3.85, 1.75, 1.0, 0.1, { fill: '4A5A70', line: null, radius: 0.05 });
    const lines = [['//Peeters & Co, goedemorgen.//', true], ['//Goedemorgen, u spreekt met Karim Benali. Mag ik mevrouw Claes spreken?//', false], ['//Een ogenblik, alstublieft.//', true]];
    let y = 2.1;
    lines.forEach(([t, them]) => {
      const h = them ? 0.8 : 1.3;
      d.ill(s, them ? 'woman-office-worker' : 'man-office-worker', them ? 1.15 : 6.9, y + h / 2 - 0.3, 0.6, 0.6);
      d.rect(s, them ? 1.85 : 2.0, y, 4.8, h, { fill: them ? FOR : 'accent3', line: null, radius: 0.18 });
      d.t(s, t, (them ? 1.85 : 2.0) + 0.15, y, 4.5, h, { size: 18, color: 'bg1', valign: 'middle' });
      y += h + 0.28;
    });
    d.card(s, 8.15, 1.65, 4.58, 5.2, { icon: 'FaLifeRing', head: 'Phrases de survie', color: 'accent1', body: ['//Met wie spreek ik?//', '//Kunt u dat herhalen?//', '//Kunt u wat trager spreken?//', '//Ik bel later terug.//', '**U spreekt met…** = C’est … à l’appareil.'], size: 19, gap: 12 });
  }

  // ---------------------------------------------------------------- 14 carte du registre
  {
    const s = d.page({ g: 14, tag: 'À RETENIR', title: 'À retenir : la carte du registre' });
    d.table(s, [
      ['', 'Informeel', 'Formeel'],
      ['**saluer**', '//Hoi! · Hallo!//', '//Goedemorgen, mevrouw…//'],
      ['**ça va ?**', '//Alles goed?//', '//Hoe gaat het met u?//'],
      ['**répondre**', '//Prima, en met jou?//', '//Goed, dank u. En met u?//'],
      ['**demander**', '//Kun je…?//', '//Kunt u…, alstublieft?//'],
      ['**remercier**', '//Merci! · Bedankt!//', '//Dank u wel.//'],
      ['**s’excuser**', '//Sorry!//', '//Excuseer. · Het spijt me.//'],
      ['**partir**', '//Daag! · Tot straks!//', '//Tot ziens! · Nog een prettige dag!//'],
    ], { x: 0.6, y: 1.7, w: 12.13, colW: [2.4, 4.3, 5.43], size: 19, headSize: 16, rowH: 0.6, headColors: ['accent5', INF, FOR], cellFill: (r, c) => (c === 0 ? 'bg2' : c === 1 ? 'EAF2FB' : 'E6EBF2') });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 15 divider
  d.divider({ g: 15, tiles: [
    ['Formel ou informel ?', '★', 'FaBalanceScale'], ['Les paires', '★', 'FaLink'], ['Que dites-vous ?', '★★', 'FaCommentDots'], ['Familier → poli', '★★', 'FaExchangeAlt'],
    ['Le détective', '★★', 'FaSearch'], ['Une journée au bureau', '★★★', 'FaBuilding'], ['Au téléphone', '★★★', 'FaPhoneAlt'],
  ] });

  // ---------------------------------------------------------------- 16 ex1 formel ou informel
  const ex1 = [['een rapport opstellen', 'memo', 1], ['met de directeur praten', 'man-office-worker', 1], ['een klachtenbrief schrijven', 'angry-face', 1], ['een e-mail naar je neef sturen', 'e-mail', 0], ['een sms’je sturen', 'mobile-phone', 0], ['met vrienden praten', 'people-hugging', 0], ['een klant opbellen', 'telephone-receiver', 1], ['met je collega lunchen', 'sandwich', 0]];
  d.ex({ g: 16, title: 'Exercice 1 — Formel ou informel ?', stars: '★', instr: 'Classez les situations.' }, (s, mode, top) => {
    if (mode === 'q') {
      ex1.forEach(([t, il], i) => {
        const x = 0.6 + (i % 4) * 3.07; const y = top + Math.floor(i / 4) * 1.05;
        d.rect(s, x, y, 2.9, 0.9, { fill: 'bg1', line: 'accent5', lw: 1.25, shadow: true });
        d.ill(s, il, x + 0.1, y + 0.17, 0.56, 0.56);
        d.t(s, `//${t}//`, x + 0.75, y, 2.1, 0.9, { size: 15, valign: 'middle' });
      });
    }
    const cy = mode === 'q' ? top + 2.25 : top + 0.1; const h = 6.88 - cy;
    [['FORMEEL', FOR, 1, 0.6], ['INFORMEEL', INF, 0, 6.75]].forEach(([lab, c, f, x]) => {
      d.rect(s, x, cy, 5.98, h, { fill: c, tr: 90, line: c, lw: 2 });
      d.rect(s, x, cy, 5.98, 0.55, { fill: c, line: null, radius: 0.08 });
      d.t(s, lab, x, cy, 5.98, 0.55, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      if (mode === 'a') ex1.filter((e) => e[2] === f).forEach(([t, il], k) => {
        const y = cy + 0.75 + k * 1.0;
        d.ill(s, il, x + 0.3, y + 0.1, 0.6, 0.6);
        d.t(s, `//${t}//`, x + 1.1, y, 4.7, 0.8, { size: 20, valign: 'middle' });
      });
    });
  });

  // ---------------------------------------------------------------- 17 ex2 paires
  const L = ['meedoen', 'vragen', 'vertellen', 'helaas', 'job', 'Groetjes'];
  const R = ['Met vriendelijke groet', 'meedelen', 'deelnemen', 'beroep', 'tot onze spijt', 'verzoeken'];
  const sol = [2, 5, 1, 4, 3, 0];
  d.ex({ g: 17, title: 'Exercice 2 — Les paires de registre', stars: '★', instr: 'Associez le mot familier (1–6) et le mot soutenu (a–f).' }, (s, mode, top) => {
    const rh = (6.88 - top - 0.1) / 6;
    if (mode === 'a') sol.forEach((r, i) => d.line(s, 4.15, top + i * rh + rh / 2, 8.1, top + r * rh + rh / 2, { color: 'tx2', lw: 2.25 }));
    L.forEach((w, i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.08, 3.5, rh - 0.16, { fill: INF, line: null, radius: 0.3 });
      d.t(s, `**${i + 1}**   //${w}//`, 0.8, y + 0.08, 3.2, rh - 0.16, { size: 20, color: 'bg1', valign: 'middle' });
    });
    R.forEach((w, i) => {
      const y = top + i * rh;
      d.rect(s, 8.15, y + 0.08, 4.58, rh - 0.16, { fill: 'bg1', line: FOR, lw: 2, radius: 0.3 });
      d.t(s, `**${'abcdef'[i]}**   //${w}//`, 8.35, y + 0.08, 4.3, rh - 0.16, { size: 20, valign: 'middle' });
    });
    if (mode === 'a') d.t(s, '1c · 2f · 3b · 4e · 5d · 6a', 4.4, 6.88 - 0.45, 3.5, 0.4, { size: 16, bold: true, color: 'accent3', align: 'center' });
  });

  // ---------------------------------------------------------------- 18 ex3 que dites-vous
  const ex3 = [
    ['Vous rencontrez un nouveau collègue.', 'handshake', 'Dag, ik ben Karim. Aangenaam!', 0],
    ['Au restaurant, vous demandez l’addition.', 'receipt', 'Mag ik de rekening, alstublieft?', 1],
    ['À la boulangerie, vous voulez un pain.', 'bread', 'Een brood, alstublieft.', 1],
    ['Votre voisin vous aide.', 'hammer', 'Dank je wel, dat is vriendelijk!', 0],
    ['Vous saluez votre professeur le matin.', 'woman-teacher', 'Goedemorgen, mevrouw!', 1],
    ['Vous demandez le chemin dans la rue.', 'world-map', 'Pardon, waar is het station?', 1],
    ['Vous demandez des congés à votre cheffe.', 'beach-with-umbrella', 'Mag ik volgende week verlof nemen?', 1],
    ['Vous bousculez quelqu’un dans un magasin.', 'collision', 'Oei, sorry! / Excuseer!', 0],
  ];
  d.ex({ g: 18, title: 'Exercice 3 — Que dites-vous ?', stars: '★★', instr: 'Que dites-vous en néerlandais ? Choisissez le bon registre.' }, (s, mode, top) => {
    const ch = (6.88 - top - 0.2) / 2;
    ex3.forEach(([fr, il, nl, f], i) => {
      const x = 0.6 + (i % 4) * 3.07; const y = top + Math.floor(i / 4) * (ch + 0.2);
      d.rect(s, x, y, 2.9, ch, { fill: 'bg1', line: BORDER, shadow: true });
      d.num(s, i + 1, x + 0.12, y + 0.12, 0.4, 'accent1', 13);
      d.ill(s, il, x + 2.25, y + 0.08, 0.55, 0.55);
      d.t(s, fr, x + 0.15, y + 0.62, 2.6, 0.72, { size: 14, valign: 'top' });
      if (mode === 'a') {
        fi(s, f, x + 0.62, y + 0.14, 0.36);
        d.rect(s, x + 0.1, y + ch - 0.82, 2.7, 0.74, { fill: f ? FOR : INF, tr: 85, line: f ? FOR : INF, lw: 1, radius: 0.15 });
        d.t(s, `//${nl}//`, x + 0.2, y + ch - 0.82, 2.5, 0.74, { size: 14, bold: true, color: 'tx1', valign: 'middle', align: 'center', fit: true, max: 15, min: 11 });
      } else d.line(s, x + 0.2, y + ch - 0.35, x + 2.7, y + ch - 0.35, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
    });
  });

  // ---------------------------------------------------------------- 19 ex4 familier → poli
  const ex4 = [['Hoi Tom, kun je me helpen?', 'Goedemorgen meneer Peeters, kunt u me helpen?'], ['Heb je even tijd?', 'Hebt u even tijd?'], ['Wil je een koffie?', 'Wilt u een koffie?'], ['Hoe gaat het met je?', 'Hoe gaat het met u?'], ['Wat is je adres?', 'Wat is uw adres?'], ['Groetjes, Karim', 'Met vriendelijke groet, Karim Benali'], ['Ik wil een afspraak.', 'Ik wil graag een afspraak maken.'], ['Daag!', 'Tot ziens!']];
  d.ex({ g: 19, title: 'Exercice 4 — Familier → poli', stars: '★★', instr: 'Rendez chaque phrase formelle : tous les curseurs à droite !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 8;
    ex4.forEach(([a, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.36) / 2, 0.36, 'accent5', 12);
      d.rect(s, 1.05, y + 0.04, 3.6, rh - 0.1, { fill: INF, tr: 80, line: INF, lw: 1 });
      d.t(s, `//${a}//`, 1.2, y + 0.04, 3.4, rh - 0.1, { size: 17, valign: 'middle' });
      d.line(s, 4.7, y + rh / 2 - 0.02, 5.35, y + rh / 2 - 0.02, { color: 'accent1', lw: 2.5 });
      d.rect(s, 5.4, y + 0.04, 7.33, rh - 0.1, { fill: mode === 'a' ? 'E6EBF2' : 'bg1', line: FOR, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${b}//`, 5.55, y + 0.04, 7.1, rh - 0.1, { size: 17, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 20 ex5 détective
  d.ex({ g: 20, title: 'Exercice 5 — Le détective du registre', stars: '★★', instr: 'Léa écrit à mevrouw Claes. Trouvez les 4 erreurs de registre.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    ['E2725B', 'F2C14E', '5FA77A'].forEach((c, k) => d.oval(s, 0.8 + k * 0.28, top + 0.17, 0.16, 0.16, { fill: c }));
    d.t(s, 'Aan: mevrouw Claes · Onderwerp: Vergadering', 1.8, top, 7.6, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = [
      '//Beste mevrouw Claes,//',
      '//Hoe gaat het met {{je}}++ u++? Ik stuur u de documenten voor de vergadering. {{Kun je}}++ Kunt u++ ze vandaag lezen? Uw collega Tom heeft {{je}}++ uw++ adres niet.//',
      '//{{Groetjes}}++ Met vriendelijke groet++,//', '//Léa//',
    ];
    d.t(s, txt, 0.95, top + 0.7, 8.4, h - 0.9, { size: 21, mode, gap: 10 });
    d.ill(s, 'magnifying-glass-tilted-left', 10.35, top + 0.2, 1.6, 1.6);
    d.rect(s, 9.9, top + 2.1, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '4 erreurs ?' : '4 erreurs ✓', 9.9, top + 2.1, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //Ik stuur u… · Uw collega// sont corrects.', 9.9, top + 3.2, 2.83, 1.2, { size: 15, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 21 ex6 journée au bureau
  const day = [['8 u 30', 'eight-thirty', 'Vous arrivez et saluez tous vos collègues.', 'Goedemorgen allemaal!'], ['9 u', 'nine-oclock', 'Vous arrivez en retard à une réunion avec la directrice.', 'Sorry, ik ben te laat. Excuseer, mevrouw.'], ['12 u 30', 'twelve-thirty', 'Un collègue vous propose de déjeuner ensemble.', 'Ja, graag! Goed idee!'], ['17 u 30', 'five-thirty', 'Vous partez et souhaitez une bonne soirée.', 'Tot morgen! Nog een fijne avond!']];
  d.ex({ g: 21, title: 'Exercice 6 — Une journée au bureau', stars: '★★★', instr: 'Que dites-vous à chaque moment de la journée ?' }, (s, mode, top) => {
    d.line(s, 0.6, top + 0.45, 12.73, top + 0.45, { color: 'accent1', lw: 3 });
    const w = (12.13 - 3 * 0.25) / 4;
    day.forEach(([h, il, fr, nl], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.oval(s, x + w / 2 - 0.45, top, 0.9, 0.9, { fill: 'bg1', line: 'accent1', lw: 2.5 });
      d.ill(s, il, x + w / 2 - 0.33, top + 0.12, 0.66, 0.66);
      d.t(s, h, x, top + 0.95, w, 0.4, { size: 18, bold: true, color: 'accent1', align: 'center' });
      d.rect(s, x, top + 1.45, w, 1.55, { fill: 'bg2', line: BORDER });
      d.t(s, fr, x + 0.15, top + 1.45, w - 0.3, 1.55, { size: 16, valign: 'middle', align: 'center' });
      const by = top + 3.2; const bh = 6.88 - by;
      d.rect(s, x, by, w, bh, { fill: mode === 'a' ? 'EDF6F0' : 'FFFFFF', line: mode === 'a' ? 'accent3' : 'accent5', lw: 1.5, radius: 0.2, dash: mode === 'a' ? undefined : 'dash' });
      if (mode === 'a') d.t(s, `//${nl}//`, x + 0.15, by, w - 0.3, bh, { size: 19, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
      else d.icon(s, 'FaCommentDots', 'B8C2CF', x + w / 2 - 0.3, by + bh / 2 - 0.3, 0.6);
    });
  });

  // ---------------------------------------------------------------- 22 ex7 téléphone
  d.roleplay({
    g: 22, title: 'Exercice 7 — Au téléphone : l’absence',
    a: '**Vous** appelez l’école de langues : vous ne pouvez pas venir au cours aujourd’hui (vous êtes malade).',
    b: '**Vous êtes au secrétariat** : vous notez le nom, le groupe et la raison.',
    bank: '//Goedemorgen, u spreekt met… · Ik ben cursist in de groep van mevrouw Peeters. · Ik kan vandaag niet naar de les komen. · Ik ben ziek. · Met wie spreek ik? · Kunt u dat spellen? · Ik geef het door. · Beterschap!//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x + 0.6, y, w - 1.2, h, { fill: '1B2333', line: null, radius: 0.3 });
      d.rect(s, x + 0.75, y + 0.35, w - 1.5, h - 0.7, { fill: 'F4F7FB', line: null, radius: 0.06 });
      d.ill(s, 'telephone-receiver', x + w / 2 - 0.7, y + 0.7, 1.4, 1.4);
      d.ill(s, 'face-with-thermometer', x + w / 2 - 0.55, y + 2.35, 1.1, 1.1);
      d.t(s, '//Beterschap!//', x + 0.75, y + 3.6, w - 1.5, 0.5, { size: 20, bold: true, color: 'accent3', align: 'center' });
      d.t(s, 'Bon rétablissement !', x + 0.75, y + 4.05, w - 1.5, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
    },
  });

  // ---------------------------------------------------------------- 23 ticket
  d.ticket({
    g: 23,
    q: ['Rendez poli : //Kun je je naam spellen?//', 'Comment dire « Je voudrais un rendez-vous » ?', 'Formel ou informel : //Groetjes, Lies// ?'],
    self: ['Choisir', 'Réagir', 'Demander'],
    teaser: { icon: 'GiSteamLocomotive', text: '**Volgende keer : Zinnen verbinden** — //want// of //omdat//?' },
  });
}

module.exports = { meta, build };
