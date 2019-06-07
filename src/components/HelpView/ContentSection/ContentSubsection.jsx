import PropTypes from 'prop-types';
import React from 'react';

const ContentSubsection = ({ children, heading }) => (
  <section id={heading.replace(' ', '-').toLowerCase()}>
    <h3 className="text-primary">{heading}</h3>
    {children}
  </section>
);

ContentSubsection.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContentSubsection;
