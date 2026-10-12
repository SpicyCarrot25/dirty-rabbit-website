import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

let checks = 0;
for (const prefix of ['', 'en/', 'ca/', 'fr/']) {
  const html = readFileSync(`dist/${prefix}review/index.html`, 'utf8');
  for (let rating = 0; rating <= 5; rating++) {
    for (const outcome of ['success', 'failure']) {
      // No resources are loaded. Scripts only run when explicitly evaluated below.
      const dom = new JSDOM(html, { url: `https://dirtyrabbit.es/${prefix}review`, runScripts: 'outside-only' });
      const { window } = dom;
      let requests = 0;
      window.fetch = async () => {
        requests++;
        if (outcome === 'failure') throw new Error('Mock network failure');
        return { ok: true, status: 201 };
      };
      window.setTimeout = callback => { callback(); return 0; };
      const link = window.document.querySelector('#public-review a');
      const visible = () => {
        assert(link, `${prefix}: public link missing`);
        assert.match(link.href, /google\.com\/maps|g\.page/);
        for (let node = link; node; node = node.parentElement) {
          assert(!node.hidden && !node.classList.contains('hidden') && node.style.display !== 'none');
        }
        checks++;
      };
      visible(); // Also verifies the HTML delivered without JavaScript.
      const script = [...window.document.scripts].find(s => s.textContent.includes('stars-container'));
      assert(script, 'Expected compiled review script');
      window.eval(script.textContent);
      if (rating) window.document.querySelector(`#stars-container [data-rating="${rating}"]`).click();
      visible();
      if (rating > 0 && rating < 5) {
        window.document.querySelector('#feedback-comment').value = 'Local test only';
        window.document.querySelector('#feedback-form').dispatchEvent(new window.Event('submit', { cancelable: true }));
        await new Promise(resolve => setImmediate(resolve));
        assert.equal(requests, 1);
        assert(!window.document.querySelector('#step-thanks').classList.contains('hidden'));
        visible();
      } else assert.equal(requests, 0);
      dom.window.close();
    }
  }
}
console.log(`PASS: ${checks} visibility checks; four languages, no JavaScript, ratings 0–5, mocked feedback success/failure. No network.`);
