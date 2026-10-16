// Séance 4 — Scene 2, 08.15 (livret p. 8–9) — light style, modelled on the Séance 1 deck
const { MAGENTA: MAGENTA_ } = require('../lib_light');

exports.meta = {
  n: 4, style: 'light', slug: 'Scene2_The_room', title: 'The room with water in it', coverTitle: 'The room\nwith water in it',
  subtitle: 'Four people, a wet floor — and nobody knows', pages: 'Livret p. 8–9', img: 's2_room', time: '08.15', sceneLabel: 'SCENE 2',
  coverNotes: "Séance 4 — Scène 2 (08.15), livret p. 8–9.\n"
    + "Objectifs : décrire une scène (is -ing → was -ing), écouter puis lire le dialogue pour les faits, séparer fait et supposition, past continuous vs past simple.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · scène + imagier + décrire l’image (15') · Memory challenge (5') · écoute livre fermé + lecture (15') · True / False / Not given + Who said what (15') · grammaire : forme, 4 schémas, arbre de décision (15') · écoute : le témoignage de l’agent d’entretien (10') · jeu oral : Hot seat ou Act it out (10').\n"
    + "Les diapositives GAME et + EXTRA sont facultatives : piocher selon le temps et l’énergie du groupe.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.list({
    title: 'Warm-up: phrasal verbs', tag: 'WARM-UP', page: 'Séance 3',
    instr: 'Complete with a phrasal verb from last session, in the right form.',
    items: ['The alarm [[went off]] at 23.41. //(se déclencher)//', 'Two units [[broke down]] during the night. //(tomber en panne)//', 'Nobody [[turned up]] before 6.47. //(arriver)//', 'I will [[look into]] the log this morning. //(examiner)//', 'We cannot [[put off]] the decision. //(reporter)//'],
  });

  d.section('The room');
  d.scene({
    title: 'The room with water in it', tag: 'SCENE', page: 'Livret p. 8', img: 's2_room', time: '08.15', sceneLabel: 'SCENE 2',
    alt: 'The flooded technical room: Iris photographs the ceiling, Samuel kneels behind the server rack, Mark stands with his arms crossed',
    text: ['The technical room **smells of wet plaster**.', '**Iris** is photographing the ceiling. **Samuel** is on his knees behind the server rack with a torch. **Mark** is standing in the doorway with his coat still on.', 'Nobody sits down.'],
    ask: 'Look at the picture: **who is doing what?** Answer with //is / are + -ing//: //Iris is photographing…//',
    notes: "Description au présent continu (is photographing, is kneeling, is standing) : tremplin vers le past continuous de la séance (was photographing…). Faire lire les bulles de l’image.",
  });

  d.pictureDict({
    title: 'What’s in the room?', tag: 'VOCABULARY', page: 'Livret p. 8 · illustration', img: 's2_room',
    alt: 'The technical room with twelve numbered objects',
    instr: 'In pairs, match each word with a number. Two minutes.',
    instrA: 'Say it with the article: //a// bucket, //the// doorway.',
    marks: [
      { n: 1, x: 472, y: 98, en: 'a ceiling tile', fr: 'une dalle de plafond' },
      { n: 2, x: 400, y: 30, en: 'a pipe', fr: 'une canalisation' },
      { n: 3, x: 410, y: 205, en: 'an electrical panel', fr: 'un tableau électrique' },
      { n: 4, x: 560, y: 252, en: 'a whiteboard', fr: 'un tableau blanc' },
      { n: 5, x: 722, y: 372, en: 'a server rack', fr: 'une baie de serveurs' },
      { n: 6, x: 668, y: 250, en: 'a torch', fr: 'une lampe torche' },
      { n: 7, x: 412, y: 368, en: 'a “wet floor” sign', fr: 'un panneau « sol glissant »' },
      { n: 8, x: 406, y: 445, en: 'a bucket', fr: 'un seau' },
      { n: 9, x: 494, y: 502, en: 'a roll of paper towels', fr: 'un rouleau d’essuie-tout' },
      { n: 10, x: 252, y: 548, en: 'a squeegee', fr: 'une raclette' },
      { n: 11, x: 150, y: 190, en: 'the doorway', fr: 'l’embrasure de la porte' },
      { n: 12, x: 578, y: 458, en: 'a puddle', fr: 'une flaque' },
    ],
    bank: [8, 3, 11, 6, 1, 12, 5, 10, 2, 9, 7, 4],
    notes: "Activité en binôme, 2 minutes : associer chaque mot à un numéro. Puis correction à voix haute avec l’article.",
    notesA: "Prononciation : ceiling /ˈsiːlɪŋ/ · bucket /ˈbʌkɪt/ · squeegee /ˈskwiːdʒiː/ · puddle /ˈpʌdl/ · torch (UK) = flashlight (US).",
  });

  d.positionMap({
    title: 'Describe a picture like a pro', tag: 'SPEAKING', page: 'Hors livret', img: 's2_room',
    say: [
      '**In the foreground**, there is a blue bucket.',
      '**On the left**, Iris is kneeling **next to** the door.',
      '**In the middle**, Mark is standing **under** the hole.',
      '**On the right**, Samuel is **in front of** the rack.',
      'Mark **looks** worried. Samuel **seems** busy.',
      'Water is dripping **from** the ceiling.',
    ],
    task: 'Pairs: A describes the left, B the right. **One minute each — three prepositions.**',
    notes: "La grille 3 × 3 donne les repères de position. Insister sur in the foreground / in the background (≠ « au premier plan » traduit mot à mot), next to, in front of, behind, under, above. Look + adjectif, seem to be + -ing.",
  });

  d.memory({
    title: 'Memory challenge — 30 seconds', title2: 'Memory challenge — what was happening?', page: 'Hors livret', img: 's2_room',
    instr: 'Look carefully. In thirty seconds, the picture disappears…',
    instr2: 'Teams of three. Answer in a full sentence — in the past!',
    scoring: '**1 point** per correct answer. **2 points** with a correct //was / were + -ing//.',
    items: [
      { q: 'What **was** Iris **holding**?', a: 'She **was holding** her phone — she **was taking** photos.' },
      { q: 'What **was** Mark **doing** with his arms?', a: 'He **was crossing** them — and he **was looking** up at the ceiling.' },
      { q: 'Where **was** Samuel **kneeling**?', a: 'In front of the server rack, on the right.' },
      { q: 'What **was written** on the whiteboard?', a: '“Incident timeline”.' },
      { q: 'What colour **was** the bucket?', a: 'It **was** blue.' },
      { q: 'What **was lying** on the floor next to the bucket?', a: 'A roll of paper towels.' },
      { q: 'What **was** the person on the right **doing**?', a: 'He **was taking** notes in a notebook.' },
      { q: 'What **was falling** from the ceiling?', a: 'Water — it **was dripping** from the hole, and a ceiling tile **was hanging** down.' },
    ],
    notes: "Afficher l’image exactement 30 secondes, sans prévenir des questions. Passer ensuite à la diapositive suivante.",
    notes2: "Les élèves répondent par équipes, à l’oral ou sur ardoise. Cette activité fait produire le past continuous AVANT la leçon de grammaire : noter au tableau deux ou trois phrases réussies, on y reviendra.",
    notesA: "Accepter les réponses courtes, mais donner 2 points seulement pour was / were + -ing correct. Q4 : was written = passif (simple reconnaissance).",
  });

  d.section('Listen, then read');
  d.banner({
    title: 'Booklets closed — listen first', tag: 'LISTENING', page: 'Livret p. 8–9',
    banner: { icon: 'FaHeadphones', color: 'accent2', h: 'Technical room — 08.15', sub: 'Four voices · fifteen lines. Your teacher (or four volunteers) reads the scene **twice**.' },
    cards: [
      { icon: 'FaHeadphones', color: 'tx2', h: 'Listening 1', t: 'Who speaks? How many people? Where are they?' },
      { icon: 'FaPenNib', color: 'accent1', h: 'Listening 2', t: 'Catch the **numbers and times**. Write figures only.' },
      { icon: 'FaUsers', color: 'accent3', h: 'After', t: 'Compare with a neighbour, then open the booklet p. 8 and check.' },
    ],
    notes: "Lecture du dialogue (lignes 01 à 15) par l’enseignant ou par quatre volontaires (Mark, You, Iris, Samuel), livres fermés. Première écoute : situation globale. Deuxième écoute : les chiffres (diapositive suivante).",
  });

  d.list({
    title: 'Catch the numbers', tag: 'LISTENING', page: 'Livret p. 8–9',
    instr: 'Second listening: one number or time per answer.',
    items: [
      { q: 'When did you get Mark’s message?', a: 'At **seven** (o’clock).' },
      { q: 'How many units have already stopped?', a: '**Two**.' },
      { q: 'Until when was the contractor’s team working?', a: 'Until **eight** (p.m.).' },
      { q: 'When did the temperature alarm go off?', a: 'At **11.40 p.m.** — eleven forty.' },
      { q: 'When did they have trouble with the same pipe?', a: 'Last **November** — and since the summer.' },
      { q: 'By what time does Mark want a timeline?', a: 'By **nine**.' },
    ],
    sizeA: 18,
    notesA: "Faire dire les heures à voix haute : eleven forty p.m. · by nine (= au plus tard à 9 h, cf. séance 2).",
  });

  d.dialogue({
    title: 'Technical room, second floor (1/2)', tag: 'SCENE', page: 'Livret p. 8',
    lines: [
      ['MARK', 'Thanks for coming so early. We have a problem.', '01'],
      ['YOU', 'I got your message at seven. What exactly happened?', '02'],
      ['MARK', 'The cleaners found water in here this morning. It was still running when they arrived.', '03'],
      ['YOU', 'Do we know when it started?', '04'],
      ['MARK', 'Not yet. Samuel was checking the server rack when I called him. He says two units have already stopped.', '05'],
      ['IRIS', 'I’ve just come back from the second floor. The pipe above the ceiling was leaking all night, I think.', '06'],
      ['MARK', 'Was anyone in the building yesterday evening?', '07'],
      ['IRIS', 'The contractor’s team was working here until eight. They were installing the new cabling.', '08'],
      ['SAMUEL', 'I’ve looked at the logs. The temperature alarm went off at 11.40 p.m., but nobody was on site.', '09'],
      ['YOU', 'Has anyone told the insurer yet?', '10'],
    ],
    notes: "Lecture à voix haute par groupes de quatre. Faire repérer en lisant : les heures, les -ing, les marqueurs de certitude (I think).",
  });

  d.dialogue({
    title: 'Technical room, second floor (2/2)', tag: 'SCENE', page: 'Livret p. 9',
    lines: [
      ['IRIS', 'And it may be worse than it looks. The floor is soaked.', '12'],
      ['SAMUEL', 'It might be the same pipe as last November. We have had trouble with it since the summer.', '13'],
      ['MARK', 'We should get to the bottom of this before we file a claim.', '14'],
      ['MARK', 'Right. I need a timeline of last night on this board by nine. Facts only.', '15'],
    ],
    side: {
      label: 'LISTEN FOR',
      lines: ['**I think · may · might** = how sure?', '^^was …-ing^^ = the background', '**have / has …** = where we stand now', '//to get to the bottom of// = tirer l’affaire au clair', '//to file a claim// = déclarer un sinistre'],
      ask: 'Line 11 is missing! What did Mark answer to //“Has anyone told the insurer yet?”//',
    },
    notes: "Le livret passe de la ligne 10 à la ligne 12 : la réplique 11 manque. Faire deviner (« Not yet. ») et justifier : Mark veut d’abord les faits (ligne 14).",
  });

  d.section('Read for facts');
  d.table({
    title: 'True, false or not given?', tag: 'READING', page: 'Livret p. 8–9',
    instr: '**T** = the text says it · **F** = the text says the opposite · **NG** = the text does not say. Give the line.',
    headers: ['STATEMENT', 'T / F / NG', 'LINE'], colW: [8.43, 2.2, 1.5], align: ['left', 'center', 'center'],
    rows: [
      ['You got Mark’s message at seven.', '[[T]]', '[[02]]'],
      ['The cleaners stopped the water before they called Mark.', '[[NG]]', '[[03]]'],
      ['Samuel was checking the server rack when Mark called him.', '[[T]]', '[[05]]'],
      ['The pipe was leaking all night.', '[[NG — only “I think”]]', '[[06]]'],
      ['The contractor’s team was working until midnight.', '[[F — until eight]]', '[[08]]'],
      ['Someone has already told the insurer.', '[[NG — line 11 is missing!]]', '[[10]]'],
      ['It is the first time they have had trouble with this pipe.', '[[F — last November]]', '[[13]]'],
      ['Mark wants a timeline by nine.', '[[T]]', '[[15]]'],
    ],
    notes: "Lecture individuelle (5 min), puis comparaison en binôme. Exiger le numéro de ligne : c’est la preuve.",
    notesA: "Ligne 4 : le piège central de la séance. Iris le pense (I think) : ce n’est pas un fait établi, donc NG. Ligne 6 : la question est posée (10) mais la réponse manque (11).",
  });

  d.table({
    title: 'Who said what — and how sure?', tag: 'YOUR MOVE', page: 'Livret p. 8–9',
    instr: 'For each statement: who said it, which word shows how sure they are, and is it a fact or a supposition?',
    headers: ['STATEMENT', 'WHO', 'MARKER', 'FACT OR SUPPOSITION?'], colW: [4.6, 1.6, 2.8, 3.13], align: ['left', 'center', 'center', 'center'],
    rows: [
      ['It was still running when they arrived.', 'Mark', '[[none — the cleaners saw it]]', '[[fact (witnessed)]]'],
      ['The pipe was leaking all night.', 'Iris', '[[“I think”]]', '[[supposition]]'],
      ['The alarm went off at 11.40 p.m.', 'Samuel', '[[“I’ve looked at the logs”]]', '[[fact? — check the log!]]'],
      ['Nobody was on site.', 'Samuel', '[[none]]', '[[not proved yet]]'],
      ['It may be worse than it looks.', 'Iris', '[[may]]', '[[supposition]]'],
      ['It might be the same pipe as last November.', 'Samuel', '[[might]]', '[[supposition]]'],
    ],
    notes: "Activité qui prépare la scène 3 (« Sort the witnesses », p. 16).",
    notesA: "Ligne 3 : Samuel cite les logs, mais la scène 3 montrera 23:41 et non 11.40. Ligne 4 : rien ne le prouve — la scène 3 montrera une entrée de badge à 20:04.",
  });

  d.tree({
    title: 'Fact or supposition? Ask two questions', tag: 'METHOD', page: 'Livret p. 8–9',
    start: 'A statement from the room',
    steps: [
      { q: 'Did someone **see** it — or is it in a **document**?', hint: 'a witness · the alarm log · a photo · a sign-out sheet', yes: { h: 'FACT — write it, with its source', t: '//The cleaners found water.// (they saw it)', color: 'accent3' } },
      { q: 'Does the speaker say **I think, may, might, probably…**?', hint: 'a certainty marker', yes: { h: 'SUPPOSITION — keep the marker', t: '//Iris thinks the pipe was leaking all night.//', color: 'accent1' } },
    ],
    last: { h: 'NOT PROVED YET — ask: “How do you know?”', t: '//Nobody was on site.// (Samuel — no source)', color: 'accent6' },
    notes: "Faire passer chaque phrase du tableau précédent dans l’arbre, à voix haute : « Did someone see it? No. Does Samuel say I think? No. So: not proved yet. »",
  });

  d.ladder({
    title: 'How sure are you? Words to say it', tag: 'VOCABULARY', page: 'Hors livret',
    rows: [
      { pct: '100 %', h: 'I KNOW', words: 'I know · it is certain · the log shows', ex: 'The cleaners found water — they saw it.', color: 'accent3' },
      { pct: '90 %', h: 'SURE', words: 'I’m sure · definitely · certainly', ex: 'It’s definitely the pipe above the ceiling.', color: '5E9A3C' },
      { pct: '70 %', h: 'PROBABLY', words: 'probably · I think · I believe · it seems', ex: 'The pipe was leaking all night, I think. (Iris, 06)', color: 'accent2' },
      { pct: '50 %', h: 'MAYBE', words: 'may · might · could · perhaps · maybe', ex: 'It may be worse than it looks. (Iris, 12)', color: 'accent1' },
      { pct: '20 %', h: 'DOUBT', words: 'probably not · I doubt it · it’s unlikely', ex: 'It’s unlikely that the alarm was faulty.', color: 'accent6' },
      { pct: '?', h: 'NO IDEA', words: 'I don’t know yet · I don’t want to guess', ex: 'Not yet. (Mark, 05) — honest and professional.', color: 'accent5' },
    ],
    notes: "Outil pour toute la séance (Hot seat, Act it out). Les modaux de certitude (must, can’t, should) seront approfondis en scène 7 : ici, simple reconnaissance.",
  });

  d.game({
    title: 'The rumour game', page: 'Hors livret', icon: 'FaVolumeMute',
    tagline: 'How a fact becomes a guess — in five whispers.',
    meta: 'Two teams in lines · 10 minutes · listening and speaking',
    steps: [
      'The first player of each team reads a card for **ten seconds**, then gives it back.',
      'Whisper it to the next player — **once only**, no repeating!',
      'The last player says it **aloud** and writes it on the board.',
      'Compare with the card: what changed — **the time? the verb? the certainty word?**',
    ],
    sayLabel: 'AFTER THE GAME',
    say: ['The time changed: it was //11.40//, not //11.14//.', 'The verb changed: //was leaking//, not //leaked//.', '//I think// disappeared — the guess became a fact!', 'We lost a detail: //on the second floor//.'],
    win: 'the team with the sentence closest to the card, **word for word**, scores.',
    notes: "Cartes à lire (une par manche) :\n1. Samuel was checking the server rack when Mark called him this morning.\n2. The contractor’s team was installing the new cabling on the second floor until eight.\n3. Iris thinks the pipe above the ceiling was leaking all night.\n4. The temperature alarm went off at 11.40 p.m., but nobody was on site.\n5. It might be the same pipe as last November.\n6. The cleaners found the water at ten to seven, and it was still running.\nMorale : une information transmise de bouche à oreille perd ses heures exactes et ses marqueurs de certitude — d’où « Facts only ».",
  });

  d.section('Grammar: the past continuous');
  d.cardGrid({
    title: 'The past continuous', tag: 'GRAMMAR', page: 'Livret p. 8–9',
    perRow: 4,
    cards: [
      { label: '+ AFFIRMATIVE', big: '^^was^^ + -ing', fr: 'you / we / they: **were**', ex: 'Samuel ^^was checking^^ the rack. They ^^were packing^^ their tools.' },
      { label: '– NEGATIVE', big: '^^wasn’t^^ + -ing', fr: 'you / we / they: **weren’t**', ex: 'Nobody ^^was watching^^ the room. They ^^weren’t working^^ at midnight.' },
      { label: '? QUESTION', big: '^^Was^^ … -ing?', fr: '**Were** they … -ing?', ex: '^^Was^^ the water still ^^running^^? ^^Were^^ they ^^sleeping^^?' },
      { label: 'SHORT ANSWERS', big: 'Yes, it ^^was^^.', fr: 'No, they **weren’t**.', ex: '^^Was^^ anyone ^^working^^? — No, nobody **was**.' },
    ],
    note: { kind: 'tip', label: 'Weak forms', text: 'in a sentence, //was// = /wəz/ and //were// = /wə/. Stress the verb, not //was//: Samuel was **CHECK**ing the rack.' },
    notes: "Forme : be au prétérit + V-ing. Faire répéter en chaîne avec les formes faibles /wəz/, /wə/.",
  });

  d.patterns({
    title: 'Four pictures of the past', tag: 'GRAMMAR', page: 'Livret p. 8–9',
    cards: [
      { h: 'IN PROGRESS AT A TIME', kind: 'progress', labels: ['was running', '23.41'], f: 'at + a time + ^^was -ing^^', ex: 'At 23.41, water ^^was running^^ behind the ceiling.' },
      { h: 'INTERRUPTED', kind: 'interrupt', labels: ['was checking', 'called'], f: '^^was -ing^^ + **when** + ==past simple==', ex: 'Samuel ^^was checking^^ the rack **when** Mark ==called== him.' },
      { h: 'AT THE SAME TIME', kind: 'parallel', labels: ['was reading', 'was taking photos'], f: '**while** + ^^was -ing^^ + ^^was -ing^^', ex: '**While** Iris ^^was taking^^ photos, Samuel ^^was reading^^ the log.' },
      { h: 'ONE AFTER ANOTHER', kind: 'sequence', labels: ['opened', 'saw', 'called'], f: '==past simple== + ==past simple==', ex: 'The cleaners ==opened== the door, ==saw== the water and ==called== Mark.' },
    ],
    notes: "Lire chaque schéma : la barre bleue = action en cours (past continuous) ; le point magenta = événement daté (past simple). Faire produire un exemple personnel par schéma : « At 8 p.m. yesterday I was… »",
  });

  d.timeline({
    title: 'Background and event: the night on a line', tag: 'GRAMMAR', page: 'Livret p. 8–9',
    intro: 'A **bar** is something in progress (past continuous). A **dot** is an event at a point in time (past simple).',
    axis: { from: 17, to: 32.7, ticks: [[18, '18.00'], [20, '20.00'], [22, '22.00'], [24, '00.00'], [26, '02.00'], [28, '04.00'], [30, '06.00']] },
    bars: [
      { from: 17.2, to: 19.97, label: 'the team was working', row: 0 },
      { from: 22.4, to: 30.83, label: 'water was running behind the ceiling', row: 1, open: true },
      { from: 23.2, to: 30.6, label: 'everybody was sleeping', row: 0, color: 'accent5' },
    ],
    points: [
      { at: 19.97, label: 'the team left', row: 0 },
      { at: 23.67, label: 'the alarm went off', row: 1 },
      { at: 30.83, label: 'the cleaners found the water', row: 0 },
    ],
    now: { at: 32.25, label: 'NOW 08.15' },
    legend: ['**bar** = background → ^^was / were + -ing^^', '**dot** = event → ==past simple=='],
    notes: "Faire verbaliser : « While everybody was sleeping, the alarm went off. » / « The water was still running when the cleaners found it. » Les heures exactes viendront de l’Exhibit A (scène 3).",
  });

  d.tree({
    title: 'Past simple or past continuous?', tag: 'GRAMMAR', page: 'Livret p. 8–9',
    start: 'A verb in the past',
    steps: [
      { q: 'Is it a **state verb**?', hint: 'know · want · be · believe · need · own · understand', yes: { h: 'PAST SIMPLE', t: 'Nobody ==knew== about the leak. (✗ //was knowing//)', color: MAGENTA_ } },
      { q: 'Was it **in progress** around a moment — a background?', hint: 'at 23.41 … · when … · while …', yes: { h: 'PAST CONTINUOUS — was / were + -ing', t: 'Water ^^was running^^ when the cleaners arrived.', color: 'accent2' } },
    ],
    last: { h: 'PAST SIMPLE — a finished event, a dot', t: 'The alarm ==went off== at 23.41. They ==opened== the door and ==saw== the water.', color: MAGENTA_ },
    notes: "Méthode en deux questions. Insister sur la première : les verbes d’état refusent -ing, même quand le français met un imparfait.",
  });

  d.compare({
    title: 'L’imparfait is not always -ing', tag: 'PITFALL', page: 'Livret p. 8–9',
    left: { h: 'Word for word — wrong', items: ['Nobody {{was knowing}} about the leak.', 'There {{was being}} water on the floor.', 'I {{was thinking}} it was the pipe.', 'Every night, the guard {{was checking}} the room.'] },
    right: { h: 'What a native speaker says', items: ['Nobody ==knew== about the leak.', 'There ==was== water on the floor.', 'I ==thought== it was the pipe. //(opinion)//', 'Every night, the guard ==checked== the room. //(habit)//'] },
    note: { kind: 'trap', text: 'imparfait = past continuous **only** for an action in progress. State verbs (//be, have, know, want, think = croire//), opinions and habits → **past simple**.' },
    notes: "Lire chaque paire à voix haute ; faire retrouver la règle avant de dévoiler l’encadré.",
  });

  d.list({
    title: 'Past simple or past continuous?', tag: '+ EXTRA', page: 'Hors livret',
    items: [
      'Samuel [[was checking]] (check) the rack when Mark [[called]] (call) him.',
      'At 23.41 the water [[was still running]] (still run).',
      'The cleaners [[opened]] (open) the door and [[saw]] (see) the water.',
      'While Iris [[was taking]] (take) photos, Samuel [[was reading]] (read) the log.',
      'Nobody [[knew]] (know) about the leak.',
      'The team [[was installing]] (install) cabling when the manager [[arrived]] (arrive).',
    ],
    note: { kind: 'watch', text: 'two actions in a row (open, see) → **past simple ×2** · two backgrounds → **past continuous ×2** · //know// = state verb → **knew**.' },
  });

  d.section('Listening: the cleaner');
  d.banner({
    title: 'The cleaner’s story', tag: 'LISTENING', page: 'Hors livret',
    banner: { icon: 'FaBroom', color: 'accent2', h: 'Cleaning team — 06.50', sub: 'Your teacher reads her statement **twice**. Listen for **what was happening** and **what happened**.' },
    cards: [
      { icon: 'FaClock', color: 'tx2', h: '1 · When?', t: 'What time did she arrive? What time was it when she called for help?' },
      { icon: 'FaRunning', color: 'accent2', h: '2 · Background', t: 'What **was** her colleague **doing**? What **was** she **doing** when she heard the water?' },
      { icon: 'FaEye', color: MAGENTA_, h: '3 · Events', t: 'What did she see? What **three things** did she do? Does she know when it started?' },
    ],
    notes: "SCRIPT (à lire deux fois, à vitesse naturelle — texte inventé, cohérent avec le dossier) :\n« It was about a quarter to seven when we arrived. My colleague was emptying the bins on the ground floor, so I went up to the second floor alone. I was pushing my trolley along the corridor when I heard water. It was coming from the technical room. I opened the door: water was running down from the ceiling and the floor was soaked. A ceiling tile was hanging down. I didn’t touch the computers. I put a bucket under the leak, I put a “wet floor” sign at the door, and I called the emergency number. It was ten to seven. When did it start? I have no idea. »",
  });

  d.list({
    title: 'The cleaner’s story — her statement', tag: 'LISTENING', page: 'Hors livret', mode: 'a',
    instr: '^^Blue^^ = background (was / were + -ing) · ==magenta== = event (past simple).',
    number: false, gap: 9, maxA: 21,
    items: [
      'It ==was== about **a quarter to seven** when we ==arrived==. My colleague ^^was emptying^^ the bins on the ground floor, so I ==went up== to the second floor alone.',
      'I ^^was pushing^^ my trolley along the corridor when I ==heard== water. It ^^was coming^^ from the technical room.',
      'I ==opened== the door: water ^^was running^^ down from the ceiling and the floor ==was== soaked. A ceiling tile ^^was hanging^^ down.',
      'I ==didn’t touch== the computers. I ==put== a bucket under the leak, I ==put== a “wet floor” sign at the door, and I ==called== the emergency number. It ==was== **ten to seven**.',
      'When did it start? **I have no idea.**',
    ],
    note: { kind: 'keep', text: 'she gives two times (6.45, 6.50) — and she **refuses to guess** when it started. That is a good witness.' },
    notesA: "Correction directement sur le script. Réponses : arrivée vers 6.45 ; appel à 6.50 ; la collègue vidait les poubelles ; elle poussait son chariot ; elle a vu l’eau couler du plafond, le sol trempé, une dalle pendante ; trois actions : seau, panneau, appel ; elle ne sait pas quand ça a commencé. Faire compter : 5 past continuous, plus de 10 past simple.",
  });

  d.section('Words and speaking');
  d.table({
    title: 'Water damage: the words you will need', tag: 'WORD FILE', page: 'Hors livret',
    headers: ['ENGLISH', 'FRANÇAIS', 'IN THE FILE'], colW: [3.2, 3.3, 5.63], boldCol: 0, align: ['center', 'center', 'left'],
    rows: [
      ['a leak · to leak', 'une fuite · fuir', 'The pipe above the ceiling ^^was leaking^^.'],
      ['to drip', 'goutter', 'Water ^^was dripping^^ from the ceiling.'],
      ['a burst pipe', 'une canalisation éclatée', 'It **might be** a burst pipe.'],
      ['soaked · damp', 'trempé · humide', 'The floor is **soaked**; the wall is **damp**.'],
      ['a stain · a crack', 'une tache · une fissure', 'Iris noticed a **crack** in the ceiling.'],
      ['to mop up · to dry out', 'éponger · sécher', 'The cleaners ==mopped up== the water.'],
      ['to turn off the water', 'couper l’eau', 'Did anyone ==turn off== the water?'],
      ['to call out a plumber', 'faire venir un plombier', 'We ==called out== a plumber at nine.'],
      ['water damage · to file a claim', 'un dégât des eaux · déclarer un sinistre', 'We will **file a claim** for **water damage**.'],
    ],
    notes: "Prononciation : plumber /ˈplʌmə/ (b muet) · damp /dæmp/ · soaked /səʊkt/ · claim /kleɪm/.",
  });

  d.roleCards({
    title: 'Hot seat — the people in the room', tag: 'GAME', page: 'Hors livret',
    cards: [
      { who: 'MARK', name: 'Mark', role: 'called you at 6.58', color: 'tx2', lines: ['**You were** standing in the doorway.', '**You know:** the water was still running.', '**You don’t know:** when it started.'] },
      { who: 'IRIS', name: 'Iris', role: 'just back from the 2nd floor', color: 'accent3', lines: ['**You were** photographing the ceiling.', '**You know:** the floor is soaked.', '**You think:** it was leaking all night.'] },
      { who: 'SAMUEL', name: 'Samuel', role: 'behind the server rack', color: 'accent2', lines: ['**You were** checking the server rack.', '**You know:** the alarm went off at 11.40.', '**You don’t know:** who was on site.'] },
      { who: 'CLEANER', name: 'The cleaner', role: 'cleaning team, 06.50', color: 'accent1', icon: 'FaBroom', lines: ['**You were** pushing your trolley.', '**You know:** water was running at 6.50.', '**You don’t know:** when it started.'] },
    ],
    ask: '**One student = one character**, two minutes in the hot seat. The class asks: //What were you doing when…? · How do you know? · Are you sure?// — answer **in character**, with a certainty word.',
    notes: "Un élève par personnage, 2 minutes chacun. La classe gagne un point si le personnage se contredit ou affirme une supposition comme un fait (« Are you sure? » → il doit nuancer : I think / I don’t know yet).",
  });

  d.headerCards({
    title: 'Act it out — three rounds', tag: 'SPEAKING', page: 'Livret p. 8–9',
    perRow: 3,
    cards: [
      { h: 'ROUND 1 — READ', color: 'accent4', icon: 'FaBookOpen', lines: ['Groups of four: **Mark · You · Iris · Samuel**.', 'Read lines 01–15 aloud, then swap roles.'] },
      { h: 'ROUND 2 — PROMPTS ONLY', color: 'accent1', icon: 'FaListOl', lines: ['Close the booklet.', 'Replay the scene from these prompts: //early · seven · water · not yet · two units · all night · until eight · 11.40 · insurer · worse · November · nine//'] },
      { h: 'ROUND 3 — MOOD CARDS', color: MAGENTA_, icon: 'FaTheaterMasks', lines: ['Each player draws a **mood** (next slide).', 'Replay the scene in that mood.', 'The class guesses the moods.'] },
    ],
    note: { kind: 'tip', label: 'Pronunciation', text: '//I’ve looked · we’ve had// — contract! · Yes/no questions go **up ↗**: //Has anyone told the insurer yet?// · ceiling /ˈsiːlɪŋ/ · soaked /səʊkt/' },
  });

  d.iconGrid({
    title: 'Mood cards', tag: 'GAME', page: 'Hors livret',
    perRow: 3,
    items: [
      { icon: 'FaRegSurprise', h: 'Panicked', t: 'Fast, loud, everything is a disaster.', color: 'accent6' },
      { icon: 'FaBed', h: 'Half asleep', t: 'Slow, yawning, it is far too early.', color: 'accent5' },
      { icon: 'FaRegAngry', h: 'Furious', t: 'Short sentences. Somebody will pay!', color: 'accent1' },
      { icon: 'FaUserTie', h: 'Very, very polite', t: '//Would you mind… · I’m terribly sorry…//', color: 'tx2' },
      { icon: 'FaVolumeMute', h: 'Whispering', t: 'It’s a secret — nobody must hear.', color: 'accent4' },
      { icon: 'FaUserSecret', h: 'TV detective', t: 'Slow, dramatic, suspicious of everybody.', color: MAGENTA_ },
    ],
    note: { kind: 'keep', label: 'Rule', text: 'the **words** of the scene do not change — only the **voice**: speed, volume, intonation.' },
    notes: "Imprimer ou projeter ; chaque joueur tire une humeur au hasard (dé : 1 à 6). Excellent travail de l’intonation sans changer le texte.",
  });

  d.closing({
    cliff: '“Right. I need a timeline of last night on this board **by nine**. Facts only.” It is 8.20. You have forty minutes and an empty whiteboard.',
    homework: ['Learn the **past continuous**: form + the four pictures.', 'Learn the **words of the room** (picture dictionary + word file).', 'Read p. 9 and underline the **twelve verbs** in brackets.'],
    exit: 'Finish the sentence: //When the cleaners arrived, …// (use the past continuous).',
  });
};

