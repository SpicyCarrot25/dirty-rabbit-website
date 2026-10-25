import { describe, expect, it } from 'vitest';
import { getSchemaOffers, getMenuPageView } from '../src/lib/menu';
import { languages } from '../src/i18n';

describe('menu pricing', () => {
  it('preserves single prices and extra charges', () => {
    expect(getSchemaOffers('+1.50')).toEqual({ '@type': 'Offer', price: '1.50', priceCurrency: 'EUR' });
    expect(getSchemaOffers('2,20')).toMatchObject({ price: '2.20' });
  });
  it('preserves both espresso and batch size prices', () => {
    expect(getSchemaOffers('1.90 / 2.40')).toEqual([
      { '@type': 'Offer', price: '1.90', priceCurrency: 'EUR' },
      { '@type': 'Offer', price: '2.40', priceCurrency: 'EUR' },
    ]);
  });
  it('represents cake ranges without inventing individual offers', () => {
    expect(getSchemaOffers('3.50-6.50')).toEqual({ '@type': 'AggregateOffer', lowPrice: '3.50', highPrice: '6.50', priceCurrency: 'EUR' });
  });
  it.each(['', 'ask us', '3.50 / unknown', '3.50-2.00', 'from 2.50'])('fails closed for unsupported pricing: %s', price => {
    expect(() => getSchemaOffers(price)).toThrow('Unsupported menu price');
  });
  it.each(languages)('uses only priced menu items for %s', lang => {
    const { schema } = getMenuPageView(lang);
    for (const section of schema.hasMenuSection) {
      for (const block of section.hasMenuSection) {
        expect(block.hasMenuItem).toBeDefined();
        for (const item of block.hasMenuItem as any[]) expect(item.offers).toBeDefined();
      }
    }
  });
});
