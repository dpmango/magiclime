import React, { FC, memo } from 'react';
import { RouteComponentProps, Route, Redirect } from 'react-router-dom';
import { ComponentType } from 'types/common';

interface IProps {
  component: ComponentType<RouteComponentProps>;
  access: boolean;
  redirect: string;
  path: string;
  exact?: boolean;
}

const PrivateRoute: FC<IProps> = ({
  component: Component,
  access,
  redirect,
  path,
  ...rest
}) => {
  console.log(rest);
  return (
    <Route
      path={path}
      render={(props) =>
        access ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
};

export default memo(PrivateRoute);
