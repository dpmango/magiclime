import React, { FC, useEffect, useRef, useState } from 'react';
import { IChat, IMessage } from '../types';
import Flex from '../../../Common/Flex';
import useStyles from './styles';
import { Avatar } from '@consta/uikit/Avatar';
import Typography from '../../../Common/Typography';
import Message from './Message';
import Panel from './Panel';
import { instance } from '../../../../utils/api';
import { getChatMessages } from '../../../../utils/api/routes/chat';

interface IProps {
  chat: IChat | null;
  socket: WebSocket | any;
}

const Chat: FC<IProps> = ({ chat, socket }) => {
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

  useEffect(() => {
    if (chat) {
      getChatMessages(chat.id).then((res) =>
        setMessages((prev) => [...prev, ...res.data])
      );
    }
    // socket.onmessage = (data) => {
    //   console.log(data);
    // };
  }, [chat]);

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
              <Avatar form={'round'} name={chat.title} url={chat.image} />
            </div>
            <div>
              <Typography size={'xl'} weight={'bold'}>
                {chat.title}
              </Typography>
              <Typography view={'secondary'}>
                {chat.participants_count} members
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
