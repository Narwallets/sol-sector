import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Welcome } from '../../Welcome';
import { WelcomeIncinerator } from '../../WelcomeIncinerator';
import { Home } from '../../Home';
import { Marketplace } from '../../Marketplace';
import { Resources } from '../../Resources';
import { Hangar } from '../../Hangar';
import { Production } from '../../Production';
import { Facilities } from '../../Facilities';
import { Galaxy } from '../../Galaxy';
import { Planet } from '../../Planet';
import { Investigation } from '../../Investigation';
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

        <Route
          path="/investigation"
          exact
        >
          <Investigation />
        </Route>

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

        <Route
          path="/production"
          exact
        >
          <Production />
        </Route>

        <Route
          path="/facilities"
          exact
        >
          <Facilities />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
