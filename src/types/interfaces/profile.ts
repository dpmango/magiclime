import { IPhoto } from 'types/interfaces/common';

export interface IBalance {
  readonly id: number;
  bitlimes: number;
  total_earned: number;
  total_output: number;
  available_for_withdrawal: number;
  bonus_points: number;
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

export interface IBalanceHistory {
  readonly id: number;
  date: Date;
  action: number;
  from_purse?: any;
  to_purse?: any;
  amount: number;
  bonus_amount: number;
  status?: any;
  from_ip?: any;
  comment: string;
  reason: number;
  is_change_coins: boolean;
  is_change_bonus: boolean;
  executor: number;
  to_user?: any;
}
