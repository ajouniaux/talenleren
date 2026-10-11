// English UE3 · Lesson 1 — In five sentences (+1) : trois productions jalonnées B1 en phase avec le premier cours
// (le message de Mark Shaw, Atlas House à 8.15, la chronologie pour 9 h), dans le style « Use this picture as inspiration »,
// avec un jalon supplémentaire plus difficile (★ Challenge, Sentence 6) pour qui s'en sent capable.
const { TASKS } = require('../en_lesson1_data');
const { vijfKit, LV } = require('../vijf_kit');

const meta = {
  n: 'EN1', slug: 'UE3_Lesson1_In_five_sentences', title: 'In five sentences', short: 'In five sentences',
  template: '../anglais_productions/lesson1_in_five_sentences.md', file: 'UE3_Lesson1_In_five_sentences.pptx', outDir: '../../anglais_productions/powerpoints',
  docTitle: 'In five sentences (+1) — UE3 · Lesson 1 · Guided production (B1)',
  subject: 'English UE3 — guided writing and speaking after lesson 1',
  foot: 'English · UE3 · Lesson 1 · In five sentences',
  company: 'IRAM — English',
  L: { coverFoot: 'English · UE3 · Lesson 1 · Guided production · A. Jouniaux · IRAM' },
  T: {
    title: 'Use this picture as inspiration', zin: 'Sentence', chipW: 1.42, ref: 'livret',
    mode: { W: 'WRITTEN', O: 'SPOKEN' },
    partner: { W: 'Read your text to your partner.', O: 'Tell your partner what you would say.' }, partner2: 'What do they think?',
    example: (m) => `Here is an example of what you could have thought and ${m === 'W' ? 'written' : 'said'}…`,
    bigNote: 'GRANDE IMAGE — laissez les étudiant·es observer et décrire avant de produire : Where are we? Who can you see? What has happened? What time is it?',
    exNote: (n) => `EXEMPLE — chaque étiquette verte renvoie à une consigne (Sentence 1 à Sentence ${n}) ; le cadre doré est le jalon ★ Challenge (Sentence ${n + 1}). Faites retrouver, pour chaque bribe, la consigne à laquelle elle répond.`,
    challenge: '★ CHALLENGE', optional: 'optional · harder',
  },
};

const LBL = 'B1 · Lesson 1';

function build(d) {
  const k = vijfKit(d, meta);
  const { txt, box, banner, photo, page, flow } = k;
  const NAVY = LV.EN.text;

  // ------------------------------------------------------------ 1 couverture
  {
    const s = k.cover(1, 'In five sentences');
    banner(s, 'EN', LBL);
    txt(s, 'Guided writing & speaking', 1.72, 2.8, 5.6, 0.5, { size: 22, color: k.GREY });
    txt(s, 'UE3 · Lesson 1 · The message, the room, the timeline', 1.72, 3.3, 5.6, 0.45, { size: 15, italic: true, color: k.GREY });
    TASKS.forEach((c, i) => {
      const y = 3.95 + i * 0.5;
      box(s, 1.72, y, 0.4, 0.4, { fill: NAVY, r: 0.2 });
      txt(s, `${i + 1}`, 1.72, y, 0.4, 0.4, { size: 15, bold: true, color: 'FFFFFF', align: 'center' });
      txt(s, [{ text: c.t, options: { bold: true, color: NAVY } }, { text: `   ${c.mode === 'W' ? 'written' : 'spoken'}`, options: { italic: true, color: k.GREY } }], 2.25, y, 4.9, 0.4, { size: 15 });
    });
    box(s, 1.72, 5.6, 5.3, 0.62, { fill: k.GOLD_BOX, line: k.GOLD, lw: 1.25, r: 0.14 });
    txt(s, [{ text: '★ Sentence 6 · ', options: { bold: true, color: k.GOLD } }, { text: 'the challenge: harder, optional', options: { color: k.INK } }], 1.92, 5.6, 5.0, 0.62, { size: 15 });
    photo(s, TASKS[0].img, 7.75, 0.85, 3.5, { small: true, rot: -4 });
    photo(s, TASKS[1].img, 9.55, 2.45, 3.4, { small: true, rot: 5 });
    photo(s, TASKS[2].img, 7.6, 4.3, 3.3, { small: true, rot: -2 });
  }

  // ------------------------------------------------------------ 2 mode d'emploi
  d.section('How it works');
  {
    const s = page(2, 'How does it work?');
    banner(s, 'ALL', 'How it works');
    const S = [['FaImage', 'Look', 'What can you see? Where? Who? What time is it?'], ['FaListOl', 'Read', 'Five instructions: Sentence 1 to Sentence 5, one sentence each.'], ['FaPenNib', 'Write or speak', 'Five sentences in ten minutes, with today’s grammar and words.'], ['FaUserFriends', 'Share', 'Read your text to your partner, then compare it with the example.']];
    const cw = (11.2 - 3 * 0.25) / 4;
    S.forEach(([ic, h, t], i) => {
      const x = 1.7 + i * (cw + 0.25);
      box(s, x, 1.45, cw, 2.2, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.1, shadow: true, so: 0.12 });
      s.addShape(d.S.OVAL, { x: x + 0.25, y: 1.68, w: 0.72, h: 0.72, fill: { color: 'EAF5EC' }, line: { color: k.ZIN, width: 1.5 } });
      d.icon(s, ic, k.ZIN, x + 0.43, 1.86, 0.36);
      txt(s, `${i + 1}`, x + cw - 0.65, 1.68, 0.4, 0.72, { size: 30, bold: true, color: 'D5DCE6', align: 'right' });
      txt(s, h, x + 0.25, 2.5, cw - 0.5, 0.42, { size: 18, bold: true });
      txt(s, t, x + 0.25, 2.9, cw - 0.5, 0.7, { size: 13.5, color: k.GREY, valign: 'top' });
    });
    txt(s, 'In the example, each green label sits on the words that answer the instruction:', 1.7, 3.9, 11.2, 0.4, { size: 14, italic: true, color: k.GREY });
    const c = TASKS[0];
    flow(s, [{ text: c.ex.slice(0, 2).join(' '), crit: c.crit }], 1.9, 4.38, 12.8, 20, true);
    box(s, 2.6, 6.0, 9.4, 0.8, { fill: k.GOLD_BOX, line: k.GOLD, lw: 1.25, r: 0.14 });
    txt(s, [{ text: '★ Sentence 6 · Challenge   ', options: { bold: true, color: k.GOLD } }, { text: 'harder and optional: try it if you feel ready!', options: { bold: true, color: k.INK } }], 2.6, 6.0, 9.4, 0.8, { size: 16, align: 'center' });
  }

  // ------------------------------------------------------------ 3 ce que le cours 1 a couvert
  {
    const s = page(3, 'Lesson 1 in three tasks');
    banner(s, 'ALL', 'Lesson 1');
    const R = [
      ['Prepositions of time', 'at · by · until · between · in · for', ['●', '●', '●']],
      ['The past simple', 'regular & irregular · didn’t · Did …?', ['●', '●', '●']],
      ['Phrasal verbs', 'turn up · call out · break down · shut down · look into · put off', ['', '●', '●']],
      ['The world of the incident', 'the place · the people · the evidence · the paperwork', ['●', '', '●']],
      ['Fact ≠ guess', 'a verifiable time and its source', ['★', '', '●']],
      ['Past simple ≠ present perfect', 'a finished time · the result now · never / ever', ['', '★', '★']],
    ];
    const cx = [7.75, 9.5, 11.25]; const cwid = 1.6;
    TASKS.forEach((c, j) => {
      photo(s, c.img, cx[j] + 0.1, 1.3, cwid - 0.2, { small: true, b: 0.03, blur: 4, off: 2 });
      txt(s, `${j + 1} · ${c.t}`, cx[j] - 0.05, 2.25, cwid + 0.1, 0.36, { size: 11, bold: true, color: NAVY, align: 'center', valign: 'top' });
    });
    R.forEach(([h, sub, cells], i) => {
      const y = 2.72 + i * 0.66;
      box(s, 1.7, y, 11.2, 0.58, { fill: i % 2 ? 'FFFFFF' : 'F4F6FA', r: 0.08 });
      txt(s, h, 1.9, y, 2.75, 0.58, { size: 15, bold: true, color: NAVY });
      txt(s, sub, 4.65, y, 3.05, 0.58, { size: 11.5, italic: true, color: k.GREY });
      cells.forEach((m, j) => {
        if (!m) return;
        const gold = m === '★'; const dx = cx[j] + cwid / 2 - 0.19;
        s.addShape(d.S.OVAL, { x: dx, y: y + 0.1, w: 0.38, h: 0.38, fill: { color: gold ? k.GOLD : k.ZIN }, line: { color: 'FFFFFF', width: 0 } });
        txt(s, gold ? '★' : '✓', dx, y + 0.1, 0.38, 0.38, { size: 13, bold: true, color: 'FFFFFF', align: 'center' });
      });
    });
    s.addShape(d.S.OVAL, { x: 1.9, y: 6.78, w: 0.26, h: 0.26, fill: { color: k.ZIN }, line: { color: 'FFFFFF', width: 0 } });
    txt(s, 'in Sentences 1 to 5', 2.25, 6.72, 2.6, 0.38, { size: 12, color: k.GREY });
    s.addShape(d.S.OVAL, { x: 4.75, y: 6.78, w: 0.26, h: 0.26, fill: { color: k.GOLD }, line: { color: 'FFFFFF', width: 0 } });
    txt(s, 'in the ★ Challenge (Sentence 6)', 5.1, 6.72, 3.6, 0.38, { size: 12, color: k.GREY });
  }

  // ------------------------------------------------------------ 4 la grille
  {
    const s = page(4, 'Marking a production: 10 points + 2');
    banner(s, 'ALL', 'Assessment');
    const R = [['Instructions', '5', 'one point per sentence: the item is there, and it is correct', k.ZIN], ['Accuracy', '2', 'past simple forms (found · didn’t + base) and prepositions (at · by · until)', '4A7BD0'],
      ['Vocabulary', '1', 'phrasal verbs and incident words, used precisely', 'D9822B'], ['Coherence', '1', 'the sentences tell one story, in the right order', '8E6CC8'], ['Twist', '1', 'sentence 5 surprises the reader', 'C2185B']];
    R.forEach(([h, pts, t, c], i) => {
      const y = 1.45 + i * 0.8;
      box(s, 1.7, y, 8.7, 0.68, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.12, shadow: true, so: 0.1 });
      box(s, 1.85, y + 0.12, 0.44, 0.44, { fill: c, r: 0.22 });
      txt(s, h, 2.45, y, 2.2, 0.68, { size: 17, bold: true, color: c });
      txt(s, t, 4.6, y, 4.75, 0.68, { size: 13, color: k.GREY });
      txt(s, `${pts} pt${pts === '1' ? '' : 's'}`, 9.35, y, 0.9, 0.68, { size: 17, bold: true, color: c, align: 'right' });
    });
    const yb = 1.45 + 5 * 0.8 + 0.1;
    box(s, 1.7, yb, 8.7, 0.72, { fill: k.GOLD_BOX, line: k.GOLD, lw: 1.25, r: 0.12 });
    txt(s, '★ Challenge', 1.9, yb, 2.6, 0.72, { size: 17, bold: true, color: k.GOLD });
    txt(s, 'Sentence 6 correct = bonus points, and a B1+ mention', 4.6, yb, 4.75, 0.72, { size: 13, color: k.INK });
    txt(s, '+ 2', 9.35, yb, 0.9, 0.72, { size: 17, bold: true, color: k.GOLD, align: 'right' });
    let q = 0;
    R.forEach(([, pts, , c]) => { for (let j = 0; j < Number(pts); j += 1) { box(s, 10.85, 1.95 + (9 - q) * 0.4, 0.8, 0.34, { fill: c, r: 0.08 }); q += 1; } });
    [0, 1].forEach((j) => box(s, 10.85, 1.15 + j * 0.4, 0.8, 0.34, { fill: k.GOLD_BOX, line: k.GOLD, lw: 1.25, dash: 'dash', r: 0.08 }));
    txt(s, '/ 10', 11.8, 5.45, 1.1, 0.6, { size: 28, bold: true, color: k.INK });
    txt(s, '+ 2', 11.8, 1.15, 1.1, 0.74, { size: 20, bold: true, color: k.GOLD });
    txt(s, 'Spoken tasks: pronunciation and fluency replace spelling.', 1.7, 6.55, 8.7, 0.4, { size: 13, italic: true, color: k.GREY });
  }

  // ------------------------------------------------------------ les trois productions
  d.section('Three tasks');
  TASKS.forEach((c, i) => k.context(5 + i, c, { lv: 'EN', label: LBL, num: i + 1, start: 22 }));

  // ------------------------------------------------------------ la liste de vérification
  d.section('Before you hand in');
  {
    const s = page(8, 'Before you hand in: check!');
    banner(s, 'EN', LBL);
    const L = [
      ['Every time has its preposition:', ' **at** 6.50 · **by** nine · **until** eight · **in** twenty minutes.'],
      ['A dated fact → past simple:', ' **found**, **went off**, **called** (✗ have found at 6.50).'],
      ['Negative:', ' **didn’t** + base form (✗ didn’t found).'],
      ['Question:', ' **Did** + subject + base form? (✗ Did you found…?)'],
      ['Phrasal verbs keep their particle:', ' went **off**, turned **up**, broke **down**.'],
      ['A fact, not a guess:', ' is your time **verifiable**? (✗ around eleven)'],
    ];
    L.forEach(([h, t], i) => {
      const y = 1.5 + i * 0.68;
      box(s, 1.9, y + 0.1, 0.36, 0.36, { fill: 'FFFFFF', line: k.ZIN, lw: 2, r: 0.06 });
      d.t(s, `**${h}**${t}`, 2.5, y, 10.3, 0.56, { size: 17, color: k.INK, valign: 'middle' });
    });
    const y = 1.5 + 6 * 0.68 + 0.1;
    box(s, 1.75, y - 0.04, 11.1, 0.72, { fill: k.GOLD_BOX, line: k.GOLD, lw: 1.25, r: 0.12 });
    box(s, 1.9, y + 0.14, 0.36, 0.36, { fill: 'FFFFFF', line: k.GOLD, lw: 2, r: 0.06 });
    d.t(s, '**★ Challenge:** finished time → **past simple** · result now, never / ever → **present perfect**.', 2.5, y - 0.04, 10.3, 0.72, { size: 17, color: k.INK, valign: 'middle' });
  }
}

module.exports = { meta, build };
