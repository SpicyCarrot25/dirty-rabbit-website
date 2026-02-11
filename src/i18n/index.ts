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

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash and any existing language prefix
  const cleanPath = path.replace(/^\/?(en|ca)?\/?/, '');
  
  if (lang === defaultLang) {
    return cleanPath ? `/${cleanPath}` : '/';
  }
  return cleanPath ? `/${lang}/${cleanPath}` : `/${lang}/`;
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
