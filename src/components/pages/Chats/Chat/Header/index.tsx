import { Avatar } from '@consta/uikit/Avatar';
import React, { FC } from 'react';
import Flex from '../../../../Common/Flex';
import Typography from '../../../../Common/Typography';
import { IChatDetail } from '../../types';
import { HeaderSkeleton } from '../ChatSkeletons';
import useStyles from './styles';

interface IProps {
  chat: IChatDetail | null;
  loading: boolean;
}

const Header: FC<IProps> = ({ chat, loading }) => {
  const styles = useStyles();
  return (
    <Flex className={styles.header}>
      {loading || !chat ? (
        <HeaderSkeleton />
      ) : (
        <>
          <div className={styles.avatarWrapper}>
            <Avatar
              form="round"
              name={chat.title}
              url={chat.avatar ? chat.avatar.image : ''}
            />
          </div>
          <div>
            <Typography size="xl" weight="bold">
              {chat.title}
            </Typography>
            <Typography view="secondary">
              {chat.participants_count} members
            </Typography>
          </div>
        </>
      )}
    </Flex>
  );
};

export default Header;
