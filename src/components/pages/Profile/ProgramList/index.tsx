import React, { FC, useEffect, useState } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';

import ProgramCard from 'components/pages/Profile/ProgramCard';
import { IProgram } from 'components/pages/Profile/types';
import { getProgramsList } from '../../../../utils/api/routes/profile';
import useStyles from './styles';

const ProgramList: FC = () => {
  const [programs, setPrograms] = useState<IProgram[]>([]);
  const styles = useStyles();

  useEffect(() => {
    getProgramsList().then((res) => {
      setPrograms(res.data);
    });
  }, []);

  return (
    <div className={styles.root}>
      {/* <Typography weight="semibold" lineHeight="s" size="2xl"> */}
      {/*  Мои программы */}
      {/* </Typography> */}
      <Grid
        cols="1"
        gap="l"
        breakpoints={{ s: { cols: 2 }, m: { cols: 3 }, l: { cols: 4 } }}
        className={styles.grid}
      >
        {programs.map((item) => (
          <GridItem key={item.program}>
            <ProgramCard data={item} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default ProgramList;
