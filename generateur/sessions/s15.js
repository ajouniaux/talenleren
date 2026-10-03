// Séance 15 — Scene 7: saying it carefully (livret p. 35–37)
exports.meta = {
  n: 15, slug: 'Scene7_Saying_it_carefully', title: 'Saying what you think without committing yourself',
  subtitle: 'A poorly formed modal, and the sentence loses all authority.', pages: 'Livret p. 35–37', img: 's7_why', time: '13.00', sceneLabel: 'SCENE 7',
  coverNotes: "Consolidation des modaux (Dry run p. 35), expressions de prudence (Word file p. 36) et rédaction des quatre phrases du tableau (p. 37), qui serviront au rapport.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Your group’s **four sentences** for the board — and for tonight’s report.',
    language: 'Modal forms (no -s, no to, no do) · **should / had better / must** · hedging idioms (//rule out, long shot, educated guess…//)',
    skills: 'Diplomatic language · giving and receiving peer feedback',
    agenda: [['Warm-up: the certainty scale', 5], ['Dry run A (p. 35)', 10], ['Dry run B–C (p. 35)', 15], ['Should, had better, must', 10], ['Word file: idioms (p. 36)', 15], ['Hedging toolkit', 5], ['Your four sentences (p. 37)', 20], ['Gallery walk + wrap-up', 10]],
  });

  d.exercise({
    title: 'Warm-up: which word?', tag: 'WARM-UP', page: 'Séance 14',
    cols: 2,
    items: ['≈ 95 % → [[must]]', '≈ 50 % → [[may]]', '≈ 40 % → [[might]]', '≈ 5 % → [[can’t]]', 'advice → [[should]]', 'interdiction → [[mustn’t]]'],
  });

  d.exercise({
    title: 'Two minutes on the four words that will be on the board', tag: 'DRY RUN', page: 'Livret p. 35',
    instr: 'A · Correct the form: five of these six are wrong.',
    items: [
      'She {{mights}} ++might++ be right.',
      'We {{should to wait}} ++should wait++.',
      'It may be the same joint. ++✓ correct++',
      'They {{must to notify}} ++must notify++ the landlord.',
      '{{Do we should}} ++Should we++ call her?',
      'We {{had better to decide}} ++had better decide++ today.',
    ],
    traps: ['No **-s**, no **to**, no **do** after a modal.', '//had better// + base form (no //to//).'],
  });

  d.exercise({
    title: 'Match the modal to the percentage', tag: 'DRY RUN', page: 'Livret p. 35',
    instr: 'B · Rewrite with the modal that matches the percentage.',
    items: [
      'Perhaps the alarm was faulty. **(40 %)** → [[The alarm might have been faulty.]]',
      'It is impossible: they left at 19.58. **(0 %)** → [[It can’t have been the cabling team: they left at 19.58.]]',
      'I am almost sure the joint caused it. **(95 %)** → [[The joint must have caused it.]]',
    ],
    traps: ['A **past** situation → modal + **have + participle**.', 'Present forms (//might be, can’t be, must be//) are fine when the sentence is about **now**.'],
  });

  d.exercise({
    title: 'Turn the fear into a recommendation', tag: 'DRY RUN', page: 'Livret p. 35',
    instr: 'C · One sentence with //should//, one with //had better//.',
    items: ['Nobody has inspected the basement. → [[We should inspect the basement today.]]', 'The landlord has not been told. → [[We had better notify the landlord in writing today.]]'],
  });

  d.cards({
    title: 'Should, had better, must', tag: 'GRAMMAR', page: 'Livret p. 34–35',
    perRow: 3,
    cards: [
      { h: 'SHOULD', color: 'accent3', f: 'should + base', lines: ['= advice, recommendation', 'We **should** inspect the whole run.', 'Neg: **shouldn’t**'] },
      { h: 'HAD BETTER', color: 'accent1', f: '’d better + base', lines: ['= strong advice, a warning (or else…)', 'We**’d better** tell the landlord today.', 'Neg: **had better not** (✗ //hadn’t better//)'] },
      { h: 'MUST / HAVE TO', color: 'accent6', f: 'must · have to + base', lines: ['= obligation', 'We **must** notify the insurer.', '**have to** = an external rule'] },
    ],
    foot: { kind: 'trap', text: '//Nous ferions mieux de// → **We had better** (✗ //We would better//) · malgré //had//, le sens est **présent / futur**.' },
  });

  d.table({
    title: 'Saying what you think without committing yourself', tag: 'WORD FILE', page: 'Livret p. 36',
    intro: 'A professional who is guessing says so. These expressions protect you while allowing you to speak.',
    headers: ['IDIOM', 'FRENCH', 'EXAMPLE'],
    colW: [3.4, 3.0, 5.73], boldCol: 0,
    rows: [
      ['to **jump to conclusions**', 'conclure trop vite', 'Let us not **jump to conclusions** before the survey.'],
      ['to give somebody **the benefit of the doubt**', 'accorder le bénéfice du doute', 'I would **give the team the benefit of the doubt**.'],
      ['to be **on the safe side**', 'par précaution', '**To be on the safe side**, close the room today.'],
      ['a **long shot**', 'une hypothèse peu probable', 'It is **a long shot**, but the drainage may be blocked.'],
      ['to **rule out**', 'écarter une hypothèse', 'We cannot **rule out** human error.'],
      ['to **point the finger at**', 'accuser', 'Nobody wants to **point the finger at** the contractor.'],
      ['an **educated guess**', 'une hypothèse fondée', 'At this stage it is **an educated guess**, no more.'],
    ],
  });

  d.exercise({
    title: 'Idioms in a new context', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Complete with an idiom from the Word file.',
    items: [
      'Samuel thinks it is the same joint, but we have no record yet — let’s not [[jump to conclusions]].',
      'The badge entry looks bad, but I would [[give the site staff the benefit of the doubt]]: it lasted fifteen minutes.',
      'The floor may not be safe. To be [[on the safe side]], nobody goes in without boots.',
      'A blocked drain? It’s [[a long shot]], but Iris will check.',
      'The room was dry at 19.58, so we can [[rule out]] a leak during the works.',
      'Legal says: never [[point the finger at]] anyone in writing.',
      'It is not a certainty — it is [[an educated guess]] based on the alarm sequence.',
    ],
  });

  d.cards({
    title: 'Hedging toolkit', tag: 'WRITING', page: 'Hors livret',
    perRow: 3,
    cards: [
      { h: 'SOFTEN', color: 'accent2', lines: ['**It seems that** …', '**It appears that** …', '**This would suggest that** …'] },
      { h: 'LIMIT', color: 'accent1', lines: ['**At this stage**, …', '**So far**, there is **no evidence that** …', '**It is too early to say whether** …'] },
      { h: 'PROTECT', color: 'accent3', lines: ['**We cannot rule out** …', '**Pending** the basement inspection, …', '**Subject to** confirmation, …'] },
    ],
  });

  d.exercise({
    title: 'Put your four sentences on the board', tag: 'YOUR MOVE', page: 'Livret p. 37',
    instr: 'That is what Mark will photograph — and what will go, word for word, into tonight’s report. Rewrite your group’s four sentences with the right modal.',
    items: [
      { q: '**Ruled out** — start here: it is the only one where you have proof (//can’t//).', a: '//The leak can’t have started during the cabling works: the room was dry when the team left at 19.58.//' },
      { q: '**Hypothesis 1** (//may / might//)', a: '//The water might have come from the same section of pipework as last November.//' },
      { q: '**Hypothesis 2** (//may / might//)', a: '//The leak may have started above the ceiling, since the humidity alarm followed the temperature alarm by three minutes.//' },
      { q: '**Recommendation** (//should / had better//)', a: '//We should inspect the whole run, including the basement, before the handover.//' },
    ],
    notesA: "Exemples de formulations : chaque groupe garde ses propres hypothèses ; vérifier modal, forme et absence de nom.",
  });

  d.checklist({
    title: 'Gallery walk: check another group’s board', tag: 'SELF-CHECK', page: 'Livret p. 37',
    intro: 'Read two other boards. Tick, then leave one sticky note: //one thing that works, one thing to fix//.',
    items: ['Each sentence states its **degree of certainty** (can’t · might · may · should).', 'The modal is **well formed**: no -s, no to, no do.', 'Each hypothesis is backed by **one fact** from the file.', '**No person** is named — no name, no badge, no job title.', 'The recommendation says **what**, and **before when**.'],
  });

  d.closing({
    cliff: 'At 15.20, Iris comes back up from the basement with a wet sheet of paper in a plastic sleeve. She does not say anything. **She just puts it on the table.**',
    homework: ['Learn the **7 idioms** (p. 36).', 'Learn **should · had better · must** + their negatives.', 'Copy your group’s four sentences: you will need them tonight.'],
    exit: 'Rewrite with a modal: //The pipe caused the leak.// (you are 40 % sure)',
  });
};
