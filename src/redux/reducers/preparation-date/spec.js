'use-strict';

import preparationDate, { INITIAL_STATE } from './index';
import { CHANGE_PREPARATION_DATE } from '../../actions/types';

describe('preparationDate(state, action)', () => {
  test('Returns initial state.', () => {
    expect(preparationDate(undefined, {})).toEqual(INITIAL_STATE);
  });

  test('Handles CHANGE_PREPARATION_DATE action.', () => {
    const action = { type: CHANGE_PREPARATION_DATE, value: 'foo' };
    expect(preparationDate(undefined, action)).toEqual('foo');
  });
});
