import { IReferralTree } from 'types/interfaces/referrals';

export type ReferralsPayloadType = {
  id?: number | string;
  level: number;
  program: number;
  successCallback?: (res: IReferralTree) => void;
  errorCallback?: () => void;
};

export type TeamPayloadType = {
  id?: number | string;
  successCallback?: (res: IReferralTree) => void;
  errorCallback?: () => void;
};
