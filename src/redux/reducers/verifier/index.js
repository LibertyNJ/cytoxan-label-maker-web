'use-strict';

import { CHANGE_VERIFIER } from '../../actions/types';

export const INITIAL_STATE = '';

export default function verifier(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_VERIFIER:
      return action.value;
    default:
      return state;
  }
}
