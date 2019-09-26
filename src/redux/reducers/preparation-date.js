'use-strict';

import { CHANGE_PREPARATION_DATE } from '../actions/types';

export default function medications(state = '', action) {
  switch (action.type) {
    case CHANGE_PREPARATION_DATE:
      return action.value;
    default:
      return state;
  }
}
