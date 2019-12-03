import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassNames } from '../../../../../../../util';

LabelRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function LabelRow({ children, className, ...restProps }) {
  return (
    <div className={reduceClassNames('d-flex justify-content-between', className)} {...restProps}>
      {children}
    </div>
  );
}
