import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store/reducers/rootReducer';

import Login from './Login';
import Registration from './Registration';

const Auth: FC = () => {
  const dispatch = useDispatch();
  const authType = useSelector((state: RootState) => state.settings.authType);

  const getAuthComponent = () => {
    switch (authType) {
      case 'sign_in':
        return <Login />;
      case 'sign_up':
        return <Registration />;
      default:
        return <Login />;
    }
  };

  return getAuthComponent();
};

export default Auth;
