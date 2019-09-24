'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassName } from '../../util';

Toggle.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  wrapperClassName: PropTypes.string,
};

export default function Toggle({
  className,
  label,
  labelClassName,
  name,
  type,
  wrapperClassName,
  ...restProps
}) {
  return (
    <div className={reduceClassName(`custom-control custom-${type}`, wrapperClassName)}>
      <input
        className={reduceClassName('custom-control-input', className)}
        id={name}
        name={name}
        type="checkbox"
        {...restProps}
      />
      <label className={reduceClassName('custom-control-label', labelClassName)} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
