// Module 31 — De keuken in! · La postposition de direction (het achterzetsel)
const { BORDER, plain } = require('../lib');
const { floorPlan, route, ALL } = require('../plan');

const meta = { n: 31, slug: 'De_keuken_in', title: 'De keuken in! — La postposition de direction', short: 'De keuken in!', template: 'module_31_achterzetsels.md' };

const LI = 'accent2'; // lieu (voorzetsel) = bleu  ^^…^^
const DI = 'accent1'; // direction (achterzetsel) = orange  ##…##
const OM = 'accent4'; // omzetsel = framboise  %%…%%
const VB = 'accent6'; // verbe = rouge  !!…!!

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.72; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: VB, lw: 2.5, color: VB, bold: true },
        v2: { fill: 'FFFFFF', line: VB, lw: 2, dash: 'dash', color: VB, bold: true },
        a: { fill: DI, line: null, color: 'bg1', bold: true },
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
  const arrow = (s, x1, y1, x2, y2, c = DI, lw = 3.5) => d.line(s, x1, y1, x2, y2, { color: c, lw });
  const seg = (s, x1, y1, x2, y2, c = DI, lw = 3.5) => d.line(s, x1, y1, x2, y2, { color: c, lw, arrow: false });

  // une pièce vue du dessus, porte à gauche ; mode 'lieu' (point bleu) ou 'dir' (flèche orange)
  const scene = (s, x, y, w, h, mode, o = {}) => {
    const rx = x + w * 0.36; const rw = w * 0.6; const ry = y + h * 0.08; const rh = h * 0.84;
    const park = o.kind === 'park';
    d.rect(s, rx, ry, rw, rh, { fill: park ? 'DCEFD9' : 'FFFFFF', line: park ? 'accent3' : 'tx2', lw: 2.5, radius: park ? 0.2 : 0 });
    d.rect(s, rx - 0.06, ry + rh * 0.38, 0.12, rh * 0.24, { fill: o.bg || 'FFFFFF', line: null, radius: 0 });
    if (park) {
      d.ill(s, 'deciduous-tree', rx + rw - 0.55, ry + 0.08, 0.45, 0.45);
      d.ill(s, 'evergreen-tree', rx + rw - 0.5, ry + rh - 0.55, 0.42, 0.42);
    } else if (o.room) {
      d.ill(s, o.room, rx + rw - 0.5, ry + 0.08, 0.42, 0.42);
    }
    if (o.label) d.t(s, o.label, rx + 0.1, ry + 0.04, rw - 0.6, 0.34, { size: 12, italic: true, color: 'accent5' });
    const ps = Math.min(0.75, h * 0.42);
    if (mode === 'lieu') {
      d.ill(s, o.person || 'person-standing', rx + rw * 0.38 - ps / 2, ry + rh / 2 - ps / 2, ps, ps);
      d.oval(s, rx + rw * 0.38 - 0.11, ry + rh / 2 + ps / 2 - 0.02, 0.22, 0.22, { fill: LI });
      if (o.loop) d.oval(s, rx + rw * 0.12, ry + rh * 0.12, rw * 0.55, rh * 0.76, { fill: null, line: LI, lw: 1.75, dash: 'dash' });
    } else {
      d.ill(s, o.person || 'person-standing', x + 0.02, ry + rh / 2 - ps / 2 - 0.1, ps, ps);
      arrow(s, x + ps * 0.85, ry + rh / 2 + 0.12, rx + rw * 0.45, ry + rh / 2 + 0.12, DI, 4);
    }
  };

  // pictogrammes des achterzetsels (carré de côté z)
  const picto = (s, k, x, y, z, c = DI) => {
    const cy = y + z / 2;
    const room = (rx, ry, rw, rh) => {
      d.rect(s, rx, ry, rw, rh, { fill: 'FFFFFF', line: 'tx2', lw: 2, radius: 0 });
      d.rect(s, rx - 0.04, ry + rh * 0.33, 0.08, rh * 0.34, { fill: 'FFFFFF', line: null, radius: 0 });
    };
    const stairs = (up) => {
      for (let i = 0; i < 4; i++) {
        const sx = x + z * (0.1 + i * 0.2); const sh = z * 0.15 * (up ? i + 1 : 4 - i);
        d.rect(s, sx, y + z * 0.9 - sh, z * 0.2, sh, { fill: 'D5DCE6', line: 'accent5', lw: 0.75, radius: 0 });
      }
    };
    if (k === 'in' || k === 'uit') {
      room(x + z * 0.45, y + z * 0.2, z * 0.48, z * 0.6);
      if (k === 'in') arrow(s, x + z * 0.05, cy, x + z * 0.72, cy, c);
      else arrow(s, x + z * 0.72, cy, x + z * 0.05, cy, c);
    } else if (k === 'op' || k === 'af') {
      stairs(k === 'op');
      if (k === 'op') arrow(s, x + z * 0.08, y + z * 0.62, x + z * 0.88, y + z * 0.08, c);
      else arrow(s, x + z * 0.12, y + z * 0.08, x + z * 0.92, y + z * 0.62, c);
    } else if (k === 'over') {
      d.rect(s, x + z * 0.05, y + z * 0.25, z * 0.9, z * 0.5, { fill: 'DCEFD9', line: null, radius: 0 });
      d.rect(s, x + z * 0.38, y + z * 0.25, z * 0.24, z * 0.5, { fill: '7FB8E6', line: null, radius: 0 });
      arrow(s, x + z * 0.12, cy, x + z * 0.88, cy, c);
    } else if (k === 'door') {
      d.rect(s, x + z * 0.3, y + z * 0.3, z * 0.4, z * 0.4, { fill: '4A5A70', line: null, radius: 0.12 });
      d.rect(s, x + z * 0.36, y + z * 0.38, z * 0.28, z * 0.24, { fill: '1B2333', line: null, radius: 0.08 });
      arrow(s, x + z * 0.04, cy, x + z * 0.96, cy, c);
    } else if (k === 'om') {
      d.rect(s, x + z * 0.08, y + z * 0.45, z * 0.45, z * 0.47, { fill: 'D5DCE6', line: 'accent5', lw: 1, radius: 0 });
      seg(s, x + z * 0.06, y + z * 0.3, x + z * 0.72, y + z * 0.3, c);
      arrow(s, x + z * 0.72, y + z * 0.29, x + z * 0.72, y + z * 0.94, c);
    } else if (k === 'langs') {
      for (let i = 0; i < 3; i++) d.rect(s, x + z * (0.1 + i * 0.29), y + z * 0.12, z * 0.22, z * 0.32, { fill: 'FFFFFF', line: 'tx2', lw: 1.5, radius: 0 });
      arrow(s, x + z * 0.05, y + z * 0.66, x + z * 0.95, y + z * 0.66, c);
    } else if (k === 'voorbij') {
      d.ill(s, 'station', x + z * 0.3, y + z * 0.05, z * 0.4, z * 0.4);
      seg(s, x + z * 0.05, y + z * 0.66, x + z * 0.5, y + z * 0.66, c);
      arrow(s, x + z * 0.5, y + z * 0.66, x + z * 0.97, y + z * 0.66, c);
      d.line(s, x + z * 0.7, y + z * 0.5, x + z * 0.7, y + z * 0.82, { color: 'accent5', lw: 1, arrow: false, dash: 'dash' });
    } else if (k === 'binnen') {
      d.ill(s, 'door', x + z * 0.52, y + z * 0.12, z * 0.42, z * 0.62);
      d.rect(s, x + z * 0.5, y + z * 0.78, z * 0.46, z * 0.08, { fill: 'accent1', tr: 40, line: null, radius: 0.02 });
      arrow(s, x + z * 0.04, y + z * 0.5, x + z * 0.62, y + z * 0.5, c);
    } else if (k === 'naar') {
      d.ill(s, 'door', x + z * 0.6, y + z * 0.15, z * 0.35, z * 0.6);
      arrow(s, x + z * 0.05, cy, x + z * 0.55, cy, c);
    } else if (k === 'van') {
      d.rect(s, x + z * 0.1, y + z * 0.35, z * 0.55, z * 0.07, { fill: 'B07A4A', line: null, radius: 0 });
      seg(s, x + z * 0.15, y + z * 0.42, x + z * 0.15, y + z * 0.85, '8A5A33', 2);
      seg(s, x + z * 0.6, y + z * 0.42, x + z * 0.6, y + z * 0.85, '8A5A33', 2);
      d.ill(s, 'cat', x + z * 0.25, y + z * 0.08, z * 0.25, z * 0.25);
      arrow(s, x + z * 0.5, y + z * 0.3, x + z * 0.9, y + z * 0.88, c);
    } else if (k === 'omheen') {
      d.rect(s, x + z * 0.32, y + z * 0.45, z * 0.36, z * 0.4, { fill: 'D5DCE6', line: 'accent5', lw: 1, radius: 0 });
      d.curve(s, x + z * 0.12, y + z * 0.75, x + z * 0.88, y + z * 0.75, { color: c, lw: 3, h: z * 0.5, dir: -1 });
    } else if (k === 'overheen') {
      for (let i = 0; i < 3; i++) seg(s, x + z * (0.4 + i * 0.1), y + z * 0.55, x + z * (0.4 + i * 0.1), y + z * 0.9, '8A5A33', 2.5);
      seg(s, x + z * 0.36, y + z * 0.65, x + z * 0.64, y + z * 0.65, '8A5A33', 2);
      d.curve(s, x + z * 0.1, y + z * 0.85, x + z * 0.9, y + z * 0.85, { color: c, lw: 3, h: z * 0.55, dir: -1 });
    } else if (k === 'onderdoor') {
      d.rect(s, x + z * 0.15, y + z * 0.2, z * 0.7, z * 0.1, { fill: '8A96A8', line: null, radius: 0 });
      seg(s, x + z * 0.22, y + z * 0.3, x + z * 0.22, y + z * 0.5, '8A96A8', 4);
      seg(s, x + z * 0.78, y + z * 0.3, x + z * 0.78, y + z * 0.5, '8A96A8', 4);
      d.rect(s, x + z * 0.05, y + z * 0.55, z * 0.9, z * 0.3, { fill: '7FB8E6', line: null, radius: 0 });
      arrow(s, x + z * 0.06, y + z * 0.66, x + z * 0.94, y + z * 0.66, c);
    } else if (k === 'tussendoor') {
      d.ill(s, 'automobile', x + z * 0.3, y + z * 0.0, z * 0.4, z * 0.32);
      d.ill(s, 'automobile', x + z * 0.3, y + z * 0.66, z * 0.4, z * 0.32);
      arrow(s, x + z * 0.05, cy, x + z * 0.95, cy, c);
    } else if (k === 'achteraan') {
      d.ill(s, 'dog', x + z * 0.02, y + z * 0.32, z * 0.36, z * 0.36);
      arrow(s, x + z * 0.4, cy, x + z * 0.66, cy, c);
      d.ill(s, 'soccer-ball', x + z * 0.7, y + z * 0.38, z * 0.25, z * 0.25);
    }
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'De keuken in!', sub: 'La postposition de direction (het achterzetsel)', line: 'Ik stap in de keuken · Ik stap de keuken in',
    visual: (s) => {
      [['lieu', 'Ik stap **^^in^^** de keuken.', 1.0, 'waar?'], ['dir', 'Ik stap de keuken **##in##**.', 3.05, 'waarheen?']].forEach(([m, t, y, q]) => {
        d.rect(s, 7.0, y, 5.7, 1.8, { fill: 'FFFFFF', line: null, radius: 0.2, shadow: true });
        scene(s, 7.15, y + 0.15, 2.1, 1.5, m, { room: 'cooking' });
        d.t(s, `//${t}//`, 9.4, y + 0.15, 3.2, 1.1, { size: 22, valign: 'middle', head: true });
        d.t(s, q, 9.4, y + 1.2, 3.2, 0.4, { size: 14, bold: true, color: m === 'lieu' ? LI : DI });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaMapMarkerAlt', h: 'Distinguer', t: 'Je distingue le lieu et la direction : //in het park / het park in.//', color: LI },
      { icon: 'FaLongArrowAltRight', h: 'Décrire', t: 'Je décris un trajet : //de trap op, de gang door, de hoek om.//', color: DI },
      { icon: 'FaCompass', h: 'Guider', t: 'Je guide un visiteur dans le bâtiment.', color: 'accent3' },
    ],
    band: 'Au travail : //U loopt de gang door en de tweede deur links in.//',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Waar is Karim?' });
    [['A', 'lieu'], ['B', 'dir']].forEach(([L, m], i) => {
      const x = 0.6 + i * 6.21;
      d.rect(s, x, 1.7, 5.92, 2.75, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1, shadow: true });
      d.num(s, L, x + 0.15, 1.82, 0.45, 'tx2', 16);
      scene(s, x + 0.6, 1.85, 5.1, 2.45, m, { kind: 'park', person: 'man-office-worker', loop: true, label: 'het park' });
    });
    [['①', 'Karim loopt **in** het park.'], ['②', 'Karim loopt het park **in**.']].forEach(([n, t], i) => {
      const x = 0.6 + i * 6.21;
      d.rect(s, x, 4.6, 5.92, 0.75, { fill: 'bg2', line: BORDER, radius: 0.1 });
      d.t(s, `**${n}** //${t}//`, x + 0.25, 4.6, 5.5, 0.75, { size: 21, valign: 'middle', align: 'center' });
    });
    d.rect(s, 0.6, 5.6, 12.13, 1.2, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.75, 0.9, 0.9);
    d.t(s, ['Quelle phrase va avec quelle image ?', 'Où est le petit mot //in// : avant ou après //het park// ?'], 2.0, 5.6, 10.5, 1.2, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 S28 le procédé
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Le procédé : voorzetsel ou achterzetsel ?' });
    [['lieu', LI, 'HET VOORZETSEL', 'la préposition · **devant** le nom', 'Ik stap **^^in^^** de keuken.', '**Waar?** — où ? le **lieu**'], ['dir', DI, 'HET ACHTERZETSEL', 'la postposition · **après** le nom', 'Ik stap de keuken **##in##**.', '**Waarheen?** — vers où ? la **direction**']].forEach(([m, c, h, sub, ex, q], i) => {
      const x = 0.6 + i * 6.21; const w = 5.92;
      d.rect(s, x, 1.7, w, 3.95, { fill: 'bg1', line: c, lw: 2.5, radius: 0.12, shadow: true });
      d.rect(s, x, 1.7, w, 0.85, { fill: c, line: null, radius: 0.12 });
      d.t(s, [`**${h}**`, sub], x + 0.2, 1.7, w - 0.4, 0.85, { size: 15, gap: 0, color: 'bg1', valign: 'middle', align: 'center' });
      scene(s, x + 0.5, 2.65, 4.9, 1.65, m, { room: 'cooking', label: 'de keuken' });
      d.t(s, `//${ex}//`, x + 0.2, 4.3, w - 0.4, 0.6, { size: 22, align: 'center', valign: 'middle' });
      d.t(s, q, x + 0.2, 4.9, w - 0.4, 0.6, { size: 17, align: 'center', valign: 'middle', color: c });
    });
    d.rect(s, 0.6, 5.85, 12.13, 0.95, { fill: 'tx2', line: null });
    d.t(s, ['Un //achterzetsel// = on **franchit une limite** ou on **suit un trajet**.', '//achter// = derrière · //zetten// = poser → « ce qu’on pose derrière »'], 0.9, 5.85, 11.6, 0.95, { size: 17, color: 'bg1', valign: 'middle', gap: 2 });
  }

  // ---------------------------------------------------------------- 5 ambiguïté
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Une phrase, deux sens' });
    const pool = (x, y, w, h, mode) => {
      d.rect(s, x, y, w * 0.3, h, { fill: 'D5DCE6', line: null, radius: 0 });
      d.rect(s, x + w * 0.3, y + h * 0.35, w * 0.7, h * 0.65, { fill: '7FB8E6', line: null, radius: 0 });
      if (mode === 1) {
        d.ill(s, 'person-swimming', x + w * 0.55, y + h * 0.3, h * 0.5, h * 0.5);
        d.line(s, x + w * 0.88, y + h * 0.75, x + w * 0.88, y + h * 0.15, { color: LI, lw: 2.5, begin: 'triangle' });
      } else {
        d.ill(s, 'person-standing', x + w * 0.03, y - h * 0.05, h * 0.55, h * 0.55);
        d.curve(s, x + w * 0.22, y + h * 0.2, x + w * 0.7, y + h * 0.55, { color: DI, lw: 3.5, h: h * 0.35, dir: -1 });
      }
    };
    d.rect(s, 0.6, 1.7, 7.6, 2.0, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, '//Hij springt **^^in^^** het water.//', 0.8, 1.75, 7.2, 0.5, { size: 21, valign: 'middle' });
    d.t(s, '?', 7.55, 1.75, 0.5, 0.5, { size: 26, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
    pool(0.85, 2.3, 3.2, 1.0, 1); pool(4.45, 2.3, 3.2, 1.0, 2);
    d.t(s, '① sur place', 0.85, 3.33, 3.2, 0.32, { size: 13, italic: true, color: 'accent5', align: 'center' });
    d.t(s, '② depuis le bord', 4.45, 3.33, 3.2, 0.32, { size: 13, italic: true, color: 'accent5', align: 'center' });
    d.rect(s, 0.6, 3.9, 7.6, 2.0, { fill: 'FDF1E6', line: DI, lw: 2, radius: 0.1 });
    d.t(s, '//Hij springt het water **##in##**.//', 0.8, 3.95, 7.2, 0.5, { size: 21, valign: 'middle' });
    d.t(s, '✓', 7.55, 3.95, 0.5, 0.5, { size: 26, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
    pool(2.65, 4.55, 3.2, 1.2, 2);
    d.t(s, 'un seul sens : ②', 5.95, 4.9, 2.2, 0.5, { size: 15, bold: true, color: DI, valign: 'middle' });
    d.rect(s, 8.5, 1.7, 4.23, 4.2, { fill: 'EAF2FB', line: LI, lw: 1.5, radius: 0.1 });
    d.t(s, ['**Expressions figées**', 'la préposition dit déjà la direction :', '//in de bus stappen// (monter dans le bus)', '//in de auto stappen//', '//in bad stappen//', '', 'Donc //Ik stap in de keuken// est **ambigu** ; //Ik stap de keuken in// = j’entre.'], 8.7, 1.8, 3.85, 4.0, { size: 15, gap: 4, valign: 'middle' });
    band(s, 'En cas de doute, choisissez l’//achterzetsel// : il n’a qu’un sens, la direction.', 6.1, 0.7, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 6 piège : le verbe dit la manière
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'Le verbe dit la manière, le petit mot dit la direction' });
    d.t(s, 'FRANÇAIS : le verbe = la direction', 1.55, 1.6, 5.2, 0.4, { size: 14, bold: true, color: 'accent5', cs: 1 });
    d.t(s, 'NÉERLANDAIS : le verbe = la manière', 7.25, 1.6, 5.4, 0.4, { size: 14, bold: true, color: 'accent5', cs: 1 });
    const R = [['person-running', 'Il **##entre##** dans la cuisine //en courant//.', 'Hij **!!rent!!** de keuken **##in##**.'], ['person-biking', 'Elle **##traverse##** la rue //à vélo//.', 'Ze **!!fietst!!** de straat **##over##**.'], ['person-walking', 'Je **##monte##** l’escalier.', 'Ik **!!loop!!** de trap **##op##**.'], ['person-swimming', 'Nous **##traversons##** la rivière //à la nage//.', 'We **!!zwemmen!!** de rivier **##over##**.'], ['automobile', 'Il **##sort##** du garage //en voiture//.', 'Hij **!!rijdt!!** de garage **##uit##**.']];
    R.forEach(([il, fr, nl], i) => {
      const y = 2.05 + i * 0.74;
      d.ill(s, il, 0.65, y + 0.05, 0.58, 0.58);
      d.rect(s, 1.4, y, 5.45, 0.66, { fill: 'bg2', line: BORDER, radius: 0.08 });
      d.t(s, fr, 1.55, y, 5.2, 0.66, { size: 17, valign: 'middle' });
      d.line(s, 6.92, y + 0.33, 7.15, y + 0.33, { color: 'accent5', lw: 2 });
      d.rect(s, 7.2, y, 5.53, 0.66, { fill: 'FFFFFF', line: DI, lw: 1.5, radius: 0.08 });
      d.t(s, `//${nl}//`, 7.35, y, 5.3, 0.66, { size: 19, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.85, 12.13, 0.95, { fill: 'tx2', line: null });
    d.t(s, ['**FR** : verbe = direction (+ « en courant ») · **NL** : verbe = **manière** + //achterzetsel// = **direction**', 'Mot à mot : //Hij rent de keuken in// = « il court la cuisine dedans »'], 0.9, 5.85, 11.6, 0.95, { size: 16, color: 'bg1', valign: 'middle', gap: 2 });
  }

  // ---------------------------------------------------------------- 7 les six grands
  const tiles = (s, T, cols, y0, th, z) => {
    const tw = (12.13 - (cols - 1) * 0.2) / cols;
    T.forEach(([k, w, fr, ex], i) => {
      const x = 0.6 + (i % cols) * (tw + 0.2); const y = y0 + Math.floor(i / cols) * (th + 0.18);
      d.rect(s, x, y, tw, th, { fill: 'FFFFFF', line: DI, lw: 1.75, radius: 0.1, shadow: true });
      picto(s, k, x + 0.15, y + (th - z) / 2, z);
      d.t(s, `**${w}**`, x + z + 0.3, y + 0.08, tw - z - 0.4, 0.55, { size: 28, color: DI, valign: 'middle', head: true });
      d.t(s, `= ${fr}`, x + z + 0.3, y + 0.62, tw - z - 0.4, 0.38, { size: 15, bold: true, color: 'tx2', valign: 'middle' });
      d.t(s, `//${ex}//`, x + z + 0.3, y + 1.0, tw - z - 0.4, th - 1.08, { size: 15, valign: 'middle' });
    });
  };
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'Les six grands achterzetsels' });
    tiles(s, [['in', 'in', 'entrer', 'Hij loopt de kamer **in**.'], ['uit', 'uit', 'sortir', 'Ze loopt het kantoor **uit**.'], ['op', 'op', 'monter', 'We lopen de trap **op**.'], ['af', 'af', 'descendre', 'Ik fiets de berg **af**.'], ['over', 'over', 'traverser (d’un bord à l’autre)', 'Hij zwemt de rivier **over**.'], ['door', 'door', 'traverser (à travers)', 'De trein rijdt de tunnel **door**.']], 3, 1.7, 1.95, 1.3);
    band(s, '//over// = par-dessus, d’un bord à l’autre (rue, rivière, pont) · //door// = à l’intérieur, d’un bout à l’autre (tunnel, parc)', 6.1, 0.72, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 8 quatre autres
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: '… et quatre autres' });
    tiles(s, [['om', 'om', 'tourner (au coin)', 'Hij loopt de hoek **om**.'], ['langs', 'langs', 'longer, passer voir', 'Ik loop alle bureaus **langs**.'], ['voorbij', 'voorbij', 'dépasser', 'Ze rijdt het station **voorbij**.'], ['binnen', 'binnen', 'entrer (soutenu)', 'Hij stapt het kantoor **binnen**.']], 2, 1.7, 1.85, 1.35);
    d.rect(s, 0.6, 5.65, 12.13, 0.6, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, 'Même contraste : //de hoek **##om##**// (tourner au coin) ≠ //**^^om^^** de hoek// (au coin, là où l’on est)', 0.85, 5.65, 11.7, 0.6, { size: 17, valign: 'middle' });
    d.t(s, 'Aussi : //rond// (faire le tour) : //Ze reist de wereld **rond**.//', 0.6, 6.35, 12.13, 0.45, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 9 paires minimales
  {
    const s = d.page({ g: 9, tag: 'EXEMPLES', title: 'Beaucoup d’exemples : où ? ou vers où ?' });
    d.oval(s, 0.75, 1.68, 0.26, 0.26, { fill: LI });
    d.t(s, '**WAAR?** · le lieu', 1.1, 1.6, 5.0, 0.42, { size: 15, color: LI, valign: 'middle', cs: 1 });
    d.line(s, 6.95, 1.81, 7.35, 1.81, { color: DI, lw: 3.5 });
    d.t(s, '**WAARHEEN?** · la direction', 7.45, 1.6, 5.2, 0.42, { size: 15, color: DI, valign: 'middle', cs: 1 });
    const P = [['Hij loopt **^^in^^** het park.', 'il se promène dans le parc', 'Hij loopt het park **##in##**.', 'il entre dans le parc'], ['Ik zwem **^^in^^** de rivier.', 'je nage dans la rivière', 'Ik zwem de rivier **##over##**.', 'je traverse la rivière à la nage'], ['Ze fietst **^^in^^** de stad.', 'elle roule en ville', 'Ze fietst de stad **##uit##**.', 'elle sort de la ville à vélo'], ['We wandelen **^^op^^** de dijk.', 'nous marchons sur la digue', 'We wandelen de dijk **##op##**.', 'nous montons sur la digue'], ['Hij rijdt **^^in^^** de tunnel.', 'il roule dans le tunnel', 'Hij rijdt de tunnel **##door##**.', 'il traverse le tunnel'], ['De kinderen rennen **^^in^^** de gang.', 'ils courent dans le couloir', 'De kinderen rennen de gang **##uit##**.', 'ils sortent du couloir en courant'], ['De kat loopt **^^op^^** de tafel.', 'le chat marche sur la table', 'De kat springt de tafel **##op##**.', 'le chat saute sur la table']];
    const rh = 0.6;
    P.forEach(([a, af, b, bf], i) => {
      const y = 2.1 + i * (rh + 0.04);
      d.rect(s, 0.6, y, 5.95, rh, { fill: i % 2 ? 'FFFFFF' : 'EAF2FB', line: null, radius: 0.06 });
      d.rect(s, 6.78, y, 5.95, rh, { fill: i % 2 ? 'FFFFFF' : 'FDF1E6', line: null, radius: 0.06 });
      d.t(s, [`//${a}//`, af], 0.75, y, 5.7, rh, { size: 16, gap: 0, valign: 'middle' });
      d.t(s, [`//${b}//`, bf], 6.93, y, 5.7, rh, { size: 16, gap: 0, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 10 au bureau : le trajet de Karim
  {
    const s = d.page({ g: 10, tag: 'MISE EN SITUATION', title: 'Au bureau : le trajet de Karim' });
    const A = floorPlan(d, s, 0.6, 1.75, 7.6, 4.3, { size: 11 });
    const b = A.box;
    route(d, s, [A.parking, [A.parking[0], A.ingang[1]], A.ingang, A.onthaal, [A.keukenDoor[0], A.onthaal[1]], A.keukenDoor, A.keuken], { marks: [1, 2, 3, 5] });
    route(d, s, [[A.keukenDoor[0] + 0.15, A.keukenDoor[1]], [A.vergaderzaalDoor[0] + 0.15, A.vergaderzaalDoor[1]], [A.vergaderzaal[0] + 0.15, A.vergaderzaal[1]]], { color: 'accent6', lw: 2.5 });
    [[1, A.parking[0] + 0.25, A.parking[1] - 0.05], [2, A.ingang[0] - 0.05, A.ingang[1] - 0.3], [3, A.onthaal[0], A.onthaal[1] + 0.3], [4, b.bx + b.c0 + 0.35, A.gang[1] - 0.3], [5, A.keuken[0] - 0.4, A.keuken[1] + 0.25], [6, A.vergaderzaal[0] + b.cw / 2 - 0.22, b.y + 0.25]].forEach(([n, px, py]) => d.num(s, n, px - 0.16, py - 0.16, 0.32, n === 6 ? 'accent6' : DI, 10));
    const L = ['Karim rijdt de parking **##op##**.', 'Hij stapt het gebouw **##binnen##**.', 'Hij loopt het onthaal **##voorbij##**.', 'Hij loopt de gang **##in##**.', 'Hij loopt de keuken **##in##**: koffie!', 'Hij loopt de keuken **##uit##** en de vergaderzaal **##in##**.'];
    L.forEach((t, i) => {
      const y = 1.75 + i * 0.72;
      d.num(s, i + 1, 8.5, y + 0.14, 0.38, i === 5 ? 'accent6' : DI, 12);
      d.t(s, `//${t}//`, 9.0, y, 3.73, 0.66, { size: 16, valign: 'middle' });
    });
    band(s, 'Et vous ? Décrivez votre trajet du matin, de la porte de l’immeuble à votre bureau.', 6.25, 0.6, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 11 la place
  {
    const s = d.page({ g: 11, tag: 'GRAMMAIRE', title: 'La place : au bout, comme une particule' });
    const R = [[['Ik', 'n'], ['loop', 'v'], ['de trap', 'n'], ['op.', 'a']], [['Ik', 'n'], ['wil', 'v'], ['de trap', 'n'], ['op', 'a'], ['lopen.', 'v2']], [['…, omdat', 'n'], ['ik', 'n'], ['de trap', 'n'], ['op', 'a'], ['loop.', 'v']], [['Loop', 'v'], ['de trap', 'n'], ['op!', 'a']], [['Ik', 'n'], ['ben', 'v'], ['de trap', 'n'], ['op', 'a'], ['gelopen.', 'v2']]];
    const lab = ['présent', 'modal (M12)', 'subordonnée (M9)', 'impératif (M16)', 'passé composé (M15)'];
    R.forEach((r, i) => {
      const y = 1.72 + i * 0.8;
      d.t(s, lab[i], 0.6, y, 2.2, 0.66, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      strip(s, 2.85, y, r, { size: 21, h: 0.66 });
    });
    d.rect(s, 9.3, 1.72, 3.43, 3.9, { fill: 'FDF1E6', line: DI, lw: 1.5, radius: 0.1 });
    d.t(s, ['**Comme la particule** (M11)', '//Ik bel je **op**.//', '//Ik loop de trap **op**.//', '', 'Quand les deux mots se touchent :', '//op lopen// ou //oplopen// : les deux écritures sont admises.'], 9.45, 1.82, 3.15, 3.7, { size: 15, gap: 4, valign: 'middle' });
    band(s, 'L’//achterzetsel// va **au bout**, juste avant le ou les verbes de la fin.', 6.0, 0.72, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 12 hebben ou zijn
  {
    const s = d.page({ g: 12, tag: 'GRAMMAIRE', title: 'hebben ou zijn ?' });
    [['HEBBEN', LI, 'activité sur place', 'lieu', [['Ik **heb** in het park gelopen.', 'j’ai marché dans le parc'], ['We **hebben** op de dijk gefietst.', 'nous avons roulé sur la digue'], ['Ze **heeft** in de zee gezwommen.', 'elle a nagé dans la mer']]], ['ZIJN', DI, 'déplacement vers un but', 'dir', [['Ik **ben** het park in gelopen.', 'je suis entré dans le parc'], ['We **zijn** de dijk op gefietst.', 'nous sommes montés sur la digue'], ['Ze **is** de zee in gezwommen.', 'elle est entrée dans la mer à la nage']]]].forEach(([h, c, sub, m, L], i) => {
      const x = 0.6 + i * 6.21; const w = 5.92;
      d.rect(s, x, 1.7, w, 3.95, { fill: 'bg1', line: c, lw: 2, radius: 0.1, shadow: true });
      d.rect(s, x, 1.7, w, 0.62, { fill: c, line: null, radius: 0.1 });
      d.t(s, `**${h}** · ${sub}`, x + 0.2, 1.7, w - 0.4, 0.62, { size: 17, color: 'bg1', valign: 'middle' });
      if (m === 'lieu') d.oval(s, x + w - 0.6, 1.88, 0.26, 0.26, { fill: 'FFFFFF' });
      else d.line(s, x + w - 0.85, 2.01, x + w - 0.3, 2.01, { color: 'FFFFFF', lw: 3.5 });
      L.forEach(([t, f], k) => {
        d.t(s, [`//${t}//`, f], x + 0.25, 2.5 + k * 1.0, w - 0.5, 0.9, { size: 18, gap: 1, valign: 'middle' });
      });
    });
    band(s, '**##achterzetsel##** → toujours **zijn** · rappel M15 : //lopen, fietsen, zwemmen// + //hebben// pour l’activité', 5.9, 0.85, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 13 sans nom
  {
    const s = d.page({ g: 13, tag: 'GRAMMAIRE', title: 'Sans nom : naar binnen, naar boven…' });
    const hx = 2.0; const hy = 2.4; const hw = 3.6; const hh = 3.4; const fl = hy + hh / 2;
    d.poly(s, [[hx - 0.2, hy], [hx + hw / 2, hy - 0.8], [hx + hw + 0.2, hy]], { fill: 'C0504D', line: null });
    d.rect(s, hx, hy, hw, hh, { fill: 'FFFFFF', line: 'tx2', lw: 2.5, radius: 0 });
    d.line(s, hx, fl, hx + hw, fl, { color: 'tx2', lw: 2, arrow: false });
    for (let k = 0; k < 5; k++) d.rect(s, hx + hw * 0.5 + k * 0.33, hy + hh - 0.3 - k * 0.3, 0.33, 0.3 + k * 0.3, { fill: 'D5DCE6', line: null, radius: 0 });
    d.rect(s, hx - 0.05, hy + hh - 1.3, 0.1, 1.2, { fill: 'FFFFFF', line: null, radius: 0 });
    // dehors : entrer, sortir
    arrow(s, hx + 0.7, hy + hh - 1.0, 0.6, hy + hh - 1.0, 'accent5', 2.5);
    d.t(s, '**naar buiten**', 0.6, hy + hh - 1.45, 1.4, 0.38, { size: 13, color: 'accent5' });
    arrow(s, 0.6, hy + hh - 0.35, hx + 0.9, hy + hh - 0.35, DI, 3.5);
    d.t(s, '**naar binnen**', 0.6, hy + hh - 0.8, 1.4, 0.38, { size: 13, color: DI });
    // dedans : monter, descendre
    arrow(s, hx + hw * 0.45, hy + hh - 0.45, hx + hw - 0.2, fl + 0.3, DI, 3.5);
    d.t(s, '**naar boven**', hx + 0.9, fl + 0.12, 1.5, 0.38, { size: 13, color: DI });
    arrow(s, hx + 0.65, hy + 0.35, hx + 0.65, fl + 0.55, 'accent5', 2.5);
    d.t(s, '**naar beneden**', hx + 0.85, hy + 0.3, 1.8, 0.38, { size: 13, color: 'accent5' });
    d.ill(s, 'person-standing', hx + hw - 0.95, hy + 0.55, 0.7, 0.7);
    const R = [['de keuken **##in##**', 'naar **binnen**', 'binnen', 'entrer / à l’intérieur'], ['het gebouw **##uit##**', 'naar **buiten**', 'buiten', 'sortir / dehors'], ['de trap **##op##**', 'naar **boven**', 'boven', 'monter / en haut'], ['de trap **##af##**', 'naar **beneden**', 'beneden', 'descendre / en bas']];
    d.t(s, '**avec un nom**', 6.0, 1.65, 2.2, 0.35, { size: 13, color: 'accent5' });
    d.t(s, '**sans nom** (direction)', 8.25, 1.65, 2.4, 0.35, { size: 13, color: DI });
    d.t(s, '**lieu**', 10.75, 1.65, 2.0, 0.35, { size: 13, color: LI });
    R.forEach(([a, b, c, f], i) => {
      const y = 2.05 + i * 0.8;
      d.rect(s, 6.0, y, 6.73, 0.7, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.08 });
      d.t(s, `//${a}//`, 6.1, y, 2.2, 0.7, { size: 16, valign: 'middle' });
      d.t(s, [`//→ ${b}//`, f], 8.25, y, 2.5, 0.7, { size: 16, gap: 0, valign: 'middle', color: 'tx1' });
      d.t(s, `//**^^${c}^^**//`, 10.75, y, 1.9, 0.7, { size: 17, valign: 'middle' });
    });
    d.rect(s, 6.0, 5.35, 6.73, 0.62, { fill: 'EAF2FB', line: LI, lw: 1, radius: 0.08 });
    d.t(s, 'Avec //er// (M23) : //Daar is de lift. Ik stap **erin**. · … **eruit**.//', 6.15, 5.35, 6.5, 0.62, { size: 15, valign: 'middle' });
    band(s, '//Ik ben **boven**// (lieu) · //Ik ga **naar boven**// (direction) — et la formule figée //Kom binnen!// (M16)', 6.2, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 14 omzetsels
  {
    const s = d.page({ g: 14, tag: '+ APERÇU', title: '+ APERÇU : les omzetsels (en deux morceaux)' });
    const T = [['naar', 'naar ▢ toe', 'Ik loop **%%naar%%** de deur **%%toe%%**.', 'vers'], ['van', 'van ▢ af', 'De kat springt **%%van%%** de tafel **%%af%%**.', 'descendre de'], ['omheen', 'om ▢ heen', 'We lopen **%%om%%** het gebouw **%%heen%%**.', 'autour de'], ['overheen', 'over ▢ heen', 'Ze springt **%%over%%** het hek **%%heen%%**.', 'par-dessus'], ['onderdoor', 'onder ▢ door', 'De boot vaart **%%onder%%** de brug **%%door%%**.', 'sous'], ['tussendoor', 'tussen ▢ door', 'Ze fietst **%%tussen%%** de auto’s **%%door%%**.', 'entre'], ['achteraan', 'achter ▢ aan', 'De hond rent **%%achter%%** de bal **%%aan%%**.', 'à la poursuite de']];
    const cols = 4; const tw = (12.13 - 3 * 0.18) / cols; const th = 2.0; const z = 1.0;
    T.forEach(([k, f, ex, fr], i) => {
      const x = 0.6 + (i % cols) * (tw + 0.18); const y = 1.7 + Math.floor(i / cols) * (th + 0.15);
      d.rect(s, x, y, tw, th, { fill: 'FFFFFF', line: OM, lw: 1.5, radius: 0.1 });
      picto(s, k, x + 0.1, y + 0.1, z, OM);
      d.t(s, `**${f}**`, x + z + 0.15, y + 0.1, tw - z - 0.2, 0.5, { size: 15, color: OM, valign: 'middle' });
      d.t(s, fr, x + z + 0.15, y + 0.6, tw - z - 0.2, 0.45, { size: 13, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${ex}//`, x + 0.12, y + 1.15, tw - 0.24, 0.8, { size: 14, valign: 'middle' });
    });
    const x = 0.6 + 3 * (tw + 0.18); const y = 1.7 + th + 0.15;
    d.rect(s, x, y, tw, th, { fill: 'F6E3EE', line: null, radius: 0.1 });
    d.t(s, ['**À reconnaître**', 'Le 2ᵉ morceau va au bout : //Ik **loop** naar de deur **toe**.//', 'Souvent, la version simple suffit : //Ik loop naar de deur.//'], x + 0.15, y + 0.05, tw - 0.3, th - 0.1, { size: 13, gap: 4, valign: 'middle' });
    band(s, 'Le nom est pris en sandwich : //**%%om%%** het gebouw **%%heen%%**//, //**%%onder%%** de brug **%%door%%**//', 6.15, 0.65, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 15 piège : calques
  {
    const s = d.page({ g: 15, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : les calques à éviter' });
    trapFrame(s, 4.4);
    const R = [['« monter l’escalier »', 'Ik stijg de trap', 'Ik loop de trap **##op##**'], ['« traverser la rue »', 'Ik kruis de straat', 'Ik steek de straat **##over##** · Ik loop de straat **##over##**'], ['« entrer dans la salle »', 'Ik loop in de zaal in', 'Ik loop de zaal **##in##** · Ik ga de zaal **##binnen##**'], ['« il est entré dans la mer »', 'Hij heeft de zee in gelopen', 'Hij **is** de zee **##in##** gelopen'], ['« il saute dans l’eau » (du bord)', null, 'Hij springt in het water · Hij springt het water **##in##**']];
    R.forEach(([fr, ko, ok], i) => {
      const y = 2.3 + i * 0.75;
      d.t(s, fr, 0.95, y, 3.5, 0.66, { size: 16, valign: 'middle' });
      if (ko) d.t(s, `✗ //{{${ko}}}//`, 4.45, y, 3.0, 0.66, { size: 15, color: 'accent6', valign: 'middle' });
      d.line(s, 7.45, y + 0.33, 7.8, y + 0.33, { color: 'accent3', lw: 2 });
      d.rect(s, 7.85, y + 0.04, 4.7, 0.58, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.0, y + 0.04, 4.5, 0.58, { size: 16, valign: 'middle', fit: true, max: 17, min: 11 });
    });
    band(s, '//stijgen, dalen// : les prix, les avions · //kruisen// : se croiser · le petit mot **une seule fois**', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 16 à retenir
  {
    const s = d.page({ g: 16, tag: 'À RETENIR', title: 'À retenir : la porte et la flèche' });
    [['lieu', LI, '**avant** le nom = **où ?**', 'Ik stap **^^in^^** de keuken.'], ['dir', DI, '**après** le nom = **vers où ?**', 'Ik stap de keuken **##in##**.']].forEach(([m, c, h, ex], i) => {
      const x = 0.6 + i * 6.21; const w = 5.92;
      d.rect(s, x, 1.7, w, 2.05, { fill: 'bg1', line: c, lw: 2, radius: 0.1 });
      scene(s, x + 0.15, 1.85, 2.6, 1.75, m, { room: 'cooking' });
      d.t(s, [h, `//${ex}//`], x + 2.85, 1.75, w - 3.0, 1.95, { size: 18, gap: 6, valign: 'middle', color: 'tx1' });
    });
    const K = ['in', 'uit', 'op', 'af', 'over', 'door', 'om', 'langs', 'voorbij', 'binnen'];
    const kw = (12.13 - 9 * 0.1) / 10;
    K.forEach((k, i) => {
      const x = 0.6 + i * (kw + 0.1);
      d.rect(s, x, 3.95, kw, 1.35, { fill: 'FFFFFF', line: DI, lw: 1.25, radius: 0.08 });
      picto(s, k, x + (kw - 0.8) / 2, 4.0, 0.8);
      d.t(s, `**${k}**`, x, 4.85, kw, 0.4, { size: 14, color: DI, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.5, 12.13, 0.85, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, 'Le verbe dit **la manière** · l’//achterzetsel// va **au bout** · passé composé avec **zijn**', 0.85, 5.5, 11.7, 0.85, { size: 19, valign: 'middle', align: 'center' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 17 divider
  d.divider({ g: 17, tiles: [
    ['Point ou flèche ?', '★', 'FaDotCircle'], ['Le bon petit mot', '★', 'FaLongArrowAltRight'], ['Traduisez', '★★', 'FaLanguage'], ['Le détective', '★★', 'FaSearch'],
    ['Waar ben ik?', '★★', 'FaMapMarkedAlt'], ['Kruip de vergaderzaal in!', '★', 'FaDice'], ['Le visiteur perdu', '★★★', 'FaCompass'],
  ] });

  // ---------------------------------------------------------------- 18 ex1 point ou flèche
  const ex1 = [['Ze loopt het bos in.', 'd'], ['Ze wandelt in het bos.', 'l'], ['De kinderen spelen in de tuin.', 'l'], ['We fietsen de stad uit.', 'd'], ['Hij zwemt in het zwembad.', 'l'], ['Hij zwemt het meer over.', 'd'], ['De kat springt de kast op.', 'd'], ['Ik wacht in de gang.', 'l']];
  d.ex({ g: 18, title: 'Exercice 1 — Point ou flèche ?', stars: '★', instr: 'Lieu (//waar?//) ou direction (//waarheen?//) ? Cochez le point ou la flèche.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 4; const cw = (12.13 - 0.3) / 2;
    ex1.forEach(([t, k], i) => {
      const c = Math.floor(i / 4); const r = i % 4;
      const x = 0.6 + c * (cw + 0.3); const y = top + r * rh;
      d.rect(s, x, y + 0.06, cw, rh - 0.12, { fill: r % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.75, radius: 0.08 });
      d.t(s, `**${i + 1}**`, x + 0.12, y + 0.06, 0.4, rh - 0.12, { size: 17, color: 'accent5', valign: 'middle' });
      d.t(s, `//${t}//`, x + 0.55, y + 0.06, cw - 2.2, rh - 0.12, { size: 19, valign: 'middle' });
      const bx = x + cw - 1.55; const cy = y + rh / 2;
      const onL = mode === 'a' && k === 'l'; const onD = mode === 'a' && k === 'd';
      d.rect(s, bx, cy - 0.3, 0.65, 0.6, { fill: onL ? LI : 'FFFFFF', line: LI, lw: 1.5, radius: 0.1 });
      d.oval(s, bx + 0.22, cy - 0.1, 0.2, 0.2, { fill: onL ? 'FFFFFF' : LI });
      d.rect(s, bx + 0.75, cy - 0.3, 0.65, 0.6, { fill: onD ? DI : 'FFFFFF', line: DI, lw: 1.5, radius: 0.1 });
      d.line(s, bx + 0.85, cy, bx + 1.3, cy, { color: onD ? 'FFFFFF' : DI, lw: 3 });
    });
  });

  // ---------------------------------------------------------------- 19 ex2 le bon petit mot
  const ex2 = [['op', 'Karim loopt de trap [[op]].'], ['uit', 'Sofie loopt het kantoor [[uit]].'], ['in', 'De auto rijdt de garage [[in]].'], ['af', 'We fietsen de berg [[af]].'], ['over', 'Ik steek de straat [[over]].'], ['door', 'De trein rijdt de tunnel [[door]].'], ['om', 'Hij loopt de hoek [[om]].'], ['voorbij', 'Ze rijdt het station [[voorbij]].']];
  d.ex({ g: 19, title: 'Exercice 2 — Le bon petit mot', stars: '★', instr: 'Regardez le pictogramme et complétez : //in · uit · op · af · over · door · om · voorbij//.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 4; const cw = (12.13 - 0.3) / 2;
    ex2.forEach(([k, t], i) => {
      const c = Math.floor(i / 4); const r = i % 4;
      const x = 0.6 + c * (cw + 0.3); const y = top + r * rh;
      d.rect(s, x, y + 0.06, cw, rh - 0.12, { fill: r % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.75, radius: 0.08 });
      d.t(s, `**${i + 1}**`, x + 0.12, y + 0.06, 0.4, rh - 0.12, { size: 17, color: 'accent5', valign: 'middle' });
      d.rect(s, x + 0.5, y + 0.12, rh - 0.24, rh - 0.24, { fill: 'FFFFFF', line: BORDER, lw: 0.75, radius: 0.06 });
      picto(s, k, x + 0.52, y + 0.14, rh - 0.28);
      d.t(s, `//${t}//`, x + 0.5 + rh, y + 0.06, cw - rh - 0.6, rh - 0.12, { size: 19, mode, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 20 ex3 traduisez
  const ex3 = [['Il entre dans la cuisine.', 'Hij loopt de keuken in.', 'ou : Hij gaat de keuken binnen.'], ['Je monte l’escalier en courant.', 'Ik ren de trap op.', ''], ['Elle traverse le parc à vélo.', 'Ze fietst het park door.', ''], ['Nous sortons du bâtiment.', 'We lopen het gebouw uit.', 'ou : We gaan naar buiten.'], ['Le chat saute sur la table.', 'De kat springt de tafel op.', 'ou : op de tafel'], ['Ils sont descendus de la montagne à pied.', 'Ze zijn de berg af gelopen.', 'zijn ! (afgelopen accepté)']];
  d.ex({ g: 20, title: 'Exercice 3 — Traduisez', stars: '★★', instr: 'Verbe de direction en français → verbe de manière + //achterzetsel//.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([fr, nl, alt], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'accent5', 13);
      d.rect(s, 1.1, y + 0.05, 5.4, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, fr, 1.25, y + 0.05, 5.2, rh - 0.12, { size: 17, valign: 'middle' });
      d.line(s, 6.6, y + rh / 2, 7.1, y + rh / 2, { color: DI, lw: 2.5 });
      d.rect(s, 7.15, y + 0.05, 5.58, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, [`//**${nl}**//`, alt ? `//${alt}//` : ''], 7.3, y + 0.05, 5.35, rh - 0.12, { size: 17, gap: 0, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 21 ex4 détective
  d.ex({ g: 21, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Karim explique le chemin à mevrouw Wouters. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Karim Benali · Aan: Eva Wouters · Onderwerp: de weg naar de vergaderzaal', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Geachte mevrouw Wouters,//', '//Zo vindt u de vergaderzaal: u stapt het gebouw binnen en u loopt {{op de trap}}++ de trap op++ naar de eerste verdieping. Daar {{kruist u de gang}}++ loopt u de gang door++ tot aan de koffieautomaat. Dan gaat u de hoek om en u loopt {{in de vergaderzaal in}}++ de vergaderzaal in++. Ik wacht {{naar binnen}}++ binnen++ op u. Vorige keer {{heeft}}++ is++ een bezoeker de verkeerde zaal in gelopen!//', '//Met vriendelijke groeten//', '//Karim Benali//'];
    d.t(s, txt, 0.95, top + 0.65, 8.3, h - 0.8, { size: 18, gap: 6, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //het gebouw binnen// et //de hoek om// sont corrects. //binnen// = lieu ; //naar binnen// = direction.', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 22 ex5 waar ben ik
  const ex5 = [['U loopt het onthaal voorbij en de gang in. U loopt de eerste deur links in.', 'de vergaderzaal'], ['U loopt de gang in en u loopt de tweede deur rechts in.', 'de keuken'], ['U loopt de gang in, het kopieerlokaal voorbij, en u loopt de laatste deur links in.', 'de toiletten'], ['U loopt de gang door tot het einde en u loopt de trap op.', 'de eerste verdieping']];
  d.ex({ g: 22, title: 'Exercice 5 — Waar ben ik?', stars: '★★', instr: 'Suivez l’itinéraire sur le plan. Dans quelle pièce arrivez-vous ?' }, (s, mode, top) => {
    const A = floorPlan(d, s, 0.6, top + 0.1, 6.3, 3.9, { size: 10, label: (k) => (mode === 'a' || ['onthaal', 'parking', 'trap', 'lift', 'gang', 'kopieerlokaal'].includes(k) ? ALL[k] : null) });
    d.chip(s, 'U bent hier', A.ingang[0] - 0.55, A.ingang[1] + 0.32, 'accent6', 0.3, 10);
    d.t(s, '↑ links · ↓ rechts (en marchant dans la gang)', 0.6, top + 4.1, 6.3, 0.35, { size: 12, italic: true, color: 'accent5', align: 'center' });
    const rh = (6.88 - top) / 4;
    ex5.forEach(([t, a], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 7.15, y + 0.12, 0.38, 'tx2', 12);
      d.t(s, `//${t}//`, 7.65, y + 0.02, 5.08, rh - 0.5, { size: 14, valign: 'middle' });
      d.rect(s, 7.65, y + rh - 0.48, 5.08, 0.4, { fill: mode === 'a' ? 'EDF6F0' : 'FFFFFF', line: mode === 'a' ? 'accent3' : BORDER, lw: 1, radius: 0.06 });
      if (mode === 'a') d.t(s, `→ //**${a}**//`, 7.75, y + rh - 0.48, 4.9, 0.4, { size: 15, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 23 ex6 kruip de vergaderzaal in
  {
    const s = d.page({ g: 23, tag: 'JIJ NU !', title: 'Exercice 6 — Kruip de vergaderzaal in!', stars: '★' });
    const V = ['lopen', 'rennen', 'fietsen', 'rijden', 'zwemmen', 'kruipen', 'springen', 'sluipen'];
    const T = ['de vergaderzaal in', 'de trap op', 'de gang door', 'de lift uit', 'de hoek om', 'de parking op', 'het kantoor uit', 'de straat over'];
    d.t(s, '**CARTES-VERBES**', 0.6, 1.62, 3.8, 0.35, { size: 13, color: VB, cs: 2 });
    d.t(s, '**CARTES-TRAJETS**', 4.55, 1.62, 3.8, 0.35, { size: 13, color: DI, cs: 2 });
    V.forEach((v, i) => {
      const x = 0.6 + (i % 2) * 1.92; const y = 2.0 + Math.floor(i / 2) * 0.9;
      d.rect(s, x, y, 1.8, 0.78, { fill: 'FBEDEB', line: VB, lw: 1.75, radius: 0.1, rotate: [-3, 2, 1, -2][i % 4] });
      d.t(s, `//**${v}**//`, x, y, 1.8, 0.78, { size: 17, color: VB, align: 'center', valign: 'middle', rotate: [-3, 2, 1, -2][i % 4] });
    });
    T.forEach((v, i) => {
      const x = 4.55 + (i % 2) * 1.95; const y = 2.0 + Math.floor(i / 2) * 0.9;
      d.rect(s, x, y, 1.85, 0.78, { fill: 'FDF1E6', line: DI, lw: 1.75, radius: 0.1, rotate: [2, -2, -1, 3][i % 4] });
      d.t(s, `//**${v}**//`, x + 0.05, y, 1.75, 0.78, { size: 14, color: DI, align: 'center', valign: 'middle', rotate: [2, -2, -1, 3][i % 4] });
    });
    d.ill(s, 'game-die', 8.75, 1.7, 0.8, 0.8);
    d.t(s, 'Kruip!', 9.65, 1.7, 3.0, 0.8, { size: 28, bold: true, color: DI, head: true, valign: 'middle' });
    d.t(s, ['**1.** Tirez une carte-verbe et une carte-trajet.', '**2.** Dites la phrase avec un sujet : //De directeur **kruipt** de vergaderzaal **in**!//', '**3.** Le groupe mime, puis passe au passé composé : //De directeur **is** de vergaderzaal in **gekropen**.//', 'Les phrases absurdes sont permises… si elles sont correctes !'], 8.75, 2.65, 3.98, 4.2, { size: 15, gap: 8 });
  }

  // ---------------------------------------------------------------- 24 ex7 le visiteur perdu
  d.roleplay({
    g: 24, title: 'Exercice 7 — Le visiteur perdu',
    scenario: 'Un visiteur arrive à l’accueil de Peeters & Co et cherche une pièce. L’accueil explique le chemin ; le visiteur répète pour vérifier.',
    a: '**L’accueil** : saluez, demandez qui il ou elle vient voir, expliquez le chemin avec au moins deux //achterzetsels//.',
    b: '**Le visiteur** : présentez-vous, dites qui vous cherchez, répétez le chemin : //Dus ik loop…//',
    bank: '//Goedemorgen, kan ik u helpen? · Ik heb een afspraak met… · U loopt de gang in / door. · U gaat de hoek om. · U loopt de trap op. · Het is de eerste deur links / rechts. · Dus ik loop… · Dank u wel!//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.5, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'PEETERS & CO · GELIJKVLOERS', x + 0.15, y, w - 0.3, 0.5, { size: 12, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      floorPlan(d, s, x + 0.1, y + 0.7, w - 0.2, 2.6, { size: 7, icons: false, label: (k) => ALL[k].replace(/^(de|het) /, '') });
      d.t(s, ['**Eerste verdieping**', 'de directie · de boekhouding', '', '**Destinations**', 'vergaderzaal · refter · keuken · directie · toiletten'], x + 0.15, y + 3.45, w - 0.3, h - 3.55, { size: 12, gap: 2 });
    },
  });

  // ---------------------------------------------------------------- 25 ticket
  d.ticket({
    g: 25,
    q: ['Où ou vers où ? //Hij loopt het park in.// / //Hij loopt in het park.//', 'Traduisez : « Je monte l’escalier. »', 'Complétez : //Ik …… de vergaderzaal in gelopen.//'],
    self: ['Distinguer', 'Décrire', 'Guider'],
    teaser: { icon: 'FaIdBadge', text: '**Volgende keer : Even voorstellen** — //Ik ben Karim Benali, boekhouder bij Peeters & Co.//' },
  });
}

module.exports = { meta, build };
