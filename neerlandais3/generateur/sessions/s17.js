// Séance 17 — Palier 8 · De schatting (Séquence 8.2 « Vergelijken » + D2) — Livret p. 7–10a
exports.meta = {
  n: 17, slug: 'Vergelijken_en_onderbouwen', title: 'Vergelijken en onderbouwen',
  subtitle: 'La comparaison approfondie : hoe … hoe …, steeds, twee keer zo … als, in vergelijking met',
  pages: 'Livret p. 7–10a', img: 'p8_09_5', time: '8.2', sceneLabel: 'SÉQUENCE',
  block: 'Palier 8 · Schatting',
  coverNotes: "Deuxième séance du palier 8. Séquence 8.2 : une estimation n’est jamais un chiffre sorti du chapeau, c’est une comparaison argumentée avec des biens semblables (les vergelijkingspunten). Les étudiants maîtrisent le comparatif et le superlatif (palier 4) ; cette séance ajoute quatre outils : hoe … hoe …, steeds + comparatif, twee keer zo … als / half zo … als, in vergelijking met. Exercice 3 (la vergelijkingstabel de la maison Janssens), TAAK 2 (la section « Vergelijkingspunten » du rapport) et D2 (trein, auto of carpool ?). Pages couvertes : p. 7 à 10a du livret.",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Comparer deux biens avec **hoe … hoe …**, **steeds + comparatif**, **twee keer zo … als**, **half zo … als**, **in vergelijking met**, et conclure par une **fourchette**.',
    language: '//hoe dichter … hoe duurder · steeds groter · twee keer zo groot als · half zo groot als · in vergelijking met · net zo / even … als//',
    skills: 'Lire un tableau de comparables · formuler corrélations et multiples · rédiger les « vergelijkingspunten » (TAAK 2) · décider à deux (D2)',
    agenda: [['Échauffement : séance 16', 6], ['8.2 : le dialogue et les outils', 12], ['Le verbe à la fin : hoe … hoe …', 10], ['Bonus : verbind de zinnen', 6], ['Ex. 3 · de vergelijkingstabel', 18], ['TAAK 2 · vergelijkingspunten', 12], ['D2 · trein, auto of carpool ?', 20], ['Bilan', 6]],
    notes: "Durées indicatives sur 90 minutes. Pages 7 à 10a du livret. Priorités si le temps manque : le tableau des outils, le bloc hoe … hoe …, l’exercice 3 et D2. La TAAK 2 (8 à 10 phrases) peut être terminée à la maison : on la présente en classe puis on projette le modèle. Le bonus peut servir d’échauffement oral avant l’exercice 3.",
  });

  d.exercise({
    title: 'Rappel séance 16 : chiffres et heures', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 16',
    instr: 'Dites ou écrivez — seul, 4 min, puis correction orale.',
    items: [
      { q: 'En chiffres : //vierhonderdzevenendertigduizend vijfhonderd euro//', a: '**€ 437.500**' },
      { q: 'À voix haute : **4,2 %** · **92 m²**', a: '**vier komma twee procent** · **tweeënnegentig vierkante meter**' },
      { q: '8.35 : l’heure de tous les jours ?', a: '**vijf over half negen**' },
      { q: '« Hij vertrekt om half negen. » Quelle heure en chiffres ?', a: '**8.30** (pas 9.30 !)' },
      { q: 'Au téléphone, vous entendez « zevenenveertig ». Que répondez-vous ?', a: '« **Dus: vier – zeven?** » (47)' },
    ],
    notes: "Rappel de la séance 16 : nombres, décimales, pourcentages et heure. Insister sur le réflexe de contrôle chiffre par chiffre. Si quelqu’un hésite sur « half negen », redessiner le cadran : half negen = à mi-chemin de neuf heures, donc 8.30.",
  });

  d.scene({
    title: 'Séquence 8.2 : vergelijken — la comparaison approfondie', tag: 'FOCUS', page: 'Livret p. 7', img: 'p8_09_5', time: '8.2', sceneLabel: 'SÉQUENCE',
    text: ['**Une estimation n’est jamais un chiffre sorti du chapeau** : c’est une comparaison avec des biens semblables.', '**Focus : lignes 3, 5 et 7**', '«Bijna **twee keer zo groot als**…» — le multiplicateur', '«**Hoe dichter** …, **hoe duurder** …» — la corrélation', '«**In vergelijking met** de buren…» — le cadrage'],
    ask: '« Twee keer zo groot als » : le double ou le triple ?',
    notes: "Réponse : le double (2 ×). Les étudiants connaissent depuis le palier 4 : groter dan, het duurst, net zo … als. Les quatre outils qui manquaient : hoe … hoe …, steeds + comparatif, twee keer zo … als / half zo … als, in vergelijking met. Les trois lignes du focus sont les lignes 3, 5 et 7 du dialogue 8 (séance 16).",
  });

  d.table({
    title: 'Les outils de la comparaison', tag: 'GRAMMATICA', page: 'Livret p. 8',
    headers: ['STRUCTURE', 'FRANÇAIS', 'EXEMPLE DU MÉTIER'],
    colW: [3.2, 2.9, 6.03], boldCol: 0,
    rows: [
      ['hoe + comp., hoe + comp.', 'plus …, plus …', 'Hoe dichter bij het station, hoe hoger de prijs.'],
      ['steeds + comparatif', 'de plus en plus', 'De vraag naar tuinen wordt steeds groter.'],
      ['twee keer zo … als', 'deux fois plus … que', 'Dit huis is twee keer zo groot als dat appartement.'],
      ['half zo … als', 'moitié moins … que', 'De tuin is half zo groot als die van de buren.'],
      ['in vergelijking met', 'en comparaison avec', 'In vergelijking met 2024 stegen de prijzen licht.'],
      ['net zo / even … als', 'aussi … que', 'De ligging is even goed als die van pand B.'],
    ],
    foot: 'Rappel palier 4 : **groter dan** (comparatif + //dan//) · **het duurst** (superlatif) · **even / net zo … als** (égalité).',
    notes: "Lire le tableau ligne par ligne et faire produire une phrase personnelle pour chaque structure (mon logement, ma rue). « Net zo / even … als » est un rappel du palier 4. Attention : « twee keer zo groot als » (multiplicateur) se construit avec zo … als, jamais avec dan. Autres multiplicateurs possibles : drie keer zo duur als, anderhalf keer zo groot als, half zo groot als. « Stegen » est l’imperfectum de stijgen (voir séance 18).",
  });

  d.blocks({
    title: 'hoe … hoe … : le verbe file en fin de membre', tag: 'GRAMMATICA', page: 'Livret p. 8',
    intro: 'Chaque membre se construit comme une **subordonnée** : le **verbe conjugué** part **à la fin**. Après « hoe + comparatif » vient le sujet.',
    rows: [
      { cells: [{ t: 'Hoe langer', role: 'C' }, { t: 'u', role: 'S' }, { t: 'wacht', role: 'V' }, { t: 'hoe meer', role: 'C' }, { t: 'de prijs', role: 'S' }, { t: 'daalt', role: 'V' }], fr: 'Plus vous attendez, plus le prix baisse.' },
      { cells: [{ t: 'Hoe dichter', role: 'C' }, { t: 'bij het park', role: 'P' }, { t: 'hoe duurder', role: 'C' }, { t: 'de woningen', role: 'S' }, { t: '(zijn)', role: 'V', lab: 'verbe omis' }], fr: 'Plus près du parc, plus chères sont les maisons.' },
      { cells: [{ t: 'De vraag naar tuinen', role: 'S' }, { t: 'wordt', role: 'V' }, { t: 'steeds groter', role: 'M', lab: 'steeds + comparatif' }], fr: 'La demande de jardins devient de plus en plus grande.' },
      { cells: [{ t: 'Dit huis', role: 'S' }, { t: 'is', role: 'V' }, { t: 'twee keer zo groot', role: 'M', lab: 'multiplicateur' }, { t: 'als dat appartement', role: 'O', lab: 'als + terme comparé' }], fr: 'Cette maison est deux fois plus grande que cet appartement.' },
    ],
    foot: { kind: 'trap', text: 'En français : //plus vous attendez, plus **baisse** le prix// ou //plus le prix **baisse**//. En néerlandais, au niveau B1 : //hoe meer de prijs **daalt**// (verbe à la fin) — évitez //hoe meer daalt de prijs//.' },
    notes: "Le livret (p. 8) précise que « le verbe file en fin de chaque membre : vos réflexes des paliers 4-5 s’appliquent ». Exemple du livret : « Hoe langer u wacht, hoe meer de prijs daalt. » Quand le verbe est une copule (zijn, worden), on peut l’omettre : « Hoe dichter bij het park, hoe duurder de woningen (zijn). » Le comparatif vient juste après « hoe » et le sujet suit. Rappel de l’illustration du livret (image p8_10_6) : l’étape 1 « hoe + comparatif », l’étape 2 « hoe + comparatif », verbe en fin de chaque membre.",
  });

  d.traps({
    title: 'Pièges : comparer en néerlandais', tag: 'PIÈGE', page: 'Livret p. 8',
    intro: 'Cinq erreurs fréquentes chez les francophones.',
    rows: [
      ['Hoe langer u wacht, hoe meer daalt de prijs.', 'Hoe langer u wacht, hoe meer de prijs daalt.', 'verbe conjugué à la fin des deux membres'],
      ['Het huis is twee keer meer groot dan het appartement.', 'Het huis is twee keer zo groot als het appartement.', 'multiplicateur : zo … als'],
      ['Het wordt meer en meer groot.', 'Het wordt steeds groter.', 'de plus en plus = steeds + comparatif'],
      ['De ligging is even goed dan die van pand B.', 'De ligging is even goed als die van pand B.', 'égalité : als (pas dan)'],
      ['in vergelijking van 2024', 'in vergelijking met 2024', 'préposition : met'],
    ],
    notes: "Erreurs calquées sur le français : « plus … plus … » donne hoe meer + inversion ; « deux fois plus grand que » donne twee keer meer groot dan ; « de plus en plus » donne meer en meer ; « aussi … que » donne dan au lieu de als. Faire corriger oralement avant de montrer la colonne de droite. Note : « twee keer groter dan » s’entend en conversation mais reste ambigu (2 × ou 3 × ?) ; on préfère « twee keer zo groot als » dans un rapport.",
  });

  d.exercise({
    title: 'Verbind de zinnen : hoe … hoe …', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Reliez les deux phrases en **une corrélation**. Seul, 5 min, puis correction orale.',
    items: [
      { q: 'De woning ligt dicht bij het station. De prijs is hoog.', a: 'Hoe **dichter** de woning bij het station **ligt**, hoe **hoger** de prijs **is**.' },
      { q: 'U wacht lang. De prijs daalt veel.', a: 'Hoe **langer** u wacht, hoe **meer** de prijs **daalt**.' },
      { q: 'De verwachting is hoog. Het gesprek is moeilijk.', a: 'Hoe **hoger** de verwachting **is**, hoe **moeilijker** het gesprek **wordt**.' },
      { q: 'De tuin is groot. De woning is duur.', a: 'Hoe **groter** de tuin **is**, hoe **duurder** de woning **is**.' },
      { q: 'Het weer is mooi. De file is lang.', a: 'Hoe **mooier** het weer **is**, hoe **langer** de file **is**.' },
    ],
    expect: ['**Hoe** + comparatif … , **hoe** + comparatif …', 'Le **verbe** part à la fin des deux membres.', 'Le comparatif vient juste après **hoe**.'],
    notes: "Bonus d’entraînement avant l’exercice 3. Phrase 3 : « wordt » peut être remplacé par « is » (le gesprek is moeilijk). Phrase 5 reprend la phrase de Lotte dans l’Avonddialoog (hoe mooier het weer, hoe langer de file). Réponses alternatives acceptées : l’ordre des deux membres peut être inversé (Hoe duurder de woning is, hoe groter de tuin is) si le sens reste cohérent.",
  });

  d.picture({
    title: '3 · De vergelijkingstabel : les trois comparables', tag: 'COUCHE 1', page: 'Livret p. 9', img: 'p8_11_7',
    capLabel: 'LES DONNÉES', capColor: 'accent2', capIcon: 'FaBuilding',
    caption: ['**Janssens** (Vredestraat 24) : 140 m², 3 slpk., keuken verouderd, tuin 60 m².', 'Prix au m² (calculé) : **A** € 3.319 · **B** € 3.486 · **C** € 3.164.', 'Analysez, puis répondez aux **4 questions**.', 'Couche 1 · seul puis binôme · 18 min'],
    notes: "Compréhension de l’écrit : l’image reprend le tableau du livret : A (Vredestraat 31, € 448.000, 135 m², 3 slpk., gerenoveerd 2024, tuin 45 m²), B (Parklaan 8, € 495.000, 142 m², 4 slpk., instapklaar, vlak bij het park), C (Molenstraat 55, € 405.000, 128 m², 3 slpk., op te frissen, geen tuin). Les prix au m² ne figurent pas dans le livret : ils sont calculés pour la discussion (448.000 ÷ 135 = 3.319 ; 495.000 ÷ 142 = 3.486 ; 405.000 ÷ 128 = 3.164). Laisser quelques minutes de lecture silencieuse avant les questions.",
  });

  d.exercise({
    title: '3 · De vergelijkingstabel (1/2)', tag: 'COUCHE 1', page: 'Livret p. 9',
    instr: 'Questions 1 et 2 · seul, puis comparez avec votre binôme.',
    items: [
      { q: '1. Complétez : Pand B is bijna ______ duurder dan pand C. (en euros ou en %)', a: 'Pand B is **€ 90.000** (ruim **22 %**) duurder dan pand C — ou, arrondi : **bijna € 100.000**.' },
      { q: '2. Formulez la corrélation du quartier avec hoe … hoe … à partir du pand B.', a: 'Hoe **dichter** een pand bij het park **ligt**, hoe **duurder** het **is**. (B : vlak bij het park, € 3.486/m².)' },
    ],
    number: false, qGap: 18, gap: 14,
    notes: "Question 1 : 495.000 − 405.000 = 90.000 € ; 90.000 ÷ 405.000 = 22,2 %. Le livret dit « bijna » alors que l’écart exact est 90.000 : accepter « € 90.000 », « ongeveer 22 % », « bijna een kwart », ou « bijna € 100.000 » (arrondi). Question 2 : accepter aussi « Hoe dichter bij het park, hoe hoger de prijs ». Vérifier que le verbe est à la fin des deux membres.",
    notesA: "Faire lire les réponses à voix haute. Question 2 : une corrélation vraie doit s’appuyer sur le tableau (B est le pand le plus proche du parc et le plus cher au m²).",
  });

  d.exercise({
    title: '3 · De vergelijkingstabel (2/2)', tag: 'COUCHE 2', page: 'Livret p. 10',
    instr: 'Questions 3 et 4 · seul, puis comparez avec votre binôme.',
    items: [
      { q: '3. Comparez le jardin Janssens (60 m²) au jardin du pand A (45 m²) avec … keer zo … als.', a: 'De tuin van Janssens is **ongeveer 1,3 keer zo groot als** die van pand A (60 m² tegenover 45 m²).' },
      { q: '4. Quel pand est le meilleur comparable ? Justifiez avec even / net zo … als et une concession (weliswaar … maar).', a: 'Pand A: het is **net zo groot als** de woning Janssens (135 m² tegenover 140 m², drie slaapkamers) en het ligt in dezelfde straat. Het is **weliswaar** gerenoveerd, **maar** de ligging en de oppervlakte zijn bijna identiek.' },
    ],
    number: false, qGap: 18, gap: 14,
    notes: "Question 3 : 60 ÷ 45 = 1,33 ; ce n’est pas un multiple entier, d’où « ongeveer 1,3 keer zo groot als » ; accepter aussi « een derde groter dan ». Question 4 : réponse libre argumentée. Pand A est le plus défendable (même rue, 135 m² contre 140 m², trois chambres, jardin), mais B (près du parc, instapklaar, 142 m²) et C (op te frissen comme la cuisine Janssens) peuvent être défendus avec des arguments chiffrés. Exiger les deux structures demandées : even / net zo … als et weliswaar … maar (concession du palier 7).",
    notesA: "Modèle de réponse, à adapter. Ne pas mettre de virgule avant « maar » à l’oral : ce détail est d’écriture. Après « maar », l’ordre reste sujet puis verbe (maar de ligging is …) : « maar » est une conjonction de coordination.",
  });

  d.checklist({
    title: 'TAAK 2 · De vergelijking op papier', tag: 'ÉCRIT', page: 'Livret p. 10',
    intro: 'Couche 2 · écrit, seul · 12 min en classe (à finir à la maison). Rédigez la section **« Vergelijkingspunten »** du rapport : **8 à 10 phrases**, avec :',
    items: [
      'au moins **quatre structures** de la séquence : hoe … hoe · steeds · twee keer / half zo … als · in vergelijking met',
      'un **comparatif ou un superlatif** du palier 4 : //groter dan · het duurst//',
      'une **relative** (palier 5) : //een pand dat … · een woning die …//',
      'un **connecteur** du palier 7 : //daarentegen · echter//',
      'une **fourchette** pour conclure : //De marktwaarde ligt tussen … en …//',
    ],
    notes: "Tâche écrite : situer la maison Janssens par rapport aux trois panden. Les étudiants cochent chaque structure au fur et à mesure. Passer dans les rangs : vérifier le verbe final dans hoe … hoe …, dan après un comparatif, als après zo, le pronom relatif (dat pour un het-woord comme pand, die pour woning). Modèle sur la diapositive suivante.",
  });

  d.exercise({
    title: 'TAAK 2 · Modèle de « Vergelijkingspunten »', tag: 'ÉCRIT', page: 'Livret p. 10', mode: 'a',
    instr: 'Modèle de 8 phrases (à adapter : vos phrases doivent être vraies pour votre dossier).',
    items: [
      { t: 'Pand A, **dat** in dezelfde straat ligt, is **net zo groot als** de woning Janssens (135 m² tegenover 140 m²).' },
      { t: 'Het is weliswaar gerenoveerd, maar de tuin is kleiner: die van Janssens is ongeveer **1,3 keer zo groot als** die van pand A.' },
      { t: 'De keuken van pand A is nieuw; die van de woning Janssens is **daarentegen** verouderd.' },
      { t: 'Pand B is **het duurste** pand van de drie: € 495.000, dus € 90.000 meer dan pand C.' },
      { t: '**Hoe dichter** een pand bij het park **ligt**, **hoe hoger** de prijs per vierkante meter: € 3.486 voor pand B tegenover € 3.164 voor pand C.' },
      { t: '**In vergelijking met** pand B is de woning Janssens iets kleiner (140 m² tegenover 142 m²) en heeft ze één slaapkamer minder.' },
      { t: 'De vraag naar tuinen wordt **steeds groter**: de tuin van 60 m² is dus een troef.' },
      { t: 'Kortom: de marktwaarde ligt tussen € 445.000 en € 465.000.' },
    ],
    gap: 7,
    notes: "Modèle de la section « Vergelijkingspunten » (8 phrases). Structures employées : net zo … als, keer zo … als, hoe … hoe …, in vergelijking met, steeds + comparatif (cinq structures de 8.2) ; superlatif het duurste (palier 4) ; relative « dat in dezelfde straat ligt » (palier 5) ; connecteur daarentegen et concession weliswaar … maar (palier 7) ; fourchette finale. Comme B est un het-woord (het pand), la relative prend « dat » ; avec « woning » (de-woord), on dirait « die ». La fourchette 445.000–465.000 est celle du rapport de la séance 18.",
  });

  d.table({
    title: 'D2 · Trein, auto of carpool ?', tag: 'COUCHE 2', page: 'Livret p. 10a',
    intro: 'Comparer, c’est le cœur de l’estimation… et de toutes nos petites décisions. Stef et Lotte hésitent : comment aller à la mer à deux, aller-retour ? (données fictives)',
    headers: ['', 'REISTIJD (enkele reis)', 'PRIJS (2 pers., heen en terug)', 'BIJZONDER'],
    colW: [2.5, 3.0, 3.1, 3.53], boldCol: 0,
    rows: [
      ['De trein', '2 u 10', '€ 62', 'lezen, slapen, geen file'],
      ['De auto', '1 u 30 zonder file, 3 u met file', '€ 90 (brandstof en parkeren)', 'flexibel, maar de E40…'],
      ['Carpoolen (app)', '2 u', '€ 30', 'goedkoop, maar vertrek om 7 uur'],
    ],
    notes: "Lecture silencieuse du tableau (données fictives), puis les questions de la diapositive suivante. Lexique : de brandstof (le carburant), het parkeren (le stationnement), de file (l’embouteillage ; « in de file staan »), carpoolen = faire du covoiturage, de enkele reis = l’aller simple. Calculs utiles : 90 ÷ 30 = 3 ; 3 u ÷ 1 u 30 = 2 ; 62 ÷ 30 ≈ 2,07.",
  });

  d.exercise({
    title: 'D2 · Trein, auto of carpool ? — questions', tag: 'COUCHE 2', page: 'Livret p. 10a',
    instr: 'Seul, 6 min, puis correction orale.',
    items: [
      { q: '1a. De auto is ______ keer zo duur als carpoolen.', a: 'De auto is **drie** keer zo duur als carpoolen (€ 90 : € 30).' },
      { q: '1b. Met file duurt de rit ______ keer zo lang als zonder file.', a: 'Met file duurt de rit **twee** keer zo lang als zonder file (3 u : 1 u 30).' },
      { q: '2. Formulez une corrélation hoe … hoe … à partir de « Bijzonder » (la file, le prix, l’heure de départ).', a: 'Hoe **meer** file er is, hoe **langer** de rit **duurt**. · Hoe **goedkoper** de reis is, hoe **vroeger** je **moet vertrekken**.' },
      { q: '3. Comparez train et carpool avec in vergelijking met et weliswaar … maar.', a: '**In vergelijking met** de trein is carpoolen **weliswaar** goedkoper (€ 30 tegenover € 62), **maar** je moet wel om 7 uur vertrekken.' },
    ],
    number: false, qGap: 10, gap: 10,
    notes: "Réponses 1a et 1b : drie / twee. Question 2 : plusieurs corrélations possibles (hoe vroeger je vertrekt, hoe minder file er is ; hoe meer personen in de auto zitten, hoe goedkoper de reis per persoon is). Vérifier le verbe final. Question 3 : « de trein is ruim twee keer zo duur als carpoolen » est une autre formulation correcte. Cette activité prépare la décision à deux de la diapositive suivante.",
  });

  d.steps({
    title: 'D2 · Décision à deux et autonomie', tag: 'ORAL', page: 'Livret p. 10a',
    intro: 'Couche 3 · binômes · 3 minutes de débat, puis un travail personnel.',
    steps: [
      { h: 'Piochez', color: 'accent2', lines: ['Chacun pioche **une contrainte** :', '① budget serré · ② pressé·e · ③ convictions écologiques.'] },
      { h: 'Défendez', color: 'accent1', lines: ['Défendez votre choix avec **au moins trois structures comparatives**.', '//hoe … hoe · twee keer zo … als · in vergelijking met//'] },
      { h: 'Accordez-vous', color: 'accent3', lines: ['Vous **devez** vous mettre d’accord :', '//Zullen we de trein nemen?//'] },
      { h: 'Autonomie', color: 'tx2', lines: ['Comparez **deux options réelles** de votre vie (deux supermarchés, deux abonnements, deux salles de sport) en **4 phrases**.'] },
    ],
    foot: { kind: 'tip', label: 'Modèle', text: '//Supermarkt A ligt half zo ver van mijn huis als supermarkt B, maar hij is twee keer zo duur. Hoe vaker ik naar B ga, hoe meer ik bespaar.//' },
    notes: "Décision à deux : 3 minutes. Tirer au sort une contrainte par étudiant ; les deux étudiants défendent chacun leur option mais doivent aboutir à un accord (« We nemen de carpool, want …»). Observer l’emploi de hoe … hoe, twee keer zo … als et in vergelijking met. L’autonomie (quatre phrases sur deux options réelles) est un travail individuel qui peut être terminé à la maison. Production libre : pas de correction unique ; 2 ou 3 étudiants lisent leurs phrases. Modèle : « Supermarkt A ligt half zo ver van mijn huis als supermarkt B, maar hij is twee keer zo duur. »",
  });

  d.closing({
    cliff: 'Séance 18 : décrire une **évolution** — //de prijzen zijn met 4,2 % gestegen// — puis lire et écrire un **schattingsverslag**.',
    homework: ['Terminer la **TAAK 2** (8 à 10 phrases) avec la fourchette finale.', '**D2** : comparer deux options réelles de votre vie en 4 phrases.', 'Apprendre les six **structures de comparaison** (p. 8), avec un exemple personnel pour chacune.'],
    exit: 'Une phrase à voix haute avec **twee keer zo … als** ou **hoe … hoe …** sur votre logement ou votre trajet.',
    notes: "Ticket de sortie oral. Exemples : « Mijn trajet is twee keer zo lang als dat van mijn collega. » ; « Hoe vroeger ik vertrek, hoe minder file er is. » Ramasser la TAAK 2 à la séance suivante si l’on souhaite une correction individuelle.",
  });
};
