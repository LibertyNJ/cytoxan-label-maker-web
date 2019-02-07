'use strict';

import React from '../scripts/react.development';

export default class HelpButton extends React.Component {
  render() {
    return (
      <a href="help.html" target="_blank">
        <button className="btn btn-lg btn-secondary float-right">
          Help
        </button>
      </a>
    );
  }
}

