import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import BaseModal from 'components/Common/BaseModal';
import Flex from 'components/Common/Flex';

import Typography from 'components/Common/Typography';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SetStateType } from 'types/common';
import { ISelectOption } from 'types/interfaces/common';
import {
  IApplicationIncoming,
  IApplicationSelect,
} from 'types/interfaces/profile';
import { getActiveIncomingApplicationsService } from '../../../../../utils/api/routes/position';

import { IModalProps } from '../types';
import useStyles from './styles';

interface IProps {
  modalConfirm: IModalProps;
  setModalConfirm: SetStateType<IModalProps>;
  handleBuyClick: (id?: number, partner?: string) => void;
  modalSuccess: Omit<IModalProps, 'id'>;
  setModalSuccess: SetStateType<Omit<IModalProps, 'id'>>;
  levelID?: number;
  programID?: number;
}

const ReferralModals: FC<IProps> = ({
  modalConfirm,
  setModalConfirm,
  modalSuccess,
  setModalSuccess,
  handleBuyClick,
  levelID,
  programID,
}) => {
  const [requests, setRequests] = useState<IApplicationIncoming[]>([]);
  const styles = useStyles();
  const { t } = useTranslation();

  const [partner, setPartner] = useState<ISelectOption | null>(null);

  const handleCtaClick = () => {
    handleBuyClick(
      modalConfirm.id || undefined,
      partner ? partner.id.toString() : ''
    );
    setPartner(null);
  };

  const selectableItems = useMemo(() => {
    const dataMapped = requests.map(
      (x): IApplicationSelect => ({
        id: x.id,
        label: `${x.id} - ${x.from_user.username}`,
        level: x.level,
        program: x.program,
      })
    );

    if (levelID !== undefined && programID !== undefined) {
      return dataMapped.filter(
        (x: IApplicationSelect) =>
          x.level === levelID && x.program === programID
      );
    }

    return dataMapped;
  }, [requests, levelID, programID]);

  useEffect(() => {
    getActiveIncomingApplicationsService().then((res) => {
      setRequests(res.data);
    });
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

        {selectableItems && selectableItems.length > 0 && (
          <div className={styles.partners}>
            <Select
              items={selectableItems}
              value={partner}
              placeholder={t('profile.referral.buy.modal.selectApplication')}
              onChange={({ value }) => setPartner(value || null)}
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
