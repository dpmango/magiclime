import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store/reducers/rootReducer';

import Login from './Login';
import Recovery from './Recovery';
import Registration from './Registration';

const Auth: FC = () => {
  const authType = useSelector((state: RootState) => state.settings.authType);

  const getAuthComponent = () => {
    switch (authType) {
      case 'sign_in':
      default:
        return <Login />;
      case 'sign_up':
        return <Registration />;
      case 'recovery':
        return <Recovery />;
    }
  };

  return getAuthComponent();
};

export default Auth;
