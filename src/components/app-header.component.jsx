import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AppHeader extends Component {
  render() {
    return (
      <header className="d-print-none container-fluid p-3 border-bottom mb-3 shadow-sm">
        {(this.props.includeHelpButton) ? <HelpButton /> : ''}
        <h1 className="text-center text-primary">{this.props.heading}</h1>
      </header>
    );
  }
}

AppHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  includeHelpButton: PropTypes.bool
};

class HelpButton extends Component {
  render() {
    return (
      <a href="help" target="_blank">
        <button className="btn btn-lg btn-secondary float-right">
          Help
        </button>
      </a>
    );
  }
}
