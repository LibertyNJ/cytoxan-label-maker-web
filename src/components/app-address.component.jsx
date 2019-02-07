'use strict';

import React from '../scripts/react.development';

export default class AppAddress extends React.Component {
  render() {
    return (
      <address className="text-right mb-0">
        Created by Nathaniel J. Liberty, 2018.<br />
        Email
        <a className="text-secondary" href="mailto:nliberty@northwell.edu?subject=Cytoxan%20Label%20Creator">
          nliberty@northwell.edu
        </a>
        with comments, questions, or bug reports.
      </address>
    );
  }
}