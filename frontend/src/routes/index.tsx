import React from 'react';

import {
  Route as ReactDOMRoute,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Route from './Route';

import Login from '~/pages/Login';
import Values from '~/pages/Values';
import Rank from '~/pages/Rank';

const Routes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AnimatePresence exitBeforeEnter={pathname !== '/'}>
      <Switch location={location} key={pathname}>
        <ReactDOMRoute path="/" exact component={Login} />
        <Route path="/values" component={Values} />
        <Route path="/rank" component={Rank} />

        <ReactDOMRoute render={() => <Redirect to="/" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
