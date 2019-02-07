'use strict';

import React from './react.development';

import AppHeader from '../components/app-header.component';
import AppFooter from '../components/app-footer.component';

export default class App extends React.Component {
  render() {
    return (
      <>
        <AppHeader heading="Cytoxan Label Creator" includeHelpButton="true" />
        <AppFooter />
      </>
    );
  }
}
