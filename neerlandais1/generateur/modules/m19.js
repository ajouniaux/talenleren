// Module 19 — Het imperfectum · L'imparfait
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 19, slug: 'Het_imperfectum', title: 'Het imperfectum — L’imparfait', short: 'Het imperfectum', template: 'module_19_imperfectum.md' };

const TE = 'accent1'; // -te(n) = orange (comme -t au M15)
const DE = 'accent2'; // -de(n) = bleu (comme -d au M15)
const SEPIA = 'F3EAD7';
const SEPIA_L = 'C9B98A';

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        c: { fill: 'accent1', line: null, color: 'bg1', bold: true },
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
  const SKC = '##S##°°o°°##FT##  ##K##°°e°°##t####CH##°°u°°##P##';

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Het imperfectum', sub: 'L’imparfait', line: 'Toen ik klein was, woonde ik in Namen.',
    visual: (s) => {
      d.rect(s, 7.3, 0.95, 3.4, 2.75, { fill: 'FFFFFF', line: null, radius: 0.02, shadow: true, rotate: -4 });
      d.rect(s, 7.48, 1.12, 3.04, 2.2, { fill: SEPIA, line: null, radius: 0, rotate: -4 });
      d.ill(s, 'house', 8.65, 1.25, 1.3, 1.3);
      d.ill(s, 'child', 7.75, 1.75, 1.3, 1.3);
      d.chip(s, 'vroeger', 10.95, 1.3, 'accent1', 0.42, 15);
      d.rect(s, 6.95, 4.0, 5.8, 1.15, { fill: 'FFFFFF', line: null, radius: 0.15, shadow: true });
      d.t(s, 'Toen ik klein **!!was!!**…', 6.95, 4.0, 5.8, 1.15, { size: 30, align: 'center', valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCogs', h: 'Former', t: 'Je forme l’imparfait : //werkte, woonde//.', color: TE },
      { icon: 'FaBrain', h: 'Mémoriser', t: 'J’utilise les irréguliers fréquents : //was, had, ging, kwam//.', color: 'accent4' },
      { icon: 'FaBookOpen', h: 'Raconter', t: 'Je raconte mes souvenirs et mon ancien travail.', color: DE },
    ],
    band: 'Le dernier temps du parcours : avec le présent, le passé composé et le futur, on peut tout raconter.',
  });

  // ---------------------------------------------------------------- 3 vroeger en nu
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — vroeger en nu' });
    d.chip(s, 'VROEGER', 0.6, 1.7, 'accent5', 0.36, 13);
    d.chip(s, 'NU', 6.95, 1.7, 'accent3', 0.36, 13);
    const R = [['derelict-house', 'Vroeger **woon##de##** Karim in Namen.', 'cityscape', 'Nu **woont** hij in Brussel.'], ['soccer-ball', 'Vroeger **speel##de##** hij voetbal.', 'tennis', 'Nu **speelt** hij tennis.'], ['bank', 'Vroeger **werk##te##** hij bij een bank.', 'office-building', 'Nu **werkt** hij bij Peeters & Co.']];
    R.forEach(([il1, t1, il2, t2], i) => {
      const y = 2.2 + i * 1.12;
      d.rect(s, 0.6, y, 5.75, 0.95, { fill: SEPIA, line: SEPIA_L, lw: 1.25, radius: 0.1 });
      d.ill(s, il1, 0.75, y + 0.15, 0.65, 0.65);
      d.t(s, `//${t1}//`, 1.55, y, 4.7, 0.95, { size: 18, valign: 'middle' });
      d.line(s, 6.4, y + 0.47, 6.9, y + 0.47, { color: 'accent5', lw: 2.5 });
      d.rect(s, 6.95, y, 5.78, 0.95, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25, radius: 0.1 });
      d.ill(s, il2, 7.1, y + 0.15, 0.65, 0.65);
      d.t(s, `//${t2}//`, 7.9, y, 4.75, 0.95, { size: 18, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.8, 0.9, 0.9);
    d.t(s, ['Que remarquez-vous ? //woon**##de##** · speel**##de##** · werk**##te##**//', 'Pourquoi //-de// ici et //-te// là ?'], 2.0, 5.65, 10.5, 1.2, { size: 19, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 radical + te / de
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Radical + te ou de' });
    const X = [0.6, 4.75, 8.9]; const cw = 3.83;
    [[null, 'infinitif', 'tx2'], ['FaCut', '① le radical (M3)', 'tx2'], ['FaPlus', '② + te / de', TE]].forEach(([ic, lab, c], i) => {
      if (ic) d.iconDisc(s, ic, X[i], 1.72, 0.48, c);
      d.t(s, lab, X[i] + (ic ? 0.6 : 0), 1.72, cw - 0.6, 0.48, { size: 16, bold: true, color: c, valign: 'middle' });
    });
    [['werken', '@@werk@@', '@@werk@@##te##', 'wij werk##ten##'], ['wonen', '@@woon@@', '@@woon@@^^de^^', 'wij woon^^den^^']].forEach((L, li) => {
      const y = 2.38 + li * 1.25;
      d.rect(s, 0.6, y + 0.92, 12.13, 0.08, { fill: 'accent5', line: null, radius: 0.04 });
      L.slice(0, 3).forEach((t, i) => {
        const last = i === 2;
        d.rect(s, X[i], y, cw, 0.85, { fill: i === 0 ? 'tx2' : last ? 'EDF6F0' : 'bg1', line: i === 0 ? null : last ? 'accent3' : BORDER, lw: last ? 2.5 : 1.25, radius: 0.1, shadow: true });
        d.t(s, `**${t}**`, X[i] + (last ? 0.1 : 0), y, last ? 1.9 : cw, 0.85, { size: 26, color: i === 0 ? 'bg1' : 'tx1', align: 'center', valign: 'middle', head: true });
        if (i < 2) d.line(s, X[i] + cw + 0.04, y + 0.42, X[i + 1] - 0.04, y + 0.42, { color: 'accent1', lw: 2.5 });
      });
      d.t(s, `//${L[3]}//`, X[2] + 2.0, y, 1.8, 0.85, { size: 16, color: 'accent5', valign: 'middle' });
    });
    [['SINGULIER', 'ik · jij · u · hij · zij', 'werk##te## · woon^^de^^', 0.6], ['PLURIEL', 'wij · jullie · zij', 'werk##ten## · woon^^den^^', 6.81]].forEach(([h, p, f, x]) => {
      d.rect(s, x, 4.95, 5.92, 1.05, { fill: 'bg2', line: BORDER });
      d.t(s, h, x + 0.2, 4.98, 2.5, 0.35, { size: 12, bold: true, color: 'accent5', cs: 2 });
      d.t(s, p, x + 0.2, 5.33, 2.6, 0.6, { size: 15, color: 'accent5', valign: 'middle' });
      d.t(s, `//**${f}**//`, x + 2.55, 4.95, 3.3, 1.05, { size: 20, valign: 'middle' });
    });
    band(s, 'Plus simple que le présent : **deux formes seulement** (singulier / pluriel).', 6.2, 0.65, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 5 te ou de : SoFT KetCHuP
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'te ou de ? Le même test qu’au M15' });
    d.rect(s, 0.6, 1.65, 6.3, 1.1, { fill: 'FDF1E6', line: 'accent1', lw: 2, radius: 0.2 });
    d.t(s, SKC, 0.6, 1.65, 6.3, 1.1, { size: 44, align: 'center', valign: 'middle', head: true });
    d.rect(s, 7.2, 1.65, 5.53, 1.1, { fill: 'bg2', line: BORDER });
    d.t(s, ['participe → imparfait : **même lettre**', '//gewerk**##t##** → werk**##te##** · gewoon**^^d^^** → woon**^^de^^**//'], 7.4, 1.65, 5.2, 1.1, { size: 17, valign: 'middle', gap: 4 });
    [['+ te', TE, [['maken', 'maak##te##'], ['fietsen', 'fiets##te##'], ['stoppen', 'stop##te##'], ['koken', 'kook##te##']], 0.6], ['+ de', DE, [['bellen', 'bel^^de^^'], ['leren', 'leer^^de^^'], ['reizen', 'reis^^de^^'], ['leven', 'leef^^de^^']], 6.81]].forEach(([h, c, rows, x]) => {
      d.rect(s, x, 3.0, 5.92, 3.0, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.rect(s, x, 3.0, 5.92, 0.55, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, 3.0, 5.92, 0.55, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      rows.forEach(([a, b], i) => {
        const y = 3.65 + i * 0.57;
        d.t(s, `//${a}//`, x + 0.4, y, 2.2, 0.5, { size: 19, valign: 'middle' });
        d.t(s, `→ //**${b}**//`, x + 2.7, y, 3.0, 0.5, { size: 19, valign: 'middle' });
      });
    });
    band(s, '//reizen, leven// : on regarde l’infinitif (//z, v//), comme au M15 → //reis**de**, leef**de**//', 6.2, 0.65, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 6 piège double lettre
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : la double lettre' });
    d.rect(s, 0.6, 1.7, 12.13, 4.35, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const R = [['wachten', 'wacht', 'te', 'wach##tt##e', TE], ['praten', 'praat', 'te', 'praa##tt##e', TE], ['antwoorden', 'antwoord', 'de', 'antwoor^^dd^^e', DE], ['zetten', 'zet', 'te', 'ze##tt##e', TE]];
    R.forEach(([inf, rad, end, res, c], i) => {
      const x = 0.85 + (i % 2) * 5.95; const y = 2.6 + Math.floor(i / 2) * 1.4;
      d.t(s, `//${inf}//`, x, y - 0.38, 3, 0.35, { size: 14, italic: true, color: 'accent5' });
      const rw = 0.4 + rad.length * 0.17;
      d.rect(s, x, y, rw, 0.8, { fill: 'tx2', line: null, radius: 0.06 });
      d.t(s, rad, x, y, rw, 0.8, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.rect(s, x + rw + 0.06, y, 0.7, 0.8, { fill: c, line: null, radius: 0.06 });
      d.t(s, end, x + rw + 0.06, y, 0.7, 0.8, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, '=', x + rw + 0.8, y, 0.45, 0.8, { size: 24, bold: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.rect(s, x + rw + 1.25, y, 2.3, 0.8, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.08 });
      d.t(s, `//**${res}**//`, x + rw + 1.25, y, 2.3, 0.8, { size: 22, align: 'center', valign: 'middle' });
    });
    d.t(s, '✗ //{{wachte, antwoorde}}// → ✓ //**wachtte, antwoordde**// · //zetten// : radical //zet// (M3) + //te//', 0.85, 5.3, 11.6, 0.6, { size: 18, valign: 'middle' });
    band(s, 'À l’oral, //wachtte// = un seul //t// : la double lettre n’existe qu’à l’écrit (comme //dt//, M4).', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 7 irréguliers
  {
    const s = d.page({ g: 7, tag: 'À RETENIR', title: 'Les irréguliers fréquents' });
    const F = [
      ['famille « a »', 'accent3', [['eten', 'at'], ['lezen', 'las'], ['nemen', 'nam'], ['spreken', 'sprak'], ['komen', 'kwam'], ['zien', 'zag']]],
      ['famille « ee »', 'accent4', [['schrijven', 'schreef'], ['blijven', 'bleef'], ['krijgen', 'kreeg']]],
      ['famille « o »', 'accent2', [['drinken', 'dronk'], ['beginnen', 'begon'], ['vinden', 'vond']]],
      ['les positions (M17)', 'accent1', [['zitten', 'zat'], ['liggen', 'lag'], ['staan', 'stond'], ['hangen', 'hing']]],
      ['les incontournables', 'tx2', [['zijn', 'was / waren'], ['hebben', 'had'], ['gaan', 'ging'], ['doen', 'deed']]],
    ];
    const w = (12.13 - 0.5) / 3; const h = 2.45;
    F.forEach(([lab, c, rows], i) => {
      const x = 0.6 + (i % 3) * (w + 0.25); const y = 1.7 + Math.floor(i / 3) * (h + 0.2);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.rect(s, x, y, w, 0.5, { fill: c, line: null, radius: 0.08 });
      d.t(s, lab, x + 0.2, y, w - 0.4, 0.5, { size: 16, bold: true, color: 'bg1', valign: 'middle' });
      const rh = Math.min(0.42, (h - 0.6) / rows.length);
      rows.forEach(([a, b], k) => {
        const yy = y + 0.56 + k * rh + ((h - 0.6) - rows.length * rh) / 2;
        d.t(s, `//${a}//`, x + 0.25, yy, 1.6, rh, { size: rows.length > 5 ? 15 : 16, valign: 'middle' });
        d.t(s, `→ //**${b}**//`, x + 1.85, yy, w - 2.0, rh, { size: rows.length > 5 ? 15 : 16, valign: 'middle' });
      });
    });
    const x = 0.6 + 2 * (w + 0.25); const y = 1.7 + h + 0.2;
    d.rect(s, x, y, w, h, { fill: 'bg2', line: BORDER });
    d.ill(s, 'light-bulb', x + 0.2, y + 0.2, 0.6, 0.6);
    d.t(s, ['**Pluriel** : + //en//, avec les syllabes du M1 :', '//at → **aten** · las → **lazen** · kwam → **kwamen**//', '//was → **waren**// (irrégulier)'], x + 0.9, y + 0.15, w - 1.05, h - 0.3, { size: 15, gap: 8, valign: 'middle' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 8 zijn, hebben, modaux
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'zijn, hebben et les modaux' });
    d.table(s, [['infinitif', 'singulier', 'pluriel'], ['zijn', 'was', 'waren'], ['hebben', 'had', 'hadden'], ['kunnen', 'kon', 'konden'], ['moeten', 'moest', 'moesten'], ['willen', 'wilde (wou)', 'wilden'], ['mogen', 'mocht', 'mochten']],
      { x: 0.6, y: 1.7, w: 6.4, colW: [2.0, 2.3, 2.1], size: 19, headSize: 14, rowH: 0.55, boldCol: 1, headColor: 'tx2' });
    ['Ik **was** ziek.', 'Ik **had** geen tijd.', 'Ik **moest** werken.', 'Ik **kon** niet komen.'].forEach((t, i) => d.bubble(s, `//${t}//`, 7.4, 1.7 + i * 0.98, 5.33, 0.82, 'accent2', { size: 20 }));
    band(s, 'Ces verbes sont presque toujours à l’imperfectum, **même à l’oral** : //Ik was ziek// plutôt que //Ik ben ziek geweest// (correct aussi, M15).', 5.85, 0.95, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 9 quand utiliser l'imperfectum
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'Quand utiliser l’imperfectum ?' });
    const C3 = [['framed-picture', 'description, décor', 'Het **was** koud en het **regende**.'], ['repeat-button', 'habitude', 'Vroeger **nam** ik elke dag de trein.'], ['clapper-board', 'récit, suite d’événements', 'Ik **stond** op, ik **dronk** een koffie en ik **vertrok**.']];
    const w = (12.13 - 2 * 0.25) / 3;
    C3.forEach(([il, h, ex], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 2.6, { fill: 'bg1', line: TE, lw: 2, shadow: true });
      d.ill(s, il, x + 0.2, 1.85, 0.8, 0.8);
      d.t(s, h, x + 1.1, 1.85, w - 1.25, 0.8, { size: 18, bold: true, color: TE, valign: 'middle' });
      d.t(s, `//${ex}//`, x + 0.25, 2.7, w - 0.5, 1.5, { size: 18, valign: 'middle' });
    });
    d.rect(s, 0.6, 4.5, 12.13, 1.4, { fill: 'bg2', line: 'accent5', lw: 1.25, dash: 'dash' });
    d.chip(s, 'PERFECTUM', 0.85, 4.62, 'accent5', 0.34, 12);
    d.t(s, ['un fait ponctuel, un résultat, une question :', '//Ik **heb** mijn sleutel **verloren**! · Wat **heb** je gisteren **gedaan**?//'], 0.85, 5.0, 11.7, 0.85, { size: 17, valign: 'middle', gap: 2 });
    d.t(s, 'Une histoire commence souvent au perfectum (//Ik heb gisteren iets grappigs meegemaakt.//), puis continue à l’imperfectum.', 0.6, 6.05, 12.13, 0.8, { size: 16, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 10 piège imparfait ≠ imperfectum
  {
    const s = d.page({ g: 10, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : « imparfait » ≠ imperfectum' });
    d.rect(s, 0.6, 1.7, 12.13, 4.35, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const R = [['« Quand j’étais petit, je jouais au foot. »', 'Toen ik klein **was**, **speelde** ik voetbal.', 'imperfectum', TE], ['« Hier, j’ai travaillé jusqu’à 18 h. »', 'Gisteren **heb** ik tot 18 uur **gewerkt**.', 'perfectum', 'accent5'], ['« J’ai été malade. »', 'Ik **was** ziek.', 'imperfectum !', TE], ['« J’ai dû travailler. »', 'Ik **moest** werken.', 'imperfectum !', TE]];
    R.forEach(([fr, nl, tag, c], i) => {
      const y = 2.3 + i * 0.92;
      d.t(s, fr, 0.85, y, 4.6, 0.8, { size: 16, valign: 'middle' });
      d.line(s, 5.45, y + 0.4, 5.8, y + 0.4, { color: 'accent5', lw: 2 });
      d.rect(s, 5.85, y + 0.06, 4.5, 0.68, { fill: 'FFFFFF', line: c, lw: 1.5, radius: 0.08 });
      d.t(s, `//${nl}//`, 6.0, y + 0.06, 4.3, 0.68, { size: 16, valign: 'middle' });
      d.chip(s, tag, 10.5, y + 0.22, c, 0.36, 12);
    });
    band(s, 'Pas de correspondance 1 = 1 : regardez le **verbe** et la **fonction** (décor, habitude, récit).', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 11 piège toen
  {
    const s = d.page({ g: 11, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : « quand » au passé = toen' });
    const e = strip(s, 0.6, 1.72, [['Toen', 'c', 1.15], ['ik in Namen', 'n', 2.3], ['woonde,', 'v', 1.6]], { size: 21, h: 0.72 });
    strip(s, e + 0.1, 1.72, [['nam', 'v', 1.0], ['ik elke dag de trein.', 'n', 3.6]], { size: 21, h: 0.72 });
    d.rect(s, e - 1.6, 2.5, 2.7, 0.32, { fill: 'accent6', line: null, radius: 0.05 });
    d.t(s, 'verbe, verbe (M9)', e - 1.6, 2.5, 2.7, 0.32, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    const C3 = [['toen', 'une fois, une période du passé', '//**Toen** ik klein **was**, …//', 'accent1'], ['als', 'chaque fois que (habitude) · futur', '//**Als** het **regende**, nam ik de bus.//', 'accent2'], ['wanneer', 'question : quand ?', '//**Wanneer** ben je aangekomen?//', 'accent5']];
    const w = (12.13 - 2 * 0.25) / 3;
    C3.forEach(([wd, use, ex, c], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 2.98, w, 1.8, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.t(s, wd, x + 0.2, 3.0, w - 0.4, 0.5, { size: 24, bold: true, color: c, head: true, valign: 'middle' });
      d.t(s, use, x + 0.2, 3.48, w - 0.4, 0.4, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, ex, x + 0.2, 3.9, w - 0.4, 0.8, { size: 17, valign: 'middle' });
    });
    d.trap(s, 0.6, 4.95, 12.13, 1.9, '« Quand j’étais petit… » → //{{Als ik klein was…}}//', '//**Toen** ik klein was…// · //toen// en tête de principale = « alors » : //Toen ging ik naar huis.//', { size: 17 });
  }

  // ---------------------------------------------------------------- 12 raconter une histoire
  {
    const s = d.page({ g: 12, tag: 'VOCABULAIRE', title: 'Raconter une histoire' });
    const P = [['alarm-clock', 'Op mijn eerste werkdag **!!stond!!** ik om 6 uur **##op##**.'], ['train', '**^^Eerst^^** **!!nam!!** ik de trein, maar de trein **!!had!!** vertraging.'], ['person-running', '**^^Toen^^** **!!liep!!** ik naar het kantoor.'], ['woman-office-worker', '**^^Gelukkig^^** **!!wachtte!!** Sofie al op me, met een koffie!']];
    const w = (12.13 - 3 * 0.2) / 4;
    P.forEach(([il, t], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 1.7, w, 3.95, { fill: 'FFFFFF', line: 'tx2', lw: 2.5, radius: 0.04, shadow: true });
      d.rect(s, x + 0.12, 1.82, w - 0.24, 1.75, { fill: SEPIA, line: null, radius: 0.02 });
      d.num(s, i + 1, x + 0.2, 1.9, 0.42, 'tx2', 14);
      d.ill(s, il, x + w / 2 - 0.65, 2.05, 1.3, 1.3);
      if (i === 3) d.ill(s, 'hot-beverage', x + w - 0.85, 2.75, 0.6, 0.6);
      d.t(s, `//${t}//`, x + 0.15, 3.65, w - 0.3, 1.9, { size: 17, align: 'center', valign: 'middle' });
    });
    band(s, 'Mots du récit : //eerst, toen, daarna, plots, gelukkig, jammer genoeg, uiteindelijk// · particule au bout : //ik stond … op// (M11)', 5.9, 0.95, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : la fiche de l’imperfectum' });
    const C3 = [
      ['Former', 'FaCogs', TE, ['radical + //**##te(n)##**// (SoFT KetCHuP)', 'ou //**^^de(n)^^**//', '//werkte(n) · woonde(n)//', 'double lettre : //wachtte, antwoordde//']],
      ['Irréguliers', 'FaBrain', 'accent4', ['//was / waren · had · ging · kwam · zag · deed · nam · zat · lag · stond…//', 'pluriel : syllabes du M1 (//aten//)']],
      ['Utiliser', 'FaBookOpen', DE, ['décor · habitude · récit', '//zijn, hebben//, modaux', 'perfectum : un fait ponctuel, une question']],
    ];
    const w = (12.13 - 2 * 0.25) / 3;
    C3.forEach(([h, ic, c, body], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.card(s, x, 1.7, w, 4.4, { icon: ic, head: h, color: c, body, size: 18, gap: 12 });
    });
    d.t(s, 'Ce schéma est la référence pour tous les exercices.', 0.6, 6.35, 12.13, 0.45, { size: 14, italic: true, color: 'accent5', align: 'center' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['La machine à imparfait', '★', 'FaCogs'], ['te ou de ?', '★★', 'FaBalanceScale'], ['Le memory des irréguliers', '★', 'FaClone'], ['Vroeger en nu', '★★', 'FaHistory'],
    ['Le détective', '★★', 'FaSearch'], ['L’histoire en images', '★★', 'FaImages'], ['L’entretien d’embauche', '★★★', 'FaUserTie'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 machine à imparfait
  const ex1 = [['werken', 'werk##te##', 'werk##ten##'], ['wonen', 'woon^^de^^', 'woon^^den^^'], ['maken', 'maak##te##', 'maak##ten##'], ['spelen', 'speel^^de^^', 'speel^^den^^'], ['fietsen', 'fiets##te##', 'fiets##ten##'], ['reizen', 'reis^^de^^', 'reis^^den^^'], ['wachten', 'wacht##te##', 'wacht##ten##'], ['luisteren', 'luister^^de^^', 'luister^^den^^']];
  d.ex({ g: 15, title: 'Exercice 1 — La machine à imparfait', stars: '★', instr: 'Complétez le tableau : ik (singulier) et wij (pluriel).' }, (s, mode, top) => {
    const rh = (6.88 - top - 0.5) / 8; const C = [[0.6, 3.6], [4.35, 4.1], [8.6, 4.13]];
    ['infinitif', 'ik', 'wij'].forEach((h, i) => {
      d.rect(s, C[i][0], top, C[i][1], 0.45, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, h, C[i][0], top, C[i][1], 0.45, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    ex1.forEach(([inf, a, b], k) => {
      const y = top + 0.5 + k * rh;
      [inf, a, b].forEach((t, i) => {
        d.rect(s, C[i][0], y + 0.03, C[i][1], rh - 0.06, { fill: i === 0 ? 'bg2' : mode === 'a' ? 'EDF6F0' : 'bg1', line: i && mode === 'a' ? 'accent3' : BORDER, lw: 1 });
        if (i === 0 || mode === 'a') d.t(s, i === 0 ? `//${t}//` : `°°${i === 1 ? 'ik' : 'wij'}°° //**${t}**//`, C[i][0] + 0.2, y + 0.03, C[i][1] - 0.4, rh - 0.06, { size: 19, align: i === 0 ? 'left' : 'center', valign: 'middle' });
      });
    });
  });

  // ---------------------------------------------------------------- 16 ex2 te ou de
  const ex2 = [['ik werk', 'te'], ['ik bel', 'de'], ['ik fiets', 'te'], ['ik leer', 'de'], ['ik wacht', 'te'], ['ik antwoord', 'de'], ['ik reis', 'de'], ['ik kook', 'te'], ['ik leef', 'de'], ['ik praat', 'te']];
  d.ex({ g: 16, title: 'Exercice 2 — te ou de ?', stars: '★★', instr: 'Levez le carton TE ou DE, puis épelez le mot. Attention à la double lettre !' }, (s, mode, top) => {
    d.t(s, SKC, 0.6, top, 12.13, 0.65, { size: 30, align: 'center', valign: 'middle', head: true });
    const w = 2.25; const h = 1.05;
    ex2.forEach(([stem, L], i) => {
      const x = 0.6 + (i % 5) * (w + 0.22); const y = top + 0.85 + Math.floor(i / 5) * (h + 0.25);
      const c = L === 'te' ? TE : DE;
      d.rect(s, x, y, w, h, { fill: mode === 'a' ? (L === 'te' ? 'FDF1E6' : 'EAF1F8') : 'bg1', line: mode === 'a' ? c : 'accent5', lw: 2, shadow: true });
      d.t(s, mode === 'a' ? `//${stem}//**${L === 'te' ? '##te##' : '^^de^^'}**` : `//${stem}//°°…°°`, x + 0.05, y, w - 0.1, h, { size: 21, align: 'center', valign: 'middle', fit: true, max: 21, min: 14 });
    });
    const by = top + 0.85 + 2 * (h + 0.25) + 0.1;
    [['TE', TE, 2.6], ['DE', DE, 9.53]].forEach(([L, c, x]) => {
      d.oval(s, x, by, 1.2, 1.2, { fill: c });
      d.t(s, L, x, by, 1.2, 1.2, { size: 36, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    });
    if (mode === 'a') d.t(s, ['Double lettre : //wachtte, praatte, antwoordde//', '//reisde, leefde// : //z, v// à l’infinitif'], 4.0, by, 5.33, 1.2, { size: 16, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  });

  // ---------------------------------------------------------------- 17 ex3 memory des irréguliers
  const L3 = ['zijn', 'hebben', 'gaan', 'komen', 'zien', 'eten', 'nemen', 'schrijven', 'drinken', 'staan'];
  const R3 = ['at', 'kwam', 'was', 'dronk', 'stond', 'had', 'schreef', 'ging', 'zag', 'nam'];
  const sol3 = [2, 5, 7, 1, 8, 0, 9, 6, 3, 4];
  d.ex({ g: 17, title: 'Exercice 3 — Le memory des irréguliers', stars: '★', instr: 'Reliez chaque infinitif à son imperfectum (singulier).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 10;
    if (mode === 'a') sol3.forEach((r, i) => d.line(s, 3.15, top + i * rh + rh / 2, 6.0, top + r * rh + rh / 2, { color: 'tx2', lw: 2 }));
    L3.forEach((w, i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.05, 2.5, rh - 0.1, { fill: 'accent5', line: null, radius: 0.05 });
      d.t(s, `${i + 1}  ${w}`, 0.75, y + 0.05, 2.3, rh - 0.1, { size: 16, bold: true, color: 'bg1', valign: 'middle' });
    });
    R3.forEach((w, i) => {
      const y = top + i * rh;
      d.rect(s, 6.05, y + 0.05, 2.1, rh - 0.1, { fill: 'accent4', line: null, radius: 0.05 });
      d.t(s, `${'abcdefghij'[i]}  ${w}`, 6.2, y + 0.05, 1.9, rh - 0.1, { size: 16, bold: true, color: 'bg1', valign: 'middle' });
    });
    if (mode === 'a') {
      d.rect(s, 8.6, top, 4.13, 6.88 - top, { fill: 'EDF6F0', line: 'accent3', lw: 1.25 });
      d.t(s, 'PLURIEL', 8.8, top + 0.1, 3.7, 0.32, { size: 12, bold: true, color: 'accent3', cs: 2 });
      d.t(s, '//waren · hadden · gingen · kwamen · zagen · aten · namen · schreven · dronken · stonden//', 8.8, top + 0.5, 3.75, 6.88 - top - 0.7, { size: 18, valign: 'middle' });
    } else d.ill(s, 'brain', 9.6, top + 1.2, 2.2, 2.2);
  });

  // ---------------------------------------------------------------- 18 ex4 vroeger en nu
  const ex4 = [['Nu woon ik in Brussel.', 'Namen', 'Vroeger woonde ik in Namen.'], ['Nu werk ik bij Peeters & Co.', 'een bank', 'Vroeger werkte ik bij een bank.'], ['Nu ga ik met de fiets naar het werk.', 'de auto', 'Vroeger ging ik met de auto naar het werk.'], ['Nu drink ik thee.', 'koffie', 'Vroeger dronk ik koffie.'], ['Nu heb ik een hond.', 'een kat', 'Vroeger had ik een kat.'], ['Nu ben ik rustig.', 'zenuwachtig', 'Vroeger was ik zenuwachtig.']];
  d.ex({ g: 18, title: 'Exercice 4 — Vroeger en nu', stars: '★★', instr: 'Racontez le passé avec vroeger + l’indice. Attention à l’inversion !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex4.forEach(([a, hint, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, 1.1, y + 0.05, 4.6, rh - 0.12, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1 });
      d.t(s, `//${a}//`, 1.25, y + 0.05, 4.4, rh - 0.12, { size: 17, valign: 'middle' });
      d.line(s, 5.8, y + rh / 2, 6.95, y + rh / 2, { color: 'accent5', lw: 3 });
      d.t(s, `//${hint}//`, 5.75, y, 1.25, rh / 2 - 0.02, { size: 12, bold: true, color: 'accent5', align: 'center', valign: 'bottom' });
      d.rect(s, 7.05, y + 0.05, 5.68, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : SEPIA, line: mode === 'a' ? 'accent3' : SEPIA_L, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${b}//`, 7.2, y + 0.05, 5.45, rh - 0.12, { size: 17, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 19 ex5 détective
  d.ex({ g: 19, title: 'Exercice 5 — Le détective', stars: '★★', instr: 'Sofie raconte son ancien travail. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'Mijn vorige job — Sofie', 0.85, top, 8, 0.5, { size: 14, bold: true, color: 'bg1', valign: 'middle' });
    const txt = '//{{Vroeger ik werkte}}++ Vroeger werkte ik++ in een school in Gent. Ik {{geefde}}++ gaf++ Engelse les. Elke dag nam ik de tram. De leerlingen {{was}}++ waren++ leuk, maar ik had weinig tijd. Toen ik dertig werd, {{ik wilde}}++ wilde ik++ iets nieuws doen. Ik wachtte lang op een nieuwe job. Gelukkig {{vondde}}++ vond++ ik een job bij Peeters & Co!//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 21, mode, ls: 1.25, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //nam ik de tram · werd// (//worden//) · //wachtte// (double //t//).', 9.9, top + 3.05, 2.83, 1.8, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 20 ex6 histoire en images
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — L’histoire en images', stars: '★★' });
    d.t(s, '//Een rampzalige maandag//', 0.6, 1.62, 8, 0.45, { size: 20, bold: true, color: 'accent6', valign: 'middle' });
    const P = ['alarm-clock', 'cloud-with-rain', 'bus', 'hot-beverage', 'laptop', 'party-popper'];
    const w = 2.35; const h = 2.15;
    P.forEach((il, i) => {
      const x = 0.6 + (i % 3) * (w + 0.15); const y = 2.15 + Math.floor(i / 3) * (h + 0.15);
      d.rect(s, x, y, w, h, { fill: SEPIA, line: 'tx2', lw: 2, radius: 0.04 });
      d.num(s, i + 1, x + 0.12, y + 0.12, 0.4, 'tx2', 13);
      d.ill(s, il, x + w / 2 - 0.65, y + h / 2 - 0.6, 1.3, 1.3);
      if (i === 3) d.icon(s, 'FaTint', 'accent2', x + w - 0.75, y + h - 0.6, 0.4);
      if (i === 4) d.icon(s, 'FaTimes', 'accent6', x + w - 0.75, y + 0.2, 0.45);
    });
    d.ill(s, 'stopwatch', 8.2, 1.75, 0.8, 0.8);
    d.t(s, ['Par équipes, racontez la journée de Karim en **6 phrases**, avec //eerst, toen, daarna, plots, gelukkig//.'], 9.1, 1.7, 3.63, 1.3, { size: 15, valign: 'middle' });
    d.rect(s, 8.2, 3.2, 4.53, 2.6, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE DE VERBES', 8.4, 3.28, 4, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, ['//niet horen → hoorde niet//', '//regenen → regende//', '//missen → miste//', '//morsen → morste//', '//vergeten → vergat//', '//zijn → was//'], 8.4, 3.6, 4.2, 2.15, { size: 15, gap: 2 });
    d.rect(s, 8.2, 5.95, 4.53, 0.9, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.25 });
    d.t(s, 'Fin : //Gelukkig **was** de vergadering geannuleerd!//', 8.35, 5.95, 4.3, 0.9, { size: 15, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 21 ex7 entretien d'embauche
  d.roleplay({
    g: 21, title: 'Exercice 7 — L’entretien d’embauche',
    scenario: 'Lotte Claes postule chez Peeters & Co. Sofie (RH) l’interroge sur ses emplois précédents. On se vouvoie (//u//).',
    a: '**Sofie** : posez les questions : //Waar werkte u vroeger? Wat deed u daar? Hoe lang werkte u daar? Wat vond u leuk?//',
    b: '**Lotte** : répondez à l’imperfectum à l’aide du CV.',
    bank: '//Ik werkte bij… · Ik was verantwoordelijk voor… · Ik moest elke dag… · Ik had veel contact met klanten. · Het was een leuke job, maar…//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.55, { fill: 'purple', line: null, radius: 0.04 });
      d.t(s, 'CURRICULUM VITAE', x + 0.15, y, w - 0.3, 0.55, { size: 13, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
      d.ill(s, 'woman-office-worker', x + 0.2, y + 0.7, 0.9, 0.9);
      d.t(s, ['**Lotte Claes**', '//Gent · 29 jaar//'], x + 1.2, y + 0.7, w - 1.35, 0.9, { size: 14, valign: 'middle', gap: 2 });
      d.t(s, 'WERKERVARING', x + 0.2, y + 1.75, w - 0.4, 0.3, { size: 11, bold: true, color: 'accent5', cs: 2 });
      [['2019–2022', 'receptioniste', 'Hotel Zonneveld, Gent', 'bellhop-bell'], ['2022–2025', 'assistente', 'Bakkerij Smet, Brussel', 'bread']].forEach(([yr, job, pl, il], i) => {
        const yy = y + 2.1 + i * 1.45;
        d.chip(s, yr, x + 0.2, yy, 'accent1', 0.32, 11);
        d.ill(s, il, x + w - 0.75, yy, 0.55, 0.55);
        d.t(s, [`**${job}**`, `//${pl}//`], x + 0.2, yy + 0.4, w - 0.4, 0.9, { size: 14, gap: 2 });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket + bilan du parcours
  {
    const s = d.ticket({
      g: 22, title: 'Ticket de sortie et bilan du parcours',
      q: ['L’imperfectum de //werken// (//ik//) et de //wonen// (//wij//) ?', '//zijn, hebben, gaan// à l’imperfectum (//ik//) ?', 'Traduisez : « Quand j’étais petit, je jouais au foot. »'],
      self: ['Former', 'Mémoriser', 'Raconter'],
      teaser: { icon: 'FaTrophy', text: '**Proficiat! Néerlandais 1 is klaar.** — Volgende stap : Néerlandais 2' },
    });
    d.t(s, 'NÉERLANDAIS 1 · 19 MODULES', 7.6, 5.0, 4.5, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    const B = [['M1–M5', 5, 'accent2'], ['M6–M10', 5, 'accent1'], ['M11–M15', 5, 'accent3'], ['M16–M19', 4, 'purple']];
    const unit = (4.55 - 3 * 0.06) / 19; let x = 7.6;
    B.forEach(([lab, n, c]) => {
      const w = unit * n;
      d.rect(s, x, 5.38, w, 0.45, { fill: c, line: null, radius: 0.06 });
      d.t(s, `✓ ${lab}`, x, 5.38, w, 0.45, { size: 10, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      x += w + 0.06;
    });
    d.ill(s, 'trophy', 12.25, 5.3, 0.55, 0.55);
  }
}

module.exports = { meta, build };
