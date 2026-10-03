const fs = require('fs');
const path = require('path');
const { Deck, prepIcons } = require('./lib');

(async () => {
  await prepIcons();
  const only = process.argv.slice(2).map(Number);
  const outDir = process.env.OUT || path.join(__dirname, '..', 'powerpoints');
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(path.join(__dirname, 'sessions')).filter((f) => /^s\d\d\.js$/.test(f)).sort();
  for (const f of files) {
    if (only.length && !only.includes(Number(f.slice(1, 3)))) continue;
    const mod = require('./sessions/' + f);
    console.log('building', f);
    const d = new Deck(mod.meta);
    mod.build(d);
    const name = `Seance_${String(mod.meta.n).padStart(2, '0')}_${mod.meta.slug}.pptx`;
    await d.save(path.join(outDir, name));
    console.log('  →', name, d.pres.slides.length, 'slides');
  }
})().catch((e) => { console.error(e); process.exit(1); });
