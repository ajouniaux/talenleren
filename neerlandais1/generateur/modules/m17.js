// Module 17 — Zitten, staan, liggen, hangen · Les verbes de position
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 17, slug: 'Zitten_staan_liggen_hangen', title: 'Zitten, staan, liggen, hangen — Les verbes de position', short: 'Zitten, staan, liggen, hangen', template: 'module_17_zitten_staan_liggen.md' };

// one colour per position (S14); the action verb keeps the colour of its position
const C = { staan: 'accent2', liggen: 'accent3', zitten: 'accent1', hangen: 'accent4' };
const WOOD = 'C9A27A';

function build(d) {
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  // S14 silhouettes, drawn in a w × h box
  const pose = (s, kind, x, y, w, h) => {
    const c = C[kind]; const gy = y + h - 0.12;
    if (kind === 'staan') {
      d.rect(s, x + 0.15, gy, w - 0.3, 0.06, { fill: 'accent5', line: null, radius: 0 });
      d.rect(s, x + w / 2 - 0.22, gy - h * 0.72, 0.44, h * 0.72, { fill: c, line: null, radius: 0.06 });
    } else if (kind === 'liggen') {
      d.rect(s, x + 0.15, gy, w - 0.3, 0.06, { fill: 'accent5', line: null, radius: 0 });
      d.rect(s, x + w / 2 - h * 0.36, gy - 0.44, h * 0.72, 0.44, { fill: c, line: null, radius: 0.06 });
    } else if (kind === 'zitten') {
      const bw = Math.min(w - 0.3, 1.2); const bx = x + (w - bw) / 2; const bh = h * 0.62;
      d.rect(s, bx + 0.25, gy - bh + 0.22, bw - 0.5, bh - 0.3, { fill: c, line: null, radius: 0.06 });
      d.rect(s, bx, gy - bh, 0.08, bh, { fill: 'accent5', line: null, radius: 0 });
      d.rect(s, bx + bw - 0.08, gy - bh, 0.08, bh, { fill: 'accent5', line: null, radius: 0 });
      d.rect(s, bx, gy - 0.02, bw, 0.08, { fill: 'accent5', line: null, radius: 0 });
    } else {
      const nx = x + w / 2; const ny = y + 0.15;
      d.rect(s, x + 0.15, y + 0.05, w - 0.3, 0.06, { fill: 'accent5', line: null, radius: 0 });
      d.oval(s, nx - 0.07, ny, 0.14, 0.14, { fill: 'accent5' });
      d.line(s, nx, ny + 0.12, nx - 0.3, ny + 0.45, { color: 'accent5', lw: 1.5, arrow: false });
      d.line(s, nx, ny + 0.12, nx + 0.3, ny + 0.45, { color: 'accent5', lw: 1.5, arrow: false });
      d.rect(s, nx - 0.42, ny + 0.45, 0.84, h * 0.5, { fill: c, line: null, radius: 0.06 });
    }
  };
  // a bottle (standing or lying), drawn
  const bottle = (s, x, y, lying, c = 'accent3') => {
    if (!lying) {
      d.rect(s, x, y + 0.45, 0.5, 1.15, { fill: c, line: null, radius: 0.1 });
      d.rect(s, x + 0.17, y + 0.12, 0.16, 0.4, { fill: c, line: null, radius: 0.03 });
      d.rect(s, x + 0.15, y, 0.2, 0.14, { fill: 'accent6', line: null, radius: 0.02 });
    } else {
      d.rect(s, x, y + 1.1, 1.15, 0.5, { fill: c, line: null, radius: 0.1 });
      d.rect(s, x + 1.12, y + 1.27, 0.4, 0.16, { fill: c, line: null, radius: 0.03 });
      d.rect(s, x + 1.5, y + 1.25, 0.14, 0.2, { fill: 'accent6', line: null, radius: 0.02 });
    }
  };
  const book = (s, x, y, lying, c = 'accent4') => {
    if (!lying) {
      d.rect(s, x, y + 0.3, 0.32, 1.3, { fill: c, line: null, radius: 0.03 });
      d.rect(s, x + 0.05, y + 0.5, 0.22, 0.08, { fill: 'FFFFFF', line: null, radius: 0 });
    } else {
      d.rect(s, x, y + 1.28, 1.3, 0.32, { fill: c, line: null, radius: 0.03 });
      d.rect(s, x + 0.12, y + 1.28, 0.08, 0.32, { fill: 'FFFFFF', line: null, radius: 0 });
    }
  };
  const clock = (s, x, y, dd) => {
    d.oval(s, x, y, dd, dd, { fill: 'FFFFFF', line: 'tx2', lw: 2.5 });
    d.line(s, x + dd / 2, y + dd / 2, x + dd / 2, y + dd * 0.2, { color: 'tx2', lw: 2, arrow: false });
    d.line(s, x + dd / 2, y + dd / 2, x + dd * 0.72, y + dd / 2, { color: 'tx2', lw: 2, arrow: false });
  };
  // ball & box vignette for the prepositions
  const BOX = 'D9B98F'; const BALL = 'accent1';
  const vignette = (s, prep, x, y, w, h) => {
    const bw = 0.85; const bh = 0.62; const r = 0.3; const gy = y + h - 0.1;
    const bx = x + w / 2 - bw / 2; const by = gy - bh;
    const ball = (cx, cy) => d.oval(s, cx - r / 2, cy - r / 2, r, r, { fill: BALL });
    const box = (xx, yy, o = {}) => d.rect(s, xx, yy, bw, bh, { fill: o.open ? null : BOX, line: '9C7A50', lw: 1.5, radius: 0.03 });
    d.line(s, x + 0.1, gy, x + w - 0.1, gy, { color: 'accent5', lw: 1, arrow: false });
    if (prep === 'op') { box(bx, by); ball(bx + bw / 2, by - r / 2); }
    else if (prep === 'in') { ball(bx + bw / 2, gy - r / 2 - 0.04); box(bx, by, { open: true }); d.rect(s, bx, by, bw, bh, { fill: BOX, tr: 55, line: '9C7A50', lw: 1.5, radius: 0.03 }); }
    else if (prep === 'onder') { ball(bx + bw / 2, gy - r / 2); box(bx, gy - r - bh); }
    else if (prep === 'naast') { box(bx - 0.25, by); ball(bx + bw - 0.25 + 0.1 + r / 2, gy - r / 2); }
    else if (prep === 'voor') { box(bx, by - 0.12); ball(bx + bw / 2, gy - r / 2 + 0.02); }
    else if (prep === 'achter') { ball(bx + bw - 0.08, by - 0.05); box(bx, by); }
    else if (prep === 'tussen') { box(x + 0.15, by); box(x + w - 0.15 - bw, by); ball(x + w / 2, gy - r / 2); }
    else if (prep === 'boven') { box(bx, by); d.line(s, bx + bw / 2, y + 0.05, bx + bw / 2, by - 0.4 - r / 2, { color: 'accent5', lw: 1, arrow: false }); ball(bx + bw / 2, by - 0.4); }
    else if (prep === 'aan') { d.rect(s, x + 0.2, y + 0.05, w - 0.4, h - 0.2, { fill: 'EEF3F8', line: null, radius: 0 }); clock(s, x + w / 2 - 0.3, y + 0.25, 0.6); }
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Zitten, staan, liggen, hangen', sub: 'Les verbes de position', line: 'Waar is mijn sleutel? — Hij ligt op tafel.',
    visual: (s) => {
      ['staan', 'liggen', 'zitten', 'hangen'].forEach((k, i) => {
        const x = 7.05 + (i % 2) * 2.9; const y = 0.95 + Math.floor(i / 2) * 1.85;
        d.rect(s, x, y, 2.7, 1.7, { fill: 'FFFFFF', line: null, radius: 0.12, shadow: true });
        pose(s, k, x + 0.15, y + 0.1, 1.3, 1.45);
        d.t(s, k, x + 1.4, y, 1.25, 1.7, { size: 20, bold: true, color: C[k], valign: 'middle', head: true });
      });
      d.rect(s, 7.05, 4.85, 5.6, 0.95, { fill: 'FFFFFF', line: null, radius: 0.15, shadow: true });
      d.ill(s, 'key', 7.25, 5.0, 0.65, 0.65);
      d.t(s, 'Waar **is** mijn sleutel?', 8.0, 4.85, 4.5, 0.95, { size: 24, valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaMapMarkerAlt', h: 'Situer', t: 'Je dis où se trouve une chose : //De klok hangt aan de muur.//', color: C.staan },
      { icon: 'FaHandPaper', h: 'Choisir', t: 'Je distingue la position et l’action : //ligt / legt//.', color: C.liggen },
      { icon: 'FaHome', h: 'Décrire', t: 'Je décris mon bureau et je range.', color: C.zitten },
    ],
    band: 'Ces quatre verbes remplacent très souvent //zijn// : //Waar is…?// appelle //ligt, staat, zit// ou //hangt//.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — où sont les choses ?' });
    const V = [['liggen', 'Le livre **est** sur la table.', 'Het boek **ligt** op tafel.'], ['staan', 'La bouteille **est** sur la table.', 'De fles **staat** op tafel.'], ['hangen', 'L’horloge **est** au mur.', 'De klok **hangt** aan de muur.'], ['zitten', 'La clé **est** dans le sac.', 'De sleutel **zit** in de tas.']];
    const w = (12.13 - 3 * 0.25) / 4;
    V.forEach(([k, fr, nl], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.75, w, 3.6, { fill: 'bg1', line: C[k], lw: 2, shadow: true });
      const sx = x + w / 2; const sy = 1.9;
      if (k === 'liggen') { d.rect(s, x + 0.3, sy + 1.45, w - 0.6, 0.12, { fill: WOOD, line: null, radius: 0 }); d.ill(s, 'open-book', sx - 0.55, sy + 0.55, 1.1, 1.1); }
      if (k === 'staan') { d.rect(s, x + 0.3, sy + 1.45, w - 0.6, 0.12, { fill: WOOD, line: null, radius: 0 }); bottle(s, sx - 0.25, sy - 0.18, false); }
      if (k === 'hangen') { d.rect(s, x + 0.3, sy, w - 0.6, 1.57, { fill: 'EEF3F8', line: null, radius: 0 }); clock(s, sx - 0.5, sy + 0.25, 1.0); }
      if (k === 'zitten') { d.ill(s, 'handbag', sx - 0.75, sy + 0.05, 1.5, 1.5); d.ill(s, 'key', sx - 0.15, sy + 0.25, 0.55, 0.55); }
      d.t(s, fr, x + 0.15, 3.65, w - 0.3, 0.6, { size: 14, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `//${nl.replace(/\*\*(\w+)\*\*/, (m, v) => `**${v}**`)}//`, x + 0.15, 4.25, w - 0.3, 0.95, { size: 19, align: 'center', valign: 'middle', color: 'tx1' });
      d.chip(s, k, x + w / 2 - 0.5, 5.2, C[k], 0.32, 12);
    });
    d.rect(s, 0.6, 5.6, 12.13, 1.25, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.78, 0.9, 0.9);
    d.t(s, ['En français : « **est** » × 4. En néerlandais : **4 verbes** !', 'Quelle est la logique ?'], 2.0, 5.6, 10.5, 1.25, { size: 20, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 les quatre positions (S14)
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Les quatre positions' });
    const P = [
      ['staan', 'debout, sur sa base', ['De fles **staat** op tafel.', 'De boeken **staan** in de kast.', 'De auto **staat** in de garage.']],
      ['liggen', 'à plat, couché', ['De pen **ligt** op het bureau.', 'De krant **ligt** op de stoel.', 'Ik **lig** in bed.']],
      ['zitten', 'dans un contenant (sac, poche, boîte)', ['Mijn sleutel **zit** in mijn tas.', 'Er **zit** koffie in de thermos.']],
      ['hangen', 'suspendu, accroché', ['De klok **hangt** aan de muur.', 'Mijn jas **hangt** aan de kapstok.']],
    ];
    const w = (12.13 - 3 * 0.2) / 4;
    P.forEach(([k, def, ex], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 1.7, w, 5.15, { fill: 'bg1', line: C[k], lw: 2, shadow: true });
      d.rect(s, x, 1.7, w, 0.6, { fill: C[k], line: null, radius: 0.08 });
      d.t(s, k.toUpperCase(), x, 1.7, w, 0.6, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true, cs: 2 });
      pose(s, k, x + w / 2 - 0.8, 2.4, 1.6, 1.45);
      d.t(s, def, x + 0.1, 3.9, w - 0.2, 0.5, { size: 15, bold: true, color: C[k], align: 'center', valign: 'middle' });
      d.t(s, ex.map((e) => `//${e}//`), x + 0.15, 4.45, w - 0.3, 2.3, { size: 16, gap: 8, valign: 'top' });
    });
  }

  // ---------------------------------------------------------------- 5 même objet, autre position
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Même objet, autre position' });
    [[0.6, 'bottle'], [6.81, 'book']].forEach(([x, obj]) => {
      d.rect(s, x, 1.7, 5.92, 3.55, { fill: 'bg2', line: BORDER });
      [0, 1].forEach((j) => {
        const cx = x + 0.4 + j * 2.95;
        if (obj === 'bottle') {
          d.rect(s, cx, 3.55, 2.35, 0.1, { fill: WOOD, line: null, radius: 0 });
          bottle(s, j ? cx + 0.35 : cx + 0.9, 1.95, !!j);
        } else {
          if (!j) {
            d.rect(s, cx, 1.95, 2.35, 1.7, { fill: null, line: '9C7A50', lw: 2, radius: 0.02 });
            [0, 1, 2].forEach((b) => book(s, cx + 0.2 + b * 0.4, 2.02, false, ['accent4', 'accent2', 'accent3'][b]));
          } else {
            d.rect(s, cx, 3.55, 2.35, 0.1, { fill: WOOD, line: null, radius: 0 });
            book(s, cx + 0.5, 1.95, true);
          }
        }
        const verb = j ? 'ligt' : 'staat';
        d.chip(s, verb, cx + 1.17 - 0.4, 3.85, j ? C.liggen : C.staan, 0.36, 14);
      });
      d.t(s, '⇄', x + 2.5, 2.35, 0.9, 0.9, { size: 30, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      const L = obj === 'bottle' ? ['De fles **staat** op tafel.', 'De fles **ligt** op tafel.'] : ['Het boek **staat** in de kast.', 'Het boek **ligt** op tafel.'];
      d.t(s, L.map((e) => `//${e}//`), x + 0.3, 4.35, 5.4, 0.85, { size: 17, valign: 'middle', gap: 2 });
    });
    band(s, 'On regarde la **position de l’objet à ce moment-là**, pas l’objet lui-même. //Mijn gsm **zit** in mijn zak · **ligt** op tafel.//', 5.5, 1.0, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 6 zitten
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'Zitten : dedans… et les personnes' });
    [['DEDANS', [['purse', 'Het geld **zit** in mijn portemonnee.'], ['honey-pot', 'De suiker **zit** in de pot.'], ['card-file-box', 'De documenten **zitten** in de la.']], 0.6],
      ['LES PERSONNES', [['chair', 'Karim **zit** op zijn stoel.'], ['train', 'Ik **zit** in de trein.'], ['busts-in-silhouette', 'An **zit** in een vergadering.']], 6.81]].forEach(([h, rows, x]) => {
      d.rect(s, x, 1.7, 5.92, 4.1, { fill: 'bg1', line: C.zitten, lw: 2, shadow: true });
      d.rect(s, x, 1.7, 5.92, 0.55, { fill: C.zitten, line: null, radius: 0.08 });
      d.t(s, h, x, 1.7, 5.92, 0.55, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      rows.forEach(([il, t], i) => {
        const y = 2.4 + i * 1.12;
        d.ill(s, il, x + 0.25, y + 0.1, 0.85, 0.85);
        d.t(s, `//${t}//`, x + 1.3, y, 4.5, 1.05, { size: 19, valign: 'middle' });
      });
    });
    band(s, '//Waar **zit** je?// = Où es-tu ? (familier, très courant au téléphone en Flandre) · //de la// = le tiroir', 6.05, 0.8, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 7 piège être
  {
    const s = d.page({ g: 7, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : « être » ne suffit pas' });
    d.rect(s, 0.6, 1.7, 12.13, 4.4, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const R = [['key', '« Mes clés **sont** dans mon sac. »', 'Mijn sleutels zijn in mijn tas.', 'Mijn sleutels **##zitten##** in mijn tas.'], ['framed-picture', '« Le tableau **est** au mur. »', 'Het schilderij is aan de muur.', 'Het schilderij **%%hangt%%** aan de muur.'],
      ['cityscape', '« Bruxelles **se trouve** en Belgique. »', null, 'Brussel **<<ligt>>** in België.'], ['page-facing-up', '« Qu’est-ce qui **est** écrit ? »', null, 'Wat **^^staat^^** er?']];
    R.forEach(([il, fr, ko, ok], i) => {
      const y = 2.3 + i * 0.94;
      d.ill(s, il, 0.85, y + 0.1, 0.65, 0.65);
      d.t(s, fr, 1.6, y, 3.8, 0.85, { size: 16, valign: 'middle' });
      if (ko) d.t(s, `✗ //{{${ko}}}//`, 5.45, y, 3.0, 0.85, { size: 13, color: 'accent6', valign: 'middle' });
      d.line(s, 8.45, y + 0.42, 8.7, y + 0.42, { color: 'accent3', lw: 2 });
      d.rect(s, 8.75, y + 0.08, 3.85, 0.7, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.85, y + 0.08, 3.7, 0.7, { size: 17, valign: 'middle' });
    });
    band(s, 'Villes, pays : //liggen// (//Gent ligt aan de Schelde//) · un texte : //staan// (//Het staat in de mail//)', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 8 prépositions
  {
    const s = d.page({ g: 8, tag: 'VOCABULAIRE', title: 'Les prépositions de lieu' });
    const P = ['op', 'in', 'onder', 'naast', 'voor', 'achter', 'tussen', 'boven', 'aan'];
    const w = 2.5; const h = 1.48;
    P.forEach((p, i) => {
      const x = 0.6 + (i % 3) * (w + 0.15); const y = 1.7 + Math.floor(i / 3) * (h + 0.12);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: BORDER, shadow: true });
      vignette(s, p, x + 0.05, y + 0.05, w - 1.15, h - 0.1);
      d.t(s, `**${p}**`, x + w - 1.12, y, 1.08, h, { size: 18, color: 'tx2', valign: 'middle', align: 'center' });
    });
    d.rect(s, 8.8, 1.7, 3.93, 4.68, { fill: 'bg2', line: BORDER });
    d.t(s, 'EN PHRASE', 9.0, 1.8, 3.5, 0.32, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, ['//De bal **ligt onder** de doos.//', '//De lamp **hangt boven** de tafel.//', '//De printer **staat naast** de kast.//', '//De klok **hangt aan** de muur.//'], 9.0, 2.2, 3.55, 4.05, { size: 18, gap: 14, valign: 'middle' });
    d.t(s, '//op// = sur (contact) · //boven// = au-dessus (sans contact) · //aan// = accroché à · //tussen// = entre', 0.6, 6.5, 12.13, 0.38, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 9 position ou action
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'Position ou action ?' });
    [['FaHandPaper', 'ACTION — je mets', 0.6], ['FaMapMarkerAlt', 'POSITION — le résultat', 7.0]].forEach(([ic, h, x]) => {
      d.icon(s, ic, 'tx2', x, 1.72, 0.38);
      d.t(s, h, x + 0.5, 1.7, 5, 0.42, { size: 15, bold: true, color: 'tx2', cs: 2, valign: 'middle' });
    });
    const R = [['liggen', 'Ik **leg** het boek op tafel.', 'Het boek **ligt** op tafel.'], ['staan', 'Ik **zet** de vaas op tafel.', 'De vaas **staat** op tafel.'], ['hangen', 'Ik **hang** mijn jas aan de kapstok.', 'Mijn jas **hangt** aan de kapstok.'], ['zitten', 'Ik **stop** de sleutel in mijn tas.', 'De sleutel **zit** in mijn tas.']];
    R.forEach(([k, a, b], i) => {
      const y = 2.25 + i * 0.95;
      d.rect(s, 0.6, y, 5.95, 0.8, { fill: 'bg1', line: C[k], lw: 2, dash: 'dash', radius: 0.08 });
      d.t(s, `//${a}//`, 0.8, y, 5.6, 0.8, { size: 19, valign: 'middle' });
      d.line(s, 6.6, y + 0.4, 6.95, y + 0.4, { color: C[k], lw: 3 });
      d.rect(s, 7.0, y, 5.73, 0.8, { fill: C[k], tr: 85, line: C[k], lw: 2, radius: 0.08 });
      d.t(s, `//${b}//`, 7.2, y, 5.4, 0.8, { size: 19, valign: 'middle' });
    });
    band(s, '//hangen// sert aux deux · //stoppen in// = mettre dans · personnes : //gaan zitten / liggen / staan// (M16)', 6.1, 0.75, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 10 piège mettre
  {
    const s = d.page({ g: 10, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : « mettre » = quatre verbes' });
    d.rect(s, 0.6, 1.7, 12.13, 4.4, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    d.rect(s, 0.85, 3.45, 2.0, 0.9, { fill: 'FFFFFF', line: 'accent6', lw: 2, radius: 0.12 });
    d.t(s, '« mettre »', 0.85, 3.45, 2.0, 0.9, { size: 22, bold: true, color: 'accent6', align: 'center', valign: 'middle' });
    const R = [['leggen', 'liggen', 'Mets le dossier sur la table.', 'Leg het dossier op tafel.'], ['zetten', 'staan', 'Mets la tasse sur la table.', 'Zet het kopje op tafel.'], ['hangen', 'hangen', 'Mets ton manteau au portemanteau.', 'Hang je jas aan de kapstok.'], ['stoppen', 'zitten', 'Mets la clé dans ton sac.', 'Stop de sleutel in je tas.'], ['aandoen', null, 'Mets ton manteau ! (enfiler)', 'Doe je jas aan! (M11)']];
    R.forEach(([v, k, fr, nl], i) => {
      const y = 2.0 + i * 0.8; const c = k ? C[k] : 'accent5';
      d.line(s, 2.9, 3.9, 3.35, y + 0.35, { color: c, lw: 2 });
      d.rect(s, 3.4, y + 0.07, 1.45, 0.56, { fill: c, line: null, radius: 0.1 });
      d.t(s, v, 3.4, y + 0.07, 1.45, 0.56, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `« ${fr} »`.replace('« Mets ton manteau ! (enfiler) »', '« Mets ton manteau ! » (enfiler)'), 5.05, y, 3.6, 0.7, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `→ //**${nl}**//`, 8.7, y, 3.95, 0.7, { size: 17, valign: 'middle' });
    });
    band(s, 'Réflexe : à la fin, l’objet sera **couché**, **debout**, **suspendu** ou **dedans** ?', 6.25, 0.62, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 11 au passé composé
  {
    const s = d.page({ g: 11, tag: 'GRAMMAIRE', title: 'Au passé composé' });
    [['POSITION', 'tx2', ['Ik heb lang **!!gezeten!!**.', 'We hebben een uur **!!gestaan!!**.', 'Het boek heeft daar **!!gelegen!!**.', 'De jas heeft daar **!!gehangen!!**.'], 0.6, 'irréguliers'],
      ['ACTION', 'accent2', ['Ik heb het boek op tafel **!!gelegd!!**.', 'Ik heb de vaas op tafel **!!gezet!!**.', 'Ik heb mijn jas aan de kapstok **!!gehangen!!**.'], 6.81, '//gelegd, gezet// : réguliers (M15)']].forEach(([h, c, L, x, note]) => {
      d.rect(s, x, 1.7, 5.92, 3.6, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.rect(s, x, 1.7, 5.92, 0.55, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, 1.7, 5.92, 0.55, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      d.t(s, L.map((e) => `//${e}//`), x + 0.3, 2.4, 5.4, 2.3, { size: 19, gap: 8, valign: 'middle' });
      d.t(s, note, x + 0.3, 4.75, 5.4, 0.45, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.5, 6.4, 1.3, { fill: 'accent6', tr: 90, line: 'accent6', lw: 1.5 });
    d.t(s, '⚠ //**gelegen**// (position) ≠ //**gelegd**// (action)', 0.8, 5.5, 6.1, 1.3, { size: 20, valign: 'middle' });
    d.rect(s, 7.2, 5.5, 5.53, 1.3, { fill: 'bg2', line: BORDER });
    d.t(s, ['Norme : //hebben// (en Flandre, on entend //Ik ben gezeten//).', 'Teaser M19 : //zat, stond, lag, hing//.'], 7.4, 5.5, 5.2, 1.3, { size: 15, gap: 6, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 12 bonus te + infinitif
  {
    const s = d.page({ g: 12, tag: '+ BONUS', title: '+ BONUS : être en train de…' });
    const V = [['man-technologist', 'Ik **zit te** werken.', 'zitten'], ['bus-stop', 'Ik **sta** op de bus **te** wachten.', 'staan'], ['person-in-bed', 'Hij **ligt te** slapen.', 'liggen']];
    const w = (12.13 - 2 * 0.25) / 3;
    V.forEach(([il, t, k], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 3.5, { fill: 'bg1', line: C[k], lw: 2, shadow: true });
      d.ill(s, il, x + w / 2 - 0.85, 1.9, 1.7, 1.7);
      d.t(s, `//${t}//`, x + 0.2, 3.75, w - 0.4, 1.2, { size: 22, align: 'center', valign: 'middle' });
    });
    band(s, '= « être **en train de**… » avec la posture · sans posture : //Ik ben **aan het** werken.//', 5.5, 0.95, 'tx2', 20);
  }

  // ---------------------------------------------------------------- 13 organigramme
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : l’organigramme de la position' });
    const diamond = (t, x, y, w, h, size = 15) => s.addText(t, { shape: d.S.DIAMOND, x, y, w, h, fill: { color: 'EEF3F8' }, line: { color: '17375E', width: 1.5 }, fontSize: size, bold: true, color: '1B2333', align: 'center', valign: 'middle', margin: 0 });
    const Q = [['C’est dans un contenant (sac, poche, boîte) ?', 'zitten', 'stoppen'], ['C’est suspendu ?', 'hangen', 'hangen'], ['C’est debout, sur sa base ?', 'staan', 'zetten']];
    Q.forEach(([q, k, act], i) => {
      const y = 1.7 + i * 1.22;
      diamond(q, 0.6, y, 4.6, 1.0, 14);
      d.line(s, 5.22, y + 0.5, 5.75, y + 0.5, { color: 'accent3', lw: 2 });
      d.t(s, 'OUI', 5.2, y + 0.12, 0.6, 0.3, { size: 12, bold: true, color: 'accent3', align: 'center' });
      d.rect(s, 5.8, y + 0.1, 3.85, 0.8, { fill: C[k], line: null });
      d.t(s, `**${k}**  ·  action : //${act}//`, 6.0, y + 0.1, 3.6, 0.8, { size: 18, color: 'bg1', valign: 'middle' });
      d.line(s, 2.9, y + 1.0, 2.9, y + 1.22, { color: 'accent5', lw: 1.75 });
      d.t(s, 'NON', 3.0, y + 0.98, 0.7, 0.26, { size: 11, bold: true, color: 'accent5' });
    });
    d.rect(s, 0.6, 5.36, 9.05, 0.9, { fill: C.liggen, line: null });
    d.t(s, 'sinon (à plat, couché) → **liggen**  ·  action : //leggen//', 0.85, 5.36, 8.7, 0.9, { size: 19, color: 'bg1', valign: 'middle' });
    d.rect(s, 9.95, 1.7, 2.78, 4.56, { fill: 'bg2', line: BORDER });
    d.t(s, 'LES PERSONNES', 9.95, 1.8, 2.78, 0.32, { size: 12, bold: true, color: 'accent5', align: 'center', cs: 2 });
    [['zitten', 'assis'], ['staan', 'debout'], ['liggen', 'couché']].forEach(([k, fr], i) => {
      const y = 2.3 + i * 1.0;
      d.rect(s, 10.15, y, 2.38, 0.5, { fill: C[k], line: null, radius: 0.08 });
      d.t(s, k, 10.15, y, 2.38, 0.5, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, fr, 10.15, y + 0.5, 2.38, 0.38, { size: 14, italic: true, color: 'accent5', align: 'center' });
    });
    d.t(s, 'action : //gaan zitten, gaan staan, gaan liggen//', 10.1, 5.3, 2.5, 0.9, { size: 13, align: 'center', valign: 'middle' });
    d.t(s, '//kast, garage// : la position compte → //De kopjes **staan** in de kast.//', 0.6, 6.4, 9.05, 0.45, { size: 15, italic: true, color: 'accent5' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Où est-il ?', '★', 'FaMapMarkerAlt'], ['Le bureau de Karim', '★★', 'FaDesktop'], ['Position ou action ?', '★★', 'FaHandPaper'], ['Les prépositions', '★', 'FaBoxOpen'],
    ['Le détective', '★★', 'FaSearch'], ['Qu’est-ce qui a changé ?', '★', 'FaExchangeAlt'], ['Le déménagement', '★★★', 'FaTruck'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 où est-il
  const ex1 = [['key', 'Mijn sleutels [[zitten]] in mijn jaszak.'], ['three-oclock', 'De klok [[hangt]] aan de muur.'], ['teacup-without-handle', 'De kopjes [[staan]] in de kast.'], ['newspaper', 'De krant [[ligt]] op de stoel.'],
    ['man-office-worker', 'Karim [[zit]] op zijn stoel.'], ['bicycle', 'De fiets [[staat]] voor de deur.'], ['euro-banknote', 'Het geld [[zit]] in mijn portemonnee.'], ['cat', 'De kat [[ligt]] op de bank te slapen.']];
  d.ex({ g: 15, title: 'Exercice 1 — Où est-il ?', stars: '★', instr: 'Complétez avec staan, liggen, zitten ou hangen (conjugué).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 4;
    ex1.forEach(([il, t], i) => {
      const x = 0.6 + (i % 2) * 6.18; const y = top + Math.floor(i / 2) * rh;
      d.rect(s, x, y + 0.06, 5.95, rh - 0.14, { fill: 'bg1', line: BORDER, shadow: true });
      d.ill(s, il, x + 0.15, y + (rh - 0.75) / 2, 0.75, 0.75);
      d.t(s, `**${i + 1}**  //${t}//`, x + 1.05, y + 0.06, 4.8, rh - 0.14, { size: 19, valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 16 ex2 le bureau de Karim
  const scene = (s, x, y, w, h) => {
    d.rect(s, x, y, w, h, { fill: 'F7F3EA', line: BORDER, radius: 0.04 });
    d.rect(s, x, y + h * 0.66, w, h * 0.34, { fill: 'E9E1CF', line: null, radius: 0 });
    d.ill(s, 'spiral-calendar', x + 0.35, y + 0.2, 0.9, 0.9);
    d.line(s, x + w - 0.75, y + 0.25, x + w - 0.75, y + h * 0.66 + 0.35, { color: '8A6A45', lw: 3, arrow: false });
    d.rect(s, x + w - 1.0, y + 0.22, 0.5, 0.06, { fill: '8A6A45', line: null, radius: 0 });
    d.ill(s, 'coat', x + w - 1.2, y + 0.3, 0.9, 0.9);
    const dy = y + h * 0.55;
    d.rect(s, x + 0.25, dy, w - 1.6, 0.14, { fill: '8A6A45', line: null, radius: 0.02 });
    d.rect(s, x + 0.4, dy + 0.14, 0.12, h * 0.4, { fill: '8A6A45', line: null, radius: 0 });
    d.rect(s, x + w - 1.6, dy + 0.14, 0.12, h * 0.4, { fill: '8A6A45', line: null, radius: 0 });
    d.ill(s, 'desktop-computer', x + 1.1, dy - 1.05, 1.1, 1.1);
    d.ill(s, 'keyboard', x + 1.15, dy - 0.38, 0.9, 0.45);
    d.ill(s, 'hot-beverage', x + 2.2, dy - 0.48, 0.5, 0.5);
    ['accent2', 'accent3', 'accent1'].forEach((c, k) => d.rect(s, x + 0.45, dy - 0.12 - k * 0.1, 0.6, 0.09, { fill: c, line: null, radius: 0.01 }));
    d.ill(s, 'man-office-worker', x + w - 2.35, dy - 0.65, 1.2, 1.2);
  };
  d.ex({ g: 16, title: 'Exercice 2 — Le bureau de Karim', stars: '★★', instr: 'Regardez le dessin et complétez avec le bon verbe de position.' }, (s, mode, top) => {
    scene(s, 0.6, top, 4.9, 6.88 - top);
    const txt = 'Op Karims bureau [[staat]] een groot scherm. Voor het scherm [[ligt]] het toetsenbord. Naast het toetsenbord [[staat]] een kopje koffie. Er [[liggen]] ook drie mappen. Aan de muur [[hangt]] een kalender. Zijn jas [[hangt]] aan de kapstok. Zijn badge [[zit]] in zijn jaszak. En Karim? Hij [[zit]] op zijn stoel te werken!';
    d.rect(s, 5.75, top, 6.98, 6.88 - top, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.t(s, txt, 6.0, top + 0.2, 6.5, 6.88 - top - 0.4, { size: 20, mode, ls: 1.35, valign: 'middle' });
  });

  // ---------------------------------------------------------------- 17 ex3 position ou action
  const ex3 = [['Ik', 'leg', 'lig', 'de documenten op je bureau.', 0], ['Je telefoon', 'legt', 'ligt', 'naast de printer.', 1], ['Kun je de stoelen in de vergaderzaal', 'staan', 'zetten', '?', 1], ['De stoelen', 'staan', 'zetten', 'al klaar.', 0],
    ['Waar', 'hang', 'hangt', 'ik mijn jas?', 0], ['Ik heb mijn sleutels op tafel', 'gelegen', 'gelegd', '.', 1], ['Het boek heeft de hele dag op tafel', 'gelegen', 'gelegd', '.', 0], ['', 'Zit', 'Zet', 'de fles water op tafel, alsjeblieft.', 1]];
  d.ex({ g: 17, title: 'Exercice 3 — Position ou action ?', stars: '★★', instr: 'Choisissez le bon verbe.' }, (s, mode, top) => {
    const items = ex3.map(([a, o1, o2, b, k]) => {
      const mid = mode === 'q' ? `(${o1} / ${o2})` : `**<<${k ? o2 : o1}>>**`;
      const tail = /^[.?]/.test(b) ? b : ` ${b}`;
      return `//${a ? a + ' ' : ''}${mid}${tail}//`;
    });
    d.list(s, items, mode, { y: top + 0.2, w: 12.13, h: 6.88 - top - 0.2, cols: 2, size: 21, gap: 22 });
  });

  // ---------------------------------------------------------------- 18 ex4 prépositions
  const ex4 = [['op', 'ligt'], ['in', 'zit'], ['onder', 'ligt'], ['naast', 'ligt'], ['voor', 'ligt'], ['achter', 'ligt'], ['tussen', 'ligt'], ['boven', 'hangt']];
  d.ex({ g: 18, title: 'Exercice 4 — Les prépositions', stars: '★', instr: 'Où est la balle ? Complétez avec la bonne préposition.' }, (s, mode, top) => {
    const w = (12.13 - 3 * 0.2) / 4; const h = (6.88 - top - 0.2) / 2;
    ex4.forEach(([p, v], i) => {
      const x = 0.6 + (i % 4) * (w + 0.2); const y = top + Math.floor(i / 4) * (h + 0.2);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: BORDER, shadow: true });
      vignette(s, p, x + w / 2 - 1.0, y + 0.1, 2.0, h - 1.0);
      const obj = p === 'tussen' ? 'de twee dozen' : 'de doos';
      d.t(s, `**${i + 1}**  //De bal ${v} [[${p}]] ${obj}.//`, x + 0.12, y + h - 0.85, w - 0.24, 0.75, { size: 16, align: 'center', valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 19 ex5 détective
  d.ex({ g: 19, title: 'Exercice 5 — Le détective', stars: '★★', instr: 'Sofie travaille à la maison et écrit à Karim. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'Sofie → Karim', 0.85, top, 8, 0.5, { size: 14, bold: true, color: 'bg1', valign: 'middle' });
    const txt = '//Hoi Karim, ik werk vandaag thuis. Kun je iets voor me zoeken? Mijn agenda {{is}}++ ligt++ op mijn bureau. Mijn sleutels {{liggen}}++ zitten++ in mijn jaszak, en mijn jas hangt aan de kapstok. Mijn bril {{staat}}++ ligt++ naast de computer en mijn gsm {{legt}}++ ligt++ op de kast. Kun je mijn agenda in mijn tas {{zitten}}++ stoppen++? Dank je!//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 21, mode, ls: 1.25, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurre : //mijn jas hangt aan de kapstok//. //de bril// = les lunettes (singulier !).', 9.9, top + 3.05, 2.83, 1.6, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 20 ex6 qu'est-ce qui a changé
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Qu’est-ce qui a changé ?', stars: '★' });
    const x = 0.6; const y = 1.7; const w = 7.3; const h = 5.15;
    d.rect(s, x, y, w, h, { fill: 'F7F3EA', line: BORDER, radius: 0.04 });
    d.rect(s, x, y + h * 0.68, w, h * 0.32, { fill: 'E9E1CF', line: null, radius: 0 });
    clock(s, x + 0.5, y + 0.3, 0.8);
    d.ill(s, 'window', x + 2.7, y + 0.2, 1.4, 1.4);
    d.ill(s, 'framed-picture', x + 5.2, y + 0.3, 1.0, 1.0);
    const ty = y + h * 0.55;
    d.rect(s, x + 1.0, ty, 4.4, 0.14, { fill: '8A6A45', line: null, radius: 0.02 });
    d.rect(s, x + 1.2, ty + 0.14, 0.12, 1.3, { fill: '8A6A45', line: null, radius: 0 });
    d.rect(s, x + 5.1, ty + 0.14, 0.12, 1.3, { fill: '8A6A45', line: null, radius: 0 });
    d.ill(s, 'laptop', x + 1.3, ty - 0.75, 0.8, 0.8);
    d.ill(s, 'potted-plant', x + 4.3, ty - 0.95, 0.95, 0.95);
    d.ill(s, 'open-book', x + 2.4, ty - 0.45, 0.6, 0.6);
    d.ill(s, 'teacup-without-handle', x + 3.3, ty - 0.45, 0.5, 0.5);
    d.ill(s, 'chair', x + 5.6, ty - 0.1, 1.3, 1.3);
    d.ill(s, 'handbag', x + 2.6, ty + 0.85, 0.8, 0.8);
    d.ill(s, 'stopwatch', 8.2, 1.75, 0.9, 0.9);
    d.t(s, 'Kim’s game', 9.2, 1.75, 3.53, 0.9, { size: 22, bold: true, color: 'accent1', head: true, valign: 'middle' });
    d.t(s, ['**1.** Observez la classe pendant 1 minute.', '**2.** Fermez les yeux : l’enseignant·e déplace 3 objets.', '**3.** Dites ce qui a changé :'], 8.2, 2.8, 4.53, 2.0, { size: 16, gap: 8 });
    d.rect(s, 8.2, 4.85, 4.53, 2.0, { fill: 'bg2', line: BORDER });
    d.t(s, ['//Je hebt de pen onder de stoel **gelegd**!//', '//De tas **staat** nu op de tafel.//', '//De klok **hangt** niet meer aan de muur!//'], 8.4, 4.85, 4.2, 2.0, { size: 16, gap: 6, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 21 ex7 déménagement
  d.roleplay({
    g: 21, title: 'Exercice 7 — Le déménagement',
    scenario: 'Peeters & Co déménage. An a le plan du nouveau bureau ; Karim place les objets sur un plan vide.',
    a: '**An** : décrivez votre plan et donnez des ordres : //Zet… · Hang… · Leg…//',
    b: '**Karim** : dessinez sur le plan vide et vérifiez : //Staat de printer naast de deur?//',
    bank: '//Zet de kast tegen de muur. · Hang de klok boven de deur. · Leg de mappen in de kast. · Waar moet de printer staan? · Staat de plant goed zo? · Ja, perfect!//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.55, { fill: 'purple', line: null, radius: 0.04 });
      d.t(s, 'NIEUW KANTOOR', x + 0.15, y, w - 0.3, 0.55, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
      const gx = x + 0.25; const gy = y + 0.75; const gw = w - 0.5; const gh = 2.3;
      d.rect(s, gx, gy, gw, gh, { fill: 'F7F7F7', line: 'accent5', lw: 2, radius: 0 });
      for (let k = 1; k < 6; k++) d.line(s, gx + (gw / 6) * k, gy, gx + (gw / 6) * k, gy + gh, { color: 'E2E6EC', lw: 0.75, arrow: false });
      for (let k = 1; k < 4; k++) d.line(s, gx, gy + (gh / 4) * k, gx + gw, gy + (gh / 4) * k, { color: 'E2E6EC', lw: 0.75, arrow: false });
      d.rect(s, gx + gw / 2 - 0.35, gy + gh - 0.05, 0.7, 0.1, { fill: 'FFFFFF', line: null, radius: 0 });
      d.t(s, 'deur', gx + gw / 2 - 0.4, gy + gh + 0.02, 0.8, 0.25, { size: 10, color: 'accent5', align: 'center' });
      const O = [['package', 'het bureau'], ['file-cabinet', 'de kast'], ['printer', 'de printer'], ['potted-plant', 'de plant'], ['three-oclock', 'de klok'], ['coat', 'de kapstok'], ['memo', 'het whiteboard'], ['hot-beverage', 'de koffiemachine']];
      O.forEach(([il, t], i) => {
        const ox = x + 0.2 + (i % 2) * (w / 2 - 0.1); const oy = y + 3.4 + Math.floor(i / 2) * 0.45;
        d.ill(s, il, ox, oy, 0.38, 0.38);
        d.t(s, `//${t}//`, ox + 0.45, oy - 0.02, w / 2 - 0.6, 0.42, { size: 12, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['//De klok …… aan de muur. · Mijn sleutels …… in mijn tas.//', 'Position ou action : //Ik (leg / lig) het dossier op tafel.//', 'Traduisez : « Mets la bouteille sur la table. »'],
    self: ['Situer', 'Choisir', 'Décrire'],
    teaser: { icon: 'FaCalendarAlt', text: '**Volgende keer : De toekomst** — //Wat ga je morgen doen?//' },
  });
}

module.exports = { meta, build };
