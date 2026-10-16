// Génère les fiches différenciées en HTML puis en PDF (Chromium via Playwright).
// Usage : node build.js            -> toutes les fiches + parcours + dossier complet
//         node build.js 2          -> seulement la fiche 2
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { fiche, htmlDoc } = require('./lib');
const parcours = require('./parcours');

const OUT = path.resolve(__dirname, '..');
const FICHES = [1, 2, 3, 4, 5].map((n) => require(`./fiches/f${n}.js`));
const FILES = {
  1: '01_Op_het_werk',
  2: '02_De_weg_vragen',
  3: '03_Aan_de_telefoon',
  4: '04_Formele_e-mail',
  5: '05_Sollicitatiegesprek',
};

const bodyOf = (html) => html.replace(/^[\s\S]*<body>/, '').replace(/<\/body>[\s\S]*$/, '');

async function toPdf(browser, html, file) {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await page.close();
}

(async () => {
  const only = process.argv[2] ? Number(process.argv[2]) : null;
  fs.mkdirSync(path.join(OUT, 'html'), { recursive: true });
  fs.mkdirSync(path.join(OUT, 'pdf'), { recursive: true });
  const browser = await chromium.launch();
  const all = [];

  if (!only) {
    const html = parcours();
    fs.writeFileSync(path.join(OUT, 'html', '00_Parcours.html'), html);
    await toPdf(browser, html, path.join(OUT, 'pdf', '00_Parcours.pdf'));
    all.push(bodyOf(html));
  }
  for (const f of FICHES) {
    if (only && f.no !== only) continue;
    const html = fiche(f);
    fs.writeFileSync(path.join(OUT, 'html', `${FILES[f.no]}.html`), html);
    await toPdf(browser, html, path.join(OUT, 'pdf', `${FILES[f.no]}.pdf`));
    all.push(bodyOf(html));
    console.log('✓', FILES[f.no]);
  }
  if (!only) {
    await toPdf(browser, htmlDoc('Dossier complet', all.join('')), path.join(OUT, 'pdf', 'Dossier_complet_5_fiches.pdf'));
    console.log('✓ Dossier complet');
  }
  await browser.close();
})();
