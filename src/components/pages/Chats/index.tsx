import React, { FC, useContext, useEffect, useState } from 'react';
import Flex from '../../Common/Flex';
import { RouteComponentProps } from 'react-router-dom';
import ChatsList from './ChatsList';
import { IChat } from './types';
import Chat from './Chat';
import { ChatContext } from './context';
import ChatCreating from './ChatCreating';
import Cookies from 'js-cookie';

const Chats: FC<RouteComponentProps<{ id?: string }>> = ({ match }) => {
  const [activeChat, setActiveChat] = useState<IChat | null>(null);
  const { id } = match.params;
  const { chatContext, setChatContext } = useContext(ChatContext);

  // const socket = new WebSocket(
  //   `ws://178.154.196.41:443/ws/chat/?token=${Cookies.get('access')}`
  // );
  const socket = {};

  useEffect(() => {
    return () => {
      //socket.close();
    };
  }, []);

  return (
    <Flex>
      {chatContext.mode === 'list' ? (
        <ChatsList chatId={id} setActiveChat={setActiveChat} />
      ) : (
        <ChatCreating />
      )}
      <Chat chat={activeChat} socket={socket} />
    </Flex>
  );
};

export default Chats;
