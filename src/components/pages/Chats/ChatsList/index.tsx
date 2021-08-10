import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Flex from '../../../Common/Flex';
import useStyles from './styles';
import { useDebounce } from '../../../../hooks/useDebounce';
import { IChat } from '../types';
import ChatCard from './ChatCard';
import { SetStateType } from '../../../../types/common';
import Header from './Header';

interface IProps {
  chatId?: string;
  setActiveChat: SetStateType<IChat | null>;
}

const ChatsList: FC<IProps> = ({ chatId, setActiveChat }) => {
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [chats, setChats] = useState<IChat[]>([
    {
      id: '1',
      name: 'Беседа проекта',
      image: '',
      last_message: 'Во сколько встреча?',
      last_message_time: '2021-08-03 13:30',
      unread_count: 8,
      members_count: 6,
    },
    {
      id: '2',
      name: 'Эксперты',
      image: '',
      last_message: 'Вам стоит закупить TAL',
      last_message_time: '2021-08-03 13:30',
      unread_count: 112,
      members_count: 3,
    },
    {
      id: '3',
      name: 'Лидеры мнений',
      image:
        'https://dogcatdog.ru/wp-content/uploads/a/2/8/a28fbb088c1313f7c04ce868eb9ce10d.jpg',
      last_message: 'Собрание в 18:30!!!',
      last_message_time: '2021-08-03 13:30',
      unread_count: 8,
      members_count: 6,
    },
  ]);
  const styles = useStyles();
  const history = useHistory();

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    //Api request
  }, [debouncedSearch, selectedGroup]);

  useEffect(() => {
    const activeChat = chats.find((chat) => chat.id === chatId);
    if (activeChat) setActiveChat(activeChat);
    else {
      history.push('/chats');
    }
  }, [chatId]);

  return (
    <div className={styles.root}>
      <Header
        search={search}
        setSearch={setSearch}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <Flex direction={'column'} className={styles.list}>
        {chats.map((chat) => (
          <ChatCard chat={chat} key={chat.id} />
        ))}
      </Flex>
    </div>
  );
};

export default ChatsList;
