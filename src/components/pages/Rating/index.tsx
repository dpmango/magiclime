import React, { FC, useEffect, useState, useMemo } from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { useFirstRender } from 'hooks/useFirstRender';
import Typography from 'components/Common/Typography';

import { Grid, GridItem } from '@consta/uikit/Grid';
import { useTranslation } from 'react-i18next';

import UserList from './UserList';
import FilterList from './FilterList';

import { ITab } from './types';
import useStyles from './styles';

const RatingPage: FC = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();
  const history = useHistory();
  const firstRender = useFirstRender();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Typography size="3xl" weight="semibold" lineHeight="m">
        {t('rating.page.title')}
      </Typography>

      <Grid cols="4" gap="xl" className={styles.content}>
        <GridItem col="3">
          <UserList />
        </GridItem>
        <GridItem col="1">
          <FilterList />
        </GridItem>
      </Grid>
    </div>
  );
};

export default RatingPage;
