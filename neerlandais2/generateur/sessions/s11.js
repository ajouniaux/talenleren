// Séance 11 — De cursus · Fiche 4 « S’informer sur le cours » — Livret p. 59, 61, 91, 95
exports.meta = {
  n: 11, slug: 'De_cursus', title: 'De cursus',
  subtitle: 'S’informer sur le cours — le pluriel, l’adjectif et les faux-amis',
  pages: 'Livret p. 59 · 61 · 91 · 95', img: 'cover_grammatica', time: '4', sceneLabel: 'FICHE',
  block: 'Section 4 · Mises en situation — Fiche 4',
  coverNotes: "Séance 11. Objectifs : former le pluriel (fiche A1-02, p. 59), accorder l’adjectif (fiche A1-04, p. 61), terminer les faux-amis (3/3, p. 91), puis s’informer sur un cours au secrétariat d’une école (fiche 4, p. 95). Fil rouge : tout le vocabulaire des exercices ajoutés vient de l’école (les, boek, klaslokaal, cursus…), pour préparer la fiche 4.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Poser des questions sur un **cours** (quand, où, combien, quels livres) et y répondre ; mettre un nom au **pluriel** et accorder l’**adjectif**.',
    language: '//Wanneer begint de cursus? · Hoeveel kost hij? · Welke boeken heb ik nodig?// — boeken, weken, euro’s — //een groot huis · het grote huis//',
    skills: 'Appliquer une règle d’orthographe · éviter sept faux-amis · s’informer au secrétariat d’une école (jeu de rôle)',
    agenda: [['Échauffement : deze · dit · onze', 5], ['Het meervoud (p. 59)', 15], ['Het adjectief (p. 61)', 15], ['Valse vrienden 3/3 (p. 91)', 10], ['Fiche 4 : vocabulaire', 5], ['Jalon 1 · Jalon 2', 20], ['Phrase-clé · jeu de rôle', 15], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. Deux fiches de grammaire courtes (A1 : rappels), puis la fiche 4. Si le temps manque, le bonus faux-amis peut se faire à la maison ; ne jamais sacrifier les deux Jalons.",
  });

  // ------------------------------------------------------------ Échauffement (rappel séance 10)
  d.exercise({
    title: 'Échauffement : deze, dit, die, dat · ons, onze', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 10',
    instr: 'Seul · 5 min — Complétez avec **deze / dit / die / dat** (ici ou là ?) ou avec le **possessif** indiqué. Mots de la séance 10.',
    cols: 2, gap: 14,
    items: [
      '[[Dit]] formulier //(ici)// is voor de cursus.',
      '[[Deze]] handtekening //(ici)// is van mij.',
      '[[Dat]] loket //(là)// is gesloten.',
      '[[Die]] postzegels //(là)// zijn voor Pieter.',
      'Is dit [[uw]] paspoort, meneer? //(u)//',
      '[[Ons]] dossier is klaar. //(wij)//',
      '[[Onze]] afspraak is om tien uur. //(wij)//',
      'Waar is [[jouw]] identiteitskaart? //(jij)//',
    ],
    traps: ['Pluriel : toujours **deze / die** (comme les mots en ^^de^^).', '**ons** seulement devant un mot en %%het%% au singulier : //ons dossier// · //onze afspraak//.', '%%het%% formulier · %%het%% loket · %%het%% paspoort · %%het%% dossier'],
    notes: "Rappel de la séance 10 : fiche A1-03 (p. 60) et vocabulaire Administratie (p. 86). Interroger vite, un étudiant par phrase. Phrase 4 : « postzegels » est un pluriel → transition naturelle vers la fiche du jour (het meervoud).",
    notesA: "Faire justifier chaque réponse : de ou het ? ici ou là ? singulier ou pluriel ? Phrase 8 : accepter « je » non accentué (Waar is je identiteitskaart?).",
  });

  // ------------------------------------------------------------ A1-02 Het meervoud (p. 59)
  d.cards({
    title: 'Het meervoud : trois terminaisons, trois réflexes', tag: 'GRAMMATICA', page: 'Livret p. 59',
    perRow: 3,
    cards: [
      { h: '-EN · LA PLUPART', color: 'accent3', f: 'trein → treinen', lines: ['^^de^^ kerk → kerken'] },
      { h: '-S · -EL -ER -EN -JE', color: 'accent2', f: 'jongen → jongens', lines: ['%%het%% meisje → meisjes'] },
      { h: '-’S · A O U I Y', color: 'accent1', f: 'auto → auto’s', lines: ['^^de^^ euro → euro’s'] },
      { h: 'VOYELLE COURTE', color: 'tx2', f: 'bus → bussen', lines: ['On **double** la consonne.'] },
      { h: 'VOYELLE LONGUE', color: 'accent4', f: 'straat → straten', lines: ['**Une seule** voyelle.'] },
      { h: 'F → V · S → Z', color: '6E4A9E', f: 'huis → huizen', lines: ['Irrégulier : //kind → kinderen//'] },
    ],
    foot: { kind: 'trap', text: 'Au pluriel, l’article est **toujours** ^^de^^ : %%het%% huis → ^^de^^ huizen. Et la fin du pluriel **se prononce** — pas de -s muet comme en français.' },
    notes: "Règle du livret : -en en général ; -s après -el, -er, -en, -je ; -’s après a, o, u, i, y. Partie B : l’orthographe change pour garder le même son (bus → bussen, straat → straten, huis → huizen). Irréguliers en -eren : het kind → kinderen, het ei → eieren. À ajouter à l’oral : beaucoup de mots empruntés prennent -s (de tram → trams, de film → films) — utile pour l’exercice qui suit. Exemples « de euro » et « het meisje » ajoutés pour préparer la fiche 4.",
  });

  d.exercise({
    title: 'Oefening : schrijf het meervoud', tag: 'GRAMMATICA', page: 'Livret p. 59',
    instr: 'Seul · 5 min — Écrivez le pluriel **avec l’article**. Puis dites quelle règle vous avez appliquée.',
    gap: 14,
    items: [
      '^^de^^ fles → [[de flessen]] ++(e courte → ss)++',
      '^^de^^ tram → [[de trams]] ++(mot emprunté → -s)++',
      '^^de^^ hand → [[de handen]] ++(-en)++',
      '%%het%% oog → [[de ogen]] ++(oo longue → o)++',
      '^^de^^ oma → [[de oma’s]] ++(a → -’s)++',
      '^^de^^ dokter → [[de dokters]] ++(-er → -s)++',
    ],
    aside: { label: 'RÈGLES', icon: 'FaLightbulb', lines: ['**-en** : la plupart', '**-s** : -el, -er, -en, -je', '**-’s** : a, o, u, i, y', 'Voyelle courte → **double** consonne', 'Voyelle longue → **une** voyelle'] },
    traps: ['%%het%% oog → ^^de^^ ogen : l’article devient **de**.', '//tram// : mot emprunté → **trams** (la règle -en ne marche pas).', '//fles// : sans double s, on lirait « flé-zen ».'],
    notes: "Exercice de la fiche A1-02 (p. 59), avec les images du livret (bouteille, tram, main, œil, grand-mère, médecin). Faire lire chaque pluriel à voix haute.",
    notesA: "« de tram → trams » : forme correcte en néerlandais standard, mais elle ne suit pas la règle -en de la fiche (mot d’origine anglaise, comme films, clubs) : le signaler, c’est un piège du livret. « ogen » : une seule o, car la syllabe reste ouverte (o-gen).",
  });

  d.exercise({
    title: 'Le vocabulaire du cours au pluriel', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Par deux · 5 min — Mettez au pluriel les mots de la **fiche 4**. A dit le singulier, B le pluriel, puis on inverse.',
    cols: 2, gap: 12,
    items: [
      '^^de^^ les → [[de lessen]]',
      '%%het%% boek → [[de boeken]]',
      '^^de^^ week → [[de weken]]',
      '^^de^^ euro → [[de euro’s]]',
      '%%het%% klaslokaal → [[de klaslokalen]]',
      '^^de^^ cursus → [[de cursussen]]',
      '^^de^^ leraar → [[de leraren]]',
      '%%het%% oefenboek → [[de oefenboeken]]',
      '%%het%% kind → [[de kinderen]]',
      '^^de^^ taal → [[de talen]]',
    ],
    traps: ['Après un nombre, //euro//, //uur//, //jaar// restent au **singulier** : //120 euro//, //drie uur// — mais //tien **weken**//.', '//leraren// ou //leraars// : les deux sont corrects.', '%%het%% → ^^de^^ au pluriel, toujours.'],
    notes: "Exercice ajouté : réemploi du pluriel avec le vocabulaire de la fiche 4 (weken, euro, boeken, klaslokaal…). Insister sur les voyelles longues : week → weken, klaslokaal → klaslokalen, taal → talen, leraar → leraren.",
    notesA: "Piège utile pour le Jalon 2 : « Hij kost 120 euro » (et non « 120 euro’s ») — après un nombre, euro reste au singulier ; on dit en revanche « tien weken ».",
  });

  // ------------------------------------------------------------ A1-04 Het adjectief (p. 61)
  d.cards({
    title: 'Het adjectief : -e ou pas de -e ?', tag: 'GRAMMATICA', page: 'Livret p. 61',
    perRow: 3,
    cards: [
      { h: 'APRÈS LE VERBE', color: 'accent2', f: 'De auto is rood.', lines: ['Après //is, zijn// : **jamais** de -e.', '//Het huis is groot.//', '//De frieten zijn lekker.//'] },
      { h: 'DEVANT LE NOM : -E', color: 'accent3', f: 'de rode auto', lines: ['Devant le nom : **-e**.', '//het grote huis// · //grote huizen//', 'Orthographe : //rood → rode//, //snel → snelle//.'] },
      { h: 'EXCEPTION : PAS DE -E', color: 'accent4', f: 'een groot huis', lines: ['① mot en %%het%% + ② **een / geen** + ③ **singulier**', '//een groot huis// mais //een grote man//', 'Sans article aussi : //koud water//'] },
    ],
    foot: { kind: 'trap', text: 'En français, l’adjectif suit souvent le nom : //une voiture **rouge**//. En néerlandais, il est **toujours avant** le nom : //een **rode** auto// (✗ //een auto rode//).' },
    notes: "Mémo du livret : een groot huis · het grote huis · een grote man · grote huizen. L’orthographe suit la même logique que le pluriel : voyelle longue → une seule voyelle (rood → rode, groot → grote), voyelle courte → consonne double (snel → snelle). Le livret ne cite que « een / geen » pour l’exception ; or l’exercice contient « … water » sans article : préciser que l’exception vaut aussi sans article (koud water, lekker brood).",
  });

  d.exercise({
    title: 'Oefening : met of zonder -e?', tag: 'GRAMMATICA', page: 'Livret p. 61',
    instr: 'Seul · 5 min — Écrivez l’adjectif entre parenthèses, **avec ou sans -e**, puis justifiez.',
    gap: 12,
    items: [
      'een … kind //(klein)// → [[een klein kind]] ++· het + een + singulier++',
      'de … trein //(snel)// → [[de snelle trein]] ++· de-woord, ll++',
      '… water //(koud)// → [[koud water]] ++· het, sans article, singulier++',
      'een … fiets //(nieuw)// → [[een nieuwe fiets]] ++· de fiets++',
      'het … museum //(oud)// → [[het oude museum]] ++· article het++',
      'De frieten zijn … //(lekker)// → [[De frieten zijn lekker.]] ++· après le verbe++',
    ],
    img: 'v04_10', imgH: 2.1,
    aside: { label: 'MÉMO', icon: 'FaLightbulb', lines: ['//een **groot** huis//', '//het **grote** huis//', '//een **grote** man//', '//**grote** huizen//'] },
    traps: ['Phrase 3 : **pas d’article** → même exception que //een// : //koud water//.', 'Phrase 2 : //snel → sne**ll**e// (voyelle courte).', 'Phrase 1 : //het **kleine** kind// — avec het, le -e revient.'],
    notes: "Exercice de la fiche A1-04 (p. 61). Images du livret : bébé, train, verre d’eau, vélo, musée, frites.",
    notesA: "Lacune du livret : la règle de l’exception cite seulement « een / geen » ; la phrase 3 (… water, sans article) demande pourtant « koud water » sans -e. Règle complète : pas de -e devant un mot en het, au singulier, quand il n’y a pas d’article défini (een, geen, rien, veel, elk…).",
  });

  d.exercise({
    title: 'Mijn cursus : met of zonder -e?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Choisissez la bonne forme. Pensez aux **trois conditions** : mot en %%het%% + een / geen + singulier.',
    cols: 2, gap: 14,
    items: [
      'Ik volg een <<interessante>> / {{interessant}} cursus.',
      'Het klaslokaal is {{grote}} / <<groot>>.',
      'We hebben een <<nieuw>> / {{nieuwe}} oefenboek.',
      'Het {{nieuw}} / <<nieuwe>> oefenboek kost 20 euro.',
      'Ik heb <<goede>> / {{goed}} boeken nodig.',
      'Dat is geen <<goed>> / {{goede}} idee.',
      'De leraar is heel <<vriendelijk>> / {{vriendelijke}}.',
      'Pieter zoekt een {{goedkoop}} / <<goedkope>> cursus.',
    ],
    traps: ['%%het%% oefenboek · %%het%% idee : pas de -e après //een / geen//.', '^^de^^ cursus : toujours -e devant le nom.', '//goedkoop → goedkope// : une seule o.'],
    notes: "Exercice ajouté, oral : chaque étudiant lit la phrase avec la forme choisie et donne la raison (de / het ? een / het ? après le verbe ?).",
    notesA: "Justifications : 1 de cursus → -e ; 2 après le verbe ; 3 het + een + singulier ; 4 article défini het → -e ; 5 pluriel → -e ; 6 het idee + geen ; 7 après le verbe ; 8 de cursus → -e (goedkoop → goedkope).",
  });

  // ------------------------------------------------------------ Valse vrienden 3/3 (p. 91)
  d.pairs({
    title: 'Valse vrienden 3/3 : les faux-amis 15 à 21', tag: 'FAUX-AMIS', page: 'Livret p. 91',
    perSlide: 4,
    pairs: [
      { a: { img: 'ff_verdrietig', nl: 'verdrietig', fr: 'triste', note: 'on a du chagrin' }, b: { img: 'ff_chagrijnig', nl: 'chagrijnig', fr: 'grincheux', note: 'de mauvaise humeur ≠ chagrin' } },
      { a: { img: 'ff_braaf', nl: 'braaf', fr: 'sage, obéissant', note: 'fait ce qu’on lui dit ≠ brave' }, b: { img: 'ff_moedig', nl: 'moedig', fr: 'brave, courageux', note: 'n’a pas peur du danger' } },
      { a: { img: 'ff_oraal', nl: 'oraal', fr: 'par voie orale', note: 'par la bouche (médicament)' }, b: { img: 'ff_mondeling', nl: 'mondeling', fr: 'oral', note: 'een mondeling examen' } },
      { a: { img: 'ff_koffie', nl: 'de koffie', fr: 'le café (la boisson)', note: 'on la boit' }, b: { img: 'ff_cafe', nl: 'het café', fr: 'le café, le bistrot', note: 'on y boit un verre' } },
      { a: { img: 'ff_college', nl: 'het college', fr: 'le cours (à l’université)', note: '≠ le collège' }, b: { img: 'ff_school', nl: 'de school', fr: 'l’école', note: 'le collège = de middelbare school' } },
      { a: { img: 'ff_krant', nl: 'de krant', fr: 'le journal', note: 'imprimé sur papier' }, b: { img: 'ff_journaal', nl: 'het journaal', fr: 'le journal télévisé', note: 'les infos à la télé' } },
      { a: { img: 'ff_leraar', nl: 'de leraar', fr: 'le professeur', note: 'à l’école, au lycée' }, b: { img: 'ff_professor', nl: 'de professor', fr: 'le professeur d’université', note: 'titre universitaire' } },
    ],
    notes: "Lire chaque paire, faire répéter le mot néerlandais, demander une phrase avec chacun. En Belgique, beaucoup d’écoles secondaires portent le nom « college » (Sint-Jozefscollege…) : dans un nom propre, c’est une école ; le mot courant « het college » reste le cours magistral à l’université. « De leerkracht » (l’enseignant·e) est très courant en Flandre. Pas d’erreur relevée sur cette page.",
  });

  d.exercise({
    title: 'Faux-amis : choisissez le bon mot', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul · 5 min — Barrez le faux-ami. Lisez ensuite la phrase correcte à voix haute.',
    cols: 2, gap: 14,
    items: [
      'Elke ochtend lees ik <<de krant>> / {{het journaal}} bij het ontbijt.',
      'Om zeven uur kijk ik naar {{de krant}} / <<het journaal>> op tv.',
      'Mijn hond is lief en <<braaf>> / {{moedig}}.',
      'De brandweerman is heel {{braaf}} / <<moedig>>.',
      'Morgen heb ik een <<mondeling>> / {{oraal}} examen.',
      'Na de les drinken we iets in {{de koffie}} / <<het café>>.',
      'Mijn oma is ziek: ik ben <<verdrietig>> / {{chagrijnig}}.',
      'Aan de universiteit geeft {{de leraar}} / <<de professor>> college.',
    ],
    traps: ['//een mondeling examen// : %%het%% examen + een → pas de -e (fiche p. 61) !', '//braaf// = sage · //moedig// = courageux.', '%%het%% café (lieu) ≠ ^^de^^ koffie (boisson).'],
    notes: "Exercice ajouté : réemploi des sept paires. Faire traduire chaque phrase en français pour vérifier le sens.",
    notesA: "Phrase 5 : lien avec la fiche de l’adjectif (een mondeling examen, mais het mondelinge examen). Phrase 8 : « college geven » = donner un cours magistral à l’université.",
  });

  // ------------------------------------------------------------ Fiche 4 S’informer sur le cours (p. 95)
  d.table({
    title: 'Fiche 4 : S’informer sur le cours — vocabulaire', tag: 'MISE EN SITUATION', page: 'Livret p. 95',
    intro: 'Nouveau vocabulaire du **Jalon 1** (questions) et du **Jalon 2** (réponses). Noms avec leur article.',
    headers: ['JALON 1 · NL', 'FRANÇAIS', 'JALON 2 · NL', 'FRANÇAIS'],
    colW: [2.85, 2.9, 3.3, 3.08], boldCol: 0,
    rows: [
      ['wanneer', 'quand', '**maandag**', 'lundi'],
      ['%%het%% klaslokaal', 'la salle de classe', '**nodig** hebben', 'avoir besoin de'],
      ['^^de^^ les', 'le cours, la leçon', '%%het%% **oefenboek**', 'le cahier d’exercices'],
      ['hoeveel', 'combien', '^^de^^ **euro** · 120 euro', 'l’euro · 120 euros'],
      ['hoe lang', 'combien de temps', '^^de^^ **week** · tien weken', 'la semaine · dix semaines'],
      ['welke · welk', 'quel(le)s', '^^de^^ **verdieping**', 'l’étage'],
      ['beginnen', 'commencer', '**vandaag**', 'aujourd’hui'],
      ['kosten · duren', 'coûter · durer', '**binnenkort**', 'bientôt'],
      ['^^de^^ cursus', 'le cours (la formation)', 'zich **inschrijven**', 's’inscrire'],
    ],
    foot: '//welk// devant un mot en %%het%% au singulier (//welk lokaal?//) ; //welke// partout ailleurs (//welke boeken?//).',
    notes: "Le livret liste « euro » sans article et « weken » au pluriel : on donne ici de euro, de week · weken. Ajouts pour les Jalons : de cursus (en Belgique, « de cursus » désigne aussi le syllabus, les notes de cours !) et zich inschrijven (je schrijf me in). « welk / welke » suit la logique de deze / dit (séance 10). Sommaire de la section 4 (page d’ouverture) : il annonce « 04 Remplir le formulaire » et « 06 S’informer sur le cours » ; la fiche réelle p. 95 est bien la fiche 4 « S’informer sur le cours ».",
  });

  d.table({
    title: 'Fiche 4 · Jalon 1 (A1) : questionner sur le cours', tag: 'JALON 1', page: 'Livret p. 95',
    intro: 'Seul · 10 min — Traduisez, puis comparez avec votre voisin. **I** interrogative · **N** négative.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 5.0, 5.63], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'I', 'Quand commence le cours ?', '[[Wanneer begint de cursus?]]'],
      ['2', 'I', 'Où est la salle ?', '[[Waar is het klaslokaal?]]'],
      ['3', 'I', 'Combien coûte le cours et combien de temps dure-t-il ?', '[[Hoeveel kost de cursus en hoe lang duurt hij?]]'],
      ['4', 'N', 'Le cours ne commence pas en septembre ?', '[[Begint de cursus niet in september?]]'],
      ['5', 'I', 'Quels livres faut-il ?', '[[Welke boeken heb ik nodig?]]'],
    ],
    foot: 'Mot interrogatif + **verbe** + sujet : //Wanneer **begint** de cursus?// — sans mot interrogatif, le verbe ouvre la question.',
    notes: "Rappeler l’ordre des mots de la question (séance 7 : vraagwoorden). Laisser chercher « falloir » : en néerlandais, on dit « avoir besoin de » = nodig hebben.",
    notesA: "Variantes acceptables : 1 « Wanneer begint de les? » (de les = une séance de cours) ; 3 « …en hoe lang duurt die? » ou « hoe lang duurt het? » (familier) ; 5 « Welke boeken zijn nodig? ». Phrase 4 : niet se place devant le complément avec préposition (niet in september).",
  });

  d.table({
    title: 'Fiche 4 · Jalon 2 (A2) : répondre sur le cours', tag: 'JALON 2', page: 'Livret p. 95',
    intro: 'Seul · 10 min — Traduisez. **D** déclarative · **N** négative. Attention au **pluriel** et à la **place du verbe**.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 4.6, 6.03], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'D', 'Le cours commence lundi et dure dix semaines.', '[[De cursus begint maandag en duurt tien weken.]]'],
      ['2', 'D', 'Il coûte 120 euros, livre compris.', '[[Hij kost 120 euro, inclusief het boek.]]'],
      ['3', 'N', 'La salle n’est pas au premier étage, mais au deuxième.', '[[Het klaslokaal is niet op de eerste verdieping, maar op de tweede.]]'],
      ['4', 'D', 'Comme le cours commence bientôt, je m’inscris aujourd’hui.', '[[Omdat de cursus binnenkort begint, schrijf ik me vandaag in.]]'],
      ['5', 'D', 'J’ai besoin d’un livre et d’un cahier pour lundi.', '[[Ik heb een boek en een oefenboek nodig voor maandag.]]'],
    ],
    foot: '//120 **euro**// mais //tien **weken**// · //nodig hebben// : **nodig** part vers la fin · phrase 4 : voir la diapositive suivante.',
    notes: "Phrase 4 = la phrase la plus difficile de la fiche : laisser chercher, puis passer à la diapositive « phrase-clé ».",
    notesA: "Variantes acceptables : 1 « …begint op maandag… » ; 2 « Hij kost 120 euro, het boek inbegrepen » ou « Het kost 120 euro, met het boek erbij » ; 5 « Voor maandag heb ik een boek en een oefenboek nodig ». Le livret traduit « cahier » par « het oefenboek » (cahier d’exercices) ; « het schrift » = le cahier ordinaire. Refuser « 120 euro’s » et « omdat de cursus begint binnenkort ».",
  });

  d.blocks({
    title: 'Phrase-clé : nodig hebben et zich inschrijven', tag: 'GRAMMATICA', page: 'Livret p. 95',
    intro: 'Le verbe en **2e position**, le reste (**nodig**, la **particule**) part **à la fin**.',
    rows: [
      { label: 'nodig hebben', cells: [{ t: 'Ik', role: 'S' }, { t: 'heb', role: 'V' }, { t: 'een boek', role: 'O' }, { t: 'nodig', role: 'F' }], fr: 'J’ai besoin d’un livre.' },
      { label: 'zich inschrijven', cells: [{ t: 'Ik', role: 'S' }, { t: 'schrijf', role: 'V' }, { t: 'me', role: 'O', lab: 'pronom' }, { t: 'vandaag', role: 'T' }, { t: 'in', role: 'F', lab: 'particule' }], fr: 'Je m’inscris aujourd’hui.' },
      { label: 'omdat en tête', cells: [{ t: 'Omdat de cursus binnenkort begint,', role: 'X', lab: 'position 1 = toute la subordonnée' }, { t: 'schrijf', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'me vandaag', role: 'O', lab: '' }, { t: 'in', role: 'F', lab: 'particule' }], fr: 'Comme le cours commence bientôt, je m’inscris aujourd’hui.' },
      { label: 'welke', cells: [{ t: 'Welke boeken', role: 'Q' }, { t: 'heb', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'nodig?', role: 'F' }], fr: 'De quels livres ai-je besoin ?' },
    ],
    foot: { kind: 'trap', text: 'Le français dit //Comme le cours commence bientôt, **je m’inscris**//. En néerlandais, la subordonnée prend la 1re place : le verbe suit **tout de suite** — //…, **schrijf ik** me vandaag in// (✗ //…, ik schrijf me in//).' },
    notes: "Rappel : dans la subordonnée avec omdat, le verbe est à la fin (omdat de cursus binnenkort begint). Faire transformer à l’oral : « Ik schrijf me vandaag in, omdat de cursus binnenkort begint » → « Omdat de cursus binnenkort begint, schrijf ik me vandaag in ».",
  });

  d.experts({
    title: 'Jeu de rôle : au secrétariat de l’école', tag: 'MISE EN SITUATION', page: 'Livret p. 95',
    intro: 'Par deux · 10 min — A s’informe sur le cours, B répond avec la fiche du secrétariat. Puis on inverse les rôles.',
    cards: [
      { who: 'A', q: '**A — futur·e étudiant·e.** Saluez, puis demandez : **quand** le cours commence, **combien de temps** il dure, **combien** il coûte, **où** est la salle, **quels livres** il faut. Pour finir, inscrivez-vous : //Omdat de cursus binnenkort begint, schrijf ik me vandaag in.//' },
      { who: 'B', q: '**B — le secrétariat.** Fiche du cours : **Nederlands 2** · start **maandag** · **tien weken** · **120 euro**, inclusief het boek · lokaal 2.14, **tweede verdieping** · nodig : **een boek en een oefenboek**. Répondez par des phrases complètes : //De cursus begint maandag.//' },
    ],
    notes: "Variante pour le 2e tour : B invente une autre fiche (Engels, 8 weken, 95 euro, eerste verdieping…). Observer : inversion dans les questions, « 120 euro » sans s, « nodig » à la fin. B peut vouvoyer (« Wat kan ik voor u doen? »).",
  });

  d.closing({
    cliff: 'Séance 12 : **Wanneer ben je beschikbaar?** Proposer un rendez-vous, dire //altijd, nooit, al, nog niet// — et parler de demain : //Ik **ga** je morgen **bellen**.//',
    homework: ['Écrire **10 mots** du cours au pluriel, avec l’article (p. 59).', 'Écrire **5 groupes** //een … / het …// avec un adjectif (p. 61).', 'Revoir les **faux-amis 15 à 21** (p. 91).', 'Recopier les **Jalons 1 et 2** de la fiche 4, corrigés (p. 95).'],
    exit: 'Posez une question sur le cours avec **welke** + un nom au **pluriel**, puis répondez avec un **adjectif**.',
    notes: "Ticket de sortie oral, par exemple : « Welke boeken heb ik nodig? — Je hebt een nieuw oefenboek en twee goede woordenboeken nodig. »",
  });
};
