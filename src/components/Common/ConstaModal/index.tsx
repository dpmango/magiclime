import React, { FC, useState, useEffect } from 'react';

import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import SvgIcon from 'components/Common/SvgIcon';
import { Button } from '@consta/uikit/Button';
import { Modal } from '@consta/uikit/Modal';

import useStyles from './styles';

interface IProps {
  title: string;
  isOpen: boolean;
  children?: ReactElement;
  setModalOpen: (x: boolean) => void;
}

const ConstaModal: FC<IProps> = ({ title, isOpen, setModalOpen, children }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
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
            <SvgIcon.Close size="2xs" />
          </div>

          {children}
        </div>
      </Modal>
    </div>
  );
};

export default ConstaModal;
