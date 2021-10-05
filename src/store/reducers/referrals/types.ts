import { IReferralTree, IReferralTeam } from 'types/interfaces/referrals';

export type ReferralsPayloadType = {
  id?: number | string;
  level: number;
  program: number;
  successCallback?: (res: IReferralTree) => void;
  errorCallback?: () => void;
};

export type TeamPayloadType = {
  id: string | number;
  program: number;
  search: string;
  successCallback?: (res: IReferralTeam) => void;
  errorCallback?: () => void;
};
