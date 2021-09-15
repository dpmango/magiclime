import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import { Loader } from '@consta/uikit/Loader';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import Members from 'components/Common/Members';
import { getForums } from 'utils/api/routes/forum';
import { timeToTimeStamp } from 'utils/helpers/formatDate';
import { IForum } from '../types';

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

  return (
    <div className={styles.root}>
      <Typography size="3xl" weight="semibold" lineHeight="m">
        {t('forum.page.title')}
      </Typography>

      <div className={styles.content}>
        {list ? (
          list.map((forum) => (
            <div className={styles.card} key={forum.id}>
              <Flex className={styles.cardContent}>
                <div className={styles.cardAvatar}>
                  {forum.image && (
                    <img src={forum.image.image} alt={forum.name} />
                  )}
                </div>

                <div className={styles.cardMain}>
                  <Typography size="xl s:2xl" weight="semibold">
                    {forum.name}
                  </Typography>
                  <Typography
                    margin="8px 0 16px"
                    size="m s:l"
                    view="secondary"
                    lineHeight="s"
                  >
                    {forum.description}
                  </Typography>
                  <Link to={`/forum/${forum.id}`}>
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
                        {forum.topics_count}
                      </Typography>
                    </div>
                    <div className={styles.cardStatsCol}>
                      <Typography size="xs" view="ghost" lineHeight="m">
                        {t('forum.page.members')}
                      </Typography>
                      <div className={styles.cardMembers}>
                        <Members members={forum.members} />
                      </div>
                    </div>
                    <div className={styles.cardStatsCol}>
                      <Typography size="xs" view="ghost" lineHeight="m">
                        {t('forum.page.activity')}
                      </Typography>
                      <Typography margin="11px 0 0" size="s" lineHeight="m">
                        {timeToTimeStamp(forum.last_activity_date)}
                      </Typography>
                    </div>
                  </Flex>

                  <div className={styles.cardLast}>
                    {forum.last_answer ? (
                      <>
                        <Typography size="xs" view="ghost" lineHeight="m">
                          {t('forum.page.lastMessage.label')}
                        </Typography>
                        <Flex align="center" margin="12px 0 0">
                          <div className={styles.cardLastAvatar}>
                            <Avatar
                              size="xs"
                              url={forum.last_answer.author_avatar || ''}
                              // name="x.last_message.name"
                            />
                          </div>
                          <Typography
                            margin="0 0 0 8px"
                            size="s"
                            lineHeight="m"
                            className={styles.cardLastContent}
                          >
                            {forum.last_answer.text}
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
