'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

LabelSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function LabelSection({ children, ...restProps }) {
  return <section className="my-1" {...restProps}>{children}</section>;
}
