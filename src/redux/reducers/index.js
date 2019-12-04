import { combineReducers } from 'redux';

import facility from './facility';
import medications from './medications';
import patient from './patient';
import preparationDate from './preparation-date';
import verifier from './verifier';

export default combineReducers({
  facility,
  medications,
  patient,
  preparationDate,
  verifier,
});
