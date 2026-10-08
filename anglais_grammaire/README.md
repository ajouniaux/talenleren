# English · A2–B1 · Grammar in pictures

Deux présentations PowerPoint autonomes, aérées et visuelles, pour enseigner le **past simple** et le **present perfect** à des apprenant·es francophones (niveau A2–B1), puis les comparer.

| Deck | Fichier | Gabarit | Diapos | Durée |
|---|---|---|---|---|
| *The past simple* · raconter ce qui est fini | `powerpoints/English_Past_simple.pptx` | `past_simple.md` | 37 | 2 × 90 min |
| *The present perfect* · le passé qui touche le présent, et la comparaison avec le past simple | `powerpoints/English_Present_perfect.pptx` | `present_perfect.md` | 38 | 2 × 90 min |

Ordre conseillé : *Past simple* d'abord ; le deck *Present perfect* s'appuie dessus et contient toute la comparaison (côte à côte, arbre de décision, « news first, then details », passé composé ≠ present perfect).

## Ce que contient chaque deck

1. **Couverture** et **Today's mission** (trois objectifs « I can… »).
2. **Warm-up** illustré pour faire produire la forme avant la règle.
3. **Théorie en schémas** : la norme puis les exceptions.
   - *Past simple* : la boîte du temps fini, la phrase en cases, l'orthographe du *-ed* (4 règles), la prononciation /t/ /d/ /ɪd/, les irréguliers par familles et le top 20, *was / were*, la négation et la question (flèches : le *-ed* passe dans *did*, *did* saute en tête), QUASI, les questions sujet, les marqueurs de temps.
   - *Present perfect* : le pont vers NOW, *have / has* + participe, les participes par familles et le top 20, la négation et la question, les trois usages (expérience *ever / never*, résultat *just / already / yet*, toujours vrai *for / since*), *been / gone*, temps ouvert / temps fermé.
4. **Comparaison** (deck *Present perfect*) : quatre paires de phrases côte à côte, l'arbre de décision à deux questions, l'enchaînement nouvelle → détails dans une conversation, le tableau 🇫🇷 → 🇬🇧.
5. **Pièges pour francophones** (🇫🇷 ≠ 🇬🇧) et diapo **Remember** à photographier.
6. **Dix exercices ludiques et variés** par deck : une diapo **question**, puis une diapo **✓ CORRECTION**. Au programme : tri, mémoire, texte à trous, phrases à reconstruire, détective (erreurs barrées en rouge), « Two truths and a lie », « Find someone who… » (bingo), jeu de rôle avec document (week-end, entretien d'embauche).
7. **Ticket de sortie** avec auto-évaluation et devoir.

## Conventions

- **Langue** : diapos en anglais simple ; pièges, bandes de synthèse et **notes du présentateur en français**, avec les réponses et les variantes acceptables.
- **Code couleur commun** : past simple **framboise** · present perfect **bleu** · NOW **rouge** · marqueurs de temps **orange** · auxiliaires (*did, have, has*) **bleu nuit** · négation **rouge** · mot interrogatif **vert**.
- **Découpes de phrase** : chaque phrase-modèle est coupée en cases colorées, avec une étiquette sous chaque case (SUBJECT, AUX, BASE, PARTICIPLE, WHEN…).
- Usage **britannique** ; les variantes américaines utiles sont signalées dans les notes (*traveled*, *gotten*, *I just finished*).

## Régénérer les PowerPoint

Les decks sont produits par le générateur du cours de néerlandais (`../neerlandais1/generateur`), qui partage le thème, les icônes et les gabarits d'exercices. Le code propre à l'anglais est dans `en_kit.js` (couleurs, libellés anglais, découpes de phrase, frises) et dans `modules/en_pastsimple.js` et `modules/en_presentperfect.js`. Les objectifs et les notes du présentateur sont lus dans les gabarits `past_simple.md` et `present_perfect.md` : modifier un gabarit met à jour les notes du deck.

```bash
cd ../neerlandais1/generateur
npm install
node build.js en_pastsimple en_presentperfect   # réécrit les 2 fichiers dans ../../anglais_grammaire/powerpoints
```
