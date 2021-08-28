import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Cookies from 'js-cookie';
import Flex from '../../Common/Flex';
import ChatsList from './ChatsList';
import { IChat } from './types';
import Chat from './Chat';
import { ChatContext } from './context';
import ChatCreating from './ChatCreating';

const Chats: FC<RouteComponentProps<{ id?: string }>> = ({ match }) => {
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const { id } = match.params;
  const { chatContext, setChatContext } = useContext(ChatContext);

  const socket = useMemo(
    () =>
      new WebSocket(
        `wss://magiclime.academy/ws/chat/?token=${Cookies.get('access')}`
      ),
    []
  );

  useEffect(() => {
    return () => {
      socket.close();
    };
  }, []);

  return (
    <Flex>
      {chatContext.mode === 'list' ? (
        <ChatsList chatId={id} setActiveChatId={setActiveChatId} />
      ) : (
        <ChatCreating setActiveChatId={setActiveChatId} />
      )}
      <Chat chatId={activeChatId} socket={socket} />
    </Flex>
  );
};

export default Chats;
