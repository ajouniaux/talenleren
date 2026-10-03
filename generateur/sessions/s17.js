// Séance 17 — Scene 9, 17.00: the report, sections 1–3 (livret p. 42–44)
exports.meta = {
  n: 17, slug: 'Scene9_The_report_part1', title: 'The report: sections one to three',
  subtitle: 'One page. It will be read by someone who is looking for a reason to refuse.', pages: 'Livret p. 42–44', img: 's9_report', time: '17.00', sceneLabel: 'SCENE 9',
  coverNotes: "Scène 9, première partie : la phrase « badge » (ne nommer personne) et les sections 1 à 3 du rapport, dans l’ordre de lecture de l’expert.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'The **badge sentence** and the first **three sections** of your report.',
    language: 'Neutral reporting: passive, impersonal subjects · //while / when// · //already, not … yet// · //since / for// + a dated fact',
    skills: 'Writing for a hostile reader · following the assessor’s reading order',
    agenda: [['Warm-up: closed or open?', 5], ['16.30 — Mark explains (p. 42)', 10], ['Write the badge sentence (p. 43)', 15], ['What the assessor looks for (p. 43)', 5], ['Section one — the night', 15], ['Section two — where we stand', 15], ['Section three — how long', 15], ['Wrap-up', 10]],
  });

  d.exercise({
    title: 'Warm-up: closed or still open?', tag: 'WARM-UP', page: 'Séance 16',
    items: ['The joint [[was inspected]] //(inspect)// on 14 June.', 'It [[has been]] //(be)// faulty since June.', 'This is the second time we [[have had]] //(have)// a leak.', 'A temporary repair [[was carried out]] //(carry out)// on 8 November.'],
  });

  d.scene({
    title: 'The report', tag: 'SCENE', page: 'Livret p. 42', img: 's9_report', time: '17.00', sceneLabel: 'SCENE 9',
    alt: 'The narrator alone at a laptop in an empty meeting room at sunset',
    text: ['Everybody has left the technical room. There is a laptop, a cold coffee, and **eleven hours of notes**.', 'What you write in the next sixty minutes decides whether this incident costs your firm **nothing or a great deal**.'],
    ask: 'Before you write a single word: what must **not** appear in this report?',
  });

  d.dialogue({
    title: '16.30 — Mark answers the question you did not ask', tag: 'BRIEFING', page: 'Livret p. 42',
    lines: [
      ['MARK', '« You want to know why I stopped you writing that badge number. Here it is. Badge 0102 is the site manager. He came in at 20.04 and left at 20.19 — fifteen minutes, which is exactly a last inspection round. »'],
      ['MARK', '« If we put his number in the report, the insurer reads it as **a lead**. Legal reads it as **a name**. And the man himself reads it as **an accusation**, three weeks before he signs off the handover. »'],
      ['MARK', '« So: **the fact stays, the number goes.** Write that somebody carried out a final inspection at 20.04 and that the room was reported dry. That is true, it is verifiable, and it accuses nobody. »'],
    ],
    legend: { label: 'THE RULE', color: 'accent6', icon: 'FaExclamationTriangle', lines: ['**The fact stays**: time, place, action.', '**The number goes**: no name, no badge, no job title.', 'A lead · a name · an accusation = three ways to lose.'] },
  });

  d.exercise({
    title: 'Write the badge sentence', tag: 'YOUR MOVE', page: 'Livret p. 43',
    instr: 'A single sentence. It must contain the time from Exhibit A, the word //inspection//, and no name, no number, no job title.',
    number: false, gap: 8,
    items: [
      { q: '**1.** The sentence for the report.', a: '//A final inspection of zone 2F was carried out between 20.04 and 20.19, and the room was reported dry.//' },
      { q: '**2.** The sentence you would have written this morning, before Mark stopped you.', a: '//The site manager (badge 0102) entered the technical room at 20.04, after the cabling team had left.//' },
      { q: '**3.** Compare with your neighbour: **what exactly did you lose, and what did you gain?**', a: 'Lost: a **name**, a **lead**, a suspect. Gained: a **verifiable, neutral fact** — no accusation, no personal data.' },
    ],
  });

  d.compare({
    title: 'This morning’s sentence, tonight’s sentence', tag: 'YOUR MOVE', page: 'Livret p. 42–43',
    left: { h: 'THIS MORNING — a lead', color: 'accent6', icon: 'FaTimes', items: ['//The site manager (badge 0102) entered the technical room at 20.04.//', 'Names a **job title** and a **badge**', 'Reads as an **accusation**', 'Personal data in a document sent outside'] },
    right: { h: 'TONIGHT — a fact', color: 'accent3', icon: 'FaCheck', items: ['//A final inspection was carried out at 20.04, and the room was reported dry.//', '**Passive**: no doer', 'Time taken from **Exhibit A**', 'True, verifiable, **accuses nobody**'] },
    mid: '→',
  });

  d.steps({
    title: 'Helen Marsh reads in this order', tag: 'WHAT THE ASSESSOR WILL LOOK FOR', page: 'Livret p. 43',
    steps: [
      { h: 'The times', color: 'accent2', lines: ['Two verifiable hours, taken from a **log**, not from a memory.'] },
      { h: 'The position', color: 'accent3', lines: ['What is done, what is **not done yet** — and no gaps.'] },
      { h: 'The history', color: 'accent1', lines: ['How long, and since when. She reads **June**, not last night.'] },
      { h: 'The cause', color: 'accent6', lines: ['Stated as a fact and not proved → she **stops reading** and refuses.'] },
      { h: 'The commitment', color: 'tx2', lines: ['A date, **in full**, and a name to contact — **yours**.'] },
    ],
    foot: { kind: 'keep', label: 'Length', text: '**180 to 220 words**, continuous text. One page. No bullet points, no headings.' },
  });

  d.exercise({
    title: 'Section one — the night', tag: 'YOUR MOVE', page: 'Livret p. 44',
    instr: 'She will read these sentences before all the others. Three or four sentences: what was going on, what happened, at what verifiable time.',
    number: false,
    items: [{ q: 'Write section one.', a: '//On Monday evening, the cabling team left zone 2F at 19.58, and a final inspection was carried out between 20.04 and 20.19; the room was reported dry. While the building was empty, the temperature alarm went off at 23.41, followed by a humidity alarm at 23.44. The cleaning team found water in the technical room when they arrived at 06.47.//' }],
    expect: ['**while** or **when** × 1', '**two times** from Exhibit A', 'past simple for **dated events**', '**no** name, no badge'],
  });

  d.exercise({
    title: 'Section two — where we stand', tag: 'YOUR MOVE', page: 'Livret p. 44',
    instr: 'It’s the 9.40 board, put into sentences. Two or three sentences.',
    number: false,
    items: [{ q: 'Write section two.', a: '//We have already taken photographs and closed the second floor. However, the basement has not been inspected yet, and we have not received a repair estimate yet. Unit 3 of rack A2 has shut down.//' }],
    expect: ['**already** × 1', '**not … yet** × 1', 'one **irregular past participle** (//taken, shut, written…//)', 'adapt to **your firm’s file** (p. 45–46)'],
  });

  d.exercise({
    title: 'Section three — how long', tag: 'YOUR MOVE', page: 'Livret p. 44',
    instr: 'This is where Exhibit C enters the file. One or two sentences.',
    number: false,
    items: [{ q: 'Write section three.', a: '//The same joint has been under observation since 14 June, and a temporary repair was carried out on 8 November. This is the second time we have had a leak on this riser.//' }],
    expect: ['**since** or **for** × 1 (+ present perfect)', 'one **dated fact** in the past simple', 'bonus: //This is the second time we have had…//'],
  });

  d.traps({
    title: 'Five errors that cost a section', tag: 'PITFALL', page: 'Livret p. 43–44',
    rows: [
      ['The alarm has gone off at 23.41.', 'The alarm **went off** at 23.41.', 'a clock time → past simple'],
      ['Since June the joint is faulty.', 'The joint **has been** faulty since June.', 'since → present perfect'],
      ['We didn’t inspect the basement yet.', 'We **have not inspected** the basement **yet**.', 'yet → present perfect'],
      ['The site manager checked the room at 20.04.', 'A final inspection **was carried out** at 20.04.', 'name the fact, not the person'],
      ['While the alarm went off, nobody was there.', '**When** the alarm went off, the building was empty.', 'while + background · when + event'],
    ],
  });

  d.closing({
    cliff: 'Section four is the one she counts: **no categorical sentences**. Section five is the one you sign.',
    homework: ['Finish sections **one to three** (clean copy).', 'Re-read your group’s **four sentences** (Scene 7).', 'Read your firm’s file (p. 45–46): choose **four facts** only you have.'],
    exit: 'Read your section one to your neighbour: did you give **two** verifiable times?',
  });
};
