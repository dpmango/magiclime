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

export interface IEvent {
  readonly id: number;
  title: string;
}

export interface ICourse {
  readonly id: number;
  image: IPhoto;
  title: string;
  description: string;
  category: { id: number; title: string };
  subcategory: { id: number; title: string };
  passed: boolean;
  passed_chapters: number;
  rate: [number, number];
}
