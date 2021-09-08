import React, { FC, useMemo, useCallback, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import isEqual from 'lodash/isEqual';
import { Theme } from '@consta/uikit/Theme';

import { setLogged } from 'store/reducers/user';
import { setTheme } from 'store/reducers/settings';
import { getAllMeta } from 'store/reducers/meta';
import { RootState } from 'store/reducers/rootReducer';
import { ScrollTo } from 'utils/helpers/scroll';
import { setAuthToken } from 'utils/api';

import PrivateRoute from './PrivateRoute';
import StaticLayout from './Layout/StaticLayout';
import MainLayout from './Layout/MainLayout';
import { presetGpnDefault } from '../assets/theme/presets/presetGpnDefault';
import { presetGpnDark } from '../assets/theme/presets/presetGpnDark';

const App: FC = () => {
  const { isLogged } = useSelector((state: RootState) => state.user, isEqual);
  const { theme } = useSelector((state: RootState) => state.settings, isEqual);
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handleSetTheme = useCallback((theme) => {
    dispatch(setTheme(theme));
  }, []);

  if (Cookies.get('access')) {
    setAuthToken(Cookies.get('access') as string);
    dispatch(setLogged());
  }

  useEffect(() => {
    dispatch(getAllMeta(null));
  }, []);

  useEffect(() => {
    ScrollTo(0, 300);
  }, [pathname]);

  return (
    <Theme preset={theme === 'default' ? presetGpnDefault : presetGpnDark}>
      <Switch>
        <PrivateRoute
          path="/home"
          component={() => <StaticLayout />}
          redirect="/profile/me"
          access={!isLogged}
        />

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
