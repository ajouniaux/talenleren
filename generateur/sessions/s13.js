// Séance 13 — Scene 6, 11.30 (livret p. 28–31) — light style, modelled on the Séance 1 deck
const { MAGENTA } = require('../lib_light');

exports.meta = {
  n: 13, style: 'light', slug: 'Scene6_The_insurer_calls_back', title: 'The insurer calls back',
  subtitle: 'She is not asking what you believe. She is asking since when.', pages: 'Livret p. 28–31', img: 's6_insurer', time: '11.30', sceneLabel: 'SCENE 6',
  coverNotes: "Séance 13 — Scène 6 (11.30), livret p. 28–31 : le message vocal d’Helen Marsh (à passer deux fois), for / since + present perfect, rappeler l’assureur sans nommer personne.\n"
    + "Le script audio n’est pas dans le livret : les réponses aux questions 1, 2, 3, 5 et 6 sont des réponses probables, à vérifier avec votre enregistrement (l’échéance exacte en particulier).\n"
    + "Nouveautés : Beat the clock (faux amis) · lecteur de messagerie + bloc-notes · dominos du vocabulaire de l’assurance · épingle et mètre ruban de for / since · tri present perfect / prétérit (pont S3, S9) · choix binaire (Dry run A) · questions en désordre (Dry run B) · roue « How long have you…? » · Two truths and a lie · « Name the fact, not the person » (pont S7, passif) · ENERGIZER au téléphone (professionnel ou trop direct ?) · une minute au téléphone (minuteur) · carrousel de jeux de rôle.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · scène + message × 2 (15') · Q1–Q6 + vocabulaire (15') · for / since (15') · Dry run A–C (10') · roue ou jeu (5') · sans nommer personne (5') · ENERGIZER (3') · rappeler l’assureur + carrousel (15') · clôture (2').\n"
    + "Les diapositives GAME, ENERGIZER et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.countdown({
    title: 'Beat the clock: last session’s traps', tag: 'WARM-UP', page: 'Séance 12',
    seconds: 60, challenge: 'Eight answers in one minute',
    scoring: 'Teams of three · one point per right answer · a bonus point for the first team to finish',
    prompts: [
      { q: '//un délai// →', a: 'a deadline' },
      { q: '//actuellement// →', a: 'currently' },
      { q: '//assister à la réunion// →', a: 'to attend the meeting' },
      { q: '//contrôler la pièce// →', a: 'to check the room' },
      { q: '//nier toute responsabilité// →', a: 'to deny any responsibility' },
      { q: '//relancer l’assureur// →', a: 'to chase the insurer (up)' },
      { q: 'Fix it: //It is closed since Monday.//', a: 'It has been closed since Monday.' },
      { q: 'Fix it: //We have a delay of two days.//', a: 'We have two days left.' },
    ],
    notes: "Réactivation de la séance 12 : faux amis, verbes de l’assureur, aperçu de for / since. Les équipes écrivent sur une feuille ; correction collective.",
  });

  d.section('Scene 6');
  d.scene({
    title: 'The insurer calls back', tag: 'SCENE', page: 'Livret p. 28', img: 's6_insurer', time: '11.30', sceneLabel: 'SCENE 6',
    alt: 'Mark, Samuel, Iris and the narrator around a phone on speaker: “I am not asking you what caused it. I am asking you what you can prove.”',
    text: ['Mark puts his phone on the table and presses **speaker**. The claims assessor has left a message.', 'She does not sound unfriendly. She sounds like somebody who has heard **a great many stories** before lunch.'],
    ask: 'What do you think an assessor wants **first**: a cause, or evidence?',
    notes: "Bulles : « I am not asking you what caused it. » / « I am asking you what you can prove. » Faire deviner avant l’écoute : evidence before explanations.",
  });

  d.audioNotes({
    title: 'Voicemail — listen twice', tag: 'LISTENING', page: 'Livret p. 28',
    vm: { who: 'Helen Marsh', role: 'Claims assessor', time: 'Received at 11.26', dur: '0:55' },
    steps: ['**1st listening** — pens down: tone + two demands', '**2nd listening** — notes in the four boxes', 'Miss the deadline or the prohibition → **lose the case**'],
    padTitle: 'MY NOTES — 11.26',
    fields: [
      { h: 'SHE WANTS FIRST', a: 'the alarm log + the photographs' },
      { h: 'DEADLINE (DAY + TIME)', a: 'day + time, exactly as she says it' },
      { h: 'DO NOT WRITE', a: 'a cause that has not been proved — no names' },
      { h: 'HER QUESTION', a: 'How long has this been going on?' },
    ],
    notes: "Première écoute stylos posés (ton, deux demandes). Seconde écoute : prise de notes dans les quatre cases.",
    notesA: "Réponses probables, déduites du livret (titre de la scène, bulles, p. 30–31, p. 43) : à ajuster à votre enregistrement, en particulier l’échéance (jour + heure).",
  });

  d.mcq({
    title: 'What she wants — Q1', tag: 'YOUR MOVE', page: 'Livret p. 29',
    q: '**1.** What does Ms Marsh want from you first?',
    opts: ['A full report with a stated cause.', 'The alarm log and the photographs.', 'The contractor’s written statement.', 'A telephone call from Mr Shaw himself.'],
    ans: 1,
    why: 'She wants **evidence before explanations**: the log (verifiable times) and the photographs (the state of the room). //To be checked against your recording.//',
    notes: "Vote à main levée, puis justification avec les notes prises pendant l’écoute.",
  });

  d.list({
    title: 'What she warns you about — Q2 · Q3 · Q5 · Q6', tag: 'YOUR MOVE', page: 'Livret p. 29',
    number: false, gap: 6,
    items: [
      { q: '**2.** She gives a deadline. What is it exactly, and what happens if you miss it?', a: 'Day + time **as said in the recording** — note it in full. If you miss it, the claim is delayed — or refused.' },
      { q: '**3.** She warns you about one thing you must **not** put in the report. What, and why?', a: 'A **cause that has not been proved** (and no names): an unproved cause stated as a fact gives her grounds to refuse.' },
      { q: '**5.** She asks one question that nobody in the room can answer yet. Which one?', a: '**How long has this been going on?** — since when has the pipe been faulty?' },
      { q: '**6.** “I am not asking you what caused it. I am asking you what you can prove.” What does that change about the report?', a: 'The report is built on **verifiable facts** (times, log, photos); the cause may only appear as a **hypothesis** (//may / might//).' },
    ],
    notes: "Comparer les notes en binôme avant la correction.",
    notesA: "Réponses probables, déduites du livret (titre de la scène, bulles, p. 30–31, p. 43). À ajuster à l’enregistrement, en particulier l’échéance exacte (Q2).",
  });

  d.mcq({
    title: 'What she wants — Q4', tag: 'YOUR MOVE', page: 'Livret p. 29',
    q: '**4.** Is it correct to say that she has already decided to refuse the claim?',
    opts: ['Yes: she says the file looks weak.', 'Yes: she mentions a previous refusal.', 'No: she asks for evidence before deciding.', 'No: she has already accepted it in principle.'],
    ans: 2,
    why: 'She has **not decided** anything: she asks for evidence first. An assessor neither refuses nor accepts before reading the file.',
  });

  d.dominoes({
    title: 'The assessor’s words: build the chain', tag: 'VOCABULARY', page: 'Hors livret',
    instr: 'Each word (dark) finds its meaning (green) on the next domino. From START to FINISH.',
    perRow: 3,
    tiles: [
      { l: 'START', r: 'a claim' },
      { l: 'a request for money after a loss', r: 'the policy' },
      { l: 'the contract with the insurer', r: 'the excess' },
      { l: 'the part of the loss you pay yourself', r: 'cover' },
      { l: 'what the policy protects you against', r: 'wear and tear' },
      { l: 'damage caused slowly, by age and use', r: 'to settle a claim' },
      { l: 'to pay it and close the file', r: 'to turn it down' },
      { l: 'to refuse to pay', r: 'the assessor' },
      { l: 'the person who decides how much to pay', r: 'FINISH' },
    ],
    shuffle: [4, 0, 7, 2, 8, 5, 1, 6, 3],
    notes: "Hors livret. En binôme : découper les dominos (ou les numéroter) et reconstituer la chaîne.\nFrançais : a claim = une déclaration de sinistre, une demande d’indemnisation · the policy = la police d’assurance · the excess (UK) / the deductible (US) = la franchise · cover = la garantie, la couverture · wear and tear = l’usure · to settle a claim = régler un sinistre · to turn down = refuser · the assessor / loss adjuster = l’expert.",
    notesA: "Lien avec la séance 12 : « the pipe is old » → wear and tear, souvent exclu de la garantie. D’où l’importance d’un événement soudain (sudden and accidental damage).",
  });

  d.section('For or since?');
  d.picture({
    title: 'How long has this pipe been faulty?', tag: 'FIELD NOTE', page: 'Livret p. 30', img: 's6_for_since', imgW: 7.0,
    alt: 'At the whiteboard: FOR + duration, for about three months · SINCE + starting point, since the summer · It is faulty since… (French trap) · It has been faulty for… (English)',
    cards: [
      { h: 'FOR = the distance', t: '+ a duration: //for about three months//', color: 'accent2', icon: 'FaRulerHorizontal' },
      { h: 'SINCE = where it starts', t: '+ a starting point: //since the summer//', color: MAGENTA, icon: 'FaMapPin' },
      { h: 'The question', t: '**How long has** this pipe **been** faulty?', color: 'tx2', icon: 'FaQuestion' },
      { h: 'The French trap', t: '✗ //It is faulty since…// → ✓ It **has been** faulty for…', color: 'accent6', icon: 'FaExclamationTriangle' },
    ],
    notes: "Faire lire le tableau à voix haute. Dernière ligne du tableau : « We have not established that yet. » — not … yet, travaillé au Dry run C.",
  });

  d.ruler({
    title: 'Since = the pin · for = the tape', tag: 'GRAMMAR', page: 'Livret p. 30',
    ticks: ['June', 'July', 'August', 'September', 'October', 'November'],
    from: 0.45, to: 0.92, start: 'since the summer', len: 'for about three months', now: 'NOW · November',
    sinceCard: { h: 'SINCE + a starting point = a pin', t: 'It **has been** faulty **since the summer**.\nsince August · since last November · since 7 o’clock' },
    forCard: { h: 'FOR + a length of time = a tape', t: 'It **has been** faulty **for about three months**.\nfor weeks · for two days · for a long time' },
    note: { kind: 'trap', text: '//il y a trois mois// = three months **ago** (past simple: //It started three months ago//) ≠ //depuis trois mois// = **for** three months (present perfect).' },
    notes: "Frise indicative : le mois exact du début n’est pas donné par le livret, seulement « since the summer » et « about three months ». Insister sur ago (prétérit) ≠ for (present perfect).",
  });

  d.sort({
    title: 'Which tense does it call for?', tag: 'BRIDGE', page: 'Séances 3 · 9 · 13',
    instr: 'Ten time expressions. Still true now → **present perfect**. A finished time → **past simple**.',
    bankLabel: 'TIME WORDS', bankSize: 15,
    categories: [
      { h: 'PRESENT PERFECT', sub: 'it is still true now — has been, have done', color: 'accent2' },
      { h: 'PAST SIMPLE', sub: 'a finished time — was, did', color: MAGENTA },
    ],
    items: [
      { t: 'since the summer', a: '**since the summer** — It **has been** faulty since the summer.', cat: 0 },
      { t: 'three months ago', a: '**three months ago** — It **started** three months ago.', cat: 1 },
      { t: 'for eight months', a: '**for eight months** — I **have worked** here for eight months.', cat: 0 },
      { t: 'last November', a: '**last November** — The same section **failed** last November.', cat: 1 },
      { t: 'so far', a: '**so far** — So far, we **have found** no evidence.', cat: 0 },
      { t: 'at 23.41', a: '**at 23.41** — The alarm **went off** at 23.41.', cat: 1 },
      { t: 'not … yet', a: '**not … yet** — We **have not inspected** the basement yet.', cat: 0 },
      { t: 'yesterday evening', a: '**yesterday evening** — I **checked** the floor yesterday evening.', cat: 1 },
      { t: 'since 7 o’clock', a: '**since 7 o’clock** — The floor **has been** closed since 7.', cat: 0 },
      { t: 'when the team left', a: '**when the team left** — Everything **was** dry when the team left.', cat: 1 },
    ],
    notes: "Pont avec le prétérit (séance 3), le present perfect (séance 9) et les deux formes verbales de Verdier (séance 11). Faire produire une phrase du dossier pour chaque expression.",
  });

  d.either({
    title: 'One minute before you dial', tag: 'DRY RUN', page: 'Livret p. 30',
    instr: 'A · //for// or //since//?',
    instrA: '**since** + a starting point (a pin) · **for** + a length of time (a tape).',
    rows: [
      { s: 'The joint has been faulty ___ June.', opts: ['for', 'since'], ans: 1 },
      { s: 'We have worked on this site ___ eight months.', opts: ['for', 'since'], ans: 0 },
      { s: 'Nobody has used the basement ___ the summer.', opts: ['for', 'since'], ans: 1 },
      { s: 'She has had the file ___ two days.', opts: ['for', 'since'], ans: 0 },
      { s: 'The second floor has been closed ___ 7 o’clock.', opts: ['for', 'since'], ans: 1 },
      { s: 'Mark has been on the phone ___ twenty minutes.', opts: ['for', 'since'], ans: 0 },
      { s: 'We have known about the joint ___ last November.', opts: ['for', 'since'], ans: 1 },
      { s: 'Unit 3 has been down ___ nine hours.', opts: ['for', 'since'], ans: 0 },
    ],
    notes: "Lignes 1 à 4 : livret p. 30. Lignes 5 à 8 : ajoutées (hors livret), avec des faits du dossier. Réponse à l’ardoise (F / S) ou avec les gestes de l’ENERGIZER de la séance 12 (épingle / bras ouverts).",
  });

  d.scramble({
    title: 'Build the question the assessor will ask', tag: 'DRY RUN', page: 'Livret p. 30',
    instr: 'B · Put the words in order. Every question starts with **How long**.',
    rows: [
      { words: ['going on', 'been', 'How long', 'this', 'has', '?'], a: 'How long has this been going on?' },
      { words: ['known', 'you', 'about the joint', 'have', 'How long', '?'], a: 'How long have you known about the joint?' },
      { words: ['the second floor', 'been', 'How long', 'closed', 'has', '?'], a: 'How long has the second floor been closed?' },
      { words: ['on this site', 'How long', 'worked', 'you', 'have', '?'], a: 'How long have you worked on this site?' },
    ],
    notes: "Questions 1 et 2 : livret p. 30. Questions 3 et 4 : ajoutées (hors livret). Ordre : How long + have / has + sujet + participe passé (+ -ing).",
  });

  d.list({
    title: 'Say the honest sentence', tag: 'DRY RUN', page: 'Livret p. 30',
    instr: 'C · You do not know the answer. Write it in English, three ways.',
    items: [
      '(not … yet) → [[We have not identified the cause yet.]]', '(so far) → [[So far, we have found no evidence of when it started.]]', '(we are still) → [[We are still waiting for the basement inspection.]]',
      { h: '+ Three more, about the file', reset: false },
      '(not … yet — the basement) → [[The basement has not been inspected yet.]]', '(so far — the cause) → [[So far, nobody has confirmed the cause.]]', '(still — the second floor) → [[The second floor is still closed.]]',
    ],
    note: { kind: 'keep', text: '//not … yet//, //so far// → **present perfect** · //still// goes before the main verb, after //be//: //We are **still** waiting.//' },
    notes: "Trois façons honnêtes de dire « je ne sais pas encore » : un assureur préfère une incertitude assumée à une cause inventée. Lignes 4 à 6 : ajoutées (hors livret).",
  });

  d.wheel({
    title: 'Spin the wheel: how long have you…?', page: 'Hors livret',
    prompts: [
      'How long have you **lived** in your town?',
      'How long have you **known** your best friend?',
      'How long have you **had** your phone?',
      'How long have you **been** a student here?',
      'How long have you **studied** English?',
      'How long have you **played** your sport or instrument?',
      'What have you **wanted** to do **for** years?',
      'What **haven’t** you done **yet** this week?',
    ],
    rules: 'Answer with **for** AND **since**, then ask the question back. A follow-up in the past simple — //When did you start?// — wins a point.',
    notes: "En binôme : lancer un dé à huit faces (ou tirer un nombre de 1 à 8). Pont : present perfect (durée jusqu’à maintenant) → prétérit pour le point de départ (« I started in 2019 »).",
  });

  d.game({
    title: 'Two truths and a lie', page: 'Hors livret', icon: 'FaUserSecret',
    tagline: 'Two truths and a lie — since when?',
    meta: 'Groups of four · 10 minutes · present perfect + for / since',
    steps: [
      'Write three sentences about yourself with //for// or //since//: two are true, one is a lie.',
      'Read them to your group. Each listener asks **one** question: //When did you start? Why?//',
      'The group votes: which one is the lie?',
      'You score one point for each person you fool.',
    ],
    say: ['I **have lived** in … **for** …', 'I **have known** … **since** we were …', 'I **have had** my … **for** …', 'I **haven’t** … **since** …', 'When **did** you start?'],
    win: 'fool the most people — with sentences that are grammatically perfect.',
    notes: "Une phrase fausse grammaticalement ne compte pas. Rappel : la question de suivi est au prétérit (When did you start?).",
  });

  d.section('Call her back');
  d.compare({
    title: 'Name the fact, not the person', tag: 'BRIDGE', page: 'Livret p. 31 & 42',
    intro: 'Ms Marsh does not want names. Keep the **time**, the **place** and the **action** — drop the person.',
    left: { h: 'It points at somebody', items: ['//The site manager entered the room at 20.04.//', '//Samuel has known about the pipe since the summer.//', '//Verdier’s men damaged the pipe.//'] },
    right: { h: 'It names the fact', items: ['**An access was recorded** in zone 2F at 20.04.', '**Trouble has been reported** on this section since the summer.', '**The cause has not been established** yet.'] },
    note: { kind: 'keep', label: 'Séance 7', text: 'passive = **be + past participle**: was recorded · has been reported · has not been established.' },
    notes: "Pont avec les participes passés (séance 7) et le passif du rapport (séance 16). Le livret, p. 42 : ne nommer personne.",
  });

  d.list({
    title: 'Drop the name: rewrite it', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Rewrite each sentence in the **passive**. Keep the time and the place.',
    items: [
      'Badge 0102 entered zone 2F at 20.04. → [[An access to zone 2F was recorded at 20.04.]]',
      'The cleaners found the water at 6.50. → [[The water was found at 6.50.]]',
      'Mark closed the second floor at 7 o’clock. → [[The second floor was closed at 7 o’clock.]]',
      'Nobody has inspected the basement. → [[The basement has not been inspected yet.]]',
    ],
    notes: "Hors livret. Les trois premières phrases : passif au prétérit (was + participe). La dernière : present perfect passif (has not been + participe).",
  });

  d.energizer({
    title: 'Hold the line!', page: 'Hors livret', icon: 'FaPhoneAlt',
    tagline: 'Your teacher reads a phone sentence. Professional — or too direct?',
    meta: 'Everybody · 3 minutes · thumbs, then the better version',
    actions: [
      { h: 'PROFESSIONAL', t: 'Thumbs **up**: you can say it to an assessor.', icon: 'FaThumbsUp', color: 'accent3' },
      { h: 'TOO DIRECT', t: 'Thumbs **down**: say it again, politely!', icon: 'FaThumbsDown', color: 'accent6' },
    ],
    rules: ['Thumbs up or down on “three, two, one!”', 'Too direct? The first student to stand up gives the professional version.'],
    items: [
      { s: 'Could I speak to Ms Marsh, please?', a: 0 }, { s: 'Give me Ms Marsh. → //Could I speak to…?//', a: 1 },
      { s: 'I’m calling about the Atlas House claim.', a: 0 }, { s: 'What do you want? → //How can I help you?//', a: 1 },
      { s: 'I’m afraid I can’t confirm that at this stage.', a: 0 }, { s: 'I don’t know. → //I’m afraid I can’t say yet.//', a: 1 },
      { s: 'Could you repeat the deadline, please?', a: 0 }, { s: 'Speak slower! → //Could you speak more slowly?//', a: 1 },
      { s: 'Let me check and get back to you.', a: 0 }, { s: 'Wait. → //Could you hold on a moment?//', a: 1 },
      { s: 'Thank you for your time.', a: 0 }, { s: 'OK, bye. → //Goodbye, and thank you.//', a: 1 },
    ],
    instrA: 'Six phrases to keep for the call — and six to rephrase.',
    notes: "Lire les phrases dans le désordre (sans la version corrigée). Pour chaque phrase « trop directe », faire proposer la version professionnelle avant de projeter la correction.",
  });

  d.list({
    title: 'Call her back', tag: 'YOUR MOVE', page: 'Livret p. 31',
    instr: 'Three questions to handle, one minute before she takes on another file. Write the three sentences you will say.',
    number: false, gap: 8,
    items: [
      { q: 'One with **for** or **since**.', a: '//We have had trouble with this section of pipework since the summer.//' },
      { q: 'One with **not … yet**.', a: '//We have not established the cause yet: the basement has not been inspected yet.//' },
      { q: 'One that **avoids naming anybody**.', a: '//An access to zone 2F was recorded between 20.04 and 20.19.//' },
    ],
    note: { kind: 'tip', text: 'Open: //Ms Marsh, this is … from …, calling about Atlas House.// · Close: //You will have the report by …// Short sentences, no hesitation.' },
    notes: "Écriture individuelle (5 minutes), puis lecture à voix haute. Les réponses sont des modèles parmi d’autres.",
  });

  d.countdown({
    title: 'One minute on the phone', tag: 'SPEAKING', page: 'Livret p. 31',
    seconds: 60, challenge: 'Six questions, one minute — no hesitation',
    scoring: 'In pairs: B is the assessor and asks, A answers. A hesitation? Start again. Then swap.',
    prompts: [
      { q: 'How long has this been going on?', a: 'We have had trouble with this section since the summer.' },
      { q: 'Who was in the room last night?', a: 'An access was recorded at 20.04. We are checking the details.' },
      { q: 'So what caused it?', a: 'We have not established the cause yet.' },
      { q: 'Has anyone inspected the basement?', a: 'Not yet. Nobody has been down there so far.' },
      { q: 'Is the second floor still closed?', a: 'Yes. It has been closed since seven o’clock.' },
      { q: 'When will I have the report?', a: 'You will have it by … (her deadline).' },
    ],
    notes: "Entraînement avant le carrousel. Les réponses du corrigé sont des modèles : accepter toute réponse qui respecte les trois règles (for / since, not … yet, pas de nom).",
  });

  d.carousel({
    title: 'Role play: the phone carousel', page: 'Livret p. 31',
    a: 'the firm — three sentences, no names, one minute',
    b: 'Ms Marsh — three questions, then she hangs up',
    steps: [
      'Inner circle = **A**, outer circle = **B**. Face your partner.',
      'B: //Helen Marsh speaking.// A: //Ms Marsh, this is … from …, calling about Atlas House.//',
      'B asks: **How long has this been going on? · Who was in the room? · So what caused it?**',
      'After **one minute**, B hangs up. The outer circle moves **one chair** to the right.',
      'After three calls, swap roles. If you don’t know: //I’m afraid I can’t confirm that at this stage.//',
    ],
    notes: "Avec un petit groupe : deux rangées de chaises face à face. Le professeur donne le top et la fin de chaque minute. Variante : B peut ajouter une question imprévue au troisième appel.",
  });

  d.closing({
    cliff: 'As you hang up, Samuel says quietly: **“Before you write anything — nobody has been down to the basement.”**',
    homework: ['Learn **for / since** + present perfect — and **ago** + past simple.', 'Learn three ways to say //I don’t know yet//: not … yet · so far · still.', 'Learn the assessor’s words: claim · policy · excess · cover · wear and tear.', 'Write your three call-back sentences again, from memory.'],
    exit: 'How long have you been studying English? Answer with **for**, then with **since**.',
  });
};
