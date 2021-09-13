import { IPhoto } from './common';

export interface IForumMember {
  avatar?: string;
  username: string;
}

export interface IForum {
  readonly id: number;
  name: string;
  description: string;
  topics_count: number;
  members: IForumMember[];
  last_activity_date?: any;
  last_answer?: {
    author_avatar?: string;
    text: string;
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
