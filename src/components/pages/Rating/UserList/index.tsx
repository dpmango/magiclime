import React, { FC, useMemo, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';

import { IUserRating } from 'types/interfaces/rating';

import UserRatingCard from './UserCard';
import useStyles from './styles';
import { list } from './mockData';

const RatingList: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  // todo - sorting should be backed based
  const listSorted = useMemo(() => {
    if (list && list.length) {
      return list.sort((a, b) => a.rank - b.rank);
    }

    return [];
  }, [list]);

  return (
    <div className={styles.root}>
      <Grid
        cols="1"
        gap="xl"
        breakpoints={{ m: { cols: 3 } }}
        className={styles.leaders}
      >
        {listSorted &&
          listSorted.slice(0, 3).map((x: IUserRating) => (
            <GridItem col="1" key={x.id}>
              <UserRatingCard data={x} view="featured" />
            </GridItem>
          ))}
      </Grid>

      {listSorted &&
        listSorted
          .slice(3, listSorted.length)
          .map((x: IUserRating) => (
            <UserRatingCard key={x.id} data={x} view="default" />
          ))}
    </div>
  );
};

export default RatingList;
