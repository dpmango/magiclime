import { IPhoto } from '../../../types/interfaces/common';

interface IWebinarReferral {
  readonly id: number;
  username: string;
  avatar: IPhoto;
  name: string;
  email: string;
  about: string;
}

interface IWebinarAuthor {
  readonly id: number;
  name: string;
  avatar: IPhoto;
}

export interface IWebinar {
  readonly id: number;
  title: string;
  categories: Array<{ id: number; title: string }>;
  banner: string;
  date: string;
  speakers: ISpeaker[];
  description: string;
  city: {
    id: number;
    title: string;
  } | null;
  connect_url: string;
  participants: IWebinarReferral[];
  creator: IWebinarAuthor | null;
}

export interface ISpeaker {
  readonly id: number;
  city: string;
  company: string;
  name: string;
  avatar: IPhoto;
  description: string;
}

export interface IFilters {
  search: string;
  categories: number[];
  city: number;
}
