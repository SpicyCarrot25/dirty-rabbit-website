import es from './es.json';
import en from './en.json';
import ca from './ca.json';

export const languages = ['es', 'en', 'ca'] as const;
export type Language = (typeof languages)[number];

export const defaultLang: Language = 'es';

const translations = { es, en, ca };

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
  'nosotros': { es: 'nosotros', en: 'about', ca: 'nosaltres' },
  'about': { es: 'nosotros', en: 'about', ca: 'nosaltres' },
  'nosaltres': { es: 'nosotros', en: 'about', ca: 'nosaltres' },
  // Suppliers page
  'proveedores': { es: 'proveedores', en: 'suppliers', ca: 'proveidors' },
  'suppliers': { es: 'proveedores', en: 'suppliers', ca: 'proveidors' },
  'proveidors': { es: 'proveedores', en: 'suppliers', ca: 'proveidors' },
  // Jobs page
  'trabajo': { es: 'trabajo', en: 'jobs', ca: 'feina' },
  'jobs': { es: 'trabajo', en: 'jobs', ca: 'feina' },
  'feina': { es: 'trabajo', en: 'jobs', ca: 'feina' },
  // FAQ page (same in all languages but include for safety)
  'faq': { es: 'faq', en: 'faq', ca: 'faq' },
  // Carta/Menu
  'carta': { es: 'carta', en: 'carta', ca: 'carta' },
  // News
  'news': { es: 'news', en: 'news', ca: 'news' },
};

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash and any existing language prefix (only if followed by / or end)
  const cleanPath = path.replace(/^\/(en|ca)(\/|$)/, '/').replace(/^\//, '');
  
  // Check if we have a mapping for this path
  const mappedPath = pathMappings[cleanPath]?.[lang] || cleanPath;
  
  if (lang === defaultLang) {
    return mappedPath ? `/${mappedPath}` : '/';
  }
  return mappedPath ? `/${lang}/${mappedPath}` : `/${lang}/`;
}

// Helper to get alternate language URLs for hreflang
export function getAlternateUrls(currentPath: string, baseUrl: string) {
  const cleanPath = currentPath.replace(/^\/?(en|ca)?\/?/, '');
  
  return {
    es: `${baseUrl}/${cleanPath}`.replace(/\/$/, '') || baseUrl,
    en: `${baseUrl}/en/${cleanPath}`.replace(/\/$/, '') || `${baseUrl}/en`,
    ca: `${baseUrl}/ca/${cleanPath}`.replace(/\/$/, '') || `${baseUrl}/ca`,
  };
}
