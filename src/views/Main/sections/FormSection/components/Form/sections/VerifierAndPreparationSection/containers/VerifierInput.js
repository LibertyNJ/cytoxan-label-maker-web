import { connect } from 'react-redux';

import Input from '../../../../../../../../../components/Input';
import { changeVerifier } from '../../../../../../../../../redux/actions';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);

function mapStateToProps(state) {
  return {
    value: selectValue(state),
  };
}

function selectValue(state) {
  return state.verifier;
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: event => handleChange(event, dispatch),
  };
}

function handleChange({ target: { value } }, dispatch) {
  return dispatch(changeVerifier(value));
}
