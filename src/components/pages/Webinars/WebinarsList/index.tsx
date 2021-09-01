import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { IWebinar } from 'components/pages/Webinars/types';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import { IPaginationButtonProps } from '../../../../hooks/usePagination';
import Webinar from './Webinar';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  button: {
    margin: '40px auto 0',
    display: 'flex',
  },
});

interface IProps {
  items: IWebinar[];
  button: FC<IPaginationButtonProps>;
}

const WebinarsList: FC<IProps> = ({ items, button: Button }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Grid cols="1" gap="xl" breakpoints={{ m: { cols: 2, gap: 'xl' } }}>
        {items.map((item) => (
          <GridItem col="1" key={item.id}>
            <Webinar item={item} />
            {/* <SkeletonBrick height={180} /> */}
          </GridItem>
        ))}
      </Grid>

      <Button buttonClassName={styles.button} />
    </div>
  );
};

export default WebinarsList;
