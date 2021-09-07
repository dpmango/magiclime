import React, { FC, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import News from '../../pages/News';
import useStyles from './styles';
import Header from '../Header';
import { SetStateType, Theme } from '../../../types/common';
import Menu from '../Menu';
import Flex from '../../Common/Flex';
import Container from '../../Common/Container';
import Courses from '../../pages/Courses';
import Course from '../../pages/Course';
import CourseTask from '../../pages/CourseTask';
import Articles from '../../pages/Articles';
import Article from '../../pages/Article';
import Chats from '../../pages/Chats';
import Forum from '../../pages/Forum';
import Rating from '../../pages/Rating';
import Profile from '../../pages/Profile';
import { ChatContextProvider } from '../../pages/Chats/context';
import Webinars from '../../pages/Webinars';
import WebinarInfo from '../../pages/WebinarInfo';
import Admin from '../../pages/Admin';
import { RootState } from '../../../store/reducers/rootReducer';
import Webinar from '../../pages/Webinar';
import Government from '../../pages/Static/Government';

interface IProps {
  theme: Theme;
  setTheme: SetStateType<Theme>;
}

const MainLayout: FC<IProps> = ({ theme, setTheme }) => {
  const [isFullMenu, setIsFullMenu] = useState(false);
  const styles = useStyles();
  const { is_staff } = useSelector((state: RootState) => state.user.profile);

  return (
    <Flex direction="column" className={styles.root}>
      <Header
        theme={theme}
        setTheme={setTheme}
        toggleMenu={() => setIsFullMenu(!isFullMenu)}
      />
      <Flex className={styles.container}>
        <Menu isFull={isFullMenu} isAdmin={is_staff} />
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
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/courses/:course" component={Course} />
              <Route exact path="/courses/:course/:id" component={CourseTask} />
              <Route exact path="/faq" component={Articles} />
              <Route exact path="/faq/:id" component={Article} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/forum" component={Forum} />
              <Route exact path="/webinars" component={Webinars} />
              <Route path="/rating" component={Rating} />
              <Route exact path="/webinars/:id" component={WebinarInfo} />
              <Route path="/webinars/:id/stream" component={Webinar} />
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
