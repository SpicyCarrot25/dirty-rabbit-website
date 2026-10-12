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
      if (value.address?.addressLocality !== "S'Agaró" || value.address?.streetAddress !== "Avinguda de Platja d'Aro 275") errors.push({ kind: 'business-address', route, address: value.address });
      if (JSON.stringify(value.openingHoursSpecification).includes('Monday')) errors.push({ kind: 'monday-opening', route });
    }
    for (const child of Object.values(value)) inspect(child);
  };
  for (const script of doc.querySelectorAll('script[type="application/ld+json"]')) {
    try { inspect(JSON.parse(script.textContent)); } catch (e) { errors.push({ kind: 'json-ld', route, message: e.message }); }
  }
  if (!business) errors.push({ kind: 'missing-business-schema', route });
}
const sitemapUrls = new Set();
for (const file of walk(root).filter(f => /sitemap-\d+\.xml$/.test(f))) {
  const doc = new JSDOM(fs.readFileSync(file, 'utf8'), { contentType: 'text/xml' }).window.document;
  for (const loc of doc.querySelectorAll('url > loc')) {
    const url = new URL(loc.textContent); const route = normalize(url.pathname); sitemapUrls.add(route);
    const page = pages.get(route)?.doc;
    if (url.origin !== origin || !page || page.querySelector('meta[http-equiv="refresh"]') || page.querySelector('meta[name="robots"]')?.content.includes('noindex') || normalize(new URL(page.querySelector('link[rel="canonical"]')?.href || origin).pathname) !== route) errors.push({ kind: 'sitemap-url', route });
  }
}
for (const [route, { doc }] of pages) {
  if (!doc.querySelector('meta[http-equiv="refresh"]') && !doc.querySelector('meta[name="robots"]')?.content.includes('noindex') && !sitemapUrls.has(route)) errors.push({ kind: 'missing-sitemap-url', route });
}
const duplicates = [...titles].filter(([, routes]) => routes.length > 1).map(([title, routes]) => ({ title, routes }));
console.log(JSON.stringify({ pages: pages.size, indexable, internalLinksAndAssets: links, businessSchemas: schemas, sitemapUrls: sitemapUrls.size, duplicateTitles: duplicates, errors }, null, 2));
for (const { dom } of pages.values()) dom.window.close();
process.exitCode = errors.length ? 1 : 0;
