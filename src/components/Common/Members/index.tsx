import React, { FC } from 'react';
import { Avatar } from '@consta/uikit/Avatar';
import cn from 'classnames';
import Flex from '../Flex';
import useStyles from './style';
import { IPhoto } from '../../../types/interfaces/common';

type DefaultMember = {
  readonly id: number;
  avatar: IPhoto | null;
  name?: string;
};

interface IProps<T> {
  members: T[];
  className?: string;
  maxShown?: number;
  itemSize?: number;
}

const Members = <T extends DefaultMember>({
  members,
  className,
  maxShown = 5,
  itemSize = 26,
}: IProps<T>) => {
  const styles = useStyles({ itemSize });
  return (
    <Flex className={cn(styles.container, className)}>
      {members.slice(0, maxShown).map((member) => (
        <Avatar
          key={member.id}
          url={member.avatar ? member.avatar.image : ''}
          className={styles.member}
          name={member.name || ''}
        />
      ))}
      {members.length > 5 && (
        <div className={cn(styles.member, styles.membersCount)}>
          <span>+{members.length - 5}</span>
        </div>
      )}
    </Flex>
  );
};

export default Members;
