import MainView from '.';

describe('isStateNoLongerOverridden', () => {
  test("returns true when passed ('fooIsOverridden', false)", () => {
    expect(MainView.isStateNoLongerOverridden('fooIsOverridden', false)).toBe(true);
  });
});

describe('getOverriddenStatePropertyName', () => {
  test("returns foo when passed ('fooIsOverridden')", () => {
    expect(MainView.getOverriddenStatePropertyName('fooIsOverridden')).toBe('foo');
  });
});
