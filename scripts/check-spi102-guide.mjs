import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { JSDOM } from 'jsdom';
import { marked } from 'marked';

const raw = fs.readFileSync('docs/approved-copy/spi102-A1-final.md', 'utf8');
const hash = crypto.createHash('sha256').update(raw).digest('hex');
assert.equal(hash, '6c23ea8eba19c5edbd451a9921944cc687c582924cc48a1f9dc173af351ad109');
const route = '/guia/cami-de-ronda-sagaro-ruta/';
const doc = new JSDOM(fs.readFileSync(`dist${route}index.html`, 'utf8')).window.document;
const publicCopy = raw.slice(raw.indexOf("# Camí de Ronda de S'Agaró: la ruta a pie desde Sant Pol\n"), raw.indexOf('\n---\n\n## Fuentes'));
const expected = new JSDOM(marked.parse(publicCopy)).window.document.body;
const actual = doc.querySelector('[data-approved-body]');
assert.ok(actual);
const normalized = el => el.textContent.replace(/\s+/g, ' ').trim();
assert.equal(normalized(actual), normalized(expected), 'All rendered public words match the pinned Fable article, in order');
assert.equal(doc.querySelector('article').dataset.approvedCopy, hash);
assert.equal(doc.querySelectorAll('h1').length, 1);
assert.equal(doc.querySelectorAll('[data-approved-body] table').length, 1);
assert.equal(doc.querySelector('[data-approved-body] table').querySelectorAll('tbody tr').length, 4);
assert.equal(doc.querySelector('meta[name="description"]').content, raw.match(/^\*\*Meta description:\*\* (.+)$/m)[1]);
assert.equal(doc.querySelector('link[rel="canonical"]').href, 'https://dirtyrabbit.es'+route);
assert.deepEqual([...doc.querySelectorAll('link[rel="alternate"][hreflang]')].map(x => x.hreflang).sort(), ['es','x-default']);
assert.ok(!/\[(VERIFY|FRANC|CODEX):/.test(actual.textContent));
assert.ok(!/26 de octubre|9 de noviembre|vacaciones y pequeñas reformas|28 de diciembre|6 de enero/.test(actual.textContent));
assert.ok(!doc.querySelector('main a[href="/horarios/"]'));
const sourceUrls = [...raw.slice(raw.indexOf('\n## Fuentes')).matchAll(/^\d\. .+?: (https:\/\/\S+) /gm)].map(m=>m[1]);
assert.equal(sourceUrls.length, 4);
assert.deepEqual([...doc.querySelectorAll('[data-guide-sources] a')].map(a=>a.href), sourceUrls);
for (const page of ['que-hacer-en-sagaro','desayunar-cerca-de-cami-de-ronda']) {
  const referring = new JSDOM(fs.readFileSync(`dist/guia/${page}/index.html`,'utf8')).window.document;
  assert.equal(referring.querySelector(`a[href="${route}"]`).textContent,raw.match(/^\*\*Title:\*\* (.+)$/m)[1]);
}
assert.ok(fs.readFileSync('dist/sitemap-0.xml','utf8').includes('https://dirtyrabbit.es'+route));
assert.ok(!fs.existsSync('dist/ca/guia/cami-de-ronda-sagaro-ruta/index.html'));
console.log('PASS: exact Fable copy and source hash; metadata, one h1, 4-row table, 4 citations, two inbound links, self-only ES alternates and sitemap; no placeholders or held hours-page dependency.');
