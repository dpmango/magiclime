import { IPhoto } from '../../../types/interfaces/common';

interface IWebinarReferral {
  readonly id: number;
  avatar: IPhoto | null;
  name: string;
}

interface IWebinarAuthor {
  name: string;
  avatar?: string;
}

export interface IWebinar {
  readonly id: number;
  title: string;
  categories: Array<{ id: number; title: string }>;
  image?: string;
  date: string;
  speakers: ISpeaker[];
  description: string;
  city: {
    id: number;
    title: string;
  };
  connect_url: string;
  referrals: IWebinarReferral[];
  author: IWebinarAuthor;
}

export interface ISpeaker {
  readonly id: number;
  city: string;
  company: string;
  name: string;
  surname: string;
  avatar: IPhoto;
  description: string;
}
