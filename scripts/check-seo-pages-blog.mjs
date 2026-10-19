import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import { marked } from 'marked';
import { createHash } from 'node:crypto';

// Integration checks against the actual production build, including draft leakage.
const newRoutes = [
  ['guia/brunch-platja-daro', 'es', '2026-10-13'],
  ['guia/cafeteria-admite-perros-costa-brava', 'es', '2026-10-13'],
  ['en/guide/coffee-shop-wifi-work-costa-brava', 'en', '2026-10-13'],
  ['en/guide/breakfast-sagaro-sant-pol', 'en', '2026-10-13'],
  ['nl/gids/ontbijt-platja-d-aro', 'nl', '2026-10-13'],
];
const routes = [
  ...newRoutes,
  ['articulos/mejores-brunchs-platja-daro', 'es', '2026-03-24'],
  ['guia/cafeteria-con-perro-costa-brava', 'es', '2026-10-12'],
  ['en/articles/cafes-wifi-remote-work-costa-brava', 'en', '2026-02-15'],
  ['en/guide/breakfast-near-platja-sant-pol', 'en', '2026-02-15'],
];
const sitemap = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
for (const [route, lang, published] of routes) {
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
  assert.equal(graph.find(item => item['@type'] === 'Article').datePublished, published);
  if (newRoutes.some(([r]) => r === route)) {
    const hub = lang === 'es' ? 'guia' : 'en/guide';
    assert(fs.readFileSync(`dist/${hub}/index.html`, 'utf8').includes(`/${route}`), `Incoming hub link: ${route}`);
  }
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
// Compare all named curation entries to the supplied Canva transcription.
const manifest = JSON.parse(fs.readFileSync('docs/drafts/summer-guide-2026-manifest.json', 'utf8'));
const source = fs.readFileSync(manifest.source_snapshot, 'utf8');
const draft = fs.readFileSync(manifest.draft_file, 'utf8');
const sha = text => createHash('sha256').update(text).digest('hex');
assert.equal(sha(source), manifest.source_sha256);
assert.equal(sha(draft), manifest.draft_sha256);
assert.equal(manifest.publication_approved, true);
assert(/^draft: false$/m.test(draft));
assert(draft.includes("No sponsors. No favours. Just what we'd send our friends to."));
assert(!draft.includes('Pendiente de transcribir'));
const articleDom = new JSDOM(marked.parse(draft.replace(/^---[\s\S]*?---\s*/, '')));
const articleDoc = articleDom.window.document;
const normalizeName = value => value.replace(/[’‘]/g, "'").toLowerCase();
const categories = {};
for (const category of ['Coffee', 'Eat', 'Swim', 'Explore']) {
  const sourceSection = source.split(`## ${category}\n`)[1].split('\n## ')[0].trim();
  const names = sourceSection.split(' · ').map(item => item.split(' — ')[0].trim());
  const heading = [...articleDoc.querySelectorAll('h2')].find(el => el.textContent === category);
  assert(heading, category);
  let list = heading.nextElementSibling;
  while (list && !['UL', 'H2'].includes(list.tagName)) list = list.nextElementSibling;
  assert.equal(list?.tagName, 'UL');
  const entries = [...list.querySelectorAll('li')];
  assert.equal(entries.length, names.length, `${category}: all selections retained`);
  for (const name of names) assert(entries.some(el => normalizeName(el.querySelector('strong').textContent).split(' · ')[0] === normalizeName(name)), `${category}: missing ${name}`);
  categories[category] = names.length;
}
assert.deepEqual(categories, { Coffee: 7, Eat: 16, Swim: 8, Explore: 9 });
assert(articleDoc.body.textContent.includes('Cerrado por temporada'));
articleDom.window.close();

// Franc approved exact article text; recorded date/draft/photo metadata may differ.
const approval = JSON.parse(fs.readFileSync('docs/approvals/october-2026-blogs.json', 'utf8'));
// Astro applies smart punctuation; source hashes above still require exact bytes.
const normalizeText = text => text.replace(/[’‘]/g, "'").replace(/\s+/g, ' ').trim();
const approvedRoutes = [];
for (const post of approval.posts) {
  const content = fs.readFileSync(post.file, 'utf8');
  assert.equal(sha(content), post.file_sha256, post.file);
  assert.equal(sha(content.split('---').slice(2).join('---')), post.body_sha256, post.file);
  let original = content.replace(/^draft: false$/m, 'draft: true')
    .replace(/^date: .+$/m, `date: ${post.approved_source_date}`)
    .replace(/^image(?:Alt)?: .+\n/gm, '');
  for (const addition of post.approved_additions || []) {
    assert.equal(original.split(addition).length, 2);
    original = original.replace(addition + '\n\n', '').replace('\n' + addition + '\n', '');
  }
  assert.equal(sha(original), post.approved_source_sha256, `Approved wording: ${post.file}`);
  assert(content.includes(`date: ${post.publication_date}\n`), post.file);
  const route = `/news/${path.basename(post.file, '.md')}/`;
  const dom = new JSDOM(fs.readFileSync(`dist${route}index.html`, 'utf8'));
  const expected = new JSDOM(marked.parse(content.replace(/^---[\s\S]*?---\s*/, '')));
  assert.equal(normalizeText(dom.window.document.querySelector('.prose').textContent),
    normalizeText(expected.window.document.body.textContent), `Rendered approved text: ${route}`);
  const hero = dom.window.document.querySelector('article img');
  assert.equal(hero?.getAttribute('src'), post.image.path, `Hero: ${route}`);
  assert.equal(hero?.getAttribute('alt'), post.image.alt, `Image description: ${route}`);
  assert.equal(createHash('sha256').update(fs.readFileSync('public'+post.image.path)).digest('hex'), post.image.sha256);
  assert.equal(dom.window.document.querySelector('link[rel="canonical"]').href, `https://dirtyrabbit.es${route}`);
  assert(sitemap.includes(`https://dirtyrabbit.es${route}`), route);
  for (const index of ['dist/index.html', 'dist/news/index.html']) {
    assert(fs.readFileSync(index, 'utf8').includes(route.replace(/\/$/, '')), `Listed: ${route} in ${index}`);
    const listing = new JSDOM(fs.readFileSync(index, 'utf8'));
    const link = [...listing.window.document.querySelectorAll('a')].find(el => el.getAttribute('href')?.replace(/\/$/, '') === route.replace(/\/$/, ''));
    assert.equal((link?.closest('article') || link?.querySelector('article'))?.querySelector('img')?.getAttribute('src'), post.image.path, `Listing image: ${route} in ${index}`);
    listing.window.close();
  }
  dom.window.close(); expected.window.close(); approvedRoutes.push(route);
}
const octoberPosts = fs.readdirSync('src/content/news').filter(name => name.endsWith('.md'))
  .filter(name => {
    const content = fs.readFileSync(`src/content/news/${name}`, 'utf8');
    return /^date: 2026-10-\d{2}$/m.test(content) && !/^draft: true$/m.test(content);
  });
assert.deepEqual(octoberPosts.sort(), approval.posts.map(post => path.basename(post.file)).sort());
assert.equal(octoberPosts.length, approval.monthly_cap);
console.log(JSON.stringify({ status: 'PASS', newPages: newRoutes.length, pagesChecked: routes.length, summerGuideSelections: categories, approvedRoutes, octoberPublishedPosts: octoberPosts.length, draftsExcluded: draftSlugs, gmbRedirectPreserved: true }, null, 2));
