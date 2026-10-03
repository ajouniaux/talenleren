// Séance 11 — Palier 7 · De mede-eigendom : ouverture + séquence 7.1 (les règles du jeu) — Livret p. 1–6a
exports.meta = {
  n: 11, slug: 'Regels_mede_eigendom', title: 'De regels van de mede-eigendom',
  subtitle: 'Ouverture du palier 7 — le lexique de la copropriété et l’art de le vulgariser',
  pages: 'Livret p. 1–6a', img: 'p7_01_1', time: '7.1', sceneLabel: 'SÉQUENCE',
  block: 'Palier 7 · Mede-eigendom',
  coverNotes: "Séance d’ouverture du palier 7. Objectifs : présenter les six piliers du palier, lire les deux dialogues (Dinsdagmiddag bij Immo Van Damme et l’Avonddialoog avec Nadia), installer le lexique de la copropriété (mindmap), noter les informations d’un message vocal du syndic, puis vulgariser avec des relatives, le passif et zou (TAAK 1), et transférer le tout à la vie de quartier (D1). Le palier 7 réemploie massivement les paliers 5 (relatives) et 6 (passif, zou, discours indirect).",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Comprendre et **expliquer simplement** les notions clés de la copropriété (syndic, parties communes, procuration, quotités) à un client ou à un voisin.',
    language: '//de syndicus · de gemene delen · de volmacht · de quotiteiten · De syndicus is de persoon die… · Ik zou me daar geen zorgen over maken//',
    skills: 'Lire deux dialogues · compléter une mindmap de vocabulaire · noter des mots-clés à l’écoute · vulgariser avec des relatives, le passif et zou',
    agenda: [['Rappel paliers 5–6', 7], ['Ouverture + deux dialogues (p. 1–2a)', 18], ['7.1 · lexique et mindmap (p. 3–5)', 20], ['Écoute : la voicemail du syndic', 8], ['Grammaire de vulgarisation', 7], ['TAAK 1 · De mede-eigendom uitgelegd', 18], ['D1 · Uitgelegd aan een nieuwkomer', 10], ['Bilan', 2]],
    notes: "Durées indicatives sur 90 minutes. La séance couvre les pages 1 à 6a du livret (ouverture du palier 7, séquence 7.1 et activité Dagelijks leven D1). Les séances 12 à 15 traitent ensuite les séquences 7.2 à 7.5 et la TAAK 6 finale. Si le temps manque, la mindmap peut être terminée à la maison et D1 peut se limiter à une ronde.",
  });

  d.exercise({
    title: 'Rappel des paliers 5 et 6 : relatives, passif, zou', tag: 'ÉCHAUFFEMENT', page: 'Rappel paliers 5–6',
    instr: 'Seul · 5 min, puis correction orale. Ces outils serviront toute la séance.',
    items: [
      { q: '**die / dat** : //De syndicus is de persoon. Hij beheert het gebouw.//', a: 'De syndicus is de persoon **die** het gebouw **beheert**.' },
      { q: '//Het reservefonds is het geld. We gebruiken het voor grote werken.//', a: 'Het reservefonds is het geld **dat** we voor grote werken **gebruiken**.' },
      { q: 'Passif : //Men verdeelt de kosten volgens de quotiteiten.//', a: 'De kosten **worden** volgens de quotiteiten **verdeeld**.' },
      { q: 'Rassurez avec **zou** : « Je ne m’en ferais pas de souci. »', a: 'Ik **zou** me daar geen zorgen over **maken**.' },
      { q: 'Discours indirect : Yasmina : //«De werken zijn nodig.»//', a: 'Yasmina zei dat de werken nodig **waren**.' },
    ],
    traps: ['**Relative** : le verbe conjugué part à la **fin**.', '**Passif** : //worden// + participe **à la fin**.', '**Zou** + infinitif **à la fin**.'],
    notes: "Rappel de 5 minutes des paliers 5 (relatives) et 6 (passif, zou, discours indirect). Le palier 7 réutilise ces acquis dans chaque TAAK. Si un étudiant place le verbe après le sujet dans la relative (« die beheert het gebouw »), refaire la règle : le verbe conjugué se place en dernière position.",
    notesA: "Accepter « Het reservefonds is het geld dat wij gebruiken voor grote werken » comme erreur à corriger : le verbe doit rester à la fin de la relative. Pour la phrase 5, accepter aussi « zei dat de werken noodzakelijk waren ».",
  });

  d.scene({
    title: 'Palier 7 : de la vente à la représentation', tag: 'PLAN', page: 'Livret p. 1', img: 'p7_01_1',
    text: ['**Vendre** (palier 5), **gérer** (palier 6)… et maintenant **représenter** : la moitié des biens que vous gérerez sont des appartements en copropriété.', 'Un **syndic**, une **assemblée générale**, des décisions à préparer, à défendre et à rapporter.', '**Six piliers** : ① le lexique · ② les nominalisations · ③ les connecteurs argumentatifs · ④ la concession-réfutation · ⑤ les notulen (PV) · ⑥ les quatre compétences en situation.'],
    ask: 'Que signifie « représenter » un copropriétaire à une assemblée générale ?',
    notes: "Correspondance pilier / séquence : 1 = séquence 7.1 (séance 11) ; 2 = 7.2 (séance 12) ; 3 = 7.3 (séance 13) ; 5 = 7.4 (séance 14) ; 4 = 7.5 (séance 15) ; 6 = les TAAK 1 à 6 et les activités Dagelijks leven. Réponse à la question : agir au nom d’un client, avec sa procuration (volmacht), et voter ou défendre sa position à sa place.",
  });

  d.dialogue({
    title: 'Zevende dialoog (1/2)', tag: 'DIALOOG', page: 'Livret p. 2',
    lines: [
      ['STEF', '«Yasmina, ik heb een uitnodiging gekregen van de syndicus van de Résidence Zonneberg. Waarover gaat de vergadering?»', '1'],
      ['YASMINA', '«Over de renovatie van de gevel. De beslissing werd vorig jaar uitgesteld, maar nu moet er echt een stemming komen.»', '2'],
      ['STEF', '«Wij vertegenwoordigen mevrouw Dubois, toch? Wat is haar standpunt?»', '3'],
      ['YASMINA', '«Enerzijds vindt zij de werken noodzakelijk, anderzijds vreest ze de kostprijs. De verdeling van de kosten gebeurt volgens de quotiteiten.»', '4'],
      ['STEF', '«En de andere mede-eigenaars?»', '5'],
    ],
    notes: "Première lecture par le professeur, deuxième lecture en binôme (Stef / Yasmina). Le dialogue n’est pas numéroté dans le livret : les « Focus » des séquences renvoient aux lignes 1 à 9, une ligne par réplique, comme ici. Remarque : « Wij vertegenwoordigen mevrouw Dubois, toch? » — « toch » en fin de phrase = « n’est-ce pas ? » (retour en séance 15). Faire repérer à l’oral : la convocation (uitnodiging), la décision reportée, la position de la cliente.",
  });

  d.dialogue({
    title: 'Zevende dialoog (2/2)', tag: 'DIALOOG', page: 'Livret p. 2',
    lines: [
      ['YASMINA', '«De meningen zijn verdeeld. Sommigen zijn voor het uitstellen van de werken. De syndicus daarentegen wil snel beslissen: volgens hem wordt de schade elk jaar groter.»', '6'],
      ['STEF', '«Dat klopt weliswaar, maar het offerte-onderzoek is nog niet afgerond. Zou het niet verstandiger zijn om eerst een tweede offerte te vragen?»', '7'],
      ['YASMINA', '«Goed argument! Noteer het: het vragen van een tweede offerte, vóór de stemming. Jij bereidt het standpunt voor, terwijl ik de volmacht van mevrouw Dubois regel.»', '8'],
      ['STEF', '«Prima. Ten slotte schrijf ik na de vergadering het verslag voor ons dossier. Kortom: mijn eerste algemene vergadering!»', '9'],
    ],
    legend: { label: 'FIL ROUGE DU PALIER', icon: 'FaSearch', color: 'accent5', lines: ['**7.2** //de beslissing · de stemming//', '**7.3** //enerzijds… anderzijds · daarentegen · ten slotte//', '**7.4** //werd uitgesteld// (passif)', '**7.5** //weliswaar… maar//'] },
    notes: "Chaque séquence du palier exploite des phrases de ce dialogue (colonne de droite). Coquille / remarque du livret : « het offerte-onderzoek » est un composé peu naturel ; on dirait plutôt « het onderzoek van de offertes » (l’examen des devis). Il est conservé tel quel pour rester fidèle au livret.",
  });

  d.dialogue({
    title: 'Avonddialoog : Stef en zijn buurvrouw (1/2)', tag: 'DIALOOG', page: 'Livret p. 2a',
    lines: [
      ['NADIA', '«Dag Stef! Je blauwe zak staat nog op de stoep. Is hij niet opgehaald?»', '1'],
      ['STEF', '«Nee. Er zit een sticker op: “Geweigerd wegens sorteerfout”. Wat betekent dat precies?»', '2'],
      ['NADIA', '«Dat er iets in zat dat er niet in hoort. Een glazen pot misschien? Die moet in de glasbak.»', '3'],
      ['STEF', '«Oei, dat klopt. Sorteren is hier een echte wetenschap!»', '4'],
      ['NADIA', '«Je went er wel aan. Kom je donderdag trouwens naar de vergadering van het buurtcomité?»', '5'],
      ['STEF', '«Waarover gaat die vergadering?»', '6'],
    ],
    colors: { NADIA: 'accent3' },
    notes: "Buiten het kantoor : Stef n’est plus l’agent, c’est un habitant. Le fil rouge du palier est la vie de quartier (sac poubelle refusé, comité de quartier, speelstraat). Lire à deux voix. Vocabulaire à expliquer : de stoep (le trottoir), de glasbak (la bulle à verre), de sorteerfout (l’erreur de tri). « Je blauwe zak » : le sac bleu PMC.",
  });

  d.dialogue({
    title: 'Avonddialoog : Stef en zijn buurvrouw (2/2)', tag: 'DIALOOG', page: 'Livret p. 2a',
    lines: [
      ['NADIA', '«Over de aanvraag voor een speelstraat in juli. Enerzijds vinden de jonge gezinnen het een fantastisch idee, anderzijds vrezen sommige bewoners voor hun parkeerplaats.»', '7'],
      ['STEF', '«En jij? Wat is jouw standpunt?»', '8'],
      ['NADIA', '«Ik ben voor. De straat is weliswaar een maand autovrij, maar de kinderen kunnen eindelijk veilig buiten spelen. Meneer Willems daarentegen is fel tegen.»', '9'],
      ['STEF', '«Wat de parkeerplaatsen betreft, heb ik geen probleem: ik heb alleen een fiets! Ik kom zeker.»', '10'],
      ['NADIA', '«Fijn! Na de stemming worden de notulen naar alle bewoners gestuurd.»', '11'],
      ['STEF', '«Een agenda, een stemming, notulen... Kortom: een echte algemene vergadering, maar dan met koffie en taart!»', '12'],
    ],
    colors: { NADIA: 'accent3' },
    notes: "Lecture à deux voix. Ne pas encore analyser la grammaire : les questions de la diapositive suivante servent à la repérer. Les outils de 7.2 à 7.5 sont tous présents dans ce dialogue (nominalisations, connecteurs, passif des notulen, concession).",
  });

  d.exercise({
    title: 'Avonddialoog : écoute puis repérage', tag: 'COUCHE 1', page: 'Livret p. 2a',
    instr: '1re écoute : sujets, pour / contre · 2e écoute : repérages. Seul puis par deux · 8 min.',
    number: false, gap: 2, qGap: 8,
    items: [
      { q: '**1** Les deux sujets de la conversation ?', a: '**De blauwe zak** (sorteerfout) en **de vergadering** over de **speelstraat**.' },
      { q: '**2** Qui est pour, qui est contre ?', a: '**Nadia** is voor · **meneer Willems** is fel tegen.' },
      { q: '**3** Trois nominalisations (7.2) ?', a: 'de **vergadering** · de **aanvraag** · de **stemming**' },
      { q: '**4** Trois connecteurs (7.3) ?', a: '**enerzijds… anderzijds** · **daarentegen** · **kortom**' },
      { q: '**5** Une concession (7.5) ?', a: 'De straat is **weliswaar** een maand autovrij, **maar** de kinderen kunnen eindelijk veilig buiten spelen.' },
      { q: '**6** Bonus : une speelstraat ?', a: 'Une rue **fermée aux voitures** pendant une période.' },
    ],
    notes: "Les connecteurs sont ceux des séquences 7.3 et 7.5 ; les nominalisations préparent 7.2. Réponses acceptables en plus : nominalisations « het sorteren » ; connecteurs « wat … betreft » (Stef, ligne 10). Question bonus : en Belgique, une speelstraat est une rue temporairement fermée à la circulation automobile (ici un mois, en juillet), souvent pendant les vacances d’été, pour que les enfants jouent en sécurité.",
    notesA: "Mise en commun rapide. Faire dire la concession à voix haute avec l’intonation : « weliswaar… MAAR ». Signaler que « fel tegen » = fermement opposé. Ne pas oublier : sommige bewoners vrezen aussi pour leur parkeerplaats (ligne 7).",
  });

  d.scene({
    title: 'Séquence 7.1 : les règles du jeu', tag: 'FOCUS', page: 'Livret p. 3', img: 'p7_04_2', time: '7.1', sceneLabel: 'SÉQUENCE',
    text: ['**Rendre le compliqué clair** : qui décide quoi, qui paie quoi, qui convoque qui.', '**Focus : lignes 1, 4 et 8 du dialogue**', 'Stef : «Ik heb een uitnodiging **gekregen** van de **syndicus**.»', 'Yasmina : «De **verdeling** van de kosten gebeurt volgens de **quotiteiten**.»', 'Yasmina : «…terwijl ik de **volmacht** van mevrouw Dubois regel.»'],
    ask: 'Quel mot est un faux-ami du français ?',
    notes: "Réponse : « de syndicus » ressemble à « le syndicat » (= de vakbond) alors que c’est le syndic de l’immeuble. Autres mots à expliquer : de quotiteiten (les quotités : la part de chaque copropriétaire dans les parties communes), de volmacht (la procuration). « een uitnodiging krijgen » = recevoir une convocation / invitation. Les mots seront systématisés dans la mindmap.",
  });

  d.table({
    title: '1 Mindmap : de wereld van de mede-eigendom', tag: 'COUCHE 2', page: 'Livret p. 4',
    intro: 'De mémoire, seul(e) · 3 min, puis en binôme · 3 min. Objectif : **5 mots par branche** — greffez les acquis des paliers 5 et 6.',
    headers: ['BRANCHE', 'POINT DE DÉPART (livret)', 'VOS MOTS (minimum 5)'], colW: [2.6, 5.5, 4.03], size: 16,
    rows: [
      ['**^^de^^ mensen**', 'de syndicus, de mede-eigenaar, de voorzitter, de raad van mede-eigendom…', '___'],
      ['**^^de^^ plaatsen**', 'de gemene delen, de privatieve delen, de gevel, de lift, de inkomhal…', '___'],
      ['**^^de^^ documenten**', 'de basisakte, de uitnodiging, de agenda, de notulen, de volmacht…', '___'],
      ['**^^de^^ beslissingen**', 'de stemming, de meerderheid, het voorstel, de goedkeuring…', '___'],
      ['**%%het%% geld**', 'de quotiteiten, het reservefonds, de bijdrage, de kostprijs…', '___'],
    ],
    notes: "Exercice de production libre : pas de corrigé unique. Les mots de départ viennent du livret ; la proposition de corrigé est sur les trois diapositives suivantes. Laisser les étudiants chercher d’abord seuls (3 min), puis comparer. Les mots des paliers 5 et 6 comptent : de makelaar, de eigenaar, de offerte, het bod, de huurder… (étagère ACTIVE).",
  });

  d.table({
    title: 'Mindmap : proposition de corrigé (1/2)', tag: 'WOORDENSCHAT', page: 'Livret p. 4',
    headers: ['DE MENSEN', 'FR', 'DE PLAATSEN', 'FR', 'DE DOCUMENTEN', 'FR'], colW: [2.15, 1.9, 2.15, 1.9, 2.15, 1.88], size: 14,
    headColors: ['accent2', 'accent2', 'accent3', 'accent3', 'accent1', 'accent1'],
    rows: [
      ['^^de^^ syndicus', 'le syndic', '^^de^^ gemene delen', 'les parties communes', '^^de^^ basisakte', 'l’acte de base'],
      ['^^de^^ mede-eigenaar', 'le copropriétaire', '^^de^^ privatieve delen', 'les parties privatives', '^^de^^ uitnodiging', 'la convocation'],
      ['^^de^^ voorzitter', 'le président', '^^de^^ gevel', 'la façade', '^^de^^ agenda', 'l’ordre du jour'],
      ['^^de^^ raad van mede-eigendom', 'le conseil de copropriété', '^^de^^ lift', 'l’ascenseur', '^^de^^ notulen (pl.)', 'le procès-verbal'],
      ['^^de^^ vertegenwoordiger', 'le représentant', '^^de^^ inkomhal', 'le hall d’entrée', '^^de^^ volmacht', 'la procuration'],
      ['^^de^^ notulist', 'le secrétaire de séance', '^^de^^ inkomdeur', 'la porte d’entrée', '%%het%% verslag', 'le compte rendu'],
    ],
    notes: "Couleurs : bleu = de, magenta = het. « de gemene delen » et « de notulen » sont des pluriels (de = article pluriel). Faire répéter en chœur, puis jeu rapide : le professeur dit le français, la classe répond avec l’article. « de mede-eigenaar » : un copropriétaire ; « mede » = co-. La liste n’est pas exhaustive : les étudiants ont pu trouver d’autres mots (de lift, de trap, de kelder, de plaats…).",
  });

  d.table({
    title: 'Mindmap : proposition de corrigé (2/2)', tag: 'WOORDENSCHAT', page: 'Livret p. 4',
    headers: ['DE BESLISSINGEN', 'FR', 'HET GELD', 'FR', 'DE WERKWOORDEN', 'FR'], colW: [2.15, 1.9, 2.15, 1.9, 2.15, 1.88], size: 14,
    headColors: ['accent4', 'accent4', 'accent5', 'accent5', 'accent6', 'accent6'],
    rows: [
      ['^^de^^ stemming', 'le vote', '^^de^^ quotiteiten (pl.)', 'les quotités', 'vergaderen', 'se réunir'],
      ['^^de^^ meerderheid', 'la majorité', '%%het%% reservefonds', 'le fonds de réserve', 'stemmen', 'voter'],
      ['%%het%% voorstel', 'la proposition', '^^de^^ bijdrage', 'la cotisation', 'beslissen', 'décider'],
      ['^^de^^ goedkeuring', 'l’approbation', '^^de^^ kostprijs', 'le coût', 'goedkeuren', 'approuver'],
      ['^^de^^ onthouding', 'l’abstention', '^^de^^ offerte', 'le devis', 'vertegenwoordigen', 'représenter'],
      ['^^de^^ beslissing', 'la décision', '^^de^^ kosten (pl.)', 'les frais', 'verdelen · uitstellen', 'répartir · reporter'],
    ],
    notes: "La dernière colonne (verbes) n’est pas dans le livret : elle prépare la séance 12, où chaque verbe devient un nom (stemmen → de stemming, beslissen → de beslissing, goedkeuren → de goedkeuring, verdelen → de verdeling). « goedkeuren » et « uitstellen » sont séparables. « de offerte » : le devis ou l’offre ; en immobilier aussi « het bod » (l’offre d’achat, palier 5).",
  });

  d.picture({
    title: 'Quatre notions, quatre pièges', tag: 'FAUX-AMIS', page: 'Livret p. 5', img: 'p7_06_3',
    capLabel: 'À RETENIR', capColor: 'accent3', capIcon: 'FaCheck',
    caption: ['**de syndicus** ≠ le syndicat (= //de vakbond//) : c’est le **syndic** de l’immeuble.', '**de gemene delen** : //gemeen// = « commun » ici ; ≠ « méchant » (//Hij is gemeen//).', '**de volmacht** = **vol** (plein) + **macht** (pouvoir) = la procuration.', '**de agenda** = l’ordre du jour de la réunion (//een agendapunt//).'],
    notes: "Planche d’illustration du livret : quatre cartes. Faire lire chaque carte, puis demander une phrase par carte (« De syndicus is de persoon die… »). Piège pour francophones : « syndicat » (organisation de travailleurs) se dit « de vakbond », pas « de syndicus ». « Gemeen » a deux sens : méchant, vulgaire (Hij is gemeen) et commun (de gemene delen, een gemeen belang).",
  });

  d.table({
    title: '2 Luisteren : de voicemail van de syndicus', tag: 'COUCHE 1', page: 'Livret p. 5',
    intro: 'Seul · 8 min. Vous entendez **deux fois** le message du syndic, meneer Vermeulen (transcription n° 1, lue par le professeur). Mots-clés uniquement. Solution : selon le texte lu.',
    headers: ['VERGADERFICHE — RÉSIDENCE ZONNEBERG', 'UW NOTITIES'], colW: [6.0, 6.13], size: 18,
    rows: [
      ['Datum, uur en plaats van de vergadering', '___'],
      ['Belangrijkste agendapunt', '___'],
      ['Bedrag van de offerte', '___'],
      ['Wat moet het kantoor vóór vrijdag doen?', '___'],
      ['Welke meerderheid is nodig voor de stemming?', '___'],
    ],
    notes: "Le texte de la voicemail (transcription n° 1) est dans l’annexe du dossier du professeur : il n’est pas reproduit dans le livret, la solution dépend donc du texte lu. Ne pas la deviner. Lire deux fois, à vitesse naturelle, avec une minute entre les deux lectures. Mise en commun : une ligne de la fiche par étudiant, réponse en mots-clés puis en phrase complète. Indice de cohérence avec le livret : la réunion concerne la renovatie van de gevel de la Résidence Zonneberg (offerte de 86.500 € dans la convocation de la séance 12).",
  });

  d.blocks({
    title: 'Vulgariser : relatives, passif et zou', tag: 'GRAMMATICA', page: 'Livret p. 6',
    intro: 'Pour expliquer simplement, trois outils déjà connus : la **relative**, le **passif** et **zou**. Dans chaque cas, le **verbe** s’en va **à la fin**.',
    rows: [
      { label: 'Relative (die)', cells: [{ t: 'De syndicus', role: 'S' }, { t: 'is', role: 'V' }, { t: 'de persoon', role: 'O' }, { t: 'die', role: 'C', lab: 'pronom' }, { t: 'het gebouw', role: 'O' }, { t: 'beheert', role: 'V', lab: 'verbe à la fin' }], fr: 'Le syndic est la personne qui gère l’immeuble.' },
      { label: 'Relative (waarop)', cells: [{ t: 'De vergadering', role: 'S' }, { t: 'is', role: 'V' }, { t: 'de bijeenkomst', role: 'O' }, { t: 'waarop', role: 'C', lab: 'waar + op' }, { t: 'alle eigenaars', role: 'S' }, { t: 'beslissen', role: 'V', lab: 'verbe à la fin' }], fr: 'L’assemblée est la réunion où tous les propriétaires décident.' },
      { label: 'Passif', cells: [{ t: 'De kosten', role: 'S' }, { t: 'worden', role: 'V' }, { t: 'volgens de quotiteiten', role: 'M' }, { t: 'verdeeld', role: 'F', lab: 'participe' }], fr: 'Les coûts sont répartis selon les quotités.' },
      { label: 'Zou', cells: [{ t: 'Ik', role: 'S' }, { t: 'zou', role: 'V' }, { t: 'me daar geen zorgen over', role: 'O' }, { t: 'maken', role: 'F', lab: 'infinitif' }], fr: 'Je ne m’en ferais pas de souci.' },
    ],
    foot: { kind: 'trap', text: 'En français, le verbe suit le pronom : //la personne qui **gère** l’immeuble//. En néerlandais, il part à la **fin** : //de persoon die het gebouw **beheert**//. Choix du pronom : **die** (de-woord) · **dat** (het-woord) · **waar + préposition** (choses).' },
    notes: "Rappel de grammaire des paliers 5 et 6 appliqué à la vulgarisation. « waarop » = waar + op (la réunion « sur laquelle »/« où »). Pour les choses avec préposition, on utilise waar + préposition : waarmee, waarop, waarvoor. Le syllabus n’a pas de page de grammaire séparée ici : ce point sert de pont vers la TAAK 1 et le bonus.",
  });

  d.compare({
    title: 'TAAK 1 : de mede-eigendom uitgelegd', tag: 'ORAL', page: 'Livret p. 6',
    intro: 'Jeu de rôle · **2 rondes de 5 minutes**, rôles inversés. L’observateur coche : **lexique exact** · **phrases reliées** (relatives) · **vulgarisation réussie**.',
    left: { h: 'ROL A — De makelaar (u-vorm !)', color: 'accent1', icon: 'FaUserTie', items: ['**4 notions** : syndicus, gemene delen, algemene vergadering, quotiteiten', 'Chacune avec une **relative** : //De syndicus is de persoon die het gebouw beheert.//', 'Un **passif** : //De kosten worden volgens de quotiteiten verdeeld.//', 'Rassurez avec **zou** : //Ik zou me daar geen zorgen over maken.//'] },
    right: { h: 'ROL B — De kandidaat-koper', color: 'accent2', icon: 'FaUser', items: ['Vous ne connaissez **rien** à la copropriété', '**4 questions naïves** : //Wie betaalt de lift? Moet ik naar die vergadering? Wat gebeurt er als ik niet akkoord ga?//', 'Cartes : ① acheteur pressé · ② acheteur anxieux · ③ investisseur qui ne pense qu’aux charges'] },
    max: 17,
    notes: "Modalités : binômes + un observateur si la classe est impaire. Ronde 1 : A makelaar / B candidat (carte au choix) ; ronde 2 : on inverse avec une autre carte. Rappeler le vouvoiement du makelaar : « Hebt u… ? Wilt u… ? ». Phrases-modèles de la colonne A = production attendue, à adapter. Autres relatives possibles : « De gemene delen zijn de ruimtes die alle bewoners gebruiken, zoals de lift en de inkomhal. » ; « De volmacht is het document waarmee u iemand anders laat stemmen. » ; « De quotiteiten zijn de verhoudingen waarmee de kosten worden verdeeld. » Le professeur note les erreurs récurrentes (verbe à la fin de la relative) pour la mise en commun.",
  });

  d.table({
    title: 'D1 · Zo zeg je dat : la vie pratique du quartier', tag: 'WOORDENSCHAT', page: 'Livret p. 6a',
    headers: ['NEDERLANDS', 'FRANÇAIS'], colW: [6.2, 5.93], size: 16,
    rows: [
      ['^^de^^ zak voor restafval · ^^de^^ blauwe zak', 'le sac pour déchets résiduels · le sac bleu (PMC)'],
      ['^^de^^ glasbak · %%het%% recyclagepark', 'la bulle à verre · le parc à conteneurs'],
      ['^^de^^ ophaaldag · de zak buitenzetten', 'le jour de collecte · sortir le sac'],
      ['^^de^^ fietsenberging · ^^de^^ huisregels (pl.)', 'le local vélos · le règlement d’ordre intérieur'],
      ['je adreswijziging aangeven bij de gemeente', 'déclarer son changement d’adresse à la commune'],
      ['De wijkagent komt langs.', 'L’agent de quartier passe (pour vérifier l’adresse).'],
      ['Dat mag er niet in.', 'Ça n’a pas le droit d’aller là-dedans (tri des déchets).'],
    ],
    notes: "Lexique du livret (« Zo zeg je dat »). Articles ajoutés pour l’étagère active : de zak, de glasbak, het recyclagepark, de ophaaldag, de fietsenberging, de adreswijziging, de wijkagent. « buitenzetten » est séparable : « Ik zet de zak buiten ». « Dat mag er niet in » = « Ça ne peut pas aller dedans » (« er … in » entoure le mot). Ces mots sont régionaux : adapter à la commune des étudiants (restafval = déchets résiduels ; PMC = plastique, métal, cartons à boissons).",
  });

  d.compare({
    title: 'D1 · Uitgelegd aan een nieuwkomer', tag: 'ORAL', page: 'Livret p. 6a',
    intro: 'Vulgariser = rendre le compliqué clair. Cette fois, l’expert·e, c’est vous : expliquez les règles de **votre quartier**. **2 rondes de 5 min**, rôles inversés.',
    left: { h: 'ROL A — De nieuwkomer', color: 'accent2', icon: 'FaUser', items: ['Vous venez d’emménager : vous ne savez rien', '**4 questions naïves** : //Wanneer moet ik de zak buitenzetten? Wat gebeurt er als ik me vergis? Wie controleert dat?//', 'Cartes : ① le tri des déchets · ② le règlement de l’immeuble (lift, local vélos, bruit) · ③ les démarches à la commune'] },
    right: { h: 'ROL B — De buur (de expert·e)', color: 'accent1', icon: 'FaUserTie', items: ['**4 règles** de votre quartier, chacune avec une **relative** : //De ophaaldag is de dag waarop… · Het recyclagepark is de plaats waar…//', 'Un **passif** : //De zakken worden op dinsdag opgehaald.//', 'Rassurez avec **zou** : //Ik zou me daar geen zorgen over maken.//'] },
    max: 17,
    notes: "L’observateur coche : lexique exact, relatives, vulgarisation réussie. Les étudiants qui habitent des communes différentes comparent leurs règles : même pays, autres habitudes. Modèle de réponse : « De ophaaldag is de dag waarop de gemeente het restafval ophaalt. » ; « Het recyclagepark is de plaats waar u grofvuil naartoe brengt. » ; « De blauwe zak is de zak waarin u plastic flessen en drankkartons stopt. » (waarin = waar + in). Durée : 10 minutes en tout, donc une ronde par rôle si le temps manque.",
  });

  d.exercise({
    title: 'Les relatives de la copropriété', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez avec **die · dat · waar · waarop · waarmee**. Seul · 4 min.',
    items: [
      'Het reservefonds is het geld [[dat]] de mede-eigenaars voor grote werken sparen.',
      'De algemene vergadering is de bijeenkomst [[waarop]] alle mede-eigenaars beslissen.',
      'De volmacht is het document [[waarmee]] u iemand anders laat stemmen.',
      'De inkomhal is de plaats [[waar]] de vergadering plaatsvindt.',
      'De notulist is de persoon [[die]] het verslag schrijft.',
      'De mede-eigenaars [[die]] niet kunnen komen, geven een volmacht.',
    ],
    traps: ['**die** : de-woord ou pluriel · **dat** : het-woord', '**waar + préposition** pour les choses : //waarmee, waarop//', 'Le verbe conjugué part à la **fin**.'],
    notes: "Exercice ajouté pour fixer les relatives de vulgarisation avant TAAK 1 et D1. Phrase 4 : « plaatsvinden » est séparable ; dans une subordonnée la particule se colle au verbe : « waar de vergadering plaatsvindt ». Phrase 6 : relative qui interrompt la phrase principale (le verbe de la principale « geven » arrive après la virgule).",
    notesA: "Si un étudiant écrit « waar » pour « waarop » ou « waarmee » : refaire la règle « préposition + chose = waar + préposition » (de bijeenkomst waarop… = la réunion où/sur laquelle).",
  });

  d.closing({
    cliff: 'Séance 12 : **la langue officielle**. Comment passer de //we beslissen// à //de beslissing// ? Les **nominalisations** (-ing, -heid, -teit) pour lire une convocation et écrire au syndic.',
    homework: ['Apprendre le **lexique de la copropriété** (mindmap, 25 mots avec l’article de / het).', 'Écrire **5 phrases de vulgarisation** (relatives) sur les règles de votre quartier (D1).', 'Relire le **Zevende dialoog** (p. 2) à voix haute et repérer les verbes au passif.'],
    exit: 'Expliquez en une phrase, avec une relative : **qu’est-ce que de syndicus ?**',
    notes: "Ticket de sortie à l’oral : « De syndicus is de persoon die het gebouw beheert. » (ou « …die de vergadering voorbereidt »). Vérifier que le verbe de la relative est bien à la fin.",
  });
};
