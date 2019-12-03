import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassNames } from '../../../util';

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function Body({ children, className, ...restProps }) {
  return (
    <main className={reduceClassNames('d-flex d-print-block', className)} {...restProps}>
      {children}
    </main>
  );
}
