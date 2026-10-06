// Werken, de werking, werkbaar — La dérivation : passer d'une catégorie de mot à l'autre (complément A2–B1)
const { BORDER, plain, HEX, PURPLE } = require('../lib');

const meta = {
  n: 'D', slug: 'Afleiding', title: 'Werken, de werking, werkbaar — La dérivation', short: 'La dérivation',
  template: 'derivation_afleiding.md', file: 'Afleiding_La_derivation.pptx',
  docTitle: 'Werken, de werking, werkbaar — La dérivation : passer d’une catégorie de mot à l’autre',
  foot: 'Néerlandais · A2–B1 · La dérivation',
};

// comme au M14 : nom bleu · verbe rouge · adjectif orange ; ici en plus : adverbe vert · affixes (suffixes, préfixes) violet
const CAT = {
  N: { c: 'accent2', lab: 'NOM', nl: 'zelfstandig naamwoord', ic: 'package' },
  V: { c: 'accent6', lab: 'VERBE', nl: 'werkwoord', ic: 'person-running' },
  A: { c: 'accent1', lab: 'ADJECTIF', nl: 'bijvoeglijk naamwoord', ic: 'artist-palette' },
  D: { c: 'accent3', lab: 'ADVERBE', nl: 'bijwoord', ic: 'stopwatch' },
  X: { c: 'purple', lab: 'AFFIXE' },
  O: { c: 'accent5', lab: '' },
};
const AF = 'purple'; const INK = '17375E'; const DE = 'tx2'; const HET = 'accent1';
const hexOf = (c) => (c === 'purple' ? PURPLE : c === 'tx2' ? INK : HEX[c] || c);
const TINT = { accent2: 'EAF2FB', accent6: 'FBEDEB', accent1: 'FDF1E6', accent3: 'E8F4EC', purple: 'F1ECF7', accent5: 'F1F3F6', tx2: 'E6EBF2' };

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const bw = (t, size) => wOf(t, size) * 1.12 + 0.08;
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const rich = (s, segs, x, y, w, h, o = {}) => s.addText(segs.map(([text, so]) => ({ text, options: so })), {
    x, y, w, h, fontSize: o.size || 18, color: o.color || 'tx1', align: o.align || 'left', valign: o.valign || 'middle', margin: 0, isTextBox: true,
  });
  // mot coloré selon sa catégorie : plein (fill) ou clair
  const chip = (s, t, k, x, y, o = {}) => {
    const size = o.size || 18; const h = o.h || 0.56; const c = CAT[k].c; const w = o.w || bw(t, size);
    d.rect(s, x, y, w, h, { fill: o.fill ? c : TINT[c], line: o.fill ? null : c, lw: 1.75, radius: 0.12 });
    d.t(s, k === 'X' || o.roman ? `**${t}**` : `//**${t}**//`, x, y, w, h, { size, color: o.fill ? 'bg1' : c, align: 'center', valign: 'middle' });
    return x + w;
  };
  // la machine à mots : base (+ affixe) → résultat
  const eq = (s, x, y, base, bk, affix, res, rk, o = {}) => {
    const size = o.size || 18; const h = o.h || 0.56; const g = o.tight ? 0.05 : 0.1; const aw = o.tight ? 0.35 : 0.45;
    let cx = x;
    if (o.ill) { d.ill(s, o.ill, cx, y - 0.05, h + 0.1, h + 0.1); cx += h + 0.25; }
    cx = chip(s, base, bk, cx, y, { size, h, w: o.wb }) + g;
    if (affix) {
      d.t(s, '+', cx, y, 0.3, h, { size: size + 2, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      cx = chip(s, affix, 'X', cx + 0.32, y, { size, h, fill: true, w: o.wa }) + g;
    }
    d.t(s, '→', cx, y, aw, h, { size: size + 4, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    const rx = cx + aw + g;
    cx = chip(s, res, rk, rx, y, { size, h, fill: true, w: o.wr });
    if (o.fr && o.frBelow) d.t(s, o.fr, rx, y + h, Math.max(cx - rx, 2.2), 0.26, { size: o.frs || 11.5, italic: true, color: 'accent5' });
    else if (o.fr) d.t(s, o.fr, cx + 0.2, y, o.frw || 3, h, { size: o.frs || 14, italic: true, color: 'accent5', valign: 'middle' });
    return cx;
  };
  // carte « base ↓ résultat »
  const pcard = (s, x, y, w, h, base, bk, res, rk, o = {}) => {
    d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.1, shadow: true });
    d.t(s, `//**${base}**// ↓`, x + 0.05, y + 0.04, w - 0.1, h * 0.42, { size: o.bs || 14, color: CAT[bk].c, align: 'center', valign: 'middle' });
    chip(s, res, rk, x + 0.1, y + h * 0.48, { size: o.rs || 14, h: h * 0.44, fill: true, w: w - 0.2 });
  };
  // le carrefour miniature (« vous êtes ici »), arête active en violet
  const mini = (s, act) => {
    const P = { N: [12.06, 0.42], V: [11.52, 1.2], A: [12.6, 1.2] }; const r = 0.17;
    [['N', 'V'], ['N', 'A'], ['V', 'A']].forEach(([a, b]) => d.line(s, P[a][0], P[a][1], P[b][0], P[b][1], { color: 'C9D1DC', lw: 1.5, arrow: false }));
    if (act && act.length === 2 && P[act[0]] && P[act[1]]) {
      const [a, b] = [P[act[0]], P[act[1]]]; const dx = b[0] - a[0]; const dy = b[1] - a[1]; const L = Math.hypot(dx, dy);
      d.line(s, a[0] + dx / L * r, a[1] + dy / L * r, b[0] - dx / L * (r + 0.02), b[1] - dy / L * (r + 0.02), { color: PURPLE, lw: 3.5 });
    }
    Object.entries(P).forEach(([k, [x, y]]) => {
      d.oval(s, x - r, y - r, 2 * r, 2 * r, { fill: CAT[k].c, line: 'FFFFFF', lw: 1 });
      d.t(s, `**${k}**`, x - r, y - r, 2 * r, 2 * r, { size: 9, color: 'bg1', align: 'center', valign: 'middle' });
    });
    if (act === 'AD') { d.t(s, '**= D**', 12.78, 1.03, 0.5, 0.34, { size: 9, color: CAT.D.c, valign: 'middle' }); }
  };
  // encadré de règle : norme (✓) et exceptions (⚠)
  const rule = (s, x, y, w, h, title, lines, c = AF, o = {}) => {
    d.rect(s, x, y, w, h, { fill: TINT[c] || 'FFFFFF', line: c, lw: 1.5, radius: 0.12 });
    d.t(s, `**${title}**`, x + 0.2, y + 0.08, w - 0.4, 0.42, { size: o.hs || 15, color: c, valign: 'middle' });
    d.t(s, lines, x + 0.2, y + 0.52, w - 0.4, h - 0.6, { size: o.size || 14, gap: o.gap ?? 4, valign: 'top' });
  };
  const sec = (s, k1, k2, x = 0.6, y = 1.55) => {
    let cx = chip(s, CAT[k1].lab, k1, x, y, { size: 12, h: 0.36, fill: true, roman: true });
    d.t(s, '→', cx + 0.05, y, 0.4, 0.36, { size: 16, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
    cx = chip(s, CAT[k2].lab, k2, cx + 0.5, y, { size: 12, h: 0.36, fill: true, roman: true });
    return cx;
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, chip: 'COMPLÉMENT · A2–B1', title: 'Werken,\nde werking,\nwerkbaar', sub: 'La dérivation : passer d’une catégorie de mot à l’autre', line: 'nom · verbe · adjectif · adverbe',
    visual: (s) => {
      d.rect(s, 6.9, 1.2, 6.15, 4.2, { fill: 'FFFFFF', line: null, radius: 0.16 });
      d.ill(s, 'gear', 9.45, 2.65, 1.0, 1.0);
      const W = [['werken', 'V', 7.15, 1.5], ['de werking', 'N', 10.35, 1.5], ['werkbaar', 'A', 7.15, 4.45], ['werkloos', 'A', 10.6, 4.45], ['de werker', 'N', 7.15, 2.95], ['de werkloosheid', 'N', 10.55, 2.95]];
      W.forEach(([t, k, x, y]) => chip(s, t, k, x, y, { size: 15, h: 0.5, fill: true }));
      d.t(s, '**werk-**', 9.0, 3.7, 1.9, 0.5, { size: 18, color: 'tx2', align: 'center', valign: 'middle' });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaSearch', h: 'Reconnaître', t: 'Je reconnais la catégorie d’un mot grâce à son suffixe.', color: 'accent2' },
      { icon: 'FaCogs', h: 'Transformer', t: 'Je passe du verbe au nom, du nom à l’adjectif… avec la bonne règle.', color: 'purple' },
      { icon: 'FaPenFancy', h: 'Écrire', t: 'Je choisis le style verbal (oral) ou nominal (écrit).', color: 'accent1' },
    ],
    band: 'Un mot connu = toute une famille de mots en plus : la dérivation multiplie votre vocabulaire.',
  });

  // ---------------------------------------------------------------- 3 échauffement : la famille werk
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Une racine, toute une famille' });
    const cx = 6.66; const cy = 3.95;
    d.oval(s, cx - 0.95, cy - 0.62, 1.9, 1.24, { fill: 'tx2', line: null, shadow: true });
    d.t(s, '**werk-**', cx - 0.95, cy - 0.62, 1.9, 1.24, { size: 26, color: 'bg1', align: 'center', valign: 'middle' });
    d.ill(s, 'briefcase', 0.7, 1.55, 0.9, 0.9);
    const W = ['het werk', 'werken', 'de werker', 'de werking', 'werkloos', 'de werkloosheid', 'werkbaar', 'bewerken'];
    W.forEach((t, i) => {
      const a = (-90 + i * 45) * Math.PI / 180; const x = cx + Math.cos(a) * 4.0; const y = cy + Math.sin(a) * 1.85;
      const w = bw(t, 19);
      d.line(s, cx + Math.cos(a) * 1.0, cy + Math.sin(a) * 0.66, x - Math.cos(a) * w / 2, y - Math.sin(a) * 0.3, { color: 'C9D1DC', lw: 1.5, arrow: false });
      d.rect(s, x - w / 2, y - 0.3, w, 0.6, { fill: 'FFFFFF', line: 'accent5', lw: 1.5, radius: 0.12, shadow: true });
      d.t(s, `//**${t}**//`, x - w / 2, y - 0.3, w, 0.6, { size: 19, color: 'tx1', align: 'center', valign: 'middle' });
    });
    band(s, 'Nom, verbe ou adjectif ? Quel petit morceau change la catégorie ?', 6.3, 0.55, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 4 les catégories dans la phrase
  {
    const s = d.page({ g: 4, tag: 'RAPPEL', title: 'Quatre catégories, quatre rôles dans la phrase' });
    const P = [['De', 'O'], ['nieuwe', 'A'], ['collega', 'N'], ['werkt', 'V'], ['snel', 'D'], ['aan', 'O'], ['het rapport.', 'N']];
    const LAB = { A: 'adjectif', N: '', V: 'verbe', D: 'adverbe' };
    let x = 1.3; const y = 1.85;
    P.forEach(([t, k], i) => {
      const w = k === 'O' ? wOf(t, 24) : bw(t, 24);
      if (k === 'O') d.t(s, `//${t}//`, x, y, w, 0.72, { size: 24, color: 'tx1', align: 'center', valign: 'middle' });
      else chip(s, t, k, x, y, { size: 24, h: 0.72, fill: true, w });
      const lab = k === 'N' ? (i === 2 ? 'nom · sujet' : 'nom · complément') : LAB[k];
      if (lab) d.t(s, lab, x - 0.4, y + 0.78, w + 0.8, 0.35, { size: 13, italic: true, bold: true, color: CAT[k].c, align: 'center' });
      x += w + 0.1;
    });
    const C = [['N', 'de / het devant · un pluriel', 'de collega · het rapport', 'sujet ou complément'], ['V', 'se conjugue', 'ik werk · hij werkte', 'le cœur de la phrase'],
      ['A', 'avant le nom (+ e) ou après zijn', 'de nieuwe collega · Ze is nieuw.', 'décrit un nom'], ['D', 'dit comment, quand, où', 'Ze werkt snel.', 'décrit un verbe']];
    const cw = (12.13 - 0.45) / 4;
    C.forEach(([k, test, ex, role], i) => {
      const xx = 0.6 + i * (cw + 0.15); const c = CAT[k].c;
      d.rect(s, xx, 3.25, cw, 2.75, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.rect(s, xx, 3.25, cw, 0.55, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${CAT[k].lab}**`, xx, 3.25, cw, 0.55, { size: 16, color: 'bg1', align: 'center', valign: 'middle' });
      d.ill(s, CAT[k].ic, xx + cw / 2 - 0.35, 3.88, 0.7, 0.7);
      d.t(s, `**${test}**`, xx + 0.12, 4.62, cw - 0.24, 0.55, { size: 13, color: c, align: 'center', valign: 'middle' });
      d.t(s, `//${ex}//`, xx + 0.12, 5.15, cw - 0.24, 0.42, { size: 14, align: 'center', valign: 'middle' });
      d.t(s, role, xx + 0.12, 5.55, cw - 0.24, 0.38, { size: 12, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    });
    band(s, 'Dériver = changer la **catégorie** d’un mot… donc son **rôle** dans la phrase.', 6.25, 0.55, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 5 le carrefour (DV1)
  {
    const s = d.page({ g: 5, tag: 'LA CARTE', title: 'Le carrefour des catégories' });
    const N = [6.66, 2.35]; const V = [3.1, 5.0]; const A = [10.2, 5.0]; const D = [12.27, 5.0]; const r = 0.62;
    const pair = (P, Q, cPQ, cQP) => {
      const dx = Q[0] - P[0]; const dy = Q[1] - P[1]; const L = Math.hypot(dx, dy); const ux = dx / L; const uy = dy / L; const nx = -uy; const ny = ux; const o = 0.14;
      d.line(s, P[0] + ux * r + nx * o, P[1] + uy * r + ny * o, Q[0] - ux * (r + 0.05) + nx * o, Q[1] - uy * (r + 0.05) + ny * o, { color: hexOf(cPQ), lw: 3 });
      d.line(s, Q[0] - ux * r - nx * o, Q[1] - uy * r - ny * o, P[0] + ux * (r + 0.05) - nx * o, P[1] + uy * (r + 0.05) - ny * o, { color: hexOf(cQP), lw: 3 });
    };
    pair(V, N, CAT.N.c, CAT.V.c); pair(N, A, CAT.A.c, CAT.N.c); pair(V, A, CAT.A.c, CAT.V.c);
    const node = (k, [cx, cy], rr) => {
      d.oval(s, cx - rr, cy - rr, 2 * rr, 2 * rr, { fill: CAT[k].c, line: 'FFFFFF', lw: 2, shadow: true });
      d.t(s, `**${CAT[k].lab}**`, cx - rr - 0.2, cy - 0.22, 2 * rr + 0.4, 0.44, { size: rr > 0.5 ? 14 : 10, color: 'bg1', align: 'center', valign: 'middle' });
    };
    node('N', N, r); node('V', V, r); node('A', A, r); node('D', D, 0.45);
    d.t(s, '**=**', 10.82, 4.7, 0.98, 0.6, { size: 28, color: CAT.D.c, align: 'center', valign: 'middle' });
    d.ill(s, 'gear', 6.2, 3.45, 0.92, 0.92);
    d.t(s, '//le suffixe décide//', 5.4, 4.38, 2.5, 0.35, { size: 13, bold: true, color: AF, align: 'center' });
    const lab = (x, y, w, f, t, sfx) => {
      d.rect(s, x, y, w, 1.0, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      rich(s, [[CAT[f].lab, { bold: true, color: hexOf(CAT[f].c), fontSize: 12 }], ['  →  ', { bold: true, color: hexOf('accent5'), fontSize: 12 }], [CAT[t].lab, { bold: true, color: hexOf(CAT[t].c), fontSize: 12 }]], x + 0.15, y + 0.05, w - 0.3, 0.35);
      d.t(s, `//**${sfx}**//`, x + 0.15, y + 0.38, w - 0.3, 0.58, { size: 14, color: AF, valign: 'middle' });
    };
    lab(0.6, 1.55, 4.5, 'V', 'N', 'het + inf. · radical · -ing · -er · -atie');
    lab(0.6, 2.7, 3.5, 'N', 'V', '+ -en · -eren · be-');
    lab(8.85, 1.55, 3.88, 'A', 'N', '-heid · -te · -iteit');
    lab(9.15, 2.7, 3.58, 'N', 'A', '-ig · -lijk · -isch · -loos · -en');
    lab(3.75, 5.8, 3.0, 'V', 'A', '-baar · -end · participe');
    lab(6.95, 5.8, 2.8, 'A', 'V', 'ver- … -en');
    lab(9.95, 5.8, 2.78, 'A', 'D', '= rien ne change !');
  }

  // ---------------------------------------------------------------- 6 les briques (DV3)
  {
    const s = d.page({ g: 6, tag: 'LE PRINCIPE', title: 'Préfixe + racine + suffixe' });
    const R = [[[['on-', 'X'], ['be-', 'X'], ['reik', 'V'], ['-baar', 'X']], 'onbereikbaar', 'A', 'injoignable, inaccessible', 'mobile-phone'], [[['ver-', 'X'], ['groot', 'A'], ['-en', 'X']], 'vergroten', 'V', 'agrandir', 'chart-increasing'], [[['werk', 'N'], ['-loos', 'X'], ['-heid', 'X']], 'de werkloosheid', 'N', 'le chômage', 'briefcase']];
    R.forEach(([parts, res, k, fr, ic], i) => {
      const y = 1.7 + i * 1.3;
      d.ill(s, ic, 0.6, y - 0.05, 0.85, 0.85);
      let x = 1.65;
      parts.forEach(([t, kk]) => {
        const w = bw(t, 22) + 0.1;
        [0.2, w - 0.45].forEach((f) => d.rect(s, x + f, y - 0.12, 0.25, 0.14, { fill: CAT[kk].c, line: null, radius: 0.03 }));
        d.rect(s, x, y, w, 0.72, { fill: CAT[kk].c, line: null, radius: 0.06 });
        d.t(s, `**${t}**`, x, y, w, 0.72, { size: 22, color: 'bg1', align: 'center', valign: 'middle' });
        x += w + 0.06;
      });
      d.t(s, '→', x + 0.1, y, 0.6, 0.72, { size: 28, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      const e = chip(s, res, k, x + 0.8, y + 0.04, { size: 20, h: 0.64, fill: true });
      d.t(s, [`**${CAT[k].lab.toLowerCase()}**`, `« ${fr} »`], e + 0.2, y, 12.73 - e - 0.2, 0.72, { size: 14, color: CAT[k].c, valign: 'middle', gap: 0 });
    });
    const B = [['X', 'le **préfixe** (à gauche) change le **sens** : //on-// = le contraire, //ver-// = rendre…'], ['V', 'la **racine** porte l’idée : //reik// (bereiken), //groot//, //werk//'], ['X', 'le **suffixe** (à droite) décide la **catégorie** et l’**article** : //-baar// → adjectif, //-heid// → //de//']];
    B.forEach(([k, t], i) => {
      const y = 5.4 + i * 0.45;
      d.rect(s, 0.6, y + 0.1, 0.25, 0.25, { fill: CAT[k].c, line: null, radius: 0.04 });
      d.t(s, t, 1.0, y, 11.7, 0.45, { size: 15, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 7 V → N : het + infinitif, het ge-
  d.section('Verbe → nom');
  {
    const s = d.page({ g: 7, tag: 'VERBE → NOM', tagColor: CAT.N.c, title: 'L’action : het + infinitif' });
    mini(s, 'VN');
    const L = [['roken', 'het roken', 'cigarette', 'Het roken is hier verboden.'], ['betalen', 'het betalen', 'credit-card', 'Het betalen kan met de kaart.'], ['leren', 'het leren', 'open-book', 'Het leren van een taal kost tijd.']];
    L.forEach(([b, r, ic, ex], i) => {
      const y = 1.65 + i * 0.95;
      eq(s, 0.6, y, b, 'V', null, r, 'N', { ill: ic, size: 19, h: 0.6, wb: 1.6, wr: 2.1 });
      d.t(s, `//${ex}//`, 5.95, y, 6.8, 0.6, { size: 17, valign: 'middle' });
    });
    rule(s, 0.6, 4.55, 5.9, 1.55, '✓ La norme', ['**toujours possible** · **toujours het** · pas de pluriel', '= « le fait de… » : //het roken// = le fait de fumer'], 'accent3');
    rule(s, 6.75, 4.55, 5.98, 1.55, '+ het ge- + radical : l’action qui dure, se répète', ['//praten → **het gepraat** · lachen → **het gelach**//', '//zoeken → **het gezoek**// · souvent agaçant'], AF, { size: 15 });
    band(s, 'À l’écrit (panneaux, règlements) : //**Het** parkeren is verboden. · **Het** betreden van het gras…//', 6.25, 0.55, 'tx2', 16);
  }
  // ---------------------------------------------------------------- 8 V → N : -ing
  {
    const s = d.page({ g: 8, tag: 'VERBE → NOM', tagColor: CAT.N.c, title: 'radical + -ing = de …ing' });
    mini(s, 'VN');
    const L = [['vergaderen', '-ing', 'de vergadering', 'spiral-calendar', 'la réunion'], ['betalen', '-ing', 'de betaling', 'credit-card', 'le paiement'], ['verwarmen', '-ing', 'de verwarming', 'thermometer', 'le chauffage'], ['uitnodigen', '-ing', 'de uitnodiging', 'envelope-with-arrow', 'l’invitation']];
    L.forEach(([b, a, r, ic, fr], i) => eq(s, 0.6, 1.62 + i * 0.82, b, 'V', a, r, 'N', { ill: ic, size: 17, h: 0.54, wb: 2.0, wa: 0.8, wr: 2.6, fr: `« ${fr} »`, frBelow: true }));
    rule(s, 8.3, 1.6, 4.43, 3.2, '⚠ Pas avec tous les verbes', ['✗ //de eting// → //het eten//', '✗ //de slaping// → //de slaap//', '//de werking// = le fonctionnement', '(le travail = //het werk//)', '→ en cas de doute : //het// + infinitif'], 'accent6', { size: 14.5, gap: 6 });
    rule(s, 0.6, 4.95, 4.6, 1.4, '✓ La norme', ['radical + //-ing// · **toujours de** · pluriel //-en//', 'surtout avec un préfixe ou une particule : //be-, ver-, uit-, op-…//'], 'accent3', { size: 13.5 });
    rule(s, 5.4, 4.95, 7.33, 1.4, '⚠ Le sens glisse parfois vers le résultat', ['//de lezing// = la **conférence** (la lecture = //het lezen//) · //de woning// = le logement', '//de regering// = le gouvernement · //de opleiding// = la formation'], 'accent6', { size: 13.5 });
  }
  // ---------------------------------------------------------------- 9 V → N : le radical seul
  {
    const s = d.page({ g: 9, tag: 'VERBE → NOM', tagColor: CAT.N.c, title: 'Le radical seul : de start, het begin' });
    mini(s, 'VN');
    const B = [['**DE** + radical', 'le cas fréquent', DE, [['starten', 'de start'], ['wensen', 'de wens'], ['vragen', 'de vraag'], ['groeien', 'de groei']]],
      ['**HET** + radical', 'avec //be-, ge-, ver-// (souvent)', HET, [['beginnen', 'het begin'], ['gebruiken', 'het gebruik'], ['vertrekken', 'het vertrek'], ['bezoeken', 'het bezoek']]],
      ['**la voyelle change**', 'à apprendre', AF, [['springen', 'de sprong'], ['grijpen', 'de greep'], ['spreken', 'het gesprek'], ['verbieden', 'het verbod']]]];
    const cw = (12.73 - 3.3 - 0.3) / 4;
    B.forEach(([h, sub, c, L], i) => {
      const y = 1.6 + i * 1.12;
      d.rect(s, 0.6, y, 2.55, 1.02, { fill: c, line: null, radius: 0.12 });
      d.t(s, [h, `//${sub}//`], 0.75, y, 2.3, 1.02, { size: 14, color: 'bg1', valign: 'middle', gap: 2 });
      L.forEach(([b, r], j) => pcard(s, 3.3 + j * (cw + 0.1), y + 0.04, cw, 0.94, b, 'V', r, 'N', { bs: 14, rs: 15 }));
    });
    rule(s, 0.6, 5.0, 12.13, 0.95, '⚠ Exceptions à retenir', ['//**de** verkoop// (verkopen) · //**de** verhuis// (BE, verhuizen) · //het slot// (sluiten) · **het** sans préfixe : //het werk, het spel// : vérifiez au dictionnaire'], 'accent6', { size: 14 });
    band(s, 'Le radical seul = **l’acte** ou **le résultat** : //de start, het vertrek, de vraag//.', 6.15, 0.55, 'tx2', 16);
  }
  // ---------------------------------------------------------------- 10 V → N : la personne et l'objet
  {
    const s = d.page({ g: 10, tag: 'VERBE → NOM', tagColor: CAT.N.c, title: 'Qui fait l’action ? -er, -aar, -der' });
    mini(s, 'VN');
    const C = [['-er', 'le cas normal', [['werken', 'de werker'], ['spelen', 'de speler'], ['bakken', 'de bakker'], ['schrijven', 'de schrijver']]], ['-aar', '//-el, -er, -en// non accentué · ⚠ //leraar//', [['wandelen', 'de wandelaar'], ['luisteren', 'de luisteraar'], ['tekenen', 'de tekenaar'], ['leren', 'de leraar']]], ['-der', 'radical en //-r//', [['besturen', 'de bestuurder'], ['huren', 'de huurder'], ['bewaren', 'de bewaarder']]]];
    const cw = (12.73 - 3.3 - 0.3) / 4;
    C.forEach(([sf, when, L], i) => {
      const y = 1.6 + i * 1.0;
      d.rect(s, 0.6, y, 2.55, 0.9, { fill: TINT[AF], line: AF, lw: 1.25, radius: 0.12 });
      const e = chip(s, sf, 'X', 0.75, y + 0.08, { size: 17, h: 0.42, fill: true });
      d.t(s, when, 0.75, y + 0.52, 2.35, 0.34, { size: 11.5, color: AF, valign: 'middle' });
      if (e < 0) return;
      L.forEach(([b, r], j) => pcard(s, 3.3 + j * (cw + 0.1), y, cw, 0.9, b, 'V', r, 'N', { bs: 13, rs: 14 }));
    });
    rule(s, 0.6, 4.7, 7.0, 1.75, 'Au féminin (si on le précise)', ['//-ster// : //de verkoopster, de schrijfster// · //-es// : //de lerares//', '//-in// : //de vriendin// · souvent **la même forme** : //de manager, de collega, de dokter//'], CAT.N.c, { size: 14 });
    d.rect(s, 7.85, 4.7, 4.88, 1.75, { fill: TINT.accent5, line: 'accent5', lw: 1.5, radius: 0.12 });
    d.t(s, '**l’appareil : toujours -er**', 8.05, 4.75, 4.5, 0.42, { size: 15, color: 'accent5', valign: 'middle' });
    [['printer', 'printen', 'de printer'], ['alarm-clock', 'wekken', 'de wekker'], ['fire', 'aansteken', 'de aansteker']].forEach(([ic, b, r], i) => {
      eq(s, 8.05, 5.2 + i * 0.4, b, 'V', null, r, 'N', { ill: ic, size: 12, h: 0.34, wb: 1.1, tight: true });
    });
  }
  // ---------------------------------------------------------------- 11 V → N : -eren → -atie
  {
    const s = d.page({ g: 11, tag: 'VERBE → NOM', tagColor: CAT.N.c, title: 'Le pont des francophones : -eren → -atie' });
    mini(s, 'VN');
    d.flag(s, 'fr', 0.6, 1.62, 0.6); d.flag(s, 'nl', 1.3, 1.62, 0.6);
    d.t(s, 'Les verbes en //-eren// viennent souvent du français : le nom ressemble au mot français en //-tion//.', 2.1, 1.55, 10.6, 0.55, { size: 16, color: 'tx2', valign: 'middle' });
    const L = [['organiseren', 'de organisatie', 'l’organisation'], ['informeren', 'de informatie', 'l’information'], ['presenteren', 'de presentatie', 'la présentation'], ['communiceren', 'de communicatie', 'la communication'], ['installeren', 'de installatie', 'l’installation'], ['reserveren', 'de reservatie', 'la réservation (BE)']];
    L.forEach(([b, r, fr], i) => {
      const x = 0.6 + (i % 2) * 6.15; const y = 2.35 + Math.floor(i / 2) * 0.82;
      eq(s, x, y, b, 'V', null, r, 'N', { size: 16, h: 0.56, wb: 2.2, wr: 2.6, fr, frw: 1.0, frs: 1 });
      d.t(s, `« ${fr} »`, x + 0.0, y + 0.56, 5.9, 0.26, { size: 11, italic: true, color: 'accent5', align: 'right' });
    });
    rule(s, 0.6, 4.88, 5.95, 1.38, '✓ La norme', ['//-eren// → //-atie// ou //-tie// · **toujours de**', 'l’accent tombe **avant** //-tie// : //infor**ma**tie//'], 'accent3', { size: 13.5 });
    rule(s, 6.78, 4.88, 5.95, 1.38, '⚠ Exceptions', ['//controleren → **de controle**// · //discussiëren → **de discussie**//', '//reserveren → de reservering// (NL)'], 'accent6', { size: 13.5 });
    band(s, 'Et dans l’autre sens (diapo 18) : //de organisatie → **organiseren**//.', 6.35, 0.5, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 12 A → N : -heid ou -te
  d.section('Adjectif → nom');
  {
    const s = d.page({ g: 12, tag: 'ADJECTIF → NOM', tagColor: CAT.N.c, title: 'La qualité : -heid ou -te ?' });
    mini(s, 'AN');
    const C = [['-heid', 'la qualité, l’abstrait', [['vrij', 'de vrijheid', 'dove'], ['gezond', 'de gezondheid', 'green-salad'], ['snel', 'de snelheid', 'racing-car'], ['mogelijk', 'de mogelijkheid', 'light-bulb']]], ['-te', 'la mesure, la sensation', [['lang', 'de lengte', 'straight-ruler'], ['warm', 'de warmte', 'thermometer'], ['hoog', 'de hoogte', 'mountain'], ['breed', 'de breedte', 'left-right-arrow']]]];
    const cw = 5.95;
    C.forEach(([sf, use, L], j) => {
      const x = 0.6 + j * (cw + 0.23);
      d.rect(s, x, 1.6, cw, 3.45, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      const e = chip(s, sf, 'X', x + 0.2, 1.72, { size: 20, h: 0.55, fill: true });
      d.t(s, use, e + 0.2, 1.72, x + cw - e - 0.3, 0.55, { size: 15, italic: true, bold: true, color: AF, valign: 'middle' });
      L.forEach(([b, r, ic], i) => eq(s, x + 0.2, 2.45 + i * 0.64, b, 'A', null, r, 'N', { size: 16, h: 0.5, wb: 1.6, ill: ic }));
    });
    rule(s, 0.6, 5.2, 5.95, 1.0, '✓ La norme', ['**toujours de** · pluriel : //-heden, -tes// (//de mogelijkheden//)'], 'accent3');
    rule(s, 6.78, 5.2, 5.95, 1.0, '⚠ Exceptions', ['//lang → de l**e**ngte// · //ziek → de **ziekte**// · //lief → de **liefde**// · //koud → de **kou(de)**//'], 'accent6');
    band(s, 'En cas de doute : //-heid// est le plus fréquent et le plus productif.', 6.35, 0.5, 'tx2', 15);
  }
  // ---------------------------------------------------------------- 13 A → N : -iteit et l'adjectif nom
  {
    const s = d.page({ g: 13, tag: 'ADJECTIF → NOM', tagColor: CAT.N.c, title: '-iteit, et l’adjectif devenu nom' });
    mini(s, 'AN');
    d.rect(s, 0.6, 1.6, 5.95, 4.5, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
    d.flag(s, 'fr', 0.8, 1.75, 0.5);
    d.t(s, '**-iteit** = le français **-ité** (toujours //de//)', 1.45, 1.7, 5.0, 0.5, { size: 15, color: AF, valign: 'middle' });
    [['actief', 'de activiteit'], ['creatief', 'de creativiteit'], ['flexibel', 'de flexibiliteit'], ['populair', 'de populariteit'], ['nationaal', 'de nationaliteit']].forEach(([b, r], i) => eq(s, 0.8, 2.35 + i * 0.7, b, 'A', null, r, 'N', { size: 16, h: 0.52, wb: 1.75 }));
    d.rect(s, 6.78, 1.6, 5.95, 4.5, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
    d.t(s, '**l’adjectif devient nom** : article + adjectif + //-e//', 6.98, 1.7, 5.6, 0.5, { size: 15, color: AF, valign: 'middle' });
    rule(s, 6.98, 2.3, 5.55, 1.75, 'het + adj. + -e = « ce qui est… »', ['//**Het leuke** is dat we thuis werken.//', '//**Het moeilijke** is de uitspraak.// (ce qui est difficile)'], CAT.N.c, { size: 15, hs: 14 });
    rule(s, 6.98, 4.2, 5.55, 1.75, 'de + adj. + -e(n) = les personnes', ['//**de zieken** · **de ouderen** · **de werklozen**//', '//**De nieuwe** begint maandag.// (la nouvelle / le nouveau)'], CAT.N.c, { size: 15, hs: 14 });
    band(s, 'Le français fait pareil : « //le difficile, c’est…// », « //les malades// ».', 6.3, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 14 N → A : -ig, -lijk, -isch
  d.section('Nom → adjectif');
  {
    const s = d.page({ g: 14, tag: 'NOM → ADJECTIF', tagColor: CAT.A.c, title: 'Trois suffixes : -ig, -lijk, -isch' });
    mini(s, 'NA');
    const C = [['-ig', 'qui a…', 'sun', [['de zon', 'zonnig'], ['het geluk', 'gelukkig'], ['de moed', 'moedig'], ['de honger', 'hongerig']], '⚠ //de wind → wind**erig**// · //de nood → nodig//'],
      ['-lijk', 'qui est comme…', 'warning', [['de vriend', 'vriendelijk'], ['het gevaar', 'gevaarlijk'], ['de natuur', 'natuurlijk'], ['de vrouw', 'vrouwelijk']], '⚠ + //e// : //vriend**e**lijk, vrouw**e**lijk// · + //s// : //dagelijk**s**// · //-lijk// se dit [lək] (le //e// de « le »)'],
      ['-isch', '= le français -ique', 'wrench', [['de techniek', 'technisch'], ['de logica', 'logisch'], ['de praktijk', 'praktisch'], ['de economie', 'economisch']], '⚠ //de politiek → politiek// (même mot)']];
    const cw = (12.13 - 0.3) / 3;
    C.forEach(([sf, use, ic, L, ex], j) => {
      const x = 0.6 + j * (cw + 0.15);
      d.rect(s, x, 1.6, cw, 4.55, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      const e = chip(s, sf, 'X', x + 0.2, 1.72, { size: 20, h: 0.55, fill: true });
      d.t(s, use, e + 0.15, 1.72, x + cw - e - 0.95, 0.55, { size: 13, italic: true, bold: true, color: AF, valign: 'middle' });
      d.ill(s, ic, x + cw - 0.75, 1.68, 0.6, 0.6);
      const pw = (cw - 0.5) / 2;
      L.forEach(([b, r], i) => pcard(s, x + 0.2 + (i % 2) * (pw + 0.1), 2.45 + Math.floor(i / 2) * 1.22, pw, 1.1, b, 'N', r, 'A', { bs: 14, rs: 15 }));
      d.t(s, ex, x + 0.2, 4.95, cw - 0.4, 1.1, { size: 13.5, color: 'accent6', valign: 'middle' });
    });
    band(s, 'Orthographe : voyelle courte → consonne double : //de zon → zo**nn**ig// (diapo 23).', 6.35, 0.5, 'tx2', 15);
  }
  // ---------------------------------------------------------------- 15 N → A : -loos / -vol, -en
  {
    const s = d.page({ g: 15, tag: 'NOM → ADJECTIF', tagColor: CAT.A.c, title: 'Sans ou plein de : -loos, -vol, -rijk' });
    mini(s, 'NA');
    d.rect(s, 0.6, 1.6, 7.3, 4.55, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
    const e1 = chip(s, '-loos', 'X', 1.0, 1.75, { size: 18, h: 0.5, fill: true });
    d.t(s, 'sans', e1 + 0.12, 1.75, 1.2, 0.5, { size: 15, italic: true, bold: true, color: AF, valign: 'middle' });
    const e2 = chip(s, '-vol · -rijk', 'X', 4.3, 1.75, { size: 18, h: 0.5, fill: true });
    d.t(s, 'plein de', e2 + 0.12, 1.75, 1.3, 0.5, { size: 15, italic: true, bold: true, color: AF, valign: 'middle' });
    [['de hoop', 'hopeloos', 'hoopvol'], ['de zin', 'zinloos', 'zinvol'], ['de waarde', 'waardeloos', 'waardevol'], ['de kleur', 'kleurloos', 'kleurrijk']].forEach(([n, a, b], i) => {
      const y = 2.45 + i * 0.72;
      chip(s, a, 'A', 0.85, y, { size: 16, h: 0.5, fill: true, w: 1.95 });
      d.t(s, '←', 2.85, y, 0.4, 0.5, { size: 20, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      chip(s, n, 'N', 3.3, y, { size: 16, h: 0.5, w: 1.65 });
      d.t(s, '→', 5.0, y, 0.4, 0.5, { size: 20, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      chip(s, b, 'A', 5.45, y, { size: 16, h: 0.5, fill: true, w: 1.95 });
    });
    d.t(s, ['//werkloos// = sans emploi · //draadloos// = sans fil', '⚠ //-e-// de liaison : //hop**e**loos, nutt**e**loos//'], 0.85, 5.35, 6.9, 0.75, { size: 13, gap: 2, valign: 'middle' });
    d.rect(s, 8.15, 1.6, 4.58, 4.55, { fill: TINT[CAT.A.c], line: CAT.A.c, lw: 1.5, radius: 0.12 });
    d.t(s, '**-en : la matière**', 8.35, 1.68, 4.2, 0.5, { size: 16, color: CAT.A.c, valign: 'middle' });
    d.ill(s, 'wood', 11.75, 1.7, 0.75, 0.75);
    [['het hout', 'houten'], ['het goud', 'gouden'], ['het glas', 'glazen'], ['de wol', 'wollen']].forEach(([n, a], i) => eq(s, 8.35, 2.5 + i * 0.66, n, 'N', null, a, 'A', { size: 15, h: 0.48, wb: 1.5 }));
    d.t(s, ['**invariables** (M21) : //een houten tafel//', '⚠ //plastic// ne change pas'], 8.35, 5.15, 4.25, 0.9, { size: 13, gap: 2, valign: 'middle' });
    band(s, 'Retenez les paires de contraires : //hopeloos ↔ hoopvol//.', 6.35, 0.5, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 16 V → A : -baar
  d.section('Verbe → adjectif');
  {
    const s = d.page({ g: 16, tag: 'VERBE → ADJECTIF', tagColor: CAT.A.c, title: 'radical + -baar = « qu’on peut… »' });
    mini(s, 'VA');
    const L = [['drinken', 'drinkbaar', 'potable-water', 'potable'], ['eten', 'eetbaar', 'fork-and-knife', 'comestible'], ['betalen', 'betaalbaar', 'money-with-wings', 'abordable'], ['bereiken', 'bereikbaar', 'oncoming-bus', 'accessible, joignable'], ['lezen', 'leesbaar', 'open-book', 'lisible']];
    L.forEach(([b, r, ic, fr], i) => eq(s, 0.6, 1.62 + i * 0.86, b, 'V', '-baar', r, 'A', { ill: ic, size: 18, h: 0.54, wb: 1.7, wa: 1.1, wr: 2.05, fr: `« ${fr} »`, frBelow: true }));
    rule(s, 8.4, 1.6, 4.33, 1.75, '✓ La norme', ['radical + //-baar// = //-able//', 'le contraire : **on-** : //**on**betaalbaar, **on**leesbaar//'], 'accent3', { size: 14 });
    rule(s, 8.4, 3.5, 4.33, 2.4, '⚠ Exceptions', ['//zien → **zicht**baar//', '//gebruiken → **bruik**baar//', 'mots français : //acceptabel, flexibel, rendabel//'], 'accent6', { size: 14 });
    band(s, 'Radical = la forme de //ik// : //lezen → ik **lees** → **lees**baar · eten → ik **eet** → **eet**baar//', 6.1, 0.65, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 17 participes adjectifs
  {
    const s = d.page({ g: 17, tag: 'VERBE → ADJECTIF', tagColor: CAT.A.c, title: 'Les participes deviennent adjectifs' });
    mini(s, 'VA');
    const C = [['-end', 'le participe présent = « -ant »', [['boeien', 'boeiend', 'passionnant'], ['spannen', 'spannend', 'palpitant'], ['opvallen', 'opvallend', 'frappant'], ['dringen', 'dringend', 'urgent']], 'popcorn', 'een **spannende** film'],
      ['ge-…-t/-d/-en', 'le participe passé = « -é » (pas de //ge-// après //be-, ver-//)', [['sluiten', 'gesloten', 'fermé'], ['trouwen', 'getrouwd', 'marié'], ['vermoeien', 'vermoeid', 'fatigué'], ['interesseren', 'geïnteresseerd', 'intéressé']], 'locked', 'de **gesloten** deur · een **getrouwde** collega']];
    const cw = 5.95;
    C.forEach(([sf, use, L, ic, ex], j) => {
      const x = 0.6 + j * (cw + 0.23);
      d.rect(s, x, 1.6, cw, 4.0, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      chip(s, sf, 'X', x + 0.2, 1.72, { size: 17, h: 0.5, fill: true });
      d.t(s, use, x + 0.2, 2.28, cw - 1.2, 0.4, { size: 14, italic: true, bold: true, color: AF, valign: 'middle' });
      d.ill(s, ic, x + cw - 0.95, 1.7, 0.75, 0.75);
      L.forEach(([b, r, fr], i) => eq(s, x + 0.2, 2.8 + i * 0.6, b, 'V', null, r, 'A', { size: 14, h: 0.46, wb: 1.7, fr: `« ${fr} »`, frw: 1.4, frs: 12 }));
      d.t(s, `//${ex}//`, x + 0.2, 5.15, cw - 0.4, 0.4, { size: 14, valign: 'middle' });
    });
    rule(s, 0.6, 5.72, 12.13, 1.08, '⚠ Le -e de l’adjectif (M21)', ['participe en //-en// : pas de //-e// en plus → //de gesloten deur// · //interessant// = intéressant, //geïnteresseerd// = intéressé'], 'accent6', { size: 13.5 });
  }

  // ---------------------------------------------------------------- 18 N → V
  d.section('Vers le verbe');
  {
    const s = d.page({ g: 18, tag: '→ VERBE', tagColor: CAT.V.c, title: 'Du nom au verbe : + -en' });
    mini(s, 'NV');
    const L = [['de fiets', 'fietsen', 'bicycle'], ['de mail', 'mailen', 'e-mail'], ['de hamer', 'hameren', 'hammer'], ['het tennis', 'tennissen', 'tennis'], ['de ski', 'skiën', 'skier']];
    L.forEach(([b, r, ic], i) => eq(s, 0.6, 1.65 + i * 0.76, b, 'N', '-en', r, 'V', { ill: ic, size: 17, h: 0.54, wb: 1.75, wa: 0.85, wr: 1.75 }));
    rule(s, 7.05, 1.6, 5.68, 1.55, '✓ La norme : nom + -en', ['très productif, surtout avec les mots anglais :', '//appen, googelen, sms’en, filmen//'], 'accent3', { size: 14 });
    rule(s, 7.05, 3.3, 5.68, 1.55, '⚠ Orthographe', ['voyelle courte → consonne double : //tenni**ss**en, cha**tt**en//', 'tréma : //skiën// · apostrophe : //sms’en//'], 'accent6', { size: 14 });
    rule(s, 7.05, 5.0, 5.68, 1.25, 'be- + nom : un complément direct', ['//het antwoord → **be**antwoorden// : //een vraag beantwoorden//'], AF, { size: 14 });
    band(s, 'Et //-eren// pour les mots français : //de organisatie → **organiseren** · de controle → **controleren**//', 6.35, 0.5, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 19 A → V : ver- … -en
  {
    const s = d.page({ g: 19, tag: '→ VERBE', tagColor: CAT.V.c, title: 'Rendre plus… : ver- + adjectif + -en' });
    mini(s, 'AV');
    const L = [['groot', 'vergroten', 'agrandir'], ['klein', 'verkleinen', 'réduire'], ['beter', 'verbeteren', 'améliorer'], ['warm', 'verwarmen', 'chauffer'], ['nieuw', 'vernieuwen', 'renouveler'], ['lang', 'verlengen', 'prolonger']];
    L.forEach(([b, r, fr], i) => {
      const x = 0.6 + (i % 2) * 6.15; const y = 1.65 + Math.floor(i / 2) * 0.86;
      let cx = chip(s, 'ver-', 'X', x, y, { size: 17, h: 0.56, fill: true });
      cx = chip(s, b, 'A', cx + 0.06, y, { size: 17, h: 0.56, w: 1.05 });
      cx = chip(s, '-en', 'X', cx + 0.06, y, { size: 17, h: 0.56, fill: true });
      d.t(s, '→', cx + 0.05, y, 0.45, 0.56, { size: 22, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      const rx = cx + 0.55;
      cx = chip(s, r, 'V', rx, y, { size: 17, h: 0.56, fill: true, w: 1.85 });
      d.t(s, `« ${fr} »`, rx, y + 0.56, 2.2, 0.26, { size: 11.5, italic: true, color: 'accent5' });
    });
    d.ill(s, 'chart-increasing', 0.6, 4.35, 0.8, 0.8);
    rule(s, 1.55, 4.3, 5.2, 1.85, '✓ La norme', ['//ver-// + adjectif + //-en// = **rendre plus…**', 'avec le comparatif : //verbeteren, verergeren, verminderen//'], 'accent3', { size: 14 });
    rule(s, 6.95, 4.3, 5.78, 1.85, '⚠ Exceptions', ['la voyelle change : //lang → verl**e**ngen//', 'sans //ver-// : //open → openen · droog → drogen · leeg → legen//', '//(ge)makkelijk → ver**ge**makkelijken//'], 'accent6', { size: 13.5 });
    band(s, 'Le contraire avec un autre adjectif : //vergroten ↔ verkleinen · verlengen ↔ verkorten//', 6.35, 0.5, 'tx2', 15);
  }

  // ---------------------------------------------------------------- 20 adjectif = adverbe
  d.section('Adjectif et adverbe');
  {
    const s = d.page({ g: 20, tag: 'ADJECTIF = ADVERBE', tagColor: CAT.D.c, title: 'L’adverbe : pas de -ment !' });
    mini(s, 'AD');
    d.ill(s, 'racing-car', 0.6, 1.6, 0.9, 0.9);
    chip(s, 'een snelle auto', 'A', 1.7, 1.75, { size: 20, h: 0.6, fill: true });
    d.t(s, '**=**', 4.6, 1.7, 0.6, 0.7, { size: 30, color: CAT.D.c, align: 'center', valign: 'middle' });
    chip(s, 'Hij rijdt snel.', 'D', 5.3, 1.75, { size: 20, h: 0.6, fill: true });
    d.t(s, 'FR : rapide → rapide**ment**   ·   NL : //snel → snel//', 1.7, 2.33, 7.0, 0.32, { size: 14, color: 'tx2', valign: 'middle' });
    const L = [['duidelijk', 'clair', 'clairement'], ['voorzichtig', 'prudent', 'prudemment'], ['langzaam', 'lent', 'lentement'], ['echt', 'vrai', 'vraiment'], ['goed', 'bon', 'bien']];
    d.rect(s, 0.6, 2.7, 7.3, 0.42, { fill: 'tx2', line: null, radius: 0.06 });
    [['néerlandais', 0.75, 2.0], ['adjectif FR', 2.95, 2.2], ['adverbe FR', 5.25, 2.5]].forEach(([h, x, w]) => d.t(s, `**${h}**`, x, 2.7, w, 0.42, { size: 13, color: 'bg1', valign: 'middle' }));
    L.forEach(([nl, a, b], i) => {
      const y = 3.18 + i * 0.52;
      d.rect(s, 0.6, y, 7.3, 0.48, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.06 });
      d.t(s, `//**${nl}**//`, 0.75, y, 2.1, 0.48, { size: 16, color: CAT.D.c, valign: 'middle' });
      d.t(s, a, 2.95, y, 2.2, 0.48, { size: 15, color: CAT.A.c, valign: 'middle' });
      d.t(s, b, 5.25, y, 2.5, 0.48, { size: 15, color: 'tx2', valign: 'middle' });
    });
    rule(s, 8.15, 2.7, 4.58, 3.3, '⚠ Exceptions', ['adverbes sans adjectif : //**helaas**// (malheureusement), //**misschien**//, //**graag**//', '//**gelukkig**// = heureux **et** heureusement', '//-erwijs / -gewijs// : //gelukkig**erwijs**, stap**sgewijs**//'], 'accent6', { size: 14, gap: 6 });
    band(s, '⚠ ✗ //Hij werkt snellijk.// → ✓ //Hij werkt **snel**.// · L’adverbe ne prend **jamais** de //-e//.', 5.95 + 0.25, 0.6, 'accent6', 16);
  }

  // ---------------------------------------------------------------- 21 les préfixes
  {
    const s = d.page({ g: 21, tag: 'LES PRÉFIXES', tagColor: AF, title: 'Les préfixes changent le sens' });
    const C = [['on-', 'le contraire', 'cross-mark', [['mogelijk', 'onmogelijk'], ['gezond', 'ongezond'], ['bekend', 'onbekend']], 'A'], ['her-', 'à nouveau (re-)', 'repeat-button', [['openen', 'heropenen'], ['starten', 'herstarten'], ['gebruiken', 'hergebruiken']], 'V'],
      ['mis-', 'mal, de travers', 'warning', [['lukken', 'mislukken'], ['gebruiken', 'misbruiken'], ['lopen', 'mislopen']], 'V'], ['ont-', 'enlever, défaire', 'unlocked', [['dekken', 'ontdekken'], ['wikkelen', 'ontwikkelen'], ['dooien', 'ontdooien']], 'V']];
    const cw = (12.13 - 0.15) / 2; const ch = 2.15;
    C.forEach(([p, use, ic, L, k], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.15); const y = 1.6 + Math.floor(i / 2) * (ch + 0.12);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.15, y + 0.12, 0.6, 0.6);
      const e = chip(s, p, 'X', x + 0.9, y + 0.15, { size: 18, h: 0.5, fill: true });
      d.t(s, use, e + 0.15, y + 0.15, x + cw - e - 0.3, 0.5, { size: 15, italic: true, bold: true, color: AF, valign: 'middle' });
      L.forEach(([b, r], j) => eq(s, x + 0.2, y + 0.8 + j * 0.44, b, k, null, r, r.startsWith('het') ? 'N' : k, { size: 13, h: 0.38, wb: 1.4 }));
    });
    band(s, 'Le préfixe garde la catégorie (sauf //be-//, //ver-//). ⚠ //on-// pas avec tous : ✗ //onslecht// → //goed//. //herhalen// = répéter (sens figé).', 6.15, 0.65, 'tx2', 14.5);
  }

  // ---------------------------------------------------------------- 22 la boussole de l'article
  d.section('Combiner');
  {
    const s = d.page({ g: 22, tag: 'COMBINER', title: 'La boussole : le suffixe donne l’article' });
    d.ill(s, 'compass', 6.21, 1.55, 0.9, 0.9);
    const C = [['DE', DE, 0.6, ['-ing · de vergadering', '-heid · de vrijheid', '-te · de lengte', '-iteit · de kwaliteit', '-(a)tie · de informatie', '-er, -ster (personne) · de leraar', '-ij, -erij · de bakkerij', '-schap (relation) · de vriendschap']],
      ['HET', HET, 7.0, ['het + infinitif · het roken', 'ge- + radical · het gepraat', '-je · het huisje', '-isme · het toerisme', '-ment, -um · het document', '-sel · het mengsel', '-schap (statut) · het lidmaatschap', 'be-, ver-, ont- + radical · het begin (souvent)']]];
    C.forEach(([h, c, x, L]) => {
      d.rect(s, x, 2.5, 5.73, 3.55, { fill: TINT[c] || 'FDF1E6', line: hexOf(c), lw: 2, radius: 0.12 });
      d.rect(s, x, 2.5, 5.73, 0.55, { fill: c, line: null, radius: 0.12 });
      d.t(s, `**${h}**`, x, 2.5, 5.73, 0.55, { size: 20, color: 'bg1', align: 'center', valign: 'middle' });
      L.forEach((t, i) => {
        const [sf, ex] = t.split(' · ');
        d.t(s, `**${sf}**`, x + 0.2, 3.12 + i * 0.36, 2.7, 0.36, { size: 13.5, color: AF, valign: 'middle' });
        d.t(s, `//${ex}//`, x + 2.95, 3.12 + i * 0.36, 2.7, 0.36, { size: 13.5, valign: 'middle' });
      });
    });
    d.t(s, 'Comme au M14 : le **dernier** élément commande.', 0.6, 1.7, 5.4, 0.6, { size: 16, color: 'tx2', valign: 'middle' });
    d.t(s, '⚠ //het schilderij · de datum · het gebergte · de verkoop//', 7.4, 1.7, 5.3, 0.6, { size: 15, color: 'accent6', valign: 'middle' });
    band(s, 'Les mots en //-ing, -heid, -te, -iteit, -tie// sont **toujours de** : une bonne nouvelle !', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 23 l'orthographe
  {
    const s = d.page({ g: 23, tag: 'RAPPEL M4', title: 'L’orthographe suit les règles du M4' });
    const C = [['① Voyelle longue', 'syllabe ouverte : une seule lettre', [['groot', 'vergroten', 'A', 'V'], ['droog', 'drogen', 'A', 'V'], ['de droom', 'dromen', 'N', 'V']], 'syllabe fermée : deux lettres → //lezen → **lees**baar//'],
      ['② Voyelle courte', 'la consonne se double', [['de zon', 'zonnig', 'N', 'A'], ['wit', 'witten', 'A', 'V'], ['het tennis', 'tennissen', 'N', 'V']], '//bakken → de ba**kk**er// · //de pot → po**tt**en//'],
      ['③ f / v · s / z', 'entre deux voyelles : v, z', [['het glas', 'glazen', 'N', 'A'], ['de reis', 'reizen', 'N', 'V'], ['het geloof', 'geloven', 'N', 'V']], '//lief → de lie**f**de// : //f// reste devant consonne']];
    const cw = (12.13 - 0.3) / 3;
    C.forEach(([h, rl, L, note], j) => {
      const x = 0.6 + j * (cw + 0.15);
      d.rect(s, x, 1.6, cw, 4.4, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.t(s, `**${h}**`, x + 0.2, 1.68, cw - 0.4, 0.45, { size: 17, color: 'tx2', valign: 'middle' });
      d.t(s, rl, x + 0.2, 2.12, cw - 0.4, 0.4, { size: 14, italic: true, color: AF, valign: 'middle' });
      L.forEach(([b, r, k1, k2], i) => eq(s, x + 0.2, 2.7 + i * 0.7, b, k1, null, r, k2, { size: 13, h: 0.48, tight: true }));
      d.t(s, note, x + 0.2, 4.9, cw - 0.4, 0.95, { size: 13, color: 'tx2', valign: 'middle' });
    });
    band(s, 'Avant d’écrire le mot dérivé : **coupez en syllabes** et appliquez la règle (M1, M4).', 6.2, 0.6, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 24 la famille en couleurs
  {
    const s = d.page({ g: 24, tag: 'COMBINER', title: 'La famille werk, en couleurs' });
    const cx = 4.0; const cy = 3.75;
    d.oval(s, cx - 0.8, cy - 0.55, 1.6, 1.1, { fill: 'tx2', line: null, shadow: true });
    d.t(s, '**werk-**', cx - 0.8, cy - 0.55, 1.6, 1.1, { size: 22, color: 'bg1', align: 'center', valign: 'middle' });
    const W = [['het werk', 'N', 'radical'], ['werken', 'V', '+ -en'], ['de werker', 'N', '-er'], ['de werking', 'N', '-ing'], ['werkloos', 'A', '-loos'], ['de werkloosheid', 'N', '-loos + -heid'], ['werkbaar', 'A', '-baar'], ['bewerken', 'V', 'be- + -en']];
    W.forEach(([t, k, sf], i) => {
      const a = (-90 + i * 45) * Math.PI / 180; const x = cx + Math.cos(a) * 2.9; const y = cy + Math.sin(a) * 1.8; const w = bw(t, 16);
      d.line(s, cx + Math.cos(a) * 0.85, cy + Math.sin(a) * 0.6, x - Math.cos(a) * w / 2, y - Math.sin(a) * 0.25, { color: hexOf(CAT[k].c), lw: 1.5, arrow: false });
      chip(s, t, k, x - w / 2, y - 0.25, { size: 16, h: 0.5, fill: true, w });
      d.t(s, sf, x - 1.0, y + 0.25, 2.0, 0.28, { size: 11, bold: true, italic: true, color: AF, align: 'center' });
    });
    d.rect(s, 7.9, 1.6, 4.83, 4.45, { fill: TINT[AF], line: AF, lw: 1.5, radius: 0.12 });
    d.t(s, '**Les suffixes s’empilent**', 8.1, 1.68, 4.4, 0.45, { size: 16, color: AF, valign: 'middle' });
    const chain = [['het werk', 'N'], ['werkloos', 'A'], ['de werkloosheid', 'N']];
    chain.forEach(([t, k], i) => {
      const y = 2.3 + i * 1.0;
      chip(s, t, k, 8.4, y, { size: 17, h: 0.55, fill: true });
      if (i < 2) d.t(s, `↓  //**${['-loos', '-heid'][i]}**//`, 8.5, y + 0.55, 3, 0.42, { size: 15, color: AF, valign: 'middle' });
    });
    d.t(s, 'nom → adjectif → nom : chaque suffixe change la catégorie, le **dernier** décide.', 8.1, 5.15, 4.45, 0.85, { size: 13.5, valign: 'middle' });
    band(s, 'Apprenez les mots **en familles** : un mot connu en donne cinq ou six.', 6.25, 0.55, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 25 style verbal / style nominal
  {
    const s = d.page({ g: 25, tag: 'COMBINER', title: 'Style verbal (oral) ↔ style nominal (écrit)' });
    d.ill(s, 'speaking-head', 0.6, 1.5, 0.7, 0.7);
    d.t(s, '**ORAL** : des verbes', 1.4, 1.5, 4.0, 0.7, { size: 16, color: CAT.V.c, valign: 'middle' });
    d.ill(s, 'memo', 6.9, 1.5, 0.7, 0.7);
    d.t(s, '**ÉCRIT** (titres, notes, e-mails formels) : des noms', 7.7, 1.5, 5.0, 0.7, { size: 16, color: CAT.N.c, valign: 'middle' });
    const R = [['De prijzen <stijgen>.', '[De stijging] van de prijzen'], ['We <openen> het nieuwe kantoor.', '[De opening] van het nieuwe kantoor'], ['De trein <vertrekt> om 8 uur.', '[Het vertrek] van de trein: 8 uur'], ['Je moet {snel} <betalen>.', '{Snelle} [betaling] gevraagd']];
    const seg = (str, size) => str.split(/(\[[^\]]+\]|<[^>]+>|\{[^}]+\})/).filter(Boolean).map((t) => {
      if (t.startsWith('<')) return [t.slice(1, -1), { bold: true, italic: true, color: hexOf(CAT.V.c), fontSize: size }];
      if (t.startsWith('[')) return [t.slice(1, -1), { bold: true, italic: true, color: hexOf(CAT.N.c), fontSize: size }];
      if (t.startsWith('{')) return [t.slice(1, -1), { bold: true, italic: true, color: hexOf(t.includes('nel') && t.startsWith('{S') ? CAT.A.c : CAT.D.c), fontSize: size }];
      return [t, { italic: true, fontSize: size }];
    });
    R.forEach(([a, b], i) => {
      const y = 2.35 + i * 0.78;
      d.rect(s, 0.6, y, 5.6, 0.62, { fill: TINT[CAT.V.c], line: null, radius: 0.1 });
      rich(s, seg(a, 17), 0.8, y, 5.3, 0.62);
      d.t(s, '⇄', 6.25, y, 0.6, 0.62, { size: 24, bold: true, color: AF, align: 'center', valign: 'middle' });
      d.rect(s, 6.9, y, 5.83, 0.62, { fill: TINT[CAT.N.c], line: null, radius: 0.1 });
      rich(s, seg(b, 17), 7.1, y, 5.5, 0.62);
    });
    const T = [['V', 'N', 'le verbe → un nom (//-ing//, radical…)'], ['N', 'N', 'le sujet, le complément → //van// + nom'], ['D', 'A', 'l’adverbe → un adjectif (+ //-e//)']];
    T.forEach(([k1, k2, t], i) => {
      const y = 5.55 + i * 0.4;
      d.rect(s, 0.6, y + 0.08, 0.24, 0.24, { fill: CAT[k1].c, line: null, radius: 0.04 });
      d.t(s, '→', 0.88, y, 0.3, 0.4, { size: 14, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, 1.22, y + 0.08, 0.24, 0.24, { fill: CAT[k2].c, line: null, radius: 0.04 });
      d.t(s, t, 1.6, y, 11.1, 0.4, { size: 15, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 26 le pont des francophones
  {
    const s = d.page({ g: 26, tag: 'FR ↔ NL', title: 'Le pont des francophones : les suffixes jumeaux' });
    const R = [['-tion', '-tie', 'l’information', 'de informatie'], ['-ité', '-iteit', 'la qualité', 'de kwaliteit'], ['-ique', '-isch · -iek', 'technique', 'technisch · de techniek'], ['-able', '-baar · -abel', 'payable · acceptable', 'betaalbaar · acceptabel'], ['-er (verbe)', '-eren', 'informer', 'informeren'], ['-isme', '-isme (het)', 'le tourisme', 'het toerisme'], ['-iste', '-ist', 'le journaliste', 'de journalist']];
    d.flag(s, 'fr', 1.6, 1.55, 0.55); d.flag(s, 'nl', 7.6, 1.55, 0.55);
    R.forEach(([f, n, fe, ne], i) => {
      const y = 2.05 + i * 0.56;
      d.rect(s, 0.6, y, 12.13, 0.5, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.06 });
      chip(s, f, 'X', 0.8, y + 0.05, { size: 14, h: 0.4, w: 1.6 });
      d.t(s, fe, 2.55, y, 3.5, 0.5, { size: 15, italic: true, color: 'tx2', valign: 'middle' });
      d.t(s, '⇄', 6.1, y, 0.6, 0.5, { size: 20, bold: true, color: AF, align: 'center', valign: 'middle' });
      chip(s, n, 'X', 6.8, y + 0.05, { size: 14, h: 0.4, fill: true, w: 1.9 });
      d.t(s, `//**${ne}**//`, 8.85, y, 3.8, 0.5, { size: 15, valign: 'middle' });
    });
    band(s, '⚠ Faux ami : //de lezing// = la **conférence** (la lecture = //het lezen//). Le pont aide, le dictionnaire confirme.', 6.1, 0.65, 'accent6', 15);
  }

  // ---------------------------------------------------------------- 27 six pièges
  {
    const s = d.page({ g: 27, tag: 'PIÈGES', title: 'Six pièges à éviter' });
    const R = [['l’adverbe en -lijk', 'Hij werkt snellijk.', 'Hij werkt snel.'], ['-ing partout', 'de eting', 'het eten'], ['-heid au lieu de -te', 'de warmheid', 'de warmte'], ['l’article', 'het vergadering', 'de vergadering'], ['l’orthographe de -baar', 'betalbaar', 'betaalbaar'], ['le faux ami', 'de lezing (= la lecture)', 'het lezen']];
    const cw = (12.13 - 2 * 0.2) / 3; const ch = 2.15;
    R.forEach(([h, bad, good], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.2); const y = 1.6 + Math.floor(i / 3) * (ch + 0.15);
      d.rect(s, x, y, cw, ch, { fill: 'FFFFFF', line: BORDER, lw: 1, radius: 0.12, shadow: true });
      d.t(s, `**${i + 1}. ${h}**`, x + 0.15, y + 0.08, cw - 0.3, 0.5, { size: 14, color: 'tx2', valign: 'middle' });
      d.t(s, `✗  {{${bad}}}`, x + 0.15, y + 0.65, cw - 0.3, 0.65, { size: 16, color: 'accent6', valign: 'middle' });
      d.t(s, `✓  //**${good}**//`, x + 0.15, y + 1.3, cw - 0.3, 0.75, { size: 16, color: 'accent3', valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 28 à retenir
  {
    const s = d.page({ g: 28, tag: 'À RETENIR', title: 'À retenir : la boîte à suffixes' });
    const R = [['V', 'N', 'het + infinitif · radical · -ing (de) · -er / -aar / -der · -eren → -atie'], ['A', 'N', '-heid (qualité) · -te (mesure) · -iteit · het + adj. + -e'], ['N', 'A', '-ig · -lijk · -isch · -loos ↔ -vol · -en (matière)'], ['V', 'A', '-baar (on- = contraire) · -end · participe passé'], ['N', 'V', '+ -en · -eren · be-'], ['A', 'V', 'ver- … -en (rendre plus)'], ['A', 'D', '= rien ne change : snel = rapide / rapidement']];
    R.forEach(([a, b, t], i) => {
      const y = 1.6 + i * 0.6;
      d.rect(s, 0.6, y, 12.13, 0.52, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.08 });
      sec(s, a, b, 0.75, y + 0.08);
      d.t(s, `//**${t}**//`, 4.0, y, 8.6, 0.52, { size: 15, color: AF, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.85, 12.13, 0.85, { fill: 'tx2', line: null, radius: 0.08 });
    d.t(s, ['Le **suffixe** décide la catégorie et l’article (//-ing, -heid, -te, -tie// = de) · le **préfixe** change le sens (//on-, her-, mis-, ont-//).', 'Orthographe : les règles du M4. En cas de doute : le dictionnaire.'], 0.85, 5.85, 11.7, 0.85, { size: 14, color: 'bg1', valign: 'middle', gap: 2 });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 29 divider
  d.divider({ g: 29, wide: true, tiles: [
    ['Le tri', '★', 'FaFilter'], ['Verbe → nom', '★★', 'FaCogs'], ['Heid ou te\u00a0?', '★★', 'FaBalanceScale'], ['Nom → adjectif', '★★', 'FaPalette'], ['Drinkbaar', '★', 'FaCheck'], ['Rendre plus', '★★', 'FaExpandArrowsAlt'], ['Snel = snel', '★★', 'FaTachometerAlt'],
    ['Les familles', '★★★', 'FaSitemap'], ['Style écrit', '★★★', 'FaPenFancy'], ['De of het ?', '★★', 'FaCompass'], ['Le détective', '★★', 'FaSearch'], ['La fabrique', '★★', 'FaIndustry'], ['Les travaux', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 30 ex1 quelle catégorie
  const ex1 = [['de vergadering', 'N'], ['betaalbaar', 'A'], ['de gezondheid', 'N'], ['zonnig', 'A'], ['organiseren', 'V'], ['de leraar', 'N'], ['verbeteren', 'V'], ['gevaarlijk', 'A'], ['het lezen', 'N'], ['werkloos', 'A'], ['de lengte', 'N'], ['vergroten', 'V'], ['technisch', 'A'], ['het vertrek', 'N'], ['fietsen', 'V']];
  d.ex({ g: 30, title: 'Exercice 1 — Quelle catégorie ?', stars: '★', instr: 'Nom, verbe ou adjectif ? Classez les mots et entourez le suffixe qui vous aide.' }, (s, mode, top) => {
    let by = top;
    if (mode === 'q') {
      const bw5 = (12.13 - 4 * 0.15) / 5;
      ex1.forEach(([w], i) => {
        const x = 0.6 + (i % 5) * (bw5 + 0.15); const y = top + Math.floor(i / 5) * 0.58;
        d.rect(s, x, y, bw5, 0.48, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, radius: 0.12, rotate: [-2, 1, 2, -1, 1][i % 5] });
        d.t(s, `//**${w}**//`, x, y, bw5, 0.48, { size: 17, align: 'center', valign: 'middle', rotate: [-2, 1, 2, -1, 1][i % 5] });
      });
      by = top + 1.85;
    }
    const W3 = (12.13 - 0.4) / 3; const bh = 6.85 - by;
    ['N', 'V', 'A'].forEach((k, j) => {
      const x = 0.6 + j * (W3 + 0.2); const c = CAT[k].c;
      d.rect(s, x, by, W3, bh, { fill: TINT[c], line: c, lw: 2, dash: mode === 'q' ? 'dash' : undefined, radius: 0.12 });
      d.ill(s, CAT[k].ic, x + 0.15, by + 0.1, 0.55, 0.55);
      d.t(s, `**${CAT[k].lab}**`, x + 0.8, by + 0.1, W3 - 1.0, 0.55, { size: 16, color: c, valign: 'middle' });
      if (mode === 'a') {
        const L = ex1.filter(([, kk]) => kk === k).map(([w]) => w);
        d.t(s, L.map((w) => `//**${w}**//`), x + 0.2, by + 0.75, W3 - 0.4, bh - 0.85, { size: 18, color: c, align: 'center', valign: 'middle', gap: 4 });
      }
    });
  });

  // ---------------------------------------------------------------- 31 ex2 verbe → nom
  const ex2 = [['vergaderen', 'l’action', '[[de vergadering]]'], ['roken', 'l’action', '[[het roken]]'], ['besturen', 'la personne', '[[de bestuurder]]'], ['organiseren', 'l’action', '[[de organisatie]]'], ['beginnen', 'le moment', '[[het begin]]'],
    ['verkopen', 'personne (f.)', '[[de verkoopster]]'], ['betalen', 'l’action', '[[de betaling]]'], ['vertrekken', 'l’acte', '[[het vertrek]]'], ['wandelen', 'la personne', '[[de wandelaar]]'], ['printen', 'l’appareil', '[[de printer]]']];
  d.ex({ g: 31, title: 'Exercice 2 — Verbe → nom', stars: '★★', instr: 'Trouvez le nom demandé, avec son article.' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const rh = ((mode === 'a' ? 6.45 : 6.75) - top) / 5;
    if (mode === 'a') d.t(s, 'Pour l’action, //het// + infinitif marche toujours : aussi //het vergaderen, het organiseren, het betalen, het vertrekken//.', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
    ex2.forEach(([v, what, ans], i) => {
      const x = 0.6 + Math.floor(i / 5) * (cw + 0.2); const y = top + (i % 5) * rh;
      d.rect(s, x, y + 0.04, cw, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.t(s, `**${i + 1}**`, x + 0.1, y + 0.04, 0.35, rh - 0.1, { size: 14, color: 'accent5', valign: 'middle' });
      chip(s, v, 'V', x + 0.45, y + (rh - 0.5) / 2 - 0.03, { size: 15, h: 0.44, w: 1.75 });
      d.t(s, what, x + 2.28, y + 0.04, 1.3, rh - 0.1, { size: 12, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${ans}//`, x + 3.55, y + 0.04, cw - 3.65, rh - 0.1, { size: 17, color: CAT.N.c, valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 32 ex3 -heid ou -te
  const ex3 = [['ziek', 'de [[ziekte]]'], ['vrij', 'de [[vrijheid]]'], ['lang', 'de [[lengte]]'], ['mogelijk', 'de [[mogelijkheid]]'], ['warm', 'de [[warmte]]'], ['snel', 'de [[snelheid]]'], ['zeker', 'de [[zekerheid]]'], ['breed', 'de [[breedte]]'], ['gezond', 'de [[gezondheid]]'], ['hoog', 'de [[hoogte]]']];
  d.ex({ g: 32, title: 'Exercice 3 — -heid ou -te ?', stars: '★★', instr: 'Formez le nom. Qualité (//-heid//) ou mesure, sensation (//-te//) ?' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const rh = (6.5 - top) / 5;
    ex3.forEach(([a, ans], i) => {
      const x = 0.6 + Math.floor(i / 5) * (cw + 0.2); const y = top + (i % 5) * rh;
      d.rect(s, x, y + 0.04, cw, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      chip(s, a, 'A', x + 0.2, y + (rh - 0.5) / 2 - 0.03, { size: 16, h: 0.46, w: 1.6 });
      d.t(s, '→', x + 1.9, y + 0.04, 0.5, rh - 0.1, { size: 20, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `//${ans}//`, x + 2.5, y + 0.04, cw - 2.6, rh - 0.1, { size: 18, color: CAT.N.c, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, '//-te// : //lengte, warmte, breedte, hoogte// (mesures, sensations) + //ziekte// (exception).', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 33 ex4 nom → adjectif
  const ex4 = [['de zon', 'Het is vandaag [[zonnig]] weer.'], ['het gevaar', 'Die straat is [[gevaarlijk]].'], ['de techniek', 'We hebben een [[technisch]] probleem.'], ['het hout', 'Ik koop een [[houten]] tafel.'], ['het werk', 'Hij is al een jaar [[werkloos]].'], ['de vriend', 'De receptionist is heel [[vriendelijk]].'], ['de dag', 'De [[dagelijkse]] vergadering begint om 9 uur.'], ['de waarde', 'Bedankt! Dat is een [[waardevol]] advies.']];
  d.ex({ g: 33, title: 'Exercice 4 — Nom → adjectif', stars: '★★', instr: 'Complétez avec l’adjectif formé sur le nom. Attention au //-e// devant le nom !' }, (s, mode, top) => {
    const rh = (6.5 - top) / 8;
    ex4.forEach(([n, t], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.03, 12.13, rh - 0.07, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: null, radius: 0.08 });
      d.t(s, `**${i + 1}**`, 0.7, y, 0.4, rh, { size: 14, color: 'accent5', valign: 'middle' });
      chip(s, n, 'N', 1.15, y + (rh - 0.42) / 2, { size: 14, h: 0.4, w: 1.75 });
      d.t(s, `//${t}//`, 3.15, y, 9.5, rh, { size: 17, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 7 : //dagelijks// + //-e// devant le nom. N° 8 : //het advies// → pas de //-e// après //een//.', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 34 ex5 c'est ...baar
  const ex5 = [['potable-water', 'Kun je dit water drinken?', 'Ja, het is [[drinkbaar]].'], ['open-book', 'Kun je zijn handschrift lezen?', 'Nee, het is [[onleesbaar]].'], ['money-with-wings', 'Kunnen we die prijs betalen?', 'Ja, hij is [[betaalbaar]].'],
    ['oncoming-bus', 'Kun je het kantoor met de bus bereiken?', 'Ja, het is goed [[bereikbaar]].'], ['fork-and-knife', 'Kun je die paddenstoelen eten?', 'Nee, ze zijn niet [[eetbaar]].'], ['eyes', 'Kun je het verschil zien?', 'Nee, het is niet [[zichtbaar]].']];
  d.ex({ g: 34, title: 'Exercice 5 — C’est …baar !', stars: '★', instr: 'Répondez avec un adjectif en //-baar// (ou //on-…-baar//).' }, (s, mode, top) => {
    const cw = (12.13 - 0.2) / 2; const rh = ((mode === 'a' ? 6.45 : 6.75) - top) / 3;
    if (mode === 'a') d.t(s, 'N° 2 : aussi //niet leesbaar//. N° 5 : aussi //oneetbaar//. N° 6 : aussi //onzichtbaar//.', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
    ex5.forEach(([ic, q, a], i) => {
      const x = 0.6 + (i % 2) * (cw + 0.2); const y = top + Math.floor(i / 2) * rh;
      d.rect(s, x, y + 0.05, cw, rh - 0.13, { fill: 'FFFFFF', line: CAT.A.c, lw: 1.25, radius: 0.12, shadow: true });
      d.ill(s, ic, x + 0.15, y + 0.25, 0.8, 0.8);
      d.t(s, `//${q}//`, x + 1.1, y + 0.15, cw - 1.25, 0.6, { size: 15, color: 'tx2', valign: 'middle' });
      d.t(s, `//${a}//`, x + 1.1, y + 0.78, cw - 1.25, rh - 0.98, { size: 18, valign: 'middle', mode });
    });
  });

  // ---------------------------------------------------------------- 35 ex6 rendre plus
  const ex6 = [['groot', 'Het kantoor is te klein.', 'We moeten het [[vergroten]].'], ['kort', 'De tekst is te lang.', 'Kun je hem [[verkorten]]?'], ['beter', 'De service is niet goed.', 'We willen hem [[verbeteren]].'], ['lang', 'Het contract eindigt in juni.', 'We [[verlengen]] het tot december.'], ['warm', 'Het is koud in de refter.', 'We [[verwarmen]] de refter.'], ['nieuw', 'De website is oud.', 'We [[vernieuwen]] de website.']];
  d.ex({ g: 35, title: 'Exercice 6 — Rendre plus : ver- … -en', stars: '★★', instr: 'Complétez avec un verbe en //ver- … -en// formé sur l’adjectif.' }, (s, mode, top) => {
    const rh = (6.5 - top) / 6;
    ex6.forEach(([a, sit, t], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.04, 12.13, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      chip(s, a, 'A', 0.8, y + (rh - 0.46) / 2, { size: 15, h: 0.42, w: 1.2 });
      d.t(s, `//${sit}//`, 2.2, y + 0.04, 4.4, rh - 0.1, { size: 15, color: 'tx2', valign: 'middle' });
      d.t(s, '→', 6.55, y + 0.04, 0.45, rh - 0.1, { size: 18, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `//${t}//`, 7.05, y + 0.04, 5.6, rh - 0.1, { size: 17, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 2 : aussi //inkorten//. N° 4 : la voyelle change (//lang → verlengen//).', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 36 ex7 pas de -ment
  const ex7 = [['Il travaille rapidement.', 'Hij werkt [[snel]].'], ['Elle parle clairement.', 'Ze spreekt [[duidelijk]].'], ['Conduis prudemment !', 'Rijd [[voorzichtig]]!'], ['Tu parles bien néerlandais.', 'Je spreekt [[goed]] Nederlands.'], ['Heureusement, il est là.', '[[Gelukkig]] is hij er.'], ['Malheureusement, je ne peux pas venir.', '[[Helaas]] kan ik niet komen.']];
  d.ex({ g: 36, title: 'Exercice 7 — Pas de -ment !', stars: '★★', instr: 'Traduisez l’adverbe. Rappel : en néerlandais, l’adverbe = l’adjectif.' }, (s, mode, top) => {
    const rh = (6.5 - top) / 6;
    ex7.forEach(([fr, nl], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.04, 12.13, rh - 0.1, { fill: i % 2 ? 'FFFFFF' : 'bg2', line: BORDER, lw: 0.75, radius: 0.1 });
      d.t(s, `**${i + 1}**  « ${fr} »`, 0.75, y + 0.04, 5.6, rh - 0.1, { size: 16, italic: true, color: 'tx2', valign: 'middle' });
      d.t(s, '➜', 6.35, y + 0.04, 0.5, rh - 0.1, { size: 18, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `//${nl}//`, 6.95, y + 0.04, 5.7, rh - 0.1, { size: 18, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'N° 6 : aussi //Jammer genoeg / Spijtig genoeg (BE)//. N° 5 et 6 : inversion après l’adverbe en tête.', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 37 ex8 les familles
  const ex8 = [['betalen', '[[de betaling]]', '[[de betaler]]', '[[betaalbaar]]', '[[onbetaalbaar]]'], ['lezen', '[[het lezen]]', '[[de lezer]]', '[[leesbaar]]', '[[onleesbaar]]'], ['gebruiken', '[[het gebruik]]', '[[de gebruiker]]', '[[bruikbaar]]', '[[onbruikbaar]]']];
  d.ex({ g: 37, title: 'Exercice 8 — Les familles de mots', stars: '★★★', instr: 'Complétez chaque famille : l’action, la personne, l’adjectif « qu’on peut… » et son contraire.' }, (s, mode, top) => {
    const H = [['VERBE', 'V'], ['ACTION', 'N'], ['PERSONNE', 'N'], ['« QU’ON PEUT… »', 'A'], ['CONTRAIRE', 'A']];
    const cw = (12.13 - 0.4) / 5;
    H.forEach(([h, k], j) => {
      d.rect(s, 0.6 + j * (cw + 0.1), top, cw, 0.45, { fill: CAT[k].c, line: null, radius: 0.08 });
      d.t(s, `**${h}**`, 0.6 + j * (cw + 0.1), top, cw, 0.45, { size: 13, color: 'bg1', align: 'center', valign: 'middle' });
    });
    const rh = (6.8 - top - 0.55) / 3;
    ex8.forEach((row, i) => {
      const y = top + 0.55 + i * rh;
      row.forEach((t, j) => {
        const k = H[j][1]; const x = 0.6 + j * (cw + 0.1);
        d.rect(s, x, y, cw, rh - 0.12, { fill: j === 0 ? CAT.V.c : 'FFFFFF', line: CAT[k].c, lw: 1.5, radius: 0.1 });
        d.t(s, `//**${t}**//`, x + 0.08, y, cw - 0.16, rh - 0.12, { size: 17, color: j === 0 ? 'bg1' : CAT[k].c, align: 'center', valign: 'middle', mode });
      });
    });
  });

  // ---------------------------------------------------------------- 38 ex9 style nominal
  const ex9 = [['De prijzen stijgen.', '[[De stijging van de prijzen]]'], ['Het kantoor opent maandag.', '[[De opening van het kantoor]]: maandag'], ['We vergaderen om 10 uur.', '[[Vergadering]] om 10 uur'], ['De trein vertrekt om 8 uur.', '[[Het vertrek van de trein]]: 8 uur'], ['De klanten zijn tevreden.', '[[De tevredenheid van de klanten]]'], ['Je moet snel betalen.', '[[Snelle betaling]] gevraagd']];
  d.ex({ g: 38, title: 'Exercice 9 — Le style écrit', stars: '★★★', instr: 'Transformez en style nominal (titre, note de service).' }, (s, mode, top) => {
    const rh = (6.45 - top) / 6;
    d.ill(s, 'newspaper', 11.95, top - 0.62, 0.7, 0.7);
    ex9.forEach(([a, b], i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.04, 5.4, rh - 0.1, { fill: TINT[CAT.V.c], line: null, radius: 0.1 });
      d.t(s, `**${i + 1}**  //${a}//`, 0.75, y + 0.04, 5.2, rh - 0.1, { size: 16, valign: 'middle' });
      d.t(s, '➜', 6.05, y + 0.04, 0.5, rh - 0.1, { size: 18, bold: true, color: AF, align: 'center', valign: 'middle' });
      d.rect(s, 6.6, y + 0.04, 6.13, rh - 0.1, { fill: TINT[CAT.N.c], line: null, radius: 0.1 });
      d.t(s, `//${b}//`, 6.75, y + 0.04, 5.9, rh - 0.1, { size: 17, valign: 'middle', mode });
    });
    if (mode === 'a') d.t(s, 'Titres aussi sans article : //Stijging van de prijzen · Prijsstijging//. N° 4 : //het vertrek// (radical). N° 5 : aussi //de klanttevredenheid//. N° 6 : //snel// → //snelle// (+ //-e//).', 0.6, 6.48, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 39 ex10 de of het
  const ex10 = [['betaling', 'de'], ['lezen', 'het'], ['vertrek', 'het'], ['begin', 'het'], ['gezondheid', 'de'], ['toerisme', 'het'], ['document', 'het'], ['organisatie', 'de'], ['mengsel', 'het'], ['vriendschap', 'de'], ['lidmaatschap', 'het'], ['bakkerij', 'de']];
  d.ex({ g: 39, title: 'Exercice 10 — De of het ?', stars: '★★', instr: 'Regardez le suffixe : //de// ou //het// ? (boussole, diapo 22)' }, (s, mode, top) => {
    const cw = (12.13 - 0.45) / 4; const rh = (6.5 - top) / 3;
    ex10.forEach(([w, art], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.15); const y = top + Math.floor(i / 4) * rh;
      const c = art === 'de' ? DE : HET;
      d.rect(s, x, y + 0.08, cw, rh - 0.2, { fill: mode === 'a' ? (TINT[c] || 'FDF1E6') : 'FFFFFF', line: mode === 'a' ? hexOf(c) : BORDER, lw: 1.5, radius: 0.12, shadow: true });
      if (mode === 'q') d.rect(s, x + 0.25, y + (rh - 0.6) / 2 + 0.02, 0.85, 0.5, { fill: 'FFFFFF', line: 'accent5', lw: 1, dash: 'dash', radius: 0.08 });
      else { d.rect(s, x + 0.25, y + (rh - 0.6) / 2 + 0.02, 0.85, 0.5, { fill: c, line: null, radius: 0.08 }); d.t(s, `**${art}**`, x + 0.25, y + (rh - 0.6) / 2 + 0.02, 0.85, 0.5, { size: 17, color: 'bg1', align: 'center', valign: 'middle' }); }
      d.t(s, `//**${w}**//`, x + 1.2, y + 0.08, cw - 1.3, rh - 0.2, { size: 14.5, valign: 'middle' });
    });
    if (mode === 'a') d.t(s, '//het lidmaatschap// : //-schap// de statut = //het//. //het vertrek, het begin// : radical à préfixe.', 0.6, 6.5, 12.13, 0.36, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 40 ex11 détective
  d.ex({ g: 40, title: 'Exercice 11 — Le détective', stars: '★★', instr: 'Lotte écrit une note de service. Trouvez les 5 erreurs de dérivation.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'NOTA · Peeters & Co · Van: Lotte Maes, facility manager', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = ['//Beste collega’s,//', '//Volgende week is er een belangrijke {{vergaderen}}++ vergadering++ over de {{organisering}}++ organisatie++ van het nieuwe kantoor. Door de {{warmheid}}++ warmte++ in de zomer zoeken we een {{betalbare}}++ betaalbare++ airco. De beschikbaarheid van de zalen staat in de agenda. Antwoord {{snellijk}}++ snel++, a.u.b.//', '//Met vriendelijke groeten,//', '//Lotte//'];
    d.t(s, txt, 0.95, top + 0.65, 8.3, h - 0.8, { size: 17, gap: 6, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Corrects : //de beschikbaarheid// (//beschikbaar// + //-heid//), //vriendelijke// (//-lijk// + //-e//).', 9.9, top + 3.05, 2.83, 2.2, { size: 13, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 41 ex12 la fabrique de mots
  {
    const s = d.page({ g: 41, tag: 'JIJ NU !', title: 'Exercice 12 — La fabrique de mots', stars: '★★' });
    d.ill(s, 'factory', 0.6, 1.5, 0.9, 0.9);
    d.t(s, 'Par équipes : tirez une **racine**, puis fabriquez un maximum de mots avec les **cartes-suffixes** en 2 minutes.', 1.65, 1.5, 11.1, 0.9, { size: 16, valign: 'middle' });
    const R = ['werk', 'speel', 'vrij', 'zon', 'betaal', 'lees', 'gezond', 'groot'];
    const S = ['-ing', '-er', '-heid', '-te', '-ig', '-lijk', '-baar', '-loos', 'on-', 'ver- … -en', 'be-', 'het + inf.'];
    d.t(s, '**RACINES**', 0.6, 2.55, 3, 0.38, { size: 13, color: 'tx2', cs: 1 });
    R.forEach((t, i) => {
      const x = 0.6 + (i % 8) * 1.52; const y = 2.95;
      d.rect(s, x, y, 1.42, 0.7, { fill: 'tx2', line: null, radius: 0.12, rotate: [-3, 2, -1, 3][i % 4] });
      d.t(s, `//**${t}-**//`, x, y, 1.42, 0.7, { size: 17, color: 'bg1', align: 'center', valign: 'middle', rotate: [-3, 2, -1, 3][i % 4] });
    });
    d.t(s, '**CARTES-SUFFIXES**', 0.6, 3.85, 4, 0.38, { size: 13, color: AF, cs: 1 });
    S.forEach((t, i) => {
      const x = 0.6 + (i % 6) * 2.03; const y = 4.25 + Math.floor(i / 6) * 0.72;
      d.rect(s, x, y, 1.9, 0.6, { fill: AF, line: null, radius: 0.12, rotate: [2, -2, 1, -1][i % 4] });
      d.t(s, `**${t}**`, x, y, 1.9, 0.6, { size: 16, color: 'bg1', align: 'center', valign: 'middle', rotate: [2, -2, 1, -1][i % 4] });
    });
    d.rect(s, 0.6, 5.85, 12.13, 0.9, { fill: 'bg2', line: BORDER, radius: 0.12 });
    d.t(s, '**1 point** par mot correct · **+1** si l’article est juste · **+1** si l’équipe fait une phrase avec le mot. Exemple : //werk → de werker, werkloos, de werkloosheid, bewerken…//', 0.85, 5.85, 11.7, 0.9, { size: 15, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 42 ex13 les travaux
  d.roleplay({
    g: 42, title: 'Exercice 13 — Les travaux chez Peeters & Co',
    scenario: 'Peeters & Co rénove ses bureaux. A explique les travaux à l’oral ; B écrit l’avis en style nominal.',
    a: ['**A — facility manager**', 'Expliquez les travaux avec des verbes : //We vergroten de refter…//'],
    b: ['**B — assistant·e**', 'Écrivez l’avis avec des noms : //Vergroting van de refter…// Puis A vérifie.'],
    bank: '//de vergroting · de vernieuwing · de verbetering · de sluiting · de heropening · de verbouwing · tijdelijk · niet beschikbaar · buiten gebruik · bereikbaar · Wegens werken… · Gelieve … te … · Dank voor uw begrip!//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.6, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'DE WERKEN', x + 0.15, y, w - 0.3, 0.6, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const L = ['we vergroten de refter', 'we vernieuwen de computers', 'we verbeteren de verwarming', 'de lift werkt niet tot 15 mei', 'de parking sluit op 3 mei', 'we openen het kantoor opnieuw op 1 juni'];
      L.forEach((t, i) => {
        const yy = y + 0.78 + i * 0.72;
        d.ill(s, 'building-construction', x + 0.15, yy, 0.45, 0.45);
        d.t(s, `//${t}//`, x + 0.75, yy - 0.05, w - 0.9, 0.6, { size: 13.5, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 43 ticket
  d.ticket({
    g: 43,
    q: ['Le nom de //vergaderen//, avec son article ?', 'L’adjectif formé sur //het gevaar// ?', 'Traduisez : //Il travaille rapidement.//'],
    self: ['Reconnaître', 'Transformer', 'Écrire'],
    teaser: { icon: 'FaBook', text: '**Défi de la semaine** : choisissez trois mots de votre métier et construisez leur famille (5 mots chacun).' },
  });
}

module.exports = { meta, build };
