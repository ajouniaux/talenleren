// Séance 18 — Scene 9: the report, sections 4–5 + one page (livret p. 45–48)
exports.meta = {
  n: 18, slug: 'Scene9_The_report_part2', title: 'The report: sections four and five',
  subtitle: 'No categorical sentences. She counts them!', pages: 'Livret p. 45–48', img: 's9_report', time: '17.00', sceneLabel: 'SCENE 9',
  coverNotes: "Scène 9, seconde partie : sections 4 et 5, fiche de la firme, assemblage en une page (connecteurs) et auto-vérification (p. 48). Attention : « Friday 14 November 2026 » (fiches p. 45–46) tombe un samedi.",
};

const HEX = { ACC: '1F4E79', IT: '0E7C66', LAW: '8B3A2F', RE: 'B8782A' };

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Sections four and five — then **one page, 180–220 words**, ready to send.',
    language: 'Modals in writing (//may / might, can’t, should//) · full English dates · closing formulas · connectors: //At first, Then, However, As a result, Finally//',
    skills: 'Editing for length and cohesion · checking your own text like an assessor',
    agenda: [['Warm-up: categorical → careful', 5], ['Section four — suppose and advise', 15], ['Section five — dates and closings', 10], ['Your firm’s file (p. 45–46)', 10], ['Connectors: make it one page (p. 47)', 10], ['A model report', 10], ['Writing time', 20], ['Before you press send (p. 48)', 10]],
  });

  d.exercise({
    title: 'Warm-up: categorical → careful', tag: 'WARM-UP', page: 'Séance 15',
    items: ['The joint caused the leak. (40 %) → [[The joint might have caused the leak.]]', 'The cabling team did it. (impossible) → [[It can’t have been the cabling team.]]', 'Inspect the whole run. (advice) → [[We should inspect the whole run.]]'],
  });

  d.exercise({
    title: 'Section four — what we suppose, and what we advise', tag: 'YOUR MOVE', page: 'Livret p. 45',
    instr: 'No categorical sentences. She counts them! Three sentences: one //may// or //might//, one //can’t//, one //should//. No names.',
    number: false,
    items: [{ q: 'Write section four.', a: '//The water may have come from joint 4 of the riser, which has been under observation since June. However, the leak can’t have started during the cabling works, since the room was dry at 19.58. We should inspect the whole run, including the basement, before the handover on 1 March.//' }],
    expect: ['**may / might** × 1', '**can’t** × 1', '**should** × 1', 'reuse your group’s **board** (Scene 7)'],
  });

  d.cards({
    title: 'A full English date', tag: 'GRAMMAR', page: 'Livret p. 45–46',
    perRow: 3,
    cards: [
      { h: 'UK', color: 'accent2', f: 'Friday 13 November 2026', lines: ['Write: **13 November 2026**', 'Say: //the thirteenth of November//', 'The weekday is optional — but it must be **right**.'] },
      { h: 'US', color: 'accent1', f: 'Friday, November 13, 2026', lines: ['Say: //November thirteenth//', 'Comma before the year'] },
      { h: 'NEVER IN A COMMITMENT', color: 'accent6', f: '13/11/26', lines: ['**04/05** = 4 May (UK) or April 5 (US)!', 'Write the **month in letters**.'] },
    ],
    foot: { kind: 'tip', text: 'Prepositions: **on** 13 November · **in** November · **by** 13 November (au plus tard) · **until** 13 November (jusqu’à).' },
    notes: "Attention : les fiches des firmes (p. 45–46) indiquent « Friday 14 November 2026 », or le 14 novembre 2026 est un samedi. Proposer « Friday 13 November 2026 » ou « 14 November 2026 » sans le jour (c’est ce que font les modèles de cette présentation).",
  });

  d.exercise({
    title: 'Section five — what happens next', tag: 'YOUR MOVE', page: 'Livret p. 45',
    instr: 'Sign something verifiable. Two sentences: a full English date and a professional closing.',
    number: false,
    items: [{ q: 'Write section five.', a: '//Corven Property Management will send a revised inventory by 14 November 2026. Please do not hesitate to contact me if you need any further information.//' }],
    sideW: 3.6,
    aside: { label: 'CLOSING FORMULAS', color: 'accent3', icon: 'FaEnvelope', lines: ['Please do not hesitate to contact me if …', 'I would be happy to provide …', 'Kind regards, / Yours sincerely,', '+ **your name, role, firm**'] },
  });

  const FILE = {
    ACC: ['senior accountant, Blanchet & Renard', 'claim file opened; €12,000 provision made', 'no repair estimate received; premium not recalculated', 'comparable claim last November, settled at 80 %', 'not to file before the cause is established in writing', 'full costing by Friday 14 November 2026'],
    IT: ['IT service manager, Northline IT Services', 'logs examined; service restored at 9 a.m.', 'basement not inspected; two racks not restarted', 'comparable outage last November, nine hours of downtime', 'moving the server rack out of the technical room', 'full technical report by Friday 14 November 2026'],
    LAW: ['legal counsel, Harwell Legal', 'landlord notified in writing; force majeure clause reviewed', 'contractor’s statement not signed', 'comparable dispute last November, settled amicably', 'not to raise negligence until the cause is established', 'full legal opinion by Friday 14 November 2026'],
    RE: ['letting and property manager, Corven Property Management', 'photographs taken; second floor closed to viewings', 'inventory of fixtures not updated; floor not made good', 'comparable leak last November, same section of pipework', 'inspecting the whole run before the handover', 'revised inventory by Friday 14 November 2026'],
  };
  const LABELS = ['You are', 'Already done', 'Not yet done', 'History', 'You advise', 'You commit to'];
  [['ACC', 'IT'], ['LAW', 'RE']].forEach(([a, b], k) => d.table({
    title: `Your firm’s file (${k + 1}/2)`, tag: 'YOUR EXPERT', page: 'Livret p. 45–46',
    intro: 'Use at least four of these. They are the only facts you have that nobody else in the room has.',
    headers: ['', a, b],
    headColors: ['tx2', HEX[a], HEX[b]],
    colW: [2.0, 5.065, 5.065], boldCol: 0,
    rows: LABELS.map((l, i) => [l, FILE[a][i], FILE[b][i]]),
    notes: "Reproduction des fiches p. 45–46. ⚠ « Friday 14 November 2026 » : le 14 novembre 2026 est un samedi (voir diapositive sur les dates).",
  }));

  d.exercise({
    title: 'From your file to your sentences', tag: '+ EXTRA', page: 'Livret p. 45–46',
    instr: 'Turn each line of the file into a sentence for the report.',
    items: [
      'Already done (ACC): claim file opened; €12,000 provision → [[We have already opened a claim file and made a provision of €12,000.]]',
      'Not yet done (IT): basement not inspected → [[The basement has not been inspected yet.]]',
      'History (LAW): comparable dispute last November → [[A comparable dispute was settled amicably last November.]]',
      'You advise (RE): inspecting the whole run → [[We recommend inspecting the whole run before the handover.]]',
    ],
    traps: ['**recommend + -ing** or **recommend that we inspect** — ✗ //recommend to inspect//', '**advise** + -ing / + somebody to …: //We advise not filing… / We advise you not to file…//'],
  });

  d.steps({
    title: 'Now make it one page: the connectors', tag: 'YOUR MOVE', page: 'Livret p. 47',
    intro: 'Five blocks do not make a report. Join your sections into continuous text, cut the repetitions, add the connectors an assessor expects.',
    steps: [
      { h: 'At first', color: 'accent2', lines: ['= au début (and then it changed)', '**At first**, the room appeared dry.'] },
      { h: 'Then', color: 'accent3', lines: ['= ensuite (sequence)', '**Then**, at 23.41, the alarm went off.'] },
      { h: 'However', color: 'accent6', lines: ['= cependant (contrast)', '**However**, the basement has not been inspected yet.'] },
      { h: 'As a result', color: 'accent1', lines: ['= par conséquent (consequence)', '**As a result**, the floor has been closed.'] },
      { h: 'Finally', color: 'tx2', lines: ['= enfin (last point)', '**Finally**, we will send … by …'] },
    ],
    foot: { kind: 'trap', text: '//At first// (au début) ≠ //First / Firstly// (premièrement) · comma after the connector · //Eventually// = finalement, not «éventuellement».' },
  });

  const MODEL = [
    { t: '##At first##, nothing appeared abnormal: the cabling team left zone 2F at **19.58**, and a final inspection ^^was carried out^^ between 20.04 and 20.19, when the room was reported dry. ##Then##, ^^while^^ the building was empty, the temperature alarm went off at **23.41**, followed by a humidity alarm at 23.44. The cleaning team found water in the technical room when they arrived at 06.47.' },
    { t: 'We have ^^already^^ taken photographs; ##as a result##, the second floor has been closed to viewings. ##However##, the basement has ^^not^^ been inspected ^^yet^^, and the inventory of fixtures has not been updated.' },
    { t: 'The same section of pipework has been under observation ^^since^^ 14 June, and a temporary repair was carried out on 8 November. This is the second time we have had a leak on this riser.' },
    { t: 'The water ^^may^^ have come from joint 4 of the riser. The leak ^^can’t^^ have started during the cabling works, since the room was dry at 19.58. We ^^should^^ inspect the whole run, including the basement, before the handover on 1 March.' },
    { t: '##Finally##, Corven Property Management will send a revised inventory by **14 November 2026**. Please do not hesitate to contact me if you need any further information.' },
    { t: '//Kind regards,//\n//[name], Letting and Property Manager, Corven Property Management//' },
  ];
  [[0, 3], [3, 6]].forEach(([i, j], k) => d.exercise({
    title: `One possible report — Corven (${k + 1}/2)`, tag: 'WRITING', page: 'Livret p. 43–48', mode: 'a',
    number: false, gap: 12, max: 22,
    items: MODEL.slice(i, j),
    sideW: 3.2,
    aside: k === 0
      ? { label: '200 WORDS', color: 'accent3', icon: 'FaCheck', lines: ['**bold** = verifiable times + date', '##orange## = connectors', '^^blue^^ = the grammar she checks', 'no name · no badge · no unproved cause'] }
      : { label: 'SECTIONS 4–5', color: 'accent3', icon: 'FaCheck', lines: ['**may · can’t · should**', 'a **full date** + a closing', 'a name to contact: **yours**', 'Your firm: replace with **your** four facts'] },
    notes: "Modèle de 200 mots (hors signature), rédigé du point de vue de la firme RE. À projeter APRÈS le temps d’écriture, comme référence ; chaque firme adapte avec ses propres faits.",
  }));

  d.checklist({
    title: 'Nine things Helen Marsh will notice in thirty seconds', tag: 'BEFORE YOU PRESS SEND', page: 'Livret p. 48',
    items: ['**180 to 220 words**, continuous text, no bullet points.', '**Two verifiable times**, both taken from Exhibit A.', 'One **while** or **when** joining a background and an event.', 'One **already** and one **not … yet**, correctly placed.', 'One **since** or **for**, plus one dated fact in the past.', 'One **may** or **might**, one **can’t**, one **should**.', '**No person named anywhere. No badge number.**', 'A **full English date** and a closing formula.', '**Four facts** from my own firm’s file.'],
    cols: 2,
  });

  d.cards({
    title: 'Count, cut, check', tag: 'METHOD', page: 'Livret p. 47–48',
    perRow: 3,
    cards: [
      { h: 'TOO LONG? (> 220)', color: 'accent6', lines: ['Cut repeated times.', 'Cut adjectives and opinions.', 'One idea per sentence.'] },
      { h: 'TOO SHORT? (< 180)', color: 'accent1', lines: ['Add one fact from **your firm’s file**.', 'Add the **condition** of your recommendation (//provided that…//).'] },
      { h: 'CHECK THE FLOW', color: 'accent3', lines: ['Each paragraph opens with a **connector**.', 'No bullet points, no headings.', 'Read it aloud: does it sound like **one** text?'] },
    ],
  });

  d.closing({
    cliff: '18.00 — Ferrand Logistics has convened a short committee. **You will present your report without reading it.**',
    homework: ['Send your report (180–220 words) by the deadline your teacher sets.', 'Prepare **five keywords** per section for the oral — no full sentences.', 'Practise saying your two times and your date **aloud**.'],
    exit: 'Count your words. Which section is too long?',
  });
};
