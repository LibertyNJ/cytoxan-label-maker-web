'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassName } from '../../util';

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  span: PropTypes.number,
};

export default function Column({
  children, className, span, ...restProps
}) {
  const baseClassName = span ? `col-${span}` : 'col';
  return (
    <div className={reduceClassName(baseClassName, className)} {...restProps}>
      {children}
    </div>
  );
}
