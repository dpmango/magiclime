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
import { ChatContext } from '../../context';
import { IMessage } from '../../types';
import { onReplyClick } from '../controller';
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
}

const List: FC<IProps> = ({
  messages,
  unreadCount,
  limit,
  chatId,
  bodyRef,
  scroll,
  socket,
}) => {
  const [readMessages, setReadMessages] = useState<number[]>([]);
  const { id } = useSelector((state: RootState) => state.user.profile);
  const styles = useStyles();

  useEffect(() => {
    if (bodyRef.current && scroll) {
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
        setReadMessages((prev) => [...prev, ...unreadMessages]);
        socket.emit('read_message_event', {
          data: { messages: unreadMessages, chat_id: chatId },
        });
      }
    }
  }, [bodyRef.current, scroll]);

  return (
    <>
      {messages.map((message, index) => (
        <Fragment key={message.id}>
          {limit * Math.ceil(unreadCount / limit) - unreadCount === index && (
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
