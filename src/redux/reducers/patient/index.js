import { CHANGE_PATIENT } from '../../actions/types';

export const INITIAL_STATE = {
  dateOfBirth: '',
  firstName: '',
  lastName: '',
  medicalRecordNumber: '',
  middleInitial: '',
};

export default function patient(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_PATIENT:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}
