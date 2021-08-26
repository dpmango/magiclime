import React, { FC, useCallback } from 'react';
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
import { setLogged } from '../store/reducers/user';
import { setTheme } from '../store/reducers/settings';

const App: FC = () => {
  const { isLogged } = useSelector((state: RootState) => state.user);
  const { theme } = useSelector((state: RootState) => state.settings);

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
    </Theme>
  );
};

export default App;
