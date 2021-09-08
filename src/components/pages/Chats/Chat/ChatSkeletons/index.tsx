import { SkeletonCircle, SkeletonText } from '@consta/uikit/Skeleton';
import React, { FC, memo } from 'react';
import { v4 as uuid } from 'uuid';
import useStyles from '../styles';

export const MessagesSkeleton: FC = memo(() => {
  const styles = useStyles();
  return (
    <>
      {Array.from({ length: 3 }).map(() => (
        <div key={uuid()} className={styles.messagesSkeleton}>
          <SkeletonCircle size={52} />
          <SkeletonText rows={3} fontSize="xs" lineHeight="s" />
        </div>
      ))}
    </>
  );
});

export const HeaderSkeleton: FC = memo(() => {
  const styles = useStyles();
  return (
    <div className={styles.headerSkeleton}>
      <SkeletonCircle size={56} />
      <SkeletonText rows={2} fontSize="s" lineHeight="s" />
    </div>
  );
});
