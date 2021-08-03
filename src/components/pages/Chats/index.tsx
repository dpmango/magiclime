import React, { FC, useEffect, useState } from 'react';
import Flex from '../../Common/Flex';
import { RouteComponentProps } from 'react-router-dom';
import ChatsList from './ChatsList';
import { IChat } from './types';
import Chat from './Chat';

const Chats: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { id } = match.params;
  const [activeChat, setActiveChat] = useState<IChat | null>(null);

  return (
    <Flex>
      <ChatsList chatId={id} setActiveChat={setActiveChat} />
      <Chat chat={activeChat} />
    </Flex>
  );
};

export default Chats;
