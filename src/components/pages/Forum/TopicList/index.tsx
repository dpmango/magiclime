import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import Members from 'components/Common/Members';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';

const list = [
  {
    id: 1,
    cover: '/images/forum-topic-page.svg',
    title: 'Личный рост',
    description:
      'Форум о приобретении навыков, которые помогают поднять жизнь на новый уровень',
    last_message: {
      avatar: null,
      name: 'A B',
      content:
        'В моей жизни был момент, когда я перестала работать над собо...',
    },
  },
  {
    id: 2,
    cover: '/images/forum-topic-page.svg',
    title: 'Личный рост',
    description:
      'Форум о приобретении навыков, которые помогают поднять жизнь на новый уровень',
    last_message: {
      avatar: null,
      name: 'B F',
      content:
        'В моей жизни был момент, когда я перестала работать над собо...',
    },
  },
  {
    id: 3,
    cover: '/images/forum-topic-page.svg',
    title: 'Личный рост',
    description:
      'Форум о приобретении навыков, которые помогают поднять жизнь на новый уровень',
    last_message: {
      avatar: null,
      name: 'D J',
      content:
        'В моей жизни был момент, когда я перестала работать над собо...',
    },
  },
];

const members = [
  {
    id: 1,
    avatar: {
      id: 1,
      image: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
  },
  { id: 2, avatar: { id: 2, image: '' }, name: 'A B ' },
  {
    id: 3,
    avatar: {
      id: 3,
      image: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
  },
  {
    id: 4,
    avatar: {
      id: 4,
      image: 'https://randomuser.me/api/portraits/men/19.jpg',
    },
  },
  {
    id: 5,
    avatar: {
      id: 5,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
  {
    id: 6,
    avatar: {
      id: 6,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
];
const ForumTopics: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Typography size="3xl" weight="semibold" lineHeight="m">
        {t('forum.page.title')}
      </Typography>

      <div className={styles.content}>
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
                <Link to={`/forum/${x.id}`}>
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
                    <Typography
                      margin="8px 0 0"
                      size="xl"
                      lineHeight="m"
                      weight="semibold"
                    >
                      1123
                    </Typography>
                  </div>
                  <div className={styles.cardStatsCol}>
                    <Typography size="xs" view="ghost" lineHeight="m">
                      Участники
                    </Typography>
                    <div className={styles.cardMembers}>
                      <Members members={members} />
                    </div>
                  </div>
                  <div className={styles.cardStatsCol}>
                    <Typography size="xs" view="ghost" lineHeight="m">
                      Активность
                    </Typography>
                    <Typography margin="11px 0 0" size="s" lineHeight="m">
                      сегодня 15:34
                    </Typography>
                  </div>
                </Flex>

                <div className={styles.cardLast}>
                  <Typography size="xs" view="ghost" lineHeight="m">
                    Последнее сообщение
                  </Typography>
                  <Flex align="center" margin="12px 0 0">
                    <div className={styles.cardLastAvatar}>
                      <Avatar
                        url={x.last_message.avatar}
                        name="x.last_message.name"
                      />
                    </div>
                    <Typography
                      margin="0 0 0 8px"
                      size="s"
                      lineHeight="m"
                      className={styles.cardLastContent}
                    >
                      {x.last_message.content}
                    </Typography>
                  </Flex>
                </div>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </div>
    </div>
  );
};

export default ForumTopics;
