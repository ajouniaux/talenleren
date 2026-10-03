// Séance 15 — Het sollicitatiegesprek · Fiche 6 « L’entretien d’embauche » — Livret p. 76, 90, 97
exports.meta = {
  n: 15, slug: 'Het_sollicitatiegesprek', title: 'Het sollicitatiegesprek',
  subtitle: 'L’entretien d’embauche — comparer, pouvoir, vouloir, devoir',
  pages: 'Livret p. 76 · 90 · 97', img: 'cover_situaties', time: '6', sceneLabel: 'FICHE',
  block: 'Section 4 · Mises en situation — Fiche 6',
  coverNotes: "Séance 15. Objectifs : comparer avec -er dan et even … als (fiche A2-09 Groter dan, p. 76), éviter sept nouveaux faux-amis (Valse vrienden 2/3, p. 90), conjuguer et placer kunnen, willen, moeten (ajout : ces trois verbes sont le vocabulaire de la fiche 6), puis passer un entretien d’embauche en vouvoyant (fiche 6, p. 97). Image : un entretien à l’agence pour l’emploi.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Passer un **entretien d’embauche** : dire ce que je **sais faire**, ce que je **veux** apprendre, quand je **peux** commencer — et me **comparer**.',
    language: '//Wat kunt u goed? · Wanneer kunt u beginnen? · Ik kan goed met de computer werken · Ik heb meer ervaring dan… · even … als · beter · meer · minder//',
    skills: 'Comparer avec -er dan / even … als · conjuguer et placer kunnen, willen, moeten · éviter sept faux-amis · jouer un entretien (u)',
    agenda: [['Échauffement : la séance 14', 5], ['Groter dan (p. 76)', 15], ['Valse vrienden 2/3 (p. 90)', 10], ['Fiche 6 : vocabulaire', 5], ['Kunnen · willen · moeten', 15], ['Jalon 1 · Jalon 2', 20], ['Phrase-clé · entretien', 15], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. Les modaux (kunnen, willen, moeten) ne font pas l’objet d’une fiche de grammaire dans le livret, mais ils forment le vocabulaire de la fiche 6 : on les traite juste avant les Jalons. Si le temps manque, le bonus des deux candidats ou celui des faux-amis se fait à la maison.",
  });

  // ------------------------------------------------------------ Échauffement (rappel séance 14)
  d.exercise({
    title: 'Échauffement : la séance 14 en six phrases', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 14',
    instr: 'Seul · 5 min — Mettez au **perfectum**, traduisez ou trouvez le mot. Puis lisez à voix haute.',
    gap: 12,
    items: [
      'Ik werk in een fabriek. → [[Ik heb in een fabriek gewerkt.]]',
      'Pieter komt naar België. → [[Pieter is naar België gekomen.]]',
      'In 2019 studeer ik af. → [[In 2019 ben ik afgestudeerd.]]',
      'Je travaille ici depuis 2020. → [[Ik werk hier sinds 2020.]]',
      'cher · rare · la formation → [[duur · zeldzaam · de opleiding]]',
      'le bureau (le lieu) · le visage → [[het kantoor · het gezicht]]',
    ],
    traps: ['Déplacement, changement → **zijn**.', '//sinds// + **présent** : ça dure encore.', '//duur// = cher (dur = //hard//).', '%%het%% kantoor · %%het%% gezicht'],
    notes: "Rappel de la séance 14 : fiche A2-02 (perfectum), faux-amis 1/3 et fiche 2. Interroger un étudiant par phrase. Vérifier le devoir : le cv en néerlandais (deux ou trois volontaires lisent une rubrique).",
    notesA: "Phrase 2 : komen → toujours zijn. Phrase 3 : afstuderen, séparable, avec zijn (af-ge-studeerd). Phrase 4 : refuser « Ik heb hier sinds 2020 gewerkt » (= je n’y travaille plus).",
  });

  // ------------------------------------------------------------ A2-09 Groter dan (p. 76)
  d.blocks({
    title: 'Groter dan : comparer deux choses', tag: 'GRAMMATICA', page: 'Livret p. 76',
    intro: 'Plus : adjectif + **-er dan**. Égalité : **even … als**. **als** = pareil · **dan** = différent.',
    rows: [
      { label: 'plus … que', cells: [{ t: 'De trein', role: 'S' }, { t: 'is', role: 'V' }, { t: 'sneller', role: 'M', lab: 'adjectif + -er' }, { t: 'dan de bus.', role: 'X', lab: 'dan' }], fr: 'Le train est plus rapide que le bus.' },
      { label: 'r → -der', cells: [{ t: 'Parijs', role: 'S' }, { t: 'is', role: 'V' }, { t: 'duurder', role: 'M', lab: 'duur + d + er' }, { t: 'dan Gent.', role: 'X', lab: 'dan' }], fr: 'Paris est plus cher que Gand.' },
      { label: 'aussi … que', cells: [{ t: 'Jan', role: 'S' }, { t: 'is', role: 'V' }, { t: 'even groot', role: 'M', lab: 'even + adjectif' }, { t: 'als Piet.', role: 'X', lab: 'als' }], fr: 'Jan est aussi grand que Piet.' },
      { label: 'moins … que', cells: [{ t: 'De bus', role: 'S' }, { t: 'is', role: 'V' }, { t: 'minder snel', role: 'M', lab: 'minder + adjectif' }, { t: 'dan de trein.', role: 'X', lab: 'dan' }], fr: 'Le bus est moins rapide que le train.' },
    ],
    foot: { kind: 'trap', text: '//plus grand que// → //**groter dan**// (✗ //meer groot dan//, ✗ //groter als//). //meer// sert pour une **quantité** : //meer ervaring, meer geld//.' },
    notes: "Parties A et B de la fiche A2-09 (images : le train et le bus, l’homme devant sa note et les billets). Ligne 4 (minder + adjectif = moins … que) : ajout utile, absent du livret. « Groter als » s’entend beaucoup à l’oral, même chez les néerlandophones, mais la norme est « groter dan ». Question : « Is Gent duurder dan Brussel? » — le verbe ouvre la question.",
  });

  d.cards({
    title: 'Former le comparatif : orthographe et irréguliers', tag: 'GRAMMATICA', page: 'Livret p. 76',
    perRow: 4, fSize: 20,
    cards: [
      { h: 'VOYELLE COURTE', color: 'accent2', f: 'dik → dikker', lines: ['On **double** la consonne.', '//snel → sneller//'] },
      { h: 'VOYELLE LONGUE', color: 'accent3', f: 'groot → groter', lines: ['**Une seule** voyelle.', '//laat → later//'] },
      { h: 'APRÈS -R', color: 'accent1', f: 'duur → duurder', lines: ['On ajoute **-der**.', '//zwaar → zwaarder//'] },
      { h: 'IRRÉGULIERS', color: '6E4A9E', f: 'goed → beter', lines: ['//veel → meer//', '//weinig → minder//', '//graag → liever//'] },
    ],
    foot: { kind: 'tip', label: 'als ou dan ?', text: '**=** → //even oud **als**// · **≠** → //ouder **dan**//. Moyen mnémotechnique : **d**an = **d**ifférent.' },
    notes: "Partie C de la fiche : les trois irréguliers goed → beter, veel → meer, weinig → minder ; on ajoute graag → liever (vu à la séance 12 : Ik heb de ochtend liever). L’orthographe suit la même logique que le pluriel et l’adjectif (séance 11) : voyelle courte → consonne double, voyelle longue → une seule voyelle. Devant un nom, le comparatif prend aussi le -e : een snellere trein, maar een groter huis (het + een).",
  });

  d.exercise({
    title: 'Oefening : -er dan of even … als?', tag: 'GRAMMATICA', page: 'Livret p. 76',
    instr: 'Seul · 5 min — Complétez avec le **comparatif** de l’adjectif ou avec **als / dan**.',
    gap: 18,
    items: [
      'Een auto is [[sneller]] dan een fiets. //(snel)//',
      'Dit hotel is [[duurder]] dan dat. //(duur)//',
      'Anna is even oud [[als]] Tom.',
      'Mijn Nederlands is [[beter]] dan vorig jaar. //(goed)//',
      'Zij verdient [[meer]] dan haar collega. //(veel)//',
      'Deze bloem is [[mooier]] dan die. //(mooi)//',
    ],
    aside: { label: 'MÉMO', icon: 'FaLightbulb', lines: ['adjectif + **-er** + **dan**', '**even** + adjectif + **als**', '//goed → beter · veel → meer//'] },
    traps: ['2 : //duur → duur**d**er// (après r).', '3 : égalité → **als**.', '4 et 5 : irréguliers **beter**, **meer**.', '1 : //snel → sne**ll**er//.'],
    notes: "Exercice de la fiche A2-09 (p. 76). Faire lire chaque phrase complète à voix haute.",
    notesA: "Phrase 6 : mooi → mooier (pas de changement d’orthographe). Phrase 5 : « meer » sans nom = gagner plus. Faire produire l’inverse : Een fiets is minder snel dan een auto · Tom is even oud als Anna.",
  });

  d.exercise({
    title: 'Deux candidats : qui choisir ?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Par deux · 5 min — Comparez **Lucas** et **Julie** (la candidate de la séance 14) avec //-er dan · even … als · meer · minder · beter//.',
    gap: 16,
    items: [
      'Julie heeft [[meer]] ervaring [[dan]] Lucas.',
      'Lucas is [[even]] oud [[als]] Julie.',
      'Julie spreekt [[meer]] talen dan Lucas.',
      'Het Nederlands van Julie is [[beter]] dan dat van Lucas.',
      'Lucas heeft [[minder]] ervaring dan Julie.',
      'Julie vraagt een [[hoger]] loon dan Lucas. //(hoog)//',
    ],
    aside: { label: 'LES CANDIDATS', icon: 'FaUsers', lines: ['**Lucas** : 29 jaar · 3 jaar ervaring · 2 talen · Nederlands A1 · vraagt 2.400 euro', '**Julie** : 29 jaar · 7 jaar ervaring · 3 talen · Nederlands A2 · vraagt 2.900 euro'] },
    traps: ['//meer// + nom : //meer **ervaring**, meer **talen**//.', '//een hoger loon// : %%het%% loon + een → pas de -e.', '//even oud **als**// : égalité.'],
    notes: "Exercice ajouté : Lucas et Julie sont des candidats fictifs (Julie : cv de la séance 14, diplômée en 2019, au travail depuis 2019). Phrase 4 : « dat van Lucas » = celui de Lucas (dat remplace het Nederlands).",
    notesA: "Prolongement oral : « Wie kiest u? Waarom? » — « Ik kies Julie, want ze heeft meer ervaring. » / « Ik kies Lucas, want hij is goedkoper. » Phrase 6 : hoog → hoger (une seule o, la syllabe reste ouverte : ho-ger).",
  });

  // ------------------------------------------------------------ Valse vrienden 2/3 (p. 90)
  d.pairs({
    title: 'Valse vrienden 2/3 : les faux-amis 8 à 14', tag: 'FAUX-AMIS', page: 'Livret p. 90',
    perSlide: 4,
    pairs: [
      { a: { img: 'ff_rij', nl: 'de rij', fr: 'la file (d’attente)', note: 'des personnes l’une derrière l’autre' }, b: { img: 'ff_file', nl: 'de file', fr: 'l’embouteillage', note: 'des voitures bloquées ≠ la file' } },
      { a: { img: 'ff_gewoon', nl: 'gewoon', fr: 'ordinaire, normal', note: 'habituel, sans rien de spécial' }, b: { img: 'ff_ordinair', nl: 'ordinair', fr: 'vulgaire', note: 'grossier, sans manières ≠ ordinaire' } },
      { a: { img: 'ff_zacht', nl: 'zacht', fr: 'doux, mou', note: 'agréable au toucher' }, b: { img: 'ff_moe', nl: 'moe', fr: 'fatigué', note: 'on a besoin de dormir ≠ mou' } },
      { a: { img: 'ff_spel', nl: 'het spel', fr: 'le jeu, la partie', note: 'on joue : een spelletje kaarten' }, b: { img: 'ff_partij', nl: 'de partij', fr: 'le lot', note: 'een partij cacaobonen' } },
      { a: { img: 'ff_bibliotheek', nl: 'de bibliotheek', fr: 'la bibliothèque (le lieu)', note: 'on y emprunte des livres' }, b: { img: 'ff_boekenkast', nl: 'de boekenkast', fr: 'la bibliothèque (le meuble)', note: 'le meuble à livres' } },
      { a: { img: 'ff_winkel', nl: 'de winkel', fr: 'le magasin', note: 'on y achète' }, b: { img: 'ff_magazijn', nl: 'het magazijn', fr: 'l’entrepôt, la réserve', note: 'on y stocke ≠ le magasin' } },
      { a: { img: 'ff_voeding', nl: 'de voeding', fr: 'l’alimentation', note: 'ce que l’on mange' }, b: { img: 'ff_alimentatie', nl: 'de alimentatie', fr: 'la pension alimentaire', note: 'l’argent versé après un divorce' } },
    ],
    notes: "Lire chaque paire, faire répéter avec l’article, demander une phrase. Compléments : « in de file staan » = être dans les embouteillages (quotidien en Belgique) ; « gewoon » veut aussi dire « simplement » (Ik ben gewoon moe) ; un spelletje = un petit jeu (diminutif en -je → het). Nuance à signaler sur « de partij » : le livret donne « le lot » (een partij cacaobonen), mais le mot désigne aussi le parti politique, la partie dans un contrat et même une partie de jeu (een partij schaak = une partie d’échecs). Le vrai piège : « une partie » au sens de « un morceau » = een deel.",
  });

  d.exercise({
    title: 'Faux-amis : choisissez le bon mot', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul · 5 min — Choisissez le bon mot, puis lisez la phrase correcte à voix haute.',
    cols: 2, gap: 14,
    items: [
      'Op de E19 staat elke ochtend een lange <<file>> / {{rij}}.',
      'Aan de kassa wacht ik in een lange {{file}} / <<rij>>.',
      'Het is een <<gewone>> / {{ordinaire}} dag: niets bijzonders.',
      'Hij boert aan tafel: hij is echt {{gewoon}} / <<ordinair>>.',
      'Na tien uur werken ben ik heel <<moe>> / {{zacht}}.',
      'Ik leen een boek in de <<bibliotheek>> / {{boekenkast}}.',
      'Wij kopen brood in {{het magazijn}} / <<de winkel>>.',
      'Na de scheiding betaalt hij <<alimentatie>> / {{voeding}}.',
    ],
    traps: ['^^de^^ file = l’**embouteillage** · ^^de^^ rij = la **file**.', '//moe// = fatigué (mou = //zacht//).', '//gewoon// = normal · //ordinair// = vulgaire.', '%%het%% magazijn = l’entrepôt.'],
    notes: "Exercice ajouté : réemploi des paires 8 à 14 (la paire spel / partij se travaille à l’oral : « We spelen een spelletje »). La E19 relie Bruxelles et Anvers : embouteillages garantis le matin.",
    notesA: "Phrase 3 : « een gewone dag » (de dag → -e). Faire traduire chaque phrase en français pour vérifier le sens.",
  });

  // ------------------------------------------------------------ Fiche 6 L’entretien d’embauche (p. 97)
  d.table({
    title: 'Fiche 6 : L’entretien d’embauche — vocabulaire', tag: 'MISE EN SITUATION', page: 'Livret p. 97',
    intro: 'Nouveau vocabulaire du **Jalon 1** (questions) et du **Jalon 2** (réponses). Noms avec leur article.',
    headers: ['JALON 1 · NL', 'FRANÇAIS', 'JALON 2 · NL', 'FRANÇAIS'],
    colW: [2.4, 3.4, 2.9, 3.43], boldCol: 0,
    rows: [
      ['kunnen', 'pouvoir, savoir (faire)', '**meteen**', 'tout de suite'],
      ['willen', 'vouloir', '^^de^^ **taak** · taken', 'la tâche · les tâches'],
      ['moeten', 'devoir', '^^de^^ **computer**', 'l’ordinateur'],
      ['leren', 'apprendre', '%%het%% **bestuur**', 'la direction, l’administration'],
      ['beginnen', 'commencer', '**aangezien**', 'étant donné que, comme'],
      ['goed', 'bien, bon', '**organiseren**', 'organiser'],
      ['graag', 'volontiers (aimer + verbe)', '**communiceren**', 'communiquer'],
      ['nog', 'encore', '**bijleren**', 'apprendre (en plus)'],
      ['vanaf · maandag', 'à partir de · lundi', '**kennen**', 'connaître'],
    ],
    foot: 'Pour le **travail administratif** : ^^de^^ administratie. %%het%% bestuur = la **direction** ou l’administration **publique** (//het openbaar bestuur//).',
    notes: "Ajout : kennen (connaître), nécessaire pour le Jalon 2 (Je ne connais pas encore toutes les tâches). Approximation du livret : « het bestuur » ne correspond pas bien à « l’administration » de la phrase 2 du Jalon 2 (= le travail administratif) ; on traduit par « de administratie » et on garde « het bestuur » pour la direction d’une organisation ou le secteur public. Coquille du livret : le sommaire de la section 4 (page d’ouverture, avant la p. 92) numérote cette situation « 05 » ; dans le livret, c’est bien la fiche 6.",
  });

  d.table({
    title: 'Kunnen · willen · moeten : la conjugaison', tag: '+ BONUS', page: 'Hors syllabus · fiche 6',
    intro: 'Les trois verbes clés de l’entretien. **Irréguliers** au singulier : à apprendre par cœur.',
    headers: ['PERSONNE', 'KUNNEN · pouvoir, savoir', 'WILLEN · vouloir', 'MOETEN · devoir'],
    colW: [2.6, 3.4, 3.0, 3.13], boldCol: 0, align: ['left', 'center', 'center', 'center'],
    rows: [
      ['ik', 'kan', 'wil', 'moet'],
      ['jij · je', 'kunt · kan', 'wilt · wil', 'moet'],
      ['u', 'kunt · kan', 'wilt · wil', 'moet'],
      ['hij · zij · het', 'kan', 'wil', 'moet'],
      ['wij · jullie · zij', 'kunnen', 'willen', 'moeten'],
      ['inversion', 'kun je? · kunt u?', 'wil je? · wilt u?', 'moet je? · moet u?'],
    ],
    foot: 'Pas de **-t** à //ik kan, hij kan, ik wil, hij wil// ! · //kun je?// : le -t tombe devant **je** (mais //kunt u?//).',
    notes: "Ajout hors syllabus, indispensable pour la fiche 6 (kunnen, willen, moeten figurent dans le vocabulaire du Jalon 1). Avec jij et u, les deux formes sont correctes (jij kunt / jij kan, u kunt / u kan) ; à l’écrit formel, préférer « kunt u ». Comme pour les autres verbes, le -t tombe quand je / jij suit le verbe : kun je, wil je.",
  });

  d.blocks({
    title: 'Modal en 2e position, infinitif à la fin', tag: '+ BONUS', page: 'Hors syllabus · fiche 6',
    intro: 'Comme //gaan// (séance 12) : le **modal** conjugué en **2e position**, l’**infinitif** tout à la **fin**.',
    rows: [
      { label: 'kunnen', cells: [{ t: 'Ik', role: 'S' }, { t: 'kan', role: 'V', lab: '2 · modal' }, { t: 'goed', role: 'M', lab: 'adverbe' }, { t: 'met de computer', role: 'O', lab: 'complément' }, { t: 'werken.', role: 'F', lab: 'fin · infinitif' }], fr: 'Je sais bien travailler avec l’ordinateur.' },
      { label: 'willen', cells: [{ t: 'Ik', role: 'S' }, { t: 'wil', role: 'V' }, { t: 'graag', role: 'M', lab: 'adverbe' }, { t: 'Nederlands', role: 'O' }, { t: 'leren.', role: 'F', lab: 'infinitif' }], fr: 'J’aimerais apprendre le néerlandais.' },
      { label: 'moeten', cells: [{ t: 'Wat', role: 'Q' }, { t: 'moet', role: 'V' }, { t: 'u', role: 'S' }, { t: 'nog', role: 'M', lab: 'encore' }, { t: 'leren?', role: 'F', lab: 'infinitif' }], fr: 'Que devez-vous encore apprendre ?' },
      { label: 'négation', cells: [{ t: 'Kunt', role: 'V' }, { t: 'u', role: 'S' }, { t: 'maandag', role: 'T' }, { t: 'niet', role: 'N' }, { t: 'beginnen?', role: 'F', lab: 'infinitif' }], fr: 'Ne pouvez-vous pas commencer lundi ?' },
    ],
    foot: { kind: 'trap', text: '//Je **sais** bien travailler, je **sais** nager// → **kunnen** : //Ik **kan** zwemmen.// **weten** = savoir **une information** (//Ik weet het niet//) · **kennen** = connaître (//Ik ken de taken//).' },
    notes: "Ligne 4 : niet se place devant l’infinitif final, après le complément de temps. Insister sur le trio savoir / connaître : kunnen (une compétence), weten (une information), kennen (une personne, un lieu, une chose qu’on connaît). « J’aimerais » se dit très souvent « Ik wil graag » (ou « Ik zou graag … willen », plus poli).",
  });

  d.exercise({
    title: 'Kunnen, willen of moeten ? À l’entretien', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul · 5 min — Ajoutez le **modal** indiqué et réécrivez la phrase. L’**infinitif** va à la fin !',
    gap: 12,
    items: [
      'Ik werk goed met Excel. //(kunnen)// → [[Ik kan goed met Excel werken.]]',
      'Begint u maandag? //(kunnen)// → [[Kunt u maandag beginnen?]]',
      'Pieter leert nog veel. //(moeten)// → [[Pieter moet nog veel leren.]]',
      'Wij werken in een team. //(willen)// → [[Wij willen in een team werken.]]',
      'Spreek je op het werk Nederlands? //(moeten)// → [[Moet je op het werk Nederlands spreken?]]',
      'Ik begin vandaag niet. //(kunnen)// → [[Ik kan vandaag niet beginnen.]]',
    ],
    traps: ['**Un seul** verbe conjugué : le modal.', 'Infinitif **tout à la fin**, après //niet//.', '//kunt u?// · //moet je?//'],
    notes: "Exercice ajouté : transformation systématique. Variante orale : le professeur dit la phrase, l’étudiant ajoute le modal sans regarder.",
    notesA: "Phrase 2 : accepter « Kan u maandag beginnen? » à l’oral (très fréquent en Belgique). Phrase 5 : « Moet je Nederlands spreken op het werk? » s’entend aussi, mais on garde l’infinitif à la fin. Phrase 6 : refuser « Ik kan niet beginnen vandaag ».",
  });

  d.table({
    title: 'Fiche 6 · Jalon 1 (A1) : les questions d’entretien', tag: 'JALON 1', page: 'Livret p. 97',
    intro: 'Seul · 10 min — Traduisez. **I** interrogative · **N** négative. Le recruteur **vouvoie** : //u//.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 5.0, 5.63], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'I', 'Que savez-vous bien faire ?', '[[Wat kunt u goed?]]'],
      ['2', 'I', 'Qu’aimeriez-vous apprendre ?', '[[Wat wilt u graag leren?]]'],
      ['3', 'I', 'Quand pouvez-vous commencer ?', '[[Wanneer kunt u beginnen?]]'],
      ['4', 'N', 'Ne pouvez-vous pas commencer lundi ?', '[[Kunt u maandag niet beginnen?]]'],
      ['5', 'I', 'Que devez-vous encore apprendre ?', '[[Wat moet u nog leren?]]'],
    ],
    foot: 'Modal en **2e position** (en **tête** dans une question oui / non), **infinitif à la fin**. //kunnen// peut s’employer seul : //Wat kunt u goed?//',
    notes: "Phrase 1 : « savoir faire » = kunnen (piège : pas weten).",
    notesA: "Variantes acceptables : 1 « Wat kunt u goed doen? » ou « Waar bent u goed in? » ; 2 « Wat zou u graag leren? » (plus poli) ; 3 « Vanaf wanneer kunt u beginnen? » ; 4 « Kunt u niet vanaf maandag beginnen? » ; à l’oral, « kan u » (Belgique). Refuser « Wat weet u goed doen? » et « Kunt u niet beginnen maandag? ».",
  });

  d.table({
    title: 'Fiche 6 · Jalon 2 (A2) : répondre à l’entretien', tag: 'JALON 2', page: 'Livret p. 97',
    intro: 'Seul · 10 min — Traduisez. **D** déclarative · **N** négative. Attention à **kunnen** + infinitif, **graag** et **aangezien**.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 4.7, 5.93], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'D', 'Je sais bien travailler avec l’ordinateur.', '[[Ik kan goed met de computer werken.]]'],
      ['2', 'D', 'J’ai deux ans d’expérience dans l’administration.', '[[Ik heb twee jaar ervaring in de administratie.]]'],
      ['3', 'D', 'J’aime organiser mon travail et communiquer avec l’équipe.', '[[Ik organiseer graag mijn werk en ik communiceer graag met het team.]]'],
      ['4', 'N', 'Je ne connais pas encore toutes les tâches, mais j’apprends vite.', '[[Ik ken nog niet alle taken, maar ik leer snel.]]'],
      ['5', 'D', 'Comme j’ai de l’expérience, je peux commencer tout de suite.', '[[Aangezien ik ervaring heb, kan ik meteen beginnen.]]'],
    ],
    foot: '//aimer + verbe// → verbe + **graag** · //connaître// → **kennen** · //deux **ans**// → //twee **jaar**// (singulier après un nombre).',
    notes: "Coquille du livret (mise en page) : les cases « néerlandais » des phrases 3 et 4 sont fusionnées ; prévoir une ligne par phrase. Phrase 2 : voir la remarque sur « het bestuur » (diapositive du vocabulaire).",
    notesA: "Variantes acceptables : 1 « Ik kan goed met computers werken » ; 2 « …in het (openbaar) bestuur » s’il s’agit du secteur public ; 3 « Ik organiseer mijn werk graag en communiceer graag met de ploeg » ou « Ik hou ervan om mijn werk te organiseren en met het team te communiceren » (plus avancé) ; 4 « …maar ik leer vlug » ; 5 « Omdat ik ervaring heb, kan ik direct / onmiddellijk beginnen ». Refuser « Ik weet goed werken », « Ik weet nog niet alle taken » et « Aangezien ik heb ervaring ».",
  });

  d.blocks({
    title: 'Phrase-clé : convaincre en entretien', tag: 'GRAMMATICA', page: 'Livret p. 97',
    intro: 'Quatre phrases qui servent **dans chaque entretien** : regardez où va le **verbe**.',
    rows: [
      { label: 'savoir-faire', cells: [{ t: 'Ik', role: 'S' }, { t: 'kan', role: 'V' }, { t: 'goed', role: 'M', lab: 'adverbe' }, { t: 'met de computer', role: 'O', lab: 'complément' }, { t: 'werken.', role: 'F', lab: 'infinitif' }], fr: 'Je sais bien travailler avec l’ordinateur.' },
      { label: 'aimer faire', cells: [{ t: 'Ik', role: 'S' }, { t: 'organiseer', role: 'V' }, { t: 'graag', role: 'M', lab: '= j’aime' }, { t: 'mijn werk.', role: 'O' }], fr: 'J’aime organiser mon travail.' },
      { label: 'maar', cells: [{ t: 'Ik', role: 'S' }, { t: 'ken', role: 'V' }, { t: 'nog niet', role: 'N', lab: 'pas encore' }, { t: 'alle taken,', role: 'O' }, { t: 'maar', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'leer', role: 'V' }, { t: 'snel.', role: 'M', lab: '' }], fr: '… mais j’apprends vite. → //maar// : ordre normal' },
      { label: 'aangezien', cells: [{ t: 'Aangezien ik ervaring heb,', role: 'X', lab: 'position 1 = la subordonnée' }, { t: 'kan', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'meteen', role: 'T' }, { t: 'beginnen.', role: 'F', lab: 'infinitif' }], fr: 'Comme j’ai de l’expérience, je peux commencer tout de suite.' },
    ],
    foot: { kind: 'trap', text: '//J’**aime** organiser// → //Ik organiseer **graag**// (✗ //Ik hou organiseren//). //Aangezien// fonctionne comme //omdat// : verbe **à la fin** de la subordonnée, puis //**kan ik**//.' },
    notes: "Aangezien (étant donné que) = omdat, en un peu plus soutenu : idéal en entretien. Maar, want, en : ordre normal (sujet + verbe). Faire varier : « Aangezien ik direct beschikbaar ben, kan ik maandag beginnen. »",
  });

  d.steps({
    title: 'Jeu de rôle : l’entretien d’embauche', tag: 'MISE EN SITUATION', page: 'Livret p. 97',
    intro: 'Par deux · 10 min — A = recruteur, B = candidat (votre cv). **Vouvoiement** : //Goedemorgen, gaat u zitten.// Puis on inverse.',
    steps: [
      { h: 'Savoir-faire', color: 'accent1', lines: ['A : //Wat kunt u goed?//', 'B : //Ik kan goed …//'] },
      { h: 'Expérience', color: 'accent3', lines: ['A : //Hebt u ervaring?//', 'B : //Ik heb twee jaar in … gewerkt.//'] },
      { h: 'Comparer', color: '6E4A9E', lines: ['A : //Waarom moeten we u kiezen?//', 'B : //Ik heb meer ervaring dan…//'] },
      { h: 'Début', color: 'tx2', lines: ['A : //Wanneer kunt u beginnen?//', 'B : //Aangezien …, kan ik meteen beginnen.//'] },
    ],
    foot: { kind: 'keep', label: 'Critères', text: '**u** du début à la fin · **3 modaux** (kunnen, willen, moeten) avec l’infinitif à la fin · **1 comparatif** · **1 perfectum**.' },
    notes: "Groupes de trois : C observe et coche les critères. Pour la 2e passe, A ajoute une question négative du Jalon 1 (Kunt u maandag niet beginnen?) et une question avec moeten (Wat moet u nog leren?). Clôture possible : « Bedankt voor het gesprek. We bellen u volgende week. »",
  });

  d.closing({
    cliff: 'Séance 16 : **Op het werk.** Premier jour dans l’entreprise : se présenter aux collègues, dire dans quel **service** on travaille — et //iemand, niemand, iets, niets//.',
    homework: ['Apprendre **kunnen · willen · moeten** (tableau de conjugaison).', 'Écrire **5 phrases** pour votre entretien : //Ik kan… · Ik wil graag… · Ik moet nog…//', 'Écrire **4 comparaisons** : //-er dan · even … als · meer · beter//.', 'Revoir les **faux-amis 8 à 14** (p. 90).', 'Recopier les **Jalons 1 et 2** de la fiche 6, corrigés (p. 97).'],
    exit: 'Répondez : //Wat kunt u goed? · Wanneer kunt u beginnen?// — puis comparez-vous à un collègue avec **meer … dan**.',
    notes: "Ticket de sortie oral, par exemple : « Ik kan goed organiseren. Ik kan maandag beginnen. Ik heb meer ervaring dan mijn collega. »",
  });
};
