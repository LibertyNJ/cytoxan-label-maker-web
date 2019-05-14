import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Main from './views/Main';
import Help from './views/Help';

import { version } from '../package.json';

export default class App extends React.Component {
  render() {
    return (
      <Layout version={version}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/help" component={Help} />
        </Switch>
      </Layout>
    );
  }
}
