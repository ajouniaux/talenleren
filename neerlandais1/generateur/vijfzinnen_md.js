// In vijf zinnen : régénère ../in_vijf_zinnen.md (le gabarit lu par le deck) à partir de vijfzinnen_data.js
// usage : node vijfzinnen_md.js, puis node build.js vijfzinnen
const fs = require('fs');
const path = require('path');
const G = __dirname;
const { LEVELS } = require(path.join(G, 'vijfzinnen_data.js'));
const plainEx = (s) => s.replace(/\n/g, ' ').replace(/\{\d:([^|}]+)(?:\|[^}]+)?\}/g, '$1');
const marked = (s) => s.replace(/\n/g, ' ').replace(/\{(\d):([^|}]+)(?:\|([^}]+))?\}/g, (m, n, t) => `[${t}]${String.fromCharCode(0x2080 + Number(n))}`);
const md = (t) => t.replace(/\*\*([^*]+)\*\*/g, '**$1**');
let out = `# *In vijf zinnen* · Production écrite et orale guidée (A1 · A2 · B1)

| | |
|---|---|
| **Niveaux** | A1 · A2 · B1 (néerlandais, apprenant·es francophones) — 8 contextes par niveau |
| **Durée** | 15 à 20 min par contexte (5 à 10 min de production, puis comparaison avec le modèle) |
| **Format** | Pour chaque contexte : une diapo **tâche** (illustration + 5 critères) puis une diapo **modèle** (production exemple, bribes encadrées et reliées aux critères) |
| **Source** | Création · critères alignés sur les descripteurs CECRL A1, A2 et B1 et sur la progression des cours Néerlandais 1, 2 et 3 |
| **Savoir-faire visés** | Produire 5 phrases cohérentes sur une situation du quotidien en respectant des contraintes lexicales et grammaticales ; s’autoévaluer à l’aide d’un modèle |

## Choix didactiques

- **Une illustration qui situe le contexte** : un petit décor (lieu, personnages, objets, enseigne) remplace la consigne longue ; la situation est rappelée en une phrase sous l’image.
- **Cinq critères, une phrase chacun** : la phrase 1 situe, les phrases 2 à 4 mobilisent le lexique et la grammaire du niveau, la phrase 5 est toujours une **chute** (créativité, humour). Les mots-outils néerlandais sont en **MAJUSCULES**.
- **Un code couleur fixe** pour les 5 critères : ① bleu · ② orange · ③ vert · ④ violet · ⑤ framboise. Sur la diapo modèle, chaque bribe de texte est **encadrée** de la couleur de son critère et **reliée** à une étiquette (numéro + mot-clé).
- **Une progression CECRL** : A1 (zijn / hebben, inversion, er is, niet / geen, pluriel, qualificatif / attribut, gaan + infinitif) ; A2 (perfectum, was / had, comparatif, diminutif, impératif, modaux, omdat / als / dat) ; B1 (subordonnées, relatives, passif, conditionnel, plus-que-parfait, om … te, connecteurs, registre formel).
- **Écrit ou oral** : chaque contexte porte une pastille *À l’écrit* ou *À l’oral* ; tous peuvent se faire dans l’autre modalité.
- **Dans ce gabarit**, les bribes encadrées du modèle sont notées [entre crochets], suivies du numéro du critère.
- **Thèmes du quotidien** : café, marché, travail, logement, famille, météo, santé, transports, achats, fêtes, vacances, démarches, voisinage, environnement.

## Déroulé conseillé (par contexte)

| Phase | Diapo | Durée |
|---|---|---|
| Découverte de l’image : « Waar zijn we? Wie zie je? » | tâche | 2 min |
| Lecture des 5 critères, questions de vocabulaire | tâche | 2 min |
| Production individuelle ou par deux (écrit ou oral) | tâche | 5 – 10 min |
| Lecture de 2 ou 3 productions, puis comparaison avec le modèle | modèle | 5 min |

---

### [DIAPOSITIVE 1 : In vijf zinnen]

**Objectif pédagogique** — Présenter le principe : une image, cinq critères, un modèle.

**Visuel / Schéma / Agencement**
- Couverture sombre ; à droite, un décor (la terrasse), les 5 critères en couleur et une phrase avec sa bribe encadrée.

**Contenu textuel**
> **In vijf zinnen**
> *Production écrite et orale guidée : 24 contextes du quotidien*
> 1 image · 5 critères · 1 modèle

**Notes pour l'animateur** — « In vijf zinnen » = en cinq phrases. Annoncez le défi : respecter les cinq critères… et trouver la meilleure chute.

---

### [DIAPOSITIVE 2 : Hoe werkt het? Comment ça marche ?]

**Objectif pédagogique** — Expliquer les quatre étapes et la correspondance couleur critère → bribe.

**Visuel / Schéma / Agencement**
- Quatre cartes : ① Kijk · ② Lees · ③ Schrijf of spreek · ④ Vergelijk.
- Une phrase modèle avec trois bribes encadrées et reliées à leurs étiquettes.

**Contenu textuel**
> ① **Kijk** — Observez l’illustration : où ? qui ? quoi ? · ② **Lees** — Lisez les 5 critères : une phrase = un critère. · ③ **Schrijf of spreek** — Produisez vos 5 phrases, à l’écrit ou à l’oral (5 à 10 min). · ④ **Vergelijk** — Comparez avec le modèle : chaque encadré renvoie à un critère.
> *${plainEx(LEVELS[1].ctx[1].ex[1])}*
> Le but : vérifier le **lexique** et la **grammaire** du niveau, en laissant toute sa place à la **créativité** (la chute !).

**Notes pour l'animateur** — Insistez : le modèle n’est pas « la » réponse. Toute phrase qui respecte le critère est juste. Les apprenant·es peuvent ensuite encadrer eux-mêmes et elles-mêmes, en couleur, les bribes de leur propre production.

---

### [DIAPOSITIVE 3 : Évaluer une production : la grille sur 10]

**Objectif pédagogique** — Donner une grille simple, commune aux trois niveaux.

**Visuel / Schéma / Agencement**
- Cinq lignes colorées (critère, explication, points) ; à droite, une barre de 10 cases.

**Contenu textuel**
> **Critères respectés** 5 pts — un point par phrase · **Correction** 2 pts — conjugaison, ordre des mots, accords, orthographe ou prononciation · **Vocabulaire** 1 pt · **Cohérence** 1 pt — les 5 phrases racontent une même scène · **Créativité** 1 pt — la chute
> À l’oral : même grille ; la **prononciation** et la **fluidité** remplacent l’orthographe.

**Notes pour l'animateur** — Un critère est « respecté » s’il est présent **et** correctement employé (par exemple : « omdat » avec le verbe à la fin). Pour une évaluation formative, l’autoévaluation suffit : les apprenant·es cochent les cinq critères avant de rendre.

---

`;
let g = 4;
LEVELS.forEach((lvl) => {
  out += `### [DIAPOSITIVE ${g} : ${lvl.name} — 8 contextes]

**Objectif pédagogique** — Présenter les 8 contextes du niveau ${lvl.id} et ce qu’on y évalue.

**Visuel / Schéma / Agencement**
- Intercalaire sombre : à gauche, le cahier des charges du niveau ; à droite, les 8 décors en vignettes (titre, pastille écrit / oral).

**Contenu textuel**
> **Ce qu’on évalue** : ${lvl.spec.join(' · ')}
> ${lvl.ctx.map((c, i) => `${i + 1} · ${c.t} (${c.mode === 'W' ? 'écrit' : 'oral'})`).join(' — ')}

**Notes pour l'animateur** — Les contextes sont indépendants : choisissez-les selon le thème du jour. Ils peuvent aussi servir d’évaluation finale (un contexte tiré au sort).

---

`;
  g += 1;
  lvl.ctx.forEach((c, i) => {
    out += `### [DIAPOSITIVE ${g} : ${c.t}]

**Objectif pédagogique** — ${lvl.id} · ${c.fr} : produire 5 phrases ${c.mode === 'W' ? 'à l’écrit' : 'à l’oral'} en respectant les 5 critères.

**Visuel / Schéma / Agencement**
- **Diapo tâche** : à gauche, le décor illustré${c.scene.some((o) => o[0] === 'sign') ? ` (${c.scene.filter((o) => o[0] === 'sign').map((o) => `« ${o[1]} »`).join(', ')})` : ''} et la situation ; à droite, les 5 critères numérotés en couleur ; pastille ${c.mode === 'W' ? '« À l’écrit »' : '« À l’oral »'}.
- **Diapo modèle** : vignette du décor, rappel des 5 critères, puis la production modèle, chaque bribe encadrée et reliée à son étiquette.

**Contenu textuel**
> *${c.sit}*
${c.crit.map((k, j) => `> ${j + 1}. ${md(k.t)}`).join('\n')}
>
> **MODÈLE** — ${c.ex.map((e) => marked(e)).join(' ')}

**Notes pour l'animateur** — ${c.notes}

---

`;
    g += 1;
  });
});
out += `### [DIAPOSITIVE ${g} : Six variantes ludiques]

**Objectif pédagogique** — Varier les modalités pour réutiliser les 24 contextes.

**Visuel / Schéma / Agencement**
- Six cartes illustrées (⏱️ 🔗 🕵️ 🎲 ⬆️ 🏆).

**Contenu textuel**
> **Contre la montre** — Cinq phrases en cinq minutes. · **La chaîne** — Cinq apprenant·es, cinq phrases : chacun·e ajoute la sienne à l’oral. · **Devinez le critère** — On lit sa production ; la classe retrouve les cinq critères. · **Le dé** — On lance le dé : la phrase indiquée doit être dite en premier. · **Niveau supérieur** — Même image, critères du niveau suivant. · **La meilleure chute** — Toutes les chutes au tableau ; la classe vote.

**Notes pour l'animateur** — « Devinez le critère » fonctionne très bien en révision : projetez seulement l’image, faites lire une production, et la classe reconstitue la consigne. « Niveau supérieur » : les images A1 se prêtent aux critères A2 et B1 (et inversement, pour différencier dans un groupe hétérogène).
`;
fs.writeFileSync(path.join(G, '..', 'in_vijf_zinnen.md'), out);
console.log('slides g:', g);
