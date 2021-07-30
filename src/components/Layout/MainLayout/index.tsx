import React, { FC, useState } from 'react';
import useStyles from './styles';
import Header from '../Header';
import { SetStateType } from '../../../types/common';
import Menu from '../Menu';
import Flex from '../../Common/Flex';
import Container from '../../Common/Container';
import { Switch, Route } from 'react-router-dom';

import Courses from '../../pages/CoursesPage'

interface IProps {
  theme: 'default' | 'dark';
  setTheme: SetStateType<'default' | 'dark'>;
}

const MainLayout: FC<IProps> = ({ theme, setTheme }) => {
  const styles = useStyles();
  const [isFullMenu, setIsFullMenu] = useState(true);

  return (
    <Flex direction={'column'} className={styles.root}>
      <Header
        theme={theme}
        setTheme={setTheme}
        toggleMenu={() => setIsFullMenu(!isFullMenu)}
      />
      <Flex className={styles.container}>
        <Menu isFull={isFullMenu} />
        <Container className={styles.content}>
          <Switch>
            <Route exact={true} path={'/courses'} component={Courses} />
          </Switch>
        </Container>
      </Flex>
      {/* FOOTER */}
    </Flex>
  );
};

export default MainLayout;