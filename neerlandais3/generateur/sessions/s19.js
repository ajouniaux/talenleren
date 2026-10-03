// Séance 19 — Palier 8 · De schatting (Séquence 8.5 « De teleurgestelde eigenaar » + D5, puis 8.6 TAAK 6) — Livret p. 16–20a
exports.meta = {
  n: 19, slug: 'Moeilijk_gesprek_en_eindtaak', title: 'Het moeilijke gesprek — eindtaak',
  subtitle: 'Défendre son estimation, puis tout jouer d’une traite : TAAK 5 et TAAK 6',
  pages: 'Livret p. 16–20a', img: 'p8_24_10', time: '8.5 · 8.6', sceneLabel: 'SÉQUENCES',
  block: 'Palier 8 · Schatting',
  coverNotes: "Dernière séance du palier 8 et de toute la série. Séquence 8.5 : le moment le plus délicat du métier, face à un propriétaire déçu (meneer Janssens attendait € 500.000, le rapport dit € 445.000–465.000) : concéder, objectiver, conseiller. Exercice 7, TAAK 5 (le moeilijke gesprek) et D5 (la note de restaurant qui ne tombe pas juste). Séquence 8.6 : la tâche finale TAAK 6, le schattingsgesprek complet — préparation (étape 1), entretien devant un autre binôme (étape 2), courriel de suivi (étape 3, à la maison) — et sa variante vie quotidienne. Pages couvertes : p. 16 à 20a du livret.",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Répondre à un propriétaire déçu (**concéder + objectiver + conseiller**), puis **jouer l’entretien complet** d’estimation, du bonjour au mandat.',
    language: '//Ik begrijp uw teleurstelling · weliswaar … maar · hoe realistischer, hoe sneller · zou … kunnen · Zou u ons de opdracht willen toevertrouwen?//',
    skills: 'Réagir à des objections (ex. 7) · jouer la TAAK 5 · corriger une addition (D5) · préparer et jouer la TAAK 6 · planifier l’opvolgingsmail',
    agenda: [['Échauffement : séance 18', 5], ['8.5 : la boîte à phrases · la concession', 10], ['Ex. 7 · reageer professioneel', 12], ['TAAK 5 · het moeilijke gesprek', 14], ['D5 · de rekening klopt niet', 12], ['TAAK 6 : consignes · étape 1', 12], ['TAAK 6 : étape 2 (l’entretien)', 20], ['Étape 3 · bilan de la série', 5]],
    notes: "Durées indicatives sur 90 minutes : séance très chargée car elle réunit la séquence 8.5 et la tâche finale. Pages 16 à 20a du livret. Priorités si le temps manque : exercice 7, TAAK 5 (une seule ronde), l’étape 1 et l’étape 2 de la TAAK 6. D5 peut se limiter à la vérification de l’addition et à un jeu de rôle court ; l’étape 3 (le courriel de 10 à 12 phrases) se fait à la maison. L’étape 2 peut être jouée en deux temps : rôles A puis B, un binôme à la fois devant l’autre.",
  });

  d.exercise({
    title: 'Rappel séance 18 : marché et rapport', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 18',
    instr: 'Seul, 4 min, puis correction orale.',
    items: [
      { q: 'De prijzen zijn ___ 4,2 % gestegen.', a: '**met**' },
      { q: 'De kans op regen verdubbelt: ___ twintig ___ veertig procent.', a: '**van** twintig **naar** veertig procent' },
      { q: 'Rapport, au passif : « On estime la valeur entre 445.000 et 465.000 €. »', a: 'De marktwaarde **wordt geschat** tussen € 445.000 **en** € 465.000.' },
      { q: 'Avec **zou** : « Rénover la cuisine pourrait augmenter la valeur de 20.000 €. »', a: 'Een vernieuwing van de keuken **zou** de waarde met € 20.000 **kunnen** verhogen.' },
      { q: 'Une moyenne : « En moyenne, une vente dure 74 jours. »', a: '**Gemiddeld** duurt een verkoop 74 dagen.' },
    ],
    notes: "Rappel de la séance 18 : met pour l’écart, van … naar pour départ → arrivée, passif du rapport avec tussen … en …, zou + infinitif en fin de phrase, gemiddeld. Ces outils servent directement dans le gesprek difficile et dans la TAAK 6.",
  });

  d.keyIdea({
    title: 'Séquence 8.5 : le moment le plus délicat du métier', tag: 'FOCUS', page: 'Livret p. 16',
    text: 'Ni céder, ni braquer : concéder, objectiver, conseiller.',
    sub: ['Meneer Janssens attendait **€ 500.000** ; votre rapport dit **€ 445.000 – 465.000**.', 'Sa déception est légitime — votre estimation aussi.', 'Concéder (palier 7) · objectiver (chiffres, séquences 8.1 à 8.3) · conseiller (zou, palier 6).'],
    icon: 'FaBalanceScale',
    notes: "Ce moment décide du mandat… et de la réputation de l’agent. Rappeler la ligne 7 du dialogue 8 (séance 16) : « Hij verwacht vijfhonderdduizend euro, terwijl de vergelijkbare verkopen rond de vierhonderdvijftigduizend liggen. » La boîte à phrases de la diapositive suivante donne cinq fonctions : accueillir l’émotion, concéder et objectiver, corréler, évoquer le risque, proposer.",
  });

  d.table({
    title: 'La boîte à phrases du gesprek difficile', tag: 'WOORDENSCHAT', page: 'Livret p. 16',
    headers: ['FONCTION', 'NEDERLANDS'],
    colW: [3.7, 8.43], boldCol: 0,
    rows: [
      ['accueillir l’émotion', 'Ik begrijp uw teleurstelling.'],
      ['concéder + objectiver', 'Uw verwachting is weliswaar begrijpelijk, maar de recente verkopen liggen rond de € 450.000.'],
      ['la corrélation qui convainc', 'Hoe realistischer de vraagprijs, hoe sneller de verkoop.'],
      ['le risque, au conditionnel', 'Een te hoge prijs zou kandidaten kunnen afschrikken.'],
      ['la proposition qui laisse le choix', 'Wat zou u ervan denken om te starten op € 469.000?'],
    ],
    foot: 'Accueillez l’émotion — **jamais la nier**. Le ton compte autant que la phrase.',
    notes: "Lire chaque phrase avec le bon ton (calme, posé), puis la faire répéter. De vraagprijs = le prix demandé ; afschrikken = dissuader, effrayer. Coquille possible du livret : « Wat zou u ervan denken om te starten op € 469.000? » est calqué sur le français ; plus idiomatique : « Wat zou u ervan vinden om te starten op € 469.000? » ou « Wat zou u ervan vinden als we starten op € 469.000? ». Les trois formulations sont comprises ; la phrase du livret est conservée sur la diapositive. Dans la 3e phrase, le verbe est omis (« Hoe realistischer de vraagprijs is, hoe sneller de verkoop verloopt »).",
  });

  d.blocks({
    title: 'Concession, corrélation, conditionnel : l’ordre des mots', tag: 'GRAMMATICA', page: 'Livret p. 16',
    intro: 'Trois structures-clés du gesprek difficile : **weliswaar … maar** (palier 7), **hoe … hoe …** (8.2) et **zou + infinitif en fin de phrase** (palier 6).',
    rows: [
      { cells: [{ t: 'Uw verwachting', role: 'S' }, { t: 'is', role: 'V' }, { t: 'weliswaar begrijpelijk', role: 'M', lab: 'concession' }, { t: 'maar', role: 'C', lab: '' }, { t: 'de verkopen', role: 'S' }, { t: 'liggen', role: 'V' }, { t: 'rond € 450.000', role: 'P', lab: 'objectif' }], fr: 'Votre attente est certes compréhensible, mais les ventes tournent autour de 450.000 €.' },
      { cells: [{ t: 'Hoe realistischer', role: 'C' }, { t: 'de vraagprijs', role: 'S' }, { t: 'is', role: 'V' }, { t: 'hoe sneller', role: 'C' }, { t: 'de verkoop', role: 'S' }, { t: 'verloopt', role: 'V' }], fr: 'Plus le prix demandé est réaliste, plus la vente est rapide.' },
      { cells: [{ t: 'Een te hoge prijs', role: 'S' }, { t: 'zou', role: 'V' }, { t: 'kandidaten', role: 'O' }, { t: 'kunnen afschrikken', role: 'F', lab: 'infinitifs en fin' }], fr: 'Un prix trop élevé pourrait décourager des candidats.' },
    ],
    foot: { kind: 'trap', text: '**maar** est une conjonction de coordination : l’ordre reste sujet puis verbe (✗ //maar de verkopen rond € 450.000 liggen//). Avec **zou**, l’infinitif part **à la fin**.' },
    notes: "Rappel de l’ordre des mots. Concession : weliswaar (V2 normal : « Uw verwachting is weliswaar begrijpelijk »), puis « maar » + proposition principale (ordre normal sujet–verbe). Corrélation : le livret élide les verbes (« Hoe realistischer de vraagprijs, hoe sneller de verkoop ») ; la version complète figure sur la diapositive. Conditionnel : zou + objet + deux infinitifs groupés en fin de phrase (kunnen afschrikken). Le piège pour francophones est de croire que « maar » (comme « omdat ») envoie le verbe à la fin : seules les conjonctions de subordination le font.",
  });

  d.exercise({
    title: '7 · Reageer professioneel', tag: 'COUCHE 2', page: 'Livret p. 16–17',
    instr: 'Répondez à chaque phrase du propriétaire déçu : une **concession** + un **argument chiffré** ou une **corrélation**. Écrivez (8 min), puis dites vos réponses **à voix haute** en binôme.',
    items: [
      { q: '« Vijfhonderdduizend, geen euro minder! »', a: 'Ik begrijp uw teleurstelling, **maar** de vergelijkbare verkopen liggen rond de € 450.000. **Hoe realistischer** de vraagprijs is, **hoe sneller** de verkoop verloopt.' },
      { q: '« De buren hebben méér gekregen voor een kleiner huis! » (pand B : vlak bij het park…)', a: 'Pand B is **weliswaar** duurder verkocht (€ 495.000), **maar** het ligt vlak bij het park, het is instapklaar en het heeft vier slaapkamers. **Hoe dichter bij het park, hoe hoger** de prijs. Uw keuken is **daarentegen** verouderd.' },
      { q: '« Dan wacht ik gewoon een jaar. »', a: 'Dat is uw goed recht, **maar** de prognose is stabiel, ongeveer + 2 %. **Hoe langer** een woning te koop staat, **hoe minder** interessant ze wordt voor kandidaten.' },
      { q: '« Een andere makelaar schatte € 490.000. »', a: 'Dat kan, **maar** waarop baseert die schatting zich? Wij baseren ons op drie recente verkopen tussen € 405.000 en € 495.000. Een te hoge prijs **zou** kandidaten **kunnen** afschrikken.' },
    ],
    number: true, qGap: 6, gap: 7,
    notes: "Coquille du livret : le titre « Reageer professionnel » est un mélange de français et de néerlandais ; en néerlandais : « Reageer professioneel ». Réponses libres, ces modèles sont indicatifs : exiger toujours une concession (« Ik begrijp … », « weliswaar … maar ») et un chiffre ou une corrélation hoe … hoe …, puis faire dire à voix haute. Item 2 : pand B (142 m², quatre chambres, instapklaar) est en fait légèrement plus grand que la maison Janssens (140 m²) : l’affirmation « voor een kleiner huis » est inexacte, argument à exploiter. Item 3 : la prévision de la marktfiche (stabiel, ≈ + 2 %) montre que le gain d’attente est faible. Item 4 : ne pas dénigrer l’autre agence ; demander ses preuves. L’accent sur « méér » est le ton du propriétaire (insistance).",
  });

  d.compare({
    title: 'TAAK 5 · Het moeilijke gesprek', tag: 'ORAL', page: 'Livret p. 17',
    intro: 'Deux rondes de **6 minutes**, rôles inversés. L’observateur coche ce qui est réussi.',
    left: { h: 'Rol A — De makelaar (u-vorm !)', color: 'accent1', icon: 'FaUserTie', items: ['Présentez la **fourchette** du rapport (TAAK 4 ou dossier Janssens)', 'Accueillez la déception, défendez vos chiffres **sans les gonfler**', 'Cherchez l’accord : un **prix de départ réaliste** + le mandat', 'Ligne rouge : jamais de prix auquel vous ne croyez pas — //Dat zou ik u niet aanraden, omdat …//'] },
    right: { h: 'Rol B — Meneer Janssens', color: 'accent2', icon: 'FaUser', items: ['Vous attendiez **€ 500.000** : jouez la déception, utilisez les **quatre objections** de l’exercice 7', 'Exigez des preuves : //Waarop baseert u zich?//', 'Cartes : ① l’affectif (il a grandi ici) ② le calculateur (il a « fait ses recherches ») ③ le pressé (mutation dans deux mois : //hoe sneller, hoe beter// joue pour vous… ou contre vous ?)'] },
    mid: 'A / B',
    foot: { kind: 'tip', label: 'L’observateur coche', text: 'émotion accueillie · concession-réfutation · **≥ 3 chiffres exacts** · corrélation **hoe … hoe …** · proposition finale avec **zou**.' },
    notes: "Couche 3 · binômes ou trios (un observateur), deux rondes de 6 minutes avec inversion des rôles : prévoir 14 minutes en tout, observateur compris. Le makelaar vouvoie (u-vorm). Distribuer au propriétaire une carte de situation que l’agent ne voit pas. Passer dans les groupes : relever les chiffres inexacts, les concessions absentes, les « maar » suivis de verbe final, puis reprendre en grand groupe.",
  });

  d.dialogue({
    title: 'Modèle : défendre son estimation', tag: '+ BONUS', page: 'Hors syllabus',
    lines: [
      ['YASMINA', '«Meneer Janssens, ik begrijp uw teleurstelling. U verwachtte € 500.000.»', '1'],
      ['JANSSENS', '«Ja, en nu hoor ik 450.000! Waarop baseert u zich?»', '2'],
      ['YASMINA', '«Op drie recente verkopen in uw wijk: € 405.000, € 448.000 en € 495.000. Uw verwachting is weliswaar begrijpelijk, maar de vergelijkbare woningen liggen rond de € 450.000.»', '3'],
      ['JANSSENS', '«De buren hebben meer gekregen voor een kleiner huis!»', '4'],
      ['YASMINA', '«Pand B ligt vlak bij het park en is instapklaar. Hoe dichter bij het park, hoe hoger de prijs. Uw keuken is daarentegen verouderd.»', '5'],
      ['JANSSENS', '«Dan wacht ik gewoon een jaar.»', '6'],
      ['YASMINA', '«Dat kan, maar hoe realistischer de vraagprijs, hoe sneller de verkoop. Een te hoge prijs zou kandidaten kunnen afschrikken.»', '7'],
      ['JANSSENS', '«En wat stelt u voor?»', '8'],
      ['YASMINA', '«Wat zou u ervan denken om te starten op € 469.000? Dan blijft er ruimte om te onderhandelen.»', '9'],
    ],
    notes: "Bonus : modèle de défense d’estimation, à projeter après la TAAK 5 (ou avant, pour les groupes qui hésitent). À repérer : accueil de l’émotion (ligne 1), objectivation chiffrée (ligne 3), concession weliswaar … maar (ligne 3), corrélation (lignes 5 et 7), risque au conditionnel (ligne 7), proposition qui laisse le choix (ligne 9). Remarquer que Yasmina ne gonfle jamais ses chiffres et ne promet pas € 500.000. Ruimte om te onderhandelen = marge de négociation.",
  });

  d.table({
    title: 'D5 · De rekening klopt niet', tag: 'ORAL', page: 'Livret p. 17a',
    intro: 'Dimanche soir, au restaurant De Zeemeeuw. L’addition ne correspond pas à ce que Stef et Lotte ont mangé. **Trouvez les deux erreurs**, calculez le bon total et dites-le à voix haute.',
    headers: ['WAT ZE BESTELDEN', 'DE REKENING', 'KLOPT HET ?'],
    colW: [3.9, 4.5, 3.73], boldCol: 0,
    rows: [
      ['2 × mosselen met friet', '2 × mosselen met friet · € 59,00', '[[ja ✓]]'],
      ['1 × garnaalkroketten (om te delen)', '2 × garnaalkroketten · € 33,60', '[[nee : 1 × € 16,80]]'],
      ['2 × pintje', '3 × pintje · € 11,40', '[[nee : 2 × € 7,60]]'],
      ['1 × fles bruisend water', '1 × fles bruisend water · € 6,50', '[[ja ✓]]'],
      ['1 × dame blanche', '1 × dame blanche · € 9,50', '[[ja ✓]]'],
      ['', 'TOTAAL · € 120,00', '[[€ 99,40]]'],
    ],
    notes: "Activité de vérification, 3 minutes. L’addition imprimée est arithmétiquement juste (59,00 + 33,60 + 11,40 + 6,50 + 9,50 = 120,00) mais elle contient deux lignes de trop : deux portions de kroketten au lieu d’une (16,80 × 2) et trois pintjes au lieu de deux (3,80 × 3). Bon total : 59,00 + 16,80 + 7,60 + 6,50 + 9,50 = 99,40 € ; à dire : « negenennegentig euro veertig ». Si seule l’erreur des kroketten est réelle (carte ② : Lotte a commandé un troisième pintje au bar), le total est 103,20 €. Le livret regroupe « 1 × fles bruisend water, 1 × dame blanche » sur une seule ligne ; ici deux lignes pour la lisibilité.",
  });

  d.table({
    title: 'Zo zeg je dat : op het moment van betalen', tag: 'WOORDENSCHAT', page: 'Livret p. 17a',
    headers: ['NEDERLANDS', 'FRANÇAIS'],
    colW: [6.4, 5.73],
    rows: [
      ['^^de^^ rekening · %%het%% wisselgeld · ^^de^^ ober · ^^de^^ serveerster', 'l’addition · la monnaie · le serveur · la serveuse'],
      ['Ik denk dat er een fout in de rekening staat.', 'Je crois qu’il y a une erreur dans l’addition.'],
      ['We hebben maar één portie gehad.', 'Nous n’avons eu qu’une portion.'],
      ['Mogen we apart betalen? Kan het met de kaart?', 'Pouvons-nous payer séparément ? Par carte ?'],
      ['Houd het wisselgeld maar.', 'Gardez la monnaie.'],
    ],
    notes: "Lexique de l’addition. « Ik denk dat er een fout in de rekening staat » : après « dat », le verbe est à la fin (staat). « Maar één portie » = seulement une portion (maar = slechts). « Houd het wisselgeld maar » : l’impératif de politesse avec « maar » = gardez, ce n’est pas nécessaire.",
  });

  d.compare({
    title: 'D5 · Rollenspel : de klant en de ober', tag: 'ORAL', page: 'Livret p. 17a',
    intro: 'Même mécanique que face au propriétaire déçu : garder son calme, **objectiver avec des chiffres exacts**, proposer.',
    left: { h: 'Rol A — De klant', color: 'accent1', icon: 'FaUser', items: ['Signalez les erreurs avec les **chiffres exacts**, sans vous énerver', 'Concédez : //U hebt het weliswaar druk, maar …//', 'Proposez : //Zou u de rekening kunnen aanpassen?//', 'Autonomie : rejouez la scène avec **une situation vécue** (ticket de supermarché, facture de téléphone…)'] },
    right: { h: 'Rol B — De ober, de serveerster', color: 'accent2', icon: 'FaUserTie', items: ['Accueillez l’émotion : //Ik begrijp uw ergernis.//', 'Vérifiez, corrigez, puis proposez un geste avec **zou** : //Zou ik u een koffie mogen aanbieden?//', 'Cartes : ① les deux erreurs sont réelles ② une seule l’est : Lotte a commandé un **troisième pintje au bar** ! Défendez ce point avec les faits ③ vous êtes nouveau·elle et stressé·e, le client doit rester patient'] },
    mid: 'A / B',
    notes: "Jeu de rôle en binômes, 2 × 4 minutes. Cartes de situation pour le serveur : ① les deux erreurs sont réelles ; ② une seule l’est (le troisième pintje a bien été pris au bar : le serveur le défend avec les faits) ; ③ le serveur est nouveau et stressé, le client doit rester patient. Phrases utiles : « Ik denk dat er een fout in de rekening staat. », « We hebben maar één portie gehad. », « Dat klopt, mijn excuses. » Autonomie : rejouer la scène avec un ticket ou une facture que l’étudiant a réellement reçu.",
  });

  d.picture({
    title: 'TAAK 6 · Het schattingsgesprek', tag: 'FOCUS', page: 'Livret p. 18', img: 'p8_24_10',
    capLabel: 'VOTRE MISSION FINALE', capColor: 'accent1', capIcon: 'FaFlag',
    caption: ['Tout jouer **d’une traite** : l’entretien d’évaluation complet chez le propriétaire, du bonjour au **mandat signé**.', 'TAAK 1 prospecter · 2 comparer · 3 marché · 4 rapport · 5 défendre.', '**① De voorbereiding · ② Het gesprek · ③ De opvolgingsmail**'],
    notes: "Séquence 8.6 : la tâche finale de la série des paliers 5 à 8 ; tout le néerlandais professionnel en une visite. Les trois étapes : préparation en binôme (étape 1), entretien complet devant un autre binôme (étape 2), courriel de suivi à la maison (étape 3). L’illustration montre l’agent et le couple propriétaire autour des documents du rapport.",
  });

  d.table({
    title: 'TAAK 6 · Étape 1 : de voorbereiding', tag: 'MÉTHODE', page: 'Livret p. 18–19',
    intro: 'Binôme · 12 min. Choisissez un dossier (**Janssens**, **Forest** ou un bien inventé) et préparez, **en mots-clés uniquement** : grille de comparaison (3 comparables), statistiques, fourchette, **pitch de l’agence**. Cochez la checklist.',
    headers: ['CHECKLIST DE RÉEMPLOI', 'MIN.', '✓'],
    colW: [9.2, 1.4, 1.53], align: ['left', 'center', 'center'],
    rows: [
      ['Chiffres à l’oral (prix, m², %, moyennes) : fluides et exacts', '8', '☐'],
      ['Structures comparatives (hoe … hoe, twee keer zo … als, in vergelijking met, steeds)', '4', '☐'],
      ['Verbes d’évolution (stijgen / dalen met, verdubbelen, stabiel blijven)', '3', '☐'],
      ['Concessions-réfutations et connecteurs (weliswaar, echter, daarentegen)', '3', '☐'],
      ['Lexique de l’estimation (de schatting, de marktwaarde, de vergelijkingspunten…)', '10', '☐'],
    ],
    foot: 'Relative de crédibilité : //Wij zijn het kantoor **dat** al twintig jaar woningen in uw wijk verkoopt.//',
    notes: "Étape 1 : les binômes choisissent un dossier et préparent leurs mots-clés (pas de texte rédigé). La checklist du livret fixe les minimums : 8 chiffres, 4 structures comparatives, 3 verbes d’évolution, 3 concessions ou connecteurs, 10 mots du lexique de l’estimation. Pitch de l’agence avec une relative de crédibilité (palier 5) : « Wij zijn het kantoor dat … » (le verbe conjugué part à la fin). Exemples du lexique : de schatting, de marktwaarde, de vergelijkingspunten, de fourchette (bandbreedte), de vraagprijs, de opdracht, het mandaat.",
  });

  d.steps({
    title: 'TAAK 6 · Étape 2 : het gesprek', tag: 'ORAL', page: 'Livret p. 19',
    intro: 'Le binôme joue l’entretien **complet** devant un autre binôme (le propriétaire et son/sa partenaire). Puis **inversion** des rôles.',
    steps: [
      { h: 'Accueil', color: 'accent2', lines: ['visite éclair', '//Dank u voor uw ontvangst. Mag ik even rondkijken?//'] },
      { h: 'Rapport', color: 'accent1', lines: ['comparables, marché, fourchette', '//De marktwaarde wordt geschat tussen … en …//'] },
      { h: 'Objections', color: 'accent6', lines: ['**≥ 3 objections** du couple, dont une chiffrée', '//Waarop baseert u zich?//'] },
      { h: 'Négociation', color: 'accent3', lines: ['prix de départ réaliste', '//Wat zou u ervan denken om te starten op € …?//'] },
      { h: 'Pitch et mandat', color: 'tx2', lines: ['//Wij zijn het kantoor dat …//', '//Zou u ons de opdracht willen toevertrouwen?//'] },
    ],
    notes: "Étape 2 : 20 minutes au total, soit environ 8 minutes par entretien et 2 minutes de retour pour chaque observation, avec inversion des rôles. Le couple propriétaire formule au moins trois objections, dont une chiffrée (« Een andere makelaar schatte € 490.000. », « Dat is € 50.000 minder dan ik verwachtte! »). Évaluer avec la checklist de l’étape 1 : chiffres, structures comparatives, verbes d’évolution, concessions, lexique. Le but : du bonjour au mandat signé, sans lire.",
  });

  d.steps({
    title: 'TAAK 6 · Étape 3 : de opvolgingsmail', tag: 'ÉCRIT', page: 'Livret p. 20',
    intro: 'À la maison : le **courriel de suivi** au propriétaire, **10 à 12 phrases**, registre **formel**.',
    steps: [
      { h: 'Merci', color: 'accent2', lines: ['remerciement', '//Hartelijk dank voor het gesprek van donderdag.//'] },
      { h: 'Synthèse', color: 'accent1', lines: ['synthèse chiffrée', '//De marktwaarde wordt geschat tussen … en …//'] },
      { h: 'Objection', color: 'accent6', lines: ['réponse à **son** objection principale : concession + chiffre', '//Uw verwachting is weliswaar begrijpelijk, maar …//'] },
      { h: 'Suite', color: 'accent3', lines: ['prochaine étape conditionnée', '//Zodra u de opdracht tekent, wordt de advertentie …//'] },
    ],
    foot: { kind: 'keep', label: 'Dernière pièce du dossier', text: 'La boucle complète des paliers 5 à 8 dans un seul texte : relative, zou, passif, concession, comparaison, évolution.' },
    notes: "Étape 3 : à rédiger à la maison ou à finir en classe s’il reste du temps (10 à 12 phrases). Registre formel : « Geachte meneer … », « Met vriendelijke groeten ». La phrase conditionnée emploie « zodra » (subordonnée : verbe à la fin) et le passif : « Zodra u de opdracht tekent, wordt de advertentie gepubliceerd. » Cette lettre est la dernière pièce du dossier de la série. Un modèle est projeté sur la diapositive suivante.",
  });

  d.exhibit({
    title: 'Modèle : de opvolgingsmail', tag: '+ BONUS', page: 'Hors syllabus',
    label: 'E-MAIL', docTitle: 'Onderwerp: schatting Vredestraat 24',
    lines: [
      'Geachte meneer Janssens,',
      'Hartelijk dank voor het gesprek van donderdag en voor de rondleiding in uw woning.',
      'Zoals besproken wordt de marktwaarde van uw huis geschat tussen € 445.000 en € 465.000. Deze schatting is gebaseerd op drie recente verkopen in uw wijk. De prijzen zijn er het afgelopen jaar gemiddeld met 4,2 % gestegen.',
      'Uw verwachting van € 500.000 is weliswaar begrijpelijk, maar de vergelijkbare woningen liggen rond de € 450.000. Hoe realistischer de vraagprijs, hoe sneller de verkoop.',
      'Wij zouden u daarom aanraden om te starten op € 469.000. Een vernieuwing van de keuken zou de waarde met ongeveer € 20.000 kunnen verhogen.',
      'Zodra u de opdracht tekent, wordt de advertentie binnen een week gepubliceerd. Mag ik u volgende week opbellen om uw beslissing te bespreken?',
      'Met vriendelijke groeten, Yasmina — Immo Van Damme',
    ],
    notes: "Bonus : modèle de courriel de suivi (10 phrases). À repérer : remerciement, synthèse chiffrée au passif (wordt geschat tussen … en …), évolution (met 4,2 % gestegen), concession (weliswaar … maar), corrélation (hoe … hoe …), conditionnel (zouden … aanraden, zou … kunnen verhogen), étape conditionnée (zodra … wordt … gepubliceerd). Les étudiants adaptent le modèle à leur dossier et à SON objection principale.",
  });

  d.steps({
    title: 'Variante Dagelijks leven : het weekendvoorstel', tag: 'EXTRA', page: 'Livret p. 20a',
    intro: 'Pour ceux qui préfèrent un dossier de la vie courante : même déroulé, mêmes exigences, **autonomie complète**.',
    steps: [
      { h: 'De voorbereiding', color: 'accent2', lines: ['Destination **réelle**, vraies données (horaires, prix, météo, avis)', '3 options comparées · budget chiffré · une évolution', '//Het is een weekend dat …//'] },
      { h: 'Het gesprek', color: 'accent1', lines: ['Vous présentez le projet à un couple d’amis aux attentes différentes', '**≥ 3 objections**, dont une chiffrée : //Dat is twee keer zo duur als vorig jaar!//', '//Zouden jullie akkoord gaan met …?//'] },
      { h: 'De opvolgingsmail', color: 'accent3', lines: ['10 à 12 phrases, registre libre', 'remerciement · synthèse chiffrée · réponse à l’objection · étape conditionnée', '//Zodra iedereen betaald heeft, wordt het appartement gereserveerd.//'] },
    ],
    foot: { kind: 'tip', label: 'Checklist', text: 'identique à l’étape 1, sauf « Lexique de l’estimation » qui devient « **Lexique du quotidien** (activités D1 à D5) » : minimum 10.' },
    notes: "Variante pour les étudiants qui préfèrent un dossier de la vie courante : un projet de sortie ou de week-end plutôt qu’une estimation, avec de vraies données. Même déroulé en trois étapes (préparation, entretien avec un couple d’amis, message au groupe). L’évolution à citer : « De prijzen zijn sinds vorig jaar met … gestegen. » La conclusion : « Zouden jullie akkoord gaan met …? » Même checklist, avec le lexique des activités D1 à D5 (train, trajet, météo, avis, addition).",
  });

  d.checklist({
    title: 'Bilan du palier 8 : je peux…', tag: 'AUTO-ÉVALUATION', page: 'Palier 8',
    intro: 'Cochez ce que vous savez faire **aujourd’hui** en néerlandais, sans note.',
    items: [
      'Lire et dire à voix haute **prix, surfaces, pourcentages** et **l’heure** (half negen !)',
      'Mener un **appel de prospection** avec des chiffres et une demande polie (**zou**)',
      '**Comparer** : hoe … hoe …, steeds, twee keer zo … als, in vergelijking met',
      'Décrire une **évolution** : stijgen / dalen **met**, van … naar, verdubbelen, gemiddeld',
      'Lire et structurer un **schattingsverslag** : passif, fourchette, **zou**',
      'Écrire un **besluit** chiffré de 8 à 10 phrases',
      '**Défendre** une estimation : concéder, objectiver, conseiller',
      'Jouer un **entretien d’estimation** complet jusqu’au mandat',
    ],
    notes: "Auto-évaluation de fin de palier (et de fin de série). Chaque étudiant coche individuellement, puis choisit deux points à retravailler seul. Les points non cochés renvoient à la séance correspondante : 16 (chiffres, heure, TAAK 1), 17 (comparer, TAAK 2), 18 (évolution, rapport, TAAK 3 et 4), 19 (défendre, TAAK 5 et 6).",
  });

  d.closing({
    title: 'Gefeliciteerd!', cliffLabel: 'ET MAINTENANT ?',
    cliff: 'Fin de la série des **paliers 5 à 8** : vous savez **prospecter, comparer, chiffrer, rédiger et défendre** — en néerlandais.',
    homeworkLabel: 'POUR FINIR LA SÉRIE',
    homework: ['**Étape 3 de la TAAK 6** : l’opvolgingsmail (10 à 12 phrases, registre formel).', 'Terminer l’**étape 2** si votre binôme n’a pas encore joué les deux rôles.', 'Variante : le **weekendvoorstel** (dossier vie quotidienne).', 'Rejouer **D5** avec une situation que vous avez vécue.'],
    exit: 'Une phrase pour la route : concédez et chiffrez — //… is weliswaar …, maar … € …//',
    notes: "Ticket de sortie oral : « Uw verwachting is weliswaar begrijpelijk, maar de marktwaarde ligt tussen € 445.000 en € 465.000. » Féliciter la classe : c’est le dernier palier de la série. Récupérer les opvolgingsmails à la prochaine rencontre pour une correction individuelle.",
  });
};
