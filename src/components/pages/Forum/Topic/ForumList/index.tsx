import React, { FC, useEffect, useState, useMemo, ReactElement } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@consta/uikit/Avatar';
import cns from 'classnames';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import ConstaIcons from 'assets/icons/ConstaIcons';

import useStyles from './styles';
import { list } from './mockData';

const ForumList: FC = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();
  const { t } = useTranslation();

  const topicID = useMemo(() => {
    const urlSplit = path.split('/');

    return urlSplit[urlSplit.length - 1];
  }, [path]);

  return (
    <div className={styles.root}>
      <Flex align="center" className={cns(styles.card, 'head')}>
        <div className={styles.cardTitle}>
          <Typography size="2xs m:xs" view="secondary">
            {t('forum.topic.head.topic')}
          </Typography>
        </div>

        <div className={styles.cardUser}>
          <Typography size="2xs m:xs" view="secondary">
            {t('forum.topic.head.author')}
          </Typography>
        </div>
        <div className={styles.cardUnread}>
          <Typography size="2xs m:xs" view="secondary">
            {t('forum.topic.head.answers')}
          </Typography>
        </div>
        <div className={styles.cardViews}>
          <Typography size="2xs m:xs" view="secondary">
            {t('forum.topic.head.views')}
          </Typography>
        </div>
        <div className={styles.cardDate}>
          <Typography size="2xs m:xs" view="secondary">
            {t('forum.topic.head.date')}
          </Typography>
        </div>
      </Flex>
      {list &&
        list.map(
          (x): ReactElement => (
            <Flex align="center" className={styles.card} key={x.id}>
              <div className={styles.cardTitle}>
                <Link to={`/forum/${topicID}/${x.id}`}>
                  <Typography size="s">{x.title}</Typography>
                </Link>
              </div>

              <Flex className={styles.cardUser}>
                <Avatar
                  size="s"
                  url={x.author.avatar || ''}
                  name={x.author.name}
                />
                <Typography
                  margin="0 0 0 6px"
                  size="xs m:s"
                  className={styles.cardUserTitle}
                >
                  {x.author.name}
                </Typography>
              </Flex>

              <div className={styles.cardUnread}>
                <Typography size="xs m:s" view="secondary">
                  {x.unread}
                </Typography>
              </div>

              <div className={styles.cardViews}>
                <Typography size="xs m:s" view="secondary">
                  {x.views}
                </Typography>
              </div>

              <div className={styles.cardDate}>
                <Flex align="center" wrap="wrap" margin="8px 0 0">
                  <Typography size="xs m:s" view="secondary">
                    {x.timestamp}
                  </Typography>
                </Flex>
              </div>
            </Flex>
          )
        )}
    </div>
  );
};

export default ForumList;
