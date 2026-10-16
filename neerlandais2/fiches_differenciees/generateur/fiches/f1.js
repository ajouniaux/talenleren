const { profilesPage } = require('./shared');

const situation = `C'est ton <b>premier jour chez Verbeke</b>, une entreprise de Bruxelles. À la machine à café, tu rencontres un·e collègue. Vous vous présentez, vous parlez de votre service et de vos tâches, et vous proposez de manger ensemble à midi.`;

module.exports = {
  no: 1,
  icon: '☕',
  titleNl: 'Op het werk',
  titleFr: 'Se présenter au travail et décrire ses tâches',
  theme: 'le travail · werk & bedrijf',
  skill: 'Expression orale en interaction',
  cefr: 'A1',
  mode: 'EO en interaction · binômes',
  duration: '2 × 50 min',
  syllabus: ['Fiche 7 p. 98', 'Werk & bedrijf p. 84', 'Woordvolgorde p. 68', 'Altijd · nooit p. 74'],
  cando: 'me présenter à un·e collègue, dire dans quel service je travaille et expliquer ce que je fais.',
  goals: [
    'saluer, te présenter (prénom, métier) et prendre congé',
    'dire dans quel service tu travailles',
    'décrire tes tâches et dire quand tu les fais',
    'donner ton avis sur ton travail, et pourquoi',
    'proposer de manger ensemble',
  ],
  finalTask: `À la machine à café, tu fais connaissance avec un·e collègue pendant <b>3 minutes</b> : vous parlez de votre service et de vos tâches, puis vous proposez de manger ensemble.`,
  situation,
  buoy: [
    '**Sorry, wat zeg je?**', '**Kun je dat herhalen?**',
    '**Hoe zeg je « … » in het Nederlands?**', '**Wat betekent « … »?**',
    '**Een moment…**', '**Ik weet het woord niet.**',
  ],
  coverExtra: `<p class="small">👤 Tu n'as pas de travail ou tu préfères ne pas parler de toi ? Prends un <b>profil d'emprunt</b> (dernière page).</p>`,

  teacher: {
    intention: 'Faire connaissance avec un·e collègue le premier jour et lui expliquer ce qu\'on fait.',
    functions: [
      'saluer, se présenter, prendre congé',
      'demander et dire où l\'on travaille',
      'décrire des tâches et leur fréquence',
      'donner son avis et le justifier',
      'proposer, accepter, refuser',
    ],
    lexis: 'services (afdelingen), métiers, tâches de bureau et de magasin, adverbes de fréquence, adjectifs d\'appréciation.',
    form: 'verbe en 2e position après une expression de temps (<span class="nl">Elke dag schrijf ik…</span>) ; <span class="nl">bij</span> + entreprise / <span class="nl">op</span> + service.',
    dialogue: [
      ['A', 'Goedemorgen! Ben jij nieuw hier?'],
      ['B', 'Ja, het is mijn eerste dag. Ik ben Karim. En jij?'],
      ['A', 'Ik heet Lies. Ik werk op de afdeling administratie. En jij?'],
      ['B', 'Ik werk op de afdeling logistiek. Ik ben magazijnier.'],
      ['A', 'Wat doe jij precies?'],
      ['B', 'Ik controleer de bestellingen en ik maak de pakjes klaar. Elke ochtend tel ik de dozen.'],
      ['A', 'Vind je het leuk?'],
      ['B', 'Ja, ik vind het leuk, want ik werk in een team. En jij?'],
      ['A', 'Ik beantwoord de telefoon en ik schrijf e-mails. Soms is het druk!'],
      ['B', 'Zullen we straks samen eten?'],
      ['A', 'Ja, graag! Tot straks!'],
    ],
    steps: [
      ['Rencontre', 'Écoute du dialogue (2 fois). Les apprenant·es repèrent <b>ce que chacun cherche à faire</b> (saluer, demander le service, décrire, proposer) avant le sens des mots. On associe chaque réplique à une étape de la variante 1.', '10 min'],
      ['Répétition', 'Chaîne orale : chacun répond à <span class="nl">Wat doe jij precies?</span> avec une tâche de la banque de mots. Même forme, beaucoup d\'occurrences, sans écrit.', '10 min'],
      ['Variation', 'On change un seul emplacement à la fois : la tâche, puis le service, puis la fréquence (<span class="nl">elke dag → soms</span>). Enfin, on place la fréquence <b>en tête</b> : on fait remarquer que le verbe reste 2e.', '10 min'],
      ['Choix', 'Présentation du parcours (page de garde). Chacun choisit sa variante <b>et</b> son identité (réelle ou profil d\'emprunt).', '5 min'],
      ['Préparation', 'Préparation individuelle avec la fiche choisie. L\'enseignant·e circule et aide surtout les Héro·ïnes à remplir les emplacements.', '15 min'],
      ['Interaction', '« Machine à café » : deux cercles concentriques, 3 min par binôme, puis le cercle extérieur tourne. Les niveaux se mélangent. Volontaires devant la classe.', '25 min'],
      ['Retour', 'Focus on form : relevé collectif de 2 ou 3 formes entendues (dont une inversion). Autoévaluation (variante 5) et choix de la variante suivante.', '15 min'],
    ],
    focus: `<b>Le verbe reste en 2e position.</b> <span class="nl">Ik schrijf elke dag e-mails.</span> → <span class="nl">Elke dag schrijf ik e-mails.</span><br>
    <b>Comment :</b> pendant la phase Variation, écrire la phrase en « cartons » (<span class="nl">Ik | schrijf | elke dag | e-mails</span>) et déplacer <span class="nl">elke dag</span> en tête. Question à la classe : « Qui a dû bouger pour que le verbe reste à sa place ? » Geste de rappel : deux doigts levés = verbe en 2.<br>
    <b>Second point (lexical) :</b> <span class="nl">Ik werk bij Verbeke</span> (entreprise) / <span class="nl">op de afdeling verkoop</span> (service).<br>
    <span class="muted small">Syllabus : Woordvolgorde p. 68 · Altijd · nooit · al p. 74 · Fiche 7 p. 98.</span>`,
    errors: [
      ['Elke dag ik schrijf e-mails.', 'Elke dag schrijf ik e-mails.', 'Geste « verbe = 2 », reformulation en écho sans interrompre.'],
      ['Ik werk in Verbeke.', 'Ik werk bij Verbeke.', 'Afficher au tableau : bij + entreprise / op + service.'],
      ['Werkt jij op de logistiek?', 'Werk jij op de afdeling logistiek?', 'Encadré « Observe » de la variante 3 : le -t tombe devant jij.'],
    ],
    grid: [
      ['Réalisation de la tâche', 'Se présente, nomme son service et 2 tâches.', 'Décrit 3 tâches ou plus, avec la fréquence ; justifie son avis.'],
      ['Lexique', 'Réutilise les blocs de la banque de mots.', 'Varie les verbes, les services et les adverbes de fréquence.'],
      ['Forme ciblée', 'Phrases simples S + V correctes.', 'Inversion correcte après <span class="nl">Elke dag / Soms</span>.'],
      ['Interaction', 'Répond et renvoie la question (<span class="nl">En jij?</span>).', 'Relance, réagit (<span class="nl">Echt? Leuk!</span>), utilise la bouée.'],
    ],
    adds: [
      '<b>Profils d\'emprunt</b> : une identité professionnelle fictive pour les apprenant·es sans emploi ou qui ne veulent pas parler d\'eux. Ils servent aussi dans la fiche 5.',
      '<b>Bouée de secours</b> sur la page de garde : des phrases de dépannage pour toutes les variantes, contre la peur de « rester bloqué·e ».',
      '<b>Marqueur ↺ « déjà vu »</b> dans les patrons : il montre qu\'on réutilise ce qu\'on sait déjà.',
      '<b>Bonus A2</b> sur la variante 5 : même tâche, exigence plus haute pour celles et ceux qui sont déjà à l\'aise.',
    ],
    extend: [
      '« Speed-meeting » : 3 collègues en 6 minutes, avec un profil différent à chaque fois.',
      'Écrit court : un message de présentation sur l\'intranet de Verbeke (4 phrases), avec les mêmes patrons.',
    ],
  },

  v1: {
    steps: [
      ['Salue ton/ta collègue. Présente-toi (prénom, métier).', ['Goedemorgen! / Hallo!', 'Ik ben Karim. Ik ben magazijnier.', 'Het is mijn eerste dag.']],
      ['Demande son prénom et son service.', ['En jij? Hoe heet jij?', 'Op welke afdeling werk jij?']],
      ['Dis où tu travailles.', ['Ik werk bij Verbeke, op de afdeling logistiek.']],
      ['Décris 2 ou 3 tâches. Dis quand tu les fais.', ['Ik controleer de bestellingen.', 'Ik maak de pakjes klaar.', 'Elke ochtend tel ik de dozen.']],
      ['Demande ce qu\'il/elle fait.', ['Wat doe jij precies?']],
      ['Donne ton avis sur ton travail et dis pourquoi.', ['Ik vind het leuk, want ik werk in een team.', 'Soms is het druk.']],
      ['Propose de manger ensemble. Dis au revoir.', ['Zullen we straks samen eten?', 'Ja, graag! / Sorry, vandaag niet.', 'Tot straks!']],
    ],
    bank: [
      { h: 'Banque de mots : remplace la tâche si tu veux', items: [
        ['Ik beantwoord de telefoon.', 'répondre au téléphone'], ['Ik schrijf e-mails.', 'écrire des e-mails'], ['Ik ontvang de klanten.', 'accueillir les clients'],
        ['Ik help de klanten.', 'aider les clients'], ['Ik maak facturen.', 'faire des factures'], ['Ik plan de vergaderingen.', 'planifier les réunions'],
        ['Ik controleer de bestellingen.', 'contrôler les commandes'], ['Ik werk met de computer.', 'travailler sur ordinateur'], ['Ik maak de pakjes klaar.', 'préparer les colis'],
      ] },
      { h: 'Services · fréquence · avis', items: [
        ['de administratie', 'l\'administration'], ['de logistiek', 'la logistique'], ['de verkoop', 'la vente'],
        ['de boekhouding', 'la comptabilité'], ['de receptie', 'l\'accueil'], ['de marketing', 'le marketing'],
        ['elke dag · elke ochtend', 'chaque jour · matin'], ['altijd · vaak', 'toujours · souvent'], ['soms · nooit', 'parfois · jamais'],
        ['leuk · interessant', 'chouette · intéressant'], ['druk · rustig', 'chargé · calme'], ['moeilijk · makkelijk', 'difficile · facile'],
      ] },
    ],
  },

  v2: {
    intro: 'Pendant la conversation, tu dois : <b>te présenter · dire ton service · décrire tes tâches · donner ton avis · proposer de manger ensemble</b>. L\'ordre, c\'est toi qui décides. Numérote les phrases dans l\'ordre où tu veux les dire.',
    groups: [
      { h: 'Se présenter', lines: ['Goedemorgen! / Hallo!', 'Ik ben … Ik ben … (métier).', 'Het is mijn eerste dag.', 'En jij? Hoe heet jij?'] },
      { h: 'Parler du travail', lines: ['Op welke afdeling werk jij?', 'Ik werk op de afdeling …', 'Wat doe jij precies?', 'Ik beantwoord de telefoon.', 'Elke dag schrijf ik e-mails.', 'Ik vind het leuk, want …', 'Soms is het druk.'] },
      { h: 'Proposer, prendre congé', lines: ['Zullen we straks samen eten?', 'Ja, graag!', 'Sorry, vandaag niet. Morgen?', 'Tot straks!'] },
    ],
    bank: [
      'administratie · logistiek · verkoop · boekhouding · receptie · marketing',
      'de telefoon beantwoorden · e-mails schrijven · klanten helpen · facturen maken · bestellingen controleren',
      'elke dag · altijd · vaak · soms · nooit · leuk · druk · rustig · interessant',
    ],
    challenge: 'remplace au moins <b>trois mots</b> (une autre tâche, un autre service, une autre fréquence) et place <b>une fois</b> la fréquence au début de la phrase.',
  },

  v3: {
    plan: 'Prépare-toi : 1) présente-toi · 2) parlez de vos services et de vos tâches · 3) donnez votre avis · 4) proposez de manger ensemble',
    patterns: [
      ['Se présenter', '**Ik ben** + <<prénom>> **.** **Ik ben** + <<métier>> **.** ↺', 'Ik ben Karim. Ik ben magazijnier.'],
      ['Demander le service', '**Op welke afdeling** + [[werken]] + {S} **?**', 'Op welke afdeling werk jij?'],
      ['Dire où', '{S} + [[werken]] + **bij** + <<entreprise>> **, op de afdeling** + <<service>>', 'Ik werk bij Verbeke, op de afdeling verkoop.'],
      ['Demander les tâches', '**Wat** + [[doen]] + {S} + **precies?**', 'Wat doe jij precies? · Wat doet Lies precies?'],
      ['Décrire une tâche', '{S} + {V} + <<tâche>>', 'Ik maak facturen. · Ik help de klanten.'],
      ['Dire quand', '<<fréquence>> + {V} + {S} + <<tâche>>', 'Elke dag schrijf ik e-mails. · Soms plan ik de vergaderingen.'],
      ['Donner son avis', '**Ik vind mijn werk** + <<adjectif>> **, want** + {S} + {V} + …', 'Ik vind mijn werk leuk, want ik help mensen.'],
      ['Proposer', '**Zullen we** + <<moment>> + **samen** + <<activité (infinitif)>> **?** ↺', 'Zullen we straks samen eten?'],
      ['Prendre congé', '**Tot** + <<moment>> **!**', 'Tot straks! · Tot morgen!'],
    ],
    observe: '**Ik schrijf elke dag e-mails.** → **Elke dag schrijf ik e-mails.** → **Schrijf jij elke dag e-mails?**',
    question: 'Quel mot reste toujours à la 2e place ?',
    words: 'beantwoorden · schrijven · ontvangen · helpen · maken · plannen · controleren · elke dag · soms · vaak · leuk · druk · rustig',
  },

  v4: {
    keys: [
      '{S} + [[werken]] + **bij** … **, op de afdeling** …',
      '{S} + {V} + <<tâche>>',
      '<<elke dag / soms>> + {V} + {S} + …',
      '**Wat doe jij precies?**',
      '**Ik vind** … + <<adj.>> **, want** …',
      '**Zullen we** … + <<infinitif>> **?**',
    ],
    further: 'dis depuis quand tu travailles là (<span class="nl">Ik werk hier sinds maandag.</span>), de quoi tu es responsable (<span class="nl">Ik ben verantwoordelijk voor de bestellingen.</span>) et pose une question sur l\'entreprise (<span class="nl">Hoeveel mensen werken hier?</span>).',
  },

  v5: {
    task: 'C\'est ton premier jour chez Verbeke. À la machine à café, tu rencontres un·e collègue. Présentez-vous, expliquez dans quel service vous travaillez et ce que vous faites (au moins 3 tâches, avec la fréquence), donnez votre avis sur votre travail et proposez de manger ensemble.',
    timing: '<b>Préparation :</b> 2 minutes, sans notes · <b>Interaction :</b> 3 minutes',
    bonus: 'dis depuis quand tu travailles là et parle d\'une tâche que tu n\'aimes pas (et pourquoi).',
    check: [
      'saluer, me présenter (prénom, métier) et dire au revoir',
      'dire dans quel service je travaille',
      'décrire au moins 3 tâches',
      'dire quand je les fais (elke dag, soms…)',
      'donner mon avis et expliquer pourquoi (want…)',
      'continuer à parler même quand un mot me manquait',
    ],
  },

  extraPages: [profilesPage],
};
