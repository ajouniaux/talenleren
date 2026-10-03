// Séance 6 — Zijn & hebben (Séquence 1.3, 1/2) — Livret p. 35–41 + A1-06 Niet of geen? (p. 63)
exports.meta = {
  n: 6, slug: 'Zijn_en_hebben', title: 'Zijn & hebben',
  subtitle: 'Dire qui l’on est, ce que l’on a — et ce qu’on n’a pas',
  pages: 'Livret p. 35–41 · 63', img: 'scene_1_3', time: '1.3', sceneLabel: 'SÉQUENCE',
  block: 'Section 1 · Premiers pas en néerlandais',
  coverNotes: "Ouverture de la séquence 1.3. Objectifs : conjuguer zijn et hebben, éviter les pièges du français (avoir peur = bang zijn, il fait froid = het is koud), lire les trois portraits (Emma, Pieter, Sarah), distinguer er is / er zijn et het is, puis la négation (fiche A1-06 Niet of geen?) avant la production 1.3.3.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Dire **qui je suis** et **ce que j’ai** (zijn, hebben), décrire une situation (**er is / er zijn · het is**) et dire non (**niet / geen**).',
    language: '//ik ben · jij bent · hij is · wij zijn — ik heb · jij hebt · hij heeft · wij hebben// — //Ik heb **geen** auto · Ik ben **niet** moe//',
    skills: 'Lire trois portraits et repérer les différences · vérifier une information · écrire dix phrases vraies sur soi',
    agenda: [['Échauffement : hoe voel je je?', 5], ['Séquence 1.3 · zinnenbouwer 1.3', 10], ['Zijn & hebben : conjugaison, pièges', 10], ['Teksten 1–3 : Emma, Pieter, Sarah', 15], ['Er is / het is · 1.3.1', 15], ['1.3.2 Waar of niet waar?', 5], ['Niet of geen ?', 15], ['1.3.3 Ik ben, ik heb', 15]],
    notes: "Durées indicatives sur 90 minutes. La fiche A1-06 (niet/geen) est placée avant 1.3.3 : les étudiants en ont besoin pour écrire leurs dix phrases. Si le temps manque, 1.3.3 se termine à la maison.",
  });

  // ------------------------------------------------------------ Échauffement (rappel S05)
  d.exercise({
    title: 'Échauffement : hoe voel je je?', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 5',
    instr: 'Oral, toute la classe · 5 min — Traduisez vite : nuanceurs, //zich voelen//, //omdat// et //daarom//.',
    cols: 2, gap: 14,
    items: [
      'Je me sens un peu fatigué(e). → [[Ik voel me een beetje moe.]]',
      'Comment te sens-tu ? → [[Hoe voel je je?]]',
      'Pieter se sent très stressé. → [[Pieter voelt zich heel gestrest.]]',
      'Je suis fatigué(e) parce que je dors trop peu. → [[Ik ben moe omdat ik te weinig slaap.]]',
      'Je dors trop peu, c’est pourquoi je suis fatigué(e). → [[Ik slaap te weinig, daarom ben ik moe.]]',
      'Cette semaine, je suis très occupé(e). → [[Deze week heb ik het heel druk.]]',
    ],
    traps: ['//omdat// → verbe **à la fin** · //daarom// → **inversion**.', '//occupé// = **het druk hebben**.'],
    notes: "Rappel de la séance 5 (nuanceurs, zich voelen, fiche 8). Interroger un étudiant par phrase, rythme rapide.",
  });

  // ------------------------------------------------------------ Séquence 1.3 (p. 35)
  d.scene({
    title: 'Séquence 1.3 : zijn & hebben', tag: 'FOCUS', page: 'Livret p. 35', img: 'scene_1_3', time: '1.3', sceneLabel: 'SÉQUENCE',
    text: ['**Zijn** (être) et **hebben** (avoir) : qui vous êtes, ce que vous avez.', 'Ces deux verbes construisent **la majorité** de vos phrases.', 'Bulles : //Ik **ben** moe, maar goed.// · //Er **is** ook iets lekkers bij!//'],
    ask: 'Qui est fatigué ? Qui propose un café ? Trouvez **zijn** dans les bulles.',
    notes: "Bulles de l’image : « Ik ben moe, maar goed. » / « Zin in een kop koffie? » / « Er is ook iets lekkers bij! » (il y a aussi quelque chose de bon avec). Coquille du livret (p. 35) : « Pieter répond «Ik heb tijd» » — dans le dialogue, Pieter dit « vandaag heb ik tijd » (ligne 4) ; dans les lignes 5–7, il demande « Heb jij ook tijd…? » et Emma répond « ik heb geen tijd ». Le titre parle d’« auxiliaires » : ici zijn et hebben sont des verbes principaux (être, avoir) ; ils deviendront auxiliaires au perfectum (séance 14).",
  });

  d.dialogue({
    title: 'Focus : lignes 5–7 du dialogue', tag: 'DIALOOG', page: 'Livret p. 35',
    lines: [
      ['EMMA', '«**Ben** je klaar voor de cursus?» — //Tu es prêt pour le cours ?//', '5'],
      ['PIETER', '«Ja, ik **heb** mijn boek en ik **ben** er klaar voor! **Heb** jij ook tijd voor een koffie?» — //Oui, j’ai mon livre et je suis prêt ! Tu as aussi le temps pour un café ?//', '6'],
      ['EMMA', '«Nee, sorry, ik **heb** geen tijd. Mijn les begint zo.» — //Non, désolée, je n’ai pas le temps. Mon cours commence tout de suite.//', '7'],
    ],
    legend: { label: 'À REPÉRER', icon: 'FaSearch', color: 'accent5', lines: ['**zijn** : //ben je · ik ben//', '**hebben** : //ik heb · heb jij//', 'Question : **verbe en 1er**', '//er klaar voor zijn// = être prêt'] },
    notes: "Lecture à deux voix, puis on inverse. Faire souligner les formes de zijn (2) et de hebben (3). « Ik ben er klaar voor » : « er » renvoie au cours (« j’y suis prêt »).",
  });

  d.picture({
    title: 'Zinnenbouwer 1.3 — Zijn, hebben & komen', tag: 'ZINNENBOUWER', page: 'Livret p. 36', img: 'zinnenbouwer_1_3',
    capLabel: 'MODE D’EMPLOI', capColor: 'tx2', capIcon: 'FaPuzzlePiece',
    caption: ['Sept familles : **A** ik · **B** jij / u · **C** hij / zij · **D** pluriel · **E** questions · **F** er is / het is · **G** origine.', 'Un bloc par colonne : **sujet → verbe → complément**.', '**zijn** + état, métier, lieu · **hebben** + objet, temps, faim…', '**G** : //Ik kom uit België.// · //Hij komt uit Gent.//'],
    notes: "Coquilles du zinnenbouwer 1.3 à signaler : « uit Belgiè » → « uit België » (tréma) ; famille A « Ik ben mijn broer » n’a pas de sens → « Dit is mijn broer » (famille C) ; famille C « Dit is » + « is » donne un doublon ; famille D : compléments au pluriel (studenten, leraren) ; famille E : les paires verbe/sujet sont à corriger (diapositive suivante) ; famille F : er is + singulier, er zijn + pluriel. Sous-titre : « à elle seule », pas « à elle ».",
  });

  // ------------------------------------------------------------ Conjugaison (p. 37)
  d.table({
    title: 'Zijn & hebben : la conjugaison', tag: 'GRAMMATICA', page: 'Livret p. 37',
    headers: ['PRONOM', 'ZIJN · être', 'EXEMPLE', 'HEBBEN · avoir', 'EXEMPLE'],
    colW: [1.9, 1.75, 3.3, 1.95, 3.23], boldCol: 0,
    rows: [
      ['ik', '**ben**', 'Ik ben leraar.', '**heb**', 'Ik heb honger.'],
      ['jij / je', '**bent**', 'Jij bent aardig.', '**hebt**', 'Jij hebt tijd.'],
      ['u', '**bent**', 'U bent klaar.', '**hebt / heeft**', 'U hebt gelijk.'],
      ['hij / zij / het', '**is**', 'Hij is moe.', '**heeft**', 'Hij heeft een auto.'],
      ['wij / we', '**zijn**', 'Wij zijn studenten.', '**hebben**', 'Wij hebben kinderen.'],
      ['jullie', '**zijn**', 'Jullie zijn thuis.', '**hebben**', 'Jullie hebben honger.'],
      ['zij / ze', '**zijn**', 'Zij zijn moe.', '**hebben**', 'Zij hebben tijd.'],
    ],
    colColor: [null, 'accent2', null, 'accent4', null],
    foot: 'Au pluriel (wij, jullie, zij), la forme = l’infinitif : **zijn**, **hebben**. Avec **u** : //u hebt// ou //u heeft//, les deux sont corrects.',
    notes: "Faire réciter en chœur, puis en chaîne (un pronom par étudiant). Exemples du livret : Ik ben leraar / Jij bent aardig / Hij is moe / Wij zijn studenten ; Ik heb honger / Jij hebt tijd / Hij heeft een auto / Wij hebben kinderen. Les exemples « U bent klaar », « Jullie… », « Zij zijn moe / Zij hebben tijd » sont ajoutés.",
  });

  d.table({
    title: 'Famille E corrigée : poser la question', tag: 'ZINNENBOUWER', page: 'Livret p. 36–37',
    intro: 'Question oui / non : le **verbe en premier**, puis le sujet. Attention aux bonnes **paires verbe + sujet** !',
    headers: ['SUJET', 'ZIJN ?', 'HEBBEN ?', 'EXEMPLE'],
    colW: [2.1, 2.2, 2.75, 5.08], boldCol: 0,
    rows: [
      ['je / jij', 'Ben je… ?', 'Heb je… ?', '//Ben je moe? · Heb jij tijd?//'],
      ['u', 'Bent u… ?', 'Hebt u… ? / Heeft u… ?', '//Bent u klaar? · Heeft u tijd?//'],
      ['hij / zij / Emma', 'Is hij… ?', 'Heeft zij… ?', '//Is Pieter thuis? · Heeft Emma een broer?//'],
      ['wij / we', 'Zijn we… ?', 'Hebben we… ?', '//Zijn we klaar? · Hebben we tijd?//'],
      ['jullie', 'Zijn jullie… ?', 'Hebben jullie… ?', '//Hebben jullie honger?//'],
      ['zij / ze', 'Zijn ze… ?', 'Hebben ze… ?', '//Zijn ze studenten?//'],
    ],
    foot: 'Piège : //jij bent// → **Ben je?** (le -t tombe après inversion) ; mais //u bent// → **Bent u?** (le -t reste). ✗ //Ben u?// ✗ //Bent hij?//',
    notes: "Le zinnenbouwer 1.3 (famille E) aligne les colonnes sans montrer les paires : lue ligne par ligne, la grille produit « Ben u? » ou « Bent hij? ». Ce tableau rétablit les bonnes combinaisons ; il servira en 1.3.3 et à la séance 7. Avec jullie/we, les compléments passent au pluriel (Zijn jullie studenten?).",
  });

  d.traps({
    title: 'Piège : avoir ≠ hebben, être ≠ zijn', tag: 'PIÈGE', page: 'Livret p. 36–39',
    intro: 'Le français et le néerlandais ne choisissent pas toujours le même verbe.',
    rows: [
      ['Ik heb bang.', 'Ik **ben** bang voor spinnen.', '//avoir peur// → **bang zijn**'],
      ['Ik heb 25 jaar.', 'Ik **ben** 25 jaar.', '//avoir 25 ans// → **zijn**'],
      ['Het doet koud.', 'Het **is** koud.', '//il fait froid// → **het is**'],
      ['Het heeft veel mensen.', '**Er zijn** veel mensen.', '//il y a// → **er is / er zijn**'],
      ['Ik ben druk.', 'Ik **heb het** druk.', '//je suis occupé// → **het druk hebben**'],
      ['Ik ben mijn broer.', 'Dit **is** mijn broer.', '//c’est mon frère// → **dit is** (famille C)'],
    ],
    notes: "Erreurs typiques de francophones. La dernière ligne corrige une combinaison du zinnenbouwer 1.3 (famille A « Ik ben … mijn broer »). Âge : « Ik ben 25 (jaar oud) ».",
  });

  // ------------------------------------------------------------ Teksten 1–3 (p. 38)
  d.exhibit({
    title: 'Teksten 1 en 2 : Emma en Pieter', tag: 'COUCHE 1', page: 'Livret p. 38',
    label: 'TEKST 1 · 2', docTitle: 'Twee portretten : ik',
    gap: 16, size: 22,
    lines: [
      ['EMMA', 'Hallo! Ik **ben** Emma. Ik **ben** studente en ik kom uit België. Ik **heb** een broer. Ik **heb** ook een boek voor de cursus. Vandaag **ben** ik een beetje moe, want ik **heb** veel werk. Er **is** een probleem: ik **heb** geen tijd! Het **is** druk op school. Jij **hebt** tijd, maar ik **heb** geen tijd. Ik **ben** klaar voor de cursus, denk ik. **Ben** jij klaar voor de cursus?'],
      ['PIETER', 'Hoi! Ik **ben** Pieter. Ik **ben** student en ik kom uit Nederland. Ik **heb** een zus. Ik **heb** ook een auto. Vandaag **heb** ik honger, dus ik ga eten. Er **zijn** veel mensen op school. Het **is** koud vandaag. Emma **is** moe, maar ik **ben** blij. Ik **ben** klaar voor de cursus: ik **heb** mijn boek! **Heb** jij ook honger?'],
    ],
    notes: "Couche 1 : le professeur lit les deux textes (deux fois), les étudiants suivent dans le livret, puis lecture à deux voix. Même structure : identité, origine, famille, objet, état du jour. Faire compter les formes de zijn et hebben (en gras). « Het is druk op school » = il y a du monde, c’est animé à l’école (correct).",
  });

  d.exhibit({
    title: 'Tekst 3 : Dit is Sarah', tag: 'COUCHE 1', page: 'Livret p. 38',
    label: 'TEKST 3', docTitle: 'Een portret : zij',
    gap: 10, size: 22,
    lines: [
      'Dit **is** Sarah. Zij **is** collega van Pieter en ze komt uit Gent. Ze **heeft** kinderen. Vandaag **heeft** ze geen tijd, want ze **heeft** veel werk. Ze {{is}} ++heeft het++ druk. Er **is** een vergadering op het werk. Het **is** laat, denk ik. Sarah **heeft** honger, maar ze **heeft** geen tijd. Zij {{is}} ++heeft het++ druk, maar wij **zijn** ontspannen! **Heeft** ze een auto? Nee, ze **heeft** geen auto. **Heb** jij kinderen?',
    ],
    side: { label: 'À REPÉRER', color: 'accent1', icon: 'FaSearch', lines: ['On **présente** quelqu’un : **zij** + //is, heeft, komt//.', 'Négation : //**geen** tijd · **geen** auto//.', 'Coquille corrigée : //Ze **heeft het** druk// (✗ //Ze is druk//).'] },
    notes: "Coquille du livret (texte 3) : « Ze is druk » et « Zij is druk, maar wij zijn ontspannen! » → « Ze heeft het druk » / « Zij heeft het druk… » (« druk zijn » = être agité). Le texte modèle est corrigé à l’écran ; le signaler aux étudiants pour qu’ils corrigent leur livret. « Zij is collega van Pieter » est correct (« een collega » est aussi possible). Le texte emploie « wij » et « denk ik » sans dire qui parle (sans doute Pieter).",
  });

  // ------------------------------------------------------------ Er is / het is (p. 39)
  d.compare({
    title: 'Er is / er zijn · het is', tag: 'À RETENIR', page: 'Livret p. 39',
    left: { h: 'ER IS / ER ZIJN = il y a', color: 'accent1', icon: 'FaMapMarkerAlt', items: ['**Existence** ou **présence** de quelque chose.', '//**Er is** een probleem.// — Il y a un problème.', '//**Er zijn** veel mensen.// — Il y a beaucoup de gens.', 'singulier → **er is** · pluriel → **er zijn**'] },
    right: { h: 'HET IS = c’est / il fait', color: 'accent2', icon: 'FaComments', items: ['**Qualité**, caractéristique, météo, heure.', '//**Het is** belangrijk.// — C’est important.', '//**Het is** koud vandaag.// — Il fait froid aujourd’hui.', '//**Het is** laat.// — Il est tard.'] },
    foot: { kind: 'trap', text: '//Il y a// ≠ //het heeft// : ✗ //Het heeft veel mensen// → //**Er zijn** veel mensen//. Et //il fait froid// = //**Het is** koud// (✗ //Het doet koud//).' },
    notes: "Le livret classe « Het is koud vandaag » sous « c’est » : en français, c’est un « il fait » impersonnel (météo) ; même structure het is en néerlandais. Faire produire : Er is koffie / Er zijn veel studenten / Het is druk / Het is laat.",
  });

  // ------------------------------------------------------------ 1.3.1 (p. 39)
  d.table({
    title: '1.3.1 Hoe gaat het vandaag?', tag: 'COUCHE 1', page: 'Livret p. 39',
    intro: 'Par deux · 10 min — Relisez les textes 1 et 2 côte à côte. Notez les **cinq différences**, en néerlandais, avec le bloc complet.',
    headers: ['VRAAG', 'TEKST 1 · EMMA', 'TEKST 2 · PIETER'],
    colW: [3.3, 4.43, 4.4], boldCol: 0,
    rows: [
      ['Waar komt hij / zij vandaan?', '[[Ik kom uit België.]]', '[[Ik kom uit Nederland.]]'],
      ['Familie?', '[[Ik heb een broer.]]', '[[Ik heb een zus.]]'],
      ['Wat heeft hij / zij? (objet)', '[[Ik heb een boek voor de cursus.]]', '[[Ik heb een auto.]]'],
      ['Hoe gaat het vandaag?', '[[Vandaag ben ik een beetje moe.]]', '[[Vandaag heb ik honger. Ik ben blij.]]'],
      ['Er is … / Er zijn …?', '[[Er is een probleem: ik heb geen tijd!]]', '[[Er zijn veel mensen op school.]]'],
    ],
    notes: "Lecture attentive, puis écriture. Coquilles : les questions néerlandaises du livret ont une espace avant « ? » (typographie française) ; le tableau regroupe deux questions par case — ici, une ligne par différence.",
    notesA: "Accepter la 3e personne (« Zij komt uit België », « Hij heeft een zus ») et les phrases complètes avec la raison (« …want ik heb veel werk »). Faire remarquer l’inversion : Vandaag ben ik / Vandaag heb ik.",
  });

  // ------------------------------------------------------------ 1.3.2 (p. 40)
  d.exercise({
    title: '1.3.2 Waar of niet waar?', tag: 'COUCHE 1', page: 'Livret p. 40',
    instr: 'Par deux · 5 min — Écoutez l’extrait (texte 3). **Une seule** phrase contredit les textes : entourez-la et écrivez la phrase vraie.',
    gap: 16,
    items: [
      'Sarah komt uit Gent. → <<waar>> / {{leugen}}',
      'Sarah heeft geen auto. → <<waar>> / {{leugen}}',
      'Er is een vergadering op het werk. → <<waar>> / {{leugen}}',
      'Er zijn veel studenten in de klas. → {{waar}} / <<leugen>>',
      { t: '**De juiste zin :** [[Er zijn veel mensen op school.]] ++(tekst 2)++' },
    ],
    aside: { label: 'RAPPEL', icon: 'FaLightbulb', color: 'accent2', lines: ['//waar// = vrai', '//niet waar// = faux', '//een leugen// = un mensonge', '//Eén zin is niet waar. Welke?//'] },
    traps: ['Phrases 1–3 : mot pour mot dans le **texte 3**.', 'Phrase 4 : dans **aucun** texte. Le texte 2 dit : //Er zijn veel **mensen** op **school**.//'],
    notes: "Coquille de consigne : « Une seule contredit les textes » (il manque « phrase »).",
    notesA: "Solution déduite des textes du livret : si l’extrait lu est le texte 3 (Sarah), les phrases 1 à 3 s’y trouvent mot pour mot (« ze komt uit Gent », « Nee, ze heeft geen auto », « Er is een vergadering op het werk ») ; la phrase 4 n’apparaît dans aucun texte. La phrase vraie la plus proche est celle de Pieter : « Er zijn veel mensen op school ». Si le professeur lit un autre extrait, adapter la correction.",
  });

  // ------------------------------------------------------------ Grammaire A1-06 Niet of geen ? (p. 63)
  d.cards({
    title: 'Niet of geen ? La négation', tag: 'GRAMMATICA', page: 'Livret p. 63',
    perRow: 2, bSize: 18,
    cards: [
      { h: 'A · GEEN = pas de, aucun', color: 'accent2', f: 'geen + nom (au lieu de een / ∅)', lines: ['//Ik heb **een** auto.// → //Ik heb **geen** auto.//', '//Ik drink melk.// → //Ik drink **geen** melk.//', '//Wij eten vlees.// → //Wij eten **geen** vlees.//'] },
      { h: 'B · NIET = ne… pas', color: 'accent6', f: 'tous les autres cas', lines: ['verbe → **à la fin** : //Ik werk vandaag **niet**.//', 'adjectif → **devant** : //Het is **niet** duur.//', 'préposition → **devant** : //Ik woon **niet** in Gent.//', 'de / het / mijn : //Ik zie mijn broer **niet**.//'] },
    ],
    foot: { kind: 'tip', text: 'Peut-on dire « **pas de** » ou « **aucun** » en français ? → **geen**. Sinon → **niet**.' },
    notes: "Fiche de grammaire A1-06. Geen remplace « een » ou l’absence d’article (∅). Niet : après le verbe et le complément de temps, à la fin ; devant l’adjectif ou la préposition. Exemple ajouté : « Ik zie mijn broer niet » (possessif).",
  });

  d.blocks({
    title: 'Où se place niet ?', tag: 'GRAMMATICA', page: 'Livret p. 63',
    rows: [
      { label: 'verbe', cells: [{ t: 'Ik', role: 'S' }, { t: 'werk', role: 'V' }, { t: 'vandaag', role: 'T' }, { t: 'niet', role: 'N' }], fr: 'Je ne travaille pas aujourd’hui. → **niet** à la fin' },
      { label: 'adjectif', cells: [{ t: 'Het', role: 'S' }, { t: 'is', role: 'V' }, { t: 'niet', role: 'N' }, { t: 'duur', role: 'M', lab: 'adjectif' }], fr: 'Ce n’est pas cher. → **niet** juste devant l’adjectif' },
      { label: 'préposition', cells: [{ t: 'Ik', role: 'S' }, { t: 'woon', role: 'V' }, { t: 'niet', role: 'N' }, { t: 'in Gent', role: 'P' }], fr: 'Je n’habite pas à Gand. → **niet** devant la préposition' },
      { label: 'geen', cells: [{ t: 'Vandaag', role: 'T' }, { t: 'heb', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'geen', role: 'N' }, { t: 'tijd', role: 'O', lab: 'nom' }], fr: 'Aujourd’hui, je n’ai pas le temps. → **geen** + nom' },
    ],
    foot: { kind: 'trap', text: 'Le français a **deux** mots (//ne… pas//), le néerlandais **un seul**. ✗ //Ik heb niet een auto// → //Ik heb **geen** auto//. ✗ //Ik heb niet tijd// → //Ik heb **geen** tijd//.' },
    notes: "Faire lire chaque ligne, puis transformer à l’oral des phrases du texte 1 et 2 : Ik ben moe → Ik ben niet moe ; Ik heb een zus → Ik heb geen zus ; Ik kom uit Nederland → Ik kom niet uit Nederland.",
  });

  d.exercise({
    title: 'A1-06 Oefening : niet of geen ?', tag: 'GRAMMATICA', page: 'Livret p. 63',
    instr: 'Seul · 5 min — Complétez avec **niet** ou **geen**.',
    gap: 10,
    items: ['Ik heb [[geen]] tijd.', 'Wij hebben [[geen]] fiets.', 'Ik koop het boek [[niet]].', 'Ik heb [[geen]] geld.', 'Hij slaapt [[niet]].', 'Zij is [[niet]] ziek.', 'Hij gaat [[niet]] naar school.', 'Zij begrijpt mijn vraag [[niet]].'],
    traps: ['//tijd, geld// (∅) et //een fiets// → **geen**.', '//het boek//, //mijn vraag// → **niet** à la fin.', '//ziek// (adjectif), //naar school// (préposition) → **niet** devant.'],
    notes: "Correction orale : faire justifier chaque réponse (« pas de temps » → geen ; « pas malade » → niet).",
  });

  d.exercise({
    title: 'Nee! Répondez en phrase complète', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Questions sur les textes 1 à 3 : répondez **non**, en phrase complète, avec **niet** ou **geen**.',
    cols: 2, gap: 12,
    items: [
      'Heeft Sarah een auto? → [[Nee, ze heeft geen auto.]]',
      'Is Pieter moe? → [[Nee, hij is niet moe. Hij is blij.]]',
      'Heeft Emma vandaag tijd? → [[Nee, ze heeft vandaag geen tijd.]]',
      'Komt Pieter uit België? → [[Nee, hij komt niet uit België.]]',
      'Is het warm vandaag? → [[Nee, het is niet warm. Het is koud.]]',
      'Heeft Pieter een broer? → [[Nee, hij heeft geen broer. Hij heeft een zus.]]',
      'Is Emma de zus van Pieter? → [[Nee, ze is niet de zus van Pieter.]]',
      'Is Sarah studente? → [[Nee, ze is geen studente. Ze is collega van Pieter.]]',
    ],
    traps: ['Métier sans article → **geen** : //Ze is **geen** studente.//', 'Avec **de** + nom → **niet** : //niet de zus van Pieter//.', 'Ajoutez la vraie info : //Hij heeft een zus.//'],
    notes: "Exercice ajouté : réemploi de niet/geen avec les trois portraits. À faire par deux, l’un pose la question, l’autre répond sans regarder le livret.",
  });

  // ------------------------------------------------------------ 1.3.3 (p. 40–41)
  d.exercise({
    title: '1.3.3 Ik ben, ik heb — dix phrases vraies', tag: 'COUCHE 2', page: 'Livret p. 40–41', mode: 'a',
    instr: 'Seul, puis par deux · 20 min — **5 phrases avec zijn**, **5 avec hebben**, vraies pour vous. Interrogez votre voisin (famille E), cochez ce qui vaut pour lui, puis écrivez 2 phrases avec **wij**.',
    number: false, gap: 8,
    items: [
      { h: 'Exemples (à adapter : vrais pour vous !)' },
      { t: '**Ik ben** studente. · **Ik ben** vandaag een beetje moe. · **Ik ben** bang voor spinnen.' },
      { t: '**Ik heb** twee kinderen. · **Ik heb** geen auto. · **Ik heb** vandaag veel werk.' },
      { h: 'Interroger le voisin (famille E)' },
      { t: '//**Ben jij** ook bang voor spinnen?// — //Ja! / Nee, ik ben niet bang.//' },
      { t: '//**Heb jij** ook kinderen?// — //Ja. / Nee, ik heb geen kinderen.//' },
      { h: 'Samen (wij)' },
      { t: '//**Wij zijn** allebei moe. · **Wij hebben** geen auto.//' },
    ],
    sideW: 3.6,
    expect: ['**10 phrases** : 5 × //ik ben//, 5 × //ik heb//.', 'Compléments du **zinnenbouwer 1.3**.', '**geen** + nom · **niet** + adjectif.', '**2 phrases** avec //wij//.', 'Couche 2 · seul, puis par deux · 20 min'],
    notes: "Production libre : pas de correction unique. Passer dans les rangs : conjugaison (ik ben / ik heb), pièges (Ik ben bang, Ik heb het druk), niet/geen. « allebei » = tous les deux. Les phrases avec « wij » se conjuguent au pluriel : wij zijn, wij hebben.",
  });

  d.closing({
    cliff: 'Séance 7 : répondre **en phrase complète**, poser des **questions** (wie, wat, waar…) et vous **présenter en 90 secondes** — puis 60, puis 45 !',
    homework: ['Apprendre **zijn** et **hebben** par cœur (p. 37).', 'Relire les **trois textes** (p. 38) à voix haute.', 'Terminer **1.3.3** : 10 phrases + 2 avec //wij//.', 'Écrire **5 phrases** négatives vraies : 3 avec **geen**, 2 avec **niet**.'],
    exit: 'Dites une chose que vous **avez**, une chose que vous **n’avez pas** et comment vous **êtes** aujourd’hui.',
    notes: "Ticket de sortie oral : « Ik heb een …, ik heb geen …, en vandaag ben ik … ».",
  });
};
