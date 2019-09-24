'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import VersionWidget from './VersionWidget';
import { reduceClassName } from '../../../util';

Footer.propTypes = {
  className: PropTypes.string,
};

export default function Footer({ className, ...restProps }) {
  const BASE_CLASS_NAME = 'bg-dark d-flex d-print-none justify-content-between px-3 py-1 text-light';
  return (
    <footer className={reduceClassName(BASE_CLASS_NAME, className)} {...restProps}>
      <VersionWidget className="mb-0" />
    </footer>
  );
}
