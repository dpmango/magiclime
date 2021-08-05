import React, { FC, useEffect, useState, useMemo } from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { useFirstRender } from 'hooks/useFirstRender';
import { Tabs } from '@consta/uikit/Tabs';
import { Grid, GridItem } from '@consta/uikit/Grid';
import {
  Head,
  ProgramList,
  Achivements,
  Events,
  Courses,
  Balance,
  BalanceHistory,
} from 'components/Profile';

import useStyles from './styles';
import {
  mockPrograms,
  mockAchivements,
  mockEvents,
  mockCourses,
} from './mockData';

interface ITab {
  id: number;
  slug: string;
  label: string;
}

const tabs: ITab[] = [
  { id: 1, slug: '/profile', label: 'Основное' },
  { id: 2, slug: '/profile/balance', label: 'Баланс' },
  { id: 3, slug: '/profile/referal', label: 'Рефералы' },
  { id: 4, slug: '/profile/settings', label: 'Настройки' },
];

const ProfilePage: FC = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();
  const history = useHistory();
  const firstRender = useFirstRender();

  const getTabWithRouter = useMemo((): ITab => {
    // path is not up to date at this point
    // because of nested Switch ?
    const cTab = tabs.find((x) => x.slug === window.location.pathname);

    return cTab || tabs[0];
  }, []);

  const [tab, setTab] = useState<ITab>(getTabWithRouter);

  useEffect(() => {
    if (!firstRender) {
      history.push(tab.slug);
    }
  }, [firstRender, tab]);

  return (
    <div className={styles.root}>
      <Head />

      <Tabs
        value={tab}
        onChange={({ value }) => setTab(value)}
        items={tabs}
        getLabel={(item) => item.label}
        size="m"
        className={styles.tabs}
      />

      <Switch>
        <Route
          exact
          path={path}
          render={() => (
            <>
              <div className={styles.section}>
                <ProgramList list={mockPrograms} />
              </div>
              <div className={styles.section}>
                <Grid
                  cols="1"
                  gap="xl"
                  breakpoints={{
                    m: {
                      cols: 2,
                    },
                  }}
                >
                  <GridItem>
                    <Achivements groups={mockAchivements} />
                  </GridItem>
                  <GridItem>
                    <Events list={mockEvents} />
                  </GridItem>
                </Grid>
              </div>
              <div className={styles.section}>
                <Courses list={mockCourses} />
              </div>
            </>
          )}
        />
        <Route
          path={`${path}/balance`}
          render={() => (
            <>
              <div className={styles.section}>
                <Balance />
              </div>
              <div className={styles.section}>
                <BalanceHistory />
              </div>
            </>
          )}
        />
      </Switch>
    </div>
  );
};

export default ProfilePage;