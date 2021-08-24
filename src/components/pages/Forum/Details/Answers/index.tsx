import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { useTranslation } from 'react-i18next';
import { IAnswer } from 'components/pages/Forum/types';
import useStyles from './styles';
import { mockAnswers } from './mockData';

const ForumDetailsAnswers: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Typography margin="0 0 24px" size="2xl" weight="semibold" lineHeight="m">
        {t('forum.details.answers.title')}
      </Typography>

      {mockAnswers.map((x: IAnswer) => (
        <div className={styles.box} key={x.id}>
          <Flex align="center" className={styles.boxAuthor}>
            <Avatar
              url={x.author.avatar ? x.author.avatar.image : undefined}
              name={x.author.name}
            />
            <Flex margin="0 0 0 8px" direction="column">
              <Typography size="m" lineHeight="xs">
                {x.author.name}
              </Typography>
              <Typography
                margin="2px 0 0"
                view="ghost"
                size="2xs"
                lineHeight="xs"
              >
                {x.timestamp}
              </Typography>
            </Flex>
          </Flex>
          <div className={styles.boxContent}>
            <Typography view="ghost" lineHeight="s">
              {x.content}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumDetailsAnswers;
