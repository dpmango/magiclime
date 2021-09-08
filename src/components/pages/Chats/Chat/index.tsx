import { Button } from '@consta/uikit/Button';
import { IconArrowDown } from '@consta/uikit/IconArrowDown';
import { Loader } from '@consta/uikit/Loader';
import { Socket } from 'socket.io-client';
import debounce from 'lodash/debounce';
import React, {
  FC,
  memo,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import Flex from '../../../Common/Flex';
import { MessagesSkeleton } from './ChatSkeletons';
import { renderNewMessage, scrollToBottom } from './controller';
import Header from './Header';
import List from './List';
import { initialState, reducer } from './reducer';
import useStyles from './styles';
import Typography from '../../../Common/Typography';
import Panel from './Panel';
import { getChat, getChatMessages } from '../../../../utils/api/routes/chat';
import EmptyChat from '../../../../assets/images/empty-chat.svg';

interface IProps {
  chatId: number | null;
  socket: Socket;
}

const Chat: FC<IProps> = ({ chatId, socket }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [loadingScrollTop, setLoadingScrollTop] = useState(false);
  const [loadingScrollBottom, setLoadingScrollBottom] = useState(false);

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
        dispatch({ type: 'SET_CHAT', payload: res.data });
      });

      socket.emit('join', { room: chatId.toString() });
      socket.on('my_response', (msg) => {
        if (msg.data.id) {
          renderNewMessage(msg.data, dispatch);
        }
      });
    }
    return () => {
      chatId && socket.emit('leave', { room: chatId.toString() });
    };
  }, [chatId]);

  useEffect(() => {
    if (state.chat && ref.current) {
      const page = Math.ceil(state.chat.unreaded_count / LIMIT) || 1;
      getChatMessages(state.chat.id, page, LIMIT)
        .then((res) => {
          dispatch({
            type: 'RENDER_HISTORY',
            count: res.data.count,
            messages: res.data.results.reverse(),
            page,
          });
        })
        .finally(() => setLoading(false));
    }
  }, [state.chat, ref.current]);

  useEffect(() => {
    if (state.scroll !== null) {
      const lastElement = ref.current!.lastElementChild! as HTMLDivElement;

      if (!lastElement) return;

      if (
        state.scroll - 300 <= 0 &&
        state.page * LIMIT < state.allMessagesCount
      ) {
        setLoadingScrollTop(true);
        getChatMessages(state.chat!.id, state.page + 1, LIMIT)
          .then((res) => {
            dispatch({ type: 'ADD_PREV_PAGE', messages: res.data.results });
          })
          .finally(() => {
            setLoadingScrollTop(false);
          });
      } else if (
        state.scroll + 300 >= lastElement.offsetTop &&
        state.page > state.allMessagesCount
      ) {
        // getChatMessages(chat!.id, page + 1, LIMIT).then((res) => {
        //   setPage(page - 1);
        //   setMessages((prev) => [...prev, ...res.data.results]);
        // });
      }
    }
  }, [state.scroll]);

  const scrollChat = debounce(() => {
    dispatch({ type: 'SET_SCROLL', payload: ref.current!.scrollTop });
  }, 300);

  useEffect(() => {
    if (state.messages.length && ref.current && state.scroll !== null) {
      ref.current.scrollTop =
        ref.current.scrollHeight - state.prevBodyHeight + state.scroll;
      dispatch({ type: 'SET_BODY_HEIGHT', payload: ref.current.scrollHeight });
    }
  }, [state.messages.length]);

  // Скроллим окно сообщений вниз до непрочитанных сообщений
  useEffect(() => {
    if (ref.current && state.chat && !loading) {
      const elem = ref.current;
      if (!state.chat.unreaded_count) {
        elem.scrollTop = elem.scrollHeight - elem.clientHeight;
      } else {
        const firstIndex =
          state.chat.unreaded_count >= LIMIT
            ? 0
            : state.messages.length - state.chat.unreaded_count;
        const firstUnread = elem.children[firstIndex] as HTMLDivElement;
        if (firstUnread.offsetTop > elem.clientHeight) {
          elem.scrollTop =
            firstUnread.offsetTop -
            elem.clientHeight +
            firstUnread.clientHeight +
            36;
        }
      }
      dispatch({ type: 'SET_BODY_HEIGHT', payload: elem.scrollHeight });
    }
  }, [ref.current, loading]);

  return (
    <Flex
      direction="column"
      className={styles.root}
      align="center"
      justify={chatId && state.chat ? 'flex-start' : 'center'}
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
          <Header chat={state.chat} loading={loading} />
          <div className={styles.body} ref={ref} onScroll={scrollChat}>
            {loadingScrollTop && state.scroll === 0 && (
              <Loader className={styles.loader} />
            )}
            {loading || !state.chat ? (
              <MessagesSkeleton />
            ) : (
              <List
                messages={state.messages}
                page={state.page}
                limit={LIMIT}
                unreadCount={state.chat!.unreaded_count}
              />
            )}
            {loadingScrollBottom && <Loader className={styles.loader} />}
          </div>

          {ref.current &&
            (state.page !== 1 ||
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
          {state.chat && <Panel chatId={state.chat.id} socket={socket} />}
        </>
      )}
    </Flex>
  );
};

export default memo(Chat, (prevProps, nextProps) => {
  return prevProps.chatId === nextProps.chatId;
});
