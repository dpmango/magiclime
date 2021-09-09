import { IPhoto } from '../../../types/interfaces/common';

export interface INewsItem {
  readonly id: number;
  theme: {
    readonly id: number;
    title: string;
  };
  title: string;
  description: string;
  date: string;
  creator: {
    readonly id: number;
    name: string;
    avatar: IPhoto | null;
    category: {
      readonly id: number;
      title: string;
    };
  };
  image: string;
}
