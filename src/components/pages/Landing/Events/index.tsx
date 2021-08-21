import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import cns from 'classnames';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';

import useStyles from './styles';
import useRootStyles from '../styles';

const Events: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography size="3xl" weight="semibold">
          {t('landing.events.title')}
        </Typography>

        <Grid gap="xl" className={styles.card}>
          <GridItem className={styles.event}>
            <div className={styles.cardContent}>
              <Typography view="ghost" margin="0 0 12px" size="l">
                Finance
              </Typography>
              <Typography size="2xl m:3xl" lineHeight="m" weight="semibold">
                СБЕР АРТМаркет
              </Typography>
              <Typography
                size="s m:l"
                margin="16px 0 0"
                className={styles.cardDescription}
              >
                The unique platform that combines strong technology with
                intricate operational abilities. Complex marketplace with all
                the necessary products for tourists: tickets, tours,
                accommodation, and transfers.
              </Typography>

              <div className={styles.eventCta}>
                <Link to="/event/1">
                  <Typography view="link">{t('landing.events.cta')}</Typography>
                </Link>
              </div>
            </div>
          </GridItem>
          <GridItem className={styles.cardGridImage}>
            <div className={styles.image} />
          </GridItem>
        </Grid>

        {/* next card */}

        <Grid gap="xl" className={cns(styles.card, 'reverse')}>
          <GridItem className={styles.cardGridImage}>
            <div className={styles.image} />
          </GridItem>
          <GridItem className={styles.event}>
            <div className={styles.cardContent}>
              <Typography view="ghost" margin="0 0 12px" size="l">
                Finance
              </Typography>
              <Typography size="2xl m:3xl" lineHeight="m" weight="semibold">
                СБЕР АРТМаркет
              </Typography>
              <Typography
                size="s m:l"
                margin="16px 0 0"
                className={styles.cardDescription}
              >
                The unique platform that combines strong technology with
                intricate operational abilities. Complex marketplace with all
                the necessary products for tourists: tickets, tours,
                accommodation, and transfers.
              </Typography>

              <div className={styles.eventCta}>
                <Link to="/event/1">
                  <Typography view="link">{t('landing.events.cta')}</Typography>
                </Link>
              </div>
            </div>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default Events;
