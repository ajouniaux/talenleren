// Er, er, er… — Les cinq emplois de er (complément B1)
const { BORDER, plain, HEX, PURPLE } = require('../lib');

const meta = {
  n: 'E', slug: 'Er', title: 'Er zijn er vijf — Les emplois de er', short: 'Les emplois de er',
  template: 'er_emplois.md', file: 'Er_Les_cinq_emplois_de_er.pptx',
  docTitle: 'Er zijn er vijf — Les cinq emplois de er',
  foot: 'Néerlandais · B1 · Les emplois de er',
};

const INK = '17375E';
const hexOf = (c) => (c === 'purple' ? PURPLE : c === 'tx2' ? INK : HEX[c] || c);
// les cinq emplois : couleur, image, équivalent français, nom
const U = [
  { n: '①', c: 'accent2', ic: 'eyes', fr: 'il y a', name: 'er présentatif', ex: '{Er} is een probleem.', tr: 'il y a un problème' },
  { n: '②', c: 'accent3', ic: 'round-pushpin', fr: 'y · là', name: 'er de lieu', ex: 'Ik woon {er} al tien jaar.', tr: 'j’y habite depuis dix ans' },
  { n: '③', c: 'accent1', ic: 'input-numbers', fr: 'en', name: 'er + nombre', ex: 'Ik heb {er} twee.', tr: 'j’en ai deux' },
  { n: '④', c: 'purple', ic: 'link', fr: 'y · en (+ prép.)', name: 'er + préposition', ex: 'Ik denk {er}aan.', tr: 'j’y pense' },
  { n: '⑤', c: '0E7C86', ic: 'gear', fr: 'on', name: 'er + passif', ex: '{Er} wordt gebeld.', tr: 'on sonne' },
];

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  // bandes-phrases : n neutre · c verbe conjugué · 1…5 er (couleur de l'emploi) · x barré · e petit mot
  const ST = {
    n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
    c: { fill: 'tx2', line: null, color: 'bg1', bold: true },
    x: { fill: 'FFFFFF', line: 'accent5', lw: 1.25, dash: 'dash', color: 'accent5', bold: false },
    e: { fill: null, line: null, color: 'accent5', bold: true },
    d: { fill: 'accent6', line: null, color: 'bg1', bold: true },
  };
  U.forEach((u, i) => { ST[String(i + 1)] = { fill: u.c, line: null, color: 'bg1', bold: true }; });
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.66; const gap = o.gap ?? 0.09;
    let cx = x; const pos = [];
    parts.forEach(([t, ty]) => {
      const st = ST[ty || 'n'];
      const w = wOf(t, size) * (st.bold ? 1.12 : 1) + (st.bold ? 0.08 : 0);
      if (st.fill || st.line) d.rect(s, cx, y, w, h, { fill: st.fill || 'FFFFFF', line: st.line, lw: st.lw, dash: st.dash, radius: 0.1 });
      d.t(s, ty === 'x' ? `{{${t}}}` : t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      pos.push([cx, w, ty]);
      cx += w + gap;
    });
    strip.pos = pos;
    return cx - gap;
  };
  const rich = (s, segs, x, y, w, h, o = {}) => s.addText(segs.map(([text, so]) => ({ text, options: so })), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || 'tx1', align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true,
  });
  // exemple : {er} en couleur
  const pc = (str, size, c) => str.split(/(\{[^}]+\})/).filter(Boolean).map((t) => (t.startsWith('{')
    ? [t.slice(1, -1), { bold: true, italic: true, color: hexOf(c), fontSize: size }]
    : [t, { italic: true, fontSize: size }]));
  const card = (s, x, y, w, h, ic, ex, fr, c, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1, shadow: true });
    d.rect(s, x, y, 0.1, h, { fill: c, line: null, radius: 0 });
    const z = Math.min(0.85, h - 0.25);
    d.ill(s, ic, x + 0.22, y + (h - z) / 2, z, z);
    rich(s, pc(ex, o.size || 18, c), x + z + 0.4, y + 0.06, w - z - 0.5, h * 0.58);
    d.t(s, fr, x + z + 0.4, y + h * 0.6, w - z - 0.5, h * 0.36, { size: 13, italic: true, color: 'tx2', valign: 'middle' });
  };
  // pastille d'un emploi
  const badge = (s, i, x, y, z) => {
    d.oval(s, x, y, z, z, { fill: U[i].c });
    d.t(s, `**${i + 1}**`, x, y, z, z, { size: z * 26, color: 'bg1', align: 'center', valign: 'middle' });
  };
  // en-tête de diapo d'emploi : pastille + équivalent français
  const head = (s, i) => {
    const u = U[i];
    d.rect(s, 0.6, 1.6, 4.6, 4.5, { fill: u.c, tr: 88, line: u.c, lw: 1.5, radius: 0.12 });
    badge(s, i, 0.8, 1.78, 0.7);
    d.t(s, `**${u.name}**`, 1.65, 1.78, 3.4, 0.7, { size: 17, color: u.c, valign: 'middle' });
    d.ill(s, u.ic, 2.1, 2.7, 1.4, 1.4);
    d.t(s, `//er// = **${u.fr}**`, 0.8, 4.25, 4.2, 0.7, { size: 26, color: 'tx2', align: 'center', valign: 'middle' });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'COMPLÉMENT · B1', title: 'Er zijn er vijf', sub: 'Les cinq emplois de er', line: 'il y a · y · en · y / en · on',
    visual: (s) => {
      const cx = 10.0; const cy = 3.0;
      U.forEach((u, i) => {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5; const px = cx + 2.1 * Math.cos(a); const py = cy + 1.95 * Math.sin(a);
        d.line(s, cx, cy, px, py, { color: hexOf(u.c), lw: 3, arrow: false });
        d.rect(s, px - 0.85, py - 0.42, 1.7, 0.84, { fill: u.c, line: null, radius: 0.16 });
        d.t(s, `**${u.fr}**`, px - 0.85, py - 0.42, 1.7, 0.84, { size: u.fr.length > 8 ? 13 : 17, color: 'bg1', align: 'center', valign: 'middle' });
      });
      d.oval(s, cx - 0.85, cy - 0.6, 1.7, 1.2, { fill: 'FFFFFF' });
      d.t(s, 'er', cx - 0.85, cy - 0.6, 1.7, 1.2, { size: 40, bold: true, color: 'tx2', align: 'center', valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaEye', h: 'Reconnaître', t: 'Je reconnais les cinq emplois de er.', color: 'accent2' },
      { icon: 'FaExchangeAlt', h: 'Traduire', t: 'Je fais le lien avec il y a, y, en, on.', color: 'accent1' },
      { icon: 'FaComments', h: 'Utiliser', t: 'Je décris un lieu, je compte, je réponds sans répéter.', color: 'accent3' },
    ],
    band: 'Un petit mot, cinq rôles : er ne se traduit jamais mot à mot.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Un mot, cinq traductions ?' });
    const P = [['eyes', '{Er} is een probleem.'], ['round-pushpin', 'Brussel? Ik woon {er} al tien jaar.'], ['input-numbers', 'Collega’s? Ik heb {er} twaalf.'], ['thinking-face', 'De vergadering? Ik denk {er}aan.'], ['bell', '{Er} wordt gebeld!']];
    P.forEach(([ic, ex], i) => {
      const y = 1.6 + i * 0.97;
      d.rect(s, 0.6, y, 12.13, 0.85, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.ill(s, ic, 0.75, y + 0.1, 0.65, 0.65);
      rich(s, pc(ex, 21, 'accent6'), 1.6, y, 7.5, 0.85);
      d.flag(s, 'fr', 9.25, y + 0.28, 0.42);
      d.rect(s, 9.8, y + 0.14, 2.75, 0.57, { fill: 'FFFFFF', line: 'accent1', lw: 1.5, dash: 'dash', radius: 0.1 });
      d.t(s, '**er = ?**', 9.8, y + 0.14, 2.75, 0.57, { size: 17, color: 'accent1', align: 'center', valign: 'middle' });
    });
    d.t(s, 'Par deux : traduisez chaque phrase. Comment dit-on //er// en français ?', 0.6, 6.5, 12.13, 0.4, { size: 16, color: 'tx2', align: 'center' });
  }

  // ---------------------------------------------------------------- 4 la carte des 5 emplois (E1)
  {
    const s = d.page({ g: 4, tag: 'LA CARTE', title: 'Les cinq emplois de er' });
    const tw = (12.13 - 4 * 0.18) / 5;
    U.forEach((u, i) => {
      const x = 0.6 + i * (tw + 0.18);
      d.rect(s, x, 1.6, tw, 4.4, { fill: 'FFFFFF', line: u.c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, x, 1.6, tw, 0.5, { fill: u.c, line: null, radius: 0.12 });
      d.t(s, `**${i + 1} · ${u.name}**`, x, 1.6, tw, 0.5, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
      d.ill(s, u.ic, x + tw / 2 - 0.5, 2.25, 1.0, 1.0);
      d.t(s, `**${u.fr}**`, x + 0.05, 3.35, tw - 0.1, 0.6, { size: u.fr.length > 8 ? 17 : 22, color: u.c, align: 'center', valign: 'middle' });
      rich(s, pc(u.ex, 15, u.c), x + 0.12, 4.05, tw - 0.24, 1.1, { align: 'center' });
      d.t(s, u.tr, x + 0.1, 5.15, tw - 0.2, 0.7, { size: 12, italic: true, color: 'tx2', align: 'center', valign: 'middle' });
    });
    band(s, '//er// n’est **jamais accentué**. Il ne commence la phrase qu’en ① (//Er is…//) et en ⑤ (//Er wordt…//).', 6.15, 0.65, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 5 ① il y a
  d.section('Les cinq emplois');
  {
    const s = d.page({ g: 5, tag: 'EMPLOI 1 / 5', tagColor: U[0].c, title: 'Er is, er zijn… : il y a' });
    head(s, 0);
    d.t(s, '//er// + verbe + sujet **indéfini** (//een, geen, veel, twee, niemand…//)', 0.8, 5.0, 4.2, 0.95, { size: 14, color: 'tx2', valign: 'middle' });
    const R = [['warning', '{Er} is een probleem met de printer.', 'il y a un problème avec l’imprimante'], ['automobile', '{Er} zijn veel files vandaag.', 'il y a beaucoup d’embouteillages'], ['door', '{Er} staat een man voor de deur.', 'il y a un homme devant la porte (debout)'], ['envelope', '{Er} ligt een brief op je bureau.', 'il y a une lettre sur ton bureau'], ['busts-in-silhouette', '{Er} werkt hier niemand.', 'personne ne travaille ici']];
    const rh = (4.5 - 0.1 * 4) / 5;
    R.forEach(([ic, ex, fr], j) => card(s, 5.45, 1.6 + j * (rh + 0.1), 7.28, rh, ic, ex, fr, U[0].c, { size: 18 }));
    d.t(s, 'Comme au M17 : //er staat, er ligt, er zit, er hangt// = il y a (avec la position).', 0.6, 6.3, 12.13, 0.45, { size: 15, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 6 piège : sujet défini
  {
    const s = d.page({ g: 6, tag: 'PIÈGE', title: 'Un sujet défini ? Pas de er !' });
    const W = (12.13 - 0.3) / 2;
    [['SUJET INDÉFINI → er', U[0].c, 'EAF2FB', [[[['Er', '1'], ['ligt', 'c'], ['een brief', 'n'], ['op je bureau.', 'n']], 'il y a une lettre sur ton bureau'], [[['Is', 'c'], ['er', '1'], ['nog', 'n'], ['koffie?', 'n']], 'il y a encore du café ?']]],
      ['SUJET DÉFINI → pas de er', 'accent5', 'E6EBF2', [[[['De brief', 'n'], ['ligt', 'c'], ['op je bureau.', 'n']], 'la lettre est sur ton bureau'], [[['De koffie', 'n'], ['staat', 'c'], ['in de keuken.', 'n']], 'le café est dans la cuisine']]]].forEach(([h, c, bg, L], j) => {
      const x = 0.6 + j * (W + 0.3);
      d.rect(s, x, 1.6, W, 3.5, { fill: bg, line: c, lw: 2, radius: 0.12 });
      d.t(s, `**${h}**`, x + 0.2, 1.7, W - 0.4, 0.5, { size: 18, color: c, valign: 'middle' });
      L.forEach(([parts, fr], i) => {
        const y = 2.4 + i * 1.3;
        strip(s, x + 0.25, y, parts, { size: 19, h: 0.6 });
        d.t(s, fr, x + 0.25, y + 0.65, W - 0.5, 0.4, { size: 13, italic: true, color: 'tx2' });
      });
    });
    const e = strip(s, 0.6, 5.35, [['Er ligt de brief op je bureau.', 'x']], { size: 20, h: 0.62 });
    d.t(s, '✗', e + 0.1, 5.35, 0.5, 0.62, { size: 26, bold: true, color: 'accent6', valign: 'middle' });
    d.t(s, '« il y a » + //le, la// ne se traduit pas avec //er// : le sujet passe en tête.', e + 0.7, 5.35, 12.73 - e - 0.7, 0.62, { size: 15, color: 'tx2', valign: 'middle' });
    band(s, 'Questions : //Is er nog koffie? · Zijn er vragen?// — //er// après le verbe.', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 7 ② lieu
  {
    const s = d.page({ g: 7, tag: 'EMPLOI 2 / 5', tagColor: U[1].c, title: 'Er = y, là : le lieu' });
    head(s, 1);
    d.t(s, '//er// remplace un lieu déjà nommé (= //daar//, sans accent)', 0.8, 5.0, 4.2, 0.95, { size: 14, color: 'tx2', valign: 'middle' });
    const R = [['world-map', 'Woon je in Brussel? — Ja, ik woon {er} al tien jaar.', 'oui, j’y habite depuis dix ans'], ['bicycle', 'Ben je al in Brugge geweest? — Ja, ik ben {er} vorig jaar geweest.', 'oui, j’y suis allé·e l’an dernier'], ['office-building', 'Werk je bij Koopzo? — Ja, ik werk {er} sinds mei.', 'oui, j’y travaille depuis mai'], ['bus', 'Hoe ga je naar het werk? — Ik ga {er} met de bus naartoe.', 'j’y vais en bus']];
    const rh = (4.5 - 0.1 * 3) / 4;
    R.forEach(([ic, ex, fr], j) => card(s, 5.45, 1.6 + j * (rh + 0.1), 7.28, rh, ic, ex, fr, U[1].c, { size: 16 }));
    d.t(s, 'Insister ? //**Daar** woon ik!// — //daar// est accentué et peut commencer la phrase (diapo 12).', 0.6, 6.3, 12.13, 0.45, { size: 15, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 8 ③ quantité
  {
    const s = d.page({ g: 8, tag: 'EMPLOI 3 / 5', tagColor: U[2].c, title: 'Er + nombre = en' });
    head(s, 2);
    d.t(s, '//er// + nombre ou quantité (//twee, veel, weinig, een paar, geen…//)', 0.8, 5.0, 4.2, 0.95, { size: 14, color: 'tx2', valign: 'middle' });
    const R = [['teddy-bear', 'Hoeveel kinderen heb je? — Ik heb {er} twee.', 'j’en ai deux'], ['pen', 'Heb je een pen voor mij? — Nee, ik heb {er} geen.', 'non, je n’en ai pas'], ['busts-in-silhouette', 'Heb je veel collega’s? — Ja, ik heb {er} veel.', 'oui, j’en ai beaucoup'], ['laptop', 'Hoeveel laptops hebben we nog? — We hebben {er} nog drie.', 'il nous en reste trois']];
    const rh = (4.5 - 0.1 * 3) / 4;
    R.forEach(([ic, ex, fr], j) => card(s, 5.45, 1.6 + j * (rh + 0.1), 7.28, rh, ic, ex, fr, U[2].c, { size: 16 }));
    d.t(s, 'Piège : //Heb je **de** pen? — Ja, ik heb **hem**.// (le) ≠ //Heb je **een** pen? — Ja, ik heb **er** een.// (en)', 0.6, 6.3, 12.13, 0.45, { size: 15, color: 'accent6', align: 'center' });
  }

  // ---------------------------------------------------------------- 9 ④ + préposition
  {
    const s = d.page({ g: 9, tag: 'EMPLOI 4 / 5', tagColor: U[3].c, title: 'Er + préposition : Ik denk eraan' });
    head(s, 3);
    d.t(s, 'une chose + préposition → //er// + préposition (M23)', 0.8, 5.0, 4.2, 0.95, { size: 14, color: 'tx2', valign: 'middle' });
    const R = [['thinking-face', 'Denk je aan de vergadering? — Ja, ik denk {er}aan.', 'oui, j’y pense'], ['speech-balloon', 'Wat vind je {er}van?', 'qu’en penses-tu ?'], ['face-with-tears-of-joy', 'Uit eten gaan? Ik heb {er} echt zin in!', 'j’en ai vraiment envie'], ['calendar', 'De vakantie? Ik kijk {er}naar uit.', 'je l’attends avec impatience']];
    const rh = (4.5 - 0.1 * 3) / 4;
    R.forEach(([ic, ex, fr], j) => card(s, 5.45, 1.6 + j * (rh + 0.1), 7.28, rh, ic, ex, fr, U[3].c, { size: 17 }));
    d.t(s, '//er// et la préposition se séparent souvent : //Ik heb **er** echt zin **in**. · Ik denk **er** niet **aan**.//', 0.6, 6.3, 12.13, 0.45, { size: 15, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 10 ⑤ passif impersonnel
  {
    const s = d.page({ g: 10, tag: 'EMPLOI 5 / 5', tagColor: U[4].c, title: 'Er wordt… : on' });
    head(s, 4);
    d.t(s, '//er wordt// + participe passé, sans sujet : une action sans acteur précis', 0.8, 5.0, 4.2, 0.95, { size: 14, color: 'tx2', valign: 'middle' });
    const R = [['bell', '{Er} wordt gebeld.', 'on sonne'], ['no-smoking', '{Er} wordt hier niet gerookt.', 'on ne fume pas ici'], ['face-with-tears-of-joy', '{Er} wordt veel gelachen in ons team.', 'on rit beaucoup dans notre équipe'], ['building-construction', '{Er} wordt nog gewerkt aan de lift.', 'on travaille encore à l’ascenseur']];
    const rh = (4.5 - 0.1 * 3) / 4;
    R.forEach(([ic, ex, fr], j) => card(s, 5.45, 1.6 + j * (rh + 0.1), 7.28, rh, ic, ex, fr, U[4].c, { size: 18 }));
    d.t(s, 'C’est une forme du **passif** (//worden// + participe) : à reconnaître d’abord, à utiliser dans des formules.', 0.6, 6.3, 12.13, 0.45, { size: 15, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 11 où placer er (E2)
  d.section('Placer et distinguer');
  {
    const s = d.page({ g: 11, tag: 'LA PLACE', title: 'Où placer er ?' });
    const R = [['après le verbe conjugué', [['Ik', 'n'], ['woon', 'c'], ['er', '2'], ['al tien jaar.', 'n']]], ['inversion : après le sujet', [['Gisteren', 'n'], ['ben', 'c'], ['ik', 'n'], ['er', '2'], ['geweest.', 'n']]], ['subordonnée : après le sujet', [['…, omdat', 'n'], ['ik', 'n'], ['er', '2'], ['al tien jaar', 'n'], ['woon.', 'c']]], ['question : après le sujet (ou le verbe)', [['Ben', 'c'], ['je', 'n'], ['er', '2'], ['al', 'n'], ['geweest?', 'n']]]];
    R.forEach(([lab, parts], i) => {
      const y = 1.65 + i * 1.08;
      d.t(s, `**${lab}**`, 0.6, y, 3.6, 0.7, { size: 15, color: 'tx2', valign: 'middle' });
      strip(s, 4.3, y, parts, { size: 22, h: 0.7 });
    });
    band(s, '//er// se place **tôt** dans la phrase : juste après le verbe conjugué, ou après le sujet s’il vient derrière le verbe. Les compléments (//al tien jaar, gisteren//) suivent.', 6.0, 0.8, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 12 er ou daar
  {
    const s = d.page({ g: 12, tag: 'ER OU DAAR ?', title: 'Er ou daar ?' });
    const W = (12.13 - 0.3) / 2;
    [['er', 'pas d’accent, jamais en tête (sauf ① et ⑤)', U[1].c, [['Ik woon', 'n'], ['er', '2'], ['al tien jaar.', 'n']], [['Ik denk', 'n'], ['er', '4'], ['niet', 'n'], ['aan.', 'n']]],
      ['DAAR', 'accentué : on insiste, on montre ; peut commencer la phrase', 'accent6', [['DAAR', 'd'], ['woon', 'c'], ['ik!', 'n']], [['DAAR', 'd'], ['denk', 'c'], ['ik', 'n'], ['niet', 'n'], ['aan!', 'n']]]].forEach(([h, sub, c, a, b], j) => {
      const x = 0.6 + j * (W + 0.3);
      d.rect(s, x, 1.6, W, 4.3, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.t(s, `**${h}**`, x + 0.2, 1.7, W - 0.4, 0.7, { size: 30, color: c, valign: 'middle', head: true });
      d.t(s, sub, x + 0.2, 2.4, W - 0.4, 0.6, { size: 14, italic: true, color: 'tx2', valign: 'middle' });
      strip(s, x + 0.3, 3.2, a, { size: 21, h: 0.66 });
      strip(s, x + 0.3, 4.3, b, { size: 21, h: 0.66 });
      if (j) d.ill(s, 'backhand-index-pointing-right', x + W - 1.05, 1.7, 0.8, 0.8);
    });
    band(s, 'En français aussi : //j’**y** habite// (neutre) ≠ //c’est **là** que j’habite !// (on insiste).', 6.1, 0.65, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 13 er zijn er drie (miroir)
  {
    const s = d.page({ g: 13, tag: 'B1+', tagColor: 'purple', title: 'Deux er dans une phrase : Er zijn er drie' });
    d.t(s, '//Hoeveel vergaderzalen zijn er?// — combien de salles de réunion y a-t-il ?', 0.6, 1.6, 12.13, 0.45, { size: 17, color: 'tx2' });
    d.flag(s, 'nl', 0.6, 2.55, 0.55);
    strip(s, 1.35, 2.4, [['Er', '1'], ['zijn', 'c'], ['er', '3'], ['drie.', 'n']], { size: 30, h: 0.9 });
    const N = strip.pos;
    d.flag(s, 'fr', 0.6, 4.5, 0.55);
    strip(s, 1.35, 4.35, [['Il', 'n'], ['y', '1'], ['en', '3'], ['a', 'c'], ['trois.', 'n']], { size: 30, h: 0.9 });
    const F = strip.pos;
    d.line(s, N[0][0] + N[0][1] / 2, 3.35, F[1][0] + F[1][1] / 2, 4.3, { color: hexOf(U[0].c), lw: 3, arrow: false });
    d.line(s, N[2][0] + N[2][1] / 2, 3.35, F[2][0] + F[2][1] / 2, 4.3, { color: hexOf(U[2].c), lw: 3, arrow: false });
    d.rect(s, 7.6, 2.3, 5.13, 3.0, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.t(s, ['**① //Er// zijn…** = il y a', '**③ …//er// drie** = en … trois', '', '//Is er een lift? — Ja, er is er een.//', '//Zijn er nog stoelen? — Nee, er zijn er geen meer.//'], 7.8, 2.4, 4.8, 2.8, { size: 16, gap: 4, valign: 'middle' });
    band(s, 'Le français a deux petits mots (//y// + //en//) ; le néerlandais en a deux aussi : //er// + //er// !', 5.75, 0.7, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 14 l'aiguillage (E3)
  {
    const s = d.page({ g: 14, tag: 'MÉTHODE', title: 'Quel er ? L’aiguillage' });
    const Q = [['Un nombre ou une quantité près de er ?', 2, 'Ik heb er **twee**.'], ['Une préposition collée ou au bout ?', 3, 'Ik denk er**aan**. · Ik heb er zin **in**.'], ['//er wordt// + participe ?', 4, 'Er **wordt** gebeld.'], ['Un sujet indéfini (//een, geen, veel…//) ?', 0, 'Er is **een** probleem.'], ['Il remplace un lieu ?', 1, 'Brussel? Ik woon **er**.']];
    Q.forEach(([q, i, ex], k) => {
      const y = 1.6 + k * 0.98;
      d.rect(s, 0.6, y, 6.0, 0.82, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.t(s, `**${k + 1}.**  ${q}`, 0.8, y, 5.7, 0.82, { size: 16, valign: 'middle' });
      d.t(s, 'oui →', 6.65, y, 0.9, 0.82, { size: 15, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
      badge(s, i, 7.6, y + 0.11, 0.6);
      d.t(s, `**${U[i].fr}**`, 8.3, y, 1.7, 0.82, { size: 16, color: U[i].c, valign: 'middle' });
      d.t(s, `//${ex}//`, 10.0, y, 2.73, 0.82, { size: 14, valign: 'middle' });
      if (k < Q.length - 1) d.t(s, 'non ↓', 0.6, y + 0.8, 1.2, 0.2, { size: 10, color: 'accent6', bold: true });
    });
    d.t(s, 'Posez les questions dans cet ordre : la première réponse « oui » donne l’emploi.', 0.6, 6.55, 12.13, 0.35, { size: 15, color: 'tx2', align: 'center' });
  }

  // ---------------------------------------------------------------- 15 à retenir
  {
    const s = d.page({ g: 15, tag: 'À RETENIR', title: 'À retenir : les cinq emplois de er' });
    const tw = (12.13 - 4 * 0.18) / 5;
    const R = ['er + verbe + sujet indéfini', 'remplace un lieu', 'avec un nombre, une quantité', 'chose + préposition (M23)', 'er wordt + participe'];
    U.forEach((u, i) => {
      const x = 0.6 + i * (tw + 0.18);
      d.rect(s, x, 1.6, tw, 3.4, { fill: 'FFFFFF', line: u.c, lw: 2, radius: 0.12, shadow: true });
      badge(s, i, x + tw / 2 - 0.3, 1.72, 0.6);
      d.t(s, `**${u.fr}**`, x + 0.05, 2.4, tw - 0.1, 0.55, { size: u.fr.length > 8 ? 16 : 22, color: u.c, align: 'center', valign: 'middle' });
      d.t(s, R[i], x + 0.1, 2.95, tw - 0.2, 0.7, { size: 13, color: 'tx2', align: 'center', valign: 'middle' });
      rich(s, pc(u.ex, 15, u.c), x + 0.1, 3.7, tw - 0.2, 1.1, { align: 'center' });
    });
    d.rect(s, 0.6, 5.2, 12.13, 1.55, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.t(s, ['**Place** : juste après le verbe conjugué (ou après le sujet inversé) : //Ik woon er al tien jaar. · Gisteren ben ik er geweest.//', '**Er ou daar ?** //er// sans accent, //daar// pour insister. · **Deux er** : //Er zijn er drie.// = il y en a trois.'], 0.85, 5.25, 11.7, 1.45, { size: 15, gap: 6, valign: 'middle' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 16 divider
  d.divider({ g: 16, tiles: [
    ['Quel er ?', '★', 'FaFilter'], ['Répondez avec er', '★★', 'FaComments'], ['Er of daar?', '★★', 'FaExchangeAlt'], ['Le détective', '★★', 'FaSearch'],
    ['Qu’y a-t-il dans le bureau ?', '★★', 'FaEye'], ['La visite du nouveau bureau', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 17 ex1 quel er
  const ex1 = [['Er staan drie fietsen voor de deur.', 1], ['Ik heb er geen zin in.', 4], ['Ken je Gent? — Ja, ik woon er.', 2], ['Hoeveel broers heb je? — Ik heb er twee.', 3], ['Er wordt hier niet gerookt.', 5], ['Is er nog melk?', 1], ['Wat vind je ervan?', 4], ['Brugge? Ik ga er morgen naartoe.', 2], ['Heb je een fiets? — Ik heb er twee!', 3], ['Er wordt gebeld.', 5]];
  d.ex({ g: 17, title: 'Exercice 1 — Quel er ?', stars: '★', instr: 'Quel emploi de //er// ? Donnez le numéro (1 à 5) et la traduction.' }, (s, mode, top) => {
    const rh = (6.45 - top) / 5; const cw = (12.13 - 0.3) / 2;
    ex1.forEach(([t, u], i) => {
      const x = 0.6 + Math.floor(i / 5) * (cw + 0.3); const y = top + (i % 5) * rh;
      d.rect(s, x, y + 0.04, cw, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.t(s, `**${i + 1}**  //${t.replace(/\ber/g, '**er**').replace(/\bEr\b/g, '**Er**')}//`, x + 0.15, y + 0.04, cw - 1.05, rh - 0.1, { size: 17, valign: 'middle' });
      if (mode === 'q') { d.rect(s, x + cw - 0.8, y + (rh - 0.56) / 2, 0.56, 0.56, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, dash: 'dash', radius: 0.28 }); }
      else badge(s, u - 1, x + cw - 0.8, y + (rh - 0.56) / 2, 0.56);
    });
    if (mode === 'a') d.t(s, '① il y a · ② y · ③ en · ④ y / en + préposition · ⑤ on', 0.6, 6.48, 12.13, 0.36, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 18 ex2 répondez avec er
  const ex2 = [['teddy-bear', 'Hoeveel kinderen heb je?', '2', 'Ik heb [[er twee]].'], ['round-pushpin', 'Ben je al in Brugge geweest?', 'ja, vorig jaar', 'Ja, ik ben [[er vorig jaar]] geweest.'], ['pen', 'Heb je een pen voor mij?', 'nee', 'Nee, ik heb [[er geen]].'],
    ['thinking-face', 'Denk je aan de vergadering?', 'ja', 'Ja, ik denk [[eraan]].'], ['office-building', 'Werk je al lang in Gent?', '5 jaar', 'Ik werk [[er al vijf jaar]].'], ['busts-in-silhouette', 'Hoeveel collega’s heb je?', 'veel', 'Ik heb [[er veel]].']];
  d.ex({ g: 18, title: 'Exercice 2 — Répondez avec er', stars: '★★', instr: 'Répondez sans répéter le mot : utilisez //er//.' }, (s, mode, top) => {
    const rh = (6.5 - top) / 3; const cw = (12.13 - 0.3) / 2;
    ex2.forEach(([ic, q, hint, a], i) => {
      const x = 0.6 + Math.floor(i / 3) * (cw + 0.3); const y = top + (i % 3) * rh;
      d.rect(s, x, y + 0.05, cw, rh - 0.14, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.15, y + 0.2, rh - 0.45, rh - 0.45);
      const tx = x + rh - 0.1;
      d.t(s, `**${i + 1}**  //${q}//  (${hint})`, tx, y + 0.12, cw - (tx - x) - 0.1, (rh - 0.2) * 0.42, { size: 15, valign: 'middle', color: 'tx2' });
      d.t(s, `//${a}//`, tx, y + 0.12 + (rh - 0.2) * 0.42, cw - (tx - x) - 0.1, (rh - 0.2) * 0.55, { size: 18, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 4 : aussi //Ja, daar denk ik aan.// (on insiste). N° 2 : aussi //Ja, ik ben er al geweest.//', 0.6, 6.5, 12.13, 0.36, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 19 ex3 er of daar
  const ex3 = ['Ken je Gent? — Ja, ik woon [[er]].', '[[Daar]] woon ik! (en montrant la maison)', 'Hoeveel boeken heb je? — Ik heb [[er]] tien.', '[[Er]] is niemand thuis.', 'Is [[er]] nog koffie?', 'Ik heb [[er]] geen zin in.', '[[Daar]] heb ik echt geen zin in!', '[[Er]] wordt gebeld.'];
  d.ex({ g: 19, title: 'Exercice 3 — Er of daar?', stars: '★★', instr: 'Complétez avec //er// ou //daar// (en tête de phrase ou pour insister : //daar//).' }, (s, mode, top) => {
    d.list(s, ex3.map((e) => `//${e}//`), mode, { y: top + 0.15, w: 12.13, h: 4.4, cols: 2, size: 20, gap: 20 });
    if (mode === 'a') d.t(s, 'N° 4 et 8 : //er// en tête, mais seulement pour « il y a » (①) et le passif (⑤).', 0.6, 6.4, 12.13, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 20 ex4 détective
  d.ex({ g: 20, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Tom décrit le nouveau bureau. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'E7F6EC', line: 'accent3', lw: 1.25, radius: 0.12, shadow: true });
    d.ill(s, 'mobile-phone', 0.75, top + 0.1, 0.5, 0.5);
    d.t(s, '**Tom** · vandaag 17:45', 1.35, top + 0.1, 6, 0.5, { size: 14, color: 'accent3', valign: 'middle' });
    const txt = ['//Hoi Sofie! Ik heb het nieuwe kantoor gezien: ik ben {{geweest er gisteren}}++ er gisteren geweest++. {{Het is}}++ Er is++ een grote keuken en {{er staat de koffiemachine}}++ de koffiemachine staat++ naast het raam. Vergaderzalen? We hebben {{drie}}++ er drie++! Er wordt nog gewerkt aan de lift, dus de verhuizing is pas in mei. Ik kijk {{uit naar het}}++ ernaar uit++! Groetjes, Tom//'];
    d.t(s, txt, 0.95, top + 0.75, 8.4, h - 0.9, { size: 19, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Correct : //Er wordt nog gewerkt aan de lift// (⑤). Erreurs : place ②, « il y a » ①, sujet défini, quantité ③, préposition ④.', 9.9, top + 3.05, 2.83, 2.4, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 21 ex5 qu'y a-t-il dans le bureau
  {
    const s = d.page({ g: 21, tag: 'JIJ NU !', title: 'Exercice 5 — Qu’y a-t-il dans le bureau ?', stars: '★★' });
    d.t(s, 'Par deux : A ne regarde pas l’image et pose des questions ; B regarde et répond avec //er//. Puis on inverse.', 0.6, 1.55, 12.13, 0.45, { size: 17, color: 'tx2' });
    d.rect(s, 0.6, 2.1, 7.2, 4.65, { fill: 'FDF6E3', line: 'accent5', lw: 1.25, radius: 0.12 });
    const O = [['chair', 4], ['laptop', 3], ['potted-plant', 2], ['printer', 1], ['books', 5], ['hot-beverage', 2], ['door', 1], ['clipboard', 3]];
    O.forEach(([ic, n], i) => {
      const x = 0.8 + (i % 4) * 1.75; const y = 2.25 + Math.floor(i / 4) * 2.25;
      d.rect(s, x, y, 1.6, 2.05, { fill: 'FFFFFF', line: null, radius: 0.1 });
      const z = n > 2 ? 0.42 : 0.6;
      for (let k = 0; k < n; k += 1) d.ill(s, ic, x + 0.12 + (k % 3) * (z + 0.06), y + 0.15 + Math.floor(k / 3) * (z + 0.06), z, z);
      d.t(s, `**${n}**`, x, y + 1.45, 1.6, 0.5, { size: 20, color: 'accent1', align: 'center', valign: 'middle' });
    });
    d.rect(s, 8.05, 2.1, 4.68, 4.65, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.t(s, ['**A** demande :', '//Is er een printer?//', '//Hoeveel stoelen zijn er?//', '//Staan er planten?//', '//Is er een koffiemachine?//', '', '**B** répond :', '//Ja, er is er een.//', '//Er zijn er vier.//', '//Ja, er staan er twee.//', '//Nee, er is er geen.//'], 8.25, 2.2, 4.3, 4.45, { size: 16, gap: 2, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 22 ex6 visite du nouveau bureau
  d.roleplay({
    g: 22, title: 'Exercice 6 — La visite du nouveau bureau',
    scenario: 'Peeters & Co déménage. A (facility manager) fait visiter ; B (collègue) pose des questions. Objectif : 8 er.',
    a: ['**A — facility manager**', 'Présentez le bâtiment avec la fiche : ce qu’il y a, combien, ce qui manque encore.'],
    b: ['**B — collègue**', 'Posez des questions (Is er… ? Hoeveel … zijn er ?) et réagissez (Wat vind je ervan?).'],
    bank: '//Is er …? · Zijn er …? · Hoeveel … zijn er? — Er zijn er … · Er is er geen. · Ik ben er al geweest. · Hoe ga je ernaartoe? · Wat vind je ervan? · Er wordt nog gewerkt aan … · Ik kijk ernaar uit!//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.6, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'NIEUW KANTOOR · FICHE', x + 0.15, y, w - 0.3, 0.6, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const L = [['busts-in-silhouette', '2 vergaderzalen'], ['fork-and-knife-with-plate', '1 keuken, 1 refter'], ['laptop', '40 bureaus'], ['p-button', 'parking: 15 plaatsen'], ['elevator', 'lift: nog niet klaar'], ['bus', 'bushalte: 200 m']];
      L.forEach(([ic, t], i) => {
        const yy = y + 0.78 + i * 0.72;
        d.ill(s, ic, x + 0.2, yy, 0.5, 0.5);
        d.t(s, `//${t}//`, x + 0.85, yy - 0.05, w - 1.0, 0.6, { size: 14, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 23 ticket
  d.ticket({
    g: 23,
    q: ['En néerlandais : //Il y a un problème.//', 'Répondez avec //er// : //Hoeveel kinderen heb je?// (2)', 'Quel emploi ? //Ik denk eraan.//'],
    self: ['Reconnaître', 'Traduire', 'Utiliser'],
    teaser: { icon: 'FaBook', text: '**Défi de la semaine** : décrivez votre bureau ou votre salon en 6 phrases avec //er// (//Er staat… · Er zijn er…//).' },
  });
}

module.exports = { meta, build };
