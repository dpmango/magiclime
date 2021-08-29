import React, { FC, useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Flex from '../../Common/Flex';
import ChatsList from './ChatsList';
import Chat from './Chat';
import { ChatContext, chatSocket } from './context';
import ChatCreating from './ChatCreating';

const Chats: FC<RouteComponentProps<{ id?: string }>> = ({ match }) => {
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const { id } = match.params;
  const { chatContext } = useContext(ChatContext);

  useEffect(() => {
    return () => {
      chatSocket.close();
    };
  }, []);

  return (
    <Flex>
      {chatContext.mode === 'list' ? (
        <ChatsList chatId={id} setActiveChatId={setActiveChatId} />
      ) : (
        <ChatCreating setActiveChatId={setActiveChatId} />
      )}
      <Chat chatId={activeChatId} />
    </Flex>
  );
};

export default Chats;
