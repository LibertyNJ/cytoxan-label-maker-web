import PropTypes from 'prop-types';
import React from 'react';

import SVGIcon from './SVGIcon';

const Button = props => (
  <button className={`btn btn-${props.bootstrapColor} ${props.className}`} type={props.type}>
    {props.iconType && (
      <React.Fragment>
        <SVGIcon
          className="align-baseline"
          type={props.iconType}
          width="1em"
          height="1em"
          fill="white"
        />{' '}
      </React.Fragment>
    )}
    {props.text}
  </button>
);

Button.propTypes = {
  bootstrapColor: PropTypes.string,
  className: PropTypes.string,
  iconType: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  bootstrapColor: 'primary',
  className: '',
  iconType: undefined,
};

export default Button;
