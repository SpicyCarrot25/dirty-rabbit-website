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

// Helper to get alternate language URLs for hreflang
export function getAlternateUrls(currentPath: string, baseUrl: string) {
  const cleanPath = currentPath.replace(/^\/?(en|ca|fr|ru|uk|pl)?\/?/, '');
  
  return {
    es: `${baseUrl}/${cleanPath}`.replace(/\/$/, '') || baseUrl,
    en: `${baseUrl}/en/${cleanPath}`.replace(/\/$/, '') || `${baseUrl}/en`,
    ca: `${baseUrl}/ca/${cleanPath}`.replace(/\/$/, '') || `${baseUrl}/ca`,
    fr: `${baseUrl}/fr/${cleanPath}`.replace(/\/$/, '') || `${baseUrl}/fr`,
    ru: `${baseUrl}/ru/${cleanPath}`.replace(/\/$/, '') || `${baseUrl}/ru`,
    uk: `${baseUrl}/uk/${cleanPath}`.replace(/\/$/, '') || `${baseUrl}/uk`,
    pl: `${baseUrl}/pl/${cleanPath}`.replace(/\/$/, '') || `${baseUrl}/pl`,
  };
}
