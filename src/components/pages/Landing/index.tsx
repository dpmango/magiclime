import React, { useCallback, useState } from 'react';
import { Button } from '@consta/uikit/Button';
import { Modal } from '@consta/uikit/Modal';
import Auth from '../../Auth';

const Landing = () => {
  const [isAuthOpen, setAuthOpen] = useState(false);

  const closeModal = useCallback(() => {
    setAuthOpen(false);
  }, []);

  return (
    <div>
      <Button label={'Войти'} onClick={() => setAuthOpen(true)} />
      <Modal isOpen={isAuthOpen} hasOverlay onOverlayClick={closeModal}>
        <Auth closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Landing;
