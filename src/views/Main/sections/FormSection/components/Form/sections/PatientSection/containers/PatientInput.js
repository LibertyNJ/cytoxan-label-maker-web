import { connect } from 'react-redux';

import Input from '../../../../../../../../../components/Input';
import { changePatient } from '../../../../../../../../../redux/actions';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);

function mapStateToProps(state, { name }) {
  return {
    value: selectValueByName(state, name),
  };
}

function selectValueByName(state, name) {
  return state.patient[name];
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: event => handleChange(event, dispatch),
  };
}

function handleChange({ target: { name, value } }, dispatch) {
  return dispatch(changePatient(name, value));
}
