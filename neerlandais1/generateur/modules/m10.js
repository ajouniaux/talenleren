// Module 10 — Een mail opstellen · Écrire un e-mail
const { K, BORDER, GHOST } = require('../lib');

const meta = { n: 10, slug: 'Een_mail_opstellen', title: 'Een mail opstellen — Écrire un e-mail', short: 'Een mail opstellen', template: 'module_10_mail_opstellen.md' };

const INF = '5B9BD5';
const FOR = 'tx2';
// the 5 blocks of an e-mail (charte S13)
const BLK = [['Aanhef', 'tx2', 'À qui ?'], ['Opening', 'accent2', 'Pourquoi j’écris ?'], ['Kern', 'accent1', 'Quoi ?'], ['Slotzin', 'accent3', 'Et maintenant ?'], ['Afsluiting + naam', '6E4A9E', 'Qui signe ?']];

function build(d) {
  // e-mail window: returns the y where the body starts
  const win = (s, x, y, w, h, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, radius: 0.06, shadow: o.shadow !== false });
    d.rect(s, x, y, w, 0.42, { fill: 'E6EBF2', line: null, radius: 0.06 });
    ['E2725B', 'F2C14E', '5FA77A'].forEach((c, k) => d.oval(s, x + 0.18 + k * 0.25, y + 0.14, 0.14, 0.14, { fill: c }));
    if (o.title) d.t(s, o.title, x + 1.0, y, w - 1.2, 0.42, { size: 12, color: 'accent5', valign: 'middle' });
    let yy = y + 0.5;
    (o.fields || []).forEach(([k, v]) => {
      d.t(s, `**${k}**`, x + 0.2, yy, 1.35, 0.34, { size: o.fsize || 13, color: 'accent5', valign: 'middle' });
      d.t(s, v, x + 1.5, yy, w - 1.7, 0.34, { size: o.fsize || 13, valign: 'middle' });
      yy += 0.36;
    });
    if (o.fields && o.fields.length) { d.line(s, x + 0.15, yy + 0.04, x + w - 0.15, yy + 0.04, { color: BORDER, lw: 1, arrow: false }); yy += 0.12; }
    return yy;
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2') => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size: 18, color: 'bg1', valign: 'middle' });
  };
  // model e-mail with coloured block bars (slides 10–12)
  const model = (s, fields, blocks, side) => {
    const x = 0.6; const w = 8.4; const by = win(s, x, 1.65, w, 5.2, { fields, title: 'Nieuw bericht' });
    const avail = 6.75 - by; const unit = avail / blocks.reduce((a, b) => a + b[1], 0);
    let y = by + 0.05;
    blocks.forEach(([t, lines], i) => {
      const h = lines * unit;
      d.rect(s, x + 0.15, y + 0.03, 0.12, h - 0.06, { fill: BLK[i][1], line: null, radius: 0 });
      d.num(s, i + 1, x + 0.35, y + h / 2 - 0.17, 0.34, BLK[i][1], 11);
      d.t(s, t, x + 0.85, y, w - 1.05, h, { size: 18, valign: 'middle' });
      y += h;
    });
    side(s, 9.3, 1.65, 3.43, 5.2);
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Een mail opstellen', sub: 'Écrire un e-mail', line: 'Beste mevrouw Janssens, … Met vriendelijke groet, Karim Benali',
    visual: (s) => {
      d.ill(s, 'laptop', 7.4, 2.4, 3.0, 3.0);
      d.ill(s, 'e-mail', 9.9, 1.3, 2.4, 2.4);
      d.rect(s, 10.1, 4.6, 2.4, 0.8, { fill: 'accent2', line: null, radius: 0.4, shadow: true });
      d.icon(s, 'FaPaperPlane', 'FFFFFF', 10.35, 4.82, 0.36);
      d.t(s, 'Verzenden', 10.75, 4.6, 1.7, 0.8, { size: 18, bold: true, color: 'bg1', valign: 'middle' });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaSearch', h: 'Reconnaître', t: 'Je reconnais les **5 blocs** d’un e-mail.', color: 'accent2' },
      { icon: 'FaSortAmountUp', h: 'Choisir', t: 'Je choisis l’ouverture et la clôture selon le **destinataire**.', color: 'accent1' },
      { icon: 'FaPen', h: 'Rédiger', t: 'J’écris un e-mail court, formel ou informel.', color: 'accent3' },
    ],
    band: 'Ce module réutilise tout le parcours : registre (M8), //omdat// (M9), verbe en 2e position (M3), dates (M2).',
  });

  // ---------------------------------------------------------------- 3 boîte de réception
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — la boîte de réception' });
    const by = win(s, 0.6, 1.65, 10.2, 5.2, { title: 'Postvak IN — karim.benali@peetersco.be' });
    const rows = [['Sofie Peeters', 'Lunch morgen?', '9.12', 'woman-office-worker'], ['Directie Peeters & Co', 'Vergadering donderdag 10 uur', '9.40', 'office-building'], ['Webshop Koopzo', 'Uw bestelling 4521', '10.05', 'shopping-cart'], ['Mama', 'Zondag eten bij ons?', '11.30', 'old-woman'], ['Jan Maes (klant)', 'Vraag over factuur 2026-118', '14.02', 'man-office-worker']];
    const rh = (6.8 - by) / 5;
    rows.forEach(([who, subj, t, il], i) => {
      const y = by + i * rh;
      if (i % 2 === 0) d.rect(s, 0.65, y, 10.1, rh, { fill: 'F4F7FB', line: null, radius: 0 });
      d.ill(s, il, 0.8, y + (rh - 0.62) / 2, 0.62, 0.62);
      d.t(s, `**${who}**`, 1.6, y, 3.0, rh, { size: 17, valign: 'middle' });
      d.t(s, `//${subj}//`, 4.6, y, 4.6, rh, { size: 18, valign: 'middle' });
      d.t(s, t, 9.2, y, 0.9, rh, { size: 14, color: 'accent5', valign: 'middle', align: 'right' });
    });
    d.rect(s, 11.05, 1.65, 1.68, 5.2, { fill: 'bg2', line: BORDER });
    d.t(s, 'F ou I ?', 11.05, 1.75, 1.68, 0.45, { size: 17, bold: true, color: 'tx2', align: 'center' });
    rows.forEach((r, i) => {
      const y = by + i * rh + (rh - 0.5) / 2;
      d.oval(s, 11.64, y, 0.5, 0.5, { fill: 'FFFFFF', line: 'accent5', lw: 1.5, dash: 'dash' });
      d.t(s, '?', 11.64, y, 0.5, 0.5, { size: 18, bold: true, color: GHOST, align: 'center', valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 4 anatomie (S13)
  {
    const s = d.page({ g: 4, tag: 'VOCABULAIRE', title: 'Anatomie d’un e-mail' });
    const X = 3.85; const W = 5.6;
    const by = win(s, X, 1.7, W, 5.15, { fields: [['Van:', 'karim.benali@peetersco.be'], ['Aan:', 'an.janssens@peetersco.be'], ['Onderwerp:', '**Ziek vandaag**']], fsize: 12 });
    const body = [['//Beste mevrouw Janssens,//', 'tx2', 0.45], ['//Ik ben vandaag helaas ziek: ik heb koorts. Ik kan dus niet naar de vergadering van 14 uur komen. Morgen bel ik u.//', 'accent1', 1.7], ['//Met vriendelijke groet//', '6E4A9E', 0.45], ['//Karim Benali · Boekhouder, Peeters & Co//', '6E4A9E', 0.6]];
    let y = by + 0.1; const Y = [];
    body.forEach(([t, c, h]) => {
      d.rect(s, X + 0.15, y, 0.1, h - 0.08, { fill: c, line: null, radius: 0 });
      d.t(s, t, X + 0.35, y, W - 0.5, h - 0.08, { size: 14, valign: 'middle' });
      Y.push(y + (h - 0.08) / 2); y += h;
    });
    const fieldsY = [2.3, 2.66, 3.02];
    const L = [['de afzender', 'van wie?', 'l’expéditeur', fieldsY[0]], ['de ontvanger', 'aan wie?', 'le destinataire', fieldsY[1]], ['het onderwerp', 'waarover?', 'l’objet', fieldsY[2]]];
    const R = [['de aanhef', '', 'la formule d’appel', Y[0]], ['de hoofdtekst', 'waarom?', 'le corps du message', Y[1]], ['de afsluiting', '', 'la formule finale', Y[2]], ['de handtekening', '', 'la signature', Y[3]]];
    L.forEach(([nl, q, fr, ty], i) => {
      const y0 = 1.75 + i * 1.25;
      d.line(s, 3.45, y0 + 0.5, X + 0.1, ty, { color: 'accent5', lw: 1.25 });
      d.rect(s, 0.6, y0, 2.85, 1.05, { fill: 'bg2', line: BORDER });
      d.t(s, `**//${nl}//**`, 0.75, y0 + 0.05, 2.6, 0.4, { size: 17, color: 'tx2' });
      d.t(s, `${q ? `//${q}// · ` : ''}${fr}`, 0.75, y0 + 0.5, 2.6, 0.45, { size: 13, color: 'accent5' });
    });
    R.forEach(([nl, q, fr, ty], i) => {
      const y0 = 1.75 + i * 1.27;
      d.line(s, 9.85, y0 + 0.5, X + W - 0.1, ty, { color: 'accent5', lw: 1.25 });
      d.rect(s, 9.85, y0, 2.88, 1.05, { fill: 'bg2', line: BORDER });
      d.t(s, `**//${nl}//**`, 10.0, y0 + 0.05, 2.65, 0.4, { size: 17, color: 'tx2' });
      d.t(s, `${q ? `//${q}// · ` : ''}${fr}`, 10.0, y0 + 0.5, 2.65, 0.45, { size: 13, color: 'accent5' });
    });
    d.t(s, 'BE : //de bestemmeling// = //de ontvanger//', 0.6, 5.65, 2.85, 0.9, { size: 13, italic: true, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 5 échelle aanhef
  d.section('Comprendre');
  const ladder = (s, x, rungs, o = {}) => {
    const top = 1.75; const rh = 1.0; const w = o.w || 7.6;
    d.rect(s, x, top - 0.05, 0.16, rungs.length * rh + 0.1, { fill: 'B8C2CF', line: null, radius: 0 });
    d.rect(s, x + w - 0.16, top - 0.05, 0.16, rungs.length * rh + 0.1, { fill: 'B8C2CF', line: null, radius: 0 });
    rungs.forEach(([t, who, il, c], i) => {
      const y = top + i * rh;
      d.rect(s, x + 0.25, y + 0.08, w - 0.5, rh - 0.16, { fill: c, tr: c === FOR ? 0 : 0, line: null, radius: 0.08 });
      d.t(s, t, x + 0.45, y + 0.08, w * 0.52, rh - 0.16, { size: 17, bold: true, color: 'bg1', valign: 'middle', fit: true, max: 17, min: 13 });
      d.t(s, who, x + w * 0.56 + 0.2, y + 0.08, w * 0.44 - 1.45, rh - 0.16, { size: 13, color: 'bg1', valign: 'middle' });
      d.ill(s, il, x + w - 1.0, y + 0.18, rh - 0.36, rh - 0.36);
    });
  };
  const RUNG_C = ['17375E', '2A5A8C', '3F7FBF', '5B9BD5'];
  {
    const s = d.page({ g: 5, tag: 'VOCABULAIRE', title: 'L’échelle des salutations (aanhef)' });
    ladder(s, 0.6, [
      ['//Geachte heer, geachte mevrouw,//', 'inconnu (service, entreprise)', 'office-building', RUNG_C[0]],
      ['//Geachte mevrouw Claes, / Geachte heer Maes,//', 'client, administration, 1er contact', 'man-office-worker', RUNG_C[1]],
      ['//Beste mevrouw Janssens, / Beste Sofie,//', 'collègue, cheffe, contact connu', 'woman-office-worker', RUNG_C[2]],
      ['//Hoi Lies, / Hallo Tom,//', 'ami·e, collègue proche', 'people-hugging', RUNG_C[3]],
    ], { w: 8.6 });
    d.t(s, '▲ très formel', 9.45, 1.75, 3.2, 0.4, { size: 15, bold: true, color: 'tx2' });
    d.t(s, '▼ informel', 9.45, 5.35, 3.2, 0.4, { size: 15, bold: true, color: INF });
    d.card(s, 9.45, 2.3, 3.28, 2.9, { icon: 'FaStar', head: 'Beste', color: 'accent1', body: ['le plus courant en Flandre : il convient **presque partout**.', '//Beste meneer// · //Geachte heer// + **nom de famille**'], size: 15 });
    band(s, 'Après la formule : **virgule**, ligne vide, puis **majuscule**.   //Beste Sofie,// ↵ //Ik stuur je…//', 6.0, 0.85, 'accent2');
  }

  // ---------------------------------------------------------------- 6 échelle afsluiting
  {
    const s = d.page({ g: 6, tag: 'VOCABULAIRE', title: 'L’échelle des clôtures (afsluiting)' });
    const pairs = [['//Geachte heer, geachte mevrouw,//', '//Hoogachtend//', 'très formel (lettre officielle)'], ['//Geachte / Beste mevrouw…//', '//Met vriendelijke groet(en)//', 'formel, le passe-partout'], ['//Beste Sofie,//', '//Vriendelijke groeten · Beste groeten//', 'neutre, collègues'], ['//Hoi Lies,//', '//Groetjes · Tot morgen! · Veel liefs · Kusjes//', 'familier']];
    pairs.forEach(([a, b, lab], i) => {
      const y = 1.75 + i * 1.0;
      d.rect(s, 0.6, y + 0.08, 3.9, 0.84, { fill: 'bg2', line: BORDER });
      d.t(s, a, 0.75, y + 0.08, 3.6, 0.84, { size: 15, valign: 'middle', fit: true, max: 15, min: 12 });
      d.line(s, 4.55, y + 0.5, 5.25, y + 0.5, { color: 'accent5', lw: 2 });
      d.rect(s, 5.3, y + 0.08, 7.43, 0.84, { fill: RUNG_C[i], line: null });
      d.t(s, b, 5.5, y + 0.08, 4.6, 0.84, { size: 19, bold: true, color: 'bg1', valign: 'middle', fit: true, max: 19, min: 14 });
      d.t(s, lab, 10.1, y + 0.08, 2.5, 0.84, { size: 13, italic: true, color: 'bg1', valign: 'middle' });
    });
    d.t(s, 'AANHEF', 0.6, 5.8 - 0.05, 3.9, 0.3, { size: 12, bold: true, color: 'accent5', align: 'center', cs: 2 });
    d.t(s, 'AFSLUITING (en miroir)', 5.3, 5.75, 7.43, 0.3, { size: 12, bold: true, color: 'accent5', align: 'center', cs: 2 });
    d.rect(s, 0.6, 6.1, 12.13, 0.75, { fill: 'accent3', tr: 85, line: 'accent3', lw: 1.25 });
    d.t(s, '**+ slotzin** avant la formule : //Alvast bedankt.// · //Hou je taai!// et //Kusjes// = proches seulement · virgule finale facultative', 0.85, 6.1, 11.7, 0.75, { size: 16, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 7 piège
  {
    const s = d.page({ g: 7, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : la formule finale à la française' });
    d.trap(s, 0.6, 1.7, 12.13, 2.55, '{{« Veuillez agréer, Madame, l’expression de mes salutations distinguées. »}}', '//**Met vriendelijke groet**//', { size: 22 });
    d.trap(s, 0.6, 4.4, 12.13, 1.75, '« Chère Madame, » → //{{Lieve mevrouw,}}//', '//**Beste mevrouw Janssens,**//', { size: 20 });
    band(s, 'Un e-mail formel néerlandais reste **court et direct**. //Lieve// = pour les proches.', 6.3, 0.58, 'tx2');
  }

  // ---------------------------------------------------------------- 8 les 5 blocs
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Les 5 blocs d’un e-mail' });
    const by = win(s, 2.6, 1.65, 7.0, 5.2, { title: 'Nieuw bericht' });
    const ex = ['//Beste mevrouw Janssens,//', '//Ik schrijf u omdat…//', '//Kunt u…?//', '//Alvast bedankt. · Ik hoor graag van u.//', '//Met vriendelijke groet · Karim Benali//'];
    const hs = [0.75, 0.75, 1.45, 0.75, 0.85];
    let y = by + 0.05;
    BLK.forEach(([lab, c, q], i) => {
      const h = hs[i];
      d.rect(s, 2.75, y + 0.04, 6.7, h - 0.08, { fill: c, tr: 85, line: c, lw: 1.25 });
      d.t(s, ex[i], 2.95, y + 0.04, 6.3, h - 0.08, { size: 18, valign: 'middle' });
      d.num(s, i + 1, 0.6, y + h / 2 - 0.2, 0.4, c, 13);
      d.t(s, `**${lab}**`, 1.05, y, 1.5, h, { size: 15, color: c, valign: 'middle' });
      d.t(s, q, 9.8, y, 2.9, h, { size: 16, italic: true, color: c, valign: 'middle' });
      y += h;
    });
    d.t(s, 'En A1 : 5 à 8 lignes. Une ou deux phrases par bloc.', 9.8, 1.7, 2.93, 0.9, { size: 14, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 9 banque de phrases
  {
    const s = d.page({ g: 9, tag: 'VOCABULAIRE', title: 'La banque de phrases' });
    d.table(s, [
      ['', 'Formeel', 'Informeel'],
      ['**② Opening**', '//Hartelijk dank voor uw mail.//\n//Ik schrijf u omdat…//', '//Bedankt voor je mail!//\n//Hoe gaat het met je?//'],
      ['**③ Kern**', '//Ik wil graag een afspraak maken.//\n//Kunt u mij … sturen?//\n//In de bijlage vindt u…//', '//Heb je morgen tijd?//\n//Kun je me helpen?//\n//Hier is…//'],
      ['**④ Slotzin**', '//Alvast bedankt.//\n//Ik hoor graag van u.//\n//Als u vragen hebt, mag u me altijd bellen.//', '//Laat je iets weten?//\n//Tot morgen!//'],
    ], { x: 0.6, y: 1.7, w: 12.13, colW: [2.1, 6.0, 4.03], size: 17, headSize: 15, headColors: ['accent5', FOR, INF], rowH: [0.5, 1.05, 1.45, 1.45], cellFill: (r, c) => (c === 0 ? ['', 'D7E5F3', 'FBE3CC', 'D5EADB'][r] : r % 2 ? 'bg1' : 'bg2') });
    d.t(s, '//de bijlage// = la pièce jointe · //Ik hoor graag van u// = dans l’attente de votre réponse · //Als u vragen hebt…// = inversion après //als// (M9)', 0.6, 6.35, 12.13, 0.5, { size: 14, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 10–12 modèles
  {
    const s = d.page({ g: 10, tag: 'VOCABULAIRE', title: 'Modèle 1 — prévenir qu’on est malade (formel)' });
    model(s, [['Van:', 'karim.benali@peetersco.be'], ['Aan:', 'an.janssens@peetersco.be'], ['Onderwerp:', '**Ziek vandaag**']], [
      ['//Beste mevrouw Janssens,//', 1], ['//Ik ben vandaag helaas ziek: ik heb koorts.//', 1], ['//Ik kan dus niet naar de vergadering van 14 uur komen. Sofie Peeters heeft de documenten.//', 1.7], ['//Morgen bel ik u.//', 1], ['//Met vriendelijke groet//\n//Karim Benali · Boekhouder, Peeters & Co//', 1.5],
    ], (s2, x, y, w, h) => {
      d.ill(s2, 'face-with-thermometer', x + 0.6, y + 0.1, 2.2, 2.2);
      d.card(s2, x, y + 2.5, w, h - 2.5, { icon: 'FaLightbulb', head: 'Beste', color: 'accent1', body: ['et non //Geachte// : c’est sa **cheffe directe**.', 'Pince : //kan … komen//'], size: 15 });
    });
  }
  {
    const s = d.page({ g: 11, tag: 'VOCABULAIRE', title: 'Modèle 2 — proposer un rendez-vous (formel)' });
    model(s, [['Aan:', 'j.maes@maesbouw.be'], ['Onderwerp:', '**Afspraak dinsdag 12 mei**']], [
      ['//Geachte heer Maes,//', 1], ['//Hartelijk dank voor uw mail.//', 1], ['//Ik wil graag een afspraak met u maken. We moeten over de facturen praten. Past ##dinsdag 12 mei om 10 uur## voor u? Ons kantoor is in de Wetstraat 25 in Brussel.//', 2.6], ['//Ik hoor graag van u.//', 1], ['//Met vriendelijke groet · Karim Benali//\n//Boekhouder, Peeters & Co · 02 123 45 67//', 1.5],
    ], (s2, x, y, w, h) => {
      d.ill(s2, 'spiral-calendar', x + 0.7, y + 0.1, 2.0, 2.0);
      d.card(s2, x, y + 2.3, w, h - 2.3, { icon: 'FaComments', head: 'À l’oral', color: 'accent2', body: ['//Past … voor u?// = Est-ce que … vous convient ?', '//dinsdag twaalf mei om tien uur//'], size: 15 });
    });
  }
  {
    const s = d.page({ g: 12, tag: 'VOCABULAIRE', title: 'Modèle 3 — inviter une collègue (informel)' });
    model(s, [['Aan:', 'sofie.peeters@peetersco.be'], ['Onderwerp:', '**Lunch vrijdag?**']], [
      ['//**Hoi Sofie**,//', 1], ['//Hoe gaat het met **je**?//', 1], ['//Vrijdag is mijn verjaardag! Ik trakteer op een lunch in de brasserie naast het kantoor. Heb **je** om 12.30 uur tijd?//', 2.2], ['//Laat **je** iets weten?//', 1], ['//**Groetjes**//\n//**Karim**//', 1.5],
    ], (s2, x, y, w, h) => {
      d.ill(s2, 'birthday-cake', x + 0.25, y + 0.15, 1.5, 1.5);
      d.ill(s2, 'fork-and-knife-with-plate', x + 1.75, y + 0.45, 1.3, 1.3);
      d.card(s2, x, y + 2.0, w, h - 2.0, { icon: 'FaSlidersH', head: 'Comparez', color: INF, body: ['Même structure en **5 blocs**.', 'Seuls les **curseurs** du registre changent (M8).', '//trakteren// = offrir'], size: 15 });
    });
  }

  // ---------------------------------------------------------------- 13 objet et boutons
  {
    const s = d.page({ g: 13, tag: 'VOCABULAIRE', title: 'L’objet et les boutons' });
    d.t(s, 'L’OBJET (//het onderwerp//) : **court** (2 à 6 mots), **précis**, pas de phrase complète', 0.6, 1.65, 12.13, 0.45, { size: 17, color: 'tx2' });
    const bad = ['(geen onderwerp)', 'Vraag', 'Hallo!']; const good = ['Ziek vandaag', 'Afspraak dinsdag 12 mei', 'Vraag over factuur 2026-118'];
    bad.forEach((t, i) => {
      const y = 2.25 + i * 0.75;
      d.rect(s, 0.6, y, 4.6, 0.62, { fill: 'FBEDEB', line: 'accent6', lw: 1.5 });
      d.icon(s, 'FaTimes', 'accent6', 0.78, y + 0.17, 0.28);
      d.t(s, `//${t}//`, 1.2, y, 3.9, 0.62, { size: 18, valign: 'middle' });
    });
    d.icon(s, 'FaArrowRight', 'accent5', 5.5, 2.95, 0.5);
    good.forEach((t, i) => {
      const y = 2.25 + i * 0.75;
      d.rect(s, 6.3, y, 6.43, 0.62, { fill: 'EDF6F0', line: 'accent3', lw: 1.5 });
      d.icon(s, 'FaCheck', 'accent3', 6.48, y + 0.17, 0.28);
      d.t(s, `//**${t}**//`, 6.9, y, 5.7, 0.62, { size: 18, valign: 'middle' });
    });
    d.rect(s, 0.6, 4.75, 12.13, 2.1, { fill: 'E6EBF2', line: BORDER });
    d.t(s, 'LES BOUTONS', 0.8, 4.82, 4, 0.32, { size: 12, bold: true, color: 'accent5', cs: 2 });
    const btn = [['FaPaperPlane', 'Verzenden', 'envoyer', 'accent2'], ['FaReply', 'Beantwoorden', 'répondre', 'tx2'], ['FaReplyAll', 'Allen beantwoorden', 'répondre à tous', 'tx2'], ['FaShare', 'Doorsturen', 'transférer', 'tx2'], ['FaPaperclip', 'Bijlage toevoegen', 'joindre', 'tx2']];
    const bw = (12.13 - 0.4 - 4 * 0.15) / 5;
    btn.forEach(([ic, nl, fr, c], i) => {
      const x = 0.8 + i * (bw + 0.15);
      d.rect(s, x, 5.25, bw, 1.45, { fill: 'FFFFFF', line: BORDER, shadow: true });
      d.iconDisc(s, ic, x + bw / 2 - 0.3, 5.33, 0.6, c);
      d.t(s, `**//${nl}//**`, x, 5.95, bw, 0.38, { size: nl.length > 14 ? 12 : 15, align: 'center', valign: 'middle' });
      d.t(s, fr, x, 6.3, bw, 0.32, { size: 13, italic: true, color: 'accent5', align: 'center' });
    });
  }

  // ---------------------------------------------------------------- 14 checklist
  {
    const s = d.page({ g: 14, tag: 'À RETENIR', title: 'À retenir : la checklist avant d’envoyer' });
    const items = [
      ['**Onderwerp** court et précis', 'FaTag'], ['**Aanhef** adapté au destinataire (//Hoi / Beste / Geachte//)', 'FaUserTag'], ['//**je**// ou //**u**// : le même partout, avec le bon possessif (//je / uw//) — M8', 'FaSlidersH'],
      ['**Verbe** en 2e position… et à la fin après //omdat, dat, als// — M3, M9', 'FaExchangeAlt'], ['**Slotzin** (//Alvast bedankt. / Ik hoor graag van u.//)', 'FaCommentDots'], ['**Afsluiting** en miroir de l’aanhef', 'FaSortAmountUp'], ['**Naam** (+ fonction en formel) · **bijlage** jointe ?', 'FaPaperclip'],
    ];
    items.forEach(([t, ic], i) => {
      const col = i < 4 ? 0 : 1; const r = i < 4 ? i : i - 4;
      const x = 0.6 + col * 6.18; const y = 1.72 + r * 1.2;
      d.rect(s, x, y, 5.95, 1.05, { fill: 'bg1', line: BORDER, shadow: true });
      d.icon(s, 'FaRegSquare', 'accent3', x + 0.2, y + 0.3, 0.45);
      d.icon(s, ic, 'accent5', x + 0.85, y + 0.35, 0.35);
      d.t(s, t, x + 1.35, y, 4.5, 1.05, { size: 16, valign: 'middle' });
    });
    d.rect(s, 6.78, 5.4, 5.95, 1.0, { fill: 'accent2', line: null, radius: 0.5, shadow: true });
    d.icon(s, 'FaPaperPlane', 'FFFFFF', 8.3, 5.67, 0.46);
    d.t(s, 'Verzenden', 8.95, 5.4, 3.0, 1.0, { size: 26, bold: true, color: 'bg1', valign: 'middle' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 15 divider
  d.divider({ g: 15, tiles: [
    ['L’anatomie', '★', 'FaSearch'], ['Formel ou informel ?', '★', 'FaBalanceScale'], ['Pour qui ?', '★', 'FaUserTag'], ['Le mail en morceaux', '★★', 'FaCut'],
    ['Le détective', '★★', 'FaUserSecret'], ['À vous d’écrire !', '★★★', 'FaPen'], ['Le concours de politesse', '★★★', 'FaTrophy'],
  ] });

  // ---------------------------------------------------------------- 16 ex1 anatomie
  const zones = ['Van: karim.benali@peetersco.be', 'Aan: j.maes@maesbouw.be', 'Afspraak dinsdag 12 mei', 'Geachte heer Maes,', 'Ik wil graag een afspraak met u maken…', 'Met vriendelijke groet', 'Karim Benali, Boekhouder'];
  const labels = ['de aanhef', 'het onderwerp', 'de handtekening', 'de afzender', 'de hoofdtekst', 'de ontvanger', 'de afsluiting'];
  const sol1 = ['d', 'f', 'b', 'a', 'e', 'g', 'c'];
  d.ex({ g: 16, title: 'Exercice 1 — L’anatomie', stars: '★', instr: 'Associez chaque zone (1–7) à son nom (a–g).' }, (s, mode, top) => {
    const h = 6.88 - top;
    win(s, 0.6, top, 7.4, h, { title: 'Nieuw bericht' });
    const rh = (h - 0.6) / 7;
    zones.forEach((z, i) => {
      const y = top + 0.52 + i * rh;
      d.num(s, i + 1, 0.8, y + (rh - 0.4) / 2, 0.4, 'accent1', 13);
      d.rect(s, 1.35, y + 0.05, 5.4, rh - 0.1, { fill: i < 3 ? 'F4F7FB' : 'FFFFFF', line: BORDER, lw: 1, dash: 'dash' });
      d.t(s, `//${z}//`, 1.5, y + 0.05, 5.2, rh - 0.1, { size: 15, valign: 'middle' });
      if (mode === 'a') { d.oval(s, 6.95, y + (rh - 0.46) / 2, 0.46, 0.46, { fill: 'accent3' }); d.t(s, sol1[i], 6.95, y + (rh - 0.46) / 2, 0.46, 0.46, { size: 16, bold: true, color: 'bg1', align: 'center', valign: 'middle' }); }
    });
    labels.forEach((l, i) => {
      const y = top + i * (h / 7);
      d.rect(s, 8.4, y + 0.06, 4.33, h / 7 - 0.12, { fill: 'bg2', line: 'tx2', lw: 1.25, radius: 0.3 });
      d.t(s, `**${'abcdefg'[i]}**   //${l}//`, 8.6, y + 0.06, 4.0, h / 7 - 0.12, { size: 18, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 17 ex2 formel / informel
  d.ex({ g: 17, title: 'Exercice 2 — Formel ou informel ?', stars: '★', instr: 'Trouvez au moins 5 indices de registre dans chaque e-mail.' }, (s, mode, top) => {
    const h = 6.88 - top;
    const A = ['//<<Hoi Max>>,//', '//<<Alles goed?>> Parijs is echt geweldig! De mensen zijn vriendelijk en de Eiffeltoren is <<wow>>. Heb <<jij>> plannen voor de zomer? <<Mis je!>>//', '//<<Groetjes>>, Anne//'];
    const B = ['//<<Beste mevrouw De Vries>>,//', '//Ik hoop dat het goed met <<u>> gaat. Kunnen we donderdag om 10 uur vergaderen? We moeten over het project praten. <<Alvast bedankt.>>//', '//<<Met vriendelijke groet>>, Pieter <<Smet>>//'];
    [[A, INF, 'Anne → Max', 0.6], [B, FOR, 'Pieter Smet → mevrouw De Vries', 6.8]].forEach(([lines, c, ttl, x]) => {
      const by = win(s, x, top, 5.93, mode === 'a' ? h - 1.25 : h, { title: ttl });
      d.rect(s, x, top, 0.12, mode === 'a' ? h - 1.25 : h, { fill: c, line: null, radius: 0 });
      d.t(s, lines, x + 0.3, by + 0.05, 5.45, (mode === 'a' ? h - 1.25 : h) - (by - top) - 0.15, { size: 18, mode, gap: 10, fit: true, max: 18, min: 14 });
    });
    if (mode === 'a') {
      d.rect(s, 0.6, 6.88 - 1.1, 5.93, 1.1, { fill: INF, tr: 80, line: INF, lw: 1 });
      d.t(s, '**Informel** : //Hoi// + prénom · //Alles goed?// · //jij// · exclamations, //wow// · //Mis je!// (sans sujet) · //Groetjes// + prénom', 0.75, 6.88 - 1.1, 5.65, 1.1, { size: 14, valign: 'middle' });
      d.rect(s, 6.8, 6.88 - 1.1, 5.93, 1.1, { fill: FOR, tr: 85, line: FOR, lw: 1 });
      d.t(s, '**Formel** : //Beste mevrouw// + nom · //met u// · phrases complètes · //Alvast bedankt// · //Met vriendelijke groet// + prénom **et nom**', 6.95, 6.88 - 1.1, 5.65, 1.1, { size: 14, valign: 'middle' });
    }
  });

  // ---------------------------------------------------------------- 18 ex3 pour qui
  const ex3 = [['Hoi Lies,', 0], ['Kusjes', 0], ['Veel liefs', 0], ['Hou je taai!', 0], ['Beste Sofie,', 1], ['Beste groeten', 1], ['Bedankt!', 1], ['Tot morgen!', 1], ['Geachte mevrouw Claes,', 2], ['Met vriendelijke groet', 2], ['Hoogachtend', 2], ['Bedankt voor uw tijd.', 2]];
  const order = [5, 10, 0, 7, 2, 9, 4, 11, 1, 6, 8, 3];
  d.ex({ g: 18, title: 'Exercice 3 — Pour qui ?', stars: '★', instr: 'Classez les formules selon le destinataire.' }, (s, mode, top) => {
    if (mode === 'q') order.forEach((k, i) => {
      const x = 0.6 + (i % 4) * 3.07; const y = top + Math.floor(i / 4) * 0.68;
      d.word(s, `//${ex3[k][0]}//`, x, y, 2.9, 0.56, 'accent5', { size: ex3[k][0].length > 18 ? 14 : 16, lw: 1.25, bold: false });
    });
    const cy = mode === 'q' ? top + 2.15 : top + 0.1; const h = 6.88 - cy;
    [['VRIENDEN', 'amis', INF, 'people-hugging'], ['COLLEGA’S', 'collègues', 'accent2', 'busts-in-silhouette'], ['ONBEKENDEN', 'inconnus, clients', FOR, 'office-building']].forEach(([lab, fr, c, il], k) => {
      const x = 0.6 + k * 4.14;
      d.rect(s, x, cy, 3.85, h, { fill: c, tr: 90, line: c, lw: 2 });
      d.rect(s, x, cy, 3.85, 0.75, { fill: c, line: null, radius: 0.08 });
      d.ill(s, il, x + 0.15, cy + 0.1, 0.55, 0.55);
      d.t(s, lab, x + 0.8, cy, 2.9, 0.48, { size: 18, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      d.t(s, fr, x + 0.8, cy + 0.42, 2.9, 0.3, { size: 12, italic: true, color: 'bg1', valign: 'middle' });
      if (mode === 'a') ex3.filter((e) => e[1] === k).forEach(([t], j) => d.t(s, `//**${t}**//`, x, cy + 0.95 + j * 0.62, 3.85, 0.55, { size: 19, align: 'center', valign: 'middle' }));
    });
  });

  // ---------------------------------------------------------------- 19 ex4 en morceaux
  const strips = [['A', 'Met vriendelijke groet'], ['B', 'Ik wil graag meer informatie over de cursus Nederlands.'], ['C', 'Geachte mevrouw Wouters,'], ['D', 'Karim Benali'], ['E', 'Wanneer begint de cursus en wat is de prijs?'], ['F', 'Ik hoor graag van u.'], ['G', 'Onderwerp: Cursus Nederlands']];
  const sol4 = ['G', 'C', 'B', 'E', 'F', 'A', 'D'];
  d.ex({ g: 19, title: 'Exercice 4 — Le mail en morceaux', stars: '★★', instr: 'Remettez les bandes dans le bon ordre.' }, (s, mode, top) => {
    const h = 6.88 - top;
    if (mode === 'q') {
      d.ill(s, 'scissors', 0.6, top, 0.6, 0.6);
      strips.forEach(([L, t], i) => {
        const y = top + 0.65 + i * ((h - 0.65) / 7);
        const sh = (h - 0.65) / 7 - 0.1; const rot = [-0.8, 0.6, -0.4, 0.8, -0.6, 0.4, -0.7][i];
        d.rect(s, 0.6 + (i % 2) * 0.3, y, 6.4, sh, { fill: 'FFFDF5', line: 'C9B98A', lw: 1, radius: 0.02, shadow: true, rotate: rot });
        d.t(s, `**${L}**   //${t}//`, 0.78 + (i % 2) * 0.3, y, 6.1, sh, { size: 14, valign: 'middle', rotate: rot });
      });
    }
    const wx = mode === 'q' ? 7.6 : 0.6; const ww = mode === 'q' ? 5.13 : 12.13;
    const by = win(s, wx, top, ww, h, { title: 'Nieuw bericht' });
    const rh = (6.88 - by - 0.1) / 7;
    sol4.forEach((L, i) => {
      const y = by + i * rh;
      d.num(s, i + 1, wx + 0.15, y + (rh - 0.36) / 2, 0.36, 'accent1', 12);
      d.line(s, wx + 0.65, y + rh - 0.08, wx + ww - 0.2, y + rh - 0.08, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
      if (mode === 'a') {
        const t = strips.find((x) => x[0] === L)[1];
        d.t(s, `**${L}**   //${t}//`, wx + 0.7, y, ww - 0.9, rh - 0.05, { size: 18, valign: 'middle' });
      }
    });
  });

  // ---------------------------------------------------------------- 20 ex5 détective
  d.ex({ g: 20, title: 'Exercice 5 — Le détective du mail', stars: '★★', instr: 'Karim écrit à sa cheffe. Trouvez les 6 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    const by = win(s, 0.6, top, 8.9, h, { fields: [['Aan:', 'an.janssens@peetersco.be'], ['Onderwerp:', mode === 'q' ? '//(leeg)//' : '//(leeg)// ++→ Afwezig morgen++']], fsize: 14 });
    const txt = [
      '//{{Hoi}}++ Beste++ mevrouw Janssens,//',
      '//Ik kan morgen niet komen {{omdat ik ben ziek}}++ omdat ik ziek ben++. Kunt u de vergadering verplaatsen? Ik stuur {{je}}++ u++ de documenten.//',
      '//{{Kusjes}}++ Met vriendelijke groet++,//', '//{{Karim}}++ Karim Benali++//',
    ];
    d.t(s, txt, 0.95, by + 0.15, 8.3, 6.88 - by - 0.3, { size: 21, mode, gap: 10 });
    d.ill(s, 'detective', 10.3, top + 0.1, 1.7, 1.7);
    d.rect(s, 9.85, top + 2.0, 2.88, 0.85, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '6 erreurs ?' : '6 erreurs ✓', 9.85, top + 2.0, 2.88, 0.85, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurre : //Kunt u de vergadering verplaatsen?// est correct. Chaque erreur = une case de la checklist.', 9.85, top + 3.05, 2.88, 1.8, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 21 ex6 à vous d'écrire
  const sit = [
    [true, 'Vous êtes malade aujourd’hui. Écrivez à votre cheffe, mevrouw Janssens.', 'face-with-thermometer', 'Ziek vandaag', '//Beste mevrouw Janssens, Ik ben vandaag ziek. Ik blijf thuis en ik kan niet naar de vergadering komen. Morgen bel ik u. Met vriendelijke groet, Karim Benali//'],
    [false, 'Vous invitez votre collègue Lies à déjeuner demain.', 'sandwich', 'Lunch morgen?', '//Hoi Lies, Heb je morgen tijd voor een lunch? Om 12.30 uur in de kantine? Laat je iets weten? Groetjes, Karim//'],
    [true, 'Votre colis (commande n° 4521) n’est pas arrivé. Écrivez au magasin en ligne.', 'package', 'Bestelling 4521', '//Geachte heer, geachte mevrouw, Ik wacht nog op mijn bestelling (nummer 4521). Het pakket is er nog niet. Kunt u mij helpen? Alvast bedankt. Met vriendelijke groet, Karim Benali//'],
    [false, 'Rappelez à votre jeune collègue Tom que le rapport doit être prêt vendredi.', 'memo', 'Rapport vrijdag', '//Hoi Tom, Even een herinnering: het rapport moet vrijdag klaar zijn. Lukt dat? Groetjes, Sofie//'],
  ];
  d.ex({ g: 21, title: 'Exercice 6 — À vous d’écrire !', stars: '★★★', instr: 'Choisissez une situation F et une situation I. Écrivez l’e-mail, puis vérifiez avec la checklist.' }, (s, mode, top) => {
    const cw = (12.13 - 0.25) / 2; const ch = (6.88 - top - 0.2) / 2;
    sit.forEach(([f, fr, il, subj, nl], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.25); const y = top + Math.floor(i / 2) * (ch + 0.2);
      d.rect(s, x, y, cw, ch, { fill: 'bg1', line: f ? FOR : INF, lw: 2, shadow: true });
      d.oval(s, x + 0.15, y + 0.15, 0.45, 0.45, { fill: f ? FOR : INF });
      d.t(s, f ? 'F' : 'I', x + 0.15, y + 0.15, 0.45, 0.45, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      if (mode === 'q') {
        d.ill(s, il, x + cw - 1.25, y + 0.2, 1.05, 1.05);
        d.t(s, fr, x + 0.75, y + 0.12, cw - 2.1, ch - 0.24, { size: 18, valign: 'middle' });
      } else {
        d.ill(s, il, x + cw - 0.75, y + 0.12, 0.55, 0.55);
        d.t(s, `**${subj}**`, x + 0.75, y + 0.12, cw - 1.6, 0.45, { size: 15, color: 'accent3', valign: 'middle' });
        d.t(s, nl, x + 0.2, y + 0.7, cw - 0.4, ch - 0.8, { size: 14, valign: 'top', fit: true, max: 14, min: 11 });
      }
    });
  });

  // ---------------------------------------------------------------- 22 ex7 concours de politesse
  d.ex({ g: 22, title: 'Exercice 7 — Le concours de politesse', stars: '★★★', instr: 'Vous voulez un jour de congé vendredi. Écrivez à votre chef, meneer Peeters.' }, (s, mode, top) => {
    const h = 6.88 - top;
    // podium
    [[1.55, 1.0, '2nd-place-medal', 0.95], [2.95, 1.45, '1st-place-medal', 0.95], [4.35, 0.7, '3rd-place-medal', 0.95]].forEach(([x, ph, il]) => {
      const y = 6.88 - ph;
      d.rect(s, x - 0.6, y, 1.3, ph, { fill: 'accent1', tr: 20, line: null, radius: 0.03 });
      d.ill(s, il, x - 0.3, y - 0.75, 0.7, 0.7);
    });
    d.t(s, ['**Règles**', '• par deux, **5 minutes**', '• écrivez **deux** e-mails : le plus poli et le moins poli', '• la classe vote : le plus poli et le plus drôle'], 0.6, top + 0.05, 5.0, 2.2, { size: 16, gap: 5 });
    [['smiling-face-with-halo', 'le plus poli', FOR, '//Geachte heer Peeters, Ik wil graag vrijdag een dag verlof nemen. Is dat mogelijk? Mijn werk is klaar. Alvast hartelijk bedankt. Met vriendelijke groet, Karim Benali//'], ['smiling-face-with-horns', 'le moins poli', 'accent6', '//Hé Peeters, vrijdag kom ik niet. Daag!//']].forEach(([il, lab, c, ex], i) => {
      const y = top + i * (h / 2 + 0.05); const ch = h / 2 - 0.1;
      d.rect(s, 5.9, y, 6.83, ch, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.ill(s, il, 6.05, y + 0.15, 0.85, 0.85);
      d.t(s, lab, 7.05, y + 0.15, 4, 0.5, { size: 20, bold: true, color: c, valign: 'middle' });
      if (mode === 'a') d.t(s, ex, 6.1, y + 1.05, 6.45, ch - 1.15, { size: 15, valign: 'top' });
      else for (let k = 0; k < 3; k++) d.line(s, 6.1, y + 1.35 + k * 0.42, 12.5, y + 1.35 + k * 0.42, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
    });
  });

  // ---------------------------------------------------------------- 23 ticket + bilan
  {
    const s = d.ticket({
      g: 23, title: 'Ticket de sortie et bilan du bloc 2',
      q: ['Formule d’appel pour un client que vous ne connaissez pas ?', 'Formule finale passe-partout en formel ?', 'Corrigez : //Hoi meneer Maes, ik stuur je de factuur.//'],
      self: ['Reconnaître', 'Choisir', 'Rédiger'],
      teaser: { icon: 'FaTrophy', text: '**Proficiat! Bloc 1 en 2 zijn klaar.** — Volgende stap : bloc 3, M11 Scheidbare werkwoorden' },
    });
    d.t(s, 'BLOCS 1 ET 2', 7.6, 5.05, 3, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    for (let k = 0; k < 10; k++) {
      const x = 7.6 + k * 0.47; const c = k < 5 ? 'accent2' : 'accent1';
      d.oval(s, x, 5.42, 0.4, 0.4, { fill: c });
      d.t(s, String(k + 1), x, 5.42, 0.4, 0.4, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    }
    d.ill(s, 'trophy', 12.3, 5.3, 0.6, 0.6);
  }
}

module.exports = { meta, build };
