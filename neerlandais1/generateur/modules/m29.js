// Module 29 — Als ik tijd had… · Le conditionnel (bilan du bloc 6)
const { BORDER, plain } = require('../lib');

const meta = { n: 29, slug: 'Als_ik_tijd_had', title: 'Als ik tijd had… — Le conditionnel', short: 'Als ik tijd had…', template: 'module_29_voorwaardelijke_wijs.md' };

const POL = 'accent2'; // politesse
const CON = 'accent3'; // conseil, souhait
const HYP = 'purple'; // hypothèse

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.72; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        v2: { fill: 'FFFFFF', line: 'accent6', lw: 2, dash: 'dash', color: 'accent6', bold: true },
        g: { fill: 'accent3', line: null, color: 'bg1', bold: true },
        w: { fill: 'F1EBF8', line: HYP, lw: 1.5, color: 'tx1', bold: false },
        wv: { fill: 'F1EBF8', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
      }[ty || 'n'];
      const w = wf || wOf(t, size) * (st.bold ? 1.12 : 1) + (st.bold ? 0.08 : 0);
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
  const trapFrame = (s, h = 4.35) => {
    d.rect(s, 0.6, 1.7, 12.13, h, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Als ik tijd had…', sub: 'Le conditionnel', line: 'Zou je me kunnen helpen? · Als ik de lotto won, zou ik een reis maken.',
    visual: (s) => {
      d.rect(s, 7.0, 1.0, 5.7, 1.5, { fill: 'FFFFFF', line: null, radius: 0.2, shadow: true });
      d.ill(s, 'folded-hands', 7.2, 1.25, 1.0, 1.0);
      d.t(s, '//**@@Zou@@** je me kunnen helpen?//', 8.35, 1.0, 4.2, 1.5, { size: 21, valign: 'middle', head: true });
      d.oval(s, 7.0, 2.85, 5.7, 2.1, { fill: 'FFFFFF' });
      d.oval(s, 7.3, 5.0, 0.35, 0.25, { fill: 'FFFFFF' });
      d.oval(s, 7.05, 5.3, 0.22, 0.16, { fill: 'FFFFFF' });
      d.ill(s, 'luggage', 7.45, 3.4, 1.0, 1.0);
      d.t(s, '//Als ik de lotto won, **@@zou@@** ik een reis maken.//', 8.55, 2.95, 3.85, 1.9, { size: 18, valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaPrayingHands', h: 'Demander', t: 'Je demande poliment : //Zou u even willen wachten?//', color: POL },
      { icon: 'FaLightbulb', h: 'Conseiller', t: 'Je donne un conseil : //Je zou meer moeten slapen.//', color: CON },
      { icon: 'FaCloud', h: 'Imaginer', t: 'Je fais une hypothèse : //Als ik tijd had, zou ik Spaans leren.//', color: HYP },
    ],
    band: 'Le conditionnel est le temps de la politesse au travail : téléphone, e-mails, guichet.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Als ik de lotto won…' });
    const P = [['man-office-worker', 'Karim', 'Als ik de lotto **won**, **!!zou!!** ik een huis aan zee **!!kopen!!**.', 'beach-with-umbrella'], ['woman', 'Sofie', 'Als ik meer tijd **had**, **!!zou!!** ik Italiaans **!!leren!!**.', 'pizza'], ['woman-red-hair', 'Lotte', 'Als ik directeur **was**, **!!zou!!** ik iedereen elke vrijdag vrijaf **!!geven!!**.', 'party-popper']];
    const w = (12.13 - 2 * 0.25) / 3;
    P.forEach(([il, name, t, dream], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.oval(s, x, 1.7, w, 2.6, { fill: 'F1EBF8', line: HYP, lw: 1.5 });
      d.ill(s, dream, x + w / 2 - 0.4, 1.85, 0.8, 0.8);
      d.t(s, `//${t}//`, x + 0.35, 2.6, w - 0.7, 1.5, { size: 16, align: 'center', valign: 'middle' });
      d.oval(s, x + 0.55, 4.35, 0.25, 0.18, { fill: 'F1EBF8', line: HYP, lw: 1 });
      d.ill(s, il, x + 0.2, 4.55, 0.85, 0.85);
      d.t(s, `**${name}**`, x + 1.15, 4.55, w - 1.3, 0.85, { size: 20, color: HYP, valign: 'middle', head: true });
    });
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.8, 0.9, 0.9);
    d.t(s, ['Où est le 2ᵉ verbe ? Quel temps suit //als// ?', 'Et vous ? //Als ik de lotto won, zou ik…//'], 2.0, 5.65, 10.5, 1.2, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 forme
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'La forme : zou + infinitif' });
    d.rect(s, 0.6, 1.7, 4.6, 4.2, { fill: 'bg1', line: 'accent6', lw: 2, radius: 0.1, shadow: true });
    d.rect(s, 0.6, 1.7, 4.6, 0.55, { fill: 'accent6', line: null, radius: 0.1 });
    d.t(s, 'zou / zouden + infinitif', 0.8, 1.7, 4.2, 0.55, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
    [['ik', 'zou'], ['jij', 'zou'], ['u', 'zou'], ['hij / zij', 'zou'], ['wij', 'zouden'], ['jullie', 'zouden'], ['zij', 'zouden']].forEach(([p, z], i) => {
      const y = 2.38 + i * 0.48;
      d.t(s, `//${p}//`, 0.95, y, 1.6, 0.46, { size: 19, valign: 'middle' });
      d.t(s, `//**!!${z}!!**//`, 2.6, y, 2.4, 0.46, { size: 19, valign: 'middle' });
    });
    strip(s, 5.55, 1.85, [['Ik', 'n'], ['zou', 'v'], ['graag', 'g'], ['naar Gent', 'n'], ['gaan.', 'v2']], { size: 22, h: 0.75 });
    strip(s, 5.55, 2.85, [['Zou', 'v'], ['je', 'n'], ['me', 'n'], ['kunnen', 'v2'], ['helpen?', 'v2']], { size: 22, h: 0.75 });
    d.t(s, '② //zou// en 2ᵉ position · infinitif(s) au bout : la pince du M12', 5.55, 3.75, 7.2, 0.5, { size: 15, italic: true, color: 'accent6' });
    d.rect(s, 5.55, 4.4, 7.18, 1.5, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, ['//zou// = l’imperfectum de //zullen// (M18)', 'Le verbe principal ne se conjugue plus.', '//zou// rime avec //jou//.'], 5.75, 4.45, 6.85, 1.4, { size: 17, gap: 4, valign: 'middle' });
    band(s, 'Une seule forme à retenir : //zou// (singulier) · //zouden// (pluriel)', 6.15, 0.68, 'tx2', 19);
  }

  // ---------------------------------------------------------------- 5 politesse (escalier)
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Demander poliment' });
    const St = [['Help me!', 'direct', 'accent6'], ['Help je me even?', 'adouci (M16)', 'accent1'], ['Kun je me helpen?', 'question (M12)', 'accent3'], ['Zou je me kunnen helpen?', 'conditionnel', POL], ['Zou u mij even willen helpen?', 'très poli', HYP]];
    const sw = (12.13 - 4 * 0.1) / 5; const base = 5.6;
    St.forEach(([t, lab, c], i) => {
      const x = 0.6 + i * (sw + 0.1); const hh = 0.7 + i * 0.6;
      d.rect(s, x, base - hh, sw, hh, { fill: c, line: null, radius: 0.06 });
      d.t(s, lab, x, base - hh + 0.05, sw, 0.4, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.rect(s, x + 0.05, base - hh - 1.05, sw - 0.1, 0.95, { fill: 'FFFFFF', line: c, lw: 1.5, radius: 0.12, shadow: true });
      d.t(s, `//${t}//`, x + 0.1, base - hh - 1.05, sw - 0.2, 0.95, { size: 15, align: 'center', valign: 'middle', fit: true, max: 16, min: 11 });
    });
    d.t(s, '◀ moins poli', 0.6, 5.65, 3, 0.35, { size: 13, italic: true, color: 'accent5' });
    d.t(s, 'plus poli ▶', 9.73, 5.65, 3, 0.35, { size: 13, italic: true, color: 'accent5', align: 'right' });
    band(s, 'Au téléphone : //Zou u even willen wachten?// · //Zou je de deur kunnen sluiten?//', 6.1, 0.72, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 6 je voudrais
  {
    const s = d.page({ g: 6, tag: 'MISE EN SITUATION', title: 'Je voudrais… : wil graag, zou graag, had graag' });
    d.ill(s, 'bread', 0.75, 1.85, 1.3, 1.3);
    d.ill(s, 'croissant', 0.75, 3.3, 1.1, 1.1);
    [['Ik wil **graag** een brood.', 'je voudrais', POL, null], ['Ik **zou** graag een brood **willen**.', 'je voudrais bien', CON, null], ['Ik **had** graag een brood.', 'BE, très courant', HYP, 'be']].forEach(([t, gl, c, fl], i) => {
      const y = 1.75 + i * 1.05;
      d.bubble(s, `//${t}//`, 2.3, y, 6.6, 0.88, c, { size: 20 });
      d.t(s, gl, 9.05, y, 2.6, 0.88, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
      if (fl) d.flag(s, fl, 11.75, y + 0.2, 0.7);
    });
    d.rect(s, 0.6, 5.0, 12.13, 0.85, { fill: 'accent6', tr: 92, line: 'accent6', lw: 1.25, radius: 0.1 });
    d.t(s, '✗ //{{Ik zou willen een brood}}// → ✓ //Ik zou graag een brood **willen**.// (l’infinitif va au bout)', 0.85, 5.0, 11.7, 0.85, { size: 19, valign: 'middle' });
    band(s, '//Ik had graag…// : la formule flamande au magasin et au café. Les trois sont corrects.', 6.1, 0.72, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 7 conseiller
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'Conseiller : je zou … moeten' });
    [['sleepy-face', 'Ik ben altijd moe.', 'Je **zou** meer **moeten** slapen.', 'tu devrais'], ['anxious-face-with-sweat', 'Ik heb zo veel stress.', 'Je **zou** een pauze **kunnen** nemen.', 'tu pourrais'], ['face-with-thermometer', 'Ik voel me ziek.', 'Als ik jou **was**, **zou** ik de dokter **bellen**.', 'à ta place, je…']].forEach(([il, pb, adv, gl], i) => {
      const y = 1.75 + i * 1.3;
      d.ill(s, il, 0.6, y + 0.1, 0.9, 0.9);
      d.rect(s, 1.65, y + 0.12, 3.5, 0.85, { fill: 'bg2', line: BORDER, radius: 0.1 });
      d.t(s, `//${pb}//`, 1.8, y + 0.12, 3.3, 0.85, { size: 17, valign: 'middle' });
      d.ill(s, 'light-bulb', 5.3, y + 0.25, 0.6, 0.6);
      d.rect(s, 6.0, y + 0.05, 6.73, 1.0, { fill: CON, tr: 88, line: CON, lw: 1.5, radius: 0.1 });
      d.t(s, [`//${adv}//`, gl], 6.15, y + 0.05, 6.5, 1.0, { size: 18, gap: 1, valign: 'middle' });
    });
    band(s, '//zou … moeten// = devrait · //zou … kunnen// = pourrait · //Ik zou dat niet doen.// = je ne ferais pas ça', 5.85, 0.95, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 8 hypothèse
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'L’hypothèse : als + imperfectum, zou + infinitif' });
    d.t(s, 'LE WAGON //ALS// (M9)', 0.6, 1.7, 6, 0.35, { size: 12, bold: true, color: HYP, cs: 2 });
    strip(s, 0.6, 2.1, [['Als ik tijd', 'w'], ['had,', 'wv'], ['zou', 'v'], ['ik', 'n'], ['meegaan.', 'v2']], { size: 24, h: 0.8 });
    d.t(s, '« verbe, verbe » autour de la virgule', 3.0, 2.95, 5, 0.4, { size: 13, italic: true, color: 'accent6' });
    strip(s, 0.6, 3.55, [['Ik', 'n'], ['zou', 'v'], ['meegaan', 'v2', 2.05], ['als ik tijd', 'w'], ['had.', 'wv']], { size: 24, h: 0.8 });
    d.rect(s, 9.0, 1.7, 3.73, 2.75, { fill: 'F1EBF8', line: HYP, lw: 1.5, radius: 0.1 });
    d.t(s, ['**Après //als//** : imperfectum (M19)', '//had · was · kon · wist · won//'], 9.15, 1.75, 3.45, 2.65, { size: 17, gap: 8, valign: 'middle' });
    d.rect(s, 0.6, 4.75, 12.13, 1.0, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, 'Même logique qu’en français : « si + imparfait, conditionnel » → //als + imperfectum, zou + infinitif//', 0.85, 4.75, 11.7, 1.0, { size: 18, valign: 'middle' });
    band(s, 'À l’oral, on entend aussi : //Als ik tijd had, ging ik mee.// (imperfectum des deux côtés)', 6.0, 0.8, HYP, 18);
  }

  // ---------------------------------------------------------------- 9 piège
  {
    const s = d.page({ g: 9, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : si, si, si…' });
    trapFrame(s, 4.4);
    const R = [['« si j’**avais** le temps »', null, 'als ik tijd **had**'], ['« je **viendrais** »', 'ik zou kom', 'ik zou **komen**'], ['« je ne sais pas **s’**il viendrait »', 'als hij zou komen', '**of** hij zou komen (M9)'], ['« je **voudrais** un café »', 'ik zou willen een koffie', 'ik zou graag een koffie **willen**']];
    R.forEach(([fr, ko, ok], i) => {
      const y = 2.35 + i * 0.88;
      d.t(s, fr, 0.95, y, 4.0, 0.74, { size: 17, valign: 'middle' });
      if (ko) d.t(s, `✗ //{{${ko}}}//`, 5.0, y, 3.0, 0.74, { size: 15, color: 'accent6', valign: 'middle' });
      d.line(s, 8.05, y + 0.37, 8.45, y + 0.37, { color: 'accent3', lw: 2 });
      d.rect(s, 8.5, y + 0.06, 4.05, 0.62, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.65, y + 0.06, 3.85, 0.62, { size: 17, valign: 'middle', fit: true, max: 17, min: 12 });
    });
    band(s, '//als// = si (condition) · //of// = si (question indirecte) · //als ik tijd zou hebben// se dit aussi', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 10 zou = il paraît
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'zou = il paraît que' });
    d.rect(s, 0.6, 1.75, 6.0, 3.6, { fill: 'FFFFFF', line: 'tx2', lw: 2, radius: 0.04, shadow: true });
    d.rect(s, 0.6, 1.75, 6.0, 0.6, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'DE BRUSSELSE KRANT', 0.8, 1.75, 5.6, 0.6, { size: 15, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
    d.ill(s, 'newspaper', 0.85, 2.6, 1.1, 1.1);
    d.t(s, ['//De directeur **@@zou@@** ontslag **nemen**.//', 'Le directeur démissionnerait (on le dit).'], 2.15, 2.5, 4.3, 2.0, { size: 19, gap: 8, valign: 'middle' });
    d.bubble(s, '//Karim **@@zou@@** ziek **zijn**.// — Karim serait malade, paraît-il.', 6.9, 2.1, 5.83, 1.3, 'accent1', { size: 18 });
    d.ill(s, 'speaking-head', 11.8, 3.55, 0.9, 0.9);
    d.t(s, 'Synonymes : //naar verluidt// (selon certaines sources) · //blijkbaar// (apparemment)', 6.9, 3.6, 4.8, 1.2, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    band(s, 'Même emploi que le conditionnel journalistique français : l’information n’est pas confirmée.', 5.75, 0.95, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 11 aperçu passé
  {
    const s = d.page({ g: 11, tag: '+ APERÇU', title: '+ APERÇU : le conditionnel passé' });
    d.line(s, 0.9, 2.4, 12.4, 2.4, { color: 'tx2', lw: 3 });
    d.oval(s, 3.4, 2.2, 0.4, 0.4, { fill: 'accent6' });
    d.t(s, '✗', 3.4, 2.2, 0.4, 0.4, { size: 14, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, 'hier (trop tard !)', 2.4, 1.75, 2.4, 0.4, { size: 13, italic: true, color: 'accent6', align: 'center' });
    d.oval(s, 9.4, 2.2, 0.4, 0.4, { fill: 'tx2' });
    d.t(s, 'maintenant', 8.4, 1.75, 2.4, 0.4, { size: 13, italic: true, color: 'tx2', align: 'center' });
    [['Als ik het **geweten had**, **was** ik **gekomen**.', 'Si je l’avais su, je serais venu.'], ['= Als ik het geweten had, **zou** ik **gekomen zijn**.', '(forme longue)'], ['Ik **had** het graag **gedaan**.', 'Je l’aurais fait volontiers.']].forEach(([t, fr], i) => {
      const y = 2.95 + i * 0.95;
      d.rect(s, 0.6, y, 12.13, 0.8, { fill: i === 1 ? 'bg2' : 'F1EBF8', line: i === 1 ? BORDER : HYP, lw: 1.25, radius: 0.1 });
      d.t(s, `//${t}//`, 0.85, y, 7.6, 0.8, { size: 19, valign: 'middle' });
      d.t(s, fr, 8.5, y, 4.1, 0.8, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    });
    band(s, 'À reconnaître seulement (Néerlandais 2). La forme courte (//was ik gekomen//) est la plus fréquente.', 6.0, 0.8, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 12 place
  {
    const s = d.page({ g: 12, tag: 'GRAMMAIRE', title: 'La place de zou et de l’infinitif' });
    const R = [[['Ik', 'n'], ['zou', 'v'], ['je', 'n'], ['morgen', 'n'], ['opbellen.', 'v2']], [['Ik', 'n'], ['zou', 'v'], ['graag', 'g'], ['willen komen.', 'v2']], [['Ik', 'n'], ['zou', 'v'], ['graag', 'g'], ['komen.', 'v2']], [['…, omdat ik', 'n'], ['graag', 'g'], ['zou komen.', 'v']], [['Zou', 'v'], ['je', 'n'], ['dat', 'n'], ['kunnen doen?', 'v2']]];
    R.forEach((r, i) => strip(s, 0.6, 1.75 + i * 0.82, r, { size: 21, h: 0.66 }));
    d.rect(s, 8.6, 1.75, 4.13, 3.94, { fill: 'FBEDEB', line: 'accent6', lw: 1.5, radius: 0.1 });
    d.t(s, ['**//zou//** en 2ᵉ position', 'infinitif(s) au **bout**', 'particule collée : //opbellen// (M11)', 'subordonnée : //zou// rejoint l’infinitif à la fin', '//willen komen// : l’ordre le plus courant'], 8.75, 1.85, 3.85, 3.75, { size: 15, gap: 6, valign: 'middle' });
    band(s, 'Deux infinitifs ? //Ik zou graag **willen komen**.// — ou plus simple : //Ik zou graag **komen**.//', 6.05, 0.75, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : les trois portes du conditionnel' });
    const D = [['Politesse', POL, 'folded-hands', ['//Zou u … willen?//', '//Ik zou graag … willen//', '//Ik had graag …// (BE)']], ['Conseil, souhait', CON, 'light-bulb', ['//Je zou … moeten//', '//Als ik jou was, zou ik …//']], ['Hypothèse', HYP, 'thought-balloon', ['//Als ik tijd had,//', '//zou ik …//', 'als + imperf. · zou + inf.']]];
    const w = (12.13 - 2 * 0.3) / 3;
    D.forEach(([h, c, il, lines], i) => {
      const x = 0.6 + i * (w + 0.3);
      d.rect(s, x, 1.7, w, 3.85, { fill: c, tr: 90, line: c, lw: 2.5, radius: 0.5 });
      d.rect(s, x, 1.7, w, 0.65, { fill: c, line: null, radius: 0.3 });
      d.t(s, h, x, 1.7, w, 0.65, { size: 19, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.ill(s, il, x + w / 2 - 0.45, 2.5, 0.9, 0.9);
      d.t(s, lines, x + 0.2, 3.5, w - 0.4, 1.9, { size: 17, gap: 4, align: 'center', valign: 'middle' });
      d.oval(s, x + w - 0.5, 3.45, 0.18, 0.18, { fill: c });
    });
    band(s, 'Forme : //zou / zouden// + infinitif au bout', 5.85, 0.75, 'accent6', 20);
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Plus poli !', '★', 'FaPrayingHands'], ['zou ou zouden ?', '★', 'FaUsers'], ['Si j’avais…', '★★', 'FaCloud'], ['Le détective', '★★', 'FaSearch'],
    ['Le bon conseil', '★★', 'FaLightbulb'], ['Wat zou je doen als…?', '★', 'FaQuestion'], ['Le budget de l’équipe', '★★★', 'FaEuroSign'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 plus poli
  const ex1 = [['Help me!', 'Zou je me kunnen helpen?'], ['Wacht even!', 'Zou u even willen wachten?'], ['Bel me terug!', 'Zou u me kunnen terugbellen?'], ['Ik wil een koffie.', 'Ik zou graag een koffie willen.', 'Ik had graag een koffie.'], ['Stuur me het rapport.', 'Zou je me het rapport kunnen sturen?'], ['Sluit de deur.', 'Zou je de deur willen sluiten?']];
  d.ex({ g: 15, title: 'Exercice 1 — Plus poli !', stars: '★', instr: 'Rendez la demande plus polie avec //zou//. Plusieurs réponses possibles.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex1.forEach(([a, b, alt], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, 1.1, y + 0.05, 4.4, rh - 0.12, { fill: 'FBEDEB', line: 'accent6', lw: 1, radius: 0.1 });
      d.t(s, `//${a}//`, 1.25, y + 0.05, 4.2, rh - 0.12, { size: 19, valign: 'middle' });
      d.line(s, 5.6, y + rh / 2, 6.5, y + rh / 2, { color: POL, lw: 3 });
      d.t(s, '+ zou', 5.55, y + rh / 2 - 0.34, 1.0, 0.3, { size: 11, bold: true, color: POL, align: 'center' });
      d.rect(s, 6.6, y + 0.05, 6.13, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**${b}**//${alt ? `  ·  ou //${alt}//` : ''}`, 6.75, y + 0.05, 5.9, rh - 0.12, { size: 17, color: 'accent3', valign: 'middle', fit: true, max: 18, min: 12 });
    });
  });

  // ---------------------------------------------------------------- 16 ex2 zou / zouden
  const ex2 = ['Wij [[zouden]] graag meer vakantie hebben.', '[[Zou]] u even willen wachten?', 'Karim [[zou]] een nieuwe auto kopen.', 'Jullie [[zouden]] meer moeten sporten.', 'Als ik rijk was, [[zou]] ik een huis kopen.', 'Sofie en Lotte [[zouden]] graag naar Parijs gaan.', '[[Zou]] jij dat kunnen doen?', 'Ik [[zou]] dat niet doen.'];
  d.ex({ g: 16, title: 'Exercice 2 — zou ou zouden ?', stars: '★', instr: 'Complétez avec //zou// ou //zouden//.' }, (s, mode, top) => {
    d.list(s, ex2.map((e) => `//${e}//`), mode, { y: top + 0.2, w: 12.13, h: 4.4, cols: 2, size: 20, gap: 22 });
  });

  // ---------------------------------------------------------------- 17 ex3 si j'avais
  const ex3 = [['Ik heb geen tijd. Ik ga niet mee.', 'Als ik tijd had, zou ik meegaan.'], ['Ik ben niet rijk. Ik koop geen huis.', 'Als ik rijk was, zou ik een huis kopen.'], ['Het regent. We wandelen niet.', 'Als het niet regende, zouden we wandelen.'], ['Ik ken zijn nummer niet. Ik bel hem niet.', 'Als ik zijn nummer kende, zou ik hem bellen.'], ['Sofie is ziek. Ze komt niet naar het werk.', 'Als Sofie niet ziek was, zou ze naar het werk komen.']];
  d.ex({ g: 17, title: 'Exercice 3 — Si j’avais…', stars: '★★', instr: 'Imaginez le contraire : //Als + imperfectum, zou + infinitif//.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 5;
    ex3.forEach(([a, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, HYP, 13);
      d.rect(s, 1.1, y + 0.06, 5.0, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, `//${a}//`, 1.25, y + 0.06, 4.8, rh - 0.12, { size: 17, valign: 'middle' });
      d.line(s, 6.2, y + rh / 2, 6.7, y + rh / 2, { color: HYP, lw: 3 });
      d.rect(s, 6.8, y + 0.06, 5.93, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${b}//`, 6.95, y + 0.06, 5.7, rh - 0.12, { size: 17, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex4 détective
  d.ex({ g: 18, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Karim écrit à meneer Maes. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Karim Benali · Aan: meneer Maes · Onderwerp: factuur en offerte', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Geachte heer Maes,//', '//Zou u mij de factuur kunnen sturen? {{Ik zou willen ook de offerte zien.}}++ Ik zou ook graag de offerte willen zien.++ Als ik meer tijd {{zou had}}++ had++, zou ik u zelf komen bezoeken. {{Zouden u}}++ Zou u++ volgende week kunnen bellen? Als u wilt, {{ik zou}}++ zou ik++ de vergadering kunnen verplaatsen. Ik weet niet {{als}}++ of++ An zou komen.//', '//Met vriendelijke groeten//', '//Karim Benali//'];
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 18, gap: 8, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurre : //Zou u mij de factuur kunnen sturen?// est correct. N° 1 : //Ik zou ook de offerte willen zien// est juste aussi. Après //als u wilt,// : inversion (M9).', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 19 ex5 le bon conseil
  const PB = [['sleepy-face', 'Ik ben altijd moe.'], ['face-with-thermometer', 'Ik heb hoofdpijn.'], ['speaking-head', 'Mijn Nederlands is niet goed genoeg.'], ['alarm-clock', 'Ik kom altijd te laat.'], ['card-file-box', 'Mijn bureau is een chaos.'], ['exploding-head', 'Ik heb te veel werk.']];
  const CS = ['vroeger opstaan', 'een pauze nemen', 'elke dag tien minuten oefenen', 'vroeger gaan slapen', 'je collega om hulp vragen', 'alles opruimen'];
  const sol5 = [3, 1, 2, 0, 5, 4];
  const ADV = ['Je zou vroeger moeten gaan slapen.', 'Je zou een pauze moeten nemen.', 'Je zou elke dag tien minuten moeten oefenen.', 'Je zou vroeger moeten opstaan.', 'Je zou alles moeten opruimen.', 'Je zou je collega om hulp moeten vragen.'];
  d.ex({ g: 19, title: 'Exercice 5 — Le bon conseil', stars: '★★', instr: 'Reliez chaque problème à un conseil, puis donnez le conseil avec //Je zou … moeten//.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    if (mode === 'a') sol5.forEach((r, i) => d.line(s, 6.6, top + i * rh + rh / 2, 8.4, top + r * rh + rh / 2, { color: 'tx2', lw: 2 }));
    PB.forEach(([il, t], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.05, 6.0, rh - 0.1, { fill: 'bg2', line: BORDER, radius: 0.08 });
      d.ill(s, il, 0.7, y + (rh - 0.5) / 2, 0.5, 0.5);
      if (mode === 'q') d.t(s, `**${i + 1}**  //${t}//`, 1.3, y + 0.05, 5.2, rh - 0.1, { size: 17, valign: 'middle' });
      else {
        d.t(s, `**${i + 1}**  //${t}//`, 1.3, y + 0.06, 5.2, (rh - 0.1) * 0.5, { size: 14, valign: 'middle' });
        d.t(s, `//${ADV[i]}//`, 1.3, y + 0.03 + (rh - 0.1) * 0.5, 5.25, (rh - 0.1) * 0.5, { size: 13, bold: true, color: 'accent3', valign: 'middle' });
      }
    });
    CS.forEach((t, i) => {
      const y = top + i * rh;
      d.rect(s, 8.45, y + 0.06, 4.28, rh - 0.12, { fill: 'bg1', line: CON, lw: 1.5, radius: 0.08 });
      d.t(s, `**${'abcdef'[i]}**  //${t}//`, 8.6, y + 0.06, 4.05, rh - 0.12, { size: 16, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 20 ex6 wat zou je doen als
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Wat zou je doen als…?', stars: '★' });
    const C = [['money-bag', '… als je de lotto won?'], ['ghost', '… als je een dag onzichtbaar was?'], ['crown', '… als je minister was?'], ['beach-with-umbrella', '… als je vier weken vakantie had?'], ['woman-superhero', '… als je een superkracht had?'], ['globe-showing-europe-africa', '… als je in een ander land woonde?'], ['man-office-worker', '… als je de baas was?'], ['baby', '… als je tien jaar jonger was?']];
    const cw = 1.95; const chh = 2.2;
    C.forEach(([il, t], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.12); const y = 1.75 + Math.floor(i / 4) * (chh + 0.15);
      d.rect(s, x, y, cw, chh, { fill: 'FFFFFF', line: HYP, lw: 2, radius: 0.12, shadow: true });
      d.ill(s, il, x + cw / 2 - 0.45, y + 0.2, 0.9, 0.9);
      d.t(s, `//**${t}**//`, x + 0.1, y + 1.2, cw - 0.2, 0.9, { size: 14, align: 'center', valign: 'middle' });
    });
    d.ill(s, 'thought-balloon', 9.1, 1.75, 0.8, 0.8);
    d.t(s, 'Stel je voor!', 10.0, 1.75, 2.73, 0.8, { size: 24, bold: true, color: HYP, head: true, valign: 'middle' });
    d.t(s, ['**1.** Tirez une carte, posez la question à votre voisin·e.', '**2.** Réponse avec //zou// + une raison : //Als ik de lotto won, zou ik… omdat…//', '**3.** Le voisin pose la carte suivante à quelqu’un d’autre.'], 9.1, 2.75, 3.63, 3.6, { size: 15, gap: 10 });
  }

  // ---------------------------------------------------------------- 21 ex7 budget
  d.roleplay({
    g: 21, title: 'Exercice 7 — Le budget de l’équipe',
    scenario: 'L’équipe reçoit 5 000 € pour améliorer le bureau. Chacun propose, compare et défend son idée — poliment !',
    a: '**An** (la cheffe) : animez la réunion et faites respecter le budget : //Wat zouden we kunnen doen?//',
    b: '**L’équipe** : proposez, comparez les prix (M26), exprimez vos préférences (M27).',
    bank: '//Wat zouden we kunnen doen? · Ik zou graag … · Als we … kochten, zouden we … · Ik zou liever … · Zou dat niet te duur zijn? · Dat zou ik niet doen. · We zouden elkaar vaker kunnen zien.//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFBEA', line: 'accent1', lw: 1.5, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.5, { fill: 'accent1', line: null, radius: 0.04 });
      d.t(s, 'IDEEËNBUS · BUDGET € 5.000', x + 0.15, y, w - 0.3, 0.5, { size: 11, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const I = [['hot-beverage', 'een koffiemachine', '€ 1.200'], ['chair', 'nieuwe stoelen', '€ 3.500'], ['clinking-glasses', 'een teamuitstap', '€ 2.000'], ['potted-plant', 'planten', '€ 400'], ['open-book', 'een cursus Nederlands', '€ 1.800']];
      const ch = (h - 0.65) / 5;
      I.forEach(([il, t, p], i) => {
        const yy = y + 0.58 + i * ch;
        d.ill(s, il, x + 0.15, yy + (ch - 0.5) / 2, 0.5, 0.5);
        d.t(s, `//${t}//`, x + 0.75, yy, w - 1.9, ch, { size: 12, valign: 'middle' });
        d.t(s, `**${p}**`, x + w - 1.15, yy, 1.0, ch, { size: 13, color: 'accent1', align: 'right', valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket + bilan du bloc 6
  {
    const s = d.ticket({
      g: 22, title: 'Ticket de sortie et bilan du bloc 6',
      q: ['Plus poli : //Help me!//', 'Conseil : //Ik ben moe.// → //Je zou…//', 'Hypothèse : //Ik heb geen tijd. Ik ga niet mee.//'],
      self: ['Demander', 'Conseiller', 'Imaginer'],
      teaser: { icon: 'FaTrophy', text: '**Proficiat! Bloc 6 is klaar.** — Volgende stap : bloc 7, M30 //Het bedrijf//' },
    });
    d.t(s, 'BLOCS 1 À 6 · 29 MODULES', 7.6, 5.03, 4.6, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    const B = [['1–5', 5, 'accent2'], ['6–10', 5, 'accent1'], ['11–15', 5, 'accent3'], ['16–19', 4, 'purple'], ['20–24', 5, 'accent4'], ['25–29', 5, 'tx2']];
    const unit = (4.55 - 5 * 0.04) / 29; let x = 7.6;
    B.forEach(([lab, n, c]) => {
      const w = unit * n;
      d.rect(s, x, 5.38, w, 0.45, { fill: c, line: null, radius: 0.06 });
      d.t(s, lab, x, 5.38, w, 0.45, { size: 8, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      x += w + 0.04;
    });
    d.ill(s, 'trophy', 12.25, 5.3, 0.55, 0.55);
  }
}

module.exports = { meta, build };
