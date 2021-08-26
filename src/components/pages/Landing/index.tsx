import React, { FC, useCallback, useState } from 'react';
import { Modal } from '@consta/uikit/Modal';

import Auth from 'components/Auth';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Steps from './Steps';
import How from './How';
import FeaturedEvent from './FeaturedEvent';
import Events from './Events';

import useStyles from './styles';

const Landing: FC = () => {
  const styles = useStyles();

  const [isAuthOpen, setAuthOpen] = useState(false);

  const closeModal = useCallback(() => {
    setAuthOpen(false);
  }, []);

  return (
    <div className={styles.root}>
      <Header setAuthOpen={(v) => setAuthOpen(v)} />

      <Hero setAuthOpen={(v) => setAuthOpen(v)} />
      <Steps />
      <How />
      <FeaturedEvent />
      <Events />

      <Footer />

      <Modal isOpen={isAuthOpen} hasOverlay onOverlayClick={closeModal}>
        <Auth closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Landing;
