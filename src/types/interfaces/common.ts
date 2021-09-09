export interface IPhoto {
  readonly id: number;
  image: string;
}

export interface ICategory {
  id: number;
  title: string;
}

export interface IStyleInterface {
  darkmode?: boolean;
}

export interface IAxiosPaginatedResponse<T = any> {
  count: number;
  next: T | null;
  previous: T | null;
  results: T[];
}
