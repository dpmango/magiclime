import React, { FC, useEffect, useState, memo } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { useTranslation } from 'react-i18next';
import { IAnswer } from 'components/pages/Forum/types';
import { getAnswers } from '../../../../../utils/api/routes/forum';
import { timeToTimeStamp } from '../../../../../utils/helpers/formatDate';
import useStyles from './styles';

interface IProps {
  id: string;
  newAnswer: IAnswer | null;
}

const ForumDetailsAnswers: FC<IProps> = ({ id, newAnswer }) => {
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const styles = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    getAnswers(id).then((res) => {
      setAnswers(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (newAnswer) {
      setAnswers((prev) => [...prev, newAnswer]);
    }
  }, [newAnswer]);

  return (
    <div className={styles.root}>
      <Typography margin="0 0 24px" size="2xl" weight="semibold" lineHeight="m">
        {t('forum.details.answers.title')}
      </Typography>

      {answers.length === 0 && (
        <Typography margin="0 0 16px" size="l" view="secondary" align="center">
          Ответов пока нет.
        </Typography>
      )}

      {answers.map((answer: IAnswer) => (
        <div className={styles.box} key={answer.id}>
          <Flex align="center" className={styles.boxAuthor}>
            <Avatar url={answer.author.avatar} name={answer.author.name} />
            <Flex margin="0 0 0 8px" direction="column">
              <Typography size="m" lineHeight="xs">
                {answer.author.name}
              </Typography>
              <Typography
                margin="2px 0 0"
                view="ghost"
                size="2xs"
                lineHeight="xs"
              >
                {timeToTimeStamp(answer.create_date)}
              </Typography>
            </Flex>
          </Flex>
          <div className={styles.boxContent}>
            <Typography view="ghost" lineHeight="s">
              {answer.text}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ForumDetailsAnswers);
