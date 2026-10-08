// English A2–B1 — The past simple (règle, exceptions, usages, exercices)
const { BORDER } = require('../lib');
const { C, hexOf, TINT, metaBase, kit } = require('../en_kit');

const meta = {
  ...metaBase,
  n: 'PS', slug: 'Past_simple', title: 'The past simple', short: 'Past simple',
  template: '../anglais_grammaire/past_simple.md', file: 'English_Past_simple.pptx',
  docTitle: 'English A2–B1 — The past simple', subject: 'English A2–B1 — The past simple',
  foot: 'English · A2–B1 · The past simple',
};

function build(d) {
  const { band, rich, pc, strip, tl, rule, chip, pcard, trap, bw } = kit(d);
  const PS = C.PS;

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'ENGLISH · A2–B1', title: 'The past simple', sub: 'Raconter ce qui est fini : yesterday, last week, in 2019…', line: 'regular · irregular · did · didn’t',
    visual: (s) => {
      d.rect(s, 6.55, 1.2, 6.5, 4.2, { fill: 'FFFFFF', line: null, radius: 0.16 });
      d.rect(s, 6.8, 1.45, 4.1, 1.85, { fill: TINT[PS], line: PS, lw: 1.5, dash: 'dash', radius: 0.1 });
      d.t(s, '**FINISHED TIME**', 6.95, 1.5, 3, 0.35, { size: 11, color: PS, cs: 1 });
      d.ill(s, 'locked', 10.35, 1.52, 0.45, 0.45);
      tl(s, 6.75, 12.85, 2.95, { nu: 11.8, nuLab: false });
      d.t(s, '**NOW**', 11.3, 2.3, 1.0, 0.35, { size: 13, color: C.NOW, align: 'center' });
      [['in 2019', 7.6], ['last week', 8.85], ['yesterday', 10.1]].forEach(([t, x]) => {
        d.oval(s, x - 0.1, 2.85, 0.2, 0.2, { fill: PS });
        chip(s, t, C.MK, x - bw(t, 11) / 2, 2.15, { size: 11, h: 0.36 });
      });
      strip(s, 6.85, 3.75, [['I', 'n', 'SUBJECT'], ['visit', 'b'], ['ed', 'ed', 'VERB + -ED'], ['London', 'n'], ['last year.', 't', 'WHEN']], { size: 16, h: 0.56, ls: 9 });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Discover');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaPuzzlePiece', h: 'Build', t: 'I build the past simple: regular, irregular, negative, question.', color: 'accent4' },
      { icon: 'FaHistory', h: 'Use', t: 'I talk about finished actions, often with a date.', color: 'accent1' },
      { icon: 'FaBookOpen', h: 'Tell', t: 'I tell a short story: my weekend, my holiday.', color: 'accent2' },
    ],
    band: 'One past form for everybody — and //did// for questions and negatives.',
  });

  // ---------------------------------------------------------------- 3 warm-up
  {
    const s = d.page({ g: 3, tag: 'WARM-UP', title: 'What did you do last weekend?' });
    const W = [['clapper-board', 'watch a film'], ['soccer-ball', 'play football'], ['cooking', 'cook dinner'], ['shopping-cart', 'go shopping'], ['open-book', 'read a book'], ['sleeping-face', 'sleep a lot'], ['people-hugging', 'visit friends'], ['house', 'clean the house']];
    const cw = (12.13 - 3 * 0.2) / 4;
    W.forEach(([ic, t], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.2); const y = 1.6 + Math.floor(i / 4) * 2.05;
      d.rect(s, x, y, cw, 1.85, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.ill(s, ic, x + cw / 2 - 0.5, y + 0.15, 1.0, 1.0);
      d.t(s, `//**${t}**//`, x + 0.1, y + 1.2, cw - 0.2, 0.55, { size: 17, color: 'tx2', align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.8, 12.13, 0.95, { fill: TINT[PS], line: PS, lw: 1.5, radius: 0.12 });
    rich(s, pc('Last weekend, I <watched> a film and I <went> shopping. And you?', 20), 0.9, 5.8, 11.6, 0.95);
  }

  // ---------------------------------------------------------------- 4 the finished-time box
  {
    const s = d.page({ g: 4, tag: 'GRAMMAR', title: 'When? In a finished time' });
    const y = 3.35;
    d.rect(s, 0.85, 1.6, 9.0, 2.45, { fill: TINT[PS], line: PS, lw: 1.75, dash: 'dash', radius: 0.12 });
    d.t(s, '**FINISHED TIME** · le temps est fini, fermé', 1.05, 1.66, 7, 0.42, { size: 15, color: PS, valign: 'middle' });
    d.ill(s, 'locked', 9.15, 1.68, 0.55, 0.55);
    tl(s, 0.7, 12.75, y, { nu: 11.0 });
    [['in 2019', 1.9], ['last week', 4.2], ['two days ago', 6.4], ['yesterday', 8.6]].forEach(([t, x]) => {
      d.oval(s, x - 0.13, y - 0.13, 0.26, 0.26, { fill: PS, line: 'FFFFFF', lw: 1 });
      d.line(s, x, y - 0.18, x, 2.62, { color: hexOf(C.MK), lw: 1, arrow: false });
      chip(s, t, C.MK, x - bw(t, 15) / 2, 2.15, { size: 15, h: 0.46 });
    });
    const E = ['I <visited> London {in 2019}.', 'She <called> me {yesterday}.', 'We <went> to Spain {two years ago}.'];
    E.forEach((t, i) => {
      d.rect(s, 0.6, 4.3 + i * 0.6, 7.6, 0.52, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.08 });
      rich(s, pc(t, 18), 0.8, 4.3 + i * 0.6, 7.3, 0.52);
    });
    rule(s, 8.45, 4.25, 4.28, 1.75, 'The rule', ['a **finished** action', 'in a **finished** time', 'often with a **date** or a time marker'], PS, { size: 15 });
    band(s, 'Past simple = une action **terminée**, dans un temps **terminé** : on peut répondre à « //When?// ».', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 5 the sentence in boxes
  {
    const s = d.page({ g: 5, tag: 'GRAMMAR', title: 'The sentence in boxes: base + -ed' });
    strip(s, 0.9, 1.75, [['She', 'n', 'SUBJECT'], ['visit', 'b'], ['ed', 'ed', 'VERB + -ED'], ['her grandmother', 'n', 'OBJECT'], ['last Sunday.', 't', 'WHEN']], { size: 28, h: 0.85, ls: 12 });
    d.rect(s, 0.6, 3.25, 6.0, 2.75, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
    d.t(s, '**Same form for everybody!**', 0.8, 3.33, 5.6, 0.45, { size: 16, color: PS, valign: 'middle' });
    ['I', 'You', 'He', 'She', 'It', 'We', 'They'].forEach((p, i) => {
      const x = 0.85 + (i % 4) * 1.15; const yy = 3.95 + Math.floor(i / 4) * 0.6;
      d.rect(s, x, yy, 1.0, 0.46, { fill: 'bg2', line: BORDER, lw: 1, radius: 0.08 });
      d.t(s, `//${p}//`, x, yy, 1.0, 0.46, { size: 16, align: 'center', valign: 'middle' });
    });
    d.t(s, '→', 4.45, 4.5, 0.5, 0.5, { size: 26, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    chip(s, 'worked', PS, 5.0, 4.55, { size: 18, h: 0.52 });
    d.t(s, 'pas de //-s// : //he **worked**// ✓ · //he workeds// ✗', 0.8, 5.35, 5.6, 0.5, { size: 14, color: 'tx2', valign: 'middle' });
    trap(s, 6.85, 3.25, 5.88, 2.75, ['« j’**ai travaillé** » · « je **travaillai** »', '→ //I **worked**// : un seul mot !', 'L’anglais n’a **pas d’auxiliaire** à la forme affirmative du past simple.']);
    band(s, 'Régulier : **base + -ed**. Une seule forme, pour toutes les personnes.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 6 spelling of -ed
  {
    const s = d.page({ g: 6, tag: 'SPELLING', tagColor: C.MK, title: 'Spelling: four rules for -ed' });
    const R = [['① most verbs', '+ ed', [['work', 'worked'], ['play', 'played'], ['watch', 'watched']]], ['② ends in -e', '+ d', [['live', 'lived'], ['like', 'liked'], ['arrive', 'arrived']]],
      ['③ consonant + y', 'y → ied', [['study', 'studied'], ['try', 'tried'], ['cry', 'cried']]], ['④ stressed: 1 vowel + 1 consonant', 'double + ed', [['stop', 'stopped'], ['plan', 'planned'], ['prefer', 'preferred']]]];
    const cw = (12.73 - 4.0 - 0.3) / 3;
    R.forEach(([h, sf, L], i) => {
      const y = 1.6 + i * 0.95;
      d.rect(s, 0.6, y, 3.25, 0.85, { fill: TINT[C.MK], line: C.MK, lw: 1.25, radius: 0.12 });
      d.t(s, [`**${h}**`, `//**${sf}**//`], 0.75, y, 3.0, 0.85, { size: 14, color: 'tx2', valign: 'middle', gap: 0 });
      L.forEach(([b, r], j) => pcard(s, 4.0 + j * (cw + 0.15), y, cw, 0.85, b, r, PS, { bs: 13, rs: 15 }));
    });
    rule(s, 0.6, 5.5, 6.0, 1.35, '⚠ But: vowel + y = + ed', ['//play → played · enjoy → enjoyed · stay → stayed//'], C.KO, { size: 15 });
    rule(s, 6.85, 5.5, 5.88, 1.35, '⚠ No doubling if…', ['the stress is not at the end: //**vi**sit → visited//', 'it ends in //w, x// or //y//: //fix → fixed · show → showed//', 'UK: final //-l// doubles: //travel → travelled// (US //traveled//)'], C.KO, { size: 13.5 });
  }

  // ---------------------------------------------------------------- 7 pronunciation
  {
    const s = d.page({ g: 7, tag: 'PRONUNCIATION', tagColor: 'accent3', title: 'Say it: /t/, /d/ or /ɪd/?' });
    const K = [['/t/', 'after voiceless sounds', 'p, k, f, s, sh, ch', ['worked', 'stopped', 'watched', 'laughed'], 'accent2'], ['/d/', 'after voiced sounds', 'vowels, b, g, l, m, n, v…', ['played', 'lived', 'cleaned', 'opened'], 'accent3'], ['/ɪd/', 'only after t or d', 'one extra syllable!', ['wanted', 'needed', 'visited', 'decided'], 'accent1']];
    const cw = (12.13 - 0.4) / 3;
    K.forEach(([snd, when, sub, L, c], i) => {
      const x = 0.6 + i * (cw + 0.2);
      d.rect(s, x, 1.6, cw, 4.4, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, cw, 1.0, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${snd}**`, x, 1.6, cw, 1.0, { size: 36, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, [`**${when}**`, `//${sub}//`], x + 0.15, 2.7, cw - 0.3, 0.8, { size: 15, color: c, align: 'center', valign: 'middle', gap: 0 });
      L.forEach((w, j) => {
        const b = w.slice(0, -2);
        rich(s, [[b, { italic: true, fontSize: 22 }], ['ed', { bold: true, italic: true, color: hexOf(c), fontSize: 22 }]], x + 0.2, 3.6 + j * 0.58, cw - 0.4, 0.55, { align: 'center' });
      });
    });
    d.ill(s, 'speaking-head', 0.6, 6.1, 0.7, 0.7);
    d.t(s, 'Main sur la gorge : ça vibre → /d/ · ça ne vibre pas → /t/. ⚠ //work-ed// ✗ : une syllabe en plus **seulement** après //t// ou //d//.', 1.45, 6.1, 11.3, 0.7, { size: 15, color: 'tx2', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 8 irregular verbs: families
  d.section('Irregular verbs');
  {
    const s = d.page({ g: 8, tag: 'EXCEPTIONS', tagColor: C.KO, title: 'Irregular verbs: no rule, but families' });
    const F = [['A – A – A', 'the same 3 times', 'accent3', [['cut', 'cut', 'cut'], ['put', 'put', 'put'], ['cost', 'cost', 'cost']]], ['A – B – B', '-ought / -aught…', 'accent2', [['buy', 'bought', 'bought'], ['think', 'thought', 'thought'], ['teach', 'taught', 'taught']]],
      ['i – a – u', 'the vowel changes', 'purple', [['drink', 'drank', 'drunk'], ['swim', 'swam', 'swum'], ['begin', 'began', 'begun']]], ['A – B – C', 'all different', C.KO, [['go', 'went', 'gone'], ['see', 'saw', 'seen'], ['eat', 'ate', 'eaten']]]];
    const cw = (12.13 - 0.45) / 4;
    F.forEach(([h, sub, c, L], i) => {
      const x = 0.6 + i * (cw + 0.15);
      d.rect(s, x, 1.6, cw, 4.35, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, cw, 0.95, { fill: c, line: null, radius: 0.12 });
      d.t(s, [`**${h}**`, `//${sub}//`], x, 1.6, cw, 0.95, { size: 16, color: 'bg1', align: 'center', valign: 'middle', gap: 0 });
      L.forEach(([a, b, c3], j) => {
        const y = 2.75 + j * 1.05;
        d.t(s, `//${a}//`, x + 0.1, y, cw - 0.2, 0.36, { size: 15, color: 'tx2', align: 'center', valign: 'middle' });
        chip(s, b, PS, x + (cw - bw(b, 17)) / 2, y + 0.38, { size: 17, h: 0.44 });
        d.t(s, `//(${c3})//`, x + 0.1, y + 0.82, cw - 0.2, 0.2, { size: 10, color: 'accent5', align: 'center', valign: 'middle' });
      });
    });
    band(s, 'Base → **past simple** (framboise) · (participe passé, en gris : pour le present perfect)', 6.15, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 9 top 20
  {
    const s = d.page({ g: 9, tag: 'EXCEPTIONS', tagColor: C.KO, title: 'The 20 irregular verbs you need most' });
    const V = [['be', 'was / were'], ['have', 'had'], ['do', 'did'], ['go', 'went'], ['get', 'got'], ['make', 'made'], ['say', 'said'], ['see', 'saw'], ['take', 'took'], ['come', 'came'],
      ['know', 'knew'], ['think', 'thought'], ['give', 'gave'], ['find', 'found'], ['tell', 'told'], ['leave', 'left'], ['feel', 'felt'], ['buy', 'bought'], ['eat', 'ate'], ['meet', 'met']];
    const cw = (12.13 - 4 * 0.15) / 5;
    V.forEach(([b, r], i) => pcard(s, 0.6 + (i % 5) * (cw + 0.15), 1.6 + Math.floor(i / 5) * 1.1, cw, 0.98, b, r, PS, { bs: 15, rs: 17 }));
    band(s, 'Apprenez-les **par cœur**, en phrases : //I **went** home. I **saw** Sam. I **bought** bread.//', 6.15, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 10 be: was / were
  {
    const s = d.page({ g: 10, tag: 'EXCEPTIONS', tagColor: C.KO, title: 'The special one: was / were' });
    const B = [['WAS', 'I · he · she · it', ['I <was> tired.', 'It <was> great!'], PS], ['WERE', 'you · we · they', ['We <were> at home.', 'They <were> late.'], 'purple']];
    B.forEach(([h, who, L, c], i) => {
      const x = 0.6 + i * 3.35;
      d.rect(s, x, 1.6, 3.2, 3.0, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, 3.2, 0.7, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${h}**`, x, 1.6, 3.2, 0.7, { size: 24, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `//**${who}**//`, x + 0.1, 2.35, 3.0, 0.5, { size: 16, color: c, align: 'center', valign: 'middle' });
      L.forEach((t, j) => rich(s, pc(t, 18, c), x + 0.25, 3.0 + j * 0.65, 2.8, 0.55, { align: 'center' }));
    });
    rule(s, 7.4, 1.6, 5.33, 1.45, '− Negative', ['//I **wasn’t** tired. · They **weren’t** late.//'], C.NEG, { size: 16 });
    rule(s, 7.4, 3.15, 5.33, 1.45, '? Question', ['//**Was** it good? · **Were** you at home?//'], C.QW, { size: 16 });
    trap(s, 0.6, 4.8, 12.13, 1.3, ['Pas de //did// avec //be// ! ✗ //Did you were tired?// → ✓ //**Were** you tired?// · ✗ //I didn’t be// → ✓ //I **wasn’t**//'], { size: 16 });
    band(s, '//be// est le seul verbe à **deux formes** au past simple.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 11 negative
  d.section('Negative and questions');
  {
    const s = d.page({ g: 11, tag: 'GRAMMAR', title: 'Negative: didn’t + base form' });
    const x0 = 1.0;
    strip(s, x0, 1.7, [['She', 'n'], ['visit', 'b'], ['ed', 'ed'], ['her grandmother.', 'n']], { size: 22, h: 0.7 });
    const P1 = strip.pos;
    strip(s, x0, 3.25, [['She', 'n', 'SUBJECT'], ['did', 'a', 'AUX'], ['n’t', 'ng', 'NOT'], ['visit', 'b', 'BASE'], ['her grandmother.', 'n']], { size: 22, h: 0.7, ls: 11 });
    const P2 = strip.pos;
    d.line(s, P1[2][0] + P1[2][1] / 2, 2.45, P2[1][0] + P2[1][1] / 2, 3.2, { color: hexOf(C.MK), lw: 2.5 });
    d.t(s, '**-ed moves to did**', P1[2][0] + 0.5, 2.55, 3.2, 0.4, { size: 14, italic: true, color: C.MK });
    strip(s, 9.2, 1.7, [['He', 'n'], ['went', 'v2']], { size: 22, h: 0.7 });
    d.t(s, '↓', 9.9, 2.5, 0.6, 0.6, { size: 26, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    strip(s, 9.2, 3.25, [['He', 'n'], ['didn’t', 'a'], ['go', 'b']], { size: 22, h: 0.7 });
    rule(s, 0.6, 4.6, 6.0, 1.45, '✓ The rule', ['//didn’t// (= did not) + **base form**', 'the same for everybody: //I, you, he, we… didn’t go//'], C.OK, { size: 15 });
    trap(s, 6.85, 4.6, 5.88, 1.45, ['Le passé est **déjà** dans //did// : ✗ //didn’t visited// · ✗ //didn’t went//'], { size: 15, title: 'Une seule marque du passé !' });
    band(s, 'À l’écrit soigné : //did not//. À l’oral : //didn’t//.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 12 questions
  {
    const s = d.page({ g: 12, tag: 'GRAMMAR', title: 'Questions: Did…? and QUASI' });
    strip(s, 0.9, 1.7, [['Did', 'a', 'AUX'], ['she', 'n', 'SUBJECT'], ['visit', 'b', 'BASE'], ['her grandmother?', 'n']], { size: 24, h: 0.72, ls: 11 });
    const P = strip.pos;
    d.curve(s, P[1][0] + P[1][1] / 2, 1.68, P[0][0] + P[0][1] / 2, 1.68, { color: hexOf(C.AUX), lw: 2, h: 0.32, dir: -1 });
    d.t(s, '**did** comes first', P[3][0] + P[3][1] + 0.2, 1.7, 2.6, 0.72, { size: 14, italic: true, color: C.AUX, valign: 'middle' });
    const e1 = chip(s, 'Yes, she did.', C.OK, 0.9, 2.9, { size: 17, h: 0.5 });
    const e2 = chip(s, 'No, she didn’t.', C.NEG, e1 + 0.25, 2.9, { size: 17, h: 0.5 });
    d.t(s, '//short answers// : pas de verbe principal', e2 + 0.3, 2.9, 5, 0.5, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
    d.rect(s, 0.6, 3.75, 12.13, 2.35, { fill: TINT[C.QW], line: C.QW, lw: 1.5, radius: 0.12 });
    d.t(s, '**Wh- questions: QUASI**', 0.85, 3.82, 5, 0.42, { size: 16, color: C.QW, valign: 'middle' });
    strip(s, 0.9, 4.35, [['Where', 'q', 'Q'], ['did', 'a', 'A'], ['you', 'n', 'S'], ['go', 'b', 'I'], ['last summer?', 't']], { size: 24, h: 0.72, ls: 16 });
    d.t(s, ['//**What** did you eat?//', '//**When** did she arrive?//', '//**Who** did you meet?//'], 9.6, 4.25, 3.0, 1.75, { size: 16, valign: 'middle', gap: 4 });
    band(s, 'QUASI : **Q**uestion word · **A**uxiliary · **S**ubject · **I**nfinitive (la base).', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 13 subject questions
  {
    const s = d.page({ g: 13, tag: 'EXCEPTIONS', tagColor: C.KO, title: 'Who called you? No did when who is the subject' });
    const R = [['Who', 'called', 'you?', 'Someone called you. Who? = le sujet', 'No did!', C.KO, 'telephone-receiver'], ['Who', 'did you call', '?', 'You called someone. Who? = le complément', 'did + base', C.QW, 'mobile-phone']];
    R.forEach(([q, mid, end, expl, tag, c, ic], i) => {
      const y = 1.7 + i * 2.05;
      d.rect(s, 0.6, y, 12.13, 1.85, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.ill(s, ic, 0.8, y + 0.4, 1.0, 1.0);
      if (i === 0) strip(s, 2.1, y + 0.3, [['Who', 'q', 'SUBJECT'], ['called', 'v2', 'PAST'], ['you?', 'n']], { size: 26, h: 0.78, ls: 11 });
      else strip(s, 2.1, y + 0.3, [['Who', 'q', 'OBJECT'], ['did', 'a', 'AUX'], ['you', 'n', 'SUBJECT'], ['call?', 'b', 'BASE']], { size: 26, h: 0.78, ls: 11 });
      d.t(s, `//${expl}//`, 7.4, y + 0.25, 5.2, 0.9, { size: 15, color: 'tx2', valign: 'middle' });
      chip(s, tag, c, 7.4, y + 1.15, { size: 16, h: 0.46, roman: true });
    });
    band(s, 'Aussi : //**What happened?**// (✗ //What did happen?//) — une question très fréquente !', 6.0, 0.7, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 14 time markers
  d.section('Telling stories');
  {
    const s = d.page({ g: 14, tag: 'VOCABULARY', tagColor: C.MK, title: 'Time markers: yesterday, last…, …ago' });
    const y = 2.9;
    tl(s, 0.7, 12.75, y, { nu: 11.6 });
    const M = [['when I was a child', 1.9, 0], ['in 2019', 3.9, 1], ['last summer', 5.4, 0], ['on Monday', 6.9, 1], ['two days ago', 8.3, 0], ['yesterday', 9.9, 1]];
    M.forEach(([t, x, below]) => {
      const w = bw(t, 14); const yy = below ? y + 0.4 : y - 0.95;
      d.oval(s, x - 0.11, y - 0.11, 0.22, 0.22, { fill: PS });
      d.line(s, x, below ? y + 0.1 : y - 0.1, x, below ? yy : yy + 0.46, { color: hexOf(C.MK), lw: 1, arrow: false });
      chip(s, t, C.MK, x - w / 2, yy, { size: 14, h: 0.46 });
    });
    const B = [['in', '+ année, mois, saison', 'in 2019 · in May · in the summer'], ['on', '+ jour, date', 'on Monday · on 3 May'], ['at', '+ heure (et //at night//)', 'at 9 o’clock · at night']];
    B.forEach(([p, r, ex], i) => {
      const x = 0.6 + i * 4.1;
      d.rect(s, x, 4.15, 3.93, 1.35, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      chip(s, p, C.AUX, x + 0.2, 4.28, { size: 18, h: 0.5, roman: true });
      d.t(s, r, x + 1.0, 4.28, 2.8, 0.5, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${ex}//`, x + 0.2, 4.85, 3.6, 0.55, { size: 15, valign: 'middle' });
    });
    trap(s, 0.6, 5.65, 12.13, 1.15, ['« il y a deux jours » → //two days **ago**// : //ago// se place **après** ! · « la semaine dernière » → //**last** week// (sans //the//)'], { size: 15 });
  }

  // ---------------------------------------------------------------- 15 a story in four pictures
  {
    const s = d.page({ g: 15, tag: 'STORY', tagColor: 'accent2', title: 'Tell a story: first, then, after that, finally' });
    const P = [['alarm-clock', 'First,', 'I <got> up late.'], ['oncoming-bus', 'Then,', 'I <missed> the bus.'], ['person-running', 'After that,', 'I <ran> to work.'], ['office-building', 'Finally,', 'I <arrived> at 9.30!']];
    const cw = (12.13 - 3 * 0.25) / 4;
    P.forEach(([ic, seq, t], i) => {
      const x = 0.6 + i * (cw + 0.25);
      d.rect(s, x, 1.6, cw, 3.9, { fill: 'FFFFFF', line: 'accent2', lw: 2, radius: 0.1, shadow: true });
      d.num(s, i + 1, x + 0.15, 1.72, 0.45, 'accent2', 16);
      d.ill(s, ic, x + cw / 2 - 0.85, 2.0, 1.7, 1.7);
      d.t(s, `**${seq}**`, x + 0.1, 3.85, cw - 0.2, 0.45, { size: 18, color: 'accent2', align: 'center', valign: 'middle' });
      rich(s, pc(t, 18), x + 0.15, 4.3, cw - 0.3, 1.0, { align: 'center' });
      if (i < 3) d.t(s, '➜', x + cw - 0.05, 3.2, 0.35, 0.5, { size: 20, bold: true, color: 'accent2', align: 'center', valign: 'middle' });
    });
    band(s, 'À vous : racontez votre matinée d’hier en 4 images : //First, I… Then, I… After that, I… Finally, I…//', 5.75, 0.8, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 16 pièges
  {
    const s = d.page({ g: 16, tag: 'FR ≠ EN', title: 'Six traps for French speakers' });
    const R = [['passé composé + date', 'I have seen him yesterday.', 'I saw him yesterday.'], ['did + past', 'Did you went?', 'Did you go?'], ['didn’t + past', 'He didn’t bought it.', 'He didn’t buy it.'], ['the irregular', 'I goed to Paris.', 'I went to Paris.'], ['the spelling', 'She studyed.', 'She studied.'], ['« il y a »', 'I arrived there are two days.', 'I arrived two days ago.']];
    const cw = (12.13 - 2 * 0.2) / 3; const ch = 2.15;
    R.forEach(([h, bad, good], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.2); const y = 1.6 + Math.floor(i / 3) * (ch + 0.15);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.t(s, `**${i + 1}. ${h}**`, x + 0.15, y + 0.08, cw - 0.3, 0.5, { size: 14, color: 'tx2', valign: 'middle' });
      d.t(s, `✗  {{${bad}}}`, x + 0.15, y + 0.65, cw - 0.3, 0.65, { size: 16, color: C.KO, valign: 'middle' });
      d.t(s, `✓  //**${good}**//`, x + 0.15, y + 1.3, cw - 0.3, 0.75, { size: 16, color: C.OK, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 17 remember
  {
    const s = d.page({ g: 17, tag: 'REMEMBER', title: 'Remember: the past simple' });
    const R = [['+', 'AFFIRMATIVE', C.PS, 'base + -ed · irregular', 'I worked. · I went.'], ['−', 'NEGATIVE', C.NEG, 'didn’t + base', 'I didn’t work. · I didn’t go.'], ['?', 'QUESTION', C.QW, '(Q) + did + subject + base', 'Did you work? · Where did you go?'], ['⏱', 'USE', C.MK, 'finished action, finished time', 'yesterday · last… · …ago · in 2019']];
    const cw = (12.13 - 0.45) / 4;
    R.forEach(([sym, h, c, f, ex], i) => {
      const x = 0.6 + i * (cw + 0.15);
      d.rect(s, x, 1.6, cw, 3.3, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, cw, 0.9, { fill: c, line: null, radius: 0.12 });
      d.t(s, [`**${sym}**`, `**${h}**`], x, 1.6, cw, 0.9, { size: 15, color: 'bg1', align: 'center', valign: 'middle', gap: 0 });
      d.t(s, `**${f}**`, x + 0.15, 2.6, cw - 0.3, 0.9, { size: 15, color: c, align: 'center', valign: 'middle' });
      d.t(s, `//${ex}//`, x + 0.15, 3.55, cw - 0.3, 1.2, { size: 15, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.1, 12.13, 1.65, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.t(s, ['**Spelling**: //lived · studied · stopped · played// — **Sounds**: /t/ //worked// · /d/ //played// · /ɪd/ //wanted//', '**Exceptions**: irregular verbs (learn them!) · //was / were// (no //did//) · //Who called?// (no //did//)'], 0.85, 5.1, 11.7, 1.65, { size: 15, valign: 'middle', gap: 6 });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 18 divider
  d.divider({ g: 18, tiles: [['The -ed machine', '★', 'FaCogs'], ['/t/ /d/ /ɪd/', '★', 'FaVolumeUp'], ['Memory', '★', 'FaClone'], ['My Saturday', '★★', 'FaCalendarAlt'], ['No? Yes?', '★★', 'FaExchangeAlt'],
    ['Word order', '★★', 'FaPuzzlePiece'], ['Find the question', '★★', 'FaQuestion'], ['Detective', '★★', 'FaSearch'], ['Two truths, one lie', '★★', 'FaTheaterMasks'], ['Monday morning', '★★★', 'FaUsers']] });

  // ---------------------------------------------------------------- 19 ex1 the -ed machine
  const ex1 = [['play', 'played'], ['study', 'studied'], ['stop', 'stopped'], ['live', 'lived'], ['plan', 'planned'], ['cry', 'cried'], ['visit', 'visited'], ['enjoy', 'enjoyed'], ['travel', 'travelled'], ['try', 'tried']];
  d.ex({ g: 19, title: 'Exercise 1 — The -ed machine', stars: '★', instr: 'Write the past simple. Which spelling rule?' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const rh = ((mode === 'a' ? 6.45 : 6.75) - top) / 5;
    ex1.forEach(([b, r], i) => {
      const x = 0.6 + Math.floor(i / 5) * (cw + 0.2); const y = top + (i % 5) * rh;
      d.rect(s, x, y + 0.04, cw, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.t(s, `**${i + 1}**`, x + 0.1, y + 0.04, 0.4, rh - 0.1, { size: 14, color: 'accent5', valign: 'middle' });
      chip(s, b, C.NEG, x + 0.55, y + (rh - 0.5) / 2 - 0.03, { size: 16, h: 0.44, w: 1.5, fill: false });
      d.t(s, '→', x + 2.15, y + 0.04, 0.5, rh - 0.1, { size: 20, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `//[[${r}]]//`, x + 2.75, y + 0.04, cw - 2.85, rh - 0.1, { size: 19, color: PS, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'Règles : ① 1, 8 · ② 4 · ③ 2, 6, 10 · ④ 3, 5 · pas de doublement : 7 (//**vi**sit//) · 9 : //-l// doublé en anglais britannique → //travelled// (US //traveled//).', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 20 ex2 /t/ /d/ /ɪd/
  const ex2 = [['looked', 0], ['called', 1], ['started', 2], ['helped', 0], ['tried', 1], ['waited', 2], ['missed', 0], ['listened', 1], ['ended', 2], ['washed', 0], ['enjoyed', 1], ['hated', 2]];
  d.ex({ g: 20, title: 'Exercise 2 — /t/, /d/ or /ɪd/?', stars: '★', instr: 'Say each verb aloud. Put it in the right box.' }, (s, mode, top) => {
    let by = top;
    if (mode === 'q') {
      const w6 = (12.13 - 5 * 0.15) / 6;
      ex2.forEach(([w], i) => {
        const x = 0.6 + (i % 6) * (w6 + 0.15); const y = top + Math.floor(i / 6) * 0.6;
        d.rect(s, x, y, w6, 0.5, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, radius: 0.12, rotate: [-2, 1, 2, -1, 1, -2][i % 6] });
        d.t(s, `//**${w}**//`, x, y, w6, 0.5, { size: 17, align: 'center', valign: 'middle', rotate: [-2, 1, 2, -1, 1, -2][i % 6] });
      });
      by = top + 1.4;
    }
    const W3 = (12.13 - 0.4) / 3; const bh = 6.85 - by;
    [['/t/', 'accent2'], ['/d/', 'accent3'], ['/ɪd/', 'accent1']].forEach(([h, c], j) => {
      const x = 0.6 + j * (W3 + 0.2);
      d.rect(s, x, by, W3, bh, { fill: TINT[c], line: c, lw: 2, dash: mode === 'q' ? 'dash' : undefined, radius: 0.12 });
      d.t(s, `**${h}**`, x, by + 0.1, W3, 0.7, { size: 30, color: c, align: 'center', valign: 'middle' });
      if (mode === 'a') d.t(s, ex2.filter(([, k]) => k === j).map(([w]) => `//**${w}**//`), x + 0.2, by + 0.85, W3 - 0.4, bh - 1.0, { size: 22, color: c, align: 'center', valign: 'middle', gap: 6 });
    });
  });

  // ---------------------------------------------------------------- 21 ex3 memory
  const ex3 = [['go', 'went'], ['see', 'saw'], ['buy', 'bought'], ['eat', 'ate'], ['take', 'took'], ['write', 'wrote'], ['think', 'thought'], ['meet', 'met']];
  const order = [3, 12, 6, 9, 0, 15, 5, 10, 13, 2, 8, 7, 14, 1, 11, 4];
  d.ex({ g: 21, title: 'Exercise 3 — Irregular memory', stars: '★', instr: 'Find the 8 pairs: base form + past simple. (Imprimez les cartes pour un vrai memory.)' }, (s, mode, top) => {
    if (mode === 'q') {
      const cards = ex3.flatMap(([b, p]) => [[b, 'b'], [p, 'p']]);
      const cw = (12.13 - 7 * 0.15) / 8; const ch = (6.8 - top - 0.2) / 2;
      order.forEach((k, i) => {
        const [t, ty] = cards[k]; const x = 0.6 + (i % 8) * (cw + 0.15); const y = top + Math.floor(i / 8) * (ch + 0.2);
        d.rect(s, x, y, cw, ch, { fill: ty === 'p' ? TINT[PS] : 'FFFFFF', line: ty === 'p' ? PS : 'accent5', lw: 1.75, radius: 0.12, shadow: true, rotate: [-2, 1, 2, -1][i % 4] });
        d.ill(s, 'game-die', x + cw / 2 - 0.25, y + 0.25, 0.5, 0.5);
        d.t(s, `//**${t}**//`, x, y + ch / 2 - 0.3, cw, 0.8, { size: 20, color: ty === 'p' ? PS : 'tx1', align: 'center', valign: 'middle', rotate: [-2, 1, 2, -1][i % 4] });
      });
    } else {
      const cw = (12.13 - 3 * 0.2) / 4; const ch = (6.8 - top - 0.2) / 2;
      ex3.forEach(([b, p], i) => {
        const x = 0.6 + (i % 4) * (cw + 0.2); const y = top + Math.floor(i / 4) * (ch + 0.2);
        d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: PS, lw: 1.75, radius: 0.12, shadow: true });
        d.t(s, `//**${b}**//`, x, y + 0.3, cw, 0.6, { size: 22, color: 'tx2', align: 'center', valign: 'middle' });
        d.t(s, '↓', x, y + 0.9, cw, 0.5, { size: 22, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
        chip(s, p, PS, x + 0.3, y + 1.45, { size: 22, h: 0.6, w: cw - 0.6 });
      });
    }
  });

  // ---------------------------------------------------------------- 22 ex4 my Saturday
  d.ex({ g: 22, title: 'Exercise 4 — My Saturday', stars: '★★', instr: 'Put the verbs in the past simple. Regular or irregular?' }, (s, mode, top) => {
    const h = 6.85 - top;
    d.rect(s, 0.6, top, 8.9, h, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
    const txt = 'Last Saturday, I [[got]] //(get)// up at nine. I [[had]] //(have)// breakfast and I [[went]] //(go)// to the market. I [[bought]] //(buy)// some fruit and I [[met]] //(meet)// my friend Sam. We [[drank]] //(drink)// a coffee and we [[talked]] //(talk)// for an hour. In the evening, I [[watched]] //(watch)// a film. It [[was]] //(be)// great!';
    d.t(s, txt, 0.85, top + 0.15, 8.4, h - 0.3, { size: 19, mode, ls: 1.45, valign: 'top' });
    d.rect(s, 9.75, top, 2.98, h, { fill: TINT[PS], line: PS, lw: 1.5, radius: 0.12 });
    ['alarm-clock', 'croissant', 'shopping-cart', 'hot-beverage', 'television'].forEach((ic, i) => d.ill(s, ic, 9.95 + (i % 2) * 1.35, top + 0.25 + Math.floor(i / 2) * 1.35, 1.0, 1.0));
    if (mode === 'a') d.t(s, 'Réguliers : //talked, watched// · irréguliers : les 7 autres.', 9.9, top + h - 0.95, 2.7, 0.85, { size: 12.5, italic: true, color: 'tx2', valign: 'middle' });
  });

  // ---------------------------------------------------------------- 23 ex5 negative and question
  const ex5 = [['She played tennis.', 'She [[didn’t play]] tennis.', '[[Did she play]] tennis?'], ['They went to Rome.', 'They [[didn’t go]] to Rome.', '[[Did they go]] to Rome?'], ['He bought a car.', 'He [[didn’t buy]] a car.', '[[Did he buy]] a car?'], ['You saw the film.', 'You [[didn’t see]] the film.', '[[Did you see]] the film?'], ['It was cold.', 'It [[wasn’t]] cold.', '[[Was it]] cold?']];
  d.ex({ g: 23, title: 'Exercise 5 — No? Yes?', stars: '★★', instr: 'Make the sentence negative (−), then make a question (?).' }, (s, mode, top) => {
    const X = [0.6, 4.4, 8.55]; const W = [3.65, 4.0, 4.18];
    [['+', 'tx2'], ['−', C.NEG], ['?', C.QW]].forEach(([h, c], j) => {
      d.rect(s, X[j], top, W[j], 0.45, { fill: c, line: null, radius: 0.08 });
      d.t(s, `**${h}**`, X[j], top, W[j], 0.45, { size: 20, color: 'bg1', align: 'center', valign: 'middle' });
    });
    const rh = ((mode === 'a' ? 6.45 : 6.85) - top - 0.55) / 5;
    ex5.forEach((row, i) => {
      const y = top + 0.55 + i * rh;
      d.rect(s, 0.6, y + 0.03, 12.13, rh - 0.07, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.08 });
      row.forEach((t, j) => d.t(s, `//${t}//`, X[j] + 0.12, y, W[j] - 0.2, rh, { size: 16.5, valign: 'middle', mode, color: j ? 'tx1' : 'tx2' }));
    });
    if (mode === 'a') d.t(s, 'N° 5 : //be// → pas de //did// : //wasn’t · Was it…?// (diapo 10).', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 24 ex6 word order
  const ex6 = [[[['go', 'b'], ['last summer?', 't'], ['you', 'n'], ['Where', 'q'], ['did', 'a']], [['Where', 'q'], ['did', 'a'], ['you', 'n'], ['go', 'b'], ['last summer?', 't']]],
    [[['buy?', 'b'], ['she', 'n'], ['What', 'q'], ['did', 'a']], [['What', 'q'], ['did', 'a'], ['she', 'n'], ['buy?', 'b']]],
    [[['did', 'a'], ['arrive?', 'b'], ['When', 'q'], ['they', 'n']], [['When', 'q'], ['did', 'a'], ['they', 'n'], ['arrive?', 'b']]],
    [[['the film?', 'n'], ['like', 'b'], ['Did', 'a'], ['you', 'n']], [['Did', 'a'], ['you', 'n'], ['like', 'b'], ['the film?', 'n']]]];
  d.ex({ g: 24, title: 'Exercise 6 — Word order (QUASI)', stars: '★★', instr: 'Put the pieces in order. Remember QUASI: Question word · Auxiliary · Subject · Infinitive.' }, (s, mode, top) => {
    const rh = (6.7 - top) / 4;
    ex6.forEach(([shuf, ok], i) => {
      const y = top + i * rh + 0.12;
      d.t(s, `**${i + 1}**`, 0.6, y, 0.4, 0.66, { size: 18, color: 'accent5', valign: 'middle' });
      strip(s, 1.05, y, mode === 'q' ? shuf : ok, { size: 22, h: 0.66, gap: mode === 'q' ? 0.3 : 0.08 });
    });
  });

  // ---------------------------------------------------------------- 25 ex7 find the question
  const ex7 = [['Where', 'I went to Spain.', '[[Where did you go?]]'], ['What time', 'I arrived at nine.', '[[What time did you arrive?]]'], ['What', 'I bought a new phone.', '[[What did you buy?]]'], ['Who', 'I met Sam at the station.', '[[Who did you meet?]]'], ['Why', 'I went home early because I was tired.', '[[Why did you go home early?]]'], ['How', 'I travelled by train.', '[[How did you travel?]]']];
  d.ex({ g: 25, title: 'Exercise 7 — Find the question', stars: '★★', instr: 'Here are the answers. Write the questions with the question word.' }, (s, mode, top) => {
    const rh = (6.5 - top) / 6;
    ex7.forEach(([q, a, ans], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.04, 12.13, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      chip(s, q, C.QW, 0.75, y + (rh - 0.46) / 2, { size: 14, h: 0.4, w: 1.45 });
      d.t(s, `//${ans}//`, 2.35, y + 0.04, 5.1, rh - 0.1, { size: 17, valign: 'middle', mode });
      d.t(s, '←', 7.4, y + 0.04, 0.45, rh - 0.1, { size: 18, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `« //${a}// »`, 7.9, y + 0.04, 4.75, rh - 0.1, { size: 15, color: 'tx2', valign: 'middle' });
    });
    if (mode === 'a') d.t(s, 'N° 6 : aussi //How did you go there?//. Toujours : question word + //did// + subject + base.', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 26 ex8 detective
  d.ex({ g: 26, title: 'Exercise 8 — The detective', stars: '★★', instr: 'Lucas writes to Emma about his trip to Rome. Find the 5 mistakes.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFDF7', line: 'accent5', lw: 1.25, shadow: true });
    d.line(s, 6.3, top + 0.3, 6.3, top + h - 0.3, { color: 'D5DCE6', lw: 1, arrow: false });
    d.ill(s, 'classical-building', 7.6, top + 0.25, 1.2, 1.2);
    d.t(s, ['//To: Emma Smith//', '//12 Park Road//', '//Brighton, UK//'], 6.5, top + 1.6, 3.0, 1.2, { size: 13, color: 'accent5', gap: 2 });
    const txt = ['//Hi Emma!//', '//Last week we {{have visited}}++ visited++ Rome. It was amazing! On Monday we {{goed}}++ went++ to the Colosseum and we {{eated}}++ ate++ a lot of pizza. On Tuesday it rained, so we stayed at the hotel. {{Did you received}}++ Did you receive++ my message? I {{studyed}}++ studied++ Italian for this trip!//', '//Love, Lucas//'];
    d.t(s, txt, 0.85, top + 0.2, 5.3, h - 0.4, { size: 15.5, gap: 6, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 mistakes?' : '5 mistakes ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Correct : //It was amazing · it rained · we stayed//.', 9.9, top + 3.05, 2.83, 1.6, { size: 13, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 27 ex9 two truths and a lie
  {
    const s = d.page({ g: 27, tag: 'YOUR TURN!', title: 'Exercise 9 — Two truths and a lie', stars: '★★' });
    d.ill(s, 'performing-arts', 0.6, 1.5, 0.9, 0.9);
    d.t(s, 'Write **3 sentences** about your past: **2 true**, **1 false**. The group asks questions, then guesses the lie!', 1.65, 1.5, 11.1, 0.9, { size: 17, valign: 'middle' });
    const E = [['I <met> a famous singer {in 2015}.', 'star-struck'], ['I <lived> in Canada {when I was a child}.', 'maple-leaf'], ['I <broke> my arm {last year}.', 'adhesive-bandage']];
    const cw = (12.13 - 0.4) / 3;
    E.forEach(([t, ic], i) => {
      const x = 0.6 + i * (cw + 0.2);
      d.rect(s, x, 2.65, cw, 2.0, { fill: 'FFFFFF', line: PS, lw: 2, radius: 0.12, shadow: true, rotate: [-2, 1, -1][i] });
      d.ill(s, ic, x + cw / 2 - 0.4, 2.8, 0.8, 0.8);
      rich(s, pc(t, 17), x + 0.2, 3.65, cw - 0.4, 0.9, { align: 'center' });
      d.t(s, '**?**', x + cw - 0.6, 2.7, 0.45, 0.45, { size: 20, color: PS, align: 'center' });
    });
    d.rect(s, 0.6, 4.9, 12.13, 1.85, { fill: TINT[C.QW], line: C.QW, lw: 1.5, radius: 0.12 });
    d.t(s, '**ASK!**', 0.85, 4.95, 3, 0.4, { size: 15, color: C.QW, cs: 1 });
    d.t(s, '//Did you…? · When did you…? · Where did you…? · Who did you…? · What happened? · How did you feel?//', 0.85, 5.35, 11.7, 0.6, { size: 17, valign: 'middle' });
    d.t(s, '**1 point** for each good question (correct form) · **2 points** if you find the lie!', 0.85, 5.95, 11.7, 0.6, { size: 15, color: 'tx2', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 28 ex10 role play
  d.roleplay({
    g: 28, title: 'Exercise 10 — Monday morning',
    scenario: 'Monday, 9 a.m., at the coffee machine. A asks about the weekend; B answers with the picture card. Then swap!',
    a: ['**A — the curious colleague**', 'Ask 6 questions about B’s weekend. React: //Really? · Lucky you! · Sounds great!//'],
    b: ['**B — back from the weekend**', 'Answer with the card: past simple, regular and irregular. Give one more detail each time.'],
    bank: '//How was your weekend? · What did you do? · Where did you go? · Who did you go with? · Did you…? — Yes, I did. / No, I didn’t. · It was great / boring / fun. · First… then… after that…//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.6, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'B’S WEEKEND', x + 0.15, y, w - 0.3, 0.6, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const L = [['SATURDAY', null], ['beach-with-umbrella', 'go to the beach'], ['person-swimming', 'swim in the sea'], ['fish', 'eat fish'], ['SUNDAY', null], ['old-woman', 'visit grandma'], ['cooking', 'bake a cake'], ['television', 'watch a series']];
      let yy = y + 0.72;
      L.forEach(([ic, t]) => {
        if (!t) { d.t(s, `**${ic}**`, x + 0.2, yy, w - 0.4, 0.34, { size: 12, color: PS, cs: 1 }); yy += 0.38; return; }
        d.ill(s, ic, x + 0.2, yy, 0.5, 0.5);
        d.t(s, `//${t}//`, x + 0.85, yy - 0.04, w - 1.0, 0.58, { size: 14, valign: 'middle' });
        yy += 0.62;
      });
    },
  });

  // ---------------------------------------------------------------- 29 ticket
  d.ticket({
    g: 29,
    q: ['Past simple of //go//, //study//, //stop//?', 'Negative: //She saw the film.//', 'Question: //They arrived yesterday.// (When…?)'],
    self: ['Build', 'Use', 'Tell'],
    teaser: { icon: 'FaBook', text: '**Homework**: write 6 sentences about your last holiday (2 negatives, 2 questions).' },
  });
}

module.exports = { meta, build };
