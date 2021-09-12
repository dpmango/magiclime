import { IPhoto } from './common';

export interface IForum {
  readonly id: number;
  name: string;
  description: string;
  topics_count: number;
  members: any[];
  last_activity_date?: any;
  last_answer?: {
    avatar: string;
    content: string;
  };
  image: IPhoto;
}

export interface ITopic {
  readonly id: number;
  name: string;
  description: string;
  topics_count: number;
  members: any[];
  last_activity_date?: any;
}
