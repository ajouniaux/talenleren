// Module 27 — Graag of houden van? · Dire ce qu'on aime
const { BORDER, plain } = require('../lib');

const meta = { n: 27, slug: 'Graag_of_houden_van', title: 'Graag of houden van? — Dire ce qu’on aime', short: 'Graag of houden van?', template: 'module_27_graag_houden_van.md' };

const GR = 'accent3'; // graag (activité) = vert  <<…>>
const HV = 'accent4'; // houden van (personne, chose) = framboise  %%…%%
const VI = 'accent1'; // lekker / leuk vinden = orange  ##…##

function build(d) {
  const wOf = (t, size) => 0.32 + plain(t).length * size * 0.0078;
  const strip = (s, x, y, parts, o = {}) => {
    const size = o.size || 22; const h = o.h || 0.72; const gap = o.gap ?? 0.1;
    let cx = x;
    parts.forEach(([t, ty, wf]) => {
      const w = wf || wOf(t, size);
      const st = {
        n: { fill: 'bg1', line: BORDER, lw: 1.25, color: 'tx1', bold: false },
        v: { fill: 'FBEDEB', line: 'accent6', lw: 2.5, color: 'accent6', bold: true },
        v2: { fill: 'FFFFFF', line: 'accent6', lw: 2, dash: 'dash', color: 'accent6', bold: true },
        g: { fill: GR, line: null, color: 'bg1', bold: true },
        h: { fill: HV, line: null, color: 'bg1', bold: true },
        neg: { fill: 'bg1', line: 'accent6', lw: 2, color: 'accent6', bold: true },
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
  const trapFrame = (s, h = 4.35) => {
    d.rect(s, 0.6, 1.7, 12.13, h, { fill: 'accent6', tr: 94, line: 'accent6', lw: 1, ltr: 40 });
    d.chip(s, '⚠ PIÈGE', 0.8, 1.85, 'accent6', 0.32, 12);
  };

  // ---------------------------------------------------------------- 1 cover
  d.cover({
    g: 1, title: 'Graag of houden van?', sub: 'Dire ce qu’on aime', line: 'Ik zwem graag · Ik hou van de zee',
    visual: (s) => {
      [['person-swimming', 'Ik zwem **<<graag>>**.', 1.0], ['beach-with-umbrella', 'Ik **%%hou van%%** de zee.', 3.05]].forEach(([il, t, y]) => {
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
      { icon: 'FaBicycle', h: 'Faire', t: 'Je dis ce que j’aime faire : //Ik fiets graag.//', color: GR },
      { icon: 'FaHeart', h: 'Aimer', t: 'Je dis qui ou ce que j’aime : //Ik hou van muziek.//', color: HV },
      { icon: 'FaBalanceScale', h: 'Nuancer', t: 'Je compare et je nuance : //Ik drink liever thee.//', color: VI },
    ],
    band: 'Parler de ses goûts : se présenter, faire connaissance, choisir une activité en équipe.',
  });

  // ---------------------------------------------------------------- 3 échauffement
  {
    const s = d.page({ g: 3, tag: 'ÉCHAUFFEMENT', title: 'Échauffement — Wat doe je graag?' });
    const P = [['man-office-worker', 'Karim', [['cooking', 'Ik kook **<<graag>>**.'], ['musical-notes', 'Ik **%%hou van%%** Marokkaanse muziek.']]], ['woman', 'Sofie', [['person-biking', 'Ik fiets **<<graag>>** naar het werk.'], ['beach-with-umbrella', 'Ik **%%hou van%%** de zee.']]], ['woman-red-hair', 'Lotte', [['open-book', 'Ik lees **<<graag>>**.'], ['cat', 'Ik **%%hou van%%** katten.']]]];
    const w = (12.13 - 2 * 0.25) / 3;
    P.forEach(([il, name, lines], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 3.75, { fill: 'FFFFFF', line: 'accent2', lw: 1.75, radius: 0.1, shadow: true });
      d.ill(s, il, x + 0.2, 1.85, 0.85, 0.85);
      d.t(s, `**${name}**`, x + 1.2, 1.85, w - 1.4, 0.85, { size: 22, color: 'accent2', valign: 'middle', head: true });
      lines.forEach(([li, t], k) => {
        const y = 2.95 + k * 1.2;
        d.ill(s, li, x + 0.2, y + 0.15, 0.7, 0.7);
        d.t(s, `//${t}//`, x + 1.05, y, w - 1.2, 1.0, { size: 17, valign: 'middle' });
      });
    });
    d.rect(s, 0.6, 5.65, 12.13, 1.2, { fill: 'accent1', tr: 85, line: 'accent1', lw: 1.25 });
    d.ill(s, 'thinking-face', 0.85, 5.8, 0.9, 0.9);
    d.t(s, ['Après //graag//, qu’est-ce qui vient ? Et après //houden van// ?', 'Regardez le verbe… et le nom.'], 2.0, 5.65, 10.5, 1.2, { size: 18, valign: 'middle', gap: 4 });
  }

  // ---------------------------------------------------------------- 4 graag + verbe
  d.section('Comprendre');
  {
    const s = d.page({ g: 4, tag: 'GRAMMAIRE', title: 'graag + verbe : j’aime faire' });
    const R = [[['Ik', 'n'], ['fiets', 'v'], ['graag.', 'g']], [['Sofie', 'n'], ['leest', 'v'], ['graag', 'g'], ['romans.', 'n']], [['We', 'n'], ['eten', 'v'], ['graag', 'g'], ['Italiaans.', 'n']]];
    R.forEach((r, i) => strip(s, 0.6, 1.8 + i * 0.95, r, { size: 24, h: 0.75 }));
    d.rect(s, 7.4, 1.8, 5.33, 2.65, { fill: 'EDF6F0', line: GR, lw: 1.5, radius: 0.1 });
    d.t(s, ['**Questions**', '//Wat **doe** je graag?//', '//**Speel** je graag tennis?//', '//Wat doe je graag in het weekend?//'], 7.6, 1.85, 5.0, 2.55, { size: 18, gap: 6, valign: 'middle' });
    d.rect(s, 0.6, 4.7, 12.13, 0.85, { fill: 'accent6', tr: 92, line: 'accent6', lw: 1.25, radius: 0.1 });
    d.t(s, '✗ //{{Ik graag fiets}}// → ✓ //Ik **fiets** graag// : //graag// vient **après** le verbe conjugué', 0.85, 4.7, 11.7, 0.85, { size: 20, valign: 'middle' });
    band(s, '//graag// = « volontiers » : //Ik fiets graag// = je fais du vélo volontiers = j’aime faire du vélo', 5.85, 0.9, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 5 houden van
  {
    const s = d.page({ g: 5, tag: 'GRAMMAIRE', title: 'houden van : j’aime quelqu’un, quelque chose' });
    [['musical-notes', 'Ik **%%hou van%%** muziek.'], ['people-hugging', 'Ze **%%houdt van%%** haar kinderen.'], ['beach-with-umbrella', 'We **%%houden van%%** de zee.']].forEach(([il, t], i) => {
      const x = 0.6 + i * 2.6;
      d.rect(s, x, 1.75, 2.45, 2.9, { fill: 'FFFFFF', line: HV, lw: 2, radius: 0.12, shadow: true });
      d.ill(s, il, x + 0.67, 1.95, 1.1, 1.1);
      d.t(s, `//${t}//`, x + 0.1, 3.15, 2.25, 1.35, { size: 18, align: 'center', valign: 'middle' });
    });
    d.rect(s, 8.55, 1.75, 4.18, 2.9, { fill: 'F6E3EE', line: HV, lw: 1.5, radius: 0.1 });
    d.t(s, ['//ik **hou** / **houd**//', '//jij houdt · hij houdt//', '//wij houden//', '', '//Hou je van jazz?//', '//— Ja, ik hou **ervan**!// (M23)'], 8.75, 1.8, 3.85, 2.8, { size: 17, gap: 2, valign: 'middle' });
    d.rect(s, 0.6, 4.9, 12.13, 0.8, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, 'Avec un pronom : //Ik hou van **hem** · van **haar** · van **jou**// — Question : //Waar hou je van?// (M23)', 0.85, 4.9, 11.7, 0.8, { size: 18, valign: 'middle' });
    band(s, '//houden van// = un attachement général ou fort : une personne, un lieu, un genre de musique', 5.95, 0.8, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 6 S23 aiguillage
  {
    const s = d.page({ g: 6, tag: 'GRAMMAIRE', title: 'L’aiguillage du verbe « aimer »' });
    d.rect(s, 0.6, 2.55, 2.4, 2.0, { fill: 'tx2', line: null, radius: 0.12 });
    d.t(s, '« J’aime… »', 0.6, 2.55, 2.4, 2.0, { size: 24, bold: true, color: 'bg1', align: 'center', valign: 'middle', head: true });
    const V = [['UNE ACTIVITÉ', GR, 'verbe + //graag//', '« J’aime **nager** »', 'Ik zwem **<<graag>>**.', 'person-swimming'], ['UNE PERSONNE, UNE CHOSE', HV, '//houden van// + nom', '« J’aime **Bruxelles** »', 'Ik **%%hou van%%** Brussel.', 'cityscape'], ['UN GOÛT, UNE IMPRESSION', VI, '//lekker / leuk vinden//', '« J’aime **cette soupe** »', 'Ik **##vind##** deze soep **##lekker##**.', 'face-savoring-food']];
    V.forEach(([h, c, rule, fr, nl, il], i) => {
      const y = 1.7 + i * 1.5;
      d.line(s, 3.02, 3.55, 3.75, y + 0.65, { color: c, lw: 3 });
      d.rect(s, 3.8, y, 8.93, 1.32, { fill: c, tr: 90, line: c, lw: 2, radius: 0.1 });
      d.rect(s, 3.8, y, 3.0, 1.32, { fill: c, line: null, radius: 0.1 });
      d.t(s, [`**${h}**`, rule], 3.9, y, 2.8, 1.32, { size: 14, gap: 3, color: 'bg1', valign: 'middle' });
      d.ill(s, il, 6.95, y + 0.26, 0.8, 0.8);
      d.t(s, [fr, `→ //${nl}//`], 7.9, y, 4.75, 1.32, { size: 18, gap: 4, valign: 'middle' });
    });
    band(s, 'Qu’est-ce que j’aime ? **faire** quelque chose · **quelqu’un / une chose** · **un goût**', 6.25, 0.6, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 7 graag liever het liefst
  {
    const s = d.page({ g: 7, tag: 'GRAMMAIRE', title: 'graag, liever, het liefst' });
    const P = [[0, 'graag', 1.3, 'hot-beverage', 'Ik drink **graag** koffie.', '3rd-place-medal', 'accent5'], [1, 'het liefst', 2.2, 'droplet', 'Ik drink **het liefst** water.', '1st-place-medal', VI], [2, 'liever', 1.75, 'teacup-without-handle', 'Ik drink **liever** thee.', '2nd-place-medal', GR]];
    const base = 5.35; const pw = 2.35; const px = 0.9;
    P.forEach(([k, lab, hh, il, t, med, c]) => {
      const x = px + k * (pw + 0.12);
      d.rect(s, x, base - hh, pw, hh, { fill: c, line: null, radius: 0.04 });
      d.t(s, lab, x, base - hh + 0.1, pw, 0.5, { size: 20, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
      d.ill(s, med, x + pw / 2 - 0.25, base - hh + 0.6, 0.5, 0.5);
      d.ill(s, il, x + pw / 2 - 0.45, base - hh - 1.0, 0.9, 0.9);
    });
    P.slice().sort((a, b) => [0, 2, 1].indexOf(a[0]) - [0, 2, 1].indexOf(b[0])).forEach(([, , , , t], i) => {
      d.t(s, `//${t}//`, 8.4, 2.0 + i * 0.85, 4.33, 0.7, { size: 20, valign: 'middle' });
    });
    d.rect(s, 8.4, 4.65, 4.33, 0.75, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, '//Koffie of thee? — **Liever** thee, graag!//', 8.55, 4.65, 4.1, 0.75, { size: 17, valign: 'middle' });
    band(s, 'Irrégulier, comme //goed → beter → best// (M21) · //Ik werk liever ’s ochtends dan ’s avonds.//', 5.75, 0.95, 'tx2', 16);
  }

  // ---------------------------------------------------------------- 8 niet graag
  {
    const s = d.page({ g: 8, tag: 'GRAMMAIRE', title: 'niet graag, niet houden van' });
    [['ACTIVITÉ', GR, ['//Ik werk **!!niet!! graag** op zaterdag.//', '//Ik sta **!!niet!! graag** vroeg op.//'], 'persevering-face'], ['PERSONNE, CHOSE', HV, ['//Ik hou **!!niet!!** van spinnen.//', '//Ik hou **!!helemaal niet!!** van regen.//'], 'unamused-face']].forEach(([h, c, lines, il], i) => {
      const x = 0.6 + i * 6.21; const w = 5.92;
      d.rect(s, x, 1.7, w, 2.6, { fill: 'bg1', line: c, lw: 2, radius: 0.1, shadow: true });
      d.rect(s, x, 1.7, w, 0.55, { fill: c, line: null, radius: 0.1 });
      d.t(s, h, x + 0.2, 1.7, w - 0.4, 0.55, { size: 16, bold: true, color: 'bg1', valign: 'middle', cs: 2 });
      d.ill(s, il, x + w - 1.0, 2.45, 0.75, 0.75);
      d.t(s, lines, x + 0.25, 2.35, w - 1.4, 1.85, { size: 20, gap: 10, valign: 'middle' });
    });
    const E = [['helemaal niet graag', 'accent6'], ['niet graag', 'E8A090'], ['graag', GR], ['liever', '1F6B3F'], ['het liefst', '17375E']];
    const ew = (12.13 - 4 * 0.08) / 5;
    E.forEach(([t, c], i) => {
      const x = 0.6 + i * (ew + 0.08);
      d.rect(s, x, 4.55, ew, 0.7, { fill: c, line: null, radius: 0.08 });
      d.t(s, `//**${t}**//`, x, 4.55, ew, 0.7, { size: 17, color: 'bg1', align: 'center', valign: 'middle' });
    });
    d.t(s, '◀ je n’aime pas                                                                     j’aime le plus ▶', 0.6, 5.3, 12.13, 0.4, { size: 13, italic: true, color: 'accent5', align: 'center' });
    band(s, '//niet// se place juste **avant** //graag// (M13) · avec //houden van// : //niet// avant la préposition', 5.9, 0.85, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 9 lekker, leuk, dol
  {
    const s = d.page({ g: 9, tag: 'VOCABULAIRE', title: 'lekker, leuk vinden et dol zijn op' });
    const C = [['fork-and-knife-with-plate', 'lekker vinden', 'nourriture, boisson', 'Ik vind deze soep **##lekker##**.', VI], ['admission-tickets', 'leuk vinden', 'activité, film, personne', 'Ik vind voetbal **##leuk##**. · Ik vind Sofie **##leuk##**.', 'accent2'], ['smiling-face-with-hearts', 'dol zijn op', 'adorer (aussi : //gek zijn op//)', 'Ik ben **%%dol op%%** chocolade.', HV]];
    const w = (12.13 - 2 * 0.25) / 3;
    C.forEach(([il, h, sub, ex, c], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.75, w, 3.6, { fill: 'bg1', line: c, lw: 2, radius: 0.1, shadow: true });
      d.ill(s, il, x + w / 2 - 0.5, 1.95, 1.0, 1.0);
      d.t(s, `//**${h}**//`, x + 0.15, 3.0, w - 0.3, 0.5, { size: 22, color: c, align: 'center', valign: 'middle' });
      d.t(s, sub, x + 0.15, 3.45, w - 0.3, 0.4, { size: 14, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
      d.t(s, `//${ex}//`, x + 0.15, 3.9, w - 0.3, 1.3, { size: 17, align: 'center', valign: 'middle' });
    });
    d.rect(s, 0.6, 5.55, 12.13, 0.65, { fill: 'accent6', tr: 92, line: 'accent6', lw: 1.25, radius: 0.1 });
    d.t(s, '✗ //{{Deze soep is leuk}}// : une soupe n’est pas « sympa » → //Deze soep is **lekker**.//', 0.85, 5.55, 11.7, 0.65, { size: 18, valign: 'middle' });
    d.t(s, '//Ik vind Sofie leuk// peut vouloir dire « Sofie me plaît » : au bureau, préférez //aardig// (gentille).', 0.6, 6.3, 12.13, 0.5, { size: 15, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  }

  // ---------------------------------------------------------------- 10 piège
  {
    const s = d.page({ g: 10, tag: 'PIÈGE FR ≠ NL', title: 'PIÈGE : un seul « aimer » en français' });
    trapFrame(s, 4.4);
    const R = [['« J’aime nager »', 'Ik graag zwem', 'Ik zwem **<<graag>>**'], ['« J’aime le café »', null, 'Ik drink graag koffie · Ik hou van koffie · Ik vind koffie lekker'], ['« Je t’aime »', null, 'Ik **%%hou van%%** je'], ['« Je t’aime bien »', 'Ik hou van je', 'Ik vind je **##leuk##** / **##aardig##**'], ['« J’aimerais un café »', null, 'Ik wil **<<graag>>** een koffie (M29)']];
    R.forEach(([fr, ko, ok], i) => {
      const y = 2.3 + i * 0.75;
      d.t(s, fr, 0.95, y, 3.3, 0.66, { size: 17, valign: 'middle' });
      if (ko) d.t(s, `✗ //{{${ko}}}//`, 4.3, y, 2.7, 0.66, { size: 15, color: 'accent6', valign: 'middle' });
      d.line(s, 7.05, y + 0.33, 7.4, y + 0.33, { color: 'accent3', lw: 2 });
      d.rect(s, 7.45, y + 0.04, 5.1, 0.58, { fill: 'accent3', tr: 88, line: 'accent3', lw: 1.5, radius: 0.1 });
      d.t(s, `✓ //${ok}//`, 7.6, y + 0.04, 4.9, 0.58, { size: 16, valign: 'middle', fit: true, max: 17, min: 11 });
    });
    band(s, '//Ik hou van je// est fort (partenaire, enfants). Au bureau : //Ik vind mijn collega’s leuk / aardig.//', 6.25, 0.62, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 11 politesse
  {
    const s = d.page({ g: 11, tag: 'MISE EN SITUATION', title: 'graag dans la politesse' });
    const L = [['person-tipping-hand', 'Ober', 'Wat mag het zijn?', 0, ''], ['man-office-worker', 'Karim', 'Ik wil **<<graag>>** een koffie.', 1, 'je voudrais'], ['person-tipping-hand', 'Ober', 'Met melk?', 0, ''], ['man-office-worker', 'Karim', 'Ja, **<<graag>>**!', 1, 'oui, volontiers'], ['man-office-worker', 'Karim', 'Dank u wel!', 1, ''], ['person-tipping-hand', 'Ober', '**<<Graag gedaan>>**!', 0, 'avec plaisir / de rien']];
    L.forEach(([il, who, t, side, gl], i) => {
      const y = 1.7 + i * 0.72;
      if (!side) { d.ill(s, il, 0.6, y, 0.62, 0.62); d.bubble(s, `**${who}** · //${t}//`, 1.35, y, 5.6, 0.62, 'accent2', { size: 16 }); }
      else { d.ill(s, il, 7.6, y, 0.62, 0.62); d.bubble(s, `**${who}** · //${t}//`, 1.9, y, 5.6, 0.62, GR, { size: 16 }); }
      if (gl) d.t(s, `→ ${gl}`, 8.4, y, 4.33, 0.62, { size: 15, italic: true, color: 'accent5', valign: 'middle' });
    });
    d.ill(s, 'hot-beverage', 11.6, 1.75, 1.0, 1.0);
    band(s, 'Belgique : on entend aussi //Ik had graag een koffie// (je voudrais) — voir M29', 6.15, 0.68, 'tx2', 18);
  }

  // ---------------------------------------------------------------- 12 place
  {
    const s = d.page({ g: 12, tag: 'GRAMMAIRE', title: 'La place de graag dans la phrase' });
    const R = [[['Ik', 'n'], ['wil', 'v'], ['graag', 'g'], ['een koffie', 'n'], ['bestellen.', 'v2']], [['Ik', 'n'], ['heb', 'v'], ['dat', 'n'], ['graag', 'g'], ['gedaan.', 'v2']], [['Ik', 'n'], ['ga', 'v'], ['graag', 'g'], ['naar de film.', 'n']], [['In het weekend', 'n'], ['fiets', 'v'], ['ik', 'n'], ['graag.', 'g']], [['…, omdat', 'n'], ['ik', 'n'], ['graag', 'g'], ['fiets.', 'v']]];
    R.forEach((r, i) => strip(s, 0.6, 1.75 + i * 0.82, r, { size: 21, h: 0.66 }));
    d.rect(s, 9.3, 1.75, 3.43, 3.94, { fill: 'EDF6F0', line: GR, lw: 1.5, radius: 0.1 });
    d.t(s, ['**Comme //niet//** (M13)', 'après le verbe conjugué (et le sujet inversé)', 'avant le complément et le 2ᵉ verbe', '', '//Ik heb dat graag gedaan// = je l’ai fait avec plaisir'], 9.45, 1.85, 3.15, 3.75, { size: 15, gap: 4, valign: 'middle' });
    band(s, 'Subordonnée : //graag// reste devant le verbe, qui part à la fin (M9) : //…, omdat ik graag fiets.//', 6.05, 0.75, 'tx2', 17);
  }

  // ---------------------------------------------------------------- 13 à retenir
  {
    const s = d.page({ g: 13, tag: 'À RETENIR', title: 'À retenir : l’aiguillage du verbe « aimer »' });
    const C = [['activité', GR, 'verbe + //graag//', '//Ik lees **graag**.//'], ['personne / chose', HV, '//houden van// + nom', '//Ik **hou van** muziek.//'], ['goût / impression', VI, '//lekker / leuk vinden//', '//Ik vind de soep **lekker**.//']];
    const w = (12.13 - 2 * 0.25) / 3;
    C.forEach(([h, c, rule, ex], i) => {
      const x = 0.6 + i * (w + 0.25);
      d.rect(s, x, 1.7, w, 1.9, { fill: 'bg1', line: c, lw: 2, radius: 0.1 });
      d.rect(s, x, 1.7, w, 0.55, { fill: c, line: null, radius: 0.1 });
      d.t(s, h.toUpperCase(), x, 1.7, w, 0.55, { size: 15, bold: true, color: 'bg1', align: 'center', valign: 'middle', cs: 2 });
      d.t(s, [rule, ex], x + 0.15, 2.3, w - 0.3, 1.25, { size: 18, gap: 4, align: 'center', valign: 'middle' });
    });
    const E = ['niet graag', 'graag', 'liever', 'het liefst'];
    E.forEach((t, i) => {
      const x = 0.6 + i * 3.06;
      d.rect(s, x, 3.85, 2.9, 0.6, { fill: GR, tr: 80 - i * 15, line: GR, lw: 1, radius: 0.08 });
      d.t(s, `//**${t}**//`, x, 3.85, 2.9, 0.6, { size: 18, align: 'center', valign: 'middle' });
    });
    d.t(s, '+ //dol zijn op// (adorer)', 0.6, 4.5, 12.13, 0.4, { size: 15, italic: true, color: 'accent5', align: 'center' });
    d.rect(s, 0.6, 5.05, 12.13, 0.85, { fill: 'bg2', line: BORDER, radius: 0.1 });
    d.t(s, 'Politesse : //Ja, graag! · Graag gedaan! · Ik wil graag…// · Place : comme //niet//', 0.85, 5.05, 11.7, 0.85, { size: 19, valign: 'middle', align: 'center' });
    d.icon(s, 'FaCamera', 'accent5', 12.3, 1.05, 0.38);
  }

  // ---------------------------------------------------------------- 14 divider
  d.divider({ g: 14, tiles: [
    ['graag ou houden van ?', '★', 'FaCodeBranch'], ['Le podium', '★', 'FaTrophy'], ['Traduisez « aimer »', '★★', 'FaLanguage'], ['Le détective', '★★', 'FaSearch'],
    ['Remettez en ordre', '★★', 'FaListOl'], ['Zoek iemand die…', '★', 'FaUsers'], ['La sortie d’équipe', '★★★', 'FaGlassCheers'],
  ] });

  // ---------------------------------------------------------------- 15 ex1
  const ex1 = [['open-book', 'Ik lees [[graag]].'], ['cityscape', 'Ik [[hou van]] Brussel.'], ['cooking', 'Karim kookt [[graag]] voor zijn vrienden.'], ['people-hugging', 'Sofie [[houdt van]] haar kinderen.'], ['evergreen-tree', 'We wandelen [[graag]] in het bos.'], ['musical-notes', '[[Hou]] jij [[van]] jazz?'], ['musical-keyboard', 'Lotte speelt [[graag]] piano.'], ['sun', 'Ik [[hou van]] de zomer.']];
  d.ex({ g: 15, title: 'Exercice 1 — graag ou houden van ?', stars: '★', instr: 'Complétez avec //graag// ou //houden van// (conjugué). Activité ou nom ?' }, (s, mode, top) => {
    const rh = (6.88 - top) / 4; const cw = (12.13 - 0.3) / 2;
    ex1.forEach(([il, t], i) => {
      const c = Math.floor(i / 4); const r = i % 4;
      const x = 0.6 + c * (cw + 0.3); const y = top + r * rh;
      d.rect(s, x, y + 0.06, cw, rh - 0.12, { fill: r % 2 ? 'bg1' : 'bg2', line: BORDER, lw: 0.75, radius: 0.08 });
      d.t(s, `**${i + 1}**`, x + 0.12, y + 0.06, 0.4, rh - 0.12, { size: 17, color: 'accent5', valign: 'middle' });
      d.ill(s, il, x + 0.5, y + (rh - 0.6) / 2, 0.6, 0.6);
      d.t(s, `//${t}//`, x + 1.25, y + 0.06, cw - 1.35, rh - 0.12, { size: 20, mode, valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 16 ex2 podium
  const ex2 = [[['koffie', 'thee', 'water'], 'drinken', 'Ik drink graag koffie, liever thee en het liefst water.'], [['de bus', 'de trein', 'de fiets'], 'nemen', 'Ik neem graag de bus, liever de trein en het liefst de fiets.'], [['tv kijken', 'lezen', 'wandelen'], '', 'Ik kijk graag tv, ik lees liever en ik wandel het liefst.'], [['Gent', 'Brugge', 'Antwerpen'], 'bezoeken', 'Ik bezoek graag Gent, liever Brugge en het liefst Antwerpen.'], [['vis', 'kip', 'pasta'], 'eten', 'Ik eet graag vis, liever kip en het liefst pasta.']];
  d.ex({ g: 16, title: 'Exercice 2 — Le podium', stars: '★', instr: 'Faites une phrase avec //graag// (bronze), //liever// (argent) et //het liefst// (or).' }, (s, mode, top) => {
    const rh = (6.88 - top) / 5;
    ex2.forEach(([items, v, a], i) => {
      const y = top + i * rh;
      const meds = ['3rd-place-medal', '2nd-place-medal', '1st-place-medal'];
      items.forEach((it, k) => {
        const x = 0.6 + k * 1.75;
        d.ill(s, meds[k], x, y + (rh - 0.42) / 2, 0.42, 0.42);
        d.t(s, `//${it}//`, x + 0.45, y, 1.3, rh, { size: 15, valign: 'middle' });
      });
      if (v) d.chip(s, v, 5.9, y + rh / 2 - 0.16, 'accent5', 0.32, 11);
      d.rect(s, 7.05, y + 0.06, 5.68, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${a}//`, 7.15, y + 0.06, 5.5, rh - 0.12, { size: 14, bold: true, color: 'accent3', valign: 'middle', fit: true, max: 15, min: 11 });
    });
  });

  // ---------------------------------------------------------------- 17 ex3 traduisez
  const ex3 = [['J’aime cuisiner.', 'Ik kook graag.'], ['J’aime Anvers.', 'Ik hou van Antwerpen.'], ['Ce gâteau, je l’aime bien (il est bon).', 'Ik vind deze taart lekker.'], ['Je n’aime pas travailler le samedi.', 'Ik werk niet graag op zaterdag.'], ['J’adore le chocolat.', 'Ik ben dol op chocolade.'], ['Je préfère le thé.', 'Ik drink liever thee.']];
  d.ex({ g: 17, title: 'Exercice 3 — Traduisez « aimer »', stars: '★★', instr: 'Traduisez. Suivez l’aiguillage : activité, personne / chose ou goût ?' }, (s, mode, top) => {
    const rh = (6.88 - top) / 6;
    ex3.forEach(([fr, nl], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'accent5', 13);
      d.rect(s, 1.1, y + 0.05, 5.4, rh - 0.12, { fill: 'bg2', line: BORDER });
      d.t(s, fr, 1.25, y + 0.05, 5.2, rh - 0.12, { size: 17, valign: 'middle' });
      d.line(s, 6.6, y + rh / 2, 7.1, y + rh / 2, { color: 'accent1', lw: 2.5 });
      d.rect(s, 7.15, y + 0.05, 5.58, rh - 0.12, { fill: mode === 'a' ? 'EDF6F0' : 'bg1', line: mode === 'a' ? 'accent3' : BORDER, lw: 1.25 });
      if (mode === 'a') d.t(s, `//${nl}//`, 7.3, y + 0.05, 5.35, rh - 0.12, { size: 18, bold: true, color: 'accent3', valign: 'middle' });
    });
  });

  // ---------------------------------------------------------------- 18 ex4 détective
  d.ex({ g: 18, title: 'Exercice 4 — Le détective', stars: '★★', instr: 'Lotte se présente sur l’intranet. Trouvez les 5 erreurs.' }, (s, mode, top) => {
    const h = 6.88 - top;
    d.rect(s, 0.6, top, 9.0, h, { fill: 'FFFFFF', line: 'accent5', lw: 1.25, shadow: true });
    d.rect(s, 0.6, top, 9.0, 0.5, { fill: 'E6EBF2', line: null, radius: 0.04 });
    d.t(s, 'Intranet Peeters & Co · Over mij · Lotte Claes', 0.85, top, 8.5, 0.5, { size: 13, color: 'accent5', valign: 'middle' });
    const txt = '//Hallo! Ik ben Lotte, de nieuwe stagiaire. {{Ik graag lees}}++ Ik lees graag++ detectives. {{Ik houd muziek}}++ Ik houd van muziek++, vooral jazz. Ik drink {{meer graag}}++ liever++ thee dan koffie. Ik vind de soep van de kantine heel {{leuk}}++ lekker++! {{Ik heb niet graag sport.}}++ Ik sport niet graag.++ Ik hou van mijn katten Pip en Pluis. Tot snel!//';
    d.t(s, txt, 0.95, top + 0.7, 8.3, h - 0.9, { size: 19, mode, ls: 1.2, valign: 'top' });
    d.ill(s, 'magnifying-glass-tilted-left', 10.4, top + 0.1, 1.6, 1.6);
    d.rect(s, 9.9, top + 1.95, 2.83, 0.9, { fill: 'accent6', line: null });
    d.t(s, mode === 'q' ? '5 erreurs ?' : '5 erreurs ✓', 9.9, top + 1.95, 2.83, 0.9, { size: 22, bold: true, color: 'bg1', align: 'center', valign: 'middle' });
    if (mode === 'a') d.t(s, 'Leurre : //Ik hou van mijn katten// est correct. Aussi : //Ik doe niet graag aan sport.//', 9.9, top + 3.05, 2.83, 1.9, { size: 14, italic: true, color: 'accent5' });
  });

  // ---------------------------------------------------------------- 19 ex5 ordre
  const ex5 = [[['graag', 'ga', 'naar de film', 'ik'], 'Ik ga graag naar de film.'], [['gedaan', 'heeft', 'graag', 'dat', 'Karim'], 'Karim heeft dat graag gedaan.'], [['liever', 'wij', 'eten', 'vis'], 'Wij eten liever vis.'], [['een koffie', 'graag', 'wil', 'Sofie'], 'Sofie wil graag een koffie.'], [['van', 'jij', 'jazz', 'hou', '?'], 'Hou jij van jazz?']];
  d.ex({ g: 19, title: 'Exercice 5 — Remettez en ordre', stars: '★★', instr: 'Remettez les mots dans l’ordre. Où va //graag// ?' }, (s, mode, top) => {
    const rh = (6.88 - top) / 5;
    ex5.forEach(([parts, a], i) => {
      const y = top + i * rh;
      d.num(s, i + 1, 0.6, y + (rh - 0.4) / 2, 0.4, 'tx2', 13);
      if (mode === 'q') {
        let x = 1.2;
        parts.forEach((p, k) => {
          const w = 0.45 + p.length * 0.15;
          d.rect(s, x, y + 0.14, w, rh - 0.28, { fill: 'FFFFFF', line: 'accent1', lw: 1.25, radius: 0.1, rotate: [-2, 1, 2, -1, 0][k % 5] });
          d.t(s, `//${p}//`, x, y + 0.14, w, rh - 0.28, { size: 18, align: 'center', valign: 'middle' });
          x += w + 0.25;
        });
      } else {
        d.rect(s, 1.2, y + 0.07, 11.53, rh - 0.14, { fill: 'EDF6F0', line: 'accent3', lw: 1.25 });
        d.t(s, `//**${a}**//`, 1.35, y + 0.07, 11.3, rh - 0.14, { size: 21, color: 'accent3', valign: 'middle' });
      }
    });
  });

  // ---------------------------------------------------------------- 20 ex6 zoek iemand die
  {
    const s = d.page({ g: 20, tag: 'JIJ NU !', title: 'Exercice 6 — Zoek iemand die…', stars: '★' });
    const G = [['cooking', '… graag kookt'], ['cat', '… van katten houdt'], ['teacup-without-handle', '… liever thee drinkt'], ['alarm-clock', '… niet graag vroeg opstaat'], ['chocolate-bar', '… dol is op chocolade'], ['person-biking', '… het liefst fietst'], ['woman-dancing', '… graag danst'], ['cloud-with-rain', '… van regen houdt'], ['open-book', '… graag leest']];
    const cw = 2.55; const chh = 1.5;
    G.forEach(([il, t], i) => {
      const x = 0.6 + (i % 3) * (cw + 0.1); const y = 1.75 + Math.floor(i / 3) * (chh + 0.1);
      d.rect(s, x, y, cw, chh, { fill: 'FFFFFF', line: 'accent2', lw: 1.5, radius: 0.08 });
      d.ill(s, il, x + 0.12, y + 0.12, 0.55, 0.55);
      d.t(s, `//**${t}**//`, x + 0.1, y + 0.65, cw - 0.2, 0.45, { size: 14, align: 'center', valign: 'middle' });
      d.line(s, x + 0.3, y + chh - 0.25, x + cw - 0.3, y + chh - 0.25, { color: BORDER, lw: 1, arrow: false, dash: 'dash' });
    });
    d.ill(s, 'magnifying-glass-tilted-left', 8.8, 1.75, 0.8, 0.8);
    d.t(s, 'Bingo!', 9.7, 1.75, 3.0, 0.8, { size: 28, bold: true, color: 'accent2', head: true, valign: 'middle' });
    d.t(s, ['**1.** Posez la question : //Kook je graag? · Hou je van katten?//', '**2.** « //Ja!// » : écrivez le prénom sur la ligne.', '**3.** Une ligne complète : //Bingo!// — présentez vos trouvailles : //Karim kookt graag.//'], 8.8, 2.75, 3.93, 3.6, { size: 15, gap: 10 });
  }

  // ---------------------------------------------------------------- 21 ex7 sortie d'équipe
  d.roleplay({
    g: 21, title: 'Exercice 7 — La sortie d’équipe',
    scenario: 'An organise une sortie d’équipe. Chacun dit ce qu’il aime, ce qu’il préfère et ce qu’il n’aime pas. Puis l’équipe vote.',
    a: '**An** (la cheffe) : présentez les activités et demandez l’avis de chacun : //Wat doe je graag?//',
    b: '**Un membre de l’équipe** : donnez vos préférences et justifiez : //Ik … liever …, want…//',
    bank: '//Wat doe je graag? · Ik hou van… · Ik … liever … · Ik vind … leuk. · Ik … niet graag … · Het liefst … · We kiezen …, want we … allemaal graag.//',
    doc: (s, x, y, w, h) => {
      d.rect(s, x, y, w, h, { fill: 'FFFFFF', line: 'accent5', lw: 1, radius: 0.04, shadow: true });
      d.rect(s, x, y, w, 0.5, { fill: 'accent3', line: null, radius: 0.04 });
      d.t(s, 'TEAMUITSTAP · STEM!', x + 0.15, y, w - 0.3, 0.5, { size: 12, bold: true, color: 'bg1', valign: 'middle', cs: 1 });
      const A = [['bowling', 'bowling', '€ 15 · 2 uur'], ['cooking', 'kookworkshop', '€ 45 · 3 uur'], ['locked', 'escape room', '€ 25 · 1 uur'], ['evergreen-tree', 'wandeling in het Zoniënwoud', 'gratis · 3 uur']];
      const ch = (h - 0.7) / 4;
      A.forEach(([il, t, info], i) => {
        const yy = y + 0.6 + i * ch;
        d.rect(s, x + 0.1, yy, w - 0.2, ch - 0.1, { fill: 'bg2', line: BORDER, radius: 0.08 });
        d.ill(s, il, x + 0.2, yy + (ch - 0.1 - 0.6) / 2, 0.6, 0.6);
        d.t(s, [`//**${t}**//`, info], x + 0.9, yy, w - 1.05, ch - 0.1, { size: 12, gap: 1, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 22 ticket
  d.ticket({
    g: 22,
    q: ['Traduisez : « J’aime lire. »', 'Traduisez : « J’aime la musique. »', 'Complétez : //Koffie of thee? — ……… thee!//'],
    self: ['Faire', 'Aimer', 'Nuancer'],
    teaser: { icon: 'FaUserFriends', text: '**Volgende keer : Zich of elkaar?** — //Hij wast zich · Ze helpen elkaar.//' },
  });
}

module.exports = { meta, build };
