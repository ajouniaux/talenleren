// Goedemorgen, collega! — Jeu de rôle court (A1, après la 2e séance) : saluer, épeler, compter, remercier
const { BORDER, plain, HEX, PURPLE } = require('../lib');

const meta = {
  n: 'R', slug: 'Goedemorgen', title: 'Goedemorgen, collega! — Jeu de rôle', short: 'Jeu de rôle',
  template: 'rollenspel_goedemorgen.md', file: 'Rollenspel_Goedemorgen_collega.pptx',
  docTitle: 'Goedemorgen, collega! — Jeu de rôle (A1, après la 2e séance)',
  foot: 'Néerlandais · A1 · Jeu de rôle',
};

// Sofie (A, à l'accueil) bleu · Tom (B, nouveau collègue) violet · nombres orange · chunks vert
const SA = 'accent2'; const TB = 'purple'; const NB = 'accent1'; const CH = 'accent3';
const INK = '17375E';
const hexOf = (c) => (c === 'purple' ? PURPLE : c === 'tx2' ? INK : HEX[c] || c);

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  // le décor : le hall d'accueil de Peeters & Co (coordonnées relatives à la boîte X, Y, W, H)
  const decor = (s, X, Y, W, H, o = {}) => {
    const x = (f) => X + f * W; const y = (f) => Y + f * H; const w = (f) => f * W; const h = (f) => f * H;
    d.rect(s, X, Y, W, h(0.74), { fill: 'EAF2FB', line: null, radius: 0 });
    d.rect(s, X, y(0.74), W, h(0.025), { fill: 'B8C2CF', line: null, radius: 0 });
    d.rect(s, X, y(0.765), W, h(0.235), { fill: 'EADFCF', line: null, radius: 0 });
    [0.12, 0.3, 0.5, 0.7, 0.88].forEach((f) => d.line(s, x(f), y(0.765), x(f - 0.04), Y + H, { color: 'D9C8B0', lw: 1, arrow: false }));
    // fenêtre
    d.rect(s, x(0.035), y(0.09), w(0.2), h(0.42), { fill: 'CDE7F7', line: 'FFFFFF', lw: o.lw || 5, radius: 0 });
    d.line(s, x(0.135), y(0.09), x(0.135), y(0.51), { color: 'FFFFFF', lw: o.lw ? o.lw - 1 : 4, arrow: false });
    d.line(s, x(0.035), y(0.3), x(0.235), y(0.3), { color: 'FFFFFF', lw: o.lw ? o.lw - 1 : 4, arrow: false });
    d.ill(s, 'sun-behind-cloud', x(0.05), y(0.12), h(0.15), h(0.15));
    // enseigne, horloge, tableau
    d.rect(s, x(0.36), y(0.07), w(0.28), h(0.12), { fill: 'tx2', line: null, radius: 0.06 });
    d.t(s, '**PEETERS & CO**', x(0.36), y(0.07), w(0.28), h(0.12), { size: o.sign || 18, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
    d.ill(s, 'mantelpiece-clock', x(0.705), y(0.07), h(0.15), h(0.15));
    d.ill(s, 'framed-picture', x(0.83), y(0.09), h(0.19), h(0.19));
    // le comptoir d'accueil
    d.ill(s, 'desktop-computer', x(0.36), y(0.33), h(0.2), h(0.2));
    d.ill(s, 'hot-beverage', x(0.5), y(0.43), h(0.1), h(0.1));
    d.ill(s, 'potted-plant', x(0.585), y(0.35), h(0.18), h(0.18));
    d.rect(s, x(0.315), y(0.52), w(0.37), h(0.05), { fill: 'D5DCE6', line: null, radius: 0.03 });
    d.rect(s, x(0.33), y(0.57), w(0.34), h(0.33), { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, '**ONTHAAL**', x(0.33), y(0.64), w(0.34), h(0.14), { size: o.sign ? o.sign - 2 : 16, color: 'bg1', align: 'center', valign: 'middle', cs: 3 });
    // les deux collègues
    if (!o.noPeople) {
      d.ill(s, 'woman-office-worker', x(0.1), y(0.34), h(0.56), h(0.56));
      d.ill(s, 'man-office-worker', x(0.9) - h(0.56), y(0.34), h(0.56), h(0.56));
    }
  };
  // bulle de BD (queue en bas à gauche, ou à droite)
  const bubble = (s, txt, x, y, w, h, c, right, size = 18) => {
    s.addShape(d.S.ROUNDED_RECTANGULAR_CALLOUT, { x, y, w, h, flipH: !!right, fill: { color: 'FFFFFF' }, line: { color: hexOf(c), width: 2 } });
    d.t(s, txt, x + 0.1, y, w - 0.2, h * 0.92, { size, align: 'center', valign: 'middle' });
  };
  // le badge
  const badge = (s, x, y, w, h, title, rows, c, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.14, shadow: true });
    d.rect(s, x, y, w, 0.62, { fill: c, line: null, radius: 0.14 });
    d.rect(s, x + w / 2 - 0.35, y - 0.12, 0.7, 0.2, { fill: 'B8C2CF', line: null, radius: 0.08 });
    d.t(s, `**${title}**`, x + 0.15, y, w - 0.3, 0.62, { size: 15, color: 'bg1', align: 'center', valign: 'middle', cs: 1 });
    d.ill(s, o.ic || 'identification-card', x + 0.2, y + 0.78, 0.7, 0.7);
    d.t(s, '**PEETERS & CO**', x + 1.0, y + 0.78, w - 1.15, 0.7, { size: 13, color: 'tx2', valign: 'middle', cs: 1 });
    const rh = (h - 1.65) / rows.length;
    rows.forEach(([lab, val], i) => {
      const yy = y + 1.6 + i * rh;
      d.t(s, lab, x + 0.25, yy, 1.7, rh, { size: 15, color: 'accent5', valign: 'middle' });
      if (val) d.t(s, `**${val}**`, x + 1.95, yy, w - 2.15, rh, { size: o.vs || 22, color: o.vc || NB, valign: 'middle' });
      else d.line(s, x + 1.95, yy + rh * 0.72, x + w - 0.25, yy + rh * 0.72, { color: 'B8C2CF', lw: 1.5, arrow: false, dash: 'dash' });
    });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'JEU DE RÔLE · A1', title: 'Goedemorgen, collega!', sub: 'Une mise en situation après la 2e séance', line: 'saluer · épeler · compter · remercier',
    visual: (s) => {
      d.rect(s, 6.75, 1.2, 6.3, 4.2, { fill: 'FFFFFF', line: null, radius: 0.16 });
      decor(s, 6.9, 1.35, 6.0, 3.9, { sign: 12, lw: 3 });
    },
  });

  // ---------------------------------------------------------------- 2 la situation (le décor)
  {
    const s = d.page({ g: 2, tag: 'MISE EN SITUATION', title: 'Premier jour chez Peeters & Co' });
    decor(s, 0.6, 1.55, 12.13, 4.45);
    bubble(s, '//**Goedemorgen!**//', 1.95, 1.8, 2.95, 0.85, SA, false, 21);
    bubble(s, '//**Goedemorgen!**//', 8.5, 1.8, 2.95, 0.85, TB, true, 21);
    d.rect(s, 1.0, 5.45, 1.5, 0.4, { fill: SA, line: null, radius: 0.1 });
    d.t(s, '**A · Sofie**', 1.0, 5.45, 1.5, 0.4, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
    d.rect(s, 10.83, 5.45, 1.5, 0.4, { fill: TB, line: null, radius: 0.1 });
    d.t(s, '**B · Tom**', 10.83, 5.45, 1.5, 0.4, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
    const S = [['1', 'Saluer', 'waving-hand'], ['2', 'Épeler', 'input-latin-uppercase'], ['3', 'Compter', 'input-numbers'], ['4', 'Remercier', 'sparkles']];
    const cw = (12.13 - 0.45) / 4;
    S.forEach(([n, t, ic], i) => {
      const x = 0.6 + i * (cw + 0.15);
      d.rect(s, x, 6.15, cw, 0.62, { fill: 'tx2', line: null, radius: 0.1 });
      d.num(s, n, x + 0.12, 6.24, 0.44, 'accent1', 14);
      d.ill(s, ic, x + 0.68, 6.21, 0.5, 0.5);
      d.t(s, `**${t}**`, x + 1.3, 6.15, cw - 1.4, 0.62, { size: 16, color: 'bg1', valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 3 la boîte à outils
  {
    const s = d.page({ g: 3, tag: 'OUTILS', title: 'La boîte à outils' });
    const C = [['SALUER', 'waving-hand', SA, ['Goedemorgen!', 'Hallo! · Dag!', 'Ik ben … En jij?', 'Tot straks!']],
      ['ÉPELER', 'input-latin-uppercase', TB, ['Hoe spel je dat?', 'T – O – M', 'Tom of Toon?']],
      ['COMPTER', 'input-numbers', NB, ['24 · vierentwintig', '58 · achtenvijftig', '73 · drieënzeventig']],
      ['RÉAGIR', 'sparkles', CH, ['Dat is mooi!', 'Bedankt!']]];
    const cw = (12.13 - 0.45) / 4;
    C.forEach(([h, ic, c, L], i) => {
      const x = 0.6 + i * (cw + 0.15);
      d.rect(s, x, 1.6, cw, 3.55, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, cw, 0.6, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${h}**`, x + 0.7, 1.6, cw - 0.8, 0.6, { size: 16, color: 'bg1', valign: 'middle', cs: 1 });
      d.ill(s, ic, x + 0.12, 1.65, 0.5, 0.5);
      d.t(s, L.map((t) => `//**${t}**//`), x + 0.15, 2.3, cw - 0.3, 2.75, { size: c === NB ? 16 : 18, color: c === NB ? 'tx1' : c, align: 'center', valign: 'middle', gap: 10 });
    });
    const B = [[TB, 'Court ou long ?', '//**Tom**// (o court) ≠ //**Toon**// (oo long) · //**Dan**// ≠ //**Daan**//'], [NB, 'Les nombres', 'l’unité d’abord : //**vier-en-twintig**// = 4 + 20'], [TB, 'Lettres pièges', '//e// [é] · //i// [i] · //u// [u] · //g// [ché] · //j// [yé] · //w// [wé] · //ij// [ei]']];
    B.forEach(([c, h, t], i) => {
      const y = 5.3 + i * 0.5;
      d.rect(s, 0.6, y, 2.3, 0.42, { fill: c, line: null, radius: 0.08 });
      d.t(s, `**${h}**`, 0.6, y, 2.3, 0.42, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, t, 3.05, y, 9.7, 0.42, { size: 15, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 4 le dialogue modèle
  {
    const s = d.page({ g: 4, tag: 'MODÈLE', title: 'Le dialogue modèle' });
    d.ill(s, 'woman-office-worker', 0.55, 1.65, 1.5, 1.5);
    d.t(s, '**A · Sofie**', 0.5, 3.15, 1.6, 0.35, { size: 13, color: SA, align: 'center' });
    d.ill(s, 'man-office-worker', 11.28, 1.65, 1.5, 1.5);
    d.t(s, '**B · Tom**', 11.23, 3.15, 1.6, 0.35, { size: 13, color: TB, align: 'center' });
    const L = [['A', 'Goedemorgen!'], ['B', 'Goedemorgen!'], ['A', 'Ik ben Sofie. En jij?'], ['B', 'Ik ben Tom.'], ['A', 'Tom of Toon? **Hoe spel je dat?**'], ['B', 'T – O – M.'],
      ['A', '**Bedankt!** Hier is je badge: nummer **73**.'], ['B', 'Drieënzeventig. **Dat is mooi!**'], ['A', 'Je kantoor: nummer **24**. Tot straks!'], ['B', '**Bedankt!** Dag Sofie!']];
    const rh = 0.44;
    L.forEach(([who, t], i) => {
      const y = 1.62 + i * (rh + 0.04); const c = who === 'A' ? SA : TB;
      const w = Math.min(6.2, wOf(t, 17) + 0.5);
      const x = who === 'A' ? 2.35 : 10.98 - w;
      d.rect(s, x, y, w, rh, { fill: who === 'A' ? 'EAF2FB' : 'F1ECF7', line: c, lw: 1.25, radius: 0.2 });
      d.t(s, `//${t}//`, x + 0.15, y, w - 0.3, rh, { size: 17, align: who === 'A' ? 'left' : 'right', valign: 'middle' });
      d.t(s, `**${who}**`, who === 'A' ? 2.0 : 11.03, y, 0.3, rh, { size: 13, color: c, align: 'center', valign: 'middle' });
    });
    d.t(s, '//of// = ou · //Hier is je badge// = voici ton badge · //je kantoor// = ton bureau', 0.6, 6.55, 12.13, 0.3, { size: 12, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 5 à vous : ronde 1
  d.roleplay({
    g: 5, title: 'À vous ! Ronde 1', stars: '★',
    scenario: 'Premier jour chez Peeters & Co. A accueille B à l’accueil : saluer, épeler, donner les numéros, remercier.',
    a: ['**A — à l’accueil**', 'Saluez. Demandez le prénom et faites-le épeler.', 'Donnez les 3 numéros de la fiche.'],
    b: ['**B — nouveau·elle collègue**', 'Saluez. Prenez le prénom //Tom// ou //Toon// et épelez-le.', 'Répétez et notez les numéros. Remerciez !'],
    bank: '//Goedemorgen! · Ik ben … En jij? · Tom of Toon? · Hoe spel je dat? · Hier is je badge: nummer … · Je kantoor: nummer … · Je telefoon: nummer … · Dat is mooi! · Bedankt! · Tot straks!//',
    doc: (s, x, y, w, h) => badge(s, x, y + 0.12, w, h - 0.12, 'FICHE A · RONDE 1', [['Badge', '73'], ['Kantoor', '24'], ['Telefoon', '58']], SA),
  });

  // ---------------------------------------------------------------- 6 ronde 2 et checklist
  {
    const s = d.page({ g: 6, tag: 'MISE EN SITUATION', title: 'Ronde 2 : échangez les rôles !', stars: '★★' });
    badge(s, 0.6, 1.75, 3.9, 4.0, 'FICHE A · RONDE 2', [['Badge', '91'], ['Kantoor', '47'], ['Telefoon', '36']], SA);
    d.t(s, 'B prend le prénom //**Dan**// ou //**Daan**//.', 0.6, 5.85, 3.9, 0.5, { size: 14, color: TB, align: 'center', valign: 'middle' });
    badge(s, 4.75, 1.75, 3.9, 4.0, 'BADGE DE B · À REMPLIR', [['Naam', null], ['Badge', null], ['Kantoor', null], ['Telefoon', null]], TB);
    d.t(s, 'B note le prénom et les numéros entendus.', 4.75, 5.85, 3.9, 0.5, { size: 14, color: TB, align: 'center', valign: 'middle' });
    d.rect(s, 8.9, 1.75, 3.83, 4.6, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.t(s, '**IK KAN…** (je peux…)', 9.1, 1.85, 3.5, 0.45, { size: 15, color: 'tx2', valign: 'middle', cs: 1 });
    const K = [['waving-hand', 'saluer', 'Goedemorgen!'], ['input-latin-uppercase', 'épeler un prénom', 'Hoe spel je dat?'], ['input-numbers', 'dire et noter un nombre', '73 · 24 · 58'], ['sparkles', 'réagir, remercier', 'Dat is mooi! Bedankt!']];
    K.forEach(([ic, t, ex], i) => {
      const y = 2.42 + i * 0.95;
      d.rect(s, 9.1, y + 0.12, 0.38, 0.38, { fill: 'FFFFFF', line: CH, lw: 1.75, radius: 0.06 });
      d.ill(s, ic, 9.6, y + 0.05, 0.55, 0.55);
      d.t(s, [`**${t}**`, `//${ex}//`], 10.25, y, 2.4, 0.8, { size: 13, valign: 'middle', gap: 0 });
    });
    band(s, '**Défi** : ajoutez un compliment au bureau : //Dat is mooi!// · et dites au revoir : //Tot straks!//', 6.45, 0.45, 'tx2', 15);
  }
}

module.exports = { meta, build };
