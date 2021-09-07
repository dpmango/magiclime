import { Button } from '@consta/uikit/Button';
import { IconArrowDown } from '@consta/uikit/IconArrowDown';
import { Loader } from '@consta/uikit/Loader';
import { Socket } from 'socket.io-client';
import debounce from 'lodash/debounce';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { IChatDetail, IMessage } from '../types';
import Flex from '../../../Common/Flex';
import { MessagesSkeleton } from './ChatSkeletons';
import { onReplyClick, renderNewMessage, scrollToBottom } from './controller';
import Header from './Header';
import useStyles from './styles';
import Typography from '../../../Common/Typography';
import Message from './Message';
import Panel from './Panel';
import { getChat, getChatMessages } from '../../../../utils/api/routes/chat';
import EmptyChat from '../../../../assets/images/empty-chat.svg';

interface IProps {
  chatId: number | null;
  socket: Socket;
}

const Chat: FC<IProps> = ({ chatId, socket }) => {
  const [chat, setChat] = useState<IChatDetail | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState<number | null>(null);
  const [allMessagesCount, setAllMessageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingScrollTop, setLoadingScrollTop] = useState(false);
  const [loadingScrollBottom, setLoadingScrollBottom] = useState(false);
  const [prevBodyHeight, setPrevBodyHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const styles = useStyles();

  const LIMIT = useMemo(() => {
    if (chatId && ref.current) {
      const height = ref.current.clientHeight;
      if (height < 500) return 5;
      if (height < 750) return 10;
      return 15;
    }
    return 5;
  }, [chatId, ref.current]);

  useEffect(() => {
    if (chatId) {
      setLoading(true);
      getChat(chatId).then((res) => {
        setChat(res.data);
      });

      socket.emit('join', { room: chatId.toString() });
      socket.on('my_response', (msg) => {
        if (msg.data.id)
          renderNewMessage(msg.data, setAllMessageCount, setMessages);
      });
    }
    return () => {
      chatId && socket.emit('leave', { room: chatId.toString() });
    };
  }, [chatId]);

  useEffect(() => {
    if (chat && ref.current) {
      const page = Math.ceil(chat.unreaded_count / LIMIT) || 1;
      getChatMessages(chat.id, page, LIMIT)
        .then((res) => {
          setPage(page);
          setAllMessageCount(res.data.count);
          setMessages(res.data.results.reverse());
        })
        .finally(() => setLoading(false));
    }
  }, [chat, ref.current]);

  useEffect(() => {
    if (scroll !== null) {
      const lastElement = ref.current!.lastElementChild! as HTMLDivElement;

      if (!lastElement) return;

      if (scroll - 300 <= 0 && page * LIMIT < allMessagesCount) {
        setLoadingScrollTop(true);
        getChatMessages(chat!.id, page + 1, LIMIT)
          .then((res) => {
            setPage(page + 1);
            setMessages((prev) => [...res.data.results, ...prev]);
          })
          .finally(() => {
            setLoadingScrollTop(false);
          });
      } else if (
        scroll + 300 >= lastElement.offsetTop &&
        page > allMessagesCount
      ) {
        // getChatMessages(chat!.id, page + 1, LIMIT).then((res) => {
        //   setPage(page - 1);
        //   setMessages((prev) => [...prev, ...res.data.results]);
        // });
      }
    }
  }, [scroll]);

  const scrollChat = debounce(() => {
    setScroll(ref.current!.scrollTop);
  }, 300);

  useEffect(() => {
    if (messages.length && ref.current && scroll !== null) {
      ref.current.scrollTop =
        ref.current.scrollHeight - prevBodyHeight + scroll;
      setPrevBodyHeight(ref.current.scrollHeight);
    }
  }, [messages.length]);

  // Скроллим окно сообщений вниз до непрочитанных сообщений
  useEffect(() => {
    if (ref.current && chat && !loading) {
      const elem = ref.current;
      if (!chat.unreaded_count) {
        elem.scrollTop = elem.scrollHeight - elem.clientHeight;
      } else {
        const firstIndex =
          chat.unreaded_count >= LIMIT
            ? 0
            : messages.length - chat.unreaded_count;
        const firstUnread = elem.children[firstIndex] as HTMLDivElement;
        if (firstUnread.offsetTop > elem.clientHeight) {
          elem.scrollTop =
            firstUnread.offsetTop -
            elem.clientHeight +
            firstUnread.clientHeight +
            36;
        }
      }
      setPrevBodyHeight(elem.scrollHeight);
    }
  }, [ref.current, loading]);

  return (
    <Flex
      direction="column"
      className={styles.root}
      align="center"
      justify={chatId && chat ? 'flex-start' : 'center'}
    >
      {!chatId ? (
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
          <Header chat={chat} loading={loading} />
          <div className={styles.body} ref={ref} onScroll={scrollChat}>
            {loadingScrollTop && scroll === 0 && (
              <Loader className={styles.loader} />
            )}
            {loading ? (
              <MessagesSkeleton />
            ) : (
              messages.map((message, index, array) => (
                <div key={uuid()}>
                  {(array.length - index === chat?.unreaded_count ||
                    (LIMIT < chat!.unreaded_count &&
                      index === 0 &&
                      page === 1)) && (
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
                    onReplyClick={(id: number) => onReplyClick(id, styles)}
                    unread={array.length - index <= chat!.unreaded_count}
                  />
                </div>
              ))
            )}
            {loadingScrollBottom && <Loader className={styles.loader} />}
          </div>

          {ref.current &&
            (page !== 1 ||
              ref.current!.scrollTop + 100 <=
                ref.current!.scrollHeight - ref.current!.clientHeight) && (
              <Button
                view="primary"
                form="round"
                size="l"
                iconLeft={IconArrowDown}
                className={styles.scrollToBottom}
                onClick={() => scrollToBottom()}
              />
            )}
          {chat && <Panel chatId={chat.id} socket={socket} />}
        </>
      )}
    </Flex>
  );
};

export default Chat;
