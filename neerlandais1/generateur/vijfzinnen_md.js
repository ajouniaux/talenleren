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
| **Format** | Pour chaque contexte, trois diapos : la **consigne** (« Gebruik deze afbeelding als inspiratie », image + Zin 1 à Zin 5), la **grande image**, puis l'**exemple** (« Hier is een voorbeeld… », étiquettes vertes posées sur les bribes de texte) |
| **Source** | Création · critères alignés sur les descripteurs CECRL A1, A2 et B1 et sur la progression des cours Néerlandais 1, 2 et 3 |
| **Savoir-faire visés** | Produire 5 phrases cohérentes sur une situation du quotidien en respectant des contraintes lexicales et grammaticales ; s’autoévaluer à l’aide d’un modèle |

## Choix didactiques

- **Une illustration qui situe le contexte** : un décor dessiné pour chaque situation (dégradés, lumière, perspective) et peuplé d’emoji 3D (Fluent, Microsoft, licence MIT) ; la situation est rappelée en une phrase sous l’image. Les 24 images sont produites par \`generateur/vijf_art.js\`.
- **La mise en page du modèle *Gebruik deze foto als inspiratie*** : un bandeau vertical « Niveau A1 / A2 / B1 » (vert, bleu lavande, violet), des étiquettes vertes « Zin 1 » à « Zin 5 », un encadré final « Lees je tekst voor aan je partner. Wat denkt hij/zij daarvan? ».
- **Cinq critères, une phrase chacun** : la phrase 1 situe, les phrases 2 à 4 mobilisent le lexique et la grammaire du niveau, la phrase 5 est toujours une **chute** (créativité, humour). Les mots-outils néerlandais sont en **MAJUSCULES**.
- **Les étiquettes de l’exemple** : chaque bribe qui répond à une consigne est surlignée en vert et surmontée d’une petite étiquette verte (le mot-clé de la consigne), reliée à elle par un trait. Les phrases 1 à 4 forment un paragraphe ; la phrase 5 (la chute) est centrée en dessous.
- **Une progression CECRL** : A1 (zijn / hebben, inversion, er is, niet / geen, pluriel, qualificatif / attribut, gaan + infinitif) ; A2 (perfectum, was / had, comparatif, diminutif, impératif, modaux, omdat / als / dat) ; B1 (subordonnées, relatives, passif, conditionnel, plus-que-parfait, om … te, connecteurs, registre formel).
- **Écrit ou oral** : chaque contexte porte une pastille *À l’écrit* ou *À l’oral* ; tous peuvent se faire dans l’autre modalité.
- **Dans ce gabarit**, les bribes étiquetées de l’exemple sont notées [entre crochets], suivies du numéro de la consigne.
- **Thèmes du quotidien** : café, marché, travail, logement, famille, météo, santé, transports, achats, fêtes, vacances, démarches, voisinage, environnement.

## Déroulé conseillé (par contexte)

| Phase | Diapo | Durée |
|---|---|---|
| Découverte de l’image : « Waar zijn we? Wie zie je? » | grande image | 2 min |
| Lecture des 5 consignes, questions de vocabulaire | consigne | 2 min |
| Production individuelle (écrit ou oral), puis lecture au partenaire | consigne | 5 – 10 min |
| Lecture de 2 ou 3 productions, puis comparaison avec l’exemple | exemple | 5 min |

---

### [DIAPOSITIVE 1 : In vijf zinnen]

**Objectif pédagogique** — Présenter le principe : une image, cinq critères, un modèle.

**Visuel / Schéma / Agencement**
- Bandeau « A1 · A2 · B1 » ; titre, sous-titre et trois pastilles de niveau ; encadré « Lees je tekst voor aan je partner… » ; à droite, trois illustrations en cadres photo inclinés (terrasse, mer, voisins).

**Contenu textuel**
> **In vijf zinnen**
> *Production écrite et orale guidée : 24 contextes du quotidien*
> 1 image · 5 critères · 1 modèle

**Notes pour l'animateur** — « In vijf zinnen » = en cinq phrases. Annoncez le défi : respecter les cinq critères… et trouver la meilleure chute.

---

### [DIAPOSITIVE 2 : Hoe werkt het? Comment ça marche ?]

**Objectif pédagogique** — Expliquer les quatre étapes et la correspondance couleur critère → bribe.

**Visuel / Schéma / Agencement**
- Quatre cartes : ① Kijk · ② Lees · ③ Schrijf of vertel · ④ Deel.
- Une phrase d’exemple avec trois bribes surlignées et leurs étiquettes vertes.

**Contenu textuel**
> ① **Kijk** — Observez l’image : où ? qui ? quoi ? · ② **Lees** — Lisez les 5 consignes : Zin 1 à Zin 5, une phrase chacune. · ③ **Schrijf of vertel** — Écrivez ou dites vos 5 phrases (5 à 10 min). · ④ **Deel** — Lisez votre texte à votre partner, puis comparez avec l’exemple.
> *${plainEx(LEVELS[1].ctx[1].ex[1])}*
> Le but : le lexique et la grammaire du niveau… et la créativité !

**Notes pour l'animateur** — Insistez : le modèle n’est pas « la » réponse. Toute phrase qui respecte le critère est juste. Les apprenant·es peuvent ensuite surligner eux-mêmes et elles-mêmes, dans leur propre production, la bribe qui répond à chaque consigne.

---

### [DIAPOSITIVE 3 : Évaluer une production : la grille sur 10]

**Objectif pédagogique** — Donner une grille simple, commune aux trois niveaux.

**Visuel / Schéma / Agencement**
- Bandeau « Évaluation » ; cinq lignes (pastille de couleur, critère, explication, points) ; à droite, une barre de 10 cases.

**Contenu textuel**
> **Consignes respectées** 5 pts — un point par phrase · **Correction** 2 pts — conjugaison, ordre des mots, accords, orthographe ou prononciation · **Vocabulaire** 1 pt · **Cohérence** 1 pt — les 5 phrases racontent une même scène · **Créativité** 1 pt — la chute
> À l’oral : la prononciation et la fluidité remplacent l’orthographe.

**Notes pour l'animateur** — Une consigne est « respectée » si elle est présente **et** correctement employée (par exemple : « omdat » avec le verbe à la fin). Pour une évaluation formative, l’autoévaluation suffit : les apprenant·es cochent les cinq consignes avant de rendre.

---

`;
let g = 4;
LEVELS.forEach((lvl) => {
  out += `### [DIAPOSITIVE ${g} : ${lvl.name} — 8 contextes]

**Objectif pédagogique** — Présenter les 8 contextes du niveau ${lvl.id} et ce qu’on y évalue.

**Visuel / Schéma / Agencement**
- Bandeau « Niveau » ; à gauche, le cahier des charges du niveau ; à droite, les 8 illustrations en vignettes (titre néerlandais, titre français, pastille écrit / oral).

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
- **Consigne** : « Gebruik deze afbeelding als inspiratie » ; l’illustration (\`img/vijfzinnen/${c.img}.jpg\`), la pastille ${c.mode === 'W' ? '« À l’écrit »' : '« À l’oral »'} et la situation ; à droite, Zin 1 à Zin 5 ; en bas, ${c.mode === 'W' ? '« Lees je tekst voor aan je partner. »' : '« Vertel je verhaal aan je partner. »'} « Wat denkt hij/zij daarvan? »
- **Grande image** : l’illustration en grand, dans un cadre photo.
- **Exemple** : « Hier is een voorbeeld van wat je had kunnen denken en ${c.mode === 'W' ? 'schrijven' : 'zeggen'}… », vignette, puis le texte, chaque bribe surlignée et surmontée de son étiquette verte.

**Contenu textuel**
> *${c.sit}*
${c.crit.map((k, j) => `> ${j + 1}. ${md(k.t)}`).join('\n')}
>
> **EXEMPLE** — ${c.ex.map((e) => marked(e)).join(' ')}

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
> **Contre la montre** — Cinq phrases en cinq minutes : le sablier tourne ! · **La chaîne** — Cinq apprenant·es, cinq phrases : chacun·e ajoute la sienne à l’oral. · **Devinez la consigne** — On lit sa production ; la classe retrouve les cinq consignes. · **Le dé** — On lance le dé : la phrase indiquée doit être dite en premier. · **Niveau supérieur** — Même image, consignes du niveau suivant : A1 → A2 → B1. · **La meilleure chute** — Toutes les chutes au tableau ; la classe vote.

**Notes pour l'animateur** — « Devinez la consigne » fonctionne très bien en révision : projetez seulement l’image, faites lire une production, et la classe reconstitue la consigne. « Niveau supérieur » : les images A1 se prêtent aux consignes A2 et B1 (et inversement, pour différencier dans un groupe hétérogène).
`;
fs.writeFileSync(path.join(G, '..', 'in_vijf_zinnen.md'), out);
console.log('slides g:', g);
