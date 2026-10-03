// Séance 18 — Op de markt · diminutifs, manger & boire, faire les courses — Livret p. 66, 81, 82 + jeux de rôle
const PURPLE = '6E4A9E';

exports.meta = {
  n: 18, slug: 'Op_de_markt', title: 'Op de markt',
  subtitle: 'Faire ses courses et commander — les diminutifs, manger et boire',
  pages: 'Livret p. 66 · 81 · 82', img: 'cover_woordenschat',
  block: 'Section 3 · Vocabulaire — vie quotidienne',
  coverNotes: "Séance 18. Objectifs : former les diminutifs (-je, -tje, -pje, -etje) et retenir qu’ils sont tous en het (fiche A1-09, p. 66), apprendre le vocabulaire de la nourriture et des boissons (thème 04, p. 81) et des courses (thème 05, p. 82), puis jouer deux situations hors syllabus : au marché et au café. Image de couverture : Sarah nomme ce qu’elle voit sur de markt (« de kaas · het brood · de markt »).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Faire mes **courses** au marché ou au magasin, **commander** au café, demander un **prix** — avec des **diminutifs** : //een kopje koffie, een broodje//.',
    language: '//Wat mag het zijn? · Ik had graag… · Anders nog iets? · Hoeveel kost dat? · het huisje · het visje · het kopje//',
    skills: 'Former le diminutif · nommer aliments, boissons et magasins avec de / het · dire un prix · jeux de rôle au marché et au café',
    agenda: [['Échauffement : la séance 17', 5], ['Verkleinwoorden (p. 66)', 15], ['Maak het klein! (bonus)', 5], ['Eten & drinken (p. 81) + bonus', 12], ['Boodschappen (p. 82) + bonus', 12], ['Sarah op de markt · dialogue', 8], ['Jeu de rôle : au marché', 13], ['Jeu de rôle : au café', 15], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. Les diminutifs sont partout dans la langue des courses et du café (een kopje koffie, een broodje, een stukje kaas, het mandje, het winkelwagentje) : on commence donc par la fiche p. 66, puis on les retrouve dans le vocabulaire et les jeux de rôle. Les deux jeux de rôle (marché, café) sont ajoutés au syllabus par le plan de cours.",
  });

  // ------------------------------------------------------------ Échauffement (rappel séance 17)
  d.exercise({
    title: 'Échauffement : la séance 17 en sept phrases', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 17',
    instr: 'Seul · 5 min — Complétez ou traduisez, puis lisez à voix haute.',
    gap: 10,
    items: [
      'werken //(ik, OVT)// → [[ik werkte]]',
      'spelen //(wij, OVT)// → [[wij speelden]]',
      'zijn · hebben //(hij, OVT)// → [[hij was · hij had]]',
      'J’ai mal à la tête. → [[Ik heb hoofdpijn.]]',
      'As-tu réussi l’examen ? → [[Heb je het examen gehaald?]]',
      'Au début, j’étais nerveux. → [[In het begin was ik zenuwachtig.]]',
      'l’œil · la jambe · l’hôpital → [[het oog · het been · het ziekenhuis]]',
    ],
    traps: ['’t kofschip : //werk// (k) → **-te** · //speel// (l) → **-de**.', 'Pluriel : + **n** (//speelden//).', 'Trois mots en %%het%% !'],
    notes: "Rappel de la fiche A2-03 (OVT), du thème Gezondheid et de la fiche 10. Interroger un étudiant par phrase.",
    notesA: "Variantes acceptables : 4 « Ik heb pijn aan mijn hoofd » ; 5 « Ben je geslaagd? » ou « Is het gelukt? » ; 6 « In het begin was ik nerveus » (nerveus existe aussi). Transition : « Gisteren was ik op de markt… » — aujourd’hui, on fait les courses.",
  });

  // ------------------------------------------------------------ A1-09 Verkleinwoorden (p. 66)
  d.cards({
    title: 'Verkleinwoorden : quatre terminaisons', tag: 'GRAMMATICA', page: 'Livret p. 66',
    intro: 'On ajoute **-je** au nom (ou **-tje, -pje, -etje**, pour que le mot reste facile à prononcer).',
    perRow: 4, bSize: 17,
    cards: [
      { h: '-JE', color: 'accent2', f: 'het huis!!je!!', lines: ['**Cas général** : après k, p, s, t, d, f, ch…', '//het boekje · het tasje//', '//de mand → het mandje//'] },
      { h: '-TJE', color: 'accent3', f: 'het auto!!otje!!', lines: ['Après une **voyelle** (a, o, u doublés) : //het autootje · het eitje//', 'Voyelle longue + **l, n, r** : //het stoeltje//', 'Après **-el, -en, -er** : //het wagentje//'] },
      { h: '-PJE', color: PURPLE, f: 'het boom!!pje!!', lines: ['Après **m** derrière une voyelle longue : //het raampje//', 'Après **lm, rm** : //het filmpje · het armpje//'] },
      { h: '-ETJE', color: 'accent1', f: 'het zon!!netje!!', lines: ['**Voyelle courte** + l, m, n, r, ng : la consonne **double**.', '//het balletje · het pannetje · het ringetje//', '//de brug → het bruggetje//'] },
    ],
    foot: { kind: 'keep', label: 'Règle d’or', text: 'Tous les diminutifs sont en %%het%% : //^^de^^ vis → %%het%% visje//. Au pluriel : **de … -s** : //^^de^^ visjes · ^^de^^ meisjes//.' },
    notes: "Partie A de la fiche A1-09 (images du livret : het huisje, het autootje, het zonnetje, het mandje). Le livret cite -pje sans exemple : boom → boompje, raam → raampje, film → filmpje. « het wagentje » vient de « de wagen » : on le retrouve dans « het winkelwagentje » (le caddie, p. 82). Faire répéter : la terminaison -tje se prononce [tje], -je après t/d se prononce souvent [tje] aussi (het kaartje).",
  });

  d.table({
    title: 'De → het : le diminutif change l’article', tag: 'GRAMMATICA', page: 'Livret p. 66',
    headers: ['LE MOT', 'LE DIMINUTIF', 'LE PLURIEL', 'FRANÇAIS'],
    colW: [2.6, 3.2, 3.0, 3.33], boldCol: 1,
    rows: [
      ['^^de^^ vis', '%%het%% visje', '^^de^^ visjes', 'le petit poisson'],
      ['^^de^^ jongen', '%%het%% jongetje', '^^de^^ jongetjes', 'le petit garçon'],
      ['^^de^^ soep', '%%het%% soepje', '^^de^^ soepjes', 'un petit bol de soupe'],
      ['^^de^^ mand', '%%het%% mandje', '^^de^^ mandjes', 'le panier (à provisions)'],
      ['%%het%% huis', '%%het%% huisje', '^^de^^ huisjes', 'la maisonnette'],
      ['^^de^^ auto', '%%het%% autootje', '^^de^^ autootjes', 'la petite voiture'],
      ['%%het%% meisje', '(déjà un diminutif)', '^^de^^ meisjes', 'la fille'],
    ],
    foot: 'L’adjectif suit la règle du het (fiche p. 61) : //een **klein** huisje// (het + een + singulier) · //het **kleine** huisje// · //de **kleine** huisjes//.',
    notes: "Partie B de la fiche (images : de vis, de jongen, de soep). « het meisje » est historiquement le diminutif de « de meid » : c’est pour cela qu’il est en het. Pour parler d’une fille, on dit souvent « ze » (Het meisje? Ze heet Lisa.), même si le mot est neutre. « de jongen → het jongetje » : forme spéciale à retenir.",
  });

  d.exercise({
    title: 'Oefening : schrijf het verkleinwoord', tag: 'GRAMMATICA', page: 'Livret p. 66',
    instr: 'Seul · 5 min — Écrivez le diminutif **avec son article**.',
    gap: 14,
    items: [
      '^^de^^ krant → [[het krantje]]',
      '^^de^^ kaart → [[het kaartje]]',
      '^^de^^ hand → [[het handje]]',
      '^^de^^ doos → [[het doosje]]',
      '^^de^^ brug → [[het bruggetje]]',
      '^^de^^ taart → [[het taartje]]',
    ],
    aside: { label: 'RAPPEL', icon: 'FaLightbulb', lines: ['Diminutif = **het**, toujours.', 'Cas général : **-je**.', 'Voyelle courte + consonne : **-etje** et consonne doublée.'] },
    traps: ['Six fois **het** : le diminutif change l’article.', '//brug// : voyelle courte → **-etje**, g doublé : //bruggetje//.', '//het kaartje// = aussi **le ticket** (//een treinkaartje//).'],
    notes: "Exercice de la fiche A1-09 (illustrations : le journal, la carte, la main, la boîte, le pont, le gâteau). Faire lire chaque mot à voix haute.",
    notesA: "Erreurs attendues : « de krantje » (article non changé), « het brugje ». « het handje » s’entend surtout dans « een handje helpen » (donner un coup de main). « het doosje » : une petite boîte (een doosje bonbons).",
  });

  d.compare({
    title: 'Petit en français, -je en néerlandais', tag: 'GRAMMATICA', page: 'Livret p. 66',
    left: { h: 'FRANÇAIS : un adjectif', color: 'accent2', icon: 'FaLanguage', items: ['On ajoute **petit** : //une petite maison, un petit poisson//.', 'Ou on change de mot : //un petit pain · une tasse de café//.', 'Le mot garde son **genre** : //la maison → la petite maison//.'] },
    right: { h: 'NEDERLANDS : un suffixe', color: 'accent3', icon: 'FaUtensils', items: ['On ajoute **-je** : //een huisje · een visje//.', 'Pas seulement « petit » : **gentil**, familier, une **portion** : //een kopje koffie · een stukje kaas · een momentje//.', 'Le mot devient **het** : //^^de^^ vis → %%het%% visje//.'] },
    foot: { kind: 'trap', text: 'Ne traduisez pas mot à mot : //un petit pain// = //een **broodje**// (✗ //een klein brood//) · //un petit moment// = //een **momentje**// · //une petite bière// = //een **biertje**//.' },
    notes: "Ajout explicatif : le diminutif est extrêmement fréquent en néerlandais, surtout au café, au marché et avec les enfants. « Een momentje, alstublieft » (un instant, s’il vous plaît) s’entend partout au téléphone et au guichet. « Een klein brood » existe (un petit pain entier, une petite miche), mais le petit pain du matin, c’est « een broodje ».",
  });

  d.imagier({
    title: 'Maak het klein! Le diminutif en images', tag: '+ BONUS', page: 'Hors syllabus',
    intro: 'Sous l’image : le mot de base. Donnez le **diminutif** avec son article.',
    perSlide: 8, quiz: true, showFr: true,
    words: [
      { img: 'dh_vis', nl: 'visje', art: 'het', fr: 'de vis' },
      { img: 'dh_boot', nl: 'bootje', art: 'het', fr: 'de boot' },
      { img: 'dh_tas', nl: 'tasje', art: 'het', fr: 'de tas' },
      { img: 'dh_rok', nl: 'rokje', art: 'het', fr: 'de rok' },
      { img: 'dh_auto', nl: 'autootje', art: 'het', fr: 'de auto' },
      { img: 'dh_pan', nl: 'pannetje', art: 'het', fr: 'de pan' },
      { img: 'dh_boek', nl: 'boekje', art: 'het', fr: 'het boek' },
      { img: 'dh_raam', nl: 'raampje', art: 'het', fr: 'het raam' },
    ],
    notes: "Exercice ajouté (images de la fiche de/het du livret). À l’oral, par deux : A montre une image et dit le mot de base, B répond avec le diminutif et l’article. Les quatre terminaisons y sont : -je (visje, bootje, tasje, rokje, boekje), -tje (autootje), -pje (raampje), -etje (pannetje).",
    notesA: "Tous en het, même ceux qui viennent d’un mot en de. Pluriels : de visjes, de bootjes, de autootjes… Bonus oral : « een klein bootje » (het + een → pas de -e) / « het kleine bootje ».",
  });

  // ------------------------------------------------------------ V04 Eten & drinken (p. 81)
  d.imagier({
    title: 'Eten & drinken — manger et boire', tag: 'WOORDENSCHAT', page: 'Livret p. 81',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v04_01', nl: 'brood', art: 'het', fr: 'le pain' },
      { img: 'v04_02', nl: 'kaas', art: 'de', fr: 'le fromage' },
      { img: 'v04_03', nl: 'boter', art: 'de', fr: 'le beurre' },
      { img: 'v04_04', nl: 'ei', art: 'het', fr: 'l’œuf' },
      { img: 'v04_05', nl: 'melk', art: 'de', fr: 'le lait' },
      { img: 'v04_06', nl: 'koffie', art: 'de', fr: 'le café' },
      { img: 'v04_07', nl: 'thee', art: 'de', fr: 'le thé' },
      { img: 'v04_08', nl: 'water', art: 'het', fr: 'l’eau' },
      { img: 'v04_09', nl: 'soep', art: 'de', fr: 'la soupe' },
      { img: 'v04_10', nl: 'frieten', art: 'de', fr: 'les frites' },
      { img: 'v04_11', nl: 'vlees', art: 'het', fr: 'la viande' },
      { img: 'v04_12', nl: 'vis', art: 'de', fr: 'le poisson' },
      { img: 'v04_13', nl: 'groenten', art: 'de', fr: 'les légumes' },
      { img: 'v04_14', nl: 'fruit', art: 'het', fr: 'les fruits' },
      { img: 'v04_15', nl: 'bestek', art: 'het', fr: 'les couverts' },
    ],
    notes: "Quiz : les étudiants donnent le mot AVEC l’article. Demander ensuite : « Wat eet je ’s morgens? Wat drink je ’s avonds? » (inversion après ’s morgens).",
    notesA: "Six mots en het : brood, ei, water, vlees, fruit, bestek. « de frieten » et « de groenten » sont des pluriels (singulier : de friet, de groente) ; « het fruit » est un singulier collectif (= les fruits). « de frieten » est le mot belge (aux Pays-Bas : de patat). Pluriel irrégulier : het ei → de eieren (fiche p. 59).",
  });

  d.exercise({
    title: 'Bestellen met een verkleinwoord', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Par deux · 5 min — Complétez avec le **diminutif** du mot entre parenthèses, puis commandez à voix haute.',
    gap: 12,
    items: [
      'Mag ik een [[kopje]] koffie, alstublieft? //(de kop)//',
      'Een [[broodje]] kaas, graag. //(het brood)//',
      'Voor mij een [[glaasje]] water. //(het glas)//',
      'Wil je een [[stukje]] vis? //(het stuk)//',
      'Ik eet ’s morgens een [[eitje]]. //(het ei)//',
      'Een [[frietje]] met mayonaise, alstublieft! //(de friet)//',
      'Twee [[biertjes]], graag! //(het bier, pluriel)//',
    ],
    traps: ['//glas → glaasje// : la voyelle s’allonge (**aa**).', '//ei → eitje · bier → biertje// : **-tje**.', 'Pluriel : **-s** → //twee biertjes//.', '//een broodje// = **un petit pain** (sandwich).'],
    notes: "Exercice ajouté : réemploi du vocabulaire Eten & drinken avec les diminutifs. « een frietje » est typiquement belge (aux Pays-Bas : een patatje). « een broodje kaas » = un sandwich au fromage (petit pain garni).",
  });

  // ------------------------------------------------------------ V05 Boodschappen (p. 82)
  d.imagier({
    title: 'Boodschappen — faire les courses', tag: 'WOORDENSCHAT', page: 'Livret p. 82',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v05_01', nl: 'winkel', art: 'de', fr: 'le magasin' },
      { img: 'v05_02', nl: 'supermarkt', art: 'de', fr: 'le supermarché' },
      { img: 'v05_03', nl: 'bakker', art: 'de', fr: 'le boulanger' },
      { img: 'v05_04', nl: 'slager', art: 'de', fr: 'le boucher' },
      { img: 'v05_05', nl: 'markt', art: 'de', fr: 'le marché' },
      { img: 'v05_06', nl: 'mandje', art: 'het', fr: 'le panier' },
      { img: 'v05_07', nl: 'winkelwagentje', art: 'het', fr: 'le caddie' },
      { img: 'v05_08', nl: 'kassa', art: 'de', fr: 'la caisse' },
      { img: 'v05_09', nl: 'geld', art: 'het', fr: 'l’argent' },
      { img: 'v05_10', nl: 'prijs', art: 'de', fr: 'le prix' },
      { img: 'v05_11', nl: 'kasticket', art: 'het', fr: 'le ticket de caisse' },
      { img: 'v05_12', nl: 'tas', art: 'de', fr: 'le sac' },
      { img: 'v05_13', nl: 'fles', art: 'de', fr: 'la bouteille' },
      { img: 'v05_14', nl: 'blik', art: 'het', fr: 'la boîte de conserve' },
      { img: 'v05_15', nl: 'weegschaal', art: 'de', fr: 'la balance' },
    ],
    notes: "Quiz : les étudiants donnent le mot AVEC l’article. Faire remarquer deux diminutifs dans la liste : het mandje (de mand) et het winkelwagentje (de winkelwagen) → het !",
    notesA: "Cinq mots en het : mandje, winkelwagentje (diminutifs), geld, kasticket, blik. Mots belges : het kasticket (aux Pays-Bas : de kassabon) ; pour le boucher, on dit très souvent « de beenhouwer » en Belgique (« de slager » aux Pays-Bas et dans le livret). « het blikje » = la canette (een blikje cola).",
  });

  d.exercise({
    title: 'Waar koop je het? Au bon magasin', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul puis à deux · 5 min — Complétez avec **bij, op** ou **in** + le magasin. Le produit est en tête : **inversion** !',
    gap: 14,
    items: [
      'Brood koop ik [[bij de bakker]].',
      'Vlees koop ik [[bij de slager (de beenhouwer)]].',
      'Groenten en fruit koop ik [[op de markt]].',
      'Melk en kaas koop ik [[in de supermarkt]].',
      'Medicijnen koop ik [[bij de apotheek]].',
      'Aan de kassa krijg ik [[het kasticket]].',
    ],
    traps: ['**bij** + le commerçant : //bij de bakker//.', '**op** de markt (en plein air) · **in** de supermarkt.', 'Produit en tête → //Brood **koop ik**…// (verbe en 2e position).'],
    notes: "Exercice ajouté : réemploi du vocabulaire Boodschappen et des prépositions (fiche p. 65), avec un rappel du thème Gezondheid (de apotheek). Demander ensuite à chacun : « Waar koop jij brood? » — réponse libre et vraie (Ik koop brood in de supermarkt).",
    notesA: "Variantes acceptables : 1 « in de bakkerij » ; 4 « bij de supermarkt » ou « in de winkel » ; 5 « in de apotheek ».",
  });

  // ------------------------------------------------------------ Jeux de rôle (hors syllabus)
  d.scene({
    title: 'Sarah op de markt', tag: 'WOORDENSCHAT', page: 'Livret p. 78 (illustration)', img: 'cover_woordenschat',
    text: ['Sarah fait son marché. Les **bulles** : //^^de^^ kaas · %%het%% brood · ^^de^^ markt//.', 'Les **ardoises** : //Gouda jong € 11,50/kg · Desembrood € 3,80 · Tulpen € 6,50 · Hollandse appels € 2,50/kg//.', 'Un prix : //€ 11,50// = //elf euro vijftig//.'],
    ask: 'Hoeveel kost het desembrood? En een kilo appels? Lisez les prix à voix haute.',
    notes: "Illustration d’ouverture de la section Vocabulaire du livret (« Sarah nomme ce qu’elle voit sur de markt »). Réponses : drie euro tachtig ; twee euro vijftig (per kilo). Gouda jong = du gouda jeune (jonge kaas) ; desembrood = pain au levain ; tulpen = des tulipes (10 stuks = 10 pièces). Après un nombre, « euro » reste au singulier : drie euro (✗ drie euro’s). Faire aussi lire : 11,50 → elf euro vijftig ; 6,50 → zes euro vijftig.",
  });

  d.dialogue({
    title: 'Op de markt : le dialogue modèle', tag: 'DIALOOG', page: 'Hors syllabus',
    colors: { VERKOOPSTER: 'B4236A' },
    lines: [
      ['VERKOOPSTER', '«Goedemorgen, mevrouw! Wat mag het zijn?»', '1'],
      ['SARAH', '«Goedemorgen! Ik had graag een halve kilo kaas.»', '2'],
      ['VERKOOPSTER', '«Jonge of oude kaas?»', '3'],
      ['SARAH', '«Jonge kaas, graag. Mag ik een stukje proeven?»', '4'],
      ['VERKOOPSTER', '«Natuurlijk! Alstublieft. Anders nog iets?»', '5'],
      ['SARAH', '«Ja, een desembrood en twee kilo appels. Hoeveel is dat samen?»', '6'],
      ['VERKOOPSTER', '«Dat is samen veertien euro vijfenvijftig.»', '7'],
      ['SARAH', '«Kan ik met de kaart betalen?»', '8'],
      ['VERKOOPSTER', '«Ja hoor. Wilt u een tasje?»', '9'],
      ['SARAH', '«Nee, dank u, ik heb een tas bij me. Tot volgende week!»', '10'],
    ],
    legend: { label: 'À REPÉRER', icon: 'FaShoppingBasket', color: 'accent3', lines: ['//Wat mag het zijn?// = vous désirez ?', '//Ik had graag…// = je voudrais (BE)', '//Anders nog iets?// = autre chose ?', '//Hoeveel is dat samen?//', 'Diminutifs : //stukje · tasje//'] },
    notes: "Dialogue ajouté, construit sur l’image de la diapositive précédente. Lecture par le professeur, puis par deux. Calcul : 5,75 (½ kg de kaas) + 3,80 + 5,00 (2 kg d’appels) = 14,55. « Ik had graag… » est la formule polie typiquement belge (OVT de hebben !) ; aux Pays-Bas on dit plutôt « Ik wil graag… » ou « Mag ik… ». En Belgique, « met de kaart » ou « met Bancontact betalen ».",
  });

  d.steps({
    title: 'Jeu de rôle : au marché', tag: 'MISE EN SITUATION', page: 'Hors syllabus',
    intro: 'Par deux · 10 min — A = le client (liste de 4 produits), B = le marchand (prix au tableau). On **vouvoie** (u). Puis on inverse.',
    steps: [
      { h: 'Groeten', color: 'accent2', lines: ['B : //Goedemorgen!//', 'B : //Wat mag het zijn?//', 'A : //Ik had graag…//'] },
      { h: 'Bestellen', color: 'accent1', lines: ['A : //een kilo appels//', 'A : //een stukje kaas//', 'B : //Anders nog iets?//'] },
      { h: 'Betalen', color: 'accent3', lines: ['A : //Hoeveel is dat?//', 'B : //Dat is … euro.//', 'A : //Met de kaart.//'] },
      { h: 'Afscheid', color: PURPLE, lines: ['B : //Wilt u een tasje?//', 'A : //Nee, dank u.//', 'A : //Tot volgende week!//'] },
    ],
    foot: { kind: 'keep', label: 'Critères', text: '**3** produits avec une quantité (//een kilo, een fles, een stukje//) · **1** diminutif · **1** prix en lettres · //u// du début à la fin.' },
    notes: "Étape 3 : le marchand peut demander « Cash of met de kaart? » (cash = en liquide, courant en Belgique) ; le client peut aussi demander « Kan ik met de kaart betalen? ». Étape 4 : le marchand donne le ticket : « Hier is uw kasticket. » Écrire au tableau une ardoise de prix (ex. : appels € 2,50/kg · kaas € 11,50/kg · melk € 1,20 · brood € 3,80 · tomaten € 3,00/kg). Le marchand calcule le total à voix haute. Observateurs (groupes de trois) : cochent les critères.",
  });

  d.dialogue({
    title: 'Jeu de rôle : in het café', tag: 'MISE EN SITUATION', page: 'Hors syllabus', img: 'scene_1_3',
    colors: { OBER: PURPLE },
    lines: [
      ['OBER', '«Goedemiddag! Wat mag het zijn?»', '1'],
      ['EMMA', '«Voor mij een thee, alstublieft.»', '2'],
      ['PIETER', '«En voor mij een kopje koffie met melk.»', '3'],
      ['OBER', '«Iets te eten erbij?»', '4'],
      ['EMMA', '«Ja, graag. Een broodje kaas.»', '5'],
      ['PIETER', '«En een stukje appeltaart. Hoeveel kost dat?»', '6'],
      ['OBER', '«Een stukje taart kost vier euro.»', '7'],
      ['PIETER', '«Prima. Mag ik de rekening? Ik trakteer!»', '8'],
      ['OBER', '«Natuurlijk. Dat is dan samen veertien euro.»', '9'],
      ['EMMA', '«Dank je wel, Pieter!»', '10'],
    ],
    legend: { label: 'PAR TROIS · 15 MIN', icon: 'FaUsers', color: 'accent1', lines: ['Lisez, puis **changez** les commandes.', '**Un diminutif** par personne !', 'Puis **changez de rôle**.'] },
    notes: "Dialogue et jeu de rôle ajoutés. Emma et Pieter se tutoient entre eux (Dank je wel), mais vouvoient le serveur (alstublieft). « Ik trakteer! » = c’est moi qui offre. Variante : chaque groupe reçoit une carte de café inventée au tableau (koffie € 3 · thee € 2,80 · broodje kaas € 5 · stukje taart € 4 · glaasje water € 2) et le serveur calcule l’addition.",
  });

  d.closing({
    cliff: 'Séance 19 : **la grande synthèse**. Les 20 fiches de grammaire en un coup d’œil, un grand quiz, un jeu de rôle qui combine tout — et des conseils pour l’**oral**.',
    homework: ['Apprendre la **règle d’or** et les 4 terminaisons des diminutifs (p. 66).', 'Revoir les **30 mots** Eten & drinken et Boodschappen (p. 81–82) avec de / het.', 'Écrire votre **liste de courses** (6 produits avec quantité) et un mini-dialogue au marché.', 'Relire les **10 fiches** de mise en situation (p. 92–100b).'],
    exit: 'Commandez au café pour vous et votre voisin, avec **deux diminutifs** et une question sur le **prix**.',
    notes: "Exemple de ticket de sortie : « Voor mij een kopje koffie en voor hem een glaasje water, alstublieft. Hoeveel kost een broodje kaas? »",
  });
};
