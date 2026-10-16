// Séance 8 — Scene 3: sort the witnesses + your expert (livret p. 16–17) — light style, modelled on the Séance 1 deck
const { MAGENTA: MAGENTA_ } = require('../lib_light');

exports.meta = {
  n: 8, style: 'light', slug: 'Scene3_Sort_the_witnesses', title: 'Sort the witnesses', coverTitle: 'Sort\nthe witnesses',
  subtitle: 'At nine o’clock Mark will ask you what holds up.', pages: 'Livret p. 16–17', img: 's3_log', time: '09.05', sceneLabel: 'SCENE 3',
  coverNotes: "Séance 8 — Scène 3, livret p. 16–17 : tri des déclarations (P / N / C) et premières questions d’experts.\n"
    + "Objectifs : le langage de la preuve (prove, confirm, show, suggest, does not establish), evidence / proof, « no record ≠ nobody », sent / delivered / read / acknowledged, expliquer son domaine en anglais simple.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · échelle de la preuve + piège evidence + arbre (15') · Sort the witnesses p. 16 (15') · no record ≠ nobody (5') · la chaîne d’une alerte + écoute de l’expert IT (10') · jeu Overstated! (10') · Your expert p. 16–17 (15') · Taboo ou jeu de rôle (15').\n"
    + "Les diapositives GAME et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.list({
    title: 'Warm-up: the professional block', tag: 'WARM-UP', page: 'Séance 7',
    instr: 'Which verb goes with the noun? One block, no translation.',
    cols: 2, max: 26, maxA: 26,
    items: ['to [[raise]] the alarm', 'to [[file]] a claim', 'to [[assess]] the damage', 'to [[carry out]] an inspection', 'to [[meet]] a deadline', 'to [[make good]] the floor', 'to [[draw up]] a report', 'to [[take]] steps'],
  });

  d.section('The language of evidence');
  d.ladder({
    title: 'From proof to doubt: the evidence ladder', tag: 'VOCABULARY', page: 'Hors livret',
    rows: [
      { pct: '100 %', h: 'PROVES', words: 'proves · establishes', ex: 'The badge log proves that badge 0102 was used at 20:04.', color: 'accent3' },
      { pct: '✓', h: 'CONFIRMS', words: 'confirms · is consistent with', ex: 'The log confirms that unit 3 shut down at 02:16.', color: '5E9A3C' },
      { pct: '≈', h: 'SHOWS', words: 'shows · indicates', ex: 'The photos show a soaked floor at 8.20.', color: 'accent2' },
      { pct: '?', h: 'SUGGESTS', words: 'suggests · points to', ex: 'The humidity alarm suggests water near the sensors.', color: 'accent1' },
      { pct: '✗', h: 'DOES NOT ESTABLISH', words: 'does not establish · does not prove', ex: 'The log does not establish who carried the badge.', color: 'accent6' },
    ],
    notes: "Faire monter et descendre l’échelle avec une même pièce : « The 23:42 notification proves that an alert was sent… shows that the phone received it… does not establish that anybody read it. »",
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
  d.table({
    title: 'Sort the witnesses before Mark asks you to', tag: 'YOUR MOVE', page: 'Livret p. 16',
    instr: 'Six statements were made in the room. Mark them **P** (provable today), **N** (not yet provable) or **C** (contradicted by another source).',
    headers: ['STATEMENT', 'P / N / C', 'WHY?'], colW: [4.3, 1.6, 6.23], align: ['left', 'center', 'left'],
    rows: [
      ['The water was still running at 6.50 a.m.', '[[P]]', '[[The cleaners saw it; their entry is logged (06:47).]]'],
      ['The pipe was leaking all night.', '[[N]]', '[[Iris: “I think” — a supposition; nothing yet on the pipe.]]'],
      ['The contractor’s team left at eight.', '[[C]]', '[[The log shows the exit at 19:58.]]'],
      ['Two IT units have stopped working.', '[[P (partly)]]', '[[Samuel checked; the log shows only unit 3 (02:16).]]'],
      ['It is the same pipe as last November.', '[[N]]', '[[Samuel: “It might be” — needs maintenance records.]]'],
      ['Nobody was on site at 11.40 p.m.', '[[N]]', '[[No badge after 20:19 — but a log only records badges.]]'],
    ],
    notes: "Individuellement (5 min), puis comparaison par deux : chaque désaccord se règle avec un verbe de l’échelle (proves, suggests…).",
    notesA: "Accepter d’autres justifications si elles s’appuient sur le dossier. Ligne 3 : « until eight » est approximativement juste (19:58) — l’important est d’écrire l’heure du journal. Ligne 6 : transition vers la diapositive suivante.",
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
  d.chevrons({
    title: 'Sent, delivered, read, acknowledged', tag: 'YOUR EXPERT', page: 'Livret p. 16 · IT',
    steps: [
      { h: 'SENT', color: '44546A', ex: 'The system **sent** the alert at 23:42. → the alarm **worked**.' },
      { h: 'DELIVERED', color: 'accent2', ex: 'The phone **received** it. → somebody **could** have known.' },
      { h: 'READ', color: 'accent1', ex: 'Somebody **opened** it. → not in Exhibit A.' },
      { h: 'ACKNOWLEDGED', color: 'accent3', ex: 'Somebody **confirmed** it (OK, reply). → somebody **knew**.' },
    ],
    rows: [
      { h: 'IN EXHIBIT A', icon: 'FaFileAlt', color: 'accent5', lines: ['sent ✓ · delivered ✓', 'read? acknowledged?', '→ **no record**'] },
      { h: 'WHAT IT PROVES', icon: 'FaBalanceScale', color: 'accent2', lines: ['delivered → somebody **could** have known', 'only acknowledged → somebody **knew**'] },
      { h: 'SAY IT', icon: 'FaCommentDots', color: 'accent3', lines: ['//The alert **was delivered** at 23:42.//', '//There is **no record** that it was read.//'] },
    ],
    notes: "Support pour l’expert IT. Selon les systèmes, « received » désigne parfois la réception par l’appareil (≈ delivered) : laisser l’étudiant IT nuancer.",
  });

  d.banner({
    title: 'Listen: the IT expert explains', tag: 'LISTENING', page: 'Hors livret',
    banner: { icon: 'FaBoxOpen', color: 'accent2', h: 'It’s a bit like a parcel…', sub: 'Your teacher reads the IT expert’s explanation **twice**. Booklets closed.' },
    cards: [
      { icon: 'FaHeadphones', color: 'tx2', h: 'Listening 1', t: 'What does the expert compare the alert to?' },
      { icon: 'FaPenNib', color: 'accent1', h: 'Listening 2', t: 'Match each status with the parcel: **sent · delivered · read · acknowledged**.' },
      { icon: 'FaUsers', color: 'accent3', h: 'After', t: 'Where does **our** log stop? Explain it to a neighbour in one sentence.' },
    ],
    notes: "SCRIPT (inventé, cohérent avec l’Exhibit A) :\n« Let me explain with a parcel. The shop sends it: that’s “sent”. The courier leaves it at your door: that’s “delivered”. You open it: that’s “read”. And when you sign for it, that’s “acknowledged”. Now, our log stops at “delivered”. So the phone got the alert at 23:42. But we have no record that anybody opened it — and no record that anybody confirmed it. Delivered means somebody could have known. Only acknowledged means somebody knew. »",
  });

  d.list({
    title: 'Listen: the IT expert explains', tag: 'LISTENING', page: 'Hors livret', mode: 'a',
    instr: 'The script — the four statuses in **bold**.',
    number: false, gap: 10, maxA: 21,
    items: [
      'Let me explain with a **parcel**. The shop sends it: that’s **“sent”**. The courier leaves it at your door: that’s **“delivered”**.',
      'You open it: that’s **“read”**. And when you sign for it, that’s **“acknowledged”**.',
      'Now, our log stops at “delivered”. So the phone got the alert at 23:42. But we have **no record** that anybody opened it — and **no record** that anybody confirmed it.',
      '**Delivered** means somebody **could** have known. Only **acknowledged** means somebody **knew**.',
    ],
    note: { kind: 'keep', label: 'Explain like an expert', text: 'an **everyday comparison** (//It’s a bit like…//) makes a technical point clear to non-experts.' },
  });

  d.list({
    title: 'Overstated! — bring each claim down a step', tag: 'GAME', page: 'Hors livret',
    instr: 'Your teacher reads a claim that goes **too far**. Shout **“Overstated!”** and correct it with the right verb from the ladder.',
    max: 20, sizeA: 16,
    items: [
      { q: 'The log **proves** that the site manager caused the leak.', a: 'It **shows** that badge 0102 was used at 20:04 — it **does not establish** who used it, or the cause.' },
      { q: 'The notification **proves** that somebody read the alert.', a: 'It was **delivered**: somebody **could** have known. There is **no record** that it was read.' },
      { q: 'The photos **prove** that the water ran all night.', a: 'They **show** the state of the room at 8.20 — not how long the water ran.' },
      { q: 'The humidity alarm **proves** that the pipe burst.', a: 'It **suggests** water near the sensors — the cause is a hypothesis.' },
      { q: 'No badge after 20:19 **proves** that nobody was in the building.', a: 'It **does not establish** that: a log only records badges.' },
      { q: 'Samuel’s memory **proves** that the alarm went off at 11.40.', a: 'A memory **proves** nothing — the log **shows** 23:41.' },
    ],
    notes: "En équipes : le premier qui crie « Overstated! » propose la correction ; si elle est juste (bon verbe + limite de la preuve), l’équipe marque un point.",
  });

  d.section('Your expert');
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

  d.cardGrid({
    title: 'Taboo — explain it without the obvious words', tag: 'GAME', page: 'Hors livret',
    instr: 'A player explains the word **without** saying it or the three taboo words. The team has 30 seconds to guess.',
    perRow: 4,
    cards: [
      { label: 'TABOO', big: 'evidence', fr: '✗ proof · show · court', ex: '= les preuves (indénombrable)' },
      { label: 'TABOO', big: 'a threshold', fr: '✗ limit · level · alarm', ex: '= un seuil' },
      { label: 'TABOO', big: 'acknowledged', fr: '✗ confirm · read · OK', ex: '= dont la réception est confirmée' },
      { label: 'TABOO', big: 'an estimate', fr: '✗ price · cost · repair', ex: '= un devis' },
      { label: 'TABOO', big: 'a badge', fr: '✗ card · door · enter', ex: '= un badge d’accès' },
      { label: 'TABOO', big: 'a shutdown', fr: '✗ stop · off · server', ex: '= un arrêt' },
      { label: 'TABOO', big: 'humidity', fr: '✗ water · wet · air', ex: '= l’humidité' },
      { label: 'TABOO', big: 'an assessor', fr: '✗ claim · expert · loss', ex: '= un expert en sinistres' },
    ],
    notes: "Variante : chaque firme (ACC, IT, LAW, RE) prépare deux cartes Taboo de son domaine. Utiliser les formules « DEFINE » de la diapositive précédente : It’s a thing that… / It’s a person who… / It’s what you do when…",
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

  d.table({
    title: 'The language of evidence', tag: 'WORD FILE', page: 'Hors livret',
    headers: ['ENGLISH', 'FRANÇAIS', 'IN THE FILE'], colW: [3.2, 3.3, 5.63], boldCol: 0, align: ['center', 'center', 'left'],
    rows: [
      ['evidence (U) · a piece of evidence', 'des preuves · une preuve', '**Two pieces of evidence** contradict Samuel.'],
      ['proof · to prove', 'la preuve · prouver', 'The log gives **proof** that unit 3 shut down.'],
      ['to establish', 'établir', 'The log does not **establish** who carried the badge.'],
      ['to suggest · to point to', 'laisser penser · indiquer', 'The humidity alarm **points to** a leak above.'],
      ['a record · there is no record of', 'une trace · il n’y a aucune trace de', '**There is no record** that the alert was read.'],
      ['a witness · a statement', 'un témoin · une déclaration', 'Ask the cleaners for a written **statement**.'],
      ['a hypothesis · to rule out', 'une hypothèse · écarter', 'We cannot **rule out** a second leak.'],
      ['to back up · to support', 'étayer, corroborer', 'Nothing **supports** Verdier’s claim.'],
    ],
    notes: "Prononciation : evidence /ˈevɪdəns/ · hypothesis /haɪˈpɒθəsɪs/ (pl. hypotheses /-siːz/) · acknowledged /əkˈnɒlɪdʒd/ (k muet).",
  });

  d.closing({
    cliff: 'Mark looks at the fourth line for a long moment. Then he says: **“Do not write that badge number anywhere. Not yet.”**',
    homework: ['Learn the **evidence ladder**: prove · confirm · show · suggest · does not establish.', 'Write your **expert answer** in three sentences: define · limit · advise.', 'Revise the **past participles** (p. 13).'],
    exit: 'Complete: //The badge log proves that … but it does not prove …//',
  });
};
