import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassNames } from '../../../../../../../util';

CompoundingNotice.propTypes = {
  className: PropTypes.string,
};

export default function CompoundingNotice({ className, ...restProps }) {
  const BASE_CLASS_NAME = 'font-weight-bold label__compounding-notice text-center';
  return (
    <p className={reduceClassNames(BASE_CLASS_NAME, className)} {...restProps}>
      * * * FOR COMPOUNDING ONLY * * *
    </p>
  );
}
