import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import BaseModal from 'components/Common/BaseModal';

import { SetStateType } from 'types/common';
import { IModalProps } from '../types';
import useStyles from './styles';

interface IProps {
  modalConfirm: IModalProps;
  setModalConfirm: SetStateType<IModalProps>;
  handleBuyClick: (id?: number, partner?: string) => void;
  modalSuccess: Omit<IModalProps, 'id'>;
  setModalSuccess: SetStateType<Omit<IModalProps, 'id'>>;
}

const ReferralModals: FC<IProps> = ({
  modalConfirm,
  setModalConfirm,
  modalSuccess,
  setModalSuccess,
  handleBuyClick,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [partner, setPartner] = useState<string>('');

  const handleCtaClick = () => {
    handleBuyClick(modalConfirm.id || undefined, partner);
    setPartner('');
  };
  return (
    <>
      <BaseModal
        theme="narrow"
        isOpen={modalConfirm.opened}
        setModalOpen={(v) =>
          setModalConfirm({ id: v ? modalConfirm.id : 0, opened: v })
        }
        title={t('profile.referral.buy.modal.confirmTitle')}
      >
        <Typography margin="16px 0 0" size="l" lineHeight="s" align="center">
          Вы уверены? Деньги будут списаны с вашего счета. <br />
          Откатить операцию невозможно.
        </Typography>

        <div className={styles.partners}>
          <TextField
            value={partner}
            onChange={({ value }) => setPartner(value || '')}
            placeholder="Поставьте партнера"
          />
        </div>

        <Flex
          align="center"
          justify="center"
          margin="32px 0 0"
          className={styles.modalCta}
        >
          <Button label={t('common.actions.buy')} onClick={handleCtaClick} />
          <Button
            label={t('common.actions.cancel')}
            view="secondary"
            onClick={() => setModalConfirm({ id: 0, opened: false })}
          />
        </Flex>
      </BaseModal>

      <BaseModal
        theme="narrow"
        isOpen={modalSuccess.opened}
        setModalOpen={(v) =>
          setModalSuccess({
            opened: v,
          })
        }
        title={t('profile.referral.buy.modal.successTitle')}
      >
        <Flex
          align="center"
          justify="center"
          margin="32px 0 0"
          className={styles.modalCta}
        >
          <Button
            label={t('common.actions.ok')}
            onClick={() =>
              setModalSuccess({
                opened: false,
              })
            }
          />
        </Flex>
      </BaseModal>
    </>
  );
};

export default ReferralModals;
