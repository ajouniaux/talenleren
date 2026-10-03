// Séance 5 — Hoe voel je je? (Séquence 1.2, 3/3) — Livret p. 27–34 + A2-08 Zich wassen (p. 75) + Fiche 8 (p. 99)
exports.meta = {
  n: 5, slug: 'Hoe_voel_je_je', title: 'Hoe voel je je?',
  subtitle: 'Dire comment on va et ce qu’on ressent — avec nuance',
  pages: 'Livret p. 27–34 · 75 · 99', img: 'emoties_groep', time: '1.2', sceneLabel: 'SÉQUENCE',
  block: 'Section 1 · Premiers pas en néerlandais',
  coverNotes: "Dernière séance de la séquence 1.2 (prendre des nouvelles). Objectifs : automatiser les réponses à « Hoe gaat het? » (chrono 1.2.7), nuancer une émotion (een beetje, vrij, heel, ontzettend), distinguer « Ik ben… » et « Ik voel me… », puis la grammaire des verbes pronominaux (fiche A2-08) et la fiche 8 « Exprimer ses émotions » (omdat, daarom, vanwege).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Répondre à « Hoe gaat het? » **avec nuance** (een beetje, vrij, heel, ontzettend) et **donner la raison** de mon état (want, omdat, daarom).',
    language: '//Ik ben moe · Ik voel me gestrest · Het valt niet mee · Het kan beter// — //zich voelen// : ik voel **me**, hij voelt **zich**',
    skills: 'Répondre vite (chrono) · deviner une émotion · demander à quelqu’un comment il se sent, en tutoyant ou en vouvoyant',
    agenda: [['Échauffement : je ou u ?', 5], ['1.2.7 Chrono · 1.2.8', 15], ['1.2.9 Speed date', 10], ['Ik ben / Ik voel me + nuances', 10], ['1.2.10 · Raad de emoties', 15], ['EXTRA Intensiteit toevoegen', 5], ['Grammaire : zich voelen', 15], ['Fiche 8 : jalons + jeu de rôle', 15]],
    notes: "Durées indicatives sur 90 minutes. La séance clôt la séquence 1.2 (p. 27–34). Si le temps manque, le BONUS « zich » peut être donné en devoir ; le jeu de rôle de la fiche 8 est prioritaire.",
  });

  // ------------------------------------------------------------ Échauffement
  d.exercise({
    title: 'Échauffement : je ou u ?', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 4', mode: 'a',
    instr: 'Par deux · 5 min — Demandez des nouvelles à votre voisin (**je**), puis à votre professeur (**u**). Répondez avec **une raison** : //want…//',
    number: false, gap: 8,
    items: [
      { h: 'Avec votre voisin : je / jij' },
      { t: 'A : //Hoi Lisa, hoe gaat het met **je**?//' },
      { t: 'B : //Goed, maar ik ben een beetje moe, **want** ik heb veel werk. En met **jou**?//' },
      { h: 'Avec le professeur : u' },
      { t: 'A : //Goedenavond, mevrouw. Hoe gaat het met **u**?//' },
      { t: 'B : //Prima, dank **u**. En met **u**?//' },
    ],
    img: 'u_of_je', imgH: 2.2,
    expect: ['**je / jij** : ami, collègue, voisin.', '**u** : supérieur, inconnu, client.', '**want** + ordre normal : //want ik **heb**…//'],
    notes: "Rappel de la séance 4 (1.2.3 à 1.2.6, tutoiement/vouvoiement, want). L’illustration « U ! / JE » ouvre la page 27 du livret : elle sert de transition vers 1.2.7. Faire tourner : chaque étudiant pose la question à deux personnes (je, puis u). Exiger une raison avec « want ».",
  });

  // ------------------------------------------------------------ 1.2.7 chrono (p. 27–28)
  d.exercise({
    title: '1.2.7 Hoe gaat het? — chrono (20 amorces)', tag: 'COUCHE 3', page: 'Livret p. 27–28',
    instr: 'Par deux · 15 min — Pliez la colonne de droite. Votre voisin chronomètre : 20 réponses à voix haute, sans vous arrêter. Dépliez, corrigez, 2e passage. Notez vos temps et votre gain.',
    gap: 4, size: 16,
    columns: [
      ['Comment ça va ? → [[Hoe gaat het?]]', 'Comment vas-tu ? → [[Hoe gaat het met jou?]]', 'Comment allez-vous ? → [[Hoe gaat het met u? / Hoe maakt u het?]]', 'Ça va ? (rapide) → [[Gaat het? / Alles goed?]]', 'Ça va bien, merci. → [[Het gaat goed, dank je.]]', 'Et toi ? → [[En met jou?]]', 'Et vous ? → [[En met u?]]', 'Moi aussi, merci ! → [[Ook goed, bedankt!]]', 'Je suis un peu fatigué(e). → [[Ik ben een beetje moe.]]', 'Je me sens très stressé(e). → [[Ik voel me heel gestrest.]]'],
      ['Très occupé(e), j’ai beaucoup de travail. → [[Heel druk, want ik heb veel werk.]]', 'Ça pourrait aller mieux. → [[Het kan beter.]]', 'Ce n’est pas facile. → [[Het valt niet mee.]]', 'Excellent, merci ! (formel) → [[Uitstekend, dank u!]]', 'Je suis content(e), j’ai une bonne nouvelle. → [[Ik ben blij, want ik heb goed nieuws.]]', 'Assez nerveux/se, j’ai un examen demain. → [[Ik ben vrij nerveus, want ik heb morgen een examen.]]', 'Je me sens détendu(e), j’ai congé. → [[Ik voel me ontspannen, want ik heb vakantie.]]', 'Pas très bien. → [[Niet zo goed.]]', 'Ça va (assez bien). → [[Het gaat wel.]]', 'Extrêmement fatigué(e), je n’ai pas bien dormi. → [[Ik ben ontzettend moe, want ik heb niet goed geslapen.]]'],
    ],
    notes: "Couche 3 : rien de nouveau, seulement plus vite. Projeter la diapositive des amorces (français) pendant le premier passage, livret plié. Le chronométreur note le temps ; deuxième passage après correction ; calculer le gain (1e keer − 2e keer). Items 16 et 20 abrégés à l’écran (« Je suis assez nerveux/se… », « Je suis extrêmement fatigué(e)… »).",
    notesA: "Points à surveiller : « met jou / met u » ; « dank je » (tu) ≠ « dank u » (vous) ; « want » + ordre normal (want ik heb…) ; « morgen » avant « een examen » (le temps avant le complément). « Heel druk » est une réponse elliptique correcte à « Hoe gaat het? » ; en phrase complète : « Ik heb het heel druk ».",
  });

  // ------------------------------------------------------------ 1.2.8 (p. 29)
  d.exercise({
    title: '1.2.8 Hoe gaat het? — mini-dialogues', tag: 'COUCHE 3', page: 'Livret p. 29',
    instr: 'Seul · 5 min — Complétez les mini-dialogues avec la bonne expression.',
    gap: 14,
    items: [
      'A : «[[Hoe gaat het]]?» → B : «Goed, dank je!» //(Comment ça va ?)//',
      'A : «Hoe gaat het?» → B : «Het gaat [[goed]], dank je.» //(bien)//',
      'A : «Alles goed?» → B : «Ja, en [[met]] jou?» //(et toi ?)//',
      'A : «Hoe maakt u het?» → B : «Uitstekend, dank u. En [[met]] u?» //(forme polie)//',
      'A : «Hoe gaat het met je?» → B : «[[Ook]] goed, bedankt!» //(aussi)//',
    ],
    aside: { label: 'BOÎTE À OUTILS', icon: 'FaPuzzlePiece', color: 'accent2', lines: ['//Hoe gaat het?//', '//goed · prima · uitstekend//', '//en **met** jou? · en **met** u?//', '//ook goed, bedankt!//'] },
    traps: ['Item 1 : accepter aussi //Alles goed?// ou //Gaat het?//.', '**dank je** (tu) · **dank u** (vous).', '//En met jou?// : la forme complète ; //En jij?// s’entend aussi à l’oral.'],
    notes: "Exercice court, à faire seul puis lire les dialogues à deux voix. Rappeler que la réponse reprend la politesse de la question : « Hoe maakt u het? » → « dank u… en met u? ».",
  });

  // ------------------------------------------------------------ 1.2.9 Speed date (p. 29)
  d.steps({
    title: '1.2.9 Speed date', tag: 'MISE EN SITUATION', page: 'Livret p. 29',
    intro: 'Groupe · 10 min — **Trois partenaires**, une minute chacun. Le 3e partenaire est **vouvoyé** (u). Puis complétez la grille.',
    steps: [
      { h: 'Groeten', color: 'accent2', lines: ['//Goedemiddag, Tom!//'] },
      { h: 'Vragen', color: 'accent3', lines: ['//Hoe gaat het met je?//', 'n° 3 : //met **u**?//'] },
      { h: 'Antwoorden', color: 'accent1', lines: ['//Ik ben moe, want…//', '(raison **vraie**)'] },
      { h: 'Terugvragen', color: 'accent4', lines: ['//En met jou?//', '//En met u?//'] },
      { h: 'Afscheid', color: 'tx2', lines: ['//Tot straks!//', '//Dag!//'] },
    ],
    foot: { kind: 'tip', label: 'La grille', text: 'Pour chaque partenaire : //naam · je/u · Hoe gaat het met hem/haar? · Waarom?// → //Tom is moe, want hij heeft veel werk.// (3e personne : **is, heeft, voelt zich**).' },
    notes: "Disposer deux rangées face à face ; on décale d’une place toutes les minutes (signal sonore). Coquille du livret : la consigne annonce trois partenaires (le 3e vouvoyé) mais la grille n’a que deux lignes (Partner 1 « je », Partner 2 « u ») : faire ajouter une ligne « Partner 3 · u » (ou vouvoyer le 2e et le 3e).",
  });

  // ------------------------------------------------------------ Tableau des réponses (p. 30)
  d.table({
    title: 'Répondre à « Alles goed? » : du négatif au positif', tag: 'À RETENIR', page: 'Livret p. 30',
    headers: ['NEDERLANDS', 'FRANÇAIS', 'TON'],
    colW: [3.9, 5.6, 2.63], boldCol: 0,
    rows: [
      ['Slecht.', 'Mal.', '!!négatif!!'],
      ['Niet zo goed.', 'Pas très bien.', '!!négatif!!'],
      ['Het valt niet mee.', 'Ce n’est pas facile. · Ça ne va pas fort.', '##difficile##'],
      ['Het kan beter.', 'Ça pourrait aller mieux.', '##moyen##'],
      ['Het gaat wel.', 'Ça va (assez bien).', 'neutre'],
      ['Redelijk goed.', 'Assez bien.', 'neutre'],
      ['Goed!', 'Bien !', '^^positif^^'],
      ['Prima!', 'Très bien !', '^^positif^^'],
      ['Uitstekend!', 'Excellent !', '^^très positif^^'],
    ],
    foot: '//Het gaat wel// = « ça va, sans plus » : moins positif que //Het gaat goed//. Le ton de la voix compte autant que les mots !',
    notes: "Lire de haut en bas en mimant (pouce vers le bas → pouce levé). Faire choisir à chacun l’expression vraie pour lui aujourd’hui. « Het valt niet mee » = ce n’est pas évident, ça ne va pas fort.",
  });

  // ------------------------------------------------------------ Ik ben / Ik voel me (p. 30–31)
  d.cards({
    title: 'Ik ben… / Ik voel me… + adjectif', tag: 'GRAMMATICA', page: 'Livret p. 30–31',
    perRow: 2, bSize: 16,
    cards: [
      { h: 'STRUCTURE 1 · JE SUIS…', color: 'accent2', f: 'Ik ben + adjectif', lines: ['//Ik **ben** moe. · Emma **is** blij.//'] },
      { h: 'STRUCTURE 2 · JE ME SENS…', color: 'accent4', f: 'Ik voel me + adjectif', lines: ['//Ik **voel me** gestrest. · Pieter **voelt zich** goed.//'] },
      { h: 'NEUF ADJECTIFS', color: 'accent3', lines: ['**moe** fatigué · **blij** content · **gestrest** stressé', '**ontspannen** détendu · **druk** occupé · **nerveus** nerveux', '**gelukkig** heureux · **verdrietig** triste · **bang** qui a peur'], bullets: false },
      { h: 'NUANCEURS · DU PLUS FAIBLE AU PLUS FORT', color: 'accent1', f: 'een beetje < vrij < heel < ontzettend', lines: ['un peu < assez < très (aussi **zeer**) < extrêmement', 'Juste **avant** l’adjectif : //Ik ben **vrij** nerveus.//'] },
    ],
    foot: { kind: 'trap', text: '//Je suis occupé// = //Ik **heb het** druk// (//Ik ben druk// = je suis agité !). //J’ai peur// = //Ik **ben** bang// — avec **zijn**, pas hebben.' },
    notes: "Les deux structures disent la même chose ; « Ik voel me » insiste sur le ressenti. Faire produire : un adjectif + un nuanceur + une structure, vrai pour soi (« Ik voel me een beetje moe »). Le livret présente « druk » comme adjectif (« Ik ben druk ») : en néerlandais standard, « occupé » se dit « het druk hebben » ; « druk zijn » veut dire être agité, remuant (un enfant druk). Dans « Hoe gaat het? — Druk! », la réponse elliptique est correcte.",
  });

  // ------------------------------------------------------------ 1.2.10 (p. 32) + photo
  d.exercise({
    title: '1.2.10 De juiste emotie kiezen', tag: 'COUCHE 3', page: 'Livret p. 32',
    instr: 'Seul ou à deux · 5 min — Lisez le contexte et choisissez l’adjectif qui convient le mieux.',
    gap: 12, size: 18,
    items: [
      'Pieter heeft vandaag veel werk en morgen nog meer. → Pieter {{is}} ++heeft het++ [[druk]]. //(blij · druk · ontspannen)//',
      'Emma heeft goed nieuws gekregen van haar familie. → Emma voelt zich [[gelukkig]]. //(verdrietig · gelukkig · bang)//',
      'Sarah heeft vannacht niet goed geslapen. → Sarah is [[moe]]. //(moe · nerveus · blij)//',
      'Pieter heeft morgen een belangrijk examen en hij weet niet of hij klaar is. → Pieter voelt zich [[gestrest]]. //(ontspannen · gestrest · gelukkig)//',
      'Emma is op vakantie en ligt op het strand. → Emma is heel [[ontspannen]]. //(druk · ontspannen · verdrietig)//',
    ],
    img: 'emoties_groep', imgH: 1.95,
    aside: { label: 'SUR LA PHOTO (P. 32)', icon: 'FaComments', color: 'accent2', lines: ['//Ik voel me een beetje verward.//', '//Ik voel me heel blij!//', '//Ik ben vrij moe.//', '//Ik **ben** vrij **gemotiveerd**!//'] },
    traps: ['Item 1 : //Pieter **heeft het** druk// (//Pieter is druk// = il est agité).', '**zich voelen** : //Emma voelt **zich**…//', 'Nuanceur juste avant l’adjectif : //heel ontspannen//.'],
    notes: "Commencer par la photo (p. 32) : qui est content, fatigué, perdu ? Coquille du livret dans une bulle : « Ik bem vrij gemotivreerd! » → « Ik ben vrij gemotiveerd! ». Verward = perdu, confus ; rustig = calme. Item 1 : le contexte du livret est « Pieter heeft veel werk vandaag en morgen heeft hij nog meer » (légèrement raccourci ici). Item 3 : point final manquant dans le livret.",
    notesA: "Item 1 : le livret attend « Pieter is druk » ; on accepte le choix « druk », mais on corrige la tournure : « Pieter heeft het druk ». Les autres réponses ne posent pas de problème.",
  });

  // ------------------------------------------------------------ Raad de emoties (p. 33)
  d.picture({
    title: 'Jij nu! Raad de emoties', tag: 'JIJ NU!', page: 'Livret p. 33', img: 'jijnu_1_2',
    capLabel: 'COMMENT JOUER', capColor: 'accent1', capIcon: 'FaUsers',
    caption: ['Par deux · 10 min · **6 mimes** chacun, puis on change de rôle.', 'A choisit en secret **un nuanceur + un adjectif**, puis mime.', 'B devine : //Je bent een beetje moe!// · //Je voelt je heel gestrest!//', 'A répond : //Ja!// ou //Nee, ik ben ontzettend moe!//', 'Une case cochée par émotion **juist geraden**.'],
    notes: "« Zinnenbouwer fermé » : on cache le zinnenbouwer 1.2 ; adjectifs et nuanceurs viennent de la règle p. 30–31 (laisser la diapositive des cartes au tableau pour les plus lents). Attention : « je voelt je » (tu te sens) — avec jij/je, le pronom réfléchi est « je ». « Nuanceur » est le mot du livret pour « intensificateur ».",
  });

  // ------------------------------------------------------------ EXTRA Intensiteit (p. 34)
  d.exercise({
    title: 'EXTRA Intensiteit toevoegen', tag: 'EXTRA', page: 'Livret p. 34',
    instr: 'Seul ou à deux · 5 min — Complétez avec le nuanceur qui correspond à l’intensité indiquée.',
    gap: 16,
    items: [
      'Ik ben [[een beetje]] moe. //(légère)//',
      'Pieter voelt zich [[ontzettend]] gestrest. //(très forte)//',
      'Ik voel me [[vrij]] nerveus voor de presentatie. //(moyenne)//',
      'Sarah is [[ontzettend]] gelukkig in Nederland. //(extrême)//',
      'Wij {{zijn}} ++hebben het++ [[heel]] druk deze week. //(forte)//',
    ],
    aside: { label: 'LES NUANCEURS', icon: 'FaThermometerHalf', color: 'accent1', lines: ['léger : **een beetje**', 'moyen : **vrij**', 'fort : **heel / zeer**', 'intense : **ontzettend**'] },
    traps: ['Item 2 : accepter aussi **heel / zeer**.', 'Item 5 : //Wij **hebben het** druk// (✗ //Wij zijn druk//).', 'Le nuanceur se place **juste avant** l’adjectif.'],
    notes: "Rapide, à l’oral après 3 minutes d’écrit. Fin de la séquence 1.2 : « Vous savez maintenant prendre des nouvelles et y répondre en néerlandais ! »",
    notesA: "Item 2 : « intensité très forte » est ambigu (entre fort et intense) ; la clé la plus logique est « ontzettend », mais accepter « heel / zeer ». Item 5 : le livret écrit « Wij zijn … druk deze week » ; corriger en « Wij hebben het heel druk deze week » (ou « Wij hebben het deze week heel druk »). Item 4 : Sarah vient de Gent ; « in Nederland » reste possible (elle y est peut-être en vacances).",
  });

  // ------------------------------------------------------------ Grammaire A2-08 Zich wassen (p. 75)
  d.table({
    title: 'Grammaire : zich voelen, zich wassen', tag: 'GRAMMATICA', page: 'Livret p. 75',
    intro: 'Le pronom réfléchi **change avec la personne** (me · je · zich · ons) et se place **juste après le verbe conjugué**.',
    headers: ['PERSONNE', 'ZICH WASSEN · se laver', 'ZICH VOELEN · se sentir', 'FRANÇAIS'],
    colW: [1.9, 3.2, 3.45, 3.58], boldCol: 0,
    rows: [
      ['ik', 'ik was ##me##', 'ik voel ##me## goed', 'je me sens bien'],
      ['jij / je', 'jij wast ##je##', 'jij voelt ##je## goed', 'tu te sens bien'],
      ['u', 'u wast ##zich## / ##u##', 'u voelt ##zich## goed', 'vous vous sentez bien'],
      ['hij / zij', 'hij wast ##zich##', 'zij voelt ##zich## goed', 'il / elle se sent bien'],
      ['wij / we', 'wij wassen ##ons##', 'wij voelen ##ons## goed', 'nous nous sentons bien'],
      ['jullie', 'jullie wassen ##je##', 'jullie voelen ##je## goed', 'vous vous sentez bien'],
      ['zij / ze', 'zij wassen ##zich##', 'zij voelen ##zich## goed', 'ils / elles se sentent bien'],
    ],
    foot: 'Piège pour francophones : pas de //zich// pour //se promener// = **wandelen**, //se réveiller// = **wakker worden**, //se lever// = **opstaan**.',
    notes: "Fiche de grammaire A2-08. À retenir : 3e personne = zich ; jij et jullie = je ; wij = ons. Avec u, on entend « zich » et « u » (u wast zich / u wast u). Après inversion, le pronom réfléchi suit le sujet : « Vandaag voel ik me goed », « Hoe voel je je? ». Les plus fréquents : zich voelen, zich vergissen (se tromper), zich haasten (se dépêcher), zich voorstellen (se présenter).",
  });

  d.exercise({
    title: 'A2-08 Oefening — Écris le pronom', tag: 'GRAMMATICA', page: 'Livret p. 75',
    instr: 'Seul · 5 min — Complétez avec le pronom réfléchi : **me · je · zich · ons**.',
    gap: 14,
    items: ['Ik verveel [[me]].', 'Zij voelt [[zich]] niet lekker.', 'Haast [[je]]! //(dépêche-toi)//', 'Peter kleedt [[zich]] aan.', 'Wij haasten [[ons]] naar de trein.', 'Ik verheug [[me]] op de vakantie.'],
    aside: { label: 'LES PLUS FRÉQUENTS', icon: 'FaLightbulb', color: 'accent2', lines: ['//zich voelen// se sentir', '//zich vergissen// se tromper', '//zich haasten// se dépêcher', '//zich voorstellen// se présenter', '//zich vervelen// s’ennuyer', '//zich verheugen op// se réjouir de'] },
    traps: ['//Haast **je**!// : impératif (tu) + **je**.', '//aankleden// est séparable : //Peter kleedt **zich** aan.//', '//zich verheugen **op**// = se réjouir **de**.'],
    notes: "« Zich niet lekker voelen » = ne pas se sentir bien (familier). Le livret écrit « Peter » (et non Pieter) : sans importance.",
  });

  d.exercise({
    title: 'Hoe voel je je? — traduisez', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Traduisez en néerlandais. Attention à la **place du pronom** et aux verbes **sans** zich.',
    cols: 2, gap: 12,
    items: [
      'Aujourd’hui, je me sens bien. → [[Vandaag voel ik me goed.]]',
      'Comment te sens-tu ? → [[Hoe voel je je?]]',
      'Emma se sent un peu stressée. → [[Emma voelt zich een beetje gestrest.]]',
      'Nous nous dépêchons ! → [[Wij haasten ons!]]',
      'Vous vous trompez, Monsieur Janssens. → [[U vergist zich, meneer Janssens.]]',
      'Je m’ennuie, car je n’ai pas de travail. → [[Ik verveel me, want ik heb geen werk.]]',
      'Pieter se lève à sept heures. → [[Pieter staat om zeven uur op.]]',
      'Puis-je me présenter ? → [[Mag ik me voorstellen?]]',
    ],
    traps: ['Inversion : //Vandaag voel **ik me**…// · //Hoe voel **je je**?//', '//se lever// = **opstaan** : pas de zich !', '//U vergist **zich**// (ou //u vergist u//).'],
    notes: "Exercice ajouté : réemploi oral de la fiche A2-08. Faire lire les phrases avec le geste (se dépêcher, s’ennuyer…).",
  });

  // ------------------------------------------------------------ Fiche 8 Exprimer ses émotions (p. 99)
  d.table({
    title: 'Fiche 8 : Exprimer ses émotions — vocabulaire', tag: 'MISE EN SITUATION', page: 'Livret p. 99',
    intro: 'Nouveau vocabulaire du **Jalon 1** (demander) et du **Jalon 2** (répondre en donnant la raison).',
    headers: ['JALON 1 · NL', 'FRANÇAIS', 'JALON 2 · NL', 'FRANÇAIS'],
    colW: [2.45, 3.0, 2.9, 3.78], boldCol: 0,
    rows: [
      ['moe', 'fatigué(e)', '**omdat**', 'parce que (verbe à la fin)'],
      ['gestrest', 'stressé(e)', '**daarom**', 'c’est pourquoi (inversion)'],
      ['rustig', 'calme', '**want**', 'car (ordre normal)'],
      ['vrij', 'libre · assez (vrij moe)', '**vanwege** + nom', 'à cause de'],
      ['heel', 'très', '**te veel**', 'trop (de)'],
      ['bezet', 'occupé(e), pris(e)', '**te weinig**', 'trop peu (de)'],
      ['een beetje', 'un peu', '^^de^^ **druk**', 'la pression'],
      ['ontzettend', 'extrêmement', '%%het%% **werk**', 'le travail'],
    ],
    notes: "« vrij » a deux sens : libre (Ben je vanavond vrij?) et assez (Ik ben vrij moe). Le sommaire de la Section 4 (PDF p. 99 du livret) annonce « 08 À la réception de l’hôtel » : la fiche 8 réelle est « Exprimer ses émotions ». Seuls deux noms : de druk, het werk.",
  });

  d.table({
    title: 'Fiche 8 : Jalon 1 (A1) et Jalon 2 (A2)', tag: 'MISE EN SITUATION', page: 'Livret p. 99',
    intro: '**I** interrogative · **D** déclarative · **N** négative — on tutoie (je). Jalon 2 : donnez la raison.',
    headers: ['N°', 'TYPE', 'FRANÇAIS', 'NEDERLANDS'],
    colW: [0.75, 0.65, 5.5, 5.23], align: ['center', 'center', 'left', 'left'], size: 15,
    rows: [
      ['J1·1', 'I', 'Comment te sens-tu aujourd’hui ?', '[[Hoe voel je je vandaag?]]'],
      ['J1·2', 'I', 'Es-tu très fatigué ?', '[[Ben je heel moe?]]'],
      ['J1·3', 'I', 'Te sens-tu un peu stressé ?', '[[Voel je je een beetje gestrest?]]'],
      ['J1·4', 'N', 'Pourquoi ne te sens-tu pas bien ?', '[[Waarom voel je je niet goed?]]'],
      ['J1·5', 'I', 'Es-tu libre ce soir, ou occupé ?', '[[Ben je vanavond vrij, of ben je bezet?]]'],
      ['J2·1', 'D', 'Je suis fatigué parce que j’ai trop de travail.', '[[Ik ben moe omdat ik te veel werk heb.]]'],
      ['J2·2', 'D', 'Je me sens stressé à cause de la pression au travail.', '[[Ik voel me gestrest vanwege de druk op het werk.]]'],
      ['J2·3', 'N', 'Je ne suis pas motivé, car je dors trop peu.', '[[Ik ben niet gemotiveerd, want ik slaap te weinig.]]'],
      ['J2·4', 'D', 'Je dors trop peu, c’est pourquoi je suis si fatigué.', '[[Ik slaap te weinig, daarom ben ik zo moe.]]'],
      ['J2·5', 'D', 'Mais aujourd’hui ça va, parce que j’ai peu de travail.', '[[Maar vandaag gaat het wel, omdat ik weinig werk heb.]]'],
    ],
    notes: "Jalon 1 (A1) : 5 questions ; Jalon 2 (A2) : 5 réponses avec la raison. Seul 10 min, puis comparaison par deux. Les deux jalons sont réunis sur une diapositive (lignes J1 et J2).",
    notesA: "Variantes acceptables : J1·5 « Ben je vanavond vrij, of heb je het druk? » ; J2·1 « …omdat ik te veel werk heb » (verbe à la fin !) ; J2·2 « …vanwege de werkdruk » ; J2·5 « Maar vandaag gaat het, want ik heb weinig werk ». Le type « N » de J1·4 est une question négative.",
  });

  d.blocks({
    title: 'Phrase-clé : want, omdat, daarom, vanwege', tag: 'GRAMMATICA', page: 'Livret p. 99',
    intro: 'Regardez **où va le verbe**. Et **vanwege** + nom, sans verbe : //vanwege **de druk** op het werk//.',
    rows: [
      { label: 'want', cells: [{ t: 'Ik ben moe,', role: 'X', lab: 'phrase 1' }, { t: 'want', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'slaap', role: 'V' }, { t: 'te weinig', role: 'M', lab: 'complément' }], fr: '…car je dors trop peu. → **ordre normal** : sujet + verbe' },
      { label: 'omdat', cells: [{ t: 'Ik ben moe', role: 'X', lab: 'phrase 1' }, { t: 'omdat', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'te veel werk', role: 'O', lab: 'complément' }, { t: 'heb', role: 'V' }], fr: '…parce que j’ai trop de travail. → le verbe va **à la fin**' },
      { label: 'daarom', cells: [{ t: 'Ik slaap te weinig,', role: 'X', lab: 'phrase 1' }, { t: 'daarom', role: 'C' }, { t: 'ben', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'zo moe', role: 'O', lab: 'complément' }], fr: '…c’est pourquoi je suis si fatigué. → **inversion** : verbe + sujet' },
    ],
    foot: { kind: 'trap', text: 'Le français dit //parce que **j’ai** trop de travail//. Le néerlandais envoie le verbe à la fin : //omdat ik te veel werk **heb**// (✗ //omdat ik heb te veel werk//).' },
    notes: "Want a été vu à la séance 4 (fiche A2-06). Faire transformer à l’oral : « Ik ben moe, want ik heb veel werk » → « Ik ben moe omdat ik veel werk heb » → « Ik heb veel werk, daarom ben ik moe ».",
  });

  d.steps({
    title: 'Jeu de rôle : « Hoe voel je je vandaag? »', tag: 'MISE EN SITUATION', page: 'Livret p. 99',
    intro: 'Par deux · 10 min — A demande comment B se sent ; B répond avec **une raison vraie**. Puis on inverse.',
    steps: [
      { h: 'A demande', color: 'accent2', lines: ['//Hoe voel je je vandaag?//', '//Ben je moe? Gestrest?//'] },
      { h: 'B répond', color: 'accent1', lines: ['//Ik ben vrij moe omdat ik te veel werk heb.//'] },
      { h: 'A creuse', color: 'accent3', lines: ['//Waarom voel je je niet goed?//', '//Ben je vanavond vrij?//'] },
      { h: 'B conclut', color: 'accent4', lines: ['//Ik slaap te weinig, daarom ben ik zo moe.//', '//Maar vanavond ben ik vrij!//'] },
      { h: 'Avec u', color: 'tx2', lines: ['On rejoue : B = votre chef.', '//Hoe voelt u zich vandaag?//'] },
    ],
    foot: { kind: 'keep', label: 'Critères', text: 'au moins **un** //omdat// (verbe à la fin), **un** //daarom// (inversion) et **un** nuanceur (een beetje, vrij, heel, ontzettend).' },
    notes: "Les observateurs (groupes de trois) cochent les critères. Passer dans les rangs pour vérifier le verbe à la fin après omdat. Version « u » : « Hoe voelt u zich? — Ik voel me goed, dank u. »",
  });

  d.closing({
    cliff: 'Séance 6 : **zijn** et **hebben**, les deux verbes de presque toutes vos phrases — et pourquoi on dit //Ik **heb** honger// mais //Ik **ben** bang//.',
    homework: ['Refaire le chrono **1.2.7** et battre votre temps.', 'Apprendre **zich voelen** : me · je · zich · ons.', 'Écrire **5 phrases** vraies : //Ik voel me … omdat …// et //…, daarom …//', 'Relire la **fiche 8** (p. 99) à voix haute.'],
    exit: 'Comment vous sentez-vous maintenant ? Une phrase avec **un nuanceur** et **omdat**.',
    notes: "Ticket de sortie à l’oral, un par un : « Ik voel me een beetje moe omdat … ». Vérifier le verbe à la fin.",
  });
};
