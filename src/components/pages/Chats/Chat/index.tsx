import React, {
  FC,
  memo,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { Button } from '@consta/uikit/Button';
import { IconArrowDown } from '@consta/uikit/IconArrowDown';
import { Loader } from '@consta/uikit/Loader';
import { Socket } from 'socket.io-client';
import debounce from 'lodash/debounce';
import cln from 'classnames';
import { MessagesSkeleton } from './ChatSkeletons';
import {
  checkMark,
  fixScroll,
  getFirstUnreadIndex,
  renderNewMessage,
} from './controller';
import Header from './Header';
import List from './List';
import { initialState, reducer } from './reducer';
import useStyles from './styles';
import Panel from './Panel';
import { getChat, getChatMessages } from '../../../../utils/api/routes/chat';

interface IProps {
  socket: Socket;
  chatId: string | number;
}

const Chat: FC<IProps> = ({ socket, chatId }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [loadingScrollTop, setLoadingScrollTop] = useState(false);
  const [loadingScrollBottom, setLoadingScrollBottom] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLSpanElement>(null);
  const styles = useStyles();

  const LIMIT = useMemo(() => {
    if (chatId && ref.current) {
      const height = ref.current.clientHeight;
      if (height < 500) return 20;
      if (height < 750) return 30;
      return 50;
    }
    return 20;
  }, [chatId, ref.current]);

  const scrollToBottom = () => {
    if (state.page === 1) {
      ref.current!.scrollTo({
        behavior: 'smooth',
        top: ref.current!.scrollHeight,
      });
    } else {
      getChatMessages(state.chat!.id, 1, LIMIT).then((res) => {
        dispatch({
          type: 'SCROLL_TO_BOTTOM',
          messages: res.data.results.reverse(),
        });
        markRef.current!.style.top = `0px`;
        ref.current!.scrollTop =
          ref.current!.scrollHeight - ref.current!.clientHeight;
      });
    }
    if (state.chat!.unreaded_count)
      socket.emit('read_all_messages_event', { data: { id: state.chat!.id } });
  };

  useEffect(() => {
    const listener = (msg: any) => {
      if (msg.data && msg.data.id) {
        renderNewMessage(msg.data, dispatch, ref.current);
      }
    };

    if (chatId) {
      setLoading(true);
      getChat(+chatId).then((res) => {
        dispatch({ type: 'SET_CHAT', payload: res.data });
      });

      socket.emit('join', { room: chatId.toString() });
      socket.on('my_response', listener);
    }
    return () => {
      if (chatId) {
        socket.emit('leave', { room: chatId.toString() });
        socket.off('my_response', listener);
      }
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
    if (state.scroll !== null && state.allMessagesCount !== 0) {
      if (state.scroll - 300 <= 0) {
        const page = checkMark(markRef, state)
          ? state.lastTopRenderPage + 1
          : state.page + 1;
        if (page * LIMIT < state.allMessagesCount) {
          setLoadingScrollTop(true);
          getChatMessages(state.chat!.id, page, LIMIT)
            .then((res) => {
              dispatch({
                type: 'ADD_PREV_PAGE',
                messages: res.data.results.reverse(),
                page,
              });
              fixScroll(ref.current!, markRef.current!, dispatch, state);
            })
            .finally(() => {
              setLoadingScrollTop(false);
            });
        }
      } else if (
        state.scroll + 300 + ref.current!.clientHeight >=
          ref.current!.scrollHeight &&
        state.page !== 1
      ) {
        const page = checkMark(markRef, state)
          ? state.lastBottomRenderPage - 1
          : state.page - 1;

        if (page >= 1) {
          setLoadingScrollBottom(true);
          getChatMessages(state.chat!.id, page, LIMIT)
            .then((res) => {
              dispatch({
                type: 'ADD_NEXT_PAGE',
                messages: res.data.results.reverse(),
                page,
              });
            })
            .finally(() => {
              setLoadingScrollBottom(false);
            });
        }
      }
    }
  }, [state.scroll, state.allMessagesCount]);

  const scrollChat = debounce(() => {
    dispatch({ type: 'SET_SCROLL', payload: ref.current!.scrollTop });
  }, 300);

  // Скроллим окно сообщений вниз до непрочитанных сообщений
  useEffect(() => {
    if (ref.current && state.chat && !loading) {
      const elem = ref.current;
      if (!state.chat.unreaded_count) {
        setTimeout(() => {
          elem.scrollTop = elem.scrollHeight;
          dispatch({ type: 'SET_SCROLL', payload: null });
        }, 0);
      } else {
        const firstIndex = getFirstUnreadIndex(
          LIMIT,
          state.chat.unreaded_count,
          state.allMessagesCount
        );
        const firstUnread = Array.from(elem.children).filter(
          (item) => !!item.id
        )[firstIndex] as HTMLDivElement;
        if (firstUnread.offsetTop > elem.clientHeight) {
          elem.scrollTop =
            firstUnread.offsetTop -
            elem.clientHeight +
            firstUnread.clientHeight +
            56;
        }
      }
      dispatch({ type: 'SET_BODY_HEIGHT', payload: elem.scrollHeight });
    }
  }, [ref.current, loading]);

  return (
    <>
      <Header chat={state.chat} loading={loading} />
      <div className={styles.body} ref={ref} onScroll={scrollChat}>
        <span className={styles.mark} ref={markRef} />
        {loadingScrollTop && state.scroll === 0 && (
          <Loader className={cln(styles.loader, styles.loaderTop)} />
        )}
        {loading || !state.chat ? (
          <MessagesSkeleton />
        ) : (
          <List
            messages={state.messages}
            limit={LIMIT}
            chatId={state.chat!.id}
            scroll={state.scroll}
            bodyRef={ref}
            allMessagesCount={state.allMessagesCount}
            socket={socket}
            unreadCount={state.chat!.unreaded_count}
          />
        )}
        {/* {loadingScrollBottom && ( */}
        {/*  <Loader className={cln(styles.loader, styles.loaderBottom)} /> */}
        {/* )} */}
      </div>
      {ref.current &&
        state.scroll !== null &&
        state.scroll + 200 <=
          ref.current!.scrollHeight - ref.current!.clientHeight && (
          <Button
            view="primary"
            form="round"
            size="l"
            iconLeft={IconArrowDown}
            className={styles.scrollToBottom}
            onClick={scrollToBottom}
          />
        )}
      {state.chat && <Panel chatId={state.chat.id} socket={socket} />}
    </>
  );
};

export default memo(Chat, (prevProps, nextProps) => {
  return prevProps.chatId === nextProps.chatId;
});
