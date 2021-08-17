import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from 'components/Common/Typography';
import { Button } from '@consta/uikit/Button';
import { Modal } from '@consta/uikit/Modal';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';

const CreateForum: FC = () => {
  const styles = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Button
        label="Задать вопрос"
        width="full"
        onClick={(): void => setModalOpen(true)}
      />

      <Modal
        isOpen={modalOpen}
        hasOverlay
        onOverlayClick={(): void => setModalOpen(false)}
      >
        <Typography size="3xl" lineHeight="m" weight="semibold" align="center">
          {t('forum.create.title')}
        </Typography>

        <div>
          <Button
            size="m"
            view="primary"
            label="Закрыть"
            onClick={(): void => setModalOpen(false)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CreateForum;
