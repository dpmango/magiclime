export interface ISection {
  id: number;
  module: number;
  compleated: boolean;
  available: boolean;
  current: boolean;
  label: string;
}

export interface IMultipleSelect {
  id: number;
  label: string;
  options: {
    id: number;
    label: string;
  }[];
}

export interface ITask {
  id: number;
  text?: string;
  empty?: boolean;
  multipleSelect?: IMultipleSelect[];
}
