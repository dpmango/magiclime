interface IColumn {
  title: string;
  accessor: string;
  sortable?: boolean;
  width?: number;
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
    title: 'Сумма',
    accessor: 'price',
    sortable: false,
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

interface IContent {
  id: string;
  date: string;
  price: string;
  comment: string;
  balance: string;
  status: string;
  icon: string;
}

export const content: IContent[] = [
  {
    id: '1',
    date: '15.05.2021',
    price: '10.00 Bl',
    comment: '',
    balance: '990.00 Bl',
    status: 'В процессе',
    icon: '',
  },
  {
    id: '2',
    date: '12.05.2021',
    price: '100.00 Bl',
    comment: 'Пользователь сменил ip-адрес',
    balance: '890.00 Bl',
    status: 'Выведено',
    icon: '',
  },
  {
    id: '3',
    date: '10.03.2021',
    price: '10.00 Bl',
    comment: '-',
    balance: '990.00 Bl',
    status: 'В процессе',
    icon: '',
  },
];
