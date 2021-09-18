import { TableColumn } from '@consta/uikit/Table';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import BaseTable from '../../../../Common/BaseTable';
import { ICourse } from '../types';

interface IProps {
  data: ICourse[];
  loading: boolean;
}

const CoursesTable: FC<IProps> = ({ data, loading }) => {
  const { t } = useTranslation();

  const columns: Array<TableColumn<ICourse>> = [
    {
      title: 'Название курса',
      accessor: 'title',
    },
    {
      title: 'Статус',
      accessor: 'status',
      renderCell: (row: ICourse) => <p>{row.status}</p>,
    },
    {
      title: 'Стоимость',
      accessor: 'price',
      renderCell: (row: ICourse) => <p>{row.price} &#8381;</p>,
    },
    {
      title: 'Купили',
      accessor: 'users_number',
      renderCell: (row: ICourse) => <p>{row.users_number} пользователей</p>,
    },
  ];

  return <BaseTable data={data} columns={columns} loading={loading} />;
};

export default CoursesTable;
