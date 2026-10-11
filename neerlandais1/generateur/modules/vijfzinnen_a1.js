// Stap voor stap — 45 petites productions jalonnées pour vrais débutants (A1), en parallèle du syllabus
// « Néerlandais en situation » : même style que In vijf zinnen (bandeau vertical, Zin 1 à Zin n, exemple étiqueté),
// mais 3, puis 4, puis 5 phrases, et des consignes qui reprennent les blocs du syllabus.
const { SECTIONS } = require('../vijfzinnen_a1_data');
const { vijfKit, LV } = require('../vijf_kit');

const meta = {
  n: 'VA1', slug: 'Stap_voor_stap_A1', title: 'Stap voor stap', short: 'Stap voor stap',
  template: 'stap_voor_stap_a1.md', file: 'Stap_voor_stap_A1_debutants.pptx',
  docTitle: 'Stap voor stap — Petites productions jalonnées (A1, vrais débutants)',
  subject: 'Néerlandais — production guidée A1, en parallèle du syllabus Néerlandais en situation',
  foot: 'Néerlandais · A1 · Stap voor stap · Productions jalonnées',
  company: 'IRAM — Néerlandais',
  L: { coverFoot: 'Néerlandais · A1 · Stap voor stap · Production guidée · A. Jouniaux · IRAM' },
};

const total = SECTIONS.reduce((n, sc) => n + sc.ctx.length, 0);
const nZin = (sc) => [...new Set(sc.ctx.map((c) => c.crit.length))].sort();

function build(d) {
  const k = vijfKit(d, meta);
  const { txt, box, banner, photo, page, flow } = k;

  // ------------------------------------------------------------ 1 couverture
  {
    const s = k.cover(1, 'Stap voor stap');
    banner(s, 'S1', 'A1 · Débutants');
    txt(s, 'Petites productions jalonnées', 1.72, 2.8, 5.6, 0.5, { size: 22, color: k.GREY });
    txt(s, `${total} contextes · 1 image · 3, 4 puis 5 phrases · 1 modèle`, 1.72, 3.3, 5.6, 0.45, { size: 16, italic: true, color: k.GREY });
    // l'escalier : 3 → 4 → 5 zinnen
    [3, 4, 5].forEach((n, i) => {
      const x = 1.72 + i * 1.78; const h = 0.55 + i * 0.32; const y = 5.0 - h;
      box(s, x, y, 1.66, h, { fill: k.LV[['S1', 'S2', 'S3'][i]].fill, line: k.LV[['S1', 'S2', 'S3'][i]].line, lw: 1.5, r: 0.08 });
      txt(s, [{ text: `${n} `, options: { bold: true } }, { text: 'zinnen' }], x, y, 1.66, 0.55, { size: 16, color: k.LV[['S1', 'S2', 'S3'][i]].text, align: 'center' });
    });
    d.icon(s, 'FaArrowRight', k.ZIN, 6.98, 4.18, 0.3);
    box(s, 1.72, 5.35, 5.3, 0.8, { fill: 'EAF5EC', line: k.ZIN, lw: 1.25, r: 0.14 });
    d.icon(s, 'FaBookOpen', k.ZIN, 1.92, 5.58, 0.34);
    txt(s, 'En parallèle du syllabus « Néerlandais en situation » : Emma & Pieter, grammaire, vocabulaire, situations.', 2.4, 5.35, 4.5, 0.8, { size: 13, bold: true, color: k.OK });
    photo(s, 'a1_goedemorgen', 7.75, 0.85, 3.5, { small: true, rot: -4 });
    photo(s, 'a1_kopje', 9.55, 2.45, 3.4, { small: true, rot: 5 });
    photo(s, 'a1_winter', 7.6, 4.3, 3.3, { small: true, rot: -2 });
  }

  // ------------------------------------------------------------ 2 mode d'emploi
  d.section('Mode d’emploi');
  {
    const s = page(2, 'Hoe werkt het? Comment ça marche ?');
    banner(s, 'ALL', 'Mode d’emploi');
    const S = [['FaImage', 'Kijk', 'Observez l’image : où ? qui ? quoi ?'], ['FaListOl', 'Lees', 'Lisez les consignes : Zin 1, Zin 2… une phrase chacune.'], ['FaPenNib', 'Schrijf of vertel', 'Écrivez ou dites vos phrases, le syllabus ouvert (5 min).'], ['FaUserFriends', 'Deel', 'Lisez votre texte à votre partner, puis comparez avec l’exemple.']];
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
    const c = SECTIONS[0].ctx[3];
    flow(s, [{ text: c.ex.join(' '), crit: c.crit }], 1.9, 4.7, 12.8, 22, true);
    box(s, 3.7, 6.2, 7.2, 0.7, { fill: 'EAF5EC', line: k.ZIN, lw: 1.25, r: 0.14 });
    txt(s, 'Le but : réutiliser les blocs du syllabus… et oser une chute amusante !', 3.7, 6.2, 7.2, 0.7, { size: 15, bold: true, color: k.OK, align: 'center' });
  }

  // ------------------------------------------------------------ 3 le parcours
  {
    const s = page(3, 'Stap voor stap : le parcours');
    banner(s, 'ALL', 'Le parcours');
    const cw = (11.2 - 3 * 0.22) / 4;
    SECTIONS.forEach((sc, i) => {
      const c = LV[sc.id]; const x = 1.7 + i * (cw + 0.22); const zz = nZin(sc);
      box(s, x, 1.45, cw, 4.15, { fill: c.fill, line: c.line, lw: 1.5, r: 0.1 });
      txt(s, `${i + 1}`, x + 0.2, 1.55, 0.6, 0.7, { size: 36, bold: true, color: c.line });
      txt(s, sc.label.split(' · ')[1], x + 0.2, 2.25, cw - 0.4, 0.45, { size: 17, bold: true, color: c.text });
      txt(s, sc.nl, x + 0.2, 2.68, cw - 0.4, 0.35, { size: 13, italic: true, color: k.GREY });
      photo(s, sc.ctx[0].img, x + 0.25, 3.15, cw - 0.5, { small: true, b: 0.04, blur: 5, off: 2 });
      txt(s, `${sc.ctx.length} productions`, x + 0.2, 4.6, cw - 0.4, 0.38, { size: 15, bold: true, color: k.INK });
      txt(s, `${zz.join(' · ')} phrases`, x + 0.2, 4.95, cw - 0.4, 0.32, { size: 13, color: k.GREY });
      txt(s, sc.pages, x + 0.2, 5.25, cw - 0.4, 0.3, { size: 10.5, italic: true, color: k.GREY });
    });
    box(s, 1.7, 5.85, 11.2, 0.95, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.12, shadow: true, so: 0.1 });
    d.icon(s, 'FaShoePrints', k.ZIN, 1.95, 6.1, 0.42);
    d.t(s, 'Chaque production reprend les **blocs** du syllabus (zinnenbouwer). On commence à **3 phrases**, on monte à **4**, puis à **5** pour la synthèse de chaque palier. La dernière phrase est toujours une **chute**.', 2.6, 5.88, 10.1, 0.9, { size: 14, color: k.INK, valign: 'middle' });
  }

  // ------------------------------------------------------------ 4 la grille
  {
    const s = page(4, 'Évaluer une production : la grille sur 10');
    banner(s, 'ALL', 'Évaluation');
    const R = [['Consignes', '4', 'toutes les consignes sont présentes (3, 4 ou 5 : on ramène sur 4 points)', k.ZIN], ['Correction', '3', 'zijn / hebben, le verbe en 2e place, de / het, niet / geen', '4A7BD0'],
      ['Vocabulaire', '1', 'les mots du syllabus, bien choisis', 'D9822B'], ['Cohérence', '1', 'les phrases racontent une même scène', '8E6CC8'], ['Chute', '1', 'une fin originale, de l’humour, une surprise', 'C2185B']];
    R.forEach(([h, pts, t, c], i) => {
      const y = 1.55 + i * 0.92;
      box(s, 1.7, y, 8.7, 0.78, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.12, shadow: true, so: 0.1 });
      box(s, 1.85, y + 0.15, 0.48, 0.48, { fill: c, r: 0.24 });
      txt(s, h, 2.5, y, 2.4, 0.78, { size: 17, bold: true, color: c });
      txt(s, t, 4.9, y, 4.4, 0.78, { size: 13.5, color: k.GREY });
      txt(s, `${pts} pt${pts === '1' ? '' : 's'}`, 9.35, y, 0.9, 0.78, { size: 17, bold: true, color: c, align: 'right' });
    });
    let q = 0;
    R.forEach(([, pts, , c]) => { for (let j = 0; j < Number(pts); j += 1) { box(s, 10.85, 1.55 + (9 - q) * 0.45, 0.8, 0.38, { fill: c, r: 0.08 }); q += 1; } });
    txt(s, '/ 10', 11.8, 5.35, 1.1, 0.6, { size: 28, bold: true, color: k.INK });
    txt(s, 'Débutant·es : on valorise ce qui est réussi. À l’oral, la prononciation remplace l’orthographe.', 1.7, 6.3, 8.9, 0.45, { size: 13.5, italic: true, color: k.GREY });
  }

  // ------------------------------------------------------------ les quatre sections du syllabus
  let g = 5; let num = 1;
  SECTIONS.forEach((sc) => {
    d.section(sc.name);
    // intercalaire : ce qu'on travaille + les vignettes de la section
    {
      const s = page(g, sc.name);
      banner(s, sc.id, sc.label);
      const c = LV[sc.id];
      box(s, 1.7, 1.5, 3.3, 5.35, { fill: c.fill, line: c.line, lw: 1.25, r: 0.12 });
      txt(s, 'Ce qu’on travaille', 1.9, 1.62, 3.0, 0.45, { size: 16, bold: true, color: c.text });
      d.t(s, sc.spec, 1.9, 2.1, 3.0, 4.1, { size: 12.5, color: k.INK, valign: 'top', bullet: true, gap: 5 });
      txt(s, sc.pages, 1.9, 6.3, 3.0, 0.4, { size: 11, italic: true, color: c.text });
      const n = sc.ctx.length; const cols = n > 12 ? 5 : 4; const gx = 0.15;
      const cw = (7.6 - (cols - 1) * gx) / cols; const rowH = cw / 1.6 + 0.42; const rows = Math.ceil(n / cols);
      const y0 = 1.55 + Math.max(0, (5.3 - rows * rowH) / 2);
      sc.ctx.forEach((cx, i) => {
        const x = 5.3 + (i % cols) * (cw + gx); const y = y0 + Math.floor(i / cols) * rowH;
        photo(s, cx.img, x, y, cw, { small: true, b: 0.04, blur: 5, off: 2 });
        txt(s, `${num + i} · ${cx.t}`, x - 0.03, y + cw / 1.6 + 0.07, cw + 0.06, 0.3, { size: cols === 5 ? 9.5 : 10.5, bold: true, valign: 'top' });
        d.icon(s, cx.mode === 'W' ? 'FaPenNib' : 'FaComments', cx.mode === 'W' ? '4A7BD0' : 'D9822B', x + cw - 0.24, y + 0.06, 0.17);
      });
      g += 1;
    }
    sc.ctx.forEach((c) => {
      k.context(g, c, { lv: sc.id, label: sc.label, num, start: 24 });
      g += 1; num += 1;
    });
  });

  // ------------------------------------------------------------ variantes
  d.section('Variantes');
  {
    const s = page(g, 'Six variantes pour débutant·es');
    banner(s, 'ALL', 'Variantes');
    const V = [['open-book', 'Syllabus ouvert, puis fermé', 'Première fois avec le zinnenbouwer ; deuxième fois sans, de mémoire.'], ['stopwatch', 'Plus vite !', 'On redit sa production en 60 s, puis en 45 s (couche 3 : fluidité).'], ['link', 'La chaîne', 'Une phrase chacun·e, à l’oral, autour de la table.'],
      ['detective', 'Devinez la consigne', 'On lit sa production ; la classe retrouve les consignes.'], ['up-arrow', 'Une marche de plus', 'Ajoutez une phrase : 3 → 4 → 5, ou une consigne du deck In vijf zinnen.'], ['trophy', 'La meilleure chute', 'Toutes les chutes au tableau ; la classe vote.']];
    const cw = (11.2 - 2 * 0.25) / 3; const ch = 2.4;
    V.forEach(([ic, h, t], i) => {
      const x = 1.7 + (i % 3) * (cw + 0.25); const y = 1.5 + Math.floor(i / 3) * (ch + 0.25);
      box(s, x, y, cw, ch, { fill: 'FFFFFF', line: 'E3E7EE', lw: 1, r: 0.12, shadow: true, so: 0.12 });
      d.ill(s, ic, x + 0.25, y + 0.25, 0.85, 0.85);
      txt(s, h, x + 1.25, y + 0.25, cw - 1.4, 0.85, { size: 17, bold: true, color: k.ZIN });
      txt(s, t, x + 0.25, y + 1.25, cw - 0.5, 1.0, { size: 14, color: k.GREY, valign: 'top' });
    });
  }
}

module.exports = { meta, build };
