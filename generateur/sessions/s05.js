// Séance 5 — Scene 2, the timeline (livret p. 9–10) — light style, modelled on the Séance 1 deck
const { MAGENTA: MAGENTA_ } = require('../lib_light');

exports.meta = {
  n: 5, style: 'light', slug: 'Scene2_The_timeline', title: 'Build the timeline Mark asked for', coverTitle: 'Build the timeline\nMark asked for',
  subtitle: 'It is 8.20. Forty minutes and an empty whiteboard.', pages: 'Livret p. 9–10', img: 's2_timeline', time: '08.20', sceneLabel: 'SCENE 2',
  coverNotes: "Séance 5 — Scène 2 (08.20), livret p. 9–10 : la chronologie (p. 9) et le Dry run (p. 10).\n"
    + "Objectifs : raconter la nuit dans l’ordre (connecteurs), when / while, past simple vs past continuous à l’écrit, orthographe -ing / -ed, interroger et défendre un récit à l’oral.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · scène + mots de la chronologie (10') · when / while + Sentence tennis (15') · chronologie p. 9 + frise (20') · jeu d’écoute Objection! (10') · Dry run A–C + arbre d’orthographe (15') · jeu oral : alibi ou Draw my evening (15').\n"
    + "Les heures de ce texte (8.15, 11.40) seront contredites par le journal d’alarme en scène 3 : ne pas les corriger maintenant.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.list({
    title: 'Warm-up: bar or dot?', tag: 'WARM-UP', page: 'Séance 4',
    instr: 'Bar (in progress) → was / were + -ing. Dot (event) → past simple.',
    items: [
      'Samuel [[was checking]] (check) the rack when Mark [[called]] (call).',
      'At 23.41 water [[was running]] (run) behind the ceiling.',
      'Nobody [[knew]] (know) about the leak.',
      'The cleaners [[opened]] (open) the door and [[saw]] (see) the water.',
      'At 11.40 p.m. everybody [[was sleeping]] (sleep).',
      'The alarm [[went off]] (go off), but nobody [[heard]] (hear) it.',
    ],
    note: { kind: 'watch', text: '//know// is a state verb → **knew**, never //was knowing//. Two events in a row → **past simple ×2**.' },
  });

  d.section('The whiteboard');
  d.scene({
    title: 'Forty minutes, one whiteboard', tag: 'SCENE', page: 'Livret p. 9', img: 's2_timeline', time: '08.20', sceneLabel: 'SCENE 2',
    alt: 'You stand at an empty whiteboard titled Timeline — last night; Mark watches, Samuel holds the alarm log, Iris checks the sign-out sheet on her phone',
    text: ['It is **8.20**. Mark hands you a marker.', '**Samuel** is holding the alarm log. **Iris** has the contractor’s sign-out sheet on her phone. You have your notes from the voicemail.', 'Forty minutes. An empty whiteboard. **Facts only.**'],
    ask: 'Who has a **document**? Who only has a **memory**? Which one would an assessor trust?',
    notes: "Faire lire les bulles. Réponse attendue : Samuel (alarm log) et Iris (sign-out sheet) ont des documents ; Mark et vous n’avez que des souvenirs ou des notes. Lien avec la séance 1 : remembered time ≠ verifiable time.",
  });

  d.mindmap({
    title: 'Mindmap — the world of the timeline', tag: 'MINDMAP', page: 'Livret p. 9–10',
    center: 'THE TIMELINE',
    branches: [
      { label: '1 · THE DOCUMENTS', color: 'accent2', inner: ['the **alarm log**', 'an **entry**', 'a **timestamp**'], outer: ['the **sign-out sheet**', 'a **badge**', 'a **record**'] },
      { label: '2 · THE PEOPLE', color: 'accent3', inner: ['the **contractor**', 'the **site manager**', 'the **cleaning team**'], outer: ['a **witness**', 'a **security guard**', 'the **insurer**'] },
      { label: '3 · THE ACTIONS', color: 'accent4', inner: ['pack → **packed**', 'lock → **locked**', 'leave → **left**'], outer: ['notice → **noticed**', 'begin → **began**', 'hear → **heard**'] },
      { label: '4 · TIME WORDS', color: 'accent1', inner: ['at **exactly** 7.55', 'at **around** eight', '**until** 8.15'], outer: ['**by** nine', '**later**', '**meanwhile**'] },
      { label: '5 · THE REPORT', color: 'accent5', inner: ['a **fact**', 'a **guess**', 'a **source**'], outer: ['to **check**', 'to **confirm**', 'to **contradict**'] },
    ],
    notes: "Branches intérieures = mots du livret ; branches pointillées = mots pour aller plus loin. Faire produire une phrase par branche : « The sign-out sheet is a document. » / « At exactly 7.55 = a verifiable time. »",
  });

  d.chevrons({
    title: 'Tell it in order', tag: 'VOCABULARY', page: 'Livret p. 9',
    steps: [
      { h: 'FIRST', color: '2E5C8A', ex: 'At 7.55 p.m., the team ^^was still working^^.' },
      { h: 'THEN', color: '2A6FB0', ex: 'They ==left== at 8.15 and ==locked== the door.' },
      { h: 'LATER', color: 'accent4', ex: 'Water ==began== to run behind the ceiling.' },
      { h: 'AFTER THAT', color: '8A3C8E', ex: 'At 11.40 p.m., the alarm ==went off==.' },
      { h: 'IN THE END', color: MAGENTA_, ex: 'The cleaners ==found== the water at 6.50.' },
    ],
    rows: [
      { h: 'AT THE SAME TIME', icon: 'FaUserFriends', color: 'accent2', lines: ['**while** + background', '**meanwhile** = pendant ce temps', '**at the same time**'] },
      { h: 'HOW PRECISE?', icon: 'FaBullseye', color: 'accent1', lines: ['**at exactly** 7.55 → verifiable', '**at around / about** eight → remembered', '**until** 8.15 · **by** nine'] },
      { h: 'HOW LONG?', icon: 'FaHourglassHalf', color: 'accent3', lines: ['**for** about seven hours', '**between** 11.40 p.m. **and** 6.50 a.m.', '**all night** (✗ //all the night//)'] },
    ],
    notes: "Faire raconter la nuit en cinq phrases avec les cinq connecteurs, livre fermé, en binôme. Rappel : until = jusqu’à (ça continue) ≠ by = au plus tard (séance 2).",
  });

  d.section('When or while?');
  d.compare({
    title: 'When or while?', tag: 'GRAMMAR', page: 'Livret p. 9–10',
    left: { h: 'WHILE — a period (a bar)', color: 'accent2', icon: 'FaHourglassHalf', bullets: false, items: ['**while** + ^^was / were + -ing^^', '= //pendant que//', '**While** they ^^were packing^^ their tools, the site manager ==carried out== his last inspection.'] },
    right: { h: 'WHEN — a point (a dot)', color: MAGENTA_, icon: 'FaBolt', bullets: false, items: ['**when** + ==past simple==', '= //quand, lorsque//', 'The water ^^was still running^^ **when** the cleaners ==arrived==.'] },
    mid: 'vs',
    note: { kind: 'tip', label: 'Comma rule', text: '//When the cleaners arrived**,** the water was still running.// — no comma when the main clause comes first: //The water was still running when the cleaners arrived.//' },
    notes: "Bar → while ; dot → when. La virgule n’apparaît que si la subordonnée vient en tête.",
  });

  d.game({
    title: 'Sentence tennis', page: 'Hors livret', icon: 'FaTableTennis',
    tagline: 'Serve a background — return an event. Five seconds!',
    meta: 'Pairs · 8 minutes · fast speaking',
    steps: [
      'Player A **serves** half a sentence with //while// + a background: //While I was cooking…//',
      'Player B **returns** an event in the past simple: //…the phone rang.//',
      'Switch: A serves an event with //when// — //When the lights went out…// — B returns a background: //…we were watching a film.//',
      'No answer in five seconds, or the wrong tense = **one point** for the other player.',
    ],
    sayLabel: 'SERVE IDEAS',
    say: ['//While I was having a shower…//', '//While we were driving to work…//', '//When my boss called…//', '//When the alarm went off…//', '//While they were sleeping…//', '//When the power went off…//'],
    win: 'first to **five points**, then change partners.',
    notes: "Démonstration avec un élève avant de lancer. Circuler et noter les erreurs de temps les plus fréquentes pour un retour collectif de 2 minutes.",
  });

  d.section('The timeline');
  d.list({
    title: 'Build the timeline Mark asked for', tag: 'YOUR MOVE', page: 'Livret p. 9',
    instr: 'It is 8.20. Without this timeline, nobody can write a report. **Dot** → past simple · **bar** → was / were + -ing.',
    instrA: 'It is 8.20. Without this timeline, nobody can write a report.',
    number: false, gap: 8, qGap: 10, max: 22, maxA: 21,
    items: [
      'At 7.55 p.m. the contractor’s team **(1)** [[was still working]] //(still work)// on the second floor.',
      'They **(2)** [[left]] //(leave)// at 8.15 and **(3)** [[locked]] //(lock)// the door behind them.',
      'While they **(4)** [[were packing]] //(pack)// their tools, the site manager **(5)** [[carried out]] //(carry out)// his last inspection.',
      'He **(6)** [[did not notice]] //(not notice)// anything. Later, water **(7)** [[began]] //(begin)// to run behind the ceiling.',
      'At 11.40 p.m., while everybody **(8)** [[was sleeping]] //(sleep)//, the temperature alarm **(9)** [[went off]] //(go off)//.',
      'Nobody **(10)** [[heard]] //(hear)// it. The cleaners **(11)** [[found]] //(find)// the water at 6.50, when they **(12)** [[opened]] //(open)// the room.',
    ],
    note: { kind: 'watch', text: '(5) //was carrying out// is also correct · (6) formal report: **did not**, not //didn’t// · (7) **began** ≠ //begun//.' },
    notes: "Travail individuel 10 min, puis comparaison en binôme.",
    notesA: "Ces heures (8.15, 11.40) sont celles « de la salle ». L’Exhibit A (scène 3) donnera 19:58 et 23:41 : c’est tout l’enjeu de la scène suivante.",
  });

  d.timeline({
    title: 'The night on a line — your timeline', tag: 'YOUR MOVE', page: 'Livret p. 9', correction: true,
    axis: { from: 19.3, to: 31.4, ticks: [[20, '20.00'], [22, '22.00'], [24, '00.00'], [26, '02.00'], [28, '04.00'], [30, '06.00']] },
    bars: [
      { from: 19.4, to: 20.25, label: '(1) was working · (4) were packing', row: 2 },
      { from: 21.2, to: 30.83, label: '(7) water began → was running behind the ceiling', row: 0, open: true },
      { from: 23.3, to: 30.75, label: '(8) everybody was sleeping', row: 1, color: 'accent5' },
    ],
    points: [
      { at: 20.25, label: '(2) left · (3) locked', row: 0 },
      { at: 23.67, label: '(9) went off · (10) nobody heard', row: 0 },
      { at: 30.83, label: '(11) found · (12) opened', row: 0 },
    ],
    note: { kind: 'watch', label: 'Attention', text: 'these are the times **people remembered** (8.15, 11.40). In Scene 3, the alarm log will tell a different story.' },
  });

  d.game({
    title: 'Objection!', page: 'Hors livret', icon: 'FaGavel',
    tagline: 'Your teacher reads the timeline — with six mistakes.',
    meta: 'Two teams · 10 minutes · listening for detail',
    steps: [
      'Booklets **closed**. First reading: just listen.',
      'Second reading: when you hear a mistake, stand up and say **“Objection!”**',
      'Correct it in two sentences: //They didn’t leave at 8.50. They left at 8.15.//',
      'Right objection = **+1** for your team. Wrong objection = **–1**.',
    ],
    say: ['**Objection!**', 'It wasn’t …, it was …', 'They didn’t …, they …', 'That’s not what the timeline says!'],
    win: 'the team that finds all six mistakes first.',
    notes: "SCRIPT AVEC SIX ERREURS (lire deux fois, la seconde lentement) :\n« At 7.55 p.m. the contractor’s team was still working on the THIRD floor. They left at 8.50 and locked the door behind them. While they were packing their tools, the site manager carried out his last inspection. He NOTICED A SMALL LEAK. Later, water began to run behind the ceiling. At 11.40 p.m., while everybody was sleeping, the FIRE alarm went off. THE SECURITY GUARD HEARD IT. The cleaners found the water at 7.50, when they opened the room. »\nErreurs : third (second) · 8.50 (8.15) · noticed a small leak (did not notice anything) · fire (temperature) · the security guard heard it (nobody heard it) · 7.50 (6.50).",
  });

  d.table({
    title: 'Objection! — the six mistakes', tag: 'GAME', page: 'Hors livret', mode: 'a',
    headers: ['YOU HEARD', 'OBJECTION! THE TIMELINE SAYS'], colW: [6.065, 6.065], align: ['left', 'left'],
    rows: [
      ['The team was working on the {{third}} floor.', 'They were working on the [[second]] floor.'],
      ['They left at {{8.50}}.', 'They didn’t leave at 8.50. They left at [[8.15]].'],
      ['The site manager {{noticed a small leak}}.', 'He [[did not notice anything]].'],
      ['The {{fire}} alarm went off.', 'It was the [[temperature]] alarm.'],
      ['{{The security guard heard it.}}', '[[Nobody heard it.]]'],
      ['The cleaners found the water at {{7.50}}.', 'They found it at [[6.50]].'],
    ],
    note: { kind: 'keep', text: 'to correct a fact, use a **negative + the right fact**: //It wasn’t the fire alarm. It was the temperature alarm.//' },
  });

  d.section('Dry run');
  d.list({
    title: 'Before you hand the board to Mark', tag: 'DRY RUN', page: 'Livret p. 10',
    instr: 'A · One form is impossible in each line. Cross it out. Two minutes.',
    items: [
      'At 8.15 the team <<left>> / {{was leaving}} the site.',
      'While they {{packed}} / <<were packing>>, the manager <<checked>> / <<was checking>> the floor.',
      'The alarm <<went off>> / {{was going off}} at 11.41.',
      'Water {{ran}} / <<was running>> behind the ceiling all night.',
    ],
    note: { kind: 'watch', text: 'line 1: //was leaving// is possible in a story — a report gives the **dated event** · line 2: //while// + background; //checked// and //was checking// are both correct · line 4: the report describes a **background**.' },
    notes: "These are exactly the three errors a hurried reader spots first.",
    notesA: "Nuancer : la consigne parle de forme « impossible » ; en anglais courant, « was leaving » et « ran » ne sont pas agrammaticaux, mais inadaptés à un rapport factuel.",
  });

  d.list({
    title: 'Join with when or while', tag: 'DRY RUN', page: 'Livret p. 10',
    instr: 'B · Join these sentences with //when// or //while//.',
    items: [
      'The cleaners arrived. + The water was still running.',
      { t: '→ [[When the cleaners arrived, the water was still running.]]' },
      'Iris was photographing the ceiling. + She noticed the crack.',
      { t: '→ [[While Iris was photographing the ceiling, she noticed the crack.]]' },
    ],
    note: { kind: 'keep', label: 'Also correct', text: '//The water was still running **when** the cleaners arrived.// · //Iris noticed the crack **while** she was photographing the ceiling.//' },
  });

  d.tree({
    title: 'Spelling: -ing and -ed in four questions', tag: 'GRAMMAR', page: 'Livret p. 10',
    start: 'A regular verb', leafCols: ['+ -ING', '+ -ED'],
    steps: [
      { q: 'Does it end in **-ie**?', hint: 'lie · die · tie', yes: { h: 'IE → Y before -ing', t: 'lie → **lying**', t2: 'lie → **lied**', color: 'accent4' } },
      { q: 'Does it end in a silent **-e**?', hint: 'notice · leave · arrive', yes: { h: 'DROP THE -E', t: 'notice → **noticing**', t2: 'notice → **noticed**', color: 'accent2' } },
      { q: 'Does it end in **consonant + y**?', hint: 'carry · study (but: play → played)', yes: { h: 'Y STAYS · Y → IED', t: 'carry → **carrying**', t2: 'carry → **carried**', color: 'accent3' } },
      { q: '**Stressed** vowel + **one** consonant at the end?', hint: 'plan · stop · prefer (UK: travel)', yes: { h: 'DOUBLE THE CONSONANT', t: 'plan → **planning**', t2: 'plan → **planned**', color: 'accent1' } },
    ],
    last: { h: 'JUST ADD -ING / -ED', t: 'open → **opening** · visit → **visiting**', t2: 'open → **opened** · visit → **visited**', color: 'tx2' },
    notes: "Faire passer chaque verbe du Dry run C dans l’arbre. Visit et open : accent sur la première syllabe → pas de doublement. UK : travel → travelling ; US : traveling.",
  });

  d.list({
    title: 'Spelling: -ing form and past form', tag: 'DRY RUN', page: 'Livret p. 10',
    instr: 'C · Write the -ing form and the past form.',
    cols: 2, max: 26, maxA: 22,
    items: ['run → [[running / ran]]', 'plan → [[planning / planned]]', 'lie → [[lying / lied (mentir)]]', 'travel → [[travelling / travelled]]', 'notice → [[noticing / noticed]]', 'carry → [[carrying / carried]]'],
    note: { kind: 'watch', text: '//run// is irregular: **ran** · //lie// (être allongé) → **lay, lain** · US spelling: //traveling, traveled//.' },
  });

  d.game({
    title: 'Spelling bee', page: 'Hors livret', icon: 'FaSpellCheck',
    tagline: 'Spell it aloud — in English, letter by letter.',
    meta: 'Two teams · 10 minutes · the alphabet + -ing / -ed spelling',
    steps: [
      'Your teacher says a verb: //stop//.',
      'Player 1 spells the **-ing form**: //S-T-O-double P-I-N-G//.',
      'Player 2 spells the **past form**: //S-T-O-double P-E-D//.',
      'One mistake: the other team can **steal** the point.',
    ],
    sayLabel: 'LETTERS THAT TRAP FRENCH SPEAKERS',
    say: ['**A** /eɪ/ · **E** /iː/ · **I** /aɪ/', '**G** /dʒiː/ · **J** /dʒeɪ/', '**H** /eɪtʃ/ · **R** /ɑː/', '**W** /ˈdʌbəljuː/ · **Y** /waɪ/', '//double P// · //double L//'],
    win: 'the team with the most points. Bonus traps: //visit · panic · prefer · begin//.',
    notes: "Liste de verbes et réponses :\nstop → stopping / stopped · plan → planning / planned · lie → lying / lied · die → dying / died · tie → tying / tied · carry → carrying / carried · study → studying / studied · notice → noticing / noticed · arrive → arriving / arrived · open → opening / opened · happen → happening / happened · visit → visiting / visited (pas de doublement) · prefer → preferring / preferred · admit → admitting / admitted · occur → occurring / occurred · travel → travelling / travelled (UK) · cancel → cancelling / cancelled (UK) · panic → panicking / panicked (piège : ck) · begin → beginning / began (irrégulier).\nCompétence utile au téléphone : épeler un nom, une adresse e-mail.",
  });

  d.section('Speaking');
  d.game({
    title: 'The alibi game', page: 'Hors livret', icon: 'FaUserSecret', color: 'accent6',
    tagline: 'Two suspects. One story. Can the class break it?',
    meta: 'Pairs + the whole class · 15 minutes · speaking and listening',
    steps: [
      '**Prepare (3 min)** — two suspects agree on their evening yesterday, 7 to 11 p.m.: where, what, who, **when**.',
      '**Questioned alone** — suspect B goes out. The class questions A for two minutes. Then B comes back and A goes out.',
      '**Compare** — the class lists every difference between the two stories.',
      '**Verdict** — two contradictions and the alibi is **broken**!',
    ],
    sayLabel: 'USEFUL LANGUAGE',
    say: ['bar: //We **were watching** a film.//', 'dot: //Then we **left** at ten.//', '//when · while · after that//', '//at exactly · at around//'],
    win: 'the suspects win with **fewer than two** contradictions.',
    notes: "Activité orale : réemploi du past continuous / prétérit en interaction, et préfiguration de la scène 3 (comparer deux récits). Faire jouer 2 ou 3 paires de suspects.",
  });

  d.headerCards({
    title: 'Questions that break an alibi', tag: 'SPEAKING', page: 'Hors livret',
    perRow: 3,
    cards: [
      { h: 'DETECTIVES ASK', color: 'tx2', icon: 'FaSearch', lines: ['Where **were** you at 9 p.m.?', 'What **were** you **doing** when…?', 'Who **were** you with?', 'What **was** he **wearing**?', 'What **happened** next?', 'Can anyone **back up** your story?'] },
      { h: 'SUSPECTS ANSWER', color: 'accent2', icon: 'FaUserSecret', lines: ['At nine, we **were watching** a film.', 'When it **ended**, we **left**.', 'I’m **not sure**, but I **think**…', 'I **don’t remember** exactly.', 'It **was** about half past ten.'] },
      { h: 'THE CLASS REACTS', color: 'accent1', icon: 'FaGavel', lines: ['That’s **not** what your partner **said**!', 'So you **were** … at nine?', 'Are you **sure**?', 'Your partner **said** …', '**Contradiction** number one!'] },
    ],
    note: { kind: 'tip', label: 'Remember Scene 1', text: '//at exactly 9.15// sounds strong — but a **remembered** time is not a **verifiable** time. Can you prove it?' },
  });

  d.game({
    title: 'Draw my evening', tag: 'SPEAKING', page: 'Hors livret', icon: 'FaPencilAlt', color: 'accent4',
    tagline: 'You tell — your partner draws your timeline.',
    meta: 'Pairs · 10 minutes · speaking and listening',
    steps: [
      'A tells yesterday evening, 6 p.m. to midnight, in **90 seconds**: what you **were doing**, what **happened**.',
      'B listens and **draws** A’s timeline: a **bar** for each background, a **dot** for each event.',
      'Check together: is every bar and every dot in the right place?',
      'Swap roles.',
    ],
    sayLabel: 'B CAN ASK',
    say: ['//Sorry, what time was that?//', '//Were you still … when …?//', '//So first you …, then you …?//', '//How long were you …?//'],
    notes: "Activité d’écoute active : B doit transformer un récit oral en schéma barre / point. Exemple de dessin attendu sur la diapositive suivante.",
  });

  d.timeline({
    title: 'Draw my evening — an example', tag: 'SPEAKING', page: 'Hors livret',
    intro: 'Lina said: //“At six, I **was cooking** when my sister **called**. From eight, I **was watching** a series — at a quarter past nine the power **went off**! I **went** to bed at eleven.”//',
    axis: { from: 17.6, to: 24.4, ticks: [[18, '18.00'], [19, '19.00'], [20, '20.00'], [21, '21.00'], [22, '22.00'], [23, '23.00'], [24, '00.00']] },
    bars: [
      { from: 18, to: 19.4, label: 'was cooking', row: 0 },
      { from: 20, to: 22.6, label: 'was watching a series', row: 0 },
    ],
    points: [
      { at: 18.5, label: 'my sister called', row: 0 },
      { at: 21.25, label: 'the power went off', row: 1 },
      { at: 23, label: 'went to bed', row: 0 },
    ],
    legend: ['**bar** = background → ^^was / were + -ing^^', '**dot** = event → ==past simple=='],
    notes: "Lina est une élève fictive. Faire reformuler l’exemple avec when et while : « While Lina was watching a series, the power went off. »",
  });

  d.table({
    title: 'Phrasal verbs of the night', tag: 'WORD FILE', page: 'Hors livret',
    headers: ['PHRASAL VERB', 'FRANÇAIS', 'IN THE FILE'], colW: [3.0, 3.4, 5.73], boldCol: 0, align: ['center', 'center', 'left'],
    rows: [
      ['to pack up', 'ranger ses affaires', 'While they ^^were packing up^^, the manager checked the floor.'],
      ['to lock up', 'fermer à clé', 'They ==locked up== at 8.15.'],
      ['to carry out', 'effectuer, réaliser', 'The site manager ==carried out== his last inspection.'],
      ['to sign in · to sign out', 'signer l’entrée · la sortie', 'The team ==signed out== at 8.15.'],
      ['to set off (an alarm)', 'déclencher', 'The heat ==set off== the temperature alarm.'],
      ['to go off', 'se déclencher', 'The alarm ==went off== at 11.40 p.m.'],
      ['to find out', 'découvrir, établir', 'We must ==find out== when it started.'],
      ['to back up (a story)', 'confirmer, corroborer', 'Can anyone ==back up== your story?'],
    ],
    notes: "Distinguer set off (la cause : la chaleur déclenche l’alarme) et go off (ce que fait l’alarme : elle se déclenche). Prononciation : the alarm went OFF — l’accent tombe sur la particule.",
  });

  d.closing({
    cliff: 'Samuel stands up behind the rack. **“There is something else,”** he says. **“The log does not say what you think it says.”**',
    homework: ['Copy the corrected timeline (p. 9).', 'Learn the **spelling tree** for -ing and -ed.', 'Write 5 sentences: what **were** you **doing** yesterday at 8 p.m., 10 p.m. and 7 a.m.?'],
    exit: 'One sentence with **while**, one with **when**, about the night at Atlas House.',
  });
};
