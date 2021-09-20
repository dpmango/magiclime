export interface IPhoto {
  readonly id: number;
  image: string;
}

export interface ICategory {
  id: number;
  title: string;
}

export interface ITab {
  id: number;
  slug: string;
  label: string;
}

export interface ISelectOption {
  id: number;
  label: string;
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
