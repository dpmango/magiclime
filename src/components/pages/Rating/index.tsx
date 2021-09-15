import React, { FC, useEffect, useState } from 'react';
import Typography from 'components/Common/Typography';

import { Grid, GridItem } from '@consta/uikit/Grid';
import { useTranslation } from 'react-i18next';
import { getRating } from '../../../utils/api/routes/rating';
import { IUserRating } from './types';

import UserList from './UserList';
import FilterList from './FilterList';
import useStyles from './styles';

const RatingPage: FC = () => {
  const [usersRating, setUsersRating] = useState<IUserRating[]>([]);
  const [filters, setFilters] = useState({
    username: '',
    league: [] as number[],
  });
  const styles = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    getRating(filters.username).then((res) => {
      setUsersRating(res.data.results);
    });
  }, [filters]);

  return (
    <div className={styles.root}>
      <Typography size="3xl" weight="semibold" lineHeight="m">
        {t('rating.page.title')}
      </Typography>

      <Grid cols="4" gap="xl" className={styles.content}>
        <GridItem col="3">
          <UserList rating={usersRating} />
        </GridItem>
        <GridItem col="1">
          <FilterList setFilters={setFilters} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default RatingPage;
