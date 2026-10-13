// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync, readdirSync } from 'node:fs';

// Use each article's editorial date. Non-article pages without a recorded date
// omit lastmod; a build or a shared-template edit is not a new article revision.
function pageModifiedDate(page) {
  const route = new URL(page).pathname.replace(/^\/|\/$/g, '');
  const base = new URL(`./src/pages/${route || 'index'}`, import.meta.url);
  const source = [new URL(`${base.href}.astro`), new URL(`${base.href}/index.astro`)]
    .find(file => existsSync(file));
  if (!source) return undefined;
  const date = readFileSync(source, 'utf8').match(/dateModified:\s*["'](\d{4}-\d{2}-\d{2})["']/)?.[1];
  return date ? new Date(`${date}T00:00:00.000Z`) : undefined;
}

const sitemapExcludedPaths = new Set([
  '/about',
  '/map',
  '/ca/about',
  '/fr/about',
  '/en/carta',
  '/pl/carta',
  '/ru/carta',
  '/uk/carta',
]);

// DEMO: approval-only news drafts can render on the demo preview (see src/lib/demo.ts);
// they are noindex and must never enter the sitemap.
const draftNewsPaths = new Set(
  readdirSync(new URL('./src/content/news/', import.meta.url))
    .filter(name => name.endsWith('.md') && /^draft: true$/m.test(readFileSync(new URL(`./src/content/news/${name}`, import.meta.url), 'utf8')))
    .map(name => `/news/${name.replace(/\.md$/, '')}`)
);

// https://astro.build/config
export default defineConfig({
  site: 'https://dirtyrabbit.es',
  integrations: [
    sitemap({
      serialize(item) {
        const modified = pageModifiedDate(item.url);
        if (modified) item.lastmod = modified;
        return item;
      },
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname.replace(/\/$/, '') || '/';
        return !sitemapExcludedPaths.has(path) && !draftNewsPaths.has(path);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
