// Séance 12 — Scene 5: what the e-mail admits (livret p. 25–27)
exports.meta = {
  n: 12, slug: 'Scene5_What_the_email_admits', title: 'What does this e-mail actually admit?',
  subtitle: 'An insurer reads what an e-mail unintentionally concedes.', pages: 'Livret p. 25–27', img: 's5_clean', time: '10.20', sceneLabel: 'SCENE 5',
  coverNotes: "Lecture inférentielle de l’Exhibit B, faux amis du dossier (Word file p. 26) et Dry run p. 27 (dont un aperçu de for / since, traité en séance 13).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Five answers on **what the e-mail concedes** — and a last check before you press //forward//.',
    language: 'Fact vs opinion · ten false friends of a claim file · //escalate, get to the bottom of, chase// · for / since (preview)',
    skills: 'Reading between the lines · justifying an answer with the file',
    agenda: [['Warm-up: seven false friends', 10], ['Q1–Q2: the time and the excuse (p. 25)', 15], ['Q3–Q5: what helps, what worries', 20], ['Word file: ten false friends (p. 26)', 10], ['Dry run A–B (p. 27)', 15], ['Dry run C: for or since? (preview)', 15], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: what Verdier meant', tag: 'WARM-UP', page: 'Séance 11',
    cols: 2,
    items: ['controlled → [[checked]]', 'Actually → [[Currently]]', 'assist → [[attend]]', 'demanded → [[asked]]', 'a delay → [[a deadline]]', 'Eventually → [[If necessary]]', 'resumed → [[summarised]]', 'when my team leaves → [[when my team left]]'],
  });

  d.mcq({
    title: 'What does this e-mail actually admit? — Q1', tag: 'YOUR MOVE', page: 'Livret p. 25',
    q: '**1.** Verdier gives one time. **How does it compare with Exhibit A?**',
    opts: ['It contradicts the log by about twenty minutes.', 'It matches the log exactly, which makes the rest of his e-mail harder to dismiss.', 'It matches the badge entry at 20:04, not the cabling team’s exit.', 'He gives no time at all; he only says “yesterday evening”.'],
    ans: 1,
    why: 'Verdier writes **19.58**; Exhibit A: //19:58 — cabling works — access badge 0447 — exit//. A precise, verifiable time: the assessor will take the rest of his e-mail seriously.',
  });

  d.mcq({
    title: 'What does this e-mail actually admit? — Q2', tag: 'YOUR MOVE', page: 'Livret p. 25',
    q: '**2.** He denies responsibility for one reason. **Which one, and what is its status?**',
    opts: ['His team left before eight — a fact, confirmed by the log.', 'The floor was dry when they left — a fact, but confirmed by nobody else.', 'The pipe is old and is not his work — an opinion, supported by nothing in the file.', 'He has never seen the pipe — an opinion, contradicted by Exhibit C.'],
    ans: 2,
    why: '//“The pipe is old and it is not our work”// is his only argument against blame. Nothing in the file supports it **yet**: it is an **opinion**.',
    notesA: "L’option D et la question 5 citent « I have never seen this pipe before », phrase absente de l’Exhibit B tel qu’imprimé p. 23 : à ajouter au texte de l’e-mail ou à reformuler dans le livret.",
  });

  d.exercise({
    title: 'What does this e-mail actually admit? — Q3 · Q4 · Q5', tag: 'YOUR MOVE', page: 'Livret p. 25',
    number: false, gap: 8,
    items: [
      { q: '**3.** One sentence in this e-mail helps our case more than it helps his. Which one, and why?', a: '//“Everything was dry when my team left at 19.58.”// It matches Exhibit A and gives a **dry reference point**: the leak started **after 19.58** — a **sudden** event, the kind an insurer covers.' },
      { q: '**4.** He offers something for this afternoon. Should we accept it today? One line, with your reason.', a: '**Not today**: first get his **signed written statement** — his team is an interested party and the cause is not established. (Accept any justified answer.)' },
      { q: '**5.** He writes “I have never seen this pipe before.” Why should that sentence make you uncomfortable, given what Samuel said at 8.15?', a: 'Samuel: //“It might be the same pipe as last November. We have had trouble with it since the summer.”// A known, repeated problem — and a team working next to it says it has **never seen it**: the denial draws attention to the pipe.' },
    ],
    notes: "Discussion en binôme avant correction. Q3 et Q4 admettent plusieurs réponses : exiger une justification tirée du dossier.",
    notesA: "Q5 : la phrase citée n’apparaît pas dans l’Exhibit B imprimé (voir note de la diapositive précédente).",
  });

  d.cards({
    title: 'Fact, opinion or contradiction?', tag: 'GRAMMAR', page: 'Livret p. 25',
    perRow: 3,
    cards: [
      { h: 'IT IS A FACT', color: 'accent3', lines: ['The log **shows** that …', 'This is **confirmed by** Exhibit A.', 'It **matches** the log exactly.'] },
      { h: 'IT IS AN OPINION', color: 'accent1', lines: ['This is **only his opinion**.', '**Nothing in the file supports** this.', 'He **claims** that … / **According to** him, …'] },
      { h: 'IT IS CONTRADICTED', color: 'accent6', lines: ['This is **contradicted by** …', 'It **does not match** …', 'The two accounts **differ** on …'] },
    ],
  });

  d.table({
    title: 'Ten words that do not mean what they look like', tag: 'WORD FILE', page: 'Livret p. 26',
    intro: 'Verdier’s e-mail contains seven of them. Here are ten, the ones that come up most often in a claim file.',
    headers: ['WORD', 'CE N’EST PAS', 'C’EST'],
    colW: [2.6, 3.0, 6.53], boldCol: 0,
    colColor: ['tx1', 'accent6', 'tx1'],
    rows: [
      ['to control', 'contrôler = vérifier', 'maîtriser, piloter. Vérifier = **to check**.'],
      ['actually', 'actuellement', 'en fait. Actuellement = **currently, at present**.'],
      ['eventually', 'éventuellement', 'finalement. Éventuellement = **possibly, if necessary**.'],
      ['a delay', 'un délai', 'un retard. Un délai = **a deadline, a time limit**.'],
      ['to assist', 'assister à', 'aider. Assister à = **to attend**.'],
      ['to demand', 'demander', 'exiger. Demander = **to ask for**.'],
      ['sensible', 'sensible', 'raisonnable. Sensible = **sensitive**.'],
      ['to resume', 'résumer', 'reprendre. Résumer = **to summarise**.'],
      ['an issue', 'une issue', 'un problème, une question. Une issue = **an exit, an outcome**.'],
      ['to achieve', 'achever', 'atteindre, réussir. Achever = **to complete, to finish**.'],
    ],
  });

  d.exercise({
    title: 'Eight more false friends of the office', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'French → English. Beware of the word that looks the same.',
    cols: 2,
    items: ['une formation → [[training]]', 'prétendre → [[to claim]]', 'sympathique → [[friendly, nice]]', 'une librairie → [[a bookshop]]', 'réaliser (un projet) → [[to carry out]]', 'un agenda → [[a diary / a calendar]]', 'supporter quelqu’un → [[to stand / to bear]]', 'une location → [[a rental]]'],
    traps: ['//to pretend// = faire semblant · //sympathetic// = compatissant', '//a library// = une bibliothèque · //to realise// = se rendre compte', '//an agenda// = un ordre du jour · //to support// = soutenir · //a location// = un emplacement'],
  });

  d.exercise({
    title: 'Two minutes before you press forward', tag: 'DRY RUN', page: 'Livret p. 27',
    instr: 'A · Choose. One word is right in each line.',
    items: [
      'We must {{control}} / <<check>> the basement this afternoon.',
      '{{Actually}} / <<Currently>> the second floor is closed.',
      'There was a two-day <<delay>> / {{deadline}} before we were told.',
      'Three colleagues will {{assist}} / <<attend>> the meeting.',
      'The insurer {{demanded}} / <<asked for>> the alarm log.',
    ],
    traps: ['Line 3 is the trap: //a two-day **delay** before we were told// = un **retard** → //delay// is right here!', 'Line 5: //demanded// is English (= **exigé**), but too aggressive for a neutral report.'],
  });

  d.exercise({
    title: 'Give the English', tag: 'DRY RUN', page: 'Livret p. 27',
    instr: 'B · Give the English for each French expression.',
    items: ['faire remonter le problème → [[to escalate the problem / to raise the issue]]', 'tirer l’affaire au clair → [[to get to the bottom of it (Mark, Scene 2)]]', 'relancer quelqu’un → [[to chase somebody (up) / to follow up with somebody]]'],
  });

  d.cards({
    title: 'For or since? — a first look', tag: 'GRAMMAR', page: 'Livret p. 27 & 30',
    perRow: 3,
    cards: [
      { h: 'FOR', color: 'accent2', f: 'for + a duration', lines: ['**for** two days', '**for** eight months', '**for** about three months'] },
      { h: 'SINCE', color: 'accent1', f: 'since + a starting point', lines: ['**since** June', '**since** the summer', '**since** seven o’clock'] },
      { h: 'THE VERB', color: 'tx2', f: 'have / has been …', lines: ['It **has been** faulty **since** June.', 'I **have worked** on this site **for** eight months.'] },
    ],
    foot: { kind: 'trap', text: '//depuis// + présent en français → **present perfect** en anglais : //Il est fermé depuis ce matin// → It **has been** closed since this morning (✗ //It is closed since//).' },
  });

  d.exercise({
    title: 'Answer with for or since', tag: 'DRY RUN', page: 'Livret p. 27',
    instr: 'C · Write your answers with //for// or //since//.',
    items: [
      { q: 'How long has this joint been faulty?', a: 'It has been faulty **since** June / **for** about three months.' },
      { q: 'How long have you worked on this site?', a: 'I have worked here **for** eight months / **since** March.' },
      { q: 'How long has the second floor been closed?', a: 'It has been closed **since** seven o’clock this morning / **for** three hours.' },
    ],
    notesA: "Réponses libres : vérifier la cohérence for + durée / since + point de départ et le present perfect.",
  });

  d.closing({
    cliff: '11.30. Mark puts his phone on the table and presses speaker. The claims assessor has left a message. She is not asking what you believe. **She is asking since when.**',
    homework: ['Learn the **10 false friends** (p. 26).', 'Learn **for** (duration) / **since** (starting point) + present perfect.', 'Prepare a notepad: second voicemail next session.'],
    exit: 'Correct: //We have a delay of two days.// — //It is closed since Monday.//',
  });
};
