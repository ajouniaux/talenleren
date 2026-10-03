// Séance 18 — Palier 8 · De schatting (Séquences 8.3 « De markt » et 8.4 « Het schattingsverslag » + D3, D4) — Livret p. 11–15a
exports.meta = {
  n: 18, slug: 'Markt_en_schattingsverslag', title: 'De markt en het verslag',
  subtitle: 'Décrire une évolution (stijgen, dalen…) et lire, écrire un rapport d’estimation',
  pages: 'Livret p. 11–15a', img: 'p8_16_8', time: '8.3 · 8.4', sceneLabel: 'SÉQUENCES',
  block: 'Palier 8 · Schatting',
  coverNotes: "Troisième séance du palier 8, qui réunit deux séquences courtes. Séquence 8.3 : parler du marché comme un journaliste économique (stijgen / dalen met x %, verdubbelen, stabiel blijven, gemiddeld, ten opzichte van) ; exercices 4 (le flash marché) et 5 (décrire le graphique), TAAK 3 (la marktupdate) et D3 (le bulletin météo). Séquence 8.4 : le rapport d’estimation (nominalisations, passif, comparaisons, zou) ; exercice 6, TAAK 4 (le besluit du dossier Forest) et D4 (les avis en ligne). Pages couvertes : p. 11 à 15a du livret.",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Décrire une **évolution chiffrée** (//stijgen met 4,2 %//), puis **lire et rédiger** un rapport d’estimation : fourchette au passif, nuance, recommandation avec **zou**.',
    language: '//stijgen · dalen · verdubbelen · stabiel blijven · gemiddeld · ten opzichte van · wordt geschat tussen … en … · zou … kunnen//',
    skills: 'Écouter un flash marché (ex. 4) · décrire un graphique (ex. 5) · présenter la marktupdate (TAAK 3) · lire un rapport (ex. 6) · rédiger un besluit (TAAK 4) · analyser des avis (D4)',
    agenda: [['Échauffement : séance 17', 5], ['8.3 : les verbes de l’évolution', 8], ['Ex. 4 · het marktflashje', 8], ['Ex. 5 · de grafiek in woorden', 8], ['TAAK 3 · de marktupdate', 10], ['D3 · het weerbericht', 8], ['8.4 · het verslag · ex. 6', 14], ['TAAK 4 · uw besluit', 12], ['D4 · vier sterren of twee ?', 12], ['Bilan', 5]],
    notes: "Durées indicatives sur 90 minutes : séance chargée car elle réunit deux séquences courtes (pages 11 à 15a). Priorités si le temps manque : tableau des verbes, exercice 5, TAAK 3, exercice 6 et TAAK 4. D3 et D4 peuvent être raccourcies (lecture et une question) ; la TAAK 4 peut être commencée en classe et terminée à la maison. Le bonus met / tot / van … naar peut se faire à l’oral.",
  });

  d.exercise({
    title: 'Rappel séance 17 : comparer', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 17',
    instr: 'Seul, 4 min, puis correction orale.',
    items: [
      { q: 'Reliez avec hoe … hoe … : //De woning ligt dicht bij het park. De prijs is hoog.//', a: 'Hoe **dichter** de woning bij het park **ligt**, hoe **hoger** de prijs **is**.' },
      { q: 'Tuin A : 30 m² · tuin B : 60 m². //Tuin A is ____ zo groot als tuin B.//', a: '**half**' },
      { q: 'De plus en plus cher : //De huizen worden ____.//', a: '**steeds duurder**' },
      { q: 'Traduisez : « En comparaison avec les voisins, la cuisine est vieille. »', a: '**In vergelijking met** de buren is de keuken verouderd.' },
      { q: 'Concession : //Pand A is gerenoveerd. De ligging is minder goed.//', a: 'Pand A is **weliswaar** gerenoveerd, **maar** de ligging is minder goed.' },
    ],
    notes: "Rappel des outils de la séance 17. Question 2 : 30 m² est la moitié de 60 m², donc « half zo groot als ». Question 4 : le verbe vient en deuxième position après « In vergelijking met de buren » (inversion). Question 5 : « maar » ne change pas l’ordre des mots.",
  });

  d.table({
    title: 'Séquence 8.3 : les verbes de l’évolution', tag: 'GRAMMATICA', page: 'Livret p. 11',
    headers: ['MOUVEMENT', 'NEDERLANDS', 'EXEMPLE'],
    colW: [2.4, 4.6, 5.13], boldCol: 1,
    rows: [
      ['monter ↗', 'stijgen (steeg, is gestegen) **met** x %', 'De prijzen zijn met 4,2 % gestegen.'],
      ['baisser ↘', 'dalen (daalde, is gedaald) **met** x %', 'De verkoop daalde vorig jaar met 3 %.'],
      ['stagner →', 'stabiel blijven / stagneren', 'De huurprijzen blijven stabiel.'],
      ['doubler ×2', 'verdubbelen (is verdubbeld)', 'De vraag naar tuinen is verdubbeld.'],
      ['en moyenne', 'gemiddeld', 'Gemiddeld duurt een verkoop 74 dagen.'],
      ['par rapport à', 'ten opzichte van / in vergelijking met', 'Ten opzichte van 2024 is dat een stijging.'],
    ],
    foot: '**Piège** : français « augmenté **de** 4,2 % » → néerlandais « gestegen **met** 4,2 % » (✗ //van//). Départ → arrivée : //**van** 20 **naar** 40 %//.',
    notes: "Séquence 8.3 : parler du marché comme un journaliste économique, avec le bon verbe, la bonne préposition (MET !) et le bon temps (perfectum ou imperfectum, paliers 4 et 6). Formes : stijgen — steeg (pluriel stegen) — is gestegen (verbe fort) ; dalen — daalde — is gedaald ; blijven — bleef — is gebleven ; verdubbelen — verdubbelde — is verdubbeld (pas de « ge- » car préfixe ver-) ; stagneren — stagneerde — heeft gestagneerd. Les verbes de mouvement stijgen et dalen forment leur perfectum avec « zijn ». Coquille du livret : « la langue de la langue de marché (marktrapport) » → « la langue du marché ». Faire dire pour chaque ligne une phrase vraie pour la vie des étudiants (loyer, tarif, température).",
  });

  d.table({
    title: '4 · Luisteren — Het marktflashje', tag: 'COUCHE 1', page: 'Livret p. 12',
    intro: 'Couche 1 · réception · seul puis binôme · 10 min. Vous entendez **deux fois** un flash « marché immobilier bruxellois » (transcription n° 2). Complétez la fiche, puis comparez **chiffre par chiffre** avec votre binôme (contrôle téléphonique de la séquence 8.1).',
    headers: ['MARKTFICHE — BRUSSEL, 1E SEMESTER', 'UW NOTITIES'],
    colW: [6.5, 5.63], boldCol: 0,
    rows: [
      ['Gemiddelde prijs van een huis', ''],
      ['Evolutie huizenprijzen (t.o.v. vorig jaar)', ''],
      ['Evolutie appartementen', ''],
      ['Gemiddelde verkooptijd', ''],
      ['Wat is verdubbeld?', ''],
      ['Prognose voor volgend jaar', ''],
    ],
    notes: "Le texte du flash (transcription n° 2, annexe) n’est pas reproduit dans le livret : le lire deux fois, à vitesse naturelle ; la solution dépend de ce texte et n’est donc pas projetée ici. Indication utile pour le professeur : les six rubriques de la fiche correspondent aux six données du graphique de l’exercice suivant (prix moyen d’un logement, évolution, appartements, durée de vente, ce qui a doublé, prévision) ; à confronter avec la transcription avant de valider ces chiffres comme corrigé. « t.o.v. » = ten opzichte van. Après la 2e écoute, les binômes comparent leurs chiffres ; toute divergence se discute et se règle par une 3e lecture.",
  });

  d.picture({
    title: '5 · Beschrijf de grafiek in woorden', tag: 'COUCHE 2', page: 'Livret p. 13', img: 'p8_16_8',
    capLabel: 'CONSIGNE', capColor: 'accent2', capIcon: 'FaChalkboardTeacher',
    caption: ['Transformez ces **données brutes** en **quatre phrases** de marktrapport.', 'Employez : un **verbe d’évolution** · **met** · **van … naar** · **gemiddeld** · **ten opzichte van**.', 'Couche 2 · seul puis binôme · 8 min'],
    notes: "Les données de l’exercice 5 sont celles du graphique du livret (p. 13) : prix moyen d’un logement 431.000 € (2024) → 449.000 € (2025), + 4,2 % ; appartements − 1,8 % ; durée de vente 81 → 74 jours (− 7 jours) ; demandes d’estimation 120 → 240 (× 2, verdubbeld) ; prévision 2026 : stable, ≈ + 2 %. Coquille du livret : la consigne de l’exercice 5 recopie par erreur une phrase de l’exercice 4 (« Vous entendez deux fois un flash… transcription n° 2 en ») : la vraie consigne est « Transformez ces données brutes en quatre phrases de marktrapport ». Laisser 5 minutes d’écriture, puis lecture à voix haute de quelques phrases.",
  });

  d.exercise({
    title: '5 · Modèles de phrases de marktrapport', tag: 'COUCHE 2', page: 'Livret p. 13', mode: 'a',
    instr: 'Phrases-modèles (plusieurs formulations correctes sont possibles).',
    number: false, gap: 10,
    items: [
      { t: 'De gemiddelde huizenprijs is **met 4,2 %** gestegen: **van** € 431.000 in 2024 **naar** € 449.000 in 2025.' },
      { t: 'De prijzen van appartementen zijn **met 1,8 %** gedaald.' },
      { t: '**Gemiddeld** duurde een verkoop in 2025 74 dagen, **ten opzichte van** 81 dagen in 2024: zeven dagen sneller.' },
      { t: 'Het aantal aanvragen voor een schatting is **verdubbeld**: **van** 120 **naar** 240.' },
      { t: 'Voor 2026 wordt een **stabiele** markt verwacht, met een stijging van ongeveer 2 %.' },
    ],
    expect: ['**4 phrases** correctes.', '**met** = l’écart (4,2 %) ; **van … naar** = départ → arrivée.', 'Participe passé avec **is** : is gestegen, is gedaald, is verdubbeld.'],
    notes: "Les trois premières phrases emploient exactement les structures du livret : verbe d’évolution + met, van … naar, gemiddeld, ten opzichte van. Accepter aussi : « De huizenprijs steeg met 4,2 % » (imperfectum), « Een verkoop duurt gemiddeld 74 dagen, zeven dagen korter dan vorig jaar » et « De vraag naar schattingen is verdubbeld ». La 5e phrase (prognose) est un bonus d’exhaustivité.",
  });

  d.checklist({
    title: 'TAAK 3 · De marktupdate', tag: 'ORAL', page: 'Livret p. 13',
    intro: 'Couche 3 · trios · **2 minutes chrono** chacun, **mots-clés seulement**. Présentez la marktupdate du trimestre à l’équipe, à partir de votre marktfiche (exercice 4).',
    items: [
      'au moins **quatre verbes d’évolution** corrects (**met** !)',
      'une comparaison **hoe … hoe …** ou **steeds**',
      'une **moyenne** (//gemiddeld//)',
      'une **conclusion** pour l’agence : //Kortom: het is een goed moment om te verkopen, omdat …//',
      'le trio d’écoute **vérifie chaque chiffre** sur sa fiche : toute divergence se discute !',
    ],
    notes: "Trios : un présentateur (2 minutes chrono, mots-clés seulement), deux auditeurs qui vérifient chaque chiffre sur leur propre fiche. Rotation : 3 × 2 minutes + débriefing = 10 minutes. Modèle oral : « Dit kwartaal is de gemiddelde prijs van een huis met 4,2 % gestegen, van € 431.000 naar € 449.000. Appartementen zijn daarentegen met 1,8 % gedaald. Hoe langer een woning te koop staat, hoe minder interessant ze wordt. Een verkoop duurt gemiddeld 74 dagen. De vraag naar schattingen is verdubbeld. Kortom: het is een goed moment om te verkopen, omdat de vraag groot is. » (à adapter aux notes de chacun.)",
  });

  d.exhibit({
    title: 'D3 · Het weerbericht', tag: 'ORAL', page: 'Livret p. 13a',
    label: 'WEERBERICHT', docTitle: 'Het weerbericht voor het weekend',
    lines: [
      'Het weekend begint zonnig.',
      'Zaterdag stijgen de temperaturen tot tweeëntwintig graden aan zee en tot vijfentwintig graden in het binnenland.',
      'Zondag wordt het wisselvalliger: de temperaturen dalen met ongeveer vijf graden en de kans op regen verdubbelt, van twintig naar veertig procent.',
      'Gemiddeld blijft het wel warmer dan vorig weekend.',
      'Maandag blijft het grijs en fris, met maxima rond zestien graden.',
    ],
    side: { label: 'À REPÉRER', color: 'accent2', icon: 'FaSearch', lines: ['**stijgen tot** + valeur finale', '**dalen met** + écart', '**verdubbelen** : van 20 naar 40 %', '**gemiddeld** + comparatif'] },
    notes: "Monter, baisser, doubler : la langue du marché est aussi celle de la météo. Lire le bulletin à voix haute (ou le faire lire), puis vérifier la compréhension : samedi 22° à la mer et 25° dans l’intérieur ; dimanche − 5° environ (22 → 17°, cohérent avec l’Avonddialoog) et le risque de pluie passe de 20 à 40 % ; lundi gris et frais, maxima autour de 16°. Lexique : het binnenland = l’intérieur du pays ; wisselvallig = variable ; de maxima = les températures maximales.",
  });

  d.exercise({
    title: 'Met, tot ou van … naar ?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez avec **met**, **tot** ou **van … naar**. Seul, 4 min.',
    items: [
      'De temperatuur stijgt [[met]] vijf graden. (l’écart)',
      'De temperatuur stijgt [[tot]] tweeëntwintig graden. (la valeur atteinte)',
      'De kans op regen verdubbelt, [[van]] twintig [[naar]] veertig procent.',
      'De prijzen zijn [[met]] 4,2 % gestegen.',
      'De huurprijs daalt [[van]] € 950 [[naar]] € 900.',
      'De verkooptijd is [[met]] zeven dagen gedaald.',
      'De temperatuur daalt [[tot]] zeventien graden.',
    ],
    gap: 8,
    traps: ['**met** = l’écart (de combien)', '**tot** = la valeur atteinte', '**van … naar** = départ → arrivée', 'Jamais « van » pour l’écart : ✗ //gestegen van 4,2 %//'],
    notes: "Exercice de réemploi de la boîte « MET ou TOT ? » du livret (p. 13a). Phrase 2 : « stijgt tot tweeëntwintig graden » ; phrase 7 : « daalt tot / naar zeventien graden » : accepter aussi « naar ». Phrase 5 : « daalt van € 950 naar € 900 » (départ, arrivée). Le français dit « de » pour l’écart (augmenté de 4,2 %) : c’est la source de l’erreur « van » ; en néerlandais l’écart se dit « met ».",
  });

  d.table({
    title: 'Zo zeg je dat : parler du temps', tag: 'WOORDENSCHAT', page: 'Livret p. 13a',
    headers: ['NEDERLANDS', 'FRANÇAIS'],
    colW: [6.0, 6.13],
    rows: [
      ['Het wordt zonnig.', 'Il fera beau.'],
      ['^^de^^ kans op regen', 'le risque de pluie'],
      ['Het is wisselvallig.', 'Le temps est variable.'],
      ['^^de^^ opklaring', 'une éclaircie'],
      ['Het giet!', 'Il pleut à verse !'],
      ['Het is zwoel.', 'Il fait lourd.'],
    ],
    foot: '**À vous (30 s chrono)** : la météo d’aujourd’hui et de demain pour votre ville (3 verbes d’évolution + une moyenne). **Autonomie** : une donnée de votre vie : //Mijn schermtijd is in één maand met twintig procent gedaald.//',
    notes: "Lexique de la météo. Le livret écrit « een opklaring » ; le mot est de-woord (de opklaring). À vous : chaque étudiant présente en 30 secondes la météo du jour et du lendemain pour sa ville, d’après une vraie application ou une météo inventée : au moins trois verbes d’évolution (stijgen, dalen, verdubbelen, stabiel blijven) et une moyenne. Autonomie : présenter l’évolution d’une donnée personnelle (temps d’écran, dépenses de courses, nombre de pas, prix d’un produit). Pas de correction unique : vérifier met / tot / van … naar et l’auxiliaire is dans le perfectum.",
  });

  d.cards({
    title: 'Séquence 8.4 : le schattingsverslag', tag: 'GRAMMATICA', page: 'Livret p. 14',
    intro: 'Deux agents annoncent le même prix : l’un le **dit**, l’autre le **démontre** dans un rapport structuré. Qui obtient le mandat ?',
    perRow: 3,
    cards: [
      { h: '① BESCHRIJVING', color: 'accent2', f: 'nominalisations', lines: ['Titres : //Beschrijving van het pand// (palier 7)', 'Constats au **passif** : //werd gerenoveerd// (palier 6)'] },
      { h: '② ANALYSE', color: 'accent1', f: 'hoe … hoe · gemiddeld', lines: ['Comparaisons (8.2) et évolutions (8.3)', 'Connecteurs : //daarentegen · echter//'] },
      { h: '③ BESLUIT', color: 'accent3', f: 'wordt geschat tussen', lines: ['La fourchette au **passif**', '**zou … kunnen** : la recommandation (palier 6)'] },
    ],
    foot: { kind: 'trap', text: 'Un rapport ne dit pas « //wij schatten//… » : il écrit //de marktwaarde **wordt geschat** tussen € 445.000 **en** € 465.000// (✗ //tot//) — et //duurder **dan**//, jamais //duurder als//.' },
    notes: "Le rapport écrit assemble tout ce que la série a appris : nominalisations (palier 7) dans les titres, passif (palier 6) dans les constats, comparaisons (8.2) et évolutions (8.3) dans l’analyse, zou dans la recommandation. Piège pour francophones : le français écrit « nous estimons » ; le rapport néerlandais préfère le passif impersonnel. « Tussen … en … » ou « van … tot … » sont les deux seules façons de dire une fourchette : ✗ tussen … tot.",
  });

  d.exhibit({
    title: '6 · Het verslag onder de loep', tag: 'COUCHE 1', page: 'Livret p. 14',
    label: 'UITTREKSEL', docTitle: 'Schattingsverslag — Vredestraat 24, Sint-Gillis',
    lines: [
      ['1. Beschrijving van het pand', 'Rijhuis van 140 m², drie slaapkamers, tuin van 60 m² die op het zuiden ligt. De gevel werd in 2019 gerenoveerd; de keuken daarentegen is verouderd (1998).'],
      ['2. Analyse van de markt', 'De prijzen in de wijk zijn het afgelopen jaar gemiddeld met 4,2 % gestegen. Hoe dichter bij het park, hoe hoger de vierkantemeterprijs. In vergelijking met de drie vergelijkingspunten scoort het pand goed qua ligging, maar minder qua staat.'],
      ['3. Besluit', 'Op basis van de vergelijking van de recente verkopen wordt de marktwaarde geschat tussen € 445.000 en € 465.000. Een vernieuwing van de keuken zou de waarde met ongeveer € 20.000 kunnen verhogen.'],
    ],
    notes: "Compréhension de l’écrit : lecture silencieuse (3 minutes), puis questions sur la diapositive suivante. Lexique : het rijhuis = la maison de rangée ; de gevel = la façade ; qua ligging = quant à l’emplacement ; de vierkantemeterprijs = le prix au m² ; verouderd = vieilli, démodé.",
  });

  d.exercise({
    title: '6 · Het verslag onder de loep : vragen', tag: 'COUCHE 1', page: 'Livret p. 14–15',
    instr: 'Seul puis binôme · 9 min. Soulignez dans le texte, puis répondez.',
    items: [
      { q: '1a. Deux **passifs** ?', a: '**werd** in 2019 **gerenoveerd** · **wordt** de marktwaarde **geschat**' },
      { q: '1b. Une corrélation **hoe … hoe …** ?', a: '**Hoe dichter** bij het park, **hoe hoger** de vierkantemeterprijs.' },
      { q: '1c. Un connecteur du palier 7, et un **zou** ?', a: '**daarentegen** · Een vernieuwing van de keuken **zou** de waarde … **kunnen** verhogen.' },
      { q: '2. Pourquoi une fourchette plutôt qu’un chiffre unique ?', a: 'Een **bandbreedte** is eerlijker: ze toont de onzekerheid van de markt en laat ruimte voor onderhandeling.' },
      { q: '3. Quel investissement, pour quel gain estimé ?', a: 'Een **vernieuwing van de keuken** → ongeveer **€ 20.000** meer waarde.' },
    ],
    number: false, qGap: 8, gap: 9,
    notes: "Réponses attendues. Passifs : « werd … gerenoveerd » (imperfectum passif) et « wordt … geschat » (présent passif). Question 2, réponses acceptées : une fourchette est plus honnête, protège la crédibilité de l’agent, laisse une marge de négociation, reflète l’incertitude du marché ; tout avantage professionnel exprimé en une phrase correcte est valide. Question 3 : la rénovation de la cuisine, gain d’environ 20.000 € ; vérifier la formule « met ongeveer € 20.000 ».",
  });

  d.picture({
    title: 'TAAK 4 · Uw besluit : le dossier Forest', tag: 'ÉCRIT', page: 'Livret p. 15', img: 'p8_19_9',
    capLabel: 'LE DOSSIER', capColor: 'accent1', capIcon: 'FaFileAlt',
    caption: ['**Appartement à Forest** : 85 m², 2 slpk., terras 6 m², instapklaar ; la **lift** est souvent en panne.', 'Comparables vendus : **€ 285.000 · € 302.000 · € 279.000** (moyenne ≈ € 288.700).', 'Marché du quartier : **+ 2,1 %**.', '**Besluit** complet : 8 à 10 phrases.'],
    notes: "TAAK 4 : un nouveau dossier, à rédiger seul (12 minutes en classe, puis finition à la maison). Moyenne : (285.000 + 302.000 + 279.000) ÷ 3 = 288.667 €. Les quatre mouvements du besluit à respecter (diapositive suivante) : base nominalisée, fourchette au passif, nuance concessive (palier 7), recommandation chiffrée avec zou, plus une évolution du marché (stijgen met) et une comparaison de la séquence 8.2. Lexique : de lift = l’ascenseur (en panne : defect, uitgevallen) ; het terras = la terrasse.",
  });

  d.exercise({
    title: 'TAAK 4 · Modèle de besluit', tag: 'ÉCRIT', page: 'Livret p. 15', mode: 'a',
    instr: 'Quatre mouvements : base nominalisée → fourchette au passif → concession → recommandation avec zou (+ évolution + comparaison).',
    number: false, gap: 7,
    items: [
      { t: '**Op basis van de vergelijking** van drie recente verkopen (€ 285.000, € 302.000 en € 279.000) **wordt** de marktwaarde van het appartement in Forest **geschat** tussen € 280.000 en € 295.000.' },
      { t: 'De gemiddelde verkoopprijs van de drie panden bedraagt ongeveer € 289.000.' },
      { t: 'De prijzen in de wijk zijn het afgelopen jaar **met 2,1 % gestegen**.' },
      { t: 'Het appartement is **weliswaar** instapklaar en heeft een terras van 6 m², **maar** de lift valt regelmatig uit.' },
      { t: '**Hoe vaker** de lift defect **is**, **hoe minder** aantrekkelijk het appartement voor kandidaten **wordt**.' },
      { t: 'Het duurste vergelijkingspunt is € 23.000 duurder **dan** het goedkoopste.' },
      { t: 'Wij **zouden** u aanraden om te starten op € 295.000, de bovenkant van de bandbreedte.' },
      { t: 'Een snelle herstelling van de lift **zou** de verkoop **kunnen** versnellen.' },
    ],
    notes: "Modèle de besluit (8 phrases). Mouvements : (1) base nominalisée « Op basis van de vergelijking » + fourchette au passif « wordt … geschat tussen … en … » ; (2–3) moyenne et évolution « met 2,1 % gestegen » ; (4) concession « weliswaar … maar » ; (5) corrélation hoe … hoe … ; (6) comparaison avec dan ; (7–8) recommandation avec zou. La fourchette 280.000–295.000 est une proposition raisonnable autour de la moyenne (≈ 289.000) ; accepter toute fourchette cohérente avec les trois ventes et le défaut de l’ascenseur. Rappel : hoe vaker … is, hoe minder … wordt (verbe à la fin).",
  });

  d.exhibit({
    title: 'D4 · Vier sterren of twee ?', tag: 'ÉCRIT', page: 'Livret p. 15a',
    label: 'AVIS EN LIGNE', docTitle: 'Les trois derniers avis',
    lines: [
      ['★★★★★  Marc · 3 dagen geleden', 'Een echte aanrader! De mosselen waren vers en de porties waren twee keer zo groot als in de restaurants op de dijk. Prijs-kwaliteit: top. Voor herhaling vatbaar.'],
      ['★★☆☆☆  Ingrid · 1 week geleden', 'Eerlijk gezegd: ontgoochelend. We hebben 45 minuten op ons hoofdgerecht gewacht. Hoe later op de avond, hoe trager de bediening. De prijzen zijn in vergelijking met vorig jaar met bijna 20 % gestegen.'],
      ['★★★★☆  Youssef · 2 weken geleden', 'Lekker eten in een gezellig kader. De garnaalkroketten zijn even goed als bij mijn grootmoeder! De wachttijd was wel lang. Kortom: ik zou zeker teruggaan, maar ik zou reserveren.'],
    ],
    notes: "Un avis en ligne ressemble à un petit rapport : on décrit, on compare, on conclut. Lecture des trois avis avec « l’œil d’un professionnel de l’estimation » (restaurant choisi par Lotte dans l’Avonddialoog). Lexique : een aanrader = une valeur sûre ; voor herhaling vatbaar = à refaire ; de bediening = le service ; ontgoochelend = décevant ; het kader = le cadre ; de dijk = la digue.",
  });

  d.exercise({
    title: 'D4 · Les avis : moyenne et analyse', tag: 'ÉCRIT', page: 'Livret p. 15a',
    instr: 'Seul puis binôme · 8 min.',
    items: [
      { q: '1a. Calculez la **note moyenne** (gemiddeld).', a: '(5 + 2 + 4) ÷ 3 = 3,67 → **gemiddeld ongeveer drie komma zeven** sterren op vijf.' },
      { q: '1b. Quel avis est le plus utile : des faits chiffrés ou de l’émotion ?', a: 'Les avis **chiffrés** (Ingrid : 45 minuten, bijna 20 %) : on peut les vérifier, comme un rapport. « Een echte aanrader! » n’apporte aucune donnée.' },
      { q: '2a. Deux comparaisons ?', a: '**twee keer zo groot als** in de restaurants op de dijk · **even goed als** bij mijn grootmoeder (+ **hoe later …, hoe trager …**)' },
      { q: '2b. Une évolution ?', a: 'De prijzen zijn in vergelijking met vorig jaar **met bijna 20 % gestegen**.' },
      { q: '2c. Une recommandation avec ZOU ?', a: 'Ik **zou** zeker **teruggaan**, maar ik **zou** reserveren.' },
    ],
    number: false, qGap: 8, gap: 9,
    notes: "Réponses attendues. Moyenne : 3,67 (que l’on dit « drie komma zeven » après arrondi, ou « drie komma zes zeven »). Trois avis ne forment pas un échantillon représentatif : le restaurant affiche 4,5 sur plus de mille avis (Avonddialoog) ; c’est l’occasion de rappeler pourquoi le rapport d’estimation s’appuie sur plusieurs comparables. Comparaisons possibles aussi : « hoe later op de avond, hoe trager de bediening » (corrélation) ; évolution : « gestegen ». Recommandation avec zou : celle de Youssef.",
  });

  d.exercise({
    title: 'D4 · À vous : rédigez votre avis', tag: 'ÉCRIT', page: 'Livret p. 15a', mode: 'a',
    instr: 'Un lieu que vous connaissez vraiment (restaurant, café, hôtel, magasin, appli…) : **6 à 8 phrases**, selon la structure du schattingsverslag.',
    number: false, gap: 7,
    items: [
      { h: 'Modèle (à adapter : vrai pour vous !)' },
      { t: 'Café De Hoek ligt in het centrum van Gent; een koffie kost € 2,80.' },
      { t: '**In vergelijking met** de andere cafés in de straat is de bediening **twee keer zo snel**.' },
      { t: '**Hoe drukker** het **is**, **hoe vriendelijker** het personeel **blijft**.' },
      { t: 'Het gebak is **even** lekker **als** bij de bakker, maar de prijzen zijn dit jaar **met ongeveer 10 % gestegen**.' },
      { t: 'Kortom: vier op vijf sterren. Ik **zou** het zeker aanraden, maar ik **zou** voor het weekend reserveren.' },
    ],
    sideW: 3.9,
    expect: ['**1. Beschrijving** : quoi, où, combien', '**2. Analyse** : une comparaison et un chiffre au moins', '**3. Besluit** : note sur cinq + recommandation avec **zou**', '//een aanrader · prijs-kwaliteit · voor herhaling vatbaar · de bediening//'],
    notes: "Production libre : l’avis suit la structure du rapport d’estimation. Le modèle compte 7 phrases (6 à 8 attendues). À terminer à la maison si besoin. Vérifier : un chiffre, une comparaison (even … als, twee keer zo … als, hoe … hoe …), une évolution si possible, une note sur cinq et une recommandation avec zou (« Ik zou het aanraden »). Expressions d’avis du livret : een aanrader, prijs-kwaliteit, voor herhaling vatbaar, de bediening.",
  });

  d.closing({
    cliff: 'Séance 19 : **défendre son estimation** face au propriétaire déçu (TAAK 5), puis la **tâche finale** de la série : le schattingsgesprek (TAAK 6).',
    homework: ['Terminer la **TAAK 4** (besluit de 8 à 10 phrases) si besoin.', 'Rédiger l’**avis** de D4 (6 à 8 phrases).', 'Préparer votre **marktupdate** en mots-clés (TAAK 3) si vous n’êtes pas passé·e.', 'Apprendre : stijgen / dalen **met** · **van … naar** · verdubbelen · stabiel blijven.'],
    exit: 'Annoncez à voix haute une évolution **chiffrée** de votre vie : //… is met … % gestegen / gedaald.//',
    notes: "Ticket de sortie oral. Exemples : « Mijn huur is met 3 % gestegen. » ; « Mijn schermtijd is van vier naar drie uur gedaald. » Annoncer que la séance 19 réunit la séquence 8.5 et la tâche finale : prévoir de réviser les connecteurs de concession (weliswaar … maar) du palier 7.",
  });
};
