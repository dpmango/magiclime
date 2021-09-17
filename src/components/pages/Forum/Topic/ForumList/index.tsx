import { Loader } from '@consta/uikit/Loader';
import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@consta/uikit/Avatar';
import cns from 'classnames';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { timeToTimeStamp } from '../../../../../utils/helpers/formatDate';
import { ITopicListItem } from '../../types';

import useStyles from './styles';

interface IProps {
  data: ITopicListItem[];
  topicId: string;
  loading: boolean;
}

const ForumList: FC<IProps> = ({ data, topicId, loading }) => {
  const styles = useStyles();
  const { t } = useTranslation();
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
      {loading ? (
        <Loader />
      ) : (
        <>
          {data.length ? (
            data.map(
              (item): ReactElement => (
                <Flex align="center" className={styles.card} key={item.id}>
                  <div className={styles.cardTitle}>
                    <Link to={`/forum/${topicId}/${item.id}`}>
                      <Typography size="s">{item.name}</Typography>
                    </Link>
                  </div>

                  <Flex className={styles.cardUser}>
                    <Avatar
                      size="s"
                      url={item.creator.avatar || ''}
                      name={item.creator.name}
                    />
                    <Typography
                      margin="0 0 0 6px"
                      size="xs m:s"
                      className={styles.cardUserTitle}
                    >
                      {item.creator.name}
                    </Typography>
                  </Flex>

                  <div className={styles.cardUnread}>
                    <Typography size="xs m:s" view="secondary">
                      {item.answers_count}
                    </Typography>
                  </div>

                  <div className={styles.cardViews}>
                    <Typography size="xs m:s" view="secondary">
                      {item.views_count}
                    </Typography>
                  </div>

                  <div className={styles.cardDate}>
                    <Flex align="center" wrap="wrap" margin="8px 0 0">
                      <Typography size="xs m:s" view="secondary">
                        {item.last_activity_date &&
                          timeToTimeStamp(item.last_activity_date)}
                      </Typography>
                    </Flex>
                  </div>
                </Flex>
              )
            )
          ) : (
            <Flex justify="center">
              <Typography view="secondary" size="l" margin="20px 0 0">
                Не удалось ничего найти
              </Typography>
            </Flex>
          )}
        </>
      )}
    </div>
  );
};

export default ForumList;
