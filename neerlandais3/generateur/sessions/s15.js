// Séance 15 — Palier 7 · Séquence 7.5 (Toegeven en weerleggen) + 7.6 TAAK 6 (De algemene vergadering) — Livret p. 19–24a
exports.meta = {
  n: 15, slug: 'Toegeven_weerleggen_Taak6', title: 'Toegeven en weerleggen',
  subtitle: 'La concession-réfutation, le minidébat et la grande assemblée finale (TAAK 6)',
  pages: 'Livret p. 19–24a', img: 'p7_24_11', time: '7.5', sceneLabel: 'SÉQUENCE',
  block: 'Palier 7 · Mede-eigendom',
  coverNotes: "Dernière séance du palier 7. Elle traite la séquence 7.5 (concession-réfutation : weliswaar… maar, hoewel, toch, dat klopt maar…), l’exercice 8 (geef toe… en weerleg), la TAAK 5 (minidébat à quatre), l’activité Dagelijks leven D5 (rapporter un achat au magasin) et la TAAK 6 finale (séquence 7.6 : l’assemblée générale complète, avec ordre du jour, débat, vote et notulen). Les notulen (étape 3) se terminent à la maison.",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: '**Concéder puis réfuter** (weliswaar… maar, toch, hoewel), tenir un **minidébat**, puis mener une **assemblée générale complète** : ordre du jour, débat, vote et notulen.',
    language: '//De kostprijs is weliswaar hoog, maar… · Dat klopt, maar… · Toch stel ik voor… · Hoewel ik uw punt begrijp, … · Wie is voor? Tegen? Onthoudingen?//',
    skills: 'Réfuter poliment · débattre avec un président de séance · négocier au service clientèle · réemployer tout le palier dans une performance finale',
    agenda: [['Rappel séance 14', 6], ['7.5 · concession-réfutation (p. 19–21)', 14], ['Ex. 8 · geef toe… en weerleg', 10], ['TAAK 5 · het minidebat', 14], ['D5 · Een aankoop terugbrengen', 10], ['TAAK 6 · étapes 1 et 2 (p. 23–24)', 28], ['Bilan du palier', 8]],
    notes: "Durées indicatives sur 90 minutes : séance chargée. Pages 19 à 24a du livret. Si le temps manque : D5 peut se limiter à une ronde, et l’étape 3 de la TAAK 6 (le procès-verbal de 10 à 12 phrases) se fait à la maison. L’étape 2 (l’assemblée) demande des groupes de 5 à 6 étudiants ; prévoir un rôle d’observateur pour les groupes voisins.",
  });

  d.exercise({
    title: 'Rappel séance 14 : le procès-verbal', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 14',
    instr: 'Seul · 4 min, puis correction orale.',
    items: [
      { q: 'Passif impersonnel : « On a décidé de reporter le vote. »', a: '**Er werd beslist** om de stemming **te verplaatsen**.' },
      { q: 'Yilmaz : //«Is een tweede offerte mogelijk?»// → discours indirect', a: 'De heer Yilmaz vroeg **of** een tweede offerte mogelijk **was**.' },
      { q: '« L’augmentation a été approuvée par 8 voix contre 3. »', a: 'De verhoging **werd goedgekeurd** met 8 stemmen tegen 3.' },
      { q: 'Participes : goedkeuren · afsluiten', a: 'werd **goedgekeurd** · werd **afgesloten**' },
      { q: 'Que signifie « 1 onthouding » ?', a: 'Une **abstention** (ni pour, ni contre).' },
    ],
    traps: ['**Er werd** + participe en fin de phrase.', '**of** (pas //dat//) pour une question indirecte.', 'Séparables : //goedgekeurd · afgesloten//.'],
    notes: "Rappel de la séance 14 (4 minutes). Ces tournures serviront dans l’étape 3 de la TAAK 6 (les notulen de la réunion jouée). Faire dire les phrases à voix haute avec le bon ordre des mots.",
    notesA: "Si « er » est oublié dans la phrase 1, renvoyer à la règle de la séance 14 : sans autre élément en tête, « er » est obligatoire.",
  });

  d.scene({
    title: 'Séquence 7.5 : concéder d’abord', tag: 'FOCUS', page: 'Livret p. 19', img: 'p7_24_11', time: '7.5', sceneLabel: 'SÉQUENCE',
    text: ['Le débatteur maladroit dit « non ». Le professionnel dit « **certes…, mais** » : il **reconnaît** le point adverse, **puis le renverse**.', '**Focus : ligne 7 du dialogue**', 'Stef : «Dat klopt **weliswaar**, **maar** het offerte-onderzoek is nog niet afgerond.»', '//C’est certes vrai, mais l’examen des offres n’est pas terminé.//'],
    ask: 'Que concède Stef ? Que réfute-t-il ?',
    notes: "Réponse : Stef reconnaît que Yasmina a raison sur l’urgence (« dat klopt », la décision tarde et les dégâts grandissent) ; il réfute en soulignant que l’examen des offres n’est pas terminé, donc qu’on ne peut pas encore voter. Le livret ne donne pas de titre à cette séquence (le titre « SÉQUENCE 7.5 » est absent de la page 19) ; nous l’appelons « 7.5 : concession et réfutation ». Le livret dit que « hoewel » est connu du palier 4 ; la page 15a (D3) le renvoie au palier 5 : peu important, il est à réactiver.",
  });

  d.table({
    title: 'Concéder puis réfuter : quatre structures', tag: 'GRAMMATICA', page: 'Livret p. 20',
    headers: ['STRUCTURE', 'FRANÇAIS', 'EXEMPLE'], colW: [3.3, 2.9, 5.93], size: 18,
    rows: [
      ['**weliswaar …, maar …**', 'certes…, mais…', 'De werken zijn weliswaar duur, maar noodzakelijk.'],
      ['**hoewel …** (palier 4)', 'bien que', 'Hoewel ik uw punt begrijp, blijf ik bij mijn standpunt.'],
      ['**toch**', 'pourtant / quand même', 'De offerte is hoog. Toch stel ik voor om te wachten.'],
      ['**dat klopt, maar …**', 'c’est vrai, mais…', 'Dat klopt, maar de schade wordt elk jaar groter.'],
    ],
    notes: "Tableau du livret (p. 20). Faire lire les exemples à voix haute et identifier ce qui est concédé et ce qui est réfuté. « Weliswaar » se place dans le champ du milieu (de werken zijn weliswaar duur) ou en tête avec inversion (Weliswaar zijn de werken duur, maar…). « Hoewel » introduit une subordonnée : verbe à la fin ; la principale qui suit commence par le verbe (…, blijf ik bij mijn standpunt).",
  });

  d.blocks({
    title: 'Ordre des mots : weliswaar · hoewel · toch · maar', tag: 'GRAMMATICA', page: 'Livret p. 20',
    intro: 'Quatre mécaniques, quatre ordres des mots. Observez la position du **verbe conjugué**.',
    rows: [
      { label: 'Weliswaar … maar', cells: [{ t: 'De werken', role: 'S' }, { t: 'zijn', role: 'V' }, { t: 'weliswaar', role: 'C' }, { t: 'duur', role: 'M' }, { t: 'maar', role: 'C' }, { t: 'noodzakelijk', role: 'M' }], fr: 'Les travaux sont certes chers, mais nécessaires.' },
      { label: 'Weliswaar en tête', cells: [{ t: 'Weliswaar', role: 'C' }, { t: 'zijn', role: 'V' }, { t: 'de werken', role: 'S' }, { t: 'duur', role: 'M' }, { t: 'maar', role: 'C' }, { t: 'noodzakelijk', role: 'M' }], fr: 'Certes, les travaux sont chers, mais nécessaires.' },
      { label: 'Hoewel', cells: [{ t: 'Hoewel', role: 'C' }, { t: 'ik uw punt', role: 'S' }, { t: 'begrijp', role: 'V', lab: 'à la fin' }, { t: 'blijf', role: 'V', lab: '2e place' }, { t: 'ik', role: 'S' }, { t: 'bij mijn standpunt', role: 'O' }], fr: 'Bien que je comprenne votre point, je maintiens mon point de vue.' },
      { label: 'Toch', cells: [{ t: 'Toch', role: 'C' }, { t: 'stel', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'voor', role: 'F' }, { t: 'om te wachten', role: 'O' }], fr: 'Pourtant, je propose d’attendre.' },
      { label: 'Dat klopt, maar', cells: [{ t: 'Dat klopt,', role: 'O' }, { t: 'maar', role: 'C' }, { t: 'de schade', role: 'S' }, { t: 'wordt', role: 'V' }, { t: 'elk jaar', role: 'T' }, { t: 'groter', role: 'M' }], fr: 'C’est vrai, mais les dégâts s’aggravent chaque année.' },
    ],
    foot: { kind: 'trap', text: 'Après //maar// (« mais »), **pas d’inversion** : //maar de schade wordt…//. Après //toch// en tête : inversion (//Toch stel ik…//). Après //hoewel// : verbe **à la fin**, puis la principale commence par le **verbe**.' },
    notes: "Résumé de la séquence par les ordres des mots. « maar » est une conjonction de coordination : elle ne compte pas dans l’ordre (maar de schade wordt…). « Toch » et « weliswaar » en tête : inversion. « Hoewel » : la subordonnée occupe la première place, donc la principale commence par le verbe (blijf ik). Piège francophone : « Bien que je comprenne, je maintiens » → « Hoewel ik begrijp, ik blijf » est faux.",
  });

  d.compare({
    title: 'Le piège classique : toch n’est pas tot', tag: 'PIÈGE', page: 'Livret p. 21',
    intro: 'Deux mots proches, deux sens, deux sons.',
    left: { h: 'TOCH [tox]', color: 'accent1', icon: 'FaBalanceScale', items: ['**pourtant, quand même** : l’arme de la réfutation — //Toch stem ik tegen.//', '**n’est-ce pas ?** : adoucit une demande — //U komt toch naar de vergadering?//', 'En fin de phrase : //Wij vertegenwoordigen mevrouw Dubois, toch?//'] },
    right: { h: 'TOT [tot]', color: 'accent2', icon: 'FaClock', items: ['**jusqu’à** : //Tot ziens! · Tot straks!// (palier 1)', '//Annulering is mogelijk tot 24 uur vooraf.//', '//van 7 tot 18 uur//'] },
    mid: '≠',
    foot: { kind: 'trap', text: 'Prononciation : //toch// avec le **ch** rauque [tox] ; //tot// se termine par un **t** net. Ne confondez pas.' },
    max: 18,
    notes: "Page 21 du livret. Remarque : dans l’exemple du livret « U komt toch naar de vergadering? », « toch » n’est pas en fin de phrase mais après le sujet et le verbe (particule modale) ; la place finale correspond à la question de confirmation (« …, toch? »), comme dans la ligne 3 du dialogue. Faire répéter la paire toch / tot pour l’oreille.",
  });

  d.exercise({
    title: '8 Geef toe… en weerleg', tag: 'COUCHE 2', page: 'Livret p. 21',
    instr: 'Répondez en deux temps : **concédez** (weliswaar / dat klopt / ik begrijp dat), puis **réfutez** (maar / toch / echter). Une phrase par mécanique. Seul · 6 min.',
    number: false, gap: 2, qGap: 8,
    items: [
      { q: '**1** « De renovatie is veel te duur! »', a: 'Dat klopt, **maar** de schade wordt elk jaar groter. / De renovatie is **weliswaar** duur, **maar** uitstel kost meer.' },
      { q: '**2** « We kunnen de werken nog een jaar uitstellen. »', a: 'Dat klopt **weliswaar**, **maar** het reservefonds is bijna leeg.' },
      { q: '**3** « De syndicus beslist toch alles alleen. »', a: 'De syndicus heeft **weliswaar** veel taken, **maar** de vergadering beslist door te stemmen.' },
      { q: '**4** « Een tweede offerte is tijdverlies. »', a: 'Ik begrijp dat. **Toch** kan een tweede offerte de prijs verlagen.' },
    ],
    traps: ['Concession = reconnaître un **fait**, pas céder', '**maar** : pas d’inversion', '**Toch** en tête : verbe en 2e place'],
    notes: "Production semi-libre : donner un modèle par phrase, accepter toute réponse correcte avec concession puis réfutation. Autres modèles : 1. « Ik begrijp dat de kostprijs hoog is. Toch is wachten riskant. » 2. « Uitstellen is weliswaar mogelijk, maar het wordt elk jaar duurder. » 3. « Hoewel hij veel doet, beslist hij niet alleen: de vergadering stemt. » 4. « Dat klopt weliswaar, maar twee weken wachten verandert niets. » Dans l’objection 3, « toch » est une particule modale (« après tout ») et ne se traduit pas toujours.",
    notesA: "Faire lire à voix haute avec intonation : la concession monte, la réfutation descend. Reprendre les erreurs d’ordre des mots (« maar stemt de vergadering » est faux ; « maar de vergadering stemt » est correct).",
  });

  d.compare({
    title: 'TAAK 5 : het minidebat', tag: 'ORAL', page: 'Livret p. 22',
    intro: 'Mini-assemblée à quatre : **deux débatteurs, un président, un observateur** · **2 rondes de 6 minutes**, rôles tournants. L’observateur coche : concession-réfutation · connecteurs variés · aucune interruption. Le président : //Meneer X, u hebt het woord.//',
    left: { h: 'ROL A — VOOR de onmiddellijke renovatie', color: 'accent3', icon: 'FaCheck', items: ['**Vos arguments** : la schade grandit (//wordt elk jaar groter//) · le report coûtera plus cher · la sécurité', 'Concédez le prix : //De kostprijs is weliswaar hoog, maar…//', '**Objectif secret** : obtenir un vote **aujourd’hui**'] },
    right: { h: 'ROL B — TEGEN (eerst een tweede offerte)', color: 'accent1', icon: 'FaBalanceScale', items: ['**Vos arguments** : € 86.500 sans comparaison · reservefonds presque vide · une 2e offerte = économie possible', 'Concédez l’urgence : //Dat klopt, maar twee weken wachten verandert niets.//', '**Objectif secret** : obtenir le report en novembre (le compromis du PV réel !)'] },
    max: 16,
    notes: "Modalités : 4 par groupe (A, B, président, observateur). Ronde 1 : 6 minutes ; on tourne les rôles ; ronde 2 : 6 minutes. Le président donne la parole (« Meneer X, u hebt het woord. ») et fait respecter le temps ; l’observateur note le nombre de concessions-réfutations et de connecteurs variés. Les objectifs secrets créent le débat : A veut un vote aujourd’hui, B veut le report en novembre (c’est la décision du PV de l’exercice 7). Après le jeu : débrief de 2 minutes — quelle concession a été la plus efficace ?",
  });

  d.table({
    title: 'D5 · Zo zeg je dat : au service clientèle', tag: 'WOORDENSCHAT', page: 'Livret p. 22a',
    headers: ['NEDERLANDS', 'FRANÇAIS'], colW: [6.2, 5.93], size: 16,
    rows: [
      ['%%het%% kasticket (NL : ^^de^^ kassabon)', 'le ticket de caisse (belgicisme)'],
      ['De garantie loopt nog / is verlopen.', 'La garantie court encore / a expiré.'],
      ['iets omruilen · terugbetalen (séparables)', 'échanger · rembourser quelque chose'],
      ['^^de^^ tegoedbon', 'un bon d’achat (un avoir)'],
      ['Het werkte maar twee weken.', 'Ça n’a fonctionné que deux semaines.'],
      ['Zou ik de verantwoordelijke kunnen spreken?', 'Pourrais-je parler au responsable ?'],
      ['^^de^^ solden (pl.) · ontgoocheld', 'les soldes (belgicisme) · déçu'],
      ['Ik begrijp dat u ontgoocheld bent. Toch…', 'Je comprends que vous soyez déçu. Pourtant…'],
    ],
    notes: "Vocabulaire du livret (« Zo zeg je dat »), avec deux ajouts : de solden (les soldes, belgicisme ; en néerlandais des Pays-Bas : de uitverkoop) et la phrase « Ik begrijp dat u ontgoocheld bent. Toch… » (concession du vendeur dans le jeu de rôle). « Het kasticket » est la forme belge ; « de kassabon » est aussi courante. « omruilen » et « terugbetalen » sont séparables : « Ik ruil het om », « We betalen het terug ».",
  });

  d.compare({
    title: 'D5 · Een aankoop terugbrengen', tag: 'ORAL', page: 'Livret p. 22a',
    intro: 'Le client a ses arguments, le vendeur ses objections : **concéder d’abord, puis réfuter**. **2 rondes de 5 min**, rôles inversés. L’observateur coche : concessions variées (//weliswaar · dat klopt · toch · hoewel//), ton poli, accord trouvé ou non.',
    left: { h: 'ROL A — De klant', color: 'accent2', icon: 'FaUser', items: ['Achat défectueux : concédez **2 fois** (//U hebt weliswaar gelijk, maar… · Dat klopt, maar…//)', 'Réfutez avec **un fait précis** (date, prix) · proposez un **compromis**', 'Cartes : ① casque en panne après 3 semaines (extrait bancaire) · ② veste trop petite (de solden) · ③ aspirateur bruyant, garantie expirée depuis une semaine', '**Secret** : remboursement… mais échange accepté'] },
    right: { h: 'ROL B — De verkoper', color: 'accent1', icon: 'FaUserTie', items: ['**3 objections** : pas de ticket · garantie · mauvaise utilisation', 'Concédez **1 fois** : //Ik begrijp dat u ontgoocheld bent. Toch…//', 'Proposez une **solution**', '**Secret** : bon d’achat, pas d’argent… sauf si le client vous convainc', 'Imprévu : votre responsable n’est pas là !'] },
    max: 15,
    notes: "Modalités : binômes (A client, B vendeur) et un observateur si la classe est impaire ; ronde 1, puis on inverse avec une autre carte. Rappeler le vouvoiement (u). Pour la carte ③ : la garantie a expiré depuis une semaine : le client peut concéder (« De garantie is weliswaar verlopen, maar… ») et réfuter avec un fait (« het apparaat maakte al lawaai in de eerste maand »). Un modèle de dialogue suit (bonus).",
  });

  d.dialogue({
    title: 'D5 Modèle : de koptelefoon', tag: '+ BONUS', page: 'Hors syllabus',
    lines: [
      ['VERKOPER', '«Goedemiddag, waarmee kan ik u helpen?»', '1'],
      ['KLANT', '«Goedemiddag. Ik breng deze koptelefoon terug: hij is na drie weken kapot.»', '2'],
      ['VERKOPER', '«Ik begrijp dat u ontgoocheld bent. Toch heb ik uw kasticket nodig.»', '3'],
      ['KLANT', '«U hebt weliswaar gelijk, maar ik heb het ticket niet meer. Hier is mijn bankuittreksel: ik heb op 12 september betaald.»', '4'],
      ['VERKOPER', '«Dat klopt, maar de garantie dekt geen verkeerd gebruik.»', '5'],
      ['KLANT', '«Dat klopt weliswaar, maar hij werkte maar drie weken. Kunt u hem dan omruilen?»', '6'],
      ['VERKOPER', '«Ik kan u een tegoedbon aanbieden, maar geen terugbetaling.»', '7'],
      ['KLANT', '«Goed, dan neem ik een tegoedbon. Bedankt voor uw begrip!»', '8'],
    ],
    colors: { VERKOPER: 'accent1', KLANT: 'accent2' },
    notes: "Mini-dialogue ajouté à titre de modèle (carte ① : le casque en panne, sans ticket mais avec un extrait bancaire). Faire repérer les concessions (Ik begrijp dat…, U hebt weliswaar gelijk, Dat klopt weliswaar) et les réfutations (Toch…, maar…). Le compromis final : bon d’achat. Lire à deux voix, puis inverser les rôles et changer la carte.",
  });

  d.steps({
    title: 'TAAK 6 · étape 1 : de voorbereiding', tag: 'ORAL', page: 'Livret p. 23',
    intro: 'Vous avez expliqué (TAAK 1), écrit (2), pris position (3), rendu compte (4) et débattu (5). Place à la **grandeur nature** : une assemblée générale complète, en groupe. Préparation · 8 min.',
    steps: [
      { h: 'Les rôles', n: '1', color: 'accent2', lines: ['**De syndicus** : préside, présente l’agenda', '**De notulist** : prendra le PV', '**3 ou 4 mede-eigenaars**, dont le représentant de mevrouw Dubois (avec **volmacht**)'] },
      { h: 'Les deux points', n: '2', color: 'accent3', lines: ['**Punt 1** : la rénovation de la façade', '**Punt 2** : la sécurisation de la porte d’entrée (TAAK 2 !)'] },
      { h: 'Les positions', n: '3', color: 'accent1', lines: ['Chaque copropriétaire prépare sa position en **mots-clés** sur les **deux** points', 'Utilisez la checklist (diapositive suivante)'] },
    ],
    notes: "Constituer les groupes de 5 ou 6 (syndic, notulist, trois ou quatre copropriétaires). Chaque copropriétaire prépare des mots-clés pour les deux points d’agenda ; le représentant de mevrouw Dubois défend la sécurisation de la porte (c’est la demande de la TAAK 2) et doit présenter sa volmacht. Le syndic prépare l’ordre du jour avec des nominalisations (« Bespreking van… », « Stemming over… »).",
  });

  d.checklist({
    title: 'TAAK 6 : la checklist de réemploi', tag: 'ORAL', page: 'Livret p. 23',
    intro: 'Cochez pendant la préparation : chaque ligne a un **minimum**.',
    items: [
      'Nominalisations (//de stemming, de goedkeuring, het uitstellen van…//) — **min. 5**',
      'Connecteurs argumentatifs (//enerzijds / anderzijds, echter, daarentegen, ten slotte//) — **min. 4**',
      'Concessions-réfutations (//weliswaar… maar, dat klopt maar, toch//) — **min. 3**',
      'Acquis des paliers 5–6 (relatives, zodra / tenzij, zou, passif, discours indirect) — **min. 5**',
      'Lexique de la copropriété (mindmap 7.1) — **min. 10**',
    ],
    boxColor: 'accent3',
    notes: "Tableau « Checklist de réemploi » du livret (minimum 5 / 4 / 3 / 5 / 10). Les étudiants le recopient et cochent pendant la préparation puis pendant l’assemblée ; les groupes observateurs utilisent la mini-grille avec les mêmes lignes.",
  });

  d.scene({
    title: 'TAAK 6 · étape 2 : de vergadering', tag: 'ORAL', page: 'Livret p. 24', img: 'p7_27_12',
    text: ['Le syndic **ouvre** : //De vergadering is geopend.// Il présente chaque point avec des **nominalisations** et distribue la parole.', '**Débat contradictoire**, puis **vote à main levée** sur chaque point : //Wie is voor? Tegen? Onthoudingen?//', 'Le notulist note **décisions et scores**. Les autres groupes observent avec la mini-grille.'],
    ask: 'Quel connecteur ouvrira votre première intervention : //wat … betreft//, //enerzijds//, //echter// ?',
    notes: "Durée : 15 à 20 minutes par groupe ; si la classe a plusieurs groupes, un groupe joue pendant que l’autre observe, puis on échange. Le syndic dit : « De vergadering is geopend. Punt 1: de renovatie van de gevel. » Le président donne la parole (« Meneer X, u hebt het woord »). Vote : « Wie is voor? Tegen? Onthoudingen? » Le notulist note les scores (voor, tegen, onthouding).",
  });

  d.exercise({
    title: 'TAAK 6 · étape 3 : de notulen', tag: 'ÉCRIT', page: 'Livret p. 24', mode: 'a',
    instr: 'Écrit · 10 à 12 phrases · à terminer à la maison. Chacun rédige le PV de **SA** réunion au style officiel : la pièce maîtresse de votre dossier du palier 7.',
    number: false, gap: 8,
    items: [
      { t: '**Passif impersonnel** : //Er werd beslist dat…//' },
      { t: '**Discours indirect** pour les positions : //zei dat · vroeg of//' },
      { t: '**Nominalisations** dans les intitulés : //Punt 1 — Renovatie van de gevel//' },
      { t: '**Résultats des votes** chiffrés : //met 7 stemmen voor, 1 tegen en 1 onthouding//' },
    ],
    expect: ['**10 à 12 phrases**', 'Style **officiel**', 'Modèle : diapositive suivante'],
    notes: "Production écrite finale. Chaque étudiant rédige le PV de la réunion jouée par son groupe. Critères : passif impersonnel (Er werd…), discours indirect (zei dat, vroeg of), nominalisations dans les intitulés, scores corrects (le total des voix doit égaler le nombre de présents). À rendre à la séance suivante (dossier du palier 7).",
  });

  d.exhibit({
    title: 'TAAK 6 : notulen-modèle', tag: 'ÉCRIT', page: 'Livret p. 24',
    label: 'MODÈLE', docTitle: 'Notulen — Algemene vergadering (uittreksel)',
    lines: [
      ['Aanwezig', '9 mede-eigenaars (waarvan 1 bij volmacht). De vergadering werd om 19.05 uur geopend.'],
      ['Punt 1', 'Renovatie van de gevel: De syndicus lichtte de offerte toe (€ 86.500). Mevrouw Peeters zei dat de schade elk jaar groter werd. De heer Yilmaz vroeg of een tweede offerte mogelijk was. Er werd beslist om de stemming te verplaatsen naar november.'],
      ['Punt 2', 'Beveiliging van de inkomdeur: De vertegenwoordiger van mevrouw Dubois zei dat er twee incidenten waren geweest. Er werd voorgesteld om het slot te vervangen. Het voorstel werd goedgekeurd met 7 stemmen voor, 1 tegen en 1 onthouding.'],
      ['Slot', 'De vergadering werd om 20.15 uur afgesloten.'],
    ],
    notes: "Modèle de 10 phrases : intitulés nominaux (Renovatie, Beveiliging), passif impersonnel (Er werd beslist, Er werd voorgesteld), passif personnel (werd geopend, werd goedgekeurd, werd afgesloten), discours indirect (zei dat, vroeg of), résultat chiffré (7 + 1 + 1 = 9 présents). À adapter à la réunion jouée.",
  });

  d.steps({
    title: 'Variante : de buurtvergadering', tag: 'ORAL', page: 'Livret p. 24a',
    intro: 'Pour un dossier de la **vie courante** : la TAAK 6 se joue en **comité de quartier**. Même déroulé, mêmes exigences.',
    steps: [
      { h: 'De voorbereiding', n: '1', color: 'accent2', lines: ['Le groupe choisit **deux points** (speelstraat, buurtfeest, passage piéton dangereux, geveltuintjes, vélos partagés…) en **style nominal**', 'Rôles : **voorzitter**, **notulist**, 3 ou 4 **bewoners** avec une carte de profil'] },
      { h: 'De vergadering', n: '2', color: 'accent3', lines: ['Le président ouvre, présente chaque point, distribue la parole', 'Débat avec **concessions**, puis vote à main levée : //Wie is voor? Tegen? Onthoudingen?//'] },
      { h: 'Twee verslagen', n: '3', color: 'accent1', lines: ['**Notulen** (10 à 12 phrases, style officiel)', '**ET** un message informel de 5 phrases à un voisin absent', 'Même contenu, **deux registres**'] },
    ],
    foot: { kind: 'keep', label: 'Checklist', text: 'Identique à l’étape 1, sauf « Lexique de la copropriété » → « Lexique du quartier (activités D1 à D5) » : minimum 10.' },
    notes: "Variante de la page 24a pour les étudiants qui préfèrent un dossier de la vie courante. Les cartes de profil (jeune famille, retraité·e, commerçant·e, cycliste…) donnent à chaque bewoner une position défendable. Le double rapport (notulen formelles + message informel de 5 phrases) reprend l’activité D4 de la séance 14.",
  });

  d.exercise({
    title: 'Toch, hoewel, weliswaar : quel ordre ?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Choisissez la bonne forme. Seul · 4 min.',
    items: [
      'Toch {{ik stem}} / <<stem ik>> tegen.',
      'Hoewel ik uw punt begrijp, {{ik blijf}} / <<blijf ik>> bij mijn standpunt.',
      'Weliswaar {{de werken zijn}} / <<zijn de werken>> duur, maar noodzakelijk.',
      'De offerte is hoog, maar {{stel ik voor}} / <<ik stel voor>> om te wachten.',
      'U komt {{tot}} / <<toch>> naar de vergadering?',
      '{{Tot}} / <<Toch>> vind ik het een goed idee.',
    ],
    traps: ['**maar** : pas d’inversion (//maar ik stel voor…//).', '**Toch / Weliswaar** en tête : inversion.', '**Hoewel** : verbe à la fin, puis verbe en tête.'],
    notes: "Exercice ajouté (4 minutes) pour fixer l’ordre des mots et le piège toch / tot. Phrase 4 : « maar » ne provoque pas d’inversion. Phrase 5 : « toch » particule modale (« n’est-ce pas ? »). Phrase 6 : « Toch vind ik… » = pourtant je trouve… Faire lire chaque phrase correcte à voix haute.",
    notesA: "Si un étudiant choisit « maar stel ik voor », rappeler que maar se comporte comme et / of : il ne compte pas dans l’ordre des mots.",
  });

  d.checklist({
    title: 'Bilan du palier 7 : je sais…', tag: 'AUTO-ÉVALUATION', page: 'Hors syllabus',
    intro: 'Cochez ce que vous savez faire **sans notes**.',
    items: [
      'Expliquer **syndicus, gemene delen, volmacht, quotiteiten** avec une relative',
      'Transformer un verbe en **nom** : //de verdeling van de kosten · het uitstellen van de werken//',
      'Construire une prise de position : **wat … betreft → enerzijds / anderzijds → echter → ten slotte → kortom**',
      'Rapporter une réunion : **Er werd beslist dat… · zei dat · vroeg of**',
      'Concéder puis réfuter : **weliswaar… maar · dat klopt, maar · toch · hoewel**',
      'Rédiger des **notulen** de 10 à 12 phrases au style officiel',
    ],
    boxColor: 'accent3',
    notes: "Auto-évaluation de fin de palier (hors syllabus) : les étudiants cochent ce qu’ils maîtrisent ; ce qui reste vide devient la priorité de révision avant le palier 8. Une minute de partage : un point fort, un point à travailler.",
  });

  d.closing({
    cliff: 'Séance 16 : ouverture du **palier 8**, **De schatting** : estimer un bien et justifier une valeur — avec tout ce que vous savez maintenant argumenter.',
    homework: ['Terminer les **notulen** de VOTRE assemblée (TAAK 6) : 10 à 12 phrases.', 'Rassembler le **dossier du palier 7** : TAAK 2, 4 et 6 + activités D2 à D5.', 'Réviser les **nominalisations**, les **connecteurs** et la **concession** (p. 8, 12, 20).'],
    exit: 'Concédez puis réfutez : **« De syndicus beslist alles alleen. »**',
    notes: "Réponse attendue (exemples) : « Dat klopt weliswaar, maar de vergadering stemt over de beslissingen. » ou « De syndicus heeft weliswaar veel taken, maar hij beslist niet alleen. » Vérifier : concession puis réfutation, pas d’inversion après maar.",
  });
};
