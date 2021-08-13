import React, { FC, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import useStyles from './styles';
import Header from '../Header';
import { SetStateType } from '../../../types/common';
import Menu from '../Menu';
import Flex from '../../Common/Flex';
import Container from '../../Common/Container';
import Courses from '../../pages/CoursesPage';
import Articles from '../../pages/Articles';
import Chats from '../../pages/Chats';
import Profile from '../../pages/Profile';
import { ChatContextProvider } from '../../pages/Chats/context';
import Webinars from '../../pages/Webinars';
import WebinarInfo from '../../pages/WebinarInfo';

interface IProps {
  theme: 'default' | 'dark';
  setTheme: SetStateType<'default' | 'dark'>;
}

const MainLayout: FC<IProps> = ({ theme, setTheme }) => {
  const styles = useStyles();
  const [isFullMenu, setIsFullMenu] = useState(true);

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
            <Route exact path="/courses" component={Courses} />
            <Route
              path="/chats/:id?"
              render={(props) => (
                <ChatContextProvider>
                  <Chats {...props} />
                </ChatContextProvider>
              )}
            />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/faq" component={Articles} />
            <Route path="/chats/:id?" component={Chats} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/webinars" component={Webinars} />
            <Route path="/webinars/:id" component={WebinarInfo} />
          </Switch>
        </Container>
      </Flex>
      {/* FOOTER */}
    </Flex>
  );
};

export default MainLayout;
