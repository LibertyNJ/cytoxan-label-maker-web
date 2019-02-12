import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AppFooter extends Component {
  render() {
    return (
      <footer className="container-fluid d-flex d-print-none justify-content-between align-items-center text-white bg-dark p-3">
        <img
          className="img-fluid d-block"
          src="assets/images/nsuh-nwh-logo-inverted.png"
          alt="North Shore University Hospital Logo"
          width="561"
          height="64"
        />
        <div>
          <AppVersion version="1.0.0" />
          <AppAddress />
        </div>
      </footer>
    );
  }
}

class AppVersion extends Component {
  render() {
    return (
      <p className="text-right mb-0 ml-auto">Version {this.props.version}.</p>
    );
  }
}

AppVersion.propTypes = {
  version: PropTypes.string.isRequired
};

class AppAddress extends Component {
  render() {
    return (
      <address className="text-right mb-0">
        Created by Nathaniel J. Liberty, 2018.<br />
        Email <a className="text-secondary" href="mailto:nliberty@northwell.edu?subject=Cytoxan%20Label%20Creator">nliberty@northwell.edu</a> with comments, questions, or bug reports.
      </address>
    );
  }
}