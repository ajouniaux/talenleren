// Séance 5 — Scene 2, the timeline (livret p. 9–10)
exports.meta = {
  n: 5, slug: 'Scene2_The_timeline', title: 'Build the timeline Mark asked for',
  subtitle: 'It is 8.20. Forty minutes and an empty whiteboard.', pages: 'Livret p. 9–10', img: 's2_timeline', time: '08.20', sceneLabel: 'SCENE 2',
  coverNotes: "Production de la chronologie (p. 9) et Dry run (p. 10). Les heures de ce texte (8.15, 11.40) seront contredites par le journal d’alarme en scène 3 : ne pas les corriger maintenant.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: '**The timeline Mark asked for** — twelve verbs, no mistakes.',
    language: 'Past simple vs past continuous · **when / while** · spelling of -ing and -ed forms',
    skills: 'Writing a factual narrative · checking your work like a hurried reader',
    agenda: [['Warm-up', 10], ['When or while?', 10], ['Build the timeline (p. 9)', 20], ['Correction: the night on a line', 10], ['Dry run A–C (p. 10)', 15], ['Spelling rules', 5], ['Speaking: the alibi game', 15], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: bar or dot?', tag: 'WARM-UP', page: 'Séance 4',
    items: ['Samuel [[was checking]] (check) the rack when Mark [[called]] (call).', 'At 23.41 water [[was running]] (run) behind the ceiling.', 'Nobody [[knew]] (know) about the leak.', 'The cleaners [[opened]] (open) the door and [[saw]] (see) the water.'],
  });

  d.cards({
    title: 'When or while?', tag: 'GRAMMAR', page: 'Livret p. 9–10',
    perRow: 2,
    cards: [
      { h: 'WHILE — a period', color: 'accent2', f: 'while + past continuous', lines: ['= pendant que: the **background**, the bar', '**While** they **were packing** their tools, the site manager **carried out** his last inspection.'] },
      { h: 'WHEN — a point', color: 'accent1', f: 'when + past simple', lines: ['= quand, lorsque: the **event**, the dot', 'The water **was still running when** the cleaners **arrived**.'] },
    ],
    foot: { kind: 'tip', text: 'Comma rule: **When** the cleaners arrived**,** the water was still running. — No comma when the main clause comes first: The water was still running **when** the cleaners arrived.' },
  });

  d.exercise({
    title: 'Build the timeline Mark asked for', tag: 'YOUR MOVE', page: 'Livret p. 9',
    instr: 'It is 8.20. You have forty minutes and an empty whiteboard. Without this timeline, nobody can write a report.',
    number: false, gap: 8,
    items: [
      'At 7.55 p.m. the contractor’s team **(1)** [[was still working]] //(still work)// on the second floor.',
      'They **(2)** [[left]] //(leave)// at 8.15 and **(3)** [[locked]] //(lock)// the door behind them.',
      'While they **(4)** [[were packing]] //(pack)// their tools, the site manager **(5)** [[carried out]] //(carry out)// his last inspection.',
      'He **(6)** [[did not notice]] //(not notice)// anything. Later, water **(7)** [[began]] //(begin)// to run behind the ceiling.',
      'At 11.40 p.m., while everybody **(8)** [[was sleeping]] //(sleep)//, the temperature alarm **(9)** [[went off]] //(go off)//.',
      'Nobody **(10)** [[heard]] //(hear)// it. The cleaners **(11)** [[found]] //(find)// the water at 6.50, when they **(12)** [[opened]] //(open)// the room.',
    ],
    sideW: 3.5,
    expect: ['**Dot** (event) → past simple', '**Bar** (background) → was / were + -ing', '//while// → bar · //when// → dot'],
    traps: ['(5) **was carrying out** is also correct: two actions in progress at the same time.', '(6) Formal report: **did not** rather than //didn’t//.', '(7) began ≠ //begun//.'],
    notes: "Travail individuel 10 min, puis comparaison en binôme.",
    notesA: "Ces heures (8.15, 11.40) sont celles « de la salle ». L’Exhibit A (scène 3) donnera 19:58 et 23:41 : c’est tout l’enjeu de la scène suivante.",
  });

  d.timeline({
    title: 'The night on a line — your timeline', tag: 'YOUR MOVE', page: 'Livret p. 9', correction: true,
    axis: { from: 19.5, to: 31.4, ticks: [[20, '20.00'], [22, '22.00'], [24, '00.00'], [26, '02.00'], [28, '04.00'], [30, '06.00']] },
    bars: [
      { from: 19.5, to: 20.25, label: '(1) was still working · (4) were packing', color: 'accent2', row: 2 },
      { from: 21.2, to: 30.83, label: '(7) water began → was running behind the ceiling', color: 'accent2', row: 0, open: true },
      { from: 23.3, to: 30.75, label: '(8) everybody was sleeping', color: 'accent5', row: 1 },
    ],
    points: [
      { at: 20.25, label: '(2) **left** · (3) **locked**', row: 0, w: 2.2 },
      { at: 23.67, label: '(9) the alarm **went off** · (10) nobody **heard**', row: 1, w: 3.4 },
      { at: 30.83, label: '(11) **found** · (12) **opened**', row: 0, w: 2.4 },
    ],
    foot: { kind: 'keep', label: 'Attention', text: 'These are the times **people remembered** (8.15, 11.40). In Scene 3, the alarm log will tell a different story.' },
  });

  d.exercise({
    title: 'Before you hand the board to Mark', tag: 'DRY RUN', page: 'Livret p. 10',
    instr: 'A · One form is impossible in each line. Cross it out.',
    items: [
      'At 8.15 the team <<left>> / {{was leaving}} the site.',
      'While they {{packed}} / <<were packing>>, the manager <<checked>> / <<was checking>> the floor.',
      'The alarm <<went off>> / {{was going off}} at 11.41.',
      'Water {{ran}} / <<was running>> behind the ceiling all night.',
    ],
    expect: ['These are exactly the three errors a hurried reader spots first.', 'Two minutes.'],
    traps: ['Line 1: //was leaving// is possible in a story, but a report gives the **dated event**: //left//.', 'Line 2: //while// + **background** → //were packing//; //checked// and //was checking// are both correct.', 'Line 4: //ran all night// is not wrong English, but the report describes a **background**.'],
    notes: "Nuancer : la consigne parle de forme « impossible » ; en anglais courant, « was leaving » et « ran » ne sont pas agrammaticaux, mais inadaptés à un rapport factuel.",
  });

  d.exercise({
    title: 'Join with when or while', tag: 'DRY RUN', page: 'Livret p. 10',
    instr: 'B · Join these sentences with //when// or //while//.',
    items: [
      'The cleaners arrived. + The water was still running. → [[When the cleaners arrived, the water was still running.]]',
      'Iris was photographing the ceiling. + She noticed the crack. → [[While Iris was photographing the ceiling, she noticed the crack.]]',
    ],
    traps: ['Also correct: //The water was still running **when** the cleaners arrived.//', '//Iris noticed the crack **while** she was photographing the ceiling.//'],
  });

  d.exercise({
    title: 'Spelling: -ing form and past form', tag: 'DRY RUN', page: 'Livret p. 10',
    instr: 'C · Write the -ing form and the past form.',
    cols: 2,
    items: ['run → [[running / ran]]', 'plan → [[planning / planned]]', 'lie → [[lying / lied (mentir) — lay (être allongé)]]', 'travel → [[travelling / travelled (UK)]]', 'notice → [[noticing / noticed]]', 'carry → [[carrying / carried]]'],
    traps: ['US spelling: //traveling, traveled//.', '//lie// (mentir) → lied · //lie// (être allongé) → lay, lain.'],
  });

  d.cards({
    title: 'Four spelling rules for -ing', tag: 'GRAMMAR', page: 'Livret p. 10',
    perRow: 4,
    cards: [
      { h: 'DROP THE -E', color: 'accent2', f: 'notice → noticing', lines: ['leave → leaving', '✗ //noticeing//'] },
      { h: 'DOUBLE', color: 'accent1', f: 'run → running', lines: ['short stressed vowel + one consonant', 'plan → planning · stop → stopping'] },
      { h: 'IE → Y', color: 'accent4', f: 'lie → lying', lines: ['die → dying · tie → tying'] },
      { h: 'Y STAYS', color: 'accent3', f: 'carry → carrying', lines: ['but **carried** in the past', 'study → studying / studied'] },
    ],
    foot: { kind: 'tip', text: 'UK doubles a final **-l** after a short vowel: travel → trave**ll**ing, cancel → cance**ll**ed. US does not: traveling, canceled. Choose one and stay consistent.' },
  });

  d.steps({
    title: 'The alibi game', tag: 'SPEAKING', page: 'Hors livret',
    intro: 'Two “suspects” must prove where they were yesterday between **7 and 11 p.m.** The class looks for contradictions.',
    steps: [
      { h: 'Prepare', color: 'accent4', lines: ['Pairs, 3 minutes.', 'Agree on your story: where, what, who, **when**.'] },
      { h: 'Questioned alone', color: 'accent1', lines: ['Suspect A goes out. The class questions B (2 min), then A.', '//What were you doing at 9 p.m.? What happened when…?//'] },
      { h: 'Compare', color: 'accent6', lines: ['The class lists the **contradictions**.', 'Two contradictions = the alibi is broken.'] },
      { h: 'Language', color: 'accent2', lines: ['**I was watching…** (bar)', '**Then we left at…** (dot)', '**when / while**'] },
    ],
    notes: "Activité orale ajoutée : réemploi du past continuous / prétérit en interaction, et préfiguration de la scène 3 (comparer deux récits).",
  });

  d.closing({
    cliff: 'Samuel stands up behind the rack. **“There is something else,”** he says. **“The log does not say what you think it says.”**',
    homework: ['Copy the corrected timeline (p. 9).', 'Learn the **four spelling rules** for -ing.', 'Write 5 sentences: what **were** you **doing** yesterday at 8 p.m., 10 p.m. and 7 a.m.?'],
    exit: 'One sentence with **while**, one with **when**, about the night at Atlas House.',
  });
};
