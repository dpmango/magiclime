import React, { FC, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { useTranslation } from 'react-i18next';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';

import useStyles from './styles';

const Apps: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.apps}>
      <Grid gap="2xl" className={styles.mainGrid}>
        <div />
        <div>
          <Typography size="m" margin="0 0 12px">
            {t('landing.footer.apps')}
          </Typography>

          <Flex align="center">
            <a
              href="http://apple.com"
              target="_blank"
              rel="noreferrer"
              className={styles.appLink}
            >
              <img
                src="/images/app-store.png"
                srcSet="/images/app-store@2x.png 2x"
                alt="app store"
              />
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noreferrer"
              className={styles.appLink}
            >
              <img
                src="/images/google-play.png"
                srcSet="/images/google-play@2x.png 2x"
                alt="app store"
              />
            </a>
          </Flex>
        </div>
      </Grid>
    </div>
  );
};

export default Apps;
