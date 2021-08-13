import React, {
  FC,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import { useTranslation } from 'react-i18next';

type DropdownItem = {
  name: string;
  icon: ComponentType;
};

interface IProps {
  message: IMessage;
  onReplyClick: (id: number) => void;
}

const Message: FC<IProps> = ({ message, onReplyClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = useStyles();
  const ref = useRef<HTMLButtonElement>(null);
  const { chatContext, setChatContext } = useContext(ChatContext);
  const { t } = useTranslation();

  const items = [{ name: t('common.complain'), icon: IconWarning }];

  const replyMessage = () => {
    setChatContext({ ...chatContext, replyMessage: message });
  };

  const renderLeftSide = useCallback((item: DropdownItem) => {
    const Icon = item.icon;
    return <Icon size="s" />;
  }, []);

  const format = useMemo(() => {
    if (moment().isAfter(moment(message.created_at), 'day')) return 'DD MMMM';
    else return 'HH:mm';
  }, []);

  return (
    <Flex
      margin={'0 0 36px'}
      onDoubleClick={replyMessage}
      id={`message_${message.id}`}
    >
      <Avatar
        form={'round'}
        name={message.creator.name}
        url={!!message.creator.avatar ? message.creator.avatar.image : ''}
        className={styles.avatar}
      />
      <div className={styles.w100}>
        <Flex align={'center'} margin={'0 0 4px'}>
          <Typography weight={'semibold'}>{message.creator.name}</Typography>
          <div className={styles.dot}></div>
          <Typography className={styles.date} view={'secondary'}>
            {moment(message.created_at).format(format)}
          </Typography>
        </Flex>
        {message.reply_to && (
          <div
            className={styles.replyFrom}
            onClick={() => onReplyClick(message.reply_to?.id as number)}
          >
            <Typography
              weight={'semibold'}
              margin={'0 0 4px'}
              className={styles.replyCreator}
              view={'brand'}
            >
              {message.reply_to.creator.name}
            </Typography>
            <Typography className={styles.text} size={'s'}>
              {message.reply_to.text}
            </Typography>
          </div>
        )}
        <Flex margin={'0 0 6px'} className={styles.container}>
          <Typography className={styles.text}>{message.text}</Typography>
        </Flex>
        <Flex className={styles.buttons}>
          <Button
            label={t('chats.toAnswer')}
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
