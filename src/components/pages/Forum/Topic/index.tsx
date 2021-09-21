import { Loader } from '@consta/uikit/Loader';
import { TextField } from '@consta/uikit/TextField';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { getForumTopic, getForumTopicList } from 'utils/api/routes/forum';
import ConstaIcons from '../../../../assets/icons/ConstaIcons';
import { useDebounce } from '../../../../hooks/useDebounce';
import { ITopic, ITopicListItem } from '../types';

import ForumList from './ForumList';
import CreateModal from './CreateModal';
import useStyles from './styles';

const ForumTopicPage: FC<RouteComponentProps<{ topicId: string }>> = ({
  match: {
    params: { topicId },
  },
}) => {
  const [topic, setTopic] = useState<ITopic>({} as ITopic);
  const [questions, setQuestions] = useState<ITopicListItem[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const styles = useStyles();
  const { t } = useTranslation();

  const debouncedSearch = useDebounce(search, 250);

  useEffect(() => {
    const fetchTopic = async (id: string): Promise<ITopic> => {
      const [err, data] = await getForumTopic(id);

      if (err) {
        toast.error('Error loading topic. Please try again');
        return {} as ITopic;
      }
      return data;
    };
    fetchTopic(topicId).then((data) => {
      setTopic(data);
    });
  }, [topicId]);

  useEffect(() => {
    setLoading(true);
    getForumTopicList(topicId, search)
      .then((res) => {
        setQuestions(res.data.results);
      })
      .finally(() => setLoading(false));
  }, [debouncedSearch]);

  const addTopic = useCallback(
    (newTopic: ITopicListItem) => {
      setQuestions((prev) => [newTopic, ...prev]);
    },
    [topic]
  );

  if (!topic.id) return <Loader />;

  return (
    <div className={styles.root}>
      <Flex align="center" className={styles.head}>
        <Typography size="3xl" weight="semibold" lineHeight="m">
          {topic.name}
        </Typography>
        <Flex align="center" className={styles.filters}>
          <TextField
            placeholder={t('forum.filter.searchPlaceholder')}
            name="search"
            rightSide={ConstaIcons.Search}
            value={search}
            onChange={({ value }) => setSearch(value || '')}
          />
          <CreateModal topicId={topicId} addTopic={addTopic} />
        </Flex>
      </Flex>

      <div className={styles.content}>
        <div className={styles.content}>
          <ForumList data={questions} topicId={topicId} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default ForumTopicPage;
