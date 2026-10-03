// Séance 16 — Palier 8 · De schatting (ouverture + Séquence 8.1 « De prospectie » + D1) — Livret p. 1–6a
exports.meta = {
  n: 16, slug: 'Prospectie_en_cijfers', title: 'De prospectie en de cijfers',
  subtitle: 'Prospecter et chiffrer : prix, surfaces, pourcentages et heures dits sans hésiter',
  pages: 'Livret p. 1–6a', img: 'p8_01_1', time: '8.1', sceneLabel: 'SÉQUENCE',
  block: 'Palier 8 · Schatting',
  coverNotes: "Première séance du palier 8, le dernier de la série : prospecter, estimer, convaincre. Objectifs : présenter les six piliers du palier, lire le dialogue d’ouverture (Yasmina et Stef préparent l’estimation de la maison de meneer Janssens) et l’Avonddialoog (Stef et Lotte planifient un week-end à la mer, fil rouge de l’activité Dagelijks leven), puis travailler la séquence 8.1 : les grands nombres, les décimales, les pourcentages et l’heure à l’oral. Exercices 1 et 2, TAAK 1 (le prospectiegesprek) et D1 (Hoe laat ? Welk spoor ? Hoeveel ?). Pages couvertes : p. 1 à 6a du livret.",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Lire et dire **à voix haute** prix, surfaces, pourcentages et heures (**€ 437.500 · 4,2 % · 92 m² · half negen**) sans inverser les chiffres, et **mener un appel de prospection**.',
    language: '//vierhonderdzevenendertigduizend · vier komma twee procent · tweeënnegentig vierkante meter · rond de · ongeveer · twee derde · half negen//',
    skills: 'Comprendre deux dialogues · noter des chiffres entendus (cijferdictee) · dire les nombres et l’heure · jouer un appel de prospection (TAAK 1)',
    agenda: [['Échauffement : paliers 5 à 7', 6], ['Le palier 8 · dialogue 8', 8], ['Avonddialoog · les chiffres du week-end', 12], ['8.1 : grands nombres, décimales, %', 12], ['Ex. 1 · cijferdictee', 8], ['Ex. 2 · Zeg het luidop', 7], ['TAAK 1 · het prospectiegesprek', 14], ['D1 · Hoe laat ? Welk spoor ?', 16], ['Bilan', 7]],
    notes: "Durées indicatives sur 90 minutes : séance dense, puisqu’elle ouvre le palier. Pages 1 à 6a du livret. Priorités si le temps manque : conserver le tableau écrit/oral, le piège 47/74, l’exercice 2, la TAAK 1 et le piège de half negen (D1). Le bonus (modèle d’appel) peut être projeté en 2 minutes, sans lecture intégrale. L’Avonddialoog n’a qu’une écoute de repérage : la correction se fait sur la diapositive.",
  });

  d.exercise({
    title: 'Rappel de la série : paliers 5 à 7', tag: 'ÉCHAUFFEMENT', page: 'Rappel paliers 5–7',
    instr: 'Les outils de la série reviennent dans ce palier. Seul, 4 min, puis correction orale.',
    items: [
      { q: 'Relative (palier 5) : //Wij hebben een woning verkocht. De woning is vergelijkbaar met de uwe.//', a: 'Wij hebben een woning verkocht **die** vergelijkbaar **is** met de uwe.' },
      { q: 'Demande polie avec **zou** (palier 6) : //Kunt u een schatting maken?//', a: '**Zou** u een schatting **kunnen** maken?' },
      { q: 'Passif (palier 6) : //Men verkoopt het huis.//', a: 'Het huis **wordt** **verkocht**.' },
      { q: 'Concession (palier 7) : //Het huis is groot. De keuken is oud.//', a: 'Het huis is **weliswaar** groot, **maar** de keuken is oud.' },
      { q: 'Superlatif (palier 4) : //Dit is het ___ huis van de straat. (duur)//', a: 'Dit is het **duurste** huis van de straat.' },
    ],
    notes: "Rappel des quatre outils du livret qui seront réemployés dans les tâches du palier : relative (palier 5), zou et passif (palier 6), concession weliswaar … maar (palier 7), comparatif/superlatif (palier 4). Adapter aux acquis réels de la dernière séance du palier 7. Phrase 1 : le verbe conjugué part en fin de relative (« die vergelijkbaar is met de uwe »). Phrase 5 : duur → duurste (e final ajouté, une seule syllabe d’appui).",
  });

  d.cards({
    title: 'Palier 8 : six piliers', tag: 'PLAN', page: 'Livret p. 1',
    perRow: 3,
    cards: [
      { h: '① LE MARCHÉ', color: 'accent2', f: 'de schatting', lines: ['^^de^^ marktprijs', '^^de^^ vierkante meter · stijgen · dalen'] },
      { h: '② LES NOMBRES', color: 'accent1', f: '€ 425.000 · 7,5 %', lines: ['Prix, surfaces, %', 'dits **sans hésiter** (8.1)'] },
      { h: '③ COMPARER', color: 'accent3', f: 'hoe … hoe …', lines: ['steeds duurder', 'twee keer zo groot als', 'in vergelijking met (8.2)'] },
      { h: '④ L’ÉVOLUTION', color: 'accent4', f: 'stijgen met 4,2 %', lines: ['dalen · verdubbelen', 'gemiddeld (8.3)'] },
      { h: '⑤ LE RAPPORT', color: 'accent5', f: 'het schattingsverslag', lines: ['Lire et conclure (8.4)', 'Défendre (8.5)'] },
      { h: '⑥ 4 COMPÉTENCES', color: 'tx2', f: 'in situatie', lines: ['Écouter · lire', 'Écrire · parler', 'Tâche finale (8.6)'] },
    ],
    notes: "Présentation des six piliers du palier (livret p. 1). Insister sur le côté « dernier palier » : autonomie maximale, la plupart des activités partent des données des étudiants (leurs trajets, leurs prix, leurs adresses). Chaque séquence se termine par une activité Dagelijks leven (D1 à D5) ; la tâche finale, TAAK 6, réunit les cinq tâches précédentes.",
  });

  d.dialogue({
    title: 'Achtste dialoog : vrijdagochtend bij Immo Van Damme', tag: 'DIALOOG', page: 'Livret p. 2',
    lines: [
      ['YASMINA', '«Stef, goed nieuws: meneer Janssens uit de Vredestraat wil zijn huis misschien verkopen. Hij vroeg of wij een schatting konden maken.»', '1'],
      ['STEF', '«Mooi! Hoe pakken we dat aan?»', '2'],
      ['YASMINA', '«We vergelijken met gelijkaardige woningen. Zijn huis is honderdveertig vierkante meter — dat is bijna twee keer zo groot als het appartement dat we vorige maand verkochten.»', '3'],
      ['STEF', '«En de markt? Ik las dat de prijzen in de wijk gestegen zijn.»', '4'],
      ['YASMINA', '«Klopt: gemiddeld met vier komma twee procent in één jaar. Hoe dichter bij het park, hoe duurder de woningen.»', '5'],
      ['STEF', '«Dus zijn huis is meer waard dan hij denkt?»', '6'],
      ['YASMINA', '«Omgekeerd, vrees ik. Hij verwacht vijfhonderdduizend euro, terwijl de vergelijkbare verkopen rond de vierhonderdvijftigduizend liggen. In vergelijking met de buren is zijn keuken verouderd.»', '7'],
      ['STEF', '«Aha. Hoe hoger de verwachting, hoe moeilijker het gesprek…»', '8'],
      ['YASMINA', '«Precies. Daarom onderbouwen we alles met cijfers. Een schatting die goed onderbouwd is, overtuigt zelfs een teleurgestelde eigenaar. Jij maakt de vergelijkingstabel, terwijl ik de marktcijfers opzoek.»', '9'],
      ['STEF', '«Oké! En daarna oefenen we het gesprek. Kortom: van de cijfers naar de opdracht!»', '10'],
    ],
    notes: "Première lecture par le professeur, deuxième lecture en binôme (Yasmina / Stef), puis inversion. Les lignes ne sont pas numérotées dans le livret ; la numérotation ci-contre (une réplique = une ligne) correspond aux « Focus » du livret : lignes 3, 5 et 7 pour la séquence 8.1 (chiffres) et pour la séquence 8.2 (comparaisons). Vocabulaire à éclaircir : gelijkaardig (BE) = vergelijkbaar ; onderbouwen = étayer ; de opdracht = le mandat (ici). Question de compréhension orale rapide : que veut meneer Janssens (€ 500.000) et que disent les ventes comparables (€ 450.000) ? Ce dialogue est le fil rouge de tout le palier : on y reviendra à chaque séquence.",
  });

  d.dialogue({
    title: 'Avonddialoog : een weekend aan zee', tag: 'DIALOOG', page: 'Livret p. 2a',
    lines: [
      ['LOTTE', '«Stef, ik heb een appartement gevonden in De Panne: honderdtwintig euro per nacht, op twee minuten van het strand!»', '1'],
      ['STEF', '«Niet slecht! Vorig jaar betaalden we negentig euro in Oostende. De prijzen zijn met een derde gestegen.»', '2'],
      ['LOTTE', '«Klopt, maar het is wel twee keer zo groot als ons hotelkamertje van vorig jaar.»', '3'],
      ['STEF', '«En hoe gaan we erheen? Met de auto?»', '4'],
      ['LOTTE', '«Liever niet. Op zaterdagochtend staat de E40 altijd vol: hoe mooier het weer, hoe langer de file!»', '5'],
      ['STEF', '«Dan nemen we de trein. Ik vertrek om tien over half negen in Brussel. Jij stapt in Gent op.»', '6'],
      ['LOTTE', '«Perfect. Heb je het weerbericht al gezien?»', '7'],
      ['STEF', '«Ja: zaterdag tweeëntwintig graden en zon, maar zondag daalt de temperatuur naar zeventien graden, met veertig procent kans op regen.»', '8'],
      ['LOTTE', '«Dan gaan we zaterdag naar het strand en zondagavond naar dat visrestaurant met vier komma vijf sterren.»', '9'],
      ['STEF', '«Gemiddeld vier komma vijf op meer dan duizend recensies? Dat wordt smullen!»', '10'],
      ['LOTTE', '«Precies. En ik betaal de eerste ronde garnaalkroketten.»', '11'],
      ['STEF', '«Afgesproken! Kortom: een weekend in cijfers… maar vooral een weekend vol zon.»', '12'],
    ],
    notes: "Fil rouge de la vie quotidienne : un week-end à la mer avec Lotte, la sœur de Stef. Cinq activités Dagelijks leven (D1 à D5) y sont rattachées : train (D1), choix du transport (D2), météo (D3), avis du restaurant (D4), addition (D5). Lecture par le professeur, livres fermés : c’est la première écoute de l’exercice suivant (notez les chiffres entendus). Lire une seconde fois en binôme pour finir. Rappel : kroketten = croquettes (de garnaalkroket) ; « Dat wordt smullen ! » = on va se régaler.",
  });

  d.table({
    title: 'Avonddialoog : les chiffres du week-end', tag: 'COUCHE 1', page: 'Livret p. 2a',
    intro: 'Couche 1 · seul puis par deux · 8 min. Livres fermés, **1re écoute** : notez tous les chiffres (au moins 8). **2e écoute** : repérez 2 comparatifs et 2 verbes d’évolution.',
    headers: ['CE QUE VOUS ENTENDEZ', 'VOUS NOTEZ'],
    colW: [4.6, 7.53], boldCol: 0,
    rows: [
      ['Prix à De Panne', '[[€ 120 per nacht, op twee minuten van het strand]]'],
      ['Prix à Oostende l’an dernier', '[[€ 90 (de prijs is met een derde gestegen)]]'],
      ['Taille vs la chambre d’hôtel', '[[twee keer zo groot]]'],
      ['Heure du train de Stef', '[[8.40 uur : tien over half negen (pas 9.40 !)]]'],
      ['Météo de samedi · de dimanche', '[[22 °C et du soleil · 17 °C, 40 % kans op regen]]'],
      ['Restaurant', '[[4,5 sterren op meer dan 1000 recensies]]'],
      ['2e écoute : deux comparatifs', '[[twee keer zo groot als · hoe mooier het weer, hoe langer de file]]'],
      ['2e écoute : deux verbes d’évolution', '[[gestegen · daalt]]'],
    ],
    notes: "Les chiffres se déduisent du texte de l’Avonddialoog (présent dans le livret). Faire écouter deux fois, puis corriger en demandant à chaque étudiant de dire le chiffre en néerlandais. Onze chiffres au total (120, 2 minutes, 90, un tiers, 2×, 8.40, 22, 17, 40 %, 4,5, plus de 1000) : l’objectif du livret est huit. Piège posé par le livret : à quelle heure part le train de Stef ? Réponse : « tien over half negen » = 8.40 (confirmée en D1, tableau des départs : De Panne 8.40). Réponses alternatives acceptées pour la 2e écoute : comparatifs = twee keer zo groot als / hoe mooier het weer, hoe langer de file ; verbes d’évolution = gestegen / daalt (dalen, stijgen).",
  });

  d.scene({
    title: 'Séquence 8.1 : de prospectie — les chiffres sans hésiter', tag: 'FOCUS', page: 'Livret p. 3', img: 'p8_04_2', time: '8.1', sceneLabel: 'SÉQUENCE',
    text: ['**Un agent qui bute sur « € 437.500 » perd son client à la troisième syllabe.**', '**Focus : lignes 3, 5 et 7**', '«…**honderdveertig vierkante meter**.» (140 m²)', '«…met **vier komma twee procent**.» (4,2 %)', '«…**rond de vierhonderdvijftigduizend**…» (≈ 450.000)'],
    ask: 'Point ou virgule pour 4,2 ? m² au pluriel ?',
    notes: "Réponses : komma (jamais « punt » à l’oral) ; vierkante meter reste au singulier après un nombre (honderdveertig vierkante meter). Annoncer que le néerlandais assemble les nombres à sa façon : les unités avant les dizaines (vijfentwintig = cinq-et-vingt). Faire remarquer les trois formes du focus : nombre + unité, décimale avec komma, approximation avec rond de. L’illustration montre Yasmina et Stef devant le tableau avec ces trois bulles.",
  });

  d.picture({
    title: 'Les nombres : français ou néerlandais ?', tag: 'À RETENIR', page: 'Livret p. 4', img: 'p8_05_3',
    capLabel: 'RÈGLES DE CONSTRUCTION', capColor: 'accent2', capIcon: 'FaCalculator',
    caption: ['**450** : quatre-cent-cinquante / **vierhonderdvijftig** : un seul mot, de gauche à droite.', 'Unités **avant** dizaines : 25 = **vijf-en-twintig**.', '**duizend** ne prend jamais de « s ».', 'Pas de « en » entre centaines et unités : //vierhonderd//zevenendertig.'],
    notes: "Lire en chœur les deux colonnes. Le nombre néerlandais s’écrit en un seul mot jusqu’à 999.999 (vierhonderdvijfentwintigduizend). Le « en » ne relie que les unités et les dizaines (zeven-en-dertig) ; entre centaines et le reste : rien. Tréma obligatoire quand « en » suit une voyelle e : tweeëntwintig, drieëntwintig, tweeënnegentig. Faire dire à la volée : 25, 47, 92, 125, 450, 437.500.",
  });

  d.table({
    title: 'À l’écrit, à l’oral : le tableau de référence', tag: 'À RETENIR', page: 'Livret p. 4',
    headers: ['À L’ÉCRIT', 'À L’ORAL', 'RAPPEL DE CONSTRUCTION'],
    colW: [2.1, 5.4, 4.63], boldCol: 1, align: ['center', 'left', 'left'],
    rows: [
      ['€ 425.000', 'vierhonderdvijfentwintigduizend euro', 'unités avant dizaines : vijf-en-twintig'],
      ['€ 437.500', 'vierhonderdzevenendertigduizend vijfhonderd euro', 'duizend sans « s », pas de « et »'],
      ['4,2 %', 'vier komma twee procent', 'décimale = komma (jamais « punt »)'],
      ['92 m²', 'tweeënnegentig vierkante meter', 'm² = vierkante meter (singulier !)'],
      ['± / rond', 'ongeveer · rond de 450.000', 'l’approximation professionnelle'],
      ['2/3', 'twee derde', 'fractions : derde, vierde, de helft (½)'],
    ],
    foot: 'Écrit : point des milliers (**437.500**) et virgule décimale (**4,2**) — l’inverse de l’anglais.',
    notes: "Tableau de référence à copier dans le cahier. À l’oral, on ne prononce pas le point des milliers : 437.500 = « vierhonderdzevenendertigduizend vijfhonderd ». Dans la colonne de droite du livret, « pas de « et » » se comprend entre « duizend » et le reste, et entre centaines et dizaines. Fractions : de helft (½), een derde, een kwart, twee derde. Faire lire chaque ligne à voix haute, d’abord le professeur, puis la classe.",
  });

  d.picture({
    title: '47 ou 74 ? Le piège de l’inversion', tag: 'PIÈGE', page: 'Livret p. 5', img: 'p8_06_4',
    capLabel: 'PIÈGE POUR FRANCOPHONES', capColor: 'accent6', capIcon: 'FaExclamationTriangle',
    caption: ['Le français dit « quatre-cent-cinquante » ; le néerlandais **retourne les deux derniers chiffres** : 47 = **zeven-en-veertig**.', 'Au téléphone, un 47 / 74 inversé = **une visite ratée**.', 'Réflexe de contrôle : répéter **chiffre par chiffre** — « **Dus: vier – zeven?** »'],
    notes: "Insister sur le réflexe de contrôle professionnel : on répète toujours un numéro ou un prix par chiffres (« Dus: vier – zeven ? »). Vérifier à l’oral : zevenenveertig = 47 ; vierenzeventig = 74. Le néerlandais place toujours l’unité avant la dizaine (4 + en + 70 = vierenzeventig), y compris pour 70 à 99. Faire écrire au tableau quelques paires piégeuses : 13/30, 14/40, 16/60, 47/74.",
  });

  d.table({
    title: '1 · Luisteren — Cijferdictee', tag: 'COUCHE 1', page: 'Livret p. 5',
    intro: 'Couche 1 · réception · seul puis binôme · 10 min. Le professeur lit **dix données du marché** (transcription n° 1) : notez-les **en chiffres**. 2e passage : vérifiez. Puis **relisez-les à voix haute** à votre binôme, qui les note à son tour.',
    headers: ['N°', 'JOUW NOTITIE', 'N°', 'JOUW NOTITIE'],
    colW: [0.9, 5.16, 0.9, 5.17], align: ['center', 'left', 'center', 'left'],
    rows: [['1.', '', '6.', ''], ['2.', '', '7.', ''], ['3.', '', '8.', ''], ['4.', '', '9.', ''], ['5.', '', '10.', '']],
    notes: "Grille projetée pendant la dictée. La transcription n° 1 (annexe du livret) n’est pas reproduite dans le livret : lire le texte du dossier du professeur, deux fois ; la solution dépend de ce texte et n’est donc pas donnée ici. À défaut d’annexe, dicter dix données du dialogue 8 et de la TAAK 1 (140 m², 4,2 %, 450.000, 500.000, 448.000 …). La « boucle du contrôle professionnel » : l’étudiant relit ses chiffres, le binôme les note, on compare.",
  });

  d.table({
    title: '2 · Zeg het luidop', tag: 'COUCHE 2', page: 'Livret p. 6',
    intro: 'Couche 2 · binôme, **chrono en main** · 7 min. À tour de rôle, lisez ces dix données à voix haute, sans note préparée : **moins de 90 secondes**, sans erreur d’inversion.',
    headers: ['N°', 'À LIRE', 'ON DIT'],
    colW: [0.7, 3.4, 8.03], align: ['center', 'left', 'left'],
    rows: [
      ['1', '€ 389.000', '[[driehonderdnegenentachtigduizend euro]]'],
      ['2', '€ 512.500', '[[vijfhonderdtwaalfduizend vijfhonderd euro]]'],
      ['3', '4,8 %', '[[vier komma acht procent]]'],
      ['4', '87 m²', '[[zevenentachtig vierkante meter]]'],
      ['5', '€ 1.150/maand', '[[elfhonderdvijftig euro per maand]]'],
      ['6', '2,5 %', '[[twee komma vijf procent]]'],
      ['7', '145 m²', '[[honderdvijfenveertig vierkante meter]]'],
      ['8', '€ 675.000', '[[zeshonderdvijfenzeventigduizend euro]]'],
      ['9', 'de helft van € 90.000', '[[de helft van negentigduizend euro (= € 45.000)]]'],
      ['10', 'twee derde van de stemmen', '[[2/3 van de stemmen (≈ 66,7 %)]]'],
    ],
    notes: "Chrono : 90 secondes pour les dix lignes, un binôme à la fois ; l’observateur écoute les inversions (negenentachtig, zevenentachtig …). Le livret présente la ligne 10 déjà écrite en toutes lettres (« twee derde van de stemmen ») : la correction montre sa forme chiffrée. Ligne 5 : « elfhonderdvijftig » est la lecture courante des prix entre 1.100 et 1.999 ; « duizend honderdvijftig » est aussi correct. Correction : faire lire chaque réponse à voix haute en chœur.",
    notesA: "Correction orale. Les erreurs typiques : 89 lu « tachtig-negen », 512.500 lu avec « en » (✗ vijfhonderd en twaalf…). Rappeler : pas de « en » entre centaines et dizaines, ni avant duizend.",
  });

  d.compare({
    title: 'TAAK 1 · Het prospectiegesprek', tag: 'ORAL', page: 'Livret p. 6',
    intro: 'Le **phoning du vendredi** : vous appelez un propriétaire dont le bien voisin vient d’être vendu. Deux rondes de 5 minutes, rôles inversés.',
    left: { h: 'Rol A — De makelaar (u-vorm !)', color: 'accent1', icon: 'FaPhoneAlt', items: ['Accrochez avec un chiffre : //Wij hebben net een woning in uw straat verkocht voor € 448.000.//', 'Proposez une schatting gratuite : //Zou u geïnteresseerd zijn in een gratis schatting?//', 'Donnez **deux données du marché** avec approximation (**rond de**, **ongeveer**)', 'Placez une **relative** : //een woning die vergelijkbaar is met de uwe//', 'Décrochez un **rendez-vous**'] },
    right: { h: 'Rol B — De eigenaar', color: 'accent2', icon: 'FaUser', items: ['Vous êtes surpris par l’appel : posez **au moins 3 questions chiffrées**', '//Hoeveel per vierkante meter?//', '//Met hoeveel procent zijn de prijzen gestegen?//', '//Hoe lang duurt zo’n verkoop gemiddeld?//', 'Cartes : ① discret (//misschien, ooit…//) ② méfiant (//hoe komt u aan mijn nummer?//) ③ pressé (compare trois agences)'] },
    mid: 'A / B',
    foot: { kind: 'tip', label: 'Observateur : cochez', text: 'chiffres fluides · approximations pro (**rond de**, **ongeveer**) · demande polie avec **zou**.' },
    notes: "Couche 3 · binômes, deux rondes de 5 minutes avec inversion des rôles (12 à 14 minutes en tout, observateur compris : prévoir des trios). Le makelaar vouvoie (u-vorm). La structure à placer est la relative de crédibilité du palier 5 : « een woning die vergelijkbaar is met de uwe » (verbe conjugué à la fin). Distribuer une carte de situation au propriétaire sans la montrer à l’agent. Passer dans les groupes : relever deux ou trois chiffres mal dits (47/74), à reprendre en fin d’activité.",
  });

  d.dialogue({
    title: 'Modèle : un appel de prospection', tag: '+ BONUS', page: 'Hors syllabus',
    colors: { EIGENAAR: 'accent3' },
    lines: [
      ['YASMINA', '«Goedemorgen mevrouw, met Yasmina van Immo Van Damme. Wij hebben net een woning in uw straat verkocht voor € 448.000.»', '1'],
      ['EIGENAAR', '«Oh? En waarom belt u mij?»', '2'],
      ['YASMINA', '«Omdat wij veel vraag hebben naar woningen die vergelijkbaar zijn met de uwe. Zou u geïnteresseerd zijn in een gratis schatting?»', '3'],
      ['EIGENAAR', '«Misschien, ooit. Hoeveel is zo’n huis ongeveer waard per vierkante meter?»', '4'],
      ['YASMINA', '«Rond de € 3.300 per vierkante meter. De prijzen in uw wijk zijn gemiddeld met 4,2 % gestegen.»', '5'],
      ['EIGENAAR', '«En hoe lang duurt zo’n verkoop gemiddeld?»', '6'],
      ['YASMINA', '«Gemiddeld rond de zeventig dagen. Mag ik donderdag om half tien langskomen?»', '7'],
      ['EIGENAAR', '«Goed, donderdag om half tien. Dus: negen uur dertig?»', '8'],
      ['YASMINA', '«Precies. Tot donderdag!»', '9'],
    ],
    notes: "Bonus : un modèle d’appel pour la TAAK 1, à projeter après les jeux de rôle (ou avant, pour les groupes en difficulté). À repérer avec la classe : le chiffre d’accroche (ligne 1), la demande polie avec zou (ligne 3), la relative « woningen die vergelijkbaar zijn met de uwe » (ligne 3), les approximations « rond de », « ongeveer », « gemiddeld » (lignes 4 à 7) et le contrôle de l’heure (ligne 8 : half tien = 9.30, comme au vertrekbord de D1). Calcul : 448.000 ÷ 135 m² ≈ 3.319 €/m² (le comparable de la séance 17).",
  });

  d.table({
    title: 'D1 · Hoe laat is het ? — half negen = 8.30 !', tag: 'PIÈGE', page: 'Livret p. 6a',
    intro: 'Les gares annoncent l’heure comme un horaire officiel ; les gens, eux, parlent autrement. Dites chaque heure **comme on le dit tous les jours**.',
    headers: ['', '8.15', '8.25', '8.30', '8.35', '8.45'],
    colW: [1.7, 2.1, 2.3, 1.9, 2.2, 1.93], align: ['left', 'center', 'center', 'center', 'center', 'center'], boldCol: 0,
    rows: [
      ['LES GENS', '[[kwart over acht]]', '[[vijf voor half negen]]', '[[half negen]]', '[[vijf over half negen]]', '[[kwart voor negen]]'],
      ['OFFICIEL', '[[acht uur vijftien]]', '[[acht uur vijfentwintig]]', '[[acht uur dertig]]', '[[acht uur vijfendertig]]', '[[acht uur vijfenveertig]]'],
    ],
    foot: '**half negen = 8 h 30**, pas 9 h 30 ! Le néerlandais compte la demi-heure vers l’heure **suivante**. Contrôle : « Dus: acht uur dertig? »',
    notes: "Le piège le plus célèbre du néerlandais pour un francophone. Dessiner un cadran au tableau : half negen = à mi-chemin de neuf heures (entre 8 h et 9 h). Les gares et la radio annoncent l’heure officielle (zeventien uur tweeënveertig = 17.42) ; la vie de tous les jours utilise kwart over / half / kwart voor. 8.25 = vijf voor half negen ; 8.35 = vijf over half negen. Faire dire d’autres heures à la volée : 7.20 (tien voor half acht), 10.40 (tien over half elf), 12.10 (tien over twaalf). Rappeler le piège posé par l’Avonddialoog : « tien over half negen » = 8.40.",
  });

  d.table({
    title: 'D1 · Het vertrekbord', tag: 'ORAL', page: 'Livret p. 6a',
    intro: 'Binômes (A et B), prix fictifs : chacun ne regarde que **sa colonne**. //Om hoe laat vertrekt de trein naar …? Op welk spoor? Hoeveel kost een retourtje?// Répondez en **heure de tous les jours** ; votre binôme note en chiffres et vérifie.',
    headers: ['BESTEMMING', 'VERTREK', 'SPOOR', 'RETOURTJE'],
    colW: [2.6, 5.0, 2.0, 2.53], align: ['left', 'left', 'center', 'center'], boldCol: 0,
    rows: [
      ['De Panne', '[[8.40 : tien over half negen]]', '[[12]]', '[[€ 31,40]]'],
      ['Oostende', '[[9.15 : kwart over negen]]', '[[9]]', '[[€ 28,60]]'],
      ['Knokke', '[[9.25 : vijf voor half tien]]', '[[15]]', '[[€ 30,20]]'],
      ['Blankenberge', '[[9.55 : vijf voor tien]]', '[[7]]', '[[€ 29,80]]'],
    ],
    notes: "Activité d’information gap, binômes, 10 minutes. Le tableau complet est projeté en correction. Bord A : De Panne 8.40 ; Oostende spoor 9 · € 28,60 ; Knokke 9.25 · € 30,20 ; Blankenberge spoor 7. Bord B : De Panne spoor 12 · € 31,40 ; Oostende 9.15 ; Knokke spoor 15 ; Blankenberge 9.55 · € 29,80. Les élèves posent les questions du livret et répondent en heure de tous les jours (« om tien over half negen »). Les prix se disent : eenendertig euro veertig (31,40) ; achtentwintig euro zestig ; dertig euro twintig ; negenentwintig euro tachtig. Correction : 8.40 confirme la réponse au piège de l’Avonddialoog (le train de Stef).",
  });

  d.table({
    title: 'Zo zeg je dat : aan het loket', tag: 'WOORDENSCHAT', page: 'Livret p. 6a',
    headers: ['NEDERLANDS', 'FRANÇAIS'],
    colW: [6.4, 5.73],
    rows: [
      ['^^de^^ trein · %%het%% enkeltje · %%het%% retourtje', 'le train · un aller simple · un aller-retour'],
      ['Waar moet ik overstappen?', 'Où dois-je changer de train ?'],
      ['De trein heeft tien minuten vertraging.', 'Le train a dix minutes de retard.'],
      ['%%het%% spoor (BE) · %%het%% perron (NL)', 'le quai, la voie'],
    ],
    foot: '**Et vous ?** Racontez votre trajet habituel en chiffres (heure, durée, prix, distance) : //Elke dinsdag vertrek ik om kwart over zes…// Votre binôme répète l’heure en chiffres.',
    notes: "Lexique du guichet. « Un enkeltje » (aller simple) et « een retourtje » sont des het-woorden en -je. Le livret indique : het spoor (BE), het perron (NL) — « op welk spoor ? » est la question habituelle en Belgique. Production libre finale : chacun présente son trajet habituel en quatre phrases chiffrées. Modèles acceptés : « Elke dinsdag vertrek ik om kwart over zes. De reis duurt tweeënveertig minuten. Een abonnement kost € 78,60 per maand. Ik woon op vijfentwintig kilometer van mijn werk. » Le binôme répète l’heure en chiffres (contrôle de la séquence 8.1). Pas de correction unique : vérifier l’heure (half !) et l’inversion du verbe après « elke dinsdag ».",
  });

  d.closing({
    cliff: 'Séance 17 : **comparer** — //hoe dichter bij het park, hoe duurder · twee keer zo groot als · in vergelijking met//. L’outil n° 1 de l’estimateur.',
    homework: ['Relire le **dialogue 8** et l’**Avonddialoog** à voix haute, chiffres compris.', 'Apprendre le tableau **écrit / oral** (p. 4) : dire dix prix de votre quotidien.', '**D1** : votre trajet habituel en chiffres, quatre phrases (heure, durée, prix, distance).', 'TAAK 1 : préparer l’autre rôle si vous n’avez joué qu’un seul.'],
    exit: 'Dites sans note : **€ 437.500 · 4,2 % · 92 m² · 8.35 uur** (heure de tous les jours).',
    notes: "Ticket de sortie oral : « vierhonderdzevenendertigduizend vijfhonderd euro · vier komma twee procent · tweeënnegentig vierkante meter · vijf over half negen ». Collecter les trajets (D1) à la séance suivante pour un contrôle rapide de l’heure.",
  });
};
