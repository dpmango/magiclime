import React, { FC, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  useParams,
  useLocation,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Tabs } from '@consta/uikit/Tabs';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { getForeignProfile, getProfile } from 'store/reducers/user';

import Typography from 'components/Common/Typography';
import Pagination from 'components/Common/Pagination';
import { useFirstRender } from 'hooks/useFirstRender';
import { RootState } from 'store/reducers/rootReducer';
import { getMatricesHistoryService } from 'utils/api/routes/referrals';
import { IUser } from 'types/interfaces/user';
import { ITab } from 'types/interfaces/common';

import Head from './Head';
import ProgramList from './ProgramList';
import Achievements from './Achievements';
import Events from './Events';
import Courses from './Courses';
import Balance from './Balance';
import History from './History';
import HistoryOperations from './History/HistoryOperations';
import Applications from './Applications';
import ReferralStats from './ReferralStats';
import ReferralPartners from './ReferralPartners';
import ReferralTeam from './ReferralTeam';
import Settings from './Settings';
import useStyles from './styles';

const ProfilePage: FC = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const firstRender = useFirstRender();
  const { t } = useTranslation();

  const profile = useSelector((state: RootState) => state.user.profile);
  const foreignProfile = useSelector(
    (state: RootState) => state.user.foreignProfile
  );

  // getting profile
  const isMyProfile = useMemo(() => {
    return params.id === 'me';
  }, [params.id]);

  const viewingProfile: IUser = useMemo(() => {
    return isMyProfile ? profile : foreignProfile;
  }, [profile, foreignProfile, isMyProfile]);

  // tabs
  const tabs: ITab[] = useMemo(() => {
    if (isMyProfile) {
      return [
        { id: 1, slug: `/profile/${params.id}`, label: t('profile.tabs.main') },
        {
          id: 2,
          slug: `/profile/${params.id}/balance`,
          label: t('profile.tabs.balance'),
        },
        {
          id: 3,
          slug: `/profile/${params.id}/partners`,
          label: t('profile.tabs.partners'),
        },
        {
          id: 4,
          slug: `/profile/${params.id}/referrals`,
          label: t('profile.tabs.referrals'),
        },
        {
          id: 5,
          slug: `/profile/${params.id}/history`,
          label: t('profile.tabs.history'),
        },
        {
          id: 6,
          slug: `/profile/${params.id}/applications`,
          label: t('profile.tabs.applications'),
        },
        {
          id: 7,
          slug: `/profile/${params.id}/settings`,
          label: t('profile.tabs.settings'),
        },
      ];
    }
    return [
      { id: 1, slug: `/profile/${params.id}`, label: t('profile.tabs.main') },
    ];
  }, [params.id, isMyProfile]);

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
    if (location.pathname !== tab.slug) {
      const correctTab = tabs.find((tab) => tab.slug === location.pathname);
      correctTab && setTab(correctTab);
    }
  }, [location.pathname]);

  // effects
  useEffect(() => {
    if (!firstRender) {
      history.push(tab.slug);
    }
  }, [tab]);

  useEffect(() => {
    // console.log(`Getting profile id ${params.id}`);

    if (params.id === 'me') {
      dispatch(getProfile({}));
    } else {
      dispatch(getForeignProfile({ id: parseInt(params.id, 10) }));
    }
  }, [params.id]);

  const profileProps = {
    profile: viewingProfile,
    isMyProfile,
  };

  return (
    <div className={styles.root}>
      <Head {...profileProps} />
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
              {isMyProfile ? (
                <div className={styles.section}>
                  <ProgramList />
                </div>
              ) : (
                <ReferralStats {...profileProps} />
              )}

              <div className={styles.section}>
                <Grid cols="1" gap="xl" breakpoints={{ m: { cols: 2 } }}>
                  <GridItem>
                    <Achievements {...profileProps} />
                  </GridItem>
                  <GridItem>{isMyProfile && <Events />}</GridItem>
                </Grid>
              </div>
              {viewingProfile.courses && viewingProfile.courses.length > 0 && (
                <div className={styles.section}>
                  <Courses list={viewingProfile.courses || null} />
                </div>
              )}
            </>
          )}
        />
        {/* restrict some routes */}
        {isMyProfile && (
          <>
            <Route
              path={`${path}/balance`}
              render={() => (
                <>
                  <div className={styles.section}>
                    <Balance />
                  </div>
                  <div className={styles.section}>
                    <History />
                  </div>
                </>
              )}
            />

            <Route
              path={`${path}/partners`}
              render={() => (
                <>
                  <ReferralStats {...profileProps} />
                  <ReferralPartners />
                </>
              )}
            />

            <Route
              path={`${path}/referrals`}
              render={() => (
                <>
                  <ReferralStats {...profileProps} />
                  <ReferralTeam />
                </>
              )}
            />

            <Route
              path={`${path}/history`}
              render={() => (
                <Pagination
                  getList={getMatricesHistoryService}
                  listComponent={HistoryOperations}
                  queries={{ search: '' }}
                />
              )}
            />

            <Route path={`${path}/applications`} component={Applications} />
            <Route path={`${path}/settings`} component={Settings} />
          </>
        )}

        <Route
          path={`${path}/referrals`}
          render={() => <Typography size="l">Пусто</Typography>}
        />

        <Route
          path={`${path}`}
          render={() => (
            <>
              <Typography
                size="2xl"
                align="center"
                weight="semibold"
                view="secondary"
                margin="32px 0"
              >
                Not found
              </Typography>
            </>
          )}
        />
      </Switch>
    </div>
  );
};

export default ProfilePage;
