// Séance 7 — Palier 6 · De plaatsbeschrijving (Séquence 6.2, imperfectum activé) — Livret p. 8–10a
exports.meta = {
  n: 7, slug: 'De_plaatsbeschrijving', title: 'De plaatsbeschrijving',
  subtitle: 'L’imperfectum activé — décrire l’état des lieux au passé',
  pages: 'Livret p. 8–10a', img: 'p6_10_4', time: '6.2', sceneLabel: 'SÉQUENCE',
  block: 'Palier 6 · Verhuur en beheer',
  coverNotes: "Séance consacrée à la séquence 6.2 : l’imperfectum, jusqu’ici reconnu, devient actif. On lit un état des lieux d’entrée (ex. 4), on conjugue (ex. 5), on rédige l’état des lieux de sortie (TAAK 2), puis l’activité D2 « Verloren voorwerpen » applique la même règle à la vie quotidienne (le portefeuille de Stef). Pages couvertes : p. 8 à 10a du livret.",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Décrire un **état passé** (appartement, objet perdu) à l’**imperfectum** et rédiger un **état des lieux** d’entrée et de sortie.',
    language: '//was · waren · had · hadden · kon · stond · sloot · werkte · druppelde// — //Toen ik langsging, was de muur nat.// — //Bij intrede… · Bij uittrede…//',
    skills: 'Lire un état des lieux · conjuguer l’imperfectum (réguliers, forts) · contraster entrée et sortie · remplir un formulaire d’objet perdu',
    agenda: [['Rappel séance 6 : lexique', 6], ['6.2 · les formes de l’imperfectum', 14], ['Toen + imperfectum · woordenschat', 10], ['Ex. 4 Lezen : plaatsbeschrijving', 12], ['Ex. 5 · bonus toen', 12], ['TAAK 2 · de uittrede', 14], ['D2 · Verloren voorwerpen', 17], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. Pages 8 à 10a du livret. Les formes de l’imperfectum (réguliers, forts) sont rappelées en tableaux car le livret suppose l’acquis du palier 4 ; le tableau des verbes forts sert de référence pour l’exercice 5 et la TAAK 2.",
  });

  d.exercise({
    title: 'Rappel séance 6 : le lexique de la location', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 6',
    instr: 'Traduisez — seul, 4 min, puis correction orale.',
    items: [
      { q: '« Le locataire résilie le contrat. »', a: 'De huurder **zegt** het huurcontract **op**.' },
      { q: '« Nous établissons l’état des lieux. »', a: 'Wij **stellen** de plaatsbeschrijving **op**.' },
      { q: '« Je relève les compteurs. »', a: 'Ik **neem** de meterstanden **op**.' },
      { q: '« Le propriétaire met l’appartement en location. »', a: 'De eigenaar **verhuurt** het appartement.' },
      { q: '« Qui paie la réparation ? »', a: 'Wie betaalt de herstelling?' },
    ],
    traps: ['**opzeggen · opstellen · opnemen** : la particule part en fin de phrase.', '//huren// ≠ //verhuren//.', 'Notez l’article : %%het%% huurcontract, ^^de^^ herstelling.'],
    notes: "Rappel de la séance 6 : verbes séparables du métier et huren / verhuren. 6 minutes en tout. Faire traduire à l’oral phrase par phrase, puis projeter la correction.",
    notesA: "Si une erreur de particule apparaît (« Wij opstellen de plaatsbeschrijving »), refaire la règle : verbe conjugué en 2e position, particule à la fin de la phrase.",
  });

  d.scene({
    title: 'Séquence 6.2 : l’état des lieux au passé', tag: 'FOCUS', page: 'Livret p. 8', img: 'p6_10_4', time: '6.2', sceneLabel: 'SÉQUENCE',
    text: ['Un état des lieux **décrit** : le **perfectum** raconte des événements, l’**imperfectum** peint le décor.', '**Focus : lignes 5 et 7**', '«De huurder **belde** gisteren.»', '«Toen ik gisteravond langsging, **was** de muur al nat.»', '«Vroeger **had** het gebouw nooit problemen.»'],
    ask: 'Dans ces phrases : quel verbe est **régulier** ? Lesquels sont **forts** ?',
    notes: "Au palier 4, l’imperfectum devait seulement être reconnu ; ici il doit être produit. Réponse : belde (bellen) est régulier (stam bel + de) ; langsging (langsgaan), was (zijn) et had (hebben) sont forts ou irréguliers. Demander aussi : « Quelle est la différence entre « De huurder belde » et « De huurder heeft gebeld » ? » → même fait ; l’imperfectum est typique de l’écrit professionnel et du récit.",
  });

  d.table({
    title: 'Imperfectum régulier : stam + -te / -de', tag: 'GRAMMATICA', page: 'Livret p. 8 · rappel',
    intro: '’t kofschip : stam terminé par **t, k, f, s, ch, p** → **-te(n)** ; toutes les autres lettres → **-de(n)**.',
    headers: ['INFINITIEF', 'STAM', 'IK · JIJ · U · HIJ', 'WIJ · JULLIE · ZIJ'], colW: [3.2, 2.6, 3.4, 2.93], boldCol: 2, size: 17,
    rows: [
      ['werken', 'werk (k)', 'werk**te**', 'werk**ten**'],
      ['kloppen', 'klop (p)', 'klop**te**', 'klop**ten**'],
      ['bellen', 'bel (l)', 'bel**de**', 'bel**den**'],
      ['druppelen', 'druppel (l)', 'druppel**de**', 'druppel**den**'],
      ['functioneren', 'functioneer (r)', 'functioneer**de**', 'functioneer**den**'],
      ['verhuren', 'verhuur (r)', 'verhuur**de**', 'verhuur**den**'],
      ['vernieuwen', 'vernieuw (w)', 'vernieuw**de**', 'vernieuw**den**'],
    ],
    foot: 'Piège pour francophones : une seule forme au singulier (//ik · jij · hij **belde**//), pas de terminaison par personne comme en français — mais **-den** au pluriel : //wij **belden**//.',
    notes: "Rappel du palier 4 en 3 minutes : trouver la dernière lettre du stam, vérifier si elle est dans « ’t kofschip » (t, k, f, s, ch, p). Les verbes de l’état des lieux sont presque tous réguliers : werkte, druppelde, functioneerde, vernieuwde. Faire conjuguer oralement un verbe par étudiant.",
  });

  d.table({
    title: 'Imperfectum : les verbes forts et irréguliers', tag: 'GRAMMATICA', page: 'Livret p. 10 · rappel',
    headers: ['INFINITIEF', 'IK · JIJ · U · HIJ', 'WIJ · JULLIE · ZIJ', 'FRANÇAIS'], colW: [3.0, 2.8, 2.8, 3.53], boldCol: 1, size: 16,
    rows: [
      ['zijn', 'was', 'waren', 'être'],
      ['hebben', 'had', 'hadden', 'avoir'],
      ['kunnen', 'kon', 'konden', 'pouvoir'],
      ['moeten', 'moest', 'moesten', 'devoir'],
      ['sluiten', 'sloot', 'sloten', 'fermer'],
      ['staan', 'stond', 'stonden', 'se trouver (debout)'],
      ['zitten', 'zat', 'zaten', 'être assis · se trouver dedans'],
      ['gaan (langs)', 'ging (langs)', 'gingen (langs)', 'aller (passer chez)'],
      ['komen', 'kwam', 'kwamen', 'venir'],
      ['vinden', 'vond', 'vonden', 'trouver'],
    ],
    foot: 'Piège : //was// ≠ //waren// (//de muren **waren** wit//) ; verbe séparable : //Ik **ging** langs// mais //toen ik langs**ging**//.',
    notes: "Tableau de référence pour les exercices 4, 5 et la TAAK 2. Faire remarquer : singulier et pluriel diffèrent (was / waren, had / hadden), alors qu’au présent le français change à chaque personne. Pour le verbe séparable : en principale la particule part en fin de phrase (Ik ging gisteravond langs), en subordonnée elle se soude (toen ik langsging).",
  });

  d.blocks({
    title: 'Toen ik langsging, was de muur nat', tag: 'GRAMMATICA', page: 'Livret p. 8 · 10a',
    intro: 'Après une subordonnée en **toen**, le **verbe conjugué** de la phrase principale passe en **tête** : //was hij weg//.',
    rows: [
      { label: 'Ligne 7', cells: [{ t: 'Toen', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'gisteravond', role: 'T' }, { t: 'langsging', role: 'F' }, { t: 'was', role: 'V' }, { t: 'de muur', role: 'S' }, { t: 'al', role: 'T' }, { t: 'nat', role: 'X', lab: 'adjectif' }], fr: 'Quand je suis passée hier soir, le mur était déjà mouillé.' },
      { label: 'D2', cells: [{ t: 'Toen', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'uitstapte', role: 'F' }, { t: 'was', role: 'V' }, { t: 'hij', role: 'S' }, { t: 'weg', role: 'X', lab: 'adjectif' }], fr: 'Quand je suis descendu, il avait disparu.' },
      { label: 'Ligne 7', cells: [{ t: 'Vroeger', role: 'T' }, { t: 'had', role: 'V' }, { t: 'het gebouw', role: 'S' }, { t: 'nooit', role: 'N' }, { t: 'problemen', role: 'O' }], fr: 'Avant, l’immeuble n’avait jamais de problèmes.' },
      { label: 'TAAK 2', cells: [{ t: 'Bij intrede', role: 'T' }, { t: 'was', role: 'V' }, { t: 'de muur', role: 'S' }, { t: 'wit', role: 'X', lab: 'adjectif' }], fr: 'À l’entrée, le mur était blanc.' },
    ],
    foot: { kind: 'trap', text: 'En français : //Quand je suis descendu, **il avait** disparu.// En néerlandais : //Toen ik uitstapte, **was hij** weg.// ✗ //…hij was weg// : après la subordonnée, le **verbe d’abord**.' },
    notes: "Deux règles en une : (1) dans la subordonnée en toen, le verbe est à la fin (uitstapte, langsging) ; (2) la principale qui suit commence par le verbe (was hij weg). Même mécanique que ’s Morgens werk ik (palier 1). Faire construire une phrase à partir de « Toen de huurder belde, … ».",
  });

  d.table({
    title: 'Woordenschat : l’état des lieux', tag: 'WOORDENSCHAT', page: 'Livret p. 9–10',
    headers: ['NEDERLANDS', 'FRANÇAIS', 'NEDERLANDS', 'FRANÇAIS'], colW: [3.2, 2.85, 3.2, 2.88], size: 16,
    rows: [
      ['^^de^^ muur', 'le mur', '^^de^^ kras', 'la rayure'],
      ['^^de^^ deur', 'la porte', '^^de^^ vochtvlek', 'la tache d’humidité'],
      ['^^de^^ kraan', 'le robinet', '^^de^^ kelder', 'la cave'],
      ['%%het%% bad', 'la baignoire', '^^de^^ wasmachine', 'la machine à laver'],
      ['^^de^^ verluchting', 'la ventilation', '^^de^^ sleutel', 'la clé'],
      ['%%het%% toestel', 'l’appareil', '^^de^^ badge', 'le badge'],
      ['^^de^^ koelkast', 'le frigo', '^^de^^ intrede · ^^de^^ uittrede', 'l’entrée · la sortie'],
      ['^^de^^ oven', 'le four', 'druppelen', 'goutter'],
      ['vernieuwen', 'rénover, remettre à neuf', 'functioneren', 'fonctionner'],
    ],
    notes: "Vocabulaire à connaître avant la lecture (ex. 4) et la TAAK 2. Un seul mot en het dans la liste : het bad, het toestel (de de-woorden dominent). Faire répéter et demander une phrase à l’imperfectum par mot : « De kraan druppelde. », « De deur sloot niet goed. ». « bij intrede / bij uittrede » : expressions figées de l’état des lieux belge.",
  });

  d.exhibit({
    title: '4 Lezen: de plaatsbeschrijving bij intrede', tag: 'COUCHE 1', page: 'Livret p. 9',
    label: 'INTREDE · 2023', docTitle: 'Waversesteenweg 112, Elsene',
    lines: [
      ['Badkamer', 'De muren waren wit geschilderd en in goede staat. De kraan van het bad werkte normaal, maar druppelde lichtjes. De verluchting stond op de laagste stand.'],
      ['Keuken', 'De keuken werd in 2022 volledig vernieuwd. Alle toestellen functioneerden. De koelkast had een kleine kras op de deur.'],
      ['Meterstanden', 'Water: 00452 — Elektriciteit: 18240. De huurder ontving twee sleutels en een badge.'],
    ],
    side: { img: 'p6_11_5', label: 'À FAIRE · 12 MIN', color: 'accent2', lines: ['**1** Quelle phrase de 2023 peut expliquer la fuite ?', '**2** Soulignez les imperfectums : réguliers ou forts ?', '**3** //werd … vernieuwd// : votre hypothèse ?'] },
    notes: "Compréhension de l’écrit : lire comme un professionnel. Modalités : lecture silencieuse 3 min, soulignement des imperfectums, puis mise en commun. L’illustration montre l’état des lieux d’entrée (badkamer, keuken, meterstanden et sleutels). Remarque : « De muren waren wit geschilderd » associe waren et le participe (état) ; ne pas la traiter comme un imperfectum ordinaire.",
  });

  d.exercise({
    title: '4 Lezen: de plaatsbeschrijving — réponses', tag: 'COUCHE 1', page: 'Livret p. 9',
    number: false, qGap: 14,
    items: [
      { q: '**1.** Quel détail de 2023 peut être lié à la fuite actuelle ?', a: '«De kraan van het bad werkte normaal, maar **druppelde lichtjes**.»' },
      { q: '**2a.** Imperfectums **réguliers** (-te / -de)', a: 'werkte · druppelde · functioneerden' },
      { q: '**2b.** Imperfectums **forts ou irréguliers**', a: 'waren · stond · had · ontving' },
      { q: '**3.** //De keuken werd in 2022 volledig vernieuwd.// Votre hypothèse ?', a: 'c’est le **passif** : //werd + participe// = « a été rénové » (séquence 6.5)' },
    ],
    traps: ['//werd// n’est pas un imperfectum ordinaire : c’est le passif.', '//had// et //was// : verbes irréguliers (hebben, zijn).', '//ontving// : fort (ontvangen).'],
    notes: "Question 1 : le robinet qui goutte en 2023 est l’indice le plus direct ; on peut accepter aussi « de verluchting stond op de laagste stand » (humidité). Question 2 : werd est exclu du classement (passif). Question 3 : accepter toute hypothèse raisonnable (« c’est une forme passive », « la cuisine a été refaite »).",
    notesA: "Reprendre au tableau les deux colonnes : réguliers (werkte, druppelde, functioneerden) et forts ou irréguliers (waren, stond, had, ontving). Signaler que « werd … vernieuwd » sera expliqué à la séquence 6.5 (séance 10). Incohérence du livret : le dialogue (p. 2) dit « vorig jaar » alors que l’état des lieux date la rénovation de 2022.",
  });

  d.exercise({
    title: '5 Zet in het imperfectum', tag: 'COUCHE 2', page: 'Livret p. 10',
    instr: 'Décrivez l’état passé : mettez les verbes à l’**imperfectum** (régulier ou fort — et attention au pluriel). Seul · 8 min.',
    items: [
      'De deur [[sloot]] (sluiten → fort) niet goed.',
      'De muren [[waren]] (zijn) in goede staat.',
      'De kraan [[druppelde]] (druppelen) al bij de intrede.',
      'De huurder [[had]] (hebben) toen geen klachten.',
      'Wij [[konden]] (kunnen) de kelder niet bezoeken, want de sleutel [[was]] (zijn) weg.',
      'Vroeger [[stond]] (staan) er een wasmachine in de badkamer.',
    ],
    traps: ['**zijn** : //was// (sg) · //waren// (pl)', '**kunnen** → //konden// (wij)', '**staan** → //stond// · **hebben** → //had//', '//druppelen// est régulier : //druppelde//'],
    notes: "Exercice 5 du livret : 8 minutes en autonomie, puis correction orale. Phrase 5 : deux verbes dans la même phrase (konden / was) ; on peut aussi accepter « Wij konden de kelder niet bezoeken, want de sleutel was kwijt ». Les verbes forts sont dans le tableau de référence (diapositive précédente).",
  });

  d.exercise({
    title: 'TAAK 2: de plaatsbeschrijving bij uittrede', tag: 'ÉCRIT', page: 'Livret p. 10', mode: 'a',
    instr: 'Le locataire précédent est parti : rédigez l’extrait **badkamer + keuken** de l’état des lieux de **sortie** (8 à 10 phrases). Pour chaque élément : l’état d’**ENTRÉE** à l’imperfectum, puis l’état de **SORTIE** au présent.',
    number: false, gap: 8,
    items: [
      { h: 'Fiche : constats' },
      { t: '**muur badkamer** → vochtvlek (30 cm)' },
      { t: '**kraan** → druppelt sterker' },
      { t: '**koelkast** → zelfde kras (geen nieuwe schade)' },
      { t: '**oven** → werkt niet meer' },
      { t: '**meterstanden** → water 00987 · elektriciteit 24102' },
    ],
    expect: ['**8 à 10 phrases**', 'Entrée : **imperfectum** (//Bij intrede was…//)', 'Sortie : **présent** (//Bij uittrede vertoont…//)', 'Relecture croisée : régulier ou fort ? contraste entrée / sortie', 'Écrit · seul puis binôme · 14 min'],
    sideW: 3.9,
    notes: "Tâche écrite : 10 min de rédaction seul, 4 min de relecture croisée. Le binôme vérifie chaque imperfectum (régulier ou fort ?) et le contraste entrée / sortie. Pour l’état d’entrée, les étudiants s’appuient sur le texte de l’exercice 4 (p. 9). L’oven n’est pas décrit dans le texte d’entrée (« alle toestellen functioneerden ») : on peut écrire « Bij intrede functioneerde de oven ».",
  });

  d.exhibit({
    title: 'TAAK 2 : exemple de corrigé', tag: 'ÉCRIT', page: 'Livret p. 10',
    label: 'MODÈLE', docTitle: 'Plaatsbeschrijving bij uittrede',
    lines: [
      ['Badkamer', 'Bij intrede **was** de muur wit. Bij uittrede **vertoont** de muur een vochtvlek van 30 cm. Bij intrede **druppelde** de kraan lichtjes. Bij uittrede **druppelt** de kraan sterker.'],
      ['Keuken', 'Bij intrede **had** de koelkast een kleine kras op de deur. Bij uittrede **heeft** de koelkast dezelfde kras: er is geen nieuwe schade. Bij intrede **functioneerde** de oven. Bij uittrede **werkt** de oven niet meer.'],
      ['Meterstanden', 'Bij intrede **waren** de meterstanden: water 00452 en elektriciteit 18240. Bij uittrede **zijn** ze: water 00987 en elektriciteit 24102.'],
    ],
    side: { label: 'À VÉRIFIER', color: 'accent3', icon: 'FaCheck', lines: ['Chaque **imperfectum** : régulier ou fort ?', '**was / waren** : accord', 'Contraste **entrée / sortie**', 'Présent : //vertoont · druppelt · werkt//'] },
    notes: "Modèle de 10 phrases : à projeter après la rédaction, pas comme corrigé unique. Les étudiants doivent aussi accepter des variantes (« vertoont » peut être remplacé par « heeft »). Points de langue : « Bij uittrede vertoont de muur » est la tournure du livret ; « er is geen nieuwe schade » (er is + indéfini) ; accord was / waren (de meterstanden waren).",
  });

  d.exhibit({
    title: 'D2 Verloren voorwerpen : le formulaire de Stef', tag: 'COUCHE 1', page: 'Livret p. 10a',
    label: 'FORMULIER', docTitle: 'Verloren voorwerpen — ingevuld door Stef',
    lines: [
      ['Voorwerp', 'een zwarte leren portefeuille. De rits was kapot en er zaten mijn identiteitskaart, mijn bankkaart en een foto van mijn zus in.'],
      ['Wanneer en waar', 'maandag rond 18.30 uur, op de tram tussen het Zuidstation en Vorst.'],
      ['Omstandigheden', 'het was erg druk en ik stond achteraan. Mijn portefeuille zat in mijn jaszak. Toen ik uitstapte, was hij weg. Ik heb mijn bankkaart meteen laten blokkeren.'],
    ],
    side: { label: 'À FAIRE', color: 'accent2', lines: ['**1** Soulignez les imperfectums et le perfectum. Lequel raconte un **événement ponctuel** ?', '**2** //Toen ik uitstapte, was hij weg.// : expliquez //toen// + imperfectum et //was hij//.'] },
    notes: "D2 : même réflexe que l’état des lieux — décrire ce qui ÉTAIT (imperfectum), raconter ce qui S’EST PASSÉ (perfectum). Lecture du formulaire, puis les deux questions en binôme (5 min). C’est le lundi de la semaine de malchance de Stef (cf. l’Avonddialoog, séance 6).",
  });

  d.exercise({
    title: 'D2 Verloren voorwerpen : réponses', tag: 'COUCHE 1', page: 'Livret p. 10a',
    number: false, qGap: 14,
    items: [
      { q: '**1.** Imperfectums (le décor)', a: 'was kapot · zaten … in · was erg druk · stond · zat · was hij weg' },
      { q: '**1.** Perfectum (action accomplie)', a: '//Ik **heb** mijn bankkaart meteen **laten blokkeren**.//' },
      { q: '**2.** Pourquoi //toen// + imperfectum ?', a: '//toen// = « quand » : un moment précis du passé ; **subordonnée** : verbe **à la fin** (//uitstapte//)' },
      { q: '**2.** Pourquoi //was hij// ?', a: 'après la subordonnée, la principale commence par le **verbe** : **inversion**' },
    ],
    notes: "Le perfectum « heb … laten blokkeren » raconte une action ponctuelle ; l’imperfectum décrit la situation (rits kapot, druk, stond, zat). « Toen ik uitstapte » : l’imperfectum après toen sert de repère ponctuel. Cette règle de l’inversion est celle de la diapositive « Toen ik langsging, was de muur nat ».",
  });

  d.table({
    title: 'D2 Zo zeg je dat : décrire un objet perdu', tag: 'WOORDENSCHAT', page: 'Livret p. 10a',
    headers: ['ZO ZEG JE DAT', 'FRANÇAIS'], colW: [6.0, 6.13], size: 17,
    rows: [
      ['Ik ben mijn sleutels kwijt.', 'J’ai perdu mes clés. (//kwijt zijn// : très courant)'],
      ['Ik heb mijn paraplu laten liggen.', 'J’ai oublié mon parapluie quelque part.'],
      ['een rugzak van stof · een tas van leer', 'un sac à dos en tissu · un sac en cuir'],
      ['Er zat een laptop in.', 'Il y avait un ordinateur portable dedans.'],
      ['Is er toevallig een gsm binnengebracht?', 'A-t-on rapporté un GSM, par hasard ?'],
      ['Welke kleur had hij? Wat zat erin?', 'De quelle couleur était-il ? Qu’y avait-il dedans ?'],
    ],
    notes: "Expressions à réutiliser dans la production qui suit. « Er zat een laptop in » : zitten à l’imperfectum pour « se trouver à l’intérieur ». « een gsm » : en Belgique, le téléphone portable. « Welke kleur had hij ? » : l’employé pose des questions à l’imperfectum.",
  });

  d.exercise({
    title: 'D2 À votre tour : mon objet perdu', tag: 'ÉCRIT', page: 'Livret p. 10a', mode: 'a',
    instr: 'Vous avez perdu ou oublié un objet. Remplissez votre formulaire en **5 à 6 phrases**, puis votre binôme joue l’employé·e et pose deux questions de précision.',
    number: false, gap: 8,
    items: [
      { h: 'Exemple (à adapter : ce doit être vrai pour vous !)' },
      { t: 'Ik ben mijn paraplu kwijt. Het **was** een grote, groene paraplu met een houten handvat.' },
      { t: 'Gisteren **zat** hij nog in mijn tas. **Toen** ik uit de bus **stapte**, **was** hij weg.' },
      { t: 'Ik **heb** hem waarschijnlijk op de bus **laten liggen**.' },
      { h: 'Questions de l’employé·e' },
      { t: '//Welke kleur had hij?// · //Wat zat erin?// · //Is er toevallig een paraplu binnengebracht?//' },
    ],
    expect: ['**5 à 6 phrases**', '**4 imperfectums** + **1 perfectum** + **1 //toen//**', 'Couleur, matière, contenu', 'Binôme : 2 questions', 'Écrit puis oral · 12 min'],
    sideW: 3.7,
    notes: "Production libre, pas de correction unique : passer dans les rangs, vérifier les imperfectums (was, zat, had, stond), l’inversion après toen et le perfectum (heb … laten liggen). Le modèle compte quatre imperfectums (was, zat, stapte, was), un perfectum et une phrase en toen. Le binôme joue l’employé : il pose deux questions (Welke kleur had hij ? Wat zat erin ?) et note les réponses.",
  });

  d.exercise({
    title: 'Verbind met toen', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Reliez les deux phrases avec //toen// : l’événement-repère passe en subordonnée (verbe à la fin). Seul · 5 min.',
    items: [
      { q: 'Ik kwam aan. + De huurder was er niet.', a: 'Toen ik **aankwam**, **was** de huurder er niet.' },
      { q: 'De loodgieter belde. + Ik zat in een vergadering.', a: 'Toen de loodgieter **belde**, **zat** ik in een vergadering.' },
      { q: 'Wij openden de kelder. + Het rook er naar schimmel.', a: 'Toen wij de kelder **openden**, **rook** het er naar schimmel.' },
      { q: 'Yasmina ging langs. + De muur was al nat.', a: 'Toen Yasmina **langsging**, **was** de muur al nat.' },
      { q: 'Ik stapte uit. + Mijn portefeuille was weg.', a: 'Toen ik **uitstapte**, **was** mijn portefeuille weg.' },
    ],
    traps: ['Après //toen …// : le **verbe d’abord** (//was de huurder//)', 'Séparables en subordonnée : //aankwam · langsging · uitstapte// (soudés)', 'Pluriel : //openden//'],
    notes: "Exercice ajouté, oral ou écrit (5 min) : il fait pratiquer la structure clé de la séquence (toen + imperfectum, inversion). Accepter l’ordre inverse : « De huurder was er niet toen ik aankwam » (même sens, pas d’inversion).",
  });

  d.closing({
    cliff: 'Séance 8 : **la plainte**. Comment rapporter ce que dit un client ? //Hij **zei dat**… · Hij **vroeg of**…// — le discours indirect, avec le verbe à la fin.',
    homework: ['Terminer la **TAAK 2** (état des lieux de sortie) ; relire les verbes forts (p. 10).', 'Apprendre le **vocabulaire de l’état des lieux** (de / het !).', 'Terminer **D2** : votre formulaire d’objet perdu (5 à 6 phrases).', 'Relire l’**Avonddialoog** et noter tous les //zei dat… · vroeg of…//'],
    exit: 'Décrivez en une phrase **votre salle de bains il y a un an** à l’imperfectum (//Vroeger was… / had… / stond…//).',
    notes: "Ticket de sortie à l’oral : une phrase par étudiant (« Vroeger had mijn badkamer een bad. »). Vérifier le choix régulier / fort et l’accord was / waren.",
  });
};
