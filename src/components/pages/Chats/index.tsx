import React, { FC, useContext, useState } from 'react';
import Flex from '../../Common/Flex';
import { RouteComponentProps } from 'react-router-dom';
import ChatsList from './ChatsList';
import { IChat } from './types';
import Chat from './Chat';
import { ChatContext } from './context';
import ChatCreating from './ChatCreating';

const Chats: FC<RouteComponentProps<{ id?: string }>> = ({ match }) => {
  const [activeChat, setActiveChat] = useState<IChat | null>(null);
  const { id } = match.params;
  const { chatContext, setChatContext } = useContext(ChatContext);

  return (
    <Flex>
      {chatContext.mode === 'list' ? (
        <ChatsList chatId={id} setActiveChat={setActiveChat} />
      ) : (
        <ChatCreating />
      )}
      <Chat chat={activeChat} />
    </Flex>
  );
};

export default Chats;
