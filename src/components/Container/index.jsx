'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassNames } from '../../util';

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fluid: PropTypes.bool,
};

export default function Container({
  children, className, fluid, ...restProps
}) {
  const baseClassName = fluid ? 'container-fluid' : 'container';
  return (
    <div className={reduceClassNames(baseClassName, className)} {...restProps}>
      {children}
    </div>
  );
}
