import { TableColumn } from '@consta/uikit/Table';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import BaseTable from '../../../../Common/BaseTable';
import Typography from '../../../../Common/Typography';
import { IWebinar } from '../types';

interface IProps {
  data: IWebinar[];
  loading: boolean;
}

const WebinarsTable: FC<IProps> = ({ data, loading }) => {
  const { t } = useTranslation();

  const columns: Array<TableColumn<IWebinar>> = [
    {
      title: t('admin.webinars.webinarName'),
      accessor: 'title',
    },
    {
      title: t('admin.webinars.dateTime'),
      accessor: 'date',
      renderCell: (row: IWebinar) => (
        <p>{moment(row.date).format('DD.MM.YYYY HH:mm')}</p>
      ),
    },
    {
      title: t('webinar.city'),
      accessor: 'city',
      renderCell: (row: IWebinar) => <p>{row.city.title}</p>,
    },
    {
      title: t('admin.webinars.speakers'),
      accessor: 'speaker',
    },
    {
      title: t('admin.webinars.link'),
      accessor: 'zoom_url',
      renderCell: (row: IWebinar) => (
        <a target="_blank" href={row.zoom_url} rel="noreferrer">
          <Typography view="link" size="s">
            {t('admin.webinars.link')}
          </Typography>
        </a>
      ),
    },
  ];

  return <BaseTable data={data} columns={columns} loading={loading} />;
};

export default WebinarsTable;
