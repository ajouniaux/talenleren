// Profils d'emprunt communs aux fiches 1 (se présenter au travail) et 5 (entretien).
const { runHead } = require('../lib');

const PROFILES = [
  {
    name: 'Karim Haddad', age: '31 jaar', city: 'Molenbeek', job: 'magazijnier', dept: 'logistiek',
    edu: 'logistiek (2019)', exp: '3 jaar magazijnier in een supermarkt',
    tasks: 'de bestellingen controleren · de pakjes klaarmaken · de dozen tellen',
    lang: 'Frans, Arabisch, een beetje Nederlands', can: 'snel werken · in een team werken', start: 'meteen',
  },
  {
    name: 'Yasmina Benali', age: '28 jaar', city: 'Anderlecht', job: 'receptioniste', dept: 'receptie',
    edu: 'secretariaat (2022)', exp: '2 jaar receptioniste in een hotel',
    tasks: 'de telefoon beantwoorden · de klanten ontvangen · de vergaderingen plannen',
    lang: 'Frans, Arabisch, Engels, een beetje Nederlands', can: 'met de computer werken · met klanten praten', start: 'vanaf maandag',
  },
  {
    name: 'Sofia Rossi', age: '24 jaar', city: 'Elsene', job: 'boekhoudster', dept: 'boekhouding',
    edu: 'bachelor boekhouding (2025)', exp: 'nog geen ervaring · een stage van 3 maanden',
    tasks: 'facturen maken · de betalingen controleren · met Excel werken',
    lang: 'Frans, Italiaans, Engels', can: 'met cijfers werken · organiseren', start: 'vanaf 1 december',
  },
  {
    name: 'Marc Dubois', age: '45 jaar', city: 'Schaarbeek', job: 'verkoper', dept: 'verkoop',
    edu: 'marketing (2003)', exp: '15 jaar verkoper in een winkel',
    tasks: 'de klanten helpen · de klanten bellen · e-mails schrijven',
    lang: 'Frans, Nederlands, Engels', can: 'met klanten praten · plannen', start: 'vanaf volgende maand',
  },
];

function profilesPage(f) {
  const rows = (p) =>
    [
      ['Leeftijd', 'âge', p.age],
      ['Woont in', 'habite à', p.city],
      ['Beroep', 'métier', p.job],
      ['Afdeling', 'service', p.dept],
      ['Taken', 'tâches', p.tasks],
      ['Opleiding', 'formation', p.edu],
      ['Ervaring', 'expérience', p.exp],
      ['Talen', 'langues', p.lang],
      ['Kan goed', 'sait bien', p.can],
      ['Beschikbaar', 'disponible', p.start],
    ]
      .map(([k, fr, v]) => `<div class="row"><span class="k">${k} <span class="fr">${fr}</span></span><span class="nl" style="font-weight:600">${v}</span></div>`)
      .join('');
  return `<section class="page">
  ${runHead(`${f.titleNl} · Fiche ${f.no}`, 'Profils d\'emprunt · à découper')}
  <div class="kicker">Si tu préfères ne pas parler de ta vie</div>
  <h1>Profils d'emprunt</h1>
  <p class="sub" style="font-size:10pt">Tu peux parler de toi <b>ou</b> prendre une de ces identités. C'est un choix libre, comme la variante. Les mêmes personnes reviennent dans les fiches 1 et 5.</p>
  <div class="cards">${PROFILES.map((p) => `<div class="card cut"><div class="ct">👤 ${p.name}</div>${rows(p)}</div>`).join('')}</div>
  <p class="hint" style="margin-top:3mm">${f.no === 1 ? 'Fiche 1 : transforme les tâches en phrases. <span class="nl">de bestellingen controleren</span> → <span class="nl">Ik controleer de bestellingen.</span>' : 'Fiche 5 : transforme le profil en phrases au passé. <span class="nl">3 jaar magazijnier</span> → <span class="nl">Ik heb drie jaar als magazijnier gewerkt.</span>'}</p>
  </section>`;
}

module.exports = { PROFILES, profilesPage };
