// Séance 9 — Palier 6 · Het advies (Séquence 6.4, conditionnel ZOU) — Livret p. 15–18a
exports.meta = {
  n: 9, slug: 'Het_advies', title: 'Het advies',
  subtitle: 'Le conditionnel ZOU — demander poliment, conseiller, supposer',
  pages: 'Livret p. 15–18a', img: 'p6_19_8', time: '6.4', sceneLabel: 'SÉQUENCE',
  block: 'Palier 6 · Verhuur en beheer',
  coverNotes: "Séance consacrée à la séquence 6.4 : zou, le « smoking verbal » du gestionnaire. On étudie les quatre fonctions (demande polie, conseil, hypothèse prudente, condition irréelle), on reformule des phrases brutales (ex. 8), on lit le courriel inquiet de mevrouw Dubois (ex. 9), on rédige le mail de conseil (TAAK 4), puis D4 applique zou au service clientèle (la panne d’internet de Stef). Pages couvertes : p. 15 à 18a du livret.",
};

exports.build = (d) => {
  d.cover();

  d.mission({
    produce: 'Demander **poliment**, **conseiller** et formuler une **hypothèse prudente** avec //zou// ; rédiger un **mail de conseil** formel.',
    language: '//Zou u … kunnen / willen + inf.?// — //Ik zou … · U zou beter …// — //Dat zou … kunnen zijn// — //Als ik u was, zou ik …//',
    skills: 'Reformuler poliment · lire un courriel inquiet · écrire un mail de conseil (10 à 12 phrases) · parler au service clientèle',
    agenda: [['Rappel séance 8 : discours indirect', 6], ['6.4 · zou : formes et structures', 14], ['Woordenschat : conseil, politesse', 5], ['Ex. 8 Maak het beleefd', 10], ['Ex. 9 Lezen : de ongeruste mail', 12], ['TAAK 4 · het adviesmail', 15], ['D4 · De klantendienst aan de lijn', 18], ['Bonus · bilan', 10]],
    notes: "Durées indicatives sur 90 minutes. Pages 15 à 18a du livret. Zou se construit comme zullen (palier 4) : verbe conjugué en 2e position (ou en tête dans une question) et infinitif à la fin. Le point délicat est « Als ik u was, zou ik… » : après als, on emploie l’imperfectum et non zou.",
  });

  d.exercise({
    title: 'Rappel séance 8 : le discours indirect', tag: 'ÉCHAUFFEMENT', page: 'Rappel séance 8',
    instr: 'Rapportez au passé (Hij zei… · Hij vroeg…) — seul, 4 min, puis correction orale.',
    items: [
      '« Het is een lek. » → Hij zei [[dat het een lek was]].',
      '« Komt de loodgieter morgen? » → Hij vroeg [[of de loodgieter morgen kwam]].',
      '« Hoeveel kost de herstelling? » → Hij vroeg [[hoeveel de herstelling kostte]].',
      '« Ik heb geen tijd. » → Zij zei [[dat ze geen tijd had]].',
      '« Bel me morgen terug. » → Hij vroeg [[om hem morgen terug te bellen]].',
    ],
    aside: { label: 'RAPPEL', color: 'accent2', icon: 'FaLightbulb', lines: ['**dat / of / vraagwoord** : verbe **à la fin**', '**présent → imperfectum**', '**Demande** : //om … te// + infinitif', 'Cette séance : même place du verbe avec **zou**'] },
    notes: "Rappel de la séance 8. Faire répondre à l’oral. Le lien avec la séance du jour : le verbe part à la fin dans la subordonnée, et l’infinitif part à la fin avec zou. Phrase 3 : « hoeveel de herstelling kostte » prépare l’exercice 9 (« hoeveel de herstelling zou kosten »).",
    notesA: "Corriger phrase par phrase. Phrase 4 : « Zij zei dat ze geen tijd had » (ze ou zij accepté). Insister sur le verbe conjugué en dernière position dans la subordonnée.",
  });

  d.scene({
    title: 'Séquence 6.4 : zou, le mot le plus poli du métier', tag: 'FOCUS', page: 'Livret p. 15', img: 'p6_19_8', time: '6.4', sceneLabel: 'SÉQUENCE',
    text: ['«Betaal de herstelling!» ou «**Zou u** de herstelling **kunnen betalen**?» : même demande, **deux mondes**.', '**Focus : lignes 1, 8 et 9**', '«**Zou** jij het dossier **willen beheren**?»', '«Wat **zou** jij **doen** als eerste stap?»', '«Ik **zou** meteen de loodgieter **bellen**.»'],
    ask: 'Où est l’infinitif dans chaque phrase ? Avec quel verbe du palier 4 fait-on pareil ?',
    notes: "Réponse : l’infinitif est toujours à la fin (willen beheren, doen, bellen) ; même construction qu’avec zullen (palier 4 : ik zal u bellen). Fonctions : ligne 1 = demande polie ; ligne 8 = hypothèse (« que ferais-tu ? ») ; ligne 9 = conseil (« moi, j’appellerais… »).",
  });

  d.table({
    title: 'Les quatre fonctions de zou', tag: 'GRAMMATICA', page: 'Livret p. 16',
    headers: ['FONCTION', 'STRUCTURE', 'EXEMPLE DU MÉTIER'], colW: [2.6, 4.3, 5.23], boldCol: 0, size: 17,
    rows: [
      ['Demande polie', 'Zou u … kunnen / willen + inf.?', 'Zou u de documenten kunnen doorsturen?'],
      ['Conseil', 'Ik zou … + inf. · U zou beter …', 'Ik zou eerst een expert laten komen. U zou beter wachten.'],
      ['Hypothèse prudente', 'Dat zou … zijn / kunnen', 'Dat zou een probleem met de leiding kunnen zijn.'],
      ['Condition irréelle', 'Als ik u was, zou ik …', 'Als ik u was, zou ik de verzekering contacteren.'],
    ],
    foot: 'Formes : //ik · jij · u · hij · zij **zou**// — //wij · jullie · zij **zouden**//.',
    notes: "Tableau du livret (p. 16), à lire ligne par ligne. Faire varier le sujet : « Wij zouden graag… », « De eigenaar zou beter… ». Rappeler que zou n’est pas « zal » : zal = futur, zou = politesse, conseil, hypothèse. « de leiding » = la canalisation (belgicisme courant dans le bâtiment).",
  });

  d.blocks({
    title: 'Zou + infinitif en fin de phrase', tag: 'GRAMMATICA', page: 'Livret p. 15–16',
    intro: '**Zou** est le verbe conjugué (2e position, ou en tête dans une question) ; l’**infinitif** part **à la fin** — comme avec //zullen//.',
    rows: [
      { label: 'Demande', cells: [{ t: 'Zou', role: 'V' }, { t: 'u', role: 'S' }, { t: 'de documenten', role: 'O' }, { t: 'kunnen doorsturen', role: 'F' }], fr: 'Pourriez-vous transmettre les documents ?' },
      { label: 'Conseil', cells: [{ t: 'Ik', role: 'S' }, { t: 'zou', role: 'V' }, { t: 'eerst', role: 'T' }, { t: 'een expert', role: 'O' }, { t: 'laten komen', role: 'F' }], fr: 'Moi, je ferais d’abord venir un expert.' },
      { label: 'Hypothèse', cells: [{ t: 'Dat', role: 'S' }, { t: 'zou', role: 'V' }, { t: 'een probleem met de leiding', role: 'O' }, { t: 'kunnen zijn', role: 'F' }], fr: 'Ce pourrait être un problème de canalisation.' },
      { label: 'Condition', cells: [{ t: 'Als', role: 'C' }, { t: 'ik', role: 'S' }, { t: 'u', role: 'X', lab: '' }, { t: 'was', role: 'F' }, { t: 'zou', role: 'V' }, { t: 'ik', role: 'S' }, { t: 'de verzekering', role: 'O' }, { t: 'contacteren', role: 'F' }], fr: 'Si j’étais vous, je contacterais l’assurance.' },
    ],
    foot: { kind: 'trap', text: 'Le français met le conditionnel dans les deux propositions (//si j’étais… je ferais//) ; en néerlandais, **après //als// : l’imperfectum** : //Als ik u **was**, zou ik…// (✗ //Als ik u zou zijn//).' },
    notes: "Visualiser l’ordre des mots : zou prend la place du verbe conjugué ; l’infinitif ne bouge pas vers le verbe mais va à la fin. Dans la 4e ligne, la subordonnée en als renvoie was en fin de proposition ; la principale commence ensuite par zou (inversion, comme après toen). Faire construire une phrase de chaque type avec un autre sujet.",
  });

  d.table({
    title: 'Woordenschat : conseil, politesse et décision', tag: 'WOORDENSCHAT', page: 'Livret p. 16–18',
    headers: ['NEDERLANDS', 'FRANÇAIS', 'NEDERLANDS', 'FRANÇAIS'], colW: [3.2, 2.85, 3.2, 2.88], size: 16,
    rows: [
      ['%%het%% advies · adviseren', 'le conseil · conseiller', '^^de^^ beslissing', 'la décision'],
      ['aanraden (raadde aan)', 'recommander', 'afronden', 'finaliser, boucler'],
      ['geruststellen (stelde gerust)', 'rassurer', 'doorsturen', 'transmettre'],
      ['ongerust zijn', 'être inquiet', 'contacteren', 'contacter'],
      ['verwittigen', 'prévenir', '^^de^^ verzekering', 'l’assurance'],
      ['dekken (dekte)', 'couvrir', '^^de^^ leiding', 'la canalisation'],
      ['^^de^^ expert', 'l’expert', '^^de^^ klantendienst', 'le service clientèle'],
      ['ten eerste · bovendien · kortom', 'd’abord · de plus · bref', '^^de^^ storing', 'la panne'],
    ],
    notes: "Mots du courriel (ex. 9), de la TAAK 4 et de D4. Faire repérer les verbes séparables : aanraden (raadde aan), geruststellen (stelde gerust), doorsturen, afronden. Faire dire une phrase avec zou pour chaque verbe : « Ik zou u aanraden… ».",
  });

  d.exercise({
    title: '8 Maak het beleefd en professioneel', tag: 'COUCHE 2', page: 'Livret p. 16',
    instr: 'Reformulez chaque phrase brutale en version professionnelle avec **zou**. Plusieurs solutions correctes. Seul · 8 min.',
    items: [
      { q: '« Stuur me het contract! » (demande polie)', a: '**Zou u** me het contract **kunnen sturen**?' },
      { q: '« Bel de verzekering. » (Als ik u was…)', a: 'Als ik u **was**, **zou** ik de verzekering **bellen**.' },
      { q: '« Betaal de helft van de kosten. » (à la propriétaire)', a: '**Zou u** de helft van de kosten **willen betalen**?' },
      { q: '« Het is de oude leiding. » (hypothèse prudente)', a: 'Dat **zou** de oude leiding **kunnen zijn**.' },
      { q: '« Wacht op het verslag van de expert. » (U zou beter…)', a: 'U **zou beter** op het verslag van de expert **wachten**.' },
    ],
    traps: ['Infinitif **à la fin**', '//kunnen / willen// : demande polie', 'Autres solutions : //Het zou de oude leiding kunnen zijn.//', '✗ //Als ik u zou zijn//'],
    notes: "Exercice 8 du livret : seul, 8 minutes, puis correction orale en acceptant plusieurs solutions. Critères : zou en 2e position (ou en tête dans une question), infinitif à la fin, registre u. Phrase 5 : « U zou beter wachten op het verslag van de expert » est aussi correct.",
    notesA: "Pour chaque phrase, projeter la solution du livret puis demander une seconde formulation (kunnen ↔ willen, Ik zou… ↔ U zou beter…). Piège fréquent : « Als ik u zou zijn » (calque du français) ; la forme correcte est « Als ik u was ».",
  });

  d.exhibit({
    title: '9 Lezen: de ongeruste mail van mevrouw Dubois', tag: 'COUCHE 1', page: 'Livret p. 17',
    label: 'E-MAIL', docTitle: 'lek Waversesteenweg — ongerust',
    lines: [
      'Geachte heer,',
      'Bedankt voor uw telefoontje van gisteren. Eerlijk gezegd ben ik ongerust. Toen mijn man het gebouw beheerde, hadden we nooit problemen. Zou de huurder iets verkeerd hebben gedaan? Ik zou graag weten hoeveel de herstelling zou kosten, en of mijn verzekering de schade dekt. Zou u mij kunnen adviseren voordat ik een beslissing neem? Ik zou het dossier liefst deze week afronden.',
      'Met vriendelijke groeten, Christine Dubois',
    ],
    side: { label: 'À FAIRE · 8 MIN', color: 'accent2', lines: ['**1** Soulignez les **5 zou(den)** : demande polie, hypothèse ou souhait ?', '**2** Quelle phrase est à l’**imperfectum** ? Pourquoi ?', '**3** Que veut-elle savoir ? (**hoeveel**, **of**)'] },
    notes: "Compréhension de l’écrit : la propriétaire a reçu l’appel de la TAAK 3 et s’inquiète. Lecture silencieuse, soulignement des zou(den), puis mise en commun. Le courriel mêle trois outils du palier : zou, imperfectum (« Toen mijn man het gebouw beheerde, hadden we nooit problemen ») et discours indirect (« hoeveel… zou kosten », « of … dekt »).",
  });

  d.exercise({
    title: '9 Lezen: de ongeruste mail — réponses', tag: 'COUCHE 1', page: 'Livret p. 17',
    number: false, qGap: 14, max: 20,
    items: [
      { q: '**1.** Les cinq //zou(den)// et leur fonction', a: '//Zou de huurder iets … hebben gedaan?// (hypothèse) · //Ik zou graag weten// (souhait) · //hoeveel de herstelling zou kosten// (hypothèse) · //Zou u mij kunnen adviseren?// (demande polie) · //Ik zou … liefst afronden// (souhait)' },
      { q: '**2.** Phrase à l’imperfectum ? Pourquoi ?', a: '//Toen mijn man het gebouw beheerde, hadden we nooit problemen.// : situation **passée et habituelle** (le décor : règle 6.2)' },
      { q: '**3.** Discours indirect : que veut-elle savoir ?', a: '**hoeveel** de herstelling zou kosten · **of** haar verzekering de schade dekt' },
    ],
    notes: "Corrigé du livret. Question 1 : les fonctions peuvent être nuancées (souhait ≈ politesse). Question 2 : l’imperfectum décrit une situation passée et répétée (nooit problemen), non un événement précis. Question 3 : deux questions indirectes (hoeveel + of), verbe à la fin dans chacune.",
  });

  d.exercise({
    title: 'TAAK 4: het adviesmail', tag: 'ÉCRIT', page: 'Livret p. 18', mode: 'a',
    instr: 'Répondez à mevrouw Dubois : **10 à 12 phrases**, registre **formel**. Contenu imposé ci-dessous · seul · 15 min, puis relecture croisée.',
    number: false, gap: 8,
    items: [
      { h: 'Contenu imposé' },
      { t: '**Rassurez-la** et rapportez l’avis du plombier au discours indirect : //De loodgieter zei dat…// (inventez son diagnostic)' },
      { t: '**Deux conseils** avec zou : //Ik zou… · U zou beter…//' },
      { t: '**Une hypothèse prudente** : //Dat zou … kunnen zijn//' },
      { t: '**Une condition** : //als · tenzij// (palier 5)' },
      { t: 'Structure : //ten eerste · bovendien · kortom//' },
    ],
    expect: ['**10 à 12 phrases**', 'Registre **formel** (//Geachte mevrouw… Met vriendelijke groeten//)', 'Chaque **zou** : infinitif à la fin ?', 'Discours indirect : verbe à la fin ?', 'Relecture croisée en binôme'],
    sideW: 3.9,
    notes: "Tâche écrite de 15 minutes. Le binôme vérifie chaque zou (infinitif à la fin ?) et le discours indirect. Rappeler les formules de politesse écrites : « Geachte mevrouw Dubois, … Met vriendelijke groeten ». Le modèle à la diapositive suivante n’est pas un corrigé unique.",
  });

  d.exhibit({
    title: 'TAAK 4: exemple de mail', tag: 'ÉCRIT', page: 'Livret p. 18',
    label: 'MODÈLE', docTitle: 'Antwoord aan mevrouw Dubois',
    lines: [
      'Geachte mevrouw Dubois,',
      'Bedankt voor uw bericht. U kunt gerust zijn: de situatie is onder controle. **Ten eerste** zei de loodgieter dat het lek niet ernstig was. Hij zei ook dat een oude leiding de oorzaak was. Dat **zou** een gewone slijtage **kunnen zijn**, en niet de schuld van de huurder.',
      '**Bovendien zou** ik u **aanraden** om de verzekering vandaag nog te contacteren. Als u dat wenst, neem ik zelf contact op met de verzekering. Ik **zou** ook een tweede offerte **vragen**, **tenzij** de eerste prijs u redelijk lijkt. **Zou** u mij vóór vrijdag **kunnen laten weten** wat u beslist?',
      '**Kortom**: er is geen reden tot paniek. Wij houden u op de hoogte zodra de expert zijn verslag heeft gestuurd. Met vriendelijke groeten, Stef — Immo Van Damme',
    ],
    gap: 7,
    notes: "Exemple de réponse (12 phrases) : discours indirect (zei dat… was), quatre zou, hypothèse prudente (Dat zou … kunnen zijn), conditions (Als u dat wenst, tenzij), connecteurs (ten eerste, bovendien, kortom), registre formel (u, Geachte, Met vriendelijke groeten). Faire repérer chaque exigence du livret dans le texte projeté.",
  });

  d.table({
    title: 'D4 Direct ou poli ? Avec zou', tag: 'COUCHE 2', page: 'Livret p. 18a',
    intro: 'Dagelijks leven · Spreken. **Mercredi**, l’internet de Stef ne marche plus depuis trois jours : une demande **polie et précise** obtient plus vite une solution. Reformulez avec //zou//.',
    headers: ['DIRECT (À ÉVITER)', 'POLI ET EFFICACE (AVEC ZOU)'], colW: [4.2, 7.93], size: 18,
    rows: [
      ['Ik wil een technicus!', '[[Zou er deze week een technicus kunnen langskomen?]]'],
      ['Geef mijn geld terug!', '[[Zou ik mijn geld kunnen terugkrijgen?]]'],
      ['Dat is uw fout.', '[[Zou het kunnen dat er een storing is in mijn buurt?]]'],
      ['Doe iets!', '[[Wat zou u mij aanraden?]]'],
    ],
    foot: 'Plusieurs formulations correctes : vérifiez surtout **zou** en 2e position (ou en tête) et l’**infinitif à la fin**.',
    notes: "Le livret présente directement les deux colonnes ; ici, les étudiants proposent d’abord leur reformulation polie (4 minutes), puis on projette la version du livret. Exiger : zou + infinitif à la fin, et un ton qui reste factuel (« Zou het kunnen dat… » pour suggérer une cause sans accuser).",
    notesA: "Version du livret. Faire remarquer la logique : on remplace l’ordre ou l’accusation par une question ou une hypothèse. Autres solutions acceptées : « Zou u mijn geld kunnen terugstorten? », « Wat zou u in mijn plaats doen? ».",
  });

  d.table({
    title: 'D4 Zo zeg je dat : service clientèle', tag: 'WOORDENSCHAT', page: 'Livret p. 18a',
    headers: ['ZO ZEG JE DAT', 'FRANÇAIS'], colW: [6.0, 6.13], size: 17,
    rows: [
      ['Een ogenblikje, blijft u even aan de lijn.', 'Un instant, ne quittez pas.'],
      ['Zou u me kunnen doorverbinden met…?', 'Pourriez-vous me passer… ?'],
      ['Mijn internet valt steeds uit.', 'Ma connexion coupe sans arrêt.'],
      ['Dat werd twee keer aangerekend.', 'Cela a été facturé deux fois. (//aanrekenen// : belgicisme)'],
      ['een klacht indienen', 'déposer une plainte'],
      ['Zou het niet mogelijk zijn om…?', 'Ne serait-il pas possible de… ?'],
    ],
    notes: "Expressions pour la conversation téléphonique. « Dat werd twee keer aangerekend » est un passif (séquence 6.5) : en Belgique, aanrekenen = facturer. « valt uit » : uitvallen est séparable. La dernière expression sert à insister poliment (imprévu du jeu de rôle).",
  });

  d.compare({
    title: 'D4 Rollenspel: klant en medewerker', tag: 'ORAL', page: 'Livret p. 18a',
    intro: 'Jeu de rôle · **2 rondes**, rôles inversés. Cartes : ① internet en panne depuis trois jours · ② colis commandé en ligne qui n’arrive jamais · ③ facture d’électricité payée deux fois… ou **votre propre problème réel** !',
    left: { h: 'ROL A — De klant (u-vorm !)', color: 'accent2', icon: 'FaUser', items: ['Début du problème à l’**imperfectum** : //Maandag werkte alles nog, maar…//', '**3 demandes polies** avec zou', 'Rapportez le premier conseiller : //Uw collega zei dat…//'] },
    right: { h: 'ROL B — De medewerker', color: 'accent1', icon: 'FaUserTie', items: ['Identifiez le client : //Zou u uw klantennummer kunnen geven?//', '**2 questions** + un conseil : //Ik zou de modem eerst opnieuw opstarten.//', 'Une solution sous **condition** (//als · tenzij//)', 'Imprévu : le client insiste (//Zou het niet mogelijk zijn om…?//) → compromis'] },
    max: 17,
    notes: "Binômes, deux rondes, rôles inversés. Le client réutilise les trois outils du palier : imperfectum (récit du début du problème), discours indirect (ce qu’a dit le premier conseiller), zou (demandes polies). L’imprévu : la solution du medewerker ne convient pas ; le client insiste poliment et un compromis est trouvé.",
  });

  d.dialogue({
    title: 'D4 Modèle : un appel au service clientèle', tag: 'DIALOOG', page: 'Livret p. 18a',
    colors: { KLANT: 'accent2', MEDEWERKER: 'accent1' },
    lines: [
      ['KLANT', '«Goedemiddag, mijn internet valt steeds uit. Maandag werkte alles nog, maar sinds dinsdag heb ik geen verbinding meer.»', '1'],
      ['MEDEWERKER', '«Zou u uw klantennummer kunnen geven?»', '2'],
      ['KLANT', '«Natuurlijk, het is 4521. Uw collega zei dat een technicus zou langskomen, maar niemand is gekomen. Zou er deze week iemand kunnen komen?»', '3'],
      ['MEDEWERKER', '«Ik zou eerst de modem opnieuw opstarten. Als dat niet helpt, plan ik een afspraak in.»', '4'],
      ['KLANT', '«Zou het niet mogelijk zijn om vandaag nog iemand te sturen? Ik werk van thuis.»', '5'],
      ['MEDEWERKER', '«Dat zou kunnen, tenzij alle technici bezet zijn. Een ogenblikje, blijft u even aan de lijn.»', '6'],
    ],
    legend: { label: 'À REPÉRER', color: 'accent5', icon: 'FaSearch', lines: ['**Imperfectum** : werkte', '**Discours indirect** : zei dat…', '**Zou** : 6 fois (futur dans le passé inclus)', '**Condition** : als · tenzij'] },
    notes: "Modèle de dialogue (non issu du livret) : à projeter après le jeu de rôle pour comparer. Il combine imperfectum (werkte), discours indirect (Uw collega zei dat een technicus zou langskomen), zou (zou u…, zou er…, zou het niet mogelijk zijn…, ik zou eerst…, dat zou kunnen) et conditions (als dat niet helpt, tenzij…). « zou langskomen » : zou exprime ici le futur dans le passé (rapporté).",
  });

  d.exercise({
    title: 'Zou, zouden of was?', tag: '+ BONUS', page: 'Hors syllabus',
    instr: 'Complétez avec //zou · zouden · was · waren//. Seul · 4 min.',
    items: [
      'Als ik u [[was]], [[zou]] ik meteen de verzekering bellen.',
      '[[Zou]] u de sleutels morgen kunnen terugbrengen?',
      'Wij [[zouden]] graag een afspraak maken.',
      'De huurders [[zouden]] liever vandaag nog een technicus zien.',
      'Als wij jou [[waren]], [[zouden]] we eerst een expert bellen.',
      'Het [[zou]] een probleem met de verwarming kunnen zijn.',
    ],
    traps: ['**zou** (singulier) · **zouden** (pluriel)', 'Après **als** : l’imperfectum (**was / waren**), pas //zou//', 'Infinitif **à la fin**'],
    notes: "Exercice ajouté (4 min) : fixe l’accord zou / zouden et le piège « Als ik u zou zijn » (calque du français). Phrase 5 : sujet pluriel dans les deux propositions (waren / zouden).",
  });

  d.closing({
    cliff: 'Séance 10 : **la solution**. Comment annoncer ce qui est fait et ce qui est en cours ? //De lekkage **wordt** hersteld// — le passif avec **worden**, puis votre **dossier final** (TAAK 6).',
    homework: ['Terminer le **adviesmail** (TAAK 4) : chaque zou + infinitif à la fin.', 'Apprendre les **quatre fonctions de zou** (p. 16), avec un exemple pour chacune.', '**D4** : écrire 3 demandes polies au service clientèle avec zou.', 'Repérer 3 phrases au **passif** dans l’état des lieux (p. 9) et dans le dialogue (p. 2).'],
    exit: 'Transformez poliment « Geef me uw nummer! » (**Zou u…?**) et donnez un conseil (**Als ik u was, zou ik…**).',
    notes: "Ticket de sortie à l’oral. Réponse attendue : « Zou u me uw nummer kunnen geven? » et « Als ik u was, zou ik … + infinitif ». Vérifier la place de kunnen en fin de phrase.",
  });
};
