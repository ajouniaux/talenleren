// Séance 6 — Scene 3, 09.05 (livret p. 11–12) — light style, modelled on the Séance 1 deck
exports.meta = {
  n: 6, style: 'light', slug: 'Scene3_The_log', title: 'What the log really says', coverTitle: 'What the log\nreally says',
  subtitle: 'A printed sheet, eight lines, and one contradiction.', pages: 'Livret p. 11–12', img: 's3_log', time: '09.05', sceneLabel: 'SCENE 3',
  coverNotes: "Séance 6 — Scène 3 (09.05), livret p. 11–12 : l’Exhibit A (journal de la GTB) contredit ce qui a été dit dans la salle.\n"
    + "Objectifs : lire des données, dire les heures (24 h, a.m. / p.m.), donner une durée, comparer deux sources, rapporter des propos (say, tell, claim, confirm), nommer sans accuser.\n"
    + "Formats variés : intrus (warm-up) · repérage dans l’Exhibit · appariement · mots mêlés · remise en ordre · classement · phrases à compléter · QCM · texte à corriger.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · scène + Exhibit A + repérage (15') · vocabulaire : appariement + mots mêlés (10') · heures + Time bingo (10') · remise en ordre + classement (15') · Your move Q1–Q6 (20') · arbres + texte à corriger (10') · Press conference (5').\n"
    + "Les diapositives GAME et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.oddOneOut({
    title: 'Warm-up: find the spelling mistake', tag: 'WARM-UP', page: 'Séance 5',
    instr: 'One form in each line is **wrong**. Find it — and spell it right.',
    rows: [
      { words: ['running', 'stoping', 'planned', 'lying'], odd: 1, why: '**stopping** — double the p' },
      { words: ['noticed', 'carried', 'lieing', 'travelled'], odd: 2, why: '**lying** — ie → y' },
      { words: ['visitted', 'opened', 'happened', 'preferred'], odd: 0, why: '**visited** — VIsit: no double' },
      { words: ['carrying', 'carryed', 'studied', 'tried'], odd: 1, why: '**carried** — consonant + y → ied' },
      { words: ['leaving', 'noticeing', 'arriving', 'taking'], odd: 1, why: '**noticing** — drop the -e' },
      { words: ['began', 'runned', 'left', 'heard'], odd: 1, why: '**ran** — irregular' },
    ],
    notes: "Rappel de l’arbre d’orthographe de la séance 5. Faire épeler la bonne forme à voix haute, en anglais.",
  });

  d.section('Exhibit A');
  d.scene({
    title: 'What the log really says', tag: 'SCENE', page: 'Livret p. 11', img: 's3_log', time: '09.05', sceneLabel: 'SCENE 3',
    alt: 'Samuel taps a line of the printed alarm log on the table while Mark and Iris look on',
    text: ['Samuel puts a printout on the table. It is the **building management system log** for the night.', '**Eight lines.** He taps one of them with his finger and says nothing.'],
    ask: 'Why would someone say nothing — and just **tap a line**? Make two guesses with //may// or //might//.',
    notes: "Bulles de l’image : « Do not write that badge number anywhere. » / « The log does not say what you think it says. » Faire émettre des hypothèses (may / might, séance 4) avant de projeter l’Exhibit.",
  });

  const EXHIBIT_A = {
    label: 'EXHIBIT A', docTitle: 'Building management — night log, Monday to Tuesday',
    lines: [
      ['19:58', 'Zone 2F — cabling works — access badge 0447 — exit'],
      ['20:04', 'Zone 2F — access badge 0102 — entry — site manager'],
      ['20:19', 'Zone 2F — access badge 0102 — exit'],
      ['23:41', 'Zone 2F technical room — TEMPERATURE ALARM — threshold 28 °C'],
      ['23:42', 'Alarm notification sent — mobile 0470 22 14 09 — status: **delivered**'],
      ['23:44', 'Zone 2F technical room — HUMIDITY ALARM — threshold 85 %'],
      ['02:16', 'Server rack A2 — unit 3 — automatic shutdown'],
      ['06:47', 'Zone GF — access badge 0771 — entry — cleaning team'],
    ],
  };

  d.exhibit({
    ...EXHIBIT_A, title: 'Exhibit A — the night log', tag: 'READING', page: 'Livret p. 11',
    notes: "Lecture à voix haute de chaque ligne, les heures de deux façons (twenty-three forty-one / eleven forty-one p.m.).",
  });

  d.exhibitQuiz({
    ...EXHIBIT_A, docTitle: 'Night log, Monday to Tuesday', title: 'Spot it in the log', tag: 'READING', page: 'Livret p. 11',
    askLabel: 'READ IT LIKE AN ASSESSOR',
    questions: [
      { q: 'Which line is **one minute** off what Samuel said?', a: '**23:41** — Samuel said 11.40.', rows: [3] },
      { q: 'Which line shows **somebody** in 2F after the works?', a: '**20:04** — an entry, until the exit at **20:19**.', rows: [1, 2] },
      { q: 'Which line shows that somebody **could** have known?', a: '**23:42** — a notification was **delivered**.', rows: [4] },
    ],
    notes: "Repérage visuel, 2 minutes : les élèves répondent par l’heure de la ligne, pas par un nom.",
    notesA: "Les lignes surlignées portent le numéro de la question. Ces trois lignes reviennent dans Your move Q1–Q3.",
  });

  d.section('Words of a log');
  d.match({
    title: 'The words of a log — match them', tag: 'VOCABULARY', page: 'Livret p. 11',
    instr: 'Match each word (1–8) with its meaning (A–H).',
    pairs: [
      ['a threshold', 'the level that starts an alarm', 'un seuil'],
      ['an entry', 'a badge going in', 'une entrée'],
      ['an exit', 'a badge going out', 'une sortie'],
      ['delivered', 'it reached the phone', 'remis'],
      ['humidity', 'water in the air', 'l’humidité'],
      ['an automatic shutdown', 'a machine stops by itself', 'un arrêt automatique'],
      ['a printout', 'a document on paper', 'une impression'],
      ['GF', 'the ground floor', 'le rez-de-chaussée'],
    ],
    order: [4, 0, 6, 2, 7, 1, 5, 3],
    instrA: '**GF** = ground floor (UK) = //first floor// (US) · say: threshold /ˈθreʃhəʊld/ · humidity /hjuːˈmɪdəti/.',
  });

  d.wordSearch({
    title: 'Twelve words hidden in the log', tag: 'GAME', page: 'Hors livret',
    rows: 10, cols: 12, seed: 11,
    words: [
      { w: 'THRESHOLD', r: 0, c: 0, d: 'h', fr: 'seuil' },
      { w: 'RACK', r: 1, c: 1, d: 'h', fr: 'baie' },
      { w: 'SHUTDOWN', r: 2, c: 2, d: 'h', fr: 'arrêt' },
      { w: 'HUMIDITY', r: 4, c: 3, d: 'h', fr: 'humidité' },
      { w: 'ENTRY', r: 6, c: 0, d: 'h', fr: 'entrée' },
      { w: 'EXIT', r: 8, c: 1, d: 'h', fr: 'sortie' },
      { w: 'UNIT', r: 9, c: 0, d: 'h', fr: 'serveur' },
      { w: 'ALARM', r: 9, c: 5, d: 'h', fr: 'alarme' },
      { w: 'BADGE', r: 2, c: 0, d: 'v', fr: 'badge' },
      { w: 'SENSOR', r: 1, c: 11, d: 'v', fr: 'capteur' },
      { w: 'ZONE', r: 5, c: 10, d: 'v', fr: 'zone' },
      { w: 'LOG', r: 6, c: 7, d: 'v', fr: 'journal' },
    ],
    notes: "Mots mêlés en binôme, 4 minutes : les mots sont horizontaux (→) ou verticaux (↓). Le premier binôme qui trouve les 12 mots les lit à voix haute dans une phrase tirée de l’Exhibit A.",
  });

  d.section('Times and durations');
  d.cardGrid({
    title: 'Read a time, give a duration', tag: 'GRAMMAR', page: 'Livret p. 11–12',
    perRow: 4,
    cards: [
      { label: '+ 24-HOUR CLOCK', big: '23:41', fr: '//twenty-three forty-one//', ex: '= eleven forty-one **p.m.**' },
      { label: '+ A ZERO', big: '20:04', fr: '//twenty oh four//', ex: '= four minutes past eight **p.m.**' },
      { label: '+ MORNING', big: '06:47', fr: '//six forty-seven a.m.//', ex: '**a.m.** = from midnight to noon' },
      { label: '+ SPOKEN', big: 'ten to seven', fr: '= 06:50', ex: '**a quarter past** eight = 08:15' },
      { label: '+ FROM … TO', big: 'from … to', fr: 'de … à', ex: '**from** 20:04 **to** 20:19 = fifteen minutes' },
      { label: '+ BETWEEN … AND', big: 'between … and', fr: 'entre … et', ex: '**between** 23:41 **and** 06:47' },
      { label: '+ A DURATION', big: 'for', fr: 'pendant', ex: 'The water ran **for** about seven hours.' },
      { label: 'ATTENTION', big: 'for ≠ during', fr: 'pendant + durée · + nom', ex: '**for** seven hours · **during** the night', kind: 'attention' },
    ],
    notes: "✗ during seven hours → for seven hours.",
  });

  d.game({
    title: 'Time bingo', page: 'Hors livret', icon: 'FaThLarge',
    tagline: 'Hear the time — find it on your card.',
    meta: 'Everybody · 10 minutes · listening to times',
    steps: [
      'Draw a 3 × 3 grid. Copy **nine times** from the board, in any order.',
      'Your teacher reads times — in different ways: //twenty oh four · eight oh four p.m. · four minutes past eight//.',
      'Cross out every time you hear.',
      'Three in a line: shout **“Bingo!”** — then read your line aloud, **two ways** each.',
    ],
    tilesLabel: 'THE BOARD', tiles: ['20:04', '23:41', '06:47', '02:16', '19:58', '23:42', '20:19', '23:44', '12:00', '00:00', '07:15', '18:30', '13:05', '08:50', '21:40', '06:50'],
    win: 'the first correct line. Second round: a student reads the times.',
    notes: "Lire dans le désordre, en variant les formes :\n20:04 twenty oh four / eight oh four p.m. · 23:41 twenty-three forty-one / eleven forty-one p.m. · 06:47 six forty-seven a.m. / thirteen minutes to seven · 02:16 two sixteen a.m. · 19:58 two minutes to eight · 23:42 eleven forty-two p.m. · 20:19 eight nineteen p.m. · 23:44 sixteen minutes to midnight · 12:00 noon · 00:00 midnight · 07:15 a quarter past seven · 18:30 half past six p.m. · 13:05 five past one p.m. · 08:50 ten to nine a.m. · 21:40 twenty to ten p.m. · 06:50 ten to seven a.m.",
  });

  d.section('The night, in order');
  d.reorder({
    title: 'Put the night back in order', tag: 'READING', page: 'Livret p. 11',
    instr: 'Booklets **closed**! Number the eight events from 1 to 8 — then check with Exhibit A.',
    instrA: 'With the time from the log — and tell it with //first, then, after that, finally//.',
    items: [
      { tag: '19:58', t: 'The cabling team left zone 2F.' },
      { tag: '20:04', t: 'A badge entered zone 2F after the works.' },
      { tag: '20:19', t: 'The same badge left zone 2F.' },
      { tag: '23:41', t: 'The temperature alarm went off.' },
      { tag: '23:42', t: 'A notification was sent to a mobile — and delivered.' },
      { tag: '23:44', t: 'The humidity alarm went off.' },
      { tag: '02:16', t: 'A server unit shut down automatically.' },
      { tag: '06:47', t: 'The cleaning team entered the ground floor.' },
    ],
    shuffle: [3, 7, 1, 5, 0, 6, 2, 4],
    notes: "Remise en ordre de mémoire (2 min), puis vérification dans l’Exhibit A. Faire raconter la nuit en binôme avec les connecteurs de la séance 5.",
  });

  d.sort({
    title: 'The room vs the log: sort the statements', tag: 'YOUR MOVE', page: 'Livret p. 8–12',
    instr: 'What was said at 08.15 — what does Exhibit A do with it? Put each statement in a column.',
    categories: [
      { h: 'MATCHES', sub: 'confirms · roughly matches', color: 'accent3' },
      { h: 'PARTLY', sub: 'one minute off · only shows', color: 'accent2' },
      { h: 'CONTRADICTS', sub: 'does not match', color: 'accent6' },
      { h: 'NOT IN THE LOG', sub: 'there is no record of', color: 'accent5' },
    ],
    items: [
      { t: '“The cleaners found water at 6.50.”', a: '“Water at 6.50” — entry 06:47', cat: 0 },
      { t: '“Nobody was on site.”', a: '“Nobody on site” — entry 20:04', cat: 2 },
      { t: '“The alarm went off at 11.40.”', a: '“11.40” — the log says 23:41', cat: 1 },
      { t: '“The pipe leaked all night.”', a: '“The pipe leaked” — no record', cat: 3 },
      { t: '“The team worked until eight.”', a: '“Until eight” — exit 19:58', cat: 0 },
      { t: '“Two units have stopped.”', a: '“Two units” — only unit 3', cat: 1 },
      { t: '“Nobody heard the alarm.”', a: '“Nobody heard” — no record', cat: 3 },
      { t: '“The alarm system worked.”', a: '“It worked” — sent 23:42', cat: 0 },
    ],
    notes: "Classement en binôme, puis justification à l’oral avec le mot de la colonne : « The log roughly matches what Iris said: the exit was at 19:58. »",
    notesA: "« Nobody heard » : le journal montre une notification délivrée à 23:42 — quelqu’un aurait pu savoir — mais il ne dit rien de ce que les gens ont entendu.",
  });

  d.section('Your move');
  d.mcq({
    title: 'Read the log against the room — Q1', tag: 'YOUR MOVE', page: 'Livret p. 12',
    instr: 'Vote with your fingers: one finger = A, two = B…',
    q: '**1.** Samuel said the alarm went off at 11.40 p.m. **What does the log actually show?**',
    opts: ['The same time, to the minute — Samuel read it from the log.', '23:41 — one minute later than he remembered, so his figure came from memory.', '23:44 — he confused the temperature alarm with the humidity alarm.', 'The log gives no time for the alarm, only for the notification.'],
    ans: 1,
    why: 'Samuel said **11.40 p.m.**; the log says **23:41**. One minute is nothing — unless the assessor notices that the figure came **from memory**. In the report, every time comes **from Exhibit A**.',
  });

  d.list({
    title: 'Q2 · Q4 · Q5 — answer in a full sentence', tag: 'YOUR MOVE', page: 'Livret p. 12',
    instr: 'Complete the answer frames from Exhibit A. Then copy the full sentences into your booklet.',
    number: false, max: 21, maxA: 20, gap: 8,
    items: [
      { h: '2 · Who was in zone 2F after the works?' },
      { t: 'Lines [[20:04]] and [[20:19]] show that somebody was in zone 2F for [[fifteen minutes]] after the cabling team left at [[19:58]].' },
      { h: '4 · How long did the water run before anyone knew?' },
      { t: 'Between [[23:41]] (temperature alarm) and [[06:47]] (cleaning team), the water ran for about [[seven hours]].' },
      { h: '5 · What happened at 02:16 — and what does it prove?' },
      { t: 'Unit 3 [[shut down automatically]]: the damage was still [[spreading]]. It does [[not prove]] where the water came from.' },
    ],
    notesA: "Q4 : accepter aussi 23:42 → 06:47 (7 h 05), si l’élève part de la notification. Q5 : insister sur la limite de la preuve.",
  });

  d.mcq({
    title: 'Read the log against the room — Q3', tag: 'YOUR MOVE', page: 'Livret p. 12',
    q: '**3.** One line shows that somebody **could** have known during the night. Which one?',
    opts: ['23:41 — the temperature alarm reached its threshold.', '23:42 — a notification was sent to a mobile and marked //delivered//.', '02:16 — a server unit shut down automatically.', '06:47 — the cleaning team entered the ground floor.'],
    ans: 1,
    why: '23:42: a notification was **sent** and **delivered** to a mobile — the phone received it, so somebody **could** have known. It does not prove that anybody **read** it (see the IT expert, Séance 8).',
  });

  d.mcq({
    title: 'Q6 — the lawyer’s red pen', tag: 'YOUR MOVE', page: 'Livret p. 12',
    instr: 'The most dangerous line is **20:04**: it points at one person. Three sentences are dangerous — one is safe.',
    q: '**6.** Which sentence can go in the report?',
    opts: ['The site manager entered the technical room at 20:04.', 'Badge 0102 entered zone 2F at 20:04.', 'An access to zone 2F was recorded at 20:04.', 'Somebody sneaked into zone 2F at 20:04.'],
    ans: 2,
    why: 'It keeps the **fact** (time, zone) and names **nobody**. A = an accusation · B = a badge number identifies a person · D = a guess about intentions.',
    notes: "Q6 du livret : d’abord identifier la ligne (20:04) et la personne visée (le site manager), puis choisir la formulation. Accepter aussi 23:42 comme ligne dangereuse si c’est justifié.",
    notesA: "Prépare la scène 9 (« the fact stays, the number goes »). Le livret fait dire à Mark : « Do not write that badge number anywhere. Not yet. »",
  });

  d.tree({
    title: 'Can I write it in the report?', tag: 'METHOD', page: 'Livret p. 12',
    start: 'Something you want to write',
    steps: [
      { q: 'Is it only a **memory** or a **guess**?', hint: '“around eleven” · “I think” · “nobody was there”', yes: { h: 'NOT AS A FACT — check it first', t: '//Samuel remembers 11.40; the log shows 23:41.//', color: 'accent6' } },
      { q: 'Does it **name** someone — a name, a badge, a job title?', hint: 'badge 0102 · “site manager”', yes: { h: 'REMOVE THE NAME — KEEP THE FACT', t: '//An access to zone 2F **was recorded** at 20:04.//', color: 'accent1' } },
    ],
    last: { h: 'WRITE IT — with its time and its source', t: '//The temperature alarm went off at 23:41 (Exhibit A).//', color: 'accent3' },
  });

  d.section('Reporting verbs');
  d.cardGrid({
    title: 'Reporting verbs: how much do they commit you?', tag: 'GRAMMAR', page: 'Hors livret',
    perRow: 3,
    cards: [
      { label: 'NEUTRAL', big: 'say (that)', fr: 'dire', ex: 'Samuel **said** (that) the alarm went off at 11.40.' },
      { label: 'NEUTRAL + A PERSON', big: 'tell + sb', fr: 'dire à quelqu’un', ex: 'He **told us** (that) nobody was on site.' },
      { label: 'DOUBT', big: 'claim', fr: 'prétendre, affirmer', ex: 'Verdier **claims** the pipe is old. //Nothing proves it.//', color: 'accent6' },
      { label: 'FORMAL', big: 'report · state', fr: 'signaler · indiquer', ex: 'The cleaners **reported** water. The log **states** 23:41.', color: 'accent2' },
      { label: 'CERTAINTY', big: 'confirm', fr: 'confirmer', ex: 'The log **confirms** that unit 3 shut down at 02:16.', color: 'accent3' },
      { label: 'ATTENTION', big: 'say ≠ tell', fr: '✗ //He said me// · ✗ //say somebody//', ex: '✓ He **told me** · ✓ He **said to me**', kind: 'attention' },
    ],
  });

  d.tree({
    title: 'Say, tell, claim or confirm?', tag: 'GRAMMAR', page: 'Hors livret',
    start: 'Reporting what someone said',
    steps: [
      { q: 'Is there a **person** right after the verb?', hint: '… us · Mark · the insurer', yes: { h: 'TELL + PERSON', t: 'Iris **told Mark** that the floor was soaked.', color: 'accent2' } },
      { q: 'Do you **doubt** it — nothing supports it?', hint: 'no document, no witness', yes: { h: 'CLAIM', t: 'Verdier **claims** that the pipe is old.', color: 'accent6' } },
      { q: 'Is it in a **document**, or proved?', hint: 'the log · a photo · a report', yes: { h: 'CONFIRM · STATE · REPORT', t: 'The log **confirms** that unit 3 shut down.', color: 'accent3' } },
    ],
    last: { h: 'SAY (THAT)', t: 'Samuel **said** that the alarm went off at 11.40.', color: 'tx2' },
    notes: "Concordance des temps : « The floor is soaked. » → Iris told Mark that the floor was soaked.",
  });

  d.fixText({
    title: 'Mark’s email — check it before he sends it', tag: 'YOUR MOVE', page: 'Hors livret',
    instr: 'Mark asks you to read his email to the insurer. Find **six mistakes**: grammar, a time, a verb — and one dangerous sentence.',
    instrA: 'A report email = the **time from the log**, the **right reporting verb**, **no names**.',
    docLabel: 'DRAFT EMAIL', docTitle: 'To: the insurer — Subject: Atlas House, water damage', count: 6, docColor: 'accent2',
    paras: [
      'Dear Sir or Madam,',
      'This morning our analyst {{said us}}@@ told us@@ that the temperature alarm went off {{at around 11.40}}@@ at 23:41@@. The log {{claims}}@@ confirms@@ that unit 3 shut down at 02:16.',
      '{{The site manager entered zone 2F at 20:04.}}@@ An access to zone 2F was recorded at 20:04.@@ The cleaners {{have found}}@@ found@@ the water at 6.50, and it ran {{during}}@@ for@@ about seven hours.',
      'Kind regards, Mark Shaw',
    ],
    notes: "Lecture individuelle (3 min), comparaison par deux, puis correction collective. Chaque correction est justifiée par une règle vue dans la séance.",
    notesA: "1. say → tell + personne · 2. l’heure vient du journal (23:41), pas de la mémoire · 3. claim exprime un doute : un journal confirme · 4. ne nommer personne : tournure passive · 5. heure précise → prétérit (séance 3) · 6. pendant + durée → for.",
  });

  d.game({
    title: 'Press conference', page: 'Hors livret', icon: 'FaMicrophone', color: 'accent2',
    tagline: 'Atlas House speaks to the press — the journalists report it.',
    meta: 'Whole class · 15 minutes · speaking, listening, reporting',
    steps: [
      'Two **spokespeople** prepare a 30-second statement from Exhibit A — facts only.',
      'The **journalists** ask questions: //What time exactly…? Can you confirm…? Who…?//',
      'The spokespeople answer — careful: **no names, no badge numbers**!',
      'Each journalist says a one-line **headline** with a reporting verb: //Atlas House confirms that…//',
    ],
    say: ['//Can you confirm that…?//', '//What time exactly did…?//', '//We cannot confirm that yet.//', '//No comment at this stage.//', '//Atlas House **claims / confirms / reports** that…//'],
    win: 'the best headline: **true, precise — and it names nobody.**',
    notes: "Variante : un journaliste « à scandale » essaie d’obtenir un nom ; les porte-parole doivent rester factuels (passif, « an access was recorded »).",
  });

  d.closing({
    cliff: 'The log does not say what Samuel remembered. Before ten o’clock, you will need eight verbs — and **two forms of each**: the dated fact, and the result.',
    homework: ['Learn the **words of a log** (matching + word search).', 'Read Exhibit A aloud at home: every time, **two ways**.', 'Learn the reporting verbs: **say, tell, claim, report, confirm**.'],
    exit: 'In one sentence: what does line **23:42** prove — and what does it **not** prove?',
  });
};
