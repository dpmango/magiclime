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
  const styles = useStyles({ isDefault });

  return (
    <NavLink
      to={`/chats/${chat.id}`}
      className={styles.root}
      activeClassName={styles.activeChat}
    >
      <Avatar
        form={'round'}
        name={chat.title}
        url={chat.image}
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
        {!!chat.messages.length && (
          <Typography size={'s'} view={'ghost'} className={styles.text}>
            {chat.messages[chat.messages.length - 1].text}
          </Typography>
        )}
      </div>
      <div className={styles.timeWrapper}>
        <Typography size={'xs'} view={'ghost'} margin={'0 0 4px'}>
          {!!chat.messages.length &&
            moment(chat.messages[chat.messages.length - 1].created_at).format(
              'HH:mm'
            )}
        </Typography>
        <Badge
          size={'s'}
          status={'normal'}
          form={'round'}
          label={`${chat.unread_count}`}
        />
      </div>
    </NavLink>
  );
};

export default ChatCard;
