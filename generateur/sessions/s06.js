// Séance 6 — Scene 3, 09.05 (livret p. 11–12)
exports.meta = {
  n: 6, slug: 'Scene3_The_log', title: 'What the log really says',
  subtitle: 'A printed sheet, eight lines, and one contradiction.', pages: 'Livret p. 11–12', img: 's3_log', time: '09.05', sceneLabel: 'SCENE 3',
  coverNotes: "Scène 3 : l’Exhibit A (journal de la GTB) contredit ce qui a été dit dans la salle. Compétences : lire des données, comparer deux sources, nommer sans accuser.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'A reading of **the log against the room** — six answers the insurer cannot contest.',
    language: 'Reading 24-hour times aloud · durations (//from… to, between… and, for//) · comparing sources (//matches, contradicts, one minute later//) · reporting verbs',
    skills: 'Reading data critically · cross-checking two sources · naming nobody',
    agenda: [['Warm-up: spelling', 5], ['Scene 3 + Exhibit A (p. 11)', 10], ['Reading a log aloud', 10], ['Your move Q1–Q3 (p. 12)', 15], ['Your move Q4–Q6', 20], ['The room vs the log', 10], ['Reporting verbs', 15], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: -ing and past forms', tag: 'WARM-UP', page: 'Séance 5',
    cols: 2,
    items: ['run → [[running / ran]]', 'stop → [[stopping / stopped]]', 'notice → [[noticing / noticed]]', 'carry → [[carrying / carried]]', 'leave → [[leaving / left]]', 'lie (mentir) → [[lying / lied]]'],
  });

  d.scene({
    title: 'What the log really says', tag: 'SCENE', page: 'Livret p. 11', img: 's3_log', time: '09.05', sceneLabel: 'SCENE 3',
    alt: 'Samuel taps a line of the printed alarm log on the table while Mark and Iris look on',
    text: ['Samuel puts a printout on the table. It is the **building management system log** for the night.', '**Eight lines.** He taps the fourth one with his finger and says nothing.'],
    ask: 'Why would someone say nothing — and just tap a line?',
    notes: "Bulles de l’image : « Do not write that badge number anywhere. » / « The log does not say what you think it says. » Faire émettre des hypothèses avant de projeter l’Exhibit.",
  });

  d.exhibit({
    title: 'Exhibit A — the night log', tag: 'EXHIBIT', page: 'Livret p. 11',
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
    side: { label: 'READ IT LIKE AN ASSESSOR', lines: ['Which line is **one minute** off what Samuel said?', 'Which line shows **somebody** in 2F after the works?', 'Which line shows somebody **could** have known?'] },
    notes: "Lecture à voix haute de chaque ligne (heures en deux façons). Laisser 2 minutes de lecture silencieuse avec les trois questions de droite.",
  });

  d.table({
    title: 'The words of a log', tag: 'VOCABULARY', page: 'Livret p. 11',
    headers: ['ENGLISH', 'FRANÇAIS', 'IN EXHIBIT A'],
    colW: [3.0, 3.1, 6.03], boldCol: 0,
    rows: [
      ['a threshold', 'un seuil', 'TEMPERATURE ALARM — **threshold** 28 °C'],
      ['an access badge', 'un badge d’accès', '**access badge** 0447'],
      ['an entry · an exit', 'une entrée · une sortie', 'badge 0102 — **entry** … — **exit**'],
      ['a notification', 'une alerte, une notification', 'Alarm **notification** sent'],
      ['delivered', 'remis (au destinataire)', 'status: **delivered**'],
      ['humidity', 'l’humidité', '**HUMIDITY** ALARM — threshold 85 %'],
      ['an automatic shutdown', 'un arrêt automatique', 'unit 3 — **automatic shutdown**'],
      ['GF · 2F', 'rez-de-chaussée · 2e étage', 'Zone **GF** — cleaning team'],
    ],
  });

  d.cards({
    title: 'Reading a log aloud', tag: 'GRAMMAR', page: 'Livret p. 11–12',
    perRow: 3,
    cards: [
      { h: 'READ THE TIME', color: 'accent2', f: '23:41', lines: ['//twenty-three forty-one//', 'or //eleven forty-one p.m.//', '20:04 → //twenty oh four// · 02:16 → //two sixteen a.m.//'] },
      { h: 'GIVE A DURATION', color: 'accent1', f: 'from 20:04 to 20:19', lines: ['= **fifteen minutes**', '**between** 23:41 **and** 06:47 = **seven hours and six minutes**', 'The water ran **for about seven hours**.'] },
      { h: 'COMPARE', color: 'accent3', f: 'one minute later than', lines: ['23:41 is **one minute later than** Samuel said.', 'The humidity alarm came **three minutes after** the temperature alarm.', 'The log **matches / contradicts / confirms** …'] },
    ],
    foot: { kind: 'trap', text: '//pendant sept heures// → **for** seven hours (✗ //during seven hours//) · **during** + a noun: //during the night//.' },
  });

  d.mcq({
    title: 'Read the log against the room — Q1', tag: 'YOUR MOVE', page: 'Livret p. 12',
    q: '**1.** Samuel said the alarm went off at 11.40 p.m. **What does the log actually show?**',
    opts: ['The same time, to the minute — Samuel read it from the log.', '23:41 — one minute later than he remembered, so his figure came from memory.', '23:44 — he confused the temperature alarm with the humidity alarm.', 'The log gives no time for the alarm, only for the notification.'],
    ans: 1,
    why: 'Samuel said **11.40 p.m.**; the log says **23:41**. One minute is nothing — unless the assessor notices that the figure came **from memory**. In the report, every time comes **from Exhibit A**.',
    notes: "Demander un vote à main levée avant la correction.",
  });

  d.exercise({
    title: 'Read the log against the room — Q2 · Q4 · Q5', tag: 'YOUR MOVE', page: 'Livret p. 12',
    items: [
      { q: '**2.** Samuel said that nobody was on site that night. **Which line shows that somebody was in zone 2F after the cabling team had gone, and for how long?**', a: 'Lines **20:04** (badge 0102 — entry) and **20:19** (exit): somebody was in zone 2F for **fifteen minutes** after the cabling team left at 19:58.' },
      { q: '**4.** Between which two lines did the water run without anyone knowing? Give the length of that period.', a: 'Between **23:41** (temperature alarm) and **06:47** (cleaning team entry): about **seven hours** (7 h 06).' },
      { q: '**5.** What happened at 02:16, and what does it prove about the water?', a: 'Unit 3 of rack A2 **shut down automatically**: the damage **was still spreading** more than two hours after the alarm. It does **not** prove where the water came from.' },
    ],
    number: false,
    notesA: "Q4 : accepter aussi 23:42 → 06:47 (7 h 05), si l’élève part de la notification. Q5 : insister sur la limite de la preuve.",
  });

  d.mcq({
    title: 'Read the log against the room — Q3', tag: 'YOUR MOVE', page: 'Livret p. 12',
    q: '**3.** One line shows that somebody **could** have known during the night. Which one?',
    opts: ['23:41 — the temperature alarm reached its threshold.', '23:42 — a notification was sent to a mobile and marked //delivered//.', '02:16 — a server unit shut down automatically.', '06:47 — the cleaning team entered the ground floor.'],
    ans: 1,
    why: '23:42: a notification was **sent** and **delivered** to a mobile — the phone received it, so somebody **could** have known. It does not prove that anybody **read** it (see the IT expert, next session).',
  });

  d.exercise({
    title: 'Read the log against the room — Q6', tag: 'YOUR MOVE', page: 'Livret p. 12',
    items: [
      { q: '**6.** Which single line of this log is the most dangerous for us, and who does it point at? Answer in two lines — **and be careful how you name that person.**', a: '**20:04** — badge 0102, entry, “site manager”: it places one identifiable person in zone 2F **after** the works, a few hours before the alarm. Careful wording: //An access to zone 2F was recorded at 20:04.// — no badge number, no job title.' },
    ],
    number: false,
    expect: ['Name the **line**, not the person.', 'Use an **impersonal subject**: //an access was recorded…//'],
    traps: ['Also acceptable: **23:42** (the mobile that received the alert) — if justified.', '✗ //The site manager entered the room at 20:04.// = an accusation.'],
    notesA: "Prépare la scène 9 (« the fact stays, the number goes »). Le livret fait dire à Mark à la fin de la scène 3 : « Do not write that badge number anywhere. Not yet. »",
  });

  d.table({
    title: 'The room vs the log', tag: '+ EXTRA', page: 'Livret p. 8–12',
    intro: 'What was said at 08.15 — what Exhibit A shows — your verdict.',
    headers: ['IN THE ROOM (08.15)', 'IN THE LOG', 'VERDICT'],
    colW: [4.6, 3.3, 4.23],
    rows: [
      ['Samuel: the alarm went off at **11.40 p.m.**', '[[23:41]]', '[[one minute off — from memory]]'],
      ['Iris: the team was working **until eight**', '[[exit at 19:58]]', '[[roughly matches — write 19:58]]'],
      ['Samuel: **nobody** was on site', '[[badge entry 20:04 → 20:19]]', '[[contradicted (until 20:19)]]'],
      ['Mark: **two units** have stopped', '[[only unit 3 (02:16)]]', '[[partly confirmed — check unit 2]]'],
      ['Briefing: **nobody heard** it', '[[notification delivered 23:42]]', '[[not proved — somebody could have known]]'],
    ],
    notes: "Synthèse ajoutée : elle prépare directement « Sort the witnesses » (p. 16, séance 8).",
  });

  d.cards({
    title: 'Reporting verbs: how much do they commit you?', tag: 'GRAMMAR', page: 'Hors livret',
    perRow: 4,
    cards: [
      { h: 'SAID / TOLD', color: 'accent5', f: 'neutral', lines: ['Samuel **said (that)** the alarm went off at 11.40.', 'He **told us (that)** nobody was on site.'] },
      { h: 'CLAIMED', color: 'accent6', f: 'doubt', lines: ['Verdier **claims** the pipe is old.', '= he says so; nothing proves it'] },
      { h: 'REPORTED / STATED', color: 'accent2', f: 'formal', lines: ['The cleaners **reported** water in the room.', 'The log **states** 23:41.'] },
      { h: 'CONFIRMED', color: 'accent3', f: 'certainty', lines: ['The log **confirms** that unit 3 shut down at 02:16.'] },
    ],
    foot: { kind: 'trap', text: '//dire à quelqu’un// → **tell** somebody (✗ //say somebody//) · //He said me// ✗ → **He told me** ✓ / **He said to me** ✓' },
  });

  d.exercise({
    title: 'Report it — at the right level of certainty', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Rewrite each statement with a reporting verb that shows how much you trust it.',
    items: [
      'Samuel: “The alarm went off at 11.40.” (the log says 23:41) → [[Samuel said that the alarm went off at 11.40, but the log shows 23:41.]]',
      'Verdier: “The pipe is old.” (nothing supports it) → [[Verdier claims that the pipe is old.]]',
      'The log: unit 3 shut down at 02:16. → [[The log confirms that unit 3 shut down at 02:16.]]',
      'Iris to Mark: “The floor is soaked.” → [[Iris told Mark that the floor was soaked.]]',
    ],
  });

  d.closing({
    cliff: 'The log does not say what Samuel remembered. Before ten o’clock, you will need eight verbs — and **two forms of each**: the dated fact, and the result.',
    homework: ['Learn the words of a log.', 'Read Exhibit A aloud at home: every time, **two ways**.', 'Learn the reporting verbs: **say, tell, claim, report, confirm**.'],
    exit: 'In one sentence: what does line **23:42** prove — and what does it **not** prove?',
  });
};
