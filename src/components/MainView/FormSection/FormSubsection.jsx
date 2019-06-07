import PropTypes from 'prop-types';
import React from 'react';

const FormSubsection = ({ heading, children }) => (
  <section className="p-3 border mb-3 overflow-hidden">
    <h3 className="text-primary">{heading}</h3>
    {children}
  </section>
);

FormSubsection.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default FormSubsection;
