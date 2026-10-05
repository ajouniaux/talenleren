// Om … te — L'infinitif avec ou sans te (complément A2–B1)
const { BORDER, plain, HEX, PURPLE } = require('../lib');

const meta = {
  n: 'T', slug: 'Om_te', title: 'Ik bel om een afspraak te maken — te et om … te', short: 'te et om … te',
  template: 'te_om_te.md', file: 'Om_te_L_infinitif_avec_te.pptx',
  docTitle: 'Ik bel om een afspraak te maken — L’infinitif avec te et om … te',
  foot: 'Néerlandais · A2–B1 · te et om … te',
};

// code couleur : verbe conjugué = bleu marine · om = violet · te = orange · infinitif = rouge
const CJ = 'tx2'; const OM = 'purple'; const TE = 'accent1'; const INF = 'accent6';
const INK = '17375E';
const hexOf = (c) => (c === 'purple' ? PURPLE : c === 'tx2' ? INK : HEX[c] || c);

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  // n neutre · c conjugué · o om · t te · i infinitif · p particule · x barré · e petit mot sans cadre
  const ST = {
    n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
    c: { fill: CJ, line: null, color: 'bg1', bold: true },
    o: { fill: OM, line: null, color: 'bg1', bold: true },
    t: { fill: TE, line: null, color: 'bg1', bold: true },
    i: { fill: 'FBEDEB', line: INF, lw: 2, color: INF, bold: true },
    p: { fill: 'FFFFFF', line: TE, lw: 2, color: TE, bold: true },
    q: { fill: 'FFFFFF', line: 'accent5', lw: 1.5, dash: 'dash', color: 'accent5', bold: true },
    x: { fill: 'FFFFFF', line: 'accent5', lw: 1.25, dash: 'dash', color: 'accent5', bold: false },
    e: { fill: null, line: null, color: 'accent5', bold: true },
  };
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.66; const gap = o.gap ?? 0.09;
    let cx = x; const pos = [];
    parts.forEach(([t, ty]) => {
      const st = ST[ty || 'n'];
      const w = wOf(t, size) * (st.bold ? 1.12 : 1) + (st.bold ? 0.08 : 0);
      if (st.fill || st.line) d.rect(s, cx, y, w, h, { fill: st.fill || 'FFFFFF', line: st.line, lw: st.lw, dash: st.dash, radius: 0.1 });
      d.t(s, ty === 'x' ? `{{${t}}}` : t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      pos.push([cx, w, ty]);
      cx += w + gap;
    });
    strip.pos = pos;
    return cx - gap;
  };
  // la pince : un crochet violet sous la bande, de « om » jusqu'à l'infinitif
  const pince = (s, x, y, parts, o = {}) => {
    const h = o.h || 0.66;
    const end = strip(s, x, y, parts, o);
    const P = strip.pos;
    const a = P.findIndex(([, , ty]) => ty === 'o');
    let b = -1; P.forEach(([, , ty], i) => { if (ty === 'i') b = i; });
    if (a >= 0 && b >= 0) {
      const x1 = P[a][0] + P[a][1] / 2; const x2 = P[b][0] + P[b][1] / 2; const yb = y + h + (o.depth || 0.28);
      const c = hexOf(OM);
      d.line(s, x1, y + h + 0.04, x1, yb, { color: c, lw: 3, arrow: false });
      d.line(s, x1, yb, x2, yb, { color: c, lw: 3, arrow: false });
      d.line(s, x2, yb, x2, y + h + 0.04, { color: c, lw: 3, arrow: false });
      if (o.label) d.t(s, o.label, x1, yb + 0.02, x2 - x1, 0.35, { size: 12, bold: true, color: OM, align: 'center' });
    }
    return end;
  };
  const rich = (s, segs, x, y, w, h, o = {}) => s.addText(segs.map(([text, so]) => ({ text, options: so })), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || 'tx1', align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true,
  });
  // exemple : {…} en couleur (te / om … te)
  const pc = (str, size, c = TE) => str.split(/(\{[^}]+\})/).filter(Boolean).map((t) => (t.startsWith('{')
    ? [t.slice(1, -1), { bold: true, italic: true, color: hexOf(c), fontSize: size }]
    : [t, { italic: true, fontSize: size }]));
  // carte-exemple : image + phrase + traduction
  const card = (s, x, y, w, h, ic, ex, fr, c = TE, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1, shadow: true });
    d.rect(s, x, y, 0.1, h, { fill: c, line: null, radius: 0 });
    const z = Math.min(0.85, h - 0.25);
    d.ill(s, ic, x + 0.22, y + (h - z) / 2, z, z);
    rich(s, pc(ex, o.size || 18, c), x + z + 0.4, y + 0.06, w - z - 0.5, h * 0.58);
    d.t(s, fr, x + z + 0.4, y + h * 0.6, w - z - 0.5, h * 0.36, { size: 13, italic: true, color: 'tx2', valign: 'middle' });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'COMPLÉMENT · A2–B1', title: 'Ik bel om een afspraak te maken', sub: 'L’infinitif avec te et om … te', line: 'te ou pas te ? · la pince om … te',
    visual: (s) => {
      d.rect(s, 7.0, 1.3, 5.95, 3.9, { fill: 'FFFFFF', line: null, radius: 0.16 });
      d.ill(s, 'telephone-receiver', 9.4, 1.45, 1.1, 1.1);
      pince(s, 7.2, 2.85, [['Ik bel', 'n'], ['om', 'o'], ['een afspraak', 'n'], ['te', 't'], ['maken.', 'i']], { size: 16, h: 0.58, label: 'la pince om … te' });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaFilter', h: 'Trier', t: 'Je sais quand mettre te, et quand ne pas le mettre.', color: 'accent2' },
      { icon: 'FaBullseye', h: 'Exprimer un but', t: 'Je dis pourquoi avec om … te : Ik bel om …', color: 'purple' },
      { icon: 'FaPuzzlePiece', h: 'Construire', t: 'Je place tout dans la pince, même un verbe séparable.', color: 'accent1' },
    ],
    band: 'Le français dit « de », « à », « pour »… Le néerlandais dit te, om … te, ou rien.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Avec ou sans te ?' });
    const P = [['person-walking', 'Je veux venir.', [['Ik', 'n'], ['wil', 'c'], ['?', 'q'], ['komen.', 'i']]], ['crossed-fingers', 'J’essaie de venir.', [['Ik', 'n'], ['probeer', 'c'], ['?', 'q'], ['komen.', 'i']]], ['telephone-receiver', 'J’appelle pour prendre rendez-vous.', [['Ik bel', 'n'], ['?', 'q'], ['een afspraak', 'n'], ['?', 'q'], ['maken.', 'i']]]];
    P.forEach(([il, fr, nl], i) => {
      const y = 1.65 + i * 1.45;
      d.rect(s, 0.6, y, 12.13, 1.3, { fill: 'FFFFFF', line: 'accent2', lw: 1.5, radius: 0.12, shadow: true });
      d.ill(s, il, 0.75, y + 0.2, 0.9, 0.9);
      d.flag(s, 'fr', 1.85, y + 0.5, 0.42);
      d.t(s, `//${fr}//`, 2.4, y + 0.1, 3.55, 1.1, { size: 17, valign: 'middle' });
      d.t(s, '→', 5.95, y, 0.5, 1.3, { size: 24, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.flag(s, 'nl', 6.5, y + 0.5, 0.42);
      strip(s, 7.05, y + 0.36, nl, { size: 16, h: 0.58, gap: 0.06 });
    });
    d.rect(s, 0.6, 6.12, 12.13, 0.68, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.75, 6.18, 0.56, 0.56);
    d.t(s, 'Que mettre à la place des « ? » : //te//, //om//, ou rien ?', 1.45, 6.12, 11.1, 0.68, { size: 18, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 4 te ou pas te (T1)
  {
    const s = d.page({ g: 4, tag: 'LE PRINCIPE', title: 'Te ou pas te ? Deux familles de verbes' });
    const W = (12.13 - 0.3) / 2;
    [['SANS te', 'no-entry', 'E6EBF2', 'tx2', ['kunnen', 'moeten', 'willen', 'mogen', 'zullen', 'gaan', 'komen', 'blijven', 'laten', 'zien', 'horen'], [['Ik', 'n'], ['wil', 'c'], ['komen.', 'i']], 'les modaux et les verbes « pilotes » du double infinitif'],
      ['AVEC te', 'check-mark-button', 'FDF1E6', TE, ['proberen', 'beginnen', 'vergeten', 'beloven', 'besluiten', 'hopen', 'hoeven', 'zitten', 'staan', 'liggen', 'lopen'], [['Ik', 'n'], ['probeer', 'c'], ['te', 't'], ['komen.', 'i']], 'presque tous les autres verbes']].forEach(([h, ic, bg, c, V, ex, sub], j) => {
      const x = 0.6 + j * (W + 0.3);
      d.rect(s, x, 1.6, W, 4.35, { fill: bg, line: c, lw: 2, radius: 0.12 });
      d.ill(s, ic, x + 0.2, 1.72, 0.75, 0.75);
      d.t(s, `**${h}**`, x + 1.1, 1.72, W - 1.3, 0.45, { size: 24, color: c, valign: 'middle', head: true });
      d.t(s, sub, x + 1.1, 2.15, W - 1.3, 0.35, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      V.forEach((v, i) => {
        const cw = (W - 0.5) / 4; const vx = x + 0.2 + (i % 4) * (cw + 0.03); const vy = 2.7 + Math.floor(i / 4) * 0.55;
        d.rect(s, vx, vy, cw, 0.46, { fill: 'FFFFFF', line: null, radius: 0.1 });
        d.t(s, `//**${v}**//`, vx, vy, cw, 0.46, { size: 15, color: c === TE ? INF : 'tx2', align: 'center', valign: 'middle' });
      });
      strip(s, x + 0.3, 4.95, ex, { size: 18, h: 0.64 });
    });
    band(s, 'Truc : les verbes « sans te » sont ceux du **double infinitif** (//Ik heb moeten werken//). Presque tous les autres prennent //te//.', 6.15, 0.68, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 5–6 sans te / avec te
  const FAMS = [
    [5, 'Sans te : les modaux et les verbes pilotes', 'tx2', [['Ik', 'n'], ['kan', 'c'], ['komen.', 'i']], 'Comme en français : //je **peux** venir// (pas de « de »).',
      [['flexed-biceps', 'Ik kan morgen komen.', 'je peux venir demain'], ['briefcase', 'Ik moet vandaag lang werken.', 'je dois travailler longtemps aujourd’hui'], ['person-swimming', 'We gaan vanavond zwemmen.', 'nous allons nager ce soir'], ['automobile', 'Ik laat mijn auto wassen.', 'je fais laver ma voiture'], ['eyes', 'Ik zie de bus komen.', 'je vois le bus arriver']]],
    [6, 'Avec te : essayer de, commencer à…', TE, [['Ik', 'n'], ['probeer', 'c'], ['te', 't'], ['komen.', 'i']], 'Souvent, le français dit **de** ou **à** : //essayer **de**, commencer **à**// → //te//.',
      [['crossed-fingers', 'Ik probeer morgen {te} komen.', 'j’essaie DE venir demain'], ['rocket', 'Het begint {te} regenen.', 'il commence À pleuvoir'], ['thinking-face', 'Vergeet niet {te} bellen!', 'n’oublie pas D’appeler'], ['handshake', 'Ik beloof je {te} helpen.', 'je te promets DE t’aider'], ['four-leaf-clover', 'Ik hoop je snel {te} zien.', 'j’espère te voir bientôt']]],
  ];
  d.section('Te ou pas te ?');
  FAMS.forEach(([g, title, c, sch, note, rows]) => {
    const s = d.page({ g, tag: g === 5 ? 'SANS TE' : 'AVEC TE', tagColor: c, title });
    d.rect(s, 0.6, 1.6, 5.2, 4.45, { fill: c, tr: 90, line: c, lw: 1.5, radius: 0.12 });
    d.ill(s, g === 5 ? 'no-entry' : 'check-mark-button', 0.8, 1.75, 0.7, 0.7);
    d.t(s, g === 5 ? '**pas de te**' : '**te + infinitif**', 1.65, 1.75, 3.9, 0.7, { size: 22, color: c, valign: 'middle', head: true });
    strip(s, 0.8, 2.8, sch, { size: 19, h: 0.62 });
    d.t(s, note, 0.8, 3.75, 4.8, 1.0, { size: 16, valign: 'middle' });
    d.t(s, g === 5 ? '//te// ne se met **jamais** après ces verbes.' : 'L’infinitif avec //te// va **au bout** de la phrase.', 0.8, 4.85, 4.8, 1.0, { size: 15, color: 'tx2', valign: 'middle' });
    const rh = (5.2 - 0.1 * 4) / 5;
    rows.forEach(([ic, ex, fr], j) => card(s, 6.05, 1.6 + j * (rh + 0.1), 6.68, rh, ic, ex, fr, c === 'tx2' ? INF : TE, { size: 18 }));
  });

  // ---------------------------------------------------------------- 7 zitten te, hoeven te
  {
    const s = d.page({ g: 7, tag: 'AVEC TE', tagColor: TE, title: 'Deux cas fréquents : zitten te… et niet hoeven te' });
    const W = (12.13 - 0.3) / 2;
    d.rect(s, 0.6, 1.6, W, 4.5, { fill: 'F1ECF7', line: 'purple', lw: 2, radius: 0.12 });
    d.t(s, '**zitten · staan · liggen · lopen + te**', 0.8, 1.7, W - 0.4, 0.45, { size: 17, color: 'purple', valign: 'middle' });
    d.t(s, '= être en train de (M17)', 0.8, 2.12, W - 0.4, 0.35, { size: 14, italic: true, color: 'accent5' });
    [['chair', 'Ik zit {te} lezen.', 'je suis (assis·e) en train de lire'], ['cooking', 'Ze staat {te} koken.', 'elle est (debout) en train de cuisiner'], ['sleeping-face', 'Hij ligt {te} slapen.', 'il est (couché) en train de dormir']].forEach(([ic, ex, fr], i) => card(s, 0.8, 2.6 + i * 1.12, W - 0.4, 1.0, ic, ex, fr, 'purple', { size: 18 }));
    const x2 = 0.6 + W + 0.3;
    d.rect(s, x2, 1.6, W, 4.5, { fill: 'EAF2FB', line: 'accent2', lw: 2, radius: 0.12 });
    d.t(s, '**niet hoeven te**', x2 + 0.2, 1.7, W - 0.4, 0.45, { size: 17, color: 'accent2', valign: 'middle' });
    d.t(s, '= ne pas devoir, ne pas être obligé·e de', x2 + 0.2, 2.12, W - 0.4, 0.35, { size: 14, italic: true, color: 'accent5' });
    [['relieved-face', 'Je hoeft niet {te} komen.', 'tu n’es pas obligé·e de venir'], ['telephone-receiver', 'Je hoeft alleen maar {te} bellen.', 'tu dois juste appeler'], ['money-bag', 'U hoeft niets {te} betalen.', 'vous ne devez rien payer']].forEach(([ic, ex, fr], i) => card(s, x2 + 0.2, 2.6 + i * 1.12, W - 0.4, 1.0, ic, ex, fr, 'accent2', { size: 18 }));
    band(s, '//hoeven// s’emploie avec une négation ou une restriction (//niet, geen, niets, alleen maar//). En Belgique, on dit aussi : //Je moet niet komen.//', 6.2, 0.62, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 8 om … te = pour (T2)
  d.section('Om … te');
  {
    const s = d.page({ g: 8, tag: 'OM … TE', tagColor: OM, title: 'Om … te = pour : le but' });
    d.t(s, '//Waarom bel je?// — pourquoi ?', 0.6, 1.6, 6, 0.42, { size: 17, color: 'tx2' });
    pince(s, 0.6, 2.15, [['Ik', 'n'], ['bel', 'c'], ['om', 'o'], ['een afspraak', 'n'], ['te', 't'], ['maken.', 'i']], { size: 26, h: 0.8, depth: 0.32, label: 'la pince : om … te + infinitif' });
    d.ill(s, 'telephone-receiver', 10.9, 1.9, 1.3, 1.3);
    const R = [['train', 'Ik ga naar Gent {om te werken}.', 'je vais à Gand pour travailler'], ['money-bag', 'We sparen {om} een huis {te kopen}.', 'nous économisons pour acheter une maison'], ['books', 'Ik leer Nederlands {om} een betere job {te vinden}.', 'j’apprends le néerlandais pour trouver un meilleur emploi']];
    R.forEach(([ic, ex, fr], i) => card(s, 0.6, 3.75 + i * 0.85, 12.13, 0.76, ic, ex, fr, OM, { size: 17 }));
  }

  // ---------------------------------------------------------------- 9 om … te après un nom ou un adjectif
  {
    const s = d.page({ g: 9, tag: 'OM … TE', tagColor: OM, title: 'Après un nom ou un adjectif : om … te' });
    const W = (12.13 - 0.3) / 2;
    [['APRÈS UN NOM', 'zin · tijd · plan · kans', [['face-savoring-food', 'Ik heb zin {om} uit eten {te gaan}.', 'j’ai envie d’aller au resto'], ['hourglass-not-done', 'Ik heb geen tijd {om te lezen}.', 'je n’ai pas le temps de lire'], ['alarm-clock', 'Het is tijd {om te vertrekken}.', 'il est temps de partir']]],
      ['APRÈS UN ADJECTIF', 'leuk · moeilijk · belangrijk · klaar', [['smiling-face-with-smiling-eyes', 'Het is leuk {om} Nederlands {te leren}.', 'c’est chouette d’apprendre le néerlandais'], ['grimacing-face', 'Het is moeilijk {om} vroeg {op te staan}.', 'c’est difficile de se lever tôt'], ['chequered-flag', 'Ik ben klaar {om te beginnen}.', 'je suis prêt·e à commencer']]]].forEach(([h, sub, L], j) => {
      const x = 0.6 + j * (W + 0.3);
      d.rect(s, x, 1.6, W, 4.5, { fill: 'F1ECF7', line: 'purple', lw: 2, radius: 0.12 });
      d.t(s, `**${h}**`, x + 0.2, 1.7, W - 0.4, 0.45, { size: 17, color: 'purple', valign: 'middle' });
      d.t(s, `//${sub}//`, x + 0.2, 2.12, W - 0.4, 0.35, { size: 14, color: 'accent5' });
      L.forEach(([ic, ex, fr], i) => card(s, x + 0.2, 2.6 + i * 1.12, W - 0.4, 1.0, ic, ex, fr, OM, { size: 17 }));
    });
    band(s, 'Aussi avec un verbe : //Ik ben van plan **om** te verhuizen. · Ik heb besloten (**om**) te stoppen.// (//om// est souvent possible, rarement obligatoire)', 6.2, 0.62, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 10 dans la pince (T3)
  {
    const s = d.page({ g: 10, tag: 'LA PINCE', tagColor: OM, title: 'Dans la pince : tout entre om et te' });
    d.t(s, '**① Tout le reste va entre //om// et //te//**', 0.6, 1.55, 12, 0.4, { size: 16, color: 'tx2' });
    pince(s, 0.6, 2.0, [['…', 'n'], ['om', 'o'], ['morgen', 'n'], ['in Gent', 'n'], ['een klant', 'n'], ['te', 't'], ['bezoeken.', 'i']], { size: 22, h: 0.7 });
    d.t(s, '**② Verbe séparable : //te// se glisse au milieu** (comme //ge-// : //opgebeld//)', 0.6, 3.15, 12, 0.4, { size: 16, color: 'tx2' });
    const e2 = pince(s, 0.6, 3.6, [['…', 'n'], ['om', 'o'], ['de klant', 'n'], ['op', 'p'], ['te', 't'], ['bellen.', 'i']], { size: 22, h: 0.7 });
    const e3 = strip(s, e2 + 0.6, 3.6, [['te opbellen', 'x']], { size: 22, h: 0.7 });
    d.t(s, '✗', e3 + 0.1, 3.6, 0.5, 0.7, { size: 26, bold: true, color: 'accent6', valign: 'middle' });
    d.t(s, '**③ //niet// se place devant //te//**', 0.6, 4.75, 12, 0.4, { size: 16, color: 'tx2' });
    pince(s, 0.6, 5.2, [['Het is belangrijk', 'n'], ['om', 'o'], ['niet', 'n'], ['te laat', 'n'], ['te', 't'], ['komen.', 'i']], { size: 22, h: 0.7 });
    d.t(s, '//te// est toujours **collé** devant l’infinitif.', 0.6, 6.3, 12.13, 0.45, { size: 15, color: 'tx2' });
  }

  // ---------------------------------------------------------------- 11 zonder, in plaats van, door
  {
    const s = d.page({ g: 11, tag: 'B1', tagColor: 'purple', title: 'zonder … te, in plaats van … te, door … te' });
    const R = [['zipper-mouth-face', 'zonder … te', 'sans + infinitif', 'Hij vertrekt {zonder} iets {te zeggen}.', 'il part sans rien dire'], ['mobile-phone', 'in plaats van … te', 'au lieu de + infinitif', '{In plaats van te werken}, zit hij op zijn gsm.', 'au lieu de travailler, il est sur son GSM'], ['books', 'door … te', 'en + participe présent', '{Door} veel {te lezen}, leer je snel.', 'en lisant beaucoup, on apprend vite']];
    R.forEach(([ic, h, frh, ex, fr], i) => {
      const y = 1.65 + i * 1.5;
      d.rect(s, 0.6, y, 12.13, 1.35, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.rect(s, 0.6, y, 3.4, 1.35, { fill: OM, tr: 85, line: null, radius: 0.12 });
      d.ill(s, ic, 0.75, y + 0.25, 0.85, 0.85);
      d.t(s, [`**${h}**`, frh], 1.75, y + 0.1, 2.2, 1.15, { size: 16, color: 'purple', valign: 'middle', gap: 2 });
      rich(s, pc(ex, 20, OM), 4.25, y + 0.1, 8.3, 0.7);
      d.t(s, fr, 4.25, y + 0.8, 8.3, 0.45, { size: 14, italic: true, color: 'tx2', valign: 'middle' });
    });
    band(s, 'Même pince : la préposition (//zonder, in plaats van, door//) ouvre, //te// + infinitif ferme.', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 12 piège voor / om
  {
    const s = d.page({ g: 12, tag: 'PIÈGE', title: '« Pour » : voor ou om … te ?' });
    const W = (12.13 - 0.3) / 2;
    [['pour + NOM → voor', 'accent2', 'EAF2FB', [['wrapped-gift', 'Dit cadeau is {voor} jou.', 'ce cadeau est pour toi'], ['spiral-calendar', 'Ik ben hier {voor} de vergadering.', 'je suis ici pour la réunion']]],
      ['pour + VERBE → om … te', OM, 'F1ECF7', [['handshake', 'Ik kom {om} je {te helpen}.', 'je viens pour t’aider'], ['busts-in-silhouette', 'Ik ben hier {om te vergaderen}.', 'je suis ici pour la réunion (pour me réunir)']]]].forEach(([h, c, bg, L], j) => {
      const x = 0.6 + j * (W + 0.3);
      d.rect(s, x, 1.6, W, 3.55, { fill: bg, line: c, lw: 2, radius: 0.12 });
      d.t(s, `**${h}**`, x + 0.2, 1.7, W - 0.4, 0.55, { size: 20, color: c, valign: 'middle' });
      L.forEach(([ic, ex, fr], i) => card(s, x + 0.2, 2.4 + i * 1.32, W - 0.4, 1.18, ic, ex, fr, c, { size: 19 }));
    });
    const e = strip(s, 0.6, 5.45, [['Ik kom', 'n'], ['voor', 'x'], ['je', 'n'], ['te helpen', 'x']], { size: 22, h: 0.66 });
    d.t(s, '✗', e + 0.1, 5.45, 0.5, 0.66, { size: 26, bold: true, color: 'accent6', valign: 'middle' });
    d.t(s, '//voor// + infinitif n’existe pas ! « pour que » + phrase = //zodat// (aperçu).', e + 0.7, 5.45, 12.73 - e - 0.7, 0.66, { size: 15, color: 'tx2', valign: 'middle' });
    d.t(s, 'Le calque du français (« pour » = //voor//) est l’erreur n° 1 : vérifiez s’il y a un **verbe** après « pour ».', 0.6, 6.3, 12.13, 0.45, { size: 15, color: 'accent6', align: 'center' });
  }

  // ---------------------------------------------------------------- 13 au passé
  {
    const s = d.page({ g: 13, tag: 'AU PASSÉ', title: 'Au passé : te et om … te ne bougent pas' });
    const R = [['Ik probeer te bellen.', [['Ik', 'n'], ['heb', 'c'], ['geprobeerd', 'n'], ['te', 't'], ['bellen.', 'i']], '//proberen// → participe (//geprobeerd//) + //te//'],
      ['Ik bel om een afspraak te maken.', [['Ik', 'n'], ['heb', 'c'], ['gebeld', 'n'], ['om', 'o'], ['een afspraak', 'n'], ['te', 't'], ['maken.', 'i']], 'la pince //om … te// ne change pas'],
      ['Ik wil komen.', [['Ik', 'n'], ['heb', 'c'], ['willen', 'n'], ['komen.', 'i']], 'sans //te// → double infinitif (voir le complément)']];
    R.forEach(([pres, perf, note], i) => {
      const y = 1.65 + i * 1.45;
      d.t(s, `//${pres}//`, 0.6, y, 12, 0.4, { size: 15, color: 'accent5' });
      const e = strip(s, 0.6, y + 0.45, perf, { size: 21, h: 0.66 });
      d.t(s, note, e + 0.3, y + 0.45, 12.73 - e - 0.3, 0.66, { size: 15, color: 'tx2', valign: 'middle' });
    });
    band(s, 'Au passé composé, le verbe principal se conjugue ; l’infinitif avec //te// reste **au bout**.', 6.15, 0.62, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 14 à retenir
  {
    const s = d.page({ g: 14, tag: 'À RETENIR', title: 'À retenir : te et om … te' });
    const T = [['①', 'SANS te', 'tx2', 'kunnen · moeten · willen · mogen · zullen · gaan · komen · blijven · laten · zien · horen', 'Ik wil {komen}.'], ['②', 'AVEC te', TE, 'proberen · beginnen · vergeten · beloven · hopen… · zitten te · niet hoeven te', 'Ik probeer {te komen}.'],
      ['③', 'OM … TE = pour', OM, 'le but · après un nom (zin, tijd) ou un adjectif (leuk, moeilijk)', 'Ik bel {om} een afspraak {te maken}.'], ['④', 'LA PINCE', 'accent6', 'tout entre om et te · te collé à l’infinitif · op te bellen · zonder / in plaats van / door … te', 'om de klant {op te bellen}']];
    const cw = (12.13 - 0.25) / 2;
    T.forEach(([n, h, c, sub, ex], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.25); const y = 1.6 + Math.floor(i / 2) * 2.45;
      d.rect(s, x, y, cw, 2.3, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.t(s, `**${n} ${h}**`, x + 0.2, y + 0.12, cw - 0.4, 0.5, { size: 20, color: c, valign: 'middle' });
      d.t(s, `//${sub}//`, x + 0.2, y + 0.65, cw - 0.4, 0.85, { size: 14, color: 'tx2', valign: 'middle' });
      rich(s, pc(ex, 20, c === 'tx2' ? INF : c), x + 0.2, y + 1.55, cw - 0.4, 0.6);
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 15 divider
  d.divider({ g: 15, tiles: [
    ['Te of geen te?', '★', 'FaFilter'], ['Waarom? Om … te!', '★★', 'FaBullseye'], ['Le puzzle de la pince', '★★', 'FaPuzzlePiece'], ['Le détective', '★★', 'FaSearch'],
    ['Mes bonnes résolutions', '★★', 'FaDice'], ['L’entretien d’embauche', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 16 ex1 te of geen te
  const ex1 = ['Ik wil morgen [[Ø]] komen.', 'Ik probeer morgen [[te]] komen.', 'We gaan vanavond [[Ø]] eten.', 'Vergeet niet de deur [[te]] sluiten.', 'Je hoeft niet [[te]] wachten.', 'Ik kan je niet [[Ø]] helpen.', 'Hij zit de hele avond [[te]] studeren.', 'Ik hoop je snel [[te]] zien.', 'Laat me even [[Ø]] nadenken.', 'Het begint [[te]] regenen.'];
  d.ex({ g: 16, title: 'Exercice 1 — Te of geen te?', stars: '★', instr: 'Complétez avec //te//, ou mettez Ø si le verbe n’en veut pas.' }, (s, mode, top) => {
    d.list(s, ex1.map((e) => `//${e}//`), mode, { y: top + 0.1, w: 12.13, h: 4.6, cols: 2, size: 20, gap: 16 });
    if (mode === 'a') d.t(s, 'Ø : modaux, //gaan//, //laten// → pas de //te//. N° 4 : //te sluiten//, mais //dicht te doen// (séparable).', 0.6, 6.4, 12.13, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 17 ex2 waarom? om … te!
  const ex2 = [['baguette-bread', 'Ik ga naar de bakker.', 'brood kopen', 'Ik ga naar de bakker [[om brood te kopen]].'], ['pill', 'Ik ga naar de apotheek.', 'medicijnen halen', 'Ik ga naar de apotheek [[om medicijnen te halen]].'], ['bank', 'Ik ga naar de bank.', 'geld afhalen', 'Ik ga naar de bank [[om geld af te halen]].'],
    ['station', 'Ik ga naar het station.', 'een ticket kopen', 'Ik ga naar het station [[om een ticket te kopen]].'], ['person-lifting-weights', 'Ik ga naar de fitness.', 'fit blijven', 'Ik ga naar de fitness [[om fit te blijven]].'], ['telephone-receiver', 'Ik bel de dokter.', 'een afspraak maken', 'Ik bel de dokter [[om een afspraak te maken]].']];
  d.ex({ g: 17, title: 'Exercice 2 — Waarom? Om … te!', stars: '★★', instr: 'Pourquoi ? Répondez avec //om … te// et l’indice.' }, (s, mode, top) => {
    const rh = (6.5 - top) / 3; const cw = (12.13 - 0.3) / 2;
    ex2.forEach(([ic, q, hint, a], i) => {
      const x = 0.6 + Math.floor(i / 3) * (cw + 0.3); const y = top + (i % 3) * rh;
      d.rect(s, x, y + 0.05, cw, rh - 0.14, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.15, y + 0.2, rh - 0.45, rh - 0.45);
      const tx = x + rh - 0.1;
      d.t(s, `**${i + 1}**  //${q}//  (${hint})`, tx, y + 0.12, cw - (tx - x) - 0.1, (rh - 0.2) * 0.42, { size: 15, valign: 'middle', color: 'tx2' });
      d.t(s, `//${a}//`, tx, y + 0.12 + (rh - 0.2) * 0.42, cw - (tx - x) - 0.1, (rh - 0.2) * 0.55, { size: 17, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 3 : //afhalen// est séparable → //af te halen//. N° 5 : //de fitness// (BE) = la salle de sport.', 0.6, 6.5, 12.13, 0.36, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 18 ex3 le puzzle de la pince
  const ex3 = [['Ik kom', [['je', 'n'], ['om', 'o'], ['helpen.', 'i'], ['te', 't']], [['om', 'o'], ['je', 'n'], ['te', 't'], ['helpen.', 'i']]],
    ['Hij vertrekt', [['te', 't'], ['zeggen.', 'i'], ['zonder', 'o'], ['iets', 'n']], [['zonder', 'o'], ['iets', 'n'], ['te', 't'], ['zeggen.', 'i']]],
    ['Ik heb geen tijd', [['te', 't'], ['op', 'p'], ['mijn bureau', 'n'], ['ruimen.', 'i'], ['om', 'o']], [['om', 'o'], ['mijn bureau', 'n'], ['op', 'p'], ['te', 't'], ['ruimen.', 'i']]],
    ['Het is belangrijk', [['te laat', 'n'], ['komen.', 'i'], ['om', 'o'], ['te', 't'], ['niet', 'n']], [['om', 'o'], ['niet', 'n'], ['te laat', 'n'], ['te', 't'], ['komen.', 'i']]]];
  d.ex({ g: 18, title: 'Exercice 3 — Le puzzle de la pince', stars: '★★', instr: 'Remettez les pièces dans l’ordre.' }, (s, mode, top) => {
    const rh = (6.6 - top) / 4;
    ex3.forEach(([start, shuf, ok], i) => {
      const y = top + i * rh;
      d.t(s, `**${i + 1}**`, 0.6, y, 0.4, 0.62, { size: 18, color: 'accent5', valign: 'middle' });
      const e = strip(s, 1.0, y, [[start, 'c']], { size: 19, h: 0.62 });
      if (mode === 'q') strip(s, e + 0.35, y, shuf, { size: 19, h: 0.62, gap: 0.25 });
      else pince(s, e + 0.15, y, ok, { size: 19, h: 0.62, depth: 0.2 });
    });
  });

  // ---------------------------------------------------------------- 19 ex4 détective
  d.ex({ g: 19, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Lucas écrit à sa collègue. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Lucas Peeters · Aan: Emma De Smet · Onderwerp: rapport', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Hoi Emma,//', '//Ik schrijf je {{voor te vragen}}++ om te vragen++ of je morgen tijd hebt. Ik probeer al de hele week {{je bellen}}++ je te bellen++, maar je neemt niet op. Ik wil graag {{te weten}}++ weten++ of het rapport klaar is. Zelf heb ik nog geen tijd gehad om de cijfers {{te nakijken}}++ na te kijken++. Je hoeft niet meteen te antwoorden, maar het is belangrijk om het voor vrijdag {{afmaken}}++ af te maken++.//', '//Groetjes,//', '//Lucas//'];
    d.t(s, txt, 0.95, top + 0.65, 8.3, h - 0.8, { size: 18, gap: 6, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Corrects : //of je morgen tijd hebt// (question indirecte) et //Je hoeft niet meteen te antwoorden//.', 9.9, top + 3.05, 2.83, 2.2, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 20 ex5 mes bonnes résolutions
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 5 — Mes bonnes résolutions', stars: '★★' });
    d.t(s, 'Tirez un début de phrase et une image, puis formulez une résolution pour l’année.', 0.6, 1.55, 12.13, 0.45, { size: 17, color: 'tx2' });
    const A = ['Ik probeer…', 'Ik ben van plan om…', 'Ik heb zin om…', 'Ik wil…', 'Het is belangrijk om…', 'Ik hoef niet meer…'];
    const B = [['person-running', 'sporten'], ['books', 'meer lezen'], ['mobile-phone', 'minder op mijn gsm zitten'], ['alarm-clock', 'vroeger opstaan'], ['green-salad', 'gezonder eten'], ['speech-balloon', 'Nederlands spreken'], ['bicycle', 'met de fiets gaan'], ['bed', 'meer slapen']];
    A.forEach((v, i) => {
      const x = 0.6 + (i % 2) * 2.75; const y = 2.2 + Math.floor(i / 2) * 0.95;
      d.rect(s, x, y, 2.6, 0.8, { fill: OM, line: null, radius: 0.12, rotate: [-2, 2, 1][i % 3] });
      d.t(s, `//**${v}**//`, x, y, 2.6, 0.8, { size: 16, color: 'bg1', align: 'center', valign: 'middle', rotate: [-2, 2, 1][i % 3] });
    });
    B.forEach(([ic, v], i) => {
      const x = 6.35 + (i % 4) * 1.6; const y = 2.2 + Math.floor(i / 4) * 1.45;
      d.rect(s, x, y, 1.5, 1.3, { fill: 'FBEDEB', line: INF, lw: 1.5, radius: 0.12, rotate: [2, -2, 1, -1][i % 4] });
      d.ill(s, ic, x + 0.47, y + 0.08, 0.56, 0.56);
      d.t(s, `//${v}//`, x + 0.05, y + 0.66, 1.4, 0.6, { size: 12, color: INF, align: 'center', valign: 'middle', bold: true });
    });
    d.rect(s, 0.6, 5.2, 12.13, 0.75, { fill: 'bg2', line: BORDER, radius: 0.12 });
    rich(s, [['Ik ben van plan ', { italic: true, fontSize: 18 }], ['om', { italic: true, bold: true, color: hexOf(OM), fontSize: 18 }], [' elke dag Nederlands ', { italic: true, fontSize: 18 }], ['te spreken', { italic: true, bold: true, color: hexOf(TE), fontSize: 18 }], ['. · Ik wil meer ', { italic: true, fontSize: 18 }], ['lezen', { italic: true, bold: true, color: hexOf(INF), fontSize: 18 }], ['.', { italic: true, fontSize: 18 }]], 0.85, 5.2, 11.7, 0.75);
    d.t(s, '**1 point** par phrase correcte (//te// ou pas //te//, la pince) · le groupe réagit : //Goed idee! · Dat is moeilijk om vol te houden!//', 0.6, 6.1, 12.13, 0.65, { size: 15 });
  }

  // ---------------------------------------------------------------- 21 ex6 entretien d'embauche
  d.roleplay({
    g: 21, title: 'Exercice 6 — L’entretien d’embauche',
    scenario: 'Entretien chez Maesbouw pour un poste d’assistant·e administratif·ve. Objectif : 6 infinitifs avec te ou om … te.',
    a: ['**A — recruteur·euse**', 'Demandez pourquoi B postule, ce qu’il·elle veut apprendre, ses projets.'],
    b: ['**B — candidat·e**', 'Répondez avec te et om … te. Posez une question à la fin.'],
    bank: '//Waarom solliciteert u? · Ik solliciteer om … te … · Ik ben van plan om … · Ik probeer … te … · Ik hoop … te … · Het is voor mij belangrijk om … · Ik heb zin om … · Ik ben klaar om te beginnen. · Ik hoef niet … te …//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.6, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'VACATURE · MAESBOUW', x + 0.15, y, w - 0.3, 0.6, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      d.ill(s, 'office-building', x + w / 2 - 0.4, y + 0.75, 0.8, 0.8);
      d.t(s, '**Administratief medewerker (m/v/x)**', x + 0.15, y + 1.65, w - 0.3, 0.6, { size: 15, align: 'center', color: 'tx2' });
      const L = ['offertes **opmaken**', 'klanten **opbellen**', 'facturen **nakijken**', 'Nederlands en Frans **spreken**'];
      L.forEach((t, i) => {
        d.t(s, `• //${t}//`, x + 0.25, y + 2.4 + i * 0.55, w - 0.4, 0.5, { size: 14, valign: 'middle' });
      });
      d.t(s, '//Start: zo snel mogelijk//', x + 0.15, y + h - 0.65, w - 0.3, 0.45, { size: 13, color: 'accent5', align: 'center' });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['//te// ou pas //te// ? //Ik probeer … komen. · Ik wil … komen.//', 'En néerlandais : //Je vais à la banque pour retirer de l’argent.//', 'Remettez dans l’ordre : //om · morgen · te · bellen · op · je//'],
    self: ['Trier', 'Exprimer un but', 'Construire'],
    teaser: { icon: 'FaBook', text: '**Défi de la semaine** : écrivez 3 résolutions avec //te// et 2 phrases avec //om … te// (pourquoi apprenez-vous le néerlandais ?).' },
  });
}

module.exports = { meta, build };
