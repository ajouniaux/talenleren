// Document d'ouverture : le parcours jalonné et la méthode en une page.
const { htmlDoc, runHead, LEVELS } = require('./lib');

const STEPS = [
  ['1', '☕ Op het werk', 'Se présenter au travail, décrire ses tâches', 'A1', '#3d9a5f', 'EO interaction'],
  ['2', '🗺️ De weg vragen', 'Demander le chemin vers une entreprise', 'A1', '#3d9a5f', 'EO interaction'],
  ['3', '📞 Aan de telefoon', 'Prendre un appel, noter un message', 'A1 → A2', '#2b8c99', 'EO interaction'],
  ['4', '✉️ Een formele e-mail', 'Répondre à une invitation à un entretien', 'A2', '#3a5fc0', 'Expression écrite'],
  ['5', '💼 Het sollicitatiegesprek', 'Passer un entretien d\'embauche', 'A2 · synthèse', '#7b4bb3', 'EO interaction'],
];

const SPIRAL = [
  ['Verbe en 2e position (V2, inversion)', 'focus', '', '', 'focus', '↺'],
  ['Impératif', '', 'focus', '', '', ''],
  ['Prépositions de lieu (sans « van »)', '', 'focus', '', '', ''],
  ['Verbes séparables (terug|bellen)', '↺', '', 'focus', '', ''],
  ['Registre formel u / uw', '', '↺', '↺', 'focus', '↺'],
  ['want → omdat (verbe à la fin)', '↺', '', '', 'A2', 'A2'],
  ['Verbe à la fin : Weet u waar … is?', '', 'A2', '', '', ''],
  ['La « pince » : perfectum et modaux', '', '', '↺', '', 'focus'],
  ['Chiffres, épeler, dates', '', '', 'focus', '↺', '↺'],
];

const LINKS = [
  ['1', 'Fiche 7 p. 98 · Werk & bedrijf p. 84 · Woordvolgorde p. 68 · Altijd · nooit p. 74', 'séance 16'],
  ['2', 'Fiche 9 p. 100a · In de stad p. 80 · Voorzetsels p. 65 · Gebiedende wijs p. 67', 'séance 9'],
  ['3', 'Telefoon & mail p. 85 · Getallen p. 64 · Hem · haar · hun p. 71 · Fiche 3 p. 94', 'séances 12-13'],
  ['4', 'Telefoon & mail p. 85 · Administratie p. 86 · En · maar · want p. 73', 'séance 12'],
  ['5', 'Fiche 6 p. 97 · Fiche 2 p. 93 · Perfectum p. 69', 'séances 14-15'],
];

module.exports = function parcours() {
  const cell = (v) =>
    v === 'focus'
      ? '<td style="text-align:center;background:#1d2433;color:#fff;font-weight:700">focus</td>'
      : v === 'A2'
        ? '<td style="text-align:center;background:#e7eefb;color:#1f4ea3;font-weight:700">A2</td>'
        : v === '↺'
          ? '<td style="text-align:center"><span class="spiral">↺</span></td>'
          : '<td></td>';

  const p1 = `<section class="page">
  ${runHead('Néerlandais 2 (UE2) · Mises en situation socioprofessionnelles', 'Document enseignant')}
  <div class="kicker">Parcours différencié · calque ARK (Nedconsult)</div>
  <h1 class="big">Néerlandais au travail</h1>
  <div class="sub">5 fiches · 5 variantes chacune · de A1 à A2 · un fil rouge : la firma Verbeke, à Bruxelles</div>
  <div class="path">${STEPS.map(
    ([n, t, d, lv, c, m]) => `<div class="st" style="border-color:${c}"><div class="no" style="color:${c}">${n}</div><div class="ti">${t}</div><div class="small muted">${d}</div><div style="margin-top:1.5mm"><span class="lv" style="background:${c}">${lv}</span> <span class="small muted">${m}</span></div></div>`
  ).join('')}</div>
  <p class="small">L'ordre suit la <b>difficulté</b>, pas la chronologie de l'histoire : on commence par des échanges courts et prévisibles entre collègues (A1), on finit par l'entretien, qui réutilise tout (A2). Chaque fiche peut aussi s'utiliser seule, à la séance indiquée.</p>
  <h2>La spirale grammaticale : chaque forme revient</h2>
  <table><tr><th>Forme</th><th style="text-align:center">1</th><th style="text-align:center">2</th><th style="text-align:center">3</th><th style="text-align:center">4</th><th style="text-align:center">5</th></tr>
  ${SPIRAL.map(([f, ...c]) => `<tr><td>${f}</td>${c.map(cell).join('')}</tr>`).join('')}</table>
  <p class="small muted"><b>focus</b> = forme travaillée en <i>focus on form</i> dans la fiche · <span class="spiral">↺</span> = forme réutilisée, signalée « déjà vu » dans les patrons · <b>A2</b> = forme proposée en bonus.</p>
  <h2>Liens avec le syllabus</h2>
  <table>${LINKS.map(([n, l, s]) => `<tr><td style="width:8mm"><b>${n}</b></td><td class="small">${l}</td><td class="small muted" style="width:26mm">${s}</td></tr>`).join('')}</table>
  </section>`;

  const p2 = `<section class="page">
  ${runHead('Néerlandais 2 (UE2) · Mises en situation socioprofessionnelles', 'La méthode en une page')}
  <div class="kicker">Ce qu'on garde du dispositif ARK</div>
  <h1>La méthode en une page</h1>
  <h2>1 · Partir de ce qu'on veut dire, pas de la règle</h2>
  <table><tr><th>Intention</th><th>Fonction langagière</th><th>Expression lexicalisée</th><th>Patron</th></tr>
  <tr><td>se présenter au travail</td><td>décrire ses tâches</td><td class="nl">Elke dag schrijf ik e-mails.</td><td>${'<span class="slot">fréquence</span> + <span class="v">V</span> + <span class="s">S</span> + <span class="slot">tâche</span>'}</td></tr>
  <tr><td>garder un rendez-vous</td><td>refuser poliment</td><td class="nl">Helaas ben ik dinsdag niet beschikbaar.</td><td><span class="nl">Helaas</span> + <span class="v">V</span> + <span class="s">S</span> + …</td></tr></table>
  <p class="small">On rencontre d'abord un bloc tout fait (<b>répétition</b>), puis la même structure avec d'autres mots (<b>variation</b>). La règle n'est jamais un préalable : on la fait <b>remarquer</b> dans la tâche (encadré « Observe », phase Retour).</p>
  <h2>2 · Une même tâche, cinq niveaux d'aide</h2>
  <div class="levels">${LEVELS.map((L) => `<div><div class="hd" style="background:${L.color}">${L.n} · ${L.name}</div><div class="bd">${L.tag}</div></div>`).join('')}</div>
  <p class="small">La tâche finale est <b>la même pour tous</b>. L'apprenant·e choisit sa variante, sans jugement, et peut monter ou redescendre. On vise l'anxiété (peur de se tromper, d'oublier ce qu'on sait sous la pression), sans baisser l'exigence.</p>
  <h2>3 · Ce que ces fiches ajoutent au modèle</h2>
  <table>
  <tr><td style="width:44mm"><b>🛟 Bouée de secours</b></td><td class="small">Des phrases de dépannage dans toutes les variantes : savoir quoi dire quand on bloque est une compétence, pas un échec.</td></tr>
  <tr><td><b>⇄ Écart d'information</b></td><td class="small">Cartes A/B, carte de l'appelant·e, carte du/de la recruteur·euse : on parle parce qu'il manque vraiment une information à l'autre.</td></tr>
  <tr><td><b>✔ Produit vérifiable</b></td><td class="small">Lieu noté sur le plan, message téléphonique, mail : l'apprenant·e voit tout de suite si l'échange a réussi.</td></tr>
  <tr><td><b>↺ Spirale</b></td><td class="small">Les formes déjà vues sont signalées dans les patrons : on montre qu'on réutilise ce qu'on sait déjà.</td></tr>
  <tr><td><b>👤 Profils d'emprunt</b></td><td class="small">Une identité fictive pour qui n'a pas (encore) d'emploi ou ne veut pas parler de soi. C'est de la sécurité affective, pour un public adulte.</td></tr>
  <tr><td><b>A2 Bonus</b></td><td class="small">Même tâche, exigence plus haute : différenciation vers le haut, sans fiche supplémentaire.</td></tr>
  <tr><td><b>✍ Transposition à l'écrit</b></td><td class="small">Fiche 4 : les 5 variantes appliquées à l'expression écrite, avec une relecture croisée à la place de l'interaction.</td></tr>
  <tr><td><b>📋 Grille A1 / A2</b></td><td class="small">Pour chaque fiche : forme à faire remarquer, erreurs attendues chez des francophones, critères d'observation.</td></tr>
  </table>
  <h2>4 · Conseils pratiques</h2>
  <ul class="small">
  <li><b>Imprimer chaque variante sur une couleur de papier</b> (vert, bleu clair, bleu, violet, orange) : le choix se voit et se normalise dans la classe.</li>
  <li>Imprimer <b>toutes</b> les variantes en quelques exemplaires : changer de variante en cours de route doit rester possible.</li>
  <li>Les pages 1-2 de chaque fiche sont pour l'enseignant·e ; les pages élèves commencent à la page de garde.</li>
  <li>Les binômes peuvent <b>mélanger les niveaux</b> : un·e Champion·ne et une Légende font la même tâche.</li>
  </ul>
  <p class="foot">Méthode d'après : ASBL Nedconsult, N. Tybergin, <i>Expérimentation d'un dispositif d'apprentissage de l'expression orale en néerlandais</i> (Athénée Royal de Koekelberg, 2021-2023).</p>
  </section>`;

  return htmlDoc('Parcours · Néerlandais au travail', p1 + p2);
};
