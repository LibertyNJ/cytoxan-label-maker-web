'use-strict';

import { joinStringsBySpace } from './index';

describe('joinStringsBySpace(...strings)', () => {
  test('Returns a concatenated string of passed strings joined by spaces when passed any number of strings.', () => {
    expect(joinStringsBySpace('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  test('Returns a passed string when passed a single string.', () => {
    expect(joinStringsBySpace('foo')).toBe('foo');
  });
});
