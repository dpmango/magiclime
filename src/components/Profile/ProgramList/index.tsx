import React, { FC } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';

import { ProgramCard } from 'components/Profile';
import { IProgram } from 'components/pages/ProfilePage/types';
import useStyles from './styles';

interface IProps {
  list: IProgram[];
}

const ProgramList: FC<IProps> = ({ list }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {/* <Typography weight="semibold" lineHeight="s" size="2xl">
        Мои программы
      </Typography> */}
      <Grid
        cols="1"
        gap="l"
        breakpoints={{ s: { cols: 2 }, m: { cols: 3 }, l: { cols: 4 } }}
        className={styles.grid}
      >
        {list &&
          list.map((x) => (
            <GridItem key={x.id}>
              <ProgramCard data={x} />
            </GridItem>
          ))}
      </Grid>
    </div>
  );
};

export default ProgramList;
