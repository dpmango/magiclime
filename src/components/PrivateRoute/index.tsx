import React, { FC, ReactChild, memo } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProps {
  children: ReactChild | ReactChild[];
  access: boolean;
  redirect: string;
  path: string;
  exact?: boolean;
}

const PrivateRoute: FC<IProps> = ({
  children,
  access,
  redirect,
  path,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        return access ? children : <Redirect to={redirect} />;
      }}
    />
  );
};

export default memo(PrivateRoute);
