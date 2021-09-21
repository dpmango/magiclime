import React, { FC, useEffect, useState, useMemo } from 'react';
import {
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';

import Pagination from 'components/Common/Pagination';
import { useFirstRender } from 'hooks/useFirstRender';
import { getBonuseHistoryService } from 'utils/api/routes/payment';
import { getMatricesHistoryService } from 'utils/api/routes/referrals';
import { ITab } from 'types/interfaces/common';

import HistoryOperations from './HistoryOperations';
import HistoryBonuses from './HistoryBonuses';
import useStyles from './styles';

const ProfileHistory: FC = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();
  const params: { id: string } = useParams();
  const history = useHistory();
  const firstRender = useFirstRender();
  const { t } = useTranslation();

  // tabs
  const tabs: ITab[] = useMemo(() => {
    return [
      {
        id: 1,
        slug: `/profile/${params.id}/history`,
        label: t('profile.history.tabs.bonuses'),
      },
      {
        id: 2,
        slug: `/profile/${params.id}/history/operations`,
        label: t('profile.history.tabs.operations'),
      },
    ];
  }, []);

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

  // effects
  useEffect(() => {
    if (!firstRender) {
      history.push(tab.slug);
    }
  }, [tab]);

  return (
    <div>
      <ChoiceGroup
        value={tab}
        onChange={({ value }) => setTab(value)}
        items={tabs}
        getLabel={(item) => item.label}
        size="m"
        multiple={false}
        className={styles.tabs}
        name="historyChoicegroup"
      />

      <Switch>
        <Route
          exact
          path={`${path}/operations`}
          render={() => (
            <Pagination
              key="h1"
              getList={getMatricesHistoryService}
              listComponent={HistoryOperations}
              queries={{ search: '' }}
            />
          )}
        />

        <Route
          path={path}
          render={() => (
            <Pagination
              key="h2"
              getList={getBonuseHistoryService}
              listComponent={HistoryBonuses}
              queries={{ search: '' }}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default ProfileHistory;
