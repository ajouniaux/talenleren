// Module 28 — Zich of elkaar? · Les verbes réfléchis et réciproques
const { BORDER, plain } = require('../lib');

const meta = { n: 28, slug: 'Zich_of_elkaar', title: 'Zich of elkaar? — Les verbes réfléchis et réciproques', short: 'Zich of elkaar?', template: 'module_28_zich_of_elkaar.md' };

const ZI = 'accent2'; // zich = le miroir (bleu)  ^^…^^
const EL = 'accent1'; // elkaar = le ping-pong (orange)  ##…##

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.72; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        v2: { fill: 'FFFFFF', line: 'accent6', lw: 2, dash: 'dash', color: 'accent6', bold: true },
        z: { fill: ZI, line: null, color: 'bg1', bold: true },
        e: { fill: EL, line: null, color: 'bg1', bold: true },
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
  // the two pictograms of S24
  const mirror = (s, x, y, sz) => {
    d.ill(s, 'person-standing', x, y, sz * 0.7, sz * 0.7);
    d.curve(s, x + sz * 0.62, y + sz * 0.15, x + sz * 0.12, y + sz * 0.15, { h: sz * 0.22, color: ZI, lw: 2.5 });
  };
  const pingpong = (s, x, y, sz) => {
    d.ill(s, 'person-standing', x, y + sz * 0.1, sz * 0.55, sz * 0.55);
    d.ill(s, 'person-standing', x + sz * 0.95, y + sz * 0.1, sz * 0.55, sz * 0.55);
    d.line(s, x + sz * 0.5, y + sz * 0.22, x + sz * 0.98, y + sz * 0.45, { color: EL, lw: 2.5 });
    d.line(s, x + sz * 0.98, y + sz * 0.22, x + sz * 0.5, y + sz * 0.45, { color: EL, lw: 2.5 });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Zich of elkaar?', sub: 'Les verbes réfléchis et réciproques', line: 'Hij wast zich · Ze helpen elkaar',
    visual: (s) => {
      [['mirror', 'Hij wast **^^zich^^**.', 1.0], ['handshake', 'Ze helpen **##elkaar##**.', 3.05]].forEach(([il, t, y]) => {
        d.rect(s, 7.0, y, 5.7, 1.8, { fill: 'FFFFFF', line: null, radius: 0.2, shadow: true });
        d.ill(s, il, 7.25, y + 0.3, 1.2, 1.2);
        d.t(s, `//${t}//`, 8.65, y, 3.9, 1.8, { size: 24, valign: 'middle', head: true });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaUserCircle', h: 'Conjuguer', t: 'Je conjugue un verbe réfléchi : //ik vergis me, hij vergist zich//.', color: ZI },
      { icon: 'FaRetweet', h: 'Distinguer', t: 'Je choisis //zich// ou //elkaar// : //Ze bellen elkaar.//', color: EL },
      { icon: 'FaClipboardList', h: 'Utiliser', t: 'J’utilise les verbes du quotidien : //Mag ik me even voorstellen?//', color: 'accent3' },
    ],
    band: 'Partout au travail : se présenter, s’inscrire, s’excuser, se tromper, se sentir bien ou mal.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Qui fait quoi à qui ?' });
    const V = [['mirror', 'A', 'Karim scheert **^^zich^^**.'], ['handshake', 'B', 'Sofie en An geven **##elkaar##** een hand.'], ['woman-raising-hand', 'C', 'Lotte stelt **^^zich^^** voor.'], ['telephone-receiver', 'D', 'Karim en Sofie bellen **##elkaar##**.']];
    const w = (12.13 - 3 * 0.2) / 4;
    V.forEach(([il, L, t], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 1.7, w, 3.75, { fill: 'FFFFFF', line: 'accent2', lw: 1.5, radius: 0.1, shadow: true });
      d.num(s, L, x + 0.15, 1.85, 0.42, 'accent2', 14);
      d.ill(s, il, x + w / 2 - 0.65, 2.1, 1.3, 1.3);
      d.t(s, `//${t}//`, x + 0.15, 3.6, w - 0.3, 1.6, { size: 18, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.8, 0.9, 0.9);
    d.t(s, ['Quand dit-on //zich// ? Quand dit-on //elkaar// ?', 'Montrez-vous (//zich//) ou montrez l’autre, puis vous (//elkaar//).'], 2.0, 5.65, 10.5, 1.2, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 le miroir
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Le miroir : ik was me, hij wast zich' });
    const R = [['ik was', 'me'], ['jij wast', 'je'], ['u wast', 'u / zich'], ['hij, zij, het wast', 'zich'], ['wij wassen', 'ons'], ['jullie wassen', 'je'], ['zij wassen', 'zich']];
    d.rect(s, 0.6, 1.7, 7.0, 4.25, { fill: 'bg1', line: ZI, lw: 2, radius: 0.1, shadow: true });
    d.rect(s, 0.6, 1.7, 7.0, 0.55, { fill: ZI, line: null, radius: 0.1 });
    d.t(s, 'zich wassen (se laver)', 0.8, 1.7, 6.6, 0.55, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
    R.forEach(([a, b], i) => {
      const y = 2.35 + i * 0.5;
      d.t(s, `//${a}//`, 0.95, y, 3.4, 0.48, { size: 19, valign: 'middle' });
      d.t(s, `//**^^${b}^^**//`, 4.4, y, 3.0, 0.48, { size: 19, valign: 'middle' });
    });
    d.ill(s, 'mirror', 8.0, 1.75, 1.4, 1.4);
    d.rect(s, 7.85, 3.35, 4.88, 2.6, { fill: 'EAF1F8', line: ZI, lw: 1.25, radius: 0.1 });
    d.t(s, ['**Seul //zich// est nouveau** : //me, je, ons// sont déjà connus (M20).', '//zich// = 3ᵉ personne (//hij, zij, het, zij//).', '//u vergist **zich**// ou //u vergist **u**// : les deux sont corrects (BE : souvent //u//).'], 8.0, 3.4, 4.6, 2.5, { size: 16, gap: 8, valign: 'middle' });
    band(s, 'Le pronom réfléchi renvoie au **sujet lui-même** : la flèche revient vers soi.', 6.15, 0.68, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 5 ping-pong
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Le ping-pong : elkaar' });
    [['telephone-receiver', 'We bellen **##elkaar##** morgen.'], ['busts-in-silhouette', 'Jullie kennen **##elkaar##** al lang.'], ['handshake', 'Ze helpen **##elkaar##**.']].forEach(([il, t], i) => {
      const x = 0.6 + i * 4.11; const w = 3.91;
      d.rect(s, x, 1.75, w, 2.9, { fill: 'FFFFFF', line: EL, lw: 2, radius: 0.12, shadow: true });
      pingpong(s, x + 0.55, 1.95, 1.5);
      d.ill(s, il, x + w - 1.05, 1.95, 0.8, 0.8);
      d.t(s, `//${t}//`, x + 0.15, 3.25, w - 0.3, 1.25, { size: 20, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 4.9, 12.13, 0.85, { fill: 'FDF1E6', line: EL, lw: 1.25, radius: 0.1 });
    d.t(s, '//Tot ziens! — We zien **elkaar** maandag!// (On se voit lundi !)', 0.85, 4.9, 11.7, 0.85, { size: 21, valign: 'middle', align: 'center' });
    band(s, '//elkaar// = l’un l’autre · toujours avec un sujet pluriel · **ne change jamais**', 6.0, 0.75, 'tx2', 19);
  }

  // ---------------------------------------------------------------- 6 S24
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'zich ou elkaar ? Le miroir et le ping-pong' });
    d.rect(s, 5.35, 1.75, 2.63, 1.0, { fill: 'tx2', line: null, radius: 0.12 });
    d.t(s, '**Qui reçoit l’action ?**', 5.35, 1.75, 2.63, 1.0, { size: 18, color: 'bg1', align: 'center', valign: 'middle' });
    [[0.6, ZI, 'LE MIROIR', 'la même personne', '//zich// (//me, je, ons…//)', '//Ze wassen **^^zich^^**.//', '(chacun se lave)'], [8.13, EL, 'LE PING-PONG', 'l’autre, et inversement', '//elkaar//', '//Ze wassen **##elkaar##**.//', '(l’un lave l’autre)']].forEach(([x, c, h, who, word, ex, gl], i) => {
      const w = 4.6;
      d.rect(s, x, 1.75, w, 4.25, { fill: c, tr: 90, line: c, lw: 2, radius: 0.12 });
      d.t(s, h, x, 1.85, w, 0.45, { size: 15, bold: true, color: c, align: 'center', cs: 2 });
      if (i === 0) mirror(s, x + 1.55, 2.45, 1.6); else pingpong(s, x + 1.1, 2.4, 1.6);
      d.t(s, [`→ ${who}`, `**${word}**`, ex, gl], x + 0.2, 3.75, w - 0.4, 2.15, { size: 18, gap: 4, align: 'center', valign: 'middle' });
    });
    d.line(s, 6.66, 2.8, 5.25, 3.6, { color: ZI, lw: 3 });
    d.line(s, 6.66, 2.8, 8.07, 3.6, { color: EL, lw: 3 });
    d.ill(s, 'people-hugging', 6.06, 3.8, 1.2, 1.2);
    d.t(s, 'Jouez la paire avec deux apprenants !', 4.9, 5.1, 3.5, 0.8, { size: 14, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
    band(s, 'Le schéma est la référence de tous les exercices.', 6.25, 0.6, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 7 piège se ≠ zich
  {
    const s = d.page({ g: 7, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : « se » ≠ zich' });
    trapFrame(s, 4.4);
    const R = [['« se lever »', 'zich opstaan', 'opstaan'], ['« s’appeler »', 'zich noemen', 'heten — Ik heet Lotte.'], ['« se marier »', 'zich trouwen', 'trouwen'], ['« s’asseoir »', 'zich zitten', 'gaan zitten (M17)'], ['« se promener »', 'zich wandelen', 'wandelen'], ['« se passer »', 'zich passeren', 'gebeuren — Wat is er gebeurd?']];
    R.forEach(([fr, ko, ok], i) => {
      const y = 2.3 + i * 0.63;
      d.t(s, fr, 0.95, y, 3.0, 0.56, { size: 17, valign: 'middle' });
      d.t(s, `✗ //{{${ko}}}//`, 4.0, y, 3.4, 0.56, { size: 15, color: 'accent6', valign: 'middle' });
      d.line(s, 7.45, y + 0.28, 7.85, y + 0.28, { color: 'accent3', lw: 2 });
      d.rect(s, 7.9, y + 0.03, 4.65, 0.5, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.05, y + 0.03, 4.45, 0.5, { size: 17, valign: 'middle' });
    });
    band(s, 'Erreur fréquente : ✗ //{{Ik noem me Lotte}}// → ✓ //Ik heet Lotte.// · //zich// seulement si le verbe néerlandais l’exige', 6.25, 0.62, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 8 12 verbes
  {
    const s = d.page({ g: 8, tag: 'VOCABULAIRE', title: 'Les verbes réfléchis du quotidien' });
    const V = [
      ['zich voorstellen', 'se présenter', 'woman-raising-hand'], ['zich herinneren', 'se souvenir', 'thought-balloon'], ['zich vergissen', 'se tromper', 'face-with-hand-over-mouth'], ['zich haasten', 'se dépêcher', 'person-running'],
      ['zich voelen', 'se sentir', 'face-with-thermometer'], ['zich aankleden', 's’habiller', 't-shirt'], ['zich vervelen', 's’ennuyer', 'yawning-face'], ['zich zorgen maken', 's’inquiéter', 'worried-face'],
      ['zich inschrijven', 's’inscrire', 'writing-hand'], ['zich concentreren', 'se concentrer', 'bullseye'], ['zich afvragen', 'se demander', 'thinking-face'], ['zich verontschuldigen', 's’excuser', 'folded-hands'],
    ];
    const w = (12.13 - 3 * 0.18) / 4; const h = 1.3;
    V.forEach(([v, fr, il], i) => {
      const x = 0.6 + (i % 4) * (w + 0.18); const y = 1.7 + Math.floor(i / 4) * (h + 0.15);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: BORDER, lw: 1, shadow: true });
      d.ill(s, il, x + 0.12, y + 0.33, 0.62, 0.62);
      d.t(s, `**^^zich^^** ${v.replace('zich ', '')}`, x + 0.85, y + 0.12, w - 0.95, 0.72, { size: 16, valign: 'middle', fit: true, max: 16, min: 12 });
      d.t(s, fr, x + 0.85, y + 0.84, w - 0.95, 0.38, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
    });
    band(s, '//Ik voel me niet goed. · Ik vraag me af of… · Maak je geen zorgen! · Haast je!//', 6.2, 0.65, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 9 place
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'La place du pronom réfléchi' });
    const R = [[['Ik', 'n'], ['vergis', 'v'], ['me.', 'z']], [['Herinner', 'v'], ['je', 'n'], ['je', 'z'], ['dat nog?', 'n']], [['Ik', 'n'], ['heb', 'v'], ['me', 'z'], ['vergist.', 'v2']], [['Ik', 'n'], ['moet', 'v'], ['me', 'z'], ['haasten.', 'v2']], [['Lotte', 'n'], ['stelt', 'v'], ['zich', 'z'], ['voor.', 'v2']], [['…, omdat hij', 'n'], ['zich', 'z'], ['niet goed', 'n'], ['voelt.', 'v']]];
    R.forEach((r, i) => strip(s, 0.6, 1.72 + i * 0.72, r, { size: 20, h: 0.6 }));
    d.rect(s, 8.6, 1.72, 4.13, 4.2, { fill: 'EAF1F8', line: ZI, lw: 1.5, radius: 0.1 });
    d.t(s, ['**Après le verbe conjugué** (et le sujet inversé)', 'Passé composé : toujours **//hebben//** — ✗ //{{Ik ben me vergist}}//', '//Herinner je je…?// : deux //je// qui se suivent, c’est normal !'], 8.75, 1.8, 3.85, 4.05, { size: 16, gap: 10, valign: 'middle' });
    band(s, 'Particule au bout (M11) : //Lotte stelt zich voor.// · Subordonnée : le verbe part à la fin (M9).', 6.15, 0.68, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 10 elkaar + préposition
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'elkaar avec une préposition' });
    const V = [['houses', 'Ze wonen **##naast elkaar##**.'], ['handshake', 'We werken **##met elkaar##** samen.'], ['two-hearts', 'Ze houden **##van elkaar##**. (M27)'], ['hourglass-not-done', 'We wachten **##op elkaar##**.']];
    const w = (12.13 - 3 * 0.2) / 4;
    V.forEach(([il, t], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 1.75, w, 3.1, { fill: 'FFFFFF', line: EL, lw: 1.75, radius: 0.12, shadow: true });
      d.ill(s, il, x + w / 2 - 0.6, 1.95, 1.2, 1.2);
      d.t(s, `//${t}//`, x + 0.12, 3.3, w - 0.24, 1.4, { size: 18, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.05, 12.13, 0.85, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, 'Le français dit « l’un à côté de l’autre, ensemble, l’un l’autre » : le néerlandais dit toujours //elkaar//.', 0.85, 5.05, 11.7, 0.85, { size: 17, valign: 'middle' });
    band(s, 'Pas de //er// (M23) : //elkaar// = des personnes · //met elkaar praten// (se parler) · //van elkaar leren//', 6.1, 0.72, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 11 piège un se deux sens
  {
    const s = d.page({ g: 11, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : un « se », deux sens' });
    trapFrame(s, 4.4);
    const R = [['« Nous nous connaissons »', 'We kennen **##elkaar##**.', 'e'], ['« Ils se lavent »', 'Ze wassen **^^zich^^**.', 'z'], ['« Ils se regardent » (dans le miroir)', 'Ze kijken naar **^^zichzelf^^**.', 'z'], ['« Ils se regardent » (l’un l’autre)', 'Ze kijken naar **##elkaar##**.', 'e'], ['« On s’appelle demain ? »', 'Bellen we **##elkaar##** morgen?', 'e']];
    R.forEach(([fr, nl, k], i) => {
      const y = 2.3 + i * 0.75;
      d.t(s, fr, 0.95, y, 5.2, 0.66, { size: 17, valign: 'middle' });
      d.line(s, 6.2, y + 0.33, 6.6, y + 0.33, { color: 'accent3', lw: 2 });
      d.rect(s, 6.65, y + 0.04, 4.6, 0.58, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${nl}//`, 6.8, y + 0.04, 4.4, 0.58, { size: 18, valign: 'middle' });
      d.chip(s, k === 'z' ? 'miroir' : 'ping-pong', 11.36, y + 0.17, k === 'z' ? ZI : EL, 0.32, 10);
    });
    band(s, 'Le français laisse le contexte trancher ; le néerlandais oblige à choisir.', 6.25, 0.62, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 12 aperçu zichzelf
  {
    const s = d.page({ g: 12, tag: '+ APERÇU', title: '+ APERÇU : zichzelf, mezelf' });
    [['Hij denkt alleen aan **^^zichzelf^^**.', 'à lui-même'], ['Stel **^^jezelf^^** eens voor!', 'présente-toi donc'], ['Ik ken **^^mezelf^^**.', 'je me connais (moi-même)']].forEach(([t, gl], i) => {
      const y = 1.8 + i * 1.05;
      d.rect(s, 0.6, y, 8.0, 0.88, { fill: 'EAF1F8', line: ZI, lw: 1.25, radius: 0.1 });
      d.t(s, `//${t}//`, 0.85, y, 5.0, 0.88, { size: 21, valign: 'middle' });
      d.t(s, gl, 5.9, y, 2.6, 0.88, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.ill(s, 'flashlight', 9.3, 1.85, 1.3, 1.3);
    d.rect(s, 8.9, 3.4, 3.83, 1.5, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, '//mezelf · jezelf · uzelf · zichzelf · onszelf//', 9.05, 3.4, 3.55, 1.5, { size: 17, align: 'center', valign: 'middle' });
    d.rect(s, 0.6, 5.1, 12.13, 0.8, { fill: 'FDF1E6', line: EL, lw: 1.25, radius: 0.1 });
    d.t(s, '≠ //zelf// seul : //Ik heb het **zelf** gedaan.// (moi-même, sans aide)', 0.85, 5.1, 11.7, 0.8, { size: 19, valign: 'middle' });
    band(s, 'À reconnaître : //-zelf// insiste, ou suit une préposition (//Hij praat over zichzelf.//)', 6.1, 0.72, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : le miroir et le ping-pong' });
    [[0.6, ZI, 'zich — soi-même', ['//me · je · u / zich · zich//', '//ons · je · zich//', '//Ik vergis **me**.//']], [6.81, EL, 'elkaar — l’un l’autre', ['invariable', '//We zien **elkaar** morgen.//', '//Ze wonen **naast elkaar**.//']]].forEach(([x, c, h, lines], i) => {
      const w = 5.92;
      d.rect(s, x, 1.7, w, 2.6, { fill: 'bg1', line: c, lw: 2, radius: 0.1 });
      d.rect(s, x, 1.7, w, 0.55, { fill: c, line: null, radius: 0.1 });
      d.t(s, h, x + 0.2, 1.7, w - 0.4, 0.55, { size: 17, bold: true, color: 'bg1', valign: 'middle' });
      if (i === 0) mirror(s, x + 4.2, 2.4, 1.3); else pingpong(s, x + 3.85, 2.45, 1.3);
      d.t(s, lines, x + 0.25, 2.35, 3.6, 1.85, { size: 18, gap: 5, valign: 'middle' });
    });
    d.rect(s, 0.6, 4.5, 12.13, 1.35, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, ['**Place** : après le verbe conjugué · **passé composé** avec //hebben// (//Ik heb me vergist//)', '« se » ≠ toujours //zich// : //opstaan, heten, trouwen, gaan zitten, wandelen//'], 0.85, 4.5, 11.7, 1.35, { size: 18, gap: 6, valign: 'middle' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Le bon pronom', '★', 'FaUser'], ['zich ou elkaar ?', '★★', 'FaExchangeAlt'], ['Le faux « se »', '★★', 'FaLanguage'], ['Le détective', '★★', 'FaSearch'],
    ['Remettez en ordre', '★★', 'FaListOl'], ['Mime !', '★', 'FaTheaterMasks'], ['Le réseautage', '★★★', 'FaHandshake'],
  ] });

  // ---------------------------------------------------------------- 15 ex1
  const ex1 = ['Ik vergis [[me]].', 'Jij haast [[je]].', 'Karim voelt [[zich]] niet goed.', 'Wij schrijven [[ons]] in.', 'Jullie vervelen [[je]].', 'Ze maken [[zich]] zorgen.', 'Herinnert u [[zich]]++ (of: u)++ mijn naam?', 'Lotte stelt [[zich]] voor.'];
  d.ex({ g: 15, title: 'Exercice 1 — Le bon pronom', stars: '★', instr: 'Complétez avec le pronom réfléchi : //me, je, u, zich, ons//.' }, (s, mode, top) => {
    d.list(s, ex1.map((e) => `//${e}//`), mode, { y: top + 0.2, w: 12.13, h: 4.3, cols: 2, size: 22, gap: 26 });
  });

  // ---------------------------------------------------------------- 16 ex2 zich ou elkaar
  const ex2 = [['Sofie en Karim kennen [[elkaar]] al lang.', 'e'], ['Lotte kleedt [[zich]] snel aan.', 'z'], ['We zien [[elkaar]] morgen!', 'e'], ['Hij vergist [[zich]] vaak.', 'z'], ['Jullie helpen [[elkaar]] altijd.', 'e'], ['De collega’s bellen [[elkaar]] elke week.', 'e'], ['Ik voel [[me]] niet goed.', 'z'], ['Ze wonen naast [[elkaar]].', 'e']];
  d.ex({ g: 16, title: 'Exercice 2 — zich ou elkaar ?', stars: '★★', instr: 'Complétez. Posez la question-test : qui reçoit l’action ?' }, (s, mode, top) => {
    const rh = (6.88 - top) / 4; const cw = (12.13 - 0.3) / 2;
    ex2.forEach(([t, k], i) => {
      const c = Math.floor(i / 4); const r = i % 4;
      const x = 0.6 + c * (cw + 0.3); const y = top + r * rh;
      d.rect(s, x, y + 0.06, cw, rh - 0.12, { fill: r % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.75, radius: 0.08 });
      d.t(s, `**${i + 1}**`, x + 0.12, y + 0.06, 0.4, rh - 0.12, { size: 17, color: 'accent5', valign: 'middle' });
      d.t(s, `//${t}//`, x + 0.55, y + 0.06, cw - 2.1, rh - 0.12, { size: 19, mode, valign: 'middle' });
      if (mode === 'a') d.chip(s, k === 'z' ? 'miroir' : 'ping-pong', x + cw - 1.38, y + rh / 2 - 0.16, k === 'z' ? ZI : EL, 0.32, 10);
    });
  });

  // ---------------------------------------------------------------- 17 ex3 faux se
  const ex3 = [['Je me lève à 7 heures.', 'Ik sta om 7 uur op.'], ['Elle s’appelle Lotte.', 'Ze heet Lotte.'], ['Je me souviens de lui.', 'Ik herinner me hem.'], ['On se voit demain !', 'We zien elkaar morgen!'], ['Ils se marient en mai.', 'Ze trouwen in mei.'], ['Je me suis trompé.', 'Ik heb me vergist.']];
  d.ex({ g: 17, title: 'Exercice 3 — Le faux « se »', stars: '★★', instr: 'Traduisez. Attention : trois verbes ne sont pas réfléchis en néerlandais !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([fr, nl], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'accent5', 13);
      d.rect(s, 1.1, y + 0.05, 5.4, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, fr, 1.25, y + 0.05, 5.2, rh - 0.12, { size: 18, valign: 'middle' });
      d.line(s, 6.6, y + rh / 2, 7.1, y + rh / 2, { color: 'accent1', lw: 2.5 });
      d.rect(s, 7.15, y + 0.05, 5.58, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${nl}//`, 7.3, y + 0.05, 5.35, rh - 0.12, { size: 19, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex4 détective
  d.ex({ g: 18, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Lotte écrit à Sofie. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Chat · Lotte → Sofie', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = '//Hoi Sofie! {{Ik noem me}}++ Ik heet++ Lotte, ik ben de nieuwe stagiaire. Vanmorgen {{heb ik me om zes uur opgestaan}}++ ben ik om zes uur opgestaan++. Karim en ik bellen {{ons}}++ elkaar++ morgen over het project. {{Ik ben me}}++ Ik heb me++ gisteren vergist in de planning, sorry! Karim voelt {{hem}}++ zich++ vandaag niet goed. We zien elkaar maandag! Lotte//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 19, mode, ls: 1.2, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurre : //We zien elkaar maandag!// est correct. //opstaan// n’est pas réfléchi et prend //zijn// (M15).', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 19 ex5 ordre
  const ex5 = [[['me', 'gisteren', 'vergist', 'ik', 'heb'], 'Ik heb me gisteren vergist.'], [['je', 'nog', 'herinner', 'dat', 'je', '?'], 'Herinner je je dat nog?'], [['zich', 'voor', 'stelt', 'de nieuwe collega'], 'De nieuwe collega stelt zich voor.'], [['elkaar', 'morgen', 'zien', 'we'], 'We zien elkaar morgen.'], [['moeten', 'ons', 'we', 'haasten'], 'We moeten ons haasten.']];
  d.ex({ g: 19, title: 'Exercice 5 — Remettez en ordre', stars: '★★', instr: 'Remettez les mots dans l’ordre. Où va le pronom ?' }, (s, mode, top) => {
    const rh = (6.88 - top) / 5;
    ex5.forEach(([parts, a], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      if (mode === 'q') {
        let x = 1.2;
        parts.forEach((p, k) => {
          const w = 0.45 + p.length * 0.15;
          d.rect(s, x, y + 0.14, w, rh - 0.28, { fill: 'FFFFFF', line: 'accent1', lw: 1.25, radius: 0.1, rotate: [-2, 1, 2, -1, 0, 1][k % 6] });
          d.t(s, `//${p}//`, x, y + 0.14, w, rh - 0.28, { size: 18, align: 'center', valign: 'middle' });
          x += w + 0.25;
        });
      } else {
        d.rect(s, 1.2, y + 0.07, 11.53, rh - 0.14, { fill: 'EDF6F0', line: 'accent3', lw: 1.25 });
        d.t(s, `//**${a}**//`, 1.35, y + 0.07, 11.3, rh - 0.14, { size: 21, color: 'accent3', valign: 'middle' });
      }
    });
  });

  // ---------------------------------------------------------------- 20 ex6 mime
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Mime !', stars: '★' });
    const C = [['t-shirt', 'zich aankleden', ZI], ['person-running', 'zich haasten', ZI], ['yawning-face', 'zich vervelen', ZI], ['bullseye', 'zich concentreren', ZI], ['handshake', 'elkaar een hand geven', EL], ['telephone-receiver', 'elkaar bellen', EL], ['people-hugging', 'elkaar helpen', EL], ['hourglass-not-done', 'op elkaar wachten', EL]];
    const cw = 1.95; const chh = 2.2;
    C.forEach(([il, t, c], i) => {
      const x = 0.6 + (i % 4) * (cw + 0.12); const y = 1.75 + Math.floor(i / 4) * (chh + 0.15);
      d.rect(s, x, y, cw, chh, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.12, shadow: true });
      d.chip(s, i < 4 ? 'seul' : 'à deux', x + 0.12, y + 0.12, c, 0.3, 10);
      d.ill(s, il, x + cw / 2 - 0.4, y + 0.5, 0.8, 0.8);
      d.t(s, `//**${t}**//`, x + 0.08, y + 1.4, cw - 0.16, 0.7, { size: 14, align: 'center', valign: 'middle' });
    });
    d.ill(s, 'performing-arts', 9.1, 1.75, 0.8, 0.8);
    d.t(s, 'Mime!', 10.0, 1.75, 2.73, 0.8, { size: 28, bold: true, color: 'accent4', head: true, valign: 'middle' });
    d.t(s, ['**1.** Tirez une carte et mimez, seul ou à deux.', '**2.** La classe devine avec une phrase complète : //Hij haast zich! · Ze bellen elkaar!//', '**3.** Phrase juste = 1 point.'], 9.1, 2.75, 3.63, 3.6, { size: 15, gap: 10 });
  }

  // ---------------------------------------------------------------- 21 ex7 réseautage
  d.roleplay({
    g: 21, title: 'Exercice 7 — Le réseautage',
    scenario: 'Soirée de réseautage à Bruxelles : on se présente, on vérifie si on se connaît et on prévoit de se revoir.',
    a: '**Participant·e A** : présentez-vous et demandez si vous vous connaissez : //Kennen we elkaar?//',
    b: '**Participant·e B** : répondez, excusez-vous si vous vous trompez, proposez de vous revoir.',
    bank: '//Mag ik me even voorstellen? · Kennen we elkaar? · Ik herinner me uw naam. · Sorry, ik vergis me. · We zien elkaar volgende week! · Zullen we elkaar mailen?//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.5, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'DEELNEMERS · NETWERKAVOND', x + 0.15, y, w - 0.3, 0.5, { size: 11, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const P = [['woman-office-worker', 'Eva Wouters', 'Maesbouw · Brussel'], ['man-office-worker', 'Tom De Smet', 'Bolero · Leuven'], ['woman', 'Nadia El Amrani', 'Sportclub Vitaal · Gent'], ['man-beard', 'Pieter Claes', 'freelance · Mechelen']];
      const ch = (h - 0.7) / 4;
      P.forEach(([il, n, org], i) => {
        const yy = y + 0.6 + i * ch;
        d.rect(s, x + 0.1, yy, w - 0.2, ch - 0.1, { fill: 'bg2', line: 'accent2', lw: 1, radius: 0.08 });
        d.ill(s, il, x + 0.2, yy + (ch - 0.1 - 0.6) / 2, 0.6, 0.6);
        d.t(s, [`**${n}**`, org], x + 0.9, yy, w - 1.05, ch - 0.1, { size: 12, gap: 1, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['Complétez : //Wij schrijven …… in. · Hij vergist …… .//', '//zich// ou //elkaar// : //Ze kennen …… al jaren.//', 'Traduisez : « Je me lève à 7 heures. »'],
    self: ['Conjuguer', 'Distinguer', 'Utiliser'],
    teaser: { icon: 'FaLightbulb', text: '**Volgende keer : Als ik tijd had…** — //Zou je me kunnen helpen?//' },
  });
}

module.exports = { meta, build };
