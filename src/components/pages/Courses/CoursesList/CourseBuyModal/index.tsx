import React, { FC, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { toast } from 'react-hot-toast';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import BaseModal from 'components/Common/BaseModal';
import { ICourse } from 'types/interfaces/courses';
import { buyCourseService } from 'utils/api/routes/courses';

import { SetStateType } from 'types/common';
import { IModalProps } from '../index';

const useStyles = makeStyles({
  modalCta: {
    '& .Button': {
      marginRight: 16,
    },
  },
});

interface IProps {
  modalState: IModalProps;
  setModalState: SetStateType<IModalProps>;
}

const CourseBuyModal: FC<IProps> = ({ modalState, setModalState }) => {
  const styles = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const handleBuyCourse = useCallback(async () => {
    setModalState({
      ...modalState,
      loading: true,
    });

    const [err, data] = await buyCourseService(modalState.id);

    if (err) {
      toast.error(t('course.buy.error'));
      return;
    }
    toast.success(t('course.buy.success'));
    history.push(`/courses/${modalState.id}`);

    setModalState({
      id: 0,
      opened: false,
      loading: false,
    });
  }, [modalState, setModalState]);

  return (
    <BaseModal
      theme="narrow"
      isOpen={modalState.opened}
      setModalOpen={(v) => setModalState({ ...modalState, opened: v })}
      title="Купить курс ?"
    >
      <Typography margin="16px 0 0" size="l" lineHeight="s" align="center">
        После покупки курса вам начисляться бонусные баллы. За прохождение курса
        вы сможете получить очки рейтинга, благодаря которым можно прокачивать
        своего аватара.
      </Typography>

      <Flex
        align="center"
        justify="center"
        margin="32px 0 0"
        className={styles.modalCta}
      >
        <Button label={t('common.actions.buy')} onClick={handleBuyCourse} />
        <Button
          label={t('common.actions.cancel')}
          view="secondary"
          onClick={() => setModalState({ ...modalState, opened: false })}
        />
      </Flex>
    </BaseModal>
  );
};

export default CourseBuyModal;
