import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';

const ForumDetailsStats: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <Typography size="l" weight="semibold">
          {t('forum.details.stats.author')}
        </Typography>
        <Flex margin="8px 0 0" align="center">
          <Avatar
            url="https://randomuser.me/api/portraits/men/9.jpg"
            className={styles.avatar}
          />
          <Typography
            margin="0 0 0 8px"
            size="l"
            lineHeight="s"
            className={styles.title}
          >
            Константин Константинопольский
          </Typography>
        </Flex>
      </div>

      <div className={styles.group}>
        <Typography size="l" weight="semibold">
          {t('forum.details.stats.answers')}
        </Typography>
        <Typography margin="8px 0 0" size="l" lineHeight="m">
          112
        </Typography>
      </div>

      <div className={styles.group}>
        <Typography size="l" weight="semibold">
          {t('forum.details.stats.created')}
        </Typography>
        <Typography margin="8px 0 0" size="l" lineHeight="m">
          сегодня в 14:22
        </Typography>
      </div>
    </div>
  );
};

export default ForumDetailsStats;
