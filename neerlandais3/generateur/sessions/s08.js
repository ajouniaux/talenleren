// Séance 8 — Palier 6 · De klacht (Séquence 6.3, discours indirect) — Livret p. 11–14a
exports.meta = {
  n: 8, slug: 'De_klacht', title: 'De klacht',
  subtitle: 'Le discours indirect — rapporter fidèlement les propos d’un client',
  pages: 'Livret p. 11–14a', img: 'p6_14_6', time: '6.3', sceneLabel: 'SÉQUENCE',
  block: 'Palier 6 · Verhuur en beheer',
  coverNotes: "Séance consacrée à la séquence 6.3 : le gestionnaire est un messager. On réactive dat et of (palier 4) pour rapporter une plainte : écoute du coup de téléphone de meneer De Smet (ex. 6), transformation de phrases (ex. 7), compte rendu à la propriétaire (TAAK 3), puis D3 « Wat zei de dokter ? » (la chaîne du message). Pages couvertes : p. 11 à 14a du livret.",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Rapporter les propos d’un locataire, d’une propriétaire ou d’un médecin au **discours indirect** (//zei dat · vroeg of · vroeg wanneer//).',
    language: '//Hij zei dat er een lek was.// — //Hij vroeg of we konden langskomen.// — //Hij vroeg om … te + infinitif.//',
    skills: 'Écouter une plainte (fiche) · transformer au discours indirect · faire un compte rendu à la propriétaire · chaîne du message en trio',
    agenda: [['Rappel séance 7 : imperfectum', 6], ['6.3 · dat, of, vraagwoord, om … te', 14], ['Woordenschat : plainte · verbes', 5], ['Ex. 6 Luisteren: het telefoongesprek', 12], ['Ex. 7 Rapporteer de woorden', 10], ['TAAK 3 · verslag aan de eigenaar', 15], ['D3 · Wat zei de dokter?', 18], ['Bonus · bilan', 10]],
    notes: "Durées indicatives sur 90 minutes. Pages 11 à 14a du livret. Les deux outils (dat, of) sont connus depuis le palier 4 : la difficulté nouvelle, c’est le glissement des temps (présent → imperfectum, perfectum → had + participe) et des pronoms. Les deux textes d’écoute (transcriptions n° 1 et 2) sont en annexe du dossier du professeur.",
  });

  d.exercise({
    title: 'Rappel séance 7 : l’imperfectum', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 7',
    instr: 'Mettez les verbes à l’imperfectum — seul, 4 min, puis correction orale.',
    items: [
      'De huurder [[belde]] (bellen) gisteren.',
      'De muren [[waren]] (zijn) in goede staat.',
      'Wij [[hadden]] (hebben) geen sleutel.',
      'Vroeger [[stond]] (staan) hier een wasmachine.',
      'Toen ik [[binnenkwam]] (binnenkomen), [[was]] (zijn) de keuken leeg.',
    ],
    aside: { label: 'RAPPEL', color: 'accent2', icon: 'FaLightbulb', lines: ['Régulier : stam + **-te / -de**', 'Fort : la **voyelle** change (stond, sloot)', 'Pluriel : **-en** (waren, hadden)', 'Après //toen// : **verbe d’abord**'] },
    notes: "Rappel de la séance 7 : l’imperfectum est l’outil que l’on réutilise tel quel dans le discours indirect (« Hij zei dat het lek … was »). Faire répondre à l’oral, puis projeter. Phrase 5 : binnenkomen est séparable ; soudé en subordonnée (binnenkwam).",
    notesA: "Si une erreur sur zijn apparaît (was / waren), revenir sur le tableau des verbes forts de la séance 7. Phrase 5 : toen ik binnenkwam, was de keuken leeg (inversion dans la principale).",
  });

  d.scene({
    title: 'Séquence 6.3 : rapporter les propos d’un client', tag: 'FOCUS', page: 'Livret p. 11', img: 'p6_14_6', time: '6.3', sceneLabel: 'SÉQUENCE',
    text: ['Le gestionnaire est un **messager** : le locataire se plaint à lui, il rapporte au propriétaire. Deux outils déjà connus : **dat** et **of**, verbe **à la fin**.', '**Focus : ligne 5**', '«Hij zei **dat** er een lek in de badkamer **was**.»', '«Hij vroeg **of** we snel **konden langskomen**.»'],
    ask: 'Que devient « Er is een lek » quand on le rapporte ? Où est passé le verbe ?',
    notes: "Réponse : « Er is een lek » → « Hij zei dat er een lek was » : is devient was (présent → imperfectum) et le verbe part à la fin de la subordonnée. Dans la deuxième phrase, « konden langskomen » : le modal et l’infinitif sont en fin de phrase (langskomen reste en un mot).",
  });

  d.table({
    title: 'Le client dit… vous rapportez…', tag: 'GRAMMATICA', page: 'Livret p. 12',
    headers: ['LE CLIENT DIT…', 'VOUS RAPPORTEZ…', 'OUTIL'], colW: [3.7, 4.9, 3.53], size: 17,
    rows: [
      ['«Er is een lek.»', 'Hij zei **dat** er een lek **was**.', 'affirmation → //zeggen dat//'],
      ['«Kunnen jullie langskomen?»', 'Hij vroeg **of** we **konden langskomen**.', 'question oui / non → //vragen of//'],
      ['«Wanneer komt de loodgieter?»', 'Hij vroeg **wanneer** de loodgieter **kwam**.', 'question ouverte → //vragen + vraagwoord//'],
      ['«Bel me morgen terug.»', 'Hij vroeg **om** hem morgen **terug te bellen**.', 'demande → //vragen om … te//'],
    ],
    foot: 'Deux « si » français, deux mots néerlandais : //Hij vroeg **of** de loodgieter kwam// (question) ≠ //**Als** de loodgieter komt, verwittig ik u// (condition).',
    notes: "Tableau du livret (p. 12), à lire ligne par ligne. Rappel du palier 4 : of = question indirecte oui / non ; als = condition. Faire trouver pour chaque ligne le verbe introducteur (zeggen, vragen), le mot de liaison (dat, of, vraagwoord, om) et la place du verbe.",
  });

  d.blocks({
    title: 'Discours indirect : le verbe part à la fin', tag: 'GRAMMATICA', page: 'Livret p. 12',
    intro: '**Verbe introducteur au passé** (//zei, vroeg//) → la subordonnée (**dat / of / vraagwoord**) renvoie le verbe **en fin de phrase**.',
    rows: [
      { label: 'Affirmation', cells: [{ t: 'Hij', role: 'S' }, { t: 'zei', role: 'V' }, { t: 'dat', role: 'C' }, { t: 'er een lek', role: 'O' }, { t: 'in de badkamer', role: 'P' }, { t: 'was', role: 'F' }], fr: 'Il a dit qu’il y avait une fuite dans la salle de bains.' },
      { label: 'Oui / non', cells: [{ t: 'Hij', role: 'S' }, { t: 'vroeg', role: 'V' }, { t: 'of', role: 'C' }, { t: 'we', role: 'S' }, { t: 'snel', role: 'M' }, { t: 'konden langskomen', role: 'F' }], fr: 'Il a demandé si nous pouvions passer rapidement.' },
      { label: 'Question ouverte', cells: [{ t: 'Hij', role: 'S' }, { t: 'vroeg', role: 'V' }, { t: 'wanneer', role: 'Q' }, { t: 'de loodgieter', role: 'S' }, { t: 'kwam', role: 'F' }], fr: 'Il a demandé quand le plombier venait.' },
      { label: 'Demande', cells: [{ t: 'Hij', role: 'S' }, { t: 'vroeg', role: 'V' }, { t: 'om', role: 'C' }, { t: 'hem morgen', role: 'O' }, { t: 'terug te bellen', role: 'F' }], fr: 'Il a demandé de le rappeler demain.' },
    ],
    foot: { kind: 'trap', text: 'Le français garde l’ordre direct (//il a dit qu’il **y avait**…//) ; le néerlandais **renvoie le verbe à la fin** : //dat er een lek **was**// (✗ //dat er was een lek//).' },
    notes: "Visualiser l’ordre : sujet + verbe introducteur, puis mot de liaison, puis le reste, et le verbe conjugué en dernier. Pour « om … te », l’infinitif avec te est en fin de phrase (terug te bellen, particule soudée avec te au milieu : terug + te + bellen).",
  });

  d.table({
    title: 'Ce qui change quand on rapporte', tag: 'GRAMMATICA', page: 'Livret p. 12–13',
    headers: ['QUOI', 'DISCOURS DIRECT', 'DISCOURS INDIRECT'], colW: [2.4, 4.6, 5.13], size: 17, boldCol: 0,
    rows: [
      ['Pronoms', '«**Ik** heb de kraan dichtgedraaid.»', 'Hij zei dat **hij** de kraan had dichtgedraaid.'],
      ['Présent', '«Er **is** water op de vloer.»', 'Hij zei dat er water op de vloer **was**.'],
      ['Passé', '«Ik **heb** gebeld.»', 'Hij zei dat hij **had gebeld**.'],
      ['Modaux', '«U **moet** drie dagen rusten.»', 'De dokter zei dat ik drie dagen **moest** rusten.'],
      ['Impératif', '«Bel me terug.»', 'Hij vroeg **om** hem terug **te bellen**.'],
    ],
    foot: 'Règle : **présent → imperfectum**, **perfectum → had / was + participe**, **moet → moest**. Les pronoms changent de personne.',
    notes: "Tableau de synthèse ajouté (le livret ne l’écrit pas) : il résume ce qui bouge quand on passe du direct à l’indirect, avec des exemples tirés de l’exercice 7 et de D3. Dans la subordonnée au passé : « dat hij de kraan had dichtgedraaid » ou « dichtgedraaid had » (les deux ordres sont corrects).",
  });

  d.table({
    title: 'Woordenschat : la plainte et les verbes pour rapporter', tag: 'WOORDENSCHAT', page: 'Livret p. 13 · 14a',
    headers: ['LA PLAINTE', 'FRANÇAIS', 'VERBE : INF. → IMPERFECTUM', 'FRANÇAIS'], colW: [2.6, 3.1, 3.8, 2.63], size: 16,
    rows: [
      ['^^de^^ klacht', 'la plainte', 'zeggen → zei', 'dire'],
      ['%%het%% lek', 'la fuite', 'vragen → vroeg', 'demander'],
      ['^^de^^ schimmel', 'la moisissure', 'antwoorden → antwoordde', 'répondre'],
      ['%%het%% vocht', 'l’humidité', 'vertellen → vertelde', 'raconter'],
      ['^^de^^ verwarming', 'le chauffage', 'melden → meldde', 'signaler'],
      ['^^de^^ geur', 'l’odeur', 'eisen → eiste', 'exiger'],
      ['%%het%% lawaai', 'le bruit', 'meedelen → deelde mee', 'communiquer'],
      ['^^de^^ storing', 'la panne', 'beloven → beloofde', 'promettre'],
    ],
    notes: "Colonne de gauche : les mots de la luisterfiche (ex. 6) et de D4. Colonne de droite : verbes introducteurs possibles au passé (régulier ou fort). Faire produire une phrase par verbe : « Hij beloofde dat de loodgieter morgen kwam. » « meedelen » est séparable (deelde mee ; dat hij meedeelde en subordonnée).",
  });

  d.picture({
    title: '6 Luisteren: het telefoongesprek met meneer De Smet', tag: 'COUCHE 1', page: 'Livret p. 12', img: 'p6_15_7',
    capLabel: 'ÉCOUTE · 2 FOIS', capColor: 'accent3', capIcon: 'FaHeadphones',
    caption: ['Le professeur lit **deux fois** l’appel complet du locataire avec Stef (transcription n° 2).', '**1re écoute** : cochez les problèmes mentionnés.', '**2e écoute** : notez ce que le locataire **dit**, **demande** et **exige**.', 'Vous le rapporterez dans la **TAAK 3**.'],
    notes: "Couche 1 · seul · 12 minutes en tout. Le texte lu (transcription n° 2) est en annexe du dossier du professeur et n’est pas reproduit dans le livret : lire deux fois, laisser 1 minute entre les écoutes. La solution de la luisterfiche dépend de ce texte (ne pas la deviner). L’illustration montre Stef au téléphone avec le locataire, devant le mur abîmé.",
  });

  d.table({
    title: 'Luisterfiche : la grille de l’exercice 6', tag: 'COUCHE 1', page: 'Livret p. 13',
    headers: ['LUISTERFICHE', 'UW NOTITIES'], colW: [6.8, 5.33], size: 17,
    rows: [
      ['a. Problemen (kruis aan) : ☐ lek  ☐ schimmel  ☐ verwarming  ☐ geur  ☐ lawaai  ☐ vocht', '___'],
      ['b. Wat **ZEGT** de huurder? (2 elementen)', '___'],
      ['c. Wat **VRAAGT** de huurder? (2 vragen)', '___'],
      ['d. Wat heeft hij al gedaan?', '___'],
      ['e. Welke deadline geeft hij?', '___'],
    ],
    foot: 'Correction selon le texte lu (transcription n° 2). Transformez ensuite vos notes en **discours indirect**.',
    notes: "Grille projetée pendant l’écoute et la mise en commun. Mise en commun : une ligne par étudiant, d’abord en mots-clés, puis en phrase au discours indirect (« De huurder zei dat… », « Hij vroeg of… »). Solution : selon le texte lu — le livret ne fournit pas la transcription.",
  });

  d.exercise({
    title: '7 Rapporteer de woorden van de klant', tag: 'COUCHE 2', page: 'Livret p. 13–14',
    instr: 'Transformez chaque phrase du locataire au discours indirect (verbe introducteur au **passé**). Seul · 8 min.',
    items: [
      '« Er is water op de vloer. » → Hij zei [[dat er water op de vloer was]].',
      '« Kunnen jullie vandaag nog komen? » → Hij vroeg [[of wij vandaag nog konden komen]].',
      '« Wanneer komt de loodgieter? » → Hij vroeg [[wanneer de loodgieter kwam]].',
      '« Ik heb de hoofdkraan al dichtgedraaid. » → Hij zei [[dat hij de hoofdkraan al had dichtgedraaid]].',
      '« Stuur me een bevestiging per mail. » → Hij vroeg [[om hem een bevestiging per mail te sturen]].',
    ],
    traps: ['**Verbe à la fin** : //dat … was · of … konden komen//', '//jullie// → //wij// · //me// → //hem//', 'Perfectum → **had** + participe : //had dichtgedraaid//', 'Demande : //om … te// + infinitif'],
    notes: "Exercice 7 du livret (phrases 1 à 4 p. 13, phrase 5 p. 14). Seul, 8 minutes, puis correction orale. Variantes acceptées : phrase 2 « of we vandaag nog konden komen » ; phrase 4 « dat hij de hoofdkraan al dichtgedraaid had » (les deux ordres sont corrects) ; phrase 5 « of we hem een bevestiging per mail wilden sturen ».",
    notesA: "Pour chaque phrase, faire nommer : le verbe introducteur, le mot de liaison, le temps du verbe rapporté, la place du verbe. Phrase 4 : le perfectum du discours direct devient « had + participe » (plus-que-parfait). Phrase 5 : « me » devient « hem » parce que le locuteur, dans la phrase rapportée, parle du gestionnaire.",
  });

  d.compare({
    title: 'TAAK 3: verslag aan de eigenaar', tag: 'ORAL', page: 'Livret p. 14',
    intro: 'Vous appelez mevrouw Dubois pour rapporter la plainte. **2 rondes de 5 minutes**, rôles inversés. L’observateur coche : discours indirect correct (//dat · of · vraagwoord//, verbe à la fin) · imperfectum dans le récit · registre //u//.',
    left: { h: 'ROL A — De makelaar (u-vorm !)', color: 'accent1', icon: 'FaUserTie', items: ['Rapportez l’appel avec votre **luisterfiche** : **3 discours indirects** au moins', 'Récit de votre visite à l’**imperfectum** : //Toen ik langsging, was…//', 'Terminez : //Zodra de loodgieter…, bel ik u terug.//', 'Imprévu (observateur) : elle soupçonne le locataire → restez **neutre**'] },
    right: { h: 'ROL B — Mevrouw Dubois', color: 'accent2', icon: 'FaUser', items: ['**Inquiète et un peu méfiante**', '**3 questions** au moins : //Wat zei hij precies? Sinds wanneer? Wie gaat dat betalen?//', 'Demandez une **confirmation écrite**', 'Cartes : ① pressée (voyage demain) · ② économe (devis le moins cher) · ③ à l’étranger (tout par écrit)'] },
    foot: { kind: 'tip', label: 'Imprévu', text: '//Hij zei dat hij niets verkeerd had gedaan. Dat onderzoeken we.//' },
    max: 17,
    notes: "Binômes (+ un observateur si possible). Chaque rapporteur s’appuie sur sa luisterfiche (ex. 6). L’observateur coche la grille ci-dessus. L’imprévu est glissé par l’observateur à mi-appel : mevrouw Dubois soupçonne le locataire ; la makelaar doit rester neutre et factuelle, avec un discours indirect.",
  });

  d.exercise({
    title: 'TAAK 3 : phrases-modèles pour le compte rendu', tag: 'ORAL', page: 'Livret p. 14', mode: 'a', correction: true,
    number: false, gap: 8,
    items: [
      { h: 'Rapporter l’appel (trois discours indirects)' },
      { t: 'Meneer De Smet belde gisteren. **Hij zei dat** er een lek in de badkamer was.' },
      { t: '**Hij vroeg of** we snel konden langskomen, en **hij vroeg wanneer** de loodgieter kwam.' },
      { h: 'Récit de la visite (imperfectum)' },
      { t: '**Toen** ik gisteravond langsging, **was** de muur al nat.' },
      { h: 'Imprévu et prochaine étape' },
      { t: 'Hij zei dat hij niets verkeerd had gedaan. Dat onderzoeken we.' },
      { t: 'Zodra de loodgieter het probleem heeft bekeken, bel ik u terug.' },
    ],
    expect: ['**3 discours indirects** (//dat · of · vraagwoord//)', 'Verbe **à la fin**', '**Imperfectum** dans le récit', 'Registre **u**', '2 × 5 min · observateur : coche et feedback'],
    sideW: 3.7,
    notes: "Phrases-modèles à projeter après les deux rondes. Elles reprennent le dialogue du matin (ligne 5 : « Hij zei dat er een lek in de badkamer was ») et la ligne 7 (« Toen ik gisteravond langsging, was de muur al nat »). « Dat onderzoeken we » : réponse neutre à l’imprévu. Variante pour la dernière phrase : « Zodra de loodgieter het probleem bekeken heeft, bel ik u terug ».",
  });

  d.table({
    title: 'D3 Zo zeg je dat: bij de huisarts', tag: 'WOORDENSCHAT', page: 'Livret p. 14a',
    intro: 'Dagelijks leven · Spreken. **Mardi**, Stef est malade : il va chez le médecin, puis doit tout raconter à Lotte.',
    headers: ['ZO ZEG JE DAT', 'FRANÇAIS'], colW: [6.0, 6.13], size: 17,
    rows: [
      ['Ik voel me niet lekker.', 'Je ne me sens pas bien.'],
      ['Ik heb keelpijn, hoofdpijn, koorts.', 'J’ai mal à la gorge, mal à la tête, de la fièvre.'],
      ['Ik ben verkouden. Ik hoest al drie dagen.', 'Je suis enrhumé·e. Je tousse depuis trois jours.'],
      ['een afspraak maken bij de huisarts', 'prendre rendez-vous chez le généraliste'],
      ['het voorschrift · een doktersbriefje', 'l’ordonnance · un certificat médical'],
      ['Beterschap!', 'Bon rétablissement !'],
    ],
    notes: "Expressions de la consultation. Faire répéter, puis un mini-jeu : le professeur dit un symptôme en français, les étudiants répondent « Ik heb… ». « Beterschap ! » se dit à quelqu’un de malade, comme « Bon rétablissement ».",
  });

  d.exercise({
    title: 'D3 Wat zei de dokter? Rapporteer', tag: 'COUCHE 2', page: 'Livret p. 14a',
    instr: 'Rapportez les paroles du médecin à Lotte (verbe introducteur au passé). Seul · 4 min.',
    items: [
      { q: '« Neem drie dagen rust. »', a: 'De dokter zei dat ik drie dagen rust **moest nemen**.' },
      { q: '« Hebt u koorts? »', a: 'Hij vroeg **of** ik koorts **had**.' },
      { q: '« Sinds wanneer hoest u? »', a: 'Hij vroeg **sinds wanneer** ik **hoestte**.' },
      { q: '(extra) « U moet veel water drinken. »', a: 'De dokter zei dat ik veel water **moest drinken**.' },
    ],
    traps: ['**moest** + infinitif en fin de subordonnée', '//u// → //ik// (le médecin parle à Stef)', 'Question ouverte : //sinds wanneer// + verbe à la fin'],
    notes: "Les trois premières phrases sont celles du livret (p. 14a) ; la quatrième est un ajout du professeur pour consolider moest + infinitif. Réponses du livret : « De dokter zei dat ik drie dagen rust moest nemen », « Hij vroeg of ik koorts had », « Hij vroeg sinds wanneer ik hoestte ».",
  });

  d.steps({
    title: 'D3 La chaîne du message', tag: 'ORAL', page: 'Livret p. 14a',
    intro: 'En **trio**, trois rondes, rôles tournants : **A** patient · **B** médecin · **C** Lotte, un parent ou l’employeur.',
    steps: [
      { h: 'A consulte B', n: '1', color: 'accent2', lines: ['**3 minutes**', 'B pose **3 questions**, donne **2 conseils** (mots-clés)'] },
      { h: 'A rapporte à C', n: '2', color: 'accent1', lines: ['**2 minutes**', 'A téléphone à C et rapporte **tout** au discours indirect'] },
      { h: 'C compare', n: '3', color: 'accent3', lines: ['Avec les notes de B', 'Le message est-il arrivé **intact** ?'] },
    ],
    foot: { kind: 'tip', label: 'Cartes · imprévu', text: '① la grippe (koorts, spierpijn, moe) · ② une entorse après un match de foot · ③ le rhume des foins (niezen, rode ogen). **Imprévu** : //Pardon, wat bedoelt u met…? Kunt u dat even herhalen?//' },
    notes: "Activité en trio (3 rondes, rôles tournants). A consulte B (3 min) : B pose au moins trois questions et donne deux conseils en mots-clés. Puis A téléphone à C et rapporte tout au discours indirect (2 min). C compare avec les notes de B. L’imprévu est glissé par C : le médecin emploie un mot que A ne comprend pas.",
  });

  d.exercise({
    title: 'D3 Modèle : le message rapporté à Lotte', tag: 'ORAL', page: 'Livret p. 14a', mode: 'a', correction: true,
    number: false, gap: 10,
    items: [
      { t: 'De dokter vroeg **of** ik koorts had en **sinds wanneer** ik hoestte.' },
      { t: 'Ik zei dat ik keelpijn en hoofdpijn had.' },
      { t: 'Hij zei dat ik griep had en dat ik drie dagen rust moest nemen.' },
      { t: 'Hij raadde me aan om veel water te drinken.' },
    ],
    expect: ['**3 questions** du médecin rapportées', '**2 conseils** (//zei dat … moest//)', 'Verbe **à la fin**', '//u// → //ik// : les pronoms changent'],
    sideW: 3.9,
    notes: "Modèle de message rapporté, à projeter après l’activité. Il reprend l’Avonddialoog (« De dokter zei dat ik griep had en dat ik drie dagen moest rusten »). « Hij raadde me aan om … te drinken » : aanraden (raadde aan) + om … te + infinitif.",
  });

  d.exercise({
    title: 'Rapporteer de dialoog van Yasmina en Stef', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Rapportez ces répliques du dialogue du matin (p. 2) : **Yasmina zei dat… · Stef vroeg of…**. Seul · 5 min.',
    items: [
      { q: 'Yasmina : «Ik heb goed nieuws.»', a: 'Yasmina zei dat ze goed nieuws **had**.' },
      { q: 'Yasmina : «Wil je het dossier beheren?»', a: 'Yasmina vroeg **of** Stef het dossier **wilde beheren**.' },
      { q: 'Stef : «Waarover gaat het precies?»', a: 'Stef vroeg **waarover** het precies **ging**.' },
      { q: 'Stef : «Je kijkt bezorgd.»', a: 'Stef zei dat Yasmina bezorgd **keek**.' },
      { q: 'Stef : «Is er een probleem?»', a: 'Stef vroeg **of** er een probleem **was**.' },
    ],
    traps: ['//ik// → //ze / hij// · //je// → //Yasmina//', '//is er// → //was er// : présent → imperfectum', '//waarover … ging// : verbe à la fin'],
    notes: "Exercice ajouté (5 min) : réemploi du discours indirect sur le dialogue de référence du palier. Les répliques sont simplifiées par rapport au texte (« Wil je het dossier beheren ? » pour « Zou jij het dossier willen beheren ? ») afin de ne pas anticiper zou (séance 9). Accepter « ze » ou « zij » pour Yasmina.",
  });

  d.closing({
    cliff: 'Séance 9 : **le conseil**. Comment demander poliment et conseiller ? //Zou u…? Ik zou…// — le conditionnel **zou**, avec l’infinitif à la fin.',
    homework: ['Terminer **ex. 7** et **D3** à l’écrit : 5 phrases au discours indirect.', 'Relire votre **luisterfiche** et préparer le compte rendu de la TAAK 3.', 'Apprendre les **verbes introducteurs** (zeggen, vragen, antwoorden, melden…).', 'Relire **zullen** (palier 4) : on construira zou de la même façon.'],
    exit: 'Rapportez : « Het is te laat. » (**Hij zei…**) et « Wanneer komt u? » (**Hij vroeg…**).',
    notes: "Ticket de sortie à l’oral. Réponses : « Hij zei dat het te laat was. » et « Hij vroeg wanneer ik kwam. » (ou « wanneer wij kwamen »). Vérifier le verbe en fin de subordonnée et le passage du présent à l’imperfectum.",
  });
};
