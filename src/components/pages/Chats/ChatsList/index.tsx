import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Flex from '../../../Common/Flex';
import useStyles from './styles';
import { useDebounce } from '../../../../hooks/useDebounce';
import { IChat } from '../types';
import ChatCard from './ChatCard';
import { SetStateType } from '../../../../types/common';
import Header from './Header';
import { getChatsList } from '../../../../utils/api/routes/chat';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers/rootReducer';

interface IProps {
  chatId?: string;
  setActiveChatId: SetStateType<number | null>;
}

const ChatsList: FC<IProps> = ({ chatId, setActiveChatId }) => {
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const { id } = useSelector((state: RootState) => state.user.profile);
  const [chats, setChats] = useState<IChat[]>([]);
  const styles = useStyles();
  const history = useHistory();

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    getChatsList(id, search).then((res) => {
      setChats(res.data);
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
