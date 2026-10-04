// Uitspraak! — La prononciation en 5 séances d'entraînement (3 diapos par séance + corrigés)
const { BORDER, plain, textH } = require('../lib');

const meta = {
  n: 'U', slug: 'Uitspraak', title: 'Uitspraak! — La prononciation en 5 séances', short: 'Uitspraak!',
  template: 'uitspraak_5_seances.md', file: 'Uitspraak_5_seances.pptx',
  docTitle: 'Uitspraak! — La prononciation en 5 séances',
  foot: 'Néerlandais 1 · UE1 · Uitspraak! · 5 séances de prononciation',
};

const SES = ['accent2', 'accent4', 'accent1', 'accent3', 'purple'];
const SNAME = ['Long ou court ?', 'Les sons doubles', 'Les consonnes-pièges', 'Mots courts, mots longs', 'La phrase qui chante'];
const STEP = ['① ÉCOUTER', '② S’ENTRAÎNER', '③ JOUER'];
const LONG = 'accent3'; // vert = son long
const SHORT = 'accent4'; // framboise = son court
const ACC = 'accent1'; // orange = syllabe accentuée

function build(d) {
  // ------------------------------------------------------------ helpers
  const tracker = (s, k) => {
    const x0 = 10.48; const y = 0.25; const dd = 0.36; const gap = 0.46;
    d.line(s, x0 + dd / 2, y + dd / 2, x0 + 4 * gap + dd / 2, y + dd / 2, { color: BORDER, lw: 2, arrow: false });
    for (let i = 0; i < 5; i++) {
      const on = i === k;
      d.oval(s, x0 + i * gap, y, dd, dd, { fill: on ? SES[i] : 'FFFFFF', line: on ? null : SES[i], lw: 1.5 });
      d.t(s, String(i + 1), x0 + i * gap, y, dd, dd, { size: 12, bold: true, color: on ? 'bg1' : SES[i], align: 'center', valign: 'middle' });
    }
  };
  const sp = (g, k, step, title, stepLabel) => {
    const s = d.page({ g, tag: `SÉANCE ${k + 1} · ${stepLabel || STEP[step]}`, tagColor: SES[k], title });
    tracker(s, k);
    return s;
  };
  const instr = (s, txt) => {
    const top = 1.62;
    d.icon(s, 'FaHandPointRight', 'accent1', 0.6, top + 0.04, 0.3);
    const ih = textH([plain(txt)], 11.6, 17, 0, 1.2, 0.5);
    d.t(s, txt, 1.05, top, 11.68, ih, { size: 17, italic: true, color: 'accent5' });
    return top + ih + 0.18;
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const chipBox = (s, txt, x, y, w, h, c, o = {}) => {
    d.rect(s, x, y, w, h, { fill: c, tr: o.tr ?? 86, line: c, lw: o.lw ?? 1.5, radius: 0.12 });
    d.t(s, txt, x, y, w, h, { size: o.size || 20, bold: o.bold, italic: o.italic ?? true, color: o.color || 'tx1', align: 'center', valign: 'middle', fit: o.fit, max: o.size || 20, min: 11 });
  };
  const colCard = (s, x, y, w, h, c, head, lines, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'bg1', line: c, lw: 2, shadow: true, radius: 0.08 });
    d.rect(s, x, y, w, 0.55, { fill: c, line: null, radius: 0.08 });
    d.t(s, head, x + 0.15, y, w - 0.3, 0.55, { size: o.headSize || 16, bold: true, color: 'bg1', valign: 'middle', align: o.align || 'left' });
    d.t(s, lines, x + 0.2, y + 0.68, w - 0.4, h - 0.8, { size: o.size || 16, gap: o.gap ?? 6, valign: o.valign || 'top', fit: true, max: o.size || 16, min: 11 });
  };

  // ------------------------------------------------------------ 1 cover
  d.cover({
    g: 1, chip: 'PRONONCIATION · 5 SÉANCES', title: 'Uitspraak!', sub: 'La prononciation en 5 séances d’entraînement', line: 'kat · kaat · kijk · goed · gezellig',
    visual: (s) => {
      const P = [[7.6, 4.75], [8.6, 3.95], [9.6, 3.15], [10.6, 2.35], [11.6, 1.55]];
      for (let i = 0; i < 4; i++) d.line(s, P[i][0] + 0.45, P[i][1] + 0.45, P[i + 1][0] + 0.45, P[i + 1][1] + 0.45, { color: 'FFFFFF', lw: 2, dash: 'dash', arrow: false });
      P.forEach(([x, y], i) => {
        d.oval(s, x, y, 0.9, 0.9, { fill: SES[i] });
        d.t(s, String(i + 1), x, y, 0.9, 0.9, { size: 26, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
        if (i === 0) d.t(s, SNAME[i], x + 0.98, y + 0.25, 1.5, 0.45, { size: 11, color: 'bg1', valign: 'middle' });
        else d.t(s, SNAME[i], x - 1.55, y + 0.05, 1.47, 0.55, { size: 11, color: 'bg1', align: 'right', valign: 'middle' });
      });
      d.ill(s, 'ear', 7.75, 5.75, 0.6, 0.6);
      d.t(s, '//klank//', 8.4, 5.75, 1.2, 0.6, { size: 16, color: 'bg2', valign: 'middle' });
      d.ill(s, 'speaking-head', 11.85, 0.45, 0.85, 0.85);
      d.t(s, '//zin//', 11.05, 0.55, 0.75, 0.6, { size: 16, color: 'bg2', valign: 'middle', align: 'right' });
    },
  });

  // ------------------------------------------------------------ 2 parcours
  d.section('Le parcours');
  {
    const s = d.page({ g: 2, tag: 'MISSIE', title: 'Le parcours — du son à la phrase' });
    const EX = [['//man / maan//', 'voyelles courtes et longues'], ['//huis · tijd · boek//', 'ij, ui, ou, eu, oe, ie…'], ['//goed · hoor · meisje//', 'g, h, j, ng, sj, d final…'], ['//kaas → vergadering//', 'couper, porte, accent, e muet'], ['//Hoe gaat ’t?//', 'rythme, accent, mots qui fondent']];
    const w = (12.13 - 4 * 0.2) / 5;
    d.line(s, 0.6 + w / 2, 2.15, 0.6 + 4 * (w + 0.2) + w / 2, 2.15, { color: BORDER, lw: 3, dash: 'dash', arrow: false });
    EX.forEach(([ex, sub], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 2.15, w, 2.55, { fill: 'bg2', line: SES[i], lw: 1.75, radius: 0.1 });
      d.oval(s, x + w / 2 - 0.4, 1.75, 0.8, 0.8, { fill: SES[i] });
      d.t(s, String(i + 1), x + w / 2 - 0.4, 1.75, 0.8, 0.8, { size: 24, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, `**${SNAME[i]}**`, x + 0.12, 2.65, w - 0.24, 0.75, { size: 17, color: SES[i], align: 'center', valign: 'middle', head: true });
      d.t(s, ex, x + 0.12, 3.4, w - 0.24, 0.55, { size: 16, align: 'center', valign: 'middle' });
      d.t(s, sub, x + 0.12, 3.95, w - 0.24, 0.65, { size: 13, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.t(s, 'CHAQUE SÉANCE = 3 TEMPS', 0.6, 4.95, 7, 0.32, { size: 12, bold: true, color: 'accent5', cs: 2 });
    [['ear', 'Écouter', 'je distingue les sons'], ['speaking-head', 'S’entraîner', 'je classe, je lis, je répète'], ['game-die', 'Jouer', 'je relève un défi en équipe']].forEach(([il, h, t], i) => {
      const x = 0.6 + i * 2.75;
      d.rect(s, x, 5.35, 2.6, 1.0, { fill: 'bg1', line: BORDER, radius: 0.1 });
      d.ill(s, il, x + 0.12, 5.5, 0.7, 0.7);
      d.t(s, [`**${i + 1} · ${h}**`, t], x + 0.9, 5.35, 1.65, 1.0, { size: 13, gap: 1, valign: 'middle' });
    });
    d.rect(s, 8.95, 4.95, 3.78, 1.4, { fill: 'FDF1E6', line: 'accent1', lw: 1.25, radius: 0.1 });
    d.t(s, '**Matériel**', 9.1, 5.0, 3.5, 0.4, { size: 14, color: 'accent1' });
    d.rect(s, 9.15, 5.5, 0.3, 0.4, { fill: SHORT, line: null, radius: 0 });
    d.rect(s, 9.45, 5.5, 0.3, 0.4, { fill: LONG, line: null, radius: 0 });
    d.t(s, 'carton framboise / vert (M1)', 9.85, 5.45, 2.85, 0.5, { size: 13, valign: 'middle' });
    d.ill(s, 'game-die', 9.15, 5.92, 0.36, 0.36);
    d.ill(s, 'stopwatch', 9.55, 5.92, 0.36, 0.36);
    d.t(s, 'un dé · un chronomètre', 9.98, 5.88, 2.7, 0.45, { size: 13, valign: 'middle' });
    d.t(s, 'Le but : être compris et ne pas confondre les sons — pas l’accent parfait !', 0.6, 6.45, 12.13, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ============================================================ SÉANCE 1
  d.section('Séance 1 · Long ou court ?');
  // ------------------------------------------------------------ 3 oreille d'or
  {
    const s = sp(3, 0, 0, 'Oreille d’or : court ou long ?');
    const top = instr(s, 'L’enseignant·e lit un mot par paire : carton **framboise** = court, **vert** = long. Puis, à deux !');
    // rappel
    d.rect(s, 0.6, top, 3.0, 1.75, { fill: SHORT, tr: 90, line: SHORT, lw: 1.5, radius: 0.1 });
    d.t(s, ['**%%COURT%%**', 'porte fermée', '//kat · man · bos//'], 0.75, top + 0.05, 2.7, 1.65, { size: 16, gap: 4, valign: 'middle', align: 'center' });
    d.rect(s, 0.6, top + 1.9, 3.0, 1.75, { fill: LONG, tr: 90, line: LONG, lw: 1.5, radius: 0.1 });
    d.t(s, ['**<<LONG>>**', 'porte ouverte ou voyelle doublée', '//ma·ken · maan · boos//'], 0.75, top + 1.95, 2.7, 1.65, { size: 16, gap: 4, valign: 'middle', align: 'center' });
    // paires
    const P = [['a', [['man', 'maan'], ['vak', 'vaak'], ['lat', 'laat']]], ['e', [['pen', 'peen'], ['ben', 'been'], ['hel', 'heel']]], ['i', [['vis', 'vies'], ['lid', 'lied'], ['zit', 'ziet']]], ['o', [['bos', 'boos'], ['bom', 'boom'], ['pot', 'poot']]], ['u', [['mus', 'muur'], ['kus', 'kuur'], ['zus', 'zuur']]]];
    const pw = (12.73 - 4.5 - 2 * 0.2) / 3; const rh = 0.66; const step = (3.65 - rh) / 4;
    P.forEach(([v, pairs], r) => {
      const y = top + r * step;
      d.oval(s, 3.85, y + 0.05, 0.56, 0.56, { fill: 'tx2' });
      d.t(s, v, 3.85, y + 0.05, 0.56, 0.56, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      pairs.forEach(([a, b], k) => {
        const x = 4.5 + k * (pw + 0.2);
        chipBox(s, a, x, y, pw / 2 - 0.05, rh, SHORT, { size: 20 });
        chipBox(s, b, x + pw / 2 + 0.05, y, pw / 2 - 0.05, rh, LONG, { size: 20 });
      });
    });
    band(s, '//u// ≠ //uu// : //mus// « meus », bref · //muur// « mur », long — le //i// long s’écrit toujours //ie//', 6.1, 0.72, 'tx2', 17);
  }

  // ------------------------------------------------------------ 4 les paniers
  {
    const s = sp(4, 0, 1, 'Les paniers : porte ouverte ou fermée ?');
    const top = instr(s, 'Rangez chaque mot dans le bon panier, puis lisez chaque panier à voix haute.');
    const W = ['tak', 'maken', 'raam', 'katten', 'nek', 'lezen', 'keel', 'pennen', 'bol', 'wonen', 'roos', 'bommen', 'stuk', 'muren', 'vuur', 'zussen'];
    const cw = 1.72; const ch = 0.72;
    W.forEach((w, i) => {
      const c = i % 4; const r = Math.floor(i / 4);
      const x = 0.6 + c * (cw + 0.18); const y = top + 0.05 + r * 0.88;
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, radius: 0.1, shadow: true, rotate: [-3, 2, -1, 3][(i + r) % 4] });
      d.t(s, `//${w}//`, x, y, cw, ch, { size: 21, align: 'center', valign: 'middle' });
    });
    [[SHORT, 'COURT', 'porte fermée', top], [LONG, 'LONG', 'porte ouverte', top + 1.75]].forEach(([c, h, sub, y]) => {
      d.rect(s, 8.35, y, 4.38, 1.6, { fill: c, tr: 90, line: c, lw: 2, dash: 'dash', radius: 0.12 });
      d.ill(s, 'basket', 8.5, y + 0.3, 1.0, 1.0);
      d.t(s, [`**${h}**`, sub], 9.65, y, 2.95, 1.6, { size: 20, color: c, valign: 'middle', gap: 2 });
    });
    band(s, 'Une seule voyelle à la fin de la syllabe = **long** : //ma·ken// « maa-ken » · deux consonnes = porte fermée : //kat·ten//', 5.85, 0.95, 'tx2', 17);
  }

  // ------------------------------------------------------------ 5 le duel des phrases
  {
    const s = sp(5, 0, 2, 'Le duel des phrases');
    const top = instr(s, 'Lisez la phrase 3 fois, de plus en plus vite. L’autre équipe crie « **KORT!** » ou « **LANG!** »');
    const F = ['Katten willen lekker snorren.', 'Jagers doden grote hazen.', 'Mussen hebben dikke nekken.', 'Apen eten zure noten.', 'Biggen kunnen schattig knorren.', 'Dikke mannen hebben dunne sokken.'];
    const w = 4.62; const h = 1.08;
    F.forEach((f, i) => {
      const c = i % 2; const r = Math.floor(i / 2);
      const x = 0.6 + c * (w + 0.2); const y = top + r * (h + 0.16);
      d.rect(s, x, y, w, h, { fill: 'bg2', line: BORDER, radius: 0.1 });
      d.num(s, i + 1, x + 0.15, y + 0.12, 0.4, 'accent2', 14);
      d.t(s, `//${f}//`, x + 0.68, y + 0.05, w - 0.8, 0.62, { size: 16, valign: 'middle' });
      d.rect(s, x + w - 2.05, y + 0.68, 0.9, 0.3, { fill: 'FFFFFF', line: SHORT, lw: 1, radius: 0.15 });
      d.t(s, 'kort', x + w - 2.05, y + 0.68, 0.9, 0.3, { size: 11, bold: true, color: SHORT, align: 'center', valign: 'middle' });
      d.rect(s, x + w - 1.05, y + 0.68, 0.9, 0.3, { fill: 'FFFFFF', line: LONG, lw: 1, radius: 0.15 });
      d.t(s, 'lang', x + w - 1.05, y + 0.68, 0.9, 0.3, { size: 11, bold: true, color: LONG, align: 'center', valign: 'middle' });
    });
    const rx = 10.2;
    d.ill(s, 'stopwatch', rx + 0.75, top, 1.0, 1.0);
    ['A', 'B'].forEach((t, i) => {
      d.rect(s, rx + i * 1.3, top + 1.15, 1.2, 1.25, { fill: i ? 'FDF1E6' : 'EAF1F8', line: i ? 'accent1' : 'accent2', lw: 1.5, radius: 0.1 });
      d.t(s, [`**${t}**`, '…… pts'], rx + i * 1.3, top + 1.15, 1.2, 1.25, { size: 16, align: 'center', valign: 'middle', color: i ? 'accent1' : 'accent2', gap: 2 });
    });
    d.t(s, ['**1 point** : bonne réponse', '**1 point** : lecture sans faute'], rx, top + 2.55, 2.53, 0.9, { size: 13, gap: 2 });
    band(s, 'Défi : inventez une phrase 100 % courte ou 100 % longue… et faites-la lire à l’autre équipe !', 6.15, 0.68, 'accent1', 17);
  }

  // ============================================================ SÉANCE 2
  d.section('Séance 2 · Les sons doubles');
  // ------------------------------------------------------------ 6 loto
  {
    const s = sp(6, 1, 0, 'Le loto des sons doubles');
    const top = instr(s, 'Recopiez 9 mots dans une grille 3 × 3. L’enseignant·e lit : cochez ! Une ligne = « **Bingo!** »');
    const F = [['ij / ei', 'réveil', 'accent1', ['klein', 'lijst', 'reis', 'ijs', 'prijs']], ['ui', 'œil', 'accent2', ['kuit', 'luis', 'kuil', 'ruit', 'uit']], ['ou / au', 'aou', 'accent3', ['rauw', 'bouw', 'klauw', 'stout', 'koud']], ['eu', 'peu', 'accent4', ['beuk', 'deur', 'kleur', 'leuk', 'keuken']], ['oe', 'ou', 'purple', ['zoet', 'stoep', 'boef', 'moe', 'Koen']], ['ie', 'i', 'accent5', ['bier', 'lief', 'stier', 'Griet', 'drie']]];
    const w = (12.13 - 5 * 0.15) / 6;
    F.forEach(([snd, rep, c, words], i) => {
      const x = 0.6 + i * (w + 0.15);
      d.rect(s, x, top, w, 3.9, { fill: 'bg1', line: c, lw: 1.75, radius: 0.08, shadow: true });
      d.rect(s, x, top, w, 1.0, { fill: c, line: null, radius: 0.08 });
      d.t(s, snd, x, top + 0.02, w, 0.58, { size: 26, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, `« ${rep} »`, x, top + 0.58, w, 0.38, { size: 14, italic: true, color: 'bg1', align: 'center', valign: 'middle' });
      words.forEach((wd, k) => d.t(s, `//${wd}//`, x, top + 1.12 + k * 0.54, w, 0.5, { size: 20, align: 'center', valign: 'middle' }));
    });
    // mini-grille d'exemple
    const gy = top + 4.05; const gx = 0.6;
    d.t(s, 'Ma grille :', gx, gy, 1.4, 0.6, { size: 14, bold: true, color: 'accent5', valign: 'middle' });
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) d.rect(s, gx + 1.45 + c * 0.42, gy - 0.05 + r * 0.24, 0.4, 0.22, { fill: 'FFFFFF', line: 'accent5', lw: 0.75, radius: 0 });
    d.t(s, '//eu// et //oe// : deux lettres, mais un seul son, sans glissement (M6). Ligne gagnante = à lire sans faute !', 3.5, gy - 0.05, 9.23, 0.75, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
  }

  // ------------------------------------------------------------ 7 toboggan
  {
    const s = sp(7, 1, 1, 'Le toboggan u · uu · ui');
    const top = instr(s, 'Lisez chaque rangée en glissant, de plus en plus vite. Puis : 1, 2 ou 3 doigts ?');
    const H = [['① u', '« eu » bref', SHORT], ['② uu', '« u » long', LONG], ['③ ui', '« œil »', 'accent1']];
    const X = [0.6, 3.25, 5.9]; const cw = 2.2;
    H.forEach(([h, r, c], i) => {
      d.rect(s, X[i], top, cw, 0.55, { fill: c, line: null, radius: 0.1 });
      d.t(s, [`**${h}**  //${r}//`], X[i], top, cw, 0.55, { size: 16, color: 'bg1', align: 'center', valign: 'middle' });
    });
    const R = [['bus', 'buur', 'buis'], ['mus', 'muur', 'muis'], ['hut', 'huur', 'huis'], ['dun', 'duur', 'duin'], ['zus', 'zuur', 'zuid']];
    R.forEach((row, r) => {
      const y = top + 0.68 + r * 0.66;
      row.forEach((wd, i) => {
        const yy = y + i * 0.06;
        chipBox(s, wd, X[i], yy, cw, 0.52, H[i][2], { size: 20 });
        if (i < 2) d.line(s, X[i] + cw + 0.05, yy + 0.28, X[i + 1] - 0.05, yy + 0.34, { color: 'accent5', lw: 2 });
      });
    });
    // ij = ei
    const x = 8.55; const w = 4.18;
    d.rect(s, x, top, w, 3.95, { fill: 'FDF1E6', line: 'accent1', lw: 1.75, radius: 0.1 });
    d.t(s, '**ij = ei** : même son !', x + 0.2, top + 0.1, w - 0.4, 0.55, { size: 20, color: 'accent1', valign: 'middle' });
    d.t(s, 'Dictée : //lange ij// of //korte ei// ?', x + 0.2, top + 0.65, w - 0.4, 0.45, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    for (let i = 0; i < 6; i++) {
      const cx = x + 0.25 + (i % 2) * 1.95; const cy = top + 1.25 + Math.floor(i / 2) * 0.88;
      d.num(s, i + 1, cx, cy + 0.12, 0.4, 'accent1', 13);
      d.rect(s, cx + 0.5, cy, 1.25, 0.65, { fill: 'FFFFFF', line: 'accent1', lw: 1, dash: 'dash', radius: 0.08 });
    }
    band(s, 'Rappel M6 : //ui// part de « eu » et glisse vers « u », lèvres arrondies (//huis// ≈ « heuïs »)', 6.28, 0.58, 'tx2', 16);
  }

  // ------------------------------------------------------------ 8 la chasse aux sons doubles
  {
    const s = sp(8, 1, 2, 'La chasse aux sons doubles');
    const top = instr(s, 'Par équipe : comptez les sons doubles de chaque phrase, puis lisez-la sans faute. Bon nombre + bonne lecture = 2 points.');
    const F = ['Doei! Ik ga naar huis.', 'Moeders snijden reuze uien.', 'Leren breien groene truien.', 'IJskoud bier uit de keuken van moe.', 'Mooie, nieuwe truien zijn nooit saai.'];
    F.forEach((f, i) => {
      const y = top + i * 0.86;
      d.rect(s, 0.6, y, 7.6, 0.74, { fill: i % 2 ? 'bg1' : 'bg2', line: BORDER, radius: 0.08 });
      d.num(s, i + 1, 0.75, y + 0.16, 0.42, 'accent4', 14);
      d.t(s, `//${f}//`, 1.35, y, 5.4, 0.74, { size: 19, valign: 'middle' });
      d.t(s, '★'.repeat(i < 1 ? 1 : i < 3 ? 2 : 3), 6.65, y, 0.7, 0.74, { size: 12, color: 'accent1', valign: 'middle' });
      d.rect(s, 7.4, y + 0.1, 0.65, 0.54, { fill: 'FFFFFF', line: 'accent4', lw: 1.5, radius: 0.1 });
      d.t(s, '?', 7.4, y + 0.1, 0.65, 0.54, { size: 18, bold: true, color: 'accent4', align: 'center', valign: 'middle' });
    });
    const x = 8.5; const w = 4.23;
    d.rect(s, x, top, w, 4.2, { fill: 'bg1', line: 'accent4', lw: 1.75, radius: 0.1, shadow: true });
    d.rect(s, x, top, w, 0.55, { fill: 'accent4', line: null, radius: 0.08 });
    d.t(s, 'Les sons à trois lettres', x + 0.15, top, w - 0.3, 0.55, { size: 16, bold: true, color: 'bg1', valign: 'middle' });
    [['aai', 'aïe', 'saai', 'yawning-face'], ['ooi', 'ô-y', 'mooi', 'sparkles'], ['oei', 'ouille', 'doei', 'waving-hand'], ['eeuw', 'é-ou', 'sneeuw', 'snowflake'], ['ieuw', 'i-ou', 'nieuw', 'new-button']].forEach(([snd, rep, ex, il], i) => {
      const y = top + 0.68 + i * 0.68;
      d.t(s, `**${snd}**`, x + 0.2, y, 0.95, 0.6, { size: 19, color: 'accent4', valign: 'middle' });
      d.t(s, `« ${rep} »`, x + 1.15, y, 1.1, 0.6, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${ex}//`, x + 2.3, y, 1.2, 0.6, { size: 18, valign: 'middle' });
      d.ill(s, il, x + 3.5, y + 0.07, 0.48, 0.48);
    });
  }

  // ============================================================ SÉANCE 3
  d.section('Séance 3 · Les consonnes-pièges');
  // ------------------------------------------------------------ 9 h, g, ch
  {
    const s = sp(9, 2, 0, 'Souffle ou silence ? h, g et ch');
    const top = instr(s, 'Écoutez : main levée si vous entendez le //h//. Puis relevez le défi du //g//… en une seule respiration !');
    const w = 5.92; const h = 3.85;
    // h
    d.rect(s, 0.6, top, w, h, { fill: 'bg1', line: 'accent2', lw: 2, radius: 0.08, shadow: true });
    d.rect(s, 0.6, top, w, 0.6, { fill: 'accent2', line: null, radius: 0.08 });
    d.t(s, '**h** = on souffle !', 0.8, top, w - 1.2, 0.6, { size: 19, color: 'bg1', valign: 'middle' });
    d.ill(s, 'wind-face', 0.6 + w - 0.75, top + 0.05, 0.5, 0.5);
    [['heten', 'eten'], ['hoor', 'oor'], ['hij', 'ei'], ['hal', 'al']].forEach(([a, b], i) => {
      const y = top + 0.78 + i * 0.6;
      chipBox(s, `**h**${a.slice(1)}`, 0.9, y, 1.9, 0.5, 'accent2', { size: 19 });
      d.t(s, '≠', 2.85, y, 0.45, 0.5, { size: 20, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      chipBox(s, b, 3.35, y, 1.9, 0.5, 'accent5', { size: 19 });
    });
    d.ill(s, 'face-with-tears-of-joy', 0.85, top + 3.22, 0.5, 0.5);
    d.t(s, '//Ik **h**eet Tom.// ≠ //Ik eet Tom!//', 1.45, top + 3.17, w - 1.0, 0.6, { size: 19, valign: 'middle' });
    // g / ch
    const x = 6.81;
    d.rect(s, x, top, w, h, { fill: 'bg1', line: 'accent1', lw: 2, radius: 0.08, shadow: true });
    d.rect(s, x, top, w, 0.6, { fill: 'accent1', line: null, radius: 0.08 });
    d.t(s, '**g** = **ch** : le son raclé (« jota » espagnole)', x + 0.2, top, w - 0.4, 0.6, { size: 17, color: 'bg1', valign: 'middle' });
    ['goed', 'groot', 'gaan', 'dag', 'acht', 'lachen'].forEach((wd, i) => {
      chipBox(s, wd, x + 0.3 + (i % 3) * 1.8, top + 0.8 + Math.floor(i / 3) * 0.66, 1.65, 0.54, 'accent1', { size: 19 });
    });
    d.t(s, ['//**sch**ool// = « s » + //ch// raclé', '//Russi**sch**// = « is » (//-isch// en fin de mot)', 'En Belgique, le //g// est plus doux : c’est correct !'], x + 0.3, top + 2.2, w - 0.5, 1.55, { size: 16, gap: 6, valign: 'middle' });
    band(s, '**Défi :** //Goedemorgen! Goed geslapen? Ga je graag naar Gent?//', 6.1, 0.75, 'accent1', 20);
  }

  // ------------------------------------------------------------ 10 caméléons
  {
    const s = sp(10, 2, 1, 'Les lettres caméléons');
    const top = instr(s, 'Lisez le mot, trouvez son étiquette (A à L), puis relisez-le correctement.');
    const W = ['hon__d__', 'ik he__b__', '__j__uni', 'nieu__w__', 'la__ng__', 'ba__nk__', 'mei__sj__e', 'ora__nj__e', '__Tsj__echië', 'Russi__sch__', '__sch__ool', 'da__g__'];
    const cw = 2.2; const chh = 0.78;
    W.forEach((wd, i) => {
      const c = i % 3; const r = Math.floor(i / 3);
      const x = 0.6 + c * (cw + 0.15); const y = top + r * 0.95;
      d.rect(s, x, y, cw, chh, { fill: 'bg2', line: BORDER, radius: 0.1 });
      d.num(s, i + 1, x + 0.12, y + 0.17, 0.44, 'accent1', 13);
      d.t(s, `//${wd}//`, x + 0.6, y, cw - 0.65, chh, { size: 20, valign: 'middle' });
    });
    const L = ['« ng » (ping-pong)', '« t »', '« ch » (chocolat)', '« is »', '« y » (yaourt)', '« tch »', '« p »', '« ng » + « k »', '« ou »', '« gn » (peigne)', '« ch » raclé', '« s » + « ch » raclé'];
    const lw = 2.3;
    L.forEach((t, i) => {
      const c = Math.floor(i / 6); const r = i % 6;
      const x = 7.85 + c * (lw + 0.2); const y = top + r * 0.66;
      d.rect(s, x, y, lw, 0.56, { fill: 'FFFFFF', line: 'accent3', lw: 1.25, radius: 0.28 });
      d.oval(s, x + 0.06, y + 0.06, 0.44, 0.44, { fill: 'accent3' });
      d.t(s, 'ABCDEFGHIJKL'[i], x + 0.06, y + 0.06, 0.44, 0.44, { size: 13, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, t, x + 0.55, y, lw - 0.6, 0.56, { size: 13, valign: 'middle' });
    });
    d.rect(s, 0.6, top + 3.85, 6.9, 0.75, { fill: 'FDF1E6', line: 'accent1', lw: 1, radius: 0.1 });
    d.t(s, 'Astuce : en fin de mot, //d// se dit « t » et //b// « p ». //ng// = un seul son : on n’entend pas le //g// !', 0.75, top + 3.85, 6.6, 0.75, { size: 14, valign: 'middle' });
  }

  // ------------------------------------------------------------ 11 jeu de l'oie
  {
    const s = sp(11, 2, 2, 'Le jeu de l’oie des consonnes');
    const top = instr(s, 'Lancez le dé, avancez et lisez la case. Faute = retour à la case précédente.');
    const C = ['DÉPART', 'goed', 'hallo', 'jij', 'dag!', '★ Ik heet Hans.', 'brengen', 'meisje', '◀ recule de 2', 'hebben', 'school', 'oranje', '★ Hoe gaat het?', 'denken', 'Russisch', '▶ rejoue', 'alsjeblieft', 'Tsjechië', '★ Goedemiddag!', 'ARRIVÉE'];
    const cw = 1.62; const chh = 0.98; const gx = 0.1; const gy = 0.14;
    C.forEach((t, i) => {
      const r = Math.floor(i / 5); const k = i % 5; const c = r % 2 ? 4 - k : k;
      const x = 0.6 + c * (cw + gx); const y = top + r * (chh + gy);
      const special = t.startsWith('★') ? 'accent1' : t.startsWith('◀') ? 'accent6' : t.startsWith('▶') ? 'accent3' : (i === 0 || i === 19) ? 'tx2' : null;
      d.rect(s, x, y, cw, chh, { fill: special ? (i === 0 || i === 19 ? 'tx2' : special) : 'FFFFFF', tr: special && !(i === 0 || i === 19) ? 85 : 0, line: special || 'accent1', lw: 1.5, radius: 0.12 });
      if (i > 0 && i < 19) d.t(s, String(i), x + 0.06, y + 0.03, 0.4, 0.28, { size: 10, bold: true, color: 'accent5' });
      const txt = t.replace(/^[★◀▶] /, '');
      const isWord = !special;
      d.t(s, isWord ? `//${txt}//` : (t[0] === '★' ? `★ //${txt}//` : t), x + 0.06, y + 0.2, cw - 0.12, chh - 0.25, { size: isWord ? 17 : 12, bold: !isWord && (i === 0 || i === 19), color: i === 0 || i === 19 ? 'bg1' : 'tx1', align: 'center', valign: 'middle', fit: true, max: isWord ? 17 : 12, min: 10 });
      // flèche vers la case suivante
      if (i < 19) {
        const r2 = Math.floor((i + 1) / 5);
        if (r2 === r) {
          const dir = r % 2 ? -1 : 1;
          const ax = dir > 0 ? x + cw : x;
          d.line(s, ax + dir * 0.0, y + chh / 2, ax + dir * gx, y + chh / 2, { color: 'accent5', lw: 1.5 });
        } else {
          d.line(s, x + cw / 2, y + chh, x + cw / 2, y + chh + gy, { color: 'accent5', lw: 1.5 });
        }
      }
    });
    const rx = 9.4; const rw = 3.33;
    d.ill(s, 'game-die', rx + 1.05, top, 1.2, 1.2);
    d.t(s, ['**1.** Lancez le dé, avancez.', '**2.** Lisez la case à voix haute.', '**3.** Faute = case précédente.', '**★** = mini-phrase · **◀** = reculez · **▶** = rejouez'], rx, top + 1.3, rw, 2.3, { size: 14, gap: 6 });
    d.ill(s, 'trophy', rx + 0.1, top + 3.75, 0.6, 0.6);
    d.t(s, 'Premier arrivé : //Proficiat!//', rx + 0.75, top + 3.75, rw - 0.75, 0.6, { size: 15, bold: true, color: 'accent1', valign: 'middle' });
  }

  // ============================================================ SÉANCE 4
  d.section('Séance 4 · Mots courts, mots longs');
  // ------------------------------------------------------------ 12 rappel
  {
    const s = sp(12, 3, 0, 'Rappel : lire un mot en 4 gestes', '① RAPPEL');
    const G = [
      ['FaCut', 'Je coupe', 'accent2', ['1 consonne → avant : //wo·nen//', '2 consonnes → entre : //kat·ten//', 'son double jamais coupé : //kij·ken//']],
      ['FaDoorOpen', 'Je regarde la porte', LONG, ['ouverte → long : //ma·ken//', 'fermée → court : //mak·ker//', 'voyelle doublée → long : //maan//']],
      ['FaBullseye', 'Je trouve l’accent', ACC, ['1re syllabe du mot de base : //**##wo##**·nen//', 'jamais //be-, ge-, ver-, ont-// : //be·**##ta##**·len//', 'composé → 1er mot : //**##voor##**·naam//', 'mot français → à la fin : //pa·**##pier##**//']],
      ['FaVolumeMute', 'J’avale les e muets', 'accent5', ['//be-, ge-, ver-, -e, -en, -el, -er// = « e » de //le//', '//-en// : le //n// s’entend à peine', '//-ig// « euch » : //twin·tig//', '//-lijk// « leuk » : //vrien·de·lijk//']],
    ];
    const w = (12.13 - 3 * 0.22) / 4; const h = 2.75; const y = 1.72;
    G.forEach(([ic, head, c, lines], i) => {
      const x = 0.6 + i * (w + 0.22);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: c, lw: 2, radius: 0.1, shadow: true });
      d.rect(s, x, y, w, 0.66, { fill: c, line: null, radius: 0.1 });
      d.iconDisc(s, ic, x + 0.12, y + 0.08, 0.5, 'FFFFFF', c);
      d.t(s, `**${i + 1}. ${head}**`, x + 0.7, y, w - 0.78, 0.66, { size: 14, color: 'bg1', valign: 'middle' });
      d.t(s, lines, x + 0.15, y + 0.75, w - 0.3, h - 0.85, { size: 15, gap: 7, valign: 'top', fit: true, max: 15, min: 11 });
      if (i < 3) d.t(s, '➜', x + w - 0.05, y + h / 2 - 0.2, 0.32, 0.4, { size: 16, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    // mot d'une syllabe
    const y2 = 4.65;
    d.rect(s, 0.6, y2, 4.6, 1.35, { fill: 'EAF1F8', line: 'accent2', lw: 1.5, radius: 0.1 });
    d.t(s, ['**Un mot d’une syllabe** est toujours accentué :', 'je lis la voyelle → //%%kat%%// (court) · //<<maan>>// (long) · //huis// (son double)'], 0.75, y2, 4.35, 1.35, { size: 14, gap: 4, valign: 'middle' });
    // verjaardag
    const x0 = 5.45;
    d.t(s, '**verjaardag**', x0, y2, 2.0, 0.55, { size: 18, color: 'tx2', valign: 'middle' });
    d.t(s, '(l’anniversaire)', x0, y2 + 0.5, 2.0, 0.35, { size: 12, italic: true, color: 'accent5' });
    [['ver', 'e muet', 'accent5', false], ['jaar', 'long · accent', ACC, true], ['dag', 'court', SHORT, false]].forEach(([syl, lab, c, acc], i) => {
      const x = x0 + 2.15 + i * 1.75;
      d.rect(s, x, y2, 1.6, 0.8, { fill: c, tr: acc ? 0 : 85, line: c, lw: 1.5, radius: 0.1 });
      d.t(s, syl, x, y2, 1.6, 0.8, { size: acc ? 26 : 22, bold: acc, color: acc ? 'bg1' : 'tx1', align: 'center', valign: 'middle' });
      d.t(s, lab, x, y2 + 0.85, 1.6, 0.4, { size: 12, italic: true, color: c, align: 'center' });
      if (i < 2) d.t(s, '·', x + 1.58, y2, 0.2, 0.8, { size: 22, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    band(s, '**Mini-défi :** appliquez les 4 gestes à //betalen · gezellig · vriendelijk//', 6.15, 0.68, 'accent3', 18);
  }

  // ------------------------------------------------------------ 13 escaliers
  {
    const s = sp(13, 3, 1, 'L’escalier des syllabes');
    const top = instr(s, 'Frappez les syllabes dans les mains et notez leur nombre · tapez du pied sur la syllabe accentuée · montez l’escalier à voix haute, puis redescendez !');
    const F = [['taal', 'talen', 'vertalen', 'vertaling', 'vertalingen'], ['naam', 'namen', 'voornaam', 'achternaam', 'achternamen'], ['werk', 'werken', 'gewerkt', 'medewerker', 'medewerkers'], ['huis', 'huizen', 'huisje', 'ziekenhuis', 'ziekenhuizen']];
    const CC = ['accent2', 'accent4', 'accent1', 'purple'];
    const cw = (12.13 - 3 * 0.25) / 4; const sh = 0.7; const bottom = 6.75;
    F.forEach((words, f) => {
      const x0 = 0.6 + f * (cw + 0.25);
      words.forEach((wd, i) => {
        const y = bottom - (i + 1) * (sh + 0.12);
        const x = x0 + i * 0.12; const w = cw - 0.48;
        d.rect(s, x, y, w, sh, { fill: CC[f], tr: 88 - i * 6, line: CC[f], lw: 1.25, radius: 0.06 });
        d.t(s, `//${wd}//`, x + 0.1, y, w - 0.62, sh, { size: 17, valign: 'middle', fit: true, max: 17, min: 12 });
        d.oval(s, x + w - 0.5, y + 0.14, 0.42, 0.42, { fill: 'FFFFFF', line: CC[f], lw: 1.25 });
      });
    });
  }

  // ------------------------------------------------------------ 14 mots-monstres
  {
    const s = sp(14, 3, 2, 'Le défi des mots-monstres');
    const top = instr(s, 'Choisissez une carte : 5 secondes pour couper, porte, accent… puis lisez d’une traite !');
    const M = [['moeilijk', 'ghost'], ['makkelijk', 'octopus'], ['gezondheid', 'goblin'], ['natuurlijk', 'spider'], ['formulier', 'sauropod'], ['woordenschat', 'dragon-face'], ['inlichtingen', 't-rex'], ['nationaliteit', 'ogre']];
    const aw = 8.65; const cw = (aw - 3 * 0.15) / 4; const chh = 1.28;
    M.forEach(([wd, il], i) => {
      const c = i % 4; const r = Math.floor(i / 4);
      const x = 0.6 + c * (cw + 0.15); const y = top + r * (chh + 0.15);
      d.rect(s, x, y, cw, chh, { fill: 'FFFFFF', line: 'accent3', lw: 1.5, radius: 0.12, shadow: true });
      d.ill(s, il, x + 0.1, y + 0.08, 0.5, 0.5);
      d.rect(s, x + cw - 0.82, y + 0.12, 0.7, 0.36, { fill: 'accent3', tr: 80, line: null, radius: 0.18 });
      d.t(s, '? pts', x + cw - 0.82, y + 0.12, 0.7, 0.36, { size: 10, bold: true, color: 'accent3', align: 'center', valign: 'middle' });
      d.t(s, `//**${wd}**//`, x + 0.08, y + 0.6, cw - 0.16, 0.6, { size: 17, align: 'center', valign: 'middle', fit: true, max: 17, min: 12 });
    });
    const by = top + 2 * (chh + 0.15);
    d.rect(s, 0.6, by, aw, 6.75 - by, { fill: 'accent6', tr: 90, line: 'accent6', lw: 2.5, radius: 0.12, shadow: true });
    d.ill(s, 'alien-monster', 0.8, by + 0.2, 0.95, 0.95);
    d.t(s, '**BOSS FINAL**', 1.9, by + 0.1, 3.0, 0.45, { size: 14, color: 'accent6', cs: 2 });
    d.t(s, '//**arbeidsongeschiktheidsverzekering**//', 1.9, by + 0.5, aw - 1.5, 0.75, { size: 22, valign: 'middle', fit: true, max: 22, min: 14 });
    const rx = 9.55; const rw = 3.18;
    d.ill(s, 'stopwatch', rx + 0.1, top, 0.9, 0.9);
    d.t(s, '**5 s**', rx + 1.1, top, 1.5, 0.9, { size: 30, color: 'accent1', valign: 'middle', head: true });
    d.t(s, ['**Points** = nombre de syllabes', 'Le boss rapporte… beaucoup !', '', 'couper · porte · accent · //e// muet'], rx, top + 1.05, rw, 2.2, { size: 14, gap: 6 });
    ['A', 'B'].forEach((t, i) => {
      d.rect(s, rx + i * 1.62, top + 3.3, 1.5, 0.95, { fill: i ? 'FDF1E6' : 'EAF1F8', line: i ? 'accent1' : 'accent2', lw: 1.5, radius: 0.1 });
      d.t(s, [`**${t}**`, '…… pts'], rx + i * 1.62, top + 3.3, 1.5, 0.95, { size: 14, align: 'center', valign: 'middle', color: i ? 'accent1' : 'accent2', gap: 1 });
    });
  }

  // ============================================================ SÉANCE 5
  d.section('Séance 5 · La phrase qui chante');
  // ------------------------------------------------------------ 15 chef d'orchestre
  {
    const s = sp(15, 4, 0, 'Le chef d’orchestre : l’accent de phrase');
    const top = instr(s, 'Écoutez l’enseignant·e : quel sens ? Puis reliez chaque phrase à sa forme rapide de l’oral.');
    const w = 6.0; const h = 6.02 - top;
    d.rect(s, 0.6, top, w, h, { fill: 'bg1', line: 'purple', lw: 2, radius: 0.08, shadow: true });
    d.rect(s, 0.6, top, w, 0.58, { fill: 'purple', line: null, radius: 0.08 });
    d.t(s, 'Le mot fort change le sens', 0.8, top, w - 1.1, 0.58, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
    d.ill(s, 'musical-notes', 0.6 + w - 0.68, top + 0.06, 0.46, 0.46);
    [['a', '**##IK##** woon in Brussel.'], ['b', 'Ik **##WOON##** in Brussel.'], ['c', 'Ik woon in **##BRUS##**sel.']].forEach(([l, t], i) => {
      const y = top + 0.68 + i * 0.6;
      d.num(s, l, 0.85, y + 0.08, 0.4, 'purple', 13);
      d.t(s, `//${t}//`, 1.4, y, w - 1.0, 0.56, { size: 21, valign: 'middle' });
    });
    d.line(s, 0.85, top + 2.5, 0.6 + w - 0.25, top + 2.5, { color: BORDER, lw: 1, arrow: false });
    d.t(s, ['① … pas à Gand.', '② C’est moi, pas Sofie.', '③ J’y habite ; je n’y travaille pas.'], 0.9, top + 2.55, w - 0.6, h - 2.6, { size: 16, gap: 3, valign: 'middle' });
    const x = 6.85; const w2 = 5.88;
    d.rect(s, x, top, w2, h, { fill: 'bg1', line: 'accent4', lw: 2, radius: 0.08, shadow: true });
    d.rect(s, x, top, w2, 0.58, { fill: 'accent4', line: null, radius: 0.08 });
    d.t(s, 'Les mots qui fondent à l’oral', x + 0.2, top, w2 - 0.9, 0.58, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
    d.ill(s, 'melting-face', x + w2 - 0.68, top + 0.06, 0.46, 0.46);
    const Wr = ['Hoe gaat het?', 'Ik heb het niet.', 'Heb je een pen?', 'Dat is goed.'];
    const Rd = ['’k Heb ’t niet.', 'Da’s goed.', 'Hoe gaat ’t?', 'Heb je ’n pen?'];
    Wr.forEach((t, i) => {
      const y = top + 0.7 + i * 0.8;
      d.num(s, i + 1, x + 0.2, y + 0.12, 0.4, 'accent4', 13);
      d.t(s, `//${t}//`, x + 0.7, y, 2.45, 0.64, { size: 17, valign: 'middle' });
      d.rect(s, x + 3.3, y, w2 - 3.5, 0.64, { fill: 'accent4', tr: 88, line: 'accent4', lw: 1, radius: 0.3 });
      d.t(s, `**${'ABCD'[i]}**  //${Rd[i]}//`, x + 3.45, y, w2 - 3.7, 0.64, { size: 17, valign: 'middle' });
    });
    band(s, 'Les formes rapides (//’k, ’t, ’n, da’s//) sont à **reconnaître** : on ne les écrit pas dans un e-mail !', 6.2, 0.62, 'tx2', 17);
  }

  // ------------------------------------------------------------ 16 tongbrekers
  {
    const s = sp(16, 4, 1, 'Le championnat des tongbrekers');
    const top = instr(s, 'Choisissez un niveau, lisez 3 fois de plus en plus vite. Le jury (la classe) donne 1 à 3 étoiles.');
    const T = [['★', 'De kat krabt de krullen van de trap.', 'k · r · a'], ['★', 'Liesje leerde Lotje lopen langs de lange Lindelaan.', 'l · ie · oo'], ['★★', 'Ik heet Hans en ik eet graag haring.', 'h'], ['★★', 'Acht grijze ganzen gingen gisteren gezellig naar Gent.', 'g / ch'], ['★★★', 'De koetsier poetst de postkoets met postkoetspoets.', 'oe · ts'], ['★★★', 'Als achter vliegen vliegen vliegen, vliegen vliegen vliegen achterna.', 'v · ie · ch']];
    const w = 9.0; const rh = (6.82 - top - 5 * 0.12) / 6;
    T.forEach(([st, t, tag], i) => {
      const y = top + i * (rh + 0.12);
      const c = st.length === 1 ? 'accent3' : st.length === 2 ? 'accent1' : 'accent6';
      d.rect(s, 0.6, y, w, rh, { fill: i % 2 ? 'bg1' : 'bg2', line: BORDER, radius: 0.08 });
      d.rect(s, 0.6, y, 0.95, rh, { fill: c, line: null, radius: 0.08 });
      d.t(s, st, 0.6, y, 0.95, rh, { size: 14, color: 'bg1', bold: true, align: 'center', valign: 'middle' });
      d.t(s, `//${t}//`, 1.7, y, w - 3.35, rh, { size: 17, valign: 'middle', fit: true, max: 17, min: 12 });
      d.rect(s, 0.6 + w - 1.55, y + (rh - 0.38) / 2, 1.42, 0.38, { fill: 'FFFFFF', line: c, lw: 1, radius: 0.19 });
      d.t(s, tag, 0.6 + w - 1.55, y + (rh - 0.38) / 2, 1.42, 0.38, { size: 11, bold: true, color: c, align: 'center', valign: 'middle' });
    });
    // podium
    const px = 9.95; const base = 6.75;
    [[1, 1.3, '2nd-place-medal', 'accent5'], [0, 1.85, '1st-place-medal', 'accent1'], [2, 0.95, '3rd-place-medal', 'accent4']].forEach(([rank, hh, il, c], k) => {
      const x = px + k * 0.95;
      d.rect(s, x, base - hh, 0.9, hh, { fill: c, line: null, radius: 0.04 });
      d.t(s, String(rank + 1), x, base - hh, 0.9, 0.5, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.ill(s, il, x + 0.15, base - hh - 0.65, 0.6, 0.6);
    });
    d.ill(s, 'trophy', px + 0.95, top, 0.9, 0.9);
  }

  // ------------------------------------------------------------ 17 morpion
  {
    const s = sp(17, 4, 2, 'Le morpion des sons — bilan');
    const top = instr(s, 'Deux équipes, X et O : choisissez une case, relevez le défi. Réussi = votre signe. Trois signes alignés = victoire !');
    const C = [
      [1, 'Lis :', 'man – maan – bom – boom'], [2, 'Lis :', 'bus – buur – buis'], [2, 'Dictée :', '//ij// ou //ei// ? (2 mots)'],
      [3, 'Lis :', 'Ik heet Tom ≠ Ik eet Tom'], [3, '★★★ Lis :', 'Scheveningen'], [3, 'Lis :', 'meisje · oranje · Tsjechië'],
      [4, 'Syllabes + accent :', 'vergadering'], [4, 'Syllabes + accent :', 'verjaardagsfeest'], [5, 'Dis-le comme à l’oral :', 'Hoe gaat het?'],
    ];
    const cw = 2.55; const chh = (6.8 - top - 2 * 0.12) / 3;
    C.forEach(([se, h, t], i) => {
      const c = i % 3; const r = Math.floor(i / 3);
      const x = 0.6 + c * (cw + 0.12); const y = top + r * (chh + 0.12);
      const mid = i === 4;
      d.rect(s, x, y, cw, chh, { fill: mid ? 'FDF1E6' : 'FFFFFF', line: mid ? 'accent1' : 'tx2', lw: mid ? 3 : 2, radius: 0.06 });
      d.oval(s, x + 0.1, y + 0.1, 0.4, 0.4, { fill: SES[se - 1] });
      d.t(s, String(se), x + 0.1, y + 0.1, 0.4, 0.4, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, h, x + 0.58, y + 0.08, cw - 0.65, 0.44, { size: 12, bold: true, color: mid ? 'accent1' : 'accent5', valign: 'middle' });
      d.t(s, t.includes('//') ? t : `//${t}//`, x + 0.12, y + 0.55, cw - 0.24, chh - 0.62, { size: mid ? 20 : 16, bold: mid, align: 'center', valign: 'middle', fit: true, max: mid ? 20 : 16, min: 11 });
      if (mid) d.ill(s, 'beach-with-umbrella', x + cw - 0.6, y + 0.06, 0.5, 0.5);
    });
    const rx = 8.7; const rw = 4.03;
    [['X', 'accent2'], ['O', 'accent1']].forEach(([t, c], i) => {
      const x = rx + i * (rw / 2 + 0.05);
      d.rect(s, x, top, rw / 2 - 0.05, 2.0, { fill: 'bg1', line: c, lw: 2, radius: 0.1 });
      d.t(s, t, x, top + 0.05, rw / 2 - 0.05, 1.1, { size: 54, bold: true, color: c, align: 'center', valign: 'middle', head: true });
      d.t(s, 'Équipe ……', x, top + 1.2, rw / 2 - 0.05, 0.6, { size: 13, color: 'accent5', align: 'center', valign: 'middle' });
    });
    d.t(s, ['Chaque case révise une séance (pastille ①–⑤).', 'La case du centre vaut le défi le plus célèbre du néerlandais !'], rx, top + 2.2, rw, 1.3, { size: 14, gap: 6 });
    d.ill(s, 'trophy', rx + 1.6, top + 3.55, 0.8, 0.8);
  }

  // ============================================================ ANNEXE · CORRIGÉS
  d.section('Annexe · Corrigés');
  const cor = (g, k) => {
    const s = d.page({ g, tag: 'CORRIGÉS', tagColor: 'accent3', title: `Corrigés — Séance ${k + 1} · ${SNAME[k]}` });
    tracker(s, k);
    return s;
  };
  const three = (s, cols, o = {}) => {
    const w = (12.13 - 2 * 0.25) / 3; const h = o.h || 5.05;
    cols.forEach(([head, lines], i) => colCard(s, 0.6 + i * (w + 0.25), 1.72, w, h, o.colors ? o.colors[i] : SES[o.k], head, lines, { size: o.size || 15, gap: o.gap ?? 6 }));
  };
  // 18
  {
    const s = cor(18, 0);
    three(s, [
      ['Oreille d’or (exemple de liste)', ['//<<maan>> · %%vak%% · <<laat>>//', '//%%pen%% · <<been>> · %%hel%%//', '//<<vies>> · %%lid%% · <<ziet>>//', '//%%bos%% · <<boom>> · %%pot%%//', '//<<muur>> · %%kus%% · <<zuur>>//', '', '**%%framboise%%** = court · **<<vert>>** = long']],
      ['Les paniers', ['**<<LONG>>** : //raam · keel · roos · vuur · ma·ken · le·zen · wo·nen · mu·ren//', '', '**%%COURT%%** : //tak · nek · bol · stuk · kat·ten · pen·nen · bom·men · zus·sen//']],
      ['Le duel des phrases', ['1 //Katten willen…// → **%%kort%%**', '2 //Jagers doden…// → **<<lang>>**', '3 //Mussen hebben…// → **%%kort%%**', '4 //Apen eten…// → **<<lang>>**', '5 //Biggen kunnen…// → **%%kort%%**', '6 //Dikke mannen…// → **%%kort%%**']],
    ], { k: 0, size: 16 });
  }
  // 19
  {
    const s = cor(19, 1);
    three(s, [
      ['Le loto', ['Vérifiez la ligne gagnante : chaque mot est lu avec le son de sa colonne.', '', 'Pièges fréquents :', '//ui// lu « ou » → //uit// ≈ « euït »', '//eu// lu « u » → //deur// ≈ « deur »', '//oe// lu « u » → //moe// ≈ « mou »']],
      ['Le toboggan', ['Dictée //ij / ei// :', '1 //w**ij**n// · 2 //tr**ei**n// · 3 //t**ij**d//', '4 //kl**ei**n// · 5 //m**ei**// · 6 //v**ij**f//', '', 'Sens : //buur// voisin · //buis// tube · //muis// souris · //huur// loyer · //duin// dune · //zuid// sud']],
      ['La chasse aux sons doubles', ['1 → **2** : //oei, ui//', '2 → **4** : //oe, ij, eu, ui//', '3 → **3** : //ei, oe, ui//', '4 → **6** : //IJ, ou, ie, ui, eu, oe//', '5 → **6** : //ooi, ieuw, ui, ij, ooi, aai//']],
    ], { k: 1, size: 16 });
  }
  // 20
  {
    const s = cor(20, 2);
    three(s, [
      ['Souffle ou silence ?', ['//heten// s’appeler · //eten// manger', '//hoor// j’entends · //oor// oreille', '//hij// il · //ei// œuf', '//hal// hall · //al// déjà', '', 'Défi : //Bonjour ! Bien dormi ? Tu vas volontiers à Gand ?//']],
      ['Les lettres caméléons', ['1 //hond// → **B** « t »', '2 //ik heb// → **G** « p »', '3 //juni// → **E** « y »', '4 //nieuw// → **I** « ou »', '5 //lang// → **A** « ng »', '6 //bank// → **H** « ng-k »', '7 //meisje// → **C** « ch »', '8 //oranje// → **J** « gn »', '9 //Tsjechië// → **F** « tch »', '10 //Russisch// → **D** « is »', '11 //school// → **L** « s-ch »', '12 //dag// → **K** « ch » raclé']],
      ['Le jeu de l’oie (aide-mémoire)', ['//goed// « ghout »', '//jij// « yèï »', '//brengen// //ng// = un son', '//meisje// « mèï-cheu »', '//oranje// « o-ran-gneu »', '//denken// //nk//', '//Russisch// « reu-sis »', '//Tsjechië// « tchè-chi-yeu »']],
    ], { k: 2, size: 15, gap: 3 });
  }
  // 21
  {
    const s = cor(21, 3);
    three(s, [
      ['Mini-défi et escaliers ①②', ['//be·**##ta##**·len · ge·**##zel##**·lig · **##vrien##**·de·lijk//', '', '//**##taal##** · **##ta##**·len · ver·**##ta##**·len · ver·**##ta##**·ling · ver·**##ta##**·lin·gen// (1-2-3-3-4)', '', '//**##naam##** · **##na##**·men · **##voor##**·naam · **##ach##**·ter·naam · **##ach##**·ter·na·men// (1-2-2-3-4)']],
      ['Escaliers ③④', ['//**##werk##** · **##wer##**·ken · ge·**##werkt##** · **##me##**·de·wer·ker · **##me##**·de·wer·kers// (1-2-2-4-4)', '', '//**##huis##** · **##hui##**·zen · **##huis##**·je · **##zie##**·ken·huis · **##zie##**·ken·hui·zen// (1-2-2-3-4)', '', 'L’accent reste sur la base ; dans un mot composé, il passe sur le 1er mot.']],
      ['Les mots-monstres', ['//**##moei##**·lijk// 2 · //**##mak##**·ke·lijk// 3', '//ge·**##zond##**·heid// 3 · //na·**##tuur##**·lijk// 3', '//for·mu·**##lier##**// 3 · //**##woor##**·den·schat// 3', '//**##in##**·lich·tin·gen// 4', '//na·tio·na·li·**##teit##**// 5', '//**##ar##**·beids·on·ge·schikt·heids·ver·ze·ke·ring// **10**']],
    ], { k: 3, size: 15, gap: 5 });
  }
  // 22
  {
    const s = cor(22, 4);
    three(s, [
      ['Le chef d’orchestre', ['a **##IK##** → ②', 'b **##WOON##** → ③', 'c **##BRUS##**sel → ①', '', '1 → **C** //Hoe gaat ’t?//', '2 → **A** //’k Heb ’t niet.//', '3 → **D** //Heb je ’n pen?//', '4 → **B** //Da’s goed.//']],
      ['Les tongbrekers (sens)', ['1 Le chat gratte les boucles de l’escalier.', '2 Liesje apprenait à Lotje à marcher le long de la longue allée des Tilleuls.', '3 Je m’appelle Hans et j’aime manger du hareng.', '4 Huit oies grises allaient hier, contentes, à Gand.', '5 Le cocher astique la diligence avec du produit à diligence.', '6 Quand des mouches volent derrière des mouches…']],
      ['Le morpion', ['① court – long – court – long', '② « eu » – « u » – « œil »', '③ p. ex. //klein// (ei) · //wijn// (ij)', '④ //h// soufflé', '⑤ //**##sche##**·ve·nin·gen//', '⑥ « mèï-cheu » · « o-ran-gneu » · « tchè-chi-yeu »', '⑦ //ver·**##ga##**·de·ring// (4)', '⑧ //ver·**##jaar##**·dags·feest// (4)', '⑨ //Hoe gaat ’t?//']],
    ], { k: 4, size: 14, gap: 3, h: 4.3 });
    band(s, '//**Proficiat! Je spreekt al heel goed Nederlands.**//', 6.15, 0.68, 'purple', 20);
    d.ill(s, 'trophy', 11.9, 6.2, 0.58, 0.58);
  }
}

module.exports = { meta, build };
