// In vijf zinnen — production écrite et orale guidée (A1 · A2 · B1) : 24 contextes du quotidien
// chaque contexte : une diapo « tâche » (décor + 5 critères) et une diapo « modèle » (bribes encadrées et reliées aux critères)
const { BORDER, HEX, PURPLE } = require('../lib');
const { LEVELS } = require('../vijfzinnen_data');
const MET = require('../calibri_metrics.json');

const meta = {
  n: 'V', slug: 'In_vijf_zinnen', title: 'In vijf zinnen', short: 'In vijf zinnen',
  template: 'in_vijf_zinnen.md', file: 'In_vijf_zinnen_A1_A2_B1.pptx',
  docTitle: 'In vijf zinnen — Production écrite et orale guidée (A1 · A2 · B1)',
  subject: 'Néerlandais — production guidée A1 · A2 · B1',
  foot: 'Néerlandais · A1 · A2 · B1 · In vijf zinnen',
  company: 'IRAM — Néerlandais',
  L: { coverFoot: 'Néerlandais · A1 · A2 · B1 · Production guidée · A. Jouniaux · IRAM' },
};

// les 5 critères : bleu · orange · vert · violet · framboise
const CR = ['accent2', 'accent1', 'accent3', 'purple', 'accent4'];
const INK = '17375E';
const hexOf = (c) => (c === 'purple' ? PURPLE : c === 'tx2' ? INK : HEX[c] || c);
const TINT = { accent1: 'FDF1E6', accent2: 'EAF2FB', accent3: 'E8F4EC', accent4: 'FBEAF2', accent5: 'F1F3F6', accent6: 'FBEDEB', tx2: 'E6EBF2', purple: 'F1ECF7' };
const FONT = 'Calibri';

// largeur d'un texte en pouces (métriques de Calibri / Carlito)
const measure = (t, size, bold, italic) => {
  const tab = MET[bold ? (italic ? 'bi' : 'b') : (italic ? 'i' : 'r')];
  let u = 0;
  for (const ch of t) u += tab[ch] ?? 520;
  return (u / 1000) * (size / 72);
};
// « {n:texte|étiquette} » → segments
const parseEx = (str) => {
  const segs = [];
  str.split(/(\{\d:[^}]+\})/).filter(Boolean).forEach((p) => {
    const m = p.match(/^\{(\d):([^|}]+)(?:\|([^}]+))?\}$/);
    if (m) segs.push({ t: m[2], n: Number(m[1]), tag: m[3] });
    else segs.push({ t: p, n: 0 });
  });
  return segs;
};

function build(d) {
  const band = (s, txt, y = 6.25, h = 0.6, c = 'tx2', size = 16) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const txt = (s, t, x, y, w, h, o = {}) => s.addText(t, {
    x, y, w, h, fontSize: o.size, fontFace: FONT, bold: !!o.bold, italic: !!o.italic, color: hexOf(o.color || 'tx1'),
    align: o.align || 'left', valign: 'middle', margin: 0, wrap: false, isTextBox: true,
  });

  // ------------------------------------------------------------ le décor
  const scene = (s, X, Y, W, H, ops) => {
    const x = (f) => X + f * W; const y = (f) => Y + f * H;
    ops.forEach((o) => {
      const [k] = o;
      if (k === 'bg') {
        const [, kind, top, bot, hz] = o;
        d.rect(s, X, Y, W, H * hz, { fill: top, line: null, radius: 0 });
        if (hz < 1) d.rect(s, X, y(hz), W, H * (1 - hz), { fill: bot, line: null, radius: 0 });
        if (kind === 'in' && hz < 1) d.rect(s, X, y(hz) - H * 0.015, W, H * 0.015, { fill: 'C9D1DC', line: null, radius: 0 });
      } else if (k === 'r') {
        const [, fx, fy, fw, fh, c, r] = o;
        d.rect(s, x(fx), y(fy), fw * W, fh * H, { fill: c, line: null, radius: r ?? 0.04 });
      } else if (k === 'sign') {
        const [, t, fx, fy, fw, fh, c] = o;
        d.rect(s, x(fx), y(fy), fw * W, fh * H, { fill: c, line: null, radius: Math.min(0.08, fh * H * 0.25) });
        const sz = Math.max(5.5, Math.min(26, fh * H * 72 * 0.52));
        d.t(s, `**${t}**`, x(fx), y(fy), fw * W, fh * H, { size: sz, color: 'bg1', align: 'center', valign: 'middle', cs: 1 });
      } else if (k === 'win') {
        const [, fx, fy, fw, fh] = o; const lw = Math.max(1, W * 0.6);
        d.rect(s, x(fx), y(fy), fw * W, fh * H, { fill: 'CDE7F7', line: 'FFFFFF', lw, radius: 0 });
        d.line(s, x(fx + fw / 2), y(fy), x(fx + fw / 2), y(fy + fh), { color: 'FFFFFF', lw: lw * 0.8, arrow: false });
        d.line(s, x(fx), y(fy + fh / 2), x(fx + fw), y(fy + fh / 2), { color: 'FFFFFF', lw: lw * 0.8, arrow: false });
      } else if (k === 'line') {
        const [, fx1, fy1, fx2, fy2, c] = o;
        d.line(s, x(fx1), y(fy1), x(fx2), y(fy2), { color: c, lw: Math.max(1, W * 0.8), arrow: false });
      } else if (k === 'e') {
        const [, name, fx, fy, fs] = o;
        d.ill(s, name, x(fx), y(fy), fs * H, fs * H);
      }
    });
  };
  // décor dans un cadre blanc
  const framed = (s, X, Y, W, H, ops, o = {}) => {
    d.rect(s, X, Y, W, H, { fill: 'FFFFFF', line: o.line || BORDER, lw: o.lw || 1, radius: 0.1, shadow: o.shadow !== false });
    const p = o.pad ?? 0.08;
    scene(s, X + p, Y + p, W - 2 * p, H - 2 * p, ops);
  };
  // pastille « à l'écrit / à l'oral »
  const modeChip = (s, mode, x = 10.73, y = 0.24) => {
    const w = 2.0; const c = mode === 'W' ? 'accent2' : 'accent1';
    d.rect(s, x, y, w, 0.4, { fill: TINT[c], line: c, lw: 1.25, radius: 0.12 });
    d.icon(s, mode === 'W' ? 'FaPenNib' : 'FaComments', hexOf(c), x + 0.14, y + 0.08, 0.24);
    d.t(s, `**${mode === 'W' ? 'À L’ÉCRIT' : 'À L’ORAL'}**`, x + 0.45, y, w - 0.55, 0.4, { size: 12, color: c, valign: 'middle', cs: 1 });
  };

  // ------------------------------------------------------------ la production modèle, mise en page mesurée
  // renvoie la hauteur totale ; draw = false pour mesurer seulement
  const typeset = (s, sentences, crit, X0, Y0, xmax, size, draw) => {
    const lineH = (size / 72) * 1.32; const boxH = (size / 72) * 1.22; const pad = 0.05;
    const tagS = 10.5; const tagH = 0.26; const tagGap = 0.05; const fg = 0.05;
    const sp = measure(' ', size);
    let y = Y0;
    sentences.forEach((str, si) => {
      const segs = parseEx(str);
      // jetons : mots ordinaires et bribes insécables, avec l'espace qui les précède
      const toks = []; let space = false;
      segs.forEach((sg) => {
        if (sg.n) { toks.push({ t: sg.t, n: sg.n, tag: sg.tag, space }); space = false; return; }
        sg.t.split(/(\s+)/).forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { space = true; return; }
          toks.push({ t: p, n: 0, space }); space = false;
        });
      });
      // lignes
      const lines = [[]]; let x = X0;
      toks.forEach((tk) => {
        const w = tk.n ? measure(tk.t, size, true) + 2 * pad : measure(tk.t, size);
        const line = lines[lines.length - 1];
        const prev = line[line.length - 1];
        const lead = line.length && tk.space ? sp + (tk.n || (prev && prev.n) ? fg : 0) : 0;
        if (line.length && x + lead + w > xmax) { lines.push([]); x = X0; }
        else x += lead;
        lines[lines.length - 1].push({ ...tk, x, w });
        x += w;
      });
      lines.forEach((ln, li) => {
        const hasFrag = ln.some((tk) => tk.n);
        if (draw) {
          if (li === 0) d.num(s, si + 1, X0 - 0.52, y + (lineH - 0.36) / 2, 0.36, CR[si], 13);
          // texte ordinaire : mots consécutifs regroupés
          let run = null;
          const flush = () => { if (run) txt(s, run.t, run.x, y, run.w + 0.15, lineH, { size }); run = null; };
          ln.forEach((tk) => {
            if (tk.n) {
              flush();
              const c = CR[tk.n - 1];
              d.rect(s, tk.x, y + (lineH - boxH) / 2, tk.w, boxH, { fill: TINT[c], line: c, lw: 1.5, radius: 0.06 });
              txt(s, tk.t, tk.x, y, tk.w, lineH, { size, bold: true, color: c, align: 'center' });
            } else if (run) { run.t += (tk.space ? ' ' : '') + tk.t; run.w = tk.x + tk.w - run.x; } else run = { t: tk.t, x: tk.x, w: tk.w };
          });
          flush();
          // étiquettes reliées aux bribes
          let last = -1;
          ln.filter((tk) => tk.n).forEach((tk) => {
            const c = CR[tk.n - 1];
            const label = `${tk.n} · ${tk.tag || crit[tk.n - 1].k}`;
            const tw = measure(label, tagS, true) + 0.16;
            let tx = tk.x + tk.w / 2 - tw / 2;
            tx = Math.max(tx, last + 0.06, X0 - 0.1);
            tx = Math.min(tx, 12.78 - tw);
            const ty = y + (lineH + boxH) / 2 + tagGap;
            d.line(s, tk.x + tk.w / 2, y + (lineH + boxH) / 2, tx + tw / 2, ty, { color: hexOf(c), lw: 1.25, arrow: false });
            d.rect(s, tx, ty, tw, tagH, { fill: c, line: null, radius: 0.1 });
            txt(s, label, tx, ty, tw, tagH, { size: tagS, bold: true, color: 'FFFFFF', align: 'center' });
            last = tx + tw;
          });
        }
        y += lineH + (hasFrag ? tagGap + tagH : 0) + 0.02;
      });
      y += 0.1;
    });
    return y - Y0 - 0.12;
  };
  const fitType = (sentences, crit, X0, Y0, xmax, maxH, start) => {
    let size = start;
    while (size > 12 && typeset(null, sentences, crit, X0, Y0, xmax, size, false) > maxH) size -= 0.5;
    return size;
  };

  // ------------------------------------------------------------ 1 cover
  const L1 = LEVELS[0].ctx[0];
  d.cover({
    g: 1, chip: 'NEDERLANDS · A1 · A2 · B1', title: 'In vijf zinnen', sub: 'Production écrite et orale guidée : 24 contextes du quotidien', line: '1 image · 5 critères · 1 modèle',
    visual: (s) => {
      d.rect(s, 6.75, 1.2, 6.3, 4.2, { fill: 'FFFFFF', line: null, radius: 0.16 });
      framed(s, 6.95, 1.4, 3.3, 2.4, L1.scene, { shadow: false });
      L1.crit.forEach((c, i) => {
        const y = 1.42 + i * 0.48;
        d.num(s, i + 1, 10.45, y, 0.36, CR[i], 13);
        d.rect(s, 10.9, y + 0.02, 1.95, 0.32, { fill: TINT[CR[i]], line: CR[i], lw: 1, radius: 0.08 });
        txt(s, c.k, 10.9, y + 0.02, 1.95, 0.32, { size: 10, bold: true, color: CR[i], align: 'center' });
      });
      typeset(s, ['Ik {1:ben} op een terras.'], L1.crit, 7.5, 4.05, 12.9, 18, true);
    },
  });

  // ------------------------------------------------------------ 2 how it works
  d.section('Mode d’emploi');
  {
    const s = d.page({ g: 2, tag: 'MODE D’EMPLOI', tagColor: 'tx2', title: 'Hoe werkt het? Comment ça marche ?' });
    const S = [['eyes', 'Kijk', 'Observez l’illustration : où ? qui ? quoi ?'], ['clipboard', 'Lees', 'Lisez les 5 critères : une phrase = un critère.'], ['writing-hand', 'Schrijf of spreek', 'Produisez vos 5 phrases, à l’écrit ou à l’oral (5 à 10 min).'], ['magnifying-glass-tilted-left', 'Vergelijk', 'Comparez avec le modèle : chaque encadré renvoie à un critère.']];
    const cw = (12.13 - 3 * 0.2) / 4;
    S.forEach(([ic, h, t], i) => {
      const x = 0.6 + i * (cw + 0.2);
      d.rect(s, x, 1.6, cw, 2.35, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.num(s, i + 1, x + 0.18, 1.75, 0.42, 'tx2', 15);
      d.ill(s, ic, x + cw - 0.95, 1.72, 0.75, 0.75);
      d.t(s, `**${h}**`, x + 0.2, 2.5, cw - 0.4, 0.4, { size: 17, color: 'tx2', valign: 'middle' });
      d.t(s, t, x + 0.2, 2.9, cw - 0.4, 0.95, { size: 13.5, color: 'tx1', valign: 'top' });
    });
    d.t(s, '**Exemple de correspondance critère → bribe de texte**', 0.6, 4.15, 8, 0.35, { size: 14, color: 'accent5' });
    const C2 = LEVELS[1].ctx[1];
    typeset(s, [C2.ex[1]], C2.crit, 1.15, 4.6, 12.7, 19, true);
    band(s, 'Le but : vérifier le **lexique** et la **grammaire** du niveau, en laissant toute sa place à la **créativité** (la chute !).', 6.2, 0.62, 'tx2', 15.5);
  }

  // ------------------------------------------------------------ 3 evaluation
  {
    const s = d.page({ g: 3, tag: 'ÉVALUATION', tagColor: 'tx2', title: 'Évaluer une production : la grille sur 10' });
    const R = [['Critères respectés', '5', 'un point par phrase : le critère demandé est présent et correct', 'accent2', 'check-mark-button'], ['Correction', '2', 'conjugaison, ordre des mots, accords, orthographe ou prononciation', 'accent3', 'pencil'],
      ['Vocabulaire', '1', 'mots précis et variés, adaptés à la situation', 'accent1', 'books'], ['Cohérence', '1', 'les 5 phrases racontent une même scène, dans l’ordre', 'purple', 'link'], ['Créativité', '1', 'une chute originale, de l’humour, une surprise', 'accent4', 'sparkles']];
    R.forEach(([h, pts, t, c, ic], i) => {
      const y = 1.6 + i * 0.86;
      d.rect(s, 0.6, y, 8.6, 0.76, { fill: 'FFFFFF', line: c, lw: 1.5, radius: 0.12, shadow: true });
      d.ill(s, ic, 0.75, y + 0.1, 0.56, 0.56);
      d.t(s, `**${h}**`, 1.45, y, 2.3, 0.76, { size: 16, color: c, valign: 'middle' });
      d.t(s, t, 3.75, y, 4.3, 0.76, { size: 13, color: 'tx1', valign: 'middle' });
      d.rect(s, 8.25, y + 0.14, 0.8, 0.48, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${pts} pt${pts === '1' ? '' : 's'}**`, 8.25, y + 0.14, 0.8, 0.48, { size: 14, color: 'bg1', align: 'center', valign: 'middle' });
    });
    // la barre des 10 points
    let k = 0;
    R.forEach(([, pts, , c]) => { for (let j = 0; j < Number(pts); j += 1) { d.rect(s, 9.55, 1.6 + (9 - k) * 0.42, 0.75, 0.36, { fill: c, line: null, radius: 0.06 }); k += 1; } });
    d.t(s, '**/ 10**', 10.45, 4.75, 1.5, 0.6, { size: 26, color: 'tx2', valign: 'middle' });
    d.t(s, ['Avant de rendre :', 'cochez les 5 critères ✓'], 10.45, 2.2, 2.3, 1.2, { size: 13.5, italic: true, color: 'accent5', valign: 'top', gap: 2 });
    band(s, 'À l’oral : même grille ; la **prononciation** et la **fluidité** remplacent l’orthographe dans « Correction ».', 6.25, 0.55, 'tx2', 15);
  }

  // ------------------------------------------------------------ niveaux
  let g = 4;
  LEVELS.forEach((lvl) => {
    d.section(lvl.name);
    // intercalaire du niveau
    {
      const s = d.page({ g, tag: `NIVEAU ${lvl.id}`, tagColor: lvl.color, title: `${lvl.name} — 8 contextes` }, false, 'N1_DARK');
      d.t(s, '**Ce qu’on évalue**', 0.6, 1.6, 3.7, 0.4, { size: 16, color: 'accent1' });
      d.t(s, lvl.spec.map((t) => `• ${t}`), 0.6, 2.05, 3.7, 4.6, { size: 14, color: 'bg1', valign: 'top', gap: 6 });
      const cw = (12.73 - 4.6 - 3 * 0.15) / 4; const ch = 2.25;
      lvl.ctx.forEach((c, i) => {
        const x = 4.6 + (i % 4) * (cw + 0.15); const y = 1.6 + Math.floor(i / 4) * (ch + 0.2);
        d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: null, radius: 0.1 });
        scene(s, x + 0.07, y + 0.07, cw - 0.14, (cw - 0.14) / 1.38, c.scene);
        d.num(s, i + 1, x + 0.1, y + 1.5, 0.32, lvl.color, 11);
        d.t(s, `**${c.t}**`, x + 0.47, y + 1.43, cw - 0.52, 0.48, { size: 11.5, color: 'tx2', valign: 'middle', fit: true, max: 11.5, min: 9 });
        d.t(s, c.fr, x + 0.47, y + 1.86, cw - 0.52, 0.3, { size: 9.5, italic: true, color: 'accent5', valign: 'middle' });
        d.icon(s, c.mode === 'W' ? 'FaPenNib' : 'FaComments', hexOf(c.mode === 'W' ? 'accent2' : 'accent1'), x + cw - 0.32, y + 0.12, 0.2);
      });
      g += 1;
    }
    lvl.ctx.forEach((c, i) => {
      // la tâche
      {
        const s = d.page({ g, tag: `${lvl.id} · ${i + 1} / 8`, tagColor: lvl.color, title: c.t });
        modeChip(s, c.mode);
        framed(s, 0.6, 1.6, 5.3, 3.85, c.scene);
        d.rect(s, 0.6, 5.6, 5.3, 1.25, { fill: TINT[lvl.color], line: lvl.color, lw: 1.25, radius: 0.12 });
        d.icon(s, 'FaMapMarkerAlt', hexOf(lvl.color), 0.78, 5.72, 0.28);
        d.t(s, `**${c.fr}**`, 1.15, 5.66, 4.6, 0.36, { size: 15, color: lvl.color, valign: 'middle' });
        d.t(s, c.sit, 0.8, 6.02, 4.95, 0.78, { size: 13, color: 'tx1', valign: 'top' });
        d.icon(s, c.mode === 'W' ? 'FaPenNib' : 'FaComments', INK, 6.2, 1.67, 0.3);
        d.t(s, `**${c.mode === 'W' ? 'Écrivez' : 'Dites'} 5 phrases**, une par critère :`, 6.6, 1.6, 6.1, 0.45, { size: 17, color: 'tx2', valign: 'middle' });
        const rh = 0.86;
        c.crit.forEach((k, j) => {
          const y = 2.18 + j * (rh + 0.08); const col = CR[j];
          d.rect(s, 6.2, y, 6.53, rh, { fill: TINT[col], line: col, lw: 1.25, radius: 0.12 });
          d.num(s, j + 1, 6.33, y + (rh - 0.44) / 2, 0.44, col, 15);
          d.t(s, k.t, 6.92, y, 5.7, rh, { size: 14.5, color: 'tx1', valign: 'middle' });
        });
      }
      // le modèle
      {
        const s = d.page({ g, tag: `${lvl.id} · VOORBEELD`, tagColor: 'accent3', title: `${c.t} — voorbeeld`, notes: 'MODÈLE — montrez-le après les productions. Faites retrouver, pour chaque encadré, le critère auquel il répond.' });
        modeChip(s, c.mode);
        framed(s, 0.6, 1.5, 1.24, 0.9, c.scene, { pad: 0.04 });
        const cw = (12.73 - 2.0 - 4 * 0.1) / 5;
        c.crit.forEach((k, j) => {
          const x = 2.0 + j * (cw + 0.1); const col = CR[j];
          d.rect(s, x, 1.5, cw, 0.9, { fill: TINT[col], line: col, lw: 1.25, radius: 0.1 });
          d.num(s, j + 1, x + 0.12, 1.5 + (0.9 - 0.36) / 2, 0.36, col, 13);
          d.t(s, `**${k.k}**`, x + 0.55, 1.52, cw - 0.62, 0.86, { size: 13, color: col, align: 'center', valign: 'middle', fit: true, max: 13, min: 9.5 });
        });
        const start = lvl.id === 'A1' ? 24 : lvl.id === 'A2' ? 22 : 20;
        const size = fitType(c.ex, c.crit, 1.15, 2.62, 12.7, 6.98 - 2.62, start);
        typeset(s, c.ex, c.crit, 1.15, 2.62, 12.7, size, true);
      }
      g += 1;
    });
  });

  // ------------------------------------------------------------ variantes
  d.section('Variantes');
  {
    const s = d.page({ g, tag: 'VARIANTES', tagColor: 'tx2', title: 'Six variantes ludiques' });
    const V = [['stopwatch', 'Contre la montre', 'Cinq phrases en cinq minutes. Le sablier tourne !'], ['link', 'La chaîne', 'Cinq apprenant·es, cinq phrases : chacun·e ajoute la sienne à l’oral.'], ['detective', 'Devinez le critère', 'On lit sa production ; la classe retrouve les cinq critères.'],
      ['game-die', 'Le dé', 'On lance le dé : la phrase indiquée doit être dite en premier.'], ['up-arrow', 'Niveau supérieur', 'Même image, critères du niveau suivant : A1 → A2 → B1.'], ['trophy', 'La meilleure chute', 'Toutes les chutes au tableau ; la classe vote.']];
    const cw = (12.13 - 2 * 0.2) / 3; const ch = 2.15;
    V.forEach(([ic, h, t], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.2); const y = 1.6 + Math.floor(i / 3) * (ch + 0.2);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: CR[i % 5], lw: 1.5, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.2, y + 0.2, 0.8, 0.8);
      d.t(s, `**${h}**`, x + 1.15, y + 0.2, cw - 1.3, 0.8, { size: 17, color: CR[i % 5], valign: 'middle' });
      d.t(s, t, x + 0.2, y + 1.1, cw - 0.4, 0.95, { size: 14, color: 'tx1', valign: 'top' });
    });
  }
}

module.exports = { meta, build };
