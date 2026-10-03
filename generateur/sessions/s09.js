// Séance 9 — Scene 4, 09.40 (livret p. 18–19)
exports.meta = {
  n: 9, slug: 'Scene4_The_board', title: 'The board',
  subtitle: 'Two columns, one marker and nine people waiting for your update', pages: 'Livret p. 18–19', img: 's4_board', time: '09.40', sceneLabel: 'SCENE 4',
  coverNotes: "Scène 4 : le tableau DONE / NOT YET. Objectif grammatical : present perfect (résultat présent) vs prétérit (fait daté) ; already / yet / just.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'The **DONE / NOT YET** board — every line in the form that says where we stand **now**.',
    language: 'Present perfect (//have / has + past participle//) · **already, yet, just** · present perfect vs past simple',
    skills: 'Reporting progress clearly · choosing between //yesterday// and //now//',
    agenda: [['Warm-up: past participles', 10], ['Scene 4 (p. 18)', 5], ['Present perfect: form and use', 15], ['Fill the board (p. 18)', 15], ['Already · yet · just', 10], ['Dry run A–C (p. 19)', 15], ['Yesterday or now? Extra practice', 15], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: past participles', tag: 'WARM-UP', page: 'Séance 7',
    cols: 2,
    items: ['take → [[taken]]', 'write → [[written]]', 'send → [[sent]]', 'see → [[seen]]', 'break → [[broken]]', 'go → [[gone]]', 'tell → [[told]]', 'be → [[been]]'],
  });

  d.scene({
    title: 'The board', tag: 'SCENE', page: 'Livret p. 18', img: 's4_board', time: '09.40', sceneLabel: 'SCENE 4',
    alt: 'Mark hands the marker to the narrator in front of a whiteboard with two columns, DONE and NOT YET',
    text: ['Mark draws a vertical line down the middle of the whiteboard. On the left he writes **DONE**. On the right he writes **NOT YET**.', 'Then he hands you the marker. //“Ten o’clock update,”// he says. //“Everybody is waiting for it.”//'],
    ask: 'The board will be photographed and sent to nine people. Must each line say **what happened yesterday**, or **where we stand now**?',
  });

  d.cards({
    title: 'The present perfect', tag: 'GRAMMAR', page: 'Livret p. 18–19',
    perRow: 3,
    cards: [
      { h: 'FORM', color: 'tx2', f: 'have / has + past participle', lines: ['Iris **has taken** the photographs.', 'We **haven’t received** the estimate.', '**Has** anyone **told** the insurer?'] },
      { h: 'USE', color: 'accent3', f: 'a past action → a result now', lines: ['No date: what matters is **now**.', 'The photos exist → //has taken//.', 'The estimate is still missing → //haven’t received//.'] },
      { h: 'NEVER WITH', color: 'accent6', f: 'a finished time', lines: ['✗ //has taken **at 8.20**//', '✗ //have received **yesterday**//', 'A date → **past simple**.'] },
    ],
    foot: { kind: 'trap', text: 'Le passé composé ≠ present perfect : //J’ai pris les photos à 8 h 20// → I **took** the photos at 8.20 (date). //J’ai pris les photos// (résultat, sans date) → I **have taken** the photos.' },
  });

  d.timeline({
    title: 'Looking at the night from 09.40', tag: 'GRAMMAR', page: 'Livret p. 18–19',
    intro: 'The board looks at everything **from now** (09.40).',
    axis: { from: 19, to: 34.3, ticks: [[20, '20.00'], [24, '00.00'], [28, '04.00'], [32, '08.00']] },
    now: 33.67,
    bars: [
      { from: 32.33, to: 33.67, label: 'photos taken → result now', color: 'accent3', row: 0 },
      { from: 30.8, to: 33.67, label: 'insurer still not told', color: 'accent6', row: 1, open: true },
    ],
    points: [
      { at: 23.68, label: 'the alarm **went off** (23.41)', row: 0, w: 2.8 },
      { at: 30.83, label: 'the cleaners **found** the water (6.50)', row: 1, w: 3.2 },
    ],
    legend: [['dot', 'accent1', '**dot with a time** → past simple'], ['bar', 'accent3', '**up to NOW, no time** → present perfect']],
    notes: "Verbaliser : « Iris has taken the photographs » (résultat visible à 09.40) ; « Nobody has told the insurer yet » (situation encore ouverte) ; « The alarm went off at 23.41 » (point daté).",
  });

  d.exercise({
    title: 'Fill the board', tag: 'YOUR MOVE', page: 'Livret p. 18',
    instr: 'You are holding the marker. Complete each line with the form that says **where we stand now** — not what happened yesterday.',
    items: [
      'Iris [[has taken]] //(take)// the photographs.',
      'Samuel [[has looked]] //(look)// at the logs, but he [[hasn’t checked]] //(not check)// the basement.',
      'Nobody [[has told]] //(tell)// the insurer.',
      'The contractor [[hasn’t sent]] //(not send)// a written statement.',
      'Two units [[have broken]] //(break)// down.',
      'We [[haven’t received]] //(not receive)// the estimate.',
      'I [[have written]] //(write)// to the site manager twice.',
      'The humidity alarm [[has gone]] //(go)// off three times this month.',
    ],
    sideW: 3.5,
    expect: ['**has** after he / she / it / a singular noun', 'Negative: **hasn’t / haven’t** + participle', 'Irregular: //taken, broken, written, gone//'],
    traps: ['//Nobody has told// — //nobody// is already negative.', '//this month// = period not finished → present perfect.'],
  });

  d.picture({
    title: 'Already, yet, just', tag: 'FIELD NOTE', page: 'Livret p. 19', img: 's4_already_yet_just',
    capLabel: 'THREE WORDS, THREE RULES', capColor: 'tx2', capIcon: 'FaChalkboardTeacher',
    caption: ['**ALREADY** — between //have// and the participle: //Iris has **already** taken the photographs.//', '**YET** — at the end; negatives and questions: //Nobody has checked the basement **yet**. Has anyone told the insurer **yet**?//', '**JUST** — between //have// and the participle (= very recently): //I’ve **just** come back.//', '✗ //has taken already// — French trap'],
  });

  d.exercise({
    title: 'The board will not accept a wrong form', tag: 'DRY RUN', page: 'Livret p. 19',
    number: false,
    items: [
      { h: 'A · Build the form: have or has + participle.' },
      '1. The site manager [[hasn’t answered]] //(not answer)// my two messages.',
      '2. We [[have been]] //(be)// here since seven o’clock.',
      '3. The insurer [[has sent]] //(send)// a first acknowledgement.',
      { h: 'B · Put the adverb where it belongs.' },
      '1. Iris has photographed the ceiling. //(already)// → [[Iris has already photographed the ceiling.]]',
      '2. Has the contractor answered? //(yet)// → [[Has the contractor answered yet?]]',
      '3. Samuel has come back from the basement. //(just)// → [[Samuel has just come back from the basement.]]',
      '4. We have not received the estimate. //(yet)// → [[We have not received the estimate yet.]]',
    ],
  });

  d.exercise({
    title: 'Yesterday or now?', tag: 'DRY RUN', page: 'Livret p. 19',
    instr: 'C · Choose. Three minutes: a false form will remain on nine phones.',
    items: [
      'The alarm <<went off>> / {{has gone off}} at 11.41 p.m.',
      'Nobody {{told}} / <<has told>> the insurer — she is still waiting.',
      'The team <<left>> / {{has left}} the site at 19.58.',
      'I {{saw}} / <<have seen>> the damage, so I can describe it.',
    ],
    traps: ['A **time** (at 11.41, at 19.58) → past simple.', 'A **result now** (she is still waiting; I can describe it) → present perfect.'],
  });

  d.compare({
    title: 'Signal words: finished time or up to now?', tag: 'GRAMMAR', page: 'Livret p. 18–19',
    left: { h: 'PAST SIMPLE — finished time', color: 'accent1', icon: 'FaClock', items: ['at 11.41 p.m. · at 19.58', 'yesterday · last night · last November', 'two hours **ago**', '//When did…?//'] },
    right: { h: 'PRESENT PERFECT — up to now', color: 'accent3', icon: 'FaHourglassHalf', items: ['already · yet · just', 'ever · never · so far', 'this morning (still morning) · this month', 'twice · three times', '//Have you… yet?//'] },
    mid: '≠',
  });

  d.exercise({
    title: 'Past simple or present perfect?', tag: '+ EXTRA', page: 'Hors livret',
    items: [
      'Samuel [[restored]] //(restore)// the backup at 9 a.m.',
      'We [[haven’t received]] //(not receive)// the estimate yet.',
      'The insurer [[has called]] //(call)// twice this morning.',
      'I [[wrote]] //(write)// to the site manager yesterday.',
      '[[Have]] you ever [[seen]] //(see)// a leak like this?',
      'The cleaners [[found]] //(find)// the water at 6.50.',
    ],
    traps: ['3: //this morning// — it is 09.40, the morning is not over → present perfect.', '5: //ever// → present perfect.'],
  });

  d.closing({
    cliff: '“Ten o’clock update. Everybody is waiting for it.” **Five lines**, continuous text, no bullet points. Nine people will read it on their phones.',
    homework: ['Learn the **present perfect** (form + already / yet / just).', 'Write 3 **DONE** and 3 **NOT YET** lines about your own week.', 'Read p. 21 (Word file: progress expressions).'],
    exit: 'One line for **DONE**, one for **NOT YET** — about the case.',
  });
};
