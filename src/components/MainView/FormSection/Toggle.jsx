import PropTypes from 'prop-types';
import React from 'react';

const Toggle = props => (
  <div className={`custom-control custom-${props.type} ${props.wrapperClassName}`}>
    <input
      id={props.name}
      className="custom-control-input"
      type="checkbox"
      name={props.name}
      checked={props.checked}
      onChange={props.handleChange}
    />
    <label className={`custom-control-label ${props.labelClassName}`} htmlFor={props.name}>
      {props.label}
    </label>
  </div>
);

Toggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  wrapperClassName: PropTypes.string,
};

Toggle.defaultProps = {
  labelClassName: undefined,
  wrapperClassName: undefined,
};

export default Toggle;
