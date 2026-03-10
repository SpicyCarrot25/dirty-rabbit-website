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
  'carta': { es: 'carta', en: 'carta', ca: 'carta', fr: 'carte', ru: 'carta', uk: 'carta', pl: 'carta' },
  'carte': { es: 'carta', en: 'carta', ca: 'carta', fr: 'carte', ru: 'carta', uk: 'carta', pl: 'carta' },
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

// Prefixes that only exist in es/en/ca/fr — not in ru/uk/pl
const guidePrefixes = [
  '/articulos/', '/guia/', '/guide/', '/articles/',
  '/en/guide/', '/ca/guia/', '/fr/guide/', '/ca/articles/',
];

// Helper to get alternate language URLs for hreflang
// Only emits ru/uk/pl when the page actually exists in those locales
export function getAlternateUrls(currentPath: string, baseUrl: string) {
  const normalizedPath = currentPath.replace(/\/$/, '') || '/';
  const pathWithoutLang = normalizedPath.replace(/^\/(en|ca|fr|ru|uk|pl)(?=\/|$)/, '') || '/';

  const isGuideOnly = guidePrefixes.some(p =>
    pathWithoutLang === p.replace(/\/$/, '') || pathWithoutLang.startsWith(p)
  );

  const activeLocales: Language[] = isGuideOnly
    ? ['es', 'en', 'ca', 'fr']
    : ['es', 'en', 'ca', 'fr', 'ru', 'uk', 'pl'];

  const buildUrl = (lang: Language) => {
    const localizedPath = getLocalizedPath(pathWithoutLang, lang);
    return localizedPath === '/' ? baseUrl : `${baseUrl}${localizedPath}`;
  };

  const result: Partial<Record<Language, string>> = {};
  for (const lang of activeLocales) {
    result[lang] = buildUrl(lang);
  }
  return result as Record<Language, string>;
}
