import React, { FC, useCallback, useState, useMemo } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Modal } from '@consta/uikit/Modal';

import Auth from 'components/Auth';
import Landing from 'components/pages/Landing';
import Government from 'components/pages/Static/Government';
import GovernmentRequest from 'components/pages/Static/Government/Request';
import Policy from 'components/pages/Static/Policy';

import StaticHeader from '../StaticHeader';
import StaticFooter from '../StaticFooter';
import useStyles from './styles';

const StaticLayout: FC = () => {
  const styles = useStyles();
  const { pathname } = useLocation();

  const [isAuthOpen, setAuthOpen] = useState(false);

  const closeModal = useCallback(() => {
    setAuthOpen(false);
  }, []);

  const headerWhiteTheme = useMemo(() => {
    return pathname === '/home';
  }, [pathname]);

  return (
    <div className={styles.root}>
      <StaticHeader
        isWhite={headerWhiteTheme}
        setAuthOpen={(v) => setAuthOpen(v)}
      />

      <Switch>
        <Route
          exact
          path="/home"
          render={() => <Landing setAuthOpen={setAuthOpen} />}
        />
        <Route exact path="/home/info/government" component={Government} />
        <Route
          exact
          path="/info/government/request"
          component={GovernmentRequest}
        />
        <Route exact path="/home/info/privacy" component={Policy} />
      </Switch>

      <StaticFooter />

      <Modal isOpen={isAuthOpen} hasOverlay onOverlayClick={closeModal}>
        <Auth closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default StaticLayout;
