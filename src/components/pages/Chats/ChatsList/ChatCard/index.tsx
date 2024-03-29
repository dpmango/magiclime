import React, { FC, memo } from 'react';
import cln from 'classnames';
import { Avatar } from '@consta/uikit/Avatar';
import moment from 'moment';
import { Badge } from '@consta/uikit/Badge';
import { SetStateType } from '../../../../../types/common';
import Typography from '../../../../Common/Typography';
import useStyles from './styles';
import { IChat } from '../../types';
import { useCheckDefaultTheme } from '../../../../../hooks/useCheckDefaultTheme';

interface IProps {
  chat: IChat;
  chatId: string | number;
  setActiveChat: SetStateType<string | number>;
}

const ChatCard: FC<IProps> = ({ chat, chatId, setActiveChat }) => {
  const isDefault = useCheckDefaultTheme();
  const styles = useStyles({ isDefault, haveLastMessage: !!chat.last_message });

  return (
    <div
      className={cln(styles.root, {
        [styles.activeChat]: chat.id === +chatId,
      })}
      onClick={() => setActiveChat(chat.id)}
    >
      <Avatar
        form="round"
        name={chat.title}
        url={chat.avatar && chat.avatar.image}
        className={styles.avatar}
      />
      <div className={styles.nameWrapper}>
        <Typography
          weight="semibold"
          size="s"
          margin="0 0 2px"
          className={styles.text}
        >
          {chat.title}
        </Typography>
        {chat.last_message && (
          <Typography size="s" view="ghost" className={styles.text}>
            {chat.last_message.text}
          </Typography>
        )}
      </div>
      <div className={styles.timeWrapper}>
        <Typography size="xs" view="ghost" margin="0 0 4px">
          {chat.last_message &&
            moment(chat.last_message.created_at).format('HH:mm')}
        </Typography>
        {chat.unreaded_count > 0 && (
          <Badge
            size="s"
            status="normal"
            form="round"
            label={`${chat.unreaded_count}`}
          />
        )}
      </div>
    </div>
  );
};

export default ChatCard;
