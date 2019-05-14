import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = props => {
  return (
    <div className="d-flex flex-column vh-100">
      <header className="container-fluid d-print-none flex-shrink-0 sticky-top bg-white p-0 mb-3 shadow-sm">
        <nav className="navbar navbar-expand navbar-light">
          <div className="text-primary navbar-brand">Cytoxan Label Maker</div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/help"
                target="__blank"
                rel="noopener noreferrer"
              >
                Help
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container-fluid d-flex flex-column flex-grow-1">
        {props.children}
      </main>
      <footer className="container-fluid flex-shrink-0 d-flex d-print-none justify-content-between text-light bg-dark px-3 py-1">
        <p className="mb-0">Version: {props.version}</p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired,
};

export default Layout;
