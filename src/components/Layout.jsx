import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = props => (
  <div className="d-flex flex-column vh-100">
    <Header />
    <main className="container-fluid d-flex flex-column d-print-block">
      {props.children}
    </main>
    <Footer version={props.version} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired,
};

const Header = () => (
  <header className="container-fluid d-print-none flex-shrink-0 sticky-top bg-white p-0 mb-3 shadow-sm">
    <NavBar />
  </header>
);

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-light">
    <div className="text-primary navbar-brand">Cytoxan Label Maker</div>
    <ul className="navbar-nav ml-auto">
      <NavItem />
    </ul>
  </nav>
);

const NavItem = () => (
  <li className="nav-item">
    <NavLink
      className="nav-link"
      to="/help"
      target="__blank"
      rel="noopener noreferrer"
    >
      Help
    </NavLink>
  </li>
);

const Footer = props => (
  <footer className="container-fluid flex-shrink-0 d-flex d-print-none justify-content-between text-light bg-dark px-3 py-1">
    <p className="mb-0">Version: {props.version}</p>
  </footer>
);

Footer.propTypes = {
  version: PropTypes.string.isRequired,
};

export default Layout;
