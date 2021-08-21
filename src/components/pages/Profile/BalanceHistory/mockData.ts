interface IColumn {
  title: string;
  accessor: string;
  sortable?: boolean;
}

export const columns: IColumn[] = [
  {
    title: 'ID',
    accessor: 'id',
    sortable: true,
  },
  {
    title: 'Дата',
    accessor: 'date',
    sortable: true,
  },
  {
    title: 'Кошелёк',
    accessor: 'from',
    sortable: false,
  },
  {
    title: 'Сумма',
    accessor: 'fromSum',
    sortable: true,
  },
  {
    title: 'В',
    accessor: 'in',
    sortable: false,
  },
  {
    title: 'Сумма',
    accessor: 'inSum',
    sortable: true,
  },
  {
    title: 'Цена',
    accessor: 'price',
    sortable: true,
  },
  {
    title: 'Статус',
    accessor: 'status',
    sortable: true,
  },
];

interface IContent {
  id: string;
  date: string;
  from: string;
  fromSum: string;
  in: string;
  inSum: string;
  price: string;
  status: string;
}

export const content: IContent[] = [
  {
    id: '1',
    date: '07.05.2021',
    from: 'Из',
    fromSum: '10 mBTC',
    in: 'В',
    inSum: '10 mBTC',
    price: '100 mBTC',
    status: 'Статус',
  },
  {
    id: '2',
    date: '07.05.2021',
    from: 'Из',
    fromSum: '10 mBTC',
    in: 'В',
    inSum: '10 mBTC',
    price: '100 mBTC',
    status: 'Статус',
  },
  {
    id: '3',
    date: '07.05.2021',
    from: 'Из',
    fromSum: '10 mBTC',
    in: 'В',
    inSum: '10 mBTC',
    price: '100 mBTC',
    status: 'Статус',
  },
  {
    id: '4',
    date: '07.05.2021',
    from: 'Из',
    fromSum: '10 mBTC',
    in: 'В',
    inSum: '10 mBTC',
    price: '100 mBTC',
    status: 'Статус',
  },
];
