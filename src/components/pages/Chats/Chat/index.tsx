import React, { FC, useEffect, useRef, useState } from 'react';
import { IChat, IChatDetail, IMessage } from '../types';
import Flex from '../../../Common/Flex';
import useStyles from './styles';
import { Avatar } from '@consta/uikit/Avatar';
import Typography from '../../../Common/Typography';
import Message from './Message';
import Panel from './Panel';
import { getChat } from '../../../../utils/api/routes/chat';

interface IProps {
  chatId: number | null;
  socket: WebSocket;
}

const Chat: FC<IProps> = ({ chatId, socket }) => {
  const [chat, setChat] = useState<IChatDetail | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const styles = useStyles();

  useEffect(() => {
    if (chatId) {
      getChat(chatId).then((res) =>
        setChat((prev) => ({ ...prev, ...res.data }))
      );
    }
  }, [chatId]);

  useEffect(() => {
    socket.onmessage = (event) => {
      if (chat) {
        setChat((prev) => ({
          ...prev!,
          messages: [...prev!.messages, JSON.parse(event.data) as IMessage],
        }));
      }
    };
  }, [chat]);

  //Скроллим окно сообщений вниз
  useEffect(() => {
    if (ref.current) {
      const elem = ref.current;
      elem.scrollTop = elem.scrollHeight - elem.clientHeight;
    }
  }, [ref.current, chat]);

  return (
    <Flex
      direction={'column'}
      className={styles.root}
      align={'center'}
      justify={chatId && chat ? 'flex-start' : 'center'}
    >
      {!chatId || !chat ? (
        <Typography size={'xl'}>
          Выберите чат, чтобы начать переписку
        </Typography>
      ) : (
        <>
          <Flex className={styles.header}>
            <div className={styles.avatarWrapper}>
              <Avatar
                form={'round'}
                name={chat.title}
                url={chat.avatar && chat.avatar.image}
              />
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
            {chat.messages.map((message) => (
              <Message message={message} key={message.id} />
            ))}
          </div>
          <Panel chatId={chat.id} />
        </>
      )}
    </Flex>
  );
};

export default Chat;
