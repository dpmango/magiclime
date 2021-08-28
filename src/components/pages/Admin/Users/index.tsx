import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField } from '@consta/uikit/TextField';
import { IconSearch } from '@consta/uikit/IconSearch';
import { Button } from '@consta/uikit/Button';
import useStyles from './styles';
import Typography from '../../../Common/Typography';
import Flex from '../../../Common/Flex';
import { useDebounce } from '../../../../hooks/useDebounce';
import UsersTable from './UsersTable';
import { IUserListItem } from './types';
import { exportUsersList, getUsers } from '../../../../utils/api/routes/admin';

const Users: FC = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<IUserListItem[]>([]);
  const styles = useStyles();
  const { t } = useTranslation();

  const debouncedSearch = useDebounce(search, 300);

  const exportList = useCallback(() => {
    exportUsersList().then(() => {});
  }, []);

  useEffect(() => {
    getUsers(debouncedSearch)
      .then((res) => setUsers(res.data.results))
      .finally(() => {
        setLoading(false);
      });
  }, [debouncedSearch]);

  return (
    <div className={styles.root}>
      <Flex align="center" justify="space-between" margin="0 0 84px">
        <Typography weight="semibold" size="3xl">
          {t('admin.users.usersManagement')}
        </Typography>
        <Flex align="center" className={styles.buttonsWrapper}>
          <TextField
            value={search}
            onChange={({ value }) => setSearch(value || '')}
            size="s"
            placeholder={t('admin.users.loginSearch')}
            rightSide={IconSearch}
          />
          <Button
            label={t('admin.users.csvExport')}
            size="s"
            view="primary"
            onClick={exportList}
          />
        </Flex>
      </Flex>
      <UsersTable data={users} loading={loading} />
    </div>
  );
};

export default Users;
