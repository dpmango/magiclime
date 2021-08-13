import React, { FC, useState, useMemo, useEffect } from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { useFirstRender } from 'hooks/useFirstRender';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { useTranslation } from 'react-i18next';

import Account from './Account';
import Profile from './Profile';
import Notifications from './Notifications';
import Security from './Security';
import useStyles from './styles';
import Achivements from './Achivements';

interface ITab {
  id: number;
  slug: string;
  label: string;
}

const Settings: FC = () => {
  const { t } = useTranslation();

  const tabs: ITab[] = [
    {
      id: 1,
      slug: '/profile/settings',
      label: t('profile.settings.navigation.account'),
    },
    {
      id: 2,
      slug: '/profile/settings/profile',
      label: t('profile.settings.navigation.profile'),
    },
    {
      id: 3,
      slug: '/profile/settings/notifications',
      label: t('profile.settings.navigation.notifications'),
    },
    {
      id: 4,
      slug: '/profile/settings/security',
      label: t('profile.settings.navigation.security'),
    },
    {
      id: 5,
      slug: '/profile/settings/achivements',
      label: t('profile.settings.navigation.achivements'),
    },
  ];

  const getTabWithRouter = useMemo((): ITab => {
    const cTab = tabs.find((x) => x.slug === window.location.pathname);

    return cTab || tabs[0];
  }, []);

  const [tab, setTab] = useState<ITab>(getTabWithRouter);

  const styles = useStyles({ activeTab: tab.id });
  const { path } = useRouteMatch();
  const history = useHistory();
  const firstRender = useFirstRender();

  useEffect(() => {
    if (!firstRender) {
      history.push(tab.slug);
    }
  }, [tab]);

  return (
    <div className={styles.root}>
      <Flex align="stretch">
        <div className={styles.content}>
          <Switch>
            <Route exact path={path} component={Account} />
            <Route path={`${path}/profile`} component={Profile} />
            <Route path={`${path}/notifications`} component={Notifications} />
            <Route path={`${path}/security`} component={Security} />
            <Route path={`${path}/achivements`} component={Achivements} />
          </Switch>
        </div>

        <div className={styles.nav}>
          <Typography
            view="ghost"
            lineHeight="s"
            size="xs"
            transform="uppercase"
          >
            {t('profile.settings.navigation.sectionMain')}
          </Typography>
          <ul className={styles.navList}>
            {tabs.slice(0, 4).map((t) => (
              <li key={t.id}>
                <span
                  className={styles.navLink}
                  role="link"
                  tabIndex={0}
                  onClick={() => setTab(t)}
                >
                  <Typography view={tab.id === t.id ? 'primary' : 'secondary'}>
                    {t.label}
                  </Typography>
                </span>
              </li>
            ))}
            <div className={styles.navLine} />
          </ul>

          <Typography
            margin="28px 0 0"
            view="ghost"
            lineHeight="s"
            size="xs"
            transform="uppercase"
          >
            {t('profile.settings.navigation.sectionActivity')}
          </Typography>
          <ul className={styles.navList}>
            {tabs.slice(4, 5).map((t) => (
              <li key={t.id}>
                <span
                  className={styles.navLink}
                  role="link"
                  tabIndex={0}
                  onClick={() => setTab(t)}
                >
                  <Typography view={tab.id === t.id ? 'primary' : 'secondary'}>
                    {t.label}
                  </Typography>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Flex>
    </div>
  );
};

export default Settings;
