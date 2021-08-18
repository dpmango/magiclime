import React, { FC } from 'react';
import { Table } from '@consta/uikit/Table';
import { useTranslation } from 'react-i18next';
import { IUserListItem } from '../types';
import moment from 'moment';
import { Button } from '@consta/uikit/Button';
import { IconCancel } from '@consta/uikit/IconCancel';
import Flex from '../../../../Common/Flex';
import useStyles from '../styles';
import { blockUser } from '../../../../../utils/api/routes/admin';

const UsersTable: FC<{ data: IUserListItem[] }> = ({ data }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const banUser = (id: string) => {
    // blockUser(id)
    //     .then(() => {})
  };

  const columns = [
    {
      id: '1',
      title: t('admin.userName'),
      accessor: 'name',
      align: 'center',
    },
    {
      id: '2',
      title: t('admin.login'),
      accessor: 'username',
      align: 'center',
    },
    {
      id: '3',
      title: t('admin.registrationDate'),
      accessor: 'date_joined',
      renderCell: (row: IUserListItem) => (
        <p>{moment(row.date_joined).format('L')}</p>
      ),
      align: 'center',
    },
    {
      id: '4',
      title: t('admin.phone'),
      accessor: 'phone',
      align: 'center',
    },
    {
      id: '5',
      title: t('admin.email'),
      accessor: 'email',
      align: 'center',
    },
    {
      id: '6',
      title: t('admin.referralCode'),
      accessor: 'referral_number',
      align: 'center',
    },
    {
      id: '7',
      title: t('admin.inviting'),
      accessor: 'parent_username',
      align: 'center',
      renderCell: (row: IUserListItem) => (
        <Flex align={'center'} justify={'space-between'}>
          {row.parent_username}
          <Button
            view={'clear'}
            className={styles.cancelButton}
            size={'s'}
            onClick={() => banUser(row.id)}
            iconLeft={IconCancel}
          />
        </Flex>
      ),
    },
  ];

  return (
    <Table
      //@ts-ignore
      columns={columns}
      borderBetweenColumns={true}
      borderBetweenRows={true}
      //isResizable={true}
      verticalAlign={'center'}
      rows={data}
    />
  );
};

export default UsersTable;
