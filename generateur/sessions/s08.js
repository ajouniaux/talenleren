// Séance 8 — Scene 3: sort the witnesses + your expert (livret p. 16–17) — light style, modelled on the Séance 1 deck
const { MAGENTA: MAGENTA_ } = require('../lib_light');

exports.meta = {
  n: 8, style: 'light', slug: 'Scene3_Sort_the_witnesses', title: 'Sort the witnesses', coverTitle: 'Sort\nthe witnesses',
  subtitle: 'At nine o’clock Mark will ask you what holds up.', pages: 'Livret p. 16–17', img: 's3_log', time: '09.05', sceneLabel: 'SCENE 3',
  coverNotes: "Séance 8 — Scène 3, livret p. 16–17 : tri des déclarations (P / N / C) et premières questions d’experts.\n"
    + "Objectifs : le langage de la preuve (prove, confirm, show, suggest, does not establish), evidence / proof, « no record ≠ nobody », sent / delivered / read / acknowledged, expliquer son domaine en anglais simple.\n"
    + "Formats variés : cartes-devinettes (warm-up) · remise en ordre (échelle) · intrus · classement P / N / C · repérage dans l’image · remise en ordre (chaîne) · vrai ou faux (écoute) · appariement (expert ↔ question) · texte à corriger (article de presse) · Taboo · jeu de rôle.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · échelle de la preuve + intrus + arbre (15') · Sort the witnesses (15') · repérage dans l’image + no record (10') · la chaîne d’une alerte + écoute (10') · Your expert (15') · article à corriger (10') · Taboo ou jeu de rôle (10').\n"
    + "Les diapositives GAME et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.flashcards({
    title: 'Warm-up: which block is it?', tag: 'WARM-UP', page: 'Séance 7',
    instr: 'Read the clue — say the **verb + noun** block. Teams take turns.',
    perRow: 4,
    cards: [
      { q: 'What the cleaners did at 6.50, when they called for help.', a: 'raise the alarm', fr: 'donner l’alerte' },
      { q: 'What you do with an insurer after water damage.', a: 'file a claim', fr: 'déclarer un sinistre' },
      { q: 'What the expert will do with the damage this afternoon.', a: 'assess the damage', fr: 'évaluer les dégâts' },
      { q: 'What the site manager did at 20:04, on paper.', a: 'carry out an inspection', fr: 'effectuer une inspection' },
      { q: 'What you must do with Friday’s deadline.', a: 'meet the deadline', fr: 'respecter le délai' },
      { q: 'What the property manager must do with the floor.', a: 'make good the floor', fr: 'remettre en état' },
      { q: 'What you will do with your report by 5 p.m.', a: 'draw up a report', fr: 'rédiger un rapport' },
      { q: 'What Legal has done to protect the file.', a: 'take steps', fr: 'prendre des mesures' },
    ],
    notes: "Réactivation de la séance 7 sous forme de devinettes : une équipe lit l’indice, l’autre répond avec la collocation complète.",
  });

  d.section('The language of evidence');
  d.reorder({
    title: 'Build the evidence ladder', tag: 'VOCABULARY', page: 'Hors livret',
    instr: 'Put the five verbs in order — from the **strongest** (100 %) to the **weakest** (✗).',
    instrA: 'Strongest first. Climb the ladder with the same piece of evidence: //The 23:42 line proves… shows… does not establish…//',
    items: [
      { tag: 'PROVES', t: 'The badge log **proves** that badge 0102 was used at 20:04.' },
      { tag: 'CONFIRMS', t: 'The log **confirms** that unit 3 shut down at 02:16.' },
      { tag: 'SHOWS', t: 'The photos **show** a soaked floor at 8.20.' },
      { tag: 'SUGGESTS', t: 'The humidity alarm **suggests** water near the sensors.' },
      { tag: 'DOES NOT', t: 'The log **does not establish** who carried the badge.' },
    ],
    shuffle: [3, 0, 4, 2, 1],
    note: { kind: 'keep', text: '**prove · confirm** = a document records it · **show · suggest** = it makes it likely · **does not establish** = say what is missing.' },
    notes: "Remise en ordre en binôme, puis lecture de l’échelle de haut en bas.",
  });

  d.oddOneOut({
    title: 'Find the intruder', tag: 'VOCABULARY', page: 'Hors livret',
    instr: 'Meaning, grammar or pronunciation: one item in each line does not belong.',
    rows: [
      { words: ['proves', 'confirms', 'establishes', 'suggests'], odd: 3, why: '**suggests** — only likely' },
      { words: ['evidence', 'proof', 'a record', 'evidences'], odd: 3, why: '✗ **evidences** — uncountable' },
      { words: ['a witness', 'a statement', 'a testimony', 'a threshold'], odd: 3, why: '**threshold** — not a person’s words' },
      { words: ['sent', 'delivered', 'read', 'repaired'], odd: 3, why: '**repaired** — not a message status' },
      { words: ['hypothesis', 'guess', 'fact', 'assumption'], odd: 2, why: '**fact** — proved' },
      { words: ['proved', 'confirmed', 'showed', 'established'], odd: 3, why: '**established** — -ed = /t/, not /d/' },
    ],
    notes: "Ligne 6 : intrus de prononciation (rappel de la séance 3) — proved /pruːvd/, confirmed /kənˈfɜːmd/, showed /ʃəʊd/ finissent en /d/ ; established /ɪˈstæblɪʃt/ finit en /t/. Faire prononcer chaque ligne avant de dévoiler.",
  });

  d.compare({
    title: 'Evidence is uncountable', tag: 'PITFALL', page: 'Hors livret',
    left: { h: 'Word for word — wrong', items: ['We have {{an evidence}}.', 'Two {{evidences}} contradict Samuel.', 'The log gives {{proofs}} that…', 'It {{proves who}} carried the badge.'] },
    right: { h: 'What a professional writes', items: ['We have **a piece of evidence**.', '**Two pieces of evidence** contradict Samuel.', 'The log gives **proof** that…', 'It does **not establish who** carried the badge.'] },
    note: { kind: 'trap', text: '//la preuve, les preuves// → **evidence** (indénombrable) ou **proof** (singulier) — jamais //an evidence//, //evidences//, //proofs//. //prouver que// → **prove that**.' },
  });

  d.tree({
    title: 'Which verb of evidence?', tag: 'METHOD', page: 'Livret p. 16',
    start: 'A document and a fact',
    steps: [
      { q: 'Does the document **record the fact itself**?', hint: 'the time, the badge, the status is written there', yes: { h: 'PROVES · CONFIRMS', t: 'The log **confirms** that unit 3 shut down at 02:16.', color: 'accent3' } },
      { q: 'Does it make the fact **likely** — without recording it?', hint: 'a clue, an effect, a sequence', yes: { h: 'SHOWS · SUGGESTS', t: 'The humidity alarm **suggests** water near the sensors.', color: 'accent1' } },
    ],
    last: { h: 'DOES NOT ESTABLISH — say what is missing', t: 'The log **does not establish** who carried the badge.', color: 'accent6' },
  });

  d.section('Sort the witnesses');
  d.sort({
    title: 'Sort the witnesses before Mark asks you to', tag: 'YOUR MOVE', page: 'Livret p. 16',
    instr: 'Six statements were made in the room. Put each one in a column — then say **why**.',
    bankLabel: 'STATEMENTS', bankSize: 14,
    categories: [
      { h: 'P', sub: 'provable today', color: 'accent3' },
      { h: 'N', sub: 'not yet provable', color: 'accent1' },
      { h: 'C', sub: 'contradicted', color: 'accent6' },
    ],
    items: [
      { t: 'The water was still running at 6.50.', a: 'Water at 6.50 — the cleaners saw it (06:47)', cat: 0 },
      { t: 'The pipe was leaking all night.', a: 'Pipe all night — Iris: “I think”', cat: 1 },
      { t: 'The team left at eight.', a: 'Team at eight — the log says 19:58', cat: 2 },
      { t: 'Two IT units have stopped.', a: 'Two units — only unit 3 logged (partly)', cat: 0 },
      { t: 'It is the same pipe as in November.', a: 'Same pipe — “might be”: need records', cat: 1 },
      { t: 'Nobody was on site at 11.40 p.m.', a: 'Nobody on site — a log records badges only', cat: 1 },
    ],
    notes: "Individuellement (5 min), puis comparaison par deux : chaque désaccord se règle avec un verbe de l’échelle (proves, suggests…).",
    notesA: "Accepter d’autres justifications si elles s’appuient sur le dossier. « The team left at eight » : approximativement juste (19:58), mais la ligne du journal contredit la précision — l’important est d’écrire 19:58. « Two units » : P partiellement (unit 3 seulement dans le journal).",
  });

  d.pictureDict({
    title: 'Look at the evidence on the table', tag: 'READING', page: 'Livret p. 11 · illustration', img: 's3_log', hunt: true,
    alt: 'Samuel taps the printed log on the table; badges, a phone and coffee cups lie around it',
    instr: 'Find each item in the picture and **say where it is**: //on the left, next to, under…//',
    instrA: 'Which of these is **evidence**? Which is only a **clue**?',
    marks: [
      { n: 1, x: 330, y: 490, en: 'the printed log', fr: 'le journal imprimé' },
      { n: 2, x: 505, y: 458, en: 'the highlighted line', fr: 'la ligne surlignée' },
      { n: 3, x: 445, y: 372, en: 'Samuel’s finger', fr: 'le doigt de Samuel' },
      { n: 4, x: 590, y: 540, en: 'two access badges', fr: 'deux badges d’accès' },
      { n: 5, x: 700, y: 470, en: 'a lanyard', fr: 'un cordon' },
      { n: 6, x: 770, y: 420, en: 'a mobile phone', fr: 'un téléphone portable' },
      { n: 7, x: 205, y: 365, en: 'a coffee cup', fr: 'un gobelet de café' },
      { n: 8, x: 805, y: 210, en: 'Iris’s phone', fr: 'le téléphone d’Iris' },
      { n: 9, x: 255, y: 62, en: 'a security poster', fr: 'une affiche de sécurité' },
      { n: 10, x: 712, y: 108, en: 'a floor plan', fr: 'un plan d’étage' },
    ],
    bank: [6, 1, 9, 4, 7, 2, 10, 5, 3, 8],
    notes: "Repérage visuel en binôme : un élève nomme l’objet, l’autre le localise (« The badges are on the right, next to the lanyard »). Prépare la question : qu’est-ce qui constitue une preuve ? Le journal imprimé, oui ; un gobelet de café, non.",
    notesA: "Prononciation : lanyard /ˈlænjəd/ · badge /bædʒ/ · highlighted /ˈhaɪlaɪtɪd/.",
  });

  d.timeline({
    title: 'No record is not proof of absence', tag: 'FIELD NOTE', page: 'Livret p. 16',
    intro: 'The log shows **no badge** between 20:19 and 06:47. Does that mean **nobody** was in the building?',
    axis: { from: 19.3, to: 31.4, ticks: [[20, '20.00'], [22, '22.00'], [24, '00.00'], [26, '02.00'], [28, '04.00'], [30, '06.00']] },
    bars: [{ from: 20.5, to: 30.65, label: 'no badge recorded — but was anyone there? The log cannot say.', row: 0, open: true, color: 'accent5' }],
    points: [
      { at: 20.32, label: 'last exit: 20:19', row: 0 },
      { at: 30.78, label: 'next entry: 06:47 — cleaning team', row: 0 },
    ],
    note: { kind: 'keep', text: '//No access was recorded between 20:19 and 06:47.// ✓ — //Nobody was on site.// ✗ A log only records **badges**, not **people**.' },
    notes: "Idée-clé : l’absence de trace n’est pas une preuve d’absence (porte ouverte, badge prêté, personne restée sur place après 20:19…).",
  });

  d.section('The IT expert');
  d.reorder({
    title: 'The life of an alert — put it in order', tag: 'YOUR EXPERT', page: 'Livret p. 16 · IT',
    instr: 'Four steps, from the system to a person. Put them in order.',
    instrA: 'Our log stops at step **2**: somebody **could** have known. Only step **4** proves that somebody **knew**.',
    items: [
      { tag: 'SENT', t: 'The system **sends** the alert at 23:42. → the alarm **worked**.' },
      { tag: 'DELIVERED', t: 'The phone **receives** it. → somebody **could** have known.' },
      { tag: 'READ', t: 'Somebody **opens** it. → not in Exhibit A.' },
      { tag: 'ACK.', t: 'Somebody **confirms** it (OK, a reply). → somebody **knew**.' },
    ],
    shuffle: [2, 0, 3, 1],
    notes: "ACK. = acknowledged. Support pour l’expert IT. Selon les systèmes, « received » désigne parfois la réception par l’appareil (≈ delivered) : laisser l’étudiant IT nuancer.",
  });

  d.banner({
    title: 'Listen: the IT expert explains', tag: 'LISTENING', page: 'Hors livret',
    banner: { icon: 'FaBoxOpen', color: 'accent2', h: 'It’s a bit like a parcel…', sub: 'Your teacher reads the IT expert’s explanation **twice**. Booklets closed.' },
    cards: [
      { icon: 'FaHeadphones', color: 'tx2', h: 'Listening 1', t: 'What does the expert compare the alert to?' },
      { icon: 'FaPenNib', color: 'accent1', h: 'Listening 2', t: 'True or false? Six statements — next slide.' },
      { icon: 'FaUsers', color: 'accent3', h: 'After', t: 'Where does **our** log stop? Explain it to a neighbour in one sentence.' },
    ],
    notes: "SCRIPT (inventé, cohérent avec l’Exhibit A) :\n« Let me explain with a parcel. The shop sends it: that’s “sent”. The courier leaves it at your door: that’s “delivered”. You open it: that’s “read”. And when you sign for it, that’s “acknowledged”. Now, our log stops at “delivered”. So the phone got the alert at 23:42. But we have no record that anybody opened it — and no record that anybody confirmed it. Delivered means somebody could have known. Only acknowledged means somebody knew. »",
  });

  d.trueFalse({
    title: 'Listen: true or false?', tag: 'LISTENING', page: 'Hors livret',
    instr: 'Second listening. Tick **T** or **F** — correct the false ones.',
    items: [
      { s: 'The expert compares the alert to a letter.', a: false, why: 'to a **parcel**.' },
      { s: '“Delivered” = the courier leaves it at your door.', a: true, why: 'the phone got the alert.' },
      { s: '“Read” = you sign for the parcel.', a: false, why: 'you **open** it.' },
      { s: 'Our log stops at “delivered”.', a: true, why: 'the phone got it at 23:42.' },
      { s: 'The log shows that somebody opened the alert.', a: false, why: 'there is **no record** of it.' },
      { s: 'Only “acknowledged” proves somebody knew.', a: true, why: '“delivered” = could have known.' },
    ],
    notes: "Relire le script (notes de la diapositive précédente) avant cette activité. Correction : faire citer la phrase exacte du script.",
  });

  d.section('Your expert');
  d.sort({
    title: 'Which expert would ask this?', tag: 'YOUR EXPERT', page: 'Livret p. 16–17',
    instr: 'Four firms, eight questions: put each question under the expert who would ask it — **two each**.',
    bankLabel: 'QUESTIONS', bankSize: 14,
    categories: [
      { h: 'IT', sub: 'Northline IT Services', color: '0E7C66' },
      { h: 'LAW', sub: 'Harwell Legal', color: '8B3A2F' },
      { h: 'ACC', sub: 'Blanchet & Renard', color: '1F4E79' },
      { h: 'RE', sub: 'Corven Property', color: 'B8782A' },
    ],
    items: [
      { t: 'Delivered or acknowledged?', cat: 0 },
      { t: 'Can we name badge 0102?', cat: 1 },
      { t: 'How much will unit 3 cost?', cat: 2 },
      { t: 'Did the water come from above?', cat: 3 },
      { t: 'What does a log establish?', cat: 1 },
      { t: 'Did anyone open the alert?', cat: 0 },
      { t: 'Who must repair the floor?', cat: 3 },
      { t: 'What does the policy cover?', cat: 2 },
    ],
    notes: "Classement en binôme (3 min). Chaque firme garde ensuite ses deux questions pour l’activité suivante (questions complètes du livret, p. 16–17).",
  });

  d.experts({
    title: 'Your eye on Exhibit A', tag: 'YOUR EXPERT', page: 'Livret p. 16–17',
    cards: [
      { who: 'IT', q: 'The notification at 23:42 was **delivered**. What is the difference between //delivered//, //received// and //acknowledged// — and which would the insurer accept as proof that somebody knew?', a: '//Delivered / received// = the message reached the phone. //Acknowledged// = a person confirmed it. Only **acknowledged** proves that somebody knew.' },
      { who: 'LAW', q: 'Line 20:04 shows a badge entry after the works ended. What does an access log establish, and what does it **not** establish? Would you put badge number 0102 in a written report today?', a: 'It establishes that **a badge** was used at a given time — not **who** carried it, nor **what** they did. **No**: a badge number identifies a person and reads as an accusation.' },
      { who: 'ACC', q: 'Unit 3 shut down at 02:16. Before anything is repaired, what figure do you need and **from whom**? Name two documents you would ask for this morning.', a: 'The **repair or replacement cost** of unit 3 (+ cost of downtime), from the **IT provider**. Documents: a **written estimate** and the **insurance policy** (cover, excess).' },
      { who: 'RE', q: 'A humidity alarm followed the temperature alarm three minutes later. What does that sequence usually mean about **where** the water came from — above the ceiling or below the floor?', a: 'A fast sequence **suggests** water coming **from above** (ceiling pipework) onto the equipment. A **hypothesis** — to be checked on site, and in the basement.' },
    ],
    notes: "Chaque expert prépare sa réponse (5 min) puis l’explique au groupe en 1 minute. Les réponses proposées sont des pistes : valoriser toute réponse argumentée issue du domaine de l’étudiant.",
  });

  d.headerCards({
    title: 'Explain your field in plain English', tag: 'SPEAKING', page: 'Livret p. 16–17',
    perRow: 3,
    cards: [
      { h: 'DEFINE', color: 'accent2', icon: 'FaBookOpen', lines: ['In my field, //delivered// means …', 'Put simply, …', 'It’s a bit like …', 'In other words, …'] },
      { h: 'LIMIT', color: 'accent1', icon: 'FaBalanceScale', lines: ['What it **shows** is … What it **doesn’t show** is …', 'It **proves** that … but not **who** / **why** …', 'We can’t be sure until …'] },
      { h: 'ADVISE', color: 'accent3', icon: 'FaLightbulb', lines: ['I **would / wouldn’t** … **because** …', 'Before …, we **need** … **from** …', 'If I were you, I’d ask for …'] },
    ],
    note: { kind: 'tip', label: 'One minute, three moves', text: '**define** the word · **limit** what it proves · **advise** the next step.' },
  });

  d.fixText({
    title: 'The journalist went too far — correct the article', tag: 'YOUR MOVE', page: 'Hors livret',
    instr: 'A local news site published this. Find **six** problems: overstatements, a wrong time, a grammar slip — and a name that should not be there.',
    instrA: 'Each claim brought back to what the evidence **really** shows.',
    docLabel: 'ONLINE NEWS', docTitle: '“Flood at Atlas House: the night guard ignored the alarm”', count: 6, docColor: MAGENTA_,
    countLabels: ['6 problems', '✓ 6 corrections'],
    paras: [
      'An alert was sent to a mobile at 23:42, which {{proves that the guard read it}}@@ means that somebody could have known@@. The alarm went off at {{11.40 p.m}}@@ 23:41@@.',
      'According to our sources, {{the site manager entered the room at 20:04}}@@ an access to zone 2F was recorded at 20:04@@. {{Nobody was in the building}}@@ No access was recorded@@ after 20:19.',
      'The humidity alarm {{proves}}@@ suggests@@ that the old pipe burst. The water ran {{during}}@@ for@@ about seven hours.',
    ],
    notes: "Texte inventé (article fictif). Lecture individuelle, puis comparaison en binôme : pour chaque correction, citer la règle — l’échelle de la preuve, « no record ≠ nobody », ne nommer personne, l’heure vient du journal.",
  });

  d.cardGrid({
    title: 'Taboo — explain it without the obvious words', tag: 'GAME', page: 'Hors livret',
    instr: 'A player explains the word **without** saying it or the three taboo words. The team has 30 seconds to guess.',
    perRow: 4,
    cards: [
      { label: 'TABOO', big: 'evidence', fr: '✗ proof · show · court', ex: '= les preuves (indénombrable)' },
      { label: 'TABOO', big: 'a threshold', fr: '✗ limit · level · alarm', ex: '= un seuil' },
      { label: 'TABOO', big: 'acknowledged', fr: '✗ confirm · read · OK', ex: '= acquitté' },
      { label: 'TABOO', big: 'an estimate', fr: '✗ price · cost · repair', ex: '= un devis' },
      { label: 'TABOO', big: 'a badge', fr: '✗ card · door · enter', ex: '= un badge d’accès' },
      { label: 'TABOO', big: 'a shutdown', fr: '✗ stop · off · server', ex: '= un arrêt' },
      { label: 'TABOO', big: 'humidity', fr: '✗ water · wet · air', ex: '= l’humidité' },
      { label: 'TABOO', big: 'an assessor', fr: '✗ claim · expert · loss', ex: '= un expert en sinistres' },
    ],
    notes: "Variante : chaque firme (ACC, IT, LAW, RE) prépare deux cartes Taboo de son domaine. Utiliser les formules « DEFINE » : It’s a thing that… / It’s a person who… / It’s what you do when…",
  });

  d.roleplay({
    title: 'Role play — the nine o’clock briefing', tag: 'SPEAKING', page: 'Hors livret',
    instr: 'Travaillez à deux : A pose les questions, B répond, puis échangez les rôles. Tout se dit en anglais, avec les verbes de la preuve !',
    size: 15,
    a: { h: 'A · MARK SHAW, LE RESPONSABLE', color: 'tx2', items: [
      '(?) Demandez si l’eau **coulait encore** à 6 h 50.',
      '(?) Demandez si **quelqu’un était sur place** à 23 h 41.',
      '(?) Demandez si quelqu’un **a lu l’alerte**.',
      '(?) Demandez ce que **prouve** la ligne de 20 h 04.',
      '(+) Dites qu’il faut **un devis** pour l’unité 3.',
      '(–) Dites de **ne pas écrire** le numéro de badge.',
    ] },
    b: { h: 'B · VOUS, L’INGÉNIEUR', color: 'accent2', items: [
      '(+) Oui : les agents d’entretien **l’ont vue** ; leur entrée est **enregistrée** à 6 h 47.',
      '(–) **Aucun accès n’a été enregistré** après 20 h 19 — mais ce n’est pas une preuve d’absence.',
      '(–) Il n’y a **aucune trace** d’une lecture : l’alerte a seulement été **délivrée**.',
      '(+) Elle **prouve** qu’un badge a été utilisé — **pas qui** le portait.',
      '(+) D’accord : vous le **demanderez** au prestataire informatique.',
      '(+) Promettez d’écrire « **un accès a été enregistré** ».',
    ] },
    notes: "Format du jeu de rôle de la séance 1. Réponses possibles B : 1. Yes — the cleaners saw it; their entry was recorded at 06:47. 2. No access was recorded after 20:19 — but that does not prove that nobody was there. 3. There is no record that it was read: it was only delivered. 4. It proves that a badge was used — not who carried it. 5. OK, I’ll ask the IT provider for an estimate. 6. I’ll write “an access was recorded”.",
  });

  d.list({
    title: 'The language of evidence — complete the sentences', tag: 'WORD FILE', page: 'Hors livret',
    instr: 'Use each word once.',
    bank: ['evidence', 'record', 'establish', 'rule out', 'statement', 'supports', 'witness', 'points to'],
    cols: 2, max: 20, maxA: 19, gap: 9,
    items: [
      'Two pieces of [[evidence]] contradict Samuel. //(les preuves)//',
      'There is no [[record]] that the alert was read. //(une trace)//',
      'The log does not [[establish]] who carried the badge. //(établir)//',
      'We cannot [[rule out]] a second leak. //(écarter)//',
      'Ask the cleaners for a written [[statement]]. //(une déclaration)//',
      'Nothing [[supports]] Verdier’s claim. //(étayer)//',
      'The cleaner is our only [[witness]] at 6.50. //(un témoin)//',
      'The humidity alarm [[points to]] a leak above the ceiling. //(indiquer)//',
    ],
    notes: "Prononciation : evidence /ˈevɪdəns/ · hypothesis /haɪˈpɒθəsɪs/ · acknowledged /əkˈnɒlɪdʒd/ · witness /ˈwɪtnəs/.",
  });

  d.closing({
    cliff: 'Mark looks at the fourth line for a long moment. Then he says: **“Do not write that badge number anywhere. Not yet.”**',
    homework: ['Learn the **evidence ladder**: prove · confirm · show · suggest · does not establish.', 'Write your **expert answer** in three sentences: define · limit · advise.', 'Revise the **past participles** (p. 13).'],
    exit: 'Complete: //The badge log proves that … but it does not prove …//',
  });
};
