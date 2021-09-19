import React, { FC, useEffect, useState, useMemo } from 'react';
import {
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Tabs } from '@consta/uikit/Tabs';

import Flex from 'components/Common/Flex';
import Pagination from 'components/Common/Pagination';
import { useFirstRender } from 'hooks/useFirstRender';
import {
  getBalanceHistoryService,
  getBonuseHistoryService,
} from 'utils/api/routes/payment';
import { getMatricesHistoryService } from 'utils/api/routes/referrals';
import { ITab } from 'types/interfaces/common';

import HistoryOperations from './HistoryOperations';
import HistoryBalance from './HistoryBalance';
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
        label: t('profile.history.tabs.operations'),
      },
      {
        id: 2,
        slug: `/profile/${params.id}/history/finance`,
        label: t('profile.history.tabs.finance'),
      },
      {
        id: 3,
        slug: `/profile/${params.id}/history/bonuses`,
        label: t('profile.history.tabs.bonuses'),
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
            <Pagination
              getList={getMatricesHistoryService}
              listComponent={HistoryOperations}
              queries={{ search: '' }}
            />
          )}
        />
        <Route
          path={`${path}/finance`}
          render={() => (
            <Pagination
              getList={getBalanceHistoryService}
              listComponent={HistoryBalance}
              queries={{ search: '' }}
            />
          )}
        />

        <Route
          path={`${path}/bonuses`}
          render={() => (
            <Pagination
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
