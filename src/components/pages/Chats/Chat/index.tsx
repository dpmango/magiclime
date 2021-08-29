import { Button } from '@consta/uikit/Button';
import { IconArrowDown } from '@consta/uikit/IconArrowDown';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Avatar } from '@consta/uikit/Avatar';
import { DOMAIN } from '../../../../utils/api';
import { chatSocket } from '../context';
import { IChatDetail, IMessage } from '../types';
import Flex from '../../../Common/Flex';
import useStyles from './styles';
import Typography from '../../../Common/Typography';
import Message from './Message';
import Panel from './Panel';
import { getChat } from '../../../../utils/api/routes/chat';
import EmptyChat from '../../../../assets/images/empty-chat.svg';

interface IProps {
  chatId: number | null;
}

const Chat: FC<IProps> = ({ chatId }) => {
  const [chat, setChat] = useState<IChatDetail | null>(null);
  const [scroll, setScroll] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const styles = useStyles();

  useEffect(() => {
    if (chatId) {
      getChat(chatId).then((res) =>
        setChat((prev) => ({ ...prev, ...res.data }))
      );
    }
  }, [chatId]);

  const onReplyClick = useCallback((id: number) => {
    const message = document.getElementById(`message_${id}`);
    message?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    message?.classList.add(styles.replyAnimation);
    setTimeout(() => {
      message?.classList.remove(styles.replyAnimation);
    }, 3000);
  }, []);

  chatSocket.onmessage = (event) => {
    const newMessage = JSON.parse(event.data) as IMessage;
    const avatar = newMessage.creator.avatar
      ? {
          ...newMessage.creator.avatar,
          image: DOMAIN + newMessage.creator.avatar.image,
        }
      : null;

    setChat((prev) => ({
      ...prev!,
      messages: [
        ...prev!.messages,
        { ...newMessage, creator: { ...newMessage.creator, avatar } },
      ],
    }));
  };

  useEffect(() => {
    console.log(ref);
  }, [ref.current]);

  // Скроллим окно сообщений вниз до непрочитанных сообщений
  useEffect(() => {
    if (ref.current && chat) {
      const elem = ref.current;
      if (!chat.unreaded_count) {
        elem.scrollTop = elem.scrollHeight - elem.clientHeight;
      } else {
        const firstUnread = elem.children[
          chat.messages.length - chat.unreaded_count
        ] as HTMLDivElement;
        if (firstUnread.offsetTop > elem.clientHeight) {
          elem.scrollTop =
            firstUnread.offsetTop -
            elem.clientHeight +
            firstUnread.clientHeight +
            5;
        }
      }
    }
  }, [ref.current, chat]);

  return (
    <Flex
      direction="column"
      className={styles.root}
      align="center"
      justify={chatId && chat ? 'flex-start' : 'center'}
    >
      {!chatId || !chat ? (
        <>
          <EmptyChat />
          <Typography
            lineHeight="l"
            align="center"
            className={styles.chooseChat}
            size="xl"
            margin="30px 0 0"
          >
            Выберите чат, чтобы начать переписку или создайте новую беседу
          </Typography>
        </>
      ) : (
        <>
          <Flex className={styles.header}>
            <div className={styles.avatarWrapper}>
              <Avatar
                form="round"
                name={chat.title}
                url={chat.avatar ? chat.avatar.image : ''}
              />
            </div>
            <div>
              <Typography size="xl" weight="bold">
                {chat.title}
              </Typography>
              <Typography view="secondary">
                {chat.participants_count} members
              </Typography>
            </div>
          </Flex>
          <div className={styles.body} ref={ref}>
            {chat.messages.map((message, index, array) => (
              <div>
                {array.length - index === chat?.unreaded_count && (
                  <Flex align="center" margin="15px 0">
                    <div className={styles.line} />
                    <Typography margin="0 15px" size="xs" view="secondary">
                      Непрочитанные сообщения
                    </Typography>
                    <div className={styles.line} />
                  </Flex>
                )}
                <Message
                  message={message}
                  onReplyClick={onReplyClick}
                  unread={array.length - index <= chat?.unreaded_count}
                  key={message.id}
                />
              </div>
            ))}
            <Button
              view="primary"
              form="round"
              size="l"
              iconLeft={IconArrowDown}
              className={styles.scrollToBottom}
            />
          </div>
          <Panel chatId={chat.id} />
        </>
      )}
    </Flex>
  );
};

export default Chat;
