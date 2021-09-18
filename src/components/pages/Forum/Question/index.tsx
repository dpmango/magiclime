/* eslint-disable react/no-danger */
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Loader } from '@consta/uikit/Loader';
import { RouteComponentProps } from 'react-router-dom';
import Typography from 'components/Common/Typography';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';
import { useTranslation } from 'react-i18next';

import useSharedStyles from 'assets/styles/Shared';
import { createAnswer, getQuestion } from '../../../../utils/api/routes/forum';
import { IAnswer, IQuestion } from '../types';
import CreateAnswer from './CreateAnswer';
import Stats from './Stats';
import Answers from './Answers';
import useStyles from './styles';

const Question: FC<RouteComponentProps<{ questionId: string }>> = ({
  match: {
    params: { questionId: id },
  },
}) => {
  const [question, setQuestion] = useState<IQuestion | null>(null);
  const [loading, setLoading] = useState(false);
  const [newAnswer, setNewAnswer] = useState<IAnswer | null>(null);
  const styles = useStyles();
  const sharedStyles = useSharedStyles({ wysiwyg: 'muted' });
  const { t } = useTranslation();

  useEffect(() => {
    setLoading(true);
    getQuestion(id)
      .then((res) => {
        setQuestion(res.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const addAnswer = useCallback(
    (text: string) => {
      createAnswer(id, text).then((res) => {
        setNewAnswer(res.data);
      });
    },
    [id]
  );

  if (loading || !question) return <Loader />;

  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <Typography view="brand" size="s" transform="uppercase">
          ЛИЧНЫЙ РОСТ
        </Typography>
        <Typography
          as="h1"
          margin="12px 0"
          size="3xl"
          lineHeight="m"
          weight="semibold"
          transform="uppercase"
        >
          {question.name}
        </Typography>
      </div>

      <Grid cols="1" breakpoints={{ l: { cols: 3 } }} gap="xl">
        <GridItem col="2">
          <div className={styles.content}>
            <div
              className={sharedStyles.wysiwyg}
              dangerouslySetInnerHTML={{ __html: question.description }}
            />
          </div>

          <div className={styles.answers}>
            <Answers id={id} newAnswer={newAnswer} />
          </div>
        </GridItem>

        <GridItem col="1">
          <div className={styles.stickySidebar}>
            <div className={styles.sidebar}>
              <Stats question={question} />
              <CreateAnswer addAnswer={addAnswer} />
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Question;
