// Séance 2 — Palier 5 : séquence 5.2 (De woning beschrijven — die et dat) — Livret p. 7–10a
exports.meta = {
  n: 2, slug: 'De_woning_beschrijven', title: 'De woning beschrijven',
  subtitle: 'Les pronoms relatifs die et dat — le moteur de l’annonce immobilière',
  pages: 'Livret p. 7–10a', img: 'p5_09_4', time: '5.2', sceneLabel: 'SÉQUENCE',
  block: 'Palier 5 · Van opdracht tot verkoop',
  coverNotes: "Séance centrée sur les relatives die / dat. Objectifs : choisir die ou dat d’après l’article (de/pluriel → die ; het singulier → dat), placer le verbe à la fin, lire trois zoekertjes comme un professionnel, fusionner deux phrases, rédiger une annonce (TAAK 2), puis transférer la technique aux annonces 2dehands (D2).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Décrire un bien avec **die / dat**, lire des annonces comme un professionnel et **rédiger un zoekertje** (60 à 80 mots).',
    language: '//de woning die… · het appartement dat… · de klanten die… · slpk. · EPC · instapklaar · ophalen//',
    skills: 'Lire des annonces · choisir die ou dat · fusionner deux phrases · placer le verbe à la fin · écrire une annonce',
    agenda: [['Rappel de la séance 1', 5], ['5.2 · pourquoi les relatives ?', 10], ['Die ou dat · verbe à la fin', 10], ['4 Drie zoekertjes onder de loep', 20], ['5 Van fiche naar zin', 10], ['TAAK 2 · Schrijf het zoekertje', 15], ['D2 · Drie advertenties op 2dehands', 15], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. La séance couvre les pages 7 à 10a du livret. Les relatives sont le cœur de l’annonce immobilière : insister sur la règle (article du mot) et sur la position du verbe. La TAAK 2 peut être terminée à la maison si le temps manque ; la fiche D2 (question 4) aussi.",
  });

  d.exercise({
    title: 'Échauffement : rappel du lexique du métier', tag: 'ÉCHAUFFEMENT', page: 'Hors syllabus',
    instr: 'Oral · par deux · 4 min. Complétez ; pour chaque phrase, dites **de ou het** devant le nom souligné.',
    gap: 10,
    items: [
      'Wilt u [[huren]] of kopen?',
      'We hebben de opdracht [[getekend]] met de eigenaar.',
      'De eigenaar [[verhuurt]] zijn appartement aan een student.',
      'Het appartement ligt op de derde [[verdieping]].',
      'Ik [[breng]] morgen een bod [[uit]].',
    ],
    traps: ['**Qui loue à qui ?** //huren// ≠ //verhuren//.', '//uitbrengen// est séparable : //ik breng… uit//.', '//de opdracht// · //het appartement// · //de verdieping// : retenez l’article, il sert à choisir **die / dat** aujourd’hui.'],
    notes: "Rappel de la séance 1 (collocations et faux-amis). Faire dire l’article de chaque nom : het appartement, de opdracht, de eigenaar, de verdieping, het bod. Réponses attendues : huren, getekend, verhuurt, verdieping, breng … uit.",
  });

  d.scene({
    title: 'Séquence 5.2 : décrire le bien', tag: 'FOCUS', page: 'Livret p. 7', img: 'p5_09_4', time: '5.2', sceneLabel: 'SÉQUENCE',
    text: ['**Focus : lignes 1, 3 et 5**', '«Jij bent toch de stagiair **die** vorig jaar de opleiding vastgoed heeft gevolgd?»', '«Het is een woning **die** net gerenoveerd is.»', '«Dat is de man **die** ons vorige maand heeft gebeld.»'],
    ask: 'Quel mot relie chaque fois la deuxième partie de la phrase au nom ?',
    notes: "Réponse : « die » dans les trois cas. Les trois noms (de stagiair, een woning, de man) sont des mots de genre commun : on verra que « die » suit la logique de l’article de. Les verbes à la fin de chaque relative : heeft gevolgd, gerenoveerd is, heeft gebeld.",
  });

  d.compare({
    title: 'Pourquoi les relatives sont-elles VOTRE grammaire ?', tag: 'FOCUS', page: 'Livret p. 7',
    left: { h: '✗ Qui énumère (palier 1)', color: 'accent6', items: ['Rijhuis. Het heeft een tuin.', 'De tuin ligt op het zuiden.', 'Trois phrases courtes : on **énumère**.'] },
    right: { h: '✓ Qui vend (palier 5)', color: 'accent3', items: ['Rijhuis met een tuin **die** op het zuiden ligt.', 'Une seule phrase, une relative : on **vend**.', 'Le pronom relatif est l’**outil n° 1** de l’annonce.'] },
    foot: { kind: 'keep', text: 'Le choix entre **die** et **dat** suit la logique des articles ^^de^^ / %%het%% du palier 2.' },
    notes: "Comparaison du livret : « Maison. Elle a un jardin. Le jardin est orienté sud. » contre « Maison qui dispose d’un jardin orienté sud ». La seconde vend ; la première énumère. Demander aux étudiants de transformer une annonce « palier 1 » de leur choix en une seule phrase.",
  });

  d.cards({
    title: 'Die ou dat ? La règle des articles', tag: 'GRAMMATICA', page: 'Livret p. 8', perRow: 2,
    cards: [
      { h: '✓ DIE — mots de + tous les pluriels', color: 'accent2', f: '^^de^^ woning **die** net gerenoveerd is', lines: ['→ le bien qui vient d’être rénové', '^^de^^ klanten **die** morgen komen', '→ les clients qui viennent demain', '^^de^^ appartementen **die** te huur staan (pluriel de //het appartement//)'] },
      { h: '✓ DAT — mots het au singulier seulement', color: 'accent4', f: '%%het%% appartement **dat** te huur staat', lines: ['→ l’appartement qui est à louer', '%%het%% terras **dat** op het zuiden ligt', '→ la terrasse orientée sud'] },
    ],
    foot: { kind: 'trap', text: 'En français : //qui// (sujet) et //que// (objet) sont deux mots. En néerlandais, **un seul** : //de woning die ligt…// et //de woning die u zoekt// (la maison que vous cherchez). ✗ //het huis die// · ✗ //de woning dat//.' },
    notes: "Règle de base : de-woord ou pluriel → die ; het-woord au singulier → dat. Le pluriel est toujours « die », même pour un het-woord (het huis → de huizen die). Piège pour francophones : le français distingue sujet (qui) et objet (que) ; le néerlandais ne distingue que par l’article du mot. Faire dire l’article de chaque nom avant de choisir : c’est pourquoi on l’a appris avec le vocabulaire.",
  });

  d.blocks({
    title: 'Le verbe de la relative part à la fin', tag: 'GRAMMATICA', page: 'Livret p. 8',
    intro: 'Une relative est une **subordonnée** comme celles du palier 4 : son verbe conjugué part à la **FIN** !',
    rows: [
      { label: '✓ Relative', cells: [{ t: 'De woning', role: 'O' }, { t: 'die', role: 'C', lab: 'relatif' }, { t: 'vlak bij het station', role: 'P' }, { t: 'ligt', role: 'V', lab: 'verbe → FIN' }], fr: 'Le bien qui se trouve tout près de la gare.' },
      { label: '✗ Principale', cells: [{ t: 'De woning', role: 'O' }, { t: 'die', role: 'C', lab: 'relatif' }, { t: 'ligt', role: 'N', lab: '✗ trop tôt' }, { t: 'vlak bij het station', role: 'P' }], fr: 'Impossible : c’est l’ordre de la phrase principale.' },
      { label: 'Perfectum', cells: [{ t: 'De man', role: 'O' }, { t: 'die', role: 'C', lab: 'relatif' }, { t: 'ons', role: 'O' }, { t: 'vorige maand', role: 'T' }, { t: 'heeft', role: 'V' }, { t: 'gebeld', role: 'F', lab: 'participe' }], fr: 'L’homme qui nous a appelés le mois dernier.' },
      { label: 'Passif / état', cells: [{ t: 'Een woning', role: 'O' }, { t: 'die', role: 'C', lab: 'relatif' }, { t: 'net', role: 'T' }, { t: 'gerenoveerd', role: 'F', lab: 'participe' }, { t: 'is', role: 'V', lab: 'verbe → FIN' }], fr: 'Un bien qui vient d’être rénové.' },
    ],
    foot: { kind: 'trap', text: 'Le français place le verbe juste après //qui// : //la maison **qui est** près de la gare//. Le néerlandais le **repousse en fin de relative** : //de woning die vlak bij het station **ligt**//.' },
    notes: "Rappel : participe + verbe auxiliaire à la fin (gebeld heeft ou heeft gebeld sont tous deux corrects dans une subordonnée ; le livret utilise « heeft gebeld »). Cette règle ne change pas par rapport au palier 4 : seul le mot de tête change (die / dat à la place de omdat, hoewel…).",
  });

  d.exhibit({
    title: '4 Lezen — Drie zoekertjes onder de loep', tag: 'COUCHE 1', page: 'Livret p. 8–9',
    label: 'ZOEKERTJES', docTitle: 'Drie annonces : Sint-Gillis · Elsene · Vorst',
    lines: [
      ['A', 'TE KOOP — Sint-Gillis. Rijhuis (150 m²) dat volledig gerenoveerd is. 3 slpk., woonkamer met open keuken, stadstuin die op het zuiden ligt. EPC: B. Instapklaar. Vraagprijs: € 425.000.'],
      ['B', 'TE HUUR — Elsene. Licht appartement op de derde verdieping (geen lift). 2 slpk., badkamer die vernieuwd werd in 2024, kelder. Huurprijs: € 1.250/maand + € 150 kosten. Vrij vanaf 1 september.'],
      ['C', 'TE KOOP — Vorst. Op te frissen appartement dat veel potentieel heeft. 1 slpk., terras van 8 m². Ideaal voor een investeerder die aan verhuren denkt. Vraagprijs: € 189.000.'],
    ],
    side: { label: 'LIRE COMME UN PRO', color: 'accent3', icon: 'FaEye', lines: ['Couche 1 · seul · 8 min', 'Repérez : **koop / huur**, prix, **slpk.**, relatives.', 'Questions 1 à 4 ensuite.'] },
    notes: "Trois annonces à lire silencieusement, puis questions 1 à 4 du livret. Le vocabulaire est celui de la séance 1 (huren / kopen, slpk., verdieping). « Te koop » = à vendre ; « te huur » = à louer ; « vrij vanaf » = libre à partir de ; « geen lift » = sans ascenseur ; « Vraagprijs » = prix demandé.",
  });

  d.table({
    title: '4 Les cinq relatives des trois annonces', tag: 'COUCHE 2', page: 'Livret p. 9',
    intro: 'Soulignez les **cinq relatives** : pour chacune, **die ou dat** — et **pourquoi** ?',
    headers: ['', 'EXTRAIT DE L’ANNONCE', 'POURQUOI ?'],
    colW: [0.7, 6.1, 5.33], align: ['center', 'left', 'left'], boldCol: 0,
    rows: [
      ['A', 'Rijhuis (150 m²) [[dat]] volledig gerenoveerd is.', '[[het rijhuis : het-woord, singulier]]'],
      ['A', 'Stadstuin [[die]] op het zuiden ligt.', '[[de stadstuin : de-woord]]'],
      ['B', 'Badkamer [[die]] vernieuwd werd in 2024.', '[[de badkamer : de-woord]]'],
      ['C', 'Op te frissen appartement [[dat]] veel potentieel heeft.', '[[het appartement : het-woord, singulier]]'],
      ['C', 'Ideaal voor een investeerder [[die]] aan verhuren denkt.', '[[de investeerder : de-woord]]'],
    ],
    foot: 'Dans chaque relative, entourez le **verbe** : il est **à la fin** (is · ligt · werd · heeft · denkt).',
    notes: "Corrigé des cinq relatives : A (2), B (1), C (2). Dans « Rijhuis … dat volledig gerenoveerd is » et « Op te frissen appartement dat veel potentieel heeft », les noms sont des het-woorden au singulier : dat. Les trois autres sont des de-woorden : die. Remarque : « werd » (imparfait de worden) est ici le verbe conjugué final après le participe « vernieuwd » : « die vernieuwd werd in 2024 » (le groupe prépositionnel « in 2024 » se place après le verbe : c’est permis).",
  });

  d.exercise({
    title: '4 Questions 1, 3 et 4 — comprendre les annonces', tag: 'COUCHE 1', page: 'Livret p. 9–10',
    instr: 'Couche 1 · par deux · 6 min. Répondez en vous appuyant sur les annonces A, B et C.',
    gap: 8, qGap: 14,
    items: [
      { q: '**1.** Welk zoekertje past bij mevrouw Claes ? Waarom ?', a: 'Selon la **fiche d’appel** (ex. 3 de la séance 1) : comparer huren / kopen, budget et slpk. avec A (€ 425.000 · 3 slpk.), B (€ 1.250/maand · 2 slpk.), C (€ 189.000 · 1 slpk.).' },
      { q: '**3.** Décodez : **slpk.** · **EPC** · **instapklaar**', a: '**slaapkamers** (chambres) · **energieprestatiecertificaat** (certificat PEB) · **prêt à emménager**' },
      { q: '**4.** Quel bien est « à rafraîchir » ? Quel mot l’indique ?', a: 'Zoekertje **C** : **op te frissen** (appartement dat veel potentieel heeft).' },
    ],
    number: false,
    notes: "Question 1 : la réponse dépend de la voicemail de mevrouw Claes (transcription n° 1 de l’annexe, non reproduite dans le livret) : comparer sa fiche d’appel avec les trois annonces (huren ou kopen, budget, nombre de slaapkamers). Ne pas improviser : demander aux étudiants de justifier avec les chiffres de leur fiche. Question 3 : « EPC » = Energieprestatiecertificaat (en Région bruxelloise on dit aussi PEB).",
  });

  d.exercise({
    title: '5 Combineer — Van fiche naar zin', tag: 'COUCHE 2', page: 'Livret p. 10',
    instr: 'Couche 2 · seul·e · 8 min. Fusionnez les deux phrases en une seule avec une **relative** : le verbe part à la **fin** !',
    gap: 6, qGap: 14,
    items: [
      { q: 'Wij verkopen een rijhuis. + Het rijhuis heeft drie slaapkamers.', a: 'Wij verkopen een rijhuis **dat** drie slaapkamers heeft.' },
      { q: 'Het appartement heeft een terras. + Het terras ligt op het zuiden.', a: 'Het appartement heeft een terras **dat** op het zuiden ligt.' },
      { q: 'Dat is de eigenaar. + De eigenaar heeft ons gisteren gebeld.', a: 'Dat is de eigenaar **die** ons gisteren heeft gebeld.' },
      { q: 'Ik zoek klanten. + De klanten willen investeren.', a: 'Ik zoek klanten **die** willen investeren.' },
    ],
    sideW: 3.9,
    traps: ['Le pronom remplace le **2e nom** : het rijhuis → **dat** ; de eigenaar → **die** ; klanten (pluriel) → **die**.', 'Le verbe conjugué est en **dernière** position.', '3 : //die ons gisteren gebeld heeft// est aussi correct.'],
    notes: "Corrigé. Phrase 3 : deux ordres possibles dans la subordonnée : « heeft gebeld » ou « gebeld heeft ». Phrase 4 : « klanten » est un pluriel → die, même si l’on dit « de klant ». Demander à chaque étudiant de justifier le choix avec l’article du mot (het rijhuis, het terras, de eigenaar, de klanten).",
  });

  d.exercise({
    title: 'TAAK 2 — Schrijf het zoekertje', tag: 'ÉCRIT', page: 'Livret p. 10', mode: 'show',
    instr: 'Écrit · seul·e · 15 min. Rédigez l’annonce complète (**60 à 80 mots**) dans le style des zoekertjes A à C.',
    number: false, gap: 8, img: 'p5_10_5', imgH: 4.4,
    items: [
      { h: 'Fiche technique du bien de Yasmina' },
      { t: '//rijhuis · Sint-Gillis · 150 m² · 3 slpk. · gerenoveerd in 2025 · stadstuin (zuiden) · open keuken · EPC B · € 425.000 · vrij bij akte//' },
      { h: 'Obligations' },
      { t: '**Format** : titre · caractéristiques · prix.' },
      { t: '**Au moins 3 relatives** + **2 abréviations** du métier.' },
      { t: '**Interdit** : les phrases « palier 1 » juxtaposées. Reliez !' },
      { t: 'Échange avec un binôme : soulignez ses relatives, vérifiez la place du verbe.' },
    ],
    notes: "Taak 2 (production écrite). Les étudiants reçoivent la fiche technique (ci-dessus). Critères de réussite : 60 à 80 mots, trois relatives correctes (die / dat + verbe à la fin), deux abréviations (slpk., EPC, enz.), prix. Relecture croisée : chacun souligne les relatives de l’autre et vérifie la position du verbe. Modèle sur la diapositive suivante.",
  });

  d.exhibit({
    title: 'TAAK 2 — Un zoekertje réussi (modèle)', tag: 'ÉCRIT', page: 'Livret p. 10',
    label: 'MODÈLE', docTitle: 'Zoekertje — rijhuis Sint-Gillis',
    lines: [
      '**TE KOOP — Sint-Gillis · Rijhuis 150 m² · 3 slpk. · EPC B**',
      'Rijhuis dat in 2025 volledig gerenoveerd werd. Het heeft drie slaapkamers, een open keuken die aansluit op de woonkamer en een stadstuin die op het zuiden ligt. Een instapklare woning die energiezuinig is, ideaal voor een gezin dat rust en ruimte zoekt.',
      'Vraagprijs: € 425.000. Vrij bij akte. Bezichtigen kan op afspraak.',
    ],
    side: { label: 'RELATIVES (5)', color: 'accent3', icon: 'FaCheck', lines: ['**dat** … gerenoveerd werd', '**die** aansluit op…', '**die** op het zuiden ligt', '**die** energiezuinig is', '**dat** rust en ruimte zoekt', 'Abréviations : slpk. · EPC'] },
    notes: "Modèle de ≈ 65 mots (titre compris) avec cinq relatives : het rijhuis dat… (het-woord), de keuken die…, de stadstuin die…, de woning die…, het gezin dat… (het-woord). Les productions des étudiants peuvent être plus courtes (3 relatives suffisent). Vérifier les trois pièges : dat/die selon l’article, verbe final, pas de phrases « palier 1 » juxtaposées.",
  });

  d.exhibit({
    title: 'D2 Dagelijks leven — Drie advertenties op 2dehands', tag: 'COUCHE 1', page: 'Livret p. 10a',
    label: 'D2 · 2DEHANDS', docTitle: 'Un vélo pour Stef (budget € 200 max · Forest)',
    lines: [
      ['A', 'TE KOOP — Stadsfiets, z.g.a.n. Herenfiets met 7 versnellingen en een slot dat erbij hoort. Ideaal voor iemand die dagelijks naar het werk fietst. Ophalen in Vorst. € 180 — prijs bespreekbaar.'],
      ['B', 'TE KOOP — Racefiets in carbon, twee jaar oud. Voor sportievelingen die snelheid zoeken. Verzending mogelijk. € 650 — vaste prijs.'],
      ['C', 'GRATIS — Oude kinderfiets die een nieuwe band nodig heeft. Ideaal voor ouders die graag knutselen. Ophalen in Anderlecht, enkel dit weekend.'],
    ],
    side: { label: 'MÊME TECHNIQUE', color: 'accent2', icon: 'FaSearch', lines: ['Autre marché : **l’occasion**.', 'Stef va **au bureau** à vélo.', 'Couche 1 · seul · 5 min'] },
    notes: "Même technique que les zoekertjes de l’exercice 4, autre marché. « Z.g.a.n. » = zo goed als nieuw. « Vorst » = Forest (Stef habite à Forest). Faire lire les trois annonces, puis ouvrir les questions 1 à 3 sur la diapositive suivante.",
  });

  d.exercise({
    title: 'D2 Questions 1 à 3 — lire les petites annonces', tag: 'COUCHE 2', page: 'Livret p. 10a',
    instr: 'Par deux · 8 min. Répondez, puis soulignez les relatives.',
    gap: 8, qGap: 14, number: false,
    items: [
      { q: '**1.** Welke advertentie past bij Stef ? Waarom ?', a: '**A** : stadsfiets à € 180 (budget ≤ € 200), ophalen in Vorst. B coûte € 650 ; C est un vélo d’enfant.' },
      { q: '**2.** Soulignez les **cinq relatives** : die ou dat ?', a: '**dat** erbij hoort (het slot) · **die** dagelijks… fietst (iemand) · **die** snelheid zoeken (pluriel) · **die** een nieuwe band… (de kinderfiets) · **die** graag knutselen (pluriel)' },
      { q: '**3.** Décodez : **z.g.a.n.** · **ophalen** · **prijs bespreekbaar ≠ vaste prijs**', a: '**zo goed als nieuw** (comme neuf) · **venir chercher sur place** · **négociable ≠ fixe**' },
    ],
    notes: "Corrigé. Question 1 : budget € 200 maximum, habite à Forest : l’annonce A (€ 180, prijs bespreekbaar, Vorst). Question 2 : un seul « dat » (het slot) ; « iemand » est suivi de « die » (mot désignant une personne) ; sportievelingen et ouders sont des pluriels. Question 3 : « ophalen » = venir chercher (l’objet est sur place) ; « prijs bespreekbaar » = on peut négocier (voir D5 Afdingen).",
  });

  d.exercise({
    title: 'D2 Question 4 — À vous : votre annonce', tag: 'ÉCRIT', page: 'Livret p. 10a', mode: 'a',
    instr: 'Écrit · seul·e · 7 min. Vous vendez un objet (meubel, toestel, kleren…) : annonce en **3 phrases**, avec **au moins 2 relatives** et **une abréviation**.',
    number: false, gap: 8,
    items: [
      { h: 'Modèle (à adapter)' },
      { t: '**TE KOOP** — Bureaulamp, z.g.a.n., die nog perfect werkt. Ideaal voor iemand die thuis werkt. Ophalen in Elsene: € 15, prijs bespreekbaar.' },
      { h: 'Autre exemple' },
      { t: '//Gratis — Oude fauteuil die nog stevig is. Ideaal voor een student die een goedkope stoel zoekt. Ophalen in Vorst, enkel dit weekend.//' },
    ],
    sideW: 3.9,
    expect: ['**3 phrases** (le titre compte).', '**2 relatives** : die / dat + verbe à la fin.', '**1 abréviation** : z.g.a.n., enz.', 'Couche 2 · seul · 7 min'],
    notes: "Production libre : pas de correction unique. Vérifier die/dat d’après l’article du nom (de lamp / bureaulamp → die ; de student → die) et le verbe final. Les annonces peuvent être échangées en binôme : l’autre souligne les relatives.",
  });

  d.exercise({
    title: 'Die of dat ? Kies de juiste vorm', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul·e · 4 min. Choisissez le bon pronom relatif. Dites d’abord **de ou het** pour le nom de tête.',
    gap: 10,
    items: [
      'De makelaar {{dat}} <<die>> de woning verkoopt, heet Janssens.',
      'Het huis {{die}} <<dat>> naast de bakker staat, is te koop.',
      'De klanten {{dat}} <<die>> morgen komen, zoeken een appartement.',
      'Dat is het contract {{die}} <<dat>> de eigenaar moet tekenen.',
      'De sleutels {{dat}} <<die>> u krijgt, zijn voor de kelder.',
      'Het bod {{die}} <<dat>> de koper uitbrengt, is te laag.',
    ],
    traps: ['**het contract**, **het huis**, **het bod** → **dat**.', '**de makelaar**, **de sleutels** (pluriel), **de klanten** → **die**.', 'Objet ou sujet : le **même** pronom (//het contract dat de eigenaar tekent//).'],
    notes: "Exercice ajouté : choix die / dat avec des relatives dont le pronom est tantôt sujet (phrases 1, 2, 3) tantôt objet (4, 5, 6) — le français change de mot (qui / que), le néerlandais non. Phrase 4 : « moet tekenen » (modal + infinitif) : le verbe conjugué « moet » précède l’infinitif en fin de subordonnée.",
  });

  d.closing({
    cliff: 'Séance 3 : **met wie**, **waarover**, **eraan** — les relatives avec préposition, « le sommet du palier », et la visite guidée (TAAK 3).',
    homework: ['Terminer la **TAAK 2** (60 à 80 mots) et **souligner** vos relatives.', 'Terminer **D2 question 4** : votre petite annonce (3 phrases).', 'Apprendre : **de / pluriel → die · het singulier → dat**.', 'Relire le **dialogue** p. 2 : repérer trois relatives.'],
    exit: 'Complétez : //Het appartement ___ te huur staat…// · //De klanten ___ morgen komen…// (die ou dat ?)',
    notes: "Ticket de sortie : « dat » puis « die ». Annoncer la séance 3 : les relatives avec préposition (de klant met wie…), waar + préposition (waaraan, waarover) et les adverbes pronominaux (erop, eraan) — la structure qui sépare un A2 solide d’un B1.",
  });
};
