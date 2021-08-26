/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */
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
          Сгорел на работе - как выйти из эмоционального выгорания?
        </Typography>
      </div>

      <Grid cols="1" breakpoints={{ l: { cols: 3 } }} gap="xl">
        <GridItem col="2">
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
            <div className={styles.sidebar}>
              <Stats />

              <Button
                label={t('forum.details.cta')}
                width="full"
                size="l"
                onClick={() => {}}
                className={styles.createBtn}
              />
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ForumDetails;
