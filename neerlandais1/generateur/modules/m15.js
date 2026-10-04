// Module 15 — Het perfectum · Le passé composé
const { K, BORDER, GHOST, plain } = require('../lib');

const meta = { n: 15, slug: 'Het_perfectum', title: 'Het perfectum — Le passé composé', short: 'Het perfectum', template: 'module_15_perfectum.md' };

// colours: ge- = framboise (%%ge%%) · t = orange (##t##) · d = bleu (^^d^^) · radical = bleu nuit
// auxiliaire = rouge plein · participe = rouge pointillé · particule = orange (M11) · inséparable = bleu nuit (M11)
const GE = 'accent4';
const TT = 'accent1';
const DD = 'accent2';
const HEB = 'tx2'; // la grande porte
const ZIJN = 'accent3'; // la petite porte
const PART = 'accent1';
const INS = 'tx2';

function build(d) {
  // sentence strip: [text, type, width] · n normal · v auxiliaire · i participe · ng niet · g geen · f français
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.75; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        i: { fill: 'FBEDEB', line: 'accent6', lw: 2, dash: 'dash', color: 'accent6', bold: true },
        ng: { fill: 'tx2', line: null, color: 'bg1', bold: true },
        g: { fill: 'accent1', line: null, color: 'bg1', bold: true },
        f: { fill: 'F4F5F7', line: 'D5DCE6', lw: 1, color: 'accent5', bold: false },
      }[ty || 'n'];
      d.rect(s, cx, y, w, h, { fill: st.fill, line: st.line, lw: st.lw, dash: st.dash, radius: 0.08 });
      d.t(s, t, cx, y, w, h, { size, bold: st.bold, color: st.color, align: 'center', valign: 'middle', italic: ty === 'f' });
      cx += w + gap;
    });
    return cx - gap;
  };
  const band = (s, txt, y = 6.15, h = 0.7, c = 'tx2', size = 18) => {
    d.rect(s, 0.6, y, 12.13, h, { fill: c, line: null });
    d.t(s, txt, 0.9, y, 11.6, h, { size, color: 'bg1', valign: 'middle' });
  };
  // a door: big (hebben) or small (zijn)
  const door = (s, x, y, w, h, c, label, sub, size) => {
    d.rect(s, x - 0.12, y - 0.12, w + 0.24, h + 0.12, { fill: 'E6EBF2', line: 'accent5', lw: 1, radius: 0.04 });
    d.rect(s, x, y, w, h, { fill: c, line: null, radius: 0.04 });
    d.rect(s, x + 0.15, y + 0.15, w - 0.3, h * 0.38, { fill: 'FFFFFF', tr: 85, line: 'FFFFFF', ltr: 60, lw: 1, radius: 0.04 });
    d.t(s, label, x, y + 0.15, w, h * 0.38, { size: size || (w > 2 ? 26 : 20), bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    if (sub) d.t(s, sub, x + 0.1, y + h * 0.56, w - 0.2, h * 0.3, { size: w > 2 ? 18 : 14, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.oval(s, x + w - 0.32, y + h * 0.46, 0.16, 0.16, { fill: 'F6C27E' });
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Het perfectum', sub: 'Le passé composé', line: 'Wat heb je in het weekend gedaan?',
    visual: (s) => {
      d.ill(s, 'tear-off-calendar', 10.75, 1.0, 1.9, 1.9);
      [['vorige week', 7.0], ['zaterdag', 8.15], ['gisteren', 9.3]].forEach(([t, x], i) => {
        d.rect(s, x, 1.55, 1.05, 0.8, { fill: 'FFFFFF', tr: 70 - i * 30, line: null, radius: 0.08 });
        d.t(s, t, x, 1.55, 1.05, 0.8, { size: 12, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
      });
      d.line(s, 10.6, 2.65, 7.05, 2.65, { color: 'F6C27E', lw: 3 });
      d.t(s, 'le passé', 7.0, 2.75, 3.5, 0.35, { size: 14, italic: true, color: 'F6C27E', align: 'center' });
      d.rect(s, 6.95, 3.65, 5.8, 1.15, { fill: 'FFFFFF', line: null, radius: 0.15, shadow: true });
      d.t(s, 'Wat **!!heb!!** je gisteren **!!gedaan!!**?', 6.95, 3.65, 5.8, 1.15, { size: 28, align: 'center', valign: 'middle', head: true });
    },
  });

  // ---------------------------------------------------------------- 2 mission
  d.section('Découvrir');
  d.mission({
    g: 2,
    cards: [
      { icon: 'FaCogs', h: 'Former', t: 'Je fabrique le participe passé : //gewerkt, opgestaan, gegeten//.', color: GE },
      { icon: 'FaDoorOpen', h: 'Choisir', t: 'Je choisis //hebben// ou //zijn//.', color: ZIJN },
      { icon: 'FaBookOpen', h: 'Raconter', t: 'Je raconte mon week-end et ma semaine de travail.', color: 'accent2' },
    ],
    band: 'Le passé composé est **le** temps du passé à l’oral, en néerlandais comme en français : la dernière pièce du parcours.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — le lundi matin au bureau' });
    d.ill(s, 'man-office-worker', 0.6, 1.75, 1.3, 1.3);
    d.ill(s, 'woman-office-worker', 11.43, 2.95, 1.3, 1.3);
    d.ill(s, 'hot-beverage', 0.75, 4.25, 1.0, 1.0);
    d.bubble(s, '**Karim** : //Hoi Sofie! Wat **!!heb!!** je in het weekend __**!!gedaan!!**__?//', 2.1, 1.8, 8.5, 0.95, 'accent2', { size: 21 });
    d.bubble(s, '**Sofie** : //Ik **!!heb!!** lekker __**!!geslapen!!**__ en ik **!!heb!!** een boek __**!!gelezen!!**__. Zondag **!!ben!!** ik naar Gent __**!!gegaan!!**__. En jij?//', 2.1, 2.95, 9.1, 1.3, 'accent4', { size: 21 });
    d.bubble(s, '**Karim** : //Ik **!!heb!!** gewoon in de tuin __**!!gewerkt!!**__.//', 2.1, 4.45, 8.5, 0.95, 'accent2', { size: 21 });
    d.rect(s, 0.6, 5.7, 12.13, 1.15, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.8, 5.88, 0.8, 0.8);
    d.t(s, ['Relevez les paires **auxiliaire** + **participe** (soulignés).', 'Pourquoi //**!!ben!!** … gegaan// et pas //heb// ?'], 1.85, 5.7, 10.7, 1.15, { size: 19, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 la pince du passé
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'La pince du passé' });
    const W = [1.1, 1.5, 4.0, 1.9];
    [['2', 'auxiliaire', 1.8, 1.5], ['6', 'participe', 7.5, 1.9]].forEach(([n, lab, x, w]) => {
      d.oval(s, x + w / 2 - 0.22, 1.66, 0.44, 0.44, { fill: 'accent6' });
      d.t(s, n, x + w / 2 - 0.22, 1.66, 0.44, 0.44, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.t(s, lab, x - 0.3, 2.08, w + 0.6, 0.28, { size: 12, bold: true, color: 'accent6', align: 'center' });
    });
    const rows = [
      ['Ik', 'heb', 'een koekje', 'gegeten.'], ['Jij', 'bent', 'naar Frankrijk', 'verhuisd.'], ['Hij', 'heeft', 'deze week 32 uur', 'gewerkt.'],
      ['We', 'zijn', 'voor het examen', 'geslaagd.'], ['Ze', 'hebben', 'vandaag een opleiding', 'gevolgd.'],
    ];
    rows.forEach((r, i) => strip(s, 0.6, 2.45 + i * 0.72, r.map((t, k) => [t, ['n', 'v', 'n', 'i'][k], W[k]]), { size: 20, h: 0.6 }));
    d.card(s, 9.75, 1.7, 2.98, 4.3, { icon: 'FaLightbulb', head: 'Repères', color: 'accent1', body: ['**②** //hebben// ou //zijn// conjugué', '**⑥** le participe passé, **au bout**', 'C’est la pince du M3.', '//verhuizen// = déménager'], size: 16, gap: 10 });
    band(s, 'FR : « J’**ai mangé** un biscuit. » (collés) → NL : //Ik **heb** een koekje **gegeten**.// (séparés)', 6.2, 0.65, 'tx2');
  }

  // ---------------------------------------------------------------- 5 le participe régulier (S5)
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'Le participe régulier : ge + radical + t/d' });
    const X = [0.6, 3.7, 6.8, 9.9]; const cw = 2.75;
    [[null, 'infinitif', 'tx2'], ['FaCut', '① le radical (M3)', 'tx2'], ['FaPlus', '② + //ge-// devant', GE], ['FaPlus', '③ + //t// ou //d//', 'accent3']].forEach(([ic, lab, c], i) => {
      if (ic) d.iconDisc(s, ic, X[i] + 0.05, 1.72, 0.5, c);
      d.t(s, lab, X[i] + (ic ? 0.65 : 0), 1.72, cw - (ic ? 0.65 : 0), 0.5, { size: 16, bold: true, color: c, valign: 'middle' });
    });
    const lanes = [['werken', '@@werk@@', '%%ge%%@@werk@@', '%%ge%%@@werk@@##t##'], ['wonen', '@@woon@@', '%%ge%%@@woon@@', '%%ge%%@@woon@@^^d^^']];
    lanes.forEach((L, li) => {
      const y = 2.5 + li * 1.55;
      d.rect(s, 0.6, y + 1.0, 12.13, 0.1, { fill: 'accent5', line: null, radius: 0.04 });
      for (let rx = 0.75; rx < 12.6; rx += 0.6) d.oval(s, rx, y + 1.13, 0.16, 0.16, { fill: 'bg2', line: 'accent5', lw: 1 });
      L.forEach((t, i) => {
        const last = i === 3;
        if (i === 0) d.rect(s, X[i], y, cw, 0.92, { fill: 'tx2', line: null, radius: 0.1, shadow: true });
        else d.rect(s, X[i], y, cw, 0.92, { fill: last ? 'EDF6F0' : 'bg1', line: last ? 'accent3' : BORDER, lw: last ? 2.5 : 1.25, radius: 0.1, shadow: true });
        d.t(s, i === 0 ? `**${t}**` : `**${t}**`, X[i], y, cw, 0.92, { size: 28, color: i === 0 ? 'bg1' : 'tx1', align: 'center', valign: 'middle', head: true });
        if (i < 3) d.line(s, X[i] + cw + 0.04, y + 0.46, X[i + 1] - 0.04, y + 0.46, { color: 'accent1', lw: 2.5 });
      });
      d.oval(s, X[3] + cw - 0.28, y - 0.18, 0.4, 0.4, { fill: 'FFFFFF', line: 'accent3', lw: 1.5 });
      d.icon(s, 'FaCheck', 'accent3', X[3] + cw - 0.19, y - 0.09, 0.22);
    });
    d.rect(s, 0.6, 5.65, 12.13, 0.72, { fill: 'bg2', line: BORDER });
    d.t(s, '//maken → %%ge%%maak##t## · spelen → %%ge%%speel^^d^^ · bellen → %%ge%%bel^^d^^ · leren → %%ge%%leer^^d^^//', 0.8, 5.65, 11.7, 0.72, { size: 20, align: 'center', valign: 'middle' });
    d.t(s, 'Les ajustements du M3 s’appliquent (//woon, maak, bel//). À l’oral, //gewoond// se termine par un son [t] (M1) : la différence n’existe qu’à l’écrit.', 0.6, 6.45, 12.13, 0.45, { size: 14, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 6 SoFT KetCHuP
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 't ou d ? — SoFT KetCHuP' });
    d.rect(s, 2.6, 1.65, 8.13, 1.15, { fill: 'FDF1E6', line: 'accent1', lw: 2, radius: 0.2 });
    d.t(s, '##S##°°o°°##FT##  ##K##°°e°°##t####CH##°°u°°##P##', 2.6, 1.65, 8.13, 1.15, { size: 54, align: 'center', valign: 'middle', head: true });
    d.t(s, 'Dernière lettre du **radical** dans //SoFT KetCHuP// → **##t##** · sinon → **^^d^^**', 0.6, 2.9, 12.13, 0.45, { size: 21, align: 'center', valign: 'middle' });
    d.t(s, 'En Flandre, on apprend aussi « //’t kofschip// » : les mêmes consonnes.', 0.6, 3.33, 12.13, 0.3, { size: 13, italic: true, color: 'accent5', align: 'center' });
    [['t', TT, [['dansen', 'dan__s__', 'gedans##t##'], ['smaken', 'smaa__k__', 'gesmaak##t##'], ['kussen', 'ku__s__', 'gekus##t##'], ['stoppen', 'sto__p__', 'gestop##t##']], 0.6],
      ['d', DD, [['bellen', 'be__l__', 'gebel^^d^^'], ['wonen', 'woo__n__', 'gewoon^^d^^'], ['luisteren', 'luiste__r__', 'geluister^^d^^'], ['leren', 'lee__r__', 'geleer^^d^^']], 6.78]].forEach(([L, c, rows, x]) => {
      d.rect(s, x, 3.72, 5.95, 2.4, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.rect(s, x, 3.72, 5.95, 0.5, { fill: c, line: null, radius: 0.08 });
      d.t(s, `+ ${L}`, x, 3.72, 5.95, 0.5, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
      rows.forEach(([inf, rad, pp], i) => {
        const y = 4.27 + i * 0.45;
        d.t(s, `//${inf}//`, x + 0.25, y, 1.9, 0.42, { size: 18, valign: 'middle' });
        d.t(s, rad, x + 2.15, y, 1.6, 0.42, { size: 18, bold: true, color: 'tx2', valign: 'middle', align: 'center' });
        d.t(s, `→ //${pp}//`, x + 3.75, y, 2.1, 0.42, { size: 18, valign: 'middle' });
      });
    });
    band(s, 'Radical en //t// ou //d// : rien en plus — //wachten → gewacht · zetten → gezet · antwoorden → geantwoord//', 6.25, 0.62, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 7 piège reizen / leven
  {
    const s = d.page({ g: 7, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : reizen, leven — on regarde l’infinitif' });
    d.rect(s, 0.6, 1.7, 12.13, 4.35, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    [['rei**!!z!!**en', 'reis', 'gereist', 'gereis^^d^^'], ['le**!!v!!**en', 'leef', 'geleeft', 'geleef^^d^^']].forEach(([inf, rad, ko, ok], i) => {
      const y = 2.3 + i * 1.55;
      d.rect(s, 0.9, y, 2.3, 0.85, { fill: 'bg1', line: 'accent6', lw: 2, radius: 0.1 });
      d.t(s, `//${inf}//`, 0.9, y, 2.3, 0.85, { size: 26, align: 'center', valign: 'middle' });
      d.line(s, 3.3, y + 0.42, 3.85, y + 0.42, { color: 'accent5', lw: 2 });
      if (i === 0) d.t(s, 'radical', 3.9, y - 0.3, 1.7, 0.28, { size: 12, bold: true, color: 'accent5', align: 'center' });
      d.rect(s, 3.9, y, 1.7, 0.85, { fill: 'bg2', line: BORDER, radius: 0.1 });
      d.t(s, rad, 3.9, y, 1.7, 0.85, { size: 24, bold: true, color: 'tx2', align: 'center', valign: 'middle' });
      d.line(s, 5.7, y + 0.42, 6.25, y + 0.42, { color: 'accent5', lw: 2 });
      d.t(s, `✗ //{{${ko}}}//`, 6.3, y, 2.4, 0.85, { size: 24, color: 'accent6', align: 'center', valign: 'middle' });
      d.line(s, 8.75, y + 0.42, 9.3, y + 0.42, { color: 'accent5', lw: 2 });
      d.rect(s, 9.35, y, 3.0, 0.85, { fill: 'accent3', tr: 88, line: 'accent3', lw: 2, radius: 0.1 });
      d.t(s, `✓ //**${ok}**//`, 9.35, y, 3.0, 0.85, { size: 26, color: 'accent3', align: 'center', valign: 'middle' });
      d.curve(s, 2.05, y + 0.87, 10.85, y + 0.87, { h: 0.32, dir: 1, color: DD, lw: 2, dash: 'dash' });
    });
    d.t(s, 'on remonte à l’infinitif', 4.35, 5.1, 4.2, 0.3, { size: 13, italic: true, color: DD, align: 'center' });
    d.t(s, 'Aussi : //verhuizen// (z) → ✓ //verhuis^^d^^// · Archive corrigée : //We hebben de laatste jaren veel gereisd.//', 0.9, 5.42, 11.6, 0.55, { size: 17, valign: 'middle' });
    band(s, 'Règle : //z// et //v// ne sont pas dans //SoFT KetCHuP// → **d**, même si le radical s’écrit avec //s// ou //f// (M4).', 6.2, 0.68, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 8 particule et inséparables
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'Verbes à particule et verbes inséparables' });
    const brickRow = (x, y, parts) => {
      let cx = x;
      parts.forEach(([t, c, w, struck]) => {
        d.rect(s, cx, y, w, 0.8, { fill: c, line: null, radius: 0.06, tr: struck ? 75 : 0 });
        d.t(s, t, cx, y, w, 0.8, { size: 24, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
        if (struck) d.line(s, cx + 0.1, y + 0.7, cx + w - 0.1, y + 0.1, { color: 'accent6', lw: 3, arrow: false });
        cx += w + 0.08;
      });
    };
    [['SÉPARABLE', PART, 'FaCut', 0.6, [['bij', PART, 1.0], ['ge', GE, 0.9], ['leer', 'tx2', 1.3], ['d', DD, 0.6]],
      ['//opstaan → ##op##%%ge%%staan//', '//meenemen → ##mee##%%ge%%nomen//', '//inloggen → ##in##%%ge%%log^^d^^//', '//bijleren → ##bij##%%ge%%leer^^d^^//']],
    ['INSÉPARABLE', INS, 'FaLock', 6.81, [['ge', GE, 0.9, true], ['be', INS, 0.9], ['taal', 'tx2', 1.3], ['d', DD, 0.6]],
      ['//betalen → @@be@@taal^^d^^//  ({{gebetaald}})', '//vertellen → @@ver@@tel^^d^^//', '//ontmoeten → @@ont@@moet//', '//herhalen → @@her@@haal^^d^^//']]].forEach(([h, c, ic, x, bricks, ex]) => {
      d.rect(s, x, 1.7, 5.92, 4.3, { fill: 'bg1', line: c, lw: 2.5, shadow: true });
      d.rect(s, x, 1.7, 5.92, 0.6, { fill: c, line: null, radius: 0.08 });
      d.icon(s, ic, 'FFFFFF', x + 0.2, 1.82, 0.36);
      d.t(s, h, x + 0.7, 1.7, 5, 0.6, { size: 18, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
      const bw = bricks.reduce((a, b) => a + b[2] + 0.08, -0.08);
      brickRow(x + (5.92 - bw) / 2, 2.55, bricks);
      d.t(s, ex, x + 0.35, 3.55, 5.3, 2.35, { size: 19, gap: 6, valign: 'middle' });
    });
    band(s, 'Un participe commence par //ge-//, par une **particule + ge-**, ou par un **préfixe inséparable** (sans //ge-//). Mêmes tests qu’au M11.', 6.15, 0.72, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 9 les irréguliers fréquents
  {
    const s = d.page({ g: 9, tag: 'À RETENIR', title: 'Les irréguliers fréquents' });
    const F = [
      ['famille « e »', 'accent2', [['eten', 'gegeten'], ['lezen', 'gelezen'], ['zien', 'gezien'], ['geven', 'gegeven']]],
      ['famille « o »', 'accent3', [['nemen', 'genomen'], ['komen', 'gekomen'], ['spreken', 'gesproken'], ['beginnen', 'begonnen'], ['drinken', 'gedronken']]],
      ['famille « ij → e »', 'accent4', [['schrijven', 'geschreven'], ['blijven', 'gebleven'], ['krijgen', 'gekregen']]],
      ['famille « aa »', 'accent1', [['gaan', 'gegaan'], ['staan', 'gestaan'], ['doen', 'gedaan']]],
      ['les deux stars', 'tx2', [['hebben', 'gehad'], ['zijn', 'geweest']]],
    ];
    const w = (12.13 - 0.5) / 3; const h = 2.45;
    F.forEach(([lab, c, rows], i) => {
      const x = 0.6 + (i % 3) * (w + 0.25); const y = 1.7 + Math.floor(i / 3) * (h + 0.2);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.rect(s, x, y, w, 0.5, { fill: c, line: null, radius: 0.08 });
      d.t(s, lab, x + 0.2, y, w - 0.4, 0.5, { size: 16, bold: true, color: 'bg1', valign: 'middle' });
      if (i === 4) d.ill(s, 'star', x + w - 0.6, y + 0.04, 0.42, 0.42);
      const rh = Math.min(0.42, (h - 0.6) / rows.length);
      rows.forEach(([a, b], k) => {
        const yy = y + 0.58 + k * rh + ((h - 0.6) - rows.length * rh) / 2;
        d.t(s, `//${a}//`, x + 0.25, yy, 1.5, rh, { size: 16, valign: 'middle' });
        d.t(s, `→ //**${b}**//`, x + 1.75, yy, w - 1.9, rh, { size: 16, color: c === 'tx2' ? 'tx2' : 'tx1', valign: 'middle' });
      });
    });
    const x = 0.6 + 2 * (w + 0.25); const y = 1.7 + h + 0.2;
    d.rect(s, x, y, w, h, { fill: 'bg2', line: BORDER });
    d.ill(s, 'light-bulb', x + 0.2, y + 0.2, 0.6, 0.6);
    d.t(s, ['On les apprend **par familles sonores**, à voix haute.', '//begonnen// : pas de //ge-// (//be-//, inséparable).', 'Liste complète : Néerlandais 2.'], x + 0.9, y + 0.15, w - 1.05, h - 0.3, { size: 15, gap: 8, valign: 'middle' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 10 hebben ou zijn
  {
    const s = d.page({ g: 10, tag: 'GRAMMAIRE', title: 'hebben ou zijn ?' });
    door(s, 1.55, 1.85, 2.4, 3.1, HEB, 'HEBBEN', 'presque tous les verbes');
    d.t(s, ['//Ik **heb** gewerkt.//', '//Ik **heb** gegeten.//', '//Ik **heb** geslapen.//'], 0.6, 5.1, 4.3, 1.3, { size: 19, align: 'center', gap: 2, color: 'tx2' });
    door(s, 5.4, 2.65, 1.45, 2.3, ZIJN, 'ZIJN', '3 cas');
    const R = [
      ['person-walking', 'déplacement vers un lieu', '//Ik **ben** naar Gent gegaan. · Hij **is** gekomen. · We **zijn** vertrokken.//'],
      ['butterfly', 'changement', '//Ze **is** opgestaan. · Hij **is** ziek geworden. · Ik **ben** geslaagd.//'],
      ['anchor', 'rester · être', '//Ik **ben** thuis gebleven. · Ik **ben** in Parijs geweest.//'],
    ];
    R.forEach(([il, lab, ex], i) => {
      const y = 1.7 + i * 1.58;
      d.rect(s, 7.15, y, 5.58, 1.45, { fill: ZIJN, tr: 90, line: ZIJN, lw: 1.5, radius: 0.12 });
      if (i === 1) { d.ill(s, 'bug', 7.25, y + 0.5, 0.45, 0.45); d.ill(s, 'butterfly', 7.7, y + 0.3, 0.75, 0.75); } else d.ill(s, il, 7.35, y + 0.3, 0.85, 0.85);
      d.t(s, lab, 8.55, y + 0.08, 4.0, 0.42, { size: 16, bold: true, color: ZIJN, valign: 'middle' });
      d.t(s, ex, 8.55, y + 0.5, 4.05, 0.9, { size: 16, valign: 'middle' });
    });
    d.line(s, 6.95, 3.8, 7.12, 2.4, { color: ZIJN, lw: 1.5, arrow: false });
    d.line(s, 6.95, 3.8, 7.12, 3.95, { color: ZIJN, lw: 1.5, arrow: false });
    d.line(s, 6.95, 3.8, 7.12, 5.5, { color: ZIJN, lw: 1.5, arrow: false });
    d.t(s, 'Comme en français : « je **suis** allé, je **suis** parti ». Les différences : diapo suivante.', 0.6, 6.5, 12.13, 0.38, { size: 15, italic: true, color: 'accent5', align: 'center' });
  }

  // ---------------------------------------------------------------- 11 piège j'ai été
  {
    const s = d.page({ g: 11, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : « j’ai été », « j’ai commencé »' });
    d.rect(s, 0.6, 1.7, 12.13, 4.4, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
    const R = [
      ['face-with-thermometer', '« J’**{{ai}}** été malade. »', 'Ik heb ziek geweest.', 'Ik **!!ben!!** ziek **geweest**.'],
      ['alarm-clock', '« J’**{{ai}}** commencé à 9 h. »', 'Ik heb om 9 uur begonnen.', 'Ik **!!ben!!** om 9 uur **begonnen**.'],
      ['graduation-cap', '« J’**{{ai}}** réussi l’examen. »', 'Ik heb voor het examen geslaagd.', 'Ik **!!ben!!** voor het examen **geslaagd**.'],
    ];
    R.forEach(([il, fr, ko, ok], i) => {
      const y = 2.35 + i * 1.2;
      d.ill(s, il, 0.85, y + 0.1, 0.8, 0.8);
      d.t(s, fr, 1.8, y, 3.45, 1.0, { size: 17, valign: 'middle' });
      d.t(s, `✗ //{{${ko}}}//`, 5.35, y, 3.05, 1.0, { size: 14, color: 'accent6', valign: 'middle' });
      d.line(s, 8.45, y + 0.5, 8.8, y + 0.5, { color: 'accent3', lw: 2 });
      d.rect(s, 8.85, y + 0.1, 3.7, 0.8, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 8.95, y + 0.1, 3.55, 0.8, { size: 17, valign: 'middle' });
    });
    band(s, '« avoir » en français → //**zijn**// : //geweest · begonnen · geslaagd//. Répétez-les en chœur !', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 12 les mots du passé
  {
    const s = d.page({ g: 12, tag: 'VOCABULAIRE', title: 'Les mots du passé' });
    d.line(s, 0.7, 2.95, 12.6, 2.95, { color: 'accent5', lw: 3 });
    d.t(s, '← il y a longtemps', 0.6, 3.62, 2.5, 0.3, { size: 12, italic: true, color: 'accent5' });
    d.t(s, 'maintenant →', 10.4, 3.62, 2.33, 0.3, { size: 12, italic: true, color: 'accent5', align: 'right' });
    const M = [['vorig jaar', 'l’an passé', 'FaCalendarAlt'], ['vorige maand', 'le mois passé', 'FaCalendarAlt'], ['vorige week', 'la semaine passée', 'FaCalendarWeek'], ['drie dagen geleden', 'il y a trois jours', 'FaHistory'],
      ['gisteren', 'hier', 'FaMoon'], ['vanmorgen', 'ce matin', 'FaCoffee'], ['net', 'venir de', 'FaBolt']];
    M.forEach(([nl, fr, ic], i) => {
      const cx = 1.25 + i * 1.75;
      d.t(s, `//**${nl}**//`, cx - 0.85, 1.75, 1.7, 0.85, { size: 16, align: 'center', valign: 'bottom', color: 'tx2' });
      d.iconDisc(s, ic, cx - 0.25, 2.7, 0.5, i < 4 ? 'accent5' : 'accent1');
      d.t(s, fr, cx - 0.85, 3.25, 1.7, 0.5, { size: 12, italic: true, color: 'accent5', align: 'center', valign: 'top' });
    });
    const C = [['al', 'déjà', '//Ik heb **al** gegeten.//', 'accent3'], ['nog niet', 'pas encore', '//Ik heb **nog niet** betaald.//', 'accent6'], ['ooit', 'déjà (une fois)', '//Heb je **ooit** sushi gegeten?//', 'accent2'], ['nooit', 'jamais', '//Ik ben **nooit** in Japan geweest.//', 'tx2']];
    const w = (12.13 - 0.6) / 4;
    C.forEach(([nl, fr, ex, c], i) => {
      const x = 0.6 + i * (w + 0.2);
      d.rect(s, x, 4.0, w, 1.7, { fill: 'bg1', line: c, lw: 2, shadow: true });
      d.t(s, `**${nl}**`, x + 0.2, 4.05, w - 0.4, 0.5, { size: 22, color: c, valign: 'middle', head: true });
      d.t(s, fr, x + 0.2, 4.5, w - 0.4, 0.35, { size: 14, italic: true, color: 'accent5' });
      d.t(s, ex, x + 0.2, 4.9, w - 0.4, 0.7, { size: 15, valign: 'middle' });
    });
    band(s, '//geleden// = « il y a » (temps) : //twee jaar geleden// · //net// = « venir de » : //Ik heb net gegeten.// · //vorig jaar// (het) mais //vorige week// (de)', 5.9, 0.95, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 13 questions, négation, inversion
  {
    const s = d.page({ g: 13, tag: 'GRAMMAIRE', title: 'Questions, négation, inversion' });
    const B = [
      ['QUESTION', 'accent2', [[['Heb', 'v'], ['je al', 'n'], ['gegeten?', 'i']], [['Wat', 'n'], ['heb', 'v'], ['je', 'n'], ['gedaan?', 'i']], [['Waar', 'n'], ['ben', 'v'], ['je', 'n'], ['geweest?', 'i']]]],
      ['NÉGATION', 'tx2', [[['Nee, ik', 'n'], ['heb', 'v'], ['nog', 'n'], ['niet', 'ng'], ['gegeten.', 'i']], [['Ik', 'n'], ['heb', 'v'], ['geen', 'g'], ['tijd', 'n'], ['gehad.', 'i']]]],
      ['INVERSION', 'accent1', [[['Gisteren', 'n'], ['heb', 'v'], ['ik thuis', 'n'], ['gewerkt.', 'i']], [['Vorige week', 'n'], ['zijn', 'v'], ['we naar Brugge', 'n'], ['gegaan.', 'i']]]],
    ];
    let y = 1.72;
    B.forEach(([lab, c, rows]) => {
      const bh = rows.length * 0.66 - 0.1;
      d.rect(s, 0.6, y, 2.1, bh, { fill: c, line: null });
      d.t(s, lab, 0.6, y, 2.1, bh, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 1 });
      rows.forEach((r, k) => strip(s, 2.9, y + k * 0.66, r, { size: 17, h: 0.56, gap: 0.08 }));
      y += bh + 0.25;
    });
    d.card(s, 9.4, 1.72, 3.33, 4.75, { icon: 'FaLightbulb', head: 'Rappels', color: 'accent1', body: ['**Question** : l’auxiliaire en tête (M3).', '**M13** : @@niet@@ juste avant le participe ; ##geen## devant le nom.', '**M3** : un complément en tête → **inversion**.', 'La pince ne bouge pas : le participe reste **au bout**.'], size: 16, gap: 10 });
  }

  // ---------------------------------------------------------------- 14 dans une subordonnée (S12)
  {
    const s = d.page({ g: 14, tag: 'GRAMMAIRE', title: 'Dans une subordonnée' });
    d.t(s, 'HOOFDZIN · principale', 0.6, 1.68, 3.3, 0.3, { size: 13, bold: true, color: 'accent2', align: 'center', cs: 1 });
    d.t(s, 'mot-crochet', 3.95, 1.68, 1.7, 0.3, { size: 13, bold: true, color: 'accent1', align: 'center' });
    d.t(s, 'BIJZIN · subordonnée', 5.85, 1.68, 6.88, 0.3, { size: 13, bold: true, color: 'accent1', align: 'center', cs: 1 });
    const R = [[[['Ik', 'n', 0.75], ['ben', 'v', 0.95], ['moe', 'n', 1.05]], 'omdat', [['ik', 'n', 0.7], ['slecht', 'n', 1.3], ['geslapen', 'i', 2.0], ['heb.', 'v', 1.15]]],
      [[['Ik', 'n', 0.75], ['denk', 'v', 1.15]], 'dat', [['Sofie', 'n', 1.1], ['al', 'n', 0.7], ['vertrokken', 'i', 2.2], ['is.', 'v', 0.95]]]];
    R.forEach(([a, hook, b], i) => {
      const y = 2.05 + i * 1.75;
      d.rect(s, 0.6, y, 3.3, 1.1, { fill: 'accent2', tr: 90, line: 'accent2', lw: 2 });
      strip(s, 0.75, y + 0.18, a, { size: 22, h: 0.74 });
      d.rect(s, 4.05, y + 0.18, 1.5, 0.74, { fill: 'accent1', line: null });
      d.t(s, hook, 4.05, y + 0.18, 1.5, 0.74, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.rect(s, 5.85, y, 6.88, 1.1, { fill: 'accent1', tr: 90, line: 'accent1', lw: 2 });
      const e = strip(s, 6.05, y + 0.18, b, { size: 22, h: 0.74 });
      const w2 = b[2][2] + b[3][2] + 0.1;
      d.rect(s, e - w2, y + 1.17, w2, 0.32, { fill: 'accent6', line: null, radius: 0.05 });
      d.t(s, 'participe + auxiliaire', e - w2, y + 1.17, w2, 0.32, { size: 12, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    });
    band(s, 'Dans le wagon (M9), les **deux verbes** se retrouvent **ensemble à la fin**.', 5.65, 0.7, 'tx2');
    d.t(s, 'L’ordre //omdat ik slecht **heb geslapen**// est aussi correct (surtout aux Pays-Bas) : à reconnaître, on accepte les deux.', 0.6, 6.45, 12.13, 0.42, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 15 organigramme
  {
    const s = d.page({ g: 15, tag: 'À RETENIR', title: 'À retenir : l’organigramme du participe' });
    const diamond = (t, x, y, w, h, size = 15) => s.addText(t, { shape: d.S.DIAMOND, x, y, w, h, fill: { color: 'EEF3F8' }, line: { color: '17375E', width: 1.5 }, fontSize: size, bold: true, color: '1B2333', align: 'center', valign: 'middle', margin: 0 });
    const Q = [
      ['Irrégulier (liste) ?', 'accent4', 'FaStar', '**à apprendre** : //gegeten, gegaan, geweest//'],
      ['Préfixe be-, ge-, ont-, ver-, er-, her- ?', INS, 'FaLock', '**pas de ge-** : //betaald, verteld, ontmoet//'],
      ['Particule (op, mee, in…) ?', PART, 'FaCut', 'particule + **ge** + radical + t/d : //opgebeld, ingelogd//'],
    ];
    Q.forEach(([q, c, ic, res], i) => {
      const y = 1.7 + i * 1.22;
      diamond(q, 0.6, y, 4.6, 1.0, i === 1 ? 13 : 15);
      d.line(s, 5.22, y + 0.5, 5.75, y + 0.5, { color: 'accent3', lw: 2 });
      d.t(s, 'OUI', 5.2, y + 0.12, 0.6, 0.3, { size: 12, bold: true, color: 'accent3', align: 'center' });
      d.rect(s, 5.8, y + 0.1, 3.85, 0.8, { fill: c, line: null });
      d.icon(s, ic, 'FFFFFF', 5.95, y + 0.31, 0.36);
      d.t(s, res, 6.45, y + 0.1, 3.15, 0.8, { size: 14, color: 'bg1', valign: 'middle' });
      d.line(s, 2.9, y + 1.0, 2.9, y + 1.22, { color: 'accent5', lw: 1.75 });
      d.t(s, 'NON', 3.0, y + 0.98, 0.7, 0.26, { size: 11, bold: true, color: 'accent5' });
    });
    d.rect(s, 0.6, 5.36, 9.05, 0.9, { fill: 'accent3', line: null });
    d.icon(s, 'FaCogs', 'FFFFFF', 0.8, 5.6, 0.4);
    d.t(s, '**régulier** : ge + radical + **t** (//SoFT KetCHuP//) ou **d** → //gewerkt, gewoond//', 1.4, 5.36, 8.1, 0.9, { size: 18, color: 'bg1', valign: 'middle' });
    d.rect(s, 9.95, 1.7, 2.78, 4.56, { fill: 'bg2', line: BORDER });
    d.t(s, 'L’AUXILIAIRE', 9.95, 1.8, 2.78, 0.32, { size: 12, bold: true, color: 'accent5', align: 'center', cs: 2 });
    d.rect(s, 10.15, 2.25, 2.38, 0.5, { fill: ZIJN, line: null, radius: 0.08 });
    d.t(s, 'ZIJN', 10.15, 2.25, 2.38, 0.5, { size: 18, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, ['déplacement', 'changement', '//blijven, zijn//'], 10.2, 2.85, 2.3, 1.35, { size: 15, align: 'center', gap: 4 });
    d.rect(s, 10.15, 4.35, 2.38, 0.5, { fill: HEB, line: null, radius: 0.08 });
    d.t(s, 'HEBBEN', 10.15, 4.35, 2.38, 0.5, { size: 18, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    d.t(s, 'tout le reste', 10.2, 4.95, 2.3, 0.5, { size: 15, align: 'center' });
    d.t(s, 'Ce schéma est la référence pour tous les exercices.', 0.6, 6.42, 9.05, 0.4, { size: 14, italic: true, color: 'accent5' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 16 divider
  d.divider({ g: 16, tiles: [
    ['La machine à participes', '★', 'FaCogs'], ['t ou d ?', '★', 'FaBalanceScale'], ['hebben of zijn?', '★★', 'FaDoorOpen'], ['Le week-end de Sofie', '★★', 'FaBicycle'],
    ['Heb je ooit…?', '★', 'FaComments'], ['Le détective', '★★', 'FaSearch'], ['La réunion du lundi', '★★★', 'FaUsers'],
  ] });

  // ---------------------------------------------------------------- 17 ex1 machine à participes
  const ex1 = [['werken', '%%ge%%werk##t##'], ['spelen', '%%ge%%speel^^d^^'], ['maken', '%%ge%%maak##t##'], ['wachten', '%%ge%%wacht'], ['opbellen', '##op##%%ge%%bel^^d^^'], ['betalen', '@@be@@taal^^d^^'],
    ['reizen', '%%ge%%reis^^d^^'], ['meenemen', '##mee##%%ge%%nomen'], ['vertellen', '@@ver@@tel^^d^^'], ['eten', '%%ge%%geten'], ['antwoorden', '%%ge%%antwoord'], ['gaan', '%%ge%%gaan']];
  d.ex({ g: 17, title: 'Exercice 1 — La machine à participes', stars: '★', instr: 'Formez le participe passé. Justifiez avec l’organigramme.' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex1.forEach(([inf, pp], i) => {
      const x = 0.6 + Math.floor(i / 6) * 6.18; const y = top + (i % 6) * rh;
      d.num(s, i + 1, x, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      d.rect(s, x + 0.5, y + 0.06, 2.3, rh - 0.14, { fill: 'bg2', line: BORDER });
      d.t(s, `//${inf}//`, x + 0.5, y + 0.06, 2.3, rh - 0.14, { size: 20, align: 'center', valign: 'middle' });
      d.line(s, x + 2.88, y + rh / 2 - 0.02, x + 3.3, y + rh / 2 - 0.02, { color: 'accent1', lw: 2.5 });
      d.rect(s, x + 3.38, y + 0.06, 2.55, rh - 0.14, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//**${pp}**//`, x + 3.38, y + 0.06, 2.55, rh - 0.14, { size: 21, align: 'center', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex2 t ou d
  const ex2 = [['gewerk', 't'], ['gebel', 'd'], ['gefiets', 't'], ['gehoor', 'd'], ['gekook', 't'], ['geleer', 'd'], ['gestop', 't'], ['gewoon', 'd'], ['gerook', 't'], ['geleef', 'd']];
  d.ex({ g: 18, title: 'Exercice 2 — t ou d ?', stars: '★', instr: 'Levez le carton T ou D ! Puis écrivez la dernière lettre.' }, (s, mode, top) => {
    d.t(s, '##S##°°o°°##FT##  ##K##°°e°°##t####CH##°°u°°##P##', 0.6, top, 12.13, 0.65, { size: 30, align: 'center', valign: 'middle', head: true });
    const w = 2.25; const h = 1.05;
    ex2.forEach(([stem, L], i) => {
      const x = 0.6 + (i % 5) * (w + 0.22); const y = top + 0.85 + Math.floor(i / 5) * (h + 0.25);
      const c = L === 't' ? TT : DD;
      d.rect(s, x, y, w, h, { fill: mode === 'a' ? (L === 't' ? 'FDF1E6' : 'EAF1F8') : 'bg1', line: mode === 'a' ? c : 'accent5', lw: 2, shadow: true });
      d.t(s, mode === 'a' ? `//${stem}//**${L === 't' ? '##t##' : '^^d^^'}**` : `//${stem}//°°…°°`, x, y, w, h, { size: 24, align: 'center', valign: 'middle' });
    });
    const by = top + 0.85 + 2 * (h + 0.25) + 0.1;
    [['T', TT, 2.6], ['D', DD, 9.53]].forEach(([L, c, x]) => {
      d.oval(s, x, by, 1.2, 1.2, { fill: c });
      d.t(s, L, x, by, 1.2, 1.2, { size: 44, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    });
    if (mode === 'a') d.t(s, ['//gerookt// : //k// est dans KetCHuP', '//geleefd// : //v// à l’infinitif (diapo 7)'], 4.0, by, 5.33, 1.2, { size: 16, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  });

  // ---------------------------------------------------------------- 19 ex3 hebben of zijn
  const ex3 = ['Ik [[heb]] gisteren tot 18 uur gewerkt.', 'Sofie [[is]] naar Gent gegaan.', 'We [[hebben]] een pizza gegeten.', 'Karim [[is]] ziek geweest.', '[[Hebben]] jullie het formulier ingevuld?', 'De trein [[is]] om 8 uur vertrokken.', 'Ik [[ben]] thuis gebleven.', 'Hij [[is]] om 6 uur opgestaan.'];
  d.ex({ g: 19, title: 'Exercice 3 — hebben of zijn?', stars: '★★', instr: 'Complétez avec hebben ou zijn, conjugué.' }, (s, mode, top) => {
    d.list(s, ex3, mode, { y: top + 0.1, w: 8.9, h: 6.88 - top - 0.1, size: 21, gap: 12 });
    door(s, 9.95, top + 0.35, 1.45, 2.3, HEB, 'HEBBEN', null, 14);
    door(s, 11.65, top + 0.95, 1.0, 1.7, ZIJN, 'ZIJN', null, 14);
    d.t(s, ['**zijn** : déplacement · changement · //blijven, zijn//', '**hebben** : tout le reste'], 9.85, top + 2.95, 2.88, 2.0, { size: 15, gap: 8 });
  });

  // ---------------------------------------------------------------- 20 ex4 le week-end de Sofie
  d.ex({ g: 20, title: 'Exercice 4 — Le week-end de Sofie', stars: '★★', instr: 'Sofie raconte son week-end. Mettez les verbes au passé composé.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 10.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 10.0, 0.5, { fill: 'accent4', line: null, radius: 0.04 });
    d.t(s, 'Sofie → Karim · Mijn weekend', 0.85, top, 9, 0.5, { size: 14, bold: true, color: 'bg1', valign: 'middle' });
    const txt = 'Zaterdag [[heb]] ik lang [[geslapen]] (slapen). Daarna [[ben]] ik naar de markt [[gefietst]] (fietsen) en ik [[heb]] een taart [[gebakken]] (bakken). ’s Avonds [[zijn]] mijn ouders [[gekomen]] (komen). Zondag [[heb]] ik een boek [[gelezen]] (lezen) en ik [[ben]] thuis [[gebleven]] (blijven). Ik [[heb]] veel [[gelachen]] (lachen) en ik [[heb]] niet [[gewerkt]] (werken)!';
    d.t(s, txt, 0.95, top + 0.7, 9.35, h - 0.9, { size: 21, mode, ls: 1.35, valign: 'top' });
    ['bicycle', 'shortcake', 'open-book'].forEach((il, i) => d.ill(s, il, 11.0, top + 0.1 + i * 1.45, 1.25, 1.25));
    if (mode === 'a') d.t(s, '//bakken, lachen// : participe en //-en// !', 10.8, top + 4.4, 1.93, 0.9, { size: 13, italic: true, color: 'accent5', align: 'center' });
  });

  // ---------------------------------------------------------------- 21 ex5 heb je ooit
  {
    const s = d.page({ g: 21, tag: 'JIJ NU !', title: 'Exercice 5 — Heb je ooit…?', stars: '★' });
    const G = [['Big Ben gezien', 'gb'], ['New York bezocht', 'statue-of-liberty'], ['een marathon gelopen', 'person-running'], ['slakken gegeten', 'snail'],
      ['met dolfijnen gezwommen', 'dolphin'], ['een taart gebakken', 'shortcake'], ['in een vliegtuig geslapen', 'airplane'], ['een Nederlandse film gezien', 'clapper-board']];
    const w = 2.05; const h = 2.45;
    G.forEach(([t, il], i) => {
      const x = 0.6 + (i % 4) * (w + 0.15); const y = 1.75 + Math.floor(i / 4) * (h + 0.2);
      d.rect(s, x, y, w, h, { fill: 'bg1', line: 'accent1', lw: 1.75, shadow: true });
      if (il === 'gb') d.flag(s, 'gb', x + w / 2 - 0.5, y + 0.3, 1.0);
      else d.ill(s, il, x + w / 2 - 0.45, y + 0.15, 0.9, 0.9);
      if (i === 7) d.flag(s, 'nl', x + w - 0.6, y + 0.15, 0.45);
      d.t(s, `//…${t}?//`, x + 0.1, y + 1.12, w - 0.2, 0.8, { size: 15, align: 'center', valign: 'middle', fit: true, max: 15, min: 11 });
      d.line(s, x + 0.3, y + 2.2, x + w - 0.3, y + 2.2, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
    });
    d.t(s, 'Heb je ooit…?', 9.45, 1.75, 3.28, 0.6, { size: 26, bold: true, color: 'accent1', head: true });
    d.t(s, ['**1.** Circulez et interrogez : //Heb je ooit slakken gegeten?//', '**2.** //Ja, ik heb al…// → notez le prénom dans la case.', '**3.** //Nee, ik heb nog nooit…// → cherchez quelqu’un d’autre.', '//nog nooit// = jamais encore'], 9.45, 2.45, 3.28, 4.4, { size: 16, gap: 10 });
  }

  // ---------------------------------------------------------------- 22 ex6 détective
  d.ex({ g: 22, title: 'Exercice 6 — Le détective', stars: '★★', instr: 'Karim raconte son week-end. Trouvez les 6 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'tx2', line: null, radius: 0.04 });
    d.t(s, 'Mijn weekend — Karim', 0.85, top, 8, 0.5, { size: 14, bold: true, color: 'bg1', valign: 'middle' });
    const txt = '//{{Zaterdag ik heb}}++ Zaterdag heb ik++ lang geslapen. Daarna {{heb}}++ ben++ ik naar Brussel gegaan. Ik heb mijn vriend ontmoet en we hebben een koffie {{gedrinkt}}++ gedronken++. Zondag {{heb}}++ ben++ ik ziek geweest. Ik {{heb}}++ ben++ de hele dag thuis gebleven. Ik heb {{gewerkt niet}}++ niet gewerkt++!//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 21, mode, ls: 1.25, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '6 erreurs ?' : '6 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurre : //Ik heb mijn vriend ontmoet// (inséparable, pas de //ge-//).', 9.9, top + 3.05, 2.83, 1.6, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 23 ex7 la réunion du lundi
  d.roleplay({
    g: 23, title: 'Exercice 7 — La réunion du lundi',
    scenario: 'Lundi, réunion d’équipe chez Peeters & Co. Chacun présente **3 choses** faites la semaine passée et **1 problème**.',
    a: '**Vous présentez** : parlez une minute de votre semaine. Remplissez d’abord le //Weekverslag//.',
    b: '**L’équipe** : écoutez, puis posez une question : //Heb je ook…? Wanneer ben je…? Wie heb je ontmoet?//',
    bank: '//Vorige week heb ik… · Ik heb drie klanten gebeld. · Ik heb de facturen gecontroleerd. · Ik ben naar Antwerpen gegaan. · Ik heb een nieuwe collega ontmoet. · Het project is nog niet klaar. · Het is niet gelukt.//',
    doc: (s, x, y, w, h) => {
      d.ill(s, 'busts-in-silhouette', x + w - 0.95, y + 0.05, 0.8, 0.8);
      d.rect(s, x, y + 0.9, w, h - 0.9, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y + 0.9, w, 0.55, { fill: 'purple', line: null, radius: 0.04 });
      d.t(s, 'WEEKVERSLAG', x + 0.2, y + 0.9, w - 0.4, 0.55, { size: 14, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
      ['Wat heb je gedaan?', 'Wie heb je gebeld / ontmoet?', 'Wat is niet gelukt?'].forEach((q, i) => {
        const yy = y + 1.6 + i * ((h - 1.75) / 3);
        d.t(s, `//**${q}**//`, x + 0.2, yy, w - 0.4, 0.35, { size: 14, color: 'tx2' });
        for (let k = 0; k < 2; k++) d.line(s, x + 0.2, yy + 0.75 + k * 0.4, x + w - 0.2, yy + 0.75 + k * 0.4, { color: GHOST, lw: 1, arrow: false, dash: 'sysDot' });
      });
    },
  });

  // ---------------------------------------------------------------- 24 ticket + bilan du parcours
  {
    const s = d.ticket({
      g: 24, title: 'Ticket de sortie et bilan du parcours',
      q: ['Le participe de //opbellen// ? de //vertellen// ?', '//hebben// ou //zijn// : //Ik …… ziek geweest.//', 'Au passé composé : //Ik werk niet.//'],
      self: ['Former', 'Choisir', 'Raconter'],
      teaser: { icon: 'FaTrophy', text: '**Proficiat! Néerlandais 1 is klaar.** — Volgende stap : Néerlandais 2' },
    });
    d.t(s, 'NÉERLANDAIS 1 · 15 MODULES', 7.6, 5.05, 4.5, 0.3, { size: 12, bold: true, color: 'accent5', cs: 2 });
    for (let k = 0; k < 15; k++) {
      const x = 7.6 + k * 0.31; const c = k < 5 ? 'accent2' : k < 10 ? 'accent1' : 'accent3';
      d.oval(s, x, 5.45, 0.28, 0.28, { fill: c });
      d.t(s, String(k + 1), x, 5.45, 0.28, 0.28, { size: 9, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    }
    d.ill(s, 'trophy', 12.3, 5.2, 0.5, 0.5);
  }
}

module.exports = { meta, build };
