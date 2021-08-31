import { Button } from '@consta/uikit/Button';
import { IconArrowDown } from '@consta/uikit/IconArrowDown';
import { SkeletonCircle, SkeletonText } from '@consta/uikit/Skeleton';
import debounce from 'lodash/debounce';
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { v4 as uuid } from 'uuid';
import { Avatar } from '@consta/uikit/Avatar';
import { usePrevious } from '../../../../hooks/usePrevious';
import { DOMAIN } from '../../../../utils/api';
import { IChatDetail, IMessage } from '../types';
import Flex from '../../../Common/Flex';
import useStyles from './styles';
import Typography from '../../../Common/Typography';
import Message from './Message';
import Panel from './Panel';
import { getChat, getChatMessages } from '../../../../utils/api/routes/chat';
import EmptyChat from '../../../../assets/images/empty-chat.svg';

interface IProps {
  chatId: number | null;
  socket: WebSocket;
}

const Chat: FC<IProps> = ({ chatId, socket }) => {
  const [chat, setChat] = useState<IChatDetail | null>(null);
  const [messages, setMessages] = useState<{
    array: IMessage[];
    needScroll: boolean;
  }>({
    array: [],
    needScroll: true,
  });
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(0);
  const [allMessagesCount, setAllMessageCount] = useState(0);
  const [finishGettingData, setFinishGettingData] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const styles = useStyles();
  const previousScroll = usePrevious(scroll);

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
      getChat(chatId)
        .then((res) => {
          setChat(res.data);
          return res.data;
        })
        .then((chat) => {
          setLoading(true);
          // const page = Math.ceil(chat.unreaded_count / LIMIT);
          getChatMessages(chat.id, 1, LIMIT)
            .then((res) => {
              const elem = ref.current;
              elem!.scrollTop = elem!.scrollHeight - elem!.clientHeight;
              setAllMessageCount(res.data.count);
              setMessages({
                array: res.data.results.reverse(),
                needScroll: true,
              });
              setTimeout(() => setFinishGettingData(true), 1000);
            })
            .finally(() => setLoading(false));
        });
    }
  }, [chatId, ref.current]);

  const onReplyClick = useCallback((id: number) => {
    const message = document.getElementById(`message_${id}`);
    message?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    message?.classList.add(styles.replyAnimation);
    setTimeout(() => {
      message?.classList.remove(styles.replyAnimation);
    }, 3000);
  }, []);

  socket.onmessage = (event) => {
    const newMessage = JSON.parse(event.data) as IMessage;
    const avatar = newMessage.creator.avatar
      ? {
          ...newMessage.creator.avatar,
          image: DOMAIN + newMessage.creator.avatar.image,
        }
      : null;
    setAllMessageCount((prev) => prev + 1);
    setMessages((prev) => ({
      array: [
        ...prev.array,
        { ...newMessage, creator: { ...newMessage.creator, avatar } },
      ],
      needScroll: true,
    }));
  };

  useEffect(() => {
    if (
      finishGettingData &&
      previousScroll !== undefined &&
      (Math.abs(previousScroll - scroll) <= 300 || scroll === 0)
    ) {
      const lastElement = ref.current!.lastElementChild! as HTMLDivElement;

      if (!lastElement) return;

      if (scroll - 300 <= 0 && page * LIMIT < allMessagesCount) {
        setLoading(true);
        getChatMessages(chat!.id, page + 1, LIMIT)
          .then((res) => {
            setPage(page + 1);
            setMessages((prev) => ({
              array: [...res.data.results, ...prev.array],
              needScroll: false,
            }));
          })
          .finally(() => setLoading(false));
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
  }, [scroll, page]);

  const scrollChat = debounce(() => {
    setScroll(ref.current!.scrollTop);
  }, 300);

  useEffect(() => {
    const elem = ref.current;
    if (elem && !!messages.array.length && messages.needScroll) {
      elem.scrollTop = elem.scrollHeight - elem.clientHeight;
    }
  }, [ref.current, messages.array.length]);

  // Скроллим окно сообщений вниз до непрочитанных сообщений
  // useEffect(() => {
  //   // if (ref.current && chat && messages.length && messages.length < LIMIT) {
  //   const elem = ref.current;
  //   //   if (!chat.unreaded_count) {
  //     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
  //   // } else {
  //   //   const firstIndex =
  //   //     chat.unreaded_count >= LIMIT
  //   //       ? 0
  //   //       : messages.length - chat.unreaded_count;
  //   //   const firstUnread = elem.children[firstIndex] as HTMLDivElement;
  //   //   console.log(firstUnread);
  //   //   if (firstUnread.offsetTop > elem.clientHeight) {
  //   //     elem.scrollTop =
  //   //       firstUnread.offsetTop -
  //   //       elem.clientHeight +
  //   //       firstUnread.clientHeight;
  //   //   }
  //   // }
  //   //}
  // }, [ref.current, messages.length]);

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
          <div className={styles.body} ref={ref} onScroll={scrollChat}>
            {loading &&
              Array.from({ length: 3 }).map(() => (
                <div key={uuid()} className={styles.skeleton}>
                  <SkeletonCircle size={52} />
                  <SkeletonText rows={3} fontSize="xs" lineHeight="s" />
                </div>
              ))}
            {messages.array.map((message, index, array) => (
              <div key={uuid()}>
                {(array.length - index === chat?.unreaded_count ||
                  (LIMIT < chat?.unreaded_count &&
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
                  onReplyClick={onReplyClick}
                  unread={array.length - index <= chat?.unreaded_count}
                />
              </div>
            ))}
          </div>
          <Button
            view="primary"
            form="round"
            size="l"
            iconLeft={IconArrowDown}
            className={styles.scrollToBottom}
          />
          <Panel chatId={chat.id} />
        </>
      )}
    </Flex>
  );
};

export default Chat;
