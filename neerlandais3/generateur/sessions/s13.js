// Séance 13 — Palier 7 · Séquence 7.3 (Argumenteren : les connecteurs avancés) — Livret p. 11–15a
exports.meta = {
  n: 13, slug: 'Argumenteren_connectoren', title: 'Argumenteren in de vergadering',
  subtitle: 'Les connecteurs avancés — structurer une prise de position',
  pages: 'Livret p. 11–15a', img: 'p7_14_7', time: '7.3', sceneLabel: 'SÉQUENCE',
  block: 'Palier 7 · Mede-eigendom',
  coverNotes: "Séance consacrée à la séquence 7.3 : les connecteurs argumentatifs (enerzijds… anderzijds, echter, daarentegen, met andere woorden, wat … betreft, ten slotte) et l’inversion qui suit un connecteur placé en tête de phrase. Elle comprend l’exercice 5 (écoute d’un débat), l’exercice 6 (bouw het betoog), la TAAK 3 (prise de position de 90 secondes) et l’activité Dagelijks leven D3 (la discussion du groupe de voisins).",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: '**Structurer une prise de position** avec les connecteurs avancés (enerzijds… anderzijds, echter, daarentegen, wat … betreft, ten slotte) et **inverser correctement** verbe et sujet.',
    language: '//Wat de kosten betreft, … · Enerzijds… anderzijds… · De syndicus daarentegen wil… · Ten slotte schrijf ik…//',
    skills: 'Repérer les connecteurs dans un débat · bâtir un argumentaire de 5 phrases · parler 90 secondes devant un trio · réagir dans un groupe de voisins',
    agenda: [['Rappel séance 12', 8], ['7.3 · pourquoi structurer (p. 11)', 6], ['Les connecteurs et l’inversion (p. 12–13)', 14], ['Ex. 5 · écoute : le débat', 12], ['Ex. 6 · bouw het betoog', 12], ['TAAK 3 · uw standpunt (90 s)', 18], ['D3 · In de buurtgroep', 17], ['Bilan', 3]],
    notes: "Durées indicatives sur 90 minutes. Pages 11 à 15a du livret. L’exercice 6 peut être terminé à la maison ; la TAAK 3 est le cœur de la séance : prévoir trois ou quatre trios. D3 se termine souvent en devoir (le fil de messages).",
  });

  d.exercise({
    title: 'Rappel séance 12 : les nominalisations', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 12',
    instr: 'Nominalisez — seul · 4 min, puis correction orale.',
    items: [
      { q: 'We stellen de werken uit. → … van de werken', a: '**het uitstellen** van de werken' },
      { q: 'We verdelen de kosten. → …', a: 'de **verdeling** van de kosten' },
      { q: 'We verhogen de bijdrage. → …', a: 'de **verhoging** van de bijdrage' },
      { q: 'aanwezig → …', a: 'de **aanwezigheid**' },
      { q: 'Phrase verbale : « Goedkeuring van de notulen. »', a: 'We keuren de notulen **goed**. · De notulen **worden goedgekeurd**.' },
    ],
    traps: ['**-ing** → **de** · **het** + infinitif → **het**.', 'Le complément passe par **van**.', 'Séparables : //goedkeuren → goedkeuring//.'],
    notes: "Rappel de la séance 12 (4 minutes). Faire dire chaque réponse avec l’article. Accepter « het uitstel van de werken » pour la phrase 1.",
    notesA: "Faire remarquer que ces noms (de verhoging, de verdeling…) serviront de matière aux arguments de la séance : « De verhoging van de bijdrage is noodzakelijk. »",
  });

  d.scene({
    title: 'Séquence 7.3 : argumenter', tag: 'FOCUS', page: 'Livret p. 11', img: 'p7_14_7', time: '7.3', sceneLabel: 'SÉQUENCE',
    text: ['**Celui qui structure gagne** : les connecteurs font d’une opinion une **position**.', 'Déjà connus : //ten eerste · bovendien · daarom · kortom//.', '**Focus : lignes 4, 6 et 9**', '«**Enerzijds** vindt zij de werken noodzakelijk, **anderzijds** vreest ze de kostprijs.»', '«De syndicus **daarentegen** wil…» · «**Ten slotte** schrijf ik…»'],
    ask: 'Dans « Ten slotte schrijf ik… » : quel mot suit « ten slotte » : le verbe ou le sujet ?',
    notes: "Réponse : le verbe (schrijf), puis le sujet (ik) : c’est l’inversion. Le livret cite l’étage supérieur de l’argumentation : après « ten eerste, bovendien, daarom, kortom » (paliers 5–6), on ajoute six outils. Traduction du Focus : D’une part elle trouve les travaux nécessaires, d’autre part elle craint le coût. / Le syndic, en revanche, veut décider vite. / Enfin, j’écris le rapport après la réunion.",
  });

  d.table({
    title: 'Les connecteurs avancés', tag: 'GRAMMATICA', page: 'Livret p. 12',
    headers: ['CONNECTEUR', 'FRANÇAIS', 'FONCTION', 'EXEMPLE'], colW: [2.45, 2.2, 2.4, 5.08], size: 16,
    rows: [
      ['**enerzijds… anderzijds**', 'd’une part… d’autre part', 'peser le pour et le contre', 'Enerzijds zijn de werken duur, anderzijds zijn ze noodzakelijk.'],
      ['**echter**', 'cependant', 'objection (style soigné)', 'De offerte is echter nog niet volledig.'],
      ['**daarentegen**', 'en revanche', 'contraste entre deux positions', 'De syndicus daarentegen wil snel stemmen.'],
      ['**met andere woorden**', 'autrement dit', 'reformuler', 'Met andere woorden: we hebben meer informatie nodig.'],
      ['**wat … betreft**', 'en ce qui concerne', 'annoncer le thème', 'Wat de kosten betreft, stel ik een spreiding voor.'],
      ['**ten slotte**', 'enfin', 'clôturer la liste d’arguments', 'Ten slotte wil ik het reservefonds vermelden.'],
    ],
    notes: "Tableau du livret (p. 12). Faire lire les exemples à voix haute et demander la fonction de chaque connecteur. « Echter » et « daarentegen » ne se placent pas seulement en tête : « De offerte is echter nog niet volledig », « De syndicus daarentegen wil… ». « Wat … betreft » encadre le thème (Wat de kosten betreft = quant aux coûts) ; le verbe suit la virgule : « …betreft, stel ik… ». Une « spreiding » = un étalement (des paiements).",
  });

  d.picture({
    title: 'Connecteur + verbe + sujet', tag: 'GRAMMATICA', page: 'Livret p. 13', img: 'p7_16_8',
    capLabel: 'L’INVERSION', capColor: 'accent1', capIcon: 'FaRoute',
    caption: ['Connecteur en **tête de phrase** : le **verbe** passe en 2e position, le **sujet** après.', '//Daarentegen **wil** de syndicus… · Ten slotte **schrijf** ik… · Enerzijds **zijn** de werken duur…//', 'Placés **après le sujet**, //echter// et //daarentegen// n’inversent rien : //De syndicus daarentegen wil…//'],
    notes: "La page 13 du livret ne contient que cette planche d’illustration (connecteur + verbe + sujet + reste). Rappeler la règle du palier 1 : le verbe conjugué est toujours en deuxième position. Le premier élément (adverbe, connecteur) compte pour une case : le sujet passe après le verbe.",
  });

  d.blocks({
    title: 'Inversion après un connecteur', tag: 'GRAMMATICA', page: 'Livret p. 13',
    intro: 'Un **connecteur** en tête compte pour **une case** : le **verbe** vient juste après, le **sujet** ensuite.',
    rows: [
      { label: 'Ten slotte', cells: [{ t: 'Ten slotte', role: 'C' }, { t: 'schrijf', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'het verslag', role: 'O' }], fr: 'Enfin, j’écris le rapport.' },
      { label: 'Enerzijds…', cells: [{ t: 'Enerzijds', role: 'C' }, { t: 'zijn', role: 'V' }, { t: 'de werken', role: 'S' }, { t: 'duur', role: 'M' }, { t: 'anderzijds', role: 'C' }, { t: 'zijn ze noodzakelijk', role: 'V', lab: 'V + S' }], fr: 'D’une part les travaux sont chers, d’autre part ils sont nécessaires.' },
      { label: 'Wat … betreft', cells: [{ t: 'Wat de kosten betreft,', role: 'C' }, { t: 'stel', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'een spreiding', role: 'O' }, { t: 'voor', role: 'F' }], fr: 'En ce qui concerne les coûts, je propose un étalement.' },
      { label: 'Echter (milieu)', cells: [{ t: 'De offerte', role: 'S' }, { t: 'is', role: 'V' }, { t: 'echter', role: 'C' }, { t: 'nog niet', role: 'N' }, { t: 'volledig', role: 'M' }], fr: 'Le devis n’est cependant pas encore complet.' },
      { label: 'Daarentegen', cells: [{ t: 'De syndicus', role: 'S' }, { t: 'daarentegen', role: 'C' }, { t: 'wil', role: 'V' }, { t: 'snel', role: 'M' }, { t: 'stemmen', role: 'F' }], fr: 'Le syndic, en revanche, veut voter vite.' },
    ],
    foot: { kind: 'trap', text: 'En français : //Enfin, **j’écris**…// (sujet avant le verbe). En néerlandais : //Ten slotte **schrijf ik**…// ✗ //Ten slotte ik schrijf// — après le connecteur, le verbe passe **avant** le sujet.' },
    notes: "Vérifier la compréhension en demandant d’ouvrir une phrase avec chaque connecteur. Remarque : « echter » et « daarentegen » peuvent aussi ouvrir la phrase (« Echter is de offerte nog niet volledig » est possible mais très soigné ; « Daarentegen wil de syndicus snel stemmen » est courant) — mais dans les deux cas on inverse. « Wat de kosten betreft, stel ik… » : le groupe « wat … betreft » occupe la première case.",
  });

  d.table({
    title: '5 Luisteren : stemmen in de vergadering', tag: 'COUCHE 1', page: 'Livret p. 14',
    intro: 'Seul · 12 min. Vous entendez **deux fois** un débat entre deux copropriétaires (transcription n° 2, lue par le professeur). **1re écoute** : qui est pour, qui est contre ? **2e écoute** : connecteurs et argument qu’ils introduisent. Solution : selon le texte lu.',
    headers: ['DEBATFICHE', 'UW NOTITIES'], colW: [6.0, 6.13], size: 18,
    rows: [
      ['Standpunt mevr. Peeters (voor / tegen)', '___'],
      ['Standpunt van meneer Yilmaz (voor / tegen)', '___'],
      ['Gehoorde connectoren (minimum 4)', '___'],
      ['Welk compromis wordt voorgesteld?', '___'],
    ],
    notes: "Le texte du débat (transcription n° 2) est dans l’annexe du dossier du professeur : il n’est pas reproduit dans le livret, donc la solution dépend du texte lu. Ne pas la deviner (même si le procès-verbal de la séance 14 laisse penser que mevrouw Peeters est pressée et que meneer Yilmaz demande une seconde offerte, ce n’est pas une preuve). Lire deux fois, avec une minute entre les deux lectures. Mise en commun : une ligne par étudiant, puis la classe liste les connecteurs entendus.",
  });

  d.exercise({
    title: '6 Bouw het betoog', tag: 'COUCHE 2', page: 'Livret p. 15', mode: 'a',
    instr: 'Reliez ces idées brutes en une prise de position de **5 phrases** sur la rénovation de la façade, avec **4 connecteurs** de la séquence (+ bovendien, daarom, kortom). Seul · 8 min.',
    number: false, gap: 8,
    items: [
      { h: 'Idées brutes' },
      { t: 'de werken zijn noodzakelijk' },
      { t: 'de kostprijs is hoog · het reservefonds is bijna leeg' },
      { t: 'de schade wordt groter · wachten is riskant' },
      { t: 'een tweede offerte kan de prijs verlagen' },
    ],
    expect: ['**5 phrases**', '**4 connecteurs** de 7.3', '**Verbe en 2e position** après le connecteur', 'Écrit · seul · 8 min'],
    notes: "Production libre : pas de corrigé unique. Les six idées du livret : de werken zijn noodzakelijk – de kostprijs is hoog – de schade wordt groter – het reservefonds is bijna leeg – een tweede offerte kan de prijs verlagen – wachten is riskant. Passer dans les rangs : vérifier l’inversion après chaque connecteur (« Daarom stel ik voor… »). Deux modèles sur la diapositive suivante.",
  });

  d.compare({
    title: 'Bouw het betoog : deux modèles', tag: 'COUCHE 2', page: 'Livret p. 15',
    left: { h: 'MODÈLE A — voor, met een tweede offerte', color: 'accent3', icon: 'FaCheck', items: ['**Wat** de renovatie van de gevel **betreft**, zijn de werken noodzakelijk, want de schade wordt elk jaar groter.', '**Enerzijds** is de kostprijs hoog en is het reservefonds bijna leeg, **anderzijds** is wachten riskant.', 'Een tweede offerte kan **echter** de prijs verlagen.', '**Daarom** stel ik voor om snel een tweede offerte te vragen.', '**Ten slotte** vraag ik een stemming in november.'] },
    right: { h: 'MODÈLE B — voorzichtig', color: 'accent1', icon: 'FaBalanceScale', items: ['**Wat** de kostprijs **betreft**, ben ik bezorgd: het reservefonds is bijna leeg.', '**Enerzijds** wordt de schade elk jaar groter, **anderzijds** kan een tweede offerte de prijs verlagen.', '**Met andere woorden**: wachten is riskant, maar overhaast beslissen ook.', 'De syndicus wil **echter** nu al stemmen.', '**Ten slotte** vraag ik daarom om de stemming naar november te verplaatsen.'] },
    max: 16,
    notes: "Deux modèles corrects parmi d’autres : A pro-travaux avec compromis, B plus prudent. Vérifier : verbe en 2e position après chaque connecteur (Daarom stel ik…, Ten slotte vraag ik…), verbe à la fin dans les subordonnées (…want de schade wordt elk jaar groter). « Overhaast beslissen » : décider précipitamment. Les connecteurs de la séquence 7.3 utilisés : wat … betreft, enerzijds… anderzijds, echter, ten slotte (+ met andere woorden) ; acquis : daarom.",
  });

  d.exercise({
    title: 'TAAK 3 : uw standpunt in de vergadering', tag: 'ORAL', page: 'Livret p. 15', mode: 'a', img: 'p7_18_9', imgH: 2.4,
    instr: 'Préparez **5 min** (mots-clés), puis **90 secondes** chrono devant un trio. Le trio vote : la position la plus convaincante l’emporte — **arguments, pas volume !**',
    number: false, gap: 6,
    items: [
      { t: '① **Wat … betreft** → annoncer le thème' },
      { t: '② **Enerzijds… anderzijds** → peser le pour et le contre' },
      { t: '③ **Echter / daarentegen** → objection ou contraste' },
      { t: '④ **Ten slotte** → dernier argument' },
      { t: '⑤ **Kortom** → conclusion' },
    ],
    expect: ['Au moins **1 nominalisation**', '**Inversion** correcte après un connecteur', 'Observateurs : structure · connecteurs · inversion'],
    notes: "Modalités : trios (un orateur, deux observateurs) ; chaque étudiant parle 90 secondes chrono, les mots-clés seuls sont autorisés, pas de texte rédigé. Après trois présentations, le trio vote ; on peut rejouer la meilleure devant la classe. Corriger après coup les inversions entendues. Ne pas accepter un « ik denk dat… » enchaîné sans connecteur : l’objectif est la structure. Un modèle sur la diapositive suivante.",
  });

  d.exhibit({
    title: 'TAAK 3 : discours-modèle (90 s)', tag: 'ORAL', page: 'Livret p. 15',
    label: 'MODÈLE', docTitle: 'Mijn standpunt over de renovatie',
    lines: [
      '**Wat** de renovatie van de gevel **betreft**, ben ik niet tegen de werken, maar wel tegen een snelle stemming.',
      '**Enerzijds** zijn de werken noodzakelijk, **anderzijds** is € 86.500 een groot bedrag zonder vergelijking. De syndicus **daarentegen** wil nu al stemmen.',
      'Het vragen van een tweede offerte kost **echter** maar twee weken.',
      '**Ten slotte** vraag ik een stemming in november. **Kortom**: eerst vergelijken, dan beslissen.',
    ],
    side: { label: 'À REPÉRER', color: 'accent3', icon: 'FaSearch', lines: ['**wat … betreft** → thème', '**enerzijds / anderzijds** → balancement', '**daarentegen · echter** → contraste, objection', '**ten slotte · kortom** → fin', '**Nominalisation** : //het vragen van · de stemming//'] },
    notes: "Modèle de 6 phrases (environ 70 secondes). Il suit exactement la structure demandée : wat … betreft → enerzijds/anderzijds → daarentegen/echter → ten slotte → kortom, avec les nominalisations (de renovatie, het vragen van, de stemming) et des inversions correctes (zijn de werken, is € 86.500, wil de syndicus…). « zonder vergelijking » : sans comparaison.",
  });

  d.dialogue({
    title: 'D3 Dagelijks leven : in de buurtgroep', tag: 'ÉCRIT', page: 'Livret p. 15a',
    lines: [
      ['NADIA', 'Wat de speelstraat betreft: ik ben helemaal voor! Enerzijds kunnen de kinderen veilig buiten spelen, anderzijds leren de buren elkaar beter kennen.', '12.04'],
      ['MENEER WILLEMS', 'Een mooi idee. Ik heb echter geen garage: waar moet ik een hele maand parkeren?', '12.31'],
      ['SOFIE', 'Ik werk ’s nachts en overdag wil ik slapen. Toch vind ik het idee goed. Met andere woorden: ja, maar enkel in de namiddag?', '13.15'],
      ['KARIM', 'Vorig jaar was er een speelstraat in de Molenstraat. Het lawaai viel daar best mee. Wat het parkeren betreft: de bewoners kregen een kaart voor de straat ernaast. Kortom: geen paniek!', '13.40'],
    ],
    colors: { NADIA: 'accent3', 'MENEER WILLEMS': 'tx2', SOFIE: 'accent1', KARIM: 'accent2' },
    notes: "Le débat de quartier se joue aussi dans un groupe de messagerie : même exigence qu’en assemblée. Lecture silencieuse (3 min), puis les trois questions. Remarque : ici meneer Willems nuance (« Een mooi idee… echter ») alors que l’Avonddialoog le disait « fel tegen » : bonne occasion de montrer que la concession adoucit une objection. « Het lawaai viel daar best mee » : le bruit était plutôt supportable (meevallen).",
  });

  d.exercise({
    title: 'D3 Dagelijks leven : les questions', tag: 'ÉCRIT', page: 'Livret p. 15a',
    instr: 'Seul · 5 min, puis par deux.',
    number: false, gap: 4, qGap: 10,
    items: [
      { q: '**1** Qui est pour, qui est contre, qui propose un compromis ?', a: '**Nadia** voor · **Willems** : bezwaar (parkeren) · **Sofie** : voor, maar enkel in de **namiddag** · **Karim** : voor, **kaart** voor de straat ernaast.' },
      { q: '**2** Les connecteurs et leur fonction ?', a: 'Wat … betreft = **thème** · enerzijds / anderzijds = **balancement** · echter = **objection** · met andere woorden = **reformulation** · kortom = **conclusion** (· toch = concession, 7.5)' },
      { q: '**3** Une inversion après un connecteur ?', a: 'Anderzijds **leren de buren** elkaar… · Toch **vind ik** het idee goed.' },
    ],
    notes: "Réponse 1 : Sofie propose une adaptation (seulement l’après-midi) et Karim une solution pour le parking (une carte pour la rue voisine) : ce sont deux compromis possibles ; Willems ne dit pas « tegen » mais pose une objection (pas de garage). Réponse 3 : accepter aussi « Enerzijds kunnen de kinderen… » (inversion après enerzijds).",
    notesA: "Faire dire à voix haute : « anderzijds leren de buren » (verbe + sujet) et « Toch vind ik » (concession → inversion). Le mot « toch » sera étudié à la séance 15.",
  });

  d.exercise({
    title: 'D3 À vous : postez votre réaction', tag: 'ÉCRIT', page: 'Livret p. 15a', mode: 'a',
    instr: 'Écrit · seul · 8 min. Postez votre réaction dans le groupe (5 à 6 phrases) sur la speelstraat ou un vrai projet de votre quartier. Puis répondez à un autre étudiant (2–3 phrases) avec une objection polie.',
    number: false, gap: 6,
    items: [
      { h: 'Modèle : post' },
      { t: '**Wat** de fietsstraat **betreft**: ik ben voorstander. **Enerzijds** is het veiliger voor de kinderen, **anderzijds** rijden er minder auto’s door de wijk. Sommige handelaars vrezen **echter** dat ze minder klanten krijgen. **Toch** denk ik dat de winkels goed bereikbaar blijven. **Kortom**: laten we het één jaar uitproberen!' },
      { h: 'Modèle : réponse' },
      { t: '**Hoewel** ik je punt begrijp, vrees ik dat oudere klanten wegblijven. De jonge gezinnen **daarentegen** zullen blij zijn.' },
    ],
    expect: ['**4 connecteurs** de 7.3', '**1 inversion** correcte', 'Réponse : //echter · daarentegen · Hoewel…//'],
    notes: "Production libre. Le modèle emploie wat … betreft, enerzijds / anderzijds, echter, kortom (4 connecteurs de 7.3) et toch (7.5), avec une inversion après anderzijds / toch. La réponse utilise hoewel (verbe à la fin : « Hoewel ik je punt begrijp, vrees ik… » : le verbe de la principale ouvre la seconde proposition) et daarentegen. Les étudiants échangent leurs posts à la fin ; le fil se poursuit à la maison.",
  });

  d.exercise({
    title: 'Quel connecteur ?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez : **daarentegen · enerzijds / anderzijds · ten slotte · met andere woorden · echter · wat … betreft**. Seul · 4 min.',
    items: [
      'Nadia is voor de speelstraat. Meneer Willems [[daarentegen]] is tegen.',
      '[[Enerzijds]] zijn de werken duur, [[anderzijds]] zijn ze noodzakelijk.',
      '[[Ten slotte]] wil ik het reservefonds vermelden.',
      'We hebben meer informatie nodig. [[Met andere woorden]]: we kunnen nog niet stemmen.',
      'Een mooi idee. Ik heb [[echter]] geen garage.',
      '[[Wat]] het parkeren [[betreft]], kregen de bewoners een kaart.',
    ],
    traps: ['**Ten slotte / Enerzijds** en tête : verbe **avant** le sujet.', '**daarentegen / echter** : après le sujet ou le verbe.', '**wat … betreft** encadre le thème.'],
    notes: "Exercice ajouté (4 minutes) : association connecteur / fonction. Phrase 6 : « kregen » est l’imperfectum de krijgen (fin de la phrase de Karim). Deuxième tour possible : faire redire chaque phrase en ouvrant par le connecteur (« Daarentegen is meneer Willems tegen »).",
    notesA: "Si un étudiant confond echter et daarentegen : echter = objection à ce qui vient d’être dit ; daarentegen = contraste entre deux personnes ou positions.",
  });

  d.closing({
    cliff: 'Séance 14 : **rapporter**. Les //notulen// : //Er werd beslist dat…// — passif impersonnel, discours indirect et nominalisations au service du procès-verbal.',
    homework: ['Apprendre les **six connecteurs** (p. 12) avec un exemple personnel chacun.', 'Terminer le **betoog** (ex. 6) ou préparer votre **standpunt** (TAAK 3).', 'Poster votre **réaction** dans le groupe de voisins (D3) : 5 à 6 phrases.'],
    exit: 'Ouvrez une phrase avec **Ten slotte** et une autre avec **Enerzijds** : le verbe vient-il avant ou après le sujet ?',
    notes: "Réponse attendue : avant. Ex. : « Ten slotte schrijf ik het verslag. » ; « Enerzijds zijn de werken duur. » Vérifier à l’oral.",
  });
};
