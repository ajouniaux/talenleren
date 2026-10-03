// Séance 14 — Mijn cv · Fiche 2 « Parler de son CV » — Livret p. 69, 89, 93
exports.meta = {
  n: 14, slug: 'Mijn_cv', title: 'Mijn cv',
  subtitle: 'Parler de son CV — le passé composé et les faux-amis (1/3)',
  pages: 'Livret p. 69 · 89 · 93', img: 'cover_grammatica', time: '2', sceneLabel: 'FICHE',
  block: 'Section 4 · Mises en situation — Fiche 2',
  coverNotes: "Séance 14. Objectifs : raconter un parcours au passé composé (fiche A2-02 Het perfectum, p. 69), démasquer sept faux-amis (Valse vrienden 1/3, p. 89), puis parler de son CV face à un recruteur (fiche 2, p. 93). Fil rouge : le CV de Julie, une candidate fictive, sert d’exemple pour le perfectum, la fiche et le jeu de rôle. Image : Emma et Pieter révisent ensemble.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Raconter mon **parcours** (études, diplôme, expérience, langues) au **passé composé** et répondre aux questions sur mon **cv**.',
    language: '//Ik heb drie jaar gewerkt · Ik ben in 2019 afgestudeerd · Welke opleiding volgt u? · Hebt u ervaring? · Sinds 2022 werk ik…// — hebben of zijn?',
    skills: 'Former le participe passé · choisir hebben ou zijn · éviter sept faux-amis · présenter son cv à un recruteur (jeu de rôle, u)',
    agenda: [['Échauffement : la séance 13', 5], ['Het perfectum (p. 69)', 25], ['Valse vrienden 1/3 (p. 89)', 10], ['Fiche 2 : vocabulaire · un cv', 10], ['Jalon 1 · Jalon 2', 20], ['Phrase-clé · jeu de rôle', 15], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. Le perfectum est le cœur de la séance : la fiche 2 (« J’ai obtenu mon diplôme en 2019… ») en a besoin. Si le temps manque, le bonus faux-amis se fait à la maison ; ne jamais sacrifier les deux Jalons ni le jeu de rôle.",
  });

  // ------------------------------------------------------------ Échauffement (rappel séance 13)
  d.exercise({
    title: 'Échauffement : la séance 13 en six phrases', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 13',
    instr: 'Seul · 5 min — Remplacez par un **pronom**, traduisez ou trouvez le mot avec son article.',
    gap: 12,
    items: [
      'Ik bel //de baas//. → Ik bel [[hem]].',
      'Ik help //mijn collega Sarah//. → Ik help [[haar]].',
      'Ik geef //de klanten// het contract. → Ik geef [[hun]] het contract.',
      'Cherchez-vous du travail ? → [[Zoekt u werk?]]',
      'Comme j’ai de l’expérience, je peux commencer demain. → [[Omdat ik ervaring heb, kan ik morgen beginnen.]]',
      'le salaire · l’usine · le client → [[het loon · de fabriek · de klant]]',
    ],
    traps: ['Pronom objet **après** le verbe.', '//hun// = **leur** (à eux).', '//Omdat// … verbe à la fin, **puis** //kan ik//.', '%%het%% loon · ^^de^^ fabriek'],
    notes: "Rappel de la séance 13 : fiche A2-04 (hem · haar · hun), fiche 1 (agence d’intérim) et thème 07 Werk & bedrijf. Interroger un étudiant par phrase. Puis vérifier le devoir : « 3 phrases sur votre expérience » (Ik heb ervaring in / als …).",
    notesA: "Transition : à la séance 13, la fiche 1 contenait déjà un passé composé, « Ik heb me ingeschreven ». Aujourd’hui, on apprend à le construire et on raconte tout son parcours au passé.",
  });

  // ------------------------------------------------------------ A2-02 Het perfectum (p. 69)
  d.blocks({
    title: 'Het perfectum : auxiliaire en 2e, participe à la fin', tag: 'GRAMMATICA', page: 'Livret p. 69',
    intro: '**hebben** ou **zijn** conjugué en **2e position** + **participe passé** tout à la **fin**.',
    rows: [
      { label: 'La phrase', cells: [{ t: 'Wij', role: 'S' }, { t: 'hebben', role: 'V', lab: '2 · auxiliaire' }, { t: 'de hele dag', role: 'T' }, { t: 'gewerkt.', role: 'F', lab: 'fin · participe' }], fr: 'Nous avons travaillé toute la journée.' },
      { label: 'hebben', cells: [{ t: 'Ik', role: 'S' }, { t: 'heb', role: 'V', lab: 'hebben' }, { t: 'de krant', role: 'O' }, { t: 'gelezen.', role: 'F', lab: 'participe' }], fr: 'J’ai lu le journal.' },
      { label: 'zijn', cells: [{ t: 'Zij', role: 'S' }, { t: 'is', role: 'V', lab: 'zijn' }, { t: 'ziek', role: 'X', lab: '' }, { t: 'geworden.', role: 'F', lab: 'participe' }], fr: 'Elle est tombée malade.' },
      { label: 'inversion', cells: [{ t: 'In 2019', role: 'T' }, { t: 'ben', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'afgestudeerd.', role: 'F', lab: 'participe' }], fr: 'En 2019, j’ai obtenu mon diplôme.' },
    ],
    foot: { kind: 'trap', text: 'Le français colle le participe à l’auxiliaire : //j’**ai travaillé** toute la journée//. Le néerlandais les **sépare** : //Wij **hebben** de hele dag **gewerkt**// (✗ //Wij hebben gewerkt de hele dag//).' },
    notes: "Partie A de la fiche A2-02 (« Wij hebben de hele dag gewerkt »). Même logique que gaan + infinitif (séance 12) : un verbe conjugué en 2e position, l’autre verbe à la fin. Ligne 4 : l’inversion fonctionne comme au présent (In 2019 ben ik…). Question : « Hebt u in België gewerkt? » — l’auxiliaire ouvre la question, le participe reste à la fin.",
  });

  d.cards({
    title: 'Le participe passé : ge- + radical + -t ou -d', tag: 'GRAMMATICA', page: 'Livret p. 69',
    perRow: 3,
    cards: [
      { h: '-T · ’T KOFSCHIP', color: 'accent2', f: 'werken → gewerkt', lines: ['Radical en **t k f s ch p**', '//maken → gemaakt//'] },
      { h: '-D · TOUS LES AUTRES', color: 'accent3', f: 'spelen → gespeeld', lines: ['Les autres radicaux', '//studeren → gestudeerd//'] },
      { h: 'IRRÉGULIERS EN -EN', color: 'accent1', f: 'lezen → gelezen', lines: ['À apprendre par cœur', '//drinken → gedronken//'] },
      { h: 'SÉPARABLES', color: 'accent4', f: 'aankomen → aangekomen', lines: ['**ge-** au milieu', '//afstuderen → afgestudeerd//'] },
      { h: 'SANS GE-', color: 'tx2', f: 'vertrekken → vertrokken', lines: ['Préfixes **be- ver- her- ont-**', '//betalen → betaald//'] },
      { h: 'LES INDISPENSABLES', color: '6E4A9E', f: 'zijn → geweest', lines: ['//hebben → gehad//', '//doen → gedaan//', '//gaan → gegaan//'] },
    ],
    notes: "Règle du livret : ge- + radical + -t ou -d (ge-werk-t, ge-speel-d). Le moyen mnémotechnique « ’t kofschip » : si le radical se termine par t, k, f, s, ch ou p → -t, sinon → -d. À l’oral, -t et -d se prononcent pareil [t] : la règle sert à l’écrit. Cas particuliers : radical déjà en -t ou -d → pas de double lettre (praten → gepraat, antwoorden → geantwoord) ; infinitif en -ven / -zen → -d (leven → geleefd, reizen → gereisd). Sans ge- : aussi les préfixes ge- et er- (gebeuren → gebeurd, erkennen → erkend) ; vertellen → verteld. Les irréguliers de la fiche : lezen, drinken, gaan, worden, zijn, blijven, komen ; de l’exercice : zien, eten, vertrekken.",
  });

  d.compare({
    title: 'Hebben of zijn ?', tag: 'GRAMMATICA', page: 'Livret p. 69',
    left: { h: 'hebben : la plupart des verbes', color: 'accent2', icon: 'FaBook', items: ['//Ik **heb** de krant **gelezen**.//', '//Zij **heeft** koffie **gedronken**.//', '//Wij **hebben** in Gent **gewoond**.//', '//Hij **heeft** een opleiding **gevolgd**.//'] },
    right: { h: 'zijn : A → B · changement', color: 'accent4', icon: 'FaRoute', items: ['//Ik **ben** naar Gent **gegaan**.// (A → B)', '//Zij **is** ziek **geworden**.// (changement)', 'Toujours **zijn** : //ik ben **geweest** · gebleven · gekomen · geworden//', '//Ik **ben** in 2019 **afgestudeerd**.//'] },
    foot: { kind: 'trap', text: '//J’**ai été** malade// → //Ik **ben** ziek **geweest**// (✗ //Ik heb ziek geweest//). //J’**ai commencé**// → //Ik **ben** begonnen// : là où le français dit « avoir », le néerlandais peut dire **zijn**.' },
    notes: "Partie B de la fiche (images : le journal, le café, la gare, l’homme malade) et encadré « Toujours zijn » : zijn, blijven, komen, worden. Nuance utile : un verbe de mouvement sans destination prend hebben (Ik heb gefietst), avec une destination il prend zijn (Ik ben naar huis gefietst). Afstuderen (= finir ses études) est un changement d’état → zijn. Beginnen aussi : Ik ben begonnen.",
  });

  d.exercise({
    title: 'Oefening : hebben of zijn + participe', tag: 'GRAMMATICA', page: 'Livret p. 69',
    instr: 'Seul · 5 min — Complétez avec **hebben** ou **zijn** conjugué + le **participe passé** du verbe.',
    gap: 18,
    items: [
      'Zij [[heeft]] veel [[gestudeerd]]. //(studeren)//',
      'De trein [[is]] al [[vertrokken]]. //(vertrekken)//',
      'Ik [[heb]] hem [[gezien]]. //(zien)//',
      'Hij [[is]] thuis [[gebleven]]. //(blijven)//',
      'Wij [[zijn]] om 8 uur [[aangekomen]]. //(aankomen)//',
      'Jullie [[hebben]] pizza [[gegeten]]. //(eten)//',
    ],
    aside: { label: 'MÉMO', icon: 'FaLightbulb', lines: ['**zijn** : déplacement A → B, changement', 'Toujours **zijn** : //zijn, blijven, komen, worden//', '**hebben** : tous les autres'] },
    traps: ['1 : //-eren// → //ge…eer**d**//.', '2 : **ver-** → pas de ge- ; départ → **zijn**.', '4 : //blijven// → toujours **zijn**.', '5 : séparable → //aan**ge**komen//.'],
    notes: "Exercice de la fiche A2-02 (p. 69). Faire lire chaque phrase complète à voix haute.",
    notesA: "Phrase 2 : vertrekken = quitter un lieu (déplacement) → zijn. Phrase 3 : zien → gezien (irrégulier). Phrase 6 : eten → gegeten (le ge- est doublé : ge-geten).",
  });

  d.exercise({
    title: 'Le parcours de Julie au perfectum', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Par deux · 5 min — Mettez le parcours de **Julie** (une candidate) au **passé composé**. Attention à **hebben / zijn** et à l’**inversion** !',
    gap: 5, qGap: 14, size: 18,
    items: [
      { q: 'Julie studeert drie jaar in Bergen.', a: 'Julie heeft drie jaar in Bergen gestudeerd.' },
      { q: 'In 2018 gaat ze naar Londen.', a: 'In 2018 is ze naar Londen gegaan.' },
      { q: 'Ze doet daar drie maanden stage.', a: 'Ze heeft daar drie maanden stage gedaan.' },
      { q: 'In 2019 studeert ze af.', a: 'In 2019 is ze afgestudeerd.' },
      { q: 'Daarna werkt ze in een transportbedrijf.', a: 'Daarna heeft ze in een transportbedrijf gewerkt.' },
      { q: 'In 2022 wordt ze office manager.', a: 'In 2022 is ze office manager geworden.' },
    ],
    traps: ['Inversion : //In 2018 **is ze**…//', 'Séparable : //af**ge**studeerd//.', '//doen → gedaan// (irrégulier).', 'A → B, changement → **zijn**.'],
    notes: "Exercice ajouté : Julie est une candidate fictive ; son cv est projeté plus loin (fiche 2) et sert au jeu de rôle. « Stage doen » = faire un stage (Belgique ; aux Pays-Bas : stage lopen).",
    notesA: "Faire raconter ensuite le parcours de Julie de mémoire, sans regarder : « Julie heeft … gestudeerd, in 2018 is ze … ». Phrase 6 : worden → geworden + zijn (changement).",
  });

  // ------------------------------------------------------------ Valse vrienden 1/3 (p. 89)
  d.pairs({
    title: 'Valse vrienden 1/3 : les faux-amis 1 à 7', tag: 'FAUX-AMIS', page: 'Livret p. 89',
    perSlide: 4,
    pairs: [
      { a: { img: 'ff_bureau', nl: 'het bureau', fr: 'le bureau (le meuble)', note: 'la table de travail' }, b: { img: 'ff_kantoor', nl: 'het kantoor', fr: 'le bureau (le lieu)', note: 'la pièce où l’on travaille' } },
      { a: { img: 'ff_raar', nl: 'raar', fr: 'bizarre, étrange', note: '≠ rare' }, b: { img: 'ff_zeldzaam', nl: 'zeldzaam', fr: 'rare', note: 'qu’on voit peu souvent' } },
      { a: { img: 'ff_duur', nl: 'duur', fr: 'cher', note: 'le prix est élevé ≠ dur' }, b: { img: 'ff_hard', nl: 'hard', fr: 'dur', note: 'solide, qui ne cède pas' } },
      { a: { img: 'ff_brutaal', nl: 'brutaal', fr: 'insolent, effronté', note: 'manque de respect ≠ brutal' }, b: { img: 'ff_ruw', nl: 'ruw', fr: 'brutal, rude', note: 'violent dans les gestes' } },
      { a: { img: 'ff_formatie', nl: 'de formatie', fr: 'la composition, le groupe', note: 'un groupe formé (musique, gouvernement)' }, b: { img: 'ff_opleiding', nl: 'de opleiding', fr: 'la formation', note: 'les études, l’apprentissage' } },
      { a: { img: 'ff_gezicht', nl: 'het gezicht', fr: 'le visage', note: 'la face de la tête' }, b: { img: 'ff_figuur', nl: 'het figuur', fr: 'la silhouette', note: 'la forme du corps ≠ la figure' } },
      { a: { img: 'ff_route', nl: 'de route', fr: 'l’itinéraire, le trajet', note: 'le chemin prévu de A à B' }, b: { img: 'ff_weg', nl: 'de weg', fr: 'la route', note: 'la voie où l’on roule' } },
    ],
    notes: "Lire chaque paire, faire répéter le mot néerlandais avec son article, demander une phrase avec chacun. Compléments utiles : de duur = la durée (de duur van de cursus) ; hard = aussi « vite, fort » (hard werken = travailler dur, hard rijden = rouler vite) ; figuur : de ou het (les deux existent ; « een goed figuur » = une belle silhouette). En Belgique, on entend « op het bureau » pour « au bureau (lieu) » : calque du français, le standard est « op kantoor ». La formation professionnelle = de opleiding : mot-clé de la fiche 2 !",
  });

  d.exercise({
    title: 'Faux-amis : choisissez le bon mot', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul · 5 min — Choisissez le bon mot, puis lisez la phrase correcte à voix haute.',
    cols: 2, gap: 14,
    items: [
      'Mijn laptop ligt op mijn <<bureau>> / {{kantoor}}.',
      'Een Ferrari is heel <<duur>> / {{hard}}.',
      'Een steen is {{duur}} / <<hard>>.',
      'Een blauwe banaan? Dat is <<raar>> / {{zeldzaam}}!',
      'Die vogel zie je bijna nooit: hij is {{raar}} / <<zeldzaam>>.',
      'Ik volg een <<opleiding>> / {{formatie}} tot verpleegkundige.',
      'Het kind steekt zijn tong uit: het is <<brutaal>> / {{ruw}}.',
      'Ze heeft een mooi <<gezicht>> / {{figuur}}: mooie ogen en een mooie mond.',
    ],
    traps: ['%%het%% bureau = le **meuble** · %%het%% kantoor = le **lieu**.', '//duur// = cher · //hard// = dur.', '//raar// = bizarre · //zeldzaam// = rare.', '//een opleiding volgen// = suivre une formation.'],
    notes: "Exercice ajouté : réemploi des sept paires (la paire route / weg se travaille à l’oral : « De gps kiest de route ; op de weg rijden veel auto’s »). Faire traduire chaque phrase en français pour vérifier le sens.",
    notesA: "Phrase 8 : « een mooi gezicht » (het gezicht + een → pas de -e), « een mooie mond » (de mond). Phrase 7 : uitsteken est séparable (steekt … uit).",
  });

  // ------------------------------------------------------------ Fiche 2 Parler de son CV (p. 93)
  d.table({
    title: 'Fiche 2 : Parler de son CV — vocabulaire', tag: 'MISE EN SITUATION', page: 'Livret p. 93',
    intro: 'Nouveau vocabulaire du **Jalon 1** (questions) et du **Jalon 2** (réponses). Noms avec leur article.',
    headers: ['JALON 1 · NL', 'FRANÇAIS', 'JALON 2 · NL', 'FRANÇAIS'],
    colW: [2.7, 3.0, 3.3, 3.13], boldCol: 0,
    rows: [
      ['^^de^^ identiteit', 'l’identité', '%%het%% **diploma**', 'le diplôme'],
      ['^^de^^ ervaring', 'l’expérience', '**afstuderen**', 'finir ses études, être diplômé'],
      ['^^de^^ opleiding', 'la formation', '^^de^^ **taal** · talen', 'la langue · les langues'],
      ['^^de^^ rubriek', 'la rubrique', '^^de^^ **klant**', 'le client'],
      ['volgen', 'suivre', '%%het%% **bedrijf**', 'l’entreprise'],
      ['werken · spreken', 'travailler · parler', '^^de^^ **onderneming**', 'l’entreprise (soutenu)'],
      ['%%het%% beroep', 'le métier, la profession', '**verantwoordelijk** voor', 'responsable de'],
      ['%%het%% cv', 'le CV', '%%het%% **buitenland**', 'l’étranger'],
    ],
    foot: '//afstuderen// est **séparable** et prend **zijn** : //Ik studeer in juni af.// · //Ik **ben** in 2019 af**ge**studeerd.//',
    notes: "Le livret liste « talen » au pluriel sans article : de taal · de talen. Ajout : het cv (on dit « het cv », prononcé [sé-vé]). Coquille du livret (mise en page) : la liste du Jalon 1 commence par un « · » isolé. En Belgique, on dit aussi « de firma » pour l’entreprise ; « de onderneming » est plus soutenu.",
  });

  d.exhibit({
    title: 'Un cv à la loupe : le cv de Julie', tag: '+ BONUS', page: 'Hors syllabus',
    label: 'CV', docTitle: 'Julie Lambert — curriculum vitae',
    lines: [
      ['IDENTITEIT', 'Julie Lambert · geboren in 1997 · woont in Bergen'],
      ['OPLEIDING', '2016 – 2019 · bachelor Office Management in Bergen'],
      ['STAGE', '2018 · drie maanden stage in Londen'],
      ['ERVARING', '2019 – 2022 · secretaresse in een transportbedrijf'],
      ['NU', 'sinds 2022 · office manager in Brussel, verantwoordelijk voor een team van vijf personen'],
      ['TALEN', 'Frans (moedertaal) · Engels (goed) · Nederlands (A2)'],
    ],
    side: { label: 'À REPÉRER', icon: 'FaSearch', lines: ['Les **rubrieken** du cv.', 'C’est fini → **perfectum** : //Ze heeft in Londen stage gedaan.//', 'Ça dure → **sinds** + présent : //Sinds 2022 werkt ze in Brussel.//'] },
    notes: "Document ajouté (personne fictive) : un cv simple, à la belge, qui reprend le vocabulaire de la fiche (identiteit, opleiding, ervaring, talen, verantwoordelijk voor, buitenland). Questions orales avant les Jalons : Welke opleiding heeft Julie gevolgd? Wanneer is ze afgestudeerd? Waar werkt ze nu? Hoeveel talen spreekt ze? Heeft ze veel ervaring in het buitenland? (Nee, niet veel : drie maanden.)",
  });

  d.table({
    title: 'Fiche 2 · Jalon 1 (A1) : interroger sur le parcours', tag: 'JALON 1', page: 'Livret p. 93',
    intro: 'Seul · 10 min — Traduisez, puis comparez avec votre voisin. **I** interrogative. Le recruteur **vouvoie** : //u//.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 5.0, 5.63], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'I', 'Que met-on dans la rubrique « identité » ?', '[[Wat zet je in de rubriek «identiteit»?]]'],
      ['2', 'I', 'Quelle formation suivez-vous ?', '[[Welke opleiding volgt u?]]'],
      ['3', 'I', 'Quel est votre métier ?', '[[Wat is uw beroep?]]'],
      ['4', 'I', 'Parlez-vous un peu néerlandais ?', '[[Spreekt u een beetje Nederlands?]]'],
      ['5', 'I', 'Avez-vous de l’expérience ?', '[[Hebt u ervaring?]]'],
    ],
    foot: 'Avec **u**, le verbe garde son **-t**, même après inversion : //Volgt u? Spreekt u?// · //de l’expérience// → //ervaring// (sans article).',
    notes: "Phrase 1 : « on » général → je (ou men, plus formel). Phrase 2 : opleiding est un mot en de → welke.",
    notesA: "Variantes acceptables : 1 « Wat komt er in de rubriek «identiteit»? » ou « Wat schrijf je in… » ; 2 « Welke opleiding doet u? » ; 4 « Spreekt u wat Nederlands? » ; 5 « Heeft u ervaring? » (fréquent aux Pays-Bas ; « Hebt u » est la forme préférée en Belgique, les deux sont corrects). Refuser « Hebt u de ervaring? » et « Spreek u…? » (u → -t).",
  });

  d.table({
    title: 'Fiche 2 · Jalon 2 (A2) : mon profil en détail', tag: 'JALON 2', page: 'Livret p. 93',
    intro: 'Seul · 10 min — Traduisez. **D** déclarative · **N** négative. Perfectum, **sinds**, **omdat** : attention à la place du verbe !',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 4.8, 5.83], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'D', 'J’ai obtenu mon diplôme en 2019, après trois années d’études.', '[[Ik ben in 2019 afgestudeerd, na drie jaar studie.]]'],
      ['2', 'D', 'Depuis que j’ai terminé mes études, je travaille dans une entreprise.', '[[Sinds ik afgestudeerd ben, werk ik in een bedrijf.]]'],
      ['3', 'D', 'Je suis responsable d’une équipe de cinq personnes.', '[[Ik ben verantwoordelijk voor een team van vijf personen.]]'],
      ['4', 'N', 'Je n’ai pas encore beaucoup d’expérience à l’étranger.', '[[Ik heb nog niet veel ervaring in het buitenland.]]'],
      ['5', 'D', 'Comme je parle trois langues, je peux aider les clients étrangers.', '[[Omdat ik drie talen spreek, kan ik buitenlandse klanten helpen.]]'],
    ],
    foot: '//sinds// + **présent** quand ça dure encore · //drie **jaar**// : singulier après un nombre · //verantwoordelijk **voor**// (✗ //van//).',
    notes: "Coquille du livret (mise en page) : les cases « néerlandais » des phrases 2 et 3 sont fusionnées ; prévoir une ligne par phrase. Laisser chercher la phrase 2 (la plus difficile), puis passer à la diapositive « phrase-clé ».",
    notesA: "Variantes acceptables : 1 « In 2019 heb ik mijn diploma behaald / gehaald, na drie jaar studeren » ; 2 « Sinds ik ben afgestudeerd, werk ik… » (les deux ordres sont corrects dans la subordonnée) ou « …bij een bedrijf / in een onderneming » ; 3 « …voor een ploeg van vijf mensen » ; 5 « Aangezien ik drie talen spreek… » ou « …de buitenlandse klanten helpen ». Refuser « Sinds ik afgestudeerd ben, ik werk… » (pas d’inversion), « Ik heb afgestudeerd » et « Omdat ik spreek drie talen ».",
  });

  d.blocks({
    title: 'Phrase-clé : raconter son parcours', tag: 'GRAMMATICA', page: 'Livret p. 93',
    intro: 'C’est **fini** → **perfectum**. Ça **dure encore** → **sinds** + **présent**.',
    rows: [
      { label: 'perfectum', cells: [{ t: 'In 2019', role: 'T' }, { t: 'ben', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'afgestudeerd.', role: 'F', lab: 'participe' }], fr: 'En 2019, j’ai obtenu mon diplôme.' },
      { label: 'sinds en tête', cells: [{ t: 'Sinds ik afgestudeerd ben,', role: 'X', lab: 'position 1 = la subordonnée' }, { t: 'werk', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'in een bedrijf.', role: 'P' }], fr: 'Depuis que j’ai terminé mes études, je travaille dans une entreprise.' },
      { label: 'omdat en tête', cells: [{ t: 'Omdat ik drie talen spreek,', role: 'X', lab: 'position 1 = la subordonnée' }, { t: 'kan', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'klanten', role: 'O' }, { t: 'helpen.', role: 'F', lab: 'infinitif' }], fr: 'Comme je parle trois langues, je peux aider les clients.' },
      { label: 'nog niet veel', cells: [{ t: 'Ik', role: 'S' }, { t: 'heb', role: 'V' }, { t: 'nog niet veel', role: 'N', lab: 'pas encore beaucoup' }, { t: 'ervaring', role: 'O' }, { t: 'in het buitenland.', role: 'P' }], fr: 'Je n’ai pas encore beaucoup d’expérience à l’étranger.' },
    ],
    foot: { kind: 'trap', text: '//Je travaille ici **depuis** 2019// → //Ik **werk** hier **sinds** 2019// : **présent**, car ça dure encore. //Ik **heb** hier **gewerkt**// = c’est **fini**, je n’y travaille plus.' },
    notes: "Dans la subordonnée (sinds, omdat), le verbe conjugué va à la fin : « sinds ik afgestudeerd ben », « omdat ik drie talen spreek ». La subordonnée occupe la 1re place : la principale commence donc par le verbe (werk ik, kan ik). Faire transformer : « Ik werk in een bedrijf, sinds ik afgestudeerd ben » → « Sinds ik afgestudeerd ben, werk ik in een bedrijf ».",
  });

  d.experts({
    title: 'Jeu de rôle : parlez-moi de votre cv', tag: 'MISE EN SITUATION', page: 'Livret p. 93',
    intro: 'Par deux · 10 min — A = recruteur, B = candidat. **Vouvoiement**. 1er tour : B joue **Julie** (son cv) ; 2e tour : B présente **son propre** parcours.',
    cards: [
      { who: 'A', q: '**A — le recruteur.** Saluez, puis posez les questions du **Jalon 1** : opleiding · beroep · Nederlands · ervaring. Ajoutez **deux questions au passé** : //Waar hebt u gestudeerd? Wanneer bent u afgestudeerd?// Pour finir : //Bedankt, ik bel u volgende week.//' },
      { who: 'B', q: '**B — le candidat.** Répondez par des **phrases complètes** : diplôme (//Ik ben in … afgestudeerd//), expérience (//Ik heb … gewerkt//), aujourd’hui (//Sinds … werk ik…//), langues (//Omdat ik … talen spreek, …//). Utilisez au moins **trois participes** différents.' },
    ],
    notes: "Groupes de trois possibles : C observe et compte les participes (hebben / zijn correct ?). Rappel : on vouvoie le recruteur et le candidat (Hebt u…? Bent u…?). Pour le 2e tour, les étudiants peuvent inventer un parcours s’ils préfèrent ne pas parler du leur.",
  });

  d.closing({
    cliff: 'Séance 15 : **Het sollicitatiegesprek.** Dire ce qu’on **sait faire** — //Ik **kan** goed met de computer **werken**// — et se comparer aux autres : //Ik heb **meer** ervaring **dan**…//',
    homework: ['Apprendre les participes de la p. 69 + //zijn → geweest · hebben → gehad · doen → gedaan//.', 'Écrire **votre cv** en néerlandais : identiteit, opleiding, ervaring, talen.', 'Écrire **5 phrases** sur votre parcours au perfectum.', 'Revoir les **faux-amis 1 à 7** (p. 89).', 'Recopier les **Jalons 1 et 2** de la fiche 2, corrigés (p. 93).'],
    exit: 'Dites **deux choses** que vous avez faites hier : une avec **hebben**, une avec **zijn**.',
    notes: "Ticket de sortie oral, par exemple : « Gisteren heb ik gewerkt en ’s avonds ben ik naar de cursus gegaan. » Vérifier l’auxiliaire et la place du participe.",
  });
};
