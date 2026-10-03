// Séance 14 — Palier 7 · Séquence 7.4 (De notulen : rapporter la réunion) — Livret p. 16–18a
exports.meta = {
  n: 14, slug: 'De_notulen', title: 'De notulen van de vergadering',
  subtitle: 'Rapporter une réunion — passif impersonnel, discours indirect et procès-verbal',
  pages: 'Livret p. 16–18a', img: 'p7_20_10', time: '7.4', sceneLabel: 'SÉQUENCE',
  block: 'Palier 7 · Mede-eigendom',
  coverNotes: "Séance consacrée à la séquence 7.4 : lire un procès-verbal (notulen) et rapporter la réunion à une cliente. On marie le discours indirect du palier 6 (zei dat, vroeg of), le passif impersonnel (Er werd beslist dat…) et les nominalisations de 7.2. Elle comprend l’exercice 7 (lire les notulen), la TAAK 4 (rapport à mevrouw Dubois) et l’activité Dagelijks leven D4 (Wat heb je gemist ? : même information, deux registres).",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: '**Lire un procès-verbal** et le **rapporter fidèlement** : décisions au passif impersonnel (//Er werd beslist dat…//), positions au discours indirect, résultats de vote chiffrés.',
    language: '//Er werd beslist dat… · Er werd voorgesteld om… · De verhoging werd goedgekeurd met 8 stemmen tegen 3 · zei dat · vroeg of//',
    skills: 'Lire des notulen · employer le passif impersonnel et le discours indirect · rédiger un rapport formel · transposer le même contenu en registre informel',
    agenda: [['Rappel séance 13', 8], ['7.4 · pourquoi le PV (p. 16)', 10], ['Grammaire : passif impersonnel + discours indirect', 15], ['Ex. 7 · lire les notulen', 17], ['TAAK 4 · het verslag', 17], ['D4 · Wat heb je gemist?', 20], ['Bilan', 3]],
    notes: "Durées indicatives sur 90 minutes. Pages 16 à 18a du livret. La TAAK 4 (10 à 12 phrases) se prépare en classe (planification et premières phrases) et se termine à la maison. D4 : traiter d’abord la comparaison des registres, puis la rédaction.",
  });

  d.exercise({
    title: 'Rappel séance 13 : les connecteurs', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 13',
    instr: 'Seul · 4 min, puis correction orale.',
    items: [
      { q: 'Remettez dans l’ordre : //Ten slotte · ik · schrijf · het verslag//', a: 'Ten slotte **schrijf ik** het verslag.' },
      { q: 'Nadia is voor. Meneer Willems ___ is tegen. (en revanche)', a: 'Meneer Willems **daarentegen** is tegen.' },
      { q: '« D’une part… d’autre part… »', a: '**Enerzijds** … **anderzijds** …' },
      { q: 'Wat de kosten ___, stel ik een spreiding voor.', a: 'Wat de kosten **betreft**, stel ik een spreiding voor.' },
      { q: 'Reformulez avec **met andere woorden** : //De offerte is onvolledig.//', a: 'De offerte is onvolledig. **Met andere woorden**: we kunnen nog niet beslissen.' },
    ],
    traps: ['Connecteur en tête : **verbe avant le sujet**.', '**echter / daarentegen** : aussi après le sujet.', '**wat … betreft** encadre le thème.'],
    notes: "Rappel de la séance 13 (4 minutes). Phrase 5 : n’importe quelle reformulation correcte est acceptée (« Met andere woorden: we hebben meer informatie nodig »).",
    notesA: "Les connecteurs servent à argumenter ; les notulen les reprennent sous forme de verbes de rapport (zei dat, vroeg echter of…). Faire remarquer le « echter » dans « De heer Yilmaz vroeg echter of… » de l’exercice 7.",
  });

  d.picture({
    title: 'Séquence 7.4 : le PV fait foi', tag: 'FOCUS', page: 'Livret p. 16', img: 'p7_20_10',
    capLabel: 'EXEMPLES DU LIVRET', capColor: 'accent2', capIcon: 'FaFileAlt',
    caption: ['**Ce qui n’est pas dans les notulen n’existe pas.**', '//Er werd beslist dat de werken in maart starten.// — Il a été décidé que…', '//Er werd voorgesteld om een tweede offerte te vragen.// — Il a été proposé de…', '//De verhoging werd goedgekeurd met 8 stemmen tegen 3.// — …approuvée par 8 voix contre 3.'],
    notes: "Le livret ne propose pas de Focus de lignes pour 7.4 : les trois exemples de la page 16 en tiennent lieu. L’illustration décompose « Er werd beslist dat… » : Er (sujet formel) + werd (auxiliaire du passif) + beslist (participe) + dat (début de la subordonnée). Cette séquence assemble le discours indirect du palier 6 (zei dat, vroeg of), les nominalisations (7.2) et le passif.",
  });

  d.blocks({
    title: 'Le PV : passif impersonnel et discours indirect', tag: 'GRAMMATICA', page: 'Livret p. 16',
    intro: 'Cinq tournures de procès-verbal. Dans les subordonnées, le **verbe conjugué** part **à la fin**.',
    rows: [
      { label: 'Décision', cells: [{ t: 'Er', role: 'X', lab: 'sujet formel' }, { t: 'werd', role: 'V' }, { t: 'beslist', role: 'F', lab: 'participe' }, { t: 'dat', role: 'C' }, { t: 'de werken in maart', role: 'O' }, { t: 'starten', role: 'V', lab: 'à la fin' }], fr: 'Il a été décidé que les travaux démarrent en mars.' },
      { label: 'Proposition', cells: [{ t: 'Er', role: 'X' }, { t: 'werd', role: 'V' }, { t: 'voorgesteld', role: 'F' }, { t: 'om een tweede offerte', role: 'O' }, { t: 'te vragen', role: 'F' }], fr: 'Il a été proposé de demander un deuxième devis.' },
      { label: 'Vote', cells: [{ t: 'De verhoging', role: 'S' }, { t: 'werd', role: 'V' }, { t: 'goedgekeurd', role: 'F' }, { t: 'met 8 stemmen tegen 3', role: 'M' }], fr: 'L’augmentation a été approuvée par 8 voix contre 3.' },
      { label: 'Déclaration', cells: [{ t: 'Mevrouw Peeters', role: 'S' }, { t: 'zei', role: 'V' }, { t: 'dat', role: 'C' }, { t: 'de werken dringend', role: 'O' }, { t: 'waren', role: 'V', lab: 'à la fin' }], fr: 'Madame Peeters a dit que les travaux étaient urgents.' },
      { label: 'Question', cells: [{ t: 'De heer Yilmaz', role: 'S' }, { t: 'vroeg', role: 'V' }, { t: 'of', role: 'C' }, { t: 'een tweede offerte mogelijk', role: 'O' }, { t: 'was', role: 'V', lab: 'à la fin' }], fr: 'Monsieur Yilmaz a demandé si un deuxième devis était possible.' },
    ],
    foot: { kind: 'trap', text: 'En français : //**Il** a été décidé que…//. En néerlandais, **er** est obligatoire quand rien d’autre n’ouvre la phrase : //**Er** werd beslist dat…// ✗ //Werd beslist dat…//. Avec un autre élément en tête : //In maart werd beslist dat…//' },
    notes: "Résumé de la séquence en cinq lignes. Le passif impersonnel (Er werd + participe) cache l’agent : on ne dit pas qui a décidé. « Er » n’est pas obligatoire dès qu’un autre élément ouvre la phrase (In maart werd beslist…, Daarna werd… ). Pluriel : « Er werden twee voorstellen goedgekeurd ». Le discours indirect suit les règles du palier 6 : dat / of + verbe à la fin, imperfectum après zei / vroeg.",
  });

  d.table({
    title: 'Les verbes du procès-verbal', tag: 'WOORDENSCHAT', page: 'Livret p. 16',
    headers: ['INFINITIEF', 'PASSIF (imperfectum)', 'FRANÇAIS'], colW: [3.9, 4.2, 4.03], size: 16,
    rows: [
      ['openen', 'werd geopend', 'ouvrir (la séance)'],
      ['afsluiten (séparable)', 'werd afgesloten', 'clôturer'],
      ['toelichten (séparable)', 'werd toegelicht', 'présenter, expliquer'],
      ['voorstellen (séparable)', 'werd voorgesteld', 'proposer'],
      ['beslissen', 'werd beslist', 'décider'],
      ['goedkeuren (séparable)', 'werd goedgekeurd', 'approuver'],
      ['verwerpen', 'werd verworpen', 'rejeter'],
      ['verplaatsen', 'werd verplaatst', 'déplacer, reporter'],
    ],
    foot: 'Pluriel : //werden// — //De voorstellen werden goedgekeurd.// · Présent : //wordt / worden// — //De bijdrage wordt geïnd.//',
    notes: "Liste ajoutée à partir des verbes du livret (exercice 7 et page 16) pour fournir un répertoire de verbes de PV. Les participes des verbes séparables s’écrivent en un mot (goedgekeurd, afgesloten, toegelicht, voorgesteld). « verwerpen » (rejeter) est un verbe fort : verworpen. Faire dire chaque verbe dans la phrase « De vergadering werd om … uur geopend ».",
  });

  d.traps({
    title: 'Erreurs fréquentes dans un PV', tag: 'PIÈGE', page: 'Hors syllabus',
    intro: 'Quatre fautes typiques — lisez à voix haute et corrigez.',
    rows: [
      ['✗ Werd beslist dat de werken starten.', '✓ **Er** werd beslist dat de werken starten.', 'Sans autre élément en tête, **er** est obligatoire.'],
      ['✗ …dat de werken starten in maart.', '✓ …dat de werken **in maart starten**.', 'Subordonnée : le verbe conjugué part à la **fin**.'],
      ['✗ Mevrouw Peeters zei dat de werken zijn dringend.', '✓ …dat de werken dringend **waren**.', 'Après //zei dat// : verbe **à la fin**, imperfectum.'],
      ['✗ De heer Yilmaz vroeg dat een tweede offerte mogelijk was.', '✓ …vroeg **of** een tweede offerte mogelijk was.', 'Question indirecte : **of** (pas //dat//).'],
    ],
    notes: "Page ajoutée (hors syllabus) pour fixer les quatre erreurs les plus fréquentes des francophones dans un procès-verbal : oubli de « er », verbe mal placé, temps du discours indirect, « of » / « dat ».",
  });

  d.exhibit({
    title: '7 Lezen : de notulen van de vergadering', tag: 'COUCHE 1', page: 'Livret p. 17',
    label: 'DOCUMENT', docTitle: 'Notulen — Algemene vergadering van 22 september (uittreksel)',
    lines: [
      ['Aanwezig', '11 mede-eigenaars (waarvan 2 bij volmacht). De vergadering werd geopend om 19.10 uur.'],
      ['Punt 2', 'Renovatie van de gevel: De heer Vermeulen lichtte de offerte toe (€ 86.500). Mevrouw Peeters zei dat de werken dringend waren. De heer Yilmaz vroeg echter of een tweede offerte mogelijk was. Er werd beslist om de stemming te verplaatsen naar november, zodat een tweede offerte kan worden gevraagd.'],
      ['Punt 4', 'Reservefonds: De verhoging van de bijdrage werd goedgekeurd met 8 stemmen voor, 2 tegen en 1 onthouding. De nieuwe bijdrage wordt vanaf januari geïnd.'],
    ],
    notes: "Compréhension de l’écrit : lecture silencieuse (3 minutes), puis les quatre questions. Le contrôle des chiffres montre la cohérence du document : 8 + 2 + 1 = 11 mede-eigenaars. « zodat een tweede offerte kan worden gevraagd » = passif avec modal (kan + worden + participe en fin).",
  });

  d.exercise({
    title: '7 Lezen : les quatre questions', tag: 'COUCHE 1', page: 'Livret p. 17',
    instr: 'Seul · 7 min, puis par deux.',
    number: false, gap: 4, qGap: 10,
    items: [
      { q: '**1** Quelles décisions ont été prises ? Deux passifs.', a: '**Er werd beslist** om de stemming **te verplaatsen** naar november. · De verhoging van de bijdrage **werd goedgekeurd**.' },
      { q: '**2** Les deux discours indirects du point 2 : qui a dit / demandé quoi ?', a: '**Mevrouw Peeters** zei dat de werken dringend waren. · **De heer Yilmaz** vroeg of een tweede offerte mogelijk was.' },
      { q: '**3** Que signifie « 1 onthouding » ?', a: '**Une abstention** : 8 + 2 + 1 = 11 présents ; une personne n’a voté ni pour ni contre.' },
      { q: '**4** Mevrouw Dubois était absente : sa voix a-t-elle compté ?', a: '**Oui** : « waarvan 2 **bij volmacht** » — elle était représentée par procuration.' },
    ],
    notes: "Question 1 : on peut aussi citer « De nieuwe bijdrage wordt vanaf januari geïnd » (conséquence). Question 2 : « Mevrouw Peeters zei dat… » est une déclaration, « De heer Yilmaz vroeg echter of… » est une question indirecte avec « of ». Question 3 : « zich onthouden » = s’abstenir ; le total des voix (8 + 2 + 1) égale les 11 présents. Question 4 : le texte ne cite pas mevrouw Dubois ; la déduction repose sur « bij volmacht » et sur le dialogue (Yasmina règle sa volmacht, Stef la représente) : dire qu’on suppose que sa procuration fait partie des deux.",
    notesA: "Faire repérer dans le texte « Er werd beslist om… » (infinitif avec om … te) et « werd goedgekeurd met 8 stemmen voor, 2 tegen en 1 onthouding ». Mettre en évidence le lien avec la TAAK 4 : ces phrases seront réutilisées.",
  });

  d.exercise({
    title: 'TAAK 4 : het verslag aan mevrouw Dubois', tag: 'ÉCRIT', page: 'Livret p. 18', mode: 'a',
    instr: 'Écrit · seul · 17 min. Résumez la réunion à votre cliente (10 à 12 phrases, registre formel) à partir des notulen.',
    number: false, gap: 8,
    items: [
      { t: '**Décisions** au passif impersonnel : //Er werd beslist dat…//' },
      { t: '**Positions** au discours indirect : //zei dat · vroeg of//' },
      { t: '**3 connecteurs** : //enerzijds / anderzijds · echter · wat … betreft//' },
      { t: '**Votre recommandation** avec //zou//' },
      { t: 'Structure : **ten eerste → daarna → kortom** · cadre formel' },
    ],
    expect: ['**10 à 12 phrases**', 'Registre **formel**', 'Cadre : //Geachte mevrouw Dubois, … Met vriendelijke groeten//'],
    notes: "Production écrite libre. Passer dans les rangs : vérifier que les verbes sont bien à la fin dans les subordonnées, que « er » est présent en tête de phrase, que les résultats de vote sont corrects (8 voix pour, 2 contre, 1 abstention). Le rapport doit se lire sans le PV sous les yeux : mevrouw Dubois n’était pas là. Modèle sur la diapositive suivante.",
  });

  d.exhibit({
    title: 'TAAK 4 : rapport-modèle', tag: 'ÉCRIT', page: 'Livret p. 18',
    label: 'MODÈLE', docTitle: 'Betreft: verslag van de algemene vergadering van 22 september',
    lines: [
      'Geachte mevrouw Dubois,',
      'Hierbij ontvangt u het verslag van de algemene vergadering van 22 september. U was bij volmacht vertegenwoordigd.',
      'Ten eerste: wat de renovatie van de gevel betreft, lichtte de heer Vermeulen de offerte van € 86.500 toe. Enerzijds zei mevrouw Peeters dat de werken dringend waren, anderzijds vroeg de heer Yilmaz of een tweede offerte mogelijk was. Er werd echter beslist om de stemming te verplaatsen naar november, zodat een tweede offerte kan worden gevraagd.',
      'Daarna werd de verhoging van de bijdrage goedgekeurd met 8 stemmen voor, 2 tegen en 1 onthouding. De nieuwe bijdrage wordt vanaf januari geïnd. Wij zouden u aanraden om uw standpunt over de tweede offerte tijdig voor te bereiden. Kortom: de beslissing over de gevel is uitgesteld, maar de verhoging van de bijdrage is goedgekeurd.',
      'Blijft u vragen hebben, dan kunt u ons altijd bellen. Met vriendelijke groeten, Stef · Immo Van Damme',
    ],
    notes: "Modèle de 11 phrases (sans compter la formule d’appel et de clôture). Passifs impersonnels : Er werd… beslist ; passifs personnels : de verhoging werd goedgekeurd ; discours indirect : zei dat… waren, vroeg of… was ; connecteurs : wat … betreft, enerzijds… anderzijds, echter ; zou : Wij zouden u aanraden… ; structure : Ten eerste → Daarna → Kortom. Particularités : « lichtte … toe » (toelichten, séparable) ; « Blijft u vragen hebben, dan… » = si vous avez encore des questions (inversion conditionnelle).",
  });

  d.exhibit({
    title: 'D4 Wat heb je gemist ? : les notes de Stef', tag: 'ÉCRIT', page: 'Livret p. 18a',
    label: 'NOTITIES', docTitle: 'Buurtcomité · donderdag 20 uur',
    lines: [
      '18 bewoners aanwezig',
      'Speelstraat: 1 tot 31 juli, van 14 tot 20 uur',
      'Stemming: 14 voor, 3 tegen, 1 onthouding',
      'Meneer Willems: bezorgd over parkeren → bewonerskaart voor de Kerkstraat',
      'Voorstel van Sofie (via Nadia): rustig na 20 uur → goedgekeurd',
      'Volgende stap: aanvraag bij de gemeente vóór 15 maart',
      'Vrijwilligers gezocht voor de barbecue',
    ],
    notes: "Jeudi soir, le comité de quartier s’est réuni ; Sofie travaillait et n’a rien vu. Stef a pris des notes. Même information, deux registres : le PV officiel (Er werd beslist dat…) et le message entre voisins (We hebben beslist dat…). Cohérence des chiffres : 14 + 3 + 1 = 18 bewoners.",
  });

  d.table({
    title: 'Deux registres, une même information', tag: 'À RETENIR', page: 'Livret p. 18a',
    headers: ['NOTULEN (formeel)', 'BERICHT AAN EEN BUUR (informeel)'], colW: [6.2, 5.93], size: 18,
    rows: [
      ['Er werd beslist dat…', 'We hebben beslist dat…'],
      ['Er werd voorgesteld om…', 'Karim stelde voor om…'],
      ['Het voorstel werd goedgekeurd met 14 stemmen voor.', 'Bijna iedereen was akkoord (14 tegen 3).'],
      ['De vergadering werd om 21.30 uur afgesloten.', 'We waren rond 21.30 uur klaar.'],
    ],
    foot: 'Formel : passif, noms, pas de « je ». Informel : sujet clair (we, Karim), verbes actifs, ton direct.',
    notes: "Tableau du livret (p. 18a). Dans les notes de Stef, le voorstel est de Sofie (via Nadia) : l’exemple « Karim stelde voor om… » est seulement un modèle de tournure ; dans le message, écrire « Nadia stelde namens jou voor om… » ou « Jouw voorstel… ». « 14 tegen 3 » se lit « 14 voor, 3 tegen ». Faire remarquer que le registre informel emploie le perfectum (we hebben beslist) ou l’imperfectum, pas le passif impersonnel.",
  });

  d.exercise({
    title: 'D4 À vous : notulen et message', tag: 'ÉCRIT', page: 'Livret p. 18a', mode: 'a',
    instr: 'Écrit · seul · 12 min. Même information, deux registres.',
    number: false, gap: 8,
    items: [
      { t: '**1** Deux phrases de **notulen** : un passif impersonnel (//Er werd…//) et un résultat de vote chiffré.' },
      { t: '**2** Le **message de Stef à Sofie** (6 à 8 phrases, informel) : les décisions, la position de meneer Willems au discours indirect (//Meneer Willems zei dat…//), ce qu’on attend d’elle.' },
      { t: 'Autonomie : vous pouvez raconter une vraie réunion (parents, travail, club sportif…).' },
    ],
    expect: ['PV : **formel** et passif', 'Message : **informel** (je / jij)', 'Discours indirect : //zei dat…//'],
    notes: "Production libre : pas de corrigé unique. Passer dans les rangs. Ne pas oublier de faire changer la personne : dans le message, « jij » (Sofie), « we » (le comité). Modèles sur la diapositive suivante.",
  });

  d.compare({
    title: 'D4 Modèles : deux registres', tag: 'ÉCRIT', page: 'Livret p. 18a',
    left: { h: 'NOTULEN (formeel)', color: 'accent2', icon: 'FaFileAlt', items: ['**Er werd beslist** om vóór 15 maart een aanvraag voor de speelstraat in te dienen bij de gemeente.', 'Het voorstel voor de speelstraat (1 tot 31 juli, van 14 tot 20 uur) **werd goedgekeurd** met 14 stemmen voor, 3 tegen en 1 onthouding.', 'Het voorstel van mevrouw Sofie (rust na 20 uur) **werd** eveneens **goedgekeurd**.'] },
    right: { h: 'BERICHT AAN SOFIE (informeel)', color: 'accent3', icon: 'FaEnvelope', items: ['Hoi Sofie, je hebt een gezellige vergadering gemist!', 'We hebben beslist dat de speelstraat er komt: van 1 tot 31 juli, van 14 tot 20 uur. Bijna iedereen was akkoord (14 voor, 3 tegen, 1 onthouding).', 'Meneer Willems zei dat hij bezorgd was over het parkeren; hij krijgt een bewonerskaart voor de Kerkstraat.', 'Jouw voorstel is goedgekeurd: na 20 uur blijft het rustig.', 'Kun jij ons helpen met de aanvraag? Ze moet vóór 15 maart bij de gemeente zijn. En we zoeken nog vrijwilligers voor de barbecue!'] },
    max: 15,
    notes: "Deux modèles corrects. Dans le PV : passifs (Er werd beslist, werd goedgekeurd) et vote chiffré ; dans le message : « we hebben beslist », discours indirect (Meneer Willems zei dat hij bezorgd was), question directe à Sofie. « Een aanvraag indienen » est séparable (in te dienen). Accepter d’autres formulations tant que le registre est cohérent.",
  });

  d.exercise({
    title: 'Du discours direct au procès-verbal', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Écrivez la phrase de PV correspondante. Seul · 5 min.',
    gap: 2, qGap: 8,
    items: [
      { q: 'Mevrouw Peeters : «De werken zijn dringend.»', a: 'Mevrouw Peeters zei dat de werken dringend **waren**.' },
      { q: 'De heer Yilmaz : «Is een tweede offerte mogelijk?»', a: 'De heer Yilmaz vroeg **of** een tweede offerte mogelijk **was**.' },
      { q: 'Beslissing : de stemming gaat naar november.', a: '**Er werd beslist** om de stemming naar november **te verplaatsen**.' },
      { q: 'Voorstel : een tweede offerte vragen.', a: '**Er werd voorgesteld** om een tweede offerte **te vragen**.' },
      { q: 'De vergadering keurt de verhoging goed (8 tegen 3).', a: 'De verhoging **werd goedgekeurd** met 8 stemmen tegen 3.' },
      { q: 'De syndicus sluit de vergadering om 21.00 uur af.', a: 'De vergadering **werd** om 21.00 uur **afgesloten**.' },
    ],
    traps: ['Indirect : verbe conjugué **à la fin**.', '**zei dat / vroeg of** + imperfectum.', '**Er werd** + participe · pluriel : //Er werden…//'],
    notes: "Exercice ajouté (5 minutes) : récapitulatif de la séquence. Phrase 3 et 4 : « om … te + infinitif », les séparables prennent « te » entre la particule et le verbe (in te dienen, voor te stellen). Phrase 6 : le sujet de la phrase active (de syndicus) disparaît dans le passif.",
    notesA: "Faire lire chaque phrase en insistant sur le participe placé à la fin. Rappeler : zei dat + imperfectum (waren), vroeg of + imperfectum (was).",
  });

  d.closing({
    cliff: 'Séance 15 : **concéder pour mieux réfuter**. //Weliswaar… maar, toch, hoewel// — le **minidébat** (TAAK 5), puis la grande **TAAK 6** : une assemblée générale complète.',
    homework: ['Terminer la **TAAK 4** : le rapport à mevrouw Dubois (10 à 12 phrases).', 'Apprendre les **verbes du PV** (openen, afsluiten, toelichten, voorstellen, beslissen, goedkeuren…).', 'Terminer le **message à Sofie** (D4) ou raconter une vraie réunion.'],
    exit: 'Transformez en phrase de PV : **Yilmaz : « Is een tweede offerte mogelijk? »**',
    notes: "Réponse attendue : « De heer Yilmaz vroeg of een tweede offerte mogelijk was. » Vérifier « of » et le verbe en fin de phrase.",
  });
};
