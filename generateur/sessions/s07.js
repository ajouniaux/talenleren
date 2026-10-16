// Séance 7 — Scene 3: verb forms and collocations (livret p. 13–15) — light style, modelled on the Séance 1 deck
const { MAGENTA: MAGENTA_ } = require('../lib_light');

exports.meta = {
  n: 7, style: 'light', slug: 'Scene3_Verbs_and_collocations', title: 'The verbs you will need before ten o’clock',
  coverTitle: 'The verbs you need\nbefore ten o’clock', coverSize: 36,
  subtitle: 'Past simple, past participle — and what professionals say', pages: 'Livret p. 13–15', img: 's3_redflag', time: '09.05', sceneLabel: 'SCENE 3',
  coverNotes: "Séance 7 — Scène 3, livret p. 13–15 : consolidation avant le present perfect de la scène 4.\n"
    + "Objectifs : prétérit vs participe passé (deux formes, deux emplois), 22 verbes irréguliers classés en familles, questions sujet (Who entered?) vs questions objet (Who did he call?), collocations professionnelles, deux expressions idiomatiques.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · field note p. 13 + arbre (15') · familles de verbes + Three-form relay (15') · Dry run A (5') · questions sujet + Dry run B–C (15') · Case File Jeopardy (10') · Word file p. 15 + mindmap (10') · idiomes + Red flag or on the ball? (10') · extra (5').\n"
    + "Les diapositives GAME et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.list({
    title: 'Warm-up: report it, time it', tag: 'WARM-UP', page: 'Séance 6',
    instr: 'Complete with a reporting verb or a duration.',
    items: ['Samuel [[said]] that the alarm went off at 11.40.', 'He [[told]] us that nobody was on site.', 'Verdier [[claims]] the pipe is old — nothing proves it.', 'The log [[confirms]] that unit 3 shut down at 02:16.', 'From 23:41 to 06:47 = [[seven hours and six minutes]]'],
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
    notes: "Deux questions suffisent : have devant → participe ; be devant → participe (passif) ; sinon → prétérit. Tester : « The team has …… (leave) » / « Unit 3 …… (break down) at 02:16 ».",
  });

  d.headerCards({
    title: 'The 22 verbs of a report, in four families', tag: 'VOCABULARY', page: 'Hors livret',
    perRow: 4, after: 4, bSize: 15,
    cards: [
      { h: 'ALL THE SAME', color: 'accent5', big: 'A · A · A', bullets: false, lines: ['shut · shut · ++shut++', 'put · put · ++put++', 'cut · cut · ++cut++', 'let · let · ++let++', 'set · set · ++set++', 'cost · cost · ++cost++'] },
      { h: 'PAST = PARTICIPLE', color: 'accent2', big: 'A · B · B', bullets: false, lines: ['find · found · ++found++', 'leave · left · ++left++', 'hear · heard · ++heard++', 'send · sent · ++sent++', 'tell · told · ++told++', 'bring · brought · ++brought++', 'make · made · ++made++', 'have · had · ++had++', 'get · got · ++got++'] },
      { h: 'BASE = PARTICIPLE', color: 'accent1', big: 'A · B · A', bullets: false, lines: ['come · came · ++come++', 'run · ran · ++run++', 'become · became · ++become++'] },
      { h: 'THREE FORMS', color: MAGENTA_, big: 'A · B · C', bullets: false, lines: ['be · was / were · ++been++', 'begin · began · ++begun++', 'break · broke · ++broken++', 'go · went · ++gone++', 'know · knew · ++known++', 'ring · rang · ++rung++', 'see · saw · ++seen++', 'speak · spoke · ++spoken++', 'take · took · ++taken++', 'write · wrote · ++written++'] },
    ],
    notes: "Les participes sont en vert. Stratégie : apprendre d’abord la famille A · B · C (trois formes différentes) — ce sont les participes du present perfect de la scène 4. Prononciation : brought /brɔːt/, told /təʊld/, known /nəʊn/, written /ˈrɪtn/.",
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
    notes: "Accepter toute phrase plausible et correcte liée au dossier. Pour corser : imposer le temps de la phrase (prétérit avec une heure, ou present perfect sans heure).",
  });

  d.list({
    title: 'Two minutes with Exhibit A in front of you', tag: 'DRY RUN', page: 'Livret p. 14',
    instr: 'A · Complete from the log. Use the past form.',
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

  d.list({
    title: 'Ask the building manager — and fix the forms', tag: 'DRY RUN', page: 'Livret p. 14',
    number: false, max: 24, maxA: 22,
    items: [
      { h: 'B · Write the question you would ask the building manager.' },
      '(who / enter / 20.04) → [[Who entered zone 2F at 20.04?]]',
      '(how long / the water / run) → [[How long did the water run?]]',
      { h: 'C · One word is wrong in each sentence. Correct it.' },
      'The alarm {{was going off}} @@went off@@ at 23.41 exactly.',
      'Nobody {{did heard}} @@heard@@ the notification.',
      'The team {{was leave}} @@left@@ at 19.58.',
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

  d.table({
    title: 'Case File Jeopardy — the questions', tag: 'GAME', page: 'Hors livret', mode: 'a',
    headers: ['THE ANSWER', 'THE QUESTION'], colW: [4.6, 7.53], align: ['left', 'left'], max: 16,
    rows: [
      ['**WHO? 100** — The cleaning team.', '[[Who entered the ground floor at 06:47?]]'],
      ['**WHO? 200** — Samuel.', '[[Who said the alarm went off at 11.40?]]'],
      ['**WHAT? 100** — The temperature alarm.', '[[What went off at 23:41?]]'],
      ['**WHAT? 200** — Unit 3 shut down.', '[[What happened at 02:16?]]'],
      ['**WHAT? 300** — Photos of the ceiling.', '[[What did Iris take?]] //(object question)//'],
      ['**WHEN? 100** — At 6.50.', '[[When did the cleaners find the water?]]'],
      ['**WHEN? 300** — At 23:42.', '[[When did the system send the notification?]]'],
      ['**HOW LONG? 100** — Fifteen minutes.', '[[How long did badge 0102 stay in zone 2F?]]'],
      ['**HOW LONG? 200** — About seven hours.', '[[How long did the water run?]]'],
    ],
    notes: "Sélection pour la correction collective (liste complète dans les notes de la diapositive précédente).",
  });

  d.section('Collocations and idioms');
  d.table({
    title: 'What professionals do with an alarm', tag: 'WORD FILE', page: 'Livret p. 15',
    instr: 'These verb + noun pairs are not a matter of choice: you learn them as **one block**.',
    headers: ['PROFESSIONALS SAY', 'THEY NEVER SAY', 'FRANÇAIS'], colW: [4.0, 4.0, 4.13],
    rows: [
      ['to **raise** the alarm', '{{to lift the alarm}}', 'donner l’alerte'],
      ['to **assess** the damage', '{{to count the damage}}', 'évaluer les dégâts'],
      ['to **file** a claim', '{{to make a claim file}}', 'déclarer un sinistre'],
      ['to **take** steps', '{{to do steps}}', 'prendre des mesures'],
      ['to **draw up** a report', '{{to put up a report}}', 'rédiger / établir un rapport'],
      ['to **carry out** an inspection', '{{to run an inspection}}', 'effectuer une inspection'],
      ['to **meet** a deadline', '{{to respect a deadline}}', 'respecter un délai'],
      ['to **make good** the floor', '{{to repair back the floor}}', 'remettre le sol en état'],
    ],
    mode: 'a',
    notes: "Faux ami : respecter un délai → meet a deadline (✗ respect a deadline).",
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

  d.list({
    title: 'Red flag or on the ball?', tag: 'GAME', page: 'Hors livret',
    instr: 'Your teacher reads each situation. Hold up **red** (a red flag) or **green** (on the ball) — then say it in a full sentence.',
    max: 21, sizeA: 17,
    items: [
      { q: 'The cleaners called for help two minutes after they found the water.', a: 'The cleaners **were on the ball**: they reacted at once.' },
      { q: 'A notification was delivered at 23:42 — and nobody reacted.', a: 'That **raises a red flag**: somebody could have known.' },
      { q: 'Samuel printed the log before anybody asked him.', a: 'Samuel **was on the ball**.' },
      { q: 'The same pipe has caused trouble since the summer, and nobody repaired it.', a: 'That **raises a red flag**: somebody **dropped the ball**.' },
      { q: 'A badge entered zone 2F after the works had ended.', a: 'That **raises a red flag** — to check, without naming anyone.' },
      { q: 'Iris photographed the ceiling before anything was moved.', a: 'Iris **was on the ball**.' },
    ],
    notes: "Cartons rouge / vert (ou mains levées). Exiger une phrase complète avec l’expression. Item 5 : rappeler la règle « name the line, not the person ».",
  });

  d.list({
    title: 'Use the block, not the translation', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Complete with the right collocation (verb + noun), in the right form.',
    max: 22, maxA: 20,
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
    homework: ['Learn the **22 irregular verbs** — family by family.', 'Learn the **8 collocations** of the Word file (p. 15).', 'Prepare p. 16: decide **P, N or C** for each statement.'],
    exit: 'Ask the two questions you would ask the building manager — one **Who…?**, one **How long…?**',
  });
};
