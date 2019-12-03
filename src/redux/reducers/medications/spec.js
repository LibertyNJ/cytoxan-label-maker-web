import medications, { INITIAL_STATE } from './index';
import {
  CHANGE_MEDICATION,
  TOGGLE_INFUSION_TIME_OVERRIDE,
  TOGGLE_MEDICATION,
} from '../../actions/types';

describe('medications(state, action)', () => {
  test('Returns initial state.', () => {
    expect(medications(undefined, {})).toEqual(INITIAL_STATE);
  });

  test('Handles CHANGE_MEDICATION action.', () => {
    const action = {
      medication: 'cyclophosphamide',
      name: 'infusionTime',
      type: CHANGE_MEDICATION,
      value: 'foo',
    };
    expect(medications(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      cyclophosphamide: {
        ...INITIAL_STATE.cyclophosphamide,
        infusionTime: 'foo',
      },
    });
  });

  test('Handles TOGGLE_INFUSION_TIME_OVERRIDE action when isInfusionTimeOverridden state is false.', () => {
    const action = {
      medication: 'cyclophosphamide',
      type: TOGGLE_INFUSION_TIME_OVERRIDE,
    };
    expect(medications(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      cyclophosphamide: {
        ...INITIAL_STATE.cyclophosphamide,
        infusionTimeIsOverridden: true,
      },
    });
  });

  test('Handles TOGGLE_INFUSION_TIME_OVERRIDE action when isInfusionTimeOverridden state is true.', () => {
    const action = {
      medication: 'cyclophosphamide',
      type: TOGGLE_INFUSION_TIME_OVERRIDE,
    };
    const state = {
      ...INITIAL_STATE,
      cyclophosphamide: {
        ...INITIAL_STATE.cyclophosphamide,
        infusionTime: 'foo',
        infusionTimeIsOverridden: true,
      },
    };
    expect(medications(state, action)).toEqual(INITIAL_STATE);
  });

  test('Handles TOGGLE_MEDICATION action when isEnabled state is true.', () => {
    const action = {
      medication: 'cyclophosphamide',
      type: TOGGLE_MEDICATION,
    };
    const state = {
      ...INITIAL_STATE,
      cyclophosphamide: {
        ...INITIAL_STATE.cyclophosphamide,
        strength: 'foo',
      },
    };
    expect(medications(state, action)).toEqual({
      ...INITIAL_STATE,
      cyclophosphamide: {
        ...INITIAL_STATE.cyclophosphamide,
        isEnabled: false,
      },
    });
  });

  test('Handles TOGGLE_MEDICATION action when isEnabled state is false.', () => {
    const action = {
      medication: 'cyclophosphamide',
      type: TOGGLE_MEDICATION,
    };
    const state = {
      ...INITIAL_STATE,
      cyclophosphamide: {
        ...INITIAL_STATE.cyclophosphamide,
        isEnabled: false,
      },
    };
    expect(medications(state, action)).toEqual(INITIAL_STATE);
  });
});
