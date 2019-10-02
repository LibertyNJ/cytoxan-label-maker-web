'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import Body from './Body';
import Footer from './Footer';
import { reduceClassNames } from '../../util';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function Layout({ children, className, ...restProps }) {
  return (
    <div className={reduceClassNames('d-flex d-print-block flex-column vh-100', className)} {...restProps}>
      <Body className="flex-grow-1 flex-shrink-1">{children}</Body>
      <Footer className="flex-grow-0 flex-shrink-0" />
    </div>
  );
}
