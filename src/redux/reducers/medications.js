'use-strict';

import {
  CHANGE_MEDICATION,
  TOGGLE_INFUSION_TIME_OVERRIDE,
  TOGGLE_MEDICATION,
} from '../actions/types';

const INITIAL_STATE = {
  cyclophosphamide: {
    infusionTime: '60',
    infusionTimeIsOverridden: false,
    isEnabled: true,
    specialInstructions: '',
    strength: '',
  },
  granisetron: {
    infusionTime: '30',
    infusionTimeIsOverridden: false,
    isEnabled: true,
    specialInstructions: '',
    strength: '',
  },
  mesna: {
    infusionTime: '15',
    infusionTimeIsOverridden: false,
    isEnabled: true,
    specialInstructions: '',
    strength: '',
  },
};

export default function medications(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MEDICATION:
      return {
        ...state,
        [action.medication]: {
          ...state[action.medication],
          [action.name]: action.value,
        },
      };
    case TOGGLE_INFUSION_TIME_OVERRIDE:
      return state[action.medication].infusionTimeIsOverridden
        ? {
          ...state,
          [action.medication]: {
            ...state[action.medication],
            infusionTime: INITIAL_STATE[action.medication].infusionTime,
            infusionTimeIsOverridden: false,
          },
        }
        : {
          ...state,
          [action.medication]: {
            ...state[action.medication],
            infusionTimeIsOverridden: true,
          },
        };
    case TOGGLE_MEDICATION:
      return state[action.medication].isEnabled
        ? {
          ...state,
          [action.medication]: {
            ...INITIAL_STATE[action.medication],
            isEnabled: false,
          },
        }
        : {
          ...state,
          [action.medication]: {
            ...state[action.medication],
            isEnabled: true,
          },
        };
    default:
      return state;
  }
}
