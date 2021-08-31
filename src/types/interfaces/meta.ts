export interface ICategory {
  id: number;
  title: string;
}

export interface ICategoryList {
  count?: number;
  next?: number;
  previous?: number;
  results: ICategory[];
}
