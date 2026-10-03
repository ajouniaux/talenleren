// Séance 11 — Scene 5, 10.20 (livret p. 23–24)
exports.meta = {
  n: 11, slug: 'Scene5_The_email', title: 'The e-mail you must not forward as it is',
  subtitle: 'The general contractor defends itself. Poorly, and in broken English.', pages: 'Livret p. 23–24', img: 's5_email', time: '10.20', sceneLabel: 'SCENE 5',
  coverNotes: "Scène 5 : l’e-mail de Paul Verdier (Exhibit B). Repérer les 7 faux amis et les 2 formes verbales qui placent la soirée dans le mauvais temps. Principe déontologique : on corrige l’anglais, pas le contenu.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: '**A document fit to be forwarded**: seven false friends and two verb forms corrected.',
    language: 'False friends (//control, actually, assist, demand, delay, eventually, resume//) · past simple with a finished time (//yesterday, at 19.58//) · e-mail register',
    skills: 'Proofreading for meaning · protecting a file without changing its content',
    agenda: [['Warm-up: progress expressions', 10], ['Scene 5 + Exhibit B (p. 23)', 10], ['Hunt the seven words (p. 24)', 20], ['Correction', 10], ['The two verb forms', 10], ['The clean e-mail', 10], ['E-mail toolkit + covering note', 15], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: progress, in English', tag: 'WARM-UP', page: 'Séance 10',
    cols: 2,
    items: ['être dans les temps → to be [[on track]]', 'prendre du retard → to [[fall behind]]', 'tenir informé → to keep somebody [[in the loop]]', 'faire un point rapide → to [[touch base]]', 'relancer quelqu’un → to [[chase]] somebody', 'un goulet d’étranglement → a [[bottleneck]]'],
  });

  d.scene({
    title: 'The e-mail you must not forward as it is', tag: 'SCENE', page: 'Livret p. 23', img: 's5_email', time: '10.20', sceneLabel: 'SCENE 5',
    alt: 'Iris leans over the narrator’s laptop: “Wait — do not forward that yet.”',
    text: ['**Paul Verdier** runs the cabling team. His English is //enthusiastic and unreliable//.', 'Mark wants this e-mail forwarded to the insurer **within the hour** — but not in this state.', 'An assessor who reads //I have controlled the room// will wonder what else has been mistranslated.'],
    ask: 'What does //I have controlled the room// mean in English — and what did Verdier want to say?',
    notes: "Bulles : « Wait — do not forward that yet. » / « He wrote controlled. He means checked. » En anglais, control = maîtriser, diriger.",
  });

  d.exhibit({
    title: 'Exhibit B — the contractor’s e-mail', tag: 'EXHIBIT', page: 'Livret p. 23',
    label: 'EXHIBIT B', docTitle: 'From: p.verdier@verdier-construction.be',
    lines: [
      'Dear Mr Shaw,',
      'I have controlled the second floor yesterday evening before we go. Actually, we are still waiting for the humidity report.',
      'Two of my men will assist the meeting this afternoon if you want. I have demanded them to come.',
      'We have a delay of two days to finish the cabling, so we are not late. Eventually, we can send you our own report.',
      'I have resumed our position in three lines below. I don’t think it would be sensible to blame my team: the pipe is old and it is not our work. Everything was dry when my team leaves at 19.58.',
      'Kind regards,   P. Verdier',
    ],
    gap: 10,
    side: { img: 's5_clean', label: 'YOUR MOVE', color: 'accent1', icon: 'FaPenNib', lines: ['**7 words** used with their French meaning', '**2 verb forms** in the wrong time', '//sensible// = reasonable here: **don’t touch it**'] },
  });

  d.exercise({
    title: 'Clean it before it leaves the building', tag: 'YOUR MOVE', page: 'Livret p. 24',
    instr: 'Underline the seven words a French speaker has used with their French meaning, and write what Verdier actually meant. Hint — in the order of the text:',
    items: [
      'a verb of **verification** → [[controlled → checked]]',
      'an adverb of **time** → [[Actually → Currently / At the moment]]',
      'a verb of **help** → [[assist → attend]]',
      'a verb of **requirement** → [[demanded → asked]]',
      'a noun of **duration** → [[a delay → a deadline (two days to finish)]]',
      'an adverb of **conclusion** → [[Eventually → If necessary]]',
      'a verb of **summary** → [[resumed → summarised]]',
    ],
    expect: ['You are not correcting homework: **you are protecting a file**.', 'Change the **words**, never the **position** of the author.'],
    traps: ['//sensible// = **raisonnable**: correct here. (FR //sensible// = **sensitive**)', '//a delay of two days// = un **retard** de deux jours: it says they **are** late!'],
  });

  d.exercise({
    title: 'Seven words, seven traps — corrected', tag: 'YOUR MOVE', page: 'Livret p. 24', mode: 'a',
    number: false, gap: 12,
    items: [
      { t: 'I have {{controlled}} ++checked++ the second floor yesterday evening before we go. {{Actually}} ++Currently++, we are still waiting for the humidity report.' },
      { t: 'Two of my men will {{assist}} ++attend++ the meeting this afternoon if you want. I have {{demanded}} ++asked++ them to come.' },
      { t: 'We have {{a delay}} ++a deadline++ of two days to finish the cabling, so we are not late. {{Eventually}} ++If necessary++, we can send you our own report.' },
      { t: 'I have {{resumed}} ++summarised++ our position in three lines below. I don’t think it would be **sensible** to blame my team: the pipe is old and it is not our work. Everything was dry when my team leaves at 19.58.' },
    ],
    sideW: 3.4,
    aside: { label: 'NOT YET DONE', color: 'accent6', icon: 'FaExclamationTriangle', lines: ['Two **verb forms** still put the evening in the wrong time.', 'Can you find them?'] },
  });

  d.table({
    title: 'What he wrote, what he meant', tag: 'WORD FILE', page: 'Livret p. 24 & 26',
    headers: ['IN THE E-MAIL', 'VERDIER THOUGHT…', 'IN ENGLISH IT MEANS…', 'WRITE INSTEAD'],
    colW: [2.4, 3.0, 3.2, 3.53], boldCol: 0,
    colColor: ['accent6', 'accent5', 'tx1', 'accent3'],
    rows: [
      ['controlled', 'contrôlé = vérifié', 'maîtrisé, dirigé', '**checked**'],
      ['actually', 'actuellement', 'en fait, en réalité', '**currently / at the moment**'],
      ['assist', 'assister à', 'aider', '**attend**'],
      ['demanded', 'demandé', 'exigé', '**asked**'],
      ['a delay', 'un délai', 'un retard', '**a deadline / a time limit**'],
      ['eventually', 'éventuellement', 'finalement, à la fin', '**if necessary / possibly**'],
      ['resumed', 'résumé', 'repris', '**summarised**'],
    ],
  });

  d.cards({
    title: 'The two verb forms that matter most to the insurer', tag: 'YOUR MOVE', page: 'Livret p. 24',
    intro: 'Now correct the **two verb forms** that place the evening in the wrong time.',
    perRow: 2,
    cards: [
      { h: '1 · A FINISHED TIME', color: 'accent6', f: 'I {{have controlled}} … yesterday evening', lines: ['→ I **checked** the second floor **yesterday evening**.', 'A finished time (//yesterday, last night, at 19.58//) → **past simple**, never //have + participle//.'] },
      { h: '2 · A PAST EVENT', color: 'accent1', f: 'when my team {{leaves}} at 19.58', lines: ['→ Everything was dry when my team **left** at 19.58.', '//leaves// = present: it sounds like a habit, or the future.', 'Bonus: //before we {{go}}// → before we **left**.'] },
    ],
    foot: { kind: 'keep', label: 'Pourquoi ces deux-là', text: 'They fix **when the room was checked** and **when it was dry**: the start of the window the assessor will look at.' },
  });

  d.exercise({
    title: 'The e-mail, fit to be forwarded', tag: 'YOUR MOVE', page: 'Livret p. 23–24', mode: 'a',
    number: false, gap: 10,
    items: [
      { t: 'Dear Mr Shaw,' },
      { t: 'I **checked** the second floor yesterday evening before we **left**. We are **currently** still waiting for the humidity report.' },
      { t: 'Two of my men will **attend** the meeting this afternoon if you wish. I have **asked** them to come.' },
      { t: 'We have **two days left** to finish the cabling, so we are not late. **If necessary**, we can send you our own report.' },
      { t: 'I have **summarised** our position in three lines below. I don’t think it would be sensible to blame my team: the pipe is old and it is not our work. Everything was dry when my team **left** at 19.58.' },
      { t: 'Kind regards,   P. Verdier' },
    ],
    sideW: 3.4,
    aside: { label: 'BEFORE YOU FORWARD', color: 'accent3', icon: 'FaCheck', lines: ['**Meaning**: 7 words fixed', '**Time**: 2 verb forms fixed', 'His **position** unchanged: you correct the English, not the content'] },
  });

  d.cards({
    title: 'E-mail toolkit', tag: 'WRITING', page: 'Hors livret',
    perRow: 3,
    cards: [
      { h: 'OPENING', color: 'accent2', lines: ['Dear Mr Shaw, / Dear Ms Marsh,', 'Following our call this morning, …', 'Please find **attached** / **below** …'] },
      { h: 'BODY', color: 'accent1', lines: ['I am writing to **inform you that** …', 'We are **currently** waiting for …', 'Could you please **confirm** … ?', 'I would be grateful if you could …'] },
      { h: 'CLOSING', color: 'accent3', lines: ['Please do not hesitate to contact me if …', 'I look forward to **hearing** from you.', 'Kind regards, / Best regards,', 'Yours sincerely, (formal)'] },
    ],
    foot: { kind: 'trap', text: '//Je vous prie d’agréer…// n’a pas d’équivalent : une formule courte suffit. //I look forward to hear// ✗ → **to hearing** ✓' },
  });

  d.exercise({
    title: 'Mark forwards it: the covering note', tag: '+ EXTRA', page: 'Hors livret',
    items: [{ q: 'Write the two-line note Mark adds when he forwards the corrected e-mail to the insurer.', a: '//Dear Ms Marsh, Please find below the contractor’s account of yesterday evening, received at 10.18. Only the English has been corrected; the content is unchanged. Kind regards, Mark Shaw//' }],
    number: false,
    expect: ['Say **what** you send and **when** you received it.', 'Say that **only the English** was corrected — transparency protects the file.'],
  });

  d.closing({
    cliff: 'An insurer does not read what an e-mail claims. **She reads what it unintentionally concedes.**',
    homework: ['Learn the **7 false friends** (both directions).', 'Learn the e-mail toolkit (opening, body, closing).', 'Prepare p. 25: five questions on what the e-mail **admits**.'],
    exit: 'Translate: //Je vais assister à la réunion.// — //Nous avons un délai de deux jours.//',
  });
};
