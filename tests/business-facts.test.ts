import { beforeEach, afterEach, describe, expect, it } from 'vitest';
import { businessFacts, getFactCopy, getBusinessSchema, getMachineFacts, getLlmsText, getBusinessTranslation, serializeSchema } from '../src/lib/business-facts';
const original = structuredClone(businessFacts.confirmed);
afterEach(() => Object.assign(businessFacts.confirmed, original));
const confirmed = businessFacts.confirmed as any;
beforeEach(() => { for (const key of Object.keys(confirmed)) confirmed[key] = null; });
const copies = businessFacts.published.copy as Record<string, any>;
describe('business facts', () => {
  it('keeps every published copy and schema with all confirmations blank', () => {
    for (const [id, copy] of Object.entries(copies)) expect(getFactCopy(id)).toBe(copy.value);
    for (const [id, schema] of Object.entries(businessFacts.published.schemas)) expect(getBusinessSchema(id)).toEqual(schema);
    expect(getMachineFacts()).toEqual(businessFacts.published.machineFacts);
    expect(getLlmsText()).toBe(businessFacts.published.llms);
  });
  it('propagates one confirmed street to all registered address copy, schema and feeds', () => {
    confirmed.address = { streetAddress: 'TEST ONLY STREET 999', addressLocality: 'Test Town', addressRegion: 'Test Region', postalCode: '00000', addressCountry: 'ES' };
    for (const [id, copy] of Object.entries(copies).filter(([,c]) => c.kinds.includes('address'))) expect(getFactCopy(id), id).toContain('TEST ONLY STREET 999');
    const walk = (v: any) => { if (!v || typeof v !== 'object') return; if (v.name?.includes('Dirty Rabbit') && v.address) expect(v.address.streetAddress).toBe('TEST ONLY STREET 999'); for (const child of Object.values(v)) walk(child); };
    for (const id of Object.keys(businessFacts.published.schemas)) walk(getBusinessSchema(id));
    expect(getMachineFacts().location.address).toBe('TEST ONLY STREET 999');
    expect(getLlmsText()).toContain('TEST ONLY STREET 999');
    expect(getBusinessTranslation('fr').address).toBe('TEST ONLY STREET 999');
  });
  it('updates all registered hours claims with a single schedule', () => {
    confirmed.regularHours = [{ dayOfWeek: ['Wednesday'], opens: '09:17', closes: '16:23' }];
    for (const [id, copy] of Object.entries(copies).filter(([,c]) => c.kinds.includes('regularHours'))) expect(getFactCopy(id), id + ': ' + copy.value).toContain('16:23');
    expect(getMachineFacts().hours.wednesday).toBe('09:17-16:23');
    expect(getBusinessTranslation('ca').hours).toContain('16:23');
  });
  it('replaces all registered year-round promises once winter dates are confirmed', () => {
    confirmed.winterClosure = [{from:'2099-01-02',through:'2099-02-03'}];
    for (const [id, copy] of Object.entries(copies).filter(([,c]) => c.kinds.includes('winterClosure'))) expect(getFactCopy(id), id + ': ' + copy.value).toContain('2099-01-02');
    expect(getLlmsText()).toContain('2099-01-02');
  });
  it('escapes HTML inside JSON-LD', () => expect(serializeSchema({ name: '</script><script>alert(1)</script>' })).not.toContain('<'));
});

describe('seasonal and menu updates', () => {
  it('propagates confirmed summer hours to registered seasonal claims', () => {
    confirmed.summerHours = [{ dayOfWeek: ['Wednesday'], opens: '09:17', closes: '17:43', validFrom: '2099-06-01', validThrough: '2099-09-30' }];
    for (const [id, copy] of Object.entries(copies).filter(([,c]) => c.kinds.includes('summerHours'))) expect(getFactCopy(id), id + ': ' + copy.value).toContain('17:43');
  });
  it('uses the menu catalog price in named editorial items after confirmation', () => {
    const item = businessFacts.published.menu.items['avo-good-day']; const old = item.price;
    try {
      confirmed.menu = true; item.price = '12.34';
      const named = Object.entries(copies).filter(([,c]) => c.kinds.includes('menu') && /Avo Good Day/.test(c.value));
      expect(named.length).toBeGreaterThanOrEqual(4);
      for (const [id] of named) expect(getFactCopy(id), id).toContain('12.34');
    } finally { item.price = old; }
  });
  it('can change kitchen closing alone without losing the published opening hours', () => {
    confirmed.kitchenCloses = '14:17';
    for (const lang of ['es','en','ca','fr','ru','uk','pl'] as const) {
      expect(getBusinessTranslation(lang).hours).toContain('14:17');
      expect(getBusinessTranslation(lang).hours).toMatch(/15[:h]00/);
    }
  });
  it('keeps neighboring cafés in a mixed winter paragraph unchanged', () => {
    confirmed.winterClosure = [{from:'2099-01-02',through:'2099-02-03'}];
    const entry = Object.entries(copies).find(([,c]) => c.lang === 'en' && c.value.includes('Hostal de la Gavina'))!;
    expect(getFactCopy(entry[0])).toContain('Hostal de la Gavina has seasons (check). Villamás may close or reduce in winter.');
  });
});
