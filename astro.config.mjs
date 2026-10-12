// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

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

// https://astro.build/config
export default defineConfig({
  site: 'https://dirtyrabbit.es',
  integrations: [
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        return !sitemapExcludedPaths.has(url.pathname.replace(/\/$/, '') || '/');
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
