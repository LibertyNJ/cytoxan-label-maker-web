'use-strict';

import { camelCase } from './index';

describe('camelCase', () => {
  describe('.removeFirstWord(string)', () => {
    test('Returns a camelCase string without the first word when passed a camelCase string.', () => {
      expect(camelCase.removeFirstWord('fooBarBaz')).toBe('barBaz');
    });
  });

  describe('.sliceFirstWord(string)', () => {
    test('Returns first word of passed camelCase string.', () => {
      expect(camelCase.sliceFirstWord('fooBarBaz')).toBe('foo');
    });
  });
});
