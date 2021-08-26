import React, { FC, useState } from 'react';
import { Table } from '@consta/uikit/Table';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Typography from '../../../../Common/Typography';

const WebinarsTable: FC<{ data: any[] }> = ({ data }) => {
  const { t } = useTranslation();

  const columns = [
    {
      id: '1',
      title: t('admin.webinarName'),
      accessor: 'name',
      align: 'center',
    },
    {
      id: '2',
      title: t('admin.dateTime'),
      accessor: 'date',
      align: 'center',
      renderCell: (row: any) => (
        <p>{moment(row.date).format('DD.MM.YYYY HH:mm')}</p>
      ),
    },
    {
      id: '3',
      title: t('webinar.city'),
      accessor: 'city',
      align: 'center',
    },
    {
      id: '4',
      title: t('admin.speaker'),
      accessor: 'speaker',
      align: 'center',
    },
    {
      id: '5',
      title: t('admin.link'),
      accessor: 'link',
      renderCell: (row: any) => (
        <a target="_blank" href={row.link} rel="noreferrer">
          <Typography view="link" size="s">
            {t('admin.link')}
          </Typography>
        </a>
      ),
      align: 'center',
    },
  ];

  return (
    <Table
      // @ts-ignore
      columns={columns}
      borderBetweenColumns
      borderBetweenRows
      isResizable
      verticalAlign="center"
      rows={data}
    />
  );
};

export default WebinarsTable;
