import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { setAuthToken } from '../utils/api';
import { Switch, Redirect, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Landing from './pages/Landing';
import MainLayout from './Layout/MainLayout';
import { Theme } from '@consta/uikit/Theme';
import { presetGpnDefault } from '../assets/theme/presets/presetGpnDefault';
import { presetGpnDark } from '../assets/theme/presets/presetGpnDark';

const App = () => {
  const [theme, setTheme] = useState<'default' | 'dark'>('default');
  const { isLogged } = useSelector((state: RootState) => state.user);

  if (Cookies.get('access')) {
    setAuthToken(Cookies.get('access') as string);
  }

  return (
    <Theme preset={theme === 'default' ? presetGpnDefault : presetGpnDark}>
      <Switch>
        <Route exact={true} path={'/landing'} component={Landing} />
        <PrivateRoute
          path={'/'}
          component={() => <MainLayout theme={theme} setTheme={setTheme} />}
          redirect={'/landing'}
          access={isLogged}
        />
      </Switch>
    </Theme>
  );
};

export default App;
