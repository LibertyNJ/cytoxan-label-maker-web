import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './components/main.component';
import Help from './components/help.component';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/help' component={Help} />
      </Switch>
    );
  }
}

export default App;
