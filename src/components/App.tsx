import React, { FC, useMemo, useCallback } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import isEqual from 'lodash/isEqual';
import { Theme } from '@consta/uikit/Theme';

import { RootState } from '../store/reducers/rootReducer';
import { setAuthToken } from '../utils/api';
import PrivateRoute from './PrivateRoute';
import Landing from './pages/Landing';
import MainLayout from './Layout/MainLayout';
import { presetGpnDefault } from '../assets/theme/presets/presetGpnDefault';
import { presetGpnDark } from '../assets/theme/presets/presetGpnDark';
import { setLogged } from '../store/reducers/user';
import { setTheme } from '../store/reducers/settings';

const App: FC = () => {
  const { isLogged } = useSelector((state: RootState) => state.user, isEqual);
  const { theme } = useSelector((state: RootState) => state.settings, isEqual);

  const dispatch = useDispatch();

  const handleSetTheme = useCallback((theme) => {
    dispatch(setTheme(theme));
  }, []);

  if (Cookies.get('access')) {
    setAuthToken(Cookies.get('access') as string);
    dispatch(setLogged());
  }

  return (
    <Theme preset={theme === 'default' ? presetGpnDefault : presetGpnDark}>
      <Switch>
        <Route exact path="/home" component={Landing} />
        <PrivateRoute
          path="/"
          component={() => (
            <MainLayout theme={theme} setTheme={handleSetTheme} />
          )}
          redirect="/home"
          access={isLogged}
        />
      </Switch>
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'h-toast',
          duration: 5000,
          // style: {
          //   background: '#363636',
          //   color: '#fff',
          // },
        }}
      />
    </Theme>
  );
};

export default App;
