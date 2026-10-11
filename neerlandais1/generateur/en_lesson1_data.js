// In five sentences (+1) — trois productions jalonnées B1, en phase avec le cours 1 d'anglais UE3
// (« Anglais, langue en situation », Part 1 : le message de Mark Shaw, Atlas House, la chronologie).
// crit : 5 consignes (une phrase chacune) · ch : le jalon supplémentaire, plus difficile (★ Challenge, Sentence 6)
// ex : la production modèle ; {n:texte} ou {n:texte|étiquette} = bribe encadrée, reliée à la consigne n
// chEx : la phrase modèle du jalon supplémentaire · img : img/vijfzinnen/<img>.jpg (illustrations du livret)

const TASKS = [
  {
    t: 'The message at 06.58', img: 'en_message', fr: 'Le message de 06 h 58', ref: 'p. 3–4', mode: 'W',
    sit: 'Mark Shaw left you a voicemail at 06.58. Before you leave the house, write a short message to your team.',
    crit: [
      { t: 'Who called, and when? **PAST SIMPLE** + **AT** + a time.', k: 'AT + TIME' },
      { t: 'What happened? An **IRREGULAR** verb: **FOUND**, **WENT OFF**, **HEARD**…', k: 'IRREGULAR' },
      { t: 'Where exactly? Two **PLACE** words from the mind map: the technical room, the floor, the ceiling…', k: 'THE PLACE' },
      { t: 'What must the team bring, and when? **BY** + a deadline.', k: 'BY + DEADLINE' },
      { t: 'A twist: a **NEGATIVE** in the past simple, **DIDN’T** + base form.', k: 'DIDN’T + BASE' },
    ],
    ch: { t: 'The honest sentence: what we **DON’T KNOW YET**, and what would **PROVE** it.', k: 'FACT ≠ GUESS' },
    ex: [
      'Mark Shaw {1:called at 6.58|AT + TIME} this morning and left a voicemail.',
      'The cleaners {2:found|IRREGULAR} water at 6.50, and it was still running.',
      'There is water {3:on the floor|THE PLACE} of the {3:technical room|THE PLACE}, on the second floor.',
      'Please bring the file on the November incident to Atlas House {4:by 8.15|BY + DEADLINE}.',
      'Sorry, I {5:didn’t hear|DIDN’T + BASE} my phone at 6.58: I was in the shower!',
    ],
    chEx: '{6:We don’t know yet|DON’T KNOW YET} how long the water has been running, but {6:the alarm log|PROOF} will show when it started.',
    notes: 'Production écrite, 10 min, juste après la prise de notes de la messagerie. Attendus : called, found, went off (le fait daté est au past simple) ; at + heure précise ; by + date limite (≠ until). Négation : didn’t + base verbale (✗ didn’t heard). Mark demande « for a quarter past eight » : « at 8.15 » est juste (l’heure du rendez-vous), mais la consigne 4 exige by + date limite. ★ Challenge : la phrase honnête de la p. 4 du livret. On ne devine pas la durée (✗ all night) ; on cite une source vérifiable : le journal d’alarme, des photos horodatées, les images de vidéosurveillance (CCTV), le relevé des badges. « how long the water has been running » reprend la correction du livret.',
  },
  {
    t: 'Atlas House, 8.15', img: 'en_room', fr: 'Atlas House, 8 h 15', ref: 'p. 3–7 · role play', mode: 'O',
    sit: 'You arrive at Atlas House. Mark wants facts, not guesses. Tell him what you know and what happens next.',
    crit: [
      { t: 'The night: **BETWEEN** … **AND** … + a fact in the past simple.', k: 'BETWEEN … AND' },
      { t: 'Ask a question in the past simple: **DID** + subject + base form?', k: 'DID … ?' },
      { t: 'Use **TURN UP** or **CALL OUT** in the right form.', k: 'PHRASAL VERB' },
      { t: 'A time from now or a duration: **IN** twenty minutes, **FOR** two hours…', k: 'IN / FOR' },
      { t: 'A twist with **UNTIL** or **BY**: choose the right one!', k: 'UNTIL ≠ BY' },
    ],
    ch: { t: 'Contrast the **PRESENT PERFECT** (the result now) and the **PAST SIMPLE** (the dated fact).', k: 'PP ≠ PS' },
    ex: [
      '{1:Between 23.41 and 6.47|BETWEEN … AND}, nobody went into the technical room: the badge record shows it.',
      '{2:Did the guard hear|DID … ?} the alarm last night?',
      'The plumber didn’t {3:turn up|PHRASAL VERB}, so I {3:called out|PHRASAL VERB} another one.',
      'He’ll be here {4:in twenty minutes|IN / FOR}.',
      'We can’t put the timeline off {5:until Friday|UNTIL}: the insurer wants it {5:by nine|BY}!',
    ],
    chEx: 'The water {6:has damaged|PRESENT PERFECT} the ceiling, but the cleaners only {6:found|PAST SIMPLE} the water at 6.50.',
    notes: 'Production orale en binôme : B joue Mark et relance (« Who found it? », « Are you sure? », « How do you know? »). Attendus : between … and … ; Did + sujet + base verbale (✗ Did the guard heard) ; turn up et call out conjugués (turned up, called out ; avec un pronom : call him out). In = dans (un moment à venir : in twenty minutes ; attention, delay = retard), for = pendant (une durée) ; avec le present perfect, for = depuis (✗ since two hours). Until = jusqu’à (ça continue) ≠ by = au plus tard. Le support du cours écrit tantôt 11.40, tantôt 11.41 (23 h 40 ou 23 h 41) : acceptez les deux. ★ Challenge : la comparaison « Please mind the differences ». Le résultat visible maintenant (has damaged) ≠ le fait daté (found at 6.50) ; ✗ The cleaners have found the leak at 6.50.',
  },
  {
    t: 'A timeline by nine', img: 'en_timeline', fr: 'Une chronologie pour 9 h', ref: 'p. 4–7', mode: 'W',
    sit: 'Mark needs a written timeline of the night by nine. Facts only: every time must be verifiable.',
    crit: [
      { t: 'A **VERIFIABLE** time: past simple + **AT** + its source (the alarm log, the CCTV…).', k: 'VERIFIABLE TIME' },
      { t: 'Two phrasal verbs from the lesson: **BREAK DOWN** and **SHUT DOWN**.', k: 'PHRASAL VERBS' },
      { t: 'Three words from the mind map: a **PERSON**, some **EVIDENCE**, some **PAPERWORK**.', k: 'MIND MAP' },
      { t: 'A **NEGATIVE**, and a **QUESTION** for Mark, in the past simple.', k: 'DIDN’T / DID' },
      { t: 'A twist: what happens next, with **LOOK INTO** or **SORT OUT**.', k: 'LOOK INTO / SORT OUT' },
    ],
    ch: { t: 'A **FINISHED TIME** (last…, … ago) **and** a present perfect with **NEVER** or **EVER**.', k: 'PS ≠ PP' },
    ex: [
      'The alarm went off {1:at 23.41|AT + TIME}: {1:the alarm log|SOURCE} shows it.',
      'During the night, two cooling units {2:broke down|BREAK DOWN} and rack A2 {2:shut down|SHUT DOWN} automatically.',
      'The {3:cleaners|PERSON} found the water at 6.50 and took {3:timestamped photos|EVIDENCE} for the {3:claim|PAPERWORK}.',
      'The plumber {4:didn’t turn up|DIDN’T} before 8.15. {4:Did|DID} anybody call him\u00a0out during the night?',
      'Next, Mark will {5:look into|LOOK INTO} the badge record… before the insurer’s assessor turns up!',
    ],
    chEx: 'There was an incident {6:last November|FINISHED TIME}, but rack A2 {6:has never shut down|PRESENT PERFECT} before.',
    notes: 'Production écrite, 15 min, à rendre « by nine ». Attendus : une heure vérifiable et sa source (✗ around eleven, ✗ late last night : refusés par l’expert d’assurance) ; broke down, shut down (break → broke, shut → shut). Mots de la carte mentale : people (the plumber, the cleaners, the insurer, the contractor, the witness, the assessor) · evidence (the voicemail, the alarm log, the CCTV, the timestamp, the receipt, the statement) · paperwork (the report, the claim, the timeline, the invoice, the message). Négation et question : didn’t + base, Did + sujet + base. Look into est inséparable (look into it) ; sort out est séparable (sort it out). ★ Challenge : un moment terminé et daté (last November, two days ago, in 2019) appelle le past simple ; une expérience jusqu’à maintenant (never, ever) appelle le present perfect.',
  },
];

module.exports = { TASKS };
