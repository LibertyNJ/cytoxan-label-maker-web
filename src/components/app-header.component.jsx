'use strict';

import React from '../scripts/react.development';

import HelpButton from './help-button.component';

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="d-print-none container-fluid p-3 border-bottom mb-3 shadow-sm">
        {(this.props.includeHelpButton) ? <HelpButton /> : ''}
        <h1 className="text-center text-primary">{this.props.heading}</h1>
      </header>
    );
  }
}
