// Séance 17 — Mijn examen · Fiche 10 « Raconter son examen » — Livret p. 70, 83, 100b
const PURPLE = '6E4A9E';

exports.meta = {
  n: 17, slug: 'Mijn_examen', title: 'Mijn examen',
  subtitle: 'Raconter son examen — l’imparfait (OVT), la santé et le corps',
  pages: 'Livret p. 70 · 83 · 100b', img: 'cover_grammatica', time: '10', sceneLabel: 'FICHE',
  block: 'Section 4 · Mises en situation — Fiche 10',
  coverNotes: "Séance 17. Objectifs : former l’imparfait néerlandais (OVT) des verbes réguliers avec ’t kofschip et apprendre les verbes irréguliers indispensables (fiche A2-03, p. 70), apprendre le vocabulaire du corps et de la santé (thème 06, p. 83), puis raconter un examen en combinant perfectum et OVT (fiche 10, p. 100b). Image de couverture : Emma et Pieter révisent (« Ik leer grammatica! » / « Nederlands is leuk. »).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Raconter un **examen** (ou un événement passé) : ce que j’ai fait, comment c’était, ce que j’ai ressenti — et dire où j’ai **mal**.',
    language: '//ik werkte · ik speelde · ik was · ik had · ik ging — Heb je het examen gehaald? · In het begin was ik zenuwachtig. · Ik heb hoofdpijn.//',
    skills: 'Former l’OVT avec ’t kofschip · choisir perfectum ou OVT · nommer le corps et la santé · raconter avec omdat et nu',
    agenda: [['Échauffement : la séance 16', 5], ['De OVT : règle et verbes irréguliers', 15], ['Perfectum ou OVT ?', 5], ['Oefening + bonus OVT', 10], ['Gezondheid (p. 83) + bonus', 15], ['Fiche 10 : vocabulaire', 5], ['Jalon 1 · Jalon 2', 20], ['Phrase-clé · jeu de rôle', 10], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. La fiche de grammaire (OVT) prépare directement la fiche 10 : on raconte un examen avec le perfectum (ce que j’ai fait : Ik heb gestudeerd) et l’OVT (comment c’était : Het was moeilijk, ik was zenuwachtig). Le vocabulaire de la santé se relie au récit (Ik had hoofdpijn voor het examen…). Si le temps manque, le bonus « Ik heb pijn » se fait à la maison.",
  });

  // ------------------------------------------------------------ Échauffement (rappel séance 16)
  d.exercise({
    title: 'Échauffement : la séance 16 en sept phrases', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 16',
    instr: 'Seul · 5 min — Complétez ou traduisez, puis lisez à voix haute.',
    gap: 10,
    items: [
      'Is er iemand thuis? — Nee, er is [[niemand]] thuis.',
      'Ik zoek mijn sleutel, maar ik vind hem [[nergens]].',
      'rien de spécial → [[niets bijzonders]]',
      'Es-tu nouveau ici ? → [[Ben je nieuw hier?]]',
      'Dans quel service travailles-tu ? → [[Op welke afdeling werk je?]]',
      'Je ne travaille pas seul, car nous formons une équipe. → [[Ik werk niet alleen, want we vormen een team.]]',
      'l’ordinateur · la réunion → [[de computer · de vergadering]]',
    ],
    traps: ['Pas de double négation : //Ik zie **niemand**// (✗ //niet niemand//).', '//iets / niets// + adjectif + **-s**.', '//want// : ordre normal (//want we vormen…//).'],
    notes: "Rappel de la fiche A2-05 (iemand · niets), de la fiche 7 (se présenter dans l’entreprise) et du vocabulaire Werk & bedrijf. Interroger un étudiant par phrase.",
    notesA: "Variantes acceptables : 5 « In welke afdeling werk je? » ; 6 « …want we zijn een team » ou « want we werken samen ». Transition : « Hier, qu’avez-vous fait ? Comment c’était ? » → pour raconter, il faut le passé : perfectum (séance 14) et aujourd’hui l’imparfait, la OVT.",
  });

  // ------------------------------------------------------------ A2-03 De OVT (p. 70)
  d.cards({
    title: 'De OVT : l’imparfait des verbes réguliers', tag: 'GRAMMATICA', page: 'Livret p. 70',
    intro: 'Prenez le **radical** (infinitif − //en//) et regardez sa **dernière lettre** : est-elle dans **’t kofschip** ?',
    perRow: 3,
    cards: [
      { h: '’T KOFSCHIP', color: 'accent1', f: 't · k · f · s · ch · p', lines: ['Le radical finit par **t, k, f, s, ch** ou **p** ?', 'Oui → **-te** · pluriel **-ten**', 'Non → **-de** · pluriel **-den**'] },
      { h: '-TE / -TEN', color: 'accent2', f: 'ik werk**te** · wij werk**ten**', lines: ['werken → **werk** : k ∈ ’t kofschip', '//koken → ik kookte//', '//maken → hij maakte//', '//lachen → zij lachte//'] },
      { h: '-DE / -DEN', color: 'accent3', f: 'ik speel**de** · wij speel**den**', lines: ['spelen → **speel** : l ∉ ’t kofschip', '//wonen → ik woonde//', '//leren → hij leerde//', '//oefenen → wij oefenden//'] },
    ],
    foot: { kind: 'trap', label: 'Piège', text: 'Infinitif en **-zen** ou **-ven** : on regarde le **z** ou le **v** de l’infinitif → **-de** : //reizen → wij **reisden**// (✗ //reisten//) · //leven → ik **leefde**//.' },
    notes: "Partie A de la fiche A2-03. Faire épeler « ’t kofschip » : toutes les consonnes « sourdes ». Le radical s’écrit comme à la 1re personne du présent : spelen → ik speel → ik speelde. Coquille du livret : « speelen → ik speelde » → l’infinitif est « spelen » (un seul e). Double consonne possible : praten → ik praatte, antwoorden → ik antwoordde (on entend une seule consonne). Le titre de la fiche est « De OVT » (onvoltooid verleden tijd) ; le sommaire de la section 2 (avant la p. 58) l’appelle « L’imparfait — imperfectum » et la numérote 02 : c’est la fiche A2-03.",
  });

  d.table({
    title: 'Les verbes irréguliers indispensables', tag: 'GRAMMATICA', page: 'Livret p. 70',
    intro: 'La **voyelle change**. Une forme pour **ik, jij, u, hij, zij** (singulier), une forme pour **wij, jullie, zij** (pluriel).',
    headers: ['INFINITIF', 'SINGULIER', 'PLURIEL', 'VOORBEELD'],
    colW: [2.0, 2.2, 2.3, 5.63], boldCol: 1,
    rows: [
      ['zijn · être', 'was', 'waren', 'Gisteren **was** ik moe.'],
      ['hebben · avoir', 'had', 'hadden', 'Vorige week **had** ik een examen.'],
      ['gaan · aller', 'ging', 'gingen', 'We **gingen** samen naar Gent.'],
      ['eten · manger', 'at', 'aten', 'Ze **aten** frieten.'],
      ['drinken · boire', 'dronk', 'dronken', 'Pieter **dronk** een koffie.'],
      ['lezen · lire', 'las', 'lazen', 'Emma **las** de krant.'],
      ['komen · venir (+)', 'kwam', 'kwamen', 'Jullie **kwamen** te laat.'],
      ['kopen · acheter (+)', 'kocht', 'kochten', 'Mijn vader **kocht** brood.'],
    ],
    foot: '(+) = ajouté au tableau du livret : ces deux verbes sont dans l’exercice. Le singulier ne prend **jamais** de -t : //jij was · jij werkte//.',
    notes: "Partie B de la fiche (illustrations du livret : Emma, le gsm, la gare, les frites, le café, le journal). Faire lire en chœur : was – waren, had – hadden… Le livret dit « verbes forts » ; zijn et hebben sont plutôt « irréguliers », mais l’essentiel est de les apprendre par cœur. Autres verbes très utiles : doen → deed / deden, zien → zag / zagen, krijgen → kreeg / kregen, kunnen → kon / konden, moeten → moest / moesten.",
  });

  d.compare({
    title: 'Perfectum ou OVT ? Raconter au passé', tag: 'GRAMMATICA', page: 'Livret p. 69–70',
    left: { h: 'PERFECTUM (séance 14)', color: 'accent2', icon: 'FaCheck', items: ['Un fait **terminé**, dans une **conversation** : //Ik heb mijn examen gehaald.//', 'Pour **demander** ce qui s’est passé : //Heb je veel gestudeerd?//', 'Souvent = **passé composé** : //j’ai préparé// → //ik heb voorbereid//'] },
    right: { h: 'OVT (p. 70)', color: 'accent1', icon: 'FaBook', items: ['Une **situation**, un état, une émotion : //Ik was zenuwachtig.//', 'Une **histoire**, une suite d’actions : //We gingen naar het café en we dronken koffie.//', 'Souvent = **imparfait** : //c’était difficile// → //het was moeilijk//'] },
    foot: { kind: 'trap', text: 'Avec **zijn** et **hebben**, le néerlandais préfère l’OVT même quand le français dit « j’ai été / j’ai eu » : //Hier, j’ai été malade.// → //Gisteren **was** ik ziek.// (plus naturel que //ben ik ziek geweest//)' },
    notes: "Règle simple pour le niveau A2 : on pose les questions et on annonce les faits au perfectum ; on décrit le décor, les sentiments et on enchaîne une histoire à l’OVT. Les deux sont souvent possibles ; la fiche 10 mélange les deux (J’ai bien préparé… parce que j’étais nerveux).",
  });

  d.exercise({
    title: 'Oefening : schrijf de OVT', tag: 'GRAMMATICA', page: 'Livret p. 70',
    instr: 'Seul · 5 min — Écrivez la forme de l’imparfait (OVT).',
    gap: 14,
    items: [
      'koken //(ik)// → [[ik kookte]]',
      'reizen //(wij)// → [[wij reisden]]',
      'maken //(hij)// → [[hij maakte]]',
      'wonen //(zij, plur.)// → [[zij woonden]]',
      'kopen //(mijn vader)// → [[mijn vader kocht]]',
      'komen //(jullie)// → [[jullie kwamen]]',
    ],
    aside: { label: 'MÉTHODE', icon: 'FaLightbulb', lines: ['1. Radical : //kook, reiz, maak…//', '2. ’t kofschip ? → **-te** / sinon **-de**', '3. Pluriel : + **n**', '4. Irrégulier ? → tableau !'] },
    traps: ['2 : //reizen// → **z** → //reisden// (✗ //reisten//).', '5 et 6 : verbes **irréguliers** : //kocht · kwamen// (✗ //koopte · komden//).', 'Mijn vader = **hij** → singulier.'],
    notes: "Exercice de la fiche A2-03. Remarque : 5 (kopen) et 6 (komen) sont irréguliers alors que la règle du livret porte sur les verbes réguliers ; ils ne figurent pas dans la liste B : on les a ajoutés au tableau des irréguliers (diapositive précédente).",
    notesA: "Corriger en faisant dire la méthode à voix haute : « koken → kook → k est dans ’t kofschip → kookte ». Erreurs attendues : « reisten » (on regarde le z de l’infinitif), « koopte », « komden ».",
  });

  d.exercise({
    title: 'Emma raconte son examen à l’OVT', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul puis par deux · 5 min — Mettez le verbe entre parenthèses à l’**OVT**.',
    gap: 10,
    items: [
      'Vorige week [[had]] Emma een examen Nederlands. //(hebben)//',
      'Ze [[was]] een beetje zenuwachtig. //(zijn)//',
      'Elke avond [[leerde]] ze nieuwe woorden. //(leren)//',
      'Ze [[oefende]] ook met Pieter. //(oefenen)//',
      'Het examen [[duurde]] twee uur. //(duren)//',
      'Daarna [[gingen]] Emma en Pieter naar het café. //(gaan)//',
      'Ze [[dronken]] koffie en Emma [[lachte]]: «Het is gelukt!» //(drinken, lachen)//',
    ],
    traps: ['//leren, oefenen, duren// : r, n → **-de**.', '//lachen// : ch ∈ ’t kofschip → **-te**.', 'Sujet pluriel (//Emma en Pieter, ze//) → **-en** : //gingen, dronken//.'],
    notes: "Exercice ajouté : un petit récit qui prépare la fiche 10. Après correction, faire relire le texte à voix haute comme une histoire. Remarquer la dernière phrase : la citation directe « Het is gelukt! » reste au présent / perfectum.",
  });

  // ------------------------------------------------------------ V06 Gezondheid (p. 83)
  d.imagier({
    title: 'Gezondheid — la santé et le corps', tag: 'WOORDENSCHAT', page: 'Livret p. 83',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v06_01', nl: 'hoofd', art: 'het', fr: 'la tête' },
      { img: 'v06_02', nl: 'oog', art: 'het', fr: 'l’œil' },
      { img: 'v06_03', nl: 'neus', art: 'de', fr: 'le nez' },
      { img: 'v06_04', nl: 'mond', art: 'de', fr: 'la bouche' },
      { img: 'v06_05', nl: 'oor', art: 'het', fr: 'l’oreille' },
      { img: 'v06_06', nl: 'hand', art: 'de', fr: 'la main' },
      { img: 'v06_07', nl: 'arm', art: 'de', fr: 'le bras' },
      { img: 'v06_08', nl: 'been', art: 'het', fr: 'la jambe' },
      { img: 'v06_09', nl: 'voet', art: 'de', fr: 'le pied' },
      { img: 'v06_10', nl: 'buik', art: 'de', fr: 'le ventre' },
      { img: 'v06_11', nl: 'dokter', art: 'de', fr: 'le médecin' },
      { img: 'v06_12', nl: 'ziekenhuis', art: 'het', fr: 'l’hôpital' },
      { img: 'v06_13', nl: 'apotheek', art: 'de', fr: 'la pharmacie' },
      { img: 'v06_14', nl: 'medicijnen', art: 'de', fr: 'les médicaments' },
      { img: 'v06_15', nl: 'koorts', art: 'de', fr: 'la fièvre' },
    ],
    notes: "Quiz : les étudiants donnent le mot AVEC l’article. Montrer sur soi (hoofd, oog, neus…) et faire répéter. Jeu rapide possible : « Wijs naar je neus! Wijs naar je oor! » (impératif, séance 8).",
    notesA: "Cinq mots en het : hoofd, oog, oor, been, ziekenhuis (het huis). Pluriels utiles : ogen, oren, benen, handen, voeten, armen. « de medicijnen » est un pluriel (singulier : het medicijn). En Belgique, on entend aussi « de huisarts » (le médecin généraliste) et « de geneesheer ».",
  });

  d.exercise({
    title: 'Ik heb pijn aan mijn … — chez le médecin', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Par deux · 5 min — Traduisez, puis jouez : A dit où il a mal, B conseille (//Ga naar de dokter!//).',
    gap: 10,
    items: [
      'J’ai mal à la tête. → [[Ik heb hoofdpijn.]]',
      'J’ai mal au ventre. → [[Ik heb buikpijn.]]',
      'Elle a mal au pied. → [[Ze heeft pijn aan haar voet.]]',
      'J’ai de la fièvre : je vais chez le médecin. → [[Ik heb koorts: ik ga naar de dokter.]]',
      'J’achète des médicaments à la pharmacie. → [[Ik koop medicijnen bij de apotheek.]]',
      'Hier, j’avais mal aux yeux. → [[Gisteren had ik pijn aan mijn ogen.]]',
      'Il est à l’hôpital. → [[Hij is in het ziekenhuis.]]',
    ],
    traps: ['Le néerlandais met le **possessif** : //pijn aan **mijn** hoofd// (✗ //aan het hoofd//).', '//hoofd + pijn// = **hoofdpijn** (= //pijn aan mijn hoofd//).', '//naar// de dokter (mouvement) · //in// het ziekenhuis.', 'Pour souhaiter un prompt rétablissement : //**Beterschap!**//'],
    notes: "Exercice ajouté : réemploi du vocabulaire de la santé avec l’OVT (phrase 6). Le français dit « j’ai mal à LA tête », le néerlandais « aan MIJN hoofd ». Variantes acceptables : 1 « Ik heb pijn aan mijn hoofd » ; 3 « Ze heeft pijn aan de voet » est entendu, mais le possessif est la norme ; 5 « in de apotheek ». Mots composés utiles : hoofdpijn, buikpijn, keelpijn (la gorge), oorpijn, tandpijn.",
  });

  // ------------------------------------------------------------ Fiche 10 Raconter son examen (p. 100b)
  d.scene({
    title: 'Fiche 10 : Raconter son examen', tag: 'MISE EN SITUATION', page: 'Livret p. 100b', img: 'cover_grammatica', time: '10', sceneLabel: 'FICHE',
    text: ['**Situation** : vous avez passé un examen. Un ami vous pose des questions.', '**Jalon 1 (A1)** : questionner.', '**Jalon 2 (A2)** : raconter.', '**Perfectum** : ce que j’ai fait. **OVT** : comment c’était.'],
    ask: 'Emma et Pieter révisent. Après l’examen, que demandez-vous à Emma ?',
    notes: "Image : Emma et Pieter révisent les articles (« Ik leer grammatica! » / « Nederlands is leuk. »), illustration de la section Grammaire du livret. Faire produire des hypothèses : « Emma was zenuwachtig. Ze heeft veel gestudeerd. » Coquille du livret : le sommaire de la section 4 (avant la p. 92) annonce comme fiche 10 « Au guichet administratif — aan het loket » ; la vraie fiche 10 (p. 100b) est « Raconter son examen ». Le bandeau de photos de la fiche (pharmacie, marché, bus…) est un bandeau général de la section.",
  });

  d.table({
    title: 'Fiche 10 : Raconter son examen — vocabulaire', tag: 'MISE EN SITUATION', page: 'Livret p. 100b',
    intro: 'Nouveau vocabulaire du **Jalon 1** (questions) et du **Jalon 2** (réponses), avec le **participe passé** des verbes.',
    headers: ['JALON 1 · NL', 'FRANÇAIS', 'JALON 2 · NL', 'FRANÇAIS'],
    colW: [3.35, 2.75, 3.25, 2.78], boldCol: 0,
    rows: [
      ['studeren → gestudeerd', 'étudier', '**voorbereiden → voorbereid**', 'préparer'],
      ['komen → (ik ben) gekomen', 'venir', '**oefenen → geoefend**', 's’exercer, pratiquer'],
      ['halen → gehaald', 'réussir (un examen)', '**zenuwachtig**', 'nerveux'],
      ['moeilijk ≠ makkelijk', 'difficile ≠ facile', '**tevreden** (over)', 'satisfait (de)'],
      ['Het is gelukt!', 'Ça a marché ! C’est réussi !', '**trots** (op)', 'fier (de)'],
      ['%%het%% examen', 'l’examen', '**in het begin**', 'au début'],
      ['%%het%% resultaat', 'le résultat', '^^de^^ **opleiding** (+)', 'la formation'],
      ['^^de^^ test (+)', 'le test', '**slagen** (voor) (+)', 'réussir (à)'],
    ],
    foot: '(+) = ajouté. //voorbereiden// : **pas de ge-** (be- !) → //Ik heb het **voorbereid**.// · //lukken// → //het **is** gelukt// (auxiliaire zijn).',
    notes: "Vocabulaire du livret : Jalon 1 = studeren, komen, halen, moeilijk, makkelijk, gelukt, het examen, het resultaat ; Jalon 2 = voorbereiden, oefenen, zenuwachtig, tevreden, trots, in het begin. Ajouts utiles : de test, de opleiding (= la formation : faux-ami de « de formatie », séance 14), slagen (ik ben geslaagd). En Belgique, on dit aussi « fier op » pour trots op. « Een examen halen » = réussir un examen ; « Het is (me) gelukt » = j’ai réussi (ça a marché).",
  });

  d.table({
    title: 'Fiche 10 · Jalon 1 (A1) : questionner sur l’examen', tag: 'JALON 1', page: 'Livret p. 100b',
    intro: 'Seul · 10 min — Traduisez. **I** interrogative · **N** négative. On **tutoie** (//je//) : c’est un ami ou un collègue.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 4.9, 5.73], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'I', 'As-tu beaucoup étudié pour l’examen ?', '[[Heb je veel gestudeerd voor het examen?]]'],
      ['2', 'I', 'Es-tu venu à la formation hier ?', '[[Ben je gisteren naar de opleiding gekomen?]]'],
      ['3', 'I', 'Le test était-il difficile ? Tu l’as réussi ?', '[[Was de test moeilijk? Heb je hem gehaald?]]'],
      ['4', 'I *', 'Est-ce que l’examen était facile ?', '[[Was het examen makkelijk?]]'],
      ['5', 'I', 'Ai-je réussi, et quel est le résultat ?', '[[Heb ik het gehaald? En wat is het resultaat?]]'],
    ],
    foot: '* Le livret indique **N**, mais la phrase n’est pas négative. Version négative : //Was het examen niet makkelijk?// · //komen// → auxiliaire **zijn** : //Ben je … gekomen?//',
    notes: "Coquille du livret (phrase 4) : type « N » pour une phrase interrogative sans négation. On traduit la phrase telle qu’elle est écrite ; pour travailler la négation, faire aussi produire « Het examen was niet makkelijk » ou « Was het examen niet makkelijk? ».",
    notesA: "Variantes acceptables : 1 « Heb je veel voor het examen gestudeerd? » (en Belgique aussi « veel geleerd ») ; 2 « …naar de les / naar de cursus gekomen? » ; 3 « Is het gelukt? » ou « Ben je geslaagd? » — « hem » remplace « de test » (séance 13) ; 4 « Was het examen gemakkelijk? » ; 5 « Ben ik geslaagd? » ou « Is het me gelukt? ». Phrase 2 : T avant P (gisteren → naar de opleiding).",
  });

  d.table({
    title: 'Fiche 10 · Jalon 2 (A2) : raconter son examen', tag: 'JALON 2', page: 'Livret p. 100b',
    intro: 'Seul · 10 min — Traduisez. **Perfectum** pour les faits, **OVT** pour les états (//was//), **omdat** et **nu** : verbe à la fin.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 4.6, 6.03], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'D', 'Hier soir, j’ai bien préparé mon examen.', '[[Gisteravond heb ik mijn examen goed voorbereid.]]'],
      ['2', 'D', 'J’ai beaucoup pratiqué avec mes collègues, parce que j’étais nerveux.', '[[Ik heb veel met mijn collega’s geoefend, omdat ik zenuwachtig was.]]'],
      ['3', 'N', 'Au début, je n’étais pas du tout sûr de moi.', '[[In het begin was ik helemaal niet zeker van mezelf.]]'],
      ['4', 'D', 'C’était difficile, mais je suis content du résultat.', '[[Het was moeilijk, maar ik ben tevreden over het resultaat.]]'],
      ['5', 'D', 'Maintenant que tout est réussi, je suis fier de nous.', '[[Nu alles gelukt is, ben ik trots op ons.]]'],
    ],
    foot: '//pas du tout// → //helemaal niet// · //fier **de**// → //trots **op**// · //content **du**// → //tevreden **over**//.',
    notes: "Phrase 5 : « nu » (maintenant que) est ici une conjonction comme omdat : le verbe va à la fin (gelukt is), puis inversion dans la principale (ben ik).",
    notesA: "Variantes acceptables : 1 « Ik heb gisteravond mijn examen goed voorbereid » ; 2 « Ik heb veel geoefend met mijn collega’s, want ik was zenuwachtig » ; 3 « In het begin had ik helemaal geen zelfvertrouwen » ; 4 « tevreden met het resultaat » ; 5 « Nu alles gelukt is, ben ik fier op ons » (belge). Refuser « voorgebereid », « omdat ik was zenuwachtig », « ik ben trots van ons ».",
  });

  d.blocks({
    title: 'Phrase-clé : raconter avec perfectum, OVT et nu', tag: 'GRAMMATICA', page: 'Livret p. 100b',
    intro: 'Le **verbe conjugué** reste en 2e position ; le **participe** va à la fin ; après **omdat** et **nu**, le verbe va **à la fin**.',
    rows: [
      { label: 'perfectum', cells: [{ t: 'Gisteravond', role: 'T' }, { t: 'heb', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'mijn examen', role: 'O' }, { t: 'goed', role: 'M' }, { t: 'voorbereid', role: 'F', lab: 'participe' }], fr: 'Hier soir, j’ai bien préparé mon examen.' },
      { label: 'question', cells: [{ t: 'Ben', role: 'V' }, { t: 'je', role: 'S' }, { t: 'gisteren', role: 'T' }, { t: 'naar de opleiding', role: 'P' }, { t: 'gekomen?', role: 'F', lab: 'participe' }], fr: 'Es-tu venu à la formation hier ?' },
      { label: 'omdat + OVT', cells: [{ t: 'Ik heb veel geoefend,', role: 'X', lab: 'principale' }, { t: 'omdat', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'zenuwachtig', role: 'X', lab: '' }, { t: 'was', role: 'V', lab: 'verbe à la fin' }], fr: 'J’ai beaucoup pratiqué parce que j’étais nerveux.' },
      { label: 'nu …, inversion', cells: [{ t: 'Nu alles gelukt is,', role: 'X', lab: 'position 1 = subordonnée' }, { t: 'ben', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'trots op ons', role: 'X', lab: '' }], fr: 'Maintenant que tout est réussi, je suis fier de nous.' },
    ],
    foot: { kind: 'trap', text: '//J’étais nerveux// → //ik **was** zenuwachtig// (OVT), mais //j’ai préparé// → //ik **heb** voorbereid// (perfectum). Et //voorbereiden// n’a **pas de ge-** : ✗ //voorgebereid//.' },
    notes: "Faire produire d’autres phrases sur le même modèle : « Omdat ik zenuwachtig was, heb ik veel geoefend. » · « Nu het examen voorbij is, ga ik op vakantie. » Rappeler que la subordonnée en tête occupe la position 1 (séance 11).",
  });

  d.steps({
    title: 'Jeu de rôle : na het examen', tag: 'MISE EN SITUATION', page: 'Livret p. 100b',
    intro: 'Par deux · 10 min — A a passé un examen, B (un collègue, un ami) pose les questions. On **tutoie**. Puis on inverse.',
    steps: [
      { h: 'Hoe was het?', color: 'accent2', lines: ['B : //Hoe was je examen?//', 'A : //Het was moeilijk.//'] },
      { h: 'Voorbereiding', color: 'accent1', lines: ['B : //Heb je veel gestudeerd?//', 'A : //Ja, elke avond.//'] },
      { h: 'Gevoelens', color: 'accent3', lines: ['B : //Was je zenuwachtig?//', 'A : //Ja, omdat ik weinig tijd had.//'] },
      { h: 'Het resultaat', color: PURPLE, lines: ['A : //Ik heb het gehaald!//', 'B : //Proficiat!//'] },
    ],
    foot: { kind: 'keep', label: 'Critères', text: '**2** verbes au perfectum (//heb … gestudeerd//) · **2** à l’OVT (//was, had//) · **1** //omdat// (verbe à la fin) · une réaction : //Proficiat!// (BE) · //Gefeliciteerd!// (NL)' },
    notes: "Modèles plus longs à encourager : « Het was moeilijk, maar ik ben tevreden. » · « Ja, ik heb elke avond geoefend. » · « In het begin wel, omdat ik weinig tijd had. » · « Proficiat! Goed gedaan! ». Variante : A n’a pas réussi (Het is niet gelukt… Ik had hoofdpijn…) et B le console : « Jammer! Volgende keer lukt het wel. » Réutiliser le vocabulaire de la santé. Les observateurs (groupes de trois) cochent les critères.",
  });

  d.closing({
    cliff: 'Séance 18 : **Op de markt!** Faire ses courses, commander au café et tout rendre plus petit et plus gentil : //een kopje koffie, een broodje kaas//…',
    homework: ['Apprendre ’t kofschip et les **8 verbes irréguliers** (p. 70).', 'Revoir les **15 mots** Gezondheid (p. 83) avec de / het.', 'Recopier les **Jalons 1 et 2** de la fiche 10, corrigés (p. 100b).', 'Écrire **5 phrases** sur votre dernier examen : perfectum + OVT + omdat.'],
    exit: 'En 3 phrases, racontez votre dernier examen : une au **perfectum**, une à l’**OVT** (//was / had//), une avec **omdat**.',
    notes: "Exemple de ticket de sortie : « Ik heb veel gestudeerd. In het begin was ik zenuwachtig. Ik ben tevreden, omdat ik het examen gehaald heb. »",
  });
};
