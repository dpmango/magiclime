import React, { FC } from 'react';
import { IMessage } from '../../types';
import Flex from '../../../../Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import useStyles from './style';
import Typography from '../../../../Common/Typography';
import moment from 'moment';

const Message: FC<{ message: IMessage }> = ({ message }) => {
  const styles = useStyles();
  return (
    <Flex margin={'0 0 50px'}>
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
          <Typography size={'s'} view={'secondary'}>
            {moment(message.date).format('HH:mm')}
          </Typography>
        </Flex>
        <Flex>
          <Typography view={'secondary'} size={'m'} className={styles.text}>
            {message.text}
          </Typography>
        </Flex>
      </div>
    </Flex>
  );
};

export default Message;
