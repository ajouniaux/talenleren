const { runHead } = require('../lib');
const { profilesPage } = require('./shared');

function recruiterPage() {
  const qs = [
    'Goedemorgen, meneer / mevrouw … Welkom bij Verbeke. Neem plaats.',
    'Kunt u zich kort voorstellen?',
    'Welke opleiding hebt u gevolgd?',
    'Hebt u al ervaring?',
    'Wat kunt u goed?',
    'Welke talen spreekt u?',
    'Waarom wilt u hier werken?',
    'Wanneer kunt u beginnen?',
    'Hebt u nog vragen?',
    'Dank u wel voor het gesprek. Wij bellen u volgende week.',
  ];
  return `<section class="page">
  ${runHead('Het sollicitatiegesprek · Fiche 5', 'Rôle B · recruteur·euse')}
  <div class="vhead"><div class="vnum" style="background:#df7f26">B</div><div class="vtitle"><h1>Mevrouw / meneer Vermeulen</h1><div class="tag">Tu es responsable du personnel chez Verbeke. Tu poses les questions, tu écoutes, tu réagis.</div></div></div>
  <div class="grid2">
  <div><h2 style="margin-top:0">Tes questions (dans l'ordre)</h2>
  <table>${qs.map((q, i) => `<tr><td style="width:7mm"><b>${i + 1}</b></td><td class="nl">${q}</td></tr>`).join('')}</table>
  <div class="soft"><b>Pour réagir :</b> <span class="nl">Heel goed. · Interessant! · Oké, dank u. · Kunt u een voorbeeld geven?</span></div></div>
  <div><h2 style="margin-top:0">Le poste · réponds seulement si on te demande</h2>
  <div class="card"><div class="ct">💼 Vacature · Firma Verbeke</div>
  ${[
    ['Functie', 'administratief bediende'],
    ['Werkuren', 'van 9 tot 17 uur, van maandag tot vrijdag'],
    ['Contract', '6 maanden, daarna een vast contract'],
    ['Loon', '2.400 euro bruto per maand'],
    ['Begin', 'op 1 december'],
    ['Team', '5 collega\'s op de afdeling administratie'],
    ['Parking', 'ja, achter het gebouw'],
  ].map(([k, v]) => `<div class="row"><span class="k">${k}</span><span class="nl" style="font-weight:600">${v}</span></div>`).join('')}</div>
  <h2>Ce que j'observe chez le/la candidat·e</h2>
  <table class="check"><tr><th>Il/elle…</th><th>oui</th><th>pas encore</th></tr>
  ${['se présente clairement', 'parle de sa formation', 'parle de son expérience', 'dit ce qu\'il/elle sait faire', 'pose une question'].map((c) => `<tr><td>${c}</td><td>☐</td><td>☐</td></tr>`).join('')}</table></div>
  </div>
  <p class="hint">Variante pour un trio : la 3e personne observe avec la grille et donne un compliment + un conseil.</p>
  </section>`;
}

const situation = `Tu as un <b>entretien d'embauche chez Verbeke</b> avec Mme ou M. Vermeulen, responsable du personnel (ton/ta partenaire). Tu parles de toi, de ta formation, de ton expérience et de tes compétences. À la fin, tu poses une question sur le poste.`;

module.exports = {
  no: 5,
  icon: '💼',
  titleNl: 'Het sollicitatiegesprek',
  titleFr: 'Passer un entretien d\'embauche',
  theme: 'l\'emploi · sollicitatie',
  skill: 'Expression orale en interaction',
  cefr: 'A2 · synthèse',
  mode: 'EO en interaction · binômes A/B (ou trios)',
  duration: '2 × 50 min',
  syllabus: ['Fiche 6 p. 97', 'Fiche 2 p. 93', 'Perfectum p. 69', 'Woordvolgorde p. 68'],
  cando: 'répondre aux questions d\'un entretien d\'embauche (formation, expérience, compétences, disponibilité) et poser une question sur le poste.',
  goals: [
    'saluer et te présenter dans un registre formel (u)',
    'parler de ta formation et de ton expérience (au passé)',
    'dire ce que tu sais faire et quelles langues tu parles',
    'dire pourquoi tu veux le poste et quand tu peux commencer',
    'poser une question sur le poste et prendre congé',
  ],
  finalTask: `Tu passes un entretien de <b>4 minutes</b> avec Mme ou M. Vermeulen (carte B). Puis vous inversez les rôles.`,
  situation,
  buoy: [
    '**Sorry, ik begrijp de vraag niet.**', '**Kunt u de vraag herhalen?**',
    '**Kunt u wat langzamer spreken?**', '**Een moment, ik denk even na.**',
    '**Hoe zeg je « … » in het Nederlands?**', '**Ik weet het woord niet, maar …**',
  ],
  coverExtra: `<p class="small">👤 Tu peux parler de toi <b>ou</b> prendre un profil d'emprunt (fin de fiche). La carte du/de la recruteur·euse (rôle B) est aussi à la fin.</p>`,

  teacher: {
    intention: 'Se présenter favorablement à un employeur et obtenir les informations utiles sur le poste.',
    functions: [
      'se présenter (registre formel)',
      'raconter son parcours (formation, expérience)',
      'exprimer ses capacités et sa motivation',
      'dire sa disponibilité, s\'informer, prendre congé',
    ],
    lexis: 'formation, diplôme, expérience, compétences, langues, conditions de travail (werkuren, contract, loon).',
    form: '« la pince » : auxiliaire ou modal en 2e position, participe ou infinitif à la fin (<span class="nl">Ik heb … gewerkt · Ik kan … werken</span>) ; <span class="nl">Ik ben 28 jaar</span>.',
    dialogue: [
      ['B', 'Goedemorgen, mevrouw Benali. Neem plaats. Kunt u zich kort voorstellen?'],
      ['A', 'Ik heet Yasmina Benali. Ik ben 28 jaar en ik woon in Anderlecht.'],
      ['B', 'Welke opleiding hebt u gevolgd?'],
      ['A', 'Ik heb een opleiding secretariaat gevolgd. In 2022 heb ik mijn diploma gehaald.'],
      ['B', 'Hebt u al ervaring?'],
      ['A', 'Ja, ik heb twee jaar als receptioniste in een hotel gewerkt.'],
      ['B', 'Wat kunt u goed?'],
      ['A', 'Ik kan goed met de computer werken. Ik spreek Frans, Arabisch, Engels en een beetje Nederlands.'],
      ['B', 'Waarom wilt u hier werken?'],
      ['A', 'Omdat ik graag met mensen werk.'],
      ['B', 'Wanneer kunt u beginnen?'],
      ['A', 'Ik kan meteen beginnen. Mag ik iets vragen? Wat zijn de werkuren?'],
      ['B', 'Van negen tot vijf, van maandag tot vrijdag.'],
      ['A', 'Dank u wel voor het gesprek. Tot ziens!'],
    ],
    steps: [
      ['Rencontre', 'Écoute du dialogue (2 fois). Les apprenant·es repèrent les <b>questions</b> de la recruteuse (elles sont prévisibles !) et ce que fait la candidate (se présenter, raconter, demander).', '10 min'],
      ['Répétition', 'Chaîne de questions-réponses : <span class="nl">Hebt u al ervaring?</span> → chacun répond <span class="nl">Ik heb … gewerkt</span>. Geste de la « pince » (deux mains qui encadrent la phrase).', '10 min'],
      ['Variation', 'On change un seul emplacement à la fois : le métier, la durée, le lieu. Puis on transforme : <span class="nl">Ik werk → Ik heb … gewerkt → Ik kan … werken</span>.', '10 min'],
      ['Choix', 'Présentation du parcours. Chacun choisit sa variante et son identité (réelle ou profil d\'emprunt).', '5 min'],
      ['Préparation', 'Préparation avec la fiche choisie. Les rôles B lisent leur carte (questions + infos du poste).', '15 min'],
      ['Interaction', 'Entretiens de 4 min, puis inversion des rôles. Possible en trio : la 3e personne observe avec la grille de la carte B. Volontaires devant la classe (« jury »).', '25 min'],
      ['Retour', 'Focus on form : 2 ou 3 phrases au passé entendues, mises « en pince » au tableau. Autoévaluation et choix de la variante suivante.', '15 min'],
    ],
    focus: `<b>La pince (tang) :</b> le verbe conjugué en 2e place, le participe ou l'infinitif à la fin.<br>
    <span class="nl">Ik werk in een hotel.</span> → <span class="nl">Ik <u>heb</u> in een hotel <u>gewerkt</u>.</span> → <span class="nl">Ik <u>kan</u> in een hotel <u>werken</u>.</span><br>
    <b>Comment :</b> geste des deux mains qui « pincent » la phrase. Le passé composé et les modaux suivent le même schéma : on ne les présente pas comme deux règles, mais comme une seule forme.<br>
    <b>Spirale :</b> <span class="nl">In 2022 heb ik…</span> (verbe en 2 ↺ fiches 1 et 4), <span class="nl">Ik kan meteen beginnen</span> (↺ disponibilités), <span class="nl">u / uw</span> (↺ fiches 2, 3, 4).<br>
    <span class="muted small">Syllabus : Perfectum p. 69 · Woordvolgorde p. 68 · Fiche 6 p. 97 · Fiche 2 p. 93.</span>`,
    errors: [
      ['Ik heb 28 jaar.', 'Ik ben 28 jaar.', 'Calque de « j\'ai » : reprise immédiate en écho.'],
      ['Ik heb twee jaar gewerkt in een hotel als receptioniste.', 'Ik heb twee jaar als receptioniste in een hotel gewerkt.', 'Geste de la pince ; le participe ferme la phrase.'],
      ['Ik kan werken goed met de computer.', 'Ik kan goed met de computer werken.', 'Même pince avec les modaux.'],
      ['Ik ben gewerkt…', 'Ik heb … gewerkt.', '<span class="nl">hebben</span> par défaut ; <span class="nl">zijn</span> = déplacement / changement (A2+).'],
    ],
    grid: [
      ['Réalisation de la tâche', 'Répond à chaque question par 1 phrase.', 'Développe (exemple, raison), pose 2 questions.'],
      ['Lexique', 'Formation, métier, langues.', 'Compétences variées, conditions de travail.'],
      ['Forme ciblée', '<span class="nl">Ik heb … gewerkt</span> comme bloc.', 'Pince correcte au passé et avec les modaux.'],
      ['Interaction, registre', 'Garde le « u », remercie.', 'Relance, fait préciser, prend congé de façon naturelle.'],
    ],
    adds: [
      '<b>Carte recruteur·euse</b> avec les infos du poste : le/la candidat·e doit <b>poser des questions</b> pour les obtenir (écart d\'information).',
      '<b>Profils d\'emprunt</b> (les mêmes que dans la fiche 1) : un CV fictif quand on n\'a pas d\'expérience ou qu\'on ne veut pas parler de soi.',
      '<b>Synthèse en spirale</b> : la fiche recycle les fiches 1 (tâches), 3 (disponibilités, chiffres) et 4 (registre, <span class="nl">omdat</span>), signalées par ↺.',
      '<b>Trio avec observateur·rice</b> : une grille simple dans la carte B pour un retour entre pairs.',
    ],
    extend: [
      'Entretien filmé au smartphone, puis réécoute avec la grille d\'autoévaluation.',
      '« Jury » : deux recruteur·euses comparent trois candidat·es (<span class="nl">Karim heeft meer ervaring dan Sofia</span>, ↺ Groter dan p. 76).',
    ],
  },

  v1: {
    steps: [
      ['Salue et remercie.', ['Goedemorgen, mevrouw Vermeulen.', 'Dank u.']],
      ['Présente-toi (nom, âge, ville).', ['Ik heet Yasmina Benali.', 'Ik ben 28 jaar. Ik woon in Anderlecht.']],
      ['Parle de ta formation.', ['Ik heb een opleiding secretariaat gevolgd.', 'In 2022 heb ik mijn diploma gehaald.']],
      ['Parle de ton expérience.', ['Ik heb twee jaar als receptioniste gewerkt.', 'Ik heb nog geen ervaring, maar ik leer snel.']],
      ['Dis ce que tu sais faire et quelles langues tu parles.', ['Ik kan goed met de computer werken.', 'Ik spreek Frans, Engels en een beetje Nederlands.']],
      ['Dis pourquoi tu veux le poste et quand tu peux commencer.', ['Ik wil hier graag werken, want ik werk graag met mensen.', 'Ik kan meteen beginnen.']],
      ['Pose une question. Remercie et dis au revoir.', ['Mag ik iets vragen? Wat zijn de werkuren?', 'Dank u wel voor het gesprek. Tot ziens!']],
    ],
    bank: [
      { h: 'Banque de mots : remplace si tu veux', items: [
        ['een opleiding boekhouding', 'comptabilité'], ['een opleiding logistiek', 'logistique'], ['een opleiding informatica', 'informatique'],
        ['met klanten praten', 'parler avec les clients'], ['in een team werken', 'travailler en équipe'], ['organiseren · plannen', 'organiser · planifier'],
        ['meteen', 'tout de suite'], ['vanaf maandag', 'à partir de lundi'], ['vanaf 1 december', 'à partir du 1er déc.'],
      ] },
      { h: 'Tes questions pour l\'employeur', items: [
        ['Wat zijn de werkuren?', 'les horaires ?'], ['Is het een vast contract?', 'un CDI ?'], ['Wat is het loon?', 'le salaire ?'],
        ['Wanneer begin ik?', 'je commence quand ?'], ['Is er een parking?', 'un parking ?'], ['Met hoeveel collega\'s werk ik?', 'combien de collègues ?'],
      ] },
    ],
  },

  v2: {
    intro: 'Pendant l\'entretien, c\'est la recruteuse qui pose les questions. Prépare tes réponses : <b>numérote</b> les phrases dans l\'ordre où tu penses les utiliser, puis complète les « … » avec tes informations (ou un profil d\'emprunt).',
    groups: [
      { h: 'L\'accueil', lines: ['Goedemorgen, mevrouw Vermeulen.', 'Dank u.', 'Ik heet …', 'Ik ben … jaar. Ik woon in …'] },
      { h: 'Mon profil', lines: ['Ik heb een opleiding … gevolgd.', 'Ik heb … jaar als … gewerkt.', 'Ik heb nog geen ervaring, maar ik leer snel.', 'Ik kan goed …', 'Ik spreek …'] },
      { h: 'Le poste', lines: ['Ik wil hier graag werken, want …', 'Ik kan meteen beginnen.', 'Mag ik iets vragen? Is het een vast contract?', 'Dank u wel voor het gesprek. Tot ziens!'] },
    ],
    bank: [
      'secretariaat · boekhouding · logistiek · informatica · verkoop · horeca',
      'met de computer werken · met klanten praten · in een team werken · organiseren · snel werken',
      'meteen · vanaf maandag · vanaf 1 december · volgende maand',
    ],
    challenge: 'complète tous les « … » et ajoute <b>un détail</b> : une tâche que tu as faite (↺ fiche 1 : <span class="nl">Ik heb de bestellingen gecontroleerd.</span>).',
  },

  v3: {
    plan: 'Prépare-toi : 1) accueil · 2) formation et expérience · 3) compétences · 4) motivation et disponibilité · 5) ta question',
    patterns: [
      ['Se présenter', '**Ik heet** + <<nom>> **. Ik ben** + <<âge>> + **jaar.** ↺', 'Ik heet Karim Haddad. Ik ben 31 jaar.'],
      ['Formation', '**Ik heb een opleiding** + <<domaine>> + **gevolgd.**', 'Ik heb een opleiding logistiek gevolgd.'],
      ['Diplôme', '**In** + <<année>> + [[hebben]] + **ik mijn diploma gehaald.** ↺', 'In 2019 heb ik mijn diploma gehaald.'],
      ['Expérience', '**Ik heb** + <<durée>> + **als** + <<métier>> + **gewerkt.**', 'Ik heb drie jaar als magazijnier gewerkt.'],
      ['Tâches passées', '**Ik heb** + <<tâche>> + <<participe>>', 'Ik heb de bestellingen gecontroleerd.'],
      ['Compétences', '**Ik kan goed** + <<compétence (infinitif)>>', 'Ik kan goed in een team werken.'],
      ['Motivation', '**Ik wil hier graag werken, want** + {S} + {V} + … (A2 : **omdat** … + {V}) ↺', '…, omdat ik graag met klanten praat.'],
      ['Disponibilité', '**Ik kan** + <<moment>> + **beginnen.** ↺', 'Ik kan vanaf 1 december beginnen.'],
      ['Question', '**Mag ik iets vragen?** + <<Wat zijn / Is het / Wanneer>> … **?**', 'Is het een vast contract?'],
      ['Prendre congé', '**Dank u wel voor het gesprek. Tot ziens!**', 'Dank u wel voor het gesprek.'],
    ],
    observe: '**Ik werk in een hotel.** → **Ik heb in een hotel gewerkt.** → **Ik kan in een hotel werken.**',
    question: 'Quels deux mots « encadrent » la phrase comme une pince ?',
    words: 'de opleiding · het diploma · de ervaring · gevolgd · gehaald · gewerkt · kunnen · willen · meteen · vanaf · de werkuren · het contract',
  },

  v4: {
    keys: [
      '**Ik heb** … + <<participe>> (**gewerkt · gevolgd · gehaald**)',
      '**Ik kan** · **Ik wil** … + <<infinitif>>',
      '**…, want** … · **…, omdat** … + {V}',
      '**Ik ben** … **jaar** (pas : heb !)',
      '**Mag ik iets vragen?** …',
    ],
    further: 'cite une qualité avec un exemple au passé (<span class="nl">Ik ben flexibel: ik heb vaak in het weekend gewerkt.</span>) ; pose deux questions et note les réponses.',
  },

  v5: {
    task: 'Tu passes un entretien chez Verbeke avec Mme ou M. Vermeulen (ton/ta partenaire, carte B). Présente-toi, parle de ta formation, de ton expérience et de tes compétences, dis pourquoi tu veux le poste et quand tu peux commencer. Pose au moins une question sur le poste.',
    timing: '<b>Préparation :</b> 3 minutes, sans notes · <b>Entretien :</b> 4 minutes, puis on inverse les rôles',
    bonus: 'donne un exemple concret (une tâche que tu as faite ↺ fiche 1) et pose deux questions.',
    stress1: 'Avant l\'entretien, j\'étais stressé·e.',
    check: [
      'saluer, me présenter et prendre congé poliment (u)',
      'parler de ma formation',
      'parler de mon expérience (Ik heb … gewerkt)',
      'dire ce que je sais faire (Ik kan goed …)',
      'dire quand je peux commencer',
      'poser une question sur le poste',
      'continuer à parler même quand un mot me manquait',
    ],
  },

  extraPages: [recruiterPage, profilesPage],
};
