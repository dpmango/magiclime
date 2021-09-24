import React, { FC, useEffect, useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import { toast } from 'react-hot-toast';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import {
  getOutcomingApplicationsService,
  getIncomingApplicationsService,
  postApplicationService,
  approveApplicationService,
  rejectApplicationService,
} from 'utils/api/routes/position';
import { RootState } from 'store/reducers/rootReducer';
import { ISelectOption } from 'types/interfaces/common';
import {
  IApplicationOutcoming,
  IApplicationIncoming,
} from 'types/interfaces/profile';
import {
  programOptions,
  buildMatrixLevels,
  getInitialLevel,
} from 'components/pages/Profile/ReferralPartners/functions';

import useStyles from './styles';
import useRootStyles from '../styles';

const ProfileApplications: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  const [program, setProgram] = useState<ISelectOption>(programOptions[0]);
  const matrixLevels: ISelectOption[] = useMemo(() => {
    return buildMatrixLevels(program!.id).map((x: number) => ({
      id: x,
      label: `${x}`,
    }));
  }, [program]);
  const [level, setLevel] = useState<ISelectOption>(matrixLevels[0]);

  const [outcomingApplications, setOutcomingApplications] = useState<
    IApplicationOutcoming[]
  >([]);
  const [incomingApplications, setIncomingApplications] = useState<
    IApplicationIncoming[]
  >([]);

  const profile = useSelector((state: RootState) => state.user.profile);

  const fetchOutcomingApplications = async () => {
    const [err, data] = await getOutcomingApplicationsService();

    if (err) {
      toast.error(err);
      return;
    }

    setOutcomingApplications(data || []);
  };

  const fetchIncomingApplications = async () => {
    const [err, data] = await getIncomingApplicationsService();

    if (err) {
      toast.error(err);
      return;
    }

    setIncomingApplications(data || []);
  };

  const handleApplicationPost = useCallback(async () => {
    const [err, data] = await postApplicationService({
      from_user: profile.id,
      // to_user: profile.id,
      level: level!.id,
      program: program!.id,
    });

    if (err) {
      toast.error(err);
      return;
    }

    toast.success('Заявка создана');
    await fetchOutcomingApplications();
  }, [level, program]);

  const handleRejectClick = useCallback(
    async (id: number, type: 'outcoming' | 'incoming') => {
      const [err, data] = await rejectApplicationService(id);

      if (err) {
        toast.error(err);
        return;
      }

      toast.success('Заявка отклонена');
      if (type === 'outcoming') {
        await fetchOutcomingApplications();
      } else if (type === 'incoming') {
        await fetchIncomingApplications();
      }
    },
    []
  );

  const handleApproveClick = useCallback(
    async (id: number, type: 'outcoming' | 'incoming') => {
      const [err, data] = await approveApplicationService(id);

      if (err) {
        toast.error(err);
        return;
      }

      toast.success('Заявка принята');
      if (type === 'outcoming') {
        await fetchOutcomingApplications();
      } else if (type === 'incoming') {
        await fetchIncomingApplications();
      }
    },
    []
  );

  const handleProgramChange = useCallback((program: ISelectOption) => {
    setProgram(program);
    const initialLvl = getInitialLevel(program.id);
    setLevel({ id: initialLvl, label: `${initialLvl}` });
  }, []);

  useEffect(() => {
    fetchOutcomingApplications();
    fetchIncomingApplications();
  }, []);

  // getters
  const contentOutcoming = useMemo(() => {
    if (outcomingApplications && outcomingApplications.length) {
      return outcomingApplications.map((x: IApplicationOutcoming) => ({
        id: x.id,
        login: x.to_user.username,
        name: x.to_user.name,
        email: x.to_user.email,
        phone: x.to_user.phone,
      }));
    }

    return [];
  }, [outcomingApplications]);

  const contentIncoming = useMemo(() => {
    if (incomingApplications && incomingApplications.length) {
      return incomingApplications.map((x: IApplicationIncoming) => ({
        id: x.id,
        login: x.from_user.username,
        name: x.from_user.name,
        email: x.from_user.email,
        phone: x.from_user.phone,
      }));
    }

    return [];
  }, [incomingApplications]);

  return (
    <div className={styles.root}>
      <div className={rootStyles.section}>
        <div className={styles.text}>
          <Typography weight="semibold" lineHeight="s" size="2xl">
            Что такое заявка?
          </Typography>

          <Typography margin="12px 0 0" lineHeight="s" size="s">
            Заявка это возможность доверить покупку места в матрице вашему
            пригласителю. Он сможет выбрать оптимальное место, чтобы поставить
            Вас. Деньги будут списаны с вашего счета. После открытия матрицы, Вы
            сможете самостоятельно выбирать порядок размещения дальнейших мест в
            ней.
          </Typography>
        </div>

        <Typography
          margin="24px 0 0"
          weight="semibold"
          lineHeight="s"
          size="2xl"
        >
          {t('profile.applications.title')}
        </Typography>

        <table className={styles.table}>
          <thead className={styles.thead}>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thLogin')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thName')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thEmail')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thPhone')}
              </Typography>
            </th>
            <th />
          </thead>
          <tbody className={styles.tbody}>
            {contentIncoming &&
              contentIncoming.map((tr) => (
                <tr key={tr.id} data-id={tr.id}>
                  <td>
                    <Typography size="s">{tr.login}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.name}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.email}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.phone}</Typography>
                  </td>
                  <td>
                    <Flex
                      direction="column"
                      align="stretch"
                      className={styles.actions}
                    >
                      {/* <Button size="s" label={t('common.actions.accept')} /> */}
                      <Button
                        size="s"
                        view="secondary"
                        label={t('common.actions.reject')}
                        onClick={() => handleRejectClick(tr.id, 'incoming')}
                      />
                    </Flex>
                  </td>
                </tr>
              ))}

            {contentIncoming && contentIncoming.length === 0 && (
              <Typography
                view="alert"
                align="center"
                weight="semibold"
                margin="0 0 12px"
              >
                Заявки не найдены
              </Typography>
            )}
          </tbody>
        </table>
      </div>

      {/* next section */}
      <div className={rootStyles.section}>
        <Typography
          margin="24px 0 0"
          weight="semibold"
          lineHeight="s"
          size="2xl"
        >
          {t('profile.applications.apply.title')}
        </Typography>

        <div className={styles.text}>
          <Typography margin="12px 0 0" lineHeight="s" size="s">
            Вы можете подать заявку на активацию вашей матрицы спонсором. После
            этого, он может поставить вас в позицию выбранную по своему
            усмотрению в указанной матрице, деньги будут списаны с вашего счета.
          </Typography>
        </div>

        <div className={styles.apply}>
          <Flex>
            <div className={styles.applyProgram}>
              <Select
                value={program}
                onChange={({ value }) => handleProgramChange(value!)}
                items={programOptions}
              />
            </div>
            <div className={styles.applyLevel}>
              <Select
                value={level}
                onChange={({ value }) => setLevel(value!)}
                items={matrixLevels}
              />
            </div>

            <Button
              label={t('profile.applications.apply.cta')}
              onClick={handleApplicationPost}
            />
          </Flex>
        </div>
      </div>

      <div className={rootStyles.section}>
        <Typography
          margin="24px 0 0"
          weight="semibold"
          lineHeight="s"
          size="2xl"
        >
          {t('profile.applications.my.title')}
        </Typography>

        <table className={styles.table}>
          <thead className={styles.thead}>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thLogin')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thName')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thEmail')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thPhone')}
              </Typography>
            </th>
            <th />
          </thead>
          <tbody className={styles.tbody}>
            {contentOutcoming &&
              contentOutcoming.map((tr) => (
                <tr key={tr.id} data-id={tr.id}>
                  <td>
                    <Typography size="s">{tr.login}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.name}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.email}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.phone}</Typography>
                  </td>
                  <td>
                    <Flex
                      direction="column"
                      align="stretch"
                      className={styles.actions}
                    >
                      <Button
                        size="s"
                        view="secondary"
                        label={t('common.actions.reject')}
                        onClick={() => handleRejectClick(tr.id, 'outcoming')}
                      />
                    </Flex>
                  </td>
                </tr>
              ))}

            {contentOutcoming && contentOutcoming.length === 0 && (
              <Typography
                view="alert"
                align="center"
                weight="semibold"
                margin="0 0 12px"
              >
                Заявки не найдены
              </Typography>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileApplications;
