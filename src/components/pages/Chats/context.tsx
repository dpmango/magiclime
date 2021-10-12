import React, { FC, useState } from 'react';
import { IChat, IMessage } from './types';
import { SetStateType } from '../../../types/common';

type ChatContextType = {
  replyMessage: IMessage | null;
  mode: 'list' | 'creation';
  newChat: IChat | null;
  removedChatId: number | null;
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
    newChat: null,
    removedChatId: null,
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
