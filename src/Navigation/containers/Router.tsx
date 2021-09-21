import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Welcome } from '../../Welcome';
import { Dashboard } from '../../Dashboard';
import { Marketplace } from '../../Marketplace';

export function Router() {
  return (
    <BrowserRouter>
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
        <Route
          path="/marketplace"
          exact
        >
          <Marketplace />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
