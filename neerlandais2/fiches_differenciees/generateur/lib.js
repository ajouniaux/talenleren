// Gabarit commun des fiches différenciées (calque ARK · 5 variantes).
// Chaque fiche est un objet de données (fiches/fN.js) ; ce fichier le transforme en HTML A4.

const LEVELS = [
  { n: 1, name: 'Champion·ne', color: '#3d9a5f', tag: 'Je suis chaque étape. J\'ai toutes les phrases.' },
  { n: 2, name: 'Superchampion·ne', color: '#2b8c99', tag: 'J\'ai toutes les phrases. J\'organise moi-même.' },
  { n: 3, name: 'Héro·ïne', color: '#3a5fc0', tag: 'Je construis mes phrases avec des modèles.' },
  { n: 4, name: 'Superhéro·ïne', color: '#7b4bb3', tag: 'J\'ai quelques structures. Je note mes aides.' },
  { n: 5, name: 'Légende', color: '#df7f26', tag: 'Sans aide, comme à l\'évaluation.' },
];

const CSS = `
@page { size: A4; margin: 12mm 14mm 11mm 14mm; }
:root {
  --ink: #1d2433; --muted: #5d6677; --line: #d9dee7; --soft: #f3f5f9;
  --nl: #1f4ea3; --slot: #e6e9ef; --accent: #1d2433;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { font-family: 'Inter', 'DejaVu Sans', sans-serif; color: var(--ink); font-size: 9.6pt; line-height: 1.38; }
.page { page-break-after: always; break-after: page; position: relative; }
.page:last-child { page-break-after: auto; break-after: auto; }
.run { font-size: 7.5pt; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); margin-bottom: 3.5mm; display: flex; justify-content: space-between; }
.kicker { font-size: 8pt; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); margin: 0 0 1mm; }
h1 { font-size: 24pt; line-height: 1.1; margin: 0 0 1.5mm; letter-spacing: -.01em; }
h1.big { font-size: 34pt; }
.sub { font-size: 12pt; color: var(--muted); margin: 0 0 4mm; }
h2 { font-size: 12pt; margin: 3.5mm 0 1.6mm; }
h3 { font-size: 10pt; margin: 3mm 0 1mm; text-transform: uppercase; letter-spacing: .05em; color: var(--muted); }
p { margin: 0 0 2mm; }
ul { margin: 0 0 2mm; padding-left: 5mm; }
li { margin-bottom: .8mm; }
.nl { color: var(--nl); font-weight: 700; }
.fr { color: var(--muted); font-style: italic; font-weight: 400; font-size: 8.5pt; }
.slot { background: var(--slot); font-style: italic; font-weight: 500; color: #3c4456; padding: 0 1.4mm; border-radius: 1.2mm; white-space: nowrap; }
.v { color: #7b4bb3; font-weight: 700; }
.s { font-weight: 800; color: var(--ink); }
.plus { color: var(--muted); padding: 0 .6mm; }
.badges { display: flex; gap: 2mm; flex-wrap: wrap; margin-bottom: 4mm; }
.badge { font-size: 8pt; font-weight: 600; border: 1px solid var(--line); border-radius: 10mm; padding: .6mm 2.6mm; background: #fff; }
.badge.lvl { background: var(--ink); color: #fff; border-color: var(--ink); }
.box { border: 1.4px solid var(--ink); border-radius: 2mm; padding: 2.5mm 3.5mm; margin: 0 0 3mm; }
.box .kicker { color: var(--ink); }
.soft { background: var(--soft); border-radius: 2mm; padding: 2.5mm 3.5mm; margin: 0 0 3mm; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
.grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 3mm; }
table { width: 100%; border-collapse: collapse; margin: 0 0 3mm; }
th, td { border: 1px solid var(--line); padding: 1.1mm 2mm; vertical-align: top; text-align: left; }
th { background: var(--ink); color: #fff; font-size: 7.8pt; letter-spacing: .05em; text-transform: uppercase; }
td.time { width: 16mm; color: var(--muted); text-align: right; white-space: nowrap; }
td.phase { width: 27mm; font-weight: 700; }
.dlg td { border: none; padding: .35mm 1.2mm; font-size: 8.8pt; }
.dlg td.who { width: 6mm; color: var(--muted); font-weight: 700; }
.levels { display: grid; grid-template-columns: repeat(5, 1fr); border: 1px solid var(--ink); border-radius: 2mm; overflow: hidden; margin-bottom: 3mm; }
.levels > div { border-right: 1px solid var(--line); }
.levels > div:last-child { border-right: none; }
.levels .hd { color: #fff; font-weight: 700; text-align: center; padding: 1.8mm 1mm; font-size: 9pt; }
.levels .bd { padding: 2mm; font-size: 8.3pt; color: var(--muted); text-align: center; }
.vhead { display: flex; align-items: stretch; gap: 3mm; margin-bottom: 3mm; }
.vnum { width: 15mm; min-height: 15mm; color: #fff; font-size: 22pt; font-weight: 800; display: flex; align-items: center; justify-content: center; border-radius: 1.5mm; }
.vtitle h1 { font-size: 20pt; margin: 0; }
.stars { font-family: 'DejaVu Sans', sans-serif; font-size: 13pt; margin-left: 2mm; letter-spacing: .05em; }
.vtitle .tag { color: var(--muted); font-size: 9.5pt; }
.steps td:first-child { width: 47%; }
.steps td .num { font-weight: 800; margin-right: 1.2mm; }
.bank { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); margin-bottom: 1mm; }
.bank > div { border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: .9mm 2mm; line-height: 1.25; }
.bank-h { font-size: 7.8pt; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--muted); margin: 2.5mm 0 1mm; }
.hint { font-size: 8.5pt; color: var(--muted); font-style: italic; }
.order .line { display: flex; gap: 2.5mm; margin: .9mm 0; }
.order .blank { width: 9mm; border-bottom: 1px solid var(--ink); flex: none; }
.order .grp { font-size: 8pt; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: .05em; margin: 2.5mm 0 .5mm; }
.pat td:first-child { width: 30mm; color: var(--muted); font-size: 9pt; }
.pat .ex { display: block; font-size: 8.3pt; color: var(--muted); margin-top: .5mm; }
.pat .ex b { color: var(--nl); font-weight: 600; }
.legend { font-size: 8.5pt; margin-bottom: 2mm; }
.rule { border-bottom: 1px solid #c9cfda; height: 8mm; }
.keys div { margin: 1.2mm 0; }
.check td { text-align: center; width: 15mm; }
.check td:first-child { text-align: left; width: auto; }
.check th { text-align: center; }
.check th:first-child { text-align: left; }
.scale { text-align: center; white-space: nowrap; letter-spacing: .25em; font-size: 11pt; }
.buoy { border: 1.4px dashed #df7f26; border-radius: 2mm; padding: 2mm 3.5mm; margin: 0 0 3mm; background: #fff8f0; }
.buoy .kicker { color: #b45f12; }
.buoy .items { display: grid; grid-template-columns: 1fr 1fr; gap: .6mm 5mm; }
.observe { border: 1px solid var(--line); border-left: 4px solid var(--nl); border-radius: 1mm; padding: 2mm 3mm; margin: 2mm 0 3mm; }
.observe .q { margin-top: 1mm; }
.fill { display: inline-block; min-width: 55mm; border-bottom: 1px dotted var(--ink); }
.small { font-size: 8.5pt; }
.muted { color: var(--muted); }
.spiral { font-size: 7.5pt; font-weight: 700; color: #2b8c99; border: 1px solid #2b8c99; border-radius: 1mm; padding: 0 1mm; margin-left: 1mm; vertical-align: 1px; }
.cards { display: grid; grid-template-columns: 1fr 1fr; gap: 3mm; }
.card { border: 1.4px solid var(--ink); border-radius: 2mm; padding: 2.5mm 3mm; break-inside: avoid; }
.card .ct { font-weight: 800; font-size: 10.5pt; margin-bottom: 1mm; }
.card .row { display: flex; gap: 2mm; font-size: 9pt; margin: .5mm 0; }
.card .row .k { width: 22mm; flex: none; color: var(--muted); }
.cut { border: 1.4px dashed var(--muted); }
.err td:first-child { color: #b3261e; text-decoration: line-through; width: 34%; }
.err td:nth-child(2) { color: var(--nl); font-weight: 700; width: 34%; }
.mail { border: 1.4px solid var(--ink); border-radius: 2mm; overflow: hidden; margin-bottom: 3mm; }
.mail .bar { background: var(--ink); color: #fff; font-size: 8pt; padding: 1.2mm 3mm; letter-spacing: .05em; }
.mail .hdr { border-bottom: 1px solid var(--line); padding: 1.5mm 3mm; font-size: 9pt; }
.mail .hdr div { display: flex; gap: 2mm; }
.mail .hdr .k { width: 20mm; color: var(--muted); }
.mail .body { padding: 3mm; }
.mail .body p { margin: 0 0 1.8mm; }
.form { border: 1.4px solid var(--ink); border-radius: 2mm; padding: 3mm; }
.form .f { display: flex; gap: 2mm; align-items: flex-end; margin: 2.2mm 0; }
.form .f .k { width: 30mm; font-weight: 700; flex: none; }
.form .f .k span { display: block; font-weight: 400; font-size: 7.5pt; color: var(--muted); }
.form .f .l { flex: 1; border-bottom: 1px solid var(--ink); height: 5mm; }
.path { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2.5mm; margin: 2mm 0 4mm; }
.path .st { border: 1.4px solid var(--ink); border-radius: 2mm; padding: 2.5mm; position: relative; }
.path .st .no { font-size: 18pt; font-weight: 800; line-height: 1; }
.path .st .ti { font-weight: 700; margin: 1mm 0; }
.path .st .lv { display: inline-block; font-size: 7.5pt; font-weight: 700; color: #fff; padding: .3mm 1.8mm; border-radius: 5mm; }
.foot { font-size: 7.5pt; color: var(--muted); margin-top: 2mm; }
.arrows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2mm; }
.arrows div { border: 1px solid var(--line); border-radius: 1.5mm; padding: 1.5mm 2mm; display: flex; gap: 2mm; align-items: center; }
.arrows .ic { font-size: 15pt; width: 8mm; text-align: center; color: var(--ink); }
.who-tag { display: inline-block; background: var(--ink); color: #fff; font-weight: 800; border-radius: 1mm; padding: 0 1.8mm; margin-right: 1.5mm; }
`;

const esc = (s) => String(s);
// Raccourcis de notation dans les données :
//   {S}  -> sujet   ; [x] -> verbe à conjuguer ; <<x>> -> emplacement ; **x** -> néerlandais fixe
function fmt(s) {
  return esc(s)
    .replace(/\{S\}/g, '<span class="s">S</span>')
    .replace(/\{V\}/g, '<span class="v">V</span>')
    .replace(/\[\[(.+?)\]\]/g, '<span class="v">[$1]</span>')
    .replace(/<<(.+?)>>/g, '<span class="slot">$1</span>')
    .replace(/\*\*(.+?)\*\*/g, '<span class="nl">$1</span>')
    .replace(/ \+ /g, '<span class="plus">+</span>')
    .replace(/↺/g, '<span class="spiral">↺ déjà vu</span>');
}

function runHead(left, right = '') {
  return `<div class="run"><span>${left}</span><span>${right}</span></div>`;
}

function stars(n, color) {
  return `<span class="stars" style="color:${color}">${'★'.repeat(n)}${'☆'.repeat(5 - n)}</span>`;
}

function vHead(f, n, extra = '') {
  const L = LEVELS[n - 1];
  return `${runHead(`${f.titleNl} · Fiche ${f.no}`, `Variante ${n} / 5${extra}`)}
  <div class="vhead"><div class="vnum" style="background:${L.color}">${n}</div>
  <div class="vtitle"><h1>${L.name}${stars(n, L.color)}</h1><div class="tag">${f.levelTags?.[n - 1] || L.tag}</div></div></div>`;
}

function situation(f, short = false) {
  return `<div class="box"><div class="kicker">Mise en situation</div>${short && f.situationShort ? f.situationShort : f.situation}</div>`;
}

function buoy(f) {
  return `<div class="buoy"><div class="kicker">🛟 Bouée de secours · si un mot te manque</div><div class="items">${f.buoy
    .map((b) => `<div>${fmt(b)}</div>`)
    .join('')}</div></div>`;
}

function dialogue(lines) {
  return `<table class="dlg">${lines
    .map(([w, t]) => `<tr><td class="who">${w}</td><td class="nl">${t}</td></tr>`)
    .join('')}</table>`;
}

// ---------- Pages enseignant ----------
function teacherPages(f) {
  const t = f.teacher;
  const p1 = `<section class="page">
  ${runHead(`Document enseignant · Fiche ${f.no} · ${f.titleNl}`, `${f.cefr} · ${f.mode}`)}
  <div class="kicker">Scénario de séance</div>
  <h1>${f.titleNl}</h1>
  <div class="sub">${f.titleFr}</div>
  <div class="badges"><span class="badge lvl">${f.cefr}</span><span class="badge">${f.mode}</span><span class="badge">⏱ ${f.duration}</span>${f.syllabus
    .map((s) => `<span class="badge">📘 ${s}</span>`)
    .join('')}</div>
  <div class="grid2">
    <div class="soft">
      <div class="kicker">Intention de communication</div><p>${t.intention}</p>
      <div class="kicker">Fonctions langagières</div><ul>${t.functions.map((x) => `<li>${x}</li>`).join('')}</ul>
      <div class="kicker">Cibles</div>
      <p class="small"><b>Lexique :</b> ${t.lexis}</p>
      <p class="small"><b>Forme :</b> ${t.form}</p>
    </div>
    <div class="soft"><div class="kicker">${t.dialogueTitle || 'Dialogue modèle'}</div>${dialogue(t.dialogue)}${t.dialogueNote ? `<p class="hint">${t.dialogueNote}</p>` : ''}</div>
  </div>
  <h2>Déroulement</h2>
  <table>${t.steps.map(([ph, txt, min]) => `<tr><td class="phase">${ph}</td><td>${txt}</td><td class="time">${min}</td></tr>`).join('')}</table>
  </section>`;

  const p2 = `<section class="page">
  ${runHead(`Document enseignant · Fiche ${f.no} · ${f.titleNl}`, 'Repères didactiques')}
  <div class="kicker">Repères pour l'enseignant·e</div>
  <h1>Focus on form & observation</h1>
  <h2>1 · La forme à faire remarquer (sans en faire une leçon)</h2>
  <div class="observe">${t.focus}</div>
  <h2>2 · Erreurs attendues chez des francophones</h2>
  <table class="err"><tr><th>On entendra…</th><th>On vise…</th><th>Piste de reprise</th></tr>${t.errors
    .map(([a, b, c]) => `<tr><td>${a}</td><td>${b}</td><td class="small">${c}</td></tr>`)
    .join('')}</table>
  <h2>3 · Grille d'observation (pendant l'interaction)</h2>
  <table><tr><th>Critère</th><th>Repère A1</th><th>Repère A2</th></tr>${t.grid
    .map(([a, b, c]) => `<tr><td><b>${a}</b></td><td class="small">${b}</td><td class="small">${c}</td></tr>`)
    .join('')}</table>
  <h2>4 · Ce que cette fiche ajoute au modèle</h2>
  <ul class="small">${t.adds.map((x) => `<li>${x}</li>`).join('')}</ul>
  <h2>5 · Prolongements</h2>
  <ul class="small">${t.extend.map((x) => `<li>${x}</li>`).join('')}</ul>
  </section>`;
  return p1 + p2;
}

// ---------- Page de garde élève ----------
function coverPage(f) {
  return `<section class="page">
  ${runHead(`Néerlandais 2 · Fiche ${f.no} · ${f.skill}`, `Fil rouge : la firma Verbeke`)}
  <div class="kicker">Champ thématique : ${f.theme}</div>
  <h1 class="big">${f.icon} ${f.titleNl}</h1>
  <div class="sub">${f.titleFr}</div>
  <div class="badges"><span class="badge lvl">${f.cefr}</span><span class="badge">${f.mode}</span></div>
  <div class="box"><div class="kicker">Je peux… (can-do)</div><b>… ${f.cando}</b></div>
  <h2>Pendant cette fiche, tu vas…</h2>
  <ul>${f.goals.map((g) => `<li>${g}</li>`).join('')}</ul>
  <div class="soft"><div class="kicker">La tâche finale (pour tout le monde)</div>${f.finalTask}</div>
  <h2>Choisis ton niveau de départ</h2>
  <p class="small">Toutes les variantes mènent à la <b>même tâche finale</b>. Elles changent seulement l'aide que tu reçois. Il n'y a pas de « mauvais » choix : commence là où tu te sens à l'aise, et monte quand tu es prêt·e. Tu peux aussi redescendre.</p>
  <div class="levels">${LEVELS.map(
    (L) => `<div><div class="hd" style="background:${L.color}">${L.n} · ${L.name}</div><div class="bd">${f.levelTags?.[L.n - 1] || L.tag}</div></div>`
  ).join('')}</div>
  ${buoy(f)}
  ${f.coverExtra || ''}
  <p style="margin-top:4mm">Nom : ........................................................ &nbsp; Groupe : .......... &nbsp; Je commence en variante n° ......</p>
  </section>`;
}

// ---------- Variante 1 : procédure + phrases complètes ----------
function v1(f) {
  const d = f.v1;
  return `<section class="page">${vHead(f, 1)}${situation(f)}
  <h2>${d.title || 'Prépare-toi : suis les étapes et choisis tes phrases'}</h2>
  <table class="steps"><tr><th>${d.colA || 'Ce que tu dois faire'}</th><th>${d.colB || 'Ce que tu peux dire'}</th></tr>${d.steps
    .map(
      ([a, b], i) =>
        `<tr><td><span class="num">${i + 1}.</span>${a}</td><td>${b.map((x) => `<div class="nl">${fmt(x)}</div>`).join('')}</td></tr>`
    )
    .join('')}</table>
  ${bankBlock(d.bank)}
  <p class="hint">${d.tip || 'Astuce : entoure les phrases que tu vas utiliser.'}</p>
  </section>`;
}

function bankBlock(bank) {
  if (!bank) return '';
  return bank
    .map(
      (b) =>
        `<div class="bank-h">${b.h}</div><div class="bank">${b.items
          .map(([nl, fr]) => `<div><span class="nl">${nl}</span> <span class="fr">${fr}</span></div>`)
          .join('')}</div>`
    )
    .join('');
}

// ---------- Variante 2 : phrases complètes, l'élève organise ----------
function v2(f) {
  const d = f.v2;
  return `<section class="page">${vHead(f, 2)}${situation(f)}
  <h2>Prépare-toi</h2>
  <p>${d.intro}</p>
  <div class="order">${d.groups
    .map(
      (g) =>
        `<div class="grp">${g.h}</div>${g.lines.map((l) => `<div class="line"><span class="blank"></span><span class="nl">${fmt(l)}</span></div>`).join('')}`
    )
    .join('')}</div>
  <div class="soft" style="margin-top:3mm"><div class="kicker">Banque de mots</div>${d.bank.map((b) => `<div class="nl">${b}</div>`).join('')}</div>
  <div class="box" style="border-width:1px"><b>Défi :</b> ${d.challenge}</div>
  <p class="hint">Tu te sens à l'aise ? Essaie la variante Héro·ïne la prochaine fois.</p>
  </section>`;
}

// ---------- Variante 3 : patrons à emplacements ----------
function v3(f) {
  const d = f.v3;
  return `<section class="page">${vHead(f, 3)}${situation(f, true)}
  <h2>${d.plan}</h2>
  <div class="legend"><b>Légende :</b> <span class="s">S</span> = sujet (ik, jij, u, hij, zij…) · <span class="v">[werken]</span> = verbe à conjuguer · <span class="slot">mot</span> = à choisir · <span class="nl">vet</span> = à garder tel quel · <span class="spiral">↺ déjà vu</span> = vu dans une fiche précédente</div>
  <table class="pat">${d.patterns
    .map(([fn, pat, ex]) => `<tr><td>${fn}</td><td>${fmt(pat)}<span class="ex">ex. : <b>${ex}</b></span></td></tr>`)
    .join('')}</table>
  <div class="observe"><b>Observe</b> (pas besoin d'apprendre une règle) : ${fmt(d.observe)}<div class="q">${d.question} <span class="fill"></span></div></div>
  <p class="small muted">Mots utiles : ${d.words}</p>
  </section>`;
}

// ---------- Variante 4 : structures clés + notes personnelles ----------
function v4(f) {
  const d = f.v4;
  return `<section class="page">${vHead(f, 4)}${situation(f, true)}
  <h2>Structures clés</h2>
  <div class="keys">${d.keys.map((k) => `<div>${fmt(k)}</div>`).join('')}</div>
  <div class="soft"><b>Pour aller plus loin (A2, facultatif) :</b> ${d.further}</div>
  <h2>Note ici les expressions et les structures qui vont t'aider</h2>
  ${'<div class="rule"></div>'.repeat(d.lines || 11)}
  <p class="hint">Tu n'as pas besoin de tout écrire : quelques mots-clés suffisent.</p>
  </section>`;
}

// ---------- Variante 5 : tâche finale + autoévaluation ----------
function v5(f) {
  const d = f.v5;
  const L = LEVELS[4];
  return `<section class="page">${vHead(f, 5, ' · Tâche finale')}
  <div class="box" style="border-color:${L.color}"><div class="kicker">Tâche finale de communication</div>${d.task}
  <p style="margin:1.5mm 0 0">${d.timing}</p>${d.bonus ? `<p class="small" style="margin:1mm 0 0"><b>Bonus A2 :</b> ${d.bonus}</p>` : ''}</div>
  <h2>Mon autoévaluation</h2>
  <p>Variante choisie : &nbsp;☐ 1 &nbsp; ☐ 2 &nbsp; ☐ 3 &nbsp; ☐ 4 &nbsp; ☐ 5</p>
  <table class="check"><tr><th>${d.checkHead || 'Pendant l\'échange, j\'ai pu…'}</th><th>pas encore</th><th>presque</th><th>oui</th></tr>${d.check
    .map((c) => `<tr><td>${c}</td><td>☐</td><td>☐</td><td>☐</td></tr>`)
    .join('')}</table>
  <h2>Comment je me suis senti·e ?</h2>
  <p class="small muted">1 = pas du tout · 6 = tout à fait</p>
  <table>${[
    d.stress1 || 'Avant de commencer, j\'étais stressé·e.',
    'J\'ai oublié des choses que je savais, à cause du stress.',
    'J\'avais l\'impression qu\'il y avait trop de règles à retenir.',
  ]
    .map((s) => `<tr><td>${s}</td><td class="scale">① ② ③ ④ ⑤ ⑥</td></tr>`)
    .join('')}</table>
  <div class="grid2"><div><h2>Une expression que je retiens</h2><div class="rule"></div></div>
  <div><h2>La prochaine fois, je tente la variante…</h2>
  <p>☐ 1 &nbsp; ☐ 2 &nbsp; ☐ 3 &nbsp; ☐ 4 &nbsp; ☐ 5<br>parce que ...........................................................</p></div></div>
  <p class="foot">Les échelles reprennent des items d'anxiété suivis dans l'expérimentation ARK (Nedconsult).</p>
  </section>`;
}

function page(content) {
  return `<section class="page">${content}</section>`;
}

function htmlDoc(title, body) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>${title}</title><style>${CSS}</style></head><body>${body}</body></html>`;
}

function fiche(f) {
  return htmlDoc(
    `Fiche ${f.no} · ${f.titleNl}`,
    teacherPages(f) + coverPage(f) + v1(f) + v2(f) + v3(f) + v4(f) + v5(f) + (f.extraPages || []).map((p) => p(f)).join('')
  );
}

module.exports = { LEVELS, CSS, fmt, runHead, buoy, dialogue, situation, page, htmlDoc, fiche, bankBlock };
