import React, { FC, useMemo, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';

import { IUserRating } from 'components/pages/Rating/types';

import UserRatingCard from './UserCard';
import useStyles from './styles';
import { list } from './mockData';

const RatingList: FC<{ rating: IUserRating[] }> = ({ rating }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Grid
        cols="1"
        gap="xl"
        breakpoints={{ m: { cols: 3 } }}
        className={styles.leaders}
      >
        {rating.slice(0, 3).map((item, index) => (
          <GridItem col="1" key={item.id}>
            <UserRatingCard data={item} view="featured" />
          </GridItem>
        ))}
      </Grid>

      {rating.length > 3 &&
        rating
          .slice(3)
          .map((item, index) => (
            <UserRatingCard key={item.id} data={item} view="default" />
          ))}
    </div>
  );
};

export default RatingList;
