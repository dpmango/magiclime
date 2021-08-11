import React, { FC, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { IChat, IMessage } from '../types';
import Flex from '../../../Common/Flex';
import useStyles from './styles';
import { Avatar } from '@consta/uikit/Avatar';
import Typography from '../../../Common/Typography';
import Message from './Message';
import Panel from './Panel';

const Chat: FC<{ chat: IChat | null }> = ({ chat }) => {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      id: 1,
      text: 'Hello',
      created_at: '2021-08-09 15:43',
      creator: {
        name: 'Roman Avdeev',
        id: 1,
        avatar: null,
      },
    },
  ]);
  const ref = useRef<HTMLDivElement>(null);
  const styles = useStyles();
  //const socket = io('');
  useEffect(() => {}, []);

  //Скроллим окно сообщений вниз
  // useEffect(() => {
  //   if (ref.current) {
  //     const elem = ref.current;
  //     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
  //   }
  // }, [ref.current, messages.length]);

  return (
    <Flex
      direction={'column'}
      className={styles.root}
      align={'center'}
      justify={!!chat ? 'flex-start' : 'center'}
    >
      {!chat ? (
        <Typography size={'xl'}>
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
          <div className={styles.body} ref={ref}>
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
