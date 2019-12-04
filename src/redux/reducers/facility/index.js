import { CHANGE_FACILITY } from '../../actions/types';

export const INITIAL_STATE = {
  city: '',
  deaNumber: '',
  state: '',
  street: '',
  name: '',
  phone: '',
  zip: '',
};

export default function facility(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_FACILITY:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}
