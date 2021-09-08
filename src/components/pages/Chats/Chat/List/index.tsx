import React, { FC, memo } from 'react';
import Flex from '../../../../Common/Flex';
import Typography from '../../../../Common/Typography';
import { IMessage } from '../../types';
import { onReplyClick } from '../controller';
import Message from '../Message';
import useStyles from '../styles';

interface IProps {
  messages: IMessage[];
  page: number;
  unreadCount: number;
  limit: number;
}

const List: FC<IProps> = ({ messages, page, unreadCount, limit }) => {
  const styles = useStyles();
  return (
    <>
      {messages.map((message, index, array) => (
        <div key={message.id}>
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
            unread={array.length - index <= unreadCount}
          />
        </div>
      ))}
    </>
  );
};

export default memo(List, (prevProps, nextProps) => {
  return prevProps.messages.length === nextProps.messages.length;
});
