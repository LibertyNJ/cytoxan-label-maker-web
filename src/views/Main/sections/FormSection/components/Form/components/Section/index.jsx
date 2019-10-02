'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassNames } from '../../../../../../../../util';

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
};

export default function Section({
  children, className, heading, ...restProps
}) {
  return (
    <section className={reduceClassNames('border p-3', className)} {...restProps}>
      <h3 className="text-primary">{heading}</h3>
      {children}
    </section>
  );
}
