import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { formatPrice, blToBtc } from 'utils/helpers/formatPrice';
import { RootState } from 'store/reducers/rootReducer';

import BalanceWidget from '../BalanceWidget';
import useStyles from './styles';

interface IProps {
  btcRate: number;
}

const MyBalance: FC<IProps> = ({ btcRate }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { balance } = useSelector((state: RootState) => state.profile);

  const cells = useMemo(() => {
    return [
      {
        label: t('profile.balance.my.available'),
        main: `${formatPrice(balance.available_for_withdrawal)} BL`,
        secondary: `${blToBtc(balance.available_for_withdrawal, btcRate)} mBtc`,
      },
      {
        label: t('profile.balance.my.earned'),
        main: `${formatPrice(balance.total_earned)} BL`,
        secondary: `${blToBtc(balance.total_earned, btcRate)} mBtc`,
      },
      {
        label: t('profile.balance.my.output'),
        main: `${formatPrice(balance.total_output)} BL`,
        secondary: `${blToBtc(balance.total_output, btcRate)} mBtc`,
      },
    ];
  }, [btcRate, balance]);

  return (
    <div className={styles.root}>
      <Grid
        cols="1"
        gap="xl"
        breakpoints={{ m: { cols: 4 } }}
        className={styles.options}
      >
        <GridItem col="1">
          <BalanceWidget showRate={false} btcRate={btcRate} />
        </GridItem>

        {cells &&
          cells.map((cell) => (
            <GridItem col="1" key={cell.label}>
              <div className={styles.option}>
                <Typography
                  view="secondary"
                  lineHeight="s"
                  size="l"
                  weight="semibold"
                  margin="0 0 8px"
                >
                  {cell.label}
                </Typography>
                <Flex align="baseline" wrap="wrap">
                  <Typography
                    margin="0 4px 0 0px"
                    view="brand"
                    size="2xl"
                    weight="semibold"
                  >
                    {cell.main}
                  </Typography>
                  <Typography view="secondary" size="xs">
                    {cell.secondary}
                  </Typography>
                </Flex>
              </div>
            </GridItem>
          ))}
      </Grid>
    </div>
  );
};

export default MyBalance;
