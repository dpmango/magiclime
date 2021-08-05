import React, { FC, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { IChat, IMessage } from '../types';
import Flex from '../../../Common/Flex';
import useStyles from './style';
import { Avatar } from '@consta/uikit/Avatar';
import Typography from '../../../Common/Typography';
import Message from './Message';
import Panel from './Panel';

const Chat: FC<{ chat: IChat | null }> = ({ chat }) => {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      id: '1',
      text: 'Hello!',
      user_name: 'Roman Avdeev',
      user_avatar: '',
      date: '2021-08-03 16:09',
    },
    {
      id: '2',
      text: 'С учётом сложившейся международной обстановки, современная методология разработки не оставляет шанса для распределения внутренних резервов и ресурсов. Но независимые государства смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Ясность нашей позиции очевидна: современная методология разработки является качественно новой ступенью первоочередных требований!',
      user_name: 'Roman Avdeev',
      user_avatar: '',
      date: '2021-08-03 16:09',
    },
  ]);
  const styles = useStyles();
  //const socket = io('');
  useEffect(() => {}, []);

  // Скроллим окно сообщений вниз
  // useEffect(() => {
  //     if (ref.current) {
  //         const elem = ref.current
  //         elem.scrollTop = elem.scrollHeight - elem.clientHeight;
  //     }
  // }, [ref.current, messages.length])

  return (
    <Flex
      direction={'column'}
      className={styles.root}
      align={'center'}
      justify={!!chat ? 'flex-start' : 'center'}
    >
      {!chat ? (
        <Typography size={'2xl'} weight={'semibold'} align={'center'}>
          Выберите чат, чтобы начать переписку
        </Typography>
      ) : (
        <>
          <Flex className={styles.header}>
            <div className={styles.avatarWrapper}>
              <Avatar form={'round'} name={chat.name} url={chat.image} />
            </div>
            <div>
              <Typography size={'xl'} weight={'bold'}>
                {chat.name}
              </Typography>
              <Typography view={'secondary'}>
                {chat.members_count} members
              </Typography>
            </div>
          </Flex>
          <div className={styles.body}>
            {messages.map((message) => (
              <Message message={message} key={message.id} />
            ))}
          </div>
          <Panel />
        </>
      )}
    </Flex>
  );
};

export default Chat;
