# Néerlandais 2 — Fiches différenciées « Néerlandais au travail » (A1 → A2)

Cinq mises en situation socioprofessionnelles, construites sur le calque du dispositif ARK (Nedconsult) : une même tâche finale, **cinq variantes** qui retirent les aides peu à peu (Champion·ne → Superchampion·ne → Héro·ïne → Superhéro·ïne → Légende). Un fil rouge relie les fiches : la firma Verbeke, à Bruxelles.

| PDF | Situation | Niveau | Compétence | Pages |
|---|---|---|---|---|
| `pdf/00_Parcours.pdf` | Vue d'ensemble, spirale grammaticale, la méthode en une page | — | — | 2 |
| `pdf/01_Op_het_werk.pdf` | Se présenter au travail, décrire ses tâches | A1 | EO interaction | 9 |
| `pdf/02_De_weg_vragen.pdf` | Demander le chemin vers une entreprise (cartes A/B) | A1 | EO interaction | 11 |
| `pdf/03_Aan_de_telefoon.pdf` | Prendre un appel, noter un message | A1 → A2 | EO interaction | 10 |
| `pdf/04_Formele_e-mail.pdf` | Répondre à une invitation à un entretien | A2 | Expression écrite | 10 |
| `pdf/05_Sollicitatiegesprek.pdf` | Passer un entretien d'embauche | A2 · synthèse | EO interaction | 10 |
| `pdf/Dossier_complet_5_fiches.pdf` | Tout en un seul fichier | | | 52 |

## Structure de chaque fiche
1. **Document enseignant** (2 pages) : scénario de séance (intention, fonctions, dialogue modèle, déroulement en 7 phases), puis repères didactiques (forme à faire remarquer, erreurs attendues chez des francophones, grille d'observation A1/A2, apports, prolongements).
2. **Page de garde élève** : can-do, tâche finale, choix du niveau, bouée de secours.
3. **Variantes 1 à 5** ; la variante 5 contient la tâche finale et l'autoévaluation (avec les échelles d'anxiété ARK).
4. **Supports** : profils d'emprunt (fiches 1, 5), cartes A/B et corrigé du plan (fiche 2), cartes appelant·e et fiches de message (fiche 3), feuille-réponse et relecture croisée (fiche 4), carte recruteur·euse (fiche 5).

## À vérifier avant les cours
- Le néerlandais a été relu par son auteur, mais pas par un second relecteur : une relecture par l'enseignante reste conseillée.
- Les dates de la fiche 4 (mardi 17, mercredi 18, jeudi 19 novembre ; réponse avant le vendredi 13 novembre) correspondent au calendrier 2026.

## Régénérer
Les contenus sont dans `generateur/fiches/fN.js` (un fichier par fiche) ; la mise en page est dans `generateur/lib.js`.
```bash
cd generateur && npm install && npm run build   # réécrit ../html et ../pdf
node build.js 3                                  # une seule fiche
```
