import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core';
import { IWebinar } from 'components/pages/Webinars/types';
import { Grid, GridItem } from '@consta/uikit/Grid';
import WebinarCard from './WebinarCard';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
});

const List: FC<{ data: IWebinar[] }> = ({ data }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Grid cols="1" gap="xl" breakpoints={{ m: { cols: 2, gap: 'xl' } }}>
        {data.map((item) => (
          <GridItem col="1" key={item.id}>
            <WebinarCard item={item} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default memo(List, (prevProps, nextProps) => {
  return prevProps.data.length === nextProps.data.length;
});
