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
  tags: string[];
  image?: string;
  date: '2021-09-01T12:45:58.540Z';
  speaker: 'string';
  city: {
    id: 0;
    title: 'string';
  };
  zoom_url: 'string';
  referrals: IWebinarReferral[];
  author: IWebinarAuthor;
}
