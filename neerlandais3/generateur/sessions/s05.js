// Séance 5 — Palier 5 : séquence 5.5 (Onderhandelen) + 5.6 TAAK 6 (Van opdracht tot verkoop) — Livret p. 19–22a
exports.meta = {
  n: 5, slug: 'Onderhandelen_Taak_6', title: 'Onderhandelen en eindtaak',
  subtitle: 'L’ordre des mots, niveau supérieur — et le dossier complet (TAAK 6)',
  pages: 'Livret p. 19–22a', img: 'p5_25_11', time: '5.5–5.6', sceneLabel: 'SÉQUENCE',
  block: 'Palier 5 · Van opdracht tot verkoop',
  coverNotes: "Séance de clôture du palier 5. Objectifs : maîtriser les trois cas de l’ordre des mots sous pression (deux verbes à la fin, particules qui se ressoudent, inversion après la subordonnée), réécrire un mauvais zoekertje, négocier (TAAK 5, D5), puis lancer la TAAK 6 : un dossier complet de la rentrée du mandat à la stratégie de vente. Les étapes 2 (teamvergadering) et 3 (verslag) peuvent se jouer en début de séance suivante ou à la maison selon le temps.",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Enchaîner **deux verbes à la fin, particules et inversion**, **négocier** un prix en phrases complexes et **assembler un dossier complet** (TAAK 6).',
    language: '//Hoewel ik uw punt begrijp,… · We kunnen erover praten, tenzij… · Laten we het verschil delen · Afgesproken!//',
    skills: 'Transformer en subordonnée · réécrire une annonce · négocier à l’oral · préparer et présenter un dossier · rédiger un compte rendu',
    agenda: [['Rappel de la séance 4', 5], ['5.5 · trois cas de l’ordre des mots', 10], ['10 Zet om naar een bijzin', 10], ['11 Herschrijf het slechte zoekertje', 10], ['TAAK 5 · De onderhandeling', 15], ['D5 · Afdingen', 10], ['TAAK 6 · présentation et étape 1', 25], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. La séance couvre les pages 19 à 22a du livret. La TAAK 6 complète dure environ 55 minutes (étape 1 : 25 min ; étape 2 : présentation à deux voix et questions ; étape 3 : verslag 15 min) : lancer l’étape 1 ici ; l’étape 2 peut occuper le début de la séance suivante, et le verslag peut se faire à la maison. La TAAK 6 « variante vie courante » remplace le bien immobilier par un objet à vendre.",
  });

  d.exercise({
    title: 'Échauffement : les six conjonctions', tag: 'ÉCHAUFFEMENT', page: 'Hors syllabus',
    instr: 'Oral · par deux · 4 min. Complétez avec **aangezien · zodat · zodra · tenzij · toen · sinds**, puis relisez la phrase à voix haute.',
    gap: 8,
    items: [
      'We plaatsen extra foto’s, [[zodat]] de kopers alles zien.',
      '[[Zodra]] de fotograaf klaar is, zet ik de advertentie online.',
      'De bezichtiging gaat door, [[tenzij]] het regent.',
      '[[Toen]] ik gisteren de woning bezocht, was ze al verkocht.',
      '[[Sinds]] de prijs lager is, bellen er meer klanten.',
    ],
    traps: ['Subordonnée **en tête** → la principale commence par le **verbe** : //bel ik · was ze · bellen er//.', 'Le verbe conjugué est **à la fin** de la subordonnée.'],
    notes: "Rappel de la séance 4 avec des phrases nouvelles. Item 4 : toen = passé unique (« gisteren »). Item 5 : « bellen er meer klanten » : er est ici le « er » d’existence (pas un adverbe pronominal). Accepter aussi « Als » à l’item 2 uniquement si l’étudiant précise qu’il perd le sens « dès que ».",
  });

  d.cards({
    title: 'Séquence 5.5 : trois cas à maîtriser', tag: 'GRAMMATICA', page: 'Livret p. 19', perRow: 3,
    cards: [
      { h: '① DEUX VERBES À LA FIN', color: 'accent2', f: 'moet voorbereiden', lines: ['//Ik heb geen tijd, omdat ik het dossier **moet voorbereiden**.//', 'Le verbe **conjugué** précède l’infinitif.', 'Perfectum : //…dat we de woning **verkocht hebben**.//'] },
      { h: '② LA PARTICULE SE RESSOUDE', color: 'accent3', f: 'uit + brengt', lines: ['//De koper **brengt** een bod **uit**.//', '//Zodra de koper een bod **uitbrengt**, bel ik u **op**.//', 'Principale : particule **à la fin** ; subordonnée : **soudée**.'] },
      { h: '③ INVERSION APRÈS LA SUBORDONNÉE', color: 'accent4', f: 'Zodra… , bel ik', lines: ['//**Zodra** het bod binnen is, **bel ik** u op.//', '//**Hoewel** de eigenaar aan de prijs wil vasthouden, **zoeken we** een compromis.//', 'La subordonnée en tête = **un seul élément** : le verbe suit.'] },
    ],
    foot: { kind: 'trap', text: 'En français, l’ordre ne change pas. En néerlandais : ✗ //omdat ik moet het dossier voorbereiden// · ✗ //zodra ik bel u op// · ✗ //Zodra het bod binnen is, ik bel u op//.' },
    notes: "Trois cas du livret p. 19 : (1) deux verbes en subordonnée (modal + infinitif, auxiliaire + participe), (2) particules séparables qui se ressoudent (opbellen → ik bel op / zodra ik opbel ; uitbrengen → hij brengt uit / zodra hij uitbrengt), (3) inversion dans la principale après une subordonnée en tête. En négociation, ces trois cas se combinent dans la même phrase : c’est là que l’ordre des mots casse sous la pression.",
  });

  d.blocks({
    title: 'Les trois cas en blocs de couleur', tag: 'GRAMMATICA', page: 'Livret p. 19',
    intro: 'Le **verbe conjugué** (rouge) et les **verbes en fin** (orange) : suivez-les d’un cas à l’autre.',
    rows: [
      { label: 'Deux verbes', cells: [{ t: 'Ik', role: 'S' }, { t: 'heb', role: 'V' }, { t: 'geen tijd,', role: 'O' }, { t: 'omdat', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'het dossier', role: 'O' }, { t: 'moet', role: 'V' }, { t: 'voorbereiden', role: 'F' }] },
      { label: 'Perfectum', cells: [{ t: 'Nadat', role: 'C' }, { t: 'we', role: 'S' }, { t: 'de woning', role: 'O' }, { t: 'verkocht', role: 'F' }, { t: 'hebben,', role: 'V' }, { t: 'vieren', role: 'V', lab: 'inversion' }, { t: 'we', role: 'S' }, { t: 'dat', role: 'O' }] },
      { label: 'Particule', cells: [{ t: 'Zodra', role: 'C' }, { t: 'de koper', role: 'S' }, { t: 'een bod', role: 'O' }, { t: 'uitbrengt,', role: 'F', lab: 'soudé' }, { t: 'bel', role: 'V', lab: 'inversion' }, { t: 'ik', role: 'S' }, { t: 'u', role: 'O' }, { t: 'op', role: 'F', lab: 'séparé' }] },
      { label: 'Concession', cells: [{ t: 'Hoewel', role: 'C' }, { t: 'de eigenaar', role: 'S' }, { t: 'aan de prijs', role: 'P' }, { t: 'wil', role: 'V' }, { t: 'vasthouden,', role: 'F' }, { t: 'zoeken', role: 'V', lab: 'inversion' }, { t: 'we', role: 'S' }, { t: 'een compromis', role: 'O' }] },
    ],
    notes: "Lecture des blocs de gauche à droite : après la virgule, la principale reprend avec le verbe (inversion). Les mêmes phrases serviront de corrigé aux items 1 à 4 de l’exercice 10. Pour « Nadat we de woning verkocht hebben », l’ordre « hebben verkocht » est également correct.",
  });

  d.exercise({
    title: '10 Zet om naar een bijzin', tag: 'COUCHE 2', page: 'Livret p. 19',
    instr: 'Couche 2 · seul·e · 8 min. Transformez en **subordonnée** avec la conjonction indiquée : tous les verbes à la fin, **les particules se ressoudent**.',
    gap: 6, qGap: 12,
    items: [
      { q: 'Ik moet het dossier voorbereiden. (omdat) → Ik heb geen tijd…', a: 'Ik heb geen tijd, **omdat ik het dossier moet voorbereiden**.' },
      { q: 'De koper brengt een bod uit. (zodra) → …, bel ik u op.', a: '**Zodra de koper een bod uitbrengt**, bel ik u op.' },
      { q: 'Wij hebben de woning verkocht. (nadat) → Nadat…', a: '**Nadat we de woning verkocht hebben**, vieren we dat met de eigenaar.' },
      { q: 'De eigenaar wil aan de prijs vasthouden. (hoewel) → …, zoeken we een compromis.', a: '**Hoewel de eigenaar aan de prijs wil vasthouden**, zoeken we een compromis.' },
    ],
    notes: "Coquille du livret : à l’item 3, le début imprimé « Nadat we ons nieuwe huis mochten intrekken, … » ne correspond pas à la phrase à transformer (« Wij hebben de woning verkocht ») : le corrigé ci-dessus part de la phrase donnée (Nadat we de woning verkocht hebben, …). Si un étudiant complète la phrase imprimée telle quelle, accepter toute suite correcte (Nadat we ons nieuwe huis mochten intrekken, hebben we een feestje gegeven). Item 2 : « opbellen » est séparable (bel … op) ; « uitbrengen » se ressoude dans la subordonnée (uitbrengt). Item 4 : « vasthouden aan » : wil vasthouden (modal + infinitif).",
  });

  d.exhibit({
    title: '11 Herschrijf het slechte zoekertje', tag: 'COUCHE 2', page: 'Livret p. 19–20',
    label: 'VOOR', docTitle: 'Une annonce « à la manière du palier 1 »',
    lines: ['Wij verkopen een appartement. Het appartement is in Elsene. Het heeft twee slaapkamers. De badkamer is nieuw. Er is een terras. Het terras is 8 m². De prijs is interessant. U kunt de woning bezichtigen. U belt ons. Wij plannen een afspraak.'],
    side: { img: 'p5_25_11', label: 'À VOUS', color: 'accent1', icon: 'FaPenNib', lines: ['Écrit · seul·e · 10 min', '**5 à 6 phrases** : **2 relatives**, **1 adverbe pronominal**, **2 subordonnées**, **1 connecteur**.'] },
    notes: "L’exercice-miroir de votre progression : voici une annonce « palier 1 » (phrases simples juxtaposées). Les étudiants la réécrivent en une annonce professionnelle de 5 à 6 phrases avec au moins deux relatives, un adverbe pronominal, deux subordonnées et un connecteur. Modèle sur la diapositive suivante.",
  });

  d.exhibit({
    title: '11 Herschrijf — Une annonce professionnelle (modèle)', tag: 'COUCHE 2', page: 'Livret p. 20',
    label: 'NA', docTitle: 'Zoekertje — appartement Elsene',
    lines: [
      '**TE KOOP — Elsene**',
      'Wij verkopen een appartement dat twee slaapkamers en een nieuwe badkamer heeft. Bovendien beschikt het over een terras van 8 m² waarop u ’s avonds van de zon kunt genieten. Aangezien de prijs interessant is, raden wij u aan om snel te reageren. U kunt de woning bezichtigen: zodra u ons belt, plannen wij daarvoor een afspraak in. Kortom: een kans die u niet mag missen.',
    ],
    side: { label: 'LES OUTILS RÉEMPLOYÉS', color: 'accent3', icon: 'FaCheck', lines: ['Relatives : **dat** … heeft · **waarop** … kunt genieten', 'Adverbe pronominal : **daarvoor**', 'Subordonnées : **aangezien** · **zodra**', 'Connecteurs : **bovendien** · **kortom**'] },
    notes: "Modèle indicatif (5 phrases + titre). Relatives : « een appartement dat … heeft » et « een terras waarop u … kunt genieten » (waar + op). Adverbe pronominal : « daarvoor » (= voor de bezichtiging). Subordonnées : aangezien…, zodra…. Connecteurs : bovendien, kortom. Accepter toute version correcte : le point de contrôle est le verbe en fin de subordonnée et l’inversion dans la principale (raden wij u aan, plannen wij… in).",
  });

  d.compare({
    title: 'TAAK 5 — De onderhandeling : les deux rôles', tag: 'ORAL', page: 'Livret p. 20',
    intro: 'Deux rondes de **6 min**, rôles inversés. Chacun reçoit sa **carte d’objectif secret** : ne la montrez pas !',
    left: { h: 'ROL A — De makelaar', color: 'accent1', icon: 'FaUserTie', items: ['Vous défendez le prix du rijhuis (**€ 425.000**) pour votre client-propriétaire', 'Une **concession** : «Hoewel ik uw punt begrijp,…»', 'Une **condition** : «We kunnen erover praten, tenzij / als…»', 'Une chaîne **omdat… zodat…**'] },
    right: { h: 'ROL B — De koper', color: 'accent2', icon: 'FaUser', items: ['Vous voulez acheter, mais **moins cher**', 'Ouvrez par votre **offre** et justifiez-la : «Aangezien de badkamer…»', 'Posez une question avec **waar + préposition**'] },
    mid: 'A/B',
    foot: { kind: 'tip', label: 'Grille de l’observateur', text: 'subordonnées correctes · connecteurs · gestion de la concession.' },
    notes: "Taak 5 : le sommet oral du palier. Deux rondes de 6 minutes ; rôles inversés à la seconde. Chaque étudiant pioche une carte d’objectif secret (diapositive suivante). L’observateur note : subordonnées correctes, connecteurs, gestion de la concession. Imposer les structures du livret : concession, condition, chaîne omdat… zodat…",
  });

  d.table({
    title: 'TAAK 5 — Les objectifs secrets', tag: 'ORAL', page: 'Livret p. 20',
    intro: 'Piochez une carte **① ② ou ③** : ne la montrez pas à votre partenaire.',
    headers: ['', 'ROL A — De makelaar', 'ROL B — De koper'],
    colW: [0.7, 5.8, 5.63], align: ['center', 'left', 'left'], boldCol: 0,
    rows: [
      ['①', 'Le propriétaire accepte **€ 410.000 minimum**', 'Votre budget réel est **€ 415.000**'],
      ['②', 'Il est pressé : la vente doit être signée **ce mois-ci**', 'La banque exige **trois semaines**'],
      ['③', 'Un **autre acheteur** potentiel existe (bluff autorisé !)', 'Vous **adorez** le bien mais ne le montrez pas'],
    ],
    notes: "Cartes d’objectif secret du livret. Pour le professeur : A① et B① se rejoignent entre € 410.000 et € 415.000 (un accord est possible) ; B② (trois semaines de banque) rejoint le thème de la mail de meneer Peeters (séance 4) ; A③ est un bluff autorisé. Ne pas dévoiler les cartes avant la fin des deux rondes.",
  });

  d.table({
    title: 'Boîte à outils : Zo onderhandel je', tag: 'WOORDENSCHAT', page: 'Hors syllabus',
    headers: ['NEDERLANDS', 'FRANÇAIS'],
    colW: [6.8, 5.33],
    rows: [
      ['Aangezien ik een lening nodig heb, bied ik € 395.000.', 'Comme j’ai besoin d’un prêt, j’offre 395 000 €.'],
      ['Hoewel ik uw punt begrijp, is dat te laag.', 'Bien que je comprenne votre point de vue, c’est trop bas.'],
      ['We kunnen erover praten, als u vandaag nog tekent.', 'On peut en discuter, si vous signez aujourd’hui.'],
      ['Waarop baseert de eigenaar zijn prijs?', 'Sur quoi le propriétaire base-t-il son prix ?'],
      ['Het is een instapklare woning, omdat alles vernieuwd is, zodat u niets meer hoeft te doen.', 'C’est un bien prêt à emménager, parce que tout est rénové, de sorte que vous n’avez plus rien à faire.'],
      ['Akkoord, op voorwaarde dat de bank de lening goedkeurt.', 'D’accord, à condition que la banque accorde le prêt.'],
    ],
    foot: 'Piège : après //Aangezien…,// et //Hoewel…,// la principale commence par le **verbe** : //bied ik · is dat//. Particule : //goedkeurt// (soudée en subordonnée).',
    notes: "Phrases utiles pour la TAAK 5. Faire repérer la concession (Hoewel), la condition (als), la chaîne (omdat… zodat…), la question avec waar + préposition (Waarop…) et l’accord conditionnel (op voorwaarde dat). « Goedkeuren » est séparable : de bank keurt de lening goed / dat de bank de lening goedkeurt. Cette diapositive est un ajout hors syllabus.",
  });

  d.dialogue({
    title: 'TAAK 5 — Une négociation réussie (modèle)', tag: 'DIALOOG', page: 'Hors syllabus', max: 17,
    colors: { MAKELAAR: 'accent1', KOPER: 'accent2' },
    lines: [
      ['KOPER', '«Aangezien ik een lening nodig heb, bied ik € 395.000 voor het rijhuis.»', '1'],
      ['MAKELAAR', '«Hoewel ik uw punt begrijp, is dat te laag: het huis is volledig gerenoveerd.»', '2'],
      ['KOPER', '«Waarop baseert de eigenaar zijn prijs van € 425.000?»', '3'],
      ['MAKELAAR', '«Het is een instapklare woning, omdat de eigenaar alles heeft vernieuwd, zodat u niets meer hoeft te doen.»', '4'],
      ['KOPER', '«Dan bied ik € 405.000. Als de eigenaar akkoord gaat, teken ik vandaag.»', '5'],
      ['MAKELAAR', '«We kunnen erover praten, tenzij een andere koper een hoger bod uitbrengt. Er is al een tweede kandidaat.»', '6'],
      ['KOPER', '«Mijn bank heeft drie weken nodig, maar ik kan € 415.000 bieden.»', '7'],
      ['MAKELAAR', '«Dat is dichtbij. Zullen we afspreken op € 415.000?»', '8'],
      ['KOPER', '«Akkoord, op voorwaarde dat de bank de lening goedkeurt.»', '9'],
      ['MAKELAAR', '«Afgesproken! Zodra uw bank antwoordt, tekenen we het compromis.»', '10'],
    ],
    notes: "Modèle indicatif (ajout hors syllabus) : A avec l’objectif ① (€ 410.000 minimum) et ③ (bluff : « Er is al een tweede kandidaat »), B avec ① (budget réel € 415.000) et ② (trois semaines de banque). Structures imposées retrouvées : concession (Hoewel…), condition (Als… / tenzij…), chaîne omdat… zodat…, question avec waar + préposition (Waarop…), aangezien. Les étudiants jouent leur propre version avec leur carte.",
  });

  d.table({
    title: 'D5 — Zo zeg je dat : afdingen', tag: 'WOORDENSCHAT', page: 'Livret p. 20a',
    headers: ['NEDERLANDS', 'FRANÇAIS'],
    colW: [6.3, 5.83],
    rows: [
      ['Wat is uw laatste prijs?', 'Quel est votre dernier prix ?'],
      ['Kan het iets goedkoper?', 'Ça peut être un peu moins cher ?'],
      ['Ik geef u er 150 euro voor.', 'Je vous en donne 150 euros.'],
      ['Laten we het verschil delen.', 'Coupons la poire en deux.'],
      ['Dat is een koopje! / voor een prikje', 'C’est une affaire ! / pour une bouchée de pain'],
      ['Afgesproken! / Akkoord!', 'Marché conclu ! (//akkoord// : très belge)'],
    ],
    foot: 'Placez les **trois cas du palier** : deux verbes à la fin, particule ressoudée, inversion après une subordonnée.',
    notes: "La négociation de la TAAK 5, version samedi matin : pas d’agence, pas de compromis, un vendeur, un acheteur, un objet. Faire répéter le tableau. « Een prikje » : voor een prikje = pour pas cher. « Het verschil delen » : couper la poire en deux (littéralement : partager la différence).",
  });

  d.compare({
    title: 'D5 Dagelijks leven — Afdingen : les rôles', tag: 'ORAL', page: 'Livret p. 20a',
    intro: 'Deux rondes de **4 min**, rôles inversés. Objets au choix : ① le **vélo de Stef** (annonce A, € 180) · ② une **lampe vintage** au Vossenplein (€ 45) · ③ un **smartphone** d’occasion (€ 220).',
    left: { h: 'ROL A — De verkoper', color: 'accent1', icon: 'FaUserTie', items: ['Défendez votre prix : bon état, d’autres acheteurs…', '**Inversion** : «Als u vandaag betaalt, krijgt u het slot erbij.»', '**Concession** : «Hoewel de fiets niet nieuw is,…»', 'Secret : ① pas sous € 160 · ② vous déménagez demain · ③ bluff « un autre acheteur à 15 h »'] },
    right: { h: 'ROL B — De koper', color: 'accent2', icon: 'FaUser', items: ['Trouvez un **défaut**, proposez un prix', 'Justifiez avec **deux verbes à la fin** : «…omdat ik ook nog een helm moet kopen.»', 'Secret : ① budget réel € 160 · ② le feu arrière ne marche pas · ③ vous adorez la couleur'] },
    mid: 'A/B',
    foot: { kind: 'tip', label: 'Grille de l’observateur', text: 'phrases complexes réussies (inversion, concession, deux verbes à la fin).' },
    notes: "D5 : mêmes structures que la TAAK 5, avec un objet de la vie courante. Cartes d’objectif secret du livret : vendeur ① pas en dessous de € 160, ② déménage demain (il faut vendre aujourd’hui), ③ « un autre acheteur passe à 15 heures » (bluff autorisé) ; acheteur ① budget réel € 160, ② le feu arrière ne fonctionne pas, ③ adore la couleur mais ne le montre pas. « Vossenplein » = place du Jeu de Balle (Bruxelles).",
  });

  d.dialogue({
    title: 'D5 — Afdingen : le vélo de Stef (modèle)', tag: '+ BONUS', page: 'Hors syllabus', max: 18,
    colors: { VERKOPER: 'accent1' },
    lines: [
      ['STEF', '«Goedemiddag! Is de stadsfiets nog beschikbaar?»', '1'],
      ['VERKOPER', '«Ja, hij is nog te koop. De fiets is in goede staat en er zijn al andere kandidaten.»', '2'],
      ['STEF', '«Wat is uw laatste prijs?»', '3'],
      ['VERKOPER', '«€ 180. Hoewel de fiets niet nieuw is, rijdt hij perfect.»', '4'],
      ['STEF', '«Het achterlicht werkt niet. Kan het iets goedkoper? Ik geef u er 150 euro voor.»', '5'],
      ['VERKOPER', '«Als u vandaag betaalt, krijgt u het slot erbij. Onder € 160 ga ik niet.»', '6'],
      ['STEF', '«Ik kan € 160 geven, omdat ik ook nog een helm moet kopen.»', '7'],
      ['VERKOPER', '«Laten we het verschil delen: € 165, en het slot zit erbij.»', '8'],
      ['STEF', '«Afgesproken! Dat is een koopje.»', '9'],
    ],
    notes: "Ajout hors syllabus : dialogue modèle pour la D5, qui réutilise les phrases du tableau (Wat is uw laatste prijs? Kan het iets goedkoper? Ik geef u er … voor. Laten we het verschil delen. Afgesproken!). Structures du palier : concession (Hoewel…), inversion après une subordonnée (Als u vandaag betaalt, krijgt u…), deux verbes à la fin (omdat ik ook nog een helm moet kopen). Remarque : « Onder € 160 ga ik niet » (inversion avec un groupe de prix en tête).",
  });

  d.steps({
    title: 'TAAK 6 — Van opdracht tot verkoop : les trois étapes', tag: 'SYNTHÈSE', page: 'Livret p. 21–22',
    intro: 'Accueillir (1), rédiger (2), faire visiter (3), conditionner (4), négocier (5) : **il reste à assembler**.',
    steps: [
      { h: 'Het dossier samenstellen', n: '1', color: 'accent2', lines: ['**25 min · binôme**', 'Un bien : fiche technique, **annonce** (TAAK 2), **plan de vente**.', '**Fait** (perfectum) · **à venir** (futur) · **conditions** (zodra, tenzij, als).', 'Mots-clés seulement.'] },
      { h: 'De teamvergadering', n: '2', color: 'accent1', lines: ['Présentation **à deux voix** devant un autre binôme (le gérant et collègue).', 'Bien · annonce · stratégie · conditions.', '**3 questions critiques**, réponses improvisées. Puis on **inverse**.'] },
      { h: 'Het verslag', n: '3', color: 'accent3', lines: ['**15 min · individuel**', 'Compte rendu pour la direction : **8 à 10 phrases**, registre **formel**.', '**Ten eerste** (le dossier) → **daarna** (questions, réponses) → **kortom** (décision, suite).'] },
    ],
    foot: { kind: 'keep', label: 'Six tâches, six preuves', text: 'ce verslag clôt votre dossier personnel de palier.' },
    notes: "Séquence 5.6 = TAAK 6 : mission finale. Étape 1 (25 min) : lancer en séance ; étape 2 : chaque binôme présente à un autre binôme ; étape 3 : verslag individuel (15 min) — à terminer à la maison si besoin. Le bien est libre (appartement, rijhuis, villa…).",
  });

  d.table({
    title: 'TAAK 6 — La checklist de réemploi', tag: 'SYNTHÈSE', page: 'Livret p. 21',
    intro: 'Cochez **pendant la préparation** : chaque ligne doit vivre dans votre présentation.',
    headers: ['RÉEMPLOI', 'MINIMUM', '✓'],
    colW: [8.7, 1.9, 1.53], align: ['left', 'center', 'center'],
    rows: [
      ['Relatives (die / dat / met wie / waaraan…)', '3', '☐'],
      ['Adverbes pronominaux (eraan, erop, daarover…)', '2', '☐'],
      ['Subordonnées variées (aangezien, zodra, tenzij, hoewel, toen…)', '4', '☐'],
      ['Connecteurs (ten eerste, bovendien, daarom, kortom…)', '3', '☐'],
      ['Lexique du métier (mindmap 5.1 + abréviations des zoekertjes)', '12', '☐'],
      ['Perfectum (ce qui a déjà été fait dans le dossier)', '3', '☐'],
    ],
    notes: "Checklist du livret p. 21 : les minima sont des seuils, pas des plafonds. Circuler pendant les 25 minutes de préparation : faire souligner dans leurs notes les relatives et les subordonnées, vérifier le perfectum (ce qui a déjà été fait : de opdracht is getekend, de advertentie is geschreven…).",
  });

  d.exercise({
    title: 'TAAK 6 étape 2 — Trois questions critiques', tag: 'ORAL', page: 'Livret p. 22', mode: 'a',
    instr: 'L’équipe pose **au moins 3 questions critiques** ; vous répondez en **improvisant**. Exemples de réponses correctes :',
    number: false, gap: 6, qGap: 10,
    items: [
      { q: '«Waarom die prijs?»', a: '//Aangezien de woning volledig gerenoveerd is en vlak bij het station ligt, vragen wij € 425.000.//' },
      { q: '«Waarmee gaat u de kopers overtuigen?»', a: '//Wij overtuigen hen met goede foto’s, met een stadstuin die op het zuiden ligt en met een eerlijke prijs.//' },
      { q: '«Wat doet u als de bank weigert?»', a: '//Als de bank de lening weigert, zoeken wij meteen een andere koper, zodat de verkoop niet te lang duurt.//' },
    ],
    notes: "Étape 2 : présenter le dossier à deux voix devant un autre binôme, qui joue le gérant et collègue ; puis inverser les rôles. Les réponses ci-dessus sont des modèles : les étudiants répondent avec les données de leur propre dossier. Critères : subordonnées correctes, relatives, un adverbe pronominal (waarmee, erover…), connecteurs. Question 2 : waar + mee → waarmee ; l’infinitif « overtuigen » est à la fin.",
  });

  d.exhibit({
    title: 'TAAK 6 étape 3 — Het verslag (modèle)', tag: 'ÉCRIT', page: 'Livret p. 22',
    label: 'MODÈLE', docTitle: 'Verslag — teamvergadering (rijhuis Sint-Gillis)',
    lines: [
      '**Ten eerste** hebben Yasmina en Stef het dossier van het rijhuis in Sint-Gillis voorgesteld. Het gaat om een woning die in 2025 volledig gerenoveerd werd en waarvoor de eigenaar € 425.000 vraagt. De advertentie wordt online gezet zodra de foto’s binnen zijn.',
      '**Daarna** heeft het team drie kritische vragen gesteld. Over de prijs hebben Yasmina en Stef uitgelegd dat de woning instapklaar is. De kopers worden overtuigd met goede foto’s en met een stadstuin die op het zuiden ligt. Als de bank de lening weigert, zoeken zij meteen een andere koper.',
      '**Kortom**: het dossier is volledig en de prijs is goed verdedigd. De volgende stap is de eerste bezichtiging, tenzij de eigenaar nog een tweede bod wil afwachten. De directie beslist vrijdag.',
    ],
    notes: "Modèle de verslag de 10 phrases, registre formel (troisième personne), structure imposée : Ten eerste (le dossier présenté) → Daarna (les questions et les réponses) → Kortom (la décision et la prochaine étape). Il contient : une relative avec préposition (waarvoor), trois subordonnées (zodra, dat, als / tenzij), un passif (wordt gezet, worden overtuigd), le perfectum. Les productions des étudiants : 8 à 10 phrases. Ce verslag clôt le dossier personnel : six tâches, six preuves.",
  });

  d.cards({
    title: 'Variante Dagelijks leven — Van advertentie tot verkoop', tag: 'SYNTHÈSE', page: 'Livret p. 22a', perRow: 3,
    cards: [
      { h: '① HET DOSSIER', color: 'accent2', f: 'un objet à vendre', lines: ['Vélo, meuble, appareil…', 'L’**annonce** (méthode D2)', 'Les **messages** avec l’acheteur (D4)', 'Votre **prix plancher** et vos arguments (D5)'] },
      { h: '② HET GESPREK', color: 'accent1', f: 'à deux voix', lines: ['Vous racontez **la vente** devant un binôme d’amis curieux.', '//Waarom die prijs? · Waarover hebben jullie onderhandeld? · Wat doe je als de koper niet komt opdagen?//'] },
      { h: '③ HET BERICHTJE', color: 'accent3', f: '8 à 10 phrases', lines: ['Message à un **ami**, registre **informel**.', 'Il raconte la vente.', '**Ten eerste → daarna → kortom**'] },
    ],
    foot: { kind: 'keep', label: 'Checklist', text: 'identique, sauf « Lexique du métier » → « Lexique du quotidien (activités D1 à D5) » : minimum 12.' },
    notes: "Pour les étudiants qui préfèrent un dossier de la vie courante : même déroulé, mêmes exigences, avec un objet plutôt qu’un bien immobilier. Les trois questions critiques de l’étape 2 changent : Waarom die prijs ? Waarover hebben jullie onderhandeld ? Wat doe je als de koper niet komt opdagen ? Le berichtje final est écrit en registre informel (jij), à un ami.",
  });

  d.closing({
    cliff: 'Palier 6 : **Verhuur & beheer** — on passe de la **vente** à la **location** et à la **gestion** d’un bien.',
    homework: ['Terminer la **TAAK 6** : étape 1 (dossier) avec la checklist complète.', 'Rédiger le **verslag** (8 à 10 phrases, registre formel) s’il n’est pas terminé.', 'Terminer la **D5** : négocier avec un autre objet.', 'Relire les **six preuves** : TAAK 1 à 5 corrigées.'],
    exit: 'Écrivez **une phrase avec deux verbes à la fin** et **une phrase avec une particule ressoudée** (//…zodra ik u opbel//).',
    notes: "Ticket de sortie à l’oral ou sur papier : p. ex. « Ik heb geen tijd, omdat ik het dossier moet voorbereiden » et « Zodra het bod binnen is, bel ik u op / zodra ik u opbel ». Annoncer le palier 6 : Verhuur & beheer (location et gestion).",
  });
};
