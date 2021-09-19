export interface IColumn {
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
