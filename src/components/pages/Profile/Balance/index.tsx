import React, { FC } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';

import BalanceWidget from './BalanceWidget';
import MyBalance from './MyBalance';
import BalanceRefill from './Refill';
import BalanceWidthdrawal from './Withdrawal';
import useStyles from './styles';

const Events: FC = () => {
  const styles = useStyles();

  return (
    <Flex direction="column" className={styles.root}>
      

      <div className={styles.balanceWidget}>
        <BalanceWidget />
      </div>
  <Typography margin="0 0 24px" weight="semibold" lineHeight="s" size="2xl">
          Операции с балансом
        </Typography>
      <Grid cols="1" gap="xl" breakpoints={{ m: { cols: 4 } }}>
        {/* <GridItem col="1">
          <div className={styles.box}>
            <MyBalance />
          </div>
        </GridItem> */}
        <GridItem col="3">
          <Grid cols="1" gap="xl" breakpoints={{ s: { cols: 2 } }}>
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
          </Grid>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Events;
