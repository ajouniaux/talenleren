// Séance 13 — Scene 6, 11.30 (livret p. 28–31)
exports.meta = {
  n: 13, slug: 'Scene6_The_insurer_calls_back', title: 'The insurer calls back',
  subtitle: 'She is not asking what you believe. She is asking since when.', pages: 'Livret p. 28–31', img: 's6_insurer', time: '11.30', sceneLabel: 'SCENE 6',
  coverNotes: "Scène 6 : message vocal d’Helen Marsh (à passer deux fois). Le script n’est pas dans le livret : les réponses aux questions 2, 3, 5 et 6 sont des réponses probables à vérifier avec l’enregistrement.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: '**Three sentences and a deadline**: your call back to the assessor.',
    language: 'Present perfect + **for / since** · //How long…?// · honest answers: //not … yet, so far, still// · saying it without naming anyone (passive)',
    skills: 'Listening for a deadline and a prohibition · a short professional phone call',
    agenda: [['Warm-up: false friends', 5], ['Scene 6 + voicemail × 2', 15], ['Questions 1–6 (p. 29)', 15], ['For or since? (p. 30)', 15], ['Dry run A–C (p. 30)', 15], ['Saying it without naming anyone', 5], ['Call her back (p. 31)', 15], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: choose', tag: 'WARM-UP', page: 'Séance 12',
    items: ['We must {{control}} / <<check>> the basement.', '{{Actually}} / <<Currently>> the second floor is closed.', 'Three colleagues will {{assist}} / <<attend>> the meeting.', 'It {{is}} / <<has been>> closed since this morning.'],
  });

  d.scene({
    title: 'The insurer calls back', tag: 'SCENE', page: 'Livret p. 28', img: 's6_insurer', time: '11.30', sceneLabel: 'SCENE 6',
    alt: 'Mark, Samuel, Iris and the narrator around a phone on speaker',
    text: ['Mark puts his phone on the table and presses **speaker**. The claims assessor has left a message.', 'She does not sound unfriendly. She sounds like somebody who has heard **a great many stories** before lunch.'],
    ask: 'What do you think an assessor wants **first**: a cause, or evidence?',
    notes: "Bulles : « I am not asking you what caused it. » / « I am asking you what you can prove. »",
  });

  d.voicemail({
    title: 'Voicemail — listen twice', tag: 'VOICEMAIL', page: 'Livret p. 28',
    who: 'Helen Marsh, claims assessor — 11.26',
    meta: 'Voicemail · 55 seconds · two listenings. Take notes during the second one only.',
    steps: [
      { icon: 'FaHeadphones', h: 'Listening 1', t: 'Pens down. Listen for her **tone** and her **two demands**.' },
      { icon: 'FaPenNib', h: 'Listening 2', color: 'accent1', t: 'Notes: a **deadline** (day + time), a **prohibition** (what NOT to write), a **question**.' },
      { icon: 'FaExclamationTriangle', h: 'Watch out', color: 'accent6', t: 'She gives you a deadline and a prohibition. **Missing either of the two costs the case.**' },
    ],
  });

  d.mcq({
    title: 'What she wants — Q1', tag: 'YOUR MOVE', page: 'Livret p. 29',
    q: '**1.** What does Ms Marsh want from you first?',
    opts: ['A full report with a stated cause.', 'The alarm log and the photographs.', 'The contractor’s written statement.', 'A telephone call from Mr Shaw himself.'],
    ans: 1,
    why: 'She wants **evidence before explanations**: the log (verifiable times) and the photographs (the state of the room). //To be checked against your recording.//',
  });

  d.exercise({
    title: 'What she warns you about — Q2 · Q3 · Q5 · Q6', tag: 'YOUR MOVE', page: 'Livret p. 29',
    number: false, gap: 6,
    items: [
      { q: '**2.** She gives a deadline. What is it exactly, and what happens if you miss it?', a: 'Day + time **as said in the recording** — note it in full. If you miss it, the claim is delayed — or refused.' },
      { q: '**3.** She warns you about one thing you must **not** put in the report. What, and why?', a: 'A **cause that has not been proved** (and no names): an unproved cause stated as a fact gives her grounds to refuse.' },
      { q: '**5.** She asks one question that nobody in the room can answer yet. Which one?', a: '**How long has this been going on?** — since when has the pipe been faulty?' },
      { q: '**6.** “I am not asking you what caused it. I am asking you what you can prove.” What does that change about the report?', a: 'The report is built on **verifiable facts** (times, log, photos); the cause may only appear as a **hypothesis** (//may / might//).' },
    ],
    notesA: "Réponses probables, déduites du livret (titre de la scène, bulles, p. 30–31, p. 43). À ajuster à l’enregistrement, en particulier l’échéance exacte (Q2).",
  });

  d.mcq({
    title: 'What she wants — Q4', tag: 'YOUR MOVE', page: 'Livret p. 29',
    q: '**4.** Is it correct to say that she has already decided to refuse the claim?',
    opts: ['Yes: she says the file looks weak.', 'Yes: she mentions a previous refusal.', 'No: she asks for evidence before deciding.', 'No: she has already accepted it in principle.'],
    ans: 2,
    why: 'She has **not decided** anything: she asks for evidence first. An assessor neither refuses nor accepts before reading the file.',
  });

  d.picture({
    title: 'How long has this pipe been faulty?', tag: 'FIELD NOTE', page: 'Livret p. 30', img: 's6_for_since',
    capLabel: 'ON THE BOARD', capColor: 'accent2',
    caption: ['**FOR** measures the distance: //for about three months//', '**SINCE** marks where it starts: //since the summer//', 'Question: **How long has** this pipe **been** faulty?', '✗ //It is faulty since…// — French trap', '✓ //It has been faulty for…//'],
  });

  d.timeline({
    title: 'Since = the starting point · for = the length', tag: 'GRAMMAR', page: 'Livret p. 30',
    axis: { from: 5.6, to: 11.6, ticks: [[6, 'June'], [7, 'July'], [8, 'August'], [9, 'September'], [10, 'October'], [11, 'November']] },
    now: 11.3,
    bars: [{ from: 6.45, to: 11.3, label: 'it has been faulty — for about five months', color: 'accent2', row: 0 }],
    points: [{ at: 6.45, label: '**since** 14 June', row: 0 }],
    legend: [['dot', 'accent1', '**since** + a starting point: since June, since 7 a.m., since Monday'], ['bar', 'accent2', '**for** + a duration: for five months, for two days, for an hour']],
    foot: { kind: 'trap', text: '//il y a trois mois// = three months **ago** (past simple: //It started three months ago.//) ≠ //depuis trois mois// = **for** three months (present perfect).' },
    notes: "Frise générique (le mois de l’incident n’est pas précisé dans le livret) : l’important est la logique point de départ / durée.",
  });

  d.exercise({
    title: 'One minute before you dial', tag: 'DRY RUN', page: 'Livret p. 30',
    number: false,
    items: [
      { h: 'A · for or since?' },
      '1. The joint has been faulty [[since]] June.',
      '2. We have worked on this site [[for]] eight months.',
      '3. Nobody has used the basement [[since]] the summer.',
      '4. She has had the file [[for]] two days.',
      { h: 'B · Build the question the assessor will ask.' },
      '(how long / this / go on) → [[How long has this been going on?]]',
      '(how long / you / know / about the joint) → [[How long have you known about the joint?]]',
    ],
  });

  d.exercise({
    title: 'Say the honest sentence', tag: 'DRY RUN', page: 'Livret p. 30',
    instr: 'C · You do not know the answer. Write it in English, three ways.',
    items: ['(not … yet) → [[We have not identified the cause yet.]]', '(so far) → [[So far, we have found no evidence of when it started.]]', '(we are still) → [[We are still waiting for the basement inspection.]]'],
    traps: ['//not … yet//, //so far// → present perfect.', '//still// → before the main verb, after //be//: //We are **still** waiting.//'],
  });

  d.cards({
    title: 'Name the fact, not the person', tag: 'GRAMMAR', page: 'Livret p. 31 & 42',
    perRow: 3,
    cards: [
      { h: 'PASSIVE', color: 'accent2', f: 'be + past participle', lines: ['//The site manager checked the room.// →', '**A final inspection was carried out** at 20.04.'] },
      { h: 'IMPERSONAL SUBJECT', color: 'accent1', lines: ['//Badge 0102 entered…// →', '**An access was recorded** at 20.04.', '**The log shows** that …'] },
      { h: 'WE / THE FILE', color: 'accent3', lines: ['**We have not established** the cause yet.', '**The file does not show** who …'] },
    ],
    foot: { kind: 'tip', text: 'Keep the **time**, the **place**, the **action** — drop the name, the badge number and the job title.' },
  });

  d.exercise({
    title: 'Call her back', tag: 'YOUR MOVE', page: 'Livret p. 31',
    instr: 'Three questions to handle, one minute before she takes on another file. Write the three sentences you will say.',
    items: [
      { q: 'One with **for** or **since**.', a: '//We have had trouble with this section of pipework since the summer.//' },
      { q: 'One with **not … yet**.', a: '//We have not established the cause yet: the basement has not been inspected yet.//' },
      { q: 'One that **avoids naming anybody**.', a: '//An access to zone 2F was recorded between 20.04 and 20.19.//' },
    ],
    expect: ['Short sentences, **no hesitation**.', 'Open: //Ms Marsh, this is … from …, calling about Atlas House.//', 'Close: //You will have the report by …//'],
  });

  d.cards({
    title: 'Role play: one minute on the phone', tag: 'SPEAKING', page: 'Livret p. 31',
    perRow: 2,
    cards: [
      { h: 'STUDENT A — the representative', color: 'accent1', lines: ['Open: //Ms Marsh, this is … from …//', 'Give your **three sentences**.', 'If you don’t know: //I’m afraid I can’t confirm that at this stage.//', 'Close: //You will have the report by …//'] },
      { h: 'STUDENT B — the assessor', color: 'accent4', lines: ['Ask: **How long has this been going on?**', 'Ask: **Who was in the room last night?**', 'Ask: **So what caused it?**', 'Hang up after **one minute** — exactly.'] },
    ],
  });

  d.closing({
    cliff: 'As you hang up, Samuel says quietly: **“Before you write anything — nobody has been down to the basement.”**',
    homework: ['Learn **for / since** + present perfect.', 'Learn three ways to say //I don’t know yet//: not … yet · so far · still.', 'Write your three call-back sentences again, from memory.'],
    exit: 'How long have you been studying English? Answer with **for**, then with **since**.',
  });
};
