import { IPhoto } from 'types/interfaces/common';

export interface IBalance {
  readonly id: number;
  bitlimes: number;
  total_earned: number;
  total_output: number;
  available_for_withdrawal: number;
  user?: number;
}
export interface IAchievementGroup {
  readonly id: number;
  title: string;
  image?: IPhoto;
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
  image?: IPhoto;
  list: IAchievement[];
  stats: {
    completed: number;
    total: number;
  };
}
