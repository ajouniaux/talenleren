# English · UE3 · Productions guidées (B1)

Des tâches d'écriture et d'expression orale **jalonnées**, à faire après chaque cours, dans le style *Use this picture as inspiration* (le même modèle que les decks néerlandais *In vijf zinnen* et *Stap voor stap*) : une illustration du livret qui situe la scène, cinq consignes « Sentence 1 » à « Sentence 5 », la grande image, puis un exemple dont chaque bribe porte une étiquette verte qui renvoie à sa consigne. Un **jalon supplémentaire plus difficile** (★ Challenge, Sentence 6, en or) attend les étudiant·es qui s'en sentent capables.

| Deck | Fichier | Gabarit | Diapos |
|---|---|---|---|
| *In five sentences (+1)* · Lesson 1 : le message de 06.58, Atlas House à 8.15, la chronologie pour 9 h | [`powerpoints/UE3_Lesson1_In_five_sentences.pptx`](powerpoints/UE3_Lesson1_In_five_sentences.pptx) | [`lesson1_in_five_sentences.md`](lesson1_in_five_sentences.md) | 14 |

## Lesson 1 · ce que les trois productions évaluent

| Contenu du cours 1 | 1 · The message at 06.58 (écrit) | 2 · Atlas House, 8.15 (oral) | 3 · A timeline by nine (écrit) |
|---|---|---|---|
| Prépositions de temps (*at, by, until, between, in, for*) | ✓ *at, by* | ✓ *between, in / for, until ≠ by* | ✓ *at* |
| Past simple (irréguliers, *didn’t*, *Did …?*) | ✓ | ✓ | ✓ |
| Phrasal verbs de l'incident | | ✓ *turn up, call out, put off* | ✓ *break down, shut down, look into* |
| Carte mentale de l'incident | ✓ le lieu | | ✓ personnes, preuves, documents |
| Fait ≠ supposition (heure vérifiable) | ★ la phrase honnête | | ✓ l'heure et sa source |
| Past simple ≠ present perfect | | ★ résultat maintenant / fait daté | ★ temps révolu / *never, ever* |

✓ = dans les phrases 1 à 5 · ★ = dans le jalon supplémentaire (Sentence 6).

Le deck contient aussi le mode d'emploi, une grille d'évaluation **sur 10 + 2** (les deux points de bonus du jalon valent une mention B1+) et une liste de vérification « Before you hand in ». Les notes du présentateur (en français) donnent les attendus, les erreurs typiques des francophones et les variantes acceptables.

## Régénérer

Le deck est produit par le générateur du dossier néerlandais (`../neerlandais1/generateur`), qui partage la mise en page des productions guidées (`vijf_kit.js`). Les illustrations sont celles du livret (`../generateur/img`), recadrées au format des diapos dans `../neerlandais1/generateur/img/vijfzinnen/en_*.jpg`.

```bash
cd ../neerlandais1/generateur
npm install
node en_lesson1_md.js      # après avoir modifié en_lesson1_data.js : régénère lesson1_in_five_sentences.md
node build.js en_lesson1   # écrit powerpoints/UE3_Lesson1_In_five_sentences.pptx
```
