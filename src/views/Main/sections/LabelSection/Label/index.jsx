'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import LowerHalf from './LowerHalf';
import UpperHalf from './UpperHalf';
import { reduceClassName } from '../../../../../util';

Label.propTypes = {
  className: PropTypes.string,
};

export default function Label({ className, ...restProps }) {
  return (
    <article className={reduceClassName('label', className)}>
      <div className="label__body">
        <UpperHalf {...restProps} />
        <LowerHalf {...restProps} />
      </div>
    </article>
  );
}
