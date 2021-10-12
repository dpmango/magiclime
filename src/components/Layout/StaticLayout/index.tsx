import React, { FC, useCallback, useState, useMemo } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Modal } from '@consta/uikit/Modal';
import isEqual from 'lodash/isEqual';

import Auth from 'components/Auth';
import Landing from 'components/pages/Landing';
import Government from 'components/pages/Static/Government';
import GovernmentRequest from 'components/pages/Static/Government/Request';
import Policy from 'components/pages/Static/Policy';
import { RootState } from 'store/reducers/rootReducer';
import { setAuthOpen } from 'store/reducers/settings';
import Container from '../../Common/Container';
import Agreement from '../../pages/Static/Agreement';
import StaticHeader from '../StaticHeader';
import StaticFooter from '../StaticFooter';
import useStyles from './styles';

const StaticLayout: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const authOpen = useSelector(
    (state: RootState) => state.settings.authOpen,
    shallowEqual
  );

  const closeModal = useCallback(() => {
    dispatch(setAuthOpen(false));
  }, []);

  const headerWhiteTheme = useMemo(() => {
    return pathname === '/home';
  }, [pathname]);

  return (
    <Container className={styles.root}>
      <StaticHeader isWhite={headerWhiteTheme} />

      <Switch>
        <Route exact path="/home" component={Landing} />
        <Route exact path="/home/info/government" component={Government} />
        <Route
          exact
          path="/home/info/government/request"
          component={GovernmentRequest}
        />
        <Route exact path="/home/info/confidential" component={Policy} />
        <Route exact path="/home/info/rules" component={Agreement} />
      </Switch>

      <StaticFooter />

      <Modal
        isOpen={authOpen}
        hasOverlay
        onOverlayClick={closeModal}
        className={styles.fullHeightModal}
      >
        <Auth />
      </Modal>
    </Container>
  );
};

export default StaticLayout;
