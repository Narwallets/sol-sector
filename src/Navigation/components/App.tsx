import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Welcome } from '../../Welcome';
import { Dashboard } from '../../Dashboard';

export function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
        >
          <Welcome />
        </Route>
        <Route
          path="/dashboard"
          exact
        >
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}
