import source from '../data/business-facts.json';

// This is a preparation snapshot, not a new assertion of business facts.
// Every null confirmation keeps the exact published variant for that surface.
export const businessFacts = source;
type Language = 'es' | 'en' | 'ca' | 'fr' | 'ru' | 'uk' | 'pl';
type Hours = { dayOfWeek: string[]; opens: string; closes: string; validFrom?: string; validThrough?: string }[];
type Confirmed = {
  address: Record<string, string> | null;
  coordinates: { latitude: number; longitude: number } | null;
  regularHours: Hours | null;
  kitchenCloses: string | null;
  summerHours: Hours | null;
  winterClosure: { from: string; through: string }[] | null;
  menu: boolean | null;
};
const confirmed = source.confirmed as Confirmed;
const copies = source.published.copy as Record<string, { value: string; lang: Language; kinds: string[]; html: boolean }>;
const schemas = source.published.schemas as Record<string, any>;
const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const streetPattern = "(?:Carrer de la Conca\\s*,?\\s*17|(?:Avenida|Avinguda|Avda\\.|Av\\.)(?: de)? (?:Platja|Playa) (?:d(?:['’]|&#39;|&apos;)Aro|de Aro),? 275(?: - Local 2)?)";
const townPattern = "S(?:'|&#39;|&apos;)Agar[oó]";
const addressPattern = new RegExp(streetPattern + `(?:(?:, | · )(?:17248 ${townPattern}, Girona(?:, Spain)?|${townPattern}(?:,? \\(?17248\\)?(?: Girona)?)?(?:, Girona(?:, Spain)?)?))?`, 'gi');
const labels: Record<Language, { hours: string; summer: string; winter: string; kitchen: string; menu: string }> = {
  es: { hours: 'Horario', summer: 'Horario de verano', winter: 'Cierres previstos', kitchen: 'Cocina hasta', menu: 'Carta' },
  en: { hours: 'Hours', summer: 'Summer hours', winter: 'Planned closures', kitchen: 'Kitchen until', menu: 'Menu' },
  ca: { hours: 'Horari', summer: "Horari d’estiu", winter: "Tancament d’hivern", kitchen: 'Cuina fins', menu: 'Carta' },
  fr: { hours: 'Horaires', summer: "Horaires d’été", winter: 'Fermetures prévues', kitchen: "Cuisine jusqu’à", menu: 'Carte' },
  ru: { hours: 'Часы работы', summer: 'Летние часы', winter: 'Зимнее закрытие', kitchen: 'Кухня до', menu: 'Меню' },
  uk: { hours: 'Години роботи', summer: 'Літні години', winter: 'Зимове закриття', kitchen: 'Кухня до', menu: 'Меню' },
  pl: { hours: 'Godziny', summer: 'Godziny letnie', winter: 'Przerwa zimowa', kitchen: 'Kuchnia do', menu: 'Menu' }
};
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function hoursText(hours: Hours, lang: Language) {
  return hours.map(h => {
    const days = h.dayOfWeek.map(day => new Intl.DateTimeFormat(lang, { weekday: 'short', timeZone: 'UTC' })
      .format(new Date(Date.UTC(2026, 0, 4 + weekdays.indexOf(day))))).join(', ');
    return `${days}: ${h.opens}–${h.closes}${h.validFrom ? ` (${h.validFrom} – ${h.validThrough})` : ''}`;
  }).join('; ');
}
function closureText(lang: Language) {
  if (!confirmed.winterClosure) return '';
  const dates = confirmed.winterClosure.map(c => `${c.from} – ${c.through}`).join('; ');
  const none = { es: 'ninguno', en: 'none', ca: 'cap', fr: 'aucune', ru: 'нет', uk: 'немає', pl: 'brak' }[lang];
  return `${labels[lang].winter}: ${dates || none}.`;
}
export function serializeSchema(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function confirmedSchedule() {
  if (!confirmed.regularHours) return undefined;
  return [...confirmed.regularHours, ...(confirmed.summerHours || [])].map(h => ({ '@type': 'OpeningHoursSpecification', ...h }));
}
function closureSchema() {
  return confirmed.winterClosure?.map(c => ({ '@type': 'OpeningHoursSpecification', validFrom: c.from, validThrough: c.through, opens: '00:00', closes: '00:00' }));
}

// Preserve surrounding editorial copy and facts about other cafés. Only registered
// Dirty Rabbit claims participate in these substitutions.
function resolveCopy(value: string, kinds: string[], lang: Language, html: boolean) {
  let result = value;
  const safe = (text: string) => html ? escapeHtml(text) : text;
  if (kinds.includes('address') && confirmed.address) {
    result = result.replace(addressPattern, match => {
      const address = confirmed.address!;
      const full = /17248|Agar/.test(match);
      return safe(full ? `${address.streetAddress}, ${address.postalCode} ${address.addressLocality}, ${address.addressRegion}, ${address.addressCountry}` : address.streetAddress);
    });
  }
  if (kinds.includes('regularHours') && confirmed.regularHours) {
    const schedule = safe(hoursText(confirmed.regularHours, lang));
    const ranges = /(?:[Dd]e |[Dd]u )?(?:martes(?: a |–|-)(?:domingo)|[Dd]imarts(?: a |–|-)(?:diumenge)|[Tt]uesday(?: through | to |–|-)[Ss]unday|[Mm]ardi(?: au |–|-)[Dd]imanche|Mar-Dom)(?:,? (?:de |from |de les )?)?(?:0?8[^<.]*?(?:15(?::00|h00|h)?|3pm))|0?8(?::00|h00|h|am)?\s*(?:[–-]|a(?: les| las)?|to|until|à)\s*(?:15(?::00|h00|h)?|3pm)/g;
    result = result.replace(ranges, schedule);
    result = result.replace(/(?:[Cc]ierra a las|[Tt]anca a les|[Cc]loses at|[Ff]erme a) 15:00[^<.]*/g, schedule);
    const closed = weekdays.filter(day => !confirmed.regularHours!.some(h => h.dayOfWeek.includes(day)));
    const closedNames = closed.map(day => new Intl.DateTimeFormat(lang, { weekday: 'long', timeZone: 'UTC' }).format(new Date(Date.UTC(2026, 0, 4 + weekdays.indexOf(day))))).join(', ');
    const word = { es: 'Cerrado', en: 'Closed', ca: 'Tancat', fr: 'Fermé', ru: 'Закрыто', uk: 'Зачинено', pl: 'Zamknięte' }[lang];
    result = result.replace(/(?:Lunes cerrado|Cerramos todos los lunes|Dilluns tancat|Tanquem tots els dilluns|Closed (?:every )?Monday|Fermé le lundi)/g, safe(closed.length ? `${word}: ${closedNames}` : ''));
  }
  if (kinds.includes('summerHours') && confirmed.summerHours) {
    const summary = safe(`${labels[lang].summer}: ${hoursText(confirmed.summerHours, lang) || '—'}`);
    result = result.replace(/(?:En verano|A l'estiu|In summer|En été)[^<.]*?(?:17h|5pm)(?:\.)?/g, summary + '.');
    result = result.replace(/8(?::00|h00)–17(?::00|h00) \((?:verano|summer|estiu|été)\)/g, summary);
    result = result.replace(/(?:During summer|En été)[^<.]*?(?:5pm|17h)/g, summary);
  }
  if (kinds.includes('winterClosure') && confirmed.winterClosure) {
    const closure = closureText(lang);
    result = result.replace(/\((?:winter|invierno|hivern|hiver)\)/g, '(' + safe(closure) + ')');
    const availability = { es: 'durante los periodos de apertura', en: 'during opening periods', ca: "durant els períodes d’obertura", fr: "pendant les périodes d’ouverture", ru: 'в периоды работы', uk: 'у періоди роботи', pl: 'w okresach otwarcia' }[lang];
    const phrase = safe(availability);
    result = result.replace(/todo el año|tot l(?:'|&#39;)any|toute l(?:'|&#39;)année|year.round/gi, phrase);
    const checkClosures = { es: 'Consulta los cierres previstos', en: 'Check the planned closures', ca: 'Consulta els tancaments previstos', fr: 'Consultez les fermetures prévues', ru: 'Проверьте даты закрытия', uk: 'Перевірте дати закриття', pl: 'Sprawdź planowane zamknięcia' }[lang];
    result = result.replace(/No cerramos en invierno|No tanquem a l'hivern|We don't close in winter|Nous ne fermons pas en hiver/g, safe(checkClosures));
    // These old invitations specifically promise a January/February visit.
    result = result.replace(/(?:Así que si vienes en enero|Així que si véns al gener|So if you're visiting in January)[^.]*\./g, safe(closure));
    result = result.replace(/(Dirty Rabbit(?:<\/strong>)? )(?:en invierno|a l(?:'|&#39;)hivern|en hiver|in winter)/g, (_, prefix) => prefix + safe(closure));
    result = result.replace(/(?:también abrimos en meses intermedios|apertura en shoulder seasons)/g, safe(closure));
    if (!result.includes(confirmed.winterClosure[0]?.from || closure)) result += ` ${safe(closure)}`;
  }
  if (kinds.includes('menu') && confirmed.menu) result = updateMenuPrices(result, lang, html);
  return result;
}

export function getFactCopy(id: string) {
  const copy = copies[id];
  if (!copy) throw new Error(`Unknown business copy: ${id}`);
  return resolveCopy(copy.value, copy.kinds, copy.lang, copy.html);
}

function updateMenuPrices(value: string, lang: Language, html: boolean) {
  const entries = Object.entries(source.published.menu.items);
  const aliases = (source.confirmed.menuAliases || {}) as Record<string, string[]>;
  // Named menu items have an unambiguous reference. Estimates and unnamed ranges
  // remain published variants, explicitly listed for Franc in the conflict inventory.
  for (const [id, item] of entries) {
    const names = [...Object.values(item.name), ...(aliases[id] || [])].sort((a,b) => b.length-a.length);
    for (const name of new Set(names)) {
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(`(${escaped}(?:<[^>]*>|[^€<>.\\d]){0,45})(€\\s*\\d+(?:[.,]\\d+)?|\\d+(?:[.,]\\d+)?\\s*€)`, 'gi');
      const price = `€${item.price}`;
      value = value.replace(pattern, (_, prefix) => prefix + (html ? escapeHtml(price) : price));
    }
  }
  return value;
}

export function applyBusinessFacts(value: any, lang: Language = 'es'): any {
  if (Array.isArray(value)) return value.map(v => applyBusinessFacts(v, lang));
  if (!value || typeof value !== 'object') return value;
  const result = Object.fromEntries(Object.entries(value).map(([key, v]) => [key, applyBusinessFacts(v, lang)])) as any;
  if (/Dirty Rabbit/.test(value.name || '') && /CafeOrCoffeeShop|LocalBusiness|Restaurant/.test(String(value['@type']))) {
    if (confirmed.address) result.address = { '@type': 'PostalAddress', ...confirmed.address };
    if (confirmed.coordinates) result.geo = { '@type': 'GeoCoordinates', ...confirmed.coordinates };
    const schedule = confirmedSchedule();
    if (schedule) result.openingHoursSpecification = schedule;
    const closures = closureSchema();
    if (closures) result.specialOpeningHoursSpecification = closures;
  }
  // FAQ answers and descriptions use the very same registered prose as visible copy.
  for (const key of ['text', 'description']) {
    if (typeof result[key] === 'string') {
      const matching = Object.values(copies).find(c => c.lang === lang && c.value.replace(/<[^>]*>/g, '').trim() === result[key].trim());
      if (matching) result[key] = resolveCopy(result[key], matching.kinds, lang, false);
      else if (confirmed.address) result[key] = result[key].replace(addressPattern, confirmed.address.streetAddress);
    }
  }
  return result;
}
export function getBusinessSchema(id: string, lang: Language = 'es') {
  if (!(id in schemas)) throw new Error(`Unknown business schema: ${id}`);
  return applyBusinessFacts(schemas[id], lang);
}
export function getBusinessField(id: string, field: string) {
  if (field === 'address' && confirmed.address) return { '@type': 'PostalAddress', ...confirmed.address };
  if (field === 'geo' && confirmed.coordinates) return { '@type': 'GeoCoordinates', ...confirmed.coordinates };
  if (field === 'openingHoursSpecification' && confirmed.regularHours) return confirmedSchedule();
  return schemas[id];
}
export function getBusinessTranslation(lang: Language) {
  const existing = source.published.translations[lang];
  const address = confirmed.address;
  const hours = confirmed.regularHours;
  return {
    ...existing,
    ...(address ? { address: address.streetAddress, city: `${address.postalCode} ${address.addressLocality}, ${address.addressRegion}` } : {}),
    ...(hours ? { hours: hoursText(hours, lang) + ` (${labels[lang].kitchen} ${confirmed.kitchenCloses || source.published.kitchenCloses})`, closed: closureText(lang) } : confirmed.kitchenCloses ? { hours: existing.hours.replace(/14(?::00|h00)/, confirmed.kitchenCloses) } : {}),
    ...(!hours && confirmed.winterClosure ? { closed: existing.closed + '. ' + closureText(lang) } : {})
  };
}
export function getMachineFacts() {
  const result = structuredClone(source.published.machineFacts) as any;
  if (confirmed.address) Object.assign(result.location, {
    address: confirmed.address.streetAddress, city: confirmed.address.addressLocality,
    region: confirmed.address.addressRegion, postalCode: confirmed.address.postalCode, country: confirmed.address.addressCountry
  });
  if (confirmed.coordinates) result.location.coordinates = { lat: confirmed.coordinates.latitude, lng: confirmed.coordinates.longitude };
  if (confirmed.regularHours) result.hours = Object.fromEntries(weekdays.map(day => {
    const h = confirmed.regularHours!.find(h => h.dayOfWeek.includes(day));
    return [day.toLowerCase(), h ? `${h.opens}-${h.closes}` : 'closed'];
  }));
  if (confirmed.summerHours) result.summerHours = confirmed.summerHours;
  if (confirmed.winterClosure) result.winterClosure = confirmed.winterClosure;
  if (confirmed.kitchenCloses) result.kitchenCloses = confirmed.kitchenCloses;
  return result;
}
export function getLlmsText() {
  let text = source.published.llms;
  if (confirmed.address) text = text.replace(/- \*\*Address:\*\* .*/, `- **Address:** ${Object.values(confirmed.address).join(', ')}`);
  if (confirmed.regularHours) text = text.replace(/- \*\*Hours:\*\* .*/, `- **Hours:** ${hoursText(confirmed.regularHours, 'en')}`);
  if (confirmed.summerHours) text += `\n- **Summer hours:** ${hoursText(confirmed.summerHours, 'en')}\n`;
  if (confirmed.winterClosure) text += `\n- **Winter:** ${closureText('en')}\n`;
  return text;
}

export function getBusinessMapEmbedUrl() {
  return source.confirmed.mapEmbedUrl || source.published.mapEmbedUrl;
}

export function getWinterNotice(lang: Language) {
  return confirmed.winterClosure === null ? '' : closureText(lang);
}
