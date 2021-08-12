import React, { useState, Suspense } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Theme } from '@consta/uikit/Theme';
import { RootState } from '../store/reducers/rootReducer';
import { setAuthToken } from '../utils/api';
import PrivateRoute from './PrivateRoute';
import Landing from './pages/Landing';
import MainLayout from './Layout/MainLayout';
import { presetGpnDefault } from '../assets/theme/presets/presetGpnDefault';
import { presetGpnDark } from '../assets/theme/presets/presetGpnDark';
import { logout, setLogged } from '../store/reducers/user';

const App = () => {
  const [theme, setTheme] = useState<'default' | 'dark'>('default');
  const { isLogged } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  if (Cookies.get('access')) {
    setAuthToken(Cookies.get('access') as string);
    dispatch(setLogged());
  }
  // else if (!Cookies.get('refresh')) {
  //   dispatch(logout());
  // }

  return (
    <Suspense fallback="Загрузка...">
      <Theme preset={theme === 'default' ? presetGpnDefault : presetGpnDark}>
        <Switch>
          <Route exact path="/home" component={Landing} />
          <PrivateRoute
            path="/"
            component={() => <MainLayout theme={theme} setTheme={setTheme} />}
            redirect="/home"
            access={isLogged}
          />
        </Switch>
      </Theme>
    </Suspense>
  );
};

export default App;
