// Module 22 — Die of dat? · Les pronoms relatifs
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 22, slug: 'Die_of_dat', title: 'Die of dat? — Les pronoms relatifs', short: 'Die of dat?', template: 'module_22_die_of_dat.md' };

const DIE = 'tx2'; // die = bleu nuit (comme DE)
const DAT = 'accent1'; // dat = orange (comme HET)
const WAT = 'accent3';
const WAAR = 'purple';

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        m: { fill: 'EAF1F8', line: 'accent2', lw: 1.25, color: 'tx1', bold: false },
        w: { fill: 'FDF1E6', line: 'accent1', lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        die: { fill: DIE, line: null, color: 'bg1', bold: true },
        dat: { fill: DAT, line: null, color: 'bg1', bold: true },
      }[ty || 'n'];
      d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
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
      if (il) d.ill(s, il, 0.85, y + 0.1, 0.7, 0.7);
      d.t(s, fr, 1.7, y, ko ? 3.6 : 6.4, 0.9, { size: 17, valign: 'middle' });
      if (ko) d.t(s, `✗ //{{${ko}}}//`, 5.3, y, 2.9, 0.9, { size: 15, color: 'accent6', valign: 'middle' });
      d.line(s, 8.25, y + 0.45, 8.6, y + 0.45, { color: 'accent3', lw: 2 });
      d.rect(s, 8.65, y + 0.08, 3.9, 0.75, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.8, y + 0.08, 3.7, 0.75, { size: 18, valign: 'middle', fit: true, max: 18, min: 13 });
    });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Die of dat?', sub: 'Les pronoms relatifs', line: 'de collega die naast me zit · het bureau dat bij het raam staat',
    visual: (s) => {
      [['woman-office-worker', 'de collega **@@die@@** naast me zit', 1.0], ['desktop-computer', 'het bureau **##dat##** bij het raam staat', 3.05]].forEach(([il, t, y]) => {
        d.rect(s, 7.0, y, 5.7, 1.8, { fill: 'FFFFFF', line: null, radius: 0.2, shadow: true });
        d.ill(s, il, 7.2, y + 0.3, 1.2, 1.2);
        d.t(s, `//${t}//`, 8.55, y, 4.0, 1.8, { size: 21, valign: 'middle', head: true });
      });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCodeBranch', h: 'Choisir', t: 'Je choisis //die// ou //dat// : //de klant die… · het rapport dat…//', color: DAT },
      { icon: 'FaTrain', h: 'Construire', t: 'Je mets le verbe à la fin : //de collega die naast me **zit**//.', color: 'accent6' },
      { icon: 'FaBook', h: 'Définir', t: 'J’explique un mot que je ne connais pas : //Het is iemand die…//', color: 'accent3' },
    ],
    band: 'Les relatives servent à préciser (« le client qui a appelé ») et à contourner un mot inconnu (« la machine qui fait des copies »).',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Wie is wie?' });
    d.rect(s, 0.6, 1.7, 5.3, 3.7, { fill: 'FFFFFF', line: 'tx2', lw: 3, radius: 0.04, shadow: true });
    d.rect(s, 0.8, 1.9, 4.9, 3.3, { fill: 'EAF1F8', line: null, radius: 0 });
    [['woman-office-worker', 0.95, 'A'], ['man-office-worker', 2.15, 'B'], ['woman', 3.35, 'C'], ['girl', 4.5, 'D']].forEach(([il, x, L]) => {
      d.ill(s, il, x, 2.6, 1.1, 1.1);
      d.num(s, L, x + 0.33, 3.85, 0.42, 'tx2', 14);
    });
    d.ill(s, 'hot-beverage', 3.95, 3.3, 0.45, 0.45);
    const L = ['An is de vrouw **@@die@@** de vergadering **!!leidt!!**.', 'Karim is de man **@@die@@** naast het raam **!!zit!!**.', 'Lotte is de stagiaire **@@die@@** koffie **!!drinkt!!**.', 'Het meisje **##dat##** **!!lacht!!**, is de dochter van An.'];
    L.forEach((t, i) => d.bubble(s, `**${i + 1}** · //${t}//`, 6.2, 1.7 + i * 0.95, 6.53, 0.8, 'accent2', { size: 17 }));
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.8, 0.9, 0.9);
    d.t(s, ['Associez chaque phrase à une personne (A–D).', 'Que remarquez-vous ? Le petit mot //die / dat// et la **place du verbe**.'], 2.0, 5.65, 10.5, 1.2, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 l'aiguillage
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'die ou dat ? L’aiguillage' });
    const IN = [['mot DE', DIE, 2.0, 'de klant'], ['mot HET', DAT, 3.55, 'het rapport'], ['PLURIEL', DIE, 5.1, 'de rapporten']];
    IN.forEach(([lab, c, y, n]) => {
      d.rect(s, 0.6, y, 2.0, 0.95, { fill: c, line: null, radius: 0.1 });
      d.t(s, lab, 0.6, y, 2.0, 0.95, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, `//${n}//`, 2.7, y, 1.9, 0.95, { size: 18, valign: 'middle' });
    });
    const OUT = [['die', DIE, 2.55], ['dat', DAT, 4.35]];
    OUT.forEach(([w, c, y]) => {
      d.oval(s, 6.6, y, 1.6, 1.0, { fill: c });
      d.t(s, w, 6.6, y, 1.6, 1.0, { size: 30, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    });
    [[2.47, 3.05, DIE], [4.02, 4.85, DAT], [5.57, 3.05, DIE]].forEach(([y1, y2, c]) => {
      d.line(s, 4.65, y1, 6.55, y2, { color: c, lw: 4 });
    });
    d.t(s, ['//de klant **@@die@@** belt//', '//de rapporten **@@die@@** klaar zijn//'], 8.5, 2.3, 4.23, 1.5, { size: 19, gap: 8, valign: 'middle' });
    d.t(s, ['//het rapport **##dat##** klaar is//'], 8.5, 4.35, 4.23, 1.0, { size: 19, valign: 'middle' });
    band(s, 'Comme //deze / dit// (M20) : on regarde le **nom juste avant**. //de// + pluriel → //die// · //het// → //dat//', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 5 piège qui / que
  {
    const s = d.page({ g: 5, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : qui ou que ? Peu importe !' });
    trapRows(s, [['woman-office-worker', '« la collègue **qui** travaille ici »', null, 'de collega **@@die@@** hier werkt'], ['woman-office-worker', '« la collègue **que** je connais »', null, 'de collega **@@die@@** ik ken'], ['page-facing-up', '« le rapport **qui** est prêt »', null, 'het rapport **##dat##** klaar is'], ['page-facing-up', '« le rapport **que** j’écris »', null, 'het rapport **##dat##** ik schrijf']], { h: 4.4, step: 0.98 });
    band(s, 'Le français demande « sujet ou objet ? ». Le néerlandais : « //de// ou //het// ? »', 6.25, 0.62, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 6 le verbe à la fin
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'Le verbe va à la fin' });
    d.t(s, 'PHRASE PRINCIPALE', 0.6, 1.7, 4, 0.32, { size: 12, bold: true, color: 'accent2', cs: 2 });
    d.t(s, 'LA RELATIVE (le wagon, M9)', 5.6, 1.7, 6, 0.32, { size: 12, bold: true, color: 'accent1', cs: 2 });
    const R = [
      [[['Ik ken de man', 'm', 2.9]], ['die', 'die'], [['naast Sofie', 'w', 2.2], ['zit.', 'v', 1.0]]],
      [[['Dit is het rapport', 'm', 2.9]], ['dat', 'dat'], [['ik gisteren', 'w', 2.0], ['geschreven heb.', 'v', 3.3]]],
      [[['Ik bel de klant', 'm', 2.9]], ['die', 'die'], [['morgen', 'w', 1.3], ['wil komen.', 'v', 2.0]]],
    ];
    R.forEach(([a, h, b], i) => {
      const y = 2.15 + i * 1.15;
      strip(s, 0.6, y, a, { size: 21, h: 0.8 });
      strip(s, 3.65, y, [[h[0], h[1], 1.0]], { size: 21, h: 0.8 });
      strip(s, 4.8, y, b, { size: 21, h: 0.8 });
    });
    band(s, 'Comme après //omdat// (M9) : le verbe conjugué va **à la fin**. Avec deux verbes, ils se retrouvent ensemble à la fin.', 5.75, 0.9, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 7 la relative au milieu
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'La relative au milieu de la phrase' });
    const R = [[['De collega', 'm', 1.9], ['die', 'die', 0.85], ['naast me', 'w', 1.6], ['zit,', 'v', 0.9], ['heet', 'v', 1.0], ['Sofie.', 'm', 1.3]], [['Het bureau', 'm', 1.9], ['dat', 'dat', 0.85], ['bij het raam', 'w', 2.1], ['staat,', 'v', 1.15], ['is', 'v', 0.7], ['van Karim.', 'm', 1.9]]];
    R.forEach((r, i) => {
      const y = 2.0 + i * 1.6;
      const e = strip(s, 0.6, y, r, { size: 22, h: 0.85, gap: 0.08 });
      const vx = 0.6 + r.slice(0, 3).reduce((a, p) => a + p[2] + 0.08, 0);
      d.rect(s, vx, y + 0.95, r[3][2] + r[4][2] + 0.08, 0.32, { fill: 'accent6', line: null, radius: 0.05 });
      d.t(s, 'verbe, verbe', vx, y + 0.95, r[3][2] + r[4][2] + 0.08, 0.32, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.rect(s, 0.6 + r[0][2] + 0.08 - 0.04, y - 0.12, r[1][2] + r[2][2] + r[3][2] + 0.24, 1.09, { fill: null, line: 'accent1', lw: 2, dash: 'dash', radius: 0.1 });
      void e;
    });
    d.t(s, 'la relative s’intercale juste après le nom qu’elle décrit', 0.6, 5.0, 12.13, 0.4, { size: 15, italic: true, color: 'accent1', align: 'center' });
    band(s, 'Les deux verbes se touchent autour de la virgule (« verbe, verbe », M9). La virgule est conseillée après une longue relative.', 5.6, 0.95, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 8 piège dat ≠ dat
  {
    const s = d.page({ g: 8, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : dat ≠ dat, die ≠ die' });
    d.rect(s, 0.6, 1.7, 12.13, 4.35, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const R = [['conjonction (M9)', 'accent5', 'Ik denk **dat** hij komt.', 'pas de nom avant'], ['relatif', DAT, 'het huis **dat** ik koop', 'nom //het// juste avant'], ['démonstratif (M20)', 'accent5', '**Die** collega is aardig.', 'devant un nom'], ['relatif', DIE, 'de collega **die** aardig is', 'nom //de// juste avant']];
    R.forEach(([tag, c, ex, why], i) => {
      const y = 2.35 + i * 0.9;
      d.chip(s, tag, 0.85, y + 0.2, c, 0.38, 13);
      d.t(s, `//${ex}//`, 4.0, y, 5.0, 0.8, { size: 20, valign: 'middle' });
      d.t(s, why, 9.1, y, 3.5, 0.8, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    });
    band(s, 'Test : y a-t-il un **nom juste avant** ? → c’est un relatif.', 6.25, 0.62, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 9 wat
  {
    const s = d.page({ g: 9, tag: 'GRAMMAIRE', title: 'wat après alles, iets, niets' });
    const C3 = [['alles wat', 'Alles **wat** je zegt, is waar.', 'speech-balloon'], ['iets wat', 'Ik heb iets **wat** je zal helpen.', 'wrapped-gift'], ['niets wat', 'Er is niets **wat** ik niet begrijp.', 'light-bulb']];
    const w = (12.13 - 2 * 0.25) / 3;
    C3.forEach(([h, ex, il], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 3.0, { fill: 'bg1', line: WAT, lw: 2, shadow: true });
      d.ill(s, il, x + 0.25, 1.9, 0.8, 0.8);
      d.t(s, `**${h}**`, x + 1.2, 1.9, w - 1.35, 0.8, { size: 24, color: WAT, valign: 'middle', head: true });
      d.t(s, `//${ex}//`, x + 0.25, 2.9, w - 0.5, 1.6, { size: 19, valign: 'middle' });
    });
    d.rect(s, 0.6, 4.95, 12.13, 0.9, { fill: 'bg2', line: BORDER });
    d.t(s, '« Je fais **ce que** je veux. » → //Ik doe **wat** ik wil.// — « ce qui / ce que » = //wat//', 0.85, 4.95, 11.7, 0.9, { size: 19, valign: 'middle' });
    d.t(s, 'Après //iets, niets// : //wat// ou //dat// (les deux sont corrects, //wat// plus fréquent). Après //alles// : //wat//.', 0.6, 6.1, 12.13, 0.7, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 10 préposition
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'Avec une préposition : met wie, waarmee' });
    [['PERSONNES', 'accent2', 'préposition + //wie//', ['de collega **met wie** ik werk', 'de klant **aan wie** ik schrijf'], 'busts-in-silhouette', 0.6], ['CHOSES', WAAR, '//waar// + préposition', ['de pen **waarmee** ik schrijf', 'het project **waaraan** ik werk'], 'pen', 6.81]].forEach(([h, c, rule, ex, il, x]) => {
      d.rect(s, x, 1.7, 5.92, 3.3, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.rect(s, x, 1.7, 5.92, 0.55, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, 1.7, 5.92, 0.55, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      d.ill(s, il, x + 0.25, 2.45, 0.8, 0.8);
      d.t(s, rule, x + 1.2, 2.45, 4.5, 0.8, { size: 18, bold: true, color: c, valign: 'middle' });
      d.t(s, ex.map((e) => `//${e}//`), x + 0.3, 3.35, 5.4, 1.55, { size: 19, gap: 8, valign: 'middle' });
    });
    d.rect(s, 0.6, 5.2, 12.13, 0.8, { fill: 'bg2', line: BORDER });
    d.t(s, 'LIEUX : //de stad **waar** ik woon// (où) · ✗ //{{de pen met die ik schrijf}}// → //de pen **waarmee**…// (M23)', 0.85, 5.2, 11.7, 0.8, { size: 18, valign: 'middle' });
    d.t(s, 'À reconnaître ici, à pratiquer au M23.', 0.6, 6.2, 12.13, 0.5, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 11 définir
  {
    const s = d.page({ g: 11, tag: 'VOCABULAIRE', title: 'Définir un mot inconnu' });
    const C3 = [['une personne', 'person-getting-haircut', 'Het is iemand **@@die@@** je haar knipt.', 'een kapper', 'accent2'], ['une chose', 'printer', 'Het is een machine **@@die@@** documenten kopieert.', 'een kopieerapparaat', 'accent1'], ['un lieu', 'books', 'Het is een plek **%%waar%%** je boeken leent.', 'een bibliotheek', 'purple']];
    const w = (12.13 - 2 * 0.25) / 3;
    C3.forEach(([h, il, ex, word, c], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 3.75, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.chip(s, h.toUpperCase(), x + 0.2, 1.85, c, 0.34, 12);
      d.ill(s, il, x + w / 2 - 0.6, 2.3, 1.2, 1.2);
      d.t(s, `//${ex}//`, x + 0.2, 3.55, w - 0.4, 1.1, { size: 18, align: 'center', valign: 'middle' });
      d.t(s, `→ **${word}**`, x + 0.2, 4.7, w - 0.4, 0.55, { size: 17, color: c, align: 'center', valign: 'middle' });
    });
    band(s, 'Un mot vous manque ? Décrivez-le : //Hoe heet een ding **dat**…?// · //iemand → die · een ding (het) → dat · een plek → waar//', 5.7, 1.0, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 12 piège het meisje dat
  {
    const s = d.page({ g: 12, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : het meisje dat…' });
    d.rect(s, 0.6, 1.7, 12.13, 4.35, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    d.ill(s, 'girl', 0.95, 2.4, 1.2, 1.2);
    d.t(s, '« la fille **qui** rit »', 2.35, 2.4, 3.5, 1.2, { size: 20, valign: 'middle' });
    d.t(s, '✗ //{{het meisje die lacht}}//', 5.9, 2.4, 3.2, 1.2, { size: 17, color: 'accent6', valign: 'middle' });
    d.rect(s, 9.1, 2.6, 3.45, 0.8, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
    d.t(s, '✓ //het meisje **##dat##** lacht//', 9.2, 2.6, 3.3, 0.8, { size: 18, valign: 'middle' });
    [['child', 'het kind **##dat##**'], ['busts-in-silhouette', 'het team **##dat##**'], ['identification-card', 'het lid **##dat##**'], ['man-office-worker', 'het personeel **##dat##**']].forEach(([il, t], i) => {
      const x = 0.85 + i * 2.85;
      d.ill(s, il, x, 4.0, 0.7, 0.7);
      d.t(s, `//${t}//`, x + 0.8, 4.0, i === 3 ? 2.6 : 2.0, 0.7, { size: 17, valign: 'middle' });
    });
    d.t(s, 'On suit l’**article**, pas le sexe de la personne.', 0.85, 5.0, 11.7, 0.6, { size: 19, bold: true, valign: 'middle' });
    band(s, '//het meisje// est un diminutif (M14) → //het// · //het lid// = le membre · à l’oral : parfois //het meisje die//', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : l’aiguillage du relatif' });
    d.rect(s, 0.6, 1.7, 3.1, 4.3, { fill: 'EEF3F8', line: 'tx2', lw: 1.5, radius: 0.1 });
    d.t(s, 'Quel nom juste avant ?', 0.7, 1.7, 2.9, 4.3, { size: 20, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
    const R = [['mot //de// ou pluriel', 'die', DIE, '//de klant **die** belt//'], ['mot //het//', 'dat', DAT, '//het rapport **dat** ik schrijf//'], ['//alles, iets, niets//', 'wat', WAT, '//alles **wat** je zegt//'], ['avec une préposition', 'met wie / waarmee', WAAR, '//met wie ik werk · waarmee ik schrijf//']];
    R.forEach(([cond, out, c, ex], i) => {
      const y = 1.7 + i * 1.1;
      d.line(s, 3.72, 3.85, 4.15, y + 0.45, { color: c, lw: 2 });
      d.t(s, cond, 4.2, y, 2.6, 0.9, { size: 16, valign: 'middle' });
      d.rect(s, 6.85, y + 0.1, 2.3, 0.7, { fill: c, line: null, radius: 0.1 });
      d.t(s, `**${out}**`, 6.85, y + 0.1, 2.3, 0.7, { size: out.length > 5 ? 15 : 20, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, ex, 9.3, y, 3.43, 0.9, { size: 15, valign: 'middle' });
    });
    band(s, 'Toujours : le **verbe à la fin** de la relative (le wagon, M9).', 6.15, 0.65, 'accent6', 18);
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['die, dat ou wat ?', '★', 'FaCodeBranch'], ['Reliez les phrases', '★★', 'FaLink'], ['qui ou que ?', '★★', 'FaLanguage'], ['Les devinettes', '★', 'FaQuestion'],
    ['Le détective', '★★', 'FaSearch'], ['Taboe !', '★', 'FaCommentSlash'], ['Le nouveau collègue', '★★★', 'FaSitemap'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 die / dat / wat
  const ex1 = ['de klant [[die]] belt', 'het boek [[dat]] ik lees', 'de collega’s [[die]] hier werken', 'het meisje [[dat]] lacht', 'alles [[wat]] je zegt', 'de vergadering [[die]] om 10 uur begint', 'het kantoor [[dat]] ik huur', 'de documenten [[die]] op tafel liggen', 'iets [[wat]]++ (of dat)++ ik niet begrijp', 'het team [[dat]] wint'];
  d.ex({ g: 15, title: 'Exercice 1 — die, dat ou wat ?', stars: '★', instr: 'Complétez. Dites d’abord l’article du nom.' }, (s, mode, top) => {
    d.list(s, ex1.map((e) => `//${e}//`), mode, { y: top + 0.2, w: 12.13, h: 4.7, cols: 2, size: 22, gap: 18 });
  });

  // ---------------------------------------------------------------- 16 ex2 reliez
  const ex2 = [['Ik heb een collega. Hij spreekt vijf talen.', 'Ik heb een collega die vijf talen spreekt.'], ['Dit is het rapport. Ik heb het gisteren geschreven.', 'Dit is het rapport dat ik gisteren geschreven heb.'], ['We hebben een klant. Hij wil morgen komen.', 'We hebben een klant die morgen wil komen.'], ['Ken je het restaurant? Het ligt naast het station.', 'Ken je het restaurant dat naast het station ligt?'], ['Ik zoek de documenten. Ze lagen op mijn bureau.', 'Ik zoek de documenten die op mijn bureau lagen.'], ['Waar is de laptop? Ik heb hem gisteren gekocht.', 'Waar is de laptop die ik gisteren gekocht heb?']];
  d.ex({ g: 16, title: 'Exercice 2 — Reliez les phrases', stars: '★★', instr: 'Reliez avec die ou dat. Le verbe va à la fin !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex2.forEach(([a, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, 1.1, y + 0.05, 5.0, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, `//${a}//`, 1.25, y + 0.05, 4.8, rh - 0.12, { size: 15, valign: 'middle' });
      d.line(s, 6.15, y + rh / 2, 6.6, y + rh / 2, { color: 'accent1', lw: 3 });
      d.rect(s, 6.65, y + 0.05, 6.08, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${b}//`, 6.8, y + 0.05, 5.85, rh - 0.12, { size: 15, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 17 ex3 qui ou que
  const ex3 = [['le client qui appelle', 'de klant', 'de klant die belt'], ['le client que j’appelle', 'de klant', 'de klant die ik bel'], ['le bureau qui est libre', 'het bureau', 'het bureau dat vrij is'], ['le bureau que je réserve', 'het bureau', 'het bureau dat ik reserveer'], ['les collègues qui arrivent', 'de collega’s', 'de collega’s die aankomen'], ['l’enfant que j’aide', 'het kind', 'het kind dat ik help']];
  d.ex({ g: 17, title: 'Exercice 3 — qui ou que ?', stars: '★★', instr: 'Traduisez. Regardez l’article du nom néerlandais, pas « qui / que » !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([fr, hint, nl], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'accent5', 13);
      d.rect(s, 1.1, y + 0.05, 4.4, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, fr, 1.25, y + 0.05, 4.2, rh - 0.12, { size: 17, valign: 'middle' });
      d.t(s, `//(${hint})//`, 5.55, y + 0.05, 1.5, rh - 0.12, { size: 13, color: 'accent5', valign: 'middle' });
      d.line(s, 7.0, y + rh / 2, 7.4, y + rh / 2, { color: 'accent1', lw: 2.5 });
      d.rect(s, 7.45, y + 0.05, 5.28, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${nl}//`, 7.6, y + 0.05, 5.05, rh - 0.12, { size: 18, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex4 devinettes
  const DEF = ['Het is iemand die zieke mensen helpt.', 'Het is een ding dat je gebruikt om te bellen.', 'Het is een plek waar je de trein neemt.', 'Het is iemand die brood bakt.', 'Het is een ding dat koffie maakt.', 'Het is een plek waar je geld haalt.'];
  const WORDS = [['de bakker', 'bread'], ['de gsm', 'mobile-phone'], ['de dokter', 'man-health-worker'], ['het station', 'station'], ['de bank', 'bank'], ['de koffiemachine', 'hot-beverage']];
  const sol4 = [2, 1, 3, 0, 5, 4];
  d.ex({ g: 18, title: 'Exercice 4 — Les devinettes', stars: '★', instr: 'Reliez chaque définition au bon mot.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    if (mode === 'a') sol4.forEach((r, i) => d.line(s, 7.0, top + i * rh + rh / 2, 8.6, top + r * rh + rh / 2, { color: 'tx2', lw: 2 }));
    DEF.forEach((t, i) => {
      const y = top + i * rh;
      d.rect(s, 0.6, y + 0.06, 6.35, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, `**${i + 1}**  //${t}//`, 0.75, y + 0.06, 6.15, rh - 0.12, { size: 17, valign: 'middle' });
    });
    WORDS.forEach(([w, il], i) => {
      const y = top + i * rh;
      d.rect(s, 8.65, y + 0.06, 4.08, rh - 0.12, { fill: 'bg1', line: 'accent1', lw: 1.5 });
      d.ill(s, il, 8.75, y + (rh - 0.55) / 2, 0.55, 0.55);
      d.t(s, `**${'abcdef'[i]}**  ${w}`, 9.45, y + 0.06, 3.2, rh - 0.12, { size: 18, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 19 ex5 détective
  d.ex({ g: 19, title: 'Exercice 5 — Le détective', stars: '★★', instr: 'Sofie présente Lotte à l’équipe. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Sofie Peeters · Aan: team · Onderwerp: onze nieuwe stagiaire', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = '//Beste collega’s, dit is Lotte, de nieuwe stagiaire die bij ons komt werken. Lotte is een meisje {{die}}++ dat++ drie talen spreekt. Ze werkt in het bureau {{die}}++ dat++ naast de keuken ligt. Het project dat ze gaat doen, is erg belangrijk. De collega {{die helpt haar}}++ die haar helpt++, is Karim. Ze zoekt nog iets {{die}}++ wat++ ze voor haar kamer kan gebruiken. Heb je een lamp die je {{niet gebruikt meer}}++ niet meer gebruikt++? Groetjes, Sofie//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 19, mode, ls: 1.2, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //de nieuwe stagiaire die bij ons komt werken · Het project dat ze gaat doen, is…// · //iets dat// : correct aussi', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 20 ex6 taboe
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Taboe !', stars: '★' });
    const T = [['de leraar', 'school · les', 'man-teacher'], ['de printer', 'papier · afdrukken', 'printer'], ['het ziekenhuis', 'dokter · ziek', 'hospital'], ['de paraplu', 'regen · nat', 'umbrella'], ['de kok', 'keuken · eten', 'man-cook'], ['de luchthaven', 'vliegtuig · reizen', 'airplane']];
    T.forEach(([w, ban, il], i) => {
      const x = 0.6 + (i % 3) * 2.6; const y = 1.75 + Math.floor(i / 3) * 2.5;
      d.rect(s, x, y, 2.45, 2.3, { fill: 'FFFFFF', line: 'accent4', lw: 2, radius: 0.12, shadow: true });
      d.ill(s, il, x + 0.85, y + 0.12, 0.75, 0.75);
      d.t(s, `**${w}**`, x, y + 0.9, 2.45, 0.5, { size: 17, color: 'accent4', align: 'center', valign: 'middle' });
      d.line(s, x + 0.3, y + 1.45, x + 2.15, y + 1.45, { color: BORDER, lw: 1, arrow: false });
      d.t(s, `{{${ban}}}`, x + 0.1, y + 1.5, 2.25, 0.65, { size: 13, align: 'center', valign: 'middle' });
    });
    d.ill(s, 'stopwatch', 8.6, 1.75, 0.8, 0.8);
    d.t(s, 'Taboe!', 9.5, 1.75, 3.23, 0.8, { size: 26, bold: true, color: 'accent4', head: true, valign: 'middle' });
    d.t(s, ['**1.** Par équipes : faites deviner le mot **sans** dire les mots barrés.', '**2.** Utilisez : //Het is iemand die… / een ding dat… / een plek waar…//', '**3.** Un point par mot trouvé en 1 minute.'], 8.6, 2.75, 4.13, 3.5, { size: 16, gap: 12 });
  }

  // ---------------------------------------------------------------- 21 ex7 nouveau collègue
  d.roleplay({
    g: 21, title: 'Exercice 7 — Le nouveau collègue',
    scenario: 'Premier jour de Lotte. Sofie lui montre l’organigramme et lui présente les collègues.',
    a: '**Sofie** : présentez chaque collègue avec une relative : //Dat is An, de vrouw die…//',
    b: '**Lotte** : posez au moins 3 questions : //Wie is de man die daar zit? Met wie werk ik samen?//',
    bank: '//Dat is An, de vrouw die de afdeling leidt. · Karim is de collega die de facturen controleert. · Het bureau dat bij het raam staat, is van jou. · Wie is de man die daar zit? · Met wie werk ik samen?//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.55, { fill: 'purple', line: null, radius: 0.04 });
      d.t(s, 'ORGANIGRAM PEETERS & CO', x + 0.15, y, w - 0.3, 0.55, { size: 12, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const node = (il, name, role, nx, ny) => {
        d.rect(s, nx, ny, 1.75, 1.15, { fill: 'bg2', line: BORDER, radius: 0.08 });
        d.ill(s, il, nx + 0.6, ny + 0.05, 0.55, 0.55);
        d.t(s, `**${name}**`, nx, ny + 0.58, 1.75, 0.28, { size: 11, align: 'center', valign: 'middle' });
        d.t(s, role, nx, ny + 0.84, 1.75, 0.26, { size: 9, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      };
      const cx = x + w / 2;
      node('woman-office-worker', 'An Janssens', 'diensthoofd', cx - 0.875, y + 0.75);
      d.line(s, cx, y + 1.9, cx, y + 2.2, { color: 'accent5', lw: 1.5, arrow: false });
      d.line(s, x + 1.05, y + 2.2, x + w - 1.05, y + 2.2, { color: 'accent5', lw: 1.5, arrow: false });
      node('man-office-worker', 'Karim', 'boekhouding', x + 0.15, y + 2.35);
      node('woman', 'Sofie', 'HR', x + w - 1.9, y + 2.35);
      d.line(s, x + w - 1.02, y + 3.5, x + w - 1.02, y + 3.75, { color: 'accent5', lw: 1.5, arrow: false });
      node('woman-red-hair', 'Lotte', 'stagiaire', x + w - 1.9, y + 3.75);
      node('man-beard', 'Tom', 'IT', x + 0.15, y + 3.75);
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['//die// ou //dat// : //het rapport …… ik schrijf · de klant …… belt// ?', 'Reliez : //Ik heb een collega. Ze woont in Gent.//', 'Définissez : //een bakker// (//Het is iemand die…//).'],
    self: ['Choisir', 'Construire', 'Définir'],
    teaser: { icon: 'FaQuestion', text: '**Volgende keer : Waar denk je aan?** — //Ik denk eraan!//' },
  });
}

module.exports = { meta, build };
