// Séance 16 — Scene 8, 15.40 (livret p. 38–41)
exports.meta = {
  n: 16, slug: 'Scene8_The_sheet_in_the_basement', title: 'The sheet in the basement',
  subtitle: 'This document changes the question — and therefore the tenses of your report.', pages: 'Livret p. 38–41', img: 's8_sheet', time: '15.40', sceneLabel: 'SCENE 8',
  coverNotes: "Scène 8 : l’Exhibit C (registre de maintenance préventive) montre que le défaut du joint 4 est connu depuis juin. Grammaire : fermé et daté (prétérit) vs encore ouvert (present perfect), passif, « This is the second time we have had… ».",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: '**Four sentences rewritten** in the light of Exhibit C — and a group decision: do we attach it?',
    language: 'Closed & dated (past simple) vs still open (present perfect) · **since** + present perfect · the passive (//was inspected, has been carried out//) · //This is the second time we have had…// · //provided that//',
    skills: 'Re-reading your own draft against new evidence · arguing for a decision with a condition',
    agenda: [['Warm-up: idioms', 5], ['Scene 8 + Exhibit C (p. 38)', 10], ['Read it before Mark does (p. 39)', 20], ['Field note: closed or still open? (p. 40)', 10], ['Dry run A–C (p. 40)', 15], ['Rewrite your noon draft (p. 41)', 10], ['Team call: attach Exhibit C? (p. 41)', 15], ['Wrap-up', 5]],
  });

  d.exercise({
    title: 'Warm-up: careful idioms', tag: 'WARM-UP', page: 'Séance 15',
    items: ['conclure trop vite → to [[jump to conclusions]]', 'écarter une hypothèse → to [[rule out]]', 'par précaution → to be [[on the safe side]]', 'une hypothèse peu probable → [[a long shot]]', 'une hypothèse fondée → [[an educated guess]]'],
  });

  d.scene({
    title: 'The sheet in the basement', tag: 'SCENE', page: 'Livret p. 38', img: 's8_sheet', time: '15.40', sceneLabel: 'SCENE 8',
    alt: 'Iris holds up a wet sheet in a plastic sleeve; Mark: “That is dated June.”',
    text: ['The paper is a **maintenance record**. It has been pinned to a board in the basement **for months**, behind a cupboard nobody moves.', 'The ink has run at the bottom, but the top is perfectly legible.', '//“That is dated June.”//'],
    ask: 'Why does a date in **June** change the tenses of your report?',
  });

  d.exhibit({
    title: 'Exhibit C — the maintenance record', tag: 'EXHIBIT', page: 'Livret p. 38',
    label: 'EXHIBIT C', docTitle: 'Preventive maintenance record — Atlas House — 2F',
    lines: [
      ['14 June', 'Riser 2F — visual inspection — //minor seepage at joint 4 — MONITOR//'],
      ['19 July', 'Riser 2F — joint 4 — //seepage confirmed — repair recommended — quotation requested//'],
      ['06 September', 'Riser 2F — joint 4 — //no change — quotation not received — MONITOR//'],
      ['08 November', 'Riser 2F — joint 4 — //temporary repair carried out — permanent repair still required//'],
      ['Signed:', 'technical services — //no further entry after 08 November//'],
    ],
    gap: 12,
    side: { label: 'MAINTENANCE WORDS', color: 'accent3', icon: 'FaBook', lines: ['**seepage** = un suintement', '**a riser** = une colonne montante', '**a joint** = un raccord', '**to monitor** = surveiller', '**a quotation** = un devis', '**temporary ≠ permanent** repair'] },
  });

  d.exercise({
    title: 'Read it before Mark does — Q1 · Q2 · Q3', tag: 'YOUR MOVE', page: 'Livret p. 39',
    instr: 'You have a forty-second head start on everyone. Use it.',
    number: false, gap: 8,
    items: [
      { q: '**1.** When was the problem first written down and by whom?', a: 'On **14 June**, by **technical services** (visual inspection: minor seepage at joint 4).' },
      { q: '**2.** What was recommended in July, and what happened to that recommendation?', a: 'A **repair** was recommended and a **quotation requested** (19 July). The quotation **was never received** (6 Sept.); only a **temporary** repair was carried out, on 8 November.' },
      { q: '**3.** The November entry uses two words that matter: //temporary// and //still required//. What do they establish, taken together?', a: 'That the defect was **known** and **never permanently fixed**: on 8 November the problem was **still open**.' },
    ],
  });

  d.exercise({
    title: 'Read it before Mark does — Q4 · Q5', tag: 'YOUR MOVE', page: 'Livret p. 39',
    number: false, gap: 8,
    items: [
      { q: '**4.** This morning, Samuel said the trouble had lasted “since the summer”. **Does Exhibit C confirm him, correct him, or extend him?**', a: 'It **extends** him (and confirms him): the trouble is documented **since 14 June**, in writing — not just remembered.' },
      { q: '**5.** One line of this record is worse for us than the badge entry in Exhibit A. **Which one, and why?**', a: '**08 November** — //permanent repair still required// (+ //no further entry//): the defect was **known and left unrepaired**. An insurer can call that a **maintenance failure**, not a sudden accident — and it points at an organisation, in writing.' },
    ],
    traps: ['Also defensible: **19 July** (repair recommended, never done) or **06 September** (quotation not received — MONITOR).'],
  });

  d.picture({
    title: 'The document that changes your tenses', tag: 'FIELD NOTE', page: 'Livret p. 40', img: 's8_tenses',
    capLabel: 'ON THE BOARD', capColor: 'accent2',
    caption: ['**CLOSED & DATED → PAST SIMPLE**: //The joint **was inspected** on 14 June. A temporary repair **was carried out** in November.//', '**STILL OPEN → PRESENT PERFECT**: //The joint **has been** faulty since June. A permanent repair **has still not been carried out**.//', '**SINCE JUNE** = always **have been**: ✗ //the joint is faulty since June//'],
  });

  d.timeline({
    title: 'Closed and dated, or still open?', tag: 'GRAMMAR', page: 'Livret p. 40',
    axis: { from: 5.9, to: 12.0, ticks: [[6, 'June'], [7, 'July'], [8, 'August'], [9, 'September'], [10, 'October'], [11, 'November']] },
    now: 11.75,
    bars: [{ from: 6.45, to: 11.75, label: 'the joint **has been** faulty **since June** — still open', color: 'accent6', row: 0, open: true }],
    points: [
      { at: 6.45, label: '14 June: **was inspected**', row: 0, w: 2.1 },
      { at: 7.6, label: '19 July: repair **was recommended**', row: 1, w: 2.5 },
      { at: 9.2, label: '6 Sept.: quotation **was not received**', row: 0, w: 2.6 },
      { at: 10.25, label: '8 Nov.: temporary repair **was carried out**', row: 1, w: 3.0 },
    ],
    legend: [['dot', 'accent1', 'closed & dated → **past simple**'], ['bar', 'accent6', 'still open, up to now → **present perfect**']],
  });

  d.cards({
    title: 'The passive: the report’s favourite form', tag: 'GRAMMAR', page: 'Livret p. 38–40',
    perRow: 3,
    cards: [
      { h: 'FORM', color: 'tx2', f: 'be + past participle', lines: ['The joint **was inspected**. (past)', 'A repair **has been carried out**. (present perfect)', 'A repair **is required**. (present)'] },
      { h: 'WHY IN A REPORT', color: 'accent3', lines: ['The doer is **unknown** or **unimportant**.', 'It **names nobody**: //A final inspection was carried out at 20.04.//'] },
      { h: 'BY + AGENT', color: 'accent1', lines: ['Only if it matters: //The record was signed **by technical services**.//', 'Usually left out in a report.'] },
    ],
    foot: { kind: 'trap', text: '//On a réparé le joint// → The joint **was repaired** (✗ //One repaired the joint//). //On nous a dit// → **We were told**.' },
  });

  d.exercise({
    title: 'Three minutes before you touch your draft', tag: 'DRY RUN', page: 'Livret p. 40',
    instr: 'A · Choose the form, then write in three words why.',
    items: [
      'The joint <<was inspected>> / {{has been inspected}} on 14 June. ++→ a date++',
      'A permanent repair {{was never carried out}} / <<has never been carried out>>. ++→ still open++',
      'We {{had}} / <<have had>> two failures on this riser this year. ++→ year not finished++',
      'The temporary repair <<held>> / {{has held}} in November. ++→ a date++',
    ],
  });

  d.exercise({
    title: 'New marker, new tense', tag: 'DRY RUN', page: 'Livret p. 40',
    number: false,
    items: [
      { h: 'B · Rewrite with the new marker.' },
      'We had a problem with this joint in November. **(since June)** → [[We have had a problem with this joint since June.]]',
      'Nobody repaired it permanently. **(and it is still not repaired)** → [[Nobody has repaired it permanently.]]',
      { h: 'C · The structure that will win you a mark.' },
      'This is the second time we [[have had]] //(have)// a failure on riser 2F.',
      'It is the worst leak I [[have ever seen]] //(ever / see)// in this building.',
    ],
  });

  d.cards({
    title: '“This is the second time we have had…”', tag: 'GRAMMAR', page: 'Livret p. 40–41',
    perRow: 2,
    cards: [
      { h: 'THE FIRST / SECOND TIME', color: 'accent2', f: 'This is the second time + present perfect', lines: ['This is the second time we **have had** a failure.', '✗ //we had// · ✗ //we have//', 'It is the first time I **have seen** this.'] },
      { h: 'THE WORST … EVER', color: 'accent1', f: 'the worst … I have ever + participle', lines: ['It is the **worst** leak I **have ever seen**.', 'It is the **most serious** incident we **have had** this year.'] },
    ],
    foot: { kind: 'trap', text: '//C’est la première fois que je vois ça// → This is the first time I **have seen** this (✗ //I see//).' },
  });

  d.exercise({
    title: 'Rewrite what you had already written', tag: 'YOUR MOVE', page: 'Livret p. 41',
    instr: 'Four sentences from your noon draft have become incorrect. Correct them before 5 p.m.',
    items: [
      { q: 'The pipe failed last night. → //(with Exhibit C in front of you)//', a: 'The joint, which **has been** under observation **since 14 June**, failed last night.' },
      { q: 'We had a problem with this joint in November. → //(since June)//', a: 'We **have had** a problem with this joint **since June**.' },
      { q: 'Nobody repaired the joint permanently. → //(and it is still not repaired)//', a: 'The joint **has not been** permanently repaired.' },
      { q: 'This is the first incident on riser 2F. → //(second time, this year)//', a: 'This is the **second time** we **have had** an incident on riser 2F this year.' },
    ],
  });

  d.experts({
    title: 'Team call: do we attach Exhibit C tonight?', tag: 'TEAM CALL', page: 'Livret p. 41',
    intro: 'Exhibit C protects you against one accusation and exposes you to another. Argue for 90 seconds from your field.',
    cards: [
      { who: 'ACC', q: 'What does Exhibit C protect you against — and expose you to?', a: '**Protects:** the problem was monitored. **Exposes:** a known defect may reduce the payout. //We should attach it, provided that the provision is reviewed.//' },
      { who: 'IT', q: 'What does Exhibit C protect you against — and expose you to?', a: '**Protects:** the IT equipment did not cause the leak. **Exposes:** the rack sat under a known leak. //…provided that we recommend moving the rack.//' },
      { who: 'LAW', q: 'What does Exhibit C protect you against — and expose you to?', a: '**Protects:** against the charge of hiding evidence. **Exposes:** documented knowledge = possible negligence. //…provided that legal reviews it first.//' },
      { who: 'RE', q: 'What does Exhibit C protect you against — and expose you to?', a: '**Protects:** inspections did take place. **Exposes:** the permanent repair was never done. //…provided that we commit to inspecting the whole run.//' },
    ],
    notesA: "Pistes d’arguments : chaque groupe rédige ensuite UNE phrase de décision et UNE phrase de condition.",
  });

  d.cards({
    title: 'Decide — with a condition', tag: 'GRAMMAR', page: 'Livret p. 41',
    intro: 'The group writes **one sentence** giving its decision and **one sentence** giving the condition attached to it.',
    perRow: 4,
    cards: [
      { h: 'PROVIDED THAT', color: 'accent3', lines: ['We should attach it, **provided that** legal reviews it first.'] },
      { h: 'AS LONG AS', color: 'accent2', lines: ['… **as long as** the report states only dated facts.'] },
      { h: 'UNLESS', color: 'accent6', lines: ['We should attach it **unless** the landlord objects in writing.'] },
      { h: 'ON CONDITION THAT', color: 'accent1', lines: ['… **on condition that** we recommend a full inspection.'] },
    ],
    foot: { kind: 'trap', text: 'After //provided that, as long as, unless//: **present tense**, not //will//: ✗ //provided that legal will review it//.' },
  });

  d.closing({
    cliff: 'Mark reads Exhibit C twice. Then he looks at the clock: 16.05. **“Right,” he says. “You have an hour.”**',
    homework: ['Learn: closed & dated → **past simple** · still open → **present perfect**.', 'Learn the passive in three tenses: **was / has been / is** + participle.', 'Bring your firm’s file (p. 45–46) and all your notes: you write the report next session.'],
    exit: 'Complete: //This is the second time we …// and //The joint has been … since …//',
  });
};
