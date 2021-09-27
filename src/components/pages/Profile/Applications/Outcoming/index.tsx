import React, { FC, useEffect, useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { toast } from 'react-hot-toast';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { getOutcoming } from 'store/reducers/applications';
import { RootState } from 'store/reducers/rootReducer';
import {
  approveApplicationService,
  rejectApplicationService,
} from 'utils/api/routes/position';

import useStyles from './styles';

const ApplicationsOutcoming: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const outcoming = useSelector(
    (state: RootState) => state.applications.outcoming
  );

  const handleRejectClick = useCallback(async (id: number) => {
    const [err, data] = await rejectApplicationService(id);

    if (err) {
      toast.error(err);
      return;
    }

    toast.success('Заявка отклонена');

    await dispatch(getOutcoming());
  }, []);

  const handleApproveClick = useCallback(async (id: number) => {
    const [err, data] = await approveApplicationService(id);

    if (err) {
      toast.error(err);
      return;
    }

    toast.success('Заявка принята');

    await dispatch(getOutcoming());
  }, []);

  useEffect(() => {
    dispatch(getOutcoming());
  }, []);

  return (
    <>
      {outcoming && outcoming.length !== 0 ? (
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>
                <Typography size="xs" weight="semibold">
                  {t('profile.applications.table.thLogin')}
                </Typography>
              </th>
              <th>
                <Typography size="xs" weight="semibold">
                  {t('profile.applications.table.thMatrix')}
                </Typography>
              </th>
              <th>
                <Typography size="xs" weight="semibold">
                  {t('profile.applications.table.thDate')}
                </Typography>
              </th>
              <th>
                <Typography size="xs" weight="semibold">
                  {t('profile.applications.table.thStatus')}
                </Typography>
              </th>
              <th>
                <Typography size="xs" weight="semibold">
                  {t('profile.applications.table.thActions')}
                </Typography>
              </th>
              <th>
                <Typography size="xs" weight="semibold">
                  {t('profile.applications.table.thId')}
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {outcoming.map((tr) => (
              <tr key={tr.id} data-id={tr.id}>
                <td>
                  <Typography size="s">{tr.login}</Typography>
                </td>
                <td>
                  <Typography size="s">{tr.matrix}</Typography>
                </td>
                <td>
                  <Typography size="s">{tr.date}</Typography>
                </td>
                <td>
                  <Typography size="s">{tr.status}</Typography>
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
                      onClick={() => handleRejectClick(tr.id)}
                    />
                  </Flex>
                </td>
                <td>
                  <Typography size="s">{tr.id}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Typography margin="24px 0" weight="semibold">
          {t('profile.applications.table.empty')}
        </Typography>
      )}
    </>
  );
};

export default ApplicationsOutcoming;
