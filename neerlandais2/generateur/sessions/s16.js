// Séance 16 — Op het werk · Fiche 7 « Se présenter dans l’entreprise » — Livret p. 72, 84–85, 98
exports.meta = {
  n: 16, slug: 'Op_het_werk', title: 'Op het werk',
  subtitle: 'Se présenter dans l’entreprise — iemand, niemand, iets, niets',
  pages: 'Livret p. 72 · 84–85 · 98', img: 'banner_situaties', time: '7', sceneLabel: 'FICHE',
  block: 'Section 4 · Mises en situation — Fiche 7',
  coverNotes: "Séance 16. Objectifs : utiliser les pronoms indéfinis sans double négation (fiche A2-05 Iemand · niets, p. 72), réviser le vocabulaire du travail et du téléphone en images (thèmes 07 et 08, p. 84–85), puis se présenter à ses nouveaux collègues en les tutoyant (fiche 7, p. 98). Image : le bandeau des mises en situation du livret.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Me **présenter** à mes nouveaux collègues : dire dans quel **service** je travaille, quelle est ma **tâche** et avec qui je travaille.',
    language: '//Ben je nieuw hier? · Op welke afdeling werk je? · Ik ben verantwoordelijk voor… · We werken vaak samen · iemand ↔ niemand · iets ↔ niets · iets lekkers//',
    skills: 'Utiliser les pronoms indéfinis sans double négation · réviser le vocabulaire du bureau et du téléphone · se présenter au travail (tutoiement)',
    agenda: [['Échauffement : la séance 15', 5], ['Iemand · niets (p. 72)', 20], ['Quiz : bureau & téléphone (p. 84–85)', 15], ['Fiche 7 : vocabulaire', 5], ['Jalon 1 · Jalon 2', 20], ['Phrase-clé · jeu de rôle', 20], ['Bilan · erreurs fréquentes', 5]],
    notes: "Durées indicatives sur 90 minutes. La fiche A2-05 est courte : on prend le temps du bonus oral (répondre « non » avec un mot en n-), très utile au travail. Le quiz en images réactive les thèmes 07 (séance 13) et 08 (séance 12) avant la fiche 7.",
  });

  // ------------------------------------------------------------ Échauffement (rappel séance 15)
  d.experts({
    title: 'Échauffement : quatre défis de la séance 15', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 15',
    intro: 'Par deux · 5 min — Chacun prend deux cartes et répond à voix haute. Correction collective ensuite.',
    cards: [
      { who: 'A', q: '**Comparez** : //de trein · de bus (snel)// — //Julie · Lucas : 29 jaar, tous les deux (oud)//', a: '//De trein is sneller dan de bus.// · //Julie is even oud als Lucas.//' },
      { who: 'B', q: '**Modaux** : //Quand pouvez-vous commencer ?// · //J’aimerais apprendre le néerlandais.//', a: '//Wanneer kunt u beginnen?// · //Ik wil graag Nederlands leren.//' },
      { who: 'C', q: '**Faux-amis** : l’embouteillage · la file d’attente · fatigué · l’entrepôt', a: '^^de^^ file · ^^de^^ rij · moe · %%het%% magazijn' },
      { who: 'D', q: '**Fiche 6** : //Comme j’ai de l’expérience, je peux commencer tout de suite.//', a: '//Aangezien ik ervaring heb, kan ik meteen beginnen.//' },
    ],
    notes: "Rappel de la séance 15 : fiche A2-09 (comparatif), modaux, faux-amis 2/3 et fiche 6. Laisser 3 minutes, puis corriger carte par carte.",
    notesA: "Accepter : A « Lucas is even oud als Julie » ; B « Wanneer kan u beginnen? » à l’oral ; D « Omdat ik ervaring heb, kan ik direct beginnen ». Vérifier : sneller DAN (pas als), infinitif à la fin, kan ik (inversion après la subordonnée).",
  });

  // ------------------------------------------------------------ A2-05 Iemand · niets (p. 72)
  d.table({
    title: 'Iemand · niets : oui ↔ non', tag: 'GRAMMATICA', page: 'Livret p. 72',
    intro: 'Chaque mot a son **contraire en n-** : //iemand → **n**iemand//, //ergens → **n**ergens//. Le **n-** dit « non ».',
    headers: ['OUI', 'FRANÇAIS', 'NON', 'FRANÇAIS', 'EXEMPLE'],
    colW: [1.75, 2.05, 1.75, 1.85, 4.73], colColor: ['accent3', 'tx1', 'accent6', 'tx1', 'tx1'], boldCol: 2,
    rows: [
      ['**iemand**', 'quelqu’un', 'niemand', 'personne', '//Is er iemand? — Nee, niemand.//'],
      ['**iets**', 'quelque chose', 'niets', 'rien', '//Wil je iets? — Nee, niets.//'],
      ['**ergens**', 'quelque part', 'nergens', 'nulle part', '//Mijn gsm ligt nergens!//'],
      ['**ooit**', 'un jour, déjà', 'nooit', 'jamais', '//Ben je ooit in Gent geweest?//'],
      ['**alles**', 'tout', 'niets', 'rien', '//Ik heb alles gedaan.//'],
      ['**iedereen**', 'tout le monde', 'niemand', 'personne', '//Iedereen is welkom!//'],
    ],
    foot: '//iedereen, iemand, niemand// + verbe au **singulier** : //Iedereen **is** welkom.// · //ooit// dans une question = « déjà » (//Ben je ooit…?// = Es-tu déjà… ?).',
    notes: "Partie A de la fiche A2-05 (six paires). Faire lire en chœur la colonne OUI puis la colonne NON. Vert = oui, rouge = non. « Ooit » : un jour (dans le passé ou le futur) ; en question, il se traduit souvent par « déjà » (Ben je ooit in Spanje geweest? = Es-tu déjà allé en Espagne ?).",
  });

  d.cards({
    title: 'Iets + adjectif + -s · une seule négation', tag: 'GRAMMATICA', page: 'Livret p. 72',
    intro: 'Après **iets**, **niets** (et //veel, wat//), l’adjectif prend un **-s** : //quelque chose **de** bon// = //iets lekker**s**//.',
    perRow: 4,
    cards: [
      { h: 'LEKKER + S', color: 'accent1', f: 'iets lekkers', lines: ['quelque chose de bon', '//Ik wil iets lekkers!//'] },
      { h: 'NIEUW + S', color: 'accent2', f: 'iets nieuws', lines: ['quelque chose de nouveau', '//Is er iets nieuws?//'] },
      { h: 'WARM + S', color: 'accent6', f: 'iets warms', lines: ['quelque chose de chaud', '//Ik drink iets warms.//'] },
      { h: 'BIJZONDER + S', color: '6E4A9E', f: 'niets bijzonders', lines: ['rien de spécial', '//Nee, niets bijzonders.//'] },
    ],
    foot: { kind: 'trap', text: '//Je **ne** vois **personne**// → //Ik zie **niemand**// (✗ //Ik zie niet niemand//) : **une seule** négation, le mot en **n-** suffit. Et pas de //van// : ✗ //iets van nieuw//.' },
    notes: "Partie B de la fiche (images : le cornet de frites, le gsm, la tasse de café, le garçon qui s’ennuie) et encadré « Pas de double négation ». Orthographe : l’adjectif garde sa forme de base + s (groot → iets groots, une seule o). Un adjectif qui finit déjà par -s ne change pas : iets vers (quelque chose de frais), iets grijs.",
  });

  d.exercise({
    title: 'Oefening : vul aan', tag: 'GRAMMATICA', page: 'Livret p. 72',
    instr: 'Seul · 5 min — Complétez avec le mot qui correspond au français entre parenthèses.',
    gap: 18,
    items: [
      'Is er [[iemand]] thuis? //(quelqu’un)//',
      'Er ligt [[niets]] op tafel. //(rien)//',
      '[[Iedereen]] is welkom! //(tout le monde)//',
      'Ik ben [[nooit]] in Spanje geweest. //(jamais)//',
      'We zoeken iets [[groots]]. //(groot)//',
      'Ik vind mijn sleutel [[nergens]]. //(nulle part)//',
    ],
    aside: { label: 'MÉMO', icon: 'FaLightbulb', lines: ['**n-** = non : //niemand, niets, nergens, nooit//', '//iets// + adjectif + **-s**'] },
    traps: ['4 : //nooit// **remplace** //niet// (✗ //niet nooit//).', '5 : //groot → groot**s**// (une seule o).', '3 : //iedereen// + **is** (singulier).'],
    notes: "Exercice de la fiche A2-05 (p. 72), titre néerlandais ajouté (« Complète » dans le livret). La phrase 4 réutilise le perfectum (ben … geweest, séance 14).",
    notesA: "Phrase 5 : « iets groots » = quelque chose de grand. Faire produire les phrases contraires : Is er niemand thuis? · Er ligt iets op tafel. · Niemand is welkom. · Ik ben ooit in Spanje geweest (= un jour, déjà). · Ik vind mijn sleutel ergens.",
  });

  d.exercise({
    title: 'Au bureau : répondez « non » !', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Par deux · 5 min — A pose la question, B répond **non** avec un mot en **n-** (ou //iets// + -s). Puis on inverse.',
    gap: 14,
    items: [
      'Is er iemand in de vergaderzaal? — Nee, er is [[niemand]].',
      'Heb je iets van de baas gehoord? — Nee, ik heb [[niets]] gehoord.',
      'Ben je ooit in de fabriek geweest? — Nee, ik ben er [[nooit]] geweest.',
      'Ligt mijn oplader ergens? — Nee, ik zie hem [[nergens]].',
      'Ken je iedereen op de afdeling? — Nee, ik ken nog [[niemand]].',
      'Wil je iets drinken? — Ja, graag iets [[warms]]!',
    ],
    traps: ['**Une seule** négation : //Ik heb **niets** gehoord// (✗ //niet niets//).', '//hem// = la chose (^^de^^ oplader), séance 13.', '//nog niemand// = encore personne.'],
    notes: "Exercice ajouté : réemploi des pronoms indéfinis avec le vocabulaire du travail (vergadering, baas, fabriek, oplader, afdeling). Insister sur l’intonation : la réponse négative doit être nette.",
    notesA: "Phrase 2 : niets se place comme un complément d’objet, avant le participe (Ik heb niets gehoord). Phrase 3 : er = là-bas (in de fabriek). Variante : faire répondre « oui » avec le mot positif (Ja, er is iemand. · Ja, ik heb iets gehoord.).",
  });

  // ------------------------------------------------------------ Réemploi V07 + V08 (p. 84–85)
  d.imagier({
    title: 'Quiz : au bureau et au téléphone', tag: 'WOORDENSCHAT', page: 'Livret p. 84–85',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v07_01', nl: 'kantoor', art: 'het', fr: 'le bureau (le lieu)' },
      { img: 'v07_02', nl: 'bureau', art: 'het', fr: 'le bureau (le meuble)' },
      { img: 'v08_07', nl: 'toetsenbord', art: 'het', fr: 'le clavier' },
      { img: 'v07_04', nl: 'printer', art: 'de', fr: 'l’imprimante' },
      { img: 'v07_05', nl: 'vergadering', art: 'de', fr: 'la réunion' },
      { img: 'v08_06', nl: 'bijlage', art: 'de', fr: 'la pièce jointe' },
      { img: 'v07_07', nl: 'baas', art: 'de', fr: 'le patron' },
      { img: 'v08_14', nl: 'wachtwoord', art: 'het', fr: 'le mot de passe' },
      { img: 'v07_12', nl: 'koffieautomaat', art: 'de', fr: 'la machine à café' },
      { img: 'v08_09', nl: 'scherm', art: 'het', fr: 'l’écran' },
      { img: 'v07_13', nl: 'lift', art: 'de', fr: 'l’ascenseur' },
      { img: 'v08_10', nl: 'headset', art: 'de', fr: 'le casque-micro' },
      { img: 'v07_15', nl: 'nietmachine', art: 'de', fr: 'l’agrafeuse' },
      { img: 'v08_12', nl: 'oplader', art: 'de', fr: 'le chargeur' },
      { img: 'v07_10', nl: 'contract', art: 'het', fr: 'le contrat' },
    ],
    notes: "Réemploi des thèmes 07 Werk & bedrijf et 08 Telefoon & mail. Quiz : montrer les images numérotées ; les étudiants donnent le mot AVEC l’article, puis disent à quoi il sert (Met een nietmachine…). Mélange des thèmes 07 (p. 84) et 08 (p. 85).",
    notesA: "Six mots en het : kantoor, bureau, toetsenbord, wachtwoord, scherm, contract. Rappel faux-ami (séance 14) : het kantoor = le lieu, het bureau = le meuble. Pour aller plus loin : demander le pluriel (kantoren, vergaderingen, schermen, contracten).",
  });

  d.exercise({
    title: 'Mijn eerste dag op kantoor', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul · 5 min — Complétez avec un mot du **quiz** ou un pronom **iemand · niemand · niets · iedereen**.',
    gap: 14,
    items: [
      'Ik neem de [[lift]] naar de derde verdieping.',
      'Mijn [[bureau]] staat naast het raam.',
      'Om tien uur is er een [[vergadering]] met de baas.',
      'Ik ken hier nog [[niemand]].',
      'Wat is het [[wachtwoord]] van de wifi?',
      'De [[printer]] werkt niet: er komt [[niets]] uit.',
      'Bij de [[koffieautomaat]] praat ik met [[iedereen]].',
    ],
    traps: ['%%het%% bureau (meuble) ≠ %%het%% kantoor (lieu).', '//nog niemand// = encore personne.', '//er komt niets uit// : rien ne sort.'],
    notes: "Exercice ajouté : petit récit qui combine le vocabulaire des thèmes 07 et 08 et les pronoms indéfinis, pour préparer la fiche 7 (premier jour dans l’entreprise).",
    notesA: "Phrase 6 : « uitkomen » au sens propre (sortir) — er komt niets uit. Prolongement : chacun raconte son premier jour (au présent ou au perfectum : Ik heb de lift genomen…).",
  });

  // ------------------------------------------------------------ Fiche 7 Se présenter dans l’entreprise (p. 98)
  d.table({
    title: 'Fiche 7 : Se présenter dans l’entreprise — vocabulaire', tag: 'MISE EN SITUATION', page: 'Livret p. 98',
    intro: 'Nouveau vocabulaire du **Jalon 1** (questions) et du **Jalon 2** (réponses). Noms avec leur article.',
    headers: ['JALON 1 · NL', 'FRANÇAIS', 'JALON 2 · NL', 'FRANÇAIS'],
    colW: [3.0, 2.9, 3.0, 3.23], boldCol: 0,
    rows: [
      ['nieuw · hier', 'nouveau · ici', '**mijn** · **voornaamste**', 'mon, ma · principal(e)'],
      ['^^de^^ afdeling', 'le service, le département', '^^de^^ **taak** · taken', 'la tâche · les tâches'],
      ['werken · doen', 'travailler · faire', '**verantwoordelijk** voor', 'responsable de'],
      ['^^de^^ marketing', 'le marketing', '%%het%% **team**', 'l’équipe'],
      ['^^de^^ administratie', 'l’administration', '**samen** · **samenwerken**', 'ensemble · collaborer'],
      ['^^de^^ verkoopafdeling', 'le service des ventes', '%%het%% **project**', 'le projet'],
      ['^^de^^ logistiek', 'la logistique', '**alleen**', 'seul'],
      ['^^de^^ manager', 'le / la manager', '^^de^^ **naam** · namen', 'le nom · les noms'],
    ],
    foot: '//samenwerken// est **séparable** : //We werken vaak **samen**.// · %%het%% team = ^^de^^ ploeg (même sens, très belge).',
    notes: "Le livret donne « team » sans article : het team. Ajouts pour les Jalons : de logistiek, de manager (Jalon 1, phrases 3 et 5) et de naam · namen (Jalon 2, phrase 5). En Belgique, le service se dit aussi « de dienst » (de personeelsdienst = le service du personnel). Le sommaire de la section 4 (page d’ouverture) annonce en 07 « Au téléphone avec un client » : dans le livret, la fiche 7 est bien « Se présenter dans l’entreprise ».",
  });

  d.table({
    title: 'Fiche 7 · Jalon 1 (A1) : se présenter en questions', tag: 'JALON 1', page: 'Livret p. 98',
    intro: 'Seul · 10 min — Traduisez. **I** interrogative · **N** négative. Entre collègues, on **tutoie** : //je / jij//.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 5.0, 5.63], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'I', 'Es-tu nouveau ici ?', '[[Ben je nieuw hier?]]'],
      ['2', 'I', 'Dans quel service travailles-tu, marketing ou administration ?', '[[Op welke afdeling werk je, marketing of administratie?]]'],
      ['3', 'I', 'Que fais-tu à la logistique ?', '[[Wat doe je op de afdeling logistiek?]]'],
      ['4', 'N', 'Tu ne travailles pas aux ventes ?', '[[Werk je niet op de verkoopafdeling?]]'],
      ['5', 'I', 'Qui est le manager ?', '[[Wie is de manager?]]'],
    ],
    foot: '//werk **je**?// : pas de **-t** quand //je / jij// suit le verbe · //niet// **avant** le complément de lieu : //niet op de verkoopafdeling//.',
    notes: "Phrase 2 : « op de afdeling » (préposition op). Phrase 4 : question négative sans mot interrogatif → le verbe ouvre la phrase.",
    notesA: "Variantes acceptables : 1 « Ben jij nieuw hier? » (on insiste sur la personne) ou « Ben je hier nieuw? » ; 2 « Bij welke afdeling werk je… » ou « In welke dienst werk je… » (Belgique) ; 3 « Wat doe je bij logistiek? » ; 4 « Werk je niet bij verkoop? » ; 5 « Wie is de baas / de chef? ». Refuser « Werkt je…? » et « Werk je op de verkoopafdeling niet? ».",
  });

  d.table({
    title: 'Fiche 7 · Jalon 2 (A2) : répondre avec précision', tag: 'JALON 2', page: 'Livret p. 98',
    intro: 'Seul · 10 min — Traduisez. **D** déclarative · **N** négative. Attention à **samenwerken**, **want** et **omdat**.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.7, 0.8, 4.8, 5.83], align: ['center', 'center', 'left', 'left'],
    rows: [
      ['1', 'D', 'Je travaille au marketing, et ma tâche principale est digitale.', '[[Ik werk bij marketing en mijn voornaamste taak is digitaal.]]'],
      ['2', 'D', 'Je suis responsable d’une équipe de quatre personnes.', '[[Ik ben verantwoordelijk voor een team van vier personen.]]'],
      ['3', 'D', 'Nous travaillons souvent ensemble sur les projets.', '[[We werken vaak samen aan de projecten.]]'],
      ['4', 'N', 'Je ne travaille pas seul, car nous formons une équipe.', '[[Ik werk niet alleen, want we vormen een team.]]'],
      ['5', 'D', 'Comme je suis nouveau, j’apprends encore les noms.', '[[Omdat ik nieuw ben, leer ik de namen nog.]]'],
    ],
    foot: '//werken **aan** een project// (✗ //op//) · //want// + ordre **normal** · //omdat// : verbe **à la fin**, puis //**leer ik**//.',
    notes: "Phrase 2 : même structure que la fiche 2 (séance 14) : verantwoordelijk voor een team van … personen. Phrase 1 : la phrase française du livret est un peu étrange (« ma tâche principale est digitale ») ; on la traduit littéralement, en acceptant une version plus naturelle.",
    notesA: "Variantes acceptables : 1 « Ik werk op de afdeling marketing en mijn voornaamste taak is digitale marketing » ; 3 « We werken vaak samen aan projecten » ; 4 « …want we zijn een team » ; 5 « Omdat ik nieuw ben, ben ik de namen nog aan het leren » (très naturel) ou « …moet ik de namen nog leren ». Refuser « We samenwerken vaak », « Omdat ik ben nieuw » et « want we een team vormen ».",
  });

  d.blocks({
    title: 'Phrase-clé : se présenter au travail', tag: 'GRAMMATICA', page: 'Livret p. 98',
    intro: 'Questions de collègues, réponses précises : regardez la **place du verbe** et de la **particule**.',
    rows: [
      { label: 'question', cells: [{ t: 'Op welke afdeling', role: 'Q', lab: 'mot W + nom' }, { t: 'werk', role: 'V' }, { t: 'je?', role: 'S' }], fr: 'Dans quel service travailles-tu ?' },
      { label: 'séparable', cells: [{ t: 'We', role: 'S' }, { t: 'werken', role: 'V' }, { t: 'vaak', role: 'M', lab: 'adverbe' }, { t: 'samen', role: 'F', lab: 'particule' }, { t: 'aan de projecten.', role: 'O', lab: 'complément' }], fr: 'Nous travaillons souvent ensemble sur les projets.' },
      { label: 'want', cells: [{ t: 'Ik', role: 'S' }, { t: 'werk', role: 'V' }, { t: 'niet', role: 'N' }, { t: 'alleen,', role: 'M', lab: '' }, { t: 'want', role: 'C' }, { t: 'we', role: 'S' }, { t: 'vormen', role: 'V' }, { t: 'een team.', role: 'O' }], fr: '… car nous formons une équipe. → //want// : ordre normal' },
      { label: 'omdat', cells: [{ t: 'Omdat ik nieuw ben,', role: 'X', lab: 'position 1 = la subordonnée' }, { t: 'leer', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'de namen', role: 'O' }, { t: 'nog.', role: 'M', lab: 'encore' }], fr: 'Comme je suis nouveau, j’apprends encore les noms.' },
    ],
    foot: { kind: 'trap', text: '//Nous travaillons ensemble// → //We werken **samen**// (✗ //We samenwerken//) : la particule **se détache**. //Je suis nouveau// → //Ik ben nieuw// : **sans article**, comme //Ik ben manager//.' },
    notes: "Ligne 2 : la particule « samen » se place en fin de phrase ; un complément avec préposition (aan de projecten) peut venir après elle, c’est l’ordre le plus naturel. À l’infinitif, la particule se recolle : We gaan samenwerken. Ligne 4 : avec un complément défini (de namen), l’adverbe nog vient après lui (comme « het boek al gelezen », séance 12).",
  });

  d.steps({
    title: 'Jeu de rôle : mon premier jour dans l’entreprise', tag: 'MISE EN SITUATION', page: 'Livret p. 98',
    intro: 'Groupes de 3 · 10 min — A est **nouveau**, B et C sont ses collègues. On **tutoie**. Puis on tourne.',
    steps: [
      { h: 'Se présenter', color: 'accent2', lines: ['A : //Hallo, ik ben …//', '//Ik ben nieuw hier.//', 'B : //Welkom!//'] },
      { h: 'Questionner', color: 'accent1', lines: ['//Op welke afdeling werk je?//', '//Wie is de manager?//'] },
      { h: 'Préciser', color: 'accent3', lines: ['//Mijn voornaamste taak is …//', '//We werken vaak samen.//'] },
      { h: 'Iemand · niets', color: '6E4A9E', lines: ['//Ken je hier al iemand?//', '//Nee, nog niemand!//'] },
    ],
    foot: { kind: 'keep', label: 'Critères', text: 'tutoiement · **2 questions** du Jalon 1 · **2 réponses** du Jalon 2 · **1** mot en **n-** sans double négation · **1** //iets// + adjectif + -s.' },
    notes: "Scène à la koffieautomaat, pendant la pause. Pour conclure : « Leuk je te leren kennen! Tot straks! ». Chaque étudiant joue une fois le nouveau. Distribuer des rôles au hasard (afdeling : marketing, administratie, verkoop, logistiek ; taak ; team de … personen). Les groupes rapides refont la scène en vouvoyant le manager (meneer Janssens) : Op welke afdeling werkt u?",
  });

  d.traps({
    title: 'Erreurs fréquentes de la séance', tag: 'PIÈGE', page: 'Livret p. 72 · 98',
    rows: [
      ['Ik zie niet niemand.', 'Ik zie niemand.', 'Une seule négation.'],
      ['Ik heb niet niets gedaan.', 'Ik heb niets gedaan.', 'niets = « ne … rien ».'],
      ['Ik wil iets van nieuw.', 'Ik wil iets nieuws.', 'iets + adjectif + -s.'],
      ['We samenwerken vaak.', 'We werken vaak samen.', 'La particule va à la fin.'],
      ['Werkt je bij marketing?', 'Werk je bij marketing?', 'Pas de -t devant je.'],
      ['Omdat ik ben nieuw, ik leer…', 'Omdat ik nieuw ben, leer ik…', 'Verbe à la fin, puis inversion.'],
    ],
    notes: "Synthèse avant la clôture : faire lire la colonne de gauche, la classe corrige à voix haute avant de regarder la colonne de droite.",
  });

  d.closing({
    cliff: 'Séance 17 : **Mijn examen.** Raconter son examen au passé avec un nouveau temps, l’**OVT** — //Ik **was** nerveus, de vragen **waren** moeilijk…// — et le vocabulaire de la **santé**.',
    homework: ['Apprendre les **six paires** //iemand ↔ niemand…// (p. 72).', 'Écrire **5 phrases** sur votre travail ou votre école avec //iemand, niemand, iets, niets, nooit//.', 'Revoir les mots **Werk & bedrijf** et **Telefoon & mail** (p. 84–85) avec de / het.', 'Recopier les **Jalons 1 et 2** de la fiche 7, corrigés (p. 98).'],
    exit: 'Présentez-vous à un « nouveau collègue » en **3 phrases** : votre service, votre tâche principale, avec qui vous travaillez.',
    notes: "Ticket de sortie oral, par exemple : « Ik werk op de afdeling administratie. Mijn voornaamste taak is de planning. Ik werk samen met Sarah en Pieter. »",
  });
};
