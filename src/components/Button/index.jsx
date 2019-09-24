'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassName } from '../../util';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function Button({ children, className, ...restProps }) {
  return (
    <button className={reduceClassName('btn', className)} {...restProps}>
      {children}
    </button>
  );
}
