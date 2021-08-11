import React, { FC, useCallback, useContext, useRef, useState } from 'react';
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
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { IconWarning } from '@consta/uikit/IconWarning';
import { ComponentType } from '../../../../../types/common';

type DropdownItem = {
  name: string;
  icon: ComponentType;
};

const Message: FC<{ message: IMessage }> = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = useStyles();
  const ref = useRef<HTMLButtonElement>(null);
  const { chatContext, setChatContext } = useContext(ChatContext);

  const items = [{ name: 'Пожаловаться', icon: IconWarning }];

  const replyMessage = () => {
    setChatContext({ ...chatContext, replyMessage: message });
  };

  const renderLeftSide = useCallback((item: DropdownItem) => {
    const Icon = item.icon;
    return <Icon size="s" />;
  }, []);

  return (
    <Flex margin={'0 0 36px'} onDoubleClick={replyMessage}>
      <Avatar
        form={'round'}
        name={message.creator.name}
        url={!!message.creator.avatar ? message.creator.avatar.image : ''}
        className={styles.avatar}
      />
      <div>
        <Flex align={'center'} margin={'0 0 4px'}>
          <Typography weight={'semibold'} size={'m'}>
            {message.creator.name}
          </Typography>
          <div className={styles.dot}></div>
          <Typography className={styles.date} size={'xs'} view={'secondary'}>
            {moment(message.created_at).format('HH:mm')}
          </Typography>
        </Flex>
        <Flex margin={'0 0 6px'}>
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
          <Button
            iconLeft={IconMeatball}
            ref={ref}
            onClick={() => setIsOpen(!isOpen)}
            view={'clear'}
            size={'xs'}
            onlyIcon
          />
          {isOpen && (
            <ContextMenu
              items={items}
              getLabel={(item: DropdownItem) => item.name}
              anchorRef={ref}
              size={'s'}
              getLeftSideBar={renderLeftSide}
              direction="downStartLeft"
              onClickOutside={() => setIsOpen(false)}
            />
          )}
        </Flex>
      </div>
    </Flex>
  );
};

export default Message;
