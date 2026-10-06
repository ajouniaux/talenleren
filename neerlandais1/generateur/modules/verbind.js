// Want, daarom, omdat… — Relier les phrases : coordination et subordination (complément A2–B1)
const { BORDER, plain, HEX, PURPLE } = require('../lib');

const meta = {
  n: 'V', slug: 'Verbindingswoorden', title: 'Want, daarom, omdat… — Relier les phrases', short: 'Relier les phrases',
  template: 'conjonctions.md', file: 'Verbindingswoorden_Coordination_et_subordination.pptx',
  docTitle: 'Want, daarom, omdat… — Coordination et subordination',
  foot: 'Néerlandais · A2–B1 · Relier les phrases',
};

// comme au M9 : le pont (coordination) bleu · le wagon (subordination) orange · ici en plus le tremplin (adverbe + inversion) violet · verbe conjugué rouge
const PO = 'accent2'; const TR = 'purple'; const WA = 'accent1'; const VB = 'accent6';
const INK = '17375E';
const hexOf = (c) => (c === 'purple' ? PURPLE : c === 'tx2' ? INK : HEX[c] || c);

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  // n neutre · v verbe conjugué · i infinitif / participe · P pont · T tremplin · W wagon · x barré · e ponctuation
  const ST = {
    n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
    v: { fill: VB, line: null, color: 'bg1', bold: true },
    i: { fill: 'FBEDEB', line: VB, lw: 1.75, color: VB, bold: true },
    P: { fill: PO, line: null, color: 'bg1', bold: true },
    T: { fill: TR, line: null, color: 'bg1', bold: true },
    W: { fill: WA, line: null, color: 'bg1', bold: true },
    x: { fill: 'FFFFFF', line: 'accent5', lw: 1.25, dash: 'dash', color: 'accent5', bold: false },
    e: { fill: null, line: null, color: 'tx1', bold: true },
  };
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.66; const gap = o.gap ?? 0.08;
    let cx = x; const pos = [];
    parts.forEach(([t, ty]) => {
      const st = ST[ty || 'n'];
      const w = ty === 'e' ? 0.16 + plain(t).length * size * 0.006 : wOf(t, size) * (st.bold ? 1.12 : 1) + (st.bold ? 0.08 : 0);
      if (st.fill || st.line) d.rect(s, cx, y, w, h, { fill: st.fill || 'FFFFFF', line: st.line, lw: st.lw, dash: st.dash, radius: 0.1 });
      d.t(s, ty === 'x' ? `{{${t}}}` : t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      pos.push([cx, w, ty]);
      cx += w + gap;
    });
    strip.pos = pos;
    return cx - gap;
  };
  const rich = (s, segs, x, y, w, h, o = {}) => s.addText(segs.map(([text, so]) => ({ text, options: so })), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || 'tx1', align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true,
  });
  // phrase : [mot de liaison] en couleur, <verbe> en rouge
  const pc = (str, size, c) => str.split(/(\[[^\]]+\]|<[^>]+>)/).filter(Boolean).map((t) => {
    if (t.startsWith('[')) return [t.slice(1, -1), { bold: true, italic: true, color: hexOf(c), fontSize: size }];
    if (t.startsWith('<')) return [t.slice(1, -1), { bold: true, italic: true, color: hexOf(VB), fontSize: size }];
    return [t, { italic: true, fontSize: size }];
  });
  const card = (s, x, y, w, h, word, fr, ex, c, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1, shadow: true });
    d.rect(s, x, y, 0.1, h, { fill: c, line: null, radius: 0 });
    const cw = o.cw || 1.7;
    d.rect(s, x + 0.25, y + (h - 0.56) / 2, cw, 0.56, { fill: c, line: null, radius: 0.12 });
    d.t(s, `**${word}**`, x + 0.25, y + (h - 0.56) / 2, cw, 0.56, { size: o.ws || 18, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, fr, x + cw + 0.4, y + 0.06, w - cw - 0.5, h * 0.36, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
    rich(s, pc(ex, o.size || 17, c), x + cw + 0.4, y + h * 0.38, w - cw - 0.5, h * 0.58);
  };
  const KIND = { P: ['LE PONT', 'bridge-at-night', PO, 'ordre normal'], T: ['LE TREMPLIN', 'person-cartwheeling', TR, 'inversion : verbe, puis sujet'], W: ['LE WAGON', 'railway-car', WA, 'verbe à la fin'] };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'COMPLÉMENT · A2–B1', title: 'Want, daarom, omdat…', sub: 'Relier les phrases : coordination et subordination', line: 'le pont · le tremplin · le wagon',
    visual: (s) => {
      d.rect(s, 6.55, 1.2, 6.5, 4.2, { fill: 'FFFFFF', line: null, radius: 0.16 });
      [['P', [['Ik blijf thuis,', 'n'], ['want', 'P'], ['ik', 'n'], ['ben', 'v'], ['ziek.', 'n']]], ['T', [['Ik ben ziek.', 'n'], ['Daarom', 'T'], ['blijf', 'v'], ['ik', 'n'], ['thuis.', 'n']]], ['W', [['Ik blijf thuis,', 'n'], ['omdat', 'W'], ['ik ziek', 'n'], ['ben.', 'v']]]].forEach(([k, parts], i) => {
        const y = 1.45 + i * 1.3;
        d.ill(s, KIND[k][1], 6.68, y, 0.75, 0.75);
        strip(s, 7.5, y + 0.07, parts, { size: 14, h: 0.6, gap: 0.05 });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaLink', h: 'Relier', t: 'Je relie deux phrases avec un pont, un tremplin ou un wagon.', color: 'accent2' },
      { icon: 'FaPalette', h: 'Nuancer', t: 'J’exprime le temps, la cause, l’opposition, la condition.', color: 'accent1' },
      { icon: 'FaCubes', h: 'Composer', t: 'Je construis des phrases longues, dans le bon ordre.', color: 'purple' },
    ],
    band: 'Le mot de liaison décide de la place du verbe : c’est tout le secret.',
  });

  // ---------------------------------------------------------------- 3 échauffement : une idée, cinq phrases
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Une idée, cinq phrases : où est le verbe ?' });
    d.ill(s, 'face-with-thermometer', 11.55, 1.5, 1.15, 1.15);
    const R = [[['Ik blijf thuis,', 'n'], ['want', 'P'], ['ik', 'n'], ['ben', 'v'], ['ziek.', 'n']], [['Ik ben ziek,', 'n'], ['dus', 'P'], ['ik', 'n'], ['blijf', 'v'], ['thuis.', 'n']], [['Ik ben ziek.', 'n'], ['Daarom', 'T'], ['blijf', 'v'], ['ik', 'n'], ['thuis.', 'n']],
      [['Ik blijf thuis,', 'n'], ['omdat', 'W'], ['ik', 'n'], ['ziek', 'n'], ['ben.', 'v']], [['Omdat', 'W'], ['ik ziek', 'n'], ['ben', 'v'], [',', 'e'], ['blijf', 'v'], ['ik', 'n'], ['thuis.', 'n']]];
    R.forEach((parts, i) => {
      const y = 1.6 + i * 0.92;
      d.t(s, `**${'abcde'[i]}**`, 0.6, y, 0.4, 0.66, { size: 18, color: 'accent5', valign: 'middle' });
      strip(s, 1.05, y, parts, { size: 22, h: 0.66 });
    });
    band(s, 'Le **verbe conjugué** est en rouge. Il ne bouge pas toujours de la même façon : pourquoi ?', 6.3, 0.6, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 4 rappel : le verbe en 2e position
  {
    const s = d.page({ g: 4, tag: 'RAPPEL M3', title: 'La base : le verbe en 2e position' });
    const COLS = [['①', 'une case', 1.4], ['②', 'le VERBE', 1.6], ['③ …', 'le reste', 4.2], ['fin', 'infinitif · participe', 2.5]];
    let x = 1.2;
    COLS.forEach(([n, lab, w], i) => {
      d.rect(s, x, 1.65, w, 0.75, { fill: i === 1 ? VB : 'tx2', line: null, radius: 0.1 });
      d.t(s, [`**${n}**`, lab], x, 1.65, w, 0.75, { size: 13, color: 'bg1', align: 'center', valign: 'middle', gap: 0 });
      x += w + 0.1;
    });
    const R = [[['Ik', 'n'], ['ga', 'v'], ['morgen naar Gent.', 'n']], [['Morgen', 'n'], ['ga', 'v'], ['ik naar Gent.', 'n']], [['Ik', 'n'], ['ben', 'v'], ['gisteren naar Gent', 'n'], ['gegaan.', 'i']]];
    R.forEach((parts, i) => strip(s, 1.2, 2.7 + i * 0.95, parts, { size: 22, h: 0.7 }));
    d.t(s, 'Si un autre mot prend la case ①, le sujet passe **après** le verbe : c’est **l’inversion**.', 1.2, 5.6, 11.5, 0.45, { size: 17, color: 'tx2' });
    band(s, 'Les mots de liaison respectent cette règle… ou la changent. Il y en a trois sortes.', 6.2, 0.6, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 5 les trois comportements (K1)
  {
    const s = d.page({ g: 5, tag: 'LE PRINCIPE', title: 'Trois sortes de mots de liaison' });
    const R = [['P', 'en · maar · want · of · dus', [['Ik blijf thuis,', 'n'], ['want', 'P'], ['ik', 'n'], ['ben', 'v'], ['ziek.', 'n']], 'rien ne bouge'],
      ['T', 'daarom · toch · daarna · dan · anders · bovendien', [['Ik ben ziek.', 'n'], ['Daarom', 'T'], ['blijf', 'v'], ['ik', 'n'], ['thuis.', 'n']], 'le mot prend la case ① → verbe, puis sujet'],
      ['W', 'omdat · dat · als · of · toen · hoewel · terwijl…', [['Ik blijf thuis,', 'n'], ['omdat', 'W'], ['ik', 'n'], ['ziek', 'n'], ['ben.', 'v']], 'le verbe file au dernier wagon']];
    R.forEach(([k, words, parts, rule], i) => {
      const [name, ic, c, how] = KIND[k];
      const y = 1.6 + i * 1.55;
      d.rect(s, 0.6, y, 12.13, 1.4, { fill: c, tr: 90, line: c, lw: 1.5, radius: 0.12 });
      d.ill(s, ic, 0.75, y + 0.2, 1.0, 1.0);
      d.t(s, [`**${name}**`, how], 1.9, y + 0.08, 2.9, 0.75, { size: 15, color: c, valign: 'middle', gap: 0 });
      d.t(s, `//${words}//`, 1.9, y + 0.82, 2.9, 0.5, { size: 12, color: 'tx2', valign: 'middle' });
      strip(s, 4.95, y + 0.18, parts, { size: 20, h: 0.62 });
      d.t(s, rule, 4.95, y + 0.86, 7.6, 0.42, { size: 14, italic: true, color: 'tx2', valign: 'middle' });
    });
    band(s, 'Avant d’écrire, demandez-vous : **pont, tremplin ou wagon ?**', 6.3, 0.55, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 6–8 les trois familles
  d.section('Pont, tremplin, wagon');
  {
    const s = d.page({ g: 6, tag: 'LE PONT', tagColor: PO, title: 'Le pont : en, maar, want, of, dus' });
    const R = [['en', 'et', 'Ik werk in Gent [en] mijn partner <werkt> in Brussel.'], ['maar', 'mais', 'Ik wil komen, [maar] ik <heb> geen tijd.'], ['want', 'car', 'Ik blijf thuis, [want] ik <ben> ziek.'], ['of', 'ou', 'Kom je mee, [of] <blijf> je thuis?'], ['dus', 'donc', 'Het regent, [dus] ik <neem> de bus.']];
    const rh = (4.4 - 0.1 * 4) / 5;
    R.forEach(([w, fr, ex], i) => card(s, 0.6, 1.6 + i * (rh + 0.1), 8.4, rh, w, fr, ex, PO, { cw: 1.3 }));
    d.rect(s, 9.25, 1.6, 3.48, 4.4, { fill: 'EAF2FB', line: PO, lw: 1.5, radius: 0.12 });
    d.ill(s, 'bridge-at-night', 10.45, 1.75, 1.1, 1.1);
    d.t(s, ['**Rien ne bouge** : après le pont, la phrase garde l’ordre normal.', '', 'Même sujet ? On peut l’omettre après //en, maar// : //Ik sta op **en** ga naar het werk.//'], 9.4, 2.95, 3.2, 3.0, { size: 14, gap: 4, valign: 'top' });
    band(s, '//dus// peut aussi être un tremplin : //Het regent, **dus neem ik** de bus.// Les deux ordres sont corrects.', 6.15, 0.62, 'tx2', 16);
  }
  {
    const s = d.page({ g: 7, tag: 'LE TREMPLIN', tagColor: TR, title: 'Le tremplin : daarom, toch, daarna… + inversion' });
    const R = [['daarom', 'c’est pourquoi', 'Ik ben ziek. [Daarom] <blijf> ik thuis.'], ['toch', 'quand même, pourtant', 'Het regent. [Toch] <gaan> we wandelen.'], ['daarna', 'ensuite', 'Eerst werk ik, [daarna] <ga> ik sporten.'], ['anders', 'sinon', 'Neem een jas mee, [anders] <heb> je het koud.'], ['bovendien', 'de plus', 'Het is goedkoop. [Bovendien] <ligt> het centraal.']];
    const rh = (4.4 - 0.1 * 4) / 5;
    R.forEach(([w, fr, ex], i) => card(s, 0.6, 1.6 + i * (rh + 0.1), 8.4, rh, w, fr, ex, TR, { cw: 1.7, ws: 17, size: 16 }));
    d.rect(s, 9.25, 1.6, 3.48, 4.4, { fill: 'F1ECF7', line: TR, lw: 1.5, radius: 0.12 });
    d.ill(s, 'person-cartwheeling', 10.45, 1.75, 1.1, 1.1);
    d.t(s, ['Le mot **saute** dans la case ① : le verbe reste ②, le sujet passe **derrière**.', '', 'Aussi : //dan, eerst, vervolgens, ten slotte, dus//.'], 9.4, 2.95, 3.2, 3.0, { size: 14, gap: 4, valign: 'top' });
    band(s, 'Le tremplin peut aussi aller au milieu : //Ik blijf **daarom** thuis.// (après le verbe, sans inversion)', 6.15, 0.62, 'tx2', 16);
  }
  {
    const s = d.page({ g: 8, tag: 'LE WAGON', tagColor: WA, title: 'Le wagon : le verbe file au bout' });
    d.t(s, '//Ik blijf thuis,// …', 0.6, 1.55, 6, 0.45, { size: 18, color: 'tx2' });
    const R = [['verbe simple', [['omdat', 'W'], ['ik', 'n'], ['ziek', 'n'], ['ben.', 'v']]], ['avec un modal', [['omdat', 'W'], ['ik', 'n'], ['thuis', 'n'], ['moet', 'v'], ['werken.', 'i']]], ['au passé composé', [['omdat', 'W'], ['ik', 'n'], ['ziek', 'n'], ['ben', 'v'], ['geweest.', 'i']]], ['verbe séparable', [['omdat', 'W'], ['ik', 'n'], ['de dokter', 'n'], ['opbel.', 'v']]], ['double infinitif', [['omdat', 'W'], ['ik', 'n'], ['lang', 'n'], ['heb', 'v'], ['moeten', 'i'], ['werken.', 'i']]]];
    R.forEach(([lab, parts], i) => {
      const y = 2.1 + i * 0.8;
      d.t(s, lab, 0.6, y, 2.4, 0.62, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      strip(s, 3.0, y, parts, { size: 20, h: 0.62 });
    });
    d.ill(s, 'railway-car', 11.3, 1.55, 1.3, 1.3);
    band(s, 'Dans le wagon, **tous les verbes** vont au bout. Le verbe séparable se recolle : //opbel//.', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 9 la carte des sens (K3)
  {
    const s = d.page({ g: 9, tag: 'LA CARTE', title: 'La carte des sens : un sens, trois syntaxes' });
    const H = [['LE PONT', PO, 'ordre normal'], ['LE TREMPLIN', TR, 'inversion'], ['LE WAGON', WA, 'verbe à la fin']];
    const x0 = 3.0; const CW = [2.2, 3.2, 4.13]; const CX = [x0, x0 + 2.3, x0 + 5.6];
    H.forEach(([h, c, sub], j) => {
      d.rect(s, CX[j], 1.55, CW[j], 0.55, { fill: c, line: null, radius: 0.1 });
      d.t(s, [`**${h}**`, sub], CX[j], 1.55, CW[j], 0.55, { size: 12, color: 'bg1', align: 'center', valign: 'middle', gap: 0 });
    });
    const R = [['plus', 'ajout', 'en', 'bovendien · ook', '—'], ['hourglass-done', 'temps', '—', 'eerst · dan · daarna · toen (puis)', 'toen · als · wanneer · terwijl · voordat · nadat · zodra · sinds · totdat'], ['red-question-mark', 'cause', 'want', '—', 'omdat · doordat · aangezien'],
      ['fast-forward-button', 'conséquence · but', 'dus', 'daarom · dus', 'zodat'], ['balance-scale', 'opposition', 'maar', 'toch', 'hoewel · terwijl · ook al'], ['link', 'condition', '—', 'anders', 'als · tenzij · indien'], ['left-right-arrow', 'comparaison', '—', '—', 'zoals · alsof · dan']];
    const rh = (4.75 - 0.08 * 6) / 7;
    R.forEach(([ic, sens, a, b, c], i) => {
      const y = 2.2 + i * (rh + 0.08);
      d.rect(s, 0.6, y, 2.3, rh, { fill: 'bg2', line: null, radius: 0.08 });
      d.ill(s, ic, 0.68, y + 0.06, rh - 0.12, rh - 0.12);
      d.t(s, `**${sens}**`, 0.68 + rh, y, 2.15 - rh, rh, { size: 13, valign: 'middle' });
      [a, b, c].forEach((t, j) => {
        const col = [PO, TR, WA][j];
        d.rect(s, CX[j], y, CW[j], rh, { fill: col, tr: 90, line: null, radius: 0.08 });
        d.t(s, `//**${t}**//`, CX[j] + 0.08, y, CW[j] - 0.16, rh, { size: t.length > 40 ? 11.5 : 13, color: t === '—' ? 'accent5' : col, align: 'center', valign: 'middle' });
      });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 10 quand : toen, als, wanneer (K4)
  d.section('Les sens');
  {
    const s = d.page({ g: 10, tag: 'LE TEMPS', tagColor: WA, title: 'Quand ? toen, als ou wanneer' });
    const y0 = 2.55; const xL = 0.9; const xR = 12.4; const xN = 7.4;
    d.line(s, xL, y0, xR, y0, { color: hexOf('tx2'), lw: 4 });
    d.rect(s, xN - 0.05, y0 - 0.4, 0.1, 0.8, { fill: VB, line: null, radius: 0 });
    d.t(s, '**NU**', xN - 0.6, y0 - 0.95, 1.2, 0.45, { size: 16, color: VB, align: 'center' });
    d.t(s, 'passé', xL, y0 - 0.9, 2, 0.4, { size: 14, italic: true, color: 'accent5' });
    d.t(s, 'présent · futur', xR - 2.6, y0 - 0.9, 2.6, 0.4, { size: 14, italic: true, color: 'accent5', align: 'right' });
    d.oval(s, 2.2, y0 - 0.2, 0.4, 0.4, { fill: WA });
    d.t(s, '**toen**', 1.7, y0 + 0.3, 1.4, 0.4, { size: 18, color: WA, align: 'center' });
    [4.1, 4.75, 5.4, 6.05].forEach((x) => d.oval(s, x, y0 - 0.14, 0.28, 0.28, { fill: TR }));
    d.t(s, '**als / wanneer**', 3.9, y0 + 0.3, 2.6, 0.4, { size: 16, color: TR, align: 'center' });
    [8.4, 9.4, 10.4].forEach((x) => d.oval(s, x, y0 - 0.14, 0.28, 0.28, { fill: PO }));
    d.t(s, '**als / wanneer**', 8.2, y0 + 0.3, 2.6, 0.4, { size: 16, color: PO, align: 'center' });
    const C = [[WA, 'TOEN', 'une seule fois : un moment, une période', 'Toen ik in Gent woonde, fietste ik veel. · Toen ik thuiskwam, was iedereen weg.'], [TR, 'ALS / WANNEER', 'chaque fois, dans le passé', 'Als het regende, bleven we binnen.'], [PO, 'ALS / WANNEER', 'présent et futur', 'Als ik thuiskom, eet ik. · Wanneer je klaar bent, bel me.'], ['accent6', 'WANNEER?', 'la question', 'Wanneer kom je? · Weet je wanneer hij komt?']];
    const cw = (12.13 - 3 * 0.15) / 4;
    C.forEach(([c, h, sub, ex], i) => {
      const x = 0.6 + i * (cw + 0.15);
      d.rect(s, x, 3.55, cw, 2.5, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.t(s, `**${h}**`, x + 0.1, 3.62, cw - 0.2, 0.45, { size: 17, color: c, align: 'center', valign: 'middle' });
      d.t(s, sub, x + 0.1, 4.05, cw - 0.2, 0.38, { size: 13, italic: true, color: 'tx2', align: 'center' });
      d.t(s, `//${ex}//`, x + 0.15, 4.45, cw - 0.3, 1.55, { size: 14, valign: 'middle' });
    });
    band(s, '//als// = « quand » (habitude, futur) **et** « si ». //wanneer// = « quand », jamais le « si » des questions (//of//).', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 11 avant, pendant, après
  {
    const s = d.page({ g: 11, tag: 'LE TEMPS', tagColor: WA, title: 'Avant, pendant, après : voordat, terwijl, nadat…' });
    // mini-ligne du temps : M = action principale (violet, TR), S = action du wagon (orange, WA)
    const mini = (x, y, w, k) => {
      d.line(s, x, y + 0.42, x + w, y + 0.42, { color: '8A96A8', lw: 1.5 });
      const bar = (fx, fw, c, lab) => { d.rect(s, x + fx * w, y + (lab === 'S' ? 0.08 : 0.5), fw * w, 0.24, { fill: c, line: null, radius: 0.06 }); };
      const L = { voordat: [[0.1, 0.35, TR, 'M'], [0.55, 0.35, WA, 'S']], nadat: [[0.1, 0.35, WA, 'S'], [0.55, 0.35, TR, 'M']], terwijl: [[0.1, 0.8, WA, 'S'], [0.25, 0.5, TR, 'M']], zodra: [[0.1, 0.3, WA, 'S'], [0.42, 0.45, TR, 'M']], totdat: [[0.05, 0.6, TR, 'M'], [0.66, 0.06, WA, 'S']], sinds: [[0.1, 0.06, WA, 'S'], [0.18, 0.75, TR, 'M']] }[k];
      L.forEach(([fx, fw, c, lab]) => bar(fx, fw, c, lab));
    };
    const R = [['voordat', 'avant que', 'Ik bel je [voordat] ik <vertrek>.'], ['nadat', 'après que', '[Nadat] ik gegeten <heb>, ga ik wandelen.'], ['terwijl', 'pendant que', '[Terwijl] ik <kook>, luister ik naar de radio.'], ['zodra', 'dès que', '[Zodra] ik thuis <ben>, stuur ik je een berichtje.'], ['totdat', 'jusqu’à ce que', 'Ik wacht [totdat] je <komt>.'], ['sinds', 'depuis que', '[Sinds] ik in Gent <woon>, fiets ik elke dag.']];
    const cw = (12.13 - 0.25) / 2; const rh = 1.32;
    R.forEach(([w, fr, ex], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.25); const y = 1.6 + Math.floor(i / 2) * (rh + 0.12);
      d.rect(s, x, y, cw, rh, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.rect(s, x + 0.15, y + 0.12, 1.45, 0.5, { fill: WA, line: null, radius: 0.12 });
      d.t(s, `**${w}**`, x + 0.15, y + 0.12, 1.45, 0.5, { size: 16, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, fr, x + 0.15, y + 0.68, 1.45, 0.5, { size: 12, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      mini(x + 1.8, y + 0.15, 1.6, w);
      rich(s, pc(ex, 15, WA), x + 3.55, y + 0.08, cw - 3.65, rh - 0.16);
    });
    d.rect(s, 0.6, 5.98, 0.3, 0.2, { fill: TR, line: null, radius: 0.04 });
    d.t(s, 'action principale', 0.95, 5.92, 2.2, 0.32, { size: 12, color: 'tx2', valign: 'middle' });
    d.rect(s, 3.2, 5.98, 0.3, 0.2, { fill: WA, line: null, radius: 0.04 });
    d.t(s, 'action du wagon', 3.55, 5.92, 2.2, 0.32, { size: 12, color: 'tx2', valign: 'middle' });
    band(s, 'Wagon en tête → **verbe, verbe** : //Nadat ik gegeten **heb**, **ga** ik wandelen.// (diapo 16)', 6.3, 0.55, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 12 cause et conséquence
  {
    const s = d.page({ g: 12, tag: 'CAUSE', tagColor: WA, title: 'Cause et conséquence : une idée, six phrases' });
    d.rect(s, 0.6, 1.6, 2.6, 1.6, { fill: 'EAF2FB', line: PO, lw: 1.5, radius: 0.12 });
    d.ill(s, 'cloud-with-rain', 1.4, 1.68, 1.0, 1.0);
    d.t(s, '**Het regent.**', 0.6, 2.65, 2.6, 0.45, { size: 16, align: 'center' });
    d.t(s, '➜', 3.25, 1.95, 0.7, 0.9, { size: 34, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.rect(s, 4.0, 1.6, 2.6, 1.6, { fill: 'F1ECF7', line: TR, lw: 1.5, radius: 0.12 });
    d.ill(s, 'bus', 4.8, 1.68, 1.0, 1.0);
    d.t(s, '**Ik neem de bus.**', 4.0, 2.65, 2.6, 0.45, { size: 16, align: 'center' });
    d.t(s, 'cause → conséquence', 0.6, 3.25, 6.0, 0.35, { size: 13, italic: true, color: 'accent5', align: 'center' });
    const R = [['P', 'want', 'Ik neem de bus, [want] het <regent>.'], ['W', 'omdat', 'Ik neem de bus, [omdat] het <regent>.'], ['P', 'dus', 'Het regent, [dus] ik <neem> de bus.'], ['T', 'daarom', 'Het regent. [Daarom] <neem> ik de bus.'], ['W', 'zodat', 'Het regent, [zodat] ik de bus <neem>.'], ['W', 'Omdat …,', '[Omdat] het <regent>, <neem> ik de bus.']];
    R.forEach(([k, w, ex], i) => {
      const c = KIND[k][2];
      const y = 1.6 + i * 0.72;
      d.rect(s, 6.9, y, 5.83, 0.64, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1 });
      d.rect(s, 6.9, y, 1.25, 0.64, { fill: c, line: null, radius: 0.1 });
      d.t(s, `**${w}**`, 6.9, y, 1.25, 0.64, { size: 14, color: 'bg1', align: 'center', valign: 'middle' });
      rich(s, pc(ex, 14, c), 8.25, y, 4.4, 0.64);
    });
    d.t(s, ['//want// et //omdat// = même sens (car, parce que), **ordre différent**.', '//zodat// = si bien que, pour que (le résultat, le but).', '//doordat// (B2) = du fait que, une cause non voulue : //Doordat het regende, was er file.//'], 0.6, 3.75, 6.0, 2.2, { size: 15, gap: 8, valign: 'top' });
    band(s, 'Réponse à //Waarom?// : //**Omdat** het regent.// (jamais //Want…// seul en réponse)', 6.15, 0.62, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 13 opposition et concession
  {
    const s = d.page({ g: 13, tag: 'OPPOSITION', tagColor: WA, title: 'L’opposition : maar, toch, hoewel…' });
    d.ill(s, 'balance-scale', 0.75, 1.6, 1.0, 1.0);
    d.t(s, '//Het regent… we gaan wandelen!// — trois syntaxes, un même sens', 1.95, 1.6, 10.8, 1.0, { size: 18, color: 'tx2', valign: 'middle' });
    const R = [['P', 'maar', 'mais', [['Het regent,', 'n'], ['maar', 'P'], ['we', 'n'], ['gaan', 'v'], ['wandelen.', 'i']]], ['T', 'toch', 'pourtant, quand même', [['Het regent.', 'n'], ['Toch', 'T'], ['gaan', 'v'], ['we', 'n'], ['wandelen.', 'i']]], ['W', 'hoewel', 'bien que', [['Hoewel', 'W'], ['het', 'n'], ['regent', 'v'], [',', 'e'], ['gaan', 'v'], ['we', 'n'], ['wandelen.', 'i']]]];
    R.forEach(([k, w, fr, parts], i) => {
      const c = KIND[k][2]; const y = 2.85 + i * 0.95;
      d.ill(s, KIND[k][1], 0.6, y, 0.65, 0.65);
      d.t(s, `**${w}**  ${fr}`, 1.35, y, 2.6, 0.66, { size: 14, color: c, valign: 'middle' });
      strip(s, 4.0, y, parts, { size: 20, h: 0.66 });
    });
    d.rect(s, 0.6, 5.7, 12.13, 0.95, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.t(s, ['**terwijl** = alors que (opposition) : //Ik werk hard, **terwijl** jij niets doet!//', '**ook al** (B2) = même si : //**Ook al regent** het, we gaan wandelen.// (inversion dans la subordonnée, ordre normal après)'], 0.85, 5.72, 11.7, 0.9, { size: 14, gap: 3, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 14 condition et « si »
  {
    const s = d.page({ g: 14, tag: 'CONDITION', tagColor: WA, title: 'La condition et le piège « si »' });
    const R = [['W', 'als', 'si (condition)', '[Als] het mooi weer <is>, gaan we naar zee.'], ['W', 'tenzij', 'à moins que', 'We gaan naar zee, [tenzij] het <regent>.'], ['W', 'indien', 'si (formel)', '[Indien] u vragen <heeft>, kunt u ons bellen.'], ['T', 'anders', 'sinon', 'Neem een jas, [anders] <word> je ziek.']];
    R.forEach(([k, w, fr, ex], i) => card(s, 0.6, 1.6 + i * 0.95, 6.4, 0.85, w, fr, ex, KIND[k][2], { cw: 1.3, size: 15 }));
    d.rect(s, 7.25, 1.6, 5.48, 3.7, { fill: 'FBEDEB', line: VB, lw: 2, radius: 0.12 });
    d.t(s, '**LE PIÈGE « SI »**', 7.45, 1.7, 5.1, 0.45, { size: 17, color: VB });
    d.ill(s, 'red-question-mark', 11.65, 1.7, 0.85, 0.85);
    d.t(s, ['**si = condition → als**', '//**Als** je tijd hebt, kom dan.//', '', '**si = question → of**', '//Ik weet niet **of** hij tijd heeft.//', '//Ze vraagt **of** je komt.//'], 7.45, 2.3, 5.1, 2.9, { size: 16, gap: 3, valign: 'top' });
    d.t(s, 'Test : peut-on dire « est-ce que » ? Oui → //of//. Non → //als//.', 7.25, 5.4, 5.48, 0.6, { size: 14, color: 'tx2', valign: 'middle' });
    band(s, '//of// = « ou » (le pont) **ou** « si » (le wagon) : //Ik weet niet of hij **komt**.// (verbe à la fin)', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 15 questions indirectes
  {
    const s = d.page({ g: 15, tag: 'QUESTIONS', tagColor: WA, title: 'Les mots interrogatifs deviennent des wagons' });
    const R = [[[['Waar', 'W'], ['woont', 'v'], ['hij?', 'n']], [['Weet je', 'n'], ['waar', 'W'], ['hij', 'n'], ['woont?', 'v']]], [[['Hoe laat', 'W'], ['is', 'v'], ['het?', 'n']], [['Kunt u me zeggen', 'n'], ['hoe laat', 'W'], ['het', 'n'], ['is?', 'v']]], [[['Komt', 'v'], ['ze', 'n'], ['morgen?', 'n']], [['Ik vraag me af', 'n'], ['of', 'W'], ['ze', 'n'], ['morgen', 'n'], ['komt.', 'v']]], [[['Wanneer', 'W'], ['begint', 'v'], ['het?', 'n']], [['Weet u', 'n'], ['wanneer', 'W'], ['het', 'n'], ['begint?', 'v']]]];
    R.forEach(([a, b], i) => {
      const y = 1.65 + i * 1.05;
      strip(s, 0.6, y, a, { size: 18, h: 0.6 });
      d.t(s, '➜', 4.65, y, 0.6, 0.6, { size: 24, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      strip(s, 5.35, y, b, { size: 18, h: 0.6 });
    });
    d.rect(s, 0.6, 5.85, 12.13, 0.85, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.ill(s, 'person-tipping-hand', 0.75, 5.9, 0.75, 0.75);
    d.t(s, 'C’est la façon **polie** de poser une question : //Weet u misschien waar het station is?//  Sans mot interrogatif → //of// (si).', 1.65, 5.85, 10.9, 0.85, { size: 15, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 16 verbe, verbe (K2)
  d.section('Composer');
  {
    const s = d.page({ g: 16, tag: 'VERBE, VERBE', title: 'Le wagon en tête : verbe, verbe !' });
    const R = [[['Omdat', 'W'], ['het', 'n'], ['regent', 'v'], [',', 'e'], ['blijf', 'v'], ['ik', 'n'], ['thuis.', 'n']], [['Als', 'W'], ['je tijd', 'n'], ['hebt', 'v'], [',', 'e'], ['bel', 'v'], ['ik', 'n'], ['je.', 'n']], [['Toen', 'W'], ['ik', 'n'], ['thuiskwam', 'v'], [',', 'e'], ['was', 'v'], ['iedereen weg.', 'n']], [['Hoewel', 'W'], ['hij moe', 'n'], ['is', 'v'], [',', 'e'], ['werkt', 'v'], ['hij door.', 'n']]];
    R.forEach((parts, i) => {
      const y = 1.7 + i * 0.95;
      const e = strip(s, 0.6, y, parts, { size: 22, h: 0.68 });
      const P = strip.pos; const ci = P.findIndex(([, , ty]) => ty === 'e');
      d.rect(s, P[ci - 1][0] - 0.06, y - 0.08, P[ci + 1][0] + P[ci + 1][1] - P[ci - 1][0] + 0.12, 0.84, { fill: 'FFFFFF', tr: 100, line: VB, lw: 2, dash: 'dash', radius: 0.14 });
      if (i === 0) d.t(s, '← verbe, verbe', e + 0.2, y, 3, 0.68, { size: 16, bold: true, color: VB, valign: 'middle' });
    });
    d.t(s, 'Le wagon entier occupe la **case ①** : le verbe principal vient **juste après** (case ②), puis le sujet.', 0.6, 5.55, 12.13, 0.5, { size: 17, color: 'tx2' });
    band(s, 'Erreur classique : ✗ //Omdat het regent, ik blijf thuis.//   ✓ //Omdat het regent, **blijf ik** thuis.//', 6.15, 0.62, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 17 les paires
  {
    const s = d.page({ g: 17, tag: 'LES PAIRES', title: 'Les mots en paires : zowel … als, hoe … hoe' });
    const R = [['zowel … als', 'aussi bien … que', 'Ik spreek [zowel] Frans [als] Nederlands.'], ['niet alleen … maar ook', 'non seulement … mais aussi', 'Ze spreekt [niet alleen] Nederlands, [maar ook] Duits.'], ['ofwel … ofwel', 'soit … soit', 'We gaan [ofwel] naar zee, [ofwel] naar de Ardennen.'], ['noch … noch', 'ni … ni (soutenu)', 'Ik drink [noch] koffie, [noch] thee.'], ['hoe … hoe', 'plus … plus', '[Hoe] meer je <oefent>, [hoe] beter je <wordt>.'], ['enerzijds … anderzijds', 'd’un côté … de l’autre', '[Enerzijds] <is> het duur, [anderzijds] <is> het praktisch.']];
    const cw = (12.13 - 0.25) / 2; const rh = 1.3;
    R.forEach(([w, fr, ex], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.25); const y = 1.6 + Math.floor(i / 2) * (rh + 0.12);
      d.rect(s, x, y, cw, rh, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.t(s, `**${w}**`, x + 0.2, y + 0.06, cw - 0.4, 0.4, { size: 17, color: 'accent4', valign: 'middle' });
      d.t(s, fr, x + 0.2, y + 0.44, cw - 0.4, 0.3, { size: 12, italic: true, color: 'accent5', valign: 'middle' });
      rich(s, pc(ex, 14, 'accent4'), x + 0.2, y + 0.74, cw - 0.4, 0.5);
    });
    band(s, '//hoe … hoe// : verbe **à la fin** dans les deux parties. //enerzijds … anderzijds// : **inversion** dans les deux parties.', 6.0, 0.7, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 18 construire une longue phrase (Lego)
  {
    const s = d.page({ g: 18, tag: 'COMPOSER', title: 'Construire une longue phrase, brique par brique' });
    const steps = [[['Ik', 'n'], ['bel', 'v'], ['je.', 'n']], [['Ik', 'n'], ['bel', 'v'], ['je', 'n'], ['als', 'W'], ['ik thuis', 'n'], ['ben,', 'v']], [['Ik', 'n'], ['bel', 'v'], ['je', 'n'], ['als', 'W'], ['ik thuis', 'n'], ['ben,', 'v'], ['maar', 'P'], ['ik', 'n'], ['weet', 'v'], ['niet', 'n']], [['…, maar ik weet niet', 'n'], ['of', 'W'], ['ik', 'n'], ['tijd', 'n'], ['heb.', 'v']]];
    steps.forEach((parts, i) => {
      const y = 1.6 + i * 0.85;
      d.t(s, `**${i + 1}**`, 0.6, y, 0.4, 0.62, { size: 18, color: 'accent5', valign: 'middle' });
      strip(s, 1.05, y, parts, { size: 19, h: 0.62 });
    });
    d.ill(s, 'building-construction', 11.4, 1.55, 1.2, 1.2);
    d.rect(s, 0.6, 5.1, 12.13, 0.95, { fill: 'FDF1E6', line: WA, lw: 1.5, radius: 0.12 });
    rich(s, [['Variante : ', { bold: true, fontSize: 16 }], ['Als', { bold: true, italic: true, color: hexOf(WA), fontSize: 16 }], [' ik thuis ', { italic: true, fontSize: 16 }], ['ben, bel', { bold: true, italic: true, color: hexOf(VB), fontSize: 16 }], [' ik je, ', { italic: true, fontSize: 16 }], ['maar', { bold: true, italic: true, color: hexOf(PO), fontSize: 16 }], [' ik weet niet ', { italic: true, fontSize: 16 }], ['of', { bold: true, italic: true, color: hexOf(WA), fontSize: 16 }], [' ik tijd ', { italic: true, fontSize: 16 }], ['heb', { bold: true, italic: true, color: hexOf(VB), fontSize: 16 }], ['.', { italic: true, fontSize: 16 }]], 0.85, 5.1, 11.7, 0.95);
    band(s, 'Chaque brique garde **son** ordre : le pont ne change rien, le wagon envoie son verbe au bout.', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 19 les pièges
  {
    const s = d.page({ g: 19, tag: 'PIÈGES', title: 'Six pièges à éviter' });
    const R = [['want + verbe à la fin', 'want ik ziek ben', 'want ik ben ziek'], ['omdat + verbe en 2e', 'omdat ik ben ziek', 'omdat ik ziek ben'], ['tremplin sans inversion', 'Daarom ik blijf thuis.', 'Daarom blijf ik thuis.'], ['wagon en tête sans inversion', 'Omdat het regent, ik blijf thuis.', 'Omdat het regent, blijf ik thuis.'], ['dat oublié', 'Ik denk hij komt.', 'Ik denk dat hij komt.'], ['toen « puis » ou « quand » ?', 'Toen ik ging naar huis.', 'Toen ging ik naar huis. / Toen ik thuiskwam, …']];
    const cw = (12.13 - 2 * 0.2) / 3; const ch = 2.2;
    R.forEach(([h, bad, good], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.2); const y = 1.6 + Math.floor(i / 3) * (ch + 0.15);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.t(s, `**${i + 1}. ${h}**`, x + 0.15, y + 0.08, cw - 0.3, 0.5, { size: 14, color: 'tx2', valign: 'middle' });
      d.t(s, `✗  {{${bad}}}`, x + 0.15, y + 0.65, cw - 0.3, 0.65, { size: 15, color: 'accent6', valign: 'middle' });
      d.t(s, `✓  //**${good}**//`, x + 0.15, y + 1.3, cw - 0.3, 0.8, { size: 15, color: 'accent3', valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 20 à retenir
  {
    const s = d.page({ g: 20, tag: 'À RETENIR', title: 'À retenir : pont, tremplin, wagon' });
    const R = [['P', 'en · maar · want · of · dus', 'Ik blijf thuis, want ik ben ziek.'], ['T', 'daarom · toch · daarna · dan · anders · bovendien', 'Ik ben ziek. Daarom blijf ik thuis.'], ['W', 'omdat · dat · als · of · toen · wanneer · terwijl · voordat · nadat · zodra · hoewel · tenzij · zodat + waar, wie, hoe…', 'Ik blijf thuis, omdat ik ziek ben.']];
    R.forEach(([k, words, ex], i) => {
      const [name, ic, c, how] = KIND[k]; const y = 1.6 + i * 1.3;
      d.rect(s, 0.6, y, 12.13, 1.15, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.ill(s, ic, 0.75, y + 0.15, 0.85, 0.85);
      d.t(s, [`**${name}**`, how], 1.75, y + 0.08, 2.6, 1.0, { size: 15, color: c, valign: 'middle', gap: 0 });
      d.t(s, `//${words}//`, 4.4, y + 0.08, 4.6, 1.0, { size: 13, color: 'tx2', valign: 'middle' });
      d.t(s, `//${ex}//`, 9.1, y + 0.08, 3.5, 1.0, { size: 14, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.55, 12.13, 1.2, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.t(s, ['**Wagon en tête → verbe, verbe** : //Omdat het regent, blijf ik thuis.// · **si** : condition = //als//, question = //of//', '**quand** : un moment ou une période unique du passé = //toen// · habitude, futur = //als / wanneer// · question = //wanneer//'], 0.85, 5.58, 11.7, 1.15, { size: 15, gap: 5, valign: 'middle' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 21 divider
  d.divider({ g: 21, tiles: [
    ['Le grand tri', '★', 'FaFilter'], ['Reliez les phrases', '★★', 'FaLink'], ['Une idée ×4', '★★', 'FaRandom'], ['Toen of als?', '★★', 'FaClock'], ['Quel mot\u00a0?', '★★', 'FaPalette'], ['Weet je …?', '★★', 'FaQuestion'],
    ['Le puzzle', '★★', 'FaPuzzlePiece'], ['Les paires', '★★★', 'FaCubes'], ['Le détective', '★★', 'FaSearch'], ['L’histoire en chaîne', '★★', 'FaDice'], ['Pour ou contre ?', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 22 ex1 pont, tremplin ou wagon (tri)
  const ex1 = [['en', 'P'], ['omdat', 'W'], ['daarom', 'T'], ['maar', 'P'], ['als', 'W'], ['toch', 'T'], ['want', 'P'], ['hoewel', 'W'], ['daarna', 'T'], ['of', 'P'], ['terwijl', 'W'], ['bovendien', 'T'], ['dat', 'W'], ['anders', 'T'], ['zodat', 'W']];
  d.ex({ g: 22, title: 'Exercice 1 — Pont, tremplin ou wagon ?', stars: '★', instr: 'Classez les mots : que devient le verbe après chacun ?' }, (s, mode, top) => {
    let by = top;
    if (mode === 'q') {
      const bw = (12.13 - 4 * 0.15) / 5;
      ex1.forEach(([w], i) => {
        const x = 0.6 + (i % 5) * (bw + 0.15); const y = top + Math.floor(i / 5) * 0.58;
        d.rect(s, x, y, bw, 0.48, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, radius: 0.12, rotate: [-2, 1, 2, -1, 1][i % 5] });
        d.t(s, `//**${w}**//`, x, y, bw, 0.48, { size: 17, align: 'center', valign: 'middle', rotate: [-2, 1, 2, -1, 1][i % 5] });
      });
      by = top + 1.85;
    }
    const W = (12.13 - 0.4) / 3; const bh = (mode === 'a' ? 6.4 : 6.85) - by;
    ['P', 'T', 'W'].forEach((k, j) => {
      const [name, ic, c, how] = KIND[k]; const x = 0.6 + j * (W + 0.2);
      d.rect(s, x, by, W, bh, { fill: c, tr: 90, line: c, lw: 2, dash: mode === 'q' ? 'dash' : undefined, radius: 0.12 });
      d.ill(s, ic, x + 0.15, by + 0.1, 0.6, 0.6);
      d.t(s, [`**${name}**`, how], x + 0.85, by + 0.08, W - 1.0, 0.65, { size: 13, color: c, valign: 'middle', gap: 0 });
      if (mode === 'a') {
        const L = ex1.filter(([, kk]) => kk === k).map(([w]) => w);
        if (k === 'W') L.push('(of)');
        d.t(s, `//**${L.join(' · ')}**//`, x + 0.2, by + 0.85, W - 0.4, bh - 1.0, { size: 19, color: c, align: 'center', valign: 'middle' });
      }
    });
    if (mode === 'a') d.t(s, '//of// : pont (ou) ou wagon (si). Hors liste : //dus// = pont ou tremplin, //toen// = wagon (quand) ou tremplin (puis).', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 23 ex2 reliez les phrases
  const ex2 = [['Ik ga slapen.', 'want', 'Ik ben moe.', 'Ik ga slapen, want [[ik ben moe]].'], ['Ik ga slapen.', 'omdat', 'Ik ben moe.', 'Ik ga slapen, omdat [[ik moe ben]].'], ['Ik ben moe.', 'daarom', 'Ik ga slapen.', 'Ik ben moe. Daarom [[ga ik slapen]].'], ['Ik bel je.', 'als', 'Ik ben thuis.', 'Ik bel je als [[ik thuis ben]].'],
    ['Het is koud.', 'toch', 'We gaan wandelen.', 'Het is koud. Toch [[gaan we wandelen]].'], ['Ze werkt.', 'terwijl', 'De kinderen slapen.', 'Ze werkt terwijl [[de kinderen slapen]].'], ['Ik weet niet.', 'of', 'Komt hij morgen?', 'Ik weet niet of [[hij morgen komt]].'], ['Hij is geslaagd.', 'hoewel', 'Hij heeft niet gestudeerd.', 'Hij is geslaagd, hoewel [[hij niet gestudeerd heeft]].']];
  d.ex({ g: 23, title: 'Exercice 2 — Reliez les phrases', stars: '★★', instr: 'Reliez les deux phrases avec le mot donné. Attention à la place du verbe !' }, (s, mode, top) => {
    const rh = (6.5 - top) / 4; const cw = (12.13 - 0.3) / 2;
    ex2.forEach(([a, w, b, ans], i) => {
      const x = 0.6 + Math.floor(i / 4) * (cw + 0.3); const y = top + (i % 4) * rh;
      d.rect(s, x, y + 0.04, cw, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      const k = ['want', 'of'].includes(w) && w !== 'of' ? 'P' : ['daarom', 'toch'].includes(w) ? 'T' : 'W';
      rich(s, [[`${i + 1}  `, { bold: true, fontSize: 14, color: hexOf('accent5') }], [`${a} `, { italic: true, fontSize: 14 }], [`+ ${w} +`, { bold: true, fontSize: 14, color: hexOf(KIND[k][2]) }], [` ${b}`, { italic: true, fontSize: 14 }]], x + 0.15, y + 0.06, cw - 0.3, (rh - 0.1) * 0.42);
      d.t(s, `//${ans}//`, x + 0.15, y + 0.06 + (rh - 0.1) * 0.42, cw - 0.3, (rh - 0.1) * 0.55, { size: 17, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 8 : aussi //hoewel hij niet heeft gestudeerd//. Le verbe de la principale ne bouge pas.', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 24 ex3 une idée, plusieurs phrases
  const ex3 = [['cloud-with-rain', 'Het regent. → Ik neem de bus.', [['want', 'Ik neem de bus, want [[het regent]].'], ['omdat', 'Ik neem de bus, omdat [[het regent]].'], ['daarom', 'Het regent. Daarom [[neem ik de bus]].'], ['Omdat …,', '[[Omdat het regent, neem ik de bus]].']]],
    ['briefcase', 'Ik heb veel werk. → Ik kan niet komen.', [['dus', 'Ik heb veel werk, dus [[ik kan niet komen]].'], ['daarom', 'Ik heb veel werk. Daarom [[kan ik niet komen]].'], ['omdat', 'Ik kan niet komen, omdat [[ik veel werk heb]].'], ['Omdat …,', '[[Omdat ik veel werk heb, kan ik niet komen]].']]]];
  d.ex({ g: 24, title: 'Exercice 3 — Une idée, plusieurs phrases', stars: '★★', instr: 'Écrivez la même idée avec chaque mot de liaison.' }, (s, mode, top) => {
    const W = (12.13 - 0.3) / 2;
    ex3.forEach(([ic, idea, L], j) => {
      const x = 0.6 + j * (W + 0.3);
      d.rect(s, x, top, W, 6.85 - top, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.15, top + 0.12, 0.7, 0.7);
      d.t(s, `**${idea}**`, x + 0.95, top + 0.12, W - 1.1, 0.7, { size: 16, valign: 'middle' });
      const rh = (6.85 - top - 1.0) / 4;
      L.forEach(([w, ans], i) => {
        const y = top + 0.95 + i * rh;
        const k = ['want', 'dus'].includes(w) ? 'P' : w === 'daarom' ? 'T' : 'W';
        d.rect(s, x + 0.15, y + 0.08, 1.35, 0.5, { fill: KIND[k][2], line: null, radius: 0.12 });
        d.t(s, `**${w}**`, x + 0.15, y + 0.08, 1.35, 0.5, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
        d.t(s, `//${ans}//`, x + 1.6, y, W - 1.75, rh - 0.05, { size: 15, valign: 'middle', mode });
      });
    });
  });

  // ---------------------------------------------------------------- 25 ex4 toen, als of wanneer
  const ex4 = ['[[Toen]] ik klein was, woonde ik in Namen.', '[[Als]] het regent, neem ik de bus.', '[[Wanneer]] begint de cursus?', '[[Toen]] ik thuiskwam, was iedereen al weg.', '[[Als]] ik tijd heb, bel ik je.', '[[Als]] we vroeger op vakantie gingen, namen we de trein.', 'Weet je [[wanneer]] de trein vertrekt?', '[[Toen]] hij de brief las, begon hij te lachen.'];
  d.ex({ g: 25, title: 'Exercice 4 — Toen, als of wanneer?', stars: '★★', instr: 'Complétez avec //toen//, //als// ou //wanneer//.' }, (s, mode, top) => {
    d.list(s, ex4.map((e) => `//${e}//`), mode, { y: top + 0.15, w: 12.13, h: 4.4, cols: 2, size: 19, gap: 18 });
    if (mode === 'a') d.t(s, 'N° 2, 5 et 6 : //wanneer// est aussi possible. //toen// = un moment ou une période unique du passé.', 0.6, 6.4, 12.13, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 26 ex5 quel mot de liaison
  const ex5 = ['Ik bel je [[zodra]] ik iets weet.', '[[Hoewel]] het duur is, koop ik het.', 'We vertrekken om 8 uur, [[tenzij]] het sneeuwt.', 'Lees de tekst [[voordat]] je de vragen beantwoordt.', '[[Nadat]] hij gegeten had, ging hij slapen.', 'Ik spreek langzaam, [[zodat]] iedereen me begrijpt.', '[[Terwijl]] ik kook, luister ik naar podcasts.', 'Ik kom niet, [[omdat]] ik ziek ben.'];
  d.ex({ g: 26, title: 'Exercice 5 — Quel mot de liaison ?', stars: '★★', instr: 'Choisissez dans la banque (chaque mot une fois) : //voordat · nadat · terwijl · zodra · zodat · hoewel · tenzij · omdat//.' }, (s, mode, top) => {
    d.list(s, ex5.map((e) => `//${e}//`), mode, { y: top + 0.15, w: 12.13, h: 4.4, cols: 2, size: 19, gap: 18 });
    if (mode === 'a') d.t(s, 'N° 1 : aussi //als//. N° 5 : aussi //Zodra//. N° 7 : aussi //als//, //wanneer// (habitude).', 0.6, 6.4, 12.13, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 27 ex6 questions indirectes
  const ex6 = [['Waar woont Sofie?', 'Weet je [[waar Sofie woont]]?'], ['Hoe laat begint de film?', 'Weet je [[hoe laat de film begint]]?'], ['Komt Karim morgen?', 'Ik vraag me af [[of Karim morgen komt]].'], ['Wat kost dat?', 'Kunt u me zeggen [[wat dat kost]]?'], ['Heeft hij het rapport gelezen?', 'Ik weet niet [[of hij het rapport gelezen heeft]].'], ['Waarom is ze boos?', 'Ik begrijp niet [[waarom ze boos is]].']];
  d.ex({ g: 27, title: 'Exercice 6 — Questions indirectes', stars: '★★', instr: 'Posez la question poliment : le mot interrogatif (ou //of//) devient un wagon.' }, (s, mode, top) => {
    const rh = (6.45 - top) / 6;
    ex6.forEach(([q, a], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.04, 12.13, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.t(s, `**${i + 1}**  //${q}//`, 0.75, y + 0.04, 4.3, rh - 0.1, { size: 16, color: 'tx2', valign: 'middle' });
      d.t(s, '➜', 5.05, y + 0.04, 0.5, rh - 0.1, { size: 20, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `//${a}//`, 5.6, y + 0.04, 7.0, rh - 0.1, { size: 17, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 5 : aussi //of hij het rapport heeft gelezen//. Sans mot interrogatif → //of//.', 0.6, 6.48, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 28 ex7 le puzzle
  const ex7 = [[[['blijf', 'v'], ['Omdat', 'W'], ['thuis.', 'n'], ['het', 'n'], ['regent,', 'v'], ['ik', 'n']], [['Omdat', 'W'], ['het', 'n'], ['regent', 'v'], [',', 'e'], ['blijf', 'v'], ['ik', 'n'], ['thuis.', 'n']]],
    [[['ga', 'v'], ['Ik ben moe.', 'n'], ['slapen.', 'i'], ['Daarom', 'T'], ['ik', 'n']], [['Ik ben moe.', 'n'], ['Daarom', 'T'], ['ga', 'v'], ['ik', 'n'], ['slapen.', 'i']]],
    [[['komt.', 'v'], ['of', 'W'], ['Ik weet niet', 'n'], ['hij', 'n'], ['morgen', 'n']], [['Ik weet niet', 'n'], ['of', 'W'], ['hij', 'n'], ['morgen', 'n'], ['komt.', 'v']]],
    [[['je.', 'n'], ['hebt,', 'v'], ['ik', 'n'], ['Als', 'W'], ['bel', 'v'], ['je tijd', 'n']], [['Als', 'W'], ['je tijd', 'n'], ['hebt', 'v'], [',', 'e'], ['bel', 'v'], ['ik', 'n'], ['je.', 'n']]]];
  d.ex({ g: 28, title: 'Exercice 7 — Le puzzle', stars: '★★', instr: 'Remettez les pièces dans l’ordre.' }, (s, mode, top) => {
    const rh = (6.6 - top) / 4;
    ex7.forEach(([shuf, ok], i) => {
      const y = top + i * rh + 0.1;
      d.t(s, `**${i + 1}**`, 0.6, y, 0.4, 0.62, { size: 18, color: 'accent5', valign: 'middle' });
      strip(s, 1.05, y, mode === 'q' ? shuf : ok, { size: 19, h: 0.62, gap: mode === 'q' ? 0.25 : 0.08 });
    });
  });

  // ---------------------------------------------------------------- 29 ex8 les paires
  const ex8 = ['Ik spreek [[zowel]] Frans [[als]] Nederlands.', 'Ze is [[niet alleen]] slim, [[maar ook]] grappig.', '[[Hoe]] meer je leest, [[hoe]] beter je schrijft.', 'Ik drink [[noch]] koffie, [[noch]] thee.', 'We gaan [[ofwel]] naar zee, [[ofwel]] naar de Ardennen.', '[[Enerzijds]] is het duur, [[anderzijds]] is het heel praktisch.'];
  d.ex({ g: 29, title: 'Exercice 8 — Les paires', stars: '★★★', instr: 'Complétez avec la paire qui convient (chaque paire une fois) : //zowel … als · niet alleen … maar ook · hoe … hoe · noch … noch · ofwel … ofwel · enerzijds … anderzijds//.' }, (s, mode, top) => {
    d.list(s, ex8.map((e) => `//${e}//`), mode, { y: top + 0.2, w: 12.13, h: 4.3, cols: 1, size: 20, gap: 14 });
  });

  // ---------------------------------------------------------------- 30 ex9 détective
  d.ex({ g: 30, title: 'Exercice 9 — Le détective', stars: '★★', instr: 'Tom écrit à sa cheffe. Trouvez les 5 erreurs d’ordre des mots.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Tom Wouters · Aan: Lotte Maes · Onderwerp: ziek', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Beste Lotte,//', '//Sorry, ik kan morgen niet komen, want ik ben ziek. {{Daarom ik blijf}}++ Daarom blijf ik++ de hele week thuis. {{Als ik ben beter}}++ Als ik beter ben++, {{ik stuur}}++ stuur ik++ je meteen een berichtje. Kun je me zeggen {{wanneer is de volgende vergadering}}++ wanneer de volgende vergadering is++? Ik weet ook niet {{als}}++ of++ het rapport al klaar is. Hoewel ik thuis ben, kan ik mijn mails lezen.//', '//Groetjes,//', '//Tom//'];
    d.t(s, txt, 0.95, top + 0.65, 8.3, h - 0.8, { size: 17, gap: 6, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Corrects : //want ik ben ziek// (pont) et //Hoewel ik thuis ben, kan ik…// (verbe, verbe).', 9.9, top + 3.05, 2.83, 2.2, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 31 ex10 l'histoire en chaîne
  {
    const s = d.page({ g: 31, tag: 'JIJ NU !', title: 'Exercice 10 — L’histoire en chaîne', stars: '★★' });
    d.rect(s, 0.6, 1.6, 12.13, 0.85, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.ill(s, 'speech-balloon', 0.75, 1.65, 0.75, 0.75);
    d.t(s, 'Début : //Karim wil vandaag naar Gent gaan…// Chacun·e tire une carte et continue l’histoire avec ce mot.', 1.65, 1.6, 10.9, 0.85, { size: 17, valign: 'middle' });
    const C = [['want', 'P'], ['maar', 'P'], ['dus', 'P'], ['en', 'P'], ['daarom', 'T'], ['toch', 'T'], ['daarna', 'T'], ['anders', 'T'], ['omdat', 'W'], ['als', 'W'], ['hoewel', 'W'], ['terwijl', 'W'], ['zodra', 'W'], ['voordat', 'W'], ['tenzij', 'W'], ['zodat', 'W']];
    C.forEach(([w, k], i) => {
      const x = 0.6 + (i % 8) * 1.52; const y = 2.7 + Math.floor(i / 8) * 1.0;
      d.rect(s, x, y, 1.42, 0.82, { fill: KIND[k][2], line: null, radius: 0.12, rotate: [-3, 2, -1, 3][i % 4] });
      d.t(s, `//**${w}**//`, x, y, 1.42, 0.82, { size: 17, color: 'bg1', align: 'center', valign: 'middle', rotate: [-3, 2, -1, 3][i % 4] });
    });
    d.t(s, ['**1 point** si l’ordre des mots est juste (pont, tremplin ou wagon) · **1 point** si l’histoire reste logique.', 'Exemple : //…, **maar** de trein heeft vertraging. **Daarom** neemt hij de bus. **Terwijl** hij wacht, belt hij zijn baas.//'], 0.6, 4.9, 12.13, 1.8, { size: 16, gap: 8, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 32 ex11 pour ou contre le télétravail
  d.roleplay({
    g: 32, title: 'Exercice 11 — Pour ou contre le télétravail ?',
    scenario: 'Réunion chez Peeters & Co : faut-il passer à trois jours de télétravail ? Objectif : 8 mots de liaison différents.',
    a: ['**A — pour**', 'Défendez le télétravail : 3 arguments, avec une cause et une conséquence.'],
    b: ['**B — contre**', 'Répondez : opposez-vous, posez une condition, proposez un compromis.'],
    bank: '//want · omdat · daarom · dus · bovendien · maar · toch · hoewel · als … dan · tenzij · zodat · enerzijds … anderzijds · Ik denk dat … · Ik weet niet of … · Ik ben het (niet) eens met …//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.6, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'ARGUMENTEN', x + 0.15, y, w - 0.3, 0.6, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const L = [['thumbs-up', 'geen file, meer tijd'], ['thumbs-up', 'rustiger werken'], ['thumbs-up', 'minder kosten'], ['thumbs-down', 'minder contact met collega’s'], ['thumbs-down', 'thuis afgeleid zijn'], ['thumbs-down', 'vergaderingen zijn moeilijker']];
      L.forEach(([ic, t], i) => {
        const yy = y + 0.78 + i * 0.72;
        d.ill(s, ic, x + 0.2, yy, 0.5, 0.5);
        d.t(s, `//${t}//`, x + 0.85, yy - 0.05, w - 1.0, 0.6, { size: 14, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 33 ticket
  d.ticket({
    g: 33,
    q: ['Reliez avec //omdat// : //Ik blijf thuis. Ik ben ziek.//', 'Commencez par //Als// : //Ik bel je als ik tijd heb.//', '//toen//, //als// ou //wanneer// ? //… ik klein was, woonde ik in Namen.//'],
    self: ['Relier', 'Nuancer', 'Composer'],
    teaser: { icon: 'FaBook', text: '**Défi de la semaine** : racontez votre semaine en 6 phrases, avec un pont, un tremplin et un wagon dans chaque phrase.' },
  });
}

module.exports = { meta, build };
