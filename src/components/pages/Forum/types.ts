import { IPhoto } from 'types/interfaces/common';

export interface ITab {
  id: number;
  slug: string;
  label: string;
}

export interface IForum {
  id: number;
  title: string;
  timestamp: string;
  unread: number;
  author: {
    id: number;
    name: string;
    avatar: string | null;
  };
}

export interface IAnswer {
  id: number;
  timestamp: string;
  author: {
    id: number;
    name: string;
    avatar: IPhoto | null;
  };
  content: string;
}
