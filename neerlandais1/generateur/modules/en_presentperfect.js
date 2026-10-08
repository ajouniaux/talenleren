// English A2–B1 — The present perfect (règle, exceptions, usages) et la comparaison avec le past simple
const { BORDER } = require('../lib');
const { C, INK, hexOf, TINT, metaBase, kit } = require('../en_kit');

const meta = {
  ...metaBase,
  n: 'PP', slug: 'Present_perfect', title: 'The present perfect', short: 'Present perfect',
  template: '../anglais_grammaire/present_perfect.md', file: 'English_Present_perfect.pptx',
  docTitle: 'English A2–B1 — The present perfect (vs the past simple)', subject: 'English A2–B1 — The present perfect',
  foot: 'English · A2–B1 · The present perfect',
};

function build(d) {
  const { band, rich, pc, strip, tl, rule, chip, pcard, trap, bw } = kit(d);
  const PP = C.PP; const PS = C.PS;
  // le pont : arc d'un point du passé jusqu'à NOW
  const bridge = (s, x1, x2, y, h = 0.7, c = PP) => {
    d.oval(s, x1 - 0.12, y - 0.12, 0.24, 0.24, { fill: c, line: 'FFFFFF', lw: 1 });
    d.curve(s, x1, y - 0.05, x2 - 0.02, y - 0.05, { color: hexOf(c), lw: 3, h, dir: -1 });
  };
  // mini ligne du temps (cartes)
  const mini = (s, x, y, w, kind, c) => {
    const ny = y + 0.42; const nu = x + w * 0.82;
    d.line(s, x, ny, x + w, ny, { color: '8A96A8', lw: 1.5 });
    d.rect(s, nu - 0.03, ny - 0.2, 0.06, 0.4, { fill: C.NOW, line: null, radius: 0 });
    const dot = (cx) => d.oval(s, cx - 0.09, ny - 0.09, 0.18, 0.18, { fill: c });
    if (kind === 'exp') { [0.15, 0.4, 0.62].forEach((f) => dot(x + w * f)); d.rect(s, x + 0.05, ny - 0.32, nu - x - 0.08, 0.64, { fill: 'FFFFFF', tr: 100, line: c, lw: 1, dash: 'dash', radius: 0.06 }); }
    if (kind === 'res') { dot(nu - 0.35); d.curve(s, nu - 0.35, ny - 0.05, nu - 0.03, ny - 0.05, { color: hexOf(c), lw: 2, h: 0.35, dir: -1 }); }
    if (kind === 'dur') d.rect(s, x + w * 0.2, ny - 0.08, nu - x - w * 0.2, 0.16, { fill: c, line: null, radius: 0.04 });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'ENGLISH · A2–B1', title: 'The present perfect', sub: 'Le passé qui touche le présent… et la comparaison avec le past simple', line: 'have / has + past participle',
    visual: (s) => {
      d.rect(s, 6.55, 1.2, 6.5, 4.2, { fill: 'FFFFFF', line: null, radius: 0.16 });
      tl(s, 6.8, 12.85, 3.0, { nu: 11.9, nuLab: false });
      d.t(s, '**NOW**', 11.4, 3.3, 1.0, 0.35, { size: 13, color: C.NOW, align: 'center' });
      bridge(s, 8.0, 11.9, 3.0, 1.0);
      d.t(s, '**link with NOW**', 8.6, 1.55, 2.8, 0.4, { size: 14, italic: true, color: PP, align: 'center' });
      d.ill(s, 'key', 7.0, 1.5, 0.75, 0.75);
      strip(s, 6.9, 3.95, [['I', 'n', 'SUBJECT'], ['have', 'a', 'HAVE'], ['lost', 'v3', 'PARTICIPLE'], ['my keys!', 'n']], { size: 18, h: 0.58, ls: 9 });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Discover');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaPuzzlePiece', h: 'Build', t: 'I build the present perfect: have / has + past participle.', color: 'accent2' },
      { icon: 'FaLink', h: 'Use', t: 'I talk about experiences, results and situations that are still true.', color: 'accent1' },
      { icon: 'FaBalanceScale', h: 'Choose', t: 'I choose: present perfect or past simple?', color: 'accent4' },
    ],
    band: 'No date, but a link with NOW → present perfect. A date → past simple.',
  });

  // ---------------------------------------------------------------- 3 warm-up: what has happened?
  {
    const s = d.page({ g: 3, tag: 'WARM-UP', title: 'Look! What has happened?' });
    const W = [['droplet', 'it / rain'], ['key', 'I / lose / my keys'], ['trophy', 'we / win / the match'], ['hot-beverage', 'someone / drink / my coffee'], ['adhesive-bandage', 'he / hurt / his hand'], ['bus', 'the bus / leave']];
    const cw = (12.13 - 2 * 0.2) / 3;
    W.forEach(([ic, t], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.2); const y = 1.6 + Math.floor(i / 3) * 2.05;
      d.rect(s, x, y, cw, 1.85, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.25, y + 0.35, 1.15, 1.15);
      d.t(s, `//**${t}**//`, x + 1.55, y + 0.15, cw - 1.7, 1.55, { size: 18, color: 'tx2', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.8, 12.13, 0.95, { fill: TINT[PP], line: PP, lw: 1.5, radius: 0.12 });
    rich(s, pc('Look! It <has rained>. The street is wet. — Oh no! I <have lost> my keys!', 20, PP), 0.9, 5.8, 11.6, 0.95);
  }

  // ---------------------------------------------------------------- 4 the bridge
  {
    const s = d.page({ g: 4, tag: 'GRAMMAR', title: 'The bridge: a past action linked to NOW' });
    const y = 2.85;
    tl(s, 0.7, 12.75, y, { nu: 11.0, zones: [[0.8, 10.8, 'D5DCE6']] });
    bridge(s, 3.0, 11.0, y, 0.9);
    d.t(s, '**past action**', 2.0, y + 0.2, 2.0, 0.4, { size: 14, color: PP, align: 'center' });
    d.t(s, '**+ link with NOW** : no date!', 4.8, 1.48, 4.5, 0.4, { size: 16, italic: true, color: PP, align: 'center' });
    const U = [['EXPERIENCE', 'globe-showing-europe-africa', 'exp', 'ever · never', 'Have you ever <been> to Japan?'], ['RESULT NOW', 'key', 'res', 'just · already · yet', 'I <have lost> my keys!'], ['STILL TRUE', 'hourglass-not-done', 'dur', 'for · since', 'I <have lived> here for 5 years.']];
    const cw = (12.13 - 0.4) / 3;
    U.forEach(([h, ic, kind, words, ex], i) => {
      const x = 0.6 + i * (cw + 0.2);
      d.rect(s, x, 3.55, cw, 2.5, { fill: 'FFFFFF', line: PP, lw: 1.75, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.15, 3.65, 0.6, 0.6);
      d.t(s, `**${i + 1}. ${h}**`, x + 0.85, 3.65, cw - 0.95, 0.6, { size: 15, color: PP, valign: 'middle' });
      mini(s, x + 0.3, 4.25, cw - 0.6, kind, PP);
      chip(s, words, C.MK, x + 0.2, 5.0, { size: 13, h: 0.36, fill: false });
      rich(s, pc(ex, 15, PP), x + 0.2, 5.4, cw - 0.4, 0.55);
    });
    band(s, 'Present perfect = un passé **sans date précise**, qui a un **lien avec maintenant**.', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 5 the sentence in boxes
  {
    const s = d.page({ g: 5, tag: 'GRAMMAR', title: 'The sentence in boxes: have / has + participle' });
    strip(s, 0.8, 1.75, [['She', 'n', 'SUBJECT'], ['has', 'a', 'HAVE / HAS'], ['visit', 'v3', 'PAST PARTICIPLE'], ['ed', 'ed'], ['London', 'n', 'COMPLEMENT'], ['three times.', 't', 'HOW OFTEN']], { size: 26, h: 0.82, ls: 11 });
    const G = [['have · ’ve', 'I · you · we · they', ['I’ve finished.', 'They have left.']], ['has · ’s', 'he · she · it', ['She’s finished.', 'It has started.']]];
    G.forEach(([h, who, L], i) => {
      const x = 0.6 + i * 3.1;
      d.rect(s, x, 3.2, 2.95, 2.8, { fill: 'FFFFFF', line: C.AUX, lw: 1.75, radius: 0.12, shadow: true });
      d.rect(s, x, 3.2, 2.95, 0.6, { fill: C.AUX, line: null, radius: 0.12 });
      d.t(s, `**${h}**`, x, 3.2, 2.95, 0.6, { size: 18, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `//**${who}**//`, x + 0.1, 3.85, 2.75, 0.5, { size: 15, color: C.AUX, align: 'center', valign: 'middle' });
      L.forEach((t, j) => d.t(s, `//${t}//`, x + 0.1, 4.45 + j * 0.6, 2.75, 0.5, { size: 17, align: 'center', valign: 'middle' }));
    });
    trap(s, 6.85, 3.2, 5.88, 2.8, ['« elle **est** partie » → //She **has** left.// : en anglais, **toujours** //have// ! (✗ //She is left.//)', '« j’ai visité » → //I’ve visited// **seulement** s’il n’y a pas de date précise.'], { size: 16, gap: 8 });
    band(s, '//’s// = //has// ou //is// : //She’s finished// (has) · //She’s tired// (is).', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 6 the past participle
  {
    const s = d.page({ g: 6, tag: 'GRAMMAR', title: 'The past participle: the 3rd form' });
    d.rect(s, 0.6, 1.6, 12.13, 1.25, { fill: TINT[C.OK], line: C.OK, lw: 1.5, radius: 0.12 });
    d.t(s, '**Regular verbs**', 0.85, 1.65, 3, 0.45, { size: 16, color: C.OK, valign: 'middle' });
    d.t(s, 'past simple = past participle', 0.85, 2.1, 3.2, 0.6, { size: 14, italic: true, color: 'tx2', valign: 'middle' });
    [['work', 'worked', 'worked'], ['study', 'studied', 'studied'], ['stop', 'stopped', 'stopped']].forEach(([a, b, c3], i) => {
      const x = 4.3 + i * 2.85;
      d.t(s, `//${a}//`, x, 1.75, 0.9, 0.45, { size: 15, color: 'tx2', valign: 'middle' });
      chip(s, b, PS, x, 2.2, { size: 14, h: 0.42, w: 1.25 });
      d.t(s, '=', x + 1.25, 2.2, 0.3, 0.42, { size: 18, bold: true, color: C.OK, align: 'center', valign: 'middle' });
      chip(s, c3, PP, x + 1.55, 2.2, { size: 14, h: 0.42, w: 1.25 });
    });
    const F = [['A – A – A', 'accent3', [['cut', 'cut', 'cut'], ['put', 'put', 'put']]], ['A – B – B', 'accent1', [['buy', 'bought', 'bought'], ['make', 'made', 'made']]], ['A – B – A', 'purple', [['come', 'came', 'come'], ['run', 'ran', 'run']]], ['A – B – C', C.KO, [['go', 'went', 'gone'], ['write', 'wrote', 'written']]]];
    const cw = (12.13 - 0.45) / 4;
    F.forEach(([h, c, L], i) => {
      const x = 0.6 + i * (cw + 0.15);
      d.rect(s, x, 3.05, cw, 3.0, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 3.05, cw, 0.55, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${h}**`, x, 3.05, cw, 0.55, { size: 16, color: 'bg1', align: 'center', valign: 'middle' });
      L.forEach(([a, b, c3], j) => {
        const y = 3.75 + j * 1.12;
        d.t(s, `//${a}// → //${b}// →`, x + 0.1, y, cw - 0.2, 0.4, { size: 14, color: 'accent5', align: 'center', valign: 'middle' });
        chip(s, c3, PP, x + (cw - bw(c3, 18)) / 2, y + 0.42, { size: 18, h: 0.5 });
      });
    });
    band(s, 'Les irréguliers ont souvent une **3e forme** différente : //go – went – **gone**//.', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 7 top 20 participles
  {
    const s = d.page({ g: 7, tag: 'EXCEPTIONS', tagColor: C.KO, title: '20 past participles you need most' });
    const V = [['be', 'been'], ['have', 'had'], ['do', 'done'], ['go', 'gone / been'], ['get', 'got'], ['make', 'made'], ['say', 'said'], ['see', 'seen'], ['take', 'taken'], ['come', 'come'],
      ['know', 'known'], ['think', 'thought'], ['give', 'given'], ['find', 'found'], ['tell', 'told'], ['write', 'written'], ['eat', 'eaten'], ['buy', 'bought'], ['meet', 'met'], ['speak', 'spoken']];
    const cw = (12.13 - 4 * 0.15) / 5;
    V.forEach(([b, r], i) => pcard(s, 0.6 + (i % 5) * (cw + 0.15), 1.6 + Math.floor(i / 5) * 1.1, cw, 0.98, b, r, PP, { bs: 15, rs: 17 }));
    band(s, 'Astuce : beaucoup de participes irréguliers finissent par //-n// ou //-en// : //seen, known, given, written, eaten, spoken//.', 6.15, 0.6, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 8 negative and questions
  {
    const s = d.page({ g: 8, tag: 'GRAMMAR', title: 'Negative and questions: have does the work' });
    d.t(s, '**−**', 0.6, 1.7, 0.4, 0.7, { size: 26, color: C.NEG, align: 'center', valign: 'middle' });
    strip(s, 1.1, 1.7, [['She', 'n', 'SUBJECT'], ['has', 'a', 'HAS'], ['n’t', 'ng', 'NOT'], ['finished', 'v3', 'PARTICIPLE'], ['the report.', 'n']], { size: 24, h: 0.72, ls: 11 });
    d.t(s, '**?**', 0.6, 3.05, 0.4, 0.7, { size: 26, color: C.QW, align: 'center', valign: 'middle' });
    strip(s, 1.1, 3.05, [['Has', 'a', 'HAS'], ['she', 'n', 'SUBJECT'], ['finished', 'v3', 'PARTICIPLE'], ['the report?', 'n']], { size: 24, h: 0.72, ls: 11 });
    const P = strip.pos;
    d.curve(s, P[1][0] + P[1][1] / 2, 3.03, P[0][0] + P[0][1] / 2, 3.03, { color: hexOf(C.AUX), lw: 2, h: 0.3, dir: -1 });
    chip(s, 'Yes, she has.', C.OK, 8.6, 3.15, { size: 16, h: 0.48 });
    chip(s, 'No, she hasn’t.', C.NEG, 8.6, 3.75, { size: 16, h: 0.48 });
    d.rect(s, 0.6, 4.4, 12.13, 1.65, { fill: TINT[C.QW], line: C.QW, lw: 1.5, radius: 0.12 });
    d.t(s, '**Wh- questions : QUASI again**', 0.85, 4.45, 5, 0.42, { size: 15, color: C.QW, valign: 'middle' });
    strip(s, 0.9, 4.95, [['How long', 'q', 'Q'], ['have', 'a', 'A'], ['you', 'n', 'S'], ['lived', 'v3', 'PARTICIPLE'], ['here?', 'n']], { size: 22, h: 0.66, ls: 12 });
    d.t(s, ['//**Where** have you been?//', '//**What** have you done?//'], 9.3, 4.85, 3.3, 1.1, { size: 16, valign: 'middle', gap: 4 });
    band(s, 'Pas de //do / did// : c’est //have / has// qui fait la négation et la question.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 9 use 1: experience
  d.section('Three uses');
  {
    const s = d.page({ g: 9, tag: 'USE 1', tagColor: PP, title: 'Experience: ever, never' });
    const y = 2.45;
    d.rect(s, 0.75, 1.6, 10.4, 1.55, { fill: TINT[PP], line: PP, lw: 1.5, dash: 'dash', radius: 0.12 });
    d.t(s, '**MY LIFE, UNTIL NOW** · no date', 0.95, 1.63, 6, 0.4, { size: 14, color: PP, valign: 'middle' });
    d.ill(s, 'baby', 0.9, 2.1, 0.6, 0.6);
    tl(s, 1.6, 12.75, y, { nu: 11.5, nuLab: false });
    d.t(s, '**NOW**', 11.1, 1.65, 0.8, 0.35, { size: 13, color: C.NOW, align: 'center' });
    [3.3, 5.6, 8.4].forEach((x) => d.oval(s, x - 0.12, y - 0.12, 0.24, 0.24, { fill: PP, line: 'FFFFFF', lw: 1 }));
    d.t(s, '? ? ?', 4.0, 2.6, 4, 0.4, { size: 14, bold: true, color: PP, align: 'center' });
    strip(s, 0.8, 3.45, [['Have', 'a'], ['you', 'n'], ['ever', 't', 'EVER = déjà (dans ta vie)'], ['been', 'v3'], ['to Japan?', 'n']], { size: 24, h: 0.72, ls: 11 });
    strip(s, 0.8, 4.6, [['I', 'n'], ['have', 'a'], ['never', 'ng', 'NEVER = jamais'], ['eaten', 'v3'], ['sushi.', 'n']], { size: 24, h: 0.72, ls: 11 });
    rule(s, 8.6, 3.4, 4.13, 2.25, '✓ Place', ['//ever, never// : entre //have// et le participe', 'answer : //Yes, I have. · No, never.//'], C.OK, { size: 14.5 });
    trap(s, 0.6, 5.75, 12.13, 1.05, ['Avec une date → past simple : ✗ //I have been to Japan in 2019.// → ✓ //I **went** to Japan in 2019.//'], { size: 15 });
  }

  // ---------------------------------------------------------------- 10 been or gone
  {
    const s = d.page({ g: 10, tag: 'EXCEPTIONS', tagColor: C.KO, title: 'Been or gone?' });
    const B = [['GONE', 'one-way trip: he is there now', 'Tom has gone to Paris.', '(He is in Paris now.)', false, C.KO], ['BEEN', 'return trip: he is back', 'Tom has been to Paris.', '(He went and came back.)', true, C.OK]];
    B.forEach(([h, sub, ex, note, back, c], i) => {
      const x = 0.6 + i * 6.18;
      d.rect(s, x, 1.6, 5.95, 4.4, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, 5.95, 0.65, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${h}**`, x, 1.6, 5.95, 0.65, { size: 24, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `//${sub}//`, x + 0.2, 2.3, 5.55, 0.45, { size: 15, color: c, align: 'center', valign: 'middle' });
      d.ill(s, 'house', x + 0.5, 2.9, 1.1, 1.1);
      d.ill(s, 'airplane', x + 2.4, 2.75, 0.8, 0.8);
      d.t(s, '**PARIS**', x + 4.0, 3.15, 1.6, 0.5, { size: 15, color: 'tx2', align: 'center', valign: 'middle' });
      d.ill(s, 'man-walking', x + 4.35, 3.6, 0.9, 0.9);
      d.line(s, x + 1.7, 3.75, x + 4.1, 3.75, { color: hexOf(c), lw: 3 });
      if (back) d.line(s, x + 4.1, 4.15, x + 1.7, 4.15, { color: hexOf(c), lw: 3 });
      rich(s, pc(ex.replace(/has (gone|been)/, '[has] <$1>'), 22, PP), x + 0.2, 4.65, 5.55, 0.6, { align: 'center' });
      d.t(s, note, x + 0.2, 5.25, 5.55, 0.5, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    band(s, '//go// a deux participes : //**gone**// (il y est encore) · //**been**// (il est allé et revenu → l’expérience).', 6.2, 0.6, 'tx2', 15.5);
  }

  // ---------------------------------------------------------------- 11 use 2: result
  {
    const s = d.page({ g: 11, tag: 'USE 2', tagColor: PP, title: 'Result now: just, already, yet' });
    const K = [['JUST', 'à l’instant', 'I’ve <just> <finished> the report.', 'between have + participle'], ['ALREADY', 'déjà (plus tôt que prévu)', 'She has <already> <left>.', 'between have + participle'], ['YET', 'déjà ? · pas encore', 'Have you finished <yet>? — Not <yet>.', 'at the end · ? and −']];
    const cw = (12.13 - 0.4) / 3;
    K.forEach(([h, fr, ex, pos], i) => {
      const x = 0.6 + i * (cw + 0.2);
      d.rect(s, x, 1.6, cw, 2.75, { fill: 'FFFFFF', line: PP, lw: 1.75, radius: 0.12, shadow: true });
      chip(s, h, C.MK, x + 0.2, 1.72, { size: 18, h: 0.5, roman: true });
      d.t(s, `//${fr}//`, x + 0.2, 2.28, cw - 0.4, 0.4, { size: 14, color: 'tx2', valign: 'middle' });
      mini(s, x + 0.3, 2.6, cw - 0.6, 'res', PP);
      rich(s, pc(ex.replace(/<(just|already|yet)>/g, '{$1}'), 16, PP), x + 0.2, 3.35, cw - 0.4, 0.55);
      d.t(s, pos, x + 0.2, 3.9, cw - 0.4, 0.35, { size: 12, italic: true, bold: true, color: C.MK });
    });
    const e11 = strip(s, 0.8, 4.85, [['I', 'n'], ['have', 'a'], ['just · already', 't', '↓ ICI'], ['finished.', 'v3']], { size: 17, h: 0.6, ls: 11 });
    strip(s, e11 + 0.5, 4.85, [['I', 'n'], ['haven’t', 'a'], ['finished', 'v3'], ['yet.', 't', '↓ À LA FIN']], { size: 17, h: 0.6, ls: 11 });
    band(s, '« Je viens de finir » → //I’ve **just** finished.// (✗ //I come to finish//)', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 12 use 3: for / since
  {
    const s = d.page({ g: 12, tag: 'USE 3', tagColor: PP, title: 'Still true: for and since' });
    const y = 2.55;
    tl(s, 0.7, 12.75, y, { nu: 11.0 });
    d.rect(s, 3.0, y - 0.15, 8.0, 0.3, { fill: PP, line: null, radius: 0.06 });
    d.rect(s, 2.92, y - 0.42, 0.16, 0.84, { fill: C.MK, line: null, radius: 0.03 });
    chip(s, 'since 2021', C.MK, 2.1, y + 0.55, { size: 16, h: 0.46 });
    d.t(s, '= le point de départ', 1.6, y + 1.05, 2.9, 0.35, { size: 13, italic: true, color: C.MK, align: 'center' });
    d.line(s, 3.1, 1.75, 10.9, 1.75, { color: hexOf(PP), lw: 1.5, begin: 'triangle' });
    chip(s, 'for five years', PP, 5.9, 1.52, { size: 16, h: 0.46 });
    d.t(s, '= la durée', 8.4, 1.8, 1.8, 0.3, { size: 13, italic: true, color: PP, valign: 'middle' });
    strip(s, 4.4, 3.2, [['I', 'n'], ['have', 'a'], ['lived', 'v3'], ['here', 'n'], ['for five years.', 't']], { size: 20, h: 0.6 });
    strip(s, 4.4, 3.95, [['I', 'n'], ['have', 'a'], ['lived', 'v3'], ['here', 'n'], ['since 2021.', 't']], { size: 20, h: 0.6 });
    rule(s, 0.6, 4.75, 3.9, 1.35, 'FOR + a length', ['//two hours · a week · ten years · ages//'], PP, { size: 14.5 });
    rule(s, 4.7, 4.75, 3.9, 1.35, 'SINCE + a starting point', ['//9 o’clock · Monday · 2021 · I was a child//'], C.MK, { size: 14.5 });
    trap(s, 8.8, 4.75, 3.93, 1.35, ['✗ //I live here since 5 years.//', '✓ //I’**ve lived** here **for** 5 years.//'], { size: 14, gap: 2, title: '« depuis 5 ans »' });
    band(s, 'Question : //**How long** have you lived here?//', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 13 open time vs closed time
  {
    const s = d.page({ g: 13, tag: 'GRAMMAR', title: 'Open time or closed time?' });
    const B = [['OPEN TIME', 'still going', 'unlocked', PP, ['today', 'this week', 'this year', 'in my life', 'recently', 'so far'], 'I’ve drunk 3 coffees {today}.', 'present perfect'], ['CLOSED TIME', 'finished', 'locked', PS, ['yesterday', 'last week', 'in 2019', 'two days ago', 'when I was 10', 'last night'], 'I drank 3 coffees {yesterday}.', 'past simple']];
    B.forEach(([h, sub, ic, c, L, ex, tense], i) => {
      const x = 0.6 + i * 6.18;
      d.rect(s, x, 1.6, 5.95, 4.45, { fill: TINT[c], line: c, lw: 2, dash: i ? undefined : 'dash', radius: 0.12 });
      d.ill(s, ic, x + 0.2, 1.72, 0.7, 0.7);
      d.t(s, [`**${h}**`, `//${sub}//`], x + 1.05, 1.68, 2.4, 0.8, { size: 18, color: c, valign: 'middle', gap: 0 });
      chip(s, tense, c, x + 5.95 - bw(tense, 14) - 0.2, 1.85, { size: 14, h: 0.44, roman: true });
      L.forEach((t, j) => chip(s, t, C.MK, x + 0.25 + (j % 3) * 1.85, 2.75 + Math.floor(j / 3) * 0.65, { size: 14, h: 0.48, w: 1.72, fill: false }));
      d.rect(s, x + 0.2, 4.35, 5.55, 1.45, { fill: 'FFFFFF', line: null, radius: 0.1 });
      rich(s, pc(ex.replace(/(drunk|drank)/, '<$1>').replace(/I’ve/, 'I’[ve]'), 20, c), x + 0.4, 4.35, 5.2, 1.45, { align: 'center' });
    });
    band(s, '« J’ai bu 3 cafés **aujourd’hui** » (la journée continue) ≠ « **hier** » (c’est fini).', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 14 comparison 1: side by side
  d.section('Past simple or present perfect?');
  {
    const s = d.page({ g: 14, tag: 'COMPARISON', tagColor: 'purple', title: 'Past simple or present perfect? Side by side' });
    const cw = 5.95; const X = [0.6, 6.78];
    [['PAST SIMPLE', PS, 'locked', 'finished time · a date'], ['PRESENT PERFECT', PP, 'unlocked', 'no date · link with NOW']].forEach(([h, c, ic, sub], j) => {
      const x = X[j];
      d.rect(s, x, 1.55, cw, 0.6, { fill: c, line: null, radius: 0.1 });
      d.ill(s, ic, x + 0.15, 1.6, 0.5, 0.5);
      d.t(s, [`**${h}**`], x + 0.8, 1.55, 2.6, 0.6, { size: 16, color: 'bg1', valign: 'middle' });
      d.t(s, `//${sub}//`, x + 3.2, 1.55, cw - 3.3, 0.6, { size: 12.5, color: 'bg1', align: 'right', valign: 'middle' });
      const ty = 2.6;
      d.line(s, x + 0.2, ty, x + cw - 0.2, ty, { color: '8A96A8', lw: 1.5 });
      d.rect(s, x + cw - 0.75, ty - 0.22, 0.06, 0.44, { fill: C.NOW, line: null, radius: 0 });
      if (j === 0) { d.rect(s, x + 0.6, ty - 0.3, 3.2, 0.6, { fill: 'FFFFFF', tr: 100, line: c, lw: 1.5, dash: 'dash', radius: 0.06 }); d.oval(s, x + 2.1, ty - 0.1, 0.2, 0.2, { fill: c }); } else bridge(s, x + 1.6, x + cw - 0.72, ty, 0.4, c);
    });
    const R = [['I <lost> my keys {yesterday}.', 'I found them. (fini)', 'I <’ve lost> my keys!', 'I can’t get in. (résultat maintenant)'], ['She <lived> in Paris for 3 years.', 'She doesn’t live there now.', 'She <has lived> in Paris for 3 years.', 'She still lives there.'],
      ['<Did> you <see> the match {last night}?', 'one occasion, finished', '<Have> you ever <seen> a live match?', 'in your life (expérience)'], ['I <wrote> 2 emails {this morning}.', 'It’s 3 p.m.: the morning is over.', 'I <’ve written> 2 emails {this morning}.', 'It’s 10 a.m.: still the morning!']];
    R.forEach(([a, an, b, bn], i) => {
      const y = 3.05 + i * 0.78;
      [[a, an, PS], [b, bn, PP]].forEach(([t, n, c], j) => {
        d.rect(s, X[j], y, cw, 0.7, { fill: i % 2 ? 'FFFFFF' : TINT[c], line: null, radius: 0.08 });
        rich(s, pc(t, 16, c), X[j] + 0.15, y + 0.02, cw - 0.3, 0.4);
        d.t(s, n, X[j] + 0.15, y + 0.4, cw - 0.3, 0.28, { size: 11.5, italic: true, color: 'accent5', valign: 'middle' });
      });
    });
  }

  // ---------------------------------------------------------------- 15 comparison 2: decision tree
  {
    const s = d.page({ g: 15, tag: 'COMPARISON', tagColor: 'purple', title: 'The decision tree: two questions' });
    const box = (x, y, w, h, c, lines, o = {}) => {
      d.rect(s, x, y, w, h, { fill: o.fill ? c : TINT[c] || 'FFFFFF', line: c, lw: 2, radius: 0.14, shadow: true });
      d.t(s, lines, x + 0.15, y, w - 0.3, h, { size: o.size || 15, color: o.fill ? 'bg1' : 'tx1', align: 'center', valign: 'middle', gap: 2 });
    };
    box(3.6, 1.55, 6.1, 1.1, 'tx2', ['**① Is there a FINISHED time?**', '//yesterday · last… · …ago · in 2019 · when I was…//']);
    box(0.6, 2.95, 2.7, 1.1, PS, ['**PAST SIMPLE**', '//I saw it yesterday.//'], { fill: true });
    d.line(s, 3.6, 2.2, 2.0, 2.93, { color: hexOf(PS), lw: 2.5 });
    d.t(s, '**YES**', 2.15, 2.15, 0.9, 0.35, { size: 13, color: PS });
    d.line(s, 6.65, 2.67, 6.65, 3.23, { color: INK, lw: 2.5 });
    d.t(s, '**NO**', 6.8, 2.75, 0.8, 0.35, { size: 13, color: 'tx2' });
    box(3.6, 3.25, 5.75, 1.1, 'tx2', ['**② Is there a LINK with NOW?**', '//result · experience · still true · open time (today, this week)//']);
    box(10.03, 3.25, 2.7, 1.1, PP, ['**PRESENT PERFECT**', '//I’ve seen it.//'], { fill: true });
    d.line(s, 9.37, 3.8, 10.0, 3.8, { color: hexOf(PP), lw: 2.5 });
    d.t(s, '**YES**', 9.37, 3.38, 0.63, 0.35, { size: 12, color: PP, align: 'center' });
    const E = [['I lost my keys yesterday.', '① yes : //yesterday//', PS], ['I’ve lost my keys!', '② yes : résultat (pas de clés !)', PP], ['I’ve worked here since 2021.', '② yes : toujours vrai', PP]];
    const cw = (12.13 - 0.4) / 3;
    E.forEach(([t, why, c], i) => {
      const x = 0.6 + i * (cw + 0.2);
      d.rect(s, x, 4.65, cw, 1.4, { fill: 'FFFFFF', line: c, lw: 1.5, radius: 0.12 });
      d.t(s, `//**${t}**//`, x + 0.15, 4.7, cw - 0.3, 0.7, { size: 16, color: c, align: 'center', valign: 'middle' });
      d.t(s, why, x + 0.15, 5.35, cw - 0.3, 0.6, { size: 13.5, color: 'tx2', align: 'center', valign: 'middle' });
    });
    band(s, 'Pour raconter les **détails** d’une histoire (quand, où, comment) : **past simple**.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 16 comparison 3: news → details
  {
    const s = d.page({ g: 16, tag: 'COMPARISON', tagColor: 'purple', title: 'In a conversation: news first, then details' });
    const D = [['A', 'Have you ever been to Italy?', PP], ['B', 'Yes, I have. I’ve been there twice.', PP], ['A', 'When did you go?', PS], ['B', 'I went there last summer.', PS], ['A', 'Did you like it?', PS], ['B', 'Yes! We ate pizza every day!', PS]];
    D.forEach(([who, t, c], i) => {
      const y = 1.6 + i * 0.68; const x = who === 'A' ? 0.9 : 2.4; const w = 6.2;
      d.rect(s, x, y, w, 0.58, { fill: TINT[c], line: c, lw: 1.25, radius: 0.2 });
      d.t(s, `**${who}**`, x - 0.35, y, 0.3, 0.58, { size: 13, color: c, align: 'center', valign: 'middle' });
      d.t(s, `//${t}//`, x + 0.2, y, w - 0.4, 0.58, { size: 17, valign: 'middle' });
    });
    d.rect(s, 9.0, 1.6, 0.12, 1.3, { fill: PP, line: null, radius: 0 });
    d.t(s, ['**NEWS**', 'present perfect', '//(no date)//'], 9.25, 1.6, 3.45, 1.3, { size: 15, color: PP, valign: 'middle', gap: 0 });
    d.line(s, 9.06, 2.95, 9.06, 3.6, { color: '8A96A8', lw: 2 });
    d.rect(s, 9.0, 2.95 + 0.65, 0.12, 2.0, { fill: PS, line: null, radius: 0 });
    d.t(s, ['**DETAILS**', 'past simple', '//when? where? how?//'], 9.25, 3.6, 3.45, 2.0, { size: 15, color: PS, valign: 'middle', gap: 0 });
    d.rect(s, 0.6, 5.85, 12.13, 0.9, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.ill(s, 'newspaper', 0.75, 5.92, 0.75, 0.75);
    rich(s, [...pc('News: A fire <has destroyed> a school in Leeds. — ', 15, PP), ...pc('The fire <started> {at 3 a.m.} and firefighters <arrived> {ten minutes later}.', 15, PS)], 1.65, 5.85, 11.0, 0.9);
  }

  // ---------------------------------------------------------------- 17 FR ≠ EN
  {
    const s = d.page({ g: 17, tag: 'FR ≠ EN', title: 'French passé composé ≠ English present perfect' });
    const R = [['J’ai vu ce film hier.', 'I saw the film yesterday.', 'date → PS', PS], ['Je suis allé·e à Londres trois fois.', 'I’ve been to London three times.', 'expérience → PP', PP], ['J’habite ici depuis 2021.', 'I’ve lived here since 2021.', 'depuis → PP', PP],
      ['Je viens de finir.', 'I’ve just finished.', 'venir de → just', PP], ['Tu as déjà mangé des sushis ?', 'Have you ever eaten sushi?', 'déjà ? → ever', PP], ['Il y a deux ans, j’ai changé de travail.', 'Two years ago, I changed jobs.', 'ago → PS', PS]];
    d.flag(s, 'fr', 1.6, 1.55, 0.5); d.flag(s, 'gb', 6.5, 1.55, 0.5);
    R.forEach(([fr, en, why, c], i) => {
      const y = 2.0 + i * 0.68;
      d.rect(s, 0.6, y, 12.13, 0.6, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.08 });
      d.t(s, `« ${fr} »`, 0.8, y, 4.9, 0.6, { size: 15, italic: true, color: 'tx2', valign: 'middle' });
      d.t(s, '➜', 5.65, y, 0.4, 0.6, { size: 18, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `//**${en}**//`, 6.1, y, 4.45, 0.6, { size: 16, color: c, valign: 'middle' });
      chip(s, why, c, 10.6, y + 0.1, { size: 13, h: 0.4, w: 2.0, fill: false, roman: true });
    });
    band(s, 'Passé composé → **past simple** ou **present perfect** ? Cherchez la **date** et le **lien avec NOW**.', 6.2, 0.6, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 18 remember
  {
    const s = d.page({ g: 18, tag: 'REMEMBER', title: 'Remember: present perfect vs past simple' });
    const B = [['PRESENT PERFECT', PP, 'have / has + past participle', ['experience : ever · never', 'result now : just · already · yet', 'still true : for · since', 'open time : today · this week'], 'I’ve lost my keys! · I’ve lived here since 2021.'],
      ['PAST SIMPLE', PS, 'V-ed / irregular · did · didn’t', ['finished time : yesterday · last… · …ago', 'a date : in 2019 · on Monday', 'story details : when? where? how?', 'closed time : last night'], 'I lost my keys yesterday. · I went to Rome in 2019.']];
    B.forEach(([h, c, f, L, ex], i) => {
      const x = 0.6 + i * 6.18;
      d.rect(s, x, 1.6, 5.95, 4.5, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, 5.95, 0.6, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${h}**`, x, 1.6, 5.95, 0.6, { size: 18, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `**${f}**`, x + 0.2, 2.3, 5.55, 0.45, { size: 15, color: c, align: 'center', valign: 'middle' });
      d.t(s, L.map((t) => `• ${t}`), x + 0.3, 2.85, 5.35, 2.0, { size: 15, valign: 'middle', gap: 4 });
      d.t(s, `//${ex}//`, x + 0.2, 4.95, 5.55, 1.0, { size: 14.5, color: 'tx2', align: 'center', valign: 'middle' });
    });
    d.t(s, '**Exceptions** : //been / gone// · participes irréguliers (//seen, gone, written…//) · //’s// = //has// ou //is//', 0.6, 6.25, 12.13, 0.5, { size: 15, color: 'tx2', valign: 'middle' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 19 divider
  d.divider({ g: 19, tiles: [['The 3rd form', '★', 'FaCogs'], ['Where does it go?', '★★', 'FaArrowsAlt'], ['For or since?', '★', 'FaHourglassHalf'], ['Been or gone?', '★★', 'FaPlane'], ['Open or closed?', '★★', 'FaLock'],
    ['PS or PP?', '★★', 'FaBalanceScale'], ['The dialogue', '★★', 'FaComments'], ['Detective', '★★', 'FaSearch'], ['Find someone', '★★', 'FaUsers'], ['Job interview', '★★★', 'FaBriefcase']] });

  // ---------------------------------------------------------------- 20 ex1 the 3rd form
  const ex1 = [['go', 'gone'], ['see', 'seen'], ['write', 'written'], ['eat', 'eaten'], ['take', 'taken'], ['be', 'been'], ['do', 'done'], ['break', 'broken'], ['speak', 'spoken'], ['buy', 'bought'], ['work', 'worked'], ['study', 'studied']];
  d.ex({ g: 20, title: 'Exercise 1 — The 3rd form', stars: '★', instr: 'Write the past participle. Regular or irregular?' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const rh = ((mode === 'a' ? 6.45 : 6.75) - top) / 6;
    ex1.forEach(([b, r], i) => {
      const x = 0.6 + Math.floor(i / 6) * (cw + 0.2); const y = top + (i % 6) * rh;
      d.rect(s, x, y + 0.04, cw, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.t(s, `**${i + 1}**`, x + 0.1, y + 0.04, 0.4, rh - 0.1, { size: 14, color: 'accent5', valign: 'middle' });
      chip(s, b, C.NEG, x + 0.55, y + (rh - 0.46) / 2 - 0.02, { size: 16, h: 0.42, w: 1.4, fill: false });
      d.t(s, '→ have / has', x + 2.05, y + 0.04, 1.5, rh - 0.1, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//[[${r}]]//`, x + 3.6, y + 0.04, cw - 3.7, rh - 0.1, { size: 19, color: PP, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'Réguliers : //worked, studied// (= past simple). Les 10 autres sont irréguliers : beaucoup finissent en //-n//.', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 21 ex2 where does it go?
  const ex2 = [['just', 'I have finished the report.', 'I have [[just]] finished the report.'], ['ever', 'Have you been to India?', 'Have you [[ever]] been to India?'], ['yet', 'She hasn’t called me.', 'She hasn’t called me [[yet]].'], ['already', 'We have seen this film.', 'We have [[already]] seen this film.'], ['never', 'He has eaten snails.', 'He has [[never]] eaten snails.'], ['yet', 'Have they arrived?', 'Have they arrived [[yet]]?']];
  d.ex({ g: 21, title: 'Exercise 2 — Where does it go?', stars: '★★', instr: 'Rewrite the sentence with the word: between have and the participle, or at the end?' }, (s, mode, top) => {
    const rh = (6.5 - top) / 6;
    ex2.forEach(([w, a, b], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.04, 12.13, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      chip(s, w, C.MK, 0.75, y + (rh - 0.44) / 2, { size: 14, h: 0.38, w: 1.2, roman: true });
      d.t(s, `//${a}//`, 2.1, y + 0.04, 4.6, rh - 0.1, { size: 15, color: 'tx2', valign: 'middle' });
      d.t(s, '➜', 6.65, y + 0.04, 0.45, rh - 0.1, { size: 18, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, mode === 'q' ? '……………………………………………………' : `//${b}//`, 7.15, y + 0.04, 5.5, rh - 0.1, { size: 16, valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 22 ex3 for or since
  const ex3 = [['two hours', 0], ['Monday', 1], ['2020', 1], ['a week', 0], ['9 o’clock', 1], ['ages', 0], ['I was born', 1], ['ten years', 0], ['last summer', 1], ['a long time', 0]];
  d.ex({ g: 22, title: 'Exercise 3 — For or since?', stars: '★', instr: 'A length → for. A starting point → since. Sort the expressions.' }, (s, mode, top) => {
    let by = top;
    if (mode === 'q') {
      const w5 = (12.13 - 4 * 0.15) / 5;
      ex3.forEach(([w], i) => {
        const x = 0.6 + (i % 5) * (w5 + 0.15); const y = top + Math.floor(i / 5) * 0.62;
        d.rect(s, x, y, w5, 0.5, { fill: 'FFFDF7', line: C.MK, lw: 1.25, radius: 0.12, rotate: [-2, 1, 2, -1, 1][i % 5] });
        d.t(s, `//**${w}**//`, x, y, w5, 0.5, { size: 17, align: 'center', valign: 'middle', rotate: [-2, 1, 2, -1, 1][i % 5] });
      });
      by = top + 1.45;
    }
    const W2 = (12.13 - 0.2) / 2; const bh = 6.85 - by;
    [['FOR', PP, 'hourglass-not-done', 'a length'], ['SINCE', C.MK, 'triangular-flag', 'a starting point']].forEach(([h, c, ic, sub], j) => {
      const x = 0.6 + j * (W2 + 0.2);
      d.rect(s, x, by, W2, bh, { fill: TINT[c], line: c, lw: 2, dash: mode === 'q' ? 'dash' : undefined, radius: 0.12 });
      d.ill(s, ic, x + 0.2, by + 0.12, 0.6, 0.6);
      d.t(s, [`**${h}**`, `//${sub}//`], x + 0.95, by + 0.08, 4, 0.7, { size: 17, color: c, valign: 'middle', gap: 0 });
      if (mode === 'a') d.t(s, ex3.filter(([, k]) => k === j).map(([w]) => `//**${h.toLowerCase()} ${w}**//`), x + 0.2, by + 0.85, W2 - 0.4, bh - 1.0, { size: 21, color: c, align: 'center', valign: 'middle', gap: 6 });
    });
  });

  // ---------------------------------------------------------------- 23 ex4 been or gone
  const ex4 = [['bank', 'Where’s Tom? — He has [[gone]] to the bank.'], ['maple-leaf', 'I’ve [[been]] to Canada three times.'], ['guitar', 'Have you ever [[been]] to a rock concert?'], ['beach-with-umbrella', 'Sara isn’t here: she has [[gone]] on holiday.'], ['person-lifting-weights', 'Hello! Where have you [[been]]? — At the gym.'], ['office-building', 'They’ve [[gone]] home. The office is empty.']];
  d.ex({ g: 23, title: 'Exercise 4 — Been or gone?', stars: '★★', instr: 'Still there → gone. There and back → been.' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const rh = (6.75 - top) / 3;
    ex4.forEach(([ic, t], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.2); const y = top + Math.floor(i / 2) * rh;
      d.rect(s, x, y + 0.05, cw, rh - 0.13, { fill: 'FFFFFF', line: PP, lw: 1.25, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.15, y + 0.3, 0.85, 0.85);
      d.t(s, `//${t}//`, x + 1.15, y + 0.05, cw - 1.3, rh - 0.13, { size: 17, valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 24 ex5 open or closed time
  const ex5 = [['yesterday', 1], ['ever', 0], ['last year', 1], ['just', 0], ['in 2010', 1], ['since Monday', 0], ['two days ago', 1], ['this week', 0], ['never', 0], ['when I was 10', 1], ['already', 0], ['so far', 0]];
  d.ex({ g: 24, title: 'Exercise 5 — Open or closed time?', stars: '★★', instr: 'Which tense goes with each word? Present perfect (open) or past simple (closed)?' }, (s, mode, top) => {
    let by = top;
    if (mode === 'q') {
      const w6 = (12.13 - 5 * 0.15) / 6;
      ex5.forEach(([w], i) => {
        const x = 0.6 + (i % 6) * (w6 + 0.15); const y = top + Math.floor(i / 6) * 0.6;
        d.rect(s, x, y, w6, 0.5, { fill: 'FFFDF7', line: C.MK, lw: 1.25, radius: 0.12, rotate: [-2, 1, 2, -1, 1, -2][i % 6] });
        d.t(s, `//**${w}**//`, x, y, w6, 0.5, { size: 15, align: 'center', valign: 'middle', rotate: [-2, 1, 2, -1, 1, -2][i % 6] });
      });
      by = top + 1.4;
    }
    const W2 = (12.13 - 0.2) / 2; const bh = 6.85 - by;
    [['OPEN → present perfect', PP, 'unlocked'], ['CLOSED → past simple', PS, 'locked']].forEach(([h, c, ic], j) => {
      const x = 0.6 + j * (W2 + 0.2);
      d.rect(s, x, by, W2, bh, { fill: TINT[c], line: c, lw: 2, dash: mode === 'q' ? 'dash' : undefined, radius: 0.12 });
      d.ill(s, ic, x + 0.2, by + 0.12, 0.6, 0.6);
      d.t(s, `**${h}**`, x + 0.95, by + 0.12, W2 - 1.1, 0.6, { size: 17, color: c, valign: 'middle' });
      if (mode === 'a') d.t(s, ex5.filter(([, k]) => k === j).map(([w]) => `//**${w}**//`), x + 0.2, by + 0.85, W2 - 0.4, bh - 1.0, { size: 19, color: c, align: 'center', valign: 'middle', gap: 3 });
    });
  });

  // ---------------------------------------------------------------- 25 ex6 PS or PP
  const ex6 = [['I [[have lost]] (lose) my keys. I can’t open the door!', PP], ['I [[lost]] (lose) my keys yesterday, but I found them.', PS], ['She [[has worked]] (work) here since 2020.', PP], ['She [[worked]] (work) in Paris from 2015 to 2019.', PS], ['[[Have you ever seen]] (you / ever / see) a whale?', PP], ['[[Did you see]] (you / see) the match last night?', PS], ['We [[haven’t finished]] (not / finish) yet.', PP], ['They [[arrived]] (arrive) two hours ago.', PS]];
  d.ex({ g: 25, title: 'Exercise 6 — Past simple or present perfect?', stars: '★★', instr: 'Look for the clue (a date? a link with now?), then write the verb.' }, (s, mode, top) => {
    const rh = ((mode === 'a' ? 6.45 : 6.75) - top) / 8;
    ex6.forEach(([t, c], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.03, 12.13, rh - 0.07, { fill: mode === 'a' ? TINT[c] : (i % 2 ? 'FFFFFF' : 'bg2'), line: null, radius: 0.08 });
      d.t(s, `**${i + 1}**`, 0.7, y, 0.4, rh, { size: 14, color: 'accent5', valign: 'middle' });
      d.t(s, `//${t.replace(/\(([^)]+)\)/, '**($1)**')}//`, 1.15, y, mode === 'a' ? 9.4 : 11.4, rh, { size: 16.5, valign: 'middle', mode });
      if (mode === 'a') chip(s, c === PP ? 'present perfect' : 'past simple', c, 10.6, y + (rh - 0.38) / 2, { size: 12, h: 0.36, w: 2.05, roman: true });
    });
    if (mode === 'a') d.t(s, 'Indices : 1 résultat · 2 //yesterday// · 3 //since// · 4 //from… to…// (fini) · 5 //ever// · 6 //last night// · 7 //yet// · 8 //ago//.', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 26 ex7 the dialogue
  const ex7 = [['A', '[[Have]] you ever [[been]] (be) to New York?'], ['B', 'Yes, I [[have]]. I [[went]] (go) there in 2022.'], ['A', 'What [[did]] you [[do]] (do) there?'], ['B', 'I [[visited]] (visit) the museums and I [[saw]] (see) a show.'], ['A', 'Wow! I [[have]] never [[been]] (be) to the USA.'], ['B', 'You should go! [[Have]] you [[booked]] (book) your summer holiday yet?']];
  d.ex({ g: 26, title: 'Exercise 7 — The dialogue', stars: '★★', instr: 'Complete the conversation: news (present perfect), then details (past simple).' }, (s, mode, top) => {
    const rh = (6.8 - top) / 6;
    ex7.forEach(([who, t], i) => {
      const y = top + i * rh; const x = who === 'A' ? 0.95 : 2.2; const w = 10.5;
      d.rect(s, x, y + 0.05, w, rh - 0.12, { fill: who === 'A' ? TINT[PP] : 'F1ECF7', line: who === 'A' ? PP : 'purple', lw: 1.25, radius: 0.2 });
      d.t(s, `**${who}**`, x - 0.35, y + 0.05, 0.3, rh - 0.12, { size: 14, color: who === 'A' ? PP : 'purple', align: 'center', valign: 'middle' });
      d.t(s, `//${t}//`, x + 0.25, y + 0.05, w - 0.5, rh - 0.12, { size: 17, valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 27 ex8 detective
  d.ex({ g: 27, title: 'Exercise 8 — The detective', stars: '★★', instr: 'Sam introduces himself to the team. Find the 5 mistakes.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'From: Sam Taylor · To: the team · Subject: Hello!', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Hi everyone!//', '//My name is Sam. I {{work}}++ have worked++ here since 2021. Before that, I {{have worked}}++ worked++ for a bank in Leeds from 2015 to 2020. Last month I {{have been}}++ went++ to Dublin for a course. I {{have never visit}}++ have never visited++ our office in Madrid, but I {{already have met}}++ have already met++ the team online.//', '//See you soon!//', '//Sam//'];
    d.t(s, txt, 0.95, top + 0.65, 8.3, h - 0.8, { size: 16.5, gap: 6, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 mistakes?' : '5 mistakes ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Règles : //since// → PP · //from… to…// fini → PS · //last month// → PS · participe · place de //already//.', 9.9, top + 3.05, 2.83, 2.2, { size: 13, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 28 ex9 find someone who
  {
    const s = d.page({ g: 28, tag: 'YOUR TURN!', title: 'Exercise 9 — Find someone who…', stars: '★★' });
    const G = [['globe-showing-europe-africa', 'has been to London'], ['sushi', 'has eaten sushi'], ['star-struck', 'has met a famous person'], ['adhesive-bandage', 'has broken a bone'], ['trophy', 'has won a prize'], ['airplane', 'has never flown'], ['cooking', 'has cooked for 10 people'], ['mobile-phone', 'has lost a phone'], ['snowflake', 'has seen snow this year']];
    const cw = 2.55; const ch = 1.5;
    G.forEach(([ic, t], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.12); const y = 1.6 + Math.floor(i / 3) * (ch + 0.12);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: PP, lw: 1.5, radius: 0.1, shadow: true });
      d.ill(s, ic, x + 0.12, y + 0.12, 0.55, 0.55);
      d.t(s, `//**${t}**//`, x + 0.75, y + 0.05, cw - 0.85, 0.75, { size: 13, color: 'tx2', valign: 'middle' });
      d.t(s, 'name: ……………', x + 0.12, y + 0.95, cw - 0.24, 0.4, { size: 12, color: 'accent5', valign: 'middle' });
    });
    d.rect(s, 8.85, 1.6, 3.88, 4.75, { fill: TINT[C.QW], line: C.QW, lw: 1.5, radius: 0.12 });
    d.t(s, '**HOW TO PLAY**', 9.05, 1.68, 3.5, 0.42, { size: 15, color: C.QW, cs: 1 });
    d.t(s, ['① Ask: //Have you ever…?//', '② //Yes, I have!// → write the name.', '③ Ask one more question in the **past simple**: //When did you…? Where…?//', '④ 3 names in a line = **BINGO!**'], 9.05, 2.2, 3.5, 4.0, { size: 16, valign: 'top', gap: 12 });
  }

  // ---------------------------------------------------------------- 29 ex10 job interview
  d.roleplay({
    g: 29, title: 'Exercise 10 — The job interview',
    scenario: 'A company is looking for a team leader. A interviews B about experience. Use the present perfect and the past simple.',
    a: ['**A — the interviewer**', 'Ask: //How long…? Have you ever…?// Then: //When…? What did you…?//'],
    b: ['**B — the candidate**', 'Answer with the CV: what you have done (no date) and what you did (with a date).'],
    bank: '//How long have you worked as…? · Have you ever…? · What did you do in…? · When did you…? — I’ve worked… since / for… · I’ve never… · In 2018, I… · I’ve already… · That was a great experience.//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.6, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'B’S CV', x + 0.15, y, w - 0.3, 0.6, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const L = [['briefcase', 'since 2020', 'team leader, Brussels', PP], ['shopping-cart', '2015 – 2019', 'sales assistant, Leeds', PS], ['graduation-cap', 'diploma', 'Business, Leeds (2014)', PS], ['airplane', 'travel', 'USA (2018) · Japan (2023)', PS], ['trophy', 'projects', '3 conferences so far', PP], ['cross-mark', 'never', 'worked abroad', PP]];
      L.forEach(([ic, k, t, c], i) => {
        const yy = y + 0.75 + i * 0.73;
        d.ill(s, ic, x + 0.15, yy, 0.5, 0.5);
        d.t(s, `**${k}**`, x + 0.8, yy - 0.06, w - 0.95, 0.3, { size: 12, color: c, valign: 'middle' });
        d.t(s, `//${t}//`, x + 0.8, yy + 0.22, w - 0.95, 0.34, { size: 13.5, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 30 ticket
  d.ticket({
    g: 30,
    q: ['Past participle of //go//, //write//, //see// ?', '//for// or //since// ? … 2020 · … two weeks', 'Past simple or present perfect? //I (lose) my phone yesterday.//'],
    self: ['Build', 'Use', 'Choose'],
    teaser: { icon: 'FaBook', text: '**Homework** : write 4 things you have done in your life, then give one detail in the past simple for each.' },
  });
}

module.exports = { meta, build };
