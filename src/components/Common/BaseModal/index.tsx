import React, { FC, useState, useEffect, ReactNode } from 'react';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import ConstaIcons from 'assets/icons/ConstaIcons';
import { Button } from '@consta/uikit/Button';
import { Modal } from '@consta/uikit/Modal';

import useStyles from './styles';

interface IProps {
  title: string;
  isOpen: boolean;
  theme?: 'default' | 'narrow';
  children?: ReactNode;
  setModalOpen: (x: boolean) => void;
}

const BaseModal: FC<IProps> = ({
  title,
  isOpen,
  setModalOpen,
  children,
  theme = 'default',
}) => {
  const styles = useStyles({ theme });

  return (
    <div className={styles.modal}>
      <Modal
        isOpen={isOpen}
        hasOverlay
        onOverlayClick={(): void => setModalOpen(false)}
      >
        <div className={styles.modal}>
          <Typography
            size="3xl"
            lineHeight="m"
            weight="semibold"
            align="center"
          >
            {title}
          </Typography>

          <div
            className={styles.close}
            role="button"
            tabIndex={0}
            onClick={(): void => setModalOpen(false)}
          >
            <ConstaIcons.Close />
          </div>

          {children}
        </div>
      </Modal>
    </div>
  );
};

export default BaseModal;
