'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassName } from '../../util';

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function Row({ children, className, ...restProps }) {
  return (
    <div className={reduceClassName('row', className)} {...restProps}>
      {children}
    </div>
  );
}
