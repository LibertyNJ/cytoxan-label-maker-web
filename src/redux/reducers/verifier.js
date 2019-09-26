'use-strict';

import { CHANGE_VERIFIER } from '../actions/types';

export default function medications(state = '', action) {
  switch (action.type) {
    case CHANGE_VERIFIER:
      return action.value;
    default:
      return state;
  }
}
