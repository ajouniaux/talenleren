// Module 21 — Groot of grote? · L'accord de l'adjectif
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 21, slug: 'Groot_of_grote', title: 'Groot of grote? — L’accord de l’adjectif', short: 'Groot of grote?', template: 'module_21_bijvoeglijk_naamwoord.md' };

const DE = 'tx2';
const HET = 'accent1';
const ADJ = 'accent4'; // l'adjectif et son -e = framboise

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        a: { fill: 'FBEAF2', line: ADJ, lw: 2.5, color: 'tx1', bold: true },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        f: { fill: 'F4F5F7', line: 'D5DCE6', lw: 1, color: 'accent5', bold: false },
      }[ty || 'n'];
      d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle', italic: ty === 'f' });
      cx += w + gap;
    });
    return cx - gap;
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const trapRows = (s, R, o = {}) => {
    d.rect(s, 0.6, 1.7, 12.13, o.h || 4.35, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    R.forEach(([il, fr, ko, ok], i) => {
      const y = 2.35 + i * (o.step || 1.2);
      if (il) d.ill(s, il, 0.85, y + 0.1, 0.75, 0.75);
      d.t(s, fr, 1.75, y, 3.55, 0.95, { size: 17, valign: 'middle' });
      if (ko) d.t(s, `✗ //{{${ko}}}//`, 5.3, y, 2.9, 0.95, { size: 15, color: 'accent6', valign: 'middle' });
      d.line(s, 8.25, y + 0.47, 8.6, y + 0.47, { color: 'accent3', lw: 2 });
      d.rect(s, 8.65, y + 0.08, 3.9, 0.8, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.8, y + 0.08, 3.7, 0.8, { size: 18, valign: 'middle', fit: true, max: 18, min: 13 });
    });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Groot of grote?', sub: 'L’accord de l’adjectif', line: 'een groot huis · de grote auto',
    visual: (s) => {
      [['house', 'een **groot** huis', 7.0], ['automobile', 'de **grot%%e%%** auto', 9.95]].forEach(([il, t, x]) => {
        d.rect(s, x, 1.0, 2.75, 3.4, { fill: 'FFFFFF', line: null, radius: 0.15, shadow: true });
        d.ill(s, il, x + 0.45, 1.2, 1.85, 1.85);
        d.t(s, `//${t}//`, x, 3.2, 2.75, 0.9, { size: 24, align: 'center', valign: 'middle', head: true });
      });
      d.t(s, '-e ?', 9.0, 4.6, 1.6, 0.8, { size: 36, bold: true, color: 'F6C27E', align: 'center', valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaArrowRight', h: 'Placer', t: 'Je mets l’adjectif avant le nom : //een rode auto//.', color: 'accent2' },
      { icon: 'FaBalanceScale', h: 'Choisir', t: 'Je sais quand ajouter //-e// : //een groot huis / het grote huis//.', color: ADJ },
      { icon: 'FaSearch', h: 'Décrire', t: 'Je décris une personne, un objet, un logement.', color: 'accent3' },
    ],
    band: 'Petites annonces, descriptions de produits, réclamations : l’adjectif est partout. Une seule terminaison : //-e//.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — les petites annonces' });
    const A = [['house-with-garden', 'TE HUUR', '**ruim** appartement met **grote** tuin'], ['bicycle', 'TE KOOP', '**oude** fiets, **rood**, 50 euro'], ['bellhop-bell', 'GEZOCHT', '**vriendelijke** receptionist voor een **klein** hotel']];
    const w = (12.13 - 2 * 0.3) / 3;
    A.forEach(([il, h, t], i) => {
      const x = 0.6 + i * (w + 0.3);
      d.rect(s, x, 1.85, w, 3.3, { fill: 'FFFDF2', line: 'E3C65A', lw: 1.25, shadow: true, rotate: i === 1 ? 1.5 : -1.5 });
      d.ill(s, 'round-pushpin', x + w / 2 - 0.22, 1.65, 0.45, 0.45);
      d.t(s, h, x, 2.1, w, 0.45, { size: 18, bold: true, color: 'accent6', align: 'center', cs: 2 });
      d.ill(s, il, x + w / 2 - 0.55, 2.6, 1.1, 1.1);
      d.t(s, `//${t}//`, x + 0.25, 3.75, w - 0.5, 1.25, { size: 19, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.5, 12.13, 1.35, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.72, 0.9, 0.9);
    d.t(s, ['Pourquoi //ruim// mais //grote// ? //oude// mais //rood// ?', 'Indice : regardez le mot qui suit (//de// ou //het//) et la place de l’adjectif.'], 2.0, 5.5, 10.5, 1.35, { size: 19, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 avant le nom / après zijn
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Avant le nom ou après zijn ?' });
    d.t(s, 'AVANT LE NOM → //-e//', 0.6, 1.7, 6, 0.4, { size: 15, bold: true, color: ADJ, cs: 1 });
    strip(s, 0.6, 2.15, [['de', 'n', 0.8], ['rod%%e%%', 'a', 1.6], ['auto', 'n', 1.4]], { size: 24, h: 0.8 });
    strip(s, 5.3, 2.15, [['een', 'n', 0.95], ['nieuw%%e%%', 'a', 1.9], ['collega', 'n', 1.7]], { size: 24, h: 0.8 });
    d.t(s, 'APRÈS //ZIJN// (ATTRIBUT) → jamais de //-e//', 0.6, 3.25, 9, 0.4, { size: 15, bold: true, color: 'accent5', cs: 1 });
    strip(s, 0.6, 3.7, [['De auto', 'n', 1.7], ['is', 'v', 0.8], ['rood.', 'a', 1.4]], { size: 24, h: 0.8 });
    strip(s, 5.3, 3.7, [['De collega', 'n', 2.0], ['is', 'v', 0.8], ['nieuw.', 'a', 1.6]], { size: 24, h: 0.8 });
    d.t(s, 'FRANÇAIS', 0.6, 4.8, 3, 0.32, { size: 13, bold: true, color: 'accent5', cs: 2 });
    strip(s, 0.6, 5.15, [['une', 'f', 0.9], ['voiture', 'f', 1.4], ['rouge', 'f', 1.2]], { size: 20, h: 0.65 });
    d.t(s, '→', 4.35, 5.15, 0.5, 0.65, { size: 24, bold: true, color: 'accent1', align: 'center', valign: 'middle' });
    strip(s, 4.9, 5.15, [['een', 'n', 0.9], ['rod%%e%%', 'a', 1.3], ['auto', 'n', 1.2]], { size: 20, h: 0.65 });
    d.card(s, 9.0, 4.8, 3.73, 2.05, { icon: 'FaLightbulb', head: 'Réflexe', color: 'accent1', body: ['L’adjectif est **collé devant un nom** ? Sinon, on n’y touche pas.'], size: 15 });
  }

  // ---------------------------------------------------------------- 5 la case sans -e
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'La règle : -e partout… sauf une case' });
    const X = [0.6, 2.75, 6.1, 9.45]; const W = [2.0, 3.2, 3.2, 3.28];
    ['', 'avec //de / het//', 'avec //een//', 'pluriel'].forEach((h, i) => { if (h) d.t(s, h, X[i], 1.7, W[i], 0.45, { size: 16, bold: true, color: 'accent5', align: 'center', valign: 'middle' }); });
    const R = [['mot DE', DE, ['de grot%%e%% stoel', 'een grot%%e%% stoel', 'grot%%e%% stoelen']], ['mot HET', HET, ['het grot%%e%% huis', 'een **groot** huis', 'grot%%e%% huizen']]];
    R.forEach(([lab, c, cells], i) => {
      const y = 2.25 + i * 1.5;
      d.rect(s, X[0], y, W[0], 1.3, { fill: c, line: null, radius: 0.08 });
      d.t(s, lab, X[0], y, W[0], 1.3, { size: 18, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      cells.forEach((t, j) => {
        const hole = i === 1 && j === 1;
        d.rect(s, X[j + 1], y, W[j + 1], 1.3, { fill: hole ? 'FBEDEB' : 'bg1', line: hole ? 'accent6' : c, lw: hole ? 3.5 : 1.5, radius: 0.08, shadow: !hole });
        d.t(s, `//${t}//`, X[j + 1], y, W[j + 1], 1.3, { size: 22, align: 'center', valign: 'middle' });
      });
    });
    d.chip(s, 'pas de -e !', X[2] + W[2] / 2 - 0.7, 5.05, 'accent6', 0.38, 14);
    band(s, 'La seule case sans //-e// : **//een / geen / rien// + mot //het// au singulier** (//een groot huis, warm water//).', 5.75, 0.95, 'tx2', 19);
  }

  // ---------------------------------------------------------------- 6 piège accord à la française
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : l’accord à la française' });
    trapRows(s, [['house', '« une grand**e** maison »', 'een grote huis', 'een **groot** huis (//het//)'], ['house', '« la maison est grand**e** »', 'Het huis is grote.', 'Het huis is **groot**.'], ['automobile', '« une voiture rouge »', 'een auto rode', 'een **rode** auto']], { h: 4.35, step: 1.25 });
    band(s, 'Trois réflexes : la **place** (avant le nom) · l’**attribut** (pas de //-e//) · la case //een + het//', 6.25, 0.62, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 7 orthographe
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'L’orthographe du -e' });
    const C3 = [['voyelle longue', 'on enlève une voyelle', 'accent3', [['groot', 'grote'], ['duur', 'dure'], ['rood', 'rode'], ['breed', 'brede']]], ['voyelle courte', 'on double la consonne', 'accent4', [['wit', 'witte'], ['dik', 'dikke'], ['snel', 'snelle']]], ['f / s → v / z', 'comme au M4, à l’envers', 'accent2', [['lief', 'lieve'], ['grijs', 'grijze'], ['boos', 'boze']]]];
    const w = (12.13 - 2 * 0.25) / 3;
    C3.forEach(([h, sub, c, rows], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 4.15, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.rect(s, x, 1.7, w, 0.85, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, 1.72, w, 0.45, { size: 19, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, sub, x, 2.12, w, 0.35, { size: 13, italic: true, color: 'bg1', align: 'center', valign: 'middle' });
      rows.forEach(([a, b], k) => {
        const y = 2.75 + k * 0.72;
        d.t(s, `//${a}//`, x + 0.35, y, 1.4, 0.6, { size: 21, valign: 'middle' });
        d.t(s, `→ //**${b}**//`, x + 1.75, y, w - 1.9, 0.6, { size: 21, valign: 'middle' });
      });
    });
    band(s, 'Même règle que le pluriel (M1) · //-ig, -lijk// ne bougent pas : //rustige, vriendelijke//', 6.1, 0.75, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 8 après deze, dit, mijn, ons
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Après deze, dit, mijn, ons… : toujours -e' });
    const B = ['de', 'het', 'deze', 'dit', 'die', 'dat', 'mijn', 'jouw', 'zijn', 'haar', 'ons', 'onze', 'hun', 'uw'];
    B.forEach((b, i) => {
      const x = 0.6 + (i % 7) * 1.25; const y = 1.75 + Math.floor(i / 7) * 0.7;
      d.rect(s, x, y, 1.1, 0.55, { fill: 'tx2', line: null, radius: 0.25 });
      d.t(s, b, x, y, 1.1, 0.55, { size: 16, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.line(s, 9.4, 2.4, 10.1, 2.4, { color: ADJ, lw: 3 });
    d.oval(s, 10.2, 1.8, 1.25, 1.25, { fill: ADJ });
    d.t(s, '-e', 10.2, 1.8, 1.25, 1.25, { size: 34, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.t(s, ['//dit grot**%%e%%** huis · mijn nieuw**%%e%%** laptop//', '//ons oud**%%e%%** kantoor · dat mooi**%%e%%** gebouw//', '//uw volgend**%%e%%** afspraak//'], 0.6, 3.4, 12.13, 1.6, { size: 22, gap: 8, align: 'center', valign: 'middle' });
    d.rect(s, 0.6, 5.2, 12.13, 1.6, { fill: 'accent6', tr: 92, line: 'accent6', lw: 1 });
    d.t(s, ['Seuls //**een**, **geen**// et l’**absence d’article** ouvrent la case sans //-e// (avec un mot //het//).', 'Même //ons// (+ //het//) donne //ons **oude** kantoor// : après un possessif, toujours //-e// !'], 0.85, 5.2, 11.7, 1.6, { size: 18, gap: 6, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 9 contraires
  {
    const s = d.page({ g: 9, tag: 'VOCABULAIRE', title: 'Décrire : les adjectifs contraires' });
    const G = [['PERSONNES', [['baby', 'jong', 'oud', 'older-person'], ['man-raising-hand', 'groot', 'klein', 'child'], ['smiling-face-with-smiling-eyes', 'vriendelijk', 'onvriendelijk', 'pouting-face'], ['person-running', 'druk', 'rustig', 'relieved-face']]], ['OBJETS ET LIEUX', [['new-button', 'nieuw', 'oud', 'derelict-house'], ['money-bag', 'duur', 'goedkoop', 'coin'], ['sun', 'licht', 'donker', 'crescent-moon'], ['office-building', 'groot', 'klein', 'house']]]];
    G.forEach(([h, rows], gi) => {
      const x = 0.6 + gi * 6.18;
      d.t(s, h, x, 1.65, 5.95, 0.35, { size: 13, bold: true, color: 'accent5', cs: 2 });
      rows.forEach(([il1, a, b, il2], i) => {
        const y = 2.05 + i * 1.08;
        d.rect(s, x, y, 5.95, 0.95, { fill: i % 2 ? 'bg1' : 'bg2', line: BORDER, radius: 0.08 });
        d.ill(s, il1, x + 0.12, y + 0.12, 0.7, 0.7);
        d.t(s, `**${a}**`, x + 0.9, y, 1.9, 0.95, { size: 17, color: 'accent2', valign: 'middle' });
        d.t(s, '↔', x + 2.75, y, 0.45, 0.95, { size: 20, color: 'accent5', align: 'center', valign: 'middle' });
        d.t(s, `**${b}**`, x + 3.15, y, 1.9, 0.95, { size: 17, color: ADJ, valign: 'middle', align: 'right' });
        d.ill(s, il2, x + 5.15, y + 0.12, 0.7, 0.7);
      });
    });
    d.t(s, '//druk// = agité, occupé · //licht// = clair ou léger · //on-// = le contraire (M14) · //een kleine, oude stoel//', 0.6, 6.45, 12.13, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 10 piège invariables
  {
    const s = d.page({ g: 10, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : les adjectifs qui ne bougent pas' });
    d.rect(s, 0.6, 1.7, 12.13, 4.35, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const F = [['wood', 'matières en //-en//', '//een **houten** tafel · een **gouden** ring · een **wollen** trui//'], ['t-shirt', 'couleurs en //-e// ou //-a//', '//een **oranje** jas · een **roze** trui · een **lila** tas//'], ['handbag', 'mots étrangers', '//een **plastic** tas//']];
    F.forEach(([il, h, ex], i) => {
      const y = 2.35 + i * 1.05;
      d.ill(s, il, 0.85, y + 0.1, 0.75, 0.75);
      d.t(s, h, 1.8, y, 3.2, 0.95, { size: 17, bold: true, color: 'accent6', valign: 'middle' });
      d.t(s, ex, 5.0, y, 7.5, 0.95, { size: 19, valign: 'middle' });
    });
    d.t(s, '✗ //{{een houtene tafel}}// → ✓ //**een houten tafel**// — ils finissent déjà par //-en// ou une voyelle', 0.85, 5.45, 11.7, 0.5, { size: 17, valign: 'middle' });
    band(s, 'Invariables partout : //de oranje auto · het houten huis · houten stoelen//.', 6.25, 0.62, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 11 nationalités
  {
    const s = d.page({ g: 11, tag: 'GRAMMAIRE', title: 'Rappel M7 : Belgisch, Belgische' });
    const C4 = [['een Belgisch**%%e%%** collega', DE, 'de collega'], ['het Belgisch**%%e%%** bier', HET, 'het bier'], ['een **Belgisch** bedrijf', HET, 'het bedrijf · case sans -e'], ['Belgisch**%%e%%** frietjes', DE, 'pluriel']];
    const w = (12.13 - 0.3) / 2;
    C4.forEach(([t, c, sub], i) => {
      const x = 0.6 + (i % 2) * (w + 0.3); const y = 1.75 + Math.floor(i / 2) * 1.75;
      d.rect(s, x, y, w, 1.55, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.flag(s, 'be', x + 0.3, y + 0.4, 0.9);
      d.t(s, `//${t}//`, x + 1.45, y + 0.15, w - 1.6, 0.85, { size: 24, valign: 'middle' });
      d.t(s, sub, x + 1.45, y + 0.95, w - 1.6, 0.45, { size: 14, italic: true, color: c, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.3, 12.13, 0.75, { fill: 'bg2', line: BORDER });
    d.t(s, 'Attribut : //Hij is **Belgisch**.// (pas de //-e//) · majuscule comme au M7', 0.85, 5.3, 11.7, 0.75, { size: 18, valign: 'middle' });
    d.t(s, 'Au M7, //Belgische// était appris « en bloc » : maintenant, la règle l’explique.', 0.6, 6.25, 12.13, 0.5, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 12 bonus comparer
  {
    const s = d.page({ g: 12, tag: '+ BONUS', title: '+ BONUS : comparer' });
    [['groot', 1.2, 'accent5'], ['groter', 1.8, 'accent2'], ['het grootst', 2.4, 'accent1']].forEach(([t, h, c], i) => {
      const x = 0.6 + i * 2.05;
      d.rect(s, x, 4.6 - h, 1.95, h, { fill: c, line: null, radius: 0.04 });
      d.t(s, `**${t}**`, x, 4.6 - h + 0.1, 1.95, 0.6, { size: 18, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.ill(s, '1st-place-medal', 4.85, 1.65, 0.6, 0.6);
    d.t(s, '//Brussel is **groter dan** Gent.//', 0.6, 4.75, 6.2, 0.5, { size: 19, valign: 'middle' });
    d.t(s, '//duur → duur**der** → duurst// (après //r// : //-der//)', 0.6, 5.25, 6.2, 0.5, { size: 17, valign: 'middle' });
    d.rect(s, 7.0, 1.7, 5.73, 3.55, { fill: 'bg2', line: BORDER });
    d.t(s, 'IRRÉGULIERS', 7.2, 1.8, 4, 0.32, { size: 12, bold: true, color: 'accent5', cs: 2 });
    d.t(s, ['//goed → **beter** → **best**//', '//veel → **meer** → **meest**//', '//graag → **liever** → **liefst**//'], 7.2, 2.2, 5.4, 2.9, { size: 21, gap: 12, valign: 'middle' });
    band(s, 'Devant un nom, toujours la règle du //-e// : //de grootste stad · een duurdere laptop//', 5.95, 0.85, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 13 organigramme
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : l’organigramme de l’adjectif' });
    const diamond = (t, x, y, w, h, size = 15) => s.addText(t, { shape: d.S.DIAMOND, x, y, w, h, fill: { color: 'EEF3F8' }, line: { color: '17375E', width: 1.5 }, fontSize: size, bold: true, color: '1B2333', align: 'center', valign: 'middle', margin: 0 });
    diamond('L’adjectif est-il devant un nom ?', 0.6, 1.75, 4.8, 1.15);
    d.line(s, 5.42, 2.32, 5.95, 2.32, { color: 'accent5', lw: 2 });
    d.t(s, 'NON', 5.4, 1.95, 0.6, 0.3, { size: 12, bold: true, color: 'accent5', align: 'center' });
    d.rect(s, 6.0, 1.85, 3.7, 0.95, { fill: 'accent5', line: null });
    d.t(s, 'pas de -e : //De auto is **rood**.//', 6.15, 1.85, 3.5, 0.95, { size: 16, color: 'bg1', valign: 'middle' });
    d.line(s, 3.0, 2.9, 3.0, 3.25, { color: 'accent3', lw: 2 });
    d.t(s, 'OUI', 3.1, 2.92, 0.6, 0.3, { size: 12, bold: true, color: 'accent3' });
    diamond('Mot het au singulier avec een, geen ou rien ?', 0.6, 3.25, 4.8, 1.25, 14);
    d.line(s, 5.42, 3.87, 5.95, 3.87, { color: 'accent3', lw: 2 });
    d.t(s, 'OUI', 5.4, 3.5, 0.6, 0.3, { size: 12, bold: true, color: 'accent3', align: 'center' });
    d.rect(s, 6.0, 3.4, 3.7, 0.95, { fill: HET, line: null });
    d.t(s, 'pas de -e : //een **rood** huis//', 6.15, 3.4, 3.5, 0.95, { size: 16, color: 'bg1', valign: 'middle' });
    d.line(s, 3.0, 4.5, 3.0, 4.85, { color: 'accent5', lw: 2 });
    d.t(s, 'NON', 3.1, 4.52, 0.6, 0.3, { size: 12, bold: true, color: 'accent5' });
    d.rect(s, 0.6, 4.85, 9.1, 1.0, { fill: ADJ, line: null });
    d.t(s, '**-e** : //de rode auto · een rode auto · het rode huis · rode auto’s//', 0.85, 4.85, 8.7, 1.0, { size: 18, color: 'bg1', valign: 'middle' });
    d.rect(s, 9.95, 1.75, 2.78, 4.1, { fill: 'bg2', line: BORDER });
    d.t(s, 'ORTHOGRAPHE', 9.95, 1.85, 2.78, 0.32, { size: 12, bold: true, color: 'accent5', align: 'center', cs: 2 });
    d.t(s, ['//groot → **grote**//', '//wit → **witte**//', '//lief → **lieve**//', '//grijs → **grijze**//', 'invariables : //houten, oranje//'], 10.1, 2.25, 2.5, 3.5, { size: 16, gap: 10, valign: 'middle' });
    d.t(s, 'Ce schéma est la référence pour tous les exercices.', 0.6, 6.1, 9.1, 0.4, { size: 14, italic: true, color: 'accent5' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Groot of grote ?', '★', 'FaBalanceScale'], ['L’orthographe', '★★', 'FaSpellCheck'], ['La petite annonce', '★★', 'FaHome'], ['Le détective', '★★', 'FaSearch'],
    ['Qui est-ce ?', '★', 'FaUserFriends'], ['Comparez !', '★★', 'FaChartBar'], ['L’agence immobilière', '★★★', 'FaKey'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 avec ou sans -e
  const ex1 = ['een [[groot]] huis //(groot)//', 'de [[nieuwe]] collega //(nieuw)//', 'het [[oude]] kantoor //(oud)//', 'een [[rode]] auto //(rood)//', 'mijn [[witte]] hemd //(wit)//', 'geen [[duur]] hotel //(duur)//', '[[lekkere]] koffie //(lekker)//', '[[warm]] water //(warm)//', 'De vergadering is [[lang]]. //(lang)//', 'deze [[mooie]] foto’s //(mooi)//'];
  d.ex({ g: 15, title: 'Exercice 1 — Avec ou sans -e ?', stars: '★', instr: 'Complétez avec l’adjectif entre parenthèses. Suivez l’organigramme !' }, (s, mode, top) => {
    d.list(s, ex1, mode, { y: top + 0.2, w: 12.13, h: 4.6, cols: 2, size: 22, gap: 18 });
    if (mode === 'a') d.t(s, 'n° 7 : //de// koffie, sans article → //-e// · n° 8 : //het// water, sans article → pas de //-e// · n° 9 : attribut', 0.6, 6.25, 12.13, 0.55, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  });

  // ---------------------------------------------------------------- 16 ex2 orthographe
  const ex2 = [['groot', 'grote'], ['wit', 'witte'], ['lief', 'lieve'], ['grijs', 'grijze'], ['duur', 'dure'], ['dik', 'dikke'], ['rood', 'rode'], ['boos', 'boze'], ['klein', 'kleine'], ['breed', 'brede']];
  d.ex({ g: 16, title: 'Exercice 2 — L’orthographe', stars: '★★', instr: 'Écrivez la forme avec -e. Pensez à la syllabe-porte (M1).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 5;
    ex2.forEach(([a, b], i) => {
      const x = 0.6 + Math.floor(i / 5) * 6.18; const y = top + (i % 5) * rh;
      d.num(s, i + 1, x, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, x + 0.5, y + 0.08, 2.3, rh - 0.18, { fill: 'bg2', line: BORDER });
      d.t(s, `//${a}//`, x + 0.5, y + 0.08, 2.3, rh - 0.18, { size: 22, align: 'center', valign: 'middle' });
      d.line(s, x + 2.88, y + rh / 2 - 0.02, x + 3.3, y + rh / 2 - 0.02, { color: 'accent1', lw: 2.5 });
      d.rect(s, x + 3.38, y + 0.08, 2.55, rh - 0.18, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**${b}**//`, x + 3.38, y + 0.08, 2.55, rh - 0.18, { size: 22, align: 'center', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 17 ex3 petite annonce
  d.ex({ g: 17, title: 'Exercice 3 — La petite annonce', stars: '★★', instr: 'Complétez l’annonce avec la bonne forme de l’adjectif.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.2, h, { fill: 'FFFDF2', line: 'E3C65A', lw: 1.25, shadow: true });
    d.ill(s, 'round-pushpin', 4.95, top - 0.18, 0.45, 0.45);
    d.t(s, 'TE HUUR — BRUSSEL', 0.9, top + 0.3, 8.6, 0.5, { size: 20, bold: true, color: 'accent6', cs: 2 });
    const txt = '[[Mooi]] appartement //(mooi)// in een [[rustige]] straat //(rustig)//. Twee [[grote]] slaapkamers //(groot)// met [[brede]] ramen //(breed)//, een [[moderne]] keuken //(modern)// en een [[klein]] terras //(klein)//. Vlak bij het [[nieuwe]] station //(nieuw)//. Ideaal voor een [[jong]] gezin //(jong)//!';
    d.t(s, txt, 0.95, top + 0.95, 8.55, h - 1.15, { size: 21, mode, ls: 1.35, valign: 'top' });
    d.ill(s, 'house-with-garden', 10.25, top + 0.3, 2.0, 2.0);
    d.ill(s, 'key', 10.75, top + 2.5, 1.0, 1.0);
    if (mode === 'a') d.t(s, '//mooi appartement// : pas d’article + //het// → pas de //-e// · //een klein terras, een jong gezin// : //een + het//', 9.95, top + 3.7, 2.78, 2.0, { size: 13, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 18 ex4 détective
  d.ex({ g: 18, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Karim décrit son nouvel appartement. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'Karim → Sofie', 0.85, top, 8, 0.5, { size: 14, bold: true, color: 'bg1', valign: 'middle' });
    const txt = '//Ik heb {{een nieuwe appartement}}++ een nieuw appartement++ in Brussel. Het is een licht appartement met een {{groote}}++ grote++ keuken en twee kleine slaapkamers. De woonkamer is {{mooie}}++ mooi++. Ik heb een {{houtene}}++ houten++ tafel en een oranje bank gekocht. {{Mijn oud bureau}}++ Mijn oude bureau++ staat bij het raam. En ik heb een witte kat!//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 21, mode, ls: 1.25, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //een licht appartement · twee kleine slaapkamers · een oranje bank · een witte kat//.', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 19 ex5 qui est-ce
  {
    const s = d.page({ g: 19, tag: 'JIJ NU !', title: 'Exercice 5 — Qui est-ce ?', stars: '★' });
    const P = ['man-beard', 'woman-red-hair', 'man-white-hair', 'girl', 'man-bald', 'woman-curly-hair', 'man-blonde-hair', 'woman-white-hair'];
    P.forEach((il, i) => {
      const x = 0.6 + (i % 4) * 1.95; const y = 1.75 + Math.floor(i / 4) * 2.15;
      d.rect(s, x, y, 1.8, 2.0, { fill: 'bg1', line: 'accent4', lw: 1.75, shadow: true });
      d.ill(s, il, x + 0.25, y + 0.2, 1.3, 1.3);
      d.t(s, String(i + 1), x, y + 1.5, 1.8, 0.45, { size: 16, bold: true, color: 'accent4', align: 'center', valign: 'middle' });
    });
    d.t(s, ['**1.** A choisit un personnage en secret.', '**2.** B pose des questions oui / non.', '**3.** B trouve en moins de 6 questions.'], 8.55, 1.75, 4.18, 1.6, { size: 15, gap: 6 });
    d.bubble(s, '//Heeft hij **kort** haar? · Is ze **jong**? · Heeft hij een **grijze** baard?//', 8.55, 3.45, 4.18, 1.3, 'accent2', { size: 16 });
    d.bubble(s, '//Het is de **oude** man met de **witte** baard!//', 8.55, 4.9, 4.18, 0.9, 'accent3', { size: 16 });
    d.t(s, 'Banque : //lang / kort haar · een bril · een baard · jong / oud · krullend haar//', 0.6, 6.25, 12.13, 0.5, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 20 ex6 comparez
  const ex6 = [['cityscape', 'Brussel / Gent', 'groot', 'Brussel is groter dan Gent.'], ['taxi', 'een taxi / de bus', 'duur', 'Een taxi is duurder dan de bus.'], ['high-speed-train', 'de trein / de fiets', 'snel', 'De trein is sneller dan de fiets.'], ['sun', 'juli / maart', 'warm', 'Juli is warmer dan maart.'], ['laptop', 'mijn laptop / jouw laptop', 'oud', 'Mijn laptop is ouder dan jouw laptop.'], ['hot-beverage', 'koffie / thee', 'goed', 'Koffie is beter dan thee!']];
  d.ex({ g: 20, title: 'Exercice 6 — Comparez !', stars: '★★', instr: 'Comparez avec le comparatif + dan.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex6.forEach(([il, pair, adj, ans], i) => {
      const y = top + i * rh;
      d.ill(s, il, 0.6, y + (rh - 0.6) / 2, 0.6, 0.6);
      d.rect(s, 1.35, y + 0.05, 4.3, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, `//${pair}//`, 1.5, y + 0.05, 4.1, rh - 0.12, { size: 18, valign: 'middle' });
      d.line(s, 5.75, y + rh / 2, 6.95, y + rh / 2, { color: ADJ, lw: 3 });
      d.t(s, `//${adj}//`, 5.7, y, 1.3, rh / 2 - 0.02, { size: 13, bold: true, color: ADJ, align: 'center', valign: 'bottom' });
      d.rect(s, 7.05, y + 0.05, 5.68, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${ans}//`, 7.2, y + 0.05, 5.45, rh - 0.12, { size: 18, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 21 ex7 agence immobilière
  d.roleplay({
    g: 21, title: 'Exercice 7 — L’agence immobilière',
    scenario: 'Karim cherche un appartement à Bruxelles. L’agent lui propose deux logements.',
    a: '**Karim** : décrivez ce que vous cherchez, posez des questions, comparez et choisissez.',
    b: '**L’agent** : présentez les deux appartements avec des adjectifs.',
    bank: '//Ik zoek een rustig appartement. · Is de keuken groot? · Het eerste appartement is groter, maar duurder. · Ik neem het kleine appartement.//',
    doc: (s, x, y, w, h) => {
      [['A', 'ruim appartement · 2 slaapkamers · grote tuin', '1 100 €', 'house-with-garden'], ['B', 'klein appartement · 1 slaapkamer · nieuwe keuken · vlak bij het station', '850 €', 'office-building']].forEach(([L, t, p, il], i) => {
        const yy = y + i * (h / 2 + 0.05); const hh = h / 2 - 0.05;
        d.rect(s, x, yy, w, hh, { fill: 'FFFDF2', line: 'E3C65A', lw: 1.25, shadow: true });
        d.chip(s, `TE HUUR · ${L}`, x + 0.15, yy + 0.15, 'accent6', 0.34, 11);
        d.ill(s, il, x + w - 0.95, yy + 0.1, 0.8, 0.8);
        d.t(s, `//${t}//`, x + 0.2, yy + 0.65, w - 0.4, hh - 1.2, { size: 14, valign: 'middle' });
        d.t(s, `**${p}** / maand`, x + 0.2, yy + hh - 0.55, w - 0.4, 0.45, { size: 15, color: 'accent6', valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['//een …… huis · de …… auto// (//groot//) ?', 'Ajoutez //-e// : //wit · lief// ?', 'Corrigez : //een rode huis//.'],
    self: ['Placer', 'Choisir', 'Décrire'],
    teaser: { icon: 'FaUserFriends', text: '**Volgende keer : Die of dat?** — //de collega die naast me zit//' },
  });
}

module.exports = { meta, build };
