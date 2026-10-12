/* =====================================================================
   CONFIGURATION DU TEST — c'est le seul fichier à adapter en général.
   Après modification : enregistrez, poussez sur GitHub, attendez ~1 min.
   ===================================================================== */
window.CONFIG = {
  /* --- Identité (attestation, e-mails, en-tête) ---------------------- */
  etablissement: "IRAM — Enseignement de promotion sociale",
  intitule: "Valorisation des acquis — Néerlandais",
  // Nom imprimé sous « Le professeur » sur l'attestation (laisser "" pour une ligne vide).
  nomProfesseur: "",

  /* --- Professeur ----------------------------------------------------- */
  emailProfesseurDefaut: "jouniauxa@iram.be",
  // L'étudiant peut modifier l'adresse du professeur, mais seulement vers ces domaines.
  // Empêche un étudiant de détourner la copie « professeur » vers sa propre adresse.
  // Mettre [] pour accepter n'importe quelle adresse.
  domainesProfesseurAutorises: ["iram.be"],

  /* --- Notation ------------------------------------------------------- */
  seuilReussite: 5,              // minimum par QCM (sur 10) : 5 = 50 %
  afficherCorrection: false,     // true = l'étudiant voit le détail juste/faux à la fin

  /* --- Déroulement ---------------------------------------------------- */
  dureeMinutes: { A2: 60, B1: 75 },  // chronomètre global ; null pour le désactiver
  ecoutesMax: 3,                     // écoutes autorisées pour la Luistoets ; 0 = illimité
  melangerPropositions: true,        // ordre des propositions différent pour chaque étudiant
  bloquerCollage: true,              // interdit le copier-coller dans la production écrite
  vitesseSynthese: { A2: 0.9, B1: 1.0 }, // vitesse de la voix de synthèse (si pas de MP3)

  /* --- Envoi des résultats par e-mail ---------------------------------
     L'application choisit automatiquement le premier service configuré :
       1. EmailJS (3 identifiants ci-dessous)
       2. Google Apps Script (URL de l'application web)
       3. sinon : MODE DÉMONSTRATION (aucun e-mail réel, téléchargement du rapport)
     Voir docs/README.md, section « Envoi des e-mails ». */
  envoi: {
    emailjs: {
      publicKey: "",   // ex. "AbCdEfGh123456789"  (Account > General > Public Key)
      serviceId: "",   // ex. "service_x1y2z3"     (Email Services)
      templateId: "",  // ex. "template_a1b2c3"    (Email Templates)
    },
    appsScriptUrl: "", // ex. "https://script.google.com/macros/s/AKfy.../exec"
  },
};
