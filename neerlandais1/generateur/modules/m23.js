// Module 23 — Waar denk je aan? · Les adverbes pronominaux
const { BORDER, plain } = require('../lib');

const meta = { n: 23, slug: 'Waar_denk_je_aan', title: 'Waar denk je aan? — Les adverbes pronominaux', short: 'Waar denk je aan?', template: 'module_23_er_daar_waar.md' };

const ER = 'accent3'; // er / daar / hier = vert (chose)
const PREP = 'accent1'; // préposition = orange
const PERS = 'accent2'; // personne = bleu
const WAAR = 'accent4'; // waar (question, relatif) = framboise, comme %%…%%

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x; const xs = [];
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        w: { fill: 'FDF1E6', line: 'accent1', lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        neg: { fill: 'bg1', line: 'accent6', lw: 2, color: 'accent6', bold: true },
        er: { fill: ER, line: null, color: 'bg1', bold: true },
        waar: { fill: WAAR, line: null, color: 'bg1', bold: true },
        p: { fill: PREP, line: null, color: 'bg1', bold: true },
      }[ty || 'n'];
      d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle' });
      xs.push([cx, w]);
      cx += w + gap;
    });
    return xs;
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  const trapFrame = (s, h = 4.35) => {
    d.rect(s, 0.6, 1.7, 12.13, h, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Waar denk je aan?', sub: 'Les adverbes pronominaux : er, daar, waar + préposition', line: 'Ik denk eraan. · Waarmee schrijf je?',
    visual: (s) => {
      d.oval(s, 9.75, 0.75, 2.6, 1.7, { fill: 'FFFFFF' });
      d.oval(s, 9.35, 2.45, 0.38, 0.28, { fill: 'FFFFFF' });
      d.oval(s, 9.0, 2.8, 0.24, 0.18, { fill: 'FFFFFF' });
      d.ill(s, 'spiral-calendar', 10.55, 0.95, 1.1, 1.1);
      d.t(s, '**DEADLINE**', 9.75, 2.0, 2.6, 0.3, { size: 11, color: 'accent6', align: 'center' });
      d.ill(s, 'thinking-face', 7.4, 1.05, 1.6, 1.6);
      d.rect(s, 7.0, 3.15, 4.4, 0.75, { fill: 'FFFFFF', line: null, radius: 0.18, shadow: true });
      d.t(s, '//Waar denk je aan?//', 7.2, 3.15, 4.1, 0.75, { size: 20, valign: 'middle', head: true });
      d.rect(s, 8.0, 4.1, 4.7, 1.15, { fill: 'FFFFFF', line: null, radius: 0.18, shadow: true });
      d.t(s, '//Aan de deadline. Ik denk **<<er>>** de hele dag **##aan##**!//', 8.2, 4.1, 4.4, 1.15, { size: 19, valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaExchangeAlt', h: 'Remplacer', t: 'Je remplace « préposition + chose » : //met de pen → ermee//.', color: ER },
      { icon: 'FaLink', h: 'Combiner', t: 'J’apprends le verbe avec sa préposition : //wachten op, denken aan//.', color: PREP },
      { icon: 'FaQuestion', h: 'Questionner', t: 'Je demande et je réponds : //Waar wacht je op? — Op de bus.//', color: WAAR },
    ],
    band: 'Partout à l’oral : //Ik ben ermee bezig. · Daar heb ik geen zin in. · Waar gaat het over?//',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — au bureau' });
    const L = [
      ['woman', 'Sofie', 'Heb je de offerte al gestuurd?', 0],
      ['man-office-worker', 'Karim', 'Nee, ik ben **<<er>>** nog **##mee##** bezig.', 1],
      ['woman', 'Sofie', 'Denk je **<<er##aan##>>**? Het is dringend!', 0],
      ['man-office-worker', 'Karim', 'Ja, ik denk **<<er>>** de hele dag **##aan##**!', 1],
    ];
    L.forEach(([il, who, t, side], i) => {
      const y = 1.7 + i * 0.95;
      if (side === 0) {
        d.ill(s, il, 0.6, y, 0.8, 0.8);
        d.bubble(s, `**${who}** · //${t}//`, 1.55, y, 7.6, 0.8, 'accent4', { size: 18 });
      } else {
        d.ill(s, il, 11.93, y, 0.8, 0.8);
        d.bubble(s, `**${who}** · //${t}//`, 4.2, y, 7.6, 0.8, 'accent2', { size: 18 });
      }
    });
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.8, 0.9, 0.9);
    d.t(s, ['Que remplacent //er… mee// et //eraan// ? Retrouvez le nom.', '//bezig zijn met// = être occupé à · //dringend// = urgent'], 2.0, 5.65, 10.5, 1.2, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 tableau de conversion
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'Pas de « préposition + het » pour une chose' });
    [['✗ interdit', 0.6, 2.3, 'accent6'], ['✓ correct', 3.5, 2.3, ER], ['nuance', 6.05, 2.2, 'accent5'], ['exemple', 8.45, 4.2, 'accent5']].forEach(([h, x, w, c]) => {
      d.t(s, h.toUpperCase(), x, 1.62, w, 0.32, { size: 12, bold: true, color: c, cs: 1, align: x < 6 ? 'center' : 'left' });
    });
    const R = [['het', 'er', 'neutre', 'Ik wacht **<<er##op##>>**.'], ['dat', 'daar', '« ça » (insistance)', '**<<Daar>>** wacht ik al lang **##op##**!'], ['wat', 'waar', 'question, relatif', '**%%Waar%%##op##** wacht je?'], ['dit', 'hier', '« ceci »', '**<<Hier##op##>>** staat je naam.']];
    R.forEach(([p, a, nu, ex], i) => {
      const y = 2.05 + i * 0.95;
      d.rect(s, 0.6, y, 2.3, 0.78, { fill: 'accent6', tr: 90, line: 'accent6', lw: 1.25, radius: 0.1 });
      d.t(s, `//op// {{${p}}}`, 0.6, y, 2.3, 0.78, { size: 22, align: 'center', valign: 'middle' });
      d.line(s, 2.95, y + 0.39, 3.45, y + 0.39, { color: 'tx2', lw: 2.5 });
      const c = a === 'waar' ? WAAR : ER;
      d.rect(s, 3.5, y, 2.3, 0.78, { fill: c, tr: 85, line: c, lw: 1.5, radius: 0.1 });
      d.t(s, a === 'waar' ? `**%%${a}%%##op##**` : `**<<${a}>>##op##**`, 3.5, y, 2.3, 0.78, { size: 24, align: 'center', valign: 'middle' });
      d.t(s, nu, 6.05, y, 2.3, 0.78, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, `//${ex}//`, 8.45, y, 4.28, 0.78, { size: 19, valign: 'middle' });
    });
    band(s, 'Pour une **chose** : jamais « préposition + //het, dat, wat, dit// » → //er, daar, waar, hier// + préposition', 6.15, 0.7, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 5 met → mee
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'met → mee, tot → toe' });
    const B = [
      ['met', 'mee', ['//**er<<mee>>** · daar**<<mee>>** · waar**<<mee>>**//', '//Waarmee betaal je? — Ik betaal **ermee**.//', '//Wat doe je **ermee**? · Ik ben **ermee** bezig.//'], 'très fréquent', ER],
      ['tot', 'toe', ['//**er<<toe>>** · waar**<<toe>>**//', 'surtout à l’écrit', 'à reconnaître'], 'plus rare', 'accent5'],
    ];
    B.forEach(([a, b, ex, tag, c], i) => {
      const x = 0.6 + i * 6.21; const w = i ? 5.92 : 5.92;
      d.rect(s, x, 1.7, w, 3.45, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.chip(s, tag.toUpperCase(), x + 0.2, 1.85, c, 0.32, 11);
      d.rect(s, x + 0.6, 2.35, 1.5, 0.95, { fill: PREP, line: null, radius: 0.12 });
      d.t(s, a, x + 0.6, 2.35, 1.5, 0.95, { size: 30, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.line(s, x + 2.2, 2.82, x + 3.1, 2.82, { color: 'tx2', lw: 3 });
      d.rect(s, x + 3.2, 2.35, 1.6, 0.95, { fill: c, line: null, radius: 0.12 });
      d.t(s, b, x + 3.2, 2.35, 1.6, 0.95, { size: 30, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      d.t(s, ex.map((e, k) => (k === 0 || i === 0 ? e : `//${e}//`)), x + 0.3, 3.45, w - 0.6, 1.6, { size: 18, gap: 6, align: 'center', valign: 'middle', color: i ? 'accent5' : 'tx1' });
    });
    d.rect(s, 0.6, 5.4, 12.13, 0.85, { fill: 'bg2', line: BORDER });
    d.t(s, 'Les autres ne changent pas : //er**##aan##** · er**##op##** · er**##over##** · er**##van##** · er**##in##** · er**##naar##** · er**##voor##**//', 0.85, 5.4, 11.7, 0.85, { size: 19, valign: 'middle', align: 'center' });
  }

  // ---------------------------------------------------------------- 6 piège personne / chose
  {
    const s = d.page({ g: 6, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : une personne ou une chose ?' });
    trapFrame(s, 4.35);
    const C = [
      ['UNE PERSONNE', PERS, 'woman', 'préposition + //hem, haar, hen//', ['« Je pense à **elle** »', '→ //Ik denk **^^aan haar^^**.//', '« Je travaille avec **lui** »', '→ //Ik werk **^^met hem^^**.//'], 0.85],
      ['UNE CHOSE', ER, 'spiral-calendar', '//er// + préposition', ['« J’**y** pense » (le rendez-vous)', '→ ✗ //{{Ik denk aan het.}}// ✓ //Ik denk **<<eraan>>**.//', '« Je travaille avec » (l’ordinateur)', '→ //Ik werk **<<ermee>>**.//'], 6.8],
    ];
    C.forEach(([h, c, il, rule, lines, x]) => {
      const w = 5.68;
      d.rect(s, x, 2.35, w, 3.5, { fill: 'FFFFFF', line: c, lw: 2, radius: 0.08 });
      d.rect(s, x, 2.35, w, 0.5, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, 2.35, w, 0.5, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      d.ill(s, il, x + 0.2, 3.0, 0.8, 0.8);
      d.t(s, `**${rule}**`, x + 1.15, 3.0, w - 1.3, 0.8, { size: 18, color: c, valign: 'middle' });
      d.t(s, lines, x + 0.25, 3.9, w - 0.45, 1.9, { size: 16, gap: 3, valign: 'middle' });
    });
    band(s, 'Question-réflexe : « une **personne** ou une **chose** ? » — pour une personne, jamais //er// !', 6.25, 0.62, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 7 séparation
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'Les deux morceaux se séparent' });
    const R = [
      [[['Ik denk', 'n'], ['er', 'er'], ['vaak', 'n'], ['aan.', 'p']], 1, 3, 'la préposition va au bout'],
      [[['Daar', 'er'], ['heb ik geen zin', 'n'], ['in.', 'p']], 0, 2, '« ça ne me dit rien »'],
      [[['Waar', 'waar'], ['wacht je', 'n'], ['op?', 'p']], 0, 2, 'la question (diapo 10)'],
      [[['Ik denk', 'n'], ['er', 'er'], ['niet', 'neg'], ['aan.', 'p']], 1, 3, '//niet// avant la préposition · aussi « pas question ! »'],
    ];
    R.forEach(([parts, a, b, lab], i) => {
      const y = 2.05 + i * 1.05;
      const xs = strip(s, 0.6, y, parts, { size: 22, h: 0.62 });
      const x1 = xs[a][0] + xs[a][1] / 2; const x2 = xs[b][0] + xs[b][1] / 2;
      d.curve(s, x1, y - 0.02, x2, y - 0.02, { h: 0.3, color: ER, lw: 2 });
      d.t(s, lab, 6.7, y, 6.0, 0.62, { size: 17, italic: true, color: i === 3 ? 'accent6' : 'accent5', valign: 'middle' });
    });
    band(s, 'Comme la particule (M11). Collé, plus formel : //Ik denk eraan. · Waarop wacht je?//', 6.1, 0.7, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 8 verbes à préposition
  {
    const s = d.page({ g: 8, tag: 'VOCABULAIRE', title: 'Les verbes à préposition fixe' });
    const V = [
      ['denken', 'aan', 'penser à', 'thought-balloon'], ['wachten', 'op', 'attendre', 'hourglass-not-done'], ['praten', 'over', 'parler de', 'speaking-head'], ['houden', 'van', 'aimer', 'red-heart'],
      ['zin hebben', 'in', 'avoir envie de', 'face-savoring-food'], ['bezig zijn', 'met', 'être occupé à', 'laptop'], ['zorgen', 'voor', 's’occuper de', 'potted-plant'], ['kijken', 'naar', 'regarder', 'eyes'],
      ['luisteren', 'naar', 'écouter', 'headphone'], ['beginnen', 'met', 'commencer par', 'rocket'], ['stoppen', 'met', 'arrêter de', 'stop-sign'], ['rekenen', 'op', 'compter sur', 'handshake'],
    ];
    const w = (12.13 - 3 * 0.18) / 4; const h = 1.3;
    V.forEach(([v, p, fr, il], i) => {
      const x = 0.6 + (i % 4) * (w + 0.18); const y = 1.7 + Math.floor(i / 4) * (h + 0.15);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: BORDER, lw: 1, shadow: true });
      d.ill(s, il, x + 0.12, y + 0.33, 0.62, 0.62);
      d.t(s, `**${v}**`, x + 0.85, y + 0.1, w - 0.95, 0.42, { size: 17, valign: 'middle' });
      d.t(s, `**##${p}##**`, x + 0.85, y + 0.48, w - 0.95, 0.38, { size: 17, valign: 'middle' });
      d.t(s, fr, x + 0.85, y + 0.86, w - 0.95, 0.36, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
    });
    band(s, 'On apprend le verbe **et** sa préposition : //Ik heb zin in koffie. · Wie zorgt voor de lunch?//', 6.2, 0.65, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 9 piège prépositions
  {
    const s = d.page({ g: 9, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : les prépositions ne se traduisent pas' });
    trapFrame(s, 4.35);
    const R = [['bus', '« attendre **le** bus »', 'wachten de bus', 'wachten **##op##** de bus'], ['hot-beverage', '« avoir envie **d’**un café »', 'zin hebben van koffie', 'zin hebben **##in##** een koffie'], ['thinking-face', '« ça dépend **de**… »', 'Dat hangt af van het.', 'Dat hangt **<<er##van##>>** af.'], ['potted-plant', '« s’occuper **de** »', 'zorgen van', 'zorgen **##voor##**']];
    R.forEach(([il, fr, ko, ok], i) => {
      const y = 2.35 + i * 0.95;
      d.ill(s, il, 0.85, y + 0.08, 0.65, 0.65);
      d.t(s, fr, 1.7, y, 3.6, 0.8, { size: 17, valign: 'middle' });
      d.t(s, `✗ //{{${ko}}}//`, 5.3, y, 2.9, 0.8, { size: 15, color: 'accent6', valign: 'middle' });
      d.line(s, 8.25, y + 0.4, 8.6, y + 0.4, { color: 'accent3', lw: 2 });
      d.rect(s, 8.65, y + 0.06, 3.9, 0.7, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.8, y + 0.06, 3.7, 0.7, { size: 18, valign: 'middle' });
    });
    band(s, '« de » peut devenir //van, in, voor, over, met//… Apprenez la carte « verbe + préposition ».', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 10 questions
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'Poser une question : waar… op ? op wie ?' });
    const C = [
      ['UNE CHOSE', ER, '//waar// … préposition au bout', 'spiral-calendar', [['**%%Waar%%** wacht je **##op##**?', 'Op de bus.'], ['**%%Waar%%** denk je **##aan##**?', 'Aan mijn vakantie.'], ['**%%Waar##mee##%%** betaal je?', 'Met mijn kaart.']], 0.6],
      ['UNE PERSONNE', PERS, 'préposition + //wie//', 'busts-in-silhouette', [['**##Op##** **^^wie^^** wacht je?', 'Op An.'], ['**##Aan##** **^^wie^^** denk je?', 'Aan mijn moeder.'], ['**##Met##** **^^wie^^** praat je?', 'Met Sofie.']], 6.81],
    ];
    C.forEach(([h, c, rule, il, qa, x]) => {
      const w = 5.92;
      d.rect(s, x, 1.7, w, 4.3, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.rect(s, x, 1.7, w, 0.55, { fill: c, line: null, radius: 0.08 });
      d.t(s, h, x, 1.7, w, 0.55, { size: 17, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      d.ill(s, il, x + 0.25, 2.4, 0.7, 0.7);
      d.t(s, `**${rule}**`, x + 1.1, 2.4, w - 1.3, 0.7, { size: 18, color: c, valign: 'middle' });
      qa.forEach(([q, a], k) => {
        const y = 3.3 + k * 0.88;
        d.rect(s, x + 0.25, y, w - 0.5, 0.75, { fill: 'bg2', line: null, radius: 0.08 });
        d.t(s, `//${q}//`, x + 0.4, y, 3.1, 0.75, { size: 19, valign: 'middle' });
        d.t(s, `//${a}//`, x + 3.45, y, w - 3.75, 0.75, { size: 16, color: 'accent5', valign: 'middle' });
      });
    });
    band(s, 'La réponse courte reprend la préposition : //Op de bus. · Met Sofie.// Collé aussi : //Waarop wacht je?//', 6.2, 0.65, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 11 relatif waarmee
  {
    const s = d.page({ g: 11, tag: 'GRAMMAIRE', title: 'Dans une relative : waarmee, waarover' });
    const R = [['pen', [['de pen', 'n', 2.1], ['waarmee', 'waar', 1.9], ['ik', 'w', 0.7], ['schrijf', 'v', 1.5]]], ['file-folder', [['het project', 'n', 2.1], ['waaraan', 'waar', 1.9], ['ik', 'w', 0.7], ['werk', 'v', 1.5]]], ['chair', [['de stoel', 'n', 2.1], ['waarop', 'waar', 1.9], ['je', 'w', 0.7], ['zit', 'v', 1.5]]]];
    R.forEach(([il, parts], i) => {
      const y = 1.75 + i * 1.0;
      d.ill(s, il, 0.6, y + 0.05, 0.7, 0.7);
      strip(s, 1.5, y, parts, { size: 22, h: 0.78 });
    });
    d.t(s, 'LE WAGON (M9, M22)', 1.5, 4.8, 6.6, 0.32, { size: 12, bold: true, color: 'accent1', cs: 2 });
    d.t(s, 'nom → //waar// + préposition → … → verbe à la fin', 1.5, 5.1, 6.6, 0.45, { size: 16, italic: true, color: 'accent5' });
    d.card(s, 8.6, 1.75, 4.13, 1.75, { head: 'À l’oral', color: PREP, icon: 'FaComments', body: '//het project **%%waar%%** ik **##aan##** werk//', size: 17 });
    d.card(s, 8.6, 3.7, 4.13, 1.75, { head: 'Personnes', color: PERS, icon: 'FaUserFriends', body: '//de collega **^^met wie^^** ik werk// (M22)', size: 17 });
    band(s, '✗ //{{de pen met die ik schrijf}}// → //de pen **waarmee** ik schrijf// (« avec lequel », « dont »)', 5.95, 0.85, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 12 aperçu er (couteau suisse)
  {
    const s = d.page({ g: 12, tag: '+ APERÇU', title: '+ APERÇU : les autres emplois de er' });
    const hx = 5.2; const hy = 3.2; const hw = 2.93; const hh = 1.15;
    const B = [
      ['① lieu', '« y », « là »', '//Ken je Gent? Ik woon **er** al tien jaar.//', 0.6, 1.7],
      ['② « il y a »', 'er is · er zijn', '//**Er** is een probleem. · **Er** zijn veel klanten.//', 8.53, 1.7],
      ['③ avec un nombre', '« en »', '//Hoeveel kinderen heb je? Ik heb **er** twee.//', 0.6, 4.35],
      ['④ + préposition', 'ce module', '//Ik denk **<<er##aan##>>**.//', 8.53, 4.35],
    ];
    B.forEach(([h, sub, ex, x, y], i) => {
      const hot = i === 3; const w = 4.2; const bh = 1.95;
      const cx = x < 5 ? x + w : x; const cy = y + bh / 2;
      d.line(s, hx + (x < 5 ? 0 : hw), hy + (y < 3 ? 0.15 : hh - 0.15), cx, cy, { color: hot ? ER : 'A9B4C2', lw: hot ? 4 : 3, arrow: false });
      d.rect(s, x, y, w, bh, { fill: hot ? 'EDF6F0' : 'bg1', line: hot ? ER : BORDER, lw: hot ? 2.5 : 1.25, shadow: true, radius: 0.08 });
      d.t(s, `**${h}**`, x + 0.2, y + 0.12, w - 0.4, 0.45, { size: 18, color: hot ? ER : 'tx2', valign: 'middle' });
      d.t(s, sub, x + 0.2, y + 0.55, w - 0.4, 0.35, { size: 14, italic: true, color: 'accent5', valign: 'middle' });
      d.t(s, ex, x + 0.2, y + 0.95, w - 0.4, 0.9, { size: 17, valign: 'middle' });
    });
    d.rect(s, hx, hy, hw, hh, { fill: 'accent6', line: null, radius: 0.3, shadow: true });
    d.rect(s, hx + 0.35, hy + 0.47, 0.42, 0.14, { fill: 'FFFFFF', line: null });
    d.rect(s, hx + 0.49, hy + 0.33, 0.14, 0.42, { fill: 'FFFFFF', line: null });
    d.t(s, 'er', hx + 0.9, hy, hw - 1.1, hh, { size: 40, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    d.t(s, '① à ③ : à reconnaître — travaillés en Néerlandais 2. Le contexte suffit presque toujours.', 0.6, 6.4, 12.13, 0.45, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : la fiche er / daar / waar' });
    const w = (12.13 - 2 * 0.25) / 3;
    [
      ['FaExchangeAlt', 'Convertir', ER, ['chose → //er, daar, waar, hier// + préposition', '//met → mee//', 'personne → préposition + //hem, haar, wie//']],
      ['FaArrowsAltH', 'Placer', PREP, ['Les deux morceaux se séparent :', '//Ik denk **er** vaak **aan**.//', '//Ik denk **er** niet **aan**.//']],
      ['FaQuestion', 'Questionner', WAAR, ['//**Waar** wacht je **op**?//', '//**Op wie** wacht je?//', 'relatif : //de pen **waarmee** ik schrijf//']],
    ].forEach(([ic, h, c, body], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 3.95, { fill: 'bg1', line: c, lw: 2, shadow: true, radius: 0.1 });
      d.iconDisc(s, ic, x + 0.25, 1.9, 0.7, c);
      d.t(s, h, x + 1.1, 1.9, w - 1.25, 0.7, { size: 22, bold: true, color: c, valign: 'middle', head: true });
      d.t(s, body, x + 0.3, 2.8, w - 0.55, 2.7, { size: 19, gap: 14, valign: 'top' });
    });
    band(s, 'Les 12 verbes à préposition (diapo 8) : à apprendre **par cœur**, avec leur préposition !', 5.95, 0.7, 'accent6', 18);
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['Remplacez', '★', 'FaExchangeAlt'], ['Le verbe et sa préposition', '★', 'FaLink'], ['Posez la question', '★★', 'FaQuestion'], ['Chose ou personne ?', '★★', 'FaUserFriends'],
    ['Le détective', '★★', 'FaSearch'], ['L’interview', '★', 'FaMicrophone'], ['La réunion de suivi', '★★★', 'FaTasks'],
  ] });

  // ---------------------------------------------------------------- 15 ex1 remplacez
  const ex1 = [['Ik schrijf __met de pen__.', 'Ik schrijf ermee.'], ['Ik wacht __op de bus__.', 'Ik wacht erop.'], ['Hij praat __over het project__.', 'Hij praat erover.'], ['We beginnen __met de vergadering__.', 'We beginnen ermee.'], ['Ik denk __aan de afspraak__.', 'Ik denk eraan.'], ['Ze houdt __van chocolade__.', 'Ze houdt ervan.']];
  d.ex({ g: 15, title: 'Exercice 1 — Remplacez', stars: '★', instr: 'Remplacez la partie soulignée par er + préposition. Attention : met → mee !' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex1.forEach(([a, b], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, 1.1, y + 0.05, 5.4, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, `//${a}//`, 1.25, y + 0.05, 5.2, rh - 0.12, { size: 18, valign: 'middle' });
      d.line(s, 6.6, y + rh / 2, 7.55, y + rh / 2, { color: ER, lw: 3 });
      d.t(s, '**er**', 6.6, y + rh / 2 - 0.36, 0.9, 0.3, { size: 12, color: ER, align: 'center' });
      d.rect(s, 7.65, y + 0.05, 5.08, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${b}//`, 7.8, y + 0.05, 4.85, rh - 0.12, { size: 19, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 16 ex2 verbe + préposition
  const ex2 = ['Ik wacht [[op]] de trein.', 'Denk je [[aan]] de vergadering?', 'We praten [[over]] het budget.', 'Hij houdt [[van]] koken.', 'Ik heb zin [[in]] een koffie.', 'Ze is bezig [[met]] een rapport.', 'Wie zorgt [[voor]] de lunch?', 'Ik kijk [[naar]] het nieuws.'];
  d.ex({ g: 16, title: 'Exercice 2 — Le verbe et sa préposition', stars: '★', instr: 'Complétez avec la bonne préposition. Chaque préposition sert une fois.' }, (s, mode, top) => {
    d.list(s, ex2.map((e) => `//${e}//`), mode, { y: top + 0.2, w: 12.13, h: 4.0, cols: 2, size: 21, gap: 30 });
    const by = 6.0;
    d.rect(s, 0.6, by, 12.13, 0.85, { fill: 'bg2', line: BORDER });
    d.t(s, 'BANQUE', 0.8, by, 1.3, 0.85, { size: 12, bold: true, color: 'accent5', cs: 2, valign: 'middle' });
    ['in', 'naar', 'op', 'met', 'van', 'voor', 'aan', 'over'].forEach((p, i) => {
      const x = 2.2 + i * 1.3;
      d.rect(s, x, by + 0.16, 1.1, 0.53, { fill: PREP, line: null, radius: 0.1 });
      d.t(s, p, x, by + 0.16, 1.1, 0.53, { size: 18, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 17 ex3 posez la question
  const ex3 = [['Ik wacht __op de bus__.', 'chose', 'Waar wacht je op?', 'Waarop wacht je?'], ['Ik denk __aan mijn vakantie__.', 'chose', 'Waar denk je aan?', 'Waaraan denk je?'], ['Ik betaal __met mijn kaart__.', 'chose', 'Waarmee betaal je?', 'Waar betaal je mee?'], ['Ik praat __met Sofie__.', 'personne', 'Met wie praat je?', null], ['Ik wacht __op An__.', 'personne', 'Op wie wacht je?', null], ['We praten __over het budget__.', 'chose', 'Waarover praten jullie?', 'Waar praten jullie over?']];
  d.ex({ g: 17, title: 'Exercice 3 — Posez la question', stars: '★★', instr: 'Posez la question qui correspond à la partie soulignée. Chose ou personne ?' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([a, k, q, alt], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'accent5', 13);
      d.rect(s, 1.1, y + 0.05, 4.55, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, `//${a}//`, 1.25, y + 0.05, 4.35, rh - 0.12, { size: 18, valign: 'middle' });
      if (mode === 'a') d.chip(s, k, 5.78, y + rh / 2 - 0.15, k === 'chose' ? ER : PERS, 0.3, 11);
      d.line(s, 7.05, y + rh / 2, 7.5, y + rh / 2, { color: 'accent1', lw: 2.5 });
      d.rect(s, 7.55, y + 0.05, 5.18, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a' && !alt) d.t(s, `**//${q}//**`, 7.7, y + 0.05, 4.95, rh - 0.12, { size: 18, color: 'accent3', valign: 'middle' });
      if (mode === 'a' && alt) {
        d.t(s, `**//${q}//**`, 7.7, y + 0.07, 4.95, (rh - 0.12) * 0.55, { size: 17, color: 'accent3', valign: 'middle' });
        d.t(s, `ou //${alt}//`, 7.7, y + 0.05 + (rh - 0.12) * 0.52, 4.95, (rh - 0.12) * 0.45, { size: 13, color: 'accent5', valign: 'middle' });
      }
    });
  });

  // ---------------------------------------------------------------- 18 ex4 chose ou personne
  const ex4 = [['face-with-thermometer', 'Mijn moeder is ziek. Ik denk vaak [[aan haar]].'], ['spiral-calendar', 'De deadline is morgen. Denk je [[eraan]]?'], ['laptop', 'Dit is mijn nieuwe laptop. Ik werk graag [[ermee]].'], ['man-office-worker', 'Dit is mijn nieuwe collega. Ik werk graag [[met hem]].'], ['bus', 'De bus is laat. We wachten al lang [[erop]].'], ['woman', 'Sofie is laat. We wachten al lang [[op haar]].']];
  d.ex({ g: 18, title: 'Exercice 4 — Chose ou personne ?', stars: '★★', instr: 'Complétez : er + préposition (chose) ou préposition + pronom (personne) ?' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex4.forEach(([il, t], i) => {
      const y = top + i * rh;
      const pair = Math.floor(i / 2) % 2 === 0 ? 'bg2' : 'bg1';
      d.rect(s, 0.6, y + 0.04, 12.13, rh - 0.08, { fill: pair, line: BORDER, lw: 0.75 });
      d.t(s, `**${i + 1}**`, 0.75, y + 0.04, 0.4, rh - 0.08, { size: 17, color: 'accent5', valign: 'middle' });
      d.ill(s, il, 1.2, y + (rh - 0.6) / 2, 0.6, 0.6);
      d.t(s, `//${t}//`, 2.0, y + 0.04, 10.6, rh - 0.08, { size: 20, mode, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 19 ex5 détective
  d.ex({ g: 19, title: 'Exercice 5 — Le détective', stars: '★★', instr: 'Karim écrit à An. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Van: Karim Benali · Aan: An Janssens · Onderwerp: stand van zaken', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = '//Beste An, het rapport is nog niet klaar, maar ik werk er elke dag aan. De klant wacht {{op het}}++ erop++, maar ik kan het vrijdag sturen. Gisteren heb ik met Sofie over het budget gepraat. Ze heeft goede ideeën en {{ik ben blij met het}}++ ik ben er blij mee++. Lotte is een goede stagiaire: ik werk graag {{ermee}}++ met haar++. Over het nieuwe project: {{met wat}}++ waarmee++ moet ik eerst beginnen? {{Ik heb nog twee vragen over het.}}++ Ik heb er nog twee vragen over.++ Groeten, Karim//';
    d.t(s, txt, 0.95, top + 0.65, 8.3, h - 0.8, { size: 18, mode, ls: 1.15, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurres : //ik werk er elke dag aan · met Sofie over het budget// (personne, puis nom)', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 20 ex6 interview
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — L’interview', stars: '★' });
    const Q = [['Waar heb je zin in?', 'face-savoring-food'], ['Waar ben je bang voor?', 'fearful-face'], ['Waar droom je van?', 'sleeping-face'], ['Waar ben je trots op?', 'trophy'], ['Waar ben je goed in?', 'flexed-biceps'], ['Waar kijk je naar uit?', 'party-popper']];
    Q.forEach(([q, il], i) => {
      const x = 0.6 + (i % 3) * 2.6; const y = 1.75 + Math.floor(i / 3) * 2.5;
      d.rect(s, x, y, 2.45, 2.3, { fill: 'FFFFFF', line: WAAR, lw: 2, radius: 0.12, shadow: true });
      d.ill(s, il, x + 0.8, y + 0.15, 0.85, 0.85);
      d.t(s, `//${q}//`, x + 0.1, y + 1.1, 2.25, 1.05, { size: 17, bold: true, color: WAAR, align: 'center', valign: 'middle' });
    });
    d.ill(s, 'microphone', 8.6, 1.75, 0.8, 0.8);
    d.t(s, 'Interview!', 9.5, 1.75, 3.23, 0.8, { size: 26, bold: true, color: WAAR, head: true, valign: 'middle' });
    d.t(s, ['**1.** Par deux : posez 4 questions, notez les réponses.', '**2.** Réagissez avec //daar// : //Daar ben ik ook bang voor! · Daar heb ik geen zin in!//', '**3.** Présentez votre partenaire à la classe.'], 8.6, 2.75, 4.13, 2.7, { size: 16, gap: 10 });
    d.t(s, ['//bang zijn voor// = avoir peur de', '//trots zijn op// = être fier de', '//uitkijken naar// = avoir hâte de'], 8.6, 5.55, 4.13, 1.0, { size: 13, italic: true, color: 'accent5', gap: 1 });
  }

  // ---------------------------------------------------------------- 21 ex7 réunion de suivi
  d.roleplay({
    g: 21, title: 'Exercice 7 — La réunion de suivi',
    scenario: 'Lundi matin, An fait le point avec chaque membre de l’équipe. Chacun déplace ses tâches sur le tableau.',
    a: '**An** (la cheffe) : demandez où en est chaque tâche : //Waar ben je mee bezig? Heb je aan… gedacht?//',
    b: '**Un membre de l’équipe** : répondez avec au moins deux //er// + préposition : //Ik ben ermee bezig.//',
    bank: '//Waar ben je mee bezig? · Ik ben bezig met de facturen. · Heb je aan de offerte gedacht? — Ja, ik heb eraan gedacht. · Waar wacht je nog op? — Op het antwoord van de klant. · Daar zorg ik voor. · Kun je erop letten?//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.55, { fill: 'tx2', line: null, radius: 0.04 });
      d.t(s, 'TAKENBORD · WEEK 12', x + 0.15, y, w - 0.3, 0.55, { size: 12, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const cols = [['te doen', 'accent5', ['de offerte', 'de lunch van vrijdag']], ['bezig', PREP, ['de facturen', 'het rapport']], ['klaar', ER, ['de planning', 'de mail aan de klant']]];
      const cw = (w - 0.4) / 3;
      cols.forEach(([h2, c, notes], i) => {
        const cx = x + 0.1 + i * (cw + 0.1);
        d.rect(s, cx, y + 0.7, cw, h - 0.85, { fill: 'bg2', line: null, radius: 0.06 });
        d.t(s, h2.toUpperCase(), cx, y + 0.75, cw, 0.35, { size: 10, bold: true, color: c, align: 'center', valign: 'middle', cs: 1 });
        notes.forEach((n, k) => {
          const ny = y + 1.25 + k * 1.15;
          d.rect(s, cx + 0.08, ny, cw - 0.16, 0.95, { fill: ['FFF4C2', 'FDE2EC', 'DDF0E3'][(i + k) % 3], line: null, shadow: true, rotate: k % 2 ? 2 : -2 });
          d.t(s, `//${n}//`, cx + 0.1, ny, cw - 0.2, 0.95, { size: 11, align: 'center', valign: 'middle' });
        });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['Remplacez : //Ik wacht op de bus.//', 'La préposition : //zin hebben …… · denken …… · praten ……// ?', 'Posez la question : //Ik betaal met mijn kaart.//'],
    self: ['Remplacer', 'Combiner', 'Questionner'],
    teaser: { icon: 'FaComments', text: '**Volgende keer : Nou, toch, maar…** — //Kom maar even binnen, hoor!//' },
  });
}

module.exports = { meta, build };
