import React, { FC, useState, useEffect, memo } from 'react';
import isEqual from 'lodash/isEqual';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProfile } from 'store/reducers/profile';
import Flex from 'components/Common/Flex';
import Container from 'components/Common/Container';
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

  const is_staff = useSelector(
    (state: RootState) => state.user.profile.is_staff,
    isEqual
  );

  useEffect(() => {
    dispatch(getAllProfile());
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
              <Route path="/forum" component={Forum} />
              <Route path="/webinars" component={Webinars} />
              <Route path="/rating" component={Rating} />
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
