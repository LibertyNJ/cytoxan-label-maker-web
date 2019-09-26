'use-strict';

import { combineReducers } from 'redux';

import medications from './medications';
import patient from './patient';
import preparationDate from './preparation-date';
import verifier from './verifier';

export default combineReducers({
  medications,
  patient,
  preparationDate,
  verifier,
});
