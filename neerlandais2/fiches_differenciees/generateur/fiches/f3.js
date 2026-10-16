const { runHead } = require('../lib');

const PLANNING = `<table style="margin:2mm 0 0;font-size:8.8pt"><tr><th colspan="3">📋 Planning de l'accueil · vandaag</th></tr>
<tr><td class="nl">meneer Peeters</td><td>in vergadering <span class="fr">en réunion</span></td><td>terug om 15 uur → <span class="nl">vanmiddag</span></td></tr>
<tr><td class="nl">mevrouw Claes</td><td>met verlof <span class="fr">en congé</span></td><td>terug op maandag → <span class="nl">maandag</span></td></tr>
<tr><td class="nl">meneer Wouters</td><td>op kantoor <span class="fr">au bureau</span></td><td>bonus A2 → <span class="nl">Ik verbind u door.</span></td></tr></table>`;

const situation = `Tu travailles à <b>l'accueil de Verbeke</b>. Le téléphone sonne. Un·e client·e veut parler à un·e collègue. Regarde le planning : si la personne n'est pas là, tu prends un message complet sur la fiche <i>Telefoonnotitie</i>.${PLANNING}`;

const CALLERS = [
  ['Tom Janssens', 'firma Delta', 'meneer Peeters', '0476 12 34 56', 'de bestelling van vrijdag'],
  ['Nadia El Amrani', 'interimkantoor Werkpunt', 'mevrouw Claes', '02 512 44 80', 'het contract van Karim Haddad'],
  ['Lucas Dubois', 'Hotel Central', 'meneer Wouters', '0495 87 65 43', 'de vergadering van dinsdag'],
];

function callersPage() {
  const card = ([n, c, who, tel, about], i) => `<div class="card cut"><div class="ct">📞 Carte appelant·e ${i + 1}${i === 2 ? ' <span class="badge" style="font-size:7pt">bonus A2</span>' : ''}</div>
    <div class="row"><span class="k">Jij bent</span><span class="nl">${n}</span></div>
    <div class="row"><span class="k">Bedrijf</span><span class="nl">${c}</span></div>
    <div class="row"><span class="k">Je vraagt</span><span class="nl">${who}</span></div>
    <div class="row"><span class="k">Je nummer</span><span class="nl">${tel}</span></div>
    <div class="row"><span class="k">Het gaat over</span><span class="nl">${about}</span></div></div>`;
  return `<section class="page">
  ${runHead('Aan de telefoon · Fiche 3', 'Rôle B · cartes à découper')}
  <div class="vhead"><div class="vnum" style="background:#df7f26">B</div><div class="vtitle"><h1>Je bel naar Verbeke</h1><div class="tag">Tu es le/la client·e qui appelle. Prends une carte. Ne la montre pas.</div></div></div>
  <div class="cards">${CALLERS.map(card).join('')}
  <div class="card cut"><div class="ct">📞 Carte libre (Légende)</div>
    ${['Jij bent', 'Bedrijf', 'Je vraagt', 'Je nummer', 'Het gaat over'].map((k) => `<div class="row"><span class="k">${k}</span><span class="fill" style="min-width:45mm"></span></div>`).join('')}</div></div>
  <h2>Ce que tu peux dire (B)</h2>
  <table class="steps"><tr><th>Ce que tu fais</th><th>Ce que tu peux dire</th></tr>
  <tr><td>Salue et dis qui tu es.</td><td class="nl">Goedemorgen. Met Tom Janssens, van de firma Delta.</td></tr>
  <tr><td>Demande la personne.</td><td class="nl">Kan ik meneer Peeters spreken, alstublieft?</td></tr>
  <tr><td>Demande un rappel.</td><td class="nl">Kan hij / zij mij terugbellen?</td></tr>
  <tr><td>Donne ton nom, épelle, donne ton numéro.</td><td class="nl">J-A-N-S-S-E-N-S. · Mijn nummer is 0476 12 34 56.</td></tr>
  <tr><td>Dis pourquoi tu appelles.</td><td class="nl">Het gaat over de bestelling van vrijdag.</td></tr>
  <tr><td>Remercie et dis au revoir.</td><td class="nl">Dank u wel. Tot ziens!</td></tr></table>
  <p class="hint">Assis·e dos à dos avec ton/ta partenaire : comme au téléphone, on ne voit pas la bouche.</p>
  </section>`;
}

function notesPage() {
  const form = (i) => `<div class="form" style="margin-bottom:3mm"><div style="display:flex;justify-content:space-between"><b>☎ Telefoonnotitie ${i}</b><span class="small muted">Verbeke · receptie</span></div>
    ${[['Voor', 'pour'], ['Van', 'de la part de'], ['Bedrijf', 'entreprise'], ['Telefoon', 'numéro'], ['Over', 'objet']]
      .map(([k, fr]) => `<div class="f"><span class="k">${k}<span>${fr}</span></span><span class="l"></span></div>`).join('')}
    <div class="f"><span class="k">Terugbellen<span>rappeler</span></span><span>☐ ja &nbsp; ☐ nee &nbsp;&nbsp; wanneer ? </span><span class="l"></span></div></div>`;
  return `<section class="page">
  ${runHead('Aan de telefoon · Fiche 3', 'Rôle A · fiche de message')}
  <div class="vhead"><div class="vnum" style="background:#1f4ea3">A</div><div class="vtitle"><h1>Telefoonnotitie</h1><div class="tag">Remplis une fiche par appel. À la fin, compare avec la carte de ton/ta partenaire : tout est juste ?</div></div></div>
  ${form(1)}${form(2)}${form(3)}
  </section>`;
}

module.exports = {
  no: 3,
  icon: '📞',
  titleNl: 'Aan de telefoon',
  titleFr: 'Prendre un appel et noter un message',
  theme: 'téléphone & mail · telefoon & mail',
  skill: 'Expression orale en interaction',
  cefr: 'A1 → A2',
  mode: 'EO en interaction · binômes A/B, dos à dos',
  duration: '2 × 50 min',
  syllabus: ['Telefoon & mail p. 85', 'Getallen p. 64', 'Hem · haar · hun p. 71', 'Fiche 3 p. 94'],
  cando: 'répondre au téléphone au travail, dire que la personne est absente et noter un message complet (nom, numéro, objet).',
  goals: [
    'décrocher au nom de l\'entreprise',
    'faire patienter et expliquer qu\'une personne est absente',
    'demander et noter un nom (épeler) et un numéro',
    'demander l\'objet de l\'appel',
    'promettre un rappel et terminer poliment',
  ],
  finalTask: `Dos à dos avec ton/ta partenaire, tu réponds à <b>3 appels</b> à l'accueil de Verbeke. Pour chaque appel, tu remplis une <i>Telefoonnotitie</i>. Puis vous inversez les rôles.`,
  situation,
  situationShort: situation,
  buoy: [
    '**Sorry, ik versta u niet goed.**', '**Kunt u dat herhalen?**',
    '**Kunt u wat langzamer spreken?**', '**Kunt u dat spellen?**',
    '**Een moment, alstublieft.**', '**Dus: … ?**',
  ],
  coverExtra: `<p class="small">📞 Fin de fiche : cartes de l'appelant·e (rôle B) et fiches <i>Telefoonnotitie</i> (rôle A).</p>`,

  teacher: {
    intention: 'Gérer un appel entrant au travail quand la personne demandée est absente, sans perdre l\'information.',
    functions: [
      'décrocher, s\'identifier (routine téléphonique)',
      'faire patienter, expliquer une absence',
      'demander des informations, faire épeler, vérifier',
      'promettre une action (rappel), prendre congé',
    ],
    lexis: 'routines du téléphone, motifs d\'absence (in vergadering, met verlof…), objets d\'appel (bestelling, factuur, contract), chiffres et alphabet.',
    form: 'verbes séparables en blocs (<span class="nl">Hij belt u terug · Kan hij mij terugbellen?</span>) ; pronoms <span class="nl">u · mij · hem · haar</span>.',
    dialogue: [
      ['A', 'Firma Verbeke, goedemiddag. U spreekt met Sara.'],
      ['B', 'Goedemiddag. Met Tom Janssens, van de firma Delta. Kan ik meneer Peeters spreken?'],
      ['A', 'Een moment, alstublieft. … Sorry, meneer Peeters is in vergadering. Kan ik een boodschap noteren?'],
      ['B', 'Ja, graag. Kan hij mij terugbellen?'],
      ['A', 'Natuurlijk. Wat is uw naam, alstublieft?'],
      ['B', 'Janssens. J-A-N-S-S-E-N-S.'],
      ['A', 'En wat is uw telefoonnummer?'],
      ['B', '0476 12 34 56.'],
      ['A', 'Dus: 0476 12 34 56. Waarover gaat het?'],
      ['B', 'Over de bestelling van vrijdag.'],
      ['A', 'Goed. Hij belt u vanmiddag terug.'],
      ['B', 'Dank u wel. Tot ziens.'],
      ['A', 'Graag gedaan. Tot ziens!'],
    ],
    dialogueNote: 'Lecture des numéros en Belgique : par groupes (« nul vier zes zeven · twaalf · vierendertig · zesenvijftig »).',
    steps: [
      ['Rencontre', 'Écoute du dialogue (2 fois), <b>sans le texte</b>. Au 2e passage, chacun remplit une Telefoonnotitie. On compare : la fiche de message est déjà le produit de la tâche.', '10 min'],
      ['Répétition', 'Chaîne des numéros : chacun lit un numéro de gsm, le voisin le note et le relit (<span class="nl">Dus: …?</span>). Puis on épelle des noms de famille (alphabet).', '10 min'],
      ['Variation', 'On change un seul emplacement à la fois : la personne demandée, puis le motif d\'absence, puis le moment du rappel (<span class="nl">vanmiddag → maandag</span>).', '10 min'],
      ['Choix', 'Présentation du parcours. Chacun choisit sa variante. Distribution des cartes B et des fiches de message.', '5 min'],
      ['Préparation', 'Préparation avec la fiche choisie. Les Héro·ïnes s\'entraînent à lire le planning et à construire <span class="nl">… is met verlof. Zij belt u maandag terug.</span>', '10 min'],
      ['Interaction', '<b>Dos à dos.</b> B appelle (carte 1, puis 2) ; A note. Vérification fiche ↔ carte. On inverse les rôles. Carte 3 (transfert) pour les binômes à l\'aise.', '30 min'],
      ['Retour', 'Focus on form : <span class="nl">Hij belt u terug</span> / <span class="nl">Kan hij mij terugbellen?</span> Autoévaluation et choix de la variante suivante.', '15 min'],
    ],
    focus: `<b>Les verbes séparables, d'abord comme blocs :</b> <span class="nl">Hij belt u terug.</span> → <span class="nl">Kan hij mij terugbellen?</span> → <span class="nl">Ik verbind u door.</span><br>
    <b>Comment :</b> écrire <span class="nl">terug|bellen</span> en deux couleurs. Avec <span class="nl">kan</span>, les deux morceaux se recollent à la fin ; sans <span class="nl">kan</span>, <span class="nl">terug</span> part à la fin. Même logique que <span class="nl">Zullen we … eten?</span> (fiche 1).<br>
    <b>Routine pragmatique :</b> au téléphone, on se nomme avec <span class="nl">met</span> : <span class="nl">Met Sara.</span> / <span class="nl">U spreekt met Sara.</span><br>
    <span class="muted small">Syllabus : Telefoon & mail p. 85 · Getallen p. 64 · Hem · haar · hun p. 71.</span>`,
    errors: [
      ['Ik ben Sara. (au téléphone)', 'U spreekt met Sara.', 'Routine affichée près du « téléphone » de la classe.'],
      ['Hij terugbelt u.', 'Hij belt u terug.', 'Carton <span class="nl">terug</span> que l\'on déplace à la fin.'],
      ['vijftig zes (56)', 'zesenvijftig', 'Unité avant dizaine : rappel Getallen p. 64, chaîne des numéros.'],
    ],
    grid: [
      ['Réalisation de la tâche', 'Décroche, fait patienter, note nom et numéro justes.', 'Gère l\'absence avec le planning, note tout, propose rappel ou transfert.'],
      ['Lexique', 'Routines de base (<span class="nl">Een moment · Tot ziens</span>).', 'Motifs d\'absence variés, objets d\'appel.'],
      ['Forme ciblée', '<span class="nl">Hij belt u terug</span> comme bloc figé.', 'Séparables et pronoms variés (<span class="nl">Zij belt u maandag terug</span>).'],
      ['Interaction', 'Fait répéter, fait épeler.', 'Reformule pour vérifier, reste en « u » jusqu\'au bout.'],
    ],
    adds: [
      '<b>Dos à dos</b> : sans lecture labiale, on retrouve la vraie difficulté du téléphone.',
      '<b>Planning de l\'accueil</b> dans la mise en situation : l\'apprenant·e doit raisonner pour répondre (absent·e ? jusqu\'à quand ?).',
      '<b>Écart d\'information + produit vérifiable</b> : la Telefoonnotitie se compare à la carte B.',
      '<b>Carte libre</b> pour les Légendes : elles et ils inventent leur appel.',
    ],
    extend: [
      'Message vocal : chacun enregistre l\'annonce du répondeur de Verbeke (<span class="nl">U bent verbonden met… Wij zijn bereikbaar van … tot …</span>).',
      '« Téléphone arabe » professionnel : A transmet le message noté à C, qui le transmet à la « personne absente ».',
    ],
  },

  v1: {
    steps: [
      ['Décroche : entreprise, salutation, ton prénom.', ['Firma Verbeke, goedemorgen.', 'U spreekt met Sara.']],
      ['Demande ce que la personne veut.', ['Waarmee kan ik u helpen?']],
      ['Fais patienter. Regarde le planning. Dis que la personne est absente.', ['Een moment, alstublieft.', 'Sorry, meneer Peeters is in vergadering.', 'Sorry, mevrouw Claes is met verlof.']],
      ['Propose de prendre un message.', ['Kan ik een boodschap noteren?']],
      ['Demande le nom (fais épeler) et le numéro.', ['Wat is uw naam, alstublieft?', 'Kunt u dat spellen?', 'Wat is uw telefoonnummer?']],
      ['Vérifie le numéro. Demande l\'objet de l\'appel.', ['Dus: 0476 12 34 56?', 'Waarover gaat het?']],
      ['Promets le rappel. Termine l\'appel.', ['Hij belt u vanmiddag terug.', 'Zij belt u maandag terug.', 'Dank u wel. Tot ziens!']],
    ],
    bank: [
      { h: 'Banque de mots : l\'absence et le rappel', items: [
        ['in vergadering', 'en réunion'], ['met verlof', 'en congé'], ['niet op kantoor', 'pas au bureau'],
        ['ziek', 'malade'], ['aan de telefoon', 'en ligne'], ['op kantoor', 'au bureau'],
        ['vanmiddag', 'cet après-midi'], ['morgen', 'demain'], ['maandag', 'lundi'],
      ] },
      { h: 'L\'objet de l\'appel', items: [
        ['de bestelling', 'la commande'], ['de factuur', 'la facture'], ['het contract', 'le contrat'],
        ['de vergadering', 'la réunion'], ['de afspraak', 'le rendez-vous'], ['de levering', 'la livraison'],
      ] },
    ],
    tip: 'Astuce : garde la fiche Telefoonnotitie à côté de toi, et le planning sous les yeux.',
  },

  v2: {
    intro: 'Pendant l\'appel, tu dois : <b>décrocher · expliquer l\'absence · prendre le message (nom, numéro, objet) · conclure</b>. Numérote les phrases dans l\'ordre où tu veux les dire.',
    groups: [
      { h: 'Décrocher', lines: ['Firma Verbeke, goedemiddag.', 'U spreekt met …', 'Waarmee kan ik u helpen?'] },
      { h: 'L\'absence', lines: ['Een moment, alstublieft.', 'Sorry, … is in vergadering.', 'Kan ik een boodschap noteren?'] },
      { h: 'Le message', lines: ['Wat is uw naam, alstublieft?', 'Kunt u dat spellen?', 'Wat is uw telefoonnummer?', 'Dus: … ?', 'Waarover gaat het?'] },
      { h: 'Conclure', lines: ['Hij / Zij belt u … terug.', 'Dank u voor uw telefoontje.', 'Tot ziens!'] },
    ],
    bank: [
      'in vergadering · met verlof · niet op kantoor · ziek · aan de telefoon',
      'vanmiddag · morgen · maandag · na de vergadering',
      'de bestelling · de factuur · het contract · de afspraak · de levering',
    ],
    challenge: 'change la personne absente, le motif et le moment du rappel. Fais épeler <b>au moins une fois</b>.',
  },

  v3: {
    plan: 'Prépare-toi : 1) décroche · 2) gère l\'absence · 3) prends le message · 4) conclus',
    patterns: [
      ['Décrocher', '**Firma Verbeke,** + <<goedemorgen / goedemiddag>> **. U spreekt met** + <<prénom>>', 'Firma Verbeke, goedemorgen. U spreekt met Sara.'],
      ['Aider', '**Waarmee kan ik u helpen?**', 'Waarmee kan ik u helpen?'],
      ['Absence', '<<meneer / mevrouw + nom>> + [[zijn]] + <<motif>>', 'Mevrouw Claes is met verlof.'],
      ['Proposer', '**Kan ik een boodschap noteren?**', 'Kan ik een boodschap noteren?'],
      ['Demander', '**Wat is uw** + <<naam / telefoonnummer>> **?**', 'Wat is uw telefoonnummer?'],
      ['Faire épeler', '**Kunt u** + <<dat / uw naam>> + **spellen?**', 'Kunt u uw naam spellen?'],
      ['Vérifier', '**Dus:** + <<info>> **?** ↺', 'Dus: Janssens, 0476 12 34 56?'],
      ['Promettre', '<<hij / zij>> + [[bellen]] + **u** + <<moment>> + **terug.**', 'Zij belt u maandag terug.'],
      ['Transférer (A2)', '**Een moment, ik verbind u door.**', 'Een moment, ik verbind u door.'],
      ['Conclure', '**Dank u voor uw telefoontje. Tot ziens!**', 'Dank u voor uw telefoontje. Tot ziens!'],
    ],
    observe: '**Hij belt u terug.** → **Kan hij mij terugbellen?**',
    question: 'Que devient <span class="nl">terug</span> quand il y a <span class="nl">kan</span> ?',
    words: 'in vergadering · met verlof · niet op kantoor · vanmiddag · morgen · maandag · de bestelling · de factuur · het contract',
  },

  v4: {
    keys: [
      '**Firma Verbeke,** … **U spreekt met** …',
      '… [[zijn]] + <<motif>> **. Kan ik een boodschap noteren?**',
      '**Wat is uw** … **? Kunt u dat spellen?**',
      '<<hij / zij>> + **belt u** … **terug.**',
    ],
    further: 'si la personne est là, transfère (<span class="nl">Een moment, ik verbind u door.</span>) ; ou propose un autre moment ↺ fiche 3 du syllabus (<span class="nl">Kunt u morgen om tien uur terugbellen?</span>).',
    lines: 12,
  },

  v5: {
    task: 'Tu travailles à l\'accueil de Verbeke. Ton/ta partenaire appelle avec une carte B. Décroche, explique l\'absence (regarde le planning), note le message complet sur la Telefoonnotitie et termine poliment l\'appel. Puis inversez les rôles.' + PLANNING,
    timing: '<b>Préparation :</b> 2 minutes, sans notes (planning et fiche de message autorisés) · <b>Appel :</b> 2 à 3 minutes, dos à dos',
    bonus: 'carte 3 : la personne est au bureau, transfère l\'appel ; ou propose un autre moment pour rappeler.',
    stress1: 'Avant l\'appel, j\'étais stressé·e.',
    check: [
      'décrocher (entreprise, salutation, prénom)',
      'faire patienter et expliquer l\'absence',
      'noter le nom correctement (faire épeler)',
      'noter le numéro correctement',
      'demander l\'objet de l\'appel',
      'promettre un rappel et terminer poliment',
    ],
  },

  extraPages: [callersPage, notesPage],
};
