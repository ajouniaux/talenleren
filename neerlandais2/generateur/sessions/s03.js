// Séance 3 — Samengestelde woorden · Hoe gaat het? (Séquence 1.2, 1/3) — Livret p. 15–23 + A1-07 Getallen & klok p. 64 + V10 Tijd & weer p. 87
const PURPLE = '6E4A9E';

exports.meta = {
  n: 3, slug: 'Samengestelde_woorden_Hoe_gaat_het', title: 'Hoe gaat het?',
  subtitle: 'Mots composés, prendre des nouvelles, l’heure et la météo',
  pages: 'Livret p. 15–23 · 64 · 87', img: 'scene_1_2', time: '1.2', sceneLabel: 'SÉQUENCE',
  block: 'Section 1 · Premiers pas en néerlandais',
  coverNotes: "Séance charnière : on termine la séquence 1.1 avec les mots composés (p. 15–18, trois EXTRA), puis on ouvre la séquence 1.2 « Prendre des nouvelles » (p. 19–23 : zinnenbouwer 1.2, degrés de formalité, exercices de réception 1.2.1 et 1.2.2). Fiche de grammaire 07 (nombres et heure, p. 64) et vocabulaire 10 (Tijd & weer, p. 87).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Comprendre et former des **mots composés**, demander et répondre à **Hoe gaat het?** selon la formalité, dire l’**heure** et les **nombres**.',
    language: '//ochtendmens · middagdutje// — //Hoe gaat het (met u)? · Het gaat goed, dank je. · Het kan beter.// — //half negen · kwart over acht//',
    skills: 'Repérer des mots dans un texte lu · remettre des blocs dans l’ordre · compter, lire l’heure · parler du temps qu’il fait',
    agenda: [['Échauffement : ma journée', 5], ['Les mots composés + EXTRA', 20], ['Séquence 1.2 · zinnenbouwer 1.2', 10], ['Degrés de formalité', 5], ['1.2.1 · 1.2.2 (réception)', 15], ['Getallen & klok (fiche 07)', 15], ['Tijd & weer + bonus', 15], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. L’EXTRA « Opdracht » (5 mots composés, 10 min) peut être donné en devoir si le temps manque. Les textes 1 et 2 de la séquence 1.2 sont lus par le professeur ; le texte 1 se reconstitue entièrement à partir des versions A et B de 1.2.1.",
  });

  d.exercise({
    title: 'Échauffement : ma journée en trois phrases', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 2', mode: 'a',
    instr: 'Par deux · 5 min. Dites **trois phrases vraies** sur votre journée. Chaque phrase **commence par un moment**. Le voisin vérifie l’inversion.',
    number: false, gap: 10,
    items: [
      { h: 'Exemples' },
      { t: '’s Morgens **drink ik** koffie.' },
      { t: 'Vanmiddag **ga ik** naar de cursus.' },
      { t: 'Morgen **reis ik** met de trein naar Gent.' },
      { h: 'Le voisin réagit' },
      { t: '//Goed zo!// — ou — //Pas op: het werkwoord!//' },
    ],
    expect: ['Moment → **verbe** → **sujet**.', 'Ordre **T-M-P** : quand → comment → où.', 'Avec //jij// : //Werk **jij** ook ’s avonds?//'],
    notes: "Rappel de la fiche Woordvolgorde (séance 2). Vérifier aussi les devoirs : les 5 phrases commençant par un moment. Si une erreur revient (’s Morgens ik drink…), la corriger au tableau avec les blocs de couleur.",
  });

  d.picture({
    title: 'Les mots composés en néerlandais', tag: 'À RETENIR', page: 'Livret p. 15', img: 'samengestelde_woorden',
    capLabel: 'MOT 1 + MOT 2', capColor: 'accent2', capIcon: 'FaPuzzlePiece',
    caption: ['**een ochtendmens** : //ochtend// (matin) + //mens// (personne) = quelqu’un en forme le matin.', '**een middagdutje** : //middag// (après-midi) + //dutje// (sieste) = une petite sieste.', '**een avondwandeling** : //avond// (soir) + //wandeling// (promenade) = une balade le soir.', '**een zaklamp** (image) : //zak// (poche) + //lamp// = une lampe de poche.'],
    notes: "Le néerlandais colle les mots pour créer un mot nouveau. Faire deviner le sens de chaque mot avant d’afficher la décomposition. Question à la classe : « Êtes-vous un ochtendmens ou un avondmens ? » (Ik ben een ochtendmens.)",
  });

  d.cards({
    title: 'Comment former un mot composé ?', tag: 'À RETENIR', page: 'Livret p. 15–16',
    perRow: 3, fLines: 2,
    cards: [
      { h: '① LE PRINCIPE', color: 'accent2', f: 'avond + wandeling', lines: ['On **colle** les mots : ni espace, ni tiret.', '= //avondwandeling//'] },
      { h: '② L’ORDRE', color: 'accent3', f: 'précision + mot principal', lines: ['Le mot **principal** est à la **fin**.', '//koffie**pauze**// = une **pause** (café).'] },
      { h: '③ DE OF HET ?', color: 'accent4', f: '%%het%% dutje → %%het%% middagdutje', lines: ['Le **dernier mot** décide de l’article.', '^^de^^ mens → ^^de^^ ochtendmens', '^^de^^ wandeling → ^^de^^ avondwandeling'] },
    ],
    foot: { kind: 'trap', text: 'Le français commence par le mot principal (//une **pause** de midi//) ; le néerlandais le met **à la fin** : //middag**pauze**//. ✗ //pauzemiddag//' },
    notes: "Les trois règles de l’encadré « Comment former un mot composé ? » (p. 15–16). Comparer avec l’anglais (evening walk, coffee break), qui fonctionne de la même façon. Parfois un -s- ou -e- de liaison apparaît (arbeid-s-ongeschiktheid, zonn-e-bril) : on le verra dans les mots longs.",
  });

  d.exercise({
    title: 'EXTRA Samengestelde woorden herkennen', tag: 'EXTRA', page: 'Livret p. 16',
    instr: 'Correct ou incorrect (ordre des mots) ? Seul · 5 min.',
    gap: 14,
    items: [
      '**mensavond** //(personne du soir)// → {{correct}} · <<incorrect>>  ++→ ^^de^^ avondmens++',
      '**koffiepauze** //(pause-café)// → <<correct>> · {{incorrect}}  ++(^^de^^ koffiepauze)++',
      '**werkdag** //(jour de travail)// → <<correct>> · {{incorrect}}  ++(^^de^^ werkdag)++',
      '**dagwerk** //(travail de jour)// → <<correct>> · {{incorrect}}  ++(%%het%% dagwerk)++',
      '**middagpauze** //(pause de midi)// → <<correct>> · {{incorrect}}  ++(^^de^^ middagpauze)++',
    ],
    expect: ['Où est le **mot principal** ?', 'Il doit être **à la fin**.', 'Bonus : de ou het ?'],
    traps: ['Le mot **principal** à la fin : //avond**mens**// = une **personne** (du soir).', '//werkdag// ≠ //dagwerk// : mêmes mots, **autre sens** !', 'L’article vient du **dernier mot** : %%het%% werk → %%het%% dagwerk.'],
    notes: "Faire voter la classe (main levée) pour chaque mot, puis corriger.",
    notesA: "Seul « mensavond » est incorrect : le mot principal (mens) doit être à la fin → avondmens. Les articles ajoutés en vert ne sont pas demandés par le livret : ils réactivent la règle de/het.",
  });

  d.exercise({
    title: 'EXTRA Opdracht : mes cinq mots composés', tag: 'EXTRA', page: 'Livret p. 17', mode: 'a',
    instr: 'Cherchez **5 mots composés** liés à vos études, votre travail ou vos loisirs. Notez la **traduction** et la **décomposition**. Seul · 10 min (ou à la maison).',
    number: false, gap: 8,
    items: [
      { h: 'Format attendu (livret)' },
      { t: '**computerwetenschappen** //(informatique)// → computer (ordinateur) + wetenschappen (sciences)' },
      { h: 'Autres exemples' },
      { t: '%%het%% **ziekenhuis** //(hôpital)// → zieken (malades) + huis (maison)' },
      { t: '^^de^^ **werkgever** //(employeur)// → werk (travail) + gever (celui qui donne)' },
      { t: '%%het%% **rijbewijs** //(permis de conduire)// → rij(den) (conduire) + bewijs (preuve)' },
      { t: '%%het%% **kinderdagverblijf** //(crèche)// → kinder (enfants) + dag + verblijf (séjour)' },
    ],
    expect: ['**5 mots** : NL + FR + décomposition.', '**Bonus** : l’article (le dernier mot décide).', 'Vérifiez dans un **dictionnaire** en ligne.'],
    notes: "Production libre : pas de correction unique. Proposer de faire l’exercice à la maison et de présenter un mot au début de la séance 4. Vérifier l’article avec la règle : het huis → het ziekenhuis ; het bewijs → het rijbewijs ; het verblijf → het kinderdagverblijf ; de gever → de werkgever.",
  });

  d.exercise({
    title: 'EXTRA Lange samengestelde woorden uitspreken', tag: 'EXTRA', page: 'Livret p. 17–18', mode: 'a',
    instr: 'Défi chronomètre · à plusieurs · 5 min : **1 minute** pour prononcer correctement un maximum de mots. Qui sera le champion ?',
    gap: 12,
    items: [
      '**arbeidsongeschiktheidsverzekering** //— assurance invalidité//',
      '**kindercarnavalsoptochtvoorbereidingswerkzaamheden** //— préparatifs du défilé de carnaval pour enfants//',
      '**meervoudige persoonlijkheidsstoornis** //— trouble de la personnalité multiple//',
      '**afvalwaterzuiveringsinstallatie** //— station d’épuration des eaux usées//',
      '**schaatsenrijdersverenigingsbestuursvergadering** //— réunion du conseil de l’association des patineurs//',
    ],
    img: 'langste_woord', imgH: 2.5,
    aside: { label: 'ASTUCE', icon: 'FaLightbulb', color: 'accent2', lines: ['**Découpez** : //afval · water · zuiverings · installatie//.', 'Puis **accélérez**.'] },
    notes: "Coquilles du livret : (1) « meervoudigepersoonlijkheidsstoornis » s’écrit en deux mots, « meervoudige persoonlijkheidsstoornis » (adjectif + nom) : ce n’est pas un mot composé ; (2) les décompositions oublient les -s- de liaison (arbeid-s-ongeschiktheid-s-verzekering, vereniging-s-bestuur-s-vergadering) ; (3) la p. 18 se termine par « Vous savez maintenant saluer… » (copie de la p. 14). L’image montre le mot de 53 lettres « kindercarnavalsoptochtvoorbereidingswerkzaamhedenplan ».",
  });

  d.scene({
    title: 'Séquence 1.2 : prendre des nouvelles', tag: 'FOCUS', page: 'Livret p. 19', img: 'scene_1_2', time: '1.2', sceneLabel: 'SÉQUENCE',
    text: ['**Focus : lignes 2–4 du dialogue**', 'Pieter : «**Hoe gaat het?**»', 'Emma : «Het gaat goed, dank je. Ik ben een beetje moe, want ik heb veel werk. **En met jou?**»', 'Pieter : «Ook goed, bedankt! Ik ben blij, want vandaag heb ik tijd.»'],
    ask: 'Comment Emma renvoie-t-elle la question ? Et en vouvoyant ?',
    notes: "Après avoir salué, la question naturelle est « Hoe gaat het? » (encadré « Pourquoi… » de la p. 19). Réponse à la question : « En met jou? » (et toi ?) ; en vouvoyant : « En met u? ». Le livret annonce qu’on répond « avec la préposition met » : en fait, met apparaît dans la question retournée (En met jou?), pas dans la réponse (Het gaat goed). Petite incohérence : ici Emma dit « Ik ben een beetje moe », dans le dialogue de la p. 3 « Ik ben moe ».",
  });

  d.picture({
    title: 'Zinnenbouwer 1.2 — Hoe gaat het?', tag: 'ZINNENBOUWER', page: 'Livret p. 20', img: 'zinnenbouwer_1_2',
    capLabel: 'MODE D’EMPLOI', capColor: 'tx2', capIcon: 'FaPuzzlePiece',
    caption: ['Quatre familles : **A** la question · **B** //Het gaat…// · **C** //Ik ben / Ik voel me// · **D** expressions toutes faites.', '**A** : //Hoe gaat het// + //met u// → //Hoe gaat het met u?//', '**B** : //Het gaat// + //heel// + //goed// → //Het gaat heel goed.//', '**C** : //Ik voel me// + //een beetje// + //moe// → //Ik voel me een beetje moe.//', '**D** : //Het kan beter. · Het valt niet mee. · Uitstekend, dank u.//', 'Toutes les combinaisons ne marchent pas : ✗ //Hoe maakt u het met u?// ✗ //Het gaat heel wel.//'],
    notes: "Coquilles du zinnenbouwer 1.2 : le sous-titre annonce « Cinq familles » mais il y en a quatre (A à D) ; « génère à elle plus de trente phrases » → « à elle seule ». Combinaisons impossibles à signaler : « Hoe maakt u het » + « met u » ; « heel / redelijk » + « wel » ; « Ik ben niet » + « niet zo ». « Het gaat wel » = ça va, sans plus. « Het kan beter » = ça pourrait aller mieux. « Het valt niet mee » = ce n’est pas facile.",
  });

  d.table({
    title: 'Degrés de formalité', tag: 'À RETENIR', page: 'Livret p. 21',
    headers: ['DEGRÉ', 'VRAAG', 'TRADUCTION', 'CONTEXTE'],
    colW: [2.3, 3.2, 2.8, 3.83], boldCol: 1,
    rows: [
      ['!!très informel!!', 'Gaat het?', 'Ça va ?', 'Très rapide, entre amis (ou : ça va aller ?)'],
      ['!!très informel!!', 'Alles goed?', 'Tout va bien ?', 'Familier, décontracté'],
      ['##informel##', 'Hoe gaat het met je?', 'Comment vas-tu ?', 'Tutoiement'],
      ['##informel##', 'Hoe is het?', 'Comment ça va ?', 'Très courant, entre amis et collègues'],
      ['++neutre++', 'Hoe gaat het?', 'Comment ça va ?', 'Standard, universel'],
      ['^^formel^^', 'Hoe gaat het met u?', 'Comment allez-vous ?', 'Vouvoiement'],
      ['^^formel^^', 'Hoe maakt u het?', 'Comment allez-vous ?', 'Très formel, un peu vieilli'],
    ],
    foot: 'Pour remercier : //dank je// (tutoiement) · //dank u// (vouvoiement). Pour renvoyer la question : //En met jou?// · //En met u?//',
    notes: "Lire du plus familier au plus formel. Faire classer : à qui pose-t-on chaque question ? (un ami, un collègue, le directeur, une personne âgée). « Hoe maakt u het? » se comprend, mais on l’entend peu : préférer « Hoe gaat het met u? ».",
  });

  d.exercise({
    title: '1.2.1 «Snel groeten» — versie A', tag: 'COUCHE 1', page: 'Livret p. 22',
    instr: 'Le professeur lit le **texte 1** lentement, deux fois. Version A : les **questions**, les **réponses** et les **nuances** manquent.',
    number: false, gap: 8,
    items: [
      { t: '**Pieter :** Goedemiddag, meneer Janssens! [[Hoe gaat het met u]]?' },
      { t: '**Janssens :** [[Het gaat prima]], dank je, Pieter. [[En met jou]]?' },
      { t: '**Pieter :** [[Het kan beter]]. Ik voel me [[een beetje]] nerveus, want ik heb vanmiddag een presentatie.' },
      { t: '**Janssens :** Ah, de presentatie! En [[hoe gaat het]] met het werk?' },
      { t: '**Pieter :** [[Het gaat wel]], dank u. Ik ben [[vrij]] druk, maar het weekend is rustig.' },
      { t: '**Janssens :** Goed zo! Tot straks, Pieter!' },
      { t: '**Pieter :** Dank u, meneer. Tot straks!' },
    ],
    expect: ['Couche 1 · seul · 10 min', '1re écoute : **complétez**.', '2e écoute : **vérifiez**.', 'Aide : le **zinnenbouwer 1.2**.'],
    traps: ['Janssens dit **dank je** à Pieter, Pieter dit **dank u** à Janssens : âge et hiérarchie.', '//Het kan beter// = ça pourrait aller mieux.', '//Het gaat wel// = ça va, sans plus.'],
    notes: "Le texte 1 n’est pas imprimé dans le livret, mais il se reconstitue entièrement avec les versions A et B : la correction ci-après est le texte complet. Coquille : l’exercice 1.2.1 porte le même titre que 1.1.7 (« Snel groeten ») ; son contenu correspond plutôt à « Hoe gaat het? ».",
    notesA: "Faire relire le texte complet en binôme (Pieter / Janssens). Remarque : « Ik ben vrij druk » se dit, mais la tournure la plus courante pour « je suis assez occupé » est « Ik heb het vrij druk ».",
  });

  d.exercise({
    title: '1.2.1 «Snel groeten» — versie B', tag: 'COUCHE 1', page: 'Livret p. 22',
    instr: 'Même texte. Version B : les **petits mots** manquent : //met, en, want, dank, maar, u//.',
    number: false, gap: 8, size: 19,
    items: [
      { t: '**Pieter :** Goedemiddag, meneer Janssens! Hoe gaat het [[met]] u?' },
      { t: '**Janssens :** Het gaat prima, [[dank]] je, Pieter. [[En]] met jou?' },
      { t: '**Pieter :** Het kan beter. Ik voel me een beetje nerveus, [[want]] ik heb vanmiddag een presentatie.' },
      { t: '**Janssens :** Ah, de presentatie! [[En]] hoe gaat het [[met]] het werk?' },
      { t: '**Pieter :** Het gaat wel, dank [[u]]. Ik ben vrij druk, [[maar]] het weekend is rustig.' },
      { t: '**Janssens :** Goed zo! Tot straks, Pieter!' },
      { t: '**Pieter :** Dank [[u]], meneer. Tot straks!' },
    ],
    expect: ['Six mots possibles : //met · en · want · dank · maar · u//.', 'Certains servent **deux fois**.'],
    traps: ['**want** + raison (//want ik heb…//).', '**maar** + opposition (//maar het weekend is rustig//).', '**met** : //Hoe gaat het met u? · met het werk?//'],
    notes: "Version B pour les étudiants plus avancés, ou en deuxième passage pour tous. Coquilles de ponctuation dans la version B du livret : « dank ___ Ik ben vrij druk » (point manquant après u) et « Dank ___ meneer » (virgule manquante).",
    notesA: "Les mots en, met et u apparaissent deux fois. Want et maar seront approfondis à la séance 4 (fiche En · maar · want).",
  });

  d.exercise({
    title: '1.2.2 Zinnenpuzzel', tag: 'COUCHE 1', page: 'Livret p. 23',
    instr: 'Six répliques des textes 1 et 2, découpées en blocs. Remettez-les dans l’ordre et écrivez la phrase. Par deux · 5 min.',
    cols: 2, qGap: 16,
    items: [
      { q: 'een beetje  |  Ik ben  |  , want ik heb veel werk  |  moe', a: 'Ik ben een beetje moe, want ik heb veel werk.' },
      { q: 'blij  |  Ik voel me  |  , want ik heb goed nieuws', a: 'Ik voel me blij, want ik heb goed nieuws.' },
      { q: 'met u  |  Hoe gaat het  |  ?', a: 'Hoe gaat het met u?' },
      { q: 'een beetje  |  nerveus  |  Ik voel me  |  , want ik heb vanmiddag een presentatie', a: 'Ik voel me een beetje nerveus, want ik heb vanmiddag een presentatie.' },
      { q: 'druk  |  vrij  |  Ik ben  |  , maar het weekend is rustig', a: 'Ik ben vrij druk, maar het weekend is rustig.' },
      { q: 'dank u  |  Het gaat  |  wel  |  ,', a: 'Het gaat wel, dank u.' },
    ],
    notes: "Phrases à reconstruire avec l’ordre du zinnenbouwer 1.2 : amorce + nuance + adjectif + raison. Le texte 2 n’est pas reproduit dans le livret ; la solution se déduit des blocs.",
    notesA: "Points à souligner : la nuance se place devant l’adjectif (een beetje moe, vrij druk) ; après want et maar, l’ordre reste normal (ik heb, het weekend is).",
  });

  d.cards({
    title: 'Getallen & klok : nombres, heure, date', tag: 'GRAMMATICA', page: 'Livret p. 64',
    intro: 'À partir de 21 : l’**unité d’abord** (21 = een-**en**-twintig). Pour l’heure, **half** regarde vers l’heure **suivante**.',
    perRow: 4, bSize: 16,
    cards: [
      { h: 'A · LES NOMBRES', color: 'accent2', f: 'een-en-twintig', lines: ['21 **eenentwintig**', '35 **vijfendertig**', '74 **vierenzeventig**', '156 **honderdzesenvijftig**'] },
      { h: 'LES DIZAINES', color: 'accent3', f: '20 → 100', lines: ['20 twintig · 30 **dertig**', '40 **veertig** · 50 vijftig', '60 zestig · 70 zeventig', '80 **tachtig** · 90 negentig', '100 honderd'] },
      { h: 'B · HOE LAAT IS HET?', color: 'accent1', f: 'half negen', lines: ['8.00 **acht uur**', '8.15 **kwart over acht**', '8.30 **half negen** !', '8.45 **kwart voor negen**'] },
      { h: 'C · OM · OP · IN', color: PURPLE, f: 'om · op · in', lines: ['**om** + heure : //om acht uur//', '**op** + jour, date : //op maandag · op 1 mei//', '**in** + mois, saison : //in mei · in de zomer//'] },
    ],
    foot: { kind: 'trap', text: '//half drie// = **2 h 30**, et non 3 h 30 : on est à mi-chemin **vers** trois heures. Et 22 = //twee**ë**ntwintig// (tréma).' },
    notes: "Fiche de grammaire 07 (p. 64). La carte « Les dizaines » est ajoutée pour pouvoir faire l’exercice (48, 93) : attention à dertig (et non drietig), veertig (et non viertig), tachtig (et non achtig). Le trait d’union de « een-en-twintig » sert seulement à montrer la décomposition : on écrit eenentwintig, en un seul mot. Faire dire l’heure de la salle de cours en début et en fin d’explication.",
  });

  d.exercise({
    title: 'Oefening : écris en lettres', tag: 'GRAMMATICA', page: 'Livret p. 64',
    instr: 'Écrivez les nombres et l’heure en lettres ; complétez avec la bonne préposition.',
    cols: 2, gap: 16,
    items: ['48 → [[achtenveertig]]', '93 → [[drieënnegentig]]', '22 → [[tweeëntwintig]]', '10.30 → Het is [[half elf]].', '10.45 → Het is [[kwart voor elf]].', '[[op]] zaterdag · [[in]] juli'],
    expect: ['L’**unité** d’abord, puis //en//, puis la dizaine.', '**half** → l’heure suivante.', 'Seul · 5 min'],
    traps: ['Tréma : //drie**ë**nnegentig//, //twee**ë**ntwintig// (deux voyelles se suivent).', '10.30 = //half **elf**// (vers 11 h).', '**op** + jour · **in** + mois.'],
    notes: "Exercice de la fiche p. 64. Correction au tableau ; faire lire les nombres à voix haute.",
    notesA: "Le tréma de drieënnegentig / tweeëntwintig indique qu’on prononce les deux voyelles séparément (drie-en, twee-en). Accepter « ’s ochtends » ou « ’s morgens » si un étudiant précise le moment.",
  });

  d.imagier({
    title: 'Tijd & weer — le temps et la météo', tag: 'WOORDENSCHAT', page: 'Livret p. 87',
    perSlide: 15, quiz: true,
    words: [
      { img: 'v10_01', nl: 'zon', art: 'de', fr: 'le soleil' },
      { img: 'v10_02', nl: 'regen', art: 'de', fr: 'la pluie' },
      { img: 'v10_03', nl: 'wolk', art: 'de', fr: 'le nuage' },
      { img: 'v10_04', nl: 'wind', art: 'de', fr: 'le vent' },
      { img: 'v10_05', nl: 'sneeuw', art: 'de', fr: 'la neige' },
      { img: 'v10_06', nl: 'onweer', art: 'het', fr: 'l’orage' },
      { img: 'v10_07', nl: 'regenboog', art: 'de', fr: 'l’arc-en-ciel' },
      { img: 'v10_08', nl: 'mist', art: 'de', fr: 'le brouillard' },
      { img: 'v10_09', nl: 'temperatuur', art: 'de', fr: 'la température' },
      { img: 'v10_10', nl: 'klok', art: 'de', fr: 'l’horloge' },
      { img: 'v10_11', nl: 'kalender', art: 'de', fr: 'le calendrier' },
      { img: 'v10_12', nl: 'lente', art: 'de', fr: 'le printemps' },
      { img: 'v10_13', nl: 'zomer', art: 'de', fr: 'l’été' },
      { img: 'v10_14', nl: 'herfst', art: 'de', fr: 'l’automne' },
      { img: 'v10_15', nl: 'winter', art: 'de', fr: 'l’hiver' },
    ],
    notes: "Quiz « Wat is dit? » : montrer un numéro, la classe répond avec l’article (de zon, het onweer…). Vocabulaire 10, p. 87.",
    notesA: "Tous ces mots sont des de-woorden, sauf het onweer. Le titre lui-même : de tijd, het weer. Lien avec les mots composés : de regen + de boog = de regenboog (le dernier mot décide). Verbes utiles : het regent, het sneeuwt, het waait, de zon schijnt.",
  });

  d.exercise({
    title: 'Hoe laat is het? Welk seizoen?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Dites l’heure en néerlandais, puis traduisez les phrases (fiche 07 + vocabulaire p. 87).',
    columns: [
      ['7.15 → Het is [[kwart over zeven]].', '9.30 → Het is [[half tien]].', '12.00 → Het is [[twaalf uur]].', '16.45 → Het is [[kwart voor vijf]].', '20.30 → Het is [[half negen]].'],
      ['En juillet, c’est l’été. → [[In juli is het zomer.]]', 'En automne, il y a beaucoup de vent. → [[In de herfst is er veel wind.]]', 'En hiver, il y a parfois de la neige. → [[In de winter is er soms sneeuw.]]', 'Au printemps, je travaille dans le jardin. → [[In de lente werk ik in de tuin.]]', 'Après la pluie, l’arc-en-ciel ! → [[Na de regen komt de regenboog!]]'],
    ],
    gap: 12,
    notes: "Exercice ajouté : réemploi de la fiche 07 (heure, in + saison) et du vocabulaire Tijd & weer. Oral rapide pour la colonne de gauche, écrit pour la colonne de droite.",
    notesA: "Points à souligner : half + heure suivante (20.30 = half negen) ; « In de lente werk ik… » : le moment en tête entraîne l’inversion (séance 2). Proverbe à offrir : « Na regen komt zonneschijn » = après la pluie, le beau temps.",
  });

  d.closing({
    cliff: 'Séance 4 : **deux sentiments, un mensonge** ! Dire comment on se sent, et **pourquoi**, avec //want// et //maar//… au **tutoiement** et au **vouvoiement**.',
    homework: ['EXTRA p. 17 : trouver **5 mots composés** (traduction + décomposition + de / het).', 'Apprendre les **nombres** et l’**heure** (fiche p. 64).', 'Relire à voix haute le **texte complet** de 1.2.1.', 'Apprendre les 15 mots **Tijd & weer** (p. 87) avec l’article.'],
    exit: 'Dites l’heure qu’il est, puis répondez à //Hoe gaat het met je?// avec une **nuance**.',
    notes: "Ticket de sortie oral, par exemple : « Het is kwart over negen. — Het gaat goed, dank je. Ik ben een beetje moe. »",
  });
};
