import React, { FC } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { useTranslation } from 'react-i18next';
import { timeToTimeStamp } from '../../../../../utils/helpers/formatDate';
import { IQuestion } from '../../types';

import useStyles from './styles';

const ForumDetailsStats: FC<{ question: IQuestion }> = ({ question }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <Typography size="l" weight="semibold">
          {t('forum.details.stats.author')}
        </Typography>
        <Flex margin="8px 0 0" align="center">
          <Avatar url={question.creator.avatar} className={styles.avatar} />
          <Typography
            margin="0 0 0 8px"
            size="l"
            lineHeight="s"
            className={styles.title}
          >
            {question.creator.name}
          </Typography>
        </Flex>
      </div>

      <div className={styles.group}>
        <Typography size="l" weight="semibold">
          {t('forum.details.stats.answers')}
        </Typography>
        <Typography margin="8px 0 0" size="l" lineHeight="m">
          {question.answers_count}
        </Typography>
      </div>

      <div className={styles.group}>
        <Typography size="l" weight="semibold">
          {t('forum.details.stats.created')}
        </Typography>
        <Typography margin="8px 0 0" size="l" lineHeight="m">
          {timeToTimeStamp(question.create_date)}
        </Typography>
      </div>
    </div>
  );
};

export default ForumDetailsStats;
