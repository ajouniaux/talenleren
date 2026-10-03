// Séance 3 — Palier 5 : séquence 5.3 (De klant begrijpen — met wie, waarover, eraan) — Livret p. 11–14a
exports.meta = {
  n: 3, slug: 'De_klant_begrijpen', title: 'De klant begrijpen',
  subtitle: 'Met wie, waarover, eraan — relatifs avec préposition et adverbes pronominaux',
  pages: 'Livret p. 11–14a', img: 'p5_14_8', time: '5.3', sceneLabel: 'SÉQUENCE',
  block: 'Palier 5 · Van opdracht tot verkoop',
  coverNotes: "Séance centrée sur « le sommet du palier » : le relatif avec préposition (de klant met wie…, de woning waaraan…) et les adverbes pronominaux (ik wacht erop, daarover kom ik terug), y compris coupés en deux. Activités : exercice 6 (persoon of ding), écoute de la visite (exercice 7), TAAK 3 (la rondleiding) et D3 (verbes + prépositions fixes).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Parler d’**une personne** (//met wie//) ou d’**une chose** (//waaraan, waarover//) et remplacer un groupe par **er- / daar- + préposition**.',
    language: '//de klant met wie… · de woning waarover… · Ik wacht erop · Daarover kom ik zo terug · Waar heb jij zin in?//',
    skills: 'Choisir wie ou waar- + préposition · repérer les adverbes pronominaux coupés · écouter une visite · mener une visite guidée · relier verbe et préposition',
    agenda: [['Rappel die / dat', 5], ['5.3 · pourquoi ce point est décisif', 10], ['Grammaire : wie, waar-, er-', 15], ['6 Persoon of ding ?', 10], ['7 Luisteren : de bezichtiging', 10], ['TAAK 3 · De rondleiding', 15], ['D3 · Waar heb jij zin in ?', 20], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. La séance couvre les pages 11 à 14a du livret. C’est la séquence la plus difficile du palier : laisser du temps aux exemples et faire manipuler le tableau waar / er / daar. La page 12 du livret est une planche illustrée (valkuil / oplossing / fusieregel), reprise ici en trois temps.",
  });

  d.exercise({
    title: 'Échauffement : die ou dat ?', tag: 'ÉCHAUFFEMENT', page: 'Hors syllabus',
    instr: 'Oral · par deux · 3 min. Complétez avec **die** ou **dat**, puis dites où se trouve le **verbe**.',
    gap: 10,
    items: [
      'Het appartement [[dat]] te huur staat, ligt in Elsene.',
      'De klanten [[die]] morgen komen, willen een rijhuis.',
      'Ik zoek een woning [[die]] vlak bij het station ligt.',
      'Dat is het terras [[dat]] op het zuiden ligt.',
    ],
    traps: ['**het** + singulier → **dat** ; **de** ou pluriel → **die**.', 'Le verbe conjugué est **en dernière position** : staat, komen, ligt, ligt.'],
    notes: "Rappel de la séance 2. Faire dire l’article du mot de tête avant de choisir (het appartement, de klanten, de woning, het terras). Réponses : dat, die, die, dat.",
  });

  d.scene({
    title: 'Séquence 5.3 : comprendre le client', tag: 'FOCUS', page: 'Livret p. 11', img: 'p5_14_8',
    text: ['Le **sommet du palier** : « le client **avec qui** j’ai rendez-vous », « j’**y** reviendrai ».', '**Focus : lignes 2, 6, 7 et 9**', '«Waar**over** gaat het dossier **waaraan** we samen gaan werken?»', '«…de advertentie **waarover** je een mail hebt gestuurd»', '«Ik wacht **erop** sinds vrijdag.» · «…iemand **met wie** ik goed kan samenwerken.»'],
    ask: 'Quelle différence entre « avec qui » et « waarover » ? Personne ou chose ?',
    notes: "Réponse : met wie = personne (iemand, de klant) ; waarover / waaraan = chose (het dossier, de advertentie). « Erop » remplace « op + chose » (op de foto’s ; ici : wachten op de foto’s). Le français vous tend ses pièges les plus sournois : lequel / auquel n’existent pas en néerlandais.",
  });

  d.picture({
    title: 'Relatieve voorzetsels bij dingen : de valkuil', tag: 'GRAMMATICA', page: 'Livret p. 12', img: 'p5_15_9',
    capLabel: 'LA FUSION', capColor: 'accent2', capIcon: 'FaPuzzlePiece',
    caption: ['**✗ de woning aan die u denkt** : calque de « auquel », **impossible**.', '**✓ de woning waaraan u denkt** : waar + aan = **waaraan**.', 'waar + over = **waarover** · waar + mee = **waarmee**', '⚠ **met → mee** · **tot → toe**'],
    notes: "Page 12 du livret : planche illustrée « Relatieve voorzetsels bij dingen : de valkuil en de oplossing ». Valkuil (piège) : traduire « auquel » par « aan die » est impossible en néerlandais. Oplossing : pour une chose, waar + préposition se soudent (« de klinkerverbinding maakt er één woord van »). Fusieregel : waar + aan → waaraan ; waar + over → waarover ; waar + mee → waarmee. Attention : met devient mee, tot devient toe.",
  });

  d.cards({
    title: 'Trois outils : wie, waar-, er-', tag: 'GRAMMATICA', page: 'Livret p. 11–12', perRow: 3,
    cards: [
      { h: '① PERSONNE', color: 'accent2', f: 'prép. + wie', lines: ['//de klant **met wie** ik een afspraak heb//', '//iemand **met wie** ik goed kan samenwerken//', '//de collega **aan wie** ik de mail stuur//'] },
      { h: '② CHOSE (relative)', color: 'accent3', f: 'waar + prép.', lines: ['//de woning **waaraan** u denkt//', '//het dossier **waarover** je een mail hebt gestuurd//', '//het budget **waarmee** wij werken//'] },
      { h: '③ CHOSE (pronom)', color: 'accent4', f: 'er / daar + prép.', lines: ['//Ik wacht **erop** sinds vrijdag.//', '//**Daarover** kom ik zo terug.//', '//Ik heb **er** twintig minuten **op** gewacht.//'] },
    ],
    foot: { kind: 'trap', text: 'En français : //auquel, avec qui, j’y reviens//. En néerlandais, pour une **chose** : ✗ //aan die// · ✗ //op het//. Pour une **personne** : la préposition reste avec **wie** (//met wie//).' },
    notes: "Trois cas à distinguer : (1) personne → préposition + wie ; (2) chose dans une relative → waar + préposition (soudé ou coupé : waaraan u denkt / waar u aan denkt) ; (3) chose déjà nommée, remplacée par un pronom → er + préposition (ou daar + préposition en début de phrase). Pour les personnes, on ne dit jamais « erop » : « Ik wacht op hem ». Tout adverbe pronominal en « er » peut se couper : « ik heb er twintig minuten op gewacht » (attention : à lire deux fois dans le dialogue du soir).",
  });

  d.table({
    title: 'Le tableau de fusion : waar / er / daar + préposition', tag: 'À RETENIR', page: 'Livret p. 12',
    headers: ['PRÉPOSITION', 'WAAR + … (relative)', 'ER + … (pronom)', 'DAAR + … (début de phrase)'],
    colW: [2.5, 3.2, 3.2, 3.23], boldCol: 0,
    rows: [
      ['aan', 'waaraan', 'eraan', 'daaraan'],
      ['over', 'waarover', 'erover', 'daarover'],
      ['op', 'waarop', 'erop', 'daarop'],
      ['voor', 'waarvoor', 'ervoor', 'daarvoor'],
      ['van', 'waarvan', 'ervan', 'daarvan'],
      ['in', 'waarin', 'erin', 'daarin'],
      ['naar', 'waarnaar', 'ernaar', 'daarnaar'],
      ['met → **mee**', 'waar**mee**', 'er**mee**', 'daar**mee**'],
      ['tot → **toe**', 'waar**toe**', 'er**toe**', 'daar**toe**'],
    ],
    foot: '⚠ **met → mee** et **tot → toe** : ✗ //waarmet · ermet// → ✓ //waarmee · ermee//.',
    notes: "Tableau de synthèse à faire compléter oralement colonne par colonne. D’autres prépositions suivent la même logique : bij → erbij / waarbij ; uit → eruit / waaruit ; om → erom / waarom (attention : « waarom » = pourquoi) ; achter → erachter. À l’oral, la forme « daar + prép. » se place plutôt en tête de phrase pour insister : « Daarover kom ik zo terug ».",
  });

  d.blocks({
    title: 'Soudés ou coupés : la place du verbe', tag: 'GRAMMATICA', page: 'Livret p. 11–12',
    intro: 'L’adverbe pronominal peut être **soudé** ou **coupé en deux**. Dans la relative, le verbe reste **à la fin**.',
    rows: [
      { label: 'Soudé', cells: [{ t: 'De woning', role: 'O' }, { t: 'waaraan', role: 'C', lab: 'waar + aan' }, { t: 'u', role: 'S' }, { t: 'denkt', role: 'V', lab: 'verbe → FIN' }], fr: 'Le bien auquel vous pensez.' },
      { label: 'Coupé', cells: [{ t: 'De woning', role: 'O' }, { t: 'waar', role: 'C' }, { t: 'u', role: 'S' }, { t: 'aan', role: 'F', lab: 'prép.' }, { t: 'denkt', role: 'V', lab: 'verbe → FIN' }], fr: 'Même sens : waar … aan.' },
      { label: 'Personne', cells: [{ t: 'De klant', role: 'O' }, { t: 'met wie', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'morgen', role: 'T' }, { t: 'een afspraak', role: 'O' }, { t: 'heb', role: 'V' }], fr: 'Le client avec qui j’ai rendez-vous demain.' },
      { label: 'Er coupé', cells: [{ t: 'Ik', role: 'S' }, { t: 'heb', role: 'V' }, { t: 'er', role: 'X', lab: 'pronom' }, { t: 'twintig minuten', role: 'T' }, { t: 'op', role: 'F', lab: 'prép.' }, { t: 'gewacht', role: 'F', lab: 'participe' }], fr: 'Je l’ai attendu vingt minutes (le tram).' },
      { label: 'Daar coupé', cells: [{ t: 'Daar', role: 'X', lab: 'pronom' }, { t: 'heb', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'al', role: 'T' }, { t: 'aan', role: 'F', lab: 'prép.' }, { t: 'gedacht', role: 'F', lab: 'participe' }], fr: 'J’y ai déjà pensé.' },
    ],
    notes: "Les deux dernières lignes viennent du dialogue du soir (« ik heb er twintig minuten op gewacht » ; « Daar heb ik al aan gedacht! ») : c’est l’occasion de montrer que le pronom (er / daar) saute vers l’avant et que la préposition reste près du verbe final. Dans la phrase 5, « Daar » en tête → inversion (heb ik).",
  });

  d.exercise({
    title: '6 Persoon of ding ? De klantendienst', tag: 'COUCHE 2', page: 'Livret p. 13',
    instr: 'Couche 2 · seul·e · 8 min. Complétez : **prép. + wie** (personne) ou **waar- + préposition** (chose).',
    gap: 8, qGap: 14,
    items: [
      'De klant [[met wie]] ik morgen een bezichtiging heb, heet Claes. (personne)',
      'De woning [[waarin]] u geïnteresseerd bent, is net verkocht. (geïnteresseerd zijn //in// — chose)',
      'Het bod [[waarop]] de eigenaar wacht, komt misschien vandaag. (wachten //op// — chose)',
      'De collega [[met wie]] ik dit dossier voorbereid, is op vakantie. (voorbereiden //met// — personne)',
      'Het budget [[waarover]] wij praten, is realistisch. (praten //over// — chose)',
    ],
    sideW: 3.9,
    traps: ['**Personne** → préposition + **wie**.', '**Chose** → **waar** + préposition (soudés ou coupés : //waar u in geïnteresseerd bent//).', 'Le verbe reste **à la fin** : bent · wacht · voorbereid · praten.'],
    notes: "Coquille / précision : la consigne parle d’« adverbe pronominal » mais les items 1 et 4 sont des personnes → « met wie » (préposition + wie, pas un adverbe pronominal). Item 2 : « geïnteresseerd zijn in » → waarin ; variante coupée : « waar u in geïnteresseerd bent ». Item 4 : « voorbereiden » est séparable (ik bereid voor) ; dans la subordonnée la particule se ressoude : « ik dit dossier voorbereid ». Item 3 : « wachten op » → waarop.",
  });

  d.listening({
    title: '7 Luisteren — De bezichtiging', tag: 'COUCHE 1', page: 'Livret p. 13',
    who: 'Dialogue de visite — lu deux fois par le professeur',
    meta: 'Couche 1 · réception · seul · 10 min — un agent et un couple de clients visitent un bien.',
    steps: [
      { icon: 'FaHeadphones', h: '1re écoute', t: '**Cochez** les pièces visitées (a).' },
      { icon: 'FaPenNib', h: '2e écoute', color: 'accent1', t: '**Notez** les 3 questions des clients et la réponse de l’agent avec **er + préposition** (b, c, d).' },
      { icon: 'FaCheck', h: 'Ensuite', color: 'accent3', t: 'Les clients veulent-ils **un bod** (e) ? Comparez à deux.' },
    ],
    notes: "Le texte du dialogue de visite n’est pas reproduit dans le livret principal (annexe) : lire le texte du dossier du professeur. La solution (pièces visitées, questions, réponses, décision des clients) dépend de ce texte : ne pas la déduire. Repérer surtout les réponses de l’agent avec « er + préposition » (erover, erin, eraan, ervoor…).",
  });

  d.table({
    title: '7 Luisteren — De bezichtiging : la grille', tag: 'COUCHE 1', page: 'Livret p. 13',
    intro: 'Notez des **mots-clés** (pièces, questions, réponses).',
    headers: ['', 'DE BEZICHTIGING', 'MOTS-CLÉS'],
    colW: [0.7, 5.6, 5.83], align: ['center', 'left', 'left'], boldCol: 0,
    rows: [
      ['a', 'Wat zijn de bezochte ruimtes?', ''],
      ['b', 'Vraag 1 van de klanten + antwoord', ''],
      ['c', 'Vraag 2 van de klanten + antwoord', ''],
      ['d', 'Vraag 3 van de klanten + antwoord', ''],
      ['e', 'Willen de klanten een bod uitbrengen?', ''],
    ],
    foot: 'Pièces : //de woonkamer · de keuken · de slaapkamer · de badkamer · het terras · de kelder//. Réponse de l’agent : cherchez //erover · erin · eraan · ervoor…//',
    notes: "Grille projetée pour la mise en commun. Solution selon le texte lu par le professeur : ne pas improviser. Pour la mise en commun, demander aux étudiants de reformuler la réponse avec une phrase complète contenant l’adverbe pronominal (par exemple « Ik kom erop terug »).",
  });

  d.compare({
    title: 'TAAK 3 — De rondleiding : les deux rôles', tag: 'ORAL', page: 'Livret p. 14',
    intro: 'Trois rondes de **4 min** : après chaque ronde, **changez de carte et de rôle**. Le 3e étudiant observe.',
    left: { h: 'ROL A — De makelaar (u-vorm !)', color: 'accent1', icon: 'FaUserTie', items: ['Faites visiter le **rijhuis de la TAAK 2**, pièce par pièce', '**2 relatives** : «Dit is de keuken die…»', '**2 adverbes pronominaux** : «Daarover kom ik zo terug»', '**1 comparaison** : groter dan · even duur als', '**Imprévu** : «Daarop moet ik het antwoord opzoeken. Ik kom erop terug.»'] },
    right: { h: 'ROL B — De klant(en)', color: 'accent2', icon: 'FaUser', items: ['Visitez et posez **au moins 3 questions**', 'Dont une avec **waar + préposition** : «Waarvoor dient deze ruimte? Waaraan moet ik denken?»', 'Cartes : ① couple pressé · ② client méfiant · ③ investisseur (de huurprijs)'] },
    mid: 'A/B',
    foot: { kind: 'tip', label: 'Grille de l’observateur', text: 'relatives entendues · adverbes pronominaux · gestion de l’imprévu (que l’observateur glisse à mi-visite).' },
    notes: "Taak 3 (production orale, jeu de rôle). Trois rondes de 4 minutes ; l’observateur glisse l’imprévu à mi-visite : le client demande un détail que l’agent ignore, qui doit répondre « Daarop moet ik het antwoord opzoeken. Ik kom erop terug. » Préparer trois cartes de situation. Le rijhuis est celui de la TAAK 2 (Sint-Gillis, 150 m², 3 slpk.).",
  });

  d.table({
    title: 'Boîte à outils : la rondleiding', tag: 'WOORDENSCHAT', page: 'Hors syllabus',
    headers: ['NEDERLANDS', 'FRANÇAIS'],
    colW: [6.6, 5.53],
    rows: [
      ['Dit is de keuken die in 2025 vernieuwd is.', 'Voici la cuisine qui a été rénovée en 2025.'],
      ['Dit is de slaapkamer die op de tuin uitkijkt.', 'Voici la chambre qui donne sur le jardin.'],
      ['Waarvoor dient deze ruimte?', 'À quoi sert cette pièce ?'],
      ['Waaraan moet ik denken?', 'À quoi dois-je penser ?'],
      ['Daarover kom ik zo terug.', 'J’y reviens dans un instant.'],
      ['Daarop moet ik het antwoord opzoeken. Ik kom erop terug.', 'Je dois chercher la réponse. J’y reviendrai.'],
      ['De keuken is groter dan u denkt.', 'La cuisine est plus grande que vous ne le pensez.'],
    ],
    foot: 'Piège : //Daarop **moet ik** het antwoord opzoeken// — l’adverbe en tête, donc **inversion** (verbe en 2e position). ✗ //Daarop ik moet…//',
    notes: "Phrases utiles pour la TAAK 3. Faire repérer dans chaque phrase le verbe final de la relative (vernieuwd is, uitkijkt) et l’inversion après l’adverbe en tête. « Uitkijken op » (donner sur) : particule ressoudée dans la subordonnée : « die op de tuin uitkijkt ». Cette diapositive est un ajout hors syllabus.",
  });

  d.dialogue({
    title: 'TAAK 3 — Une visite réussie (modèle)', tag: 'DIALOOG', page: 'Hors syllabus', max: 17,
    colors: { MAKELAAR: 'accent1', KLANT: 'accent2' },
    lines: [
      ['MAKELAAR', '«Welkom! Dit is de woonkamer, die op het zuiden ligt.»', '1'],
      ['KLANT', '«Mooi licht! En de keuken?»', '2'],
      ['MAKELAAR', '«Dit is de open keuken die in 2025 vernieuwd is. Ze is groter dan u denkt.»', '3'],
      ['KLANT', '«Waarvoor dient die kleine kamer?»', '4'],
      ['MAKELAAR', '«Dat is het bureau, ideaal voor een klant die thuis werkt. Daar kunt u ook een kinderkamer van maken.»', '5'],
      ['KLANT', '«Waaraan moet ik denken als ik de badkamer wil vernieuwen?»', '6'],
      ['MAKELAAR', '«Daarop moet ik het antwoord opzoeken. Ik kom erop terug.»', '7'],
      ['KLANT', '«Goed. Is de buurt rustig?»', '8'],
      ['MAKELAAR', '«Ja, het is een buurt waar u goed kunt wonen: de halte ligt om de hoek.»', '9'],
      ['KLANT', '«Dank u wel. Ik denk er nog over na.»', '10'],
    ],
    notes: "Modèle indicatif pour la TAAK 3 (ajout hors syllabus). Relatives : die op het zuiden ligt, die in 2025 vernieuwd is, die thuis werkt, waar u goed kunt wonen. Adverbes pronominaux : Daar… van, Daarop, erop, er… over. Comparaison : groter dan u denkt. Gestion de l’imprévu : ligne 7. « Ik denk er nog over na » : nadenken over → erover nadenken, coupé et particule séparée à la fin (denk … na).",
  });

  d.table({
    title: 'D3 — Zo zeg je dat : werkwoorden met een vast voorzetsel', tag: 'WOORDENSCHAT', page: 'Livret p. 14a',
    headers: ['NEDERLANDS', 'FRANÇAIS', 'NEDERLANDS', 'FRANÇAIS'],
    colW: [3.0, 3.1, 3.0, 3.03], boldCol: 0,
    rows: [
      ['zin hebben in', 'avoir envie de', 'genieten van', 'savourer, profiter de'],
      ['uitkijken naar', 'se réjouir de', 'trots zijn op', 'être fier / fière de'],
      ['denken aan', 'penser à', 'bang zijn voor', 'avoir peur de'],
      ['wachten op', 'attendre', 'praten over', 'parler de'],
      ['zich ergeren aan', 'être agacé·e par', 'zorgen voor', 's’occuper de'],
    ],
    foot: 'Mémorisez par **paires** verbe + préposition, comme des collocations : la préposition fait partie du verbe.',
    notes: "La séquence 5.3 l’a montré : beaucoup de verbes néerlandais s’accrochent à une préposition fixe. Faire répéter les paires, puis faire construire une phrase avec trois verbes. Prononciation : « uitkijken naar » (la préposition porte l’accent secondaire).",
  });

  d.traps({
    title: 'D3 — Le calque du français : la préposition manque', tag: 'PIÈGE', page: 'Livret p. 14a',
    intro: 'En français, //attendre, aimer, écouter// se construisent **sans préposition**. En néerlandais, impossible !',
    rows: [
      ['Ik wacht de tram.', 'Ik wacht **op** de tram.', 'wachten **op**'],
      ['Ik luister muziek.', 'Ik luister **naar** muziek.', 'luisteren **naar**'],
      ['Ik hou chocolade.', 'Ik hou **van** chocolade.', 'houden **van**'],
      ['Ik ben bang van honden.', 'Ik ben bang **voor** honden.', 'bang zijn **voor**'],
      ['Ik denk mijn zus.', 'Ik denk **aan** mijn zus.', 'denken **aan**'],
      ['Ik kijk uit de vakantie.', 'Ik kijk **uit naar** de vakantie.', 'uitkijken **naar**'],
    ],
    notes: "Les deux premières lignes sont celles du livret (✗ Ik wacht de tram · ✗ Ik luister muziek) ; les quatre autres sont ajoutées pour compléter le tableau du D3. Faire corriger oralement, puis faire inventer une phrase vraie pour chaque verbe.",
  });

  d.exercise({
    title: 'D3 — Speed-dating : Waar heb jij zin in ?', tag: 'ORAL', page: 'Livret p. 14a', mode: 'show',
    instr: 'Oral · par deux · 3 min par binôme, puis on tourne. Posez une question avec **waar + préposition**, répondez, puis réagissez avec **daar + préposition**.',
    cols: 2, gap: 10, numFmt: (k) => ['①', '②', '③', '④', '⑤', '⑥'][k - 1] + '  ',
    items: [
      'Waar kijk je deze maand naar uit?',
      'Waaraan erger je je op de tram of in de trein?',
      'Waar geniet je van op zondag?',
      'Waar ben je trots op?',
      'Waarover praat je graag met je vrienden?',
      'Waar ben je een beetje bang voor?',
    ],
    notes: "Modèle de la fiche : « Waar heb jij zin in dit weekend? — Ik heb zin in een etentje met vrienden. — Daar heb ik ook zin in! » Bilan collectif : chacun rapporte une réponse surprenante (« Sarah kijkt uit naar haar citytrip naar Gent. Daar kijk ik ook naar uit! »). Corriger au fil de l’eau : la préposition reste à la fin (« Waar ben je trots op ? »), jamais « Op wat ben je trots ? » à ce niveau.",
  });

  d.exercise({
    title: 'Vervang door er + voorzetsel', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul·e · 5 min. Remplacez le groupe en **gras** par un adverbe pronominal (**er + préposition**).',
    gap: 6, qGap: 12,
    items: [
      { q: 'Ik wacht op **de tram**.', a: 'Ik wacht **erop**.' },
      { q: 'Wij praten over **het budget**.', a: 'Wij praten **erover**.' },
      { q: 'Stef denkt aan **een fiets**.', a: 'Stef denkt **eraan**.' },
      { q: 'Ik heb zin in **een etentje**.', a: 'Ik heb **er** zin **in**.' },
      { q: 'Yasmina werkt met **de nieuwe software**.', a: 'Yasmina werkt **ermee**.' },
      { q: 'Hij kijkt uit naar **het weekend**.', a: 'Hij kijkt **ernaar** uit.' },
    ],
    sideW: 3.9,
    traps: ['**met → mee** : //ermee//.', 'Coupé : //Ik heb **er** zin **in**//.', 'Séparable : //Hij kijkt **ernaar** uit//.', '**Personne** : pas de « er » : //Ik wacht **op hem**//.'],
    notes: "Exercice ajouté : transformation de groupes nominaux « chose » en adverbes pronominaux, avec trois difficultés : met → mee (ermee), le pronom coupé (er … in), et le verbe séparable (ernaar … uit). Phrases 4 et 6 : à faire lire deux fois. Rappel : on ne remplace par « er » que des choses ; pour une personne on garde préposition + pronom personnel (op hem, aan haar).",
  });

  d.closing({
    cliff: 'Séance 4 : **zodra, tenzij, aangezien…** — six nouvelles conjonctions, la langue du contrat, et la **mail de meneer Peeters**.',
    homework: ['Apprendre le tableau **waar / er / daar + préposition** (met → mee, tot → toe).', 'Écrire **5 phrases** vraies avec un adverbe pronominal (D3).', 'Préparer la **TAAK 3** avec une 2e carte de situation (rôles inversés).', 'Relire les deux dialogues : repérer les adverbes pronominaux **coupés**.'],
    exit: 'Remplacez par un adverbe pronominal : //Ik wacht op de tram.// → //Ik wacht ___.//',
    notes: "Ticket de sortie : « erop ». Annoncer la séance 4 : le rituel d’ouverture sera de réciter de mémoire les huit conjonctions du palier 4 avec leur sens (2 minutes, sans notes) — à réviser à la maison.",
  });
};
