import PropTypes from 'prop-types';
import React from 'react';

LabelSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function LabelSection({ children, ...restProps }) {
  return <section {...restProps}>{children}</section>;
}
