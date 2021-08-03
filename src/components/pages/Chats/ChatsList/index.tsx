import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Flex from '../../../Common/Flex';
import useStyles from './style';
import { useDebounce } from '../../../../hooks/useDebounce';
import { TextField } from '@consta/uikit/TextField';
import { IconSearch } from '@consta/uikit/IconSearch';
import { IChat } from '../types';
import ChatCard from './ChatCard';
import { SetStateType } from '../../../../types/common';
import { IconMeatball } from '@consta/uikit/IconMeatball';

interface IProps {
  chatId?: string;
  setActiveChat: SetStateType<IChat | null>;
}

const ChatsList: FC<IProps> = ({ chatId, setActiveChat }) => {
  const [search, setSearch] = useState('');
  const [chats, setChats] = useState<IChat[]>([
    {
      id: '1',
      name: 'Test',
      image: '',
      last_message: 'Hello everybody!',
      last_message_time: '2021-08-03 13:30',
      unread_count: 8,
      members_count: 6,
    },
    {
      id: '2',
      name: 'New chat',
      image: '',
      last_message: 'Hello everybody!',
      last_message_time: '2021-08-03 13:30',
      unread_count: 112,
      members_count: 3,
    },
    {
      id: '3',
      name: 'Leopard',
      image:
        'https://dogcatdog.ru/wp-content/uploads/a/2/8/a28fbb088c1313f7c04ce868eb9ce10d.jpg',
      last_message: 'Hello everybody!',
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
  }, [debouncedSearch]);

  useEffect(() => {
    const activeChat = chats.find((chat) => chat.id === chatId);
    if (activeChat) setActiveChat(activeChat);
    else {
      history.push('/chats');
    }
  }, [chatId]);

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <TextField
          form={'brick'}
          placeholder="Поиск по сообщениям"
          value={search}
          leftSide={IconSearch}
          rightSide={IconMeatball}
          onChange={({ value }) => setSearch(value as string)}
        />
      </div>
      <Flex direction={'column'} className={styles.list}>
        {chats.map((chat) => (
          <ChatCard chat={chat} key={chat.id} />
        ))}
      </Flex>
    </div>
  );
};

export default ChatsList;
