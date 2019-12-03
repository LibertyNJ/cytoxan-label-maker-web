import verifier, { INITIAL_STATE } from './index';
import { CHANGE_VERIFIER } from '../../actions/types';

describe('verifier(state, action)', () => {
  test('Returns initial state.', () => {
    expect(verifier(undefined, {})).toEqual(INITIAL_STATE);
  });

  test('Handles CHANGE_VERIFIER action.', () => {
    const action = { type: CHANGE_VERIFIER, value: 'foo' };
    expect(verifier(undefined, action)).toEqual('foo');
  });
});
