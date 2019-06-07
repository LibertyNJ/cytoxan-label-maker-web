import PropTypes from 'prop-types';
import React from 'react';

import DocumentFragmentLink from '../DocumentFragmentLink';

const TopicsSection = () => (
  <nav className="col-3">
    <h2 className="text-primary">Topics</h2>
    <ul className="nav nav-pills flex-column">
      <NavItem href="#step-by-step-guide">Step-by-step guide</NavItem>
      <NavItem href="#installing-printers">Installing printers</NavItem>
    </ul>
  </nav>
);

const NavItem = ({ children, href }) => (
  <li className="nav-item">
    <DocumentFragmentLink className="nav-link" href={href}>
      {children}
    </DocumentFragmentLink>
  </li>
);

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default TopicsSection;
