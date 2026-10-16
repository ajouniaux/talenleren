const { runHead } = require('../lib');

// ---------- Plan du quartier (SVG) ----------
// On marche vers le nord depuis la gare : 1re rue = Schoolstraat, 2e = Marktstraat, 3e = Kerkstraat.
const LAND = [
  [240, 15, 85, 58, ['⛪ Kerk']],
  [360, 22, 70, 50, ['Apotheek']],
  [440, 22, 72, 50, ['Firma', 'Verbeke']],
  [15, 112, 115, 48, ['Supermarkt']],
  [225, 250, 98, 50, ['Bakkerij']],
  [360, 250, 85, 50, ['Bank']],
  [190, 398, 130, 62, ['Station']],
  [372, 400, 80, 55, ['Ⓟ Parking']],
];
const TARGET_A = [ // A les cherche : vierges sur la carte A
  [225, 160, 98, 52, ['Interimkantoor', 'Werkpunt']],
  [452, 302, 61, 50, ['Gemeente-', 'huis']],
  [552, 22, 90, 50, ['Opleidings-', 'centrum']],
];
const TARGET_B = [ // B les cherche : vierges sur la carte B
  [168, 15, 68, 58, ['Fabriek', 'Delta']],
  [360, 160, 85, 52, ['Hotel', 'Central']],
  [168, 250, 52, 50, ['Restau-', 'rant', 'De Molen']],
];
const BLANK = [
  [15, 15, 115, 55], [168, 160, 52, 52], [455, 160, 58, 52], [15, 250, 115, 50],
  [455, 250, 58, 44], [552, 302, 90, 50], [225, 306, 98, 46], [15, 306, 115, 46],
];

function bld([x, y, w, h, lines], fill = '#fff', stroke = '#1d2433', bold = true) {
  const fs = lines && lines.length > 2 ? 8.5 : 10;
  const t = (lines || [])
    .map((l, i) => `<tspan x="${x + w / 2}" dy="${i === 0 ? -((lines.length - 1) * fs * 0.55) : fs * 1.1}">${l}</tspan>`)
    .join('');
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="1.3"/>${
    lines ? `<text x="${x + w / 2}" y="${y + h / 2 + 3.5}" text-anchor="middle" font-size="${fs}" font-weight="${bold ? 700 : 500}" fill="#1d2433">${t}</text>` : ''
  }`;
}

function map(version) {
  const streets = `
  <rect x="135" y="0" width="30" height="470" fill="#e3e6ec"/><rect x="325" y="0" width="30" height="470" fill="#e3e6ec"/><rect x="515" y="0" width="30" height="470" fill="#e3e6ec"/>
  <rect x="0" y="75" width="680" height="30" fill="#e3e6ec"/><rect x="0" y="215" width="680" height="30" fill="#e3e6ec"/><rect x="0" y="355" width="680" height="30" fill="#e3e6ec"/>
  <g font-size="9.5" fill="#5d6677" font-style="italic" font-weight="600">
    <text x="20" y="94">Kerkstraat</text><text x="575" y="94">Kerkstraat</text>
    <text x="20" y="234">Marktstraat</text><text x="575" y="234">Marktstraat</text>
    <text x="20" y="374">Schoolstraat</text><text x="575" y="374">Schoolstraat</text>
    <text transform="translate(154 175) rotate(-90)">Molenstraat</text>
    <text transform="translate(344 345) rotate(-90)">Stationsstraat</text>
    <text transform="translate(534 340) rotate(-90)">Parklaan</text>
  </g>`;
  const park = `<rect x="552" y="110" width="124" height="101" rx="6" fill="#d9efdf" stroke="#3d9a5f" stroke-width="1.3"/><text x="614" y="165" text-anchor="middle" font-size="10" font-weight="700" fill="#2c6e44">🌳 Park</text>`;
  const blanks = [...BLANK, ...(version === 'A' ? TARGET_A : []), ...(version === 'B' ? TARGET_B : [])]
    .map((b) => bld([b[0], b[1], b[2], b[3]], '#fafbfc', '#9aa3b2'))
    .join('');
  const shownTargets = [
    ...(version !== 'A' ? TARGET_A.map((b) => bld(b, version === 'full' ? '#e7eefb' : '#fff')) : []),
    ...(version !== 'B' ? TARGET_B.map((b) => bld(b, version === 'full' ? '#fbefe3' : '#fff')) : []),
  ].join('');
  const start = `<circle cx="340" cy="452" r="9" fill="#df7f26"/><text x="340" y="456" text-anchor="middle" font-size="11" fill="#fff" font-weight="800">★</text>
  <text x="356" y="466" font-size="9" font-weight="700" fill="#b45f12">Je bent hier</text>
  <path d="M340 440 L340 412" stroke="#df7f26" stroke-width="2.5" marker-end="url(#ar)"/>`;
  return `<svg viewBox="0 0 680 470" width="100%" style="border:1.4px solid #1d2433;border-radius:2mm;display:block" font-family="Inter, DejaVu Sans, sans-serif">
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#df7f26"/></marker></defs>
  <rect width="680" height="470" fill="#fff"/>${streets}${park}${LAND.map((b) => bld(b)).join('')}${shownTargets}${blanks}${start}</svg>`;
}

const ARROWS = `<div class="arrows">
  <div><span class="ic">⬆</span><span><span class="nl">Ga rechtdoor.</span><br><span class="fr">va tout droit</span></span></div>
  <div><span class="ic">⬅</span><span><span class="nl">Sla linksaf.</span><br><span class="fr">tourne à gauche</span></span></div>
  <div><span class="ic">➡</span><span><span class="nl">Sla rechtsaf.</span><br><span class="fr">tourne à droite</span></span></div>
  <div><span class="ic">①</span><span><span class="nl">Neem de eerste straat links.</span><br><span class="fr">prends la 1re rue à gauche</span></span></div>
  <div><span class="ic">②</span><span><span class="nl">Neem de tweede straat rechts.</span><br><span class="fr">prends la 2e rue à droite</span></span></div>
  <div><span class="ic">⤴</span><span><span class="nl">Steek de straat over.</span><br><span class="fr">traverse la rue</span></span></div>
  <div><span class="ic">▣▣</span><span><span class="nl">naast de bank</span><br><span class="fr">à côté de la banque</span></span></div>
  <div><span class="ic">▣ ▢</span><span><span class="nl">tegenover de kerk</span><br><span class="fr">en face de l'église</span></span></div>
  <div><span class="ic">⌐</span><span><span class="nl">op de hoek</span><br><span class="fr">au coin</span></span></div>
</div>`;

function mapPage(who) {
  const mine = who === 'A' ? TARGET_A : TARGET_B;
  const other = who === 'A' ? 'B' : 'A';
  return () => `<section class="page">
  ${runHead('De weg vragen · Fiche 2', `Carte ${who} · ne la montre pas à ton/ta partenaire`)}
  <div class="vhead"><div class="vnum" style="background:${who === 'A' ? '#1f4ea3' : '#df7f26'}">${who}</div>
  <div class="vtitle"><h1>Kaart ${who}</h1><div class="tag">Tu pars de la gare (★). Tu ne sais pas où sont tes 3 lieux. Ton/ta partenaire (carte ${other}) les connaît.</div></div></div>
  <div class="soft"><b>Je cherche :</b> ${mine
    .map((b, i) => `&nbsp; <b>${i + 1}</b> <span class="nl">${b[4].join(' ').replace('- ', '')}</span>`)
    .join(' &nbsp;·')}<br><span class="small">Écoute le chemin et écris le <b>numéro</b> sur le bon bâtiment. Ensuite, explique à ton/ta partenaire le chemin vers <b>ses</b> lieux.</span></div>
  ${map(who)}
  <h2>Pour expliquer le chemin</h2>${ARROWS}
  </section>`;
}

function keyPage() {
  const routes = [
    ['A1', 'Interimkantoor Werkpunt', 'Ga rechtdoor. Neem de tweede straat links. Het is rechts, tegenover de bakkerij.'],
    ['A2', 'Gemeentehuis', 'Neem de eerste straat rechts. Het is links, op de hoek van de Parklaan.'],
    ['A3', 'Opleidingscentrum', 'Ga rechtdoor tot de Kerkstraat. Sla rechtsaf. Steek de Parklaan over. Het is links, tegenover het park.'],
    ['B1', 'Fabriek Delta', 'Ga rechtdoor tot de Kerkstraat. Sla linksaf. Het is rechts, naast de kerk, op de hoek.'],
    ['B2', 'Hotel Central', 'Neem de tweede straat rechts. Het is links, tegenover de bank.'],
    ['B3', 'Restaurant De Molen', 'Neem de tweede straat links. Ga rechtdoor tot de Molenstraat. Het is links, op de hoek, naast de bakkerij.'],
  ];
  return `<section class="page">
  ${runHead('Document enseignant · Fiche 2 · De weg vragen', 'Corrigé des cartes')}
  <div class="kicker">Corrigé</div><h1>Le plan complet</h1>
  <p class="small muted">En bleu, les lieux cherchés par A ; en orange, ceux cherchés par B. Les bâtiments gris restent vides : ce sont des leurres, pour que la carte ne « donne » pas la réponse.</p>
  ${map('full')}
  <h2>Itinéraires attendus (depuis la gare ★)</h2>
  <table><tr><th></th><th>Lieu</th><th>Itinéraire possible</th></tr>${routes
    .map(([k, l, r]) => `<tr><td><b>${k}</b></td><td>${l}</td><td class="nl">${r}</td></tr>`)
    .join('')}</table>
  <p class="hint">D'autres itinéraires sont justes : on valide si le lieu trouvé est le bon.</p>
  </section>`;
}

const situation = `Tu as rendez-vous chez <b>Verbeke</b> et dans d'autres lieux du quartier. Tu sors de la gare, mais tu ne connais pas le chemin. Tu demandes à un·e passant·e, qui t'explique. Ensuite, c'est toi qui aides : vous échangez les rôles.`;

module.exports = {
  no: 2,
  icon: '🗺️',
  titleNl: 'De weg vragen',
  titleFr: 'Demander et indiquer le chemin vers une entreprise',
  theme: 'en ville · in de stad',
  skill: 'Expression orale en interaction',
  cefr: 'A1',
  mode: 'EO en interaction · binômes A/B',
  duration: '2 × 50 min',
  syllabus: ['Fiche 9 p. 100a', 'In de stad p. 80', 'Voorzetsels p. 65', 'Gebiedende wijs p. 67'],
  cando: 'demander poliment où se trouve une entreprise, comprendre le chemin, et expliquer un chemin simple à quelqu\'un.',
  goals: [
    'aborder poliment une personne dans la rue',
    'demander où se trouve un lieu',
    'comprendre et donner un itinéraire (rechtdoor, links, rechts…)',
    'situer un lieu (naast, tegenover, op de hoek)',
    'vérifier, faire répéter et remercier',
  ],
  finalTask: `Avec ta carte (A ou B), tu demandes le chemin vers <b>3 lieux</b> et tu les retrouves sur le plan. Puis tu expliques à ton/ta partenaire le chemin vers <b>ses</b> 3 lieux.`,
  situation,
  buoy: [
    '**Sorry, ik begrijp het niet.**', '**Kunt u dat herhalen?**',
    '**Kunt u wat langzamer spreken?**', '**Kunt u het op de kaart tonen?**',
    '**Links of rechts?**', '**Hoe zeg je « … »?**',
  ],
  coverExtra: `<p class="small">🗺️ Les cartes A et B sont à la fin de la fiche. Chacun·e garde sa carte <b>cachée</b> : c'est ce qui rend l'échange réel.</p>`,

  teacher: {
    intention: 'Trouver une entreprise (rendez-vous, entretien) dans un quartier inconnu et aider quelqu\'un qui cherche son chemin.',
    functions: [
      'attirer l\'attention poliment, remercier',
      'demander où se trouve un lieu',
      'donner un itinéraire, situer un lieu',
      'vérifier sa compréhension, faire répéter',
    ],
    lexis: 'lieux de la ville et de l\'emploi (gemeentehuis, interimkantoor, fabriek…), directions, prépositions de lieu, ordinaux.',
    form: 'impératif (<span class="nl">Ga · Neem · Sla</span> : verbe en tête, sans sujet) ; prépositions <b>sans</b> <span class="nl">van</span> (<span class="nl">naast de bank</span>) ; A2 : <span class="nl">Weet u waar … is?</span>',
    dialogue: [
      ['A', 'Pardon, mevrouw. Mag ik iets vragen?'],
      ['B', 'Natuurlijk.'],
      ['A', 'Ik zoek de firma Verbeke. Weet u waar dat is?'],
      ['B', 'Ja. Ga hier rechtdoor tot de Kerkstraat. Sla daar rechtsaf. De firma Verbeke is links, naast de apotheek.'],
      ['A', 'Dus: rechtdoor, dan rechtsaf, en links naast de apotheek?'],
      ['B', 'Ja, precies.'],
      ['A', 'Is het ver?'],
      ['B', 'Nee, vijf minuten te voet.'],
      ['A', 'Dank u wel!'],
      ['B', 'Graag gedaan. Succes!'],
      ['', '<span class="muted" style="font-weight:600">À la réception (bonus A2)</span>'],
      ['A', 'Goedemorgen. Ik heb een afspraak met mevrouw Vermeulen.'],
      ['R', 'Neem de lift naar de tweede verdieping. Haar kantoor is rechts achteraan.'],
    ],
    dialogueNote: 'Le trajet du dialogue correspond au plan : faites-le suivre du doigt sur la carte projetée.',
    steps: [
      ['Rencontre', 'Écoute du dialogue (2 fois) avec le plan complet projeté. Les apprenant·es suivent le trajet du doigt, puis repèrent ce que chacun fait (aborder, demander, expliquer, vérifier, remercier).', '10 min'],
      ['Répétition', '« Jacques a dit » des directions : l\'enseignant·e dit <span class="nl">Ga rechtdoor · Sla linksaf · Sla rechtsaf</span>, la classe mime avec les bras. Puis un·e apprenant·e prend la place.', '10 min'],
      ['Variation', 'On change un seul emplacement à la fois : le lieu cherché, puis l\'ordinal (<span class="nl">eerste → tweede</span>), puis le repère (<span class="nl">naast → tegenover</span>).', '10 min'],
      ['Choix', 'Présentation du parcours. Chacun choisit sa variante ; les binômes reçoivent les cartes A et B (cachées).', '5 min'],
      ['Préparation', 'Préparation avec la fiche choisie. Les Héro·ïnes s\'entraînent à décrire un trajet sur le plan avec les patrons.', '10 min'],
      ['Interaction', 'A demande ses 3 lieux et les note sur sa carte ; puis B. Vérification en posant les deux cartes côte à côte. Nouveau binôme, nouveaux lieux (inventés).', '30 min'],
      ['Retour', 'Focus on form : <span class="nl">naast de bank</span> (et pas « naast van »). Autoévaluation et choix de la variante suivante.', '15 min'],
    ],
    focus: `<b>L'impératif met le verbe en tête, sans sujet :</b> <span class="nl">Ga rechtdoor. Neem de tweede straat. Sla linksaf.</span><br>
    <b>Les prépositions de lieu s'emploient sans « van » :</b> <span class="nl">naast de bank · tegenover de kerk</span> (≠ « à côté <u>de</u> »).<br>
    <b>Comment :</b> pendant la Variation, faire produire 3 phrases avec <span class="nl">naast / tegenover</span>, et demander : « Combien de mots entre <span class="nl">naast</span> et <span class="nl">de bank</span> ? » — zéro.<br>
    <b>A2 :</b> <span class="nl">Waar is de bank?</span> → <span class="nl">Weet u waar de bank is?</span> : le verbe part à la fin (encadré « Observe » de la variante 3).<br>
    <span class="muted small">Syllabus : Voorzetsels p. 65 · Gebiedende wijs p. 67 · In de stad p. 80 · Fiche 9 p. 100a.</span>`,
    errors: [
      ['naast van de bank', 'naast de bank', 'Reformulation en écho ; afficher « naast / tegenover + de … » au tableau.'],
      ['Neem de twee straat links.', 'Neem de tweede straat links.', 'Rappeler eerste · tweede · derde avec les doigts.'],
      ['Weet u waar is de bank?', 'Weet u waar de bank is?', 'A1 : accepter <span class="nl">Waar is de bank?</span> ; A2 : encadré Observe.'],
    ],
    grid: [
      ['Réalisation de la tâche', 'Demande poliment ; retrouve 2 lieux sur 3.', 'Retrouve les 3 lieux ; donne un trajet en 3 étapes avec un repère.'],
      ['Lexique', 'Directions de base (rechtdoor, links, rechts).', 'Ordinaux, prépositions variées, <span class="nl">oversteken</span>.'],
      ['Forme ciblée', 'Impératif correct (Ga, Neem).', 'Prépositions sans « van » ; <span class="nl">Weet u waar … is?</span>'],
      ['Interaction', 'Remercie, fait répéter.', 'Reformule pour vérifier (<span class="nl">Dus: … ?</span>).'],
    ],
    adds: [
      '<b>Vrai écart d\'information</b> : cartes A et B différentes. On ne peut réussir qu\'en parlant et en écoutant.',
      '<b>Produit vérifiable</b> : le numéro écrit sur le bon bâtiment. Chacun·e voit tout de suite si l\'échange a réussi, sans jugement de l\'enseignant·e.',
      '<b>Pictogrammes de direction</b> au lieu de longues listes : aide visuelle pour toutes les variantes.',
      '<b>Seconde étape A2</b> à la réception (étage, ascenseur) : elle fait le lien avec la fiche 5.',
      '<b>Corrigé</b> du plan avec des itinéraires possibles.',
    ],
    extend: [
      'Trajet réel : de l\'école à la gare la plus proche, décrit à l\'oral puis envoyé par SMS à un·e « collègue ».',
      'Inverser la contrainte : B invente un lieu sur un bâtiment vide, A doit le trouver.',
    ],
  },

  v1: {
    colA: 'Ce que tu dois faire',
    colB: 'Ce que tu peux dire',
    steps: [
      ['<b>A</b> · Aborde poliment une personne.', ['Pardon, meneer / mevrouw.', 'Mag ik iets vragen?']],
      ['<b>A</b> · Demande où est le lieu.', ['Ik zoek het gemeentehuis.', 'Waar is het interimkantoor, alstublieft?']],
      ['<b>B</b> · Explique le chemin.', ['Ga hier rechtdoor.', 'Neem de tweede straat links.', 'Sla rechtsaf.']],
      ['<b>B</b> · Dis où se trouve le lieu.', ['Het is links, naast de bank.', 'Het is rechts, tegenover de bakkerij.', 'Het is op de hoek.']],
      ['<b>A</b> · Vérifie en répétant, ou fais répéter.', ['Dus: rechtdoor en dan links?', 'Sorry, kunt u dat herhalen?']],
      ['<b>A</b> · Demande si c\'est loin. <b>B</b> · Réponds.', ['Is het ver?', 'Nee, vijf minuten te voet.']],
      ['<b>A</b> · Remercie. <b>B</b> · Réponds.', ['Dank u wel!', 'Graag gedaan!']],
    ],
    bank: [
      { h: 'Banque de mots : les lieux', items: [
        ['het station', 'la gare'], ['de bank', 'la banque'], ['de kerk', 'l\'église'],
        ['de apotheek', 'la pharmacie'], ['de bakkerij', 'la boulangerie'], ['het park', 'le parc'],
        ['het gemeentehuis', 'la maison communale'], ['het interimkantoor', 'l\'agence d\'intérim'], ['de fabriek', 'l\'usine'],
      ] },
      { h: 'Situer', items: [
        ['naast', 'à côté de'], ['tegenover', 'en face de'], ['op de hoek', 'au coin'],
        ['links · rechts', 'à gauche · à droite'], ['tot de Kerkstraat', 'jusqu\'à la Kerkstraat'], ['vijf minuten te voet', '5 minutes à pied'],
      ] },
    ],
    tip: 'Astuce : entoure les phrases que tu vas utiliser. Les pictogrammes de direction sont sous ta carte.',
  },

  v2: {
    intro: 'Dans cet échange, tu vas <b>demander</b> (A) puis <b>expliquer</b> (B). Numérote les phrases dans l\'ordre où tu veux les dire, dans chaque colonne de rôle.',
    groups: [
      { h: 'A · Je demande', lines: ['Pardon, mevrouw. Mag ik iets vragen?', 'Ik zoek …', 'Waar is …, alstublieft?', 'Dus: … en dan …?', 'Is het ver?', 'Dank u wel!'] },
      { h: 'B · J\'explique', lines: ['Natuurlijk.', 'Ga hier rechtdoor.', 'Neem de eerste straat rechts.', 'Sla linksaf.', 'Het is links, naast de bank.', 'Nee, vijf minuten te voet.', 'Graag gedaan!'] },
    ],
    bank: [
      'het gemeentehuis · het interimkantoor · de fabriek · het hotel · het restaurant',
      'eerste · tweede · derde · links · rechts · rechtdoor',
      'naast · tegenover · op de hoek · tot de … · vijf minuten te voet',
    ],
    challenge: 'change le lieu, l\'ordinal (<span class="nl">eerste / tweede</span>) et utilise <b>une autre préposition</b> (<span class="nl">tegenover, op de hoek</span>).',
  },

  v3: {
    plan: 'Prépare-toi : 1) aborde · 2) demande · 3) écoute ou explique le chemin · 4) vérifie · 5) remercie',
    patterns: [
      ['Aborder', '**Pardon,** + <<meneer / mevrouw>> **. Mag ik iets vragen?**', 'Pardon, mevrouw. Mag ik iets vragen?'],
      ['Demander (A1)', '**Waar is** + <<lieu>> **, alstublieft?**', 'Waar is de bank, alstublieft?'],
      ['Demander (A2)', '**Weet u waar** + <<lieu>> + **is?**', 'Weet u waar het gemeentehuis is?'],
      ['Aller', '**Ga** + <<rechtdoor / tot …>>', 'Ga rechtdoor tot de Marktstraat.'],
      ['Choisir la rue', '**Neem de** + <<eerste / tweede / derde>> + **straat** + <<links / rechts>>', 'Neem de eerste straat rechts.'],
      ['Tourner', '**Sla** + <<linksaf / rechtsaf>>', 'Sla daar linksaf.'],
      ['Situer', '**Het is** + <<links / rechts>> **,** + <<naast / tegenover>> + <<repère>>', 'Het is rechts, tegenover de bakkerij.'],
      ['Vérifier', '**Dus:** + <<étape>> + **en dan** + <<étape>> **?**', 'Dus: rechtdoor en dan links?'],
      ['Remercier', '**Dank u wel!** — **Graag gedaan!**', 'Dank u wel voor de hulp!'],
    ],
    observe: '**Waar is de bank?** → **Weet u waar de bank is?**<br>**Ga rechtdoor. Neem de tweede straat.** (où est le sujet ?)',
    question: 'Dans la 2e question, où va le verbe <span class="nl">is</span> ?',
    words: 'rechtdoor · links · rechts · eerste · tweede · derde · naast · tegenover · op de hoek · oversteken · ver · te voet',
  },

  v4: {
    keys: [
      '**Weet u waar** … **is?**',
      '**Ga** · **Neem** · **Sla** + …',
      '**Het is** + **naast** / **tegenover** / **op de hoek** …',
      '**Dus:** … **en dan** … **?**',
    ],
    further: 'à la réception de Verbeke, annonce ton rendez-vous (<span class="nl">Ik heb een afspraak met mevrouw Vermeulen.</span>) et comprends l\'étage (<span class="nl">Neem de lift naar de tweede verdieping.</span>).',
    lines: 12,
  },

  v5: {
    task: 'Tu sors de la gare. Avec ta carte (A ou B), demande le chemin vers tes 3 lieux et écris leur numéro sur la carte. Ensuite, explique à ton/ta partenaire le chemin vers ses 3 lieux. Vérifiez ensemble en comparant vos cartes.',
    timing: '<b>Préparation :</b> 2 minutes, sans notes (seulement la carte) · <b>Interaction :</b> 5 minutes',
    bonus: 'à la réception de Verbeke, annonce ton rendez-vous et demande où est le bureau.',
    check: [
      'aborder poliment et remercier',
      'demander où se trouve un lieu',
      'comprendre le chemin et retrouver le lieu sur la carte',
      'expliquer un chemin (rechtdoor, links, rechts…)',
      'situer un lieu (naast, tegenover, op de hoek)',
      'faire répéter ou vérifier quand je n\'avais pas compris',
    ],
  },

  extraPages: [mapPage('A'), mapPage('B'), keyPage],
};
