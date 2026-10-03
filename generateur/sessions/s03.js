// Séance 3 — Past simple toolkit (livret p. 5–7)
exports.meta = {
  n: 3, slug: 'Scene1_Past_simple_toolkit', title: 'The forms every line will stand on',
  subtitle: 'Past simple · the verbs an incident is made of', pages: 'Livret p. 5–7', img: 'poster_past_simple', time: '06.58', sceneLabel: 'SCENE 1',
  coverNotes: "Séance de consolidation grammaticale : prétérit (formes, prononciation, orthographe) et verbes à particule du Word file p. 7.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'The past forms of the report — **fast and without mistakes** — and the eight phrasal verbs an incident is made of.',
    language: 'Past simple: regular / irregular, negative, question, subject question · pronouncing **-ed** · phrasal verbs (//go off, break down, shut down…//)',
    skills: 'Accuracy under time pressure (Dry run) · using phrasal verbs in a professional context',
    agenda: [['Warm-up: times and three verbs', 10], ['The past simple poster (p. 5)', 10], ['Four forms + one trap', 10], ['Pronouncing -ed', 10], ['Dry run A–C (p. 6)', 15], ['Correction', 5], ['Word file: phrasal verbs (p. 7)', 15], ['Extra practice', 10], ['Wrap-up', 5]],
    notes: "Rythme soutenu : les Dry runs sont chronométrés (3 minutes).",
  });

  d.exercise({
    title: 'Warm-up: times and dated facts', tag: 'WARM-UP', page: 'Séance 2',
    cols: 2,
    items: ['06.58 → [[six fifty-eight / two minutes to seven]]', '08.15 → [[eight fifteen / a quarter past eight]]', '23.41 → [[eleven forty-one p.m.]]', 'I need the timeline ___ nine. → [[by]]', 'find → [[found]]', 'go off → [[went off]]', 'hear → [[heard]]', 'The alarm [[went off]] at 23.41. (go off)'],
    notes: "Oral rapide.",
  });

  d.picture({
    title: 'The past simple', tag: 'FIELD NOTE', page: 'Livret p. 5', img: 'poster_past_simple',
    capLabel: 'THE RULES', capColor: 'accent3', capIcon: 'FaBook',
    caption: ['Regular: **base + -ed** — work → worked', 'Spelling: carr**ied** · sto**pp**ed · live**d**', 'Irregular: **no pattern — learn by heart**', 'Negative: **didn’t + base form**', 'Question: **Did + subject + base form?**'],
    notes: "Projeter le poster (p. 5 du livret, ici remis à l’endroit). Faire formuler les règles par les élèves avant de montrer la colonne de droite.",
  });

  d.cards({
    title: 'Past simple: four forms', tag: 'GRAMMAR', page: 'Livret p. 5–6',
    perRow: 4,
    cards: [
      { h: 'AFFIRMATIVE', color: 'accent3', f: 'subject + V-ed / V2', lines: ['The alarm **went off** at 23.41.', 'The cleaners **called** Mark.'] },
      { h: 'NEGATIVE', color: 'accent6', f: 'didn’t + base', lines: ['The guard **didn’t hear** the alarm.', '✗ //didn’t heard//'] },
      { h: 'QUESTION', color: 'accent2', f: 'Did + subject + base?', lines: ['**Did** the guard **hear** the alarm?', '✗ //Did he heard?//'] },
      { h: 'SUBJECT QUESTION', color: 'accent4', f: 'Who / What + V2?', lines: ['**Who found** the water?', '**What happened?** — no //did//'] },
    ],
    foot: { kind: 'trap', text: 'Après **did / didn’t**, le verbe revient à la base : la marque du passé n’apparaît qu’**une seule fois**. //Did you saw// ✗ → //Did you **see**// ✓' },
    notes: "La 4e carte (question sujet) sera reprise en séance 7 (Dry run p. 14 : « Who entered at 20.04? »).",
  });

  d.cards({
    title: 'Pronouncing -ed: three sounds', tag: 'PRONUNCIATION', page: 'Hors livret',
    perRow: 3,
    cards: [
      { h: '/t/', color: 'accent2', f: 'locked · checked', lines: ['after **voiceless** sounds: p, k, f, s, sh, ch', 'stopped · noticed · washed'] },
      { h: '/d/', color: 'accent3', f: 'called · opened', lines: ['after **voiced** sounds (vowels, b, g, l, m, n, v…)', 'arrived · cleaned · logged'] },
      { h: '/ɪd/', color: 'accent1', f: 'started · recorded', lines: ['only after **t** or **d**: one extra syllable', 'inspected · flooded · reported'] },
    ],
    foot: { kind: 'tip', text: 'Only **t** and **d** add a syllable: //lock-ed// ✗ → /lɒkt/ ✓ · //record-ed// /rɪˈkɔːdɪd/ ✓' },
    notes: "Faire répéter en chœur ; mains sur la gorge pour sentir la vibration (voiced / voiceless).",
  });

  d.exercise({
    title: '/t/, /d/ or /ɪd/?', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Say each verb aloud, then write the sound of the ending.',
    cols: 2,
    items: ['locked → [[/t/]]', 'recorded → [[/ɪd/]]', 'called → [[/d/]]', 'noticed → [[/t/]]', 'started → [[/ɪd/]]', 'opened → [[/d/]]', 'checked → [[/t/]]', 'flooded → [[/ɪd/]]', 'arrived → [[/d/]]', 'reported → [[/ɪd/]]'],
    notes: "Correction orale, en insistant sur les /t/ (locked, noticed) souvent prononcés /ɪd/.",
  });

  d.exercise({
    title: 'Three minutes on the forms you will write today', tag: 'DRY RUN', page: 'Livret p. 6',
    instr: 'A · Write the past form. Six are irregular; two are traps.',
    cols: 2,
    items: ['find → [[found]]', 'go off → [[went off]]', 'hear → [[heard]]', 'begin → [[began]]', 'leave → [[left]]', 'lock → [[locked — regular!]]', 'notice → [[noticed — regular!]]', 'shut → [[shut]]'],
    expect: ['**Irregular** = learn by heart.', 'A **trap** = a regular verb you //expect// to be irregular.', 'Three minutes, alone.'],
    traps: ['**lock**, **notice**: regular → //locked, noticed// (/t/).', '**shut → shut**: same form (like //put, cut, set//).', '**begin → began** (≠ begun).'],
    notes: "Chronométrer 3 minutes pour A, B et C (comme dans le livret).",
  });

  d.exercise({
    title: 'Put the clock in the sentence', tag: 'DRY RUN', page: 'Livret p. 6',
    instr: 'B · Rewrite each as a full sentence with the time.',
    items: ['cleaners / water / 6.50 → [[The cleaners found the water at 6.50 a.m.]]', 'alarm / go off / 11.41 p.m. → [[The alarm went off at 11.41 p.m.]]', 'team / leave / 7.58 p.m. → [[The team left at 7.58 p.m.]]'],
    traps: ['**at** + a precise time.', 'A time → **past simple** (✗ //has gone off at…//).'],
    notes: "Exiger phrase complète : sujet + verbe au prétérit + at + heure.",
  });

  d.exercise({
    title: 'Turn each fact into a negative, then a question', tag: 'DRY RUN', page: 'Livret p. 6',
    instr: 'C · Two facts, two negatives, two questions.',
    number: false,
    items: [{ h: '1 · The guard heard the alarm.' }, 'negative → [[The guard didn’t hear the alarm.]]', 'question → [[Did the guard hear the alarm?]]', { h: '2 · The cleaners found the leak at midnight.' }, 'negative → [[The cleaners didn’t find the leak at midnight.]]', 'question → [[Did the cleaners find the leak at midnight?]]'],
    traps: ['did / didn’t + **base**: //hear//, //find//.', 'Formal report: **did not** (no contraction).'],
    notes: "Erreur attendue : « didn’t heard », « Did they found ».",
  });

  d.table({
    title: 'The verbs an incident is made of', tag: 'WORD FILE', page: 'Livret p. 7',
    intro: 'An incident is told through phrasal verbs. The verb alone is not enough, and the particle changes everything.',
    headers: ['PHRASAL VERB', 'FRANÇAIS', 'DANS CE DOSSIER'],
    colW: [2.6, 3.0, 6.53], boldCol: 0,
    rows: [
      ['to go off', 'se déclencher', 'The alarm **went off** at 11.41.'],
      ['to break down', 'tomber en panne', 'Two units **broke down** during the night.'],
      ['to shut down', 's’arrêter, s’éteindre', 'Rack A2 **shut down** automatically.'],
      ['to turn up', 'arriver, se présenter', 'Nobody **turned up** before 6.47.'],
      ['to look into', 'examiner', 'I will **look into** the log this morning.'],
      ['to sort out', 'régler, démêler', 'We must **sort this out** before Friday.'],
      ['to call out', 'faire venir (un technicien)', 'Should we **call out** an engineer today?'],
      ['to put off', 'reporter', 'We cannot **put off** the decision.'],
    ],
    notes: "Lecture, répétition, puis faire produire une phrase par verbe à propos de l’incident.",
  });

  d.cards({
    title: 'How phrasal verbs work', tag: 'GRAMMAR', page: 'Livret p. 7',
    perRow: 2,
    cards: [
      { h: 'INSEPARABLE', color: 'accent2', f: 'look into + the log', lines: ['I will **look into the log**. ✗ //look the log into//', 'No object at all: the alarm **went off** · two units **broke down** · nobody **turned up**'] },
      { h: 'SEPARABLE', color: 'accent1', f: 'sort out the claim / sort it out', lines: ['We must **sort out the claim** = **sort the claim out**.', 'With a pronoun, the pronoun goes **in the middle**: **sort it out** ✓ — ✗ //sort out it//', 'Also: **call out** an engineer · **put off** the decision · **shut down** the rack'] },
    ],
    foot: { kind: 'tip', text: 'The **particle changes the meaning**: go **off** (se déclencher) · go **out** (s’éteindre, sortir) · go **on** (continuer) · go **down** (baisser, tomber en panne).' },
    notes: "Approfondissement : position de l’objet.",
  });

  d.exercise({
    title: 'Say it like an incident report', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Replace the verb in bold with a phrasal verb from the Word file, in the right form.',
    items: [
      'The engineer **arrived** at 9.30. → The engineer [[turned up]] at 9.30.',
      'We **postponed** the meeting. → We [[put off]] the meeting.',
      'The server **stopped** automatically. → The server [[shut down]] automatically.',
      'Legal will **examine** the badge log. → Legal will [[look into]] the badge log.',
      'Two cooling units **failed**. → Two cooling units [[broke down]].',
      'We must **solve** this before Friday. → We must [[sort this out]] before Friday.',
      'Should we **ask** a plumber **to come** today? → Should we [[call out]] a plumber today?',
    ],
    notes: "Exercice ajouté. Variante orale : un élève dit la phrase « simple », l’autre la reformule.",
  });

  d.closing({
    cliff: 'You leave without breakfast. On the tram, you realise you do not know one thing Mark did not say: **how long the water had been running**.',
    homework: ['Learn the **8 phrasal verbs** of the Word file (p. 7).', 'Learn by heart: **begin, break, leave, send, shut, take, see, hear, find**.', 'Read **Scene 2** (p. 8): who says what?'],
    exit: 'Tell the night in three sentences with **went off**, **broke down** and **turned up**.',
  });
};
