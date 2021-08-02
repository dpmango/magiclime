import React, { FC, useState } from 'react';
import Login from './Login';
import { AuthType } from './types';
import Registration from './Registration';

interface IProps {
  closeModal: VoidFunction;
}

const Auth: FC<IProps> = ({ closeModal }) => {
  const [authType, setAuthType] = useState<AuthType>('sign_in');

  const getAuthComponent = () => {
    switch (authType) {
      case 'sign_in':
        return <Login setAuthType={setAuthType} closeModal={closeModal} />;
      case 'sign_up':
        return (
          <Registration setAuthType={setAuthType} closeModal={closeModal} />
        );
      default:
        return <Login setAuthType={setAuthType} closeModal={closeModal} />;
    }
  };

  return getAuthComponent();
};

export default Auth;
