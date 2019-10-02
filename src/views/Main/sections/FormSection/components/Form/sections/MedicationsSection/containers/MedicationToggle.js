'use-strict';

import { connect } from 'react-redux';

import Toggle from '../../../../../../../../../components/Toggle';
import { toggleMedication } from '../../../../../../../../../redux/actions';
import { camelCase } from '../../../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toggle);

function mapStateToProps(state, { name }) {
  return {
    checked: selectMedicationisEnabledByName(state, name),
  };
}

function selectMedicationisEnabledByName(state, name) {
  const medication = camelCase.sliceFirstWord(name);
  return state.medications[medication].isEnabled;
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: event => handleChange(event, dispatch),
  };
}

function handleChange({ target: { name } }, dispatch) {
  const medication = camelCase.sliceFirstWord(name);
  return dispatch(toggleMedication(medication));
}
