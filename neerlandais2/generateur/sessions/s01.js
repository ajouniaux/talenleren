// Séance 1 — Kennismaking · Goedemorgen! (Séquence 1.1, 1/2) — Livret p. ii–9
exports.meta = {
  n: 1, slug: 'Kennismaking_Goedemorgen', title: 'Goedemorgen!',
  subtitle: 'Kennismaking — le cours, les personnages et les salutations',
  pages: 'Livret p. ii–9', img: 'scene_1_1', time: '1.1', sceneLabel: 'SÉQUENCE',
  block: 'Section 1 · Premiers pas en néerlandais',
  coverNotes: "Séance de lancement. Objectifs : présenter la méthode du syllabus (trois couches, zinnenbouwer), faire connaître Emma, Pieter, Sarah et Meneer Janssens, lire le dialogue d’ouverture, puis entrer dans la séquence 1.1 (saluer selon le moment de la journée) jusqu’à l’exercice 1.1.4.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Saluer quelqu’un **selon le moment de la journée** et dire **quand** je fais quelque chose (’s morgens, vanavond…).',
    language: '//Goedemorgen · Goedemiddag · Goedenavond · Goedenacht · Welterusten · Hallo · Dag · Hoi// — ’s morgens / vanmorgen / in de morgen',
    skills: 'Comprendre un dialogue court · repérer des expressions de temps à l’oral · construire des phrases avec le zinnenbouwer',
    agenda: [['Le syllabus : trois couches', 10], ['Emma, Pieter & co · le dialogue', 15], ['Séquence 1.1 · zinnenbouwer 1.1', 10], ['Les nuances du temps (p. 6)', 10], ['1.1.1 · 1.1.2 (réception)', 15], ['1.1.3 Mijn dag', 15], ['1.1.4 Welk moment?', 10], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. La séance couvre les pages ii à 9 du livret ; 1.1.5 à 1.1.7 seront traités à la séance 2.",
  });

  d.steps({
    title: 'Comment fonctionne ce cours', tag: 'MÉTHODE', page: 'Livret p. ii',
    intro: 'Chaque séquence suit **trois couches**. Le **zinnenbouwer** (bâtisseur de phrases) vous accompagne.',
    steps: [
      { h: 'Réception intensive', n: '1', color: 'accent3', lines: ['Vous **écoutez** et **lisez** avant de produire.', 'Le cerveau s’habitue à la mélodie et à la structure.'] },
      { h: 'Production structurée', n: '2', color: 'accent2', lines: ['Zinnenbouwer **ouvert** : vous construisez vos propres phrases…', '… **vraies pour vous**.'] },
      { h: 'Fluidité', n: '3', color: 'accent1', lines: ['Zinnenbouwer **fermé**.', 'Rien de nouveau, **seulement plus vite** : les mots viennent tout seuls.'] },
    ],
    foot: { kind: 'keep', label: 'Objectif A2', text: 'Tenir une conversation simple sur des sujets familiers, comprendre l’essentiel d’un échange courant, parler de sa vie quotidienne et professionnelle.' },
    notes: "Présenter la logique des trois couches : on ne produit jamais avant d’avoir beaucoup entendu. Montrer les bandeaux de couleur dans le livret : vert = couche 1, bleu = couche 2, jaune = couche 3.",
  });

  d.legend({
    title: 'Lire son syllabus', tag: 'MÉTHODE', page: 'Tout le livret',
    items: [
      ['COUCHE 1', 'accent3', 'Bandeau **vert** : réception intensive. On écoute, on lit, on repère.'],
      ['COUCHE 2', 'accent2', 'Bandeau **bleu** : production structurée, avec le zinnenbouwer **ouvert**.'],
      ['COUCHE 3', 'accent1', 'Bandeau **jaune** : fluidité, zinnenbouwer **fermé**, chronomètre.'],
      ['ZINNENBOUWER', 'tx2', 'Tableau de **familles de phrases** : on prend un bloc par colonne.'],
      ['EXTRA', 'accent6', 'Exercice **supplémentaire** (mots composés, pronoms…).'],
      ['JIJ NU!', 'accent1', '« **À toi !** » : mise en situation orale en fin de séquence.'],
      ['KLANKMOMENT', 'accent4', 'Moment de **prononciation** (g, ch, ’s…).'],
      ['+ BONUS', 'tx2', 'Exercice **ajouté** au tableau, hors syllabus.'],
    ],
    notes: "Faire feuilleter le livret et retrouver chaque type d’encadré. Le tag « + BONUS » signale les exercices de ces diapositives qui ne figurent pas dans le syllabus.",
  });

  d.table({
    title: 'Section 1 : quatre séquences et une synthèse', tag: 'PLAN', page: 'Livret p. ii',
    headers: ['', 'SÉQUENCE', 'NEDERLANDS', 'OBJECTIF', 'SÉANCES'],
    colW: [0.8, 2.6, 2.5, 4.83, 1.4], boldCol: 1, align: ['center', 'left', 'left', 'left', 'center'],
    rows: [
      ['1.1', 'Les salutations', '^^de^^ begroetingen', 'Dire bonjour selon le moment de la journée.', '1 – 2'],
      ['1.2', 'Prendre des nouvelles', 'hoe gaat het?', 'Demander et répondre à « comment ça va ? ».', '3 – 5'],
      ['1.3', 'Être et avoir', 'zijn & hebben', 'Dire qui l’on est, ce que l’on a.', '6 – 7'],
      ['1.4', 'Prendre congé', 'afscheid nemen', 'Se quitter poliment selon le contexte.', '8'],
      ['✦', 'Synthèse', 'stel jezelf voor', 'Se présenter en mobilisant tout le palier.', '8'],
    ],
    foot: 'Puis : grammaire (20 fiches), vocabulaire (12 thèmes) et 10 mises en situation (séances 9 à 19).',
    notes: "Le mot « palier » (= niveau) vient du livret. Montrer que chaque séquence correspond à un extrait du dialogue d’ouverture.",
  });

  d.picture({
    title: 'Wie is wie? Les personnages', tag: 'BD', page: 'Livret p. 2', img: 'personages',
    capLabel: 'EMMA & PIETER : UN TANDEM', capColor: 'accent1', capIcon: 'FaUsers',
    caption: ['**Emma** : Bergen, studente, ze leert Nederlands, ze heeft een broer.', '**Pieter** : Nederland, stagiair op een school in België, hij heeft een zus.', '**Sarah** : Gent, collega van Pieter, ze heeft kinderen.', '**Meneer Janssens** : stagebegeleider van Pieter — Pieter zegt **u** tegen hem.'],
    notes: "Lire les cartes à voix haute ; faire répéter les noms de villes (Bergen = Mons, Gent = Gand). Le livret écrit « zij helpt hem in het Frans » : plus idiomatique, « zij helpt hem met zijn Frans ».",
  });

  d.scene({
    title: 'Premiers pas : Emma & Pieter', tag: 'BD', page: 'Livret p. 1', img: 'bd_klaar',
    text: ['Ce dialogue est votre porte d’entrée : il contient les **quatre piliers** de toute interaction sociale.', '**1** Saluer · **2** Prendre des nouvelles · **3** Être et avoir (**zijn** & **hebben**) · **4** Prendre congé.', 'Le dialogue est découpé en **quatre séquences** : un extrait, une règle, un exercice.'],
    ask: 'Regardez l’image : qui sont-ils, où sont-ils, que se disent-ils ?',
    notes: "Bulles de l’image : « Ben je klaar voor de cursus? » / « Zeker weten! » / « Ik heb mijn boek al bij me. » Faire des hypothèses en français, puis passer au dialogue.",
  });

  d.dialogue({
    title: 'Eerste dialoog', tag: 'DIALOOG', page: 'Livret p. 3',
    lines: [
      ['EMMA', '«Goedemorgen, Pieter!»', '1'],
      ['PIETER', '«Goedemorgen, Emma! Hoe gaat het?»', '2'],
      ['EMMA', '«Het gaat goed, dank je. Ik ben moe, want ik heb veel werk. En met jou?»', '3'],
      ['PIETER', '«Ook goed, bedankt! Ik ben blij, want vandaag heb ik tijd.»', '4'],
      ['EMMA', '«Ben je klaar voor de cursus?»', '5'],
      ['PIETER', '«Ja, ik heb mijn boek en ik ben er klaar voor! Heb jij ook tijd voor een koffie?»', '6'],
      ['EMMA', '«Nee, sorry, ik heb geen tijd. Mijn les begint zo.»', '7'],
      ['PIETER', '«Geen probleem. Nou, tot straks dan!»', '8'],
      ['EMMA', '«Ja, tot straks! Dag Pieter!»', '9'],
    ],
    legend: { label: 'LES 4 PILIERS', icon: 'FaSearch', color: 'accent5', lines: ['**Saluer** : lignes 1–2', '**Nouvelles** : lignes 2–4', '**Zijn / hebben** : lignes 3–7', '**Congé** : lignes 8–9'] },
    notes: "Première lecture par le professeur, deuxième lecture en binôme (Emma / Pieter), puis on inverse. Coquille du livret : « Dag Pieter!! » (double point d’exclamation). Les lignes ne sont pas numérotées dans le livret ; la numérotation ci-contre sert au tableau.",
  });

  d.exercise({
    title: 'Avez-vous compris le dialogue ?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Waar of niet waar? Corrigez les phrases fausses en néerlandais.',
    items: [
      'Emma is moe, want ze heeft veel werk. → [[waar]]',
      'Pieter heeft vandaag geen tijd. → [[niet waar: Pieter heeft vandaag tijd.]]',
      'Pieter heeft zijn boek. → [[waar]]',
      'Emma drinkt een koffie met Pieter. → [[niet waar: Emma heeft geen tijd.]]',
      'Emma’s les begint zo. → [[waar]]',
      'Ze zeggen «Tot morgen!». → [[niet waar: ze zeggen «Tot straks!».]]',
    ],
    traps: ['**heeft** à la 3e personne (hij / zij) : ✗ //Pieter heb//', '**geen** + nom : //geen tijd// (✗ //niet tijd//) — voir séance 6.'],
    notes: "Exercice ajouté pour vérifier la compréhension globale avant d’entrer dans la séquence 1.1.",
  });

  d.scene({
    title: 'Séquence 1.1 : les salutations', tag: 'FOCUS', page: 'Livret p. 4', img: 'scene_1_1', time: '1.1', sceneLabel: 'SÉQUENCE',
    text: ['Les salutations sont votre **première interaction** en néerlandais : base de la communication, de la politesse et de la mise en confiance.', '**Focus : lignes 1–2 du dialogue**', 'Emma : «**Goedemorgen**, Pieter!» — //Bonjour, Pieter !//', 'Pieter : «**Goedemorgen**, Emma!» — //Bonjour, Emma !//'],
    ask: 'Il est 15 h. Que dit Emma en arrivant ?',
    notes: "Réponse attendue : « Goedemiddag, Pieter! ». Annoncer que la salutation dépend de l’heure, comme « bonsoir » en français, mais avec quatre moments.",
  });

  d.picture({
    title: 'Zinnenbouwer 1.1 — Groeten en de dag', tag: 'ZINNENBOUWER', page: 'Livret p. 5', img: 'zinnenbouwer_1_1',
    capLabel: 'MODE D’EMPLOI', capColor: 'tx2', capIcon: 'FaPuzzlePiece',
    caption: ['Cinq familles : **A** groeten · **B** mijn dag · **C** hoe laat? · **D** afscheid · **E** dagen van de week.', 'Prenez **un bloc par colonne** : quand ? → verbe + sujet → complément.', '//’s Morgens// + //zeg ik// + //«Goedemorgen!»//', 'Phrase **vraie pour vous** = phrase réussie.'],
    notes: "Coquilles du zinnenbouwer 1.1 à signaler aux étudiants : famille B « werk Emma » → werkt Emma ; « Overmorgen » (après-demain) est sans doute « Overdag » (pendant la journée). Famille C : avec les verbes séparables, la particule va à la fin : « Om zeven uur sta ik elke dag op ».",
  });

  d.blocks({
    title: 'Comment le zinnenbouwer construit la phrase', tag: 'ZINNENBOUWER', page: 'Livret p. 5',
    intro: 'Le **moment** ouvre la phrase. Le **verbe** reste en **2e position** ; le **sujet** passe donc **après** le verbe.',
    rows: [
      { label: 'Famille A', cells: [{ t: '’s Morgens', role: 'T' }, { t: 'zeg', role: 'V' }, { t: 'ik', role: 'S' }, { t: '«Goedemorgen!»', role: 'O', lab: 'complément' }], fr: 'Le matin, je dis « bonjour ».' },
      { label: 'Famille B', cells: [{ t: 'Vanavond', role: 'T' }, { t: 'werk', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'thuis', role: 'P' }], fr: 'Ce soir, je travaille à la maison.' },
      { label: 'Famille C', cells: [{ t: 'Om zeven uur', role: 'T' }, { t: 'sta', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'elke dag', role: 'T' }, { t: 'op', role: 'F', lab: 'particule' }], fr: 'À sept heures, je me lève tous les jours.' },
      { label: 'Famille E', cells: [{ t: 'Morgen', role: 'T' }, { t: 'is', role: 'V' }, { t: 'het', role: 'S' }, { t: 'zaterdag', role: 'O', lab: 'complément' }], fr: 'Demain, c’est samedi.' },
    ],
    foot: { kind: 'trap', text: 'En français : //Le matin, **je dis**…// En néerlandais : //’s Morgens **zeg ik**…// ✗ //’s Morgens ik zeg// — l’inversion est obligatoire (fiche Woordvolgorde, séance 2).' },
    notes: "Aperçu de l’inversion, traitée en détail à la séance 2 avec la fiche de grammaire A2-01. Ici, il suffit de faire remarquer la 2e position du verbe.",
  });

  d.table({
    title: 'Comprendre les nuances du temps', tag: 'À RETENIR', page: 'Livret p. 6',
    headers: ['MOMENT', 'HEURES', 'JE SALUE', 'D’HABITUDE', 'AUJOURD’HUI', 'EN GÉNÉRAL'],
    colW: [1.55, 1.6, 2.5, 1.9, 2.35, 2.23], boldCol: 2,
    rows: [
      ['matin', '5 h – 12 h', 'Goedemorgen!', '’s morgens', 'vanmorgen · deze morgen', 'in de morgen'],
      ['après-midi', '12 h – 18 h', 'Goedemiddag!', '’s middags', 'vanmiddag · deze middag', 'in de middag'],
      ['soir', '18 h – 23 h', 'Goedenavond!', '’s avonds', 'vanavond · deze avond', 'in de avond'],
      ['nuit', '23 h – 5 h', 'Goedenacht! · Welterusten!', '’s nachts', 'vannacht · deze nacht', 'in de nacht'],
      ['toute la journée', 'toute heure', 'Hallo! · Dag! · Hoi!', 'overdag', 'vandaag', 'tijdens de dag'],
    ],
    foot: '//Welterusten!// = « dors bien » : seulement quand quelqu’un va **dormir**. //Hoi!// est familier.',
    notes: "Lire le tableau ligne par ligne, faire répéter en chœur. Attirer l’attention sur ’s (prononcé [s] et collé au mot : « smorgens »), traité au Klankmoment de la séance 2. « Vannacht » peut désigner la nuit passée ou la nuit qui vient.",
  });

  d.cards({
    title: 'Quatre façons de parler du moment', tag: 'À RETENIR', page: 'Livret p. 6',
    perRow: 4,
    cards: [
      { h: '① SALUER', color: 'accent1', f: 'Goedemiddag!', lines: ['//Goedemiddag, hoe gaat het?//', 'Je **salue** quelqu’un.'] },
      { h: '② HABITUDE', color: 'accent2', f: '’s middags', lines: ['//Ik werk ’s middags.//', 'Tous les jours, **régulièrement**.'] },
      { h: '③ AUJOURD’HUI', color: 'accent3', f: 'vanmiddag', lines: ['//Vanmiddag ga ik naar de dokter.//', '**Aujourd’hui précisément**.'] },
      { h: '④ EN GÉNÉRAL', color: PURPLE_HEX(), f: 'in de middag', lines: ['//In de morgen is het rustig.//', 'Une **période** en général.'] },
    ],
    foot: { kind: 'trap', text: '//l’après-midi// a trois traductions : //Goedemiddag!// (je salue), //’s middags// (d’habitude), //vanmiddag// (cet après-midi). Le français dit la même chose dans les trois cas !' },
    notes: "Faire produire une phrase par carte avec « avond » : Goedenavond! / ’s Avonds kijk ik tv. / Vanavond ga ik naar de cursus. / In de avond is het rustig.",
  });

  d.listening({
    title: '1.1.1 Tijdsuitdrukkingen herkennen', tag: 'COUCHE 1', page: 'Livret p. 7',
    who: 'Texte 1 — lu deux fois par le professeur',
    meta: 'Couche 1 · Réception intensive · seul · 10 min — deux phrases de la liste ne sont pas dans le texte.',
    steps: [
      { icon: 'FaHeadphones', h: '1re écoute', t: '**Cochez** les phrases que vous entendez.' },
      { icon: 'FaListOl', h: '2e écoute', color: 'accent1', t: '**Numérotez**-les dans l’ordre du texte (1 à 10).' },
      { icon: 'FaUsers', h: 'Ensuite', color: 'accent3', t: 'Comparez avec votre voisin, puis **lisez** les phrases à voix haute.' },
    ],
    notes: "Le texte 1 n’est pas reproduit dans le livret : lire le texte du dossier du professeur. La solution (phrases absentes et ordre) dépend de ce texte.",
  });

  d.table({
    title: '1.1.1 Tijdsuitdrukkingen herkennen — la grille', tag: 'COUCHE 1', page: 'Livret p. 7',
    headers: ['✓', 'ZIN', 'N°', '✓', 'ZIN', 'N°'],
    colW: [0.55, 4.9, 0.6, 0.55, 4.93, 0.6], align: ['center', 'left', 'center', 'center', 'left', 'center'],
    rows: [
      ['☐', 'Vanmiddag ga ik naar de cursus.', '', '☐', 'Ik zeg «Goedenacht!» tegen iedereen.', ''],
      ['☐', 'Morgens werk ik op school.', '', '☐', 'Vanavond kijk ik een film.', ''],
      ['☐', '’s Avonds drink ik koffie met Pieter.', '', '☐', 'In de morgen is het rustig thuis.', ''],
      ['☐', '’s Morgens zeg ik «Goedemorgen!» tegen Pieter.', '', '☐', '’s Morgens werk ik thuis.', ''],
      ['☐', 'Vandaag heb ik een cursus.', '', '☐', '’s Avonds zeg ik «Goedenavond!» tegen Pieter.', ''],
      ['☐', 'In de middag is het druk in de klas.', '', '☐', 'Vanmiddag zeg ik «Goedemiddag!» tegen de leraar.', ''],
    ],
    notes: "Grille projetée pour la mise en commun. Coquille du livret : « Morgens werk ik op school » → « ’s Morgens werk ik op school » (ou « ’s Ochtends »). Le livret annonce 10 phrases à numéroter pour 12 phrases proposées : les 2 phrases restantes sont les intrus.",
  });

  d.table({
    title: '1.1.2 Bingo van de dag', tag: 'COUCHE 1', page: 'Livret p. 8',
    intro: 'Le professeur lit le texte 2, puis le texte 3. Retrouvez chaque case en néerlandais. Grille complète : « **Bingo!** »',
    colW: [4.04, 4.04, 4.05],
    rows: [
      ['Le matin, je travaille à l’école.\n[[’s Morgens werk ik op school.]]', 'Cet après-midi, je vais chez le médecin.\n[[Vanmiddag ga ik naar de dokter.]]', 'Ce soir, je regarde un film avec Emma.\n[[Vanavond kijk ik een film met Emma.]]'],
      ['Aujourd’hui, j’ai une réunion au travail.\n[[Vandaag heb ik een vergadering op het werk.]]', 'Bonne nuit !\n[[Goedenacht! · Welterusten!]]', 'Le soir, je rentre à la maison.\n[[’s Avonds ga ik naar huis.]]'],
      ['Aujourd’hui, je suis fatiguée.\n[[Vandaag ben ik moe.]]', 'Le matin, je dis « bonjour » aux enfants.\n[[’s Morgens zeg ik «goedemorgen» tegen de kinderen.]]', 'L’après-midi, c’est calme au travail.\n[[’s Middags is het rustig op het werk.]]'],
    ],
    notes: "Version projetée du bingo : sur la diapositive de correction, la phrase néerlandaise de chaque case. Pour « l’après-midi, c’est calme », accepter aussi « In de middag is het rustig op het werk » (période générale).",
    notesA: "Corriger en faisant relire chaque phrase ; souligner l’inversion (’s Morgens werk ik) et « tegen » (dire à quelqu’un = zeggen tegen iemand).",
  });

  d.exercise({
    title: '1.1.3 Mijn dag', tag: 'COUCHE 2', page: 'Livret p. 8–9', mode: 'a',
    instr: 'Écrivez **dix phrases vraies** sur votre journée, au moins une par famille A à D du zinnenbouwer. Puis interrogez votre voisin et cochez ce qui est vrai pour lui aussi.',
    number: false, gap: 8,
    items: [
      { h: 'Exemples (à adapter : ils doivent être vrais pour vous !)' },
      { t: '**A** · Vanmorgen zeg ik «Goedemorgen!» tegen mijn collega’s.' },
      { t: '**B** · ’s Avonds werk ik thuis. · Vandaag ben ik in de stad.' },
      { t: '**C** · Om zeven uur sta ik op. · Om één uur lunch ik.' },
      { t: '**D** · Na de les zeg ik «Tot morgen!».' },
      { h: 'Interroger le voisin' },
      { t: '//Werk jij ook ’s avonds?// — //Ja! / Nee.// → ☐ ook waar voor mijn buur' },
    ],
    sideW: 3.6,
    expect: ['**10 phrases**, au moins 1 par famille (A, B, C, D) + 1 libre.', 'Chaque bloc existe dans le **zinnenbouwer**.', 'Le **verbe** en 2e position.', 'Couche 2 · seul, puis par deux · 20 min'],
    notes: "Production libre : pas de correction unique. Passer dans les rangs et vérifier la 2e position du verbe. Le livret dit d’interroger le voisin avec la « famille E » ; dans le zinnenbouwer 1.1, la famille E est celle des jours de la semaine : utiliser simplement la question inversée (Werk jij ook…?).",
  });

  d.steps({
    title: '1.1.4 Welk moment? — le jeu des cartes', tag: 'COUCHE 2', page: 'Livret p. 9',
    intro: 'Groupe de 4 ou 5 · 15 min. Cartes-moments : **morgen 07.00 · middag 14.00 · avond 19.00 · nacht 23.00 · de hele dag**.',
    steps: [
      { h: 'A montre', color: 'accent2', lines: ['A montre une carte-moment à B.'] },
      { h: 'B salue', color: 'accent1', lines: ['B salue A avec la bonne formule + le prénom : //Goedemiddag, Lucas!//'] },
      { h: 'On tourne', color: 'accent3', lines: ['B montre une carte à C, et ainsi de suite.'] },
      { h: 'Seul', color: 'tx2', lines: ['Complétez le tableau (diapositive suivante).'] },
    ],
    notes: "Préparer cinq cartes par groupe (ou les écrire au tableau). Veiller à ce que le prénom soit toujours ajouté.",
  });

  d.table({
    title: '1.1.4 Welk moment? — le tableau', tag: 'COUCHE 2', page: 'Livret p. 9',
    headers: ['N°', 'VRAAG', 'ANTWOORD'],
    colW: [0.8, 4.6, 6.73], align: ['center', 'left', 'left'],
    rows: [
      ['1', 'Wat zeg je ’s morgens?', '[[«Goedemorgen!»]]'],
      ['2', 'Wat zeg je ’s middags?', '[[«Goedemiddag!»]]'],
      ['3', 'Wat zeg je ’s avonds?', '[[«Goedenavond!»]]'],
      ['4', 'Wat zeg je ’s nachts?', '[[«Goedenacht!» · «Welterusten!» (avant de dormir)]]'],
      ['5', 'Wat zeg je de hele dag?', '[[«Hallo!» · «Dag!» · «Hoi!» (familier)]]'],
    ],
    foot: 'Réponse complète : //’s Morgens zeg ik «Goedemorgen!».// — l’inversion encore !',
    notesA: "Accepter les réponses courtes ; à l’oral, exiger la phrase complète avec inversion.",
  });

  d.exercise({
    title: 'Quelle heure, quelle salutation ?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Saluez la personne avec la bonne formule et son nom.',
    cols: 2, gap: 12,
    items: ['08.15 · Pieter → [[Goedemorgen, Pieter!]]', '13.30 · Meneer Janssens → [[Goedemiddag, meneer Janssens!]]', '20.45 · Sarah → [[Goedenavond, Sarah!]]', '23.30 · votre enfant va dormir → [[Welterusten!]]', '10.00 · un ami, en passant → [[Hoi! / Dag!]]', '17.55 · la classe → [[Goedemiddag allemaal!]]'],
    traps: ['Midi pile : on passe à **Goedemiddag**.', '17.55 : encore **Goedemiddag** (18 h = Goedenavond).', '//Hoi// : seulement entre amis.'],
    notes: "Exercice ajouté, oral et rapide : interroger un étudiant par ligne.",
  });

  d.closing({
    cliff: 'Séance 2 : saluer **plus vite**, prononcer le **g** et le **ch**, et comprendre pourquoi on dit //’s Morgens **werk ik**//.',
    homework: ['Relire le **dialogue** (p. 3) à voix haute, deux fois.', 'Apprendre le tableau des **nuances du temps** (p. 6).', 'Écrire **5 phrases** vraies avec le zinnenbouwer 1.1 (familles A à D).'],
    exit: 'Il est 19 h : saluez votre voisin, puis dites ce que vous faites **ce soir**.',
    notes: "Ticket de sortie à l’oral : « Goedenavond, … ! Vanavond … ».",
  });
};

function PURPLE_HEX() { return '6E4A9E'; }
