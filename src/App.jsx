import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './screens/Main';
import Help from './screens/Help';

const version = '1.0.0';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Main {...props} version={version} />}
        />
        <Route
          path="/help"
          render={props => <Help {...props} version={version} />}
        />
      </Switch>
    );
  }
}
