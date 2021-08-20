import React, { FC, useCallback, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Steps from './Steps';
import How from './How';

import useStyles from './styles';

const Landing: FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header />

      <Hero />
      <Steps />
      <How />

      <Footer />
    </div>
  );
};

export default Landing;
