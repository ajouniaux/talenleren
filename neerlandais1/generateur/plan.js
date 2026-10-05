// Plan du rez-de-chaussée de Peeters & Co (schéma S27) — partagé par M30 et M31.
// floorPlan(d, s, x, y, w, h, o) dessine le plan et renvoie les points d'ancrage
// (centres des pièces, portes, entrée…) pour tracer un trajet par-dessus.
//   o.label(key) → texte de la pièce (ou null pour la laisser vide)
//   o.num(key)   → numéro à afficher dans la pièce (ou null)
//   o.size       → taille du texte des pièces
//   o.icons      → petites illustrations dans les pièces
const ROOMS = {
  top: [['vergaderzaal', 'de vergaderzaal', 'busts-in-silhouette'], ['kopieerlokaal', 'het kopieerlokaal', 'printer'], ['toiletten', 'de toiletten', 'toilet']],
  bottom: [['kantoor', 'het kantoor', 'desktop-computer'], ['keuken', 'de keuken', 'hot-beverage'], ['refter', 'de refter', 'fork-and-knife-with-plate']],
};
const ALL = { onthaal: 'het onthaal', parking: 'de parking', trap: 'de trap', lift: 'de lift', gang: 'de gang', ingang: 'de ingang' };
ROOMS.top.concat(ROOMS.bottom).forEach(([k, l]) => { ALL[k] = l; });

function floorPlan(d, s, x, y, w, h, o = {}) {
  const size = o.size || 12;
  const label = o.label || ((k) => ALL[k]);
  const num = o.num || (() => null);
  const pw = w * 0.15; // parking (dehors, à gauche)
  const bx = x + pw + 0.12; const bw = x + w - bx;
  const c0 = bw * 0.17; const cw = bw * 0.24; const c4 = bw - c0 - 3 * cw;
  const rh = h * 0.38; const gy = y + rh; const gh = h - 2 * rh;
  const A = {};
  // dehors : le parking
  d.rect(s, x, y + h * 0.35, pw, h * 0.65, { fill: 'E6EBF2', line: 'accent5', lw: 1, dash: 'dash', radius: 0.04 });
  if (o.icons !== false) d.ill(s, 'p-button', x + pw / 2 - 0.2, y + h * 0.42, 0.4, 0.4);
  const pl = label('parking');
  if (pl) d.t(s, pl, x, y + h * 0.42 + 0.42, pw, 0.5, { size: size - 1, align: 'center', valign: 'top', italic: true, color: 'accent5' });
  A.parking = [x + pw / 2, y + h * 0.82];
  // le bâtiment
  d.rect(s, bx, y, bw, h, { fill: 'FFFFFF', line: 'tx2', lw: 2.5, radius: 0 });
  // le couloir
  d.rect(s, bx + c0, gy, bw - c0, gh, { fill: 'EEF1F6', line: null, radius: 0 });
  const gl = label('gang');
  if (gl) d.t(s, gl, bx + c0 + cw, gy, cw, gh, { size: size - 1, italic: true, color: 'accent5', align: 'center', valign: 'middle' });
  A.gang = [bx + c0 + 0.15, gy + gh / 2];
  A.gangEnd = [bx + c0 + 3 * cw - 0.1, gy + gh / 2];
  // l'accueil (zone ouverte à gauche)
  d.rect(s, bx, y, c0, h, { fill: 'FDF1E6', line: null, radius: 0 });
  d.rect(s, bx + c0 * 0.18, gy - gh * 0.55, c0 * 0.22, gh * 2.1, { fill: 'accent1', tr: 35, line: null, radius: 0.04 });
  const ol = label('onthaal');
  if (ol) d.t(s, ol, bx + 0.04, y + 0.06, c0 - 0.08, rh * 0.8, { size: size - 1, bold: true, color: 'accent1', align: 'center', valign: 'top' });
  if (num('onthaal')) d.num(s, num('onthaal'), bx + c0 / 2 - 0.17, y + rh * 0.5, 0.34, 'tx2', 11);
  A.onthaal = [bx + c0 * 0.6, gy + gh / 2];
  // l'entrée (ouverture dans le mur gauche)
  d.rect(s, bx - 0.05, gy + gh * 0.15, 0.1, gh * 0.7, { fill: 'FFFFFF', line: null, radius: 0 });
  A.ingang = [bx, gy + gh / 2];
  // les pièces
  ['top', 'bottom'].forEach((row) => {
    ROOMS[row].forEach(([k, , il], i) => {
      const rx = bx + c0 + i * cw; const ry = row === 'top' ? y : gy + gh;
      d.rect(s, rx, ry, cw, rh, { fill: 'FFFFFF', line: 'tx2', lw: 1.5, radius: 0 });
      // la porte, côté couloir
      const dx = rx + cw * 0.35; const dy = row === 'top' ? ry + rh : ry;
      d.rect(s, dx, dy - 0.04, cw * 0.3, 0.08, { fill: 'EEF1F6', line: null, radius: 0 });
      const lab = label(k);
      if (o.icons !== false) d.ill(s, il, rx + cw / 2 - 0.19, ry + (row === 'top' ? 0.1 : rh - 0.48), 0.38, 0.38, { tr: lab ? 0 : 30 });
      if (lab) {
        const noIc = o.icons === false;
        d.t(s, lab, rx + 0.04, ry + (noIc ? 0.03 : row === 'top' ? 0.48 : 0.05), cw - 0.08, rh - (noIc ? 0.06 : 0.55), { size, align: 'center', valign: 'middle' });
      }
      const n = num(k);
      if (n) d.num(s, n, rx + 0.08, ry + (row === 'top' ? rh - 0.42 : 0.08), 0.34, 'tx2', 11);
      A[k] = [rx + cw / 2, ry + rh / 2];
      A[k + 'Door'] = [dx + cw * 0.15, row === 'top' ? dy + 0.02 : dy - 0.02];
    });
  });
  // escalier et ascenseur au fond
  const ex = bx + c0 + 3 * cw;
  d.rect(s, ex, y, c4, h * 0.5, { fill: 'FFFFFF', line: 'tx2', lw: 1.5, radius: 0 });
  for (let k = 1; k < 7; k++) d.line(s, ex + 0.05, y + (h * 0.5 * k) / 7, ex + c4 - 0.05, y + (h * 0.5 * k) / 7, { color: 'accent5', lw: 1, arrow: false });
  d.rect(s, ex, y + h * 0.5, c4, h * 0.5, { fill: 'F1EBF8', line: 'tx2', lw: 1.5, radius: 0 });
  if (o.icons !== false) d.ill(s, 'elevator', ex + c4 / 2 - 0.19, y + h * 0.5 + 0.1, 0.38, 0.38);
  const tl = label('trap'); const ll = label('lift');
  if (tl) d.t(s, tl, ex, y + h * 0.5 - 0.42, c4, 0.38, { size: size - 1, bold: true, align: 'center', valign: 'middle', color: 'tx2' });
  if (ll) d.t(s, ll, ex, y + h - 0.45, c4, 0.4, { size: size - 1, bold: true, align: 'center', valign: 'middle', color: 'tx2' });
  if (num('lift')) d.num(s, num('lift'), ex + c4 / 2 - 0.17, y + h * 0.5 + 0.55, 0.34, 'tx2', 11);
  A.trap = [ex + c4 / 2, y + h * 0.25];
  A.lift = [ex + c4 / 2, y + h * 0.75];
  A.box = { x, y, w, h, bx, bw, c0, cw, gy, gh };
  return A;
}

// trajet en pointillés orange, étapes numérotées
function route(d, s, pts, o = {}) {
  const c = o.color || 'accent1';
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i]; const [x2, y2] = pts[i + 1];
    d.line(s, x1, y1, x2, y2, { color: c, lw: o.lw || 3, dash: 'dash', arrow: i === pts.length - 2 || (o.marks || []).includes(i + 1) ? 'triangle' : false });
  }
  (o.steps || []).forEach(([n, px, py]) => d.num(s, n, px - 0.16, py - 0.16, 0.32, c, 10));
}

module.exports = { floorPlan, route, ALL };
