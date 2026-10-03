// Séance 8 — Scene 3: sort the witnesses + your expert (livret p. 16–17)
exports.meta = {
  n: 8, slug: 'Scene3_Sort_the_witnesses', title: 'Sort the witnesses',
  subtitle: 'At nine o’clock Mark will ask you what holds up.', pages: 'Livret p. 16–17', img: 's3_log', time: '09.05', sceneLabel: 'SCENE 3',
  coverNotes: "Tri des déclarations (P / N / C) et premières questions d’experts : chaque firme explique, en anglais simple, ce que la preuve établit ou non.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'A **sorted list** of what can be proved (P / N / C) — and one **expert answer** per firm.',
    language: 'The language of evidence: //prove, confirm, show, suggest, does not establish// · //delivered / received / acknowledged// · explaining your field in plain English',
    skills: 'Critical thinking · explaining an expert point to non-experts',
    agenda: [['Warm-up: collocations', 10], ['The language of evidence', 15], ['Sort the witnesses (p. 16)', 15], ['Correction', 10], ['Your expert: four questions (p. 16–17)', 20], ['Report back to the group', 15], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: the professional block', tag: 'WARM-UP', page: 'Séance 7',
    cols: 2,
    items: ['to [[raise]] the alarm', 'to [[file]] a claim', 'to [[assess]] the damage', 'to [[carry out]] an inspection', 'to [[meet]] a deadline', 'to [[make good]] the floor', 'to [[draw up]] a report', 'to [[take]] steps'],
  });

  d.steps({
    title: 'From proof to doubt: the evidence ladder', tag: 'GRAMMAR', page: 'Hors livret',
    steps: [
      { h: 'proves', n: '100 %', color: 'accent3', lines: ['The badge log **proves** that badge 0102 was used at 20:04.'] },
      { h: 'confirms', n: '✓', color: 'accent3', lines: ['The log **confirms** that unit 3 shut down at 02:16.'] },
      { h: 'shows', n: '≈', color: 'accent2', lines: ['The photos **show** a soaked floor at 8.20.'] },
      { h: 'suggests', n: '?', color: 'accent1', lines: ['The humidity alarm **suggests** water near the sensors.'] },
      { h: 'does not establish', n: '✗', color: 'accent6', lines: ['The log **does not establish** who carried the badge.'] },
    ],
    foot: { kind: 'trap', text: '//la preuve// → **(the) proof** (singulier) ou **evidence** (indénombrable) — ✗ //an evidence//, ✗ //proofs//. //prouver que// → **prove that**.' },
  });

  d.table({
    title: 'Sort the witnesses before Mark asks you to', tag: 'YOUR MOVE', page: 'Livret p. 16',
    intro: 'Six statements were made in this room. Mark them **P** (provable today), **N** (not yet provable) or **C** (contradicted by another speaker).',
    headers: ['STATEMENT', 'P / N / C', 'WHY?'],
    colW: [4.3, 1.5, 6.33], align: ['left', 'center', 'left'],
    rows: [
      ['The water was still running at 6.50 a.m.', '[[P]]', '[[The cleaners saw it; their entry is logged (06:47).]]'],
      ['The pipe was leaking all night.', '[[N]]', '[[Iris: “I think” — a supposition; nothing yet on the pipe.]]'],
      ['The contractor’s team left at eight.', '[[C]]', '[[The log shows the exit at 19:58.]]'],
      ['Two IT units have stopped working.', '[[P (partly)]]', '[[Samuel checked; the log shows only unit 3 (02:16).]]'],
      ['It is the same pipe as last November.', '[[N]]', '[[Samuel: “It might be” — needs maintenance records.]]'],
      ['Nobody was on site at 11.40 p.m.', '[[N]]', '[[No badge after 20:19 — but a log only records badges.]]'],
    ],
    notesA: "Accepter d’autres justifications si elles s’appuient sur le dossier. Ligne 3 : « until eight » est approximativement juste (19:58) — l’important est d’écrire l’heure du journal. Ligne 6 : transition vers l’idée-clé suivante.",
  });

  d.keyIdea({
    tag: 'KEY IDEA', title: 'What a log cannot say', page: 'Livret p. 16',
    text: 'The absence of a record is **not** proof of absence.',
    sub: ['The log shows no badge between 20:19 and 06:47. It does **not** show that nobody was in the building.', 'In a report: //No access was recorded between 20:19 and 06:47.// ✓ — //Nobody was on site.// ✗'],
    icon: 'FaSearch',
  });

  d.steps({
    title: 'Sent, delivered, read, acknowledged', tag: 'YOUR EXPERT', page: 'Livret p. 16 · IT',
    steps: [
      { h: 'sent', color: 'accent5', lines: ['The system **sent** the alert (23:42).', 'Proves: the alarm worked.'] },
      { h: 'delivered / received', color: 'accent2', lines: ['The network **delivered** it; the phone **received** it.', 'Proves: somebody **could** have known.'] },
      { h: 'read', color: 'accent1', lines: ['Somebody **opened** it.', 'Not in Exhibit A.'] },
      { h: 'acknowledged', color: 'accent3', lines: ['Somebody **confirmed** it (pressed OK, replied).', 'Proves: somebody **knew**.'] },
    ],
    foot: { kind: 'keep', label: 'À retenir', text: 'Only **acknowledged** proves that somebody **knew**. //Delivered// proves that somebody **could** have known.' },
    notes: "Support pour l’expert IT. Selon les systèmes, « received » désigne parfois la réception par l’appareil (≈ delivered) : laisser l’étudiant IT nuancer.",
  });

  d.experts({
    title: 'Your eye on Exhibit A', tag: 'YOUR EXPERT', page: 'Livret p. 16–17',
    cards: [
      { who: 'IT', q: 'The notification at 23:42 was **delivered**. What is the difference between //delivered//, //received// and //acknowledged// — and which would the insurer accept as proof that somebody knew?', a: '//Delivered / received// = the message reached the phone. //Acknowledged// = a person confirmed it. Only **acknowledged** proves that somebody knew.' },
      { who: 'LAW', q: 'Line 20:04 shows a badge entry after the works ended. What does an access log establish, and what does it **not** establish? Would you put badge number 0102 in a written report today?', a: 'It establishes that **a badge** was used at a given time — not **who** carried it, nor **what** they did. **No**: a badge number identifies a person and reads as an accusation.' },
      { who: 'ACC', q: 'Unit 3 shut down at 02:16. Before anything is repaired, what figure do you need and **from whom**? Name two documents you would ask for this morning.', a: 'The **repair or replacement cost** of unit 3 (+ cost of downtime), from the **IT provider**. Documents: a **written estimate** and the **insurance policy** (cover, excess).' },
      { who: 'RE', q: 'A humidity alarm followed the temperature alarm three minutes later. What does that sequence usually mean about **where** the water came from — above the ceiling or below the floor?', a: 'A fast sequence **suggests** water coming **from above** (ceiling pipework) onto the equipment. A **hypothesis** — to be checked on site, and in the basement.' },
    ],
    notes: "Chaque expert prépare sa réponse (5 min) puis l’explique au groupe en 1 minute. Les réponses proposées sont des pistes : valoriser toute réponse argumentée issue du domaine de l’étudiant.",
  });

  d.cards({
    title: 'Explain your field in plain English', tag: 'SPEAKING', page: 'Livret p. 16–17',
    perRow: 3,
    cards: [
      { h: 'DEFINE', color: 'accent2', lines: ['In my field, **//delivered//** means …', 'Put simply, …', 'It’s a bit like …'] },
      { h: 'LIMIT', color: 'accent1', lines: ['What it **shows** is … What it **doesn’t show** is …', 'It **proves** that … but not **who** / **why** …'] },
      { h: 'ADVISE', color: 'accent3', lines: ['I **would / wouldn’t** … **because** …', 'Before …, we **need** … **from** …', 'If I were you, I’d ask for …'] },
    ],
  });

  d.exercise({
    title: 'Proof or not?', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Say exactly what each piece of evidence proves — and what it does not.',
    items: [
      'A badge entry at 20:04 → [[proves a badge was used — not who used it]]',
      'A notification marked “delivered” at 23:42 → [[the phone received it — not that anyone read it]]',
      'Photographs timestamped 8.20 → [[the state of the room at 8.20]]',
      'Samuel’s memory of “11.40” → [[not a proof — check it against the log]]',
      'An automatic shutdown at 02:16 → [[unit 3 stopped — consistent with water damage]]',
      'The cleaners’ oral account → [[a testimony — ask for a written, signed statement]]',
    ],
  });

  d.closing({
    cliff: 'Mark looks at the fourth line for a long moment. Then he says: **“Do not write that badge number anywhere. Not yet.”**',
    homework: ['Learn the **evidence ladder**: prove · confirm · show · suggest · does not establish.', 'Write your expert answer in three sentences (your firm).', 'Revise the **past participles** (p. 13).'],
    exit: 'Complete: //The badge log proves that … but it does not prove …//',
  });
};
