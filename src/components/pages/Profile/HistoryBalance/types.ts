export interface IColumn {
  title: string;
  accessor: string;
  sortable?: boolean;
  width?: number;
}

export interface IContentRows {
  id: string;
  date: string;
  price: string;
  comment: string;
  balance: string;
  status: string;
  icon: string;
}
