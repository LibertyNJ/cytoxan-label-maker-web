'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassNames } from '../../util';

Toggle.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'switch']).isRequired,
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
    <div className={reduceClassNames(`custom-control custom-${type}`, wrapperClassName)}>
      <input
        className={reduceClassNames('custom-control-input', className)}
        id={name}
        name={name}
        type="checkbox"
        {...restProps}
      />
      <label className={reduceClassNames('custom-control-label', labelClassName)} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
