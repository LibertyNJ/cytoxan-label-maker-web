import React, { Component } from 'react';

import AppHeader from '../components/app-header.component';
import AppFooter from '../components/app-footer.component';
import MainContent from '../components/main-content.component';

export default class Main extends Component {
  render() {
    return (
      <>
        <AppHeader
          heading="Cytoxan Label Maker"
          includeHelpButton={true}
        />
        <MainContent />
        <AppFooter />
      </>
    );
  }
}