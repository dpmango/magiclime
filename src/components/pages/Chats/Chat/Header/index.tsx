import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';
import { IconKebab } from '@consta/uikit/IconKebab';
import React, { FC, useRef, useState } from 'react';
import Flex from '../../../../Common/Flex';
import Typography from '../../../../Common/Typography';
import { IChatDetail } from '../../types';
import { HeaderSkeleton } from '../ChatSkeletons';
import Dropdown from './Dropdown';
import useStyles from './styles';

interface IProps {
  chat: IChatDetail | null;
  loading: boolean;
}

const Header: FC<IProps> = ({ chat, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const styles = useStyles();

  return (
    <Flex className={styles.header} justify="space-between" align="center">
      {loading || !chat ? (
        <HeaderSkeleton />
      ) : (
        <>
          <Flex>
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
          </Flex>
          <Button
            ref={buttonRef}
            view="clear"
            iconLeft={IconKebab}
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && <Dropdown buttonRef={buttonRef} setOpen={setIsOpen} />}
        </>
      )}
    </Flex>
  );
};

export default React.memo(Header, (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
});
