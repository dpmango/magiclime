import React, { FC, useContext, useMemo, useRef, useState } from 'react';
import { Avatar } from '@consta/uikit/Avatar';
import moment from 'moment';
import { Button } from '@consta/uikit/Button';
import { IconChat } from '@consta/uikit/IconChat';
import { IconMeatball } from '@consta/uikit/IconMeatball';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';
import { RootState } from '../../../../../store/reducers/rootReducer';
import { ChatContext } from '../../context';
import Dropdown from './Dropdown';
import Files from './FIles';
import Images from './Images';
import useStyles from './styles';
import Flex from '../../../../Common/Flex';
import { IMessage } from '../../types';

interface IProps {
  message: IMessage;
  onReplyClick: (id: number) => void;
}

const Message: FC<IProps> = ({ message, onReplyClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useSelector((state: RootState) => state.user.profile.id);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { chatContext, setChatContext } = useContext(ChatContext);
  const { t } = useTranslation();
  const styles = useStyles({
    isOwn: message.creator.id === id,
  });

  const replyMessage = () => {
    setChatContext({ ...chatContext, replyMessage: message });
  };

  const format = useMemo(() => {
    if (moment().isAfter(moment(message.created_at), 'day')) return 'DD MMMM';
    return 'HH:mm';
  }, []);

  return (
    <Flex
      margin="0 0 36px"
      onDoubleClick={replyMessage}
      id={`message_${message.id}`}
    >
      <Link to={`/profile/${message.creator.id}`}>
        <Avatar
          form="round"
          name={message.creator.name}
          url={message.creator.avatar ? message.creator.avatar.image : ''}
          className={styles.avatar}
        />
      </Link>
      <div className={styles.body}>
        <Flex align="center" margin="0 0 4px">
          <Link to={`/profile/${message.creator.id}`}>
            <Text size="s" weight="semibold">
              {message.creator.name}
            </Text>
          </Link>
          <div className={styles.dot} />
          <Text className={styles.date} view="secondary">
            {moment(message.created_at).format(format)}
          </Text>
        </Flex>
        {message.reply_to && (
          <div
            className={styles.replyFrom}
            onClick={() => onReplyClick(message.reply_to?.id as number)}
          >
            <Text
              weight="semibold"
              className={styles.replyCreator}
              view="brand"
            >
              {message.reply_to.creator.name}
            </Text>
            <Text className={styles.text} size="s">
              {message.reply_to.text}
            </Text>
          </div>
        )}
        {message.attached_files.length > 0 && (
          <Files files={message.attached_files} />
        )}
        {message.attached_images.length > 0 && (
          <Images images={message.attached_images} />
        )}
        <Flex margin="0 0 8px" className={styles.container}>
          <Text className={styles.text}>{message.text}</Text>
        </Flex>
        <Flex className={styles.buttons}>
          <Button
            label={t('chats.toAnswer')}
            iconLeft={IconChat}
            view="clear"
            size="xs"
            onClick={replyMessage}
            className={styles.reply}
          />
          <Button
            iconLeft={IconMeatball}
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            view="clear"
            size="xs"
            onlyIcon
          />
          {isOpen && <Dropdown buttonRef={buttonRef} setOpen={setIsOpen} />}
        </Flex>
      </div>
    </Flex>
  );
};

export default React.memo(Message, (prevProps, nextProps) => {
  return prevProps.message.id === nextProps.message.id;
});
