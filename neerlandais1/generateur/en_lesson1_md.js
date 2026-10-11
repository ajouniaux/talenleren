// In five sentences (+1), UE3 lesson 1 : régénère ../../anglais_productions/lesson1_in_five_sentences.md
// (le gabarit lu par le deck) à partir de en_lesson1_data.js
// usage : node en_lesson1_md.js, puis node build.js en_lesson1
const fs = require('fs');
const path = require('path');
const G = __dirname;
const { TASKS } = require(path.join(G, 'en_lesson1_data.js'));
const marked = (s) => s.replace(/\{(\d):([^|}]+)(?:\|([^}]+))?\}/g, (m, n, t) => `[${t}]${String.fromCharCode(0x2080 + Number(n))}`);

let out = `# *In five sentences (+1)* · UE3 · Lesson 1 · Three guided productions (B1)

| | |
|---|---|
| **Niveau** | B1 visé (anglais, apprenant·es francophones de l’enseignement supérieur) — UE3 *Anglais, langue en situation*, Part 1 |
| **Durée** | 10 à 15 min par production, puis comparaison avec le modèle ; à faire à la fin du cours 1 ou au début du cours 2 |
| **Format** | Pour chaque production, trois diapos : la **consigne** (« Use this picture as inspiration », image + Sentence 1 à Sentence 5 + le jalon ★ Challenge, Sentence 6), la **grande image**, puis l'**exemple** (« Here is an example… », étiquettes vertes posées sur les bribes ; le jalon dans un cadre doré) |
| **Source** | Le cours 1 : la messagerie de Mark Shaw (06.58), Atlas House (8.15), la chronologie demandée « by nine » ; les illustrations sont celles du livret *Project Atlas* |
| **Savoir-faire visés** | Évaluer ensemble le lexique et la grammaire du cours 1 : prépositions de temps, past simple (régulier, irrégulier, négation, question), phrasal verbs de l’incident, carte mentale de l’incident, fait ≠ supposition ; jalon supplémentaire : past simple ≠ present perfect |

## Choix didactiques

- **Trois productions, trois scènes du cours** : écrire au groupe après le message vocal (écrit), faire le point avec Mark à Atlas House (oral), rédiger la chronologie pour 9 h (écrit).
- **Cinq consignes, une phrase chacune**, puis **un jalon supplémentaire plus difficile** (★ Challenge, Sentence 6) pour les étudiant·es qui s’en sentent capables : la phrase honnête (fait ≠ supposition), le contraste present perfect / past simple, le temps révolu face à *never / ever*.
- **La même mise en page que *In vijf zinnen*** : bandeau vertical (bleu nuit du livret), étiquettes « Sentence 1 » à « Sentence 5 », encadré « Read your text to your partner. What do they think? ». Le jalon est en **or** sur toutes les diapos.
- **Évaluation sur 10 + 2** : cinq points de consignes, puis correction, vocabulaire, cohérence et chute ; le jalon rapporte deux points de bonus (mention B1+).
- **Dans ce gabarit**, les bribes étiquetées de l’exemple sont notées [entre crochets], suivies du numéro de la consigne.

---

### [DIAPOSITIVE 1 : In five sentences]

**Objectif pédagogique** — Annoncer les trois productions et le jalon supplémentaire.

**Visuel / Schéma / Agencement**
- Bandeau « B1 · Lesson 1 » ; titre, sous-titre ; les trois tâches numérotées ; encadré doré « ★ Sentence 6 » ; à droite, les trois illustrations du livret en cadres photo inclinés.

**Contenu textuel**
> **In five sentences**
> *Guided writing & speaking* · UE3 · Lesson 1 · The message, the room, the timeline
${TASKS.map((c, i) => `> ${i + 1} · ${c.t} (${c.mode === 'W' ? 'written' : 'spoken'})`).join('\n')}
> ★ Sentence 6 · the challenge: harder, optional

**Notes pour l'animateur** — Trois productions courtes pour vérifier ce qui reste du cours 1. Annoncez la règle du jeu : cinq phrases pour tout le monde, une sixième pour qui veut viser plus haut.

---

### [DIAPOSITIVE 2 : How does it work?]

**Objectif pédagogique** — Expliquer les quatre étapes, les étiquettes et le jalon.

**Visuel / Schéma / Agencement**
- Quatre cartes : ① Look · ② Read · ③ Write or speak · ④ Share ; un extrait d’exemple étiqueté ; un bandeau doré pour le jalon.

**Contenu textuel**
> ① **Look** — What can you see? Where? Who? What time is it? · ② **Read** — Five instructions: Sentence 1 to Sentence 5, one sentence each. · ③ **Write or speak** — Five sentences in ten minutes, with today’s grammar and words. · ④ **Share** — Read your text to your partner, then compare it with the example.
> *${marked(TASKS[0].ex.slice(0, 2).join(' '))}*
> ★ Sentence 6 · Challenge — harder and optional: try it if you feel ready!

**Notes pour l'animateur** — Le modèle n’est pas « la » réponse : toute phrase qui respecte la consigne est juste. Demandez aux étudiant·es de souligner eux-mêmes et elles-mêmes, dans leur texte, la bribe qui répond à chaque consigne avant de le rendre.

---

### [DIAPOSITIVE 3 : Lesson 1 in three tasks]

**Objectif pédagogique** — Montrer ce que chaque production évalue (lexique et grammaire du cours 1).

**Visuel / Schéma / Agencement**
- Tableau : six lignes (contenus du cours 1) × trois colonnes (les productions, avec leur vignette) ; pastille verte = dans les phrases 1 à 5, pastille dorée = dans le jalon.

**Contenu textuel**
> Prepositions of time (at · by · until · between · in · for) : 1, 2, 3 · The past simple (regular & irregular · didn’t · Did …?) : 1, 2, 3 · Phrasal verbs (turn up · call out · break down · shut down · look into · put off) : 2, 3 · The world of the incident (place · people · evidence · paperwork) : 1, 3 · Fact ≠ guess (a verifiable time and its source) : 3, ★1 · Past simple ≠ present perfect : ★2, ★3

**Notes pour l'animateur** — Les trois productions couvrent tout le cours 1 ; les points de comparaison past simple / present perfect (diapo « Please mind the differences ») ne sont exigés que dans le jalon.

---

### [DIAPOSITIVE 4 : Marking a production: 10 points + 2]

**Objectif pédagogique** — Donner une grille commune, avec un bonus pour le jalon.

**Visuel / Schéma / Agencement**
- Cinq lignes (pastille de couleur, critère, explication, points), une ligne dorée pour le jalon ; à droite, une barre de 10 cases et 2 cases dorées en pointillés.

**Contenu textuel**
> **Instructions** 5 pts — one point per sentence: the item is there, and it is correct · **Accuracy** 2 pts — past simple forms and prepositions · **Vocabulary** 1 pt — phrasal verbs and incident words · **Coherence** 1 pt — one story, in the right order · **Twist** 1 pt — sentence 5 surprises
> ★ **Challenge** + 2 — Sentence 6 correct = bonus points, and a B1+ mention
> Spoken tasks: pronunciation and fluency replace spelling.

**Notes pour l'animateur** — Une consigne est respectée si l’élément demandé est présent et correct (par exemple : *by* pour une date limite, pas *until*). Le bonus n’est accordé que si la phrase 6 est entièrement juste ; il permet de repérer les étudiant·es déjà au-delà du B1.

---

`;
TASKS.forEach((c, i) => {
  out += `### [DIAPOSITIVE ${5 + i} : ${c.t}]

**Objectif pédagogique** — Production ${i + 1} · ${c.fr} (livret ${c.ref}) : écrire ou dire 5 phrases ${c.mode === 'W' ? 'à l’écrit' : 'à l’oral'} en respectant les 5 consignes, puis, au choix, une 6e plus difficile.

**Visuel / Schéma / Agencement**
- **Consigne** : « Use this picture as inspiration » ; l’illustration du livret (\`img/vijfzinnen/${c.img}.jpg\`), la pastille ${c.mode === 'W' ? '« WRITTEN »' : '« SPOKEN »'} et la situation ; à droite, Sentence 1 à Sentence 5, puis le jalon doré (Sentence 6) ; en bas, ${c.mode === 'W' ? '« Read your text to your partner. »' : '« Tell your partner what you would say. »'} « What do they think? »
- **Grande image** : l’illustration en grand, dans un cadre photo.
- **Exemple** : « Here is an example of what you could have thought and ${c.mode === 'W' ? 'written' : 'said'}… », vignette, puis le texte aux bribes étiquetées ; la phrase 6 dans un cadre doré « ★ CHALLENGE · optional · harder ».

**Contenu textuel**
> *${c.sit}*
${c.crit.map((kk, j) => `> ${j + 1}. ${kk.t}`).join('\n')}
> ★ 6. ${c.ch.t}
>
> **EXAMPLE** — ${c.ex.map((e) => marked(e)).join(' ')}
> **★ CHALLENGE** — ${marked(c.chEx)}

**Notes pour l'animateur** — ${c.notes}

---

`;
});
out += `### [DIAPOSITIVE 8 : Before you hand in: check!]

**Objectif pédagogique** — Faire relire sa production avec une liste de vérification issue du cours 1.

**Visuel / Schéma / Agencement**
- Six cases à cocher, puis une case dorée pour le jalon.

**Contenu textuel**
> ☐ Every time has its preposition: at 6.50 · by nine · until eight · in twenty minutes. · ☐ A dated fact → past simple: found, went off, called (✗ have found at 6.50). · ☐ Negative: didn’t + base form (✗ didn’t found). · ☐ Question: Did + subject + base form? (✗ Did you found…?) · ☐ Phrasal verbs keep their particle: went off, turned up, broke down. · ☐ A fact, not a guess: is your time verifiable? (✗ around eleven)
> ☐ ★ Challenge: finished time → past simple · result now, never / ever → present perfect.

**Notes pour l'animateur** — Deux minutes de relecture avant de rendre, puis échange des copies : le ou la partenaire coche la liste sur la production de l’autre. Les erreurs barrées (✗) sont celles du cours 1 (« Piège pour francophones »).
`;
const dest = path.join(G, '..', '..', 'anglais_productions', 'lesson1_in_five_sentences.md');
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, out);
console.log('written', dest);
