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
const pathMappings: Record<string, Record<Language, string>> = {
  'trabajo': { es: 'trabajo', en: 'jobs', ca: 'feina' },
  'nosotros': { es: 'nosotros', en: 'about', ca: 'nosaltres' },
  'proveedores': { es: 'proveedores', en: 'suppliers', ca: 'proveidors' },
  'about': { es: 'nosotros', en: 'about', ca: 'nosaltres' },
};

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash and any existing language prefix
  const cleanPath = path.replace(/^\/?(en|ca)?\/?/, '');
  
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
