import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const nodes = value => !value || typeof value !== 'object' ? [] : [value, ...Object.values(value).flatMap(nodes)];
const menus = { es: '/carta', en: '/en/menu', ca: '/ca/carta', fr: '/fr/carte', pl: '/pl/menu', ru: '/ru/menu', uk: '/uk/menu', nl: '/en/menu' };
const routeFile = route => path.join('dist', route, 'index.html');
let menuItems = 0, guides = 0, businessPages = 0;
for (const file of walk('dist').filter(file => file.endsWith('.html'))) {
  const dom = new JSDOM(fs.readFileSync(file, 'utf8'));
  const doc = dom.window.document;
  const graph = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(script => nodes(JSON.parse(script.textContent)));
  const business = graph.find(node => node['@id'] === 'https://dirtyrabbit.es/#business' && node.name);
  if (business) {
    businessPages++;
    assert.equal(business.hasMenu, `https://dirtyrabbit.es${menus[doc.documentElement.lang]}`, file);
    assert(business.sameAs.some(url => url.includes('d34222403')), file);
    assert(!business.sameAs.some(url => /d28571876|untappd/.test(url)), file);
  }
  const items = graph.filter(node => node['@type'] === 'MenuItem');
  const visible = [...doc.querySelectorAll('[data-menu-item]')];
  assert.equal(items.length, visible.length, `MenuItem count differs from visible rows: ${file}`);
  items.forEach((item, index) => {
    const row = visible[index];
    assert.equal(item.name, row.dataset.menuItem, file);
    assert(row.textContent.includes(item.name.split(': ').at(-1)), `name not visible: ${file}`);
    const price = row.querySelector('[data-menu-price]').textContent.trim();
    const values = price.match(/\d+(?:[.,]\d+)?/g).map(value => Number(value.replace(',', '.')));
    const offers = Array.isArray(item.offers) ? item.offers : [item.offers];
    for (const offer of offers) assert.equal(offer.priceCurrency, 'EUR', file);
    if (/[-–]/.test(price)) {
      assert.equal(offers[0]['@type'], 'AggregateOffer', file);
      assert.deepEqual([Number(offers[0].lowPrice), Number(offers[0].highPrice)], values, file);
    } else {
      assert.deepEqual(offers.map(offer => Number(offer.price)), values, file);
    }
    menuItems++;
  });
  dom.window.close();
}
for (const source of walk('src/pages').filter(file => file.endsWith('.astro') && /import (?:LocalGuide|VisitGuide) from/.test(fs.readFileSync(file, 'utf8')))) {
  const route = source.replace(/^src\/pages/, '').replace(/\.astro$/, '').replace(/\/index$/, '');
  const dom = new JSDOM(fs.readFileSync(routeFile(route), 'utf8'));
  const doc = dom.window.document;
  const graph = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(script => nodes(JSON.parse(script.textContent)));
  const crumbs = graph.filter(node => node['@type'] === 'BreadcrumbList');
  assert.equal(crumbs.length, 1, source);
  assert(crumbs[0].itemListElement.length >= 2, source);
  crumbs[0].itemListElement.forEach((item, index) => {
    assert.equal(item.position, index + 1, source);
    assert(item.name.trim(), source);
    assert.equal(new URL(item.item).origin, 'https://dirtyrabbit.es', source);
    assert(fs.existsSync(routeFile(new URL(item.item).pathname)), `Breadcrumb destination missing: ${item.item}`);
  });
  assert.equal(crumbs[0].itemListElement.at(-1).item, doc.querySelector('link[rel="canonical"]').href, source);
  assert.equal(crumbs[0].itemListElement.at(-1).name, doc.querySelector('h1').textContent, source);
  guides++;
  dom.window.close();
}
assert(menuItems > 0 && guides > 0 && businessPages > 0);
console.log(JSON.stringify({ businessPages, menuItems, guideBreadcrumbs: guides, errors: 0 }, null, 2));
