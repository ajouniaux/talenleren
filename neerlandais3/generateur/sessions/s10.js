// Séance 10 — Palier 6 · De oplossing (Séquence 6.5, passif) + 6.6 TAAK 6 — Livret p. 19–25a
exports.meta = {
  n: 10, slug: 'De_oplossing_het_dossier', title: 'De oplossing — het dossier',
  subtitle: 'Le passif avec worden — puis clôture du dossier de gestion (TAAK 6)',
  pages: 'Livret p. 19–25a', img: 'p6_24_9', time: '6.5 · 6.6', sceneLabel: 'SÉQUENCE',
  block: 'Palier 6 · Verhuur en beheer',
  coverNotes: "Dernière séance du palier 6. Séquence 6.5 : le passif avec worden (processus), werd (passé) et is (résultat), langue des décisions, contrats et annonces ; exercices 10 et 11, TAAK 5 (annoncer la solution au locataire) et D5 « Vertraging ! » (annonces de la gare). Puis séquence 6.6 : TAAK 6, le dossier de gestion complet (étape 1 en binôme, étape 2 devant un autre binôme, étape 3 en devoir). Pages couvertes : p. 19 à 25a du livret.",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Annoncer ce qui est **fait** (//is hersteld//), **en cours** (//wordt geschilderd//) et **décidé** au **passif**, puis **clôturer un dossier** de gestion.',
    language: '//wordt · worden + participe// — //werd · werden + participe// — //is + participe// — //door + acteur//',
    skills: 'Transformer actif et passif · comprendre annonces et messages · annoncer une solution (TAAK 5) · présenter et rédiger le dossier final (TAAK 6)',
    agenda: [['Rappel séance 9 : zou', 6], ['6.5 · le passif avec worden', 15], ['Ex. 10 Van actief naar passief', 8], ['Ex. 11 Herschrijf het droge verslag', 10], ['TAAK 5 · het telefoontje', 12], ['D5 · Vertraging!', 10], ['Bonus: wordt, werd of is?', 4], ['TAAK 6 · dossier (étapes 1–2)', 22], ['Bilan', 3]],
    notes: "Durées indicatives sur 90 minutes : séance dense. Pages 19 à 25a du livret. Priorités si le temps manque : conserver le passif, ex. 10, TAAK 5 et TAAK 6 (étape 1 puis étape 2) ; D5 et le bonus peuvent être raccourcis. L’étape 3 de la TAAK 6 (rapport écrit de 10 à 12 phrases) se fait à la maison ; l’étape 2 peut être jouée au début de la séance suivante si besoin.",
  });

  d.exercise({
    title: 'Rappel séance 9 : zou', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 9',
    instr: 'Reformulez avec **zou** — seul, 4 min, puis correction orale.',
    items: [
      { q: '« Stuur me de plaatsbeschrijving! » (demande polie)', a: '**Zou u** me de plaatsbeschrijving **kunnen sturen**?' },
      { q: '« Bel de eigenaar. » (Als ik u was…)', a: 'Als ik u **was**, **zou** ik de eigenaar **bellen**.' },
      { q: '« Het is een probleem met de verwarming. » (hypothèse)', a: 'Dat **zou** een probleem met de verwarming **kunnen zijn**.' },
      { q: '« Wacht tot maandag. » (U zou beter…)', a: 'U **zou beter** tot maandag **wachten**.' },
      { q: '« Wij willen een afspraak maken. » (poli)', a: 'Wij **zouden** graag een afspraak **maken**.' },
    ],
    aside: { label: 'RAPPEL', color: 'accent2', icon: 'FaLightbulb', lines: ['**zou** en 2e position, **infinitif à la fin**', '**zou / zouden** : accord avec le sujet', 'Après **als** : l’imperfectum (**was**)', 'Cette séance : **worden** + participe à la fin'] },
    notes: "Rappel de la séance 9 en 6 minutes : même vigilance sur la fin de phrase (infinitif avec zou, participe avec worden). Faire répondre à l’oral, puis projeter la correction.",
    notesA: "Plusieurs formulations acceptées (kunnen / willen). Faire remarquer que le passif demandera le même réflexe : verbe conjugué (wordt) en 2e position, participe à la fin.",
  });

  d.scene({
    title: 'Séquence 6.5 : le passif, langue des décisions', tag: 'FOCUS', page: 'Livret p. 19', img: 'p6_24_9', time: '6.5', sceneLabel: 'SÉQUENCE',
    text: ['Contrats, annonces, rapports : l’**action** passe au premier plan, l’**acteur** au second.', '**Focus : lignes 3, 7 et 9**', '«De keuken **werd** vorig jaar **vernieuwd**.»', '«Het gebouw **werd** in 2018 **gerenoveerd**.»', '«De herstelling **wordt** … **betaald**.»'],
    ask: 'Que veut dire **werd vernieuwd** ? Qui a rénové ? Est-ce important ?',
    notes: "Réponse : « werd vernieuwd » = « a été rénové » ; on ne dit pas qui (peu importe, c’est l’action qui compte). C’est l’hypothèse de l’exercice 4 de la séance 7 : « De keuken werd in 2022 volledig vernieuwd » n’est pas un imperfectum ordinaire, c’est un passif. Le livret écrit : « Sans le passif, vous ne pouvez ni lire un contrat ni annoncer une solution ». Focus ligne 9 : « De herstelling wordt normaal door de eigenaar betaald ».",
  });

  d.table({
    title: 'Actif → passif : worden + participe', tag: 'GRAMMATICA', page: 'Livret p. 20',
    headers: ['TEMPS', 'ACTIEF', 'PASSIEF'], colW: [2.5, 4.8, 4.83], size: 17, boldCol: 0,
    rows: [
      ['Présent', 'De eigenaar **betaalt** de herstelling.', 'De herstelling **wordt** (door de eigenaar) **betaald**.'],
      ['Imperfectum', 'De loodgieter **herstelde** het lek.', 'Het lek **werd** (door de loodgieter) **hersteld**.'],
      ['Pluriel', 'De verzekering **dekt** de kosten.', 'De kosten **worden** door de verzekering **gedekt**.'],
      ['Résultat (perfectum)', 'Iemand **heeft** de kraan **dichtgedraaid**.', 'De kraan **is dichtgedraaid**: het is klaar!'],
    ],
    foot: 'Piège pour francophones : le français dit « est réparé » dans les deux cas ; le néerlandais choisit **worden** (processus) ou **zijn** (résultat) — et **worden** s’accorde : //de kosten **worden**// (✗ //wordt//).',
    notes: "Tableau du livret (p. 20), à lire en deux colonnes : actif (l’acteur est le sujet) et passif (l’action est le sujet : worden + participe). Le complément d’agent (door + acteur) est facultatif : on le garde seulement s’il apporte une information utile. La ligne « Résultat » : is + participe décrit l’état final (c’est fait).",
  });

  d.blocks({
    title: 'Le passif : worden en 2e position, participe à la fin', tag: 'GRAMMATICA', page: 'Livret p. 20',
    intro: '**Worden** est le verbe conjugué (2e position) ; le **participe** part **à la fin**. L’acteur (**door** + …) est facultatif.',
    rows: [
      { label: 'Présent', cells: [{ t: 'De herstelling', role: 'S' }, { t: 'wordt', role: 'V' }, { t: 'door de eigenaar', role: 'O', lab: 'acteur' }, { t: 'betaald', role: 'F', lab: 'participe' }], fr: 'La réparation est payée par le propriétaire.' },
      { label: 'Passé', cells: [{ t: 'Het gebouw', role: 'S' }, { t: 'werd', role: 'V' }, { t: 'in 2018', role: 'T' }, { t: 'gerenoveerd', role: 'F', lab: 'participe' }], fr: 'L’immeuble a été rénové en 2018.' },
      { label: 'Pluriel', cells: [{ t: 'De kosten', role: 'S' }, { t: 'worden', role: 'V' }, { t: 'door de verzekering', role: 'O', lab: 'acteur' }, { t: 'gedekt', role: 'F', lab: 'participe' }], fr: 'Les frais sont couverts par l’assurance.' },
      { label: 'Question', cells: [{ t: 'Wanneer', role: 'Q' }, { t: 'wordt', role: 'V' }, { t: 'de muur', role: 'S' }, { t: 'geschilderd', role: 'F', lab: 'participe' }], fr: 'Quand le mur est-il peint ? (TAAK 5)' },
      { label: 'Condition', cells: [{ t: 'tenzij', role: 'C' }, { t: 'de verzekering', role: 'S' }, { t: 'weigert', role: 'F' }], fr: '… sauf si l’assurance refuse.' },
    ],
    foot: { kind: 'keep', text: '**worden** conjugué + **participe** en fin de phrase ; **werd / werden** pour le passé ; **is** pour le résultat.' },
    notes: "Visualisation de l’ordre des mots : le participe est toujours en dernière position, comme l’infinitif avec zou (séance 9). Les participes séparables se soudent : opgesteld (opstellen), dichtgedraaid (dichtdraaien). Dans la subordonnée en tenzij, le verbe est en fin de phrase (weigert).",
  });

  d.picture({
    title: 'Worden ≠ zijn : processus ou résultat ?', tag: 'GRAMMATICA', page: 'Livret p. 21', img: 'p6_26_10',
    capLabel: 'NE LES CONFONDEZ JAMAIS', capColor: 'accent6', capIcon: 'FaExclamationTriangle',
    caption: ['**wordt + participe** = **processus** : //De badkamer wordt geschilderd.// (on est en train de peindre)', '**is + participe** = **résultat** : //De badkamer is geschilderd.// (c’est fait !)', 'Dans un rapport : //wordt// = en cours · //is// = terminé · //werd// = passé'],
    notes: "Planche du livret : « Worden ≠ zijn ». Demander une paire de phrases pour chaque tableau : « Het lek wordt hersteld » (le plombier travaille) / « Het lek is hersteld » (c’est fait). Dans un rapport professionnel, la différence est capitale : le locataire veut savoir si c’est terminé ou en cours. Nous retrouvons la même distinction dans la TAAK 5.",
  });

  d.exercise({
    title: '10 Van actief naar passief', tag: 'COUCHE 2', page: 'Livret p. 21',
    instr: 'Transformez au **passif** : gardez le **temps** de la phrase active ; n’ajoutez //door// + acteur que si l’information est utile. Seul · 8 min.',
    items: [
      { q: 'De loodgieter herstelt het lek morgen.', a: 'Het lek **wordt** morgen (door de loodgieter) **hersteld**.' },
      { q: 'De verzekering dekt de kosten.', a: 'De kosten **worden** door de verzekering **gedekt**.' },
      { q: 'De vorige eigenaar renoveerde het gebouw in 2018.', a: 'Het gebouw **werd** in 2018 (door de vorige eigenaar) **gerenoveerd**.' },
      { q: 'Wij stellen de plaatsbeschrijving volgende week op.', a: 'De plaatsbeschrijving **wordt** volgende week **opgesteld**.' },
      { q: 'Iemand heeft de hoofdkraan dichtgedraaid.', a: 'De hoofdkraan **is dichtgedraaid**.' },
    ],
    traps: ['**worden** s’accorde : //de kosten worden//', 'Séparable : //opstellen// → //opgesteld//', 'Perfectum → //is + participe// (pas de //geworden//)', '//door// + acteur : **facultatif**'],
    notes: "Exercice 10 du livret : seul, 8 minutes, puis correction orale. Garder le temps de l’actif : présent → wordt, imperfectum → werd, perfectum → is + participe. Le complément « door + acteur » est mis entre parenthèses : utile pour la phrase 3, inutile pour la phrase 4 (« wij » = le bureau, évident) et la phrase 5 (« iemand » = inconnu).",
    notesA: "Faire nommer le temps de l’actif pour chaque phrase. Phrase 2 : plusieurs étudiants écrivent « wordt » : rappeler que « de kosten » est pluriel. Phrase 5 : le perfectum actif devient « is + participe », sans « geworden » en néerlandais courant.",
  });

  d.exhibit({
    title: '11 Herschrijf het droge verslag', tag: 'ÉCRIT', page: 'Livret p. 22',
    label: 'NOTES DE CHANTIER', docTitle: 'Style « palier 1 »',
    lines: [
      'De loodgieter kwam maandag. Hij vond het probleem. De leiding is oud. Hij herstelde het lek. Hij maakte foto’s. Hij zei iets: de muur moet drogen. Dat duurt twee weken. Dan schildert iemand de muur. De verzekering betaalt misschien. Wij wachten op het antwoord.',
    ],
    side: { label: 'À FAIRE · 10 MIN', color: 'accent1', icon: 'FaPenNib', lines: ['Un **paragraphe** de **5 à 6 phrases**', '**2 passifs** au moins', '**1 discours indirect**', '**1 zou**', '**1 connecteur** (//daarna · kortom//)'] },
    notes: "L’exercice-miroir du palier : les notes de chantier sont écrites « à la manière du palier 1 » (phrases courtes, aucun lien). Les étudiants les réécrivent en un paragraphe professionnel qui combine les quatre outils du palier. Seul, 10 minutes ; correction collective sur le modèle de la diapositive suivante.",
  });

  d.exhibit({
    title: '11 Herschrijf het droge verslag : un modèle', tag: 'ÉCRIT', page: 'Livret p. 22',
    label: 'MODÈLE', docTitle: 'Verslag : de lekkage Waversesteenweg',
    lines: [
      'Maandag kwam de loodgieter langs en het probleem **werd** snel **gevonden**: de leiding is oud. Het lek **werd** onmiddellijk **hersteld** en er **werden** foto’s **gemaakt**.',
      'De loodgieter **zei dat** de muur twee weken **moest** drogen. **Daarna wordt** de muur **geschilderd**.',
      'De kosten **worden** misschien door de verzekering **betaald**, maar wij wachten nog op het antwoord. **Kortom**: ik **zou** de eigenaar **aanraden** om de verzekering te contacteren.',
    ],
    side: { label: 'À VÉRIFIER', color: 'accent3', icon: 'FaCheck', lines: ['**5 passifs** : werd gevonden · werd hersteld · werden gemaakt · wordt geschilderd · worden betaald', '**Discours indirect** : zei dat … moest', '**Zou** : zou aanraden', '**Connecteurs** : daarna · kortom'] },
    notes: "Modèle de 6 phrases (un corrigé parmi d’autres). Les phrases actives du texte sec deviennent passives quand l’acteur n’est pas important (het lek werd hersteld) ; « Hij zei iets : de muur moet drogen » devient un discours indirect (zei dat … moest drogen, moet → moest) ; « De verzekering betaalt misschien » devient un passif (de kosten worden misschien … betaald). Accepter toute version contenant les éléments demandés.",
  });

  d.compare({
    title: 'TAAK 5: het telefoontje van de oplossing', tag: 'ORAL', page: 'Livret p. 23',
    intro: 'Vous appelez le locataire pour annoncer les décisions. **2 rondes de 5 minutes**, rôles inversés. L’observateur coche : passifs corrects (//wordt · werd · is// + participe) · distinction **processus / résultat** · condition posée.',
    left: { h: 'ROL A — De makelaar (u-vorm !)', color: 'accent1', icon: 'FaUserTie', items: ['**Fait** : //Het lek is hersteld.//', '**En cours** : //De muur wordt volgende week geschilderd.//', '**Qui paie** : //De kosten worden door … betaald, tenzij de verzekering weigert.//', 'Terminez par une **demande polie** avec zou', 'Imprévu : réduction de loyer demandée → ne promettez rien'] },
    right: { h: 'ROL B — Meneer De Smet', color: 'accent2', icon: 'FaUser', items: ['**Soulagé mais exigeant**', '**3 questions** : //Wanneer wordt de muur geschilderd? Wordt dat door mij betaald? Zou ik een vergoeding kunnen krijgen?//', 'Cartes : ① pressé (famille samedi) · ② méfiant (tout par écrit) · ③ accommodant mais bavard'] },
    foot: { kind: 'tip', label: 'Imprévu', text: '//Dat zou mogelijk zijn, maar daarover beslist de eigenaar. Ik leg het haar voor.//' },
    max: 17,
    notes: "Binômes + observateur. A annonce le plan en trois temps : fait / en cours / qui paie, avec une condition (tenzij) ; B réagit avec au moins trois questions. L’imprévu (demande de réduction de loyer) est glissé par l’observateur : la makelaar ne promet rien (zou mogelijk zijn) et renvoie à la décision de la propriétaire. Coquille du livret : « word(t) / werd is + participe » (il manque « / » avant is).",
  });

  d.picture({
    title: 'TAAK 5 : fait, en cours, qui paie ?', tag: 'ORAL', page: 'Livret p. 23', img: 'p6_28_11',
    capLabel: 'PHRASES-MODÈLES', capColor: 'accent1', capIcon: 'FaPhoneAlt',
    caption: ['**Gedaan** : //Het lek is hersteld.//', '**Bezig** : //De muur wordt volgende week geschilderd.//', '**Wie betaalt ?** : //De kosten worden door de eigenaar betaald, tenzij de verzekering weigert.//', 'Demande polie : //Zou u ons vóór vrijdag kunnen laten weten of de datum past?//'],
    notes: "Planche du livret : trois cartes (gedaan, bezig, wie betaalt ?). Elle sert de modèle aux trois temps de l’annonce. Après les deux rondes, faire redire les trois phrases par la classe en variant le sujet (de kraan, de keuken, de plaatsbeschrijving…). Le passif est volontairement impersonnel : ce n’est pas la makelaar qui « décide », c’est l’action qui est annoncée.",
  });

  d.exhibit({
    title: 'D5 Vertraging! Trois messages pour Stef', tag: 'COUCHE 1', page: 'Livret p. 23a',
    label: 'MESSAGES', docTitle: 'Vrijdagavond',
    lines: [
      ['A · NMBS-app', 'Uw trein van 17.42 uur naar Gent-Sint-Pieters wordt afgeschaft wegens een technisch defect. Een vervangbus wordt ingelegd vanaf het busstation. Reizigers worden verzocht de borden te volgen.'],
      ['B · Loket', 'Wegens werken is dit loket gesloten. Tickets worden verkocht aan de automaten in de stationshal. Wij verontschuldigen ons voor het ongemak.'],
      ['C · Sms', 'Uw pakje werd vandaag om 11.15 uur afgeleverd bij uw buur (nr. 14). U kunt het daar afhalen.'],
    ],
    notes: "Dagelijks leven · Lezen en spreken. Le passif est partout dans l’espace public : on ne dit pas QUI agit, on annonce ce qui est fait. Lecture silencieuse des trois messages (3 min). Incohérence du livret à signaler : ici Stef part « vendredi soir », alors que l’Avonddialoog (p. 2a) dit « zaterdag kom ik naar Gent ».",
  });

  d.exercise({
    title: 'D5 Vertraging! Classer les passifs', tag: 'COUCHE 1', page: 'Livret p. 23a',
    instr: '**1.** Classez les passifs : processus (//wordt, worden//), passé (//werd//) ou résultat (//is//) ? Qui agit vraiment ? **2.** Stef doit-il faire la file au guichet ? · //inleggen// (belgicisme) = ? Seul · 6 min.',
    number: false, qGap: 12,
    items: [
      { q: '**1A** Bericht A', a: '//wordt afgeschaft · wordt ingelegd · worden verzocht// → **processus** ; acteur : la NMBS' },
      { q: '**1B** Bericht B', a: '//is gesloten// → **résultat** ; //worden verkocht// → **processus**' },
      { q: '**1C** Bericht C', a: '//werd afgeleverd// → **passé** ; acteur : le livreur (pakjesdienst)' },
      { q: '**2** File au guichet ?', a: '**Non** : //Tickets worden verkocht aan de automaten.//' },
      { q: '**2** //inleggen// =', a: 'mettre en service, faire circuler' },
    ],
    aside: { label: 'WOORDENSCHAT', color: 'accent3', icon: 'FaBook', lines: ['^^de^^ vervangbus : le bus de remplacement', '%%het%% loket : le guichet', '^^de^^ automaat : le distributeur', '^^de^^ stationshal : le hall de gare', 'afhalen · afleveren : venir chercher · livrer'] },
    notes: "Exercice du livret. Réponses : bericht A = trois passifs au présent (processus) ; l’acteur réel est la NMBS (SNCB). Bericht B = « is gesloten » (résultat : le guichet est fermé) et « worden verkocht » (processus). Bericht C = « werd afgeleverd » (passé). Question 2 : non, il achète à l’automate dans le hall. « inleggen » est un belgicisme : une vervangbus wordt ingelegd = on met en service un bus de remplacement.",
  });

  d.steps({
    title: 'D5 Au téléphone : trois cartes', tag: 'ORAL', page: 'Livret p. 23a',
    intro: 'Binômes · **3 minutes par carte**. A explique la situation à B avec **trois passifs** et une demande polie ; B réagit et pose deux questions.',
    steps: [
      { h: '① Stef belt Lotte', n: '1', color: 'accent2', lines: ['**Train supprimé** (bericht A)', '//Mijn trein wordt afgeschaft.//'] },
      { h: '② Je belt je buur', n: '2', color: 'accent1', lines: ['**Colis** chez le voisin du n° 14 (bericht C)', '//Mijn pakje werd bij u afgeleverd.//'] },
      { h: '③ Je eigen situatie', n: '3', color: 'accent3', lines: ['Un **message** reçu récemment', 'Au moins **3 passifs**'] },
    ],
    foot: { kind: 'tip', label: 'Modèle (carte ①)', text: '//Mijn trein wordt afgeschaft. Een vervangbus wordt ingelegd. Zou je me aan het station kunnen ophalen?// — //Natuurlijk! Hoe laat kom je aan?//' },
    notes: "Activité orale en binômes, 3 minutes par carte. Exiger trois passifs et une demande polie avec zou (« Zou je me aan het station kunnen ophalen ? »). La carte 3 est libre (un message récemment reçu : appli, sms, affiche). Le professeur note les erreurs de worden / zijn pour la mise en commun.",
  });

  d.exercise({
    title: 'Wordt, werd of is?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Choisissez : //wordt · werd · worden · werden · is//. Seul · 4 min.',
    items: [
      'Het lek [[wordt]] morgen hersteld.',
      'De muur [[werd]] gisteren geschilderd.',
      'De badkamer [[is]] geschilderd: u kunt ze weer gebruiken.',
      'De sleutels [[werden]] vorige week afgegeven.',
      'Op dit moment [[wordt]] de keuken vernieuwd.',
      'Alle kosten [[worden]] door de eigenaar betaald.',
    ],
    traps: ['**wordt** = en cours · **is** = terminé · **werd** = passé', 'Pluriel : **worden / werden**', 'Participe en **fin de phrase**'],
    notes: "Exercice ajouté (4 min) : consolide la distinction worden / zijn et l’accord au pluriel. Phrase 1 : wordt peut aussi exprimer une action planifiée (morgen) ; phrase 3 : is = état final.",
  });

  d.table({
    title: 'TAAK 6: het beheersdossier — votre mission finale', tag: 'SYNTHÈSE', page: 'Livret p. 24–25a',
    intro: 'Taak 1 à 5 : candidat, état des lieux, plainte, conseil, solution. Vous **clôturez** votre premier dossier : présentation à la zaakvoerder **et** verslag écrit.',
    headers: ['ÉTAPE', 'DURÉE', 'CONSIGNE', 'VARIANTE DAGELIJKS LEVEN (P. 25A)'], colW: [2.2, 1.55, 5.3, 3.08], boldCol: 0,
    rows: [
      ['① Het dossier afronden', '25 min · binôme', 'Reprenez TAAK 1 à 5 : l’**historique** (imperfectum), ce que chacun a **dit** (discours indirect), les **décisions** (passif), votre **recommandation** (zou). **Mots-clés uniquement** : vous parlez, vous ne lisez pas.', 'Un problème du quotidien (objet perdu, panne, colis, facture, voisin bruyant) : productions D1 à D5'],
      ['② De teamvergadering', '6 min par binôme', 'Présentation **à deux voix** devant un autre binôme (l’exploitant et Yasmina) : chronologie, décisions, budget, recommandation. **3 questions critiques**, puis rôles inversés.', 'Votre « petite catastrophe » racontée à des amis (3 questions critiques)'],
      ['③ Het eindverslag', '15 min · seul', '**10 à 12 phrases**, registre formel : //ten eerste// (imperfectum) → //daarna// (discours indirect) → //vervolgens// (passif) → //kortom// (état final, zou).', 'Message de clôture : ami (informel) ou entreprise (formel)'],
    ],
    notes: "Séquence 6.6 : tâche finale du palier. Étape 1 (en binôme, 10 à 12 minutes en séance) : préparer la présentation avec les productions des TAAK 1 à 5, en mots-clés. Étape 2 : chaque binôme présente 6 minutes devant un autre binôme qui joue l’exploitant et Yasmina et pose au moins trois questions critiques (« Wat zei de huurder precies ? Door wie wordt de schilder betaald ? Wat zou u anders doen ? »), puis on inverse. Étape 3 : le rapport de clôture est écrit en devoir. Variante p. 25a : même déroulé avec un problème du quotidien ; la checklist est identique sauf « Lexique du quotidien (D1 à D5) » au lieu du lexique de la location.",
  });

  d.table({
    title: 'TAAK 6 : checklist de réemploi', tag: 'SYNTHÈSE', page: 'Livret p. 24',
    headers: ['CHECKLIST DE RÉEMPLOI', 'MIN.', '✓', 'EXEMPLES'], colW: [4.5, 0.9, 0.6, 6.13], align: ['left', 'center', 'center', 'left'], size: 17,
    rows: [
      ['Imperfectums (l’historique)', '4', '☐', '//was · had · belde · ging//'],
      ['Discours indirects', '3', '☐', '//zei dat · vroeg of · vroeg + vraagwoord//'],
      ['Passifs', '3', '☐', '//wordt · werd · is + participe//'],
      ['Conseil, politesse, hypothèse (ZOU)', '3', '☐', '//Ik zou… · Zou u…? · Dat zou … kunnen zijn//'],
      ['Acquis du palier 5', '4', '☐', '//relatives · er / waar + prép. · zodra · tenzij//'],
      ['Lexique de la location (mindmap 6.1)', '10', '☐', '//de waarborg · de plaatsbeschrijving · opzeggen…//'],
    ],
    foot: 'Variante du quotidien : la dernière ligne devient « Lexique du quotidien (D1 à D5) » — minimum 10.',
    notes: "Checklist du livret : à cocher pendant la préparation (étape 1). Les minimums correspondent à la performance finale (présentation et rapport). Les exemples de la dernière colonne rappellent les structures de chaque séquence : 6.2 imperfectum, 6.3 discours indirect, 6.5 passif, 6.4 zou. Le lexique de la location : voir la banque de mots de la séance 6.",
  });

  d.table({
    title: 'TAAK 6 : structure du verslag et phrases-modèles', tag: 'SYNTHÈSE', page: 'Livret p. 25',
    headers: ['CONNECTEUR', 'CONTENU · OUTIL', 'PHRASE-MODÈLE'], colW: [2.2, 3.8, 6.13], size: 17,
    rows: [
      ['**Ten eerste**', 'l’historique · **imperfectum**', 'Ten eerste was de muur bij intrede wit en in goede staat.'],
      ['**Daarna**', 'les échanges · **discours indirect**', 'Daarna belde de huurder: hij zei dat er een lek was en vroeg of wij snel konden komen.'],
      ['**Vervolgens**', 'les actions · **passif**', 'Vervolgens werd het lek hersteld en wordt de muur geschilderd.'],
      ['**Kortom**', 'état final · recommandation (**zou**)', 'Kortom: het lek is hersteld, en ik zou de eigenaar aanraden de verzekering te contacteren.'],
    ],
    foot: 'Minimum 10 à 12 phrases, registre **formel** (//Geachte… · Met vriendelijke groeten//) — mots-clés à l’oral, phrases complètes à l’écrit.',
    notes: "Étape 3 (individuel, 15 minutes, à terminer à la maison) : le rapport de clôture suit l’ordre ten eerste → daarna → vervolgens → kortom. Les phrases-modèles ne sont pas un corrigé : elles montrent comment chaque connecteur introduit un outil du palier. Le verslag peut être remis au professeur pour correction. Rappeler les règles d’ordre des mots : verbe en 2e position, infinitif / participe à la fin, verbe à la fin dans les subordonnées (dat, of, tenzij, zodra).",
  });

  d.closing({
    cliff: 'Après le palier 6 : **bilan et auto-évaluation**. En six tâches : lexique, imperfectum, discours indirect, **zou**, passif… et un dossier complet. Puis le **palier 7**.',
    homework: ['Terminer l’**étape 3** : le **eindverslag** (10 à 12 phrases, registre formel).', 'Compléter votre **checklist de réemploi** (ce qu’il manque).', 'Apprendre **wordt / werd / is + participe** (p. 20) avec un exemple par temps.', 'D5 : écrire 3 phrases au passif à partir d’un message reçu cette semaine.'],
    exit: 'Dites : « la fuite **est réparée** » (résultat) et « le mur **est en train d’être peint** » (processus).',
    notes: "Ticket de sortie à l’oral. Réponses : « Het lek is hersteld. » et « De muur wordt geschilderd. ». Rappeler la remise du eindverslag et, si l’étape 2 de la TAAK 6 n’a pas pu être jouée, la reporter au début de la séance suivante.",
  });
};
