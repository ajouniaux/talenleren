// Ik heb moeten werken — Le double infinitif (complément A2–B1)
const { BORDER, plain, HEX, PURPLE } = require('../lib');

const meta = {
  n: 'D', slug: 'Dubbele_infinitief', title: 'Ik heb moeten werken — Le double infinitif', short: 'Le double infinitif',
  template: 'dubbele_infinitief.md', file: 'Dubbele_infinitief_Le_double_infinitif.pptx',
  docTitle: 'Ik heb moeten werken — Le double infinitif',
  foot: 'Néerlandais · A2–B1 · Le double infinitif',
};

// code couleur : verbe conjugué = locomotive (bleu marine) · verbe pilote = orange · verbe d'action = rouge
const CJ = 'tx2'; const PI = 'accent1'; const AC = 'accent6';
const INK = '17375E';
const hexOf = (c) => (c === 'purple' ? PURPLE : c === 'tx2' ? INK : HEX[c] || c);
// les familles qui déclenchent le double infinitif
const FAM = {
  MOD: { c: 'accent2', name: 'les modaux', verbs: 'moeten · kunnen · willen · mogen' },
  LAT: { c: 'accent4', name: 'laten', verbs: 'laten (faire faire)' },
  GKB: { c: 'accent3', name: 'gaan · komen · blijven', verbs: 'gaan · komen · blijven' },
  ZSL: { c: 'purple', name: 'zitten · staan · liggen · lopen', verbs: 'zitten · staan · liggen · lopen' },
  ZHV: { c: '0E7C86', name: 'zien · horen · voelen', verbs: 'zien · horen · voelen' },
};

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  // bande-phrase : n neutre · c conjugué · p pilote · a action · e petit mot sans cadre · x participe barré
  const ST = {
    n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
    c: { fill: CJ, line: null, color: 'bg1', bold: true },
    p: { fill: PI, line: null, color: 'bg1', bold: true },
    a: { fill: 'FBEDEB', line: AC, lw: 2, color: AC, bold: true },
    e: { fill: null, line: null, color: 'accent5', bold: true },
    x: { fill: 'FFFFFF', line: 'accent5', lw: 1.25, dash: 'dash', color: 'accent5', bold: false },
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
  // le train : roues sous les verbes, cheminée sur la locomotive, attelage entre wagons, rails
  const train = (s, x, y, parts, o = {}) => {
    const h = o.h || 0.66;
    const end = strip(s, x, y, parts, o);
    const pos = strip.pos;
    d.rect(s, x - 0.1, y + h + 0.17, end - x + 0.2, 0.05, { fill: '8A96A8', line: null, radius: 0 });
    pos.forEach(([px, w, ty], i) => {
      if (!['c', 'p', 'a'].includes(ty)) return;
      [0.22, 0.78].forEach((f) => d.oval(s, px + w * f - 0.08, y + h + 0.01, 0.16, 0.16, { fill: '1B2333' }));
      if (ty === 'c') d.rect(s, px + 0.12, y - 0.22, 0.16, 0.24, { fill: CJ, line: null, radius: 0 });
      const nx = pos[i + 1];
      if (nx && ['c', 'p', 'a'].includes(nx[2]) && nx[0] - (px + w) < 0.2) d.line(s, px + w, y + h * 0.75, nx[0], y + h * 0.75, { color: '1B2333', lw: 2.5, arrow: false });
    });
    return end;
  };
  const rich = (s, segs, x, y, w, h, o = {}) => s.addText(segs.map(([text, so]) => ({ text, options: so })), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || 'tx1', align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true,
  });
  // phrase au passé : le groupe {…} en couleur
  const pc = (str, size, c = PI) => str.split(/(\{[^}]+\})/).filter(Boolean).map((t) => (t.startsWith('{')
    ? [t.slice(1, -1), { bold: true, italic: true, color: hexOf(c), fontSize: size }]
    : [t, { italic: true, fontSize: size }]));

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'COMPLÉMENT · A2–B1', title: 'Ik heb moeten werken', sub: 'Le double infinitif', line: 'gemoeten ? Non : moeten !',
    visual: (s) => {
      d.rect(s, 7.2, 1.2, 5.75, 4.1, { fill: 'FFFFFF', line: null, radius: 0.16 });
      d.ill(s, 'locomotive', 7.9, 1.35, 1.0, 1.0);
      d.ill(s, 'railway-car', 8.95, 1.35, 1.0, 1.0);
      d.ill(s, 'railway-car', 10.0, 1.35, 1.0, 1.0);
      d.t(s, '✗', 7.3, 2.65, 0.55, 0.62, { size: 28, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
      strip(s, 7.9, 2.65, [['Ik', 'n'], ['heb', 'c'], ['gemoeten', 'x']], { size: 19, h: 0.62 });
      d.t(s, '✓', 7.3, 3.8, 0.55, 0.62, { size: 28, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
      train(s, 7.9, 3.8, [['Ik', 'n'], ['heb', 'c'], ['moeten', 'p'], ['werken.', 'a']], { size: 19, h: 0.62 });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaEye', h: 'Reconnaître', t: 'Je reconnais le double infinitif : Ik heb moeten werken.', color: 'accent2' },
      { icon: 'FaCogs', h: 'Former', t: 'Je raconte au passé avec moeten, kunnen, laten, gaan…', color: 'accent1' },
      { icon: 'FaComments', h: 'Utiliser', t: 'Je m’excuse et j’exprime un regret : Ik had moeten bellen.', color: 'accent3' },
    ],
    band: 'Un verbe + un infinitif au présent → deux infinitifs au passé composé.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Vandaag… gisteren?' });
    const P = [['briefcase', 'Vandaag **moet** ik werken.', 'Gisteren **heb** ik ook…'], ['no-entry', 'Vandaag **kan** ik niet komen.', 'Gisteren **heb** ik ook niet…'], ['person-swimming', 'Vandaag **ga** ik zwemmen.', 'Gisteren **ben** ik ook…']];
    const w = (12.13 - 2 * 0.25) / 3;
    P.forEach(([il, a, b], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.65, w, 4.35, { fill: 'FFFFFF', line: 'accent2', lw: 2, radius: 0.12, shadow: true });
      d.ill(s, il, x + w / 2 - 0.65, 1.85, 1.3, 1.3);
      d.t(s, `//${a}//`, x + 0.2, 3.3, w - 0.4, 0.6, { size: 19, align: 'center', valign: 'middle' });
      d.t(s, '⬇', x, 3.9, w, 0.45, { size: 20, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `//${b}//`, x + 0.2, 4.35, w - 0.4, 0.55, { size: 19, align: 'center', valign: 'middle' });
      d.rect(s, x + 0.5, 5.05, w - 1.0, 0.7, { fill: 'FFFFFF', line: 'accent1', lw: 1.75, dash: 'dash', radius: 0.12 });
      d.t(s, '**… ?**', x + 0.5, 5.05, w - 1.0, 0.7, { size: 22, color: 'accent1', align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 6.15, 12.13, 0.65, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.75, 6.2, 0.55, 0.55);
    d.t(s, 'En français : //j’ai **dû** travailler// (un participe). Et en néerlandais : //ik heb **gemoeten** werken// ?', 1.45, 6.15, 11.1, 0.65, { size: 17, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 4 le principe (D1)
  {
    const s = d.page({ g: 4, tag: 'LE PRINCIPE', title: 'L’infinitif remplace le participe' });
    d.flag(s, 'fr', 0.6, 1.88, 0.6);
    const fe = strip(s, 1.4, 1.75, [['J’ai', 'c'], ['dû', 'p'], ['travailler.', 'a']], { size: 24 });
    d.t(s, '← un participe', fe + 0.2, 1.75, 2.3, 0.66, { size: 16, color: 'accent5', valign: 'middle' });
    d.flag(s, 'nl', 0.6, 3.08, 0.6);
    strip(s, 1.4, 2.95, [['Ik', 'n'], ['heb', 'c'], ['gemoeten', 'x'], ['werken.', 'a']], { size: 24 });
    const gx = strip.pos[2];
    d.t(s, '✗', strip.pos[3][0] + strip.pos[3][1] + 0.15, 2.95, 0.6, 0.66, { size: 30, bold: true, color: 'accent6', valign: 'middle' });
    d.line(s, gx[0] + gx[1] / 2, 3.66, gx[0] + gx[1] / 2, 4.36, { color: hexOf(PI), lw: 3 });
    train(s, 1.4, 4.4, [['Ik', 'n'], ['heb', 'c'], ['moeten', 'p'], ['werken.', 'a']], { size: 24 });
    const e = strip.pos[3][0] + strip.pos[3][1];
    d.t(s, '✓', e + 0.15, 4.4, 0.6, 0.66, { size: 30, bold: true, color: 'accent3', valign: 'middle' });
    d.t(s, '2 infinitifs !', e + 0.75, 4.4, 2.6, 0.66, { size: 18, bold: true, color: PI, valign: 'middle' });
    // le nom du procédé
    d.rect(s, 8.7, 1.65, 4.03, 2.55, { fill: 'FDF1E6', line: PI, lw: 1.75, radius: 0.12 });
    d.t(s, ['**Le nom du procédé**', '//de **dubbele infinitief**//', 'le double infinitif', '', 'en grammaire : //infinitivus pro participio// (IPP) = « l’infinitif à la place du participe »'], 8.9, 1.75, 3.65, 2.35, { size: 15, gap: 2, valign: 'middle' });
    band(s, 'Au passé composé, quand un verbe comme //moeten// est suivi d’un infinitif, il ne prend **pas** la forme //ge-…// : il reste **à l’infinitif**.', 5.75, 0.95, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 5 le train des verbes (D2)
  {
    const s = d.page({ g: 5, tag: 'LE PRINCIPE', title: 'Le train des verbes' });
    d.t(s, '**PHRASE PRINCIPALE** : la locomotive en 2e place, les wagons au bout', 0.6, 1.6, 12, 0.4, { size: 15, color: 'tx2' });
    train(s, 0.6, 2.25, [['Ik', 'n'], ['heb', 'c'], ['gisteren lang', 'n'], ['moeten', 'p'], ['werken.', 'a']], { size: 26, h: 0.78 });
    const P = strip.pos;
    [['locomotive', 1, CJ], ['wagon 1', 3, PI], ['wagon 2', 4, AC]].forEach(([t, i, c]) => d.t(s, t, P[i][0] - 0.2, 3.35, P[i][1] + 0.4, 0.35, { size: 13, bold: true, color: c, align: 'center' }));
    d.t(s, '**SUBORDONNÉE** : tout le train va au bout, locomotive en tête', 0.6, 3.95, 12, 0.4, { size: 15, color: 'tx2' });
    train(s, 0.6, 4.6, [['…, omdat ik', 'n'], ['gisteren lang', 'n'], ['heb', 'c'], ['moeten', 'p'], ['werken.', 'a']], { size: 26, h: 0.78 });
    d.ill(s, 'locomotive', 11.3, 4.45, 1.2, 1.2);
    band(s, '**locomotive** = le verbe conjugué · **wagon 1** = le verbe pilote (//moeten//) · **wagon 2** = l’action (//werken//). L’ordre des wagons ne change pas.', 6.0, 0.8, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 6 les familles (D3)
  {
    const s = d.page({ g: 6, tag: 'LES FAMILLES', title: 'Quels verbes déclenchent le double infinitif ?' });
    const T = [['MOD', ['flexed-biceps', 'red-heart'], 'Ik heb moeten werken.'], ['LAT', ['wrench'], 'Ik heb mijn auto laten repareren.'], ['GKB', ['person-walking'], 'Ik ben gaan zwemmen.'], ['ZSL', ['chair'], 'Ik heb zitten lezen.'], ['ZHV', ['eyes', 'ear'], 'Ik heb hem zien vertrekken.']];
    const tw = (12.13 - 4 * 0.18) / 5;
    T.forEach(([k, ics, ex], i) => {
      const F = FAM[k]; const x = 0.6 + i * (tw + 0.18);
      d.rect(s, x, 1.65, tw, 4.1, { fill: 'FFFFFF', line: F.c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.65, tw, 0.5, { fill: F.c, line: null, radius: 0.12 });
      d.t(s, `**${i + 1}**`, x, 1.65, tw, 0.5, { size: 18, color: 'bg1', align: 'center', valign: 'middle' });
      const z = 0.95; const iw = ics.length * z + (ics.length - 1) * 0.1;
      ics.forEach((ic, j) => d.ill(s, ic, x + (tw - iw) / 2 + j * (z + 0.1), 2.3, z, z));
      d.t(s, `**${F.name}**`, x + 0.1, 3.35, tw - 0.2, 0.75, { size: 17, color: F.c, align: 'center', valign: 'middle' });
      d.t(s, `//${ex}//`, x + 0.12, 4.2, tw - 0.24, 1.3, { size: 15, align: 'center', valign: 'middle' });
    });
    band(s, 'Au présent, ces verbes se construisent **sans te** : //ik moet werken · ik ga zwemmen · ik laat mijn auto repareren// (sauf //zitten · staan · liggen · lopen// : //ik zit **te** lezen//, et ce //te// disparaît au passé).', 5.95, 0.85, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 7–11 une famille par diapo
  const FAMS = [
    ['MOD', 'Les modaux : moeten, kunnen, willen, mogen', [['Ik', 'n'], ['moet', 'c'], ['werken.', 'a']], [['Ik', 'n'], ['heb', 'c'], ['moeten', 'p'], ['werken.', 'a']], 'gemoeten',
      [['briefcase', 'Ik moet lang werken.', 'Ik heb lang {moeten werken}.', 'j’ai dû travailler longtemps'], ['no-entry', 'Ik kan niet komen.', 'Ik heb niet {kunnen komen}.', 'je n’ai pas pu venir'], ['handshake', 'Ik wil helpen.', 'Ik heb {willen helpen}.', 'j’ai voulu aider'], ['door', 'Ik mag vroeg vertrekken.', 'Ik heb vroeg {mogen vertrekken}.', 'j’ai pu partir tôt']],
      'Auxiliaire : **hebben**, même avec un verbe de mouvement : //Ik **heb** naar huis moeten gaan.// (En Belgique, aussi : //Ik **ben** naar huis moeten gaan.//)'],
    ['LAT', 'laten : faire faire', [['Ik', 'n'], ['laat', 'c'], ['het', 'n'], ['repareren.', 'a']], [['Ik', 'n'], ['heb', 'c'], ['het', 'n'], ['laten', 'p'], ['repareren.', 'a']], 'gelaten',
      [['automobile', 'Ik laat mijn auto repareren.', 'Ik heb mijn auto {laten repareren}.', 'j’ai fait réparer ma voiture'], ['person-getting-haircut', 'Ze laat haar haar knippen.', 'Ze heeft haar haar {laten knippen}.', 'elle s’est fait couper les cheveux'], ['hourglass-not-done', 'Ik laat de klant wachten.', 'Ik heb de klant {laten wachten}.', 'j’ai fait attendre le client'], ['mobile-phone', 'Ik laat mijn gsm vallen.', 'Ik heb mijn gsm {laten vallen}.', 'j’ai laissé tomber mon GSM']],
      '//laten// + infinitif = **faire faire** ou **laisser faire**. Au passé : //laten//, jamais //gelaten// devant un infinitif.'],
    ['GKB', 'gaan, komen, blijven : avec zijn !', [['Ik', 'n'], ['ga', 'c'], ['zwemmen.', 'a']], [['Ik', 'n'], ['ben', 'c'], ['gaan', 'p'], ['zwemmen.', 'a']], 'gegaan',
      [['person-swimming', 'Ik ga zwemmen.', 'Ik ben {gaan zwemmen}.', 'je suis allé·e nager'], ['fork-and-knife-with-plate', 'Ze komen eten.', 'Ze zijn {komen eten}.', 'ils / elles sont venu·es manger'], ['bed', 'Hij blijft slapen.', 'Hij is {blijven slapen}.', 'il est resté dormir'], ['shopping-cart', 'We gaan winkelen.', 'We zijn {gaan winkelen}.', 'nous sommes allé·es faire du shopping']],
      'Auxiliaire : **zijn**, comme pour //gaan, komen, blijven// seuls : //ik ben gegaan → ik ben gaan zwemmen//.'],
    ['ZSL', 'zitten, staan, liggen, lopen : le te disparaît', [['Ik', 'n'], ['zit', 'c'], ['te', 'e'], ['lezen.', 'a']], [['Ik', 'n'], ['heb', 'c'], ['zitten', 'p'], ['lezen.', 'a']], 'gezeten',
      [['books', 'Ik zit te lezen.', 'Ik heb {zitten lezen}.', 'j’étais (assis·e) en train de lire'], ['cooking', 'Ze staat te koken.', 'Ze heeft {staan koken}.', 'elle était (debout) en train de cuisiner'], ['sleeping-face', 'Hij ligt te slapen.', 'Hij heeft {liggen slapen}.', 'il était (couché) en train de dormir'], ['magnifying-glass-tilted-left', 'Ik loop te zoeken.', 'Ik heb de hele dag {lopen zoeken}.', 'j’ai passé la journée à chercher']],
      'Au présent : //zitten **te** lezen// (M17). Au passé : //heb zitten lezen//, **sans te**. Auxiliaire : **hebben**.'],
    ['ZHV', 'zien, horen, voelen : la perception', [['Ik', 'n'], ['zie', 'c'], ['hem', 'n'], ['vertrekken.', 'a']], [['Ik', 'n'], ['heb', 'c'], ['hem', 'n'], ['zien', 'p'], ['vertrekken.', 'a']], 'gezien',
      [['eyes', 'Ik zie hem vertrekken.', 'Ik heb hem {zien vertrekken}.', 'je l’ai vu partir'], ['woman-singer', 'Ik hoor haar zingen.', 'Ik heb haar {horen zingen}.', 'je l’ai entendue chanter'], ['vibration-mode', 'Ik voel de grond trillen.', 'Ik heb de grond {voelen trillen}.', 'j’ai senti le sol trembler']],
      'Même construction qu’en français, mais au passé : //je l’ai **vu** partir// → //ik heb hem **zien** vertrekken// (et pas //gezien//).'],
  ];
  d.section('Les cinq familles');
  FAMS.forEach(([k, title, pres, perf, ghost, rows, note], i) => {
    const F = FAM[k]; const c = F.c;
    const s = d.page({ g: 7 + i, tag: `FAMILLE ${i + 1} / 5`, tagColor: c, title });
    // le schéma : présent → passé composé
    d.rect(s, 0.6, 1.6, 5.85, 4.45, { fill: c, tr: 90, line: c, lw: 1.5, radius: 0.12 });
    d.t(s, '**PRÉSENT**', 0.8, 1.7, 3, 0.35, { size: 12, color: c, cs: 1 });
    strip(s, 0.8, 2.1, pres, { size: 16, h: 0.58 });
    d.t(s, '⬇', 0.8, 2.75, 5.45, 0.5, { size: 22, color: 'accent5', align: 'center', valign: 'middle' });
    d.t(s, '**PASSÉ COMPOSÉ**', 0.8, 3.25, 3.5, 0.35, { size: 12, color: c, cs: 1 });
    d.t(s, `pas {{${ghost}}} !`, 3.7, 3.25, 2.55, 0.35, { size: 13, color: 'accent6', align: 'right' });
    train(s, 0.8, 3.75, perf, { size: 16, h: 0.58 });
    d.t(s, note, 0.8, 4.75, 5.5, 1.2, { size: 14, color: 'tx1', valign: 'middle' });
    // les exemples
    const rh = Math.min(1.25, (5.2 - 0.12 * (rows.length - 1)) / rows.length);
    rows.forEach(([ic, a, b, fr], j) => {
      const x = 6.7; const y = 1.6 + j * (rh + 0.12); const w = 6.03;
      d.rect(s, x, y, w, rh, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1, shadow: true });
      d.rect(s, x, y, 0.12, rh, { fill: c, line: null, radius: 0 });
      d.ill(s, ic, x + 0.28, y + (rh - 0.85) / 2, 0.85, 0.85);
      d.t(s, `//${a}//`, x + 1.3, y + 0.06, w - 1.45, rh * 0.3, { size: 14, color: 'accent5', valign: 'middle' });
      rich(s, pc(b, 18), x + 1.3, y + rh * 0.3, w - 1.45, rh * 0.42);
      d.t(s, fr, x + 1.3, y + rh * 0.72, w - 1.45, rh * 0.26, { size: 13, italic: true, color: 'tx2', valign: 'middle' });
    });
    if (rows.length < 4) d.t(s, 'Plus rare, mais possible aussi avec //helpen// et //leren// : //Ik heb hem **helpen** verhuizen.//', 6.7, 1.6 + 3 * (rh + 0.12) + 0.1, 6.03, 0.6, { size: 14, color: 'accent5', valign: 'middle' });
  });

  // ---------------------------------------------------------------- 12 hebben ou zijn (D4)
  d.section('Les pièges');
  {
    const s = d.page({ g: 12, tag: 'HEBBEN OU ZIJN ?', title: 'Le premier wagon choisit la locomotive' });
    train(s, 0.6, 2.05, [['Ik', 'n'], ['heb', 'c'], ['naar huis', 'n'], ['moeten', 'p'], ['gaan.', 'a']], { size: 24, h: 0.72 });
    let P = strip.pos;
    d.curve(s, P[3][0] + P[3][1] / 2, 2.0, P[1][0] + P[1][1] / 2, 2.0, { color: hexOf(PI), lw: 3, h: 0.42, dir: -1 });
    d.t(s, '//moeten// → **hebben**', 0.6, 3.05, 6, 0.42, { size: 18, color: 'tx2' });
    train(s, 0.6, 4.0, [['Ik', 'n'], ['ben', 'c'], ['gaan', 'p'], ['zwemmen.', 'a']], { size: 24, h: 0.72 });
    P = strip.pos;
    d.curve(s, P[2][0] + P[2][1] / 2, 3.95, P[1][0] + P[1][1] / 2, 3.95, { color: hexOf(PI), lw: 3, h: 0.42, dir: -1 });
    d.t(s, '//gaan// → **zijn**', 0.6, 5.0, 6, 0.42, { size: 18, color: 'tx2' });
    d.rect(s, 9.0, 1.6, 3.73, 3.4, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.t(s, ['**HEBBEN**', '//moeten · kunnen · willen · mogen · laten · zitten · staan · liggen · lopen · zien · horen · voelen//', '', '**ZIJN**', '//gaan · komen · blijven//'], 9.15, 1.7, 3.45, 3.2, { size: 15, gap: 3, valign: 'middle' });
    band(s, ['Ce n’est pas l’action (//gaan//) qui décide, mais le **premier verbe** après l’auxiliaire : //moeten// → //hebben//.', '(En Belgique, //ben// est aussi admis : //Ik ben naar huis moeten gaan.//)'], 5.75, 0.95, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 13 seul ou accompagné
  {
    const s = d.page({ g: 13, tag: 'PIÈGE', title: 'Seul : participe · avec un infinitif : infinitif' });
    const W = (12.13 - 0.3) / 2;
    [['bust-in-silhouette', 'SEUL → PARTICIPE (ge-)', 'accent5', 'E6EBF2', [['Ik heb het niet {gekund}.', 'je n’ai pas pu'], ['Dat heb ik altijd {gewild}.', 'je l’ai toujours voulu'], ['Ik heb hem altijd {gemogen}.', 'je l’ai toujours bien aimé'], ['Ik heb het zo {gelaten}.', 'je l’ai laissé comme ça']]],
      ['busts-in-silhouette', '+ INFINITIF → INFINITIF', PI, 'FDF1E6', [['Ik heb het niet {kunnen doen}.', 'je n’ai pas pu le faire'], ['Dat heb ik altijd {willen doen}.', 'j’ai toujours voulu le faire'], ['Ik heb vroeg {mogen vertrekken}.', 'j’ai pu partir tôt'], ['Ik heb het {laten doen}.', 'je l’ai fait faire']]]].forEach(([ic, lab, c, bg, L], j) => {
      const x = 0.6 + j * (W + 0.3);
      d.rect(s, x, 1.6, W, 4.6, { fill: bg, line: c, lw: 2, radius: 0.12 });
      d.ill(s, ic, x + 0.2, 1.72, 0.8, 0.8);
      d.t(s, `**${lab}**`, x + 1.15, 1.72, W - 1.3, 0.8, { size: 19, color: c, valign: 'middle' });
      L.forEach(([ex, fr], i) => {
        const y = 2.7 + i * 0.86;
        d.rect(s, x + 0.2, y, W - 0.4, 0.76, { fill: 'FFFFFF', line: null, radius: 0.08 });
        rich(s, pc(ex, 18, j ? PI : 'accent5'), x + 0.35, y + 0.02, W - 0.7, 0.42);
        d.t(s, fr, x + 0.35, y + 0.42, W - 0.7, 0.3, { size: 12, italic: true, color: 'accent5', valign: 'middle' });
      });
    });
    d.t(s, '//mogen// seul = **bien aimer** quelqu’un : //Ik mag hem.// → //Ik heb hem altijd **gemogen**.//', 0.6, 6.35, 12.13, 0.4, { size: 15, color: 'tx2', align: 'center' });
  }

  // ---------------------------------------------------------------- 14 avec te
  {
    const s = d.page({ g: 14, tag: 'PIÈGE', title: 'Avec te : on garde le participe' });
    const W = (12.13 - 0.3) / 2;
    d.rect(s, 0.6, 1.6, W, 4.55, { fill: 'E6EBF2', line: 'accent5', lw: 2, radius: 0.12 });
    d.t(s, '**VERBE + te + INFINITIF → PARTICIPE**', 0.8, 1.7, W - 0.4, 0.5, { size: 17, color: 'tx2', valign: 'middle' });
    [['handshake', 'Ik heb {beloofd} te komen.', 'beloven'], ['telephone-receiver', 'Ik heb {geprobeerd} je te bellen.', 'proberen'], ['thinking-face', 'We hebben {besloten} te verhuizen.', 'beslissen'], ['no-entry', 'Hij heeft {geweigerd} te betalen.', 'weigeren']].forEach(([ic, ex, v], i) => {
      const y = 2.35 + i * 0.93;
      d.rect(s, 0.8, y, W - 0.4, 0.82, { fill: 'FFFFFF', line: null, radius: 0.08 });
      d.ill(s, ic, 0.92, y + 0.08, 0.66, 0.66);
      rich(s, pc(ex, 17, 'tx2'), 1.75, y + 0.02, W - 1.6, 0.48);
      d.t(s, `//${v}//`, 1.75, y + 0.48, W - 1.6, 0.3, { size: 12, color: 'accent5', valign: 'middle' });
    });
    const x2 = 0.6 + W + 0.3;
    d.rect(s, x2, 1.6, W, 4.55, { fill: 'F1ECF7', line: 'purple', lw: 2, radius: 0.12 });
    d.t(s, '**EXCEPTION : zitten · staan · liggen · lopen**', x2 + 0.2, 1.7, W - 0.4, 0.5, { size: 17, color: 'purple', valign: 'middle' });
    strip(s, x2 + 0.3, 2.45, [['Ik', 'n'], ['zit', 'c'], ['te', 'e'], ['wachten.', 'a']], { size: 20, h: 0.6 });
    d.t(s, '⬇', x2, 3.1, W, 0.45, { size: 22, color: 'accent5', align: 'center', valign: 'middle' });
    train(s, x2 + 0.3, 3.6, [['Ik', 'n'], ['heb', 'c'], ['zitten', 'p'], ['wachten.', 'a']], { size: 20, h: 0.6 });
    d.t(s, 'le //te// disparaît, double infinitif', x2 + 0.3, 4.55, W - 0.6, 0.4, { size: 15, bold: true, color: 'purple' });
    d.t(s, '//Ik heb een uur **zitten wachten**.//', x2 + 0.3, 5.0, W - 0.6, 0.45, { size: 17 });
    band(s, 'Règle simple : un //te// au présent → **participe** au passé (sauf //zitten, staan, liggen, lopen//).', 6.3, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 15 séparables et subordonnée (B1)
  {
    const s = d.page({ g: 15, tag: 'B1', tagColor: 'purple', title: 'Avec un verbe séparable et dans la subordonnée' });
    d.t(s, '**VERBE SÉPARABLE** : deux ordres corrects', 0.6, 1.6, 12, 0.4, { size: 15, color: 'tx2' });
    train(s, 0.6, 2.15, [['Ik heb hem', 'n'], ['moeten', 'p'], ['opbellen.', 'a']], { size: 20, h: 0.62 });
    let e = strip.pos[2][0] + strip.pos[2][1];
    d.t(s, '=', e + 0.1, 2.15, 0.5, 0.62, { size: 26, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
    strip(s, e + 0.7, 2.15, [['Ik heb hem', 'n'], ['op', 'e'], ['moeten', 'p'], ['bellen.', 'a']], { size: 20, h: 0.62 });
    d.t(s, '**SUBORDONNÉE** : le verbe conjugué se place en tête du train', 0.6, 3.35, 12, 0.4, { size: 15, color: 'tx2' });
    train(s, 0.6, 3.9, [['…, omdat ik', 'n'], ['niet', 'n'], ['heb', 'c'], ['kunnen', 'p'], ['komen.', 'a']], { size: 21, h: 0.62 });
    train(s, 0.6, 5.05, [['…, dat ze', 'n'], ['is', 'c'], ['blijven', 'p'], ['slapen.', 'a']], { size: 21, h: 0.62 });
    e = strip.pos[3][0] + strip.pos[3][1];
    d.t(s, '//niet//, l’objet et les compléments restent **devant** le train.', 0.6, 5.95, 12.13, 0.4, { size: 15, color: 'tx2' });
    d.t(s, 'Même logique qu’avec //zal// : //…, dat ik je **zal opbellen**// (M11) = //…, dat ik je **op zal bellen**//.', 0.6, 6.38, 12.13, 0.4, { size: 15, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 16 les regrets (B1)
  {
    const s = d.page({ g: 16, tag: 'B1', tagColor: 'purple', title: 'Les regrets : had moeten, had kunnen' });
    let e = strip(s, 0.6, 1.75, [['had', 'c'], ['moeten', 'p'], ['+ inf.', 'n']], { size: 20, h: 0.66 });
    d.t(s, '= **aurais dû**', e + 0.15, 1.75, 1.9, 0.66, { size: 19, valign: 'middle', color: 'tx2' });
    e = strip(s, 6.85, 1.75, [['had', 'c'], ['kunnen', 'p'], ['+ inf.', 'n']], { size: 20, h: 0.66 });
    d.t(s, '= **aurais pu**', e + 0.15, 1.75, 1.9, 0.66, { size: 19, valign: 'middle', color: 'tx2' });
    const R = [['person-facepalming', 'Je had het {moeten zeggen}!', 'tu aurais dû le dire'], ['trophy', 'Ik had {kunnen winnen}.', 'j’aurais pu gagner'], ['alarm-clock', 'We hadden eerder {moeten vertrekken}.', 'nous aurions dû partir plus tôt'], ['no-entry', 'Dat had je niet {moeten doen}.', 'tu n’aurais pas dû faire ça']];
    const cw = (12.13 - 0.25) / 2;
    R.forEach(([ic, ex, fr], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.25); const y = 2.7 + Math.floor(i / 2) * 1.35;
      d.rect(s, x, y, cw, 1.2, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.18, y + 0.15, 0.9, 0.9);
      rich(s, pc(ex, 19), x + 1.25, y + 0.1, cw - 1.4, 0.6);
      d.t(s, fr, x + 1.25, y + 0.7, cw - 1.4, 0.4, { size: 14, italic: true, color: 'tx2', valign: 'middle' });
    });
    band(s, 'Ne pas confondre : //Je **zou** meer moeten slapen// = tu **devrais** · //Je **had** meer moeten slapen// = tu **aurais dû**.', 6.15, 0.65, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 17 à retenir
  {
    const s = d.page({ g: 17, tag: 'À RETENIR', title: 'À retenir : le double infinitif' });
    const T = [['①', 'L’infinitif remplace le participe', 'Ik heb {moeten werken}. (pas //gemoeten//)', 'accent2'], ['②', 'Cinq familles', 'modaux · laten · gaan / komen / blijven · zitten / staan / liggen / lopen · zien / horen / voelen', 'accent4'], ['③', 'Le premier wagon choisit', 'moeten → //heb// · gaan → //ben//', 'accent3'],
      ['④', 'Seul → participe', 'Ik heb het niet {gekund}.', 'accent5'], ['⑤', 'Avec te → participe', 'Ik heb {geprobeerd} te bellen. (sauf zitten…)', 'purple'], ['⑥', 'Les regrets', 'Ik had {moeten bellen}. = j’aurais dû appeler', 'accent1']];
    const cw = (12.13 - 2 * 0.2) / 3;
    T.forEach(([n, h, ex, c], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.2); const y = 1.6 + Math.floor(i / 3) * 2.45;
      d.rect(s, x, y, cw, 2.3, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.t(s, `**${n}**`, x + 0.15, y + 0.12, 0.5, 0.5, { size: 24, color: c });
      d.t(s, `**${h}**`, x + 0.7, y + 0.12, cw - 0.85, 0.6, { size: 17, color: c, valign: 'middle' });
      rich(s, pc(ex.replace(/\/\/([^/]+)\/\//g, '$1'), 16, c === 'accent5' ? 'accent5' : PI), x + 0.2, y + 0.85, cw - 0.4, 1.3, { valign: 'middle' });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 18 divider
  d.divider({ g: 18, tiles: [
    ['Au passé !', '★', 'FaHistory'], ['Hebben of zijn?', '★★', 'FaBalanceScale'], ['Participe ou infinitif ?', '★★', 'FaExchangeAlt'], ['Le détective', '★★', 'FaSearch'],
    ['Les regrets', '★★', 'FaRegSadTear'], ['Le jeu des excuses', '★★', 'FaDice'], ['Lundi matin', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 19 ex1 au passé
  const ex1 = [['briefcase', 'Ik moet lang werken.', 'Ik [[heb]] lang [[moeten werken]].'], ['no-entry', 'We kunnen niet komen.', 'We [[hebben]] niet [[kunnen komen]].'], ['person-swimming', 'Ze gaat zwemmen.', 'Ze [[is gaan zwemmen]].'], ['bicycle', 'Ik laat mijn fiets repareren.', 'Ik [[heb]] mijn fiets [[laten repareren]].'],
    ['telephone-receiver', 'Hij zit te bellen.', 'Hij [[heeft zitten bellen]].'], ['ear', 'Ik hoor de kinderen lachen.', 'Ik [[heb]] de kinderen [[horen lachen]].'], ['fork-and-knife-with-plate', 'Ze komen eten.', 'Ze [[zijn komen eten]].'], ['door', 'Je mag vroeg vertrekken.', 'Je [[hebt]] vroeg [[mogen vertrekken]].']];
  d.ex({ g: 19, title: 'Exercice 1 — Au passé !', stars: '★', instr: 'Mettez la phrase au passé composé.' }, (s, mode, top) => {
    const rh = (6.45 - top) / 4; const cw = (12.13 - 0.3) / 2;
    ex1.forEach(([ic, q, a], i) => {
      const x = 0.6 + Math.floor(i / 4) * (cw + 0.3); const y = top + (i % 4) * rh;
      d.rect(s, x, y + 0.04, cw, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.ill(s, ic, x + 0.1, y + 0.1, rh - 0.22, rh - 0.22);
      d.t(s, `**${i + 1}**  //${q}//`, x + rh, y + 0.06, cw - rh - 0.1, (rh - 0.1) * 0.45, { size: 15, color: 'accent5', valign: 'middle' });
      d.t(s, `//${a}//`, x + rh, y + 0.06 + (rh - 0.1) * 0.45, cw - rh - 0.1, (rh - 0.1) * 0.55, { size: 17, valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 20 ex2 hebben of zijn
  const ex2 = ['Ik [[ben]] gaan wandelen.', 'We [[hebben]] lang moeten wachten.', 'Hij [[is]] blijven slapen.', 'Ze [[heeft]] haar haar laten knippen.', 'Jullie [[zijn]] komen helpen.', 'Ik [[heb]] een uur zitten wachten.', 'Ze [[heeft]] niet kunnen slapen.', 'Ik [[heb]] naar huis moeten gaan.'];
  d.ex({ g: 20, title: 'Exercice 2 — Hebben of zijn?', stars: '★★', instr: 'Complétez avec la bonne forme de //hebben// ou //zijn//. Regardez le premier verbe du train !' }, (s, mode, top) => {
    d.list(s, ex2.map((e) => `//${e}//`), mode, { y: top + 0.15, w: 12.13, h: 4.3, cols: 2, size: 21, gap: 22 });
    if (mode === 'a') d.t(s, 'N° 7 : //ze// pluriel → //hebben//. N° 8 : //moeten// décide → //heb// (//ben// est aussi correct en Belgique).', 0.6, 6.35, 12.13, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 21 ex3 participe ou infinitif
  const ex3 = ['Ik heb het niet <<gekund>> / {{kunnen}}.', 'Ik heb het niet {{gekund}} / <<kunnen>> doen.', 'Dat heb ik altijd <<gewild>> / {{willen}}.', 'Ik heb <<geprobeerd>> / {{proberen}} je te bellen.', 'Ze heeft de hele dag {{gezeten}} / <<zitten>> studeren.', 'Ik heb mijn tas {{gelaten}} / <<laten>> vallen.', 'We hebben hem {{gezien}} / <<zien>> vertrekken.', 'Hij heeft <<beloofd>> / {{beloven}} te komen.'];
  d.ex({ g: 21, title: 'Exercice 3 — Participe ou infinitif ?', stars: '★★', instr: 'Choisissez la bonne forme. Seul ? Avec te ? Avec un infinitif ?' }, (s, mode, top) => {
    d.list(s, ex3.map((e) => `//${e}//`), mode, { y: top + 0.15, w: 12.13, h: 4.3, cols: 2, size: 19, gap: 22 });
    if (mode === 'a') d.t(s, 'N° 4 : //Ik heb je **proberen** te bellen// (//je// devant) est aussi correct, mais pas //Ik heb proberen je te bellen//.', 0.6, 6.35, 12.13, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 22 ex4 détective
  d.ex({ g: 22, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Tom s’excuse auprès de Lisa. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'E7F6EC', line: 'accent3', lw: 1.25, radius: 0.12, shadow: true });
    d.ill(s, 'mobile-phone', 0.75, top + 0.1, 0.5, 0.5);
    d.t(s, '**Tom** · vandaag 08:12', 1.35, top + 0.1, 6, 0.5, { size: 14, color: 'accent3', valign: 'middle' });
    const txt = ['//Hoi Lisa! Sorry dat ik gisteren niet op de vergadering was. Ik heb echt niet {{gekund komen}}++ kunnen komen++: mijn auto stond in panne en ik {{ben}}++ heb++ hem meteen laten repareren. Daarna {{heb}}++ ben++ ik met de kinderen gaan zwemmen, dat had ik beloofd. ’s Avonds heb ik nog twee uur {{zitten te werken}}++ zitten werken++ aan het verslag. Ik had je moeten bellen, sorry! Dat heb ik echt niet {{willen}}++ gewild++. Groetjes, Tom//'];
    d.t(s, txt, 0.95, top + 0.75, 8.4, h - 0.9, { size: 18, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Corrects : //laten repareren//, //gaan zwemmen//, //had je moeten bellen//. //Dat heb ik niet gewild// : //willen// est seul → participe.', 9.9, top + 3.05, 2.83, 2.3, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 23 ex5 les regrets
  const ex5 = [['alarm-clock', 'Je bent te laat.', 'eerder vertrekken', 'Je had eerder [[moeten vertrekken]].'], ['umbrella', 'Je bent helemaal nat.', 'een paraplu meenemen', 'Je had een paraplu [[moeten meenemen]].'], ['telephone-receiver', 'Ik wist het niet!', 'me bellen', 'Je had me [[kunnen bellen]].'],
    ['trophy', 'We hebben net niet gewonnen.', 'winnen', 'We hadden [[kunnen winnen]].'], ['face-with-thermometer', 'Hij is nog altijd ziek.', 'thuisblijven', 'Hij had thuis [[moeten blijven]].'], ['money-bag', 'Je hebt te veel betaald.', 'de prijzen vergelijken', 'Je had de prijzen [[moeten vergelijken]].']];
  d.ex({ g: 23, title: 'Exercice 5 — Les regrets', stars: '★★', instr: 'Réagissez avec //had moeten// (aurais dû) ou //had kunnen// (aurais pu).' }, (s, mode, top) => {
    const rh = (6.5 - top) / 3; const cw = (12.13 - 0.3) / 2;
    ex5.forEach(([ic, q, hint, a], i) => {
      const x = 0.6 + Math.floor(i / 3) * (cw + 0.3); const y = top + (i % 3) * rh;
      d.rect(s, x, y + 0.05, cw, rh - 0.14, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.15, y + 0.2, rh - 0.45, rh - 0.45);
      const tx = x + rh - 0.1;
      d.t(s, `**${i + 1}**  //${q}//  (${hint})`, tx, y + 0.12, cw - (tx - x) - 0.1, (rh - 0.2) * 0.42, { size: 15, valign: 'middle', color: 'tx2' });
      d.t(s, `//${a}//`, tx, y + 0.12 + (rh - 0.2) * 0.42, cw - (tx - x) - 0.1, (rh - 0.2) * 0.55, { size: 18, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'Aussi : n° 2 //mee moeten nemen// / //kunnen meenemen// · n° 3 //moeten bellen// · n° 4 //moeten winnen// · n° 5 //moeten thuisblijven// · n° 6 //kunnen vergelijken//', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 24 ex6 le jeu des excuses
  {
    const s = d.page({ g: 24, tag: 'JIJ NU !', title: 'Exercice 6 — Le jeu des excuses', stars: '★★' });
    d.t(s, '//Waarom was je er gisteren niet?// Tirez une carte orange et une carte rouge, puis inventez une excuse au passé.', 0.6, 1.55, 12.13, 0.5, { size: 17, color: 'tx2' });
    const A = ['moeten', 'niet kunnen', 'laten', 'gaan', 'blijven', 'zitten'];
    const B = [['automobile', 'repareren'], ['person-swimming', 'zwemmen'], ['bed', 'slapen'], ['dog', 'wandelen'], ['laptop', 'werken'], ['hourglass-not-done', 'wachten'], ['shopping-cart', 'winkelen'], ['cooking', 'koken']];
    A.forEach((v, i) => {
      const x = 0.6 + (i % 3) * 1.75; const y = 2.25 + Math.floor(i / 3) * 1.05;
      d.rect(s, x, y, 1.6, 0.85, { fill: PI, line: null, radius: 0.12, rotate: [-3, 2, -1][i % 3] });
      d.t(s, `//**${v}**//`, x, y, 1.6, 0.85, { size: 18, color: 'bg1', align: 'center', valign: 'middle', rotate: [-3, 2, -1][i % 3] });
    });
    B.forEach(([ic, v], i) => {
      const x = 6.2 + (i % 4) * 1.65; const y = 2.25 + Math.floor(i / 4) * 1.05;
      d.rect(s, x, y, 1.52, 0.92, { fill: 'FBEDEB', line: AC, lw: 1.75, radius: 0.12, rotate: [2, -2, 1, -1][i % 4] });
      d.ill(s, ic, x + 0.53, y + 0.06, 0.46, 0.46);
      d.t(s, `//**${v}**//`, x, y + 0.5, 1.52, 0.38, { size: 14, color: AC, align: 'center', valign: 'middle', rotate: [2, -2, 1, -1][i % 4] });
    });
    d.rect(s, 0.6, 4.6, 12.13, 1.0, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.ill(s, 'speech-balloon', 0.75, 4.72, 0.75, 0.75);
    rich(s, [['Sorry, ik heb mijn auto ', { italic: true, fontSize: 19 }], ['moeten laten repareren', { italic: true, bold: true, color: hexOf(PI), fontSize: 19 }], ['! · Ik ', { italic: true, fontSize: 19 }], ['ben', { italic: true, bold: true, color: hexOf(CJ), fontSize: 19 }], [' thuis ', { italic: true, fontSize: 19 }], ['blijven slapen', { italic: true, bold: true, color: hexOf(PI), fontSize: 19 }], ['.', { italic: true, fontSize: 19 }]], 1.65, 4.6, 10.9, 1.0);
    d.t(s, ['**1 point** par phrase correcte (bon auxiliaire, bon ordre) · **2 points** si l’excuse fait rire la classe.', 'Le groupe réagit : //Je had me kunnen bellen!//'], 0.6, 5.75, 12.13, 0.95, { size: 16, gap: 4 });
  }

  // ---------------------------------------------------------------- 25 ex7 lundi matin
  d.roleplay({
    g: 25, title: 'Exercice 7 — Lundi matin',
    scenario: 'Lundi matin chez Peeters & Co. Le rapport n’est pas prêt. Objectif : 5 doubles infinitifs.',
    a: ['**A — chef·fe d’équipe**', 'Demandez pourquoi le rapport n’est pas prêt et comment s’est passé le week-end. Réagissez.'],
    b: ['**B — collègue**', 'Expliquez et excusez-vous avec les notes du week-end. Proposez une solution.'],
    bank: '//Ik heb … moeten / kunnen / willen … · Ik heb … laten … · Ik ben … gaan / komen / blijven … · Ik heb … zitten … · Ik had … moeten … · Je had me kunnen bellen. · Geen probleem. · Kan het tegen woensdag?//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFF6C9', line: 'F4B400', lw: 1, radius: 0.04, shadow: true, rotate: 1 });
      d.t(s, '**Mijn weekend**', x + 0.2, y + 0.15, w - 0.4, 0.5, { size: 18, color: 'tx2' });
      const L = [['automobile', 'za: auto **laten** repareren'], ['person-swimming', 'za: met de kinderen **gaan** zwemmen'], ['hourglass-not-done', 'zo: 3 uur in de file **moeten** staan'], ['laptop', 'zo: niet **kunnen** werken (wifi!)'], ['bed', 'zo: bij mijn zus **blijven** slapen']];
      L.forEach(([ic, t], i) => {
        const yy = y + 0.8 + i * 0.85;
        d.ill(s, ic, x + 0.2, yy, 0.55, 0.55);
        d.t(s, `//${t}//`, x + 0.85, yy - 0.1, w - 1.0, 0.75, { size: 14, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 26 ticket
  d.ticket({
    g: 26,
    q: ['Au passé composé : //Ik moet werken.//', '//hebben// ou //zijn// ? //Ik … gaan zwemmen.//', 'En néerlandais : //J’aurais dû le dire.//'],
    self: ['Reconnaître', 'Former', 'Utiliser'],
    teaser: { icon: 'FaBook', text: '**Défi de la semaine** : racontez votre week-end en 5 phrases, avec 3 doubles infinitifs.' },
  });
}

module.exports = { meta, build };
