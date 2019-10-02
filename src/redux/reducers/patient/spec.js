'use-strict';

import patient, { INITIAL_STATE } from './index';
import { CHANGE_PATIENT } from '../../actions/types';

describe('patient(state, action)', () => {
  test('Returns initial state.', () => {
    expect(patient(undefined, {})).toEqual(INITIAL_STATE);
  });

  test('Handles CHANGE_PATIENT action.', () => {
    const action = {
      name: 'firstName',
      type: CHANGE_PATIENT,
      value: 'foo',
    };
    expect(patient(undefined, action)).toEqual({
      ...INITIAL_STATE,
      firstName: 'foo',
    });
  });
});
