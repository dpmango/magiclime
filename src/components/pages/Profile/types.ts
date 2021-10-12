import { IPhoto } from '../../../types/interfaces/common';

export interface IProgramReferral {
  readonly id: number;
  avatar: IPhoto | null;
  name?: string;
}

export interface IProgram {
  readonly program: number;
  is_closed: boolean;
  // background: string;
  // image: string;
  program_label: string;
  matrix_level: number;
  referrals: IProgramReferral[];
  all_levels: number[];
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
