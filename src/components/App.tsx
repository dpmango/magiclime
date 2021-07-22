import React from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { setAuthToken } from '../utils/api';
import { Switch, Redirect, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Landing from '../pages/Landing';

const App = () => {
  const { isLogged } = useSelector((state: RootState) => state.user);

  if (Cookies.get('access')) {
    setAuthToken(Cookies.get('access') as string);
  }

  const x = () => <div></div>;

  return (
    <>
      <Switch>
        <Route exact={true} path={'/'} component={Landing} />
        <PrivateRoute path="/me" component={x} redirect="/" access={isLogged} />
      </Switch>
    </>
  );
};

export default App;
