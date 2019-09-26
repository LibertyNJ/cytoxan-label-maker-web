'use-strict';

import { connect } from 'react-redux';

import Toggle from '../../../../../../../../../../../components/Toggle';
import { toggleInfusionTimeOverride } from '../../../../../../../../../../../redux/actions';
import { extractMedicationFromName } from '../../../../../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toggle);

function mapStateToProps(state, { name }) {
  return {
    checked: getCheckedByName(state, name),
  };
}

function getCheckedByName(state, name) {
  const medication = extractMedicationFromName(name);
  return state.medications[medication].infusionTime.isOverridden;
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: event => handleChange(event, dispatch),
  };
}

function handleChange({ target: { name } }, dispatch) {
  const medication = extractMedicationFromName(name);
  return dispatch(toggleInfusionTimeOverride(medication));
}
