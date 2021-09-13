import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import { Loader } from '@consta/uikit/Loader';
import moment from 'moment';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import Members from 'components/Common/Members';
import { getForums } from 'utils/api/routes/forum';
import { timeToTimeStamp } from 'utils/helpers/formatDate';
import { IForum, IForumMember } from 'types/interfaces/forum';

import useStyles from './styles';

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

  // TODO - поменять api на выдачу как в DefaultMember, функцию удалить, d шаблонах передать x.members
  const todoFixMembers = (list: IForumMember[]): any[] => {
    return list.map((x: IForumMember, idx: number) => ({
      id: 999 + idx,
      name: x.username,
      avatar: x.avatar
        ? {
            id: 999 + idx,
            image: x.avatar,
          }
        : null,
    }));
  };

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
                        <Members members={todoFixMembers(x.members)} />
                      </div>
                    </div>
                    <div className={styles.cardStatsCol}>
                      <Typography size="xs" view="ghost" lineHeight="m">
                        {t('forum.page.activity')}
                      </Typography>
                      <Typography margin="11px 0 0" size="s" lineHeight="m">
                        {timeToTimeStamp(x.last_activity_date)}
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
                              url={x.last_answer.author_avatar || ''}
                              // name="x.last_message.name"
                            />
                          </div>
                          <Typography
                            margin="0 0 0 8px"
                            size="s"
                            lineHeight="m"
                            className={styles.cardLastContent}
                          >
                            {x.last_answer.text}
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
