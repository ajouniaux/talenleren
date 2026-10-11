// In vijf zinnen — production écrite et orale guidée (A1 · A2 · B1) : 24 contextes du quotidien
// dans le style « Gebruik deze foto als inspiratie » : bandeau « Niveau », puis trois diapos par contexte
// (la consigne Zin 1 – 5 · la grande illustration · l'exemple, étiquettes vertes posées sur les bribes de texte)
const { LEVELS } = require('../vijfzinnen_data');
const { vijfKit, LV } = require('../vijf_kit');

const meta = {
  n: 'V', slug: 'In_vijf_zinnen', title: 'In vijf zinnen', short: 'In vijf zinnen',
  template: 'in_vijf_zinnen.md', file: 'In_vijf_zinnen_A1_A2_B1.pptx',
  docTitle: 'In vijf zinnen — Production écrite et orale guidée (A1 · A2 · B1)',
  subject: 'Néerlandais — production guidée A1 · A2 · B1',
  foot: 'Néerlandais · A1 · A2 · B1 · In vijf zinnen',
  company: 'IRAM — Néerlandais',
  L: { coverFoot: 'Néerlandais · A1 · A2 · B1 · Production guidée · A. Jouniaux · IRAM' },
};

function build(d) {
  const k = vijfKit(d, meta);
  const { txt, box, banner, photo, page, flow } = k;

  // ------------------------------------------------------------ 1 couverture
  {
    const s = k.cover(1, 'In vijf zinnen');
    banner(s, 'ALL', 'A1 · A2 · B1');
    txt(s, 'Production écrite et orale guidée', 1.72, 2.8, 5.6, 0.5, { size: 22, color: k.GREY });
    txt(s, '24 contextes du quotidien · 1 image · 5 phrases · 1 modèle', 1.72, 3.3, 5.6, 0.45, { size: 16, italic: true, color: k.GREY });
    [['A1', 'Découverte'], ['A2', 'Survie'], ['B1', 'Seuil']].forEach(([lv, n], i) => {
      const c = LV[lv]; const x = 1.72 + i * 1.82;
      box(s, x, 4.15, 1.68, 0.62, { fill: c.fill, line: c.line, lw: 1.5, r: 0.14 });
      txt(s, [{ text: `${lv} `, options: { bold: true, color: c.text } }, { text: n, options: { color: c.text } }], x, 4.15, 1.68, 0.62, { size: 16, align: 'center' });
    });
    box(s, 1.72, 5.15, 5.3, 0.8, { fill: 'EAF5EC', line: k.ZIN, lw: 1.25, r: 0.14 });
    d.icon(s, 'FaComments', k.ZIN, 1.92, 5.38, 0.34);
    txt(s, 'Lees je tekst voor aan je partner. Wat denkt hij/zij daarvan?', 2.4, 5.15, 4.5, 0.8, { size: 14.5, bold: true, color: k.OK });
    photo(s, 'terras', 7.75, 0.85, 3.5, { small: true, rot: -4 });
    photo(s, 'zee', 9.55, 2.45, 3.4, { small: true, rot: 5 });
    photo(s, 'buren', 7.6, 4.3, 3.3, { small: true, rot: -2 });
  }

  // ------------------------------------------------------------ 2 mode d'emploi
  d.section('Mode d’emploi');
  {
    const s = page(2, 'Hoe werkt het? Comment ça marche ?');
    banner(s, 'ALL', 'Mode d’emploi');
    const S = [['FaImage', 'Kijk', 'Observez l’image : où ? qui ? quoi ?'], ['FaListOl', 'Lees', 'Lisez les 5 consignes : Zin 1 à Zin 5, une phrase chacune.'], ['FaPenNib', 'Schrijf of vertel', 'Écrivez ou dites vos 5 phrases (5 à 10 min).'], ['FaUserFriends', 'Deel', 'Lisez votre texte à votre partner, puis comparez avec l’exemple.']];
    const cw = (11.2 - 3 * 0.25) / 4;
    S.forEach(([ic, h, t], i) => {
      const x = 1.7 + i * (cw + 0.25);
      box(s, x, 1.55, cw, 2.3, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.1, shadow: true, so: 0.12 });
      s.addShape(d.S.OVAL, { x: x + 0.25, y: 1.8, w: 0.72, h: 0.72, fill: { color: 'EAF5EC' }, line: { color: k.ZIN, width: 1.5 } });
      d.icon(s, ic, k.ZIN, x + 0.43, 1.98, 0.36);
      txt(s, `${i + 1}`, x + cw - 0.65, 1.8, 0.4, 0.72, { size: 30, bold: true, color: 'D5DCE6', align: 'right' });
      txt(s, h, x + 0.25, 2.65, cw - 0.5, 0.42, { size: 18, bold: true });
      txt(s, t, x + 0.25, 3.05, cw - 0.5, 0.75, { size: 13.5, color: k.GREY, valign: 'top' });
    });
    txt(s, 'Dans l’exemple, chaque étiquette verte se pose sur la bribe de texte qui répond à la consigne :', 1.7, 4.15, 11.2, 0.4, { size: 14, italic: true, color: k.GREY });
    const c2 = LEVELS[1].ctx[1];
    flow(s, [{ text: c2.ex[1], crit: c2.crit }], 1.9, 4.7, 12.8, 21, true);
    box(s, 4.2, 6.2, 6.2, 0.7, { fill: 'EAF5EC', line: k.ZIN, lw: 1.25, r: 0.14 });
    txt(s, 'Le but : le lexique et la grammaire du niveau… et la créativité !', 4.2, 6.2, 6.2, 0.7, { size: 15, bold: true, color: k.OK, align: 'center' });
  }

  // ------------------------------------------------------------ 3 la grille
  {
    const s = page(3, 'Évaluer une production : la grille sur 10');
    banner(s, 'ALL', 'Évaluation');
    const R = [['Consignes respectées', '5', 'un point par phrase : la consigne est présente et correcte', k.ZIN], ['Correction', '2', 'conjugaison, ordre des mots, accords, orthographe ou prononciation', '4A7BD0'],
      ['Vocabulaire', '1', 'des mots précis et variés, adaptés à la situation', 'D9822B'], ['Cohérence', '1', 'les 5 phrases racontent une même scène', '8E6CC8'], ['Créativité', '1', 'une chute originale, de l’humour, une surprise', 'C2185B']];
    R.forEach(([h, pts, t, c], i) => {
      const y = 1.55 + i * 0.92;
      box(s, 1.7, y, 8.7, 0.78, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.12, shadow: true, so: 0.1 });
      box(s, 1.85, y + 0.15, 0.48, 0.48, { fill: c, r: 0.24 });
      txt(s, h, 2.5, y, 2.6, 0.78, { size: 17, bold: true, color: c });
      txt(s, t, 5.1, y, 4.2, 0.78, { size: 13.5, color: k.GREY });
      txt(s, `${pts} pt${pts === '1' ? '' : 's'}`, 9.35, y, 0.9, 0.78, { size: 17, bold: true, color: c, align: 'right' });
    });
    let q = 0;
    R.forEach(([, pts, , c]) => { for (let j = 0; j < Number(pts); j += 1) { box(s, 10.85, 1.55 + (9 - q) * 0.45, 0.8, 0.38, { fill: c, r: 0.08 }); q += 1; } });
    txt(s, '/ 10', 11.8, 5.35, 1.1, 0.6, { size: 28, bold: true, color: k.INK });
    txt(s, 'À l’oral : la prononciation et la fluidité remplacent l’orthographe.', 1.7, 6.3, 8.7, 0.45, { size: 13.5, italic: true, color: k.GREY });
  }

  // ------------------------------------------------------------ les niveaux
  let g = 4;
  LEVELS.forEach((lvl) => {
    d.section(lvl.name);
    // intercalaire
    {
      const s = page(g, `Niveau ${lvl.id} — ${lvl.name.split('· ')[1]}`);
      banner(s, lvl.id, `Niveau ${lvl.id}`);
      const c = LV[lvl.id];
      box(s, 1.7, 1.5, 3.3, 5.35, { fill: c.fill, line: c.line, lw: 1.25, r: 0.12 });
      txt(s, 'Ce qu’on évalue', 1.9, 1.62, 3.0, 0.45, { size: 16, bold: true, color: c.text });
      s.addText(lvl.spec.map((t, i) => ({ text: t.replace(/\*\*/g, ''), options: { bullet: { indent: 12 }, breakLine: i < lvl.spec.length - 1, paraSpaceAfter: 5 } })), {
        x: 1.9, y: 2.1, w: 3.0, h: 4.6, fontSize: 13, fontFace: k.FONT, color: k.INK, valign: 'top', margin: 0, isTextBox: true,
      });
      const cw = 1.78; const gx = 0.17;
      lvl.ctx.forEach((cx, i) => {
        const x = 5.3 + (i % 4) * (cw + gx); const y = 1.6 + Math.floor(i / 4) * 2.65;
        photo(s, cx.img, x, y, cw, { small: true, b: 0.05, blur: 6, off: 2 });
        txt(s, `${i + 1} · ${cx.t}`, x - 0.05, y + cw / 1.6 + 0.1, cw + 0.1, 0.5, { size: 12, bold: true, valign: 'top' });
        txt(s, cx.fr, x - 0.05, y + cw / 1.6 + 0.58, cw + 0.1, 0.3, { size: 10.5, italic: true, color: k.GREY, valign: 'top' });
        d.icon(s, cx.mode === 'W' ? 'FaPenNib' : 'FaComments', cx.mode === 'W' ? '4A7BD0' : 'D9822B', x + cw - 0.27, y + 0.07, 0.2);
      });
      g += 1;
    }
    lvl.ctx.forEach((c, i) => {
      k.context(g, c, { lv: lvl.id, label: `Niveau ${lvl.id}`, num: i + 1, start: lvl.id === 'A1' ? 24 : lvl.id === 'A2' ? 22 : 20 });
      g += 1;
    });
  });

  // ------------------------------------------------------------ variantes
  d.section('Variantes');
  {
    const s = page(g, 'Six variantes ludiques');
    banner(s, 'ALL', 'Variantes');
    const V = [['stopwatch', 'Contre la montre', 'Cinq phrases en cinq minutes : le sablier tourne !'], ['link', 'La chaîne', 'Cinq apprenant·es, cinq phrases : chacun·e ajoute la sienne à l’oral.'], ['detective', 'Devinez la consigne', 'On lit sa production ; la classe retrouve les cinq consignes.'],
      ['game-die', 'Le dé', 'On lance le dé : la phrase indiquée doit être dite en premier.'], ['up-arrow', 'Niveau supérieur', 'Même image, consignes du niveau suivant : A1 → A2 → B1.'], ['trophy', 'La meilleure chute', 'Toutes les chutes au tableau ; la classe vote.']];
    const cw = (11.2 - 2 * 0.25) / 3; const ch = 2.4;
    V.forEach(([ic, h, t], i) => {
      const x = 1.7 + (i % 3) * (cw + 0.25); const y = 1.5 + Math.floor(i / 3) * (ch + 0.25);
      box(s, x, y, cw, ch, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.12, shadow: true, so: 0.12 });
      d.ill(s, ic, x + 0.25, y + 0.25, 0.85, 0.85);
      txt(s, h, x + 1.25, y + 0.25, cw - 1.4, 0.85, { size: 18, bold: true, color: k.ZIN });
      txt(s, t, x + 0.25, y + 1.25, cw - 0.5, 1.0, { size: 14, color: k.GREY, valign: 'top' });
    });
  }
}

module.exports = { meta, build };
