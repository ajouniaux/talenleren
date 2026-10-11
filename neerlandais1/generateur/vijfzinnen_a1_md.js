// Stap voor stap (A1) : régénère ../stap_voor_stap_a1.md (le gabarit lu par le deck) à partir de vijfzinnen_a1_data.js
// usage : node vijfzinnen_a1_md.js, puis node build.js vijfzinnen_a1
const fs = require('fs');
const path = require('path');
const G = __dirname;
const { SECTIONS } = require(path.join(G, 'vijfzinnen_a1_data.js'));
const marked = (s) => s.replace(/\n/g, ' ').replace(/\{(\d):([^|}]+)(?:\|([^}]+))?\}/g, (m, n, t) => `[${t}]${String.fromCharCode(0x2080 + Number(n))}`);
const plainEx = (s) => s.replace(/\n/g, ' ').replace(/\{\d:([^|}]+)(?:\|[^}]+)?\}/g, '$1');
const total = SECTIONS.reduce((n, sc) => n + sc.ctx.length, 0);
const ex0 = SECTIONS[0].ctx[3];

let out = `# *Stap voor stap* · Petites productions jalonnées pour vrais débutants (A1)

| | |
|---|---|
| **Niveau** | A1, vrais débutants (néerlandais, apprenant·es francophones) — ${total} contextes |
| **Durée** | 10 à 15 min par contexte (5 min de production, puis comparaison avec le modèle) |
| **Format** | Pour chaque contexte, trois diapos : la **consigne** (« Gebruik deze afbeelding als inspiratie », image + Zin 1 à Zin 3, 4 ou 5), la **grande image**, puis l'**exemple** (« Hier is een voorbeeld… », étiquettes vertes posées sur les bribes de texte) |
| **Source** | En parallèle du syllabus *Néerlandais en situation* (UE2, A. Jouniaux) : section 1 *Premiers pas* (Emma & Pieter, séquences 1.1 à 1.4 et synthèse), section 2 *Grammaire* (palier A1, fiches 01 à 10), section 3 *Vocabulaire thématique* (thèmes 01 à 11), section 4 *Mises en situation* (jalon A1, fiches 1 à 10) |
| **Savoir-faire visés** | Produire 3 à 5 phrases simples sur une situation du quotidien en réutilisant les blocs du syllabus ; s’autoévaluer à l’aide d’un modèle |

## Choix didactiques

- **Jalonné, pas à pas** : on commence par **3 phrases** (salutations, ’s morgens / vanavond, hoe gaat het), on passe à **4** (zijn & hebben, prendre congé, grammaire, vocabulaire), puis à **5** pour les synthèses (« Stel jezelf voor », situations professionnelles). Chaque consigne demande **un seul bloc** du syllabus, écrit en **MAJUSCULES**.
- **En parallèle du syllabus** : chaque contexte indique sa page (« syllabus 1.2 · p. 19 », « fiche 06 · p. 63 »…). Les personnages sont ceux du syllabus : Emma, Pieter, Sarah, meneer Janssens.
- **Une illustration qui situe le contexte** : un décor dessiné pour chaque situation et peuplé d’emoji 3D (Fluent, Microsoft, licence MIT), produit par \`generateur/vijf_art_a1.js\`.
- **La mise en page du modèle *Gebruik deze foto als inspiratie*** (comme le deck *In vijf zinnen*) : bandeau vertical de couleur par section (vert, bleu, orange, violet), étiquettes « Zin 1 » à « Zin n », encadré final « Lees je tekst voor aan je partner. Wat denkt hij/zij daarvan? ».
- **Les étiquettes de l’exemple** : chaque bribe qui répond à une consigne est surlignée en vert et surmontée d’une petite étiquette (le mot-clé de la consigne). Dialogues et SMS : une réplique par ligne, le nom de la personne qui parle en gris. Dans ce gabarit, les bribes étiquetées sont notées [entre crochets], suivies du numéro de la consigne.
- **Toujours une chute** : la dernière phrase surprend ou fait sourire (le chat qui mange le fromage, la file de vingt personnes, « Wie is de manager? — Ik! »).
- **Écrit ou oral** : chaque contexte porte une pastille *À l’écrit* ou *À l’oral* ; tous peuvent se faire dans l’autre modalité.

## Déroulé conseillé (par contexte)

| Phase | Diapo | Durée |
|---|---|---|
| Découverte de l’image : « Waar zijn we? Wie zie je? » | grande image | 2 min |
| Lecture des consignes, rappel des blocs du syllabus | consigne | 2 min |
| Production individuelle (syllabus ouvert), puis lecture au partenaire | consigne | 5 min |
| Lecture de 2 ou 3 productions, puis comparaison avec l’exemple | exemple | 3 min |

---

### [DIAPOSITIVE 1 : Stap voor stap]

**Objectif pédagogique** — Présenter le principe : une image, quelques consignes, un modèle ; 3, puis 4, puis 5 phrases.

**Visuel / Schéma / Agencement**
- Bandeau « A1 · Débutants » ; titre, sous-titre ; un escalier de trois marches « 3 zinnen · 4 zinnen · 5 zinnen » ; encadré « En parallèle du syllabus » ; à droite, trois illustrations en cadres photo inclinés (l’école, la petite terrasse, l’hiver).

**Contenu textuel**
> **Stap voor stap**
> *Petites productions jalonnées*
> ${total} contextes · 1 image · 3, 4 puis 5 phrases · 1 modèle
> En parallèle du syllabus « Néerlandais en situation » : Emma & Pieter, grammaire, vocabulaire, situations.

**Notes pour l'animateur** — « Stap voor stap » = pas à pas. Annoncez le défi : réutiliser les blocs du syllabus… et trouver la meilleure chute.

---

### [DIAPOSITIVE 2 : Hoe werkt het? Comment ça marche ?]

**Objectif pédagogique** — Expliquer les quatre étapes et la correspondance consigne → bribe.

**Visuel / Schéma / Agencement**
- Quatre cartes : ① Kijk · ② Lees · ③ Schrijf of vertel · ④ Deel.
- Un exemple complet (« ${ex0.t} ») avec ses bribes surlignées et leurs étiquettes vertes.

**Contenu textuel**
> ① **Kijk** — Observez l’image : où ? qui ? quoi ? · ② **Lees** — Lisez les consignes : Zin 1, Zin 2… une phrase chacune. · ③ **Schrijf of vertel** — Écrivez ou dites vos phrases, le syllabus ouvert (5 min). · ④ **Deel** — Lisez votre texte à votre partner, puis comparez avec l’exemple.
> *${plainEx(ex0.ex.join(' '))}*
> Le but : réutiliser les blocs du syllabus… et oser une chute amusante !

**Notes pour l'animateur** — Le modèle n’est pas « la » réponse : toute phrase qui respecte la consigne est juste. Les apprenant·es peuvent surligner eux-mêmes et elles-mêmes, dans leur production, la bribe qui répond à chaque consigne.

---

### [DIAPOSITIVE 3 : Stap voor stap : le parcours]

**Objectif pédagogique** — Montrer le lien avec les quatre sections du syllabus et la progression 3 → 4 → 5 phrases.

**Visuel / Schéma / Agencement**
- Quatre colonnes aux couleurs des sections (numéro, titre, vignette, nombre de productions, nombre de phrases, pages du syllabus) ; en bas, un encadré « pas à pas ».

**Contenu textuel**
${SECTIONS.map((sc, i) => `> **${i + 1}. ${sc.name}** — ${sc.ctx.length} productions · ${[...new Set(sc.ctx.map((c) => c.crit.length))].sort().join(' · ')} phrases · ${sc.pages}`).join('\n')}
> Chaque production reprend les blocs du syllabus (zinnenbouwer). On commence à 3 phrases, on monte à 4, puis à 5 pour la synthèse de chaque palier. La dernière phrase est toujours une chute.

**Notes pour l'animateur** — Utilisez chaque contexte juste après la séquence ou la fiche correspondante du syllabus : c’est la « couche 2 » (production structurée), puis, syllabus fermé, la « couche 3 » (fluidité).

---

### [DIAPOSITIVE 4 : Évaluer une production : la grille sur 10]

**Objectif pédagogique** — Donner une grille simple et bienveillante pour des débutant·es.

**Visuel / Schéma / Agencement**
- Bandeau « Évaluation » ; cinq lignes (pastille de couleur, critère, explication, points) ; à droite, une barre de 10 cases.

**Contenu textuel**
> **Consignes** 4 pts — toutes les consignes sont présentes (3, 4 ou 5 : on ramène sur 4 points) · **Correction** 3 pts — zijn / hebben, le verbe en 2e place, de / het, niet / geen · **Vocabulaire** 1 pt — les mots du syllabus, bien choisis · **Cohérence** 1 pt — les phrases racontent une même scène · **Chute** 1 pt — une fin originale, de l’humour, une surprise
> Débutant·es : on valorise ce qui est réussi. À l’oral, la prononciation remplace l’orthographe.

**Notes pour l'animateur** — Une consigne est « respectée » si le bloc demandé est présent et compréhensible. En formatif, l’autoévaluation suffit : les apprenant·es cochent les consignes avant de lire leur texte.

---

`;
let g = 5; let num = 1;
SECTIONS.forEach((sc) => {
  out += `### [DIAPOSITIVE ${g} : ${sc.name}]

**Objectif pédagogique** — Présenter les ${sc.ctx.length} productions de la section « ${sc.name} » (${sc.pages}).

**Visuel / Schéma / Agencement**
- Bandeau « ${sc.label} » ; à gauche, ce qu’on travaille ; à droite, les ${sc.ctx.length} illustrations en vignettes (numéro, titre néerlandais, pastille écrit / oral).

**Contenu textuel**
> **Ce qu’on travaille** : ${sc.spec.join(' · ')}
> ${sc.ctx.map((c, i) => `${num + i} · ${c.t} (${c.mode === 'W' ? 'écrit' : 'oral'}, ${c.crit.length} phrases)`).join(' — ')}

**Notes pour l'animateur** — Les productions suivent l’ordre du syllabus ; chacune peut se faire seule, juste après la page indiquée.

---

`;
  g += 1;
  sc.ctx.forEach((c) => {
    out += `### [DIAPOSITIVE ${g} : ${c.t}]

**Objectif pédagogique** — ${num} · ${c.fr} (syllabus ${c.ref}) : produire ${c.crit.length} phrases ${c.mode === 'W' ? 'à l’écrit' : 'à l’oral'} en respectant les ${c.crit.length} consignes.

**Visuel / Schéma / Agencement**
- **Consigne** : « Gebruik deze afbeelding als inspiratie » ; l’illustration (\`img/vijfzinnen/${c.img}.jpg\`), la pastille ${c.mode === 'W' ? '« À l’écrit »' : '« À l’oral »'} et la situation ; à droite, Zin 1 à Zin ${c.crit.length} ; en bas, ${c.mode === 'W' ? '« Lees je tekst voor aan je partner. »' : '« Vertel je verhaal aan je partner. »'} « Wat denkt hij/zij daarvan? »
- **Grande image** : l’illustration en grand, dans un cadre photo.
- **Exemple** : « Hier is een voorbeeld van wat je had kunnen denken en ${c.mode === 'W' ? 'schrijven' : 'zeggen'}… », vignette, puis le texte${c.lines ? ' (une réplique par ligne)' : ''}, chaque bribe surlignée et surmontée de son étiquette verte.

**Contenu textuel**
> *${c.sit}*
${c.crit.map((k, j) => `> ${j + 1}. ${k.t}`).join('\n')}
>
> **EXEMPLE** — ${c.ex.map((e) => marked(e)).join(c.lines ? ' / ' : ' ')}

**Notes pour l'animateur** — ${c.notes}

---

`;
    g += 1; num += 1;
  });
});
out += `### [DIAPOSITIVE ${g} : Six variantes pour débutant·es]

**Objectif pédagogique** — Varier les modalités pour réutiliser les ${total} contextes.

**Visuel / Schéma / Agencement**
- Six cartes illustrées (📖 ⏱️ 🔗 🕵️ ⬆️ 🏆).

**Contenu textuel**
> **Syllabus ouvert, puis fermé** — Première fois avec le zinnenbouwer ; deuxième fois sans, de mémoire. · **Plus vite !** — On redit sa production en 60 s, puis en 45 s (couche 3 : fluidité). · **La chaîne** — Une phrase chacun·e, à l’oral, autour de la table. · **Devinez la consigne** — On lit sa production ; la classe retrouve les consignes. · **Une marche de plus** — Ajoutez une phrase : 3 → 4 → 5, ou une consigne du deck In vijf zinnen. · **La meilleure chute** — Toutes les chutes au tableau ; la classe vote.

**Notes pour l'animateur** — Ces variantes reprennent les trois couches du syllabus : réception (on lit l’exemple), production structurée (syllabus ouvert), fluidité (syllabus fermé, plus vite). Les meilleures productions peuvent ensuite passer au deck *In vijf zinnen* (A1 · A2 · B1).
`;
fs.writeFileSync(path.join(G, '..', 'stap_voor_stap_a1.md'), out);
console.log('slides g:', g);
