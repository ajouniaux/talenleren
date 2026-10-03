// Séance 6 — Palier 6 · De huurmarkt (Séquence 6.1) — Livret p. 1–7a
exports.meta = {
  n: 6, slug: 'De_huurmarkt', title: 'De huurmarkt',
  subtitle: 'Le lexique de la location — Yasmina confie son premier dossier à Stef',
  pages: 'Livret p. 1–7a', img: 'p6_01_1', time: '6.1', sceneLabel: 'SÉQUENCE',
  block: 'Palier 6 · Verhuur en beheer',
  coverNotes: "Première séance du palier 6 (la location et la gestion). Objectifs : réactiver les structures du palier 5, présenter les six piliers du palier, lire le dialogue du jeudi matin et le dialogue du soir (fil rouge « semaine de malchance »), puis entrer dans la séquence 6.1 (lexique de la location) jusqu’à la TAAK 1 et l’activité D1 (Lenen, huren of uitlenen?). Pages couvertes : p. 1 à 7a du livret (le pied de page du livret indique « Page N / 25 »).",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Parler de la **location** avec le bon lexique, **recevoir un candidat locataire** et distinguer //huren · verhuren · lenen · uitlenen//.',
    language: '//de huurder · de verhuurder · de waarborg · het huurcontract · de plaatsbeschrijving// — //opzeggen · opstellen · lenen van / aan//',
    skills: 'Lire deux dialogues · repérer le lexique · comprendre un message vocal (mots-clés) · mener un entretien formel (//u//) avec un candidat locataire',
    agenda: [['Rappel du palier 5', 8], ['Palier 6 · dialogue du jeudi matin', 10], ['Avonddialoog · semaine de malchance', 12], ['Séquence 6.1 · mindmap · lexique', 12], ['Ex. 2 Collocaties', 8], ['Ex. 3 Voicemail de meneer De Smet', 10], ['TAAK 1 · De kandidaat-huurder', 15], ['D1 · Lenen, huren of uitlenen?', 12], ['Bilan', 3]],
    notes: "Durées indicatives sur 90 minutes. La séance couvre les pages 1 à 7a du livret. Les deux dialogues sont lus en début de séance et reviendront à chaque séance du palier : les « Focus » des séquences 6.1 à 6.5 renvoient tous à des répliques du dialogue du matin (numérotées ici 1 à 10). Si le temps manque, D1 (jeu de rôle) peut être raccourci à une seule ronde.",
  });

  d.exercise({
    title: 'Réveil du palier 5 : phrases-clés', tag: 'ÉCHAUFFEMENT', page: 'Rappel palier 5',
    instr: 'Traduisez en néerlandais — seul, 5 min, puis correction orale en groupe.',
    items: [
      { q: '« Un appartement qui a trois chambres. »', a: 'Een appartement **dat** drie slaapkamers **heeft**.' },
      { q: '« La maison dont nous parlons. »', a: 'De woning **waarover** we praten.' },
      { q: '« Je vous rappelle dès que le propriétaire répond. »', a: 'Ik bel u terug **zodra** de eigenaar antwoordt.' },
      { q: '« Nous signons, sauf si l’acheteur refuse. »', a: 'Wij tekenen, **tenzij** de koper weigert.' },
      { q: '« À quoi sert la garantie ? »', a: '**Waarvoor** dient de waarborg?' },
    ],
    aside: { label: 'POURQUOI ?', lines: ['Ces structures reviennent dans la **TAAK 1** :', 'relative (//dat, die, waar//)', '//waar// + préposition', '//zodra · tenzij · als//', 'Le **verbe** part à la fin de la subordonnée.'], color: 'accent2', icon: 'FaLightbulb' },
    sideW: 3.9,
    notes: "Rappel de la fin du palier 5 (vente d’un bien) : relatives avec verbe à la fin, waar + préposition (waarvoor, waarover), zodra, tenzij. Durée : 8 min. Faire traduire à l’oral phrase par phrase ; accepter « die » pour un mot en de (ex. « Een woning die… »). Insister sur la place du verbe en fin de subordonnée : c’est la même mécanique que pour le discours indirect (séance 8) et le passif (séance 10).",
    notesA: "Corriger en faisant relire chaque phrase. Piège fréquent : « waarover » mal séparé (« waar we over praten » est aussi correct : « De woning waar we over praten »). Les deux formes sont acceptées.",
  });

  d.cards({
    title: 'Palier 6 : la location et la gestion', tag: 'PLAN', page: 'Livret p. 1',
    intro: 'Au palier 5, vous avez **vendu** un bien. Ici : **louer** et **gérer** — le premier dossier de Stef.',
    perRow: 3,
    cards: [
      { h: '① LEXIQUE', color: 'accent1', lines: ['**6.1** · acteurs, documents, argent', '//de huurder · de waarborg//'] },
      { h: '② IMPERFECTUM', color: 'accent2', lines: ['**6.2** · décrire un état passé', '//De muur was nat.//'] },
      { h: '③ DISCOURS INDIRECT', color: 'accent3', lines: ['**6.3** · rapporter un client', '//Hij zei dat er een lek was.//'] },
      { h: '④ ZOU', color: 'accent4', lines: ['**6.4** · politesse, conseil', '//Zou u…? Ik zou…//'] },
      { h: '⑤ PASSIF', color: 'accent6', lines: ['**6.5** · décisions, annonces', '//De lekkage wordt hersteld.//'] },
      { h: '⑥ QUATRE COMPÉTENCES', color: 'tx2', lines: ['écouter · lire · écrire · parler', '**TAAK 1 à 6** (dossier final)'] },
    ],
    foot: { kind: 'keep', label: 'Fil rouge', text: 'Le dossier de la **Waversesteenweg** (Immo Van Damme) et, hors du bureau, la **semaine de malchance** de Stef (D1 à D5).' },
    notes: "Présenter les six piliers du palier (p. 1 du livret). Montrer le lien avec le palier 5 : on garde les relatives, waar + préposition, zodra, tenzij. L’imperfectum était seulement reconnu au palier 4 ; il devient actif ici. Le fil rouge : un dossier de gestion (Yasmina, Stef, mevrouw Dubois, meneer De Smet) et, à côté, la semaine de malchance de Stef (D1 à D5, une activité par séance : séances 6 à 10).",
  });

  d.dialogue({
    title: 'Zesde dialoog: donderdagochtend bij Immo Van Damme', tag: 'DIALOOG', page: 'Livret p. 2',
    lines: [
      ['YASMINA', '«Stef, ik heb goed nieuws: zou jij het dossier van de Waversesteenweg willen beheren? Helemaal alleen deze keer.»', '1'],
      ['STEF', '«Echt? Graag! Waarover gaat het precies?»', '2'],
      ['YASMINA', '«Een appartement in Elsene dat we verhuren voor mevrouw Dubois. De keuken werd vorig jaar volledig vernieuwd, dus het verhuurt makkelijk.»', '3'],
      ['STEF', '«Klinkt goed. Maar je kijkt bezorgd — is er een probleem?»', '4'],
      ['YASMINA', '«Ja. De huurder belde gisteren. Hij zei dat er een lek in de badkamer was, en hij vroeg of we snel konden langskomen.»', '5'],
      ['STEF', '«Oei. En toen?»', '6'],
      ['YASMINA', '«Toen ik gisteravond langsging, was de muur al nat. Vroeger had het gebouw nooit problemen — het werd in 2018 gerenoveerd.»', '7'],
      ['STEF', '«Wat zou jij doen als eerste stap?»', '8'],
      ['YASMINA', '«Ik zou meteen de loodgieter bellen om de schade te beperken. De herstelling wordt normaal door de eigenaar betaald, tenzij de huurder iets verkeerd heeft gedaan.»', '9'],
      ['STEF', '«Oké. Ik bel de loodgieter, ik stel mevrouw Dubois gerust, en ik schrijf een verslag. Kortom: mijn eerste beheersdossier begint vandaag!»', '10'],
    ],
    notes: "Lecture 1 par le professeur (livre fermé : compréhension globale), lecture 2 en binôme (Yasmina / Stef), puis trois questions orales : Qui est mevrouw Dubois ? Quel est le problème ? Que va faire Stef ? Les répliques sont numérotées de 1 à 10 : les Focus du livret renvoient à ces numéros (6.1 : lignes 3 et 9 · 6.2 : 5 et 7 · 6.3 : 5 · 6.4 : 1, 8, 9 · 6.5 : 3, 7, 9). Incohérence du livret à signaler : Yasmina dit que la cuisine a été rénovée « vorig jaar », alors que l’état des lieux d’entrée (2023, p. 9) la date de 2022.",
  });

  d.dialogue({
    title: 'Avonddialoog: donderdagavond, Stef belt Lotte', tag: 'DIALOOG', page: 'Livret p. 2a',
    lines: [
      ['LOTTE', '«Hé Stef! Je klinkt moe. Zware dag?»', '1'],
      ['STEF', '«Zware week, ja! Maandag was ik mijn portefeuille kwijt. Ik zat op de tram en toen ik uitstapte, was hij weg.»', '2'],
      ['LOTTE', '«Oei! Heb je dat gemeld bij de dienst verloren voorwerpen?»', '3'],
      ['STEF', '«Natuurlijk. De bediende zei dat er elke dag tientallen portefeuilles werden binnengebracht, en hij vroeg hoe de mijne eruitzag.»', '4'],
      ['LOTTE', '«En? Is hij teruggevonden?»', '5'],
      ['STEF', '«Gelukkig wel! Maar dinsdag had ik koorts. De dokter zei dat ik griep had en dat ik drie dagen moest rusten.»', '6'],
      ['LOTTE', '«Arme jongen! Zou je niet beter tot maandag thuisblijven?»', '7'],
      ['STEF', '«Dat zou ik graag doen, maar mijn internet doet het niet. Ik heb de klantendienst al twee keer gebeld!»', '8'],
      ['LOTTE', '«Als ik jou was, zou ik een mail sturen. Dan heb je alles op papier.»', '9'],
      ['STEF', '«Goed idee. En zaterdag kom ik naar Gent... tenminste, als mijn trein niet wordt afgeschaft!»', '10'],
      ['LOTTE', '«Ik duim voor je. En ik maak alvast soep.»', '11'],
      ['STEF', '«Kortom: een week vol pech, maar een zus uit de duizend!»', '12'],
    ],
    notes: "« Buiten het kantoor » : en dehors du bureau, la semaine de Stef tourne à la catastrophe (portefeuille perdu, grippe, panne d’internet, train supprimé). Le livret demande de LIRE ou d’ÉCOUTER ce dialogue (lu par le professeur, livre fermé) : faire d’abord une écoute livre fermé, puis projeter le texte. Il introduit, version vie quotidienne, les quatre outils du palier : imperfectum, discours indirect, zou, passif. Incohérence du livret : ici Stef vient à Gand « zaterdag », alors que l’activité D5 (p. 23a) parle de « vendredi soir ».",
  });

  d.exercise({
    title: 'Avonddialoog : les quatre malheurs de Stef', tag: 'COUCHE 1', page: 'Livret p. 2a',
    instr: '1re écoute (livre fermé) : notez les **quatre malheurs** de Stef, jour par jour. Seul, puis comparez avec votre voisin · 5 min.',
    number: false, qGap: 18,
    items: [
      { q: '**Maandag**', a: 'portefeuille kwijt (op de tram)' },
      { q: '**Dinsdag**', a: 'koorts: griep, drie dagen rust' },
      { q: '**Internet** (woensdag, cf. D4)', a: 'het doet het niet · klantendienst al twee keer gebeld' },
      { q: '**Zaterdag**', a: 'zijn trein wordt misschien afgeschaft' },
    ],
    aside: { label: 'FIL ROUGE · D1 → D5', color: 'accent1', icon: 'FaRoute', lines: ['**D1** Lenen, huren of uitlenen? (séance 6)', '**D2** Verloren voorwerpen (séance 7)', '**D3** Wat zei de dokter? (séance 8)', '**D4** De klantendienst (séance 9)', '**D5** Vertraging! (séance 10)'] },
    notes: "Première écoute, livre fermé, texte lu par le professeur. Les trois premiers malheurs sont déjà arrivés ; le quatrième (le train) n’est qu’un risque (« als mijn trein niet wordt afgeschaft »). Le jour de la panne d’internet n’est pas dit dans le dialogue : il vient de l’activité D4 (mercredi). Le panneau de droite annonce les cinq activités « Dagelijks leven », une par séance.",
    notesA: "Correction : les mots-clés suffisent (portefeuille kwijt, koorts/griep, internet, trein afgeschaft). Faire remarquer que le dialogue contient déjà les outils du palier : « was ik… kwijt » (imperfectum), « De dokter zei dat… » (discours indirect), « Zou je… ? » (zou), « werden binnengebracht » (passif).",
  });

  d.table({
    title: 'Avonddialoog : outils repérés (corrigé)', tag: 'COUCHE 1', page: 'Livret p. 2a',
    intro: '2e écoute ou lecture : repérez **3 imperfectums**, **2 discours indirects**, **2 zou** et **2 passifs** — les outils des séquences 6.2 à 6.5.',
    headers: ['OUTIL', 'MIN.', 'DANS LE DIALOGUE'], colW: [3.2, 0.9, 8.03], align: ['left', 'center', 'left'], boldCol: 0,
    rows: [
      ['② Imperfectum (6.2)', '3', 'ik **was** mijn portefeuille kwijt · ik **zat** op de tram · **was** hij weg · ik **had** koorts · hij **vroeg** · hij **zei**'],
      ['③ Discours indirect (6.3)', '2', 'De bediende **zei dat** er … portefeuilles werden binnengebracht, en hij **vroeg hoe** de mijne eruitzag · De dokter **zei dat** ik griep had'],
      ['④ ZOU (6.4)', '2', '**Zou** je niet beter … thuisblijven? · Dat **zou** ik graag doen · Als ik jou was, **zou** ik een mail sturen'],
      ['⑤ Passif (6.5)', '2', 'portefeuilles **werden binnengebracht** · als mijn trein niet **wordt afgeschaft**'],
    ],
    foot: 'Chaque outil a sa séquence : 6.2 (séance 7), 6.3 (séance 8), 6.4 (séance 9), 6.5 (séance 10).',
    notes: "Correction proposée (d’autres réponses sont possibles : tout verbe à l’imperfectum du texte compte). Cette grille sert de fil rouge : à chaque séance, l’échauffement ou la mise en commun peut revenir sur l’outil étudié. Ne pas expliquer les formes ici : on repère seulement.",
  });

  d.scene({
    title: 'Séquence 6.1 : le lexique de la location', tag: 'FOCUS', page: 'Livret p. 3', img: 'p6_04_2', time: '6.1', sceneLabel: 'SÉQUENCE',
    text: ['La location a ses **acteurs**, ses **documents**, son **argent** et ses **gestes** (opzeggen, de meterstanden opnemen).', '**Focus : lignes 3 et 9**', '«Een appartement in Elsene **dat we verhuren** voor mevrouw Dubois.»', '«De herstelling **wordt** normaal door de eigenaar **betaald**.»'],
    ask: 'Dans la ligne 3 : qui **verhuurt**, qui **huurt** ?',
    notes: "Vendre et louer sont deux métiers dans le métier. Le lexique de la location se greffe sur la carte mentale du palier 5 (étagère ACTIVE : tout doit être réutilisé). Réponse à la question : mevrouw Dubois (de eigenaar) verhuurt via le kantoor ; la personne qui prend l’appartement, c’est de huurder. « dat we verhuren » est une relative (verbe à la fin) ; « wordt … betaald » est un passif annoncé pour la séquence 6.5.",
  });

  d.table({
    title: '1 Mindmap: de wereld van de verhuur', tag: 'WOORDENSCHAT', page: 'Livret p. 4',
    intro: 'Complétez la carte mentale **de mémoire** : seul 3 min, puis en binôme. Objectif : **5 mots par branche**. Réactivez le palier 5 (branches DE WONING et HET GELD).',
    headers: ['BRANCHE', 'DÉJÀ DANS LE LIVRET', 'VOS MOTS (MIN. 5)'], colW: [2.9, 5.1, 4.13], boldCol: 0, size: 17,
    rows: [
      ['a. DE MENSEN', '^^de^^ huurder · ^^de^^ verhuurder · ^^de^^ kandidaat · ^^de^^ loodgieter', '___'],
      ['b. DE DOCUMENTEN', '%%het%% huurcontract · ^^de^^ plaatsbeschrijving · %%het%% attest', '___'],
      ['c. HET GELD', '^^de^^ waarborg · ^^de^^ maandelijkse huur · ^^de^^ kosten · ^^de^^ herstelling', '___'],
      ['d. DE ACTIVITEITEN', 'verhuren · opzeggen · herstellen · de meterstanden opnemen', '___'],
      ['e. DE PROBLEMEN', '%%het%% lek · ^^de^^ schade · ^^de^^ klacht', '___'],
    ],
    foot: 'Notez toujours l’**article** : ^^de^^ ou %%het%% ! La banque de mots suit.',
    notes: "Exercice 1 du livret (production libre, mémoire) : 3 minutes seul, puis mise en commun en binôme, puis au tableau : une branche = un étudiant qui vient écrire un mot nouveau. Ne corriger que les articles. La diapositive suivante donne une banque de 20 mots à retenir.",
  });

  d.table({
    title: 'Woordenschat : le lexique de la location', tag: 'WOORDENSCHAT', page: 'Livret p. 4–5',
    headers: ['NEDERLANDS', 'FRANÇAIS', 'NEDERLANDS', 'FRANÇAIS'], colW: [3.2, 2.85, 3.2, 2.88], size: 16,
    rows: [
      ['^^de^^ huurder', 'le locataire', '^^de^^ herstelling', 'la réparation'],
      ['^^de^^ verhuurder', 'le bailleur', '%%het%% lek', 'la fuite'],
      ['^^de^^ kandidaat-huurder', 'le candidat locataire', '^^de^^ schade', 'le dommage'],
      ['^^de^^ medehuurder', 'le colocataire', '^^de^^ klacht', 'la plainte'],
      ['^^de^^ eigenaar', 'le propriétaire', '^^de^^ meterstanden', 'les relevés de compteurs'],
      ['%%het%% huurcontract', 'le contrat de bail', '^^de^^ verzekering', 'l’assurance'],
      ['^^de^^ plaatsbeschrijving', 'l’état des lieux', 'verhuren', 'mettre en location'],
      ['^^de^^ waarborg', 'la garantie locative', 'huren', 'prendre en location'],
      ['^^de^^ maandelijkse huur', 'le loyer mensuel', 'opzeggen', 'résilier (séparable)'],
      ['^^de^^ kosten', 'les frais', 'de meterstanden opnemen', 'relever les compteurs'],
    ],
    notes: "Liste à connaître avec l’article (bleu = de, magenta = het). Faire répéter en chœur, puis jeu rapide : le professeur dit le français, la classe répond en néerlandais avec l’article. « de kosten » est un pluriel (de kost = le coût). Le livret n’impose pas de traduction : celles-ci sont celles du métier belge francophone.",
  });

  d.picture({
    title: 'Quatre pièges du lexique de la location', tag: 'WOORDENSCHAT', page: 'Livret p. 5', img: 'p6_06_3',
    capLabel: 'À RETENIR', capColor: 'accent3', capIcon: 'FaCheck',
    caption: ['**huren ≠ verhuren** : le locataire //huurt//, le bailleur //verhuurt//.', '**opzeggen** est **séparable** : //De huurder zegt het contract op.//', '**plaatsbeschrijving** = plaats + beschrijving = l’état des lieux.', '**waarborg ≠ verzekering** : la garantie locative n’est pas l’assurance.'],
    notes: "Planche d’illustration du livret : quatre cartes. Faire lire chaque carte, puis demander une phrase par carte. Piège pour francophones : « louer » désigne les deux côtés du contrat ; en néerlandais, il faut choisir (huren / verhuren). « Garantie » : de waarborg (la caution de loyer), à ne pas confondre avec de verzekering (l’assurance).",
  });

  d.table({
    title: '2 Collocaties van de beheerder', tag: 'COUCHE 2', page: 'Livret p. 5',
    intro: 'Reliez chaque nom au **verbe du métier** (un verbe = une seule fois). Trois verbes sont **séparables** : rappelez-vous le palier 3. Seul · 5 min.',
    headers: ['N°', 'NOM', '→', 'VERBE'], colW: [0.8, 4.9, 0.7, 5.73], align: ['center', 'left', 'center', 'left'], size: 18,
    rows: [
      ['1', '^^de^^ waarborg', '→', '[[storten]]'],
      ['2', '%%het%% huurcontract', '→', '[[opzeggen (séparable)]]'],
      ['3', '^^de^^ plaatsbeschrijving', '→', '[[opstellen (séparable)]]'],
      ['4', '^^de^^ meterstanden', '→', '[[opnemen (séparable)]]'],
      ['5', '^^de^^ maandelijkse huur', '→', '[[betalen]]'],
      ['6', 'een klacht', '→', '[[behandelen]]'],
    ],
    foot: 'Phrases : //De huurder **zegt** het contract **op**. · Wij **stellen** de plaatsbeschrijving **op**. · Ik **neem** de meterstanden **op**.//',
    notes: "Coquille / manque du livret : l’exercice annonce « chaque verbe n’est utilisé qu’une seule fois » mais ne fournit pas la liste des verbes. Corrigé indicatif : waarborg → storten ; huurcontract → opzeggen ; plaatsbeschrijving → opstellen ; meterstanden → opnemen ; huur → betalen ; klacht → behandelen. Autres réponses acceptables : waarborg → terugbetalen ; huur → overschrijven / innen ; plaatsbeschrijving → opmaken (séparable) ; klacht → indienen (séparable, côté locataire : voir D4). Avec indienen ou opmaken, il y a plus de trois séparables : l’indiquer.",
    notesA: "Faire dire chaque phrase complète en insistant sur le verbe séparable : la particule part en fin de phrase (zegt … op). Rappel palier 3 : opzeggen → ik zeg op, ik heb opgezegd.",
  });

  d.exercise({
    title: '3 Luisteren: de voicemail van meneer De Smet', tag: 'COUCHE 1', page: 'Livret p. 6', mode: 'a',
    instr: 'Vous entendez **deux fois** le message vocal du locataire de la Waversesteenweg (lu par le professeur — transcription n° 1). Complétez la **klachtenfiche** : mots-clés uniquement · seul · 10 min.',
    number: false, gap: 14,
    items: [
      { h: 'Klachtenfiche — Immo Van Damme' },
      { t: 'a. Naam van de huurder + adres → ___' },
      { t: 'b. Wat is het probleem? → ___' },
      { t: 'c. Sinds wanneer? → ___' },
      { t: 'd. Wat heeft de huurder al gedaan? → ___' },
      { t: 'e. Wat vraagt hij aan het kantoor? → ___' },
      { t: 'f. Bereikbaar wanneer / op welk nummer? → ___' },
    ],
    aside: { label: 'ÉCOUTE · 2 FOIS', color: 'accent3', icon: 'FaHeadphones', lines: ['**1re écoute** : qui, quoi, où ?', '**2e écoute** : points c à f', 'Mots-clés seulement', 'Comparez avec votre voisin', 'Correction : selon le texte lu'] },
    sideW: 3.7,
    notes: "Le texte lu (transcription n° 1) est en annexe du dossier du professeur : il n’est pas reproduit dans le livret, donc la solution dépend du texte lu — ne pas la deviner. Lire le message deux fois, à vitesse naturelle ; laisser 1 minute entre les deux lectures. Mise en commun : une question par étudiant, réponse en mots-clés puis en phrase complète (« Meneer De Smet woont op… »). Ces notes serviront à la séance 8 (rapporter la plainte).",
  });

  d.compare({
    title: 'TAAK 1: de kandidaat-huurder', tag: 'ORAL', page: 'Livret p. 7',
    intro: 'Jeu de rôle · **2 rondes de 5 minutes**, rôles inversés, nouvelle carte à chaque ronde. L’observateur coche : questions correctes · reformulation · lexique de la location · registre formel.',
    left: { h: 'ROL A — De makelaar (u-vorm !)', color: 'accent1', icon: 'FaUserTie', items: ['**Présentez le bien** (deux relatives : //een appartement dat…//)', '**4 questions** au moins : revenus, situation, date d’entrée, animaux', 'Expliquez la **waarborg** et la **plaatsbeschrijving**', 'Une **condition** (//tenzij / als//) et une **reformulation** (//Dus u zoekt…//)', 'Concluez : //Wij laten u iets weten zodra…//'] },
    right: { h: 'ROL B — De kandidaat-huurder', color: 'accent2', icon: 'FaUser', items: ['Vous voulez l’appartement : **répondez**', '**Deux questions**, dont une avec **waar + préposition** : //Waarvoor dient de waarborg?//', 'Carte ① l’étudiant au budget serré', 'Carte ② la famille avec un chien', 'Carte ③ la colocation de trois amis (//de medehuurders//)'] },
    max: 17,
    notes: "Modalités : binômes + un observateur si la classe est impaire. Ronde 1 : A makelaar / B candidat (carte au choix) ; ronde 2 : on inverse avec une autre carte. Rappeler le vouvoiement : « Hebt u… ? Wanneer wilt u… ? ». Le professeur circule et note les erreurs récurrentes pour la mise en commun (verbe à la fin des relatives, inversion après tenzij/zodra).",
  });

  d.exercise({
    title: 'TAAK 1 : phrases-modèles pour la makelaar', tag: 'ORAL', page: 'Livret p. 7', mode: 'a', correction: true,
    number: false, gap: 7,
    items: [
      { h: 'Présenter le bien (relatives)' },
      { t: 'Dit is een appartement **dat** twee slaapkamers heeft. · Het is een buurt **waar** veel jonge gezinnen wonen.' },
      { h: 'Questions (u-vorm)' },
      { t: 'Hebt u een vast inkomen? · Vanaf wanneer wilt u het appartement huren? · Hebt u huisdieren?' },
      { h: 'Garantie, état des lieux, condition' },
      { t: 'U stort de waarborg op een geblokkeerde rekening. · Voordat u intrekt, stellen wij samen de plaatsbeschrijving op.' },
      { t: 'U mag een kleine hond hebben, **tenzij** de eigenaar bezwaar maakt.' },
      { h: 'Reformuler et conclure' },
      { t: 'Dus u zoekt een appartement met twee slaapkamers? · Wij laten u iets weten **zodra** wij de eigenaar gesproken hebben.' },
    ],
    expect: ['**4 questions** correctes', '**Reformulation** : //Dus u zoekt…//', 'Lexique : **waarborg · plaatsbeschrijving**', '**u-vorm** partout', '2 relatives · 1 condition · //zodra//'],
    sideW: 3.7,
    notes: "Production libre : ces phrases sont des modèles à projeter après la ronde, pas une correction unique. Les relatives gardent le verbe à la fin (dat … heeft ; waar … wonen). « Voordat u intrekt, stellen wij … op » : après la subordonnée, le verbe conjugué passe en tête et la particule op part à la fin. Côté candidat : Waarvoor dient de waarborg ? Waarop moet ik letten bij het ondertekenen ?",
  });

  d.table({
    title: 'D1 Lenen, huren of uitlenen?', tag: 'ORAL', page: 'Livret p. 7a',
    intro: 'Dagelijks leven · Spreken. **Lenen** (emprunter / prêter) et **huren** : même lexique que le gestionnaire (waarborg, huurprijs, schade), autre décor.',
    headers: ['ZO ZEG JE DAT', 'FRANÇAIS'], colW: [6.0, 6.13], size: 17,
    rows: [
      ['iets **lenen van** iemand', 'emprunter quelque chose à quelqu’un'],
      ['iets **(uit)lenen aan** iemand', 'prêter quelque chose à quelqu’un'],
      ['een bestelwagen huren voor een dag', 'louer une camionnette pour une journée'],
      ['een boek verlengen', 'prolonger le prêt d’un livre'],
      ['Mag ik je ladder even lenen?', 'Je peux t’emprunter ton échelle ?'],
      ['Geen probleem, hoor!', 'Pas de souci ! (//hoor// adoucit)'],
      ['Ik breng hem zondag terug, beloofd!', 'Je te la rends dimanche, promis !'],
    ],
    foot: 'Piège pour francophones : **lenen** = emprunter ET prêter — la préposition tranche : //lenen **van**// ≠ //lenen **aan**//. **uitlenen** = seulement prêter : //Ik leen mijn fiets nooit uit.//',
    notes: "Lire le tableau, faire répéter. Insister sur le piège : un seul verbe néerlandais (lenen) pour deux sens opposés ; la préposition (van / aan) ou le verbe uitlenen (séparable) lève l’ambiguïté. « hoor » est une particule d’adoucissement très courante, intraduisible. « de ladder » est un mot en de : « Ik breng hem terug ».",
  });

  d.compare({
    title: 'D1 Rollenspel: lenen en huren', tag: 'ORAL', page: 'Livret p. 7a',
    intro: 'Rondes de **4 minutes**, rôles inversés. L’observateur coche : //lenen · uitlenen · huren// bien employés. Cartes : ① chez les voisins, une échelle (//de dakgoot//) · ② à la //bib//, un livre à prolonger · ③ au comptoir de location, une camionnette.',
    left: { h: 'ROL A — Wie iets nodig heeft', color: 'accent2', icon: 'FaUser', items: ['**Demandez**, expliquez pourquoi, **promettez** une date de retour', 'Une **relative** : //een ladder die lang genoeg is//', 'Le verbe **terugbrengen**'] },
    right: { h: 'ROL B — De buur · de bibliothecaris · de verhuurder', color: 'accent1', icon: 'FaUserTie', items: ['**Acceptez sous conditions** : //Waarvoor heb je hem nodig?//', 'Une condition (//op voorwaarde dat · tenzij//), une durée', 'Lexique de l’argent (//de waarborg, de huurprijs//) si c’est payant', '**Autonomie** : après les 3 cartes, une situation **vraiment vécue**'] },
    foot: { kind: 'tip', label: 'Modèle', text: '//Mag ik je ladder even lenen? Ik heb hem nodig voor de dakgoot. — Geen probleem, op voorwaarde dat je hem zondag terugbrengt.//' },
    max: 17,
    notes: "Production orale libre : A demande (lenen van), B accepte sous condition (op voorwaarde dat + verbe à la fin). Après les trois cartes, chaque binôme joue une situation réellement vécue (autonomie). « terugbrengen » est séparable : « op voorwaarde dat je hem zondag terugbrengt » (soudé en subordonnée), « Ik breng hem zondag terug » (séparé en principale).",
  });

  d.exercise({
    title: 'Huren, verhuren, lenen of uitlenen?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez avec la bonne forme de //huren · verhuren · lenen · uitlenen//. Seul · 4 min.',
    items: [
      'Voor de verhuizing [[huur]] ik een bestelwagen voor zaterdag.',
      'Mevrouw Dubois [[verhuurt]] haar appartement in Elsene.',
      'Mag ik je ladder even [[lenen]]?',
      'Ik [[leen]] mijn fiets nooit [[uit]].',
      'De bib [[leent]] boeken [[uit]] aan haar leden.',
      'De huurder [[huurt]] het appartement, de eigenaar [[verhuurt]] het.',
    ],
    traps: ['**huren** = prendre en location ; **verhuren** = mettre en location', '**lenen van** = emprunter · **lenen aan / uitlenen** = prêter', '**uitlenen** est séparable : //ik leen … uit//'],
    notes: "Exercice ajouté (réemploi de D1 et de la séquence 6.1) : 4 min, correction orale. Phrase 4 : accepter « Ik leen mijn fiets nooit aan iemand » (lenen aan) mais viser uitlenen, mot du livret.",
  });

  d.closing({
    cliff: 'Séance 7 : **l’état des lieux**. Comment décrire un appartement au passé ? //De muur **was** wit, de kraan **druppelde**…// — l’**imperfectum** devient actif.',
    homework: ['Relire les **deux dialogues** (p. 2 et 2a) à voix haute.', 'Apprendre le **lexique de la location** (20 mots, avec de / het).', 'Terminer la **klachtenfiche** (ex. 3) et préparer 2 questions pour la TAAK 1 (dont une avec //waar + préposition//).', 'D1 : jouer une situation de prêt **vécue** (rôles inversés).'],
    exit: 'Dites en néerlandais : « le locataire résilie le contrat » et « le propriétaire loue l’appartement ».',
    notes: "Ticket de sortie à l’oral : « De huurder zegt het contract op. De eigenaar verhuurt het appartement. » Vérifier la particule op en fin de phrase et la différence huren / verhuren.",
  });
};
