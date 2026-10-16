// Séance 7 — Scene 3: verb forms and collocations (livret p. 13–15) — light style, modelled on the Séance 1 deck
const { MAGENTA: MAGENTA_ } = require('../lib_light');

exports.meta = {
  n: 7, style: 'light', slug: 'Scene3_Verbs_and_collocations', title: 'The verbs you will need before ten o’clock',
  coverTitle: 'The verbs you need\nbefore ten o’clock', coverSize: 36,
  subtitle: 'Past simple, past participle — and what professionals say', pages: 'Livret p. 13–15', img: 's3_redflag', time: '09.05', sceneLabel: 'SCENE 3',
  coverNotes: "Séance 7 — Scène 3, livret p. 13–15 : consolidation avant le present perfect de la scène 4.\n"
    + "Objectifs : prétérit vs participe passé (deux formes, deux emplois), verbes irréguliers classés en familles, questions sujet (Who entered?) vs questions objet (Who did he call?), collocations professionnelles, deux expressions idiomatiques.\n"
    + "Formats variés : appariement (warm-up, collocations) · repérage dans un texte · classement en familles · intrus · phrases à compléter avec banque de mots · mots dans le désordre · texte à corriger · vrai ou faux.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · field note p. 13 + arbre + repérage (15') · familles + relais (15') · intrus + Dry run A (10') · questions + Dry run B–C (15') · Jeopardy (10') · collocations : appariement + mindmap + texte à corriger (15') · idiomes + vrai ou faux (5').\n"
    + "Les diapositives GAME et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.match({
    title: 'Warm-up: match the two halves', tag: 'WARM-UP', page: 'Séance 6',
    instr: 'Each beginning (1–6) has only **one** possible ending (A–F).',
    pairs: [
      ['Samuel said', 'that the alarm went off at 11.40.'],
      ['He told', 'us that nobody was on site.'],
      ['Verdier claims', 'the pipe is old — nothing proves it.'],
      ['The log confirms', 'that unit 3 shut down at 02:16.'],
      ['The water ran', 'for about seven hours.'],
      ['From 23:41 to 06:47', 'is seven hours and six minutes.'],
    ],
    order: [3, 0, 5, 1, 4, 2], split: 0.36,
    note: { kind: 'keep', text: '**tell** + a person (//told us//) · **say** + that · **claim** = doubt · **confirm** = a document · **for** + a duration.' },
    notes: "Réactivation de la séance 6. Les élèves justifient chaque paire : « He told needs a person: us. »",
  });

  d.section('Two forms of each verb');
  d.table({
    title: 'The verbs you will need before ten o’clock', tag: 'FIELD NOTE', page: 'Livret p. 13',
    instr: 'Fill in the two missing forms: the **past simple** (a dated fact) and the **past participle** (the result you report later).',
    headers: ['BASE', 'PAST SIMPLE — a dated fact', 'PAST PARTICIPLE — the result', 'CONTEXT'],
    colW: [2.2, 3.0, 3.0, 3.93], align: ['center', 'center', 'center', 'left'], boldCol: 0,
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
  });

  d.compare({
    title: 'Two forms, two jobs', tag: 'GRAMMAR', page: 'Livret p. 13',
    left: { h: 'PAST SIMPLE — the dated fact', color: MAGENTA_, icon: 'FaClock', items: ['Something happened **at a given time**.', 'The alarm ==went off== at 23.41.', 'The cleaners ==found== the water at 6.50.', 'Signals: **at, yesterday, last night, in November**'] },
    right: { h: 'PAST PARTICIPLE — the result', color: 'accent3', icon: 'FaCheck', items: ['With **have**: Iris **has ++taken++** the photographs. //(Scene 4)//', 'In the passive: the water **was ++found++** at 6.50. //(Scene 8)//', 'Signals: **already, yet, just, so far** — no date'] },
    mid: '≠',
    note: { kind: 'tip', text: 'many verbs have **the same** two forms (found / found, left / left). Learn the ones that differ: **went / gone · took / taken · saw / seen · broke / broken · wrote / written**.' },
  });

  d.tree({
    title: 'Past simple or past participle?', tag: 'GRAMMAR', page: 'Livret p. 13',
    start: 'went or gone? took or taken?',
    steps: [
      { q: 'Is there **have / has / had** just before it?', hint: 'present perfect — the result', yes: { h: 'PAST PARTICIPLE', t: 'Iris **has ++taken++** the photos.', color: 'accent3' } },
      { q: 'Is there a form of **be** before it?', hint: 'was · were · is · has been — the passive', yes: { h: 'PAST PARTICIPLE (passive)', t: 'The water **was ++found++** at 6.50.', color: 'accent3' } },
    ],
    last: { h: 'PAST SIMPLE — the dated fact', t: 'The cleaners ==found== it at 6.50. The alarm ==went off== at 23:41.', color: MAGENTA_ },
  });

  d.fixText({
    title: 'Spot the two forms in Iris’s update', tag: 'READING', page: 'Hors livret',
    instr: 'Find **five past participles** (a result) and **four past simple** forms (a dated fact). Use the tree!',
    instrA: '++Green++ = past participle (result) · ==magenta== = past simple (dated fact).',
    docLabel: 'IRIS’S UPDATE', docTitle: 'Atlas House — 9.30 a.m.', docColor: 'accent3', count: 9,
    paras: [
      'Since 8 a.m., I have $$taken$$ forty photos of the ceiling, and Samuel has $$checked$$ the rack twice.',
      'Mark &&called&& me at 6.58. The cleaners &&found&& the water at 6.50 and &&raised&& the alarm. The temperature alarm &&went off&& at 23:41, and a notification was $$sent$$ one minute later.',
      'Nobody has $$seen$$ the floor under the rack yet, and nobody has $$made$$ any repairs.',
    ],
    countLabels: ['9 forms to find', '✓ 9 forms'],
    notes: "Repérage visuel dans un texte : les élèves soulignent (participes) et entourent (prétérits), puis justifient avec l’arbre : « have before it → participle ». Texte inventé, cohérent avec le dossier. Unit 3 et la scène 4 (present perfect) arrivent ensuite.",
  });

  d.section('Families of verbs');
  d.sort({
    title: 'Sort the verbs into four families', tag: 'VOCABULARY', page: 'Hors livret',
    instr: 'Say the three forms aloud (//go · went · gone//), then put each verb in its family.',
    bankLabel: 'THE VERBS',
    categories: [
      { h: 'A · A · A', sub: 'all the same', color: 'accent5' },
      { h: 'A · B · B', sub: 'past = participle', color: 'accent2' },
      { h: 'A · B · A', sub: 'base = participle', color: 'accent1' },
      { h: 'A · B · C', sub: 'three forms', color: MAGENTA_ },
    ],
    items: [
      { t: 'go', a: 'go · went · gone', cat: 3 }, { t: 'find', a: 'find · found · found', cat: 1 }, { t: 'shut', a: 'shut · shut · shut', cat: 0 },
      { t: 'come', a: 'come · came · come', cat: 2 }, { t: 'take', a: 'take · took · taken', cat: 3 }, { t: 'leave', a: 'leave · left · left', cat: 1 },
      { t: 'cut', a: 'cut · cut · cut', cat: 0 }, { t: 'see', a: 'see · saw · seen', cat: 3 }, { t: 'send', a: 'send · sent · sent', cat: 1 },
      { t: 'run', a: 'run · ran · run', cat: 2 }, { t: 'break', a: 'break · broke · broken', cat: 3 }, { t: 'hear', a: 'hear · heard · heard', cat: 1 },
      { t: 'put', a: 'put · put · put', cat: 0 }, { t: 'write', a: 'write · wrote · written', cat: 3 }, { t: 'tell', a: 'tell · told · told', cat: 1 },
      { t: 'be', a: 'be · was / were · been', cat: 3 }, { t: 'bring', a: 'bring · brought · brought', cat: 1 }, { t: 'become', a: 'become · became · become', cat: 2 },
      { t: 'know', a: 'know · knew · known', cat: 3 }, { t: 'make', a: 'make · made · made', cat: 1 }, { t: 'begin', a: 'begin · began · begun', cat: 3 },
      { t: 'have', a: 'have · had · had', cat: 1 }, { t: 'ring', a: 'ring · rang · rung', cat: 3 }, { t: 'get', a: 'get · got · got', cat: 1 },
      { t: 'speak', a: 'speak · spoke · spoken', cat: 3 }, { t: 'let', a: 'let · let · let', cat: 0 },
    ],
    notes: "Classement en binôme (5 min). Stratégie : apprendre d’abord la famille A · B · C — ce sont les participes du present perfect de la scène 4. Prononciation : brought /brɔːt/, told /təʊld/, known /nəʊn/, written /ˈrɪtn/.",
  });

  d.game({
    title: 'Three-form relay', page: 'Hors livret', icon: 'FaRunning',
    tagline: 'Base, past, participle — and a sentence from the file.',
    meta: 'Two teams in lines · 10 minutes · speed and accuracy',
    steps: [
      'Your teacher points at a verb on the board: //break//.',
      'Player 1 says the **past**: //broke//. Player 2 the **participle**: //broken//.',
      'Player 3 makes a **sentence from the case**: //Unit 3 broke down at 02:16.//',
      'Wrong form? The other team can **steal** the point. Then the next three players.',
    ],
    tilesLabel: 'THE BOARD', tilesPerRow: 5,
    tiles: ['be', 'begin', 'break', 'bring', 'come', 'find', 'get', 'go', 'have', 'hear', 'know', 'leave', 'make', 'ring', 'run', 'see', 'send', 'shut', 'speak', 'take', 'tell', 'write'],
    win: 'the first team to **ten correct sentences**.',
  });

  d.oddOneOut({
    title: 'Find the intruder', tag: 'VOCABULARY', page: 'Hors livret',
    instr: 'Grammar or pronunciation: one word in each line does not belong. Say **why**.',
    rows: [
      { words: ['went', 'took', 'saw', 'opened'], odd: 3, why: '**opened** is regular (-ed)' },
      { words: ['broken', 'written', 'taken', 'left'], odd: 3, why: '**left** — no -en participle' },
      { words: ['cut', 'shut', 'put', 'ran'], odd: 3, why: '**ran** — run · ran · run' },
      { words: ['found', 'heard', 'sent', 'gone'], odd: 3, why: '**gone** — the past is //went//' },
      { words: ['brought', 'thought', 'caught', 'laughed'], odd: 3, why: '**laughed** /lɑːft/ — not /ɔːt/' },
      { words: ['heard', 'word', 'bird', 'heart'], odd: 3, why: '**heart** /hɑːt/ — not /ɜː/' },
    ],
    notes: "Lignes 5–6 : intrus de prononciation — faire répéter les séries à voix haute avant de dévoiler.",
  });

  d.list({
    title: 'Two minutes with Exhibit A in front of you', tag: 'DRY RUN', page: 'Livret p. 14',
    instr: 'A · Complete from the log. Use the words in the bank, in the past form.',
    bank: ['entered', 'left ×2', 'went off', 'was', 'shut down'],
    items: ['The cabling team [[left]] //(leave)// zone 2F at 19.58.', 'The site manager [[entered]] //(enter)// at 20.04 and [[left]] //(leave)// fifteen minutes later.', 'The temperature alarm [[went off]] //(go off)// at 23.41.', 'A notification [[was]] //(be)// delivered one minute later.', 'Unit 3 [[shut down]] //(shut down)// at 02.16.'],
  });

  d.section('Questions');
  d.tree({
    title: 'Who entered? Who did he call?', tag: 'GRAMMAR', page: 'Livret p. 14',
    start: 'A question with Who or What',
    steps: [
      { q: 'Is the answer the **subject**?', hint: 'the one who did it: **Somebody** entered at 20:04.', yes: { h: 'NO DID — Who / What + past simple', t: '**Who entered** zone 2F at 20:04? **What happened** at 02:16?', color: 'accent4' } },
      { q: 'Is the answer the **object**?', hint: 'what or who it happened to: The guard called **somebody**.', yes: { h: 'DID + subject + base', t: '**Who did** the guard **call**? **What did** the log **show**?', color: 'accent2' } },
    ],
    last: { h: 'WHEN · WHERE · HOW LONG → did + base', t: '**How long did** the water **run**? **When did** the team **leave**?', color: 'accent1' },
    note: { kind: 'trap', text: '//Qui est entré ?// → **Who entered?** (✗ //Who did enter?//) · //Que s’est-il passé ?// → **What happened?** (✗ //What did happen?//)' },
  });

  d.scramble({
    title: 'Put the words in order — with or without did?', tag: 'GRAMMAR', page: 'Hors livret',
    instr: 'Subject question → **no did**. Object question → **did + base**.',
    rows: [
      { words: ['zone 2F', 'entered', 'at 20:04', 'Who', '?'], a: 'Who entered zone 2F at 20:04?' },
      { words: ['the water', 'did', 'run', 'How long', '?'], a: 'How long did the water run?' },
      { words: ['at 02:16', 'happened', 'What', '?'], a: 'What happened at 02:16?' },
      { words: ['Iris', 'take', 'did', 'What', '?'], a: 'What did Iris take? — photos of the ceiling' },
      { words: ['call', 'did', 'Mark', 'Who', 'at 6.58', '?'], a: 'Who did Mark call at 6.58? — you!' },
    ],
    notes: "Faire répondre oralement à chaque question une fois remise en ordre.",
  });

  d.list({
    title: 'Ask the building manager — and fix the forms', tag: 'DRY RUN', page: 'Livret p. 14',
    number: false, max: 24, maxA: 22,
    items: [
      { h: 'B · Write the question you would ask the building manager.' },
      '(who / enter / 20.04) → [[Who entered zone 2F at 20.04?]]',
      '(how long / the water / run) → [[How long did the water run?]]',
      { h: 'C · One word is wrong in each sentence. Correct it.' },
      'The alarm {{was going off}}@@ went off@@ at 23.41 exactly.',
      'Nobody {{did heard}}@@ heard@@ the notification.',
      'The team {{was leave}}@@ left@@ at 19.58.',
    ],
    note: { kind: 'watch', text: 'B1: the answer is the subject → **no did** · C2: //did// + past form = a double past. Emphatic //did hear// exists, but not in a report.' },
  });

  d.board({
    title: 'Case File Jeopardy', page: 'Hors livret',
    instr: 'Your teacher reads the **answer**. Your team gives the **question** — in the right form.',
    cats: [{ h: 'WHO?', color: 'accent4' }, { h: 'WHAT?', color: 'accent2' }, { h: 'WHEN?', color: 'accent1' }, { h: 'HOW LONG?', color: MAGENTA_ }],
    values: [100, 200, 300],
    note: { kind: 'keep', label: 'Rules', text: 'teams choose a tile; 20 seconds to answer. A correct question with a **wrong form** (//Who did enter…?//) earns half the points.' },
    notes: "Réponses à lire (catégorie / valeur → question attendue) :\nWHO 100 : The cleaning team. → Who entered the ground floor at 06:47?\nWHO 200 : Samuel. → Who said the alarm went off at 11.40?\nWHO 300 : The site manager’s badge. → Which badge entered zone 2F at 20:04?\nWHAT 100 : The temperature alarm. → What went off at 23:41?\nWHAT 200 : Unit 3 shut down. → What happened at 02:16?\nWHAT 300 : Photos of the ceiling. → What did Iris take?\nWHEN 100 : At 6.50. → When did the cleaners find the water?\nWHEN 200 : At 19:58. → When did the cabling team leave zone 2F?\nWHEN 300 : At 23:42. → When did the system send the notification?\nHOW LONG 100 : Fifteen minutes. → How long did badge 0102 stay in zone 2F?\nHOW LONG 200 : About seven hours. → How long did the water run?\nHOW LONG 300 : Three minutes. → How long after the temperature alarm did the humidity alarm go off?",
  });

  d.section('Collocations and idioms');
  d.match({
    title: 'What professionals do with an alarm — match the blocks', tag: 'WORD FILE', page: 'Livret p. 15',
    instr: 'Verb + noun: these pairs are not a matter of choice. Match each verb (1–8) with its noun (A–H).',
    pairs: [
      ['to raise', 'the alarm', 'donner l’alerte'],
      ['to assess', 'the damage', 'évaluer les dégâts'],
      ['to file', 'a claim', 'déclarer un sinistre'],
      ['to take', 'steps', 'prendre des mesures'],
      ['to draw up', 'a report', 'rédiger un rapport'],
      ['to carry out', 'an inspection', 'effectuer une inspection'],
      ['to meet', 'a deadline', 'respecter un délai'],
      ['to make good', 'the floor', 'remettre en état'],
    ],
    order: [5, 2, 7, 0, 3, 6, 1, 4], split: 0.5,
    instrA: 'Never: ✗ //lift the alarm// · ✗ //count the damage// · ✗ //do steps// · ✗ //respect a deadline// — say the **block**.',
  });

  d.mindmap({
    title: 'Mindmap — six verbs, eighteen blocks', tag: 'MINDMAP', page: 'Livret p. 15 · hors livret',
    center: 'AN INCIDENT',
    branches: [
      { label: 'RAISE', color: 'accent6', inner: ['the **alarm**', 'a **red flag**', 'a **question**'], outer: ['donner l’alerte', 'signaler un risque', 'poser une question'] },
      { label: 'FILE', color: 'accent2', inner: ['a **claim**', 'a **report**', 'a **complaint**'], outer: ['déclarer un sinistre', 'déposer un rapport', 'porter plainte'] },
      { label: 'ASSESS', color: 'accent1', inner: ['the **damage**', 'the **risk**', 'the **cost**'], outer: ['évaluer les dégâts', 'évaluer le risque', 'estimer le coût'] },
      { label: 'TAKE', color: 'accent3', inner: ['**steps**', '**photos**', '**notes**'], outer: ['prendre des mesures', 'prendre des photos', 'prendre des notes'] },
      { label: 'DRAW UP', color: 'accent4', inner: ['a **report**', 'a **list**', 'a **plan**'], outer: ['rédiger un rapport', 'dresser une liste', 'établir un plan'] },
      { label: 'MEET', color: MAGENTA_, inner: ['a **deadline**', 'the **costs**', 'the **standards**'], outer: ['respecter un délai', 'couvrir les frais', 'respecter les normes'] },
    ],
    notes: "Jeu rapide : l’enseignant dit un nom (the damage, a deadline…), la classe répond avec le verbe. Puis l’inverse.",
  });

  d.fixText({
    title: 'The intern’s note — correct it before Mark reads it', tag: 'YOUR MOVE', page: 'Hors livret',
    instr: 'The new intern wrote this note for Mark. Find **six mistakes**: three wrong blocks, three wrong participles.',
    instrA: 'Blocks from the Word file · participle after **have / has**.',
    docLabel: 'INTERN’S NOTE', docTitle: 'Atlas House — what we have done so far', count: 6, docColor: 'accent1',
    paras: [
      'This morning the cleaners {{lifted the alarm}}@@ raised the alarm@@ at 6.50.',
      'Iris {{has took}}@@ has taken@@ forty photos of the ceiling, and Mark has already {{did steps}}@@ taken steps@@ to protect the servers.',
      'An expert will {{count the damage}}@@ assess the damage@@ this afternoon. Nobody {{has saw}}@@ has seen@@ the floor under the rack yet.',
      'We must {{respect the deadline}}@@ meet the deadline@@ of Friday.',
    ],
    notes: "Texte inventé. Travail individuel puis par deux ; chaque correction est justifiée : « a block » (collocation) ou « have + participle ».",
  });

  d.picture({
    title: 'Two idioms: a warning and a compliment', tag: 'WORD FILE', page: 'Livret p. 15', img: 's3_redflag', imgW: 6.4,
    alt: 'Left: a woman raises a red flag over a risk assessment. Right: Samuel reacts fast to alerts on his laptop and phone.',
    cards: [
      { h: 'to raise a red flag', color: 'accent6', icon: 'FaFlag', t: '= to point out a risk. //Not a compliment: it means someone failed to warn.//' },
      { h: 'to be on the ball', color: 'accent3', icon: 'FaFutbol', t: '= alert and quick to react. //A compliment.//' },
      { h: '+ to drop the ball', color: 'accent1', icon: 'FaBan', t: '= to make a mistake by not paying attention.' },
      { h: '+ to keep an eye on', color: 'accent2', icon: 'FaEye', t: '= to monitor, to watch closely.' },
    ],
  });

  d.trueFalse({
    title: 'True or false? Idioms and blocks', tag: 'VOCABULARY', page: 'Livret p. 15',
    instr: 'Hold up **T** or **F** — and correct the false ones.',
    items: [
      { s: '“To raise a red flag” is a compliment.', a: false, why: 'it points out a risk.' },
      { s: 'If you are “on the ball”, you react fast.', a: true, why: 'alert and quick to react.' },
      { s: '“To drop the ball” means to make a mistake.', a: true, why: 'by not paying attention.' },
      { s: '“To keep an eye on” the pipe means to repair it.', a: false, why: 'it means to watch it closely.' },
      { s: 'In English, you “respect” a deadline.', a: false, why: 'you **meet** a deadline.' },
      { s: '“To draw up a report” means to write it.', a: true, why: 'rédiger un rapport.' },
      { s: 'You “file” a claim with an insurer.', a: true, why: 'déclarer un sinistre.' },
      { s: '“To make good the floor” means to clean it.', a: false, why: 'it means to repair it.' },
    ],
    notes: "Cartons T / F (ou pouce levé / baissé). Pour chaque F, un élève donne la bonne formule dans une phrase du dossier.",
  });

  d.closing({
    cliff: 'At nine o’clock Mark will ask you **what holds up**. Six statements were made in the room. Which ones can you prove today?',
    homework: ['Learn the irregular verbs — **family by family**.', 'Learn the **8 blocks** of the Word file (p. 15).', 'Prepare p. 16: decide **P, N or C** for each statement.'],
    exit: 'Ask the two questions you would ask the building manager — one **Who…?**, one **How long…?**',
  });
};
