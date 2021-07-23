import React from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { setAuthToken } from '../utils/api';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Landing from '../pages/Landing';

import MainLayout from 'components/organisms/Layouts/MainLayout'

import CoursesPage from 'components/pages/CoursesPage'
import DashboardPage from 'components/pages/DashboardPage'


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

        <MainLayout>
          <PrivateRoute path="/me" component={x} redirect="/" access={isLogged} />
          <PrivateRoute path="/courses" component={CoursesPage} redirect="/" access={isLogged} />
          <PrivateRoute path="/dashboard" component={DashboardPage} redirect="/" access={isLogged} />
        </MainLayout>
      </Switch>
    </>
  );
};

export default App;
