import { IPhoto } from './common';

export interface IUserRating {
  readonly id: number;
  username: string;
  name: string;
  avatar: IPhoto | null;
  league: number;
  experience: number;
  rank: number;
  rank_change: number;
  about?: string | null; // todo - what for ?
}
