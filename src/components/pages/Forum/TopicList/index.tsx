import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import { Loader } from '@consta/uikit/Loader';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import Members from 'components/Common/Members';
import { getForums } from 'utils/api/routes/forum';
import { IForum } from 'types/interfaces/forum';

import useStyles from './styles';

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

  const [list, setList] = useState<IForum[]>([]);

  useEffect(() => {
    const fetchTopics = async (): Promise<unknown> => {
      const [err, data] = await getForums();

      if (err) {
        toast(t('forum.page.loading.error'));
        return {};
      }

      setList(data!.results);

      return data;
    };

    fetchTopics();
  }, [setList]);

  return (
    <div className={styles.root}>
      <Typography size="3xl" weight="semibold" lineHeight="m">
        {t('forum.page.title')}
      </Typography>

      <div className={styles.content}>
        {list ? (
          list.map((x) => (
            <div className={styles.card} key={x.id}>
              <Flex className={styles.cardContent}>
                <div className={styles.cardAvatar}>
                  {x.image && <img src={x.image.image} alt={x.name} />}
                </div>

                <div className={styles.cardMain}>
                  <Typography size="xl s:2xl" weight="semibold">
                    {x.name}
                  </Typography>
                  <Typography
                    margin="8px 0 16px"
                    size="m s:l"
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
                  className={styles.cardMeta}
                >
                  <Flex
                    align="flex-start"
                    wrap="wrap"
                    className={styles.cardStats}
                  >
                    <div className={styles.cardStatsCol}>
                      <Typography size="xs" view="ghost" lineHeight="m">
                        {t('forum.page.topicsCount')}
                      </Typography>
                      <Typography
                        margin="8px 0 0"
                        size="xl"
                        lineHeight="m"
                        weight="semibold"
                      >
                        {x.topics_count}
                      </Typography>
                    </div>
                    <div className={styles.cardStatsCol}>
                      <Typography size="xs" view="ghost" lineHeight="m">
                        {t('forum.page.members')}
                      </Typography>
                      <div className={styles.cardMembers}>
                        <Members members={members} />
                      </div>
                    </div>
                    <div className={styles.cardStatsCol}>
                      <Typography size="xs" view="ghost" lineHeight="m">
                        {t('forum.page.activity')}
                      </Typography>
                      <Typography margin="11px 0 0" size="s" lineHeight="m">
                        {x.last_activity_date}
                      </Typography>
                    </div>
                  </Flex>

                  <div className={styles.cardLast}>
                    {x.last_answer ? (
                      <>
                        <Typography size="xs" view="ghost" lineHeight="m">
                          {t('forum.page.lastMessage.label')}
                        </Typography>
                        <Flex align="center" margin="12px 0 0">
                          <div className={styles.cardLastAvatar}>
                            <Avatar
                              size="xs"
                              url={x.last_answer.avatar || ''}
                              name="x.last_message.name"
                            />
                          </div>
                          <Typography
                            margin="0 0 0 8px"
                            size="s"
                            lineHeight="m"
                            className={styles.cardLastContent}
                          >
                            {x.last_answer.content}
                          </Typography>
                        </Flex>
                      </>
                    ) : (
                      <Typography size="s" view="ghost" lineHeight="m">
                        {t('forum.page.lastMessage.empty')}
                      </Typography>
                    )}
                  </div>
                </Flex>
              </Flex>
            </div>
          ))
        ) : (
          <Loader className={styles.loader} />
        )}
      </div>
    </div>
  );
};

export default ForumTopics;
