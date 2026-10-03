// Séance 10 — Scene 4: the ten o'clock update (livret p. 20–22)
exports.meta = {
  n: 10, slug: 'Scene4_Ten_oclock_update', title: 'Write the ten o’clock update',
  subtitle: 'Nine people will read this on their phones. Five lines, not six.', pages: 'Livret p. 20–22', img: 's4_teamcall', time: '10.00', sceneLabel: 'SCENE 4',
  coverNotes: "Production écrite courte (update de 5 lignes) et travail d’équipe sur le tableau. Vocabulaire : expressions d’avancement + mots de chaque domaine.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: '**The ten o’clock update** (five lines) and your team’s DONE / NOT YET board.',
    language: 'Present perfect in context · progress expressions (//on track, fall behind, keep in the loop, touch base, up to speed, bottleneck, chase//) · your field’s key words',
    skills: 'Writing a short status update · explaining your field to colleagues',
    agenda: [['Warm-up: already / yet / just', 10], ['Word file: progress expressions (p. 21)', 15], ['Write the update (p. 20)', 15], ['Model + common errors', 10], ['Your field’s words (p. 21–22)', 10], ['Team call: the board (p. 20)', 20], ['Taboo game', 5], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: where does the adverb go?', tag: 'WARM-UP', page: 'Séance 9',
    items: ['Iris has taken the photographs. //(already)// → [[Iris has already taken the photographs.]]', 'Has anyone called the insurer? //(yet)// → [[Has anyone called the insurer yet?]]', 'I’ve come back from the basement. //(just)// → [[I’ve just come back from the basement.]]', 'The alarm //(go off)// at 23.41. → [[went off]]'],
  });

  d.table({
    title: 'Talking about progress without saying “it is going well”', tag: 'WORD FILE', page: 'Livret p. 21',
    intro: 'Nine people will read your status update. These expressions are better than //everything is ok//.',
    headers: ['EXPRESSION', 'FRANÇAIS', 'EXEMPLE'],
    colW: [3.3, 3.0, 5.83], boldCol: 0,
    rows: [
      ['to be **on track**', 'être dans les temps', 'The photographs are **on track** for ten o’clock.'],
      ['to **fall behind**', 'prendre du retard', 'The estimate **has fallen behind**.'],
      ['to keep somebody **in the loop**', 'tenir informé', 'Please **keep me in the loop** about the basement.'],
      ['to **touch base** with somebody', 'faire un point rapide', 'I will **touch base** with the insurer at noon.'],
      ['to be **up to speed**', 'être au courant', 'Is everybody **up to speed** on the log?'],
      ['a **bottleneck**', 'un goulet d’étranglement', 'The contractor’s statement is the **bottleneck**.'],
      ['to **chase** somebody', 'relancer quelqu’un', 'I **have chased** him twice this morning.'],
    ],
  });

  d.exercise({
    title: 'Progress, in context', tag: '+ EXTRA', page: 'Hors livret',
    instr: 'Complete with an expression from the Word file.',
    items: [
      'Don’t worry: the photographs are [[on track]].',
      'Can you [[keep me in the loop]] about the basement?',
      'The contractor still hasn’t answered — I’ll [[chase]] him again.',
      'The estimate is the real [[bottleneck]]: nothing can move without it.',
      'Let’s [[touch base]] at noon, before the insurer calls.',
      'Is the new colleague [[up to speed]] on the log?',
    ],
  });

  d.checklist({
    title: 'Write the ten o’clock update', tag: 'YOUR MOVE', page: 'Livret p. 20',
    intro: 'Five lines, continuous text, no bullet points. Opening you may use: « Here is where we stand at ten o’clock. »',
    items: ['**2 ×** //already//', '**2 ×** //not … yet//', '**1 ×** //just//', '**2** progress expressions from the Word file (//on track, chase…//)', '**No** clock time with the present perfect', '**Five lines** — nine people read it on a phone'],
    cols: 2,
  });

  d.exercise({
    title: 'One possible update', tag: 'YOUR MOVE', page: 'Livret p. 20', mode: 'a',
    number: false, gap: 14,
    items: [{ t: 'Here is where we stand at ten o’clock. Iris has ##already## taken the photographs of the ceiling and the floor, and Samuel has ##already## checked the alarm log, so the timeline is **on track**. Samuel has %%just%% confirmed that unit 3 shut down during the night. However, we have ^^not^^ inspected the basement ^^yet^^, and the contractor has ^^not^^ sent his written statement ^^yet^^ — I **have chased** him twice this morning.' }],
    sideW: 3.4,
    aside: { label: 'IN THE MODEL', color: 'accent3', icon: 'FaCheck', lines: ['##already## × 2', '^^not … yet^^ × 2', '%%just%% × 1', '**on track · chase** = Word file', '5 sentences, no clock time'] },
    max: 24,
    notes: "Modèle à projeter après la production des élèves (pas avant).",
  });

  d.traps({
    title: 'Five errors the board will not forgive', tag: 'PITFALL', page: 'Livret p. 19–20',
    rows: [
      ['Iris has taken **already** the photos.', 'Iris has **already** taken the photos.', 'adverb between //have// and the participle'],
      ['We didn’t inspect the basement yet.', 'We **haven’t inspected** the basement **yet**.', '//yet// → present perfect (UK)'],
      ['Samuel has checked the log at 9.05.', 'Samuel **checked** the log at 9.05.', 'a clock time → past simple'],
      ['Nobody has not told the insurer.', 'Nobody **has told** the insurer yet.', '//nobody// is already negative'],
      ['Everything is ok.', 'The photographs are **on track**.', 'say what is done, not how you feel'],
    ],
  });

  d.table({
    title: 'Words your colleagues need from you (1/2)', tag: 'YOUR EXPERT', page: 'Livret p. 21',
    headers: ['', 'WORD', 'FRANÇAIS', 'ON THE BOARD'],
    colW: [0.9, 2.6, 3.4, 5.23], boldCol: 1,
    rows: [
      ['ACC', 'a damage claim', 'une déclaration de sinistre', 'We have opened a **damage claim** file.'],
      ['ACC', 'to write off', 'passer en pertes, sortir de l’actif', 'Unit 3 may have to be **written off**.'],
      ['ACC', 'a provision', 'une provision', 'We have made a **provision** of €12,000.'],
      ['ACC', 'an insurance premium', 'une prime d’assurance', 'The **premium** has not been recalculated yet.'],
      ['ACC', 'a cost centre', 'un centre de coûts', 'The repair will go to the site **cost centre**.'],
      ['IT', 'a server rack', 'une baie de serveurs', 'Two units in **rack** A2 have stopped.'],
      ['IT', 'a power failure', 'une panne de courant', 'There has been no **power failure**.'],
      ['IT', 'a backup', 'une sauvegarde', 'The last **backup** ran at midnight.'],
      ['IT', 'to restore', 'restaurer, rétablir', 'We have **restored** the service.'],
      ['IT', 'downtime', 'temps d’arrêt, indisponibilité', 'Nine hours of **downtime** so far.'],
    ],
  });

  d.table({
    title: 'Words your colleagues need from you (2/2)', tag: 'YOUR EXPERT', page: 'Livret p. 21–22',
    headers: ['', 'WORD', 'FRANÇAIS', 'ON THE BOARD'],
    colW: [0.9, 2.6, 3.4, 5.23], boldCol: 1,
    rows: [
      ['LAW', 'negligence', 'la négligence (faute)', 'We have not raised **negligence**.'],
      ['LAW', 'force majeure', 'la force majeure', 'We have reviewed the **force majeure** clause.'],
      ['LAW', 'to notify', 'notifier, aviser officiellement', 'We have **notified** the landlord in writing.'],
      ['LAW', 'damages', 'des dommages-intérêts', '≠ //damage// (des dégâts) !'],
      ['LAW', 'a breach of contract', 'une violation du contrat', 'No **breach of contract** has been established.'],
      ['RE', 'a burst pipe', 'une canalisation éclatée', 'We have not confirmed a **burst pipe** yet.'],
      ['RE', 'structural damage', 'des dommages structurels', 'No **structural damage** has been found so far.'],
      ['RE', 'drainage', 'l’évacuation des eaux', 'The **drainage** has not been checked yet.'],
      ['RE', 'an inventory of fixtures', 'un état des lieux (équipements)', 'The **inventory** has not been updated.'],
      ['RE', 'to make good', 'remettre en état', 'The floor has not been **made good** yet.'],
    ],
  });

  d.steps({
    title: 'The board is not yours alone', tag: 'TEAM CALL', page: 'Livret p. 20',
    intro: 'Groups of four — one representative of each firm. Ten minutes.',
    steps: [
      { h: 'Two lines each', color: 'accent4', lines: ['From your field: one under **DONE**, one under **NOT YET**.'] },
      { h: 'Your word', color: 'accent1', lines: ['Use one word from **your** list — the others must understand it **without a dictionary**.'] },
      { h: 'Agree', color: 'accent2', lines: ['Which single item under **NOT YET** is blocking all the others?'] },
      { h: 'Say why', color: 'accent3', lines: ['//It’s the bottleneck because… Until we have…, we can’t…//'] },
    ],
  });

  d.table({
    title: 'One possible team board', tag: 'TEAM CALL', page: 'Livret p. 20 & 45–46',
    headers: ['FIRM', 'UNDER DONE', 'UNDER NOT YET'],
    colW: [1.2, 5.5, 5.43], boldCol: 0,
    rows: [
      ['ACC', 'We have opened a claim file and made a **provision** of €12,000.', 'We haven’t received a repair estimate yet.'],
      ['IT', 'We have examined the logs and **restored** the service.', 'Nobody has inspected the basement yet.'],
      ['LAW', 'We have **notified** the landlord in writing.', 'The contractor hasn’t signed his statement yet.'],
      ['RE', 'We have taken photographs and closed the second floor.', 'We haven’t updated the **inventory of fixtures** yet.'],
    ],
    foot: 'Blocking item? Most groups choose **the basement inspection** or **the repair estimate** — accept any choice that is **justified**.',
    notes: "Modèle construit à partir des fiches des firmes (p. 45–46). À projeter après le travail de groupe.",
  });

  d.experts({
    title: 'Taboo: explain it without saying it', tag: 'SPEAKING', page: 'Hors livret',
    intro: 'Each expert explains two words of their field. The others guess. Forbidden: the word itself and its French translation.',
    cards: [
      { who: 'ACC', q: 'Make them guess **a provision** and **an insurance premium**.' },
      { who: 'IT', q: 'Make them guess **a backup** and **downtime**.' },
      { who: 'LAW', q: 'Make them guess **negligence** and **to notify**.' },
      { who: 'RE', q: 'Make them guess **a burst pipe** and **to make good**.' },
    ],
  });

  d.closing({
    cliff: 'At 10.18 your phone buzzes. An e-mail from the contractor. Subject line: **“About yesterday evening”**.',
    homework: ['Learn the **7 progress expressions**.', 'Learn **your** field’s 5 words + recognise the other 15.', 'Rewrite your update without looking at the model.'],
    exit: 'Say your update in 30 seconds — with one //already// and one //yet//.',
  });
};
