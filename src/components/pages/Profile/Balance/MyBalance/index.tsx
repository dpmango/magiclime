import React, { FC, useMemo } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';

import { blToBtc } from 'utils/helpers/formatPrice';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';

import BalanceWidget from '../BalanceWidget';
import useStyles from './styles';

interface IProps {
  btcRate: number;
}

const MyBalance: FC<IProps> = ({ btcRate }) => {
  const styles = useStyles();

  const cells = useMemo(() => {
    return [
      {
        label: 'Доступно для вывода',
        main: '232 BL',
        secondary: `${blToBtc(232, btcRate)} mBtc`,
      },
      {
        label: 'Всего заработано',
        main: '232 BL',
        secondary: `${blToBtc(232, btcRate)} mBtc`,
      },
      {
        label: 'Всего выведено',
        main: '232 BL',
        secondary: `${blToBtc(232, btcRate)} mBtc`,
      },
    ];
  }, [btcRate]);

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
                <Flex align="baseline">
                  <Typography view="brand" size="2xl" weight="semibold">
                    {cell.main}
                  </Typography>
                  <Typography margin="0 0 0 4px" view="secondary" size="xs">
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
