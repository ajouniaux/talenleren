// Module 30 — Het bedrijf · L'entreprise et son vocabulaire
const { BORDER } = require('../lib');
const { floorPlan, ALL } = require('../plan');

const meta = { n: 30, slug: 'Het_bedrijf', title: 'Het bedrijf — L’entreprise et son vocabulaire', short: 'Het bedrijf', template: 'module_30_het_bedrijf.md' };

const DE = 'tx2'; // mot DE = bleu nuit  @@…@@
const HET = 'accent1'; // mot HET = orange  ##…##

// colore l'article : 'de laptop' → bleu nuit, 'het scherm' → orange
const art = (w) => (w.startsWith('het ') ? `**##het##** ${w.slice(4)}` : w.startsWith('de ') ? `**@@de@@** ${w.slice(3)}` : w);

function build(d) {
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const trapFrame = (s, h = 4.35) => {
    d.rect(s, 0.6, 1.7, 12.13, h, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
  };
  // l'organigramme (S26)
  const DEPTS = [['ledger', 'de boekhouding', 'la comptabilité', 'An, Karim'], ['busts-in-silhouette', 'de personeelsdienst', 'les RH', 'Sofie'], ['handshake', 'de verkoop', 'la vente', ''], ['shopping-cart', 'de aankoop', 'les achats', ''], ['chart-increasing', 'de marketing', 'le marketing', 'Lotte (stagiaire)'], ['laptop', 'de IT-dienst', 'l’informatique', '']];
  const orgChart = (s, x, y, w, h, o = {}) => {
    const n = DEPTS.length; const gap = o.gap ?? 0.12; const bw = (w - (n - 1) * gap) / n;
    const th = Math.min(0.75, h * 0.24); const dy = y + th + (o.mid ?? 0.45);
    const tw = Math.min(w * 0.4, 3.6);
    d.rect(s, x + (w - tw) / 2, y, tw, th, { fill: 'tx2', line: null, radius: 0.1 });
    d.t(s, o.small ? '**de directie**' : ['**de directie**', 'de zaakvoerder'], x + (w - tw) / 2, y, tw, th, { size: o.small ? 11 : 15, gap: 0, color: 'bg1', align: 'center', valign: 'middle' });
    const my = y + th + (dy - y - th) / 2;
    d.line(s, x + w / 2, y + th, x + w / 2, my, { color: 'accent5', lw: 1.5, arrow: false });
    d.line(s, x + bw / 2, my, x + w - bw / 2, my, { color: 'accent5', lw: 1.5, arrow: false });
    DEPTS.forEach(([il, nl, fr, who], i) => {
      const bx = x + i * (bw + gap);
      d.line(s, bx + bw / 2, my, bx + bw / 2, dy, { color: 'accent5', lw: 1.5, arrow: false });
      const bh = y + h - dy;
      d.rect(s, bx, dy, bw, bh, { fill: 'FFFFFF', line: 'accent2', lw: 1.5, radius: 0.08, shadow: !o.small });
      if (o.small) {
        d.t(s, nl.replace(/^de /, ''), bx + 0.01, dy, bw - 0.02, bh, { size: o.fs || 7, align: 'center', valign: 'middle' });
        return;
      }
      d.ill(s, il, bx + bw / 2 - 0.3, dy + 0.1, 0.6, 0.6);
      d.t(s, `//${art(nl)}//`, bx + 0.05, dy + 0.75, bw - 0.1, 0.62, { size: 14, align: 'center', valign: 'middle' });
      d.t(s, fr, bx + 0.05, dy + 1.35, bw - 0.1, 0.35, { size: 12, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      if (who) {
        d.rect(s, bx + 0.1, dy + bh - 0.5, bw - 0.2, 0.38, { fill: 'accent3', tr: 85, line: null, radius: 0.08 });
        d.t(s, who, bx + 0.1, dy + bh - 0.5, bw - 0.2, 0.38, { size: 11, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
      }
    });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Het bedrijf', sub: 'L’entreprise et son vocabulaire', line: 'Welkom bij Peeters & Co!',
    visual: (s) => {
      d.rect(s, 7.0, 0.95, 5.7, 3.95, { fill: 'FFFFFF', line: null, radius: 0.2, shadow: true });
      d.ill(s, 'office-building', 7.3, 1.2, 1.5, 1.5);
      d.t(s, ['**Welkom bij**', '**Peeters & Co!**'], 8.95, 1.2, 3.6, 1.5, { size: 24, gap: 0, color: 'tx2', valign: 'middle', head: true });
      const bx = 7.3; const by = 3.0;
      d.rect(s, bx + 1.85, by, 1.45, 0.5, { fill: 'tx2', line: null, radius: 0.08 });
      d.t(s, 'de directie', bx + 1.85, by, 1.45, 0.5, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.line(s, bx + 2.57, by + 0.5, bx + 2.57, by + 0.75, { color: 'accent5', lw: 1.5, arrow: false });
      d.line(s, bx + 0.6, by + 0.75, bx + 4.55, by + 0.75, { color: 'accent5', lw: 1.5, arrow: false });
      ['boekhouding', 'verkoop', 'marketing'].forEach((t, i) => {
        const x = bx + i * 1.98;
        d.line(s, x + 0.6, by + 0.75, x + 0.6, by + 1.0, { color: 'accent5', lw: 1.5, arrow: false });
        d.rect(s, x, by + 1.0, 1.25, 0.5, { fill: 'FFFFFF', line: 'accent2', lw: 1.5, radius: 0.08 });
        d.t(s, t, x, by + 1.0, 1.25, 0.5, { size: 11, align: 'center', valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaSitemap', h: 'Nommer', t: 'Je nomme les services et les fonctions : //de boekhouding, de verkoper.//', color: 'accent2' },
      { icon: 'FaMapMarkedAlt', h: 'Se repérer', t: 'Je me repère dans le bâtiment : //De vergaderzaal is de eerste deur links.//', color: 'accent3' },
      { icon: 'FaFileContract', h: 'Parler du travail', t: 'Je parle du contrat, des horaires, des congés : //Ik werk deeltijds.//', color: 'accent1' },
    ],
    band: 'Ce vocabulaire sert dans tout le bloc 7 : se déplacer (M31), se présenter au travail (M32).',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Vous comprenez déjà !' });
    const W = [['man-office-worker', 'de directeur'], ['woman-office-worker', 'de manager'], ['page-facing-up', 'het contract'], ['laptop', 'de laptop'], ['printer', 'de printer'], ['bellhop-bell', 'de receptie'], ['bar-chart', 'het project'], ['busts-in-silhouette', 'het team'], ['receipt', 'de factuur'], ['fork-and-knife-with-plate', 'de kantine'], ['money-bag', 'het salaris'], ['student', 'de stagiair']];
    const cw = (12.13 - 3 * 0.18) / 4; const ch = 1.05;
    W.forEach(([il, w], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.18); const y = 1.7 + Math.floor(i / 4) * (ch + 0.15);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: w.startsWith('het') ? HET : DE, lw: 1.5, radius: 0.1, shadow: true });
      d.ill(s, il, x + 0.15, y + 0.2, 0.65, 0.65);
      d.t(s, `//${art(w)}//`, x + 0.9, y, cw - 1.0, ch, { size: 20, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.5, 12.13, 1.3, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.7, 0.9, 0.9);
    d.t(s, ['Devinez le sens ! Quels mots ressemblent au français ?', 'Attention : certains mots trompent (diapo 14). Et retenez l’article : //**##het##** contract, **##het##** team//.'], 2.0, 5.5, 10.5, 1.3, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 types d'entreprises
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'VOCABULAIRE', title: 'Les types d’entreprises' });
    const T = [['office-building', 'het bedrijf', 'l’entreprise (courant)'], ['briefcase', 'de onderneming', 'l’entreprise (formel)'], ['convenience-store', 'de kmo', 'la PME'], ['globe-showing-europe-africa', 'de multinational', 'la multinationale'], ['technologist', 'de zelfstandige', 'l’indépendant·e'], ['classical-building', 'de overheid', 'le secteur public'], ['handshake', 'de vzw', 'l’ASBL']];
    const cw = (12.13 - 6 * 0.12) / 7;
    T.forEach(([il, nl, fr], i) => {
      const x = 0.6 + i * (cw + 0.12);
      d.rect(s, x, 1.7, cw, 2.3, { fill: 'FFFFFF', line: nl.startsWith('het') ? HET : DE, lw: 1.5, radius: 0.1, shadow: true });
      d.ill(s, il, x + cw / 2 - 0.4, 1.85, 0.8, 0.8);
      d.t(s, `//${art(nl)}//`, x + 0.05, 2.75, cw - 0.1, 0.65, { size: 15, align: 'center', valign: 'middle' });
      d.t(s, fr, x + 0.05, 3.4, cw - 0.1, 0.5, { size: 11, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.t(s, 'FORMES JURIDIQUES (Belgique)', 0.6, 4.2, 6, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2 });
    [['SA', 'nv', 'naamloze vennootschap'], ['SRL', 'bv', 'besloten vennootschap (depuis 2019)'], ['ASBL', 'vzw', 'vereniging zonder winstoogmerk']].forEach(([fr, nl, full], i) => {
      const x = 0.6 + i * 4.1;
      d.rect(s, x, 4.6, 3.93, 1.1, { fill: 'bg2', line: BORDER, radius: 0.1 });
      d.t(s, `**${fr}** = **${nl}**`, x + 0.15, 4.65, 3.65, 0.5, { size: 20, color: 'tx2', valign: 'middle' });
      d.t(s, `//${full}//`, x + 0.15, 5.12, 3.65, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    });
    band(s, '//Ik werk bij een kmo. · Ik ben zelfstandige. · Ik werk bij de overheid.// — NL : //het mkb// (= //de kmo//)', 6.0, 0.75, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 5 S26 organigramme
  {
    const s = d.page({ g: 5, tag: 'VOCABULAIRE', title: 'L’organigramme de Peeters & Co' });
    orgChart(s, 0.6, 1.65, 12.13, 3.95);
    d.rect(s, 0.6, 5.75, 12.13, 1.05, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, ['//Op welke afdeling werk je? — Ik werk **op** de boekhouding. · Ik werk **bij** de personeelsdienst.//', '//de afdeling// = le service ; en Belgique aussi //de dienst// : //de klantendienst// (service clientèle), //het onthaal// (l’accueil)'], 0.85, 5.75, 11.7, 1.05, { size: 16, gap: 4, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 6 fonctions
  {
    const s = d.page({ g: 6, tag: 'VOCABULAIRE', title: 'Les fonctions' });
    const F = [['man-office-worker', 'de directeur', 'de directrice', 'directeur·rice'], ['woman-office-worker', 'de boekhouder', 'de boekhoudster', 'comptable'], ['handshake', 'de verkoper', 'de verkoopster', 'vendeur·euse'], ['busts-in-silhouette', 'de medewerker', 'de medewerkster', 'collaborateur·rice'], ['person-tipping-hand', 'de onthaalmedewerker', '(-ster)', 'réceptionniste'], ['technologist', 'de informaticus', 'de IT’er', 'informaticien·ne'], ['student', 'de stagiair', 'de stagiaire', 'stagiaire'], ['bust-in-silhouette', 'het afdelingshoofd', '', 'chef·fe de service']];
    const cw = (12.13 - 3 * 0.18) / 4; const ch = 1.95;
    F.forEach(([il, m, f, fr], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.18); const y = 1.7 + Math.floor(i / 4) * (ch + 0.15);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: m.startsWith('het') ? HET : DE, lw: 1.5, radius: 0.1, shadow: true });
      d.ill(s, il, x + 0.12, y + 0.15, 0.7, 0.7);
      d.t(s, fr, x + 0.9, y + 0.15, cw - 1.0, 0.7, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, [`//${art(m)}//`, f ? `//${f.startsWith('(') ? f : art(f)}//` : ''], x + 0.15, y + 0.95, cw - 0.3, 0.95, { size: 16, gap: 2, valign: 'middle' });
    });
    band(s, '//Wat doe je? — Ik ben boekhouder.// (sans //een//, M2) · féminin : //-ster, -e, -rice// (M7)', 6.0, 0.75, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 7 werkgever werknemer
  {
    const s = d.page({ g: 7, tag: 'VOCABULAIRE', title: 'Werkgever, werknemer… les rôles' });
    d.rect(s, 0.6, 1.7, 6.6, 3.5, { fill: 'bg1', line: BORDER, lw: 1, radius: 0.1, shadow: true });
    d.ill(s, 'man-office-worker', 0.9, 1.95, 1.2, 1.2);
    d.ill(s, 'woman-office-worker', 5.7, 1.95, 1.2, 1.2);
    d.line(s, 2.3, 2.35, 5.5, 2.35, { color: 'accent3', lw: 3.5 });
    d.t(s, '//geeft// werk →', 2.3, 1.85, 3.2, 0.45, { size: 15, bold: true, color: 'accent3', align: 'center' });
    d.line(s, 5.5, 2.85, 2.3, 2.85, { color: 'accent1', lw: 3.5 });
    d.t(s, '← //neemt// werk', 2.3, 2.9, 3.2, 0.45, { size: 15, bold: true, color: 'accent1', align: 'center' });
    d.t(s, ['**de werkgever**', '//werk// + //geven//', 'l’employeur'], 0.7, 3.35, 2.6, 1.7, { size: 16, gap: 2, align: 'center', valign: 'middle' });
    d.t(s, ['**de werknemer**', '//werk// + //nemen//', 'l’employé·e'], 4.5, 3.35, 2.6, 1.7, { size: 16, gap: 2, align: 'center', valign: 'middle' });
    const P = [['de klant ↔ de leverancier', 'le client ↔ le fournisseur'], ['de collega', 'le / la collègue'], ['de baas', 'le patron (familier) · BE : //de chef//'], ['de vakbond', 'le syndicat']];
    P.forEach(([nl, fr], i) => {
      const y = 1.7 + i * 0.88;
      d.rect(s, 7.45, y, 5.28, 0.76, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, radius: 0.08 });
      d.t(s, [`//${nl.split(' ↔ ').map(art).join(' ↔ ')}//`, fr], 7.6, y, 5.0, 0.76, { size: 15, gap: 0, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.4, 12.13, 0.65, { fill: 'FDF1E6', line: 'accent1', lw: 1, radius: 0.08 });
    d.t(s, 'En Belgique : //de **bediende**// (employé·e de bureau) · //de **arbeider**// (ouvrier·ère) : deux statuts différents', 0.85, 5.4, 11.7, 0.65, { size: 16, valign: 'middle' });
    band(s, 'Moyen mnémotechnique : //geven// = donner (le travail, le salaire) · //nemen// = prendre', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 8 S27 plan
  {
    const s = d.page({ g: 8, tag: 'VOCABULAIRE', title: 'Le bâtiment : le rez-de-chaussée' });
    floorPlan(d, s, 0.6, 1.7, 8.0, 4.3, { size: 12 });
    d.rect(s, 8.9, 1.7, 3.83, 4.3, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, ['//Waar is de vergaderzaal?//', '//— Op het **gelijkvloers**, de eerste deur links.//', '', '//Waar is de directie?//', '//— Op de **eerste verdieping**. Neem de trap of de lift.//'], 9.05, 1.8, 3.55, 2.6, { size: 15, gap: 2, valign: 'middle' });
    d.t(s, ['**BE** //het gelijkvloers// = NL //de begane grond//', '**BE** //de refter// = NL //de kantine//', '//het kantoor// = le bureau (BE aussi //het bureau//)'], 9.05, 4.45, 3.55, 1.5, { size: 13, gap: 3, valign: 'middle', color: 'accent5' });
    band(s, 'Ce plan revient au M31 : //Hij loopt de gang **door**. · Ze loopt de trap **op**.//', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 9 sur mon bureau
  {
    const s = d.page({ g: 9, tag: 'VOCABULAIRE', title: 'Sur mon bureau : de of het?' });
    const O = [['laptop', 'de laptop'], ['desktop-computer', 'het scherm'], ['keyboard', 'het toetsenbord'], ['computer-mouse', 'de muis'], ['printer', 'de printer'], ['file-folder', 'de map'], ['card-file-box', 'het dossier'], ['spiral-calendar', 'de agenda'], ['pen', 'de balpen'], ['mobile-phone', 'de gsm'], ['identification-card', 'de badge'], ['chair', 'de stoel']];
    const cw = (12.13 - 5 * 0.15) / 6; const ch = 1.85;
    O.forEach(([il, w], i) => {
      const x = 0.6 + (i % 6) * (cw + 0.15); const y = 1.7 + Math.floor(i / 6) * (ch + 0.15);
      const het = w.startsWith('het');
      d.rect(s, x, y, cw, ch, { fill: het ? 'FDF1E6' : 'FFFFFF', line: het ? HET : DE, lw: het ? 2.5 : 1.25, radius: 0.1 });
      d.ill(s, il, x + cw / 2 - 0.45, y + 0.15, 0.9, 0.9);
      d.t(s, `//${art(w)}//`, x + 0.05, y + 1.15, cw - 0.1, 0.6, { size: 16, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.85, 12.13, 0.95, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, ['//Mag ik je balpen even lenen? · De printer werkt niet!//', 'BE : //de gsm// (NL //de mobiel//), //de bic// = //de balpen// · //het bureau// = le meuble'], 0.85, 5.85, 11.7, 0.95, { size: 16, gap: 3, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 10 documents
  {
    const s = d.page({ g: 10, tag: 'VOCABULAIRE', title: 'Les documents' });
    const D = [['receipt', 'de factuur', 'la facture'], ['page-with-curl', 'de offerte', 'le devis'], ['clipboard', 'de bestelbon', 'le bon de commande'], ['page-facing-up', 'het contract', 'le contrat'], ['memo', 'het verslag', 'le rapport, le compte rendu'], ['spiral-notepad', 'het formulier', 'le formulaire'], ['euro-banknote', 'de loonfiche', 'la fiche de paie'], ['bookmark-tabs', 'het attest', 'l’attestation'], ['paperclip', 'de bijlage', 'la pièce jointe']];
    const cw = (12.13 - 2 * 0.2) / 3; const ch = 1.05;
    D.forEach(([il, w, fr], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.2); const y = 1.7 + Math.floor(i / 3) * (ch + 0.15);
      const het = w.startsWith('het');
      d.rect(s, x, y, cw, ch, { fill: het ? 'FDF1E6' : 'FFFFFF', line: het ? HET : DE, lw: het ? 2 : 1.25, radius: 0.08, shadow: true });
      d.ill(s, il, x + 0.15, y + 0.17, 0.7, 0.7);
      d.t(s, [`//${art(w)}//`, fr], x + 1.0, y, cw - 1.1, ch, { size: 17, gap: 0, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.4, 12.13, 0.7, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, '//In de bijlage vindt u de offerte.// (M10) · //het verslag// = aussi le PV d’une réunion (NL : //de notulen//)', 0.85, 5.4, 11.7, 0.7, { size: 16, valign: 'middle' });
    band(s, 'Très belge : //de loonfiche// (NL : //de loonstrook//), //het attest// (un //ziekteattest// = un certificat médical)', 6.25, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 11 verbes
  {
    const s = d.page({ g: 11, tag: 'VOCABULAIRE', title: 'Les verbes du travail' });
    const C = [['FaBuilding', 'Au bureau', 'accent2', [['vergaderen', 'être en réunion'], ['bellen', 'téléphoner'], ['mailen', 'envoyer un e-mail'], ['afdrukken', 'imprimer'], ['kopiëren', 'copier'], ['plannen', 'planifier']]], ['FaHandshake', 'Avec les clients', 'accent3', [['bestellen', 'commander'], ['leveren', 'livrer'], ['factureren', 'facturer'], ['betalen', 'payer'], ['onderhandelen', 'négocier']]], ['FaUsers', 'Le personnel', 'purple', [['solliciteren', 'postuler'], ['aanwerven', 'embaucher'], ['opleiden', 'former'], ['ontslaan', 'licencier']]]];
    const cw = (12.13 - 2 * 0.25) / 3;
    C.forEach(([ic, h, c, V], i) => {
      const x = 0.6 + i * (cw + 0.25);
      d.rect(s, x, 1.7, cw, 4.2, { fill: 'bg1', line: c, lw: 2, radius: 0.1 });
      d.rect(s, x, 1.7, cw, 0.6, { fill: c, line: null, radius: 0.1 });
      d.icon(s, ic, 'FFFFFF', x + 0.2, 1.8, 0.4);
      d.t(s, h, x + 0.75, 1.7, cw - 0.9, 0.6, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
      V.forEach(([nl, fr], k) => {
        d.t(s, [`//**${nl}**//`, fr], x + 0.25, 2.42 + k * 0.58, cw - 0.4, 0.56, { size: 15, gap: 0, valign: 'middle' });
      });
    });
    band(s, '//Karim is aan het vergaderen.// · //Hij is in vergadering.// · //Ik druk het verslag **af**.// (M11)', 6.1, 0.72, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 12 piège collocations
  {
    const s = d.page({ g: 12, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : prendre, faire, poser…' });
    const R = [[false, '« prendre une décision »', 'een beslissing **!!nemen!!**'], [false, '« prendre une pause »', 'een pauze **!!nemen!!**'], [false, '« prendre congé »', 'verlof **!!nemen!!**'], [true, '« faire une réunion »', 'een vergadering **!!houden!!**'], [true, '« faire une erreur »', 'een fout **!!maken!!**'], [true, '« poser une question »', 'een vraag **!!stellen!!**'], [false, '« donner une présentation »', 'een presentatie **!!geven!!**'], [true, '« suivre une formation »', 'een opleiding **!!volgen!!**'], [true, '« remplir un formulaire »', 'een formulier **!!invullen!!**'], [true, '« prendre contact »', 'contact **!!opnemen!!**']];
    const cw = (12.13 - 0.3) / 2; const rh = 0.78;
    R.forEach(([warn, fr, nl], i) => {
      const c = Math.floor(i / 5); const r = i % 5;
      const x = 0.6 + c * (cw + 0.3); const y = 1.7 + r * (rh + 0.08);
      d.rect(s, x, y, cw, rh, { fill: warn ? 'FBEDEB' : 'bg2', line: warn ? 'accent6' : BORDER, lw: warn ? 1.25 : 0.75, radius: 0.08 });
      if (warn) d.t(s, '⚠', x + 0.1, y, 0.35, rh, { size: 16, color: 'accent6', valign: 'middle' });
      d.t(s, [fr, `→ //${nl}//`], x + 0.45, y, cw - 0.55, rh, { size: 16, gap: 0, valign: 'middle' });
    });
    band(s, 'On apprend une **expression complète** : //een vraag stellen//, pas « poser = //stellen// » · aussi : //een vergadering **hebben**//', 6.1, 0.72, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 13 contrat
  {
    const s = d.page({ g: 13, tag: 'VOCABULAIRE', title: 'Le contrat et les conditions de travail' });
    const B = [['FaFileContract', 'Contrat', 'accent2', ['//een contract van **onbepaalde** duur// (CDI)', '//van **bepaalde** duur// (CDD)', '//de opzegtermijn// (le préavis)']], ['FaClock', 'Temps de travail', 'accent3', ['//voltijds// (temps plein) · //deeltijds// (temps partiel)', '//glijdende uren// (horaire flexible)', '//thuiswerken// = //telewerken// (BE)']], ['FaEuroSign', 'Salaire et avantages', 'accent1', ['//het brutoloon / het nettoloon// (M26)', '//de maaltijdcheques//', '//de bedrijfswagen// (voiture de société)']], ['FaUmbrellaBeach', 'Congés', 'purple', ['//het verlof// · //de vakantiedagen//', '//ziek zijn// · //een ziekteattest//', '//Ik neem morgen verlof.//']]];
    const cw = (12.13 - 0.25) / 2; const ch = 1.95;
    B.forEach(([ic, h, c, L], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.25); const y = 1.7 + Math.floor(i / 2) * (ch + 0.15);
      d.rect(s, x, y, cw, ch, { fill: 'bg1', line: c, lw: 1.75, radius: 0.1 });
      d.iconDisc(s, ic, x + 0.15, y + 0.15, 0.6, c);
      d.t(s, `**${h}**`, x + 0.9, y + 0.15, cw - 1.0, 0.6, { size: 18, color: c, valign: 'middle' });
      d.t(s, L, x + 0.3, y + 0.8, cw - 0.45, ch - 0.88, { size: 15, gap: 3, valign: 'middle' });
    });
    band(s, '//Ik werk deeltijds, vier dagen per week. · Ik werk twee dagen per week thuis.//', 6.0, 0.8, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 14 faux amis
  {
    const s = d.page({ g: 14, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : les faux amis' });
    trapFrame(s, 4.4);
    const R = [['« solliciter » (demander)', 'solliciteren', '**vragen** · //solliciteren// = **postuler**'], ['« la formation »', 'de formatie', 'de **opleiding**'], ['« le patron »', 'het patroon', 'de **baas**'], ['« la société » (l’entreprise)', 'de samenleving', 'het **bedrijf**'], ['« l’ordre du jour »', null, 'de **agenda** (comme « l’agenda »)']];
    R.forEach(([fr, ko, ok], i) => {
      const y = 2.3 + i * 0.75;
      d.t(s, fr, 0.95, y, 3.6, 0.66, { size: 17, valign: 'middle' });
      if (ko) d.t(s, `✗ //{{${ko}}}//`, 4.6, y, 2.7, 0.66, { size: 16, color: 'accent6', valign: 'middle' });
      d.line(s, 7.3, y + 0.33, 7.65, y + 0.33, { color: 'accent3', lw: 2 });
      d.rect(s, 7.7, y + 0.04, 4.85, 0.58, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 7.85, y + 0.04, 4.65, 0.58, { size: 17, valign: 'middle' });
    });
    band(s, '//de formatie// = la composition (d’un gouvernement) · //het patroon// = le modèle · //de samenleving// = la société (les gens)', 6.25, 0.62, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 15 BE ou NL
  {
    const s = d.page({ g: 15, tag: 'VOCABULAIRE', title: 'Belgique ou Pays-Bas ?' });
    d.flag(s, 'be', 0.75, 1.72, 0.55);
    d.t(s, '**Belgique** — à Bruxelles et en Flandre', 1.45, 1.65, 5.0, 0.5, { size: 16, color: 'tx2', valign: 'middle' });
    d.flag(s, 'nl', 6.95, 1.72, 0.55);
    d.t(s, '**Pays-Bas**', 7.65, 1.65, 5.0, 0.5, { size: 16, color: 'tx2', valign: 'middle' });
    const R = [['het onthaal', 'de receptie', 'l’accueil'], ['de refter', 'de kantine', 'la cafétéria'], ['het gelijkvloers', 'de begane grond', 'le rez-de-chaussée'], ['de gsm', 'de mobiel', 'le portable'], ['de loonfiche', 'de loonstrook', 'la fiche de paie'], ['aanwerven', 'aannemen', 'embaucher'], ['de kmo', 'het mkb', 'la PME'], ['het verlof', 'de vakantie', 'les congés']];
    R.forEach(([be, nl, fr], i) => {
      const y = 2.3 + i * 0.47;
      d.rect(s, 0.6, y, 12.13, 0.43, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.04 });
      d.t(s, `//${art(be)}//`, 0.85, y, 5.0, 0.43, { size: 16, valign: 'middle' });
      d.t(s, `//${art(nl)}//`, 7.05, y, 3.0, 0.43, { size: 16, valign: 'middle' });
      d.t(s, fr, 10.1, y, 2.55, 0.43, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
    });
    band(s, 'Les deux sont compris partout. On apprend d’abord le mot belge, on reconnaît le mot néerlandais.', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 16 à retenir
  {
    const s = d.page({ g: 16, tag: 'À RETENIR', title: 'À retenir : l’entreprise en un coup d’œil' });
    orgChart(s, 0.6, 1.7, 6.0, 1.7, { small: true, gap: 0.08, mid: 0.3 });
    floorPlan(d, s, 6.9, 1.7, 5.83, 2.5, { size: 8, icons: false, label: (k) => ALL[k].replace(/^(de|het) /, '') });
    const R = [['Composés', 'le dernier mot donne l’article : //**@@de@@** personeels**dienst** · **##het##** kopieer**lokaal**//'], ['Expressions', '//een vergadering **houden** · een vraag **stellen** · een beslissing **nemen**//'], ['Rôles', '//de werk**gever**// donne le travail · //de werk**nemer**// le prend']];
    R.forEach(([h, t], i) => {
      const y = 4.4 + i * 0.72;
      d.rect(s, 0.6, y, 12.13, 0.62, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, radius: 0.08 });
      d.t(s, `**${h}**`, 0.8, y, 2.0, 0.62, { size: 17, color: 'tx2', valign: 'middle' });
      d.t(s, t, 2.8, y, 9.8, 0.62, { size: 17, valign: 'middle' });
    });
    d.t(s, 'S26 · l’organigramme', 0.6, 3.45, 6.0, 0.3, { size: 11, italic: true, color: 'accent5', align: 'center' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 17 divider
  d.divider({ g: 17, tiles: [
    ['Wie doet wat?', '★', 'FaUserTie'], ['Waar is…?', '★', 'FaMapMarkedAlt'], ['de of het?', '★★', 'FaRandom'], ['Le détective', '★★', 'FaSearch'],
    ['Le bon verbe', '★★', 'FaLink'], ['Taboe!', '★', 'FaBan'], ['La visite guidée', '★★★', 'FaRoute'],
  ] });

  // ---------------------------------------------------------------- 18 ex1 wie doet wat
  const F1 = [['woman-office-worker', 'de boekhouder', 'd'], ['person-tipping-hand', 'de onthaalmedewerker', 'b'], ['handshake', 'de verkoper', 'f'], ['busts-in-silhouette', 'de personeelsdienst', 'e'], ['technologist', 'de IT’er', 'c'], ['shopping-cart', 'de aankoper', 'a']];
  const T1 = [['a', 'bestelt het materiaal'], ['b', 'ontvangt de bezoekers'], ['c', 'installeert de laptops'], ['d', 'betaalt de facturen'], ['e', 'werft nieuwe collega’s aan'], ['f', 'maakt offertes voor de klanten']];
  d.ex({ g: 18, title: 'Exercice 1 — Wie doet wat?', stars: '★', instr: 'Associez chaque fonction à sa tâche, puis dites la phrase : //De boekhouder betaalt de facturen.//' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    F1.forEach(([il, w, k], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.05, 4.6, rh - 0.12, { fill: 'bg2', line: BORDER, radius: 0.08 });
      d.t(s, `**${i + 1}**`, 0.72, y + 0.05, 0.35, rh - 0.12, { size: 16, color: 'accent5', valign: 'middle' });
      d.ill(s, il, 1.1, y + (rh - 0.5) / 2 - 0.03, 0.5, 0.5);
      d.t(s, `//${art(w)}//`, 1.7, y + 0.05, 3.4, rh - 0.12, { size: 17, valign: 'middle' });
      if (mode === 'a') {
        const j = T1.findIndex(([l]) => l === k);
        d.line(s, 5.2, y + rh / 2, 7.6, top + j * rh + rh / 2, { color: 'tx2', lw: 1.75, arrow: 'triangle' });
      }
    });
    T1.forEach(([l, t], j) => {
      const y = top + j * rh;
      d.rect(s, 7.65, y + 0.05, 5.08, rh - 0.12, { fill: 'FFFFFF', line: 'accent3', lw: 1.5, radius: 0.08 });
      d.t(s, `**${l}**  //${t}//`, 7.8, y + 0.05, 4.85, rh - 0.12, { size: 16, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 19 ex2 waar is
  const NUM = { onthaal: 1, vergaderzaal: 2, kopieerlokaal: 3, toiletten: 4, kantoor: 5, keuken: 6, refter: 7, lift: 8 };
  d.ex({ g: 19, title: 'Exercice 2 — Waar is…?', stars: '★', instr: 'Écrivez le nom de chaque pièce, avec l’article.' }, (s, mode, top) => {
    floorPlan(d, s, 0.6, top + 0.05, 7.6, 6.85 - top - 0.05, { size: 11, num: (k) => NUM[k] || null, label: (k) => (mode === 'a' || ['parking', 'gang', 'trap'].includes(k) ? ALL[k] : null) });
    d.rect(s, 8.45, top + 0.05, 4.28, 6.8 - top, { fill: 'bg2', line: BORDER, radius: 0.1 });
    if (mode === 'q') {
      d.t(s, 'BANQUE', 8.65, top + 0.15, 3.9, 0.35, { size: 12, bold: true, color: 'accent5', cs: 2 });
      d.t(s, ['//het onthaal//', '//de vergaderzaal//', '//het kopieerlokaal//', '//de toiletten//', '//het kantoor//', '//de keuken//', '//de refter//', '//de lift//'].map(art), 8.65, top + 0.55, 3.9, 6.6 - top - 0.6, { size: 17, gap: 4 });
    } else {
      Object.entries(NUM).forEach(([k, n], i) => {
        const y = top + 0.2 + i * 0.6;
        d.num(s, n, 8.65, y + 0.06, 0.38, 'tx2', 12);
        d.t(s, `//${art(ALL[k])}//`, 9.15, y, 3.5, 0.5, { size: 17, bold: true, color: 'accent3', valign: 'middle' });
      });
    }
  });

  // ---------------------------------------------------------------- 20 ex3 de of het
  const W3 = [['contract', 'het'], ['factuur', 'de'], ['scherm', 'het'], ['vergadering', 'de'], ['dossier', 'het'], ['printer', 'de'], ['verslag', 'het'], ['offerte', 'de'], ['formulier', 'het'], ['personeelsdienst', 'de'], ['kopieerlokaal', 'het'], ['vergaderzaal', 'de']];
  d.ex({ g: 20, title: 'Exercice 3 — de of het?', stars: '★★', instr: 'Classez les mots. Composés : le dernier mot décide (M14) · //-ing// → //de// (M5).' }, (s, mode, top) => {
    let cy = top;
    if (mode === 'q') {
      const cw = (12.13 - 3 * 0.2) / 4;
      W3.forEach(([w], i) => {
        const x = 0.6 + (i % 4) * (cw + 0.2); const y = top + Math.floor(i / 4) * 0.6;
        d.rect(s, x + 0.2, y, cw - 0.4, 0.5, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, radius: 0.1, rotate: [-2, 1, 2, -1][i % 4] });
        d.t(s, `//${w}//`, x + 0.2, y, cw - 0.4, 0.5, { size: 16, align: 'center', valign: 'middle' });
      });
      cy = top + 1.9;
    }
    [['DE', DE, 'de'], ['HET', HET, 'het']].forEach(([h, c, a], i) => {
      const x = 0.6 + i * 6.21; const w = 5.92; const hh = 6.85 - cy;
      d.rect(s, x, cy, w, hh, { fill: c, tr: 92, line: c, lw: 2, radius: 0.1 });
      d.rect(s, x, cy, w, 0.55, { fill: c, line: null, radius: 0.1 });
      d.t(s, h, x, cy, w, 0.55, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      if (mode === 'a') {
        W3.filter(([, g]) => g === a).forEach(([wd], k) => {
          d.t(s, `//**${a} ${wd}**//`, x + 0.3 + (k % 2) * 2.85, cy + 0.75 + Math.floor(k / 2) * 0.7, 2.75, 0.6, { size: 18, color: c, valign: 'middle' });
        });
      }
    });
  });

  // ---------------------------------------------------------------- 21 ex4 détective
  d.ex({ g: 21, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Sofie écrit à Lotte avant son premier jour. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Sofie Peeters · Aan: Lotte Claes · Onderwerp: welkom!', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Beste Lotte,//', '//Welkom bij Peeters & Co! Maandag om negen uur wacht ik je aan het onthaal. Eerst ga je naar de {{personeel dienst}}++ personeelsdienst++: daar teken je {{de}}++ het++ contract. Als nieuwe {{werkgever}}++ werknemer++ krijg je een badge en een laptop. We {{maken}}++ houden++ elke maandag een vergadering met het hele team. Volgende week volg je een {{formatie}}++ opleiding++ over ons nieuwe programma.//', '//Tot maandag!//', '//Sofie//'];
    d.t(s, txt, 0.95, top + 0.65, 8.3, h - 0.8, { size: 18, gap: 6, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurre : //aan het onthaal// est correct (BE). Composé en un mot, avec le //-s-// (M14). //maken// → //houden// ou //hebben//.', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 22 ex5 le bon verbe
  const ex5 = ['Ik [[neem]] om twaalf uur een pauze.', 'We [[houden]] elke maandag een vergadering.', 'Mag ik een vraag [[stellen]]?', 'Karim [[geeft]] morgen een presentatie.', 'Iedereen [[maakt]] wel eens een fout.', 'Lotte [[volgt]] een opleiding Excel.', 'Wil je dit formulier [[invullen]]?', 'Neem contact [[op]] met de klantendienst.'];
  d.ex({ g: 22, title: 'Exercice 5 — Le bon verbe', stars: '★★', instr: 'Complétez avec : //neem · houden · stellen · geeft · maakt · volgt · invullen · op//.' }, (s, mode, top) => {
    d.list(s, ex5.map((e) => `//${e}//`), mode, { y: top + 0.2, w: 12.13, h: 4.3, cols: 2, size: 21, gap: 26 });
    if (mode === 'a') d.t(s, 'N° 2 : //hebben// est aussi correct · n° 8 : //contact **op**nemen// (M11)', 0.6, 6.3, 12.13, 0.45, { size: 15, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 23 ex6 taboe
  {
    const s = d.page({ g: 23, tag: 'JIJ NU !', title: 'Exercice 6 — Taboe!', stars: '★' });
    const C = [['de printer', 'papier · afdrukken · machine'], ['de vergaderzaal', 'vergaderen · tafel · kamer'], ['de boekhouder', 'geld · facturen · rekenen'], ['de factuur', 'betalen · klant · euro'], ['de refter', 'eten · middag · koffie'], ['de badge', 'deur · kaart · naam'], ['het verlof', 'vakantie · vrij · dagen'], ['de stagiair', 'student · jong · leren']];
    const cw = 1.95; const ch = 2.05;
    C.forEach(([w, tab], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.12); const y = 1.7 + Math.floor(i / 4) * (ch + 0.15);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: 'purple', lw: 2, radius: 0.1, shadow: true });
      d.rect(s, x, y, cw, 0.7, { fill: 'purple', line: null, radius: 0.1 });
      d.t(s, `//**${w}**//`, x + 0.05, y, cw - 0.1, 0.7, { size: 15, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, 'TABOE', x, y + 0.78, cw, 0.3, { size: 10, bold: true, color: 'accent6', align: 'center', cs: 2 });
      d.t(s, tab.split(' · ').map((t) => `//!!${t}!!//`), x + 0.1, y + 1.08, cw - 0.2, ch - 1.15, { size: 14, gap: 1, align: 'center', valign: 'middle', color: 'accent6' });
    });
    d.ill(s, 'speaking-head', 9.1, 1.7, 0.8, 0.8);
    d.t(s, 'Taboe!', 10.0, 1.7, 2.7, 0.8, { size: 28, bold: true, color: 'purple', head: true, valign: 'middle' });
    d.t(s, ['**1.** Tirez une carte. Faites deviner le mot **sans** dire les mots interdits.', '**2.** Aides : //Het is een persoon **die**… · Het is een ding **dat** / **waarmee**… · Het is een plaats **waar**…// (M22, M23)', '**3.** 1 minute par carte : 1 point par mot deviné, −1 si un mot interdit est prononcé.'], 9.1, 2.65, 3.63, 4.2, { size: 14, gap: 8 });
  }

  // ---------------------------------------------------------------- 24 ex7 visite guidée
  d.roleplay({
    g: 24, title: 'Exercice 7 — La visite guidée',
    scenario: 'Premier jour de Lotte chez Peeters & Co. Sofie lui fait visiter le rez-de-chaussée et présente les services.',
    a: '**A — Sofie** (RH) : montrez au moins 4 pièces et expliquez qui fait quoi dans 2 services.',
    b: '**B — Lotte** (stagiaire) : posez des questions sur les pièces, les collègues, les horaires.',
    bank: '//Dit is de vergaderzaal. · Hier is… · De boekhouding is op de eerste verdieping. · Wie werkt op…? · Waar kan ik iets afdrukken? · Om hoe laat is de pauze? · Waar is de refter?//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.5, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'PEETERS & CO', x + 0.15, y, w - 0.3, 0.5, { size: 12, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      floorPlan(d, s, x + 0.1, y + 0.65, w - 0.2, 2.5, { size: 7, icons: false, label: (k) => ALL[k].replace(/^(de|het) /, '') });
      d.t(s, 'Eerste verdieping : de directie · de boekhouding', x + 0.15, y + 3.2, w - 0.3, 0.4, { size: 11, italic: true, color: 'accent5' });
      d.t(s, ['**Diensten**', 'boekhouding · personeelsdienst · verkoop · aankoop · marketing · IT-dienst'], x + 0.15, y + 3.65, w - 0.3, h - 3.75, { size: 12, gap: 2 });
    },
  });

  // ---------------------------------------------------------------- 25 ticket
  d.ticket({
    g: 25,
    q: ['Traduisez avec l’article : « le service du personnel » · « la salle de réunion »', 'Complétez : //Mag ik een vraag ……?//', '//werkgever// ou //werknemer// ? « Karim est employé chez Peeters & Co. »'],
    self: ['Nommer', 'Se repérer', 'Parler du travail'],
    teaser: { icon: 'FaLongArrowAltRight', text: '**Volgende keer : De keuken in!** — //Ik stap in de keuken · Ik stap de keuken in.// Quelle différence ?' },
  });
}

module.exports = { meta, build };
