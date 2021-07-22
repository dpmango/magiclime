import React, { FC, useState } from 'react';
import Login from './Login';
import { AuthType } from './types';

interface IProps {
  closeModal: VoidFunction;
}

const Auth: FC<IProps> = ({ closeModal }) => {
  const [authType, setAuthType] = useState<AuthType>('sign_in');

  return authType === 'sign_in' ? (
    <Login setAuthType={setAuthType} closeModal={closeModal} />
  ) : (
    <div></div>
  );
};

export default Auth;
