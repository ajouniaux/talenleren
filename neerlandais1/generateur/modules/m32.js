// Module 32 — Even voorstellen · Se présenter au travail (bilan du parcours)
const { BORDER } = require('../lib');

const meta = { n: 32, slug: 'Even_voorstellen', title: 'Even voorstellen — Se présenter au travail', short: 'Even voorstellen', template: 'module_32_even_voorstellen.md' };

const PR = 'accent2'; // présent = bleu  ^^…^^
const PA = 'accent4'; // passé = framboise  %%…%%
const FU = 'accent3'; // futur, souhait = vert  <<…>>
const PP = 'accent1'; // prépositions = orange  ##…##

function build(d) {
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const trapFrame = (s, h = 4.35) => {
    d.rect(s, 0.6, 1.7, 12.13, h, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
  };
  // les 5 étapes du pitch (S29)
  const STEPS = [['Wie ben ik?', 'présent', PR, 'Ik ben Karim Benali. Ik kom uit Namen.'], ['Wat doe ik?', 'présent', PR, 'Ik werk als boekhouder bij Peeters & Co.'], ['Wat heb ik gedaan?', 'passé', PA, 'Ik heb economie gestudeerd. Daarna werkte ik bij Maesbouw.'], ['Wat wil ik?', 'futur, souhait', FU, 'Volgend jaar ga ik een opleiding volgen. Later zou ik graag een team leiden.'], ['En privé?', 'loisirs', 'accent5', 'In mijn vrije tijd kook ik graag.']];
  const stones = (s, x, y, w, h, o = {}) => {
    const n = STEPS.length; const gap = 0.14; const sw = (w - (n - 1) * gap) / n;
    d.line(s, x + 0.2, y + 0.42, x + w - 0.2, y + 0.42, { color: 'accent5', lw: 2, dash: 'dash' });
    STEPS.forEach(([q, tense, c, ex], i) => {
      const sx = x + i * (sw + gap);
      d.num(s, i + 1, sx + sw / 2 - 0.42, y, 0.84, c, 22);
      d.rect(s, sx, y + 0.95, sw, h - 0.95, { fill: c, tr: 90, line: c, lw: 1.75, radius: 0.12 });
      d.t(s, `//**${q}**//`, sx + 0.08, y + 1.0, sw - 0.16, 0.55, { size: o.small ? 13 : 17, color: c, align: 'center', valign: 'middle' });
      if (!o.small) {
        d.chip(s, tense, sx + sw / 2 - 0.65, y + 1.58, c, 0.3, 10);
        d.t(s, `//${ex}//`, sx + 0.1, y + 1.98, sw - 0.2, h - 2.05, { size: 14, align: 'center', valign: 'middle' });
      }
    });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Even voorstellen', sub: 'Se présenter au travail', line: 'Ik ben Karim Benali, boekhouder bij Peeters & Co.',
    visual: (s) => {
      d.rect(s, 8.1, 0.55, 0.12, 0.7, { fill: 'accent1', line: null, radius: 0 });
      d.rect(s, 9.9, 0.55, 0.12, 0.7, { fill: 'accent1', line: null, radius: 0 });
      d.rect(s, 7.4, 1.15, 3.35, 3.55, { fill: 'FFFFFF', line: null, radius: 0.2, shadow: true });
      d.rect(s, 7.4, 1.15, 3.35, 0.75, { fill: 'accent1', line: null, radius: 0.2 });
      d.t(s, 'HALLO, IK BEN', 7.4, 1.15, 3.35, 0.75, { size: 16, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      d.ill(s, 'man-office-worker', 8.47, 2.0, 1.2, 1.2);
      d.t(s, ['**Karim Benali**', 'Boekhouder', 'Peeters & Co'], 7.5, 3.25, 3.15, 1.35, { size: 17, gap: 1, align: 'center', valign: 'middle', color: 'tx2' });
      d.rect(s, 10.95, 1.35, 2.1, 0.8, { fill: 'FFFFFF', line: 'accent3', lw: 2.5, radius: 0.25 });
      d.poly(s, [[11.15, 2.1], [11.0, 2.45], [11.5, 2.12]], { fill: 'FFFFFF', line: null });
      d.t(s, '//**Aangenaam!**//', 10.95, 1.35, 2.1, 0.8, { size: 19, color: 'accent3', align: 'center', valign: 'middle' });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaIdBadge', h: 'Me présenter', t: 'Je dis qui je suis et ce que je fais : //Ik werk als boekhouder bij Peeters & Co.//', color: PR },
      { icon: 'FaHistory', h: 'Mon parcours', t: 'Je raconte mon parcours et mes projets : //Daarvoor werkte ik bij Maesbouw.//', color: PA },
      { icon: 'FaComments', h: 'M’adapter', t: 'J’adapte ma présentation : collègue, entretien, réseau, e-mail.', color: FU },
    ],
    band: 'Module de synthèse du parcours. Tâche finale : un entretien d’embauche en néerlandais.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — 30 secondes' });
    const S = [['hot-beverage', 'Aan de koffieautomaat', 'un·e nouveau·elle collègue', 'je'], ['briefcase', 'Een sollicitatiegesprek', 'un entretien d’embauche', 'u'], ['laptop', 'Een online vergadering', 'un client', 'u']];
    const w = (12.13 - 2 * 0.25) / 3;
    S.forEach(([il, nl, fr, reg], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 3.5, { fill: 'FFFFFF', line: 'accent2', lw: 1.75, radius: 0.12, shadow: true });
      d.ill(s, il, x + w / 2 - 0.65, 1.9, 1.3, 1.3);
      d.t(s, `//**${nl}**//`, x + 0.15, 3.3, w - 0.3, 0.6, { size: 19, align: 'center', valign: 'middle', color: 'tx2' });
      d.t(s, fr, x + 0.15, 3.9, w - 0.3, 0.45, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, 'je ou u ?', x + w / 2 - 0.8, 4.5, 1.6, 0.45, { size: 15, bold: true, color: 'accent1', align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.45, 12.13, 1.35, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'stopwatch', 0.85, 5.65, 0.95, 0.95);
    d.t(s, ['Vous avez **30 secondes** : que dites-vous ?', 'En binôme, essayez les trois situations. On garde vos phrases pour la diapo suivante.'], 2.0, 5.45, 10.5, 1.35, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 du M2 au pitch
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Du M2 au pitch' });
    d.rect(s, 0.6, 1.7, 3.9, 3.9, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.chip(s, 'M2', 0.8, 1.85, 'accent5', 0.36, 13);
    d.t(s, ['//Ik ben Karim.//', '//Ik ben boekhouder.//', '//Ik woon in Namen.//', '//Ik spreek Frans.//'], 0.85, 2.35, 3.5, 3.1, { size: 20, gap: 10, color: 'accent5', valign: 'middle' });
    d.line(s, 4.65, 3.65, 5.35, 3.65, { color: 'accent1', lw: 4 });
    d.rect(s, 5.5, 1.7, 7.23, 3.9, { fill: 'FFFFFF', line: 'accent1', lw: 2, radius: 0.12, shadow: true });
    d.chip(s, 'M32', 5.7, 1.85, 'accent1', 0.36, 13);
    d.t(s, '//Ik ben Karim Benali **^^en^^** ik werk **^^sinds^^** januari als boekhouder bij Peeters & Co. **^^Daarvoor^^** **%%werkte%%** ik vijf jaar bij Maesbouw. Ik woon in Namen, **^^maar^^** ik werk in Brussel. Ik spreek Frans en Nederlands, **^^want^^** ik werk met Vlaamse klanten.//', 5.75, 2.35, 6.75, 3.1, { size: 19, ls: 1.15, valign: 'middle' });
    band(s, 'Ce qui change : les **mots de liaison** (//en, maar, want//, M9), le **passé** (//werkte//, M19), les repères //sinds, daarvoor//', 5.85, 0.95, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 5 S29 le pitch en 5 étapes
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Le pitch en 5 étapes' });
    stones(s, 0.6, 1.65, 12.13, 4.2);
    band(s, 'En serrant la main : //**Aangenaam!**// · pour finir : //Leuk je te leren kennen!// — un bon pitch dure de 30 secondes à 1 minute', 6.05, 0.75, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 6 carte de visite
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'Ma fonction : la carte de visite' });
    d.rect(s, 0.6, 1.65, 12.13, 4.3, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.15, shadow: true });
    d.rect(s, 0.6, 1.65, 0.18, 4.3, { fill: PP, line: null, radius: 0 });
    const R = [['bij', 'l’entreprise', 'Ik werk **##bij##** Peeters & Co.'], ['op', 'le service', 'Ik werk **##op##** de boekhouding. (aussi : **##bij##** de personeelsdienst)'], ['als', 'la fonction', 'Ik werk **##als##** boekhouder. · Ik ben boekhouder. (sans //een//)'], ['in', 'la ville, le secteur', 'Ik werk **##in##** Brussel, **##in##** de bouwsector.'], ['voor', 'la responsabilité, le client', 'Ik ben verantwoordelijk **##voor##** de facturatie.']];
    R.forEach(([p, h, ex], i) => {
      const y = 1.85 + i * 0.8;
      d.rect(s, 1.05, y, 1.3, 0.65, { fill: PP, line: null, radius: 0.1 });
      d.t(s, `**${p}**`, 1.05, y, 1.3, 0.65, { size: 22, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `+ ${h}`, 2.5, y, 2.6, 0.65, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${ex}//`, 5.1, y, 7.5, 0.65, { size: 18, valign: 'middle' });
    });
    band(s, 'Le français dit « **chez** Peeters », « **comme** comptable », « responsable **de** » : trois pièges en une phrase !', 6.15, 0.68, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 7 mes tâches
  {
    const s = d.page({ g: 7, tag: 'VOCABULAIRE', title: 'Mes tâches' });
    const F = [['Ik ben verantwoordelijk **voor** de facturatie.', 'je suis responsable de'], ['Ik zorg **voor** de planning.', 'je m’occupe de'], ['Ik hou **me** bezig **met** de lonen.', 's’occuper de (M28, M11)'], ['Ik sta in **voor** de klantendienst.', 'être en charge de (BE)']];
    const cw = (12.13 - 0.25) / 2;
    F.forEach(([nl, fr], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.25); const y = 1.7 + Math.floor(i / 2) * 1.2;
      d.rect(s, x, y, cw, 1.05, { fill: 'EAF2FB', line: PR, lw: 1.5, radius: 0.1 });
      d.t(s, [`//${nl}//`, fr], x + 0.25, y, cw - 0.4, 1.05, { size: 18, gap: 2, valign: 'middle' });
    });
    d.t(s, 'MES TÂCHES', 0.6, 4.2, 6, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2 });
    const T = [['e-mail', 'Ik beantwoord e-mails.'], ['receipt', 'Ik maak offertes.'], ['handshake', 'Ik ontvang klanten.'], ['spiral-calendar', 'Ik plan vergaderingen.']];
    const tw = (12.13 - 3 * 0.2) / 4;
    T.forEach(([il, t], i) => {
      const x = 0.6 + i * (tw + 0.2);
      d.rect(s, x, 4.6, tw, 1.2, { fill: 'FFFFFF', line: BORDER, radius: 0.1 });
      d.ill(s, il, x + 0.15, 4.85, 0.7, 0.7);
      d.t(s, `//${t}//`, x + 0.95, 4.6, tw - 1.05, 1.2, { size: 16, valign: 'middle' });
    });
    band(s, 'Variez les formules : la présentation devient plus naturelle.', 6.05, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 8 ligne du temps
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Mon parcours : la ligne du temps' });
    const y0 = 2.75;
    d.line(s, 0.7, y0, 12.6, y0, { color: 'tx2', lw: 3 });
    const M = [[1.3, '2010–2014', 'graduation-cap', 'Ik **%%heb%%** economie **%%gestudeerd%%** in Namen.', PA], [4.2, '2014', 'graduation-cap', 'Ik **%%ben%%** in 2014 **%%afgestudeerd%%**.', PA], [7.1, '2015–2020', 'building-construction', 'Daarna **%%werkte%%** ik vijf jaar bij Maesbouw.', PA], [10.0, 'sinds januari', 'office-building', 'Ik **^^werk^^** sinds januari bij Peeters & Co.', PR]];
    M.forEach(([x, lab, il, t, c]) => {
      d.oval(s, x + 1.1, y0 - 0.15, 0.3, 0.3, { fill: c });
      d.ill(s, il, x + 0.85, 1.65, 0.8, 0.8);
      d.t(s, `**${lab}**`, x, y0 + 0.2, 2.5, 0.4, { size: 15, color: c, align: 'center' });
      d.rect(s, x, y0 + 0.65, 2.5, 1.55, { fill: c, tr: 90, line: c, lw: 1.25, radius: 0.1 });
      d.t(s, `//${t}//`, x + 0.1, y0 + 0.65, 2.3, 1.55, { size: 15, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.15, 12.13, 0.75, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, '**%%perfectum%%** : un fait (M15) · **%%imperfectum%%** : une période, un récit (M19) · **^^présent^^** avec //sinds// et //al//', 0.85, 5.15, 11.7, 0.75, { size: 17, valign: 'middle', align: 'center' });
    band(s, '//afstuderen// prend //zijn// : //Ik **ben** afgestudeerd.// · aussi possible : //Ik heb vijf jaar bij Maesbouw gewerkt.//', 6.1, 0.7, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 9 piège
  {
    const s = d.page({ g: 9, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : depuis, il y a, j’ai… ans' });
    trapFrame(s, 4.45);
    const R = [['« J’ai 32 ans »', 'Ik heb 32 jaar', 'Ik **ben** 32 (jaar)'], ['« Je suis comptable »', 'Ik ben een boekhouder', 'Ik ben boekhouder'], ['« Je travaille comme comptable »', 'Ik werk zoals boekhouder', 'Ik werk **##als##** boekhouder'], ['« Je suis responsable de… »', 'verantwoordelijk van', 'verantwoordelijk **##voor##**'], ['« Je travaille ici depuis 2021 »', null, 'Ik werk hier **sinds** 2021'], ['« … depuis quatre ans »', null, 'Ik werk hier **al** vier jaar']];
    R.forEach(([fr, ko, ok], i) => {
      const y = 2.25 + i * 0.63;
      d.t(s, fr, 0.95, y, 3.9, 0.56, { size: 16, valign: 'middle' });
      if (ko) d.t(s, `✗ //{{${ko}}}//`, 4.85, y, 3.0, 0.56, { size: 15, color: 'accent6', valign: 'middle' });
      d.line(s, 7.75, y + 0.28, 8.05, y + 0.28, { color: 'accent3', lw: 2 });
      d.rect(s, 8.1, y + 0.03, 4.45, 0.5, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.22, y + 0.03, 4.28, 0.5, { size: 15, valign: 'middle', fit: true, max: 16, min: 10 });
    });
    band(s, '//sinds// + point de départ · //al// + durée · « il y a » : //vier jaar **geleden**// · « depuis » + **présent**', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 10 projets
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'Mes projets' });
    const L = [['Projet', 'presque sûr', 'Volgend jaar **<<ga>>** ik een opleiding Excel **<<volgen>>**.', 'M18', '1F6B3F', 'rocket'], ['Envie', 'je veux', 'Ik **<<wil>>** graag meer met klanten **<<werken>>**.', 'M12, M27', 'accent3', 'seedling'], ['Rêve, souhait poli', 'je voudrais', 'Later **<<zou>>** ik graag een team **<<leiden>>**.', 'M29', '8CC79A', 'sparkles']];
    L.forEach(([h, sub, t, ref, c, il], i) => {
      const y = 1.75 + i * 1.3; const x = 0.6 + i * 0.6;
      d.rect(s, x, y, 12.13 - i * 0.6 - 0.6 * (2 - i), 1.1, { fill: c, tr: 80, line: c, lw: 2, radius: 0.12 });
      d.ill(s, il, x + 0.2, y + 0.18, 0.75, 0.75);
      d.t(s, [`**${h}**`, sub], x + 1.1, y, 2.3, 1.1, { size: 16, gap: 0, valign: 'middle', color: 'tx2' });
      d.t(s, `//${t}//`, x + 3.4, y, 7.0, 1.1, { size: 19, valign: 'middle' });
      d.chip(s, ref, x + 12.13 - i * 0.6 - 0.6 * (2 - i) - 1.25, y + 0.38, 'accent5', 0.32, 10);
    });
    d.line(s, 0.7, 5.75, 12.6, 5.75, { color: FU, lw: 3 });
    d.t(s, 'vers l’avenir →', 10.5, 5.35, 2.2, 0.38, { size: 13, italic: true, color: FU, align: 'right' });
    band(s, 'En entretien, //Ik zou graag…// est la formule la plus polie pour exprimer un souhait.', 6.1, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 11 vie privée
  {
    const s = d.page({ g: 11, tag: 'CULTURE', title: 'Ma vie privée : que dire au travail ?' });
    [['✓ on en parle', 'accent3', [['soccer-ball', 'le sport'], ['people-hugging', 'la famille (brièvement)'], ['airplane', 'les vacances'], ['cooking', 'la cuisine, les loisirs']]], ['✗ on évite', 'accent6', [['money-bag', 'le salaire'], ['place-of-worship', 'la religion'], ['ballot-box-with-ballot', 'la politique'], ['pill', 'la santé']]]].forEach(([h, c, L], i) => {
      const x = 0.6 + i * 6.21; const w = 5.92;
      d.rect(s, x, 1.7, w, 2.65, { fill: c, tr: 92, line: c, lw: 2, radius: 0.1 });
      d.t(s, `**${h}**`, x + 0.2, 1.75, w - 0.4, 0.5, { size: 19, color: c, valign: 'middle' });
      L.forEach(([il, t], k) => {
        const xx = x + 0.2 + (k % 2) * 2.85; const yy = 2.35 + Math.floor(k / 2) * 0.95;
        d.ill(s, il, xx, yy, 0.6, 0.6);
        d.t(s, t, xx + 0.7, yy, 2.1, 0.6, { size: 15, valign: 'middle' });
      });
    });
    d.rect(s, 0.6, 4.55, 12.13, 1.35, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, ['//Ik heb twee kinderen. · In mijn vrije tijd sport ik graag. · Ik hou van koken. · Ik ben dol op reizen.// (M27)', '//Wat doe jij graag in je vrije tijd?//'], 0.85, 4.55, 11.7, 1.35, { size: 18, gap: 6, valign: 'middle' });
    band(s, 'Personne n’est obligé de parler de sa vie privée : //Ik sport graag// suffit.', 6.1, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 12 registre
  {
    const s = d.page({ g: 12, tag: 'MISE EN SITUATION', title: 'Le bon registre : trois situations' });
    const S = [['Un·e collègue', 'je', 'accent3', 'woman-red-hair', 'man-office-worker', 'Hoi, ik ben Lotte, de nieuwe stagiaire. En jij?', 'Ik ben Karim, van de boekhouding. Welkom!'], ['Un entretien', 'u', 'accent2', 'woman-office-worker', 'man-office-worker', 'Vertelt u eens iets over uzelf.', 'Graag. Ik ben Karim Benali en ik werk sinds…'], ['Le réseau', 'u → je', 'purple', 'man-office-worker', 'woman', 'Aangenaam, Karim Benali.', 'Aangenaam! Eva Wouters, van Maesbouw.']];
    const w = (12.13 - 2 * 0.25) / 3;
    S.forEach(([h, reg, c, il1, il2, b1, b2], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 4.15, { fill: 'bg1', line: c, lw: 2, radius: 0.1, shadow: true });
      d.rect(s, x, 1.7, w, 0.6, { fill: c, line: null, radius: 0.1 });
      d.t(s, `**${h}**`, x + 0.2, 1.7, w - 1.3, 0.6, { size: 17, color: 'bg1', valign: 'middle' });
      d.chip(s, reg, x + w - (reg.length > 2 ? 1.35 : 0.85), 1.83, 'tx2', 0.34, 12);
      d.ill(s, il1, x + 0.15, 2.5, 0.65, 0.65);
      d.bubble(s, `//${b1}//`, x + 0.9, 2.45, w - 1.05, 1.15, c, { size: 15 });
      d.ill(s, il2, x + w - 0.8, 3.95, 0.65, 0.65);
      d.bubble(s, `//${b2}//`, x + 0.15, 3.85, w - 1.05, 1.15, 'accent5', { size: 15 });
      if (i === 2) d.ill(s, 'handshake', x + w / 2 - 0.3, 5.1, 0.6, 0.6);
    });
    band(s, '//**Aangenaam**// (enchanté·e) : très courant en Belgique · //Prettig kennis te maken. · Leuk je te leren kennen.//', 6.05, 0.75, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 13 questions et réactions
  {
    const s = d.page({ g: 13, tag: 'MISE EN SITUATION', title: 'Poser des questions et réagir' });
    d.t(s, '**QUESTIONS**', 0.6, 1.6, 6, 0.35, { size: 13, color: PR, cs: 2 });
    d.t(s, '**RÉACTIONS**', 8.0, 1.6, 4.7, 0.35, { size: 13, color: FU, cs: 2 });
    ['Wat doe je precies?', 'Op welke afdeling werk je?', 'Hoelang werk je hier al?', 'Wat heb je gestudeerd?', 'Wat doe je graag in je vrije tijd?'].forEach((q, i) => {
      d.bubble(s, `//${q}//`, 0.6, 2.0 + i * 0.78, 6.4, 0.66, PR, { size: 17 });
    });
    ['O ja?', 'Interessant!', 'Echt waar?', 'Ik ook!', 'Wat leuk!', 'En jij?'].forEach((r, i) => {
      const x = 8.0 + (i % 2) * 2.4; const y = 2.0 + Math.floor(i / 2) * 1.0;
      d.rect(s, x, y, 2.25, 0.8, { fill: FU, tr: 85, line: FU, lw: 1.5, radius: 0.2 });
      d.t(s, `//**${r}**//`, x, y, 2.25, 0.8, { size: 18, color: '1F6B3F', align: 'center', valign: 'middle' });
    });
    d.ill(s, 'ping-pong', 7.15, 3.2, 0.75, 0.75);
    band(s, 'Une présentation est un échange : après votre pitch, renvoyez la balle : //En jij?// · //Hoelang werk je hier al? — Al drie jaar.//', 6.05, 0.75, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 14 e-mail
  {
    const s = d.page({ g: 14, tag: 'MISE EN SITUATION', title: 'Se présenter par e-mail' });
    d.rect(s, 0.6, 1.65, 8.4, 4.3, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, 1.65, 8.4, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Karim Benali · Aan: Eva Wouters · Onderwerp: even voorstellen', 0.85, 1.65, 8.0, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const P = [['//Geachte mevrouw Wouters,//', 2.3, 0.45, 'formule d’appel', 'accent2'], ['//**Graag stel ik me even voor**: ik ben Karim Benali, de nieuwe boekhouder van Peeters & Co.//', 2.85, 0.85, 'présentation', 'accent1'], ['//Vanaf 1 maart ben ik uw contactpersoon voor de facturatie.//', 3.8, 0.55, 'rôle', 'accent3'], ['//Hebt u vragen? Neem gerust contact met mij op.//', 4.45, 0.5, 'offre d’aide', 'purple'], ['//Met vriendelijke groeten//', 5.0, 0.4, 'formule finale', 'accent4'], ['//Karim Benali//', 5.4, 0.4, '', 'accent4']];
    P.forEach(([t, y, h, lab, c]) => {
      d.t(s, t, 0.95, y, 7.85, h, { size: 17, valign: 'middle' });
      if (lab) {
        d.line(s, 9.05, y + h / 2, 9.45, y + h / 2, { color: c, lw: 2, arrow: false });
        d.rect(s, 9.5, y + h / 2 - 0.22, 3.23, 0.44, { fill: c, tr: 85, line: c, lw: 1.25, radius: 0.1 });
        d.t(s, lab, 9.6, y + h / 2 - 0.22, 3.05, 0.44, { size: 14, bold: true, color: c, valign: 'middle' });
      }
    });
    band(s, '//**Graag** stel ik me even voor// : inversion (M3) + //zich voorstellen// (M28) · présentation de l’e-mail : M10', 6.15, 0.68, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 15 à retenir
  {
    const s = d.page({ g: 15, tag: 'À RETENIR', title: 'À retenir : le pitch en 5 étapes' });
    stones(s, 0.6, 1.65, 12.13, 1.65, { small: true });
    d.rect(s, 0.6, 3.55, 12.13, 0.85, { fill: 'FDF1E6', line: PP, lw: 1.5, radius: 0.1 });
    d.t(s, '**##bij##** (entreprise) · **##op##** (service) · **##als##** (fonction) · **##in##** (ville, secteur) · **##voor##** (responsabilité)', 0.85, 3.55, 11.7, 0.85, { size: 19, valign: 'middle', align: 'center' });
    d.rect(s, 0.6, 4.6, 12.13, 0.85, { fill: 'FBEDEB', line: 'accent6', lw: 1.5, radius: 0.1 });
    d.t(s, '//Ik **ben** 32. · Ik ben boekhouder.// (sans //een//) · //**sinds** 2021 · **al** vier jaar · vier jaar **geleden**//', 0.85, 4.6, 11.7, 0.85, { size: 19, valign: 'middle', align: 'center' });
    d.rect(s, 0.6, 5.65, 12.13, 0.85, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, 'Collègue : //je// · entretien, client : //u// · formule : //**Aangenaam!**// · renvoyez la balle : //En jij?//', 0.85, 5.65, 11.7, 0.85, { size: 19, valign: 'middle', align: 'center' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 16 divider
  d.divider({ g: 16, tiles: [
    ['bij, op, als, in, voor ?', '★', 'FaIdCard'], ['sinds, al ou geleden ?', '★', 'FaClock'], ['Le pitch en désordre', '★★', 'FaSortAmountDown'], ['Le détective', '★★', 'FaSearch'],
    ['Retrouvez la question', '★★', 'FaQuestion'], ['Speed-networking', '★', 'FaUserFriends'], ['L’entretien d’embauche', '★★★', 'FaBriefcase'],
  ] });

  // ---------------------------------------------------------------- 17 ex1 prépositions
  const ex1 = ['Ik werk [[bij]] Maesbouw.', 'Tom werkt [[op]] de afdeling verkoop.', 'Lotte werkt [[als]] stagiaire.', 'Ons kantoor is [[in]] Gent.', 'Ik ben verantwoordelijk [[voor]] de planning.', 'Eva werkt al tien jaar [[in]] de bouwsector.', 'Ik werk vooral [[voor]] Franstalige klanten.', 'Nadia werkt [[als]] coach [[bij]] Sportclub Vitaal.'];
  d.ex({ g: 17, title: 'Exercice 1 — bij, op, als, in, voor ?', stars: '★', instr: 'Complétez avec la préposition de la carte de visite.' }, (s, mode, top) => {
    d.list(s, ex1.map((e) => `//${e}//`), mode, { y: top + 0.2, w: 12.13, h: 4.3, cols: 2, size: 21, gap: 26 });
    if (mode === 'a') d.t(s, 'N° 2 : //bij// est aussi accepté (//bij de afdeling verkoop//) · n° 8 : deux trous', 0.6, 6.3, 12.13, 0.45, { size: 15, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 18 ex2 sinds al geleden
  const ex2 = ['Ik werk hier [[sinds]] 2021.', 'Ik woon [[al]] vijf jaar in Brussel.', 'Ik ben drie jaar [[geleden]] afgestudeerd.', 'Lotte is hier [[sinds]] maart stagiaire.', 'We kennen elkaar [[al]] lang.', 'Twee maanden [[geleden]] ben ik van werkgever veranderd.'];
  d.ex({ g: 18, title: 'Exercice 2 — sinds, al ou geleden ?', stars: '★', instr: '//sinds// + point de départ · //al// + durée (présent) · //geleden// + durée (passé).' }, (s, mode, top) => {
    const y0 = top + 0.15;
    d.line(s, 0.8, y0 + 0.3, 12.5, y0 + 0.3, { color: 'accent5', lw: 2 });
    [['geleden', 1.5, PA], ['sinds', 5.6, PR], ['al', 9.4, FU]].forEach(([w, x, c]) => {
      d.oval(s, x, y0 + 0.18, 0.24, 0.24, { fill: c });
      d.t(s, `//**${w}**//`, x + 0.32, y0 + 0.38, 1.6, 0.4, { size: 16, color: c, valign: 'middle' });
    });
    d.list(s, ex2.map((e) => `//${e}//`), mode, { y: top + 1.0, w: 12.13, h: 4.0, cols: 1, size: 21, gap: 10 });
    if (mode === 'a') d.t(s, 'N° 2 et 5 : //sinds// + durée est aussi accepté, surtout en Belgique (//sinds jaren//)', 0.6, 6.45, 12.13, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 19 ex3 le pitch en désordre
  const ex3 = [['A', 'In mijn vrije tijd fiets ik graag en ik hou van de zee.', 5], ['B', 'Ik ben Sofie Peeters en ik kom uit Gent.', 1], ['C', 'Volgend jaar wil ik graag een opleiding coaching volgen.', 4], ['D', 'Ik werk bij de personeelsdienst van Peeters & Co: ik zorg voor de aanwerving van nieuwe collega’s.', 2], ['E', 'Ik heb psychologie gestudeerd en daarna werkte ik zes jaar bij een interimkantoor.', 3]];
  d.ex({ g: 19, title: 'Exercice 3 — Le pitch en désordre', stars: '★★', instr: 'Remettez la présentation de Sofie dans l’ordre des 5 étapes. Regardez le temps du verbe !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 5;
    const rows = mode === 'q' ? ex3 : ex3.slice().sort((a, b) => a[2] - b[2]);
    rows.forEach(([L, t, n], i) => {
      const y = top + i * rh;
      const c = STEPS[n - 1][2];
      if (mode === 'a') {
        d.num(s, n, 0.6, y + (rh - 0.48) / 2, 0.48, c, 15);
        d.t(s, `//${STEPS[n - 1][0]}//`, 1.2, y, 2.5, rh, { size: 14, bold: true, color: c, valign: 'middle' });
      }
      const x = mode === 'a' ? 3.75 : 0.6;
      d.rect(s, x, y + 0.06, 12.73 - x, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'FFFFFF', line: mode === 'a' ? 'accent3' : 'accent1', lw: 1.5, radius: 0.1, rotate: mode === 'q' ? [-1, 1, 0, -1, 1][i] : 0 });
      d.t(s, `**${L}**  //${t}//`, x + 0.2, y + 0.06, 12.73 - x - 0.35, rh - 0.12, { size: 17, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 20 ex4 détective
  d.ex({ g: 20, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Lotte se présente sur l’intranet. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Intranet Peeters & Co · Over mij · Lotte Claes', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = '//Hallo! Ik ben Lotte Claes en {{ik heb 24 jaar}}++ ik ben 24++. Ik ben {{een stagiaire}}++ stagiaire++ op de afdeling marketing van Peeters & Co. Ik ben verantwoordelijk {{van}}++ voor++ onze sociale media. Twee jaar geleden {{ik ben}}++ ben ik++ afgestudeerd in communicatie. Ik woon {{op}}++ in++ Leuven en ik werk hier al drie maanden. Tot snel!//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 19, mode, ls: 1.2, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurre : //Ik werk hier al drie maanden// est correct. Inversion après un complément de temps (M3) · //in// + ville (M2).', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 21 ex5 retrouvez la question
  const ex5 = [['Ik ben boekhouder.', 'Wat doe je (precies)?'], ['Op de afdeling verkoop.', 'Op welke afdeling werk je?'], ['Al drie jaar.', 'Hoelang werk je hier al?'], ['Economie, in Namen.', 'Wat heb je gestudeerd?'], ['In Leuven.', 'Waar woon je?'], ['Ik fiets graag.', 'Wat doe je graag in je vrije tijd?']];
  d.ex({ g: 21, title: 'Exercice 5 — Retrouvez la question', stars: '★★', instr: 'Voici les réponses. Écrivez la question (avec //je// ou //u//).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex5.forEach(([a, q], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'accent5', 13);
      d.rect(s, 7.15, y + 0.05, 5.58, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, `— //${a}//`, 7.3, y + 0.05, 5.35, rh - 0.12, { size: 18, valign: 'middle' });
      d.line(s, 7.05, y + rh / 2, 6.6, y + rh / 2, { color: 'accent1', lw: 2.5 });
      d.rect(s, 1.1, y + 0.05, 5.4, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${q}//`, 1.25, y + 0.05, 5.2, rh - 0.12, { size: 18, bold: true, color: 'accent3', valign: 'middle' });
      else d.t(s, '?', 1.25, y + 0.05, 5.2, rh - 0.12, { size: 18, color: 'accent5', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 22 ex6 speednetworking
  {
    const s = d.page({ g: 22, tag: 'JIJ NU !', title: 'Exercice 6 — Speednetworking', stars: '★' });
    const P = [['woman', 'Eva Wouters', 'projectleider · Maesbouw', 'Brussel · sinds 2019', 'zingen'], ['man-office-worker', 'Tom De Smet', 'verkoper · Koopzo', 'Leuven · sinds 2022', 'voetbal'], ['woman-office-worker', 'Nadia El Amrani', 'coach · Sportclub Vitaal', 'Gent · sinds 2020', 'reizen'], ['man-technologist', 'Pieter Claes', 'webdesigner (freelance)', 'Mechelen · sinds 2018', 'koken'], ['woman-red-hair', 'Ines Dubois', 'onthaalmedewerkster · Brasserie De Lepel', 'Namen · sinds 2023', 'lezen'], ['technologist', 'Jonas Peeters', 'IT’er · Peeters & Co', 'Antwerpen · sinds 2021', 'gamen'], ['woman-student', 'Sarah Vermeulen', 'boekhoudster · Maesbouw', 'Brugge · sinds 2017', 'zwemmen'], ['man', 'Youssef Haddad', 'magazijnier · Koopzo', 'Mechelen · sinds 2024', 'fietsen']];
    const cw = 2.0; const ch = 2.4;
    P.forEach(([il, name, job, where, hobby], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.12); const y = 1.65 + Math.floor(i / 4) * (ch + 0.12);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: PR, lw: 1.5, radius: 0.1, shadow: true });
      d.ill(s, il, x + cw / 2 - 0.35, y + 0.1, 0.7, 0.7);
      d.t(s, `**${name}**`, x + 0.05, y + 0.82, cw - 0.1, 0.35, { size: 13, color: 'tx2', align: 'center', valign: 'middle' });
      d.t(s, [job, where, `♥ ${hobby}`], x + 0.08, y + 1.18, cw - 0.16, ch - 1.25, { size: 11, gap: 1, align: 'center', valign: 'middle' });
    });
    d.ill(s, 'busts-in-silhouette', 9.25, 1.7, 0.8, 0.8);
    d.t(s, 'Speed!', 10.15, 1.7, 2.6, 0.8, { size: 28, bold: true, color: PR, head: true, valign: 'middle' });
    d.t(s, ['**1.** Tirez une carte : vous êtes cette personne.', '**2.** Présentez-vous en **30 secondes** (les 5 étapes).', '**3.** Votre partenaire pose 2 questions. Au signal, on change de partenaire.', 'Toutes les entreprises sont fictives.'], 9.25, 2.65, 3.48, 4.2, { size: 15, gap: 8 });
  }

  // ---------------------------------------------------------------- 23 ex7 sollicitatiegesprek
  d.roleplay({
    g: 23, title: 'Exercice 7 — Het sollicitatiegesprek',
    scenario: 'Tâche finale : Maesbouw cherche un·e collaborateur·rice administratif·ve. Entretien de 5 minutes, en //u//.',
    a: '**A — le recruteur** : accueillez, demandez une présentation, posez 3 questions, concluez.',
    b: '**B — le candidat** : présentez-vous (les 5 étapes), répondez, posez une question sur le poste.',
    bank: '//Vertelt u eens iets over uzelf. · Waarom solliciteert u bij ons? · Wat zijn uw sterke punten? · Ik ben… · Ik heb … gestudeerd. · Daarvoor werkte ik… · Ik werk graag in team. · Ik zou graag… · Hoeveel dagen thuiswerk zijn er?//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.9, { fill: 'accent1', line: null, radius: 0.04 });
      d.t(s, ['**VACATURE**', 'Maesbouw · Brussel'], x + 0.2, y, w - 0.4, 0.9, { size: 15, gap: 0, color: 'bg1', valign: 'middle' });
      d.ill(s, 'building-construction', x + w - 0.85, y + 0.12, 0.65, 0.65);
      d.t(s, '**Administratief medewerker (m/v/x)**', x + 0.2, y + 1.05, w - 0.4, 0.7, { size: 15, color: 'tx2', valign: 'middle' });
      const L = ['voltijds', 'contract van onbepaalde duur', 'Brussel · 2 dagen thuiswerk', 'Je spreekt Nederlands en Frans.', 'Je werkt graag in team.', 'maaltijdcheques'];
      L.forEach((t, i) => {
        d.icon(s, 'FaCheck', 'accent3', x + 0.25, y + 1.92 + i * 0.44, 0.24);
        d.t(s, `//${t}//`, x + 0.6, y + 1.82 + i * 0.44, w - 0.8, 0.42, { size: 13, valign: 'middle' });
      });
      d.t(s, 'Solliciteer vóór 30 juni!', x + 0.2, y + h - 0.55, w - 0.4, 0.4, { size: 13, bold: true, color: 'accent1', align: 'center' });
    },
  });

  // ---------------------------------------------------------------- 24 ticket + bilan du parcours
  {
    const s = d.ticket({
      g: 24, title: 'Ticket de sortie et bilan du parcours',
      q: ['Traduisez : « J’ai 32 ans et je suis comptable. »', 'Complétez : //Ik werk …… Peeters & Co, …… boekhouder.//', 'Traduisez : « Je travaille ici depuis quatre ans. »'],
      self: ['Me présenter', 'Mon parcours', 'M’adapter'],
      teaser: { icon: 'FaTrophy', text: '**Proficiat! Néerlandais 1 is klaar.** — Volgende stap : Néerlandais 2' },
    });
    d.t(s, 'NÉERLANDAIS 1 · 32 MODULES', 7.6, 5.03, 4.6, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    const B = [['1–5', 5, 'accent2'], ['6–10', 5, 'accent1'], ['11–15', 5, 'accent3'], ['16–19', 4, 'purple'], ['20–24', 5, 'accent4'], ['25–29', 5, 'tx2'], ['30–32', 3, 'accent6']];
    const unit = (4.55 - 6 * 0.04) / 32; let x = 7.6;
    B.forEach(([lab, n, c]) => {
      const w = unit * n;
      d.rect(s, x, 5.38, w, 0.45, { fill: c, line: null, radius: 0.06 });
      d.t(s, lab, x, 5.38, w, 0.45, { size: 8, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      x += w + 0.04;
    });
    d.ill(s, 'trophy', 12.25, 5.3, 0.55, 0.55);
  }
}

module.exports = { meta, build };
