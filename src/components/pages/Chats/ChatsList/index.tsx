import React, { FC, useEffect, useState, memo } from 'react';
import { SkeletonCircle, SkeletonText } from '@consta/uikit/Skeleton';
import { useHistory } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { v4 as uuid } from 'uuid';
import Flex from '../../../Common/Flex';
import useStyles from './styles';
import { useDebounce } from '../../../../hooks/useDebounce';
import { IChat, IGroup } from '../types';
import ChatCard from './ChatCard';
import { SetStateType } from '../../../../types/common';
import Header from './Header';
import { getChatsList } from '../../../../utils/api/routes/chat';

interface IProps {
  chatId?: string;
  setActiveChatId: SetStateType<number | null>;
  socket: Socket;
}

const ChatsList: FC<IProps> = ({ chatId, setActiveChatId, socket }) => {
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<IGroup | null>(null);
  const [chats, setChats] = useState<IChat[]>([]);
  const [loading, setLoading] = useState(false);
  const styles = useStyles();
  const history = useHistory();

  const debouncedSearch = useDebounce(search, 300);

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

  useEffect(() => {
    if (chatId) {
      const activeChat = chats.find((chat) => chat.id === +chatId);
      if (activeChat) setActiveChatId(activeChat.id);
      else {
        history.push('/chats');
      }
    }
  }, [chatId]);

  socket.on('my_response', (msg) => {
    if (msg.data.id) {
      const arr = chats.map((chat) => {
        if (chat.id === msg.data.chat) {
          return {
            ...chat,
            unreaded_count:
              msg.data.chat === chatId
                ? chat.unreaded_count
                : chat.unreaded_count + 1,
            last_message: msg.data,
          };
        }
        return chat;
      });
      setChats(arr);
    }
  });

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
          ? chats.map((chat) => <ChatCard chat={chat} key={chat.id} />)
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
