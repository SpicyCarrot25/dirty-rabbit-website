import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

// Integration checks against the actual production build, including draft leakage.
const routes = [
  ['articulos/mejores-brunchs-platja-daro', 'es'],
  ['guia/cafeteria-con-perro-costa-brava', 'es'],
  ['en/articles/cafes-wifi-remote-work-costa-brava', 'en'],
  ['en/guide/breakfast-near-platja-sant-pol', 'en'],
  ['nl/gids/ontbijt-platja-d-aro', 'nl'],
];
const sitemap = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
for (const [route, lang] of routes) {
  const dom = new JSDOM(fs.readFileSync(`dist/${route}/index.html`, 'utf8'));
  const doc = dom.window.document;
  assert.equal(doc.documentElement.lang, lang, route);
  assert.equal(doc.querySelectorAll('h1').length, 1, route);
  const article = doc.querySelector('article');
  assert(article.querySelector('section').hasAttribute('data-our-cafe'), route);
  assert(article.querySelectorAll('[data-confirmed-fact]').length >= 3, route);
  assert(article.querySelector('[data-alternatives] a[href^="https:"]'), route);
  assert(article.querySelector('a[href="https://www.google.com/maps?cid=13237319999262880412"]'), route);
  assert(!doc.querySelector('a[href^="tel:"]'), route);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, `https://dirtyrabbit.es/${route}/`);
  assert(sitemap.includes(`https://dirtyrabbit.es/${route}/`), route);
  const graph = JSON.parse(doc.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
  assert.equal(graph.find(item => item['@type'] === 'Article').inLanguage, lang);
  if (lang === 'nl') {
    assert.deepEqual([...doc.querySelectorAll('link[hreflang]')].map(el => el.hreflang).sort(), ['nl', 'x-default']);
    assert(doc.querySelector('.lang-btn').textContent.includes('NL'));
    for (const hub of ['guia', 'en/guide']) {
      assert(fs.readFileSync(`dist/${hub}/index.html`, 'utf8').includes(`/${route}/`));
    }
  }
  dom.window.close();
}

const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const draftSlugs = fs.readdirSync('src/content/news').filter(name => name.endsWith('.md'))
  .filter(name => /^draft: true$/m.test(fs.readFileSync(`src/content/news/${name}`, 'utf8')))
  .map(name => name.replace(/\.md$/, ''));
assert(draftSlugs.length, 'Exercise exclusion with a real approval-only draft');
for (const file of walk('dist').filter(file => /\.(html|xml)$/.test(file))) {
  const content = fs.readFileSync(file, 'utf8');
  for (const slug of draftSlugs) {
    assert(!file.includes(slug), `Draft generated a route: ${file}`);
    assert(!content.includes(slug), `Draft leaked into ${file}`);
  }
}
const redirects = JSON.parse(fs.readFileSync('vercel.json', 'utf8')).redirects;
assert.equal(redirects.find(rule => rule.source === '/gmb').destination,
  'https://dirtyrabbit.es/?utm_source=google&utm_medium=maps&utm_campaign=gmb-main');
console.log(JSON.stringify({ status: 'PASS', pages: routes.length, draftsExcluded: draftSlugs, gmbRedirectPreserved: true }, null, 2));
