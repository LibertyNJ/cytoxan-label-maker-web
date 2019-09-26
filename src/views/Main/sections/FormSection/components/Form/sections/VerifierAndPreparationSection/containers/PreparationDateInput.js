'use-strict';

import { connect } from 'react-redux';

import Input from '../../../../../../../../../components/Input';
import { changePreparationDate } from '../../../../../../../../../redux/actions';

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
  return state.preparationDate;
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: event => handleChange(event, dispatch),
  };
}

function handleChange({ target: { value } }, dispatch) {
  return dispatch(changePreparationDate(value));
}
