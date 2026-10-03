// Séance 12 — Wanneer ben je beschikbaar? · Fiche 3 « Parler de ses disponibilités » — Livret p. 74, 77, 85, 94
exports.meta = {
  n: 12, slug: 'Wanneer_ben_je_beschikbaar', title: 'Wanneer ben je beschikbaar?',
  subtitle: 'Parler de ses disponibilités — fréquence, futur proche, téléphone et mail',
  pages: 'Livret p. 74 · 77 · 85 · 94', img: 'scene_1_3', time: '3', sceneLabel: 'FICHE',
  block: 'Section 4 · Mises en situation — Fiche 3',
  coverNotes: "Séance 12. Objectifs : placer les adverbes de fréquence et de temps (fiche A2-07, p. 74), parler du futur avec gaan + infinitif (fiche A2-10, p. 77), apprendre le vocabulaire du téléphone et du mail (thème 08, p. 85), puis proposer, accepter ou refuser un rendez-vous (fiche 3, p. 94). Image de couverture : Pieter propose un café à Emma.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Demander et donner mes **disponibilités**, proposer un rendez-vous, dire **à quelle fréquence** je fais quelque chose et ce que je **vais** faire.',
    language: '//Wanneer ben je beschikbaar? · Past het je …? · Ik ga … doen · altijd · vaak · nooit · al · nog niet · we zien elkaar//',
    skills: 'Placer l’adverbe après le verbe · construire gaan + infinitif · vocabulaire du téléphone et du mail · fixer un rendez-vous (jeu de rôle)',
    agenda: [['Échauffement : défis de la séance 11', 5], ['Altijd · nooit · al (p. 74)', 15], ['Ik ga … doen (p. 77)', 15], ['Telefoon & mail (p. 85)', 10], ['Fiche 3 : vocabulaire', 5], ['Jalon 1 · Jalon 2', 20], ['Phrase-clé · jeu de rôle', 15], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. Les deux fiches de grammaire préparent directement la fiche 3 : on parle de son emploi du temps (altijd, nooit…) et de ses projets (Ik ga …). Si le temps manque, le bonus Telefoon & mail se fait à la maison.",
  });

  // ------------------------------------------------------------ Échauffement (rappel séance 11)
  d.experts({
    title: 'Échauffement : quatre défis de la séance 11', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 11',
    intro: 'Par deux · 5 min — A lit un défi, B répond à voix haute, puis on change de carte. Correction collective ensuite.',
    cards: [
      { who: 'A', q: '**Fiche 4** — Posez deux questions sur un cours : //Wanneer…? · Hoeveel…? · Welke…?//' },
      { who: 'B', q: '**Le pluriel** — //de les · het boek · de week · de euro · het kind//' },
      { who: 'C', q: '**-e ou pas ?** — //een (nieuw) oefenboek · de (snel) trein · (goed) boeken · het (groot) lokaal//' },
      { who: 'D', q: '**Faux-amis** — En néerlandais : //le journal télévisé · un examen oral · courageux · le bistrot//' },
    ],
    notes: "Réponses : A « Wanneer begint de cursus? · Hoeveel kost hij? · Welke boeken heb ik nodig? ». B de lessen · de boeken · de weken · de euro’s (mais 120 euro) · de kinderen. C een nieuw oefenboek · de snelle trein · goede boeken · het grote lokaal. D het journaal · een mondeling examen · moedig · het café. Corriger au tableau après 4 minutes.",
  });

  // ------------------------------------------------------------ A2-07 Altijd · nooit · al (p. 74)
  d.scale({
    title: 'Altijd · nooit · al — hoe vaak?', tag: 'GRAMMATICA', page: 'Livret p. 74',
    scaleLabel: 'Hoe vaak? — à quelle fréquence ?', left: '0 %', right: '100 %',
    marks: [
      { word: 'nooit', v: 0, pct: '0 %', ex: 'Hij eet **nooit** vlees.', fr: 'jamais' },
      { word: 'zelden', v: 20, pct: '20 %', ex: 'Pieter belt **zelden**.', fr: 'rarement' },
      { word: 'soms', v: 40, pct: '40 %', ex: 'Emma werkt **soms** thuis.', fr: 'parfois' },
      { word: 'vaak', v: 60, pct: '60 %', ex: 'Zij drinkt **vaak** thee.', fr: 'souvent' },
      { word: 'meestal', v: 80, pct: '80 %', ex: 'Ik neem **meestal** de trein.', fr: 'd’habitude' },
      { word: 'altijd', v: 100, pct: '100 %', ex: 'Ik drink **altijd** koffie.', fr: 'toujours' },
    ],
    notes: "Le livret présente l’échelle de 100 % (altijd) à 0 % (nooit) ; ici, de gauche à droite, de 0 à 100 %. Faire répéter, puis demander « Hoe vaak drink jij koffie? » à plusieurs étudiants : réponse en phrase complète (Ik drink vaak koffie). « Nooit » remplace « niet » : Ik drink nooit koffie (✗ niet nooit).",
  });

  d.blocks({
    title: 'Où placer l’adverbe ? al · nog · pas · nog niet', tag: 'GRAMMATICA', page: 'Livret p. 74',
    intro: 'L’adverbe se place **juste après le verbe conjugué** — donc après le sujet s’il y a inversion.',
    rows: [
      { label: 'altijd', cells: [{ t: 'Ik', role: 'S' }, { t: 'drink', role: 'V' }, { t: 'altijd', role: 'M', lab: 'adverbe' }, { t: 'koffie', role: 'O' }], fr: 'Je bois **toujours** du café.' },
      { label: 'inversion', cells: [{ t: '’s Morgens', role: 'T' }, { t: 'drink', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'altijd', role: 'M', lab: 'adverbe' }, { t: 'koffie', role: 'O' }], fr: 'Le matin, je bois **toujours** du café. → adverbe **après** le sujet inversé' },
      { label: 'al = déjà', cells: [{ t: 'De trein', role: 'S' }, { t: 'is', role: 'V' }, { t: 'al', role: 'M', lab: 'adverbe' }, { t: 'weg', role: 'X', lab: '' }], fr: 'Le train est **déjà** parti.' },
      { label: 'nog niet', cells: [{ t: 'Ik', role: 'S' }, { t: 'heb', role: 'V' }, { t: 'nog niet', role: 'N', lab: 'pas encore' }, { t: 'gegeten', role: 'F', lab: 'participe' }], fr: 'Je n’ai **pas encore** mangé. → le participe reste **à la fin**' },
    ],
    foot: { kind: 'trap', text: '//pas// n’est **pas** une négation : //Hij is **pas** één jaar// = il n’a **qu’**un an. //nog// = encore : //Ik werk **nog**.// Pour « uniquement » : //alleen// (//Ik wil **alleen** koffie//).' },
    notes: "Partie B de la fiche (al · nog · pas · nog niet) avec les images du livret : le train déjà parti, l’homme qui travaille encore (bâillement), le bébé d’un an, la soupe pas encore mangée. Nuance à donner : avec un complément défini (het boek, hem), l’adverbe se place plutôt après ce complément : « Ik heb het boek al gelezen ».",
  });

  d.exercise({
    title: 'Oefening : plaats het woord', tag: 'GRAMMATICA', page: 'Livret p. 74',
    instr: 'Seul · 5 min — Placez le mot entre parenthèses et réécrivez la phrase complète.',
    gap: 16,
    items: [
      'Zij drinkt thee. //(vaak)// → [[Zij drinkt vaak thee.]]',
      'Wij hebben het boek gelezen. //(al)// → [[Wij hebben het boek al gelezen.]]',
      'De trein is er. //(nog niet)// → [[De trein is er nog niet.]]',
      'Hij eet vlees. //(nooit)// → [[Hij eet nooit vlees.]]',
    ],
    aside: { label: 'LA RÈGLE', icon: 'FaLightbulb', lines: ['Adverbe **juste après le verbe conjugué**.', '//Ik drink **altijd** koffie.//', 'Participe passé : **à la fin**.', '//Ik heb **nog niet** gegeten.//'] },
    traps: ['Phrase 2 : complément **défini** (//het boek//) → l’adverbe vient **après** lui.', '//al het boek// signifierait « tout le livre » !', 'Phrase 3 : après //er// : //is er **nog niet**//.', 'Phrase 4 : //nooit// remplace //niet//.'],
    notes: "Exercice de la fiche A2-07 (p. 74).",
    notesA: "Simplification du livret : la règle « juste après le verbe conjugué » ne donne pas la bonne réponse pour la phrase 2. Avec un complément défini (het boek), l’adverbe se place après lui : « Wij hebben het boek al gelezen ». Ne pas accepter « Wij hebben al het boek gelezen » (= nous avons lu tout le livre). Phrases 1 et 4 : compléments indéfinis (thee, vlees) → adverbe juste après le verbe.",
  });

  d.exercise({
    title: 'al, nog, pas, nog niet ou alleen ?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Par deux · 5 min — Complétez avec **al · nog · pas · nog niet · alleen**.',
    gap: 14,
    items: [
      'Het is [[pas]] zeven uur: de les begint om negen uur.',
      'Ben je [[al]] klaar? — Nee, ik ben [[nog niet]] klaar.',
      'Pieter woont [[nog]] bij zijn ouders.',
      'Emma is [[pas]] twintig jaar.',
      'Ik drink [[alleen]] water, geen koffie.',
      'Begint de cursus vandaag? — Nee, hij begint [[pas]] maandag.',
    ],
    traps: ['//pas// = seulement **dans le temps** (heure, âge, date).', '//alleen// = uniquement : //alleen water//.', '//nog// = encore, ça continue · //nog niet// = pas encore.'],
    notes: "Exercice ajouté : la partie B de la fiche (al · nog · pas · nog niet) n’a pas d’exercice dans le livret, et « pas » est un vrai piège pour les francophones.",
    notesA: "Phrase 6 : « pas maandag » = seulement lundi, pas avant (= ne … que lundi). Faire traduire chaque phrase en français pour vérifier.",
  });

  // ------------------------------------------------------------ A2-10 Ik ga … doen (p. 77)
  d.blocks({
    title: 'Ik ga … doen : trois façons de parler du futur', tag: 'GRAMMATICA', page: 'Livret p. 77',
    intro: '**gaan** conjugué en **2e position** + **infinitif à la fin** = « je vais faire ».',
    rows: [
      { label: 'gaan + inf.', cells: [{ t: 'Ik', role: 'S' }, { t: 'ga', role: 'V', lab: '2 · gaan' }, { t: 'vanavond', role: 'T' }, { t: 'een film', role: 'O' }, { t: 'kijken', role: 'F', lab: 'fin · infinitif' }], fr: 'Je vais regarder un film ce soir. → **intention**' },
      { label: 'question', cells: [{ t: 'Wat', role: 'Q' }, { t: 'ga', role: 'V' }, { t: 'je', role: 'S' }, { t: 'dit weekend', role: 'T' }, { t: 'doen?', role: 'F', lab: 'fin · infinitif' }], fr: 'Qu’est-ce que tu vas faire ce week-end ?' },
      { label: 'présent', cells: [{ t: 'Morgen', role: 'T' }, { t: 'werk', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'thuis', role: 'P' }], fr: 'Demain, je travaille à la maison. → **le plus courant**' },
      { label: 'zullen + inf.', cells: [{ t: 'Ik', role: 'S' }, { t: 'zal', role: 'V' }, { t: 'je', role: 'O', lab: 'objet' }, { t: 'morgen', role: 'T' }, { t: 'bellen', role: 'F', lab: 'fin · infinitif' }], fr: 'Je t’appellerai demain. → **promesse**' },
    ],
    foot: { kind: 'trap', text: 'Le français dit //je vais **regarder** un film//. En néerlandais, l’infinitif part **à la fin** : //Ik ga een film **kijken**// (✗ //Ik ga kijken een film//).' },
    notes: "Images du livret : le calendrier (Morgen werk ik thuis), la soupe (Ik ga nu koken), le téléphone (Ik zal je bellen). Encadré « Au quotidien » : pour le week-end, dire « Wat ga je doen? » ou « Wat doe je dit weekend? » ; « Wat zult u doen? » est trop formel. Attention : « Ik ga naar Gent » = je vais à Gand (déplacement, sans infinitif).",
  });

  d.exercise({
    title: 'Oefening : gaan of zullen?', tag: 'GRAMMATICA', page: 'Livret p. 77',
    instr: 'Seul · 5 min — Conjuguez **gaan** ou **zullen** (ou le **présent**) et placez l’infinitif.',
    gap: 18,
    items: [
      'Wat [[ga]] jij vanavond [[doen]]? //(doen · intention)//',
      'Zij [[gaat]] een auto [[huren]]. //(huren · intention)//',
      'Wij [[zullen]] u zeker [[helpen]]. //(helpen · promesse)//',
      'Volgende week [[reizen]] wij naar Gent. //(reizen · présent)//',
    ],
    aside: { label: 'CONJUGAISON', icon: 'FaLightbulb', lines: ['**gaan** : ik ga · jij gaat · hij gaat · wij gaan', '**zullen** : ik zal · jij zal (zult) · hij zal · wij zullen'] },
    traps: ['Phrase 1 : //**ga** jij// — pas de -t quand //jij// suit le verbe.', 'Phrase 4 : **présent** + mot de temps : ni gaan ni zullen.', '//u zeker helpen// : pronom puis adverbe.'],
    notes: "Exercice de la fiche A2-10 (p. 77).",
    notesA: "La consigne du livret dit « gaan ou zullen ? », mais la phrase 4 demande le présent (« reizen · présent ») : c’est la 1re façon de parler du futur, la plus courante. « jij zal » et « jij zult » sont corrects tous les deux ; « jij zal » est plus fréquent en Belgique.",
  });

  d.exercise({
    title: 'Wat ga je doen? Au futur proche', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Transformez au **futur proche** (gaan + infinitif). Attention aux verbes **séparables** !',
    gap: 12,
    items: [
      'Ik kook vanavond. → [[Ik ga vanavond koken.]]',
      'Emma belt haar broer. → [[Emma gaat haar broer bellen.]]',
      'Morgen werken we thuis. → [[Morgen gaan we thuis werken.]]',
      'Wat doe je zaterdag? → [[Wat ga je zaterdag doen?]]',
      'Ik schrijf me vandaag in. → [[Ik ga me vandaag inschrijven.]]',
      'Pieter staat om zes uur op. → [[Pieter gaat om zes uur opstaan.]]',
    ],
    traps: ['Séparable : à l’infinitif, la particule se **recolle** : //inschrijven//, //opstaan//.', 'Inversion : //Morgen **gaan we**…//', 'Un seul verbe conjugué : **gaan**.'],
    notes: "Exercice ajouté : phrases 5 et 6 = verbes séparables (séances 1 et 11). Erreur fréquente : « Ik ga me vandaag in schrijven » ou « Ik ga schrijven me in ».",
  });

  // ------------------------------------------------------------ V08 Telefoon & mail (p. 85)
  d.imagier({
    title: 'Telefoon & mail', tag: 'WOORDENSCHAT', page: 'Livret p. 85',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v08_01', nl: 'telefoon', art: 'de', fr: 'le téléphone' },
      { img: 'v08_02', nl: 'gsm', art: 'de', fr: 'le portable' },
      { img: 'v08_03', nl: 'bellen', art: null, fr: 'téléphoner, appeler' },
      { img: 'v08_04', nl: 'berichtje', art: 'het', fr: 'le message (SMS)' },
      { img: 'v08_05', nl: 'e-mail', art: 'de', fr: 'l’e-mail' },
      { img: 'v08_06', nl: 'bijlage', art: 'de', fr: 'la pièce jointe' },
      { img: 'v08_07', nl: 'toetsenbord', art: 'het', fr: 'le clavier' },
      { img: 'v08_08', nl: 'muis', art: 'de', fr: 'la souris' },
      { img: 'v08_09', nl: 'scherm', art: 'het', fr: 'l’écran' },
      { img: 'v08_10', nl: 'headset', art: 'de', fr: 'le casque-micro' },
      { img: 'v08_11', nl: 'wifi', art: 'de', fr: 'le wifi' },
      { img: 'v08_12', nl: 'oplader', art: 'de', fr: 'le chargeur' },
      { img: 'v08_13', nl: 'versturen', art: null, fr: 'envoyer' },
      { img: 'v08_14', nl: 'wachtwoord', art: 'het', fr: 'le mot de passe' },
      { img: 'v08_15', nl: 'videogesprek', art: 'het', fr: 'l’appel vidéo' },
    ],
    notes: "Quiz : montrer les images numérotées, les étudiants donnent le mot AVEC l’article (de ou het ?). Belgique : « de gsm » (portable) ; aux Pays-Bas « het mobieltje ». « Het berichtje » : les diminutifs en -je sont toujours het.",
    notesA: "Cadres bleus = de, magenta = het, gris = verbes. Cinq mots en het : berichtje, toetsenbord, scherm, wachtwoord, videogesprek (het gesprek). Prononciation : gsm [Gé-ès-èm], wifi [wi-fi].",
  });

  d.exercise({
    title: 'Au bureau : le bon mot du téléphone et du mail', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul · 5 min — Complétez avec un mot de l’imagier (conjuguez le verbe si nécessaire).',
    cols: 2, gap: 14,
    items: [
      'In [[bijlage]] vindt u mijn cv.',
      'Mijn gsm is bijna leeg. Waar is mijn [[oplader]]?',
      'Ik kan niet inloggen: ik ben mijn [[wachtwoord]] vergeten.',
      'Pieter heeft om tien uur een [[videogesprek]] met zijn baas.',
      'Emma stuurt een [[berichtje]] naar Pieter: «Tot straks!»',
      'Ik hoor je niet goed, ik zet mijn [[headset]] op.',
      'Het [[scherm]] van mijn computer is te klein.',
      'Ik [[bel]] je vanavond, oké?',
    ],
    traps: ['//In bijlage vindt u…// : formule belge courante dans un mail.', '%%het%% berichtje : diminutif en **-je** → toujours %%het%%.', '//Ik **bel** je// : bellen → ik bel (un seul l).'],
    notes: "Exercice ajouté : réemploi du thème 08 en contexte professionnel (prépare les séances 13 à 16). Variante orale : un étudiant mime, la classe trouve le mot.",
  });

  // ------------------------------------------------------------ Fiche 3 Parler de ses disponibilités (p. 94)
  d.table({
    title: 'Fiche 3 : Parler de ses disponibilités — vocabulaire', tag: 'MISE EN SITUATION', page: 'Livret p. 94',
    intro: 'Nouveau vocabulaire du **Jalon 1** (demander) et du **Jalon 2** (répondre). On **tutoie** dans cette fiche.',
    headers: ['JALON 1 · NL', 'FRANÇAIS', 'JALON 2 · NL', 'FRANÇAIS'],
    colW: [3.1, 3.0, 2.85, 3.18], boldCol: 0,
    rows: [
      ['maandag · dinsdag', 'lundi · mardi', '**werken**', 'travailler'],
      ['woensdag · donderdag', 'mercredi · jeudi', '**liever** (graag → liever)', 'plutôt, de préférence'],
      ['vrijdag', 'vendredi', '**elkaar**', 'l’un l’autre, se (réciproque)'],
      ['beschikbaar', 'disponible', '**vrij**', 'libre'],
      ['afspreken', 'convenir, fixer un rendez-vous', '**graag**', 'volontiers'],
      ['zich vrijmaken', 'se libérer', '^^de^^ **ochtend** · ^^de^^ **middag**', 'le matin · l’après-midi'],
      ['passen · het past me', 'convenir · ça me convient', '^^de^^ **avond** · **zeker**', 'le soir · sûr, certainement'],
    ],
    foot: 'Les jours s’écrivent **sans majuscule**. Jour + moment = **un seul mot** : //donderdag**ochtend**//, //vrijdag**middag**//, //woensdag**avond**//.',
    notes: "Ajouts pour les Jalons : de ochtend, de middag, de avond, zeker (mots déjà vus en séance 1). En Belgique, on dit très souvent « de voormiddag » (le matin) et « de namiddag » (l’après-midi) : donderdagvoormiddag, vrijdagnamiddag. « afspreken » est séparable : We spreken maandag af.",
  });

  d.table({
    title: 'Fiche 3 · Jalon 1 (A1) : demander les disponibilités', tag: 'JALON 1', page: 'Livret p. 94',
    intro: 'Seul · 10 min — Traduisez, puis comparez avec votre voisin. **I** interrogative · **N** négative.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 5.0, 5.63], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'I', 'Quand es-tu disponible, lundi ou mardi ?', '[[Wanneer ben je beschikbaar, maandag of dinsdag?]]'],
      ['2', 'I', 'Pouvons-nous échanger mercredi prochain à 10 heures ?', '[[Kunnen we volgende woensdag om 10 uur afspreken?]]'],
      ['3', 'N', 'Tu ne peux pas te libérer jeudi matin ?', '[[Kun je je donderdagochtend niet vrijmaken?]]'],
      ['4', 'I', 'Le vendredi après-midi te convient-il ?', '[[Past het je vrijdagmiddag?]]'],
      ['5', 'I', 'Es-tu libre le soir ?', '[[Ben je ’s avonds vrij?]]'],
    ],
    foot: 'Question sans mot interrogatif : le **verbe ouvre** la phrase — //**Kunnen** we…? **Ben** je…?// Et l’**infinitif** va à la fin.',
    notes: "Phrase 2 : « échanger » est vague en français ; avec le vocabulaire de la fiche, on comprend « se voir pour en parler » → afspreken.",
    notesA: "Variantes acceptables : 2 « …om 10 uur praten / overleggen? » ou « woensdag volgende week » ; 3 « Kan je je… » (très courant en Belgique) ou « donderdagmorgen / donderdagvoormiddag » ; 4 « Is vrijdagmiddag goed voor jou? » ou « Komt vrijdagmiddag je goed uit? » (Belgique : vrijdagnamiddag) ; 5 « Ben je ’s avonds beschikbaar? ». Phrase 3 : deux « je » — le sujet (je = tu) et le pronom réfléchi (je = te).",
  });

  d.table({
    title: 'Fiche 3 · Jalon 2 (A2) : répondre sur ses disponibilités', tag: 'JALON 2', page: 'Livret p. 94',
    intro: 'Seul · 10 min — Traduisez. **D** déclarative · **N** négative. Attention à **want**, **als** et **elkaar**.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 4.8, 5.83], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'D', 'Oui, mardi me convient bien, mais je préfère de loin le matin.', '[[Ja, dinsdag past me goed, maar ik heb de ochtend veel liever.]]'],
      ['2', 'N', 'Non, je ne suis pas libre vendredi, car je travaille.', '[[Nee, ik ben vrijdag niet vrij, want ik werk.]]'],
      ['3', 'D', 'Le mercredi après-midi, je peux venir, c’est sûr.', '[[Woensdagmiddag kan ik zeker komen.]]'],
      ['4', 'D', 'Je viens volontiers jeudi soir si ça te convient.', '[[Ik kom graag donderdagavond, als het je past.]]'],
      ['5', 'D', 'D’accord, on se voit lundi à 9 heures.', '[[Akkoord, we zien elkaar maandag om 9 uur.]]'],
    ],
    foot: '//liever hebben// fonctionne comme //nodig hebben// : **liever** part vers la fin. //Akkoord!// = « d’accord », très belge.',
    notes: "Phrase 3 : le moment en tête → inversion (Woensdagmiddag kan ik…). Phrase 4 : als → verbe à la fin (als het je past).",
    notesA: "Variantes acceptables : 1 « …maar ik heb veel liever de ochtend » ou « …maar ’s ochtends kom ik veel liever » ; 3 « Woensdagmiddag kan ik zeker » ; 4 « Donderdagavond kom ik graag, als het je past » ; 5 « Oké / Goed / Afgesproken, we zien elkaar… ». Refuser « we zien ons » (calque de « on se voit ») et « ik ben niet vrij vrijdag ».",
  });

  d.blocks({
    title: 'Phrase-clé : proposer, refuser, accepter, confirmer', tag: 'GRAMMATICA', page: 'Livret p. 94',
    intro: 'Quatre phrases qui servent **toujours** pour fixer un rendez-vous.',
    rows: [
      { label: 'proposer', cells: [{ t: 'Kunnen', role: 'V' }, { t: 'we', role: 'S' }, { t: 'woensdag', role: 'T' }, { t: 'om 10 uur', role: 'T' }, { t: 'afspreken?', role: 'F', lab: 'infinitif' }], fr: 'Pouvons-nous nous voir mercredi à 10 h ? → verbe 1, **infinitif à la fin**' },
      { label: 'refuser', cells: [{ t: 'Ik', role: 'S' }, { t: 'ben', role: 'V' }, { t: 'vrijdag', role: 'T' }, { t: 'niet', role: 'N' }, { t: 'vrij,', role: 'X', lab: '' }, { t: 'want', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'werk', role: 'V' }], fr: 'Je ne suis pas libre vendredi, car je travaille. → **want** : ordre normal' },
      { label: 'accepter', cells: [{ t: 'Ik', role: 'S' }, { t: 'kom', role: 'V' }, { t: 'graag', role: 'M', lab: 'adverbe' }, { t: 'donderdagavond,', role: 'T' }, { t: 'als', role: 'C' }, { t: 'het', role: 'S' }, { t: 'je', role: 'O', lab: 'objet' }, { t: 'past', role: 'V', lab: 'verbe à la fin' }], fr: 'Je viens volontiers jeudi soir, si ça te convient. → **als** : verbe à la fin' },
      { label: 'confirmer', cells: [{ t: 'We', role: 'S' }, { t: 'zien', role: 'V' }, { t: 'elkaar', role: 'O', lab: 'l’un l’autre' }, { t: 'maandag', role: 'T' }, { t: 'om 9 uur', role: 'T' }], fr: 'On se voit lundi à 9 h.' },
    ],
    foot: { kind: 'trap', text: '//On se voit// → //We zien **elkaar**// (✗ //We zien ons//). Et le **moment** vient **avant** //niet// : //Ik ben vrijdag **niet** vrij//.' },
    notes: "Faire lire chaque ligne, puis remplacer les jours et les heures. Remarquer : « niet » se place après le complément de temps (vrijdag) et devant l’adjectif (vrij).",
  });

  d.steps({
    title: 'Jeu de rôle : trouver un moment libre', tag: 'MISE EN SITUATION', page: 'Livret p. 94',
    intro: 'Par deux · 10 min — Notez d’abord **3 rendez-vous** dans votre agenda de la semaine, sans le montrer. Puis trouvez **un moment libre commun**.',
    steps: [
      { h: 'Demander', color: 'accent2', lines: ['//Wanneer ben je beschikbaar?//', '//Ben je ’s avonds vrij?//'] },
      { h: 'Proposer', color: 'accent1', lines: ['//Kunnen we dinsdag om 10 uur afspreken?//'] },
      { h: 'Refuser', color: 'accent6', lines: ['//Nee, dinsdag ben ik niet vrij, want ik werk.//'] },
      { h: 'Accepter', color: 'accent3', lines: ['//Woensdagmiddag kan ik zeker komen.//'] },
      { h: 'Confirmer', color: 'tx2', lines: ['//Akkoord, we zien elkaar woensdag om 14 uur!//'] },
    ],
    foot: { kind: 'keep', label: 'Critères', text: 'au moins **un** refus avec //want//, **un** //als het je past//, **un** adverbe (//altijd, nooit, al…//) et **un** //Ik ga … doen//.' },
    notes: "Exemple d’agenda à dessiner au tableau : ma 9–17 u werken · di ’s avonds sport · do ’s ochtends dokter. Les groupes rapides refont l’activité en vouvoiement (B = meneer Janssens) : Wanneer bent u beschikbaar? Past het u…?",
  });

  d.closing({
    cliff: 'Séance 13 : **Bij het interimkantoor.** S’inscrire dans une agence, parler de sa disponibilité et de son expérience — et dire //Ik bel **hem**//, //Ik help **haar**//.',
    homework: ['Apprendre l’échelle **nooit → altijd** et //al · nog · pas · nog niet// (p. 74).', 'Écrire **5 phrases** sur la semaine prochaine : //Maandag ga ik …//', 'Revoir les **15 mots** Telefoon & mail (p. 85) avec de / het.', 'Recopier les **Jalons 1 et 2** de la fiche 3, corrigés (p. 94).'],
    exit: 'Proposez un rendez-vous à votre voisin (**jour + moment + heure**). Il accepte avec **als** ou refuse avec **want**.',
    notes: "Ticket de sortie oral, par exemple : « Kunnen we donderdagavond om 7 uur afspreken? — Nee, donderdagavond ben ik niet vrij, want ik ga sporten. »",
  });
};
