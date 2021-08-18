import React, { FC, useCallback, useEffect, useState } from 'react';
import useStyles from './styles';
import Typography from '../../../Common/Typography';
import { useTranslation } from 'react-i18next';
import Flex from '../../../Common/Flex';
import { useDebounce } from '../../../../hooks/useDebounce';
import { TextField } from '@consta/uikit/TextField';
import { IconSearch } from '@consta/uikit/IconSearch';
import { Button } from '@consta/uikit/Button';
import UsersTable from './UsersTable';
import { IUserListItem } from './types';
import { exportUsersList, getUsers } from '../../../../utils/api/routes/admin';

const Users: FC = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<IUserListItem[]>([
    {
      id: '1',
      name: 'Ivanov Ivan',
      username: 'Test',
      date_joined: '2021-06-03',
      last_login: '2021-06-03',
      email: 'test_user@mail.ru',
      is_active: true,
      phone: '89216336503',
      referral_number: 'icndn930-ej23idkk',
      parent_username: 'Invite',
    },
    {
      id: '2',
      name: 'Ivanov Ivan',
      username: 'Test',
      date_joined: '2021-06-03',
      last_login: '2021-06-03',
      email: 'test_user@mail.ru',
      is_active: true,
      phone: '89216336503',
      referral_number: 'icndn930-ej23idkk',
      parent_username: 'Invite',
    },
  ]);
  const styles = useStyles();
  const { t } = useTranslation();

  const debouncedSearch = useDebounce(search, 300);

  const exportList = useCallback(() => {
    exportUsersList().then(() => {});
  }, []);

  useEffect(() => {
    // getUsers(debouncedSearch)
    //     .then(res => setUsers(res.data))
  }, [debouncedSearch]);

  return (
    <div className={styles.root}>
      <Typography weight={'semibold'} size={'3xl'} margin={'0 0 24px'}>
        {t('admin.userManagement')}
      </Typography>
      <Flex justify={'space-between'} align={'center'} margin={'0 0 36px'}>
        <TextField
          value={search}
          onChange={({ value }) => setSearch(value || '')}
          size={'s'}
          placeholder={t('admin.loginSearch')}
          rightSide={IconSearch}
        />
        <Button
          label={t('admin.csvExport')}
          size={'s'}
          view={'primary'}
          onClick={exportList}
        />
      </Flex>
      <UsersTable data={users} />
    </div>
  );
};

export default Users;
