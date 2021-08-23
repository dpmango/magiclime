import React, { FC, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';

import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import useRootStyles from '../styles';

const Hero: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Grid
          cols="1"
          breakpoints={{
            l: {
              cols: 3,
            },
          }}
          gap="xl"
          yAlign="center"
        >
          <GridItem col="2">
            <div className={styles.content}>
              <Typography
                size="4xl"
                weight="semibold"
                lineHeight="m"
                className={styles.title}
              >
                {t('landing.hero.title')}
              </Typography>
              <Typography
                margin="12px 0 16px"
                size="xl"
                lineHeight="l"
                className={styles.blockquote}
              >
                {t('landing.hero.text')}
              </Typography>
              <Flex wrap="wrap" className={styles.cta}>
                <Button size="l" label={t('landing.hero.cta.login')} />
                <Button
                  size="l"
                  view="secondary"
                  label={t('landing.hero.cta.more')}
                />
              </Flex>
            </div>
          </GridItem>
          <GridItem col="1">
            <div className={styles.panel}>
              <div className={styles.frame} />
            </div>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
