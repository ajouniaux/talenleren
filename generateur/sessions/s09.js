// Séance 9 — Scene 4, 09.40 (livret p. 18–19) — light style, modelled on the Séance 1 deck
const { MAGENTA: MAGENTA_ } = require('../lib_light');

exports.meta = {
  n: 9, style: 'light', slug: 'Scene4_The_board', title: 'The board',
  subtitle: 'Two columns, one marker and nine people waiting for your update', pages: 'Livret p. 18–19', img: 's4_board', time: '09.40', sceneLabel: 'SCENE 4',
  coverNotes: "Séance 9 — Scène 4 (09.40), livret p. 18–19 : le tableau DONE / NOT YET.\n"
    + "Objectifs : present perfect (have / has + participe) = un résultat maintenant ; already / yet / just ; present perfect ou prétérit (WHEN? ou SO WHAT?).\n"
    + "Nouveautés : dominos de participes · carte de métro de la grammaire (ponts S2 → S9) · train de la phrase · post-its à classer sur le tableau · « où va le petit mot ? » · ENERGIZER debout / assis · vente aux enchères d’erreurs · Find someone who…\n"
    + "Déroulé indicatif (90 min) : dominos (5') · scène + carte de métro (10') · train + frise + arbre (15') · post-its p. 18 (15') · already / yet / just + placement (15') · Dry run A (5') · ENERGIZER (5') · enchères (10') · Find someone who (10').\n"
    + "Les diapositives GAME, ENERGIZER et + EXTRA sont facultatives : les garder pour relancer l’attention en milieu ou fin de séance.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.dominoes({
    title: 'Warm-up: the participle dominoes', tag: 'WARM-UP', page: 'Séance 7',
    instr: 'Chain the nine dominoes: the **participle** on the left matches the **verb** at the end of the previous tile. Start with START.',
    instrA: 'Each verb becomes its participle on the next tile — the participles of today’s present perfect.',
    tiles: [
      { l: 'START', r: 'take' }, { l: 'taken', r: 'write' }, { l: 'written', r: 'send' },
      { l: 'sent', r: 'see' }, { l: 'seen', r: 'break' }, { l: 'broken', r: 'go' },
      { l: 'gone', r: 'tell' }, { l: 'told', r: 'be' }, { l: 'been', r: 'FINISH' },
    ],
    shuffle: [4, 0, 7, 2, 8, 5, 1, 6, 3],
    notes: "En binôme, 3 minutes : remettre la chaîne dans l’ordre (à l’oral ou en recopiant les numéros). Rappel des familles de la séance 7 : A·B·C (take · took · taken) et A·B·B (send · sent · sent).",
  });

  d.section('The board');
  d.scene({
    title: 'The board', tag: 'SCENE', page: 'Livret p. 18', img: 's4_board', time: '09.40', sceneLabel: 'SCENE 4',
    alt: 'Mark hands the marker to the narrator in front of a whiteboard with two columns, DONE and NOT YET',
    text: ['Mark draws a vertical line down the middle of the whiteboard. On the left he writes **DONE**. On the right he writes **NOT YET**.', 'Then he hands you the marker. //“Ten o’clock update,”// he says. //“Everybody is waiting for it.”//'],
    ask: 'The board will be photographed and sent to nine people. Must each line say **what happened yesterday** — or **where we stand now**?',
    notes: "Bulles : « Ten o’clock update. Everybody is waiting for it. » / « Which column does the basement go in? » → NOT YET : personne n’a encore vérifié le sous-sol.",
  });

  d.metro({
    title: 'Your grammar line so far', tag: 'BRIDGE', page: 'Séances 2 → 9',
    stations: [
      { s: 'SÉANCE 2', h: 'Telling the time', ex: 'at 6.58 · by nine', state: 'done' },
      { s: 'SÉANCE 3', h: 'Past simple', ex: 'The alarm went off at 23:41.', state: 'done' },
      { s: 'SÉANCES 4–5', h: 'Past continuous', ex: 'Water was running when…', state: 'done' },
      { s: 'SÉANCE 6', h: 'Reporting verbs', ex: 'The log confirms that…', state: 'done' },
      { s: 'SÉANCE 7', h: 'Participles', ex: 'found · taken · seen', state: 'done' },
      { s: 'SÉANCE 9', h: 'Present perfect', ex: 'Iris has taken the photos.', state: 'here' },
      { s: 'SÉANCE 13', h: 'for / since', ex: 'It has been closed since 6.50.', state: 'next' },
      { s: 'SÉANCE 14', h: 'Modals', ex: 'It might be the pipe.', state: 'next' },
    ],
    note: { kind: 'keep', label: 'Today’s connection', text: 'the **participles** of Séance 7 + **have / has** = the present perfect. The question changes: no longer **WHEN?** but **SO WHAT — now?**' },
    notes: "Pont entre les séances : faire retrouver un exemple du dossier pour chaque station déjà passée. Les stations en pointillé sont à venir.",
  });

  d.section('The present perfect');
  d.train({
    title: 'The present perfect, wagon by wagon', tag: 'GRAMMAR', page: 'Livret p. 18–19',
    slots: [
      { h: 'SUBJECT', color: 'tx2' }, { h: 'HAVE / HAS', color: 'accent2' }, { h: 'NOT', color: 'accent6' },
      { h: 'ALREADY · JUST', color: 'accent1' }, { h: 'PARTICIPLE', color: 'accent3' }, { h: 'THE REST', color: 'accent5' }, { h: 'YET', color: 'accent4' },
    ],
    rowLabels: ['+', '+', '–', '–'],
    rows: [
      ['Iris', 'has', '', 'already', 'taken', 'the photos', ''],
      ['Samuel', 'has', '', 'just', 'come back', 'from the 2nd floor', ''],
      ['We', 'have', 'not', '', 'received', 'the estimate', 'yet'],
      ['Nobody', 'has', '', '', 'told', 'the insurer', 'yet'],
    ],
    note: { kind: 'tip', label: 'Question', text: '**Has** + subject + participle … **yet**? → //**Has** anyone **told** the insurer **yet**?// · //nobody// is already negative: no //not//.' },
    notes: "Le train montre l’ordre fixe des mots : already et just montent dans le wagon du milieu, yet reste en queue de train. Les wagons vides sont aussi importants que les pleins.",
  });

  d.timeline({
    title: 'Looking at the night from 09.40', tag: 'GRAMMAR', page: 'Livret p. 18–19',
    intro: 'A **dot** with a clock time → past simple. A **bar** that reaches **NOW**, with no time → present perfect.',
    axis: { from: 19.5, to: 34.3, ticks: [[20, '20.00'], [24, '00.00'], [28, '04.00'], [32, '08.00']] },
    now: { at: 33.67, label: 'NOW 09.40' },
    bars: [
      { from: 32.33, to: 33.67, label: 'photos taken → result now', color: 'accent3', row: 0, labelLeft: true },
      { from: 30.83, to: 33.67, label: 'insurer still not told', color: 'accent6', row: 1, open: true, labelLeft: true },
    ],
    points: [
      { at: 23.68, label: 'the alarm went off (23:41)', row: 0 },
      { at: 30.83, label: 'the cleaners found the water (6.50)', row: 1 },
    ],
    legend: ['**bar up to NOW** → ++has taken++ · !!hasn’t told!!', '**dot with a time** → ==went off · found=='], legendBar: 'accent3',
    notes: "Verbaliser : « Iris has taken the photographs » (résultat visible à 09.40) ; « Nobody has told the insurer yet » (situation encore ouverte) ; « The alarm went off at 23.41 » (point daté).",
  });

  d.tree({
    title: 'WHEN? or SO WHAT?', tag: 'METHOD', page: 'Livret p. 18–19',
    start: 'A past action on the board',
    steps: [
      { q: 'Is there a **finished time**?', hint: 'at 23:41 · yesterday · last night · two hours ago · When…?', yes: { h: 'PAST SIMPLE — the answer to WHEN?', t: 'The alarm ==went off== at 23:41. I ==wrote== to him yesterday.', color: MAGENTA_ } },
      { q: 'Does the **result** matter **now**?', hint: 'or the period is still open: already · yet · so far', yes: { h: 'PRESENT PERFECT — the answer to SO WHAT?', t: 'Iris **has ++taken++** the photos → they are on the board.', color: 'accent3' } },
    ],
    last: { h: 'A STORY IN ORDER → past simple', t: 'First the team ==left==, then the alarm ==went off==.', color: 'tx2' },
    note: { kind: 'trap', text: 'le passé composé ≠ present perfect : //J’ai pris les photos à 8 h 20// → I **took** them at 8.20 · //J’ai pris les photos// (résultat, sans date) → I **have taken** them.' },
  });

  d.section('Fill the board');
  d.stickyBoard({
    title: 'Fill the board', tag: 'YOUR MOVE', page: 'Livret p. 18',
    instr: 'Write each post-it as a full sentence that says **where we stand now** — then stick it in the right column.',
    instrA: 'DONE = **has / have + participle** · NOT YET = **hasn’t / haven’t + participle (yet)**.',
    hint: '**DONE** → has / have + participle · **NOT YET** → hasn’t / haven’t … yet',
    cols: [{ h: 'DONE', color: 'accent3' }, { h: 'NOT YET', color: 'accent6' }],
    items: [
      { t: 'Iris · **take** · the photographs', a: 'Iris **has taken** the photographs.', col: 0 },
      { t: 'Samuel · **look at** · the logs', a: 'Samuel **has looked at** the logs.', col: 0 },
      { t: 'Samuel · **not check** · the basement', a: 'Samuel **hasn’t checked** the basement.', col: 1 },
      { t: 'Nobody · **tell** · the insurer', a: 'Nobody **has told** the insurer.', col: 1 },
      { t: 'The contractor · **not send** · a written statement', a: 'The contractor **hasn’t sent** a written statement.', col: 1 },
      { t: 'Two units · **break** down', a: 'Two units **have broken** down.', col: 0 },
      { t: 'We · **not receive** · the estimate', a: 'We **haven’t received** the estimate.', col: 1 },
      { t: 'I · **write** · to the site manager twice', a: 'I **have written** to the site manager twice.', col: 0 },
    ],
    notes: "Individuellement (5 min) : écrire la phrase complète sur une feuille ou un post-it réel, puis venir la coller au tableau (DONE / NOT YET). Livret p. 18.",
    notesA: "Faire vérifier trois points : has après un sujet singulier ; hasn’t / haven’t + participe ; participes irréguliers (taken, broken, written). « Nobody has told » : nobody est déjà négatif.",
  });

  d.picture({
    title: 'Already, yet, just', tag: 'FIELD NOTE', page: 'Livret p. 19', img: 's4_already_yet_just', imgW: 6.6,
    alt: 'Mark explains already, yet and just on a whiteboard to the team',
    cards: [
      { h: 'ALREADY', color: 'accent3', icon: 'FaCheck', t: 'between //have// and the participle: //Iris has **already** taken the photographs.//' },
      { h: 'YET', color: 'accent6', icon: 'FaHourglassHalf', t: 'at the end — negatives and questions: //Has anyone told the insurer **yet**? — Not yet.//' },
      { h: 'JUST', color: 'accent2', icon: 'FaBolt', t: 'between //have// and the participle (= very recently): //I’ve **just** come back.//' },
      { h: 'FRENCH TRAP', color: 'accent1', icon: 'FaExclamationTriangle', t: '✗ //has taken **already**// → ✓ //has **already** taken//' },
    ],
  });

  d.insert({
    title: 'Where does the little word go?', tag: 'GRAMMAR', page: 'Livret p. 19',
    instr: 'Choose the number where the word goes. Show it with your fingers!',
    instrA: '**already · just** → between //have// and the participle · **yet** → at the end.',
    rows: [
      { adv: 'already', words: ['Iris', 'has', 'photographed', 'the ceiling', '.'], gaps: [1, 2, 3, 4], ans: 2, color: 'accent3' },
      { adv: 'yet', words: ['Has', 'the contractor', 'answered', '?'], gaps: [1, 2, 3], ans: 3, color: 'accent6' },
      { adv: 'just', words: ['Samuel', 'has', 'come back', 'from the basement', '.'], gaps: [1, 2, 3, 4], ans: 2, color: 'accent2' },
      { adv: 'yet', words: ['We', 'have not', 'received', 'the estimate', '.'], gaps: [2, 3, 4], ans: 4, color: 'accent6' },
      { adv: 'already', words: ['The insurer', 'has', 'sent', 'an acknowledgement', '.'], gaps: [1, 2, 3, 4], ans: 2, color: 'accent3' },
    ],
    notes: "Dry run B (livret p. 19), version visuelle : les élèves lèvent le nombre de doigts correspondant à l’emplacement. Les deux derniers items sont ajoutés.",
  });

  d.list({
    title: 'The board will not accept a wrong form', tag: 'DRY RUN', page: 'Livret p. 19',
    instr: 'A · Build the form: //have// or //has// + participle.',
    bank: ['has sent', 'hasn’t answered', 'have been'],
    items: [
      'The site manager [[hasn’t answered]] //(not answer)// my two messages.',
      'We [[have been]] //(be)// here since seven o’clock.',
      'The insurer [[has sent]] //(send)// a first acknowledgement.',
    ],
    note: { kind: 'tip', label: 'Bridge to Séance 13', text: '//We have been here **since** seven o’clock// — the present perfect also says **how long** a situation has lasted: //for / since//.' },
  });

  d.section('Energizer and games');
  d.energizer({
    title: 'Stand up for the present perfect!', page: 'Hors livret', icon: 'FaChild',
    tagline: 'Your teacher reads a time word. Your body answers.',
    meta: 'Everybody · 3 minutes · stand up, sit down — no talking',
    actions: [
      { h: 'STAND UP', t: 'The word goes with the **present perfect** — up to now, no date.', icon: 'FaChild', color: 'accent3' },
      { h: 'SIT DOWN', t: 'The word goes with the **past simple** — a finished time.', icon: 'FaChair', color: MAGENTA_ },
    ],
    rules: ['Listen to the word — move in **three seconds**.', 'Wrong move? Say a correct sentence with the word to stay in the game.'],
    items: [
      { s: 'already', a: 0 }, { s: 'yesterday', a: 1 }, { s: 'at 11.41 p.m.', a: 1 }, { s: 'yet', a: 0 },
      { s: 'two hours ago', a: 1 }, { s: 'so far', a: 0 }, { s: 'last November', a: 1 }, { s: 'just', a: 0 },
      { s: 'this morning — it is 9.40', a: 0 }, { s: 'When…?', a: 1 }, { s: 'never · ever', a: 0 }, { s: 'this morning — it is 3 p.m.', a: 1 },
    ],
    instrA: 'The signal words. **Stand up** = present perfect · **sit down** = past simple.',
    notes: "Lire les mots dans le désordre, vite. Piège final : « this morning » dépend de l’heure — à 9.40 la matinée n’est pas finie (present perfect), à 15 h elle l’est (past simple).",
  });

  d.auction({
    title: 'The error auction', page: 'Hors livret',
    instrA: 'Correct sentence → you **win** your bid · wrong sentence → you **lose** it. The richest team wins.',
    rules: 'Teams of four start with **€1,000**. Bid **€100 to €500** on each sentence you think is **correct**. No bid = no risk.',
    rows: [
      { s: 'The alarm went off at 11.41 p.m.', ok: true },
      { s: 'Nobody has told the insurer yet.', ok: true },
      { s: 'The team has left the site at 19.58.', ok: false, fix: 'The team **left** the site at 19.58.' },
      { s: 'I have seen the damage, so I can describe it.', ok: true },
      { s: 'Iris has taken already the photos.', ok: false, fix: 'Iris has **already taken** the photos.' },
      { s: 'We didn’t receive the estimate yet.', ok: false, fix: 'We **haven’t received** the estimate yet.' },
      { s: 'The insurer has called twice this morning.', ok: true },
      { s: 'Samuel has restored the backup at 9 a.m.', ok: false, fix: 'Samuel **restored** the backup at 9 a.m.' },
    ],
    notes: "Le tableau des enchères se tient au tableau blanc (une colonne par équipe). Révéler les phrases une par une. 7 : il est 9.40, la matinée n’est pas finie → present perfect correct.",
  });

  d.mingle({
    title: 'Find someone who…', page: 'Hors livret',
    instr: 'Stand up and walk around. Ask //Have you ever…? / Have you … yet?// — write a **name**, then ask one more question.',
    cells: [
      'has already had a coffee this morning.',
      'has never broken a phone.',
      'has just finished an assignment.',
      'has been to London.',
      'hasn’t had breakfast yet.',
      'has already used English at work.',
      'has lost their keys this month.',
      'has worked on a real project in a team.',
      'has never been late for this class.',
    ],
    note: { kind: 'keep', label: 'Bridge', text: 'the question is in the **present perfect** — //Have you ever lost your keys?// — but the follow-up asks for a date: **past simple**! //When did you lose them?//' },
    notes: "10 minutes debout. Un nom différent par case. Mise en commun : « Lina has never broken a phone. Tom has been to London — he went there in 2024. »",
  });

  d.list({
    title: 'Past simple or present perfect?', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Ask yourself: **WHEN?** or **SO WHAT?**',
    items: [
      'Samuel [[restored]] //(restore)// the backup at 9 a.m.',
      'We [[haven’t received]] //(not receive)// the estimate yet.',
      'The insurer [[has called]] //(call)// twice this morning.',
      'I [[wrote]] //(write)// to the site manager yesterday.',
      '[[Have]] you ever [[seen]] //(see)// a leak like this?',
      'The cleaners [[found]] //(find)// the water at 6.50.',
    ],
    note: { kind: 'watch', text: '3: //this morning// — it is 09.40, the morning is not over → present perfect · 5: //ever// → present perfect.' },
  });

  d.closing({
    cliff: '“Ten o’clock update. Everybody is waiting for it.” **Five lines**, continuous text, no bullet points. Nine people will read it on their phones.',
    homework: ['Learn the **present perfect** train: have / has + (already · just) + participle + … + (yet).', 'Write 3 **DONE** and 3 **NOT YET** lines about your own week.', 'Read p. 21 (Word file: progress expressions).'],
    exit: 'One line for **DONE**, one for **NOT YET** — about the case.',
  });
};
