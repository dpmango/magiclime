import React, { FC, useState, useEffect, memo } from 'react';
import isEqual from 'lodash/isEqual';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProfile } from 'store/reducers/profile';
import Flex from 'components/Common/Flex';
import Container from 'components/Common/Container';
import { getAllMeta } from '../../../store/reducers/meta';
import Premium from '../../pages/Premium';
import PrivateRoute from '../../PrivateRoute';
import Menu from '../Menu';
import { ChatContextProvider } from '../../pages/Chats/context';
import { RootState } from '../../../store/reducers/rootReducer';
import { SetStateType, Theme } from '../../../types/common';

import Admin from '../../pages/Admin';
import Profile from '../../pages/Profile';
import Courses from '../../pages/Courses';
import Course from '../../pages/Course';
import CourseTask from '../../pages/CourseTask';
import Articles from '../../pages/Articles';
import Article from '../../pages/Article';
import Chats from '../../pages/Chats';
import Forum from '../../pages/Forum';
import Rating from '../../pages/Rating';
import News from '../../pages/News';
import Webinars from '../../pages/Webinars';
import Header from '../Header';
import useStyles from './styles';

interface IProps {
  theme: Theme;
  setTheme: SetStateType<Theme>;
}

const MainLayout: FC<IProps> = ({ theme, setTheme }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  const {
    is_staff,
    is_bought_1level_bitlime,
    has_bought_matrix_positions: havePremium,
  } = useSelector((state: RootState) => state.user.profile, isEqual);

  useEffect(() => {
    dispatch(getAllProfile());
    dispatch(getAllMeta(null));
  }, []);

  return (
    <Flex direction="column" className={styles.root}>
      <Header theme={theme} setTheme={setTheme} />
      <Flex className={styles.container}>
        <Menu isAdmin={is_staff} />
        <Container className={styles.content}>
          {!is_staff ? (
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/profile/me" />}
              />
              <PrivateRoute
                path="/buy_premium"
                access={!is_bought_1level_bitlime}
                redirect="/profile/me"
              >
                <Premium />
              </PrivateRoute>
              <Route
                path="/chats/:id?"
                render={(props) => (
                  <ChatContextProvider>
                    <Chats {...props} />
                  </ChatContextProvider>
                )}
              />
              <Route path="/profile/:id" component={Profile} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/courses/:id" component={CourseTask} />
              <Route exact path="/courses/:id/info" component={Course} />
              <Route exact path="/faq" component={Articles} />
              <Route exact path="/faq/:id" component={Article} />
              <PrivateRoute
                path="/forum"
                access={havePremium}
                redirect="/profile/me"
              >
                <Forum />
              </PrivateRoute>
              <Route path="/webinars" component={Webinars} />
              <PrivateRoute
                path="/rating"
                access={havePremium}
                redirect="/profile/me"
              >
                <Rating />
              </PrivateRoute>

              <Route path="/news" component={News} />
            </Switch>
          ) : (
            <Admin />
          )}
        </Container>
      </Flex>
    </Flex>
  );
};

export default MainLayout;
