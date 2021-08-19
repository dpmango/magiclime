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
  description: string;
  tags: string[];
  image?: string;
  referrals: IWebinarReferral[];
  author: IWebinarAuthor;
}
