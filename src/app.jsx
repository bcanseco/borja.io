import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import NotFound from './pages/404';
import * as paths from './paths';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={paths.INDEX} component={Index} />
      <Route render={() => <NotFound />} />
    </Switch>
  </Router>
);

export default hot(module)(App);
