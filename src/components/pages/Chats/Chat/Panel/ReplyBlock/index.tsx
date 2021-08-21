import React, { FC } from 'react';
import { IconReply } from '@consta/uikit/IconReply';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { IMessage } from '../../../types';
import Flex from '../../../../../Common/Flex';
import useStyles from './styles';
import Typography from '../../../../../Common/Typography';

interface IProps {
  message: IMessage;
  cancelReply: VoidFunction;
}

const ReplyBlock: FC<IProps> = ({ message, cancelReply }) => {
  const styles = useStyles();
  return (
    <Flex className={styles.root} align="center">
      <div>
        {/* <IconReply className={styles.icon} /> */}
        <Button
          size="s"
          view="clear"
          iconLeft={IconClose}
          onClick={cancelReply}
        />
      </div>
      <div className={styles.replyMessage}>
        <Typography weight="semibold" size="s" className={styles.username}>
          {message.creator.name}
        </Typography>
        <Typography view="primary" size="s" className={styles.text}>
          {message.text}
        </Typography>
      </div>
      <div>
        {/* <Button size={'s'} view={'clear'} iconLeft={IconClose} onClick={cancelReply} /> */}
      </div>
    </Flex>
  );
};

export default ReplyBlock;
