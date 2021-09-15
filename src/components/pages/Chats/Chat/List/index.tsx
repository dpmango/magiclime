import React, {
  FC,
  memo,
  RefObject,
  useEffect,
  Fragment,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { RootState } from '../../../../../store/reducers/rootReducer';
import Flex from '../../../../Common/Flex';
import Typography from '../../../../Common/Typography';
import { IMessage } from '../../types';
import { getFirstUnreadIndex, onReplyClick } from '../controller';
import Message from '../Message';
import useStyles from '../styles';

interface IProps {
  messages: IMessage[];
  unreadCount: number;
  chatId: number;
  limit: number;
  scroll: number | null;
  bodyRef: RefObject<HTMLDivElement>;
  socket: Socket;
  allMessagesCount: number;
}

const List: FC<IProps> = ({
  messages,
  unreadCount,
  limit,
  chatId,
  bodyRef,
  scroll,
  socket,
  allMessagesCount,
}) => {
  const [readMessages, setReadMessages] = useState<number[]>([]);
  const [unread, setUnread] = useState(unreadCount);
  const { id } = useSelector((state: RootState) => state.user.profile);
  const styles = useStyles();

  useEffect(() => {
    if (bodyRef.current && scroll && !!unread) {
      const visibleNodes = Array.from(bodyRef.current.children)
        .filter(
          (item) =>
            item.id &&
            (item as HTMLDivElement).offsetTop >= scroll &&
            (item as HTMLDivElement).offsetTop <=
              scroll + bodyRef.current!.clientHeight
        )
        .map((item) => +item.id.match(/\d+/)![0]);
      const unreadMessages = visibleNodes.filter((messageId) => {
        return (
          !readMessages.includes(messageId) &&
          messages.find(
            (msg) =>
              msg.id === messageId &&
              !msg.read_by_users.includes(id) &&
              msg.creator.id !== id
          )
        );
      });
      if (unreadMessages.length) {
        const firstId =
          messages[getFirstUnreadIndex(limit, unread, allMessagesCount)].id;
        let arr: number[] = [];
        console.log(firstId, unreadMessages);
        if (firstId === unreadMessages[0]) arr = arr.concat(unreadMessages);
        else {
          const newIndexes = Array.from({
            length: unreadMessages[0] - firstId,
          }).map((item, index) => firstId + index);
          arr = arr.concat(newIndexes, unreadMessages);
        }
        setUnread((prev) => prev - arr.length);
        setReadMessages((prev) => [...prev, ...arr]);
        socket.emit('read_message_event', {
          data: { messages: arr, chat_id: chatId },
        });
      }
    }
  }, [bodyRef.current, scroll]);

  return (
    <>
      {messages.map((message, index) => (
        <Fragment key={message.id}>
          {!!unreadCount &&
            getFirstUnreadIndex(limit, unreadCount, allMessagesCount) ===
              index && (
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
          />
        </Fragment>
      ))}
    </>
  );
};

export default memo(List, (prevProps, nextProps) => {
  return (
    prevProps.messages.length === nextProps.messages.length &&
    prevProps.scroll === nextProps.scroll
  );
});
