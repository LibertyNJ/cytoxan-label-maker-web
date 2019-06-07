import formatNumberAsString from './format-number-as-string';

describe('formatNumberAsString', () => {
  test('converts a number to a string', () => {
    expect(formatNumberAsString(25)).toBe('25');
  });

  test('rounds up to two decimal places', () => {
    expect(formatNumberAsString(25.0051)).toBe('25.01');
  });

  test('rounds down to two decimal places', () => {
    expect(formatNumberAsString(25.0143)).toBe('25.01');
  });

  test('inserts comma as thousands separator', () => {
    expect(formatNumberAsString(2500)).toMatch(/\d,\d\d\d/);
  });
});
