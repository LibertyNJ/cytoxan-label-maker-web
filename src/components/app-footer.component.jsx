'use strict';

import React from '../scripts/react.development';

import AppVersion from '../components/app-version.component';
import AppAddress from '../components/app-address.component';

export default class AppFooter extends React.Component {
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
        <AppVersion version="1.0.0" />
        <AppAddress />
      </footer>
    );
  }
}