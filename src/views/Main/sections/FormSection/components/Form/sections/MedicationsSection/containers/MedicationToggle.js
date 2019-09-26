'use-strict';

import { connect } from 'react-redux';

import Toggle from '../../../../../../../../../components/Toggle';
import { toggleMedication } from '../../../../../../../../../redux/actions';
import { extractMedicationFromName } from '../../../../../../../../../util';

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
  const medication = extractMedicationFromName(name);
  return state.medications[medication].isEnabled;
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: event => handleChange(event, dispatch),
  };
}

function handleChange({ target: { name } }, dispatch) {
  const medication = extractMedicationFromName(name);
  return dispatch(toggleMedication(medication));
}
