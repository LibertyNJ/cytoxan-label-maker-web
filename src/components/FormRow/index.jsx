'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassName } from '../../util';

FormRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function FormRow({ children, className, ...restProps }) {
  return (
    <div className={reduceClassName('form-row', className)} {...restProps}>
      {children}
    </div>
  );
}
