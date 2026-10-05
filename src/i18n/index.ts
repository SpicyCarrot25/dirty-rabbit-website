import es from './es.json';
import en from './en.json';
import ca from './ca.json';
import fr from './fr.json';
import ru from './ru.json';
import uk from './uk.json';
import pl from './pl.json';

export const languages = ['es', 'en', 'ca', 'fr', 'ru', 'uk', 'pl'] as const;
export type Language = (typeof languages)[number];

export const defaultLang: Language = 'es';

const translations = { es, en, ca, fr, ru, uk, pl };

export function getTranslations(lang: Language) {
  return translations[lang] || translations[defaultLang];
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (languages.includes(lang as Language)) {
    return lang as Language;
  }
  return defaultLang;
}

// Path mappings for pages with different names per language
// Include ALL language variants so switching works in any direction
const pathMappings: Record<string, Record<Language, string>> = {
  // About page
  'nosotros': { es: 'nosotros', en: 'about', ca: 'nosaltres', fr: 'a-propos', ru: 'about', uk: 'about', pl: 'about' },
  'about': { es: 'nosotros', en: 'about', ca: 'nosaltres', fr: 'a-propos', ru: 'about', uk: 'about', pl: 'about' },
  'nosaltres': { es: 'nosotros', en: 'about', ca: 'nosaltres', fr: 'a-propos', ru: 'about', uk: 'about', pl: 'about' },
  'a-propos': { es: 'nosotros', en: 'about', ca: 'nosaltres', fr: 'a-propos', ru: 'about', uk: 'about', pl: 'about' },
  // Suppliers/Producers page
  'proveedores': { es: 'proveedores', en: 'producers', ca: 'proveidors', fr: 'producteurs', ru: 'producers', uk: 'producers', pl: 'producers' },
  'suppliers': { es: 'proveedores', en: 'producers', ca: 'proveidors', fr: 'producteurs', ru: 'producers', uk: 'producers', pl: 'producers' },
  'producers': { es: 'proveedores', en: 'producers', ca: 'proveidors', fr: 'producteurs', ru: 'producers', uk: 'producers', pl: 'producers' },
  'proveidors': { es: 'proveedores', en: 'producers', ca: 'proveidors', fr: 'producteurs', ru: 'producers', uk: 'producers', pl: 'producers' },
  'producteurs': { es: 'proveedores', en: 'producers', ca: 'proveidors', fr: 'producteurs', ru: 'producers', uk: 'producers', pl: 'producers' },
  // Jobs page
  'trabajo': { es: 'trabajo', en: 'jobs', ca: 'feina', fr: 'emplois', ru: 'jobs', uk: 'jobs', pl: 'jobs' },
  'jobs': { es: 'trabajo', en: 'jobs', ca: 'feina', fr: 'emplois', ru: 'jobs', uk: 'jobs', pl: 'jobs' },
  'feina': { es: 'trabajo', en: 'jobs', ca: 'feina', fr: 'emplois', ru: 'jobs', uk: 'jobs', pl: 'jobs' },
  'emplois': { es: 'trabajo', en: 'jobs', ca: 'feina', fr: 'emplois', ru: 'jobs', uk: 'jobs', pl: 'jobs' },
  // FAQ page (same in all languages but include for safety)
  'faq': { es: 'faq', en: 'faq', ca: 'faq', fr: 'faq', ru: 'faq', uk: 'faq', pl: 'faq' },
  // Carta/Menu
  'carta': { es: 'carta', en: 'menu', ca: 'carta', fr: 'carte', ru: 'menu', uk: 'menu', pl: 'menu' },
  'menu': { es: 'carta', en: 'menu', ca: 'carta', fr: 'carte', ru: 'menu', uk: 'menu', pl: 'menu' },
  'carte': { es: 'carta', en: 'menu', ca: 'carta', fr: 'carte', ru: 'menu', uk: 'menu', pl: 'menu' },
  // Contact page
  'contacto': { es: 'contacto', en: 'contact', ca: 'contacte', fr: 'contact', ru: 'contact', uk: 'contact', pl: 'contact' },
  'contact': { es: 'contacto', en: 'contact', ca: 'contacte', fr: 'contact', ru: 'contact', uk: 'contact', pl: 'contact' },
  'contacte': { es: 'contacto', en: 'contact', ca: 'contacte', fr: 'contact', ru: 'contact', uk: 'contact', pl: 'contact' },
  // Review page (same in all languages)
  'review': { es: 'review', en: 'review', ca: 'review', fr: 'review', ru: 'review', uk: 'review', pl: 'review' },
  // News index
  'news': { es: 'news', en: 'news', ca: 'news', fr: 'actualites', ru: 'news', uk: 'news', pl: 'news' },
  'actualites': { es: 'news', en: 'news', ca: 'news', fr: 'actualites', ru: 'news', uk: 'news', pl: 'news' },
  // News articles - map all variants
  'news/nueva-web-es': { es: 'news/nueva-web-es', en: 'news/nueva-web-en', ca: 'news/nueva-web-ca', fr: 'actualites/nueva-web-en', ru: 'news/nueva-web-en', uk: 'news/nueva-web-en', pl: 'news/nueva-web-en' },
  'news/nueva-web-en': { es: 'news/nueva-web-es', en: 'news/nueva-web-en', ca: 'news/nueva-web-ca', fr: 'actualites/nueva-web-en', ru: 'news/nueva-web-en', uk: 'news/nueva-web-en', pl: 'news/nueva-web-en' },
  'news/nueva-web-ca': { es: 'news/nueva-web-es', en: 'news/nueva-web-en', ca: 'news/nueva-web-ca', fr: 'actualites/nueva-web-en', ru: 'news/nueva-web-en', uk: 'news/nueva-web-en', pl: 'news/nueva-web-en' },
};

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash and any existing language prefix (only if followed by / or end)
  // Also remove trailing slash for consistent lookup
  const cleanPath = path.replace(/^\/(en|ca|fr|ru|uk|pl)(\/|$)/, '/').replace(/^\//, '').replace(/\/$/, '');
  
  // Check if we have a mapping for this path
  const mappedPath = pathMappings[cleanPath]?.[lang] || cleanPath;
  
  if (lang === defaultLang) {
    return mappedPath ? `/${mappedPath}` : '/';
  }
  return mappedPath ? `/${lang}/${mappedPath}` : `/${lang}/`;
}

// Guide section prefix per locale
const guideSectionPrefix: Record<Language, string> = {
  es: 'guia', en: 'guide', ca: 'guia', fr: 'guide',
  ru: 'guide', uk: 'guide', pl: 'guide',
};

// Cross-locale guide slug mapping. Each entry maps ANY locale's slug to all available
// locale versions. Guides with identical slugs across locales don't need entries here —
// they'll fall through to the default (same slug, all 4 guide locales).
//
// Format: { [anyLocaleSlug]: { es?: slug, en?: slug, ca?: slug, fr?: slug } }
// Missing locale key = page doesn't exist in that locale.
type GuideMap = Partial<Record<Language, string>>;
const guideSlugMap: Record<string, GuideMap> = {};

// Helper to register a guide group (bidirectional lookup from any slug)
function registerGuide(map: GuideMap) {
  for (const slug of Object.values(map)) {
    if (slug) guideSlugMap[slug] = map;
  }
}

// --- Coffee guides ---
registerGuide({ es: 'mejor-cafe-girona', en: 'best-coffee-girona', ca: 'millor-cafe-girona' });
registerGuide({ es: 'mejor-cafe-begur', en: 'best-coffee-begur', ca: 'millor-cafe-begur' });
registerGuide({ es: 'mejor-cafe-calonge', en: 'best-coffee-calonge', ca: 'millor-cafe-calonge' });
registerGuide({ es: 'mejor-cafe-costa-brava', en: 'best-coffee-costa-brava', ca: 'best-coffee-costa-brava', fr: 'best-coffee-costa-brava' });
registerGuide({ es: 'mejor-cafe-palamos', en: 'best-coffee-palamos', ca: 'millor-cafe-palamos' });
registerGuide({ es: 'mejor-cafe-pals', en: 'best-coffee-pals', ca: 'millor-cafe-pals' });
registerGuide({ es: 'mejor-cafe-platja-daro', en: 'best-coffee-platja-daro', ca: 'best-coffee-platja-daro', fr: 'best-coffee-platja-daro' });
registerGuide({ es: 'mejor-cafe-sagaro', en: 'best-coffee-sagaro', ca: 'millor-cafe-sagaro' });
registerGuide({ es: 'mejor-cafe-sant-feliu-de-guixols', en: 'best-coffee-sant-feliu-de-guixols', ca: 'millor-cafe-sant-feliu-de-guixols' });
registerGuide({ es: 'mejor-cafe-especialidad-costa-brava-2026', en: 'best-specialty-coffee-costa-brava-2026', ca: 'millor-cafe-especialitat-costa-brava-2026', fr: 'meilleur-cafe-specialite-costa-brava-2026' });
registerGuide({ es: 'mejor-cafe-especialidad-sagaro', en: 'best-specialty-coffee-sagaro', ca: 'best-specialty-coffee-sagaro', fr: 'best-specialty-coffee-sagaro' });

// --- Breakfast guides ---
registerGuide({ es: 'desayunar-cerca-de-cami-de-ronda', en: 'breakfast-near-cami-de-ronda', ca: 'esmorzar-prop-de-cami-de-ronda' });
registerGuide({ es: 'desayunar-cerca-de-centre-platja-daro', en: 'breakfast-near-platja-daro', ca: 'esmorzar-prop-de-platja-daro' });
registerGuide({ es: 'desayunar-cerca-de-platja-sant-pol', en: 'breakfast-near-platja-sant-pol', ca: 'esmorzar-prop-de-platja-sant-pol' });

// --- Things to do guides ---
registerGuide({ es: 'que-hacer-en-platja-daro', en: 'things-to-do-in-platja-daro', ca: 'que-fer-a-platja-daro' });
registerGuide({ es: 'que-hacer-en-sagaro', en: 'things-to-do-in-sagaro', ca: 'que-fer-a-sagaro' });
registerGuide({ es: 'que-hacer-en-sant-feliu-de-guixols', en: 'things-to-do-in-sant-feliu-de-guixols', ca: 'que-fer-a-sant-feliu-de-guixols' });

// --- EN-only guide ---
registerGuide({ en: 'digital-nomad-cafe-costa-brava' });

// Inventory routes at build time. Redirects and hypothetical translations are not alternates.
const pageSources = import.meta.glob('../pages/**/*.astro', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const routes = new Set(Object.entries(pageSources)
  .filter(([file, source]) => !file.includes('[') && !source.includes('Astro.redirect('))
  .map(([file]) => file.replace('../pages', '').replace(/\.astro$/, '').replace(/\/index$/, '') || '/'));
const newsSources = import.meta.glob('../content/news/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
for (const [file, source] of Object.entries(newsSources)) {
  const lang = source.match(/^lang:\s*['"]?(es|en|ca)/m)?.[1] || 'es';
  const slug = file.split('/').pop()!.replace(/\.md$/, '');
  routes.add(`${lang === 'es' ? '' : '/' + lang}/news/${slug}`);
}

// Translation groups describe content identity; route existence is checked separately.
const articleGroups = [
  ['brunch-playa-sant-pol', 'brunch-playa-sant-pol', 'brunch-playa-sant-pol', 'brunch-playa-sant-pol'],
  ['brunch-sagaro', 'brunch-sagaro', null, null],
  ['cafe-especialidad-vs-cafe-comercial', 'specialty-coffee-vs-commercial-coffee', 'cafe-especialitat-vs-cafe-comercial', 'cafe-specialite-vs-cafe-commercial'],
  ['cafe-wifi-trabajar-costa-brava', 'cafes-wifi-remote-work-costa-brava', 'cafes-wifi-treballar-costa-brava', 'cafes-wifi-travail-costa-brava'],
  ['desayunar-costa-brava', 'breakfast-costa-brava', 'esmorzar-costa-brava', 'petit-dejeuner-costa-brava'],
  ['desayuno-con-ninos-costa-brava', 'breakfast-with-children-costa-brava', 'esmorzar-amb-nens-costa-brava', 'petit-dejeuner-avec-enfants-costa-brava'],
  ['desayuno-despues-cami-de-ronda', 'breakfast-after-cami-de-ronda', 'esmorzar-despres-cami-de-ronda', 'petit-dejeuner-apres-cami-de-ronda'],
  ['donde-desayunar-sagaro', 'where-to-breakfast-sagaro', 'on-esmorzar-sagaro', 'ou-petit-dejeuner-sagaro'],
  ['mejores-brunchs-platja-daro', 'best-brunch-platja-daro', 'millors-brunchs-platja-daro', 'meilleurs-brunchs-platja-daro'],
  [null, 'specialty-coffee-guide-costa-brava', 'guia-cafe-especialitat-costa-brava', 'guide-cafe-specialite-costa-brava'],
];
const guideFrenchSlugs: Record<string, string> = {
  'mejor-cafe-girona': 'meilleur-cafe-girona',
  'mejor-cafe-begur': 'meilleur-cafe-begur',
  'mejor-cafe-calonge': 'meilleur-cafe-calonge',
  'mejor-cafe-palamos': 'meilleur-cafe-palamos',
  'mejor-cafe-pals': 'meilleur-cafe-pals',
  'mejor-cafe-sagaro': 'meilleur-cafe-sagaro',
  'mejor-cafe-sant-feliu-de-guixols': 'meilleur-cafe-sant-feliu-de-guixols',
  'desayunar-cerca-de-cami-de-ronda': 'petit-dejeuner-cami-de-ronda',
  'desayunar-cerca-de-centre-platja-daro': 'petit-dejeuner-platja-daro',
  'desayunar-cerca-de-platja-sant-pol': 'petit-dejeuner-platja-sant-pol',
  'que-hacer-en-platja-daro': 'que-faire-a-platja-daro',
  'que-hacer-en-sagaro': 'que-faire-a-sagaro',
  'que-hacer-en-sant-feliu-de-guixols': 'que-faire-a-sant-feliu-de-guixols',
};
const routeGroups = new Map<string, Partial<Record<Language, string>>>();
function registerRoutes(group: Partial<Record<Language, string>>) {
  const existing = Object.fromEntries(Object.entries(group).filter(([, path]) => routes.has(path!)));
  for (const path of Object.values(existing)) routeGroups.set(path!, existing);
}
for (const map of new Set(Object.values(guideSlugMap))) {
  const group: Partial<Record<Language, string>> = {};
  for (const [lang, slug] of Object.entries(map)) {
    group[lang as Language] = `${lang === 'es' ? '' : '/' + lang}/${guideSectionPrefix[lang as Language]}/${slug}`;
  }
  const frenchSlug = map.es && guideFrenchSlugs[map.es];
  if (frenchSlug) group.fr = `/fr/guides/${frenchSlug}`;
  registerRoutes(group);
}
for (const slugs of articleGroups) {
  const group: Partial<Record<Language, string>> = {};
  ['es', 'en', 'ca', 'fr'].forEach((lang, i) => {
    if (slugs[i]) group[lang as Language] = lang === 'es' ? `/articulos/${slugs[i]}` : `/${lang}/articles/${slugs[i]}`;
  });
  registerRoutes(group);
}
registerRoutes({ es: '/privacidad', en: '/en/privacy', ca: '/ca/privacitat', fr: '/fr/confidentialite' });

// Same-slug pages still form groups, but only among published routes in the same section.
for (const path of routes) {
  if (routeGroups.has(path)) continue;
  const clean = path.replace(/^\/(en|ca|fr|ru|uk|pl)(?=\/|$)/, '') || '/';
  const guide = clean.match(/^\/(?:guia|guide|guides)\/(.+)$/);
  const group: Partial<Record<Language, string>> = {};
  for (const lang of languages) {
    const target = guide
      ? `${lang === 'es' ? '' : '/' + lang}/${guideSectionPrefix[lang]}/${guide[1]}`
      : getLocalizedPath(clean, lang);
    // Never overwrite an explicitly registered translation group.
    if (routes.has(target) && !routeGroups.has(target)) group[lang] = target;
  }
  // Untranslated pages must retain their self-reference, including /fr/guides/ routes.
  const ownLang = getLangFromUrl(new URL(path, 'https://dirtyrabbit.es'));
  group[ownLang] = path;
  registerRoutes(group);
}

export function getAlternateUrls(currentPath: string, baseUrl: string) {
  const path = currentPath.replace(/\/$/, '') || '/';
  const group = routeGroups.get(path) || {};
  return Object.fromEntries(Object.entries(group).map(([lang, route]) =>
    [lang, route === '/' ? baseUrl : `${baseUrl}${route}`]
  )) as Partial<Record<Language, string>>;
}
