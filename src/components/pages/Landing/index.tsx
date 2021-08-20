import React, { FC, useCallback, useState } from 'react';

import Header from './Header';
import Hero from './Hero';
import Steps from './Steps';

import useStyles from './styles';

const Landing: FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header />

      <Hero />
      <Steps />
    </div>
  );
};

export default Landing;
