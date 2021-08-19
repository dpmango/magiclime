import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Button, Avatar } from '@consta/uikit/Button';

import { useTranslation } from 'react-i18next';

import useStyles from './styles';

const list = [
  {
    id: 1,
    cover: '/images/forum-topic-page.svg',
    title: 'Личный рост',
    description:
      'Форум о приобретении навыков, которые помогают поднять жизнь на новый уровень',
  },
  {
    id: 2,
    cover: '/images/forum-topic-page.svg',
    title: 'Личный рост',
    description:
      'Форум о приобретении навыков, которые помогают поднять жизнь на новый уровень',
  },
  {
    id: 3,
    cover: '/images/forum-topic-page.svg',
    title: 'Личный рост',
    description:
      'Форум о приобретении навыков, которые помогают поднять жизнь на новый уровень',
  },
];
const ForumTopics: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      {list.map((x) => (
        <Flex align="center" className={styles.card}>
          <div className={styles.cardAvatar}>
            <img src={x.cover} alt={x.title} />
          </div>
          <Flex className={styles.cardContent}>
            <div className={styles.cardMain}>
              <Typography size="2xl" weight="semibold">
                {x.title}
              </Typography>
              <Typography
                margin="8px 0 16px"
                size="l"
                view="secondary"
                lineHeight="s"
              >
                {x.description}
              </Typography>
              <Link to={`/forum/${x.id}/`}>
                <Button size="s" label={t('forum.page.view')} />
              </Link>
            </div>

            {/* right side */}
            <Flex
              align="stretch"
              direction="column"
              className={styles.cardStats}
            >
              <Flex align="flex-start">
                <div className={styles.cardStatsCol}>
                  <Typography size="xs" view="ghost" lineHeight="m">
                    Тем на форуме
                  </Typography>
                </div>
                <div className={styles.cardStatsCol}>
                  <Typography size="xs" view="ghost" lineHeight="m">
                    Участники
                  </Typography>
                </div>
                <div className={styles.cardStatsCol}>
                  <Typography size="xs" view="ghost" lineHeight="m">
                    Активность
                  </Typography>
                </div>
              </Flex>

              <div className={styles.cardLast} />
            </Flex>
          </Flex>
        </Flex>
      ))}
    </div>
  );
};

export default ForumTopics;
