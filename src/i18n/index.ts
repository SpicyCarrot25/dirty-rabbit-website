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

// Pages that only exist in English — no other locale version
const englishOnlyPages = new Set(['/matcha', '/privacy']);

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

// Helper to get alternate language URLs for hreflang
// Only emits locales where the page actually exists
export function getAlternateUrls(currentPath: string, baseUrl: string) {
  const normalizedPath = currentPath.replace(/\/$/, '') || '/';
  const pathWithoutLang = normalizedPath.replace(/^\/(en|ca|fr|ru|uk|pl)(?=\/|$)/, '') || '/';

  // English-only non-guide pages
  if (englishOnlyPages.has(pathWithoutLang)) {
    return { en: `${baseUrl}/en${pathWithoutLang}` } as Partial<Record<Language, string>>;
  }

  // Detect guide/article pages
  const guideMatch = pathWithoutLang.match(/^\/(guide|guia|articulos|articles)\/(.+)$/);
  if (guideMatch) {
    const slug = guideMatch[2];
    const mapping = guideSlugMap[slug];

    if (mapping) {
      // Mapped guide — use cross-locale slugs
      const result: Partial<Record<Language, string>> = {};
      for (const [lang, localSlug] of Object.entries(mapping) as [Language, string][]) {
        const prefix = guideSectionPrefix[lang];
        result[lang] = lang === defaultLang
          ? `${baseUrl}/${prefix}/${localSlug}`
          : `${baseUrl}/${lang}/${prefix}/${localSlug}`;
      }
      return result;
    }

    // Unmapped guide — assume same slug exists in all 4 guide locales
    const result: Partial<Record<Language, string>> = {};
    for (const lang of ['es', 'en', 'ca', 'fr'] as Language[]) {
      const prefix = guideSectionPrefix[lang];
      result[lang] = lang === defaultLang
        ? `${baseUrl}/${prefix}/${slug}`
        : `${baseUrl}/${lang}/${prefix}/${slug}`;
    }
    return result;
  }

  // Guide index pages (no slug)
  const isGuideIndex = ['/guide', '/guia', '/articulos', '/articles'].includes(pathWithoutLang);
  if (isGuideIndex) {
    const result: Partial<Record<Language, string>> = {};
    for (const lang of ['es', 'en', 'ca', 'fr'] as Language[]) {
      const prefix = guideSectionPrefix[lang];
      result[lang] = lang === defaultLang ? `${baseUrl}/${prefix}` : `${baseUrl}/${lang}/${prefix}`;
    }
    return result;
  }

  // Regular pages — all 7 locales
  const activeLocales: Language[] = ['es', 'en', 'ca', 'fr', 'ru', 'uk', 'pl'];

  const buildUrl = (lang: Language) => {
    const localizedPath = getLocalizedPath(pathWithoutLang, lang);
    return localizedPath === '/' ? baseUrl : `${baseUrl}${localizedPath}`;
  };

  const result: Partial<Record<Language, string>> = {};
  for (const lang of activeLocales) {
    result[lang] = buildUrl(lang);
  }
  return result;
}
