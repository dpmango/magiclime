import React, { FC, useEffect, useState, memo } from 'react';
import { SkeletonCircle, SkeletonText } from '@consta/uikit/Skeleton';
import { Socket } from 'socket.io-client';
import { v4 as uuid } from 'uuid';
import { SetStateType } from '../../../../types/common';
import Flex from '../../../Common/Flex';
import useStyles from './styles';
import { useDebounce } from '../../../../hooks/useDebounce';
import { IChat, IGroup, IMessage } from '../types';
import ChatCard from './ChatCard';
import Header from './Header';
import { getChatsList } from '../../../../utils/api/routes/chat';

interface IProps {
  socket: Socket;
  chatId: string | number;
  setActiveChat: SetStateType<string | number>;
}

const ChatsList: FC<IProps> = ({ socket, chatId, setActiveChat }) => {
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<IGroup | null>(null);
  const [chats, setChats] = useState<IChat[]>([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState<IMessage | null>(null);

  const styles = useStyles();

  const debouncedSearch = useDebounce(search, 300);

  const updateChat = (msg: IMessage) => {
    const arr = chats.map((chat) => {
      if (chat.id === msg.chat) {
        return {
          ...chat,
          unreaded_count:
            msg.chat === +chatId
              ? chat.unreaded_count
              : chat.unreaded_count + 1,
          last_message: msg,
        };
      }
      return chat;
    });
    setChats(arr);
  };

  useEffect(() => {
    socket.on('my_response', (msg) => {
      if (msg.data.id) {
        setNewMessage(msg.data);
      }
    });
  }, []);

  useEffect(() => {
    if (newMessage) {
      updateChat(newMessage);
    }
  }, [newMessage]);

  useEffect(() => {
    setLoading(true);
    getChatsList(search, selectedGroup)
      .then((res) => {
        setChats(res.data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [debouncedSearch, selectedGroup]);

  return (
    <div className={styles.root}>
      <Header
        search={search}
        setSearch={setSearch}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <Flex direction="column" className={styles.list}>
        {!loading
          ? chats.map((chat) => (
              <ChatCard
                chat={chat}
                key={chat.id}
                chatId={chatId}
                setActiveChat={setActiveChat}
              />
            ))
          : Array.from({ length: 4 }).map(() => (
              <div key={uuid()} className={styles.skeleton}>
                <SkeletonCircle size={50} />
                <SkeletonText rows={2} fontSize="xs" lineHeight="s" />
              </div>
            ))}
      </Flex>
    </div>
  );
};

export default memo(ChatsList, (prevProps, nextProps) => {
  return prevProps.chatId === nextProps.chatId;
});
