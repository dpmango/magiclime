import { IconAlert } from '@consta/uikit/IconAlert';
import React, { FC, useCallback, useState } from 'react';
import { TableColumn } from '@consta/uikit/Table';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import BaseModal from '../../../../Common/BaseModal';
import BaseTable from '../../../../Common/BaseTable';
import { IUserListItem } from '../types';
import Flex from '../../../../Common/Flex';
import useStyles from './styles';
import UserInfo from '../UserInfo';

interface IProps {
  data: IUserListItem[];
  loading: boolean;
}

const UsersTable: FC<IProps> = ({ data, loading }) => {
  const [openInfo, setOpenInfo] = useState(false);
  const [user, setUser] = useState<IUserListItem>({} as IUserListItem);
  const { t } = useTranslation();
  const styles = useStyles();

  const openUserInfo = useCallback((user: IUserListItem) => {
    setUser(user);
    setOpenInfo(true);
  }, []);

  const columns: Array<TableColumn<IUserListItem>> = [
    {
      title: t('admin.users.userName'),
      accessor: 'name',
    },
    {
      title: t('admin.users.login'),
      accessor: 'username',
    },
    {
      title: t('admin.users.phone'),
      accessor: 'phone',
    },
    {
      title: t('admin.users.balance'),
      accessor: 'balance',
    },
    {
      title: t('admin.users.earned'),
      accessor: 'earned',
    },
    {
      title: t('admin.users.withdrawn'),
      accessor: 'withdrawn',
    },
    {
      title: t('admin.users.referralCode'),
      accessor: 'referral_number',
      width: 325,
      renderCell: (row: IUserListItem) => (
        <Flex align="center" justify="space-between">
          {`${row.referral_number.slice(0, 10)}...`}
          <Button
            view="secondary"
            className={styles.moreInfo}
            size="s"
            label={t('admin.users.moreInfo')}
            iconLeft={IconAlert}
            onClick={() => openUserInfo(row)}
          />
        </Flex>
      ),
    },
  ];

  return (
    <>
      <BaseTable data={data} columns={columns} loading={loading} />
      <BaseModal
        title={`${user.username} ${t('admin.users.info')}`}
        isOpen={openInfo}
        setModalOpen={setOpenInfo}
      >
        <UserInfo user={user} />
      </BaseModal>
    </>
  );
};

export default UsersTable;
