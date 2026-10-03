// Séance 14 — Scene 7, 13.00 (livret p. 32–34)
exports.meta = {
  n: 14, slug: 'Scene7_Four_experts', title: 'Four experts, one whiteboard',
  subtitle: 'Nobody knows. Yet something must be written.', pages: 'Livret p. 32–34', img: 's7_why', time: '13.00', sceneLabel: 'SCENE 7',
  coverNotes: "Scène 7 : le tableau des hypothèses (team call en 3 rounds). Grammaire : modaux de certitude (must / may / might / can’t) et should.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'A **hypothesis board**: two hypotheses, one ruled out, one recommendation (draft).',
    language: 'Modals of certainty: **must, may, might, can’t** · **should** for advice · questions that test a hypothesis',
    skills: 'Presenting a hypothesis in 90 seconds · questioning without interrupting · reaching a group decision',
    agenda: [['Warm-up: for / since', 10], ['Scene 7 (p. 32)', 5], ['Field note: how sure are you? (p. 34)', 15], ['Three rules, two traps', 10], ['Your cards (p. 33)', 5], ['Team call: rounds 1–2', 25], ['Round 3: the board', 10], ['Wrap-up', 10]],
  });

  d.exercise({
    title: 'Warm-up: since when?', tag: 'WARM-UP', page: 'Séance 13',
    items: ['The joint has been faulty [[since]] June.', 'We have worked here [[for]] eight months.', '(how long / the floor / be / closed) → [[How long has the floor been closed?]]', 'Honest answer with //so far// → [[So far, we have not found the cause.]]'],
  });

  d.scene({
    title: 'Four experts, one whiteboard', tag: 'SCENE', page: 'Livret p. 32', img: 's7_why', time: '13.00', sceneLabel: 'SCENE 7',
    alt: 'Four experts argue in front of a whiteboard with the word WHY',
    text: ['After lunch, Mark rubs out the timeline and writes a single word at the top of the board: **WHY**.', 'Then he says the sentence that makes everyone uncomfortable: //“Nobody leaves this room until we have three hypotheses and one recommendation. Not four hypotheses. Not zero.”//'],
    ask: 'Why **exactly** three hypotheses — not four, not zero?',
    notes: "Bulles : « We cannot rule out human error. » / « It might be the same section as last November. » / « Then we should inspect the whole run. » Les trois hypothèses = deux retenues + une écartée.",
  });

  d.scale({
    title: 'How to be certain that you are not certain', tag: 'FIELD NOTE', page: 'Livret p. 34',
    marks: [
      { word: 'can’t', v: 5, pct: '≈ 5 %', ex: 'It **can’t be** the cabling team — they left at 19:58.', fr: 'c’est impossible' },
      { word: 'might', v: 40, pct: '≈ 40 %', ex: 'It **might be** the same section as last November.', fr: 'il se pourrait que' },
      { word: 'may', v: 52, pct: '≈ 50 %', ex: 'The damage **may be** worse than it looks.', fr: 'il est possible que' },
      { word: 'must', v: 95, pct: '≈ 95 %', ex: 'The pipe **must be** the cause — nothing else was wet.', fr: 'c’est sûrement' },
      { word: 'should', v: null, pct: 'advice', ex: 'We **should** inspect the whole run before the handover.', fr: 'il faudrait' },
    ],
    notes: "Le livret : « Mark’s board only accepts sentences that state their own degree of certainty. In English, that degree is set by a single word, placed before the verb. »",
  });

  d.cards({
    title: 'Three rules, two traps', tag: 'FIELD NOTE', page: 'Livret p. 34',
    perRow: 3,
    cards: [
      { h: 'NO -S', color: 'accent2', lines: ['She **might** be right.', '✗ //She mights//'] },
      { h: 'NO TO', color: 'accent2', lines: ['We **should** wait.', '✗ //should to wait//', '(but **ought to**, **have to**)'] },
      { h: 'NO DO', color: 'accent2', lines: ['**Should** we call her?', '✗ //Do we should…?//', 'Neg: **can’t, shouldn’t, mustn’t**'] },
      { h: 'TRAP 1 — MUSTN’T', color: 'accent6', lines: ['**must be** = sûrement (deduction)', '**mustn’t** = interdiction!', 'The opposite of //must be// is **can’t be**.'] },
      { h: 'TRAP 2 — THE PAST', color: 'accent6', lines: ['modal + **have** + participle', 'It **might have been** the same joint.', 'It **can’t have been** the team.'] },
      { h: 'THE RISK', color: 'accent1', lines: ['One **categorical** sentence about the cause = grounds to refuse.', 'Write **might**: same idea, no exposure.'] },
    ],
  });

  d.experts({
    title: 'Your card', tag: 'YOUR EXPERT', page: 'Livret p. 33',
    cards: [
      { who: 'ACC', q: '**Your card.** Last November a comparable claim was settled at 80 %. A provision of €12,000 has been opened this morning. No budget line exists for an excess above €5,000. **Your question to the group:** if the cause is never established, who carries the difference — and in which financial year does it land?' },
      { who: 'IT', q: '**Your card.** The last backup ran at midnight, sixteen minutes after the temperature alarm. Unit 3 shut down at 02:16. Total downtime: nine hours. **Your question to the group:** the notification was //delivered// at 23:42 to a mobile number. Does “delivered” mean somebody was warned?' },
      { who: 'LAW', q: '**Your card.** The lease runs for nine years. The maintenance clause places routine inspection with the property manager and structural works with the landlord. A badge entry at 20:04 is logged. **Your question to the group:** at what point does a repeated fault stop being an accident and start being negligence — and who would have to prove it?' },
      { who: 'RE', q: '**Your card.** The humidity alarm followed the temperature alarm by three minutes. The same section of pipework failed last November. The handover to the tenant is on 1 March. **Your question to the group:** if the second floor is unusable for three weeks, what does the tenant become entitled to, and from what date?' },
    ],
    notes: "Chaque élève ne lit que la carte de sa firme (information asymétrique) : c’est ce qui rend le team call nécessaire.",
  });

  d.steps({
    title: 'The hypothesis board', tag: 'TEAM CALL', page: 'Livret p. 32',
    intro: 'Groups of four — one representative of each firm. Twenty-five minutes.',
    steps: [
      { h: 'Round 1 — alone', n: '5′', color: 'accent4', lines: ['Write **one hypothesis** that only somebody from your field would think of.', 'Add **one fact you can already prove** to support it.'] },
      { h: 'Round 2 — together', n: '12′', color: 'accent1', lines: ['90 seconds each, **no interruptions**.', 'Then each listener asks **one** question: //What would prove that?// or //What would rule that out?//'] },
      { h: 'Round 3 — decide', n: '8′', color: 'accent3', lines: ['In writing and out loud: **2 hypotheses, 1 ruled out, 1 recommendation**.', '**Nobody may name a person.**'] },
    ],
    foot: { kind: 'tip', text: 'Mark’s board only accepts sentences that state **their own degree of certainty**.' },
  });

  d.cards({
    title: 'Present, test, decide', tag: 'SPEAKING', page: 'Livret p. 32',
    perRow: 3,
    cards: [
      { h: 'PRESENT', color: 'accent4', lines: ['My hypothesis is that the water **might** have come from …', 'What supports it is … (a fact from the file).', 'I’m about **40 %** sure.'] },
      { h: 'TEST', color: 'accent1', lines: ['**What would prove that?**', '**What would rule that out?**', 'Where does that figure come from?', 'How sure are you?'] },
      { h: 'DECIDE', color: 'accent3', lines: ['I think we can **rule out** …, because …', 'We **should** keep … and …', 'So we agree that … ?'] },
    ],
  });

  d.table({
    title: 'Your group’s board', tag: 'TEAM CALL', page: 'Livret p. 32',
    headers: ['', 'OUR HYPOTHESIS', 'WHAT SUPPORTS IT'],
    colW: [2.4, 5.0, 4.73], boldCol: 0, stretch: true,
    rows: [['Hypothesis 1', '', ''], ['Hypothesis 2', '', ''], ['Ruled out', '', ''], ['We recommend', '', '']],
    notes: "Grille vierge à projeter pendant le round 3 (ou à remplir en direct avec un groupe).",
  });

  d.table({
    title: 'One possible board', tag: 'TEAM CALL', page: 'Livret p. 32–34',
    headers: ['', 'OUR HYPOTHESIS', 'WHAT SUPPORTS IT'],
    colW: [2.4, 5.2, 4.53], boldCol: 0,
    rows: [
      ['Hypothesis 1', 'The water **might** come from the same section of pipework as last November.', 'Same section failed last November; humidity alarm 3 min after the temperature alarm.'],
      ['Hypothesis 2', 'The cabling works **may** have disturbed the pipework.', 'Works in zone 2F until 19:58.'],
      ['Ruled out', 'The leak **can’t** have started while the team was in the room.', 'Room dry at 19:58; first alarm at 23:41.'],
      ['We recommend', 'We **should** inspect the whole run, basement included, before the handover.', 'Handover on 1 March; nobody has been to the basement.'],
    ],
    notes: "Un exemple parmi d’autres : à projeter après les productions des groupes. Vérifier qu’aucune phrase ne nomme une personne.",
  });

  d.exercise({
    title: 'Rate it, then write it', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Rewrite each categorical sentence with the modal that matches the certainty in brackets.',
    items: [
      'The joint caused the leak. (95 %) → [[The joint must have caused the leak.]]',
      'The drainage is blocked. (50 %) → [[The drainage may be blocked.]]',
      'The works damaged the pipe. (40 %) → [[The works might have damaged the pipe.]]',
      'The alarm system failed. (5 %) → [[The alarm system can’t have failed: it sent a notification at 23:42.]]',
      'Inspect the basement. (advice) → [[We should inspect the basement today.]]',
    ],
  });

  d.closing({
    cliff: 'Mark will photograph your board. What is on it will go, **word for word**, into tonight’s report.',
    homework: ['Learn the certainty scale: **can’t · might · may · must** (+ should).', 'Learn the three rules: no -s, no to, no do.', 'Bring your group’s draft board next session.'],
    exit: 'One sentence about the leak with **might**, one with **can’t**.',
  });
};
