import React, { FC, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { Grid, GridItem } from '@consta/uikit/Grid';
import cns from 'classnames';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import { setAuth } from 'store/reducers/settings';
import { Gradient } from './stripeGradient';
import useStyles from './styles';
import useRootStyles from '../styles';

const Hero: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const gradient = new Gradient();

  useEffect(() => {
    // @ts-ignore
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.background}>
        <div className={styles.backgroundPosition}>
          <canvas className={styles.backgroundCanvas} id="gradient-canvas" />
        </div>
      </div>

      <div className={cns(rootStyles.container, styles.body)}>
        <Grid
          cols="1"
          breakpoints={{
            l: { cols: 3 },
          }}
          gap="xl"
          yAlign="top"
        >
          <GridItem col="2">
            <div className={styles.content}>
              <Typography
                size="2xl l:4xl"
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
                <Button
                  size="m"
                  form="round"
                  label={t('landing.hero.cta.signup')}
                  onClick={() =>
                    dispatch(setAuth({ opened: true, type: 'sign_up' }))
                  }
                />
                <Button
                  size="m"
                  view="clear"
                  label={t('landing.hero.cta.login')}
                  onClick={() =>
                    dispatch(setAuth({ opened: true, type: 'sign_in' }))
                  }
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
