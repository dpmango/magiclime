import React, { FC, useEffect, useState, useMemo } from 'react';
import {
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { useFirstRender } from 'hooks/useFirstRender';
import Typography from 'components/Common/Typography';
import { Tabs } from '@consta/uikit/Tabs';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { useTranslation } from 'react-i18next';

import ForumList from './ForumList';
import FilterForums from './FilterForums';
import CreateModal from './CreateModal';

import { ITab } from '../types';
import useStyles from './styles';

const ForumTopicPage: FC = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();
  const { topic } = useParams();
  const history = useHistory();
  const firstRender = useFirstRender();
  const { t } = useTranslation();

  const tabs: ITab[] = [
    { id: 1, slug: `/forum/${topic}`, label: t('forum.tabs.popular') },
    { id: 2, slug: `/forum/${topic}/new`, label: t('forum.tabs.new') },
  ];

  const getTabWithRouter = useMemo((): ITab => {
    if (window.location.pathname.split('/').length > 2) {
      const cTab = tabs
        .slice(1, tabs.length)
        .find((x) => window.location.pathname.includes(x.slug));

      return cTab || tabs[0];
    }

    return tabs[0];
  }, []);

  const [tab, setTab] = useState<ITab>(getTabWithRouter);

  useEffect(() => {
    if (!firstRender) {
      history.push(tab.slug);
    }
  }, [tab]);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Tabs
          value={tab}
          onChange={({ value }) => setTab(value)}
          items={tabs}
          getLabel={(item) => item.label}
          size="m"
          className={styles.tabs}
        />

        <Grid cols="4" gap="xl" className={styles.content}>
          <GridItem col="3">
            <Switch>
              <Route
                path={`/forum/${topic}`}
                render={() => <ForumList sort="popular" />}
              />
              <Route
                path={`/forum/${topic}/new`}
                render={() => <ForumList sort="new" />}
              />
            </Switch>
          </GridItem>
          <GridItem col="1">
            <FilterForums />
            <CreateModal />
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default ForumTopicPage;
