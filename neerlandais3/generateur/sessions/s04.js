// Séance 4 — Palier 5 : séquence 5.4 (Voorwaarden en afspraken — la subordination élargie) — Livret p. 15–18a
exports.meta = {
  n: 4, slug: 'Voorwaarden_en_afspraken', title: 'Voorwaarden en afspraken',
  subtitle: 'Six nouvelles conjonctions : le néerlandais du contrat et du courriel formel',
  pages: 'Livret p. 15–18a', img: 'p5_19_10', time: '5.4', sceneLabel: 'SÉQUENCE',
  block: 'Palier 5 · Van opdracht tot verkoop',
  coverNotes: "Séance consacrée à la subordination élargie : aangezien, zodat, zodra, toen, sinds, tenzij. La règle ne change pas (le verbe file à la fin), la palette s’enrichit. Activités : le rituel des huit conjonctions du palier 4, la lecture de la mail de meneer Peeters et de l’extrait de compromis (exercice 8), le choix du voegwoord (exercice 9), la TAAK 4 (réponse formelle) et D4 (message au vendeur du vélo).",
};

exports.build = (d) => {
  d.cover();
  d.mission({
    produce: 'Poser **conditions, causes et délais** avec **aangezien, zodat, zodra, toen, sinds, tenzij**, lire un courriel de client et **y répondre** en registre formel.',
    language: '//aangezien · zodat · zodra · toen · sinds · tenzij · op voorwaarde dat · Zou u … kunnen …?//',
    skills: 'Lire un courriel et un extrait de contrat · placer le verbe à la fin · inverser après la subordonnée · écrire en registre formel et neutre',
    agenda: [['Rituel : les 8 conjonctions + rappel', 5], ['5.4 · la langue du contrat', 10], ['Les six conjonctions du métier', 10], ['8 De mail van meneer Peeters', 15], ['9 Kies het juiste voegwoord', 10], ['TAAK 4 · Antwoord aan meneer Peeters', 20], ['D4 · Een berichtje aan de verkoper', 15], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes. La séance couvre les pages 15 à 18a du livret. La TAAK 4 (10 à 12 phrases) est longue : si besoin, les étudiants la terminent à la maison et la relecture croisée se fait en début de séance 5.",
  });

  d.exercise({
    title: 'Échauffement : rituel d’ouverture et rappel', tag: 'ÉCHAUFFEMENT', page: 'Livret p. 15',
    instr: 'Rituel (p. 15) : en binôme, **récitez de mémoire les huit conjonctions du palier 4** avec leur sens (2 min, sans notes). Puis rappel de la séance 3 :',
    gap: 8,
    items: [
      'De klant [[met wie]] ik een afspraak heb, heet Claes.',
      'Het bod [[waarop]] de eigenaar wacht, komt vandaag.',
      'Ik wacht [[erop]] sinds vrijdag.',
      'Het budget [[waarover]] wij praten, is realistisch.',
    ],
    traps: ['**Personne** → prép. + **wie**.', '**Chose** → **waar-** + préposition (relative) ou **er-** + préposition (pronom).', '**met → mee** : //waarmee, ermee//.'],
    notes: "Rituel d’ouverture du livret : les huit conjonctions du palier 4 (voir le livret du palier 4) avec leur sens, de mémoire, 2 minutes en binôme. Faire dire au moins une phrase avec chacune (omdat, hoewel, nadat, als…). Puis rappel de la séance 3 : met wie / waarop / erop / waarover.",
  });

  d.scene({
    title: 'Séquence 5.4 : voorwaarden en afspraken', tag: 'FOCUS', page: 'Livret p. 15', img: 'p5_19_10',
    text: ['Tout dossier vit de **conditions** : la règle ne change pas (le verbe file à la **fin**), la palette s’enrichit de **six conjonctions**.', '**Focus : lignes 3, 7, 8 et 9**', '«…, **dus** we kunnen snel starten.» (coordination : ordre inchangé)', '«**Zodra** de foto’s binnen zijn, **zet ik**…» (inversion)', '«…**tenzij** je liever alleen werkt.» · «**Toen** ik… **moest doen**, **was** het te druk.»'],
    ask: 'Où se trouve le verbe conjugué dans chaque subordonnée ?',
    notes: "Réponses : après « dus » (coordination), l’ordre ne change pas : « dus we kunnen snel starten ». Après « Zodra … » en tête de phrase, la principale commence par le verbe (zet ik : inversion). « Tenzij je liever alleen werkt » : verbe final. « Toen ik vorig jaar alles alleen moest doen » : deux verbes à la fin (moest doen), puis « was het écht te druk » (inversion).",
  });

  d.table({
    title: 'Les six conjonctions du métier', tag: 'GRAMMATICA', page: 'Livret p. 16',
    headers: ['NEDERLANDS', 'FRANÇAIS', 'SENS', 'EXEMPLE DU MÉTIER'],
    colW: [1.7, 2.0, 2.3, 6.13], boldCol: 0,
    rows: [
      ['aangezien', 'étant donné que', 'cause (formelle)', 'Aangezien de woning verhuurd is, bezichtigen we op zaterdag.'],
      ['zodat', 'de sorte que', 'but / conséquence', 'We plaatsen extra foto’s, zodat de kopers alles zien.'],
      ['zodra', 'dès que', 'temps (immédiat)', 'Zodra het bod binnen is, bel ik de eigenaar.'],
      ['toen', 'quand (passé unique)', 'temps (passé)', 'Toen ik het huis bezocht, was ik meteen overtuigd.'],
      ['sinds', 'depuis que', 'durée', 'Sinds de advertentie online staat, krijgen we veel telefoons.'],
      ['tenzij', 'à moins que', 'exception / condition', 'De verkoop gaat door, tenzij de bank de lening weigert.'],
    ],
    foot: 'Les huit conjonctions du palier 4 + ces six = votre palette complète : le verbe file **toujours à la fin**.',
    notes: "Tableau du livret p. 16 (colonnes : néerlandais, français, sens, exemple du métier). Faire lire chaque exemple à voix haute et souligner le verbe final. Insister sur « aangezien » (cause formelle, plutôt en tête de phrase), « zodat » (but / conséquence) et « tenzij » (exception : à moins que). « Sinds » + présent en néerlandais : Sinds de advertentie online staat (présent) = depuis que l’annonce est en ligne.",
  });

  d.blocks({
    title: 'Verbe à la fin, puis inversion dans la principale', tag: 'GRAMMATICA', page: 'Livret p. 15–16',
    intro: 'Dans la subordonnée, le verbe conjugué est **à la fin**. Si elle ouvre la phrase, la principale commence par le **verbe**.',
    rows: [
      { label: 'Zodra', cells: [{ t: 'Zodra', role: 'C' }, { t: 'het bod', role: 'S' }, { t: 'binnen', role: 'X' }, { t: 'is,', role: 'V', lab: 'verbe → FIN' }, { t: 'bel', role: 'V', lab: 'inversion' }, { t: 'ik', role: 'S' }, { t: 'de eigenaar', role: 'O' }] },
      { label: 'Tenzij', cells: [{ t: 'De verkoop', role: 'S' }, { t: 'gaat', role: 'V' }, { t: 'door,', role: 'F' }, { t: 'tenzij', role: 'C' }, { t: 'de bank', role: 'S' }, { t: 'de lening', role: 'O' }, { t: 'weigert', role: 'V', lab: 'verbe → FIN' }] },
      { label: 'Toen (2 verbes)', cells: [{ t: 'Toen', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'alles alleen', role: 'M' }, { t: 'moest', role: 'V' }, { t: 'doen,', role: 'F' }, { t: 'was', role: 'V', lab: 'inversion' }, { t: 'het', role: 'S' }, { t: 'te druk', role: 'X' }] },
      { label: 'Sinds', cells: [{ t: 'Sinds', role: 'C' }, { t: 'de advertentie', role: 'S' }, { t: 'online', role: 'X' }, { t: 'staat,', role: 'V', lab: 'verbe → FIN' }, { t: 'krijgen', role: 'V', lab: 'inversion' }, { t: 'we', role: 'S' }, { t: 'veel telefoons', role: 'O' }] },
    ],
    foot: { kind: 'trap', text: 'Le français garde l’ordre normal après //dès que… ,// : //dès que le bod est là, **je** téléphone//. Le néerlandais **inverse** : //Zodra het bod binnen is, **bel ik**…// ✗ //…, ik bel//.' },
    notes: "Rappel de la règle du palier 4 : le verbe conjugué part à la fin de la subordonnée ; avec deux verbes (moest doen), le verbe conjugué précède l’infinitif (moest doen). Quand la subordonnée ouvre la phrase, elle compte pour « un seul élément » : le verbe de la principale arrive juste après (bel ik, was het, krijgen we). Remarque B1+ : un groupe prépositionnel peut suivre le verbe final (« nodig heeft voor de lening ») — voir le courriel de meneer Peeters.",
  });

  d.compare({
    title: 'Toen ou als ? Le « quand » du français', tag: 'PIÈGE', page: 'Livret p. 16',
    left: { h: 'TOEN — passé, une seule fois', color: 'accent2', items: ['//Toen ik het huis bezocht, was ik meteen overtuigd.//', 'Un événement **unique** dans le passé.', 'Dans la subordonnée : imparfait ou perfectum.'] },
    right: { h: 'ALS — présent, futur, habitude, condition', color: 'accent4', items: ['//Als de bank de lening weigert, kan de koper annuleren.//', '//Als ik een huis bezoek, kijk ik eerst naar de buurt.//', '**Si** (condition) ou **quand / chaque fois que** (présent, futur).'] },
    mid: '≠',
    foot: { kind: 'trap', text: 'Le français n’a qu’un seul mot : //quand//. En néerlandais, pour le **passé unique**, on dit //toen// : ✗ //Als ik gisteren het huis bezocht…// → ✓ //Toen ik gisteren het huis bezocht…//' },
    notes: "Complément à la ligne « toen » du tableau (quand, passé unique). Retenir : toen = passé ponctuel ; als = présent / futur / habitude / condition ; wanneer (palier 4) = quand (présent / futur, interrogatif). Les exemples sont ceux du livret (toen ik het huis bezocht ; als de bank de lening weigert, art. 3 du compromis).",
  });

  d.exhibit({
    title: '8 Lezen — De mail van meneer Peeters', tag: 'COUCHE 1', page: 'Livret p. 16',
    label: 'E-MAIL', docTitle: 'Van: j.peeters@telenet.be — Onderwerp: rijhuis Sint-Gillis',
    lines: [
      'Geachte mevrouw,',
      'Wij hebben het rijhuis vorige week bezocht en wij zijn nog steeds geïnteresseerd. Wij willen een bod uitbrengen van € 400.000, tenzij de eigenaar al een hoger bod heeft ontvangen. Aangezien onze bank drie weken nodig heeft voor de lening, willen wij graag weten of dat een probleem is. Zodra u ons antwoord hebt, kunnen wij de documenten tekenen.',
      'Met vriendelijke groeten, Jan Peeters',
    ],
    side: { label: 'LIRE EN PRO', color: 'accent3', icon: 'FaEnvelope', lines: ['Couche 1 · seul · 5 min', 'Repérez : le **bod**, la **condition**, le **délai**.', 'Puis lisez l’extrait du compromis.'] },
    notes: "Compréhension de l’écrit : courriel d’un client formel (« Geachte mevrouw »). Faire repérer le montant, la condition (tenzij), la raison du délai (aangezien) et la suite (zodra). Vocabulaire : een bod uitbrengen = faire une offre ; de lening = le prêt ; het antwoord = la réponse.",
  });

  d.exhibit({
    title: '8 Lezen — Uittreksel verkoopsovereenkomst', tag: 'COUCHE 1', page: 'Livret p. 17',
    label: 'COMPROMIS', docTitle: 'Uittreksel — Verkoopsovereenkomst (vereenvoudigd)',
    lines: [
      '**Artikel 3.** De verkoop gaat door zodra de koper de lening verkrijgt. Als de bank de lening weigert, kan de koper de overeenkomst annuleren, op voorwaarde dat hij de weigering vóór 30 september meldt.',
    ],
    side: { label: 'VOCABULAIRE', color: 'accent2', icon: 'FaFileAlt', lines: ['**de overeenkomst** : le contrat / l’accord', '**annuleren** : annuler', '**op voorwaarde dat** : à condition que', '**melden** : signaler, informer'] },
    notes: "Extrait simplifié d’un compromis : une condition suspensive (obtention du prêt). « Verkoopsovereenkomst » est la forme du livret ; on rencontre aussi « verkoopovereenkomst ». Faire repérer les trois subordonnées : zodra…, als…, op voorwaarde dat…",
  });

  d.exercise({
    title: '8 Questions 1 à 3 — la mail et le compromis', tag: 'COUCHE 1', page: 'Livret p. 17',
    instr: 'Couche 1 · par deux · 5 min. Répondez en néerlandais (phrase complète).',
    gap: 8, qGap: 14, number: false,
    items: [
      { q: '**1.** Hoeveel biedt meneer Peeters — en onder welke voorwaarde?', a: 'Hij biedt **€ 400.000**, **tenzij** de eigenaar al een hoger bod heeft ontvangen.' },
      { q: '**2.** Waarom heeft hij drie weken nodig?', a: 'Omdat zijn bank **drie weken nodig heeft** voor de lening.' },
      { q: '**3.** Wat gebeurt er volgens artikel 3 als de bank de lening weigert?', a: 'De koper **kan de overeenkomst annuleren**, op voorwaarde dat hij de weigering **vóór 30 september** meldt.' },
    ],
    notes: "Corrigé. Réponse 1 : la condition est « tenzij de eigenaar al een hoger bod heeft ontvangen » (si le propriétaire n’a pas déjà reçu une offre supérieure). Réponse 2 : « aangezien onze bank drie weken nodig heeft » (cause) ; on accepte « omdat » à l’oral. Réponse 3 : l’acheteur peut annuler, mais seulement s’il prévient avant le 30 septembre.",
  });

  d.table({
    title: '8 Question 4 — Les subordonnées et leur verbe', tag: 'COUCHE 2', page: 'Livret p. 17',
    intro: 'Soulignez les subordonnées des deux textes et **retrouvez le verbe conjugué** : où se trouve-t-il ?',
    headers: ['TEXTE', 'SUBORDONNÉE'],
    colW: [1.7, 10.43], boldCol: 0,
    rows: [
      ['Mail', 'tenzij de eigenaar al een hoger bod [[heeft ontvangen]]'],
      ['Mail', 'Aangezien onze bank drie weken nodig [[heeft]] voor de lening'],
      ['Mail', 'of dat een probleem [[is]]'],
      ['Mail', 'Zodra u ons antwoord [[hebt]]'],
      ['Art. 3', 'zodra de koper de lening [[verkrijgt]]'],
      ['Art. 3', 'Als de bank de lening [[weigert]]'],
      ['Art. 3', 'op voorwaarde dat hij de weigering vóór 30 september [[meldt]]'],
    ],
    foot: 'Règle : le verbe conjugué est **à la fin** (parfois suivi d’un groupe prépositionnel : //voor de lening//).',
    notes: "Corrigé : 7 subordonnées (4 dans la mail, 3 dans l’article 3). Dans « Aangezien onze bank drie weken nodig heeft voor de lening », le verbe conjugué « heeft » est suivi du groupe prépositionnel « voor de lening » : en néerlandais, un groupe prépositionnel peut se placer après le verbe final (extraposition) — la règle « verbe à la fin » vaut pour les verbes (heeft ontvangen, is, hebt), pas pour tous les compléments. « Of dat een probleem is » : question indirecte introduite par « of ».",
  });

  d.exercise({
    title: '9 Kies het juiste voegwoord', tag: 'COUCHE 2', page: 'Livret p. 17',
    instr: 'Couche 2 · seul·e · 8 min. Complétez avec la bonne **conjonction** (aangezien · zodat · zodra · toen · sinds · tenzij). Surveillez la place du verbe !',
    gap: 8,
    items: [
      '[[Sinds]] ik bij Immo Van Damme werk, heb ik veel geleerd.',
      'We plannen de bezichtiging op zaterdag, [[zodat]] beide kopers aanwezig kunnen zijn.',
      '[[Zodra]] het bod binnen is, bel ik de eigenaar op.',
      '[[Toen]] ik vorig jaar mijn eerste woning verkocht, was ik heel zenuwachtig.',
      'De afspraak gaat door, [[tenzij]] de klant vandaag annuleert.',
      '[[Aangezien]] de eigenaar in het buitenland woont, tekenen we digitaal.',
    ],
    sideW: 3.9,
    traps: ['**Sinds** + présent : durée (//depuis que//).', '**Toen** : passé unique ; **zodra** : dès que.', 'Subordonnée en tête → **inversion** : //bel ik, tekenen we, was ik//.', '3 : //Als// est aussi possible (à moins de « dès que »).'],
    notes: "Corrigé. Item 3 : « Zodra het bod binnen is, bel ik de eigenaar op » (opbellen est séparable : bel … op). « Als » serait acceptable à la place de « zodra » mais perd le sens « dès que ». Item 1 : « Sinds ik bij Immo Van Damme werk » (présent). Item 4 : « Toen » (passé unique) — et la principale est inversée : was ik. Item 6 : « Aangezien » (cause formelle) : tekenen we digitaal (inversion).",
  });

  d.exercise({
    title: 'TAAK 4 — Antwoord aan meneer Peeters', tag: 'ÉCRIT', page: 'Livret p. 18', mode: 'show',
    instr: 'Écrit · seul·e · 20 min. Répondez à la mail de meneer Peeters : **10 à 12 phrases**, registre **formel**. Contenu imposé :',
    gap: 8,
    items: [
      '**Accusez réception** du bod et expliquez la position du propriétaire (à vous d’inventer : il accepte, il hésite, il a reçu une autre offre…).',
      'Posez la **condition du délai bancaire** avec **au moins 3 subordonnées variées** (aangezien, zodra, tenzij, als…).',
      'Structurez avec **ten eerste / bovendien / kortom**.',
      'Proposez la suite : **«Zullen we…?»**',
      { t: 'Relecture croisée en binôme : soulignez les subordonnées de l’autre et vérifiez la **place du verbe** — la checklist du métier.' },
    ],
    notes: "Taak 4 (production écrite formelle). Critères : 10 à 12 phrases ; accusé de réception ; au moins trois subordonnées variées avec le verbe à la fin ; ten eerste / bovendien / kortom ; proposition « Zullen we… ». Registre formel : u, Geachte heer Peeters, Met vriendelijke groeten. La relecture croisée vérifie surtout la place du verbe.",
  });

  d.exhibit({
    title: 'TAAK 4 — Une réponse réussie (modèle)', tag: 'ÉCRIT', page: 'Livret p. 18',
    label: 'MODÈLE', docTitle: 'Antwoord aan meneer Peeters',
    lines: [
      'Geachte heer Peeters,',
      'Wij danken u voor uw interesse in het rijhuis in Sint-Gillis. Wij bevestigen de ontvangst van uw bod van € 400.000. Ten eerste hebben wij uw bod met de eigenaar besproken: hij vindt het interessant, maar hij wil eerst nog enkele dagen wachten. Aangezien er tot nu toe geen hoger bod is binnengekomen, blijft uw bod geldig tot vrijdag.',
      'Bovendien begrijpen wij dat uw bank drie weken nodig heeft voor de lening; voor de eigenaar is dat geen probleem, tenzij hij een andere koper vindt. Zodra u de goedkeuring van uw bank hebt, kunnen wij de verkoopsovereenkomst voorbereiden. Als de bank de lening weigert, kunt u de overeenkomst annuleren, op voorwaarde dat u ons dat vóór 30 september meldt.',
      'Kortom: de eigenaar neemt vrijdag zijn beslissing, zodat u snel duidelijkheid krijgt. Zullen we samen een afspraak inplannen om de documenten te bespreken? Aarzel niet om ons te bellen als u nog vragen hebt.',
      'Met vriendelijke groeten, Yasmina — Immo Van Damme',
    ],
    notes: "Modèle indicatif de 10 phrases (registre formel, hors formules d’ouverture et de clôture). Subordonnées : aangezien…, tenzij…, zodra…, als…, op voorwaarde dat…, zodat…, als u nog vragen hebt (7 au total). Connecteurs : ten eerste, bovendien, kortom. Proposition : Zullen we… Les productions des étudiants peuvent proposer une autre issue (accepte / hésite / autre offre) : accepter toute version cohérente.",
  });

  d.table({
    title: 'D4 — Trois registres pour écrire', tag: 'À RETENIR', page: 'Livret p. 18a',
    headers: ['', 'FORMEEL (mail)', 'NEUTRAAL (eerste bericht)', 'INFORMEEL (vrienden)'],
    colW: [1.8, 3.3, 3.7, 3.33], boldCol: 0,
    rows: [
      ['Begroeting', 'Geachte heer, mevrouw', 'Dag meneer, / Goeiedag,', 'Hoi! / Hallo!'],
      ['Aanspreking', 'u', 'u — tot de ander je voorstelt', 'jij / je'],
      ['Vraag', 'Zou u … kunnen …?', 'Kunt u …? / Is … nog beschikbaar?', 'Kan je …?'],
      ['Afsluiting', 'Met vriendelijke groeten', 'Vriendelijke groet / Alvast bedankt!', 'Groetjes! / Tot zaterdag!'],
    ],
    foot: 'Même grammaire (aangezien, zodra, tenzij), **autre registre**. En Belgique, on vouvoie un inconnu même sur 2dehands : « **Zeg maar je!** » = on passe au je.',
    notes: "Retour au vélo de Stef (annonce A de la D2) : il écrit au vendeur. Registre neutre = celui du message court entre inconnus polis. Phrases-clés : Is de fiets nog beschikbaar? (le vélo est-il encore disponible ?) · Komt het u zaterdag goed uit? (samedi vous convient-il ?) · Ik laat u iets weten. (je vous tiens au courant). La Belgique néerlandophone vouvoie plus volontiers qu’aux Pays-Bas.",
  });

  d.exercise({
    title: 'D4 Schrijven — Een berichtje aan de verkoper', tag: 'ÉCRIT', page: 'Livret p. 18a', mode: 'a',
    instr: 'Écrit · seul·e puis par deux · 10 min. Message de Stef (registre neutre, **4 à 5 phrases**, 3 subordonnées variées) ; votre binôme joue le vendeur et répond en passant au **je**.',
    number: false, gap: 6,
    items: [
      { h: 'Modèle : le message de Stef' },
      { t: 'Dag meneer, ik ben geïnteresseerd in de stadsfiets die u op 2dehands verkoopt. **Aangezien** ik in Vorst woon, kan ik zaterdag langskomen, **tenzij** u liever tijdens de week afspreekt. Is de fiets nog beschikbaar? **Zodra** ik uw antwoord heb, laat ik u weten hoe laat ik kom, **zodat** u thuis bent. Alvast bedankt!' },
      { h: 'Réponse du vendeur (je)' },
      { t: 'Dag, ja, de fiets is nog beschikbaar. Zeg maar je! Zaterdag om tien uur komt goed uit. Tot dan!' },
    ],
    sideW: 3.9,
    expect: ['**4 à 5 phrases** : intérêt · question sur le vélo · rendez-vous · clôture.', '**3 subordonnées** : aangezien · zodra · tenzij · zodat…', 'Le verbe **à la fin**.', 'Écrit · 10 min'],
    notes: "Production libre : pas de correction unique. Début imposé par le livret : « Dag meneer, ik ben geïnteresseerd in de stadsfiets die u op 2dehands verkoopt. Aangezien ik in Vorst woon, … ». Vérifier : verbe final dans chaque subordonnée, inversion dans la principale après la subordonnée en tête (kan ik, laat ik). Le vendeur répond en 2 à 3 phrases en passant au « je » : l’étudiant adapte ensuite sa réponse. « Afspreekt » : afspreken est séparable (ik spreek af) ; dans la subordonnée, la particule se ressoude.",
  });

  d.exercise({
    title: 'Combineer met het voegwoord', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Seul·e · 6 min. Reliez les deux phrases avec la **conjonction** indiquée. Si la subordonnée ouvre la phrase : **inversion**.',
    gap: 6, qGap: 12,
    items: [
      { q: 'We bezichtigen op zaterdag. + De eigenaar is dan thuis. (zodat)', a: 'We bezichtigen op zaterdag, **zodat** de eigenaar dan thuis is.' },
      { q: 'De bank weigert de lening. + De verkoop gaat door. (tenzij)', a: 'De verkoop gaat door, **tenzij** de bank de lening weigert.' },
      { q: 'Het appartement heeft geen lift. + De huur is lager. (aangezien)', a: '**Aangezien** het appartement geen lift heeft, **is** de huur lager.' },
      { q: 'Ik was in Sint-Gillis. + Ik zag de woning. (toen)', a: '**Toen** ik in Sint-Gillis was, **zag** ik de woning.' },
      { q: 'Stef werkt bij ons. + Het is minder druk. (sinds)', a: '**Sinds** Stef bij ons werkt, **is** het minder druk.' },
      { q: 'Ik bel u morgen. + U hebt dan alle documenten. (zodat)', a: 'Ik bel u morgen, **zodat** u dan alle documenten hebt.' },
    ],
    notes: "Exercice ajouté : six transformations avec les six conjonctions de la séquence. Deux ordres sont possibles quand la subordonnée n’est pas obligatoirement en tête (1, 2, 6 : subordonnée après la principale ; 3, 4, 5 : subordonnée en tête → inversion dans la principale). Les étudiants peuvent aussi proposer l’ordre inverse (Zodat de eigenaar dan thuis is, bezichtigen we…) mais « zodat » s’emploie surtout après la principale.",
  });

  d.closing({
    cliff: 'Séance 5 : **l’ordre des mots, niveau supérieur** (deux verbes, particules, inversion), la **négociation** (TAAK 5) — puis la **TAAK 6** : votre dossier complet.',
    homework: ['Apprendre les **six conjonctions** (aangezien, zodat, zodra, toen, sinds, tenzij) avec un exemple.', 'Terminer la **TAAK 4** (10 à 12 phrases) et souligner vos subordonnées.', 'Terminer le **message D4** (4 à 5 phrases) et préparer la réponse du vendeur.', 'Retenir : subordonnée **en tête** → la principale commence par le **verbe**.'],
    exit: 'Complétez : //___ het bod binnen is, bel ik de eigenaar.// · //De verkoop gaat door, ___ de bank weigert.//',
    notes: "Ticket de sortie : « Zodra » puis « tenzij ». Annoncer la séance 5 : l’ordre des mots, niveau supérieur (exercice 10), la réécriture du mauvais zoekertje (exercice 11), la négociation (TAAK 5, D5) et la présentation de la TAAK 6.",
  });
};
