import React, { FC, useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { formatPrice, blToRub, blToBtc } from 'utils/helpers/formatPrice';
import { RootState } from 'store/reducers/rootReducer';

import useStyles from './styles';

interface IProps {
  btcRate: number;
  inline?: boolean;
  showRate?: boolean;
}

const BalanceWidget: FC<IProps> = ({ btcRate, inline, showRate = true }) => {
  const styles = useStyles({ inline, showRate });
  const { t } = useTranslation();

  const { balance } = useSelector((state: RootState) => state.profile);

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
              {t('profile.balance.widget.coursePer')} {blToRub(1, btcRate)}
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
            {t('profile.balance.widget.title')}
          </Typography>
          <Flex align="baseline" wrap="wrap">
            <Typography view="brand" size="2xl" weight="semibold">
              {balance.bitlimes} BL
            </Typography>
            <Typography view="secondary" margin="0 0 0 4px" size="xs">
              {blToBtc(balance.bitlimes, btcRate)} mBtc
            </Typography>
          </Flex>
        </>
      )}
    </div>
  );
};

export default BalanceWidget;
