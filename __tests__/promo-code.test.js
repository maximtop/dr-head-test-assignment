import promoCode from '../src';

describe('Test promo-code function', () => {
  test('promo-code length must be equal to pattern length', () => {
    const pattern = 'XX-XXXX123';
    expect(promoCode(pattern).length).toBe(pattern.length);
  });
});

