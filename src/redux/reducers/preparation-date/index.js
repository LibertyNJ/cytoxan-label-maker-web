'use-strict';

import { CHANGE_PREPARATION_DATE } from '../../actions/types';

export const INITIAL_STATE = '';

export default function medications(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_PREPARATION_DATE:
      return action.value;
    default:
      return state;
  }
}
