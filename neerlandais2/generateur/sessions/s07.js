// Séance 7 — Ik en de anderen (Séquence 1.3, 2/2) — Livret p. 41–50 + A1-05 Vraagwoorden (p. 62)
exports.meta = {
  n: 7, slug: 'Ik_en_de_anderen', title: 'Ik en de anderen',
  subtitle: 'Parler de soi et des autres — et poser des questions',
  pages: 'Livret p. 41–50 · 62', img: 'personages', time: '1.3', sceneLabel: 'SÉQUENCE',
  block: 'Section 1 · Premiers pas en néerlandais',
  coverNotes: "Fin de la séquence 1.3. Objectifs : répondre en phrase complète (ja / nee + niet / geen), traduire et automatiser zijn / hebben (1.3.5, chrono 1.3.6), présenter quelqu’un, maîtriser les pronoms sujets (formes courtes et longues), se présenter en 90 secondes, puis poser des questions avec les mots interrogatifs (fiche A1-05).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Répondre **en phrase complète** (ja / nee + niet / geen), **présenter quelqu’un** avec zijn et hebben, et **poser des questions** (wie, wat, waar…).',
    language: '//Heb je een auto? — Nee, ik heb geen auto.// · //Waar woon je?// · ik · jij/je · u · hij · zij/ze · wij/we · jullie · zij/ze',
    skills: 'Répondre vite (chrono) · se présenter en 90, 60 puis 45 secondes · choisir entre forme courte et forme longue',
    agenda: [['Échauffement : niet of geen?', 5], ['1.3.4 · 1.3.5 Ik ben, ik heb', 20], ['1.3.6 Chrono · 1.3.7', 15], ['Jij nu! Twee hebben, één zijn', 10], ['Pronoms sujets · je ou jij ?', 10], ['1.3.8 Ik in 90 seconden', 10], ['Vraagwoorden', 15], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. La séance clôt la séquence 1.3 (p. 41–50). La fiche A1-05 (mots interrogatifs) termine la séance et prépare la synthèse « Stel jezelf voor » de la séance 8.",
  });

  // ------------------------------------------------------------ Échauffement (rappel S06)
  d.exercise({
    title: 'Échauffement : zijn of hebben ? niet of geen ?', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 6',
    instr: 'Oral, toute la classe · 5 min — Choisissez le bon mot.',
    cols: 2, gap: 22,
    items: [
      'Ik {{heb}} / <<ben>> bang voor spinnen.',
      'Pieter {{is}} / <<heeft>> honger.',
      'Er {{is}} / <<zijn>> veel mensen op school.',
      'Sarah {{is}} / <<heeft het>> druk.',
      'Ik heb {{niet}} / <<geen>> auto.',
      'Het is {{geen}} / <<niet>> duur.',
      'Zij is {{niet}} / <<geen>> studente.',
      'Ik werk vandaag {{geen}} / <<niet>>.',
    ],
    traps: ['//avoir peur// = **bang zijn**.', '**geen** + nom (aussi un métier).', '**niet** : fin, ou devant l’adjectif.'],
    notes: "Rappel de la séance 6 (zijn/hebben, pièges, niet/geen). Rythme rapide : un étudiant par phrase, il lit la phrase entière.",
  });

  // ------------------------------------------------------------ 1.3.4 (p. 41–42)
  d.exercise({
    title: '1.3.4 Ik ben, ik heb — ja of nee?', tag: 'COUCHE 2', page: 'Livret p. 41–42',
    instr: 'Par deux · 15 min — 6 questions sur votre voisin, 6 sur les personnages. Réponse **en phrase complète**.',
    gap: 4, qGap: 10, min: 16,
    columns: [
      [{ h: 'Over je buur', reset: false },
        { q: 'Heb je een auto?', a: 'Ja, ik heb een auto. / Nee, ik heb geen auto.' },
        { q: 'Ben je moe vandaag?', a: 'Ja, ik ben moe. / Nee, ik ben niet moe.' },
        { q: 'Heb je honger?', a: 'Ja, ik heb honger. / Nee, ik heb geen honger.' },
        { q: 'Kom je uit België?', a: 'Ja, ik kom uit België. / Nee, ik kom niet uit België.' },
        { q: 'Heb je een broer?', a: 'Ja, ik heb een broer. / Nee, ik heb geen broer.' },
        { q: 'Ben je klaar voor de cursus?', a: 'Ja, ik ben klaar. / Nee, ik ben niet klaar.' }],
      [{ h: 'Over de personages (p. 38)', reset: false },
        { q: 'Is Pieter moe?', a: 'Nee, Pieter is niet moe. Hij is blij.' },
        { q: 'Heeft Emma een broer?', a: 'Ja, Emma heeft een broer.' },
        { q: 'Komt Sarah uit Gent?', a: 'Ja, Sarah komt uit Gent.' },
        { q: 'Heeft meneer Janssens tijd?', a: 'Ik weet het niet.' },
        { q: 'Is het koud vandaag?', a: 'Ja, het is koud vandaag. (tekst 2)' },
        { q: 'Heeft Sarah een auto?', a: 'Nee, Sarah heeft geen auto.' }],
    ],
    notes: "A pose les questions 1 à 6 à B, puis on inverse ; les questions 7 à 12 se vérifient dans les textes du livret (p. 38) et le zinnenbouwer. Exiger la phrase complète, pas seulement « ja » ou « nee ».",
    notesA: "Questions 1 à 6 : deux modèles (oui / non), la réponse dépend du voisin. Question 10 : aucun texte ne parle du temps de Meneer Janssens → « Ik weet het niet ». Question 11 : selon le texte 2 (« Het is koud vandaag ») ; accepter aussi la vraie météo du jour. Rappel : geen + nom (geen auto, geen honger), niet + adjectif / préposition (niet moe, niet uit België).",
  });

  // ------------------------------------------------------------ 1.3.5 (p. 42–43)
  d.exercise({
    title: '1.3.5 Ik ben, ik heb — douze phrases en 4 minutes', tag: 'COUCHE 2', page: 'Livret p. 42–43',
    instr: 'À deux · 15 min — Pliez la colonne de droite. **4 minutes** pour écrire les 12 phrases. Dépliez, corrigez, notez votre score /12, puis cochez les phrases vraies pour vous.',
    cols: 2, gap: 8, min: 16,
    items: [
      'J’ai faim, donc je vais manger. → [[Ik heb honger, dus ik ga eten.]]',
      'As-tu peur des araignées ? → [[Ben jij bang voor spinnen?]]',
      'Le train a 10 minutes de retard. → [[De trein heeft tien minuten vertraging.]]',
      'Il y a beaucoup de gens dans la rue aujourd’hui. → [[Er zijn vandaag veel mensen op straat.]]',
      'Tu as raison. → [[Je hebt gelijk. / Jij hebt gelijk.]]',
      'C’est mon frère. → [[Dat is mijn broer. / Hij is mijn broer.]]',
      'Je suis professeur. → [[Ik ben leraar.]]',
      'Elle vient des Pays-Bas. → [[Ze komt uit Nederland.]]',
      'Nous sommes étudiants. → [[We zijn studenten.]]',
      'Travailles-tu à Amsterdam ? (forme courte) → [[Werk je in Amsterdam?]]',
      'Toi, tu es étudiant, mais moi, je suis professeur. → [[Jij bent student, maar ik ben leraar.]]',
      'Elle, elle est occupée, mais nous, nous sommes détendus. → [[Zij heeft het druk, maar wij zijn ontspannen.]]',
    ],
    notes: "Score : une phrase compte si le sens passe ; une « faute de beauté » ne compte pas. Coquille du livret (item 6) : « Il est mon frère » → en français « C’est mon frère » (Dat is / Hij is mijn broer).",
    notesA: "Corrections par rapport au livret : item 12, « Zij is druk » → « Zij heeft het druk » ; item 4, le livret écrit « Er zijn veel mensen op straat vandaag » (acceptable à l’oral), l’ordre temps → lieu est plus naturel : « Er zijn vandaag veel mensen op straat ». Item 10 : « Werk je » (inversion, le -t tombe). Items 11–12 : formes longues (jij, zij, wij) pour le contraste — voir p. 49.",
  });

  // ------------------------------------------------------------ 1.3.6 chrono (p. 43–44)
  d.chrono({
    title: '1.3.6 Ik ben, ik heb — chrono', tag: 'COUCHE 3', page: 'Livret p. 43–44',
    steps: ['**Pliez** la page sur la colonne de droite (néerlandais).', 'Votre voisin **chronomètre** : répondez à voix haute aux **20 amorces**, sans vous arrêter.', '**Dépliez, corrigez**, puis faites un **second passage**.', 'Notez vos **deux temps** et votre **gain**. //Vouw de pagina. Antwoord snel. Twee keer.//'],
    notes: "Couche 3 · par deux · 15 min. Zinnenbouwer fermé : rien de nouveau, seulement plus vite. La diapositive suivante projette les amorces (français) puis la correction.",
  });

  d.exercise({
    title: '1.3.6 Les 20 amorces', tag: 'COUCHE 3', page: 'Livret p. 43–44',
    cols: 2, gap: 8, size: 18,
    items: [
      'j’ai faim → [[Ik heb honger.]]', 'elle a raison → [[Zij heeft gelijk.]]', 'il y a beaucoup de monde → [[Er zijn veel mensen.]]', 'je suis fatigué(e) → [[Ik ben moe.]]', 'nous avons le temps → [[Wij hebben tijd.]]', 'tu es prêt(e) ? → [[Ben je klaar?]]', 'as-tu une voiture ? → [[Heb je een auto?]]', 'il est professeur → [[Hij is leraar.]]', 'elle a des enfants → [[Zij heeft kinderen.]]', 'c’est important → [[Het is belangrijk.]]',
      'il fait froid → [[Het is koud.]]', 'il y a un problème → [[Er is een probleem.]]', 'nous sommes étudiants → [[Wij zijn studenten.]]', 'vous avez raison (formel) → [[U hebt gelijk.]]', 'j’ai peur des araignées → [[Ik ben bang voor spinnen.]]', 'le train a du retard → [[De trein heeft vertraging.]]', 'je n’ai pas le temps → [[Ik heb geen tijd.]]', 'ils sont à la maison → [[Zij zijn thuis.]]', 'avez-vous faim ? (à deux amis) → [[Hebben jullie honger?]]', 'toi, tu as le temps, mais moi non → [[Jij hebt tijd, maar ik niet.]]',
    ],
    notes: "Projeter les amorces pendant le premier passage (livret plié).",
    notesA: "Item 14 : « U heeft gelijk » est aussi correct. Item 19 : « vous » à deux amis = jullie. Item 20 : « maar ik niet » (pas « maar ik geen »).",
  });

  // ------------------------------------------------------------ 1.3.7 (p. 45)
  d.steps({
    title: '1.3.7 Zijn jullie klaar?', tag: 'COUCHE 3', page: 'Livret p. 45',
    intro: 'Par deux · 10 min — Rejouez les lignes 5 à 7 du dialogue **trois fois**, chaque fois un peu plus vite. //Speel de dialoog drie keer. Elke keer sneller.//',
    steps: [
      { h: 'Passage 1', color: 'accent2', lines: ['Emma et Pieter,', '**texte sous les yeux**.'] },
      { h: 'Passage 2', color: 'accent3', lines: ['**Vos vrais prénoms**, **vos vrais objets** :', '//Ja, ik heb mijn pen en ik ben er klaar voor!//'] },
      { h: 'Passage 3', color: 'accent1', lines: ['**Rôles inversés**,', '**sans** le texte.'] },
    ],
    foot: { kind: 'keep', label: 'Le texte', text: '//Ben je klaar voor de cursus?// — //Ja, ik heb mijn boek en ik ben er klaar voor! Heb jij ook tijd voor een koffie?// — //Nee, sorry, ik heb geen tijd. Mijn les begint zo.//' },
    notes: "Le livret parle des « lignes 5 et 6 », mais le passage reproduit inclut la ligne 7 (réponse d’Emma). Au passage 2, chacun utilise un objet réel (boek, pen, koffie, gsm…) : « Ja, ik heb mijn … en ik ben er klaar voor! ».",
  });

  // ------------------------------------------------------------ Jij nu! (p. 46)
  d.picture({
    title: 'Jij nu! Twee hebben, één zijn', tag: 'JIJ NU!', page: 'Livret p. 46', img: 'jijnu_1_3',
    capLabel: 'COMMENT FAIRE', capColor: 'accent1', capIcon: 'FaUsers',
    caption: ['Par deux, puis avec un autre binôme · 15 min.', '**1** Interrogez votre voisin (famille E) : //Heb je…? Ben je…?//', '**2** Présentez-le **sans notes** : //Dit is Lucas. Hij heeft twee kinderen. Hij heeft een auto. Hij is vandaag een beetje moe.//', '**3** L’autre binôme vérifie : //Lucas, heb jij een auto?//'],
    notes: "« (ligne E) » renvoie à la famille E du zinnenbouwer 1.3 (questions : Heb je…? Ben je…?). Le livret annonce trois phrases (deux avec hebben, une avec zijn) mais le tableau a quatre lignes : « Dit is … » sert d’introduction et ne compte pas. Typographie : « Stel je buur voor : » (espace avant le deux-points à la française dans du néerlandais).",
  });

  // ------------------------------------------------------------ Pronoms personnels sujets (p. 47)
  d.table({
    title: 'Les pronoms personnels sujets', tag: 'GRAMMATICA', page: 'Livret p. 47',
    headers: ['PERSONNE', 'FRANÇAIS', 'NEDERLANDS', 'EXEMPLE'],
    colW: [2.6, 2.1, 2.4, 5.03],
    rows: [
      ['1re pers. sg.', 'je', '**ik**', 'Ik werk. //(Je travaille.)//'],
      ['2e pers. sg. (familier)', 'tu', '**jij / je**', 'Jij werkt. //(Tu travailles.)//'],
      ['2e pers. (poli)', 'vous', '**u**', 'U werkt. //(Vous travaillez.)//'],
      ['3e pers. sg. masc.', 'il', '**hij**', 'Hij werkt. //(Il travaille.)//'],
      ['3e pers. sg. fém.', 'elle', '**zij / ze**', 'Zij werkt. //(Elle travaille.)//'],
      ['3e pers. sg. neutre', 'il / elle, ça', '**het**', 'Het werkt. //(Ça marche.)//'],
      ['1re pers. pl.', 'nous', '**wij / we**', 'Wij werken. //(Nous travaillons.)//'],
      ['2e pers. pl.', 'vous', '**jullie**', 'Jullie werken. //(Vous travaillez.)//'],
      ['3e pers. pl.', 'ils / elles', '**zij / ze**', 'Zij werken. //(Ils travaillent.)//'],
    ],
    foot: 'Piège : //vous// = **u** (poli, une ou plusieurs personnes) **ou** **jullie** (plusieurs personnes, familier). //Zij// = elle **ou** ils : le verbe tranche (//zij werkt · zij werken//).',
    notes: "Le livret classe « u » en « 3ème (formel) » : u est le pronom de politesse (2e personne), conjugué au singulier (u werkt, u bent, u hebt/heeft). Faire conjuguer « werken » en chaîne : ik werk, jij werkt, u werkt…",
  });

  // ------------------------------------------------------------ 1.3.8 (p. 48)
  d.steps({
    title: '1.3.8 Ik in 90 seconden', tag: 'COUCHE 3', page: 'Livret p. 48',
    intro: 'Trois partenaires · 10 min — **Zinnenbouwer fermé**. Même message, débit de plus en plus rapide. //Negentig, zestig, vijfenveertig seconden. Dezelfde zinnen, sneller.//',
    steps: [
      { h: 'Partenaire 1 · 90 s', n: '90', color: 'accent2', lines: ['Qui vous êtes · d’où vous venez · ce que vous avez · comment vous allez.'] },
      { h: 'Partenaire 2 · 60 s', n: '60', color: 'accent3', lines: ['**La même chose**, plus vite.'] },
      { h: 'Partenaire 3 · 45 s', n: '45', color: 'accent1', lines: ['Tout dire en 45 secondes !', '☐ Alles gezegd?'] },
    ],
    foot: { kind: 'keep', label: 'Modèle', text: '//Hallo, ik ben Nadia. Ik kom uit Bergen. Ik heb twee kinderen en een auto. Vandaag ben ik een beetje moe, want ik heb veel werk.//' },
    notes: "Le message reste le même, seul le débit augmente. Chronométrer au signal ; les partenaires cochent « Alles gezegd? ». Fin de la séquence 1.3 : « Vous savez maintenant parler de vous et des autres avec zijn et hebben ! »",
  });

  // ------------------------------------------------------------ Formes courtes / longues (p. 49)
  d.compare({
    title: 'Je ou jij ? Forme courte, forme longue', tag: 'À RETENIR', page: 'Livret p. 49',
    intro: 'Quatre pronoms ont deux formes : **je / jij** (tu) · **ze / zij** (elle) · **we / wij** (nous) · **ze / zij** (ils, elles).',
    left: { h: 'FORME COURTE = neutre', color: 'accent2', items: ['Usage **quotidien**, sans insister.', '//**Je** komt uit België.// — Tu viens de Belgique.', '//**Ze** werkt hier.// — Elle travaille ici.', '//**We** wonen in Gent.// — Nous habitons à Gand.'] },
    right: { h: 'FORME LONGUE = emphase', color: 'accent1', items: ['Pour **insister** ou **contraster**.', '//**Jij** komt uit België, maar ik kom uit Nederland!//', '//Ze werkt hier, maar **wij** werken daar.//', '//**Zij** zijn er, niet **wij**!// — Eux sont là, pas nous !'] },
    foot: { kind: 'trap', text: 'Le français insiste avec //**moi**, je…// · //**toi**, tu…//. Le néerlandais n’ajoute pas de mot : il prend la **forme longue** et l’accentue. ✗ //Mij, ik ben…// → //**Ik** ben…// (accentué).' },
    notes: "À l’oral, la forme longue porte l’accent de phrase. « Je komt uit België » : pas d’inversion, le -t reste ; « Kom je uit België? » : inversion, le -t tombe.",
  });

  // ------------------------------------------------------------ 2 EXTRA (p. 50)
  d.exercise({
    title: 'EXTRA Les pronoms : lequel ? quelle forme ?', tag: 'EXTRA', page: 'Livret p. 50',
    instr: 'Seul ou à deux · 2 × 5 min — Colonne 1 : le pronom sujet qui convient. Colonne 2 : forme **courte** (neutre) ou **longue** (emphase) ?',
    gap: 10, restart: true,
    columns: [
      [{ h: 'Vul het juiste persoonlijk voornaamwoord in' },
        '[[Hij]] is mijn broer. //(Lui, c’est mon frère.)//',
        '[[Ik]] ben leraar. //(Je suis professeur.)//',
        '[[Ze / Zij]] komt uit Nederland. //(Elle…)//',
        '[[We / Wij]] zijn studenten. //(Nous…)//',
        'Werk [[je]] in Amsterdam? //(forme courte)//'],
      [{ h: 'Kies tussen de emfatische en de neutrale vorm' },
        'Normal : [[Ze]] spreekt Nederlands.',
        'Emphase : [[Zij]] spreekt Nederlands, maar ik spreek Frans.',
        'Emphase : [[Jij]] bent student, maar ik ben leraar.',
        'Normal : [[We]] wonen in Amsterdam.',
        'Emphase : [[Wij]] wonen in Amsterdam, jullie in Rotterdam.'],
    ],
    notes: "Coquilles du livret : titre du 1er exercice « Vul het juiste persoonlijke naamwoorden » → « Vul het juiste persoonlijk voornaamwoord in » ; titre du 2e « emphatische » → orthographe néerlandaise « emfatische ». Item 1 : la traduction du livret « Il est mon frère » est fautive en français (→ « C’est mon frère » / « Lui, c’est mon frère »).",
    notesA: "Colonne 1 : accepter les deux formes (ze/zij, we/wij) puisqu’aucun contraste n’est demandé ; item 5 : « je » (forme courte demandée, inversion → werk sans -t). Colonne 2 : le contraste (maar ik…, jullie…) impose la forme longue.",
  });

  // ------------------------------------------------------------ Grammaire A1-05 Vraagwoorden (p. 62)
  d.table({
    title: 'Vraagwoorden : les mots interrogatifs', tag: 'GRAMMATICA', page: 'Livret p. 62',
    headers: ['MOT W', 'FRANÇAIS', 'EXEMPLE', 'MOT W', 'FRANÇAIS', 'EXEMPLE'],
    colW: [1.5, 1.6, 2.95, 1.6, 1.6, 2.88], boldCol: 0,
    rows: [
      ['Wie', 'qui', 'Wie is dat?', '**Waarom**', 'pourquoi', 'Waarom lach je?'],
      ['Wat', 'que, quoi', 'Wat drink je?', '**Hoe**', 'comment', 'Hoe heet je?'],
      ['Waar', 'où', 'Waar is het station?', '**Hoeveel**', 'combien', 'Hoeveel kost het?'],
      ['Wanneer', 'quand', 'Wanneer kom je?', '**Welke**', 'quel, quelle', 'Welke taal spreek je?'],
    ],
    foot: 'À ajouter : //Waar kom je **vandaan**?// (d’où ?) · //**Welk** boek?// (het-mot au singulier) mais //**welke** taal? welke boeken?//',
    notes: "Fiche de grammaire A1-05. Faire deviner le sens des mots W à partir des exemples, puis poser une question par mot à un voisin. « Welk » + het-mot singulier (welk boek, welk land) ; « welke » ailleurs (welke taal, welke boeken).",
  });

  d.blocks({
    title: 'Deux types de questions', tag: 'GRAMMATICA', page: 'Livret p. 62',
    intro: 'Question ouverte : **mot W + verbe + sujet**. Question oui / non : **le verbe en premier**.',
    rows: [
      { label: 'ouverte', cells: [{ t: 'Waar', role: 'Q' }, { t: 'woon', role: 'V' }, { t: 'je', role: 'S' }, { t: '?', role: 'X', lab: '' }], fr: 'Où habites-tu ?' },
      { label: 'ouverte', cells: [{ t: 'Waar', role: 'Q' }, { t: 'kom', role: 'V' }, { t: 'je', role: 'S' }, { t: 'vandaan', role: 'F' }, { t: '?', role: 'X', lab: '' }], fr: 'D’où viens-tu ? (vandaan à la fin)' },
      { label: 'oui / non', cells: [{ t: 'Woon', role: 'V' }, { t: 'je', role: 'S' }, { t: 'in Gent', role: 'P' }, { t: '?', role: 'X', lab: '' }], fr: 'Habites-tu à Gand ?' },
      { label: 'avec u', cells: [{ t: 'Waar', role: 'Q' }, { t: 'woont', role: 'V' }, { t: 'u', role: 'S' }, { t: '?', role: 'X', lab: '' }], fr: 'Où habitez-vous ? (avec u, le -t reste)' },
    ],
    foot: { kind: 'trap', text: 'Pas de « est-ce que » : ✗ //Is het dat je in Gent woont?// → //**Woon je** in Gent?// Après inversion, **je / jij** perd le -t : //jij drinkt// → //**Drink jij** koffie?//' },
    notes: "Le « Let op ! » de la fiche : quand je/jij suit le verbe, le -t disparaît (jij drinkt → Drink jij koffie?). Avec u, hij, zij, le -t reste (Woont u…? Drinkt hij…?).",
  });

  d.exercise({
    title: 'A1-05 Oefening — Écris la question', tag: 'GRAMMATICA', page: 'Livret p. 62',
    instr: 'Seul · 5 min — Remettez les mots dans l’ordre et conjuguez le verbe.',
    gap: 18,
    items: ['wonen / jullie / in Gent → [[Wonen jullie in Gent?]]', 'wie / bellen / hij → [[Wie belt hij?]]', 'hoeveel / broers / hebben / je → [[Hoeveel broers heb je?]]', 'werken / jij / vandaag → [[Werk jij vandaag?]]'],
    traps: ['//jullie// : verbe au pluriel (//wonen//).', '//hoeveel broers// : le groupe W reste ensemble.', '//Heb je…? Werk jij…?// : le -t tombe.'],
    notes: "Faire lire chaque question avec l’intonation montante (oui/non) ou descendante (question ouverte).",
  });

  d.exercise({
    title: 'Interview d’Emma : posez la question', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Voici les réponses d’Emma. Trouvez la question (tutoyez-la), puis jouez l’interview à deux.',
    cols: 2, gap: 12,
    items: [
      '… ? — //Ik heet Emma.// → [[Hoe heet je?]]',
      '… ? — //Ik kom uit België.// → [[Waar kom je vandaan?]]',
      '… ? — //Ik woon in Bergen.// → [[Waar woon je?]]',
      '… ? — //Ja, ik heb een broer.// → [[Heb je een broer?]]',
      '… ? — //Ik drink koffie.// → [[Wat drink je?]]',
      '… ? — //Ik ben moe omdat ik veel werk heb.// → [[Waarom ben je moe?]]',
      '… ? — //De les begint om zeven uur.// → [[Wanneer begint de les? / Hoe laat begint de les?]]',
      '… ? — //Ik spreek Frans en Nederlands.// → [[Welke talen spreek je?]]',
    ],
    traps: ['Réponse //ja// → question **sans** mot W.', '//Hoe laat?// = à quelle heure ?', '//Welke talen// : pluriel → **welke**.'],
    notes: "Exercice ajouté : réemploi des mots W et révision de la séquence 1.3. Ensuite, chaque binôme invente trois questions pour Pieter et y répond à sa place.",
  });

  d.closing({
    cliff: 'Séance 8 : **prendre congé** (//Tot straks! Fijne dag!//) et la grande mise en situation finale : //**Stel jezelf voor!**//',
    homework: ['Refaire **1.3.6** au chrono : battre votre temps.', 'Préparer **Ik in 90 seconden** par écrit, puis le dire en 45 s.', 'Apprendre les **8 mots W** (p. 62).', 'Écrire **5 questions** pour Pieter : 3 ouvertes, 2 oui / non.'],
    exit: 'Posez une question **ouverte** et une question **oui / non** à votre voisin ; il répond en phrase complète.',
    notes: "Ticket de sortie oral en chaîne : A interroge B, B répond puis interroge C, etc.",
  });
};
