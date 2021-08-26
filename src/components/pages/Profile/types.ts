import { IPhoto } from '../../../types/interfaces/common';

export interface IProgramReferral {
  readonly id: number;
  avatar: IPhoto;
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
  referrals: IProgramReferral[];
  referralsTotal: number;
}

// achievements
export interface IAchievementGroup {
  readonly id: number;
  title: string;
  image?: string;
}
export interface IAchievement {
  readonly id: number;
  title: string;
  opened: boolean;
  group?: IAchievementGroup;
}

export interface IActivementsGrouped {
  readonly id: number;
  title: string;
  image?: string;
  list: IAchievement[];
  stats: {
    completed: number;
    total: number;
  };
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
