import React, { FC, useCallback, useState } from 'react';
import { Modal } from '@consta/uikit/Modal';

import Hero from './Hero';
import Steps from './Steps';
import How from './How';
import FeaturedEvent from './FeaturedEvent';
import Events from './Events';

import useStyles from './styles';

interface IProps {
  setAuthOpen: (v: boolean) => void;
}

const Landing: FC<IProps> = ({ setAuthOpen }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Hero setAuthOpen={(v) => setAuthOpen(v)} />
      <Steps setAuthOpen={(v) => setAuthOpen(v)} />
      <How />
      <FeaturedEvent />
      <Events />
    </div>
  );
};

export default Landing;
