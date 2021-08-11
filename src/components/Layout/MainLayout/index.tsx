import React, { FC, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import useStyles from './styles';
import Header from '../Header';
import { SetStateType } from '../../../types/common';
import Menu from '../Menu';
import Flex from '../../Common/Flex';
import Container from '../../Common/Container';
import Courses from '../../pages/Courses';
import Course from '../../pages/Course';
import CourseTask from '../../pages/CourseTask';
import Chats from '../../pages/Chats';
// import Profile from '../../pages/Profile';

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
            <Route path="/chats/:id?" component={Chats} />
            {/* <Route path="/profile" component={Profile} /> */}
            <Route exact path="/courses" component={Courses} />
            <Route path="/courses/:course" component={Course} />
            <Route path="/courses/:course/:id" component={CourseTask} />
          </Switch>
        </Container>
      </Flex>
      {/* FOOTER */}
    </Flex>
  );
};

export default MainLayout;
