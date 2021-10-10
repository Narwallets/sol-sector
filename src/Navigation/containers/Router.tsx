import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Welcome } from '../../Welcome';
import { Home } from '../../Home';
import { Marketplace } from '../../Marketplace';
import { Resources } from '../../Resources';
import { Hangar } from '../../Hangar';
import { Galaxy } from '../../Galaxy';
import { Planet } from '../../Planet';
import { Alliances } from '../../Alliances';
import { WelcomeIncinerator } from '../../WelcomeIncinerator';

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
          path="/incinerator"
          exact
        >
          <WelcomeIncinerator />
        </Route>

        <Route
          path="/home"
          exact
        >
          <Home />
        </Route>

        <Route
          path="/marketplace"
          exact
        >
          <Marketplace />
        </Route>

        <Route
          path="/galaxy"
          exact
        >
          <Galaxy />
        </Route>

        {/* Investigation */}

        <Route
          path="/alliances"
          exact
        >
          <Alliances />
        </Route>

        <Route
          path="/planet"
          exact
        >
          <Planet />
        </Route>

        <Route
          path="/resources"
          exact
        >
          <Resources />
        </Route>

        <Route
          path="/hangar"
          exact
        >
          <Hangar />
        </Route>

        {/* Production */}

        {/* Facilities */}
      </Switch>
    </BrowserRouter>
  );
}
