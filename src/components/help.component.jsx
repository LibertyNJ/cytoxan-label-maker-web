import React, { Component } from 'react';

import AppHeader from '../components/app-header.component';
import AppFooter from '../components/app-footer.component';
import HelpContent from '../components/help-content.component';

export default class Main extends Component {
  render() {
    return (
      <>
        <AppHeader heading="Cytoxan Label Maker Help" />
        <HelpContent />
        <AppFooter />
      </>
    );
  }
}