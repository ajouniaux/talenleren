// Séance 4 — Scene 2, 08.15 (livret p. 8–9)
exports.meta = {
  n: 4, slug: 'Scene2_The_room', title: 'The room with water in it',
  subtitle: 'Four people, a wet floor and nobody knows', pages: 'Livret p. 8–9', img: 's2_room', time: '08.15', sceneLabel: 'SCENE 2',
  coverNotes: "Scène 2 : lecture du dialogue dans le local technique. Objectif grammatical : le past continuous (arrière-plan) face au prétérit (événement).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'A list of **who said what** in the room — and **how sure** each speaker was.',
    language: 'Past continuous (//was / were + -ing//) vs past simple · certainty markers (//I think, may, might//) · vocabulary of the room',
    skills: 'Describing a picture · reading a dialogue for facts · acting out a scene',
    agenda: [['Warm-up: phrasal verbs', 10], ['Describe the picture', 5], ['Words of the room', 10], ['Read the scene (p. 8–9)', 15], ['Who said what — how sure?', 15], ['Past continuous', 15], ['Extra practice', 10], ['Act it out', 5], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: phrasal verbs', tag: 'WARM-UP', page: 'Séance 3',
    items: ['The alarm [[went off]] at 23.41. //(se déclencher)//', 'Two units [[broke down]] during the night. //(tomber en panne)//', 'Nobody [[turned up]] before 6.47. //(arriver)//', 'I will [[look into]] the log this morning. //(examiner)//', 'We cannot [[put off]] the decision. //(reporter)//'],
  });

  d.scene({
    title: 'The room with water in it', tag: 'SCENE', page: 'Livret p. 8', img: 's2_room', time: '08.15', sceneLabel: 'SCENE 2',
    alt: 'The flooded technical room: Iris photographs the ceiling, Samuel kneels behind the server rack, Mark stands in the doorway',
    text: ['The technical room **smells of wet plaster**.', '**Iris** is photographing the ceiling. **Samuel** is on his knees behind the server rack with a torch. **Mark** is standing in the doorway with his coat still on.', 'Nobody sits down.'],
    ask: 'Look at the picture: **who is doing what?** Answer with //is / are + -ing//.',
    notes: "Description au présent continu (is photographing, is kneeling, is standing) : tremplin vers le past continuous (was photographing…). Faire lire les bulles de l’image.",
  });

  d.table({
    title: 'Words of the room', tag: 'VOCABULARY', page: 'Livret p. 8–9',
    headers: ['ENGLISH', 'FRANÇAIS', 'IN THE SCENE'],
    colW: [3.0, 3.1, 6.03], boldCol: 0,
    rows: [
      ['the ceiling · a ceiling tile', 'le plafond · une dalle', 'Iris is photographing the **ceiling**.'],
      ['wet plaster', 'du plâtre mouillé', 'The room smells of **wet plaster**.'],
      ['soaked', 'trempé', 'The floor is **soaked**.'],
      ['a pipe · to leak', 'une canalisation · fuir', 'The **pipe** above the ceiling was **leaking**.'],
      ['a server rack · a unit', 'une baie · un serveur (module)', 'Two **units** have already stopped.'],
      ['a torch (UK) / a flashlight (US)', 'une lampe torche', 'Samuel is behind the rack with a **torch**.'],
      ['the doorway', 'l’embrasure de la porte', 'Mark is standing in the **doorway**.'],
      ['cabling', 'le câblage', 'They were installing the new **cabling**.'],
    ],
    notes: "Prononciation : ceiling /ˈsiːlɪŋ/, soaked /səʊkt/, plaster /ˈplɑːstə/.",
  });

  d.dialogue({
    title: 'Technical room, second floor (1/2)', tag: 'SCENE', page: 'Livret p. 8',
    lines: [
      ['MARK', '« Thanks for coming so early. We have a problem. »', '01'],
      ['YOU', '« I got your message at seven. What exactly happened? »', '02'],
      ['MARK', '« The cleaners found water in here this morning. It was still running when they arrived. »', '03'],
      ['YOU', '« Do we know when it started? »', '04'],
      ['MARK', '« Not yet. Samuel was checking the server rack when I called him. He says two units have already stopped. »', '05'],
      ['IRIS', '« I’ve just come back from the second floor. The pipe above the ceiling was leaking all night, I think. »', '06'],
      ['MARK', '« Was anyone in the building yesterday evening? »', '07'],
      ['IRIS', '« The contractor’s team was working here until eight. They were installing the new cabling. »', '08'],
      ['SAMUEL', '« I’ve looked at the logs. The temperature alarm went off at 11.40 p.m., but nobody was on site. »', '09'],
      ['YOU', '« Has anyone told the insurer yet? »', '10'],
    ],
    notes: "Lecture à voix haute par 4 élèves. Questions flash : Who found the water? When did it start? (Not yet known.)",
  });

  d.dialogue({
    title: 'Technical room, second floor (2/2)', tag: 'SCENE', page: 'Livret p. 9',
    lines: [
      ['IRIS', '« And it may be worse than it looks. The floor is soaked. »', '12'],
      ['SAMUEL', '« It might be the same pipe as last November. We have had trouble with it since the summer. »', '13'],
      ['MARK', '« We should get to the bottom of this before we file a claim. »', '14'],
      ['MARK', '« Right. I need a timeline of last night on this board by nine. Facts only. »', '15'],
    ],
    img: 's2_room',
    legend: { label: 'LISTEN FOR', lines: ['**I think · may · might** = how sure?', '**was …-ing** = the background', '**have / has …** = where we stand now', '//to get to the bottom of// = tirer l’affaire au clair'] },
    notes: "Le livret passe de la ligne 10 à la ligne 12 : la réplique 11 (réponse à « Has anyone told the insurer yet? ») manque. Faire deviner : « Not yet. » (cf. image p. 19).",
  });

  d.exercise({
    title: 'Read the scene for facts', tag: '+ EXTRA', page: 'Livret p. 8–9 · hors livret',
    cols: 2, gap: 6,
    items: [
      { q: 'When did you get Mark’s message?', a: 'At seven.' },
      { q: 'What did the cleaners find?', a: 'Water — it was still running when they arrived.' },
      { q: 'Do they know when it started?', a: 'Not yet.' },
      { q: 'What has Samuel found?', a: 'Two units have already stopped.' },
      { q: 'What does Iris think about the pipe?', a: 'It was leaking all night — **“I think”**.' },
      { q: 'Who was in the building yesterday evening?', a: 'The contractor’s team, until eight (installing cabling).' },
      { q: 'When did the temperature alarm go off?', a: 'At 11.40 p.m. — according to Samuel.' },
      { q: 'What does Mark want by nine?', a: 'A timeline of last night — **facts only**.' },
    ],
  });

  d.table({
    title: 'Who said what — and how sure?', tag: 'YOUR MOVE', page: 'Livret p. 8–9',
    intro: 'For each statement: who said it, which word shows how sure they are, and is it a fact or a supposition?',
    headers: ['STATEMENT', 'WHO', 'MARKER', 'FACT OR SUPPOSITION?'],
    colW: [4.6, 1.6, 2.7, 3.23],
    rows: [
      ['It was still running when they arrived.', 'Mark', '[[none — the cleaners saw it]]', '[[fact (witnessed)]]'],
      ['The pipe was leaking all night.', 'Iris', '[[“I think”]]', '[[supposition]]'],
      ['The alarm went off at 11.40 p.m.', 'Samuel', '[[“I’ve looked at the logs”]]', '[[fact? — check the log!]]'],
      ['Nobody was on site.', 'Samuel', '[[none]]', '[[not proved yet]]'],
      ['It may be worse than it looks.', 'Iris', '[[may]]', '[[supposition]]'],
      ['It might be the same pipe as last November.', 'Samuel', '[[might]]', '[[supposition]]'],
    ],
    notes: "Activité ajoutée qui prépare la scène 3 (« Sort the witnesses », p. 16).",
    notesA: "Ligne 3 : Samuel cite les logs, mais la scène 3 montrera 23:41 et non 11.40. Ligne 4 : rien ne le prouve — la scène 3 montrera une entrée de badge à 20:04.",
  });

  d.cards({
    title: 'One scene, four grammar tools', tag: 'GRAMMAR', page: 'Livret p. 8–9',
    intro: 'Scene 2 contains every tool you will need for the report. Today: the **past continuous**.',
    perRow: 2,
    cards: [
      { h: 'PAST SIMPLE — the dated fact', color: 'accent1', lines: ['The cleaners **found** water.', 'The alarm **went off** at 11.40 p.m.'] },
      { h: 'PAST CONTINUOUS — the background (today)', color: 'accent2', lines: ['It **was still running** when they arrived.', 'Samuel **was checking** the rack when I **called** him.'] },
      { h: 'PRESENT PERFECT — where we stand (Scene 4)', color: 'accent3', lines: ['Two units **have already stopped**.', '**Has** anyone **told** the insurer **yet**?'] },
      { h: 'MODALS — how sure (Scene 7)', color: 'accent4', lines: ['It **may be** worse than it looks.', 'It **might be** the same pipe.'] },
    ],
    notes: "Vue d’ensemble : ce dialogue annonce toute la progression grammaticale du dossier.",
  });

  d.cards({
    title: 'The past continuous', tag: 'GRAMMAR', page: 'Livret p. 8–9',
    perRow: 3,
    cards: [
      { h: 'FORM', color: 'tx2', f: 'was / were + V-ing', lines: ['I / he / she / it **was** working', 'we / you / they **were** working', 'Neg: **wasn’t / weren’t** · Q: **Was** it running?'] },
      { h: 'USE 1 — IN PROGRESS', color: 'accent2', f: 'at a given time', lines: ['At 7.55 p.m. the team **was still working**.', 'At 23.41, water **was running** behind the ceiling.'] },
      { h: 'USE 2 — BACKGROUND + EVENT', color: 'accent1', f: 'was -ing … when + V2', lines: ['Samuel **was checking** the rack **when** I **called** him.', 'The water **was still running when** the cleaners **arrived**.'] },
    ],
    foot: { kind: 'trap', text: 'L’imparfait ne se traduit pas toujours par -ing : //Il y avait de l’eau// → **There was** water (✗ there was being) · //Personne ne savait// → Nobody **knew** (✗ was knowing). Les verbes d’état (be, have, know, think, want) refusent -ing.' },
  });

  d.timeline({
    title: 'Background and event: the night on a line', tag: 'GRAMMAR', page: 'Livret p. 8–9',
    intro: 'A **bar** is something in progress (past continuous). A **dot** is an event at a point in time (past simple).',
    axis: { from: 17, to: 31.3, ticks: [[18, '18.00'], [20, '20.00'], [22, '22.00'], [24, '00.00'], [26, '02.00'], [28, '04.00'], [30, '06.00']] },
    bars: [
      { from: 17.2, to: 19.97, label: 'the team was working', color: 'accent2', row: 1 },
      { from: 22.3, to: 30.83, label: 'water was running behind the ceiling', color: 'accent2', row: 1, open: true },
      { from: 23.2, to: 30.6, label: 'everybody was sleeping', color: 'accent5', row: 0 },
    ],
    points: [
      { at: 19.97, label: 'the team **left**', row: 0 },
      { at: 23.67, label: 'the alarm **went off**', row: 1 },
      { at: 30.83, label: 'the cleaners **found** the water', row: 0, w: 2.6 },
    ],
    legend: [['bar', 'accent2', '**bar** = background → was / were + -ing'], ['dot', 'accent1', '**dot** = event → past simple']],
    notes: "Faire verbaliser : « While everybody was sleeping, the alarm went off. » / « The water was still running when the cleaners found it. » Les heures exactes viendront de l’Exhibit A (scène 3).",
  });

  d.exercise({
    title: 'Past simple or past continuous?', tag: '+ EXTRA', page: 'Hors livret',
    items: [
      'Samuel [[was checking]] (check) the rack when Mark [[called]] (call) him.',
      'At 23.41 the water [[was still running]] (still run).',
      'The cleaners [[opened]] (open) the door and [[saw]] (see) the water.',
      'While Iris [[was taking]] (take) photos, Samuel [[was reading]] (read) the log.',
      'Nobody [[knew]] (know) about the leak. //(state verb)//',
      'The team [[was installing]] (install) cabling when the manager [[arrived]] (arrive).',
    ],
    traps: ['Two actions in a row (open, see) → **past simple** ×2.', 'Two parallel backgrounds → **past continuous** ×2.', '//know// = state verb → **knew**.'],
  });

  d.cards({
    title: 'Act it out', tag: 'SPEAKING', page: 'Livret p. 8–9',
    perRow: 3,
    cards: [
      { h: 'ROUND 1 — READ', color: 'accent4', lines: ['Groups of four: **Mark · You · Iris · Samuel**', 'Read lines 01–15 aloud, then swap roles.'] },
      { h: 'ROUND 2 — PROMPTS ONLY', color: 'accent1', lines: ['Close the booklet.', 'Replay the scene from these prompts: //early · seven · water · not yet · two units · all night · until eight · 11.40 · insurer · worse · November · nine//'] },
      { h: 'PRONUNCIATION', color: 'accent2', lines: ['**I’ve** looked · **We’ve** had — contract!', 'Yes/no questions go **up** ↗: //Has anyone told the insurer yet?//', 'soaked /səʊkt/ · ceiling /ˈsiːlɪŋ/'] },
    ],
  });

  d.closing({
    cliff: '“Right. I need a timeline of last night on this board **by nine**. Facts only.” It is 8.20. You have forty minutes and an empty whiteboard.',
    homework: ['Learn the **past continuous** (form + two uses).', 'Learn the words of the room.', 'Read the text p. 9 and underline the twelve verbs in brackets.'],
    exit: 'Finish the sentence: //When the cleaners arrived, …// (use the past continuous).',
  });
};
