// Séance 10 — Scene 4: the ten o'clock update (livret p. 20–22) — light style, modelled on the Séance 1 deck
const { MAGENTA: MAGENTA_, AMBER } = require('../lib_light');

exports.meta = {
  n: 10, style: 'light', slug: 'Scene4_Ten_oclock_update', title: 'Write the ten o’clock update', coverTitle: 'Write the ten\no’clock update',
  subtitle: 'Nine people will read this on their phones. Five lines, not six.', pages: 'Livret p. 20–22', img: 's4_teamcall', time: '10.00', sceneLabel: 'SCENE 4',
  coverNotes: "Séance 10 — Scène 4 (10.00), livret p. 20–22 : l’update de dix heures et le tableau d’équipe.\n"
    + "Objectifs : present perfect en contexte, expressions d’avancement (on track, fall behind, chase, touch base, up to speed, keep in the loop, bottleneck), mots-clés des quatre domaines.\n"
    + "Nouveautés : Beat the clock (minuteur) · feu tricolore des expressions · conversation de groupe sur téléphone · ENERGIZER pouces · update annoté avec ponts vers les séances précédentes · e-mail à corriger · tableau de bord RAG des quatre firmes · jeu de dés pour le team call.\n"
    + "Déroulé indicatif (90 min) : Beat the clock (5') · scène + feu tricolore (10') · chat d’équipe (10') · expressions en contexte (5') · ENERGIZER (5') · écrire l’update + modèle annoté (20') · brouillon de Samuel (10') · mots des domaines + tableau de bord (15') · dés (10').\n"
    + "Les diapositives GAME, ENERGIZER et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.countdown({
    title: 'Beat the clock — say it in English', page: 'Séance 9',
    instr: 'Teams of three. Your teacher starts the clock: say the eight sentences in English — with **already**, **yet** or **just**… or not!',
    instrA: 'Two traps: a **clock time** (5) and **yesterday** (8) → past simple.',
    seconds: 60, challenge: 'Eight sentences, sixty seconds.', scoring: '1 point per correct sentence · bonus point for each trap spotted.',
    prompts: [
      { q: 'J’ai déjà pris les photos.', a: 'I have already taken the photos.' },
      { q: 'Personne n’a encore appelé l’assureur.', a: 'Nobody has called the insurer yet.' },
      { q: 'Samuel vient de revenir.', a: 'Samuel has just come back.' },
      { q: 'Avez-vous déjà lu le journal ?', a: 'Have you read the log yet?' },
      { q: 'L’alarme s’est déclenchée à 23 h 41.', a: 'The alarm went off at 23:41.' },
      { q: 'Nous n’avons pas encore reçu le devis.', a: 'We haven’t received the estimate yet.' },
      { q: 'Iris vient d’envoyer les photos.', a: 'Iris has just sent the photos.' },
      { q: 'J’ai écrit au chef de chantier hier.', a: 'I wrote to the site manager yesterday.' },
    ],
    notes: "Chronométrer 60 secondes par équipe (ou toute la classe en relais). 4 : « Avez-vous déjà… ? » dans une question → yet (déjà = yet en question). 5 et 8 : une date → past simple.",
  });

  d.section('The update');
  d.scene({
    title: 'The board is not yours alone', tag: 'SCENE', page: 'Livret p. 20', img: 's4_teamcall', time: '10.00', sceneLabel: 'SCENE 4',
    alt: 'The team in front of the DONE / NOT YET board; Iris points at the left column, Samuel asks about the logs',
    text: ['It is **ten o’clock**. The board is full of post-its — and everybody has an opinion.', 'Mark wants **five lines** on his phone, and a team board where every firm has a voice.'],
    ask: 'Read the two bubbles. Which one says **DONE**? Which one asks about **NOT YET**?',
    notes: "Bulles : « The photos are done. That one goes on the left. » (DONE) / « But has anyone checked the logs yet? » (question avec yet).",
  });

  d.trafficLight({
    title: 'Talking about progress — without “it is going well”', tag: 'WORD FILE', page: 'Livret p. 21',
    rows: [
      { color: 'accent3', h: 'GREEN — ON TRACK', items: [['to be **on track**', 'être dans les temps'], ['to be **up to speed**', 'être au courant']], ex: 'The photographs are **on track** for ten o’clock. Is everybody **up to speed** on the log?' },
      { color: AMBER, h: 'AMBER — AT RISK', items: [['to **fall behind**', 'prendre du retard'], ['to **chase** somebody', 'relancer quelqu’un']], ex: 'The estimate **has fallen behind**: I **have chased** the provider twice.' },
      { color: 'accent6', h: 'RED — BLOCKED', items: [['a **bottleneck**', 'un goulet d’étranglement'], ['to be **held up**', 'être retardé, bloqué']], ex: 'The contractor’s statement is the **bottleneck**: the report is **held up**.' },
      { color: 'accent2', icon: 'FaBell', h: 'ALL DAY — COMMUNICATE', items: [['to keep somebody **in the loop**', 'tenir informé'], ['to **touch base** with somebody', 'faire un point rapide']], ex: 'Please **keep me in the loop**. I will **touch base** with the insurer at noon.' },
    ],
    notes: "Les sept expressions du livret (p. 21) classées par couleur de statut, plus « held up ». Faire répéter : on TRACK · fall beHIND · BOTtleneck.",
  });

  d.phone({
    title: 'The team chat — reply like a professional', tag: 'SPEAKING', page: 'Hors livret',
    group: 'Atlas House — incident team', meta: 'Mark, Iris, Samuel, you', phoneW: 6.3,
    msgs: [
      { who: 'Mark', color: 'tx2', t: 'Where are we with the photos?' },
      { me: true, a: 'They’re **on track** — Iris has **already** taken them.' },
      { who: 'Iris', color: 'accent3', t: 'The contractor still hasn’t sent his statement.' },
      { me: true, a: 'I’ll **chase** him again — I’ve **already chased** him twice.' },
      { who: 'Samuel', color: 'accent2', t: 'Can someone tell me about the basement?' },
      { me: true, a: 'Nobody has checked it **yet**. I’ll **keep you in the loop**.' },
      { who: 'Mark', color: 'tx2', t: 'Insurer at noon. Is everybody ready?' },
      { me: true, a: 'Let’s **touch base** at 11.45 so we’re all **up to speed**.' },
    ],
    side: { label: 'IN EVERY REPLY', lines: ['Four messages are waiting: **write each reply**.', 'a **present perfect**: //has taken · hasn’t checked//', '**already · yet · just** in the right place', 'one expression: //on track · chase · in the loop · touch base · up to speed//', '**short**: it is a chat, not a letter'], labelA: 'ONE POSSIBLE SET OF REPLIES', linesA: ['Every reply = **a fact** + **a next step**.', 'Accept any reply with a correct present perfect and a correct expression.', 'Then read the chat aloud in groups of four.'] },
    notes: "En binôme : écrire les quatre réponses (5 min), puis lecture à voix haute du chat à quatre voix.",
  });

  d.list({
    title: 'Progress, in context', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Complete with an expression from the traffic light.',
    bank: ['on track', 'keep me in the loop', 'chase', 'bottleneck', 'touch base', 'up to speed'],
    items: [
      'Don’t worry: the photographs are [[on track]].',
      'Can you [[keep me in the loop]] about the basement?',
      'The contractor still hasn’t answered — I’ll [[chase]] him again.',
      'The estimate is the real [[bottleneck]]: nothing can move without it.',
      'Let’s [[touch base]] at noon, before the insurer calls.',
      'Is the new colleague [[up to speed]] on the log?',
    ],
  });

  d.energizer({
    title: 'Thumbs up, thumbs down', page: 'Hors livret', icon: 'FaThumbsUp',
    tagline: 'Your teacher reads a situation. Show its status — then say it.',
    meta: 'Everybody · 4 minutes · hands up, then one sentence',
    actions: [
      { h: 'ON TRACK', t: 'Thumbs **up**: it is done, or on time.', icon: 'FaThumbsUp', color: 'accent3' },
      { h: 'AT RISK', t: 'Flat **hand**: it is falling behind.', icon: 'FaHandPaper', color: AMBER },
      { h: 'BLOCKED', t: 'Thumbs **down**: it is the bottleneck.', icon: 'FaThumbsDown', color: 'accent6' },
    ],
    rules: ['All hands go up **at the same time** — on “three, two, one, show!”', 'One student says the status in a sentence: //It’s on track. / It has fallen behind. / It’s the bottleneck.//'],
    items: [
      { s: 'Iris has already taken all the photos.', a: 0 },
      { s: 'The estimate hasn’t arrived — nothing can move without it.', a: 2 },
      { s: 'The contractor is late, but he promised his statement for noon.', a: 1 },
      { s: 'Samuel has restored the service.', a: 0 },
      { s: 'Nobody can enter the basement: the door is locked.', a: 2 },
      { s: 'The insurer has called twice; we haven’t answered yet.', a: 1 },
      { s: 'The timeline is finished and checked.', a: 0 },
      { s: 'Legal can’t send the letter until the contractor signs.', a: 2 },
      { s: 'The photos are uploaded, but not labelled yet.', a: 1 },
    ],
    instrA: 'Thumbs up = **on track** · flat hand = **at risk** · thumbs down = **blocked**.',
    notes: "Lire les situations dans le désordre. Accepter les discussions (« at risk » ou « blocked » pour la ligne 6 si c’est justifié).",
  });

  d.section('Write the update');
  d.phone({
    title: 'Write the ten o’clock update', tag: 'YOUR MOVE', page: 'Livret p. 20', mode: 'q',
    instr: 'Five lines, continuous text, no bullet points. You may start with: //“Here is where we stand at ten o’clock.”//',
    group: 'Atlas House — incident team', meta: '9 members',
    msgs: [
      { who: 'Mark', color: 'tx2', t: 'Ten o’clock update, please. Five lines — nine people will read it on their phones.' },
      { me: true, minH: 3.2 },
    ],
    side: { label: 'YOUR UPDATE MUST HAVE', icon: 'FaRegCheckSquare', color: 'accent1', lines: ['**2 ×** //already//', '**2 ×** //not … yet//', '**1 ×** //just//', '**2** expressions from the traffic light', '**no** clock time with the present perfect', '**five lines** — it is read on a phone'] },
    notes: "Travail individuel, 12 minutes. Puis échange de téléphones (ou de feuilles) : le voisin coche la liste de contrôle.",
  });

  d.annotated({
    title: 'One possible update — and where it comes from', tag: 'BRIDGE', page: 'Livret p. 20',
    docLabel: 'UPDATE', docTitle: 'Ten o’clock update — Atlas House', docColor: 'accent3', docW: 7.4,
    paras: [
      'Here is where we stand at ten o’clock.',
      'Iris has $$already$$ ⟨1⟩ taken the photographs of the ceiling and the floor, and Samuel has $$already$$ checked the alarm log, so the timeline is $$on track$$ ⟨2⟩.',
      'Samuel has $$just$$ $$confirmed$$ ⟨5⟩ that unit 3 shut down during the night.',
      'However, we have $$not$$ inspected the basement $$yet$$ ⟨3⟩, and the contractor has $$not$$ sent his written statement $$yet$$ — I $$have chased$$ him twice this morning ⟨4⟩.',
    ],
    callouts: [
      { n: 1, h: 'already · just', s: 'Séance 9', t: 'between //have// and the participle.' },
      { n: 2, h: 'on track · have chased', s: 'Word file p. 21', t: 'a progress expression, not //everything is ok//.' },
      { n: 3, h: 'not … yet', s: 'Séance 9', t: '//yet// at the end: the basement is still **NOT YET**.' },
      { n: 4, h: 'no clock time', s: 'Séances 3 · 9', t: '//this morning// is still open → present perfect. //At 9.05// → past simple.' },
      { n: 5, h: 'confirmed', s: 'Séance 6', t: 'a reporting verb: the **log** is the source.' },
    ],
    notes: "Projeter après la production des élèves (pas avant). Chaque numéro renvoie à une séance précédente : faire retrouver la règle avant de lire l’encadré.",
  });

  d.fixText({
    title: 'Samuel’s draft — five errors the board will not forgive', tag: 'YOUR MOVE', page: 'Livret p. 19–20',
    instr: 'Samuel wants to send his own update. Find the **five** errors before it reaches nine phones.',
    instrA: 'Adverb in place · //yet// + present perfect · clock time + past simple · one negative only · a fact, not a feeling.',
    mail: { from: 'Samuel', to: 'Incident team (9 people)', subject: 'Update 10.00' }, count: 5,
    paras: [
      'Hi all,',
      'Iris {{has taken already}}@@ has already taken@@ the photos. We {{didn’t inspect}}@@ haven’t inspected@@ the basement yet.',
      'I {{have checked}}@@ checked@@ the log at 9.05. Nobody {{has not told}}@@ has told@@ the insurer yet.',
      '{{Everything is ok.}}@@ The timeline is on track.@@',
      'Samuel',
    ],
    notes: "Texte inventé, cohérent avec le dossier. Les cinq erreurs reprennent les pièges du livret (p. 19–20).",
  });

  d.section('Your field');
  d.table({
    title: 'Words your colleagues need from you (1/2)', tag: 'YOUR EXPERT', page: 'Livret p. 21',
    headers: ['', 'WORD', 'FRANÇAIS', 'ON THE BOARD'], colW: [0.9, 2.6, 3.4, 5.23], boldCol: 1, align: ['center', 'center', 'center', 'left'],
    rows: [
      ['ACC', 'a damage claim', 'une déclaration de sinistre', 'We have opened a **damage claim** file.'],
      ['ACC', 'to write off', 'passer en pertes', 'Unit 3 may have to be **written off**.'],
      ['ACC', 'a provision', 'une provision', 'We have made a **provision** of €12,000.'],
      ['ACC', 'an insurance premium', 'une prime d’assurance', 'The **premium** has not been recalculated yet.'],
      ['ACC', 'a cost centre', 'un centre de coûts', 'The repair will go to the site **cost centre**.'],
      ['IT', 'a server rack', 'une baie de serveurs', 'Two units in **rack** A2 have stopped.'],
      ['IT', 'a power failure', 'une panne de courant', 'There has been no **power failure**.'],
      ['IT', 'a backup', 'une sauvegarde', 'The last **backup** ran at midnight.'],
      ['IT', 'to restore', 'restaurer, rétablir', 'We have **restored** the service.'],
      ['IT', 'downtime', 'temps d’arrêt', 'Nine hours of **downtime** so far.'],
    ],
  });

  d.table({
    title: 'Words your colleagues need from you (2/2)', tag: 'YOUR EXPERT', page: 'Livret p. 21–22',
    headers: ['', 'WORD', 'FRANÇAIS', 'ON THE BOARD'], colW: [0.9, 2.6, 3.4, 5.23], boldCol: 1, align: ['center', 'center', 'center', 'left'],
    rows: [
      ['LAW', 'negligence', 'la négligence (faute)', 'We have not raised **negligence**.'],
      ['LAW', 'force majeure', 'la force majeure', 'We have reviewed the **force majeure** clause.'],
      ['LAW', 'to notify', 'notifier', 'We have **notified** the landlord in writing.'],
      ['LAW', 'damages', 'des dommages-intérêts', '≠ //damage// (des dégâts)!'],
      ['LAW', 'a breach of contract', 'une violation du contrat', 'No **breach of contract** has been established.'],
      ['RE', 'a burst pipe', 'une canalisation éclatée', 'We have not confirmed a **burst pipe** yet.'],
      ['RE', 'structural damage', 'des dommages structurels', 'No **structural damage** has been found so far.'],
      ['RE', 'drainage', 'l’évacuation des eaux', 'The **drainage** has not been checked yet.'],
      ['RE', 'an inventory of fixtures', 'un état des lieux', 'The **inventory** has not been updated.'],
      ['RE', 'to make good', 'remettre en état', 'The floor has not been **made good** yet.'],
    ],
    notes: "Chaque étudiant apprend les 5 mots de son domaine et reconnaît les 15 autres. Bridge : « has not been checked » = present perfect passif (aperçu de la scène 6).",
  });

  d.dashboard({
    title: 'The team board — one status per line', tag: 'TEAM CALL', page: 'Livret p. 20 & 45–46',
    instr: 'Groups of four, one per firm. Turn each cue into a board line: **present perfect** + **a word from your field**.',
    instrA: 'One possible team board. **Which red line is the bottleneck?** Say why: //Until we have…, we can’t…//',
    perRow: 4,
    items: [
      { name: 'ACC', status: 'G', cue: 'claim file · open — provision of €12,000 · make', a: 'We **have opened** a claim file and **made** a **provision** of €12,000.' },
      { name: 'ACC', status: 'R', cue: 'repair estimate · not receive · yet', a: 'We **haven’t received** a repair estimate **yet**.' },
      { name: 'IT', status: 'G', cue: 'logs · examine — service · restore', a: 'We **have examined** the logs and **restored** the service.' },
      { name: 'IT', status: 'R', cue: 'basement · nobody · inspect · yet', a: 'Nobody **has inspected** the basement **yet**.' },
      { name: 'LAW', status: 'G', cue: 'landlord · notify · in writing', a: 'We **have notified** the landlord in writing.' },
      { name: 'LAW', status: 'A', cue: 'contractor · not sign · statement · yet', a: 'The contractor **hasn’t signed** his statement **yet**.' },
      { name: 'RE', status: 'G', cue: 'photos · take — second floor · close', a: 'We **have taken** photographs and **closed** the second floor.' },
      { name: 'RE', status: 'A', cue: 'inventory of fixtures · not update · yet', a: 'We **haven’t updated** the **inventory of fixtures** **yet**.' },
    ],
    notes: "Team call du livret (p. 20) : chaque représentant écrit ses deux lignes, puis le groupe se met d’accord sur la ligne rouge qui bloque les autres. La plupart des groupes choisissent le sous-sol ou le devis — accepter tout choix justifié.",
  });

  d.dice({
    title: 'Roll the dice — the team call', page: 'Hors livret', perRow: 2,
    instr: 'Groups of four, three rounds each. Roll a die and do what the face says. **1 point** per correct present perfect · **+1** if the others understood your field’s word.',
    faces: [
      { h: 'DONE', color: 'accent3', t: 'One line from **your field** under DONE: //We have already…//' },
      { h: 'NOT YET', color: 'accent6', t: 'One line under NOT YET, with **yet**: //Nobody has … yet.//' },
      { h: 'TABOO', color: MAGENTA_, t: 'Explain one word of **your** list without saying it. The group guesses.' },
      { h: 'BOTTLENECK', color: 'accent1', t: 'What blocks everything? //It’s the bottleneck because… Until we have…, we can’t…//' },
      { h: 'CHASE', color: 'accent2', t: 'Chase a colleague politely: //Could you send me… by noon? I’ve already asked twice.//' },
      { h: 'IN THE LOOP', color: 'accent4', t: 'Ask a question with **yet** — then promise to keep somebody **in the loop**.' },
    ],
    notes: "Activité orale de fin de séance, quand l’attention baisse. Un dé physique ou une application de dé sur téléphone.",
  });

  d.closing({
    cliff: 'At 10.18 your phone buzzes. An e-mail from the contractor. Subject line: **“About yesterday evening”**.',
    homework: ['Learn the **progress expressions**, colour by colour.', 'Learn **your** field’s 5 words + recognise the other 15.', 'Rewrite your update without looking at the model.'],
    exit: 'Say your update in 30 seconds — with one //already// and one //yet//.',
  });
};
