// Séance 10 — Het formulier — A1-03 Deze · dit · mijn (p. 60) + V09 Administratie (p. 86) + Fiche 5 « Remplir le formulaire » (p. 96)
exports.meta = {
  n: 10, slug: 'Het_formulier', title: 'Het formulier',
  subtitle: 'Remplir un formulaire — démonstratifs, possessifs et administration',
  pages: 'Livret p. 60 · 86 · 96', img: 'cover_situaties', time: '5', sceneLabel: 'FICHE',
  block: 'Section 4 · Mises en situation',
  coverNotes: "Deuxième mise en situation : la fiche 5 « Remplir le formulaire » (p. 96). Pour la préparer : la fiche de grammaire A1-03 (deze · dit · die · dat et les possessifs, p. 60) et le vocabulaire Administratie (p. 86). Fil rouge de la séance : « Van wie is deze kaart? » — à qui est cette carte ? On termine par un jeu de rôle au secrétariat, avec l’épellation de son nom.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Remplir un **formulaire** et répondre aux questions d’un guichet : nom, adresse, numéro, cours — avec //deze · dit · mijn · uw//.',
    language: '//deze kaart · dit formulier · die · dat// — //mijn · jouw · uw · zijn · haar · ons / onze · jullie · hun// — //Van wie is…? · omdat…//',
    skills: 'Choisir le démonstratif · accorder le possessif au possesseur · épeler son nom · traduire les jalons',
    agenda: [['Échauffement : waar is…?', 6], ['Deze · dit · die · dat', 8], ['Les possessifs · le piège', 10], ['Oefening + bonus familie', 12], ['Administratie (vocabulaire + bonus)', 14], ['Fiche 5 : vocabulaire · Jalon 1', 10], ['Jalon 2 · phrase-clé', 12], ['Le formulaire · l’alphabet', 8], ['Jeu de rôle au secrétariat', 8], ['Bilan', 2]],
    notes: "Durées indicatives sur 90 minutes. Ordre du livret : grammaire (p. 60), vocabulaire (p. 86), puis la fiche 5 (p. 96). Le bonus « alphabet » prépare le jeu de rôle (épeler son nom au guichet). Si le temps manque, le bonus Administratie se fait à la maison.",
  });

  // ------------------------------------------------------------ Échauffement (rappel S09)
  d.exercise({
    title: 'Échauffement : waar is…? wanneer?', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 9',
    instr: 'Oral, toute la classe · 6 min — Traduisez vite : prépositions, famille, chemin.',
    cols: 2, gap: 14,
    items: [
      'Je vais à la gare. → [[Ik ga naar het station.]]',
      'Ce soir, je suis chez mes parents. → [[Vanavond ben ik bij mijn ouders.]]',
      'Le cours commence à 18 h 30. → [[De les begint om half zeven.]]',
      'Mon grand-père habite en Belgique. → [[Mijn opa woont in België.]]',
      'Excusez-moi, puis-je vous poser une question ? → [[Excuseer, mag ik u iets vragen?]]',
      'Pouvez-vous me dire où est la bibliothèque ? → [[Kunt u me zeggen waar de bibliotheek is?]]',
    ],
    notes: "Rappel de la séance 9 (voorzetsels, familie, fiche 9). Interroger un étudiant par phrase, rythme rapide.",
    notesA: "Points de contrôle : naar = mouvement, bij = chez ; inversion après Vanavond (ben ik) ; half zeven = 6 h 30 (la demi-heure AVANT sept heures) ; in + pays ; question indirecte : le verbe « is » à la fin. Accepter « om achttien uur dertig » (style horaire officiel) et « Pardon, mag ik u iets vragen? ».",
  });

  // ------------------------------------------------------------ Grammaire A1-03 Deze · dit · mijn (p. 60)
  d.cards({
    title: 'Deze · dit · die · dat : ici ou là ?', tag: 'GRAMMATICA', page: 'Livret p. 60',
    intro: 'Le démonstratif dépend de **deux choses** : l’**article** du mot (^^de^^ ou %%het%%) et la **distance** (ici ou là).',
    perRow: 4,
    cards: [
      { h: 'DE · ICI', color: 'accent2', f: 'deze trein', lines: ['ce train-ci', 'pluriel : //deze treinen//'] },
      { h: 'DE · LÀ', color: 'accent2', f: 'die auto', lines: ['cette voiture-là', 'pluriel : //die auto’s//'] },
      { h: 'HET · ICI', color: 'accent4', f: 'dit huis', lines: ['cette maison-ci', 'pluriel : //deze huizen//'] },
      { h: 'HET · LÀ', color: 'accent4', f: 'dat museum', lines: ['ce musée-là', 'pluriel : //die musea//'] },
    ],
    foot: { kind: 'trap', text: 'Le français choisit //ce / cette// selon le genre ; le néerlandais regarde **de / het** : //cette maison// = **dit** huis, //ce train// = **deze** trein. Au pluriel : **toujours deze / die**. Et //c’est ma mère// = **Dat** is mijn moeder.' },
    notes: "Fiche A1-03, partie A. Moyen mnémotechnique : les mots en -t (dit, dat) vont avec het (qui finit aussi par -t). Montrer des objets de la classe : deze pen (ici), die deur (là), dit boek, dat raam. « Dit is / Dat is » + nom (même pluriel) = c’est / ce sont : Dit zijn mijn kinderen.",
  });

  d.table({
    title: 'Les possessifs : mijn, jouw, zijn, haar…', tag: 'GRAMMATICA', page: 'Livret p. 60',
    headers: ['PERSONNE', 'POSSESSIF', 'EXEMPLE', 'FRANÇAIS'],
    colW: [2.2, 3.0, 3.5, 3.43], boldCol: 1,
    rows: [
      ['ik', 'mijn', 'mijn fiets', 'mon vélo'],
      ['jij · je', 'jouw · je', 'jouw tas · je tas', 'ton sac'],
      ['u (formel)', 'uw', 'uw adres', 'votre adresse'],
      ['hij', 'zijn', 'zijn zus', 'sa sœur (à lui)'],
      ['zij · ze', 'haar', 'haar broer', 'son frère (à elle)'],
      ['wij · we', 'ons (%%het%%) · onze (^^de^^)', 'ons huis · onze school', 'notre maison · notre école'],
      ['jullie', 'jullie', 'jullie klas', 'votre classe (à vous tous)'],
      ['zij · ze (plur.)', 'hun', 'hun kinderen', 'leurs enfants'],
    ],
    foot: '**ons** seulement devant un mot en %%het%% au singulier (//ons huis//) ; partout ailleurs **onze** (//onze school, onze kinderen//).',
    notes: "Fiche A1-03, partie B. « jouw » = forme accentuée, « je » = forme courte (comme jij / je, séance 7) : Is dit je tas? — Nee, dat is niet mijn tas, het is jouw tas! « uw » pour u, au singulier comme au pluriel. Attention : « zijn » est aussi le verbe être (hij is, zij zijn) — le contexte décide.",
  });

  d.compare({
    title: 'Piège : son, sa, ses = zijn ou haar ?', tag: 'PIÈGE', page: 'Livret p. 60',
    intro: 'En français, le possessif s’accorde avec l’**objet**. En néerlandais, il dépend du **possesseur**.',
    left: { h: 'Français : l’objet décide', color: 'accent6', icon: 'FaTimes', items: ['//**son** frère// · //**sa** sœur// — mais à qui ? à lui ou à elle ?', '//Emma et **son** frère// (le frère d’Emma)', '//Pieter et **sa** sœur// (la sœur de Pieter)'] },
    right: { h: 'Nederlands : le possesseur décide', color: 'accent3', icon: 'FaCheck', items: ['à lui → **zijn** · à elle → **haar** · à eux → **hun**', '//Emma en **haar** broer//', '//Pieter en **zijn** zus//', '//de ouders en **hun** kinderen//'] },
    mid: '≠',
    foot: { kind: 'trap', text: '//Emma zoekt **zijn** tas// = Emma cherche le sac **de Pieter** ! Son propre sac : //Emma zoekt **haar** tas//.' },
    notes: "Erreur très fréquente chez les francophones (et à l’oral, « haar » et « zijn » se confondent vite). Faire produire des paires à partir des personnages : Sarah en haar kinderen ; Pieter en zijn stagebegeleider ; Emma en haar boek.",
  });

  d.exercise({
    title: 'Oefening : complétez (fiche 03)', tag: 'GRAMMATICA', page: 'Livret p. 60',
    instr: 'Seul · 5 min — Démonstratif (ici / là) ou possessif (personne entre parenthèses).',
    number: false, gap: 14,
    items: [
      { t: '**1.**  [[Dit]] boek (ici) is interessant.' },
      { t: '**2.**  [[Die]] man (là) is mijn buurman.' },
      { t: '**3.**  [[Deze]] stoelen (ici) zijn vrij.' },
      { t: '**5.**  Dat is [[mijn]] moeder. (ik)' },
      { t: '**6.**  [[Ons]] kind is ziek. (wij)' },
      { t: '**7.**  Is dat [[uw]] auto? (u)' },
    ],
    aside: { label: 'RAPPEL', icon: 'FaLightbulb', color: 'accent2', lines: ['%%het%% boek · ^^de^^ man', '^^de^^ stoelen (pluriel)', '%%het%% kind · ^^de^^ auto', 'ici : **deze / dit**', 'là : **die / dat**'] },
    traps: ['3 : pluriel → **deze** (jamais //dit//).', '6 : %%het%% kind → **ons** (pas //onze//).', '7 : u → **uw**.', 'Pas de n° 4 dans le livret.'],
    notes: "Exercice de la fiche 03. On garde la numérotation du livret.",
    notesA: "Solution : Dit · Die · Deze · mijn · Ons · uw. Coquille du livret : la numérotation saute le n° 4 (1, 2, 3, 5, 6, 7). Typographie du livret : « Is dat ___ auto ? » (espace avant le point d’interrogation, à la française — en néerlandais, pas d’espace).",
  });

  d.exercise({
    title: 'De familie van Emma en Pieter', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez avec **mijn · jouw · uw · zijn · haar · ons · onze · jullie · hun** (vocabulaire Familie, p. 79).',
    gap: 10,
    items: [
      'Emma heeft een broer: dat is [[haar]] broer.',
      'Pieter heeft een zus: dat is [[zijn]] zus.',
      'Meneer Janssens, is dit [[uw]] dochter?',
      'Wij hebben een huis: dat is [[ons]] huis.',
      'Wij hebben een baby: dat is [[onze]] baby.',
      'Jullie hebben een opa: is dat [[jullie]] opa?',
      'Mijn ouders hebben een auto: dat is [[hun]] auto.',
      'Sarah, zijn dat [[jouw]] kinderen?',
    ],
    expect: ['Qui **possède** ?', '%%het%%-woord singulier → **ons**.', 'Seul · 4 min'],
    traps: ['1–2 : le **possesseur** décide (Emma → haar).', '4–5 : %%het%% huis → ons · ^^de^^ baby → onze.', '7 : ils → **hun**.', '8 : accepter **je**.'],
    notes: "Exercice ajouté : possessifs + réemploi du vocabulaire Familie (séance 9). Ensuite, à l’oral, montrer une photo (vraie ou imaginaire) : « Dit is mijn zus. Dat is haar man. »",
    notesA: "Solution : haar · zijn · uw · ons · onze · jullie · hun · jouw (ou je). Phrase 3 : vouvoiement → uw. Phrase 8 : « zijn dat… » = est-ce que ce sont… (dat + zijn au pluriel).",
  });

  // ------------------------------------------------------------ Vocabulaire V09 Administratie (p. 86)
  d.imagier({
    title: 'Administratie — l’administration', tag: 'WOORDENSCHAT', page: 'Livret p. 86',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v09_01', nl: 'formulier', art: 'het', fr: 'le formulaire' },
      { img: 'v09_02', nl: 'handtekening', art: 'de', fr: 'la signature' },
      { img: 'v09_03', nl: 'paspoort', art: 'het', fr: 'le passeport' },
      { img: 'v09_04', nl: 'gemeentehuis', art: 'het', fr: 'la maison communale' },
      { img: 'v09_05', nl: 'loket', art: 'het', fr: 'le guichet' },
      { img: 'v09_06', nl: 'wachtrij', art: 'de', fr: 'la file d’attente' },
      { img: 'v09_07', nl: 'stempel', art: 'de', fr: 'le cachet' },
      { img: 'v09_08', nl: 'brief', art: 'de', fr: 'la lettre' },
      { img: 'v09_09', nl: 'envelop', art: 'de', fr: 'l’enveloppe' },
      { img: 'v09_10', nl: 'postzegel', art: 'de', fr: 'le timbre' },
      { img: 'v09_11', nl: 'brievenbus', art: 'de', fr: 'la boîte aux lettres' },
      { img: 'v09_12', nl: 'afspraak', art: 'de', fr: 'le rendez-vous' },
      { img: 'v09_13', nl: 'dossier', art: 'het', fr: 'le dossier' },
      { img: 'v09_14', nl: 'factuur', art: 'de', fr: 'la facture' },
      { img: 'v09_15', nl: 'kopieerapparaat', art: 'het', fr: 'la photocopieuse' },
    ],
    notes: "Quiz « Wat is dit? » : montrer un numéro, la classe répond avec l’article — puis avec un démonstratif (dit formulier, deze brief). Vocabulaire 09, p. 86.",
    notesA: "Six het-woorden : het formulier, het paspoort, het gemeentehuis (het huis décide), het loket, het dossier, het kopieerapparaat (het apparaat). « stempel » : les deux genres existent (de stempel / het stempel) ; le livret donne de stempel. « het gemeentehuis » = la maison communale (Belgique). « de wachtrij » : de wacht + de rij (la file). La vignette 14 porte l’inscription anglaise « BILL » : en néerlandais, de factuur (au restaurant : de rekening). Faux-ami à signaler : de brief = la lettre (pas « bref »).",
  });

  d.exercise({
    title: 'Aan het loket van het gemeentehuis', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez avec un mot de l’imagier, un **démonstratif** ou un **possessif**.',
    gap: 12,
    items: [
      'Ik heb om tien uur een [[afspraak]] op het gemeentehuis.',
      'Eerst sta ik tien minuten in de [[wachtrij]].',
      'Aan het [[loket]]: «Hebt u [[uw]] paspoort bij u?»',
      '«Vul [[dit]] formulier in, alstublieft.» (ici)',
      '«Zet hier uw [[handtekening]].»',
      '«Is [[deze]] envelop (ici) voor mij?»',
      'Ik doe de brief in de envelop, met een [[postzegel]], en ik post hem in de [[brievenbus]].',
    ],
    expect: ['Un mot de l’imagier **ou** deze / dit / uw.', 'Seul · 5 min, puis lecture à deux voix.'],
    traps: ['%%het%% formulier → **dit** · ^^de^^ envelop → **deze**.', 'u → **uw** paspoort.', '//invullen// : séparable → //Vul … in//.'],
    notes: "Exercice ajouté : réemploi du vocabulaire Administratie avec la fiche 03. Faire lire ensuite le texte comme un mini-dialogue (cursist / bediende).",
    notesA: "« Hebt u… » et « Heeft u… » sont corrects ; « hebt u » est plus courant en Belgique. « Vul dit formulier in » : impératif d’un verbe séparable (invullen) — la particule va à la fin. « post hem » : hem = la lettre (de brief, mot masculin) — pronoms objets, séance 13.",
  });

  // ------------------------------------------------------------ Fiche 5 Remplir le formulaire (p. 96)
  d.table({
    title: 'Fiche 5 : Remplir le formulaire', tag: 'MISE EN SITUATION', page: 'Livret p. 96',
    intro: 'Nouveau vocabulaire du **Jalon 1** (les questions du formulaire) et du **Jalon 2** (répondre au formulaire).',
    headers: ['JALON 1 · NL', 'FRANÇAIS', 'JALON 2 · NL', 'FRANÇAIS'],
    colW: [2.9, 2.8, 3.1, 3.33], boldCol: 0,
    rows: [
      ['^^de^^ voornaam', 'le prénom', '**Dat klopt.**', 'C’est exact.'],
      ['^^de^^ achternaam', 'le nom de famille', '**omdat**', 'parce que (verbe à la fin)'],
      ['%%het%% telefoonnummer', 'le numéro de téléphone', '**%%het%% schoolmateriaal**', 'le matériel scolaire'],
      ['%%het%% adres', 'l’adresse', '**Brussel**', 'Bruxelles'],
      ['^^de^^ cursus', 'le cours, la formation', '**invullen**', 'remplir (//ik vul … in//)'],
      ['volgen', 'suivre (un cours)', '**van mij**', 'à moi'],
      ['^^de^^ kaart', 'la carte', '**%%het%% formulier**', 'le formulaire'],
      ['', '', '**^^de^^ Nederlandse les**', 'le cours de néerlandais'],
    ],
    notes: "Lire le vocabulaire en chœur. Le sommaire de la Section 4 (page d’ouverture) place « Remplir le formulaire » en 04 ; dans le livret, c’est la fiche 5. « invullen » est séparable : ik vul het formulier in · ik heb het formulier ingevuld. « de Nederlandse les » est compréhensible, mais on dit plus naturellement « de les Nederlands » ou « de cursus Nederlands ».",
  });

  d.table({
    title: 'Fiche 5 · Jalon 1 : les questions du formulaire', tag: 'JALON 1', page: 'Livret p. 96',
    intro: 'Niveau A1 · seul 5 min, puis par deux — on se **tutoie** (je / jouw) : deux cursisten remplissent le formulaire ensemble.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.9, 4.6, 5.93], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'I', 'Quel est ton nom et ton prénom ?', '[[Wat is je achternaam en wat is je voornaam?]]'],
      ['2', 'I', 'Est-ce ton numéro de téléphone ?', '[[Is dit jouw telefoonnummer?]]'],
      ['3', 'I', 'Quelle est ton adresse ?', '[[Wat is je adres?]]'],
      ['4', 'N', 'Tu ne suis pas ce cours-ci ?', '[[Volg je deze cursus niet?]]'],
      ['5', 'I', 'À qui est cette carte ?', '[[Van wie is deze kaart?]]'],
    ],
    notes: "Jalon 1 : des questions simples, mais trois pièges (quel = wat, ce cours-ci = deze cursus, niet à la fin).",
    notesA: "Variantes : 1 « Wat is je naam en je voornaam? » (courant à l’oral) ; 2 « Is dat je telefoonnummer? » ; 3 ✗ « Welk is je adres? » → « Quel est… ? » + nom = Wat is…? ; 4 inversion sans -t (volg je), deze car de cursus, niet à la fin de la phrase ; 5 « Van wie is die kaart? » (là). « Van wie… » = à qui… ; réponse : « Van mij. »",
  });

  d.table({
    title: 'Fiche 5 · Jalon 2 : répondre au formulaire', tag: 'JALON 2', page: 'Livret p. 96',
    intro: 'Niveau A2 · seul 8 min, puis par deux — attention à **omdat** (verbe à la fin) et à **niet / geen**.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.9, 4.6, 5.93], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'D', 'Oui, c’est mon numéro, et voici mon adresse.', '[[Ja, dat is mijn nummer, en hier is mijn adres.]]'],
      ['2', 'D', 'Je suis le cours de néerlandais parce que je travaille à Bruxelles.', '[[Ik volg de cursus Nederlands omdat ik in Brussel werk.]]'],
      ['3', 'N', 'Je n’ai pas encore ma carte et je n’ai aucun matériel.', '[[Ik heb mijn kaart nog niet en ik heb geen schoolmateriaal.]]'],
      ['4', 'D', 'Cette carte-ci est à moi, l’autre est à un collègue.', '[[Deze kaart is van mij, de andere is van een collega.]]'],
      ['5', 'D', 'J’ai bien rempli tout le formulaire.', '[[Ik heb het hele formulier goed ingevuld.]]'],
    ],
    notes: "Jalon 2 : réponses développées. Rappeler omdat (séance 5) et le vocabulaire de la fiche (dat klopt, van mij, invullen).",
    notesA: "Variantes : 1 « Ja, dat klopt, dat is mijn nummer… » ; 2 « …de les Nederlands… » (le livret propose « de Nederlandse les ») — verbe à la fin après omdat, « à Bruxelles » = in Brussel ; 3 « nog niet » = pas encore (mijn kaart = nom défini → niet) ; « geen » devant un nom sans article ; 4 « van mij » = à moi ; « de andere » = l’autre ; 5 perfectum (séance 14) : heb … ingevuld (invullen séparable : in-ge-vuld) ; « het hele formulier » = tout le formulaire ; accepter « Ik heb alles goed ingevuld ».",
  });

  d.blocks({
    title: 'Phrase-clé : omdat, van wie, ingevuld', tag: 'GRAMMATICA', page: 'Livret p. 96',
    intro: 'Trois structures des jalons : regardez **où va le verbe**.',
    rows: [
      { label: 'omdat', cells: [{ t: 'Ik volg de cursus', role: 'X', lab: 'phrase 1' }, { t: 'omdat', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'in Brussel', role: 'P' }, { t: 'werk.', role: 'V', lab: 'verbe à la fin' }], fr: '…parce que je travaille à Bruxelles.' },
      { label: 'van wie', cells: [{ t: 'Van wie', role: 'Q' }, { t: 'is', role: 'V' }, { t: 'deze kaart?', role: 'S' }, { t: '— Van mij!', role: 'O', lab: 'réponse' }], fr: 'À qui est cette carte ? — À moi !' },
      { label: 'perfectum', cells: [{ t: 'Ik', role: 'S' }, { t: 'heb', role: 'V' }, { t: 'het hele formulier', role: 'O' }, { t: 'goed', role: 'M' }, { t: 'ingevuld.', role: 'F', lab: 'participe' }], fr: 'J’ai bien rempli tout le formulaire. (in-ge-vuld)' },
    ],
    foot: { kind: 'trap', text: '//parce que je **travaille** à Bruxelles// → //omdat ik in Brussel **werk**// (✗ //omdat ik werk in Brussel//). Et //à Bruxelles// = **in** Brussel.' },
    notes: "Omdat : vu à la séance 5 (verbe à la fin). Négation du Jalon 1 : « Volg je deze cursus niet? » — niet après l’objet défini (deze cursus), en fin de phrase. Le perfectum est un aperçu : hebben + participe à la fin, comme une parenthèse (fiche A2-02, séance 14). Faire transformer : « Ik werk in Brussel. Ik volg de cursus. » → « Ik volg de cursus omdat ik in Brussel werk. »",
  });

  d.exhibit({
    title: 'Le formulaire d’inscription', tag: 'MISE EN SITUATION', page: 'Livret p. 96 · support',
    label: 'FORMULIER', docTitle: 'Inschrijvingsformulier — cursus Nederlands 2',
    lines: [['Achternaam', '___'], ['Voornaam', '___'], ['Adres', 'straat + huisnummer · postcode + gemeente'], ['Telefoonnummer', '___'], ['E-mailadres', '___'], ['Geboortedatum', '___ / ___ / ___'], ['Nationaliteit', '___'], ['Cursus', 'Nederlands 2 · niveau A2'], ['Datum en handtekening', '___']],
    side: { label: 'LES QUESTIONS (u)', color: 'accent2', icon: 'FaClipboardList', lines: ['//Wat is uw achternaam?//', '//Hoe schrijft u dat?//', '//Wat is uw adres?//', '//Wanneer bent u geboren?//', '//Wat is uw nationaliteit?//', '//Teken hier, alstublieft.//'] },
    notes: "Support du jeu de rôle (formulaire inventé sur le modèle d’une inscription en promotion sociale). Faire d’abord remplir le formulaire pour soi, en silence (3 min). Mots nouveaux : de geboortedatum (la date de naissance), de nationaliteit, het e-mailadres, het huisnummer, de postcode, de gemeente (la commune). En Belgique : « Ik ben geboren op 12 maart 1990. »",
  });

  d.table({
    title: 'Hoe schrijf je dat? L’alphabet néerlandais', tag: '+ BONUS', page: 'Hors syllabus',
    intro: 'Pour **épeler** son nom au guichet. En rouge : les lettres qui **trompent** les francophones.',
    headers: ['', 'SE DIT', '', 'SE DIT', '', 'SE DIT'],
    colW: [0.9, 3.14, 0.9, 3.14, 0.9, 3.15], align: ['center', 'left', 'center', 'left', 'center', 'left'], boldCol: 0,
    rows: [
      ['A', 'a (long)', 'J', '!!yé!!', 'S', 'ès'],
      ['B', 'bé', 'K', 'ka', 'T', 'té'],
      ['C', 'sé', 'L', 'èl', 'U', 'u (comme en français)'],
      ['D', 'dé', 'M', 'èm', 'V', 'vé'],
      ['!!E!!', '!!é!! (pas « e »)', 'N', 'èn', '!!W!!', '!!wé!!'],
      ['F', 'èf', 'O', 'o (long)', 'X', 'iks'],
      ['!!G!!', '!!gé!! (g guttural, comme ch)', 'P', 'pé', 'Y', 'i-grec · ypsilon'],
      ['!!H!!', '!!ha!!', 'Q', 'ku', '!!Z!!', '!!zèt!!'],
      ['I', 'i', 'R', 'èr', '!!IJ!!', '!!lange ij!! (« èi »)'],
    ],
    foot: '//Hoe schrijf je dat?// — //D-U-P-O-N-T.// · //met een hoofdletter// (majuscule) · //met een dubbele l// · //met een streepje// (trait d’union)',
    notes: "Ajout hors syllabus, indispensable pour un formulaire. Faire épeler son nom et le nom de sa rue au voisin, qui écrit sans regarder. Lettres pièges : E (é), G (son guttural), H (ha, aspiré), J (yé), W (wé), Z (zèt), et le digramme IJ (« lange ij ») ≠ Y (« Griekse ij » ou i-grec). Les noms flamands en IJ (Van Dijk) : D-I-J-K se dit « dé – lange ij – ka ».",
  });

  d.steps({
    title: 'Jeu de rôle : au secrétariat de l’école', tag: 'MISE EN SITUATION', page: 'Livret p. 96',
    intro: 'Par deux · 10 min — A (secrétariat, **u**) remplit le formulaire de B. B **épelle** son nom. Puis on inverse.',
    steps: [
      { h: 'Accueil', color: 'accent2', lines: ['A : //Goedenavond! Wat is uw achternaam?//', 'B : //Dupont. D-U-P-O-N-T.//'] },
      { h: 'Coordonnées', color: 'accent1', lines: ['A : //Wat is uw adres? Is dit uw telefoonnummer?//', 'B : //Ja, dat klopt.//'] },
      { h: 'Le cours', color: 'accent3', lines: ['A : //Waarom volgt u deze cursus?//', 'B : //Omdat ik in Brussel werk.//'] },
      { h: 'La carte', color: 'accent4', lines: ['A : //Van wie is deze kaart?//', 'B : //Die kaart is van mij.//'] },
      { h: 'Signature', color: 'tx2', lines: ['A : //Teken hier, alstublieft.//', 'B : //Dank u wel. Tot ziens!//'] },
    ],
    foot: { kind: 'keep', label: 'Critères', text: 'B épelle **sans erreur** · //omdat// + verbe **à la fin** · //deze / die / dit / dat// corrects · **u / uw** du début à la fin.' },
    notes: "Version de la fiche (Jalon 1) : entre cursisten, au tutoiement (Wat is je adres? Volg je deze cursus niet?). Version secrétariat : vouvoiement. Les observateurs (groupes de trois) cochent les critères. « Waarom volgt u… » : avec u, le -t reste (volgt u), contrairement à « volg je ».",
  });

  d.closing({
    cliff: 'Séance 11 : **s’informer sur le cours** — le **pluriel**, l’**adjectif** (//een goede cursus//) et de nouveaux **faux-amis**.',
    homework: ['Apprendre **deze / dit / die / dat** et les **possessifs** (p. 60).', 'Apprendre les 15 mots **Administratie** (p. 86) **avec l’article**.', 'Remplir le **formulaire** pour vous-même, en néerlandais.', 'Savoir **épeler** votre nom et votre adresse.'],
    exit: 'Épelez votre nom, puis répondez à //Van wie is deze pen?// — //Deze pen is van …//',
    notes: "Ticket de sortie oral : vérifier l’épellation (E = é, J = yé, W = wé) et « van mij / van hem / van haar ».",
  });
};
