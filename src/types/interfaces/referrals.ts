import { IPhoto } from './common';

export interface IAncestor {
  readonly id: number;
  username: string;
}
export interface IReferralTree {
  readonly id?: number;
  username?: string;
  user_id?: number;
  avatar?: {
    image: string | null;
  };
  referrals_count?: number;
  created_at?: string;
  children: IReferralTree[];
  ancestors?: IAncestor[];
  is_clone?: boolean;
  clone_id?: number;
  clone_enabled?: boolean;
  price?: number;
}

export interface IClone {
  readonly id: number;
  username: string;
  user_id: number;
  avatar: IPhoto | null;
  referrals_count: number;
  created_at: string;
}

export interface IReferralTeam {
  readonly id: number;
  username: string;
  avatar?: {
    image: string | null;
  };
  email: string;
  date_joined: Date;
  level: number;
  name: string;
  children: IReferralTeam[];
  ancestors: IAncestor[];
}

export interface IRererralHistory {
  readonly id: number;
  action: number;
  program?: any;
  level?: any;
  node_id?: any;
  date: Date;
  comment: string;
  user: number;
}
