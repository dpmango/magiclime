import React, { FC, useState, useCallback, useEffect } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';

import { getBitcoinService } from 'utils/api/routes/bitcoin';
import MyBalance from './MyBalance';
import BalanceRefill from './Refill';
import BalanceWidthdrawal from './Withdrawal';
import BalanceTransfer from './Transfer';
import useStyles from './styles';

const Balance: FC = () => {
  const styles = useStyles();

  const [btcRate, setBtcRate] = useState<number>(0);

  const fetchPrice = useCallback(async () => {
    const [err, data] = await getBitcoinService();

    if (err) {
      console.log({ err });
    }

    setBtcRate(data!.price);
  }, []);

  useEffect(() => {
    fetchPrice();
  }, []);

  return (
    <Flex direction="column" className={styles.root}>
      <MyBalance btcRate={btcRate} />

      <Typography margin="0 0 24px" weight="semibold" lineHeight="s" size="2xl">
        Операции с балансом
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
