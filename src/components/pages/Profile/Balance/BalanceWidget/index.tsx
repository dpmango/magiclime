import React, { FC, useState, useCallback, useEffect } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { formatPrice, blToRub, blToBtc } from 'utils/helpers/formatPrice';

import useStyles from './styles';

interface IProps {
  btcRate: number;
  inline?: boolean;
  showRate?: boolean;
}

const BalanceWidget: FC<IProps> = ({ btcRate, inline, showRate = true }) => {
  const styles = useStyles({ inline, showRate });

  return (
    <div className={styles.root}>
      {showRate && (
        <Flex align="center">
          <div className={styles.coinIcon}>
            <img src="/images/bitcoin.png" alt="btc" />
          </div>
          <div className={styles.coinContent}>
            <Typography className={styles.coinTitle16} view="brand" size="s">
              BL/RUB
            </Typography>
            <Typography view="secondary" margin="2px 0 0" size="xs">
              Курс 1 к {blToRub(1, btcRate)}
            </Typography>
          </div>
        </Flex>
      )}
      {!inline && (
        <>
          <Typography
            className={styles.coinBalance}
            margin="8px 0 2px"
            lineHeight="2xs"
            size="s"
            weight="semibold"
          >
            Баланс:
          </Typography>
          <Flex align="baseline" wrap="wrap">
            <Typography view="brand" size="2xl" weight="semibold">
              232 BL
            </Typography>
            <Typography view="secondary" margin="0 0 0 4px" size="xs">
              {blToBtc(232, btcRate)} mBtc
            </Typography>
          </Flex>
        </>
      )}
    </div>
  );
};

export default BalanceWidget;
