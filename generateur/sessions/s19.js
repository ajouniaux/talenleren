// Séance 19 — 18.00, the committee + debrief (livret p. 49)
exports.meta = {
  n: 19, slug: 'Scene9_The_committee', title: '18.00 — The committee',
  subtitle: 'Two minutes each. Without reading.', pages: 'Livret p. 49', img: 's9_committee', time: '18.00', sceneLabel: 'TEAM CALL',
  coverNotes: "Dernière séance : présentation orale du rapport en comité (groupes de 4), phrase commune, bilan grammatical du dossier et ouverture sur la suite (« Two quotations »).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'A **two-minute oral report**, without reading — and **one sentence** agreed by the four firms.',
    language: 'Signposting a short presentation · answering a judgement question without answering it · agreeing on a wording',
    skills: 'Speaking from notes · active listening · group decision',
    agenda: [['Warm-up: say it aloud', 5], ['Presenting toolkit', 10], ['The judgement question', 10], ['Prepare your notes', 10], ['The committee: groups of four', 25], ['One sentence for the tenant', 10], ['Debrief: your toolkit', 10], ['Next file + self-assessment', 10]],
  });

  d.exercise({
    title: 'Warm-up: say it without hesitating', tag: 'WARM-UP', page: 'Hors livret',
    cols: 2,
    items: ['23:41 → [[eleven forty-one p.m.]]', '19.58 → [[seven fifty-eight p.m.]]', '14 June → [[the fourteenth of June]]', '13 November 2026 → [[the thirteenth of November, twenty twenty-six]]', '€12,000 → [[twelve thousand euros]]', '80 % → [[eighty per cent]]'],
  });

  d.scene({
    title: '18.00 — the committee', tag: 'TEAM CALL', page: 'Livret p. 49', img: 's9_committee',
    alt: 'The committee around a round table at sunset',
    text: ['**Groups of four. Twenty minutes.** Ferrand Logistics has convened a short committee.', 'Each of you presents your report **without reading it**, in two minutes.', 'Each listener asks **two** questions: one checking a **figure or a time**, one asking for a **judgement**.', 'Then the group agrees, out loud, on **one sentence**: what the four firms will say if the tenant asks tomorrow morning.'],
    ask: 'What is the most dangerous question a listener can ask you?',
  });

  d.steps({
    title: 'Two minutes, five signposts', tag: 'SPEAKING', page: 'Livret p. 49',
    steps: [
      { h: 'Open', color: 'tx2', lines: ['//I’d like to report on last night’s incident at Atlas House.//'] },
      { h: 'The times', color: 'accent2', lines: ['//First, the times. According to the alarm log, …//'] },
      { h: 'Where we stand', color: 'accent3', lines: ['//So far, we have … However, we haven’t … yet.//'] },
      { h: 'History & cause', color: 'accent4', lines: ['//This section has been under observation since June. It may …//'] },
      { h: 'Next steps', color: 'accent1', lines: ['//We should … We will send … by 13 November.//'] },
    ],
    foot: { kind: 'tip', text: 'Look at your listeners, not at your notes. **Five keywords per section** on your card — no full sentences.' },
  });

  d.compare({
    title: 'The judgement question', tag: 'SPEAKING', page: 'Livret p. 49',
    intro: '//Do you think the contractor is responsible?// — and see how the speaker avoids answering that directly.',
    left: { h: 'THE QUESTION', color: 'accent6', icon: 'FaQuestion', items: ['//Do you think the contractor is responsible?//', '//So whose fault is it?//', '//Was it the site manager?//', 'A yes or a no = **a name** in the minutes.'] },
    right: { h: 'YOUR ANSWER', color: 'accent3', icon: 'FaCheck', items: ['//At this stage, it would be premature to say.//', '//What we can establish is that …//', '//That is not something we can prove today.//', '//The cause is still being investigated; we will know more after the inspection.//'] },
    mid: '→',
  });

  d.cards({
    title: 'Your two questions as a listener', tag: 'SPEAKING', page: 'Livret p. 49',
    perRow: 2,
    cards: [
      { h: 'CHECK A FIGURE OR A TIME', color: 'accent2', lines: ['Could you confirm the exact time of … ?', 'Where does that figure come from?', 'Is that from the log, or from memory?'] },
      { h: 'ASK FOR A JUDGEMENT', color: 'accent6', lines: ['In your opinion, what caused it?', 'Do you think somebody should have known?', 'Would you file the claim today?'] },
    ],
  });

  d.checklist({
    title: 'What I listen for', tag: 'TEAM CALL', page: 'Livret p. 49',
    intro: 'For each speaker in your group, tick **YES** or **NO**.',
    items: ['Two verifiable times, given **without hesitation**.', 'At least one **already** or **not yet**.', 'The cause is given with **may** or **might** — never with **is**.', 'A clear recommendation with **should**.', 'The speaker **did not read**.'],
  });

  d.exercise({
    title: 'One sentence for the tenant', tag: 'TEAM CALL', page: 'Livret p. 49',
    instr: 'The group agrees, out loud, on one sentence: what the four firms will say if the tenant asks tomorrow morning.',
    items: [{ q: 'Your group’s sentence.', a: '//An escape of water occurred overnight in the technical room; the times are documented, the cause is still being investigated, and the four firms will report in full by 13 November.//' }],
    number: false,
    expect: ['**One** sentence, agreed by the four firms', 'No name, no cause stated as a fact', 'A **date**'],
  });

  d.table({
    title: 'Your toolkit, scene by scene', tag: 'GRAMMAR', page: 'Tout le livret',
    headers: ['TOOL', 'WHAT IT DOES IN THE REPORT', 'EXAMPLE'],
    colW: [3.5, 3.4, 5.23], boldCol: 0,
    rows: [
      ['Past simple', 'a dated fact', 'The alarm **went off** at 23.41.'],
      ['Past continuous + while / when', 'the background', '**While** the building **was** empty, …'],
      ['Present perfect + already / yet', 'where we stand now', 'We **have not inspected** the basement **yet**.'],
      ['Present perfect + since / for', 'the history', 'It **has been** under observation **since** June.'],
      ['Modals: may / might / can’t / should', 'the cause, and the advice', 'It **may have come** from joint 4.'],
      ['Passive · impersonal subject', 'facts without names', 'A final inspection **was carried out** at 20.04.'],
      ['False friends', 'saying what you mean', '**check** (✗ control) · **attend** (✗ assist)'],
    ],
  });

  d.checklist({
    title: 'I can…', tag: 'SELF-CHECK', page: 'Tout le livret',
    intro: 'Tick what you can do now. Circle what you still need to work on.',
    boxColor: 'accent3', cols: 2,
    items: ['…take notes from a fast voicemail.', '…tell a night in the past, with **while** and **when**.', '…compare a witness with a log.', '…say **where we stand** with already / yet / just.', '…clean false friends before forwarding an e-mail.', '…say **since when** with for / since.', '…state a hypothesis with the right **modal**.', '…write 200 words that **name nobody**.'],
  });

  d.keyIdea({
    tag: 'NEXT FILE', title: 'At 18.52, a new e-mail', page: 'Livret p. 49',
    text: '“The leak is fixed. Now we have to decide whether we **repair** the rest of the run or **replace** it.”',
    sub: ['At 18.40 you send the report. At 18.52 an e-mail arrives from Mark. Subject: **“Two quotations”**.', '//There is a difference of seventeen thousand euros between the two. I need your recommendation by Monday.//'],
    icon: 'FaEnvelope',
  });

  d.closing({
    title: 'Case file closed — for tonight',
    cliff: '18.52 — Subject: “Two quotations”. **Repair or replace?** Seventeen thousand euros, and a recommendation by Monday.',
    homework: ['Re-read your report against the assessor’s **nine checks**.', 'Keep your **Word files**: they will come back in the next case.', 'Think: **repair or replace?** — what would your firm need to know?'],
    exit: 'One thing you will **never** write again in a report — and why.',
  });
};
