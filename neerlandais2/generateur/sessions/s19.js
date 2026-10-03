// Séance 19 — Synthèse & préparation de l’évaluation — Livret p. 58–100b (révision de tout le cours)
const PURPLE = '6E4A9E';

exports.meta = {
  n: 19, slug: 'Synthese_Klaar_voor_het_examen', title: 'Klaar voor het examen?',
  subtitle: 'Synthèse — les 20 fiches, le grand quiz et le jeu de rôle final',
  pages: 'Livret p. 58–100b', img: 'bd_klaar',
  block: 'Synthèse du cours · préparation de l’évaluation',
  coverNotes: "Dernière séance. Objectifs : revoir les 20 fiches de grammaire en un coup d’œil, vérifier ses acquis par un grand quiz mixte (images, de/het, niet/geen, faux-amis, perfectum/OVT, ordre des mots), enchaîner trois situations dans un grand jeu de rôle (s’inscrire au cours → entretien d’embauche → raconter son examen), s’auto-évaluer et recevoir des conseils pour l’oral. Image de couverture : la BD de la page 1 (« Ben je klaar voor de cursus? ») — la boucle est bouclée : aujourd’hui, « Ben je klaar voor het examen? ».",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Faire le **bilan** du cours : revoir les **20 fiches**, tester mes connaissances et **jouer** une conversation complète, comme à l’examen oral.',
    language: 'Tout le cours : //de / het · niet / geen · Ik heb gewerkt · Ik was moe · omdat ik ziek ben · Ik ga koken · het huisje//',
    skills: 'Repérer mes points forts et mes points faibles · corriger mes erreurs typiques · enchaîner trois situations à l’oral · gérer le stress',
    agenda: [['Échauffement : la séance 18', 5], ['Les 20 fiches en un coup d’œil', 15], ['La phrase en six schémas', 5], ['Grand quiz : cinq manches', 25], ['Grand jeu de rôle : trois scènes', 25], ['Auto-évaluation A2', 5], ['Conseils pour l’oral · bilan', 10]],
    notes: "Durées indicatives sur 90 minutes. Séance de synthèse : on ne découvre rien de nouveau, on réactive. Le quiz peut se jouer en équipes (un point par bonne réponse, un point bonus pour la prononciation). Le grand jeu de rôle sert de répétition générale de l’examen oral : prévoir des groupes de trois (deux joueurs, un observateur).",
  });

  // ------------------------------------------------------------ Échauffement (rappel séance 18)
  d.exercise({
    title: 'Échauffement : la séance 18 en six phrases', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 18',
    instr: 'Seul · 5 min — Complétez ou traduisez, puis lisez à voix haute.',
    gap: 12,
    items: [
      'de krant → diminutif : [[het krantje]]',
      'het huisje → pluriel : [[de huisjes]]',
      'un petit pain au fromage → [[een broodje kaas]]',
      'Je voudrais un kilo de pommes. //(BE)// → [[Ik had graag een kilo appels.]]',
      'Combien est-ce, au total ? → [[Hoeveel is dat samen?]]',
      'Le pain, je l’achète chez le boulanger. → [[Brood koop ik bij de bakker.]]',
    ],
    traps: ['Diminutif = **het** · pluriel = **de … -s**.', '//un petit pain// = //een **broodje**//.', 'Produit en tête → **inversion** : //Brood koop ik…//'],
    notes: "Rappel de la fiche A1-09 (diminutifs), des thèmes Eten & drinken et Boodschappen et du dialogue au marché. Interroger un étudiant par phrase.",
    notesA: "Variantes acceptables : 4 « Ik wil graag een kilo appels » ou « Mag ik een kilo appels? » ; 5 « Hoeveel kost dat samen? » ; 6 « Het brood koop ik bij de bakker » ou « Ik koop brood bij de bakker ».",
  });

  d.keyIdea({
    title: 'Le chemin parcouru', tag: 'SYNTHÈSE', page: 'Livret p. 1–100b', icon: 'FaGraduationCap',
    text: 'Van «Goedemorgen, Pieter!» tot «Nu alles gelukt is, ben ik trots op ons.»',
    sub: ['**Section 1** : saluer · prendre des nouvelles · zijn & hebben · prendre congé · se présenter.', '**Section 2** : 20 fiches de grammaire · **Section 3** : 12 thèmes de vocabulaire · **Section 4** : 10 mises en situation.', 'Aujourd’hui : on **révise**, on **joue**, on **s’évalue**.'],
    notes: "Rappeler la première phrase du cours (dialogue p. 3) et la dernière phrase de la fiche 10 (séance 17). Demander aux étudiants ce qui leur semblait impossible au début et qui est devenu facile.",
  });

  // ------------------------------------------------------------ Récapitulatif des 20 fiches
  d.table({
    title: 'Les 10 fiches A1 en un coup d’œil', tag: 'SYNTHÈSE', page: 'Livret p. 58–67',
    headers: ['N°', 'FICHE', 'LA RÈGLE EN BREF', 'EXEMPLE'],
    colW: [0.6, 2.35, 4.75, 4.43], align: ['center', 'left', 'left', 'left'], boldCol: 1,
    rows: [
      ['01', 'Lidwoorden', '^^de^^ (± 3 mots sur 4) ou %%het%% · pluriel : de', '^^de^^ man · %%het%% huis · de huizen'],
      ['02', 'Het meervoud', '-en · -s (après -el, -er, -en, -je) · -’s', 'treinen · jongens · auto’s'],
      ['03', 'Deze · dit · mijn', 'deze / die + de · dit / dat + het', 'deze trein · dit huis · ons huis'],
      ['04', 'Het adjectief', '-e devant le nom, sauf het + een + singulier', 'de rode auto · een groot huis'],
      ['05', 'Vraagwoorden', 'mot W + verbe + sujet · oui / non : verbe 1er', 'Waar woon je? · Woon je in Gent?'],
      ['06', 'Niet of geen?', 'geen = pas de + nom · niet = le reste', 'Ik heb geen auto. · Ik werk niet.'],
      ['07', 'Getallen & klok', '21 = eenentwintig · half drie = 2 h 30', 'om 8 uur · op maandag · in mei'],
      ['08', 'Voorzetsels', 'in · op · naar · bij (où) · om · op · in (quand)', 'naar het station · bij de dokter'],
      ['09', 'Verkleinwoorden', '-je, -tje, -pje, -etje → toujours het', 'het huisje · de huisjes'],
      ['10', 'Gebiedende wijs', 'radical seul + even, eens, maar', 'Wacht even! · Kom maar binnen!'],
    ],
    notes: "Faire lire une ligne par étudiant ; pour chaque fiche, demander un autre exemple. Séances où chaque fiche a été travaillée : 01 (S8), 02 (S11), 03 (S10), 04 (S11), 05 (S7), 06 (S6), 07 (S3), 08 (S9), 09 (S18), 10 (S8). Coquille du livret : le sommaire de la section 2 (avant la p. 58) ne correspond pas aux fiches réelles (pour A1 : « 05 Interrogation » = Vraagwoorden, « 07 Nombres, heure & date » = Getallen & klok… et, pour A2, des titres comme « Le présent », « Le futur » ou « Pronoms réciproques » qui ne sont pas les fiches du livret) : se fier aux pages de garde des cahiers A1 et A2 (numéros 01 à 10 ci-dessus).",
  });

  d.table({
    title: 'Les 10 fiches A2 en un coup d’œil', tag: 'SYNTHÈSE', page: 'Livret p. 68–77',
    headers: ['N°', 'FICHE', 'LA RÈGLE EN BREF', 'EXEMPLE'],
    colW: [0.6, 2.35, 4.6, 4.58], align: ['center', 'left', 'left', 'left'], boldCol: 1,
    rows: [
      ['01', 'Woordvolgorde', 'verbe en 2e position · T-M-P', 'Morgen reis ik met de trein naar Gent.'],
      ['02', 'Het perfectum', 'hebben / zijn + participe à la fin', 'Ik heb gewerkt. · Ik ben gegaan.'],
      ['03', 'De OVT', '’t kofschip → -te(n) · sinon -de(n)', 'ik werkte · ik speelde · ik was'],
      ['04', 'Hem · haar · hun', 'après le verbe · personne avant chose', 'Ik geef hem het boek.'],
      ['05', 'Iemand · niets', 'iemand ↔ niemand · iets + adjectif + -s', 'Ik zie niemand. · iets lekkers'],
      ['06', 'En · maar · want', 'ordre normal · omdat : verbe à la fin', 'want ik ben ziek · omdat ik ziek ben'],
      ['07', 'Altijd · nooit · al', 'adverbe juste après le verbe conjugué', 'Ik drink altijd koffie.'],
      ['08', 'Zich wassen', 'me · je · zich · ons, après le verbe', 'Ik voel me goed.'],
      ['09', 'Groter dan', '-er dan (≠) · even … als (=)', 'sneller dan · even groot als'],
      ['10', 'Ik ga … doen', 'gaan en 2e position + infinitif à la fin', 'Ik ga vanavond koken.'],
    ],
    notes: "Séances où chaque fiche a été travaillée : 01 (S2), 02 (S14), 03 (S17), 04 (S13), 05 (S16), 06 (S4), 07 (S12), 08 (S5), 09 (S15), 10 (S12). Demander aux étudiants de cocher les trois fiches qu’ils trouvent les plus difficiles : elles guideront la révision (voir l’auto-évaluation plus loin).",
  });

  d.blocks({
    title: 'La phrase néerlandaise en six schémas', tag: 'SYNTHÈSE', page: 'Livret p. 62 · 68–77',
    rows: [
      { label: 'phrase simple', cells: [{ t: 'Ik', role: 'S' }, { t: 'werk', role: 'V' }, { t: 'vandaag', role: 'T' }, { t: 'thuis.', role: 'P' }] },
      { label: 'inversion', cells: [{ t: 'Vandaag', role: 'T' }, { t: 'werk', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'thuis.', role: 'P' }] },
      { label: 'question', cells: [{ t: 'Werk', role: 'V' }, { t: 'je', role: 'S' }, { t: 'vandaag', role: 'T' }, { t: 'thuis?', role: 'P' }] },
      { label: 'perfectum', cells: [{ t: 'Ik', role: 'S' }, { t: 'heb', role: 'V', lab: 'hebben / zijn' }, { t: 'gisteren', role: 'T' }, { t: 'thuis', role: 'P' }, { t: 'gewerkt.', role: 'F', lab: 'participe' }] },
      { label: 'gaan + infinitif', cells: [{ t: 'Ik', role: 'S' }, { t: 'ga', role: 'V', lab: 'gaan' }, { t: 'morgen', role: 'T' }, { t: 'thuis', role: 'P' }, { t: 'werken.', role: 'F', lab: 'infinitif' }] },
      { label: 'omdat', cells: [{ t: 'Ik blijf thuis,', role: 'X', lab: 'principale' }, { t: 'omdat', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'ziek', role: 'X', lab: '' }, { t: 'ben.', role: 'V', lab: 'verbe à la fin' }] },
    ],
    foot: { kind: 'trap', text: 'Le français garde « sujet + verbe » ; le néerlandais déplace le verbe : //Vandaag **werk ik**// · //Ik heb … **gewerkt**// · //omdat ik ziek **ben**//. Vérifiez la place du **verbe** dans chaque phrase !' },
    notes: "Traductions : Je travaille à la maison aujourd’hui. · Aujourd’hui, je travaille à la maison. · Travailles-tu à la maison aujourd’hui ? · Hier, j’ai travaillé à la maison. · Demain, je vais travailler à la maison. · Je reste à la maison parce que je suis malade. Synthèse des fiches A1-05 (questions), A2-01 (ordre des mots, T-M-P), A2-02 (perfectum), A2-10 (gaan + infinitif) et A2-06 (omdat). Le même contenu (vandaag / thuis werken) montre comment seul l’ordre change. Faire produire chaque schéma avec un autre verbe : « Vandaag studeer ik in de bibliotheek. »",
  });

  // ------------------------------------------------------------ Grand quiz
  d.imagier({
    title: 'Grand quiz ① : wat is dit? Met lidwoord!', tag: 'SYNTHÈSE', page: 'Livret p. 78–88',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v03_08', nl: 'verkeerslicht', art: 'het', fr: 'le feu (de signalisation)' },
      { img: 'v03_09', nl: 'brug', art: 'de', fr: 'le pont' },
      { img: 'v04_15', nl: 'bestek', art: 'het', fr: 'les couverts' },
      { img: 'v04_04', nl: 'ei', art: 'het', fr: 'l’œuf' },
      { img: 'v05_08', nl: 'kassa', art: 'de', fr: 'la caisse' },
      { img: 'v05_15', nl: 'weegschaal', art: 'de', fr: 'la balance' },
      { img: 'v06_12', nl: 'ziekenhuis', art: 'het', fr: 'l’hôpital' },
      { img: 'v06_02', nl: 'oog', art: 'het', fr: 'l’œil' },
      { img: 'v07_15', nl: 'nietmachine', art: 'de', fr: 'l’agrafeuse' },
      { img: 'v08_07', nl: 'toetsenbord', art: 'het', fr: 'le clavier' },
      { img: 'v09_09', nl: 'envelop', art: 'de', fr: 'l’enveloppe' },
      { img: 'v10_07', nl: 'regenboog', art: 'de', fr: 'l’arc-en-ciel' },
      { img: 'v10_06', nl: 'onweer', art: 'het', fr: 'l’orage' },
      { img: 'v02_11', nl: 'gezin', art: 'het', fr: 'la famille (le ménage)' },
      { img: 'v02_15', nl: 'tweeling', art: 'de', fr: 'les jumeaux' },
    ],
    notes: "Manche 1 : un mot de chaque thème de vocabulaire (p. 78–88). Équipes : un point pour le mot, un point pour l’article. Attention aux faux-amis vus en séance : het gezin ≠ de familie au sens large.",
    notesA: "Huit mots en het : verkeerslicht, bestek, ei, ziekenhuis, oog, toetsenbord, onweer, gezin. Les mots composés prennent l’article du dernier mot : het licht → het verkeerslicht, het huis → het ziekenhuis, het bord → het toetsenbord, de boog → de regenboog, de machine → de nietmachine.",
  });

  d.exercise({
    title: 'Grand quiz ② : de of het? niet of geen?', tag: 'SYNTHÈSE', page: 'Livret p. 58 · 63',
    instr: 'Seul · 4 min — Colonne 1 : choisissez l’article. Colonne 2 : complétez avec **niet** ou **geen**.',
    restart: true, gap: 12,
    columns: [
      [{ h: 'De of het?' }, '<<de>> / {{het}} vergadering', '{{de}} / <<het>> kasticket', '<<de>> / {{het}} afspraak', '{{de}} / <<het>> meisje', '<<de>> / {{het}} apotheek', '{{de}} / <<het>> loon'],
      [{ h: 'Niet of geen?' }, 'Ik heb [[geen]] tijd.', 'Het examen was [[niet]] moeilijk.', 'Wij eten [[geen]] vlees.', 'Ik woon [[niet]] in Gent.', 'Hij heeft [[geen]] auto.', 'Ik begrijp de vraag [[niet]].'],
    ],
    traps: ['//meisje// : diminutif → **het**.', '**geen** = pas de + nom (avec //een// ou sans article).', '**niet** : verbe, adjectif, préposition, nom défini (//de vraag//).'],
    notes: "Manche 2 : fiches A1-01 (lidwoorden) et A1-06 (niet of geen). Mots tirés des thèmes Werk & bedrijf, Boodschappen, Administratie et Gezondheid.",
    notesA: "Col. 2 : « niet » se place devant l’adjectif (niet moeilijk) et devant la préposition (niet in Gent), et à la fin quand il nie le verbe (Ik begrijp de vraag niet). Pour aller plus loin : « Ik heb geen tijd » ← « Ik heb tijd » (sans article) ; « Hij heeft geen auto » ← « Hij heeft een auto ».",
  });

  d.exercise({
    title: 'Grand quiz ③ : attention aux faux-amis', tag: 'SYNTHÈSE', page: 'Livret p. 89–91',
    instr: 'Seul · 4 min — Choisissez le **bon mot**.',
    gap: 12,
    items: [
      'Ik werk in een groot {{bureau}} / <<kantoor>> in Brussel.',
      'Dit hotel is erg <<duur>> / {{hard}}: 300 euro per nacht!',
      'Ik volg een {{formatie}} / <<opleiding>> tot boekhouder.',
      'Aan de kassa staat een lange <<rij>> / {{file}}.',
      'Na het werk ben ik {{zacht}} / <<moe>>: ik ga slapen.',
      'Mijn kinderen zijn heel <<braaf>> / {{moedig}}: ze luisteren goed.',
      'Morgen heb ik een {{oraal}} / <<mondeling>> examen.',
      '’s Avonds kijk ik naar <<het journaal>> / {{de krant}} op tv.',
    ],
    traps: ['//het bureau// = le meuble · //het kantoor// = le lieu.', '//de file// = l’embouteillage · //de rij// = la file d’attente.', '//braaf// = sage · //moedig// = courageux.'],
    notes: "Manche 3 : les faux-amis des pages 89 à 91 (séances 11, 14 et 15). Faire justifier chaque réponse en français.",
    notesA: "Rappels : duur = cher (≠ hard = dur) ; de opleiding = la formation (de formatie = un groupe formé) ; zacht = doux (≠ moe = fatigué, et non « mou ») ; oraal = par voie orale (médicament) ; het journaal = le JT (de krant = le journal papier).",
  });

  d.exercise({
    title: 'Grand quiz ④ : perfectum of OVT?', tag: 'SYNTHÈSE', page: 'Livret p. 69–70',
    instr: 'Seul · 5 min — Complétez avec le **perfectum** (P) ou l’**OVT**, comme indiqué.',
    gap: 10,
    items: [
      'Gisteren [[heb]] ik hard [[gewerkt]]. //(werken · P)//',
      'Vorige week [[was]] ik ziek. //(zijn · OVT)//',
      'Wij [[zijn]] met de trein naar Gent [[gegaan]]. //(gaan · P)//',
      'Vroeger [[woonde]] ik in Bergen. //(wonen · OVT)//',
      'Ik [[heb]] mijn examen [[gehaald]]! //(halen · P)//',
      'In het begin [[had]] ik weinig tijd. //(hebben · OVT)//',
      'Zij [[is]] thuis [[gebleven]]. //(blijven · P)//',
      'Pieter [[dronk]] koffie en hij [[las]] de krant. //(drinken, lezen · OVT)//',
    ],
    traps: ['Déplacement (//gaan, komen//) et //blijven, zijn, worden// → **zijn**.', 'Le participe va **à la fin**.', '//was, had, ging, dronk, las// : par cœur !'],
    notes: "Manche 4 : fiches A2-02 (perfectum, séance 14) et A2-03 (OVT, séance 17).",
    notesA: "Points de contrôle : 3 et 7 auxiliaire zijn (gaan = déplacement, blijven = toujours zijn) ; 4 wonen → woon (n) → -de ; 8 verbes irréguliers. Accepter en 1 « Ik heb gisteren hard gewerkt ».",
  });

  d.exercise({
    title: 'Grand quiz ⑤ : remettez les mots dans l’ordre', tag: 'SYNTHÈSE', page: 'Livret p. 68–77',
    instr: 'Seul puis à deux · 5 min — Commencez par le mot en **gras**.',
    gap: 10,
    items: [
      '**morgen** · ik · ga · naar Gent · met de trein → [[Morgen ga ik met de trein naar Gent.]]',
      '**ik** · thuis · blijf · omdat · ik · ziek · ben → [[Ik blijf thuis, omdat ik ziek ben.]]',
      '**gisteren** · heb · gestudeerd · ik · veel → [[Gisteren heb ik veel gestudeerd.]]',
      '**vanavond** · koken · ik · ga · soep → [[Vanavond ga ik soep koken.]]',
      '**’s morgens** · koffie · drink · altijd · ik → [[’s Morgens drink ik altijd koffie.]]',
      '**werk** · thuis · jij · vandaag → [[Werk jij vandaag thuis?]]',
      '**ik** · het boek · geef · hem → [[Ik geef hem het boek.]]',
    ],
    traps: ['Verbe en **2e** position, sinon **inversion**.', '**T-M-P** : //morgen · met de trein · naar Gent//.', '//omdat// → verbe **à la fin**.', '//Werk jij…?// : pas de **-t**.'],
    notes: "Manche 5 : fiches A2-01 (woordvolgorde), A2-06 (omdat), A2-02, A2-10, A2-07, A1-05 et A2-04. Pour un jeu en équipes : écrire les blocs sur des cartes et faire ranger les étudiants debout, une carte chacun.",
    notesA: "Variantes acceptables : 2 « Omdat ik ziek ben, blijf ik thuis » (si on ne commence pas par « ik ») ; 6 « Werk je vandaag thuis? ». Refuser « Morgen ik ga… », « omdat ik ben ziek », « Werkt jij… ».",
  });

  d.traps({
    title: 'Les six erreurs à éviter le jour de l’examen', tag: 'PIÈGE', page: 'Tout le livret',
    rows: [
      ['Vandaag ik werk thuis.', 'Vandaag werk ik thuis.', 'Verbe en 2e position : inversion.'],
      ['Ik heb niet tijd.', 'Ik heb geen tijd.', 'geen = pas de + nom.'],
      ['…omdat ik ben ziek.', '…omdat ik ziek ben.', 'omdat → verbe à la fin.'],
      ['Ik heb naar Gent gegaan.', 'Ik ben naar Gent gegaan.', 'Déplacement → zijn.'],
      ['een grote huis', 'een groot huis', 'het + een + singulier : pas de -e.'],
      ['Werkt jij vandaag?', 'Werk jij vandaag?', 'jij après le verbe : pas de -t.'],
    ],
    notes: "Les six erreurs les plus fréquentes du cours. Faire lire la colonne de gauche, la classe corrige à voix haute avant de dévoiler (cacher la colonne de droite si possible). Demander à chacun de noter SON erreur la plus fréquente.",
  });

  // ------------------------------------------------------------ Grand jeu de rôle
  d.steps({
    title: 'Grand jeu de rôle : une histoire en trois scènes', tag: 'ORAL', page: 'Livret p. 93–100b',
    intro: 'Par trois · 25 min — A et B jouent les trois scènes **à la suite**, sans notes ; C observe. Puis on change de rôle.',
    steps: [
      { h: 'Au secrétariat', n: '1', color: 'accent2', lines: ['Fiches 4 · 5 · **u**', '//Wanneer begint de cursus?//', '//Wat is uw adres?//'] },
      { h: 'L’entretien', n: '2', color: 'accent1', lines: ['Fiches 2 · 6 · **u**', '//Wat kunt u goed?//', '//Hebt u ervaring?//'] },
      { h: 'Na het examen', n: '3', color: 'accent3', lines: ['Fiches 8 · 10 · **je**', '//Hoe was het examen?//', '//Proficiat!//'] },
    ],
    foot: { kind: 'keep', label: 'Grille de l’observateur', text: 'verbe en 2e position · //u// ou //je// selon la scène · 1 perfectum + 1 OVT · 1 //omdat// · de / het · chacun pose au moins une **question**.' },
    notes: "Grand jeu de rôle prévu par le plan de cours : il combine la fiche 4 (s’informer sur le cours), la fiche 5 (formulaire), la fiche 2 (CV), la fiche 6 (entretien), la fiche 8 (émotions) et la fiche 10 (examen). Environ 3 minutes par scène, puis 2 minutes de retour de l’observateur avec la grille. Les rôles détaillés sont sur la diapositive suivante.",
  });

  d.table({
    title: 'Grand jeu de rôle : les rôles A et B', tag: 'ORAL', page: 'Livret p. 93–100b',
    headers: ['SCÈNE', 'A — VOUS', 'B — VOTRE PARTENAIRE'],
    colW: [2.3, 4.9, 4.93], boldCol: 0,
    rows: [
      ['1 · Au secrétariat (u)', 'Vous voulez suivre le cours de néerlandais : début, prix, local, livres. Donnez nom, adresse, téléphone.', 'Secrétaire : répondez (//maandag · 120 euro · tweede verdieping//) et remplissez le formulaire : //Hoe is uw naam?//'],
      ['2 · L’entretien (u)', 'Candidat : formation, expérience, langues, disponibilité. Dites **pourquoi** avec //omdat//.', 'Employeur : posez 4 questions (//Wat kunt u goed? Wanneer kunt u beginnen?//) et présentez l’équipe.'],
      ['3 · Na het examen (je)', 'Racontez votre examen : la préparation (perfectum), le stress (OVT), le résultat.', 'Ami·e : posez les questions et réagissez : //Proficiat! · Jammer!//'],
    ],
    foot: 'Après les trois scènes, A et B **inversent** les rôles. Préparation : 3 minutes, **sans écrire de phrases complètes** (mots-clés seulement).',
    notes: "Modèles utiles. Scène 1 : « Wanneer begint de cursus? — De cursus begint maandag en duurt tien weken. » · « Hoeveel kost hij? — Hij kost 120 euro, boek inbegrepen. » Scène 2 : « Ik heb twee jaar ervaring in de administratie. » · « Omdat ik ervaring heb, kan ik meteen beginnen. » Scène 3 : « In het begin was ik zenuwachtig, maar ik heb het gehaald! » · « Proficiat! ».",
  });

  // ------------------------------------------------------------ Auto-évaluation et conseils
  d.checklist({
    title: 'Auto-évaluation A2 : je peux…', tag: 'AUTO-ÉVALUATION', page: 'Tout le livret',
    intro: 'Cochez ce que vous savez faire **sans aide**. Une case vide → la fiche à revoir est indiquée.',
    cols: 2,
    items: [
      '**saluer**, demander des nouvelles et prendre congé (je / u). — Section 1',
      'me **présenter** : nom, origine, famille, métier. — S8',
      'm’**inscrire** à un cours et remplir un **formulaire**. — Fiches 4 · 5',
      'parler de mes **disponibilités**, fixer un rendez-vous. — Fiche 3',
      'parler de mon **CV**, répondre à un **entretien**. — Fiches 2 · 6',
      'me présenter dans une **entreprise**. — Fiche 7',
      'dire comment je me **sens** et pourquoi (omdat). — Fiche 8',
      '**raconter** au passé : //ik heb gewerkt · ik was//. — Fiche 10',
      'faire des **courses** et commander au **café**. — S18',
      'dire où j’ai **mal**, aller chez le médecin. — S17',
    ],
    notes: "Auto-évaluation individuelle, 5 minutes, sur le modèle des descripteurs A2 du Cadre européen (« Je peux… »). Faire lever la main ligne par ligne pour repérer les points à revoir collectivement. Les séances correspondantes : fiches 4 et 5 (S10–S11), fiche 3 (S12), fiches 2 et 6 (S14–S15), fiche 7 (S16), fiche 8 (S5), fiche 10 (S17).",
  });

  d.cards({
    title: 'Conseils pour l’examen oral', tag: 'ORAL', page: 'Préparation de l’évaluation',
    perRow: 4, bSize: 16,
    cards: [
      { h: 'AVANT', color: 'accent2', f: 'Herhalen!', lines: ['Relisez les **Jalons** des 10 fiches à voix haute.', 'Préparez 5 phrases **vraies** sur vous.'] },
      { h: 'PENDANT', color: 'accent3', f: 'Rustig!', lines: ['Des phrases **simples et complètes**.', 'Vérifiez la place du **verbe**.', 'Posez aussi une **question** : //En u?//'] },
      { h: 'SI ÇA BLOQUE', color: 'accent1', f: 'Pardon?', lines: ['//Kunt u dat herhalen, alstublieft?//', '//Wat betekent …?//', '//Hoe zeg je … in het Nederlands?//'] },
      { h: 'POUR BRILLER', color: PURPLE, f: 'omdat…', lines: ['Reliez : //en, maar, want, omdat//.', 'Nuancez : //een beetje, heel, vaak//.', 'Ajoutez un **passé** : //Gisteren heb ik…//'] },
    ],
    foot: { kind: 'tip', text: 'Une erreur n’est pas grave : **corrigez-vous** et continuez. À l’oral, on évalue d’abord la **communication** : se faire comprendre, réagir, poser des questions.' },
    notes: "Insister sur les phrases de secours (carte 3) : elles montrent qu’on sait gérer une conversation, ce qui est une compétence A2. « Herhalen! » = réviser / répéter ; « Rustig! » = calme ! Proposer un dernier tour : chaque étudiant dit une phrase vraie au passé avec omdat.",
  });

  d.closing({
    title: 'Succes met het examen!',
    cliffLabel: 'ET MAINTENANT…',
    cliff: 'L’**évaluation** ! Vous avez tout ce qu’il faut. //Ben je klaar voor het examen? — Ja, ik ben er klaar voor!//',
    homeworkLabel: 'POUR PRÉPARER L’ÉVALUATION',
    homework: ['Refaire le **grand quiz** sans regarder la correction.', 'Revoir les cases **vides** de votre auto-évaluation (fiche indiquée).', 'Relire à voix haute les **Jalons 1 et 2** des 10 fiches (p. 92–100b).', 'Préparer **5 phrases vraies** sur vous : présent, passé, futur, omdat, une question.'],
    exit: 'Dites en néerlandais **une chose que vous savez bien faire** et **une chose que vous allez encore revoir**.',
    notes: "Modèle de ticket de sortie : « Ik kan me goed voorstellen. Ik ga de OVT nog herhalen. » Clin d’œil à la BD de la page 1 : « Ben je klaar voor de cursus? — Zeker weten! » devient « Ben je klaar voor het examen? — Ja, ik ben er klaar voor! ». Remercier le groupe et rappeler les modalités pratiques de l’évaluation.",
  });
};
