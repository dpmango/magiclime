import Cookies from 'js-cookie';
import React, { FC, useState } from 'react';
import { IMessage } from './types';
import { SetStateType } from '../../../types/common';

type ChatContextType = {
  replyMessage: IMessage | null;
  mode: 'list' | 'creation';
};

type ProviderValue = {
  chatContext: ChatContextType;
  setChatContext: SetStateType<ChatContextType>;
};

export const ChatContext = React.createContext<ProviderValue>({
  chatContext: {} as ChatContextType,
  setChatContext: () => {},
});

export const ChatContextProvider: FC = ({ children }) => {
  const [chatContext, setChatContext] = useState<ChatContextType>({
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

export const chatSocket = new WebSocket(
  `wss://magiclime.academy/ws/chat/?token=${Cookies.get('access')}`
);
