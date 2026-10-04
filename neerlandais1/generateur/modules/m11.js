// Module 11 — Scheidbare werkwoorden · Les verbes à particule
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 11, slug: 'Scheidbare_werkwoorden', title: 'Scheidbare werkwoorden — Les verbes à particule', short: 'Scheidbare werkwoorden', template: 'module_11_scheidbare_werkwoorden.md' };

const PART = 'accent1'; // particule = orange
const INS = 'tx2'; // inséparable = bleu nuit

function build(d) {
  // sentence strip: [text, type] · n normal · v verb · p particle · c verb recollé (particle + verb)
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        p: { fill: 'FDF1E6', line: PART, lw: 2, dash: 'dash', color: PART, bold: true },
        c: { fill: 'FDF1E6', line: PART, lw: 2.5, color: 'accent6', bold: true },
      }[ty || 'n'];
      d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, dash: st.dash, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      cx += w + gap;
    });
    return cx - gap;
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2') => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size: 18, color: 'bg1', valign: 'middle' });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Scheidbare werkwoorden', sub: 'Les verbes à particule', line: 'opstaan → Ik sta om 7 uur op.',
    visual: (s) => {
      d.ill(s, 'alarm-clock', 10.9, 1.2, 1.6, 1.6);
      d.rect(s, 7.2, 2.0, 1.35, 1.2, { fill: 'FFFFFF', line: PART, lw: 4 });
      d.t(s, 'OP', 7.2, 2.0, 1.35, 1.2, { size: 36, bold: true, color: PART, align: 'center', valign: 'middle', head: true });
      d.rect(s, 8.75, 2.0, 2.0, 1.2, { fill: 'FFFFFF', line: 'accent6', lw: 4 });
      d.t(s, 'STAAN', 8.75, 2.0, 2.0, 1.2, { size: 34, bold: true, color: 'accent6', align: 'center', valign: 'middle', head: true });
      d.ill(s, 'scissors', 8.2, 3.25, 0.7, 0.7);
      d.rect(s, 6.95, 4.35, 5.8, 1.1, { fill: 'FFFFFF', line: null, radius: 0.15, shadow: true });
      d.t(s, 'Ik **!!sta!!** om 7 uur **##op##**.', 6.95, 4.35, 5.8, 1.1, { size: 28, align: 'center', valign: 'middle', head: true });
      d.line(s, 7.87, 3.25, 11.25, 4.3, { color: 'F6C27E', lw: 2.5, dash: 'dash' });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCut', h: 'Reconnaître', t: 'Je sais si un verbe se coupe (//opstaan//) ou non (//vergeten//).', color: PART },
      { icon: 'FaArrowRight', h: 'Placer', t: 'Je mets la particule **au bout**… ou je la laisse **collée**.', color: 'accent6' },
      { icon: 'FaClock', h: 'Raconter', t: 'Je décris ma journée de travail.', color: 'accent3' },
    ],
    band: 'Au bureau, ces verbes sont partout : //inloggen, opbellen, afspreken, meenemen//.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — où est passé le « op » ?' });
    d.rect(s, 0.6, 1.7, 4.4, 5.15, { fill: 'FFFDF5', line: 'C9B98A', lw: 1.25, shadow: true });
    d.ill(s, 'open-book', 0.8, 1.85, 0.7, 0.7);
    d.t(s, 'DICTIONNAIRE', 1.6, 1.9, 3.2, 0.6, { size: 14, bold: true, color: 'accent5', cs: 2, valign: 'middle' });
    [['##op##·staan', 'se lever'], ['##mee##·nemen', 'emporter'], ['##in##·loggen', 'se connecter']].forEach(([w, tr], i) => {
      const y = 2.75 + i * 1.3;
      d.t(s, `**${w}**`, 0.9, y, 3.9, 0.6, { size: 26, head: true, valign: 'middle' });
      d.t(s, tr, 0.9, y + 0.6, 3.9, 0.4, { size: 15, italic: true, color: 'accent5' });
      if (i < 2) d.line(s, 0.9, y + 1.15, 4.7, y + 1.15, { color: 'E5DCC0', lw: 1, arrow: false });
    });
    const sent = ['//Ik **!!sta!!** om 7 uur **##op##**.//', '//Karim **!!neemt!!** zijn laptop **##mee##**.//', '//Sofie **!!logt!!** om 9 uur **##in##**.//'];
    const ills = ['alarm-clock', 'laptop', 'woman-office-worker'];
    sent.forEach((t, i) => {
      const y = 1.75 + i * 1.3;
      d.rect(s, 5.3, y, 7.43, 1.1, { fill: 'bg1', line: BORDER, shadow: true });
      d.ill(s, ills[i], 5.45, y + 0.2, 0.7, 0.7);
      d.t(s, t, 6.35, y, 6.2, 1.1, { size: 24, valign: 'middle' });
    });
    d.rect(s, 5.3, 5.75, 7.43, 1.1, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 5.45, 5.9, 0.8, 0.8);
    d.t(s, 'Que remarquez-vous ? Où va le petit mot ?', 6.4, 5.75, 6.2, 1.1, { size: 20, bold: true, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 4 un verbe en deux morceaux
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Un verbe en deux morceaux' });
    [['schoon', 'maken', 'schoonmaken', 'nettoyer', 'broom'], ['weg', 'gaan', 'weggaan', 'partir', 'person-walking']].forEach(([a, b, ab, tr, il], i) => {
      const x = 0.6 + i * 6.2; const y = 1.75;
      d.rect(s, x, y, 1.7, 0.95, { fill: PART, line: null, radius: 0.15 });
      d.t(s, a, x, y, 1.7, 0.95, { size: 24, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, '+', x + 1.7, y, 0.45, 0.95, { size: 28, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, x + 2.15, y, 1.6, 0.95, { fill: 'accent6', line: null, radius: 0.15 });
      d.t(s, b, x + 2.15, y, 1.6, 0.95, { size: 24, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.ill(s, il, x + 4.05, y + 0.05, 0.85, 0.85);
      d.t(s, `= //**${ab}**// (${tr})`, x, y + 1.0, 5.8, 0.5, { size: 18, color: 'tx2' });
    });
    d.t(s, 'LA PARTICULE PEUT ÊTRE…', 0.6, 3.45, 8, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2 });
    const tiles = [['un adverbe', '##samen##werken', 'collaborer', 'handshake'], ['une préposition', '##op##eten', 'manger tout', 'cookie'], ['un nom', '##paard##rijden', 'faire du cheval', 'horse'], ['un adjectif', '##open##doen', 'ouvrir', 'door']];
    tiles.forEach(([cat, w, tr, il], i) => {
      const x = 0.6 + i * 3.1; const y = 3.9;
      d.rect(s, x, y, 2.85, 2.95, { fill: 'bg2', line: BORDER, shadow: true });
      d.ill(s, il, x + 0.95, y + 0.15, 0.95, 0.95);
      d.t(s, `//${w}//`, x, y + 1.2, 2.85, 0.6, { size: 22, bold: true, align: 'center', valign: 'middle', head: true });
      d.t(s, tr, x, y + 1.8, 2.85, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
      d.chip(s, cat, x + 2.85 / 2 - (0.4 + cat.length * 0.118) / 2, y + 2.35, 'accent5', 0.34, 12);
    });
  }

  // ---------------------------------------------------------------- 5 la particule saute au bout
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Au présent, la particule saute au bout' });
    [['②', 'accent6', 4.3], ['⑥', PART, 11.75]].forEach(([n, c, x]) => {
      d.oval(s, x, 1.7, 0.5, 0.5, { fill: c });
      d.t(s, n === '②' ? '2' : '6', x, 1.7, 0.5, 0.5, { size: 16, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    const rows = [
      ['##af##maken', [['Ik', 'n', 1.0], ['maak', 'v', 1.5], ['mijn oefeningen', 'n', 5.8], ['af.', 'p', 1.4]], 'je termine mes exercices'],
      ['##op##bellen', [['Sofie', 'n', 1.0], ['belt', 'v', 1.5], ['de klant morgen', 'n', 5.8], ['op.', 'p', 1.4]], 'Sofie appelle le client demain'],
      ['##mee##nemen', [['We', 'n', 1.0], ['nemen', 'v', 1.5], ['een broodje', 'n', 5.8], ['mee.', 'p', 1.4]], 'nous emportons un sandwich'],
    ];
    rows.forEach(([inf, parts, tr], i) => {
      const y = 2.4 + i * 1.2;
      d.t(s, `//${inf}//`, 0.6, y - 0.05, 2.0, 0.85, { size: 18, bold: true, valign: 'middle' });
      strip(s, 2.7, y, parts, { size: 22, h: 0.75, gap: 0.1 });
      d.t(s, tr, 5.5, y + 0.77, 6, 0.35, { size: 13, italic: true, color: 'accent5' });
    });
    band(s, 'Règle : au présent, le verbe conjugué est en **②**, la particule va **au bout** (**⑥**) : c’est la pince du M3.', 6.15, 0.7, 'tx2');
  }

  // ---------------------------------------------------------------- 6 particules fréquentes
  {
    const s = d.page({ g: 6, tag: 'VOCABULAIRE', title: 'Les particules les plus fréquentes' });
    const P = [['op', '↑', 'opstaan · opbellen'], ['af', '✓', 'afmaken · afspreken'], ['in', '→ ▢', 'inloggen · invullen'], ['uit', '▢ →', 'uitloggen · uitgaan'], ['mee', '+ 👥', 'meenemen · meedoen'],
      ['weg', '←', 'weggaan'], ['terug', '↩', 'terugbellen · terugkomen'], ['aan', '●', 'aankomen · aandoen'], ['door', '→→', 'doorgeven'], ['samen', '⇄', 'samenwerken']];
    const w = (12.13 - 4 * 0.2) / 5; const h = 2.2;
    P.forEach(([p, g, ex], i) => {
      const x = 0.6 + (i % 5) * (w + 0.2); const y = 1.72 + Math.floor(i / 5) * (h + 0.25);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: PART, lw: 2, shadow: true });
      d.rect(s, x, y, w, 1.05, { fill: PART, line: null, radius: 0.08 });
      d.t(s, p, x, y, w, 1.05, { size: 34, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, g.replace('👥', ''), x, y + 1.1, w, 0.5, { size: 20, bold: true, color: PART, align: 'center', valign: 'middle' });
      d.t(s, `//${ex}//`, x + 0.1, y + 1.5, w - 0.2, 0.65, { size: 15, align: 'center', valign: 'middle', fit: true, max: 15, min: 11 });
    });
    d.t(s, 'L’« idée » de la particule aide souvent… mais pas toujours : //afspreken// = fixer un rendez-vous.', 0.6, 6.55, 12.13, 0.35, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 7 séparable ou inséparable
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'Séparable ou inséparable ?' });
    [['SÉPARABLE', PART, 'FaCut', ['//Ik **!!sta!!** **##op##**.//', '//Ik **!!neem!!** mijn laptop **##mee##**.//', '//Ik **!!log!!** om 9 uur **##in##**.//'], 0.6],
      ['INSÉPARABLE', INS, 'FaLock', ['//Ik **!!ontmoet!!** vandaag mijn directeur.//', '//Ik **!!vergeet!!** mijn badge.//', '//Ik **!!betaal!!** de rekening.//'], 6.81]].forEach(([h, c, ic, ex, x]) => {
      d.rect(s, x, 1.7, 5.92, 2.75, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, x, 1.7, 5.92, 0.6, { fill: c, line: null, radius: 0.08 });
      d.icon(s, ic, 'FFFFFF', x + 0.2, 1.82, 0.36);
      d.t(s, h, x + 0.7, 1.7, 5, 0.6, { size: 18, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
      d.t(s, ex, x + 0.3, 2.4, 5.4, 1.95, { size: 20, valign: 'middle', gap: 8 });
    });
    d.rect(s, 0.6, 4.65, 5.92, 2.2, { fill: INS, tr: 90, line: INS, lw: 1.25 });
    d.chip(s, 'TEST 1 · LE PRÉFIXE', 0.8, 4.8, INS, 0.34, 12);
    d.t(s, ['**be- · ge- · ont- · ver- · er- · her-**', '→ inséparable, un seul bloc'], 0.85, 5.25, 5.5, 1.5, { size: 20, valign: 'middle', gap: 6 });
    d.rect(s, 6.81, 4.65, 5.92, 2.2, { fill: PART, tr: 90, line: PART, lw: 1.25 });
    d.chip(s, 'TEST 2 · L’ACCENT', 7.01, 4.8, PART, 0.34, 12);
    d.t(s, ['//**ÓP**-staan// → accent sur la particule : **séparable**', '//ver-**GÉ**-ten// → accent sur le verbe : **inséparable**'], 7.06, 5.25, 5.5, 1.5, { size: 18, valign: 'middle', gap: 8 });
  }

  // ---------------------------------------------------------------- 8 piège
  {
    const s = d.page({ g: 8, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : au présent, on ne colle pas' });
    d.trap(s, 0.6, 1.7, 12.13, 2.45, '« Je me lève à 7 h. » → //{{Ik opsta om 7 uur.}}//', '//Ik **!!sta!!** om 7 uur **##op##**.//', { size: 24 });
    d.trap(s, 0.6, 4.35, 12.13, 2.45, '« J’appelle le client. » → //{{Ik bel op de klant.}}//', '//Ik **!!bel!!** de klant **##op##**.//  — le complément se glisse **entre** les deux morceaux', { size: 22 });
  }

  // ---------------------------------------------------------------- 9 quand elle reste collée
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'Quand la particule reste collée' });
    const rows = [
      ['Modalité (M4, M12)', [['Ik', 'n'], ['moet', 'v'], ['om 6 uur', 'n'], ['opstaan.', 'c']]],
      ['Subordonnée (M9)', [['Ik ben moe', 'n'], ['omdat', 'n'], ['ik om 6 uur', 'n'], ['opsta.', 'c']]],
      ['Futur proche', [['Ik', 'n'], ['ga', 'v'], ['de klant', 'n'], ['opbellen.', 'c']]],
    ];
    rows.forEach(([lab, parts], i) => {
      const y = 1.8 + i * 1.3;
      d.rect(s, 0.6, y, 2.85, 0.85, { fill: 'tx2', line: null });
      d.t(s, lab, 0.75, y, 2.6, 0.85, { size: 16, bold: true, color: 'bg1', valign: 'middle' });
      const e = strip(s, 3.7, y + 0.03, parts, { size: 22, h: 0.8 });
      d.icon(s, 'FaLink', PART, e + 0.15, y + 0.25, 0.36);
    });
    band(s, 'Règle : si la fin de la phrase est **déjà occupée par le verbe**, la particule reste **collée** (en un seul mot).', 5.75, 0.75, PART);
    d.t(s, 'Teaser M15 : au passé composé, le //ge// se glisse au milieu → //op**ge**staan//.', 0.6, 6.55, 12.13, 0.35, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 10 questions et ordres
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'Questions et ordres' });
    d.t(s, 'QUESTIONS', 0.6, 1.7, 5.8, 0.35, { size: 13, bold: true, color: 'accent2', cs: 2 });
    ['//**!!Sta!!** je vroeg **##op##**?//', '//Hoe laat **!!log!!** je **##in##**?//', '//**!!Neem!!** je je laptop **##mee##**?//'].forEach((q, i) => d.bubble(s, q, 0.6, 2.15 + i * 1.3, 5.8, 1.05, 'accent2', { size: 22 }));
    d.t(s, 'ORDRES (IMPÉRATIF)', 6.8, 1.7, 5.9, 0.35, { size: 13, bold: true, color: 'accent6', cs: 2 });
    [['//**!!Kom!!** **##binnen##**!//', 'door'], ['//**!!Doe!!** de deur **##dicht##**!//', 'locked'], ['//**!!Bel!!** me morgen **##terug##**!//', 'telephone-receiver']].forEach(([t, il], i) => {
      const y = 2.15 + i * 1.3;
      d.rect(s, 6.8, y, 5.93, 1.05, { fill: 'FBEDEB', line: 'accent6', lw: 1.5, radius: 0.12 });
      d.ill(s, il, 6.95, y + 0.15, 0.75, 0.75);
      d.t(s, t, 7.9, y, 4.7, 1.05, { size: 22, valign: 'middle' });
    });
    band(s, 'Impératif = le **radical** en tête, la particule reste au bout. + //alstublieft// pour la politesse (M8).', 6.15, 0.7, 'tx2');
  }

  // ---------------------------------------------------------------- 11 une journée au bureau
  {
    const s = d.page({ g: 11, tag: 'VOCABULAIRE', title: 'Une journée au bureau' });
    const day = [
      ['7.00', 'alarm-clock', '//Ik **sta** **##op##**.//', 1], ['7.15', 't-shirt', '//Ik **kleed** me **##aan##**.//', 1], ['7.30', 'croissant', '//Ik **ontbijt**.//', 0], ['8.00', 'automobile', '//Ik **vertrek**.//', 0], ['9.00', 'laptop', '//Ik **log** **##in##**.//', 1],
      ['10.00', 'busts-in-silhouette', '//Ik **woon** een vergadering **##bij##**.//', 1], ['12.00', 'sandwich', '//Ik **neem** mijn lunch **##mee##**.//', 1], ['14.00', 'telephone-receiver', '//Ik **bel** klanten **##op##**.//', 1], ['17.30', 'laptop', '//Ik **log** **##uit##**.//', 1], ['18.00', 'person-walking', '//Ik **ga** **##weg##**.//', 1],
    ];
    d.line(s, 0.6, 2.05, 12.73, 2.05, { color: 'accent5', lw: 2 });
    d.line(s, 0.6, 4.5, 12.73, 4.5, { color: 'accent5', lw: 2 });
    const w = (12.13 - 4 * 0.15) / 5;
    day.forEach(([h, il, t, sep], i) => {
      const x = 0.6 + (i % 5) * (w + 0.15); const y = 1.85 + Math.floor(i / 5) * 2.45;
      d.oval(s, x + w / 2 - 0.12, y + 0.08, 0.24, 0.24, { fill: sep ? PART : INS });
      d.t(s, h, x, y - 0.18, w / 2 - 0.15, 0.3, { size: 13, bold: true, color: 'accent5' });
      d.rect(s, x, y + 0.45, w, 1.72, { fill: 'bg1', line: sep ? PART : INS, lw: 1.75, shadow: true });
      d.ill(s, il, x + w / 2 - 0.35, y + 0.55, 0.7, 0.7);
      d.t(s, t, x + 0.08, y + 1.25, w - 0.16, 0.85, { size: 15, align: 'center', valign: 'middle', fit: true, max: 16, min: 12 });
      if (!sep) d.icon(s, 'FaLock', INS, x + w - 0.35, y + 0.55, 0.24);
    });
    d.t(s, '##orange## = séparable · @@bleu nuit + cadenas@@ = inséparable (//ontbijten, vertrekken//)', 0.6, 6.95 - 0.35, 12.13, 0.35, { size: 14, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 12 organigramme
  {
    const s = d.page({ g: 12, tag: 'À RETENIR', title: 'À retenir : l’organigramme du verbe à particule' });
    const diamond = (t, x, y, w, h, size = 16) => s.addText(t, { shape: d.S.DIAMOND, x, y, w, h, fill: { color: 'EEF3F8' }, line: { color: '17375E', width: 1.5 }, fontSize: size, bold: true, color: '1B2333', align: 'center', valign: 'middle', margin: 0 });
    diamond('Commence par be-, ge-, ont-, ver-, er-, her- ?', 0.6, 1.75, 6.2, 1.25);
    d.line(s, 6.82, 2.37, 7.75, 2.37, { color: 'accent3', lw: 2 });
    d.t(s, 'OUI', 6.95, 1.95, 0.8, 0.3, { size: 12, bold: true, color: 'accent3' });
    d.rect(s, 7.8, 1.85, 4.93, 1.05, { fill: INS, line: null });
    d.icon(s, 'FaLock', 'FFFFFF', 8.0, 2.18, 0.38);
    d.t(s, '**un seul bloc** : //Ik vergeet mijn badge.//', 8.55, 1.85, 4.1, 1.05, { size: 17, color: 'bg1', valign: 'middle' });
    d.line(s, 3.7, 3.02, 3.7, 3.45, { color: 'accent5', lw: 1.75 });
    d.t(s, 'NON', 3.8, 3.05, 0.8, 0.3, { size: 12, bold: true, color: 'accent5' });
    diamond('Un verbe occupe déjà la fin ? (modal, gaan, subordonnée)', 0.6, 3.45, 6.2, 1.25, 15);
    d.line(s, 6.82, 4.07, 7.75, 4.07, { color: 'accent3', lw: 2 });
    d.t(s, 'OUI', 6.95, 3.65, 0.8, 0.3, { size: 12, bold: true, color: 'accent3' });
    d.rect(s, 7.8, 3.55, 4.93, 1.05, { fill: PART, line: null });
    d.icon(s, 'FaLink', 'FFFFFF', 8.0, 3.88, 0.38);
    d.t(s, '**collée** : //Ik moet om 7 uur opstaan.//', 8.55, 3.55, 4.1, 1.05, { size: 17, color: 'bg1', valign: 'middle' });
    d.line(s, 3.7, 4.72, 3.7, 5.2, { color: 'accent5', lw: 1.75 });
    d.t(s, 'NON', 3.8, 4.77, 0.8, 0.3, { size: 12, bold: true, color: 'accent5' });
    d.rect(s, 0.6, 5.2, 6.2, 1.1, { fill: 'accent3', line: null });
    d.icon(s, 'FaCut', 'FFFFFF', 0.8, 5.55, 0.38);
    d.t(s, '**au bout** : //Ik sta om 7 uur op.//', 1.35, 5.2, 5.3, 1.1, { size: 18, color: 'bg1', valign: 'middle' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 13 divider
  d.divider({ g: 13, tiles: [
    ['Ciseaux ou cadenas ?', '★', 'FaCut'], ['Conjuguez', '★', 'FaPencilAlt'], ['Avec un modal', '★★', 'FaLink'], ['La bonne particule', '★★', 'FaPuzzlePiece'],
    ['Le détective', '★★', 'FaSearch'], ['Simon zegt', '★', 'FaChild'], ['Ma journée', '★★★', 'FaClock'],
  ] });

  // ---------------------------------------------------------------- 14 ex1 tri
  const ex1 = [['opstaan', 1], ['vergeten', 0], ['meenemen', 1], ['betalen', 0], ['inloggen', 1], ['ontmoeten', 0], ['terugbellen', 1], ['vertellen', 0], ['weggaan', 1], ['beginnen', 0], ['afspreken', 1], ['herhalen', 0]];
  d.ex({ g: 14, title: 'Exercice 1 — Ciseaux ou cadenas ?', stars: '★', instr: 'Séparable ou inséparable ? Prononcez : où est l’accent ?' }, (s, mode, top) => {
    if (mode === 'q') ex1.forEach(([w], i) => {
      const x = 0.6 + (i % 6) * 2.05; const y = top + Math.floor(i / 6) * 0.78;
      d.word(s, w, x, y, 1.9, 0.62, 'accent5', { size: 18, lw: 1.25, head: true, shadow: true });
    });
    const cy = mode === 'q' ? top + 1.75 : top + 0.1; const h = 6.88 - cy;
    [['SÉPARABLE', PART, 1, 0.6, 'FaCut'], ['INSÉPARABLE', INS, 0, 6.75, 'FaLock']].forEach(([lab, c, sep, x, ic]) => {
      d.rect(s, x, cy, 5.98, h, { fill: c, tr: 90, line: c, lw: 2 });
      d.rect(s, x, cy, 5.98, 0.6, { fill: c, line: null, radius: 0.08 });
      d.icon(s, ic, 'FFFFFF', x + 0.2, cy + 0.12, 0.36);
      d.t(s, lab, x, cy, 5.98, 0.6, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      if (mode === 'a') ex1.filter((e) => e[1] === sep).forEach(([w], k) => {
        const shown = sep ? w.replace(/^(op|mee|in|terug|weg|af)/, '##$1##·') : w;
        d.t(s, `//${shown}//`, x + 0.3 + (k % 2) * 2.8, cy + 0.85 + Math.floor(k / 2) * 0.8, 2.7, 0.7, { size: 24, bold: true, align: 'center', valign: 'middle' });
      });
    });
  });

  // ---------------------------------------------------------------- 15 ex2 conjuguez
  const ex2 = ['Ik [[sta]] om 7 uur [[op]]. //(opstaan)//', 'Sofie [[neemt]] haar laptop [[mee]]. //(meenemen)//', 'We [[loggen]] om 9 uur [[in]]. //(inloggen)//', 'Karim [[belt]] de klant [[op]]. //(opbellen)//', 'Jullie [[komen]] morgen [[terug]]. //(terugkomen)//', 'Hoe laat [[ga]] je [[weg]]? //(weggaan)//', 'Ik [[vergeet]] mijn badge. //(vergeten)//', '[[Doe]] de deur [[dicht]], alstublieft! //(dichtdoen)//'];
  d.ex({ g: 15, title: 'Exercice 2 — Conjuguez', stars: '★', instr: 'Conjuguez au présent. Attention à la place de la particule !' }, (s, mode, top) => {
    d.list(s, ex2, mode, { y: top + 0.1, w: 12.13, h: 6.88 - top - 0.1, cols: 2, size: 20, gap: 14 });
  });

  // ---------------------------------------------------------------- 16 ex3 avec un modal
  const ex3 = [['Ik sta om 6 uur op.', 'moeten', 'Ik moet om 6 uur **##op##staan**.'], ['Sofie belt de klant op.', 'willen', 'Sofie wil de klant **##op##bellen**.'], ['We loggen thuis in.', 'kunnen', 'We kunnen thuis **##in##loggen**.'], ['Je neemt je badge mee.', 'moeten', 'Je moet je badge **##mee##nemen**.'], ['Ik ga om 16 uur weg.', 'mogen', 'Ik mag om 16 uur **##weg##gaan**.'], ['Hij doet mee.', 'willen', 'Hij wil **##mee##doen**.']];
  d.ex({ g: 16, title: 'Exercice 3 — Avec un verbe de modalité', stars: '★★', instr: 'Ajoutez le verbe de modalité : la particule se recolle !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([a, m, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, 1.1, y + 0.05, 4.6, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, `//${a}//`, 1.25, y + 0.05, 4.4, rh - 0.12, { size: 19, valign: 'middle' });
      d.line(s, 5.8, y + rh / 2, 7.05, y + rh / 2, { color: PART, lw: 3 });
      d.t(s, m, 5.75, y, 1.35, rh / 2 - 0.02, { size: 13, bold: true, color: PART, align: 'center', valign: 'bottom' });
      d.rect(s, 7.15, y + 0.05, 5.58, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${b}//`, 7.3, y + 0.05, 5.35, rh - 0.12, { size: 19, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 17 ex4 la bonne particule
  const ex4 = [['Kunt u dit formulier [[in]]vullen?', 'memo'], ['Ik bel je morgen [[terug]].', 'telephone-receiver'], ['Neem je paraplu [[mee]]!', 'umbrella'], ['Doe het raam [[dicht]], het is koud.', 'window'], ['Kleed je vlug [[aan]]!', 't-shirt'], ['Ik sta elke dag om 7 uur [[op]].', 'alarm-clock'], ['Log [[uit]] voor je weggaat!', 'laptop'], ['De bus is [[weg]], we zijn te laat.', 'bus']];
  d.ex({ g: 17, title: 'Exercice 4 — La bonne particule', stars: '★★', instr: 'Complétez avec une particule de la banque.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 4;
    ex4.forEach(([t, il], i) => {
      const x = 0.6 + (i % 2) * 4.6; const y = top + Math.floor(i / 2) * rh;
      d.ill(s, il, x, y + 0.12, 0.65, 0.65);
      d.t(s, `**${i + 1}**  //${t}//`, x + 0.75, y, 3.75, rh - 0.1, { size: 17, valign: 'middle', mode });
    });
    d.rect(s, 9.9, top, 2.83, 6.88 - top, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE', 9.9, top + 0.1, 2.83, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2, align: 'center' });
    ['in', 'terug', 'mee', 'dicht', 'aan', 'op', 'uit', 'weg'].forEach((w, i) => {
      const x = 10.1 + (i % 2) * 1.3; const y = top + 0.6 + Math.floor(i / 2) * 0.85;
      d.rect(s, x, y, 1.15, 0.62, { fill: PART, line: null, radius: 0.3 });
      d.t(s, w, x, y, 1.15, 0.62, { size: 18, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex5 détective
  d.ex({ g: 18, title: 'Exercice 5 — Le détective', stars: '★★', instr: 'Karim écrit à Sofie. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Karim → Sofie', 0.85, top, 8, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = '//Hoi Sofie! {{Morgen ik opsta}}++ Morgen sta ik++ om 6 uur++ op++, want ik moet om 8 uur vertrekken. {{Ik meeneem}}++ Ik neem++ de documenten++ mee++. Kun jij de klant {{bellen op}}++ opbellen++? Ik log om 9 uur in. Ik kom om 15 uur terug en {{dan ik moet}}++ dan moet ik++ de vergadering voorbereiden. Groetjes, Karim//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 21, mode, ls: 1.2, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.2, 1.6, 1.6);
    d.rect(s, 9.9, top + 2.1, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 2.1, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, '//Morgen sta ik… op// corrige 2 erreurs (inversion + particule). Leurres : //Ik log … in · Ik kom … terug//.', 9.9, top + 3.2, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 19 ex6 simon zegt
  {
    const s = d.page({ g: 19, tag: 'JIJ NU !', title: 'Exercice 6 — Simon zegt…', stars: '★' });
    d.ill(s, 'man-teacher', 0.6, 1.8, 2.4, 2.4);
    d.bubble(s, '//**Simon zegt**: sta op!//', 0.6, 4.4, 2.6, 1.0, 'accent1', { size: 18 });
    const orders = ['Sta op!', 'Ga zitten!', 'Doe je ogen dicht!', 'Doe je ogen open!', 'Steek je hand op!', 'Kijk rond!', 'Draai je om!', 'Leg je pen neer!'];
    orders.forEach((o, i) => {
      const x = 3.5 + (i % 2) * 4.0; const y = 1.75 + Math.floor(i / 2) * 0.95;
      d.rect(s, x, y, 3.8, 0.8, { fill: i % 4 === 0 || i % 4 === 3 ? 'bg2' : 'bg1', line: BORDER });
      d.t(s, `//${o.replace(/ (op|dicht|open|rond|om|neer)!$/, ' ##$1##!')}//`, x + 0.2, y, 3.5, 0.8, { size: 21, bold: true, valign: 'middle' });
    });
    d.rect(s, 3.5, 5.65, 9.23, 1.2, { fill: 'accent1', tr: 88, line: 'accent1', lw: 1 });
    d.t(s, ['On obéit **seulement** si l’ordre commence par //Simon zegt…// · Celui qui se trompe donne l’ordre suivant.'], 3.7, 5.65, 8.9, 1.2, { size: 17, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 20 ex7 ma journée
  d.roleplay({
    g: 20, title: 'Exercice 7 — Ma journée de travail',
    a: '**Journaliste** : interrogez votre collègue sur sa journée et notez les heures sur la frise.',
    b: '**Employé·e** : répondez avec au moins **5 verbes à particule**.',
    bank: '//Hoe laat sta je op? · Wanneer vertrek je? · Hoe laat log je in? · Neem je je lunch mee? · Wanneer ga je weg? · Bel je veel klanten op?//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
      d.t(s, 'MA JOURNÉE', x, y + 0.1, w, 0.35, { size: 13, bold: true, color: 'accent5', align: 'center', cs: 2 });
      d.line(s, x + 0.7, y + 0.6, x + 0.7, y + h - 0.25, { color: PART, lw: 3, arrow: false });
      ['7.00', '9.00', '12.00', '15.00', '18.00'].forEach((t, i) => {
        const yy = y + 0.65 + i * ((h - 0.9) / 5);
        d.oval(s, x + 0.6, yy + 0.08, 0.2, 0.2, { fill: PART });
        d.t(s, t, x + 0.95, yy, 0.8, 0.35, { size: 13, bold: true, color: 'accent5' });
        d.line(s, x + 1.8, yy + 0.3, x + w - 0.2, yy + 0.3, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
      });
    },
  });

  // ---------------------------------------------------------------- 21 ticket
  d.ticket({
    g: 21,
    q: ['Séparable ou inséparable : //vergeten// ?', 'Conjuguez : //Ik …… mijn laptop …… (meenemen).//', 'Ajoutez //moeten// : //Ik sta om 6 uur op.//'],
    self: ['Reconnaître', 'Placer', 'Raconter'],
    teaser: { icon: 'FaTrafficLight', text: '**Volgende keer : Modale werkwoorden** — //kunnen, mogen, willen, moeten//' },
  });
}

module.exports = { meta, build };
