import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Trivia as TriviaView,
  Venues as VenuesView,
  Readme as ReadmeView,
  Contact as ContactView,
  NotFound as NotFoundView
} from './views';


const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={TriviaView}
        exact
        layout={MainLayout}
        path="/trivia"
      />
      <RouteWithLayout
        component={VenuesView}
        exact
        layout={MainLayout}
        path="/venues"
      />
      {/* <RouteWithLayout
        component={ReadmeView}
        exact
        layout={MainLayout}
        path="/readme"
      /> */}
      {/* <RouteWithLayout
        component={ContactView}
        exact
        layout={MainLayout}
        path="/contact"
      /> */}
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
