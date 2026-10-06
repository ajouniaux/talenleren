// Gisteren, vandaag, morgen — Les temps du néerlandais sur la ligne du temps (complément A2–B1)
const { BORDER, plain, HEX, PURPLE } = require('../lib');

const meta = {
  n: 'T', slug: 'Tijden', title: 'Gisteren, vandaag, morgen — Les temps', short: 'Les temps',
  template: 'tijden_ligne_du_temps.md', file: 'Tijden_Les_temps_sur_la_ligne_du_temps.pptx',
  docTitle: 'Gisteren, vandaag, morgen — Les temps du néerlandais sur la ligne du temps',
  foot: 'Néerlandais · A2–B1 · Les temps',
};

// comme au M32 : présent bleu · passé framboise · futur vert ; en plus : avant le passé framboise foncé,
// futur antérieur vert foncé, conditionnel violet (l'imaginaire), conditionnel passé violet foncé · verbe rouge · marqueurs orange
const PR = 'accent2'; const PA = 'accent4'; const PQ = '7A1748'; const FU = 'accent3'; const FA = '1B5734';
const CO = 'purple'; const CP = '45306A'; const VB = 'accent6'; const MK = 'accent1';
const INK = '17375E';
const hexOf = (c) => (c === 'purple' ? PURPLE : c === 'tx2' ? INK : HEX[c] || c);
const TINT = { accent2: 'EAF2FB', accent4: 'FBEAF2', '7A1748': 'F5E6EE', accent3: 'E8F4EC', '1B5734': 'E3EFE7', purple: 'F1ECF7', '45306A': 'ECE8F3' };

// k, nom, code, français, couleur, werken, komen, illustration
const T = [
  ['ott', 'presens', 'o.t.t.', 'présent', PR, 'ik werk', 'ik kom', 'round-pushpin'],
  ['vtt', 'perfectum', 'v.t.t.', 'passé composé', PA, 'ik heb gewerkt', 'ik ben gekomen', 'camera-with-flash'],
  ['ovt', 'imperfectum', 'o.v.t.', 'imparfait', PA, 'ik werkte', 'ik kwam', 'clapper-board'],
  ['vvt', 'plusquamperfectum', 'v.v.t.', 'plus-que-parfait', PQ, 'ik had gewerkt', 'ik was gekomen', 'hourglass-done'],
  ['ottt', 'futurum', 'o.t.t.t.', 'futur', FU, 'ik zal werken', 'ik zal komen', 'crystal-ball'],
  ['vttt', 'futurum exactum', 'v.t.t.t.', 'futur antérieur', FA, 'ik zal gewerkt hebben', 'ik zal gekomen zijn', 'chequered-flag'],
  ['ovtt', 'conditionalis', 'o.v.t.t.', 'conditionnel', CO, 'ik zou werken', 'ik zou komen', 'thought-balloon'],
  ['vvtt', 'conditionalis perfectum', 'v.v.t.t.', 'conditionnel passé', CP, 'ik zou gewerkt hebben', 'ik zou gekomen zijn', 'pensive-face'],
];
const TT = Object.fromEntries(T.map((r) => [r[0], r]));

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const rich = (s, segs, x, y, w, h, o = {}) => s.addText(segs.map(([text, so]) => ({ text, options: so })), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || 'tx1', align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true,
  });
  // phrase : <verbe> en rouge · {marqueur} en orange · [mot] dans la couleur c
  const pc = (str, size, c = 'tx2', o = {}) => str.split(/(\[[^\]]+\]|<[^>]+>|\{[^}]+\})/).filter(Boolean).map((t) => {
    if (t.startsWith('<')) return [t.slice(1, -1), { bold: true, italic: !o.roman, color: hexOf(VB), fontSize: size }];
    if (t.startsWith('{')) return [t.slice(1, -1), { bold: true, italic: !o.roman, color: hexOf(MK), fontSize: size }];
    if (t.startsWith('[')) return [t.slice(1, -1), { bold: true, italic: !o.roman, color: hexOf(c), fontSize: size }];
    return [t, { italic: !o.roman, fontSize: size }];
  });
  // ligne du temps : zones [[x1, x2, couleur, étiquette]], nu = x du maintenant
  const tl = (s, x1, x2, y, o = {}) => {
    (o.zones || []).forEach(([a, b, c, lab]) => {
      d.rect(s, a, y - 0.1, b - a, 0.2, { fill: c, line: null, radius: 0 });
      if (lab) d.t(s, lab, a, y + (o.labUp ? -0.48 : 0.16), b - a, 0.32, { size: o.ls || 12, bold: true, italic: true, color: c, align: 'center', valign: 'middle' });
    });
    d.line(s, x1, y, x2, y, { color: INK, lw: o.lw || 2.5 });
    if (o.nu) {
      d.rect(s, o.nu - 0.05, y - 0.34, 0.1, 0.68, { fill: VB, line: null, radius: 0 });
      if (o.nuLab !== false) d.t(s, '**NU**', o.nu - 0.5, y - 0.74, 1.0, 0.36, { size: 15, color: VB, align: 'center', valign: 'middle' });
    }
  };
  // mini ligne du temps (cartes)
  const mini = (s, x, y, w, kind, c) => {
    const ny = y + 0.25; const nu = x + w * 0.58;
    d.line(s, x, ny, x + w, ny, { color: '8A96A8', lw: 1.5 });
    d.rect(s, nu - 0.025, ny - 0.18, 0.05, 0.36, { fill: VB, line: null, radius: 0 });
    const dot = (cx, cc = c) => d.oval(s, cx - 0.09, ny - 0.09, 0.18, 0.18, { fill: cc });
    const bar = (a, b, cc = c) => d.rect(s, a, ny - 0.07, b - a, 0.14, { fill: cc, line: null, radius: 0.04 });
    if (kind === 'nu') dot(nu);
    if (kind === 'rep') [0.1, 0.25, 0.4, 0.75, 0.9].forEach((f) => dot(x + w * f));
    if (kind === 'since') bar(x + w * 0.12, nu + 0.02);
    if (kind === 'fut') dot(x + w * 0.85);
    if (kind === 'past') dot(x + w * 0.28);
    if (kind === 'pastbar') bar(x + w * 0.08, x + w * 0.45);
    if (kind === 'before') dot(nu - 0.22);
    if (kind === 'after') dot(nu + 0.22);
  };
  // bloc de temps coloré : nom + exemple
  const tchip = (s, k, x, y, w, h, o = {}) => {
    const [, nl, code, , c, ex] = TT[k];
    d.rect(s, x, y, w, h, { fill: c, line: null, radius: 0.12, shadow: o.shadow });
    d.t(s, [`**${nl}**`, `//${o.ex || ex}//`], x + 0.06, y, w - 0.12, h, { size: o.size || 13, color: 'bg1', align: 'center', valign: 'middle', gap: 0 });
    if (o.code) d.t(s, code, x, y - 0.3, w, 0.28, { size: 11, bold: true, color: c, align: 'center' });
  };
  // bandes de mots
  const ST = {
    n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
    v: { fill: VB, line: null, color: 'bg1', bold: true },
    i: { fill: 'FBEDEB', line: VB, lw: 1.75, color: VB, bold: true },
    a: { fill: 'tx2', line: null, color: 'bg1', bold: true },
    r: { fill: PR, line: null, color: 'bg1', bold: true },
    p: { fill: 'FBEAF2', line: PA, lw: 1.75, color: PA, bold: true },
    t: { fill: MK, line: null, color: 'bg1', bold: true },
    o: { fill: null, line: null, color: 'accent5', bold: true },
  };
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.66; const gap = o.gap ?? 0.08;
    let cx = x;
    parts.forEach(([t, ty]) => {
      const st = ST[ty || 'n'];
      const w = ty === 'o' ? 0.2 + plain(t).length * size * 0.011 : wOf(t, size) * (st.bold ? 1.12 : 1) + (st.bold ? 0.08 : 0);
      if (st.fill || st.line) d.rect(s, cx, y, w, h, { fill: st.fill || 'FFFFFF', line: st.line, lw: st.lw, radius: 0.1 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      cx += w + gap;
    });
    return cx - gap;
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'COMPLÉMENT · A2–B1', title: 'Gisteren,\nvandaag,\nmorgen', sub: 'Les temps du néerlandais sur la ligne du temps', line: 'huit temps · trois zones · un nuage',
    visual: (s) => {
      d.rect(s, 6.55, 1.2, 6.5, 4.2, { fill: 'FFFFFF', line: null, radius: 0.16 });
      s.addShape(d.S.CLOUD, { x: 10.05, y: 1.32, w: 2.85, h: 1.15, fill: { color: 'F1ECF7' }, line: { color: PURPLE, width: 1.5 } });
      d.t(s, ['**als…**', '//ik zou werken//'], 10.25, 1.42, 2.45, 0.95, { size: 13, color: CO, align: 'center', valign: 'middle', gap: 0 });
      const y = 3.55;
      d.rect(s, 6.85, y - 0.1, 2.45, 0.2, { fill: PA, line: null, radius: 0 });
      d.rect(s, 9.65, y - 0.1, 3.0, 0.2, { fill: FU, line: null, radius: 0 });
      d.line(s, 6.75, y, 12.85, y, { color: INK, lw: 2.5 });
      d.rect(s, 9.42, y - 0.36, 0.1, 0.72, { fill: VB, line: null, radius: 0 });
      d.t(s, ['//ik werkte//', '//ik heb gewerkt//'], 6.8, 2.55, 2.5, 0.75, { size: 13, bold: true, color: PA, align: 'center', valign: 'middle', gap: 0 });
      d.t(s, '//ik werk//', 8.95, 2.75, 1.05, 0.4, { size: 13, bold: true, color: PR, align: 'center', valign: 'middle' });
      d.t(s, ['//ik ga werken//', '//ik zal werken//'], 10.1, 2.55, 2.6, 0.75, { size: 13, bold: true, color: FU, align: 'center', valign: 'middle', gap: 0 });
      d.ill(s, 'camera-with-flash', 7.15, 3.85, 0.7, 0.7);
      d.ill(s, 'clapper-board', 8.15, 3.85, 0.7, 0.7);
      d.ill(s, 'round-pushpin', 9.12, 3.85, 0.7, 0.7);
      d.ill(s, 'crystal-ball', 11.0, 3.85, 0.7, 0.7);
      [['GISTEREN', PA, 6.85, 2.45], ['VANDAAG', PR, 8.87, 1.2], ['MORGEN', FU, 10.35, 1.95]].forEach(([t, c, x, w]) => {
        d.rect(s, x, 4.72, w, 0.46, { fill: c, line: null, radius: 0.1 });
        d.t(s, `**${t}**`, x, 4.72, w, 0.46, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaMapMarkerAlt', h: 'Situer', t: 'Je place les huit temps sur la ligne du temps.', color: 'accent2' },
      { icon: 'FaCamera', h: 'Choisir', t: 'Je choisis le bon temps : photo ou film, gaan ou zullen…', color: 'accent4' },
      { icon: 'FaLayerGroup', h: 'Combiner', t: 'Je combine les temps dans un récit et une hypothèse.', color: 'purple' },
    ],
    band: 'Trois zones, huit temps, trois briques : le système est plus simple qu’il n’y paraît.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Où est l’action ? Placez les phrases' });
    const y = 2.75;
    s.addShape(d.S.CLOUD, { x: 9.9, y: 1.5, w: 2.8, h: 0.85, fill: { color: 'F1ECF7' }, line: { color: PURPLE, width: 1.25 } });
    d.t(s, '**imaginaire**', 9.9, 1.5, 2.8, 0.85, { size: 14, color: CO, align: 'center', valign: 'middle' });
    tl(s, 0.8, 12.75, y, { nu: 7.6, zones: [[0.9, 2.9, PQ, 'avant le passé'], [3.0, 7.4, PA, 'passé'], [7.8, 12.4, FU, 'futur']] });
    const R = ['Ik <werk> bij Peeters & Co.', '{Gisteren} <heb> ik tot 19 uur <gewerkt>.', '{Vroeger} <werkte> ik in Namen.', '{Toen} ik <aankwam>, <was> de vergadering {al} <begonnen>.',
      '{Morgen} <ga> ik naar Gent.', '{Tegen vrijdag} <zal> ik het rapport <geschreven hebben>.', '{Als} ik tijd <had>, <zou> ik meer <sporten>.', 'Ik <heb> {net} <gegeten>.'];
    const cw = (12.13 - 0.2) / 2; const rh = 0.68;
    R.forEach((t, i) => {
      const x = 0.6 + Math.floor(i / 4) * (cw + 0.2); const yy = 3.35 + (i % 4) * (rh + 0.08);
      d.rect(s, x, yy, cw, rh, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1 });
      d.oval(s, x + 0.12, yy + 0.13, 0.42, 0.42, { fill: 'tx2' });
      d.t(s, `**${'abcdefgh'[i]}**`, x + 0.12, yy + 0.13, 0.42, 0.42, { size: 14, color: 'bg1', align: 'center', valign: 'middle' });
      rich(s, pc(t, 16), x + 0.68, yy, cw - 0.8, rh);
    });
    band(s, 'Par deux : placez chaque phrase sur la ligne. Regardez le **verbe rouge** et le **marqueur orange**.', 6.4, 0.5, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 4 la carte
  {
    const s = d.page({ g: 4, tag: 'LA CARTE', title: 'La ligne du temps : huit temps, trois zones' });
    const y = 4.15; const nu = 7.4;
    d.t(s, ['De gauche à droite : **avant le passé → passé → NU → futur**.', 'Le **nuage** au-dessus de la ligne = l’imaginaire (//si…//).'], 0.6, 1.55, 7.0, 1.05, { size: 15, gap: 4, color: 'tx2', valign: 'middle' });
    s.addShape(d.S.CLOUD, { x: 7.85, y: 1.45, w: 4.9, h: 1.3, fill: { color: 'F1ECF7' }, line: { color: PURPLE, width: 1.5 } });
    tchip(s, 'ovtt', 8.45, 1.78, 1.85, 0.68, { size: 11 });
    tchip(s, 'vvtt', 10.38, 1.78, 2.0, 0.68, { size: 10, ex: 'ik zou gewerkt hebben' });
    tl(s, 0.7, 12.75, y, { nu, nuLab: false, zones: [[0.75, 2.75, PQ], [2.85, 7.2, PA], [7.6, 10.3, FU], [10.4, 12.5, FA]] });
    const U = [['vvt', 1.75, true], ['vtt', 5.7, true], ['ottt', 8.95, true], ['ovt', 3.7, false], ['ott', nu, false], ['vttt', 11.45, false]];
    U.forEach(([k, cx, up]) => {
      const c = TT[k][4]; const cy = up ? 2.95 : 4.6;
      d.line(s, cx, up ? cy + 0.92 : y + 0.12, cx, up ? y - 0.12 : cy, { color: hexOf(c), lw: 1.5, arrow: false });
      if (k === 'ovt') d.rect(s, 2.95, y - 0.13, 1.6, 0.26, { fill: c, line: 'FFFFFF', lw: 1, radius: 0.06 });
      else d.oval(s, cx - 0.14, y - 0.14, 0.28, 0.28, { fill: c, line: 'FFFFFF', lw: 1 });
      tchip(s, k, cx - 1.12, cy, 2.24, 0.92, { size: 13, shadow: true });
    });
    d.t(s, '**NU**', nu - 0.5, 5.55, 1.0, 0.35, { size: 15, color: VB, align: 'center' });
    band(s, '**voltooid** (v.) = l’action est **terminée** à ce moment · **onvoltooid** (o.) = elle est en cours ou à venir', 6.05, 0.62, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 5 le schéma des huit temps
  {
    const s = d.page({ g: 5, tag: 'LE SCHÉMA', title: 'Huit temps = deux lignes × quatre cases' });
    const x0 = 2.8; const cw = 2.41; const X = (j) => x0 + j * (cw + 0.1);
    ['AVANT · terminé', 'AU MOMENT', 'APRÈS', 'APRÈS · terminé'].forEach((h, j) => {
      d.rect(s, X(j), 1.55, cw, 0.5, { fill: 'tx2', line: null, radius: 0.1 });
      d.t(s, `**${h}**`, X(j), 1.55, cw, 0.5, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
    });
    const rows = [['NU', 'point de vue : maintenant', 'round-pushpin', PR, ['vtt', 'ott', 'ottt', 'vttt'], 2.15], ['TOEN', 'point de vue : un moment passé', 'hourglass-done', PA, ['vvt', 'ovt', 'ovtt', 'vvtt'], 4.3]];
    rows.forEach(([lab, sub, ic, c, ks, y]) => {
      d.rect(s, 0.6, y, 2.05, 1.5, { fill: TINT[c], line: c, lw: 1.5, radius: 0.12 });
      d.ill(s, ic, 0.72, y + 0.12, 0.6, 0.6);
      d.t(s, `**${lab}**`, 1.35, y + 0.12, 1.25, 0.6, { size: 20, color: c, valign: 'middle' });
      d.t(s, sub, 0.7, y + 0.78, 1.9, 0.65, { size: 12, italic: true, color: 'tx2', valign: 'middle' });
      ks.forEach((k, j) => {
        const [, nl, code, fr, kc, ex] = TT[k];
        d.rect(s, X(j), y, cw, 1.5, { fill: TINT[kc] || 'FFFFFF', line: kc, lw: 1.75, radius: 0.12 });
        d.t(s, `**${code}**`, X(j) + 0.1, y + 0.05, cw - 0.2, 0.3, { size: 11, color: kc });
        d.t(s, `**${nl}**`, X(j) + 0.1, y + 0.3, cw - 0.2, 0.36, { size: nl.length > 16 ? 12 : 14, color: kc, valign: 'middle' });
        d.t(s, `//${ex}//`, X(j) + 0.1, y + 0.68, cw - 0.2, 0.42, { size: ex.length > 18 ? 13 : 15, bold: true, valign: 'middle' });
        d.t(s, fr, X(j) + 0.1, y + 1.1, cw - 0.2, 0.32, { size: 12, italic: true, color: 'accent5', valign: 'middle' });
      });
    });
    [0, 1, 2, 3].forEach((j) => d.line(s, X(j) + cw / 2, 3.72, X(j) + cw / 2, 4.22, { color: 'accent5', lw: 2 }));
    d.t(s, 'une ligne plus bas', 0.6, 3.72, 2.05, 0.5, { size: 12, italic: true, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    band(s, 'Une ligne plus bas = l’auxiliaire passe au passé : //**heb → had · ben → was · zal → zou · werk → werkte**//', 6.0, 0.7, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 6 les formes
  {
    const s = d.page({ g: 6, tag: 'LES FORMES', title: 'Les huit temps de werken et komen' });
    const C = [['temps', 2.85], ['français', 2.15], ['formule', 3.0], ['werken (hebben)', 2.0], ['komen (zijn)', 2.13]];
    let x = 0.6; const CX = C.map(([, w]) => { const r = x; x += w; return r; });
    C.forEach(([h, w], j) => {
      d.rect(s, CX[j], 1.55, w - 0.05, 0.42, { fill: 'tx2', line: null, radius: 0.06 });
      d.t(s, `**${h}**`, CX[j], 1.55, w - 0.05, 0.42, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
    });
    const F = ['radical (+ t)', '//hebben / zijn// + participe', 'radical + //te / de//', '//had / was// + participe', '//zal// + infinitif', '//zal// + participe + //hebben / zijn//', '//zou// + infinitif', '//zou// + participe + //hebben / zijn//'];
    const W = ['ik werk', 'ik **heb** gewerkt', 'ik werkte', 'ik **had** gewerkt', 'ik **zal** werken', 'ik **zal** gewerkt **hebben**', 'ik **zou** werken', 'ik **zou** gewerkt **hebben**'];
    const K = ['ik kom', 'ik **ben** gekomen', 'ik kwam', 'ik **was** gekomen', 'ik **zal** komen', 'ik **zal** gekomen **zijn**', 'ik **zou** komen', 'ik **zou** gekomen **zijn**'];
    const rh = 0.5;
    T.forEach(([, nl, code, fr, c], i) => {
      const y = 2.03 + i * (rh + 0.04);
      d.rect(s, 0.6, y, 12.08, rh, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.06 });
      d.rect(s, 0.6, y, 0.12, rh, { fill: c, line: null, radius: 0 });
      d.t(s, [`**${nl}**`, code], 0.82, y, CX[1] - 0.9, rh, { size: nl.length > 16 ? 11.5 : 13, color: c, valign: 'middle', gap: 0 });
      d.t(s, fr, CX[1] + 0.05, y, 2.05, rh, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, F[i], CX[2] + 0.05, y, 2.9, rh, { size: 12.5, color: 'tx2', valign: 'middle' });
      d.t(s, `//${W[i]}//`, CX[3] + 0.05, y, 1.95, rh, { size: 13, valign: 'middle' });
      d.t(s, `//${K[i]}//`, CX[4] + 0.05, y, 2.05, rh, { size: 13, valign: 'middle' });
    });
    d.t(s, 'Forme courte, très fréquente : //ik zou gewerkt hebben// → //ik **had** gewerkt// · //ik zou gekomen zijn// → //ik **was** gekomen//', 0.6, 6.4, 12.13, 0.4, { size: 14, color: 'tx2', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 7 rappel : trois briques
  {
    const s = d.page({ g: 7, tag: 'RAPPEL', title: 'Trois briques pour construire tous les temps' });
    const B = [['LE RADICAL', PR, 'werk- · kom-', 'presens · imperfectum (+ //te / de//)'], ['LE PARTICIPE', PA, 'ge-werk-t · ge-kom-en', 'les 4 temps //voltooid// (terminés)'], ['LES AUXILIAIRES', 'tx2', 'heb / had · ben / was · zal / zou', 'le temps et le point de vue']];
    const bw = (12.13 - 0.4) / 3;
    B.forEach(([h, c, ex, use], i) => {
      const x = 0.6 + i * (bw + 0.2);
      [0.25, 0.25 + (bw - 0.5) / 2, bw - 0.25].forEach((f) => d.oval(s, x + f - 0.22, 1.6, 0.44, 0.24, { fill: c }));
      d.rect(s, x, 1.72, bw, 1.75, { fill: c, line: null, radius: 0.08 });
      d.t(s, `**${h}**`, x + 0.15, 1.8, bw - 0.3, 0.45, { size: 17, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `//**${ex}**//`, x + 0.15, 2.28, bw - 0.3, 0.5, { size: 17, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, use, x + 0.15, 2.8, bw - 0.3, 0.55, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
    });
    const R = [[[['had', 'a'], ['+', 'o'], ['gewerkt', 'p']], 'plusquamperfectum', PQ], [[['zal', 'a'], ['+', 'o'], ['gewerkt', 'p'], ['+', 'o'], ['hebben', 'a']], 'futurum exactum', FA],
      [[['zou', 'a'], ['+', 'o'], ['werken', 'r']], 'conditionalis', CO], [[['werk', 'r'], ['+', 'o'], ['te', 't']], 'imperfectum', PA]];
    R.forEach(([parts, name, c], i) => {
      const y = 3.75 + i * 0.6;
      const e = strip(s, 1.2, y, parts, { size: 17, h: 0.5, gap: 0.06 });
      d.t(s, `= **${name}**`, e + 0.2, y, 4, 0.5, { size: 17, color: c, valign: 'middle' });
    });
    d.ill(s, 'building-construction', 10.9, 3.75, 1.6, 1.6);
    band(s, 'Le passé de l’auxiliaire (//had, was, zou//) fait reculer tout le temps d’un cran.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 8 le présent
  d.section('Le présent');
  {
    const s = d.page({ g: 8, tag: 'LE PRÉSENT', tagColor: PR, title: 'Le presens : bien plus que « maintenant »' });
    const C = [['round-pushpin', 'MAINTENANT', 'nu', 'Ik <werk> {nu} aan een rapport.', 'je travaille (en ce moment)'], ['repeat-button', 'L’HABITUDE', 'rep', 'Ik <werk> {elke maandag} thuis.', 'chaque lundi'],
      ['hourglass-not-done', 'DEPUIS… ET ENCORE', 'since', 'Ik <werk> hier {al} drie jaar. · {sinds} 2021', 'depuis trois ans · depuis 2021'], ['spiral-calendar', 'FUTUR + MARQUEUR', 'fut', '{Morgen} <werk> ik thuis.', 'demain, je travaille à la maison']];
    const cw = (12.13 - 0.2) / 2; const ch = 2.08;
    C.forEach(([ic, h, kind, ex, fr], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.2); const y = 1.6 + Math.floor(i / 2) * (ch + 0.15);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.rect(s, x, y, 0.1, ch, { fill: PR, line: null, radius: 0 });
      d.ill(s, ic, x + 0.25, y + 0.15, 0.65, 0.65);
      d.t(s, `**${h}**`, x + 1.0, y + 0.15, 2.8, 0.65, { size: 15, color: PR, valign: 'middle' });
      mini(s, x + cw - 2.12, y + 0.25, 1.95, kind, kind === 'fut' ? FU : PR);
      rich(s, pc(ex, 18), x + 0.3, y + 0.9, cw - 0.5, 0.65);
      d.t(s, `« ${fr} »`, x + 0.3, y + 1.52, cw - 0.5, 0.42, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
    });
    band(s, '⚠ « J’habite ici depuis 3 ans » = //Ik **woon** hier al 3 jaar.//  —  //Ik heb hier 3 jaar gewoond// = je n’y habite plus !', 6.1, 0.7, VB, 16);
  }

  // ---------------------------------------------------------------- 9 le zoom autour de NU
  {
    const s = d.page({ g: 9, tag: 'LE PRÉSENT', tagColor: PR, title: 'Zoom sur NU : net, aan het, op het punt, gaan' });
    const y = 3.05; const nu = 6.75;
    d.ill(s, 'magnifying-glass-tilted-left', 0.6, 1.5, 0.85, 0.85);
    d.t(s, 'Quatre formules très fréquentes, juste avant, pendant et juste après le moment présent.', 1.6, 1.5, 11.1, 0.85, { size: 16, color: 'tx2', valign: 'middle' });
    tl(s, 0.8, 12.75, y, { nu, nuLab: false, zones: [[3.6, 6.55, PA], [6.95, 11.5, FU]] });
    d.rect(s, 6.2, y - 0.16, 1.1, 0.32, { fill: PR, line: 'FFFFFF', lw: 1, radius: 0.08 });
    d.rect(s, nu - 0.05, y - 0.4, 0.1, 0.8, { fill: VB, line: null, radius: 0 });
    d.t(s, '**NU**', nu - 0.5, y - 0.82, 1.0, 0.36, { size: 15, color: VB, align: 'center' });
    const P = [[5.45, PA, 'juste avant'], [nu, PR, 'en ce moment'], [8.1, FU, 'juste après'], [10.0, FU, 'bientôt']];
    const C = [['net + perfectum', '« venir de »', 'Ik <heb> {net} <gegeten>.'], ['zijn aan het + inf.', '« être en train de »', 'Ik <ben> {aan het} <koken>. · Ik <zit> te <lezen>.'], ['op het punt staan te', '« être sur le point de »', 'Ik <sta> {op het punt} te <vertrekken>.'], ['gaan + infinitif', '« aller + infinitif »', 'Ik <ga> {zo meteen} <eten>.']];
    const cw = (12.13 - 3 * 0.18) / 4;
    C.forEach(([h, fr, ex], i) => {
      const [px, c, lab] = P[i]; const x = 0.6 + i * (cw + 0.18); const cy = 3.85;
      if (i !== 1) d.oval(s, px - 0.13, y - 0.13, 0.26, 0.26, { fill: c, line: 'FFFFFF', lw: 1 });
      d.t(s, lab, px - 0.68, y + 0.42, 1.36, 0.28, { size: 11.5, italic: true, bold: true, color: c, align: 'center' });
      d.line(s, px, y + 0.72, x + cw / 2, cy - 0.02, { color: hexOf(c), lw: 1.25, arrow: false, dash: 'dash' });
      d.rect(s, x, cy, cw, 2.1, { fill: 'FFFFFF', line: c, lw: 1.75, radius: 0.12, shadow: true });
      d.rect(s, x, cy, cw, 0.5, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${h}**`, x, cy, cw, 0.5, { size: 14, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, fr, x + 0.1, cy + 0.55, cw - 0.2, 0.35, { size: 13, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      rich(s, pc(ex, 16), x + 0.15, cy + 0.95, cw - 0.3, 1.05, { align: 'center' });
    });
    band(s, '⚠ « Je viens de manger » : ✗ //ik kom te eten//  ✓ //Ik **heb net gegeten**.//', 6.15, 0.62, VB, 16);
  }

  // ---------------------------------------------------------------- 10 photo ou film
  d.section('Le passé');
  {
    const s = d.page({ g: 10, tag: 'LE PASSÉ', tagColor: PA, title: 'Perfectum ou imperfectum ? La photo ou le film' });
    const C = [['camera-with-flash', 'PERFECTUM', 'la photo', 'past', 'le fait · le résultat · le bilan', ['Ik <heb> de trein <gemist>!', 'Wat <heb> je {gisteren} <gedaan>?', 'Ik <ben> {al twee keer} in Gent <geweest>.']],
      ['clapper-board', 'IMPERFECTUM', 'le film', 'pastbar', 'le décor · l’habitude · le récit', ['Het <regende> en het <was> koud.', '{Vroeger} <nam> ik elke dag de trein.', 'Ik <stond> op, <dronk> een koffie en <vertrok>.']]];
    const cw = (12.13 - 0.25) / 2;
    C.forEach(([ic, h, sub, kind, use, L], i) => {
      const x = 0.6 + i * (cw + 0.25);
      d.rect(s, x, 1.6, cw, 4.2, { fill: 'FFFFFF', line: PA, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, cw, 1.05, { fill: TINT[PA], line: null, radius: 0.12 });
      d.ill(s, ic, x + 0.2, 1.68, 0.9, 0.9);
      d.t(s, [`**${h}**`, `//${sub}//`], x + 1.25, 1.65, 2.3, 0.95, { size: 18, color: PA, valign: 'middle', gap: 0 });
      mini(s, x + cw - 2.45, 1.85, 2.25, kind, PA);
      d.t(s, `**${use}**`, x + 0.25, 2.75, cw - 0.5, 0.45, { size: 15, color: 'tx2', valign: 'middle' });
      L.forEach((t, j) => rich(s, pc(t, 17), x + 0.3, 3.3 + j * 0.8, cw - 0.5, 0.7));
    });
    band(s, '//zijn, hebben// et les modaux préfèrent l’imperfectum : //Ik **was** ziek. Ik **moest** werken.// (= j’ai été, j’ai dû)', 5.95, 0.75, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 11 rappel ponctuel
  {
    const s = d.page({ g: 11, tag: 'RAPPEL M15 · M19', tagColor: PA, title: 'Rappel : t ou d, hebben ou zijn, les irréguliers' });
    const cw = 5.9;
    d.rect(s, 0.6, 1.6, cw, 2.05, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
    d.t(s, '**t ou d ? « SoFT KetCHuP »**', 0.8, 1.68, cw - 0.4, 0.45, { size: 16, color: PA, valign: 'middle' });
    d.t(s, ['radical en **s, f, t, k, ch, p** → //-te · ge…t//', '//werk → werk**te** · ge**werkt**//', 'sinon → //-de · ge…d//', '//woon → woon**de** · ge**woond**//'], 0.8, 2.15, cw - 0.4, 1.45, { size: 15, gap: 2, valign: 'top' });
    d.rect(s, 0.6, 3.8, cw, 2.2, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
    d.t(s, '**hebben ou zijn ?**', 0.8, 3.88, cw - 0.4, 0.45, { size: 16, color: PA, valign: 'middle' });
    d.t(s, ['**zijn** : un changement de lieu (vers un but) ou d’état', '//gaan, komen, vertrekken, worden, blijven, zijn, beginnen//', '**hebben** : tout le reste', '//werken, eten, bellen, hebben, doen…//'], 0.8, 4.35, cw - 0.4, 1.6, { size: 15, gap: 2, valign: 'top' });
    const I = [['zijn', 'was · waren', '(ben) geweest'], ['hebben', 'had · hadden', 'gehad'], ['gaan', 'ging · gingen', '(ben) gegaan'], ['komen', 'kwam · kwamen', '(ben) gekomen'], ['doen', 'deed · deden', 'gedaan'],
      ['zien', 'zag · zagen', 'gezien'], ['nemen', 'nam · namen', 'genomen'], ['krijgen', 'kreeg · kregen', 'gekregen'], ['schrijven', 'schreef · schreven', 'geschreven'], ['blijven', 'bleef · bleven', '(ben) gebleven']];
    const x = 6.75; const W = [1.6, 2.25, 2.13];
    ['infinitif', 'imperfectum', 'participe'].forEach((h, j) => {
      const xx = x + W.slice(0, j).reduce((a, b) => a + b, 0);
      d.rect(s, xx, 1.6, W[j] - 0.04, 0.42, { fill: PA, line: null, radius: 0.06 });
      d.t(s, `**${h}**`, xx, 1.6, W[j] - 0.04, 0.42, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
    });
    I.forEach((r, i) => {
      const y = 2.06 + i * 0.4;
      d.rect(s, x, y, 5.94, 0.38, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.04 });
      r.forEach((t, j) => d.t(s, j ? `//${t}//` : `**${t}**`, x + W.slice(0, j).reduce((a, b) => a + b, 0) + 0.1, y, W[j] - 0.15, 0.38, { size: 14, valign: 'middle' }));
    });
    d.t(s, 'Pluriel de l’imperfectum : //-ten / -den// (//werkten, woonden//) ou //-en// (//kwamen//).', 0.6, 6.15, 12.13, 0.5, { size: 15, color: 'tx2', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 12 une histoire, deux temps
  {
    const s = d.page({ g: 12, tag: 'LE PASSÉ', tagColor: PA, title: 'Une histoire, deux temps' });
    d.rect(s, 0.6, 1.6, 8.5, 4.3, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
    const L = [['camera-with-flash', '{Gisteren} <heb> ik iets geks <meegemaakt>.'], ['clapper-board', 'Het <was> acht uur en het <regende>.'], ['clapper-board', 'Ik <stond> op het perron en <wachtte> op de trein.'],
      ['clapper-board', '{Plots} <kwam> er een hond naar me toe.'], ['clapper-board', 'Hij <had> een sandwich in zijn bek: mijn sandwich!'], ['camera-with-flash', '{Uiteindelijk} <heb> ik de bus <genomen>… zonder ontbijt.']];
    L.forEach(([ic, t], i) => {
      const y = 1.75 + i * 0.68;
      d.ill(s, ic, 0.8, y + 0.06, 0.5, 0.5);
      rich(s, pc(t, 17), 1.45, y, 7.5, 0.62);
    });
    d.rect(s, 9.35, 1.6, 3.38, 4.3, { fill: TINT[PA], line: PA, lw: 1.5, radius: 0.12 });
    d.ill(s, 'dog', 9.65, 1.75, 1.2, 1.2);
    d.ill(s, 'sandwich', 11.15, 1.95, 0.95, 0.95);
    d.ill(s, 'camera-with-flash', 9.55, 3.2, 0.55, 0.55);
    d.t(s, ['**ouvrir, conclure**', 'perfectum'], 10.2, 3.12, 2.45, 0.72, { size: 14, color: PA, valign: 'middle', gap: 0 });
    d.ill(s, 'clapper-board', 9.55, 4.1, 0.55, 0.55);
    d.t(s, ['**décrire, raconter**', 'imperfectum'], 10.2, 4.02, 2.45, 0.72, { size: 14, color: PA, valign: 'middle', gap: 0 });
    d.t(s, '//plots// (BE) = //plotseling//', 9.5, 5.1, 3.1, 0.6, { size: 12, italic: true, color: 'accent5', valign: 'middle' });
    band(s, 'Un récit s’ouvre souvent au **perfectum**, continue à l’**imperfectum** et se conclut au **perfectum**.', 6.1, 0.65, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 13 plusquamperfectum
  {
    const s = d.page({ g: 13, tag: 'LE PASSÉ', tagColor: PQ, title: 'Le passé du passé : had / was + participe' });
    const y = 2.95;
    tl(s, 0.8, 12.75, y, { nu: 11.6, zones: [[1.2, 5.0, PQ], [5.4, 10.8, PA]] });
    d.oval(s, 3.0, y - 0.22, 0.44, 0.44, { fill: PQ, line: 'FFFFFF', lw: 1.5 });
    d.t(s, '**1**', 3.0, y - 0.22, 0.44, 0.44, { size: 14, color: 'bg1', align: 'center', valign: 'middle' });
    d.oval(s, 7.6, y - 0.22, 0.44, 0.44, { fill: PA, line: 'FFFFFF', lw: 1.5 });
    d.t(s, '**2**', 7.6, y - 0.22, 0.44, 0.44, { size: 14, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, ['de vergadering begint', '//**was begonnen**//'], 1.6, 1.55, 3.3, 0.85, { size: 15, color: PQ, align: 'center', valign: 'middle', gap: 0 });
    d.t(s, ['ik kom aan', '//**kwam aan**//'], 6.15, 1.55, 3.3, 0.85, { size: 15, color: PA, align: 'center', valign: 'middle', gap: 0 });
    d.curve(s, 7.65, y + 0.3, 3.4, y + 0.3, { color: hexOf(PQ), lw: 2, h: 0.45, dir: 1 });
    d.t(s, 'déjà fini avant', 4.4, y + 0.28, 2.3, 0.3, { size: 13, italic: true, bold: true, color: PQ, align: 'center' });
    const R = ['{Toen} ik <aankwam>, <was> de vergadering {al} <begonnen>.', '{Nadat} hij <gegeten had>, <ging> hij slapen.', 'Ik <had> het rapport {al} <gelezen> voor de vergadering.'];
    R.forEach((t, i) => {
      const yy = 3.95 + i * 0.62;
      d.rect(s, 0.6, yy, 7.9, 0.55, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.08 });
      rich(s, pc(t, 17), 0.8, yy, 7.6, 0.55);
    });
    d.rect(s, 8.75, 3.95, 3.98, 1.8, { fill: TINT[PQ], line: PQ, lw: 1.5, radius: 0.12 });
    d.t(s, ['**had / was + participe**', 'même choix //hebben / zijn// qu’au perfectum', '', 'FR : le plus-que-parfait (« j’avais lu ») → **1 = 1 !**'], 8.9, 4.0, 3.7, 1.7, { size: 14, color: 'tx1', valign: 'middle', gap: 2 });
    band(s, 'Deux actions passées : la plus ancienne au **plusquamperfectum**, l’autre au perfectum ou à l’imperfectum.', 6.1, 0.65, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 14 le futur
  d.section('Le futur');
  {
    const s = d.page({ g: 14, tag: 'LE FUTUR', tagColor: FU, title: 'Le futur : présent, gaan ou zullen ?' });
    const C = [['spiral-calendar', 'PRÉSENT + MARQUEUR', 'le planning', ['{Morgen} <werk> ik thuis.', '{Volgende week} <begint> de cursus.']], ['bullseye', 'GAAN + INFINITIF', 'l’intention, la prévision', ['Ik <ga> een nieuwe job <zoeken>.', 'Kijk, het <gaat> <regenen>.']],
      ['handshake', 'ZULLEN + INFINITIF', 'la promesse, la supposition, la proposition', ['Ik <zal> je morgen <bellen>.', 'Dat <zal> Tom wel <zijn>.', '<Zullen> we <gaan>?']]];
    const cw = (12.13 - 0.4) / 3;
    C.forEach(([ic, h, use, L], i) => {
      const x = 0.6 + i * (cw + 0.2);
      d.rect(s, x, 1.6, cw, 3.55, { fill: 'FFFFFF', line: FU, lw: 1.75, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.2, 1.72, 0.75, 0.75);
      d.t(s, `**${h}**`, x + 1.05, 1.72, cw - 1.15, 0.75, { size: 15, color: FU, valign: 'middle' });
      d.t(s, use, x + 0.2, 2.55, cw - 0.4, 0.5, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      L.forEach((t, j) => rich(s, pc(t, 16), x + 0.25, 3.1 + j * 0.65, cw - 0.4, 0.6));
    });
    tl(s, 1.9, 12.75, 5.65, { nu: 2.2, nuLab: false, zones: [[2.6, 12.3, FU]] });
    d.t(s, '**NU**', 0.75, 5.47, 1.1, 0.36, { size: 14, color: VB, align: 'right' });
    [['zo meteen', 3.4], ['straks', 5.0], ['morgen', 6.5], ['volgende week', 8.3], ['binnenkort', 10.2], ['later', 11.7]].forEach(([t, x]) => {
      d.t(s, `//**${t}**//`, x - 0.9, 5.82, 1.8, 0.32, { size: 13, color: MK, align: 'center' });
    });
    band(s, 'À l’oral, le plus fréquent : **présent + marqueur**. //zullen// n’est pas le « futur automatique ».', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 15 futur antérieur
  {
    const s = d.page({ g: 15, tag: 'LE FUTUR', tagColor: FA, title: 'Le futur antérieur : ce sera fait avant…' });
    const y = 2.75;
    tl(s, 0.8, 12.75, y, { nu: 2.0 });
    d.rect(s, 2.4, y - 0.17, 5.6, 0.34, { fill: FA, line: null, radius: 0.08 });
    d.t(s, '//het rapport schrijven//', 2.4, y + 0.22, 5.6, 0.35, { size: 14, bold: true, color: FA, align: 'center' });
    d.ill(s, 'chequered-flag', 8.55, y - 1.15, 0.9, 0.9);
    d.rect(s, 8.97, y - 0.3, 0.06, 0.6, { fill: MK, line: null, radius: 0 });
    d.t(s, ['**vrijdag 17 uur**', '//tegen vrijdag//'], 9.5, y - 1.1, 2.8, 0.85, { size: 15, color: MK, valign: 'middle', gap: 0 });
    d.ill(s, 'check-mark-button', 7.7, y - 0.85, 0.5, 0.5);
    const R = [['{Tegen vrijdag} <zal> ik het rapport <geschreven hebben>.', 'd’ici vendredi, j’aurai écrit le rapport'], ['{Volgend jaar} <zal> ik hier tien jaar <gewerkt hebben>.', 'l’an prochain, j’aurai travaillé ici dix ans'], ['Hij is er nog niet: hij <zal> de trein <gemist hebben>.', 'supposition : il aura raté le train']];
    R.forEach(([t, fr], i) => {
      const yy = 3.55 + i * 0.75;
      d.rect(s, 0.6, yy, 12.13, 0.68, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.08 });
      rich(s, pc(t, 17), 0.8, yy, 7.6, 0.68);
      d.t(s, `« ${fr} »`, 8.5, yy, 4.1, 0.68, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
    });
    band(s, 'À l’oral, plus simple : //Tegen vrijdag **heb** ik het rapport **geschreven**.// (perfectum + marqueur)', 6.0, 0.7, FA, 16);
  }

  // ---------------------------------------------------------------- 16 conditionnel
  d.section('L’imaginaire');
  {
    const s = d.page({ g: 16, tag: 'L’IMAGINAIRE', tagColor: CO, title: 'Le conditionnel : zou + infinitif' });
    s.addShape(d.S.CLOUD, { x: 0.6, y: 1.45, w: 3.3, h: 1.2, fill: { color: 'F1ECF7' }, line: { color: PURPLE, width: 1.5 } });
    d.ill(s, 'thought-balloon', 1.0, 1.6, 0.8, 0.8);
    d.t(s, '**zou**', 1.9, 1.6, 1.5, 0.8, { size: 24, color: CO, valign: 'middle' });
    strip(s, 4.3, 1.75, [['Ik', 'n'], ['zou', 'v'], ['graag', 'n'], ['komen.', 'i']], { size: 20, h: 0.62 });
    d.t(s, '//zou// (ik, jij, hij) · //zouden// (we, jullie, ze) · infinitif **à la fin**', 4.3, 2.4, 8.4, 0.4, { size: 14, color: 'tx2' });
    const C = [['POLITESSE', '<Zou> u het raam <kunnen sluiten>?', 'pourriez-vous fermer la fenêtre ?'], ['CONSEIL', 'Je <zou> meer <moeten slapen>.', 'tu devrais dormir plus'],
      ['HYPOTHÈSE', '{Als} ik tijd <had>, <zou> ik meer <sporten>.', 'si j’avais le temps, je ferais plus de sport'], ['FUTUR DANS LE PASSÉ', 'Hij zei dat hij <zou> <komen>.', 'il a dit qu’il viendrait']];
    const cw = (12.13 - 0.2) / 2; const ch = 1.45;
    C.forEach(([h, ex, fr], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.2); const y = 2.95 + Math.floor(i / 2) * (ch + 0.12);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: CO, lw: 1.5, radius: 0.12, shadow: true });
      d.t(s, `**${h}**`, x + 0.2, y + 0.06, cw - 0.4, 0.4, { size: 14, color: CO, valign: 'middle' });
      rich(s, pc(ex, 18), x + 0.2, y + 0.45, cw - 0.4, 0.55);
      d.t(s, `« ${fr} »`, x + 0.2, y + 1.0, cw - 0.4, 0.38, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
    });
    band(s, 'L’imaginaire flotte au-dessus de la ligne : //zou// est le passé de //zal// (diapo 5).', 6.15, 0.6, CO, 16);
  }

  // ---------------------------------------------------------------- 17 conditionnel passé et regrets
  {
    const s = d.page({ g: 17, tag: 'L’IMAGINAIRE', tagColor: CP, title: 'Le conditionnel passé : regrets et « si j’avais su »' });
    const y = 2.85;
    tl(s, 0.8, 12.75, y, { nu: 11.4, zones: [[1.0, 10.8, PA]] });
    d.oval(s, 3.4, y - 0.15, 0.3, 0.3, { fill: PA, line: 'FFFFFF', lw: 1 });
    d.line(s, 3.6, y - 0.12, 7.6, 1.85, { color: hexOf(CP), lw: 2.5, dash: 'dash' });
    s.addShape(d.S.CLOUD, { x: 7.65, y: 1.4, w: 3.4, h: 0.95, fill: { color: 'ECE8F3' }, line: { color: hexOf(CP), width: 1.25 } });
    d.t(s, '//ik was gekomen//', 7.65, 1.4, 3.4, 0.95, { size: 15, bold: true, color: CP, align: 'center', valign: 'middle' });
    d.t(s, ['réalité : //ik wist het niet//', '→ //ik ben niet gekomen//'], 4.0, y + 0.15, 4.5, 0.7, { size: 13, color: PA, valign: 'middle', gap: 0 });
    d.t(s, 'ce qui ne s’est **pas** passé', 4.3, 1.55, 3.3, 0.4, { size: 13, italic: true, color: CP });
    const R = [['{Als} ik het <geweten had>, <was> ik <gekomen>.', 'si j’avais su, je serais venu·e'], ['Ik <had> moeten <bellen>.', 'regret : j’aurais dû appeler'], ['Ik <had> het graag <gedaan>.', 'je l’aurais fait volontiers']];
    R.forEach(([t, fr], i) => {
      const yy = 3.8 + i * 0.68;
      d.rect(s, 0.6, yy, 7.7, 0.62, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.08 });
      rich(s, pc(t, 16), 0.8, yy + 0.02, 7.4, 0.36);
      d.t(s, `« ${fr} »`, 0.8, yy + 0.36, 7.4, 0.24, { size: 11.5, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.rect(s, 8.55, 3.85, 4.18, 1.95, { fill: TINT[CP], line: CP, lw: 1.5, radius: 0.12 });
    d.t(s, ['//zou// + participe + //hebben / zijn//', '= **//had / was// + participe**', '(forme courte, très fréquente)', '//zou ik gekomen zijn// = //was ik gekomen//'], 8.7, 3.9, 3.9, 1.85, { size: 14, color: 'tx1', valign: 'middle', gap: 2 });
    band(s, '⚠ //had gewerkt// = plus-que-parfait **ou** conditionnel passé : le contexte (//als, graag, moeten//) décide.', 6.05, 0.7, CP, 16);
  }

  // ---------------------------------------------------------------- 18 trois niveaux d'hypothèse
  {
    const s = d.page({ g: 18, tag: 'L’IMAGINAIRE', tagColor: CO, title: 'Si… : trois niveaux d’hypothèse' });
    const R = [['sun', '① RÉEL', 'possible', PR, '{Als} ik tijd <heb>, <kom> ik.', 'Si j’ai le temps, je viens.', 'presens + presens'],
      ['thought-balloon', '② IMAGINAIRE', 'maintenant', CO, '{Als} ik tijd <had>, <zou> ik <komen>.', 'Si j’avais le temps, je viendrais.', 'imperfectum + zou'],
      ['pensive-face', '③ IRRÉEL', 'dans le passé', CP, '{Als} ik tijd <gehad had>, <was> ik <gekomen>.', 'Si j’avais eu le temps, je serais venu·e.', 'had + participe · had / was + participe']];
    R.forEach(([ic, h, sub, c, nl, fr, f], i) => {
      const y = 1.6 + i * 1.42; const off = i * 0.35;
      d.rect(s, 0.6 + off, y, 12.13 - off, 1.28, { fill: TINT[c], line: c, lw: 1.75, radius: 0.12 });
      d.ill(s, ic, 0.75 + off, y + 0.2, 0.85, 0.85);
      d.t(s, [`**${h}**`, sub], 1.7 + off, y + 0.1, 1.9, 1.05, { size: 15, color: c, valign: 'middle', gap: 0 });
      rich(s, pc(nl, 18), 4.3, y + 0.08, 5.5, 0.62);
      d.t(s, `« ${fr} »`, 4.3, y + 0.68, 5.5, 0.5, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, f, 9.85, y + 0.1, 2.75, 1.08, { size: 13, bold: true, color: c, align: 'center', valign: 'middle' });
    });
    band(s, 'Comme en français, le temps recule d’un cran à chaque niveau. ③ aussi : //…, **zou** ik **gekomen zijn**.//', 6.0, 0.7, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 19 concordance
  d.section('Combiner');
  {
    const s = d.page({ g: 19, tag: 'COMBINER', title: 'Il a dit que… : la concordance des temps' });
    d.ill(s, 'speaking-head', 0.6, 1.5, 0.8, 0.8);
    d.t(s, '//Hij zegt…// → //Hij **zei** dat…// : chaque temps descend d’une ligne (diapo 5).', 1.55, 1.5, 11.1, 0.8, { size: 17, color: 'tx2', valign: 'middle' });
    const R = [['«Ik <ben> ziek.»', 'ott', 'Hij zei dat hij ziek <was>.', 'ovt'], ['«Ik <heb> hard <gewerkt>.»', 'vtt', 'Hij zei dat hij hard <gewerkt had>.', 'vvt'], ['«Ik <zal> morgen <komen>.»', 'ottt', 'Hij zei dat hij {de volgende dag} <zou komen>.', 'ovtt']];
    R.forEach(([a, ka, b, kb], i) => {
      const y = 2.5 + i * 1.12;
      d.rect(s, 0.6, y, 4.3, 0.95, { fill: TINT[TT[ka][4]], line: TT[ka][4], lw: 1.5, radius: 0.22 });
      rich(s, pc(a, 17), 0.8, y + 0.04, 3.95, 0.58);
      d.t(s, `**${TT[ka][1]}**`, 3.0, y + 0.6, 1.75, 0.3, { size: 11, color: TT[ka][4], align: 'right', valign: 'middle' });
      d.t(s, '➜', 4.95, y, 0.7, 0.95, { size: 28, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, 5.7, y, 7.03, 0.95, { fill: 'FFFFFF', line: TT[kb][4], lw: 1.5, radius: 0.12 });
      rich(s, pc(b, 18), 5.9, y, 5.2, 0.95);
      d.rect(s, 11.15, y + 0.25, 1.45, 0.45, { fill: TT[kb][4], line: null, radius: 0.1 });
      d.t(s, `**${TT[kb][2]}**`, 11.15, y + 0.25, 1.45, 0.45, { size: 12, color: 'bg1', align: 'center', valign: 'middle' });
    });
    band(s, 'Après //Hij **zegt** dat…// (présent) : rien ne change → //Hij zegt dat hij ziek **is**.// · Après //dat//, le verbe va à la fin (le wagon).', 5.95, 0.8, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 20 marqueurs
  {
    const s = d.page({ g: 20, tag: 'COMBINER', title: 'Les marqueurs de temps sur la ligne' });
    const y = 3.35; const nu = 7.0;
    tl(s, 0.7, 12.75, y, { nu, nuLab: false, zones: [[0.8, 6.8, PA], [7.2, 12.4, FU]] });
    d.rect(s, 2.6, y - 0.12, nu - 2.6, 0.24, { fill: PR, line: 'FFFFFF', lw: 1, radius: 0.06 });
    const M = [['eergisteren', 1.35, 0, PA], ['vorige week', 3.4, 0, PA], ['toen', 5.0, 0, PA], ['nu · vandaag', nu, 0, PR], ['straks', 8.8, 0, FU], ['volgende week', 10.6, 0, FU],
      ['vroeger', 1.2, 1, PA], ['gisteren', 2.75, 1, PA], ['net', 6.2, 1, PA], ['zo meteen', 7.85, 1, FU], ['morgen', 9.4, 1, FU], ['tegen vrijdag', 11.6, 1, FU]];
    M.forEach(([t, x, below, c]) => {
      const w = wOf(t, 14) * 1.12 + 0.1; const yy = below ? y + 0.42 : y - 0.95;
      d.line(s, x, below ? y + 0.12 : y - 0.12, x, below ? yy : yy + 0.5, { color: hexOf(c), lw: 1, arrow: false });
      d.rect(s, x - w / 2, yy, w, 0.5, { fill: c, line: null, radius: 0.12 });
      d.t(s, `//**${t}**//`, x - w / 2, yy, w, 0.5, { size: 14, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.t(s, '//al … · sinds …// (depuis)', 3.0, y - 1.55, 3.6, 0.4, { size: 14, bold: true, color: PR, align: 'center' });
    d.line(s, 4.8, y - 1.15, 4.8, y - 0.14, { color: hexOf(PR), lw: 1, arrow: false, dash: 'dash' });
    const B = [[PA, 'PASSÉ', '//perfectum · imperfectum// · avant un autre passé : //had / was// + participe'], [PR, 'NU', '//presens// · depuis : //al, sinds// + presens · //aan het//'], [FU, 'FUTUR', '//presens// + marqueur · //gaan// · //zullen//']];
    const cw = (12.13 - 0.4) / 3;
    B.forEach(([c, h, t], i) => {
      const x = 0.6 + i * (cw + 0.2);
      d.rect(s, x, 4.75, cw, 1.95, { fill: TINT[c], line: c, lw: 1.5, radius: 0.12 });
      d.t(s, `**${h}**`, x + 0.2, 4.82, cw - 0.4, 0.45, { size: 16, color: c, valign: 'middle' });
      d.t(s, t, x + 0.2, 5.3, cw - 0.4, 1.3, { size: 15, valign: 'top' });
    });
  }

  // ---------------------------------------------------------------- 21 FR → NL
  {
    const s = d.page({ g: 21, tag: 'PIÈGE FR ≠ NL', title: 'Français → néerlandais : pas de 1 = 1' });
    const R = [['présent → presens', PR, 'Je travaille.', 'Ik <werk>.'], ['présent + depuis → presens + al / sinds', PR, 'J’habite ici depuis 3 ans.', 'Ik <woon> hier {al} 3 jaar.'],
      ['passé composé → perfectum', PA, 'J’ai raté le train.', 'Ik <heb> de trein <gemist>.'], ['passé composé → imperfectum (zijn, hebben, modaux)', PA, 'J’ai été malade.', 'Ik <was> ziek.'],
      ['imparfait → imperfectum, aan het', PA, 'Je lisais quand il a appelé.', 'Ik <was> aan het <lezen> toen hij <belde>.'], ['passé simple → imperfectum', PA, 'Il entra et s’assit.', 'Hij <kwam> binnen en <ging> zitten.'],
      ['venir de → net + perfectum', PA, 'Je viens de manger.', 'Ik <heb> {net} <gegeten>.'], ['futur → presens + marqueur, zullen', FU, 'Je viendrai demain.', 'Ik <kom> {morgen}.'],
      ['si + imparfait → als + imperfectum, zou', CO, 'Si j’avais le temps, je viendrais.', '{Als} ik tijd <had>, <zou> ik <komen>.'], ['j’aurais dû → had moeten', CP, 'J’aurais dû appeler.', 'Ik <had> moeten <bellen>.']];
    const cw = (12.13 - 0.2) / 2; const rh = 0.93;
    R.forEach(([lab, c, fr, nl], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.2); const y = 1.58 + Math.floor(i / 2) * (rh + 0.07);
      d.rect(s, x, y, cw, rh, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1 });
      d.rect(s, x, y, 0.1, rh, { fill: c, line: null, radius: 0 });
      d.t(s, `**${lab}**`, x + 0.25, y + 0.03, cw - 0.4, 0.28, { size: 11.5, color: c, valign: 'middle' });
      d.t(s, `« ${fr} »`, x + 0.25, y + 0.3, cw - 0.4, 0.27, { size: 12, italic: true, color: 'accent5', valign: 'middle' });
      rich(s, pc(nl, 15), x + 0.25, y + 0.56, cw - 0.4, 0.34);
    });
  }

  // ---------------------------------------------------------------- 22 à retenir
  {
    const s = d.page({ g: 22, tag: 'À RETENIR', title: 'À retenir : la ligne du temps' });
    T.forEach(([, nl, code, fr, c, ex], i) => {
      const y = 1.6 + i * 0.6;
      d.rect(s, 0.6, y, 5.6, 0.52, { fill: TINT[c], line: null, radius: 0.08 });
      d.rect(s, 0.6, y, 0.1, 0.52, { fill: c, line: null, radius: 0 });
      d.t(s, [`**${nl}**`, fr], 0.8, y, 2.55, 0.52, { size: nl.length > 16 ? 11 : 12, color: c, valign: 'middle', gap: 0 });
      d.t(s, `//**${ex}**//`, 3.4, y, 2.75, 0.52, { size: 13, valign: 'middle' });
    });
    const R = [['hourglass-not-done', '**depuis** = presens + //al / sinds// : //Ik woon hier al 3 jaar.//'], ['camera-with-flash', '**perfectum** = le fait, le bilan · **imperfectum** = décor, habitude, récit'],
      ['hourglass-done', '**avant le passé** = //had / was// + participe : //Toen ik aankwam, was hij al weg.//'], ['crystal-ball', '**futur** = presens + marqueur (souvent), //gaan//, //zullen//'],
      ['thought-balloon', '**imaginaire** = //zou// · **si** = //als// + imperfectum · **regret** = //had moeten//']];
    R.forEach(([ic, t], i) => {
      const y = 1.6 + i * 0.97;
      d.rect(s, 6.45, y, 6.28, 0.87, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1, shadow: true });
      d.ill(s, ic, 6.58, y + 0.14, 0.6, 0.6);
      d.t(s, t, 7.35, y, 5.25, 0.87, { size: 14, valign: 'middle' });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 23 divider
  d.divider({ g: 23, tiles: [
    ['Sur la ligne', '★', 'FaMapMarkerAlt'], ['Huit temps', '★★', 'FaTable'], ['Photo ou film ?', '★★', 'FaCamera'], ['Depuis, venir de', '★★', 'FaHourglassHalf'], ['Quel futur ?', '★★', 'FaRocket'], ['Avant ou après ?', '★★', 'FaHistory'],
    ['Si… si… si…', '★★★', 'FaCloud'], ['FR → NL', '★★', 'FaLanguage'], ['Le détective', '★★', 'FaSearch'], ['La roue du temps', '★★', 'FaSyncAlt'], ['Mon parcours', '★★★', 'FaMicrophone'],
  ] });

  // ---------------------------------------------------------------- 24 ex1 sur la ligne
  const ZN = [['①', 'avant le passé', PQ], ['②', 'passé', PA], ['③', 'NU', PR], ['④', 'futur', FU], ['⑤', 'imaginaire', CO]];
  const ex1 = [['{Vorig jaar} <werkte> ik in Brussel.', 1, 'imperfectum'], ['Ik <ben> {nu} aan het werken.', 2, 'presens'], ['{Volgende week} <ga> ik naar Antwerpen.', 3, 'presens !'], ['{Als} ik rijk <was>, <zou> ik een boot kopen.', 4, 'conditionalis'],
    ['{Toen} ik aankwam, <was> de trein {al} <vertrokken>.', 0, 'plusquamperfectum'], ['<Heb> je het rapport {al} <gelezen>?', 1, 'perfectum'], ['{Tegen juni} <zal> ik mijn diploma <behaald hebben>.', 3, 'futurum exactum'], ['Ik <woon> hier {al} tien jaar.', 2, 'presens + al']];
  d.ex({ g: 24, title: 'Exercice 1 — Sur la ligne', stars: '★', instr: 'Dans quelle zone est l’action du verbe rouge ? Écrivez le numéro, puis le nom du temps.' }, (s, mode, top) => {
    const y = top + 0.75;
    s.addShape(d.S.CLOUD, { x: 10.15, y: top - 0.05, w: 2.55, h: 0.62, fill: { color: 'F1ECF7' }, line: { color: PURPLE, width: 1 } });
    d.t(s, '**⑤ imaginaire**', 10.15, top - 0.05, 2.55, 0.62, { size: 13, color: CO, align: 'center', valign: 'middle' });
    tl(s, 0.8, 12.75, y, { nu: 7.3, nuLab: false, ls: 13, zones: [[0.9, 2.9, PQ, '① avant le passé'], [3.0, 7.1, PA, '② passé'], [7.5, 12.3, FU, '④ futur']] });
    d.t(s, '**③ NU**', 7.38, y + 0.16, 1.2, 0.32, { size: 13, color: VB, valign: 'middle' });
    const cw = (12.13 - 0.2) / 2; const y0 = y + 0.65; const rh = (6.85 - y0) / 4;
    ex1.forEach(([t, z, name], i) => {
      const x = 0.6 + Math.floor(i / 4) * (cw + 0.2); const yy = y0 + (i % 4) * rh;
      d.rect(s, x, yy + 0.04, cw, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.t(s, `**${i + 1}**`, x + 0.1, yy + 0.04, 0.35, rh - 0.1, { size: 14, color: 'accent5', valign: 'middle' });
      rich(s, pc(t, 15), x + 0.45, yy + 0.04, cw - 2.4, rh - 0.1);
      const bx = x + cw - 1.9;
      if (mode === 'q') d.rect(s, bx, yy + 0.14, 1.8, rh - 0.3, { fill: 'FFFFFF', line: 'accent5', lw: 1, dash: 'dash', radius: 0.1 });
      else {
        const c = i === 7 ? PR : ZN[z][2];
        d.rect(s, bx, yy + 0.14, 1.8, rh - 0.3, { fill: c, line: null, radius: 0.1 });
        d.t(s, [`**${i === 7 ? '② → ③' : ZN[z][0]}**`, name], bx, yy + 0.14, 1.8, rh - 0.3, { size: 11, color: 'bg1', align: 'center', valign: 'middle', gap: 0 });
      }
    });
  });

  // ---------------------------------------------------------------- 25 ex2 un verbe, huit temps
  const ex2b = ['ik [[bel]]', 'ik [[heb gebeld]]', 'ik [[belde]]', 'ik [[had gebeld]]', 'ik [[zal bellen]]', 'ik [[zal gebeld hebben]]', 'ik [[zou bellen]]', 'ik [[zou gebeld hebben]]'];
  const ex2v = ['we [[vertrekken]]', 'we [[zijn vertrokken]]', 'we [[vertrokken]]', 'we [[waren vertrokken]]', 'we [[zullen vertrekken]]', 'we [[zullen vertrokken zijn]]', 'we [[zouden vertrekken]]', 'we [[zouden vertrokken zijn]]'];
  d.ex({ g: 25, title: 'Exercice 2 — Un verbe, huit temps', stars: '★★', instr: 'Conjuguez //bellen// (avec //ik//) et //vertrekken// (avec //we//) aux huit temps.' }, (s, mode, top) => {
    const W = [3.4, 4.3, 4.43]; const X = [0.6, 4.0, 8.3];
    ['temps', 'bellen (ik)', 'vertrekken (we)'].forEach((h, j) => {
      d.rect(s, X[j], top, W[j] - 0.05, 0.4, { fill: 'tx2', line: null, radius: 0.06 });
      d.t(s, `**${h}**`, X[j], top, W[j] - 0.05, 0.4, { size: 14, color: 'bg1', align: 'center', valign: 'middle' });
    });
    const y0 = top + 0.45; const rh = (6.85 - y0) / 8;
    T.forEach(([, nl, , fr, c], i) => {
      const y = y0 + i * rh;
      d.rect(s, 0.6, y + 0.02, 12.08, rh - 0.04, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.06 });
      d.rect(s, 0.6, y + 0.02, 0.1, rh - 0.04, { fill: c, line: null, radius: 0 });
      d.t(s, `**${nl}** · ${fr}`, 0.8, y, 3.2, rh, { size: nl.length > 16 ? 11 : 12.5, color: c, valign: 'middle' });
      d.t(s, `//${ex2b[i]}//`, X[1] + 0.15, y, W[1] - 0.25, rh, { size: 15, valign: 'middle', mode });
      d.t(s, `//${ex2v[i]}//`, X[2] + 0.15, y, W[2] - 0.25, rh, { size: 15, valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 26 ex3 photo ou film
  d.ex({ g: 26, title: 'Exercice 3 — Photo ou film ?', stars: '★★', instr: 'Conjuguez les verbes : perfectum (photo) ou imperfectum (film) ?' }, (s, mode, top) => {
    const h = 6.85 - top;
    d.rect(s, 0.6, top, 8.6, h, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
    const txt = 'Vorige zaterdag [[ben]] ik naar de markt [[gegaan]] //(gaan)//. Het [[was]] //(zijn)// mooi weer en de zon [[scheen]] //(schijnen)//. Overal [[stonden]] //(staan)// mensen. Ik [[kocht]] //(kopen)// groenten en [[dronk]] //(drinken)// een koffie. Plots [[zag]] //(zien)// ik mijn oude collega Karim! We [[hebben]] een uur [[gepraat]] //(praten)//. Het [[is]] een fijne dag [[geweest]] //(zijn)//.';
    d.t(s, txt, 0.85, top + 0.15, 8.1, h - 0.3, { size: 18, mode, ls: 1.35, valign: 'top' });
    d.rect(s, 9.45, top, 3.28, h, { fill: TINT[PA], line: PA, lw: 1.5, radius: 0.12 });
    d.ill(s, 'camera-with-flash', 9.6, top + 0.15, 0.6, 0.6);
    d.t(s, '**photo** : perfectum', 10.3, top + 0.15, 2.35, 0.6, { size: 14, color: PA, valign: 'middle' });
    d.ill(s, 'clapper-board', 9.6, top + 0.85, 0.6, 0.6);
    d.t(s, '**film** : imperfectum', 10.3, top + 0.85, 2.35, 0.6, { size: 14, color: PA, valign: 'middle' });
    if (mode === 'a') d.t(s, ['**photo** : //ben gegaan · hebben gepraat · is geweest// (ouvrir, conclure)', '**film** : //was · scheen · stonden · kocht · dronk · zag// (décor, récit)', 'Aussi possible : //ging ik · praatten we · was//.'], 9.6, top + 1.6, 3.0, h - 1.75, { size: 13, gap: 6, valign: 'top' });
    else d.ill(s, 'shopping-cart', 10.4, top + 2.2, 1.4, 1.4);
  });

  // ---------------------------------------------------------------- 27 ex4 depuis, venir de
  const ex4 = [['J’habite ici depuis cinq ans.', 'Ik [[woon]] hier [[al]] vijf jaar.'], ['Je travaille chez Koopzo depuis 2022.', 'Ik [[werk]] [[sinds]] 2022 bij Koopzo.'], ['Elle vient de partir.', 'Ze [[is]] [[net]] [[vertrokken]].'],
    ['Nous attendons depuis une heure !', 'We [[wachten]] [[al]] een uur!'], ['Je viens de manger.', 'Ik [[heb]] [[net]] [[gegeten]].'], ['Il attendait depuis une heure quand le bus est arrivé.', 'Hij [[wachtte]] [[al]] een uur toen de bus [[kwam]].']];
  d.ex({ g: 27, title: 'Exercice 4 — Depuis, venir de : al, sinds, net', stars: '★★', instr: 'Traduisez : choisissez le marqueur (//al, sinds, net//) **et** le temps du verbe.' }, (s, mode, top) => {
    const rh = (6.45 - top) / 6;
    ex4.forEach(([fr, nl], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.04, 12.13, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.t(s, `**${i + 1}**  « ${fr} »`, 0.75, y + 0.04, 5.3, rh - 0.1, { size: 15, italic: true, color: 'tx2', valign: 'middle' });
      d.t(s, '➜', 6.0, y + 0.04, 0.45, rh - 0.1, { size: 18, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `//${nl}//`, 6.5, y + 0.04, 6.15, rh - 0.1, { size: 17, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 6 : depuis + imparfait = //al// + imperfectum. « depuis… et encore » → jamais de perfectum.', 0.6, 6.48, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 28 ex5 quel futur
  const ex5 = [['cloud-with-rain', 'prévision', '« Il va pleuvoir. »', 'Het [[gaat]] [[regenen]].'], ['handshake', 'promesse', '« Je t’appellerai demain. »', 'Ik [[zal]] je morgen [[bellen]].'],
    ['spiral-calendar', 'planning', '« Lundi, je travaille à la maison. »', 'Maandag [[werk]] ik thuis.'], ['hot-beverage', 'proposition', '« On fait une pause ? »', '[[Zullen]] we een pauze [[nemen]]?'],
    ['bell', 'supposition', '« On sonne : ce sera Tom. »', 'Dat [[zal]] Tom wel [[zijn]].'], ['bullseye', 'intention', '« Je vais chercher un nouveau job. »', 'Ik [[ga]] een nieuwe job [[zoeken]].']];
  d.ex({ g: 28, title: 'Exercice 5 — Quel futur ?', stars: '★★', instr: 'Présent, //gaan// ou //zullen// ? Choisissez la forme la plus naturelle.' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const rh = (6.45 - top) / 3;
    ex5.forEach(([ic, use, fr, nl], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.2); const y = top + Math.floor(i / 2) * rh;
      d.rect(s, x, y + 0.05, cw, rh - 0.12, { fill: 'FFFFFF', line: FU, lw: 1.25, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.15, y + 0.2, 0.7, 0.7);
      d.t(s, `**${use}**`, x + 0.95, y + 0.12, cw - 1.1, 0.35, { size: 13, color: FU, valign: 'middle' });
      d.t(s, fr, x + 0.95, y + 0.45, cw - 1.1, 0.4, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${nl}//`, x + 0.95, y + 0.85, cw - 1.1, rh - 1.0, { size: 18, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 2 : aussi //Ik bel je morgen.// N° 3 : aussi //Maandag ga ik thuis werken.//', 0.6, 6.48, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 29 ex6 avant ou après
  const ex6 = [['railway-car', 'de trein vertrekt', 'ik kom aan', 'Toen ik aankwam, [[was de trein al vertrokken]].'], ['fork-and-knife-with-plate', 'hij eet', 'hij gaat slapen', 'Nadat hij [[gegeten had]], ging hij slapen.'],
    ['clapper-board', 'de film begint', 'we komen binnen', 'Toen we binnenkwamen, [[was de film al begonnen]].'], ['page-facing-up', 'Lotte leest het rapport', 'de vergadering', 'Lotte [[had het rapport al gelezen]] voor de vergadering.'],
    ['telephone-receiver', 'ik bel de klant', 'de chef vraagt het', 'Toen de chef het vroeg, [[had ik de klant al gebeld]].']];
  d.ex({ g: 29, title: 'Exercice 6 — Avant ou après ?', stars: '★★', instr: 'L’action ① est terminée avant l’action ② : complétez avec le plusquamperfectum.' }, (s, mode, top) => {
    const rh = (6.5 - top) / 5;
    ex6.forEach(([ic, a, b, t], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.04, 12.13, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.ill(s, ic, 0.72, y + 0.1, rh - 0.22, rh - 0.22);
      d.t(s, [`**①** //${a}//`, `**②** //${b}//`], 1.45, y + 0.04, 3.4, rh - 0.1, { size: 13, color: 'tx2', valign: 'middle', gap: 0 });
      d.t(s, `//${t}//`, 4.95, y + 0.04, 7.7, rh - 0.1, { size: 17, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 2 : aussi //had gegeten//. Le verbe ② reste au perfectum ou à l’imperfectum.', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 30 ex7 trois hypothèses
  const ex7 = [['money-bag', 'geld hebben → een huis kopen', ['Als ik geld [[heb]], [[koop]] ik een huis.', 'Als ik geld [[had]], [[zou]] ik een huis [[kopen]].', 'Als ik geld [[gehad had]], [[had]] ik een huis [[gekocht]].']],
    ['light-bulb', 'het weten → je helpen', ['Als ik het [[weet]], [[help]] ik je.', 'Als ik het [[wist]], [[zou]] ik je [[helpen]].', 'Als ik het [[geweten had]], [[had]] ik je [[geholpen]].']]];
  d.ex({ g: 30, title: 'Exercice 7 — Si… si… si… : trois hypothèses', stars: '★★★', instr: 'Écrivez chaque situation aux trois niveaux : réel, imaginaire, irréel passé.' }, (s, mode, top) => {
    const lw = 2.4; const cw = (12.13 - lw - 0.3) / 3; const X = (j) => 0.6 + lw + 0.1 + j * (cw + 0.1);
    [['① RÉEL', PR], ['② IMAGINAIRE', CO], ['③ IRRÉEL PASSÉ', CP]].forEach(([h, c], j) => {
      d.rect(s, X(j), top, cw, 0.45, { fill: c, line: null, radius: 0.08 });
      d.t(s, `**${h}**`, X(j), top, cw, 0.45, { size: 14, color: 'bg1', align: 'center', valign: 'middle' });
    });
    const rh = (6.85 - top - 0.55) / 2;
    ex7.forEach(([ic, sit, L], i) => {
      const y = top + 0.55 + i * rh;
      d.rect(s, 0.6, y, lw, rh - 0.12, { fill: 'bg2', line: BORDER, lw: 1, radius: 0.1 });
      d.ill(s, ic, 0.6 + lw / 2 - 0.4, y + 0.15, 0.8, 0.8);
      d.t(s, `**${sit}**`, 0.7, y + 1.0, lw - 0.2, rh - 1.2, { size: 14, align: 'center', valign: 'middle' });
      L.forEach((t, j) => {
        d.rect(s, X(j), y, cw, rh - 0.12, { fill: 'FFFFFF', line: [PR, CO, CP][j], lw: 1.25, radius: 0.1 });
        d.t(s, `//${t}//`, X(j) + 0.15, y + 0.05, cw - 0.3, rh - 0.22, { size: 16, valign: 'middle', mode, ls: 1.2 });
      });
    });
  });

  // ---------------------------------------------------------------- 31 ex8 le traducteur
  const ex8 = [['J’ai été malade la semaine passée.', 'Ik was vorige week ziek.'], ['J’habite à Gand depuis 2019.', 'Ik woon sinds 2019 in Gent.'], ['Je viens de recevoir ton mail.', 'Ik heb net je mail gekregen.'],
    ['Quand je suis arrivé·e, la réunion avait commencé.', 'Toen ik aankwam, was de vergadering begonnen.'], ['Il va pleuvoir.', 'Het gaat regenen.'], ['Si j’avais le temps, je viendrais.', 'Als ik tijd had, zou ik komen.'],
    ['J’aurais dû appeler.', 'Ik had moeten bellen.'], ['D’ici vendredi, j’aurai écrit le rapport.', 'Tegen vrijdag zal ik het rapport geschreven hebben.']];
  d.ex({ g: 31, title: 'Exercice 8 — FR → NL : le traducteur', stars: '★★', instr: 'Traduisez. Attention : le temps français ne donne pas toujours le temps néerlandais !' }, (s, mode, top) => {
    const rh = (6.5 - top) / 8;
    ex8.forEach(([fr, nl], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.03, 12.13, rh - 0.07, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.08 });
      d.t(s, `**${i + 1}**  « ${fr} »`, 0.75, y, 5.85, rh, { size: 13.5, italic: true, color: 'tx2', valign: 'middle' });
      d.t(s, `//[[${nl}]]//`, 6.65, y, 6.05, rh, { size: 15, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 4 : aussi //was … al begonnen//. N° 8 : aussi //Tegen vrijdag heb ik het rapport geschreven.//', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 32 ex9 détective
  d.ex({ g: 32, title: 'Exercice 9 — Le détective', stars: '★★', instr: 'Sofie écrit à Lotte. Trouvez les 5 erreurs de temps.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Sofie Claes · Aan: Lotte Maes · Onderwerp: Groot nieuws!', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Hoi Lotte,//', '//Hoe gaat het? Ik {{heb hier al vijf jaar gewerkt}}++ werk hier al vijf jaar++, maar volgende maand verander ik van job! Vorige week {{heb}}++ had++ ik een sollicitatiegesprek bij Koopzo. Ik {{kom net te bellen met de HR-dienst}}++ heb net met de HR-dienst gebeld++: ze nemen me aan! Toen ik het hoorde, {{ben}}++ was++ ik zo blij. Ik had dat echt niet verwacht. Als ik meer tijd {{heb}}++ had++, zou ik een feestje geven.//', '//Groetjes,//', '//Sofie//'];
    d.t(s, txt, 0.95, top + 0.65, 8.3, h - 0.8, { size: 17, gap: 6, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Corrects : //volgende maand verander ik// (présent + marqueur = futur), //Ik had dat niet verwacht// (passé du passé), //zou ik … geven//.', 9.9, top + 3.05, 2.83, 2.6, { size: 13, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 33 ex10 la roue du temps
  {
    const s = d.page({ g: 33, tag: 'JIJ NU !', title: 'Exercice 10 — La roue du temps', stars: '★★' });
    const cx = 2.95; const cy = 4.15; const R = 2.25;
    T.forEach(([, nl, , , c], i) => {
      const a1 = -90 + i * 45 - 22.5; const a2 = a1 + 45;
      s.addShape(d.S.PIE, { x: cx - R, y: cy - R, w: 2 * R, h: 2 * R, angleRange: [((a1 % 360) + 360) % 360, ((a2 % 360) + 360) % 360], fill: { color: hexOf(c) }, line: { color: 'FFFFFF', width: 2 } });
      const am = ((a1 + 22.5) * Math.PI) / 180; const lx = cx + Math.cos(am) * R * 0.66; const ly = cy + Math.sin(am) * R * 0.66;
      const lab = { 'conditionalis perfectum': ['cond.', 'perfectum'], plusquamperfectum: ['plusquam-', 'perfectum'], 'futurum exactum': ['futurum', 'exactum'] }[nl] || [nl];
      d.t(s, lab.map((t) => `**${t}**`), lx - 0.68, ly - 0.32, 1.36, 0.64, { size: 10.5, color: 'bg1', align: 'center', valign: 'middle', gap: 0 });
    });
    d.oval(s, cx - 0.42, cy - 0.42, 0.84, 0.84, { fill: 'FFFFFF', line: 'tx2', lw: 2 });
    d.icon(s, 'FaSyncAlt', 'tx2', cx - 0.22, cy - 0.22, 0.44);
    s.addShape(d.S.DOWN_ARROW || d.S.RIGHT_ARROW, { x: cx - 0.22, y: cy - R - 0.42, w: 0.44, h: 0.5, fill: { color: hexOf(VB) }, line: { color: 'FFFFFF', width: 1 } });
    const V = ['werken', 'gaan', 'schrijven', 'bellen', 'komen', 'eten', 'vertrekken', 'kopen'];
    const M = ['gisteren', 'vroeger', 'nu', 'al drie jaar', 'morgen', 'tegen vrijdag', 'als ik tijd had', 'net'];
    [['VERBES', V, 'tx2'], ['MARQUEURS', M, MK]].forEach(([h, L, c], j) => {
      const y = 1.6 + j * 1.75;
      d.t(s, `**${h}**`, 5.6, y, 3, 0.38, { size: 13, color: c, cs: 1 });
      L.forEach((t, i) => {
        const x = 5.6 + (i % 4) * 1.8; const yy = y + 0.42 + Math.floor(i / 4) * 0.62;
        d.rect(s, x, yy, 1.7, 0.52, { fill: j ? 'FDF1E6' : 'FFFFFF', line: c, lw: 1.25, radius: 0.1, rotate: [-2, 1, 2, -1][i % 4] });
        d.t(s, `//**${t}**//`, x, yy, 1.7, 0.52, { size: 14, color: j ? MK : 'tx2', align: 'center', valign: 'middle', rotate: [-2, 1, 2, -1][i % 4] });
      });
    });
    d.rect(s, 5.6, 5.15, 7.13, 1.6, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.t(s, ['Par deux : tournez la roue (ou lancez un dé à 8 faces), tirez un verbe et un marqueur.', 'Faites une phrase au temps indiqué. **1 point** si la forme est juste · **1 point** si le marqueur va avec le temps (sinon, changez de marqueur !).'], 5.8, 5.18, 6.8, 1.55, { size: 14, gap: 5, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 34 ex11 mon parcours
  d.roleplay({
    g: 34, title: 'Exercice 11 — Mon parcours',
    scenario: 'La newsletter de Peeters & Co présente un·e collègue. A interviewe B sur son parcours. Objectif : 6 temps différents.',
    a: ['**A — journaliste**', 'Posez des questions sur le passé, le présent, les projets et les rêves de B.'],
    b: ['**B — collègue**', 'Répondez avec la fiche : parcours, poste actuel, projets… et un regret.'],
    bank: '//Wat deed je vroeger? · Hoe lang werk je hier al? · Wat is er toen gebeurd? · Wat ga je volgend jaar doen? · Wat zou je doen als …? · Wat zou je anders gedaan hebben? — Ik werkte … · Ik werk hier al … · Ik had nog nooit … · Ik ga … · Ik zou graag … · Ik had …//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.6, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'MIJN PARCOURS', x + 0.15, y, w - 0.3, 0.6, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const L = [['2012', 'diploma in Namen', PA], ['2013–2019', 'werken bij Maesbouw', PA], ['2020', 'verhuizen naar Gent', PA], ['sinds 2021', 'projectleider bij Peeters & Co', PR], ['volgend jaar', 'een team leiden', FU], ['droom', 'een jaar in Canada wonen', CO]];
      const lx = x + 0.32;
      d.line(s, lx, y + 0.85, lx, y + 0.78 + 5 * 0.72 + 0.1, { color: '8A96A8', lw: 2, arrow: false });
      L.forEach(([yr, t, c], i) => {
        const yy = y + 0.78 + i * 0.72;
        d.oval(s, lx - 0.1, yy + 0.1, 0.2, 0.2, { fill: c });
        d.t(s, `**${yr}**`, lx + 0.2, yy - 0.05, w - 0.6, 0.3, { size: 12, color: c, valign: 'middle' });
        d.t(s, `//${t}//`, lx + 0.2, yy + 0.24, w - 0.6, 0.34, { size: 13, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 35 ticket
  d.ticket({
    g: 35,
    q: ['Traduisez : //J’habite ici depuis trois ans.//', 'Perfectum ou imperfectum ? //Hier, il pleuvait et je suis resté·e à la maison.//', 'Complétez : //Als ik tijd …, … ik komen.//'],
    self: ['Situer', 'Choisir', 'Combiner'],
    teaser: { icon: 'FaBook', text: '**Défi de la semaine** : racontez votre parcours en 8 phrases, avec au moins 5 temps différents.' },
  });
}

module.exports = { meta, build };
