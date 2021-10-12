import { Modal } from '@consta/uikit/Modal';
import ConstaIcons from 'assets/icons/ConstaIcons';
import Typography from 'components/Common/Typography';
import React, { FC, ReactNode } from 'react';

import useStyles from './styles';

interface IProps {
  title: string;
  isOpen: boolean;
  dynamicSize?: boolean;
  theme?: 'default' | 'narrow';
  withIcon?: boolean;
  icon?: string;
  children?: ReactNode;
  setModalOpen: (status: boolean) => void;
}

const BaseModal: FC<IProps> = ({
  title,
  isOpen,
  setModalOpen,
  theme = 'default',
  withIcon = true,
  icon = '/images/default-modal-icon.svg',
  dynamicSize,
  children,
}) => {
  const styles = useStyles({ dynamicSize, isOpen, theme });

  return (
    <div className={styles.modal}>
      <Modal
        isOpen={isOpen}
        hasOverlay
        onOverlayClick={(): void => setModalOpen(false)}
        rootClassName={styles.root}
      >
        <div className={styles.modal}>
          {withIcon && (
            <div className={styles.icon}>
              <img src={icon} alt="modal_icon" />
            </div>
          )}
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
            <ConstaIcons.Close size="s" />
          </div>

          {children}
        </div>
      </Modal>
    </div>
  );
};

export default BaseModal;
