import React from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { setAuthToken } from '../utils/api';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const { isLogged } = useSelector((state: RootState) => state.user);

  if (Cookies.get('access')) {
    setAuthToken(Cookies.get('access') as string);
  }

  const x = () => <div></div>;

  return (
    <>
      <Switch>
        <PrivateRoute
          exact
          path="/login"
          component={x}
          redirect="/"
          access={!isLogged}
        />
        <PrivateRoute
          path="/"
          component={x}
          redirect="/login"
          access={isLogged}
        />
      </Switch>
    </>
  );
};

export default App;
