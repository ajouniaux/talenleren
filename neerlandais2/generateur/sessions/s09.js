// Séance 9 — Bilan du palier 1 · De weg vragen — Fiche 9 (p. 100a) + A1-08 Voorzetsels (p. 65) + V02 Familie (p. 79) + V03 In de stad (p. 80)
exports.meta = {
  n: 9, slug: 'Bilan_De_weg_vragen', title: 'Bilan · De weg vragen',
  subtitle: 'Bilan du palier 1 — la famille, la ville et demander son chemin',
  pages: 'Livret p. 1–57 · 65 · 79–80 · 100a', img: 'banner_situaties', time: '9', sceneLabel: 'FICHE',
  block: 'Fin du palier 1 · Section 4 · Mises en situation',
  coverNotes: "Séance charnière : on fait le bilan de la Section 1 (quiz + auto-évaluation), puis on ouvre les mises en situation de la Section 4 avec la fiche 9 « Saluer et demander son chemin » (p. 100a). Pour s’y préparer : le vocabulaire de la famille (p. 79) et de la ville (p. 80), et les prépositions de lieu et de temps (fiche A1-08, p. 65).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Faire le **bilan du palier 1**, parler de ma **famille**, situer un lieu **en ville** et **demander mon chemin** poliment (u).',
    language: '^^de^^ vader · %%het%% gezin · %%het%% station — //in · op · naar · bij · om// — //Mag ik u iets vragen? Kunt u me zeggen waar … is?//',
    skills: 'Faire le point · nommer avec l’article · choisir la préposition · jouer un échange à l’accueil',
    agenda: [['Échauffement : afscheid & ik', 5], ['Quiz bilan du palier 1', 12], ['Auto-évaluation', 5], ['Familie (vocabulaire + bonus)', 12], ['In de stad (vocabulaire)', 8], ['Voorzetsels + bonus', 15], ['Fiche 9 : vocabulaire · Jalon 1', 8], ['De weg wijzen · Jalon 2', 12], ['Jeu de rôle', 10], ['Bilan', 3]],
    notes: "Durées indicatives sur 90 minutes. Ordre : bilan de la Section 1, puis vocabulaire (famille, ville), prépositions (qui réutilisent le vocabulaire de la ville) et enfin la fiche 9. Le quiz bilan peut se faire en équipes (points au tableau).",
  });

  // ------------------------------------------------------------ Échauffement (rappel S08)
  d.experts({
    title: 'Échauffement : afscheid & stel jezelf voor', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 8',
    intro: 'Par deux · 5 min — Une carte chacun, à l’oral, puis on change de carte.',
    cards: [
      { who: 'A', q: '**Afscheid** : il est 22 h, vous quittez des amis que vous revoyez demain. Raison + action + formule.' },
      { who: 'B', q: '**Imperatief** : demandez gentiment à votre voisin d’**attendre**, d’**entrer**, de **regarder**.' },
      { who: 'C', q: '**De of het?** naam · adres · land · taal · beroep · meisje' },
      { who: 'D', q: '**Stel jezelf voor** en 5 phrases, sans notes : salut, zijn, hebben, ik / jij, congé.' },
    ],
    notes: "Rappel de la séance 8. Modèles : A « Het is laat, ik ga naar huis. Tot morgen! » — B « Wacht even! · Kom maar binnen! · Kijk eens! » — C de naam, het adres, het land, de taal, het beroep, het meisje — D « Goedenavond! Ik ben … Ik heb … Jij …, maar ik … Tot straks! ». Vérifier la formule de congé selon le moment et la forme unique de l’impératif (Wacht even! pour une ou plusieurs personnes).",
  });

  // ------------------------------------------------------------ Bilan du palier 1
  d.exercise({
    title: 'Quiz bilan : le palier 1 en huit questions', tag: 'SYNTHÈSE', page: 'Livret p. 1–57',
    instr: 'Seul · 8 min, puis correction collective — une ou deux questions par séquence : saluer (1.1), nouvelles (1.2), zijn / hebben (1.3), congé (1.4).',
    cols: 2, gap: 12, qGap: 12,
    items: [
      '**1.1** 19 h 30 · vous saluez Sarah. → [[Goedenavond, Sarah!]]',
      '**1.1** Le soir, je regarde la télé. → [[’s Avonds kijk ik tv.]]',
      '**1.2** Comment allez-vous, monsieur ? → [[Hoe gaat het met u, meneer?]]',
      '**1.2** Ça va, mais je suis un peu fatigué(e). → [[Het gaat wel, maar ik ben een beetje moe.]]',
      '**1.3** Pieter [[heeft]] een zus en hij [[is]] stagiair.',
      '**1.3** J’ai faim, mais je n’ai pas le temps. → [[Ik heb honger, maar ik heb geen tijd.]]',
      '**1.4** Vous revenez dans cinq minutes. → [[Tot zo!]]',
      '**1.4** Vous quittez meneer Janssens (u). → [[Tot ziens, meneer Janssens!]]',
    ],
    notes: "Quiz de synthèse de la Section 1 (ajouté par le plan de cours). Variante ludique : deux équipes, un point par réponse correcte, un point bonus si la prononciation est bonne.",
    notesA: "Points de contrôle : 2 inversion après un mot de temps (’s Avonds kijk ik) ; 3 « met u » au vouvoiement ; 4 « Het gaat wel » = ça va (sans plus), « een beetje » = nuanceur ; 5 -t / formes irrégulières à la 3e personne (heeft, is) ; 6 avoir faim = honger hebben, geen + nom ; 8 avec u : Tot ziens! (✗ Doei!). Accepter « Dag meneer Janssens! ».",
  });

  d.checklist({
    title: 'Auto-évaluation : le palier 1', tag: 'AUTO-ÉVALUATION', page: 'Livret p. 1–57',
    intro: 'Cochez ce que vous savez faire **sans aide**. Ce qui reste vide → à revoir (la séquence est indiquée).',
    cols: 2,
    items: [
      'Je salue selon le **moment de la journée**. — 1.1',
      'Je dis **quand** je fais quelque chose, avec l’**inversion** (’s morgens werk ik). — 1.1',
      'Je demande et je donne des **nouvelles**, avec une nuance. — 1.2',
      'Je choisis **je** ou **u** selon la personne. — 1.2',
      'Je dis comment je me sens : //Ik ben… · Ik voel me…// — 1.2',
      'Je conjugue **zijn** et **hebben** à toutes les personnes. — 1.3',
      'Je dis non avec **niet** ou **geen**. — 1.3',
      'Je prends **congé** avec la bonne formule. — 1.4',
      'Je me **présente** en 5 phrases, sans notes. — synthèse',
      'Je connais l’**article** (de / het) des mots appris. — fiche 01',
    ],
    notes: "Auto-évaluation individuelle, 5 minutes. Ramasser ou faire lever la main par ligne pour repérer ce qui doit être revu (les séances 2 à 8 peuvent être rouvertes). Rassurer : le palier 2 reprend tous ces points dans les mises en situation.",
  });

  // ------------------------------------------------------------ Vocabulaire V02 Familie (p. 79)
  d.imagier({
    title: 'Familie — la famille et les relations', tag: 'WOORDENSCHAT', page: 'Livret p. 79',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v02_01', nl: 'vader', art: 'de', fr: 'le père' },
      { img: 'v02_02', nl: 'moeder', art: 'de', fr: 'la mère' },
      { img: 'v02_03', nl: 'ouders', art: 'de', fr: 'les parents' },
      { img: 'v02_04', nl: 'zoon', art: 'de', fr: 'le fils' },
      { img: 'v02_05', nl: 'dochter', art: 'de', fr: 'la fille' },
      { img: 'v02_06', nl: 'broer', art: 'de', fr: 'le frère' },
      { img: 'v02_07', nl: 'zus', art: 'de', fr: 'la sœur' },
      { img: 'v02_08', nl: 'opa', art: 'de', fr: 'le grand-père' },
      { img: 'v02_09', nl: 'oma', art: 'de', fr: 'la grand-mère' },
      { img: 'v02_10', nl: 'baby', art: 'de', fr: 'le bébé' },
      { img: 'v02_11', nl: 'gezin', art: 'het', fr: 'la famille (le ménage)' },
      { img: 'v02_12', nl: 'huwelijk', art: 'het', fr: 'le mariage' },
      { img: 'v02_13', nl: 'vrienden', art: 'de', fr: 'les amis' },
      { img: 'v02_14', nl: 'buurman', art: 'de', fr: 'le voisin' },
      { img: 'v02_15', nl: 'tweeling', art: 'de', fr: 'les jumeaux' },
    ],
    notes: "Quiz « Wie is dit? » : montrer un numéro, la classe répond avec l’article (de vader, het gezin…). Vocabulaire 02, p. 79. Rappel des personnages : Emma heeft een broer, Pieter heeft een zus, Sarah heeft kinderen.",
    notesA: "Deux het-woorden seulement : het gezin, het huwelijk. Les personnes sont toujours de. « de ouders », « de vrienden » : pluriels (de ouder, de vriend) → toujours de. « het gezin » = parents + enfants sous le même toit ; « de familie » = la famille élargie (oncles, cousins…). « de dochter » = la fille (de quelqu’un) ≠ « het meisje » = la fille (jeune personne, p. 78). « de tweeling » = les jumeaux, mais singulier en néerlandais (de tweeling is…). Féminin de buurman : de buurvrouw ; les voisins : de buren.",
  });

  d.exercise({
    title: 'Wie is wie in de familie?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez avec un mot de l’imagier. Puis répondez pour vous aux questions de l’encadré.',
    gap: 10,
    items: [
      'De vader van mijn vader is mijn [[opa]].',
      'De moeder van mijn moeder is mijn [[oma]].',
      'Mijn vader en mijn moeder zijn mijn [[ouders]].',
      'Een jongen is de [[zoon]] van zijn ouders, een meisje is hun [[dochter]].',
      'Emma heeft een [[broer]], Pieter heeft een [[zus]].',
      'Twee broers, geboren op dezelfde dag: een [[tweeling]].',
      'Hij woont naast ons: hij is onze [[buurman]].',
      'Mijn ouders, mijn zus en ik: wij zijn een [[gezin]] van vier.',
    ],
    aside: { label: 'ET VOUS ?', icon: 'FaComments', color: 'accent2', lines: ['//Heb je broers of zussen?//', '//Ja, ik heb één broer.//', '//Nee, ik heb geen zussen.//', '//Hoe heet je moeder?//', '//Heb je kinderen?//'] },
    traps: ['**het** gezin · **het** huwelijk : les seuls het-woorden.', '//mijn// remplace l’article : //mijn vader//.', 'Pluriel : //de broers, de zussen, de ouders//.'],
    notes: "Exercice ajouté : réemploi du vocabulaire Familie. Après la correction, interview en binôme avec les questions de l’encadré (vraies pour soi).",
    notesA: "Phrase 4 : « hun » = leur (fiche Deze · dit · mijn, séance 10). Phrase 6 : on dit aussi « een tweeling » pour deux sœurs ou un frère et une sœur. Questions de l’encadré : « Ja, ik heb één broer » (één avec accents = le chiffre) ; « Nee, ik heb geen zussen » (geen + nom).",
  });

  // ------------------------------------------------------------ Vocabulaire V03 In de stad (p. 80)
  d.imagier({
    title: 'In de stad — en ville et déplacements', tag: 'WOORDENSCHAT', page: 'Livret p. 80',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v03_01', nl: 'station', art: 'het', fr: 'la gare' },
      { img: 'v03_02', nl: 'trein', art: 'de', fr: 'le train' },
      { img: 'v03_03', nl: 'bus', art: 'de', fr: 'le bus' },
      { img: 'v03_04', nl: 'tram', art: 'de', fr: 'le tram' },
      { img: 'v03_05', nl: 'fiets', art: 'de', fr: 'le vélo' },
      { img: 'v03_06', nl: 'auto', art: 'de', fr: 'la voiture' },
      { img: 'v03_07', nl: 'straat', art: 'de', fr: 'la rue' },
      { img: 'v03_08', nl: 'verkeerslicht', art: 'het', fr: 'le feu (de signalisation)' },
      { img: 'v03_09', nl: 'brug', art: 'de', fr: 'le pont' },
      { img: 'v03_10', nl: 'kerk', art: 'de', fr: 'l’église' },
      { img: 'v03_11', nl: 'museum', art: 'het', fr: 'le musée' },
      { img: 'v03_12', nl: 'bibliotheek', art: 'de', fr: 'la bibliothèque' },
      { img: 'v03_13', nl: 'plattegrond', art: 'de', fr: 'le plan (de ville)' },
      { img: 'v03_14', nl: 'bushalte', art: 'de', fr: 'l’arrêt de bus' },
      { img: 'v03_15', nl: 'parking', art: 'de', fr: 'le parking' },
    ],
    notes: "Quiz « Wat is dit? » : la classe répond avec l’article. Vocabulaire 03, p. 80. Station, trein, bus et museum ont déjà été vus dans l’exercice de la fiche Lidwoorden (séance 8).",
    notesA: "Trois het-woorden : het station, het verkeerslicht (het licht), het museum. Mots composés : het verkeer + het licht → het verkeerslicht ; de bus + de halte → de bushalte (le dernier mot décide, séance 3). « de parking » : usage belge (aux Pays-Bas : de parkeerplaats, de parkeergarage). Prononciation : bibliotheek [bi-bli-jo-teek].",
  });

  // ------------------------------------------------------------ Grammaire A1-08 Voorzetsels (p. 65)
  d.cards({
    title: 'Voorzetsels : où ? quand ?', tag: 'GRAMMATICA', page: 'Livret p. 65',
    intro: '**Où ?** in · op · naar · bij — **Quand ?** om · op · in · van … tot. (→) = avec mouvement.',
    perRow: 3,
    cards: [
      { h: 'WAAR ? — OÙ', color: 'accent4', f: 'in · op · naar · bij', lines: ['**in** : //in de bibliotheek, in Gent//', '**op** : //op het bureau//', '**naar** (→) : //naar het station//', '**bij** : //bij de dokter// (chez)'] },
      { h: 'WANNEER ? — QUAND', color: 'accent2', f: 'om · op · in · van … tot', lines: ['**om** : //om negen uur//', '**op** : //op zaterdag//', '**in** : //in juli, in de winter//', '**van … tot** : //van 9 tot 5//'] },
      { h: 'À LA MAISON', color: 'accent3', f: 'thuis ≠ naar huis', lines: ['**thuis** : //Ik blijf thuis.//', '**naar huis** (→) : //Ik ga naar huis.//'] },
    ],
    foot: { kind: 'trap', text: '« **à** » partout en français : //à 9 h// = **om** negen uur · //à Gand// = **in** Gent · //je vais à Gand// = **naar** Gent. //Je vais **chez** le médecin// = //ik ga **naar** de dokter// (//ik ben **bij** de dokter//).' },
    notes: "Fiche A1-08. Faire mimer : on bouge → naar ; on est sur place → in / op / bij. Pays et villes : in (Ik woon in Brussel) ; aller vers : naar (Ik ga naar Brussel). Dates : op 3 mei ; années : in 2026.",
  });

  d.exercise({
    title: 'Oefening : in, op, naar, om of bij?', tag: 'GRAMMATICA', page: 'Livret p. 65',
    instr: 'Seul · 5 min — Complétez avec **in · op · naar · om** ou **bij**.',
    gap: 10,
    items: ['Zij reist morgen [[naar]] Frankrijk.', 'De trein vertrekt [[om]] tien uur.', 'Ik ben [[bij]] mijn ouders.', 'Het is warm [[in]] juli.', 'Ik woon [[in]] België.', 'Het boek ligt [[op]] de tafel.', 'Wij komen [[op]] maandag.', 'Ik ga [[naar]] huis.'],
    expect: ['Mouvement → **naar**.', 'Heure → **om** · jour → **op** · mois → **in**.', 'Seul · 5 min'],
    traps: ['3 : //bij mijn ouders// = chez mes parents.', '7 : on dit aussi //Wij komen maandag.//', '8 : //naar huis// ≠ //thuis//.'],
    notes: "Exercice de la fiche 08. Correction orale : faire lire la phrase complète.",
    notesA: "Solution : naar · om · bij · in · in · op · op · naar. Phrase 7 : « op maandag » (fiche) ; sans préposition, « Wij komen maandag » est aussi correct et très courant (ce lundi-ci). Phrase 1 : Frankrijk = la France (pays) → naar quand on y va, in quand on y est (Zij woont in Frankrijk).",
  });

  d.exercise({
    title: 'Waar? Wanneer? En ville', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez avec **in · op · naar · bij · om · van … tot** — vocabulaire **In de stad** (p. 80).',
    cols: 2, gap: 16,
    items: ['Ik wacht [[bij]] de bushalte.', 'De bus vertrekt [[om]] kwart over acht.', 'Emma woont [[in]] de Stationsstraat.', 'Pieter fietst [[naar]] het station.', 'Mijn auto staat [[op]] de parking.', 'Het museum is open [[van]] tien [[tot]] vijf.', '[[Op]] zaterdag gaan we [[naar]] de bibliotheek.', 'De kerk staat [[in]] het centrum.'],
    notes: "Exercice ajouté : réemploi du vocabulaire de la ville avec les prépositions de la fiche 08. Faire ensuite produire une phrase vraie : « Ik woon in … · Ik ga met de bus naar … ».",
    notesA: "Variantes acceptables : 1 « aan de bushalte » (très courant en Belgique) ; 5 « op de parking » (usage belge ; aux Pays-Bas « op het parkeerterrein / in de parkeergarage ») ; 7 inversion après « Op zaterdag » (gaan we) ; 8 « in het centrum ». « Fietsen » = aller à vélo : Pieter fietst naar het station.",
  });

  // ------------------------------------------------------------ Fiche 9 Saluer et demander son chemin (p. 100a)
  d.table({
    title: 'Fiche 9 : Saluer et demander son chemin', tag: 'MISE EN SITUATION', page: 'Livret p. 100a',
    intro: 'Nouveau vocabulaire du **Jalon 1** (saluer, prendre des nouvelles) et du **Jalon 2** (demander son chemin et répondre).',
    headers: ['JALON 1 · NL', 'FRANÇAIS', 'JALON 2 · NL', 'FRANÇAIS'],
    colW: [2.6, 2.9, 3.0, 3.63], boldCol: 0,
    rows: [
      ['Goedemorgen!', 'Bonjour ! (le matin)', '**Mag ik iets vragen?**', 'Puis-je demander quelque chose ?'],
      ['Hoe gaat het?', 'Comment ça va ?', '**^^de^^ hulp**', 'l’aide'],
      ['Het gaat goed.', 'Ça va bien.', '**luisteren naar**', 'écouter (qqn, qqch)'],
      ['Dank u.', 'Merci. (vous)', '**%%het%% klaslokaal**', 'la salle de classe, le local'],
      ['Tot straks!', 'À tout à l’heure !', '**natuurlijk**', 'bien sûr'],
      ['', '', '**bedankt**', 'merci'],
      ['', '', '**rechts achteraan**', 'à droite au fond'],
    ],
    notes: "Lire le vocabulaire en chœur. Le sommaire de la Section 4 (page d’ouverture de la section) annonce « 09 Chez le médecin » : la fiche 9 réelle est « Saluer et demander son chemin ». « luisteren naar » figure dans le vocabulaire mais n’apparaît dans aucune phrase des jalons : on l’utilisera dans le jeu de rôle. Le vocabulaire donne « mag ik iets vragen » ; avec u : « Mag ik u iets vragen? ».",
  });

  d.table({
    title: 'Fiche 9 · Jalon 1 : saluer, prendre des nouvelles', tag: 'JALON 1', page: 'Livret p. 100a',
    intro: 'Niveau A1 · seul 5 min, puis par deux — **I** interrogative · **D** déclarative · **N** négative. Vouvoiement : **u**.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.9, 5.0, 5.53], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'I', 'Bonjour, comment ça va ?', '[[Goedemorgen, hoe gaat het?]]'],
      ['2', 'D', 'Ça va bien, merci.', '[[Het gaat goed, dank u.]]'],
      ['3', 'N', 'Aujourd’hui, ça ne va pas très bien.', '[[Vandaag gaat het niet zo goed.]]'],
      ['4', 'I', 'Et vous, comment allez-vous ?', '[[En hoe gaat het met u?]]'],
      ['5', 'D', 'À tout à l’heure !', '[[Tot straks!]]'],
    ],
    notes: "Jalon 1 : des phrases du palier 1, donc rapide. Laisser 5 minutes, puis comparer par deux.",
    notesA: "Variantes : 1 « Goedemiddag / Goedenavond / Goedendag » selon l’heure ; 2 « Goed, dank u » (« dank je » entre collègues) ; 3 inversion après Vandaag (gaat het) ; « niet zo goed » = pas très bien (accepter « niet zo best », « niet heel goed ») ; 4 réponse courte très naturelle : « En met u? ». Rappel : niet se place après le verbe et le sujet (Vandaag gaat het niet…).",
  });

  d.table({
    title: 'De weg wijzen : les mots pour s’orienter', tag: '+ BONUS', page: 'Hors syllabus',
    intro: 'Pour comprendre la réponse (Jalon 2) et jouer la scène : la **direction**, la **position**, le **bâtiment**.',
    headers: ['RICHTING · PLAATS', 'FRANÇAIS', 'GEBOUW · VRAGEN', 'FRANÇAIS'],
    colW: [3.3, 2.85, 3.3, 2.68], boldCol: 0,
    rows: [
      ['links · rechts', 'à gauche · à droite', '^^de^^ **trap**', 'l’escalier'],
      ['rechtdoor', 'tout droit', '^^de^^ **lift**', 'l’ascenseur'],
      ['vooraan · achteraan', 'devant · au fond', '^^de^^ **gang**', 'le couloir'],
      ['naast de kerk', 'à côté de l’église', '**op de eerste verdieping**', 'au premier étage'],
      ['tegenover het station', 'en face de la gare', '**Hoe kom ik naar …?**', 'Comment aller à … ?'],
      ['Ga rechtdoor.', 'Allez tout droit.', '**Is het ver?**', 'C’est loin ?'],
      ['Neem de eerste straat links.', 'Prenez la 1re rue à gauche.', '**Vijf minuten te voet.**', 'Cinq minutes à pied.'],
    ],
    foot: 'Pour indiquer le chemin : l’**impératif** (séance 8) — //Ga… · Neem…// ; avec //maar//, c’est plus aimable : //Ga maar rechtdoor.//',
    notes: "Ajout hors syllabus : la fiche 9 ne donne que « rechts achteraan » ; ces mots permettent de jouer la scène. Faire mimer : links / rechts / rechtdoor / achteraan. « Hoe kom ik bij het station? » est aussi très courant. En Belgique, le rez-de-chaussée = het gelijkvloers ; l’étage = de verdieping (de eerste, de tweede verdieping). Tous les noms du tableau sont des de-woorden (de trap, de lift, de gang, de verdieping, de straat, de kerk) sauf het station.",
  });

  d.table({
    title: 'Fiche 9 · Jalon 2 : demander son chemin', tag: 'JALON 2', page: 'Livret p. 100a',
    intro: 'Niveau A2 · seul 8 min, puis par deux — vouvoiement (**u**). Attention à la question 3 : la question est **indirecte**.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.9, 5.0, 5.53], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'I', 'Excusez-moi, puis-je vous poser une question ?', '[[Excuseer, mag ik u iets vragen?]]'],
      ['2', 'D', 'Bien sûr, je serai ravi de vous aider.', '[[Natuurlijk, ik help u graag.]]'],
      ['3', 'I', 'Pouvez-vous me dire où est le local 204, s’il vous plaît ?', '[[Kunt u me zeggen waar klaslokaal 204 is, alstublieft?]]'],
      ['4', 'N', 'Ce n’est pas à gauche, c’est à droite au fond.', '[[Het is niet links, het is rechts achteraan.]]'],
      ['5', 'D', 'Merci beaucoup pour votre aide !', '[[Hartelijk bedankt voor uw hulp!]]'],
    ],
    notes: "Jalon 2 : phrases plus longues. Rappeler le vocabulaire de la fiche (mag ik iets vragen, natuurlijk, de hulp, rechts achteraan).",
    notesA: "Variantes : 1 « Pardon, mag ik u iets vragen? » (« excuseer » est très belge) ; 2 le futur français « je serai ravi » se rend par le présent : « ik help u graag » / « ik help u met plezier » ; 3 « Kunt u mij zeggen… » ou « lokaal 204 » ; verbe à la fin dans la question indirecte (waar … is) ; 4 « Het is niet links, maar rechts achteraan » ; 5 « Heel erg bedankt voor uw hulp! » / « Bedankt voor uw hulp! ». uw = votre (fiche possessifs, séance 10).",
  });

  d.blocks({
    title: 'Phrase-clé : la question indirecte (waar … is)', tag: 'GRAMMATICA', page: 'Livret p. 100a',
    intro: 'Question **directe** : le verbe suit le mot interrogatif. Question **indirecte** (après //Kunt u me zeggen…//) : le verbe va **à la fin**.',
    rows: [
      { label: 'Directe', cells: [{ t: 'Waar', role: 'Q' }, { t: 'is', role: 'V' }, { t: 'klaslokaal 204?', role: 'S' }], fr: 'Où est le local 204 ?' },
      { label: 'Indirecte', cells: [{ t: 'Kunt', role: 'V' }, { t: 'u', role: 'S' }, { t: 'me', role: 'O' }, { t: 'zeggen', role: 'F', lab: 'infinitif' }, { t: 'waar', role: 'Q' }, { t: 'klaslokaal 204', role: 'S' }, { t: 'is?', role: 'V', lab: 'verbe à la fin' }], fr: 'Pouvez-vous me dire où est le local 204 ?' },
      { label: 'Modal', cells: [{ t: 'Mag', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'u', role: 'O' }, { t: 'iets', role: 'O' }, { t: 'vragen?', role: 'F', lab: 'infinitif' }], fr: 'Puis-je vous demander quelque chose ? (infinitif à la fin)' },
    ],
    foot: { kind: 'trap', text: 'Le français garde « où **est** le local ». En néerlandais, après //Kunt u me zeggen…//, le verbe part à la fin : //…waar het lokaal **is**// (✗ //…waar is het lokaal//).' },
    notes: "Faire transformer à l’oral des questions directes en questions indirectes : « Waar is de bibliotheek? » → « Kunt u me zeggen waar de bibliotheek is? » ; « Waar is het station? » → « Weet u waar het station is? ». Même logique qu’après omdat (séance 5) : le verbe conjugué part à la fin.",
  });

  d.steps({
    title: 'Jeu de rôle : « Waar is lokaal 204? »', tag: 'MISE EN SITUATION', page: 'Livret p. 100a',
    intro: 'Par deux · 10 min — A cherche un local, B travaille à l’accueil (**u**). Puis on inverse.',
    steps: [
      { h: 'A salue', color: 'accent2', lines: ['//Goedemiddag! Hoe gaat het?//', 'B : //Goed, dank u. En met u?//'] },
      { h: 'A demande', color: 'accent1', lines: ['//Excuseer, mag ik u iets vragen?//', '//Kunt u me zeggen waar lokaal 204 is?//'] },
      { h: 'B explique', color: 'accent3', lines: ['//Natuurlijk! Neem de trap naar de tweede verdieping.//', '//Het is rechts achteraan.//'] },
      { h: 'A remercie', color: 'accent4', lines: ['//Hartelijk bedankt voor uw hulp!//', 'B : //Graag gedaan. Tot ziens!//'] },
    ],
    foot: { kind: 'keep', label: 'Destinations', text: '**lokaal 204** · ^^de^^ **bibliotheek** · %%het%% **secretariaat** · ^^de^^ **cafetaria**' },
    notes: "Préparer quatre cartes-destinations (ou les écrire au tableau) : lokaal 204 (2e étage, à droite au fond), de bibliotheek (rez-de-chaussée, à gauche), het secretariaat (1er étage, en face de l’ascenseur), de cafetaria (au fond du couloir). B doit utiliser au moins deux mots de « De weg wijzen » ; A doit utiliser la question indirecte. Pour réemployer « luisteren » du vocabulaire de la fiche, B peut commencer par « Luister, het is heel eenvoudig: … ». Corrigés pour les autres destinations : « De bibliotheek is op het gelijkvloers, links. » · « Het secretariaat is op de eerste verdieping, tegenover de lift. » · « De cafetaria is achteraan in de gang. »",
  });

  d.closing({
    cliff: 'Séance 10 : **remplir un formulaire** — nom, adresse, numéro… et //Van wie is **deze** kaart?// : les démonstratifs et les possessifs.',
    homework: ['Apprendre **Familie** (p. 79) et **In de stad** (p. 80) **avec l’article**.', 'Relire la fiche **Voorzetsels** (p. 65) : où ? quand ?', 'Fiche 9 : dire les **10 phrases** des jalons sans regarder.', 'Revoir ce qui n’est **pas coché** dans l’auto-évaluation.'],
    exit: 'Demandez poliment où est la bibliothèque, puis remerciez : //Excuseer… Kunt u me zeggen waar … ?//',
    notes: "Ticket de sortie oral : vérifier « Kunt u me zeggen waar de bibliotheek is? » (verbe à la fin) et « Hartelijk bedankt! ».",
  });
};
