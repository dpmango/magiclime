import React, { FC, useContext } from 'react';
import { IMessage } from '../../types';
import Flex from '../../../../Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import useStyles from './styles';
import Typography from '../../../../Common/Typography';
import moment from 'moment';
import { ChatContext } from '../../context';
import { Button } from '@consta/uikit/Button';
import { IconChat } from '@consta/uikit/IconChat';
import { IconMeatball } from '@consta/uikit/IconMeatball';

const Message: FC<{ message: IMessage }> = ({ message }) => {
  const styles = useStyles();
  const { chatContext, setChatContext } = useContext(ChatContext);

  const replyMessage = () => {
    setChatContext({ ...chatContext, replyMessage: message });
  };

  return (
    <Flex margin={'0 0 50px'} onDoubleClick={replyMessage}>
      <Avatar
        form={'round'}
        name={message.user_name}
        url={message.user_avatar}
        className={styles.avatar}
      />
      <div>
        <Flex align={'center'} margin={'0 0 4px'}>
          <Typography weight={'semibold'} size={'m'}>
            {message.user_name}
          </Typography>
          <div className={styles.dot}></div>
          <Typography className={styles.date} size={'xs'} view={'secondary'}>
            {moment(message.date).format('HH:mm')}
          </Typography>
        </Flex>
        <Flex margin={'0 0 9px'}>
          <Typography view={'primary'} size={'m'} className={styles.text}>
            {message.text}
          </Typography>
        </Flex>
        <Flex>
          <Button
            label={'Ответить'}
            iconLeft={IconChat}
            view={'clear'}
            size={'xs'}
            onClick={replyMessage}
            className={styles.reply}
          />
          <Button iconLeft={IconMeatball} view={'clear'} size={'xs'} onlyIcon />
        </Flex>
      </div>
    </Flex>
  );
};

export default Message;
