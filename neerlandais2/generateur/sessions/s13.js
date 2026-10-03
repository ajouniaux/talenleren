// Séance 13 — Bij het interimkantoor · Fiche 1 « À l’agence d’intérim » — Livret p. 71, 84, 92
exports.meta = {
  n: 13, slug: 'Bij_het_interimkantoor', title: 'Bij het interimkantoor',
  subtitle: 'À l’agence d’intérim — les pronoms objets et le monde du travail',
  pages: 'Livret p. 71 · 84 · 92', img: 'cover_situaties', time: '1', sceneLabel: 'FICHE',
  block: 'Section 4 · Mises en situation — Fiche 1',
  coverNotes: "Séance 13. Objectifs : remplacer une personne ou une chose par un pronom objet (fiche A2-04, p. 71), apprendre le vocabulaire du travail et de l’entreprise (thème 07, p. 84), puis s’inscrire dans une agence d’intérim en vouvoyant le conseiller (fiche 1, p. 92). Image : premier rendez-vous à l’agence pour l’emploi (« Ik zoek werk. »).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'M’inscrire dans une **agence d’intérim** : poser les bonnes questions, parler de ma situation, de ma disponibilité et de mon expérience.',
    language: '//Ik schrijf me in · Zoekt u werk? · Ik ben direct beschikbaar · voltijds / deeltijds · Ik bel hem · Ik help haar · Ik geef hun een boek//',
    skills: 'Remplacer un nom par un pronom objet · vocabulaire du travail · omdat en tête de phrase · jeu de rôle à l’agence (u)',
    agenda: [['Échauffement : la séance 12', 5], ['Hem · haar · hun (p. 71)', 20], ['Werk & bedrijf (p. 84)', 15], ['Fiche 1 : situation · vocabulaire', 5], ['Jalon 1 · Jalon 2', 20], ['Phrase-clé · jeu de rôle', 20], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. La fiche 1 se joue en vouvoiement (u) : rappeler « Zoekt u…? Hebt u…? Bent u…? » (verbe + t avec u). Le jeu de rôle final réutilise les pronoms (Ik bel u morgen) et le vocabulaire du travail.",
  });

  // ------------------------------------------------------------ Échauffement (rappel séance 12)
  d.exercise({
    title: 'Échauffement : la séance 12 en six phrases', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 12',
    instr: 'Seul · 5 min — Transformez ou traduisez, puis lisez à voix haute.',
    gap: 12,
    items: [
      'Ik drink koffie. //(altijd)// → [[Ik drink altijd koffie.]]',
      'Hij is er. //(nog niet)// → [[Hij is er nog niet.]]',
      'Ik bel mijn broer. //(futur proche)// → [[Ik ga mijn broer bellen.]]',
      'Quand es-tu disponible ? → [[Wanneer ben je beschikbaar?]]',
      'On se voit lundi à 9 h. → [[We zien elkaar maandag om 9 uur.]]',
      'le mot de passe · la pièce jointe → [[het wachtwoord · de bijlage]]',
    ],
    traps: ['Adverbe **après le verbe conjugué**.', '//gaan// … **infinitif à la fin**.', '//on se voit// = //we zien **elkaar**//.'],
    notes: "Rappel des fiches A2-07 et A2-10, de la fiche 3 et du thème Telefoon & mail. Interroger un étudiant par phrase.",
    notesA: "Phrase 3 : la personne (mijn broer) se place avant l’infinitif final. Transition : « Ik bel mijn broer » → « Ik bel hem » : c’est le sujet de la fiche du jour.",
  });

  // ------------------------------------------------------------ A2-04 Hem · haar · hun (p. 71)
  d.table({
    title: 'Hem · haar · hun : les pronoms objets', tag: 'GRAMMATICA', page: 'Livret p. 71',
    intro: 'Un seul pronom pour « **le, la** » et pour « **lui, leur** ».',
    headers: ['SUJET', 'OBJET', 'EXEMPLE', 'FRANÇAIS'],
    colW: [1.6, 2.8, 4.1, 3.63], boldCol: 1,
    rows: [
      ['ik', 'mij · me', 'Pieter ziet **me**.', 'Pieter me voit.'],
      ['jij', 'jou · je', 'Ik help **je**.', 'Je t’aide.'],
      ['u', 'u', 'Ik bel **u** morgen.', 'Je vous appelle demain.'],
      ['hij', 'hem', 'Ik zie **hem**.', 'Je le vois.'],
      ['zij', 'haar', 'Ik help **haar**.', 'Je l’aide.'],
      ['het', 'het', 'Ik neem **het**.', 'Je le prends.'],
      ['wij', 'ons', 'Sarah kent **ons**.', 'Sarah nous connaît.'],
      ['jullie', 'jullie', 'Ik zie **jullie** morgen.', 'Je vous vois demain.'],
      ['zij (pluriel)', 'hen · hun · ze', 'Hij kent **ze**.', 'Il les connaît.'],
    ],
    foot: '**mij, jou** = formes accentuées (on insiste) · **me, je, ze** = formes courtes, les plus fréquentes à l’oral.',
    notes: "Tableau A de la fiche A2-04. Faire lire en chœur la colonne « objet ». « Ik neem het » : het remplace un mot en het (het boek). Remarquer que « u » et « jullie » ne changent pas.",
  });

  d.blocks({
    title: 'Où va le pronom ? Après le verbe', tag: 'GRAMMATICA', page: 'Livret p. 71',
    intro: 'Le pronom objet se place **après le verbe** conjugué. La **personne** vient **avant la chose**.',
    rows: [
      { label: 'Jan → hem', cells: [{ t: 'Ik', role: 'S' }, { t: 'zie', role: 'V' }, { t: 'hem', role: 'O', lab: 'pronom' }], fr: 'Je **le** vois.' },
      { label: 'inversion', cells: [{ t: 'Morgen', role: 'T' }, { t: 'bel', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'u', role: 'O', lab: 'pronom' }], fr: 'Demain, je **vous** appelle.' },
      { label: 'personne + chose', cells: [{ t: 'Ik', role: 'S' }, { t: 'geef', role: 'V' }, { t: 'hem', role: 'P', lab: 'personne' }, { t: 'het boek', role: 'O', lab: 'chose' }], fr: 'Je **lui** donne le livre.' },
      { label: 'hun = leur', cells: [{ t: 'Ik', role: 'S' }, { t: 'geef', role: 'V' }, { t: 'hun', role: 'P', lab: 'personne' }, { t: 'een boek', role: 'O', lab: 'chose' }], fr: 'Je **leur** donne un livre.' },
    ],
    foot: { kind: 'trap', text: 'Le français met le pronom **devant** le verbe : //je **le** vois//, //je **lui** donne//. Le néerlandais le met **après** : //Ik zie **hem**// (✗ //Ik hem zie//).' },
    notes: "Images du livret : Jan → hem, Sophie → haar, mijn ouders → ze, le professeur → u (poli). Partie C : Ik geef hem het boek (verbe · personne · chose). Ici, la couleur magenta marque la personne et le gris la chose.",
  });

  d.cards({
    title: 'hen, hun ou ze ? Et pour une chose ?', tag: 'GRAMMATICA', page: 'Livret p. 71',
    perRow: 4,
    cards: [
      { h: 'HEN', color: 'accent2', f: 'met hen', lines: ['Après une **préposition** : //met hen, voor hen//.', 'COD à l’écrit : //Ik zie hen.//', '//Ik werk met hen.//'] },
      { h: 'HUN', color: 'accent3', f: 'Ik geef hun…', lines: ['= « **leur** » (à eux).', '//Ik geef hun een boek.//', '✗ //Ik zie hun// : fautif (= les).'] },
      { h: 'ZE', color: 'accent1', f: 'Ik zie ze.', lines: ['À l’**oral** : partout.', 'Personnes **ou** choses au pluriel.', '//De klanten? Ik bel ze.//'] },
      { h: 'UNE CHOSE', color: 'accent4', f: 'Ik zie hem niet.', lines: ['^^de^^ printer → **hem**', '%%het%% contract → **het**', '//Het contract? Ik teken het.//'] },
    ],
    foot: { kind: 'trap', text: 'Ne traduisez pas « //la// » par //haar// pour une chose : //L’imprimante ? Je ne **la** vois pas.// → //De printer? Ik zie **hem** niet.// (✗ //haar//)' },
    notes: "Encadré « hen · hun » du livret : hen après une préposition ou comme COD (met hen), hun comme « leur » (ik geef hun een boek), à l’oral : ze. « Ik zie hun » est très fréquent à l’oral mais considéré comme fautif. Choses : mot en de → hem (en Belgique, on entend aussi ze pour les mots féminins : de vergadering → ze), mot en het → het.",
  });

  d.exercise({
    title: 'Oefening : vervang door een voornaamwoord', tag: 'GRAMMATICA', page: 'Livret p. 71',
    instr: 'Seul · 5 min — Remplacez la personne par un **pronom objet**.',
    gap: 20,
    items: [
      'Ik bel Peter. → Ik bel [[hem]].',
      'Ik vraag Els. → Ik vraag [[haar]].',
      'Zij bezoekt haar vrienden. → Zij bezoekt [[ze / hen]].',
      'Ik vertel //(à elle)// [[haar]] het verhaal.',
    ],
    aside: { label: 'RAPPEL', icon: 'FaLightbulb', lines: ['hij → **hem** · zij → **haar**', 'zij (pl.) → **hen · hun · ze**', 'Personne **avant** chose.'] },
    traps: ['Phrase 3 : COD → //ze// (oral) ou //hen// (écrit) — ✗ //hun//.', 'Phrase 4 : la personne (//haar//) **avant** la chose (//het verhaal//).'],
    notes: "Exercice de la fiche A2-04 (p. 71). Le titre néerlandais est ajouté (« Remplace par un pronom » dans le livret).",
    notesA: "Phrase 3 : « hun » n’est correct que pour « leur » (complément indirect), pas pour « les ». Phrase 4 : « Ik vertel haar het verhaal » = je lui raconte l’histoire.",
  });

  d.exercise({
    title: 'Au travail : répondez avec un pronom', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Par deux · 5 min — A pose la question, B répond **avec un pronom**. Puis on inverse.',
    gap: 12,
    items: [
      'Ken je mijn collega Sarah? — Ja, ik ken [[haar]].',
      'Waar is de printer? — Ik zie [[hem]] niet.',
      'Heb je het contract? — Ja, ik heb [[het]].',
      'Bel je de klanten? — Ja, ik bel [[ze]] morgen.',
      'Geef je de baas het dossier? — Ja, ik geef [[hem]] het dossier.',
      'Werk je met Pieter en Sarah? — Ja, ik werk met [[hen]].',
    ],
    traps: ['Chose en ^^de^^ → **hem** · en %%het%% → **het**.', 'Après une préposition : //met **hen**//.', 'Personne avant chose : //ik geef **hem** het dossier//.'],
    notes: "Exercice ajouté : pronoms objets avec le vocabulaire du travail (thème 07, juste après). Phrase 4 : accepter « hen » à l’écrit.",
  });

  // ------------------------------------------------------------ V07 Werk & bedrijf (p. 84)
  d.imagier({
    title: 'Werk & bedrijf', tag: 'WOORDENSCHAT', page: 'Livret p. 84',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v07_01', nl: 'kantoor', art: 'het', fr: 'le bureau (le lieu)' },
      { img: 'v07_02', nl: 'bureau', art: 'het', fr: 'le bureau (le meuble)' },
      { img: 'v07_03', nl: 'computer', art: 'de', fr: 'l’ordinateur' },
      { img: 'v07_04', nl: 'printer', art: 'de', fr: 'l’imprimante' },
      { img: 'v07_05', nl: 'vergadering', art: 'de', fr: 'la réunion' },
      { img: 'v07_06', nl: 'collega', art: 'de', fr: 'le / la collègue' },
      { img: 'v07_07', nl: 'baas', art: 'de', fr: 'le patron' },
      { img: 'v07_08', nl: 'fabriek', art: 'de', fr: 'l’usine' },
      { img: 'v07_09', nl: 'sollicitatiegesprek', art: 'het', fr: 'l’entretien d’embauche' },
      { img: 'v07_10', nl: 'contract', art: 'het', fr: 'le contrat' },
      { img: 'v07_11', nl: 'loon', art: 'het', fr: 'le salaire' },
      { img: 'v07_12', nl: 'koffieautomaat', art: 'de', fr: 'la machine à café' },
      { img: 'v07_13', nl: 'lift', art: 'de', fr: 'l’ascenseur' },
      { img: 'v07_14', nl: 'klant', art: 'de', fr: 'le client' },
      { img: 'v07_15', nl: 'nietmachine', art: 'de', fr: 'l’agrafeuse' },
    ],
    notes: "Quiz : les étudiants donnent le mot AVEC l’article. Faux-ami à annoncer (séance 14) : het kantoor = le bureau (lieu), het bureau = le bureau (meuble).",
    notesA: "Cinq mots en het : kantoor, bureau, sollicitatiegesprek (het gesprek), contract, loon. Pluriels utiles : collega’s, klanten, vergaderingen, kantoren (oo → o).",
  });

  d.exercise({
    title: 'Wie of wat is het? Devinettes au travail', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul puis à deux · 5 min — Trouvez le mot de l’imagier, **avec l’article**.',
    gap: 10,
    items: [
      'Hier werk je met je collega’s, aan een bureau. → [[het kantoor]]',
      'Hier maakt men auto’s of chocolade. → [[de fabriek]]',
      'Dat krijg je elke maand voor je werk. → [[het loon]]',
      'Die persoon koopt iets in jouw winkel. → [[de klant]]',
      'Je tekent het als je een nieuwe job hebt. → [[het contract]]',
      'Je neemt hem naar de vijfde verdieping. → [[de lift]]',
      'Dat heb je met de baas, voordat je een job krijgt. → [[het sollicitatiegesprek]]',
    ],
    traps: ['Phrases 5 et 6 : //het// et //hem// remplacent une **chose** (fiche p. 71) !', '//de job// : très courant en Belgique.', '%%het%% kantoor ≠ %%het%% bureau (séance 14).'],
    notes: "Exercice ajouté : définitions simples en néerlandais (compréhension écrite) + réemploi des pronoms. Variante : les étudiants écrivent une devinette pour un autre mot (de printer, de koffieautomaat…).",
  });

  // ------------------------------------------------------------ Fiche 1 À l’agence d’intérim (p. 92)
  d.scene({
    title: 'Fiche 1 : À l’agence d’intérim', tag: 'MISE EN SITUATION', page: 'Livret p. 92', img: 'cover_situaties', time: '1', sceneLabel: 'FICHE',
    text: ['**Situation** : vous cherchez du travail. Vous allez à l’**interimkantoor** pour vous inscrire.', '**Jalon 1 (A1)** : poser les questions — documents, formulaire, situation.', '**Jalon 2 (A2)** : répondre — disponibilité, temps plein ou partiel, expérience.', 'On **vouvoie** le conseiller : //Zoekt u werk? Hebt u…?//'],
    ask: 'Lisez les bulles : qui dit «Ik zoek werk.» ? Que répond le conseiller ?',
    notes: "Image de la page d’ouverture de la section 4 du livret (avant la p. 92) : « Goedendag! » · « Aangenaam. » · « Ik zoek werk. ». Le VDAB est le service public flamand de l’emploi ; un interimkantoor est une agence privée de travail intérimaire. « Goedendag » est une salutation formelle très belge.",
  });

  d.table({
    title: 'Fiche 1 : À l’agence d’intérim — vocabulaire', tag: 'MISE EN SITUATION', page: 'Livret p. 92',
    intro: 'Nouveau vocabulaire du **Jalon 1** (questions) et du **Jalon 2** (réponses). Noms avec leur article.',
    headers: ['JALON 1 · NL', 'FRANÇAIS', 'JALON 2 · NL', 'FRANÇAIS'],
    colW: [3.55, 2.9, 2.6, 3.08], boldCol: 0,
    rows: [
      ['zich inschrijven (bij)', 's’inscrire (à)', '**werken**', 'travailler'],
      ['zoeken', 'chercher', '**beschikbaar**', 'disponible'],
      ['^^de^^ werkzoekende', 'le demandeur d’emploi', '**direct**', 'tout de suite'],
      ['%%het%% interimkantoor', 'l’agence d’intérim', '**voltijds** · **deeltijds**', 'à temps plein · partiel'],
      ['%%het%% inschrijvingsformulier', 'le formulaire d’inscription', '**flexibel**', 'flexible'],
      ['zich aanmelden', 's’inscrire, se présenter', '**elkaar**', 'l’un l’autre'],
      ['%%het%% document · documenten', 'le document', '^^de^^ **ploeg**', 'l’équipe'],
      ['nodig hebben', 'avoir besoin de', '^^de^^ **ervaring**', 'l’expérience'],
    ],
    foot: '//zich inschrijven// est **séparable** : //Ik schrijf **me** in.// · //om **me in te schrijven**// (pour m’inscrire).',
    notes: "Ajouts pour le Jalon 1 : het document · documenten et nodig hebben (vu à la séance 11). « Zich aanmelden » : s’inscrire (en ligne) ou se présenter à l’accueil (Meld u aan aan de balie). « De ploeg » est très courant en Flandre (aussi : het team). En Belgique, on dit aussi « onmiddellijk » pour direct.",
  });

  d.table({
    title: 'Fiche 1 · Jalon 1 (A1) : les questions à l’agence', tag: 'JALON 1', page: 'Livret p. 92',
    intro: 'Seul · 10 min — Traduisez. **D** déclarative · **I** interrogative · **N** négative. On **vouvoie** : //u//.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 5.0, 5.63], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'D', 'Je m’inscris dans une agence d’intérim.', '[[Ik schrijf me in bij een interimkantoor.]]'],
      ['2', 'I', 'De quels documents ai-je besoin pour m’inscrire ?', '[[Welke documenten heb ik nodig om me in te schrijven?]]'],
      ['3', 'I', 'Cherchez-vous du travail ?', '[[Zoekt u werk?]]'],
      ['4', 'N', 'Vous n’avez pas de formulaire ?', '[[Hebt u geen formulier?]]'],
      ['5', 'D', 'Monsieur est demandeur d’emploi.', '[[Meneer is werkzoekende.]]'],
    ],
    foot: '**geen** + nom (//geen formulier//) · pas d’article devant un statut ou un métier : //Hij is werkzoekende.//',
    notes: "Coquille du livret (phrase 2) : « Quels documents ai-je besoin pour m’inscrire ? » → en français correct « De quels documents ai-je besoin… ? » (corrigé sur la diapositive). Le vocabulaire du livret commence par un « · » isolé (sans conséquence).",
    notesA: "Variantes acceptables : 1 « Ik meld me aan bij een interimkantoor » ; 2 « Welke documenten zijn nodig om me in te schrijven? » ; 4 « Heeft u geen formulier? » (plus fréquent aux Pays-Bas) ou « Hebt u geen inschrijvingsformulier? » ; 5 « Meneer is een werkzoekende » est possible, mais sans article c’est plus naturel. Phrase 2 : om … te + infinitif, avec « te » entre la particule et le verbe (in te schrijven).",
  });

  d.table({
    title: 'Fiche 1 · Jalon 2 (A2) : ma situation et mes besoins', tag: 'JALON 2', page: 'Livret p. 92',
    intro: 'Seul · 10 min — Traduisez. Attention à **omdat** (verbe à la fin), à **geen** et à **elkaar**.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 4.8, 5.83], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'D', 'Je me suis inscrit parce que je cherche du travail tout de suite.', '[[Ik heb me ingeschreven omdat ik direct werk zoek.]]'],
      ['2', 'D', 'Elle est disponible immédiatement et elle peut travailler à temps plein.', '[[Ze is direct beschikbaar en ze kan voltijds werken.]]'],
      ['3', 'N', 'Je ne cherche pas un temps partiel, je veux travailler de façon flexible.', '[[Ik zoek geen deeltijds werk, ik wil flexibel werken.]]'],
      ['4', 'D', 'Dans une équipe, nous nous aidons toujours.', '[[In een ploeg helpen we elkaar altijd.]]'],
      ['5', 'D', 'Comme j’ai de l’expérience, je peux commencer demain.', '[[Omdat ik ervaring heb, kan ik morgen beginnen.]]'],
    ],
    foot: 'Phrase 1 : //Ik **heb** me **ingeschreven**// = passé composé (séance 14) · phrase 3 : %%het%% werk + geen → pas de -e (fiche p. 61).',
    notes: "Phrase 1 : le passé composé n’a pas encore été vu ; donner « Ik heb me ingeschreven » comme un bloc (hebben + me + participe du verbe séparable : in-ge-schreven).",
    notesA: "Variantes acceptables : 1 « …omdat ik meteen werk zoek » ; 2 « Zij is onmiddellijk beschikbaar… » ; 3 « Ik zoek geen deeltijdse job, ik wil flexibel werken » ou « Ik wil niet deeltijds werken… » ; 4 « In een team helpen we elkaar altijd » ; 5 « Ik heb ervaring, dus ik kan morgen beginnen ». Refuser « we helpen ons » et « omdat ik heb ervaring ».",
  });

  d.blocks({
    title: 'Phrase-clé : omdat, om … te et elkaar', tag: 'GRAMMATICA', page: 'Livret p. 92',
    intro: 'Trois structures de la fiche : regardez **où va le verbe**.',
    rows: [
      { label: 'omdat en tête', cells: [{ t: 'Omdat ik ervaring heb,', role: 'X', lab: 'position 1 = toute la subordonnée' }, { t: 'kan', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'morgen', role: 'T' }, { t: 'beginnen', role: 'F', lab: 'infinitif' }], fr: 'Comme j’ai de l’expérience, je peux commencer demain.' },
      { label: 'omdat après', cells: [{ t: 'Ik heb me ingeschreven', role: 'X', lab: 'phrase 1' }, { t: 'omdat', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'direct werk', role: 'O', lab: '' }, { t: 'zoek', role: 'V', lab: 'verbe à la fin' }], fr: '…parce que je cherche du travail tout de suite.' },
      { label: 'om … te', cells: [{ t: 'Welke documenten', role: 'Q' }, { t: 'heb', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'nodig', role: 'X', lab: '' }, { t: 'om me in te schrijven?', role: 'F', lab: 'om … te + infinitif' }], fr: 'De quels documents ai-je besoin pour m’inscrire ?' },
      { label: 'elkaar', cells: [{ t: 'In een ploeg', role: 'P' }, { t: 'helpen', role: 'V' }, { t: 'we', role: 'S' }, { t: 'elkaar', role: 'O', lab: 'l’un l’autre' }, { t: 'altijd', role: 'M', lab: 'adverbe' }], fr: 'Dans une équipe, nous nous aidons toujours.' },
    ],
    foot: { kind: 'trap', text: '//Pour m’inscrire// → //om me **in te schrijven**// : avec un verbe séparable, **te** se glisse entre la particule et le verbe (✗ //om te inschrijven//). Et //nous nous aidons// → //we helpen **elkaar**// (✗ //ons//).' },
    notes: "Rappel séance 11 : omdat en tête → toute la subordonnée occupe la 1re place, donc verbe + sujet ensuite (kan ik). Faire produire d’autres phrases : « Omdat ik direct beschikbaar ben, kan ik maandag beginnen. »",
  });

  d.steps({
    title: 'Jeu de rôle : inscription à l’interimkantoor', tag: 'MISE EN SITUATION', page: 'Livret p. 92',
    intro: 'Par deux · 10 min — A = la personne qui cherche du travail, B = le conseiller. On **vouvoie** (u). Puis on inverse.',
    steps: [
      { h: 'Accueil', color: 'accent2', lines: ['B : //Goedemorgen, kan ik u helpen?//', 'A : //Ik wil me inschrijven.//'] },
      { h: 'Documents', color: 'accent1', lines: ['A : //Welke documenten heb ik nodig?//', 'B : //Uw identiteitskaart en uw cv.//'] },
      { h: 'Situation', color: 'accent3', lines: ['B : //Zoekt u voltijds of deeltijds werk?//', 'A : //Ik zoek voltijds werk.//'] },
      { h: 'Expérience', color: 'tx2', lines: ['B : //Hebt u ervaring?//', 'A : //Ja, ik heb ervaring in een fabriek.//', 'B : //Goed, ik bel u morgen!//'] },
    ],
    foot: { kind: 'keep', label: 'Critères', text: '**u** du début à la fin · au moins **un** //omdat// · **un** pronom objet (//Ik bel u · Ik help hem//) · une phrase avec //beschikbaar//.' },
    notes: "Les observateurs (groupes de trois) cochent les critères. Pour aller plus loin : B demande la disponibilité (Wanneer bent u beschikbaar? — Ik ben direct beschikbaar) et A explique pourquoi il cherche du travail avec omdat.",
  });

  d.traps({
    title: 'Erreurs fréquentes de la séance', tag: 'PIÈGE', page: 'Livret p. 71 · 92',
    rows: [
      ['Ik hem zie.', 'Ik zie hem.', 'Le pronom suit le verbe.'],
      ['Ik geef het boek hem.', 'Ik geef hem het boek.', 'Personne avant chose.'],
      ['De printer? Ik zie haar niet.', 'De printer? Ik zie hem niet.', 'Chose en de → hem.'],
      ['We helpen ons.', 'We helpen elkaar.', 'Réciproque : elkaar.'],
      ['Omdat ik heb ervaring, ik kan beginnen.', 'Omdat ik ervaring heb, kan ik beginnen.', 'Verbe à la fin, puis inversion.'],
      ['om te inschrijven', 'om me in te schrijven', 'te entre particule et verbe.'],
    ],
    notes: "Synthèse avant la clôture : faire lire la colonne de gauche, la classe corrige à voix haute avant de dévoiler (cacher la colonne de droite si possible).",
  });

  d.closing({
    cliff: 'Séance 14 : **Mijn cv.** Raconter son parcours au passé — //Ik **heb** in een fabriek **gewerkt**// — et démasquer les faux-amis //bureau, kantoor, formatie//…',
    homework: ['Apprendre le tableau **sujet → objet** (p. 71).', 'Revoir les **15 mots** Werk & bedrijf (p. 84) avec de / het.', 'Recopier les **Jalons 1 et 2** de la fiche 1, corrigés (p. 92).', 'Préparer **3 phrases** sur votre expérience : //Ik heb ervaring in / als …//'],
    exit: 'Répondez avec un **pronom** : //Ken je de baas? · Heb je het contract? · Bel je de klanten?//',
    notes: "Réponses du ticket de sortie : Ja, ik ken hem. · Ja, ik heb het. · Ja, ik bel ze / hen.",
  });
};
