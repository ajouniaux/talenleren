const fs = require('fs');
const path = require('path');
const { Deck, renderIcons } = require('./lib');

(async () => {
  const only = process.argv.slice(2).map(Number);
  const outDir = process.env.OUT || path.join(__dirname, '..', 'powerpoints');
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(path.join(__dirname, 'modules')).filter((f) => /^m\d\.js$/.test(f)).sort();
  for (const f of files) {
    if (only.length && !only.includes(Number(f.slice(1, 2)))) continue;
    const mod = require('./modules/' + f);
    // pass 1 records the icons the module needs; pass 2 builds with rendered icons
    mod.build(new Deck(mod.meta));
    await renderIcons();
    const d = new Deck(mod.meta);
    mod.build(d);
    const missing = Object.keys(d.G).map(Number).filter((n) => !d.used.has(n));
    if (missing.length) console.warn(`  ! template slides not used in ${f}: ${missing.join(', ')}`);
    const name = `Module_${mod.meta.n}_${mod.meta.slug}.pptx`;
    await d.save(path.join(outDir, name));
    console.log(`${name}: ${d.pres.slides.length} slides`);
  }
})().catch((e) => { console.error(e); process.exit(1); });
