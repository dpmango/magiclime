import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';

import useStyles from './styles';
import useRootStyles from '../styles';

const FeaturedEvent: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Flex margin="0 0 48px" align="stretch">
          <div>
            <img
              className={styles.banner}
              src="http://itd3.mycdn.me/image?id=903284457182&t=20&plc=MOBILE&tkn=*9rxsfuK2y4uAiBu_q9UfjJjZVn0"
              alt="Webinars banner"
            />
          </div>
          <Flex
            margin="0 0 0 48px"
            direction="column"
            align="center"
            justify="space-between"
          >
            <Typography size="xs" transform="uppercase" view="secondary">
              Мероприятие
            </Typography>
            <div>
              <Typography
                size="2xl"
                weight="semibold"
                margin="0 0 16px"
                align="center"
              >
                В Третьяковке открывается выставка немецкого и русского
                романтизма
              </Typography>
              <Typography size="s" view="secondary" align="center">
                В Новой Третьяковке открывается выставка немецкого и русского
                искусства Мечты о свободе.
              </Typography>
            </div>
            <Button label="Смотреть" form="round" view="primary" />
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default FeaturedEvent;
