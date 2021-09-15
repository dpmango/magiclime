import { Loader } from '@consta/uikit/Loader';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { getForumTopic } from 'utils/api/routes/forum';
import { ITopic, ITopicListItem } from '../types';

import ForumList from './ForumList';
import FilterForums from './FilterForums';
import CreateModal from './CreateModal';
import useStyles from './styles';

const ForumTopicPage: FC<RouteComponentProps<{ topicId: string }>> = ({
  match: {
    params: { topicId },
  },
}) => {
  const [topic, setTopic] = useState<ITopic>({} as ITopic);
  const [loading, setLoading] = useState(false);
  const styles = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchTopic = async (id: string): Promise<ITopic> => {
      const [err, data] = await getForumTopic(id);

      if (err) {
        toast('Error loading topic. Please try again');
        return {} as ITopic;
      }
      return data;
    };
    setLoading(true);
    fetchTopic(topicId)
      .then((data) => {
        setTopic(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [topicId]);

  const addTopic = useCallback(
    (newTopic: ITopicListItem) => {
      setTopic((prev) => ({ ...prev, topics: [...prev.topics, newTopic] }));
    },
    [topic]
  );

  if (loading || !topic.id) return <Loader />;

  return (
    <div className={styles.root}>
      <Flex align="center" className={styles.head}>
        <Typography size="3xl" weight="semibold" lineHeight="m">
          {topic.name}
        </Typography>
        <Flex align="center" className={styles.filters}>
          <FilterForums />
          <CreateModal topicId={topicId} addTopic={addTopic} />
        </Flex>
      </Flex>

      <div className={styles.content}>
        <div className={styles.content}>
          <ForumList data={topic.topics} topicId={topicId} />
        </div>
      </div>
    </div>
  );
};

export default ForumTopicPage;
