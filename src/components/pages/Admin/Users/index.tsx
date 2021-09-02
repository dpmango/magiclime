import React, { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import BaseAdminPage from '../BaseAdminPage';
import UsersTable from './UsersTable';
import { exportUsersList, getUsers } from '../../../../utils/api/routes/admin';

const Users: FC = () => {
  const { t } = useTranslation();

  const exportList = useCallback(() => {
    exportUsersList().then(() => {});
  }, []);

  const button = useMemo(
    () => (
      <Button
        label={t('admin.users.csvExport')}
        size="s"
        view="primary"
        onClick={exportList}
      />
    ),
    []
  );

  return (
    <BaseAdminPage
      title={t('admin.users.usersManagement')}
      apiFunc={getUsers}
      button={button}
      tableComponent={UsersTable}
    />
  );
};

export default Users;
