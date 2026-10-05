// Module 25 — Hoe laat is het? · L'heure
const { BORDER, HEX, PURPLE } = require('../lib');

const meta = { n: 25, slug: 'Hoe_laat_is_het', title: 'Hoe laat is het? — L’heure', short: 'Hoe laat is het?', template: 'module_25_hoe_laat.md' };

// les quatre zones de l'horloge (S21)
const Z = [['over', 'accent3'], ['voor half', 'accent1'], ['over half', 'purple'], ['voor', 'accent2']];
const hexOf = (c) => (c === 'purple' ? PURPLE : HEX[c] || c);

function build(d) {
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const trapFrame = (s, h = 4.35) => {
    d.rect(s, 0.6, 1.7, 12.13, h, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
  };
  // a pie slice, angles in clock minutes (0 = 12 o'clock)
  const wedge = (s, x, y, dd, m1, m2, c, tr = 70) => {
    const a = (m) => ((m * 6 - 90) % 360 + 360) % 360;
    s.addShape(d.S.PIE, { x, y, w: dd, h: dd, angleRange: [a(m1), a(m2) || 360], fill: { color: hexOf(c), transparency: tr }, line: { color: 'FFFFFF', width: 0, transparency: 100 } });
  };
  // analogue clock
  const clock = (s, x, y, dd, h, m, o = {}) => {
    const cx = x + dd / 2; const cy = y + dd / 2; const r = dd / 2;
    d.oval(s, x, y, dd, dd, { fill: o.fill || 'FFFFFF', line: o.line || 'tx2', lw: o.lw || Math.max(1.25, dd * 1.6) });
    if (o.zones) Z.forEach(([, c], i) => wedge(s, x + dd * 0.04, y + dd * 0.04, dd * 0.92, i * 15, (i + 1) * 15, c, 72));
    if (o.wedge) wedge(s, x + dd * 0.04, y + dd * 0.04, dd * 0.92, o.wedge[0], o.wedge[1], o.wedge[2], 55);
    for (let k = 0; k < 12; k++) {
      const a = (k * 30 * Math.PI) / 180; const big = k % 3 === 0;
      const r1 = r * (big ? 0.76 : 0.84); const r2 = r * 0.93;
      d.line(s, cx + r1 * Math.sin(a), cy - r1 * Math.cos(a), cx + r2 * Math.sin(a), cy - r2 * Math.cos(a), { color: 'tx2', lw: big ? Math.max(1.25, dd * 1.2) : 0.75, arrow: false });
    }
    if (o.nums) [[12, 0], [3, 90], [6, 180], [9, 270]].forEach(([n, deg]) => {
      const a = (deg * Math.PI) / 180; const rr = r * 0.6;
      d.t(s, String(n), cx + rr * Math.sin(a) - 0.3, cy - rr * Math.cos(a) - 0.2, 0.6, 0.4, { size: Math.max(10, dd * 7), bold: true, color: 'tx2', align: 'center', valign: 'middle' });
    });
    const am = (m * 6 * Math.PI) / 180; const ah = (((h % 12) + m / 60) * 30 * Math.PI) / 180;
    d.line(s, cx, cy, cx + r * 0.5 * Math.sin(ah), cy - r * 0.5 * Math.cos(ah), { color: 'tx2', lw: Math.max(2.5, dd * 3.2), arrow: false });
    d.line(s, cx, cy, cx + r * 0.78 * Math.sin(am), cy - r * 0.78 * Math.cos(am), { color: o.mc || 'accent1', lw: Math.max(1.75, dd * 2), arrow: false });
    d.oval(s, cx - dd * 0.04, cy - dd * 0.04, dd * 0.08, dd * 0.08, { fill: 'tx2' });
  };
  // digital display
  const digital = (s, t, x, y, w, h, size = 26) => {
    d.rect(s, x, y, w, h, { fill: '1B2333', line: null, radius: 0.08 });
    d.t(s, t, x, y, w, h, { size, bold: true, color: 'FFC266', align: 'center', valign: 'middle' });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Hoe laat is het?', sub: 'L’heure', line: 'Het is half drie. · Om hoe laat?',
    visual: (s) => {
      clock(s, 8.75, 0.75, 3.1, 2, 30, { nums: true, lw: 4 });
      d.rect(s, 7.3, 4.2, 4.0, 0.85, { fill: 'FFFFFF', line: null, radius: 0.18, shadow: true });
      d.t(s, '//Het is **##half drie##**.//', 7.45, 4.2, 3.7, 0.85, { size: 22, valign: 'middle', head: true });
      d.rect(s, 11.45, 4.28, 1.3, 0.7, { fill: 'accent6', line: null, radius: 0.12 });
      d.t(s, '3 h 30 ?', 11.45, 4.28, 1.3, 0.7, { size: 16, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaRegClock', h: 'Lire', t: 'Je lis l’heure officielle : //14.30 uur = veertien uur dertig//.', color: 'accent2' },
      { icon: 'FaComments', h: 'Dire', t: 'Je dis l’heure de tous les jours : //Het is kwart over twee.//', color: 'accent1' },
      { icon: 'FaCalendarAlt', h: 'Fixer', t: 'Je fixe un rendez-vous : //Kan het dinsdag om half tien?//', color: 'accent3' },
    ],
    band: 'L’heure sert partout : horaires de train, agenda, réunions, rendez-vous chez le médecin.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — la journée de Karim' });
    d.rect(s, 0.6, 1.7, 4.9, 3.75, { fill: 'FFFFFF', line: 'accent2', lw: 2, radius: 0.08, shadow: true });
    d.rect(s, 0.6, 1.7, 4.9, 0.55, { fill: 'accent2', line: null, radius: 0.08 });
    d.t(s, 'AGENDA · DINSDAG', 0.8, 1.7, 4.5, 0.55, { size: 14, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
    [['08.30', 'trein', 'A'], ['09.00', 'vergadering', 'B'], ['12.30', 'lunch met Sofie', 'C'], ['14.30', 'afspraak met meneer Maes', 'D']].forEach(([t, a, L], i) => {
      const y = 2.42 + i * 0.75;
      d.num(s, L, 0.8, y + 0.1, 0.4, 'accent2', 12);
      digital(s, t, 1.32, y + 0.05, 1.2, 0.5, 18);
      d.t(s, `//${a}//`, 2.65, y, 2.8, 0.6, { size: 17, valign: 'middle' });
    });
    const B = ['Om **##half negen##** neem ik de trein.', 'Om **##negen uur##** heb ik een vergadering.', 'Om **##half één##** eet ik met Sofie.', 'Om **##half drie##** komt meneer Maes.'];
    B.forEach((t, i) => d.bubble(s, `**${i + 1}** · //${t}//`, 5.8, 1.7 + i * 0.95, 5.95, 0.8, 'accent1', { size: 17 }));
    d.ill(s, 'man-office-worker', 11.9, 2.6, 0.85, 0.85);
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.8, 0.9, 0.9);
    d.t(s, ['Associez chaque bulle à une ligne de l’agenda (A–D).', 'Que veut dire //half drie// ? 3 h 30… ou 2 h 30 ?'], 2.0, 5.65, 10.5, 1.2, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 officiel
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'L’heure officielle : 14.30 uur' });
    const T = [['08.15', 'acht **uur** vijftien'], ['12.00', 'twaalf **uur**'], ['14.30', 'veertien **uur** dertig'], ['21.45', 'eenentwintig **uur** vijfenveertig']];
    const w = (12.13 - 3 * 0.25) / 4;
    T.forEach(([t, r], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.75, w, 3.1, { fill: 'bg2', line: BORDER, radius: 0.1 });
      digital(s, t, x + 0.25, 2.0, w - 0.5, 1.2, 40);
      d.t(s, `//${r}//`, x + 0.15, 3.4, w - 0.3, 1.2, { size: 20, align: 'center', valign: 'middle' });
    });
    d.ill(s, 'station', 0.6, 5.05, 0.7, 0.7);
    d.ill(s, 'spiral-calendar', 1.4, 5.05, 0.7, 0.7);
    d.ill(s, 'radio', 2.2, 5.05, 0.7, 0.7);
    d.t(s, 'Trains, radio, agendas, e-mails : c’est l’ordre du français (« quatorze heures trente »).', 3.1, 5.05, 9.6, 0.7, { size: 17, italic: true, color: 'accent5', valign: 'middle' });
    band(s, 'Règle : heure + **uur** + minutes · on écrit //14.30// ou //14:30//', 6.05, 0.7, 'tx2', 19);
  }

  // ---------------------------------------------------------------- 5 heures pleines
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Heures pleines : Het is drie uur' });
    [[1, 0, 'Het is **één uur**.'], [3, 0, 'Het is **drie uur**.'], [12, 0, 'Het is **twaalf uur**.']].forEach(([h, m, t], i) => {
      const x = 0.6 + i * 2.75;
      clock(s, x + 0.35, 1.8, 2.0, h, m, { nums: true });
      d.t(s, `//${t}//`, x, 3.95, 2.7, 0.6, { size: 19, align: 'center', valign: 'middle' });
    });
    d.rect(s, 8.95, 1.8, 3.78, 2.75, { fill: 'EAF1F8', line: 'accent2', lw: 1.5, radius: 0.1 });
    d.t(s, ['**Hoe laat is het?**', 'Quelle heure est-il ?', '', '**Om hoe laat…?**', 'À quelle heure… ? (BE)'], 9.15, 1.9, 3.4, 2.55, { size: 17, gap: 2, valign: 'middle' });
    d.rect(s, 0.6, 4.8, 12.13, 0.95, { fill: 'bg2', line: BORDER });
    d.t(s, ['//uur// reste au singulier : ✗ //{{drie uren}}// · //twaalf uur ’s middags// (midi) · //middernacht// (minuit)', '//één uur// (1 h, avec accents) ≠ //een uur// (une heure, durée)'], 0.85, 4.8, 11.7, 0.95, { size: 16, gap: 2, valign: 'middle' });
    band(s, 'En heure courante, on compte de 1 à 12 : 15 h = //drie uur ’s namiddags// (NL : //’s middags//)', 6.05, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 6 piège half
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : half drie = 2 h 30' });
    trapFrame(s, 4.35);
    d.t(s, '« deux heures et demie » → ✗ //{{half twee}}// → ✓ //**half drie**//', 0.85, 2.3, 11.7, 0.6, { size: 22, valign: 'middle' });
    // jauge
    const gx = 1.0; const gw = 7.2; const gy = 3.2;
    d.rect(s, gx, gy, gw, 0.7, { fill: 'FFFFFF', line: 'tx2', lw: 1.5, radius: 0.35 });
    d.rect(s, gx, gy, gw / 2, 0.7, { fill: 'accent1', line: null, radius: 0.35 });
    d.t(s, '**2 uur**', gx - 0.1, gy + 0.75, 1.2, 0.4, { size: 15, color: 'tx2' });
    d.t(s, '**3 uur**', gx + gw - 1.1, gy + 0.75, 1.2, 0.4, { size: 15, color: 'tx2', align: 'right' });
    d.line(s, gx + gw / 2, gy - 0.05, gx + gw / 2, gy + 0.75, { color: 'accent6', lw: 2.5, arrow: false });
    d.t(s, '**##half drie##** = à mi-chemin vers 3 h', gx + gw / 2 - 2.2, gy + 0.78, 4.4, 0.45, { size: 16, align: 'center' });
    [[8, 30, 'half negen', '8 h 30'], [12, 30, 'half één', '12 h 30'], [6, 30, 'half zeven', '6 h 30']].forEach(([h, m, t, fr], i) => {
      const y = 2.95 + i * 0.95;
      clock(s, 8.7, y, 0.8, h, m);
      d.t(s, [`//**${t}**//`, fr], 9.65, y, 2.9, 0.8, { size: 16, gap: 0, valign: 'middle' });
    });
    d.t(s, 'Astuce : //half// + l’heure **qui arrive**.', 0.85, 4.55, 7.5, 0.6, { size: 19, bold: true, color: 'accent6', valign: 'middle' });
    band(s, 'Comme l’allemand //halb drei// : on pense à l’heure suivante avant de parler.', 6.25, 0.62, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 7 kwart
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'kwart over, kwart voor' });
    [[3, 15, 'kwart **^^over^^** drie', '« trois heures et quart »', 0, 15, 'accent2'], [3, 45, 'kwart **##voor##** vier', '« quatre heures moins le quart »', 45, 60, 'accent1']].forEach(([h, m, t, fr, m1, m2, c], i) => {
      const x = 0.6 + i * 6.2;
      d.rect(s, x, 1.75, 5.93, 3.9, { fill: 'bg1', line: c, lw: 2, radius: 0.1, shadow: true });
      clock(s, x + 0.35, 2.1, 2.6, h, m, { nums: true, wedge: [m1, m2, c] });
      d.t(s, [`//${t}//`, fr], x + 3.1, 2.1, 2.7, 2.6, { size: 21, gap: 10, valign: 'middle' });
    });
    band(s, '//over// = après · //voor// = avant — comme en français !', 6.0, 0.75, 'tx2', 20);
  }

  // ---------------------------------------------------------------- 8 S21
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'L’horloge en quatre zones' });
    clock(s, 0.9, 1.8, 4.1, 2, 0, { nums: true, zones: true, lw: 3 });
    const EX = [['2 h 10', 'tien **over** twee', 'accent3', 2, 10], ['2 h 20', 'tien **voor half** drie', 'accent1', 2, 20], ['2 h 40', 'tien **over half** drie', 'purple', 2, 40], ['2 h 50', 'tien **voor** drie', 'accent2', 2, 50]];
    EX.forEach(([fr, nl, c, h, m], i) => {
      const y = 1.8 + i * 1.02;
      d.rect(s, 5.5, y, 7.23, 0.88, { fill: c, tr: 88, line: c, lw: 1.5, radius: 0.1 });
      clock(s, 5.62, y + 0.08, 0.72, h, m, { mc: c });
      d.t(s, `**${fr}**`, 6.5, y, 1.2, 0.88, { size: 17, color: c, valign: 'middle' });
      d.t(s, `//${nl}//`, 7.7, y, 3.6, 0.88, { size: 21, valign: 'middle' });
      d.chip(s, `${i * 15}–${(i + 1) * 15} min`, 11.4, y + 0.27, c, 0.34, 11);
    });
    d.t(s, 'Repères : l’heure pleine, //kwart//, //half//', 0.6, 6.05, 4.9, 0.5, { size: 15, italic: true, color: 'accent5', align: 'center' });
    band(s, '2 h 20 = aussi //twintig over twee// · 2 h 40 = aussi //twintig voor drie// (fréquent en Belgique)', 6.1, 0.7, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 9 officiel ou courant
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'Officiel ou courant ?' });
    const R = [['09.00', 'negen uur', 'negen uur'], ['13.15', 'dertien uur vijftien', 'kwart over één'], ['16.30', 'zestien uur dertig', 'half vijf'], ['18.45', 'achttien uur vijfenveertig', 'kwart voor zeven'], ['20.25', 'twintig uur vijfentwintig', 'vijf voor half negen']];
    [['AFFICHAGE', 0.6, 2.0], ['HEURE OFFICIELLE', 2.8, 4.6], ['HEURE COURANTE', 7.6, 5.13]].forEach(([h, x, w]) => d.t(s, h, x, 1.7, w, 0.35, { size: 12, bold: true, color: 'accent5', cs: 2 }));
    R.forEach(([t, o, c], i) => {
      const y = 2.12 + i * 0.78;
      digital(s, t, 0.6, y, 1.9, 0.64, 22);
      d.rect(s, 2.8, y, 4.6, 0.64, { fill: 'bg2', line: BORDER, radius: 0.08 });
      d.t(s, `//${o}//`, 2.95, y, 4.4, 0.64, { size: 18, valign: 'middle' });
      d.rect(s, 7.6, y, 5.13, 0.64, { fill: 'FDF1E6', line: 'accent1', lw: 1.25, radius: 0.08 });
      d.t(s, `//**${c}**//`, 7.75, y, 4.9, 0.64, { size: 19, valign: 'middle' });
    });
    band(s, 'Méthode : ① je ramène à 12 h (16 → 4) · ② je cherche la zone · ③ //half// → l’heure suivante', 6.1, 0.7, 'accent1', 17);
  }

  // ---------------------------------------------------------------- 10 moments
  {
    const s = d.page({ g: 10, tag: 'VOCABULAIRE', title: 'Les moments de la journée' });
    const M = [['sunrise', '’s ochtends · ’s morgens', 'le matin', 'FDF1E6', 'accent1'], ['sun', '’s middags', 'à midi / l’après-midi', 'FFF6D6', 'accent1'], ['sunset', '’s avonds', 'le soir', 'F6E3EE', 'accent4'], ['crescent-moon', '’s nachts', 'la nuit', 'E6EBF2', 'tx2']];
    const w = (12.13 - 3 * 0.12) / 4;
    M.forEach(([il, nl, fr, fill, c], i) => {
      const x = 0.6 + i * (w + 0.12);
      d.rect(s, x, 1.75, w, 2.55, { fill, line: null, radius: 0.1 });
      d.ill(s, il, x + w / 2 - 0.45, 1.9, 0.9, 0.9);
      d.t(s, `//**${nl}**//`, x + 0.1, 2.9, w - 0.2, 0.7, { size: 19, color: c, align: 'center', valign: 'middle' });
      d.t(s, fr, x + 0.1, 3.55, w - 0.2, 0.55, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 4.5, 12.13, 0.75, { fill: 'EAF1F8', line: 'accent2', lw: 1.25, radius: 0.1 });
    d.flag(s, 'be', 0.8, 4.65, 0.6);
    d.t(s, 'Belgique : //’s **voor**middags// (le matin) · //’s **na**middags// (l’après-midi) — //Om drie uur ’s namiddags.//', 1.6, 4.5, 11.0, 0.75, { size: 17, valign: 'middle' });
    d.t(s, 'Aujourd’hui : //**van**ochtend · **van**middag · **van**avond · **van**nacht//', 0.6, 5.4, 12.13, 0.6, { size: 19, align: 'center', valign: 'middle' });
    band(s, '//’s// remplace un ancien //des// : il se prononce « s » (//’s avonds// ≈ « savonts »)', 6.15, 0.68, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 11 piège à
  {
    const s = d.page({ g: 11, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : à, pendant, et demie' });
    trapFrame(s, 4.4);
    const R = [['« **à** trois heures »', 'op drie uur', '**om** drie uur'], ['« deux heures » (durée)', 'twee uren', 'twee uur'], ['« une heure et demie » (durée)', 'een uur en half', '**anderhalf** uur'], ['« un quart d’heure »', 'een kwartuur', 'een **kwartier**', 'be'], ['« À quelle heure ? »', 'Op welk uur?', 'Hoe laat? · Om hoe laat?', 'be']];
    R.forEach(([fr, ko, ok, be], i) => {
      const y = 2.3 + i * 0.75;
      d.t(s, fr, 0.95, y, 4.1, 0.66, { size: 17, valign: 'middle' });
      if (be) d.t(s, `≈ //${ko}// (BE, oral)`, 5.1, y, 2.9, 0.66, { size: 15, color: 'accent5', valign: 'middle' });
      else d.t(s, `✗ //{{${ko}}}//`, 5.1, y, 2.9, 0.66, { size: 15, color: 'accent6', valign: 'middle' });
      d.line(s, 8.05, y + 0.33, 8.45, y + 0.33, { color: 'accent3', lw: 2 });
      d.rect(s, 8.5, y + 0.04, 4.05, 0.58, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.65, y + 0.04, 3.85, 0.58, { size: 18, valign: 'middle' });
    });
    band(s, '//om// + heure · //op// + jour (//op maandag//, M18) · //een halfuur// = une demi-heure', 6.25, 0.62, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 12 rendez-vous
  {
    const s = d.page({ g: 12, tag: 'MISE EN SITUATION', title: 'Fixer un rendez-vous' });
    const L = [['man-office-worker', 'Maes', 'Wanneer past het u?', 0], ['woman', 'Sofie', 'Kan het dinsdag om **tien uur**?', 1], ['man-office-worker', 'Maes', 'Om tien uur heb ik al een afspraak. Kan het om **half twaalf**?', 0], ['woman', 'Sofie', 'Prima. Tot dinsdag om half twaalf!', 1]];
    L.forEach(([il, who, t, side], i) => {
      const y = 1.7 + i * 0.92;
      if (!side) { d.ill(s, il, 0.6, y, 0.75, 0.75); d.bubble(s, `**${who}** · //${t}//`, 1.45, y, 7.0, 0.78, 'accent2', { size: 16 }); }
      else { d.ill(s, il, 8.25, y, 0.75, 0.75); d.bubble(s, `**${who}** · //${t}//`, 1.95, y, 6.2, 0.78, 'accent4', { size: 16 }); }
    });
    // agenda
    d.rect(s, 9.3, 1.7, 3.43, 3.55, { fill: 'FFFFFF', line: 'accent3', lw: 1.5, radius: 0.08, shadow: true });
    d.rect(s, 9.3, 1.7, 3.43, 0.5, { fill: 'accent3', line: null, radius: 0.08 });
    d.t(s, 'DINSDAG', 9.45, 1.7, 3.1, 0.5, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
    [['09.00', ''], ['10.00', 'afspraak'], ['11.00', ''], ['11.30', 'Maes ✓'], ['12.30', 'lunch']].forEach(([t, a], i) => {
      const y = 2.3 + i * 0.58;
      d.t(s, t, 9.45, y, 0.9, 0.5, { size: 13, bold: true, color: 'accent5', valign: 'middle' });
      if (a) d.rect(s, 10.4, y + 0.05, 2.2, 0.42, { fill: a.includes('✓') ? 'accent3' : 'accent5', tr: a.includes('✓') ? 75 : 85, line: null, radius: 0.06 });
      d.t(s, a, 10.5, y, 2.1, 0.5, { size: 12, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.5, 12.13, 1.3, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE', 0.8, 5.55, 2, 0.3, { size: 11, bold: true, color: 'accent5', cs: 2 });
    d.t(s, '//van negen tot vijf · tussen twee en drie · rond tien uur · precies om acht uur · Ik ben te laat · Ik ben op tijd · Ik ben te vroeg//', 0.8, 5.85, 11.7, 0.9, { size: 16, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : l’horloge en quatre zones' });
    clock(s, 0.7, 1.85, 3.3, 2, 0, { nums: true, zones: true, lw: 2.5 });
    Z.forEach(([z, c], i) => {
      d.rect(s, 0.6 + i * 0.88, 5.35, 0.82, 0.4, { fill: c, line: null, radius: 0.08 });
      d.t(s, z, 0.6 + i * 0.88, 5.35, 0.82, 0.4, { size: 10, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    const C = [['Officiel', 'accent2', ['heure + //uur// + minutes', '//14.30 uur = veertien uur dertig//']], ['Courant', 'accent1', ['//over · voor half · over half · voor//', '//half drie// = **2 h 30**', '//kwart over drie · kwart voor vier//']], ['Rendez-vous', 'accent3', ['//**om**// + heure · //van … tot …// · //rond//', '//anderhalf uur · een kwartier · een halfuur//']]];
    C.forEach(([h, c, lines], i) => {
      const y = 1.75 + i * 1.42;
      d.rect(s, 4.4, y, 8.33, 1.3, { fill: 'bg1', line: c, lw: 2, radius: 0.1 });
      d.rect(s, 4.4, y, 2.0, 1.3, { fill: c, line: null, radius: 0.1 });
      d.t(s, h, 4.4, y, 2.0, 1.3, { size: 19, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, lines, 6.6, y, 6.0, 1.3, { size: 17, gap: 3, valign: 'middle' });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Hoe laat is het?', '★', 'FaRegClock'], ['Officiel → courant', '★★', 'FaExchangeAlt'], ['Le bon mot', '★', 'FaPuzzlePiece'], ['Le détective', '★★', 'FaSearch'],
    ['Sur le quai', '★★', 'FaTrain'], ['Le loto des horloges', '★', 'FaThLarge'], ['L’agenda', '★★★', 'FaCalendarAlt'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 horloges
  const ex1 = [[3, 0, 'drie uur'], [2, 30, 'half drie'], [4, 15, 'kwart over vier'], [6, 45, 'kwart voor zeven'], [9, 10, 'tien over negen'], [11, 25, 'vijf voor half twaalf'], [7, 40, 'tien over half acht / twintig voor acht'], [12, 50, 'tien voor één']];
  d.ex({ g: 15, title: 'Exercice 1 — Hoe laat is het?', stars: '★', instr: 'Écrivez l’heure de tous les jours. Pensez aux quatre zones !' }, (s, mode, top) => {
    const w = (12.13 - 3 * 0.2) / 4; const ch = (6.88 - top - 0.2) / 2;
    ex1.forEach(([h, m, a], i) => {
      const x = 0.6 + (i % 4) * (w + 0.2); const y = top + Math.floor(i / 4) * (ch + 0.2);
      d.rect(s, x, y, w, ch, { fill: 'bg2', line: BORDER, radius: 0.1 });
      d.num(s, i + 1, x + 0.12, y + 0.12, 0.38, 'accent5', 12);
      clock(s, x + w / 2 - 0.75, y + 0.15, 1.5, h, m);
      d.rect(s, x + 0.15, y + ch - 0.62, w - 0.3, 0.5, { fill: mode === 'a' ? 'EDF6F0' : 'FFFFFF', line: mode === 'a' ? 'accent3' : BORDER, lw: 1, radius: 0.08 });
      if (mode === 'a') d.t(s, `//**${a}**//`, x + 0.15, y + ch - 0.62, w - 0.3, 0.5, { size: 15, color: 'accent3', align: 'center', valign: 'middle', fit: true, max: 15, min: 11 });
    });
  });

  // ---------------------------------------------------------------- 16 ex2 officiel → courant
  const ex2 = [['08.30', 'half negen'], ['13.15', 'kwart over één'], ['17.45', 'kwart voor zes'], ['20.20', 'tien voor half negen', 'twintig over acht'], ['22.35', 'vijf over half elf'], ['14.05', 'vijf over twee']];
  d.ex({ g: 16, title: 'Exercice 2 — Officiel → courant', stars: '★★', instr: 'Dites l’heure de tous les jours : ① ramenez à 12 h · ② cherchez la zone · ③ //half// → heure suivante.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex2.forEach(([t, a, alt], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      digital(s, t, 1.15, y + 0.06, 1.9, rh - 0.12, 22);
      d.line(s, 3.15, y + rh / 2, 3.7, y + rh / 2, { color: 'accent1', lw: 3 });
      d.rect(s, 3.8, y + 0.06, 8.93, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**${a}**//${alt ? `  ·  ou //${alt}//` : ''}`, 3.95, y + 0.06, 8.7, rh - 0.12, { size: 19, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 17 ex3 le bon mot
  const ex3 = ['De vergadering begint [[om]] negen uur.', 'Ik werk [[van]] negen [[tot]] vijf.', 'De film duurt [[anderhalf]] uur. (1 h 30)', 'Wacht een [[kwartiertje]]! (15 min)', 'Ik kom [[rond]] drie uur, misschien iets later.', 'De trein vertrekt [[precies]] om 8.12 uur.', 'Sorry, ik ben te [[laat]]!', 'We hebben een [[halfuur]] pauze. (30 min)'];
  d.ex({ g: 17, title: 'Exercice 3 — Le bon mot', stars: '★', instr: 'Complétez avec un mot de la banque.' }, (s, mode, top) => {
    d.list(s, ex3.map((e) => `//${e}//`), mode, { y: top + 0.1, w: 12.13, h: 4.1, cols: 2, size: 19, gap: 16 });
    const by = 6.0;
    d.rect(s, 0.6, by, 12.13, 0.85, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE', 0.8, by, 1.3, 0.85, { size: 12, bold: true, color: 'accent5', cs: 2, valign: 'middle' });
    let x = 2.1;
    ['rond', 'halfuur', 'om', 'laat', 'anderhalf', 'van … tot', 'precies', 'kwartiertje'].forEach((p) => {
      const w = 0.35 + p.length * 0.13;
      d.rect(s, x, by + 0.16, w, 0.53, { fill: 'accent1', line: null, radius: 0.1 });
      d.t(s, p, x, by + 0.16, w, 0.53, { size: 16, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      x += w + 0.15;
    });
  });

  // ---------------------------------------------------------------- 18 ex4 détective
  d.ex({ g: 18, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Karim écrit à meneer Maes. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Karim Benali · Aan: meneer Maes · Onderwerp: vergadering dinsdag', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Geachte heer Maes,//', '//De vergadering is op dinsdag {{op drie uur}}++ om drie uur++. Ze duurt {{twee uren}}++ twee uur++. Daarna is er een pauze van {{een uur en half}}++ anderhalf uur++. Om half vier ({{16.30 uur}}++ 15.30 uur++) begint de presentatie. U kunt ook om {{kwart na vijf}}++ kwart over vijf++ komen.//', '//Met vriendelijke groeten//', '//Karim Benali//'];
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 19, gap: 8, mode, ls: 1.2, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurre : //op dinsdag// (//op// + jour, //om// + heure). //half vier// = 15 h 30 !', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 19 ex5 sur le quai
  const ex5 = [['Antwerpen', '14.17', '3'], ['Gent', '14.32', '5'], ['Leuven', '14.45', '1'], ['Luik', '15.04', '8'], ['Brugge', '15.21', '2']];
  d.ex({ g: 19, title: 'Exercice 5 — Sur le quai', stars: '★★', instr: 'Écoutez les annonces et complétez le tableau des départs.' }, (s, mode, top) => {
    const x0 = 0.6; const w = 9.2;
    d.rect(s, x0, top, w, 6.85 - top, { fill: '1B2333', line: null, radius: 0.08 });
    [['BESTEMMING', 0.3, 3.4], ['VERTREK', 3.9, 2.4], ['SPOOR', 6.5, 2.4]].forEach(([h, dx, cw]) => d.t(s, h, x0 + dx, top + 0.1, cw, 0.45, { size: 13, bold: true, color: 'FFC266', cs: 2, valign: 'middle' }));
    const rh = (6.75 - top - 0.65) / 5;
    ex5.forEach(([dest, t, sp], i) => {
      const y = top + 0.6 + i * rh;
      d.line(s, x0 + 0.2, y, x0 + w - 0.2, y, { color: '3A4A60', lw: 0.75, arrow: false });
      d.t(s, dest, x0 + 0.3, y, 3.4, rh, { size: 22, bold: true, color: 'FFFFFF', valign: 'middle' });
      [[t, 3.9, 2.0], [sp, 6.5, 1.0]].forEach(([v, dx, cw]) => {
        d.rect(s, x0 + dx, y + 0.12, cw, rh - 0.24, { fill: mode === 'a' ? '2E7D4F' : '2C3B52', line: null, radius: 0.06 });
        if (mode === 'a') d.t(s, v, x0 + dx, y + 0.12, cw, rh - 0.24, { size: 22, bold: true, color: 'FFC266', align: 'center', valign: 'middle' });
      });
    });
    d.ill(s, 'loudspeaker', 10.5, top + 0.2, 1.4, 1.4);
    d.t(s, ['L’enseignant·e lit 5 annonces, deux fois.', '//spoor// = la voie', '//vertrekken// = partir'], 10.0, top + 1.8, 2.73, 2.2, { size: 14, gap: 6 });
  });

  // ---------------------------------------------------------------- 20 ex6 loto
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Le loto des horloges', stars: '★' });
    const C = [[2, 15], [4, 30], [8, 20], [10, 35], [7, 45], [3, 10], [12, 30], [5, 55], [9, 20], [10, 45], [6, 40], [12, 5]];
    const cw = 1.38; const chh = 1.95;
    C.forEach(([h, m], i) => {
      const x = 0.6 + (i % 6) * (cw + 0.1); const y = 1.75 + Math.floor(i / 6) * (chh + 0.15);
      d.rect(s, x, y, cw, chh, { fill: 'FFFFFF', line: 'accent4', lw: 1.5, radius: 0.1, shadow: true });
      clock(s, x + 0.14, y + 0.15, cw - 0.28, h, m);
      d.t(s, String(i + 1), x, y + chh - 0.5, cw, 0.42, { size: 15, bold: true, color: 'accent4', align: 'center', valign: 'middle' });
    });
    d.ill(s, 'game-die', 9.6, 1.75, 0.8, 0.8);
    d.t(s, 'Bingo!', 10.5, 1.75, 2.23, 0.8, { size: 28, bold: true, color: 'accent4', head: true, valign: 'middle' });
    d.t(s, ['**1.** Choisissez 4 horloges en secret.', '**2.** L’enseignant·e dit des heures : barrez vos horloges.', '**3.** Les 4 barrées : « //Bingo!// » — et dites vos 4 heures sans faute.'], 9.6, 2.75, 3.13, 3.6, { size: 15, gap: 10 });
  }

  // ---------------------------------------------------------------- 21 ex7 agenda
  d.roleplay({
    g: 21, title: 'Exercice 7 — L’agenda',
    scenario: 'Meneer Maes veut un rendez-vous de 45 minutes cette semaine. Sofie regarde son agenda.',
    a: '**Meneer Maes** : demandez un rendez-vous. Vos contraintes : pas avant 10 heures, pas le mercredi.',
    b: '**Sofie** : proposez des créneaux libres en heure courante (//half tien, kwart over twee…//).',
    bank: '//Wanneer past het u? · Kan het … om …? · Dan heb ik al een afspraak. · Dat past. · Van … tot … ben ik vrij. · Tot dan!//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.5, { fill: 'accent3', line: null, radius: 0.04 });
      d.t(s, 'AGENDA SOFIE · WEEK 14', x + 0.15, y, w - 0.3, 0.5, { size: 12, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const days = ['ma', 'di', 'wo', 'do', 'vr']; const cw = (w - 0.75) / 5; const top = y + 0.85; const hh = h - 1.0;
      days.forEach((dd, i) => d.t(s, dd, x + 0.6 + i * cw, y + 0.52, cw, 0.3, { size: 11, bold: true, color: 'accent5', align: 'center' }));
      [9, 11, 13, 15, 17].forEach((hr, k) => d.t(s, `${hr}`, x + 0.05, top + (k * hh) / 4 - 0.12, 0.5, 0.25, { size: 9, color: 'accent5', align: 'right' }));
      const busy = [[0, 9, 11], [0, 14, 15.5], [1, 9.5, 10.5], [1, 13, 14], [2, 9, 17], [3, 11.5, 13], [3, 15, 16], [4, 9, 12]];
      busy.forEach(([di, a, b]) => {
        const yy = top + ((a - 9) / 8) * hh; const bh = ((b - a) / 8) * hh;
        d.rect(s, x + 0.62 + di * cw, yy, cw - 0.04, bh, { fill: 'accent5', tr: 70, line: null, radius: 0.03 });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['Lisez : //16.45 uur//.', 'Dites autrement : 2 h 30 · 7 h 20.', 'Traduisez : « La réunion dure une heure et demie. »'],
    self: ['Lire', 'Dire', 'Fixer'],
    teaser: { icon: 'FaEuroSign', text: '**Volgende keer : Hoeveel kost het?** — //Duizend tweehonderd euro.//' },
  });
}

module.exports = { meta, build };
