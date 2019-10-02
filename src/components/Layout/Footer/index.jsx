'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import CopyrightWidget from './CopyrightWidget';
import VersionWidget from './VersionWidget';
import { reduceClassNames } from '../../../util';

Footer.propTypes = {
  className: PropTypes.string,
};

export const BASE_CLASS_NAME = 'bg-dark d-flex d-print-none justify-content-between px-3 py-1 text-light';

export default function Footer({ className, ...restProps }) {
  return (
    <footer className={reduceClassNames(BASE_CLASS_NAME, className)} {...restProps}>
      <VersionWidget className="mb-0" />
      <CopyrightWidget className="mb-0" />
    </footer>
  );
}
