// Séance 7 — Scene 3: verb forms and collocations (livret p. 13–15)
exports.meta = {
  n: 7, slug: 'Scene3_Verbs_and_collocations', title: 'The verbs you will need before ten o’clock',
  subtitle: 'Past simple, past participle — and what professionals say', pages: 'Livret p. 13–15', img: 's3_redflag', time: '09.05', sceneLabel: 'SCENE 3',
  coverNotes: "Consolidation : prétérit / participe passé (préparation du present perfect de la scène 4), questions sujet, collocations professionnelles.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'The **verb table** (dated fact / result) and the collocations a professional report uses.',
    language: 'Irregular verbs: past simple vs past participle · subject questions (//Who entered…?//) · verb + noun collocations (//raise the alarm, file a claim…//) · two idioms',
    skills: 'Accuracy · sounding like a professional, not like a translation',
    agenda: [['Warm-up: reporting verbs, durations', 10], ['Field note: two forms of each verb (p. 13)', 15], ['22 irregular verbs for a report', 10], ['Dry run A (p. 14)', 10], ['Who…? questions + Dry run B–C', 15], ['Word file: collocations (p. 15)', 15], ['Extra practice', 10], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: report it, time it', tag: 'WARM-UP', page: 'Séance 6',
    items: ['Samuel [[said]] that the alarm went off at 11.40.', 'He [[told]] us that nobody was on site.', 'Verdier [[claims]] the pipe is old — nothing proves it.', 'The log [[confirms]] that unit 3 shut down at 02:16.', 'From 23:41 to 06:47 = [[seven hours and six minutes]]'],
  });

  d.table({
    title: 'The verbs you will need before ten o’clock', tag: 'FIELD NOTE', page: 'Livret p. 13',
    intro: 'Fill in the two missing forms: the past simple, for something that happened at a given time, and the past participle, for the result you report later.',
    headers: ['BASE', 'PAST SIMPLE — a dated fact', 'PAST PARTICIPLE — the result', 'CONTEXT'],
    colW: [2.2, 3.0, 3.0, 3.93], align: ['left', 'center', 'center', 'left'],
    rows: [
      ['find', '[[found]]', '[[found]]', 'the water, at 6.50 a.m.'],
      ['go off', '[[went off]]', '[[gone off]]', 'the alarm, at 11.41 p.m.'],
      ['leave', '[[left]]', '[[left]]', 'the team, at 7.58 p.m.'],
      ['hear', '[[heard]]', '[[heard]]', 'nobody, that night'],
      ['break down', '[[broke down]]', '[[broken down]]', 'unit 3, at 2.16 a.m.'],
      ['send', '[[sent]]', '[[sent]]', 'the notification, at 11.42 p.m.'],
      ['take', '[[took]]', '[[taken]]', 'the photographs, this morning'],
      ['see', '[[saw]]', '[[seen]]', 'the damage, which you have not seen yet'],
    ],
    boldCol: 0,
  });

  d.compare({
    title: 'Two forms, two jobs', tag: 'GRAMMAR', page: 'Livret p. 13',
    left: { h: 'PAST SIMPLE — the dated fact', color: 'accent1', icon: 'FaClock', items: ['Something happened **at a given time**.', 'The alarm **went off** at 23.41.', 'The cleaners **found** the water at 6.50.', 'Signals: **at, yesterday, last night, in November**'] },
    right: { h: 'PAST PARTICIPLE — the result', color: 'accent3', icon: 'FaCheck', items: ['With **have**: Iris **has taken** the photographs. (Scene 4)', 'In the passive: the water **was found** at 6.50. (Scene 8)', 'Signals: **already, yet, just, so far** — no date'] },
    mid: '≠',
    foot: { kind: 'tip', text: 'Many verbs have **the same** two forms (found / found, left / left). Learn the ones that differ: **went / gone · took / taken · saw / seen · broke / broken · wrote / written**.' },
  });

  d.table({
    title: '22 irregular verbs for an incident report', tag: 'VOCABULARY', page: 'Hors livret',
    headers: ['BASE', 'PAST', 'PARTICIPLE', 'BASE', 'PAST', 'PARTICIPLE'],
    colW: [1.9, 2.0, 2.165, 1.9, 2.0, 2.165],
    colColor: ['tx2', 'tx1', 'accent3', 'tx2', 'tx1', 'accent3'],
    rows: [
      ['be', 'was / were', 'been', 'begin', 'began', 'begun'],
      ['break', 'broke', 'broken', 'bring', 'brought', 'brought'],
      ['come', 'came', 'come', 'find', 'found', 'found'],
      ['get', 'got', 'got', 'go', 'went', 'gone'],
      ['have', 'had', 'had', 'hear', 'heard', 'heard'],
      ['know', 'knew', 'known', 'leave', 'left', 'left'],
      ['make', 'made', 'made', 'ring', 'rang', 'rung'],
      ['run', 'ran', 'run', 'see', 'saw', 'seen'],
      ['send', 'sent', 'sent', 'shut', 'shut', 'shut'],
      ['speak', 'spoke', 'spoken', 'take', 'took', 'taken'],
      ['tell', 'told', 'told', 'write', 'wrote', 'written'],
    ],
    notes: "Liste de référence à apprendre pour la scène 4 (present perfect). Les participes sont en vert.",
  });

  d.exercise({
    title: 'Two minutes with Exhibit A in front of you', tag: 'DRY RUN', page: 'Livret p. 14',
    instr: 'A · Complete from the log. Use the past form.',
    items: ['The cabling team [[left]] //(leave)// zone 2F at 19.58.', 'The site manager [[entered]] //(enter)// at 20.04 and [[left]] //(leave)// fifteen minutes later.', 'The temperature alarm [[went off]] //(go off)// at 23.41.', 'A notification [[was]] //(be)// delivered one minute later.', 'Unit 3 [[shut down]] //(shut down)// at 02.16.'],
  });

  d.cards({
    title: 'Who entered? — questions without did', tag: 'GRAMMAR', page: 'Livret p. 14',
    perRow: 3,
    cards: [
      { h: 'SUBJECT QUESTION', color: 'accent4', f: 'Who / What + V2 …?', lines: ['The answer is the **subject**: //**Somebody** entered at 20.04.//', '→ **Who entered** zone 2F at 20.04?', '→ **What happened** at 02.16?', 'No //did//!'] },
      { h: 'OBJECT QUESTION', color: 'accent2', f: 'Who / What + did + S + base?', lines: ['The answer is the **object**: //The guard called **somebody**.//', '→ **Who did** the guard **call**?', '→ **What did** the log **show**?'] },
      { h: 'HOW LONG', color: 'accent1', f: 'How long did … + base?', lines: ['→ **How long did** the water **run**?', '→ **How long was** the water **running**?', '(present perfect version: Scene 6)'] },
    ],
    foot: { kind: 'trap', text: '//Qui est entré ?// → **Who entered?** (✗ //Who did enter?//) · //Que s’est-il passé ?// → **What happened?** (✗ //What did happen?//)' },
  });

  d.exercise({
    title: 'Ask the building manager — and fix the forms', tag: 'DRY RUN', page: 'Livret p. 14',
    number: false,
    items: [
      { h: 'B · Write the question you would ask the building manager.' },
      '(who / enter / 20.04) → [[Who entered zone 2F at 20.04?]]',
      '(how long / the water / run) → [[How long did the water run?]]',
      { h: 'C · One word is wrong in each sentence. Correct it.' },
      'The alarm {{was going off}} ++went off++ at 23.41 exactly.',
      'Nobody {{did heard}} ++heard++ the notification.',
      'The team {{was leave}} ++left++ at 19.58.',
    ],
    traps: ['B1: the answer is the subject → **no did**.', 'C2: //did// + past form = double past. Emphatic //did hear// exists, but not in a report.'],
  });

  d.table({
    title: 'What professionals do with an alarm', tag: 'WORD FILE', page: 'Livret p. 15',
    intro: 'These verb + noun pairs are not a matter of choice: you learn them as one block.',
    headers: ['PROFESSIONALS SAY', 'THEY NEVER SAY', 'FRANÇAIS'],
    colW: [4.0, 4.0, 4.13],
    colColor: ['tx1', 'accent6', 'accent5'],
    rows: [
      ['to **raise** the alarm', 'to lift the alarm', 'donner l’alerte'],
      ['to **assess** the damage', 'to count the damage', 'évaluer les dégâts'],
      ['to **file** a claim', 'to make a claim file', 'déclarer un sinistre'],
      ['to **take** steps', 'to do steps', 'prendre des mesures'],
      ['to **draw up** a report', 'to put up a report', 'rédiger / établir un rapport'],
      ['to **carry out** an inspection', 'to run an inspection', 'effectuer une inspection'],
      ['to **meet** a deadline', 'to respect a deadline', 'respecter un délai'],
      ['to **make good** the floor', 'to repair back the floor', 'remettre le sol en état'],
    ],
  });

  d.picture({
    title: 'Two idioms: a warning and a compliment', tag: 'WORD FILE', page: 'Livret p. 15', img: 's3_redflag',
    capLabel: 'IDIOMS', capColor: 'accent3', capIcon: 'FaFlag',
    caption: ['**to raise a red flag** = to point out a risk — //not a compliment: someone failed to warn//', '**to be on the ball** = alert and quick to react — //a compliment//', '+ **to drop the ball** = to make a mistake by not paying attention', '+ **to keep an eye on** = to monitor'],
  });

  d.exercise({
    title: 'Use the block, not the translation', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Complete with the right collocation (verb + noun), in the right form.',
    items: [
      'The cleaners [[raised the alarm]] at 6.50.',
      'An expert will [[assess the damage]] this afternoon.',
      'We should not [[file a claim]] before the cause is established.',
      'Legal has already [[taken steps]] to protect the file.',
      'You must [[draw up a report]] by 5 p.m.',
      'A final inspection [[was carried out]] at 20.04.',
      'If the estimate arrives late, we will not [[meet the deadline]].',
      'The property manager must [[make good the floor]] before the handover.',
    ],
    notes: "Item 6 : passif — annonce la phrase « sans nom » de la scène 9.",
  });

  d.closing({
    cliff: 'At nine o’clock Mark will ask you **what holds up**. Six statements were made in the room. Which ones can you prove today?',
    homework: ['Learn the **22 irregular verbs** (three forms).', 'Learn the **8 collocations** of the Word file (p. 15).', 'Prepare p. 16: decide **P, N or C** for each statement.'],
    exit: 'Ask the two questions you would ask the building manager — one **Who…?**, one **How long…?**',
  });
};
