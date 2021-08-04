export interface ICourse {
  readonly id: number;
  category: number;
  type: string;
  title: string;
  duration: number;
  image: string;
}

export interface IType {
  id: number;
  label: string;
}
