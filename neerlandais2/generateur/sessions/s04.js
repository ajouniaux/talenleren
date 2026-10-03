// Séance 4 — Twee gevoelens, één leugen (Séquence 1.2, 2/3) — Livret p. 24–26 + A2-06 En · maar · want p. 73 + V11 Gevoelens p. 88
const PURPLE = '6E4A9E';

exports.meta = {
  n: 4, slug: 'Twee_gevoelens_een_leugen', title: 'Twee gevoelens, één leugen',
  subtitle: 'Dire comment on se sent et pourquoi — au tutoiement et au vouvoiement',
  pages: 'Livret p. 24–26 · 73 · 88', img: 'u_of_je', time: '1.2', sceneLabel: 'SÉQUENCE',
  block: 'Section 1 · Premiers pas en néerlandais',
  coverNotes: "Couche 2 de la séquence 1.2 : production structurée avec le zinnenbouwer ouvert (1.2.3 à 1.2.6). Les étudiants disent comment ils se sentent (Ik ben / Ik voel me + nuance + adjectif + want…), puis jouent une conversation au tutoiement et au vouvoiement. Vocabulaire 11 (Gevoelens, p. 88) et fiche de grammaire 06 (En · maar · want, p. 73).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Dire **comment je me sens et pourquoi** (//Ik voel me een beetje moe, want…//), choisir entre **je** et **u**, relier deux idées avec **en, maar, want, of, dus**.',
    language: '//Ik ben / Ik voel me// + nuance + adjectif + //want…// — //Hoe gaat het met je / met u?// — //blij · moe · bang · zenuwachtig · trots//',
    skills: 'Écrire des phrases vraies pour soi · deviner un mensonge · jouer une conversation au tutoiement puis au vouvoiement',
    agenda: [['Échauffement : je ou u ?', 5], ['Gevoelens : imagier + bonus', 15], ['1.2.3 Twee gevoelens, één leugen', 10], ['1.2.4 Verander één ding', 10], ['1.2.5 Zinnendief', 10], ['1.2.6 Twee gesprekken (je / u)', 20], ['En · maar · want (fiche 06)', 15], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. Le livret prévoit 60 minutes pour 1.2.3 à 1.2.6 ; on gagne du temps sur 1.2.4 et 1.2.5 (10 min chacun). Le vocabulaire des émotions (p. 88) est placé en début de séance : il nourrit toutes les productions de la couche 2.",
  });

  d.exercise({
    title: 'Échauffement : Hoe gaat het?', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 3', mode: 'a',
    instr: 'Il est **10 h 30**. Saluez, demandez comment ça va, répondez avec une **nuance**. ① à votre voisin (**je**) ② au professeur (**u**).',
    number: false, gap: 10,
    items: [
      { h: '① Avec votre voisin' },
      { t: '«Goedemorgen, Tom! Hoe gaat het met je?» — «Goed, dank je. En met jou?»' },
      { h: '② Avec le professeur' },
      { t: '«Goedemorgen, mevrouw! Hoe gaat het met u?» — «Prima, dank u. En met u?»' },
      { t: '«Het gaat wel. Ik ben een beetje moe.»' },
      { h: 'Et l’heure ?' },
      { t: '«Hoe laat is het?» — «Het is half elf.»' },
    ],
    expect: ['Salutation selon l’**heure**.', '**je** ou **u** selon la personne.', 'Une **nuance** : //een beetje, vrij, heel…//', 'Toute la classe · 5 min'],
    notes: "Rappel de la séance 3 : degrés de formalité (p. 21), zinnenbouwer 1.2 et l’heure (fiche 07). Faire saluer le professeur (vouvoiement) par deux ou trois étudiants, puis les voisins entre eux. Vérifier les devoirs : un mot composé par étudiant (EXTRA Opdracht p. 17).",
  });

  d.imagier({
    title: 'Gevoelens — sentiments et opinions', tag: 'WOORDENSCHAT', page: 'Livret p. 88',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v11_01', nl: 'blij', art: null, fr: 'content, heureux' },
      { img: 'v11_02', nl: 'verdrietig', art: null, fr: 'triste' },
      { img: 'v11_03', nl: 'boos', art: null, fr: 'fâché' },
      { img: 'v11_04', nl: 'bang', art: null, fr: 'effrayé (avoir peur)' },
      { img: 'v11_05', nl: 'moe', art: null, fr: 'fatigué' },
      { img: 'v11_06', nl: 'verrast', art: null, fr: 'surpris' },
      { img: 'v11_07', nl: 'verliefd', art: null, fr: 'amoureux' },
      { img: 'v11_08', nl: 'zenuwachtig', art: null, fr: 'nerveux' },
      { img: 'v11_09', nl: 'zich vervelen', art: null, fr: 's’ennuyer' },
      { img: 'v11_10', nl: 'trots', art: null, fr: 'fier' },
      { img: 'v11_11', nl: 'rustig', art: null, fr: 'calme' },
      { img: 'v11_12', nl: 'ziek', art: null, fr: 'malade' },
      { img: 'v11_13', nl: 'Ik vind het leuk.', art: null, fr: 'J’aime bien.' },
      { img: 'v11_14', nl: 'Ik vind het niet leuk.', art: null, fr: 'Je n’aime pas.' },
      { img: 'v11_15', nl: 'Ik weet het niet.', art: null, fr: 'Je ne sais pas.' },
    ],
    notes: "Quiz « Hoe voelt hij zich? » : montrer un numéro, la classe répond par une phrase (Hij is moe. / Ze is bang.). Vocabulaire 11, p. 88. Plusieurs adjectifs sont déjà dans le zinnenbouwer 1.2 (moe, blij, bang, nerveus).",
    notesA: "Pas de nom dans cette liste : des adjectifs (sans article), un verbe réfléchi (zich vervelen : ik verveel me, hij verveelt zich) et trois expressions. Synonymes : zenuwachtig = nerveus ; blij ≈ gelukkig (plus fort). Si un étudiant demande les noms : het verdriet, de angst, de liefde, de trots, de rust, de ziekte.",
  });

  d.exercise({
    title: 'Hoe voelen ze zich?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Lisez la situation et trouvez l’émotion (vocabulaire p. 88). Puis redites la phrase avec **want**.',
    cols: 2, gap: 14,
    items: [
      'Emma heeft 18/20 voor haar examen. → Ze is [[trots]].',
      'Pieter heeft morgen een presentatie. → Hij is [[zenuwachtig]].',
      'Sarah heeft griep. → Ze is [[ziek]].',
      'Er is een grote spin in de klas! → Emma is [[bang]].',
      'Pieter werkt tot middernacht. → Hij is [[moe]].',
      'Het is zondag en Pieter heeft niets te doen. → Hij [[verveelt zich]].',
      'Emma krijgt bloemen van Pieter. → Ze is [[verrast]].',
      'Sarah doet yoga. → Ze is heel [[rustig]].',
    ],
    expect: ['Un **adjectif** de la p. 88.', 'Puis avec **want** :', '//Ze is trots, **want** ze heeft 18/20.//'],
    traps: ['//zich vervelen// : //hij **verveelt zich**// (verbe réfléchi).', 'Avec **want** : //Emma is bang, **want** er is een spin.//'],
    notes: "Exercice ajouté : réemploi immédiat du vocabulaire. Oral, un étudiant par phrase, puis la reformulation avec want (« Ze is trots, want ze heeft 18/20 voor haar examen »).",
    notesA: "Item 7 : accepter aussi « blij » ou « verliefd ». Item 1 : accepter « blij ». 18/20 se lit « achttien op twintig ». Griep = la grippe.",
  });

  d.blocks({
    title: 'Phrase-clé : Ik voel me … , want …', tag: 'ZINNENBOUWER', page: 'Livret p. 24',
    intro: 'La formule de la couche 2 : **Ik ben / Ik voel me** + **nuance** + **adjectif** + **want** + raison.',
    rows: [
      { label: 'Ik ben', cells: [{ t: 'Ik', role: 'S' }, { t: 'ben', role: 'V' }, { t: 'een beetje', role: 'M', lab: 'nuance' }, { t: 'moe', role: 'P', lab: 'adjectif' }, { t: ', want', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'heb', role: 'V' }, { t: 'veel werk.', role: 'O', lab: 'raison' }], fr: 'Je suis un peu fatigué(e), car j’ai beaucoup de travail.' },
      { label: 'Ik voel me', cells: [{ t: 'Ik', role: 'S' }, { t: 'voel', role: 'V' }, { t: 'me', role: 'O', lab: 'me' }, { t: 'heel', role: 'M', lab: 'nuance' }, { t: 'blij', role: 'P', lab: 'adjectif' }, { t: ', want', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'heb', role: 'V' }, { t: 'goed nieuws.', role: 'O', lab: 'raison' }], fr: 'Je me sens très content(e), car j’ai une bonne nouvelle.' },
      { label: 'Hij / zij', cells: [{ t: 'Pieter', role: 'S' }, { t: 'voelt', role: 'V' }, { t: 'zich', role: 'O', lab: 'zich' }, { t: 'vrij', role: 'M', lab: 'nuance' }, { t: 'nerveus', role: 'P', lab: 'adjectif' }, { t: ', want', role: 'C' }, { t: 'hij', role: 'S' }, { t: 'heeft', role: 'V' }, { t: 'een presentatie.', role: 'O', lab: 'raison' }], fr: 'Pieter se sent assez nerveux, car il a une présentation.' },
      { label: 'Négation', cells: [{ t: 'Wij', role: 'S' }, { t: 'zijn', role: 'V' }, { t: 'niet zo', role: 'N', lab: 'nuance' }, { t: 'gestrest', role: 'P', lab: 'adjectif' }, { t: ', want', role: 'C' }, { t: 'het', role: 'S' }, { t: 'is', role: 'V' }, { t: 'weekend.', role: 'O', lab: 'raison' }], fr: 'Nous ne sommes pas très stressés, car c’est le week-end.' },
    ],
    foot: { kind: 'trap', text: '//se sentir// = **zich voelen** : ✗ //Ik voel nerveus// → ✓ //Ik voel **me** nerveus//. Après **want**, l’ordre reste normal : //want **ik heb**…//' },
    notes: "Formule donnée par la consigne de 1.2.3 (p. 24), construite avec la famille C du zinnenbouwer 1.2. La nuance se place toujours devant l’adjectif. Le livret appelle cette nuance un « nuanceur » (mot inhabituel en français : on peut dire « intensificateur »). Ik voel me / jij voelt je / hij voelt zich / wij voelen ons : le verbe réfléchi sera étudié à la séance 5 (fiche Zich wassen).",
  });

  d.exercise({
    title: '1.2.3 Twee gevoelens, één leugen', tag: 'COUCHE 2', page: 'Livret p. 24', mode: 'a',
    instr: 'Écrivez **trois phrases** «Ik ben / Ik voel me + nuance + adjectif + want…» : **une est fausse**. Votre voisin devine : «Waar!» ou «Niet waar!». Puis on échange.',
    number: false, gap: 8,
    items: [
      { h: 'Exemple : les trois phrases d’Anna' },
      { t: '**1.** Ik ben een beetje moe, want ik werk ’s nachts.' },
      { t: '**2.** Ik voel me heel blij, want mijn zus komt op bezoek.' },
      { t: '**3.** Ik ben ontzettend gestrest, want ik heb morgen een examen.' },
      { h: 'Le voisin devine' },
      { t: '«Zin één: waar! Zin twee: niet waar!» — «Ja! De leugen is zin nummer twee.»' },
    ],
    expect: ['**3 phrases**, dont **1 mensonge**.', 'Nuance + adjectif du **zinnenbouwer 1.2**.', 'Après **want** : sujet + verbe.', 'Couche 2 · par deux · 10 min'],
    notes: "Production libre : pas de correction unique. Les phrases d’Anna sont des modèles. Passer dans les rangs : vérifier « me » après voel, la place de la nuance et l’ordre après want. Variante : le voisin pose une question pour démasquer le mensonge (« Werk jij ’s nachts? »).",
  });

  d.exercise({
    title: '1.2.4 Verander één ding', tag: 'COUCHE 2', page: 'Livret p. 24–25', mode: 'a',
    instr: 'Vraie pour vous aujourd’hui ? Cochez. Sinon, changez **un seul bloc** (nuance, adjectif ou raison) pour qu’elle devienne vraie.',
    columns: [
      ['☐  Ik ben een beetje moe, want ik heb veel werk.', '☐  Ik voel me ontzettend gestrest.', '☐  Ik voel me vrij nerveus voor de presentatie.', '☐  Ik ben ontzettend gelukkig in België.', '☐  Wij zijn heel druk deze week.', '☐  Ik voel me blij, want ik heb goed nieuws.', '☐  Ik ben vrij druk, want ik heb morgen een examen.'],
      [{ h: 'Exemples : un seul bloc change' }, { t: '**2** → Ik voel me **een beetje** gestrest.' }, { t: '**3** → Ik voel me vrij **ontspannen** voor de presentatie.' }, { t: '**1** → Ik ben een beetje moe, want **ik werk ’s nachts**.' }, { h: 'Vérification' }, { t: 'La nuance et l’adjectif existent-ils dans le **zinnenbouwer 1.2** ?' }, { t: 'Seul · 15 min', style: { italic: true, color: 'accent5' } }],
    ],
    gap: 10,
    notes: "Production structurée, pas de correction unique. Le livret demande que le nouveau bloc existe dans le zinnenbouwer : c’est vérifiable pour la nuance et l’adjectif, mais le zinnenbouwer 1.2 n’a pas de colonne « raison » (want…) : accepter toute raison correcte. Remarque de langue : « Ik ben druk / Wij zijn heel druk » se dit, mais la tournure la plus courante pour « être occupé » est « het druk hebben » : Wij hebben het deze week heel druk.",
  });

  d.steps({
    title: '1.2.5 Zinnendief — le voleur de phrases', tag: 'COUCHE 2', page: 'Livret p. 25',
    intro: 'Par deux · 15 min. Famille **C** du zinnenbouwer 1.2 : **état + raison**.',
    steps: [
      { h: 'Écrire', color: 'accent2', lines: ['Zinnenbouwer **ouvert** : 3 phrases.', '//Ik ben vrij moe, want ik werk veel.//'] },
      { h: 'Fermer', color: 'accent5', lines: ['On **ferme** le zinnenbouwer.', 'Le voisin **lit** ses 3 phrases à voix haute.'] },
      { h: 'Voler', color: 'accent1', lines: ['Vous redites **deux** phrases avec **un mot changé**.', '//Ik ben **heel** moe, want ik werk veel.//'] },
      { h: 'Écrire', color: 'accent3', lines: ['Vous **écrivez** les deux phrases volées.', 'Puis on **change** de rôle.'] },
    ],
    foot: { kind: 'tip', text: 'Changez la **nuance** (//vrij → heel//), l’**adjectif** (//moe → gestrest//) ou la **raison** (//want ik heb een examen//).' },
    notes: "Le « vol » oblige à écouter attentivement la phrase du voisin (zinnenbouwer fermé) puis à la reproduire en la modifiant. Vérifier à l’écrit : la nuance devant l’adjectif, me après voel, l’ordre normal après want.",
  });

  d.table({
    title: '1.2.6 Twee gesprekken : je, puis u', tag: 'COUCHE 2', page: 'Livret p. 26',
    intro: 'Par deux · 20 min. Jouez la conversation **deux fois** en suivant les 6 cases. Gesprek 1 : **je**. Gesprek 2 : **u** (dank u, meneer / mevrouw). Cochez chaque case réalisée.',
    headers: ['STAP', 'GESPREK 1 · JE (modèle)', 'GESPREK 2 · U (modèle)'],
    colW: [3.0, 4.5, 4.63], size: 17,
    rows: [
      ['**1 Groeten** //saluer//', 'A : «Goedemorgen, Lisa!»', 'A : «Goedemiddag, meneer Claes!»'],
      ['**2 Vragen** //demander//', 'A : «Hoe gaat het met je?»', 'A : «Hoe gaat het met u?»'],
      ['**3 Antwoorden + reden**', 'B : «Goed, dank je! Ik voel me heel blij, want ik heb vakantie.»', 'B : «Goed, dank u. Ik ben een beetje moe, want ik werk veel.»'],
      ['**4 Terugvragen** //retourner//', 'B : «En met jou?»', 'B : «En met u?»'],
      ['**5 Antwoorden** //avec nuance//', 'A : «Ook goed, bedankt!»', 'A : «Uitstekend, dank u!»'],
      ['**6 Reageren + afscheid**', 'B : «Fantastisch! Nou, tot straks dan!»', 'B : «Prima! Tot ziens, mevrouw!»'],
    ],
    foot: 'Le livret donne en contrôle les formules attendues pour chaque case : vérifiez après coup.',
    notes: "Modèles possibles, à adapter : les étudiants doivent dire des choses vraies pour eux. A et B échangent les rôles pour la seconde conversation. Dans le vouvoiement, tout passe à u : dank u, En met u?, meneer / mevrouw. Dans le livret, la colonne « Dialoog met « U » » est écrite avec une majuscule ; on écrit « u » en minuscule.",
  });

  d.compare({
    title: 'Tutoiement ou vouvoiement ?', tag: 'À RETENIR', page: 'Livret p. 26',
    left: { h: 'Tutoiement · je / jij', color: 'accent1', icon: 'FaUsers', items: ['//Hoe gaat het met je / jou?//', '//Dank je! · En met jou?//', 'Amis, famille, collègues proches', 'Enfants, jeunes'] },
    right: { h: 'Vouvoiement · u', color: 'accent2', icon: 'FaUserTie', items: ['//Hoe gaat het met u?//', '//Dank u! · En met u? · meneer / mevrouw//', 'Contexte professionnel', 'Personnes âgées, inconnus'] },
    mid: 'je/u',
    foot: { kind: 'trap', text: '**u** garde le **-t** : //Werkt **u** vandaag?// — mais //Werk **jij** vandaag?// Et **u** ne change jamais : //met u, dank u, voor u//.' },
    notes: "Encadré du bas de la p. 26. En Flandre, on vouvoie volontiers les inconnus, les clients et la hiérarchie ; aux Pays-Bas, on passe plus vite au je. En cas de doute, commencer par u : l’autre proposera « Zeg maar je! » (tu peux me tutoyer).",
  });

  d.exercise({
    title: 'Je ou u ? À vous de choisir', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Choisissez la bonne forme selon la personne à qui vous parlez.',
    gap: 12,
    items: [
      'Meneer Janssens, maître de stage : «Hoe gaat het met {{je}} / <<u>>?»',
      'Votre petit frère : «Alles goed? Hoe gaat het met <<je>> / {{u}}?»',
      'Une cliente, au bureau : «{{Heb je}} / <<Hebt u>> een afspraak?»',
      'Un collègue proche, à la pause : «<<Heb je>> / {{Hebt u}} tijd voor een koffie?»',
      'Un inconnu vous aide : «Dank {{je}} / <<u>> wel, meneer!»',
      'Emma à Pieter (tandem) : «{{Bent u}} / <<Ben je>> klaar voor de cursus?»',
    ],
    img: 'twijfel', imgH: 2.2,
    expect: ['**Qui** parle à **qui** ?', 'Âge · relation · contexte.'],
    traps: ['**je** : amis, famille, enfants, collègues proches.', '**u** : travail, inconnus, personnes âgées.', 'Doute ? Prenez **u**. On vous dira : //Zeg maar je!//'],
    notes: "Exercice ajouté. Faire voter la classe (je ou u ?) avant de corriger. Afspraak = rendez-vous.",
    notesA: "Remarquer les verbes : je hebt → heb je (le -t tombe), mais u hebt → hebt u ; jij bent → ben je, mais u bent → bent u. Avec u, on peut aussi dire « heeft u » : les deux formes sont correctes.",
  });

  d.cards({
    title: 'En · maar · want : la coordination', tag: 'GRAMMATICA', page: 'Livret p. 73',
    intro: 'Ces 5 mots relient deux phrases **sans changer l’ordre** : sujet + verbe restent à leur place.',
    perRow: 5, fSize: 19, bSize: 17,
    cards: [
      { h: 'EN', color: 'accent2', f: 'en = et', lines: ['//Ik werk **en** hij studeert.//'] },
      { h: 'MAAR', color: 'accent6', f: 'maar = mais', lines: ['//Het is koud, **maar** het regent niet.//'] },
      { h: 'WANT', color: 'accent3', f: 'want = car', lines: ['//Ik blijf thuis, **want** ik ben ziek.//'] },
      { h: 'OF', color: 'accent1', f: 'of = ou', lines: ['//Koffie **of** thee?//', '//Ben je moe **of** ben je ziek?//'] },
      { h: 'DUS', color: PURPLE, f: 'dus = donc', lines: ['//Het regent, **dus** ik neem een paraplu.//', '= //dus **neem ik**// (aussi correct)'] },
    ],
    foot: { kind: 'keep', text: 'Après **en, maar, want, of** : ordre normal (sujet + verbe). Après **dus** : les deux ordres sont corrects.' },
    notes: "Fiche de grammaire 06 (p. 73). Les étudiants connaissent déjà want et maar (dialogue, textes de 1.2.1). Faire trouver un exemple personnel avec chaque mot.",
  });

  d.blocks({
    title: 'Want of omdat ? Même sens, autre ordre', tag: 'GRAMMATICA', page: 'Livret p. 73',
    intro: '**want** et **omdat** = « car / parce que ». Avec **want**, rien ne bouge ; avec **omdat**, le verbe part **à la fin**.',
    rows: [
      { label: 'want', cells: [{ t: 'Ik blijf thuis,', role: 'X', lab: 'phrase 1' }, { t: 'want', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'ben', role: 'V' }, { t: 'ziek.', role: 'O', lab: 'adjectif' }], fr: 'Je reste à la maison, car je suis malade.' },
      { label: 'omdat', cells: [{ t: 'Ik blijf thuis,', role: 'X', lab: 'phrase 1' }, { t: 'omdat', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'ziek', role: 'O', lab: 'adjectif' }, { t: 'ben.', role: 'F', lab: 'verbe à la fin' }], fr: 'Je reste à la maison parce que je suis malade.' },
      { label: 'maar', cells: [{ t: 'Het is koud,', role: 'X', lab: 'phrase 1' }, { t: 'maar', role: 'C' }, { t: 'het', role: 'S' }, { t: 'regent', role: 'V' }, { t: 'niet.', role: 'N' }], fr: 'Il fait froid, mais il ne pleut pas.' },
      { label: 'dus', cells: [{ t: 'Het regent,', role: 'X', lab: 'phrase 1' }, { t: 'dus', role: 'C' }, { t: 'neem', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'een paraplu.', role: 'O' }], fr: 'Il pleut, donc je prends un parapluie. (= //dus ik neem// : les deux ordres sont corrects)' },
    ],
    foot: { kind: 'trap', text: '« parce que » → réflexe **omdat** : attention, verbe à la **fin** ! ✗ //omdat ik ben ziek// · ✗ //want ik ziek ben//.' },
    notes: "Encadré B de la fiche p. 73. À ce stade, on privilégie want à l’oral (ordre normal, plus facile) ; omdat est à reconnaître et à produire à l’écrit. La place du verbe en fin de phrase avec omdat sera reprise dans les mises en situation (phrase-clé omdat).",
  });

  d.exercise({
    title: 'Oefening : termine la phrase', tag: 'GRAMMATICA', page: 'Livret p. 73',
    instr: 'Terminez la phrase avec les mots entre parenthèses. Attention à l’**ordre** !',
    gap: 16,
    items: ['Zij komt niet, want zij [[is ziek]]. //(zijn / ziek)//', 'Zij komt niet, omdat zij [[ziek is]]. //(zijn / ziek)//', 'Ik drink water, want ik [[heb dorst]]. //(hebben / dorst)//', 'Hij is moe, maar hij [[werkt nog]]. //(werken / nog)//'],
    expect: ['**Conjuguez** le verbe.', '**want / maar** : ordre normal.', '**omdat** : verbe à la fin.', 'Seul · 5 min'],
    traps: ['**want** → //zij **is** ziek// (ordre normal).', '**omdat** → //zij ziek **is**// (verbe à la fin).', 'Conjuguez : //zij is · ik heb · hij werkt//.'],
    notes: "Exercice de la fiche p. 73. Les phrases 1 et 2 ont le même sens : comparer les deux ordres au tableau.",
    notesA: "Dorst hebben = avoir soif (comme honger hebben, avoir faim). Nog = encore.",
  });

  d.exercise({
    title: 'En, maar, want, of ou dus ?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez avec **en · maar · want · of · dus**. Réemploi des émotions (p. 88).',
    cols: 2, gap: 14,
    items: [
      'Emma is blij, [[want]] ze heeft goed nieuws.',
      'Pieter is zenuwachtig, [[maar]] hij is klaar voor de presentatie.',
      'Ben je moe [[of]] ben je ziek?',
      'Sarah is ziek, [[dus]] ze blijft thuis.',
      'Ik drink koffie [[en]] Emma drinkt thee.',
      'Het regent, [[maar]] ik ben niet boos.',
      'Meneer Janssens is verrast, [[want]] Pieter is op tijd.',
      'Ik verveel me, [[dus]] ik bel een vriend.',
    ],
    expect: ['**want** = raison', '**dus** = conséquence', '**maar** = opposition', '**of** = choix · **en** = addition'],
    traps: ['**want** = raison · **dus** = conséquence.', '//dus ze blijft// = //dus blijft ze// : les deux sont corrects.'],
    notes: "Exercice ajouté, à faire seul puis à corriger à l’oral. Faire justifier chaque choix (raison, conséquence, opposition, choix, addition).",
    notesA: "Items 4 et 8 : accepter aussi « dus blijft ze thuis » et « dus bel ik een vriend ». Item 7 : faire sourire la classe (Pieter n’est pas toujours à l’heure ?).",
  });

  d.closing({
    cliff: 'Séance 5 : //Hoe voel je je?// — un **speed date** des émotions, //Ik ben// ou //Ik voel me//, et comment **intensifier** : //een beetje, heel, ontzettend…//',
    homework: ['Apprendre les 15 expressions **Gevoelens** (p. 88).', 'Fiche **En · maar · want** (p. 73) : écrire 3 phrases avec //want// et 3 avec //maar//, vraies pour vous.', 'Écrire la conversation **1.2.6 avec u** (6 répliques).'],
    exit: 'Une phrase vraie : //Ik voel me … , want …// — puis la même idée avec //maar//.',
    notes: "Ticket de sortie oral, par exemple : « Ik voel me een beetje moe, want ik werk veel. » / « Ik ben moe, maar ik ben blij. »",
  });
};
