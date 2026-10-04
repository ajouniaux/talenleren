// Module 14 — Woordvorming · La formation des mots
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 14, slug: 'Woordvorming', title: 'Woordvorming — La formation des mots', short: 'Woordvorming', template: 'module_14_woordvorming.md' };

// brick colours: nom, radical, préposition, adjectif, liaison
const BR = { nom: '2A6FB0', rad: 'B83227', prep: '2E7D4F', adj: 'D9700F', link: '6E4A9E', base: '17375E' };

function build(d) {
  // Lego brick with studs
  const brick = (s, text, x, y, w, h, c, o = {}) => {
    const studs = Math.max(2, Math.round(w / 0.75));
    for (let k = 0; k < studs; k++) d.rect(s, x + (w / studs) * k + (w / studs) / 2 - 0.13, y - 0.12, 0.26, 0.14, { fill: c, line: null, radius: 0.03 });
    d.rect(s, x, y, w, h, { fill: c, line: null, radius: 0.05, shadow: o.shadow });
    d.t(s, text, x, y, w, h, { size: o.size || 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2') => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size: 18, color: 'bg1', valign: 'middle' });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Woordvorming', sub: 'La formation des mots', line: 'vergader + zaal = de vergaderzaal',
    visual: (s) => {
      brick(s, 'vergader', 7.0, 2.0, 2.6, 0.9, BR.rad, { size: 24 });
      brick(s, 'zaal', 9.65, 2.0, 1.6, 0.9, BR.base, { size: 24 });
      d.ill(s, 'busts-in-silhouette', 11.5, 1.75, 1.2, 1.2);
      d.line(s, 9.1, 3.15, 9.1, 3.8, { color: 'FFFFFF', lw: 3 });
      d.rect(s, 7.0, 3.95, 5.7, 1.2, { fill: 'FFFFFF', line: null, radius: 0.15, shadow: true });
      d.t(s, '@@de@@ **vergader**@@zaal@@', 7.0, 3.95, 5.7, 1.2, { size: 34, align: 'center', valign: 'middle', head: true });
      d.t(s, 'la salle de réunion', 7.0, 5.25, 5.7, 0.5, { size: 18, italic: true, color: 'bg2', align: 'center' });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCut', h: 'Comprendre', t: 'Je découpe un mot long pour le comprendre.', color: 'accent2' },
      { icon: 'FaCubes', h: 'Former', t: 'Je fabrique des mots composés et des diminutifs.', color: 'accent1' },
      { icon: 'FaSearch', h: 'Deviner', t: 'Je devine le **sens** et l’**article** d’un mot nouveau.', color: 'accent3' },
    ],
    band: 'Avec 500 mots de base, on en comprend des milliers : c’est la stratégie la plus rentable du vocabulaire.',
  });

  // ---------------------------------------------------------------- 3 devinez (question → reveal)
  {
    const W = [['hand', 'schoen', 'main + chaussure', 'le gant', 'gloves'], ['brieven', 'bus', 'lettres + boîte', 'la boîte aux lettres', 'closed-mailbox-with-raised-flag'], ['koel', 'kast', 'frais + armoire', 'le frigo', 'ice'],
      ['zieken', 'huis', 'malades + maison', 'l’hôpital', 'hospital'], ['fiets', 'pad', 'vélo + chemin', 'la piste cyclable', 'bicycle'], ['stof', 'zuiger', 'poussière + suceur', 'l’aspirateur', 'broom']];
    for (const mode of ['q', 'a']) {
      const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — devinez !' }, mode === 'a');
      W.forEach(([a, b, lit, fr, il], i) => {
        const x = 0.6 + (i % 3) * 4.1; const y = 1.75 + Math.floor(i / 3) * 2.6;
        d.rect(s, x, y, 3.85, 2.35, { fill: 'bg1', line: BORDER, shadow: true });
        const wa = 0.4 + a.length * 0.19; const wb = 0.4 + b.length * 0.19;
        const x0 = x + (3.85 - wa - wb - 0.05) / 2;
        d.rect(s, x0, y + 0.25, wa, 0.8, { fill: BR.nom, line: null, radius: 0.06 });
        d.t(s, a, x0, y + 0.25, wa, 0.8, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
        d.rect(s, x0 + wa + 0.05, y + 0.25, wb, 0.8, { fill: BR.base, line: null, radius: 0.06 });
        d.t(s, b, x0 + wa + 0.05, y + 0.25, wb, 0.8, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
        d.t(s, lit, x, y + 1.1, 3.85, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
        if (mode === 'a') { d.ill(s, il, x + 0.35, y + 1.55, 0.65, 0.65); d.t(s, `**${fr}**`, x + 1.05, y + 1.55, 2.7, 0.65, { size: 18, color: 'accent3', valign: 'middle' }); }
        else d.t(s, '?', x, y + 1.5, 3.85, 0.75, { size: 34, bold: true, color: GHOST, align: 'center', valign: 'middle' });
      });
    }
  }

  // ---------------------------------------------------------------- 4 règle d'or
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'La règle d’or : le dernier mot commande' });
    brick(s, 'vergader', 1.2, 2.2, 2.8, 1.0, BR.rad, { size: 26 });
    brick(s, 'zaal', 4.05, 2.0, 2.6, 1.2, BR.base, { size: 32 });
    d.ill(s, 'crown', 4.95, 1.25, 0.8, 0.8);
    d.line(s, 6.7, 2.4, 7.8, 2.0, { color: 'accent3', lw: 2.5 });
    d.line(s, 6.7, 2.9, 7.8, 3.3, { color: 'accent1', lw: 2.5 });
    d.rect(s, 7.85, 1.65, 4.88, 0.75, { fill: 'accent3', tr: 85, line: 'accent3', lw: 1.25 });
    d.t(s, '**le sens** : une //zaal// (salle) pour //vergaderen//', 8.0, 1.65, 4.6, 0.75, { size: 17, valign: 'middle' });
    d.rect(s, 7.85, 2.95, 4.88, 0.75, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.t(s, '**l’article** : @@de@@ zaal → @@de@@ vergaderzaal', 8.0, 2.95, 4.6, 0.75, { size: 17, valign: 'middle' });
    const ex = [['##het## kantoor', '@@de@@ deur', '@@de@@ kantoordeur'], ['@@de@@ computer', '##het## scherm', '##het## computerscherm']];
    ex.forEach(([a, b, c], i) => {
      const y = 4.2 + i * 0.9;
      d.t(s, `//${a}// + //${b}//`, 1.2, y, 5.3, 0.75, { size: 22, valign: 'middle' });
      d.line(s, 6.6, y + 0.37, 7.5, y + 0.37, { color: 'accent5', lw: 2 });
      d.t(s, `//**${c}**//`, 7.7, y, 5.0, 0.75, { size: 24, valign: 'middle' });
    });
    band(s, 'Le **dernier** mot donne le **sens** et l’**article** (M5). Le premier mot **précise** : une //kantoordeur// est une porte.', 6.15, 0.7, 'tx2');
  }

  // ---------------------------------------------------------------- 5 les 4 recettes
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Les 4 recettes' });
    const R = [['nom + nom', BR.nom, 'nom', '//de politieman · de schoenmaat · het appelsap//'], ['radical de verbe + nom', BR.rad, 'radical', '//de eetkamer (eet-en) · de zitplaats · het vliegtuig · de wachtkamer//'], ['préposition + nom', BR.prep, 'prép.', '//de voordeur · de ingang · de uitgang · de bijlage//'], ['adjectif + nom', BR.adj, 'adj.', '//de grootvader · de snelweg · het kleinkind//']];
    R.forEach(([lab, c, b1, ex], i) => {
      const y = 1.8 + i * 1.22;
      brick(s, b1, 0.6, y + 0.2, 1.35, 0.7, c, { size: 15 });
      brick(s, 'nom', 2.0, y + 0.2, 1.1, 0.7, BR.base, { size: 15 });
      d.t(s, lab, 3.35, y + 0.05, 3.0, 1.0, { size: 18, bold: true, color: c, valign: 'middle' });
      d.rect(s, 6.3, y + 0.05, 6.43, 1.0, { fill: c, tr: 90, line: c, lw: 1.25 });
      d.t(s, ex, 6.5, y + 0.05, 6.1, 1.0, { size: 17, valign: 'middle' });
    });
    d.t(s, 'Correction de l’archive : //vliegtuig// (vlieg-en) et //knipbeurt// (knipp-en) sont des « radical + nom ».', 0.6, 6.6, 12.13, 0.3, { size: 14, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 6 piège ordre inversé
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : l’ordre est inversé' });
    d.rect(s, 0.6, 1.7, 12.13, 5.15, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const R = [['salle', 'd’', 'attente', 'wacht', 'kamer', 'de wachtkamer'], ['carte', 'd’', 'identité', 'identiteits', 'kaart', 'de identiteitskaart'], ['verre', 'à', 'vin', 'wijn', 'glas', 'het wijnglas']];
    R.forEach(([f1, f2, f3, n1, n2, full], i) => {
      const y = 2.35 + i * 1.15;
      d.t(s, `**${f1}**`, 0.9, y, 1.2, 0.7, { size: 20, color: BR.base, valign: 'middle', align: 'right' });
      d.t(s, `{{${f2}}}`, 2.15, y, 0.5, 0.7, { size: 20, valign: 'middle', align: 'center' });
      d.t(s, `**${f3}**`, 2.7, y, 1.5, 0.7, { size: 20, color: BR.rad, valign: 'middle' });
      d.line(s, 4.3, y + 0.2, 5.5, y + 0.5, { color: BR.rad, lw: 2 });
      d.line(s, 4.3, y + 0.5, 5.5, y + 0.2, { color: BR.base, lw: 2 });
      const wa = 0.3 + n1.length * 0.17;
      d.rect(s, 5.65, y, wa, 0.7, { fill: BR.rad, line: null, radius: 0.05 });
      d.t(s, n1, 5.65, y, wa, 0.7, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.rect(s, 5.7 + wa, y, 1.1, 0.7, { fill: BR.base, line: null, radius: 0.05 });
      d.t(s, n2, 5.7 + wa, y, 1.1, 0.7, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `→ //**${full}**//`, 6.95 + wa, y, 5.55 - wa, 0.7, { size: 19, valign: 'middle' });
    });
    d.rect(s, 0.9, 5.85, 11.53, 0.8, { fill: 'FFFFFF', line: 'accent6', lw: 1 });
    d.t(s, '{{kamer wacht}} · {{wacht kamer}} → ✓ //**wachtkamer**// : **un seul mot**, sans préposition', 1.1, 5.85, 11.2, 0.8, { size: 19, valign: 'middle', align: 'center' });
  }

  // ---------------------------------------------------------------- 7 -s- / -en-
  {
    const s = d.page({ g: 7, tag: 'VOCABULAIRE', title: 'Le petit lien : -s- ou -en-' });
    [['-s-', BR.prep, ['verjaardag**##s##**taart', 'station**##s##**plein', 'identiteit**##s##**kaart', 'arbeid**##s##**overeenkomst'], ['la tarte d’anniversaire', 'la place de la gare', 'la carte d’identité', 'le contrat de travail'], 0.6],
      ['-en-', BR.link, ['zieke**##n##**huis', 'brieve**##n##**bus', 'panne**##n##**koek', 'boeke**##n##**kast'], ['l’hôpital', 'la boîte aux lettres', 'la crêpe', 'la bibliothèque (meuble)'], 6.81]].forEach(([h, c, ws, fr, x]) => {
      d.rect(s, x, 1.7, 5.92, 4.35, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, x, 1.7, 5.92, 0.75, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, 1.7, 5.92, 0.75, { size: 30, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      ws.forEach((w, i) => {
        const y = 2.6 + i * 0.85;
        d.t(s, `//${w}//`, x + 0.3, y, 3.3, 0.5, { size: 20, valign: 'middle' });
        d.t(s, fr[i], x + 3.65, y, 2.2, 0.5, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      });
    });
    band(s, 'Astuce : on l’**entend**, donc on l’**écrit**. En A1, on apprend ces mots tels quels.', 6.25, 0.6, 'tx2');
  }

  // ---------------------------------------------------------------- 8 diminutifs
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Les diminutifs : -je, -tje, -pje, -etje' });
    d.rect(s, 0.6, 1.7, 12.13, 0.6, { fill: 'accent1', line: null });
    d.t(s, 'Tous les diminutifs sont **HET** : de stoel → **het** stoeltje', 0.6, 1.7, 12.13, 0.6, { size: 19, color: 'bg1', align: 'center', valign: 'middle' });
    const D = [['-je', 'cas général', ['het huis**##je##**', 'het boek**##je##**', 'het kop**##je##**'], 'house'], ['-tje', 'voyelle longue ; l, n, r, w', ['het stoel**##tje##**', 'het ei**##tje##**', 'het vrouw**##tje##**'], 'chair'], ['-pje', 'après m', ['het boom**##pje##**', 'het raam**##pje##**'], 'deciduous-tree'], ['-etje', 'voyelle courte + l, m, n, r, ng', ['het bal**##letje##**', 'het ring**##etje##**'], 'ring']];
    const w = (12.13 - 3 * 0.2) / 4;
    D.forEach(([suf, cond, ex, il], i) => {
      const x = 0.6 + i * (w + 0.2); const y = 2.55;
      d.rect(s, x, y, w, 3.6, { fill: 'bg1', line: 'accent1', lw: 2, shadow: true });
      d.t(s, suf, x, y + 0.1, w, 0.7, { size: 32, bold: true, color: 'accent1', align: 'center', valign: 'middle', head: true });
      d.t(s, cond, x + 0.1, y + 0.8, w - 0.2, 0.55, { size: 13, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.ill(s, il, x + w / 2 - 0.35, y + 1.4, 0.7, 0.7);
      d.t(s, ex.map((e) => `//${e}//`), x + 0.1, y + 2.15, w - 0.2, 1.35, { size: 17, align: 'center', gap: 2 });
    });
    d.t(s, 'Diminutifs figés : //een kopje koffie · een broodje · een biertje · even een momentje//', 0.6, 6.35, 12.13, 0.5, { size: 16, italic: true, color: 'tx2', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 9 -ing / -er
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'Du verbe au nom : -ing et -er' });
    [['radical + ing', 'l’action · toujours **de**', [['vergaderen', 'de vergader**##ing##**'], ['bestellen', 'de bestell**##ing##**'], ['opleiden', 'de opleid**##ing##**'], ['rekenen', 'de reken**##ing##**']], 'accent2', 0.6, 'gear'],
      ['radical + er', 'la personne', [['bakken', 'de bakk**##er##**'], ['werken', 'de werk**##er##**'], ['schrijven', 'de schrijv**##er##**'], ['lezen', 'de lez**##er##**']], 'accent3', 6.81, 'man-cook']].forEach(([h, sub, ex, c, x, il]) => {
      d.rect(s, x, 1.7, 5.92, 4.5, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, x, 1.7, 5.92, 0.95, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x + 0.25, 1.7, 4.2, 0.6, { size: 22, bold: true, color: 'bg1', valign: 'middle', head: true });
      d.t(s, sub, x + 0.25, 2.2, 4.2, 0.4, { size: 14, color: 'bg1', valign: 'middle' });
      d.ill(s, il, x + 4.95, 1.75, 0.8, 0.8);
      ex.forEach(([a, b], k) => {
        const y = 2.85 + k * 0.82;
        d.t(s, `//${a}//`, x + 0.3, y, 2.2, 0.6, { size: 19, valign: 'middle' });
        d.line(s, x + 2.5, y + 0.3, x + 3.1, y + 0.3, { color: c, lw: 2 });
        d.t(s, `//${b}//`, x + 3.2, y, 2.6, 0.6, { size: 19, valign: 'middle' });
      });
    });
    d.t(s, 'Féminin (à reconnaître) : **-ster** (//de schrijfster//) ou **-e** (//de studente//) · //bakken → bakker// : la consonne double reste (M1).', 0.6, 6.35, 12.13, 0.5, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 10 -heid / on- / -loos
  {
    const s = d.page({ g: 10, tag: 'VOCABULAIRE', title: 'De l’adjectif au nom… et au contraire' });
    const C = [['-heid', 'adjectif → nom (**de**)', 'tx2', [['vrij', 'de vrij**heid**'], ['gezond', 'de gezond**heid**'], ['snel', 'de snel**heid**']]], ['on-', 'le contraire', 'accent6', [['mogelijk', '**on**mogelijk'], ['gezond', '**on**gezond'], ['bekend', '**on**bekend']]], ['-loos', 'sans', 'accent5', [['werk', 'werk**loos**'], ['draad', 'draad**loos** (sans fil)'], ['zorg', 'zorge**loos**']]]];
    C.forEach(([h, sub, c, ex], i) => {
      const x = 0.6 + i * 4.1;
      d.rect(s, x, 1.7, 3.85, 4.3, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, x, 1.7, 3.85, 1.1, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, 1.72, 3.85, 0.65, { size: 30, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, sub, x, 2.3, 3.85, 0.45, { size: 14, color: 'bg1', align: 'center', valign: 'middle' });
      ex.forEach(([a, b], k) => {
        const y = 3.0 + k * 0.95;
        d.t(s, `//${a}// → //${b}//`, x + 0.15, y, 3.55, 0.75, { size: 18, align: 'center', valign: 'middle' });
      });
    });
    d.ill(s, 'sneezing-face', 0.7, 6.15, 0.65, 0.65);
    d.t(s, '//Gezondheid!// = « À tes souhaits ! » · //werkloos// vient du M2.', 1.5, 6.15, 11.2, 0.65, { size: 17, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 11 lire un mot long
  {
    const s = d.page({ g: 11, tag: 'À RETENIR', title: 'Lire un mot très long' });
    ['1 · Je trouve le dernier mot', '2 · Je coupe les blocs', '3 · Je lis de droite à gauche'].forEach((lab, i) => {
      s.addText(lab, { shape: d.S.CHEVRON, x: 0.6 + i * 4.0, y: 1.75, w: 4.05, h: 0.85, fill: { color: ['accent2', 'tx2', 'accent3'][i] }, color: 'FFFFFF', bold: true, fontSize: 17, align: 'center', valign: 'middle', margin: 0 });
    });
    brick(s, 'personeel', 2.2, 3.15, 2.8, 0.9, BR.nom, { size: 24 });
    brick(s, 's', 5.05, 3.25, 0.5, 0.8, BR.link, { size: 22 });
    brick(s, 'vergadering', 5.6, 3.05, 3.4, 1.0, BR.base, { size: 26 });
    d.ill(s, 'crown', 6.95, 2.4, 0.6, 0.6);
    d.curve(s, 3.6, 4.15, 7.3, 4.15, { h: 0.45, dir: 1, color: 'accent3', lw: 2.5 });
    d.t(s, '= une **réunion** du **personnel**', 9.2, 3.05, 3.5, 1.0, { size: 19, valign: 'middle' });
    [['de verjaardagstaart', 'une **tarte** d’**anniversaire**'], ['het fietsenrek', 'un **râtelier** à **vélos**']].forEach(([nl, fr], i) => {
      const y = 4.95 + i * 0.7;
      d.t(s, `//**${nl}**//`, 1.2, y, 4.5, 0.6, { size: 20, valign: 'middle' });
      d.t(s, `→ ${fr}`, 5.8, y, 6.8, 0.6, { size: 19, valign: 'middle' });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 12 faux amis
  {
    const s = d.page({ g: 12, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : les faux amis composés' });
    const F = [['stof + zuiger', '« suceur de tissu »', 'l’aspirateur', 'broom'], ['schoon + moeder', '« mère propre »', 'la belle-mère', 'old-woman'], ['hand + schoen', '« chaussure de main »', 'le gant', 'gloves']];
    F.forEach(([w, lit, fr, il], i) => {
      const x = 0.6 + i * 4.1;
      d.rect(s, x, 1.75, 3.85, 3.6, { fill: 'bg1', line: BORDER, shadow: true });
      d.ill(s, il, x + 1.3, 1.9, 1.25, 1.25);
      d.t(s, `//**${w}**//`, x, 3.25, 3.85, 0.55, { size: 20, align: 'center', valign: 'middle' });
      d.t(s, `{{${lit}}}`, x, 3.8, 3.85, 0.45, { size: 16, align: 'center', valign: 'middle' });
      d.t(s, `✓ **${fr}**`, x, 4.3, 3.85, 0.6, { size: 19, color: 'accent3', align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: 'accent2', tr: 88, line: 'accent2', lw: 1.25 });
    d.t(s, ['//stof// = poussière **et** tissu ; //schoon// = propre, mais « belle » dans la famille (//schoonmoeder, schoonzus//).', 'Le contexte et le **dictionnaire** confirment (Van Dale, woorden.org).'], 0.85, 5.65, 11.7, 1.2, { size: 16, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : la boîte à outils du mot' });
    const C = [['Composer', 'FaCubes', 'accent2', ['le **dernier** mot commande (sens + article)', '**un seul** mot', 'ordre **inversé** / français']], ['Diminuer', 'FaSearchPlus', 'accent1', ['//-je, -tje, -pje, -etje//', 'toujours **het**', '//een kopje, een broodje//']], ['Dériver', 'FaCog', 'accent3', ['//-ing// → @@de@@ (l’action)', '//-er / -ster// → la personne', '//-heid// (@@de@@) · //on-// (contraire) · //-loos// (sans)']]];
    C.forEach(([h, ic, c, lines], i) => {
      const x = 0.6 + i * 4.1;
      d.card(s, x, 1.75, 3.85, 4.9, { icon: ic, head: h, color: c, body: lines, size: 18, gap: 14, bullet: true });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Les Lego', '★', 'FaCubes'], ['De ou het ?', '★★', 'FaBalanceScale'], ['Les diminutifs', '★★', 'FaSearchPlus'],
    ['Traduction express', '★★', 'FaLanguage'], ['La famille « werk »', '★', 'FaSitemap'], ['Le mot le plus long', '★★★', 'FaTrophy'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 lego
  const L = ['koffie', 'fiets', 'vergader', 'wacht', 'voor', 'tand', 'parkeer', 'brieven'];
  const R = ['bus', 'pad', 'deur', 'kamer', 'pauze', 'arts', 'zaal', 'plaats'];
  const sol = [4, 1, 6, 3, 2, 5, 7, 0];
  const words = ['koffiepauze', 'fietspad', 'vergaderzaal', 'wachtkamer', 'voordeur', 'tandarts', 'parkeerplaats', 'brievenbus'];
  d.ex({ g: 15, title: 'Exercice 1 — Les Lego', stars: '★', instr: 'Assemblez les briques (1–8 avec a–h).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 8;
    if (mode === 'a') sol.forEach((r, i) => d.line(s, 3.05, top + i * rh + rh / 2, 6.0, top + r * rh + rh / 2, { color: 'tx2', lw: 2 }));
    L.forEach((w, i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.07, 2.4, rh - 0.14, { fill: BR.rad, line: null, radius: 0.05 });
      d.t(s, `${i + 1}  ${w}`, 0.7, y + 0.07, 2.2, rh - 0.14, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
    });
    R.forEach((w, i) => {
      const y = top + i * rh;
      d.rect(s, 6.05, y + 0.07, 1.9, rh - 0.14, { fill: BR.base, line: null, radius: 0.05 });
      d.t(s, `${'abcdefgh'[i]}  ${w}`, 6.15, y + 0.07, 1.7, rh - 0.14, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
    });
    if (mode === 'a') {
      d.rect(s, 8.4, top, 4.33, 6.88 - top, { fill: 'EDF6F0', line: 'accent3', lw: 1.25 });
      d.t(s, words.map((w, i) => `**${i + 1}${'abcdefgh'[sol[i]]}** //${w}//`), 8.6, top + 0.1, 4.0, 6.68 - top, { size: 18, gap: 6, valign: 'middle' });
    } else d.ill(s, 'building-construction', 9.6, top + 1.2, 2.0, 2.0);
  });

  // ---------------------------------------------------------------- 16 ex2 de ou het
  const ex2 = [['kantoor (het)', 'stoel (de)', 'de kantoorstoel', 0], ['computer (de)', 'scherm (het)', 'het computerscherm', 1], ['koffie (de)', 'kopje (het)', 'het koffiekopje', 1], ['fiets (de)', 'pad (het)', 'het fietspad', 1], ['school (de)', 'boek (het)', 'het schoolboek', 1], ['huis (het)', 'deur (de)', 'de huisdeur', 0], ['telefoon (de)', 'nummer (het)', 'het telefoonnummer', 1], ['werk (het)', 'plek (de)', 'de werkplek', 0]];
  d.ex({ g: 16, title: 'Exercice 2 — De ou het ?', stars: '★★', instr: 'Quel est l’article du mot composé ? Regardez le dernier bloc.' }, (s, mode, top) => {
    if (mode === 'q') {
      const rh = (6.88 - top) / 4;
      ex2.forEach(([a, b], i) => {
        const x = 0.6 + (i % 2) * 6.18; const y = top + Math.floor(i / 2) * rh;
        d.rect(s, x, y + 0.08, 5.95, rh - 0.16, { fill: 'bg1', line: BORDER, shadow: true });
        d.t(s, `//${a}// + //${b}//`, x + 0.2, y + 0.08, 4.2, rh - 0.16, { size: 19, valign: 'middle' });
        d.t(s, '→ …… ?', x + 4.4, y + 0.08, 1.45, rh - 0.16, { size: 19, color: 'accent5', valign: 'middle' });
      });
    } else {
      [['DE', 'tx2', 0, 0.6], ['HET', 'accent1', 1, 6.81]].forEach(([lab, c, het, x]) => {
        d.rect(s, x, top, 5.92, 6.88 - top, { fill: c, tr: 90, line: c, lw: 2 });
        d.rect(s, x, top, 5.92, 0.65, { fill: c, line: null, radius: 0.08 });
        d.t(s, lab, x, top, 5.92, 0.65, { size: 26, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
        ex2.filter((e) => e[3] === het).forEach(([, , w], k) => d.t(s, `//**${w}**//`, x, top + 0.85 + k * 0.7, 5.92, 0.6, { size: 22, align: 'center', valign: 'middle' }));
      });
    }
  });

  // ---------------------------------------------------------------- 17 ex3 diminutifs
  const ex3 = [['het huis', 'het huis[[je]]', 'house'], ['de stoel', 'het stoel[[tje]]', 'chair'], ['de boom', 'het boom[[pje]]', 'deciduous-tree'], ['de bal', 'het bal[[letje]]', 'soccer-ball'], ['het brood', 'het brood[[je]]', 'bread'], ['de vrouw', 'het vrouw[[tje]]', 'woman'], ['de ring', 'het ring[[etje]]', 'ring'], ['het raam', 'het raam[[pje]]', 'window']];
  d.ex({ g: 17, title: 'Exercice 3 — Les diminutifs', stars: '★★', instr: 'Formez le diminutif : -je, -tje, -pje ou -etje ?' }, (s, mode, top) => {
    const rh = (6.88 - top) / 4;
    ex3.forEach(([a, b, il], i) => {
      const x = 0.6 + (i % 2) * 4.65; const y = top + Math.floor(i / 2) * rh;
      d.ill(s, il, x, y + (rh - 0.7) / 2, 0.7, 0.7);
      d.t(s, [`**${i + 1}**  //${a}//`, `→ //${b}//`], x + 0.85, y, 3.7, rh, { size: 19, valign: 'middle', gap: 2, mode });
    });
    d.rect(s, 9.9, top, 2.83, 6.88 - top, { fill: 'FDF1E6', line: 'accent1', lw: 1.25 });
    d.t(s, ['**-je** général', '**-tje** voyelle longue ; l, n, r, w', '**-pje** après m', '**-etje** voyelle courte + l, m, n, r, ng', '→ toujours **het**'], 10.05, top + 0.15, 2.55, 6.6 - top, { size: 15, gap: 10 });
  });

  // ---------------------------------------------------------------- 18 ex4 traduction express
  const ex4 = [['la salle d’attente', 'wachten, kamer', 'de wachtkamer'], ['le verre à vin', 'wijn, glas', 'het wijnglas'], ['la brosse à dents', 'tanden, borstel', 'de tandenborstel'], ['le jus d’orange', 'sinaasappel, sap', 'het sinaasappelsap'], ['la place de parking', 'parkeren, plaats', 'de parkeerplaats'], ['l’heure de pointe', 'spits, uur', 'het spitsuur'], ['le numéro de téléphone', 'telefoon, nummer', 'het telefoonnummer'], ['la salle de réunion', 'vergaderen, zaal', 'de vergaderzaal']];
  d.ex({ g: 18, title: 'Exercice 4 — Traduction express', stars: '★★', instr: 'Construisez le mot composé (avec son article). Attention à l’ordre !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 8;
    ex4.forEach(([fr, hint, nl], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.36) / 2, 0.36, 'accent5', 12);
      d.rect(s, 1.05, y + 0.04, 3.9, rh - 0.1, { fill: 'bg2', line: BORDER });
      d.t(s, fr, 1.2, y + 0.04, 3.7, rh - 0.1, { size: 17, valign: 'middle' });
      d.t(s, `//(${hint})//`, 5.0, y + 0.04, 2.6, rh - 0.1, { size: 14, color: 'accent5', valign: 'middle' });
      d.line(s, 7.55, y + rh / 2 - 0.02, 8.05, y + rh / 2 - 0.02, { color: 'accent1', lw: 2.5 });
      d.rect(s, 8.1, y + 0.04, 4.63, rh - 0.1, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**${nl}**//`, 8.25, y + 0.04, 4.4, rh - 0.1, { size: 18, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 19 ex5 famille werk
  const fam = [['werken', 'travailler'], ['de werker', 'le travailleur'], ['de werknemer', 'l’employé'], ['de werkgever', 'l’employeur'], ['de werkplek', 'le poste de travail'], ['werkloos', 'sans emploi'], ['het thuiswerk', 'le télétravail'], ['het werkwoord', 'le verbe']];
  d.ex({ g: 19, title: 'Exercice 5 — La famille « werk »', stars: '★', instr: 'Combien de mots avec « werk » connaissez-vous ? Complétez la carte mentale.' }, (s, mode, top) => {
    const cx = 6.66; const cy = top + (6.88 - top) / 2;
    const pos = [[-4.6, -1.65], [-4.6, -0.55], [-4.6, 0.55], [-4.6, 1.65], [4.6, -1.65], [4.6, -0.55], [4.6, 0.55], [4.6, 1.65]];
    pos.forEach(([dx, dy]) => d.line(s, cx + (dx < 0 ? -1.2 : 1.2), cy, cx + dx + (dx < 0 ? 1.4 : -1.4), cy + dy, { color: 'accent5', lw: 1.5, arrow: false }));
    d.oval(s, cx - 1.25, cy - 0.65, 2.5, 1.3, { fill: 'accent1' });
    d.t(s, 'werk', cx - 1.25, cy - 0.65, 2.5, 1.3, { size: 34, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    pos.forEach(([dx, dy], i) => {
      const x = cx + dx - 1.4; const y = cy + dy - 0.42;
      d.rect(s, x, y, 2.8, 0.84, { fill: mode === 'a' ? 'bg1' : 'FFFFFF', line: mode === 'a' ? 'accent1' : GHOST, lw: 1.5, dash: mode === 'a' ? undefined : 'dash', radius: 0.2 });
      if (mode === 'a') d.t(s, [`//**${fam[i][0]}**//`, fam[i][1]], x, y, 2.8, 0.84, { size: 15, align: 'center', valign: 'middle', gap: 0 });
    });
  });

  // ---------------------------------------------------------------- 20 ex6 le mot le plus long
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Le mot le plus long', stars: '★★★' });
    const chain = [['vergader', BR.rad], ['zaal', BR.base], ['sleutel', BR.nom], ['kast', BR.prep], ['je', BR.adj]];
    let x = 0.9;
    chain.forEach(([w, c], i) => { const ww = 0.45 + w.length * 0.2; brick(s, w, x, 2.0, ww, 0.85, c, { size: 22 }); x += ww + 0.06; });
    d.t(s, '→ ##het## //vergaderzaalsleutelkastje// (le petit coffre à clés de la salle de réunion)', 0.6, 3.05, 12.13, 0.55, { size: 18, align: 'center', valign: 'middle' });
    d.ill(s, 'stopwatch', 0.8, 4.0, 1.3, 1.3);
    d.t(s, ['**Par équipes, 3 minutes.**', 'Chaque brique doit avoir un sens.', 'On gagne avec le mot le plus long **et** correct (article compris !).'], 2.3, 3.9, 6.0, 2.0, { size: 18, gap: 8, valign: 'middle' });
    d.rect(s, 8.6, 3.9, 4.13, 2.95, { fill: 'bg2', line: BORDER });
    d.t(s, 'BRIQUES DE DÉPART', 8.6, 4.0, 4.13, 0.35, { size: 12, bold: true, color: 'accent5', align: 'center', cs: 2 });
    ['koffie', 'fiets', 'school', 'kantoor', 'werk'].forEach((w, i) => brick(s, w, 8.85 + (i % 2) * 1.9, 4.65 + Math.floor(i / 2) * 0.75, 1.7, 0.55, [BR.nom, BR.prep, BR.adj, BR.base, BR.rad][i], { size: 16 }));
    d.ill(s, 'trophy', 6.9, 5.7, 1.1, 1.1);
  }

  // ---------------------------------------------------------------- 21 ticket
  d.ticket({
    g: 21,
    q: ['Que signifie //de fietsenstalling// (//stalling// = le garage) ?', 'Article : //school (de) + gebouw (het)// → …… //schoolgebouw//', 'Le diminutif de //de bal// ?'],
    self: ['Comprendre', 'Former', 'Deviner'],
    teaser: { icon: 'FaHistory', text: '**Volgende keer : Het perfectum** — //Wat heb je gisteren gedaan?//' },
  });
}

module.exports = { meta, build };
