import React, { FC, useEffect, useState, useMemo, ReactElement } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@consta/uikit/Avatar';

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
                  size="2x m:s"
                  className={styles.cardUserTitle}
                >
                  {x.author.name}
                </Typography>
              </Flex>

              <div className={styles.cardMeta}>
                <Typography size="2x m:s" view="secondary">
                  {x.unread}
                </Typography>
              </div>

              <div className={styles.cardMeta}>
                <Typography size="2x m:s" view="secondary">
                  {x.views}
                </Typography>
              </div>

              <div className={styles.cardContent}>
                <Flex align="center" wrap="wrap" margin="8px 0 0">
                  <Typography size="2x m:s" view="secondary">
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
