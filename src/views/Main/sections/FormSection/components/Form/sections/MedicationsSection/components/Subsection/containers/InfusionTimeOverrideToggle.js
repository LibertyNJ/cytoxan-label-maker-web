import { connect } from 'react-redux';

import Toggle from '../../../../../../../../../../../components/Toggle';
import { toggleInfusionTimeOverride } from '../../../../../../../../../../../redux/actions';
import { camelCase } from '../../../../../../../../../../../util';

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
  const medication = camelCase.sliceFirstWord(name);
  return state.medications[medication].infusionTime.isOverridden;
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: event => handleChange(event, dispatch),
  };
}

function handleChange({ target: { name } }, dispatch) {
  const medication = camelCase.sliceFirstWord(name);
  return dispatch(toggleInfusionTimeOverride(medication));
}
