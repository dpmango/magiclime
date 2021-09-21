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
