import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { IWebinar } from 'components/pages/WebinarsPage/types';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
// import { SkeletonBrick } from '@consta/uikit/Skeleton';
import icons from '../icons';
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
  getMore: () => void;
  hasMore?: boolean;
}

const WebinarsList: FC<IProps> = ({ items, hasMore = false, getMore }) => {
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

      {hasMore && (
        <Button
          label="Показать еще 20 вебинаров"
          view="secondary"
          onClick={getMore}
          className={styles.button}
          iconLeft={icons.RefreshIcon}
        />
      )}
    </div>
  );
};

export default WebinarsList;
