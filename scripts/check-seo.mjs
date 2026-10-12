import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

const root = path.resolve(process.argv[2] || 'dist');
const origin = 'https://dirtyrabbit.es';
const errors = [];
const pages = new Map();
const redirects = JSON.parse(fs.readFileSync('vercel.json', 'utf8')).redirects || [];
const normalize = p => decodeURI(p).replace(/\/index.html$/, '').replace(/\/$/, '') || '/';
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
for (const file of walk(root).filter(f => f.endsWith('.html'))) {
  const route = normalize('/' + path.relative(root, file));
  const dom = new JSDOM(fs.readFileSync(file, 'utf8'), { url: origin + route + '/' });
  pages.set(route, { dom, doc: dom.window.document });
}
const resolve = (url, seen = new Set()) => {
  const route = normalize(url.pathname);
  if (seen.has(route)) return false;
  seen.add(route);
  const rule = redirects.find(r => normalize(r.source) === route);
  if (rule) { const next = new URL(rule.destination, origin); return next.origin !== origin || resolve(next, seen); }
  if (pages.has(route)) return true;
  return fs.existsSync(path.join(root, decodeURI(url.pathname)));
};
let links = 0, schemas = 0, indexable = 0;
const titles = new Map();
for (const [route, { doc }] of pages) {
  for (const el of doc.querySelectorAll('a[href], link[href], img[src], script[src], iframe[src]')) {
    const value = el.getAttribute('href') ?? el.getAttribute('src');
    const url = new URL(value, origin + route + '/');
    if (url.origin !== origin) continue;
    links++;
    if (!resolve(url)) errors.push({ kind: 'broken-link', route, target: value });
  }
  if (doc.querySelector('meta[http-equiv="refresh"]')) continue;
  const noindex = doc.querySelector('meta[name="robots"]')?.content.includes('noindex');
  if (noindex) continue;
  indexable++;
  if (!doc.title.trim()) errors.push({ kind: 'missing-title', route });
  if (!doc.querySelector('meta[name="description"]')?.content.trim()) errors.push({ kind: 'missing-description', route });
  const canonical = doc.querySelectorAll('link[rel="canonical"]');
  if (canonical.length !== 1 || new URL(canonical[0].href).origin !== origin || normalize(new URL(canonical[0].href).pathname) !== route) errors.push({ kind: 'canonical', route });
  const list = titles.get(doc.title) || []; list.push(route); titles.set(doc.title, list);
  let business = false;
  const inspect = value => {
    if (!value || typeof value !== 'object') return;
    if (/Dirty Rabbit/.test(value.name || '') && /CafeOrCoffeeShop|LocalBusiness|Restaurant/.test(String(value['@type']))) {
      schemas++; business = true;
      if (value.address?.addressLocality !== "S'Agaró" || value.address?.streetAddress !== "Avinguda de Platja d'Aro, 275") errors.push({ kind: 'business-address', route, address: value.address });
      if (JSON.stringify(value.openingHoursSpecification || []).includes('Monday')) errors.push({ kind: 'monday-opening', route });
    }
    for (const child of Object.values(value)) inspect(child);
  };
  for (const script of doc.querySelectorAll('script[type="application/ld+json"]')) {
    try { inspect(JSON.parse(script.textContent)); } catch (e) { errors.push({ kind: 'json-ld', route, message: e.message }); }
  }
  if (!business) errors.push({ kind: 'missing-business-schema', route });
}
const sitemapUrls = new Set();
const sitemapDates = new Set();
for (const file of walk(root).filter(f => /sitemap-\d+\.xml$/.test(f))) {
  const doc = new JSDOM(fs.readFileSync(file, 'utf8'), { contentType: 'text/xml' }).window.document;
  for (const loc of doc.querySelectorAll('url > loc')) {
    const url = new URL(loc.textContent); const route = normalize(url.pathname); sitemapUrls.add(route);
    const modified = loc.parentElement.querySelector('lastmod')?.textContent;
    if (modified) sitemapDates.add(modified);
    const page = pages.get(route)?.doc;
    if (url.origin !== origin || !page || page.querySelector('meta[http-equiv="refresh"]') || page.querySelector('meta[name="robots"]')?.content.includes('noindex') || normalize(new URL(page.querySelector('link[rel="canonical"]')?.href || origin).pathname) !== route) errors.push({ kind: 'sitemap-url', route });
  }
}
const facts = JSON.parse(fs.readFileSync(path.join(root, '.well-known/brand-facts.json'), 'utf8'));
const llms = fs.readFileSync(path.join(root, 'llms.txt'), 'utf8');
const street = "Avinguda de Platja d'Aro, 275";
if (facts.location.address !== street || !llms.includes(`**Address:** ${street},`)) errors.push({ kind: 'machine-address' });
for (const [route, { doc }] of pages) {
  if (/Carrer de la Conca\s*,?\s*17/.test(doc.body.textContent)) errors.push({ kind: 'retired-address', route });
  for (const el of doc.querySelectorAll('article tr, article li')) {
    if (/Grace Coffee|Lo-Fi Coffee/i.test(el.textContent)) errors.push({ kind: 'closed-cafe-recommendation', route });
  }
}
for (const route of ['/guia/mejor-cafe-begur', '/en/guide/best-coffee-begur', '/ca/guia/millor-cafe-begur', '/fr/guides/meilleur-cafe-begur']) {
  const text = pages.get(route)?.doc.querySelector('article')?.textContent || '';
  if (!text.includes('Fitzroy') || text.indexOf('Fitzroy') < text.indexOf('Dirty Rabbit') || !/20 min/.test(text) || /30 min/.test(text)) errors.push({ kind: 'begur-location-order', route });
}
const sagaro = pages.get('/guia/que-hacer-en-sagaro')?.doc.title;
for (const route of ['/contacto', '/en/contact', '/ca/contacte', '/fr/contact', '/pl/contact', '/ru/contact', '/uk/contact']) {
  const link = pages.get(route)?.doc.querySelector('a[href="tel:+34872454264"]');
  if (!link?.textContent.includes('+34 872 454 264')) errors.push({ kind: 'visible-contact-phone', route });
}
for (const [route, { doc }] of pages) {
  const article = doc.querySelector('article');
  if (article?.textContent.includes('Fitzroy') && !article.querySelector('[data-seasonal-status="fitzroy"]')) errors.push({ kind: 'missing-seasonal-status', route });
}
if (sagaro !== "Qué ver en S'Agaró: Sant Pol y Camí de Ronda") errors.push({ kind: 'sagaro-approved-title' });
for (const [route, { doc }] of pages) {
  if (!doc.querySelector('meta[http-equiv="refresh"]') && !doc.querySelector('meta[name="robots"]')?.content.includes('noindex') && !sitemapUrls.has(route)) errors.push({ kind: 'missing-sitemap-url', route });
}
const duplicates = [...titles].filter(([, routes]) => routes.length > 1).map(([title, routes]) => ({ title, routes }));
console.log(JSON.stringify({ pages: pages.size, indexable, internalLinksAndAssets: links, businessSchemas: schemas, sitemapUrls: sitemapUrls.size, sitemapDates: [...sitemapDates].sort(), duplicateTitles: duplicates, errors }, null, 2));
for (const { dom } of pages.values()) dom.window.close();
process.exitCode = errors.length ? 1 : 0;
