export interface IColumn {
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
    width: 100,
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
