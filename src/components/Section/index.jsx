'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

Section.propTypes = {};

export default function Section({ children, level, ...restProps }) {
  return <section>
  <Header></Header>
  {children}</section>;
}
