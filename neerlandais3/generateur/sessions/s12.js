// Séance 12 — Palier 7 · Séquence 7.2 (De officiële taal : les nominalisations) — Livret p. 7–10a
exports.meta = {
  n: 12, slug: 'Officiele_taal_nominaliseren', title: 'De officiële taal',
  subtitle: 'Les nominalisations — lire et écrire la langue administrative',
  pages: 'Livret p. 7–10a', img: 'p7_09_4', time: '7.2', sceneLabel: 'SÉQUENCE',
  block: 'Palier 7 · Mede-eigendom',
  coverNotes: "Séance consacrée à la séquence 7.2 : transformer un verbe en nom (-ing, -heid, -teit/-atie, het + infinitif) pour comprendre une convocation, rédiger un ordre du jour et écrire au syndic. Elle comprend l’exercice 3 (lire la convocation), l’exercice 4 (van werkwoord naar naamwoord), la TAAK 2 (lettre au syndic) et l’activité Dagelijks leven D2 (la langue de la commune).",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Transformer un verbe en **nom** (-ing, -heid, -teit / -atie, het + infinitif) pour **lire et rédiger** une convocation, un ordre du jour ou une affiche.',
    language: '//beslissen → de beslissing · verdelen → de verdeling · het uitstellen van de werken · de verdeling van de kosten//',
    skills: 'Lire une convocation officielle · nominaliser des phrases · écrire une lettre formelle au syndic · décoder les messages de la commune',
    agenda: [['Rappel séance 11', 8], ['7.2 · pourquoi nominaliser (p. 7)', 7], ['Les quatre procédés (p. 8–9)', 12], ['Ex. 3 · la convocation', 15], ['Ex. 4 · van werkwoord naar naamwoord', 10], ['TAAK 2 · brief aan de syndicus', 15], ['D2 · De taal van de gemeente', 20], ['Bilan', 3]],
    notes: "Durées indicatives sur 90 minutes. La séance couvre les pages 7 à 10a du livret. La TAAK 2 (lettre de 8 à 10 phrases) peut être terminée à la maison ; en classe, consacrer le temps à la planification (objet, nominalisations, zou) et à la relecture. D2 est riche : si le temps manque, traiter deux messages sur quatre.",
  });

  d.exercise({
    title: 'Rappel séance 11 : lexique et relatives', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 11',
    instr: 'Traduisez — seul · 4 min, puis correction orale.',
    items: [
      { q: '« Le syndic est la personne qui gère l’immeuble. »', a: 'De syndicus is de persoon **die** het gebouw **beheert**.' },
      { q: '« Les parties communes sont les espaces que tous les habitants utilisent. »', a: 'De gemene delen zijn de ruimtes **die** alle bewoners **gebruiken**.' },
      { q: 'Article + mot : la procuration · le fonds de réserve · la convocation', a: '^^de^^ volmacht · %%het%% reservefonds · ^^de^^ uitnodiging' },
      { q: '« Les coûts sont répartis selon les quotités. »', a: 'De kosten **worden** volgens de quotiteiten **verdeeld**.' },
      { q: '« Je ne m’en ferais pas de souci. »', a: 'Ik **zou** me daar geen zorgen over **maken**.' },
    ],
    traps: ['**Relative** : verbe conjugué à la **fin**.', '**de** (bleu) · **het** (magenta) : réviser les articles.', '**Passif** : worden + participe en fin de phrase.'],
    notes: "Rappel de la séance 11 (4 minutes). Si les articles posent problème, projeter la mindmap de la séance 11 (diapositives de vocabulaire). Réponses alternatives acceptées pour la phrase 2 : « …de plaatsen die alle bewoners gebruiken ».",
    notesA: "Faire répéter en chœur. Relever les erreurs de place du verbe dans la relative : elles reviendront dans la lettre au syndic (TAAK 2).",
  });

  d.scene({
    title: 'Séquence 7.2 : la langue officielle', tag: 'FOCUS', page: 'Livret p. 7', img: 'p7_09_4', time: '7.2', sceneLabel: 'SÉQUENCE',
    text: ['//We beslissen morgen.// → //De **beslissing** valt morgen.// Les documents officiels parlent en **noms**.', '**Focus : lignes 2, 4, 6 et 8**', '«De **beslissing** werd uitgesteld… een **stemming** komen.»', '«De **verdeling** van de kosten…»', '«…voor **het uitstellen** van de werken.» · «**het vragen van** een offerte»'],
    ask: 'Quel verbe se cache derrière « de goedkeuring » ?',
    notes: "Réponse : goedkeuren (approuver). Montrer la différence de registre : « We beslissen morgen » (oral, verbal) / « De beslissing valt morgen » (écrit, nominal). Le Focus du livret cite : «De beslissing werd vorig jaar uitgesteld... nu moet er een stemming komen.» (le mot « echt » du dialogue est omis par l’ellipse). Faire repérer l’article de devant chaque nom en -ing.",
  });

  d.picture({
    title: 'Werkwoord → naamwoord : +ing', tag: 'GRAMMATICA', page: 'Livret p. 8', img: 'p7_10_5',
    capLabel: 'RÈGLE D’OR', capColor: 'accent2', capIcon: 'FaBullseye',
    caption: ['**beslissen → de beslissing** · **stemmen → de stemming** · **verdelen → de verdeling** · **goedkeuren → de goedkeuring**', '**nom + van + complément** : //de verdeling van de kosten//.', 'Tous les noms en **-ing** prennent l’article **de**.'],
    notes: "Planche du livret : trois verbes du métier deviennent trois noms. Faire lire les paires à voix haute. La règle d’or : le complément du verbe (de kosten) devient un complément introduit par « van » (de verdeling van de kosten).",
  });

  d.cards({
    title: 'Quatre procédés de nominalisation', tag: 'À RETENIR', page: 'Livret p. 8',
    perRow: 4,
    cards: [
      { h: '① -ING', color: 'accent2', f: 'de stemming', lines: ['verbe (radical) + **-ing**', 'nom **de**', '//vergaderen → de vergadering//', '//herstellen → de herstelling//'] },
      { h: '② HET + INFINITIF', color: 'accent3', f: 'het uitstellen', lines: ['**toujours possible**', 'ton neutre · nom **het**', '//het uitstellen van de werken//', '//het vragen van een offerte//'] },
      { h: '③ -HEID', color: 'accent1', f: 'de veiligheid', lines: ['adjectif + **-heid**', 'nom **de**', '//veilig → de veiligheid//', '//aanwezig → de aanwezigheid//'] },
      { h: '④ -TEIT / -ATIE', color: 'accent4', f: 'de renovatie', lines: ['mots d’origine **latine**', 'nom **de**', '//de kwaliteit · de quotiteit//', '//de organisatie · de renovatie//'] },
    ],
    foot: { kind: 'trap', text: 'Le français nominalise avec //-tion, -ment// (décision, remplacement) ; le néerlandais ajoute **-ing** au radical : //vervangen → de vervang**ing**//. Seul **het + infinitif** donne un nom en **het**.' },
    notes: "Tableau de la page 8 du livret (quatre procédés). Les noms en -ing, -heid, -teit et -atie prennent tous « de » (on peut ajouter -atie / -ie). « de renovatie » et « de renovering » sont deux formes possibles (le livret cite les deux). « het + infinitif » est toujours possible quand le verbe n’a pas de nom en -ing (uitstellen → het uitstellen ; on trouve aussi « het uitstel »).",
  });

  d.blocks({
    title: 'Du verbe au nom : le complément passe par « van »', tag: 'GRAMMATICA', page: 'Livret p. 9',
    intro: 'Le complément du verbe devient un **complément en van** : l’objet reste identique, le verbe devient un **nom**.',
    rows: [
      { label: 'Verbe', cells: [{ t: 'We', role: 'S' }, { t: 'verdelen', role: 'V' }, { t: 'de kosten', role: 'O' }], fr: 'Nous répartissons les coûts.' },
      { label: 'Nom + van', cells: [{ t: 'de verdeling', role: 'M', lab: 'nom (de)' }, { t: 'van', role: 'C' }, { t: 'de kosten', role: 'O', lab: 'complément' }], fr: 'la répartition des coûts' },
      { label: 'Séparable', cells: [{ t: 'We', role: 'S' }, { t: 'keuren', role: 'V' }, { t: 'de notulen', role: 'O' }, { t: 'goed', role: 'F', lab: 'particule' }], fr: 'Nous approuvons le procès-verbal.' },
      { label: 'Nom + van', cells: [{ t: 'de goedkeuring', role: 'M', lab: 'goed + keuring' }, { t: 'van', role: 'C' }, { t: 'de notulen', role: 'O' }], fr: 'l’approbation du procès-verbal' },
      { label: 'Séparable', cells: [{ t: 'We', role: 'S' }, { t: 'stellen', role: 'V' }, { t: 'de werken', role: 'O' }, { t: 'uit', role: 'F', lab: 'particule' }], fr: 'Nous reportons les travaux.' },
      { label: 'Het + inf.', cells: [{ t: 'het uitstellen', role: 'M', lab: 'het + infinitif' }, { t: 'van', role: 'C' }, { t: 'de werken', role: 'O' }], fr: 'le report des travaux' },
    ],
    foot: { kind: 'tip', text: 'Les noms en -ing, -heid, -teit prennent **de** : précieux dans une relative — //de beslissing **die** genomen **werd**// (palier 5 + palier 6 dans une seule phrase).' },
    notes: "Page 9 du livret. Les deux verbes séparables (goedkeuren, uitstellen) montrent que la particule disparaît ou se soude dans le nom : goed + keuring = goedkeuring ; pour uitstellen on utilise « het uitstellen » (ou « het uitstel »). Dans la relative « de beslissing die genomen werd », le verbe passif est à la fin : participe + werd.",
  });

  d.traps({
    title: 'Erreurs fréquentes avec les nominalisations', tag: 'PIÈGE', page: 'Hors syllabus',
    intro: 'Quatre fautes typiques des francophones — lisez à voix haute et corrigez.',
    rows: [
      ['✗ de renovatie de gevel', '✓ de renovatie **van** de gevel', 'Le complément du nom passe par **van**.'],
      ['✗ het stemming', '✓ **de** stemming', 'Tous les noms en -ing prennent **de**.'],
      ['✗ de uitstelling van de werken', '✓ **het uitstellen** van de werken', 'Pas de -ing ici : **het** + infinitif.'],
      ['✗ de goedkeuren van de notulen', '✓ de **goedkeuring** / het **goedkeuren**', 'Infinitif nominal = **het** ; nom en -ing = **de**.'],
    ],
    notes: "Page ajoutée (hors syllabus) pour fixer les quatre erreurs les plus fréquentes. Les étudiants francophones calquent « la rénovation de la façade » et oublient « van ». Le piège « het stemming » vient de l’influence de « het stemmen ».",
  });

  d.exhibit({
    title: '3 Lezen : de uitnodiging van de syndicus', tag: 'COUCHE 1', page: 'Livret p. 9',
    label: 'DOCUMENT', docTitle: 'Uitnodiging — Algemene vergadering Résidence Zonneberg',
    lines: [
      'Geachte mede-eigenaar,',
      'Hierbij nodigen wij u uit voor de algemene vergadering van dinsdag 22 september om 19.00 uur in de inkomhal.',
      'Agenda:',
      ['1', 'Goedkeuring van de notulen van de vorige vergadering.'],
      ['2', 'Bespreking van de offerte voor de renovatie van de gevel (€ 86.500).'],
      ['3', 'Stemming over de uitvoering van de werken.'],
      ['4', 'Verhoging van de bijdrage aan het reservefonds.'],
      ['5', 'Varia.'],
      'Bij afwezigheid kunt u een volmacht geven aan een andere mede-eigenaar of aan uw vertegenwoordiger.',
      'Met vriendelijke groeten, F. Vermeulen, syndicus',
    ],
    notes: "Compréhension de l’écrit. Lecture silencieuse de 3 minutes, puis les trois questions de la diapositive suivante. Le 22 septembre tombe un mardi en 2026 : la date est donc cohérente.",
  });

  d.exercise({
    title: '3 Lezen : les trois questions', tag: 'COUCHE 1', page: 'Livret p. 9',
    instr: 'Seul · 6 min, puis par deux.',
    number: false, gap: 4, qGap: 10,
    items: [
      { q: '**1** Les nominalisations de l’agenda et leur verbe d’origine (le livret en annonce huit) ?', a: 'goedkeuring ← goedkeuren · vergadering ← vergaderen · bespreking ← bespreken · renovatie ← renoveren · stemming ← stemmen · uitvoering ← uitvoeren · verhoging ← verhogen · bijdrage ← bijdragen' },
      { q: '**2** Que peut faire mevrouw Dubois si elle ne peut pas venir ? (une nominalisation)', a: '**het geven van een volmacht** — aan een andere mede-eigenaar of aan haar vertegenwoordiger' },
      { q: '**3** Point 3 en phrase verbale : « De mede-eigenaars stemmen over… »', a: 'De mede-eigenaars stemmen **over de uitvoering van de werken** (ou : …stemmen erover **of** de werken **worden uitgevoerd**).' },
    ],
    notes: "Question 1 : le livret annonce huit nominalisations dans l’agenda. Les sept noms les plus nets sont goedkeuring, vergadering, bespreking, renovatie, stemming, uitvoering, verhoging ; le huitième est « bijdrage » (bijdragen), nominalisation irrégulière ; on peut aussi ajouter « afwezigheid » (afwezig + -heid) de la phrase finale (hors agenda). Question 2 : accepter « de volmacht » ou « het geven van een volmacht ». Question 3 : « stemmen over + nom » est la construction à retenir.",
    notesA: "Rappeler que le nom garde son sens verbal : « de uitvoering van de werken » = « het uitvoeren van de werken ». À l’inverse, le passage au verbe oblige à choisir un sujet (de mede-eigenaars).",
  });

  d.exercise({
    title: '4 Van werkwoord naar naamwoord', tag: 'COUCHE 2', page: 'Livret p. 10',
    instr: 'Nominalisez pour rendre ces phrases « dignes d’un ordre du jour ». Modèle : //We herstellen de lift → de herstelling van de lift.// Seul · 5 min.',
    items: [
      { q: 'We renoveren de gevel.', a: 'de **renovatie** (ou de renovering) **van** de gevel' },
      { q: 'We verhogen de bijdrage.', a: 'de **verhoging** van de bijdrage' },
      { q: 'We keuren de notulen goed. (séparable)', a: 'de **goedkeuring** van de notulen' },
      { q: 'We stellen de werken uit. (séparable : het + infinitif)', a: '**het uitstellen** van de werken' },
      { q: 'We vergaderen in september.', a: 'de **vergadering** in september' },
    ],
    traps: ['**goed|keuren** → //goedkeuring// : la particule se soude au nom.', '**uitstellen** : **het** + infinitif (ou //het uitstel//).', 'Nom en **-ing** : **de** · infinitif nominal : **het**.'],
    notes: "Modèle de l’exercice : « We herstellen de lift → de herstelling van de lift ». Phrase 5 : pas de « van » car il n’y a pas de complément d’objet ; « in september » reste tel quel. Phrase 4 : « het uitstel van de werken » est aussi correct (uitstel = nom, het-woord).",
    notesA: "Faire lire chaque groupe nominal complet. Pour la phrase 3, rappeler que la particule « goed » ne se détache plus : goedkeuring. Pour la phrase 1, accepter renovering.",
  });

  d.exercise({
    title: 'TAAK 2 : de brief aan de syndicus', tag: 'ÉCRIT', page: 'Livret p. 10', mode: 'a', img: 'p7_12_6', imgH: 2.4,
    instr: 'Écrit · seul · 15 min. **Mevrouw Dubois** veut ajouter un point à l’ordre du jour : **de beveiliging van de inkomdeur**, après deux incidents. Rédigez la demande officielle au syndic.',
    number: false, gap: 8,
    items: [
      { t: '**Betreft** : objet nominal en titre — //toevoeging van een agendapunt//' },
      { t: '**5 nominalisations** au moins' },
      { t: 'Un **discours indirect** : //Mevrouw Dubois zei dat…//' },
      { t: 'Une demande polie avec **zou**' },
      { t: 'Un **cadre formel** : //Geachte…, … Met vriendelijke groeten//' },
    ],
    expect: ['**8 à 10 phrases**', 'Registre **formel** (u-vorm)', 'Écrit · seul · 15 min'],
    notes: "Production écrite libre. Passer dans les rangs : vérifier l’objet nominal (Betreft: toevoeging van…), le verbe à la fin des subordonnées, la formule de politesse. Le livret fixe 8 à 10 phrases : lettre-modèle sur la diapositive suivante. Si le temps manque, finir à la maison.",
  });

  d.exhibit({
    title: 'TAAK 2 : lettre-modèle', tag: 'ÉCRIT', page: 'Livret p. 10',
    label: 'MODÈLE', docTitle: 'Betreft: toevoeging van een agendapunt',
    lines: [
      'Geachte heer Vermeulen,',
      'Wij vertegenwoordigen mevrouw Dubois, mede-eigenaar in de Résidence Zonneberg. Namens haar vragen wij de toevoeging van een agendapunt aan de algemene vergadering van 22 september. Het gaat om de beveiliging van de inkomdeur.',
      'De voorbije weken deden zich twee incidenten voor. Mevrouw Dubois zei dat de deur ’s nachts niet altijd goed sloot. Zij wenst daarom een bespreking en een stemming over de vervanging van het slot.',
      'Een offerte voor de uitvoering van de werken kunnen wij vóór de vergadering bezorgen. Zou u dit punt aan de agenda kunnen toevoegen? Alvast bedankt voor uw medewerking.',
      'Met vriendelijke groeten, Stef · Immo Van Damme',
    ],
    side: { label: 'À REPÉRER', color: 'accent3', icon: 'FaSearch', lines: ['**Nominalisations** : toevoeging · beveiliging · bespreking · stemming · vervanging · uitvoering', '**Discours indirect** : //zei dat…//', '**Zou** : //Zou u … kunnen toevoegen?//', '**Cadre formel**'] },
    notes: "Un modèle parmi d’autres : 9 phrases, 6 nominalisations (toevoeging, beveiliging, bespreking, stemming, vervanging, uitvoering), un discours indirect (zei dat… sloot), une demande polie avec zou, un cadre formel (Betreft, Geachte, Met vriendelijke groeten). « Zich voordoen » est séparable : « deden zich … voor ». Accepter « mede-eigenares » pour une femme, mais « mede-eigenaar » est la forme courante.",
  });

  d.experts({
    title: 'D2 Dagelijks leven : de taal van de gemeente', tag: 'ÉCRIT', page: 'Livret p. 10a',
    intro: 'Lisez comme un habitant pressé : que faut-il **faire** ? Soulignez les nominalisations, puis « traduisez » en une phrase verbale. Seul · 8 min.',
    cards: [
      { who: 'A', label: 'BORD A', q: 'PARKEERVERBOD — maandag 14/10, van 7 tot 18 uur. Reden: verhuizing. Overtreders worden weggetakeld.', a: 'verhuizing ← verhuizen · overtreders ← overtreden → //Maandag mag je hier niet parkeren, want iemand verhuist.//' },
      { who: 'B', label: 'BRIEF B', q: 'Ophaling van grofvuil aan huis: inschrijving verplicht vóór 30 oktober via het e-loket. Na betaling volgt een bevestiging van de ophaaldatum.', a: 'ophaling · inschrijving · betaling · bevestiging → //Schrijf je vóór 30 oktober in via het e-loket. Nadat je betaald hebt, bevestigen we de datum.//' },
      { who: 'C', label: 'BERICHT C', q: 'Verwijdering van achtergelaten fietsen: alle fietsen zonder naamkaartje worden op 1 november verwijderd. Bij vragen: contactname met de syndicus.', a: 'verwijdering · contactname → //Staat je fiets zonder naamkaartje in de inkomhal? Dan verwijderen we hem op 1 november. Neem bij vragen contact op met de syndicus.//' },
      { who: 'D', label: 'MAIL D', q: 'Bevestiging van uw afspraak voor de vernieuwing van uw identiteitskaart: dinsdag 5 november om 10.20 uur, loket 4. Gelieve uw oude kaart mee te brengen. Annulering is mogelijk tot 24 uur vooraf.', a: 'bevestiging · vernieuwing · annulering → //Je afspraak is bevestigd. Breng je oude kaart mee. Je kunt tot 24 uur vooraf annuleren.//' },
    ],
    notes: "Quatre messages du livret. Question 1 (soulignement) : bord A parkeerverbod, verhuizing, overtreders (← overtreden) ; brief B ophaling, inschrijving, betaling, bevestiging, ophaaldatum ; bericht C verwijdering, contactname ; mail D bevestiging, vernieuwing, annulering. Question 2 : une phrase verbale par message (modèles ci-dessous à la correction). Remarques : « weggetakeld » (wegtakelen) est la forme belge pour « remorqué » ; « contactname » est la forme administrative belge (aussi « contactopname » ou « contact opnemen ») ; les jours de la semaine des affiches (14/10, 5 novembre) correspondent à l’année 2024 : si les étudiants le remarquent, peu importe, c’est un exemple.",
    notesA: "Faire lire les phrases « traduites » à voix haute. Insister sur le registre : la phrase verbale parle à « je / jij » (informel), l’affiche parle en noms et au passif (formel). Plusieurs phrases verbales sont possibles : accepter toute reformulation correcte avec verbe conjugué.",
  });

  d.exercise({
    title: 'D2 À vous : l’affiche pour le hall', tag: 'ÉCRIT', page: 'Livret p. 10a', mode: 'a',
    instr: 'Écrit · seul · 8 min. Rédigez l’affiche du hall (4 à 5 lignes, style nominal) : onderhoud van de lift, opruiming van de kelder, afsluiting van het water, buurtfeest…',
    number: false, gap: 8,
    items: [
      { h: 'Modèle : Onderhoud van de lift' },
      { t: '**Wegens onderhoud** is de lift op woensdag 12 maart van 8 tot 12 uur niet beschikbaar.' },
      { t: 'De **controle** en de **herstelling** worden uitgevoerd door de firma Liftservice.' },
      { t: '**Gelieve** de trap te nemen.' },
      { t: '**Bij vragen**: contactname met de syndicus. Dank voor uw begrip.' },
    ],
    expect: ['**4 nominalisations** minimum', '**1 passif**', '**1 formule** : Gelieve… · Wegens… · Bij vragen…'],
    notes: "Production libre. Le modèle contient les nominalisations onderhoud, controle, herstelling, begrip, contactname, le passif « worden uitgevoerd » et trois formules administratives (Wegens, Gelieve, Bij vragen). Les étudiants affichent leur production au mur ou la lisent à la classe, qui doit retrouver le verbe derrière chaque nom.",
  });

  d.exercise({
    title: 'Quel nom ? Quel suffixe ?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Écrivez le nom avec son article **de**. Seul · 4 min.',
    cols: 2, gap: 10,
    items: [
      'afwezig → de [[afwezigheid]]',
      'verhogen → de [[verhoging]]',
      'beschikbaar → de [[beschikbaarheid]]',
      'controleren → de [[controle]]',
      'uitnodigen → de [[uitnodiging]]',
      'tevreden → de [[tevredenheid]]',
      'organiseren → de [[organisatie]]',
      'vergaderen → de [[vergadering]]',
    ],
    traps: ['**adjectif** + -heid : //afwezig → afwezigheid//', '**verbe** + -ing : //verhogen → verhoging//', '**mots latins** : //-atie, -ie// (organisatie, controle)'],
    notes: "Exercice ajouté (4 minutes). Tous les noms prennent « de ». Variante orale : le professeur donne le verbe ou l’adjectif, la classe répond avec l’article et le nom, puis forme une phrase d’ordre du jour (« De uitnodiging voor de vergadering is verstuurd »).",
    notesA: "Retenir : -heid se colle à un adjectif (afwezig, beschikbaar, tevreden), -ing à un verbe (verhogen, uitnodigen, vergaderen), -atie aux verbes en -iseren / -eren d’origine latine (organiseren → organisatie). « controle » n’a pas de suffixe : contrôler → de controle.",
  });

  d.closing({
    cliff: 'Séance 13 : **argumenter**. //Enerzijds… anderzijds, echter, daarentegen, ten slotte// : les connecteurs qui transforment une opinion en **position**.',
    homework: ['Apprendre les **quatre procédés** de nominalisation (p. 8) avec deux exemples chacun.', 'Terminer la **lettre au syndic** (TAAK 2) : 8 à 10 phrases, registre formel.', 'Rédiger l’**affiche** du hall (D2) et la relire à voix haute.'],
    exit: 'Nominalisez : **We verdelen de kosten.** et **We stellen de werken uit.**',
    notes: "Ticket de sortie à l’oral : « de verdeling van de kosten » et « het uitstellen van de werken ». Vérifier « van » et l’article.",
  });
};
