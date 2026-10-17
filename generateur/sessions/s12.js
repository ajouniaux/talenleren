// Séance 12 — Scene 5, 10.20: what the e-mail admits (livret p. 25–27) — light style, modelled on the Séance 1 deck
const { MAGENTA } = require('../lib_light');

const MAIL = { from: 'p.verdier@verdier-construction.be', to: 'Mark Shaw', subject: 'About yesterday evening — English corrected, content unchanged' };

exports.meta = {
  n: 12, style: 'light', slug: 'Scene5_What_the_email_admits', title: 'What does this e-mail actually admit?', coverTitle: 'What does this e-mail\nactually admit?', coverSize: 36,
  subtitle: 'An insurer reads what an e-mail unintentionally concedes.', pages: 'Livret p. 25–27', img: 's5_clean', time: '10.20', sceneLabel: 'SCENE 5',
  coverNotes: "Séance 12 — Scène 5 (10.20), livret p. 25–27 : relecture de l’Exhibit B « comme un assureur », les dix faux amis du dossier (Word file p. 26), Dry run p. 27 (dont un aperçu de for / since, traité en séance 13).\n"
    + "Nouveautés : chasse aux surligneurs (vert = vérifiable, rose = opinion) · diagramme de Venn Exhibit A / Exhibit B · balance « à qui profite la phrase ? » · six verbes de l’assureur (claim, admit, deny…) · classement fait / opinion / contredit · vrai ou faux des faux amis · choix binaire (Dry run A) · cartes-éclair (Dry run B) · règle et mètre ruban de for / since · ENERGIZER épingle / bras ouverts · GAME contre-interrogatoire.\n"
    + "Déroulé indicatif (90 min) : warm-up (5') · scène + surligneurs (10') · Q1–Q2 (10') · Venn + balance (10') · Q3–Q5 (10') · fait / opinion (15') · faux amis + Dry run A–B (15') · for / since + ENERGIZER + Dry run C (10') · clôture (5').\n"
    + "Les diapositives GAME, ENERGIZER et + EXTRA sont facultatives.",
};

exports.build = (d) => {
  d.cover();
  d.section('Warm-up');

  d.match({
    title: 'Warm-up: what he wrote → what he meant', tag: 'WARM-UP', page: 'Séance 11',
    instr: 'Link Verdier’s words (left) to what he **meant** (right).',
    pairs: [
      ['controlled', 'checked', 'contrôler'],
      ['Actually, …', 'Currently, …', 'actuellement'],
      ['assist the meeting', 'attend the meeting', 'assister à'],
      ['demanded them to come', 'asked them to come', 'demander'],
      ['a delay of two days', 'two days left', 'un délai'],
      ['Eventually, …', 'If necessary, …', 'éventuellement'],
      ['resumed our position', 'summarised our position', 'résumer'],
      ['when my team leaves', 'when my team left', 'past event'],
    ],
    order: [3, 6, 0, 7, 2, 5, 1, 4],
    notes: "Réactivation des sept faux amis de la séance 11 (et du prétérit). Faire lire chaque paire à voix haute : « He wrote controlled. He meant checked. »",
  });

  d.section('Exhibit B, second reading');
  d.scene({
    title: 'Clean is not the same as safe', tag: 'SCENE', page: 'Livret p. 25', img: 's5_clean', time: '10.20', sceneLabel: 'SCENE 5',
    alt: 'Iris, arms crossed, beside the narrator, who corrects a printed e-mail in red: “Seven words — seven traps. Fix them before this leaves the building.”',
    text: ['The seven false friends are fixed. The English is **clean**.', 'Before Mark presses //forward//, read it **again** — the way the assessor will: not for what Verdier **claims**, but for what he **admits**.'],
    ask: 'What is the difference between **to claim** and **to admit**?',
    notes: "to claim = affirmer, prétendre (ce qu’on veut faire croire) ; to admit = reconnaître, admettre (ce qu’on concède, parfois malgré soi). C’est le fil de la séance : ce que l’e-mail reconnaît sans le vouloir.",
  });

  d.fixText({
    title: 'Two highlighters', tag: 'READING', page: 'Livret p. 25',
    instr: '**Green**: what somebody could **check** (a time, an action). **Pink**: what is only **his opinion**.',
    instrA: 'Only **one** green sentence is confirmed by another exhibit: **19.58** = Exhibit A. → Question 1',
    mail: MAIL, count: 6, countLabels: ['2 colours', '✓ 3 green · 3 pink'],
    paras: [
      'Dear Mr Shaw,',
      '$$I checked the second floor yesterday evening before we left.$$ We are currently still waiting for the humidity report.',
      'Two of my men will attend the meeting this afternoon if you wish. I have asked them to come.',
      '$$We have two days left to finish the cabling$$, &&so we are not late&&. If necessary, we can send you our own report.',
      'I have summarised our position in three lines below. &&I don’t think it would be sensible to blame my team&&: &&the pipe is old and it is not our work&&. $$Everything was dry when my team left at 19.58.$$',
      'Kind regards,   P. Verdier',
    ],
    notes: "Version corrigée de l’Exhibit B (séance 11). Travail individuel avec deux couleurs (ou souligné / entouré), 3 minutes, puis comparaison en binôme.",
    notesA: "Vert = vérifiable (une heure, une action), pas forcément vrai. Rose = jugement de Verdier. « so we are not late » est une conclusion : c’est lui qui le dit.",
  });

  d.mcq({
    title: 'What does this e-mail actually admit? — Q1', tag: 'YOUR MOVE', page: 'Livret p. 25',
    q: '**1.** Verdier gives one time. **How does it compare with Exhibit A?**',
    opts: ['It contradicts the log by about twenty minutes.', 'It matches the log exactly, which makes the rest of his e-mail harder to dismiss.', 'It matches the badge entry at 20:04, not the cabling team’s exit.', 'He gives no time at all; he only says “yesterday evening”.'],
    ans: 1,
    why: 'Verdier writes **19.58**; Exhibit A: //19:58 — cabling works — access badge 0447 — exit//. A precise, verifiable time: the assessor will take the rest of his e-mail seriously.',
    notes: "Laisser 30 secondes, vote à main levée (A, B, C, D), puis justification avec l’Exhibit A.",
  });

  d.mcq({
    title: 'What does this e-mail actually admit? — Q2', tag: 'YOUR MOVE', page: 'Livret p. 25',
    q: '**2.** He denies responsibility for one reason. **Which one, and what is its status?**',
    opts: ['His team left before eight — a fact, confirmed by the log.', 'The floor was dry when they left — a fact, but confirmed by nobody else.', 'The pipe is old and is not his work — an opinion, supported by nothing in the file.', 'He has never seen the pipe — an opinion, contradicted by Exhibit C.'],
    ans: 2,
    why: '//“The pipe is old and it is not our work”// is his only argument against blame. Nothing in the file supports it **yet**: it is an **opinion** — one of the pink lines.',
    notes: "Relier aux surligneurs : la réponse est l’une des phrases roses.",
    notesA: "L’option D et la question 5 citent « I have never seen this pipe before », phrase absente de l’Exhibit B tel qu’imprimé p. 23 : à ajouter au texte de l’e-mail ou à reformuler dans le livret.",
  });

  d.venn({
    title: 'Two exhibits, one night', tag: 'BRIDGE', page: 'Exhibits A & B',
    instr: 'Where does each piece of information come from? The e-mail, the log — or **both**?',
    sets: { L: { h: 'VERDIER’S E-MAIL', color: 'accent1' }, R: { h: 'THE NIGHT LOG', color: 'accent2' }, B: { h: 'BOTH' } },
    items: [
      { t: 'The pipe is **old**', z: 'L' },
      { t: 'Temperature alarm at **23.41**', z: 'R' },
      { t: 'The team left at **19.58**', z: 'B' },
      { t: 'The floor was **dry** at 19.58', z: 'L' },
      { t: 'Badge 0102: **entry** at 20.04', z: 'R' },
      { t: '“It is **not our work**”', z: 'L' },
      { t: 'Works in **zone 2F**', z: 'B' },
      { t: 'Notification **delivered** at 23.42', z: 'R' },
      { t: 'Two days **left** for the cabling', z: 'L' },
      { t: 'Humidity alarm at **23.44**', z: 'R' },
      { t: 'Two men can **attend** the meeting', z: 'L' },
    ],
    notes: "Pont avec la séance 6 (lecture de l’Exhibit A). Faire placer les étiquettes par la classe, puis demander : « What does the e-mail NOT mention? »",
    notesA: "Seul le recoupement (BOTH) a la valeur d’un fait établi. Ce que Verdier ne mentionne pas : l’entrée du badge 0102 à 20.04 (site manager). Pas forcément une omission volontaire — son équipe était partie —, mais l’assesseur, lui, verra la fenêtre 19.58 → 23.41.",
  });

  d.balance({
    title: 'Whose side is each sentence on?', tag: 'READING', page: 'Livret p. 25',
    instr: 'Six sentences from the e-mail. Put each one on a pan.',
    instrA: 'The e-mail is heavy on **his** side — but **one** sentence helps **our** claim. → Question 3',
    pans: [{ h: 'HELPS OUR CLAIM', color: 'accent3' }, { h: 'HELPS VERDIER', color: 'accent1' }],
    items: [
      { t: 'The pipe is old.', p: 1 },
      { t: 'Everything was dry when my team left at 19.58.', p: 0 },
      { t: 'It is not our work.', p: 1 },
      { t: 'We have two days left, so we are not late.', p: 1 },
      { t: 'Two of my men will attend the meeting.', p: 1 },
      { t: 'We can send you our own report.', p: 1 },
    ],
    notes: "En binôme, 2 minutes. Chaque binôme place une phrase au tableau et justifie : « It helps Verdier because… »",
    notesA: "Nuance à faire trouver : « The pipe is old » protège Verdier, mais peut nuire à notre dossier (usure = exclusion fréquente des contrats d’assurance). La phrase qui nous aide : un local sec à 19.58, une première alarme à 23.41 → un événement soudain.",
  });

  d.list({
    title: 'What does this e-mail actually admit? — Q3 · Q4 · Q5', tag: 'YOUR MOVE', page: 'Livret p. 25',
    number: false, gap: 8,
    items: [
      { q: '**3.** One sentence in this e-mail helps our case more than it helps his. Which one, and why?', a: '//“Everything was dry when my team left at 19.58.”// It matches Exhibit A and gives a **dry reference point**: the leak started **after 19.58** — a **sudden** event, the kind an insurer covers.' },
      { q: '**4.** He offers something for this afternoon. Should we accept it today? One line, with your reason.', a: '**Not today**: first get his **signed written statement** — his team is an interested party and the cause is not established. (Accept any justified answer.)' },
      { q: '**5.** He writes “I have never seen this pipe before.” Why should that sentence make you uncomfortable, given what Samuel said at 8.15?', a: 'Samuel: //“It might be the same pipe as last November. We have had trouble with it since the summer.”// A known, repeated problem — and a team working next to it says it has **never seen it**: the denial draws attention to the pipe.' },
    ],
    notes: "Discussion en binôme avant correction. Q3 et Q4 admettent plusieurs réponses : exiger une justification tirée du dossier.",
    notesA: "Q5 : la phrase citée n’apparaît pas dans l’Exhibit B imprimé (voir la note de la question 2).",
  });

  d.section('Fact or opinion?');
  d.cardGrid({
    title: 'Six verbs the assessor listens for', tag: 'VOCABULARY', page: 'Hors livret',
    perRow: 3,
    cards: [
      { label: 'SAYS IT IS TRUE', big: 'to claim', fr: 'affirmer, prétendre', ex: 'He **claims** that the pipe is old.', color: 'accent1' },
      { label: 'SAYS YES', big: 'to admit', fr: 'reconnaître, avouer', ex: 'He **admits** that his team worked in zone 2F until 19.58.', color: 'accent3' },
      { label: 'SAYS NO', big: 'to deny', fr: 'nier', ex: 'He **denies** any responsibility for the leak.', color: 'accent6' },
      { label: 'SAYS YES — RELUCTANTLY', big: 'to concede', fr: 'concéder', ex: 'The e-mail **concedes** that the room was dry at 19.58.', color: 'accent3' },
      { label: 'POINTS AT SOMEBODY', big: 'to blame', fr: 'rejeter la faute sur', ex: 'He **blames** the old pipe, not his team.', color: 'accent6' },
      { label: 'CONFIRMS RECEIPT', big: 'to acknowledge', fr: 'accuser réception, reconnaître', ex: 'Please **acknowledge** receipt of this e-mail.', color: 'accent2' },
    ],
    notes: "Vocabulaire hors livret, réutilisé dans le jeu de la fin de section. Prononciation : acknowledge /əkˈnɒlɪdʒ/, concede /kənˈsiːd/.\nPiège : to deny + -ing (He denies causing it, ✗ to deny to cause) · to admit + -ing ou that (He admits leaving at 19.58).",
  });

  d.headerCards({
    title: 'Fact, opinion or contradicted?', tag: 'BRIDGE', page: 'Livret p. 25',
    perRow: 3,
    cards: [
      { h: 'IT IS A FACT', color: 'accent3', icon: 'FaCheck', lines: ['The log **shows** that … //(S6)//', 'This is **confirmed by** Exhibit A.', 'It **matches** the log exactly.'] },
      { h: 'IT IS AN OPINION', color: 'accent1', icon: 'FaCommentDots', lines: ['He **claims** that … //(S6)//', 'This is **only his opinion**.', '**Nothing in the file supports** this.', '**According to** him, …'] },
      { h: 'IT IS CONTRADICTED', color: 'accent6', icon: 'FaTimes', lines: ['This is **contradicted by** …', 'It **does not match** …', 'The two accounts **differ** on …'] },
    ],
    note: { kind: 'keep', label: 'Séance 8', text: '**no record ≠ nobody**: //The log does not show anybody// is a fact; //Nobody was there// is not.' },
    notes: "Pont avec les verbes introducteurs (séance 6) et le langage de la preuve (séance 8). Faire lire chaque carte avec un exemple tiré du dossier.",
  });

  d.sort({
    title: 'Sort the file: fact, opinion or contradicted?', tag: 'YOUR MOVE', page: 'Hors livret',
    instr: 'Nine statements about the night. Check each one against the file.',
    bankLabel: 'STATEMENTS', bankSize: 14,
    categories: [
      { h: 'FACT', sub: 'the file shows it', color: 'accent3' },
      { h: 'OPINION', sub: 'nothing supports it', color: 'accent1' },
      { h: 'CONTRADICTED', sub: 'the file says otherwise', color: 'accent6' },
    ],
    items: [
      { t: 'The pipe is old.', a: 'The pipe is old. — //Verdier//', cat: 1 },
      { t: 'Unit 3 shut down at midnight.', a: 'Unit 3 shut down at midnight. — //log: 02:16//', cat: 2 },
      { t: 'The team left at 19.58.', a: 'The team left at 19.58. — //Exhibit A//', cat: 0 },
      { t: 'The pipe has never leaked before.', a: 'Never any trouble before. — //Samuel: last November//', cat: 2 },
      { t: 'The works did not touch the pipe.', a: 'The works did not touch the pipe. — //no evidence//', cat: 1 },
      { t: 'Humidity alarm: 3 minutes after the first one.', a: 'Humidity alarm 3 min later. — //Exhibit A//', cat: 0 },
      { t: 'The notification was never sent.', a: 'Never sent. — //log: delivered at 23:42//', cat: 2 },
      { t: 'His team is not late.', a: 'His team is not late. — //his word only//', cat: 1 },
      { t: 'A notification was delivered at 23.42.', a: 'Delivered at 23.42. — //Exhibit A//', cat: 0 },
    ],
    notes: "En groupes de trois, 4 minutes. Chaque groupe justifie avec les expressions de la diapositive précédente : « This is contradicted by the log: unit 3 shut down at 02:16. »",
    notesA: "Rappel séance 8 : « delivered » ne prouve pas que quelqu’un a lu le message.",
  });

  d.game({
    title: 'Cross-examination: Mr Verdier in the chair', page: 'Hors livret', icon: 'FaGavel',
    tagline: 'One Verdier. Twenty assessors.',
    meta: 'Whole class · 8 minutes · a new Verdier every three sentences',
    steps: [
      'One student is **Paul Verdier**. He reads one sentence of his e-mail — or invents a new excuse.',
      'The class are **assessors**. The first to stand up answers with a phrase from the box.',
      'Verdier may protest once: //“I never said that!”// — the assessor must then **quote** the e-mail.',
      'After three sentences, a new Verdier takes the chair.',
    ],
    sayLabel: 'THE ASSESSOR SAYS',
    say: ['That is a **fact**: the log **shows** that …', 'That is only **your opinion**: nothing in the file **supports** it.', 'That is **contradicted by** Exhibit A.', 'So you **admit** that …?', 'You **deny** …, but can you **prove** it?'],
    win: 'name a fact, an opinion **and** a contradiction in one round — and you take Verdier’s chair.',
    notes: "Excuses possibles à souffler au premier « Verdier » : « My men never went near the ceiling. » (opinion) · « We left at seven. » (contredit : 19.58) · « The alarm system was broken. » (contredit : notification envoyée à 23:42) · « The floor was dry when we left. » (non confirmé).",
  });

  d.section('Word file');
  d.table({
    title: 'Ten words that do not mean what they look like', tag: 'WORD FILE', page: 'Livret p. 26',
    headers: ['WORD', 'CE N’EST PAS', 'C’EST'],
    colW: [2.4, 2.8, 6.93], boldCol: 0, align: ['left', 'left', 'left'],
    rows: [
      ['to control', '!!contrôler = vérifier!!', 'maîtriser, piloter. Vérifier = **to check**.'],
      ['actually', '!!actuellement!!', 'en fait. Actuellement = **currently, at present**.'],
      ['eventually', '!!éventuellement!!', 'finalement. Éventuellement = **possibly, if necessary**.'],
      ['a delay', '!!un délai!!', 'un retard. Un délai = **a deadline, a time limit**.'],
      ['to assist', '!!assister à!!', 'aider. Assister à = **to attend**.'],
      ['to demand', '!!demander!!', 'exiger. Demander = **to ask for**.'],
      ['sensible', '!!sensible!!', 'raisonnable. Sensible = **sensitive**.'],
      ['to resume', '!!résumer!!', 'reprendre. Résumer = **to summarise**.'],
      ['an issue', '!!une issue!!', 'un problème. Une issue = **an exit, an outcome**.'],
      ['to achieve', '!!achever!!', 'atteindre, réussir. Achever = **to complete**.'],
    ],
    notes: "Verdier en emploie sept ; voici les dix qui reviennent le plus dans un dossier de sinistre. Deux nouveaux par rapport à la séance 11 : issue et achieve. Faire produire une phrase du dossier : « The real issue is the pipe. » · « We have not achieved much so far. »",
  });

  d.trueFalse({
    title: 'Eight more traps of the office: true or false?', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Is the English translation right? **T** or **F** — then give the right word.',
    items: [
      { s: '//une formation// → **a formation**', a: false, why: '**training** · //a formation// = une formation (rocheuse, militaire)' },
      { s: '//prétendre// → **to pretend**', a: false, why: '**to claim** · //to pretend// = faire semblant' },
      { s: '//sympathique// → **sympathetic**', a: false, why: '**friendly, nice** · //sympathetic// = compatissant' },
      { s: '//une librairie// → **a bookshop**', a: true, why: 'right · //a library// = une bibliothèque' },
      { s: '//réaliser un projet// → **to realise a project**', a: false, why: '**to carry out** · //to realise// = se rendre compte' },
      { s: '//un agenda// → **a diary**', a: true, why: 'right · //an agenda// = un ordre du jour' },
      { s: '//supporter quelqu’un// → **to support somebody**', a: false, why: '**to stand / to bear** · //to support// = soutenir' },
      { s: '//une location// → **a rental**', a: true, why: 'right · //a location// = un emplacement' },
    ],
    notes: "Hors livret. Ardoises T / F, ou pouces. Pour chaque F, faire donner le bon mot ET le sens du faux ami.",
  });

  d.either({
    title: 'Two minutes before you press forward', tag: 'DRY RUN', page: 'Livret p. 27',
    instr: 'A · Choose. One word is right in each line.',
    rows: [
      { s: 'We must ___ the basement this afternoon.', opts: ['control', 'check'], ans: 1 },
      { s: '___ the second floor is closed.', opts: ['Actually,', 'Currently,'], ans: 1 },
      { s: 'There was a two-day ___ before we were told.', opts: ['delay', 'deadline'], ans: 0 },
      { s: 'Three colleagues will ___ the meeting.', opts: ['assist', 'attend'], ans: 1 },
      { s: 'The insurer ___ the alarm log.', opts: ['demanded', 'asked for'], ans: 1 },
      { s: 'The report must reach her before the ___.', opts: ['delay', 'deadline'], ans: 1 },
      { s: 'Work on the second floor will ___ on Monday.', opts: ['resume', 'summarise'], ans: 0 },
      { s: 'It would not be ___ to blame the cabling team.', opts: ['sensible', 'sensitive'], ans: 0 },
    ],
    instrA: 'Line 3 is the trap: //a two-day **delay** before we were told// = un **retard** — //delay// is right here!',
    notes: "Lignes 1 à 5 : livret p. 27. Lignes 6 à 8 : ajoutées (hors livret) — les faux amis employés dans leur vrai sens.",
    notesA: "Ligne 3 : delay = un retard, donc correct ici. Ligne 5 : demanded existe (= exigé) mais est trop agressif pour un rapport neutre. Ligne 7 : resume = reprendre (son vrai sens). Ligne 8 : sensible = raisonnable.",
  });

  d.flashcards({
    title: 'Give the English', tag: 'DRY RUN', page: 'Livret p. 27',
    instr: 'B · The French is on the card. Say the English before the card turns.',
    perRow: 3,
    cards: [
      { q: '//faire remonter le problème//', hint: 'to e_ _ _ _ _ _ _ _ it', a: 'to escalate it', fr: 'also: to raise the issue' },
      { q: '//tirer l’affaire au clair//', hint: 'to get to the b_ _ _ _ _ of it', a: 'to get to the bottom of it', fr: 'Mark, Scene 2' },
      { q: '//relancer quelqu’un//', hint: 'to ch_ _ _ somebody up', a: 'to chase sb up', fr: 'also: to follow up with sb' },
      { q: '//rejeter la faute sur quelqu’un//', hint: 'to sh_ _ _ the blame onto…', a: 'to shift the blame', fr: 'also: to blame somebody' },
      { q: '//faire suivre un e-mail//', hint: 'to f_ _ _ _ _ _ it', a: 'to forward it', fr: '“Fwd:” in the subject line' },
      { q: '//prendre quelque chose au sérieux//', hint: 'to t_ _ _ it s_ _ _ _ _ _ _ _', a: 'to take it seriously', fr: 'the assessor will' },
    ],
    notes: "Cartes 1 à 3 : livret p. 27. Cartes 4 à 6 : ajoutées (hors livret). Jeu de vitesse : la première équipe qui donne la bonne réponse marque un point.",
  });

  d.section('For or since? — a first look');
  d.ruler({
    title: 'For or since? — a first look', tag: 'GRAMMAR', page: 'Livret p. 27 & 30',
    ticks: ['6.00', '7.00', '8.00', '9.00', '10.00', '11.00'],
    from: 0.2, to: 0.867, start: 'since 7 o’clock', len: 'for over three hours', now: 'NOW · 10.20',
    sinceCard: { h: 'SINCE + a starting point = a pin', t: 'The floor **has been** closed **since 7 o’clock**.\nsince Monday · since the summer · since last November' },
    forCard: { h: 'FOR + a length of time = a tape', t: 'The floor **has been** closed **for over three hours**.\nfor two days · for eight months · for ages' },
    note: { kind: 'trap', text: '//depuis// + présent → **present perfect**: //Il est fermé depuis 7 h// → It **has been** closed since 7 o’clock (✗ //It is closed since…//).' },
    notes: "Aperçu seulement : for / since est traité en séance 13. L’épingle (since) marque le début ; le mètre ruban (for) mesure la durée jusqu’à maintenant.",
  });

  d.energizer({
    title: 'Pin or tape measure?', page: 'Hors livret', icon: 'FaRulerHorizontal',
    tagline: 'Your teacher says a time expression. Pin it — or measure it!',
    meta: 'Everybody stands · 3 minutes · then one sentence with //has been//',
    actions: [
      { h: 'SINCE', t: 'Point **one finger** down: a starting point — a pin.', icon: 'FaMapPin', color: MAGENTA },
      { h: 'FOR', t: 'Open **both arms**: a length of time — a tape measure.', icon: 'FaArrowsAltH', color: 'accent2' },
    ],
    rules: ['Pin or arms on “three, two, one!” — the last one to move sits down.', 'One student makes a sentence: //The floor has been closed since… / for…//'],
    items: [
      { s: 'seven o’clock', a: 0 }, { s: 'three hours', a: 1 }, { s: 'Monday', a: 0 }, { s: 'two days', a: 1 },
      { s: 'last November', a: 0 }, { s: 'eight months', a: 1 }, { s: 'the summer', a: 0 }, { s: 'ages', a: 1 },
      { s: '2019', a: 0 }, { s: 'a long time', a: 1 }, { s: 'I arrived', a: 0 }, { s: 'a week', a: 1 },
    ],
    instrA: 'Pin = **since** + a starting point · arms = **for** + a length of time.',
    notes: "Lire les expressions dans le désordre et de plus en plus vite. Piège : « since I arrived » (une proposition peut être un point de départ).",
  });

  d.list({
    title: 'Answer with for or since', tag: 'DRY RUN', page: 'Livret p. 27',
    instr: 'C · Write your answers with //for// **or** //since// — then say them to your neighbour.',
    number: false, gap: 8,
    items: [
      { q: 'How long has this joint been faulty?', a: 'It has been faulty **since** the summer / **for** about three months.' },
      { q: 'How long have you worked on this site?', a: 'I have worked here **for** eight months / **since** March.' },
      { q: 'How long has the second floor been closed?', a: 'It has been closed **since** seven o’clock this morning / **for** over three hours.' },
    ],
    notesA: "Réponses libres : vérifier la cohérence for + durée / since + point de départ, et le present perfect (has been, have worked).",
  });

  d.closing({
    cliff: '11.30. Mark puts his phone on the table and presses speaker. The claims assessor has left a message. She is not asking what you believe. **She is asking since when.**',
    homework: ['Learn the **10 false friends** (p. 26) — both directions.', 'Learn the six verbs: **claim · admit · deny · concede · blame · acknowledge**.', 'Learn **for** (a length) / **since** (a starting point) + present perfect.', 'Bring a notepad: a second voicemail next session.'],
    exit: 'Correct: //We have a delay of two days.// — //It is closed since Monday.//',
  });
};
