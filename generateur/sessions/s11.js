// Séance 11 — Scene 5, 10.20 (livret p. 23–24) — light style, modelled on the Séance 1 deck
const { MAGENTA: MAGENTA_, AMBER } = require('../lib_light');

const VERDIER = { from: 'p.verdier@verdier-construction.be', to: 'Mark Shaw', subject: 'About yesterday evening — received 10.18' };

exports.meta = {
  n: 11, style: 'light', slug: 'Scene5_The_email', title: 'The e-mail you must not forward as it is', coverTitle: 'The e-mail you must\nnot forward as it is', coverSize: 36,
  subtitle: 'The general contractor defends itself. Poorly, and in broken English.', pages: 'Livret p. 23–24', img: 's5_email', time: '10.20', sceneLabel: 'SCENE 5',
  coverNotes: "Séance 11 — Scène 5 (10.20), livret p. 23–24 : l’e-mail de Paul Verdier (Exhibit B).\n"
    + "Objectifs : repérer les 7 faux amis et les 2 formes verbales qui placent la soirée dans le mauvais temps ; registre de l’e-mail ; principe déontologique : on corrige l’anglais, pas le contenu.\n"
    + "Nouveautés : tri des expressions par couleur (pont S10) · e-mail dans une fenêtre de messagerie · chasse aux faux amis · cartes « faux amis » · mots croisés · arbre des deux formes verbales (ponts S3, S4–5, S9) · escape game à code · e-mail propre annoté · curseur de formalité · note d’accompagnement à compléter · ENERGIZER ami / faux ami.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · scène + Exhibit B (10') · chasse aux faux amis (15') · cartes + mots croisés (10') · deux formes verbales (10') · escape game (10') · e-mail propre annoté (5') · registre + boîte à outils (10') · note d’accompagnement (10') · ENERGIZER (5').\n"
    + "Les diapositives GAME, ENERGIZER et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.sort({
    title: 'Warm-up: what colour is it?', tag: 'WARM-UP', page: 'Séance 10',
    instr: 'Put the eight progress expressions back on the traffic light.',
    bankLabel: 'EXPRESSIONS',
    categories: [
      { h: 'GREEN', sub: 'on track', color: 'accent3' },
      { h: 'AMBER', sub: 'at risk', color: AMBER },
      { h: 'RED', sub: 'blocked', color: 'accent6' },
      { h: 'ALL DAY', sub: 'communicate', color: 'accent2' },
    ],
    items: [
      { t: 'to fall behind', a: 'to **fall behind** — prendre du retard', cat: 1 },
      { t: 'to be on track', a: 'to be **on track** — être dans les temps', cat: 0 },
      { t: 'to touch base', a: 'to **touch base** — faire un point', cat: 3 },
      { t: 'a bottleneck', a: 'a **bottleneck** — un goulet', cat: 2 },
      { t: 'to be up to speed', a: 'to be **up to speed** — être au courant', cat: 0 },
      { t: 'to keep sb in the loop', a: 'to keep sb **in the loop** — tenir informé', cat: 3 },
      { t: 'to chase somebody', a: 'to **chase** sb — relancer', cat: 1 },
      { t: 'to be held up', a: 'to be **held up** — être bloqué', cat: 2 },
    ],
    notes: "Réactivation du feu tricolore de la séance 10. Faire produire une phrase par expression avec le present perfect : « The estimate has fallen behind. »",
  });

  d.section('Exhibit B');
  d.scene({
    title: 'The e-mail you must not forward as it is', tag: 'SCENE', page: 'Livret p. 23', img: 's5_email', time: '10.20', sceneLabel: 'SCENE 5',
    alt: 'Iris leans over the narrator’s laptop: “Wait — do not forward that yet.”',
    text: ['**Paul Verdier** runs the cabling team. His English is //enthusiastic and unreliable//.', 'Mark wants this e-mail forwarded to the insurer **within the hour** — but not in this state.'],
    ask: 'Iris says: //“He wrote **controlled**. He means **checked**.”// What does //control// mean in English?',
    notes: "En anglais, control = maîtriser, diriger (to control a fire, a budget). Un expert d’assurance qui lit « I have controlled the room » se demandera ce qui a encore été mal traduit.",
  });

  d.fixText({
    title: 'Exhibit B — the contractor’s e-mail', tag: 'EXHIBIT', page: 'Livret p. 23', mode: 'show',
    instr: 'First reading — for the **meaning**. What does Verdier say about yesterday evening? Whose fault is it, according to him?',
    mail: VERDIER,
    paras: [
      'Dear Mr Shaw,',
      'I have controlled the second floor yesterday evening before we go. Actually, we are still waiting for the humidity report.',
      'Two of my men will assist the meeting this afternoon if you want. I have demanded them to come.',
      'We have a delay of two days to finish the cabling, so we are not late. Eventually, we can send you our own report.',
      'I have resumed our position in three lines below. I don’t think it would be sensible to blame my team: the pipe is old and it is not our work. Everything was dry when my team leaves at 19.58.',
      'Kind regards,   P. Verdier',
    ],
    notes: "Lecture globale (2 min). Réponses attendues : il dit avoir vérifié l’étage, que tout était sec au départ de l’équipe, que la canalisation est vieille et que ce n’est pas leur travail.",
  });

  d.fixText({
    title: 'Hunt the seven false friends', tag: 'YOUR MOVE', page: 'Livret p. 24',
    instr: 'Seven words keep their **French** meaning. In the order of the text: verification · time · help · requirement · duration · conclusion · summary.',
    instrA: 'Change the **words**, never the **position** of the author. //sensible// = raisonnable: correct — don’t touch it!',
    mail: VERDIER, count: 7, countLabels: ['7 false friends', '✓ 7 words fixed'],
    paras: [
      'Dear Mr Shaw,',
      'I have {{controlled}}@@ checked@@ the second floor yesterday evening before we go. {{Actually}}@@ Currently@@, we are still waiting for the humidity report.',
      'Two of my men will {{assist}}@@ attend@@ the meeting this afternoon if you want. I have {{demanded}}@@ asked@@ them to come.',
      'We have {{a delay of two days}}@@ two days left@@ to finish the cabling, so we are not late. {{Eventually}}@@ If necessary@@, we can send you our own report.',
      'I have {{resumed}}@@ summarised@@ our position in three lines below. I don’t think it would be sensible to blame my team: the pipe is old and it is not our work. Everything was dry when my team leaves at 19.58.',
      'Kind regards,   P. Verdier',
    ],
    notes: "Travail individuel (5 min), puis par deux. Les deux formes verbales (have controlled … yesterday, leaves) sont traitées plus loin : ne pas les corriger ici.",
    notesA: "a delay of two days = un RETARD de deux jours : en anglais, Verdier écrit le contraire de ce qu’il veut dire (that they ARE late).",
  });

  d.cardGrid({
    title: 'Seven false friends — and one true one', tag: 'WORD FILE', page: 'Livret p. 24 & 26',
    perRow: 4,
    cards: [
      { label: 'FALSE FRIEND', big: 'control', fr: '≠ contrôler → **check**', ex: 'to control = maîtriser: //to control a fire, a budget//', color: 'accent6' },
      { label: 'FALSE FRIEND', big: 'actually', fr: '≠ actuellement → **currently**', ex: 'actually = en fait: //Actually, the pipe is new.//', color: 'accent6' },
      { label: 'FALSE FRIEND', big: 'assist', fr: '≠ assister à → **attend**', ex: 'to assist = aider: //Two men will assist the plumber.//', color: 'accent6' },
      { label: 'FALSE FRIEND', big: 'demand', fr: '≠ demander → **ask**', ex: 'to demand = exiger: //The insurer demands a report.//', color: 'accent6' },
      { label: 'FALSE FRIEND', big: 'a delay', fr: '≠ un délai → **a deadline**', ex: 'a delay = un retard: //a delay of two days//', color: 'accent6' },
      { label: 'FALSE FRIEND', big: 'eventually', fr: '≠ éventuellement → **possibly**', ex: 'eventually = finalement: //It eventually stopped.//', color: 'accent6' },
      { label: 'FALSE FRIEND', big: 'resume', fr: '≠ résumer → **summarise**', ex: 'to resume = reprendre: //Work will resume on Monday.//', color: 'accent6' },
      { label: 'TRUE FRIEND HERE', big: 'sensible', fr: '= raisonnable — keep it!', ex: '//sensible// (FR) → **sensitive**', color: 'accent3', kind: 'attention' },
    ],
    notes: "Pour chaque faux ami : le sens anglais (en haut, avec un exemple) et le mot que Verdier voulait écrire (en gras). Prononciation : eventually /ɪˈventʃuəli/ · resume /rɪˈzjuːm/ (≠ résumé /ˈrezjumeɪ/).",
  });

  d.crossword({
    title: 'Crossword: what Verdier meant', tag: 'GAME', page: 'Hors livret',
    instr: 'Each clue quotes Verdier. Write the word he **meant**.',
    words: [
      { n: 1, w: 'DEADLINE', r: 0, c: 6, d: 'v', clue: '//a delay of two days// → a time limit: a …' },
      { n: 2, w: 'POSSIBLY', r: 0, c: 10, d: 'v', clue: '//Eventually, we can send…// → if necessary, or …' },
      { n: 3, w: 'CHECK', r: 1, c: 4, d: 'h', clue: '//I have controlled the floor// → I …ed it' },
      { n: 4, w: 'ATTEND', r: 3, c: 1, d: 'h', clue: '//will assist the meeting// → will … it' },
      { n: 5, w: 'ASK', r: 4, c: 0, d: 'v', clue: '//I have demanded them to come// → I have …ed them' },
      { n: 6, w: 'SUMMARISE', r: 5, c: 0, d: 'h', clue: '//I have resumed our position// → I have …d it (UK)' },
      { n: 7, w: 'CURRENTLY', r: 7, c: 2, d: 'h', clue: '//Actually, we are still waiting// → …, we are waiting' },
    ],
    notes: "En binôme, 4 minutes. US : summarize. Variante : faire épeler les réponses à voix haute (alphabet, séance 5).",
  });

  d.section('The two verb forms');
  d.tree({
    title: 'The two verb forms that matter most to the insurer', tag: 'BRIDGE', page: 'Livret p. 24',
    start: 'A verb about yesterday evening',
    steps: [
      { q: 'Is there a **finished time**?', hint: 'yesterday evening · at 19.58 · last night — Séances 3 & 9', yes: { h: 'PAST SIMPLE — never have + participle', t: '✗ //have controlled… yesterday// → I ==checked== it yesterday.', color: MAGENTA_ } },
      { q: 'Is it a **past event** in a story?', hint: '… when my team leaves at 19.58 — Séances 4 & 5', yes: { h: 'PAST SIMPLE — not the present', t: '✗ //when my team leaves// → when my team ==left== at 19.58.', color: 'accent1' } },
    ],
    last: { h: 'NO DATE, A RESULT NOW → present perfect is fine', t: 'I **have ++summarised++** our position below. (Séance 9)', color: 'accent3' },
    note: { kind: 'keep', label: 'Why these two', text: 'they fix **when the room was checked** and **when it was dry**: the start of the window the assessor will look at. Bonus: //before we {{go}}// → before we **left**.' },
  });

  d.escape({
    title: 'Escape room: unlock the e-mail', page: 'Hors livret',
    instr: 'Teams of three. The e-mail is locked until you find the **four-digit code**: one digit per right answer.',
    reveal: '**Code 4271** — the e-mail can leave the building.',
    code: '4271',
    codeNote: 'Write the four digits in order. The first team with the right code wins.',
    codeNoteA: 'attend · //a delay// = un retard · //control// + //have… yesterday// · //sensible// = raisonnable.',
    questions: [
      { q: '//Two of my men will assist the meeting.// You write…', opts: [{ d: '3', t: 'help the meeting' }, { d: '4', t: 'attend the meeting' }, { d: '8', t: 'assist to the meeting' }], ans: 1 },
      { q: 'In English, //we have a delay of two days// means…', opts: [{ d: '2', t: 'we are two days late' }, { d: '5', t: 'we have two days left' }, { d: '9', t: 'the deadline is today' }], ans: 0 },
      { q: '//I have controlled the floor yesterday evening.// Errors?', opts: [{ d: '1', t: 'one error' }, { d: '7', t: 'two errors' }, { d: '6', t: 'no error' }], ans: 1 },
      { q: '//It would not be sensible to blame my team.//', opts: [{ d: '0', t: 'write //sensitive//' }, { d: '1', t: 'keep it' }, { d: '5', t: 'delete it' }], ans: 1 },
    ],
    notes: "Chaque équipe écrit son code sur une ardoise. Le piège central est la question 2 : en anglais, « a delay » dit l’inverse de ce que voulait Verdier.",
  });

  d.annotated({
    title: 'The e-mail, fit to be forwarded', tag: 'BRIDGE', page: 'Livret p. 23–24',
    mail: VERDIER, docW: 8.2,
    paras: [
      'Dear Mr Shaw,',
      'I $$checked$$ ⟨1⟩ the second floor yesterday evening before we $$left$$ ⟨2⟩. We are $$currently$$ ⟨3⟩ still waiting for the humidity report.',
      'Two of my men will $$attend$$ the meeting this afternoon if you wish. I have $$asked$$ them to come.',
      'We have $$two days left$$ to finish the cabling, so we are not late. $$If necessary$$, we can send you our own report.',
      'I have $$summarised$$ ⟨4⟩ our position in three lines below. I don’t think it would be $$sensible$$ ⟨5⟩ to blame my team: the pipe is old and it is not our work. Everything was dry when my team $$left$$ ⟨2⟩ at 19.58.',
      'Kind regards,   P. Verdier',
    ],
    callouts: [
      { n: 1, h: 'checked', s: 'Séances 3 · 9', t: 'a finished time → **past simple**, never //have + participle//.' },
      { n: 2, h: 'left', s: 'Séances 4 · 5', t: 'a past event in the story, not the present //leaves//.' },
      { n: 3, h: 'currently · attend · asked', s: 'p. 24', t: 'the false friends, replaced by what he **meant**.' },
      { n: 4, h: 'have summarised', s: 'Séance 9', t: 'no date, a result now → present perfect is right.' },
      { n: 5, h: 'sensible', s: 'p. 26', t: '= raisonnable: correct — **his position is unchanged**.' },
    ],
    notes: "Projeter après l’escape game. Insister : on corrige l’anglais, jamais la position de l’auteur (il continue d’accuser la canalisation).",
  });

  d.section('E-mail register');
  d.slider({
    title: 'How formal is it?', tag: 'VOCABULARY', page: 'Hors livret',
    instr: 'From a chat with a colleague to a letter to the insurer: place each expression on the line.',
    instrA: 'To the insurer, stay on the **right half**. //Kind regards// is the safe choice for most work e-mails.',
    ends: ['CHAT', 'FORMAL'],
    items: [
      { t: 'Hi Mark!', v: 5 }, { t: 'Cheers,', v: 13 }, { t: 'Thanks a lot!', v: 25 }, { t: 'Let me know.', v: 36 },
      { t: 'Best regards,', v: 50 }, { t: 'Kind regards,', v: 60 }, { t: 'Dear Mr Shaw,', v: 70 },
      { t: 'I look forward to hearing from you.', v: 82 }, { t: 'Yours sincerely,', v: 95 },
    ],
    notes: "Discussion en binôme puis placement collectif. Accepter des positions voisines : l’important est l’ordre. Yours sincerely : lettre formelle quand on connaît le nom du destinataire (UK).",
  });

  d.headerCards({
    title: 'E-mail toolkit', tag: 'WRITING', page: 'Hors livret',
    perRow: 3,
    cards: [
      { h: 'OPENING', color: 'accent2', icon: 'FaEnvelope', lines: ['Dear Mr Shaw, / Dear Ms Marsh,', 'Following our call this morning, …', 'Please find **attached** / **below** …'] },
      { h: 'BODY', color: 'accent1', icon: 'FaPen', lines: ['I am writing to **inform you that** …', 'We are **currently** waiting for …', 'Could you please **confirm** … ?', 'I would be grateful if you could …'] },
      { h: 'CLOSING', color: 'accent3', icon: 'FaPaperPlane', lines: ['Please do not hesitate to contact me if …', 'I look forward to **hearing** from you.', 'Kind regards, / Best regards,', 'Yours sincerely, (formal)'] },
    ],
    note: { kind: 'trap', text: '//Je vous prie d’agréer…// n’a pas d’équivalent : une formule courte suffit. //I look forward to hear// ✗ → **to hearing** ✓' },
  });

  d.fixText({
    title: 'Mark forwards it: the covering note', tag: 'WRITING', page: 'Hors livret',
    instr: 'Complete Mark’s note to the insurer — then say why the third line **protects the file**.',
    instrA: 'Say **what** you send, **when** you received it — and that **only the English** was corrected.',
    mail: { from: 'Mark Shaw', to: 'Ms Marsh (insurer)', subject: 'Fwd: About yesterday evening', attach: true },
    paras: [
      'Dear Ms Marsh,',
      'Please find [[below]] the contractor’s account of yesterday evening, [[received]] at 10.18.',
      'Only [[the English]] has been corrected; the content is [[unchanged]].',
      'I look forward to [[hearing]] from you.',
      '[[Kind regards]],   Mark Shaw',
    ],
    notes: "Écriture guidée. Pont : « has been corrected » = present perfect passif (aperçu de la scène 6). La transparence sur la correction protège le dossier.",
  });

  d.energizer({
    title: 'Friend or false friend?', page: 'Hors livret', icon: 'FaHandshake',
    tagline: 'Your teacher says an English word. Is it a friend?',
    meta: 'Everybody · 3 minutes · thumbs, then the meaning in French',
    actions: [
      { h: 'TRUE FRIEND', t: 'Thumbs **up**: it means the same as the French word.', icon: 'FaThumbsUp', color: 'accent3' },
      { h: 'FALSE FRIEND', t: 'Thumbs **down**: it means something else — say what!', icon: 'FaThumbsDown', color: 'accent6' },
    ],
    rules: ['Thumbs up or down on “three, two, one!”', 'A false friend? One student gives the real meaning — and the word Verdier needed.'],
    items: [
      { s: '**actually** = en fait (≠ actuellement)', a: 1 }, { s: '**important** = important', a: 0 },
      { s: '**eventually** = finalement', a: 1 }, { s: '**sensible** = raisonnable', a: 1 },
      { s: '**possible** = possible', a: 0 }, { s: '**library** = bibliothèque', a: 1 },
      { s: '**information** = information', a: 0 }, { s: '**assist** = aider', a: 1 },
      { s: '**delay** = retard', a: 1 }, { s: '**problem** = problème', a: 0 },
      { s: '**achieve** = réussir, atteindre', a: 1 }, { s: '**confirm** = confirmer', a: 0 },
    ],
    instrA: 'Thumbs up = **true friend** · thumbs down = **false friend** — with the real meaning.',
    notes: "Lire les mots dans le désordre. sensible : faux ami (FR sensible = sensitive), même s’il est correct dans l’e-mail de Verdier.",
  });

  d.closing({
    cliff: 'An insurer does not read what an e-mail claims. **She reads what it unintentionally concedes.**',
    homework: ['Learn the **7 false friends** — both directions.', 'Learn the e-mail toolkit (opening, body, closing).', 'Prepare p. 25: five questions on what the e-mail **admits**.'],
    exit: 'Translate: //Je vais assister à la réunion.// — //Nous avons un délai de deux jours.//',
  });
};
