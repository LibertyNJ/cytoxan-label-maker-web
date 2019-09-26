'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassName } from '../../../../../../../util';

CompoundingNotice.propTypes = {
  className: PropTypes.string,
};

export default function CompoundingNotice({ className, ...restProps }) {
  const BASE_CLASS_NAME = 'font-weight-bold label__compounding-notice text-center';
  return (
    <p className={reduceClassName(BASE_CLASS_NAME, className)} {...restProps}>
      * * * FOR COMPOUNDING ONLY * * *
    </p>
  );
}
