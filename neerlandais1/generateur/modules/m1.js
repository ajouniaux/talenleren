// Module 1 — Klanken · Long ou court ?
const { K, BORDER, GHOST } = require('../lib');

const meta = { n: 1, slug: 'Klanken', title: 'Klanken — Long ou court ?', short: 'Klanken', template: 'module_1_klanken.md' };

function build(d) {
  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Klanken', sub: 'Long ou court ?', line: 'man ≠ maan',
    visual: (s) => {
      [['MAN', 'p_man', K.short, 7.2], ['MAAN', null, K.long, 10.25]].forEach(([w, p, c, x]) => {
        d.rect(s, x, 1.7, 2.6, 3.6, { fill: 'FFFFFF', line: c, lw: 5, radius: 0.12, shadow: true });
        if (p) d.pic(s, p, x + 0.4, 1.95, 1.8, 2.1);
        else d.icon(s, 'FaMoon', 'accent3', x + 0.55, 2.1, 1.5);
        d.t(s, w, x, 4.25, 2.6, 0.8, { size: 36, bold: true, color: c, align: 'center', valign: 'middle', head: true });
      });
      d.oval(s, 9.58, 3.1, 0.6, 0.6, { fill: 'FFFFFF' });
      d.t(s, '≠', 9.58, 3.1, 0.6, 0.6, { size: 30, bold: true, color: 'accent1', align: 'center', valign: 'middle' });
      d.t(s, 'l’homme', 7.2, 5.4, 2.6, 0.4, { size: 16, italic: true, color: 'bg2', align: 'center' });
      d.t(s, 'la lune', 10.25, 5.4, 2.6, 0.4, { size: 16, italic: true, color: 'bg2', align: 'center' });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaHeadphones', h: 'Entendre', t: 'Je distingue un son **long** d’un son **court**.', color: 'accent2' },
      { icon: 'FaBookOpen', h: 'Lire', t: 'Je prononce correctement un mot que je n’ai **jamais vu**.', color: 'accent3' },
      { icon: 'FaPencilAlt', h: 'Écrire', t: 'Je sais pourquoi on écrit //katten// avec **deux t** et //bomen// avec **un seul o**.', color: 'accent4' },
    ],
    band: 'Cette règle servira dans les modules 3, 4 et 5 : //ik spreek · ik lees · de bomen//',
  });

  // ---------------------------------------------------------------- 3 alphabet
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Het alfabet — l’alphabet qui parle' });
    const cols = [['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O'], ['P', 'Q', 'R', 'S', 'T'], ['U', 'V', 'W', 'X', 'Y', 'Z', 'IJ']];
    const pron = { E: '« é »', G: '« ghé »', H: '« ha »', J: '« yé »', U: '« u »', W: '« wé »', IJ: '« è-i »' };
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    d.rect(s, 0.6, 1.65, 8.6, 5.2, { fill: 'bg2', line: BORDER });
    cols.forEach((c, ci) => c.forEach((L, ri) => {
      const x = 0.9 + ci * 1.68; const y = 1.8 + ri * 0.71;
      if (vowels.includes(L)) d.oval(s, x - 0.08, y + 0.02, 0.66, 0.6, { fill: null, line: 'tx2', lw: 2.5 });
      if (L === 'IJ') d.rect(s, x - 0.1, y + 0.03, 0.74, 0.58, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
      d.t(s, L, x - 0.08, y, 0.66, 0.64, { size: 28, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
      if (pron[L]) d.t(s, pron[L], x + 0.6, y + 0.12, 1.1, 0.42, { size: 14, bold: true, color: 'accent1', valign: 'middle' });
    }));
    d.card(s, 9.5, 1.65, 3.23, 2.4, { icon: 'FaStar', head: 'Les 5 voyelles', color: 'tx2', body: ['**A · E · I · O · U**', 'Elles font les sons **longs** ou **courts**.'] });
    d.card(s, 9.5, 4.25, 3.23, 2.6, { icon: 'FaComments', head: 'À vous !', color: 'accent1', body: ['//Mijn naam is…//', '**K – A – R – I – M**', 'Épelez votre prénom.'] });
  }

  // ---------------------------------------------------------------- 4 écoute (q then reveal)
  {
    const rows = [
      ['A', ['p_man', 'man', 'l’homme'], ['p_slaan', 'slaan', 'frapper']],
      ['E', ['p_fles', 'fles', 'la bouteille'], ['p_lezen', 'lezen', 'lire']],
      ['I', ['FaChair', 'zit', 'est assis'], ['FaEye', 'ziet', 'voit']],
      ['O', ['p_koppel', 'koppel', 'le couple'], ['p_lopen', 'lopen', 'marcher']],
      ['U', ['p_kus', 'kus', 'le bisou'], ['p_vuur', 'vuur', 'le feu']],
    ];
    for (const mode of ['q', 'a']) {
      const s = d.page({ g: 4, tag: 'PRONONCIATION', title: mode === 'q' ? 'Écoutez — même lettre, deux sons ?' : 'Écoutez — même lettre, deux sons !' }, mode === 'a');
      const rh = 1.0; const top = 1.68;
      rows.forEach(([L, a, b], i) => {
        const y = top + i * (rh + 0.04);
        d.num(s, L, 0.6, y + 0.17, 0.66, 'tx2', 22);
        d.line(s, 1.28, y + 0.5, 1.7, y + 0.5, { color: BORDER, lw: 1.25 });
        d.line(s, 6.47, y + 0.5, 6.9, y + 0.5, { color: BORDER, lw: 1.25 });
        [[a, K.short, 'COURT', 1.75], [b, K.long, 'LONG', 6.95]].forEach(([[p, w, fr], c, lab, x]) => {
          d.rect(s, x, y + 0.04, 4.7, rh - 0.08, { fill: 'bg1', line: mode === 'q' ? BORDER : c, lw: mode === 'q' ? 1.25 : 3 });
          if (p.startsWith('Fa')) d.icon(s, p, 'accent3', x + 0.2, y + 0.15, 0.7);
          else d.pic(s, p, x + 0.12, y + 0.1, 0.85, 0.8);
          d.t(s, w, x + 1.15, y + 0.04, 1.8, rh - 0.08, { size: 28, bold: true, color: mode === 'q' ? 'tx1' : c, valign: 'middle', head: true });
          d.t(s, fr, x + 2.9, y + 0.04, 1.2, rh - 0.08, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
          if (mode === 'a') d.chip(s, lab, x + 4.7 - 0.95, y + 0.12, c, 0.3, 11);
        });
        d.icon(s, 'FaVolumeUp', 'accent5', 12.1, y + 0.3, 0.42);
      });
    }
  }

  // ---------------------------------------------------------------- 5 syllabe-porte (S6)
  d.section('Comprendre');
  const syl = (s, x, y, w, h, text, open, c) => {
    const lw = 3;
    d.line(s, x, y, x + w, y, { color: 'tx2', lw: 2, arrow: false });
    d.line(s, x, y + h, x + w, y + h, { color: 'tx2', lw: 2, arrow: false });
    d.line(s, x, y, x, y + h, { color: 'tx2', lw: 2, arrow: false });
    if (open === false) d.line(s, x + w, y, x + w, y + h, { color: c, lw: lw + 2, arrow: false });
    if (open === null) d.line(s, x + w, y, x + w, y + h, { color: 'tx2', lw: 2, arrow: false });
    d.t(s, text, x, y, w, h, { size: 44, bold: true, align: 'center', valign: 'middle', head: true });
  };
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'La règle en une image : la syllabe-porte' });
    // LA · TEN
    d.icon(s, 'FaDoorOpen', 'accent3', 1.65, 1.75, 0.75);
    syl(s, 1.0, 2.65, 2.0, 1.3, 'L<<A>>', true, K.long);
    syl(s, 3.25, 2.65, 2.3, 1.3, 'TEN', null, 'tx2');
    d.t(s, '·', 2.95, 2.65, 0.35, 1.3, { size: 40, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.line(s, 1.75, 4.2, 2.85, 4.2, { color: 'accent3', lw: 2.5, begin: 'triangle' });
    d.t(s, 'la voyelle s’étire', 1.2, 4.3, 2.4, 0.4, { size: 15, italic: true, color: 'accent3', align: 'center' });
    d.chip(s, 'syllabe OUVERTE → son LONG', 1.0, 4.95, 'accent3', 0.5, 16);
    // KAT · TEN
    d.icon(s, 'FaDoorClosed', 'accent4', 7.85, 1.75, 0.75);
    syl(s, 7.2, 2.65, 2.4, 1.3, 'K%%A%%T', false, K.short);
    syl(s, 9.85, 2.65, 2.3, 1.3, 'TEN', null, 'tx2');
    d.t(s, '·', 9.55, 2.65, 0.35, 1.3, { size: 40, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.t(s, 'le T ferme la porte', 8.2, 4.3, 2.4, 0.4, { size: 15, italic: true, color: 'accent4', align: 'center' });
    d.chip(s, 'syllabe FERMÉE → son COURT', 7.2, 4.95, 'accent4', 0.5, 16);
    d.rect(s, 0.6, 5.75, 12.13, 1.1, { fill: 'tx2', line: null });
    d.t(s, ['**Porte ouverte** : la voyelle termine la syllabe → elle peut s’étirer → **son LONG** (//la·ten//)', '**Porte fermée** : une consonne suit la voyelle dans la syllabe → **son COURT** (//kat·ten//)'], 0.9, 5.8, 11.6, 1.0, { size: 17, color: 'bg1', valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 6 couper
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'Comment couper un mot en syllabes ?' });
    const rows = [
      ['1 consonne', 'je coupe **avant** la consonne', [['w<<o>>', 'nen'], ['m<<a>>', 'ken'], ['spr<<e>>', 'ken']]],
      ['2 consonnes', 'je coupe **entre** les deux', [['k%%a%%t', 'ten'], ['w%%e%%r', 'ken'], ['z%%e%%g', 'gen']]],
      ['son double', 'je ne le coupe **jamais**', [['k@@ij@@', 'ken'], ['r@@oe@@', 'pen'], ['h@@ui@@', 'zen']]],
    ];
    rows.forEach(([lab, rule, words], i) => {
      const y = 1.7 + i * 1.75;
      d.rect(s, 0.6, y, 3.4, 1.5, { fill: 'tx2', line: null });
      d.t(s, lab, 0.8, y + 0.12, 3.0, 0.5, { size: 22, bold: true, color: 'bg1', head: true });
      d.t(s, rule, 0.8, y + 0.65, 3.0, 0.75, { size: 16, color: 'bg2' });
      words.forEach(([a, b], k) => {
        const x = 4.3 + k * 2.85;
        d.rect(s, x, y + 0.15, 2.6, 1.2, { fill: 'bg1', line: BORDER, lw: 1.25, shadow: true });
        d.t(s, a, x + 0.05, y + 0.15, 1.2, 1.2, { size: 30, bold: true, align: 'right', valign: 'middle', head: true });
        d.t(s, b, x + 1.45, y + 0.15, 1.15, 1.2, { size: 30, bold: true, align: 'left', valign: 'middle', head: true });
        d.line(s, x + 1.35, y + 0.3, x + 1.35, y + 1.2, { color: 'accent1', lw: 2, dash: 'dash', arrow: false });
        d.icon(s, 'GiScissors', 'accent1', x + 1.17, y - 0.08, 0.36);
      });
    });
    d.t(s, '<<vert>> = voyelle longue · %%framboise%% = voyelle courte · @@bleu nuit@@ = son double', 4.3, 6.62, 8.4, 0.3, { size: 13, italic: true, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 7 courts
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'Les sons courts : la consonne monte la garde' });
    d.table(s, [
      ['Voyelle', '1 syllabe', '2 syllabes (+ en)', 'Sens'],
      ['**A**', 'k%%a%%t', 'k%%a%%**%%t·t%%**en', '//le chat//'],
      ['**E**', 'l%%e%%s', 'l%%e%%**%%s·s%%**en', '//la leçon//'],
      ['**I**', 'v%%i%%s', 'v%%i%%**%%s·s%%**en', '//le poisson//'],
      ['**O**', 'p%%o%%t', 'p%%o%%**%%t·t%%**en', '//le pot//'],
      ['**U**', 'b%%u%%s', 'b%%u%%**%%s·s%%**en', '//le bus//'],
    ], { x: 0.6, y: 1.7, w: 8.3, colW: [1.3, 2.0, 2.9, 2.1], size: 26, headSize: 16, headColor: 'accent4', align: ['center', 'center', 'center', 'left'], rowH: 0.78 });
    d.card(s, 9.2, 1.7, 3.53, 2.4, { icon: 'FaShieldAlt', head: 'Je double !', color: 'accent4', body: ['Pour garder le son **COURT**, je **double** la consonne.'] });
    d.rect(s, 9.2, 4.35, 3.53, 2.5, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1 });
    d.icon(s, 'FaTimes', 'accent6', 9.4, 4.5, 0.4);
    d.t(s, ['Sans doublement :', '**ka·ten**', '= « kaa-ten » (porte ouverte → son long)'], 9.45, 5.0, 3.1, 1.75, { size: 17, color: 'tx1', fit: true, max: 18, min: 13 });
  }

  // ---------------------------------------------------------------- 8 longs
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Les sons longs : deux voyelles… ou une seule !' });
    d.table(s, [
      ['Voyelle', '1 syllabe (fermée)', '2 syllabes (ouverte)', 'Sens'],
      ['**A**', 'r<<aa>>m', 'r<<a>>{{a}}·men', '//la fenêtre//'],
      ['**E**', 'b<<ee>>n', 'b<<e>>{{e}}·nen', '//la jambe//'],
      ['**O**', 'b<<oo>>m', 'b<<o>>{{o}}·men', '//l’arbre//'],
      ['**U**', 'm<<uu>>r', 'm<<u>>{{u}}·ren', '//le mur//'],
    ], { x: 0.6, y: 1.7, w: 8.3, colW: [1.3, 2.4, 2.6, 2.0], size: 26, headSize: 16, headColor: 'accent3', align: ['center', 'center', 'center', 'left'], rowH: 0.9 });
    d.card(s, 9.2, 1.7, 3.53, 2.4, { icon: 'FaCheck', head: 'Pas besoin !', color: 'accent3', body: ['Syllabe fermée : **2 voyelles**.', 'Syllabe ouverte : **1 seule** suffit.'] });
    d.rect(s, 9.2, 4.35, 3.53, 2.5, { fill: 'accent6', tr: 93, line: 'accent6', lw: 1 });
    d.icon(s, 'FaTimes', 'accent6', 9.4, 4.5, 0.4);
    d.t(s, ['On n’écrit jamais :', '**{{raamen}}**', 'La porte est ouverte : un seul //a// suffit.'], 9.45, 5.0, 3.1, 1.75, { size: 17, fit: true, max: 18, min: 13 });
  }

  // ---------------------------------------------------------------- 9 tableau-miroir
  {
    const s = d.page({ g: 9, tag: 'À RETENIR', title: 'À retenir : le tableau-miroir' });
    d.table(s, [
      ['COURT', '', 'LONG'],
      ['k%%a%%t → k%%a%%t·ten', '**A**', 'r<<aa>>m → r<<a>>·men'],
      ['l%%e%%s → l%%e%%s·sen', '**E**', 'b<<ee>>n → b<<e>>·nen'],
      ['p%%o%%t → p%%o%%t·ten', '**O**', 'b<<oo>>m → b<<o>>·men'],
      ['b%%u%%s → b%%u%%s·sen', '**U**', 'm<<uu>>r → m<<u>>·ren'],
    ], { x: 1.2, y: 1.7, w: 10.9, colW: [4.7, 1.5, 4.7], size: 28, headSize: 20, headColors: ['accent4', 'tx2', 'accent3'], align: ['center', 'center', 'center'], rowH: 0.78,
      cellFill: (r, c) => (c === 0 ? 'FBEFF4' : c === 2 ? 'EDF6F0' : 'bg2') });
    d.bubble(s, '**Court** = 1 voyelle + consonne **doublée**', 1.2, 5.85, 5.2, 0.9, 'accent4', { size: 19 });
    d.bubble(s, '**Long** = 2 voyelles (fermée) ou **1** voyelle (ouverte)', 6.9, 5.85, 5.2, 0.9, 'accent3', { size: 19 });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.75, 0.38);
  }

  // ---------------------------------------------------------------- 10 sons invariables
  {
    const s = d.page({ g: 10, tag: 'PRONONCIATION', title: 'Les sons qui ne changent jamais' });
    const blocks = [
      ['ie', '≈ « i »', 'dier → dieren', 'l’animal'], ['oe', '≈ « ou »', 'boek → boeken', 'le livre'], ['eu', '≈ « eu » de peu', 'deur → deuren', 'la porte'],
      ['ui', '≈ « œil »', 'huis → huizen', 'la maison'], ['ij / ei', '≈ « è-i »', 'tijd → tijden', 'le temps · aussi : trein → treinen'], ['ou / au', '≈ « aou »', 'vrouw → vrouwen', 'la femme'],
    ];
    const w = 3.85; const h = 2.0;
    blocks.forEach(([g, fr, ex, tr], i) => {
      const x = 0.6 + (i % 3) * (w + 0.29); const y = 1.7 + Math.floor(i / 3) * (h + 0.25);
      d.rect(s, x, y, w, h, { fill: 'bg2', line: BORDER, shadow: true });
      d.icon(s, 'FaLock', 'accent5', x + w - 0.5, y + 0.15, 0.32);
      d.t(s, g, x + 0.2, y + 0.1, 2.0, 0.8, { size: g.length > 2 ? 28 : 36, bold: true, color: 'tx2', head: true, valign: 'middle' });
      d.t(s, fr, x + 2.15, y + 0.2, w - 2.7, 0.6, { size: 14, italic: true, color: 'accent5', valign: 'middle', fit: true, max: 15, min: 11 });
      d.t(s, '//' + ex + '//', x + 0.2, y + 0.95, w - 0.4, 0.55, { size: 18, bold: true, valign: 'middle', fit: true, max: 18, min: 13 });
      d.t(s, tr, x + 0.2, y + 1.45, w - 0.4, 0.4, { size: 14, italic: true, color: 'accent5' });
      if (g === 'oe') d.chip(s, 'PIÈGE : u ≠ ou', x + w - 1.75, y + 1.52, 'accent6', 0.28, 10);
    });
    d.rect(s, 0.6, 6.2, 12.13, 0.65, { fill: 'tx2', line: null });
    d.t(s, 'Le I : court = **i** (//zit//) · long = **ie** (//ziet//) — jamais « ii ». On ne double pas, on ne simplifie pas.', 0.9, 6.2, 11.6, 0.65, { size: 17, color: 'bg1', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 11 bonus f/v s/z
  {
    const s = d.page({ g: 11, tag: '+ BONUS', title: '+ BONUS : f/v et s/z jouent à cache-cache' });
    const rows = [['brie##f##', 'brie##v##en', 'la lettre'], ['nee##f##', 'ne##v##en', 'le cousin / neveu'], ['hui##s##', 'hui##z##en', 'la maison'], ['rei##s##', 'rei##z##en', 'le voyage']];
    rows.forEach(([a, b, tr], i) => {
      const y = 1.75 + i * 1.02;
      d.word(s, a, 0.6, y, 2.4, 0.8, 'tx2', { size: 26, head: true });
      d.line(s, 3.1, y + 0.4, 4.0, y + 0.4, { color: 'accent1', lw: 2.5 });
      d.word(s, b, 4.1, y, 2.7, 0.8, 'tx2', { size: 26, head: true });
      d.t(s, tr, 6.95, y, 2.0, 0.8, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    });
    // the bouncer
    d.rect(s, 9.3, 1.75, 3.43, 3.9, { fill: 'bg2', line: 'tx2', lw: 2 });
    d.t(s, 'FIN DE MOT', 9.3, 1.85, 3.43, 0.45, { size: 16, bold: true, color: 'tx2', align: 'center', cs: 2 });
    d.icon(s, 'FaBan', 'accent6', 10.4, 2.45, 1.25);
    d.t(s, '{{V}}   {{Z}}', 9.3, 3.85, 3.43, 0.8, { size: 40, bold: true, align: 'center', valign: 'middle', head: true });
    d.t(s, 'interdits → **f** et **s**', 9.3, 4.75, 3.43, 0.6, { size: 17, align: 'center', valign: 'middle' });
    d.rect(s, 0.6, 6.0, 12.13, 0.85, { fill: 'accent1', tr: 88, line: 'accent1', lw: 1 });
    d.t(s, 'En fin de mot : **jamais de v ni de z** → on écrit **f** et **s**. Ce « videur » revient au module 4 : //lezen → ik lees//.', 0.9, 6.0, 11.6, 0.85, { size: 17, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 12 pièges
  {
    const s = d.page({ g: 12, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : 6 sons à surveiller' });
    const cards = [
      ['u', '//bus//', '{{« u » français}}', '→ plutôt « eu » bref'],
      ['uu', '//vuur//', '= « u » français', '→ mais long'],
      ['g / ch', '//goed, acht//', '{{« g » de gare}}', '→ son raclé au fond de la gorge'],
      ['h', '//heten//', '{{h muet}}', '→ on souffle ! //Ik heet Tom// ≠ //Ik eet Tom// 😄'],
      ['-en final', '//lopen//', '{{« pène »}}', '→ « lopeu »'],
      ['d final', '//stad//', '{{« d »}}', '→ se prononce **t** : « stat »'],
    ];
    const w = 3.85; const h = 2.45;
    cards.forEach(([snd, ex, bad, good], i) => {
      const x = 0.6 + (i % 3) * (w + 0.29); const y = 1.7 + Math.floor(i / 3) * (h + 0.22);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: BORDER, shadow: true });
      d.rect(s, x, y, w, 0.7, { fill: 'accent6', tr: 90, line: null, radius: 0.08 });
      d.t(s, snd, x + 0.2, y, 2.0, 0.7, { size: 24, bold: true, color: 'accent6', head: true, valign: 'middle' });
      d.t(s, ex, x + 2.1, y, w - 2.3, 0.7, { size: 17, valign: 'middle', align: 'right' });
      d.t(s, [bad, good], x + 0.2, y + 0.85, w - 0.4, h - 1.0, { size: 18, fit: true, max: 18, min: 13, gap: 8 });
    });
  }

  // ---------------------------------------------------------------- 13 méthode
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'Lire un mot inconnu : la méthode en 3 étapes' });
    [['GiScissors', '✂ 1 · Je coupe'], ['FaDoorOpen', '2 · Porte ouverte ?'], ['FaVolumeUp', '3 · Je prononce']].forEach(([ic, lab], i) => {
      const x = 0.6 + i * 4.0;
      s.addText(lab, { shape: d.S.CHEVRON, x, y: 1.75, w: 4.05, h: 1.0, fill: { color: ['accent2', 'tx2', 'accent3'][i] }, color: 'FFFFFF', bold: true, fontSize: 20, align: 'center', valign: 'middle', margin: 0 });
    });
    d.t(s, '**vergadering** //(la réunion)//', 0.6, 3.05, 12.13, 0.5, { size: 22, align: 'center' });
    const syls = [['ver', 'fermée · e muet', 'accent5'], ['GA', 'OUVERTE → long', 'accent3'], ['de', 'e muet', 'accent5'], ['ring', 'fermée', 'accent4']];
    syls.forEach(([t, lab, c], i) => {
      const x = 1.6 + i * 2.65;
      d.rect(s, x, 3.7, 2.3, 1.2, { fill: 'bg1', line: c, lw: 2.5 });
      d.t(s, t, x, 3.7, 2.3, 1.2, { size: 36, bold: true, color: c, align: 'center', valign: 'middle', head: true });
      d.t(s, lab, x - 0.1, 4.95, 2.5, 0.45, { size: 15, italic: true, color: c, align: 'center' });
      if (i < 3) d.t(s, '·', x + 2.3, 3.7, 0.35, 1.2, { size: 36, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.rect(s, 3.4, 5.65, 6.5, 0.95, { fill: 'tx2', line: null });
    d.t(s, '→ « vər-**GHAA**-də-ring »', 3.4, 5.65, 6.5, 0.95, { size: 26, color: 'bg1', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Oreille d’or', '★', 'FaHeadphones'], ['Ciseaux magiques', '★', 'GiScissors'], ['L’usine à pluriels', '★★', 'GiFactory'],
    ['Le correcteur', '★★', 'FaCheck'], ['Tongbrekers', '★★', 'FaMicrophone'], ['Dictée en miroir', '★★★', 'FaPhoneAlt'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 oreille d'or
  const pairs = [['man', 'maan', 'homme / lune'], ['tak', 'taak', 'branche / tâche'], ['stad', 'staat', 'ville / État'], ['wet', 'weet', 'loi / je sais'], ['bom', 'boom', 'bombe / arbre'], ['zon', 'zoon', 'soleil / fils'], ['zit', 'ziet', 'est assis / voit'], ['pen', 'peen', 'stylo / carotte']];
  d.ex({ g: 15, title: 'Exercice 1 — Oreille d’or', stars: '★', instr: 'Écoutez. Long ou court ? Levez votre carton !' }, (s, mode, top) => {
    if (mode === 'q') {
      d.rect(s, 0.9, top + 0.2, 3.6, 1.9, { fill: 'accent3', line: null, radius: 0.3 });
      d.t(s, 'LONG', 0.9, top + 0.2, 3.6, 1.9, { size: 44, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.iconDisc(s, 'FaVolumeUp', 5.65, top + 0.15, 2.0, 'tx2');
      d.rect(s, 8.8, top + 0.2, 3.6, 1.9, { fill: 'accent4', line: null, radius: 0.3 });
      d.t(s, 'COURT', 8.8, top + 0.2, 3.6, 1.9, { size: 44, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      for (let i = 0; i < 8; i++) {
        const x = 0.75 + i * 1.5;
        d.rect(s, x, top + 2.7, 1.3, 1.3, { fill: 'bg2', line: BORDER, lw: 1.25 });
        d.t(s, String(i + 1), x, top + 2.7, 1.3, 1.3, { size: 30, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      }
    } else {
      pairs.forEach(([a, b, tr], i) => {
        const x = 0.6 + (i % 4) * 3.1; const y = top + Math.floor(i / 4) * 2.3;
        d.rect(s, x, y, 2.85, 2.05, { fill: 'bg2', line: BORDER, shadow: true });
        d.t(s, `%%${a}%%  /  <<${b}>>`, x, y + 0.15, 2.85, 0.9, { size: 28, align: 'center', valign: 'middle', head: true });
        d.t(s, tr, x + 0.1, y + 1.1, 2.65, 0.8, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      });
    }
  });

  // ---------------------------------------------------------------- 16 ex2 ciseaux
  const ex2 = [['wonen', 'wo·nen', 1], ['werken', 'wer·ken', 0], ['spreken', 'spre·ken', 1], ['zitten', 'zit·ten', 0], ['maken', 'ma·ken', 1], ['bakken', 'bak·ken', 0], ['lopen', 'lo·pen', 1], ['koppel', 'kop·pel', 0], ['slapen', 'sla·pen', 1], ['zeggen', 'zeg·gen', 0]];
  d.ex({ g: 16, title: 'Exercice 2 — Ciseaux magiques', stars: '★', instr: 'Coupez chaque mot, puis classez-le : long ou court ?' }, (s, mode, top) => {
    if (mode === 'q') {
      ex2.forEach(([w], i) => {
        const x = 0.6 + (i % 5) * 2.48; const y = top + Math.floor(i / 5) * 1.05;
        d.rect(s, x, y, 2.25, 0.85, { fill: 'bg1', line: 'accent5', lw: 1.25, dash: 'dash' });
        d.t(s, w, x, y, 2.25, 0.85, { size: 24, bold: true, align: 'center', valign: 'middle', head: true });
        d.icon(s, 'GiScissors', 'accent1', x + 1.95, y - 0.12, 0.3);
      });
    }
    const by = top + (mode === 'q' ? 2.35 : 0.1); const bh = 6.88 - by;
    [['LONG', 'accent3', 1, 0.6], ['COURT', 'accent4', 0, 6.75]].forEach(([lab, c, long, x]) => {
      d.rect(s, x, by, 5.98, bh, { fill: c, tr: 90, line: c, lw: 2 });
      d.t(s, lab, x, by + 0.08, 5.98, 0.55, { size: 24, bold: true, color: c, align: 'center', head: true });
      if (mode === 'a') {
        const ws = ex2.filter((e) => e[2] === long);
        ws.forEach(([, cut], k) => d.t(s, cut, x + 0.3 + (k % 2) * 2.8, by + 0.85 + Math.floor(k / 2) * 0.85, 2.7, 0.7, { size: 28, bold: true, align: 'center', valign: 'middle', head: true }));
      } else d.icon(s, 'FaInbox', c, x + 2.64, by + bh / 2 - 0.1, 0.7);
    });
  });

  // ---------------------------------------------------------------- 17 ex3 usine
  const ex3 = [['kat', 'katten'], ['raam', 'ramen'], ['boom', 'bomen'], ['bus', 'bussen'], ['pen', 'pennen'], ['been', 'benen'], ['jaar', 'jaren'], ['vis', 'vissen'], ['uur', 'uren'], ['les', 'lessen'], ['dier', 'dieren'], ['boek', 'boeken']];
  d.ex({ g: 17, title: 'Exercice 3 — L’usine à pluriels', stars: '★★', instr: 'Mettez au pluriel. Attention à la porte : je double ou je simplifie ?' }, (s, mode, top) => {
    d.iconDisc(s, 'GiFactory', 0.6, top + 0.05, 0.75, 'tx2');
    d.t(s, 'singulier  →  ⚙ + en  →  pluriel', 1.5, top + 0.05, 6, 0.75, { size: 20, bold: true, color: 'tx2', valign: 'middle' });
    d.list(s, ex3.map(([a, b]) => `**${a}**  →  [[${b}]]`), mode, { y: top + 1.0, w: 8.4, h: 6.88 - top - 1.0, cols: 2, size: 24, gap: 10 });
    d.rect(s, 9.3, top + 1.0, 3.43, 6.88 - top - 1.0, { fill: 'accent1', tr: 90, line: 'accent1', lw: 1.25 });
    d.t(s, '★★★ Bonus du videur', 9.45, top + 1.1, 3.1, 0.45, { size: 16, bold: true, color: 'accent1' });
    d.t(s, ['**brief** → [[brieven]]', '**huis** → [[huizen]]', '**neef** → [[neven]]', '**reis** → [[reizen]]'], 9.5, top + 1.65, 3.1, 3.0, { size: 22, mode, gap: 12 });
  });

  // ---------------------------------------------------------------- 18 ex4 correcteur
  const ex4 = [['de raamen', 'de ramen', 1], ['de katen', 'de katten', 1], ['de boomen', 'de bomen', 1], ['de busen', 'de bussen', 1], ['de jaaren', 'de jaren', 1], ['de lesen', 'de lessen', 1]];
  d.ex({ g: 18, title: 'Exercice 4 — Le correcteur', stars: '★★', instr: 'Quelle est la bonne orthographe ? Vous avez 60 secondes.' }, (s, mode, top) => {
    d.pic(s, 'horloge', 11.6, 0.95, 0.65, 0.65);
    ex4.forEach(([bad, good], i) => {
      const y = top + i * 0.82; const order = i % 2 ? [good, bad] : [bad, good];
      d.num(s, i + 1, 0.6, y + 0.12, 0.5, 'tx2', 16);
      order.forEach((w, k) => {
        const x = 1.4 + k * 3.4; const ok = w === good;
        const c = mode === 'a' ? (ok ? 'accent3' : 'accent6') : 'accent5';
        d.rect(s, x, y + 0.05, 3.1, 0.65, { fill: mode === 'a' && ok ? 'EDF6F0' : 'bg1', line: c, lw: mode === 'a' ? 2 : 1 });
        d.t(s, mode === 'a' && !ok ? `{{${w}}}` : w, x, y + 0.05, 3.1, 0.65, { size: 22, bold: true, align: 'center', valign: 'middle', head: true });
        if (mode === 'a') d.icon(s, ok ? 'FaCheck' : 'FaTimes', c, x + 2.7, y + 0.2, 0.3);
      });
    });
    if (mode === 'a') {
      d.card(s, 8.4, top, 4.33, 2.3, { icon: 'FaDoorOpen', head: 'Porte ouverte', color: 'accent3', body: '//ramen, bomen, jaren// : 1 voyelle suffit.' });
      d.card(s, 8.4, top + 2.55, 4.33, 2.3, { icon: 'FaShieldAlt', head: 'Son court', color: 'accent4', body: '//katten, bussen, lessen// : je double la consonne.' });
    }
  });

  // ---------------------------------------------------------------- 19 ex5 tongbrekers
  {
    const s = d.page({ g: 19, tag: 'JIJ NU !', title: 'Exercice 5 — Tongbrekers (virelangues)', stars: '★★' });
    const tw = [
      ['<<Kaat>> %%zat%% <<laat>> in de %%stad%% met de %%kat%%.', 'Kaat était assise tard en ville avec le chat.'],
      ['De <<zoon>> <<ziet>> de %%zon%% niet.', 'Le fils ne voit pas le soleil.'],
      ['Ik <<weet>>: de %%wet%% is de %%wet%%.', 'Je sais : la loi, c’est la loi.'],
    ];
    tw.forEach(([nl, fr], i) => {
      const y = 1.7 + i * 1.42;
      d.rect(s, 0.6, y, 12.13, 1.25, { fill: i % 2 ? 'bg1' : 'bg2', line: BORDER, shadow: true });
      d.iconDisc(s, 'FaMicrophone', 0.85, y + 0.25, 0.8, 'accent1');
      d.t(s, nl, 1.95, y + 0.08, 10.6, 0.75, { size: 30, valign: 'middle', head: true });
      d.t(s, fr, 1.95, y + 0.8, 10.6, 0.42, { size: 16, italic: true, color: 'accent5' });
    });
    d.t(s, '① lentement en chœur   ② vite   ③ défi : la phrase 1, trois fois sans erreur !', 0.6, 6.4, 12.13, 0.45, { size: 18, bold: true, color: 'accent1', align: 'center' });
    d.t(s, '<<vert>> = son long · %%framboise%% = son court', 0.6, 6.0, 12.13, 0.35, { size: 14, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 20 ex6 dictée en miroir
  {
    const s = d.page({ g: 20, tag: 'MISE EN SITUATION', title: 'Exercice 6 — Dictée en miroir', stars: '★★★' });
    [['A dicte', 'maan · katten · lopen · deur · huis · stad', 'accent2', 0.6], ['B dicte', 'boom · bussen · slapen · boek · tijd · staat', 'purple', 7.13]].forEach(([h, words, c, x]) => {
      d.rect(s, x, 1.7, 5.6, 3.3, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.num(s, h[0], x + 0.2, 1.85, 0.6, c, 20);
      d.t(s, h, x + 0.95, 1.85, 4, 0.6, { size: 22, bold: true, color: c, valign: 'middle', head: true });
      d.t(s, words, x + 0.3, 2.6, 5.0, 0.9, { size: 20, bold: true, valign: 'middle' });
      for (let k = 0; k < 3; k++) d.line(s, x + 0.3, 3.85 + k * 0.4, x + 5.3, 3.85 + k * 0.4, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
    });
    d.rect(s, 6.43, 1.7, 0.47, 3.3, { fill: 'accent5', tr: 40, line: null, radius: 0.05 });
    d.icon(s, 'FaPhoneAlt', 'FFFFFF', 6.5, 3.15, 0.33);
    d.rect(s, 0.6, 5.25, 12.13, 1.6, { fill: 'bg2', line: BORDER });
    d.t(s, 'PHRASES UTILES', 0.85, 5.35, 4, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2 });
    d.t(s, '//Kun je dat herhalen?// (Tu peux répéter ?) · //Lang of kort?// · //Met één t of twee t’s?// · //Lange ij of korte ei?//', 0.85, 5.75, 11.6, 1.0, { size: 19, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 21 ticket
  d.ticket({
    g: 21,
    q: ['//de straat// : son long ou court ?', 'Le pluriel de //de bel// (la sonnette) ?', 'Pourquoi //bomen// s’écrit-il avec un seul **o** ?'],
    self: ['Je distingue', 'Je lis', 'J’écris'],
    teaser: { icon: 'FaIdCard', text: '**Volgende keer : Ik stel me voor** — se présenter en néerlandais' },
  });
}

module.exports = { meta, build };
