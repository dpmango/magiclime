import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';
import Members from 'components/Common/Members';
import { useTranslation } from 'react-i18next';

import useSharedStyles from 'assets/styles/Shared';
import Stats from './Stats';
import Answers from './Answers';
import useStyles from './styles';
import { wysiwygContent } from './mockData';

const ForumDetails: FC = () => {
  const styles = useStyles();
  const sharedStyles = useSharedStyles({ wysiwyg: 'muted' });
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Grid cols="3" gap="xl">
        <GridItem col="2">
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
            Сгорел на работе - как выйти из эмоционального выгорания?
          </Typography>

          <div className={styles.content}>
            <div
              className={sharedStyles.wysiwyg}
              dangerouslySetInnerHTML={{ __html: wysiwygContent }}
            />
          </div>

          <div className={styles.answers}>
            <Answers />
          </div>
        </GridItem>

        <GridItem col="1">
          <div className={styles.stickySidebar}>
            <Stats />

            <Button
              label={t('forum.details.cta')}
              width="full"
              size="l"
              onClick={(): void => alert('TODO')}
              className={styles.createBtn}
            />
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ForumDetails;
