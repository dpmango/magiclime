import Cookies from 'js-cookie';
import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { io } from 'socket.io-client';
import Flex from '../../Common/Flex';
import ChatsList from './ChatsList';
import Chat from './Chat';
import { ChatContext } from './context';
import ChatCreating from './ChatCreating';

const Chats: FC<RouteComponentProps<{ id?: string }>> = ({ match }) => {
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const { id } = match.params;
  const { chatContext } = useContext(ChatContext);

  const socket = useMemo(
    () =>
      io('wss://magiclime.academy/chat', {
        auth: {
          jwt: Cookies.get('access'),
        },
      }),
    []
  );

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Flex>
      {chatContext.mode === 'list' ? (
        <ChatsList
          chatId={id}
          setActiveChatId={setActiveChatId}
          socket={socket}
        />
      ) : (
        <ChatCreating setActiveChatId={setActiveChatId} />
      )}
      <Chat chatId={activeChatId} socket={socket} />
    </Flex>
  );
};

export default Chats;
