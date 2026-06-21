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
      serialize(item) {
        item.lastmod = new Date('2026-03-28').toISOString();
        return item;
      },
      filter: (page) => {
        const url = new URL(page);
        return !sitemapExcludedPaths.has(url.pathname.replace(/\/$/, '') || '/');
      },
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-GB',
          ca: 'ca-ES',
          fr: 'fr-FR',
          ru: 'ru-RU',
          uk: 'uk-UA',
          pl: 'pl-PL',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
