// Séance 1 — Briefing (livret p. 1–2)
exports.meta = {
  n: 1, slug: 'Briefing', title: 'Read this before you open the file',
  subtitle: 'Briefing — you are the English-speaking representative of your firm on Project Atlas.',
  pages: 'Livret p. 1–2', img: 's1_mark', time: null,
  coverNotes: "Séance de lancement. Objectif : poser le cadre (un dossier = une journée = 9 scènes), constituer les « firmes » et installer le réflexe qui structure tout le dossier : distinguer le fait (qui a une source) de la supposition (qui doit être prouvée).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Your firm, your role — and a first sorting: **fact** or **supposition**?',
    language: 'Key words of the case (tenant, contractor, insurer, claim, evidence…) · signal words of certainty · past forms (diagnostic)',
    skills: 'Reading a briefing for key information · introducing yourself and your firm in English',
    agenda: [['Welcome · how the case file works', 10], ['The briefing (p. 1)', 15], ["Who's who · choose your firm", 15], ['Key words of the case', 10], ['Fact or supposition?', 15], ['The file: nine scenes (p. 2)', 10], ['Diagnostic: past forms', 10], ['Wrap-up', 5]],
    notes: "Présenter la mission de la séance. Les durées sont indicatives (base 90 min). Insister : tout le semestre tient dans UNE journée de travail fictive, de 06.58 à 18.00.",
  });

  d.legend({
    title: 'How to read your case file', tag: 'METHOD', page: 'Tout le livret',
    items: [
      ['SCENE', 'accent3', 'Une scène = une heure de la journée (06.58 → 18.00). Lisez-la comme un récit : qui, où, quoi.'],
      ['VOICEMAIL', 'accent2', 'Message audio passé **deux fois**. Notes **uniquement** pendant la 2e écoute.'],
      ['EXHIBIT', 'accent5', 'Une pièce du dossier (journal d’alarme, e-mail, registre). C’est votre **source**.'],
      ['YOUR MOVE', 'accent1', 'Votre tâche : elle fait avancer l’enquête. On la corrige ensemble au tableau.'],
      ['DRY RUN', 'accent2', 'Entraînement grammatical **chronométré** (2–3 min) avant d’écrire « pour de vrai ».'],
      ['WORD FILE', 'accent3', 'Vocabulaire à **apprendre** : expressions en bloc, faux amis, verbes à particule.'],
      ['FIELD NOTE', 'accent5', 'La règle (grammaire ou méthode) dont vous avez besoin pour la tâche suivante.'],
      ['TEAM CALL', 'accent4', 'Travail en groupe de 4 : **un représentant par firme** (ACC · IT · LAW · RE).'],
      ['YOUR EXPERT', 'tx2', 'Une question pour votre domaine : vous l’expliquez aux autres, en anglais simple.'],
      ['NAVY BOX', 'tx2', 'Le « cliffhanger » qui ouvre la scène suivante.'],
    ],
    notes: "Faire repérer chaque type d’encadré dans le livret (feuilleter ensemble). Les couleurs des diapositives reprennent celles du livret : orange = YOUR MOVE, bleu = DRY RUN, vert = WORD FILE, violet = TEAM CALL.",
  });

  d.scene({
    title: 'The briefing', tag: 'BRIEFING', page: 'Livret p. 1', img: 's1_mark', alt: 'Mark Shaw on the phone in the lobby of Atlas House',
    text: [
      '**You are the English-speaking representative of your firm on Project Atlas.**',
      'Atlas House is an office building in Brussels, currently being **refurbished** for a **tenant**, Ferrand Logistics. Four outside firms work on the site. Mark Shaw coordinates them.',
      'Last night, something happened in the technical room on the second floor. **Nobody heard it.**',
      '**Your job today:** find out what happened, decide what can be **proved** and write the **incident report** that the **insurer** will accept.',
    ],
    ask: 'Who will read your report — and what is that reader looking for?',
    notes: "Lecture silencieuse (2 min) puis lecture à voix haute. Question : la personne qui lira le rapport « is looking for a reason to refuse » (dernière phrase du briefing). C’est le fil rouge de tout le dossier : chaque phrase sera lue par un lecteur hostile.",
  });

  d.exercise({
    title: 'Read the briefing for facts', tag: '+ EXTRA', page: 'Livret p. 1 · hors livret',
    instr: 'Answer in one short sentence. Your answer must come from the text — not from your imagination.',
    items: [
      { q: 'Where is Atlas House, and what is happening to it?', a: 'In Brussels. It is being refurbished for a tenant.' },
      { q: 'Who is the tenant?', a: 'Ferrand Logistics.' },
      { q: 'Which four firms work on the site?', a: 'An accounting practice, an IT service provider, a law firm and a property manager.' },
      { q: 'Who coordinates them?', a: 'Mark Shaw.' },
      { q: 'What happened, where and when?', a: 'Something happened in the technical room, on the second floor, last night. Nobody heard it.' },
      { q: 'Name the three parts of your job today.', a: 'Find out what happened · decide what can be proved · write the incident report the insurer will accept.' },
      { q: 'Which two kinds of report "cost money"?', a: 'A report that **names a person**, and a report that **states a cause nobody has proved**.' },
    ],
    cols: 2, gap: 8,
    notes: "Exercice ajouté pour vérifier la compréhension fine du briefing. Correction orale, puis diapositive suivante.",
    notesA: "Insister sur la question 7 : c’est la consigne qui reviendra dans chaque scène (« Watch your language today — literally »). On la retrouvera dans le rapport final (scène 9) : pas de nom, pas de numéro de badge, pas de cause présentée comme un fait.",
  });

  d.cards({
    title: "Who's who on Project Atlas", tag: 'BRIEFING', page: 'Tout le livret',
    perRow: 3,
    cards: [
      { h: 'MARK SHAW', color: 'tx2', f: 'The coordinator', lines: ['Coordinates the four firms on the site.', 'Wants “facts only”.'] },
      { h: 'SAMUEL', color: 'accent2', f: 'The server rack', lines: ['Checks the servers and the logs.', 'Reads the alarm log for the team.'] },
      { h: 'IRIS', color: 'accent3', f: 'The photographs', lines: ['Photographs the ceiling and the floor.', 'Goes down to the basement.'] },
      { h: 'PAUL VERDIER', color: 'accent6', f: 'The contractor', lines: ['Runs the cabling team.', 'Writes in “enthusiastic, unreliable” English.'] },
      { h: 'HELEN MARSH', color: 'accent4', f: 'The claims assessor', lines: ['Works for the insurer.', 'Reads every report “looking for a reason to refuse”.'] },
      { h: 'YOU', color: 'accent1', f: 'Your firm’s voice', lines: ['ACC · IT · LAW · RE', 'You write the report tonight.'] },
    ],
    notes: "Présentation des personnages récurrents (sans dévoiler l’intrigue). Ne pas attribuer de firme à Iris ou Samuel : le livret ne le dit pas explicitement. Le locataire (Ferrand Logistics) et le responsable de chantier (site manager) apparaissent plus tard.",
  });

  d.experts({
    title: 'Choose your firm', tag: 'TEAM CALL', page: 'Livret p. 45–46',
    intro: 'Groups of four: one representative of each firm. You keep the same firm until the end of the file.',
    cards: [
      { who: 'ACC', q: '**Blanchet & Renard** — you are the //senior accountant//. Your angle: costs, the claim file, provisions, the insurance premium, the financial year.' },
      { who: 'IT', q: '**Northline IT Services** — you are the //IT service manager//. Your angle: servers, logs, alarms, backups, downtime.' },
      { who: 'LAW', q: '**Harwell Legal** — you are the //legal counsel//. Your angle: evidence, liability, contracts, what can be written — and what cannot.' },
      { who: 'RE', q: '**Corven Property Management** — you are the //letting and property manager//. Your angle: the building, the pipework, the tenant, the handover.' },
    ],
    notes: "Constituer des groupes de 4 avec une firme par personne (adapter si effectif non multiple de 4 : doubler une firme). Les fiches « Your firm’s file » p. 45–46 seront utilisées à la scène 9 : les montrer dès maintenant donne du sens au rôle.",
  });

  d.cards({
    title: 'Introduce yourself — in role', tag: 'SPEAKING', page: 'Hors livret',
    intro: 'One minute each, in your group. No notes after the first round.',
    cards: [
      { h: 'WHO YOU ARE', color: 'accent1', lines: ['I’m … . I work for **Blanchet & Renard / Northline / Harwell Legal / Corven**.', 'I’m the firm’s **senior accountant / IT service manager / legal counsel / property manager**.'] },
      { h: 'WHAT YOU DO', color: 'accent2', lines: ['On Project Atlas, I’m **responsible for** …', 'I **deal with** … / I **look after** …', 'My job is **to make sure that** …'] },
      { h: 'WHAT YOU NEED TODAY', color: 'accent3', lines: ['Today, I need to know **when** / **whether** / **who** …', 'I can’t write anything until I have …'] },
    ],
    foot: { kind: 'trap', text: '//Je suis responsable de// → I’m **responsible for** + -ing / nom (✗ responsible of). //Je travaille pour// → I work **for** (a firm) · I work **at** (a place) · I work **in** (a department).' },
    notes: "Tour de table en rôle. Exiger les formules de la diapositive ; reprendre les erreurs fréquentes « responsible of », « I am working in Blanchet » (→ for / at).",
  });

  d.table({
    title: 'Key words of the case (1/2)', tag: 'VOCABULARY', page: 'Livret p. 1–2',
    headers: ['ENGLISH', 'FRANÇAIS', 'IN THE FILE'],
    colW: [2.9, 2.9, 6.33], boldCol: 0,
    rows: [
      ['to refurbish', 'rénover, réaménager', 'Atlas House is being refurbished for a tenant.'],
      ['a tenant ≠ a landlord', 'un locataire ≠ un bailleur', 'Ferrand Logistics is the tenant.'],
      ['a (general) contractor', 'une entreprise (générale)', 'The contractor’s team was working until eight.'],
      ['a site', 'un chantier, un site', 'Four outside firms work on the site.'],
      ['an insurer', 'un assureur', 'Has anyone told the insurer yet?'],
      ['a claims assessor', 'un(e) expert(e) en sinistres', 'Helen Marsh, claims assessor.'],
      ['to file a claim', 'déclarer un sinistre', 'We should get to the bottom of this before we file a claim.'],
      ['an incident report', 'un rapport d’incident', 'Write the incident report the insurer will accept.'],
    ],
    notes: "Lecture + répétition chorale. Prononciation : refurbish /ˌriːˈfɜːbɪʃ/, tenant /ˈtenənt/, assessor /əˈsesə/.",
  });

  d.table({
    title: 'Key words of the case (2/2)', tag: 'VOCABULARY', page: 'Livret p. 1–4',
    headers: ['ENGLISH', 'FRANÇAIS', 'IN THE FILE'],
    colW: [2.9, 2.9, 6.33], boldCol: 0,
    rows: [
      ['evidence (uncountable)', 'des preuves, des éléments', 'We need more evidence. (✗ an evidence, evidences)'],
      ['to prove · proof', 'prouver · la preuve', 'Decide what can be proved.'],
      ['a fact ≠ a supposition', 'un fait ≠ une supposition', 'Mark said one thing that is not a fact.'],
      ['to state', 'affirmer, déclarer', 'A report that states a cause nobody has proved…'],
      ['to refuse (a claim)', 'refuser (un dossier)', '…somebody who is looking for a reason to refuse.'],
      ['a leak · to leak', 'une fuite · fuir', 'The pipe was leaking all night, I think.'],
      ['a technical room', 'un local technique', 'Something happened in the technical room.'],
      ['the second floor', 'le 2e étage (UK)', 'US: second floor = 1er étage ! ground floor = rez-de-chaussée'],
    ],
    notes: "Insister sur « evidence » indénombrable (a piece of evidence) et sur la différence UK/US pour les étages : le livret est en anglais britannique (zone GF = ground floor).",
  });

  d.keyIdea({
    tag: 'KEY IDEA', title: 'The rule of the whole file', page: 'Livret p. 1 & 4',
    text: 'A **fact** has a source. A **supposition** needs proof.',
    sub: ['A source = an alarm log, a camera, a ticket, a timestamped photograph, a signed statement.', 'A report that names a person, or that states a cause nobody has proved, is a report that costs money.'],
    icon: 'FaLightbulb',
    notes: "Phrase-clé à faire noter. On la reverra à chaque scène : le livret entraîne à classer chaque information (provable / not yet provable / contradicted).",
  });

  d.exercise({
    title: 'Fact or supposition?', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Write F (fact: it has a source) or S (supposition: it still needs proof). Underline the word that tells you.',
    items: [
      'The alarm went off at 23.41 — **the log shows it**.  → [[F]]',
      'The pipe **probably** burst during the night.  → [[S]]',
      'The cleaners found water at 6.50 — **they badged in at 6.47**.  → [[F]]',
      '**I think** the contractor damaged the pipe.  → [[S]]',
      'Unit 3 shut down at 02.16, **according to the server log**.  → [[F]]',
      'Nobody heard the alarm. (**no source**)  → [[S — not proved yet]]',
      'It **might** be the same pipe as last November.  → [[S]]',
      'The photographs, **timestamped 8.20**, show a soaked floor.  → [[F]]',
    ],
    expect: ['A **source** = a document or a device, not a memory.', 'Signal words: **probably, I think, might, may, it seems**.', 'Ask yourself: //How do we know?//'],
    traps: ['« Nobody heard the alarm » sounds like a fact, but **who** can prove that nobody heard it?', 'A precise time is not always a fact: **who** gives it, and **from what**?'],
    notes: "Exercice ajouté pour installer la distinction fait / supposition dès la 1re séance. Faire justifier chaque réponse : « How do we know? ».",
    notesA: "Item 6 : piège volontaire — l’absence de réaction ne prouve pas que personne n’a entendu. Ce point reviendra à la scène 3 (la notification « delivered » à 23:42).",
  });

  d.compare({
    title: 'How sure is the speaker?', tag: 'METHOD', page: 'Livret p. 4 · hors livret',
    left: { h: 'FACT — it has a source', color: 'accent3', icon: 'FaCheck', items: ['**The log shows** that the alarm went off at 23.41.', '**According to** the alarm log, …', 'The cleaners **found** the water at 6.50.', 'The photographs **(timestamped 8.20)** show …', 'A precise time + a document'] },
    right: { h: 'SUPPOSITION — needs proof', color: 'accent6', icon: 'FaQuestion', items: ['The pipe **probably** burst.', '**I think** / **I believe** it was leaking all night.', 'It **may** / **might** be the same pipe.', '**It seems that** / **Apparently** …', 'A vague time: //around eleven, last night//'] },
    foot: { kind: 'tip', text: 'In your report, a supposition is not forbidden — it must simply **say that it is a supposition** (may, might). You will learn how in Scene 7.' },
    notes: "Construire le tableau avec les élèves avant de projeter la colonne droite si possible.",
  });

  d.table({
    title: 'Nine scenes, eleven hours, one page to sign', tag: 'BRIEFING', page: 'Livret p. 2',
    headers: ['SCENE', 'TIME', 'WHAT HAPPENS', 'WHAT YOU PRODUCE'],
    colW: [1.2, 1.3, 4.6, 5.03], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', '06.58', 'A voicemail wakes you.', '//six lines on a notepad//'],
      ['2', '08.15', 'The room with water in it.', '//the timeline Mark asked for//'],
      ['3', '09.05', 'The alarm log contradicts the room.', '//a sorted list of what can be proved//'],
      ['4', '09.40', 'Two columns on a whiteboard.', '//the ten o’clock update//'],
      ['5', '10.20', 'The contractor writes, badly.', '//a document fit to be forwarded//'],
      ['6', '11.30', 'The insurer calls back.', '//three sentences and a deadline//'],
      ['7', '13.00', 'Four experts, one whiteboard.', '//two hypotheses, one ruled out, one recommendation//'],
      ['8', '15.40', 'A wet sheet from the basement.', '//four sentences you must rewrite//'],
      ['9', '17.00', 'The report.', '//one page, 180–220 words//'],
    ],
    notes: "Projeter la table des matières du dossier. Faire remarquer que chaque scène produit un texte réel qui servira au rapport final.",
  });

  d.steps({
    title: 'Where we are going: one page, read by a sceptic', tag: 'METHOD', page: 'Livret p. 43 & 48',
    steps: [
      { h: 'Listen & note', color: 'accent2', n: '1', lines: ['Scene 1', 'Six lines from a voicemail'] },
      { h: 'Fix the facts', color: 'accent3', n: '2–3', lines: ['Scenes 2–3', 'A timeline · what the log proves'] },
      { h: 'Say where we stand', color: 'accent1', n: '4–6', lines: ['Scenes 4–6', 'Update · e-mail · phone call'] },
      { h: 'Suppose carefully', color: 'accent4', n: '7–8', lines: ['Scenes 7–8', 'Hypotheses · new evidence'] },
      { h: 'Write the report', color: 'tx2', n: '9', lines: ['Scene 9', '180–220 words, no names, no unproved cause'] },
    ],
    foot: { kind: 'keep', label: 'Le rapport final', text: 'The assessor reads, in this order: the **times**, the **position**, the **history**, the **cause**, the **commitment**.' },
    notes: "Donner l’horizon : l’évaluation finale (rapport + présentation orale en comité, p. 49).",
  });

  d.exercise({
    title: 'Diagnostic: past forms', tag: 'DRY RUN', page: 'Hors livret',
    instr: 'Three minutes, alone. Write the past simple. No dictionary.',
    cols: 3, gap: 10,
    items: ['go → [[went]]', 'find → [[found]]', 'hear → [[heard]]', 'leave → [[left]]', 'begin → [[began]]', 'break → [[broke]]', 'send → [[sent]]', 'take → [[took]]', 'see → [[saw]]', 'shut → [[shut]]', 'lock → [[locked]]', 'stop → [[stopped]]'],
    notes: "Diagnostic rapide (non noté) : repérer les élèves fragiles sur les verbes irréguliers, base de toute la scène 1.",
    notesA: "Faire compter les points sur 12. En dessous de 8 : liste de verbes irréguliers à apprendre en priorité (voir séance 7). Pièges : lock → locked (régulier), stop → stopped (doublement), shut → shut (invariable).",
  });

  d.exercise({
    title: 'Diagnostic: tell it in the past', tag: 'DRY RUN', page: 'Hors livret',
    instr: 'Rewrite each sentence in the past. Keep the time expression.',
    items: [
      'The alarm goes off at 23.41. → The alarm [[went off]] at 23.41.',
      'The cleaners don’t hear anything. → The cleaners [[didn’t hear]] anything.',
      'Does Mark call you before eight? → [[Did]] Mark [[call]] you before eight?',
      'Water is running behind the ceiling. → Water [[was running]] behind the ceiling.',
    ],
    notes: "Item 4 annonce le past continuous (séance 4). Ne pas l’enseigner maintenant : repérer qui le connaît déjà.",
    notesA: "Erreur attendue : « Did Mark called » → rappeler : did + base verbale (sera traité en séance 3).",
  });

  d.closing({
    cliff: 'Tomorrow, 06.58. It is still dark. Your phone lights up on the table and vibrates twice. One missed call, one voicemail. The number is Mark Shaw’s. He never calls before eight.',
    homework: ['Learn the **16 key words** of the case (both slides).', 'Revise the **12 past forms** of the diagnostic.', 'Read **page 3** and prepare a notepad: you will take notes from a voicemail.', 'Remember your firm: **ACC · IT · LAW · RE**.'],
    exit: 'Give one **fact** and one **supposition** about Atlas House — and say how you know which is which.',
    notes: "Ticket de sortie oral ou écrit (1 min). Annoncer la séance 2 : écoute du message vocal de Mark Shaw.",
  });
};
