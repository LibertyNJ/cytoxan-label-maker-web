'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassName } from '../../../../../../util';

LabelRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function LabelRow({ children, className, ...restProps }) {
  return (
    <div className={reduceClassName('d-flex justify-content-between', className)} {...restProps}>
      {children}
    </div>
  );
}
