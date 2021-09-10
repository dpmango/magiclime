import React, { FC, memo, RefObject, useEffect, Fragment } from 'react';
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
  page: number;
  unreadCount: number;
  limit: number;
  scroll: number | null;
  bodyRef: RefObject<HTMLDivElement>;
  socket: Socket;
}

const List: FC<IProps> = ({
  messages,
  page,
  unreadCount,
  limit,
  bodyRef,
  scroll,
  socket,
}) => {
  const { id } = useSelector((state: RootState) => state.user.profile);
  const styles = useStyles();

  // scrollTop, scrollTop + clientHeight
  // offsetTop

  useEffect(() => {
    if (bodyRef.current && scroll) {
      const visibleNodes = Array.from(bodyRef.current.children)
        .filter(
          (item) =>
            (item as HTMLDivElement).offsetTop >= scroll &&
            (item as HTMLDivElement).offsetTop <=
              scroll + bodyRef.current!.clientHeight
        )
        .map((item) => +item.id.match(/\d+/)![0]);

      visibleNodes.forEach((messageId) => {
        if (
          messages.find(
            (msg) =>
              msg.id === messageId &&
              msg.read_by_users.includes(id) &&
              msg.creator.id !== id
          )
        ) {
          socket.emit('read_message_event', { data: messageId });
        }
      });
    }
  }, [bodyRef.current, scroll]);

  return (
    <>
      {messages.map((message) => (
        <Fragment key={message.id}>
          {/* {(array.length - index === unreadCount || */}
          {/*  (limit < unreadCount && index === 0 && page === 1)) && ( */}
          {/*  <Flex align="center" margin="15px 0"> */}
          {/*    <div className={styles.line} /> */}
          {/*    <Typography margin="0 15px" size="xs" view="secondary"> */}
          {/*      Непрочитанные сообщения */}
          {/*    </Typography> */}
          {/*    <div className={styles.line} /> */}
          {/*  </Flex> */}
          {/* )} */}
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
