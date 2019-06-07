import PropTypes from 'prop-types';
import React from 'react';

const LabelRow = ({ children }) => (
  <div className="d-flex justify-content-between m-0">{children}</div>
);

LabelRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LabelRow;
