import menuSource from '../data/menu.json';
import { getLocalizedPath, type Language } from '../i18n';

type LocalizedText = Partial<Record<Language, string>>;
type ItemId = string;

type MenuItemSource = {
  name: LocalizedText;
  price: string;
  desc?: LocalizedText;
  badge?: 'best-seller' | 'new';
};

type MenuListBlockSource = {
  type: 'list';
  title: LocalizedText;
  subtitle?: LocalizedText;
  items: ItemId[];
  descriptionStyle: 'inline' | 'stacked' | 'none';
  showBadges?: boolean;
  note?: LocalizedText;
  secondaryTitle?: LocalizedText;
  secondaryItems?: ItemId[];
  secondaryDescriptionStyle?: 'inline' | 'stacked' | 'none';
};

type MenuExtrasEntrySource = {
  label: LocalizedText;
  price: string;
};

type MenuExtrasGroupSource = {
  title?: LocalizedText;
  items: MenuExtrasEntrySource[];
};

type MenuExtrasBlockSource = {
  type: 'extras';
  title: LocalizedText;
  subtitle?: LocalizedText;
  groups: MenuExtrasGroupSource[];
  align?: 'left' | 'center';
};

type MenuBlockSource = MenuListBlockSource | MenuExtrasBlockSource;

type MenuSectionSource = {
  id: string;
  title: LocalizedText;
  blocks: MenuBlockSource[];
};

type MenuSource = {
  sections: MenuSectionSource[];
  items: Record<ItemId, MenuItemSource>;
};

export type MenuRenderItem = {
  name: string;
  price: string;
  desc?: string;
  badge?: string;
};

export type MenuRenderListBlock = {
  type: 'list';
  title: string;
  subtitle?: string;
  descriptionStyle: 'inline' | 'stacked' | 'none';
  items: MenuRenderItem[];
  note?: string;
  secondaryTitle?: string;
  secondaryItems?: MenuRenderItem[];
  secondaryDescriptionStyle?: 'inline' | 'stacked' | 'none';
};

export type MenuRenderExtrasBlock = {
  type: 'extras';
  title: string;
  subtitle?: string;
  align: 'left' | 'center';
  groups: Array<{
    title?: string;
    items: Array<{ label: string; price: string }>;
  }>;
};

export type MenuRenderBlock = MenuRenderListBlock | MenuRenderExtrasBlock;

export type MenuRenderSection = {
  id: string;
  title: string;
  blocks: MenuRenderBlock[];
};

export type MenuPageCopy = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbMenu: string;
  introBeforeLink: string;
  introLinkLabel: string;
  introAfterLink: string;
  footerNote: string;
};

export type MenuPageView = {
  lang: Language;
  canonicalUrl: string;
  page: MenuPageCopy;
  breadcrumbs: Array<{ name: string; url: string }>;
  producerPath: string;
  sections: MenuRenderSection[];
  schema: Record<string, unknown>;
};

const menu = menuSource as MenuSource;
const baseUrl = 'https://dirtyrabbit.es';

const badgeLabels: Record<'best-seller' | 'new', string> = {
  'best-seller': 'BEST SELLER',
  new: 'NEW'
};

const pageCopy: Record<Language, MenuPageCopy> = {
  es: {
    title: 'Carta de Dirty Rabbit',
    metaTitle: 'Carta — Dirty Rabbit',
    metaDescription: 'Carta de Dirty Rabbit: Brunch mediterráneo, tostadas de autor, repostería casera y café de especialidad. Opciones veganas y sin gluten disponibles.',
    breadcrumbHome: 'Inicio',
    breadcrumbMenu: 'Carta',
    introBeforeLink: 'Seleccionamos con intención todo lo que servimos. Productos locales y orgánicos de ',
    introLinkLabel: 'nuestros proveedores',
    introAfterLink: ', y también tesoros que amamos de fuera — café tostado en Copenhague, matcha orgánico de REQ Barcelona, pasteles de La Puntual Girona. Este es nuestro hogar, y queremos compartirlo contigo.',
    footerNote: 'Pregunta por alérgenos — la cocina no está 100% libre de gluten'
  },
  en: {
    title: 'Dirty Rabbit Menu',
    metaTitle: 'Menu — Dirty Rabbit',
    metaDescription: 'Dirty Rabbit menu: Mediterranean brunch, signature toasts, homemade pastries and specialty coffee. Vegan and gluten-free options available.',
    breadcrumbHome: 'Home',
    breadcrumbMenu: 'Menu',
    introBeforeLink: 'We choose everything we serve with intent. Local and organic goods from ',
    introLinkLabel: 'our producers',
    introAfterLink: ', plus a few things we love from farther away — coffee roasted in Copenhagen, organic matcha from REQ Barcelona, and pastries from La Puntual Girona. This is our home, and we like sharing it.',
    footerNote: 'Ask about allergens — the kitchen is not 100% gluten-free'
  },
  ca: {
    title: 'Carta',
    metaTitle: 'Carta — Dirty Rabbit',
    metaDescription: "Carta de Dirty Rabbit: brunch mediterrani, torrades d'autor, pastisseria casolana i cafè d'especialitat. Opcions veganes i sense gluten disponibles.",
    breadcrumbHome: 'Inici',
    breadcrumbMenu: 'Carta',
    introBeforeLink: 'Triem amb intenció tot el que servim. Producte local i orgànic dels ',
    introLinkLabel: 'nostres proveïdors',
    introAfterLink: ', i també algunes joies que ens encanta portar de fora — cafè torrat a Copenhaguen, matcha orgànic de REQ Barcelona i pastissos de La Puntual Girona. Aquesta és casa nostra, i ens agrada compartir-la.',
    footerNote: "Pregunta pels al·lèrgens — la cuina no és 100% lliure de gluten"
  },
  fr: {
    title: 'Carte',
    metaTitle: 'Carte — Dirty Rabbit',
    metaDescription: 'Carte Dirty Rabbit : brunch méditerranéen, tartines signature, pâtisseries maison et café de spécialité. Options véganes et sans gluten disponibles.',
    breadcrumbHome: 'Accueil',
    breadcrumbMenu: 'Carte',
    introBeforeLink: 'On choisit tout ce qu’on sert avec soin. Des produits locaux et bio venus de ',
    introLinkLabel: 'nos producteurs',
    introAfterLink: ', et quelques trésors qu’on aime aller chercher plus loin : café torréfié à Copenhague, matcha bio de REQ Barcelona et pâtisseries de La Puntual Girona. C’est chez nous, alors autant le partager.',
    footerNote: "Demandez les allergènes — la cuisine n'est pas 100% sans gluten"
  },
  pl: {
    title: 'Menu',
    metaTitle: 'Menu — Dirty Rabbit',
    metaDescription: 'Menu Dirty Rabbit: śródziemnomorski brunch, autorskie tosty, domowe wypieki i kawa speciality. Dostępne opcje wegańskie i bezglutenowe.',
    breadcrumbHome: 'Strona główna',
    breadcrumbMenu: 'Menu',
    introBeforeLink: 'Wszystko, co podajemy, wybieramy z sensem. Lokalne i organiczne produkty od ',
    introLinkLabel: 'naszych dostawców',
    introAfterLink: ', a do tego kilka rzeczy, po które chętnie sięgamy dalej — kawa palona w Kopenhadze, organiczna matcha od REQ Barcelona i wypieki z La Puntual Girona. To nasze miejsce i dobrze nam się nim dzieli.',
    footerNote: 'Zapytaj o alergeny — kuchnia nie jest w 100% bezglutenowa'
  },
  ru: {
    title: 'Меню',
    metaTitle: 'Меню — Dirty Rabbit',
    metaDescription: 'Меню Dirty Rabbit: средиземноморский бранч, авторские тосты, домашняя выпечка и спешелти-кофе. Есть веганские и безглютеновые опции.',
    breadcrumbHome: 'Главная',
    breadcrumbMenu: 'Меню',
    introBeforeLink: 'Всё, что мы подаём, выбираем внимательно. Локальные и органические продукты от ',
    introLinkLabel: 'наших поставщиков',
    introAfterLink: ', плюс несколько любимых находок издалека — кофе, обжаренный в Копенгагене, органическая матча от REQ Barcelona и выпечка La Puntual Girona. Это наш дом, и нам приятно делиться им.',
    footerNote: 'Спросите про аллергены — кухня не на 100% без глютена'
  },
  uk: {
    title: 'Меню',
    metaTitle: 'Меню — Dirty Rabbit',
    metaDescription: 'Меню Dirty Rabbit: середземноморський бранч, авторські тости, домашня випічка та спешелті кава. Є веганські та безглютенові опції.',
    breadcrumbHome: 'Головна',
    breadcrumbMenu: 'Меню',
    introBeforeLink: 'Усе, що ми подаємо, ми відбираємо уважно. Локальні та органічні продукти від ',
    introLinkLabel: 'наших постачальників',
    introAfterLink: ', а ще кілька улюблених речей здалеку — кава, обсмажена в Копенгагені, органічна матча від REQ Barcelona та випічка La Puntual Girona. Це наш дім, і нам подобається ним ділитися.',
    footerNote: 'Питайте про алергени — кухня не є 100% безглютеновою'
  }
};

function localize(text: LocalizedText | undefined, lang: Language) {
  return text?.[lang] ?? text?.es ?? '';
}

function toRenderItem(itemId: ItemId, lang: Language): MenuRenderItem {
  const item = menu.items[itemId];
  if (!item) {
    throw new Error(`Unknown menu item: ${itemId}`);
  }

  return {
    name: localize(item.name, lang),
    price: item.price,
    desc: localize(item.desc, lang) || undefined,
    badge: item.badge ? badgeLabels[item.badge] : undefined
  };
}

function toRenderBlock(block: MenuBlockSource, lang: Language): MenuRenderBlock {
  if (block.type === 'extras') {
    return {
      type: 'extras',
      title: localize(block.title, lang),
      subtitle: localize(block.subtitle, lang) || undefined,
      align: block.align ?? 'left',
      groups: block.groups.map((group) => ({
        title: localize(group.title, lang) || undefined,
        items: group.items.map((item) => ({
          label: localize(item.label, lang),
          price: item.price
        }))
      }))
    };
  }

  return {
    type: 'list',
    title: localize(block.title, lang),
    subtitle: localize(block.subtitle, lang) || undefined,
    descriptionStyle: block.descriptionStyle,
    items: block.items.map((itemId) => toRenderItem(itemId, lang)),
    note: localize(block.note, lang) || undefined,
    secondaryTitle: localize(block.secondaryTitle, lang) || undefined,
    secondaryItems: block.secondaryItems?.map((itemId) => toRenderItem(itemId, lang)),
    secondaryDescriptionStyle: block.secondaryDescriptionStyle
  };
}

function getSchemaPrice(price: string) {
  const match = price.match(/\d+(?:[.,]\d+)?/);
  return match ? match[0].replace(',', '.') : undefined;
}

function createSchemaItem(item: MenuRenderItem) {
  const schemaItem: Record<string, unknown> = {
    '@type': 'MenuItem',
    name: item.name,
    offers: {
      '@type': 'Offer',
      price: getSchemaPrice(item.price),
      priceCurrency: 'EUR'
    }
  };

  if (item.desc) {
    schemaItem.description = item.desc;
  }

  return schemaItem;
}

function createSchemaSection(block: MenuRenderBlock) {
  const section: Record<string, unknown> = {
    '@type': 'MenuSection',
    name: block.title
  };

  if (block.subtitle) {
    section.description = block.subtitle;
  }

  if (block.type === 'list') {
    const items = [...block.items, ...(block.secondaryItems ?? [])];
    section.hasMenuItem = items.map(createSchemaItem);
    return section;
  }

  const extrasItems = block.groups.flatMap((group) =>
    group.items.map((item) =>
      createSchemaItem({
        name: group.title ? `${group.title}: ${item.label}` : item.label,
        price: item.price
      })
    )
  );

  section.hasMenuItem = extrasItems;
  return section;
}

export function getMenuPageView(lang: Language): MenuPageView {
  const canonicalPath = getLocalizedPath('/carta', lang);
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  const page = pageCopy[lang];
  const sections = menu.sections.map((section) => ({
    id: section.id,
    title: localize(section.title, lang),
    blocks: section.blocks.map((block) => toRenderBlock(block, lang))
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: page.title,
    url: canonicalUrl,
    hasMenuSection: sections.map((section) => ({
      '@type': 'MenuSection',
      name: section.title,
      hasPart: section.blocks.map(createSchemaSection)
    }))
  };

  return {
    lang,
    canonicalUrl,
    page,
    breadcrumbs: [
      { name: page.breadcrumbHome, url: `${baseUrl}${lang === 'es' ? '/' : `/${lang}/`}` },
      { name: page.breadcrumbMenu, url: canonicalUrl }
    ],
    producerPath: getLocalizedPath('/proveedores', lang),
    sections,
    schema
  };
}
