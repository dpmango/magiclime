import { IColumn } from './types';

export const columns: IColumn[] = [
  {
    title: 'ID',
    accessor: 'id',
    sortable: false,
  },
  {
    title: 'Дата',
    accessor: 'date',
    sortable: true,
    width: 190,
  },
  {
    title: 'Сумма',
    accessor: 'price',
    sortable: false,
    width: 150,
  },
  {
    title: 'Комментарий',
    accessor: 'comment',
    sortable: true,
    width: 300,
  },
  {
    title: 'Баланс',
    accessor: 'balance',
    sortable: true,
  },
  {
    title: 'Статус',
    accessor: 'status',
    sortable: true,
  },
  {
    title: 'Иконка',
    accessor: 'icon',
    sortable: true,
  },
];
