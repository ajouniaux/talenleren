// Module 24 — Nou, toch, maar… · Les particules modales (bilan du parcours)
const { BORDER, plain } = require('../lib');

const meta = { n: 24, slug: 'Nou_toch_maar', title: 'Nou, toch, maar… — Les particules modales', short: 'Nou, toch, maar…', template: 'module_24_modale_partikels.md' };

// la palette des nuances
const SOFT = 'accent2'; // adoucir = bleu (^^…^^)
const INS = 'accent1'; // insister, rappeler = orange (##…##)
const ASK = 'accent4'; // questionner = framboise (%%…%%)
const OK = 'accent3'; // rassurer = vert (<<…>>)

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        pr: { fill: 'EAF1F8', line: 'accent2', lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        soft: { fill: SOFT, line: null, color: 'bg1', bold: true },
        ins: { fill: INS, line: null, color: 'bg1', bold: true },
        ask: { fill: ASK, line: null, color: 'bg1', bold: true },
        ok: { fill: OK, line: null, color: 'bg1', bold: true },
      }[ty || 'n'];
      d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      cx += w + gap;
    });
    return cx - gap;
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const trapFrame = (s, h = 4.35) => {
    d.rect(s, 0.6, 1.7, 12.13, h, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
  };
  // a coloured card with a header, used for the families of particles
  const famCard = (s, x, y, w, h, c, head, lines, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'bg1', line: c, lw: 2, shadow: true, radius: 0.08 });
    d.rect(s, x, y, w, 0.55, { fill: c, line: null, radius: 0.08 });
    d.t(s, head, x + 0.2, y, w - 0.4, 0.55, { size: o.headSize || 18, bold: true, color: 'bg1', valign: 'middle', align: o.align || 'left' });
    if (o.ill) d.ill(s, o.ill, x + w - 0.85, y + 0.65, 0.65, 0.65);
    const fh = o.foot ? 0.5 : 0;
    d.t(s, lines, x + 0.25, y + 0.65, w - (o.ill ? 1.15 : 0.5), h - 0.75 - fh, { size: o.size || 17, gap: o.gap ?? 6, valign: o.valign || 'middle' });
    if (o.foot) d.t(s, o.foot, x + 0.25, y + h - 0.6, w - 0.5, 0.5, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Nou, toch, maar…', sub: 'Les particules modales', line: 'Kom maar even binnen, hoor!',
    visual: (s) => {
      d.rect(s, 7.0, 1.0, 5.7, 1.6, { fill: 'E6EBF2', line: null, radius: 0.2 });
      d.ill(s, 'neutral-face', 7.25, 1.3, 1.0, 1.0);
      d.t(s, '//Kom binnen.//', 8.5, 1.0, 4.0, 1.6, { size: 24, color: 'accent5', valign: 'middle', head: true });
      d.t(s, 'sec', 11.7, 1.1, 0.9, 0.35, { size: 12, bold: true, color: 'accent5', align: 'right' });
      d.rect(s, 7.0, 3.0, 5.7, 1.85, { fill: 'FFFFFF', line: null, radius: 0.2, shadow: true });
      d.ill(s, 'smiling-face-with-smiling-eyes', 7.25, 3.4, 1.05, 1.05);
      d.t(s, '//Kom **^^maar^^** **^^even^^** binnen, **<<hoor>>**!//', 8.5, 3.0, 4.05, 1.85, { size: 24, valign: 'middle', head: true });
      d.t(s, 'aimable', 11.4, 3.1, 1.2, 0.35, { size: 12, bold: true, color: OK, align: 'right' });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaAssistiveListeningSystems', h: 'Reconnaître', t: 'Je comprends ce que les petits mots ajoutent : //Je komt toch?//', color: ASK },
      { icon: 'FaSlidersH', h: 'Nuancer', t: 'J’adoucis une demande ou j’insiste : //Kun je me even helpen?//', color: SOFT },
      { icon: 'FaComments', h: 'Le ton juste', t: 'Je parle comme un néerlandophone : //Geen probleem, hoor!//', color: OK },
    ],
    band: 'Sans ces petits mots, le néerlandais sonne sec. Ils sont partout à l’oral et dans les messages.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — sec ou aimable ?' });
    const P = [['Geef me je pen.', 'Geef me je pen **^^eens^^**, alsjeblieft.'], ['Heb je een pen?', 'Heb je **%%soms%%** een pen?'], ['Het is goed.', 'Het is goed, **<<hoor>>**!']];
    P.forEach(([a, b], i) => {
      const y = 1.75 + i * 1.2;
      d.ill(s, 'neutral-face', 0.6, y + 0.12, 0.75, 0.75);
      d.rect(s, 1.5, y, 4.3, 1.0, { fill: 'E6EBF2', line: null, radius: 0.18 });
      d.t(s, `//${a}//`, 1.7, y, 4.0, 1.0, { size: 20, color: 'accent5', valign: 'middle' });
      d.t(s, '⇄', 5.85, y, 0.8, 1.0, { size: 26, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.bubble(s, `//${b}//`, 6.7, y, 5.1, 1.0, 'accent3', { size: 20 });
      d.ill(s, 'smiling-face-with-smiling-eyes', 11.98, y + 0.12, 0.75, 0.75);
    });
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.8, 0.9, 0.9);
    d.t(s, ['Quelle version préférez-vous entendre ?', 'Qu’ajoute le petit mot ? Le **sens** ne change pas… le **ton**, si.'], 2.0, 5.65, 10.5, 1.2, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 la palette des nuances
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'La palette des nuances' });
    d.ill(s, 'artist-palette', 11.9, 0.95, 0.8, 0.8);
    const F = [
      ['ADOUCIR', SOFT, 'even · maar · eens', '//Kijk **^^eens even^^**!//'],
      ['INSISTER, RAPPELER', INS, 'toch · nou · wel', '//Je weet het **##toch##**!//'],
      ['QUESTIONNER', ASK, 'soms · dan · ook alweer', '//Hoe heet hij **%%ook alweer%%**?// (+ //eigenlijk//)'],
      ['RASSURER', OK, 'hoor · wel', '//Dat lukt **<<wel>>**, **<<hoor>>**!//'],
    ];
    const w = 5.92; const h = 2.05;
    F.forEach(([head, c, parts, ex], i) => {
      const x = 0.6 + (i % 2) * (w + 0.29); const y = 1.75 + Math.floor(i / 2) * (h + 0.2);
      d.rect(s, x, y, w, h, { fill: c, tr: 90, line: c, lw: 2, radius: 0.12 });
      d.oval(s, x + 0.25, y + 0.25, 0.42, 0.42, { fill: c });
      d.t(s, head, x + 0.8, y + 0.2, w - 1.0, 0.5, { size: 15, bold: true, color: c, valign: 'middle', cs: 2 });
      d.t(s, parts, x + 0.25, y + 0.72, w - 0.5, 0.65, { size: 26, bold: true, color: c, valign: 'middle', head: true, fit: true, max: 26, min: 18 });
      d.t(s, ex, x + 0.25, y + 1.38, w - 0.5, 0.55, { size: 19, valign: 'middle' });
    });
    band(s, 'Un mot peut avoir deux couleurs (//wel//). L’**intonation** compte autant que le mot.', 6.3, 0.58, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 5 adoucir
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Adoucir : even, maar, eens' });
    const C = [['even', 'un instant, juste', ['//Kun je me **^^even^^** helpen?//', '//Wacht **^^even^^**!//', '//Heb je **^^even^^** tijd?//'], 'hourglass-not-done'], ['maar', 'vas-y, je t’en prie', ['//Kom **^^maar^^** binnen!//', '//Zeg het **^^maar^^**.//', '(= je vous écoute)'], 'waving-hand'], ['eens', 'donc, pour voir', ['//Kijk **^^eens^^**!//', '//Probeer het **^^eens^^**.//', '//Kom **^^eens^^** langs!//'], 'eyes']];
    const w = (12.13 - 2 * 0.25) / 3;
    C.forEach(([p, gl, ex, il], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 3.6, { fill: 'bg1', line: SOFT, lw: 2, shadow: true, radius: 0.08 });
      d.ill(s, il, x + 0.25, 1.9, 0.8, 0.8);
      d.t(s, p, x + 1.2, 1.85, w - 1.4, 0.6, { size: 32, bold: true, color: SOFT, valign: 'middle', head: true });
      d.t(s, gl, x + 1.2, 2.42, w - 1.4, 0.35, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, ex, x + 0.3, 2.95, w - 0.6, 2.2, { size: 19, gap: 10, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.5, 12.13, 0.75, { fill: 'bg2', line: BORDER });
    d.t(s, 'Combinaisons : //Wacht **^^maar even^^**. · Kijk **^^eens even^^**.// — Rappel M16 : l’impératif + petit mot', 0.85, 5.5, 11.7, 0.75, { size: 18, valign: 'middle' });
    d.t(s, 'Nouveau : //even// marche aussi dans les questions polies.', 0.6, 6.4, 12.13, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 6 toch
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'toch : trois nuances' });
    const C = [['rappel, évidence', 'face-with-raised-eyebrow', '//Je weet **##toch##** dat de vergadering om 9 uur begint!//', 'tu sais bien que…'], ['question qui attend « oui »', 'slightly-smiling-face', '//Je komt **##toch##** morgen?//', 'tu viens demain, hein ?'], ['insistance', 'folded-hands', '//Kom **##toch##** binnen!//', 'entre donc !']];
    const w = (12.13 - 2 * 0.25) / 3;
    C.forEach(([h, il, ex, fr], i) => {
      const x = 0.6 + i * (w + 0.25);
      famCard(s, x, 1.7, w, 3.0, INS, h, [ex], { ill: il, size: 18, headSize: 15, valign: 'middle', foot: fr });
    });
    d.rect(s, 0.6, 4.95, 12.13, 1.0, { fill: 'bg2', line: BORDER });
    d.ill(s, 'umbrella-with-rain-drops', 0.8, 5.07, 0.75, 0.75);
    d.t(s, 'Sens plein : //Het regent, maar ik ga **toch**.// = quand même, pourtant', 1.75, 4.95, 10.8, 1.0, { size: 19, valign: 'middle' });
    d.t(s, 'Rappel M13 : //Toch wel!// = « mais si ! » · //toch// = la particule la plus fréquente', 0.6, 6.15, 12.13, 0.6, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 7 nou / allez, zeg
  {
    const s = d.page({ g: 7, tag: 'CULTURE', title: 'nou… et en Flandre : allez, zeg' });
    const C = [
      ['nl', 'AUX PAYS-BAS : nou', 0.6, 'accent2', [['Wat doe je **##nou##**?', 'surprise'], ['Kom **##nou##**!', 'impatience'], ['**##Nou##**, ik ga naar huis.', 'bon, eh bien…']]],
      ['be', 'EN FLANDRE : allez, zeg', 6.81, 'accent4', [['**##Allez##**, kom!', 'allez, viens !'], ['**##Zeg##**, heb je even tijd?', 'dis, tu as un moment ?'], ['**##Allez##**, tot morgen!', 'bon, à demain !']]],
    ];
    C.forEach(([fl, h, x, c, B]) => {
      d.flag(s, fl, x, 1.75, 0.75);
      d.t(s, h, x + 0.95, 1.7, 4.9, 0.6, { size: 17, bold: true, color: c, valign: 'middle', cs: 1 });
      B.forEach(([t, gl], i) => {
        const y = 2.5 + i * 1.08;
        d.bubble(s, `//${t}//`, x, y, 3.7, 0.85, c, { size: 19 });
        d.t(s, gl, x + 3.85, y, 2.05, 0.85, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
      });
    });
    d.line(s, 6.66, 1.8, 6.66, 5.7, { color: BORDER, lw: 1.5, arrow: false });
    band(s, 'En Flandre, //nou// se dit plutôt //nu// (« maintenant »). //Nou, en?// = « et alors ? »', 6.05, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 8 questions
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Questions : soms, dan, ook alweer…' });
    const C = [['soms', 'par hasard', '//Heb je **%%soms%%** een pen?//', 'pen'], ['dan', 'alors, donc', '//Koffie of thee? Wat wil je **%%dan%%**?//', 'teacup-without-handle'], ['ook alweer', 'déjà', '//Hoe heet die klant **%%ook alweer%%**?//', 'thinking-face'], ['eigenlijk', 'au fait, en fait', '//Waar woon je **%%eigenlijk%%**?//', 'house']];
    const w = 5.92; const h = 1.95;
    C.forEach(([p, gl, ex, il], i) => {
      const x = 0.6 + (i % 2) * (w + 0.29); const y = 1.7 + Math.floor(i / 2) * (h + 0.2);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: ASK, lw: 2, shadow: true, radius: 0.08 });
      d.ill(s, il, x + 0.25, y + 0.3, 0.9, 0.9);
      d.t(s, p, x + 1.35, y + 0.15, 2.8, 0.6, { size: 28, bold: true, color: ASK, valign: 'middle', head: true });
      d.t(s, gl, x + 4.0, y + 0.15, 1.75, 0.6, { size: 14, italic: true, color: 'accent5', valign: 'middle', align: 'right' });
      d.t(s, ex, x + 1.35, y + 0.85, w - 1.55, 0.95, { size: 19, valign: 'middle' });
    });
    band(s, '//soms// = question plus polie · //ook alweer// = « j’ai oublié… » · //eigenlijk// = question en passant', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 9 wel / hoor
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'wel et hoor : affirmer, rassurer' });
    famCard(s, 0.6, 1.7, 6.6, 4.1, OK, 'wel — trois emplois', [
      '**contraste** : //Ik heb geen auto, maar **<<wel>>** een fiets.//',
      '**nuance** : //Het is **<<wel>>** duur.// (quand même)',
      '**confiance** : //Dat lukt **<<wel>>**.// (ça va aller)',
    ], { size: 18, gap: 14, valign: 'middle', foot: 'Rappel M13 : //Ik werk niet. — Ik **wel**!//' });
    famCard(s, 7.45, 1.7, 5.28, 4.1, OK, 'hoor — en fin de phrase', [
      'rassurer, confirmer :',
      '//Geen probleem, **<<hoor>>**!//',
      '//Ja **<<hoor>>**! · Nee **<<hoor>>**!//',
    ], { size: 18, gap: 14, valign: 'middle', ill: 'thumbs-up', foot: 'très amical, surtout aux Pays-Bas' });
    band(s, '//hoor// est toujours **à la fin** : il rend la phrase plus chaleureuse.', 6.05, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 10 piège traduction
  {
    const s = d.page({ g: 10, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : pas de traduction mot à mot' });
    trapFrame(s, 4.4);
    const R = [['« Tu viens, **hein** ? »', 'Je komt **##toch##**?'], ['« Tu n’aurais pas un stylo, **par hasard** ? »', 'Heb je **%%soms%%** een pen?'], ['« Regarde **donc** ! »', 'Kijk **^^eens^^**!'], ['« Comment il s’appelle, **déjà** ? »', 'Hoe heet hij **%%ook alweer%%**?'], ['« C’est cher, **quand même**. »', 'Het is **<<wel>>** duur.']];
    R.forEach(([fr, ok], i) => {
      const y = 2.3 + i * 0.75;
      d.t(s, fr, 0.95, y, 6.4, 0.65, { size: 18, valign: 'middle' });
      d.line(s, 7.4, y + 0.33, 7.95, y + 0.33, { color: 'accent3', lw: 2 });
      d.rect(s, 8.0, y + 0.03, 4.55, 0.6, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.15, y + 0.03, 4.35, 0.6, { size: 18, valign: 'middle' });
    });
    band(s, 'On ne traduit pas le mot : on traduit l’**intention**. Écoutez la mélodie de la phrase.', 6.3, 0.58, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 11 la place
  {
    const s = d.page({ g: 11, tag: 'GRAMMAIRE', title: 'La place des particules' });
    const R = [
      [['Kun', 'v'], ['je', 'pr'], ['me', 'pr'], ['even', 'soft'], ['helpen?', 'v']],
      [['Kom', 'v'], ['maar', 'soft'], ['binnen!', 'n']],
      [['Ik', 'n'], ['kom', 'v'], ['morgen', 'n'], ['wel.', 'ok']],
      [['Heb', 'v'], ['je', 'pr'], ['soms', 'ask'], ['een pen?', 'n']],
    ];
    R.forEach((r, i) => strip(s, 0.6, 1.75 + i * 0.92, r, { size: 22, h: 0.72 }));
    d.card(s, 7.6, 1.75, 5.13, 2.0, { head: 'La règle', color: 'tx2', icon: 'FaMapSigns', body: 'après le verbe et les petits pronoms (//me, je, het//), avant le complément et le 2ᵉ verbe — comme //niet// (M13)', size: 16 });
    d.t(s, 'COMBINAISONS FIXES', 7.6, 3.95, 5.1, 0.32, { size: 12, bold: true, color: 'accent5', cs: 2 });
    ['maar even', 'eens even', 'toch even', 'nou eens'].forEach((c, i) => {
      const x = 7.6 + (i % 2) * 2.6; const y = 4.35 + Math.floor(i / 2) * 0.62;
      d.rect(s, x, y, 2.45, 0.5, { fill: 'bg2', line: SOFT, lw: 1.25, radius: 0.25 });
      d.t(s, `//${c}//`, x, y, 2.45, 0.5, { size: 17, bold: true, color: SOFT, align: 'center', valign: 'middle' });
    });
    band(s, '✗ //{{Kun je even me helpen?}}// → ✓ //Kun je **me** **even** helpen?//', 5.95, 0.8, 'tx2', 20);
  }

  // ---------------------------------------------------------------- 12 piège même mot
  {
    const s = d.page({ g: 12, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : le même mot, deux sens' });
    const C = [
      ['soms', ['Ik ga soms naar Gent.', 'parfois'], ['Heb je **%%soms%%** een pen?', 'par hasard']],
      ['even', ['Ze zijn even groot.', 'aussi'], ['Wacht **^^even^^**!', 'un instant']],
      ['maar', ['Klein maar fijn.', 'mais'], ['Kom **^^maar^^**!', 'vas-y']],
      ['eens', ['Ik was eens in Japan.', 'une fois'], ['Kijk **^^eens^^**!', 'donc']],
      ['toch', ['Hij is moe en toch werkt hij.', 'pourtant'], ['Je komt **##toch##**?', 'hein ?']],
      ['wel', ['Het gaat wel.', 'ça va, sans plus'], ['Ik **<<wel>>**!', 'moi, si !']],
    ];
    const w = 5.92; const h = 1.22;
    C.forEach(([word, full, part], i) => {
      const x = 0.6 + (i % 2) * (w + 0.29); const y = 1.7 + Math.floor(i / 2) * (h + 0.14);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: BORDER, lw: 1, shadow: true, radius: 0.08 });
      d.rect(s, x, y, 1.1, h, { fill: 'tx2', line: null, radius: 0.08 });
      d.t(s, word, x, y, 1.1, h, { size: 19, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.rect(s, x + 1.1, y, 2.35, h, { fill: 'E6EBF2', line: null });
      d.t(s, `//${full[0]}//`, x + 1.2, y + 0.05, 2.18, h - 0.5, { size: 14, valign: 'middle', color: 'tx1' });
      d.t(s, full[1], x + 1.2, y + h - 0.45, 2.18, 0.38, { size: 12, bold: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${part[0]}//`, x + 3.55, y + 0.05, w - 3.65, h - 0.5, { size: 15, valign: 'middle' });
      d.t(s, `particule : ${part[1]}`, x + 3.55, y + h - 0.45, w - 3.65, 0.38, { size: 12, bold: true, color: 'accent3', valign: 'middle' });
    });
    d.t(s, [`**sens plein** (gris) · **particule** (couleur) — Astuce : si on peut enlever le mot sans perdre l’information, c’est une particule.`], 0.6, 5.85, 12.13, 0.9, { size: 16, align: 'center', valign: 'middle', color: 'tx2' });
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : la fiche des particules' });
    const T = [
      ['even', SOFT, 'adoucir', 'Kun je me even helpen?'], ['maar', SOFT, 'inviter', 'Kom maar binnen!'], ['eens', SOFT, 'adoucir', 'Kijk eens!'],
      ['toch', INS, 'rappeler, insister', 'Je komt toch?'], ['nou', INS, 'surprise, impatience', 'Kom nou!'],
      ['wel', OK, 'affirmer, rassurer', 'Dat lukt wel.'], ['hoor', OK, 'rassurer', 'Geen probleem, hoor!'],
      ['soms', ASK, 'par hasard', 'Heb je soms een pen?'], ['dan', ASK, 'alors', 'Wat wil je dan?'], ['ook alweer', ASK, 'déjà', 'Hoe heet hij ook alweer?'],
    ];
    const w = 5.92; const rh = 0.82;
    T.forEach(([p, c, role, ex], i) => {
      const col = i < 5 ? 0 : 1; const r = i % 5;
      const x = 0.6 + col * (w + 0.29); const y = 1.7 + r * rh;
      d.rect(s, x, y + 0.05, w, rh - 0.1, { fill: r % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.5 });
      d.rect(s, x + 0.12, y + 0.15, 1.4, rh - 0.3, { fill: c, line: null, radius: 0.1 });
      d.t(s, p, x + 0.12, y + 0.15, 1.4, rh - 0.3, { size: p.length > 6 ? 14 : 17, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, role, x + 1.62, y + 0.05, 1.9, rh - 0.1, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${ex}//`, x + 3.55, y + 0.05, w - 3.6, rh - 0.1, { size: 15, valign: 'middle' });
    });
    band(s, 'Place : après le verbe et les petits pronoms · //hoor// à la fin · l’intonation fait la moitié du travail !', 6.0, 0.7, 'accent6', 17);
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Plus aimable !', '★', 'FaSmile'], ['La bonne particule', '★★', 'FaPuzzlePiece'], ['Traduisez l’intention', '★★', 'FaLanguage'], ['Particule ou mot plein ?', '★★', 'FaBalanceScale'],
    ['Le détective', '★★', 'FaSearch'], ['Le théâtre des émotions', '★', 'FaTheaterMasks'], ['La pause-café', '★★★', 'FaCoffee'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 plus aimable
  const ex1 = [['Wacht!', 'Wacht even!'], ['Kom binnen.', 'Kom maar binnen.'], ['Kijk!', 'Kijk eens!'], ['Heb je een pen?', 'Heb je soms een pen?'], ['Kun je me helpen?', 'Kun je me even helpen?'], ['Geen probleem.', 'Geen probleem, hoor!']];
  d.ex({ g: 15, title: 'Exercice 1 — Plus aimable !', stars: '★', instr: 'Ajoutez une particule pour rendre la phrase plus aimable. Lisez avec le sourire !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex1.forEach(([a, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.ill(s, 'neutral-face', 1.1, y + (rh - 0.5) / 2, 0.5, 0.5);
      d.rect(s, 1.7, y + 0.06, 3.9, rh - 0.12, { fill: 'E6EBF2', line: null, radius: 0.15 });
      d.t(s, `//${a}//`, 1.85, y + 0.06, 3.7, rh - 0.12, { size: 19, color: 'accent5', valign: 'middle' });
      d.line(s, 5.75, y + rh / 2, 7.05, y + rh / 2, { color: OK, lw: 3 });
      d.t(s, '+ particule', 5.7, y + rh / 2 - 0.36, 1.4, 0.3, { size: 11, bold: true, color: OK, align: 'center' });
      d.rect(s, 7.15, y + 0.06, 4.9, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25, radius: 0.15 });
      if (mode === 'a') d.t(s, `//${b}//`, 7.3, y + 0.06, 4.7, rh - 0.12, { size: 20, bold: true, color: 'accent3', valign: 'middle' });
      d.ill(s, 'smiling-face-with-smiling-eyes', 12.18, y + (rh - 0.5) / 2, 0.5, 0.5);
    });
  });

  // ---------------------------------------------------------------- 16 ex2 la bonne particule
  const ex2 = ['Kom [[maar]] binnen, de deur is open.', 'Heb je [[soms]] een oplader? Mijn gsm is bijna leeg.', 'Je komt [[toch]] morgen? We rekenen op je!', 'Hoe heet die klant [[ook alweer]]?', 'Kun je me [[even]] helpen?', 'Ik heb geen auto, maar [[wel]] een fiets.', 'Nee, dat is geen probleem, [[hoor]]!', 'Koffie of thee? Wat wil je [[dan]]?'];
  d.ex({ g: 16, title: 'Exercice 2 — La bonne particule', stars: '★★', instr: 'Complétez avec une particule de la banque. Chaque particule sert une fois.' }, (s, mode, top) => {
    d.list(s, ex2.map((e) => `//${e}//`), mode, { y: top + 0.1, w: 12.13, h: 4.15, cols: 1, size: 19, gap: 9 });
    const by = 6.0;
    d.rect(s, 0.6, by, 12.13, 0.85, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE', 0.8, by, 1.3, 0.85, { size: 12, bold: true, color: 'accent5', cs: 2, valign: 'middle' });
    const bank = [['hoor', OK], ['even', SOFT], ['dan', ASK], ['soms', ASK], ['wel', OK], ['maar', SOFT], ['ook alweer', ASK], ['toch', INS]];
    let x = 2.1;
    bank.forEach(([p, c]) => {
      const w = p.length > 5 ? 1.75 : 1.1;
      d.rect(s, x, by + 0.16, w, 0.53, { fill: c, line: null, radius: 0.1 });
      d.t(s, p, x, by + 0.16, w, 0.53, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      x += w + 0.18;
    });
  });

  // ---------------------------------------------------------------- 17 ex3 traduisez l'intention
  const ex3 = [['Tu viens demain, __hein__ ?', 'Je komt toch morgen?'], ['Tu n’aurais pas un stylo, __par hasard__ ?', 'Heb je soms een pen?'], ['Regarde __donc__ !', 'Kijk eens!'], ['Attends __un instant__ !', 'Wacht even!'], ['Comment il s’appelle, __déjà__ ?', 'Hoe heet hij ook alweer?'], ['Pas de souci, __hein__ !', 'Geen probleem, hoor!']];
  d.ex({ g: 17, title: 'Exercice 3 — Traduisez l’intention', stars: '★★', instr: 'Traduisez. Le mot souligné devient une particule.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([fr, nl], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'accent5', 13);
      d.rect(s, 1.1, y + 0.05, 5.6, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.flag(s, 'fr', 1.22, y + (rh - 0.07) / 2 - 0.15, 0.45);
      d.t(s, fr, 1.8, y + 0.05, 4.85, rh - 0.12, { size: 18, valign: 'middle' });
      d.line(s, 6.8, y + rh / 2, 7.3, y + rh / 2, { color: 'accent1', lw: 2.5 });
      d.rect(s, 7.35, y + 0.05, 5.38, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${nl}//`, 7.5, y + 0.05, 5.15, rh - 0.12, { size: 19, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex4 particule ou mot plein
  const ex4 = ['Ik ga soms naar de film.', 'Heb je soms een pen?', 'Wacht even!', 'Ze zijn even oud.', 'Kom maar binnen!', 'Het is klein maar mooi.', 'Je komt toch?', 'Hij is ziek, en toch werkt hij.'];
  d.ex({ g: 18, title: 'Exercice 4 — Particule ou mot plein ?', stars: '★★', instr: 'Classez les phrases : le mot en gras est-il une particule ou un mot au sens plein ?' }, (s, mode, top) => {
    const rh = (6.88 - top) / 8;
    const keys = ['soms', 'soms', 'even', 'even', 'maar', 'maar', 'toch', 'toch'];
    ex4.forEach((t, i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.04, 6.4, rh - 0.08, { fill: Math.floor(i / 2) % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.75 });
      d.t(s, `**${i + 1}**   //${t.replace(keys[i], `**${keys[i]}**`)}//`, 0.75, y + 0.04, 6.2, rh - 0.08, { size: 17, valign: 'middle' });
    });
    const COLS = [['PARTICULE', OK, [['2', 'soms', 'par hasard'], ['3', 'even', 'un instant'], ['5', 'maar', 'vas-y'], ['7', 'toch', 'hein ?']]], ['SENS PLEIN', 'accent5', [['1', 'soms', 'parfois'], ['4', 'even', 'aussi'], ['6', 'maar', 'mais'], ['8', 'toch', 'pourtant']]]];
    COLS.forEach(([h, c, items], k) => {
      const x = 7.3 + k * 2.77; const w = 2.65;
      d.rect(s, x, top, w, 6.88 - top, { fill: mode === 'a' ? 'bg1' : 'bg2', line: c, lw: 2, dash: mode === 'q' ? 'dash' : undefined, radius: 0.08 });
      d.rect(s, x, top, w, 0.55, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, top, w, 0.55, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      if (mode === 'a') {
        items.forEach(([n, wd, gl], j) => {
          const y = top + 0.75 + j * 1.05;
          d.num(s, n, x + 0.15, y + 0.2, 0.45, c, 14);
          d.t(s, [`**//${wd}//**`, gl], x + 0.75, y, w - 0.85, 0.9, { size: 15, gap: 0, valign: 'middle' });
        });
      }
    });
  });

  // ---------------------------------------------------------------- 19 ex5 détective
  d.ex({ g: 19, title: 'Exercice 5 — Le détective', stars: '★★', instr: 'Karim et Sofie s’écrivent. Trouvez les 5 erreurs de particules.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'F4F7FA', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'Chat · Karim ↔ Sofie', 0.85, top, 8.5, 0.5, { size: 13, bold: true, color: 'bg1', valign: 'middle' });
    const L = [
      [0, 'Hoi Sofie, kun je {{even me helpen}}++ me even helpen++? De printer werkt niet.'],
      [1, 'Ja hoor, kom {{binnen maar}}++ maar binnen++!'],
      [0, '{{Heb je een A4-papier soms?}}++ Heb je soms A4-papier?++'],
      [1, '{{Kijk soms}}++ Kijk eens++ in de kast, daar ligt papier.'],
      [0, 'Dank je! Je komt morgen wel naar de vergadering, toch?'],
      [1, 'Ja, natuurlijk. Geen probleem, {{nou}}++ hoor++!'],
    ];
    const lh = (h - 0.65) / 6;
    L.forEach(([who, t], i) => {
      const y = top + 0.6 + i * lh;
      const x = who ? 2.6 : 0.8; const c = who ? 'accent3' : 'accent2';
      d.rect(s, x, y + 0.04, 6.8, lh - 0.1, { fill: c, tr: 86, line: null, radius: 0.15 });
      d.t(s, `**${who ? 'Sofie' : 'Karim'}** · //${t}//`, x + 0.15, y + 0.04, 6.55, lh - 0.1, { size: 16, mode, valign: 'middle' });
    });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //Ja hoor · …, toch?// (//toch// en fin de phrase = « hein ? ») · //papier// : sans //een//', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 20 ex6 théâtre des émotions
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Le théâtre des émotions', stars: '★' });
    d.rect(s, 0.6, 1.7, 7.75, 0.8, { fill: 'tx2', line: null, radius: 0.1 });
    d.t(s, 'Phrase de base : //Kom binnen.//', 0.85, 1.7, 7.3, 0.8, { size: 22, bold: true, color: 'bg1', valign: 'middle' });
    const E = [['accueillant', 'hugging-face', 'Kom **^^maar^^** binnen!', SOFT], ['impatient', 'face-with-steam-from-nose', 'Kom **##nou##** binnen!', INS], ['insistant', 'pleading-face', 'Kom **##toch##** binnen!', INS], ['rassurant', 'relieved-face', 'Kom **^^maar^^** binnen, **<<hoor>>**!', OK]];
    const w = (7.75 - 0.6) / 4;
    E.forEach(([em, il, t, c], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 2.75, w, 3.6, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.ill(s, il, x + w / 2 - 0.55, 2.95, 1.1, 1.1);
      d.t(s, em.toUpperCase(), x, 4.15, w, 0.4, { size: 13, bold: true, color: c, align: 'center', valign: 'middle', cs: 1 });
      d.t(s, `//${t}//`, x + 0.1, 4.6, w - 0.2, 1.6, { size: 17, align: 'center', valign: 'middle' });
    });
    d.ill(s, 'performing-arts', 8.7, 1.7, 0.8, 0.8);
    d.t(s, 'Théâtre!', 9.6, 1.7, 3.13, 0.8, { size: 26, bold: true, color: 'accent4', head: true, valign: 'middle' });
    d.t(s, ['**1.** Tirez une carte-émotion en secret.', '**2.** Dites la phrase avec la particule **et** l’intonation.', '**3.** La classe devine l’émotion.'], 8.7, 2.75, 4.03, 2.4, { size: 16, gap: 12 });
    d.rect(s, 8.7, 5.25, 4.03, 1.1, { fill: 'bg2', line: BORDER });
    d.t(s, ['**Autres phrases :**', '//Ga zitten. · Wat doe je? · Heb je tijd?//'], 8.85, 5.25, 3.8, 1.1, { size: 14, gap: 2, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 21 ex7 pause-café
  d.roleplay({
    g: 21, title: 'Exercice 7 — La pause-café',
    scenario: 'À la machine à café, Karim demande plusieurs petits services à ses collègues.',
    a: '**Karim** : demandez 3 services, avec au moins une particule par demande : //Heb je soms…? Kun je me even…?//',
    b: '**Un·e collègue** : répondez avec une particule : //Ja hoor! · Dat lukt wel. · Zeg het maar.//',
    bank: '//Zeg, heb je even tijd? · Heb je soms een oplader? · Kun je me even helpen? · Ja hoor, geen probleem! · Dat lukt wel. · Hoe heet hij ook alweer? · Je komt toch ook?//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.55, { fill: 'accent1', line: null, radius: 0.04 });
      d.t(s, '6 SERVICES', x + 0.15, y, w - 0.3, 0.55, { size: 12, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
      const S = [['electric-plug', 'een oplader lenen'], ['telephone-receiver', 'de telefoon opnemen'], ['printer', 'een document printen'], ['spiral-calendar', 'een vergadering verzetten'], ['identification-card', 'de naam van een klant'], ['automobile', 'een lift naar huis']];
      const cw = (w - 0.3) / 2; const ch = (h - 0.85) / 3;
      S.forEach(([il, t], i) => {
        const cx = x + 0.1 + (i % 2) * (cw + 0.1); const cy = y + 0.7 + Math.floor(i / 2) * ch;
        d.rect(s, cx, cy, cw, ch - 0.1, { fill: 'bg2', line: BORDER, radius: 0.08 });
        d.ill(s, il, cx + cw / 2 - 0.3, cy + 0.12, 0.6, 0.6);
        d.t(s, `//${t}//`, cx + 0.05, cy + 0.75, cw - 0.1, ch - 0.9, { size: 11, align: 'center', valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket + bilan du parcours
  {
    const s = d.ticket({
      g: 22, title: 'Ticket de sortie et bilan du parcours',
      q: ['Plus aimable : //Wacht!// · //Heb je een pen?//', '« Tu viens demain, **hein** ? »', 'Placez //even// : //Kun je me helpen?//'],
      self: ['Reconnaître', 'Nuancer', 'Le ton juste'],
      teaser: { icon: 'FaTrophy', text: '**Proficiat! Néerlandais 1 is klaar.** — Volgende stap : Néerlandais 2' },
    });
    d.t(s, 'NÉERLANDAIS 1 · 24 MODULES', 7.6, 5.03, 4.6, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    const B = [['M1–5', 5, 'accent2'], ['M6–10', 5, 'accent1'], ['M11–15', 5, 'accent3'], ['M16–19', 4, 'purple'], ['M20–24', 5, 'accent4']];
    const unit = (4.55 - 4 * 0.05) / 24; let x = 7.6;
    B.forEach(([lab, n, c]) => {
      const w = unit * n;
      d.rect(s, x, 5.38, w, 0.45, { fill: c, line: null, radius: 0.06 });
      d.t(s, lab, x, 5.38, w, 0.45, { size: 9, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      x += w + 0.05;
    });
    d.ill(s, 'trophy', 12.25, 5.3, 0.55, 0.55);
  }
}

module.exports = { meta, build };
