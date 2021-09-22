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
import { Resources } from '../../Resources';
import { Hangar } from '../../Hangar';
import { Galaxy } from '../../Galaxy';
import { Planet } from '../../Planet';
import { Alliances } from '../../Alliances';

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
          path="/resources"
          exact
        >
          <Resources />
        </Route>

        <Route
          path="/marketplace"
          exact
        >
          <Marketplace />
        </Route>

        <Route
          path="/hangar"
          exact
        >
          <Hangar />
        </Route>

        <Route
          path="/galaxy"
          exact
        >
          <Galaxy />
        </Route>

        <Route
          path="/planet"
          exact
        >
          <Planet />
        </Route>

        <Route
          path="/alliances"
          exact
        >
          <Alliances />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
