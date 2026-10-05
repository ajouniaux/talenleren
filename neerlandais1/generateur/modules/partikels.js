// Aan, af, op, uit… — Les significations des particules séparables (complément B1–B2)
const { BORDER, plain, HEX, PURPLE } = require('../lib');

const meta = {
  n: 'P', slug: 'Partikels', title: 'Aan, af, op, uit… — Les significations des particules séparables', short: 'Aan, af, op, uit…',
  template: 'partikels_b1_b2.md', file: 'Partikels_Les_particules_separables.pptx',
  docTitle: 'Aan, af, op, uit… — Les significations des particules séparables',
  foot: 'Néerlandais · B1–B2 · Les significations des particules séparables',
};

// une couleur par particule
const C = { AAN: 'accent2', AF: 'accent6', OP: 'accent3', UIT: 'accent1', IN: 'purple', BIJ: 'accent4', TOE: '0E7C86', NA: 'tx2', DOOR: '7A5230', OVER: 'accent2', MEE: 'accent3', TEGEN: 'accent6', OM: 'purple', VOOR: 'accent1' };
const PA = 'accent1'; // particule = orange (comme au M11)
const VB = 'accent6'; // verbe = rouge
const hexOf = (c) => (c === 'purple' ? PURPLE : HEX[c] || c);

// les fiches (diapos 6 à 12) : [particule, [[sens, [[verbe, traduction], …]], …], complément]
const FICHES = {
  6: [['AAN', [['contact, vers', [['aanraken', 'toucher'], ['aanspreken', 'adresser la parole'], ['aankomen', 'arriver']]], ['début, mise en marche', [['aanzetten', 'allumer'], ['aangaan', 's’allumer ; conclure (un contrat)']]], ['acquérir, ajuster', [['aanleren', 'apprendre, acquérir'], ['aanpassen', 'adapter']]]], '//aankomen// : arriver · toucher · grossir !'],
    ['AF', [['vers le bas, s’éloigner', [['afdalen', 'descendre'], ['afstappen', 'descendre (du vélo)']]], ['enlever, diminuer', [['afnemen', 'enlever ; diminuer'], ['afleren', 'perdre (une habitude)'], ['afvallen', 'maigrir']]], ['finir', [['afmaken', 'terminer'], ['afronden', 'finaliser ; arrondir'], ['afsluiten', 'clôturer']]]], 'à apprendre en bloc : //afspreken// (convenir)']],
  7: [['OP', [['vers le haut', [['opstaan', 'se lever'], ['optillen', 'soulever']]], ['entièrement, jusqu’à épuisement', [['opeten', 'manger tout'], ['opruimen', 'ranger']]], ['noter, contacter, chercher', [['opschrijven', 'noter'], ['opbellen', 'téléphoner'], ['opzoeken', 'chercher ; rendre visite']]]], 'et : //opvallen// (se remarquer), //opbouwen// (construire)'],
    ['UIT', [['vers l’extérieur', [['uitgaan', 'sortir'], ['uitstappen', 'descendre (d’un véhicule)']]], ['jusqu’au bout, arrêt', [['uitlezen', 'finir de lire'], ['uitspreken', 'prononcer ; finir de parler'], ['uitzetten', 'éteindre']]], ['montrer, répandre', [['uitleggen', 'expliquer'], ['uitnodigen', 'inviter'], ['uitstellen', 'reporter']]]], '//Laat me uitspreken!// = laisse-moi finir']],
  8: [['IN', [['vers l’intérieur', [['instappen', 'monter (véhicule)'], ['inademen', 'inspirer'], ['inloggen', 'se connecter']]], ['remettre, remplir', [['inleveren', 'remettre, rendre'], ['indienen', 'introduire (une demande)'], ['invullen', 'remplir']]], ['à fond', [['instuderen', 'étudier à fond'], ['inwerken', 'former (un·e nouveau·elle)']]]], '//invoeren// : introduire ; importer ; encoder'],
    ['BIJ', [['en plus', [['bijleren', 'apprendre en plus'], ['bijverdienen', 'gagner en plus'], ['bijleggen', 'ajouter (de l’argent) ; régler (un conflit)']]], ['être présent, aider', [['bijwonen', 'assister à'], ['bijdragen', 'contribuer'], ['bijstaan', 'assister qn']]], ['mettre à jour', [['bijhouden', 'tenir à jour'], ['bijwerken', 'mettre à jour'], ['bijsturen', 'corriger le tir']]]], '//Ik heb veel bijgeleerd.// (très courant en BE)']],
  9: [['TOE', [['vers', [['toekijken', 'regarder sans agir'], ['toespreken', 's’adresser à (un public)'], ['toelichten', 'commenter, expliquer']]], ['en plus, permettre', [['toevoegen', 'ajouter'], ['toenemen', 'augmenter'], ['toegeven', 'avouer ; céder'], ['toestaan', 'permettre']]], ['fermé (surtout BE)', [['toedoen', 'fermer'], ['toeknopen', 'boutonner']]]], 'NL : //dichtdoen// (fermer) · //toepassen// : appliquer'],
    ['NA', [['après', [['nadenken', 'réfléchir'], ['nakomen', 'respecter (une promesse)'], ['nasturen', 'faire suivre']]], ['imiter', [['nadoen', 'imiter'], ['nazeggen', 'répéter après qn'], ['nabootsen', 'imiter']]], ['vérifier', [['nakijken', 'vérifier, corriger'], ['nalezen', 'relire'], ['nagaan', 'vérifier'], ['navragen', 'se renseigner']]]], '//Kun je de cijfers nog even nakijken?//']],
  10: [['DOOR', [['à travers', [['doorsnijden', 'couper en deux']]], ['continuer', [['doorgaan', 'continuer ; avoir lieu'], ['doorwerken', 'continuer à travailler'], ['doorlezen', 'lire jusqu’au bout']]], ['transmettre', [['doorsturen', 'transférer'], ['doorgeven', 'transmettre'], ['doorverbinden', 'transférer (un appel)']]]], '//De vergadering gaat niet door.// = n’a pas lieu !'],
    ['OVER', [['d’un côté à l’autre', [['oversteken', 'traverser'], ['overstappen', 'changer (de train)'], ['overmaken', 'virer (de l’argent)']]], ['de nouveau', [['overdoen', 'refaire'], ['overschrijven', 'recopier ; BE : virer']]], ['passer à qn', [['overnemen', 'reprendre'], ['overdragen', 'transmettre (un dossier)']]]], 'et : //overlopen// (déborder) · doublets : diapo 18']],
  11: [['MEE', [['avec, participer', [['meegaan', 'accompagner'], ['meenemen', 'emporter'], ['meedoen', 'participer'], ['meewerken', 'collaborer'], ['meedenken', 'réfléchir avec']]]], ''],
    ['TEGEN', [['contre, à l’encontre', [['tegenkomen', 'rencontrer par hasard'], ['tegenhouden', 'retenir, arrêter'], ['tegenspreken', 'contredire']]]], '']],
  12: [['OM', [['autour, détour', [['omrijden', 'faire un détour'], ['omkijken', 'se retourner']]], ['retourner, changer', [['omdraaien', 'retourner'], ['omzetten', 'convertir'], ['omrekenen', 'convertir (un montant)'], ['zich omkleden', 'se changer']]], ['figuré', [['omgaan met', 'gérer ; fréquenter']]]], '//Hoe ga je om met stress?//'],
    ['VOOR', [['devant, avant', [['voorbereiden', 'préparer'], ['voorlezen', 'lire à voix haute']]], ['montrer, proposer', [['voorstellen', 'proposer ; présenter'], ['voordoen', 'montrer comment faire'], ['voorzeggen', 'souffler (la réponse)']]], ['figuré', [['voorkomen', 'se produire']]]], 'doublet : //voorKOmen// = éviter (diapo 18)']],
};
const TITLES = { 6: 'AAN- et AF-', 7: 'OP- et UIT-', 8: 'IN- et BIJ-', 9: 'TOE- et NA-', 10: 'DOOR- et OVER-', 11: 'MEE- et TEGEN-', 12: 'OM- et VOOR-' };

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const trapFrame = (s, y, h) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, y + 0.15, 'accent6', 0.32, 12);
  };
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 20; const h = o.h || 0.62; const gap = o.gap ?? 0.09;
    let cx = x;
    parts.forEach(([t, ty]) => {
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: VB, lw: 2.5, color: VB, bold: true },
        v2: { fill: 'FFFFFF', line: VB, lw: 2, dash: 'dash', color: VB, bold: true },
        p: { fill: PA, line: null, color: 'bg1', bold: true },
        e: { fill: 'FFFFFF', line: null, color: 'accent5', bold: true },
      }[ty || 'n'];
      const w = wOf(t, size) * (st.bold ? 1.12 : 1) + (st.bold ? 0.08 : 0);
      if (ty !== 'e') d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, dash: st.dash, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      cx += w + gap;
    });
    return cx - gap;
  };
  const arrow = (s, x1, y1, x2, y2, c, lw = 3.5) => d.line(s, x1, y1, x2, y2, { color: c, lw });
  const seg = (s, x1, y1, x2, y2, c, lw = 3.5) => d.line(s, x1, y1, x2, y2, { color: c, lw, arrow: false });
  // pictogramme de la particule (carré de côté z)
  const picto = (s, k, x, y, z, c) => {
    const cy = y + z / 2;
    const box = (bx, by, bw, bh) => {
      d.rect(s, bx, by, bw, bh, { fill: 'FFFFFF', line: 'tx2', lw: 2, radius: 0 });
      d.rect(s, bx - 0.04, by + bh * 0.33, 0.08, bh * 0.34, { fill: 'FFFFFF', line: null, radius: 0 });
    };
    if (k === 'AAN') {
      d.rect(s, x + z * 0.72, y + z * 0.1, z * 0.12, z * 0.8, { fill: '8A96A8', line: null, radius: 0 });
      arrow(s, x + z * 0.06, cy, x + z * 0.7, cy, c);
    } else if (k === 'AF') {
      d.rect(s, x + z * 0.05, y + z * 0.12, z * 0.42, z * 0.12, { fill: '8A96A8', line: null, radius: 0 });
      arrow(s, x + z * 0.28, y + z * 0.3, x + z * 0.9, y + z * 0.9, c);
    } else if (k === 'OP') {
      d.rect(s, x + z * 0.1, y + z * 0.82, z * 0.8, z * 0.08, { fill: '8A96A8', line: null, radius: 0 });
      arrow(s, x + z * 0.5, y + z * 0.78, x + z * 0.5, y + z * 0.08, c);
    } else if (k === 'UIT' || k === 'IN') {
      box(x + z * 0.45, y + z * 0.2, z * 0.48, z * 0.6);
      if (k === 'IN') arrow(s, x + z * 0.04, cy, x + z * 0.72, cy, c);
      else arrow(s, x + z * 0.72, cy, x + z * 0.04, cy, c);
    } else if (k === 'BIJ') {
      d.rect(s, x + z * 0.08, y + z * 0.3, z * 0.36, z * 0.4, { fill: 'D5DCE6', line: null, radius: 0.04 });
      seg(s, x + z * 0.52, cy, x + z * 0.92, cy, c, 5);
      seg(s, x + z * 0.72, y + z * 0.3, x + z * 0.72, y + z * 0.7, c, 5);
    } else if (k === 'TOE') {
      d.oval(s, x + z * 0.66, y + z * 0.3, z * 0.3, z * 0.4, { fill: null, line: 'tx2', lw: 2 });
      d.oval(s, x + z * 0.76, y + z * 0.44, z * 0.1, z * 0.12, { fill: 'tx2' });
      arrow(s, x + z * 0.04, cy, x + z * 0.7, cy, c);
    } else if (k === 'NA') {
      arrow(s, x + z * 0.48, y + z * 0.35, x + z * 0.95, y + z * 0.35, '8A96A8', 3);
      arrow(s, x + z * 0.05, y + z * 0.65, x + z * 0.52, y + z * 0.65, c);
    } else if (k === 'DOOR') {
      d.rect(s, x + z * 0.3, y + z * 0.3, z * 0.4, z * 0.4, { fill: '4A5A70', line: null, radius: 0.12 });
      d.rect(s, x + z * 0.36, y + z * 0.38, z * 0.28, z * 0.24, { fill: '1B2333', line: null, radius: 0.08 });
      arrow(s, x + z * 0.04, cy, x + z * 0.96, cy, c);
    } else if (k === 'OVER') {
      d.rect(s, x + z * 0.42, y + z * 0.55, z * 0.16, z * 0.37, { fill: '8A96A8', line: null, radius: 0 });
      d.curve(s, x + z * 0.08, y + z * 0.85, x + z * 0.92, y + z * 0.85, { color: c, lw: 3, h: z * 0.6, dir: -1 });
    } else if (k === 'MEE') {
      arrow(s, x + z * 0.08, y + z * 0.35, x + z * 0.92, y + z * 0.35, c);
      arrow(s, x + z * 0.08, y + z * 0.65, x + z * 0.92, y + z * 0.65, c);
    } else if (k === 'TEGEN') {
      arrow(s, x + z * 0.04, cy, x + z * 0.46, cy, c);
      arrow(s, x + z * 0.96, cy, x + z * 0.54, cy, '8A96A8', 3);
    } else if (k === 'OM') {
      d.curve(s, x + z * 0.12, y + z * 0.5, x + z * 0.88, y + z * 0.5, { color: c, lw: 3, h: z * 0.36, dir: -1 });
      d.oval(s, x + z * 0.4, y + z * 0.42, z * 0.2, z * 0.2, { fill: 'D5DCE6' });
    } else if (k === 'VOOR') {
      d.ill(s, 'bust-in-silhouette', x + z * 0.5, y + z * 0.1, z * 0.45, z * 0.45);
      arrow(s, x + z * 0.06, y + z * 0.72, x + z * 0.94, y + z * 0.72, c);
    }
  };
  // une fiche de particule (colonne)
  const fiche = (s, x, y, w, h, [k, senses, extra]) => {
    const c = C[k];
    d.rect(s, x, y, w, h, { fill: 'bg1', line: c, lw: 2, radius: 0.1, shadow: true });
    d.rect(s, x, y, w, 0.95, { fill: c, tr: 88, line: null, radius: 0.1 });
    d.rect(s, x + 0.15, y + 0.1, 0.75, 0.75, { fill: 'FFFFFF', line: null, radius: 0.08 });
    picto(s, k, x + 0.17, y + 0.12, 0.71, hexOf(c));
    d.t(s, `**${k}-**`, x + 1.05, y + 0.1, w - 1.2, 0.75, { size: 30, color: c, valign: 'middle', head: true });
    const ex = extra ? 0.5 : 0;
    const tot = senses.reduce((a, [, V]) => a + V.length + 1.6, 0);
    let sy = y + 1.02;
    senses.forEach(([lab, V], i) => {
      const sh = ((h - 1.05 - ex) * (V.length + 1.6)) / tot;
      d.t(s, [`**${senses.length > 1 ? ['①', '②', '③'][i] + ' ' : ''}${lab}**`, ...V.map(([v, f]) => `//**${v}**// ${f}`)], x + 0.2, sy, w - 0.35, sh, { size: senses.length > 1 ? 15 : 17, gap: 0, valign: 'middle', color: 'tx1' });
      if (i < senses.length - 1) d.line(s, x + 0.2, sy + sh, x + w - 0.2, sy + sh, { color: BORDER, lw: 0.75, arrow: false });
      sy += sh;
    });
    if (extra) {
      d.rect(s, x + 0.12, y + h - 0.55, w - 0.24, 0.45, { fill: c, tr: 90, line: null, radius: 0.08 });
      d.t(s, extra, x + 0.2, y + h - 0.55, w - 0.4, 0.45, { size: 13, valign: 'middle', color: 'tx1' });
    }
  };
  // l'étoile du verbe (P2)
  const star = (s, cx, cy, verb, rays, o = {}) => {
    const rx = o.rx || 2.15; const ry = o.ry || 2.0; const cw = o.cw || 1.78; const chh = o.ch || 0.74;
    rays.forEach(([v, f], i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / rays.length;
      const px = cx + rx * Math.cos(a); const py = cy + ry * Math.sin(a);
      d.line(s, cx, cy, px, py, { color: BORDER, lw: 1.5, arrow: false });
      const col = C[o.keys ? o.keys[i] : 'UIT'];
      d.rect(s, px - cw / 2, py - chh / 2, cw, chh, { fill: 'FFFFFF', line: col, lw: 1.75, radius: 0.12 });
      d.t(s, f ? [`//**${v}**//`, f] : `//**${v}**//`, px - cw / 2 + 0.04, py - chh / 2, cw - 0.08, chh, { size: 12, gap: 0, align: 'center', valign: 'middle', color: 'tx1' });
    });
    d.oval(s, cx - 0.75, cy - 0.45, 1.5, 0.9, { fill: 'tx2' });
    d.t(s, verb, cx - 0.75, cy - 0.45, 1.5, 0.9, { size: o.vs || 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'COMPLÉMENT · B1–B2', title: 'Aan, af, op, uit…', sub: 'Les significations des particules séparables', line: 'aanleren · bijleren · afleren',
    visual: (s) => {
      const cx = 10.15; const cy = 2.75;
      [['aan', 'AAN', 10.15, 1.0], ['bij', 'BIJ', 12.0, 3.65], ['af', 'AF', 8.3, 3.65]].forEach(([p, k, x, y]) => {
        d.line(s, cx, cy, x, y + 0.35, { color: hexOf(C[k]), lw: 3, arrow: false });
        d.rect(s, x - 1.05, y, 2.1, 0.7, { fill: C[k], line: null, radius: 0.15 });
        d.t(s, `//**${p}**leren//`, x - 1.05, y, 2.1, 0.7, { size: 20, color: 'bg1', align: 'center', valign: 'middle' });
      });
      d.oval(s, cx - 0.9, cy - 0.5, 1.8, 1.0, { fill: 'FFFFFF' });
      d.t(s, 'leren', cx - 0.9, cy - 0.5, 1.8, 1.0, { size: 26, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCompass', h: 'Comprendre', t: 'Je connais les sens principaux de 14 particules.', color: 'accent2' },
      { icon: 'FaSearch', h: 'Deviner', t: 'Je devine le sens d’un verbe à particule inconnu.', color: 'accent1' },
      { icon: 'FaCogs', h: 'Utiliser', t: 'J’utilise les verbes à particule avec le bon sens, à la bonne place.', color: 'accent3' },
    ],
    band: 'Un verbe à particule sur deux se devine. Les autres s’apprennent comme des blocs, avec leur contexte.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — leren, aanleren, bijleren, afleren' });
    const P = [['AAN', 'Kinderen leren snel een taal **##aan##**.', 'student'], ['BIJ', 'In die cursus heb ik veel **%%bij%%**geleerd.', 'books'], ['AF', 'Ik wil die slechte gewoonte **!!af!!**leren.', 'no-smoking']];
    const w = (12.13 - 2 * 0.25) / 3;
    P.forEach(([k, t, il], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 3.2, { fill: 'FFFFFF', line: C[k], lw: 2, radius: 0.12, shadow: true });
      d.ill(s, il, x + w / 2 - 0.45, 1.85, 0.9, 0.9);
      d.t(s, `//${t}//`, x + 0.2, 2.85, w - 0.4, 1.1, { size: 19, align: 'center', valign: 'middle' });
      d.rect(s, x + w / 2 - 0.9, 4.05, 1.8, 0.6, { fill: C[k], tr: 85, line: C[k], lw: 1.5, dash: 'dash', radius: 0.1 });
      d.t(s, `${k.toLowerCase()}- = ?`, x + w / 2 - 0.9, 4.05, 1.8, 0.6, { size: 18, bold: true, color: C[k], align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.15, 12.13, 1.6, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.45, 1.0, 1.0);
    d.t(s, ['Quel sens apporte chaque particule ?', 'Et //**ver**talen// : //ver-// est-il aussi une particule séparable ?'], 2.1, 5.15, 10.4, 1.6, { size: 20, valign: 'middle', gap: 6 });
  }

  // ---------------------------------------------------------------- 4 rappel place
  {
    const s = d.page({ g: 4, tag: 'RAPPEL M11', title: 'Rappel express : la place de la particule' });
    const R = [['phrase simple', [['Ik', 'n'], ['lees', 'v'], ['de tekst', 'n'], ['na.', 'p']]], ['modal', [['Ik', 'n'], ['wil', 'v'], ['de tekst', 'n'], ['nalezen.', 'v2']]], ['subordonnée', [['…, omdat', 'n'], ['ik', 'n'], ['de tekst', 'n'], ['nalees.', 'v']]], ['passé composé', [['Ik', 'n'], ['heb', 'v'], ['de tekst', 'n'], ['na', 'p'], ['ge', 'e'], ['lezen.', 'v2']]], ['te + infinitif', [['Ik', 'n'], ['probeer', 'v'], ['de tekst', 'n'], ['na', 'p'], ['te', 'e'], ['lezen.', 'v2']]], ['impératif', [['Lees', 'v'], ['de tekst', 'n'], ['na!', 'p']]]];
    R.forEach(([lab, parts], i) => {
      const y = 1.72 + i * 0.72;
      d.t(s, lab, 0.6, y, 2.0, 0.6, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      strip(s, 2.5, y, parts, { size: 17, h: 0.58 });
    });
    d.rect(s, 9.2, 1.72, 3.53, 4.2, { fill: 'FDF1E6', line: PA, lw: 1.5, radius: 0.1 });
    d.t(s, ['**Le test de l’accent**', 'Il tombe sur la particule :', '//**NA**lezen · **OP**bellen · **UIT**leggen//', '', '//ge-// et //te// se glissent **entre** la particule et le verbe : //na**ge**lezen · na **te** lezen//'], 9.35, 1.8, 3.25, 4.05, { size: 15, gap: 4, valign: 'middle' });
    band(s, 'Au M11, on a appris **où** placer la particule. Aujourd’hui : **ce qu’elle veut dire**.', 6.15, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 5 P1 les trois étages
  {
    const s = d.page({ g: 5, tag: 'MÉTHODE', title: 'Le principe : les trois étages du sens' });
    const E = [['①', 'LA DIRECTION', 'sens propre, spatial', 'uitgaan', 'sortir', 'Ik ga vanavond **uit**.', 'accent2', 1.15, 'door'], ['②', 'LE RÉSULTAT', 'jusqu’au bout, fin, début', 'uitlezen', 'finir un livre', 'Ik heb het boek **uit**gelezen.', 'accent1', 1.85, 'chequered-flag'], ['③', 'LE SENS FIGURÉ', 'à apprendre en bloc', 'uitleggen', 'expliquer', 'Kun je dat **uit**leggen?', 'purple', 2.55, 'light-bulb']];
    const base = 5.9; const sw = 3.9;
    E.forEach(([n, h, sub, v, fr, ex, c, hh, ic], i) => {
      const x = 0.7 + i * (sw + 0.15);
      d.rect(s, x, base - hh, sw, hh, { fill: c, tr: 80, line: c, lw: 2, radius: 0.06 });
      d.t(s, [`**${n} ${h}**`, sub], x + 0.15, base - hh + 0.08, sw - 1.0, 0.75, { size: 15, gap: 0, color: 'tx2' });
      d.ill(s, ic, x + sw - 0.8, base - hh + 0.15, 0.62, 0.62);
      d.rect(s, x + 0.15, base - hh - 1.37, sw - 0.3, 1.25, { fill: 'FFFFFF', line: c, lw: 1.5, radius: 0.1, shadow: true });
      d.t(s, [`//**${v}**// · ${fr}`, `//${ex}//`], x + 0.25, base - hh - 1.37, sw - 0.5, 1.25, { size: 16, gap: 6, valign: 'middle', align: 'center' });
    });
    d.line(s, 0.9, 3.3, 8.5, 1.98, { color: 'accent5', lw: 1.5, dash: 'dash', arrow: 'triangle' });
    d.t(s, 'du concret à l’abstrait : plus on monte, moins le sens se devine', 0.7, 1.6, 7.4, 0.38, { size: 14, italic: true, color: 'accent5' });
    band(s, '//uitleggen// : « étaler dehors » → déplier → expliquer. Il y a souvent une logique, mais on ne traduit pas mot à mot.', 6.1, 0.75, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 6–12 fiches
  d.section('Les particules');
  Object.keys(FICHES).forEach((g) => {
    const s = d.page({ g: Number(g), tag: 'LES PARTICULES', title: TITLES[g] });
    const pair = FICHES[g];
    const w = (12.13 - 0.25) / 2;
    const h = Number(g) === 11 ? 3.25 : 5.15;
    pair.forEach((f, i) => fiche(s, 0.6 + i * (w + 0.25), 1.65, w, h, f));
    if (Number(g) === 11) {
      const y = 5.1;
      d.rect(s, 0.6, y, 12.13, 1.7, { fill: 'bg2', line: BORDER, radius: 0.1 });
      d.ill(s, 'grinning-face', 0.85, y + 0.2, 0.6, 0.6);
      d.t(s, '//Het examen viel **mee**.// → c’était plus facile que prévu', 1.6, y + 0.15, 11.0, 0.7, { size: 19, valign: 'middle' });
      d.ill(s, 'disappointed-face', 0.85, y + 0.95, 0.6, 0.6);
      d.t(s, '//Het examen viel **tegen**.// → c’était décevant, plus difficile que prévu', 1.6, y + 0.9, 11.0, 0.7, { size: 19, valign: 'middle' });
    }
  });

  // ---------------------------------------------------------------- 13 et aussi
  {
    const s = d.page({ g: 13, tag: 'LES PARTICULES', title: 'Et aussi…' });
    const T = [['TERUG-', 'retour', 'terugbellen · terugbetalen', 'rappeler · rembourser', 'accent2'], ['WEG-', 'départ, disparition', 'weggaan · weggooien', 'partir · jeter', 'accent6'], ['SAMEN-', 'ensemble', 'samenwerken · samenvatten', 'collaborer · résumer', 'accent3'], ['VAST-', 'fixé', 'vastleggen · vaststellen', 'fixer · constater', 'tx2'], ['LOS-', 'détaché', 'loslaten · losmaken', 'lâcher · détacher', 'accent1']];
    const tw = (12.13 - 4 * 0.15) / 5;
    T.forEach(([p, sens, v, fr, c], i) => {
      const x = 0.6 + i * (tw + 0.15);
      d.rect(s, x, 1.7, tw, 2.2, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.1, shadow: true });
      d.t(s, `**${p}**`, x, 1.78, tw, 0.5, { size: 20, color: c, align: 'center', valign: 'middle', head: true });
      d.t(s, sens, x, 2.25, tw, 0.35, { size: 13, italic: true, color: 'accent5', align: 'center' });
      d.t(s, [`//**${v}**//`, fr], x + 0.08, 2.65, tw - 0.16, 1.15, { size: 13, gap: 3, align: 'center', valign: 'middle' });
    });
    d.t(s, 'ADJECTIF OU NOM + VERBE', 0.6, 4.1, 8, 0.38, { size: 13, bold: true, color: 'accent5', cs: 2 });
    const A = [['schoonmaken', 'nettoyer'], ['kapotmaken', 'casser'], ['bekendmaken', 'annoncer'], ['goedkeuren', 'approuver'], ['kwijtraken', 'perdre'], ['deelnemen', 'participer'], ['plaatsvinden', 'avoir lieu']];
    A.forEach(([v, f], i) => {
      const x = 0.6 + (i % 4) * 3.07; const y = 4.6 + Math.floor(i / 4) * 0.72;
      d.rect(s, x, y, 2.95, 0.6, { fill: 'bg2', line: BORDER, radius: 0.1 });
      d.t(s, `//**${v}**// ${f}`, x + 0.1, y, 2.8, 0.6, { size: 14, valign: 'middle' });
    });
    band(s, '//We vatten de tekst **samen**. · De vergadering vindt in zaal 2 **plaats**. · Ik ben mijn sleutels **kwijt**geraakt.//', 6.2, 0.62, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 14 contraires
  {
    const s = d.page({ g: 14, tag: 'LES PARTICULES', title: 'Les paires de contraires' });
    const R = [['aanzetten', 'uitzetten', 'allumer / éteindre', 'AAN', 'UIT'], ['inloggen', 'uitloggen', 'se connecter / se déconnecter', 'IN', 'UIT'], ['instappen', 'uitstappen', 'monter / descendre', 'IN', 'UIT'], ['inademen', 'uitademen', 'inspirer / expirer', 'IN', 'UIT'], ['toenemen', 'afnemen', 'augmenter / diminuer', 'TOE', 'AF'], ['meevallen', 'tegenvallen', 'mieux / moins bien que prévu', 'MEE', 'TEGEN'], ['aankomen', 'afvallen', 'grossir / maigrir', 'AAN', 'AF'], ['opendoen', 'dichtdoen', 'ouvrir / fermer (BE : toedoen)', 'OP', 'TOE']];
    const cw = (12.13 - 0.3) / 2; const rh = 1.08;
    R.forEach(([a, b, fr, ka, kb], i) => {
      const x = 0.6 + Math.floor(i / 4) * (cw + 0.3); const y = 1.7 + (i % 4) * rh;
      d.rect(s, x, y, cw, rh - 0.12, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.rect(s, x + 0.15, y + 0.12, 2.3, 0.5, { fill: C[ka], line: null, radius: 0.12 });
      d.t(s, `//**${a}**//`, x + 0.15, y + 0.12, 2.3, 0.5, { size: 16, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, '⇄', x + 2.5, y + 0.12, 0.5, 0.5, { size: 20, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, x + 3.05, y + 0.12, 2.3, 0.5, { fill: C[kb], line: null, radius: 0.12 });
      d.t(s, `//**${b}**//`, x + 3.05, y + 0.12, 2.3, 0.5, { size: 16, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, fr, x + 0.15, y + 0.62, cw - 0.3, 0.32, { size: 12, italic: true, color: 'accent5', align: 'center' });
    });
    band(s, 'Apprendre par paires double la mémoire. BE : //aandoen / uitdoen// = allumer / éteindre ; mettre / enlever (un vêtement).', 6.15, 0.68, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 15 étoile
  d.section('Aller plus loin');
  {
    const s = d.page({ g: 15, tag: 'MÉTHODE', title: 'L’étoile du verbe : nemen et gaan' });
    star(s, 3.58, 4.22, 'NEMEN', [['aannemen', 'accepter ; embaucher'], ['afnemen', 'diminuer ; enlever'], ['opnemen', 'enregistrer ; décrocher'], ['overnemen', 'reprendre'], ['toenemen', 'augmenter'], ['meenemen', 'emporter'], ['deelnemen', 'participer']], { keys: ['AAN', 'AF', 'OP', 'OVER', 'TOE', 'MEE', 'NA'] });
    star(s, 9.75, 4.22, 'GAAN', [['doorgaan', 'continuer ; avoir lieu'], ['nagaan', 'vérifier'], ['uitgaan', 'sortir'], ['meegaan', 'accompagner'], ['ingaan op', 'répondre à'], ['tegengaan', 'combattre'], ['omgaan met', 'gérer']], { keys: ['DOOR', 'NA', 'UIT', 'MEE', 'IN', 'TEGEN', 'OM'] });
    d.t(s, 'À vous : l’étoile de //komen// ou de //zetten// !', 0.6, 6.62, 12.13, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 16 polysémie
  {
    const s = d.page({ g: 16, tag: 'MÉTHODE', title: 'Un verbe, plusieurs sens' });
    const P = [['opnemen', 'OP', [['Neem de telefoon op!', 'décroche'], ['We nemen het gesprek op.', 'enregistrer'], ['Ik neem morgen verlof op.', 'prendre (un congé)']]], ['afnemen', 'AF', [['De werkloosheid neemt af.', 'diminue'], ['Hij neemt een examen af.', 'fait passer'], ['Neem de tafel even af.', 'essuie']]], ['aannemen', 'AAN', [['Ik neem het voorstel aan.', 'accepte'], ['Het bedrijf neemt twee mensen aan.', 'embauche'], ['Ik neem aan dat je komt.', 'suppose']]], ['uitvallen', 'UIT', [['De stroom valt uit.', 'panne'], ['De les valt uit.', 'est annulée'], ['Hij valt uit.', 'abandonne']]]];
    const cw = (12.13 - 0.25) / 2; const ch = 2.15;
    P.forEach(([v, k, L], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.25); const y = 1.65 + Math.floor(i / 2) * (ch + 0.15);
      d.rect(s, x, y, cw, ch, { fill: 'bg1', line: C[k], lw: 2, radius: 0.1, shadow: true });
      d.rect(s, x, y, cw, 0.5, { fill: C[k], line: null, radius: 0.1 });
      d.t(s, `//**${v}**//`, x + 0.2, y, cw - 0.4, 0.5, { size: 18, color: 'bg1', valign: 'middle' });
      L.forEach(([nl, fr], j) => d.t(s, `//${nl}// → **${fr}**`, x + 0.25, y + 0.6 + j * 0.5, cw - 0.4, 0.48, { size: 15, valign: 'middle' }));
    });
    band(s, 'Le **complément** choisit le sens : //de telefoon opnemen · verlof opnemen · een gesprek opnemen//. Notez le verbe **avec** son complément.', 6.3, 0.58, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 17 particule + préposition
  {
    const s = d.page({ g: 17, tag: 'B2', tagColor: 'purple', title: 'Particule + préposition fixe' });
    const R = [['afhangen van', 'dépendre de', 'Het hangt **ervan** **af**.'], ['uitkijken naar', 'attendre avec impatience', 'Ik kijk **ernaar** **uit**.'], ['uitgaan van', 'partir du principe que', 'Ik ga **ervan** **uit** dat je komt.'], ['nadenken over', 'réfléchir à', 'Ik denk **erover** **na**.'], ['deelnemen aan', 'participer à', 'Ik neem **eraan** **deel**.'], ['ingaan op', 'répondre à, réagir à', 'Ik ga **erop** **in**.']];
    d.t(s, 'LE VERBE', 0.75, 1.6, 3, 0.35, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, 'AVEC ER (M23)', 7.0, 1.6, 4, 0.35, { size: 12, bold: true, color: 'accent5', cs: 2 });
    R.forEach(([v, fr, ex], i) => {
      const y = 1.98 + i * 0.66;
      d.rect(s, 0.6, y, 12.13, 0.58, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.06 });
      d.t(s, `//**${v}**//`, 0.75, y, 2.9, 0.58, { size: 17, color: 'purple', valign: 'middle' });
      d.t(s, fr, 3.65, y, 3.2, 0.58, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${ex}//`, 7.0, y, 5.6, 0.58, { size: 17, valign: 'middle' });
    });
    d.t(s, 'Aussi : //opkomen voor// (défendre) · //omgaan met// (gérer) · //meedoen aan// (participer à)', 0.6, 5.98, 12.13, 0.4, { size: 15, color: 'tx1', align: 'center' });
    band(s, '//er// + préposition = un bloc ; la particule va **au bout** : //Ik kijk ernaar **uit**.// · //…, omdat ik ernaar **uit**kijk.//', 6.45, 0.48, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 18 piège séparable / inséparable
  {
    const s = d.page({ g: 18, tag: 'PIÈGE', title: 'PIÈGE : séparable ou inséparable ?' });
    d.rect(s, 0.6, 1.65, 4.6, 4.5, { fill: 'FBEDEB', line: 'accent6', lw: 1.5, radius: 0.1 });
    d.t(s, '**JAMAIS SÉPARABLES**', 0.8, 1.75, 4.2, 0.4, { size: 14, color: 'accent6', cs: 1 });
    ['be-', 'ge-', 'her-', 'ont-', 'er-', 'ver-'].forEach((p, i) => {
      const x = 0.85 + (i % 3) * 1.4; const y = 2.25 + Math.floor(i / 3) * 0.62;
      d.rect(s, x, y, 1.25, 0.5, { fill: 'accent6', line: null, radius: 0.12 });
      d.t(s, `**${p}**`, x, y, 1.25, 0.5, { size: 17, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.t(s, ['//ik ver**taal** · ik heb **vertaald**// (pas de //ge-//)', '', '**ver-** = changement (//verbeteren//), erreur (//zich verspreken//), perte (//verdwijnen, verliezen//)'], 0.8, 3.6, 4.25, 1.75, { size: 14, gap: 3, valign: 'top' });
    d.ill(s, 'locked', 4.25, 5.2, 0.75, 0.75);
    d.t(s, 'L’ACCENT QUI DÉCIDE (P3)', 5.45, 1.65, 7.3, 0.4, { size: 14, bold: true, color: 'tx2', cs: 1 });
    d.rect(s, 5.45, 2.05, 3.6, 0.45, { fill: PA, line: null, radius: 0.08 });
    d.t(s, 'accent sur la particule → séparable', 5.45, 2.05, 3.6, 0.45, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.rect(s, 9.13, 2.05, 3.6, 0.45, { fill: 'tx2', line: null, radius: 0.08 });
    d.t(s, 'accent sur le verbe → inséparable', 9.13, 2.05, 3.6, 0.45, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    const D = [['DOORlopen', 'continuer à marcher', 'doorLOpen', 'parcourir, suivre (formation)'], ['VOORkomen', 'se produire', 'voorKOmen', 'éviter'], ['OVERkomen', 'venir ; faire impression', 'overKOmen', 'arriver à qn'], ['ONDERgaan', 'se coucher (soleil)', 'onderGAAN', 'subir'], ['OVERleggen', 'présenter (un document)', 'overLEGgen', 'se concerter']];
    D.forEach(([a, af, b, bf], i) => {
      const y = 2.6 + i * 0.7;
      d.rect(s, 5.45, y, 3.6, 0.62, { fill: i % 2 ? 'FFFFFF' : 'FDF1E6', line: null, radius: 0.06 });
      d.t(s, [`//**${a}**//`, af], 5.55, y, 3.45, 0.62, { size: 13, gap: 0, valign: 'middle' });
      d.rect(s, 9.13, y, 3.6, 0.62, { fill: i % 2 ? 'FFFFFF' : 'E6EBF2', line: null, radius: 0.06 });
      d.t(s, [`//**${b}**//`, bf], 9.23, y, 3.45, 0.62, { size: 13, gap: 0, valign: 'middle' });
    });
    band(s, '//Het is vaak **voorgekomen**.// (se produire : //ge-//) · //We hebben een ongeluk **voorkomen**.// (éviter : sans //ge-//)', 6.3, 0.58, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 19 place B2
  {
    const s = d.page({ g: 19, tag: 'B2', tagColor: 'purple', title: 'La place dans les groupes verbaux' });
    const R = [[[['…, dat ik je', 'n'], ['zal', 'v'], ['opbellen.', 'v2']], [['…, dat ik je', 'n'], ['op', 'p'], ['zal', 'v'], ['bellen.', 'v2']]], [[['Ik heb het niet', 'n'], ['kunnen', 'v2'], ['afmaken.', 'v2']], [['Ik heb het niet', 'n'], ['af', 'p'], ['kunnen', 'v2'], ['maken.', 'v2']]]];
    R.forEach(([a, b], i) => {
      const y = 1.75 + i * 1.0;
      const e = strip(s, 0.6, y, a, { size: 18, h: 0.56 });
      d.t(s, '=', e + 0.1, y, 0.4, 0.56, { size: 22, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
      strip(s, e + 0.6, y, b, { size: 18, h: 0.56 });
    });
    d.t(s, 'Dans le groupe verbal final, la particule peut rester collée ou passer devant : **les deux ordres sont corrects**.', 0.6, 3.75, 12.13, 0.45, { size: 16, color: 'tx1' });
    d.t(s, 'OM … TE + INFINITIF', 0.6, 4.35, 6, 0.38, { size: 13, bold: true, color: 'accent5', cs: 2 });
    strip(s, 0.6, 4.8, [['Ik heb tijd nodig', 'n'], ['om', 'n'], ['de tekst', 'n'], ['na', 'p'], ['te', 'e'], ['lezen.', 'v2']], { size: 17, h: 0.52 });
    strip(s, 0.6, 5.48, [['Ik probeer het', 'n'], ['af', 'p'], ['te', 'e'], ['maken.', 'v2']], { size: 17, h: 0.52 });
    strip(s, 6.9, 5.48, [['… zonder', 'n'], ['op', 'p'], ['te', 'e'], ['letten.', 'v2']], { size: 17, h: 0.52 });
    band(s, 'Avec //te// : toujours **particule + te + verbe**, en trois mots : //na te lezen · af te maken · op te letten//', 6.25, 0.6, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 20 stratégie
  {
    const s = d.page({ g: 20, tag: 'MÉTHODE', title: 'Stratégie : deviner un verbe inconnu' });
    [['FaBook', 'Que veut dire le **verbe de base** ?'], ['FaCompass', 'Quel sens apporte la **particule** (diapos 6 à 13) ?'], ['FaSearch', 'Que dit le **contexte** ?']].forEach(([ic, t], i) => {
      const x = 0.6 + i * 4.1;
      d.rect(s, x, 1.7, 3.93, 1.2, { fill: 'EAF2FB', line: 'accent2', lw: 1.5, radius: 0.1 });
      d.num(s, i + 1, x + 0.15, 1.95, 0.6, 'accent2', 18);
      d.icon(s, ic, 'accent2', x + 0.9, 2.05, 0.45);
      d.t(s, t, x + 1.5, 1.7, 2.35, 1.2, { size: 15, valign: 'middle' });
    });
    const V = [['UIT', 'Kun je dat even **uit**printen?'], ['BIJ', 'We moeten papier **bij**bestellen.'], ['NA', 'Wil je de klant **na**bellen?'], ['OP', 'Ik wil mijn Nederlands **op**frissen.'], ['DOOR', 'Je kunt je bestelling **door**bellen.']];
    V.forEach(([k, t], i) => {
      const y = 3.15 + i * 0.6;
      d.rect(s, 0.6, y, 9.0, 0.52, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.08 });
      d.rect(s, 0.6, y, 0.18, 0.52, { fill: C[k], line: null, radius: 0 });
      d.t(s, `//${t}//`, 0.95, y, 8.5, 0.52, { size: 17, valign: 'middle' });
      d.rect(s, 9.75, y, 2.98, 0.52, { fill: 'FFFFFF', line: BORDER, lw: 1, dash: 'dash', radius: 0.08 });
      d.t(s, '= ?', 9.75, y, 2.98, 0.52, { size: 16, color: 'accent5', align: 'center', valign: 'middle' });
    });
    band(s, 'Le contexte **confirme** ou **corrige** votre hypothèse. En cas de doute : le dictionnaire (Van Dale).', 6.3, 0.58, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 21 à retenir : le tableau
  {
    const s = d.page({ g: 21, tag: 'À RETENIR', title: 'À retenir : le tableau des particules' });
    const T = [['AAN', 'contact, début, acquérir', 'aanzetten · aanleren'], ['AF', 'enlever, finir, diminuer', 'afmaken · afnemen'], ['OP', 'haut, entièrement, noter', 'opstaan · opschrijven'], ['UIT', 'dehors, jusqu’au bout, montrer', 'uitgaan · uitleggen'], ['IN', 'dedans, remettre', 'inloggen · inleveren'], ['BIJ', 'en plus, mettre à jour', 'bijleren · bijhouden'], ['TOE', 'vers, en plus, fermé (BE)', 'toevoegen · toenemen'], ['NA', 'après, imiter, vérifier', 'nadenken · nakijken'], ['DOOR', 'à travers, continuer, transmettre', 'doorgaan · doorsturen'], ['OVER', 'd’un côté à l’autre, de nouveau, à qn', 'overstappen · overnemen'], ['MEE', 'avec, participer', 'meenemen · meedoen'], ['TEGEN', 'contre', 'tegenkomen · tegenhouden'], ['OM', 'autour, changer', 'omrijden · omzetten'], ['VOOR', 'devant, proposer', 'voorbereiden · voorstellen']];
    const cw = (12.13 - 0.25) / 2; const rh = 0.6;
    T.forEach(([k, sens, v], i) => {
      const x = 0.6 + Math.floor(i / 7) * (cw + 0.25); const y = 1.6 + (i % 7) * rh;
      d.rect(s, x, y, cw, rh - 0.06, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.06 });
      d.rect(s, x + 0.06, y + 0.07, 1.0, rh - 0.2, { fill: C[k], line: null, radius: 0.1 });
      d.t(s, `**${k}**`, x + 0.06, y + 0.07, 1.0, rh - 0.2, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, sens, x + 1.15, y, 2.65, rh - 0.06, { size: 12, valign: 'middle' });
      d.t(s, `//${v}//`, x + 3.8, y, cw - 3.85, rh - 0.06, { size: 12, bold: true, color: 'tx2', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.9, 12.13, 0.9, { fill: 'FBEDEB', line: 'accent6', lw: 1.25, radius: 0.1 });
    d.t(s, ['**3 réflexes** : direction → résultat → figuré · l’accent décide (séparable ou non) · le complément choisit le sens', '//ver-, be-, ont-, her-, ge-, er-// : **jamais séparables**'], 0.85, 5.9, 11.7, 0.9, { size: 15, gap: 2, valign: 'middle' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 22 divider
  d.divider({ g: 22, tiles: [
    ['Quelle particule ?', '★', 'FaQuestion'], ['L’étoile de nemen', '★★', 'FaStar'], ['Séparable ou inséparable ?', '★★', 'FaCut'], ['Le détective', '★★', 'FaSearch'],
    ['Le bon contraire', '★', 'FaExchangeAlt'], ['La roulette des particules', '★★', 'FaDharmachakra'], ['La réunion d’équipe', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 23 ex1 quelle particule
  const ex1 = ['Kun je de radio [[uit]]zetten? (éteindre)', 'De prijzen nemen elk jaar [[toe]]. (augmenter)', 'Ik moet dit woord even [[op]]zoeken. (chercher)', 'Lees je tekst nog eens [[na]] voor je hem verstuurt. (relire)', 'Wil je deze mail naar Sofie [[door]]sturen? (transférer)', 'Lotte heeft de taak van An [[over]]genomen. (reprendre)', 'Je moet je rapport vrijdag [[in]]leveren. (remettre)', 'In die cursus heb ik veel [[bij]]geleerd. (apprendre en plus)'];
  d.ex({ g: 23, title: 'Exercice 1 — Quelle particule ?', stars: '★', instr: 'Complétez avec la particule qui donne le sens entre parenthèses.' }, (s, mode, top) => {
    d.list(s, ex1.map((e) => { const m = e.match(/^(.*) \((.*)\)$/); return `//${m[1]}// (${m[2]})`; }), mode, { y: top + 0.2, w: 12.13, h: 4.5, cols: 2, size: 19, gap: 22 });
    if (mode === 'a') d.t(s, 'N° 1 : //af// est aussi possible en Belgique (//afzetten//).', 0.6, 6.35, 12.13, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 24 ex2 nemen
  const ex2 = ['Het bedrijf wil drie nieuwe medewerkers [[aannemen]]. (embaucher)', 'Vergeet niet een paraplu [[mee te nemen]]. (emporter)', 'Het aantal klanten [[neemt]] elk jaar [[toe]]. (augmenter)', 'De werkloosheid [[neemt af]]. (diminuer)', 'Kun je even de telefoon [[opnemen]]? (décrocher)', 'Wie [[neemt]] het project van An [[over]]? (reprendre)', 'Tien collega’s [[nemen]] aan de opleiding [[deel]]. (participer)', 'Je moet dit medicijn drie keer per dag [[innemen]]. (prendre)'];
  d.ex({ g: 24, title: 'Exercice 2 — L’étoile de nemen', stars: '★★', instr: 'Complétez avec le bon verbe de la famille //nemen//, à la bonne place.' }, (s, mode, top) => {
    d.list(s, ex2.map((e) => { const m = e.match(/^(.*) \((.*)\)$/); return `//${m[1]}// (${m[2]})`; }), mode, { y: top + 0.15, w: 12.13, h: 4.6, cols: 2, size: 18, gap: 20 });
    if (mode === 'a') d.t(s, 'N° 2 : //vergeten// + //te// + infinitif · n° 7 : //deel// va au bout, après le complément', 0.6, 6.35, 12.13, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 25 ex3 séparable ou inséparable
  const ex3 = [['vertalen', '', 'ik vertaal', 'ik heb vertaald'], ['nakijken', '', 'ik kijk na', 'ik heb nagekeken'], ['herhalen', '', 'ik herhaal', 'ik heb herhaald'], ['opbellen', '', 'ik bel op', 'ik heb opgebeld'], ['voorkomen', 'se produire', 'het komt voor', 'het is voorgekomen'], ['voorkomen', 'éviter', 'ik voorkom', 'ik heb voorkomen'], ['overleggen', 'se concerter', 'we overleggen', 'we hebben overlegd'], ['doorlopen', 'parcourir', 'ik doorloop', 'ik heb doorlopen']];
  d.ex({ g: 25, title: 'Exercice 3 — Séparable ou inséparable ?', stars: '★★', instr: 'Dites le verbe à voix haute (accent !), puis conjuguez : présent et passé composé.' }, (s, mode, top) => {
    const rh = (6.88 - top - 0.45) / 8;
    [['VERBE (SENS)', 0.6, 3.6], ['PRÉSENT', 4.35, 3.6], ['PASSÉ COMPOSÉ', 8.1, 4.63]].forEach(([h, x, w]) => d.t(s, h, x, top, w, 0.4, { size: 12, bold: true, color: 'accent5', cs: 2 }));
    ex3.forEach(([v, f, pr, pc], i) => {
      const y = top + 0.45 + i * rh;
      d.rect(s, 0.6, y + 0.04, 3.6, rh - 0.08, { fill: 'bg2', line: BORDER, radius: 0.06 });
      d.t(s, f ? `//**${v}**// (${f})` : `//**${v}**//`, 0.75, y + 0.04, 3.4, rh - 0.08, { size: 16, valign: 'middle' });
      [[pr, 4.35, 3.6], [pc, 8.1, 4.63]].forEach(([t, x, w]) => {
        d.rect(s, x, y + 0.04, w, rh - 0.08, { fill: mode === 'a' ? 'EDF6F0' : 'FFFFFF', line: mode === 'a' ? 'accent3' : BORDER, lw: 1, radius: 0.06 });
        if (mode === 'a') d.t(s, `//**${t}**//`, x + 0.15, y + 0.04, w - 0.3, rh - 0.08, { size: 16, color: 'accent3', valign: 'middle' });
      });
    });
  });

  // ---------------------------------------------------------------- 26 ex4 détective
  d.ex({ g: 26, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Karim écrit à son équipe. Trouvez les 5 erreurs (forme ou sens).' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Karim Benali · Aan: team verkoop · Onderwerp: stand van zaken', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Beste collega’s,//', '//De vergadering van vrijdag gaat niet door. Ik heb de offerte gisteren {{gevertaald}}++ vertaald++. Ik stuur jullie de tekst {{door morgen}}++ morgen door++, om de cijfers nog eens {{te nalezen}}++ na te lezen++. Lotte heeft de taak van Sofie {{overgenomt}}++ overgenomen++. Goed nieuws: het aantal klanten {{neemt af}}++ neemt toe++! We overleggen maandag verder.//', '//Groeten//', '//Karim//'];
    d.t(s, txt, 0.95, top + 0.65, 8.3, h - 0.8, { size: 18, gap: 6, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //gaat niet door// (n’a pas lieu) et //We overleggen// (inséparable) sont corrects. N° 5 : erreur de **sens** (goed nieuws !).', 9.9, top + 3.05, 2.83, 2.2, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 27 ex5 contraires
  const ex5 = [['Zet de computer aan.', 'Zet de computer uit.'], ['Ik log in.', 'Ik log uit.'], ['De prijzen nemen toe.', 'De prijzen nemen af.'], ['Het examen viel tegen.', 'Het examen viel mee.'], ['We stappen in.', 'We stappen uit.'], ['Doe de deur open.', 'Doe de deur dicht. (BE : toe)'], ['Ik ben drie kilo aangekomen.', 'Ik ben drie kilo afgevallen.'], ['Adem diep in.', 'Adem diep uit.']];
  d.ex({ g: 27, title: 'Exercice 5 — Le bon contraire', stars: '★', instr: 'Écrivez la phrase contraire en changeant la particule (ou le verbe).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 4; const cw = (12.13 - 0.3) / 2;
    ex5.forEach(([q, a], i) => {
      const c = Math.floor(i / 4); const r = i % 4;
      const x = 0.6 + c * (cw + 0.3); const y = top + r * rh;
      d.num(s, i + 1, x, y + (rh - 0.4) / 2, 0.4, 'accent5', 13);
      d.t(s, `//${q}//`, x + 0.5, y + 0.05, cw - 0.55, rh / 2 - 0.05, { size: 17, valign: 'middle' });
      d.rect(s, x + 0.5, y + rh / 2, cw - 0.55, rh / 2 - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'FFFFFF', line: mode === 'a' ? 'accent3' : BORDER, lw: 1, dash: mode === 'a' ? undefined : 'dash', radius: 0.08 });
      if (mode === 'a') d.t(s, `//**${a}**//`, x + 0.65, y + rh / 2, cw - 0.8, rh / 2 - 0.12, { size: 16, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 28 ex6 roulette
  {
    const s = d.page({ g: 28, tag: 'JIJ NU !', title: 'Exercice 6 — La roulette des particules', stars: '★★' });
    const P = ['AAN', 'AF', 'OP', 'UIT', 'IN', 'NA', 'DOOR', 'OVER', 'MEE', 'TOE'];
    const cx = 2.95; const cy = 4.15; const R = 2.25;
    P.forEach((k, i) => {
      const a1 = i * 36 - 90; const a2 = a1 + 36;
      s.addShape(d.S.PIE, { x: cx - R, y: cy - R, w: 2 * R, h: 2 * R, angleRange: [((a1 % 360) + 360) % 360, ((a2 % 360) + 360) % 360], fill: { color: hexOf(C[k]) }, line: { color: 'FFFFFF', width: 2 } });
      const am = ((a1 + 18) * Math.PI) / 180;
      d.t(s, k.toLowerCase(), cx + R * 0.68 * Math.cos(am) - 0.5, cy + R * 0.68 * Math.sin(am) - 0.22, 1.0, 0.44, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.oval(s, cx - 0.4, cy - 0.4, 0.8, 0.8, { fill: 'FFFFFF' });
    d.poly(s, [[cx - 0.18, cy - R - 0.35], [cx + 0.18, cy - R - 0.35], [cx, cy - R + 0.05]], { fill: 'tx2', line: null });
    const V = ['gaan', 'nemen', 'komen', 'zetten', 'leggen', 'vallen', 'houden', 'kijken'];
    V.forEach((v, i) => {
      const x = 5.75 + (i % 4) * 1.75; const y = 1.75 + Math.floor(i / 4) * 0.85;
      d.rect(s, x, y, 1.6, 0.7, { fill: 'FBEDEB', line: VB, lw: 1.75, radius: 0.1, rotate: [-3, 2, -1, 3][i % 4] });
      d.t(s, `//**${v}**//`, x, y, 1.6, 0.7, { size: 18, color: VB, align: 'center', valign: 'middle', rotate: [-3, 2, -1, 3][i % 4] });
    });
    d.t(s, ['**1.** Tournez la roue (une particule) et tirez une carte-verbe.', '**2.** Le verbe existe ? Donnez son sens et une phrase.', '**3.** 1 point par verbe juste, **2 points** si vous donnez deux sens. Le verbe n’existe pas ? Dites-le : 1 point aussi !'], 5.75, 3.6, 6.98, 2.4, { size: 16, gap: 8 });
    d.t(s, 'Arbitre : le dictionnaire (Van Dale).', 5.75, 6.2, 6.98, 0.4, { size: 14, italic: true, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 29 ex7 réunion
  d.roleplay({
    g: 29, title: 'Exercice 7 — La réunion d’équipe',
    scenario: 'Portes ouvertes chez Peeters & Co : répartissez les tâches. Objectif : 8 verbes à particule.',
    a: ['**A — chef·fe de projet**', 'Proposez, répartissez les tâches, fixez les délais.'],
    b: ['**B — collègue**', 'Réagissez, acceptez ou reportez, prenez des tâches. Puis rédigez le compte rendu (5 lignes).'],
    bank: '//voorstellen · afspreken · vastleggen · nakijken · doorsturen · overnemen · uitstellen · afmaken · bijhouden · toelichten · meedenken · nagaan · invullen · inplannen · Het hangt ervan af. · Ik ga ervan uit dat… · Dat valt mee.//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.6, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'AGENDA · OPENDEURDAG', x + 0.15, y, w - 0.3, 0.6, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const L = ['datum **vastleggen**', 'uitnodigingen opstellen en **doorsturen**', 'budget **nakijken**', 'taken verdelen', 'volgende vergadering **afspreken**'];
      L.forEach((t, i) => {
        d.num(s, i + 1, x + 0.2, y + 0.85 + i * 0.7, 0.4, 'accent1', 12);
        d.t(s, `//${t}//`, x + 0.75, y + 0.78 + i * 0.7, w - 0.9, 0.55, { size: 14, valign: 'middle' });
      });
      d.ill(s, 'spiral-calendar', x + w / 2 - 0.35, y + h - 0.9, 0.7, 0.7);
    },
  });

  // ---------------------------------------------------------------- 30 ticket
  d.ticket({
    g: 30,
    q: ['Donnez deux sens de //opnemen//.', 'Le contraire de //De prijzen nemen toe// ?', 'Passé composé : //Ik vertaal de tekst. · Ik kijk de tekst na.//'],
    self: ['Comprendre', 'Deviner', 'Utiliser'],
    teaser: { icon: 'FaBook', text: '**Défi de la semaine** : notez 10 verbes à particule rencontrés (journal, travail, séries), avec leur phrase.' },
  });
}

module.exports = { meta, build };
