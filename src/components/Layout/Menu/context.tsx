import React, { FC, useState } from 'react';
import { SetStateType } from '../../../types/common';

type ProviderValue = {
  isFull: boolean;
  setFull: SetStateType<boolean>;
};

export const MenuContext = React.createContext<ProviderValue>({
  isFull: false,
  setFull: () => {},
});

export const MenuContextProvider: FC = ({ children }) => {
  const [isFull, setFull] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isFull,
        setFull,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
