import React, { FC, useState } from 'react';
import { IMessage } from './types';
import { SetStateType } from '../../../types/common';

type ChatContext = {
  replyMessage: IMessage | null;
  mode: 'list' | 'creation';
};

type ProviderValue = {
  chatContext: ChatContext;
  setChatContext: SetStateType<ChatContext>;
};

export const ChatContext = React.createContext<ProviderValue>({
  chatContext: {} as ChatContext,
  setChatContext: () => {},
});

export const ChatContextProvider: FC = ({ children }) => {
  const [chatContext, setChatContext] = useState<ChatContext>({
    replyMessage: null,
    mode: 'list',
  });

  return (
    <ChatContext.Provider
      value={{
        chatContext,
        setChatContext,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
