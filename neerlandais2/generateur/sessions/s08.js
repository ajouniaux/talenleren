// Séance 8 — Tot straks! · Stel jezelf voor (Séquence 1.4 + synthèse) — Livret p. 51–57 + A1-01 Lidwoorden (p. 58) + A1-10 Gebiedende wijs (p. 67) + V01 Zich voorstellen (p. 78)
exports.meta = {
  n: 8, slug: 'Tot_straks_Stel_jezelf_voor', title: 'Tot straks! · Stel jezelf voor',
  subtitle: 'Prendre congé selon le contexte — et se présenter : la synthèse du palier 1',
  pages: 'Livret p. 51–58 · 67 · 78', img: 'scene_1_4', time: '1.4', sceneLabel: 'SÉQUENCE',
  block: 'Section 1 · Premiers pas en néerlandais',
  coverNotes: "Dernière séance de la Section 1. Objectifs : toutes les formules de départ (séquence 1.4, p. 51–56), puis la mise en situation finale « Stel jezelf voor » (p. 57) qui mobilise tout le palier. Trois fiches courtes complètent : Lidwoorden (de/het/een, p. 58), De gebiedende wijs (l’impératif poli, p. 67) et le vocabulaire Zich voorstellen (p. 78). Séance dense : 1.4.2 et le bonus vocabulaire peuvent se terminer à la maison.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Prendre **congé** avec la formule qui convient (tot zo, tot straks, tot ziens…) et me **présenter en 5 phrases**, sans notes.',
    language: '//Tot zo · Tot straks · Tot morgen · Tot ziens · Fijne avond · Doei// — //Ik zie je morgen// — //Wacht even!// — ^^de^^ / %%het%% / een',
    skills: 'Associer une formule à une situation · répliquer vite (chrono) · se présenter à l’oral · reconnaître de / het',
    agenda: [['Échauffement : ik en de anderen', 5], ['Séquence 1.4 · zinnenbouwer 1.4', 8], ['Formules de départ · 1.4.1', 10], ['1.4.2 Afscheidskaartjes', 12], ['1.4.3 Snel afscheid nemen', 8], ['Stel jezelf voor (synthèse)', 15], ['Lidwoorden de · het · een', 10], ['De gebiedende wijs', 10], ['Zich voorstellen (vocabulaire)', 10], ['Bilan', 2]],
    notes: "Durées indicatives sur 90 minutes. Ordre du livret : séquence 1.4 (p. 51–56), synthèse (p. 57), puis les fiches de grammaire (p. 58, p. 67) et le vocabulaire (p. 78). Si le temps manque : 1.4.2 se termine à la maison et le bonus « Mijn visitekaartje » sert de devoir.",
  });

  // ------------------------------------------------------------ Échauffement (rappel S07)
  d.experts({
    title: 'Échauffement : ik en de anderen', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 7',
    intro: 'Par deux · 5 min — Une carte chacun, à l’oral, puis on change de carte.',
    cards: [
      { who: 'A', q: '**Stel je buur voor** en trois phrases : //Dit is … · Hij / Zij heeft … · Hij / Zij is …//' },
      { who: 'B', q: '**Vraagwoorden** : posez trois questions à votre voisin avec //Waar…? · Hoeveel…? · Wanneer…?//' },
      { who: 'C', q: '**Je of jij?** Faites un contraste avec la forme longue : //Jij …, maar ik …//' },
      { who: 'D', q: '**Ik in 45 seconden** : qui vous êtes, d’où vous venez, ce que vous avez, comment vous allez.' },
    ],
    notes: "Rappel de la séance 7 (1.3.4 à 1.3.8, pronoms sujets, formes courtes/longues, fiche Vraagwoorden). Modèles : A « Dit is Lucas. Hij heeft een zus. Hij is leraar. » — B « Waar woon je? Hoeveel broers heb je? Wanneer werk je? » — C « Jij komt uit Namen, maar ik kom uit Luik. » — D « Ik ben Sofia, ik kom uit Bergen. Ik heb twee kinderen. Vandaag gaat het goed. » Vérifier : -t à la 3e personne (hij heeft, hij is), pas de -t quand jij/je suit le verbe (Woon jij…? Werk je…?), forme longue (jij, wij, zij) seulement pour contraster.",
  });

  // ------------------------------------------------------------ Séquence 1.4 (p. 51)
  d.scene({
    title: 'Séquence 1.4 : prendre congé', tag: 'FOCUS', page: 'Livret p. 51', img: 'scene_1_4', time: '1.4', sceneLabel: 'SÉQUENCE',
    text: ['Dernier pilier : **terminer** une conversation poliment.', 'Emma : «**Dag**, Pieter! **Tot snel!**» — //Au revoir ! À bientôt !//', 'Pieter : «**Dag**, Emma! **Fijne dag!**» — //Bonne journée !//', 'Dialogue p. 3 : //Nou, **tot straks** dan!//'],
    ask: 'Comment dit-on « à demain » ? Et « bonne soirée » ?',
    notes: "Réponses : Tot morgen! / Fijne avond! Coquilles du livret (p. 51) : le titre annonce « Focus : lignes 7–9 du dialogue » mais cite deux répliques qui ne figurent pas dans le dialogue d’ouverture (ce sont les bulles de l’image) ; dans le dialogue p. 3, le congé est aux lignes 8–9 (« Nou, tot straks dan! » / « Ja, tot straks! Dag Pieter! »). L’encadré dit qu’Emma et Pieter se quittent avec « Dag, tot snel! » : c’est Emma qui dit « Dag, Pieter! Tot snel! » ; Pieter répond « Dag, Emma! Fijne dag! ». « Dag » est traduit tantôt « Au revoir », tantôt « Salut » : les deux conviennent, « dag » est neutre. Le livret appelle zijn/hebben des « auxiliaires » : jusqu’ici ce sont des verbes principaux (ils deviendront auxiliaires au perfectum, séance 14).",
  });

  d.picture({
    title: 'Zinnenbouwer 1.4 — Afscheid nemen', tag: 'ZINNENBOUWER', page: 'Livret p. 52', img: 'zinnenbouwer_1_4',
    capLabel: 'MODE D’EMPLOI', capColor: 'tx2', capIcon: 'FaPuzzlePiece',
    caption: ['**A Ik ga weg** : amorce + ce que je fais + formule — //Het is laat, ik ga naar huis. Tot morgen!//', '**B Het antwoord** : //Oké, tot straks!// · //Dank u, tot ziens!//', '**C Wanneer?** : //Ik zie je morgen.// · //We zien elkaar volgende week.//', '//Ik zie je// demande toujours un **moment** (famille C).', 'Un seul registre : ✗ //Dank u wel… Doei!//'],
    notes: "Coquilles et remarques sur le zinnenbouwer 1.4 : sous-titre « Chaque famille génère à elle plus de trente phrases » → « à elle seule » ; et la famille C ne donne que 4 × 7 = 28 combinaisons. Famille B : la colonne « VERBE » contient des formules (tot straks, tot zo…) et la colonne « FORMULE » est vide — le contenu est décalé d’une colonne. Famille A : « ik zie je » / « ik zie u » seuls ne sont pas une formule de congé ; il faut un moment (Ik zie je morgen / straks — famille C). Famille A mélange les registres : « Dank u wel… Doei! » ou « ik zie je… Dag mevrouw! » sont à éviter. « Ik zie je later » est un calque de l’anglais : préférer « Tot later! » ou « Ik zie je straks ». « Doeg » est familier et typiquement flamand. Le livret écrit « Dag Emma! » sans virgule ici et « Dag, Emma! » p. 51 : les deux se rencontrent.",
  });

  d.table({
    title: 'Formules de départ selon le contexte', tag: 'À RETENIR', page: 'Livret p. 53',
    headers: ['NEDERLANDS', 'FRANÇAIS', 'REGISTRE', 'QUAND ?'],
    colW: [2.5, 3.2, 1.9, 4.53], boldCol: 0,
    rows: [
      ['Dag!', 'Au revoir · Salut', 'universel', 'Toute situation, neutre.'],
      ['Tot ziens!', 'Au revoir', 'formel · neutre', 'On ne sait pas quand on se revoit.'],
      ['Tot straks!', 'À tout à l’heure · À tantôt', 'informel', 'Dans quelques heures.'],
      ['Tot zo!', 'À tout de suite', 'informel', 'Dans quelques minutes.'],
      ['Tot snel!', 'À bientôt', 'neutre', 'Prochainement.'],
      ['Tot morgen!', 'À demain', 'neutre', 'On se voit demain.'],
      ['Tot later!', 'À plus tard', 'informel', 'Plus tard dans la journée.'],
      ['Doei! · Doeg!', 'Salut · Ciao', 'très informel', 'Entre amis proches.'],
      ['Prettige dag!', 'Bonne journée !', 'poli', 'On souhaite une bonne journée.'],
      ['Fijne avond!', 'Bonne soirée !', 'poli', 'Fin d’après-midi, début de soirée.'],
    ],
    foot: 'Aussi : //Tot volgende week!// (la semaine prochaine) · //Welterusten!// (quelqu’un va dormir) · //Fijne dag!// = //Prettige dag!//',
    notes: "Lire le tableau en chœur, puis faire classer les formules du plus familier (Doei!) au plus formel (Tot ziens!). Coquille du livret : « Tot zo » est traduit « À très bientôt » ; les exercices 1.4.1 et 1.4.3 du livret le définissent comme « dans quelques minutes » = à tout de suite (traduction retenue ici). Avec u, la formule sûre est « Tot ziens! » (ou « Dag meneer / mevrouw! »). « Doeg » est la variante flamande de « Doei ».",
  });

  // ------------------------------------------------------------ 1.4.1 (p. 54)
  d.table({
    title: '1.4.1 Wanneer zien we elkaar terug?', tag: 'COUCHE 1', page: 'Livret p. 54',
    intro: 'Couche 1 · seul, puis par deux · 5 min — Associez chaque formule à sa situation (écrivez la lettre), puis lisez les formules à voix haute.',
    headers: ['N°', 'FORMULE', 'LETTRE', '', 'SITUATION'],
    colW: [0.7, 3.0, 1.3, 0.6, 6.53], align: ['center', 'left', 'center', 'center', 'left'], boldCol: 1,
    rows: [
      ['1', 'Tot zo!', '[[c]]', 'a', 'On se revoit demain.'],
      ['2', 'Tot straks!', '[[h]]', 'b', 'Quelqu’un va dormir.'],
      ['3', 'Tot morgen!', '[[a]]', 'c', 'On se revoit dans quelques minutes.'],
      ['4', 'Tot ziens!', '[[f]]', 'd', 'Entre amis proches, très familier.'],
      ['5', 'Tot volgende week!', '[[g]]', 'e', 'On souhaite une bonne soirée.'],
      ['6', 'Welterusten!', '[[b]]', 'f', 'On ne sait pas quand on se reverra (neutre, poli).'],
      ['7', 'Fijne avond!', '[[e]]', 'g', 'On se revoit la semaine prochaine.'],
      ['8', 'Doei!', '[[d]]', 'h', 'On se revoit plus tard dans la journée (à tantôt).'],
    ],
    notes: "Réception : on associe avant de produire. Laisser 3 minutes seul, 2 minutes de comparaison avec le voisin.",
    notesA: "Solution : 1c · 2h · 3a · 4f · 5g · 6b · 7e · 8d. Faire lire chaque formule à voix haute avec l’intonation (montante pour Doei!). Rappel : « tot » + moment = à + moment (tot morgen, tot volgende week, tot vanavond).",
  });

  // ------------------------------------------------------------ 1.4.2 (p. 55)
  d.table({
    title: '1.4.2 Afscheidskaartjes', tag: 'COUCHE 2', page: 'Livret p. 55',
    intro: 'Couche 2 · seul, puis par deux · 15 min — Par carte : **raison** + **ce que je fais** + **formule** (familles A et C). Le voisin répond (famille B) : //Oké, tot morgen!//',
    headers: ['N°', 'SITUATION', 'RAISON + ACTION (libre, exemple)', 'FORMULE'],
    colW: [0.6, 3.9, 4.2, 3.43], align: ['center', 'left', 'left', 'left'],
    rows: [
      ['1', '22 h, je rentre. Collègues : demain.', '++Het is laat, ik ga naar huis.++', '[[Tot morgen!]]'],
      ['2', 'Mon cours commence dans 2 min. Pieter : après le cours.', '++Sorry, mijn les begint zo.++', '[[Tot straks, Pieter!]]'],
      ['3', 'Mon maître de stage (u). Quand ? Je ne sais pas.', '++Dank u wel, ik ga nu.++', '[[Tot ziens, meneer!]]'],
      ['4', 'Des amis. Je les revois ce soir.', '++Nou, ik ga naar het werk.++', '[[Ik zie jullie vanavond!]]'],
      ['5', 'Je vais acheter un café. Retour dans 5 min.', '++Ik ga even koffie halen.++', '[[Tot zo!]]'],
      ['6', 'Vendredi. La classe : la semaine prochaine.', '++Het is vrijdag, ik ga naar huis.++', '[[We zien elkaar volgende week!]]'],
    ],
    size: 16,
    notes: "Production structurée, zinnenbouwer ouvert. La formule dépend de la situation ; la raison et l’action sont libres (vraies pour l’étudiant). Chaque étudiant écrit ses six répliques, puis les lit à son voisin qui répond avec la famille B (Ja, tot straks! / Oké, tot zo! / Dank u, tot ziens!).",
    notesA: "Seule la formule de congé est déterminée par la situation ; la colonne du milieu donne un exemple parmi d’autres. Variantes acceptables : 1 « Ik zie jullie morgen! » · 4 « Tot vanavond! » (pas dans le zinnenbouwer, mais correct) · 5 « Ik heb zin in koffie. Tot zo! » · 6 « Tot volgende week! » ou « Fijn weekend! ». Carte 3 : vouvoiement du début à la fin (Dank u wel… Tot ziens, meneer!) — pas de « Doei ». « Ik ga even koffie halen » : « even » adoucit (= juste un instant).",
  });

  // ------------------------------------------------------------ 1.4.3 (p. 56)
  d.exercise({
    title: '1.4.3 Snel afscheid nemen', tag: 'COUCHE 3', page: 'Livret p. 56',
    instr: 'Couche 3 · par deux · 10 min — Pliez la page · le voisin **chronomètre** · les 15 amorces sans vous arrêter · dépliez, corrigez · **second passage** (notez 1e keer, 2e keer, winst).',
    cols: 2, gap: 6, qGap: 6,
    items: [
      'À tout à l’heure ! (dans quelques heures) → [[Tot straks!]]',
      'À tout de suite ! (dans quelques minutes) → [[Tot zo!]]',
      'À demain ! → [[Tot morgen!]]',
      'Au revoir, monsieur ! → [[Tot ziens, meneer! · Dag meneer!]]',
      'Bonne soirée ! → [[Fijne avond!]]',
      'Bonne journée ! → [[Prettige dag! · Fijne dag!]]',
      'Dors bien ! → [[Welterusten!]]',
      'Il est tard, je rentre à la maison. → [[Het is laat, ik ga naar huis.]]',
      'Je n’ai pas le temps, mon cours commence tout de suite. → [[Ik heb geen tijd, mijn les begint zo.]]',
      'Je te vois demain ! → [[Ik zie je morgen!]]',
      'On se voit la semaine prochaine ! → [[We zien elkaar volgende week!]]',
      'Pas de problème. Bon, à tantôt alors ! → [[Geen probleem. Nou, tot straks dan!]]',
      'Oui, à tantôt ! Au revoir, Pieter ! → [[Ja, tot straks! Dag Pieter!]]',
      'Je vais au travail. À plus tard ! → [[Ik ga naar het werk. Tot later!]]',
      'Salut ! (entre amis, très familier) → [[Doei!]]',
    ],
    notes: "Fluidité, zinnenbouwer fermé : rien de nouveau, seulement plus vite. A lit le français, B répond en néerlandais sans regarder ; on note le temps, on corrige, puis second passage. Les amorces 9, 12 et 13 reprennent le dialogue d’ouverture (lignes 7 à 9).",
    notesA: "Points à surveiller : « Ik heb geen tijd » (geen + nom) ; « mijn les begint zo » (begint, -t à la 3e personne) ; « Ik zie je morgen » (pronom après le verbe). Amorce 10 : le français « Je te vois demain ! » est un calque du néerlandais ; en français on dirait plutôt « On se voit demain ! ». « Nou » (bon, eh bien) est surtout néerlandais ; en Belgique on entend aussi « Allee » ou « Goed ».",
  });

  // ------------------------------------------------------------ Mise en situation finale (p. 57)
  d.exercise({
    title: 'Mise en situation finale : Stel jezelf voor', tag: 'MISE EN SITUATION', page: 'Livret p. 57', mode: 'a',
    instr: 'Seul, puis par deux · 15 min — 1 min : relisez vos quatre zinnenbouwers, puis **fermez-les**. Écrivez 5 phrases, puis présentez-vous **sans notes** à un autre binôme.',
    number: false, gap: 10,
    items: [
      { h: 'Les 5 phrases — un modèle (à adapter : il doit être vrai pour vous !)' },
      { t: '**1 · Saluer** — //Goedenavond allemaal!//' },
      { t: '**2 · Zijn** — //Ik ben Sofia en ik kom uit Charleroi.//' },
      { t: '**3 · Hebben** — //Ik heb twee kinderen en een kat.//' },
      { t: '**4 · Ik / jij** — //Jij woont in Gent, maar ik woon in Bergen.//' },
      { t: '**5 · Congé** — //Het is laat, ik ga naar huis. Tot volgende week!//' },
    ],
    img: 'finale', imgH: 2.0,
    expect: ['Salut et congé **selon l’heure**.', '//ik ben// · //ik heb// + verbe en **2e position**.', 'Forme **longue** (jij, ik) pour contraster.', 'À l’oral : **sans notes**.'],
    notes: "Exercice de synthèse du palier 1 (salutations, zijn/hebben, pronoms, congé). Production libre : pas de correction unique ; passer dans les rangs et vérifier les cinq critères. Pendant les présentations orales, le binôme qui écoute coche les cinq phrases. Remarques sur le livret : « warming up » est un anglicisme (= échauffement). Dans l’illustration, Emma et Pieter se saluent par leur prénom puis se présentent (« Ik ben Emma. ») : incohérent s’ils se connaissent déjà — on peut le faire remarquer à la classe. L’image ne montre que les phrases 1 à 3 (« Ik heb een boek. » / « Ik heb een tas. »). Cours du soir : « Goedenavond » est la salutation attendue.",
  });

  // ------------------------------------------------------------ Grammaire A1-01 Lidwoorden (p. 58)
  d.cards({
    title: 'Lidwoorden : de · het · een', tag: 'GRAMMATICA', page: 'Livret p. 58',
    intro: 'Deux articles définis : **de** (± 3 mots sur 4) et **het**. L’article indéfini est toujours **een**. Apprenez **chaque mot avec son article**.',
    perRow: 3,
    cards: [
      { h: 'DE', color: 'accent2', f: 'de man · de vrouw', lines: ['**± 3 mots sur 4**', 'masculin + féminin, les personnes', '//de fiets · de koffie//', 'pluriel : **toujours de** — //de huizen//'] },
      { h: 'HET', color: 'accent4', f: 'het huis · het brood', lines: ['neutre : **± 1 mot sur 4**', '**-je, -tje** : //het meisje, het huisje//', '**langues** : //het Nederlands, het Frans//', '**verbe → nom** : //het eten, het drinken//'] },
      { h: 'EEN', color: 'accent1', f: 'een man · een huis', lines: ['article indéfini : **toujours een**', 'se dit « eun » ; //één// = le chiffre 1', 'pas de //een// au pluriel : //een kind → kinderen//'] },
    ],
    foot: { kind: 'trap', text: 'Le genre français ne sert à rien : //la maison// → %%het%% huis · //le vélo// → ^^de^^ fiets · //la fille// → %%het%% meisje. Et au pluriel, tout passe en **de** : %%het%% huis → ^^de^^ huizen.' },
    notes: "Fiche A1-01. Code couleur du cours : de = bleu, het = magenta. Les trois « repères het » (diminutif, langue, verbe devenu nom) sont sûrs ; pour le reste, il faut mémoriser. Een se prononce avec un e muet [ən] ; écrit avec accents (één), c’est le chiffre « un ».",
  });

  d.imagier({
    title: 'Oefening : de of het?', tag: 'GRAMMATICA', page: 'Livret p. 58',
    intro: 'Seul · 3 min — Écrivez l’article dans la bulle, puis dites le mot à voix haute avec son article.',
    perSlide: 8, quiz: true,
    words: [
      { img: 'v03_03', nl: 'bus', art: 'de', fr: 'le bus' },
      { img: 'v03_01', nl: 'station', art: 'het', fr: 'la gare' },
      { img: 'v03_02', nl: 'trein', art: 'de', fr: 'le train' },
      { img: 'v03_11', nl: 'museum', art: 'het', fr: 'le musée' },
      { img: 'v04_02', nl: 'kaas', art: 'de', fr: 'le fromage' },
      { img: 'v04_08', nl: 'water', art: 'het', fr: 'l’eau' },
    ],
    notes: "Exercice de la fiche 01 (six vignettes du livret). Les étudiants donnent l’article oralement, un par un.",
    notesA: "Solution : de bus · het station · de trein · het museum · de kaas · het water. Ici, aucun des trois repères ne s’applique : il faut mémoriser. Astuce : beaucoup de mots en -um venus du latin sont het (het museum, het centrum, het album). Pluriels : de bussen, de stations, de treinen, de musea (ou museums).",
  });

  d.imagier({
    title: 'De of het? Douze objets', tag: '+ BONUS', page: 'Hors syllabus',
    intro: 'Mots : vis · boot · tas · rok · kok · envelop · auto · fornuis · pan · boek · raam · doos — **de** ou **het** ?',
    perSlide: 12, quiz: true, showFr: true,
    words: [
      { img: 'dh_vis', nl: 'vis', art: 'de', fr: 'le poisson' },
      { img: 'dh_boot', nl: 'boot', art: 'de', fr: 'le bateau' },
      { img: 'dh_tas', nl: 'tas', art: 'de', fr: 'le sac' },
      { img: 'dh_rok', nl: 'rok', art: 'de', fr: 'la jupe' },
      { img: 'dh_kok', nl: 'kok', art: 'de', fr: 'le cuisinier' },
      { img: 'dh_envelop', nl: 'envelop', art: 'de', fr: 'l’enveloppe' },
      { img: 'dh_auto', nl: 'auto', art: 'de', fr: 'la voiture' },
      { img: 'dh_fornuis', nl: 'fornuis', art: 'het', fr: 'la cuisinière' },
      { img: 'dh_pan', nl: 'pan', art: 'de', fr: 'la casserole' },
      { img: 'dh_boek', nl: 'boek', art: 'het', fr: 'le livre' },
      { img: 'dh_raam', nl: 'raam', art: 'het', fr: 'la fenêtre' },
      { img: 'dh_doos', nl: 'doos', art: 'de', fr: 'la boîte' },
    ],
    notes: "Exercice ajouté. Les étudiants associent d’abord chaque mot à sa vignette (le français est donné), puis votent : bras levé = de, bras croisés = het. Pas de règle pour ces mots : on mémorise.",
    notesA: "Seulement trois het-woorden : het fornuis, het boek, het raam. Tous les autres sont de (neuf sur douze : la proportion « 3 sur 4 » de la fiche !). De kok : une personne → de. Faire répéter avec een et au pluriel : een boek → de boeken, een raam → de ramen.",
  });

  // ------------------------------------------------------------ Grammaire A1-10 De gebiedende wijs (p. 67)
  d.cards({
    title: 'De gebiedende wijs : l’impératif poli', tag: 'GRAMMATICA', page: 'Livret p. 67',
    intro: 'L’impératif = le **radical** du verbe (l’infinitif sans **-en**). **Une seule forme** pour tout le monde.',
    perRow: 3,
    cards: [
      { h: 'A · FORMATION', color: 'accent2', f: 'infinitif − en', lines: ['//bellen → **Bel** me!//', '//drinken → **Drink** je koffie!//', '//lezen → **Lees** de krant!//', '//zijn → **Wees** voorzichtig!//', 'z → s (//lees//) · //zijn// : irrégulier'] },
      { h: 'B · PLUS GENTIL', color: 'accent3', f: 'even · eens · maar', lines: ['//Wacht **even**!// — un instant', '//Kijk **eens**!// — un peu, pour voir', '//Kom **maar** binnen!// — vas-y, je t’en prie'] },
      { h: 'C · S’IL TE / VOUS PLAÎT', color: 'accent4', f: 'alsjeblieft · alstublieft', lines: ['**tu** : //alsjeblieft// — //Dank je.// → //Graag gedaan.//', '**vous** : //alstublieft// — //Dank u.// → //Geen dank.//'] },
    ],
    foot: { kind: 'trap', text: 'Une seule forme pour //viens// et //venez// : **Kom!** (✗ //Komt!// ✗ //Komen!//). Astuce : impératif = forme de **ik** (//ik kom → Kom!//). Seul, il paraît **sec** : ajoutez //even, eens, maar// ou //alsjeblieft//.' },
    notes: "Fiche A1-10. Le radical s’écrit comme la forme « ik » : ik bel → Bel!, ik lees → Lees!, ik wacht → Wacht! Exception : zijn → Wees! Politesse : en néerlandais, un impératif nu est perçu comme un ordre ; even / eens / maar le rendent aimable. Lien avec la séquence 1.4 : beaucoup de formules de congé sont des impératifs (Slaap lekker! Kom goed thuis! Doe de groeten aan…).",
  });

  d.exercise({
    title: 'Oefening : l’impératif (fiche 10) + BONUS', tag: 'GRAMMATICA', page: 'Livret p. 67',
    instr: 'Seul · 5 min — À gauche, l’exercice de la fiche ; à droite (+ BONUS, hors syllabus), des formules de congé à l’impératif.',
    restart: true, gap: 14,
    columns: [
      [{ h: 'Livret p. 67 — écrivez l’impératif' }, 'luisteren → [[Luister]]!', 'komen → [[Kom]] maar binnen!', 'kijken → [[Kijk]] eens!', 'wachten → [[Wacht]] even!'],
      [{ h: '+ BONUS — traduisez' }, 'Dors bien ! → [[Slaap lekker!]]', 'Sois prudent ! → [[Wees voorzichtig!]]', 'Rentre bien ! → [[Kom goed thuis!]]', 'Appelle-moi ce soir ! → [[Bel me vanavond!]]', 'Passe le bonjour à ta sœur ! → [[Doe de groeten aan je zus!]]'],
    ],
    notes: "Colonne de gauche : exercice de la fiche 10. Colonne de droite : exercice ajouté qui relie l’impératif aux formules de congé de la séquence 1.4.",
    notesA: "Fiche : Luister! · Kom maar binnen! · Kijk eens! · Wacht even! (radical = forme de ik). Bonus : « Slaap lekker! » est plus familier que « Welterusten! » ; « Kom goed thuis! » = rentre bien (formule très courante en Belgique) ; « Doe de groeten aan… » = passe le bonjour à… Avec u, on ajoute « alstublieft » ou on passe par une question polie (Kunt u even wachten?).",
  });

  // ------------------------------------------------------------ Vocabulaire V01 Zich voorstellen (p. 78)
  d.imagier({
    title: 'Zich voorstellen — se présenter', tag: 'WOORDENSCHAT', page: 'Livret p. 78',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v01_01', nl: 'naam', art: 'de', fr: 'le nom' },
      { img: 'v01_02', nl: 'een hand geven', art: null, fr: 'serrer la main' },
      { img: 'v01_03', nl: 'visitekaartje', art: 'het', fr: 'la carte de visite' },
      { img: 'v01_04', nl: 'identiteitskaart', art: 'de', fr: 'la carte d’identité' },
      { img: 'v01_05', nl: 'verjaardag', art: 'de', fr: 'l’anniversaire' },
      { img: 'v01_06', nl: 'adres', art: 'het', fr: 'l’adresse' },
      { img: 'v01_07', nl: 'telefoonnummer', art: 'het', fr: 'le numéro de téléphone' },
      { img: 'v01_08', nl: 'land', art: 'het', fr: 'le pays' },
      { img: 'v01_09', nl: 'wereld', art: 'de', fr: 'le monde' },
      { img: 'v01_10', nl: 'taal', art: 'de', fr: 'la langue' },
      { img: 'v01_11', nl: 'beroep', art: 'het', fr: 'la profession' },
      { img: 'v01_12', nl: 'man', art: 'de', fr: 'l’homme' },
      { img: 'v01_13', nl: 'vrouw', art: 'de', fr: 'la femme' },
      { img: 'v01_14', nl: 'jongen', art: 'de', fr: 'le garçon' },
      { img: 'v01_15', nl: 'meisje', art: 'het', fr: 'la fille' },
    ],
    notes: "Quiz « Wat is dit? » : montrer un numéro, la classe répond avec l’article (de naam, het adres…). Vocabulaire 01, p. 78. Lien direct avec la fiche Lidwoorden qu’on vient de voir.",
    notesA: "Six het-woorden : het visitekaartje (-je !), het adres, het telefoonnummer (het nummer), het land, het beroep, het meisje (-je !). Mots composés : de identiteit + de kaart → de identiteitskaart ; de telefoon + het nummer → het telefoonnummer (le dernier mot décide). En Belgique, on dit souvent « de identiteitskaart » ou « de eID ». Pluriels utiles : de talen, de landen, de mannen, de vrouwen.",
  });

  d.exercise({
    title: 'Mijn visitekaartje : qui êtes-vous ?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez avec un mot de l’imagier, puis dites les phrases **pour vous**, à voix haute.',
    gap: 10,
    items: [
      'Ik zeg «Goedendag» en ik geef [[een hand]].',
      'Mijn [[naam]] is Emma.',
      'Ik kom uit België: dat is mijn [[land]].',
      'Ik spreek twee [[talen]]: Frans en Nederlands.',
      'Mijn [[adres]] is Kerkstraat 12, 7000 Bergen.',
      'Mijn [[telefoonnummer]] is 0470 12 34 56.',
      'Op 3 mei is het mijn [[verjaardag]].',
      'Mijn [[beroep]]? Ik ben verpleegster.',
    ],
    aside: { label: 'ET VOUS ?', icon: 'FaComments', color: 'accent2', lines: ['//Wat is je naam?//', '//Waar woon je?//', '//Welke talen spreek je?//', '//Wanneer is je verjaardag?//', '//Wat is je beroep?//'] },
    traps: ['//mijn// remplace l’article : %%het%% land → //mijn land//.', 'Pluriel : ^^de^^ taal → **de talen**.', '//een hand geven// = serrer la main.', '//Goedendag// : salut formel, courant en Belgique.'],
    notes: "Exercice ajouté : réemploi du vocabulaire Zich voorstellen. Après la correction, chacun répond oralement aux questions de l’encadré « Et vous ? » (vraies pour soi). Peut servir de devoir si le temps manque.",
    notesA: "Accepter « Mijn verjaardag is op 3 mei ». « verpleegster » (infirmière) : masculin « verpleger ». Question ouverte « Wat is je beroep? » — réponse sans article : « Ik ben leraar » (« Ik ben een leraar » existe, mais pour un métier on omet généralement l’article).",
  });

  d.closing({
    cliff: 'Séance 9 : **bilan du palier 1**, la **famille**, la **ville**… et demander son chemin : //Kunt u me zeggen waar lokaal 204 is?//',
    homework: ['Apprendre les **formules de départ** (p. 53).', 'Refaire le chrono **1.4.3** et battre votre temps.', 'Mettre au propre vos **5 phrases** « Stel jezelf voor » et les dire **sans notes**.', 'Apprendre les 15 mots **Zich voorstellen** (p. 78) **avec l’article**.'],
    exit: 'Quittez la classe en néerlandais : **raison + action + formule** (//Het is laat, ik ga naar huis. Tot volgende week!//).',
    notes: "Ticket de sortie oral, un par un à la porte : chacun choisit une raison différente. Vérifier la formule (tot volgende week / tot donderdag) et le registre (avec le professeur : Tot ziens!).",
  });
};
