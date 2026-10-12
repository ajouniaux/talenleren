/**
 * Test de néerlandais — réception des résultats (option B : Google Apps Script)
 *
 * Ce script, lié à une Google Sheet :
 *   • envoie l'e-mail détaillé au professeur et l'e-mail de résultats à l'étudiant,
 *   • joint l'attestation en PDF quand les seuils sont atteints,
 *   • ajoute une ligne par test dans l'onglet « Résultats » (registre).
 *
 * Installation : voir docs/README.md, section « Option B — Google Apps Script ».
 * En bref : Google Sheets > Extensions > Apps Script > coller ce fichier >
 * exécuter « testerConfiguration » (autorisations) > Déployer > Application Web
 * (Exécuter en tant que : moi ; Accès : tout le monde) > copier l'URL dans config.js.
 */

/* ===== Réglages ===== */
const PROF_EMAIL_DEFAUT = 'jouniauxa@iram.be';
const DOMAINES_PROF_AUTORISES = ['iram.be']; // copie « professeur » acceptée seulement vers ces domaines
const MAX_ENVOIS_PAR_HEURE = 3;              // par adresse d'étudiant (limite les abus)
const NOM_EXPEDITEUR = 'Test de néerlandais';
const NOM_FEUILLE = 'Résultats';
const TAILLE_MAX = 300000;                   // caractères acceptés par requête

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) throw new Error('Requête vide.');
    if (e.postData.contents.length > TAILLE_MAX) throw new Error('Données trop volumineuses.');
    const d = JSON.parse(e.postData.contents);
    verifier_(d);
    limiter_(d.etudiant.email);
    const prof = adresseProf_(d.etudiant.emailProf);

    const pieces = [];
    if (d.resultats.reussite && d.htmlAttestation) {
      const page = '<html><head><meta charset="utf-8"></head><body style="margin:0;padding:24px">' + d.htmlAttestation + '</body></html>';
      pieces.push(Utilities.newBlob(page, MimeType.HTML, 'attestation.html').getAs(MimeType.PDF).setName(nomFichier_(d.nomFichierAttestation)));
    }

    MailApp.sendEmail({ to: prof, subject: texte_(d.sujetProf, 200), htmlBody: d.htmlProf, replyTo: d.etudiant.email, name: NOM_EXPEDITEUR, attachments: pieces });
    MailApp.sendEmail({ to: d.etudiant.email, subject: texte_(d.sujetEtudiant, 200), htmlBody: d.htmlEtudiant, replyTo: prof, name: NOM_EXPEDITEUR, attachments: pieces });
    archiver_(d, prof);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, erreur: String((err && err.message) || err) });
  }
}

/* Une visite de l'URL dans un navigateur affiche simplement l'état du service. */
function doGet() {
  return ContentService.createTextOutput('Service de réception du test de néerlandais : actif. Quota d’e-mails restant aujourd’hui : ' + MailApp.getRemainingDailyQuota());
}

/* À exécuter une fois depuis l'éditeur : accorde les autorisations et envoie un e-mail de test. */
function testerConfiguration() {
  MailApp.sendEmail(PROF_EMAIL_DEFAUT, 'Test de néerlandais — configuration réussie', 'Le script de réception des résultats fonctionne. Quota restant aujourd’hui : ' + MailApp.getRemainingDailyQuota());
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (ss) feuille_(ss);
  Logger.log('E-mail de test envoyé à ' + PROF_EMAIL_DEFAUT);
}

/* ===== Fonctions internes ===== */
function verifier_(d) {
  if (!d || !d.etudiant || !estEmail_(d.etudiant.email)) throw new Error('Adresse e-mail de l’étudiant invalide.');
  if (!d.resultats || typeof d.htmlProf !== 'string' || typeof d.htmlEtudiant !== 'string') throw new Error('Données incomplètes.');
  if (!d.etudiant.nom || !d.etudiant.prenom) throw new Error('Nom ou prénom manquant.');
}

function estEmail_(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s || '').trim());
}

function adresseProf_(s) {
  const a = String(s || '').trim().toLowerCase();
  const autorise = DOMAINES_PROF_AUTORISES.length === 0 || DOMAINES_PROF_AUTORISES.some(function (dom) { return a.endsWith('@' + dom); });
  return estEmail_(a) && autorise ? a : PROF_EMAIL_DEFAUT;
}

function limiter_(email) {
  const cache = CacheService.getScriptCache();
  const cle = 'envois_' + Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(email).toLowerCase()));
  const n = Number(cache.get(cle) || 0);
  if (n >= MAX_ENVOIS_PAR_HEURE) throw new Error('Trop d’envois pour cette adresse. Réessayez dans une heure ou contactez le professeur.');
  cache.put(cle, String(n + 1), 3600);
}

function nomFichier_(nom) {
  const n = String(nom || 'Attestation.pdf').replace(/[^A-Za-z0-9._-]/g, '_');
  return /\.pdf$/i.test(n) ? n : n + '.pdf';
}

function texte_(s, max) {
  return String(s || '').replace(/[\r\n]+/g, ' ').slice(0, max);
}

/* Empêche qu'un texte commençant par « = » soit interprété comme une formule. */
function cellule_(v) {
  const s = String(v == null ? '' : v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function feuille_(ss) {
  let f = ss.getSheetByName(NOM_FEUILLE);
  if (!f) {
    f = ss.insertSheet(NOM_FEUILLE);
    f.appendRow(['Reçu le', 'Date du test', 'Nom', 'Prénom', 'E-mail', 'Niveau', 'Lecture', 'Audition', 'Seuils atteints',
      'Mots', 'Durée (min)', 'Fin auto', 'Sorties de page', 'Collages bloqués', 'Écoutes', 'Tentative', 'Code', 'Professeur', 'Production écrite']);
    f.setFrozenRows(1);
    f.getRange(1, 1, 1, 19).setFontWeight('bold');
  }
  return f;
}

function archiver_(d, prof) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return; // script non lié à une feuille : pas de registre
  const r = d.resultats || {}, i = d.integrite || {};
  feuille_(ss).appendRow([
    new Date(), cellule_(r.date), cellule_(d.etudiant.nom), cellule_(d.etudiant.prenom), cellule_(d.etudiant.email),
    cellule_(d.niveau), cellule_(r.lecture), cellule_(r.ecoute), r.reussite ? 'Oui' : 'Non', Number(r.mots) || 0,
    Number(r.dureeMinutes) || 0, r.finAuto ? 'Oui' : 'Non', Number(i.sortiesOnglet) || 0, Number(i.collagesBloques) || 0,
    Number(d.ecoutes) || 0, Number(d.tentative) || 0, cellule_(r.code), cellule_(prof), cellule_(d.production),
  ]);
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
