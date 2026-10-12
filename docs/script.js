/* =====================================================================
   Test de néerlandais — Valorisation des acquis (A2 / B1)
   Application monopage en JavaScript natif (aucune compilation).
   Le contenu des épreuves est dans contenu.js, les réglages dans config.js.
   ===================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     0. Réglages, constantes
     ------------------------------------------------------------------ */
  const CFG = Object.assign({
    etablissement: 'Enseignement de promotion sociale',
    intitule: 'Valorisation des acquis — Néerlandais',
    nomProfesseur: '',
    emailProfesseurDefaut: '',
    domainesProfesseurAutorises: [],
    seuilReussite: 5,
    afficherCorrection: false,
    dureeMinutes: null,
    ecoutesMax: 3,
    melangerPropositions: true,
    bloquerCollage: true,
    vitesseSynthese: {},
    envoi: {},
  }, window.CONFIG || {});
  const CONTENU = window.CONTENU || {};

  const CLE_ETAT = 'vaa-nl-etat-v1';
  const CLE_TENTATIVES = 'vaa-nl-tentatives-v1';
  const LIB = {
    jspdf: 'https://cdn.jsdelivr.net/npm/jspdf@4.2.1/dist/jspdf.umd.min.js',
    emailjs: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4.4.1/dist/email.min.js',
  };
  const DEMO = /[?&]demo\b/.test(window.location.search);

  const ETAPES_TEST = ['lecture', 'ecoute', 'ecriture', 'verification'];
  const PROGRESSION = [
    { label: 'Identification', etapes: ['accueil', 'consignes'] },
    { label: 'Lecture', etapes: ['lecture'] },
    { label: 'Audition', etapes: ['ecoute'] },
    { label: 'Écriture', etapes: ['ecriture', 'verification'] },
    { label: 'Résultats', etapes: ['resultats'] },
  ];
  const SECTIONS = {
    lecture: { num: 1, nl: 'Leesvaardigheid', fr: 'Compréhension à la lecture' },
    ecoute: { num: 2, nl: 'Luistervaardigheid', fr: "Compréhension à l'audition" },
    ecriture: { num: 3, nl: 'Schrijfvaardigheid', fr: 'Production écrite' },
  };

  /* Classes Tailwind réutilisées */
  const C = {
    carte: 'rounded-2xl border border-slate-200 bg-white shadow-carte',
    btn: 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    primaire: 'bg-marine-900 text-white shadow-sm hover:bg-marine-800 focus-visible:ring-oranje-400',
    accent: 'bg-oranje-500 text-white shadow-sm hover:bg-oranje-600 focus-visible:ring-oranje-400',
    secondaire: 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-marine-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-400',
    champ: 'mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-[0.95rem] text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-marine-500 focus:outline-none focus:ring-2 focus:ring-marine-200',
    label: 'block text-sm font-medium text-slate-700',
    surtitre: 'text-xs font-bold uppercase tracking-[0.14em] text-oranje-600',
  };
  const btn = (style, extra) => `${C.btn} ${C[style] || C.secondaire} ${extra || ''}`;

  /* Icônes (traits 24 × 24) */
  const ICONES = {
    livre: '<path d="M12 6.5C10.5 5.2 8.3 4.5 6 4.5c-1 0-2 .1-3 .4v13.6c1-.3 2-.4 3-.4 2.3 0 4.5.7 6 2 1.5-1.3 3.7-2 6-2 1 0 2 .1 3 .4V4.9c-1-.3-2-.4-3-.4-2.3 0-4.5.7-6 2zm0 0V20"/>',
    casque: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    stylo: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    flecheD: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    flecheG: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
    alerte: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
    telecharger: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    imprimer: '<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>',
    email: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="m22 6-10 7L2 6"/>',
    play: '<path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" fill="currentColor" stroke="none"/>',
    pause: '<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>',
    son: '<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
    bouclier: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    horloge: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    medaille: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.4 7 22l5-3 5 3-1.2-8.6"/>',
    fichier: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    disque: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
    recharger: '<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5"/>',
    oeil: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    note: '<path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5z"/><path d="M15 3v6h6M8 13h8M8 17h5"/>',
    liste: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2"/>',
  };
  function ico(nom, cls) {
    return `<svg class="${cls || 'h-5 w-5'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONES[nom] || ''}</svg>`;
  }

  /* ------------------------------------------------------------------
     1. Utilitaires
     ------------------------------------------------------------------ */
  const $ = (sel, racine) => (racine || document).querySelector(sel);
  const $$ = (sel, racine) => Array.from((racine || document).querySelectorAll(sel));
  const ENTITES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ENTITES[c]);
  const escNl = (s) => esc(s).replace(/\n/g, '<br>');

  function compterMots(texte) {
    const m = String(texte || '').match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu);
    return m ? m.length : 0;
  }
  function formatDuree(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    const mm = h ? `${h}:${String(m).padStart(2, '0')}` : String(m).padStart(2, '0');
    return `${mm}:${String(sec).padStart(2, '0')}`;
  }
  const fmtDateHeure = (ts) => new Date(ts).toLocaleString('fr-BE', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const fmtDateLongue = (ts) => new Date(ts).toLocaleDateString('fr-BE', { day: 'numeric', month: 'long', year: 'numeric' });
  const fmtDateCourte = (ts) => new Date(ts).toLocaleDateString('fr-BE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const estEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s || '').trim());
  const sansAccents = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '');

  const stockage = {
    lire(cle) { try { const v = window.localStorage.getItem(cle); return v ? JSON.parse(v) : null; } catch (e) { return null; } },
    ecrire(cle, val) { try { window.localStorage.setItem(cle, JSON.stringify(val)); return true; } catch (e) { return false; } },
    effacer(cle) { try { window.localStorage.removeItem(cle); } catch (e) { /* stockage indisponible */ } },
  };

  /* Générateur pseudo-aléatoire reproductible (même ordre après rechargement) */
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function melanger(tab, rnd) {
    const a = tab.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  /* Empreinte non cryptographique (cyrb53) pour le code de vérification */
  function empreinte(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }

  const scriptsCharges = {};
  function chargerScript(url) {
    if (!scriptsCharges[url]) {
      scriptsCharges[url] = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = url; s.async = true; s.crossOrigin = 'anonymous';
        s.onload = () => resolve();
        s.onerror = () => { delete scriptsCharges[url]; reject(new Error('Chargement impossible : ' + url)); };
        document.head.appendChild(s);
      });
    }
    return scriptsCharges[url];
  }

  function telechargerFichier(nom, contenu, type) {
    const blob = new Blob([contenu], { type: type || 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = nom; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1500);
  }

  /* ------------------------------------------------------------------
     2. État (sauvegardé dans le navigateur à chaque action)
     ------------------------------------------------------------------ */
  function etatInitial() {
    return {
      version: 1,
      etape: 'accueil',
      etudiant: { prenom: '', nom: '', email: '', emailProf: CFG.emailProfesseurDefaut || '', niveau: '' },
      engagement: false,
      graine: Math.floor(Math.random() * 2147483647),
      ordres: null,
      reponses: { lecture: [], ecoute: [] },
      production: '',
      etapesCochees: [],
      ecoutes: 0,
      modeAudio: '',
      debut: null,
      fin: null,
      finAuto: false,
      integrite: { sortiesOnglet: 0, tempsHorsOngletMs: 0, collagesBloques: 0 },
      tentative: 0,
      resultats: null,
      envoi: { statut: 'attente', mode: '', prof: null, etudiant: null, erreur: '', date: null },
      vueLecture: 'texte',
    };
  }
  let etat = etatInitial();
  const sauver = () => stockage.ecrire(CLE_ETAT, etat);
  const D = () => CONTENU[etat.etudiant.niveau];
  const enTest = () => ETAPES_TEST.includes(etat.etape) && !!etat.debut && !etat.fin;
  const nomComplet = () => `${etat.etudiant.prenom} ${etat.etudiant.nom.toUpperCase()}`;
  const nbRepondues = (sec) => D()[sec].questions.filter((q, i) => etat.reponses[sec][i] != null).length;

  /* ------------------------------------------------------------------
     3. Notifications et fenêtres modales
     ------------------------------------------------------------------ */
  const STYLES_TOAST = {
    info: 'bg-marine-900 text-white ring-marine-950',
    succes: 'bg-emerald-600 text-white ring-emerald-700',
    alerte: 'bg-amber-50 text-amber-900 ring-amber-300',
    erreur: 'bg-red-600 text-white ring-red-700',
  };
  function toast(message, type, duree) {
    const zone = $('#toasts');
    if (!zone) return;
    $$('[data-message]', zone).forEach((t) => { if (t.dataset.message === message) t.remove(); });
    while (zone.children.length >= 2) zone.firstElementChild.remove();
    const el = document.createElement('div');
    el.dataset.message = message;
    el.className = `pointer-events-auto flex max-w-md items-start gap-2 rounded-xl px-4 py-3 text-sm font-medium shadow-lg ring-1 apparition-toast ${STYLES_TOAST[type] || STYLES_TOAST.info}`;
    el.setAttribute('role', type === 'erreur' ? 'alert' : 'status');
    const icone = type === 'succes' ? 'check' : type === 'info' ? 'info' : 'alerte';
    el.innerHTML = `${ico(icone, 'mt-0.5 h-4 w-4 shrink-0')}<span>${esc(message)}</span>`;
    zone.appendChild(el);
    setTimeout(() => { el.classList.add('disparition'); setTimeout(() => el.remove(), 300); }, duree || 3800);
  }

  let fermerModaleCourante = null;
  function modale(opts) {
    const o = Object.assign({ titre: '', html: '', boutons: [{ label: 'Fermer', style: 'secondaire', valeur: null }], fermable: true, large: false }, opts);
    if (fermerModaleCourante) fermerModaleCourante(null);
    return new Promise((resolve) => {
      const racine = $('#modale-racine');
      const precedent = document.activeElement;
      racine.innerHTML = `
        <div class="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 backdrop-blur-sm sm:items-center sm:p-4 apparition-fond" data-fond>
          <div role="dialog" aria-modal="true" aria-labelledby="modale-titre" class="apparition-modale max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl sm:rounded-2xl sm:p-7 ${o.large ? 'sm:max-w-4xl' : 'sm:max-w-lg'}">
            <h2 id="modale-titre" class="text-lg font-semibold text-marine-900">${esc(o.titre)}</h2>
            <div class="mt-3 text-[0.95rem] leading-relaxed text-slate-600">${o.html}</div>
            <div class="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              ${o.boutons.map((b, i) => `<button type="button" data-i="${i}" class="${btn(b.style)}">${esc(b.label)}</button>`).join('')}
            </div>
          </div>
        </div>`;
      const dialogue = $('[role=dialog]', racine);
      const fermer = (valeur) => {
        document.removeEventListener('keydown', clavier, true);
        fermerModaleCourante = null;
        racine.innerHTML = '';
        if (precedent && precedent.focus && document.contains(precedent)) precedent.focus();
        resolve(valeur);
      };
      fermerModaleCourante = fermer;
      const clavier = (e) => {
        if (e.key === 'Escape' && o.fermable) { e.preventDefault(); fermer(null); }
        if (e.key === 'Tab') {
          const f = $$('button, [href], input, textarea, select, iframe, [tabindex]:not([tabindex="-1"])', dialogue).filter((x) => !x.disabled);
          if (!f.length) return;
          if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
          else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
        }
      };
      document.addEventListener('keydown', clavier, true);
      $$('[data-i]', racine).forEach((b) => b.addEventListener('click', () => fermer(o.boutons[Number(b.dataset.i)].valeur)));
      if (o.fermable) $('[data-fond]', racine).addEventListener('click', (e) => { if (e.target.hasAttribute('data-fond')) fermer(null); });
      const boutons = $$('[data-i]', racine);
      (boutons[boutons.length - 1] || dialogue).focus();
    });
  }
  const fermerModale = () => { if (fermerModaleCourante) fermerModaleCourante(null); };

  /* ------------------------------------------------------------------
     4. En-tête : niveau, chronomètre, progression
     ------------------------------------------------------------------ */
  function majEntete() {
    const badge = $('#badge-niveau');
    if (etat.etudiant.niveau && etat.etape !== 'accueil') {
      badge.textContent = `Niveau ${etat.etudiant.niveau}`;
      badge.classList.remove('hidden');
    } else badge.classList.add('hidden');
    $('#titre-app').textContent = CFG.intitule;
    $('#pied-etablissement').textContent = CFG.etablissement;

    const idx = PROGRESSION.findIndex((p) => p.etapes.includes(etat.etape));
    $('#progression').innerHTML = `<ol class="flex items-center">${PROGRESSION.map((p, i) => {
      const statut = i < idx ? 'fait' : i === idx ? 'actuel' : 'avenir';
      const rond = statut === 'fait' ? 'bg-marine-900 text-white' : statut === 'actuel' ? 'bg-oranje-500 text-white ring-4 ring-oranje-100' : 'bg-slate-200 text-slate-500';
      const texte = statut === 'avenir' ? 'text-slate-400' : 'text-marine-900';
      return `<li class="flex items-center ${i < PROGRESSION.length - 1 ? 'flex-1' : ''}" ${statut === 'actuel' ? 'aria-current="step"' : ''}>
        <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${rond}">${statut === 'fait' ? ico('check', 'h-3.5 w-3.5') : i + 1}</span>
        <span class="ml-2 whitespace-nowrap text-xs font-semibold ${texte} ${statut === 'actuel' ? '' : 'hidden md:inline'}">${p.label}</span>
        ${i < PROGRESSION.length - 1 ? `<span class="mx-2 h-0.5 min-w-[0.75rem] flex-1 rounded-full ${i < idx ? 'bg-marine-900' : 'bg-slate-200'}"></span>` : ''}
      </li>`;
    }).join('')}</ol>`;
  }

  let minuteur = null;
  const alertes = { cinq: false, une: false };
  const dureeMs = () => {
    const m = CFG.dureeMinutes && CFG.dureeMinutes[etat.etudiant.niveau];
    return m ? m * 60000 : null;
  };
  const tempsRestant = () => (dureeMs() && etat.debut ? dureeMs() - (Date.now() - etat.debut) : null);

  function demarrerMinuteur() {
    clearInterval(minuteur);
    majChrono();
    minuteur = setInterval(majChrono, 1000);
  }
  function majChrono() {
    const el = $('#chrono'), txt = $('#chrono-texte');
    if (!enTest()) { el.classList.add('hidden'); el.classList.remove('flex'); return; }
    el.classList.remove('hidden'); el.classList.add('flex');
    const reste = tempsRestant();
    el.classList.remove('bg-slate-100', 'text-slate-700', 'bg-oranje-100', 'text-oranje-800', 'bg-red-100', 'text-red-700', 'animate-pulse');
    if (reste === null) {
      txt.textContent = formatDuree(Date.now() - etat.debut);
      el.setAttribute('aria-label', 'Temps écoulé depuis le début');
      el.classList.add('bg-slate-100', 'text-slate-700');
      return;
    }
    txt.textContent = formatDuree(reste);
    el.setAttribute('aria-label', 'Temps restant');
    if (reste <= 60000) el.classList.add('bg-red-100', 'text-red-700', 'animate-pulse');
    else if (reste <= 5 * 60000) el.classList.add('bg-oranje-100', 'text-oranje-800');
    else el.classList.add('bg-slate-100', 'text-slate-700');
    if (reste <= 5 * 60000 && reste > 60000 && !alertes.cinq) { alertes.cinq = true; toast('Plus que 5 minutes ! Pensez à terminer votre production écrite.', 'alerte', 6000); }
    if (reste <= 60000 && reste > 0 && !alertes.une) { alertes.une = true; toast('Dernière minute : le test sera clôturé automatiquement.', 'erreur', 6000); }
    if (reste <= 0) terminerTest(true);
  }

  /* ------------------------------------------------------------------
     5. Navigation et rendu
     ------------------------------------------------------------------ */
  function allerA(etape) {
    Lecteur.pause();
    etat.etape = etape;
    sauver();
    render();
    window.scrollTo(0, 0);
    const h1 = $('#app h1');
    if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
  }

  const VUES = {};
  function render() {
    if (etat.etape !== 'accueil' && !D()) etat = etatInitial();
    majEntete();
    const vue = VUES[etat.etape] || VUES.accueil;
    const app = $('#app');
    app.innerHTML = vue.html();
    if (vue.lier) vue.lier(app);
    majChrono();
  }

  function enTeteSection(cle, sousTitre) {
    const s = SECTIONS[cle], d = D()[cle];
    return `
      <div class="mb-6">
        <p class="${C.surtitre}">Partie ${s.num} sur 3 · ${esc(s.fr)}</p>
        <h1 class="mt-2 font-serif text-[1.75rem] font-bold leading-tight text-marine-900 sm:text-3xl"><span lang="nl">${esc(s.nl)}</span><span class="font-sans text-lg font-medium text-slate-400"> — <span lang="nl">${esc(d.titre)}</span></span></h1>
        ${sousTitre || ''}
        <div class="mt-4 flex gap-3 rounded-xl border border-marine-100 bg-marine-50/70 p-4">
          ${ico('info', 'mt-0.5 h-5 w-5 shrink-0 text-marine-600')}
          <div>
            <p class="font-medium text-marine-900" lang="nl">${esc(d.consigne)}</p>
            <p class="mt-1 text-sm text-marine-700/80">${esc(d.consigneFr)}</p>
          </div>
        </div>
      </div>`;
  }

  function barreNavigation(o) {
    return `
      <div class="mt-10 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div class="sm:min-w-[12rem]">${o.precedent ? `<button type="button" data-aller="${o.precedent}" class="${btn('secondaire', 'w-full sm:w-auto')}">${ico('flecheG', 'h-4 w-4')}${esc(o.labelPrecedent)}</button>` : ''}</div>
        ${o.info ? `<p class="text-center text-sm text-slate-500" data-info-nav>${o.info}</p>` : ''}
        <div class="sm:flex sm:min-w-[12rem] sm:justify-end">${o.suivant ? `<button type="button" data-aller="${o.suivant}" class="${btn('primaire', 'w-full sm:w-auto')}">${esc(o.labelSuivant)}${ico('flecheD', 'h-4 w-4')}</button>` : ''}</div>
      </div>`;
  }

  /* --- Documents (e-mail, article, note) --- */
  function htmlDocument(doc) {
    if (doc.type === 'article') {
      return `
        <article class="rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-carte sm:px-7" lang="nl">
          ${doc.source ? `<p class="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-oranje-600">${esc(doc.source)}</p>` : ''}
          <h2 class="mt-2 font-serif text-[1.45rem] font-bold leading-snug text-marine-900">${esc(doc.titre)}</h2>
          <div class="texte-document mt-4 space-y-4 font-serif text-[1.06rem] leading-relaxed text-slate-800">
            ${doc.paragraphes.map((p, i) => `<p class="${i === 0 ? 'font-semibold text-slate-900' : ''}">${escNl(p)}</p>`).join('')}
          </div>
        </article>`;
    }
    if (doc.type === 'note') {
      return `
        <aside class="note-postit rounded-lg bg-amber-100 p-5 shadow-md ring-1 ring-amber-200" lang="nl">
          <p class="flex items-center gap-2 font-semibold text-amber-900">${ico('note', 'h-5 w-5')}${esc(doc.titre)}</p>
          <ul class="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-snug text-amber-950">
            ${doc.lignes.map((l) => `<li>${esc(l)}</li>`).join('')}
          </ul>
        </aside>`;
    }
    return `
      <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-carte" lang="nl">
        <div class="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-2.5" aria-hidden="true">
          <span class="h-2.5 w-2.5 rounded-full bg-red-300"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-300"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-300"></span>
          <span class="ml-2 text-xs font-medium text-slate-500">${ico('email', 'inline h-3.5 w-3.5 -mt-0.5')} E-mail</span>
        </div>
        <dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 border-b border-slate-100 px-5 py-3 text-sm">
          ${Object.keys(doc.entete || {}).map((k) => `<dt class="font-semibold text-slate-500">${esc(k)}:</dt><dd class="min-w-0 break-words ${k === 'Onderwerp' ? 'font-semibold text-slate-900' : 'text-slate-700'}">${esc(doc.entete[k])}</dd>`).join('')}
        </dl>
        <div class="texte-document space-y-3.5 px-5 py-5 font-serif text-[1.06rem] leading-relaxed text-slate-800">
          ${doc.paragraphes.map((p) => `<p>${escNl(p)}</p>`).join('')}
        </div>
      </article>`;
  }

  /* --- Questions à choix multiples --- */
  function htmlQuestions(sec) {
    const qs = D()[sec].questions, ordres = etat.ordres[sec], rep = etat.reponses[sec];
    return `<ol class="space-y-4">${qs.map((q, i) => `
      <li id="q-${sec}-${i}" class="question ${C.carte} scroll-mt-40 p-4 sm:p-5 ${rep[i] != null ? 'est-repondue' : ''}">
        <fieldset>
          <legend class="flex gap-3 text-[0.98rem] font-semibold leading-snug text-slate-900">
            <span class="pastille-question flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold">${i + 1}</span>
            <span class="pt-0.5" lang="nl">${esc(q.question)}</span>
          </legend>
          <div class="mt-3 grid gap-2 sm:pl-10">
            ${ordres[i].map((o) => `
              <label class="option flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[0.95rem] leading-snug text-slate-700 transition hover:border-marine-300 hover:bg-marine-50/50 ${rep[i] === o ? 'est-choisie' : ''}">
                <input type="radio" class="mt-0.5 h-4 w-4 shrink-0" name="${sec}-${i}" value="${o}" data-sec="${sec}" data-q="${i}" ${rep[i] === o ? 'checked' : ''}>
                <span lang="nl">${esc(q.options[o])}</span>
              </label>`).join('')}
          </div>
        </fieldset>
      </li>`).join('')}</ol>`;
  }
  function htmlPastilles(sec) {
    const n = D()[sec].questions.length;
    return `<div class="flex flex-wrap gap-1.5" data-pastilles="${sec}">${Array.from({ length: n }, (_, i) => {
      const ok = etat.reponses[sec][i] != null;
      return `<button type="button" data-action="aller-question" data-cible="q-${sec}-${i}" class="h-8 w-8 rounded-lg text-xs font-bold transition ${ok ? 'bg-marine-900 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}" aria-label="Question ${i + 1}${ok ? ' (répondue)' : ' (sans réponse)'}">${i + 1}</button>`;
    }).join('')}</div>`;
  }
  function repondre(input) {
    const sec = input.dataset.sec, i = Number(input.dataset.q), v = Number(input.value);
    if (!enTest()) return;
    etat.reponses[sec][i] = v;
    sauver();
    const li = input.closest('.question');
    li.classList.add('est-repondue');
    $$('.option', li).forEach((l) => l.classList.toggle('est-choisie', $('input', l).checked));
    majCompteurs(sec);
  }
  function majCompteurs(sec) {
    const n = nbRepondues(sec), total = D()[sec].questions.length;
    $$('[data-compteur]').forEach((el) => { el.textContent = `${n}/${total}`; });
    const p = $(`[data-pastilles="${sec}"]`);
    if (p) p.outerHTML = htmlPastilles(sec);
    const info = $('[data-info-nav]');
    if (info) info.textContent = `${n}/${total} réponses`;
  }

  /* ------------------------------------------------------------------
     6. Écran 1 — Identification
     ------------------------------------------------------------------ */
  function champ(o) {
    return `
      <div class="${o.classe || ''}">
        <label for="${o.id}" class="${C.label}">${esc(o.label)}</label>
        <input id="${o.id}" name="${o.id}" type="${o.type || 'text'}" value="${esc(o.valeur)}" autocomplete="${o.autocomplete || 'off'}" ${o.placeholder ? `placeholder="${esc(o.placeholder)}"` : ''} class="${C.champ}" aria-describedby="err-${o.id}${o.aide ? ` aide-${o.id}` : ''}" ${o.extra || ''}>
        ${o.aide ? `<p id="aide-${o.id}" class="mt-1 text-xs text-slate-500">${o.aide}</p>` : ''}
        <p id="err-${o.id}" class="mt-1 hidden text-xs font-medium text-red-600"></p>
      </div>`;
  }

  VUES.accueil = {
    html() {
      const s = etat.etudiant;
      const niveaux = ['A2', 'B1'].filter((n) => CONTENU[n]);
      const duree = (n) => (CFG.dureeMinutes && CFG.dureeMinutes[n] ? `${CFG.dureeMinutes[n]} min` : 'sans limite de temps');
      return `
      <section class="grid gap-8 apparition lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div class="lg:pt-4">
          <p class="${C.surtitre}">Procédure de valorisation des acquis</p>
          <h1 class="mt-3 font-serif text-[2rem] font-bold leading-tight text-marine-900 sm:text-[2.6rem]">Évaluez vos acquis en néerlandais</h1>
          <p class="mt-4 max-w-xl text-base leading-relaxed text-slate-600">Ce test en ligne vérifie si vos compétences correspondent au niveau du cours visé (<strong>A2</strong> ou <strong>B1</strong> du Cadre européen commun de référence), y compris les bases des niveaux inférieurs. Il se déroule en trois parties&nbsp;:</p>
          <ul class="mt-6 space-y-3">
            ${[
              ['livre', 'Leesvaardigheid', 'Compréhension à la lecture', 'Un texte de la vie professionnelle et 10 questions à choix multiples.'],
              ['casque', 'Luistervaardigheid', "Compréhension à l'audition", `Un document sonore${CFG.ecoutesMax ? ` (${CFG.ecoutesMax} écoutes maximum)` : ''} et 10 questions à choix multiples.`],
              ['stylo', 'Schrijfvaardigheid', 'Production écrite', 'Une mise en situation professionnelle guidée étape par étape.'],
            ].map(([i, nl, fr, txt]) => `
              <li class="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-marine-50 text-marine-700">${ico(i, 'h-6 w-6')}</span>
                <span><span class="block font-semibold text-slate-900">${fr} <span class="font-normal text-slate-400">· <span lang="nl">${nl}</span></span></span><span class="mt-0.5 block text-sm text-slate-600">${txt}</span></span>
              </li>`).join('')}
          </ul>
          <div class="mt-6 flex gap-3 rounded-xl bg-marine-900 p-4 text-sm text-marine-50">
            ${ico('medaille', 'h-5 w-5 shrink-0 text-oranje-300')}
            <p>Seuil de réussite : <strong class="text-white">${CFG.seuilReussite}/10</strong> dans chaque épreuve de compréhension. Si les deux seuils sont atteints, une <strong class="text-white">attestation de réussite</strong> est générée. La production écrite est évaluée par votre professeur.</p>
          </div>
        </div>

        <form id="form-identification" class="${C.carte} p-5 sm:p-7" novalidate>
          <h2 class="text-lg font-semibold text-marine-900">Identification</h2>
          <p class="mt-1 text-sm text-slate-500">Tous les champs sont obligatoires.</p>
          <div class="mt-5 grid gap-4 sm:grid-cols-2">
            ${champ({ id: 'prenom', label: 'Prénom', valeur: s.prenom, autocomplete: 'given-name', extra: 'maxlength="60" required' })}
            ${champ({ id: 'nom', label: 'Nom', valeur: s.nom, autocomplete: 'family-name', extra: 'maxlength="60" required' })}
            ${champ({ id: 'email', label: 'Adresse e-mail personnelle', type: 'email', valeur: s.email, autocomplete: 'email', placeholder: 'prenom.nom@exemple.be', classe: 'sm:col-span-2', aide: 'Vous y recevrez vos résultats et, en cas de réussite, votre attestation.', extra: 'inputmode="email" maxlength="120" required' })}
            ${champ({ id: 'emailProf', label: 'Adresse e-mail du professeur', type: 'email', valeur: s.emailProf, classe: 'sm:col-span-2', aide: 'Laissez l’adresse proposée, sauf indication contraire de votre professeur.', extra: 'inputmode="email" maxlength="120" required' })}
          </div>
          <fieldset class="mt-6">
            <legend class="${C.label}">Niveau visé</legend>
            <div class="mt-2 grid gap-3 sm:grid-cols-2">
              ${niveaux.map((n) => `
                <label class="carte-niveau relative flex cursor-pointer flex-col rounded-xl border-2 border-slate-200 bg-white p-4 transition hover:border-marine-300 ${s.niveau === n ? 'est-choisi' : ''}">
                  <input type="radio" name="niveau" value="${n}" class="sr-only" ${s.niveau === n ? 'checked' : ''}>
                  <span class="flex items-center justify-between">
                    <span class="text-2xl font-extrabold tracking-tight text-marine-900">${n}</span>
                    <span class="coche-niveau flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-300 text-white">${ico('check', 'h-3.5 w-3.5')}</span>
                  </span>
                  <span class="mt-1 text-sm font-semibold text-slate-700">${esc(CONTENU[n].libelle)}</span>
                  <span class="mt-1 text-xs leading-snug text-slate-500">${esc(CONTENU[n].resume)}</span>
                  <span class="mt-2 inline-flex items-center gap-1 text-xs font-medium text-marine-700">${ico('horloge', 'h-3.5 w-3.5')} ${duree(n)}</span>
                </label>`).join('')}
            </div>
            <p id="err-niveau" class="mt-1 hidden text-xs font-medium text-red-600"></p>
          </fieldset>
          <button type="submit" class="${btn('primaire', 'mt-7 w-full')}">Continuer ${ico('flecheD', 'h-4 w-4')}</button>
          <p class="mt-4 flex gap-2 text-xs leading-relaxed text-slate-500">${ico('bouclier', 'h-4 w-4 shrink-0 text-slate-400')}<span>Vos données (nom, adresse e-mail, réponses) sont utilisées uniquement pour cette évaluation et transmises à votre professeur. Elles sont enregistrées temporairement dans ce navigateur pour éviter toute perte en cas de fermeture accidentelle.</span></p>
        </form>
      </section>`;
    },
    lier(app) {
      const form = $('#form-identification', app);
      $$('input[name=niveau]', form).forEach((r) => r.addEventListener('change', () => {
        $$('.carte-niveau', form).forEach((c) => c.classList.toggle('est-choisi', $('input', c).checked));
        afficherErreur('niveau', '');
      }));
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = (id) => String(form.elements[id].value || '').trim().replace(/\s+/g, ' ');
        const donnees = { prenom: val('prenom'), nom: val('nom'), email: val('email').toLowerCase(), emailProf: val('emailProf').toLowerCase() };
        const niveau = (form.querySelector('input[name=niveau]:checked') || {}).value || '';
        const erreurs = {};
        if (!donnees.prenom) erreurs.prenom = 'Indiquez votre prénom.';
        if (!donnees.nom) erreurs.nom = 'Indiquez votre nom.';
        if (!estEmail(donnees.email)) erreurs.email = 'Adresse e-mail invalide (exemple : prenom.nom@exemple.be).';
        if (!estEmail(donnees.emailProf)) erreurs.emailProf = 'Adresse e-mail du professeur invalide.';
        else if ((CFG.domainesProfesseurAutorises || []).length && !CFG.domainesProfesseurAutorises.some((d) => donnees.emailProf.endsWith('@' + String(d).toLowerCase()))) {
          erreurs.emailProf = `L’adresse du professeur doit se terminer par ${CFG.domainesProfesseurAutorises.map((d) => '@' + d).join(' ou ')}.`;
        }
        if (donnees.email && donnees.email === donnees.emailProf) erreurs.email = 'Indiquez votre adresse personnelle, pas celle du professeur.';
        if (!niveau) erreurs.niveau = 'Choisissez le niveau visé.';
        ['prenom', 'nom', 'email', 'emailProf', 'niveau'].forEach((k) => afficherErreur(k, erreurs[k] || ''));
        const premiere = Object.keys(erreurs)[0];
        if (premiere) {
          const cible = premiere === 'niveau' ? form.querySelector('input[name=niveau]') : form.elements[premiere];
          if (cible) cible.focus();
          return;
        }
        Object.assign(etat.etudiant, donnees, { niveau });
        allerA('consignes');
      });
    },
  };
  function afficherErreur(id, message) {
    const p = $(`#err-${id}`), input = $(`#${id}`);
    if (p) { p.textContent = message; p.classList.toggle('hidden', !message); }
    if (input) {
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
      input.classList.toggle('border-red-400', !!message);
    }
  }

  /* ------------------------------------------------------------------
     7. Écran 2 — Consignes
     ------------------------------------------------------------------ */
  VUES.consignes = {
    html() {
      const d = D(), s = etat.etudiant, dm = CFG.dureeMinutes && CFG.dureeMinutes[s.niveau];
      const parties = [
        ['livre', 'Lecture', `${d.lecture.questions.length} questions`, 'Lisez le texte, puis choisissez la bonne réponse.'],
        ['casque', 'Audition', `${d.ecoute.questions.length} questions`, CFG.ecoutesMax ? `Écoutez le document (${CFG.ecoutesMax} écoutes maximum).` : 'Écoutez le document autant de fois que nécessaire.'],
        ['stylo', 'Écriture', `${d.ecriture.motsMin}–${d.ecriture.motsMax} mots`, 'Rédigez un message professionnel en suivant les étapes.'],
      ];
      const regles = [
        ['horloge', dm ? `Vous disposez de <strong>${dm} minutes</strong> pour l’ensemble du test. Le chronomètre démarre quand vous cliquez sur « Commencer le test » et continue même si vous fermez la page. À la fin du temps, le test est clôturé automatiquement.` : 'Le test n’est pas limité dans le temps, mais la durée est communiquée au professeur.'],
        ['flecheD', 'Vous pouvez passer d’une partie à l’autre et modifier vos réponses jusqu’à la validation finale. Gardez au moins un tiers du temps pour la production écrite.'],
        ['disque', 'Vos réponses sont enregistrées automatiquement dans ce navigateur. En cas de problème, rouvrez la page sur le même appareil pour reprendre.'],
        ['bouclier', `Travaillez seul(e), sans dictionnaire, traducteur ni outil d’intelligence artificielle.${CFG.bloquerCollage ? ' Le copier-coller est désactivé dans la production écrite.' : ''} Les sorties de la page (changement d’onglet ou d’application) sont comptabilisées et communiquées au professeur.`],
        ['email', `À la fin, vos scores de compréhension s’affichent et vos résultats sont envoyés à <strong>${esc(s.email)}</strong> et à votre professeur.`],
      ];
      return `
      <section class="mx-auto max-w-4xl apparition">
        <p class="${C.surtitre}">Avant de commencer</p>
        <h1 class="mt-2 font-serif text-[1.9rem] font-bold leading-tight text-marine-900 sm:text-4xl">Bonjour ${esc(s.prenom)}, voici le déroulement du test</h1>
        <p class="mt-3 text-slate-600">Niveau visé : <strong class="text-marine-900">${s.niveau} — ${esc(d.libelle)}</strong></p>

        <div class="mt-7 grid gap-3 sm:grid-cols-3">
          ${parties.map(([i, t, n, txt], k) => `
            <div class="${C.carte} p-4">
              <div class="flex items-center gap-3">
                <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-oranje-50 text-oranje-600">${ico(i, 'h-5 w-5')}</span>
                <div><p class="text-xs font-semibold uppercase tracking-wide text-slate-400">Partie ${k + 1}</p><p class="font-semibold text-slate-900">${t}</p></div>
              </div>
              <p class="mt-3 text-sm font-semibold text-marine-800">${n}</p>
              <p class="mt-1 text-sm text-slate-600">${txt}</p>
            </div>`).join('')}
        </div>

        <div class="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div class="${C.carte} p-5 sm:p-6">
            <h2 class="font-semibold text-marine-900">Règles de l’épreuve</h2>
            <ul class="mt-4 space-y-3.5">
              ${regles.map(([i, txt]) => `<li class="flex gap-3 text-sm leading-relaxed text-slate-600">${ico(i, 'mt-0.5 h-5 w-5 shrink-0 text-marine-500')}<span>${txt}</span></li>`).join('')}
            </ul>
          </div>
          <div class="${C.carte} flex flex-col p-5 sm:p-6">
            <h2 class="flex items-center gap-2 font-semibold text-marine-900">${ico('son', 'h-5 w-5 text-oranje-500')} Testez votre son</h2>
            <p class="mt-2 text-sm text-slate-600">Mettez vos écouteurs ou réglez le volume, puis lancez le test sonore.</p>
            <button type="button" data-action="tester-son" class="${btn('secondaire', 'mt-4')}">${ico('play', 'h-4 w-4')} Lancer le test sonore</button>
            <p id="statut-son" class="mt-3 text-xs leading-relaxed text-slate-500" aria-live="polite">Vérification du document sonore…</p>
          </div>
        </div>

        <label class="mt-6 flex cursor-pointer gap-3 rounded-2xl border-2 border-dashed border-marine-200 bg-white p-4 sm:p-5">
          <input id="engagement" type="checkbox" class="mt-1 h-5 w-5 shrink-0 accent-marine-700" ${etat.engagement ? 'checked' : ''}>
          <span class="text-sm leading-relaxed text-slate-700"><strong class="text-marine-900">Engagement sur l’honneur.</strong> Je m’engage à réaliser ce test seul(e), sans dictionnaire, sans traducteur et sans aide extérieure (personne ou outil d’intelligence artificielle).</span>
        </label>

        <div class="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button type="button" data-aller="accueil" class="${btn('secondaire')}">${ico('flecheG', 'h-4 w-4')} Modifier mes informations</button>
          <button type="button" data-action="commencer" id="btn-commencer" class="${btn('accent', 'sm:px-7')}" ${etat.engagement ? '' : 'disabled'}>Commencer le test ${ico('flecheD', 'h-4 w-4')}</button>
        </div>
      </section>`;
    },
    lier(app) {
      $('#engagement', app).addEventListener('change', (e) => {
        etat.engagement = e.target.checked;
        sauver();
        $('#btn-commencer', app).disabled = !etat.engagement;
      });
      Lecteur.preparer().then(() => majStatutSon());
    },
  };
  function majStatutSon(message) {
    const el = $('#statut-son');
    if (!el) return;
    if (message) { el.innerHTML = message; return; }
    if (Lecteur.mode === 'fichier') el.innerHTML = `<span class="font-semibold text-emerald-700">Document sonore prêt.</span> Le test sonore émet un court signal.`;
    else if (Lecteur.mode === 'synthese' && Lecteur.voix && Lecteur.voix.F) el.innerHTML = `<span class="font-semibold text-emerald-700">Voix néerlandaise détectée</span> : ${esc(Lecteur.voix.F.name)}. Le document sonore sera lu par cette voix.`;
    else if (Lecteur.mode === 'synthese') el.innerHTML = `<span class="font-semibold text-red-700">Aucune voix néerlandaise n’a été trouvée sur cet appareil.</span> Utilisez de préférence Chrome, Edge ou Safari, ou prévenez votre professeur avant de commencer.`;
    else if (Lecteur.mode === 'indisponible') el.innerHTML = `<span class="font-semibold text-red-700">Ce navigateur ne peut pas lire le document sonore.</span> Utilisez Chrome, Edge, Firefox ou Safari récent.`;
  }
  function bip() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      const ctx = new Ctx(), osc = ctx.createOscillator(), g = ctx.createGain();
      osc.frequency.value = 660; g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.9);
      osc.connect(g); g.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + 1);
      setTimeout(() => ctx.close && ctx.close(), 1500);
      return true;
    } catch (e) { return false; }
  }
  function testerSon() {
    if (Lecteur.mode === 'synthese' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance('Hallo! Dit is een geluidstest. Kun je mij goed horen?');
      const v = Lecteur.voix && Lecteur.voix.F;
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'nl-BE';
      u.rate = 0.95;
      window.speechSynthesis.speak(u);
      majStatutSon(`${ico('son', 'inline h-4 w-4 text-oranje-500')} Vous devriez entendre une phrase en néerlandais. ${v ? `Voix : ${esc(v.name)}.` : '<span class="font-semibold text-red-700">Aucune voix néerlandaise : la prononciation sera incorrecte.</span>'}`);
    } else {
      const ok = bip();
      majStatutSon(ok ? `${ico('son', 'inline h-4 w-4 text-oranje-500')} Vous devriez entendre un signal sonore. Si ce n’est pas le cas, vérifiez le volume.` : 'Impossible d’émettre un son sur cet appareil.');
    }
  }

  function commencerTest() {
    if (!etat.engagement) return;
    const d = D(), rnd = mulberry32(etat.graine);
    const ordre = (qs) => qs.map((q) => {
      const idx = q.options.map((_, i) => i);
      return CFG.melangerPropositions ? melanger(idx, rnd) : idx;
    });
    etat.ordres = { lecture: ordre(d.lecture.questions), ecoute: ordre(d.ecoute.questions) };
    etat.reponses = { lecture: [], ecoute: [] };
    etat.production = ''; etat.etapesCochees = []; etat.ecoutes = 0;
    etat.integrite = { sortiesOnglet: 0, tempsHorsOngletMs: 0, collagesBloques: 0 };
    etat.envoi = etatInitial().envoi; etat.resultats = null; etat.fin = null; etat.finAuto = false;
    const tent = stockage.lire(CLE_TENTATIVES) || {};
    const cle = `${etat.etudiant.email}|${etat.etudiant.niveau}`;
    tent[cle] = (tent[cle] || 0) + 1;
    stockage.ecrire(CLE_TENTATIVES, tent);
    etat.tentative = tent[cle];
    etat.debut = Date.now();
    alertes.cinq = false; alertes.une = false;
    demarrerMinuteur();
    allerA('lecture');
    toast('Le test a commencé. Bon travail !', 'succes');
  }

  /* ------------------------------------------------------------------
     8. Partie 1 — Leestoets
     ------------------------------------------------------------------ */
  VUES.lecture = {
    html() {
      const d = D().lecture, total = d.questions.length, n = nbRepondues('lecture');
      const vue = etat.vueLecture === 'questions' ? 'questions' : 'texte';
      const onglet = (cle, label) => `<button type="button" role="tab" data-action="onglet-lecture" data-vue="${cle}" aria-selected="${vue === cle}" class="onglet rounded-lg px-3 py-2 text-sm font-semibold transition ${vue === cle ? 'bg-white text-marine-900 shadow-sm' : 'text-slate-600'}">${label}</button>`;
      return `
      <section class="apparition">
        ${enTeteSection('lecture')}
        <div class="sticky top-[var(--hauteur-entete)] z-20 -mx-4 mb-4 border-b border-slate-200 bg-slate-50 px-4 py-2 lg:hidden">
          <div class="grid grid-cols-2 gap-1 rounded-xl bg-slate-200/70 p-1" role="tablist" aria-label="Afficher">
            ${onglet('texte', `${ico('fichier', 'inline h-4 w-4 -mt-0.5')} Texte`)}
            ${onglet('questions', `Questions <span class="ml-1 rounded-md bg-marine-100 px-1.5 py-0.5 text-xs text-marine-800" data-compteur>${n}/${total}</span>`)}
          </div>
        </div>
        <div class="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div data-panneau="texte" class="${vue === 'texte' ? '' : 'max-lg:hidden'} lg:sticky lg:top-[calc(var(--hauteur-entete)+1rem)]">
            <div class="defilement lg:max-h-[calc(100vh-var(--hauteur-entete)-2rem)] lg:overflow-y-auto lg:pr-2">
              ${htmlDocument(d.document)}
              <button type="button" data-action="onglet-lecture" data-vue="questions" class="${btn('primaire', 'mt-4 w-full lg:hidden')}">Répondre aux questions ${ico('flecheD', 'h-4 w-4')}</button>
            </div>
          </div>
          <div data-panneau="questions" class="${vue === 'questions' ? '' : 'max-lg:hidden'}">
            <div class="${C.carte} mb-4 flex flex-wrap items-center justify-between gap-3 p-4">
              <p class="text-sm font-semibold text-slate-700"><span lang="nl">Vragen</span> · <span data-compteur>${n}/${total}</span> répondues</p>
              ${htmlPastilles('lecture')}
            </div>
            ${htmlQuestions('lecture')}
          </div>
        </div>
        ${barreNavigation({ suivant: 'ecoute', labelSuivant: 'Partie 2 : audition', info: `${n}/${total} réponses` })}
      </section>`;
    },
  };
  function changerOngletLecture(vue) {
    etat.vueLecture = vue; sauver();
    $$('[data-panneau]').forEach((p) => p.classList.toggle('max-lg:hidden', p.dataset.panneau !== vue));
    $$('.onglet').forEach((o) => {
      const actif = o.dataset.vue === vue;
      o.setAttribute('aria-selected', String(actif));
      o.classList.toggle('bg-white', actif); o.classList.toggle('text-marine-900', actif);
      o.classList.toggle('shadow-sm', actif); o.classList.toggle('text-slate-600', !actif);
    });
    const ancre = $('[data-panneau="' + vue + '"]');
    if (ancre && window.innerWidth < 1024) window.scrollTo({ top: ancre.getBoundingClientRect().top + window.scrollY - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--hauteur-entete'), 10) || 110) - 70 });
  }

  /* ------------------------------------------------------------------
     9. Partie 2 — Luistoets : lecteur audio (fichier MP3 ou synthèse)
     ------------------------------------------------------------------ */
  function decouperSegments(e) {
    const segments = [];
    e.transcription.forEach((rep, ligne) => {
      const perso = (e.personnages || {})[rep[0]] || { voix: 'F' };
      const phrases = String(rep[1]).replace(/([.!?…]["”»’]?)\s+/g, '$1\u0001').split('\u0001');
      let tampon = '';
      phrases.forEach((p) => {
        if (tampon && (tampon + ' ' + p).length > 170) { segments.push({ texte: tampon, voix: perso.voix, ligne }); tampon = p; }
        else tampon = tampon ? tampon + ' ' + p : p;
      });
      if (tampon.trim()) segments.push({ texte: tampon.trim(), voix: perso.voix, ligne });
    });
    return segments;
  }
  function chargerVoix() {
    return new Promise((resolve) => {
      const s = window.speechSynthesis;
      const v = s.getVoices();
      if (v && v.length) { resolve(v); return; }
      let fait = false;
      const fin = () => { if (!fait) { fait = true; resolve(s.getVoices() || []); } };
      if (s.addEventListener) s.addEventListener('voiceschanged', fin, { once: true }); else s.onvoiceschanged = fin;
      setTimeout(fin, 2500);
    });
  }
  function choisirVoix(liste) {
    const nl = liste.filter((v) => /^nl([-_]|$)/i.test(v.lang || ''));
    if (!nl.length) return null;
    const score = (v) => (/natural|online|neural|premium|enhanced/i.test(v.name) ? 4 : 0) + (/google/i.test(v.name) ? 2 : 0) + (/be/i.test(v.lang) ? 1 : 0);
    const tri = nl.slice().sort((a, b) => score(b) - score(a));
    const fem = /ellen|claire|fenna|colette|dena|hanna|lotte|femke|sanne|laura|google/i;
    const mas = /xander|arnaud|maarten|frank|bart|sander|willem|daan|ruben|coen/i;
    const F = tri.find((v) => fem.test(v.name)) || tri[0];
    const M = tri.find((v) => mas.test(v.name) && v !== F) || tri.find((v) => v !== F) || F;
    return { F, M, memeVoix: F === M };
  }

  const Lecteur = {
    mode: null, audio: null, segments: [], index: 0, joue: false, enCours: false,
    jeton: 0, voix: null, refs: [], niveau: null, promesse: null,

    preparer() {
      const niveau = etat.etudiant.niveau;
      if (this.promesse && this.niveau === niveau) return this.promesse;
      this.reinitialiser();
      this.niveau = niveau;
      const e = D().ecoute;
      this.segments = decouperSegments(e);
      this.promesse = new Promise((resolve) => {
        const activerSynthese = () => {
          if (!('speechSynthesis' in window) || typeof window.SpeechSynthesisUtterance !== 'function') { this.mode = 'indisponible'; this.majUI(); resolve(); return; }
          this.mode = 'synthese';
          chargerVoix().then((v) => { this.voix = choisirVoix(v); this.majUI(); resolve(); });
        };
        if (!e.audio) { activerSynthese(); return; }
        const a = new Audio();
        let fini = false;
        const adopter = () => {
          if (fini) return; fini = true;
          this.audio = a; this.mode = 'fichier';
          ['timeupdate', 'durationchange', 'loadedmetadata'].forEach((ev) => a.addEventListener(ev, () => this.majUI()));
          a.addEventListener('ended', () => this.terminer());
          this.majUI(); resolve();
        };
        const echec = () => { if (fini) return; fini = true; activerSynthese(); };
        a.preload = 'metadata';
        // Sur un serveur (GitHub Pages), une requête HEAD suffit : iOS ne précharge pas l'audio.
        fetch(e.audio, { method: 'HEAD', cache: 'no-store' })
          .then((rep) => {
            const type = rep.headers.get('content-type') || '';
            if (rep.ok && !/text\/html/i.test(type)) { a.src = e.audio; adopter(); } else echec();
          })
          .catch(() => {
            // Ouverture locale (file://) : on teste directement le chargement du fichier.
            a.addEventListener('loadedmetadata', adopter, { once: true });
            a.addEventListener('error', echec, { once: true });
            setTimeout(echec, 6000);
            a.src = e.audio;
          });
      });
      return this.promesse;
    },
    reinitialiser() {
      this.pause();
      if (this.audio) { this.audio.removeAttribute('src'); this.audio.load(); }
      Object.assign(this, { mode: null, audio: null, segments: [], index: 0, joue: false, enCours: false, voix: null, refs: [], promesse: null });
    },
    peutDemarrer() { return !CFG.ecoutesMax || etat.ecoutes < CFG.ecoutesMax; },

    basculer() { if (this.joue) this.pause(); else this.jouer(); },
    jouer() {
      if (this.joue || !this.mode || this.mode === 'indisponible' || !enTest()) return;
      let nouvelle = false;
      if (!this.enCours) {
        if (!this.peutDemarrer()) { toast('Vous avez utilisé toutes vos écoutes.', 'alerte'); return; }
        etat.ecoutes++; etat.modeAudio = this.mode; sauver();
        this.enCours = true; this.index = 0; nouvelle = true;
        if (this.audio) { try { this.audio.currentTime = 0; } catch (e) { /* pas encore chargé */ } }
      }
      this.joue = true;
      if (this.mode === 'fichier') {
        this.audio.play().catch((err) => {
          this.joue = false;
          if (nouvelle) { etat.ecoutes--; this.enCours = false; sauver(); }
          this.majUI();
          toast('Lecture impossible : ' + (err && err.message ? err.message : 'erreur inconnue'), 'erreur');
        });
      } else this.parler();
      this.majUI();
    },
    parler() {
      const s = window.speechSynthesis;
      s.cancel();
      if (s.paused) s.resume();
      const jeton = ++this.jeton;
      const v = this.voix || { memeVoix: true };
      const vitesse = (CFG.vitesseSynthese || {})[etat.etudiant.niveau] || 1;
      this.refs = [];
      for (let k = this.index; k < this.segments.length; k++) {
        const seg = this.segments[k];
        const u = new SpeechSynthesisUtterance(seg.texte);
        const voix = seg.voix === 'M' ? v.M : v.F;
        if (voix) { u.voice = voix; u.lang = voix.lang; } else u.lang = 'nl-BE';
        u.rate = vitesse;
        u.pitch = v.memeVoix ? (seg.voix === 'M' ? 0.8 : 1.15) : 1;
        u.onstart = () => { if (jeton === this.jeton) { this.index = k; this.majUI(); } };
        u.onend = () => {
          if (jeton !== this.jeton) return;
          if (k === this.segments.length - 1) this.terminer();
          else { this.index = k + 1; this.majUI(); }
        };
        u.onerror = (ev) => {
          if (jeton !== this.jeton || ev.error === 'interrupted' || ev.error === 'canceled') return;
          this.jeton++; this.joue = false; this.majUI();
          toast('La voix de synthèse s’est interrompue (' + ev.error + '). Cliquez sur « Reprendre ».', 'erreur', 6000);
        };
        this.refs.push(u);
        s.speak(u);
      }
    },
    pause() {
      if (!this.joue) return;
      this.joue = false;
      if (this.mode === 'fichier' && this.audio) this.audio.pause();
      else if ('speechSynthesis' in window) { this.jeton++; window.speechSynthesis.cancel(); }
      this.majUI();
    },
    terminer() {
      this.joue = false; this.enCours = false; this.index = 0;
      if (this.audio) { try { this.audio.pause(); this.audio.currentTime = 0; } catch (e) { /* ignore */ } }
      this.majUI();
      if (etat.etape === 'ecoute') toast(this.peutDemarrer() ? 'Fin du document sonore.' : 'Fin du document sonore. Vous avez utilisé toutes vos écoutes.', 'info');
    },
    progression() {
      if (this.mode === 'fichier' && this.audio && this.audio.duration) {
        return { f: this.audio.currentTime / this.audio.duration, texte: `${formatDuree(this.audio.currentTime * 1000)} / ${formatDuree(this.audio.duration * 1000)}` };
      }
      if (!this.segments.length) return { f: 0, texte: '' };
      const total = this.segments.reduce((t, s) => t + s.texte.length, 0);
      const fait = this.segments.slice(0, this.index).reduce((t, s) => t + s.texte.length, 0);
      const nbLignes = this.segments[this.segments.length - 1].ligne + 1;
      const ligne = this.enCours ? this.segments[this.index].ligne + 1 : 0;
      return { f: this.enCours ? fait / total : 0, texte: this.enCours ? `Réplique ${ligne}/${nbLignes}` : `${nbLignes} répliques` };
    },
    majUI() {
      const bouton = $('#btn-lecture');
      if (!bouton) return;
      const max = CFG.ecoutesMax;
      const epuise = !this.enCours && !this.peutDemarrer();
      let label = etat.ecoutes ? 'Réécouter' : 'Écouter';
      if (this.joue) label = 'Pause'; else if (this.enCours) label = 'Reprendre';
      bouton.disabled = !this.mode || this.mode === 'indisponible' || epuise || !enTest();
      bouton.innerHTML = `${ico(this.joue ? 'pause' : 'play', 'h-6 w-6')}<span class="sr-only">${label}</span>`;
      bouton.setAttribute('aria-label', label);
      bouton.classList.toggle('pulsation', this.joue);
      $('#label-lecture').textContent = epuise ? 'Écoutes épuisées' : label;
      const p = this.progression();
      $('#barre-audio').style.width = `${Math.round(p.f * 1000) / 10}%`;
      $('#temps-audio').textContent = p.texte;
      $('#compteur-ecoutes').textContent = max ? `Écoute ${Math.min(etat.ecoutes, max)}/${max}` : `${etat.ecoutes} écoute${etat.ecoutes > 1 ? 's' : ''}`;
      const statut = $('#statut-audio');
      if (!this.mode) statut.innerHTML = 'Préparation du document sonore…';
      else if (this.mode === 'indisponible') statut.innerHTML = '<span class="font-semibold text-red-700">Ce navigateur ne peut pas lire le document sonore.</span> Ouvrez le test dans Chrome, Edge, Firefox ou Safari récent, ou prévenez votre professeur.';
      else if (epuise) statut.innerHTML = 'Vous avez utilisé toutes vos écoutes. Vous pouvez encore modifier vos réponses.';
      else if (this.mode === 'fichier') statut.innerHTML = 'Document sonore prêt. Vous pouvez mettre en pause et reprendre.';
      else if (this.voix && this.voix.F) statut.innerHTML = `Lecture par la voix néerlandaise de votre appareil (${esc(this.voix.F.name)}). Vous pouvez mettre en pause et reprendre.`;
      else statut.innerHTML = '<span class="font-semibold text-red-700">Aucune voix néerlandaise n’a été trouvée sur cet appareil :</span> la prononciation sera incorrecte. Utilisez de préférence Chrome, Edge ou Safari, ou prévenez votre professeur.';
    },
  };

  VUES.ecoute = {
    html() {
      const d = D().ecoute, total = d.questions.length, n = nbRepondues('ecoute');
      const persos = Object.keys(d.personnages || {}).map((k) => d.personnages[k].nom);
      return `
      <section class="apparition">
        ${enTeteSection('ecoute')}
        <div class="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start">
          <div class="sticky top-[var(--hauteur-entete)] z-20 -mx-4 bg-slate-50 px-4 pb-3 pt-2 lg:top-[calc(var(--hauteur-entete)+1rem)] lg:mx-0 lg:bg-transparent lg:p-0">
            <div class="${C.carte} overflow-hidden">
              <div class="hidden bg-marine-900 px-5 py-4 text-white sm:block">
                <p class="text-xs font-bold uppercase tracking-[0.14em] text-oranje-300">Document sonore</p>
                <p class="mt-1 font-serif text-lg font-semibold" lang="nl">${esc(d.titre)}</p>
                <p class="mt-1 text-sm text-marine-100" lang="nl">${esc(d.situation)}</p>
              </div>
              <div class="flex items-center gap-4 p-4">
                <button type="button" id="btn-lecture" data-action="lecture" class="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-oranje-500 text-white shadow-md transition hover:bg-oranje-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-oranje-200 disabled:cursor-not-allowed disabled:bg-slate-300" aria-label="Écouter">${ico('play', 'h-6 w-6')}</button>
                <div class="min-w-0 flex-1">
                  <div class="flex items-baseline justify-between gap-2">
                    <p class="truncate text-sm font-semibold text-slate-800" id="label-lecture">Écouter</p>
                    <span id="compteur-ecoutes" class="shrink-0 rounded-full bg-marine-50 px-2 py-0.5 text-xs font-bold text-marine-800 ring-1 ring-inset ring-marine-200"></span>
                  </div>
                  <div class="mt-2 h-2 overflow-hidden rounded-full bg-slate-200"><span id="barre-audio" class="block h-full rounded-full bg-oranje-500 transition-[width] duration-300" style="width:0%"></span></div>
                  <p class="mt-1.5 text-xs tabular-nums text-slate-500" id="temps-audio"></p>
                </div>
              </div>
              <p id="statut-audio" class="border-t border-slate-100 px-4 py-3 text-xs leading-relaxed text-slate-500" aria-live="polite"></p>
              <div class="hidden border-t border-slate-100 px-4 py-3 text-xs text-slate-500 lg:block">
                <p><span class="font-semibold text-slate-600">Personnages :</span> <span lang="nl">${esc(persos.join(' · '))}</span></p>
                <p class="mt-1">Conseil : lisez d’abord les questions, puis écoutez le document une première fois sans répondre.</p>
              </div>
            </div>
          </div>
          <div>
            <div class="${C.carte} mb-4 flex flex-wrap items-center justify-between gap-3 p-4">
              <p class="text-sm font-semibold text-slate-700"><span lang="nl">Vragen</span> · <span data-compteur>${n}/${total}</span> répondues</p>
              ${htmlPastilles('ecoute')}
            </div>
            ${htmlQuestions('ecoute')}
          </div>
        </div>
        ${barreNavigation({ precedent: 'lecture', labelPrecedent: 'Partie 1', suivant: 'ecriture', labelSuivant: 'Partie 3 : écriture', info: `${n}/${total} réponses` })}
      </section>`;
    },
    lier() {
      Lecteur.majUI();
      Lecteur.preparer().then(() => Lecteur.majUI());
    },
  };

  /* ------------------------------------------------------------------
     10. Partie 3 — Schrijfopdracht
     ------------------------------------------------------------------ */
  VUES.ecriture = {
    html() {
      const d = D().ecriture;
      return `
      <section class="apparition">
        ${enTeteSection('ecriture')}
        <div class="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div class="space-y-4">
            <div class="${C.carte} p-5">
              <p class="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Situation</p>
              <p class="mt-2 font-medium leading-relaxed text-slate-900" lang="nl">${esc(d.situation)}</p>
              <details class="mt-2 text-sm text-slate-600"><summary class="cursor-pointer font-semibold text-marine-700">Traduction de la situation</summary><p class="mt-1.5 leading-relaxed">${esc(d.situationFr)}</p></details>
            </div>
            ${d.documents.map(htmlDocument).join('')}
          </div>
          <div class="space-y-4 lg:sticky lg:top-[calc(var(--hauteur-entete)+1rem)]">
            <div class="${C.carte} p-5">
              <p class="flex items-center gap-2 font-semibold text-marine-900">${ico('liste', 'h-5 w-5 text-oranje-500')} <span lang="nl">Stappen</span> <span class="text-sm font-normal text-slate-400">· cochez au fur et à mesure (facultatif)</span></p>
              <ol class="mt-3 space-y-2">
                ${d.etapes.map((e, i) => `
                  <li><label class="flex cursor-pointer gap-3 rounded-lg p-1.5 hover:bg-slate-50">
                    <input type="checkbox" data-etape="${i}" class="mt-1 h-4 w-4 shrink-0 accent-emerald-600" ${etat.etapesCochees.includes(i) ? 'checked' : ''}>
                    <span class="text-sm leading-snug"><span class="font-semibold text-slate-800">${i + 1}. </span><span class="text-slate-800" lang="nl">${esc(e.nl)}</span><span class="mt-0.5 block text-xs text-slate-500">${esc(e.fr)}</span></span>
                  </label></li>`).join('')}
              </ol>
            </div>
            <div class="${C.carte} p-5">
              <label for="production" class="flex flex-wrap items-baseline justify-between gap-2">
                <span class="font-semibold text-marine-900">Votre texte <span class="font-normal text-slate-400">· en néerlandais</span></span>
                <span class="text-xs text-slate-500">Objectif : ${d.motsMin} à ${d.motsMax} mots</span>
              </label>
              <textarea id="production" lang="nl" spellcheck="false" autocorrect="off" autocapitalize="sentences" autocomplete="off" rows="14" class="defilement mt-3 block w-full rounded-xl border border-slate-300 bg-amber-50/30 px-4 py-3 font-serif text-[1.05rem] leading-relaxed text-slate-900 shadow-inner focus:border-marine-500 focus:outline-none focus:ring-2 focus:ring-marine-200" placeholder="Beste Els, …" aria-describedby="compteur-mots">${esc(etat.production)}</textarea>
              <div class="mt-3">
                <div class="h-1.5 overflow-hidden rounded-full bg-slate-200"><span id="barre-mots" class="block h-full rounded-full transition-all"></span></div>
                <div class="mt-2 flex items-center justify-between text-xs">
                  <span id="compteur-mots" class="font-semibold" aria-live="polite"></span>
                  <span id="statut-sauvegarde" class="text-slate-400">${ico('disque', 'inline h-3.5 w-3.5 -mt-0.5')} Enregistrement automatique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        ${barreNavigation({ precedent: 'ecoute', labelPrecedent: 'Partie 2', suivant: 'verification', labelSuivant: 'Vérifier et terminer' })}
      </section>`;
    },
    lier(app) {
      const zone = $('#production', app);
      let minuterie = null;
      const maj = () => {
        const d = D().ecriture, n = compterMots(zone.value);
        const el = $('#compteur-mots', app), barre = $('#barre-mots', app);
        let couleur = 'text-amber-700', fond = 'bg-amber-400', msg = `${n} mot${n > 1 ? 's' : ''} — encore ${Math.max(0, d.motsMin - n)} au minimum`;
        if (n >= d.motsMin && n <= d.motsMax) { couleur = 'text-emerald-700'; fond = 'bg-emerald-500'; msg = `${n} mots — longueur adaptée`; }
        else if (n > d.motsMax) { couleur = 'text-oranje-700'; fond = 'bg-oranje-500'; msg = `${n} mots — un peu long (maximum conseillé : ${d.motsMax})`; }
        el.className = `font-semibold ${couleur}`; el.textContent = msg;
        barre.className = `block h-full rounded-full transition-all ${fond}`;
        barre.style.width = `${Math.min(100, (n / d.motsMax) * 100)}%`;
      };
      maj();
      zone.addEventListener('input', () => {
        if (!enTest()) return;
        etat.production = zone.value;
        maj();
        $('#statut-sauvegarde', app).innerHTML = 'Enregistrement…';
        clearTimeout(minuterie);
        minuterie = setTimeout(() => { sauver(); const s = $('#statut-sauvegarde'); if (s) s.innerHTML = `${ico('check', 'inline h-3.5 w-3.5 -mt-0.5 text-emerald-600')} Enregistré`; }, 500);
      });
      const bloquer = (e) => {
        if (!CFG.bloquerCollage) return;
        e.preventDefault();
        etat.integrite.collagesBloques++; sauver();
        toast('Le collage de texte est désactivé : rédigez votre réponse vous-même.', 'alerte');
      };
      zone.addEventListener('paste', bloquer);
      zone.addEventListener('drop', bloquer);
      $$('[data-etape]', app).forEach((c) => c.addEventListener('change', () => {
        const i = Number(c.dataset.etape);
        etat.etapesCochees = etat.etapesCochees.filter((x) => x !== i);
        if (c.checked) etat.etapesCochees.push(i);
        sauver();
      }));
    },
  };

  /* ------------------------------------------------------------------
     11. Vérification avant l'envoi
     ------------------------------------------------------------------ */
  VUES.verification = {
    html() {
      const d = D();
      const manquantes = (sec) => d[sec].questions.map((q, i) => i).filter((i) => etat.reponses[sec][i] == null);
      const mL = manquantes('lecture'), mE = manquantes('ecoute');
      const mots = compterMots(etat.production), e = d.ecriture;
      const reste = tempsRestant();
      const carte = (icone, titre, ok, valeur, detail, etape) => `
        <div class="${C.carte} flex flex-col p-5">
          <div class="flex items-center justify-between">
            <span class="flex h-10 w-10 items-center justify-center rounded-xl ${ok ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}">${ico(icone, 'h-5 w-5')}</span>
            <span class="rounded-full px-2.5 py-1 text-xs font-bold ${ok ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-800'}">${ok ? 'Complet' : 'À vérifier'}</span>
          </div>
          <p class="mt-4 font-semibold text-slate-900">${titre}</p>
          <p class="mt-1 text-2xl font-bold text-marine-900">${valeur}</p>
          <p class="mt-1 flex-1 text-sm text-slate-600">${detail}</p>
          <button type="button" data-aller="${etape}" class="mt-4 self-start text-sm font-semibold text-marine-700 underline-offset-4 hover:underline">Revoir cette partie</button>
        </div>`;
      const motsOk = mots >= e.motsMin;
      const alerte = mL.length || mE.length || !motsOk;
      return `
      <section class="mx-auto max-w-4xl apparition">
        <p class="${C.surtitre}">Dernière étape</p>
        <h1 class="mt-2 font-serif text-[1.9rem] font-bold text-marine-900 sm:text-4xl">Vérification avant l’envoi</h1>
        <p class="mt-3 text-slate-600">Relisez vos réponses si nécessaire.${reste !== null ? ` Temps restant : <strong class="text-marine-900">${formatDuree(reste)}</strong>.` : ''}</p>
        <div class="mt-7 grid gap-4 md:grid-cols-3">
          ${carte('livre', 'Lecture', !mL.length, `${d.lecture.questions.length - mL.length}/${d.lecture.questions.length}`, mL.length ? `Sans réponse : question${mL.length > 1 ? 's' : ''} ${mL.map((i) => i + 1).join(', ')}.` : 'Toutes les questions ont une réponse.', 'lecture')}
          ${carte('casque', 'Audition', !mE.length, `${d.ecoute.questions.length - mE.length}/${d.ecoute.questions.length}`, (mE.length ? `Sans réponse : question${mE.length > 1 ? 's' : ''} ${mE.map((i) => i + 1).join(', ')}.` : 'Toutes les questions ont une réponse.') + ` Écoutes utilisées : ${etat.ecoutes}${CFG.ecoutesMax ? '/' + CFG.ecoutesMax : ''}.`, 'ecoute')}
          ${carte('stylo', 'Écriture', motsOk, `${mots} mots`, mots === 0 ? 'Votre texte est vide.' : motsOk ? `Objectif : ${e.motsMin} à ${e.motsMax} mots.` : `En dessous du minimum de ${e.motsMin} mots.`, 'ecriture')}
        </div>
        ${alerte ? `<div class="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">${ico('alerte', 'h-5 w-5 shrink-0')}<p>Votre test est incomplet. Vous pouvez encore le compléter ; une question sans réponse compte comme une réponse fausse.</p></div>` : `<div class="mt-6 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">${ico('check', 'h-5 w-5 shrink-0')}<p>Tout est complet. Vous pouvez terminer le test.</p></div>`}
        <div class="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button type="button" data-aller="ecriture" class="${btn('secondaire')}">${ico('flecheG', 'h-4 w-4')} Revenir à l’écriture</button>
          <button type="button" data-action="terminer" class="${btn('accent', 'sm:px-7')}">${ico('check', 'h-4 w-4')} Terminer et envoyer mes résultats</button>
        </div>
      </section>`;
    },
  };

  async function demanderFin() {
    const ok = await modale({
      titre: 'Terminer le test ?',
      html: '<p>Après validation, vous ne pourrez plus modifier vos réponses. Vos résultats seront calculés et envoyés à vous-même et à votre professeur.</p>',
      boutons: [{ label: 'Continuer le test', style: 'secondaire', valeur: false }, { label: 'Terminer et envoyer', style: 'accent', valeur: true }],
    });
    if (ok) terminerTest(false);
  }

  function terminerTest(auto) {
    if (etat.fin || !etat.debut) return;
    Lecteur.pause();
    fermerModale();
    clearInterval(minuteur);
    etat.fin = auto && dureeMs() ? Math.min(Date.now(), etat.debut + dureeMs()) : Date.now();
    etat.finAuto = !!auto;
    etat.resultats = calculerResultats();
    etat.etape = 'resultats';
    sauver();
    render();
    window.scrollTo(0, 0);
    if (auto) modale({ titre: 'Temps écoulé', html: '<p>Le temps prévu pour le test est écoulé. Vos réponses ont été enregistrées automatiquement et vos résultats sont calculés.</p>', boutons: [{ label: 'Voir mes résultats', style: 'primaire', valeur: true }] });
    envoyerResultats();
  }

  /* ------------------------------------------------------------------
     12. Résultats
     ------------------------------------------------------------------ */
  function calculerResultats() {
    const d = D(), seuil = Number(CFG.seuilReussite) || 5;
    const detail = (sec) => d[sec].questions.map((q, i) => {
      const r = etat.reponses[sec][i];
      return { n: i + 1, niveau: q.niveau || '', question: q.question, reponse: r == null ? null : q.options[r], attendue: q.options[0], juste: r === 0 };
    });
    const bloc = (sec) => {
      const det = detail(sec), score = det.filter((x) => x.juste).length, sur = det.length;
      return { score, sur, reussi: sur > 0 && (score / sur) * 10 >= seuil, detail: det };
    };
    const r = {
      niveau: etat.etudiant.niveau,
      date: etat.fin,
      dureeMs: etat.fin - etat.debut,
      seuil,
      lecture: bloc('lecture'),
      ecoute: bloc('ecoute'),
      ecriture: { texte: etat.production, mots: compterMots(etat.production), min: d.ecriture.motsMin, max: d.ecriture.motsMax },
    };
    r.reussite = r.lecture.reussi && r.ecoute.reussi;
    const h = empreinte([etat.etudiant.nom, etat.etudiant.prenom, etat.etudiant.email, r.niveau, r.lecture.score, r.ecoute.score, r.date, etat.graine].join('|')).toString(36).toUpperCase().padStart(8, '0').slice(-8);
    r.code = `${r.niveau}-${h.slice(0, 4)}-${h.slice(4)}`;
    return r;
  }

  function anneau(score, sur, ok) {
    const rayon = 34, circ = 2 * Math.PI * rayon, f = sur ? score / sur : 0;
    return `<div class="relative h-24 w-24 shrink-0">
      <svg viewBox="0 0 80 80" class="h-24 w-24 -rotate-90" aria-hidden="true">
        <circle cx="40" cy="40" r="${rayon}" fill="none" stroke="#e2e8f0" stroke-width="7"/>
        ${f > 0 ? `<circle cx="40" cy="40" r="${rayon}" fill="none" stroke="${ok ? '#059669' : '#dc2626'}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${(circ * f).toFixed(1)} ${circ.toFixed(1)}" class="anneau-progres"/>` : ''}
      </svg>
      <span class="absolute inset-0 flex flex-col items-center justify-center"><span class="text-2xl font-extrabold text-slate-900">${score}</span><span class="-mt-1 text-xs font-semibold text-slate-400">sur ${sur}</span></span>
    </div>`;
  }

  VUES.resultats = {
    html() {
      const r = etat.resultats, s = etat.etudiant;
      if (!r) return '<p>Aucun résultat.</p>';
      const carteScore = (titre, nl, b) => `
        <div class="${C.carte} flex items-center gap-4 p-5">
          ${anneau(b.score, b.sur, b.reussi)}
          <div class="min-w-0">
            <p class="font-semibold text-slate-900">${titre}</p>
            <p class="text-xs text-slate-400" lang="nl">${nl}</p>
            <span class="mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${b.reussi ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}">${ico(b.reussi ? 'check' : 'x', 'h-3.5 w-3.5')} ${b.reussi ? 'Seuil atteint' : 'Seuil non atteint'}</span>
          </div>
        </div>`;
      const corrections = CFG.afficherCorrection ? ['lecture', 'ecoute'].map((sec) => `
        <details class="${C.carte} p-5">
          <summary class="cursor-pointer font-semibold text-marine-900">Correction — ${SECTIONS[sec].fr}</summary>
          <ol class="mt-4 space-y-3 text-sm">${r[sec].detail.map((x) => `
            <li class="flex gap-3"><span class="mt-0.5 ${x.juste ? 'text-emerald-600' : 'text-red-600'}">${ico(x.juste ? 'check' : 'x', 'h-4 w-4')}</span>
              <span><span class="font-semibold" lang="nl">${x.n}. ${esc(x.question)}</span><br><span class="text-slate-600" lang="nl">Votre réponse : ${x.reponse == null ? '<em>aucune</em>' : esc(x.reponse)}</span>${x.juste ? '' : `<br><span class="text-emerald-700" lang="nl">Réponse attendue : ${esc(x.attendue)}</span>`}</span></li>`).join('')}
          </ol>
        </details>`).join('') : '';
      return `
      <section class="apparition">
        <div class="relative overflow-hidden rounded-3xl ${r.reussite ? 'bg-marine-900 text-white' : 'border border-slate-200 bg-white text-slate-900 shadow-carte'} p-6 sm:p-9">
          ${r.reussite ? '<div class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-oranje-500/20 blur-2xl" aria-hidden="true"></div>' : ''}
          <div class="relative flex flex-col gap-5 sm:flex-row sm:items-center">
            <span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${r.reussite ? 'bg-oranje-500 text-white' : 'bg-marine-50 text-marine-700'}">${ico(r.reussite ? 'medaille' : 'check', 'h-8 w-8')}</span>
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.14em] ${r.reussite ? 'text-oranje-300' : 'text-oranje-600'}">Test terminé · niveau ${r.niveau}</p>
              <h1 class="mt-1 font-serif text-[1.9rem] font-bold leading-tight sm:text-4xl">${r.reussite ? `Gefeliciteerd, ${esc(s.prenom)} !` : `Merci, ${esc(s.prenom)}.`}</h1>
              <p class="mt-2 max-w-2xl leading-relaxed ${r.reussite ? 'text-marine-100' : 'text-slate-600'}">${r.reussite
                ? `Vous avez atteint le seuil de réussite dans les deux épreuves de compréhension. Votre attestation est prête ci-dessous. Votre production écrite sera évaluée par votre professeur.`
                : `Votre test est enregistré. Le seuil de ${r.seuil}/10 n’est pas atteint dans toutes les épreuves de compréhension : votre professeur analysera vos résultats, ainsi que votre production écrite, et reprendra contact avec vous.`}</p>
              ${etat.finAuto ? `<p class="mt-3 inline-flex items-center gap-1.5 rounded-full ${r.reussite ? 'bg-white/10 text-white' : 'bg-amber-50 text-amber-800'} px-3 py-1 text-xs font-semibold">${ico('horloge', 'h-3.5 w-3.5')} Test clôturé automatiquement à la fin du temps</p>` : ''}
            </div>
          </div>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-3">
          ${carteScore('Compréhension à la lecture', 'Leesvaardigheid', r.lecture)}
          ${carteScore('Compréhension à l’audition', 'Luistervaardigheid', r.ecoute)}
          <div class="${C.carte} flex items-center gap-4 p-5">
            <span class="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full bg-marine-50 text-marine-800"><span class="text-2xl font-extrabold">${r.ecriture.mots}</span><span class="-mt-1 text-xs font-semibold text-marine-500">mots</span></span>
            <div class="min-w-0">
              <p class="font-semibold text-slate-900">Production écrite</p>
              <p class="text-xs text-slate-400" lang="nl">Schrijfvaardigheid</p>
              <span class="mt-2 inline-flex items-center gap-1 rounded-full bg-marine-50 px-2.5 py-1 text-xs font-bold text-marine-800">${ico('stylo', 'h-3.5 w-3.5')} Évaluée par le professeur</span>
            </div>
          </div>
        </div>

        <div id="carte-envoi" class="mt-6"></div>
        ${corrections ? `<div class="mt-6 space-y-4">${corrections}</div>` : ''}

        ${r.reussite ? `
        <div class="mt-10">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="${C.surtitre}">Votre document</p>
              <h2 class="mt-1 font-serif text-2xl font-bold text-marine-900">Attestation de réussite</h2>
            </div>
            <div class="flex flex-col gap-2 sm:flex-row">
              <button type="button" data-action="imprimer" class="${btn('secondaire')}">${ico('imprimer', 'h-4 w-4')} Imprimer</button>
              <button type="button" data-action="pdf" class="${btn('primaire')}">${ico('telecharger', 'h-4 w-4')} Télécharger en PDF</button>
            </div>
          </div>
          <div class="mt-4 overflow-x-auto rounded-2xl bg-slate-200/60 p-3 sm:p-6" id="cadre-attestation"><div id="apercu-attestation" class="mx-auto" style="width:680px">${htmlAttestation()}</div></div>
        </div>` : ''}

        <details class="mt-8 ${C.carte} p-5">
          <summary class="cursor-pointer font-semibold text-marine-900">Relire ma production écrite</summary>
          <p class="mt-3 whitespace-pre-wrap font-serif leading-relaxed text-slate-800" lang="nl">${r.ecriture.texte ? esc(r.ecriture.texte) : '<em>(vide)</em>'}</p>
        </details>

        <div class="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Terminé le ${fmtDateHeure(r.date)} · durée ${formatDuree(r.dureeMs)} · code de vérification <strong class="font-mono text-slate-700">${r.code}</strong></p>
          <button type="button" data-action="nouveau-test" class="self-start font-semibold text-marine-700 underline-offset-4 hover:underline sm:self-auto">${ico('recharger', 'inline h-4 w-4 -mt-0.5')} Nouveau test</button>
        </div>
      </section>`;
    },
    lier() { majCarteEnvoi(); ajusterAttestation(); },
  };

  /* ------------------------------------------------------------------
     13. Attestation (HTML pour la page et les e-mails, PDF via jsPDF)
     ------------------------------------------------------------------ */
  /* Réduit l'aperçu de l'attestation pour qu'il tienne dans l'écran (mobile) */
  function ajusterAttestation() {
    const a = $('#apercu-attestation'), cadre = $('#cadre-attestation');
    if (!a || !cadre) return;
    const st = getComputedStyle(cadre);
    const dispo = cadre.clientWidth - parseFloat(st.paddingLeft) - parseFloat(st.paddingRight);
    a.style.zoom = String(Math.min(1, dispo / 680));
  }

  function htmlAttestation() {
    const r = etat.resultats;
    const ligne = (label, nl, b) => `<tr>
      <td style="padding:9px 10px;border-bottom:1px solid #e2e8f0">${label}<br><span style="color:#94a3b8;font-size:11px">${nl}</span></td>
      <td style="padding:9px 10px;border-bottom:1px solid #e2e8f0;text-align:center;font-weight:bold">${b.score}/${b.sur}</td>
      <td style="padding:9px 10px;border-bottom:1px solid #e2e8f0;text-align:center;color:#64748b">${r.seuil}/10</td>
      <td style="padding:9px 10px;border-bottom:1px solid #e2e8f0;text-align:center;font-weight:bold;color:${b.reussi ? '#047857' : '#b91c1c'}">${b.reussi ? 'Réussi' : 'Non atteint'}</td></tr>`;
    return `
<div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #cbd5e1;padding:7px;font-family:Georgia,'Times New Roman',serif;color:#1a2e49">
  <div style="border:2px solid #1a2e49;">
    <div style="background:#1a2e49;color:#ffffff;text-align:center;padding:16px 14px">
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">${esc(CFG.etablissement)}</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#ffb070;margin-top:4px">${esc(CFG.intitule)}</div>
    </div>
    <div style="padding:26px 24px 22px">
      <div style="text-align:center;font-size:27px;font-weight:bold;letter-spacing:1px">ATTESTATION DE RÉUSSITE</div>
      <div style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#475569;margin-top:6px">Néerlandais — niveau ${r.niveau} du Cadre européen commun de référence (CECR)</div>
      <div style="width:64px;height:3px;background:#f86512;margin:16px auto"></div>
      <p style="text-align:center;font-size:15px;margin:0">Il est attesté que</p>
      <p style="text-align:center;font-size:26px;font-style:italic;font-weight:bold;margin:8px 0 10px">${esc(nomComplet())}</p>
      <p style="text-align:center;font-size:15px;line-height:1.6;margin:0 auto;max-width:520px;color:#334155">a réussi, le ${fmtDateLongue(r.date)}, les épreuves de compréhension de l’évaluation en ligne des acquis en néerlandais (niveau ${r.niveau}), organisée dans le cadre d’une procédure de valorisation des acquis.</p>
      <table style="width:100%;border-collapse:collapse;margin-top:22px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#1e293b">
        <tr style="background:#f1f5fa"><th style="padding:8px 10px;text-align:left">Compétence</th><th style="padding:8px 10px">Résultat</th><th style="padding:8px 10px">Seuil</th><th style="padding:8px 10px">Statut</th></tr>
        ${ligne('Compréhension à la lecture', 'Leesvaardigheid', r.lecture)}
        ${ligne('Compréhension à l’audition', 'Luistervaardigheid', r.ecoute)}
        <tr><td style="padding:9px 10px">Production écrite<br><span style="color:#94a3b8;font-size:11px">Schrijfvaardigheid</span></td><td colspan="3" style="padding:9px 10px;text-align:center;color:#475569;font-style:italic">Transmise au professeur pour évaluation</td></tr>
      </table>
      <p style="font-family:Arial,Helvetica,sans-serif;font-size:11.5px;line-height:1.5;color:#64748b;margin:16px 0 0">Cette attestation porte sur les épreuves de compréhension (lecture et audition). La production écrite est évaluée par le professeur. La décision de dispense relève du Conseil des études.</p>
      <table style="width:100%;margin-top:22px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#334155"><tr>
        <td style="vertical-align:bottom">Fait le ${fmtDateCourte(r.date)}<br>Code de vérification : <strong style="font-family:'Courier New',monospace;color:#1a2e49">${r.code}</strong></td>
        <td style="text-align:right;vertical-align:bottom">Le professeur<br><br><br><span style="display:inline-block;border-top:1px solid #94a3b8;min-width:170px;padding-top:4px">${esc(CFG.nomProfesseur || '')}&nbsp;</span></td>
      </tr></table>
    </div>
  </div>
</div>`;
  }

  function nomFichier(prefixe, ext) {
    const r = etat.resultats, s = etat.etudiant;
    const propre = (x) => sansAccents(x).replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `${prefixe}_NL-${r.niveau}_${propre(s.nom).toUpperCase()}_${propre(s.prenom)}_${new Date(r.date).toISOString().slice(0, 10)}.${ext}`;
  }

  async function telechargerPDF() {
    try { await chargerScript(LIB.jspdf); } catch (e) { /* géré ci-dessous */ }
    if (!window.jspdf || !window.jspdf.jsPDF) {
      toast('Le générateur PDF n’a pas pu être chargé. Utilisez « Imprimer » puis « Enregistrer au format PDF ».', 'erreur', 7000);
      return;
    }
    const r = etat.resultats;
    const doc = new window.jspdf.jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    const W = 210, cx = W / 2;
    const MARINE = [26, 46, 73], ORANJE = [248, 101, 18], GRIS = [71, 85, 105], GRIS_CLAIR = [148, 163, 184];
    doc.setProperties({ title: `Attestation de réussite — ${nomComplet()}`, subject: CFG.intitule, author: CFG.etablissement });

    doc.setDrawColor(...GRIS_CLAIR); doc.setLineWidth(0.3); doc.rect(10, 10, 190, 277, 'S');
    doc.setDrawColor(...MARINE); doc.setLineWidth(1); doc.rect(13, 13, 184, 271, 'S');
    doc.setFillColor(...MARINE); doc.rect(13, 13, 184, 28, 'F');
    doc.setTextColor(255, 255, 255); doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
    doc.text(CFG.etablissement.toUpperCase(), cx, 25, { align: 'center' });
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); doc.setTextColor(255, 176, 112);
    doc.text(CFG.intitule, cx, 33, { align: 'center' });

    doc.setTextColor(...MARINE); doc.setFont('times', 'bold'); doc.setFontSize(28);
    doc.text('ATTESTATION DE RÉUSSITE', cx, 64, { align: 'center' });
    doc.setFont('helvetica', 'normal'); doc.setFontSize(11); doc.setTextColor(...GRIS);
    doc.text(`Néerlandais — niveau ${r.niveau} du Cadre européen commun de référence (CECR)`, cx, 73, { align: 'center' });
    doc.setFillColor(...ORANJE); doc.rect(cx - 14, 79, 28, 1.1, 'F');

    doc.setFont('times', 'normal'); doc.setFontSize(13); doc.setTextColor(...MARINE);
    doc.text('Il est attesté que', cx, 93, { align: 'center' });
    doc.setFont('times', 'bolditalic');
    let taille = 26;
    doc.setFontSize(taille);
    while (doc.getTextWidth(nomComplet()) > 165 && taille > 14) { taille -= 1; doc.setFontSize(taille); }
    doc.text(nomComplet(), cx, 106, { align: 'center' });

    doc.setFont('times', 'normal'); doc.setFontSize(12.5); doc.setTextColor(51, 65, 85);
    const para = `a réussi, le ${fmtDateLongue(r.date)}, les épreuves de compréhension de l’évaluation en ligne des acquis en néerlandais (niveau ${r.niveau}), organisée dans le cadre d’une procédure de valorisation des acquis.`;
    const lignes = doc.splitTextToSize(para, 140);
    doc.text(lignes, cx, 118, { align: 'center', lineHeightFactor: 1.45 });

    // Tableau des résultats
    let y = 118 + lignes.length * 6.6 + 8;
    const x0 = 28, cols = [70, 28, 28, 28], larg = 154;
    doc.setFillColor(241, 245, 250); doc.rect(x0, y, larg, 9, 'F');
    doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5); doc.setTextColor(30, 41, 59);
    const entetes = ['Compétence', 'Résultat', 'Seuil', 'Statut'];
    let x = x0;
    entetes.forEach((t, i) => { doc.text(t, i === 0 ? x + 3 : x + cols[i] / 2, y + 6, { align: i === 0 ? 'left' : 'center' }); x += cols[i]; });
    y += 9;
    const ligneTab = (label, nl, b) => {
      doc.setDrawColor(226, 232, 240); doc.setLineWidth(0.3); doc.line(x0, y + 12, x0 + larg, y + 12);
      doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(30, 41, 59);
      doc.text(label, x0 + 3, y + 5.5);
      doc.setFontSize(8); doc.setTextColor(...GRIS_CLAIR); doc.text(nl, x0 + 3, y + 9.6);
      let xx = x0 + cols[0];
      doc.setFont('helvetica', 'bold'); doc.setFontSize(10.5); doc.setTextColor(30, 41, 59);
      doc.text(`${b.score}/${b.sur}`, xx + cols[1] / 2, y + 7.5, { align: 'center' }); xx += cols[1];
      doc.setFont('helvetica', 'normal'); doc.setTextColor(...GRIS);
      doc.text(`${r.seuil}/10`, xx + cols[2] / 2, y + 7.5, { align: 'center' }); xx += cols[2];
      doc.setFont('helvetica', 'bold'); doc.setTextColor(...(b.reussi ? [4, 120, 87] : [185, 28, 28]));
      doc.text(b.reussi ? 'Réussi' : 'Non atteint', xx + cols[3] / 2, y + 7.5, { align: 'center' });
      y += 12;
    };
    ligneTab('Compréhension à la lecture', 'Leesvaardigheid', r.lecture);
    ligneTab('Compréhension à l’audition', 'Luistervaardigheid', r.ecoute);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(30, 41, 59);
    doc.text('Production écrite', x0 + 3, y + 5.5);
    doc.setFontSize(8); doc.setTextColor(...GRIS_CLAIR); doc.text('Schrijfvaardigheid', x0 + 3, y + 9.6);
    doc.setFont('helvetica', 'italic'); doc.setFontSize(10); doc.setTextColor(...GRIS);
    doc.text('Transmise au professeur pour évaluation', x0 + cols[0] + (larg - cols[0]) / 2, y + 7.5, { align: 'center' });
    y += 12;
    doc.setDrawColor(...MARINE); doc.setLineWidth(0.4); doc.line(x0, y, x0 + larg, y);

    y += 9;
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(100, 116, 139);
    const note = doc.splitTextToSize('Cette attestation porte sur les épreuves de compréhension (lecture et audition). La production écrite est évaluée par le professeur. La décision de dispense relève du Conseil des études.', larg);
    doc.text(note, x0, y, { lineHeightFactor: 1.4 });

    // Date, code, signature
    const yb = 236;
    doc.setFontSize(10); doc.setTextColor(51, 65, 85);
    doc.text(`Fait le ${fmtDateCourte(r.date)}`, x0, yb);
    doc.text('Code de vérification :', x0, yb + 6);
    doc.setFont('courier', 'bold'); doc.setTextColor(...MARINE); doc.text(r.code, x0 + 37, yb + 6);
    doc.setFont('helvetica', 'normal'); doc.setTextColor(51, 65, 85);
    doc.text('Le professeur', 182, yb, { align: 'right' });
    doc.setDrawColor(...GRIS_CLAIR); doc.setLineWidth(0.3); doc.line(132, yb + 19, 182, yb + 19);
    if (CFG.nomProfesseur) doc.text(CFG.nomProfesseur, 182, yb + 24, { align: 'right' });

    // Sceau
    doc.setDrawColor(...ORANJE); doc.setLineWidth(0.8); doc.circle(cx, yb + 12, 11, 'S');
    doc.setLineWidth(0.3); doc.circle(cx, yb + 12, 9, 'S');
    doc.setFont('helvetica', 'bold'); doc.setTextColor(...ORANJE); doc.setFontSize(13);
    doc.text('NL', cx, yb + 12, { align: 'center' });
    doc.setFontSize(8); doc.text(r.niveau, cx, yb + 17, { align: 'center' });

    doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...GRIS_CLAIR);
    doc.text(`Document généré automatiquement le ${fmtDateHeure(r.date)} — copie transmise à ${etat.etudiant.emailProf}.`, cx, 278, { align: 'center' });

    doc.save(nomFichier('Attestation', 'pdf'));
    toast('Attestation téléchargée.', 'succes');
  }

  function imprimerAttestation() {
    const zone = $('#zone-impression');
    zone.innerHTML = htmlAttestation();
    document.body.classList.add('impression-attestation');
    const fin = () => { document.body.classList.remove('impression-attestation'); window.removeEventListener('afterprint', fin); };
    window.addEventListener('afterprint', fin);
    window.print();
    setTimeout(fin, 60000);
  }

  /* ------------------------------------------------------------------
     14. Rapports et e-mails (HTML avec styles en ligne)
     ------------------------------------------------------------------ */
  const TD = 'padding:7px 9px;border-bottom:1px solid #e2e8f0;vertical-align:top;font-size:13px';
  function cadreEmail(titre, contenu) {
    return `<div style="background:#f1f5f9;padding:22px 10px;font-family:Arial,Helvetica,sans-serif;color:#1e293b">
<div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
<div style="background:#1a2e49;color:#ffffff;padding:18px 22px"><div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#ffb070">${esc(CFG.etablissement)}</div><div style="font-size:19px;font-weight:bold;margin-top:4px">${titre}</div></div>
<div style="padding:22px">${contenu}</div>
<div style="padding:12px 22px;background:#f8fafc;color:#64748b;font-size:11.5px">${esc(CFG.intitule)} — message généré automatiquement.</div>
</div></div>`;
  }
  const h2 = (t) => `<h2 style="font-size:15px;color:#1a2e49;margin:24px 0 8px;border-bottom:2px solid #f86512;padding-bottom:4px">${t}</h2>`;
  const tableInfos = (lignes) => `<table style="width:100%;border-collapse:collapse">${lignes.map(([k, v]) => `<tr><td style="${TD};color:#64748b;width:38%">${k}</td><td style="${TD}">${v}</td></tr>`).join('')}</table>`;
  const statut = (b) => `<strong style="color:${b.reussi ? '#047857' : '#b91c1c'}">${b.score}/${b.sur} — ${b.reussi ? 'seuil atteint' : 'seuil non atteint'}</strong>`;
  const blocTexte = (t) => `<div style="white-space:pre-wrap;font-family:Georgia,serif;font-size:14px;line-height:1.6;background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px 14px">${t ? esc(t) : '<em>(texte vide)</em>'}</div>`;
  function parNiveau(detail) {
    const m = {};
    detail.forEach((x) => { const k = x.niveau || '—'; m[k] = m[k] || [0, 0]; m[k][1]++; if (x.juste) m[k][0]++; });
    return Object.keys(m).sort().map((k) => `${k} : ${m[k][0]}/${m[k][1]}`).join(' · ');
  }
  const libelleModeAudio = () => (etat.modeAudio === 'fichier' ? 'fichier audio' : etat.modeAudio === 'synthese' ? `voix de synthèse${Lecteur.voix && Lecteur.voix.F ? ' (' + esc(Lecteur.voix.F.name) + ')' : ''}` : 'non écouté');

  function sujetProf() {
    const r = etat.resultats;
    return `[Test NL ${r.niveau}] ${etat.etudiant.nom.toUpperCase()} ${etat.etudiant.prenom} — lecture ${r.lecture.score}/${r.lecture.sur}, audition ${r.ecoute.score}/${r.ecoute.sur} — ${r.reussite ? 'seuils atteints' : 'seuil non atteint'}`;
  }
  const sujetEtudiant = () => `Vos résultats — test de néerlandais ${etat.resultats.niveau} (valorisation des acquis)`;

  function htmlEmailProf() {
    const r = etat.resultats, s = etat.etudiant, d = D(), i = etat.integrite;
    const detail = (b) => `<table style="width:100%;border-collapse:collapse"><tr style="background:#f1f5fa"><th style="${TD};text-align:left;width:24px">N°</th><th style="${TD};text-align:left;width:30px">Niv.</th><th style="${TD};text-align:left">Question et réponse de l’étudiant</th><th style="${TD};width:24px"></th></tr>${b.detail.map((x) => `<tr>
      <td style="${TD};color:#64748b">${x.n}</td><td style="${TD};color:#64748b">${esc(x.niveau)}</td>
      <td style="${TD}">${esc(x.question)}<br><span style="color:${x.juste ? '#047857' : '#b91c1c'}">→ ${x.reponse == null ? '<em>sans réponse</em>' : esc(x.reponse)}</span>${x.juste ? '' : `<br><span style="color:#64748b">Attendu : ${esc(x.attendue)}</span>`}</td>
      <td style="${TD};text-align:center;font-weight:bold;color:${x.juste ? '#047857' : '#b91c1c'}">${x.juste ? '✔' : '✘'}</td></tr>`).join('')}</table>`;
    const criteres = [
      ['Réalisation de la tâche : toutes les étapes de la consigne sont traitées', 3],
      ['Cohérence et registre : texte structuré, connecteurs, ton adapté', 2],
      ['Vocabulaire : étendue et précision', 2],
      ['Grammaire : ordre des mots, conjugaison, temps', 2],
      ['Orthographe et ponctuation', 1],
    ];
    const contenu = `
<p style="margin:0 0 6px;font-size:15px"><strong>${esc(nomComplet())}</strong> a terminé le test de néerlandais <strong>${r.niveau}</strong>.</p>
<p style="margin:0;padding:10px 12px;border-radius:8px;font-size:14px;background:${r.reussite ? '#ecfdf5' : '#fef2f2'};color:${r.reussite ? '#065f46' : '#991b1b'}"><strong>${r.reussite ? 'Seuils de compréhension atteints — attestation générée.' : 'Seuil de compréhension non atteint.'}</strong> Production écrite à évaluer ci-dessous.</p>
${h2('Identification')}
${tableInfos([
  ['Étudiant', esc(nomComplet())],
  ['E-mail', `<a href="mailto:${esc(s.email)}">${esc(s.email)}</a>`],
  ['Niveau visé', `${r.niveau} — ${esc(d.libelle)}`],
  ['Date', fmtDateHeure(r.date)],
  ['Durée', `${formatDuree(r.dureeMs)}${etat.finAuto ? ' (clôture automatique : temps écoulé)' : ''}`],
  ['Tentative sur cet appareil', `n° ${etat.tentative}`],
  ['Code de vérification', `<strong style="font-family:'Courier New',monospace">${r.code}</strong>`],
])}
${h2('Résultats')}
${tableInfos([
  ['Compréhension à la lecture', `${statut(r.lecture)}<br><span style="color:#64748b;font-size:12px">par niveau : ${parNiveau(r.lecture.detail)}</span>`],
  ['Compréhension à l’audition', `${statut(r.ecoute)}<br><span style="color:#64748b;font-size:12px">par niveau : ${parNiveau(r.ecoute.detail)}</span>`],
  ['Seuil', `${r.seuil}/10 par épreuve`],
  ['Production écrite', `${r.ecriture.mots} mots (attendu : ${r.ecriture.min}–${r.ecriture.max}) — à évaluer`],
])}
${h2('Déroulement')}
${tableInfos([
  ['Sorties de la page', `${i.sortiesOnglet}${i.sortiesOnglet ? ` (durée totale hors page : ${formatDuree(i.tempsHorsOngletMs)})` : ''}`],
  ['Collages bloqués (écriture)', String(i.collagesBloques)],
  ['Écoutes utilisées', `${etat.ecoutes}${CFG.ecoutesMax ? '/' + CFG.ecoutesMax : ''} — ${libelleModeAudio()}`],
  ['Engagement sur l’honneur', etat.engagement ? 'accepté' : 'non'],
])}
${h2(`Production écrite — ${esc(d.ecriture.titre)}`)}
<p style="font-size:13px;color:#475569;margin:0 0 8px">Consigne : ${esc(d.ecriture.consigne)}</p>
${blocTexte(r.ecriture.texte)}
<p style="font-size:13px;color:#475569;margin:14px 0 6px"><strong>Étapes attendues :</strong></p>
<ol style="font-size:13px;color:#334155;margin:0 0 6px;padding-left:20px">${d.ecriture.etapes.map((e) => `<li>${esc(e.nl)} <span style="color:#94a3b8">— ${esc(e.fr)}</span></li>`).join('')}</ol>
<p style="font-size:13px;color:#475569;margin:14px 0 6px"><strong>Grille d’évaluation (à compléter) :</strong></p>
<table style="width:100%;border-collapse:collapse">${criteres.map(([c, p]) => `<tr><td style="${TD}">${c}</td><td style="${TD};width:70px;text-align:right;white-space:nowrap">…… / ${p}</td></tr>`).join('')}<tr><td style="${TD};font-weight:bold">Total (seuil suggéré : 5/10)</td><td style="${TD};text-align:right;font-weight:bold;white-space:nowrap">…… / 10</td></tr></table>
${h2('Détail — compréhension à la lecture')}
${detail(r.lecture)}
${h2('Détail — compréhension à l’audition')}
${detail(r.ecoute)}`;
    return cadreEmail(`Test de néerlandais ${r.niveau} — ${esc(nomComplet())}`, contenu);
  }

  function htmlEmailEtudiant() {
    const r = etat.resultats, s = etat.etudiant;
    const contenu = `
<p style="font-size:15px;margin:0 0 12px">Bonjour ${esc(s.prenom)},</p>
<p style="font-size:14px;line-height:1.6;margin:0 0 12px">Voici les résultats de votre test de néerlandais (niveau <strong>${r.niveau}</strong>) passé le ${fmtDateHeure(r.date)}.</p>
${tableInfos([
  ['Compréhension à la lecture', statut(r.lecture)],
  ['Compréhension à l’audition', statut(r.ecoute)],
  ['Production écrite', `${r.ecriture.mots} mots — évaluée par votre professeur`],
  ['Code de vérification', `<strong style="font-family:'Courier New',monospace">${r.code}</strong>`],
])}
<p style="font-size:14px;line-height:1.6;margin:16px 0;padding:12px 14px;border-radius:8px;background:${r.reussite ? '#ecfdf5' : '#f8fafc'};color:${r.reussite ? '#065f46' : '#334155'}">${r.reussite
  ? '<strong>Félicitations !</strong> Vous avez atteint le seuil de réussite dans les deux épreuves de compréhension. Votre attestation figure ci-dessous. La décision finale de dispense sera prise après l’évaluation de votre production écrite.'
  : `Le seuil de ${r.seuil}/10 n’est pas atteint dans toutes les épreuves de compréhension. Votre professeur analysera vos résultats et votre production écrite, puis reprendra contact avec vous.`}</p>
${r.reussite ? `${h2('Votre attestation')}${htmlAttestation()}<p style="font-size:12px;color:#64748b;margin:8px 0 0">La version PDF peut être téléchargée depuis la page de résultats du test (sur le même appareil).</p>` : ''}
${h2('Votre production écrite')}
${blocTexte(r.ecriture.texte)}
<p style="font-size:13px;color:#64748b;margin:18px 0 0">Pour toute question, contactez votre professeur : <a href="mailto:${esc(s.emailProf)}">${esc(s.emailProf)}</a>.</p>`;
    return cadreEmail('Vos résultats — test de néerlandais', contenu);
  }

  /* Rapport téléchargeable par l'étudiant (sans le corrigé) */
  function documentRapport() {
    const r = etat.resultats, s = etat.etudiant, d = D(), i = etat.integrite;
    const reponses = (sec) => `<ol style="font-size:13px;padding-left:20px;margin:0">${r[sec].detail.map((x) => `<li style="margin:3px 0">${esc(x.question)} <br><span style="color:#1a2e49">→ ${x.reponse == null ? '<em>sans réponse</em>' : esc(x.reponse)}</span></li>`).join('')}</ol>`;
    const contenu = `
<p style="font-size:14px;margin:0 0 10px">Rapport du test de néerlandais — à transmettre au professeur si l’envoi automatique a échoué.</p>
${tableInfos([
  ['Étudiant', `${esc(nomComplet())} — ${esc(s.email)}`],
  ['Niveau visé', r.niveau],
  ['Date et durée', `${fmtDateHeure(r.date)} — ${formatDuree(r.dureeMs)}${etat.finAuto ? ' (temps écoulé)' : ''}`],
  ['Compréhension à la lecture', statut(r.lecture)],
  ['Compréhension à l’audition', statut(r.ecoute)],
  ['Production écrite', `${r.ecriture.mots} mots`],
  ['Sorties de la page / collages bloqués', `${i.sortiesOnglet} / ${i.collagesBloques}`],
  ['Écoutes utilisées', `${etat.ecoutes}${CFG.ecoutesMax ? '/' + CFG.ecoutesMax : ''}`],
  ['Tentative sur cet appareil', `n° ${etat.tentative}`],
  ['Code de vérification', `<strong style="font-family:'Courier New',monospace">${r.code}</strong>`],
])}
${h2(`Production écrite — ${esc(d.ecriture.titre)}`)}
${blocTexte(r.ecriture.texte)}
${h2('Réponses choisies — lecture')}${reponses('lecture')}
${h2('Réponses choisies — audition')}${reponses('ecoute')}`;
    return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Rapport — ${esc(nomComplet())} — ${r.niveau}</title></head><body style="margin:0">${cadreEmail(`Rapport — ${esc(nomComplet())} (${r.niveau})`, contenu)}</body></html>`;
  }

  function lienMailto() {
    const r = etat.resultats, s = etat.etudiant;
    const corps = [
      `Test de néerlandais ${r.niveau} — valorisation des acquis`,
      '',
      `Étudiant : ${nomComplet()} (${s.email})`,
      `Date : ${fmtDateHeure(r.date)} — durée : ${formatDuree(r.dureeMs)}`,
      `Compréhension à la lecture : ${r.lecture.score}/${r.lecture.sur}`,
      `Compréhension à l'audition : ${r.ecoute.score}/${r.ecoute.sur}`,
      `Seuils atteints : ${r.reussite ? 'oui' : 'non'}`,
      `Code de vérification : ${r.code}`,
      `Sorties de la page : ${etat.integrite.sortiesOnglet} — tentative n° ${etat.tentative}`,
      '',
      `Production écrite (${r.ecriture.mots} mots) :`,
      r.ecriture.texte || '(vide)',
      '',
      "(Message envoyé manuellement : l'envoi automatique n'a pas fonctionné.)",
    ].join('\r\n');
    return `mailto:${s.emailProf}?cc=${encodeURIComponent(s.email)}&subject=${encodeURIComponent(sujetProf())}&body=${encodeURIComponent(corps)}`;
  }

  function apercu(titre, html) {
    const doc = `<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0">${html}</body></html>`;
    modale({ titre, large: true, html: `<iframe title="${esc(titre)}" sandbox="" class="h-[65vh] w-full rounded-xl border border-slate-200 bg-white" srcdoc="${esc(doc)}"></iframe>` });
  }

  /* ------------------------------------------------------------------
     15. Envoi des résultats (EmailJS, Google Apps Script ou démonstration)
     ------------------------------------------------------------------ */
  function modeEnvoi() {
    const e = CFG.envoi || {}, ej = e.emailjs || {};
    if (ej.publicKey && ej.serviceId && ej.templateId) return 'emailjs';
    if (e.appsScriptUrl) return 'appsscript';
    return 'simulation';
  }
  function messageErreur(err) {
    if (!err) return 'erreur inconnue';
    if (err.text) return `${err.text}${err.status ? ` (code ${err.status})` : ''}`;
    if (err.message === 'Failed to fetch' || err.name === 'TypeError') return 'connexion impossible (réseau ou service bloqué)';
    return err.message || String(err);
  }

  async function envoyerResultats(forcer) {
    const e = etat.envoi;
    if (!etat.resultats) return;
    if (!forcer && ['envoye', 'simulation', 'en_cours'].includes(e.statut)) { majCarteEnvoi(); return; }
    const mode = modeEnvoi();
    e.mode = mode;
    if (mode === 'simulation') { e.statut = 'simulation'; sauver(); majCarteEnvoi(); return; }
    e.statut = 'en_cours'; e.erreur = ''; sauver(); majCarteEnvoi();
    try {
      if (mode === 'emailjs') await envoyerEmailJS();
      else await envoyerAppsScript();
      e.statut = 'envoye'; e.date = Date.now();
    } catch (err) {
      e.statut = 'erreur'; e.erreur = messageErreur(err);
    }
    sauver(); majCarteEnvoi();
  }

  async function envoyerEmailJS() {
    try { await chargerScript(LIB.emailjs); } catch (err) { throw new Error('le service EmailJS n’a pas pu être chargé (réseau ou bloqueur de publicités)'); }
    if (!window.emailjs) throw new Error('le service EmailJS est indisponible');
    const c = CFG.envoi.emailjs, s = etat.etudiant;
    const options = { publicKey: c.publicKey };
    if (!etat.envoi.prof) {
      await window.emailjs.send(c.serviceId, c.templateId, {
        to_email: s.emailProf, to_name: 'Professeur', reply_to: s.email,
        from_name: `Test de néerlandais — ${nomComplet()}`, subject: sujetProf(), html_message: htmlEmailProf(),
      }, options);
      etat.envoi.prof = Date.now(); sauver(); majCarteEnvoi();
    }
    if (!etat.envoi.etudiant) {
      await window.emailjs.send(c.serviceId, c.templateId, {
        to_email: s.email, to_name: s.prenom, reply_to: s.emailProf,
        from_name: 'Test de néerlandais', subject: sujetEtudiant(), html_message: htmlEmailEtudiant(),
      }, options);
      etat.envoi.etudiant = Date.now(); sauver();
    }
  }

  async function envoyerAppsScript() {
    const r = etat.resultats, s = etat.etudiant;
    const charge = {
      version: 1,
      etudiant: { prenom: s.prenom, nom: s.nom, email: s.email, emailProf: s.emailProf },
      niveau: r.niveau,
      resultats: {
        lecture: `${r.lecture.score}/${r.lecture.sur}`, ecoute: `${r.ecoute.score}/${r.ecoute.sur}`,
        reussite: r.reussite, mots: r.ecriture.mots, code: r.code, date: new Date(r.date).toISOString(),
        dureeMinutes: Math.round(r.dureeMs / 6000) / 10, finAuto: etat.finAuto,
      },
      integrite: etat.integrite,
      ecoutes: etat.ecoutes,
      tentative: etat.tentative,
      production: r.ecriture.texte,
      sujetProf: sujetProf(),
      sujetEtudiant: sujetEtudiant(),
      htmlProf: htmlEmailProf(),
      htmlEtudiant: htmlEmailEtudiant(),
      htmlAttestation: r.reussite ? htmlAttestation() : '',
      nomFichierAttestation: r.reussite ? nomFichier('Attestation', 'pdf') : '',
    };
    const rep = await fetch(CFG.envoi.appsScriptUrl, { method: 'POST', body: JSON.stringify(charge) });
    let donnees = null;
    try { donnees = await rep.json(); } catch (e) { /* réponse non JSON */ }
    if (!rep.ok || !donnees || !donnees.ok) throw new Error((donnees && donnees.erreur) || `réponse inattendue du serveur (${rep.status})`);
    etat.envoi.prof = Date.now(); etat.envoi.etudiant = Date.now();
  }

  function majCarteEnvoi() {
    const el = $('#carte-envoi');
    if (!el || !etat.resultats) return;
    const e = etat.envoi, s = etat.etudiant;
    const boutonsSecours = `
      <div class="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <button type="button" data-action="rapport" class="${btn('secondaire')}">${ico('telecharger', 'h-4 w-4')} Télécharger le rapport</button>
        <a href="${esc(lienMailto())}" class="${btn('secondaire')}">${ico('email', 'h-4 w-4')} Envoyer via ma messagerie</a>
      </div>`;
    const apercus = (e.statut === 'simulation' || DEMO) ? `
      <div class="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <button type="button" data-action="apercu-etudiant" class="${btn('secondaire', 'py-2')}">${ico('oeil', 'h-4 w-4')} Aperçu de l’e-mail étudiant</button>
        ${DEMO ? `<button type="button" data-action="apercu-prof" class="${btn('secondaire', 'py-2')}">${ico('oeil', 'h-4 w-4')} Aperçu de l’e-mail professeur</button>` : ''}
      </div>` : '';
    let html = '';
    if (e.statut === 'en_cours' || e.statut === 'attente') {
      html = `<div class="${C.carte} flex items-center gap-3 p-5 text-slate-700"><span class="spinner text-marine-600" aria-hidden="true"></span><p><strong>Envoi de vos résultats…</strong> Ne fermez pas cette page.</p></div>`;
    } else if (e.statut === 'envoye') {
      html = `<div class="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">${ico('check', 'mt-0.5 h-5 w-5 shrink-0')}<div><p class="font-semibold">Résultats envoyés par e-mail</p><p class="mt-1 text-sm">À vous (<strong>${esc(s.email)}</strong>) et à votre professeur (<strong>${esc(s.emailProf)}</strong>). Pensez à vérifier vos courriers indésirables.</p>${apercus}</div></div>`;
    } else if (e.statut === 'erreur') {
      html = `<div class="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">${ico('alerte', 'mt-0.5 h-5 w-5 shrink-0')}<div class="min-w-0 flex-1"><p class="font-semibold">L’envoi automatique n’a pas abouti</p><p class="mt-1 text-sm">Détail : ${esc(e.erreur)}.${e.prof ? ' Le professeur a bien reçu ses résultats ; seul votre exemplaire manque.' : ''} Réessayez ou utilisez une solution de secours ci-dessous.</p>
        <button type="button" data-action="reessayer" class="${btn('primaire', 'mt-4')}">${ico('recharger', 'h-4 w-4')} Réessayer l’envoi</button>${boutonsSecours}</div></div>`;
    } else if (e.statut === 'simulation') {
      html = `<div class="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">${ico('info', 'mt-0.5 h-5 w-5 shrink-0')}<div class="min-w-0 flex-1"><p class="font-semibold">Mode démonstration : aucun e-mail n’a été envoyé</p><p class="mt-1 text-sm leading-relaxed">L’envoi automatique n’est pas encore configuré (voir le fichier <code>config.js</code> et le guide <code>README.md</code>). Pour transmettre vos résultats, téléchargez le rapport et envoyez-le à <strong>${esc(s.emailProf)}</strong>, ou utilisez votre messagerie.</p>${boutonsSecours}${apercus}</div></div>`;
    }
    el.innerHTML = html;
  }

  async function nouveauTest() {
    const ok = await modale({
      titre: 'Commencer un nouveau test ?',
      html: '<p>Les résultats affichés seront effacés de ce navigateur (ils restent dans les e-mails envoyés). Téléchargez d’abord votre attestation si nécessaire.</p>',
      boutons: [{ label: 'Annuler', style: 'secondaire', valeur: false }, { label: 'Nouveau test', style: 'danger', valeur: true }],
    });
    if (!ok) return;
    Lecteur.reinitialiser();
    stockage.effacer(CLE_ETAT);
    etat = etatInitial();
    allerA('accueil');
  }

  /* Mode démonstration pour le professeur : index.html?demo */
  function remplirDemo() {
    const d = D();
    ['lecture', 'ecoute'].forEach((sec) => d[sec].questions.forEach((q, i) => { etat.reponses[sec][i] = Math.random() < 0.75 ? 0 : 1 + Math.floor(Math.random() * 3); }));
    etat.production = etat.etudiant.niveau === 'B1'
      ? 'Geachte mevrouw Hendrickx,\n\nHartelijk dank voor uw bericht. Het spijt ons echt dat uw bestelling te laat kwam en dat de stoel beschadigd was. Wij werkten met een nieuwe transportfirma en er stond een fout adres op het etiket. Bovendien werd de stoel tijdens het transport beschadigd.\n\nWij stellen u twee oplossingen voor: wij sturen u binnen twee werkdagen gratis een nieuwe stoel, of wij betalen u het volledige bedrag terug. Welke oplossing verkiest u? De beschadigde stoel wordt gratis bij u opgehaald.\n\nAls compensatie krijgt u een kortingsbon van 15 % voor uw volgende bestelling.\n\nU kunt ons bereiken op 03 456 78 90, van maandag tot vrijdag tussen 9 en 17 uur.\n\nMet vriendelijke groeten,\n\nSam Peeters\nMedewerker klantendienst'
      : 'Hallo Els,\n\nBedankt voor de uitnodiging. Helaas kan ik dinsdag om 10 uur niet komen, want ik heb een afspraak bij de dokter. Ik kan wel om 11 uur komen voor het broodje. Kun je me daarna het verslag sturen?\n\nIk heb ook een vraag over het nieuwe uurrooster: moeten we ook op zaterdag werken?\n\nGroetjes,\nSam';
    sauver(); render();
    toast('Mode démo : réponses et texte remplis automatiquement.', 'info');
  }

  /* ------------------------------------------------------------------
     16. Événements globaux et démarrage
     ------------------------------------------------------------------ */
  const ACTIONS = {
    'commencer': () => commencerTest(),
    'tester-son': () => testerSon(),
    'onglet-lecture': (el) => changerOngletLecture(el.dataset.vue),
    'aller-question': (el) => {
      const cible = document.getElementById(el.dataset.cible);
      if (!cible) return;
      cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const input = $('input', cible);
      if (input) setTimeout(() => input.focus({ preventScroll: true }), 350);
    },
    'lecture': () => Lecteur.basculer(),
    'terminer': () => demanderFin(),
    'pdf': () => telechargerPDF(),
    'imprimer': () => imprimerAttestation(),
    'reessayer': () => envoyerResultats(true),
    'rapport': () => telechargerFichier(nomFichier('Rapport', 'html'), documentRapport()),
    'apercu-prof': () => apercu('Aperçu — e-mail au professeur', htmlEmailProf()),
    'apercu-etudiant': () => apercu('Aperçu — e-mail à l’étudiant', htmlEmailEtudiant()),
    'nouveau-test': () => nouveauTest(),
    'demo-remplir': () => remplirDemo(),
  };

  function initialiser() {
    const app = $('#app');
    if (!CONTENU.A2 && !CONTENU.B1) {
      app.innerHTML = '<div class="rounded-xl border border-red-200 bg-red-50 p-5 text-red-800">Le fichier <code>contenu.js</code> est introuvable ou contient une erreur. Vérifiez qu’il est bien publié à côté de <code>index.html</code>.</div>';
      return;
    }

    app.addEventListener('click', (e) => {
      const nav = e.target.closest('[data-aller]');
      if (nav) {
        const cible = nav.dataset.aller;
        if (etat.etape === 'lecture' || etat.etape === 'ecoute') {
          const manque = D()[etat.etape].questions.length - nbRepondues(etat.etape);
          if (manque > 0 && ETAPES_TEST.includes(cible) && ETAPES_TEST.indexOf(cible) > ETAPES_TEST.indexOf(etat.etape)) {
            toast(`${manque} question${manque > 1 ? 's' : ''} sans réponse : vous pourrez y revenir.`, 'alerte');
          }
        }
        allerA(cible);
        return;
      }
      const act = e.target.closest('[data-action]');
      if (act && ACTIONS[act.dataset.action]) ACTIONS[act.dataset.action](act, e);
    });
    app.addEventListener('change', (e) => {
      if (e.target.matches('input[type=radio][data-q]')) repondre(e.target);
    });

    // Hauteur de l'en-tête (pour les éléments collants)
    const entete = $('#entete');
    const majHauteur = () => document.documentElement.style.setProperty('--hauteur-entete', entete.offsetHeight + 'px');
    majHauteur();
    if (window.ResizeObserver) new ResizeObserver(majHauteur).observe(entete);
    window.addEventListener('resize', () => { majHauteur(); ajusterAttestation(); });

    // Sorties de la page pendant le test
    let horsPageDepuis = null;
    document.addEventListener('visibilitychange', () => {
      if (!enTest()) return;
      if (document.hidden) { etat.integrite.sortiesOnglet++; horsPageDepuis = Date.now(); sauver(); }
      else if (horsPageDepuis) { etat.integrite.tempsHorsOngletMs += Date.now() - horsPageDepuis; horsPageDepuis = null; sauver(); majChrono(); }
    });
    window.addEventListener('beforeunload', (e) => {
      if (enTest() || etat.envoi.statut === 'en_cours') { e.preventDefault(); e.returnValue = ''; }
    });

    // Bouton de démonstration (professeur)
    if (DEMO) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'fixed bottom-4 left-4 z-40 rounded-full bg-oranje-500 px-4 py-2 text-xs font-bold text-white shadow-lg no-print';
      b.textContent = 'Démo : remplir';
      b.addEventListener('click', () => { if (enTest()) remplirDemo(); else toast('Commencez d’abord le test.', 'alerte'); });
      document.body.appendChild(b);
    }

    // Reprise d'un test enregistré
    const sauve = stockage.lire(CLE_ETAT);
    if (sauve && sauve.version === 1 && (sauve.etape === 'accueil' || CONTENU[sauve.etudiant && sauve.etudiant.niveau])) {
      etat = Object.assign(etatInitial(), sauve);
      if (etat.ordres === null && ETAPES_TEST.includes(etat.etape)) etat.etape = 'consignes';
    }
    if (enTest()) {
      const reste = tempsRestant();
      if (reste !== null && reste <= 0) { render(); terminerTest(true); return; }
      alertes.cinq = reste !== null && reste <= 5 * 60000;
      alertes.une = reste !== null && reste <= 60000;
      render();
      demarrerMinuteur();
      toast('Test en cours restauré. Le chronomètre a continué pendant votre absence.', 'info', 6000);
      return;
    }
    render();
    if (etat.etape === 'resultats' && ['en_cours', 'attente'].includes(etat.envoi.statut)) envoyerResultats(true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialiser);
  else initialiser();
})();
