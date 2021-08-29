import React, { FC, useMemo } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';

import BalanceWidget from '../BalanceWidget';
import useStyles from './styles';

const MyBalance: FC = () => {
  const styles = useStyles();

  const cells = useMemo(() => {
    return [
      {
        label: 'Доступно для вывода',
        main: '567 BTL',
        secondary: '32 312,281 RUB',
      },
      {
        label: 'Всего заработано',
        main: '567 BTL',
        secondary: '32 312,281 RUB',
      },
      {
        label: 'Всего выведено',
        main: '567 BTL',
        secondary: '32 312,281 RUB',
      },
    ];
  }, []);

  return (
    <div className={styles.root}>
      <Grid
        cols="1"
        gap="xl"
        breakpoints={{ m: { cols: 4 } }}
        className={styles.options}
      >
        <GridItem col="1">
          <BalanceWidget />
        </GridItem>

        {cells &&
          cells.map((cell) => (
            <GridItem col="1">
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
