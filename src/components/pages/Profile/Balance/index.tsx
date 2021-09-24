import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { RootState } from 'store/reducers/rootReducer';

import MyBalance from './MyBalance';
import BalanceRefill from './Refill';
import BalanceWidthdrawal from './Withdrawal';
import BalanceTransfer from './Transfer';
import useStyles from './styles';

const Balance: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const rates = useSelector((state: RootState) => state.meta.rates);

  return (
    <Flex direction="column" className={styles.root}>
      <MyBalance btcRate={rates.price} />

      <Typography margin="0 0 24px" weight="semibold" lineHeight="s" size="2xl">
        {t('profile.balance.title')}
      </Typography>

      <Grid cols="1" gap="xl" breakpoints={{ s: { cols: 2 }, m: { cols: 3 } }}>
        <GridItem col="1">
          <div className={styles.box}>
            <BalanceRefill />
          </div>
        </GridItem>
        <GridItem col="1">
          <div className={styles.box}>
            <BalanceWidthdrawal />
          </div>
        </GridItem>
        <GridItem col="1">
          <div className={styles.box}>
            <BalanceTransfer />
          </div>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Balance;
