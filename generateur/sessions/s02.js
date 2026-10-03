// Séance 2 — Scene 1, 06.58 (livret p. 3–4)
exports.meta = {
  n: 2, slug: 'Scene1_The_message', title: 'The message that wakes you',
  subtitle: 'Your phone vibrates. You are not up yet.', pages: 'Livret p. 3–4', img: 's1_phone', time: '06.58', sceneLabel: 'SCENE 1',
  coverNotes: "Scène 1 : écoute du message vocal de Mark Shaw (à passer deux fois). Prévoir l’enregistrement audio. Le livret ne contient pas le script : les corrections de la prise de notes sont à ajuster à votre enregistrement.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: '**Six lines on a notepad** — and the one line that is not proved yet.',
    language: 'Telling the time (a.m. / p.m., 24-hour clock) · prepositions of time (at, by, until, between…) · past simple of the dated fact: //found, went off, heard//',
    skills: 'Listening for specific information · note-taking under pressure · separating a fact from a supposition',
    agenda: [['Warm-up: key words', 10], ['Scene 1: the phone (p. 3)', 5], ['Telling the time', 15], ['Prepositions of time + practice', 10], ['Note-taking toolkit', 5], ['Voicemail × 2 + your six lines', 15], ['Correction · what is not proved (p. 4)', 15], ['Field note: the verifiable time', 10], ['Wrap-up', 5]],
    notes: "Séance centrée sur la compréhension orale et l’heure, compétence indispensable pour tout le dossier (journal d’alarme, rapport).",
  });

  d.exercise({
    title: 'Warm-up: the words of the case', tag: 'WARM-UP', page: 'Séance 1',
    instr: 'Two minutes. English, please — with the article.',
    cols: 2,
    items: ['un locataire → [[a tenant]]', 'une entreprise générale → [[a (general) contractor]]', 'déclarer un sinistre → [[to file a claim]]', 'des preuves → [[evidence]]', 'une fuite → [[a leak]]', 'un expert en sinistres → [[a claims assessor]]', 'rénover → [[to refurbish]]', 'le rez-de-chaussée → [[the ground floor]]'],
    notes: "Réactivation du vocabulaire de la séance 1.",
    notesA: "Rappeler : evidence est indénombrable (✗ an evidence, ✗ evidences) → a piece of evidence.",
  });

  d.scene({
    title: 'The message that wakes you', tag: 'SCENE', page: 'Livret p. 3', img: 's1_phone', time: '06.58', sceneLabel: 'SCENE 1',
    alt: 'A phone on a bedside table at 06.58 showing a missed call and a voicemail from Mark Shaw',
    text: ['It is still dark. Your phone lights up on the table and vibrates twice.', '**One missed call, one voicemail.** The number is Mark Shaw’s.', 'He **never** calls before eight.'],
    ask: 'Mark never calls before eight. What does that tell you — before you even listen?',
    notes: "Faire décrire l’image (heure, objets, message affiché). La bulle donne déjà deux informations : water in the technical room / a quarter past eight. Anticipation : quelque chose de grave s’est produit.",
  });

  d.cards({
    title: 'Telling the time', tag: 'GRAMMAR', page: 'Livret p. 3–4 · hors livret',
    perRow: 4,
    cards: [
      { h: '06.58', color: 'tx2', f: 'six fifty-eight', lines: ['= two minutes **to** seven', '**a.m.** = between midnight and noon'] },
      { h: '08.15', color: 'accent2', f: 'eight fifteen', lines: ['= a quarter **past** eight', '//Can you be here for a quarter past eight?//'] },
      { h: '23.41', color: 'accent1', f: 'eleven forty-one p.m.', lines: ['in a log: //twenty-three forty-one//', '**p.m.** = between noon and midnight'] },
      { h: '19.58', color: 'accent6', f: 'seven fifty-eight p.m.', lines: ['= two minutes to eight', '≠ //at eight//: in a report, two minutes count!'] },
    ],
    foot: { kind: 'trap', text: '//8h15// ✗ → **8.15** (UK) / **8:15** (US) · //o’clock// only for full hours (//at eight o’clock//) · //12 a.m.// is ambiguous: write **midnight** or **noon**.' },
    notes: "Faire répéter chaque heure de deux façons. Les logs (Exhibit A) utilisent le format 24 h : savoir lire « twenty-three forty-one ».",
  });

  d.table({
    title: 'Prepositions of time', tag: 'GRAMMAR', page: 'Livret p. 3–9',
    headers: ['PREPOSITION', 'FRANÇAIS', 'IN THE FILE'],
    colW: [2.6, 3.2, 6.33], boldCol: 0,
    rows: [
      ['at + a time', 'à (heure précise)', 'The cleaners found the water **at** 6.50.'],
      ['by + a deadline', 'au plus tard, d’ici', 'I need a timeline on this board **by** nine.'],
      ['until + an end', 'jusqu’à (ça continue)', 'The contractor’s team was working here **until** eight.'],
      ['before / after', 'avant / après', 'He never calls **before** eight.'],
      ['between … and …', 'entre … et …', 'Water ran **between** 23.41 **and** 06.47.'],
      ['for + a duration', 'pendant', 'Mark spoke **for** 41 seconds.'],
      ['in + a delay', 'dans (d’ici)', 'I can be there **in** twenty minutes.'],
    ],
    foot: '⚠ //jusqu’à 9 h// : **until** nine (I’ll wait until nine) ≠ **by** nine (date limite : I need it by nine).',
    notes: "Insister sur by / until, confusion classique des francophones, et sur for (pendant) — le « depuis » viendra en scène 6.",
  });

  d.exercise({
    title: 'Say it, write it', tag: '+ EXTRA', page: 'Hors livret',
    restart: true,
    columns: [
      [{ h: 'A · Say each time in two ways.' }, '06.47 → [[six forty-seven / thirteen minutes to seven]]', '20.04 → [[eight-oh-four p.m. / four minutes past eight]]', '02.16 → [[two sixteen a.m. / sixteen minutes past two]]', '11.30 → [[eleven thirty / half past eleven]]', '00.00 → [[midnight]]'],
      [{ h: 'B · at, by, until or between?' }, 'Mark wants the timeline [[by]] nine.', 'The cabling team worked [[until]] eight.', 'The alarm went off [[at]] 23.41.', 'The water ran [[between]] 23.41 and 06.47.', 'Can you be here [[for]] a quarter past eight?'],
    ],
    notes: "Oral d’abord (A), puis écrit (B). Pour B5 : « be here for + heure » = être là pour (une heure fixée) — tournure britannique de la bulle p. 3.",
  });

  d.cards({
    title: 'Note-taking toolkit', tag: 'METHOD', page: 'Livret p. 3',
    perRow: 3,
    cards: [
      { h: 'KEEP ONLY', color: 'accent2', lines: ['**Who? What? Where? When?**', 'Names, places, **times in digits**', 'No articles, no full sentences'] },
      { h: 'ABBREVIATE', color: 'accent1', lines: ['**@** = at · **b4** = before · **w/** = with', '**2F** = second floor · **tech rm**', '**→** = causes / leads to · **≠** · **≈**'] },
      { h: 'LEAVE A GAP', color: 'accent6', lines: ['Write **?** when you are not sure', 'Never invent a time or a name', 'Check it in the 2nd listening'] },
    ],
    foot: { kind: 'tip', text: 'Write the time **as you hear it**, then convert: //a quarter past eight// → **8.15**.' },
    notes: "Donner 1 minute pour préparer le carnet : six lignes numérotées, comme p. 3–4.",
  });

  d.voicemail({
    title: 'Voicemail — listen twice', tag: 'VOICEMAIL', page: 'Livret p. 3',
    who: 'Mark Shaw — 06.58',
    meta: 'Voicemail · 41 seconds · played twice. Only take notes on the second listening.',
    steps: [
      { icon: 'FaHeadphones', h: 'Listening 1', t: 'Pens down. Listen for the **situation**: who, what, where. No notes.' },
      { icon: 'FaPenNib', h: 'Listening 2', color: 'accent1', t: 'Notes only now: keywords, numbers, times. Mark speaks fast — **there is no third listening**.' },
      { icon: 'FaUsers', h: 'After', color: 'accent3', t: 'Two minutes to complete your six lines. Compare with a neighbour: **same times?**' },
    ],
    notes: "Passer l’enregistrement deux fois, sans pause. Ne pas répéter une 3e fois (consigne du livret : « You only have a notepad and a pen. Just like a real wake-up. »).",
  });

  d.exercise({
    title: 'Take the message down', tag: 'YOUR MOVE', page: 'Livret p. 3–4',
    instr: 'What you do not note down now will be lost for the whole day.',
    items: [
      { q: 'Who called and when?', a: 'Mark Shaw — at 06.58 (voicemail, 41 seconds).' },
      { q: 'What has happened?', a: 'There is water in the technical room — a leak.' },
      { q: 'Where exactly?', a: 'In the technical room, on the second floor of Atlas House.' },
      { q: 'Who found it and at what time?', a: 'The cleaners — at 6.50 a.m.' },
      { q: 'What does Mark want you to bring?', a: '(as said in the recording — check your audio script)' },
      { q: 'Where and when must you be?', a: 'At Atlas House, in the technical room, at 8.15 (a quarter past eight).' },
    ],
    gap: 4, qGap: 12,
    expect: ['Six short lines: **keywords**, not sentences.', 'Every time **in digits**.', 'A **?** where you are not sure.'],
    notes: "Laisser les élèves comparer avant de projeter la correction.",
    notesA: "Lignes 1–4 et 6 vérifiables dans le livret (bulle p. 3, field note p. 4, scène 2). Ligne 5 : dépend de votre enregistrement — compléter la diapositive si besoin. Typographie : en anglais, pas d’espace avant « ? » (le livret en met une).",
  });

  d.exercise({
    title: 'One question before you leave the house', tag: 'YOUR MOVE', page: 'Livret p. 4',
    instr: 'Mark said one thing that is not a fact but a supposition. A report that confuses the two is rejected.',
    items: [
      { q: 'Read your six lines again. **Which one is not yet proved?** Underline it.', a: 'The line about the **cause** or the **duration** of the leak (e.g. //a pipe has burst// / //it has been running all night//): Mark **supposes** it — nobody has checked yet.' },
      { q: 'In one line: **what would be needed to prove it?**', a: 'A **verifiable source**: the alarm log (times), photographs of the ceiling, a technician’s report.' },
      { q: 'Write the honest sentence.', a: '//We do not know yet whether …; the alarm log and an inspection would show it.//' },
    ],
    img: 's1_mark', imgH: 2.45,
    expect: ['A **fact** has a source.', 'A **supposition** needs proof.'],
    notes: "Le script n’est pas dans le livret : identifier avec les élèves la phrase de Mark qui relève de la supposition (marqueurs : probably, I think, it looks like, must have…).",
    notesA: "Réponse à adapter à l’enregistrement. Le livret donne une piste à la fin de la scène 1 : ce que Mark n’a pas dit, c’est « how long the water had been running ».",
  });

  d.compare({
    title: 'The first thing an assessor looks for', tag: 'FIELD NOTE', page: 'Livret p. 4',
    intro: 'An insurance assessor reads a report looking for a **verifiable time**. Not a remembered time.',
    left: { h: 'REMEMBERED — rejected', color: 'accent6', icon: 'FaTimes', items: ['//around eleven//', '//just before eight//', '//late last night//', 'a time somebody **thinks** he saw'] },
    right: { h: 'VERIFIABLE — accepted', color: 'accent3', icon: 'FaCheck', items: ['taken from an **alarm log**', 'taken from a **camera** (CCTV)', 'taken from a **ticket** / a badge record', 'a **timestamped** photograph'] },
    mid: '→',
    foot: { kind: 'keep', label: 'À retenir', text: 'In English, that time is always written in the **past simple**, the form of the dated fact: //the cleaners **found** the water at 6.50 · the alarm **went off** at 11.40//.' },
    notes: "Lien avec la séance 1 : fact = source. Préparer la scène 3 où le journal d’alarme contredira les heures « de mémoire ».",
  });

  d.cards({
    title: 'Three verbs that will come back all day', tag: 'FIELD NOTE', page: 'Livret p. 4',
    perRow: 3,
    cards: [
      { h: 'FIND → FOUND', color: 'accent2', f: '/faʊnd/', lines: ['The cleaners **found** the water at 6.50.', 'trouver, découvrir'] },
      { h: 'GO OFF → WENT OFF', color: 'accent1', f: '/went ɒf/', lines: ['The alarm **went off** at 11.40 p.m.', 'se déclencher (alarme)'] },
      { h: 'HEAR → HEARD', color: 'accent4', f: '/hɜːd/', lines: ['**Nobody heard** it.', 'entendre — ≠ //heart// /hɑːt/'] },
    ],
    foot: { kind: 'trap', text: 'Une heure précise → **past simple**, jamais le present perfect : ✗ //The cleaners **have found** the water at 6.50.// → ✓ //found//.' },
    notes: "Le livret : « Note them down now — you will write them before this evening. » Faire écrire les 3 verbes dans le carnet.",
  });

  d.exercise({
    title: 'Remembered or verifiable?', tag: '+ EXTRA', page: 'Hors livret',
    restart: true,
    columns: [
      [{ h: 'A · Remembered (R) or verifiable (V)?' }, 'The alarm went off **around eleven**. → [[R]]', 'Badge 0771 entered at **06:47**. → [[V — badge log]]', 'Unit 3 shut down at **02:16** (server log). → [[V]]', 'It happened **late last night**. → [[R — vague]]', 'Mark called at **06.58** (phone log). → [[V]]', 'The team left **just before eight**. → [[R]]'],
      [{ h: 'B · Write the dated fact.' }, 'cleaners / find / water / 6.50 → [[The cleaners found the water at 6.50.]]', 'alarm / go off / 11.40 p.m. → [[The alarm went off at 11.40 p.m.]]', 'nobody / hear / it → [[Nobody heard it.]]'],
    ],
    notes: "A : repérage ; B : production. Exiger la majuscule, le point et l’heure.",
  });

  d.closing({
    cliff: 'Mark is waiting for you at a quarter past eight. Before you walk into the technical room, check your verbs: **every line of your report will stand on them**.',
    homework: ['Say any time **in two ways** (practise with Exhibit-style times: 19.58, 20.04, 23.41, 02.16).', 'Learn: **find → found · go off → went off · hear → heard**.', 'Read **p. 5** (the past simple poster).', 'Revise: go, see, have, come, know, begin, leave, shut.'],
    exit: 'Say **06.58** and **23.41** in two ways — and name one **verifiable** source for a time.',
    notes: "Ticket de sortie à l’oral, deux ou trois élèves.",
  });
};
