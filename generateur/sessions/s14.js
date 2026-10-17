// Séance 14 — Scene 7, 13.00 (livret p. 32–34) — light style, modelled on the Séance 1 deck
const { MAGENTA, AMBER } = require('../lib_light');

const ZONES = [
  { w: 'can’t', pct: '≈ 5 %', color: 'accent6', ex: 'It **can’t be** the cabling team — they left at 19:58.', fr: 'c’est impossible' },
  { w: 'might', pct: '≈ 40 %', color: AMBER, ex: 'It **might be** the same section as last November.', fr: 'il se pourrait que' },
  { w: 'may', pct: '≈ 50 %', color: 'accent2', ex: 'The damage **may be** worse than it looks.', fr: 'il est possible que' },
  { w: 'must', pct: '≈ 95 %', color: 'accent3', ex: 'The pipe **must be** the cause — nothing else was wet.', fr: 'c’est sûrement' },
];
const CLUE = 'FFF6CC';

exports.meta = {
  n: 14, style: 'light', slug: 'Scene7_Four_experts', title: 'Four experts, one whiteboard',
  subtitle: 'Nobody knows. Yet something must be written.', pages: 'Livret p. 32–34', img: 's7_why', time: '13.00', sceneLabel: 'SCENE 7',
  coverNotes: "Séance 14 — Scène 7 (13.00), livret p. 32–34 : le tableau des hypothèses (team call en trois rounds). Grammaire : modaux de certitude (can’t · might · may · must) et should pour le conseil.\n"
    + "Nouveautés : carte de métro de la grammaire (ponts S3 → S16) · jauge de certitude · train des modaux, présent et passé (pont S7) · choix binaire « must, mustn’t ou can’t ? » · jauges à interpréter (Rate it, then write it) · ENERGIZER baromètre humain · intrus du langage des hypothèses · chevrons des trois rounds · tableau d’enquêteur en liège (fils rouges entre indices et hypothèses) · GAME avocat du diable.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · scène (5') · métro + jauge (10') · règles, train, pièges (15') · Rate it (5') · ENERGIZER (5') · cartes des experts (5') · team call rounds 1–2 (20') · round 3 + tableau (10') · avocat du diable (5') · clôture (5').\n"
    + "Les diapositives GAME, ENERGIZER et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.match({
    title: 'Warm-up: the assessor’s questions', tag: 'WARM-UP', page: 'Séance 13',
    instr: 'Six questions from the phone call. Find the best answer.',
    split: 0.46,
    pairs: [
      ['How long has the joint been faulty?', 'Since the summer — for about three months.'],
      ['How long have you worked on this site?', 'For eight months — since March.'],
      ['How long has the second floor been closed?', 'Since seven o’clock this morning.'],
      ['Has anyone inspected the basement?', 'Not yet — nobody has been down there.'],
      ['When did the temperature alarm go off?', 'At 23:41 — a finished time.'],
      ['What has the assessor asked for?', 'The alarm log and the photographs.'],
    ],
    order: [3, 5, 0, 4, 2, 1],
    notes: "Réactivation de la séance 13 : for / since, not … yet, prétérit pour un moment révolu. Faire lire chaque paire en dialogue (A pose, B répond).",
  });

  d.section('Scene 7');
  d.scene({
    title: 'Four experts, one whiteboard', tag: 'SCENE', page: 'Livret p. 32', img: 's7_why', time: '13.00', sceneLabel: 'SCENE 7',
    alt: 'Four experts in front of a whiteboard with the word WHY: “We cannot rule out human error.” “It might be the same section as last November.” “Then we should inspect the whole run.”',
    text: ['After lunch, Mark rubs out the timeline and writes a single word at the top of the board: **WHY**.', 'Then he says the sentence that makes everyone uncomfortable: //“Nobody leaves this room until we have three hypotheses and one recommendation. Not four hypotheses. Not zero.”//'],
    ask: 'Why **exactly** three hypotheses — not four, not zero?',
    notes: "Bulles : « We cannot rule out human error. » / « It might be the same section as last November. » / « Then we should inspect the whole run. » Les trois hypothèses = deux retenues + une écartée.",
  });

  d.section('How sure are you?');
  d.metro({
    title: 'The grammar line: you are here', tag: 'BRIDGE', page: 'Séances 3 → 16',
    stations: [
      { s: 'SÉANCE 3', h: 'Past simple', ex: 'The alarm went off at 23:41.', state: 'done' },
      { s: 'SÉANCE 4', h: 'Fact or supposition?', ex: 'It might be the same pipe.', state: 'done' },
      { s: 'SÉANCE 7', h: 'Past participles', ex: 'been · caused · started', state: 'done' },
      { s: 'SÉANCE 9', h: 'Present perfect', ex: 'Iris has taken the photos.', state: 'done' },
      { s: 'SÉANCE 13', h: 'for / since', ex: 'It has been faulty since the summer.', state: 'done' },
      { s: 'SÉANCE 14', h: 'Modals of certainty', ex: 'It might have been the joint.', state: 'here' },
      { s: 'SÉANCE 15', h: 'Saying it carefully', ex: 'We had better wait.', state: 'next' },
      { s: 'SÉANCE 16', h: 'The passive', ex: 'An access was recorded.', state: 'next' },
    ],
    note: { kind: 'keep', label: 'Today', text: 'Séance 4 (how sure?) + Séance 7 (participles): **might have been** = modal + **have** + past participle.' },
    notes: "Pont entre les séances : pour chaque station déjà passée, faire retrouver une phrase du dossier. Les stations en pointillé sont à venir.",
  });

  d.gauge({
    title: 'How to be certain that you are not certain', tag: 'FIELD NOTE', page: 'Livret p. 34',
    zones: ZONES, needle: 40,
    extra: { w: 'should', pct: 'advice', color: 'accent4', ex: 'We **should** inspect the whole run before the handover.', fr: 'il faudrait' },
    bridge: '**Séance 4** — fact or supposition? A single word, placed **before the verb**, gives the degree of certainty.',
    notes: "Le livret : « Mark’s board only accepts sentences that state their own degree of certainty. In English, that degree is set by a single word, placed before the verb. » Les pourcentages sont indicatifs. Should n’est pas sur la jauge : il donne un conseil, pas un degré de certitude.",
  });

  d.headerCards({
    title: 'Three rules, two traps', tag: 'FIELD NOTE', page: 'Livret p. 34',
    perRow: 3,
    cards: [
      { h: 'NO -S', color: 'accent2', icon: 'FaBan', lines: ['She **might** be right.', '✗ //She mights//'] },
      { h: 'NO TO', color: 'accent2', icon: 'FaBan', lines: ['We **should** wait.', '✗ //should to wait//', '(but **ought to**, **have to**)'] },
      { h: 'NO DO', color: 'accent2', icon: 'FaBan', lines: ['**Should** we call her?', '✗ //Do we should…?//', 'Negative: **can’t, shouldn’t, mustn’t**'] },
      { h: 'TRAP 1 — MUSTN’T', color: 'accent6', icon: 'FaExclamationTriangle', lines: ['**must be** = sûrement (a deduction)', '**mustn’t** = an interdiction!', 'The opposite of //must be// is **can’t be**.'] },
      { h: 'TRAP 2 — THE PAST', color: 'accent6', icon: 'FaExclamationTriangle', lines: ['modal + **have** + participle', 'It **might have been** the same joint.', 'It **can’t have been** the team.'] },
      { h: 'THE RISK', color: 'accent1', icon: 'FaBalanceScale', lines: ['One **categorical** sentence about the cause = grounds to refuse.', 'Write **might**: same idea, no exposure.'] },
    ],
    notes: "Faire produire une phrase fausse et sa correction pour chaque règle. Lien avec la séance 13 : l’assureur refuse une cause non prouvée présentée comme un fait.",
  });

  d.train({
    title: 'The modal train: now and in the past', tag: 'BRIDGE', page: 'Livret p. 34 · Séance 7',
    slots: [
      { h: 'SUBJECT', color: 'tx2' },
      { h: 'MODAL', color: MAGENTA },
      { h: 'HAVE', color: 'accent1' },
      { h: 'VERB', color: 'accent2' },
      { h: 'THE REST', color: 'accent5' },
    ],
    rows: [
      ['It', 'might', '', 'be', 'the same section as last November.'],
      ['It', 'might', 'have', 'been', 'the same section as last November.'],
      ['The works', 'may', 'have', 'disturbed', 'the pipework.'],
      ['The leak', 'can’t', 'have', 'started', 'before 19:58.'],
      ['We', 'should', '', 'inspect', 'the whole run.'],
    ],
    note: { kind: 'keep', label: 'Séance 7', text: 'empty **HAVE** wagon = **now** · full wagon = **the past**: have + **past participle**.' },
    notes: "Pont avec les participes passés (séance 7). Faire lire chaque train, puis transformer les phrases au présent en phrases au passé (et inversement).",
  });

  d.either({
    title: 'Must, mustn’t or can’t? Spot the trap', tag: 'GRAMMAR', page: 'Hors livret',
    instr: 'Choose the right form. Two lines are about **rules**, not certainty.',
    instrA: '**must be** = sûrement · **mustn’t** = interdit · the opposite of //must be// is **can’t be**.',
    rows: [
      { s: 'Nothing else was wet: the pipe ___ be the cause.', opts: ['can’t', 'must'], ans: 1 },
      { s: 'The room was dry at 19:58: the leak ___ have started before then.', opts: ['must', 'can’t'], ans: 1 },
      { s: 'You ___ name anybody in the report.', opts: ['mustn’t', 'can’t'], ans: 0 },
      { s: 'The notification was delivered: the system ___ have failed completely.', opts: ['mustn’t', 'can’t'], ans: 1 },
      { s: 'We ___ inspect the basement before the handover.', opts: ['might', 'should'], ans: 1 },
      { s: 'It ___ be the same section — we are not sure yet.', opts: ['might', 'must'], ans: 0 },
      { s: '___ call the assessor now?', opts: ['Do we should', 'Should we'], ans: 1 },
      { s: 'She ___ be right about the joint.', opts: ['mights', 'might'], ans: 1 },
    ],
    notes: "Hors livret. Lignes 3 et 7 : règle et forme, pas certitude (mustn’t = interdiction ; pas de do avec un modal).",
  });

  d.gaugeRows({
    title: 'Rate it, then write it', tag: 'GRAMMAR', page: 'Hors livret',
    instr: 'The needle gives the certainty. Rewrite each categorical sentence with the right modal.',
    zones: ZONES,
    rows: [
      { v: 95, s: 'The joint caused the leak.', a: 'The joint **must have caused** the leak.' },
      { v: 50, s: 'The drainage is blocked.', a: 'The drainage **may be** blocked.' },
      { v: 40, s: 'The works damaged the pipe.', a: 'The works **might have damaged** the pipe.' },
      { v: 5, s: 'The alarm system failed.', a: 'The alarm system **can’t have failed**: it sent a notification at 23:42.' },
      { v: 40, s: 'Somebody read the notification.', a: 'Somebody **might have read** it — //delivered// proves no more.' },
      { lab: 'advice', s: 'Inspect the basement.', a: 'We **should** inspect the basement today.' },
    ],
    notes: "Hors livret. Attention au temps : la cause est passée → modal + have + participe (must have caused). L’état actuel → modal + be (may be blocked).",
  });

  d.energizer({
    title: 'Human barometer', page: 'Hors livret', icon: 'FaBalanceScale',
    tagline: 'Your teacher reads a situation. How sure are you? Show it!',
    meta: 'Everybody stands · 4 minutes · then one sentence with the modal',
    actions: [
      { h: 'CAN’T', t: 'Sit down, arms **crossed**: ≈ 5 %.', icon: 'FaTimes', color: 'accent6' },
      { h: 'MIGHT · MAY', t: 'Stand up and **shrug**: 40–50 %.', icon: 'FaQuestion', color: AMBER },
      { h: 'MUST', t: 'Both arms **up**: ≈ 95 %.', icon: 'FaCheck', color: 'accent3' },
    ],
    rules: ['Move on “three, two, one!”', 'One student gives the sentence: //It must have… / It might… / It can’t…//'],
    items: [
      { s: 'Nothing else was wet → the pipe **must have been** the cause.', a: 2 },
      { s: 'Dry at 19:58 → the leak **can’t have started** before.', a: 0 },
      { s: 'Same section as last November? → it **might be**.', a: 1 },
      { s: 'Delivered at 23:42 → somebody **might have read** it.', a: 1 },
      { s: 'Alarm at 28 °C → the room **must have been** hot.', a: 2 },
      { s: 'Badge 0102 at 20:04 → the visit **may have** nothing to do with it.', a: 1 },
      { s: 'Your teacher is here → she **can’t be** in Paris.', a: 0 },
      { s: 'No food since 7 a.m. → you **must be** hungry.', a: 2 },
      { s: 'Your phone is ringing → it **might be** your mother.', a: 1 },
      { s: 'Snow in Brussels in August? → it **can’t be**.', a: 0 },
    ],
    instrA: 'Arms crossed = **can’t** · shrug = **might / may** · arms up = **must**.',
    notes: "Lire seulement la situation (la partie avant la flèche), puis faire produire la phrase. Situations 1 à 6 : le dossier ; 7 à 10 : la vie quotidienne.",
  });

  d.oddOneOut({
    title: 'Odd one out: the language of hypotheses', tag: 'VOCABULARY', page: 'Hors livret',
    instr: 'One word in each line does not belong. Why?',
    rows: [
      { words: ['might', 'must', 'may', 'could'], odd: 1, why: '**must** ≈ 95 %; the others = possible' },
      { words: ['to exclude', 'to rule out', 'to confirm', 'to eliminate'], odd: 2, why: '**to confirm** = say it is true' },
      { words: ['a hunch', 'evidence', 'proof', 'a clue'], odd: 0, why: '**a hunch** = une intuition, not evidence' },
      { words: ['should', 'ought to', 'had better', 'might'], odd: 3, why: '**might** = a possibility; the others = advice' },
      { words: ['can’t', 'mights', 'should', 'must'], odd: 1, why: '**mights** ✗ — no -s after a modal' },
      { words: ['to back up', 'to contradict', 'to support', 'to confirm'], odd: 1, why: '**to contradict** = say the opposite' },
    ],
    notes: "Hors livret. Français : to rule out = écarter · a hunch = une intuition · a clue = un indice · to back up = étayer · ought to = devrait · had better = ferait mieux de (séance 15).",
  });

  d.section('The team call');
  d.experts({
    title: 'Your card', tag: 'YOUR EXPERT', page: 'Livret p. 33',
    cards: [
      { who: 'ACC', q: '**Your card.** Last November a comparable claim was settled at 80 %. A provision of €12,000 has been opened this morning. No budget line exists for an excess above €5,000. **Your question to the group:** if the cause is never established, who carries the difference — and in which financial year does it land?' },
      { who: 'IT', q: '**Your card.** The last backup ran at midnight, sixteen minutes after the temperature alarm. Unit 3 shut down at 02:16. Total downtime: nine hours. **Your question to the group:** the notification was //delivered// at 23:42 to a mobile number. Does “delivered” mean somebody was warned?' },
      { who: 'LAW', q: '**Your card.** The lease runs for nine years. The maintenance clause places routine inspection with the property manager and structural works with the landlord. A badge entry at 20:04 is logged. **Your question to the group:** at what point does a repeated fault stop being an accident and start being negligence — and who would have to prove it?' },
      { who: 'RE', q: '**Your card.** The humidity alarm followed the temperature alarm by three minutes. The same section of pipework failed last November. The handover to the tenant is on 1 March. **Your question to the group:** if the second floor is unusable for three weeks, what does the tenant become entitled to, and from what date?' },
    ],
    notes: "Chaque élève ne lit que la carte de sa firme (information asymétrique) : c’est ce qui rend le team call nécessaire.\nÀ vérifier dans le livret, carte IT : « midnight, sixteen minutes after the temperature alarm » — l’alarme de température est à 23:41 (19 minutes avant minuit) ; seize minutes correspondent à l’alarme d’humidité (23:44).",
  });

  d.chevrons({
    title: 'The hypothesis board: three rounds', tag: 'TEAM CALL', page: 'Livret p. 32',
    instr: 'Groups of four — one representative of each firm. Twenty-five minutes.',
    steps: [
      { h: 'ROUND 1 · alone · 5′', ex: 'Write **one hypothesis** that only somebody from your field would think of — and **one fact** you can already prove.', color: 'accent4' },
      { h: 'ROUND 2 · together · 12′', ex: '**90 seconds** each, no interruptions. Then each listener asks **one** question: //What would prove that? What would rule it out?//', color: 'accent1' },
      { h: 'ROUND 3 · decide · 8′', ex: 'In writing and out loud: **2 hypotheses, 1 ruled out, 1 recommendation**.', color: 'accent3' },
    ],
    rows: [
      { h: 'MARK’S RULE', icon: 'FaGavel', color: 'tx2', lines: ['The board only accepts sentences that state **their own degree of certainty**: can’t · might · may · must.'] },
      { h: 'NO NAMES', icon: 'FaBan', color: 'accent6', lines: ['**Nobody may name a person.** Name the fact, not the person (Séance 13).'] },
    ],
    notes: "Minuter chaque round au tableau. Pendant le round 2, le professeur circule et note les modaux employés (ou oubliés).",
  });

  d.headerCards({
    title: 'Present, test, decide', tag: 'SPEAKING', page: 'Livret p. 32',
    perRow: 3,
    cards: [
      { h: 'PRESENT', color: 'accent4', icon: 'FaBullhorn', lines: ['My hypothesis is that the water **might** have come from …', 'What supports it is … (a fact from the file).', 'I’m about **40 %** sure.'] },
      { h: 'TEST', color: 'accent1', icon: 'FaSearch', lines: ['**What would prove that?**', '**What would rule that out?**', 'Where does that figure come from?', 'How sure are you?'] },
      { h: 'DECIDE', color: 'accent3', icon: 'FaHandshake', lines: ['I think we can **rule out** …, because …', 'We **should** keep … and …', 'So we agree that … ?'] },
    ],
    notes: "À laisser projeté pendant les rounds 2 et 3.",
  });

  d.detectiveBoard({
    title: 'The hypothesis board', tag: 'TEAM CALL', page: 'Livret p. 32–34',
    instr: 'Pin your group’s four cards. Each one must be tied to **at least one clue**.',
    instrA: 'One possible board: every card is tied to a fact — and **nobody is named**.',
    cards: [
      { id: 'c1', x: 0.0, y: 0.0, w: 0.185, h: 0.36, label: 'EXHIBIT A', t: '19:58 — cabling team exit. Dry at 19.58 (Verdier).', clue: true, fill: CLUE, rot: -2, color: 'accent5' },
      { id: 'c2', x: 0.205, y: 0.02, w: 0.185, h: 0.36, label: 'EXHIBIT A', t: '23:41 temperature alarm · 23:44 humidity alarm.', clue: true, fill: CLUE, rot: 1.5, color: 'accent5' },
      { id: 'c3', x: 0.41, y: 0.0, w: 0.185, h: 0.36, label: 'SAMUEL · 8.15', t: 'Same section failed last November. Trouble since the summer.', clue: true, fill: CLUE, rot: -1, color: 'accent5' },
      { id: 'c4', x: 0.615, y: 0.02, w: 0.185, h: 0.36, label: 'LAW CARD', t: 'Routine inspection: property manager. Structural works: landlord.', clue: true, fill: CLUE, rot: 2, color: 'accent5' },
      { id: 'c5', x: 0.82, y: 0.0, w: 0.18, h: 0.36, label: 'SAMUEL · RE CARD', t: 'Nobody has been to the basement. Handover: 1 March.', clue: true, fill: CLUE, rot: -1.5, color: 'accent5' },
      { id: 'h1', x: 0.0, y: 0.52, w: 0.235, h: 0.48, label: 'HYPOTHESIS 1', t: 'The water **might** come from the same section as last November.', tq: 'might … ?', color: 'accent2', rot: 1 },
      { id: 'h2', x: 0.255, y: 0.54, w: 0.235, h: 0.46, label: 'HYPOTHESIS 2', t: 'The cabling works **may** have disturbed the pipework.', tq: 'may have … ?', color: 'accent1', rot: -1 },
      { id: 'r', x: 0.51, y: 0.52, w: 0.235, h: 0.48, label: 'RULED OUT', t: 'The leak **can’t** have started while the team was in the room.', tq: 'can’t have … ?', color: 'accent6', rot: 1.5 },
      { id: 'rec', x: 0.765, y: 0.54, w: 0.235, h: 0.46, label: 'WE RECOMMEND', t: 'We **should** inspect the whole run, basement included, before the handover.', tq: 'should … ?', color: 'accent3', rot: -1 },
    ],
    links: [['c3', 'h1'], ['c2', 'h1'], ['c1', 'h2'], ['c1', 'r'], ['c2', 'r'], ['c4', 'rec'], ['c5', 'rec']],
    notes: "Round 3 : chaque groupe recopie sa propre version sur une feuille A3 (ou au tableau), avec des fils entre indices et hypothèses.",
    notesA: "Un exemple parmi d’autres, à projeter après les productions des groupes. Vérifier que chaque phrase porte son degré de certitude et qu’aucune ne nomme une personne.",
  });

  d.game({
    title: 'Devil’s advocate', page: 'Hors livret', icon: 'FaFire',
    tagline: 'Devil’s advocate: attack the board!',
    meta: 'Groups of four · 8 minutes · one devil per group',
    steps: [
      'One student per group is the **devil’s advocate**: they attack each card on the board.',
      'The devil says: //“That can’t be right, because…”// or //“You must be wrong: …”//',
      'The group defends with a **fact** from the file — and **changes the modal** if needed (//must → might//).',
      'A new devil for each card.',
    ],
    say: ['That **can’t** be right: the room was dry at 19.58.', 'You **might** be right, but what would **prove** it?', 'Fair point — so it **may** have been …', 'We **should** keep it, because …', 'I think we can **rule it out**.'],
    win: 'your board survives the devil — with every modal still justified by a fact.',
    notes: "Variante : le professeur joue l’avocat du diable pour toute la classe, carte par carte.",
  });

  d.closing({
    cliff: 'Mark will photograph your board. What is on it will go, **word for word**, into tonight’s report.',
    homework: ['Learn the certainty scale: **can’t · might · may · must** (+ should).', 'Learn the three rules (no -s, no to, no do) and the two traps.', 'Learn the past: modal + **have** + past participle.', 'Bring your group’s draft board next session.'],
    exit: 'One sentence about the leak with **might have**, one with **can’t have**.',
  });
};
