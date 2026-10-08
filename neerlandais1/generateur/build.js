const fs = require('fs');
const path = require('path');
const { Deck, renderIcons } = require('./lib');

(async () => {
  const only = process.argv.slice(2);
  const outDir = process.env.OUT || path.join(__dirname, '..', 'powerpoints');
  fs.mkdirSync(outDir, { recursive: true });
  // numbered modules (m1.js … m24.js) first, then the extra decks (e.g. uitspraak.js)
  const all = fs.readdirSync(path.join(__dirname, 'modules')).filter((f) => f.endsWith('.js'));
  const num = all.filter((f) => /^m\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(1), 10) - parseInt(b.slice(1), 10));
  const files = [...num, ...all.filter((f) => !num.includes(f)).sort()];
  const key = (f) => (/^m\d+\.js$/.test(f) ? String(parseInt(f.slice(1), 10)) : f.replace(/\.js$/, ''));
  for (const f of files) {
    if (only.length && !only.includes(key(f))) continue;
    const mod = require('./modules/' + f);
    // pass 1 records the icons the module needs; pass 2 builds with rendered icons
    mod.build(new Deck(mod.meta));
    await renderIcons();
    const d = new Deck(mod.meta);
    mod.build(d);
    const missing = Object.keys(d.G).map(Number).filter((n) => !d.used.has(n));
    if (missing.length) console.warn(`  ! template slides not used in ${f}: ${missing.join(', ')}`);
    const name = mod.meta.file || `Module_${mod.meta.n}_${mod.meta.slug}.pptx`;
    // a deck may live outside neerlandais1 (meta.outDir, relative to this folder) unless OUT is forced
    const dir = !process.env.OUT && mod.meta.outDir ? path.join(__dirname, mod.meta.outDir) : outDir;
    fs.mkdirSync(dir, { recursive: true });
    await d.save(path.join(dir, name));
    console.log(`${name}: ${d.pres.slides.length} slides`);
  }
})().catch((e) => { console.error(e); process.exit(1); });
