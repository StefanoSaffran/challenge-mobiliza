import React from 'react';

import {
  Route as ReactDOMRoute,
  Redirect,
  RouteProps,
  useLocation,
} from 'react-router-dom';

import { useAuth } from '~/contexts/auth';

export interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route = ({ component: Component, ...rest }: IRouteProps) => {
  const location = useLocation();
  const { pathname } = location;
  const { signed, answered } = useAuth();

  if (!signed) {
    return <Redirect to="/" />;
  }

  if (signed && answered && pathname !== '/rank') {
    return <Redirect to="/rank" />;
  }

  return <ReactDOMRoute {...rest} render={() => <Component />} />;
};

export default Route;
