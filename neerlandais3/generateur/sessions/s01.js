// Séance 1 — Palier 5 : ouverture + séquence 5.1 (Het vastgoedkantoor) — Livret p. 1–6a
exports.meta = {
  n: 1, slug: 'Het_vastgoedkantoor', title: 'Het vastgoedkantoor',
  subtitle: 'Le dossier démarre — le lexique du métier et le premier appel client',
  pages: 'Livret p. 1–6a', img: 'p5_01_1', time: '5.1', sceneLabel: 'SÉQUENCE',
  block: 'Palier 5 · Van opdracht tot verkoop',
  coverNotes: "Séance d’ouverture du palier 5 (vers le B1). Objectifs : présenter les six piliers du palier, lire les deux dialogues (Maandagochtend bij Immo Van Damme et Avonddialoog), réactiver le lexique du métier (mindmap, collocations, faux-amis), écouter la voicemail de mevrouw Claes, jouer l’appel client (TAAK 1) et transférer le lexique au quotidien (D1 Mijn buurt). Les relatives (5.2) commencent à la séance 2.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Reconnaître **le vocabulaire du métier**, lire les dialogues du palier et **mener un appel client** en u-vorm (accueil, questions, reformulation, rendez-vous).',
    language: '//de makelaar · de eigenaar · een bod uitbrengen · de opdracht tekenen · Dus u zoekt… · Zullen we een afspraak inplannen?//',
    skills: 'Lire deux dialogues · repérer relatives, adverbes pronominaux et conjonctions · noter des mots-clés à l’écoute · jouer un appel téléphonique · décrire son quartier',
    agenda: [['Palier 5 · dialogue du lundi matin', 15], ['Avonddialoog (Stef & Lotte)', 10], ['Séquence 5.1 · mindmap · collocations', 15], ['Faux-amis du métier', 5], ['Écoute : la voicemail de mevrouw Claes', 10], ['TAAK 1 · De klant aan de lijn', 20], ['D1 · Mijn buurt in vijf zinnen', 10], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. La séance couvre les pages 1 à 6a du livret. Les mots des paliers 1 à 4 comptent dans la mindmap : c’est le capital de départ. Si le temps manque, la fiche D1 (cinq phrases sur le quartier) peut se terminer à la maison.",
  });

  d.exercise({
    title: 'Échauffement : les paliers 1 à 4 en trois questions', tag: 'ÉCHAUFFEMENT', page: 'Hors syllabus', mode: 'a',
    instr: 'Oral · par deux · 3 min. Répondez avec des phrases **vraies pour vous**, puis changez de partenaire.',
    number: false, gap: 12,
    items: [
      { t: '**Perfectum** · //Wat heb je gisteren gedaan?// → //Gisteren heb ik gewerkt. · Gisteren ben ik naar de stad gegaan.//' },
      { t: '**Futur** · //Wat ga je dit weekend doen?// → //Dit weekend ga ik naar mijn zus.//' },
      { t: '**Comparaison** · //Wat is groter: Brussel of Gent?// → //Brussel is groter dan Gent.//' },
      { t: '**Subordination** · //Waarom leer je Nederlands?// → //Ik leer Nederlands, omdat ik met klanten wil praten.//' },
    ],
    sideW: 3.9,
    expect: ['**Perfectum** : heb/ben + participe à la fin.', '**Subordonnée** : le verbe conjugué part à la **fin**.', 'Vocabulaire du métier bienvenu.', 'Couche 2 · par deux · 3 min'],
    notes: "Rappel rapide des paliers 1 à 4 (raconter et projeter). Les réponses sont libres : vérifier seulement que le participe passé est à la fin (perfectum) et que le verbe est à la fin après « omdat » (c’est la règle que le palier 5 va élargir). Exemple de réponse correcte avec « omdat » : Ik leer Nederlands, omdat ik met klanten wil praten.",
  });

  d.scene({
    title: 'Palier 5 : un dossier immobilier de A à Z', tag: 'PLAN', page: 'Livret p. 1', img: 'p5_01_1',
    text: ['Vous suivez **un dossier de la rentrée du mandat à la négociation**, avec Yasmina (makelaar) et Stef (stagiair) chez **Immo Van Damme**.', 'Six piliers : **le lexique** · **die / dat** · **met wie, waarover, eraan** · **zodra, tenzij, aangezien…** · **l’ordre des mots** · **les quatre compétences**.', 'Fil rouge hors agence : Stef cherche un **vélo d’occasion** (activités **Dagelijks leven** D1 à D5).'],
    ask: 'Où sont-ils ? Que se passe-t-il à l’agence ce lundi matin ?',
    notes: "Six séquences, six preuves (TAAK 1 à 6) : à la fin, un dossier complet. Insister sur la double logique du palier : le métier (kantoor) et la vie courante (D1 à D5, même grammaire, autre décor). Les paliers 1 à 4 restent la base : saluer, se présenter, raconter, projeter.",
  });

  d.dialogue({
    title: 'Vijfde dialoog — Maandagochtend bij Immo Van Damme', tag: 'DIALOOG', page: 'Livret p. 2', max: 17,
    lines: [
      ['YASMINA', '«Goedemorgen Stef! Klaar voor je eerste week? Jij bent toch de stagiair die vorig jaar de opleiding vastgoed heeft gevolgd?»', '1'],
      ['STEF', '«Dat klopt! Ik ben heel gemotiveerd. Waarover gaat het dossier waaraan we samen gaan werken?»', '2'],
      ['YASMINA', '«Over een rijhuis in Sint-Gillis. Het is een woning die net gerenoveerd is, dus we kunnen snel starten.»', '3'],
      ['STEF', '«Mooi! Wat hebben jullie al gedaan?»', '4'],
      ['YASMINA', '«We hebben de opdracht getekend met de eigenaar. Dat is de man die ons vorige maand heeft gebeld.»', '5'],
      ['STEF', '«En de advertentie waarover je een mail hebt gestuurd — staat die al online?»', '6'],
      ['YASMINA', '«Nog niet. Ik wacht erop sinds vrijdag: de fotograaf moet eerst langskomen. Zodra de foto’s binnen zijn, zet ik de advertentie op Immoweb.»', '7'],
      ['STEF', '«Ik kan je daarmee helpen, tenzij je liever alleen werkt.»', '8'],
      ['YASMINA', '«Graag! Jij bent iemand met wie ik goed kan samenwerken, denk ik. Toen ik vorig jaar alles alleen moest doen, was het écht te druk.»', '9'],
      ['STEF', '«Dan verdelen we de taken. Kortom: jij regelt de bezichtigingen, terwijl ik de advertentie voorbereid. Daarover maken we straks een afspraak!»', '10'],
    ],
    notes: "Première lecture par le professeur (livre ouvert), deuxième lecture en binôme (Yasmina / Stef), puis on inverse. Les répliques sont numérotées ici selon les « Focus » du livret : lignes 3, 5 et 7 (séquence 5.1), 1, 3 et 5 (5.2), 2, 6, 7 et 9 (5.3), 3, 7, 8 et 9 (5.4). Dans le livret, les lignes ne sont pas numérotées : une réplique = une ligne. Le dialogue contient déjà tout le palier : relatives (die, waaraan), adverbes pronominaux (erop, daarmee, daarover), conjonctions (zodra, tenzij, toen), connecteurs (kortom).",
  });

  d.dialogue({
    title: 'Avonddialoog — Maandagavond, Stef belt zijn zus Lotte', tag: 'DIALOOG', page: 'Livret p. 2a', max: 17,
    lines: [
      ['LOTTE', '«Hoi Stef! En, hoe was je eerste dag?»', '1'],
      ['STEF', '«Heel goed! Yasmina is iemand met wie ik vlot kan samenwerken. Maar de tram was weer te laat: ik heb er twintig minuten op gewacht.»', '2'],
      ['LOTTE', '«Waarom koop je geen fiets? Op 2dehands staan fietsen die bijna nieuw zijn.»', '3'],
      ['STEF', '«Daar heb ik al aan gedacht! Ik heb vandaag een stadsfiets gezien die maar 180 euro kost.»', '4'],
      ['LOTTE', '«Niet slecht! Woont de verkoper bij jou in de buurt?»', '5'],
      ['STEF', '«Ja, in Vorst, vlak bij de bakkerij waar ik elke zaterdag mijn brood haal. Zodra hij antwoordt, ga ik de fiets bekijken.»', '6'],
      ['LOTTE', '«Let goed op: toen ik vorig jaar een tweedehandsfiets kocht, waren de remmen versleten.»', '7'],
      ['STEF', '«Geen zorgen: ik maak eerst een proefrit, tenzij de verkoper dat weigert. Aangezien het een echt koopje is, reageer ik vanavond nog.»', '8'],
      ['LOTTE', '«Verstandig. En vergeet niet af te dingen!»', '9'],
      ['STEF', '«Afdingen? Dat oefen ik net deze week op kantoor! Kortom: mijn eerste privédossier is… een fiets.»', '10'],
    ],
    notes: "Dialogue du soir, à lire ou à écouter livre fermé (lu par le professeur). Lotte est la sœur de Stef. Le fil rouge « vélo d’occasion » traverse les activités D1 à D5. Première écoute : de quoi Stef a-t-il besoin ? Deuxième écoute ou lecture : voir la diapositive suivante.",
  });

  d.exercise({
    title: 'Avonddialoog : écoute et repérage', tag: 'COUCHE 1', page: 'Livret p. 2a',
    instr: 'Couche 1 · seul, puis par deux · 8 min. Écoute 1 : l’essentiel. Écoute 2 (ou relecture) : repérez les outils du palier.',
    gap: 8, qGap: 18,
    items: [
      { q: 'Écoute 1 : de quoi Stef a-t-il besoin, et pourquoi ?', a: 'D’**une fiets** (vélo d’occasion), parce que **de tram** est souvent trop tard (20 minutes d’attente).' },
      { q: 'Repérez **deux relatives** (die / dat / waar / met wie).', a: '//fietsen **die** bijna nieuw zijn · een stadsfiets **die** maar 180 euro kost · de bakkerij **waar** ik… haal · iemand **met wie** ik…//' },
      { q: 'Repérez **deux adverbes pronominaux** (coupés en deux !).', a: '//ik heb **er** twintig minuten **op** gewacht · **Daar** heb ik al **aan** gedacht//' },
      { q: 'Repérez **trois conjonctions** de subordination.', a: '//**zodra** hij antwoordt · **toen** ik vorig jaar… · **tenzij** de verkoper… · **aangezien** het een koopje is//' },
    ],
    notes: "Corrections possibles : le dialogue contient plus que le minimum demandé (quatre relatives — dont deux avec waar / met wie, annoncées en 5.3 —, deux adverbes pronominaux coupés en deux, quatre conjonctions). Faire remarquer que « er … op » et « Daar … aan » sont séparés par d’autres mots : c’est la difficulté de la séquence 5.3. Faire souligner le verbe final de chaque subordonnée (bijna nieuw zijn, maar 180 euro kost, antwoordt, weigert…).",
  });

  d.scene({
    title: 'Séquence 5.1 : le lexique du métier', tag: 'FOCUS', page: 'Livret p. 3', img: 'p5_04_2',
    text: ['Un agent sans mots est muet : la **matière première** avant les phrases complexes.', '**Focus : lignes 3, 5 et 7**', '«**Over een rijhuis** in Sint-Gillis.» — //Une maison mitoyenne.//', '«We hebben **de opdracht getekend**.» — //Nous avons signé le mandat.//', '«**Zodra** de foto’s binnen zijn, **zet ik** de advertentie op Immoweb.»'],
    ask: 'Quels mots du métier reconnaissez-vous déjà dans ces trois phrases ?',
    notes: "Réponses attendues : het rijhuis, de opdracht, de eigenaar, de advertentie, de foto’s. « De opdracht » = le mandat (de vente ou de location). Tout ce qui figure dans la mindmap devra vivre dans les activités finales du palier (TAAK 6).",
  });

  d.table({
    title: '1 Mindmap — De wereld van de makelaar', tag: 'COUCHE 2', page: 'Livret p. 4',
    intro: 'Seul·e (3 min), puis en binôme : **au moins 5 mots par branche**. Les mots des paliers 1 à 4 comptent. Modèle à compléter :',
    headers: ['BRANCHE', 'EXEMPLES DU LIVRET', 'À AJOUTER'],
    colW: [2.5, 4.4, 5.23], boldCol: 0,
    rows: [
      ['1 · DE WONING', '%%het%% rijhuis · %%het%% appartement · ^^de^^ slaapkamer', '^^de^^ keuken · ^^de^^ badkamer · ^^de^^ woonkamer · %%het%% terras · ^^de^^ tuin · ^^de^^ kelder'],
      ['2 · DE MENSEN', '^^de^^ makelaar · ^^de^^ eigenaar · ^^de^^ koper · ^^de^^ huurder', '^^de^^ klant · ^^de^^ verkoper · ^^de^^ verhuurder · ^^de^^ buur · ^^de^^ notaris · ^^de^^ stagiair'],
      ['3 · DE ACTIVITEITEN', 'bezichtigen · verkopen · verhuren · een bod uitbrengen', 'kopen · huren · tekenen · inplannen · onderhandelen · renoveren'],
      ['4 · HET GELD', '^^de^^ prijs · ^^de^^ huurprijs · %%het%% bod · ^^de^^ kosten', '^^de^^ vraagprijs · ^^de^^ lening · ^^de^^ bank · %%het%% budget'],
      ['5 · DE DOCUMENTEN', '^^de^^ opdracht · ^^de^^ advertentie · %%het%% contract', '%%het%% zoekertje · %%het%% compromis · ^^de^^ akte · ^^de^^ foto · %%het%% EPC-attest'],
    ],
    foot: 'Notez l’article : ^^de^^ en bleu, %%het%% en magenta — les relatives de la séquence 5.2 en dépendent !',
    notes: "Exercice de rappel en trois temps : seul (3 min), binôme (comparaison), mise en commun au tableau (une branche par groupe). Les mots du modèle ne sont qu’une proposition : accepter tout mot correct des paliers 1 à 4 (het bedrijf, de vergadering, de afspraak…). « Het compromis » = le compromis de vente (Verkoopsovereenkomst dans le livret). Insister sur l’article : il servira à choisir die / dat à la séance suivante.",
  });

  d.exercise({
    title: '2 Collocaties van de makelaar', tag: 'COUCHE 2', page: 'Livret p. 4',
    instr: 'Seul·e · 5 min. Reliez chaque nom au verbe du métier — **chaque verbe une seule fois** : **bezichtigen · inplannen · uitbrengen · overhandigen · zetten · tekenen**.',
    gap: 10,
    items: [
      '**een bod** → [[uitbrengen]]',
      '**een afspraak** → [[inplannen]]',
      '**een woning** → [[bezichtigen]]',
      '**de opdracht** → [[tekenen]]',
      '**de sleutels** → [[overhandigen]]',
      '**de advertentie online** → [[zetten]]',
    ],
    sideW: 3.9,
    traps: ['Séparables : //ik **breng** een bod **uit**, ik **plan** een afspraak **in**//.', 'Inséparables : //ik bezichtig, ik overhandig//.', 'Perfectum : //we hebben de opdracht **getekend**//.', '✗ //een bod maken// → ✓ //een bod uitbrengen//.'],
    notes: "Coquilles du livret : « bezichtingen » → bezichtigen ; surtout, la liste donne 5 verbes pour 6 noms : il manque « tekenen » (de opdracht tekenen, voir dialogue : « We hebben de opdracht getekend »). Projeter la liste corrigée à 6 verbes. Autres collocations acceptables à l’oral : een woning verkopen / verhuren (mais ces verbes ne sont pas dans la liste de l’exercice).",
  });

  d.picture({
    title: 'Quatre pièges du lexique immobilier', tag: 'FAUX-AMIS', page: 'Livret p. 5', img: 'p5_06_3',
    capLabel: 'POUR UN FRANCOPHONE', capColor: 'accent6', capIcon: 'FaExclamationTriangle',
    caption: ['**huren** = prendre en location ≠ **verhuren** = mettre en location.', '**het kantoor** = le bureau (le lieu) ≠ **het bureau** = le bureau (le meuble).', '**de verdieping** = l’étage ≠ **de stage** = le stage.', '**living** → préférez **woonkamer** dans vos annonces.'],
    notes: "Planche du livret p. 5 (aucun exercice n’y est rattaché, elle accompagne l’écoute). Faire dire les paires à voix haute. Le verbe « louer » français couvre les deux sens ; en néerlandais, il faut choisir qui loue à qui. « De stage » (un stage) est un mot de genre commun en néerlandais. « Living » s’entend en Belgique mais « woonkamer » est préférable dans une annonce professionnelle.",
  });

  d.exercise({
    title: 'Huren, verhuren, kantoor, bureau…', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul·e · 3 min. Complétez avec **huren · verhuren · kantoor · bureau · verdieping · stage** (conjuguez si nécessaire).',
    gap: 12,
    items: [
      'De eigenaar [[verhuurt]] zijn appartement aan een student.',
      'Wij willen graag een woning in Elsene [[huren]].',
      'Yasmina werkt op het [[kantoor]] van Immo Van Damme.',
      'Op het [[bureau]] van Stef staat een laptop.',
      'Het appartement ligt op de derde [[verdieping]].',
      'Stef doet een [[stage]] bij Immo Van Damme.',
    ],
    traps: ['**Qui loue à qui ?** : //huren// = le locataire, //verhuren// = le propriétaire.', '//het kantoor// = l’agence ; //het bureau// = le meuble.', '//de stage// ≠ //de verdieping//.'],
    notes: "Exercice ajouté pour fixer les quatre pièges de la planche précédente. Phrase 2 : « Wij willen graag … huren » — l’infinitif part en fin de phrase. Phrase 6 : « stage doen / lopen » (Belgique : « stage lopen » est très courant).",
  });

  d.listening({
    title: '3 Luisteren — De voicemail van mevrouw Claes', tag: 'COUCHE 1', page: 'Livret p. 5',
    who: 'Transcription n° 1 (annexe) — lue deux fois par le professeur',
    meta: 'Couche 1 · réception · seul · 10 min — votre première mission d’agent : écouter. Notez des **mots-clés**, pas des phrases.',
    steps: [
      { icon: 'FaHeadphones', h: '1re écoute', t: 'Qui appelle ? Que veut la cliente ? **Complétez** ce que vous comprenez de la fiche d’appel.' },
      { icon: 'FaPenNib', h: '2e écoute', color: 'accent1', t: '**Complétez** les cinq rubriques a à e avec des mots-clés (chiffres compris).' },
      { icon: 'FaUsers', h: 'Ensuite', color: 'accent3', t: 'Comparez avec votre voisin, puis **reformulez** : //Dus mevrouw Claes zoekt…//' },
    ],
    notes: "Le texte de la voicemail (transcription n° 1) est dans l’annexe du livret, non reproduite dans le livret principal : lire le texte du dossier du professeur. La solution (nom, huren ou kopen, budget, type de bien, nombre de slaapkamers, date de visite, numéro) dépend de ce texte. Les informations de la fiche serviront à l’exercice 4 de la séance 2 (quel zoekertje convient à mevrouw Claes ?). Lire à vitesse naturelle, deux fois, sans s’arrêter.",
  });

  d.table({
    title: '3 Telefoonfiche — la fiche d’appel à remplir', tag: 'COUCHE 1', page: 'Livret p. 5',
    intro: 'Complétez comme au kantoor : **mots-clés** (chiffres, nom, jour), pas de phrases.',
    headers: ['', 'TELEFOONFICHE', 'MOTS-CLÉS'],
    colW: [0.7, 5.6, 5.83], align: ['center', 'left', 'left'], boldCol: 0,
    rows: [
      ['a', 'Naam van de klant', ''],
      ['b', 'Huren of kopen?', ''],
      ['c', 'Budget + type woning + aantal slaapkamers', ''],
      ['d', 'Wanneer wil de klant bezichtigen?', ''],
      ['e', 'Terugbellen op welk nummer?', ''],
    ],
    foot: 'Aide : //€ 300.000 · 2 slpk. · appartement · maandag 14 u · 0475 …// — on note les mots importants, pas les phrases.',
    notes: "Grille projetée pour la mise en commun : un étudiant dicte sa fiche, les autres corrigent. Solution selon le texte lu par le professeur (transcription n° 1) : ne pas improviser de réponse. Rappel des chiffres et des jours de la semaine (palier 1) si les numéros posent problème.",
  });

  d.compare({
    title: 'TAAK 1 — De klant aan de lijn : les deux rôles', tag: 'ORAL', page: 'Livret p. 6',
    intro: 'Jeu de rôle en binôme (≈ 8 min), puis on **inverse** avec une nouvelle carte. Le 3e étudiant observe avec la grille.',
    left: { h: 'ROL A — De makelaar (u-vorm !)', color: 'accent1', icon: 'FaUserTie', items: ['Accueil : «Goedemorgen, Immo Van Damme, u spreekt met…»', 'Au moins **4 questions** de la telefoonfiche (palier 2 : //Hoeveel…? Wanneer…?//)', '**Reformulez** : «Dus u zoekt…»', 'Proposez : «Zullen we een afspraak inplannen?»'] },
    right: { h: 'ROL B — De klant', color: 'accent2', icon: 'FaUser', items: ['Appelez l’agence : choisissez une **carte de situation**', 'Répondez aux questions de l’agent', 'Terminez poliment : «Dank u wel, tot dan!»', '① client pressé (demain) · ② budget serré · ③ hésite entre acheter et louer'] },
    mid: 'A/B',
    foot: { kind: 'tip', label: 'Grille de l’observateur', text: 'salutation adaptée · questions correctes · reformulation · prise de congé.' },
    notes: "Taak 1 (production orale, jeu de rôle) : 8 minutes par tour, changer de carte et de rôle au second tour. Rappeler l’emploi du « u » : u spreekt, u zoekt, u wilt, u kunt (verbe en -t, comme pour hij). L’observateur coche la grille et donne un retour positif avant la correction. Les cartes de situation sont à préparer (trois cartes ①②③ à tirer).",
  });

  d.table({
    title: 'Boîte à outils : les questions de la telefoonfiche', tag: 'WOORDENSCHAT', page: 'Livret p. 6',
    headers: ['NEDERLANDS', 'FRANÇAIS'],
    colW: [6.8, 5.33],
    rows: [
      ['Kunt u uw naam spellen?', 'Pouvez-vous épeler votre nom ?'],
      ['Wilt u huren of kopen?', 'Souhaitez-vous louer ou acheter ?'],
      ['Wat is uw budget?', 'Quel est votre budget ?'],
      ['Hoeveel slaapkamers wilt u?', 'Combien de chambres souhaitez-vous ?'],
      ['Wanneer wilt u bezichtigen?', 'Quand souhaitez-vous visiter ?'],
      ['Op welk nummer kan ik u terugbellen?', 'Sur quel numéro puis-je vous rappeler ?'],
      ['Dus u zoekt een appartement met twee slaapkamers.', 'Donc vous cherchez un appartement avec deux chambres.'],
      ['Zullen we een afspraak inplannen? — Dank u wel, tot dan!', 'Si on fixait un rendez-vous ? — Merci, à ce moment-là !'],
    ],
    foot: 'Piège : avec **u**, le verbe prend **-t** comme avec //hij// : //u spreekt · u zoekt · u wilt · u kunt// (✗ //u zoek//).',
    notes: "Boîte à outils pour la TAAK 1 (et pour le jeu de rôle de la séance suivante). Faire répéter en chœur les questions, puis les faire poser en chaîne. Attention à l’inversion dans les questions : Wilt u…? Hoeveel slaapkamers wilt u? (le verbe en 2e position pour les questions en Hoeveel/Wanneer/Wat).",
  });

  d.dialogue({
    title: 'TAAK 1 — Un appel réussi (modèle)', tag: 'DIALOOG', page: 'Hors syllabus', max: 18,
    colors: { MAKELAAR: 'accent1', KLANT: 'accent2' },
    lines: [
      ['MAKELAAR', '«Goedemorgen, Immo Van Damme, u spreekt met Yasmina.»', '1'],
      ['KLANT', '«Goedemorgen, mevrouw. Ik zoek een appartement in Elsene.»', '2'],
      ['MAKELAAR', '«Wilt u huren of kopen?»', '3'],
      ['KLANT', '«Kopen. Mijn budget is ongeveer 300.000 euro.»', '4'],
      ['MAKELAAR', '«Hoeveel slaapkamers wilt u?»', '5'],
      ['KLANT', '«Twee, en liefst met een terras.»', '6'],
      ['MAKELAAR', '«Dus u zoekt een appartement met twee slaapkamers en een terras. Wanneer wilt u bezichtigen?»', '7'],
      ['KLANT', '«Liefst morgen, want ik heb weinig tijd.»', '8'],
      ['MAKELAAR', '«Zullen we een afspraak inplannen? Op welk nummer kan ik u terugbellen?»', '9'],
      ['KLANT', '«Op 0475 12 34 56. Dank u wel, tot dan!»', '10'],
    ],
    notes: "Modèle indicatif pour la TAAK 1 (carte ① : client pressé, budget et type de bien inventés). Les étudiants jouent leur propre version avec la carte tirée. Structures à retrouver : accueil (u spreekt met), au moins quatre questions (huren of kopen, slaapkamers, wanneer, nummer), reformulation (Dus u zoekt…), proposition (Zullen we… inplannen?), prise de congé (tot dan). Ce dialogue est un ajout hors syllabus.",
  });

  d.table({
    title: 'D1 — Zo zeg je dat : situer son logement', tag: 'WOORDENSCHAT', page: 'Livret p. 6a',
    headers: ['NEDERLANDS', 'FRANÇAIS'],
    colW: [6.2, 5.93],
    rows: [
      ['om de hoek', 'juste au coin, tout près'],
      ['op wandelafstand van het station', 'à distance de marche de la gare'],
      ['vlak bij de halte', 'tout près de l’arrêt (tram, bus)'],
      ['tegenover de bakker', 'en face de la boulangerie'],
      ['in een rustige / levendige buurt', 'dans un quartier calme / animé'],
      ['goed overweg kunnen met de buren', 'bien s’entendre avec les voisins'],
      ['Het is hier gezellig.', 'On s’y sent bien. (//gezellig// : presque intraduisible !)'],
    ],
    foot: 'Prononciation : //wandelafstand// [wan-del-af-stant] · //gezellig// : le **g** est guttural (voir palier 1).',
    notes: "Même lexique qu’à l’agence (het rijhuis, het appartement, de slaapkamer), mais le bien à présenter est celui des étudiants. Faire répéter le tableau, puis demander une phrase par expression avec la rue de l’école. « Goed overweg kunnen met » : se construit avec « kunnen » (je kan goed overweg met mijn buren).",
  });

  d.steps({
    title: 'D1 Dagelijks leven — Mijn buurt in vijf zinnen', tag: 'ORAL', page: 'Livret p. 6a',
    intro: 'Couche 2 · seul puis par deux · 10 min. Le bien à présenter, c’est **le vôtre**.',
    steps: [
      { h: 'Ma fiche', n: '1', color: 'accent2', lines: ['3 min, seul·e, **mots-clés** :', 'type de logement + slaapkamers · où ? · 3 lieux + une expression · les buren · pluspunt / minpunt'] },
      { h: 'Cinq phrases', n: '2', color: 'accent1', lines: ['Présentez **votre logement et votre quartier** à votre binôme en **cinq phrases**.'] },
      { h: 'Interview croisé', n: '3', color: 'accent3', lines: ['2 × 3 min : votre binôme pose **3 questions**, puis **reformule** : //Dus jij woont in…//'] },
      { h: 'Écrit (facultatif)', n: '4', color: 'tx2', lines: ['Vos cinq phrases deviennent un paragraphe **«Mijn buurt»** pour votre dossier.'] },
    ],
    foot: { kind: 'tip', label: 'Questions possibles', text: 'Woon je in een huis of in een appartement? · Hoe lang woon je daar al? · Wat is er in je buurt? · Hoe ga je naar je werk of naar de les? · Wat mis je in je buurt?' },
    notes: "Activité de transfert : la technique de reformulation de la TAAK 1, en version tutoiement (jij). Passer dans les rangs ; relever les erreurs fréquentes (ordre des mots après un complément de lieu en tête de phrase, article de/het du lieu). Un modèle de cinq phrases suit sur la diapositive suivante.",
  });

  d.exercise({
    title: 'D1 — Mijn buurt : modèle de cinq phrases', tag: 'ORAL', page: 'Livret p. 6a', mode: 'a',
    instr: 'Production libre : votre texte doit être **vrai pour vous**. Modèle correct à adapter :',
    number: false, gap: 8,
    items: [
      { t: '**1** · Ik woon in een appartement met twee slaapkamers in Vorst.' },
      { t: '**2** · Mijn appartement ligt vlak bij de halte van de tram.' },
      { t: '**3** · Om de hoek zijn een bakkerij, een supermarkt en een park.' },
      { t: '**4** · Met de buren kan ik goed overweg: ze zijn vriendelijk en rustig.' },
      { t: '**5** · Pluspunt: het is hier gezellig. Minpunt: er is weinig parking.' },
    ],
    sideW: 3.9,
    expect: ['**5 phrases** complètes, vraies pour vous.', 'Au moins **3 lieux** du quartier + **une expression** du tableau.', 'Verbe en **2e position** (//Om de hoek **zijn** een…//).', 'Couche 2 · par deux · 10 min'],
    notes: "Production libre : pas de correction unique. Vérifier l’inversion quand une expression de lieu ouvre la phrase (Om de hoek zijn een bakkerij…, jamais Om de hoek een bakkerij is). Variante possible : Ik woon in een rijhuis in Sint-Gillis, op wandelafstand van het station. Prolongement écrit facultatif : le paragraphe « Mijn buurt » sera repris dans le dossier de la TAAK 6.",
  });

  d.closing({
    cliff: 'Séance 2 : **die** ou **dat** ? Décrire un bien avec des **relatives** — et rédiger **votre premier zoekertje** (annonce immobilière).',
    homework: ['Relire les **deux dialogues** (p. 2 et 2a) à voix haute.', 'Apprendre la **mindmap** : 5 mots par branche **avec de/het** (p. 4).', 'Terminer la fiche **D1** : 5 phrases sur votre quartier (p. 6a).', 'Rejouer la **TAAK 1** avec une autre carte de situation.'],
    exit: 'Vous êtes un client qui appelle l’agence : dites **deux phrases** pour présenter votre recherche (//Ik zoek een… in…, met… slaapkamers.//)',
    notes: "Ticket de sortie à l’oral, un étudiant après l’autre. Annoncer la séance 2 : les relatives die / dat (p. 7 à 10a), les trois zoekertjes, la TAAK 2 (Schrijf het zoekertje) et la fiche D2 sur les annonces 2dehands.",
  });
};
