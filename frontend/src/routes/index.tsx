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
import Leaderboard from '~/pages/Leaderboard';

const Routes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AnimatePresence exitBeforeEnter={pathname !== '/'}>
      <Switch location={location} key={pathname}>
        <ReactDOMRoute path="/" exact component={Login} />
        <Route path="/values" component={Values} />
        <Route path="/leaderboard" component={Leaderboard} />

        <ReactDOMRoute render={() => <Redirect to="/" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
