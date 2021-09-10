import Cookies from 'js-cookie';
import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { io } from 'socket.io-client';
import Flex from '../../Common/Flex';
import Empty from './Chat/Empty';
import useStyles from './Chat/styles';
import ChatsList from './ChatsList';
import Chat from './Chat';
import { ChatContext } from './context';
import ChatCreating from './ChatCreating';

const Chats: FC<RouteComponentProps<{ id?: string }>> = ({
  match: {
    params: { id },
  },
}) => {
  const { chatContext } = useContext(ChatContext);
  const [activeChat, setActiveChat] = useState(id || 0);
  const styles = useStyles();

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
          socket={socket}
          setActiveChat={setActiveChat}
          chatId={activeChat}
        />
      ) : (
        <ChatCreating setActiveChat={setActiveChat} />
      )}
      <Flex direction="column" className={styles.root} align="center">
        {activeChat ? <Chat socket={socket} chatId={activeChat} /> : <Empty />}
      </Flex>
    </Flex>
  );
};

export default Chats;
