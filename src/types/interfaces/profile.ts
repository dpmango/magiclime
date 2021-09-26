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
export interface IEvent {
  readonly id: number;
  user: number;
  title: string;
  description?: string;
  event_type: number;
  date: Date;
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
  balance: number;
  program?: any;
  status?: any;
  from_ip?: any;
  comment: string;
  reason: number;
  executor: number;
  to_user?: any;
}

export interface IBonuseHistory {
  readonly id: number;
  date: Date;
  action: number;
  from_purse?: any;
  to_purse?: any;
  amount: number;
  balance: number;
  program?: any;
  status?: any;
  from_ip?: any;
  comment: string;
  reason: number;
  executor: number;
  to_user?: any;
}

export interface IApplicationUser {
  id: number;
  username: string;
  email: string;
  phone?: string;
  name: string;
}
export interface IApplicationOutcoming {
  id: number;
  from_user: number;
  to_user: IApplicationUser;
  level: number;
  program: number;
}

export interface IApplicationIncoming {
  id: number;
  from_user: IApplicationUser;
  to_user: number;
  level: number;
  program: number;
}

export interface IApplicationsDisplay {
  id: number;
  login: string;
  name: string;
  email: string;
  phone?: string;
}
