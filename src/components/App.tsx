import React from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { setAuthToken } from '../utils/api';

const App = () => {
  const { isLogged } = useSelector((state: RootState) => state.user);

  if (Cookies.get('access')) {
    setAuthToken(Cookies.get('access') as string);
  }

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
