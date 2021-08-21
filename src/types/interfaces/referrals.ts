export interface IAncestor {
  readonly id: number;
  user: {
    id: number;
    username: string;
  };
}
export interface IReferralTree {
  readonly id: number;
  username: string;
  avatar: {
    image: string | null;
  };
  referrals_count: number;
  // TODO - gain
  // TODO - level
  children: IReferralTree[];
  ancestors: IAncestor[];
}
