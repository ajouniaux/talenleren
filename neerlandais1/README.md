# Néerlandais 1 (UE1 · A1) — Parcours de référence en 5 modules

Refonte des archives PowerPoint de *Néerlandais 1 — Langue en situation, en milieu professionnel*. Public : adultes francophones (Belgique). Chaque module est livré sous forme de **gabarit diapositive par diapositive**, prêt à être monté dans PowerPoint. Pour chaque diapositive, le gabarit donne :

- l'objectif pédagogique ;
- le visuel, le schéma et l'agencement ;
- le contenu textuel ;
- les notes pour l'animateur.

## Contenu du dossier

## Les PowerPoint (prêts à projeter)

| Fichier | Diapos |
|---|---|
| [`powerpoints/Module_1_Klanken.pptx`](powerpoints/Module_1_Klanken.pptx) | 26 |
| [`powerpoints/Module_2_Ik_stel_me_voor.pptx`](powerpoints/Module_2_Ik_stel_me_voor.pptx) | 37 |
| [`powerpoints/Module_3_Het_presens.pptx`](powerpoints/Module_3_Het_presens.pptx) | 34 |
| [`powerpoints/Module_4_Spellingregels.pptx`](powerpoints/Module_4_Spellingregels.pptx) | 30 |
| [`powerpoints/Module_5_De_of_het.pptx`](powerpoints/Module_5_De_of_het.pptx) | 33 |

Format 16:9, thème de Néerlandais 2 et 3. Chaque exercice a une diapo question suivie d'une diapo « ✓ CORRECTIE ». Les **notes du présentateur** reprennent, pour chaque diapo, l'objectif pédagogique et les notes pour l'animateur des gabarits. Illustrations : *Fluent Emoji* (Microsoft, licence MIT).

## Les gabarits

| Fichier | Contenu |
|---|---|
| [`00_diagnostic_et_charte.md`](00_diagnostic_et_charte.md) | Analyse critique des 5 archives, nouveau parcours et justification de l'ordre, **errata** (erreurs relevées et corrigées), **charte graphique** (palette alignée sur Néerlandais 2 et 3, code couleur grammatical), **bibliothèque de schémas S1–S11**, **gabarits d'exercices E1–E9**, glossaire FR ↔ NL |
| [`module_1_klanken.md`](module_1_klanken.md) | **M1 · Klanken** — sons longs / courts, syllabe ouverte / fermée, sons invariables, pièges de prononciation · 21 diapos, 6 exercices |
| [`module_2_ik_stel_me_voor.md`](module_2_ik_stel_me_voor.md) | **M2 · Ik stel me voor** — saluer, pronoms, *je / u / jullie*, *zijn*, *hebben*, nombres, 5 verbes de présentation, prépositions, formulaire, épellation · 31 diapos, 8 exercices (dont 3 mises en situation) |
| [`module_3_presens_en_zinsbouw.md`](module_3_presens_en_zinsbouw.md) | **M3 · Het presens** — radical, formule du présent, questions, grille de phrase à 6 cases, verbe en 2e position, inversion, pince verbale · 28 diapos, 7 exercices |
| [`module_4_spellingregels_werkwoorden.md`](module_4_spellingregels_werkwoorden.md) | **M4 · Spellingregels** — z→s, v→f, radicaux en -t et -d (*dt*), verbes courts, *kunnen / willen / mogen / moeten*, organigramme de conjugaison · 24 diapos, 7 exercices |
| [`module_5_de_of_het.md`](module_5_de_of_het.md) | **M5 · De of het?** — entonnoir FR → NL, genre français ≠ de / het, pluriel, familles DE et HET, mots composés, Ø partitif, organigramme · 27 diapos, 7 exercices |

## Correspondance avec les archives

| Archive | → Module |
|---|---|
| `2025-10-03_AJ_Neerlandais1_ppt_prononciation_sons_longs_courts.pptx` | M1 |
| `2020-11-26_AJ_neerlandais1_se_presenter.pptx` | M2 |
| `2020-11-26_AJ_neerlandais1_present_verbes_reguliers.pptx` | M3 (+ 5 items déplacés en M4) |
| `2020-11-26_AJ_neerlandais1_present_conjugaisons_semi_regulieres.pptx` | M4 |
| `2024-08-05_AJ_Neerlandais1_ppt_articles.pptx` | M5 |

## Comment lire un gabarit

- Les **schémas** sont désignés par leur code (par ex. « Schéma **S2** » = grille de phrase à 6 cases). Leur dessin exact est décrit une seule fois, dans la charte (§ 5.8).
- Les **exercices** suivent un gabarit E1–E9 (charte, § 5.9). Chaque exercice comprend une diapo question puis une diapo « ✓ CORRECTIE ». Le corrigé est donné dans la rubrique « Contenu textuel ».
- Le **code couleur** (vert = son long, framboise = son court, rouge = verbe, orange = terminaison et HET, bleu nuit = DE) est constant dans les 5 modules (charte, § 5.3).
- Le **fil rouge** relie les 5 modules : Karim, comptable namurois, et sa collègue Sofie, dans une entreprise bilingue à Bruxelles.

## À vérifier avant les cours

- **Relecture du néerlandais** : tous les exemples, corrigés et règles ont fait l'objet d'une seconde relecture indépendante, et ses corrections ont été appliquées. Les points d'usage discutables (Belgique / Pays-Bas : *jullie werkt*, *op dinsdag*, *peen / wortel*, *gsm*, *verlof*) sont signalés dans les notes. Une dernière lecture par l'enseignante reste conseillée.
- **Formulaires des mises en situation (M2)** : les enseignes sont fictives (Sportclub Vitaal, Brasserie De Lepel). Les formulaires réels des archives contenaient un logo de marque.

## Régénérer les PowerPoint

Le dossier `generateur/` contient le code source : `lib.js` (thème, schémas, gabarits d'exercices) et un fichier par module dans `generateur/modules/`. Les objectifs et les notes animateur sont lus directement dans les gabarits `module_N_*.md` : modifier un gabarit met donc à jour les notes du deck.

```bash
cd generateur
npm install
npm run build        # réécrit les 5 fichiers dans ../powerpoints
node build.js 3      # un seul module
```
