import { connect } from 'react-redux';

import Input from '../../../../../../../../../../../components/Input';
import { changeMedication } from '../../../../../../../../../../../redux/actions';
import { camelCase } from '../../../../../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);

function mapStateToProps(state, { name }) {
  return {
    disabled: isInfusionTime(name) ? !selectInfusionTimeIsOverriddenByName(state, name) : false,
    value: selectValueByName(state, name),
  };
}

function isInfusionTime(name) {
  return /InfusionTime/.test(name);
}

function selectInfusionTimeIsOverriddenByName(state, name) {
  const medication = camelCase.sliceFirstWord(name);
  return state.medications[medication].infusionTimeIsOverridden;
}

function selectValueByName(state, name) {
  const medication = camelCase.sliceFirstWord(name);
  const key = camelCase.removeFirstWord(name);
  return state.medications[medication][key];
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: event => handleChange(event, dispatch),
  };
}

function handleChange({ target: { name, value } }, dispatch) {
  const medication = camelCase.sliceFirstWord(name);
  const key = camelCase.removeFirstWord(name);
  return dispatch(changeMedication(medication, key, value));
}
