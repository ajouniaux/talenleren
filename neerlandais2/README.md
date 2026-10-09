# Néerlandais 2 (UE2) — « Néerlandais en situation » : 19 PowerPoint

Une présentation par séance, pour projeter au tableau le traitement de chaque page du syllabus `2026_06_19_AJ_neerlandais2_syllabus_vf.pdf`.

| Séance | Contenu | Pages du livret |
|---|---|---|
| 01 | Le cours, les personnages, le dialogue, séquence 1.1 (1.1.1 – 1.1.4) | p. ii – 9 |
| 02 | Séquence 1.1 (1.1.5 – 1.1.7, Klankmoment, carrousel) + Woordvolgorde | p. 10 – 14, 68 |
| 03 | Mots composés + séquence 1.2 (1.2.1 – 1.2.2) + Getallen & klok + Tijd & weer | p. 15 – 23, 64, 87 |
| 04 | Séquence 1.2 (1.2.3 – 1.2.6) + En · maar · want + Gevoelens | p. 24 – 26, 73, 88 |
| 05 | Séquence 1.2 (1.2.7 – 1.2.10, Raad de emoties) + Zich wassen + Fiche 8 | p. 27 – 34, 75, 99 |
| 06 | Séquence 1.3 (zijn/hebben, textes 1 – 3, 1.3.1 – 1.3.3) + Niet of geen | p. 35 – 40, 63 |
| 07 | Séquence 1.3 (1.3.4 – 1.3.8, pronoms) + Vraagwoorden | p. 41 – 50, 62 |
| 08 | Séquence 1.4 + Stel jezelf voor + Gebiedende wijs + Lidwoorden + Zich voorstellen | p. 51 – 58, 67, 78 |
| 09 | Bilan du palier 1 + Fiche 9 (chemin) + Voorzetsels + Familie + In de stad | p. 65, 79 – 80, 100a |
| 10 | Fiche 5 (formulaire) + Deze · dit · mijn + Administratie | p. 60, 86, 96 |
| 11 | Fiche 4 (le cours) + Meervoud + Adjectief + Faux-amis 3/3 | p. 59, 61, 91, 95 |
| 12 | Fiche 3 (disponibilités) + Altijd · nooit · al + Ik ga … doen + Telefoon & mail | p. 74, 77, 85, 94 |
| 13 | Fiche 1 (intérim) + Hem · haar · hun + Werk & bedrijf | p. 71, 84, 92 |
| 14 | Fiche 2 (CV) + Perfectum + Faux-amis 1/3 | p. 69, 89, 93 |
| 15 | Fiche 6 (entretien) + Groter dan + modaux + Faux-amis 2/3 | p. 76, 90, 97 |
| 16 | Fiche 7 (au travail) + Iemand · niets | p. 72, 98 |
| 17 | Fiche 10 (examen) + OVT + Gezondheid | p. 70, 83, 100b |
| 18 | Eten & drinken + Boodschappen + Verkleinwoorden + jeux de rôle (marché, café) | p. 66, 81 – 82 |
| 19 | Synthèse et préparation de l'évaluation | tout le livret |

Chaque exercice du livret a une diapositive « question » puis une diapositive « ✓ CORRECTIE ». Les ajouts hors syllabus portent le tag « + BONUS ». Les notes du présentateur (en français) donnent la conduite de l'activité et signalent les coquilles du livret.

**Production guidée** : le complément *In vijf zinnen* (24 tâches d'écriture ou d'oral, A1 · A2 · B1, avec modèles annotés) se trouve dans [`../neerlandais1/powerpoints/In_vijf_zinnen_A1_A2_B1.pptx`](../neerlandais1/powerpoints/In_vijf_zinnen_A1_A2_B1.pptx) ; sa section A2 correspond à ce cours.

## À vérifier avant les cours
- **Textes lus par le professeur** (1.1.1, 1.1.2, 1.2.1, 1.3.2…) : quand le texte n'est pas dans le syllabus, la diapositive affiche la grille ; la solution dépend du texte lu.
- **Relecture** : la séance 1 a été relue par un réviseur indépendant. Les séances 2 à 19 ont été vérifiées par leurs auteurs (construction et mise en page), mais pas encore par un second relecteur : une relecture du néerlandais par l'enseignante reste conseillée.
- **Coquilles du livret** (corrigées sur les diapositives, signalées en notes), par exemple : « werk Emma » → werkt Emma (zinnenbouwer 1.1), « uit Belgiè » → België, « Ik bem vrij gemotivreerd » → Ik ben vrij gemotiveerd (p. 32), « speelen » → spelen (p. 70), « Vul het juiste persoonlijke naamwoorden » (p. 50), « Ze is druk » → Ze heeft het druk (texte 3, p. 38), sommaires internes des sections 2 et 4 qui ne correspondent pas aux fiches.

## Régénérer
Le dossier `generateur/` contient un fichier par séance (`sessions/sNN.js`) et les illustrations extraites du livret (`img/`).
```bash
cd generateur && npm install && npm run build   # réécrit ../powerpoints
```
