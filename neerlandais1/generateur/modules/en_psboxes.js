// English A2–B1 — Past simple : la phrase découpée en cases (affirmative, négative, interrogative)
const { BORDER } = require('../lib');
const { C, hexOf, TINT, metaBase, kit } = require('../en_kit');

const meta = {
  ...metaBase,
  n: 'PSB', slug: 'Past_simple_sentences_in_boxes', title: 'Past simple: sentences in boxes', short: 'Past simple · sentences in boxes',
  template: '../anglais_grammaire/past_simple_decoupe.md', file: 'English_Past_simple_Sentences_in_boxes.pptx',
  docTitle: 'English A2–B1 — Past simple: sentences in boxes (+ − ?)', subject: 'English A2–B1 — Past simple: sentences in boxes',
  foot: 'English · A2–B1 · Past simple · Sentences in boxes',
};

function build(d) {
  const { band, rich, pc, strip, rule, chip, trap, bw, ST } = kit(d);
  const PS = C.PS; const INK = 'tx2';
  // pastille de type de phrase : + − ? Wh?
  const SYM = { '+': INK, '−': C.NEG, '?': C.QW, 'Wh?': C.QW };
  const sym = (s, t, x, y, sz = 0.66, w = sz) => {
    d.rect(s, x, y, w, sz, { fill: SYM[t], line: null, radius: 0.1 });
    d.t(s, `**${t}**`, x, y, w, sz, { size: t.length > 1 ? sz * 22 : sz * 36, color: 'bg1', align: 'center', valign: 'middle' });
  };
  // version « question » d'une bande : cases blanches, étiquettes en pointillés
  const plainParts = (parts) => parts.map(([t, , lab]) => [t, 'n', lab ? '……' : undefined]);

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'ENGLISH · A2–B1', title: 'The past simple in boxes', sub: 'Découper la phrase : affirmative, négative, interrogative', line: '+ · − · ?',
    visual: (s) => {
      d.rect(s, 7.0, 1.2, 6.05, 4.2, { fill: 'FFFFFF', line: null, radius: 0.16 });
      const R = [['+', [['I', 'n'], ['visit', 'b'], ['ed', 'ed'], ['London.', 'n']]], ['−', [['I', 'n'], ['did', 'a'], ['n’t', 'ng'], ['visit', 'b'], ['London.', 'n']]], ['?', [['Did', 'a'], ['you', 'n'], ['visit', 'b'], ['London?', 'n']]]];
      R.forEach(([t, parts], i) => {
        const y = 1.6 + i * 1.2;
        sym(s, t, 7.25, y, 0.62);
        strip(s, 8.05, y, parts, { size: 18, h: 0.62 });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('The boxes');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCut', h: 'Cut', t: 'I cut a sentence into boxes: subject, verb, did, when…', color: 'accent4' },
      { icon: 'FaPuzzlePiece', h: 'Build', t: 'I build affirmative, negative and question sentences.', color: 'accent2' },
      { icon: 'FaExchangeAlt', h: 'Transform', t: 'I change + into − and into ?', color: 'accent3' },
    ],
    band: 'The boxes stay the same — only the verb box changes.',
  });

  // ---------------------------------------------------------------- 3 the boxes and their colours
  {
    const s = d.page({ g: 3, tag: 'GRAMMAR', title: 'The boxes and their colours' });
    const B = [[[['She', 'n']], 'SUBJECT', 'qui ? le sujet'], [[['visit', 'b'], ['ed', 'ed']], 'VERB + -ED', 'verbe régulier : base + -ed'], [[['went', 'v2']], 'PAST FORM', 'verbe irrégulier : à apprendre'],
      [[['did', 'a']], 'DID', 'l’auxiliaire du passé'], [[['did', 'a'], ['n’t', 'ng']], 'NOT', '//n’t// = //not// : la négation'], [[['go', 'b']], 'BASE', 'le verbe nu : sans -ed, sans to'],
      [[['Where', 'q']], 'QUESTION WORD', '//Where? What? When? Who?//'], [[['yesterday', 't']], 'WHEN', 'le marqueur de temps'], [[['to Spain', 'n']], 'OBJECT · PLACE', 'le reste : quoi ? où ?']];
    const cw = (12.13 - 0.4) / 3; const ch = 1.38;
    B.forEach(([parts, name, hint], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.2); const y = 1.6 + Math.floor(i / 3) * (ch + 0.12);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      strip(s, x + 0.2, y + 0.16, parts, { size: 20, h: 0.6 });
      const lc = ST[parts[parts.length - 1][1]].lc;
      d.t(s, `**${name}**`, x + 0.2, y + 0.82, cw - 0.4, 0.26, { size: 13, color: lc === 'accent5' ? 'tx2' : lc, valign: 'middle' });
      d.t(s, hint, x + 0.2, y + 1.06, cw - 0.4, 0.26, { size: 12.5, italic: true, color: 'tx2', valign: 'middle' });
    });
    band(s, 'Chaque case a sa couleur : on voit la **structure** de la phrase d’un coup d’œil.', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 4 three formulas
  {
    const s = d.page({ g: 4, tag: 'GRAMMAR', title: 'Three sentences, three formulas' });
    const R = [['+', [['SUBJECT', 'n'], ['PAST FORM', 'v2'], ['OBJECT · PLACE', 'n'], ['WHEN', 't']], 'She <went> to London {last year}.', PS, 'pas d’auxiliaire : **une seule case** pour le verbe'],
      ['−', [['SUBJECT', 'n'], ['did', 'a'], ['n’t', 'ng'], ['BASE', 'b'], ['OBJECT · PLACE', 'n'], ['WHEN', 't']], 'She [did]~n’t~ <go> to London {last year}.', 'accent6', '//did// + //n’t// · le verbe revient à la **base**'],
      ['?', [['(WH- WORD)', 'q'], ['did', 'a'], ['SUBJECT', 'n'], ['BASE', 'b'], ['OBJECT · PLACE', 'n'], ['WHEN?', 't']], '[Did] she <go> to London {last year}? · Where [did] she <go>?', 'accent6', '//did// passe **devant** le sujet']];
    R.forEach(([t, parts, ex, vc, note], i) => {
      const y = 1.65 + i * 1.48;
      sym(s, t, 0.6, y, 0.75);
      strip(s, 1.55, y + 0.05, parts, { size: 14.5, h: 0.62, italic: false });
      rich(s, pc(ex, 16, vc), 1.55, y + 0.74, 8.2, 0.45);
      d.t(s, note, 9.95, y, 2.78, 1.15, { size: 14, color: 'tx2', valign: 'middle' });
    });
    d.line(s, 9.8, 1.7, 9.8, 5.9, { color: 'D5DCE6', lw: 1, arrow: false });
    band(s, 'Les cases OBJECT et WHEN ne bougent pas : seule la **zone du verbe** change.', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 5 affirmative
  d.section('+ − ?');
  {
    const s = d.page({ g: 5, tag: '+ AFFIRMATIVE', tagColor: INK, title: '+ Affirmative: one box for the verb' });
    chip(s, 'REGULAR · base + -ed', PS, 0.8, 1.55, { size: 14, h: 0.4, roman: true, fill: false });
    strip(s, 0.8, 2.05, [['I', 'n', 'SUBJECT'], ['work', 'b'], ['ed', 'ed', 'VERB + -ED'], ['in a bank', 'n', 'PLACE'], ['last year.', 't', 'WHEN']], { size: 22, h: 0.66, ls: 10.5 });
    strip(s, 0.8, 3.08, [['She', 'n'], ['play', 'b'], ['ed', 'ed'], ['tennis', 'n'], ['yesterday.', 't']], { size: 22, h: 0.66 });
    chip(s, 'IRREGULAR · one box: the past form', PS, 0.8, 3.95, { size: 14, h: 0.4, roman: true, fill: false });
    strip(s, 0.8, 4.45, [['He', 'n', 'SUBJECT'], ['went', 'v2', 'PAST FORM'], ['to Spain', 'n', 'PLACE'], ['in 2019.', 't', 'WHEN']], { size: 22, h: 0.66, ls: 10.5 });
    strip(s, 0.8, 5.48, [['They', 'n'], ['bought', 'v2'], ['a car', 'n'], ['last week.', 't']], { size: 22, h: 0.66 });
    rule(s, 8.9, 1.55, 3.83, 4.6, '✓ Same form for everybody', ['//I · you · he · she · it · we · they//', '→ //**worked**// · //**went**//', '', 'pas de //-s// :', '✗ //he workeds//', '', 'pas d’auxiliaire :', '✗ //I have worked yesterday//'], C.OK, { size: 15, gap: 2 });
    band(s, 'Phrase affirmative : **pas de //did//**, une seule case pour le verbe.', 6.3, 0.5, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 6 negative
  {
    const s = d.page({ g: 6, tag: '− NEGATIVE', tagColor: C.NEG, title: '− Negative: didn’t + base' });
    sym(s, '+', 0.45, 1.68, 0.6);
    strip(s, 1.2, 1.65, [['She', 'n'], ['visit', 'b'], ['ed', 'ed'], ['her friends.', 'n']], { size: 22, h: 0.66 });
    const P1 = strip.pos;
    sym(s, '−', 0.45, 3.03, 0.6);
    strip(s, 1.2, 3.0, [['She', 'n', 'SUBJECT'], ['did', 'a', 'AUX'], ['n’t', 'ng', 'NOT'], ['visit', 'b', 'BASE'], ['her friends.', 'n']], { size: 22, h: 0.66, ls: 10.5 });
    const P2 = strip.pos;
    d.line(s, P1[2][0] + P1[2][1] / 2, 2.35, P2[1][0] + P2[1][1] / 2, 2.97, { color: hexOf(C.MK), lw: 2.5 });
    d.t(s, '**-ed moves to did**', P1[2][0] + 0.55, 2.4, 3.2, 0.4, { size: 14, italic: true, color: C.MK, valign: 'middle' });
    strip(s, 8.6, 1.65, [['He', 'n'], ['went.', 'v2']], { size: 22, h: 0.66 });
    d.t(s, '↓', 8.6, 2.35, 0.6, 0.6, { size: 24, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.t(s, '//went// = //did// + //go//', 9.2, 2.4, 3.1, 0.5, { size: 14, italic: true, bold: true, color: C.MK, valign: 'middle' });
    strip(s, 8.6, 3.0, [['He', 'n'], ['did', 'a'], ['n’t', 'ng'], ['go.', 'b']], { size: 22, h: 0.66 });
    sym(s, '−', 0.45, 4.43, 0.5);
    strip(s, 1.2, 4.4, [['I', 'n'], ['did', 'a'], ['n’t', 'ng'], ['see', 'b'], ['Tom', 'n'], ['yesterday.', 't']], { size: 20, h: 0.58 });
    sym(s, '−', 0.45, 5.28, 0.5);
    strip(s, 1.2, 5.25, [['They', 'n'], ['did', 'a'], ['n’t', 'ng'], ['come', 'b'], ['to the party.', 'n']], { size: 20, h: 0.58 });
    trap(s, 8.9, 4.3, 3.83, 1.65, ['✗ //didn’t went//', '✗ //didn’t visited//', 'Le passé est **déjà** dans //did// !'], { size: 14, gap: 2, title: 'Une seule marque' });
    band(s, '//didn’t// (= //did not//) + **base** : la même forme pour tout le monde.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 7 yes / no questions
  {
    const s = d.page({ g: 7, tag: '? QUESTION', tagColor: C.QW, title: '? Yes / no questions: did comes first' });
    sym(s, '+', 0.45, 1.68, 0.6);
    strip(s, 1.2, 1.65, [['You', 'n'], ['visit', 'b'], ['ed', 'ed'], ['London.', 'n']], { size: 22, h: 0.66 });
    const P1 = strip.pos;
    sym(s, '?', 0.45, 3.03, 0.6);
    strip(s, 1.2, 3.0, [['Did', 'a', 'AUX'], ['you', 'n', 'SUBJECT'], ['visit', 'b', 'BASE'], ['London?', 'n']], { size: 22, h: 0.66, ls: 10.5 });
    const P2 = strip.pos;
    d.line(s, P1[2][0] + P1[2][1] / 2, 2.35, P2[0][0] + P2[0][1] / 2, 2.97, { color: hexOf(C.AUX), lw: 2.5 });
    d.t(s, '**did comes first**', P1[2][0] + 0.45, 2.4, 3.2, 0.4, { size: 14, italic: true, color: C.AUX, valign: 'middle' });
    strip(s, 8.75, 1.65, [['She', 'n'], ['saw', 'v2'], ['Tom.', 'n']], { size: 22, h: 0.66 });
    d.t(s, '↓', 8.75, 2.35, 0.6, 0.6, { size: 24, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    d.t(s, '//saw// = //did// + //see//', 9.35, 2.4, 3.3, 0.5, { size: 14, italic: true, bold: true, color: C.MK, valign: 'middle' });
    strip(s, 8.75, 3.0, [['Did', 'a'], ['she', 'n'], ['see', 'b'], ['Tom?', 'n']], { size: 22, h: 0.66 });
    sym(s, '?', 0.45, 4.43, 0.5);
    strip(s, 1.2, 4.4, [['Did', 'a'], ['they', 'n'], ['go', 'b'], ['to the beach', 'n'], ['last summer?', 't']], { size: 20, h: 0.58 });
    const e1 = chip(s, 'Yes, they did.', C.OK, 1.2, 5.3, { size: 16, h: 0.48 });
    const e2 = chip(s, 'No, they didn’t.', C.NEG, e1 + 0.2, 5.3, { size: 16, h: 0.48 });
    d.t(s, 'réponse courte : //did / didn’t//, sans le verbe', e2 + 0.3, 5.3, 5, 0.48, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
    band(s, '**Did** + sujet + **base** … ? : //did// se place **devant** le sujet.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 8 wh- questions
  {
    const s = d.page({ g: 8, tag: '? QUESTION', tagColor: C.QW, title: '? Wh- questions: QUASI' });
    strip(s, 0.8, 1.7, [['Where', 'q', 'Q · question word'], ['did', 'a', 'A · auxiliary'], ['you', 'n', 'S · subject'], ['go', 'b', 'I · infinitive'], ['last summer?', 't', 'WHEN']], { size: 26, h: 0.8, ls: 10.5, gap: 0.2 });
    const E = [[['What', 'q'], ['did', 'a'], ['she', 'n'], ['buy?', 'b']], [['When', 'q'], ['did', 'a'], ['they', 'n'], ['arrive?', 'b']], [['Who', 'q'], ['did', 'a'], ['you', 'n'], ['meet?', 'b']], [['How', 'q'], ['did', 'a'], ['you', 'n'], ['travel?', 'b']]];
    E.forEach((parts, i) => strip(s, 0.8 + (i % 2) * 6.1, 3.2 + Math.floor(i / 2) * 0.85, parts, { size: 20, h: 0.6 }));
    d.rect(s, 0.6, 4.95, 12.13, 1.0, { fill: TINT[C.QW], line: C.QW, lw: 1.5, radius: 0.12 });
    d.t(s, '**Q**uestion word · **A**uxiliary (//did//) · **S**ubject · **I**nfinitive (la base)   →   **QUASI**', 0.85, 4.95, 11.6, 1.0, { size: 18, color: C.QW, align: 'center', valign: 'middle' });
    band(s, 'Le même ordre que //Did…?//, avec le **mot interrogatif devant**.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 9 one sentence, four ways
  {
    const s = d.page({ g: 9, tag: 'COMPARISON', tagColor: 'purple', title: 'One sentence, four ways' });
    const R = [['+', [['They', 'n'], ['play', 'b'], ['ed', 'ed'], ['tennis', 'n'], ['yesterday.', 't']]], ['−', [['They', 'n'], ['did', 'a'], ['n’t', 'ng'], ['play', 'b'], ['tennis', 'n'], ['yesterday.', 't']]],
      ['?', [['Did', 'a'], ['they', 'n'], ['play', 'b'], ['tennis', 'n'], ['yesterday?', 't']]], ['Wh?', [['When', 'q'], ['did', 'a'], ['they', 'n'], ['play', 'b'], ['tennis?', 'n']]]];
    R.forEach(([t, parts], i) => {
      const y = 1.7 + i * 1.08;
      d.rect(s, 0.6, y - 0.12, 12.13, 0.96, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.1 });
      sym(s, t, 0.75, y, 0.72, t.length > 1 ? 0.95 : 0.72);
      strip(s, 1.95, y, parts, { size: 24, h: 0.72 });
    });
    chip(s, 'Yes, they did.', C.OK, 10.35, 3.86, { size: 13, h: 0.34, w: 2.2 });
    chip(s, 'No, they didn’t.', C.NEG, 10.35, 4.24, { size: 13, h: 0.34, w: 2.2 });
    chip(s, 'Yesterday!', C.MK, 10.35, 5.12, { size: 14, h: 0.4, w: 2.2 });
    band(s, '//they · tennis · yesterday// ne bougent pas : seule la **zone du verbe** change.', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 10 no did
  d.section('Exceptions');
  {
    const s = d.page({ g: 10, tag: 'EXCEPTIONS', tagColor: C.KO, title: 'No did! be, and who as the subject' });
    const card = (x, h, c) => {
      d.rect(s, x, 1.6, 5.95, 4.45, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, 5.95, 0.55, { fill: c, line: null, radius: 0.12 });
      d.t(s, h, x, 1.6, 5.95, 0.55, { size: 17, color: 'bg1', align: 'center', valign: 'middle' });
    };
    card(0.6, '**BE : was / were** → no //did// !', C.KO);
    [['+', [['I', 'n'], ['was', 'v2', 'WAS / WERE'], ['tired.', 'n']]], ['−', [['I', 'n'], ['was', 'v2'], ['n’t', 'ng', 'NOT'], ['tired.', 'n']]], ['?', [['Were', 'v2', 'WERE first'], ['you', 'n'], ['tired?', 'n']]]].forEach(([t, parts], i) => {
      const y = 2.4 + i * 0.95;
      sym(s, t, 0.85, y + 0.04, 0.52);
      strip(s, 1.6, y, parts, { size: 20, h: 0.6, ls: 9.5 });
    });
    d.t(s, '✗ //Did you were tired?// · ✗ //I didn’t be tired.//', 0.85, 5.3, 5.5, 0.55, { size: 14.5, color: C.KO, valign: 'middle' });
    card(6.78, '**WHO / WHAT = the subject** → no //did// !', 'purple');
    strip(s, 7.05, 2.4, [['Who', 'q', 'SUBJECT'], ['called', 'v2', 'PAST FORM'], ['you?', 'n']], { size: 20, h: 0.6, ls: 9.5 });
    strip(s, 7.05, 3.35, [['What', 'q', 'SUBJECT'], ['happened?', 'v2', 'PAST FORM']], { size: 20, h: 0.6, ls: 9.5 });
    d.line(s, 7.05, 4.42, 12.45, 4.42, { color: 'D5DCE6', lw: 1, arrow: false, dash: 'dash' });
    d.t(s, '≠ //Who// = the object → //did// + base', 7.05, 4.5, 5.4, 0.35, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
    strip(s, 7.05, 4.9, [['Who', 'q', 'OBJECT'], ['did', 'a', 'AUX'], ['you', 'n', 'SUBJECT'], ['call?', 'b', 'BASE']], { size: 20, h: 0.6, ls: 9.5 });
    band(s, 'Pas de //did// avec //be//, ni quand //Who / What// est le **sujet** de la question.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 11 remember
  {
    const s = d.page({ g: 11, tag: 'REMEMBER', title: 'Remember: the three formulas' });
    const K = [['+', 'AFFIRMATIVE', 'SUBJECT + PAST FORM', [[['I', 'n'], ['work', 'b'], ['ed.', 'ed']], [['I', 'n'], ['went.', 'v2']]], 'regular: base + -ed · irregular: learn it!'],
      ['−', 'NEGATIVE', 'SUBJECT + didn’t + BASE', [[['I', 'n'], ['did', 'a'], ['n’t', 'ng'], ['work.', 'b']], [['I', 'n'], ['did', 'a'], ['n’t', 'ng'], ['go.', 'b']]], 'didn’t = did not'],
      ['?', 'QUESTION', '(Q) + did + SUBJECT + BASE?', [[['Did', 'a'], ['you', 'n'], ['work?', 'b']], [['Where', 'q'], ['did', 'a'], ['you', 'n'], ['go?', 'b']]], 'Yes, I did. · No, I didn’t.']];
    const cw = (12.13 - 0.4) / 3;
    K.forEach(([t, h, f, ex, note], i) => {
      const x = 0.6 + i * (cw + 0.2); const c = SYM[t];
      d.rect(s, x, 1.6, cw, 3.65, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, cw, 0.6, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${t}  ${h}**`, x, 1.6, cw, 0.6, { size: 17, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `**${f}**`, x + 0.15, 2.28, cw - 0.3, 0.45, { size: 13.5, color: c, align: 'center', valign: 'middle' });
      ex.forEach((parts, j) => strip(s, x + 0.25, 2.9 + j * 0.75, parts, { size: 16, h: 0.55 }));
      d.t(s, `//${note}//`, x + 0.15, 4.5, cw - 0.3, 0.6, { size: 13.5, color: 'tx2', align: 'center', valign: 'middle' });
    });
    rule(s, 0.6, 5.42, 5.95, 1.38, 'No did', ['//I wasn’t tired. · Were you tired?//', '//Who called you? · What happened?//'], 'purple', { size: 14, gap: 2 });
    rule(s, 6.78, 5.42, 5.95, 1.38, '✗ Traps', ['//didn’t went · Did you saw?//', '//Did you were tired? · He workeds.//'], C.KO, { size: 14, gap: 2 });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 12 divider
  d.divider({ g: 12, tiles: [['Colour the boxes', '★', 'FaPalette'], ['Put the boxes in order', '★★', 'FaSortAmountDown'], ['Fill the boxes', '★★', 'FaEdit'], ['The wrong box', '★★', 'FaSearch'], ['Sentence dice', '★★', 'FaDice']] });

  // ---------------------------------------------------------------- 13 ex1 colour the boxes
  const ex1 = [[['I', 'n', 'SUBJECT'], ['cook', 'b'], ['ed', 'ed', 'VERB + -ED'], ['dinner', 'n', 'OBJECT'], ['yesterday.', 't', 'WHEN']],
    [['She', 'n', 'SUBJECT'], ['did', 'a', 'AUX'], ['n’t', 'ng', 'NOT'], ['call', 'b', 'BASE'], ['me.', 'n', 'OBJECT']],
    [['Did', 'a', 'AUX'], ['you', 'n', 'SUBJECT'], ['see', 'b', 'BASE'], ['the match?', 'n', 'OBJECT']],
    [['Where', 'q', 'QUESTION WORD'], ['did', 'a', 'AUX'], ['they', 'n', 'SUBJECT'], ['go?', 'b', 'BASE']],
    [['We', 'n', 'SUBJECT'], ['went', 'v2', 'PAST FORM'], ['to Spain', 'n', 'PLACE'], ['in 2019.', 't', 'WHEN']],
    [['He', 'n', 'SUBJECT'], ['was', 'v2', 'BE'], ['n’t', 'ng', 'NOT'], ['at home.', 'n', 'PLACE']]];
  d.ex({ g: 13, title: 'Exercise 1 — Colour the boxes', stars: '★', instr: 'Name each box (SUBJECT, PAST FORM, AUX, NOT, BASE…), then colour it!' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const rh = (6.85 - top) / 3;
    ex1.forEach((parts, i) => {
      const x = 0.6 + Math.floor(i / 3) * (cw + 0.2); const y = top + (i % 3) * rh;
      d.rect(s, x, y + 0.05, cw, rh - 0.13, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.t(s, `**${i + 1}**`, x + 0.1, y + 0.05, 0.35, rh - 0.13, { size: 15, color: 'accent5', valign: 'middle' });
      strip(s, x + 0.5, y + (rh - 0.95) / 2, mode === 'q' ? plainParts(parts) : parts, { size: 18, h: 0.6, ls: 9 });
    });
  });

  // ---------------------------------------------------------------- 14 ex2 put the boxes in order
  const ex2 = [[[['yesterday.', 't'], ['football', 'n'], ['We', 'n'], ['played', 'v2']], [['We', 'n'], ['played', 'v2'], ['football', 'n'], ['yesterday.', 't']], '+'],
    [[['go', 'b'], ['to work.', 'n'], ['He', 'n'], ['didn’t', 'a']], [['He', 'n'], ['didn’t', 'a'], ['go', 'b'], ['to work.', 'n']], '−'],
    [[['call', 'b'], ['you?', 'n'], ['she', 'n'], ['Did', 'a']], [['Did', 'a'], ['she', 'n'], ['call', 'b'], ['you?', 'n']], '?'],
    [[['eat', 'b'], ['they', 'n'], ['for lunch?', 'n'], ['What', 'q'], ['did', 'a']], [['What', 'q'], ['did', 'a'], ['they', 'n'], ['eat', 'b'], ['for lunch?', 'n']], 'Wh?'],
    [[['Tom', 'n'], ['yesterday.', 't'], ['didn’t', 'a'], ['I', 'n'], ['see', 'b']], [['I', 'n'], ['didn’t', 'a'], ['see', 'b'], ['Tom', 'n'], ['yesterday.', 't']], '−']];
  d.ex({ g: 14, title: 'Exercise 2 — Put the boxes in order', stars: '★★', instr: 'The colours help you! Build the sentence: +, − or ?' }, (s, mode, top) => {
    const rh = (6.75 - top) / 5;
    ex2.forEach(([shuf, ok, t], i) => {
      const y = top + i * rh + 0.1;
      d.t(s, `**${i + 1}**`, 0.6, y, 0.4, 0.64, { size: 18, color: 'accent5', valign: 'middle' });
      strip(s, 1.1, y, mode === 'q' ? shuf : ok, { size: 22, h: 0.64, gap: mode === 'q' ? 0.3 : 0.08 });
      if (mode === 'a') sym(s, t, 11.7, y, 0.64, t.length > 1 ? 0.95 : 0.64);
    });
  });

  // ---------------------------------------------------------------- 15 ex3 fill the boxes
  const ex3 = [[[['They', 'n'], ['watch', 'b'], ['ed', 'ed'], ['TV.', 'n']], [['They', 'n'], ['did', 'a'], ['n’t', 'ng'], ['watch', 'b'], ['TV.', 'n']], [['Did', 'a'], ['they', 'n'], ['watch', 'b'], ['TV?', 'n']]],
    [[['She', 'n'], ['went', 'v2'], ['home.', 'n']], [['She', 'n'], ['did', 'a'], ['n’t', 'ng'], ['go', 'b'], ['home.', 'n']], [['Did', 'a'], ['she', 'n'], ['go', 'b'], ['home?', 'n']]],
    [[['You', 'n'], ['met', 'v2'], ['Tom.', 'n']], [['You', 'n'], ['did', 'a'], ['n’t', 'ng'], ['meet', 'b'], ['Tom.', 'n']], [['Did', 'a'], ['you', 'n'], ['meet', 'b'], ['Tom?', 'n']]],
    [[['He', 'n'], ['bought', 'v2'], ['a car.', 'n']], [['He', 'n'], ['did', 'a'], ['n’t', 'ng'], ['buy', 'b'], ['a car.', 'n']], [['Did', 'a'], ['he', 'n'], ['buy', 'b'], ['a car?', 'n']]]];
  d.ex({ g: 15, title: 'Exercise 3 — Fill the boxes: + → − → ?', stars: '★★', instr: 'Write the negative (−) and the question (?). One word in each box!' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const chh = (6.85 - top - 0.15) / 2;
    ex3.forEach((rows, i) => {
      const x = 0.6 + (i % 2) * (cw + 0.2); const y = top + Math.floor(i / 2) * (chh + 0.15);
      d.rect(s, x, y, cw, chh, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      rows.forEach((parts, j) => {
        const yy = y + 0.18 + j * ((chh - 0.36) / 3);
        sym(s, ['+', '−', '?'][j], x + 0.2, yy, 0.52);
        strip(s, x + 0.95, yy, parts, { size: 17, h: 0.52, blank: mode === 'q' && j > 0 });
      });
    });
  });

  // ---------------------------------------------------------------- 16 ex4 the wrong box
  const ex4 = [[[['She', 'n'], ['did', 'a'], ['n’t', 'ng'], ['went', 'v2'], ['to school.', 'n']], 3, 'go'], [[['Did', 'a'], ['you', 'n'], ['saw', 'v2'], ['the match?', 'n']], 2, 'see'],
    [[['He', 'n'], ['buyed', 'v2'], ['a new phone.', 'n']], 1, 'bought'], [[['When', 'q'], ['does', 'a'], ['she', 'n'], ['arrive', 'b'], ['last night?', 't']], 1, 'did'],
    [[['It', 'n'], ['were', 'v2'], ['cold', 'n'], ['yesterday.', 't']], 1, 'was'], [[['I', 'n'], ['do', 'a'], ['n’t', 'ng'], ['see', 'b'], ['Sam', 'n'], ['yesterday.', 't']], 1, 'did']];
  d.ex({ g: 16, title: 'Exercise 4 — The wrong box', stars: '★★', instr: 'In each sentence, one box is wrong. Find it and correct it.' }, (s, mode, top) => {
    const rh = ((mode === 'a' ? 6.45 : 6.8) - top) / 6;
    ex4.forEach(([parts, k, fix], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.03, 12.13, rh - 0.07, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.08 });
      d.t(s, `**${i + 1}**`, 0.7, y, 0.4, rh, { size: 15, color: 'accent5', valign: 'middle' });
      const P = mode === 'a' ? parts.map((p, j) => (j === k ? [p[0], 'x'] : p)) : parts;
      const e = strip(s, 1.2, y + (rh - 0.56) / 2, P, { size: 19, h: 0.56 });
      if (mode === 'a') {
        d.t(s, '→', e + 0.15, y, 0.5, rh, { size: 20, bold: true, color: C.OK, align: 'center', valign: 'middle' });
        chip(s, fix, C.OK, e + 0.7, y + (rh - 0.5) / 2, { size: 18, h: 0.5 });
      }
    });
    if (mode === 'a') d.t(s, 'Après //did / didn’t// : la **base** · //be// : //was / were// · //yesterday, last night// → **past simple** (//did//, pas //do / does//).', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 17 ex5 sentence dice
  {
    const s = d.page({ g: 17, tag: 'YOUR TURN!', title: 'Exercise 5 — Sentence dice', stars: '★★' });
    const COL = [['WHO?', INK, ['I', 'My sister', 'Tom and Lucy', 'We', 'My boss']], ['WHAT?', 'accent6', ['go to the cinema', 'play football', 'buy a pizza', 'see a film', 'work late', 'visit Paris']], ['WHEN?', C.MK, ['yesterday', 'last night', 'on Monday', 'two days ago', 'last summer']]];
    const W = [2.2, 3.0, 2.55]; let x = 0.6;
    COL.forEach(([h, c, L], j) => {
      const w = W[j];
      d.rect(s, x, 1.6, w, 0.5, { fill: c, line: null, radius: 0.1 });
      d.t(s, `**${h}**`, x, 1.6, w, 0.5, { size: 16, color: 'bg1', align: 'center', valign: 'middle', cs: 1 });
      L.forEach((t, i) => {
        const y = 2.25 + i * 0.7;
        d.rect(s, x, y, w, 0.58, { fill: j === 2 ? 'FDF1E6' : 'FFFFFF', line: j === 1 ? 'accent6' : j === 2 ? C.MK : BORDER, lw: 1.25, radius: 0.1, shadow: true });
        d.t(s, `//${t}//`, x, y, w, 0.58, { size: 16, align: 'center', valign: 'middle', color: j === 2 ? C.MK : 'tx1', bold: j === 2 });
      });
      x += w + 0.15;
    });
    d.t(s, '//(base form!)//', 2.95, 6.45, 3.0, 0.35, { size: 12.5, color: 'accent6', align: 'center' });
    const bx = 9.0; const bw2 = 12.73 - bx;
    d.rect(s, bx, 1.6, bw2, 5.2, { fill: TINT[C.QW], line: C.QW, lw: 1.5, radius: 0.12 });
    d.ill(s, 'game-die', bx + 0.2, 1.75, 0.85, 0.85);
    [['1 · 2', '+'], ['3 · 4', '−'], ['5 · 6', '?']].forEach(([f, t], i) => {
      const xx = bx + 1.2 + i * 0.82;
      d.t(s, f, xx, 1.72, 0.75, 0.3, { size: 11, bold: true, color: 'tx2', align: 'center' });
      sym(s, t, xx + 0.12, 2.05, 0.5);
    });
    d.t(s, '**HOW TO PLAY**', bx + 0.2, 2.8, bw2 - 0.4, 0.4, { size: 15, color: C.QW, cs: 1 });
    d.t(s, ['① Take one card in each column.', '② Roll the die: **+**, **−** or **?**', '③ Say the sentence in the past simple.', '④ Your partner draws the **boxes** (with the colours!).', '⑤ Correct = **1 point**.'], bx + 0.2, 3.2, bw2 - 0.4, 3.5, { size: 14.5, valign: 'top', gap: 7 });
  }

  // ---------------------------------------------------------------- 18 ticket
  d.ticket({
    g: 18,
    q: ['Negative: //We went to the park.//', 'Question: //He worked late.// (Did…?)', 'Put in order: //you · did · What · see?//'],
    self: ['Cut', 'Build', 'Transform'],
    teaser: { icon: 'FaBook', text: '**Homework**: write 3 sentences about yesterday (one +, one −, one ?) and cut them into coloured boxes.' },
  });
}

module.exports = { meta, build };
