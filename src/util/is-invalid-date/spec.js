'use-strict';

import { isInvalidDate } from './index';

describe('isInvalidDate(date)', () => {
  test('Returns true when passed an invalid Date object.', () => {
    expect(isInvalidDate(new Date('foo'))).toBe(true);
  });

  test('Returns false when passed a valid Date object.', () => {
    expect(isInvalidDate(new Date('2019-09-30T12:00:00'))).toBe(false);
  });
});
