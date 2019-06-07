import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';

import Main from './views/MainView';
import Help from './views/HelpView';

import { version } from '../package.json';

const App = () => (
  <Layout version={version}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/help" component={Help} />
    </Switch>
  </Layout>
);

export default App;
