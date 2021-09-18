interface IColumn {
  title: string;
  accessor: string;
  sortable?: boolean;
}

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
  },
  {
    title: 'Действие',
    accessor: 'action',
    sortable: false,
  },
];

interface IContent {
  id: string;
  date: string;
  action: string;
}

export const content: IContent[] = [
  {
    id: '1',
    date: '15.05.2021',
    action: 'Покупка места в матрице id 188',
  },
  {
    id: '2',
    date: '12.05.2021',
    action: 'Подписался на вебинар',
  },
];
