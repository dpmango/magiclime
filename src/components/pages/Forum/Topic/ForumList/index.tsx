import React, { FC, useEffect, useState, useMemo, ReactElement } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@consta/uikit/Avatar';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import ConstaIcons from 'assets/icons/ConstaIcons';

import useStyles from './styles';
import { list } from './mockData';

interface IProps {
  sort?: string;
}

const ForumList: FC<IProps> = ({ sort }) => {
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
            <Flex className={styles.card} key={x.id}>
              <div className={styles.cardAvatar}>
                <Avatar url={x.author.avatar || ''} name={x.author.name} />
              </div>
              <div className={styles.cardContent}>
                <Link to={`/forum/${topicID}/${x.id}`}>
                  <Typography size="l m:xl" weight="semibold">
                    {x.title}
                  </Typography>
                </Link>

                <Flex align="center" wrap="wrap" margin="8px 0 0">
                  <Typography size="s m:m" view="ghost">
                    {x.timestamp}
                  </Typography>

                  <Typography margin="0 0 0 12px" size="s m:m" view="ghost">
                    {t('forum.card.from')} {x.author.name}
                  </Typography>
                </Flex>
              </div>
              <div className={styles.cardMeta}>
                <Flex align="baseline">
                  <ConstaIcons.Comment size="m" view="ghost" />
                  <Typography margin="0 0 0 6px" size="m" view="ghost">
                    {x.unread}
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
