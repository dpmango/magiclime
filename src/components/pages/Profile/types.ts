export interface IProgramReferal {
  readonly id: number;
  avatar: {
    id: number;
    image?: string;
  };
  name?: string;
}

export interface IProgram {
  readonly id: number;
  disabled?: boolean;
  profit: number;
  background: string;
  image: string;
  title: string;
  matrixLevel: number;
  level: number;
  league: string;
  progress: [number, number];
  referals: IProgramReferal[];
  referalsTotal: number;
}

export interface IAchivement {
  readonly id: number;
  title: string;
  compleated: boolean;
}

export interface IActivementsGroups {
  readonly id: number;
  image: string;
  title: string;
  stats: {
    compleated: number;
    total: number;
  };
  list: IAchivement[];
}

export interface IEvent {
  readonly id: number;
  title: string;
}

export interface ICourse {
  readonly id: number;
  image: string;
  tag: string;
  title: string;
  description: string;
  progress: string;
  rate: [number, number];
}

export interface IReferalGroup {
  readonly id: number;
  referal: IReferal;
  referals: IReferal[];
}

export interface IReferal {
  readonly id: number;
  avatar?: string;
  username: string;
  btl: number;
  level: number;
  referalsCount: number;
}
