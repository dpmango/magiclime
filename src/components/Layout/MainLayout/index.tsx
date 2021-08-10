import React, { FC, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import useStyles from './styles';
import Header from '../Header';
import { SetStateType } from '../../../types/common';
import Menu from '../Menu';
import Flex from '../../Common/Flex';
import Container from '../../Common/Container';

import Courses from '../../pages/Courses';

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
        <div className={styles.scroller}>
          <Container className={styles.content}>
            <Switch>
              <Route exact path="/courses" component={Courses} />
            </Switch>
          </Container>
        </div>
      </Flex>
      {/* FOOTER */}
    </Flex>
  );
};

export default MainLayout;
