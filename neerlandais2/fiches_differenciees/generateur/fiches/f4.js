const { runHead } = require('../lib');

const MAIL_IN = (small) => `<div class="mail" style="${small ? 'font-size:8.4pt;margin:2mm 0 0' : ''}"><div class="bar">✉ INBOX · 1 nieuw bericht</div>
<div class="hdr"><div><span class="k">Van</span><span>ines.vermeulen@verbeke.be</span></div><div><span class="k">Onderwerp</span><b>Uitnodiging sollicitatiegesprek</b></div></div>
<div class="body nl" style="font-weight:500;color:#1d2433">
<p>Beste kandidaat,</p>
<p>Bedankt voor uw sollicitatie voor de functie van administratief bediende. Wij nodigen u graag uit voor een gesprek op <b>dinsdag 17 november om 10 uur</b>, in ons kantoor: Kerkstraat 12, 1000 Brussel (tweede verdieping).</p>
<p>Kunt u ook een <b>kopie van uw diploma</b> meesturen? Wij verwachten uw antwoord voor vrijdag 13 november.</p>
<p style="margin:0">Met vriendelijke groeten,<br>Ines Vermeulen · Personeelsdienst · Firma Verbeke</p></div></div>`;

const PROBLEM = `<p style="margin:2mm 0 0"><b>Problème :</b> mardi 17, tu n'es pas libre (tu as cours). Tu es libre <b>mercredi 18</b> et <b>jeudi 19 novembre</b>.</p>`;

const situation = `Tu as postulé chez <b>Verbeke</b>. Tu reçois ce mail de la responsable du personnel. Tu dois lui <b>répondre par écrit</b>, poliment.${MAIL_IN(true)}${PROBLEM}`;

function answerPage() {
  return `<section class="page">
  ${runHead('Een formele e-mail · Fiche 4', 'Feuille-réponse · toutes les variantes')}
  <div class="kicker">Ma réponse</div><h1>✉ Mijn antwoord</h1>
  <div class="mail"><div class="bar">✉ NIEUW BERICHT</div>
  <div class="hdr"><div><span class="k">Aan</span><span>ines.vermeulen@verbeke.be</span></div>
  <div><span class="k">Onderwerp</span><span class="fill" style="min-width:120mm"></span></div>
  <div><span class="k">Bijlage 📎</span><span class="fill" style="min-width:120mm"></span></div></div>
  <div class="body">${'<div class="rule"></div>'.repeat(17)}</div></div>
  <p class="small muted">Nombre de mots : ........ &nbsp; (A1 : 40 à 60 · A2 : 60 à 80)</p>
  </section>`;
}

function peerPage() {
  const crit = [
    ['La formule d\'appel est formelle.', 'Geachte mevrouw Vermeulen,'],
    ['Il/elle remercie.', 'Hartelijk bedankt voor …'],
    ['Il/elle refuse mardi et donne une raison.', 'Helaas ben ik … niet beschikbaar, want …'],
    ['Il/elle propose un autre moment.', 'Kan ik op … komen?'],
    ['Il/elle annonce la pièce jointe.', 'In de bijlage vindt u …'],
    ['La formule finale est formelle.', 'Met vriendelijke groeten,'],
    ['« u / uw » partout (pas « je / jij »).', 'Kunt u … · uw e-mail'],
    ['Après Helaas / In de bijlage, le verbe vient tout de suite.', 'Helaas <u>ben</u> ik … · In de bijlage <u>vindt</u> u …'],
  ];
  return `<section class="page">
  ${runHead('Een formele e-mail · Fiche 4', 'Relecture croisée · remplace l\'interaction')}
  <div class="kicker">Échange tes feuilles avec un·e partenaire</div><h1>🔎 Relecture croisée</h1>
  <p>Lis le mail de ton/ta partenaire. Coche ce que tu trouves. Souligne au crayon <b>une</b> phrase à améliorer. Tu ne corriges pas : tu montres.</p>
  <table class="check"><tr><th>Dans ce mail…</th><th>Exemple</th><th>oui</th><th>pas encore</th></tr>
  ${crit.map(([a, b]) => `<tr><td>${a}</td><td class="nl" style="text-align:left;width:62mm;font-size:8.6pt">${b}</td><td>☐</td><td>☐</td></tr>`).join('')}</table>
  <h2>Un compliment pour mon/ma partenaire</h2><div class="rule"></div>
  <h2>Un conseil pour la prochaine fois</h2><div class="rule"></div>
  <p class="small muted" style="margin-top:3mm">Relu par : .................................................</p>
  </section>`;
}

module.exports = {
  no: 4,
  icon: '✉️',
  titleNl: 'Een formele e-mail',
  titleFr: 'Répondre à un mail formel (invitation à un entretien)',
  theme: 'téléphone & mail · administration',
  skill: 'Expression écrite',
  cefr: 'A2',
  mode: 'Expression écrite · individuel + relecture en binôme',
  duration: '2 × 50 min',
  syllabus: ['Telefoon & mail p. 85', 'Administratie p. 86', 'En · maar · want p. 73', 'Fiche 3 p. 94'],
  cando: 'répondre poliment à un mail professionnel : remercier, refuser un rendez-vous, proposer un autre moment et joindre un document.',
  goals: [
    'comprendre ce qu\'un mail formel te demande',
    'utiliser les formules d\'un mail formel (Geachte…, Met vriendelijke groeten)',
    'remercier, refuser poliment et donner une raison',
    'proposer un autre moment',
    'annoncer une pièce jointe',
  ],
  finalTask: `Tu réponds au mail de Mme Vermeulen en <b>15 minutes</b>, dans le cadre « Mijn antwoord ». Puis un·e partenaire relit ton mail avec la grille de relecture.`,
  situation,
  situationShort: situation,
  buoy: [
    'Reprends les mots du mail reçu : **uitnodiging**, **gesprek**, **diploma**.', 'Une idée trop difficile ? Écris-la **plus simplement**.',
    '**want** suffit : **omdat** est un bonus.', 'Un mot inconnu ? Contourne-le : **een document**, **een afspraak**.',
    'Garde **u / uw** du début à la fin.', 'Relis la place du verbe : **Helaas ben ik…**',
  ],
  coverExtra: `<p class="small">✉ Le mail reçu est dans chaque variante. Feuille-réponse et grille de relecture : fin de fiche.</p>`,

  teacher: {
    intention: 'Garder un rendez-vous d\'embauche quand on n\'est pas disponible : répondre vite, poliment et complètement.',
    functions: [
      'saluer et prendre congé à l\'écrit (registre formel)',
      'remercier',
      'refuser et justifier',
      'proposer une alternative',
      'annoncer un document joint',
    ],
    lexis: 'mail et administration (de uitnodiging, het gesprek, de bijlage, beschikbaar), jours et dates, motifs (les, examen, afspraak).',
    form: 'registre <span class="nl">u / uw</span> ; verbe en 2e position après <span class="nl">Helaas</span> / <span class="nl">In de bijlage</span> (↺ fiche 1) ; A2 : <span class="nl">omdat</span> + verbe à la fin.',
    dialogueTitle: 'Réponse modèle (corrigé)',
    dialogue: [
      ['', 'Onderwerp: RE: Uitnodiging sollicitatiegesprek'],
      ['', 'Geachte mevrouw Vermeulen,'],
      ['', 'Hartelijk bedankt voor uw e-mail en voor de uitnodiging.'],
      ['', 'Helaas ben ik op dinsdag 17 november niet beschikbaar, want ik heb dan les.'],
      ['', 'Kan ik op woensdag 18 of donderdag 19 november komen? Ik ben de hele dag vrij.'],
      ['', 'In de bijlage vindt u een kopie van mijn diploma.'],
      ['', 'Ik kijk uit naar uw antwoord.'],
      ['', 'Met vriendelijke groeten,'],
      ['', 'Yasmina Benali'],
    ],
    dialogueNote: 'Variante A2 : « …, omdat ik dan een examen heb. » — 62 mots.',
    steps: [
      ['Rencontre', 'Lecture du mail reçu. Avant le sens des mots : <b>qui écrit, à qui, pourquoi, que faut-il faire, avant quand ?</b> On repère les deux actions demandées (répondre, envoyer le diplôme).', '10 min'],
      ['Répétition', 'Lecture de la réponse modèle. Jeu d\'association formule ↔ fonction (saluer, remercier, refuser…), puis dictée en chaîne des formules fixes.', '10 min'],
      ['Variation', 'On change un seul emplacement à la fois : le jour, puis la raison, puis la pièce jointe. On fait remarquer, sans règle, <span class="nl">Helaas ben ik</span> (comme <span class="nl">Elke dag schrijf ik</span>, fiche 1).', '10 min'],
      ['Choix', 'Présentation du parcours. Chacun choisit sa variante. Rappel : la feuille-réponse est la même pour tous.', '5 min'],
      ['Rédaction', 'Rédaction individuelle sur la feuille « Mijn antwoord ». L\'enseignant·e circule, aide les Héro·ïnes à remplir les emplacements.', '20 min'],
      ['Relecture', 'Échange des feuilles et <b>relecture croisée</b> avec la grille (elle remplace l\'interaction orale). Chacun·e améliore une phrase de son propre mail.', '15 min'],
      ['Retour', 'Focus on form : 2 ou 3 phrases d\'apprenant·es projetées (anonymes), améliorées ensemble. Autoévaluation.', '15 min'],
    ],
    focus: `<b>Après un mot en tête de phrase, le verbe vient tout de suite (2e place) :</b> <span class="nl">Ik ben dinsdag niet beschikbaar.</span> → <span class="nl">Helaas ben ik dinsdag niet beschikbaar.</span> · <span class="nl">In de bijlage vindt u…</span><br>
    <b>C'est la même règle que dans la fiche 1</b> (<span class="nl">Elke dag schrijf ik…</span>) : le faire dire aux apprenant·es (« Où l'avez-vous déjà vu ? »). C'est la spirale.<br>
    <b>Registre :</b> tableau à deux colonnes au tableau — <span class="nl">Hoi Ines! / Doei!</span> (collègue, SMS) vs <span class="nl">Geachte mevrouw Vermeulen, / Met vriendelijke groeten,</span> (mail formel).<br>
    <b>A2 :</b> <span class="nl">…, want ik heb dan les.</span> → <span class="nl">…, omdat ik dan les heb.</span> (verbe à la fin).<br>
    <span class="muted small">Syllabus : Woordvolgorde p. 68 · En · maar · want p. 73 · Telefoon & mail p. 85.</span>`,
    errors: [
      ['Hallo mevrouw, … Doei!', 'Geachte mevrouw Vermeulen, … Met vriendelijke groeten,', 'Les intrus de la variante 2 ; tableau formel / familier.'],
      ['Helaas ik ben niet beschikbaar.', 'Helaas ben ik niet beschikbaar.', '↺ fiche 1 : « verbe = 2 ». Souligner le verbe en relecture.'],
      ['Geachte mevrouw Ines,', 'Geachte mevrouw Vermeulen,', '<span class="nl">Geachte</span> + nom de famille ; <span class="nl">Beste</span> + prénom est moins formel.'],
      ['…, omdat ik heb een examen.', '…, omdat ik een examen heb.', 'A1 : accepter <span class="nl">want</span>. A2 : encadré Observe.'],
    ],
    grid: [
      ['Réalisation de la tâche', 'Répond aux 3 points essentiels : remercier, refuser + autre jour, pièce jointe.', 'Tous les points + raison + question ou coordonnées.'],
      ['Registre', 'Formules d\'appel et finale formelles.', '<span class="nl">u / uw</span> cohérent du début à la fin.'],
      ['Forme ciblée', 'Phrases S + V correctes ; <span class="nl">want</span>.', 'Inversion après <span class="nl">Helaas / In de bijlage</span> ; <span class="nl">omdat</span> + V final.'],
      ['Longueur, clarté', '40 à 60 mots, ordre logique.', '60 à 80 mots, ordre logique, sans répétition.'],
    ],
    adds: [
      '<b>Transposition à l\'écrit</b> : les 5 variantes ARK, prévues pour l\'oral, sont adaptées à l\'expression écrite (même logique : on retire les aides peu à peu).',
      '<b>Mail authentique mis en forme</b> comme une boîte de réception : on lit pour agir, pas pour traduire.',
      '<b>Intrus familiers</b> dans la variante 2 : on travaille le registre sans exposé théorique.',
      '<b>Relecture croisée</b> avec grille : elle remplace l\'interaction et rend la correction concrète et non menaçante.',
      '<b>Feuille-réponse commune</b> au format mail, pour toutes les variantes.',
    ],
    extend: [
      'Second mail : Mme Vermeulen confirme le jeudi. Accuser réception en 2 phrases (<span class="nl">Bedankt voor de bevestiging. Tot donderdag!</span>).',
      'Mail d\'absence au travail : prévenir qu\'on est malade (<span class="nl">Helaas ben ik vandaag ziek…</span>).',
    ],
  },

  v1: {
    title: 'Prépare-toi : suis les étapes et choisis tes phrases',
    colA: 'Ce que tu dois écrire',
    colB: 'Ce que tu peux écrire',
    steps: [
      ['Écris l\'objet du mail.', ['RE: Uitnodiging sollicitatiegesprek']],
      ['Salue la personne (formel).', ['Geachte mevrouw Vermeulen,']],
      ['Remercie.', ['Hartelijk bedankt voor uw e-mail.', 'Bedankt voor de uitnodiging.']],
      ['Dis que tu n\'es pas libre mardi, et pourquoi.', ['Helaas ben ik op dinsdag 17 november niet beschikbaar,', 'want ik heb dan les.']],
      ['Propose un autre jour.', ['Kan ik op woensdag 18 november komen?', 'Ik ben de hele dag vrij.']],
      ['Annonce la pièce jointe.', ['In de bijlage vindt u een kopie van mijn diploma.']],
      ['Termine et signe.', ['Ik kijk uit naar uw antwoord.', 'Met vriendelijke groeten,', 'prénom + nom']],
    ],
    bank: [
      { h: 'Banque de mots : remplace si tu veux', items: [
        ['want ik heb dan les', 'car j\'ai cours'], ['want ik heb dan een examen', 'car j\'ai un examen'], ['want ik werk dan', 'car je travaille'],
        ['op woensdag 18 november', 'le mercredi 18'], ['op donderdag 19 november', 'le jeudi 19'], ['in de voormiddag', 'dans la matinée'],
        ['mijn diploma', 'mon diplôme'], ['mijn cv', 'mon CV'], ['een kopie van …', 'une copie de …'],
      ] },
    ],
    tip: 'Astuce : entoure tes phrases, puis recopie-les dans le cadre « Mijn antwoord ».',
  },

  v2: {
    intro: 'Voici les phrases de la réponse, mélangées, avec <b>3 intrus</b> trop familiers pour un mail formel. <b>Barre</b> les intrus, puis <b>numérote</b> les autres dans l\'ordre. Recopie ensuite ton mail dans le cadre « Mijn antwoord ».',
    groups: [
      { h: 'Début et fin', lines: ['Met vriendelijke groeten,', 'Hoi Ines!', 'Ik kijk uit naar uw antwoord.', 'Geachte mevrouw Vermeulen,', 'Doei!'] },
      { h: 'Le message', lines: ['In de bijlage vindt u een kopie van mijn diploma.', 'Kan je mij terugbellen?', 'Helaas ben ik op dinsdag niet beschikbaar, want ik heb dan les.', 'Hartelijk bedankt voor uw e-mail.', 'Ik ben de hele dag vrij.', 'Kan ik op woensdag 18 november komen?'] },
    ],
    bank: [
      'maandag · dinsdag · woensdag · donderdag · vrijdag · in de voormiddag · in de namiddag',
      'want ik heb dan les · want ik werk dan · want ik heb dan een afspraak bij de dokter',
      'mijn diploma · mijn cv · een kopie van mijn identiteitskaart',
    ],
    challenge: 'change le jour, la raison et la pièce jointe, puis ajoute <b>une phrase à toi</b>.',
  },

  v3: {
    plan: 'Prépare-toi : 1) saluer · 2) remercier · 3) refuser et justifier · 4) proposer · 5) joindre · 6) conclure',
    patterns: [
      ['Objet', '**RE:** + <<objet du mail reçu>>', 'RE: Uitnodiging sollicitatiegesprek'],
      ['Saluer', '**Geachte** + <<mevrouw / meneer>> + <<nom de famille>> **,**', 'Geachte mevrouw Vermeulen,'],
      ['Remercier', '**Hartelijk bedankt voor** + <<uw e-mail / de uitnodiging>>', 'Hartelijk bedankt voor de uitnodiging.'],
      ['Refuser', '**Helaas** + [[zijn]] + **ik op** + <<jour>> + **niet beschikbaar** ↺', 'Helaas ben ik op dinsdag niet beschikbaar,'],
      ['Justifier (A1)', '**…, want ik** + [[hebben]] + **dan** + <<raison>>', '…, want ik heb dan les.'],
      ['Justifier (A2)', '**…, omdat ik dan** + <<raison>> + [[hebben]]', '…, omdat ik dan een examen heb.'],
      ['Proposer', '**Kan ik op** + <<jour + date>> + **komen?**', 'Kan ik op donderdag 19 november komen?'],
      ['Pièce jointe', '**In de bijlage vindt u** + <<document>>', 'In de bijlage vindt u mijn cv.'],
      ['Conclure', '**Ik kijk uit naar uw antwoord. Met vriendelijke groeten,** + <<prénom nom>>', 'Met vriendelijke groeten, Karim Haddad'],
    ],
    observe: '**Ik ben dinsdag niet beschikbaar.** → **Helaas ben ik dinsdag niet beschikbaar.** ↺ (fiche 1 : **Elke dag schrijf ik e-mails.**)',
    question: 'Après <span class="nl">Helaas</span>, quel mot vient juste après ?',
    words: 'de uitnodiging · het gesprek · beschikbaar · vrij · de bijlage · het diploma · het cv · de kopie · les · het examen',
  },

  v4: {
    keys: [
      '**Geachte** … **,** / **Met vriendelijke groeten,**',
      '**Helaas** + {V} + {S} … **niet beschikbaar**',
      '**…, want** … · **…, omdat** … + {V}',
      '**Kan ik op** … **komen?**',
      '**In de bijlage vindt u** …',
    ],
    further: 'pose une question pratique (<span class="nl">Is er een parking?</span> · <span class="nl">Moet ik nog iets meebrengen?</span>) et donne ton numéro (<span class="nl">U kunt mij bereiken op 0476 12 34 56.</span>).',
    lines: 9,
  },

  v5: {
    task: 'Réponds au mail de Mme Vermeulen. Remercie, explique que tu n\'es pas libre mardi et pourquoi, propose un autre moment, annonce ta pièce jointe et termine poliment. Écris dans le cadre « Mijn antwoord ».' + MAIL_IN(true) + PROBLEM,
    timing: '<b>Temps :</b> 15 minutes, sans notes · <b>Longueur :</b> 40 à 60 mots (A1) · 60 à 80 mots (A2)',
    bonus: 'pose une question pratique et utilise <span class="nl">omdat</span>.',
    checkHead: 'Dans mon mail, j\'ai…',
    stress1: 'Avant d\'écrire, j\'étais stressé·e.',
    check: [
      'utilisé une formule d\'appel et une formule finale formelles',
      'remercié',
      'refusé mardi et donné une raison',
      'proposé un autre moment',
      'annoncé la pièce jointe',
      'utilisé u / uw partout (pas je / jij)',
      'relu la place du verbe (Helaas ben ik…)',
    ],
  },

  extraPages: [answerPage, peerPage],
};

