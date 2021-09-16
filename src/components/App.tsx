import React, { FC, useMemo, useCallback, useEffect, memo } from 'react';
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
import { MenuContextProvider } from './Layout/Menu/context';

import PrivateRoute from './PrivateRoute';
import StaticLayout from './Layout/StaticLayout';
import MainLayout from './Layout/MainLayout';
import { presetGpnDefault } from '../assets/theme/presets/presetGpnDefault';
import { presetGpnDark } from '../assets/theme/presets/presetGpnDark';

const App: FC = () => {
  const isLogged = useSelector(
    (state: RootState) => state.user.isLogged,
    isEqual
  );
  const stateTheme = useSelector(
    (state: RootState) => state.settings.theme,
    isEqual
  );
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
    console.log('app rerender');
    dispatch(getAllMeta(null));
  }, []);

  useEffect(() => {
    ScrollTo(0, 300);
  }, [pathname]);

  // MenuContextProvider нужен, чтобы положение меню не менялось при смене роута,
  // А если делать это через Redux, то перестаёт работать transition у всех элементов меню

  return (
    <Theme preset={stateTheme === 'default' ? presetGpnDefault : presetGpnDark}>
      <MenuContextProvider>
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
              <MainLayout theme={stateTheme} setTheme={handleSetTheme} />
            )}
            redirect="/home"
            access={isLogged}
          />
        </Switch>
      </MenuContextProvider>
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
