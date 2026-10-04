// Module 16 — De gebiedende wijs · L'impératif
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 16, slug: 'De_gebiedende_wijs', title: 'De gebiedende wijs — L’impératif', short: 'De gebiedende wijs', template: 'module_16_gebiedende_wijs.md' };

const PART = 'accent1'; // particule = orange (M11)
const SOFT = 'accent2'; // petits mots qui adoucissent

function build(d) {
  // sentence strip: [text, type, width] · n normal · v verbe (impératif) · i infinitif · p particule · ng niet
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        i: { fill: 'FBEDEB', line: 'accent6', lw: 2, dash: 'dash', color: 'accent6', bold: true },
        p: { fill: 'FDF1E6', line: PART, lw: 2, dash: 'dash', color: PART, bold: true },
        ng: { fill: 'tx2', line: null, color: 'bg1', bold: true },
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
  // floor plan of the 2nd floor: corridor, rooms above (left when walking right) and below
  const plan = (s, x, y, w, h, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, radius: 0.04, shadow: true });
    const cy = y + h * 0.42; const ch = h * 0.18; const rw = (w - 0.4 - 0.2 * 3) / 4;
    d.rect(s, x + 0.2, cy, w - 0.4, ch, { fill: 'EEF3F8', line: null, radius: 0 });
    d.t(s, 'gang', x + 0.2, cy, w - 0.4, ch, { size: 11, italic: true, color: GHOST, align: 'center', valign: 'middle' });
    const top = o.top || []; const bot = o.bot || [];
    top.forEach(([lab, il], i) => {
      const rx = x + 0.2 + i * (rw + 0.2); const ry = y + 0.15; const rh = cy - ry - 0.08;
      d.rect(s, rx, ry, rw, rh, { fill: 'bg2', line: BORDER, radius: 0.04 });
      d.rect(s, rx + rw / 2 - 0.25, cy - 0.1, 0.5, 0.1, { fill: 'accent1', line: null, radius: 0 });
      if (il) d.ill(s, il, rx + rw / 2 - 0.25, ry + 0.08, 0.5, 0.5);
      d.t(s, lab, rx + 0.05, ry + rh - 0.42, rw - 0.1, 0.38, { size: 12, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
    });
    bot.forEach(([lab, il], i) => {
      const rx = x + 0.2 + i * (rw + 0.2); const ry = cy + ch + 0.08; const rh = y + h - 0.15 - ry;
      d.rect(s, rx, ry, rw, rh, { fill: 'bg2', line: BORDER, radius: 0.04 });
      d.rect(s, rx + rw / 2 - 0.25, cy + ch, 0.5, 0.1, { fill: 'accent1', line: null, radius: 0 });
      if (il) d.ill(s, il, rx + rw / 2 - 0.25, ry + 0.38, 0.5, 0.5);
      d.t(s, lab, rx + 0.05, ry + 0.02, rw - 0.1, 0.36, { size: 12, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
    });
    d.pin(s, x + 0.45, cy + ch / 2 + 0.16, 'accent6', 0.34);
    d.t(s, 'ingang', x + 0.68, cy + 0.03, 1.0, 0.28, { size: 11, bold: true, color: 'accent6' });
    return { cy, ch, rw };
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'De gebiedende wijs', sub: 'L’impératif', line: 'Kom binnen! Neem plaats.',
    visual: (s) => {
      d.ill(s, 'door', 7.0, 1.0, 2.6, 2.6);
      d.rect(s, 9.75, 1.45, 3.0, 1.05, { fill: 'FFFFFF', line: 'accent1', lw: 3, radius: 0.1, shadow: true });
      d.t(s, '**!!Kom!!** binnen!', 9.75, 1.45, 3.0, 1.05, { size: 30, align: 'center', valign: 'middle', head: true });
      d.line(s, 9.7, 1.98, 9.15, 1.98, { color: 'F6C27E', lw: 2, arrow: false, dash: 'dash' });
      d.ill(s, 'waving-hand', 7.25, 4.0, 1.0, 1.0);
      d.rect(s, 8.45, 3.95, 4.3, 1.1, { fill: 'FFFFFF', line: null, radius: 0.15, shadow: true });
      d.t(s, '**!!Neem!!** plaats.', 8.45, 3.95, 4.3, 1.1, { size: 28, align: 'center', valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCogs', h: 'Former', t: 'Je forme l’impératif : //Werk! Lees! Wees voorzichtig!//', color: 'accent6' },
      { icon: 'FaSlidersH', h: 'Adoucir', t: 'J’adapte l’ordre à la personne : //Kom maar binnen. Gaat u zitten.//', color: SOFT },
      { icon: 'FaCompass', h: 'Guider', t: 'Je donne des consignes et j’indique le chemin au bureau.', color: 'accent3' },
    ],
    band: 'Au bureau, l’impératif est partout : consignes, modes d’emploi, panneaux, accueil des visiteurs.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — les consignes de la classe' });
    const C = [['Luister!', 'ear', 'luisteren'], ['Kijk!', 'eyes', 'kijken'], ['Lees!', 'open-book', 'lezen'], ['Schrijf!', 'pencil', 'schrijven'], ['Herhaal!', 'repeat-button', 'herhalen'], ['Werk samen!', 'handshake', 'samenwerken']];
    C.forEach(([t, il, inf], i) => {
      const x = 0.6 + (i % 3) * 4.12; const y = 1.75 + Math.floor(i / 3) * 1.7;
      d.rect(s, x, y, 3.89, 1.5, { fill: 'accent2', tr: 88, line: 'accent2', lw: 1.5, radius: 0.2 });
      d.ill(s, il, x + 0.2, y + 0.3, 0.9, 0.9);
      d.t(s, `//**${t}**//`, x + 1.3, y + 0.15, 2.5, 0.8, { size: 26, color: 'accent6', valign: 'middle', head: true });
      d.t(s, `°°${inf}°°`, x + 1.3, y + 0.92, 2.5, 0.4, { size: 14, italic: true, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.3, 12.13, 1.55, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.6, 0.9, 0.9);
    d.t(s, ['**Quelle forme du verbe est-ce ?**', '//luisteren → luister// … c’est le **radical** du M3 !'], 2.0, 5.3, 10.5, 1.55, { size: 20, valign: 'middle', gap: 6 });
  }

  // ---------------------------------------------------------------- 4 l'impératif = le radical (S5)
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'L’impératif = le radical' });
    const X = [0.6, 4.75, 8.9]; const cw = 3.83;
    [[null, 'infinitif', 'tx2'], ['FaCut', '① − en : le radical (M3)', 'tx2'], ['FaExclamation', '② sans sujet, sans -t', 'accent6']].forEach(([ic, lab, c], i) => {
      if (ic) d.iconDisc(s, ic, X[i], 1.72, 0.48, c);
      d.t(s, lab, X[i] + (ic ? 0.6 : 0), 1.72, cw - 0.6, 0.48, { size: 16, bold: true, color: c, valign: 'middle' });
    });
    [['werken', 'werk', 'Werk!'], ['komen', 'kom', 'Kom!']].forEach((L, li) => {
      const y = 2.38 + li * 1.25;
      d.rect(s, 0.6, y + 0.92, 12.13, 0.08, { fill: 'accent5', line: null, radius: 0.04 });
      L.forEach((t, i) => {
        const last = i === 2;
        d.rect(s, X[i], y, cw, 0.85, { fill: i === 0 ? 'tx2' : last ? 'FBEDEB' : 'bg1', line: i === 0 ? null : last ? 'accent6' : BORDER, lw: last ? 2.5 : 1.25, radius: 0.1, shadow: true });
        d.t(s, `**${t}**`, X[i], y, cw, 0.85, { size: 28, color: i === 0 ? 'bg1' : last ? 'accent6' : 'tx1', align: 'center', valign: 'middle', head: true });
        if (i < 2) d.line(s, X[i] + cw + 0.04, y + 0.42, X[i + 1] - 0.04, y + 0.42, { color: 'accent1', lw: 2.5 });
      });
    });
    [['nemen', 'Neem!'], ['wachten', 'Wacht!'], ['stoppen', 'Stop!'], ['bellen', 'Bel!']].forEach(([a, b], i) => {
      const x = 0.6 + i * 3.08;
      d.rect(s, x, 4.95, 2.89, 1.0, { fill: 'bg2', line: BORDER });
      d.t(s, `//${a}// → //**!!${b}!!**//`, x, 4.95, 2.89, 1.0, { size: 21, align: 'center', valign: 'middle' });
    });
    band(s, 'Pas de sujet, pas de //-t//, une seule forme : //**Kom**, Karim! · **Kom**, jongens!//', 6.15, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 5 verbes qui s'adaptent + wees
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Les verbes qui s’adaptent… et Wees !' });
    d.t(s, 'LES AJUSTEMENTS DU M4', 0.6, 1.7, 6.5, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2 });
    const R = [['lezen', 'Lees!', 'z → s · voyelle longue'], ['geven', 'Geef!', 'v → f · voyelle longue'], ['blijven', 'Blijf!', 'v → f'], ['schrijven', 'Schrijf!', 'v → f'], ['zetten', 'Zet!', 'tt → t']];
    R.forEach(([a, b, lab], i) => {
      const y = 2.15 + i * 0.82;
      d.rect(s, 0.6, y, 6.6, 0.7, { fill: i % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.75 });
      d.t(s, `//${a}//`, 0.8, y, 1.8, 0.7, { size: 20, valign: 'middle' });
      d.t(s, '→', 2.55, y, 0.4, 0.7, { size: 20, color: 'accent1', valign: 'middle', align: 'center' });
      d.t(s, `//**!!${b}!!**//`, 3.0, y, 1.7, 0.7, { size: 22, valign: 'middle' });
      d.t(s, lab, 4.7, y, 2.4, 0.7, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.rect(s, 7.5, 1.7, 5.23, 4.25, { fill: 'FFFDF2', line: 'accent1', lw: 2.5, shadow: true });
    d.ill(s, 'glowing-star', 7.7, 1.85, 0.6, 0.6);
    d.t(s, 'FORMES SPÉCIALES', 8.4, 1.85, 4, 0.6, { size: 15, bold: true, color: 'accent1', cs: 2, valign: 'middle' });
    d.t(s, '//zijn// → //**!!Wees!!**//', 7.7, 2.55, 4.9, 0.75, { size: 30, valign: 'middle', head: true });
    d.t(s, ['//**Wees** voorzichtig!//', '//**Wees** gerust!//', '//**Wees** op tijd!//'], 7.75, 3.35, 4.8, 1.3, { size: 18, gap: 3 });
    d.line(s, 7.75, 4.75, 12.5, 4.75, { color: 'E8D9B5', lw: 1, arrow: false });
    d.t(s, 'Verbes courts (M4) : //gaan → **Ga!** · doen → **Doe!** · staan → **Sta!**//', 7.75, 4.85, 4.85, 0.95, { size: 17, valign: 'middle' });
    d.t(s, '//Heb geduld!// (sois patient) : radical //heb// · au téléphone : //Hebt u even geduld.// · très fréquent : //Ga zitten!//', 0.6, 6.2, 12.13, 0.6, { size: 16, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 6 piège une seule forme
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : viens, venez, venons — une seule forme' });
    d.rect(s, 0.6, 1.7, 12.13, 4.35, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const R = [['waving-hand', '« Venez ! » (à plusieurs)', 'Komen!', '**!!Kom!!**!'], ['rocket', '« Commençons ! »', 'Beginnen we!', '**!!Laten!!** we **beginnen**!'], ['warning', '« Sois prudent ! »', 'Ben voorzichtig!', '**!!Wees!!** voorzichtig!']];
    R.forEach(([il, fr, ko, ok], i) => {
      const y = 2.35 + i * 1.2;
      d.ill(s, il, 0.85, y + 0.1, 0.8, 0.8);
      d.t(s, fr, 1.85, y, 3.6, 1.0, { size: 19, valign: 'middle' });
      d.t(s, `✗ //{{${ko}}}//`, 5.45, y, 2.8, 1.0, { size: 19, color: 'accent6', valign: 'middle' });
      d.line(s, 8.3, y + 0.5, 8.75, y + 0.5, { color: 'accent3', lw: 2 });
      d.rect(s, 8.8, y + 0.1, 3.75, 0.8, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.95, y + 0.1, 3.55, 0.8, { size: 21, valign: 'middle' });
    });
    band(s, '//Laten we…// = « faisons… » · à l’oral aussi : //Kom, we gaan!// (« Allez, on y va ! »)', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 7 la phrase à l'impératif
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'La phrase à l’impératif' });
    d.oval(s, 0.6 + 0.68, 1.68, 0.44, 0.44, { fill: 'accent6' });
    d.t(s, '1', 0.6 + 0.68, 1.68, 0.44, 0.44, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, 'le verbe en tête · pas de sujet', 1.75, 1.68, 6, 0.44, { size: 14, bold: true, color: 'accent6', valign: 'middle' });
    const rows = [
      [[['Doe', 'v', 1.8], ['de deur', 'n', 3.2], ['dicht!', 'p', 1.6]], 'particule au bout (M11)'],
      [[['Bel', 'v', 1.8], ['me morgen', 'n', 3.2], ['terug!', 'p', 1.6]], 'particule au bout (M11)'],
      [[['Ga', 'v', 1.8], ['even', 'n', 3.2], ['zitten!', 'i', 1.6]], 'infinitif au bout'],
      [[['Vergeet', 'v', 1.8], ['je badge', 'n', 3.2], ['niet!', 'ng', 1.6]], '//niet// à la fin (M13)'],
    ];
    rows.forEach(([r, lab], i) => {
      const y = 2.25 + i * 0.85;
      const e = strip(s, 0.6, y, r, { size: 22, h: 0.7 });
      d.t(s, `← ${lab}`, e + 0.2, y, 12.73 - e - 0.2, 0.7, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.75, 12.13, 1.1, { fill: 'bg2', line: BORDER });
    d.t(s, 'VERBES RÉFLÉCHIS', 0.85, 5.82, 4, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, '//**!!Haast!!** je!// (dépêche-toi) · //**!!Kleed!!** je **##aan##**!// (habille-toi) · avec //u// : //**!!Haast!!** u!//', 0.85, 6.12, 11.7, 0.65, { size: 19, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 8 avec u
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Avec u : l’impératif de politesse' });
    [['JE · informel', 'accent2', 0.6], ['U · formel', 'tx2', 6.95]].forEach(([h, c, x]) => {
      d.rect(s, x, 1.7, 5.78, 0.55, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, 1.7, 5.78, 0.55, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
    });
    const R = [['Kom binnen.', 'Kom##t## @@u@@ binnen.'], ['Neem plaats.', 'Neem##t## @@u@@ plaats.'], ['Ga zitten.', 'Gaa##t## @@u@@ zitten.'], ['Wacht even.', 'Wacht @@u@@ even.'], ['Blijf aan de lijn.', 'Blijf##t## @@u@@ even aan de lijn.']];
    R.forEach(([a, b], i) => {
      const y = 2.4 + i * 0.72;
      d.rect(s, 0.6, y, 5.78, 0.62, { fill: i % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.75 });
      d.t(s, `//${a}//`, 0.85, y, 5.4, 0.62, { size: 20, valign: 'middle' });
      d.line(s, 6.45, y + 0.31, 6.88, y + 0.31, { color: 'accent1', lw: 2.5 });
      d.rect(s, 6.95, y, 5.78, 0.62, { fill: i % 2 ? 'bg1' : 'EEF3F8', line: BORDER, lw: 0.75 });
      d.t(s, `//${b}//`, 7.2, y, 5.4, 0.62, { size: 20, valign: 'middle' });
    });
    band(s, 'Formule : radical + **t** + **u** — comme la question //Komt u?//, mais avec un point.', 6.15, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 9 échelle de politesse (S15)
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'L’échelle de politesse' });
    const St = [['① direct', 'Ga zitten!', 'accent6'], ['② invitation', 'Ga **maar** zitten.', 'accent1'], ['③ poli', 'Gaat **u** zitten, **alstublieft**.', 'accent3'], ['④ demande (M12)', '**Kunt u** even gaan zitten?', 'accent2'], ['⑤ très poli', '**Zou u** even willen gaan zitten?', 'purple']];
    const w = (12.13 - 4 * 0.1) / 5; const base = 5.95;
    St.forEach(([lab, t, c], i) => {
      const x = 0.6 + i * (w + 0.1); const h = 0.6 + i * 0.42;
      d.rect(s, x, base - h, w, h, { fill: c, line: null, radius: 0.04 });
      d.t(s, lab, x, base - h, w, Math.min(h, 0.6), { size: 14, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      const by = base - h - 1.3;
      d.rect(s, x, by, w, 1.12, { fill: c, tr: 88, line: c, lw: 1.5, radius: 0.15 });
      d.t(s, `//${t}//`, x + 0.1, by, w - 0.2, 1.12, { size: 16, align: 'center', valign: 'middle', fit: true, max: 17, min: 12 });
    });
    band(s, 'Avec //maar, even// ou //alstublieft//, l’impératif devient une **invitation**. À l’accueil, la marche ③ suffit.', 6.15, 0.7, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 10 petits mots
  {
    const s = d.page({ g: 10, tag: 'VOCABULAIRE', title: 'Les petits mots qui adoucissent' });
    const W = [['even', 'un instant, rapidement', ['Wacht **even**!', 'Kijk **even**!'], 'accent2'], ['maar', 'vas-y, je t’en prie', ['Kom **maar** binnen!', 'Zeg het **maar**.'], 'accent3'], ['eens', '(essaie) donc', ['Kijk **eens**!', 'Probeer het **eens**.'], 'accent1'], ['gerust', 'n’hésite pas', ['Bel me **gerust**.', 'Vraag het **gerust**.'], 'accent4'], ['alstublieft', 's’il vous plaît (u) · //alsjeblieft// (je)', ['Sluit de deur, **alstublieft**.'], 'tx2']];
    const w = (12.13 - 4 * 0.15) / 5;
    W.forEach(([word, nu, ex, c], i) => {
      const x = 0.6 + i * (w + 0.15);
      d.rect(s, x, 1.75, w, 4.3, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.rect(s, x, 1.75, w, 0.9, { fill: c, line: null, radius: 0.08 });
      d.t(s, word, x, 1.75, w, 0.9, { size: word.length > 8 ? 20 : 26, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, nu, x + 0.12, 2.75, w - 0.24, 0.85, { size: 14, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.line(s, x + 0.3, 3.68, x + w - 0.3, 3.68, { color: BORDER, lw: 1, arrow: false });
      d.t(s, ex.map((e) => `//${e}//`), x + 0.12, 3.8, w - 0.24, 2.1, { size: 17, align: 'center', valign: 'middle', gap: 10 });
    });
    d.ill(s, 'candy', 12.25, 0.95, 0.5, 0.5);
    d.t(s, 'Ils se placent juste après le verbe, ou après le pronom : //Kom **maar** binnen · Bel me **gerust**//. //Zeg het maar// = « je vous écoute ».', 0.6, 6.2, 12.13, 0.62, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 11 piège panneaux
  {
    const s = d.page({ g: 11, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : les panneaux parlent à l’infinitif' });
    const P = [['door', 'DUWEN'], ['door', 'TREKKEN'], ['no-smoking', 'NIET ROKEN'], ['p-button', 'NIET PARKEREN'], ['shushing-face', 'NIET STOREN'], ['soap', 'HANDEN WASSEN']];
    const w = (12.13 - 5 * 0.2) / 6;
    P.forEach(([il, t], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 1.75, w, 2.2, { fill: 'FFFFFF', line: 'tx2', lw: 3, radius: 0.12, shadow: true });
      d.ill(s, il, x + w / 2 - 0.5, 1.92, 1.0, 1.0);
      if (il === 'p-button') d.icon(s, 'FaBan', 'accent6', x + w / 2 - 0.55, 1.87, 1.1);
      d.t(s, t, x + 0.08, 3.0, w - 0.16, 0.8, { size: t.length > 11 ? 13 : 16, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
    });
    d.trap(s, 0.6, 4.2, 12.13, 2.65, '« **Poussez** / Tirez » · « Ne pas fumer » → à l’écrit, l’**infinitif** : //Duwen · Trekken · Niet roken · Niet storen//', 'À l’oral, à une personne : //**!!Rook!!** hier niet, alstublieft.// (impératif)', { size: 19 });
  }

  // ---------------------------------------------------------------- 12 mode d'emploi
  {
    const s = d.page({ g: 12, tag: 'VOCABULAIRE', title: 'Un mode d’emploi : la photocopieuse' });
    const St = [['page-facing-up', '**!!Leg!!** ##eerst## het document op de glasplaat.'], ['input-numbers', '**!!Kies!!** ##dan## het aantal kopieën.'], ['green-circle', '**!!Druk!!** ##daarna## op de groene knop.'], ['printer', '**!!Neem!!** ##tot slot## je document **##mee##**!']];
    const w = (12.13 - 3 * 0.35) / 4;
    St.forEach(([il, t], i) => {
      const x = 0.6 + i * (w + 0.35);
      d.rect(s, x, 1.8, w, 3.75, { fill: 'bg1', line: BORDER, lw: 1.25, shadow: true });
      d.num(s, i + 1, x + 0.15, 1.95, 0.5, 'tx2', 17);
      d.ill(s, il, x + w / 2 - 0.65, 2.15, 1.3, 1.3);
      d.t(s, `//${t}//`, x + 0.15, 3.6, w - 0.3, 1.8, { size: 19, align: 'center', valign: 'middle' });
      if (i < 3) d.line(s, x + w + 0.04, 3.67, x + w + 0.31, 3.67, { color: 'accent1', lw: 2.5 });
    });
    band(s, '//##eerst## · ##dan## · ##daarna## · ##tot slot##// se placent juste **après le verbe**.', 5.85, 0.8, 'tx2', 19);
  }

  // ---------------------------------------------------------------- 13 indiquer le chemin
  {
    const s = d.page({ g: 13, tag: 'VOCABULAIRE', title: 'Indiquer le chemin dans le bâtiment' });
    const p = plan(s, 0.6, 1.75, 6.3, 4.4, { top: [['201', null], ['202', null], ['203 · An', 'woman-office-worker'], ['204', null]], bot: [['lift', 'elevator'], ['205', null], ['keuken', 'hot-beverage'], ['toilet', 'restroom']] });
    const ry = p.cy + p.ch / 2; const tx = 0.8 + 2 * (p.rw + 0.2) + p.rw / 2;
    d.line(s, 1.05, ry, tx, ry, { color: 'accent6', lw: 3, arrow: false, dash: 'dash' });
    d.line(s, tx, ry, tx, p.cy - 0.12, { color: 'accent6', lw: 3, dash: 'dash' });
    const E = [['FaArrowUp', 'Ga rechtdoor.'], ['FaArrowLeft', 'Ga naar links.'], ['FaArrowRight', 'Ga naar rechts.'], ['FaLevelUpAlt', 'Neem de lift / de trap.'], ['FaBuilding', 'Ga naar de tweede verdieping.'], ['FaDoorOpen', 'Het is de derde deur links.']];
    E.forEach(([ic, t], i) => {
      const y = 1.78 + i * 0.73;
      d.iconDisc(s, ic, 7.2, y + 0.04, 0.55, i === 5 ? 'accent6' : 'tx2');
      d.t(s, `//${t}//`, 7.95, y, 4.8, 0.63, { size: 19, valign: 'middle' });
    });
    d.t(s, 'Dans la rue : //Sla linksaf / rechtsaf.// · //het gelijkvloers// (BE) = //de begane grond// (NL) = le rez-de-chaussée', 0.6, 6.32, 12.13, 0.5, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 14 à retenir
  {
    const s = d.page({ g: 14, tag: 'À RETENIR', title: 'À retenir : la fiche de l’impératif' });
    const C = [
      ['Former', 'FaCogs', 'accent6', ['le **radical** (M3, M4)', '//Werk! Lees! Blijf!//', '⭐ //zijn → **Wees!**//']],
      ['Adoucir', 'FaSlidersH', SOFT, ['//even, maar, eens, gerust, alstublieft//', 'poli : radical + **t** + **u**', '//Komt u binnen.//']],
      ['Placer', 'FaListOl', 'tx2', ['verbe **en tête**, pas de sujet', 'particule au bout (M11)', '//Doe de deur **niet** dicht!// (M13)']],
      ['Écrire', 'FaSign', 'accent5', ['panneaux : l’**infinitif**', '//Niet roken · Duwen//', '« Faisons… » = //**Laten we**…//']],
    ];
    C.forEach(([h, ic, c, body], i) => {
      const x = 0.6 + (i % 2) * 6.18; const y = 1.7 + Math.floor(i / 2) * 2.6;
      d.card(s, x, y, 5.95, 2.42, { icon: ic, head: h, color: c, body, size: 18, gap: 6 });
    });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 15 divider
  d.divider({ g: 15, tiles: [
    ['La machine à ordres', '★', 'FaCogs'], ['Plus poli, s’il vous plaît', '★★', 'FaSlidersH'], ['Du panneau à la phrase', '★', 'FaSign'], ['Le mode d’emploi en désordre', '★★', 'FaListOl'],
    ['Le détective', '★★', 'FaSearch'], ['Le GPS humain', '★', 'FaRoute'], ['Le premier jour de Lotte', '★★★', 'FaUserTie'],
  ] });

  // ---------------------------------------------------------------- 16 ex1 machine à ordres
  const ex1 = [['werken', 'Werk!'], ['luisteren', 'Luister!'], ['lezen', 'Lees!'], ['schrijven', 'Schrijf!'], ['stoppen', 'Stop!'], ['wachten', 'Wacht!'],
    ['zijn (voorzichtig)', 'Wees voorzichtig!'], ['gaan', 'Ga!'], ['opbellen (de klant)', 'Bel de klant ##op##!'], ['blijven', 'Blijf!'], ['geven', 'Geef!'], ['meenemen (je laptop)', 'Neem je laptop ##mee##!']];
  d.ex({ g: 16, title: 'Exercice 1 — La machine à ordres', stars: '★', instr: 'Formez l’impératif (à une personne que vous tutoyez).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex1.forEach(([inf, imp], i) => {
      const x = 0.6 + Math.floor(i / 6) * 6.18; const y = top + (i % 6) * rh;
      d.num(s, i + 1, x, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, x + 0.5, y + 0.06, 2.45, rh - 0.14, { fill: 'bg2', line: BORDER });
      d.t(s, `//${inf}//`, x + 0.55, y + 0.06, 2.35, rh - 0.14, { size: 18, align: 'center', valign: 'middle', fit: true, max: 18, min: 13 });
      d.line(s, x + 3.0, y + rh / 2 - 0.02, x + 3.33, y + rh / 2 - 0.02, { color: 'accent1', lw: 2.5 });
      d.rect(s, x + 3.38, y + 0.06, 2.57, rh - 0.14, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**<<${imp}>>**//`, x + 3.42, y + 0.06, 2.49, rh - 0.14, { size: 18, align: 'center', valign: 'middle', fit: true, max: 18, min: 12 });
    });
  });

  // ---------------------------------------------------------------- 17 ex2 plus poli
  const ex2 = [['Wacht!', 'Wacht u even, alstublieft.'], ['Kom binnen!', 'Komt u maar binnen.'], ['Ga zitten!', 'Gaat u zitten, alstublieft.'], ['Teken hier!', 'Tekent u hier, alstublieft.'], ['Bel morgen terug!', 'Belt u morgen gerust terug.'], ['Vul het formulier in!', 'Vult u het formulier even in, alstublieft.']];
  d.ex({ g: 17, title: 'Exercice 2 — Plus poli, s’il vous plaît', stars: '★★', instr: 'Vous parlez à un client : utilisez u et un petit mot (even, maar, gerust, alstublieft).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex2.forEach(([a, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, 1.1, y + 0.05, 3.7, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, `//**!!${a.split(' ')[0]}!!**${a.slice(a.indexOf(' ') > 0 ? a.indexOf(' ') : a.length)}//`, 1.25, y + 0.05, 3.5, rh - 0.12, { size: 19, valign: 'middle' });
      d.line(s, 4.9, y + rh / 2, 6.0, y + rh / 2, { color: 'accent1', lw: 3 });
      d.t(s, '+ u', 4.85, y, 1.2, rh / 2 - 0.02, { size: 13, bold: true, color: 'accent1', align: 'center', valign: 'bottom' });
      d.rect(s, 6.1, y + 0.05, 6.63, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${b}//`, 6.25, y + 0.05, 6.4, rh - 0.12, { size: 19, color: 'accent3', bold: true, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex3 panneau → phrase
  const ex3 = [['no-smoking', 'NIET ROKEN', 'Rook hier niet!'], ['door', 'DUWEN', 'Duw!'], ['shushing-face', 'NIET STOREN', 'Stoor me niet!'], ['p-button', 'NIET PARKEREN', 'Parkeer hier niet!'], ['soap', 'HANDEN WASSEN', 'Was je handen!'], ['door', 'DEUR SLUITEN', 'Sluit de deur!']];
  d.ex({ g: 18, title: 'Exercice 3 — Du panneau à la phrase', stars: '★', instr: 'Le panneau parle à l’infinitif. Dites-le à un collègue, à l’impératif.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([il, sign, ans], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, 1.1, y + 0.05, 3.7, rh - 0.12, { fill: 'FFFFFF', line: 'tx2', lw: 2, radius: 0.08 });
      d.ill(s, il, 1.2, y + (rh - 0.6) / 2, 0.6, 0.6);
      if (il === 'p-button') d.icon(s, 'FaBan', 'accent6', 1.17, y + (rh - 0.66) / 2, 0.66);
      d.t(s, sign, 1.9, y + 0.05, 2.85, rh - 0.12, { size: 16, bold: true, color: 'tx2', valign: 'middle' });
      d.line(s, 4.9, y + rh / 2, 6.0, y + rh / 2, { color: 'accent1', lw: 3 });
      d.ill(s, 'speech-balloon', 6.15, y + (rh - 0.5) / 2, 0.5, 0.5);
      d.rect(s, 6.75, y + 0.05, 5.98, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**${ans}**//`, 6.9, y + 0.05, 5.7, rh - 0.12, { size: 20, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 19 ex4 mode d'emploi en désordre
  const steps = ['Doe een capsule in de machine.', 'Zet een beker onder de machine.', 'Kies de sterkte: normaal of sterk.', 'Druk op de knop « koffie ».', 'Neem je beker en geniet!'];
  const shuffled = [3, 4, 1, 2, 0];
  d.ex({ g: 19, title: 'Exercice 4 — Le mode d’emploi en désordre', stars: '★★', instr: 'Remettez les consignes de la machine à café dans l’ordre (1 à 5).' }, (s, mode, top) => {
    const order = mode === 'a' ? [0, 1, 2, 3, 4] : shuffled;
    const rh = (6.88 - top) / 5;
    order.forEach((k, i) => {
      const y = top + i * rh;
      if (mode === 'a') d.num(s, k + 1, 0.6, y + (rh - 0.55) / 2, 0.55, 'accent3', 18);
      else { d.oval(s, 0.6, y + (rh - 0.55) / 2, 0.55, 0.55, { fill: 'FFFFFF', line: 'accent5', lw: 1.5, dash: 'dash' }); }
      d.rect(s, 1.35, y + 0.08, 7.6, rh - 0.18, { fill: mode === 'a' ? 'EDF6F0' : 'bg2', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      const t = steps[k]; const v = t.split(' ')[0];
      d.t(s, `//**!!${v}!!**${t.slice(v.length)}//`, 1.55, y + 0.08, 7.3, rh - 0.18, { size: 21, valign: 'middle' });
    });
    d.ill(s, 'hot-beverage', 9.9, top + 0.3, 2.3, 2.3);
    if (mode === 'a') d.t(s, ['Puis reliez avec :', '//**Doe ##eerst##… Zet ##dan##… Kies ##daarna##… Druk ##tot slot##…**//', '(2 et 3 peuvent s’inverser)'], 9.4, top + 2.8, 3.33, 2.6, { size: 15, gap: 6, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 20 ex5 détective
  d.ex({ g: 20, title: 'Exercice 5 — Le détective', stars: '★★', instr: 'Sofie a collé un post-it sur l’écran de Lotte. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFF6C9', line: 'E3C65A', lw: 1.25, shadow: true, radius: 0.02 });
    d.ill(s, 'round-pushpin', 4.85, top - 0.2, 0.5, 0.5);
    const txt = '//Hoi Lotte! Welkom! {{Komt}}++ Kom++ morgen om 9 uur. {{Ben}}++ Wees++ op tijd, want we hebben een vergadering. Neem je laptop mee en log in met je badge. {{Doe dicht de deur van het archief}}++ Doe de deur van het archief dicht++. {{Vergeet niet je wachtwoord}}++ Vergeet je wachtwoord niet++! {{Lezen}}++ Lees++ de handleiding en vraag het gerust als je iets niet begrijpt. — Sofie//';
    d.t(s, txt, 0.95, top + 0.45, 8.3, h - 0.6, { size: 20, mode, ls: 1.2, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //Neem je laptop mee · log in · vraag het gerust//.', 9.9, top + 3.05, 2.83, 1.6, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 21 ex6 GPS humain
  {
    const s = d.page({ g: 21, tag: 'JIJ NU !', title: 'Exercice 6 — Le GPS humain', stars: '★' });
    const p = plan(s, 0.6, 1.75, 7.2, 5.1, { top: [['1 · keuken', 'hot-beverage'], ['2 · vergaderzaal', 'busts-in-silhouette'], ['3 · toilet', 'restroom'], ['4 · printer', 'printer']], bot: [['5 · lift', 'elevator'], ['', null], ['6 · kantoor An', 'woman-office-worker'], ['', null]] });
    d.ill(s, 'stopwatch', 8.15, 1.75, 0.9, 0.9);
    d.t(s, 'Waar ga ik naartoe?', 9.15, 1.75, 3.58, 0.9, { size: 20, bold: true, color: 'accent1', head: true, valign: 'middle' });
    d.t(s, ['**1.** A choisit une destination en secret.', '**2.** A guide B depuis l’entrée ; B suit le chemin du doigt.', '**3.** B devine : //Is het de keuken?//'], 8.15, 2.75, 4.58, 1.9, { size: 16, gap: 8 });
    d.rect(s, 8.15, 4.75, 4.58, 2.1, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE', 8.35, 4.82, 3, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, '//Ga rechtdoor. · Ga naar links / rechts. · Neem de lift. · Het is de eerste / tweede deur links / rechts.//', 8.35, 5.15, 4.2, 1.6, { size: 15 });
    void p;
  }

  // ---------------------------------------------------------------- 22 ex7 premier jour de Lotte
  d.roleplay({
    g: 22, title: 'Exercice 7 — Le premier jour de Lotte',
    scenario: 'Lotte commence son stage chez Peeters & Co. Sofie lui fait visiter les lieux et lui donne les consignes.',
    a: '**Sofie** : accueillez Lotte, montrez-lui les lieux et donnez **5 consignes** de la checklist.',
    b: '**Lotte** : posez des questions : //Waar is…? Hoe werkt…? Mag ik…?//',
    bank: '//Kom maar binnen! · Neem plaats. · Hier is je badge: verlies hem niet! · Log in met je naam. · Neem de lift naar de tweede verdieping. · Vraag het gerust aan An. · Laten we koffie gaan drinken!//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.55, { fill: 'purple', line: null, radius: 0.04 });
      d.t(s, 'CHECKLIST EERSTE WERKDAG', x + 0.15, y, w - 0.3, 0.55, { size: 12, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const L = [['identification-card', 'badge'], ['laptop', 'laptop'], ['key', 'wachtwoord'], ['hot-beverage', 'koffiemachine'], ['printer', 'printer'], ['person-running', 'nooduitgang'], ['fork-and-knife-with-plate', 'lunch']];
      L.forEach(([il, t], i) => {
        const yy = y + 0.7 + i * ((h - 0.8) / 7);
        d.rect(s, x + 0.2, yy + 0.12, 0.3, 0.3, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, radius: 0.03 });
        d.ill(s, il, x + 0.65, yy + 0.04, 0.48, 0.48);
        d.t(s, `//${t}//`, x + 1.25, yy, w - 1.4, 0.56, { size: 15, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 23 ticket
  d.ticket({
    g: 23,
    q: ['L’impératif de //zijn// (+ //voorzichtig//) ? de //opbellen// (+ //de klant//) ?', 'Plus poli, avec //u// : //Wacht!//', 'Comment dit-on « Commençons ! » ?'],
    self: ['Former', 'Adoucir', 'Guider'],
    teaser: { icon: 'FaKey', text: '**Volgende keer : Zitten, staan, liggen, hangen** — //Waar ligt mijn sleutel?//' },
  });
}

module.exports = { meta, build };
