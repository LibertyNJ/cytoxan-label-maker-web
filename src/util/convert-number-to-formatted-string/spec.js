import { convertNumberToFormattedString } from './index';

describe('convertNumberToFormattedString(number)', () => {
  test('Returns passed number as a string.', () => {
    expect(convertNumberToFormattedString(25)).toBe('25');
  });

  test('Rounds number up to two decimal places.', () => {
    expect(convertNumberToFormattedString(25.0051)).toBe('25.01');
  });

  test('Rounds number down to two decimal places.', () => {
    expect(convertNumberToFormattedString(25.0143)).toBe('25.01');
  });

  test('Inserts comma as thousands separator.', () => {
    expect(convertNumberToFormattedString(2500)).toBe('2,500');
  });
});
