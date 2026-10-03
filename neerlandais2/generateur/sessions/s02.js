// Séance 2 — Snel groeten (Séquence 1.1, 2/2) — Livret p. 10–14 + Grammaire A2-01 Woordvolgorde p. 68
exports.meta = {
  n: 2, slug: 'Snel_groeten_Woordvolgorde', title: 'Snel groeten',
  subtitle: 'Saluer vite et bien — et comprendre pourquoi on dit « ’s Morgens werk ik »',
  pages: 'Livret p. 10–14 · 68', img: 'cover_grammatica', time: '1.1', sceneLabel: 'SÉQUENCE',
  block: 'Section 1 · Premiers pas en néerlandais',
  coverNotes: "Deuxième et dernière séance de la séquence 1.1. On termine le travail sur les salutations (1.1.5 à 1.1.7, Klankmoment, Begroetingscarrousel) puis on rend explicite la règle que les étudiants appliquent depuis la séance 1 : le verbe en 2e position et l’inversion (fiche de grammaire 01, Woordvolgorde, p. 68).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Saluer **vite et juste** à toute heure, prononcer le **g / ch**, et construire une phrase avec le **verbe en 2e position** (//’s Morgens werk ik…//).',
    language: '//’s morgens · vanmorgen · in de morgen · overdag// — inversion : //Vandaag **werk ik**// — ordre **T-M-P**',
    skills: 'Rendre une phrase vraie pour soi · répondre vite (chrono) · prononcer · saluer en carrousel',
    agenda: [['Échauffement : mes phrases', 5], ['1.1.5 Waar of niet waar? + la règle', 15], ['1.1.6 Tijdsuitdrukkingen', 5], ['1.1.7 Snel groeten (chrono)', 20], ['Klankmoment g / ch', 5], ['Jij nu! Begroetingscarrousel', 10], ['Woordvolgorde (fiche 01)', 25], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. Si le temps manque, le second passage chronométré de 1.1.7 peut se faire à la maison. La fiche Woordvolgorde (p. 68) vient en fin de séance : les étudiants ont pratiqué l’inversion pendant toute la séquence, on leur donne maintenant la règle.",
  });

  d.exercise({
    title: 'Échauffement : mes phrases du zinnenbouwer', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 1', mode: 'a',
    instr: 'Devoir : vos **5 phrases** avec le zinnenbouwer 1.1. Lisez-en une à voix haute ; la classe vérifie : le **verbe** est-il en **2e position** ?',
    number: false, gap: 8,
    items: [
      { h: 'Exemples' },
      { t: '**A** · ’s Avonds zeg ik «Goedenavond!» tegen mijn buren.' },
      { t: '**B** · Vandaag werk ik thuis.' },
      { t: '**C** · Om zeven uur sta ik op.' },
      { t: '**D** · Na de les zeg ik «Tot morgen!».' },
      { h: 'La classe réagit' },
      { t: '//Goed zo!// — ou — //Pas op: het werkwoord!//' },
    ],
    expect: ['Le moment en tête → **verbe + sujet**.', '✓ //’s Morgens **werk ik**…//', '✗ //’s Morgens ik werk…//', 'Toute la classe · 5 min'],
    notes: "Tour de table rapide : chaque étudiant lit une phrase de son devoir. La classe répond « Goed zo! » ou « Pas op: het werkwoord! » (Attention : le verbe !). Ne pas encore expliquer la règle : elle sera formalisée en fin de séance avec la fiche Woordvolgorde.",
  });

  d.exercise({
    title: '1.1.5 Waar of niet waar?', tag: 'COUCHE 2', page: 'Livret p. 10', mode: 'a',
    instr: 'Huit phrases de Pieter. **Vraie pour vous ?** Cochez ☐. **Sinon**, changez le moment, l’activité, le lieu ou la personne pour qu’elle devienne vraie.',
    gap: 8,
    items: ['’s Morgens werk ik op school.  ☐', 'Vanmiddag ga ik naar de dokter.  ☐', 'Vanavond kijk ik een film met Emma.  ☐', 'Vandaag heb ik een vergadering op het werk.  ☐', '’s Morgens zeg ik «Goedemorgen!» tegen Emma.  ☐', 'In de morgen is het druk op school.  ☐', '’s Nachts slaap ik thuis.  ☐', 'Vanavond zeg ik «Goedenavond!» tegen Emma.  ☐'],
    expect: ['Vraie → ☐ **cochée**.', 'Fausse → **un bloc** change :', '//1 → ’s Morgens werk ik **thuis**.//', '//3 → Vanavond kijk ik een film met **mijn zus**.//', '//6 → In de morgen is het **rustig** op school.//', 'Couche 2 · seul · 15 min'],
    notes: "Production structurée : pas de correction unique. Passer dans les rangs et vérifier que le verbe reste en 2e position quand on change le moment (Vanavond kijk ik… → Morgen kijk ik…). Faire lire deux ou trois phrases réécrites à voix haute avant de compléter le tableau de la page 10.",
  });

  d.table({
    title: '1.1.5 Wat zit erachter? La règle des moments', tag: 'COUCHE 2', page: 'Livret p. 10',
    intro: 'Retrouvez la règle à partir de vos phrases : complétez les cases vides. **Attention : une case du livret contient une erreur.**',
    headers: ['MOMENT', 'JE SALUE (EN ARRIVANT)', 'D’HABITUDE', 'AUJOURD’HUI'],
    colW: [3.1, 4.0, 2.4, 2.63], boldCol: 1,
    rows: [
      ['Matin (5 h – 12 h)', 'Goedemorgen!', '’s morgens', 'vanmorgen'],
      ['Après-midi (12 h – 18 h)', 'Goedemiddag!', '[[’s middags]]', 'vanmiddag'],
      ['Soir (18 h – 23 h)', '[[Goedenavond!]]', '’s avonds', '[[vanavond]]'],
      ['Nuit (23 h – 5 h)', '{{Goedenavond!}} ++Goedenacht! · Welterusten!++', '’s nachts', '[[vannacht]]'],
      ['Toute la journée', 'Hallo! · Dag! · Hoi!', 'overdag', 'vandaag'],
    ],
    foot: '//Wat zit erachter?// = « Qu’est-ce qui se cache derrière ? » — la règle derrière vos phrases.',
    notes: "Faire compléter seul, puis corriger au tableau. Coquille du livret : dans le tableau de la p. 10, « Goedenavond! » est imprimé sur la ligne « Nuit » alors que la case « Soir » est vide. Goedenavond! appartient à la ligne Soir ; la nuit, on dit Goedenacht! (ou Welterusten! avant de dormir). Le défi « trouvez l’erreur » est volontaire.",
    notesA: "Correction : ’s middags (habitude), Goedenavond! et vanavond (soir), Goedenacht! / Welterusten! et vannacht (nuit). Rappeler que vannacht peut désigner la nuit passée ou la nuit qui vient.",
  });

  d.exercise({
    title: '1.1.6 Tijdsuitdrukkingen herkennen', tag: 'COUCHE 3', page: 'Livret p. 11',
    instr: 'Lisez la situation et choisissez l’expression correcte. Couche 3 · seul · 5 min.',
    gap: 6,
    items: [
      '«[[Goedemorgen]], hoe gaat het?» //(Bonjour, comment ça va ?)//',
      { t: '<<Goedemorgen>>  ·  {{’s morgens}}  ·  {{vanmorgen}}  ·  {{in de morgen}}', style: { color: 'accent5' } },
      '«Ik werk [[’s morgens]].» //(Je travaille le matin.)//',
      { t: '{{Goedemorgen}}  ·  <<’s morgens>>  ·  {{vanmorgen}}  ·  {{in de morgen}}', style: { color: 'accent5' } },
      '«[[Vanmiddag]] ga ik naar de dokter.» //(Cet après-midi…)//',
      { t: '{{Goedemiddag}}  ·  {{’s middags}}  ·  <<vanmiddag>>  ·  {{in de middag}}', style: { color: 'accent5' } },
      '«[[Vanavond]] kijk ik een film.» //(Ce soir…)//',
      { t: '{{Goedenavond}}  ·  {{’s avonds}}  ·  <<vanavond>>  ·  {{in de avond}}', style: { color: 'accent5' } },
      '«[[Vandaag]] heb ik een vergadering.» //(Aujourd’hui…)//',
      { t: '{{Dag / Hallo}}  ·  {{overdag}}  ·  <<vandaag>>  ·  {{tijdens de dag}}', style: { color: 'accent5' } },
    ],
    traps: ['Je **salue** → //Goedemorgen//.', '**D’habitude** → //’s morgens//.', '**Aujourd’hui précisément** → //vanmiddag, vanavond, vandaag//.', 'En tête de phrase → **inversion** : //Vanavond **kijk ik**//.'],
    notes: "Rapide, à l’oral après une minute de réflexion individuelle. Coquille du livret : l’exercice 1.1.6 porte le même titre que 1.1.1 (« Tijdsuitdrukkingen herkennen »).",
    notesA: "Faire justifier chaque choix avec les quatre usages de la p. 6 : saluer / habitude / aujourd’hui / en général.",
  });

  d.chrono({
    title: '1.1.7 Snel groeten — le chrono', tag: 'COUCHE 3', page: 'Livret p. 12–13',
    steps: ['**Cachez** la colonne de droite (néerlandais).', 'Votre voisin **chronomètre** : vous répondez à voix haute aux **20 amorces**, sans vous arrêter.', '**Dépliez, corrigez**, puis faites un **second passage**.', 'Notez vos **deux temps** et votre **gain**. Puis on échange les rôles.'],
    notes: "Couche 3 · par deux · 20 min. Rien de nouveau : seulement plus vite. Le voisin qui chronomètre suit la colonne néerlandaise et signale les erreurs après le passage, pas pendant. Les deux diapositives suivantes servent à la correction collective.",
  });

  d.table({
    title: '1.1.7 Snel groeten (1/2)', tag: 'COUCHE 3', page: 'Livret p. 12',
    headers: ['N°', 'FRANS', 'NEDERLANDS'],
    colW: [0.8, 5.2, 6.13], align: ['center', 'left', 'left'],
    rows: [
      ['1', 'Il est 8 h, tu salues Pieter.', '[[Goedemorgen, Pieter!]]'],
      ['2', 'Il est 14 h, tu salues ta collègue.', '[[Goedemiddag!]]'],
      ['3', 'Il est 20 h, tu salues Emma.', '[[Goedenavond, Emma!]]'],
      ['4', 'Tu vas dormir.', '[[Goedenacht! / Welterusten!]]'],
      ['5', 'Salut, Pieter ! (informel)', '[[Hoi Pieter! / Dag Pieter!]]'],
      ['6', 'Le matin, je travaille.', '[[’s Morgens werk ik.]]'],
      ['7', 'Cet après-midi, je vais chez le médecin.', '[[Vanmiddag ga ik naar de dokter.]]'],
      ['8', 'Ce soir, je regarde un film.', '[[Vanavond kijk ik een film.]]'],
      ['9', 'Aujourd’hui, j’ai une réunion.', '[[Vandaag heb ik een vergadering.]]'],
      ['10', 'Le matin, c’est calme à la maison.', '[[In de morgen is het rustig thuis.]]'],
    ],
    notes: "Correction collective : un étudiant lit le français, la classe répond en chœur. Item 2 : accepter « Goedemiddag! » seul ou avec le prénom.",
    notesA: "Item 10 : accepter aussi « ’s Morgens is het rustig thuis ». Faire remarquer que « het » (sujet) passe après « is » : In de morgen is het…",
  });

  d.table({
    title: '1.1.7 Snel groeten (2/2)', tag: 'COUCHE 3', page: 'Livret p. 12–13',
    headers: ['N°', 'FRANS', 'NEDERLANDS'],
    colW: [0.8, 5.2, 6.13], align: ['center', 'left', 'left'],
    rows: [
      ['11', 'L’après-midi, c’est animé en classe.', '[[In de middag is het druk in de klas.]]'],
      ['12', 'Le soir, je bois un café avec Emma.', '[[’s Avonds drink ik koffie met Emma.]]'],
      ['13', 'Le matin, je dis « bonjour » à la classe.', '[[’s Morgens zeg ik «Goedemorgen!» tegen de klas.]]'],
      ['14', 'Cet après-midi, je vais au cours.', '[[Vanmiddag ga ik naar de cursus.]]'],
      ['15', 'Aujourd’hui, j’ai le temps.', '[[Vandaag heb ik tijd.]]'],
      ['16', 'La nuit, je dors à la maison.', '[[’s Nachts slaap ik thuis.]]'],
      ['17', 'Le soir, je rentre à la maison.', '[[’s Avonds ga ik naar huis.]]'],
      ['18', 'Bonjour à tous !', '[[Goedemorgen allemaal!]]'],
      ['19', 'En journée, c’est animé au travail.', '[[Overdag is het druk op het werk.]]'],
      ['20', 'Ce matin, je suis fatigué(e).', '[[Vanmorgen ben ik moe.]]'],
    ],
    notes: "Même procédure que pour la première moitié. Puis second passage chronométré et calcul du gain.",
    notesA: "Item 13 : le livret propose « ’s Morgens zeg ik «hallo» tegen de klas » ; c’est acceptable, mais « bonjour » le matin se traduit plus précisément par «Goedemorgen!». Item 18 : accepter « Hallo allemaal! ». Item 14 : « naar de les » est aussi correct. Item 20 : « vanmorgen » = ce matin (aujourd’hui), ≠ « ’s morgens » (d’habitude).",
  });

  d.cards({
    title: 'Klankmoment : le g et le ch', tag: 'KLANKMOMENT', page: 'Livret p. 13',
    perRow: 3,
    cards: [
      { h: 'LE SON  g = ch', color: 'accent4', f: 'goede · ’s nachts', lines: ['Un souffle **raclé** au fond de la gorge, proche de la //jota// espagnole.', 'En **Flandre**, ce son est plus **doux** qu’aux Pays-Bas. Les deux sont corrects.'] },
      { h: 'À VOIX HAUTE, DEUX FOIS', color: 'accent2', f: 'goedemorgen', lines: ['//goedemiddag · goedenavond//', '//goedenacht · gaat//', '//’s nachts · vandaag · tegen//', 'Avec votre voisin.'] },
      { h: '’s = [s]', color: 'accent3', f: '’s morgens = « smorgens »', lines: ['//’s// se prononce **[s]** et se **colle** au mot suivant.', '//’s middags · ’s avonds · ’s nachts//'] },
    ],
    foot: { kind: 'tip', label: 'Shadowing', text: 'écoutez l’audio du dialogue et répétez chaque réplique **juste après la voix**, sans regarder le texte.' },
    notes: "Faire répéter en chœur, puis par deux. Coquille du livret : « la g et le ch » → « le g et le ch » (les noms de lettres sont masculins). Nuance : en Flandre, g est souvent sonore et ch sourd ; « même son » est une simplification utile pour débuter. Attention aussi aux mots d’origine française où ch = [ʃ] : chef, chocolade. Et sch = s + ch : school.",
  });

  d.picture({
    title: 'Jij nu! Begroetingscarrousel', tag: 'JIJ NU!', page: 'Livret p. 14', img: 'jijnu_1_1',
    capLabel: 'MISE EN SITUATION', capColor: 'accent1', capIcon: 'FaUsers',
    caption: ['Toute la classe · 10 min : **deux cercles** face à face.', 'Le professeur annonce une **heure**.', 'Saluez votre partenaire : **formule + prénom**, puis **une phrase vraie**.', '//Goedemorgen, Sarah! ’s Morgens drink ik koffie.//', 'Le cercle extérieur **tourne** : nouveau partenaire.', 'Notez **deux phrases** entendues.'],
    notes: "Heures à annoncer (dans le désordre) : 07.30 · 12.15 · 15.00 · 19.30 · 23.00, puis « la journée » (Hallo! / Dag!). Coquille du livret : « Begroetingencarrousel » → « Begroetingscarrousel » (s de liaison, pas de pluriel -en). Le schéma du livret montre 8 personnes à l’intérieur et 12 à l’extérieur : faire deux cercles de même taille. Le bilan « Vous savez maintenant saluer… » est imprimé deux fois sur la page.",
  });

  d.blocks({
    title: 'Woordvolgorde : le verbe en 2e position', tag: 'GRAMMATICA', page: 'Livret p. 68',
    intro: 'Le **verbe conjugué** est toujours en **2e position**. Ensuite : **quand → comment → où** (Tijd · Manier · Plaats).',
    rows: [
      { label: 'Phrase de base', cells: [{ t: 'Ik', role: 'S' }, { t: 'reis', role: 'V' }, { t: 'morgen', role: 'T' }, { t: 'met de trein', role: 'M' }, { t: 'naar Gent.', role: 'P' }], fr: 'Je vais à Gand demain, en train.' },
      { label: 'Inversion', cells: [{ t: 'Morgen', role: 'T', lab: '1 · tijd' }, { t: 'reis', role: 'V', lab: '2 · verbe' }, { t: 'ik', role: 'S', lab: '3 · sujet' }, { t: 'met de trein', role: 'M' }, { t: 'naar Gent.', role: 'P' }], fr: 'Demain, je vais à Gand en train.' },
      { label: 'Séquence 1.1', cells: [{ t: '’s Morgens', role: 'T' }, { t: 'werk', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'op school.', role: 'P' }], fr: 'Le matin, je travaille à l’école.' },
      { label: '3e personne', cells: [{ t: 'Vandaag', role: 'T' }, { t: 'werkt', role: 'V' }, { t: 'Emma', role: 'S' }, { t: 'rustig', role: 'M' }, { t: 'thuis.', role: 'P' }], fr: 'Aujourd’hui, Emma travaille tranquillement à la maison.' },
    ],
    foot: { kind: 'keep', label: 'Règle d’or', text: 'Le verbe ne quitte jamais la **2e place**. Et le **lieu** ne passe jamais **avant le temps** : //morgen// … //naar Gent//.' },
    notes: "Fiche de grammaire 01 (p. 68). Montrer d’abord la phrase de base (sujet en tête), puis la même phrase avec « Morgen » en tête : le verbe ne bouge pas, c’est le sujet qui passe derrière. La 2e position est celle du 2e BLOC : « ’s Morgens » ou « Om zeven uur » comptent pour un seul bloc.",
  });

  d.cards({
    title: 'Woordvolgorde en quatre cartes', tag: 'GRAMMATICA', page: 'Livret p. 68',
    perRow: 4, bSize: 17,
    cards: [
      { h: '① VERBE = 2E BLOC', color: 'accent6', f: 'bloc 1 + verbe', lines: ['//Ik **werk** vandaag.//', '//Vandaag **werk** ik.//', '2e **bloc**, pas 2e mot : //Om zeven uur// = 1 bloc.'] },
      { h: '② L’INVERSION', color: 'tx2', f: 'T + V + S', lines: ['Un autre mot en tête → le **sujet** passe **après** le verbe.', '//Morgen reis **ik**…//'] },
      { h: '③ T · M · P', color: 'accent3', f: 'T → M → P', lines: ['**quand → comment → où**', '//om 8 uur · snel · naar het werk//', 'Le **lieu** en dernier.'] },
      { h: '④ JIJ APRÈS LE VERBE', color: 'accent2', f: 'werk jij?', lines: ['//jij werkt// → //Vandaag **werk jij**.//', '**jij / je** derrière le verbe : le **-t** tombe.', 'Mais : //Vandaag **werkt** Emma / hij / u.//'] },
    ],
    foot: { kind: 'trap', text: 'Le français garde « sujet + verbe » : //Demain, **je vais**…// Le néerlandais inverse : //Morgen **ga ik**…// ✗ //Morgen ik ga// — et il dit le temps **avant** le lieu : //Ik ga morgen naar Gent.//' },
    notes: "La carte ④ n’est pas sur la fiche p. 68 mais elle est indispensable dès maintenant (questions « Werk jij ook ’s avonds? » de la séance 1). Le -t tombe seulement avec jij / je placé après le verbe ; avec u, hij, zij, Emma, il reste.",
  });

  d.traps({
    title: 'Erreurs fréquentes : l’ordre des mots', tag: 'PIÈGE', page: 'Livret p. 68',
    rows: [
      ['’s Morgens ik werk op school.', '’s Morgens **werk ik** op school.', 'Moment en tête → inversion.'],
      ['Vandaag werk Emma thuis.', 'Vandaag **werkt** Emma thuis.', 'Emma = 3e personne : le -t reste.'],
      ['Werkt jij vandaag?', '**Werk jij** vandaag?', '//jij// après le verbe : pas de -t.'],
      ['Ik ga naar Gent morgen.', 'Ik ga **morgen** naar Gent.', 'Le temps **avant** le lieu.'],
      ['Om zeven uur sta ik op elke dag.', 'Om zeven uur sta ik elke dag **op**.', 'Particule séparable à la **fin**.'],
    ],
    notes: "Lire chaque erreur, faire trouver la correction avant de l’afficher (cacher la colonne de droite si besoin). La 2e ligne reprend la coquille du zinnenbouwer 1.1 (famille B : « werk Emma » → « werkt Emma »). La 5e ligne reprend la famille C du même zinnenbouwer (verbes séparables : opstaan → ik sta … op).",
  });

  d.exercise({
    title: 'Oefening : remets dans l’ordre', tag: 'GRAMMATICA', page: 'Livret p. 68',
    instr: 'Remettez les blocs dans l’ordre : **verbe en 2e position**, puis **T → M → P**.',
    items: [
      { q: 'hij fietst  /  naar het werk  /  om 8 uur  /  snel', a: 'Hij fietst om 8 uur snel naar het werk.' },
      { q: 'zij studeert  /  in de bibliotheek  /  ’s avonds', a: 'Zij studeert ’s avonds in de bibliotheek.' },
      { q: 'Vandaag  /  wij eten  /  in het restaurant  /  rustig', a: 'Vandaag eten wij rustig in het restaurant.' },
      { q: 'In de zomer  /  wij gaan  /  naar Spanje  /  met het vliegtuig', a: 'In de zomer gaan wij met het vliegtuig naar Spanje.' },
    ],
    expect: ['Le **verbe** en 2e position.', 'Puis **quand → comment → où**.', 'Un mot de temps en tête ? → **inversion**.', 'Seul · 5 min'],
    traps: ['T → M → P : //om 8 uur · snel · naar het werk//.', '//Vandaag// et //In de zomer// en tête → //eten **wij**//, //gaan **wij**//.', '//In de zomer// = un seul bloc (1re position).'],
    notes: "Exercice de la fiche p. 68. Faire écrire, puis un étudiant vient construire la phrase au tableau en blocs de couleur (comme sur la diapositive précédente).",
    notesA: "Phrases 3 et 4 : le livret met « wij eten » / « wij gaan » en bloc ; il faut les séparer pour faire l’inversion. Phrase 1 : accepter aussi « Om 8 uur fietst hij snel naar het werk. »",
  });

  d.exercise({
    title: 'Commencez par le moment !', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Réécrivez la phrase en commençant par l’expression en **gras**. Attention au **-t** !',
    cols: 2,
    items: [
      { q: 'Ik drink **vanavond** koffie met Emma.', a: 'Vanavond drink ik koffie met Emma.' },
      { q: 'Pieter werkt **vandaag** thuis.', a: 'Vandaag werkt Pieter thuis.' },
      { q: 'Jij werkt **’s avonds** op kantoor.', a: '’s Avonds werk jij op kantoor.' },
      { q: 'Sarah heeft **vanmiddag** een vergadering.', a: 'Vanmiddag heeft Sarah een vergadering.' },
      { q: 'Wij gaan **morgen** met de bus naar Brussel.', a: 'Morgen gaan wij met de bus naar Brussel.' },
      { q: 'Je slaapt **’s nachts** thuis.', a: '’s Nachts slaap je thuis.' },
    ],
    expect: ['Le moment **en tête**.', 'Puis le **verbe**, puis le **sujet**.', 'Oral, puis écrit · 5 min'],
    traps: ['**Pieter / Sarah** après le verbe : le -t reste.', '**jij / je** après le verbe : le -t tombe → //werk jij//, //slaap je//.'],
    notes: "Exercice ajouté. Oral d’abord (un étudiant par phrase), puis écrit. Les phrases 3 et 6 sont les pièges : jij werkt → ’s Avonds werk jij ; je slaapt → ’s Nachts slaap je.",
  });

  d.closing({
    cliff: 'Séance 3 : les **mots composés** (//ochtendmens, middagdutje//), les **nombres et l’heure**… et une nouvelle question : //Hoe gaat het?//',
    homework: ['Refaire **1.1.7** seul(e) avec un chrono : battre votre meilleur temps.', 'Apprendre la fiche **Woordvolgorde** (p. 68) : verbe en 2e position, T-M-P.', 'Écrire **5 phrases** vraies qui commencent par un moment : //Morgen…, ’s Avonds…, Vandaag…//'],
    exit: 'Remettez dans l’ordre, à voix haute : //met de bus · vanavond · ik ga · naar de cursus//',
    notes: "Réponse du ticket de sortie : « Vanavond ga ik met de bus naar de cursus. » (inversion + T-M-P). Accepter aussi « Ik ga vanavond met de bus naar de cursus. »",
  });
};
