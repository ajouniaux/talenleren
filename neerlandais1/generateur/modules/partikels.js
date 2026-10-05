// Aan, af, op, uit… — Les significations des particules séparables (complément B1–B2)
// Version visuelle : une particule = un schéma + trois images.
const { BORDER, plain, HEX, PURPLE } = require('../lib');

const meta = {
  n: 'P', slug: 'Partikels', title: 'Aan, af, op, uit… — Les significations des particules séparables', short: 'Aan, af, op, uit…',
  template: 'partikels_b1_b2.md', file: 'Partikels_Les_particules_separables.pptx',
  docTitle: 'Aan, af, op, uit… — Les significations des particules séparables',
  foot: 'Néerlandais · B1–B2 · Les significations des particules séparables',
};

// une couleur par particule
const C = { AAN: 'accent2', AF: 'accent6', OP: 'accent3', UIT: 'accent1', IN: 'purple', BIJ: 'accent4', TOE: '0E7C86', NA: 'tx2', DOOR: '7A5230', OVER: '4352C9', MEE: '7C9A1E', TEGEN: '8B1E3F', OM: '546E7A', VOOR: 'B8860B' };
const PA = 'accent1'; // particule = orange (comme au M11)
const VB = 'accent6'; // verbe = rouge
const G = '8A96A8'; const GL = 'D5DCE6'; const INK = '17375E'; const SUN = 'F4B400';
const hexOf = (c) => (c === 'purple' ? PURPLE : c === 'tx2' ? INK : HEX[c] || c);
const colOf = (k) => C[k] || 'accent5';

// les 14 particules : sens central, sous-titre, contraire, « aussi », 3 sens [étiquette, image, verbe, traduction, exemple]
const PARTS = [
  { k: 'IN', mean: 'dedans', sub: 'vers l’intérieur · remettre', opp: ['UIT', 'instappen ≠ uitstappen'], also: 'inloggen · invullen · inademen', S: [
    ['vers l’intérieur', 'bus', 'instappen', 'monter (bus, train)', 'Stap snel {in}!'],
    ['remettre, remplir', 'inbox-tray', 'inleveren', 'remettre, rendre', 'Lever je verslag vrijdag {in}.'],
    ['s’approprier', 'performing-arts', 'instuderen', 'répéter (un rôle)', 'We studeren een nieuw stuk {in}.']] },
  { k: 'UIT', mean: 'dehors', sub: 'vers l’extérieur · jusqu’au bout', opp: ['IN', 'uitademen ≠ inademen'], also: 'uitstappen · uitzetten · uitnodigen', S: [
    ['vers l’extérieur', 'door', 'uitgaan', 'sortir', 'We gaan vanavond {uit}.'],
    ['jusqu’au bout, arrêt', 'closed-book', 'uitlezen', 'finir (un livre)', 'Ik heb het boek {uit}gelezen.'],
    ['figuré', 'speech-balloon', 'uitleggen', 'expliquer', 'Kun je dat even {uit}leggen?']] },
  { k: 'OP', mean: 'vers le haut', sub: 'en haut · complètement', opp: null, also: 'optillen · opruimen · opbellen', S: [
    ['vers le haut', 'alarm-clock', 'opstaan', 'se lever', 'Ik sta om zeven uur {op}.'],
    ['complètement', 'fork-and-knife-with-plate', 'opeten', 'tout manger', 'Eet je bord {op}!'],
    ['noter, chercher', 'memo', 'opschrijven', 'noter', 'Schrijf het woord {op}.']] },
  { k: 'AF', mean: 'vers le bas', sub: 'ça se détache · c’est fini', opp: ['AAN', 'afvallen ≠ aankomen'], also: 'afdalen · afleren · afronden', S: [
    ['vers le bas, s’éloigner', 'bicycle', 'afstappen', 'descendre (du vélo)', 'Ik stap van de fiets {af}.'],
    ['enlever, diminuer', 'chart-decreasing', 'afnemen', 'diminuer', 'De werkloosheid neemt {af}.'],
    ['finir', 'chequered-flag', 'afmaken', 'terminer', 'Ik maak mijn werk {af}.']] },
  { k: 'AAN', mean: 'contact', sub: 'toucher · démarrer · acquérir', opp: ['UIT', 'aanzetten ≠ uitzetten'], also: 'aankomen · aanspreken · aanpassen', S: [
    ['contact', 'backhand-index-pointing-right', 'aanraken', 'toucher', 'Niet {aan}raken!'],
    ['mise en marche', 'light-bulb', 'aanzetten', 'allumer', 'Zet de computer {aan}.'],
    ['acquérir', 'graduation-cap', 'aanleren', 'apprendre', 'Kinderen leren snel een taal {aan}.']] },
  { k: 'TOE', mean: 'vers', sub: 'vers · en plus · fermé (BE)', opp: ['AF', 'toenemen ≠ afnemen'], also: 'toevoegen · toelichten · toestaan', S: [
    ['vers', 'eyes', 'toekijken', 'regarder (sans agir)', 'Hij kijkt alleen maar {toe}.'],
    ['en plus', 'chart-increasing', 'toenemen', 'augmenter', 'Het aantal klanten neemt {toe}.'],
    ['fermé (BE)', 'locked', 'toedoen', 'fermer', 'Doe de deur {toe}.']] },
  { k: 'BIJ', mean: 'en plus', sub: 'en plus · présent · à jour', opp: ['AF', 'bijleren ≠ afleren'], also: 'bijverdienen · bijdragen · bijsturen', S: [
    ['en plus', 'books', 'bijleren', 'apprendre (en plus)', 'Ik heb veel {bij}geleerd.'],
    ['être présent', 'busts-in-silhouette', 'bijwonen', 'assister à', 'Ik woon de vergadering {bij}.'],
    ['à jour', 'spiral-calendar', 'bijhouden', 'tenir à jour', 'Ik hou de agenda {bij}.']] },
  { k: 'MEE', mean: 'avec', sub: 'avec · participer', opp: ['TEGEN', 'meevallen ≠ tegenvallen'], also: 'meewerken · meedenken · meevallen', S: [
    ['avec qn', 'footprints', 'meegaan', 'accompagner', 'Ga je {mee}?'],
    ['avec soi', 'umbrella', 'meenemen', 'emporter', 'Neem een paraplu {mee}.'],
    ['participer', 'raising-hands', 'meedoen', 'participer', 'Doe je {mee}?']] },
  { k: 'TEGEN', mean: 'contre', sub: 'à la rencontre · contre', opp: ['MEE', 'tegenvallen ≠ meevallen'], also: 'tegenspreken · tegengaan', S: [
    ['à la rencontre', 'waving-hand', 'tegenkomen', 'croiser (qn)', 'Ik kwam Sara in de stad {tegen}.'],
    ['bloquer', 'stop-sign', 'tegenhouden', 'retenir, arrêter', 'De politie houdt de dief {tegen}.'],
    ['décevoir', 'disappointed-face', 'tegenvallen', 'décevoir', 'Het examen viel {tegen}.']] },
  { k: 'DOOR', mean: 'à travers', sub: 'à travers · continuer · transmettre', opp: null, also: 'doorlezen · doorgeven · doorwerken', S: [
    ['à travers', 'kitchen-knife', 'doorsnijden', 'couper en deux', 'Snijd het brood {door}.'],
    ['continuer', 'fast-forward-button', 'doorgaan', 'continuer ; avoir lieu', 'Ga gerust {door}!'],
    ['transmettre', 'e-mail', 'doorsturen', 'transférer', 'Ik stuur je de mail {door}.']] },
  { k: 'OVER', mean: 'par-dessus', sub: 'de l’autre côté · de nouveau', opp: null, also: 'overstappen · overlezen · overschrijven (BE : virer)', S: [
    ['d’un côté à l’autre', 'children-crossing', 'oversteken', 'traverser', 'Steek hier {over}.'],
    ['de nouveau', 'repeat-button', 'overdoen', 'refaire', 'Ik moet de test {over}doen.'],
    ['passer à qn', 'handshake', 'overnemen', 'reprendre', 'Lotte neemt het project {over}.']] },
  { k: 'OM', mean: 'autour', sub: 'autour · retourner · changer', opp: null, also: 'omkijken · omzetten · zich omkleden', S: [
    ['autour, détour', 'automobile', 'omrijden', 'faire un détour', 'We rijden {om} via Gent.'],
    ['retourner', 'counterclockwise-arrows-button', 'omdraaien', 'retourner', 'Draai het blad {om}.'],
    ['figuré', 'relieved-face', 'omgaan met', 'gérer', 'Hoe ga je {om} met stress?']] },
  { k: 'VOOR', mean: 'devant', sub: 'devant · avant · montrer', opp: ['NA', 'voorzeggen ≠ nazeggen'], also: 'voorlezen · voordoen · voorzeggen', S: [
    ['avant', 'clipboard', 'voorbereiden', 'préparer', 'Ik bereid de vergadering {voor}.'],
    ['devant, montrer', 'speaking-head', 'voorstellen', 'présenter ; proposer', 'Mag ik me even {voor}stellen?'],
    ['figuré', 'warning', 'voorkomen', 'se produire', 'Dat komt vaak {voor}.']] },
  { k: 'NA', mean: 'après', sub: 'après · derrière · vérifier', opp: ['VOOR', 'nazeggen ≠ voorzeggen'], also: 'nazeggen · nalezen · nagaan', S: [
    ['après', 'thinking-face', 'nadenken', 'réfléchir', 'Ik denk erover {na}.'],
    ['imiter', 'parrot', 'nadoen', 'imiter', 'Doe me maar {na}!'],
    ['vérifier', 'magnifying-glass-tilted-left', 'nakijken', 'vérifier, corriger', 'Kun je de cijfers {na}kijken?']] },
];
const FIRST = 7; // diapo de la première particule

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 20; const h = o.h || 0.62; const gap = o.gap ?? 0.09;
    let cx = x; const pos = [];
    parts.forEach(([t, ty]) => {
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: VB, lw: 2.5, color: VB, bold: true },
        v2: { fill: 'FFFFFF', line: VB, lw: 2, dash: 'dash', color: VB, bold: true },
        p: { fill: PA, line: null, color: 'bg1', bold: true },
        b: { fill: 'EAF2FB', line: 'accent2', lw: 2, color: 'accent2', bold: true },
        e: { fill: 'FFFFFF', line: null, color: 'accent5', bold: true },
      }[ty || 'n'];
      const w = wOf(t, size) * (st.bold ? 1.12 : 1) + (st.bold ? 0.08 : 0);
      if (ty !== 'e') d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, dash: st.dash, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      pos.push([cx, w]);
      cx += w + gap;
    });
    strip.pos = pos;
    return cx - gap;
  };
  // forme prédéfinie (flèches pleines, éclat, croix…)
  const shp = (s, type, x, y, w, h, o = {}) => s.addShape(d.S[type], {
    x, y, w, h, rotate: o.rotate, flipH: o.flipH, flipV: o.flipV,
    fill: o.fill ? { color: hexOf(o.fill), transparency: o.tr || 0 } : { color: 'FFFFFF', transparency: 100 },
    line: o.line ? { color: hexOf(o.line), width: o.lw || 1.5, dashType: o.dash } : { color: 'FFFFFF', width: 0, transparency: 100 },
  });
  // texte riche : [[texte, {options}], …]
  const rich = (s, segs, x, y, w, h, o = {}) => s.addText(segs.map(([text, so]) => ({ text, options: so })), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || 'tx1', align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true,
  });
  // verbe : la particule en couleur
  const vRuns = (k, verb, o = {}) => {
    const p = (o.p || k).toLowerCase(); const i = verb.indexOf(p); const c = hexOf(colOf(k));
    const base = { bold: true, italic: !!o.italic, fontSize: o.size, color: o.color || 'tx1' };
    if (i < 0) return [[verb, base]];
    return [[verb.slice(0, i), base], [verb.slice(i, i + p.length), { ...base, color: c }], [verb.slice(i + p.length), base]].filter(([t]) => t);
  };
  // exemple : {particule} en couleur
  const exRuns = (k, str, o = {}) => str.split(/(\{[^}]+\})/).filter(Boolean).map((t) => (t.startsWith('{')
    ? [t.slice(1, -1), { italic: true, bold: true, color: hexOf(colOf(k)), fontSize: o.size }]
    : [t, { italic: true, color: o.color || 'tx1', fontSize: o.size }]));
  // petit personnage (tête + buste)
  const person = (s, cx, by, z, fill) => {
    d.rect(s, cx - z * 0.38, by - z * 0.5, z * 0.76, z * 0.5, { fill, line: null, radius: z * 0.2 });
    d.oval(s, cx - z * 0.21, by - z * 0.96, z * 0.42, z * 0.42, { fill });
  };

  // ------------------------------------------------ le schéma de chaque particule (dans un cadre w × h)
  const scene = (s, k, x, y, w, h) => {
    const c = colOf(k);
    const X = (f) => x + f * w; const Y = (f) => y + f * h;
    const R = (type, fx, fy, fw, fh, o) => shp(s, type, X(fx), Y(fy), fw * w, fh * h, o);
    const z = Math.min(w, h); const lw = Math.max(1.5, z * 1.4);
    const box = (fx, side) => {
      R('RECTANGLE', fx, 0.14, 0.42, 0.72, { fill: 'FFFFFF', line: INK, lw });
      R('RECTANGLE', side === 'L' ? fx - 0.03 : fx + 0.39, 0.36, 0.06, 0.28, { fill: 'FFFFFF' });
    };
    const ring = (cx, cy, dd, o) => d.oval(s, cx - dd / 2, cy - dd / 2, dd, dd, o);
    if (k === 'IN') { box(0.52, 'L'); R('RIGHT_ARROW', 0.02, 0.4, 0.74, 0.2, { fill: c }); }
    else if (k === 'UIT') { box(0.06, 'R'); R('RIGHT_ARROW', 0.24, 0.4, 0.74, 0.2, { fill: c }); }
    else if (k === 'OP') { R('RECTANGLE', 0.14, 0.88, 0.72, 0.06, { fill: G }); R('UP_ARROW', 0.39, 0.04, 0.22, 0.82, { fill: c }); }
    else if (k === 'AF') {
      R('RECTANGLE', 0.04, 0.36, 0.42, 0.07, { fill: G });
      R('RECTANGLE', 0.14, 0.08, 0.18, 0.28, { line: G, lw: Math.max(1, lw * 0.7), dash: 'dash' });
      d.line(s, X(0.36), Y(0.44), X(0.74), Y(0.8), { color: hexOf(c), lw: Math.max(4, z * 4) });
      R('RECTANGLE', 0.76, 0.7, 0.18, 0.26, { fill: c });
    } else if (k === 'AAN') {
      R('EXPLOSION1', 0.58, 0.22, 0.3, 0.56, { fill: SUN });
      R('RECTANGLE', 0.78, 0.06, 0.08, 0.88, { fill: G });
      R('RIGHT_ARROW', 0.04, 0.4, 0.74, 0.2, { fill: c });
    } else if (k === 'TOE') {
      const cx = X(0.78); const cy = Y(0.5);
      ring(cx, cy, h * 0.78, { fill: 'FFFFFF', line: INK, lw });
      ring(cx, cy, h * 0.52, { fill: c, tr: 75 });
      ring(cx, cy, h * 0.22, { fill: INK });
      R('RIGHT_ARROW', 0.02, 0.44, 0.74, 0.12, { fill: c });
    } else if (k === 'BIJ') {
      R('RECTANGLE', 0.1, 0.64, 0.28, 0.28, { fill: GL, line: G, lw });
      R('RECTANGLE', 0.4, 0.64, 0.28, 0.28, { fill: GL, line: G, lw });
      R('RECTANGLE', 0.25, 0.34, 0.28, 0.28, { line: c, lw, dash: 'dash' });
      R('RECTANGLE', 0.25, 0.02, 0.28, 0.28, { fill: c });
      R('MATH_PLUS', 0.66, 0.04, 0.28, 0.52, { fill: c });
    } else if (k === 'MEE') {
      R('RIGHT_ARROW', 0.04, 0.16, 0.9, 0.26, { fill: G });
      R('RIGHT_ARROW', 0.04, 0.58, 0.9, 0.26, { fill: c });
    } else if (k === 'TEGEN') {
      R('EXPLOSION1', 0.36, 0.16, 0.28, 0.68, { fill: SUN });
      R('RIGHT_ARROW', 0.02, 0.37, 0.46, 0.26, { fill: c });
      R('LEFT_ARROW', 0.52, 0.37, 0.46, 0.26, { fill: G });
    } else if (k === 'DOOR') {
      R('RECTANGLE', 0.44, 0.04, 0.12, 0.92, { fill: G });
      R('RECTANGLE', 0.44, 0.36, 0.12, 0.28, { fill: INK });
      R('RIGHT_ARROW', 0.02, 0.4, 0.96, 0.2, { fill: c });
    } else if (k === 'OVER') {
      R('RECTANGLE', 0.04, 0.9, 0.92, 0.05, { fill: G });
      R('RECTANGLE', 0.43, 0.5, 0.14, 0.4, { fill: G });
      R('CURVED_DOWN_ARROW', 0.06, 0.06, 0.88, 0.62, { fill: c });
    } else if (k === 'OM') {
      const dd = h * 0.94;
      shp(s, 'CIRCULAR_ARROW', X(0.5) - dd / 2, Y(0.5) - dd / 2, dd, dd, { fill: c });
      ring(X(0.5), Y(0.5), h * 0.36, { fill: G });
    } else if (k === 'VOOR') {
      [0.12, 0.27, 0.42].forEach((f) => person(s, X(f), Y(0.9), h * 0.5, GL));
      person(s, X(0.66), Y(0.9), h * 0.62, c);
      R('RIGHT_ARROW', 0.8, 0.55, 0.18, 0.2, { fill: c });
    } else if (k === 'NA') {
      person(s, X(0.66), Y(0.9), h * 0.55, GL);
      R('RIGHT_ARROW', 0.8, 0.55, 0.18, 0.2, { fill: G });
      person(s, X(0.3), Y(0.9), h * 0.55, c);
      d.line(s, X(0.4), Y(0.68), X(0.54), Y(0.68), { color: hexOf(c), lw: Math.max(1.5, z * 1.2), dash: 'dash' });
    }
  };
  // tuile : schéma + particule (+ sens, + verbes)
  const tile = (s, k, x, y, w, h, o = {}) => {
    const c = colOf(k);
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: c, lw: 1.75, radius: 0.1, shadow: true });
    const sh = o.sh || h * 0.48;
    scene(s, k, x + 0.12, y + 0.12, w - 0.24, sh);
    let ty = y + sh + 0.16;
    d.t(s, `**${k.toLowerCase()}**`, x, ty, w, 0.42, { size: o.size || 22, color: c, align: 'center', valign: 'middle', head: true });
    ty += 0.42;
    if (o.mean) { d.t(s, o.mean, x + 0.05, ty, w - 0.1, 0.34, { size: 13, align: 'center', valign: 'middle', color: 'tx2' }); ty += 0.34; }
    if (o.verbs) d.t(s, `//${o.verbs}//`, x + 0.06, ty, w - 0.12, y + h - ty - 0.06, { size: 11, align: 'center', valign: 'middle', color: 'accent5' });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'COMPLÉMENT · B1–B2', title: 'Aan, af, op, uit…', sub: 'Les significations des particules séparables', line: '14 particules · 14 images',
    visual: (s) => {
      const K = [['OP', 8.35, 0.9], ['IN', 10.55, 0.9], ['UIT', 8.35, 2.75], ['AF', 10.55, 2.75], ['OVER', 8.35, 4.6], ['OM', 10.55, 4.6]];
      K.forEach(([k, x, y]) => {
        d.rect(s, x, y, 2.0, 1.65, { fill: 'FFFFFF', line: null, radius: 0.14 });
        scene(s, k, x + 0.2, y + 0.14, 1.6, 1.0);
        d.t(s, `**${k.toLowerCase()}**`, x, y + 1.15, 2.0, 0.42, { size: 20, color: colOf(k), align: 'center', valign: 'middle', head: true });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCompass', h: 'Comprendre', t: 'Je connais l’image et les sens de 14 particules.', color: 'accent2' },
      { icon: 'FaSearch', h: 'Deviner', t: 'Je devine le sens d’un verbe à particule inconnu.', color: 'accent1' },
      { icon: 'FaCogs', h: 'Utiliser', t: 'J’utilise le bon verbe, à la bonne place.', color: 'accent3' },
    ],
    band: 'Une particule = une image. L’image aide à deviner ; le reste s’apprend en bloc, avec le contexte.',
  });

  // ---------------------------------------------------------------- 3 échauffement : leren
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Devinez ! aan, bij, af… + leren' });
    const P = [['AAN', 'aan', 'leren', 'graduation-cap', 'Kinderen leren snel een taal **aan**.'], ['BIJ', 'bij', 'leren', 'books', 'Ik heb veel **bij**geleerd.'], ['AF', 'af', 'leren', 'no-smoking', 'Ik wil roken **af**leren.'], ['VER', 'ver', 'talen', 'thinking-face', 'Ik **ver**taal de tekst.']];
    const w = (12.13 - 3 * 0.2) / 4;
    P.forEach(([k, p, v, il, ex], i) => {
      const x = 0.6 + i * (w + 0.2); const c = k === 'VER' ? 'accent5' : colOf(k);
      const trap = k === 'VER';
      d.rect(s, x, 1.65, w, 4.95, { fill: trap ? 'FBEDEB' : 'FFFFFF', line: trap ? 'accent6' : c, lw: 2, radius: 0.12, shadow: true, dash: trap ? 'dash' : undefined });
      d.ill(s, il, x + w / 2 - 0.65, 1.85, 1.3, 1.3);
      d.rect(s, x + 0.25, 3.35, 1.05, 0.62, { fill: trap ? 'accent6' : c, line: null, radius: 0.12 });
      d.t(s, `**${p}**`, x + 0.25, 3.35, 1.05, 0.62, { size: 22, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, '+', x + 1.3, 3.35, 0.35, 0.62, { size: 24, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, x + 1.65, 3.35, w - 1.9, 0.62, { fill: 'FBEDEB', line: VB, lw: 2, radius: 0.12 });
      d.t(s, `**${v}**`, x + 1.65, 3.35, w - 1.9, 0.62, { size: 20, color: VB, align: 'center', valign: 'middle' });
      d.t(s, `//${ex}//`, x + 0.2, 4.15, w - 0.4, 1.0, { size: 17, align: 'center', valign: 'middle' });
      d.rect(s, x + 0.45, 5.4, w - 0.9, 0.75, { fill: 'FFFFFF', line: trap ? 'accent6' : c, lw: 1.75, dash: 'dash', radius: 0.12 });
      d.t(s, trap ? '**séparable ?**' : '**= ?**', x + 0.45, 5.4, w - 0.9, 0.75, { size: trap ? 18 : 24, color: trap ? 'accent6' : c, align: 'center', valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 4 rappel : la particule saute à la fin
  {
    const s = d.page({ g: 4, tag: 'RAPPEL M11', title: 'La particule saute à la fin' });
    // l'infinitif
    strip(s, 0.6, 2.3, [['op', 'p'], ['bellen', 'v']], { size: 26, h: 0.8, gap: 0.04 });
    const opInf = strip.pos[0];
    d.t(s, 'l’infinitif', 0.6, 3.15, 2.6, 0.4, { size: 14, italic: true, color: 'accent5' });
    d.t(s, '➜', 3.15, 2.3, 0.7, 0.8, { size: 30, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    // la phrase
    strip(s, 3.95, 2.3, [['Ik', 'n'], ['bel', 'v'], ['je morgen', 'n'], ['op.', 'p']], { size: 26, h: 0.8 });
    const opEnd = strip.pos[3];
    d.curve(s, opInf[0] + opInf[1] / 2, 2.25, opEnd[0] + opEnd[1] / 2, 2.25, { color: hexOf(PA), lw: 3, h: 0.55, dir: -1 });
    d.t(s, 'la particule va au bout', opEnd[0] + opEnd[1] - 3.5, 3.15, 3.5, 0.4, { size: 15, bold: true, color: PA, align: 'right' });
    // ge / te au milieu
    d.t(s, '**ge-** et **te** se glissent au milieu', 0.6, 3.85, 7, 0.45, { size: 18, color: 'tx2' });
    strip(s, 0.6, 4.45, [['op', 'p'], ['ge', 'e'], ['beld', 'v']], { size: 26, h: 0.8, gap: 0.04 });
    d.t(s, 'Ik heb je **opgebeld**.', 0.6, 5.35, 3.6, 0.45, { size: 17, italic: true });
    strip(s, 4.4, 4.45, [['op', 'p'], ['te', 'e'], ['bellen', 'v']], { size: 26, h: 0.8, gap: 0.04 });
    d.t(s, 'Vergeet niet me **op te bellen**.', 4.4, 5.35, 4.2, 0.45, { size: 17, italic: true });
    // l'accent
    d.rect(s, 9.0, 3.85, 3.73, 2.55, { fill: 'FDF1E6', line: PA, lw: 1.5, radius: 0.12 });
    d.t(s, '**Le test de l’accent**', 9.15, 3.95, 3.45, 0.42, { size: 16, color: PA });
    d.oval(s, 9.62, 4.58, 0.2, 0.2, { fill: PA });
    d.t(s, '**OP**bellen', 9.4, 4.75, 3.2, 0.6, { size: 28 });
    d.t(s, 'L’accent tombe sur la particule : elle se détache.', 9.15, 5.45, 3.45, 0.85, { size: 14, color: 'tx2' });
  }

  // ---------------------------------------------------------------- 5 la carte : 14 images
  {
    const s = d.page({ g: 5, tag: 'DEVINEZ', title: '14 particules, 14 images : devinez !' });
    const tw = (12.13 - 6 * 0.15) / 7;
    PARTS.forEach((P, i) => {
      const x = 0.6 + (i % 7) * (tw + 0.15); const y = 1.65 + Math.floor(i / 7) * 2.6;
      tile(s, P.k, x, y, tw, 2.4, { sh: 1.5, size: 24 });
    });
  }

  // ---------------------------------------------------------------- 6 P1 les trois étages
  {
    const s = d.page({ g: 6, tag: 'MÉTHODE', title: 'Du concret au figuré : les trois étages' });
    const E = [['①', 'LA DIRECTION', 'uitgaan', 'sortir', 'door', 'accent2', 0.75], ['②', 'LE RÉSULTAT', 'uitlezen', 'finir (un livre)', 'closed-book', 'accent1', 1.5], ['③', 'LE SENS FIGURÉ', 'uitleggen', 'expliquer', 'light-bulb', 'purple', 2.25]];
    const base = 6.75; const sw = 3.9;
    E.forEach(([n, h, v, fr, ic, c, hh], i) => {
      const x = 0.7 + i * (sw + 0.15);
      d.rect(s, x, base - hh, sw, hh, { fill: c, tr: 80, line: c, lw: 2, radius: 0.06 });
      d.t(s, `**${n} ${h}**`, x + 0.15, base - hh + 0.1, sw - 0.3, 0.45, { size: 17, color: c === 'purple' ? 'purple' : c });
      const cy = base - hh - 2.05;
      d.rect(s, x + 0.15, cy, sw - 0.3, 1.9, { fill: 'FFFFFF', line: c, lw: 1.75, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.3, cy + 0.35, 1.2, 1.2);
      rich(s, vRuns('UIT', v, { size: 26 }), x + 1.65, cy + 0.3, sw - 1.9, 0.7, { valign: 'middle' });
      d.t(s, fr, x + 1.65, cy + 1.0, sw - 1.9, 0.55, { size: 18, color: 'tx2' });
    });
    d.t(s, 'plus on monte, moins le sens se devine', 0.7, 1.6, 7.0, 0.4, { size: 15, italic: true, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 7–20 une particule par diapo
  d.section('Les 14 particules');
  PARTS.forEach((P, i) => {
    const k = P.k; const c = colOf(k);
    const s = d.page({ g: FIRST + i, tag: `PARTICULE ${i + 1} / 14`, tagColor: c, title: `${k}- : ${P.mean}` });
    // le schéma
    d.rect(s, 0.6, 1.6, 4.55, 5.2, { fill: c, tr: 88, line: c, lw: 1.5, radius: 0.12 });
    d.rect(s, 0.8, 1.8, 4.15, 3.0, { fill: 'FFFFFF', line: null, radius: 0.1 });
    scene(s, k, 1.0, 1.98, 3.75, 2.64);
    d.t(s, `**${k.toLowerCase()}**`, 0.8, 4.85, 4.15, 0.78, { size: 46, color: c, align: 'center', valign: 'middle', head: true });
    d.t(s, P.sub, 0.8, 5.6, 4.15, 0.42, { size: 16, italic: true, color: 'tx2', align: 'center', valign: 'middle' });
    if (P.opp) {
      d.rect(s, 0.8, 6.12, 4.15, 0.5, { fill: 'FFFFFF', line: colOf(P.opp[0]), lw: 1.25, radius: 0.25 });
      rich(s, [['contraire   ', { fontSize: 12, color: 'accent5' }], [P.opp[1], { fontSize: 14, bold: true, italic: true, color: 'tx1' }]], 0.85, 6.12, 4.05, 0.5, { align: 'center' });
    }
    // les trois sens
    P.S.forEach(([lab, ic, v, fr, ex], j) => {
      const x = 5.4; const y = 1.6 + j * 1.6; const w = 7.33; const h = 1.48;
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1, shadow: true });
      d.rect(s, x, y, 0.12, h, { fill: c, line: null, radius: 0 });
      d.ill(s, ic, x + 0.32, y + 0.17, 1.14, 1.14);
      d.t(s, `**${['①', '②', '③'][j]}  ${lab.toUpperCase()}**`, x + 1.7, y + 0.1, w - 1.85, 0.34, { size: 12, color: c, cs: 1, valign: 'middle' });
      rich(s, [...vRuns(k, v, { size: 26 }), [`   ${fr}`, { fontSize: 18, color: 'accent5' }]], x + 1.7, y + 0.42, w - 1.85, 0.56);
      rich(s, exRuns(k, ex, { size: 17 }), x + 1.7, y + 0.98, w - 1.85, 0.4);
    });
    d.t(s, `+ aussi : //${P.also}//`, 5.4, 6.42, 7.33, 0.38, { size: 15, color: 'accent5', valign: 'middle' });
  });

  // ---------------------------------------------------------------- 21 et aussi
  d.section('Aller plus loin');
  {
    const s = d.page({ g: 21, tag: 'ET AUSSI', title: 'Et aussi : terug, weg, samen, vast, los' });
    const T = [['terug', 'retour', 'right-arrow-curving-left', 'terugbellen', 'rappeler', 'accent2'], ['weg', 'partir, disparaître', 'dashing-away', 'weggooien', 'jeter', 'accent6'], ['samen', 'ensemble', 'people-hugging', 'samenwerken', 'collaborer', 'accent3'], ['vast', 'fixé', 'pushpin', 'vastleggen', 'fixer', 'tx2'], ['los', 'détaché', 'balloon', 'loslaten', 'lâcher', 'accent1']];
    const tw = (12.13 - 4 * 0.15) / 5;
    T.forEach(([p, sens, ic, v, fr, c], i) => {
      const x = 0.6 + i * (tw + 0.15);
      d.rect(s, x, 1.65, tw, 2.9, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.ill(s, ic, x + tw / 2 - 0.5, 1.8, 1.0, 1.0);
      d.t(s, `**${p}**`, x, 2.85, tw, 0.5, { size: 24, color: c, align: 'center', valign: 'middle', head: true });
      d.t(s, sens, x, 3.32, tw, 0.32, { size: 13, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      rich(s, [...vRuns(p.toUpperCase(), v, { size: 16, p }).map(([t, o]) => [t, { ...o, color: o.color === 'tx1' ? 'tx1' : hexOf(c) }])], x + 0.05, 3.68, tw - 0.1, 0.4, { align: 'center' });
      d.t(s, fr, x, 4.05, tw, 0.35, { size: 14, color: 'tx2', align: 'center', valign: 'middle' });
    });
    d.t(s, '**ADJECTIF OU NOM + VERBE** : ils se séparent aussi', 0.6, 4.75, 12.13, 0.4, { size: 14, color: 'accent5' });
    const A = [['schoon', 'maken', 'nettoyer'], ['kapot', 'maken', 'casser'], ['goed', 'keuren', 'approuver'], ['deel', 'nemen', 'participer'], ['plaats', 'vinden', 'avoir lieu'], ['kwijt', 'raken', 'perdre']];
    A.forEach(([a, b, f], i) => {
      const x = 0.6 + (i % 3) * 4.1; const y = 5.25 + Math.floor(i / 3) * 0.75;
      d.rect(s, x, y, 3.93, 0.62, { fill: 'bg2', line: BORDER, radius: 0.1 });
      rich(s, [[a, { bold: true, color: hexOf('accent5'), fontSize: 17 }], [b, { bold: true, fontSize: 17 }], [`  ${f}`, { fontSize: 15, color: 'accent5' }]], x + 0.2, y, 3.6, 0.62);
    });
  }

  // ---------------------------------------------------------------- 22 contraires
  {
    const s = d.page({ g: 22, tag: 'CONTRAIRES', title: 'Les interrupteurs : une particule, son contraire' });
    const R = [['AAN', 'aanzetten', 'light-bulb', 0, 'UIT', 'uitzetten', 'light-bulb', 75, 'allumer / éteindre'], ['IN', 'instappen', 'bus', 0, 'UIT', 'uitstappen', 'person-walking', 0, 'monter / descendre'], ['TOE', 'toenemen', 'chart-increasing', 0, 'AF', 'afnemen', 'chart-decreasing', 0, 'augmenter / diminuer'],
      ['MEE', 'meevallen', 'grinning-face', 0, 'TEGEN', 'tegenvallen', 'disappointed-face', 0, 'mieux / moins bien que prévu'], ['AAN', 'aankomen', 'hamburger', 0, 'AF', 'afvallen', 'green-salad', 0, 'grossir / maigrir'], ['BIJ', 'bijleren', 'books', 0, 'AF', 'afleren', 'no-smoking', 0, 'apprendre en plus / se défaire de']];
    const cw = (12.13 - 2 * 0.25) / 3; const ch = 2.22;
    R.forEach(([ka, a, ia, ta, kb, b, ib, tb, fr], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.25); const y = 1.65 + Math.floor(i / 3) * (ch + 0.2);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      const hw = (cw - 0.5) / 2;
      [[ka, a, ia, ta, x + 0.15], [kb, b, ib, tb, x + 0.35 + hw]].forEach(([k, v, ic, tr, xx]) => {
        d.ill(s, ic, xx + hw / 2 - 0.5, y + 0.15, 1.0, 1.0, { tr });
        d.rect(s, xx, y + 1.25, hw, 0.5, { fill: colOf(k), line: null, radius: 0.12 });
        rich(s, vRuns(k, v, { size: 15, color: 'FFFFFF' }).map(([t, o]) => [t, { ...o, color: 'FFFFFF' }]), xx, y + 1.25, hw, 0.5, { align: 'center' });
      });
      d.t(s, '⇄', x + cw / 2 - 0.25, y + 0.45, 0.5, 0.5, { size: 22, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, fr, x + 0.1, y + 1.8, cw - 0.2, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.t(s, '//aandoen / uitdoen// = mettre / enlever (un vêtement) ; en Belgique, familier : allumer / éteindre.', 0.6, 6.5, 12.13, 0.35, { size: 13, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 23 étoile nemen
  {
    const s = d.page({ g: 23, tag: 'MÉTHODE', title: 'L’étoile du verbe : nemen' });
    const rays = [['AAN', 'aannemen', 'embaucher ; accepter', 'briefcase'], ['AF', 'afnemen', 'diminuer', 'chart-decreasing'], ['OP', 'opnemen', 'décrocher ; enregistrer', 'telephone-receiver'], ['OVER', 'overnemen', 'reprendre', 'handshake'],
      ['TOE', 'toenemen', 'augmenter', 'chart-increasing'], ['MEE', 'meenemen', 'emporter', 'umbrella'], ['IN', 'innemen', 'prendre (un médicament)', 'pill'], ['DEEL', 'deelnemen', 'participer', 'raising-hands']];
    const cx = 6.67; const cy = 4.15; const rx = 4.3; const ry = 2.0; const cw = 2.65; const chh = 0.95;
    rays.forEach(([k, v, f, ic], i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / rays.length;
      const px = cx + rx * Math.cos(a); const py = cy + ry * Math.sin(a);
      d.line(s, cx, cy, px, py, { color: BORDER, lw: 2, arrow: false });
      d.rect(s, px - cw / 2, py - chh / 2, cw, chh, { fill: 'FFFFFF', line: colOf(k), lw: 2, radius: 0.14, shadow: true });
      d.ill(s, ic, px - cw / 2 + 0.1, py - 0.33, 0.66, 0.66);
      rich(s, vRuns(k, v, { size: 17, p: k === 'DEEL' ? 'deel' : undefined }), px - cw / 2 + 0.85, py - chh / 2 + 0.06, cw - 0.92, 0.42);
      d.t(s, f, px - cw / 2 + 0.85, py - 0.02, cw - 0.92, 0.45, { size: 12, color: 'accent5', valign: 'top' });
    });
    d.oval(s, cx - 0.9, cy - 0.5, 1.8, 1.0, { fill: 'tx2' });
    d.t(s, 'NEMEN', cx - 0.9, cy - 0.5, 1.8, 1.0, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, 'À vous : l’étoile de //gaan//, //komen// ou //zetten// !', 0.6, 6.4, 4.7, 0.4, { size: 15, italic: true, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 24 polysémie
  {
    const s = d.page({ g: 24, tag: 'MÉTHODE', title: 'Un verbe, trois sens : le complément décide' });
    const P = [['OP', 'opnemen', [['telephone-receiver', 'Neem de telefoon {op}!', 'décrocher'], ['studio-microphone', 'We nemen het gesprek {op}.', 'enregistrer'], ['beach-with-umbrella', 'Ik neem morgen verlof {op}.', 'prendre (un congé)']]],
      ['AAN', 'aannemen', [['check-mark-button', 'Ik neem het voorstel {aan}.', 'accepter'], ['briefcase', 'Het bedrijf neemt twee mensen {aan}.', 'embaucher'], ['thinking-face', 'Ik neem {aan} dat je komt.', 'supposer']]]];
    const ch = 2.3;
    P.forEach(([k, v, L], r) => {
      const y = 1.65 + r * (ch + 0.2); const c = colOf(k);
      d.rect(s, 0.6, y, 2.45, ch, { fill: c, line: null, radius: 0.12 });
      rich(s, vRuns(k, v, { size: 24, color: 'FFFFFF' }).map(([t, o]) => [t, { ...o, color: 'FFFFFF' }]), 0.6, y, 2.45, ch, { align: 'center' });
      const cw = (12.13 - 2.45 - 3 * 0.18) / 3;
      L.forEach(([ic, ex, fr], j) => {
        const x = 0.6 + 2.45 + 0.18 + j * (cw + 0.18);
        d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: c, lw: 1.5, radius: 0.12, shadow: true });
        d.ill(s, ic, x + cw / 2 - 0.45, y + 0.12, 0.9, 0.9);
        rich(s, exRuns(k, ex, { size: 15 }), x + 0.12, y + 1.08, cw - 0.24, 0.62, { align: 'center' });
        d.t(s, `**${fr}**`, x + 0.12, y + 1.7, cw - 0.24, 0.45, { size: 17, color: c, align: 'center', valign: 'middle' });
      });
    });
    d.t(s, 'Notez toujours le verbe **avec** son complément : //de telefoon opnemen · verlof opnemen//.', 0.6, 6.55, 12.13, 0.35, { size: 15, color: 'tx2', align: 'center' });
  }

  // ---------------------------------------------------------------- 25 particule + préposition (B2)
  {
    const s = d.page({ g: 25, tag: 'B2', tagColor: 'purple', title: 'Particule + préposition : Ik kijk ernaar uit' });
    strip(s, 0.6, 1.85, [['Ik', 'n'], ['kijk', 'v'], ['ernaar', 'b'], ['uit.', 'p']], { size: 24, h: 0.76 });
    const P1 = strip.pos;
    [['verbe', 1, VB], ['er + prép.', 2, 'accent2'], ['particule', 3, PA]].forEach(([t, i, c]) => d.t(s, t, P1[i][0] - 0.1, 2.66, P1[i][1] + 0.2, 0.35, { size: 12, bold: true, color: c, align: 'center' }));
    strip(s, 6.6, 1.85, [['…, omdat ik', 'n'], ['ernaar', 'b'], ['uitkijk.', 'v']], { size: 24, h: 0.76 });
    d.t(s, 'subordonnée : la particule se recolle au verbe', 6.6, 2.66, 6.1, 0.35, { size: 12, italic: true, color: 'accent5' });
    const R = [['AF', 'afhangen van', 'dépendre de', 'Het hangt ervan {af}.'], ['UIT', 'uitkijken naar', 'attendre avec impatience', 'Ik kijk ernaar {uit}.'], ['UIT', 'uitgaan van', 'partir du principe que', 'Ik ga ervan {uit} dat…'],
      ['NA', 'nadenken over', 'réfléchir à', 'Ik denk erover {na}.'], ['DEEL', 'deelnemen aan', 'participer à', 'Ik neem eraan {deel}.'], ['IN', 'ingaan op', 'répondre à', 'Ik ga erop {in}.']];
    const cw = (12.13 - 2 * 0.2) / 3;
    R.forEach(([k, v, fr, ex], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.2); const y = 3.35 + Math.floor(i / 3) * 1.38;
      d.rect(s, x, y, cw, 1.25, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1, shadow: true });
      d.rect(s, x, y, 0.1, 1.25, { fill: colOf(k), line: null, radius: 0 });
      rich(s, vRuns(k, v, { size: 18, p: k === 'DEEL' ? 'deel' : undefined }), x + 0.25, y + 0.06, cw - 0.35, 0.4);
      d.t(s, fr, x + 0.25, y + 0.45, cw - 0.35, 0.3, { size: 13, color: 'accent5', valign: 'middle' });
      rich(s, exRuns(k, ex, { size: 16 }), x + 0.25, y + 0.78, cw - 0.35, 0.4);
    });
    d.t(s, 'Un adverbe peut séparer //er// et la préposition : //Ik kijk er **echt** naar uit.//', 0.6, 6.25, 12.13, 0.4, { size: 15, color: 'tx2', align: 'center' });
  }

  // ---------------------------------------------------------------- 26 piège : ciseaux ou cadenas
  {
    const s = d.page({ g: 26, tag: 'PIÈGE', title: 'Ciseaux ou cadenas ? séparable ou inséparable' });
    const W = (12.13 - 0.25) / 2;
    // séparable
    d.rect(s, 0.6, 1.6, W, 3.25, { fill: 'FDF1E6', line: PA, lw: 2, radius: 0.12 });
    d.ill(s, 'scissors', 0.8, 1.75, 0.8, 0.8);
    d.t(s, '**SÉPARABLE**', 1.75, 1.75, 4, 0.8, { size: 22, color: PA, valign: 'middle' });
    d.oval(s, 1.32, 2.8, 0.22, 0.22, { fill: PA });
    d.rect(s, 0.85, 3.05, 1.15, 0.75, { fill: PA, line: null, radius: 0.12 });
    d.t(s, '**OP**', 0.85, 3.05, 1.15, 0.75, { size: 26, color: 'bg1', align: 'center', valign: 'middle' });
    d.line(s, 2.15, 2.95, 2.15, 3.95, { color: hexOf(PA), lw: 2, dash: 'dash', arrow: false });
    d.rect(s, 2.3, 3.05, 1.75, 0.75, { fill: 'FBEDEB', line: VB, lw: 2, radius: 0.12 });
    d.t(s, '**bellen**', 2.3, 3.05, 1.75, 0.75, { size: 26, color: VB, align: 'center', valign: 'middle' });
    d.t(s, ['accent sur la **particule**', '//Ik bel je **op**.//', '//Ik heb je op**ge**beld.//'], 4.25, 2.7, 2.2, 2.0, { size: 15, gap: 6, valign: 'middle' });
    // inséparable
    const x2 = 0.6 + W + 0.25;
    d.rect(s, x2, 1.6, W, 3.25, { fill: 'E6EBF2', line: 'tx2', lw: 2, radius: 0.12 });
    d.ill(s, 'locked', x2 + 0.2, 1.75, 0.8, 0.8);
    d.t(s, '**INSÉPARABLE**', x2 + 1.15, 1.75, 4, 0.8, { size: 22, color: 'tx2', valign: 'middle' });
    d.rect(s, x2 + 0.25, 3.05, 2.95, 0.75, { fill: 'tx2', line: null, radius: 0.12 });
    d.t(s, '**verTAlen**', x2 + 0.25, 3.05, 2.95, 0.75, { size: 26, color: 'bg1', align: 'center', valign: 'middle' });
    d.oval(s, x2 + 1.95, 2.8, 0.22, 0.22, { fill: 'tx2' });
    d.t(s, ['accent sur le **verbe**', '//Ik **vertaal** de tekst.//', '//Ik heb hem **vertaald**.// (pas de //ge-//)'], x2 + 3.4, 2.7, W - 3.5, 2.0, { size: 15, gap: 6, valign: 'middle' });
    // les préfixes toujours collés
    d.t(s, '**TOUJOURS COLLÉS** : jamais de séparation, jamais de //ge-//', 0.6, 5.0, 12.13, 0.4, { size: 14, color: 'accent6' });
    const Px = [['be-', 'betalen'], ['ge-', 'gebruiken'], ['her-', 'herhalen'], ['ont-', 'ontmoeten'], ['er-', 'erkennen'], ['ver-', 'vertalen']];
    const pw = (12.13 - 5 * 0.15) / 6;
    Px.forEach(([p, v], i) => {
      const x = 0.6 + i * (pw + 0.15);
      d.rect(s, x, 5.45, pw, 1.3, { fill: 'FFFFFF', line: 'accent6', lw: 1.5, radius: 0.12 });
      d.ill(s, 'locked', x + 0.12, 5.55, 0.42, 0.42);
      d.t(s, `**${p}**`, x + 0.5, 5.5, pw - 0.6, 0.55, { size: 24, color: 'accent6', align: 'center', valign: 'middle' });
      d.t(s, `//${v}//`, x, 6.12, pw, 0.5, { size: 15, align: 'center', valign: 'middle', color: 'tx1' });
    });
  }

  // ---------------------------------------------------------------- 27 doublets
  {
    const s = d.page({ g: 27, tag: 'PIÈGE', title: 'Même verbe, deux accents, deux sens' });
    const W = (12.13 - 0.7) / 2;
    d.rect(s, 0.6, 1.6, W, 0.5, { fill: PA, line: null, radius: 0.1 });
    d.t(s, '✂  accent sur la PARTICULE · séparable · ge-', 0.6, 1.6, W, 0.5, { size: 14, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.rect(s, 0.6 + W + 0.7, 1.6, W, 0.5, { fill: 'tx2', line: null, radius: 0.1 });
    d.t(s, '🔒  accent sur le VERBE · inséparable · pas de ge-', 0.6 + W + 0.7, 1.6, W, 0.5, { size: 14, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    const D = [['VOORkomen', 'se produire', 'warning', 'Het komt vaak voor.', 'voorKOmen', 'éviter', 'shield', 'Zo voorkom je fouten.'],
      ['DOORlopen', 'continuer à marcher', 'person-walking', 'Loop maar door!', 'doorLOpen', 'parcourir (une formation)', 'graduation-cap', 'Ze heeft de opleiding doorlopen.'],
      ['OVERkomen', 'venir ; paraître', 'airplane-arrival', 'Hij komt arrogant over.', 'overKOmen', 'arriver (à qn)', 'collision', 'Wat is hem overkomen?'],
      ['OVERleggen', 'présenter (un document)', 'page-facing-up', 'Ik leg een attest over.', 'overLEGgen', 'se concerter', 'busts-in-silhouette', 'We overleggen morgen.']];
    D.forEach((row, i) => {
      const y = 2.22 + i * 1.06;
      [[row.slice(0, 4), 0.6, PA, 'FDF1E6'], [row.slice(4), 0.6 + W + 0.7, 'tx2', 'E6EBF2']].forEach(([[v, f, ic, ex], x, c, bg]) => {
        d.rect(s, x, y, W, 0.98, { fill: bg, line: null, radius: 0.1 });
        d.ill(s, ic, x + 0.15, y + 0.12, 0.74, 0.74);
        const up = v.replace(/[a-z]+/g, '');
        const pre = v.slice(0, v.indexOf(up)); const post = v.slice(v.indexOf(up) + up.length);
        rich(s, [[pre, { bold: true, fontSize: 20, color: 'tx1' }], [up, { bold: true, fontSize: 20, color: hexOf(c) }], [post, { bold: true, fontSize: 20, color: 'tx1' }], [`  ${f}`, { fontSize: 14, color: 'accent5' }]], x + 1.05, y + 0.06, W - 1.15, 0.5);
        d.t(s, `//${ex}//`, x + 1.05, y + 0.52, W - 1.15, 0.4, { size: 14, valign: 'middle', color: 'tx2' });
      });
      d.t(s, '≠', 0.6 + W, y, 0.7, 0.98, { size: 26, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
    });
    d.t(s, 'Passé composé : //het is voor**ge**komen// (séparable) · //ik heb het voorkomen// (inséparable)', 0.6, 6.45, 12.13, 0.4, { size: 15, color: 'tx2', align: 'center' });
  }

  // ---------------------------------------------------------------- 28 place B2
  {
    const s = d.page({ g: 28, tag: 'B2', tagColor: 'purple', title: 'Dans un groupe verbal : deux ordres corrects' });
    const R = [[[['…, dat ik je', 'n'], ['zal', 'v'], ['opbellen.', 'v2']], [['…, dat ik je', 'n'], ['op', 'p'], ['zal', 'v'], ['bellen.', 'v2']]], [[['Ik heb het niet', 'n'], ['kunnen', 'v2'], ['afmaken.', 'v2']], [['Ik heb het niet', 'n'], ['af', 'p'], ['kunnen', 'v2'], ['maken.', 'v2']]]];
    R.forEach(([a, b], i) => {
      const y = 1.8 + i * 1.05;
      const e = strip(s, 0.6, y, a, { size: 17, h: 0.6 });
      d.t(s, '=', e + 0.08, y, 0.4, 0.6, { size: 24, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
      strip(s, e + 0.56, y, b, { size: 17, h: 0.6 });
    });
    d.t(s, 'la particule reste collée… ou passe devant le groupe', 0.6, 3.95, 12.13, 0.4, { size: 15, italic: true, color: 'accent5' });
    d.rect(s, 0.6, 4.45, 12.13, 0.04, { fill: BORDER, line: null, radius: 0 });
    d.t(s, '**AVEC TE** : particule + te + verbe', 0.6, 4.6, 8, 0.4, { size: 15, color: 'tx2' });
    strip(s, 0.6, 5.1, [['Ik probeer het', 'n'], ['af', 'p'], ['te', 'e'], ['maken.', 'v2']], { size: 19, h: 0.62 });
    strip(s, 6.6, 5.1, [['… zonder', 'n'], ['op', 'p'], ['te', 'e'], ['letten.', 'v2']], { size: 19, h: 0.62 });
    d.t(s, 'Avec un modal, deux ordres : //om het **af te kunnen maken** = om het **te kunnen afmaken**//', 0.6, 6.0, 12.13, 0.45, { size: 15, color: 'tx1' });
  }

  // ---------------------------------------------------------------- 29 stratégie : deviner
  {
    const s = d.page({ g: 29, tag: 'MÉTHODE', title: 'Deviner : l’image de la particule + le verbe' });
    const E = [['UIT', 'printen', 'printer', 'Kun je dat even {uit}printen?'], ['BIJ', 'bestellen', 'shopping-cart', 'We moeten papier {bij}bestellen.'], ['NA', 'bellen', 'telephone-receiver', 'Wil je de klant {na}bellen?'], ['OP', 'frissen', 'droplet', 'Ik wil mijn Nederlands {op}frissen.']];
    E.forEach(([k, v, ic, ex], i) => {
      const y = 1.65 + i * 1.18; const c = colOf(k);
      d.rect(s, 0.6, y, 1.95, 1.04, { fill: 'FFFFFF', line: c, lw: 1.75, radius: 0.12 });
      scene(s, k, 0.72, y + 0.1, 1.0, 0.92);
      d.t(s, `**${k.toLowerCase()}**`, 1.72, y, 0.8, 1.12, { size: 20, color: c, align: 'center', valign: 'middle' });
      d.t(s, '+', 2.6, y, 0.45, 1.12, { size: 28, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, 3.1, y, 2.3, 1.12, { fill: 'FBEDEB', line: VB, lw: 1.75, radius: 0.12 });
      d.ill(s, ic, 3.2, y + 0.21, 0.7, 0.7);
      d.t(s, `**${v}**`, 3.9, y, 1.45, 1.12, { size: 18, color: VB, valign: 'middle' });
      d.t(s, '=', 5.45, y, 0.45, 1.12, { size: 28, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, 5.95, y, 1.3, 1.12, { fill: 'FFFFFF', line: c, lw: 1.75, dash: 'dash', radius: 0.12 });
      d.t(s, '**?**', 5.95, y, 1.3, 1.12, { size: 30, color: c, align: 'center', valign: 'middle' });
      rich(s, exRuns(k, ex, { size: 18 }), 7.45, y, 5.28, 1.12);
    });
    d.t(s, '① l’image de la particule  ② le sens du verbe  ③ le contexte confirme. En cas de doute : le dictionnaire.', 0.6, 6.42, 12.13, 0.4, { size: 15, color: 'tx2', align: 'center' });
  }

  // ---------------------------------------------------------------- 30 à retenir
  {
    const s = d.page({ g: 30, tag: 'À RETENIR', title: 'À retenir : 14 particules, 14 images' });
    const tw = (12.13 - 6 * 0.15) / 7;
    const V = { IN: 'instappen · inleveren', UIT: 'uitgaan · uitleggen', OP: 'opstaan · opschrijven', AF: 'afnemen · afmaken', AAN: 'aanzetten · aanleren', TOE: 'toenemen · toedoen', BIJ: 'bijleren · bijhouden', MEE: 'meenemen · meedoen', TEGEN: 'tegenkomen · tegenvallen', DOOR: 'doorgaan · doorsturen', OVER: 'oversteken · overnemen', OM: 'omrijden · omdraaien', VOOR: 'voorbereiden · voorstellen', NA: 'nadenken · nakijken' };
    PARTS.forEach((P, i) => {
      const x = 0.6 + (i % 7) * (tw + 0.15); const y = 1.6 + Math.floor(i / 7) * 2.62;
      tile(s, P.k, x, y, tw, 2.5, { sh: 0.95, size: 20, mean: P.mean, verbs: V[P.k].replace(' · ', '\n') });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 31 divider
  d.divider({ g: 31, tiles: [
    ['Quelle particule ?', '★', 'FaQuestion'], ['L’image et le verbe', '★★', 'FaImage'], ['Ciseaux ou cadenas ?', '★★', 'FaCut'], ['Le détective', '★★', 'FaSearch'],
    ['Les interrupteurs', '★', 'FaToggleOn'], ['La roulette des particules', '★★', 'FaDharmachakra'], ['La réunion d’équipe', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 32 ex1 quelle particule (indices en images)
  const ex1 = [['mobile-phone-off', 'Zet je gsm [[uit]].'], ['chart-increasing', 'De prijzen nemen elk jaar [[toe]].'], ['open-book', 'Zoek dit woord even [[op]].'], ['magnifying-glass-tilted-left', 'Kijk je tekst nog eens [[na]].'],
    ['e-mail', 'Ik stuur je de mail [[door]].'], ['handshake', 'Lotte neemt het project [[over]].'], ['inbox-tray', 'Lever je rapport vrijdag [[in]].'], ['umbrella', 'Neem een paraplu [[mee]].']];
  d.ex({ g: 32, title: 'Exercice 1 — Quelle particule ?', stars: '★', instr: 'Regardez l’image et complétez avec la bonne particule.' }, (s, mode, top) => {
    const rh = (6.35 - top) / 4; const cw = (12.13 - 0.3) / 2;
    ex1.forEach(([ic, t], i) => {
      const x = 0.6 + Math.floor(i / 4) * (cw + 0.3); const y = top + (i % 4) * rh;
      d.rect(s, x, y + 0.05, cw, rh - 0.12, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.ill(s, ic, x + 0.12, y + 0.1, rh - 0.22, rh - 0.22);
      d.t(s, `**${i + 1}**  //${t}//`, x + rh, y + 0.05, cw - rh - 0.1, rh - 0.12, { size: 20, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'Aussi acceptés : n° 1 //af// (BE) · n° 7 //af// (//afleveren//)', 0.6, 6.4, 12.13, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 33 ex2 l'image et le verbe (nemen)
  const ex2 = [['telephone-receiver', 'OP', 'opnemen', 'Neem de telefoon op!'], ['umbrella', 'MEE', 'meenemen', 'Neem een paraplu mee.'], ['briefcase', 'AAN', 'aannemen', 'Het bedrijf neemt mensen aan.'], ['raising-hands', 'DEEL', 'deelnemen', 'Tien collega’s nemen deel.'],
    ['chart-decreasing', 'AF', 'afnemen', 'De werkloosheid neemt af.'], ['pill', 'IN', 'innemen', 'Neem dit medicijn in.'], ['handshake', 'OVER', 'overnemen', 'Lotte neemt het project over.'], ['chart-increasing', 'TOE', 'toenemen', 'Het aantal klanten neemt toe.']];
  d.ex({ g: 33, title: 'Exercice 2 — L’image et le verbe', stars: '★★', instr: 'Quel verbe de la famille //nemen// ? Écrivez-le sous l’image, puis dites une phrase.' }, (s, mode, top) => {
    const bank = ['aannemen', 'afnemen', 'deelnemen', 'innemen', 'meenemen', 'opnemen', 'overnemen', 'toenemen'];
    bank.forEach((b, i) => {
      const bw = (12.13 - 7 * 0.12) / 8; const x = 0.6 + i * (bw + 0.12);
      d.rect(s, x, top, bw, 0.45, { fill: 'FBEDEB', line: VB, lw: 1, radius: 0.1 });
      d.t(s, `//**${b}**//`, x, top, bw, 0.45, { size: 14, color: VB, align: 'center', valign: 'middle' });
    });
    const tw = (12.13 - 3 * 0.2) / 4; const th = (6.85 - top - 0.65 - 0.2) / 2;
    ex2.forEach(([ic, k, v, ex], i) => {
      const x = 0.6 + (i % 4) * (tw + 0.2); const y = top + 0.65 + Math.floor(i / 4) * (th + 0.2);
      d.rect(s, x, y, tw, th, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.t(s, `**${'ABCDEFGH'[i]}**`, x + 0.12, y + 0.08, 0.4, 0.4, { size: 16, color: 'accent5' });
      const iz = Math.min(1.1, th - 1.12);
      d.ill(s, ic, x + tw / 2 - iz / 2, y + 0.12, iz, iz);
      if (mode === 'q') d.rect(s, x + 0.3, y + th - 0.62, tw - 0.6, 0.45, { fill: 'FFFFFF', line: BORDER, lw: 1, dash: 'dash', radius: 0.08 });
      else {
        rich(s, vRuns(k, v, { size: 18, p: k === 'DEEL' ? 'deel' : undefined }), x + 0.1, y + th - 0.95, tw - 0.2, 0.42, { align: 'center' });
        d.t(s, `//${ex}//`, x + 0.1, y + th - 0.55, tw - 0.2, 0.45, { size: 12, align: 'center', valign: 'middle', color: 'tx2' });
      }
    });
  });

  // ---------------------------------------------------------------- 34 ex3 ciseaux ou cadenas
  const ex3 = [['opbellen', 1, 'opgebeld'], ['vertalen', 0, 'vertaald'], ['nakijken', 1, 'nagekeken'], ['herhalen', 0, 'herhaald'], ['uitleggen', 1, 'uitgelegd'], ['bezoeken', 0, 'bezocht'], ['meenemen', 1, 'meegenomen'], ['ontmoeten', 0, 'ontmoet'], ['aankomen', 1, 'aangekomen'], ['verstaan', 0, 'verstaan']];
  d.ex({ g: 34, title: 'Exercice 3 — Ciseaux ou cadenas ?', stars: '★★', instr: 'Dites le verbe à voix haute (accent !), classez-le, puis donnez le participe passé.' }, (s, mode, top) => {
    let by = top;
    if (mode === 'q') {
      const bw = (12.13 - 4 * 0.15) / 5;
      ex3.forEach(([v], i) => {
        const x = 0.6 + (i % 5) * (bw + 0.15); const y = top + Math.floor(i / 5) * 0.62;
        d.rect(s, x, y, bw, 0.52, { fill: 'FBEDEB', line: VB, lw: 1.25, radius: 0.12, rotate: [-2, 1, 2, -1, 1][i % 5] });
        d.t(s, `//**${v}**//`, x, y, bw, 0.52, { size: 17, color: VB, align: 'center', valign: 'middle', rotate: [-2, 1, 2, -1, 1][i % 5] });
      });
      by = top + 1.4;
    }
    const W = (12.13 - 0.3) / 2; const bh = 6.85 - by;
    [[1, 'scissors', 'SÉPARABLE · ge- au milieu', PA, 'FDF1E6'], [0, 'locked', 'INSÉPARABLE · pas de ge-', 'tx2', 'E6EBF2']].forEach(([sep, ic, lab, c, bg], j) => {
      const x = 0.6 + j * (W + 0.3);
      d.rect(s, x, by, W, bh, { fill: bg, line: c, lw: 2, dash: mode === 'q' ? 'dash' : undefined, radius: 0.12 });
      d.ill(s, ic, x + 0.15, by + 0.1, 0.6, 0.6);
      d.t(s, `**${lab}**`, x + 0.85, by + 0.1, W - 1, 0.6, { size: 16, color: c, valign: 'middle' });
      if (mode === 'a') {
        ex3.filter((e) => e[1] === sep).forEach(([v, , pp], i) => {
          const y = by + 0.85 + i * ((bh - 0.95) / 5);
          d.t(s, `//**${v}**//  →  //${sep ? pp.replace('ge', '**ge**') : pp}//`, x + 0.35, y, W - 0.5, (bh - 0.95) / 5, { size: 18, valign: 'middle', color: 'tx1' });
        });
      }
    });
  });

  // ---------------------------------------------------------------- 35 ex4 détective
  d.ex({ g: 35, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Karim écrit à son équipe. Trouvez les 5 erreurs (forme ou sens).' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Karim Benali · Aan: team verkoop · Onderwerp: stand van zaken', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Beste collega’s,//', '//De vergadering van vrijdag gaat niet door. Ik heb de offerte gisteren {{gevertaald}}++ vertaald++. Ik stuur jullie de tekst {{door morgen}}++ morgen door++, met de vraag om de cijfers nog eens {{te nakijken}}++ na te kijken++. Lotte heeft de taak van Sofie {{overgenomt}}++ overgenomen++. Goed nieuws: het aantal klanten {{neemt af}}++ neemt toe++! We overleggen maandag verder.//', '//Groeten//', '//Karim//'];
    d.t(s, txt, 0.95, top + 0.65, 8.3, h - 0.8, { size: 18, gap: 6, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //gaat niet door// (n’a pas lieu) et //We overleggen// (inséparable) sont corrects. N° 5 : erreur de **sens** (//goed nieuws!//).', 9.9, top + 3.05, 2.83, 2.2, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 36 ex5 interrupteurs
  const ex5 = [['light-bulb', 0, 'Zet de computer aan.', 'light-bulb', 75, 'Zet de computer uit.'], ['bus', 0, 'We stappen in.', 'person-walking', 0, 'We stappen uit.'], ['chart-increasing', 0, 'De prijzen nemen toe.', 'chart-decreasing', 0, 'De prijzen nemen af.'], ['disappointed-face', 0, 'Het examen viel tegen.', 'grinning-face', 0, 'Het examen viel mee.'],
    ['hamburger', 0, 'Ik ben 3 kilo aangekomen.', 'green-salad', 0, 'Ik ben 3 kilo afgevallen.'], ['laptop', 0, 'Ik log in.', 'laptop', 75, 'Ik log uit.'], ['wind-face', 0, 'Adem diep in.', 'face-exhaling', 0, 'Adem diep uit.'], ['door', 0, 'Doe de deur open.', 'locked', 0, 'Doe de deur dicht.']];
  d.ex({ g: 36, title: 'Exercice 5 — Les interrupteurs', stars: '★', instr: 'Regardez la deuxième image : écrivez la phrase contraire.' }, (s, mode, top) => {
    const cw = (12.13 - 3 * 0.2) / 4; const ch = (6.45 - top - 0.2) / 2;
    ex5.forEach(([ia, ta, q, ib, tb, a], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.2); const y = top + Math.floor(i / 4) * (ch + 0.2);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.num(s, i + 1, x + 0.1, y + 0.1, 0.36, 'accent5', 12);
      const z = 0.72;
      d.ill(s, ia, x + cw / 2 - z - 0.3, y + 0.12, z, z, { tr: ta });
      d.t(s, '⇄', x + cw / 2 - 0.3, y + 0.12, 0.6, z, { size: 22, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.ill(s, ib, x + cw / 2 + 0.3, y + 0.12, z, z, { tr: tb });
      d.t(s, `//${q}//`, x + 0.12, y + 0.9, cw - 0.24, 0.52, { size: 14, align: 'center', valign: 'middle' });
      d.rect(s, x + 0.12, y + ch - 0.58, cw - 0.24, 0.48, { fill: mode === 'a' ? 'EDF6F0' : 'FFFFFF', line: mode === 'a' ? 'accent3' : BORDER, lw: 1, dash: mode === 'a' ? undefined : 'dash', radius: 0.08 });
      if (mode === 'a') d.t(s, `//**${a}**//`, x + 0.15, y + ch - 0.58, cw - 0.3, 0.48, { size: 13, color: 'accent3', align: 'center', valign: 'middle' });
    });
    if (mode === 'a') d.t(s, 'N° 1 : en Belgique, aussi //af// · n° 8 : en Belgique, aussi //toe//', 0.6, 6.48, 12.13, 0.36, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 37 ex6 roulette
  {
    const s = d.page({ g: 37, tag: 'JIJ NU !', title: 'Exercice 6 — La roulette des particules', stars: '★★' });
    const P = ['AAN', 'AF', 'OP', 'UIT', 'IN', 'BIJ', 'TOE', 'NA', 'DOOR', 'OVER', 'MEE', 'VOOR'];
    const cx = 2.95; const cy = 4.15; const R = 2.25;
    P.forEach((k, i) => {
      const a1 = i * 30 - 90; const a2 = a1 + 30;
      s.addShape(d.S.PIE, { x: cx - R, y: cy - R, w: 2 * R, h: 2 * R, angleRange: [((a1 % 360) + 360) % 360, ((a2 % 360) + 360) % 360], fill: { color: hexOf(C[k]) }, line: { color: 'FFFFFF', width: 2 } });
      const am = ((a1 + 15) * Math.PI) / 180;
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

  // ---------------------------------------------------------------- 38 ex7 réunion
  d.roleplay({
    g: 38, title: 'Exercice 7 — La réunion d’équipe',
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

  // ---------------------------------------------------------------- 39 ticket
  d.ticket({
    g: 39,
    q: ['Dessinez l’image de //door// et de //over//.', 'Le contraire de //De prijzen nemen toe// ?', 'Passé composé : //Ik vertaal de tekst. · Ik kijk de tekst na.//'],
    self: ['Comprendre', 'Deviner', 'Utiliser'],
    teaser: { icon: 'FaBook', text: '**Défi de la semaine** : notez 10 verbes à particule rencontrés (journal, travail, séries), avec leur phrase.' },
  });
}

module.exports = { meta, build, PARTS };
