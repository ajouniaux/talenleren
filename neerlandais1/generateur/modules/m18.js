// Module 18 — De toekomst · Parler du futur
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 18, slug: 'De_toekomst', title: 'De toekomst — Parler du futur', short: 'De toekomst', template: 'module_18_toekomst.md' };

const PRES = 'accent3'; // présent + marqueur = vert
const GAAN = 'accent2'; // gaan + infinitif = bleu
const ZUL = 'purple'; // zullen + infinitif = violet
const MARK = 'accent1'; // marqueurs de temps = orange

function build(d) {
  // sentence strip: [text, type, width] · n normal · v verbe conjugué · g gaan · z zullen · i infinitif · m marqueur · p particule
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        g: { fill: 'EAF1F8', line: GAAN, lw: 2.5, color: GAAN, bold: true },
        z: { fill: 'F1ECF7', line: ZUL, lw: 2.5, color: ZUL, bold: true },
        i: { fill: 'FBEDEB', line: 'accent6', lw: 2, dash: 'dash', color: 'accent6', bold: true },
        m: { fill: MARK, line: null, color: 'bg1', bold: true },
        p: { fill: 'FDF1E6', line: 'accent1', lw: 2, dash: 'dash', color: 'accent1', bold: true },
      }[ty || 'n'];
      d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, dash: st.dash, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      cx += w + gap;
    });
    return cx - gap;
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  // S1 conjugation card
  const conj = (s, x, y, w, h, inf, tr, rows, c) => {
    d.rect(s, x, y, w, h, { fill: 'bg1', line: c, lw: 2, shadow: true });
    d.rect(s, x, y, w, 0.75, { fill: c, line: null, radius: 0.08 });
    d.t(s, inf, x + 0.2, y, w - 0.4, 0.5, { size: 24, bold: true, color: 'bg1', valign: 'bottom', head: true });
    d.t(s, tr, x + 0.2, y + 0.45, w - 0.4, 0.3, { size: 12, italic: true, color: 'bg1', valign: 'middle' });
    const rh = (h - 0.95) / rows.length;
    rows.forEach(([p, f], i) => {
      const yy = y + 0.85 + i * rh;
      if (i % 2) d.rect(s, x + 0.08, yy, w - 0.16, rh, { fill: 'bg2', line: null, radius: 0 });
      d.t(s, p, x + 0.2, yy, w * 0.52, rh, { size: 16, color: 'accent5', valign: 'middle' });
      d.t(s, `**${f}**`, x + w * 0.52, yy, w * 0.46, rh, { size: 18, color: c, valign: 'middle' });
    });
  };
  // a weekly agenda card
  const agenda = (s, x, y, w, h, title, rows, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true, radius: 0.04 });
    d.rect(s, x, y, w, 0.55, { fill: 'tx2', line: null, radius: 0.04 });
    d.ill(s, 'spiral-calendar', x + 0.15, y + 0.06, 0.44, 0.44);
    d.t(s, title, x + 0.7, y, w - 0.9, 0.55, { size: 14, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
    const rh = (h - 0.65) / rows.length;
    rows.forEach(([day, t, il], i) => {
      const yy = y + 0.6 + i * rh;
      if (i) d.line(s, x + 0.15, yy, x + w - 0.15, yy, { color: 'E2E6EC', lw: 1, arrow: false });
      d.rect(s, x + 0.15, yy + (rh - 0.38) / 2, 1.3, 0.38, { fill: MARK, line: null, radius: 0.06 });
      d.t(s, day, x + 0.15, yy + (rh - 0.38) / 2, 1.3, 0.38, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `//${t}//`, x + 1.6, yy, w - 2.35, rh, { size: o.size || 15, valign: 'middle' });
      if (il) d.ill(s, il, x + w - 0.68, yy + (rh - 0.5) / 2, 0.5, 0.5);
    });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'De toekomst', sub: 'Parler du futur', line: 'Morgen werk ik thuis.',
    visual: (s) => {
      d.ill(s, 'tear-off-calendar', 7.0, 1.0, 1.8, 1.8);
      [['morgen', 9.05], ['volgende week', 10.25], ['volgend jaar', 11.6]].forEach(([t, x], i) => {
        d.rect(s, x, 1.55, 1.1, 0.8, { fill: 'FFFFFF', tr: i * 30, line: null, radius: 0.08 });
        d.t(s, t, x, 1.55, 1.1, 0.8, { size: 12, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
      });
      d.line(s, 9.05, 2.65, 12.65, 2.65, { color: 'F6C27E', lw: 3 });
      d.t(s, 'le futur', 9.05, 2.75, 3.6, 0.35, { size: 14, italic: true, color: 'F6C27E', align: 'center' });
      d.rect(s, 6.95, 3.65, 5.8, 1.15, { fill: 'FFFFFF', line: null, radius: 0.15, shadow: true });
      d.t(s, 'Wat **^^ga^^** je morgen **!!doen!!**?', 6.95, 3.65, 5.8, 1.15, { size: 28, align: 'center', valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCalendarAlt', h: 'Planifier', t: 'Je parle de mon agenda : //Maandag heb ik een vergadering.//', color: PRES },
      { icon: 'FaArrowRight', h: 'Annoncer', t: 'J’annonce un projet : //Ik ga verhuizen.//', color: GAAN },
      { icon: 'FaHandshake', h: 'Promettre', t: 'Je promets et je propose : //Ik zal je helpen. Zullen we gaan?//', color: ZUL },
    ],
    band: 'Au bureau, on planifie, on s’engage, on propose : trois besoins, trois outils.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — l’agenda de Sofie' });
    agenda(s, 0.6, 1.7, 6.3, 5.15, 'SOFIE · VOLGENDE WEEK', [['maandag', '9.00 vergadering met An', 'busts-in-silhouette'], ['dinsdag', 'thuiswerken', 'house'], ['woensdag', '14.00 gesprek met een kandidaat', 'handshake'], ['donderdag', 'klant in Antwerpen', 'train'], ['vrijdag', '17.00 afscheidsdrink van Jan', 'clinking-glasses']], { size: 16 });
    [['Wat doet Sofie maandag?', 'Maandag **heeft** ze een vergadering met An.'], ['Wat doet ze dinsdag?', 'Dinsdag **werkt** ze thuis.']].forEach(([q, a], i) => {
      const y = 1.7 + i * 1.75;
      d.bubble(s, `//${q}//`, 7.2, y, 5.53, 0.7, 'accent2', { size: 18 });
      d.bubble(s, `//${a}//`, 7.6, y + 0.8, 5.13, 0.8, 'accent3', { size: 18 });
    });
    d.rect(s, 7.2, 5.3, 5.53, 1.55, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 7.4, 5.6, 0.9, 0.9);
    d.t(s, ['Quel est le temps du verbe ?', 'Le **présent** ! Le jour suffit à situer l’action.'], 8.45, 5.3, 4.2, 1.55, { size: 17, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 trois façons
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Trois façons de parler du futur' });
    d.oval(s, 0.6, 3.55, 0.95, 0.95, { fill: 'tx2' });
    d.t(s, 'NU', 0.6, 3.55, 0.95, 0.95, { size: 18, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    const R = [
      [PRES, 1.75, 1.5, '① présent + marqueur', 'un plan, un horaire · **le plus fréquent**', '//**Morgen** werk ik thuis.//'],
      [GAAN, 3.45, 1.25, '② gaan + infinitif', 'une intention, un changement, un signe visible', '//Ik ga volgend jaar verhuizen. · Het gaat regenen.//'],
      [ZUL, 4.9, 1.05, '③ zullen + infinitif', 'une promesse, une proposition, une annonce officielle', '//Ik zal je helpen. · Zullen we gaan?//'],
    ];
    R.forEach(([c, y, h, t, use, ex]) => {
      d.line(s, 1.57, 4.02, 1.95, y + h / 2, { color: c, lw: 2.5, arrow: false });
      d.rect(s, 1.95, y, 9.85, h, { fill: c, line: null, radius: 0.06 });
      d.poly(s, [[11.8, y], [12.35, y + h / 2], [11.8, y + h]], { fill: c, line: null });
      d.t(s, [`**${t}** — ${use}`, ex], 2.15, y, 9.6, h, { size: h > 1.2 ? 19 : 17, color: 'bg1', valign: 'middle', gap: 4 });
    });
    d.icon(s, 'FaFlagCheckered', 'tx2', 12.3, 3.8, 0.45);
    band(s, 'Le français a un futur simple (« je travaillerai ») ; le néerlandais n’en a pas vraiment besoin.', 6.15, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 5 présent + marqueur
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Le présent + un marqueur de temps' });
    const rows = [
      [['Morgen', 'm', 2.7], ['werk', 'v', 1.2], ['ik thuis.', 'n', 2.9]],
      [['Volgende week', 'm', 2.7], ['gaan', 'v', 1.2], ['we naar Gent.', 'n', 2.9]],
      [['Om 3 uur', 'm', 2.7], ['heb', 'v', 1.2], ['ik een vergadering.', 'n', 2.9]],
      [['Ik', 'n', 2.7], ['bel', 'v', 1.2], ['je', 'n', 0.7], ['straks', 'm', 1.2], ['terug.', 'p', 1.1]],
    ];
    [['1', 'marqueur', 1.95], ['2', 'verbe (inversion, M3)', 4.0]].forEach(([n, lab, cx]) => {
      d.oval(s, cx - 0.22, 1.68, 0.44, 0.44, { fill: n === '1' ? MARK : 'accent6' });
      d.t(s, n, cx - 0.22, 1.68, 0.44, 0.44, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, lab, cx + 0.3, 1.68, 3, 0.44, { size: 13, bold: true, color: n === '1' ? MARK : 'accent6', valign: 'middle' });
    });
    rows.forEach((r, i) => strip(s, 0.6, 2.3 + i * 0.85, r, { size: 21, h: 0.7 }));
    d.card(s, 7.95, 2.3, 4.78, 3.25, { icon: 'FaLightbulb', head: 'Repères', color: MARK, body: ['Marqueur **en tête** → inversion (M3).', 'En fin de phrase, pas d’inversion : //Ik werk morgen thuis.//', '//straks// = tout à l’heure'], size: 16, gap: 10 });
    band(s, 'FR : « Je **travaillerai** demain. » → NL : //Morgen **werk** ik.// (présent)', 6.15, 0.7, 'tx2', 19);
  }

  // ---------------------------------------------------------------- 6 piège trois calques
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : trois calques du futur' });
    d.rect(s, 0.6, 1.7, 12.13, 4.4, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const R = [['person-walking', '« Je vais aller à Gand. »', 'Ik ga naar Gent gaan.', 'Ik **ga** naar Gent.'], ['laptop', '« Je travaillerai demain. »', 'Ik zal werken morgen.', 'Morgen **werk** ik. / Ik zal morgen **werken**.'], ['cityscape', '« Quand je serai à Bruxelles, je t’appellerai. »', 'Als ik in Brussel zal zijn, …', 'Als ik in Brussel **ben**, bel ik je.']];
    R.forEach(([il, fr, ko, ok], i) => {
      const y = 2.3 + i * 1.22;
      d.ill(s, il, 0.85, y + 0.12, 0.75, 0.75);
      d.t(s, fr, 1.75, y, 3.4, 1.0, { size: 16, valign: 'middle' });
      d.t(s, `✗ //{{${ko}}}//`, 5.15, y, 2.95, 1.0, { size: 14, color: 'accent6', valign: 'middle' });
      d.line(s, 8.1, y + 0.5, 8.4, y + 0.5, { color: 'accent3', lw: 2 });
      d.rect(s, 8.45, y + 0.1, 4.1, 0.8, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.55, y + 0.1, 3.95, 0.8, { size: 17, valign: 'middle', fit: true, max: 17, min: 13 });
    });
    band(s, '//Ik ga naar Gent// = « je vais aller » · avec //zullen//, l’infinitif au bout · après //als//, le **présent**', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 7 gaan + infinitif
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'gaan + infinitif' });
    conj(s, 0.6, 1.7, 3.5, 4.25, 'gaan', 'aller', [['ik', 'ga'], ['jij · u', 'gaat'], ['hij · zij', 'gaat'], ['we · jullie · zij', 'gaan']], GAAN);
    const rows = [
      [['Ik', 'n'], ['ga', 'g'], ['een nieuwe auto', 'n'], ['kopen.', 'i']],
      [['We', 'n'], ['gaan', 'g'], ['verhuizen.', 'i']],
      [['Kijk, het', 'n'], ['gaat', 'g'], ['regenen!', 'i']],
      [['Sofie', 'n'], ['gaat', 'g'], ['de klant', 'n'], ['opbellen.', 'i']],
    ];
    rows.forEach((r, i) => strip(s, 4.4, 1.75 + i * 1.05, r, { size: 22, h: 0.8 }));
    band(s, 'FR « aller + infinitif » = NL //gaan// + infinitif… mais **séparés** (la pince, M3) !', 6.15, 0.7, 'tx2', 19);
  }

  // ---------------------------------------------------------------- 8 piège gaan
  {
    const s = d.page({ g: 8, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : gaan — aller quelque part ou aller faire ?' });
    [['DÉPLACEMENT', 'person-walking', 'Ik ga **naar de bakker**.', 'je vais chez le boulanger', 'gaan + un lieu', 'accent5', 0.6], ['FUTUR', 'bread', 'Ik ga brood **kopen**.', 'je vais acheter du pain', 'gaan + infinitif au bout', GAAN, 6.81]].forEach(([h, il, nl, fr, rule, c, x]) => {
      d.rect(s, x, 1.7, 5.92, 2.95, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.rect(s, x, 1.7, 5.92, 0.55, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, 1.7, 5.92, 0.55, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      d.ill(s, il, x + 0.3, 2.5, 1.2, 1.2);
      d.t(s, `//${nl}//`, x + 1.7, 2.4, 4.1, 0.75, { size: 22, valign: 'middle' });
      d.t(s, fr, x + 1.7, 3.1, 4.1, 0.45, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
      d.chip(s, rule, x + 1.7, 3.75, c, 0.36, 13);
    });
    d.rect(s, 0.6, 4.9, 12.13, 0.8, { fill: 'bg2', line: BORDER });
    d.t(s, 'Les deux : //Ik **ga** brood **kopen** bij de bakker.//', 0.85, 4.9, 11.7, 0.8, { size: 20, valign: 'middle' });
    d.rect(s, 0.6, 5.9, 12.13, 0.95, { fill: 'accent6', tr: 92, line: 'accent6', lw: 1 });
    d.t(s, '⚠ //Ik ga eten.// = je vais manger (maintenant, ou plus tard : le **contexte** décide)', 0.85, 5.9, 11.7, 0.95, { size: 19, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 9 zullen
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'zullen + infinitif' });
    conj(s, 0.6, 1.7, 3.6, 5.15, 'zullen', 'promettre, proposer…', [['ik', 'zal'], ['jij', 'zult · zal'], ['u', 'zult · zal'], ['hij · zij', 'zal'], ['we · jullie · zij', 'zullen']], ZUL);
    const U = [['handshake', 'promesse', 'Ik **zal** het morgen **doen**.'], ['hot-beverage', 'proposition', '**Zullen** we koffie **drinken**?'], ['loudspeaker', 'annonce officielle', 'De vergadering **zal** om 10 uur **beginnen**.'], ['thinking-face', 'supposition', 'Hij **zal** wel ziek **zijn**. (il doit être malade)']];
    const w = (12.73 - 4.45 - 0.2) / 2;
    U.forEach(([il, lab, ex], i) => {
      const x = 4.45 + (i % 2) * (w + 0.2); const y = 1.7 + Math.floor(i / 2) * 2.15;
      d.rect(s, x, y, w, 1.98, { fill: ZUL, tr: 92, line: ZUL, lw: 1.5, radius: 0.12 });
      d.ill(s, il, x + 0.2, y + 0.2, 0.75, 0.75);
      d.t(s, lab, x + 1.1, y + 0.2, w - 1.25, 0.75, { size: 18, bold: true, color: ZUL, valign: 'middle' });
      d.t(s, `//${ex}//`, x + 0.25, y + 1.0, w - 0.45, 0.9, { size: 17, valign: 'middle' });
    });
    d.t(s, 'Rappel M12 · //jij zal// : très courant en Flandre · //zal wel// = « sans doute »', 4.45, 6.1, 8.28, 0.75, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 10 marqueurs
  {
    const s = d.page({ g: 10, tag: 'VOCABULAIRE', title: 'Les marqueurs du futur' });
    d.line(s, 0.9, 2.95, 12.6, 2.95, { color: 'accent5', lw: 3 });
    d.iconDisc(s, 'FaMapMarkerAlt', 0.65, 2.7, 0.5, 'tx2');
    d.t(s, 'nu', 0.55, 3.25, 0.7, 0.3, { size: 13, bold: true, color: 'tx2', align: 'center' });
    const M = [['straks', 'tout à l’heure'], ['vanavond', 'ce soir'], ['morgen', 'demain'], ['overmorgen', 'après-demain'], ['volgende week', 'la semaine prochaine'], ['over twee weken', 'dans deux semaines'], ['volgend jaar', 'l’an prochain']];
    M.forEach(([nl, fr], i) => {
      const cx = 2.05 + i * 1.6;
      d.t(s, `//**${nl}**//`, cx - 0.8, 1.75, 1.6, 0.85, { size: 16, align: 'center', valign: 'bottom', color: MARK });
      d.oval(s, cx - 0.13, 2.82, 0.26, 0.26, { fill: MARK });
      d.t(s, fr, cx - 0.8, 3.2, 1.6, 0.55, { size: 12, italic: true, color: 'accent5', align: 'center', valign: 'top' });
    });
    d.t(s, '+ //**binnenkort**// = bientôt', 9.5, 3.75, 3.23, 0.35, { size: 14, color: 'accent5', align: 'right' });
    d.t(s, 'LE MIROIR DU M15', 0.6, 4.15, 6, 0.32, { size: 12, bold: true, color: 'accent5', cs: 2 });
    [['gisteren', 'morgen'], ['vorige week', 'volgende week'], ['twee dagen geleden', 'over twee dagen']].forEach(([a, b], i) => {
      const x = 0.6 + i * 4.11;
      d.rect(s, x, 4.5, 3.91, 0.85, { fill: 'bg2', line: BORDER });
      d.t(s, `//${a}// ⇄ //**##${b}##**//`, x, 4.5, 3.91, 0.85, { size: 17, align: 'center', valign: 'middle' });
    });
    band(s, '//over// + durée = « dans » (//over een uur//) · //in een uur// = « en une heure » · //volgend jaar// (het) / //volgende week// (de)', 5.7, 0.95, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 11 projets
  {
    const s = d.page({ g: 11, tag: 'VOCABULAIRE', title: 'Parler de ses projets' });
    const P = [['delivery-truck', 'Ik **ga verhuizen**.'], ['ring', 'We **gaan trouwen**.'], ['briefcase', 'Ik **ga** een nieuwe job **zoeken**.'], ['books', 'Ik **ga** een cursus **volgen**.'], ['luggage', 'We **gaan** op reis.'], ['beach-with-umbrella', 'Mijn vader **gaat** met pensioen.']];
    const w = (12.13 - 2 * 0.25) / 3;
    P.forEach(([il, t], i) => {
      const x = 0.6 + (i % 3) * (w + 0.25); const y = 1.7 + Math.floor(i / 3) * 2.15;
      d.rect(s, x, y, w, 1.95, { fill: GAAN, tr: 90, line: GAAN, lw: 1.5, radius: 0.15 });
      d.ill(s, il, x + 0.2, y + 0.47, 1.0, 1.0);
      d.t(s, `//${t}//`, x + 1.35, y, w - 1.45, 1.95, { size: 18, valign: 'middle' });
    });
    d.t(s, 'Aperçu : //Ik ben **van plan om** te verhuizen.// (j’ai l’intention de…) · //met pensioen gaan// = prendre sa retraite', 0.6, 6.15, 12.13, 0.65, { size: 16, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 12 aperçu futur antérieur
  {
    const s = d.page({ g: 12, tag: '+ APERÇU', title: '+ APERÇU : le futur antérieur' });
    d.line(s, 0.9, 3.1, 12.5, 3.1, { color: 'accent5', lw: 3 });
    d.iconDisc(s, 'FaMapMarkerAlt', 0.65, 2.85, 0.5, 'tx2');
    d.t(s, 'nu', 0.55, 3.4, 0.7, 0.3, { size: 13, bold: true, color: 'tx2', align: 'center' });
    d.rect(s, 2.0, 2.45, 6.0, 0.55, { fill: ZUL, tr: 75, line: ZUL, lw: 1.5, dash: 'dash', radius: 0.06 });
    d.t(s, '//het rapport schrijven// ✓', 2.0, 2.45, 6.0, 0.55, { size: 16, bold: true, color: ZUL, align: 'center', valign: 'middle' });
    d.line(s, 8.0, 1.85, 8.0, 3.45, { color: 'accent6', lw: 2.5, arrow: false });
    d.icon(s, 'FaFlagCheckered', 'accent6', 7.85, 1.75, 0.4);
    d.t(s, '//vrijdag 17 uur//', 8.15, 3.2, 2.5, 0.4, { size: 15, bold: true, color: 'accent6' });
    d.t(s, ['//Vrijdag **zal** ik het rapport **geschreven hebben**.// (j’aurai écrit)', '//Volgend jaar **zal** ik hier tien jaar **gewerkt hebben**.//', 'À l’oral, souvent : //Vrijdag **heb** ik het rapport **geschreven**.// (passé composé + marqueur)'], 0.6, 3.9, 12.13, 2.1, { size: 19, gap: 10, valign: 'middle' });
    band(s, 'À reconnaître seulement. Le passé composé + un marqueur futur est la solution la plus simple.', 6.2, 0.65, 'accent5', 17);
  }

  // ---------------------------------------------------------------- 13 organigramme
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : quel futur choisir ?' });
    const diamond = (t, x, y, w, h, size = 14) => s.addText(t, { shape: d.S.DIAMOND, x, y, w, h, fill: { color: 'EEF3F8' }, line: { color: '17375E', width: 1.5 }, fontSize: size, bold: true, color: '1B2333', align: 'center', valign: 'middle', margin: 0 });
    const Q = [['Un plan, un horaire, avec un marqueur ?', PRES, 'présent : //Morgen werk ik thuis.//'], ['Une intention, un changement, un signe visible ?', GAAN, '//gaan// + inf. : //Ik ga verhuizen.//'], ['Une promesse, une proposition, une annonce ?', ZUL, '//zullen// + inf. : //Ik zal je bellen.//']];
    Q.forEach(([q, c, res], i) => {
      const y = 1.7 + i * 1.22;
      diamond(q, 0.6, y, 4.6, 1.0, 13);
      d.line(s, 5.22, y + 0.5, 5.75, y + 0.5, { color: 'accent3', lw: 2 });
      d.t(s, 'OUI', 5.2, y + 0.12, 0.6, 0.3, { size: 12, bold: true, color: 'accent3', align: 'center' });
      d.rect(s, 5.8, y + 0.1, 3.85, 0.8, { fill: c, line: null });
      d.t(s, res, 5.95, y + 0.1, 3.6, 0.8, { size: 16, color: 'bg1', valign: 'middle' });
      d.line(s, 2.9, y + 1.0, 2.9, y + 1.22, { color: 'accent5', lw: 1.75 });
      d.t(s, 'NON', 3.0, y + 0.98, 0.7, 0.26, { size: 11, bold: true, color: 'accent5' });
    });
    d.rect(s, 0.6, 5.36, 9.05, 0.9, { fill: 'tx2', line: null });
    d.icon(s, 'FaLightbulb', 'FFFFFF', 0.8, 5.6, 0.4);
    d.t(s, 'Dans le doute : le **présent + un marqueur**. C’est presque toujours possible.', 1.4, 5.36, 8.1, 0.9, { size: 18, color: 'bg1', valign: 'middle' });
    d.rect(s, 9.95, 1.7, 2.78, 4.56, { fill: 'bg2', line: BORDER });
    d.t(s, 'LA PINCE', 9.95, 1.8, 2.78, 0.32, { size: 12, bold: true, color: 'accent5', align: 'center', cs: 2 });
    strip(s, 10.15, 2.3, [['ga / zal', 'g', 2.38]], { size: 18, h: 0.6 });
    d.t(s, '② verbe conjugué', 10.15, 2.92, 2.38, 0.35, { size: 13, color: 'accent5', align: 'center' });
    strip(s, 10.15, 3.45, [['infinitif', 'i', 2.38]], { size: 18, h: 0.6 });
    d.t(s, '⑥ au bout', 10.15, 4.07, 2.38, 0.35, { size: 13, color: 'accent5', align: 'center' });
    d.t(s, '//Ik **zal** je morgen **bellen**.//', 10.1, 4.6, 2.5, 1.5, { size: 16, align: 'center', valign: 'middle' });
    d.t(s, 'Ce schéma est la référence pour tous les exercices.', 0.6, 6.42, 9.05, 0.4, { size: 14, italic: true, color: 'accent5' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['L’agenda de Karim', '★', 'FaCalendarAlt'], ['Qu’est-ce qui va se passer ?', '★', 'FaEye'], ['Je vous le promets !', '★★', 'FaHandshake'], ['Quel futur ?', '★★', 'FaRandom'],
    ['Le détective', '★★', 'FaSearch'], ['La boule de cristal', '★', 'FaMagic'], ['La journée d’équipe', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 agenda de Karim
  const kar = [['maandag', '8.30 tandarts', 'tooth'], ['dinsdag', '10.00 vergadering met meneer Maes', 'busts-in-silhouette'], ['woensdag', 'thuiswerken', 'house'], ['donderdag', 'cursus Nederlands', 'books'], ['vrijdag', '12.00 lunch met Sofie', 'fork-and-knife-with-plate'], ['zaterdag', 'verhuizen!', 'delivery-truck']];
  const ex1 = [['Wat doet Karim maandag?', 'Maandag gaat hij om half negen naar de tandarts.'], ['Wanneer heeft hij een vergadering?', 'Dinsdag om 10 uur.'], ['Waar werkt hij woensdag?', 'Woensdag werkt hij thuis.'], ['Wat doet hij donderdag?', 'Donderdag volgt hij een cursus Nederlands.'], ['Met wie luncht hij vrijdag?', 'Vrijdag luncht hij met Sofie.'], ['Wat gebeurt er zaterdag?', 'Zaterdag verhuist hij. / Zaterdag gaat hij verhuizen.']];
  d.ex({ g: 15, title: 'Exercice 1 — L’agenda de Karim', stars: '★', instr: 'Répondez avec le présent. Mettez le jour en tête : attention à l’inversion !' }, (s, mode, top) => {
    agenda(s, 0.6, top, 4.75, 6.88 - top, 'KARIM · VOLGENDE WEEK', kar, { size: 14 });
    const rh = (6.88 - top) / 6;
    ex1.forEach(([q, a], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 5.6, y + 0.05, 0.36, 'tx2', 12);
      d.t(s, `//**${q}**//`, 6.05, y, 6.68, 0.36, { size: 15, valign: 'middle' });
      d.rect(s, 6.05, y + 0.37, 6.68, rh - 0.43, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1 });
      if (mode === 'a') d.t(s, `//${a}//`, 6.15, y + 0.37, 6.5, rh - 0.43, { size: 15, bold: true, color: 'accent3', valign: 'middle', fit: true, max: 15, min: 12 });
    });
  });

  // ---------------------------------------------------------------- 16 ex2 qu'est-ce qui va se passer
  const ex2 = [['cloud-with-rain', 'Het [[gaat regenen]].', 'regenen'], ['yawning-face', 'Hij [[gaat slapen]].', 'slapen'], ['bus', 'Hij [[gaat]] de bus [[missen]].', 'missen'], ['man-cook', 'We [[gaan eten]].', 'eten'], ['airplane-departure', 'Het vliegtuig [[gaat vertrekken]].', 'vertrekken'], ['pregnant-woman', 'Ze [[gaat]] een baby [[krijgen]].', 'krijgen']];
  d.ex({ g: 16, title: 'Exercice 2 — Qu’est-ce qui va se passer ?', stars: '★', instr: 'Regardez l’image : que va-t-il se passer ? Utilisez gaan + infinitif.' }, (s, mode, top) => {
    const w = (12.13 - 2 * 0.25) / 3; const h = (6.88 - top - 0.2) / 2;
    ex2.forEach(([il, t, v], i) => {
      const x = 0.6 + (i % 3) * (w + 0.25); const y = top + Math.floor(i / 3) * (h + 0.2);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: BORDER, shadow: true });
      d.num(s, i + 1, x + 0.12, y + 0.12, 0.4, 'tx2', 13);
      d.ill(s, il, x + w / 2 - 0.6, y + 0.15, 1.2, 1.2);
      d.t(s, `//${t}//`, x + 0.15, y + 1.35, w - 0.3, h - 1.75, { size: 17, align: 'center', valign: 'middle', mode });
      d.t(s, `(${v})`, x + 0.15, y + h - 0.38, w - 0.3, 0.32, { size: 13, italic: true, color: 'accent5', align: 'center' });
    });
  });

  // ---------------------------------------------------------------- 17 ex3 promesses
  const ex3 = [['Meneer Maes wacht op een offerte.', 'Ik zal u morgen een offerte sturen.'], ['Sofie heeft hulp nodig.', 'Ik zal je helpen.'], ['De printer is kapot.', 'Ik zal de technicus bellen.'], ['An wil het rapport vrijdag.', 'Ik zal het rapport vrijdag afmaken.'], ['Een collega is jarig.', 'Zullen we een taart kopen?'], ['Het is 12 uur en je hebt honger.', 'Zullen we gaan lunchen?']];
  d.ex({ g: 17, title: 'Exercice 3 — Je vous le promets !', stars: '★★', instr: 'Réagissez avec une promesse (Ik zal…) ou une proposition (Zullen we…?).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([a, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, 1.1, y + 0.05, 4.9, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, `//${a}//`, 1.25, y + 0.05, 4.7, rh - 0.12, { size: 18, valign: 'middle' });
      d.line(s, 6.1, y + rh / 2, 6.9, y + rh / 2, { color: ZUL, lw: 3 });
      d.rect(s, 7.0, y + 0.05, 5.73, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${b}//`, 7.15, y + 0.05, 5.5, rh - 0.12, { size: 18, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex4 quel futur
  const ex4 = ['Morgen [[werk]] ik thuis. //(werken)//', 'Kijk naar de lucht: het [[gaat regenen]]! //(regenen)//', 'Ik beloof het: ik [[zal]] het niet [[vergeten]]. //(vergeten)//', 'Volgend jaar [[gaan]] we [[verhuizen]]. //(verhuizen)//', '[[Zullen]] we om 12 uur [[gaan]] eten? //(gaan)//', 'De trein [[vertrekt]] om 8 uur. //(vertrekken)//', 'Wat [[ga]] je in het weekend [[doen]]? //(doen)//', 'Ik bel je als ik in Brussel [[ben]]. //(zijn)//'];
  d.ex({ g: 18, title: 'Exercice 4 — Quel futur ?', stars: '★★', instr: 'Complétez avec la forme la plus naturelle : présent, gaan ou zullen.' }, (s, mode, top) => {
    d.list(s, ex4, mode, { y: top + 0.15, w: 12.13, h: 5.0 - top + 1.0, cols: 2, size: 19, gap: 18 });
    if (mode === 'a') d.t(s, 'Aussi possible : n° 4 //Volgend jaar verhuizen we.// · n° 7 //Wat doe je in het weekend?// · n° 8 : présent après //als// (diapo 6)', 0.6, 6.25, 12.13, 0.6, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  });

  // ---------------------------------------------------------------- 19 ex5 détective
  d.ex({ g: 19, title: 'Exercice 5 — Le détective', stars: '★★', instr: 'Karim écrit à An pour annoncer sa semaine. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Karim Benali · Aan: An Janssens · Onderwerp: volgende week', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = '//Beste An, {{volgende week ik ben}}++ volgende week ben ik++ op cursus in Gent. Ik ga maandag met de trein naar Gent{{ gaan}}. Dinsdag {{zal ik werken thuis}}++ zal ik thuis werken++. Woensdag ga ik meneer Maes opbellen. Als ik terug {{zal zijn}}++ ben++, {{ik schrijf}}++ schrijf ik++ het rapport. Ik zal het je vrijdag sturen. Groeten, Karim//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 21, mode, ls: 1.25, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //Woensdag ga ik meneer Maes opbellen · Ik zal het je vrijdag sturen//.', 9.9, top + 3.05, 2.83, 1.8, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 20 ex6 boule de cristal
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — La boule de cristal', stars: '★' });
    d.ill(s, 'crystal-ball', 0.6, 1.8, 2.4, 2.4);
    const T = [['briefcase', 'werk'], ['red-heart', 'liefde'], ['airplane', 'reizen'], ['money-bag', 'geld'], ['house', 'wonen'], ['stethoscope', 'gezondheid']];
    T.forEach(([il, t], i) => {
      const x = 3.3 + (i % 3) * 1.5; const y = 1.8 + Math.floor(i / 3) * 1.25;
      d.rect(s, x, y, 1.35, 1.1, { fill: 'purple', tr: 85, line: 'purple', lw: 1.5, radius: 0.12 });
      d.ill(s, il, x + 0.4, y + 0.08, 0.55, 0.55);
      d.t(s, t, x, y + 0.65, 1.35, 0.4, { size: 13, bold: true, color: 'purple', align: 'center', valign: 'middle' });
    });
    d.t(s, ['**1.** Par trois : la voyante tire 2 cartes-thèmes.', '**2.** Elle prédit l’avenir d’un camarade, avec //gaan// et //zullen//.', '**3.** Le camarade réagit.'], 8.0, 1.8, 4.73, 2.4, { size: 16, gap: 10, valign: 'middle' });
    d.bubble(s, '//Jij **gaat** een nieuwe job **vinden**. Je **zult** veel **reizen**.//', 0.6, 4.6, 7.0, 1.0, 'purple', { size: 19 });
    d.bubble(s, '//Echt? Fantastisch! · Nee, dat geloof ik niet!//', 3.0, 5.8, 7.0, 0.95, 'accent2', { size: 19 });
    d.ill(s, 'party-popper', 10.4, 5.0, 1.2, 1.2);
  }

  // ---------------------------------------------------------------- 21 ex7 journée d'équipe
  d.roleplay({
    g: 21, title: 'Exercice 7 — La journée d’équipe',
    scenario: 'Le mois prochain, Peeters & Co organise une journée d’équipe (//teamdag//). An et Sofie préparent le programme.',
    a: '**An** : proposez des activités et un horaire : //Om 9 uur… Daarna gaan we…//',
    b: '**Sofie** : réagissez, proposez autre chose et promettez d’organiser : //Zullen we…? Ik zal…//',
    bank: '//Om 9 uur beginnen we met koffie. · Daarna gaan we… · Zullen we ’s middags…? · Ik zal de bus reserveren. · Wat gaan we ’s avonds doen? · Goed idee! · Dat is te duur.//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.55, { fill: 'purple', line: null, radius: 0.04 });
      d.t(s, 'PROGRAMMA TEAMDAG', x + 0.15, y, w - 0.3, 0.55, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      ['9.00', '10.30', '12.30', '14.00', '16.00', '18.00'].forEach((t, i) => {
        const yy = y + 0.75 + i * ((h - 0.9) / 6);
        d.rect(s, x + 0.2, yy, 0.8, 0.36, { fill: MARK, line: null, radius: 0.06 });
        d.t(s, t, x + 0.2, yy, 0.8, 0.36, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
        d.line(s, x + 1.15, yy + 0.3, x + w - 0.2, yy + 0.3, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['Traduisez avec le présent : « Demain, je travaillerai à la maison. »', '//gaan// ou //zullen// ? « Promis : je …… t’aider. »', 'Corrigez : //Als ik klaar zal zijn, bel ik je.//'],
    self: ['Planifier', 'Annoncer', 'Promettre'],
    teaser: { icon: 'FaHistory', text: '**Volgende keer : Het imperfectum** — //Toen ik klein was…//' },
  });
}

module.exports = { meta, build };
