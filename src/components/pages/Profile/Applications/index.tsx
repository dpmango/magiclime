import React, { FC, useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { getBonuseHistoryService } from 'utils/api/routes/payment';
import { getMatricesHistoryService } from 'utils/api/routes/referrals';

import { content } from './mockData';
import useStyles from './styles';

const ProfileApplications: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Typography margin="0 0 24px" weight="semibold" lineHeight="s" size="2xl">
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
          {content &&
            content.map((tr) => (
              <tr>
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
                    <Button size="s" label={t('common.actions.accept')} />
                    <Button
                      size="s"
                      view="secondary"
                      label={t('common.actions.reject')}
                    />
                  </Flex>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileApplications;
