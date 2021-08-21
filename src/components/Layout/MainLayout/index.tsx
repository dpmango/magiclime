import React, { FC, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { ScrollTo } from 'utils/helpers/scroll';
import useResolution from 'hooks/useResolution';
import { Router } from '@material-ui/icons';
import useStyles from './styles';
import Header from '../Header';
import { SetStateType } from '../../../types/common';
import Menu from '../Menu';
import Flex from '../../Common/Flex';
import Container from '../../Common/Container';
import Courses from '../../pages/Courses';
import Course from '../../pages/Course';
import CourseTask from '../../pages/CourseTask';
import Articles from '../../pages/Articles';
import Chats from '../../pages/Chats';
import Forum from '../../pages/Forum';
import Rating from '../../pages/Rating';
import Profile from '../../pages/Profile';
import { ChatContextProvider } from '../../pages/Chats/context';
import Webinars from '../../pages/Webinars';
import WebinarInfo from '../../pages/WebinarInfo';
import Webinar from '../../pages/Webinar';

interface IProps {
  theme: 'default' | 'dark';
  setTheme: SetStateType<'default' | 'dark'>;
}

const MainLayout: FC<IProps> = ({ theme, setTheme }) => {
  const styles = useStyles();
  const location = useLocation();
  const size = useResolution();
  const isCollapsedMenuBreakpoint = size.width <= 992;

  const getFullMenuState = () => {
    const shouldCollapseRoute = location.pathname.includes('/courses/');
    return !shouldCollapseRoute;
  };

  const [isFullMenu, setIsFullMenu] = useState<boolean>(getFullMenuState());

  useEffect(() => {
    const shouldCollapseRoute = location.pathname.includes('/courses/');

    if (shouldCollapseRoute) {
      setIsFullMenu(false);
    }

    ScrollTo(0, 300);
  }, [location.pathname]);

  useEffect(() => {
    setIsFullMenu(!isCollapsedMenuBreakpoint);
  }, [isCollapsedMenuBreakpoint]);

  return (
    <Flex direction="column" className={styles.root}>
      <Header
        theme={theme}
        setTheme={setTheme}
        toggleMenu={() => setIsFullMenu(!isFullMenu)}
      />
      <Flex className={styles.container}>
        <Menu isFull={isFullMenu} />

        <Container className={styles.content}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="profile" />} />
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
            <Route path="/profile" component={Profile} />
            <Route path="/forum" component={Forum} />
            <Route exact path="/webinars" component={Webinars} />
            <Route path="/rating" component={Rating} />
            <Route exact path="/webinars/:id" component={WebinarInfo} />
            <Route path="/webinars/:id/stream" component={Webinar} />
          </Switch>
        </Container>
      </Flex>
      {/* FOOTER */}
    </Flex>
  );
};

export default MainLayout;
