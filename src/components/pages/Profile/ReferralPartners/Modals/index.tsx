import React, { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import { Select } from '@consta/uikit/Select';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import BaseModal from 'components/Common/BaseModal';

import { SetStateType } from 'types/common';
import { ISelectOption } from 'types/interfaces/common';
import { getIncoming } from 'store/reducers/applications';
import { RootState } from 'store/reducers/rootReducer';

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
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const incomingSelectOptions = useSelector(
    (state: RootState) => state.applications.incomingSelect
  );

  const [partner, setPartner] = useState<ISelectOption>(
    incomingSelectOptions[0]
  );

  const handleCtaClick = () => {
    handleBuyClick(modalConfirm.id || undefined, partner.id.toString());
    setPartner(incomingSelectOptions[0]);
  };

  useEffect(() => {
    dispatch(getIncoming());
  }, []);

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

        {incomingSelectOptions && incomingSelectOptions.length > 0 && (
          <div className={styles.partners}>
            <Select
              items={incomingSelectOptions}
              value={partner}
              placeholder={t('profile.referral.buy.modal.selectApplication')}
              onChange={({ value }) =>
                setPartner(value || incomingSelectOptions[0])
              }
            />
          </div>
        )}

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
