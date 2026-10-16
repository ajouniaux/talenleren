// Séance 6 — Scene 3, 09.05 (livret p. 11–12) — light style, modelled on the Séance 1 deck
exports.meta = {
  n: 6, style: 'light', slug: 'Scene3_The_log', title: 'What the log really says', coverTitle: 'What the log\nreally says',
  subtitle: 'A printed sheet, eight lines, and one contradiction.', pages: 'Livret p. 11–12', img: 's3_log', time: '09.05', sceneLabel: 'SCENE 3',
  coverNotes: "Séance 6 — Scène 3 (09.05), livret p. 11–12 : l’Exhibit A (journal de la GTB) contredit ce qui a été dit dans la salle.\n"
    + "Objectifs : lire des données, dire les heures (24 h, a.m. / p.m.), donner une durée, comparer deux sources, rapporter des propos (say, tell, claim, confirm), nommer sans accuser.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · scène + Exhibit A + mots du journal (15') · lire les heures + Time bingo (15') · Back to the board (10') · Your move Q1–Q6 (25') · arbre « Can I write it? » + room vs log (10') · reporting verbs + Press conference (10').\n"
    + "Les diapositives GAME et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.list({
    title: 'Warm-up: -ing and past forms', tag: 'WARM-UP', page: 'Séance 5',
    instr: 'Write the -ing form and the past form. Use the spelling tree.',
    cols: 2, max: 26, maxA: 24,
    items: ['run → [[running / ran]]', 'stop → [[stopping / stopped]]', 'notice → [[noticing / noticed]]', 'carry → [[carrying / carried]]', 'leave → [[leaving / left]]', 'lie (mentir) → [[lying / lied]]'],
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
    ...EXHIBIT_A, docTitle: 'Night log, Monday to Tuesday', title: 'Read it like an assessor', tag: 'READING', page: 'Livret p. 11',
    questions: [
      { q: 'Which line is **one minute** off what Samuel said?', a: '**23:41** — Samuel said 11.40.', rows: [3] },
      { q: 'Which line shows **somebody** in 2F after the works?', a: '**20:04** — an entry, until the exit at **20:19**.', rows: [1, 2] },
      { q: 'Which line shows that somebody **could** have known?', a: '**23:42** — a notification was **delivered**.', rows: [4] },
    ],
    notes: "Lecture silencieuse, 2 minutes. Les élèves répondent par le numéro de ligne (l’heure), pas par un nom.",
    notesA: "Les lignes surlignées portent le numéro de la question. Ces trois lignes reviennent dans Your move Q1–Q3.",
  });

  d.table({
    title: 'The words of a log', tag: 'WORD FILE', page: 'Livret p. 11',
    headers: ['ENGLISH', 'FRANÇAIS', 'IN EXHIBIT A'], colW: [3.1, 3.2, 5.83], boldCol: 0, align: ['center', 'center', 'left'],
    rows: [
      ['a log · a line', 'un journal · une ligne', 'Samuel taps a **line** of the **log**.'],
      ['a printout', 'une impression papier', 'He puts a **printout** on the table.'],
      ['a threshold', 'un seuil', 'TEMPERATURE ALARM — **threshold** 28 °C'],
      ['an access badge', 'un badge d’accès', '**access badge** 0447'],
      ['an entry · an exit', 'une entrée · une sortie', 'badge 0102 — **entry** … — **exit**'],
      ['a notification · delivered', 'une alerte · remise', 'Alarm **notification** sent — status: **delivered**'],
      ['humidity · a sensor', 'l’humidité · un capteur', '**HUMIDITY** ALARM — threshold 85 %'],
      ['an automatic shutdown', 'un arrêt automatique', 'unit 3 — **automatic shutdown**'],
      ['a rack · a unit', 'une baie · un serveur', 'Server **rack** A2 — **unit** 3'],
      ['GF · 2F', 'rez-de-chaussée · 2e étage', 'Zone **GF** — cleaning team'],
    ],
    notes: "Prononciation : threshold /ˈθreʃhəʊld/ · humidity /hjuːˈmɪdəti/ · sensor /ˈsensə/ · GF = ground floor (UK) = first floor (US) !",
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
    notes: "Faire lire Exhibit A ligne par ligne avec deux lectures de l’heure. ✗ during seven hours → for seven hours.",
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
    notes: "Lire dans le désordre, en variant les formes :\n20:04 twenty oh four / eight oh four p.m. · 23:41 twenty-three forty-one / eleven forty-one p.m. · 06:47 six forty-seven a.m. / thirteen minutes to seven · 02:16 two sixteen a.m. / sixteen minutes past two · 19:58 nineteen fifty-eight / two minutes to eight · 23:42 eleven forty-two p.m. · 20:19 eight nineteen p.m. · 23:44 sixteen minutes to midnight · 12:00 noon / midday · 00:00 midnight · 07:15 a quarter past seven · 18:30 half past six p.m. · 13:05 five past one p.m. · 08:50 ten to nine a.m. · 21:40 twenty to ten p.m. · 06:50 ten to seven a.m.\nVérifier la ligne gagnante à voix haute.",
  });

  d.compare({
    title: 'Back to the board — read a log aloud', tag: 'SPEAKING', page: 'Hors livret',
    left: { h: 'LOG 1 — A reads, B writes', color: 'accent2', icon: 'FaVolumeUp', bullets: false, items: ['**18:30** — Zone GF — main door — locked', '**21:15** — Zone 1F — motion sensor — alarm', '**21:32** — security patrol — arrived on site', '**21:40** — Zone 1F — window open — false alarm', '**00:05** — Zone 2F — temperature 24 °C — normal'] },
    right: { h: 'LOG 2 — B reads, A writes', color: 'accent4', icon: 'FaVolumeUp', bullets: false, items: ['**06:12** — Zone GF — badge entry — cleaning team', '**07:03** — car park — barrier — opened', '**08:45** — Zone 3F — lift 2 — out of order', '**10:20** — lift engineer — arrived on site', '**12:00** — Zone 3F — lift 2 — back in service'] },
    note: { kind: 'tip', label: 'How to play', text: 'B sits **with their back to the screen** and writes Log 1 as A reads it. Then swap for Log 2. Check together: every time right? Read times **two ways**.' },
    notes: "Dictée en binôme : écoute, prononciation des heures, épellation éventuelle (« Sorry, did you say fifteen or fifty? »). Ces deux journaux sont inventés, hors dossier.",
  });

  d.ladder({
    title: 'The room vs the log: words to compare', tag: 'VOCABULARY', page: 'Livret p. 12',
    rows: [
      { pct: '✓', h: 'MATCHES', words: 'matches · confirms · is consistent with', ex: 'The log confirms that unit 3 shut down at 02:16.', color: 'accent3' },
      { pct: '≈', h: 'ROUGHLY', words: 'roughly matches · is close to', ex: '“Until eight” roughly matches 19:58.', color: '5E9A3C' },
      { pct: '+1 min', h: 'A GAP', words: 'one minute later than · three minutes after', ex: '23:41 is one minute later than Samuel said.', color: 'accent2' },
      { pct: '½', h: 'PARTLY', words: 'partly confirms · only shows', ex: 'The log only shows unit 3 — not two units.', color: 'accent1' },
      { pct: '✗', h: 'CONTRADICTS', words: 'contradicts · does not match', ex: 'The 20:04 entry contradicts “nobody was on site”.', color: 'accent6' },
      { pct: '∅', h: 'NO RECORD', words: 'the log does not say · there is no record of', ex: 'There is no record of anyone reading the alert.', color: 'accent5' },
    ],
    notes: "Outil pour les questions Q1 à Q6 et pour le tableau « The room vs the log ».",
  });

  d.section('Your move');
  d.mcq({
    title: 'Read the log against the room — Q1', tag: 'YOUR MOVE', page: 'Livret p. 12',
    instr: 'Vote with your fingers: one finger = A, two = B…',
    q: '**1.** Samuel said the alarm went off at 11.40 p.m. **What does the log actually show?**',
    opts: ['The same time, to the minute — Samuel read it from the log.', '23:41 — one minute later than he remembered, so his figure came from memory.', '23:44 — he confused the temperature alarm with the humidity alarm.', 'The log gives no time for the alarm, only for the notification.'],
    ans: 1,
    why: 'Samuel said **11.40 p.m.**; the log says **23:41**. One minute is nothing — unless the assessor notices that the figure came **from memory**. In the report, every time comes **from Exhibit A**.',
    notes: "Vote à main levée avant la correction.",
  });

  d.list({
    title: 'Read the log against the room — Q2 · Q4 · Q5', tag: 'YOUR MOVE', page: 'Livret p. 12',
    number: false, max: 22, sizeA: 17,
    items: [
      { q: '**2.** Samuel said that nobody was on site that night. **Which line shows that somebody was in zone 2F after the cabling team had gone, and for how long?**', a: 'Lines **20:04** (entry) and **20:19** (exit): somebody was in zone 2F for **fifteen minutes** after the cabling team left at 19:58.' },
      { q: '**4.** Between which two lines did the water run without anyone knowing? Give the length of that period.', a: 'Between **23:41** (temperature alarm) and **06:47** (cleaning team entry): about **seven hours** (7 h 06).' },
      { q: '**5.** What happened at 02:16, and what does it prove about the water?', a: 'Unit 3 of rack A2 **shut down automatically**: the damage **was still spreading** more than two hours after the alarm. It does **not** prove where the water came from.' },
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

  d.list({
    title: 'Read the log against the room — Q6', tag: 'YOUR MOVE', page: 'Livret p. 12',
    number: false, max: 24, maxA: 20,
    items: [
      { q: '**6.** Which single line of this log is the most dangerous for us, and who does it point at? Answer in two lines — **and be careful how you name that person.**', a: '**20:04** — badge 0102, entry, “site manager”: it places one identifiable person in zone 2F **after** the works, a few hours before the alarm. Careful wording: //An access to zone 2F was recorded at 20:04.// — no badge number, no job title.' },
    ],
    note: { kind: 'watch', text: 'also acceptable: **23:42** (the mobile that received the alert), if justified · ✗ //The site manager entered the room at 20:04.// = an accusation.' },
    notesA: "Prépare la scène 9 (« the fact stays, the number goes »). Le livret fait dire à Mark à la fin de la scène 3 : « Do not write that badge number anywhere. Not yet. »",
  });

  d.tree({
    title: 'Can I write it in the report?', tag: 'METHOD', page: 'Livret p. 12',
    start: 'Something you want to write',
    steps: [
      { q: 'Is it only a **memory** or a **guess**?', hint: '“around eleven” · “I think” · “nobody was there”', yes: { h: 'NOT AS A FACT — check it first', t: '//Samuel remembers 11.40; the log shows 23:41.//', color: 'accent6' } },
      { q: 'Does it **name** someone — a name, a badge, a job title?', hint: 'badge 0102 · “site manager”', yes: { h: 'REMOVE THE NAME — KEEP THE FACT', t: '//An access to zone 2F **was recorded** at 20:04.//', color: 'accent1' } },
    ],
    last: { h: 'WRITE IT — with its time and its source', t: '//The temperature alarm went off at 23:41 (Exhibit A).//', color: 'accent3' },
    notes: "Passer les lignes de l’Exhibit A dans l’arbre. La tournure passive (was recorded, was sent) permet de rapporter un fait sans nommer personne.",
  });

  d.table({
    title: 'The room vs the log', tag: '+ EXTRA', page: 'Livret p. 8–12',
    instr: 'What was said at 08.15 — what Exhibit A shows — your verdict, with a word from the comparison scale.',
    headers: ['IN THE ROOM (08.15)', 'IN THE LOG', 'VERDICT'], colW: [4.6, 3.3, 4.23], align: ['left', 'center', 'center'],
    rows: [
      ['Samuel: the alarm went off at **11.40 p.m.**', '[[23:41]]', '[[one minute later — from memory]]'],
      ['Iris: the team was working **until eight**', '[[exit at 19:58]]', '[[roughly matches — write 19:58]]'],
      ['Samuel: **nobody** was on site', '[[entry 20:04 → exit 20:19]]', '[[contradicts it (until 20:19)]]'],
      ['Mark: **two units** have stopped', '[[only unit 3 (02:16)]]', '[[partly confirms — check unit 2]]'],
      ['Briefing: **nobody heard** it', '[[notification delivered 23:42]]', '[[not proved — somebody could have known]]'],
    ],
    notes: "Synthèse : elle prépare directement « Sort the witnesses » (p. 16, séance 8).",
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
    notes: "Concordance des temps : au discours indirect après un verbe au passé, le présent recule au prétérit (is → was).",
  });

  d.list({
    title: 'Report it — at the right level of certainty', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Rewrite each statement with a reporting verb that shows how much you trust it.',
    max: 22, maxA: 19,
    noteQ: { kind: 'tip', label: 'One step back', text: '//“The floor **is** soaked.”// → Iris told Mark that the floor **was** soaked.' },
    items: [
      'Samuel: “The alarm went off at 11.40.” //(the log says 23:41)// → [[Samuel said that the alarm went off at 11.40, but the log shows 23:41.]]',
      'Verdier: “The pipe is old.” //(nothing supports it)// → [[Verdier claims that the pipe is old.]]',
      'The log: unit 3 shut down at 02:16. → [[The log confirms that unit 3 shut down at 02:16.]]',
      'Iris to Mark: “The floor is soaked.” → [[Iris told Mark that the floor was soaked.]]',
    ],
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
    notes: "Variante : un journaliste « à scandale » essaie d’obtenir un nom ; les porte-parole doivent rester factuels (passif, « an access was recorded »). Bon réinvestissement de l’arbre « Can I write it in the report? ».",
  });

  d.closing({
    cliff: 'The log does not say what Samuel remembered. Before ten o’clock, you will need eight verbs — and **two forms of each**: the dated fact, and the result.',
    homework: ['Learn the **words of a log**.', 'Read Exhibit A aloud at home: every time, **two ways**.', 'Learn the reporting verbs: **say, tell, claim, report, confirm**.'],
    exit: 'In one sentence: what does line **23:42** prove — and what does it **not** prove?',
  });
};
