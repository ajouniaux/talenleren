# Test de néerlandais — valorisation des acquis (A2 · B1)

Application web d'évaluation des acquis en néerlandais pour une procédure de dispense (enseignement de promotion sociale). Elle tient en quelques fichiers statiques : aucun serveur, aucune base de données, aucune compilation. Elle s'héberge gratuitement sur **GitHub Pages**.

| Étape | Contenu |
|---|---|
| 1. Identification | Prénom, nom, e-mail personnel, e-mail du professeur (par défaut `jouniauxa@iram.be`), niveau visé A2 ou B1 |
| 2. Consignes | Règles, test du son, engagement sur l'honneur. Le chronomètre démarre ici. |
| 3. Leestoets | Un texte authentique (e-mail en A2, article en B1) et 10 QCM |
| 4. Luistoets | Un document sonore (dialogue téléphonique en A2, interview radio en B1), 3 écoutes maximum, 10 QCM |
| 5. Schrijfopdracht | Une situation professionnelle (e-mail à lire, note d'un collègue en B1), 6 ou 7 étapes à suivre, zone de texte avec compteur de mots |
| 6. Résultats | Scores, attestation (PDF + impression) si les deux seuils sont atteints, envoi automatique des e-mails |

Chaque test mêle des questions du niveau visé et des **prérequis** du niveau inférieur. Chaque question porte une étiquette A1, A2 ou B1, et le rapport du professeur donne le sous-total par niveau (par exemple « A1 : 4/4 · A2 : 5/6 »).

---

## 1. Les fichiers

```
docs/
├── index.html      structure de la page (Tailwind CSS par CDN)
├── style.css       compléments : états, animations, impression
├── config.js       ⚙️ RÉGLAGES : e-mails, seuil, durée, écoutes…
├── contenu.js      ✏️ TEXTES ET QUESTIONS des deux niveaux
├── script.js       logique de l'application (JavaScript natif)
├── audio/          fichiers MP3 de la Luistoets (facultatifs, voir § 5)
└── outils/
    ├── apps-script.gs     option B pour l'envoi des e-mails (Google)
    └── generer_audio.py   génère les MP3 avec des voix flamandes
```

En temps normal, vous ne modifiez que `config.js` et, si vous le souhaitez, `contenu.js`.

---

## 2. Mettre le test en ligne (GitHub Pages)

1. Fusionnez cette branche dans la branche que vous voulez publier, ou publiez directement la branche de travail.
2. Sur GitHub : **Settings → Pages → Build and deployment**.
   - *Source* : **Deploy from a branch**
   - *Branch* : la branche choisie, dossier **`/docs`** → **Save**.
3. Après une à deux minutes, le test est en ligne à l'adresse
   **`https://ajouniaux.github.io/talenleren/`**.
4. Testez tout le parcours vous-même (voir § 8, mode démonstration) avant de communiquer le lien aux étudiants.

> GitHub Pages gratuit fonctionne avec un dépôt **public**. Le dépôt contient aussi vos autres supports de cours : s'ils ne doivent pas être publics, copiez le dossier `docs/` dans un dépôt séparé (par exemple `test-neerlandais`) et publiez celui-ci.

**Essai sur votre ordinateur** : double-cliquez sur `docs/index.html`. Pour que tout fonctionne comme en ligne (détection des MP3 notamment), lancez plutôt un petit serveur local dans le dossier `docs` :

```bash
cd docs
python -m http.server 8000      # puis ouvrez http://localhost:8000
```

---

## 3. Réglages (`config.js`)

| Réglage | Par défaut | Rôle |
|---|---|---|
| `etablissement`, `intitule` | IRAM — Enseignement de promotion sociale | En-tête, pied de page, attestation, e-mails |
| `nomProfesseur` | `""` | Nom imprimé sous « Le professeur » sur l'attestation |
| `emailProfesseurDefaut` | `jouniauxa@iram.be` | Adresse proposée dans le formulaire |
| `domainesProfesseurAutorises` | `["iram.be"]` | L'étudiant ne peut pas remplacer l'adresse du professeur par la sienne. `[]` = aucune restriction |
| `seuilReussite` | `5` | Minimum sur 10 pour chaque QCM |
| `afficherCorrection` | `false` | `true` : l'étudiant voit le détail juste / faux à la fin. À éviter si d'autres étudiants passent le même test plus tard. |
| `dureeMinutes` | `{ A2: 60, B1: 75 }` | Chronomètre global. `null` = pas de limite (la durée est quand même communiquée). |
| `ecoutesMax` | `3` | Nombre d'écoutes du document sonore. `0` = illimité |
| `melangerPropositions` | `true` | Ordre des propositions différent pour chaque étudiant |
| `bloquerCollage` | `true` | Interdit le copier-coller dans la production écrite (les tentatives sont comptées) |
| `vitesseSynthese` | `{ A2: 0.9, B1: 1.0 }` | Vitesse de la voix de synthèse, utilisée seulement sans MP3 |
| `envoi` | vide | Identifiants EmailJS ou URL Apps Script (voir § 4) |

---

## 4. Envoi des résultats par e-mail

Tant que rien n'est configuré, l'application fonctionne en **mode démonstration** : aucun e-mail n'est envoyé, et l'étudiant peut télécharger un rapport ou écrire au professeur depuis sa messagerie (lien pré-rempli). Les deux options ci-dessous sont gratuites. Configurez-en une seule.

### Ce que chacun reçoit

- **Professeur** : identité, date, durée, n° de tentative, code de vérification ; scores avec sous-totaux par niveau ; déroulement (sorties de la page, collages bloqués, écoutes utilisées) ; la production écrite avec la consigne, les étapes attendues et une **grille d'évaluation sur 10** à compléter ; le détail question par question (réponse donnée, réponse attendue).
- **Étudiant** : ses scores, le message de réussite ou de suivi, l'**attestation** si les seuils sont atteints, une copie de sa production écrite. Pas de corrigé.

### Option A — EmailJS (la plus simple, 200 e-mails/mois gratuits)

Chaque test envoie 2 e-mails : le quota gratuit couvre donc environ 100 tests par mois.

1. Créez un compte sur [emailjs.com](https://www.emailjs.com/).
2. **Email Services → Add New Service** : connectez la boîte qui enverra les messages (Gmail, Outlook…). Notez le **Service ID** (`service_…`).
3. **Email Templates → Create New Template**, puis remplissez :
   - **Subject** : `{{subject}}`
   - **Content** : passez l'éditeur en mode code (`<>`) et collez uniquement `{{{html_message}}}` (avec **trois** accolades, pour que le HTML soit interprété)
   - **To Email** : `{{to_email}}`
   - **From Name** : `{{from_name}}`
   - **Reply To** : `{{reply_to}}`

   Enregistrez et notez le **Template ID** (`template_…`).
4. **Account → General** : copiez la **Public Key**.
5. Complétez `config.js` :
   ```js
   envoi: {
     emailjs: { publicKey: "VOTRE_PUBLIC_KEY", serviceId: "service_xxx", templateId: "template_xxx" },
     appsScriptUrl: "",
   },
   ```
6. **Sécurité (recommandé)** : dans *Account → Security*, limitez l'utilisation de votre clé au domaine `ajouniaux.github.io` si l'option est proposée. Utilisez une boîte d'envoi dédiée plutôt que votre boîte personnelle.

### Option B — Google Apps Script (PDF joint + registre Google Sheets)

Les e-mails partent de votre compte Google, l'attestation est jointe en **PDF**, et chaque test est ajouté comme une ligne dans une **Google Sheet** : vous gardez ainsi un registre de toutes les passations. Le quota est de 100 destinataires par jour avec un compte Gmail gratuit, 1 500 avec Google Workspace.

1. Créez une Google Sheet (par exemple « Résultats test néerlandais »).
2. **Extensions → Apps Script**. Remplacez le code par le contenu de `outils/apps-script.gs` et ajustez les réglages en haut du fichier.
3. Choisissez la fonction **`testerConfiguration`** → **Exécuter** → acceptez les autorisations. Vous recevez un e-mail de test et l'onglet « Résultats » est créé.
4. **Déployer → Nouveau déploiement → Application Web**. *Exécuter en tant que* : **moi** ; *Qui a accès* : **Tout le monde**. Copiez l'URL (`https://script.google.com/macros/s/…/exec`).
5. Collez cette URL dans `config.js` → `appsScriptUrl` (et laissez les champs EmailJS vides).

Après une modification du script, faites **Déployer → Gérer les déploiements → Modifier → Nouvelle version** : l'URL reste la même.

Le script refuse plus de 3 envois par heure pour une même adresse d'étudiant, envoie la copie « professeur » seulement vers les domaines autorisés, et neutralise les formules dans la feuille.

### Si l'envoi échoue

L'étudiant voit le message d'erreur et trois solutions : **Réessayer**, **Télécharger le rapport** (fichier HTML sans le corrigé) et **Envoyer via ma messagerie** (e-mail pré-rempli vers le professeur, l'étudiant en copie).

---

## 5. Le document sonore (Luistoets)

L'application choisit automatiquement :

1. **le fichier MP3**, s'il existe : `audio/a2-luistoets.mp3` et `audio/b1-luistoets.mp3` ;
2. **sinon, la voix néerlandaise du navigateur**, qui lit la transcription de `contenu.js` avec une voix différente pour chaque personnage quand l'appareil en propose plusieurs.

La synthèse du navigateur dépend de l'appareil : très bonne dans Edge, Chrome et Safari, parfois absente sous Firefox ou Linux. Dans ce cas, l'écran des consignes prévient l'étudiant avant le début du test. **Pour une épreuve équitable, fournissez des MP3** : tous les étudiants entendront alors exactement le même enregistrement.

Trois façons d'obtenir les MP3 :

- **L'enregistrer vous-même avec un collègue**. C'est la solution la plus authentique : lisez les transcriptions de `contenu.js`, par exemple avec Audacity, et exportez en MP3.
- **Les générer avec des voix flamandes neuronales** grâce à `outils/generer_audio.py`. Il faut Python et ffmpeg ; le script utilise de façon non officielle le service de lecture à voix haute de Microsoft Edge.
  ```bash
  pip install edge-tts
  cd docs/outils
  python generer_audio.py            # crée ../audio/a2-luistoets.mp3 et ../audio/b1-luistoets.mp3
  python generer_audio.py --verifier # affiche seulement ce qui sera lu
  ```
- Utiliser un autre outil de synthèse vocale, puis enregistrer le résultat sous les noms ci-dessus.

Déposez les fichiers dans `docs/audio/` puis poussez-les sur GitHub. Le lecteur ne permet pas d'avancer ni de reculer dans l'enregistrement : il propose seulement lecture et pause, et chaque écoute commencée est comptée.

---

## 6. Modifier les textes et les questions (`contenu.js`)

- Chaque question a **exactement 4 propositions** et **la première est toujours la bonne réponse**. L'ordre affiché est mélangé pour chaque étudiant.
- `niveau: "A1" | "A2" | "B1"` : étiquette de la question, utilisée seulement dans le rapport du professeur.
- Dans les textes, `\n` force un retour à la ligne.
- Transcription audio : une réplique par ligne, `["L", "texte"]`. La clé (`L`, `M`…) renvoie à `personnages`, où `voix: "F"` ou `"M"` choisit la voix de synthèse.
- Production écrite : `etapes` (néerlandais + traduction française), `motsMin`, `motsMax`.
- Si vous modifiez la transcription d'un document sonore, régénérez ou réenregistrez le MP3 correspondant.

Après une modification, ouvrez le test en mode démonstration pour vérifier l'affichage.

---

## 7. Notation et attestation

- Lecture et audition : 1 point par bonne réponse, **sur 10**. Une question sans réponse vaut 0.
- Seuil : **5/10 dans chacune** des deux épreuves (réglage `seuilReussite`).
- Si les deux seuils sont atteints, l'**attestation de réussite** est affichée et peut être téléchargée en PDF (A4) ou imprimée. Elle est aussi incluse dans l'e-mail de l'étudiant, et jointe en PDF avec l'option B. Elle porte un **code de vérification** (par ex. `A2-7F3K-9QXD`) qui figure aussi dans votre e-mail.
- La **production écrite** n'est pas notée automatiquement. L'attestation indique qu'elle est « transmise au professeur pour évaluation » et précise que la décision de dispense relève du Conseil des études.

---

## 8. Mode démonstration pour le professeur

Ajoutez `?demo` à l'adresse : `https://ajouniaux.github.io/talenleren/?demo`

- Un bouton **« Démo : remplir »** répond à votre place (environ 75 % de bonnes réponses) et rédige une production modèle.
- Sur la page de résultats, vous pouvez prévisualiser l'**e-mail du professeur** (avec le corrigé) et celui de l'étudiant.
- Pour recommencer, cliquez sur **Nouveau test** en bas de la page de résultats.

---

## 9. Limites à connaître (intégrité de l'épreuve)

- **Les réponses sont dans le code source.** Un site statique ne peut pas les cacher : un étudiant qui sait ouvrir les outils de développement du navigateur peut les trouver, et le score est calculé dans le navigateur. Pour une épreuve à enjeu, faites passer le test **sous surveillance** (en classe ou en visioconférence, caméra allumée) ou considérez-le comme un test de positionnement suivi d'un entretien.
- Ce qui limite les abus : l'engagement sur l'honneur ; le copier-coller bloqué ; le nombre de sorties de la page et leur durée, signalés au professeur ; le n° de tentative ; l'ordre des propositions propre à chaque étudiant ; l'adresse du professeur limitée au domaine de l'école ; le détail des réponses dans votre e-mail ; enfin la production écrite, que vous évaluez vous-même.
- **Clé EmailJS** : elle est publique par nature (visible dans `config.js`). Limitez son usage à votre domaine et surveillez le quota.
- **Données personnelles (RGPD)** : nom, e-mail et réponses sont stockés temporairement dans le navigateur de l'étudiant (pour reprendre après une fermeture accidentelle), puis transmis par e-mail. Sur un ordinateur partagé, cliquez sur **Nouveau test** après chaque étudiant pour effacer ses données.

---

## 10. Avant la première utilisation

- [ ] Relire les textes, questions et transcriptions de `contenu.js` (néerlandais rédigé pour ce test, sans second relecteur).
- [ ] Choisir et configurer l'envoi des e-mails (§ 4), puis faire un test complet avec votre propre adresse.
- [ ] Ajouter les MP3 dans `docs/audio/` (§ 5) et les écouter.
- [ ] Vérifier la durée (`dureeMinutes`) et le nombre d'écoutes (`ecoutesMax`).
- [ ] Passer le test une fois sur téléphone et une fois sur ordinateur.
