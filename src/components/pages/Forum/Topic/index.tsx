import React, { FC, useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';

import ForumList from './ForumList';
import FilterForums from './FilterForums';
import CreateModal from './CreateModal';
import useStyles from './styles';

const ForumTopicPage: FC = () => {
  const styles = useStyles();
  const { topic } = useParams<{ topic: string }>();
  const { t } = useTranslation();

  useEffect(() => {
    console.log({ topic });
  }, [topic]);

  return (
    <div className={styles.root}>
      <Flex align="center" className={styles.head}>
        <Typography size="3xl" weight="semibold" lineHeight="m">
          {t('forum.page.title')}
        </Typography>
        <Flex align="center" className={styles.filters}>
          <FilterForums />
          <CreateModal />
        </Flex>
      </Flex>

      <div className={styles.content}>
        <div className={styles.content}>
          <ForumList />
        </div>
      </div>
    </div>
  );
};

export default ForumTopicPage;
