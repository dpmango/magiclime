import { Badge } from '@consta/uikit/Badge';
import React, { FC, useEffect, useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { toast } from 'react-hot-toast';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { getIncoming } from 'store/reducers/applications';
import { RootState } from 'store/reducers/rootReducer';
import {
  approveApplicationService,
  rejectApplicationService,
} from 'utils/api/routes/position';
import { IApplicationsDisplay } from 'types/interfaces/profile';

import useStyles from './styles';

const ApplicationsIncoming: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const incoming = useSelector(
    (state: RootState) => state.applications.incoming
  );

  const handleRejectClick = useCallback(async (id: number) => {
    const [err, data] = await rejectApplicationService(id);

    if (err) {
      toast.error(err);
      return;
    }

    toast.success('Заявка отклонена');

    await dispatch(getIncoming());
  }, []);

  const handleApproveClick = useCallback(async (id: number) => {
    const [err, data] = await approveApplicationService(id);

    if (err) {
      toast.error(err);
      return;
    }

    toast.success('Заявка принята');

    await dispatch(getIncoming());
  }, []);

  useEffect(() => {
    dispatch(getIncoming());
  }, []);

  return (
    <>
      {incoming && incoming.length !== 0 ? (
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>
                <Typography size="xs" weight="semibold">
                  {t('profile.applications.table.thId')}
                </Typography>
              </th>
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
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {incoming.map((tr: IApplicationsDisplay) => (
              <tr key={tr.id} data-id={tr.id}>
                <td>
                  <Typography size="s">{tr.id}</Typography>
                </td>
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
                  <Badge
                    status={
                      tr.status === 1
                        ? 'system'
                        : tr.status === 2
                        ? 'success'
                        : 'error'
                    }
                    label={tr.statusText}
                  />
                </td>
                <td>
                  <Flex
                    direction="column"
                    align="stretch"
                    className={styles.actions}
                  >
                    {/* <Button size="s" label={t('common.actions.accept')} /> */}
                    {tr.status === 1 && (
                      <Button
                        size="s"
                        view="secondary"
                        label={t('common.actions.reject')}
                        onClick={() => handleRejectClick(tr.id)}
                      />
                    )}
                  </Flex>
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

export default ApplicationsIncoming;
