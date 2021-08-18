import React, { FC } from 'react';
import { IChat } from '../../types';
import { Avatar } from '@consta/uikit/Avatar';
import useStyles from './styles';
import Typography from '../../../../Common/Typography';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Badge } from '@consta/uikit/Badge';
import { useCheckDefaultTheme } from '../../../../../hooks/useCheckDefaultTheme';

const ChatCard: FC<{ chat: IChat }> = ({ chat }) => {
  const isDefault = useCheckDefaultTheme();
  const styles = useStyles({ isDefault, haveLastMessage: !!chat.last_message });

  return (
    <NavLink
      to={`/chats/${chat.id}`}
      className={styles.root}
      activeClassName={styles.activeChat}
    >
      <Avatar
        form={'round'}
        name={chat.title}
        url={chat.avatar && chat.avatar.image}
        className={styles.avatar}
      />
      <div className={styles.nameWrapper}>
        <Typography
          weight={'semibold'}
          size={'s'}
          margin={'0 0 2px'}
          className={styles.text}
        >
          {chat.title}
        </Typography>
        {chat.last_message && (
          <Typography size={'s'} view={'ghost'} className={styles.text}>
            {chat.last_message.text}
          </Typography>
        )}
      </div>
      <div className={styles.timeWrapper}>
        <Typography size={'xs'} view={'ghost'} margin={'0 0 4px'}>
          {chat.last_message &&
            moment(chat.last_message.created_at).format('HH:mm')}
        </Typography>
        {chat.unread_count && (
          <Badge
            size={'s'}
            status={'normal'}
            form={'round'}
            label={`${chat.unread_count}`}
          />
        )}
      </div>
    </NavLink>
  );
};

export default ChatCard;