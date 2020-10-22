import React from 'react';

import { Route as ReactDOMRoute, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '~/contexts/auth';

export interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: IRouteProps) => {
  const { signed, answered } = useAuth();

  if (!signed) {
    return <Redirect to="/" />;
  }

  return <ReactDOMRoute {...rest} render={() => <Component />} />;
};

export default Route;
