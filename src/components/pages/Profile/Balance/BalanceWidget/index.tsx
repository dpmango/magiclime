import React, { FC } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';

import useStyles from './styles';

const MyBalance: FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Flex align="center">
        <div className={styles.coinIcon}>
          <img src="/images/bitcoin.png" alt="btc" />
        </div>
        <div className={styles.coinContent}>
          <Typography className={styles.coinTitle16} view="brand" size="s">
            BTL/RUB
          </Typography>
          <Typography view="secondary" margin="2px 0 0" size="xs">
            Курс 1 к 37 291
          </Typography>
        </div>
      </Flex>
      <Typography className={styles.coinBalance}  margin="12px 0" lineHeight="2xs" weight="semibold">
        Баланс:
      </Typography>
      <Flex align="baseline" wrap="wrap">
        <Typography view="brand" size="xl" weight="semibold">
          232 BTL
        </Typography>
        <Typography view="secondary" margin="0 0 0 6px" size="xs">
          32 312,281 RUB
        </Typography>
      </Flex>
    </div>
  );
};

export default MyBalance;
