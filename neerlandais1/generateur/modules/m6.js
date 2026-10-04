// Module 6 — Tweeklanken · Les sons doubles
const { K, BORDER, GHOST } = require('../lib');

const meta = { n: 6, slug: 'Tweeklanken', title: 'Tweeklanken — Les sons doubles', short: 'Tweeklanken', template: 'module_6_tweeklanken.md' };

const DBL = 'accent1'; // son double = orange (charte M6)

function build(d) {
  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Tweeklanken', sub: 'Les sons doubles', line: 'huis · tijd · keuken · vrouw',
    visual: (s) => {
      d.rect(s, 7.7, 1.25, 4.6, 3.55, { fill: 'FFFFFF', line: DBL, lw: 5, radius: 0.12, shadow: true });
      d.ill(s, 'house', 9.0, 1.45, 2.0, 2.0);
      d.t(s, 'H##UI##S', 7.7, 3.55, 4.6, 1.05, { size: 54, bold: true, color: 'tx1', align: 'center', valign: 'middle', head: true });
      [['t##ij##d', 'alarm-clock'], ['k##eu##ken', 'cooking'], ['vr##ou##w', 'woman']].forEach(([w, il], i) => {
        const x = 7.7 + i * 1.6;
        d.rect(s, x, 5.05, 1.4, 1.45, { fill: 'FFFFFF', line: null, radius: 0.1 });
        d.ill(s, il, x + 0.43, 5.12, 0.55, 0.55);
        d.t(s, w, x, 5.7, 1.4, 0.7, { size: 20, bold: true, align: 'center', valign: 'middle', head: true });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'GiHumanEar', h: 'Entendre', t: 'Je distingue //u, uu, eu, ui, oe//.', color: 'accent2' },
      { icon: 'FaCommentDots', h: 'Prononcer', t: 'Je fais « glisser » les sons doubles.', color: DBL },
      { icon: 'FaPencilAlt', h: 'Écrire', t: 'Je choisis entre //ij// et //ei//, entre //ou// et //au//.', color: 'accent3' },
    ],
    band: 'Rappel du M1 : ces sons ne changent jamais au pluriel — //huis → huizen · tijd → tijden//',
  });

  // ---------------------------------------------------------------- 3 échauffement (question → reveal)
  {
    const words = ['kat', 'maan', 'huis', 'bus', 'vuur', 'tijd', 'pen', 'boom', 'vrouw'];
    const cols = [
      ['COURT', K.short, ['k%%a%%t', 'b%%u%%s', 'p%%e%%n'], 'FaCut'],
      ['LONG', K.long, ['m<<aa>>n', 'v<<uu>>r', 'b<<oo>>m'], 'FaArrowsAltH'],
      ['DOUBLE', DBL, ['h##ui##s', 't##ij##d', 'vr##ou##w'], 'FaLock'],
    ];
    for (const mode of ['q', 'a']) {
      const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — long, court… ou double ?' }, mode === 'a');
      if (mode === 'q') {
        words.forEach((w, i) => {
          const x = 0.6 + i * 1.367;
          d.word(s, w, x, 1.75, 1.22, 0.75, 'accent5', { size: 22, lw: 1.5, head: true, shadow: true });
        });
      } else d.t(s, 'Les sons doubles ne changent **jamais** : //huis → huizen · tijd → tijden//', 0.6, 1.75, 12.13, 0.75, { size: 19, valign: 'middle', align: 'center' });
      cols.forEach(([lab, c, ws, ic], i) => {
        const x = 0.6 + i * 4.14; const y = 2.8; const h = 4.05;
        d.rect(s, x, y, 3.85, h, { fill: c, tr: 90, line: c, lw: 2 });
        d.rect(s, x, y, 3.85, 0.7, { fill: c, line: null, radius: 0.08 });
        d.t(s, lab, x, y, 3.85, 0.7, { size: 24, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
        d.icon(s, ic, 'FFFFFF', x + 3.3, y + 0.19, 0.32);
        if (mode === 'a') ws.forEach((w, k) => d.t(s, w, x, y + 0.95 + k * 0.98, 3.85, 0.85, { size: 36, bold: true, align: 'center', valign: 'middle', head: true }));
        else d.t(s, '?', x, y + 0.9, 3.85, h - 1.0, { size: 80, bold: true, color: GHOST, align: 'center', valign: 'middle', head: true });
      });
    }
  }

  // ---------------------------------------------------------------- 4 le son qui glisse
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'PRONONCIATION', title: 'Un son double, c’est un son qui glisse' });
    d.rect(s, 0.6, 1.7, 12.13, 0.8, { fill: 'tx2', line: null });
    d.t(s, 'Un son double = **un seul son qui glisse** d’une position de la bouche à une autre.', 0.9, 1.7, 11.6, 0.8, { size: 19, color: 'bg1', valign: 'middle' });
    d.ill(s, 'speaking-head', 0.7, 3.25, 2.3, 2.3);
    d.t(s, 'départ', 5.0, 2.55, 1.4, 0.32, { size: 14, italic: true, color: 'accent5', align: 'center' });
    d.t(s, 'arrivée', 8.3, 2.55, 1.4, 0.32, { size: 14, italic: true, color: 'accent5', align: 'center' });
    const rows = [['ui', '« œ »', '« i »', 'huis', 'house'], ['ij / ei', '« è »', '« i »', 'tijd', 'alarm-clock'], ['ou / au', '« a »', '« ou »', 'vrouw', 'woman']];
    rows.forEach(([snd, a, b, ex, il], i) => {
      const y = 3.15 + i * 1.25; const dd = 0.95;
      d.rect(s, 3.3, y + 0.12, 1.55, 0.85, { fill: DBL, line: null });
      d.t(s, snd, 3.3, y + 0.12, 1.55, 0.85, { size: 26, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.curve(s, 5.7, y + 0.12, 9.0, y + 0.12, { h: 0.42, color: DBL, lw: 3 });
      d.oval(s, 5.7 - dd / 2, y + 0.12, dd, dd, { fill: 'bg2', line: 'tx2', lw: 1.5 });
      d.t(s, a, 5.7 - dd / 2 - 0.1, y + 0.12, dd + 0.2, dd, { size: 17, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
      d.oval(s, 9.0 - dd / 2, y + 0.12, dd, dd, { fill: DBL, tr: 80, line: DBL, lw: 1.5 });
      d.t(s, b, 9.0 - dd / 2 - 0.1, y + 0.12, dd + 0.2, dd, { size: 17, bold: true, color: DBL, align: 'center', valign: 'middle' });
      d.ill(s, il, 10.0, y + 0.17, 0.75, 0.75);
      d.t(s, `//${ex}//`, 10.85, y + 0.12, 1.9, 0.85, { size: 26, bold: true, valign: 'middle', head: true });
    });
  }

  // ---------------------------------------------------------------- 5 carte des sons
  {
    const s = d.page({ g: 5, tag: 'À RETENIR', title: 'La carte des sons doubles' });
    const tiles = [
      ['ij / ei', '« réveil »', 'tijd', 'alarm-clock'], ['ui', '« fauteuil »', 'huis', 'house'], ['eu', '« feu »', 'keuken', 'cooking'], ['oe', '« pour »', 'boek', 'open-book'], ['ou / au', '« aou »', 'vrouw', 'woman'],
      ['aai', '« aïe »', 'saai', 'yawning-face'], ['ooi', '« ô-y »', 'mooi', 'sparkles'], ['oei', '« ouille »', 'doei', 'waving-hand'], ['eeuw', '« é-ou »', 'sneeuw', 'snowflake'], ['ieuw', '« i-ou »', 'nieuw', 'new-button'],
    ];
    const w = 2.266; const h = 2.38;
    tiles.forEach(([snd, fr, ex, il], i) => {
      const x = 0.6 + (i % 5) * (w + 0.2); const y = 1.72 + Math.floor(i / 5) * (h + 0.3);
      d.rect(s, x, y, w, h, { fill: i < 5 ? 'bg2' : 'FDF1E6', line: i < 5 ? BORDER : 'F2C9A0', shadow: true });
      d.t(s, snd, x, y + 0.08, w, 0.6, { size: snd.length > 4 ? 26 : 30, bold: true, color: DBL, align: 'center', valign: 'middle', head: true });
      d.t(s, fr, x, y + 0.68, w, 0.35, { size: 14, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.ill(s, il, x + w / 2 - 0.4, y + 1.05, 0.8, 0.8);
      d.t(s, `//${ex}//`, x, y + 1.85, w, 0.45, { size: 20, bold: true, align: 'center', valign: 'middle' });
    });
    d.chip(s, '3 lettres : voyelle + glissade', 0.6, 4.11, DBL, 0.28, 11);
  }

  // mirror layout for two spellings of one sound (slides 6 and 10)
  const mirror = (s, left, right, sound, h = 2.65) => {
    [[left, 0.6], [right, 7.43]].forEach(([c, x]) => {
      d.rect(s, x, 1.7, 5.3, h, { fill: 'bg1', line: c.color, lw: 2.5, shadow: true });
      d.rect(s, x, 1.7, 5.3, 0.62, { fill: c.color, line: null, radius: 0.08 });
      d.t(s, c.head, x + 0.25, 1.7, 3.6, 0.62, { size: 20, bold: true, color: 'bg1', valign: 'middle', head: true });
      c.ills.forEach((il, k) => d.ill(s, il, x + 5.3 - 0.68 - k * 0.62, 1.73, 0.56, 0.56));
      c.words.forEach((w, k) => d.t(s, w, x + 0.35 + (k % 2) * 2.45, 2.42 + Math.floor(k / 2) * 0.68, 2.4, 0.65, { size: 28, bold: true, valign: 'middle', head: true }));
      if (c.tr) d.t(s, c.tr, x + 0.3, 1.7 + h - 0.48, 4.8, 0.4, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.oval(s, 5.95, 1.7 + h / 2 - 0.42, 1.43, 0.84, { fill: DBL });
    d.t(s, '=', 5.95, 1.7 + h / 2 - 0.5, 1.43, 0.7, { size: 30, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, sound, 5.9, 1.7 + h / 2 + 0.47, 1.53, 0.6, { size: 13, bold: true, color: DBL, align: 'center', valign: 'top' });
  };

  // ---------------------------------------------------------------- 6 ij / ei
  {
    const s = d.page({ g: 6, tag: 'PRONONCIATION', title: 'ij et ei : un son, deux écritures' });
    mirror(s,
      { head: 'lange ij', color: 'accent2', ills: ['alarm-clock', 'wine-glass'], words: ['m^^ij^^n', 'w^^ij^^n', 't^^ij^^d', 'Kortr^^ij^^k'], tr: 'mon · le vin · le temps · Courtrai' },
      { head: 'korte ei', color: DBL, ills: ['train'], words: ['kl##ei##n', 'tr##ei##n', 'w##ei##nig', 'r##ei##s'], tr: 'petit · le train · peu · le voyage' },
      'même son\n« è-i »', 2.55);
    d.t(s, 'À l’écrit, aucune règle : il faut **apprendre** le mot. À la dictée : //Lange ij of korte ei?//', 0.6, 4.33, 12.13, 0.42, { size: 17, align: 'center', valign: 'middle' });
    d.trap(s, 0.6, 4.85, 12.13, 2.0, 'vro**lijk** → {{« vro-lèik »}}', '**-lijk** se prononce « -leuk » : //vrolijk · moeilijk · natuurlijk//', { size: 20 });
  }

  // ---------------------------------------------------------------- 7 ui
  {
    const s = d.page({ g: 7, tag: 'PRONONCIATION', title: 'ui : le son roi du néerlandais' });
    // glide
    d.curve(s, 2.0, 1.95, 4.4, 1.95, { h: 0.3, color: DBL, lw: 3 });
    [['« œ »', 2.0, 'bg2', 'tx2'], ['« i »', 4.4, 'FDF1E6', DBL]].forEach(([t, cx, f, c]) => {
      d.oval(s, cx - 0.36, 1.95, 0.72, 0.62, { fill: f, line: c, lw: 1.5 });
      d.t(s, t, cx - 0.36, 1.95, 0.72, 0.62, { size: 16, bold: true, color: c, align: 'center', valign: 'middle' });
    });
    d.t(s, '**ui** = « œ » qui glisse vers « i ». Ni « oui », ni « ui » français !', 5.2, 1.75, 7.5, 0.8, { size: 19, valign: 'middle' });
    // trio
    const trio = [['h%%u%%t', 'la cabane', 'u court', K.short, ['hut']], ['h<<uu>>r', 'le loyer', 'uu long', K.long, ['key', 'euro-banknote']], ['h##ui##s', 'la maison', 'ui double', DBL, ['house']]];
    trio.forEach(([w, tr, lab, c, ills], i) => {
      const x = 0.6 + i * 4.26; const y = 2.75;
      d.rect(s, x, y, 3.6, 2.3, { fill: 'bg1', line: c, lw: 3, shadow: true });
      ills.forEach((il, k) => d.ill(s, il, x + 1.8 - (ills.length * 0.95) / 2 + k * 0.95 + 0.05, y + 0.12, 0.85, 0.85));
      d.t(s, w, x, y + 1.0, 3.6, 0.75, { size: 38, bold: true, align: 'center', valign: 'middle', head: true });
      d.t(s, tr, x + 0.15, y + 1.78, 2.0, 0.4, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
      d.chip(s, lab, x + 3.6 - 0.15 - (0.4 + lab.length * 0.118), y + 1.82, c, 0.32, 12);
      if (i < 2) d.t(s, '≠', x + 3.6, y + 0.8, 0.66, 0.7, { size: 30, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    // everyday words
    [['b##ui##ten', 'dehors', 'national-park'], ['s##ui##ker', 'le sucre', 'candy'], ['t##ui##n', 'le jardin', 'sunflower'], ['L##ui##k', 'Liège', 'round-pushpin']].forEach(([w, tr, il], i) => {
      const x = 0.6 + i * 3.08; const y = 5.3;
      d.rect(s, x, y, 2.85, 1.5, { fill: 'bg2', line: BORDER });
      d.ill(s, il, x + 0.15, y + 0.33, 0.85, 0.85);
      d.t(s, w, x + 1.1, y + 0.2, 1.7, 0.65, { size: 24, bold: true, valign: 'middle', head: true });
      d.t(s, tr, x + 1.1, y + 0.85, 1.7, 0.45, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 8 piège u / uu / eu
  {
    const s = d.page({ g: 8, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : u, uu, eu — trois sons différents' });
    d.rect(s, 0.6, 1.7, 12.13, 5.15, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const cols = [
      ['u', K.short, 'bus', 'b%%u%%s', '{{« u » français}}', '→ « **eu** » bref'],
      ['uu', K.long, 'fire', 'v<<uu>>r', '= « **u** » français…', '→ mais **long**'],
      ['eu', DBL, 'nose', 'n##eu##s · k##eu##ken · l##eu##k', '= « **eu** » de //feu//', '→ toujours pareil'],
    ];
    cols.forEach(([snd, c, il, w, bad, good], i) => {
      const x = 0.95 + i * 3.95; const y = 2.35;
      d.rect(s, x, y, 3.6, 3.35, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.oval(s, x + 0.2, y + 0.2, 0.95, 0.95, { fill: c });
      d.t(s, snd, x + 0.2, y + 0.2, 0.95, 0.95, { size: 28, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.ill(s, il, x + 2.45, y + 0.2, 0.95, 0.95);
      d.t(s, w, x + 0.15, y + 1.3, 3.3, 0.8, { size: w.length > 20 ? 20 : 30, bold: true, align: 'center', valign: 'middle', head: true });
      d.t(s, [bad, good], x + 0.2, y + 2.12, 3.2, 1.15, { size: 16, gap: 4, align: 'center' });
    });
    d.rect(s, 0.95, 5.92, 11.5, 0.75, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25 });
    d.t(s, '//De k##eu##ken is l##eu##k.//  —  La cuisine est chouette.', 1.2, 5.92, 11.0, 0.75, { size: 21, valign: 'middle', align: 'center' });
  }

  // ---------------------------------------------------------------- 9 oe
  {
    const s = d.page({ g: 9, tag: 'PRONONCIATION', title: 'oe = « ou » (et jamais « u »)' });
    d.rect(s, 0.6, 1.7, 6.75, 5.15, { fill: 'bg2', line: BORDER, shadow: true });
    d.t(s, '##oe## = « ou »', 0.6, 1.8, 6.75, 0.95, { size: 44, bold: true, align: 'center', valign: 'middle', head: true });
    const ws = [['b##oe##k', 'le livre', 'open-book'], ['br##oe##r', 'le frère', 'boy'], ['k##oe##', 'la vache', 'cow-face'], ['vl##oe##r', 'le sol', 'broom'], ['g##oe##d', 'bon, bien', 'thumbs-up']];
    ws.forEach(([w, tr, il], i) => {
      const r = i < 3 ? 0 : 1; const c = i < 3 ? i : i - 3;
      const x = r === 0 ? 0.85 + c * 2.1 : 1.9 + c * 2.1; const y = 2.85 + r * 1.75;
      d.rect(s, x, y, 1.95, 1.6, { fill: 'bg1', line: BORDER });
      d.ill(s, il, x + 0.62, y + 0.1, 0.7, 0.7);
      d.t(s, w, x, y + 0.8, 1.95, 0.45, { size: 22, bold: true, align: 'center', valign: 'middle', head: true });
      d.t(s, tr, x, y + 1.22, 1.95, 0.3, { size: 13, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.t(s, '**oe** se lit **toujours** « ou ».', 0.6, 6.3, 6.75, 0.45, { size: 18, align: 'center', valign: 'middle', color: 'tx2' });
    // boer / buur
    [['b##oe##r', 'le fermier', 'man-farmer', DBL, 'oe', 7.65], ['b<<uu>>r', 'le voisin', 'waving-hand', K.long, 'uu', 10.35]].forEach(([w, tr, il, c, lab, x]) => {
      d.rect(s, x, 1.7, 2.38, 3.2, { fill: 'bg1', line: c, lw: 3, shadow: true });
      d.chip(s, lab, x + 0.15, 1.85, c, 0.32, 13);
      d.ill(s, il, x + 0.54, 2.25, 1.3, 1.3);
      d.t(s, w, x, 3.6, 2.38, 0.7, { size: 34, bold: true, align: 'center', valign: 'middle', head: true });
      d.t(s, tr, x, 4.3, 2.38, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.oval(s, 9.8, 3.0, 0.75, 0.75, { fill: 'accent6' });
    d.t(s, '≠', 9.8, 3.0, 0.75, 0.75, { size: 30, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.bubble(s, '//De b##oe##r is mijn b<<uu>>r.//\nLe fermier est mon voisin.', 7.65, 5.15, 5.08, 1.7, 'accent2', { size: 20, align: 'center' });
  }

  // ---------------------------------------------------------------- 10 ou / au
  {
    const s = d.page({ g: 10, tag: 'PRONONCIATION', title: 'ou et au : un son, deux écritures' });
    mirror(s,
      { head: 'ou', color: 'accent2', ills: ['cold-face', 'woman'], words: ['vr^^ou^^w', 'k^^ou^^d', '^^ou^^d', 'f^^ou^^t'], tr: 'la femme · froid · vieux · l’erreur' },
      { head: 'au', color: DBL, ills: ['blue-circle', 'peacock'], words: ['bl##au##w', 'p##au##w', 'g##au##w', 's##au##s'], tr: 'bleu · le paon · vite · la sauce' },
      'même son\n« aou »', 3.1);
    d.rect(s, 0.6, 5.1, 12.13, 1.75, { fill: 'accent1', tr: 88, line: 'accent1', lw: 1 });
    d.ill(s, 'light-bulb', 0.85, 5.45, 1.0, 1.0);
    d.t(s, ['**Astuce** : //ou// est le plus fréquent.', 'À la dictée : //ou van vrouw of au van blauw?//'], 2.1, 5.15, 10.4, 1.65, { size: 21, valign: 'middle', gap: 8 });
  }

  // ---------------------------------------------------------------- 11 sons à trois lettres
  {
    const s = d.page({ g: 11, tag: 'PRONONCIATION', title: 'Les sons à trois lettres : voyelle + glissade' });
    const rows = [
      ['aa##i##', '« aïe »', '//saai · fraai//', 'ennuyeux · joli', 'yawning-face'],
      ['eeu##w##', '« é-ou »', '//sneeuw · eeuw//', 'la neige · le siècle', 'snowflake'],
      ['oo##i##', '« ô-y »', '//mooi · nooit//', 'beau · jamais', 'sparkles'],
      ['ieu##w##', '« i-ou »', '//nieuw//', 'nouveau', 'new-button'],
      ['oe##i##', '« ouille »', '//doei · moeilijk//', 'salut · difficile', 'waving-hand'],
      ['u##w##', '« u-ou »', '//uw · duwen//', 'votre · pousser', 'index-pointing-at-the-viewer'],
    ];
    rows.forEach(([snd, fr, ex, tr, il], i) => {
      const x = 0.6 + (i % 2) * 6.18; const y = 1.7 + Math.floor(i / 2) * 1.62;
      d.rect(s, x, y, 5.95, 1.45, { fill: i % 4 === 0 || i % 4 === 3 ? 'bg2' : 'bg1', line: BORDER, shadow: true });
      d.t(s, snd, x + 0.15, y, 1.75, 1.45, { size: 32, bold: true, color: 'tx2', valign: 'middle', head: true });
      d.t(s, fr, x + 1.9, y + 0.1, 1.3, 0.5, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, ex, x + 1.9, y + 0.55, 3.0, 0.5, { size: 20, bold: true, valign: 'middle' });
      d.t(s, tr, x + 1.9, y + 1.0, 3.0, 0.35, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      d.ill(s, il, x + 4.95, y + 0.3, 0.85, 0.85);
    });
    d.t(s, 'Le **i** ou le **w** final (en ##orange##) ajoute une petite glissade. //uw// = votre (M2).', 0.6, 6.55, 12.13, 0.35, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 12 tableau
  {
    const s = d.page({ g: 12, tag: 'À RETENIR', title: 'À retenir : le tableau des sons doubles' });
    d.table(s, [
      ['Son', 'Repère FR', 'Exemples', 'Piège'],
      ['##ij## / ##ei##', '« è-i »', '//tijd, klein//', 'deux écritures'],
      ['##ui##', '« œ-i »', '//huis, tuin//', '≠ u, uu'],
      ['##eu##', '« eu » de //feu//', '//keuken, deur//', '≠ u'],
      ['##oe##', '« ou »', '//boek, broer//', '≠ u'],
      ['##ou## / ##au##', '« aou »', '//vrouw, blauw//', 'deux écritures'],
      ['aa##i## · oo##i## · oe##i##', 'aïe · ô-y · ouille', '//saai · mooi · moeilijk//', ''],
      ['eeu##w## · ieu##w## · u##w##', 'é-ou · i-ou · u-ou', '//sneeuw · nieuw · uw//', ''],
    ], { x: 0.6, y: 1.7, w: 12.13, colW: [3.4, 2.9, 3.5, 2.33], size: 20, headSize: 16, rowH: 0.6, headColor: 'tx2',
      cellFill: (r) => (r <= 5 ? (r % 2 ? 'bg1' : 'bg2') : 'FDF1E6') });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
    d.t(s, 'Ce tableau complète le tableau-miroir du M1.', 0.6, 6.55, 12.13, 0.35, { size: 15, italic: true, color: 'accent5' });
  }

  // ---------------------------------------------------------------- 13 le bloc
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'Lire un mot inconnu : le son double est un bloc' });
    [['GiScissors', '1 · Je coupe'], ['FaDoorOpen', '2 · Porte ouverte ?'], ['FaVolumeUp', '3 · Je prononce']].forEach(([, lab], i) => {
      s.addText(lab, { shape: d.S.CHEVRON, x: 0.6 + i * 4.0, y: 1.75, w: 4.05, h: 0.9, fill: { color: ['accent2', 'tx2', 'accent3'][i] }, color: 'FFFFFF', bold: true, fontSize: 20, align: 'center', valign: 'middle', margin: 0 });
    });
    const words = [['moeilijk', 'difficile', [['moei', true, ''], ['lijk', false, '= « leuk »']]], ['keuken', 'la cuisine', [['keu', true, ''], ['ken', false, '']]]];
    words.forEach(([w, tr, parts], i) => {
      const y = 3.0 + i * 1.6;
      d.t(s, `//${w}//`, 0.6, y, 2.6, 0.75, { size: 28, bold: true, valign: 'middle', head: true });
      d.t(s, tr, 0.6, y + 0.72, 2.6, 0.4, { size: 15, italic: true, color: 'accent5' });
      d.line(s, 3.15, y + 0.4, 3.9, y + 0.4, { color: 'accent5', lw: 2 });
      parts.forEach(([p, locked, note], k) => {
        const x = 4.1 + k * 3.05;
        d.rect(s, x, y, 2.6, 1.0, { fill: locked ? 'FDF1E6' : 'bg1', line: locked ? DBL : 'accent5', lw: locked ? 3 : 1.5 });
        d.t(s, locked ? `##${p}##` : p, x, y, 2.6, 1.0, { size: 34, bold: true, align: 'center', valign: 'middle', head: true });
        if (locked) d.icon(s, 'FaLock', DBL, x + 2.2, y + 0.1, 0.28);
        if (note) d.t(s, note, x + 2.7, y, 2.6, 1.0, { size: 19, bold: true, color: 'accent6', valign: 'middle' });
        if (k === 0) d.t(s, '·', x + 2.6, y, 0.45, 1.0, { size: 34, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      });
    });
    d.rect(s, 0.6, 6.15, 12.13, 0.7, { fill: 'tx2', line: null });
    d.t(s, 'Le son double ne se coupe **jamais** et ne change **jamais**. Testez : //bui·ten · nieu·we//', 0.9, 6.15, 11.6, 0.7, { size: 19, color: 'bg1', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Quel son ?', '★', 'FaHeadphones'], ['ij ou ei ?', '★★', 'FaPencilAlt'], ['Les familles', '★', 'FaLayerGroup'],
    ['Tongbrekers', '★★', 'FaMicrophone'], ['Loto des sons', '★', 'FaTh'], ['Dictée des villes', '★★★', 'FaPhoneAlt'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 quel son
  const SC = { u: K.short, uu: K.long, eu: 'accent2', ui: DBL, oe: 'purple', ou: 'tx2' };
  const ex1 = [['h##ui##s', 'ui', 'house'], ['b<<uu>>r', 'uu', 'waving-hand'], ['n^^eu^^s', 'eu', 'nose'], ['b%%u%%s', 'u', 'bus'], ['boer', 'oe', 'man-farmer'], ['f@@ou@@t', 'ou', 'cross-mark'], ['l^^eu^^k', 'eu', 'grinning-face'], ['t##ui##n', 'ui', 'sunflower']];
  d.ex({ g: 15, title: 'Exercice 1 — Quel son ?', stars: '★', instr: 'Écoutez : quel son entendez-vous ? Montrez le bon bouton.' }, (s, mode, top) => {
    if (mode === 'q') {
      Object.entries(SC).forEach(([snd, c], i) => {
        const x = 0.6 + i * 2.06;
        d.rect(s, x, top + 0.1, 1.85, 1.0, { fill: c, line: null, radius: 0.25 });
        d.t(s, snd, x, top + 0.1, 1.85, 1.0, { size: 34, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      });
      d.iconDisc(s, 'FaVolumeUp', 5.95, top + 1.45, 1.4, 'tx2');
      for (let i = 0; i < 8; i++) {
        const x = 0.75 + i * 1.5;
        d.rect(s, x, top + 3.15, 1.3, 1.3, { fill: 'bg2', line: BORDER, lw: 1.25 });
        d.t(s, String(i + 1), x, top + 3.15, 1.3, 1.3, { size: 30, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      }
    } else {
      ex1.forEach(([w, snd, il], i) => {
        const x = 0.6 + (i % 4) * 3.1; const y = top + 0.1 + Math.floor(i / 4) * 2.45;
        d.rect(s, x, y, 2.85, 2.2, { fill: 'bg2', line: BORDER, shadow: true });
        d.num(s, i + 1, x + 0.12, y + 0.12, 0.42, 'accent5', 13);
        d.ill(s, il, x + 1.0, y + 0.15, 0.85, 0.85);
        d.t(s, snd === 'oe' ? 'b**oe**r' : w, x, y + 1.05, 2.85, 0.65, { size: 30, align: 'center', valign: 'middle', head: true, base: snd === 'oe' ? { color: '6E4A9E' } : {} });
        d.chip(s, snd, x + 2.85 / 2 - 0.4, y + 1.73, SC[snd], 0.34, 14);
      });
    }
  });

  // ---------------------------------------------------------------- 16 ex2 ij / ei
  const ex2 = [['m', 'ij', 'n'], ['kl', 'ei', 'n'], ['t', 'ij', 'd'], ['tr', 'ei', 'n'], ['w', 'ei', 'nig'], ['w', 'ij', 'n'], ['r', 'ei', 's'], ['z', 'ij', 'n']];
  d.ex({ g: 16, title: 'Exercice 2 — ij ou ei ?', stars: '★★', instr: 'Complétez avec la lange ij ou la korte ei.' }, (s, mode, top) => {
    const items = ex2.map(([a, m, b]) => (mode === 'q' ? `${a}°°……°°${b}` : `${a}${m === 'ij' ? `^^ij^^` : `##ei##`}${b}`));
    d.list(s, items, mode, { y: top + 0.3, w: 8.0, h: 6.88 - top - 0.4, cols: 2, size: 36, gap: 16 });
    [['lange ij', 'accent2', 'IJ', 'wine-glass'], ['korte ei', DBL, 'EI', 'train']].forEach(([lab, c, big, il], i) => {
      const y = top + 0.2 + i * 2.35;
      d.rect(s, 9.0, y, 3.73, 2.1, { fill: 'bg1', line: c, lw: 3, shadow: true });
      d.t(s, big, 9.2, y + 0.15, 1.6, 1.1, { size: 54, bold: true, color: c, valign: 'middle', head: true });
      d.ill(s, il, 11.35, y + 0.25, 1.0, 1.0);
      d.t(s, lab, 9.2, y + 1.35, 3.3, 0.55, { size: 22, bold: true, color: c, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 17 ex3 familles
  const fam = [
    ['ij / ei', 'accent2', ['tijd', 'klein']], ['ui', DBL, ['huis', 'tuin']], ['eu', 'accent3', ['keuken', 'deur']],
    ['oe', 'purple', ['broer', 'boek']], ['ou / au', 'tx2', ['vrouw', 'blauw']], ['3 lettres', 'accent4', ['mooi', 'saai', 'moeilijk', 'nieuw', 'sneeuw', 'uw']],
  ];
  const ex3 = ['tijd', 'klein', 'huis', 'tuin', 'keuken', 'deur', 'broer', 'boek', 'vrouw', 'blauw', 'mooi', 'saai', 'moeilijk', 'nieuw', 'sneeuw', 'uw'];
  const shuffled = [2, 13, 7, 0, 10, 5, 14, 3, 8, 11, 1, 15, 6, 12, 4, 9].map((i) => ex3[i]);
  d.ex({ g: 17, title: 'Exercice 3 — Les familles de sons', stars: '★', instr: 'Rangez chaque mot dans sa famille.' }, (s, mode, top) => {
    let cy = top;
    if (mode === 'q') {
      shuffled.forEach((w, i) => {
        const x = 0.6 + (i % 8) * 1.53; const y = top + Math.floor(i / 8) * 0.72;
        d.word(s, w, x, y, 1.4, 0.58, 'accent5', { size: 18, lw: 1.25, head: true });
      });
      cy = top + 1.6;
    }
    const w = (12.13 - 5 * 0.17) / 6; const h = 6.88 - cy;
    fam.forEach(([lab, c, ws], i) => {
      const x = 0.6 + i * (w + 0.17);
      d.rect(s, x, cy, w, h, { fill: c, tr: 90, line: c, lw: 1.5 });
      d.rect(s, x, cy, w, 0.55, { fill: c, line: null, radius: 0.08 });
      d.t(s, lab, x, cy, w, 0.55, { size: 18, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      if (mode === 'a') ws.forEach((wd, k) => d.t(s, `//${wd}//`, x, cy + 0.7 + k * 0.58, w, 0.5, { size: 20, bold: true, align: 'center', valign: 'middle' }));
    });
  });

  // ---------------------------------------------------------------- 18 ex4 tongbrekers
  {
    const s = d.page({ g: 18, tag: 'JIJ NU !', title: 'Exercice 4 — Tongbrekers (virelangues)', stars: '★★' });
    const tw = [
      ['In de t##ui##n b##ij## het h##ui##s zit een ##ui##l.', 'Dans le jardin près de la maison, il y a un hibou.', 'owl'],
      ['De k##oe## van de b##oe##r staat op de vl##oe##r.', 'La vache du fermier est sur le sol.', 'cow'],
      ['M##ij##n vr##ou##w heeft het k##ou##d in de sn##eeuw##.', 'Ma femme a froid dans la neige.', 'snowflake'],
    ];
    tw.forEach(([nl, fr, il], i) => {
      const y = 1.7 + i * 1.42;
      d.rect(s, 0.6, y, 12.13, 1.25, { fill: i % 2 ? 'bg1' : 'bg2', line: BORDER, shadow: true });
      d.iconDisc(s, 'FaMicrophone', 0.85, y + 0.25, 0.8, 'accent1');
      d.t(s, nl, 1.95, y + 0.08, 9.5, 0.75, { size: 28, valign: 'middle', head: true, fit: true, max: 28, min: 22 });
      d.t(s, fr, 1.95, y + 0.8, 9.5, 0.42, { size: 16, italic: true, color: 'accent5' });
      d.ill(s, il, 11.6, y + 0.17, 0.9, 0.9);
    });
    d.t(s, '##orange## = son double', 0.6, 6.0, 12.13, 0.35, { size: 14, italic: true, color: 'accent5', align: 'center' });
    d.t(s, '① lentement en chœur   ② vite   ③ défi en binôme : trois fois sans erreur !', 0.6, 6.4, 12.13, 0.45, { size: 18, bold: true, color: 'accent1', align: 'center' });
  }

  // ---------------------------------------------------------------- 19 ex5 loto
  {
    const s = d.page({ g: 19, tag: 'JIJ NU !', title: 'Exercice 5 — Loto des sons', stars: '★' });
    const grid = ['huis', 'leuk', 'boek', 'tijd', 'vrouw', 'mooi', 'klein', 'nieuw', 'deur'];
    d.rect(s, 0.6, 1.7, 5.6, 5.15, { fill: 'tx2', line: null });
    d.t(s, 'B I N G O', 0.6, 1.75, 5.6, 0.6, { size: 24, bold: true, color: 'accent1', align: 'center', valign: 'middle', cs: 4, head: true });
    grid.forEach((w, i) => {
      const x = 0.85 + (i % 3) * 1.72; const y = 2.45 + Math.floor(i / 3) * 1.45;
      d.rect(s, x, y, 1.6, 1.3, { fill: 'FFFFFF', line: null, radius: 0.06 });
      d.t(s, w, x, y, 1.6, 1.3, { size: 22, bold: true, align: 'center', valign: 'middle', head: true });
      if (i === 0 || i === 4) { d.oval(s, x + 0.25, y + 0.15, 1.1, 1.0, { fill: null, line: 'accent6', lw: 3 }); }
    });
    d.ill(s, 'stopwatch', 6.6, 1.75, 0.95, 0.95);
    d.t(s, 'Les règles', 7.7, 1.75, 4, 0.95, { size: 26, bold: true, color: 'tx2', valign: 'middle', head: true });
    const rules = [
      '**1.** Dessinez une grille 3 × 3 avec **9 mots** du module.',
      '**2.** L’enseignant tire un **son** : //ui, eu, oe…//',
      '**3.** Cochez un mot qui contient ce son.',
      '**4.** Première ligne complète : //Bingo!// Lisez vos mots à voix haute pour valider.',
    ];
    d.t(s, rules, 6.6, 2.9, 4.4, 3.9, { size: 18, gap: 12, fit: true, max: 19, min: 14 });
    d.ill(s, 'man-teacher', 11.1, 4.6, 1.6, 1.6);
  }

  // ---------------------------------------------------------------- 20 ex6 dictée des villes
  {
    const s = d.page({ g: 20, tag: 'MISE EN SITUATION', title: 'Exercice 6 — Dictée des villes belges', stars: '★★★' });
    [['A dicte', 'Leuven · Luik · Kortrijk', 'accent2', 0.6], ['B dicte', 'Oudenaarde · Hoei · Ieper', 'purple', 4.45]].forEach(([h, words, c, x]) => {
      d.rect(s, x, 1.7, 3.6, 3.25, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.num(s, h[0], x + 0.2, 1.85, 0.6, c, 20);
      d.t(s, h, x + 0.95, 1.85, 2.5, 0.6, { size: 22, bold: true, color: c, valign: 'middle', head: true });
      d.t(s, words, x + 0.25, 2.55, 3.1, 0.9, { size: 18, bold: true, valign: 'middle' });
      for (let k = 0; k < 3; k++) d.line(s, x + 0.25, 3.75 + k * 0.38, x + 3.35, 3.75 + k * 0.38, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
    });
    d.rect(s, 4.22, 1.7, 0.21, 3.25, { fill: 'accent5', tr: 40, line: null, radius: 0.03 });
    // map
    d.rect(s, 8.3, 1.7, 4.43, 3.25, { fill: 'bg2', line: BORDER });
    const P = d.belgium(s, 8.77, 1.9, 3.5, { fl: 'F2E3A0', wa: 'F2C2B5', de: 'C9D6E8', bx: 'accent5' });
    [[4.70, 50.88], [5.57, 50.63], [3.26, 50.83], [3.60, 50.85], [5.24, 50.52], [2.88, 50.85]].forEach(([lon, lat], i) => {
      const [px, py] = P(lon, lat); d.pin(s, px, py, i < 3 ? 'accent2' : 'purple', 0.3);
    });
    d.rect(s, 0.6, 5.2, 12.13, 1.65, { fill: 'bg2', line: BORDER });
    d.t(s, 'PHRASES UTILES', 0.85, 5.3, 4, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2 });
    d.t(s, '//Met ei of ij? · Met ou of au? · Met eu of ui? · Kunt u dat spellen?//', 0.85, 5.7, 11.6, 1.0, { size: 22, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 21 ticket
  d.ticket({
    g: 21,
    q: ['Quel son dans //huis//, //huur//, //hut// ?', '//ij// ou //ei// : //tr…n//, //t…d// ?', 'Comment se prononce //vrolijk// ?'],
    self: ['Entendre', 'Prononcer', 'Écrire'],
    teaser: { icon: 'FaGlobeEurope', text: '**Volgende keer : Landen en talen** — //Waar kom je vandaan?//' },
  });
}

module.exports = { meta, build };
