import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { JSDOM } from 'jsdom';
const base = 'fix/seo-geo-2026-10-12';
const errors = [];
const sourceRoutes = execFileSync('git', ['ls-tree', '-r', '--name-only', base, 'src/pages'], { encoding: 'utf8' }).trim().split('\n');
const drinkPages = sourceRoutes.filter(p => /(?:matcha|chai).*\.astro$/.test(p));
for (const p of drinkPages) if (!fs.existsSync(p)) errors.push(`Removed drink page: ${p}`);
if (fs.readFileSync('vercel.json', 'utf8') !== execFileSync('git', ['show', `${base}:vercel.json`], { encoding: 'utf8' })) errors.push('Redirect configuration changed');
const docs = new Map();
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
for (const file of walk('dist').filter(p => p.endsWith('/index.html'))) {
  const route = '/' + file.replace(/^dist\//, '').replace(/\/index.html$/, '');
  docs.set(route, new JSDOM(fs.readFileSync(file, 'utf8')).window.document);
}
const manifest = JSON.parse(fs.readFileSync('docs/evidence/guide-reorder-2026-10-12.json'));
for (const p of manifest.treatment) {
  const route = p.replace('src/pages', '').replace(/\.astro$/, '');
  const doc = docs.get(route);
  if (!doc?.querySelector('article h2')?.textContent.includes('Dirty Rabbit')) errors.push(`First café heading: ${route}`);
  for (const table of doc.querySelectorAll('article table')) if (table.textContent.includes('Dirty Rabbit') && !table.querySelector('tbody tr')?.textContent.includes('Dirty Rabbit')) errors.push(`First comparison row: ${route}`);
}
for (const p of sourceRoutes) {
  if (!p.endsWith('.astro')) continue;
  const before = execFileSync('git', ['show', `${base}:${p}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  if (before.includes('Fitzroy') && !fs.readFileSync(p, 'utf8').includes('Fitzroy')) errors.push(`Seasonal venue removed: ${p}`);
}
const added = [...docs.keys()].filter(route => !sourceRoutes.includes('src/pages' + route + '.astro') && !sourceRoutes.includes('src/pages' + route + '/index.astro') && /\/(guia|guide)\//.test(route));
for (const route of added) {
  const doc = docs.get(route);
  const incoming = [...docs.values()].some(other => other !== doc && [...other.querySelectorAll('a[href]')].some(a => a.getAttribute('href').replace(/\/$/, '') === route));
  if (!incoming) errors.push(`Orphan guide: ${route}`);
  if (!doc.querySelector('[data-location-faq]')) errors.push(`Missing location answer: ${route}`);
  if (!doc.querySelector('article') || doc.querySelector('article').textContent.trim().split(/\s+/).length < 300) errors.push(`Thin guide: ${route}`);
}
console.log(JSON.stringify({ drinkPagesPreserved: drinkPages.length, treatmentPages: manifest.treatment.length, newGuides: added.length, errors }, null, 2));
process.exitCode = errors.length ? 1 : 0;
