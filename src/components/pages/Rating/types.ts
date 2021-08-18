import { IPhoto } from 'types/interfaces/common';

export interface IUser {
  id: number;
  name: string;
  avatar: IPhoto | null;
  league: {
    icon?: string | null;
    title: string;
  };
  stat: string;
}
